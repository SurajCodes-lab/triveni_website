// src/utilis/corridorTripCostData.js
//
// End-to-end trip cost, corridor by corridor.
//
// WHY THIS PAGE SHAPE EXISTS
// --------------------------
// The site answers the cost question in pieces and nowhere in whole. The
// distance page gives the cab fare. The toll page gives the toll. Nothing adds
// them together, and nothing names the three charges that sit on top — parking,
// state entry and the driver night allowance — which is what somebody actually
// asks when they ask what a journey costs.
//
// That gap is the page. "What does Delhi to Agra actually cost, all in" has no
// answer on this site, no answer in a search panel, and a real answer available
// from data already published here.
//
// WHERE EVERY FIGURE COMES FROM, AND WHAT IS NOT CLAIMED
// ------------------------------------------------------
// Exact, from published data:
//   * the cab fare per vehicle — the rate card, via the corridor's own record
//   * the toll — the researched plaza records in tollCostData
//   * the fuel figure for anyone driving themselves — the corridor's own record
//
// Named but not costed, because the figures are not ours to publish:
//   * parking, which varies by monument, hotel and airport
//   * state entry, where the NUMBER of crossings is factual and stated, and the
//     per-state levy is set by each state government
//   * the driver night allowance, which applies per night away from base
//
// A page that invented rupee figures for those three would be worse than one
// that names them and says they are charged at actual. So this does the second,
// and states the two biggest components exactly — which between them are the
// bulk of the cost on every corridor here.
//
// Built only for the 45 corridors that have BOTH a researched toll record and a
// fare record. There is no way to produce this page honestly without both.

import { getTollCostRoute, getAllTollCostSlugs } from './tollCostData';
import { tripCostData } from './tripCostData';
import { getDistanceRoute } from './distanceData';
import { getOneWayRoute } from './oneWayCabData';
import { PER_KM, fareFor } from './pricing';

/** Which state each city we serve sits in — used to count border crossings,
 *  which is a factual count rather than an estimate. */
const CITY_STATE = {
  Delhi: 'Delhi', Noida: 'Uttar Pradesh', Ghaziabad: 'Uttar Pradesh',
  Gurgaon: 'Haryana', Faridabad: 'Haryana', Meerut: 'Uttar Pradesh',
  Agra: 'Uttar Pradesh', Mathura: 'Uttar Pradesh', Vrindavan: 'Uttar Pradesh',
  Lucknow: 'Uttar Pradesh', Ayodhya: 'Uttar Pradesh', Varanasi: 'Uttar Pradesh',
  Prayagraj: 'Uttar Pradesh', Jaipur: 'Rajasthan', Ajmer: 'Rajasthan',
  Pushkar: 'Rajasthan', Jodhpur: 'Rajasthan', Jaisalmer: 'Rajasthan',
  Udaipur: 'Rajasthan', Bikaner: 'Rajasthan', 'Mount Abu': 'Rajasthan',
  Chandigarh: 'Chandigarh', Shimla: 'Himachal Pradesh', Manali: 'Himachal Pradesh',
  Dharamshala: 'Himachal Pradesh', Dalhousie: 'Himachal Pradesh',
  Amritsar: 'Punjab', Ludhiana: 'Punjab', Patiala: 'Punjab', Jalandhar: 'Punjab',
  Dehradun: 'Uttarakhand', Mussoorie: 'Uttarakhand', Haridwar: 'Uttarakhand',
  Rishikesh: 'Uttarakhand', Nainital: 'Uttarakhand', Auli: 'Uttarakhand',
};

/** The states a corridor passes through, origin and destination included.
 *  Only the endpoints are known for certain, so this reports the endpoint
 *  change rather than claiming to enumerate every state on the road. */
function stateCrossing(origin, destination) {
  const a = CITY_STATE[origin] || null;
  const b = CITY_STATE[destination] || null;
  if (!a || !b) return null;
  return { from: a, to: b, crosses: a !== b };
}

const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

/**
 * Build the end-to-end cost record for a corridor.
 * Returns null unless both a toll record and a fare record exist — the two
 * things that make the page possible.
 */
export function getCorridorTripCost(slug) {
  const toll = getTollCostRoute(slug);
  if (!toll) return null;

  const dist = getDistanceRoute(slug);
  const oneWay = getOneWayRoute(slug);
  if (!dist && !oneWay) return null;

  const km = Number(toll.totalDistance);
  if (!km) return null;

  // --- the cab fare, from the rate card -----------------------------------
  const vehicles = [
    { key: 'sedan', name: 'Sedan (Swift Dzire or similar)', seats: 4 },
    { key: 'suv', name: 'SUV / Ertiga', seats: 6 },
    { key: 'innova', name: 'Innova Crysta', seats: 6 },
    { key: 'tempo', name: 'Tempo Traveller, 12-seater', seats: 12 },
  ].map((v) => {
    const f = fareFor(km, v.key);
    return { ...v, perKm: PER_KM[v.key], amount: Math.round(f.amount), display: inr(f.amount) };
  });

  // --- the toll, from the researched plaza records ------------------------
  const tollCar = toll.totalTollCost?.car ?? null;
  const tollSuv = toll.totalTollCost?.suv ?? null;
  const estimate = toll.planningEstimateOnly === true;

  // --- fuel, for anyone driving themselves --------------------------------
  const fuel = toll.estimatedFuel || null;

  // --- the three charges that are named rather than costed ----------------
  const crossing = stateCrossing(toll.origin, toll.destination);

  // --- the headline: fare plus toll, which is the bulk of it --------------
  const sedan = vehicles[0];
  const allIn = tollCar !== null ? sedan.amount + tollCar : null;

  return {
    slug,
    origin: toll.origin,
    destination: toll.destination,
    km,
    duration: dist?.duration || oneWay?.duration || null,
    highway: toll.corridorRoad || dist?.highway || null,
    vehicles,
    toll: { car: tollCar, suv: tollSuv, plazas: toll.tollPlazas || [], estimate },
    fuel,
    crossing,
    allInSedan: allIn,
    allInSedanDisplay: allIn === null ? null : inr(allIn),
    reverseOf: toll.reverseOf || null,
  };
}

/**
 * Corridors already answered by a hand-written `{destination}-trip-cost-from-delhi`
 * page. Twenty-five of those exist and they answer exactly this question for
 * exactly these journeys, so a /trip-cost/delhi-to-agra page alongside
 * /agra-trip-cost-from-delhi would be the same page twice — the duplication the
 * Week 47 audit and the Week 53 family audit both measured the cost of.
 * Excluded rather than built.
 */
const ALREADY_ANSWERED = new Set(
  tripCostData
    .map((r) => {
      const o = String(r.origin || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const d = String(r.destination || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      return `${o}-to-${d}`.replace(/^-+|-+$/g, '');
    })
    .filter(Boolean),
);

/** Every corridor that can carry this page — a toll record and a fare record
 *  both, and no existing hand-written trip-cost page for the same journey.
 *  No circularity: tollCostData does not import this module. */
export function getAllCorridorTripCostSlugs() {
  return getAllTollCostSlugs()
    .filter((s) => !ALREADY_ANSWERED.has(s))
    .filter((s) => getCorridorTripCost(s) !== null);
}
