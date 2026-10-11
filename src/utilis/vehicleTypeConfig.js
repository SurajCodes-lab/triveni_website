// src/utilis/vehicleTypeConfig.js
// Vehicle-type resolver for the generalized city + route landing-page system.
// Turns the rich per-type data in vehicleTypeData.js (seaters, per-km, copy,
// accent, FAQs) into the flat config + tempoFleet-shaped fleet the
// VehicleCityClient / VehicleRouteClient / vehicleCityRoutePage factory need.
//
// One canonical city page per (vehicle type × city) targets the full proposal
// keyword cluster (on rent, hire, booking, price, per km, cheap, AC, luxury,
// outstation, seater-specific, airport transfer) via copy / H2 / FAQ / meta —
// not 34 thin near-duplicate pages. Anti-cannibalization by design.

import { vehicleTypeData, VEHICLE_TYPE_ORDER } from '@/utilis/vehicleTypeData';
import { groupDigits } from '@/utilis/pricing';

// Per-type Tailwind gradient used for fleet-card accents / pricing text.
// Chosen to feel distinct from the city-driven hero gradient.
const TYPE_FLEET_GRADIENTS = {
  'tempo-traveller': [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600',
    'from-purple-500 to-purple-600',
    'from-orange-500 to-orange-600',
    'from-yellow-500 to-yellow-600',
  ],
  'force-urbania': [
    'from-indigo-500 to-indigo-600',
    'from-sky-500 to-sky-600',
    'from-cyan-500 to-blue-600',
    'from-violet-500 to-indigo-600',
  ],
  'maharaja-tempo-traveller': [
    'from-rose-500 to-pink-600',
    'from-amber-500 to-rose-600',
  ],
};

// The seater most groups book — flagged POPULAR on the fleet card.
const POPULAR_SEATER = {
  'tempo-traveller': 17,
  'force-urbania': 13,
  'maharaja-tempo-traveller': 17,
};

// Human label for the H1 + sticky CTA, e.g. "Force Urbania", "Maharaja Tempo Traveller".
const CITY_HERO_LABEL = {
  'tempo-traveller': 'Tempo Traveller',
  'force-urbania': 'Force Urbania',
  'maharaja-tempo-traveller': 'Maharaja Tempo Traveller',
};

const SERVICE_TYPE = {
  'tempo-traveller': 'Tempo Traveller Rental',
  'force-urbania': 'Force Urbania Rental',
  'maharaja-tempo-traveller': 'Maharaja Tempo Traveller Rental',
};

// Lowercase token used in keyword clusters + WhatsApp pre-fill copy.
const KW_TOKEN = {
  'tempo-traveller': 'tempo traveller',
  'force-urbania': 'force urbania',
  'maharaja-tempo-traveller': 'maharaja tempo traveller',
};

// Colloquial names for the same vehicle. People do not consistently use the
// manufacturer's wording: a Force Urbania is very commonly searched as
// "urbania tempo traveller" or just "urbania", and the SEO Expansion Proposal
// lists "Urbania Tempo Traveller {city}" as its own line item. These aliases
// belong on the SAME canonical page as the primary token — they are the same
// intent under a different name, not a reason for a second URL.
const KW_ALIASES = {
  'tempo-traveller': [],
  'force-urbania': ['urbania tempo traveller', 'urbania'],
  'maharaja-tempo-traveller': ['maharaja tempo', 'maharaja urbania'],
};

// Build a tempoFleet-shaped array from a type's seaters so the existing
// premium fleet grid renders unchanged for any vehicle type.
function buildFleet(typeSlug) {
  const t = vehicleTypeData[typeSlug];
  const gradients = TYPE_FLEET_GRADIENTS[typeSlug] || TYPE_FLEET_GRADIENTS['tempo-traveller'];
  const popularSeats = POPULAR_SEATER[typeSlug];
  return t.seaters.map((s, i) => {
    const low = Math.round(s.perKm * 300);
    const high = Math.round(s.perKm * 380);
    return {
      id: i + 1,
      name: `${s.name} ${t.type}`,
      capacity: s.capacity,
      luggage: s.luggage,
      outstationRate: `₹${groupDigits(s.perKm)}/km`,
      localRate: `₹${low.toLocaleString('en-IN')}-${high.toLocaleString('en-IN')}/Day`,
      features: t.features.slice(0, 4),
      image: s.image,
      color: gradients[i % gradients.length],
      popular: s.seats === popularSeats,
      premium: t.premium,
      seats: s.seats,
      perKm: s.perKm,
      blurb: s.blurb,
    };
  });
}

