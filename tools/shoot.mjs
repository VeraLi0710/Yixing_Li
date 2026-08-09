/* Measure + screenshot a page over CDP. Node 22 has a global WebSocket, so this
   needs no dependencies.
   usage: node tools/shoot.mjs <url> <out.png> [width] [height] [scrollToSelector] [pre] [probe]
   `pre` runs before capture (e.g. to force a hover state); `probe` runs after
   and has its result printed, which is how console errors get back out. */
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, out, w = "1636", h = "900", sel = "#experience,.exp-section", pre = "", probe = ""] = process.argv.slice(2);
const width = Number(w), height = Number(h);
const PORT = 9333;
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${join(tmpdir(), "cdp-shoot")}`,
  "about:blank",
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function target() {
  for (let i = 0; i < 40; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const page = list.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("chrome did not come up");
}

const ws = new WebSocket(await target());
await new Promise((r) => ws.addEventListener("open", r, { once: true }));

let id = 0;
const pending = new Map();
/* Collected from load onward, so a script that throws during boot still shows
   up — a page can look perfectly fine in a screenshot while its JS is dead. */
const problems = [];
ws.addEventListener("message", (e) => {
  const msg = JSON.parse(e.data);
  if (msg.method === "Runtime.exceptionThrown") {
    const d = msg.params.exceptionDetails;
    problems.push(`${d.text} ${d.exception?.description ?? ""}`.trim());
  }
  if (msg.method === "Log.entryAdded" && msg.params.entry.level === "error") {
    const en = msg.params.entry;
    problems.push(`${en.source}: ${en.text} ${en.url ?? ""}`.trim());
  }
  const p = pending.get(msg.id);
  if (!p) return;
  pending.delete(msg.id);
  msg.error ? p.reject(new Error(msg.error.message)) : p.resolve(msg.result);
});
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const n = ++id;
    pending.set(n, { resolve, reject });
    ws.send(JSON.stringify({ id: n, method, params }));
  });

const evaluate = async (expression) => {
  const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  return r.result.value;
};

await send("Page.enable");
await send("Runtime.enable");
await send("Log.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width, height, deviceScaleFactor: 1, mobile: false,
});

/* REDUCE=1 in the environment flips prefers-reduced-motion, so the branch can
   actually be looked at instead of reasoned about. */
if (process.env.REDUCE) {
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
}
await send("Page.navigate", { url });
await sleep(2500);

/* scroll the experience band into view and let the drift settle */
await evaluate(`document.querySelector(${JSON.stringify(sel)}).scrollIntoView({behavior:'instant',block:'start'})`);
await sleep(1200);

/* optional pre-capture script, e.g. to force a hover state into view */
if (pre) { await evaluate(pre); await sleep(900); }

const rects = await evaluate(`(() => {
  const pick = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    return { w: Math.round(r.width), h: Math.round(r.height),
             x: Math.round(r.x), y: Math.round(r.y) };
  };
  const rail = document.querySelector('.pf-rail');
  return {
    viewport: { w: window.innerWidth, h: window.innerHeight },
    layout:  pick('.exp-layout'),
    feature: pick('.photo-feature'),
    frame:   pick('.pf-frame'),
    rail:    pick('.pf-rail'),
    main:    pick('.exp-main, .exp-timeline, .timeline, .exp-layout > :last-child'),
    thumb:   pick('.pf-thumb'),
    railScrolls: rail ? rail.scrollHeight > rail.clientHeight + 1 : null,
    railClientH: rail ? rail.clientHeight : null,
    railScrollH: rail ? rail.scrollHeight : null,
  };
})()`);
if (!probe) console.log(JSON.stringify(rects, null, 2));

if (probe) console.log("probe:", JSON.stringify(await evaluate(probe), null, 2));

const shot = await send("Page.captureScreenshot", { format: "png" });
writeFileSync(out, Buffer.from(shot.data, "base64"));
console.log("wrote", out);
console.log(problems.length ? "PAGE ERRORS:\n" + problems.join("\n") : "page errors: none");

ws.close();
chrome.kill();
