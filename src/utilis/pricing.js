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

/**
 * Add Indian digit grouping to money that is already a display value — either a
 * bare number or a string that may contain one or more "₹1234" runs. Fare data
 * on this site is stored pre-rendered and inconsistently separated, so a single
 * sentence could read "from ₹8,250 ... from ₹34500". This only inserts
 * separators: the digits, and therefore every published amount, are unchanged.
 * Per-km rates and other short amounts are left alone, as are non-numeric
 * values such as "Contact Us".
 */
export function rupeeText(value) {
  if (value == null) return value;
  if (typeof value === 'number') return Number.isFinite(value) ? rupees(value) : value;
  if (typeof value !== 'string') return value;
  return value.replace(/₹\s?(\d[\d,]*)/g, (whole, digits) => {
    const n = Number(digits.replace(/,/g, ''));
    return Number.isFinite(n) ? `₹${n.toLocaleString('en-IN')}` : whole;
  });
}


/**
 * A fare as it should be displayed: the rupee sign, Indian digit grouping, and
 * nothing invented.
 *
 * `rupeeText` above handles a value that already carries a rupee sign, and
 * `rupees` handles a bare number. Neither is safe to drop into the 127 places
 * that render a fare, because those pass a mixture: a number (1500), a string
 * of digits ("1500"), an already-grouped string ("1,500"), a string with the
 * sign already in it, a range ("1500-2000"), and non-numeric values such as
 * "Contact Us" or "On request". Week 53 measured 376 unseparated fares across
 * 199 pages, which is what a mixture plus two helpers that each handle half of
 * it produces.
 *
 * This handles all of them and is idempotent, so wrapping a call site that was
 * already correct changes nothing:
 *
 *   fare(1500)        -> "Rs 1,500"      (with the rupee sign)
 *   fare("1500")      -> "Rs 1,500"
 *   fare("1,500")     -> "Rs 1,500"
 *   fare("Rs 1500")   -> "Rs 1,500"
 *   fare("1500-2000") -> "Rs 1,500-2,000"
 *   fare("Contact Us")-> "Contact Us"    (untouched, and no sign added)
 *   fare(null)        -> ""              (so JSX renders nothing)
 *
 * Digits are only ever regrouped, never changed, so no published amount moves.
 */
export function fare(value) {
  if (value == null || value === '') return '';
  if (typeof value === 'number') return Number.isFinite(value) ? rupees(value) : '';
  if (typeof value !== 'string') return '';

  const group = (digits) => {
    const n = Number(String(digits).replace(/,/g, ''));
    return Number.isFinite(n) ? n.toLocaleString('en-IN') : digits;
  };

  // Regroup every run of digits in the string, keeping separators and words.
  const grouped = value.replace(/\d[\d,]*/g, group);

  // Add the sign only when the value is purely an amount or a range of them.
  const bare = grouped.replace(/[₹\s]|Rs\.?/gi, '');
  const isAmount = /^[\d,]+(?:\s*[-–to]+\s*[\d,]+)?$/i.test(bare);
  if (!isAmount) return grouped;
  return grouped.includes('₹') || /Rs/i.test(grouped) ? grouped : `₹${grouped}`;
}

/**
 * Indian digit grouping and nothing else. No currency sign is added, removed
 * or moved.
 *
 * This is the helper for the 127 existing call sites that render a fare as
 * `{'₹'}{value}` with the sign already in the markup. `fare()` above is
 * the right helper for new code, but it decides whether a value needs a sign,
 * and applying that judgement to an existing call site can change output: a
 * per-km rate rendered as `{'₹'}{"11/km"}` would come back as "11/km"
 * without the sign. Grouping only is a pure transformation — the sign stays
 * exactly where the markup put it, and the digits are regrouped — so it is
 * safe to apply mechanically.
 *
 *   groupDigits(1500)        -> "1,500"
 *   groupDigits("1500")      -> "1,500"
 *   groupDigits("1,500")     -> "1,500"      (idempotent)
 *   groupDigits("1500-2000") -> "1,500-2,000"
 *   groupDigits("11/km")     -> "11/km"      (too short to group)
 *   groupDigits("Contact Us")-> "Contact Us"
 *   groupDigits(null)        -> ""
 */
export function groupDigits(value) {
  if (value == null || value === '') return '';
  if (typeof value === 'number') {
    return Number.isFinite(value) ? Math.round(value).toLocaleString('en-IN') : '';
  }
  if (typeof value !== 'string') return '';
  return value.replace(/\d[\d,]*/g, (run) => {
    const n = Number(run.replace(/,/g, ''));
    return Number.isFinite(n) ? n.toLocaleString('en-IN') : run;
  });
}

export default { OUTSTATION_MIN_KM, LOCAL_PACKAGE, PER_KM, fareFor, isLocalPackageRoute, rupees, rupeeText, fare, groupDigits };
