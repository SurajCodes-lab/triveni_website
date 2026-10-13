// src/utilis/guides/week53/index.js
//
// The Week 53 guide and circuit paths, for the sitemap.
//
// Follows the WEEK48_NEW_PATHS / WEEK49_NEW_PATHS convention so the sitemap can
// list these at the guide family's own priority instead of letting them fall to
// the 0.6 catch-all sweep. The sweep does find them — every one was already in
// the sitemap — but at priority 0.6 and changefreq monthly, against 0.85 weekly
// for the Week 48 and 49 guides. For 37 pages published the same week that is
// a weaker crawl signal than they should carry.
//
// Listed explicitly rather than globbed because a sitemap should not depend on
// the filesystem at request time.

export const WEEK53_CIRCUIT_PATHS = [
  '/rajasthan-grand-circuit-by-car',
  '/himachal-grand-circuit-by-car',
  '/uttarakhand-hills-circuit-by-car',
  '/golden-triangle-with-ranthambore-by-car',
  '/char-dham-circuit-by-car',
  '/uttar-pradesh-heritage-circuit-by-car',
];

export const WEEK53_GUIDE_PATHS = [
  // permit and paperwork
  '/rohtang-pass-permit-guide',
  '/inner-line-permit-kinnaur-spiti',
  '/uttarakhand-yatra-registration',
  '/commercial-vehicle-state-permits',
  // cost
  '/week-long-cab-hire-cost',
  '/driver-night-charges-explained',
  '/one-way-drop-charges-explained',
  '/cab-waiting-charges-explained',
  '/local-package-or-outstation-which-applies',
  '/char-dham-yatra-cost-by-car',
  '/fastag-and-tolls-on-highway-trips',
  // comparison
  '/taxi-vs-train-delhi-to-agra',
  '/airport-pickup-vs-prepaid-taxi',
  '/sedan-or-suv-for-hill-roads',
  '/tempo-traveller-or-two-sedans',
  '/luggage-capacity-by-vehicle',
  // seasonal access
  '/when-does-rohtang-and-atal-tunnel-open',
  '/best-time-for-char-dham-by-road',
  '/monsoon-landslide-risk-hill-roads',
  '/best-time-for-rajasthan-by-road',
  '/monsoon-in-rajasthan-by-car',
  '/when-do-hill-stations-get-snow',
  '/fog-season-on-north-india-highways',
  '/kanwar-yatra-road-closures',
  // logistics
  '/how-many-km-per-day-by-car',
  '/driver-rest-and-long-drives',
  '/what-if-the-road-closes-mid-trip',
  '/pedestrian-only-zones-trip-planning',
  '/travelling-with-elderly-parents-by-cab',
  '/child-safety-seats-outstation-cab',
  '/women-travelling-alone-by-chauffeur-cab',
];

export const WEEK53_NEW_PATHS = [...WEEK53_CIRCUIT_PATHS, ...WEEK53_GUIDE_PATHS];
