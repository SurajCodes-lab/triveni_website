// src/lib/seo/noindex-families.mjs
//
// Pages that are built and served but deliberately kept OUT of Google's index.
// Plain ESM with no JSX or aliases so that next.config.mjs (headers),
// src/app/sitemap.js (URL list) and each family's page.js (robots meta) all
// read the same decision from one place.
//
// WHY (Week 47, 4 Sept 2026 — see 2.0/week47/week-47-templated-family-pruning.md)
// ----------------------------------------------------------------------------
// The 92-day Search Console export (19 May – 18 Aug) was joined against every
// prerendered page. Whole families that had been live for five to eleven months
// had either zero impressions across the quarter or a few dozen clicks spread
// over dozens of pages, while duplicating a stronger page for the same intent.
// Google's August 2026 core update explicitly demotes "scaled" templated pages
// with weak originality; a site carrying ~1,400 such pages is carrying that
// signal on every page it does want ranked. Removing them from the index is the
// standard recovery action. Pages stay live for visitors and keep passing link
// equity (noindex, FOLLOW). Nothing here redirects, so any family or rule can be
// reversed in one deploy.
//
// TWO LAYERS
//   1. NOINDEX_FAMILIES — whole families, prefix match, children only (the hub
//      /round-trip is not matched by '/round-trip/'). These also get an
//      X-Robots-Tag header in next.config.mjs.
//   2. NOINDEX_RULES — structural cuts inside families that are kept: the
//      non-Delhi route permutations of the two niche-vehicle templates, tempo
//      routes from origins with zero traffic, one-way pages that are neither the
//      corridor's canonical booking page nor an earner, and so on. Rules are
//      enforced by the robots meta only (per-slug, no header pattern) — and
//      because the global "index, follow" X-Robots-Tag header was removed at
//      the same time, the meta tag is the sole and unambiguous signal.
//   NOINDEX_ALLOW — pages a rule would catch but which earned ≥4 clicks in the
//   quarter. Generated from the export, not hand-picked. Revisit with fresh data.

// ---------------------------------------------------------------------------
// MASTER SWITCH (5 Sept 2026). The client's decision, on seeing the audit, was
// that the site should answer every possible search, so every page below is
// back in the index. The lists are kept exactly as decided so the audit stays
// on record and the switch can be revisited on fresh Search Console data after
// Google's August update finishes (around 21 Sept). Set to true to re-apply.
// ---------------------------------------------------------------------------
export const NOINDEX_ENABLED = false;

export const NOINDEX_FAMILIES = [
  { prefix: '/event-transportation-service/', pages: 129, clicks92d: 14, why: '2 of 129 pages had any traffic; the hub stays indexed' },
  { prefix: '/round-trip/', pages: 79, clicks92d: 51, why: 'root corridor page already offers the round-trip toggle; 22 of these were 301-ed in Week 43' },
  { prefix: '/tour-package/', pages: 36, clicks92d: 0, why: 'zero impressions in 92 days after 11 months live' },
  { prefix: '/how-to-reach/', pages: 30, clicks92d: 32, why: 'duplicates /distance and /travel-by-car for the same corridor' },
  { prefix: '/cab-service/', pages: 28, clicks92d: 97, why: 'synonym URL of the city hub (/agra vs /cab-service/agra); position 25.9' },
  { prefix: '/outstation-cabs/', pages: 22, clicks92d: 16, why: 'synonym of the city hub outstation section; position 34' },
  { prefix: '/bus-vs-cab/', pages: 20, clicks92d: 0, why: 'zero impressions in 92 days, live since March' },
  { prefix: '/dzire-hire/', pages: 20, clicks92d: 0, why: 'zero impressions in 92 days, live since March' },
  { prefix: '/fortuner-hire/', pages: 20, clicks92d: 0, why: 'zero impressions in 92 days, live since March' },
  { prefix: '/travel-options/', pages: 20, clicks92d: 0, why: 'zero impressions in 92 days, live since March' },
  { prefix: '/train-taxi/', pages: 15, clicks92d: 0, why: 'zero impressions in 92 days, live since March; hub stays' },
  { prefix: '/tourist-attractions/', pages: 14, clicks92d: 0, why: 'zero impressions in 92 days after 11 months live' },
  { prefix: '/where-to-go/', pages: 12, clicks92d: 0, why: 'zero impressions in 92 days, live since March' },
];

// Tempo-traveller route ORIGINS with zero traffic across every one of their
// pages in the quarter (8–22 pages each). Delhi, Haridwar, Rishikesh, Chandigarh,
// Manali, Lucknow, Jaipur and the rest earn and are untouched.
const TEMPO_DEAD_ORIGINS = ['dharamshala', 'faridabad', 'ghaziabad', 'gurgaon', 'jaisalmer', 'mathura', 'mount-abu', 'mussoorie', 'nainital'];

// Corridors where Week 43 made the /one-way-cab/ page the canonical booking
// page. Kept indexed regardless of traffic — they are redirect targets.
const ONE_WAY_CANONICAL = new Set([
  '/one-way-cab/delhi-to-dehradun', '/one-way-cab/delhi-to-manali', '/one-way-cab/delhi-to-nainital',
  '/one-way-cab/delhi-to-haridwar', '/one-way-cab/delhi-to-rishikesh', '/one-way-cab/delhi-to-shimla',
]);

