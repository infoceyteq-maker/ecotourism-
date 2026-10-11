import "./style.css";
import { navigationGroups, sitePages } from "./site-content.js";

const HOTEL_NAME = "Eminence Shire Hotel";
const CONTACT_EMAIL = "Hotel.eminens@gamil.com";
const CONTACT_PHONE = "+94776655493";

const ASSET = {
  hills: "/images/eminence-rainforest-retreat.jpg",
  pavilion: "/images/eminence-wellness-garden.jpg",
  chalets: "/images/eminence-eco-chalet.jpg",
  room: "/images/eminence-eco-chalet.jpg",
  pool: "/images/eminence-wellness-garden.jpg",
  dining: "/images/eminence-organic-table.jpg",
  cuisine: "/images/eminence-organic-table.jpg",
  valley: "/images/eminence-rainforest-retreat.jpg",
};

const arrow = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M13 5l7 7-7 7" /></svg>`;
const arrowUp = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20V4m-7 7 7-7 7 7" /></svg>`;
const chevron = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>`;
const closeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>`;

const routeAliases = {
  "/wellness/wellness-programs": "/wellness/programs",
  "/wellness/wellness-programs/sleep-recovery-retreat": "/wellness/programs/sleep-recovery-retreat",
  "/wellness/wellness-programs/stress-burnout-and-emotional-wellbeing": "/wellness/programs/stress-burnout",
  "/wellness/wellness-programs/gut-health-detox-weight-management": "/wellness/programs/gut-health",
  "/wellness/wellness-programs/longevity-vitality-ayurveda-retreat": "/wellness/programs/longevity",
  "/wellness/wellness-programs/womens-wellbeing": "/wellness/programs/womens-wellbeing",
  "/wellness/wellness-programs/strength-mobility-recovery": "/wellness/programs/mobility",
  "/wellness/wellness-programs/yoga-and-meditation-retreat": "/wellness/programs/yoga-meditation",
  "/wellness/wellness-programs/exclusive-yoga-retreat": "/wellness/programs/exclusive-yoga-retreat",
  "/sri-lanka-the-destination": "/destination",
  "/dining/the-restaurant": "/dining/restaurant",
  "/dining/waterfall-picnic": "/dining/rainforest-picnic",
  "/facilities/our-facilities": "/facilities",
  "/retreats/masters-in-residence": "/wellness/visiting-masters",
  "/host-a-retreat": "/retreats/host",
  "/special-offers": "/offers",
  "/the-founders-story": "/about/founder",
  "/success-stories-and-testimonials": "/success-stories",
  "/experience-sri-lanka": "/experience",
  "/wellness/speak-with-an-expert": "/contact",
  "/menu": "/dining/menu",
};

function canonicalRoute(path) {
  const raw = path.replace(/\/+$/, "") || "/";
  return routeAliases[raw] || raw;
}

function getRoute() {
  return canonicalRoute(window.location.pathname);
}

const routes = {
  "/philosophy": {
    nav: "Our Approach",
    eyebrow: "Eminence Shire Hotel",
    title: "Eco-Friendly Hospitality, Naturally.",
    subtitle: "A peaceful stay shaped by the rainforest, thoughtful hospitality and organic wellness.",
    image: ASSET.hills,
    introTitle: "A slower, more natural way to stay",
    intro: "Eminence Shire Hotel brings comfortable hospitality together with a respect for the surrounding landscape. Take time to rest, enjoy local produce, and choose wellness experiences at a pace that feels right for you.",
  },
  "/accommodation": {
    nav: "Accommodation",
    eyebrow: "Stay at Eminence",
    title: "A Restful Place in Nature",
    subtitle: "Comfortable, nature-connected rooms for a quiet stay in the Galle District.",
    image: ASSET.room,
    introTitle: "Make room to unwind",
    intro: "Thoughtful rooms provide a calm base for exploring the Southern Province. Natural textures, garden views and simple comforts invite you to slow down after a day among the rainforest, tea country or coast.",
  },
  "/wellness": {
    nav: "The Wellness Experience",
    eyebrow: "Organic Wellness",
    title: "A gentler approach to wellbeing.",
    subtitle: "Yoga, spa therapies, nourishing food and time in nature, offered in a tranquil garden setting.",
    image: ASSET.pool,
    introTitle: "Wellness, at your own pace",
    intro: "Choose from restorative treatments, yoga and mindful movement, supported by organic meals and the calm of the surrounding landscape. Experiences can be tailored to the time you have and the way you want to feel.",
  },
  "/dining": {
    nav: "Dining",
    eyebrow: "Organic Dining",
    title: "Nourishing Your Soul",
    subtitle: "Fresh, locally inspired food prepared with care and a focus on balance.",
    image: ASSET.dining,
    introTitle: "Organic ingredients · The six tastes",
    intro: "Eminence Shire Hotel brings together seasonal produce, Sri Lankan flavours and a balanced approach to dining. Enjoy meals made with care, with space for choice and personal dietary needs.",
  },
  "/destination": {
    nav: "Explore Galle",
    eyebrow: "Southern Province · Sri Lanka",
    title: "Pitigala, Sinharaja & Beyond",
    subtitle: "A lush Southern Province setting with green mountain views, rainforest, plantations, village life and the historic coast.",
    image: ASSET.valley,
    introTitle: "Where rainforest meets the coast",
    intro: "Eminence Shire Hotel is located in Thannavilla, Bangamukanda, Godamunna, Pitigala, in Sri Lanka’s Galle District. Discover the Sinharaja rainforest, local cinnamon, tea and rubber country, Ambalangoda’s traditional mask craft and the heritage of Galle.",
  },
};

const wellnessPrograms = [
  { title: "Sleep & Recovery", tag: "RESTORE", text: "Longevity begins with deep, restorative sleep. Find support for unrefreshing nights and low daytime energy.", image: ASSET.room, path: "/wellness/programs/sleep-recovery-retreat" },
  { title: "Stress, Burnout & Emotional Wellbeing", tag: "REBALANCE", text: "Modern life asks more of the mind than it was designed to carry. Make room for the nervous system to recover.", image: ASSET.pool, path: "/wellness/programs/stress-burnout" },
  { title: "Gut Health, Detox & Weight Management", tag: "RESET", text: "Support digestion, metabolism and vitality through personalised guidance and nourishing food.", image: ASSET.cuisine, path: "/wellness/programs/gut-health" },
  { title: "Longevity & Vitality", tag: "RENEW", text: "Ayubowan means may you live long. Restore capacity through sleep, movement, nourishment and care.", image: ASSET.valley, path: "/wellness/programs/longevity" },
  { title: "Women’s Wellbeing", tag: "NOURISH", text: "Thoughtful support for changing hormones, responsibilities and the natural stages of life.", image: ASSET.room, path: "/wellness/programs/womens-wellbeing" },
  { title: "Mobility, Strength & Recovery", tag: "MOVE WELL", text: "Reconnect with the strength, ease and confidence to move through life.", image: ASSET.pavilion, path: "/wellness/programs/mobility" },
  { title: "Yoga & Meditation", tag: "RETURN", text: "Pause, breathe and rediscover a sense of space within yourself.", image: ASSET.pool, path: "/wellness/programs/yoga-meditation" },
];

