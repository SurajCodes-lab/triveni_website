/**
 * Canonical fare policy — single source of truth
 * ==============================================
 *
 * WHY THIS FILE EXISTS (Week 43)
 * ------------------------------
 * The same `calcFares` function had been copy-pasted into four files:
 * `distanceData.js`, `oneWayCabData.js`, `oneway/newCorridorsA.js` and
 * `oneway/newCorridorsB.js`. When the short-route pricing correction was applied
 * to the first two, the 47 routes defined in the corridor files silently kept the
 * old behaviour — so `/distance/delhi-to-ghaziabad` quoted ₹2,200 for a 25 km trip
 * while `/one-way-cab/delhi-to-ghaziabad` quoted ₹3,300 for the same journey.
 *
 * Two pages on one domain naming two different prices for one trip is both a
 * credibility problem for the customer and a contradictory signal to Google.
 * Pricing policy now lives here and nowhere else.
 *
 * THE POLICY
 * ----------
 * Outstation trips bill on a 300 km/day minimum — real, long-standing policy.
 *
 * Applied to a short local hop that minimum produces fares nobody would believe:
 * Amritsar to the Wagah Border is 30 km and was quoted at ₹3,300, an implied
 * ₹110/km. Those journeys are local transfers and sightseeing runs, and the site
 * already sells the right product for them — the 4 hr / 40 km package published on
 * /4hr-40km-local-cab. Below `thresholdKm` a route is quoted from that package,
 * with distance beyond the included 40 km added at the normal per-km rate.
 *
 * Every number here is a rate the site already publishes; none is invented. The
 * local result is capped at the outstation fare, so a quote can never come out
 * higher than it did before. The two models cross over at 140 km, comfortably
 * above the 100 km threshold.
 */

/** Outstation minimum billable distance, in km. */
export const OUTSTATION_MIN_KM = 300;

/** The published local half-day package (see /4hr-40km-local-cab). */
export const LOCAL_PACKAGE = {
  thresholdKm: 100, // above this, a trip is genuinely outstation
  includedKm: 40, // 4 hr / 40 km package
  base: { sedan: 2200, ertiga: 2500, suv: 2500, innova: 2800, tempo: 2800 },
};

/** Per-km rates by vehicle key, used for outstation billing and for local extra km. */
export const PER_KM = { sedan: 11, ertiga: 15, suv: 15, innova: 18, tempo: 23 };

/**
 * Resolve the fare for one vehicle on one route.
 *
 * @param {number} distanceKm  one-way road distance
 * @param {string} vehicle     key into PER_KM / LOCAL_PACKAGE.base
 * @returns {{ amount:number, localPackage:boolean }}
 */
export function fareFor(distanceKm, vehicle) {
  const perKm = PER_KM[vehicle];
  if (!perKm) throw new Error(`fareFor: unknown vehicle "${vehicle}"`);

  const outstation = Math.max(distanceKm, OUTSTATION_MIN_KM) * perKm;

  if (distanceKm >= LOCAL_PACKAGE.thresholdKm) {
    return { amount: outstation, localPackage: false };
  }

  const base = LOCAL_PACKAGE.base[vehicle];
  if (base === undefined) return { amount: outstation, localPackage: false };

  const extraKm = Math.max(0, distanceKm - LOCAL_PACKAGE.includedKm);
  const local = base + extraKm * perKm;

  // Never quote above the outstation fare.
  return local < outstation
    ? { amount: Math.round(local), localPackage: true }
    : { amount: outstation, localPackage: false };
}

/**
 * Whether a route is quoted on the local package. Decided by the sedan, so every
 * vehicle on a given route is described consistently in copy and FAQs.
 */
export function isLocalPackageRoute(distanceKm) {
  return fareFor(distanceKm, 'sedan').localPackage;
}

/** Format a rupee amount with Indian digit grouping. */
export function rupees(amount) {
  return `₹${Math.round(amount).toLocaleString('en-IN')}`;
}

export default { OUTSTATION_MIN_KM, LOCAL_PACKAGE, PER_KM, fareFor, isLocalPackageRoute, rupees };
