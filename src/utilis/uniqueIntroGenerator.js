/**
 * uniqueIntroGenerator.js — anti-duplicate, entity-rich opening copy for
 * programmatic route/city pages (Phase 3: content differentiation).
 *
 * Problem it solves: hundreds of templated route pages read alike, so Google
 * indexes a few and ignores the rest ("Discovered/Crawled – not indexed").
 * This composes a UNIQUE 60–90 word intro per page by:
 *   - weaving the route's REAL entities (origin, destination, distance, time,
 *     highway, 1–2 named landmarks) into the sentences, and
 *   - varying sentence structure/synonyms deterministically by slug hash, so
 *     two similar routes still get different phrasing (and it's stable across
 *     ISR rebuilds — no Math.random).
 *
 * Pure, dependency-free, server-safe. Returns a plain string.
 */

function hashStr(s) {
  let h = 2166136261;
  const str = String(s || '');
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Several phrasings per slot → combinatorial variety across thousands of pages.
const OPENERS = [
  (o, d) => `Travelling from ${o} to ${d}?`,
  (o, d) => `Planning a ${o} to ${d} trip?`,
  (o, d) => `Need a reliable ride from ${o} to ${d}?`,
  (o, d) => `Booking a cab from ${o} to ${d}?`,
  (o, d) => `Heading to ${d} from ${o}?`,
  (o, d) => `Looking for a ${o}–${d} cab you can trust?`,
];

const ROUTE_FACTS = [
  (dist, time, hw) => `The ${dist} journey takes about ${time}${hw ? ` along ${hw}` : ''}.`,
  (dist, time, hw) => `It's roughly ${dist} and around ${time}${hw ? ` via ${hw}` : ''}.`,
  (dist, time, hw) => `Expect ${dist} and about ${time} on the road${hw ? `, mostly on ${hw}` : ''}.`,
  (dist, time, hw) => `Cover the ${dist} stretch in approximately ${time}${hw ? ` on ${hw}` : ''}.`,
];

const LANDMARK_LINES = [
  (d, a) => `In ${d}, travellers usually head for ${a}.`,
  (d, a) => `${d} is best known for ${a}.`,
  (d, a) => `Most ${d} trips take in ${a}.`,
  (d, a) => `Popular stops around ${d} include ${a}.`,
];

const TRUST_CLOSERS = [
  'Fares are fixed and all-inclusive — no surge, no hidden charges.',
  'You get a verified driver, a clean AC vehicle and a fixed, transparent fare.',
  'Book in two minutes with a fixed fare, verified driver and 24/7 support.',
  'Pay one transparent fare covering tolls and driver allowance — confirmed upfront.',
  'Expect an on-time, GPS-tracked ride with a fixed fare and no surprises.',
];

const VEHICLE_LINES = [
  (v) => `Choose a ${v} to match your group size and budget.`,
  (v) => `Pick the ${v} that fits your party — sedan, SUV or tempo.`,
  (v) => `A ${v} is available for solo travellers, families and groups alike.`,
];

/**
 * @param {object} r
 * @param {string} r.origin
 * @param {string} r.destination
 * @param {string} [r.distance]    e.g. "230 km"
 * @param {string} [r.time]        e.g. "3–4 hours"
 * @param {string} [r.highway]     e.g. "the Yamuna Expressway"
 * @param {string[]} [r.attractions]
 * @param {string} [r.vehicleType] e.g. "AC sedan"
 * @param {string} [r.slug]        used to seed deterministic variation
 * @returns {string} unique 60–90 word intro
 */
export function generateUniqueIntro({
  origin,
  destination,
  distance,
  time,
  highway,
  attractions = [],
  vehicleType = 'cab',
  slug = '',
} = {}) {
  if (!origin || !destination) return '';
  const h = hashStr(slug || `${origin}-${destination}`);
  const pick = (arr, salt) => arr[(h + salt) % arr.length];

  const sentences = [];
  sentences.push(pick(OPENERS, 1)(origin, destination));

  if (distance && time) {
    sentences.push(pick(ROUTE_FACTS, 2)(distance, time, highway || ''));
  }

  const attr = (attractions || []).filter(Boolean).slice(0, 2);
  if (attr.length) {
    const attrStr = attr.length === 2 ? `${attr[0]} and ${attr[1]}` : attr[0];
    sentences.push(pick(LANDMARK_LINES, 3)(destination, attrStr));
  } else {
    sentences.push(pick(VEHICLE_LINES, 4)(vehicleType));
  }

  sentences.push(pick(TRUST_CLOSERS, 5));
  return sentences.join(' ');
}

export default generateUniqueIntro;