const galleryItems = [
  { title: "Eminence Shire Hotel in the Green", category: "Exterior", image: ASSET.hills, position: "center 57%" },
  { title: "Open-Air Wellness Pavilion", category: "Exterior", image: ASSET.pavilion, position: "center 53%" },
  { title: "Rainforest Retreat Setting", category: "Exterior", image: ASSET.hills, position: "center 60%" },
  { title: "Tropical Garden Path", category: "Exterior", image: ASSET.valley, position: "center 58%" },
  { title: "Eco-Friendly Guest Stay", category: "Rooms", image: ASSET.chalets, position: "center 80%" },
  { title: "Forest-View Room", category: "Rooms", image: ASSET.room, position: "right center" },
  { title: "A Quiet Place to Rest", category: "Rooms", image: ASSET.pavilion, position: "left center" },
  { title: "Yoga & Mindful Movement", category: "Wellness", image: ASSET.pool, position: "center 60%" },
  { title: "Garden Spa Therapies", category: "Wellness", image: ASSET.pool, position: "center 78%" },
  { title: "Garden-to-Table Produce", category: "Amenities", image: ASSET.dining, position: "center 53%" },
  { title: "The Dining Space", category: "Dining", image: ASSET.dining, position: "center 58%" },
  { title: "Organic Wellness Cuisine", category: "Dining", image: ASSET.cuisine, position: "center 78%" },
];