const isRoute = (p) => p.includes('-to-');
const seg = (p, n) => p.split('/')[n] || '';

export const NOINDEX_RULES = [
  {
    id: 'urbania-non-delhi-routes',
    why: 'Force Urbania route permutations from 23 non-Delhi origins (276 pages). The proposal asked for city pages and Delhi-to-X routes; the rest was over-delivery, and no query containing "urbania" earned an impression in 92 days.',
    test: (p) => p.startsWith('/force-urbania/') && isRoute(p) && !p.startsWith('/force-urbania/delhi-to-'),
  },
  {
    id: 'maharaja-non-delhi-routes',
    why: 'Same cut for Maharaja Tempo Traveller (276 pages). No query containing "maharaja" earned an impression in 92 days.',
    test: (p) => p.startsWith('/maharaja-tempo-traveller/') && isRoute(p) && !p.startsWith('/maharaja-tempo-traveller/delhi-to-'),
  },
  {
    id: 'tempo-dead-origin-routes',
    why: 'Tempo Traveller routes from nine origins whose pages earned nothing at all in the quarter (114 pages).',
    test: (p) => p.startsWith('/tempo-traveller/') && isRoute(p) && TEMPO_DEAD_ORIGINS.includes(seg(p, 2).split('-to-')[0]),
  },
  {
    id: 'one-way-non-canonical',
    why: 'One-way pages for corridors with NO root page and no traffic (the 86 that duplicate a root page are 301-ed instead, see one-way-duplicate-redirects.mjs).',
    test: (p) => p.startsWith('/one-way-cab/') && isRoute(p) && !ONE_WAY_CANONICAL.has(p),
  },
  {
    id: 'vehicle-hire-corridors',
    why: 'Innova / Ertiga / Innova Crysta hire corridor pages (63 pages, 8 earn). The root corridor page carries the fleet and fares for every vehicle.',
    test: (p) => /^\/(innova-hire|ertiga-hire|innova-crysta-hire)\//.test(p),
  },
  {
    id: 'tours-with-guide-permutations',
    why: 'City × vehicle × duration guide-tour permutations (82 pages, 9 earn — the language-specific guide pages, which are allow-listed).',
    test: (p) => p.startsWith('/tours-with-guide/'),
  },
  {
    id: 'corporate-sub-pages',
    why: 'Corporate city × service and use-case permutations (131 pages, 6 earn). City hubs and industry pages are kept.',
    test: (p) => /^\/corporate-transportation-service\/(use-case\/[^/]+|[^/]+\/[^/]+)$/.test(p) && !p.startsWith('/corporate-transportation-service/industry/'),
  },
];

// Generated 4 Sept 2026 from Pages.csv: rule-matched pages with ≥4 clicks in 92 days.
export const NOINDEX_ALLOW = new Set([
  '/corporate-transportation-service/dehradun/government-psu',
  '/corporate-transportation-service/delhi/office-shuttle-service',
  '/corporate-transportation-service/gurgaon/office-shuttle-service',
  '/corporate-transportation-service/jaipur/monthly-car-rental-corporate',
  '/corporate-transportation-service/noida/office-shuttle-service',
  '/corporate-transportation-service/use-case/office-shuttle-service',
  '/ertiga-hire/delhi-to-agra',
  '/ertiga-hire/delhi-to-manali',
  '/ertiga-hire/delhi-to-shimla',
  '/innova-crysta-hire/delhi-to-jaipur',
  '/innova-crysta-hire/delhi-to-manali',
  '/innova-hire/delhi-to-agra',
  '/innova-hire/delhi-to-haridwar',
  '/innova-hire/delhi-to-manali',
  '/one-way-cab/agra-to-jaipur',
  '/one-way-cab/haridwar-to-delhi',
  '/one-way-cab/jaipur-to-delhi',
  '/one-way-cab/vrindavan-to-delhi',
  '/tours-with-guide/by-guide-language',
  '/tours-with-guide/french-speaking-tour-guide',
  '/tours-with-guide/german-speaking-tour-guide',
  '/tours-with-guide/golden-triangle-tour-with-spanish-speaking-guide',
  '/tours-with-guide/italian-speaking-tour-guide',
  '/tours-with-guide/japanese-speaking-tour-guide',
  '/tours-with-guide/mandarin-speaking-tour-guide',
  '/tours-with-guide/russian-speaking-tour-guide',
  '/tours-with-guide/spanish-speaking-tour-guide',
]);

/** Metadata `robots` value for a de-indexed page. The thirteen whole-family
 *  templates use this constant directly, so the master switch has to apply here
 *  as well as in isNoindexPath(): with the switch off it is a plain index,follow. */
export const NOINDEX_ROBOTS = NOINDEX_ENABLED
  ? { index: false, follow: true, googleBot: { index: false, follow: true } }
  : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } };

/** True when a path (with or without the origin) must carry noindex. */
export function isNoindexPath(pathOrUrl) {
  if (!NOINDEX_ENABLED) return false;
  const p = String(pathOrUrl || '').replace(/^https?:\/\/[^/]+/, '').replace(/[?#].*$/, '').replace(/\/$/, '') || '/';
  if (NOINDEX_ALLOW.has(p)) return false;
  if (NOINDEX_FAMILIES.some((f) => p.startsWith(f.prefix))) return true;
  return NOINDEX_RULES.some((r) => r.test(p));
}
