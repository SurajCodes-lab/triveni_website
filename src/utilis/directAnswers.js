// src/utilis/directAnswers.js
//
// Derivers that turn a page's OWN data into the short-answer block.
//
// One file, one function per family. Every function takes the record the page
// already has and returns `{ heading, lead, facts, note }` for
// <DirectAnswer />, or null when the record cannot support a true and specific
// answer.
//
// THE RULE, AND WHY IT IS WORTH ENFORCING IN CODE
// -----------------------------------------------
// No sentence produced here may be reusable for another page with a name
// swapped. That is the constraint CityQuickAnswer documents, and the Week 53
// family audit is the reason it matters: the families whose pages differ only by
// a name measured 4.0-10.9% unique share, while the families whose pages
// assemble genuinely different sets of facts measured 40.6%. Distinctiveness is
// a property of what the page is built from, not of how it is worded.
//
// So each deriver works from counts, extremes, spreads and real figures that
// exist only for that page. If a record is too thin to produce those, the
// function returns null and the page gets no block rather than a generic one.
//
// Where a figure is a planning estimate rather than a published tariff, the
// wording says so — see deriveTollAnswer, which carries forward the distinction
// tollCostData already makes for its two reviewed corridors.

/** Parse "60 km" or 60 into 60. Returns null when there is no usable number. */
function km(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  const m = String(value ?? '').match(/-?\d[\d,]*/);
  if (!m) return null;
  const n = Number(m[0].replace(/,/g, ''));
  return Number.isFinite(n) ? n : null;
}

/** Indian digit grouping, and never touch a string that is already grouped. */
function money(value) {
  if (value === null || value === undefined || value === '') return null;
  const s = String(value).trim();
  if (/[,₹]/.test(s)) return s.startsWith('₹') ? s : `₹${s}`;
  const n = km(s);
  return n === null ? null : `₹${n.toLocaleString('en-IN')}`;
}

const plural = (n, one, many) => `${n} ${n === 1 ? one : many}`;

// A day trip is defined once, here, so the copy can state the rule it used and
// a reader can check it: up to 150 km one way is roughly three hours of driving
// each way, which leaves a usable day at the far end.
const DAY_TRIP_KM = 150;

// ---------------------------------------------------------------------------
// Near-city destination lists  —  /places-to-visit-near-{city}
//
// The best-converting shape on the site (3.42% on the Noida page against a
// 0.60% site average) and, until now, the only major family with no answer
// block at all. It is also the family where the derivation is most obviously
// true to the page: the set of destinations IS the page, so its count, its
// extremes and its spread cannot describe anywhere else.
// ---------------------------------------------------------------------------
export function deriveNearCityAnswer({ city, destinations }) {
  const list = (Array.isArray(destinations) ? destinations : [])
    .map((d) => ({ ...d, _km: km(d?.distance) }))
    .filter((d) => d.name && d._km !== null);

  if (!city || list.length < 3) return null;

  const sorted = [...list].sort((a, b) => a._km - b._km);
  const nearest = sorted[0];
  const furthest = sorted[sorted.length - 1];
  const avg = Math.round(sorted.reduce((s, d) => s + d._km, 0) / sorted.length);
  const dayTrips = sorted.filter((d) => d._km <= DAY_TRIP_KM).length;
  const nearestFare = money(nearest.sedanFare);

  // Two genuinely different cases. A city whose destinations are all close by
  // reads as a cluster; one with a wide spread reads as a range. Saying "15 to
  // 132 km" about a set that runs 15 to 22 km would be technically true and
  // useless, so the sentence changes shape with the data.
  const spread = furthest._km - nearest._km;
  const range =
    spread >= 40
      ? `${nearest._km} to ${furthest._km} km by road`
      : `all within ${furthest._km} km by road`;

  const lead =
    `${city} has ${plural(sorted.length, 'destination', 'destinations')} worth a trip, ` +
    `${range}, averaging ${avg} km. The closest is ${nearest.name}, ${nearest._km} km away` +
    (nearest.time ? ` and about ${nearest.time} by car` : '') +
    (nearestFare ? `, with a sedan from ${nearestFare}` : '') +
    `. The furthest is ${furthest.name} at ${furthest._km} km. ` +
    (dayTrips === sorted.length
      ? `Every one of them is inside ${DAY_TRIP_KM} km, so any of them works as a single day's return trip with a chauffeur.`
      : `${dayTrips} of the ${sorted.length} are inside ${DAY_TRIP_KM} km and work as a day's return trip; the rest are better with a night at the far end.`);

  const facts = [
    { label: 'Destinations covered', value: String(sorted.length) },
    { label: 'Nearest', value: `${nearest.name} — ${nearest._km} km` },
    { label: 'Furthest', value: `${furthest.name} — ${furthest._km} km` },
    { label: 'Average distance', value: `${avg} km` },
    nearestFare ? { label: `Sedan to ${nearest.name} from`, value: nearestFare } : null,
    { label: `Day trips (under ${DAY_TRIP_KM} km)`, value: `${dayTrips} of ${sorted.length}` },
  ].filter(Boolean);

  return {
    heading: `Where can you go on a day trip from ${city}?`,
    lead,
    facts,
    note:
      'Fares are for a chauffeur-driven cab and include fuel, the driver and GST. ' +
      'Tolls, parking and any state permit are charged at actuals.',
  };
}