function routeLink(path, label, className = "") {
  if (/^https?:\/\//.test(path)) return `<a class="${className}" href="${path}" target="_blank" rel="noreferrer">${label}</a>`;
  return `<a class="${className}" href="${path}" data-route="${path}">${label}</a>`;
}

function renderHeader(route) {
  const active = (path) => route === path || route.startsWith(`${path}/`) ? " is-current" : "";
  const menuGroups = navigationGroups.map((group) => `
    <section class="menu-group">
      <a class="menu-group-title" href="${group.path}" data-route="${group.path}">${group.title} ${arrow}</a>
      <nav aria-label="${group.title}">${group.links.map(([label, path]) => routeLink(path, label, `menu-link${active(path)}`)).join("")}</nav>
    </section>`).join("");
  return `
    <header class="site-header" id="site-header">
      <div class="header-inner">
        <a class="brand" href="/" data-route="/" aria-label="Eminence Shire Hotel home">
          <img class="brand-logo" src="/images/eminence-logo.png" alt="Eminence Shire Hotel" width="1200" height="1182" decoding="async">
          <span class="brand-caption">SHIRE HOTEL <i></i> GALLE, SRI LANKA</span>
        </a>
        <nav class="desktop-nav" aria-label="Main navigation">
          <a class="nav-link${active("/wellness")}" href="/wellness" data-route="/wellness">Wellness</a>
          <a class="nav-link${active("/accommodation")}" href="/accommodation" data-route="/accommodation">Accommodation</a>
          <a class="nav-link${active("/dining")}" href="/dining" data-route="/dining">Dining</a>
          <a class="nav-link${active("/about")}" href="/about" data-route="/about">Resort overview</a>
          <a class="nav-link${active("/gallery")}" href="/gallery" data-route="/gallery">Gallery</a>
        </nav>
        <div class="header-actions">
          <button class="header-book" type="button" data-book>Book your stay <span>${arrow}</span></button>
          <button class="menu-toggle" type="button" data-menu-toggle aria-label="Open menu" aria-expanded="false">
            <span class="menu-toggle-label">Menu</span><span class="menu-icon"><i></i><i></i></span>
          </button>
        </div>
      </div>
    </header>
    <div class="mobile-panel" id="mobile-panel" aria-hidden="true">
      <div class="mobile-panel-top"><div><span class="eyebrow">THE EMINENCE EXPERIENCE</span><h2>Explore Eminence.</h2></div><span class="mobile-location">GALLE · SRI LANKA</span></div>
      <div class="menu-groups">${menuGroups}</div>
      <div class="mobile-panel-bottom"><span>PITIGALA · GALLE DISTRICT</span><button class="button button-dark" type="button" data-book>Book your stay ${arrow}</button><a href="tel:${CONTACT_PHONE}">Call · +94 77 66 55 4 93</a></div>
    </div>`;
}

function renderHomeHero() {
  return `
    <section class="hero hero-home" style="--hero-image: url('${ASSET.hills}')">
      <div class="hero-shade"></div>
      <div class="hero-copy">
        <span class="eyebrow hero-eyebrow">EMINENCE SHIRE HOTEL · PITIGALA, GALLE</span>
        <h1>Stay close to<br><em>nature.</em></h1>
        <p>Eco-friendly hospitality, organic wellness and green mountain views in Sri Lanka’s Southern Province.</p>
        <div class="hero-actions">
          ${routeLink("/philosophy", `Discover Eminence Shire ${arrow}`, "button button-light")}
          <button class="film-link" type="button" data-story><span class="play-icon">▶</span><span>Explore the experience</span></button>
        </div>
      </div>
      <div class="hero-side-note"><span></span><span>THANNAVILLA · PITIGALA · GALLE</span></div>
      <div class="hero-bottomline"><span>SINHARAJA · SOUTHERN PROVINCE</span><a href="#begin" class="scroll-cue">Scroll to explore <span>↓</span></a><span>01 — 05</span></div>
    </section>`;
}

function renderPageHero(page, isGallery = false) {
  return `
    <section class="hero hero-inner${isGallery ? " hero-gallery" : ""}" style="--hero-image: url('${page.image}')">
      <div class="hero-shade"></div>
      <div class="hero-copy">
        <span class="eyebrow hero-eyebrow">${page.eyebrow}</span>
        <h1>${page.title}</h1>
        <p>${page.subtitle}</p>
        <div class="hero-actions"><button class="button button-light" type="button" data-book>Book your stay ${arrow}</button></div>
      </div>
      <div class="hero-bottomline"><span>PITIGALA · GALLE DISTRICT</span><span>SOUTHERN PROVINCE · SRI LANKA</span></div>
    </section>`;
}

function renderSectionIntro(eyebrow, title, text, align = "center") {
  return `
    <div class="section-intro section-intro-${align}">
      <span class="eyebrow">${eyebrow}</span>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>`;
}

function renderImageCard({ eyebrow, title, text, image, path, link = "Discover more", index = "" }) {
  return `
    <article class="image-card">
      <a class="image-card-photo" href="${path}" data-route="${path}" aria-label="${title}" style="--card-image:url('${image}')">
        <span class="image-card-number">${index}</span>
        <span class="image-card-arrow">${arrow}</span>
      </a>
      <div class="image-card-copy">
        <span class="eyebrow">${eyebrow}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        ${routeLink(path, `${link} ${arrow}`, "text-link")}
      </div>
    </article>`;
}

function renderHome() {
  return `
    ${renderHomeHero()}
    <main id="begin">
      <section class="quick-facts" aria-label="Eminence Shire Hotel at a glance">
        <div><span class="fact-number fact-word">ECO</span><span class="fact-label">lighter-footprint<br>hospitality</span></div>
        <span class="fact-rule"></span>
        <div><span class="fact-number fact-word">ORGANIC</span><span class="fact-label">wellness and<br>seasonal dining</span></div>
        <span class="fact-rule"></span>
        <div><span class="fact-mark">∞</span><span class="fact-label">room to breathe<br>and reconnect</span></div>
        <a href="/destination" data-route="/destination" class="facts-location">PITIGALA, GALLE ${arrow}</a>
      </section>

      <section class="welcome-section section-pad">
        ${renderSectionIntro("ECO-FRIENDLY HOSPITALITY · ORGANIC WELLNESS", "A calm place to reconnect with nature and yourself.", "Welcome to Eminence Shire Hotel in Pitigala, Galle District. Set among the green landscapes of Sri Lanka’s Southern Province, our stay brings together comfortable hospitality, organic wellness, mindful movement and local experiences. Visit the Sinharaja rainforest, discover cinnamon, tea and rubber country, or take time simply to rest.")}
        <div class="welcome-grid">
          ${renderImageCard({ eyebrow: "OUR APPROACH", title: "The Eminence Experience", text: "Eco-friendly hospitality shaped by care for people, place and nature.", image: ASSET.hills, path: "/philosophy", index: "01" })}
          ${renderImageCard({ eyebrow: "ORGANIC WELLNESS", title: "Wellness Experiences", text: "Choose yoga, spa therapies, mindful movement and time to restore.", image: ASSET.pool, path: "/wellness/programs", index: "02" })}
          ${renderImageCard({ eyebrow: "PITIGALA · GALLE", title: "Sinharaja & Beyond", text: "Explore rainforest, plantations, traditional craft and Galle’s heritage.", image: ASSET.valley, path: "/destination", index: "03" })}
        </div>
      </section>

      <section class="healing-section section-pad">
        <div class="healing-image" style="--card-image:url('${ASSET.pavilion}')"><button class="healing-play" type="button" data-story aria-label="Explore the Eminence experience"><span>▶</span><small>EXPLORE EMINENCE</small></button></div>
        <div class="healing-copy"><span class="eyebrow">THE EMINENCE EXPERIENCE</span><h2>Wellness rooted<br><em>in nature.</em></h2><p>Make time for yoga, restorative spa therapies, organic food and fresh air in the quiet surroundings of Pitigala.</p>${routeLink("/wellness", `Discover our wellness services ${arrow}`, "text-link")}</div>
      </section>

      <section class="values-section section-cream">
        <div class="values-heading"><span class="eyebrow">OUR PROMISE TO PLACE</span><h2>Hospitality with<br><em>care.</em></h2><p>We believe a memorable stay should be thoughtful to guests and gentle on the natural surroundings.</p></div>
        <div class="values-stamps"><span>NATURE<br><small>RESPECT THE LAND</small></span><span>LOCAL<br><small>CELEBRATE COMMUNITY</small></span><span>ORGANIC<br><small>SEASONAL NOURISHMENT</small></span><span>WELLNESS<br><small>CARE AT YOUR PACE</small></span></div>
        <div class="values-link">${routeLink("/sustainability", `Explore our eco-friendly approach ${arrow}`, "text-link")}</div>
      </section>

      <section class="home-promos section-pad">
        <div class="home-promos-heading"><span class="eyebrow">MAKE TIME FOR WHAT MATTERS</span><h2>A little more<br><em>of the good stuff.</em></h2></div>
        <div class="home-promo-grid">
          ${renderImageCard({ eyebrow: "RETREATS", title: "Meet the Masters", text: "Discover visiting teachers and practitioners sharing their knowledge at Eminence.", image: ASSET.room, path: "/retreats/masters-in-residence", index: "01" })}
          ${renderImageCard({ eyebrow: "PERSONALISED WELLNESS", title: "Wellness Packages", text: "Find a programme to begin with, then let us shape the details around you.", image: ASSET.pool, path: "/wellness/programs", index: "02" })}
        </div>
      </section>

      <section class="design-section section-dark">
        <div class="design-image" style="--card-image:url('${ASSET.room}')"><span class="image-caption">A place of rest, shaped by the land</span></div>
        <div class="design-copy">
          <span class="eyebrow">ARCHITECTURE OF SILENCE</span>
          <h2>Where nature meets<br><em>intelligent design.</em></h2>
          <p>In Pitigala, the green landscapes of the Southern Province are part of the experience. Our eco-friendly approach brings nature into the stay—from the garden setting to organic dining and local excursions.</p>
          <ul class="quiet-list"><li>Thoughtful, naturally ventilated spaces</li><li>Designed to connect you with the outdoors</li><li>Room to disconnect, on your own terms</li></ul>
          ${routeLink("/accommodation", `Find your place to rest ${arrow}`, "text-link text-link-light")}
        </div>
      </section>

      <section class="wellness-band" style="--hero-image:url('${ASSET.pool}')">
        <div class="wellness-band-shade"></div>
        <div class="wellness-band-content">
          <span class="eyebrow">A MORE PERSONAL KIND OF WELLNESS</span>
          <h2>Healing begins<br>at the root.</h2>
          <p>Care shaped around you—guided by experienced practitioners, rooted in Ayurveda and held by the restorative rhythm of nature.</p>
          ${routeLink("/wellness", `Explore our programmes ${arrow}`, "button button-light")}
        </div>
        <span class="wellness-band-caption">SLOW IS A BEAUTIFUL PLACE TO START</span>
      </section>

      <section class="stay-section section-pad">
        <div class="section-heading-row">
          <div><span class="eyebrow">YOUR PRIVATE SANCTUARY</span><h2>A stay with space<br><em>to just be.</em></h2></div>
          <p>Comfortable, nature-connected rooms offer a quiet base for rainforest walks, plantation visits and restful days at the hotel.</p>
        </div>
        <div class="stay-grid">
          <article class="stay-card stay-card-large">
            <a href="/accommodation" data-route="/accommodation" class="stay-photo" style="--card-image:url('${ASSET.room}')" aria-label="Forest-view rooms"><span class="stay-count">A QUIET FOREST STAY</span><span class="image-card-arrow">${arrow}</span></a>
            <div class="stay-meta"><div><span class="eyebrow">REST CLOSE TO NATURE</span><h3>Forest-View Rooms</h3></div>${routeLink("/accommodation", "Discover", "text-link")}</div>
          </article>
          <article class="stay-card">
            <a href="/accommodation" data-route="/accommodation" class="stay-photo stay-photo-offset" style="--card-image:url('${ASSET.hills}')" aria-label="Garden rooms"><span class="stay-count">GREEN GARDEN SURROUNDS</span><span class="image-card-arrow">${arrow}</span></a>
            <div class="stay-meta"><div><span class="eyebrow">PRIVATE & RESTFUL</span><h3>Garden Rooms</h3></div>${routeLink("/accommodation", "Discover", "text-link")}</div>
          </article>
        </div>
        <div class="center-link">${routeLink("/accommodation", `Explore all accommodation ${arrow}`, "text-link")}</div>
      </section>

      <section class="dining-section section-cream">
        <div class="dining-copy">
          <span class="eyebrow">ORGANIC · LOCAL · SEASONAL</span>
          <h2>Good food.<br><em>Good feeling.</em></h2>
          <p>Enjoy fresh, locally inspired dishes shaped by Sri Lankan ingredients and a balanced approach to nourishment. Share a relaxed meal and let us know about your dietary needs.</p>
          ${routeLink("/dining", `Come to the table ${arrow}`, "text-link")}
        </div>
        <div class="dining-image" style="--card-image:url('${ASSET.dining}')"><span class="image-caption">A new way to savour the everyday</span></div>
      </section>

      <section class="quote-section section-pad">
        <span class="quote-mark">“</span>
        <span class="eyebrow">THE EMINENCE PROMISE</span>
        <blockquote>Rooted in nature. Made for a slower, more thoughtful stay.</blockquote>
        <span class="quote-attribution">EMINENCE SHIRE HOTEL &nbsp;·&nbsp; PITIGALA, GALLE</span>
        <div class="quote-controls"><span class="quote-progress"><i></i></span><span>01 / 03</span></div>
      </section>

      <section class="direct-benefits section-dark">
        <div class="direct-benefits-heading"><span class="eyebrow">THE EMINENCE EXPERIENCE</span><h2>Wellness to<br><em>make your own.</em></h2>${routeLink("/wellness/programs", `Explore wellness services ${arrow}`, "text-link text-link-light")}</div>
        <div class="benefit-details"><div class="benefit-list"><div><span>01</span><p><strong>Organic dining</strong><small>Locally inspired meals and thoughtful options.</small></p></div><div><span>02</span><p><strong>Yoga & movement</strong><small>Gentle practices for different experience levels.</small></p></div><div><span>03</span><p><strong>Spa therapies</strong><small>Restorative treatments in a garden setting.</small></p></div><div><span>04</span><p><strong>Ayurveda-inspired care</strong><small>Discuss your wellness interests with the team.</small></p></div><div><span>05</span><p><strong>Nature experiences</strong><small>Explore rainforest, village and plantation landscapes.</small></p></div><div><span>06</span><p><strong>Personalised stays</strong><small>Shape your visit around rest, wellness and discovery.</small></p></div></div><div class="benefit-inclusions-note"><span class="eyebrow">ECO-FRIENDLY HOSPITALITY</span><p>Enjoy the calm of Pitigala, the surrounding gardens and the Southern Province’s rich natural landscapes.</p><span class="eyebrow">ORGANIC WELLNESS</span><p>Choose the experiences that feel right to you, from nutritious meals and yoga to spa therapies and guided local excursions. Please contact the hotel to confirm availability.</p></div></div>
      </section>

      <section class="home-cta" style="--hero-image:url('${ASSET.hills}')">
        <div class="home-cta-shade"></div>
        <div class="home-cta-content"><span class="eyebrow">YOUR TIME, YOUR JOURNEY</span><h2>Make room<br><em>for stillness.</em></h2><p>We'd love to help you find the right place to begin.</p><button class="button button-light" type="button" data-book>Plan your stay ${arrow}</button></div>
        <span class="home-cta-side">EMINENCE · GALLE · SRI LANKA</span>
      </section>
    </main>`;
}

function renderPhilosophyContent() {
  return `
    <section class="story-section section-pad">
      <div class="story-grid">
        <div class="story-copy">
          <span class="eyebrow">01 — THE COMFORT OF QUIET</span>
          <h2>Stillness is not a mood.<br><em>It is a method.</em></h2>
          <p>When external demand eases, the nervous system begins to soften. Breathing slows, sleep deepens and the mind becomes less crowded—not through effort, but in an environment designed to hold you calmly.</p>
          <p>Silence, space, nature and rhythm work together to reduce stimulation, allowing your system to do what it is built to do when it feels safe enough: recover.</p>
        </div>
        <div class="story-photo" style="--card-image:url('${ASSET.pool}')"><span class="image-caption">A quieter rhythm, held by nature</span></div>
      </div>
    </section>
    <section class="philosophy-quote section-dark"><span class="eyebrow">A LONGER VIEW OF WELLBEING</span><h2>Vitality is not a distant ambition.<br><em>It is how you feel today.</em></h2><p>We support the foundations that help you meet life with steadier energy, clearer thinking and greater ease.</p></section>
    <section class="story-section section-pad story-reverse">
      <div class="story-grid">
        <div class="story-photo" style="--card-image:url('${ASSET.room}')"><span class="image-caption">Care that begins by listening</span></div>
        <div class="story-copy">
          <span class="eyebrow">02 — CARE THAT MEETS YOU WHERE YOU ARE</span>
          <h2>Personal care.<br><em>Room to breathe.</em></h2>
          <p>No two people arrive in the same place. Your patterns, history and thresholds are your own, and meaningful care begins by recognising that.</p>
          <p>Our team brings together medical insight, therapeutic support, movement practices and restorative rhythm—shaped around your needs, rather than forced into a template.</p>
          ${routeLink("/wellness", `Explore personalised wellness ${arrow}`, "text-link")}
        </div>
      </div>
    </section>
    <section class="carry-home section-cream"><span class="eyebrow">WHAT YOU CARRY HOME</span><h2>Clarity that stays<br><em>long after you leave.</em></h2><p>Leave with a better understanding of what depletes you, what restores you and the small, practical rhythms that help you feel more like yourself—wherever life happens next.</p><button class="button button-dark" type="button" data-book>Begin your journey ${arrow}</button></section>`;
}

function renderAccommodationContent() {
  const cards = [
    { title: "Forest-View Rooms", detail: "Rest in a calm, nature-connected space and wake to the green landscape of Pitigala.", image: ASSET.room, label: "NATURE-CONNECTED STAYS" },
    { title: "Garden Rooms", detail: "A peaceful room close to the gardens, ideal for slowing down between local excursions.", image: ASSET.hills, label: "GARDEN SURROUNDS" },
    { title: "Family & Longer Stays", detail: "Ask our team about room arrangements that suit your group and length of stay.", image: ASSET.pool, label: "STAY YOUR WAY" },
  ];
  return `
    <section class="accommodation-intro section-pad">
      <div class="accommodation-note"><span class="eyebrow">DISCONNECT & RECHARGE</span><h2>Designed for the<br><em>art of doing less.</em></h2></div>
      <div class="accommodation-copy"><p>Eminence Shire Hotel offers a restful base for discovering Pitigala and the Southern Province. Natural textures, garden surroundings and simple comforts help bring a slower rhythm to your stay.</p><p>Room types, amenities and accessibility details can vary. Contact us before booking and we will help you choose the best arrangement.</p></div>
    </section>
    <section class="stay-detail-section section-cream section-pad">
      <div class="section-heading-row"><div><span class="eyebrow">FIND YOUR PLACE TO REST</span><h2>Choose your<br><em>own kind of quiet.</em></h2></div><p>Nature-connected accommodation for relaxing after rainforest walks, plantation visits and days by the coast.</p></div>
      <div class="detail-card-grid">${cards.map((card, i) => `
        <article class="detail-card"><div class="detail-card-photo" style="--card-image:url('${card.image}')"><span class="stay-count">${card.label}</span></div><div class="detail-card-body"><span class="eyebrow">0${i + 1} &nbsp; / &nbsp; YOUR STAY</span><h3>${card.title}</h3><p>${card.detail}</p><button class="text-link" type="button" data-book>Enquire about this stay ${arrow}</button></div></article>`).join("")}</div>
    </section>
    <section class="included-section section-dark"><div><span class="eyebrow">WELLNESS & HOSPITALITY</span><h2>A stay shaped<br><em>around you.</em></h2></div><ul class="included-list"><li>Organic dining and local flavours</li><li>Yoga and mindful movement</li><li>Spa and wellness therapies</li><li>Guided experiences in the Southern Province</li></ul></section>`;
}

function renderWellnessOverviewContent() {
  return `
    <section class="wellness-overview section-pad">
      <div class="wellness-overview-lede"><span class="eyebrow">ORGANIC WELLNESS</span><h2>A sustainable approach<br><em>to feeling well.</em></h2><p>Choose from wellness experiences inspired by yoga, mindful movement, spa therapies, nourishing food and Ayurveda. The natural setting of Pitigala offers space to pause and reconnect.</p><p>Tell our team what you are looking for, and we can help you plan a stay around the services available during your visit.</p></div>
      <div class="welcome-grid wellness-overview-cards">
        ${renderImageCard({ eyebrow: "PERSONALISED PROGRAMMES", title: "Wellness Programmes", text: "Choose a pathway that reflects what matters to you now.", image: ASSET.pool, path: "/wellness/programs", index: "01" })}
        ${renderImageCard({ eyebrow: "WELLNESS FACILITIES", title: "Eminence Spa", text: "Restore with a considered selection of spa and wellness therapies.", image: ASSET.pavilion, path: "/facilities/eminence-spa", index: "02" })}
        ${renderImageCard({ eyebrow: "RETREATS & PRACTICE", title: "Yoga & Retreats", text: "Meet practitioners and make time for movement, learning and rest.", image: ASSET.room, path: "/retreats", index: "03" })}
      </div>
    </section>`;
}

function renderWellnessContent() {
  return `
    <section class="program-intro section-pad"><div>${renderSectionIntro("A PROGRAMME THAT STARTS WITH YOU", "Choose a place to begin.", "Every stay is shaped with our wellness team. Explore a starting point below, then let us personalise the details around you.")}</div></section>
    <section class="program-section section-cream section-pad"><div class="program-grid">${wellnessPrograms.map((program, index) => `
      <article class="program-card"><div class="program-image" style="--card-image:url('${program.image}')"><span class="program-tag">${program.tag}</span><span class="program-number">0${index + 1}</span></div><div class="program-copy"><span class="eyebrow">A PERSONALISED WELLNESS JOURNEY</span><h3>${program.title}</h3><p>${program.text}</p>${routeLink(program.path, `Discover more ${arrow}`, "text-link")}</div></article>`).join("")}</div></section>
    <section class="wellness-includes section-pad"><div class="wellness-includes-copy"><span class="eyebrow">THE EMINENCE RHYTHM</span><h2>Care that continues<br><em>through the day.</em></h2><p>Therapeutic sessions sit alongside nourishing food, movement, rest and time in nature. The rhythm is gentle, personal and never rushed.</p></div><div class="rhythm-list"><div><span>01</span><p><strong>Listen</strong><small>Begin with a personal wellness consultation.</small></p></div><div><span>02</span><p><strong>Restore</strong><small>Receive care shaped around your goals and needs.</small></p></div><div><span>03</span><p><strong>Carry forward</strong><small>Leave with simple guidance for everyday life.</small></p></div></div></section>`;
}

function renderDiningContent() {
  const experiences = [
    { title: "Organic Wellness Cuisine", image: ASSET.cuisine, text: "Fresh, locally inspired meals with thoughtful options for different dietary needs.", path: "/dining/organic-wellness-cuisine" },
    { title: "The Restaurant", image: ASSET.dining, text: "A relaxed place to enjoy seasonal food and Sri Lankan flavours.", path: "/dining/restaurant" },
    { title: "Rainforest Picnic", image: ASSET.valley, text: "Ask about a picnic experience surrounded by the lush landscape of the Southern Province.", path: "/dining/rainforest-picnic" },
  ];
  return `
    <section class="dining-story section-pad"><div class="dining-story-copy"><span class="eyebrow">ORGANIC · LOCAL · SEASONAL</span><h2>Balance, pleasure<br><em>and nourishment.</em></h2><p>Food is an important part of a restorative stay. Our dining celebrates seasonal ingredients and Sri Lankan flavours, with an emphasis on organic wellness and balanced meals.</p><p>Let the team know about allergies or dietary preferences before your visit so we can discuss suitable choices.</p>${routeLink("/dining/organic-wellness-cuisine", `Explore organic wellness dining ${arrow}`, "text-link")}</div><div class="dining-story-photo" style="--card-image:url('${ASSET.dining}')"><span class="image-caption">Fresh flavours from the garden</span></div></section>
    <section class="dining-experiences section-cream section-pad"><div class="section-heading-row"><div><span class="eyebrow">SAVOUR YOUR STAY</span><h2>Discover dining<br><em>at Eminence.</em></h2></div><p>Enjoy organic meals, a relaxed restaurant setting and locally inspired dining experiences.</p></div><div class="detail-card-grid">${experiences.map((item, i) => `<article class="detail-card"><div class="detail-card-photo" style="--card-image:url('${item.image}')"></div><div class="detail-card-body"><span class="eyebrow">0${i + 1} &nbsp; / &nbsp; DINING</span><h3>${item.title}</h3><p>${item.text}</p>${routeLink(item.path, `Discover more ${arrow}`, "text-link")}</div></article>`).join("")}</div></section>
    <section class="carry-home section-dark"><span class="eyebrow">A TABLE WITH A VIEW</span><h2>Nourishment<br><em>for body and soul.</em></h2><p>Take your time over a meal made with care, seasonal produce and the flavours of Sri Lanka.</p>${routeLink("/contact", `Ask us about dining ${arrow}`, "text-link text-link-light")}</section>`;
}

function renderDestinationContent() {
  const sections = [
    { title: "Sinharaja Rainforest", eyebrow: "01 · RAINFOREST & WILDLIFE", text: "Explore Sinharaja, one of Sri Lanka’s largest remaining rainforests, with a local guide. Walk beneath a dense canopy, listen for birds and discover the rich plant life of the southern wet zone. Check current access, weather and route conditions before setting out." },
    { title: "Cinnamon, Tea & Rubber Country", eyebrow: "02 · LOCAL LANDSCAPES", text: "Pitigala and the surrounding Galle District are shaped by plantations and village agriculture. Ask about opportunities to learn how cinnamon is grown and prepared, and to see tea and rubber landscapes with local hosts." },
    { title: "Ambalangoda Mask Craft", eyebrow: "03 · CULTURE & CRAFT", text: "Discover the expressive masks and wood-carving traditions associated with Ambalangoda. A visit can introduce the craft, its characters and the skill behind each piece." },
    { title: "Galle Fort & the Southern Coast", eyebrow: "04 · HERITAGE & SEA", text: "Explore the historic streets of Galle Fort and the nearby coastline. The Eminence team can help plan a day trip that balances local heritage with time to relax." },
  ];
  return `
    <section class="destination-story section-pad"><div class="destination-image" style="--card-image:url('${ASSET.hills}')"><span class="image-caption">Rainforest country · Pitigala, Galle</span></div><div class="destination-copy"><span class="eyebrow">WHERE RAINFOREST MEETS THE COAST</span><h2>A landscape that<br><em>invites discovery.</em></h2><p>Eminence Shire Hotel is located at Thannavilla, Bangamukanda, Godamunna, Pitigala, in Sri Lanka’s Galle District. The Southern Province is known for its lush landscapes, village life and warm coastal heritage.</p><p>Make time for the Sinharaja rainforest, discover cinnamon, tea and rubber country, visit Ambalangoda’s mask artisans or explore historic Galle. At the hotel, return to organic wellness, thoughtful hospitality and a slower pace.</p></div></section>
    <section class="explore-section section-cream section-pad"><div class="section-heading-row"><div><span class="eyebrow">PITIGALA · GALLE DISTRICT</span><h2>Rooted in place.<br><em>Open to discovery.</em></h2></div><p>Explore rainforest, agriculture, craft and coastal heritage with experiences planned at a pace that suits your stay.</p></div><div class="explore-grid">${sections.map((item, i) => `<article class="explore-card"><span class="explore-number">0${i + 1}</span><span class="eyebrow">${item.eyebrow}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join("")}</div></section>
    <section class="getting-here section-dark"><div><span class="eyebrow">YOUR SOUTHERN SRI LANKA BASE</span><h2>Find your way<br><em>to Pitigala.</em></h2></div><div><p>Our address is Thannavilla, Bangamukanda, Godamunna, Pitigala, Galle District, Southern Province, Sri Lanka. Contact the hotel for help planning the route and local transfers.</p>${routeLink("/getting-here", `Getting to Eminence ${arrow}`, "button button-light")}</div></section>`;
}

function renderGalleryContent() {
  return `
    <section class="gallery-section section-pad">
      ${renderSectionIntro("A SENSE OF PLACE", "Discover Eminence Shire Hotel", "Explore eco-friendly hospitality, organic wellness and the lush Southern Province.")}
      <div class="gallery-filters" role="group" aria-label="Filter gallery images">
        ${["All", "Exterior", "Rooms", "Wellness", "Dining", "Amenities"].map((item, i) => `<button class="gallery-filter${i === 0 ? " is-active" : ""}" type="button" data-gallery-filter="${item}">${item}</button>`).join("")}
      </div>
      <div class="gallery-grid">${galleryItems.map((item, index) => `
        <button class="gallery-item${index % 5 === 0 ? " gallery-item-tall" : ""}" type="button" data-gallery-item data-category="${item.category}" data-lightbox="${item.image}" data-alt="${item.title}" style="--card-image:url('${item.image}');--image-position:${item.position}">
          <span class="gallery-hover"><span>${item.category}</span><strong>${item.title}</strong><i>${arrow}</i></span>
        </button>`).join("")}</div>
    </section>
    <section class="gallery-bottom section-dark"><span class="eyebrow">COME AND SEE FOR YOURSELF</span><h2>Some things are<br><em>better felt than told.</em></h2><button class="button button-light" type="button" data-book>Plan your stay ${arrow}</button></section>`;
}

function renderSiteSections(page) {
  return (page.sections || []).map((section, index) => {
    const list = section.bullets?.length
      ? `<ul class="site-bullet-list">${section.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";
    const links = section.links?.length
      ? `<div class="site-link-list">${section.links.map(([label, path]) => routeLink(path, `${label} ${arrow}`, "text-link")).join("")}</div>`
      : "";
    return `
      <section class="site-content-section${index % 2 ? " section-cream" : ""}">
        <div class="site-content-inner">
          <span class="eyebrow">${page.eyebrow}</span>
          <div class="site-content-copy">
            <h2>${section.title || page.introTitle}</h2>
            ${section.text ? `<p>${section.text}</p>` : ""}${list}${links}
          </div>
        </div>
      </section>`;
  }).join("");
}

