/**
 * Projects Section
 * Horizontal-scroll editorial rows · tall cinematic cards · full-screen modal
 */
(function () {
  "use strict";

  /* ─── Project data ───────────────────────────────────────── */
  /* coverBg = layered CSS background for the card cover art    */
  var CATEGORIES = [
    {
      num: "01",
      name: "AI & Predictive Analytics",
      desc: "Empowering business decisions and urban sustainability through machine learning and large-scale algorithms.",
      projects: [
        {
          id: "cdrc-virgin",
          title: "Predictive Intelligence x Virgin Media O2",
          sub: "A 100M+ record ML pipeline for telecom network optimization.",
          tag: "Machine Learning / Big Data",
          cat: "AI & Predictive Analytics",
          award: false, accent: "#22d3ee",
          coverBg: [
            /* diagonal circuit-trace lines */
            "repeating-linear-gradient(120deg, rgba(34,211,238,.06) 0, rgba(34,211,238,.06) 1px, transparent 1px, transparent 42px)",
            "repeating-linear-gradient(30deg,  rgba(34,211,238,.04) 0, rgba(34,211,238,.04) 1px, transparent 1px, transparent 42px)",
            /* glow cores */
            "radial-gradient(ellipse 75% 60% at 70% 30%, rgba(34,211,238,.45) 0%, transparent 55%)",
            "radial-gradient(ellipse 50% 70% at 20% 75%, rgba(14,116,144,.35) 0%, transparent 50%)",
            "linear-gradient(155deg, #010d12 0%, #032030 50%, #043545 100%)"
          ].join(","),
          coverBgSize: "auto, auto, auto, auto, auto",
          detail: "A research collaboration with CDRC and Virgin Media O2 to engineer predictive ML pipelines on 100M+ broadband records. Spatial features from MSOA-level census, retail gravity models and network topology were fused to forecast telecom infrastructure demand and optimize field service routing.",
          pdfUrl: "https://geods.ac.uk/wp-content/uploads/2025/10/Yixing-Li.pdf"
        },
        {
          id: "cusp-dive",
          title: "EV-olution at CUSP London",
          sub: "Award-winning spatial-temporal modelling for urban EV infrastructure.",
          tag: "Spatial-Temporal AI / Policy",
          cat: "AI & Predictive Analytics",
          award: true, awardLabel: "Best Overall Award 🏆",
          accent: "#a78bfa",
          coverBg: [
            /* radial pulse rings */
            "radial-gradient(circle at 50% 45%, transparent 18%, rgba(167,139,250,.08) 20%, transparent 22%, rgba(167,139,250,.06) 32%, transparent 34%, rgba(167,139,250,.05) 46%, transparent 48%)",
            /* conic scan lines */
            "conic-gradient(from 200deg at 50% 42%, transparent 0deg, rgba(167,139,250,.1) 18deg, transparent 36deg, rgba(167,139,250,.07) 72deg, transparent 90deg, rgba(167,139,250,.05) 180deg, transparent 220deg, rgba(167,139,250,.1) 270deg, transparent 310deg, rgba(167,139,250,.07) 340deg, transparent 360deg)",
            /* glow */
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(167,139,250,.55) 0%, transparent 55%)",
            "linear-gradient(155deg, #0a0218 0%, #28085e 55%, #42088a 100%)"
          ].join(","),
          detail: "Awarded Best Overall at the CUSP London Data Dive. Modelled EV charging demand using spatial-temporal regression across London's LSOA network, forecasting infrastructure gaps to inform TfL and local authority investment strategy for the 2030 ZEV mandate.",
          photo: "/cusp/winnnersphoto.png",
          embed: "https://verali0710.github.io/CUSP_project001/interactive_map_with_all_variables.html",
          kclUrl: "https://www.kcl.ac.uk/news/students-from-around-the-world-develop-solutions-for-greener-cities-in-data-competition"
        }
      ]
    },
    {
      num: "02",
      name: "Data Products & Interactive Experiences",
      desc: "Transforming complex datasets into intuitive, user-facing web applications and visual narratives.",
      projects: [
        {
          id: "flood2021",
          title: "Watershed: 2021 Central Europe Flood",
          sub: "An interactive spatial data product evaluating disaster resilience and socio-economic impact.",
          tag: "Web GIS / Interactive App",
          cat: "Data Products & Interactive Experiences",
          award: false, accent: "#38bdf8",
          coverBg: [
            /* grid */
            "repeating-linear-gradient(0deg,  rgba(56,189,248,.055) 0, rgba(56,189,248,.055) 1px, transparent 1px, transparent 36px)",
            "repeating-linear-gradient(90deg, rgba(56,189,248,.055) 0, rgba(56,189,248,.055) 1px, transparent 1px, transparent 36px)",
            /* glows */
            "radial-gradient(ellipse 80% 70% at 30% 60%, rgba(56,189,248,.5) 0%, transparent 52%)",
            "radial-gradient(ellipse 55% 45% at 80% 20%, rgba(14,80,180,.4) 0%, transparent 50%)",
            "linear-gradient(158deg, #03111e 0%, #072d50 55%, #083f68 100%)"
          ].join(","),
          detail: "A full-stack interactive web data product mapping the catastrophic 2021 Central European floods. Layers spatial inundation patterns, affected population density and critical infrastructure vulnerability across flood-hit regions, enabling exploratory analysis of disaster resilience.",
          embed: "https://alteregoyishan.github.io/groupwork_0025/"
        },
        {
          id: "brexit-edu",
          title: "Navigating New Horizons: Brexit & Education",
          sub: "A custom React-based web mapping product tracking international student demographic shifts.",
          tag: "React / UI/UX",
          cat: "Data Products & Interactive Experiences",
          award: false, accent: "#f59e0b",
          coverBg: [
            /* dot grid */
            "radial-gradient(circle, rgba(245,158,11,.22) 1.5px, transparent 1.5px)",
            /* glows */
            "radial-gradient(ellipse 80% 65% at 60% 40%, rgba(245,158,11,.45) 0%, transparent 52%)",
            "radial-gradient(ellipse 50% 60% at 15% 75%, rgba(180,90,10,.3) 0%, transparent 50%)",
            "linear-gradient(158deg, #120900 0%, #3a1800 52%, #521f00 100%)"
          ].join(","),
          coverBgSize: "24px 24px, auto, auto, auto",
          detail: "An independent React web-mapping application tracking the post-Brexit shift in UK university international student demographics. Combines choropleth mapping, scatter plot analysis and dynamic filters to surface how Brexit reshuffled educational migration flows across UK local authorities.",
          embed: "https://verali0710.github.io/03Viz-Brexit-Edu/",
          buttons: [
            { label: "GitHub Source", icon: "github", url: "https://github.com/VeraLi0710/03Viz-Brexit-Edu", primary: false }
          ]
        },
        {
          id: "brexit-viz",
          title: "The Brexit Trade Network",
          sub: "Data-driven storytelling decoding macro-economic shifts through interactive network topography.",
          tag: "Network Analysis / D3.js",
          cat: "Data Products & Interactive Experiences",
          award: false, accent: "#818cf8",
          coverBg: [
            /* node-to-node dot pattern */
            "radial-gradient(circle, rgba(129,140,248,.2) 1.5px, transparent 1.5px)",
            /* glows */
            "radial-gradient(ellipse 75% 65% at 65% 35%, rgba(99,102,241,.55) 0%, transparent 52%)",
            "radial-gradient(ellipse 45% 60% at 20% 72%, rgba(55,30,160,.38) 0%, transparent 50%)",
            "linear-gradient(158deg, #08051c 0%, #180d4a 52%, #221070 100%)"
          ].join(","),
          coverBgSize: "26px 26px, auto, auto, auto",
          detail: "A D3.js scrollytelling experience dissecting the 2016 Brexit referendum through network analysis of trade dependency, regional voting coalitions and demographic correlations. Interactive force-directed graphs reveal the macro-economic tensions encoded in the vote.",
          embed: "https://cihshee.github.io/CASA0003_minnni_project/"
        }
      ]
    }
  ];

  /* ─── Inject CSS ─────────────────────────────────────────── */
  injectCSS(`
    /* ── Category header ──────────────────────────────────── */
    .cat-block { margin-bottom: 5rem; }

    .cat-header {
      display: flex; align-items: center; gap: 2rem;
      margin-bottom: 2.2rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .cat-title-wrap { flex: 1; }
    .cat-name {
      font-family: 'Cormorant Garant', Georgia, serif;
      font-size: clamp(1.8rem, 3.4vw, 2.8rem); font-weight: 400;
      letter-spacing: -.01em; line-height: 1;
      background: linear-gradient(110deg, #eeeef8 0%, #b0b0d8 65%, #8888c0 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .cat-desc { margin-top: .5rem; font-size: .8rem; color: #55556e; font-weight: 300; line-height: 1.65; max-width: 56ch; }

    /* subtle accent accent mark to the left of the title */
    .cat-rule { display: none; }

    /* ── Card row: horizontal scroll ─────────────────────── */
    .card-row-wrap {
      position: relative;
    }
    /* right-edge fade hint */
    .card-row-wrap::after {
      content: '';
      position: absolute; right: 0; top: 0; bottom: 16px;
      width: 72px; pointer-events: none; z-index: 5;
      background: linear-gradient(90deg, transparent, #07070d);
    }
    .card-row {
      display: flex; gap: 1.1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 14px;
      /* thin scrollbar */
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,.1) transparent;
    }
    .card-row::-webkit-scrollbar { height: 3px; }
    .card-row::-webkit-scrollbar-track { background: transparent; }
    .card-row::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 99px; }

    /* ── Individual card ──────────────────────────────────── */
    .p-card {
      flex: 0 0 auto;
      width: 295px; height: 490px;
      border-radius: 14px; overflow: hidden;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,.07);
      background: #0d0d16;
      scroll-snap-align: start;
      display: flex; flex-direction: column;
      transform-style: preserve-3d; will-change: transform;
      opacity: 0; transform: translateY(28px);
      transition:
        opacity .55s ease, transform .55s cubic-bezier(.2,.8,.4,1),
        box-shadow .3s ease, border-color .3s ease;
    }
    .p-card.award { width: 350px; }
    .p-card.revealed { opacity:1; transform:translateY(0); }
    .p-card:hover {
      border-color: rgba(255,255,255,.13);
      box-shadow: 0 12px 40px rgba(0,0,0,.45);
    }

    /* cover – top 60% */
    .p-cover {
      flex: 0 0 60%; position: relative; overflow: hidden;
    }
    .p-cover-inner {
      position: absolute; inset: 0;
      transition: transform .55s cubic-bezier(.25,.8,.25,1);
    }
    .p-card:hover .p-cover-inner { transform: scale(1.06); }

    /* shimmer (mouse-following) */
    .p-shimmer {
      position: absolute; inset: 0; z-index: 2;
      pointer-events: none; opacity: 0; transition: opacity .2s;
    }

    /* bottom vignette on cover */
    .p-cover-vignette {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: linear-gradient(180deg, transparent 45%, rgba(13,13,22,.95) 100%);
    }

    /* tech stack tag chip — glassmorphism, top-left corner */
    .p-tag {
      position: absolute; top: 12px; left: 12px; z-index: 10;
      padding: .22rem .6rem;
      border-radius: 5px;
      background: rgba(7,7,18,.55);
      backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255,255,255,.14);
      font-family: 'JetBrains Mono', monospace;
      font-size: .58rem; font-weight: 400;
      color: rgba(220,220,245,.75);
      letter-spacing: .06em;
      white-space: nowrap;
      pointer-events: none;
    }

    /* info panel – bottom 40% */
    .p-info {
      flex: 1; padding: 1rem 1.2rem 1.25rem;
      display: flex; flex-direction: column; justify-content: flex-end;
      background: #0d0d16;
      border-top: 1px solid rgba(255,255,255,.05);
    }
    .p-award-badge {
      font-size: .63rem; font-weight: 400; color: #d4a84b;
      letter-spacing: .06em; margin-bottom: .4rem;
      display: flex; align-items: center; gap: .35rem;
      font-family: 'JetBrains Mono', monospace; text-transform: uppercase;
    }
    .p-title {
      font-family: 'Cormorant Garant', Georgia, serif;
      font-size: 1.1rem; font-weight: 500; color: #eeeef5;
      letter-spacing: -.01em; line-height: 1.3; margin: 0;
    }
    .p-sub {
      margin: .3rem 0 0; font-size: .71rem;
      color: #5a5a78; font-weight: 300; letter-spacing: .005em;
      line-height: 1.55;
    }
    .p-open-hint {
      margin-top: .7rem;
      font-size: .62rem; font-family: 'JetBrains Mono', monospace;
      color: rgba(255,255,255,.25); letter-spacing: .1em; text-transform: uppercase;
      opacity: 0; transform: translateX(-5px);
      transition: opacity .2s, transform .2s;
    }
    .p-card:hover .p-open-hint { opacity:1; transform:translateX(0); }

    /* ── Full-screen modal ────────────────────────────────── */
    .pm-wrap {
      position: fixed;
      top: var(--nav-h, 60px); left: 0; right: 0; bottom: 0;
      z-index: 150;
      pointer-events: none; opacity: 0;
      transition: opacity .22s ease;
    }
    .pm-wrap.open { pointer-events: all; opacity: 1; }

    .pm-backdrop {
      position: absolute; inset: 0;
      background: rgba(0,0,0,.92);
      backdrop-filter: blur(18px); -webkit-backdrop-filter: blur(18px);
    }

    /* main box – fills space below nav */
    .pm-box {
      position: absolute;
      inset: 0;
      display: flex; flex-direction: column;
      background: #09090f;
      transform: translateY(30px);
      transition: transform .38s cubic-bezier(.22,1,.36,1);
      overflow: hidden;
    }
    .pm-wrap.open .pm-box { transform: translateY(0); }

    /* title bar */
    .pm-titlebar {
      flex: 0 0 52px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 1.5rem;
      border-bottom: 1px solid rgba(255,255,255,.06);
      background: rgba(9,9,15,.9);
      backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
      z-index: 10; position: relative;
    }
    .pm-tb-back {
      display: inline-flex; align-items: center; gap: .4rem;
      padding: .35rem .8rem; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.09); background: transparent;
      color: #80809a; cursor: pointer; font-size: .78rem;
      transition: color .15s, border-color .15s, background .15s;
    }
    .pm-tb-back:hover { color: #eeeef5; border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.04); }
    .pm-tb-back svg { width: 13px; height: 13px; }
    .pm-tb-cat {
      font-family: 'JetBrains Mono', monospace;
      font-size: .62rem; color: #3c3c58; letter-spacing: .14em; text-transform: uppercase;
    }
    .pm-tb-close {
      width: 32px; height: 32px; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.09); background: transparent;
      color: #60607a; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: color .15s, border-color .15s, background .15s;
    }
    .pm-tb-close:hover { color: #eeeef5; border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.04); }
    .pm-tb-close svg { width: 13px; height: 13px; }

    /* hero banner under titlebar */
    .pm-hero {
      flex: 0 0 175px; position: relative; overflow: hidden;
    }
    .pm-hero-bg {
      position: absolute; inset: 0;
      transition: transform 10s linear;
    }
    .pm-hero-bg-texture {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        linear-gradient(rgba(255,255,255,.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.02) 1px, transparent 1px);
      background-size: 28px 28px;
    }
    .pm-hero-vignette {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(0,0,0,.15) 0%, rgba(9,9,15,.92) 100%);
    }
    .pm-hero-content {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 1.2rem clamp(1.5rem,5vw,3rem) 1.8rem;
    }
    .pm-hero-title {
      font-family: 'Cormorant Garant', Georgia, serif;
      font-size: clamp(1.6rem, 4vw, 2.6rem);
      font-weight: 400; letter-spacing: -.01em;
      color: #fff; line-height: 1.1; margin: 0 0 .3rem;
    }
    .pm-hero-sub {
      font-size: .8rem; color: rgba(255,255,255,.45);
      font-weight: 300; margin: 0;
    }
    .pm-hero-award {
      display: inline-flex; align-items: center; gap: .4rem;
      padding: .22rem .7rem; border-radius: 4px;
      background: rgba(212,168,75,.1); border: 1px solid rgba(212,168,75,.25);
      color: #d4a84b; font-size: .68rem; font-weight: 400;
      margin-bottom: .65rem; letter-spacing: .04em;
      font-family: 'JetBrains Mono', monospace;
    }

    /* scrollable body */
    .pm-scroll {
      flex: 1; overflow-y: auto; overflow-x: hidden;
      scroll-behavior: smooth;
    }
    .pm-scroll::-webkit-scrollbar { width: 4px; }
    .pm-scroll::-webkit-scrollbar-track { background: transparent; }
    .pm-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,.1); border-radius: 99px; }

    .pm-body-inner {
      width: 100%;
      padding: 2rem clamp(1.5rem,4vw,3.5rem) 4rem;
    }

    /* ── Modal body elements ──────────────────────────────── */
    .pm-tag {
      display: inline-flex; align-items: center;
      padding: .22rem .7rem; border-radius: 4px;
      background: transparent; border: 1px solid rgba(255,255,255,.08);
      color: #60607a; font-size: .68rem; font-family: 'JetBrains Mono', monospace;
      margin-bottom: .9rem; letter-spacing: .06em; text-transform: uppercase;
    }
    .pm-divider { border: none; border-top: 1px solid rgba(255,255,255,.06); margin: 1rem 0 1.2rem; }
    .pm-detail { font-size: .92rem; color: #8080a0; line-height: 1.9; margin-bottom: 1.4rem; font-weight: 300; }
    /* editorial section label: thin rule + text */
    .pm-section-label {
      display: flex; align-items: center; gap: .9rem;
      font-size: .6rem; font-family: 'JetBrains Mono', monospace;
      color: #3c3c58; letter-spacing: .18em; text-transform: uppercase;
      margin: 2rem 0 1rem;
    }
    .pm-section-label::before {
      content: ''; display: block; height: 1px;
      width: 28px; background: rgba(255,255,255,.08); flex-shrink: 0;
    }

    /* embed iframe */
    .embed-wrap {
      position: relative; width: 100%;
      height: 76svh;
      min-height: 600px;
      border-radius: 10px; overflow: hidden;
      border: 1px solid rgba(255,255,255,.07);
      box-shadow: 0 6px 30px rgba(0,0,0,.4);
      background: #04040a; margin-bottom: .8rem;
    }
    .embed-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    .embed-wrap.pdf-embed {
      height: 82svh;
      min-height: 680px;
    }
    .embed-fallback {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .6rem;
      background: rgba(4,4,10,.9); pointer-events: none; opacity: 0; transition: opacity .3s;
    }
    .embed-wrap.failed .embed-fallback { pointer-events: all; opacity: 1; }
    .embed-note { font-size: .65rem; color: #3c3c58; font-family: 'JetBrains Mono', monospace; }

    /* PDF CTA */
    .pdf-cta {
      display: flex; align-items: center; gap: 1.1rem;
      padding: .95rem 1.2rem; border-radius: 8px;
      background: transparent; border: 1px solid rgba(251,146,60,.18);
      text-decoration: none;
      transition: background .15s, border-color .15s;
      margin: 1.1rem 0;
    }
    .pdf-cta:hover { background: rgba(251,146,60,.06); border-color: rgba(251,146,60,.32); }
    .pdf-icon {
      flex-shrink: 0; width: 38px; height: 38px; border-radius: 7px;
      background: rgba(251,146,60,.08);
      display: flex; align-items: center; justify-content: center;
    }
    .pdf-icon svg { width: 18px; height: 18px; color: #e08040; }
    .pdf-info { flex: 1; }
    .pdf-title { font-size: .88rem; font-weight: 400; color: #ccccdc; margin-bottom: .15rem; }
    .pdf-subtitle { font-size: .7rem; color: #60607a; font-family: 'JetBrains Mono', monospace; letter-spacing: .03em; }
    .pdf-arrow { color: #a07040; font-size: .9rem; flex-shrink: 0; }

    /* CUSP layout */
    .cusp-info-row { margin: 1.6rem 0; }

    .cusp-desc-photo {
      display: grid;
      grid-template-columns: 1fr 260px;
      gap: 1.5rem;
      align-items: start;
    }

    .cusp-photo-sm {
      border-radius: 8px; overflow: hidden;
      aspect-ratio: 4/3;
      background: #12121e;
      border: 1px solid rgba(255,255,255,.07);
      flex-shrink: 0;
    }
    .cusp-photo-sm img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .cusp-photo-sm .photo-ph {
      width: 100%; height: 100%;
      display: flex; align-items: center; justify-content: center;
      color: rgba(255,255,255,.15); font-size: .72rem; font-family: 'JetBrains Mono', monospace;
    }
    @media(max-width:640px){
      .cusp-desc-photo { grid-template-columns: 1fr; }
      .cusp-photo-sm { aspect-ratio: 16/9; }
    }

    /* CUSP PDF button — purple accent */
    .pm-btn.cusp-pdf-btn {
      background: transparent; border: 1px solid rgba(192,132,252,.25);
      color: #b080e8;
    }
    .pm-btn.cusp-pdf-btn:hover {
      background: rgba(192,132,252,.08); border-color: rgba(192,132,252,.42);
    }

    /* buttons */
    .btn-row { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: .9rem; }
    .pm-btn {
      display: inline-flex; align-items: center; gap: .4rem;
      padding: .48rem 1.1rem; border-radius: 6px;
      font-size: .78rem; font-weight: 400; text-decoration: none;
      letter-spacing: .01em;
      transition: background .15s, border-color .15s, color .15s;
      white-space: nowrap;
    }
    .pm-btn.primary {
      background: transparent; border: 1px solid rgba(85,133,240,.3); color: #7aa8f8;
    }
    .pm-btn.primary:hover { background: rgba(85,133,240,.08); border-color: rgba(85,133,240,.5); }
    .pm-btn.ghost {
      background: transparent; border: 1px solid rgba(255,255,255,.09); color: #80809a;
    }
    .pm-btn.ghost:hover { background: rgba(255,255,255,.04); border-color: rgba(255,255,255,.16); color: #eeeef5; }
    .pm-btn.newtab {
      background: transparent; border: 1px solid rgba(255,255,255,.07);
      color: #3c3c58; font-size: .72rem;
    }
    .pm-btn.newtab:hover { color: #80809a; border-color: rgba(255,255,255,.12); }
    .pm-btn.kcl-btn {
      background: transparent; border: 1px solid rgba(180,0,0,.28);
      color: #e07070;
    }
    .pm-btn.kcl-btn:hover { background: rgba(139,0,0,.1); border-color: rgba(220,30,30,.45); }

    /* KCL article preview card */
    .kcl-card {
      display: block; text-decoration: none;
      border-radius: 10px; overflow: hidden;
      border: 1px solid rgba(255,255,255,.07);
      background: #0d0d16;
      transition: border-color .2s, background .2s;
      margin-bottom: .8rem;
    }
    .kcl-card:hover {
      border-color: rgba(192,0,30,.28);
      background: #0f0f1a;
    }
    .kcl-card-banner {
      height: 3px;
      background: linear-gradient(90deg, #a0001a 0%, #7a0000 100%);
    }
    .kcl-card-body { padding: 1.2rem 1.4rem 1.4rem; }
    .kcl-card-meta {
      display: flex; align-items: center; gap: .75rem;
      font-size: .62rem; font-family: 'JetBrains Mono', monospace;
      color: #3c3c58; margin-bottom: .65rem; letter-spacing: .05em;
    }
    .kcl-card-source {
      display: inline-flex; align-items: center; gap: .35rem;
      padding: .14rem .55rem; border-radius: 3px;
      background: rgba(160,0,26,.1); border: 1px solid rgba(160,0,26,.22);
      color: #c06060; font-weight: 400; letter-spacing: .06em; text-transform: uppercase;
    }
    .kcl-card-title {
      font-family: 'Cormorant Garant', Georgia, serif;
      font-size: 1.15rem; font-weight: 400; color: #dddde8;
      letter-spacing: -.01em; line-height: 1.4; margin: 0 0 .65rem;
    }
    .kcl-card-excerpt {
      font-size: .83rem; color: #60607a; line-height: 1.75; margin: 0 0 .9rem; font-weight: 300;
    }
    .kcl-card-quote {
      border-left: 2px solid rgba(160,0,26,.35);
      padding: .5rem .9rem; margin: .7rem 0 .9rem;
      background: rgba(160,0,26,.04); border-radius: 0 6px 6px 0;
    }
    .kcl-card-quote p {
      font-size: .8rem; color: #80809a; line-height: 1.65; margin: 0 0 .3rem;
      font-style: italic; font-weight: 300;
    }
    .kcl-card-quote cite {
      font-size: .66rem; color: #3c3c58; font-style: normal;
      font-family: 'JetBrains Mono', monospace; letter-spacing: .04em;
    }
    .kcl-card-footer {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: .8rem;
      border-top: 1px solid rgba(255,255,255,.05);
      font-size: .7rem; color: #3c3c58;
    }
    .kcl-card-cta {
      display: inline-flex; align-items: center; gap: .35rem;
      padding: .3rem .75rem; border-radius: 5px;
      background: transparent; border: 1px solid rgba(160,0,26,.25);
      color: #c06060; font-weight: 400; font-size: .72rem;
      transition: background .15s, border-color .15s;
    }
    .kcl-card:hover .kcl-card-cta { background: rgba(160,0,26,.1); border-color: rgba(160,0,26,.4); }

    /* accent-tinted rule at bottom of hero */
    .pm-hero::after {
      content: '';
      position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
      background: linear-gradient(90deg, var(--pm-accent, #5585f0), transparent 80%);
      opacity: .5;
    }

    /* responsive */
    @media(max-width:640px){
      .p-card, .p-card.award { width: calc(80vw) !important; height: 420px; }
      .pm-hero { flex: 0 0 175px; }
      .pm-hero-title { font-size: 1.4rem; }
      .cusp-header { grid-template-columns: 1fr; }
      .embed-wrap { min-height: 400px; height: 65svh; }
    }
  `);

  /* ─── Build categories ───────────────────────────────────── */
  var root = document.getElementById("projects-root");
  if (!root) return;

  CATEGORIES.forEach(function (cat) {
    var block = el("div", "cat-block");

    /* header */
    var hdr = el("div", "cat-header");
    hdr.innerHTML =
      '<div class="cat-title-wrap">' +
        '<h2 class="cat-name">' + cat.name + "</h2>" +
        '<p class="cat-desc">' + cat.desc + "</p>" +
      "</div>" +
      '<div class="cat-rule"></div>';
    block.appendChild(hdr);

    /* card row */
    var wrap = el("div", "card-row-wrap");
    var row  = el("div", "card-row");
    cat.projects.forEach(function (p, i) { row.appendChild(buildCard(p, i)); });
    wrap.appendChild(row);
    block.appendChild(wrap);
    root.appendChild(block);
  });

  /* scroll-reveal */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("revealed"); io.unobserve(e.target); }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".p-card").forEach(function (c) { io.observe(c); });

  /* ─── Modal ──────────────────────────────────────────────── */
  var pmWrap = document.createElement("div");
  pmWrap.className = "pm-wrap";
  pmWrap.setAttribute("role", "dialog");
  pmWrap.setAttribute("aria-modal", "true");
  pmWrap.innerHTML =
    '<div class="pm-backdrop"></div>' +
    '<div class="pm-box">' +
      /* title bar */
      '<div class="pm-titlebar">' +
        '<button class="pm-tb-back" id="pm-back">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>' +
          'Back' +
        '</button>' +
        '<span class="pm-tb-cat" id="pm-tb-cat"></span>' +
        '<button class="pm-tb-close" id="pm-close" aria-label="Close">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
        '</button>' +
      '</div>' +
      /* scrollable area */
      '<div class="pm-scroll">' +
        /* hero banner */
        '<div class="pm-hero" id="pm-hero">' +
          '<div class="pm-hero-bg" id="pm-hero-bg">' +
            '<div class="pm-hero-bg-texture"></div>' +
          '</div>' +
          '<div class="pm-hero-vignette"></div>' +
          '<div class="pm-hero-content">' +
            '<div id="pm-award-wrap"></div>' +
            '<h1 class="pm-hero-title" id="pm-hero-title"></h1>' +
            '<p  class="pm-hero-sub"   id="pm-hero-sub"></p>' +
          '</div>' +
        '</div>' +
        /* body */
        '<div class="pm-body-inner" id="pm-body"></div>' +
      '</div>' +
    '</div>';
  document.body.appendChild(pmWrap);

  var pmBack       = document.getElementById("pm-back");
  var pmClose      = document.getElementById("pm-close");
  var pmTbCat      = document.getElementById("pm-tb-cat");
  var pmHeroBg     = document.getElementById("pm-hero-bg");
  var pmHeroTitle  = document.getElementById("pm-hero-title");
  var pmHeroSub    = document.getElementById("pm-hero-sub");
  var pmAwardWrap  = document.getElementById("pm-award-wrap");
  var pmBody       = document.getElementById("pm-body");
  var pmBox        = pmWrap.querySelector(".pm-box");

  function openModal(p) {
    /* hero banner */
    pmHeroBg.style.background = p.coverBg;
    if (p.coverBgSize) pmHeroBg.style.backgroundSize = p.coverBgSize;
    else               pmHeroBg.style.backgroundSize = "";

    pmTbCat.textContent     = p.tag || p.cat || "";
    pmHeroTitle.textContent = p.title;
    pmHeroSub.textContent   = p.sub  || "";

    pmAwardWrap.innerHTML = p.award
      ? '<p class="pm-hero-award">' + esc(p.awardLabel || "🏆 Award Winning") + "</p>" : "";

    /* body content */
    pmBody.innerHTML = buildModalBody(p);
    /* tint the titlebar with a faint accent */
    var pmBox2 = pmWrap.querySelector(".pm-box");
    pmBox2.style.setProperty("--pm-accent", p.accent || "#5585f0");
    pmWrap.classList.add("open");
    document.body.style.overflow = "hidden";
    pmBack.focus();
  }

  function closeModal() {
    pmWrap.classList.remove("open");
    document.body.style.overflow = "";
  }

  pmBack.addEventListener("click",  closeModal);
  pmClose.addEventListener("click", closeModal);
  pmWrap.querySelector(".pm-backdrop").addEventListener("click", closeModal);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && pmWrap.classList.contains("open")) closeModal();
  });

  /* ─── Modal body builders ────────────────────────────────── */
  function buildModalBody(p) {
    var h = "";
    if (p.tag) h += '<span class="pm-tag">' + esc(p.tag) + "</span>";
    h += '<hr class="pm-divider">';

    switch (p.id) {
      case "cusp-dive":   return h + buildCusp(p);
      case "cdrc-virgin": return h + buildCdrc(p);
      default:            return h + buildStandard(p);
    }
  }

  function buildStandard(p) {
    var h = '<p class="pm-detail">' + esc(p.detail) + "</p>";
    if (p.embed) {
      h += '<p class="pm-section-label">Interactive Preview</p>';
      h += buildIframe(p.embed, p.title);
      h += '<div class="btn-row"><a class="pm-btn newtab" href="' + esc(p.embed) + '" target="_blank" rel="noopener">Open in new tab  ↗</a>';
      if (p.buttons) p.buttons.forEach(function (b) { h += btnHtml(b); });
      h += "</div>";
    }
    return h;
  }

  function buildCusp(p) {
    var pdfUrl = "/cusp/CUSP_Group_7.pdf";
    var kclUrl = p.kclUrl || "#";
    var h = "";

    /* ① Media Coverage — top */
    h += '<p class="pm-section-label">Media Coverage</p>';
    h += '<a class="kcl-card" href="' + esc(kclUrl) + '" target="_blank" rel="noopener">';
    h +=   '<div class="kcl-card-banner"></div>';
    h +=   '<div class="kcl-card-body">';
    h +=     '<div class="kcl-card-meta">' +
               '<span class="kcl-card-source">King\'s College London</span>' +
               '<span>03 March 2025</span>' +
             '</div>';
    h +=     '<p class="kcl-card-title">Students from around the world develop solutions for greener cities in data competition</p>';
    h +=     '<p class="kcl-card-excerpt">The <strong style="color:#ededf2">\'Best Overall\' award</strong> went to a team that analysed data on fuel poverty, discovering that urban challenges disproportionately impact low-income communities across London — with policy-informing evidence for tailored regional approaches.</p>';
    h +=     '<div class="kcl-card-quote">' +
               '<p>"The CUSP London Data Dive continues to highlight the talent and dedication of participating students as they uncover meaningful insights from urban data in sustainability."</p>' +
               '<cite>— Dr Yijing Li, Acting Director for CUSP London</cite>' +
             '</div>';
    h +=     '<div class="kcl-card-footer">' +
               '<span>kcl.ac.uk · News</span>' +
               '<span class="kcl-card-cta">Read full article ' +
                 '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
               '</span>' +
             '</div>';
    h +=   '</div>';
    h += '</a>';

    /* ② Description + small award photo side by side */
    h += '<div class="cusp-info-row">';
    h +=   '<div class="cusp-desc-photo">';
    h +=     '<p class="pm-detail" style="margin-bottom:0">' + esc(p.detail) + "</p>";
    h +=     '<div class="cusp-photo-sm">' +
               '<img src="' + esc(p.photo) + '" alt="Award Winners" ' +
               'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
               '<div class="photo-ph" style="display:none">📷 Award Photo</div>' +
             '</div>';
    h +=   '</div>';
    h += '</div>';

    /* ③ Group presentation PDF */
    h += '<p class="pm-section-label" style="margin-top:2rem">Group Presentation</p>';
    h += '<div class="embed-wrap pdf-embed">' +
           '<iframe src="' + pdfUrl + '" loading="lazy" title="CUSP Group 7 Presentation"></iframe>' +
           '<div class="embed-fallback">' +
             '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
             '<p style="color:#555;font-size:.78rem">PDF preview unavailable — use button below</p>' +
           '</div>' +
         '</div>';
    h += '<div class="btn-row" style="margin-top:.75rem">' +
           '<a class="pm-btn cusp-pdf-btn" href="' + pdfUrl + '" target="_blank" rel="noopener">' +
             '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
             'Open PDF Full Screen' +
           '</a>' +
         '</div>';

    /* ④ Interactive website — last */
    h += '<p class="pm-section-label" style="margin-top:2.5rem">Interactive Map</p>';
    h += buildIframe(p.embed, p.title);
    h += '<div class="btn-row">' +
           '<a class="pm-btn newtab" href="' + esc(p.embed) + '" target="_blank" rel="noopener">Open in new tab ↗</a>' +
         '</div>';

    return h;
  }

  function buildCdrc(p) {
    var url = p.pdfUrl || "#";
    var h = '<p class="pm-detail">' + esc(p.detail) + "</p>";
    h += '<p class="pm-section-label">Report</p>';
    h += '<div class="embed-wrap pdf-embed">' +
         '<iframe src="' + esc(url) + '" loading="lazy" title="Research Report"></iframe>' +
         '<div class="embed-fallback">' +
           '<svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
           '<p style="color:#666;font-size:.78rem">PDF preview unavailable</p>' +
         "</div></div>";
    h += '<a class="pdf-cta" href="' + esc(url) + '" target="_blank" rel="noopener">' +
         '<div class="pdf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></div>' +
         '<div class="pdf-info"><p class="pdf-title">Read Full Report</p><p class="pdf-subtitle">Predictive Modelling · Telecom Field Service Optimisation</p></div>' +
         '<span class="pdf-arrow">↗</span></a>';
    return h;
  }

  function buildIframe(url, title) {
    return (
      '<div class="embed-wrap">' +
        '<iframe src="' + esc(url) + '" title="' + esc(title) + '" allowfullscreen loading="lazy" ' +
          'sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox">' +
        "</iframe>" +
        '<div class="embed-fallback">' +
          '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>' +
          '<p style="color:#555;font-size:.78rem">Preview blocked by site policy</p>' +
        "</div></div>"
    );
  }

  function btnHtml(b) {
    var icons = {
      github:   '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      pdf:      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
      external: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
    };
    var cls = b.primary ? "pm-btn primary" : "pm-btn ghost";
    return '<a class="' + cls + '" href="' + esc(b.url) + '" target="_blank" rel="noopener">' + (icons[b.icon] || "") + esc(b.label) + "</a>";
  }

  /* ─── Build card ─────────────────────────────────────────── */
  function buildCard(p, idx) {
    var card = el("div", "p-card" + (p.award ? " award" : ""));
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", "Open " + p.title);
    card.style.transitionDelay = (idx * 85) + "ms";

    var coverInner = el("div", "p-cover-inner");
    coverInner.style.background = p.coverBg;
    if (p.coverBgSize) coverInner.style.backgroundSize = p.coverBgSize;

    var shimmer = el("div", "p-shimmer");
    var vignette = el("div", "p-cover-vignette");

    var cover = el("div", "p-cover");
    cover.appendChild(coverInner);
    cover.appendChild(shimmer);
    cover.appendChild(vignette);

    /* tech stack tag chip */
    if (p.tag) {
      var tagChip = el("span", "p-tag");
      tagChip.textContent = p.tag;
      cover.appendChild(tagChip);
    }

    var infoHtml =
      (p.award ? '<p class="p-award-badge">🏆 ' + esc(p.awardLabel || "Award Winning") + "</p>" : "") +
      '<h3 class="p-title">' + esc(p.title) + "</h3>" +
      (p.sub ? '<p class="p-sub">' + esc(p.sub) + "</p>" : "") +
      '<span class="p-open-hint">View project →</span>';

    var info = el("div", "p-info");
    info.innerHTML = infoHtml;

    card.appendChild(cover);
    card.appendChild(info);

    /* holographic tilt */
    card.addEventListener("mousemove", function (e) {
      var r  = card.getBoundingClientRect();
      var x  = e.clientX - r.left, y = e.clientY - r.top;
      var rx = ((y - r.height / 2) / (r.height / 2)) * -6;
      var ry = ((x - r.width  / 2) / (r.width  / 2)) *  8;
      card.style.transform = "perspective(1000px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale(1.025)";
      card.style.borderColor = "rgba(255,255,255,.15)";
      card.style.boxShadow = "0 0 0 1px " + p.accent + "44, 0 20px 55px rgba(0,0,0,.5), 0 0 70px " + hexRgba(p.accent,.10);
      shimmer.style.opacity = "1";
      shimmer.style.background = "radial-gradient(circle at " + x + "px " + y + "px, rgba(255,255,255,.1) 0%, transparent 65%)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "";
      card.style.borderColor = "";
      card.style.boxShadow = "";
      shimmer.style.opacity = "0";
    });
    card.addEventListener("click", function () { openModal(p); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(p); }
    });

    return card;
  }

  /* ─── Utils ──────────────────────────────────────────────── */
  function el(tag, cls) { var n = document.createElement(tag); if (cls) n.className = cls; return n; }

  function injectCSS(str) { var s = document.createElement("style"); s.textContent = str; document.head.appendChild(s); }

  function esc(s) {
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function hexRgba(hex, a) {
    hex = hex.replace("#","");
    if (hex.length === 3) hex = hex.split("").map(function(c){return c+c;}).join("");
    return "rgba("+parseInt(hex.slice(0,2),16)+","+parseInt(hex.slice(2,4),16)+","+parseInt(hex.slice(4,6),16)+","+a+")";
  }

})();