// Direct-answer fare-table rows (AEO / featured-snippet target) per type.
function buildTableRows(typeSlug) {
  const t = vehicleTypeData[typeSlug];
  const popularSeats = POPULAR_SEATER[typeSlug];
  return t.seaters.map((s) => ({
    v: `${s.name} ${t.type}`,
    s: String(s.seats - 1) + '-' + String(s.seats),
    r: `₹${groupDigits(s.perKm)}/km`,
    b: s.seats === popularSeats ? 'Most popular — groups' : s.blurb,
  }));
}

// PriceCalculator vehicle list (rates per km) fed by the type's own seaters.
function buildCalculatorVehicles(typeSlug) {
  const t = vehicleTypeData[typeSlug];
  return t.seaters.map((s) => ({
    key: `${typeSlug}-${s.seats}`,
    label: `${s.name}`,
    ratePerKm: s.perKm,
  }));
}

// The full proposal keyword cluster for one (vehicle type × city).
// Targets every variant the SEO expansion proposal lists for that combo on a
// single canonical page (on rent / hire / rental / booking / book / luxury /
// price / per km / cheap / AC / outstation + seater-specific + airport transfer).
function buildCityKeywordCluster(typeSlug, cityName) {
  const t = vehicleTypeData[typeSlug];
  const token = KW_TOKEN[typeSlug];
  const c = cityName.toLowerCase();
  const seaterKw = t.seaters.map((s) => `${s.name.toLowerCase()} ${t.type.toLowerCase()} ${c}`);
  // Word order matters here and both directions are real queries. "hire tempo
  // traveller delhi" and "tempo traveller hire delhi" are typed by different
  // people in comparable volume, and the proposal lists the noun-first form
  // ("Force Urbania Hire Delhi") explicitly — so carry both rather than
  // assuming one implies the other.
  const aliasKw = (KW_ALIASES[typeSlug] || []).flatMap((a) => [
    `${a} ${c}`,
    `${a} on rent in ${c}`,
    `${a} price ${c}`,
  ]);
  return [
    `${token} on rent in ${c}`,
    `${token} on rent ${c}`,
    `${token} ${c}`,
    // "tempo traveller in delhi" — the preposition form. The proposal lists it
    // as its own line item and it is a distinct query from the bare
    // "tempo traveller delhi", so it cannot be assumed to be covered by it.
    `${token} in ${c}`,
    `${token} rental ${c}`,
    `hire ${token} ${c}`,
    `${token} hire ${c}`,
    `${token} booking ${c}`,
    `book ${token} ${c}`,
    `luxury ${token} ${c}`,
    `${token} price ${c}`,
    `${token} per km rate ${c}`,
    `cheap ${token} ${c}`,
    `ac ${token} ${c}`,
    `outstation ${token} ${c}`,
    // Geo-qualified near-me. This is safe to hold here and does NOT compete
    // with the canonical /tempo-traveller-hire-near-me page, which targets the
    // bare, un-qualified "near me" query. "tempo traveller near me delhi" is a
    // different search: the user has already named the city.
    `${token} near me ${c}`,
    ...seaterKw,
    `${token} airport transfer ${c}`,
    `${token} for wedding ${c}`,
    `${token} for corporate events ${c}`,
    `${token} for family tour ${c}`,
    `best ${token} ${c}`,
    ...aliasKw,
  ];
}

/**
 * Keyword cluster for one (vehicle type x NCR locality).
 *
 * Deliberately narrower than the city cluster. A locality page is answering a
 * hyperlocal, transactional question — "get me a vehicle in Indirapuram" — so
 * it targets rental/hire/booking/price/AC/near-me plus the local occasion
 * terms, and drops the outstation and seater-specific variants that belong to
 * the city and seater hub pages. Keeping the clusters distinct is what stops a
 * locality page from competing with its own parent city page.
 *
 * `extra` carries page-specific phrasings — on the airport page that is where
 * the "IGI airport" and "from IGI airport" variants live, so all three
 * phrasings of that one intent are served by a single URL.
 */