function renderContactForm() {
  return `
    <section class="contact-form-section section-cream section-pad">
      <div class="contact-form-heading"><span class="eyebrow">SEND AN ENQUIRY</span><h2>How can we<br><em>help you?</em></h2><p>Tell us a little about your plans and the team will get back to you.</p></div>
      <form id="contact-form" class="contact-form">
        <div class="contact-form-grid"><label>First name<input name="firstName" autocomplete="given-name" required></label><label>Last name<input name="lastName" autocomplete="family-name" required></label><label>Email address<input name="email" type="email" autocomplete="email" required></label><label>Phone<input name="phone" type="tel" autocomplete="tel"></label><label>Country<input name="country" autocomplete="country-name"></label><label>Purpose of enquiry<select name="purpose"><option>Reservation</option><option>Marketing / PR</option><option>Host a Retreat</option><option>General enquiry</option></select></label></div>
        <label class="contact-message-label">Subject<textarea name="subject" rows="4" required></textarea></label>
        <label class="contact-consent"><input type="checkbox" required><span>I have read the <a href="/privacy-policy" data-route="/privacy-policy">Privacy Notice</a>.</span></label>
        <button class="button button-dark" type="submit">Inquire now ${arrow}</button><p id="contact-status" class="contact-status" aria-live="polite"></p>
      </form>
    </section>`;
}

