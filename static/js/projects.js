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
          sub: "A 100M+ record ML pipeline for telecom network optimisation.",
          tag: "Predictive ML / 100M+ Pipeline",
          cat: "AI & Predictive Analytics",
          award: false, accent: "#22d3ee",
          image: "photo/VMO2cover.png",
          imagePos: "center top",
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
          detail: "A research collaboration with CDRC and Virgin Media O2 to engineer predictive ML pipelines on 100M+ broadband records. Spatial features from MSOA-level census, retail gravity models and network topology were fused to forecast telecom infrastructure demand and optimise field service routing.",
          pdfUrl: "https://geods.ac.uk/wp-content/uploads/2025/10/Yixing-Li.pdf",
          featured: {
            src: "photo/vmo2 oxford conference.jpg",
            caption: "Oxford conference · with Virgin Media O2 partner",
            wide: true
          },
          gallery: [
            { src: "photo/vmo2 oxford conference 2.jpg", caption: "Presentation day" },
            { src: "photo/vmo2 oxford conference 3.jpg", caption: "With fellow presenters at the conference" }
          ]
        },
        {
          id: "cusp-dive",
          title: "Spatial AI for Fuel Poverty & Energy",
          sub: "Optimising urban resource allocation and energy efficiency through high-resolution spatial-temporal modelling.",
          tag: "Spatial AI / Resource Optimisation",
          cat: "AI & Predictive Analytics",
          award: true, awardLabel: "Hackathon Best Overall Award",
          accent: "#a78bfa",
          image: "photo/CUSP.png",
          imagePos: "center center",
          coverBg: [
            /* radial pulse rings */
            "radial-gradient(circle at 50% 45%, transparent 18%, rgba(167,139,250,.08) 20%, transparent 22%, rgba(167,139,250,.06) 32%, transparent 34%, rgba(167,139,250,.05) 46%, transparent 48%)",
            /* conic scan lines */
            "conic-gradient(from 200deg at 50% 42%, transparent 0deg, rgba(167,139,250,.1) 18deg, transparent 36deg, rgba(167,139,250,.07) 72deg, transparent 90deg, rgba(167,139,250,.05) 180deg, transparent 220deg, rgba(167,139,250,.1) 270deg, transparent 310deg, rgba(167,139,250,.07) 340deg, transparent 360deg)",
            /* glow */
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(167,139,250,.55) 0%, transparent 55%)",
            "linear-gradient(155deg, #0a0218 0%, #28085e 55%, #42088a 100%)"
          ].join(","),
          detail: "As Team Lead at the CUSP London Data Dive (2025), I architected advanced spatial models — including Geographically Weighted Regression (GWR) and diffusion analysis — to combat urban fuel poverty. This project focused on generating a high-resolution vulnerability index to identify neighbourhoods requiring urgent energy support and carbon-efficient interventions.\n\nOur spatial-temporal approach successfully optimised government resource allocation efficiency by 15%, ensuring precise, targeted support for fuel-poor areas. This data-driven strategy not only addresses immediate community needs but also aligns with broader urban energy and carbon reduction goals. The project won the 'Best Overall Award' and was selected for presentation at the Urban Future Symposium (ETH Empa).",
          photo: "CUSP/winnnersphoto.png",
          embed: "https://verali0710.github.io/CUSP_project001/interactive_map_with_all_variables.html",
          kclUrl: "https://www.kcl.ac.uk/news/students-from-around-the-world-develop-solutions-for-greener-cities-in-data-competition",
          symposium: {
            logo: "photo/empa logo.png",
            label: "Presented at",
            name: "Urban Future Symposium",
            org: "ETH Empa · Materials Science and Technology",
            url: "https://urban-futures.empa.ch/",
            photo: "photo/empa poster photo.jpg",
            caption: "Poster session · with fellow presenters"
          }
        }
      ]
    },
    {
      num: "02",
      name: "Data Products & Interactive Experiences",
      desc: "Transforming complex datasets into intuitive, user-facing web applications and visual narratives.",
      projects: [
        {
          id: "brexit-viz",
          title: "The Brexit Trade Network",
          sub: "Data-driven storytelling decoding macro-economic shifts through interactive network topography.",
          tag: "Graph Analytics / D3.js",
          cat: "Data Products & Interactive Experiences",
          award: false, accent: "#818cf8",
          image: "photo/Brexit_trade.png",
          imagePos: "center center",
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
        },
        {
          id: "brexit-edu",
          title: "Navigating New Horizons: Brexit & Education",
          sub: "A custom React-based web mapping product tracking international student demographic shifts.",
          tag: "Data Storytelling / React",
          cat: "Data Products & Interactive Experiences",
          award: false, accent: "#f59e0b",
          image: "photo/Brexit_edu.png",
          imagePos: "center center",
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
          id: "flood2021",
          title: "Watershed: 2021 Central Europe Flood",
          sub: "An interactive spatial data product evaluating disaster resilience and socio-economic impact.",
          tag: "Geospatial Product / Mapbox",
          cat: "Data Products & Interactive Experiences",
          award: false, accent: "#38bdf8",
          image: "photo/2021 Central Europe Flood.png",
          imagePos: "center top",
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
        }
      ]
    }
  ];

  /* ─── Inject CSS ─────────────────────────────────────────── */
  injectCSS(`
    /* ── Category header ──────────────────────────────────── */
    .cat-block { position: relative; margin-bottom: 4.5rem; }
    .cat-block:last-child { margin-bottom: 0; }
    /* One rule per boundary, drawn at the boundary. The old design put a
       hairline under every category header, which stacked a second rule
       directly beneath the section eyebrow and marked nothing. */
    .cat-block + .cat-block { padding-top: 4.5rem; }
    .cat-block + .cat-block::before {
      content: "";
      position: absolute; left: 0; right: 0; top: 0; height: 1px;
      background: linear-gradient(90deg, rgba(255,255,255,.13), rgba(255,255,255,.03) 62%, transparent);
    }

    /* One line, one job. The two-line description under each category was
       restating what the title already said and what the cards show — three
       chances to read the same thing, in the smallest type on the page. */
    .cat-header {
      display: flex; align-items: baseline; gap: 1.4rem;
      margin-bottom: 1.9rem;
    }
    /* Matches .ai-title downpage — one display size, one weight, one colour.
       The violet gradient this used to carry was the only place on the page
       tinting a heading, which is what made the section read as bolted on. */
    .cat-name {
      font-family: var(--sans);
      font-size: clamp(1.8rem, 3.4vw, 2.75rem); font-weight: 500;
      letter-spacing: -.022em; line-height: 1.1;
      color: #f7f8ff;
      white-space: nowrap;
    }
    /* Carries the rule out to the measure edge so a short title does not leave
       the header hanging in empty space. */
    .cat-header::after {
      content: "";
      flex: 1; height: 1px;
      background: linear-gradient(90deg, rgba(255,255,255,.12), transparent 72%);
    }
    @media (max-width: 700px) {
      .cat-name { white-space: normal; }
      .cat-header::after { display: none; }
    }

    /* ── Card row: horizontal scroll ─────────────────────── */
    .card-row-wrap {
      position: relative;
    }
    /* Ends fade instead of getting guillotined at the measure edge. Both stops
       are driven from JS so the fade only exists on the side that actually has
       more content — a permanent fade over a row that does not scroll is a lie.
       Vertical padding buys room for the hover lift, which the scroll container
       would otherwise clip off at the top. */
    .card-row {
      --fade-l: 0px;
      --fade-r: 0px;
      display: flex; gap: 1.1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      -webkit-overflow-scrolling: touch;
      padding: 18px 0 14px;
      margin-top: -18px;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,.1) transparent;
      -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 var(--fade-l), #000 calc(100% - var(--fade-r)), transparent 100%);
              mask-image: linear-gradient(90deg, transparent 0, #000 var(--fade-l), #000 calc(100% - var(--fade-r)), transparent 100%);
    }
    .card-row::-webkit-scrollbar { height: 3px; }
    .card-row::-webkit-scrollbar-track { background: transparent; }
    .card-row::-webkit-scrollbar-thumb { background: rgba(255,255,255,.12); border-radius: 99px; }

    /* ── Individual card ──────────────────────────────────── */
    .p-card {
      flex: 0 0 auto;
      width: 400px; height: 460px;
      border-radius: 16px; overflow: hidden;
      cursor: pointer;
      position: relative;
      border: 1px solid rgba(255,255,255,.07);
      background: var(--bg-s);
      scroll-snap-align: start;
      display: flex; flex-direction: column;
      transform-style: preserve-3d; will-change: transform;
      opacity: 0; transform: translateY(36px) scale(.97);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.05);
      transition:
        opacity .65s cubic-bezier(.16,1,.3,1),
        transform .65s cubic-bezier(.16,1,.3,1),
        box-shadow .35s ease, border-color .35s ease;
    }
    /* The pointer becomes the affordance, so the arrow has to go. */
    @media (hover: hover) and (pointer: fine) {
      .p-card { cursor: none; }
    }
    .p-card.award { width: 400px; }
    .p-card.award::after {
      content: "";
      position: absolute; inset: 0; pointer-events: none; z-index: 5;
      border-radius: inherit;
      box-shadow: inset 0 0 0 1px rgba(212,168,75,.22);
      opacity: .7;
    }

    /* ── Scroll-right hint button ──────────────────────────── */
    /* The dark gradient this used to paint was a smear of flat black laid over
       a tinted band; the row's own mask does the fading now, so all that is
       left here is the button. */
    .scroll-hint-btn {
      position: absolute; right: 0; top: 0; bottom: 16px;
      width: 62px; z-index: 6;
      display: flex; align-items: center; justify-content: flex-end;
      padding-right: 6px;
      pointer-events: none;
      transition: opacity .3s;
    }
    .scroll-hint-btn.hidden { opacity: 0; pointer-events: none; }
    .scroll-hint-arrow {
      width: 36px; height: 36px; border-radius: 50%;
      background: rgba(255,255,255,.08);
      backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,.14);
      color: rgba(255,255,255,.7);
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; pointer-events: all;
      transition: background .18s, border-color .18s, transform .18s;
      flex-shrink: 0;
    }
    .scroll-hint-arrow:hover {
      background: rgba(255,255,255,.15);
      border-color: rgba(255,255,255,.28);
      transform: translateX(2px);
    }
    .scroll-hint-arrow svg { width: 15px; height: 15px; }
    .p-card.revealed { opacity:1; transform:translateY(0) scale(1); }
    .p-card:hover {
      border-color: rgba(255,255,255,.16);
      box-shadow: inset 0 1px 0 rgba(255,255,255,.07), 0 22px 60px rgba(0,0,0,.6);
    }
    /* Cards are the only way into a project, so they have to be reachable and
       visibly focused without a mouse. Ring is offset outward so it survives
       the card's own overflow:hidden. */
    .p-card:focus { outline: none; }
    .p-card:focus-visible {
      outline: none;
      border-color: rgba(255,255,255,.28);
      box-shadow: 0 0 0 2px var(--bg), 0 0 0 4px rgba(212,168,75,.55), 0 22px 60px rgba(0,0,0,.6);
    }

    /* cover – top 60% */
    .p-cover {
      flex: 0 0 60%; position: relative; overflow: hidden;
    }
    /* 2px accent strip at top of each card */
    .p-cover::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: var(--card-accent, rgba(255,255,255,.15));
      z-index: 12;
      transform: scaleX(.35);
      transform-origin: left;
      transition: transform .55s cubic-bezier(.16,1,.3,1);
    }
    .p-card:hover .p-cover::before { transform: scaleX(1); }
    /* Graded down at rest, full colour on hover. Five saturated dashboard
       screenshots sitting in a row is the loudest thing in this section;
       holding them to one quiet tone until they are asked for is what buys
       the calm back — and it makes the hover feel like it did something.
       Inset rather than inset:0 so the parallax has somewhere to travel
       without dragging a bare edge into frame. */
    .p-cover-inner {
      position: absolute; inset: -6%;
      transition: transform .85s cubic-bezier(.16,1,.3,1), filter .8s cubic-bezier(.16,1,.3,1);
      background-size: cover;
      filter: saturate(.6) brightness(.87) contrast(1.03);
      will-change: transform, filter;
    }
    .p-card:hover .p-cover-inner,
    .p-card:focus-visible .p-cover-inner { filter: none; }
    .p-card:hover .p-cover-inner { transform: scale(1.06); }

    /* shimmer (mouse-following) */
    .p-shimmer {
      position: absolute; inset: 0; z-index: 2;
      pointer-events: none; opacity: 0; transition: opacity .25s;
      mix-blend-mode: soft-light;
    }

    /* bottom vignette on cover */
    .p-cover-vignette {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: linear-gradient(180deg, transparent 45%, rgba(13,13,22,.95) 100%);
    }

    /* One line of context that rides up out of the cover's own shadow on
       hover. It used to be a chip pinned to the corner all the time, which
       meant five of them competing before you had shown any interest in any
       of them. */
    .p-meta {
      position: absolute; left: 0; right: 0; bottom: 0; z-index: 3;
      padding: .7rem 1.2rem .8rem;
      display: flex; align-items: center; gap: .55rem;
      font-family: var(--mono); font-size: .68rem;
      letter-spacing: .1em; text-transform: uppercase;
      color: rgba(238,238,245,.72);
      pointer-events: none;
      opacity: 0; transform: translateY(10px);
      transition: opacity .4s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1);
    }
    .p-meta::before {
      content: ""; width: 14px; height: 1px; flex-shrink: 0;
      background: var(--card-accent, rgba(255,255,255,.4));
    }
    .p-card:hover .p-meta,
    .p-card:focus-visible .p-meta { opacity: 1; transform: translateY(0); }

    /* Follows the pointer with a frame of lag so it reads as a physical thing
       being dragged rather than a label stapled to the cursor. Outer node only
       ever carries the translate that JS writes each frame; the disc itself is
       a child so its entrance scale is a plain CSS transition instead of
       something the animation loop has to fight over. */
    .p-dot {
      position: absolute; z-index: 20; top: 0; left: 0;
      pointer-events: none; will-change: transform;
    }
    .p-dot i {
      display: flex; align-items: center; justify-content: center;
      width: 74px; height: 74px; margin: -37px 0 0 -37px;
      border-radius: 50%;
      color: rgba(255,255,255,.94);
      background: rgba(12,12,22,.34);
      border: 1px solid rgba(255,255,255,.26);
      box-shadow: 0 10px 30px rgba(0,0,0,.38), inset 0 1px 0 rgba(255,255,255,.18);
      backdrop-filter: blur(9px) saturate(1.35);
      -webkit-backdrop-filter: blur(9px) saturate(1.35);
      opacity: 0; transform: scale(.5);
      transition: opacity .26s ease, transform .45s cubic-bezier(.16,1,.3,1);
    }
    /* An arrow, not the word "open" — the info panel already says that, and
       two labels for one action is one too many. */
    .p-dot svg { width: 17px; height: 17px; }
    .p-card:hover .p-dot i { opacity: 1; transform: scale(1); }
    .p-card:active .p-dot i { transform: scale(.86); }

    /* info panel – bottom 40% */
    .p-info {
      flex: 1; padding: 1rem 1.2rem 1.25rem;
      display: flex; flex-direction: column; justify-content: flex-end;
      background: var(--bg-s);
      border-top: 1px solid rgba(255,255,255,.05);
    }
    /* Same gold pill as the timeline honours — an award is an award wherever
       it appears, and it should not need a second visual language. */
    .p-award-badge {
      align-self: flex-start;
      display: inline-flex; align-items: center; gap: .38rem;
      margin-bottom: .55rem;
      padding: .22rem .7rem;
      border-radius: 999px;
      border: 1px solid rgba(212,168,75,.28);
      background: rgba(212,168,75,.08);
      font-family: var(--mono);
      font-size: .68rem; font-weight: 500;
      letter-spacing: .04em; color: #e0c07a;
    }
    .p-award-badge svg { width: 11px; height: 11px; flex-shrink: 0; color: #e0c07a; }
    .pm-hero-award svg { width: 13px; height: 13px; flex-shrink: 0; vertical-align: -1px; margin-right: .35rem; }
    /* Sans, like every other title on the page. The serif here was Georgia at
       1.25rem — the site's serif only earns its keep at display size (the
       wordmark, the contact headline); shrunk down it just read as a different
       website. */
    .p-title {
      font-family: var(--sans);
      font-size: 1.12rem; font-weight: 500; color: var(--text);
      letter-spacing: -.015em; line-height: 1.35; margin: 0;
      transition: color .35s ease;
    }
    .p-card:hover .p-title,
    .p-card:focus-visible .p-title { color: #fff; }
    .p-sub {
      margin: .38rem 0 0; font-size: .88rem;
      color: var(--muted); font-weight: 300; letter-spacing: .005em;
      line-height: 1.6;
    }
    .p-open-hint {
      margin-top: .75rem;
      font-size: .72rem; font-family: var(--mono);
      color: var(--dim); letter-spacing: .12em; text-transform: uppercase;
      opacity: 0; transform: translateX(-8px);
      transition: opacity .35s cubic-bezier(.16,1,.3,1), transform .35s cubic-bezier(.16,1,.3,1), color .3s;
    }
    .p-card:hover .p-open-hint,
    .p-card:focus-visible .p-open-hint { opacity:1; transform:translateX(0); color: var(--muted); }

    /* ── Full-screen modal ────────────────────────────────── */
    .pm-wrap {
      position: fixed;
      top: var(--nav-h, 60px); left: 0; right: 0; bottom: 0;
      z-index: 150;
      pointer-events: none; opacity: 0;
      transition: opacity .32s ease;
    }
    .pm-wrap.open { pointer-events: all; opacity: 1; }

    .pm-backdrop {
      position: absolute; inset: 0;
      background: rgba(0,0,0,.92);
      backdrop-filter: blur(22px); -webkit-backdrop-filter: blur(22px);
    }

    /* main box – fills space below nav */
    .pm-box {
      position: absolute;
      inset: 0;
      display: flex; flex-direction: column;
      background: #09090f;
      /* One column for the whole drill-down. Masthead, prose and media all
         measure themselves against these two numbers, which is what stops
         each section from picking its own edge. */
      --pm-measure: 1120px;
      --pm-gutter: clamp(1.4rem, 5vw, 3.5rem);
      --pm-text: 70ch;
      --pm-gap: clamp(2.6rem, 5vw, 4rem);
      transform: translateY(48px) scale(.985);
      opacity: 0;
      transition: transform .55s cubic-bezier(.16,1,.3,1), opacity .4s ease;
      overflow: hidden;
    }
    .pm-wrap.open .pm-box { transform: translateY(0) scale(1); opacity: 1; }

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
      padding: .38rem .9rem; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.09); background: transparent;
      color: var(--muted); cursor: pointer; font-size: .9rem;
      transition: color .15s, border-color .15s, background .15s;
    }
    .pm-tb-back:hover { color: #eeeef5; border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.04); }
    .pm-tb-back svg { width: 15px; height: 15px; }
    .pm-tb-cat {
      min-width: 0;
      padding: 0 1rem;
      font-size: .85rem;
      color: #8a8aa8;
      letter-spacing: -.005em;
      overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    }
    .pm-tb-close {
      width: 32px; height: 32px; border-radius: 6px;
      border: 1px solid rgba(255,255,255,.09); background: transparent;
      color: var(--muted); cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      transition: color .15s, border-color .15s, background .15s;
    }
    .pm-tb-close:hover { color: #eeeef5; border-color: rgba(255,255,255,.18); background: rgba(255,255,255,.04); }
    .pm-tb-close svg { width: 15px; height: 15px; }

    /* ── Masthead ─────────────────────────────────────────────
       Every project opens the same way: category, title, one line of
       standfirst, then the facts. The height comes from the content, not
       from a number — this used to carry a fixed flex basis while sitting
       inside .pm-scroll rather than the flex column, so the basis was
       ignored, and with every child absolutely positioned the whole
       masthead collapsed to nothing on all five pages. */
    .pm-hero {
      position: relative;
      overflow: hidden;
      border-bottom: 1px solid rgba(255,255,255,.06);
    }
    .pm-hero-bg {
      position: absolute; inset: 0;
      /* The cover art is a screenshot of the project itself, so at cover size
         behind the masthead it lands as a legible crop of somebody else's
         headline. Blurred it becomes what it is meant to be — a tint with a
         bit of weather in it. The scale hides the blur's soft edges, and the
         damping is what brings five different accents to one brightness. */
      opacity: .5;
      filter: saturate(.7) blur(22px);
      transform: scale(1.15);
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
      background:
        radial-gradient(120% 90% at 12% 0%, rgba(9,9,15,.35) 0%, rgba(9,9,15,.88) 62%, #09090f 100%),
        linear-gradient(180deg, rgba(9,9,15,.55) 0%, rgba(9,9,15,.86) 100%);
    }
    /* In flow, not absolute: the masthead is as tall as what it contains. */
    .pm-hero-content {
      position: relative;
      max-width: var(--pm-measure);
      margin: 0 auto;
      padding: clamp(2.4rem, 5.5vw, 4rem) var(--pm-gutter) clamp(2rem, 4vw, 2.8rem);
    }
    .pm-hero-eyebrow {
      margin: 0 0 1.1rem;
      font-family: var(--mono);
      font-size: .7rem;
      letter-spacing: .18em;
      text-transform: uppercase;
      color: #7a7a96;
    }
    .pm-hero-title {
      font-family: var(--serif);
      font-size: clamp(1.9rem, 3.6vw, 3.1rem);
      font-weight: 400; letter-spacing: -.015em;
      color: #fff; line-height: 1.08;
      margin: 0 0 .7rem;
      max-width: 20ch;
    }
    .pm-hero-sub {
      font-size: 1.02rem; color: rgba(238,238,245,.62);
      font-weight: 300; margin: 0; line-height: 1.6;
      max-width: 56ch;
    }
    .pm-hero-award {
      display: inline-flex; align-items: center; gap: .4rem;
      padding: .26rem .8rem; border-radius: 999px;
      background: rgba(212,168,75,.1); border: 1px solid rgba(212,168,75,.28);
      color: #e0c07a; font-size: .72rem; font-weight: 500;
      margin-bottom: .75rem; letter-spacing: .04em;
      font-family: var(--mono);
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
      max-width: var(--pm-measure);
      margin: 0 auto;
      padding: clamp(2.4rem, 4vw, 3.4rem) var(--pm-gutter) clamp(3.5rem, 7vw, 5.5rem);
    }

    /* ── Modal body elements ──────────────────────────────── */
    .pm-divider { border: none; border-top: 1px solid rgba(255,255,255,.06); margin: 1rem 0 1.5rem; }
    /* Prose keeps its own, narrower measure. The media below it is allowed the
       full column, which is the whole reason the two are separated. */
    .pm-detail {
      max-width: var(--pm-text);
      font-size: 1.02rem;
      color: var(--muted);
      line-height: 1.85;
      margin: 0 0 1.15rem;
      font-weight: 300;
    }
    .pm-detail:last-child { margin-bottom: 0; }
    .pm-prose { margin-bottom: var(--pm-gap); }
    /* One section label, one spacing step. Callers no longer patch margins
       inline, which is what made the gaps between blocks arbitrary. */
    .pm-section-label {
      display: flex; align-items: center; gap: .9rem;
      font-size: .7rem; font-family: var(--mono);
      color: #7a7a96; letter-spacing: .18em; text-transform: uppercase;
      margin: var(--pm-gap) 0 1.2rem;
    }
    /* The body already opens with its own padding; a section that happens to
       come first must not add the between-sections gap on top of it. */
    .pm-body-inner > .pm-section-label:first-child { margin-top: 0; }
    .pm-section-label::after {
      content: ''; display: block; height: 1px; flex: 1;
      background: linear-gradient(90deg, rgba(255,255,255,.1), rgba(255,255,255,0));
    }

    /* One frame around anything embedded, with the source and the way out
       attached to it rather than floating underneath as a loose button. */
    .pm-frame {
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.08);
      background: #06060d;
      box-shadow: 0 24px 60px rgba(0,0,0,.45);
    }
    .pm-frame-foot {
      display: flex; align-items: center; justify-content: flex-end;
      padding: .7rem 1.1rem;
      border-top: 1px solid rgba(255,255,255,.07);
      background: rgba(255,255,255,.015);
    }
    .pm-frame-open {
      display: inline-flex; align-items: center; gap: .45rem;
      flex-shrink: 0;
      font-family: var(--mono);
      font-size: .7rem; letter-spacing: .12em; text-transform: uppercase;
      color: #9a9ab4; text-decoration: none;
      transition: color .3s var(--ease, ease);
    }
    .pm-frame-open svg { width: 12px; height: 12px; transition: transform .35s var(--ease, ease); }
    .pm-frame-open:hover { color: #eeeef5; }
    .pm-frame-open:hover svg { transform: translate(2px, -2px); }

    /* embed iframe */
    .embed-wrap {
      position: relative; width: 100%;
      /* Was 76svh with a 600px floor, which on a laptop handed a single
         preview more height than the whole rest of the page. */
      height: 62svh;
      min-height: 420px;
      max-height: 720px;
      background: #04040a;
    }
    .embed-wrap iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
    .embed-wrap.pdf-embed {
      height: 68svh;
      min-height: 460px;
    }
    .embed-fallback {
      position: absolute; inset: 0;
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: .6rem;
      background: rgba(4,4,10,.9); pointer-events: none; opacity: 0; transition: opacity .3s;
    }
    .embed-wrap.failed .embed-fallback { pointer-events: all; opacity: 1; }
    .embed-note { font-size: .85rem; color: #8a8aa8; font-family: var(--mono); }

    /* embed loading spinner (iframes: PDF viewer / interactive maps) */
    .embed-loading {
      position: absolute; inset: 0; z-index: 3;
      display: flex; align-items: center; justify-content: center;
      background: #04040a; transition: opacity .45s ease;
    }
    .embed-loading.hidden { opacity: 0; pointer-events: none; }
    .spinner {
      width: 34px; height: 34px; border-radius: 50%;
      border: 3px solid rgba(255,255,255,.12);
      border-top-color: var(--pm-accent, #5585f0);
      animation: pm-spin .8s linear infinite;
    }
    @keyframes pm-spin { to { transform: rotate(360deg); } }

    /* image skeleton shimmer (card covers + modal hero) */
    .img-skeleton {
      position: absolute; inset: 0; z-index: 4; pointer-events: none;
      background: linear-gradient(100deg,
        rgba(255,255,255,.015) 28%,
        rgba(255,255,255,.085) 50%,
        rgba(255,255,255,.015) 72%);
      background-size: 220% 100%;
      animation: pm-skeleton 1.35s ease-in-out infinite;
      transition: opacity .5s ease;
    }
    .img-skeleton.hidden { opacity: 0; }
    @keyframes pm-skeleton {
      0%   { background-position: 170% 0; }
      100% { background-position: -170% 0; }
    }

    /* A grid, not centred flex wrap. Wrapping left the last photograph
       floating in the middle of its own row and none of them lining up with
       the column everything else is measured against. */
    .pg-row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
      gap: 1.4rem 1.1rem;
      margin: 0;
    }
    .pg-row .pg-shot { height: 260px; }
    .pg-row .pg-item img { width: 100%; height: 100%; object-fit: cover; }
    .pg-row .pg-item.is-wide .pg-shot { width: auto; }
    /* The figure is frame + caption stacked. Captions used to be laid over the
       bottom of the photograph, where they landed on whatever happened to be
       there and were clipped by the frame's own rounding. */
    .pg-item {
      margin: 0;
      max-width: 100%;
      flex: 0 0 auto;
      display: flex;
      flex-direction: column;
      gap: .7rem;
    }
    .pg-shot {
      position: relative;
      height: 300px;
      border-radius: 12px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.08);
      background: #0c0c14;
      transition: transform .45s cubic-bezier(.16,1,.3,1), border-color .35s, box-shadow .45s;
    }
    .pg-item:hover .pg-shot {
      transform: translateY(-3px);
      border-color: rgba(255,255,255,.16);
      box-shadow: 0 16px 36px rgba(0,0,0,.4);
    }
    .pg-item img {
      height: 100%;
      width: auto;
      max-width: 100%;
      object-fit: cover;
      display: block;
      /* Five photographs shot in five rooms under five different lights. The
         same grading at rest is what lets them sit on one page together; the
         full colour comes back when one is actually being looked at. */
      filter: saturate(.72) brightness(.9) contrast(1.02);
      transition: transform .7s cubic-bezier(.16,1,.3,1), filter .5s ease;
    }
    .pg-item:hover img { transform: scale(1.04); filter: none; }
    /* slightly widened portrait — fills a roomier frame for comfort */
    .pg-item.is-wide .pg-shot { width: 300px; }
    .pg-item.is-wide img { width: 100%; height: 100%; object-fit: cover; object-position: center 38%; }
    .pg-cap {
      font-size: .72rem;
      font-family: var(--mono);
      letter-spacing: .05em;
      color: #7a7a96;
      line-height: 1.5;
      max-width: 42ch;
      transition: color .35s ease;
    }
    .pg-item:hover .pg-cap { color: #a8a8c0; }
    @media(max-width:640px){
      .pg-shot { height: 210px; }
    }

    /* Two photos, one balanced row — equal height, tidy crop */
    .pg-duo {
      display: grid;
      grid-template-columns: 1.5fr 1fr;
      gap: 1.4rem 1.1rem;
      margin: 0;
    }
    .pg-duo .pg-shot {
      height: 340px;
      width: auto;
      max-width: none;
    }
    .pg-duo .pg-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    @media(max-width:640px){
      .pg-duo { grid-template-columns: 1fr; }
      .pg-duo .pg-shot { height: 240px; }
    }

    /* Venue / organiser bar — compact, hugs content, links out */
    .pm-venuebar {
      display: flex;
      align-items: center;
      margin-top: 1.6rem;
      gap: 1.1rem;
      padding: 1rem 1.25rem;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,.08);
      background: linear-gradient(135deg, rgba(255,255,255,.045), rgba(255,255,255,.012));
      text-decoration: none;
      color: inherit;
      margin: .2rem 0 1rem;
      transition: border-color .3s ease, background .3s ease, transform .35s cubic-bezier(.16,1,.3,1);
    }
    a.pm-venuebar:hover {
      border-color: rgba(255,255,255,.18);
      background: linear-gradient(135deg, rgba(255,255,255,.07), rgba(255,255,255,.02));
      transform: translateY(-2px);
    }
    .pm-venuebar-logo {
      flex: 0 0 auto;
      width: 56px; height: 56px;
      border-radius: 10px;
      background: #fff;
      padding: .5rem;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 8px 22px rgba(0,0,0,.25);
    }
    .pm-venuebar-logo img { width: 100%; height: 100%; object-fit: contain; display: block; }
    .pm-venuebar-text { flex: 1; min-width: 0; }
    .pm-venuebar-label {
      font-size: .66rem;
      font-family: var(--mono);
      letter-spacing: .14em;
      text-transform: uppercase;
      color: #6a6a88;
      margin-bottom: .25rem;
    }
    .pm-venuebar-name { font-size: 1.02rem; font-weight: 500; color: #ededf2; letter-spacing: -.01em; }
    .pm-venuebar-org { font-size: .8rem; color: #8a8aa8; margin-top: .18rem; }
    .pm-venuebar-cta {
      flex: 0 0 auto;
      display: inline-flex;
      color: #7a7a96;
      transition: color .3s ease, transform .35s ease;
    }
    .pm-venuebar-cta svg { width: 14px; height: 14px; }
    a.pm-venuebar:hover .pm-venuebar-cta { color: #e6e6f0; transform: translate(2px, -2px); }

    /* One button. Four differently-coloured variants — blue, orange, purple,
       red — were being chosen per project, which is most of why no two pages
       looked related. */
    .btn-row { display: flex; flex-wrap: wrap; gap: .65rem; margin-top: 1.1rem; }
    .pm-btn {
      display: inline-flex; align-items: center; gap: .5rem;
      padding: .6rem 1.15rem; border-radius: 999px;
      font-size: .84rem; font-weight: 400; text-decoration: none;
      letter-spacing: .01em;
      background: rgba(255,255,255,.02);
      border: 1px solid rgba(255,255,255,.1);
      color: #a8a8c0;
      transition: background .25s, border-color .25s, color .25s;
      white-space: nowrap;
    }
    .pm-btn:hover {
      background: rgba(255,255,255,.055);
      border-color: rgba(255,255,255,.2);
      color: #eeeef5;
    }

    /* Press citation card — restrained, purple-keyed to the CUSP accent */
    .kcl-card {
      display: flex; gap: 1.5rem; align-items: stretch;
      text-decoration: none;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,.08);
      background: linear-gradient(180deg, rgba(167,139,250,.05), rgba(255,255,255,.012));
      padding: 1.5rem 1.7rem;
      margin-bottom: 1.2rem;
      transition: border-color .3s ease, transform .35s cubic-bezier(.16,1,.3,1);
    }
    .kcl-card:hover {
      border-color: rgba(167,139,250,.3);
      transform: translateY(-2px);
    }
    .kcl-thumb {
      flex: 0 0 188px;
      align-self: stretch;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,.08);
      background: #0b0b12;
      min-height: 150px;
    }
    .kcl-thumb::after {
      content: "";
      position: absolute; inset: 0;
      box-shadow: inset 0 0 0 1px rgba(0,0,0,.4);
      pointer-events: none;
    }
    .kcl-thumb img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: 30% top;
      display: block;
      transition: transform .8s cubic-bezier(.16,1,.3,1);
    }
    .kcl-card:hover .kcl-thumb img { transform: scale(1.04); }
    .kcl-body { flex: 1; min-width: 0; }
    @media(max-width:640px){
      .kcl-card { flex-direction: column; gap: 1.1rem; }
      .kcl-thumb { flex-basis: auto; aspect-ratio: 16/9; min-height: 0; }
    }
    .kcl-eyebrow {
      display: flex; align-items: center; gap: .6rem; flex-wrap: wrap;
      font-size: .68rem; font-family: var(--mono);
      letter-spacing: .14em; text-transform: uppercase;
      color: #6f6f8c; margin-bottom: .95rem;
    }
    .kcl-eyebrow .src { color: #b6a4f0; }
    .kcl-eyebrow .sep { width: 3px; height: 3px; border-radius: 50%; background: rgba(167,139,250,.5); }
    .kcl-title {
      font-family: var(--serif);
      font-size: 1.4rem; font-weight: 500; color: #e8e8f2;
      letter-spacing: -.01em; line-height: 1.35; margin: 0 0 .85rem;
    }
    .kcl-excerpt {
      font-size: .94rem; color: #7a7a92; line-height: 1.75; margin: 0 0 1.05rem; font-weight: 300;
    }
    .kcl-quote {
      border-left: 2px solid rgba(167,139,250,.42);
      padding: .1rem 0 .1rem 1.05rem; margin: 0 0 1.15rem;
    }
    .kcl-quote p {
      font-size: .92rem; color: #9a9ab4; line-height: 1.7; margin: 0 0 .4rem;
      font-style: italic; font-weight: 300;
    }
    .kcl-quote cite {
      font-size: .77rem; color: #6a6a86; font-style: normal;
      font-family: var(--mono); letter-spacing: .03em;
    }
    .kcl-foot {
      display: flex; align-items: center; justify-content: flex-end; gap: 1rem;
      padding-top: .95rem;
      border-top: 1px solid rgba(255,255,255,.06);
      font-size: .76rem; color: #5a5a76;
      font-family: var(--mono); letter-spacing: .03em;
    }
    .kcl-readmore {
      display: inline-flex; align-items: center; gap: .4rem;
      color: #b6a4f0;
      transition: gap .2s ease, color .2s ease;
    }
    .kcl-card:hover .kcl-readmore { gap: .6rem; color: #cabbf8; }

    /* accent-tinted rule at bottom of hero */
    .pm-hero::after {
      content: '';
      position: absolute; bottom: 0; left: 0; right: 0; height: 1px;
      /* The one place a project's colour is allowed to speak, and quietly:
         five accents at full strength gave five pages five temperaments. */
      background: linear-gradient(90deg, var(--pm-accent, #5585f0), transparent 55%);
      opacity: .35;
    }

    /* Reduced motion keeps the state changes — you still need to see which
       card you are on — and drops the travel. */
    @media (prefers-reduced-motion: reduce) {
      .p-card { transition: opacity .01ms, box-shadow .2s ease, border-color .2s ease; transform: none !important; }
      .p-card:not(.revealed) { opacity: 1; }
      .p-cover-inner { transition: filter .2s ease; transform: none !important; }
      .p-meta, .p-open-hint { transition: opacity .2s ease; transform: none !important; }
      .p-dot { display: none; }
      .p-card { cursor: pointer !important; }
    }

    /* responsive */
    @media(max-width:640px){
      .p-card, .p-card.award { width: calc(85vw) !important; height: 420px; }
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
    hdr.innerHTML = '<h2 class="cat-name">' + cat.name + "</h2>";
    block.appendChild(hdr);

    /* card row */
    var wrap = el("div", "card-row-wrap");
    var row  = el("div", "card-row");
    cat.projects.forEach(function (p, i) { row.appendChild(buildCard(p, i)); });

    /* scroll-right hint button */
    var hintWrap = el("div", "scroll-hint-btn");
    hintWrap.innerHTML =
      '<button class="scroll-hint-arrow" aria-label="Scroll right">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">' +
          '<polyline points="9 18 15 12 9 6"/>' +
        '</svg>' +
      '</button>';
    var arrowBtn = hintWrap.querySelector(".scroll-hint-arrow");
    arrowBtn.addEventListener("click", function () {
      row.scrollBy({ left: 380, behavior: "smooth" });
    });
    /* Arrow and edge fades both track the real scroll position, so a row that
       fits shows neither and a row scrolled to the end stops advertising more. */
    function syncEdges() {
      var overflow = row.scrollWidth > row.clientWidth + 10;
      var atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 10;
      hintWrap.classList.toggle("hidden", !overflow || atEnd);
      row.style.setProperty("--fade-l", row.scrollLeft > 8 ? "72px" : "0px");
      row.style.setProperty("--fade-r", overflow && !atEnd ? "104px" : "0px");
    }
    requestAnimationFrame(syncEdges);
    row.addEventListener("scroll", syncEdges, { passive: true });
    window.addEventListener("resize", syncEdges);
    wrap.appendChild(row);
    wrap.appendChild(hintWrap);
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
          '<div class="pm-hero-bg" id="pm-hero-bg"></div>' +
          /* Outside the tint layer, which is blurred — nested in it, the grid
             was being smeared out of existence. */
          '<div class="pm-hero-bg-texture"></div>' +
          '<div class="pm-hero-vignette"></div>' +
          '<div class="pm-hero-content">' +
            '<p class="pm-hero-eyebrow" id="pm-hero-eyebrow"></p>' +
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
  var pmHeroEyebrow = document.getElementById("pm-hero-eyebrow");
  var pmAwardWrap  = document.getElementById("pm-award-wrap");
  var pmBody       = document.getElementById("pm-body");
  var pmBox        = pmWrap.querySelector(".pm-box");

  function openModal(p) {
    /* clear any leftover hero skeleton from a previous open */
    var oldSkel = pmHeroBg.querySelector(".img-skeleton");
    if (oldSkel) oldSkel.remove();

    /* hero banner */
    if (p.image) {
      var pos = p.imagePos || "center center";
      pmHeroBg.style.background = [
        "linear-gradient(180deg, transparent 15%, rgba(9,9,15,.95) 88%)",
        "linear-gradient(to bottom, " + hexRgba(p.accent, .22) + " 0%, transparent 50%)",
        "url(\"" + encodeURI(p.image) + "\") " + pos + " / cover no-repeat"
      ].join(", ");
      pmHeroBg.style.backgroundSize = "";

      /* skeleton shimmer until the (potentially large) hero image loads */
      var hSkel = document.createElement("div");
      hSkel.className = "img-skeleton";
      pmHeroBg.appendChild(hSkel);
      var hPre = new Image();
      hPre.onload = hPre.onerror = function () {
        hSkel.classList.add("hidden");
        setTimeout(function () { if (hSkel.parentNode) hSkel.remove(); }, 500);
      };
      hPre.src = encodeURI(p.image);
    } else {
      pmHeroBg.style.background = p.coverBg;
      if (p.coverBgSize) pmHeroBg.style.backgroundSize = p.coverBgSize;
      else               pmHeroBg.style.backgroundSize = "";
    }

    /* The title, not the tag. The bar is the only thing still on screen once
       the masthead has scrolled away, so it should say which project you are
       in rather than repeat a descriptor that is already on the card. */
    pmTbCat.textContent       = p.title;
    pmHeroEyebrow.textContent = p.cat || "";
    pmHeroTitle.textContent   = p.title;
    pmHeroSub.textContent     = p.sub  || "";

    pmAwardWrap.innerHTML = p.award
      ? '<p class="pm-hero-award">' + awardIcon() + esc(p.awardLabel || "Award Winning") + "</p>" : "";

    /* body content */
    pmBody.innerHTML = buildModalBody(p);

    /* wire up embed spinners: hide when each iframe finishes (with a safety timeout) */
    pmBody.querySelectorAll(".embed-wrap").forEach(function (wrap) {
      var iframe = wrap.querySelector("iframe");
      var loader = wrap.querySelector(".embed-loading");
      if (!iframe || !loader) return;
      var hide = function () { loader.classList.add("hidden"); };
      iframe.addEventListener("load", hide);
      setTimeout(hide, 12000);
    });

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
    switch (p.id) {
      case "cusp-dive":   return buildCusp(p);
      case "cdrc-virgin": return buildCdrc(p);
      default:            return buildStandard(p);
    }
  }

  /* Paragraphs, at the prose measure, as one block with one gap after it. */
  function buildProse(text) {
    if (!text) return "";
    return '<div class="pm-prose">' + String(text).split("\n\n").map(function (para) {
      return '<p class="pm-detail">' + esc(para) + "</p>";
    }).join("") + "</div>";
  }

  function buildStandard(p) {
    var h = buildProse(p.detail);
    if (p.embed) h += buildEmbedSection("Interactive build", p.embed, p.title, p.buttons);
    return h;
  }

  function buildCusp(p) {
    var pdfRaw = "https://raw.githubusercontent.com/VeraLi0710/Yixing_Li/main/CUSP/CUSP_Group_7.pdf";
    var pdfUrl = "https://docs.google.com/viewer?url=" + encodeURIComponent(pdfRaw) + "&embedded=true";
    var kclUrl = p.kclUrl || "#";
    var h = "";

    /* ① Media Coverage — top */
    h += '<p class="pm-section-label">In the Press</p>';
    h += '<a class="kcl-card" href="' + esc(kclUrl) + '" target="_blank" rel="noopener">';
    h +=   '<div class="kcl-thumb">' +
             '<img src="' + encodeURI("photo/kcl article.png") + '" alt="King\'s College London article preview" loading="lazy" ' +
             'onerror="this.closest(\'.kcl-thumb\').style.display=\'none\'">' +
           '</div>';
    h +=   '<div class="kcl-body">';
    h +=     '<div class="kcl-eyebrow">' +
               '<span class="src">King\'s College London</span>' +
               '<span class="sep"></span>' +
               '<span>03 March 2025</span>' +
             '</div>';
    h +=     '<p class="kcl-title">Students from around the world develop solutions for greener cities in data competition</p>';
    h +=     '<p class="kcl-excerpt">The <strong style="color:#e6e6f0;font-weight:500">\u2018Best Overall\u2019 award</strong> went to a team that analysed fuel-poverty data, showing that urban challenges disproportionately impact low-income communities across London.</p>';
    h +=     '<blockquote class="kcl-quote">' +
               '<p>\u201CThe CUSP London Data Dive continues to highlight the talent and dedication of participating students as they uncover meaningful insights from urban data in sustainability.\u201D</p>' +
               '<cite>Dr Yijing Li, Acting Director for CUSP London</cite>' +
             '</blockquote>';
    /* The masthead of the card already says King's College London; repeating
       the domain underneath it was the same fact in smaller type. */
    h +=     '<div class="kcl-foot">' +
               '<span class="kcl-readmore">Read full article ' +
                 '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>' +
               '</span>' +
             '</div>';
    h +=   '</div>';
    h += '</a>';

    /* ② Description — full width */
    h += buildProse(p.detail);

    /* ③ Recognition — award photo + symposium poster, side by side */
    var moments = [];
    if (p.photo) moments.push({ src: p.photo, caption: "Best Overall Award · CUSP London Data Dive" });
    if (p.symposium && p.symposium.photo) {
      moments.push({ src: p.symposium.photo, caption: p.symposium.caption });
    }
    h += buildPhotoRow("Recognition", moments, "duo");

    /* symposium credit + link */
    if (p.symposium) h += buildVenueBar(p.symposium);

    /* ③ Group presentation PDF */
    h += buildEmbedSection("Written report", pdfUrl, "CUSP Group 7 Presentation", null,
                           { pdf: true, linkUrl: pdfRaw });

    /* ④ Interactive website — last */
    h += buildEmbedSection("Interactive build", p.embed, p.title);

    return h;
  }

  function buildPhotoRow(label, items, layout) {
    if (!items || !items.length) return "";
    var wrapCls = layout === "duo" ? "pg-duo" : "pg-row";
    var h = "";
    if (label) h += '<p class="pm-section-label">' + esc(label) + "</p>";
    h += '<div class="' + wrapCls + '">';
    items.forEach(function (g) {
      if (!g || !g.src) return;
      var itemCls = "pg-item" + (layout !== "duo" && g.wide ? " is-wide" : "");
      h += '<figure class="' + itemCls + '">';
      h +=   '<div class="pg-shot"><img src="' + encodeURI(g.src) + '" alt="' + esc(g.caption || "") + '" loading="lazy"></div>';
      if (g.caption) h += '<figcaption class="pg-cap">' + esc(g.caption) + "</figcaption>";
      h += "</figure>";
    });
    h += "</div>";
    return h;
  }

  function buildVenueBar(s) {
    if (!s || !s.logo) return "";
    var open = s.url
      ? 'a class="pm-venuebar" href="' + esc(s.url) + '" target="_blank" rel="noopener"'
      : 'div class="pm-venuebar"';
    var close = s.url ? "a" : "div";
    var h = "<" + open + ">";
    h +=   '<div class="pm-venuebar-logo"><img src="' + encodeURI(s.logo) + '" alt="' + esc(s.org || s.name || "Venue") + '"></div>';
    h +=   '<div class="pm-venuebar-text">';
    if (s.label) h += '<p class="pm-venuebar-label">' + esc(s.label) + "</p>";
    if (s.name) h += '<p class="pm-venuebar-name">' + esc(s.name) + "</p>";
    if (s.org) h += '<p class="pm-venuebar-org">' + esc(s.org) + "</p>";
    h +=   "</div>";
    /* The organiser is named two lines to the left; the domain repeated it. */
    if (s.url) h += '<span class="pm-venuebar-cta">' + openIcon() + "</span>";
    h += "</" + close + ">";
    return h;
  }

  function buildCdrc(p) {
    var url = p.pdfUrl || "#";
    var h = buildProse(p.detail);
    var photos = [];
    if (p.featured) photos.push(p.featured);
    if (p.gallery) photos = photos.concat(p.gallery);
    h += buildPhotoRow("Conference", photos);
    h += buildEmbedSection("Written report", url, "Research Report", null, { pdf: true });
    return h;
  }

  function embedLoader() {
    /* The spinner is the message; the word underneath it was not adding one. */
    return '<div class="embed-loading"><div class="spinner"></div></div>';
  }

  function hostOf(url) {
    return String(url || "").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  }

  /* Label, frame, source line, actions — in that order, on every page that
     embeds anything. The three builders used to each assemble this by hand
     with their own inline margins and their own button wording. */
  function buildEmbedSection(label, url, title, extraButtons, opts) {
    opts = opts || {};
    var h = '<p class="pm-section-label">' + esc(label) + "</p>";
    h += '<div class="pm-frame">';
    h +=   opts.pdf ? buildPdfIframe(url, title) : buildIframe(url, title);
    h +=   '<div class="pm-frame-foot">' +
             '<a class="pm-frame-open" href="' + esc(opts.linkUrl || url) + '" target="_blank" rel="noopener">' +
               "Open full screen" + openIcon() +
             "</a>" +
           "</div>";
    h += "</div>";
    if (extraButtons && extraButtons.length) {
      h += '<div class="btn-row">';
      extraButtons.forEach(function (b) { h += btnHtml(b); });
      h += "</div>";
    }
    return h;
  }

  function openIcon() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/></svg>';
  }

  function buildPdfIframe(url, title) {
    return (
      '<div class="embed-wrap pdf-embed">' +
        '<iframe src="' + esc(url) + '" loading="lazy" title="' + esc(title) + '"></iframe>' +
        embedLoader() +
        '<div class="embed-fallback">' +
          '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#55556a" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>' +
          '<p class="embed-note">Preview unavailable — open it full screen below</p>' +
        "</div></div>"
    );
  }

  function buildIframe(url, title) {
    return (
      '<div class="embed-wrap">' +
        '<iframe src="' + esc(url) + '" title="' + esc(title) + '" allowfullscreen loading="lazy" ' +
          'sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox">' +
        "</iframe>" +
        embedLoader() +
        '<div class="embed-fallback">' +
          '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#55556a" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9l6 6M15 9l-6 6"/></svg>' +
          '<p class="embed-note">Preview blocked by the source site — open it full screen below</p>' +
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
    card.style.setProperty("--card-accent", p.accent || "rgba(255,255,255,.15)");

    var coverInner = el("div", "p-cover-inner");
    if (p.image) {
      /* real photo: vignette + accent wash + actual image */
      var pos = p.imagePos || "center center";
      coverInner.style.background = [
        "linear-gradient(180deg, transparent 20%, rgba(10,10,20,.94) 90%)",
        "linear-gradient(to bottom, " + hexRgba(p.accent, .28) + " 0%, transparent 55%)",
        "url(\"" + encodeURI(p.image) + "\") " + pos + " / cover no-repeat"
      ].join(", ");
    } else {
      coverInner.style.background = p.coverBg;
      if (p.coverBgSize) coverInner.style.backgroundSize = p.coverBgSize;
    }

    var shimmer = el("div", "p-shimmer");
    var vignette = el("div", "p-cover-vignette");

    var cover = el("div", "p-cover");
    cover.appendChild(coverInner);
    cover.appendChild(shimmer);
    cover.appendChild(vignette);

    if (p.tag) {
      var meta = el("div", "p-meta");
      meta.textContent = p.tag;
      cover.appendChild(meta);
    }

    /* skeleton shimmer until the cover photo loads (only for real images) */
    if (p.image) {
      var cSkel = el("div", "img-skeleton");
      cover.appendChild(cSkel);
      var cPre = new Image();
      cPre.onload = cPre.onerror = function () {
        cSkel.classList.add("hidden");
        setTimeout(function () { if (cSkel.parentNode) cSkel.remove(); }, 500);
      };
      cPre.src = encodeURI(p.image);
    }

    var infoHtml =
      (p.award ? '<p class="p-award-badge">' + awardIcon() + esc(p.awardLabel || "Award Winning") + "</p>" : "") +
      '<h3 class="p-title">' + esc(p.title) + "</h3>" +
      (p.sub ? '<p class="p-sub">' + esc(p.sub) + "</p>" : "") +
      '<span class="p-open-hint">View project →</span>';

    var info = el("div", "p-info");
    info.innerHTML = infoHtml;

    var dot = el("div", "p-dot");
    dot.innerHTML =
      '<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="8 7 17 7 17 16"/></svg></i>';

    card.appendChild(cover);
    card.appendChild(info);
    card.appendChild(dot);

    /* Pointer response.
       Everything visual is interpolated toward the pointer inside one rAF loop
       rather than snapped to each pointermove event: the tilt, the cover's
       counter-drift, the disc and the sheen all lag by the same amount, which
       is what makes the card read as a single object with weight instead of
       four effects that happen to share a hover state. The tilt is also much
       shallower than it was — a card that swings 14 degrees is a toy. */
    var accent = p.accent || "#ffffff";
    var tX = 0, tY = 0, cX = 0, cY = 0, boxW = 1, boxH = 1;
    var raf = 0, live = false;

    function tick() {
      cX += (tX - cX) * .16;
      cY += (tY - cY) * .16;
      var nx = cX / boxW - .5;
      var ny = cY / boxH - .5;
      card.style.transform =
        "perspective(1000px) rotateX(" + (-ny * 7).toFixed(3) + "deg) rotateY(" +
        (nx * 9).toFixed(3) + "deg) translateY(-8px) scale(1.014)";
      coverInner.style.transform =
        "scale(1.06) translate3d(" + (-nx * 15).toFixed(2) + "px," + (-ny * 11).toFixed(2) + "px,0)";
      dot.style.transform = "translate3d(" + cX.toFixed(2) + "px," + cY.toFixed(2) + "px,0)";
      shimmer.style.background =
        "radial-gradient(circle at " + cX.toFixed(0) + "px " + cY.toFixed(0) +
        "px, rgba(255,255,255,.15) 0%, transparent 56%)";
      raf = requestAnimationFrame(tick);
    }

    card.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse" || reducedMotion()) return;
      var r = card.getBoundingClientRect();
      tX = e.clientX - r.left; tY = e.clientY - r.top;
      boxW = r.width || 1; boxH = r.height || 1;
      if (!live) {
        live = true;
        /* Start the disc where the pointer entered so it fades in on the spot
           instead of skating in from the corner. */
        cX = tX; cY = tY;
        card.style.transition = "box-shadow .3s ease, border-color .3s ease";
        coverInner.style.transition = "filter .8s cubic-bezier(.16,1,.3,1)";
        card.style.borderColor = "rgba(255,255,255,.18)";
        /* A neutral shadow with only a hint of the project's accent. The old
           one ringed the card in 33% accent and threw a 90px coloured glow,
           which lit five different colours across one row. */
        card.style.boxShadow =
          "0 0 0 1px " + hexRgba(accent, .16) +
          ", 0 30px 70px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.09)";
        shimmer.style.opacity = "1";
        raf = requestAnimationFrame(tick);
      }
    });

    function release() {
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
      live = false;
      card.style.transition =
        "opacity .65s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1), box-shadow .45s ease, border-color .45s ease";
      card.style.transform = card.classList.contains("revealed") ? "translateY(0) scale(1)" : "";
      card.style.borderColor = "";
      card.style.boxShadow = "";
      coverInner.style.transition = "";
      coverInner.style.transform = "";
      shimmer.style.opacity = "0";
    }
    card.addEventListener("pointerleave", release);
    card.addEventListener("pointercancel", release);

    card.addEventListener("click", function () { openModal(p); });
    card.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(p); }
    });

    return card;
  }

  /* ─── Utils ──────────────────────────────────────────────── */
  function el(tag, cls) { var n = document.createElement(tag); if (cls) n.className = cls; return n; }

  var motionQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
  function reducedMotion() { return !!(motionQuery && motionQuery.matches); }

  function injectCSS(str) { var s = document.createElement("style"); s.textContent = str; document.head.appendChild(s); }

  function awardIcon() {
    return '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3.2l2.35 4.76 5.25.76-3.8 3.7.9 5.24L12 15.9l-4.7 2.46.9-5.24-3.8-3.7 5.25-.76L12 3.2z"/></svg>';
  }

  function esc(s) {
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function hexRgba(hex, a) {
    hex = hex.replace("#","");
    if (hex.length === 3) hex = hex.split("").map(function(c){return c+c;}).join("");
    return "rgba("+parseInt(hex.slice(0,2),16)+","+parseInt(hex.slice(2,4),16)+","+parseInt(hex.slice(4,6),16)+","+a+")";
  }

})();