// ---------------------------------------------------------------------------
// Toll corridors  —  /toll-cost/{origin}-to-{destination}
//
// This family already carried an answer, but the measurement found it sitting
// 43% of the way down the rendered text on average — the deepest of any family.
// A retrieval engine working on passages will reach the plaza table before it
// reaches the summary. The block below is the same facts placed at the top.
//
// It also keeps the distinction tollCostData draws for its two reviewed
// corridors, where the figure is explicitly a planning estimate rather than a
// notified tariff.
// ---------------------------------------------------------------------------
export function deriveTollAnswer(route) {
  if (!route) return null;
  const { origin, destination, totalDistance, tollPlazas, corridorRoad, totalTollCost, cabFare } =
    route;
  const plazas = Array.isArray(tollPlazas) ? tollPlazas.filter((p) => p && p.name) : [];
  const car = km(totalTollCost?.car);
  const suv = km(totalTollCost?.suv);
  const dist = km(totalDistance);

  if (!origin || !destination || plazas.length === 0 || car === null) return null;

  const estimate = route.planningEstimateOnly === true;
  const biggest = [...plazas].sort((a, b) => (km(b.carCost) ?? 0) - (km(a.carCost) ?? 0))[0];
  const fastagAll = plazas.every((p) => p.acceptsFASTag === true);

  const verb = estimate
    ? `works out to approximately ${money(car)} for a car as a planning estimate`
    : `totals about ${money(car)} for a car`;

  const lead =
    `${origin} to ${destination}${corridorRoad ? ` on the ${corridorRoad}` : ''} crosses ` +
    `${plural(plazas.length, 'toll plaza', 'toll plazas')}${dist ? ` over ${dist} km` : ''}, and the toll ` +
    `${verb}${suv !== null ? ` and ${money(suv)} for an SUV` : ''}, one way. ` +
    (biggest && km(biggest.carCost) !== null
      ? `The largest single charge is ${money(biggest.carCost)} at ${biggest.name}` +
        (km(biggest.location) !== null ? `, ${km(biggest.location)} km in` : '') +
        '. '
      : '') +
    (fastagAll ? 'All of them take FASTag.' : 'Not every plaza on this route takes FASTag.') +
    (estimate
      ? ' Check the current plaza schedule and the vehicle\'s notified toll class before travel.'
      : '');

  const facts = [
    { label: estimate ? 'Car toll (estimate, one way)' : 'Car toll (one way)', value: money(car) },
    suv !== null
      ? { label: estimate ? 'SUV toll (estimate, one way)' : 'SUV toll (one way)', value: money(suv) }
      : null,
    { label: 'Toll plazas', value: String(plazas.length) },
    dist ? { label: 'Road distance', value: `${dist} km` } : null,
    biggest && km(biggest.carCost) !== null
      ? { label: 'Largest plaza', value: `${biggest.name} — ${money(biggest.carCost)}` }
      : null,
    km(cabFare) !== null ? { label: 'Cab fare from', value: money(cabFare) } : null,
  ].filter(Boolean);

  return {
    heading: `How much is the toll from ${origin} to ${destination}?`,
    lead,
    facts,
    note: estimate
      ? 'These are planning estimates built from the listed plazas, not a confirmed tariff. Toll is paid at actuals during the journey; the driver handles payment at every plaza.'
      : 'Toll is charged extra and paid at actuals during the journey. The driver handles payment at every plaza.',
  };
}