function renderSitePage(route, page) {
  const body = page.listing === "wellness" ? renderWellnessContent() : renderSiteSections(page);
  const contact = page.contactForm ? renderContactForm() : "";
  const title = { ...page, image: page.image || ASSET.hills };
  return `${renderPageHero(title)}<main><section class="interior-intro section-pad">${renderSectionIntro(page.eyebrow.toUpperCase(), page.introTitle, page.intro)}<div class="intro-ornament" aria-hidden="true">✳</div></section>${body}${contact}</main>`;
}

function renderInteriorPage(route) {
  if (route === "/gallery") {
    const gallery = { eyebrow: "A sense of place", title: "Eminence Shire Hotel", subtitle: "Eco-friendly hospitality and organic wellness in Pitigala, Galle District.", image: ASSET.hills };
    return `${renderPageHero(gallery, true)}<main>${renderGalleryContent()}</main>`;
  }
  const page = routes[route];
  if (!page && sitePages[route]) return renderSitePage(route, sitePages[route]);
  if (!page) {
    const fallback = { eyebrow: "Eminence Shire Hotel", title: "Discover Eminence", subtitle: "Eco-friendly hospitality and organic wellness in Pitigala, Galle District.", image: ASSET.hills, introTitle: "A place to slow down", intro: "Contact the hotel team for information about your stay, wellness services and local experiences." };
    return renderSitePage(route, sitePages[route] || fallback);
  }
  let body = "";
  if (route === "/philosophy") body = renderPhilosophyContent();
  if (route === "/accommodation") body = renderAccommodationContent();
  if (route === "/wellness") body = renderWellnessOverviewContent();
  if (route === "/dining") body = renderDiningContent();
  if (route === "/destination") body = renderDestinationContent();
  return `${renderPageHero(page)}<main><section class="interior-intro section-pad">${renderSectionIntro(page.eyebrow.toUpperCase(), page.introTitle, page.intro)}<div class="intro-ornament" aria-hidden="true">✳</div></section>${body}</main>`;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-brand-block"><a class="brand brand-footer" href="/" data-route="/"><img class="brand-logo" src="/images/eminence-logo.png" alt="Eminence Shire Hotel" width="1200" height="1182" loading="lazy" decoding="async"><span class="brand-caption">SHIRE HOTEL <i></i> GALLE, SRI LANKA</span></a><p>Eco-friendly hospitality.<br>Organic wellness.</p><span class="footer-coordinates">PITIGALA · SOUTHERN PROVINCE</span></div>
        <div class="footer-column"><span class="eyebrow">EXPLORE</span>${routeLink("/philosophy", "Our Approach")}${routeLink("/wellness/programs", "Wellness Experiences")}${routeLink("/accommodation", "Accommodation")}${routeLink("/dining", "Organic Dining")}${routeLink("/facilities", "Hotel Facilities")}${routeLink("/offers", "Stay Offers")}${routeLink("/destination", "Sinharaja & Galle")}${routeLink("/gallery", "Gallery")}</div>
        <div class="footer-column footer-contact"><span class="eyebrow">FIND US</span><p>Eminence Shire Hotel<br>Thannavilla, Bangamukanda<br>Godamunna, Pitigala<br>Galle District, Southern Province<br>Sri Lanka</p><a href="tel:${CONTACT_PHONE}">+94 77 66 55 4 93 · Call us</a><a href="mailto:Hotel.eminens@gamil.com">Hotel.eminens@gamil.com</a>${routeLink("/contact", `Send an enquiry ${arrow}`)}</div>
        <div class="footer-newsletter"><span class="eyebrow">A NOTE FROM PITIGALA</span><h3>Stay close<br>to nature.</h3><p>Get in touch for seasonal updates and stay information.</p><form class="newsletter-form" id="newsletter-form"><label class="sr-only" for="newsletter-email">Email address</label><input id="newsletter-email" name="email" type="email" placeholder="Your email address" required><button type="submit" aria-label="Subscribe">${arrow}</button><label class="newsletter-consent"><input type="checkbox" required><span>I have read the <a href="/privacy-policy" data-route="/privacy-policy">Privacy Notice</a>.</span></label></form><p class="newsletter-status" id="newsletter-status" aria-live="polite"></p></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Eminence Shire Hotel</span><span class="footer-bottom-note">Thannavilla · Pitigala · Galle District</span><a href="/privacy-policy" data-route="/privacy-policy">Privacy Notice</a></div>
    </footer>`;
}

function renderDialogs() {
  return `
    <dialog class="booking-dialog" id="booking-dialog" aria-labelledby="booking-title">
      <button class="dialog-close" type="button" data-close-dialog aria-label="Close booking form">${closeIcon}</button>
      <div class="booking-dialog-image" style="--card-image:url('${ASSET.hills}')"><span class="eyebrow">EMINENCE SHIRE HOTEL · PITIGALA</span></div>
      <div class="booking-dialog-content">
        <span class="eyebrow">PLAN A NATURE-LED STAY</span>
        <h2 id="booking-title">Stay at Eminence.</h2>
        <p>Choose your dates and guest count. We’ll prepare an enquiry email for the hotel team.</p>
        <form id="booking-form">
          <div class="booking-fields"><label>Arrival<input type="date" name="arrival" id="arrival-date" required></label><label>Departure<input type="date" name="departure" id="departure-date" required></label></div>
          <label class="guest-select">Guests<select name="guests"><option>1 guest</option><option selected>2 guests</option><option>3 guests</option><option>4 guests</option></select></label>
          <button class="button button-dark booking-submit" type="submit">Email a stay enquiry ${arrow}</button>
          <p class="booking-form-note">This opens your email app with your dates and guest count. You can also contact us at <a href="mailto:Hotel.eminens@gamil.com">Hotel.eminens@gamil.com</a>.</p>
          <p class="booking-success" id="booking-success" role="status" hidden>Your enquiry has been prepared in your email app. Please send it to complete your request.</p>
        </form>
      </div>
    </dialog>
    <dialog class="story-dialog" id="story-dialog" aria-labelledby="story-title">
      <button class="dialog-close dialog-close-light" type="button" data-close-dialog aria-label="Close">${closeIcon}</button>
      <div class="story-video-frame" style="background-image:url('${ASSET.hills}');background-size:cover;background-position:center" role="img" aria-label="Eco-lodge surrounded by rainforest"></div>
      <div class="story-dialog-copy"><span class="eyebrow">THE EMINENCE EXPERIENCE</span><h2 id="story-title">Breathe in<br><em>the green.</em></h2><p>Come to Pitigala for eco-friendly hospitality, organic wellness and time to explore the landscapes and culture of Sri Lanka’s Southern Province.</p><button class="button button-light" type="button" data-close-dialog>Continue exploring ${arrow}</button></div>
    </dialog>
    <dialog class="lightbox-dialog" id="lightbox-dialog" aria-label="Gallery image">
      <button class="dialog-close dialog-close-light" type="button" data-close-dialog aria-label="Close image">${closeIcon}</button>
      <img id="lightbox-image" src="" alt=""><p id="lightbox-caption"></p>
    </dialog>`;
}

function render() {
  const route = getRoute();
  const view = route === "/" ? renderHome() : renderInteriorPage(route);
  const title = routes[route]?.nav || sitePages[route]?.title || (route === "/gallery" ? "Gallery" : HOTEL_NAME);
  document.title = route === "/" ? `${HOTEL_NAME} — Eco-Friendly Hospitality & Organic Wellness` : `${title} | ${HOTEL_NAME}`;
  document.querySelector("#app").innerHTML = `${renderHeader(route)}${view}${renderFooter()}${renderDialogs()}<button class="back-to-top" type="button" aria-label="Back to top" data-top>${arrowUp}</button>`;
  updateHeaderState();
  setDateDefaults();
}

function updateHeaderState() {
  const header = document.querySelector("#site-header");
  if (header) header.classList.toggle("is-scrolled", window.scrollY > 32);
}

function setDateDefaults() {
  const arrival = document.querySelector("#arrival-date");
  const departure = document.querySelector("#departure-date");
  if (!arrival || !departure) return;
  const toISO = (date) => {
    const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return localDate.toISOString().slice(0, 10);
  };
  const today = new Date();
  const inTwoWeeks = new Date(today);
  inTwoWeeks.setDate(inTwoWeeks.getDate() + 14);
  const threeNights = new Date(inTwoWeeks);
  threeNights.setDate(threeNights.getDate() + 3);
  arrival.min = toISO(today);
  departure.min = toISO(today);
  arrival.value = toISO(inTwoWeeks);
  departure.value = toISO(threeNights);
  arrival.addEventListener("change", () => {
    const nextDay = new Date(`${arrival.value}T12:00:00`);
    nextDay.setDate(nextDay.getDate() + 1);
    departure.min = toISO(nextDay);
    if (!departure.value || departure.value <= arrival.value) departure.value = toISO(nextDay);
  });
}

function navigate(path) {
  const target = canonicalRoute(path);
  if (target !== getRoute()) window.history.pushState({}, "", target);
  document.body.classList.remove("menu-open");
  window.scrollTo({ top: 0, behavior: "auto" });
  render();
}

function openDialog(id) {
  const dialog = document.getElementById(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function closeOpenDialog() {
  document.querySelectorAll("dialog[open]").forEach((dialog) => dialog.close());
}

render();

window.addEventListener("popstate", render);
window.addEventListener("scroll", () => {
  updateHeaderState();
  document.querySelector(".back-to-top")?.classList.toggle("is-visible", window.scrollY > 700);
}, { passive: true });

// Event delegation keeps navigation and controls working after route changes.
document.addEventListener("click", (event) => {
  const routeAnchor = event.target.closest("a[data-route]");
  if (routeAnchor) {
    event.preventDefault();
    navigate(routeAnchor.dataset.route);
    return;
  }

  if (event.target.closest("[data-book]")) {
    openDialog("booking-dialog");
    return;
  }

  const menuToggle = event.target.closest("[data-menu-toggle]");
  if (menuToggle) {
    const panel = document.querySelector("#mobile-panel");
    const isOpen = panel?.classList.toggle("is-open") || false;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    panel?.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    return;
  }

  const dropdownToggle = event.target.closest("[data-dropdown-toggle]");
  if (dropdownToggle) {
    const parent = dropdownToggle.closest(".nav-dropdown");
    const isOpen = parent.classList.toggle("is-open");
    dropdownToggle.setAttribute("aria-expanded", String(isOpen));
    return;
  }
  if (!event.target.closest(".nav-dropdown")) {
    document.querySelectorAll(".nav-dropdown.is-open").forEach((menu) => {
      menu.classList.remove("is-open");
      menu.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
    });
  }

  const filter = event.target.closest("[data-gallery-filter]");
  if (filter) {
    document.querySelectorAll("[data-gallery-filter]").forEach((button) => button.classList.toggle("is-active", button === filter));
    const chosen = filter.dataset.galleryFilter;
    document.querySelectorAll("[data-gallery-item]").forEach((item) => {
      item.hidden = chosen !== "All" && item.dataset.category !== chosen;
    });
    return;
  }

  const imageButton = event.target.closest("[data-lightbox]");
  if (imageButton) {
    const image = document.querySelector("#lightbox-image");
    image.src = imageButton.dataset.lightbox;
    image.alt = imageButton.dataset.alt || "Eminence gallery image";
    document.querySelector("#lightbox-caption").textContent = imageButton.dataset.alt || "";
    openDialog("lightbox-dialog");
    return;
  }

  if (event.target.closest("[data-story]")) {
    openDialog("story-dialog");
    return;
  }

  if (event.target.closest("[data-close-dialog]")) {
    closeOpenDialog();
    return;
  }

  if (event.target.closest("[data-top]")) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

document.addEventListener("click", (event) => {
  if (event.target instanceof HTMLDialogElement && event.target.open) event.target.close();
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "booking-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    const booking = new FormData(event.target);
    const body = [
      `Hello ${HOTEL_NAME},`,
      "",
      "I would like to enquire about a stay:",
      `Arrival: ${booking.get("arrival")}`,
      `Departure: ${booking.get("departure")}`,
      `Guests: ${booking.get("guests")}`,
      "",
      "Please let me know availability and current rates.",
    ].join("\n");
    document.querySelector("#booking-success").hidden = false;
    event.target.querySelector(".booking-submit").textContent = "Enquiry prepared";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Stay enquiry · ${HOTEL_NAME}`)}&body=${encodeURIComponent(body)}`;
  }
  if (event.target.id === "newsletter-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    document.querySelector("#newsletter-status").textContent = "Thank you. Newsletter signup is a front-end demo and was not sent.";
    event.target.reset();
  }
  if (event.target.id === "contact-form") {
    event.preventDefault();
    if (!event.target.reportValidity()) return;
    const enquiry = new FormData(event.target);
    const body = [...enquiry.entries()].map(([key, value]) => `${key}: ${value}`).join("\n");
    document.querySelector("#contact-status").textContent = "Opening your email app to send the enquiry to the hotel.";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Website enquiry · ${HOTEL_NAME}`)}&body=${encodeURIComponent(body)}`;
  }
});