function buildLocalityKeywordCluster(typeSlug, placeName, extra = []) {
  const token = KW_TOKEN[typeSlug];
  const p = placeName.toLowerCase();
  return [
    `${token} ${p}`,
    `${token} on rent in ${p}`,
    `${token} rental ${p}`,
    `hire ${token} ${p}`,
    `${token} booking ${p}`,
    `book ${token} ${p}`,
    `${token} price ${p}`,
    `${token} per km rate ${p}`,
    `ac ${token} ${p}`,
    `luxury ${token} ${p}`,
    `cheap ${token} ${p}`,
    `${token} near me ${p}`,
    `${token} for wedding ${p}`,
    `${token} for corporate ${p}`,
    `${token} airport transfer ${p}`,
    `${token} hire in ${p} delhi ncr`,
    `group transport ${p}`,
    ...extra,
  ];
}

// Per-type stats for the InfographicPanel rich block.
function buildRichStats(typeSlug) {
  const t = vehicleTypeData[typeSlug];
  const popularSeats = POPULAR_SEATER[typeSlug];
  const minSeats = Math.min(...t.seaters.map((s) => s.seats));
  const maxSeats = Math.max(...t.seaters.map((s) => s.seats));
  return [
    { value: minSeats, label: `${minSeats}-seater available`, sublabel: 'starting fleet' },
    { value: popularSeats, label: `${popularSeats}-seater popular`, sublabel: 'most-booked size' },
    { value: maxSeats, label: `${maxSeats}-seater ${t.premium ? 'luxury' : 'capacity'}`, sublabel: t.premium ? 'top of range' : 'for large groups' },
    { value: 4.9, suffix: ' / 5', label: 'City rating', sublabel: 'verified reviews', format: 'decimal' },
  ];
}

const ALL_CONFIGS = {};

for (const slug of VEHICLE_TYPE_ORDER) {
  const t = vehicleTypeData[slug];
  const fleet = buildFleet(slug);
  const lowPrice = Math.min(...t.seaters.map((s) => s.perKm));
  const highPrice = Math.max(...t.seaters.map((s) => s.perKm));
  ALL_CONFIGS[slug] = {
    slug,
    type: t.type,             // "Force Urbania"
    name: t.name,             // "Force Urbania on Rent"
    shortName: t.shortName,   // "Force Urbania"
    vertical: t.vertical,
    accent: t.accent,
    premium: t.premium,
    perKm: t.perKm,
    localRate: t.localRate,
    localKm: t.localKm,
    capacity: t.capacity,
    hubHref: `/${slug}`,
    heroLabel: CITY_HERO_LABEL[slug],
    serviceType: SERVICE_TYPE[slug],
    kwToken: KW_TOKEN[slug],
    heroImage: t.heroImage || t.image,
    heroSubtitle: t.heroSubtitle,
    tagline: t.tagline,
    intro: t.intro,
    idealFor: t.idealFor,
    usps: t.usps,
    useCases: t.useCases,
    features: t.features,
    specs: t.specs,
    comparison: t.comparison,
    gallery: t.gallery,
    faqs: t.faqs,
    meta: t.meta,
    fleet,
    tableRows: buildTableRows(slug),
    calculatorVehicles: buildCalculatorVehicles(slug),
    richStats: buildRichStats(slug),
    lowPrice,
    highPrice,
    popularSeater: POPULAR_SEATER[slug],
    buildCityKeywordCluster: (city) => buildCityKeywordCluster(slug, city),
    buildLocalityKeywordCluster: (place, extra) => buildLocalityKeywordCluster(slug, place, extra),
  };
}

export function getVehicleTypeConfig(slug) {
  return ALL_CONFIGS[slug] || null;
}

export function getAllVehicleTypeSlugs() {
  return VEHICLE_TYPE_ORDER.slice();
}

export { buildCityKeywordCluster, buildLocalityKeywordCluster };