// ---------------------------------------------------------------------------
// Airport hubs  —  /airport-service/{city}
//
// 32 of the 124 pages in the airport family, and the family had no answer block
// anywhere. These pages answer a narrow, high-intent question — how far the
// airport is, which terminal, what a transfer costs — and the facts to answer
// it are already in the record. Only the fare has to be derived, and it comes
// from the same rate card the corridor and distance pages quote, so it cannot
// drift from the published price.
// ---------------------------------------------------------------------------
export function deriveAirportCityAnswer(city, fareFor) {
  if (!city || !city.name || !city.airport) return null;

  const dests = (Array.isArray(city.popularDestinations) ? city.popularDestinations : [])
    .map((d) => ({ ...d, _km: km(d?.distance) }))
    .filter((d) => d.name && d._km !== null)
    .sort((a, b) => a._km - b._km);

  const centreKm = km(city.distance);
  // "3 Terminals (T1, T2, T3)" -> 3. Absent on single-terminal airports.
  const terminalCount = km(city.terminals);

  if (dests.length < 2 && centreKm === null) return null;

  const nearest = dests[0] || null;
  const furthest = dests.length > 1 ? dests[dests.length - 1] : null;

  // Priced from the rate card rather than written down, for the reason record K
  // sets out: a hand-written fare drifts away from the table beneath it.
  let nearestFare = null;
  if (nearest && typeof fareFor === 'function') {
    try {
      nearestFare = money(Math.round(fareFor(nearest._km, 'sedan').amount));
    } catch {
      nearestFare = null;
    }
  }

  // Several of these names already carry their own abbreviation in brackets
  // ("Indira Gandhi International Airport (IGI)"), so appending the IATA code
  // would print two parentheticals in a row.
  const nameHasBracket = /\([^)]*\)/.test(city.airport);
  const plainName = city.airport.replace(/\s*\([^)]*\)\s*$/, '').trim();

  const lead =
    `${city.airport}${city.airportCode && !nameHasBracket ? ` (${city.airportCode})` : ''} is ` +
    (centreKm !== null ? `${centreKm} km from the centre of ${city.name}` : `served by Triveni Cabs around the clock`) +
    (terminalCount ? ` and has ${plural(terminalCount, 'terminal', 'terminals')}` : '') +
    '. ' +
    (nearest
      ? `A chauffeur-driven transfer to ${nearest.name} covers ${nearest._km} km` +
        (nearest.time ? ` in about ${nearest.time}` : '') +
        (nearestFare ? ` and starts from ${nearestFare} in a sedan` : '') +
        '. '
      : '') +
    (furthest
      ? `The longest run published here is ${furthest.name} at ${furthest._km} km` +
        (furthest.time ? `, about ${furthest.time}` : '') +
        `, and ${plural(dests.length, 'destination is', 'destinations are')} priced in full below.`
      : 'Pickups are met inside the terminal and the fare is fixed before the journey.');

  const facts = [
    city.airportCode ? { label: 'Airport', value: city.airportCode } : null,
    centreKm !== null ? { label: 'From city centre', value: `${centreKm} km` } : null,
    terminalCount ? { label: 'Terminals', value: String(terminalCount) } : null,
    nearest ? { label: 'Nearest drop', value: `${nearest.name} — ${nearest._km} km` } : null,
    furthest ? { label: 'Longest published run', value: `${furthest.name} — ${furthest._km} km` } : null,
    nearestFare ? { label: `Sedan to ${nearest.name} from`, value: nearestFare } : null,
  ].filter(Boolean);

  return {
    heading: `How far is ${plainName} from ${city.name}, and what does a taxi cost?`,
    lead,
    facts,
    note:
      'Fares include fuel, the driver and GST. Airport parking and entry charges, tolls and any ' +
      'state permit are charged at actuals. Flight arrival times are tracked, so a delayed flight does not lose the car.',
  };
}

/** The opening sentence or two of a written paragraph, for use inside a lead.
 *  Takes a second sentence only when the first is too short to stand alone, and
 *  gives up rather than truncating mid-thought. */
function openingSentences(text, { min = 45, max = 230 } = {}) {
  const s = String(text || '').replace(/\s+/g, ' ').trim();
  if (!s) return null;
  const parts = s.match(/[^.!?]+[.!?]+/g);
  if (!parts) return null;
  let out = parts[0].trim();
  if (out.length < min && parts[1]) out = `${out} ${parts[1].trim()}`;
  return out.length <= max ? out : null;
}

