/**
 * Data & AI Dashboard Gallery — scroll-pinned cylindrical gallery.
 * Every work is sliced onto one shared concave surface.
 */
(function () {
  "use strict";

  var WORKS = [
    {
      date: "2026.05",
      title: "Sentiment Intelligence Weekly",
      caption: "Overview · KOLs · Anti-Cheat Monitor",
      privacy: ["full-shot-top", "default"],
      images: [
        "photo/ai-boards/8bp-sentiment-dashboard.png",
        "photo/ai-boards/8bp-sentiment-list.png"
      ]
    },
    {
      date: "2026.05",
      title: "Community Sentiment Weekly",
      caption: "Overview · Channel · Language · Content",
      privacy: "full-top",
      backdropDim: true,
      images: [
        "photo/ai-boards/arrows-sentiment-dashboard.png",
        "photo/ai-boards/arrows-sentiment-detail.png"
      ]
    },
    {
      date: "2026.04",
      title: "UGC Content Dashboard",
      caption: "Content portfolio · AI summaries",
      privacy: "tall",
      images: [
        "photo/ai-boards/ugc-dashboard-list.png",
        "photo/ai-boards/ugc-dashboard-detail.png"
      ]
    },
    {
      date: "2026.04",
      title: "Mobile Market Scouting",
      caption: "Download trends · Soft launch ranking",
      privacy: ["none", "default"],
      backdropDim: true,
      images: [
        "photo/ai-boards/mobile-scouting-overview.png",
        "photo/ai-boards/mobile-scouting-ranking.png"
      ]
    },
    {
      date: "2026.03",
      title: "PC Market Scouting",
      caption: "Wishlist alerts · Table & card views",
      images: [
        "photo/ai-boards/steam-scouting-list.png",
        "photo/ai-boards/steam-scouting-market.png"
      ]
    },
    {
      date: "2026.02",
      title: "Market Heatmap DEMO",
      caption: "Global heat · Hot clips & tags",
      privacy: "brand-small",
      images: ["photo/ai-boards/gamesignal-map.png"]
    }
  ];

  var root = document.getElementById("ai-works");
  if (!root) return;

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var N = WORKS.length;
  var STEPS = N + 1;
  var STRIPS_PER_WORK = 32;
  var panels = [];
  var active = -1;
  var targetPhase = 0;
  var currentPhase = 0;
  var raf = 0;
  var bdFlip = false;
  var snapTimer = 0;

  root.style.setProperty("--ai-n", String(STEPS));
  root.innerHTML =
    '<div class="ai-pin">' +
      '<div class="ai-scene">' +
        '<div class="ai-backdrop" id="ai-backdrop-a"></div>' +
        '<div class="ai-backdrop" id="ai-backdrop-b"></div>' +
        '<div class="ai-grid"></div>' +
        '<div class="ai-stage" id="ai-stage" aria-hidden="true"></div>' +
      "</div>" +
      '<div class="ai-hud">' +
        '<p class="ai-kicker"><span>Data &amp; AI Dashboard Gallery</span><span class="ai-count" id="ai-count">01 / 0' + N + "</span></p>" +
        '<p class="ai-date" id="ai-date"></p>' +
        '<h2 class="ai-title" id="ai-title" aria-live="polite"></h2>' +
        '<p class="ai-caption" id="ai-caption"></p>' +
      "</div>" +
      '<section class="ai-contact" id="ai-contact" aria-label="Contact Vera">' +
        '<div class="ai-contact-inner">' +
          '<p class="ai-contact-kicker">Contact · ' + pad(STEPS) + " / " + pad(STEPS) + "</p>" +
          '<h2 class="ai-contact-title">Let&rsquo;s make something useful.</h2>' +
          '<div class="ai-contact-links">' +
            '<a class="ai-contact-link" href="mailto:Yixing.Verali@gmail.com"><span>Email</span><span>Yixing.Verali@gmail.com</span></a>' +
            '<a class="ai-contact-link" href="https://www.linkedin.com/in/yixing-vera-li/" target="_blank" rel="noopener"><span>LinkedIn</span><span>Connect</span></a>' +
            '<a class="ai-contact-link" href="https://github.com/VeraLi0710" target="_blank" rel="noopener"><span>GitHub</span><span>VeraLi0710</span></a>' +
            '<a class="ai-contact-link" href="tel:+447437950046"><span>Phone</span><span>+44 7437 950046</span></a>' +
          "</div>" +
        "</div>" +
      "</section>" +
      '<p class="ai-hint">scroll to explore</p>' +
    "</div>";

  var stage = document.getElementById("ai-stage");
  var bdA = document.getElementById("ai-backdrop-a");
  var bdB = document.getElementById("ai-backdrop-b");
  var elDate = document.getElementById("ai-date");
  var elTitle = document.getElementById("ai-title");
  var elCap = document.getElementById("ai-caption");
  var elCount = document.getElementById("ai-count");
  var hud = root.querySelector(".ai-hud");
  var hint = root.querySelector(".ai-hint");
  var contact = document.getElementById("ai-contact");

  function pad(number) {
    return (number < 10 ? "0" : "") + number;
  }

  function splitChars(text, element, baseDelay) {
    element.innerHTML = "";
    element.classList.remove("is-in");
    Array.from(text).forEach(function (character, index) {
      var span = document.createElement("span");
      span.className = "ai-ch";
      span.textContent = character === " " ? "\u00A0" : character;
      span.style.transitionDelay = (baseDelay + index * 22) + "ms";
      element.appendChild(span);
    });
    void element.offsetWidth;
    element.classList.add("is-in");
  }

  var privacyImageCache = {};

  function getPrivacySpec(mode) {
    if (mode === "none") return null;
    if (mode === "brand-small") return { width: 0.1, height: 0.05, light: false };
    if (mode === "full-shot-top") return { width: 1, height: 0.17, light: false };
    if (mode === "full-top") return { width: 1, height: 0.115, light: true };
    if (mode === "mobile-wide") return { width: 0.56, height: 0.18, light: false };
    if (mode === "tall") return { width: 0.27, height: 0.15, light: false };
    return { width: 0.27, height: 0.105, light: false };
  }

  function createPrivacyImage(source, mode, callback) {
    var key = source + "::" + mode;
    var cached = privacyImageCache[key];
    if (cached && cached.url) {
      callback(cached.url);
      return;
    }
    if (cached) {
      cached.callbacks.push(callback);
      return;
    }

    cached = privacyImageCache[key] = { callbacks: [callback], url: "" };
    var image = new Image();
    image.onload = function () {
      var spec = getPrivacySpec(mode);
      var width = image.naturalWidth;
      var height = image.naturalHeight;
      var blur = Math.max(18, Math.round(width * 0.018));
      var padding = blur * 3;
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");
      var reduced = document.createElement("canvas");
      var reducedContext = reduced.getContext("2d");
      var blurred = document.createElement("canvas");
      var blurredContext = blurred.getContext("2d");

      canvas.width = width;
      canvas.height = height;
      reduced.width = Math.max(24, Math.round(width * 0.03));
      reduced.height = Math.max(24, Math.round(height * 0.03));
      blurred.width = width + padding * 2;
      blurred.height = height + padding * 2;
      context.drawImage(image, 0, 0);
      reducedContext.drawImage(image, 0, 0, reduced.width, reduced.height);
      blurredContext.imageSmoothingEnabled = true;
      blurredContext.imageSmoothingQuality = "high";
      blurredContext.filter =
        "blur(" + blur + "px) saturate(42%) brightness(1.04)";
      blurredContext.drawImage(
        reduced,
        0, 0, reduced.width, reduced.height,
        padding, padding, width, height
      );

      context.save();
      context.beginPath();
      var maskWidth = Math.min(width, width * spec.width + blur * 1.5);
      var maskHeight = Math.min(height, height * spec.height + blur * 1.5);
      context.rect(0, 0, maskWidth, maskHeight);
      context.clip();
      context.drawImage(
        blurred,
        padding, padding, width, height,
        0, 0, width, height
      );
      context.fillStyle = spec.light
        ? "rgba(205, 214, 228, .18)"
        : "rgba(174, 186, 204, .2)";
      context.fillRect(0, 0, maskWidth, maskHeight);
      context.restore();

      canvas.toBlob(function (blob) {
        if (!blob) return;
        cached.url = URL.createObjectURL(blob);
        cached.callbacks.splice(0).forEach(function (ready) {
          ready(cached.url);
        });
      }, "image/webp", 0.9);
    };
    image.src = encodeURI(source);
  }

  function buildStage() {
    stage.innerHTML = "";
    panels = WORKS.map(function (work, workIndex) {
      var shotCount = work.images.length;
      var stripsPerShot = STRIPS_PER_WORK / shotCount;
      var strips = [];

      for (var stripIndex = 0; stripIndex < STRIPS_PER_WORK; stripIndex += 1) {
        var shotIndex = Math.min(shotCount - 1, Math.floor(stripIndex / stripsPerShot));
        var localStrip = stripIndex - shotIndex * stripsPerShot;
        var localProgress = (localStrip + 0.5) / stripsPerShot;
        var privacyMode = Array.isArray(work.privacy)
          ? work.privacy[shotIndex]
          : (work.privacy || "default");
        var privacySpec = getPrivacySpec(privacyMode);
        var isFullTop = privacyMode === "full-top";
        var isPrivate = privacySpec && localProgress <= privacySpec.width;
        var isPrivacyEnd = isPrivate &&
          (localStrip + 1.5) / stripsPerShot > privacySpec.width;
        var strip = document.createElement("span");

        strip.className = "ai-cylinder-slice";
        if (stripIndex === 0) strip.classList.add("is-first");
        if (stripIndex === STRIPS_PER_WORK - 1) strip.classList.add("is-last");
        if (isPrivate) strip.classList.add("is-private");
        if (isPrivate && localStrip === 0) strip.classList.add("is-private-start");
        if (isPrivacyEnd) strip.classList.add("is-private-end");
        if (isFullTop) strip.classList.add("is-private-light");
        strip.dataset.work = String(workIndex);
        strip.dataset.strip = String(stripIndex);
        strip.style.backgroundImage = 'url("' + encodeURI(work.images[shotIndex]) + '")';
        strip.style.backgroundSize = (stripsPerShot * 100) + "% 100%";
        strip.style.backgroundPosition =
          (stripsPerShot === 1 ? 0 : localStrip / (stripsPerShot - 1) * 100) + "% 50%";
        if (isPrivate) {
          strip.style.setProperty("--privacy-height", (privacySpec.height * 100) + "%");
        }
        stage.appendChild(strip);
        strips.push(strip);
      }

      work._privacyImages = work._privacyImages || [];
      work.images.forEach(function (source, shotIndex) {
        var mode = Array.isArray(work.privacy)
          ? work.privacy[shotIndex]
          : (work.privacy || "default");
        if (!getPrivacySpec(mode)) return;
        createPrivacyImage(source, mode, function (url) {
          var start = shotIndex * stripsPerShot;
          var shotStrips = strips.slice(start, start + stripsPerShot);
          work._privacyImages[shotIndex] = url;
          shotStrips.forEach(function (strip) {
            strip.style.backgroundImage = 'url("' + url + '")';
            if (strip.classList.contains("is-private")) {
              strip.classList.add("is-private-ready");
            }
          });
          if (active === workIndex && shotIndex === 0) {
            var currentBackdrop = root.querySelector(".ai-backdrop.is-on");
            if (currentBackdrop) currentBackdrop.style.backgroundImage = 'url("' + url + '")';
          }
        });
      });

      return strips;
    });
  }

  function setBackdrop(index) {
    var source = WORKS[index]._privacyImages && WORKS[index]._privacyImages[0]
      ? WORKS[index]._privacyImages[0]
      : encodeURI(WORKS[index].images[0]);
    var url = 'url("' + source + '")';
    var next = bdFlip ? bdA : bdB;
    var previous = bdFlip ? bdB : bdA;
    next.style.backgroundImage = url;
    next.classList.toggle("ai-backdrop--dim", Boolean(WORKS[index].backdropDim));
    next.classList.add("is-on");
    previous.classList.remove("is-on");
    bdFlip = !bdFlip;
  }

  function setHud(index) {
    var work = WORKS[index];
    elCount.textContent = pad(index + 1) + " / " + pad(N);
    elDate.textContent = work.date;
    splitChars(work.title, elTitle, 30);
    splitChars(work.caption, elCap, 90);
    setBackdrop(index);
  }

  function readProgress() {
    var rect = root.getBoundingClientRect();
    var total = root.offsetHeight - window.innerHeight;
    if (total <= 0) return 0;
    return Math.max(0, Math.min(1, -rect.top / total));
  }

  function layoutPanels(phase) {
    var viewportWidth = window.innerWidth;
    var narrow = viewportWidth < 820;
    var heroWidth = Math.min(narrow ? viewportWidth * 0.94 : viewportWidth * 0.6, 1080);
    var panelArc = (narrow ? 68 : 78) * Math.PI / 180;
    var slotAngle = (narrow ? 78 : 84) * Math.PI / 180;
    var sliceAngle = panelArc / STRIPS_PER_WORK;
    var radius = heroWidth / (2 * Math.sin(panelArc / 2));
    var sliceWidth = 2 * radius * Math.tan(sliceAngle / 2) + 1.2;
    var panelHeight = Math.min(heroWidth / 1.9, window.innerHeight * (narrow ? 0.5 : 0.56));
    var contactProgress = Math.max(0, Math.min(1, phase - (N - 1)));

    root.style.setProperty("--ai-slice-width", sliceWidth.toFixed(2) + "px");
    root.style.setProperty("--ai-panel-height", panelHeight.toFixed(2) + "px");

    panels.forEach(function (strips, index) {
      var distance = index - phase;
      var absolute = Math.abs(distance);
      var opacity = absolute <= 1.18 ? 1 - absolute * 0.18 : Math.max(0, 1.15 - absolute);
      var workY = -absolute * (narrow ? 4 : 6) + distance * (narrow ? 24 : 40);

      /* On the contact step, the final board clears toward the upper-left. */
      opacity *= 1 - contactProgress;

      strips.forEach(function (strip, stripIndex) {
        var localTheta = -panelArc / 2 + (stripIndex + 0.5) * sliceAngle;
        var theta = distance * slotAngle + localTheta;
        var x = Math.sin(theta) * radius - contactProgress * heroWidth * 0.3;
        var y = workY - contactProgress * (narrow ? 40 : 70);
        /* Recessed wall: outer strips curve away from the camera into the screen. */
        var z = -(1 - Math.cos(theta)) * radius;
        /* Tangent to x=R·sin(theta), z=-R·(1-cos(theta)) in CSS space. */
        var rotate = theta * 180 / Math.PI;

        strip.style.transform =
          "translate3d(" + x.toFixed(2) + "px, " + y.toFixed(2) + "px, " + z.toFixed(2) + "px) " +
          "rotateY(" + rotate.toFixed(2) + "deg)";
        strip.style.opacity = opacity.toFixed(3);
        strip.style.filter =
          "brightness(" + Math.max(0.46, 1 - absolute * 0.28).toFixed(3) + ") " +
          "saturate(" + Math.max(0.66, 1 - absolute * 0.16).toFixed(3) + ")";
        strip.style.visibility = absolute > 1.48 ? "hidden" : "visible";
      });
    });

    hud.style.opacity = String(1 - contactProgress);
    hud.style.transform = "translateY(" + (-28 * contactProgress).toFixed(1) + "px)";
    hint.style.opacity = String(1 - contactProgress);
    contact.style.opacity = String(contactProgress);
    contact.style.transform = "translateY(" + (9 * (1 - contactProgress)).toFixed(2) + "vh)";
    contact.style.visibility = contactProgress > 0.02 ? "visible" : "hidden";
    contact.style.pointerEvents = contactProgress > 0.92 ? "auto" : "none";
    bdA.style.opacity = String((bdA.classList.contains("is-on") ? (bdA.classList.contains("ai-backdrop--dim") ? 0.48 : 0.64) : 0) * (1 - contactProgress * 0.82));
    bdB.style.opacity = String((bdB.classList.contains("is-on") ? (bdB.classList.contains("ai-backdrop--dim") ? 0.48 : 0.64) : 0) * (1 - contactProgress * 0.82));
  }

  function tick() {
    raf = 0;
    currentPhase += (targetPhase - currentPhase) * (reduce ? 1 : 0.12);
    if (Math.abs(targetPhase - currentPhase) < 0.001) currentPhase = targetPhase;
    layoutPanels(currentPhase);
    if (currentPhase !== targetPhase) raf = requestAnimationFrame(tick);
  }

  function apply() {
    var progress = readProgress();
    var step = Math.round(progress * N);
    targetPhase = progress * N;
    if (!raf) raf = requestAnimationFrame(tick);
    if (step < N && step !== active) {
      active = step;
      setHud(step);
    }
  }

  function scheduleSnap() {
    if (reduce) return;
    clearTimeout(snapTimer);
    snapTimer = setTimeout(function () {
      var progress = readProgress();
      var index = Math.round(progress * N);
      var total = root.offsetHeight - window.innerHeight;
      var targetY = root.offsetTop + (index / N) * total;
      var currentY = window.scrollY || window.pageYOffset;
      var rect = root.getBoundingClientRect();
      if (Math.abs(currentY - targetY) < 8) return;
      if (rect.top > 40 || rect.bottom < window.innerHeight - 40) return;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }, 110);
  }

  buildStage();
  bdA.style.backgroundImage = 'url("' + encodeURI(WORKS[0].images[0]) + '")';
  bdA.classList.add("is-on");
  setHud(0);
  layoutPanels(0);
  apply();

  window.addEventListener("scroll", function () {
    apply();
    scheduleSnap();
  }, { passive: true });

  window.addEventListener("resize", function () {
    layoutPanels(currentPhase);
  });
})();