// ---------------------------------------------------------------------------
// Wedding cities  —  /wedding/{city}
//
// 19 of the 26 pages in this family are city pages, and none of them carried an
// answer block. This is the family the Week 53 audit measured at 10.9% unique
// share before record H's enrichment, which is exactly why the block here is
// built from counts and the city's own season and venue notes rather than from
// a sentence about weddings in general.
//
// A wedding enquiry asks two things first — what it costs per day, and how far
// ahead to book — so those are what the block answers.
// ---------------------------------------------------------------------------
export function deriveWeddingCityAnswer(city, local) {
  if (!city || !city.name) return null;

  const cars = (Array.isArray(city.popularCars) ? city.popularCars : []).filter(Boolean);
  const venues = (Array.isArray(city.popularVenues) ? city.popularVenues : []).filter(Boolean);
  const nearby = (Array.isArray(city.nearbyDestinations) ? city.nearbyDestinations : []).filter(Boolean);
  const range = String(city.priceRange || '').trim();

  // Without a day rate and a fleet there is nothing specific to say.
  if (!range || cars.length < 2) return null;

  const season = openingSentences(local?.seasonWindow);
  const topCar = cars[0];
  const biggest = cars.find((c) => /\d{2}\s*-?\s*seater|tempo|bus|coach/i.test(c)) || null;

  const lead =
    `A wedding car in ${city.name} runs ${range}, depending on the vehicle and how long it is held. ` +
    `${plural(cars.length, 'vehicle is', 'vehicles are')} in regular wedding use here` +
    (topCar && biggest && biggest !== topCar
      ? `, from a ${topCar} for the couple through to a ${biggest} for guest transfers`
      : topCar
        ? `, led by the ${topCar}`
        : '') +
    (venues.length ? `, and ${plural(venues.length, 'named venue is', 'named venues are')} covered` : '') +
    '. ' +
    (season || 'Cars are held for the full day with a chauffeur, and decoration is arranged separately.');

  const facts = [
    { label: 'Day rate', value: range },
    { label: 'Vehicles in wedding use', value: String(cars.length) },
    venues.length ? { label: 'Venues covered', value: String(venues.length) } : null,
    topCar ? { label: 'Most asked for', value: topCar } : null,
    biggest && biggest !== topCar ? { label: 'Largest guest vehicle', value: biggest } : null,
    nearby.length ? { label: 'Destination weddings served', value: String(nearby.length) } : null,
  ].filter(Boolean);

  return {
    heading: `What does a wedding car cost in ${city.name}?`,
    lead,
    facts,
    note:
      'The day rate covers the vehicle, the chauffeur and fuel. Flower and decoration work is ' +
      'quoted separately because it is priced by the florist, and parking and any venue entry ' +
      'charge is at actuals.',
  };
}

// ---------------------------------------------------------------------------
// Weekend getaway lists  —  /weekend-getaways-from-{city}-by-car
//
// Deliberately NOT the same answer as the day-trip page for the same city. The
// day-trip block answers "where can I go and be back tonight"; this one answers
// "where is worth a night", and the figures it uses — how many need two nights
// rather than one, the return fare, the billed kilometres — only exist on this
// page. That separation is what stops the two pages being one page twice.
// ---------------------------------------------------------------------------
export function deriveWeekendAnswer({ city, destinations }) {
  const list = (Array.isArray(destinations) ? destinations : []).filter(
    (d) => d && d.name && km(d.km) !== null,
  );
  if (!city || list.length < 3) return null;

  const sorted = [...list].sort((a, b) => km(a.km) - km(b.km));
  const nearest = sorted[0];
  const furthest = sorted[sorted.length - 1];
  const twoDay = sorted.filter((d) => Number(d.nights) === 1).length;
  const threeDay = sorted.length - twoDay;

  const lead =
    `${sorted.length} destinations from ${city} are worth a night, ` +
    `${km(nearest.km)} to ${km(furthest.km)} km away by road. ` +
    `The closest is ${nearest.name} at ${km(nearest.km)} km` +
    (nearest.driveTime ? `, about ${nearest.driveTime} of driving` : '') +
    (nearest.sedanFare ? `, with the return journey from ${money(nearest.sedanFare)} in a sedan` : '') +
    `. ` +
    (threeDay === 0
      ? `All of them work as a two-day weekend with one night away.`
      : `${twoDay} work as a two-day weekend; ` +
        `${threeDay === 1 ? 'one needs' : `${threeDay} need`} a third day because the drive is too ` +
        `long to justify a single night — the longest being ${furthest.name} at ${km(furthest.km)} km.`);

  const facts = [
    { label: 'Destinations', value: String(sorted.length) },
    { label: 'Two-day weekends', value: `${twoDay} of ${sorted.length}` },
    { label: 'Nearest', value: `${nearest.name} — ${km(nearest.km)} km` },
    { label: 'Furthest', value: `${furthest.name} — ${km(furthest.km)} km` },
    nearest.sedanFare ? { label: 'Return fare from', value: money(nearest.sedanFare) } : null,
    threeDay > 0 ? { label: 'Need three days', value: `${threeDay} of ${sorted.length}` } : null,
  ].filter(Boolean);

  return {
    heading: `Where can you go for a weekend from ${city}?`,
    lead,
    facts,
    note:
      'Fares are the full return journey with a chauffeur, from the published round-trip rate card. ' +
      'Fuel, the driver and GST are included; tolls, parking, state permits and the driver\'s night ' +
      'allowance are charged at actuals.',
  };
}

// ---------------------------------------------------------------------------
// Monthly rental city pages  —  /monthly-car-rental-{city}
//
// The highest-converting unbuilt shape measured on this site: the monthly and
// corporate rental cluster runs at 6.57% against a 0.60% average. The enquiry
// is narrow and commercial — what does a month cost, and do the included
// kilometres cover what I do — so the block answers exactly those two.
//
// The rate is the same in every city, which is a problem for distinctiveness
// and is handled honestly: the block states the rate (because that is the
// question) and then the city's own usage arithmetic, which is the part that
// differs. The daily kilometre allowance is computed, not written.
// ---------------------------------------------------------------------------
export function deriveMonthlyRentalAnswer(city, pkg) {
  if (!city || !city.city || !pkg || !Array.isArray(pkg.vehicles) || pkg.vehicles.length === 0) {
    return null;
  }

  const cheapest = pkg.vehicles.reduce((a, b) => (a.monthly <= b.monthly ? a : b));
  const dearest = pkg.vehicles.reduce((a, b) => (a.monthly >= b.monthly ? a : b));
  const perDayKm = Math.round(pkg.includedKm / pkg.days);
  // What the month costs per included kilometre, which is the figure an
  // enquiry is really trying to work out and which no page on the site states.
  const perKm = (cheapest.monthly / pkg.includedKm).toFixed(1);

  const lead =
    `A car with a driver for a month in ${city.city} starts at ${money(cheapest.monthly)} for a ` +
    `sedan and runs to ${money(dearest.monthly)} for an Innova Crysta. Every rate covers ` +
    `${pkg.days} days with one dedicated vehicle and the same driver throughout, ` +
    `${pkg.includedKm.toLocaleString('en-IN')} km and ${pkg.includedHoursPerDay} hours a day ` +
    `included — about ${perDayKm} km a day, or roughly ₹${perKm} per included kilometre on the ` +
    `sedan. Fuel, the driver and GST are in the rate.`;

  const facts = [
    { label: 'Sedan, per month', value: money(cheapest.monthly) },
    ...pkg.vehicles
      .filter((v) => v.key !== cheapest.key && v.key !== dearest.key)
      .map((v) => ({ label: `${v.name.split(' (')[0]}, per month`, value: money(v.monthly) })),
    { label: 'Innova Crysta, per month', value: money(dearest.monthly) },
    { label: 'Kilometres included', value: `${pkg.includedKm.toLocaleString('en-IN')} km` },
    { label: 'Works out at', value: `${perDayKm} km a day` },
    { label: 'Hours included', value: `${pkg.includedHoursPerDay} a day` },
  ];

  return {
    heading: `What does a monthly car rental with driver cost in ${city.city}?`,
    lead,
    facts,
    note:
      'Kilometres beyond the included allowance and hours beyond eight a day are charged at the ' +
      'published extra rate. Tolls, parking, state permits and the driver night allowance are at ' +
      'actuals. One vehicle and one driver for the full month, not a rotating fleet.',
  };
}
