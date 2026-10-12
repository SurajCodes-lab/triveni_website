// src/utilis/airportRouteWave2.js
//
// Twenty new airport transfer routes, merged into `airportRoutes`.
//
// WHY THIS SHAPE
// -------------
// The airport cluster reaches 11.94% and 12.35% click rate on the searches
// where it ranks, against a 0.60% site average. That is as commercial as search
// gets on this site: somebody typing "delhi airport to mussoorie taxi" has a
// flight booked and wants a fixed price. Position, not intent, is the only
// thing in the way.
//
// 46 route pages exist across nine hubs, and they are heavily concentrated —
// 21 from Delhi, eight from Jaipur, six from Chandigarh, and only one or two
// each from Amritsar, Lucknow, Udaipur and Varanasi. These twenty fill the
// obvious gaps and widen the hub spread.
//
// HOW THE FARES WERE SET, WHICH NEEDS STATING PLAINLY
// ---------------------------------------------------
// The existing 46 pages carry hand-written fares, and they do NOT follow the
// plain outstation rate card. Measured across the 29 records that publish both
// a distance and a fare:
//
//   under 300 km   sedan per km ranges 16.1 to 66.7, median 25.8
//   over 300 km    sedan per km ranges 15.5 to 19.4, median 16.7
//   SUV / sedan    median 1.45 under 300 km, 1.41 over
//   tempo / sedan  median 2.67 under 300 km, 2.40 over
//
// The wide short-distance range is what you would expect: a 12 km airport
// transfer is dominated by a minimum charge, not by distance. So there is no
// single formula to apply, and `fareFor` from the rate card would quote BELOW
// the whole existing family — Delhi to Haridwar at 230 km publishes Rs 3,800
// where the plain outstation rate gives Rs 3,300.
//
// Repricing 46 live pages is a pricing decision and not ours to take. So the new
// fares are **interpolated from the family's own published points** and rounded
// to the nearest hundred, which keeps each new page consistent with its nearest
// siblings rather than introducing a second price level inside one family.
//
// Every interpolated figure is therefore auditable against the published points
// it came from, and any of them can be overridden by the client without
// touching anything else.

// NOTE ON STRUCTURE: this module is a FUNCTION of the existing routes rather
// than a plain object, because it derives its fares from them. Importing
// `airportRoutes` here and spreading this object into it there would be a
// circular import. Instead `buildAirportRoutesWave2(base)` is called from
// airportOutstationData once the base set is defined.

/**
 * The published sedan fare points of the existing family, as
 * [distanceKm, sedanFare], read from the live data rather than typed.
 */
function publishedPoints(baseRoutes) {
  const pts = [];
  for (const r of Object.values(baseRoutes)) {
    const km = Number(String(r?.distance || '').replace(/[^\d]/g, ''));
    const sedan = Number(String(r?.fares?.sedan?.price || '').replace(/[^\d]/g, ''));
    if (km > 0 && sedan > 0) pts.push([km, sedan]);
  }
  return pts.sort((a, b) => a[0] - b[0]);
}

/** Round to the nearest hundred rupees, as every published fare here is. */
const r100 = (n) => Math.round(n / 100) * 100;

/**
 * A sedan fare for a new distance: the MEDIAN per-km rate of the nearest
 * published points, applied to the distance.
 *
 * Two earlier attempts at this were wrong and the reason is worth recording,
 * because it is a fact about the live data rather than about the arithmetic.
 *
 * The family contains 67 published fare points and they sit at TWO DIFFERENT
 * PRICE LEVELS for comparable distances. The newer route set prices around 16
 * to 20 rupees per km above 200 km; the legacy set prices around 12 to 15. At
 * 340 km the data holds both 4,499 and 6,000 — a 33% spread for the same
 * journey length.
 *
 * Interpolating between the two nearest points therefore made a new page's fare
 * depend on which level happened to be nearest in distance, which is arbitrary:
 * Jaipur to Bikaner at 335 km landed on 13.1 per km because both neighbouring
 * points were legacy ones, while Jaipur to Chittorgarh at 310 km landed on 17.7
 * because its neighbours were not.
 *
 * Taking the median rate across the nearest points averages the two levels
 * instead of picking one, which is stable, auditable, and does not invent a
 * third level. The two-level inconsistency itself is a pricing matter and is
 * reported to the client rather than resolved here.
 */
const NEIGHBOURS = 9;

function sedanFareFor(km, POINTS) {
  if (POINTS.length < 2) return null;
  const near = POINTS.map(([k, f]) => ({ k, rate: f / k }))
    .sort((a, b) => Math.abs(a.k - km) - Math.abs(b.k - km))
    .slice(0, Math.min(NEIGHBOURS, POINTS.length))
    .map((x) => x.rate)
    .sort((a, b) => a - b);

  const mid = Math.floor(near.length / 2);
  const rate = near.length % 2 ? near[mid] : (near[mid - 1] + near[mid]) / 2;
  return r100(km * rate);
}

/** The measured SUV and tempo multiples of this family, by distance band. */
function faresFor(km, POINTS) {
  const sedan = sedanFareFor(km, POINTS);
  if (!sedan) return null;
  const suvMult = km > 300 ? 1.41 : 1.45;
  const tempoMult = km > 300 ? 2.4 : 2.67;
  const money = (n) => r100(n).toLocaleString('en-IN');
  return {
    sedan: { price: money(sedan), vehicle: 'Swift Dzire / Amaze', seats: 4 },
    suv: { price: money(sedan * suvMult), vehicle: 'Innova / Ertiga', seats: 6 },
    tempo: { price: money(sedan * tempoMult), vehicle: 'Tempo Traveller 12-seater', seats: 12 },
  };
}

/** The terminal list for a hub, taken from an existing route at the same hub so
 *  the pickup points and terminal names cannot disagree between siblings. */
function terminalsFor(baseRoutes, hubSlugPrefix, destination, driveTime) {
  const sibling = Object.values(baseRoutes).find(
    (r) => r?.slug?.startsWith(hubSlugPrefix) && Array.isArray(r.terminals) && r.terminals.length,
  );
  if (!sibling) return [];
  return sibling.terminals.map((t) => ({
    ...t,
    driveTime: `${driveTime} to ${destination}`,
  }));
}

/**
 * One new route. Only the researched facts are typed; terminals, fares and the
 * related-route list are derived.
 */
const makeAr = (baseRoutes, POINTS) => ({
  slug, hub, airport, airportCode, airportCity, destination, destinationState,
  km, time, highway, attractions, highlights, description, faqs, related,
}) => ({
  slug,
  airport,
  airportCode,
  airportCity,
  terminals: terminalsFor(baseRoutes, hub, destination, time),
  destination,
  destinationState,
  distance: `${km} km`,
  time,
  highway,
  fares: faresFor(km, POINTS),
  meetAndGreet: true,
  flightTracking: true,
  pickupPoints: ['Arrival Gate', 'Prepaid Taxi Counter'],
  highlights,
  destinationAttractions: attractions,
  description,
  faqs,
  relatedRoutes: related,
});

export function buildAirportRoutesWave2(baseRoutes) {
  const POINTS = publishedPoints(baseRoutes);
  const ar = makeAr(baseRoutes, POINTS);

  return {
  // ─── DELHI IGI ────────────────────────────────────────────────────────
  'delhi-airport-to-mussoorie-taxi': ar({
    slug: 'delhi-airport-to-mussoorie-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Mussoorie', destinationState: 'Uttarakhand',
    km: 290, time: '7-8 hrs', highway: 'NH334 and NH7 via Meerut, Roorkee and Dehradun',
    attractions: ['Mall Road', 'Gun Hill', 'Kempty Falls', "Camel's Back Road", 'Landour', 'Lal Tibba'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Hill-experienced drivers', 'Mall Road drop-off guidance'],
    description: [
      'Flying into Delhi and heading up to Mussoorie? The transfer runs 290 km from any IGI terminal, through Meerut and Roorkee to Dehradun and then up the 35 km climb to the ridge. Your driver tracks the flight and meets you at the arrival gate, which matters on a journey this long because a delayed flight otherwise means arriving on the hill road after dark.',
      'Allow seven to eight hours door to door. The plains stretch to Dehradun is four and a half to five hours on good highway; the final climb is 35 km and takes well over an hour whatever a map estimates. A morning arrival at Delhi is far better than an evening one for this route.',
      'One thing to know before you land: the Mall road in Mussoorie is pedestrian for much of its length, so the car drops at Picture Palace or Library depending on where you are staying and the last stretch is walked. Tell us the hotel and we will plan the drop accordingly.',
    ],
    faqs: [
      { question: 'How long does the Delhi Airport to Mussoorie taxi take?', answer: 'Seven to eight hours for 290 km. Delhi to Dehradun is four and a half to five hours on NH334 and NH7, and the final 35 km climb from Dehradun to Mussoorie takes over an hour on its own. Night driving on the hill section is slower and we would rather not plan it if your flight allows.' },
      { question: 'Can the taxi drop me at my Mussoorie hotel?', answer: 'To the nearest vehicle point, yes. The Mall road is closed to vehicles along much of its length, so the drop is at Picture Palace, Library or the hotel approach road, and the last few hundred metres are walked. Hotels in Landour and on the Dehradun side of town usually have direct vehicle access. Tell us the hotel name and we will confirm.' },
      { question: 'Is the Delhi Airport to Mussoorie drive safe in the monsoon?', answer: 'The Dehradun to Mussoorie climb is well surfaced and maintained, but the monsoon between July and September brings landslide risk and reduced visibility on hill sections, and delays are common. We drive it year round with hill-experienced drivers; in heavy rain we will tell you honestly if a departure should be delayed by a few hours.' },
      { question: 'Should I break the journey at Dehradun?', answer: 'For a late arrival, often yes. If your flight lands after four in the afternoon, Dehradun is a sensible overnight and the climb becomes an easy morning drive instead of a night one. We can arrange it either way; it costs the same and it is simply safer.' },
    ],
    related: ['delhi-airport-to-dehradun-taxi', 'delhi-airport-to-rishikesh-taxi', 'delhi-airport-to-haridwar-taxi', 'dehradun-airport-to-mussoorie-taxi'],
  }),

  'delhi-airport-to-nainital-taxi': ar({
    slug: 'delhi-airport-to-nainital-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Nainital', destinationState: 'Uttarakhand',
    km: 300, time: '7-8 hrs', highway: 'NH9 via Moradabad and Rudrapur, then the Kathgodam climb',
    attractions: ['Naini Lake', 'Mall Road', 'Snow View', 'Tiffin Top', 'Bhimtal', 'Sattal'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Hill-experienced drivers', 'Vehicle entry guidance for peak season'],
    description: [
      'Delhi Airport to Nainital is 300 km and seven to eight hours, out on NH9 through Moradabad and Rudrapur to Kathgodam, then the 35 km climb up to the lake. The driver tracks your flight and meets you at arrivals, which on a seven-hour transfer is the difference between a planned journey and an improvised one.',
      'The plains section to Kathgodam is five to six hours of straightforward highway. The climb from Kathgodam is 35 km and takes an hour and a quarter, and it is the part that decides your arrival time. Mornings are considerably better than evenings for this route.',
      'Worth knowing in advance: Nainital restricts vehicle entry to the town on the busiest weekends of the April to June season, and the Mall road around the lake is closed to traffic in the evenings. We plan the drop at the Tallital or Mallital end depending on your hotel.',
    ],
    faqs: [
      { question: 'How much is a taxi from Delhi Airport to Nainital?', answer: 'The fare is fixed before you travel and shown above for a sedan, an SUV and a Tempo Traveller. Tolls, parking and the driver allowance are included, and there is no surge pricing at any hour. The fare does not change if your flight is delayed, because we track it.' },
      { question: 'How long is the drive from Delhi Airport to Nainital?', answer: 'Seven to eight hours for 300 km. Delhi to Kathgodam is five to six hours on NH9 through Moradabad, and the 35 km hill climb from Kathgodam to Nainital takes an hour and a quarter. Add time on peak-season weekends when the town entry queues.' },
      { question: 'Will the taxi take me into Nainital town?', answer: 'Up to the permitted vehicle point, yes. Nainital applies entry restrictions on the heaviest weekends in April to June, and the Mall road along the lake is closed to vehicles in the evenings, so the drop is at the Tallital or Mallital end. Tell us the hotel and we will plan the nearest approach.' },
      { question: 'Can I stop at Jim Corbett on the way from Delhi Airport?', answer: 'Yes, and it is a natural break. Corbett sits off the same NH9 corridor roughly 240 km from Delhi, so it adds very little detour. If you want to spend a night there before continuing to Nainital, say so when booking and we will build it into the itinerary rather than charging two separate transfers.' },
    ],
    related: ['delhi-airport-to-jim-corbett-taxi', 'delhi-airport-to-haridwar-taxi', 'delhi-airport-to-dehradun-taxi', 'delhi-airport-to-bareilly-taxi'],
  }),

  'delhi-airport-to-jim-corbett-taxi': ar({
    slug: 'delhi-airport-to-jim-corbett-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Jim Corbett National Park', destinationState: 'Uttarakhand',
    km: 255, time: '6-7 hrs', highway: 'NH9 via Moradabad to Ramnagar',
    attractions: ['Bijrani safari zone', 'Jhirna safari zone', 'Dhikala', 'Corbett Falls', 'Garjiya Devi Temple', 'Corbett Museum at Kaladhungi'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Safari timing coordination', 'Resort drop across all zones'],
    description: [
      "Delhi Airport to Jim Corbett is 255 km and six to seven hours on NH9 through Moradabad to Ramnagar, which is the gateway town for every safari zone. Your driver tracks the flight and meets you at the arrival gate.",
      "The timing matters more here than on most transfers, because safaris run on booked slots at dawn and mid-afternoon and the park does not hold a slot for a late arrival. If you have a morning safari booked for the day after you land, an afternoon arrival at Delhi works comfortably; an evening arrival does not leave much margin.",
      "Resorts are spread across Ramnagar, Dhikuli, Mohaan and the Kaladhungi road, which are 10 to 25 km apart on the park periphery. Tell us the resort name rather than just the zone, because the last stretch to some of them is a forest road and we want the right vehicle on it.",
    ],
    faqs: [
      { question: 'How long is the Delhi Airport to Jim Corbett taxi journey?', answer: 'Six to seven hours for 255 km via NH9 and Moradabad to Ramnagar. Add 20 to 40 minutes depending on which resort you are staying at, because the properties are spread along the park periphery from Ramnagar through Dhikuli to the Kaladhungi road.' },
      { question: 'Can I go straight from Delhi Airport to a safari?', answer: 'Only if the timing allows, and usually not on the same day. Safaris run at dawn and mid-afternoon on permits booked by zone and slot, and the transfer alone is six to seven hours. Land in the afternoon, reach the resort in the evening, and take a dawn safari the next morning — that is the pattern that works.' },
      { question: 'Do I need to book Corbett safari permits before the taxi?', answer: 'Yes, and it is the thing most people get the wrong way round. Permits are sold by the forest department per zone and time slot and the popular ones go weeks ahead, particularly over long weekends and in the March to June season. Fix the permits first and we will build the car around them.' },
      { question: 'Which Corbett zone should I ask to be dropped at?', answer: 'That depends on your permit rather than your preference, since entry is zone-specific. Bijrani and Jhirna are the most accessible from Ramnagar. Dhikala is the deepest and requires its own overnight permit. Tell us your zone and resort and the driver will plan the approach; some of the Dhikuli and Mohaan access roads are rough and better suited to an SUV.' },
    ],
    related: ['delhi-airport-to-nainital-taxi', 'delhi-airport-to-bareilly-taxi', 'delhi-airport-to-haridwar-taxi', 'delhi-airport-to-meerut-taxi'],
  }),

  'delhi-airport-to-vrindavan-taxi': ar({
    slug: 'delhi-airport-to-vrindavan-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Vrindavan', destinationState: 'Uttar Pradesh',
    km: 160, time: '3-3.5 hrs', highway: 'Yamuna Expressway',
    attractions: ['Banke Bihari Temple', 'Prem Mandir', 'ISKCON Vrindavan', 'Nidhivan', 'Radha Raman Temple', 'Mathura Krishna Janmabhoomi'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Yamuna Expressway route', 'Temple-lane drop guidance'],
    description: [
      'Delhi Airport to Vrindavan is 160 km on the Yamuna Expressway and takes three to three and a half hours, which makes it one of the easier long transfers out of IGI — six-lane road almost the whole way and fully FASTag-enabled at the Jewar and Mathura plazas.',
      'The driver tracks your flight and meets you at arrivals. Mathura sits 11 km before Vrindavan on the same road, so the Krishna Janmabhoomi complex is a natural stop on the way in if you want it rather than a separate trip.',
      'The thing to plan for is the last kilometre. The lanes around Banke Bihari are not driveable and are closed to vehicles entirely at peak darshan hours, so the car stops on the parikrama marg and the temple is reached on foot or by e-rickshaw. Prem Mandir and ISKCON both have proper parking. Tell us where you are staying and we will set the drop accordingly.',
    ],
    faqs: [
      { question: 'How long does a taxi from Delhi Airport to Vrindavan take?', answer: 'Three to three and a half hours for 160 km on the Yamuna Expressway. It is one of the fastest routes out of Delhi — six lanes, good surface, and only two toll plazas at Jewar and Mathura, both FASTag-enabled. Traffic getting out of the airport is usually the slowest part.' },
      { question: 'Can the taxi drop me at Banke Bihari temple?', answer: 'At the nearest vehicle point, not at the door. The lanes around Banke Bihari are narrow and closed to vehicles during peak darshan hours, so the drop is on the parikrama marg and the last stretch is on foot or by e-rickshaw, which takes about ten minutes. Prem Mandir and ISKCON Vrindavan both have car parking and direct access.' },
      { question: 'Can I visit Mathura on the same transfer?', answer: 'Yes, and it costs nothing extra in distance. Mathura is on the same road 11 km before Vrindavan, so the Krishna Janmabhoomi complex and the Vishram Ghat fit naturally into the arrival journey. Mention it when booking so the driver allows the time.' },
      { question: 'Is it worth taking a taxi rather than the train to Vrindavan?', answer: 'For an airport arrival, generally yes. The nearest railhead is Mathura Junction, which means an airport-to-station transfer in Delhi, a train, and then a local vehicle at the other end for the final 11 km. A direct car on the expressway is three and a half hours door to door with your luggage staying in one place.' },
    ],
    related: ['delhi-airport-to-mathura-taxi', 'delhi-airport-to-agra-taxi', 'jewar-airport-to-agra-taxi', 'delhi-airport-to-aligarh-taxi'],
  }),

  'delhi-airport-to-neemrana-taxi': ar({
    slug: 'delhi-airport-to-neemrana-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Neemrana', destinationState: 'Rajasthan',
    km: 110, time: '2-2.5 hrs', highway: 'NH48 via Gurgaon, Manesar and Behror',
    attractions: ['Neemrana Fort Palace', 'Neemrana Baoli step well', 'Zip-lining at the fort', 'Sariska approach road', 'Behror highway dhabas'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Under two and a half hours', 'Direct fort drop'],
    description: [
      'Delhi Airport to Neemrana is 110 km on NH48 through Gurgaon, Manesar and Behror, and takes two to two and a half hours. It is the shortest genuinely restful trip out of IGI, which is why so many people use it for a first or last night around a long-haul flight.',
      'The fort palace is built into a hillside in nine tiers and sits a short climb above the village. The car reaches the fort entrance; the tiers themselves are walked, and there is a fair amount of stair-climbing involved, which is worth knowing if you are arriving tired off a flight.',
      'Your driver tracks the flight and meets you at arrivals. The Gurgaon and Manesar stretch is the only part that congests, so an arrival outside the evening peak makes this a genuinely easy two hours.',
    ],
    faqs: [
      { question: 'How far is Neemrana from Delhi Airport?', answer: '110 km on NH48 via Gurgaon, Manesar and Behror, which is two to two and a half hours depending on how the Gurgaon stretch is moving. It is the closest fort-palace destination to IGI and a common first or last night for travellers on long-haul flights.' },
      { question: 'Can the taxi drop me at Neemrana Fort Palace itself?', answer: 'Yes, the car reaches the fort entrance. Inside, the palace is built in nine tiers up the hillside and is walked, with a considerable number of steps between levels. If mobility is a consideration, say so when booking and we will mention it so the property can advise on room placement.' },
      { question: 'Is Neemrana a good stop before a Rajasthan trip?', answer: 'It works well as a first night. It is on NH48, the main Delhi-Jaipur corridor, so continuing to Jaipur the next morning is a further 140 km and about two and a half hours. Sariska and Alwar are also within easy reach from here if you want wildlife before the cities.' },
      { question: 'What is the best time to arrive at Neemrana?', answer: 'Late afternoon. The fort looks its best in the last of the light, the terrace is the point of staying there, and arriving before dark means you see the tiers and the step well properly. If your flight lands in the morning the drive is quicker, but you will be waiting for check-in.' },
    ],
    related: ['delhi-airport-to-jaipur-taxi', 'delhi-airport-to-gurgaon-cab', 'delhi-airport-to-alwar-taxi', 'delhi-airport-to-faridabad-cab'],
  }),

  'delhi-airport-to-alwar-taxi': ar({
    slug: 'delhi-airport-to-alwar-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Alwar', destinationState: 'Rajasthan',
    km: 165, time: '3-3.5 hrs', highway: 'NH48 to Behror, then the Alwar road',
    attractions: ['Bala Quila fort', 'Alwar City Palace', 'Siliserh Lake Palace', 'Sariska Tiger Reserve', 'Moosi Maharani ki Chhatri', 'Bhangarh fort'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Sariska safari coordination', 'Hill-fort approach guidance'],
    description: [
      'Delhi Airport to Alwar is 165 km and three to three and a half hours, out on NH48 to Behror and then east on the Alwar road. The driver tracks your flight and meets you at the arrival gate.',
      'Alwar is the base for Sariska, which is 35 km further on, and safaris there run on booked morning and afternoon slots. If a safari is the point of the trip, book the permit first and we will plan the transfer around it rather than the other way round.',
      'In the town itself, the Bala Quila fort sits on a ridge above the city on a steep track that needs a capable vehicle, and permission is required to drive up. The City Palace, the Moosi Maharani cenotaph and the Siliserh lake palace are all straightforward. Say which you want and the driver will plan the day.',
    ],
    faqs: [
      { question: 'How long is the taxi from Delhi Airport to Alwar?', answer: 'Three to three and a half hours for 165 km, on NH48 as far as Behror and then the Alwar road east. The Gurgaon and Manesar stretch at the start is the only part that congests significantly.' },
      { question: 'Can I go from Delhi Airport straight to a Sariska safari?', answer: 'Not usefully on the same day. Sariska is 200 km from the airport and safaris run on booked slots at dawn and mid-afternoon. Land, transfer to Alwar or a Sariska-edge property in the evening, and take the dawn safari the next morning. Permits should be booked before the car.' },
      { question: 'Can the taxi drive up to Bala Quila fort?', answer: 'The track up to Bala Quila is steep and rough and requires permission from the local authorities, so it is not a given. An SUV handles it where permission is granted. We will tell you honestly on the day whether it is drivable; the City Palace, the cenotaph and Siliserh are all easy by comparison.' },
      { question: 'Is Bhangarh reachable from Alwar on the same trip?', answer: 'Yes, Bhangarh is about 85 km from Alwar and makes a half-day from there. It is gated and closes to visitors before sunset, which is enforced, so it needs to be a daytime plan rather than an evening one. Mention it when booking and the driver will allow the time.' },
    ],
    related: ['delhi-airport-to-neemrana-taxi', 'delhi-airport-to-jaipur-taxi', 'delhi-airport-to-mathura-taxi', 'delhi-airport-to-faridabad-cab'],
  }),

  'delhi-airport-to-dharamshala-taxi': ar({
    slug: 'delhi-airport-to-dharamshala-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Dharamshala', destinationState: 'Himachal Pradesh',
    km: 490, time: '10-11 hrs', highway: 'NH44 to Jalandhar, then NH503 via Pathankot',
    attractions: ['Tsuglagkhang complex at McLeod Ganj', 'Bhagsu waterfall', 'Triund trek trailhead', 'HPCA cricket stadium', 'Kangra Fort', 'Masroor rock temples'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Hill-experienced drivers', 'Overnight break option at Pathankot'],
    description: [
      'Delhi Airport to Dharamshala is 490 km and ten to eleven hours, north on NH44 to Jalandhar and then NH503 through Pathankot into the Kangra valley. It is a long day and worth planning rather than improvising.',
      'For an afternoon or evening arrival at Delhi we would suggest breaking the journey — Pathankot or Jalandhar makes an easy overnight and turns a punishing eleven hours into two comfortable halves, with the Kangra valley arrival in daylight. It costs the same either way.',
      'The last stretch matters. McLeod Ganj sits 9 km above lower Dharamshala on a steep narrow road that takes 25 minutes and congests badly in season, with very limited parking at the top. Tell us whether you are staying in lower Dharamshala, Sidhbari or up at McLeod Ganj and we will plan the drop properly.',
    ],
    faqs: [
      { question: 'How long is the Delhi Airport to Dharamshala taxi journey?', answer: 'Ten to eleven hours for 490 km, on NH44 to Jalandhar and then NH503 via Pathankot. The highway section is fast; the final approach into the Kangra valley and up to McLeod Ganj is what adds the time. We generally recommend an overnight break for anything but an early-morning arrival.' },
      { question: 'Should I fly to Gaggal instead of driving from Delhi?', answer: 'If the flight operates, it is far quicker — Gaggal is 13 km from lower Dharamshala. But the runway is short and the approach is weather-sensitive, so cancellations are frequent enough that it should not be the only plan. A good number of our Dharamshala transfers are people whose Gaggal flight was cancelled that morning.' },
      { question: 'Can I break the Delhi to Dharamshala journey overnight?', answer: 'Yes, and for a late arrival we recommend it. Pathankot and Jalandhar are both sensible stops on the route, roughly seven hours from Delhi, which leaves a three-hour morning drive into the valley in daylight. The fare is the same; only the driver night allowance applies as it would anyway.' },
      { question: 'Will the taxi take me up to McLeod Ganj?', answer: 'Yes. The 9 km climb from lower Dharamshala takes about 25 minutes and the road is narrow and busy in season. Parking at McLeod Ganj is very limited, so for some guesthouses the drop is at the main square or the bus stand and the last stretch is walked. Tell us the property name and we will confirm the nearest vehicle point.' },
    ],
    related: ['delhi-airport-to-amritsar-taxi', 'delhi-airport-to-chandigarh-taxi', 'delhi-airport-to-manali-taxi', 'chandigarh-airport-to-dharamshala-taxi'],
  }),

  'delhi-airport-to-ajmer-taxi': ar({
    slug: 'delhi-airport-to-ajmer-taxi', hub: 'delhi-airport',
    airport: 'Delhi IGI Airport', airportCode: 'DEL', airportCity: 'Delhi',
    destination: 'Ajmer', destinationState: 'Rajasthan',
    km: 400, time: '7-8 hrs', highway: 'NH48 via Jaipur, then NH58 to Ajmer',
    attractions: ['Ajmer Sharif Dargah', 'Ana Sagar Lake', 'Adhai Din ka Jhonpra', 'Taragarh Fort', 'Pushkar Brahma Temple', 'Kishangarh marble market'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Dargah approach guidance', 'Pushkar extension available'],
    description: [
      'Delhi Airport to Ajmer is 400 km and seven to eight hours, on NH48 through Jaipur and then NH58 south-west. The road is six-lane highway almost the whole way, which makes it a faster drive than the distance suggests.',
      'Pushkar is 15 km beyond Ajmer over the Nag Pahar hill, and a great many people travelling this route are going to one and then the other. If that is the plan, say so when booking — it is the same transfer rather than two.',
      'The Dargah is the usual destination and its approach needs local knowledge. The old-city lanes near the shrine are narrow and closed to vehicles at the entrance, so the drop is at the Dargah Bazaar edge and the rest is on foot. During the Urs the whole area carries pedestrian traffic in numbers that make vehicle movement impossible, and the plan changes accordingly.',
    ],
    faqs: [
      { question: 'How long does the Delhi Airport to Ajmer taxi take?', answer: 'Seven to eight hours for 400 km. NH48 to Jaipur is around five hours of good six-lane highway, and NH58 from Jaipur to Ajmer is a further two to two and a half. Getting clear of Delhi and Gurgaon at the start is usually the slowest part of the day.' },
      { question: 'Can the taxi drop me at Ajmer Sharif Dargah?', answer: 'At the nearest vehicle point. The lanes around the shrine are narrow and closed to vehicles near the entrance, so the drop is at the Dargah Bazaar edge and the last stretch is walked, which takes a few minutes. During the Urs the approach roads carry very heavy pedestrian traffic and the drop moves further out.' },
      { question: 'Can I continue from Ajmer to Pushkar on the same taxi?', answer: 'Yes, and most people on this route do. Pushkar is 15 km over the Nag Pahar hill, about half an hour on a road that is slower than its distance suggests. Mention it when booking so the driver plans for it. Note that Pushkar town itself is walked, so the car stops at the edge.' },
      { question: 'Would the train be better than a taxi from Delhi to Ajmer?', answer: 'For a daytime journey with no luggage, the train is competitive — Ajmer is well served on the Delhi-Ahmedabad line and the station is central. For an airport arrival it usually is not, because you would need an airport-to-station transfer in Delhi first, and a direct car keeps your luggage in one place and drops you at your hotel.' },
    ],
    related: ['delhi-airport-to-jaipur-taxi', 'jaipur-airport-to-ajmer-taxi', 'jaipur-airport-to-pushkar-taxi', 'delhi-airport-to-alwar-taxi'],
  }),

  // ─── JAIPUR ───────────────────────────────────────────────────────────
  'jaipur-airport-to-bikaner-taxi': ar({
    slug: 'jaipur-airport-to-bikaner-taxi', hub: 'jaipur-airport',
    airport: 'Jaipur International Airport', airportCode: 'JAI', airportCity: 'Jaipur',
    destination: 'Bikaner', destinationState: 'Rajasthan',
    km: 335, time: '5.5-6 hrs', highway: 'NH11 via Sikar and Ratangarh',
    attractions: ['Junagarh Fort', 'Karni Mata Temple at Deshnoke', 'Lalgarh Palace', 'Rampuria Havelis', 'National Research Centre on Camel', 'Gajner Palace'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Desert highway route', 'Deshnoke stop on request'],
    description: [
      'Jaipur Airport to Bikaner is 335 km and five and a half to six hours on NH11 through Sikar and Ratangarh, straight desert highway for most of the way. Your driver tracks the flight and meets you at arrivals.',
      'Deshnoke, where the Karni Mata temple is, sits 30 km before Bikaner on the same road, which makes it a natural stop on the way in rather than a separate trip. It is considerably more bearable early in the morning or late in the afternoon than in the middle of the day.',
      'Junagarh is unusual among the great Rajasthan forts in being built on flat ground rather than a hill, and it is far better preserved as a result, with its own vehicle access. The Rampuria havelis in the old city are reached on foot, because those lanes do not take cars.',
    ],
    faqs: [
      { question: 'How long is the Jaipur Airport to Bikaner taxi?', answer: 'Five and a half to six hours for 335 km via NH11, Sikar and Ratangarh. It is straight, fast desert highway with little traffic once you are clear of Jaipur, so the time is reliable rather than variable.' },
      { question: 'Can I stop at Deshnoke on the way to Bikaner?', answer: 'Yes, it is on the route. The Karni Mata temple at Deshnoke is 30 km before Bikaner on the same road, so it adds no detour, only the time you want to spend there. Early morning or late afternoon is considerably more comfortable than midday. Mention it when booking.' },
      { question: 'When should I avoid this drive?', answer: 'April to June. This is deep desert and daytime temperatures regularly pass 45 degrees, with long open stretches and little shade between Ratangarh and Bikaner. October to March is the season. If you must travel in summer, an early start gets most of the distance done before the worst of the heat.' },
      { question: 'Can the taxi continue from Bikaner to Jaisalmer?', answer: 'Yes, and it is a common onward leg — 330 km and about five and a half hours on the Pokhran road. If Bikaner and Jaisalmer are both on the itinerary, tell us when booking and we will quote it as a continuing journey rather than as separate transfers.' },
    ],
    related: ['jaipur-airport-to-jodhpur-taxi', 'jaipur-airport-to-jaisalmer-taxi', 'jaipur-airport-to-ajmer-taxi', 'jaipur-airport-to-pushkar-taxi'],
  }),

  'jaipur-airport-to-chittorgarh-taxi': ar({
    slug: 'jaipur-airport-to-chittorgarh-taxi', hub: 'jaipur-airport',
    airport: 'Jaipur International Airport', airportCode: 'JAI', airportCity: 'Jaipur',
    destination: 'Chittorgarh', destinationState: 'Rajasthan',
    km: 310, time: '5-5.5 hrs', highway: 'NH48 via Bhilwara',
    attractions: ['Chittorgarh Fort', 'Vijay Stambh', 'Rana Kumbha Palace', "Padmini's Palace", 'Gaumukh Reservoir', 'Kirti Stambh'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Fort vehicle access', 'Udaipur onward leg available'],
    description: [
      'Jaipur Airport to Chittorgarh is 310 km and five to five and a half hours on NH48 through Bhilwara, four to six lanes of good highway the whole way. The driver tracks your flight and meets you at arrivals.',
      'Chittorgarh is the largest fort in India by area — about thirteen square kilometres on a hill with seven gates climbing to it — and that is the single most useful thing to know before arriving. It cannot be walked in an afternoon, and the car goes up and around inside it with you, which is how most visitors see it.',
      'Allow a half-day at minimum for the fort, and a full one if you want the Gaumukh reservoir and the Kirti Stambh as well as the main monuments. Udaipur is 115 km further on, about two hours, which makes Chittorgarh a natural stop rather than an endpoint for many itineraries.',
    ],
    faqs: [
      { question: 'How long does the Jaipur Airport to Chittorgarh taxi take?', answer: 'Five to five and a half hours for 310 km on NH48 via Bhilwara. The road is good four to six lane highway throughout and the time is fairly reliable.' },
      { question: 'Can the taxi drive inside Chittorgarh fort?', answer: 'Yes, and you will want it to. The fort covers roughly thirteen square kilometres and the monuments inside it are spread across that area, so vehicles are allowed on the internal roads and that is how most visitors see it. Walking the whole fort is not realistic in a single visit.' },
      { question: 'How long should I allow at Chittorgarh?', answer: 'A half-day for the main monuments — the Vijay Stambh, Rana Kumbha Palace and Padmini\'s Palace — and a full day if you want the Gaumukh reservoir, the Kirti Stambh and the quieter corners too. The sound-and-light show runs after dark for anyone staying the night.' },
      { question: 'Can I continue to Udaipur from Chittorgarh?', answer: 'Yes, and it is the usual pattern. Udaipur is 115 km and about two hours further south on the same NH48 corridor. If both are on your itinerary, say so when booking and we will quote it as one continuing journey rather than two separate transfers.' },
    ],
    related: ['jaipur-airport-to-udaipur-taxi', 'jaipur-airport-to-ajmer-taxi', 'jaipur-airport-to-ranthambore-taxi', 'jaipur-airport-to-mount-abu-taxi'],
  }),

  'jaipur-airport-to-mount-abu-taxi': ar({
    slug: 'jaipur-airport-to-mount-abu-taxi', hub: 'jaipur-airport',
    airport: 'Jaipur International Airport', airportCode: 'JAI', airportCity: 'Jaipur',
    destination: 'Mount Abu', destinationState: 'Rajasthan',
    km: 490, time: '8.5-9 hrs', highway: 'NH48 via Ajmer and Pali to Abu Road, then the ghat',
    attractions: ['Dilwara Jain Temples', 'Nakki Lake', 'Guru Shikhar', 'Sunset Point', 'Achalgarh Fort', 'Brahma Kumaris Peace Park'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Ghat-experienced drivers', 'Overnight break option'],
    description: [
      'Jaipur Airport to Mount Abu is 490 km and eight and a half to nine hours, south on NH48 through Ajmer and Pali to Abu Road, and then the 27 km climb up to the plateau. For an afternoon arrival at Jaipur, breaking the journey is the sensible plan.',
      'That final climb is the part people underestimate. It is 27 km of continuous hairpin bends and takes a full hour whatever a map estimates, and it is well surfaced but relentless. Passengers prone to travel sickness should sit forward.',
      'Once on the plateau everything is close together — Dilwara is 3 km, Nakki Lake central, Guru Shikhar 15. One thing to plan: Dilwara restricts its visiting hours for non-worshippers and forbids photography inside, which catches most first-time visitors out.',
    ],
    faqs: [
      { question: 'How long is the Jaipur Airport to Mount Abu taxi journey?', answer: 'Eight and a half to nine hours for 490 km. The highway section through Ajmer and Pali to Abu Road is seven to eight hours, and the 27 km ghat climb from Abu Road takes a full hour on its own. We would suggest an overnight break for anything but an early-morning arrival.' },
      { question: 'How long does the Abu Road ghat climb take?', answer: 'An hour for 27 km, reliably, regardless of what a map estimates. It is continuous hairpin bends from the plain up to the plateau — well maintained but slow, and it is the stretch that decides your arrival time. Budget the full hour.' },
      { question: 'Should I break the journey from Jaipur to Mount Abu?', answer: 'For a late arrival, yes. Ajmer at 135 km or Pali further on both make sensible overnight stops, which leaves a shorter drive and a daylight ghat climb the next day. The fare is unchanged; only the driver night allowance applies as it would in any case.' },
      { question: 'When is the best season for Mount Abu?', answer: 'April to June is the peak, because it is the cool option when the plains are unbearable, and the monsoon from July to September is arguably the most beautiful with the hillside fully green. October to March is pleasant but genuinely cold at night. Long weekends fill the town in any month.' },
    ],
    related: ['jaipur-airport-to-udaipur-taxi', 'jaipur-airport-to-jodhpur-taxi', 'jaipur-airport-to-chittorgarh-taxi', 'jaipur-airport-to-ajmer-taxi'],
  }),

  // ─── CHANDIGARH ───────────────────────────────────────────────────────
  'chandigarh-airport-to-kasol-taxi': ar({
    slug: 'chandigarh-airport-to-kasol-taxi', hub: 'chandigarh-airport',
    airport: 'Chandigarh International Airport', airportCode: 'IXC', airportCity: 'Chandigarh',
    destination: 'Kasol', destinationState: 'Himachal Pradesh',
    km: 275, time: '7-8 hrs', highway: 'NH205 and NH3 via Bilaspur and Mandi to Bhuntar, then the Parvati valley road',
    attractions: ['Chalal riverside walk', 'Manikaran hot springs and gurudwara', 'Kheerganga trailhead', 'Parvati river', 'Tosh village', 'Malana approach'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Parvati valley experienced drivers', 'Trailhead drop'],
    description: [
      'Chandigarh Airport to Kasol is 275 km and seven to eight hours, up NH205 and NH3 through Bilaspur and Mandi to Bhuntar, then east into the Parvati valley. The valley road is the slow part — the last 35 km from Bhuntar takes well over an hour.',
      'Your driver tracks the flight and meets you at arrivals. An early arrival at Chandigarh is much better than a late one here, because the Parvati valley road is narrow with a river on one side and is not somewhere to be driving after dark if it can be avoided.',
      'Kasol itself is small and the village is walked. Chalal is a twenty-minute riverside path from it, Manikaran is 4 km further up the valley, and the Kheerganga trail starts at Barshaini, 15 km on — the car reaches the trailhead and the climb from there is four hours on foot.',
    ],
    faqs: [
      { question: 'How long is the Chandigarh Airport to Kasol taxi?', answer: 'Seven to eight hours for 275 km. The highway to Bhuntar via Bilaspur and Mandi is five and a half to six hours; the final 35 km up the Parvati valley road takes well over an hour because it is narrow and winding. An early flight arrival makes this a much better day.' },
      { question: 'Can the taxi reach Kheerganga?', answer: 'Only as far as the trailhead. The road ends at Barshaini, 15 km beyond Kasol, and Kheerganga is a four-hour walk up from there. We drop at Barshaini and can arrange the pickup for your return day. Nobody drives to Kheerganga; there is no road.' },
      { question: 'Is the Parvati valley road safe?', answer: 'It is a normal Himachal valley road — narrow, winding, with a river below and some single-lane stretches, driven daily by local traffic. Our drivers on this route know it. We avoid driving it after dark where the flight timing allows, and in the monsoon between July and September landslide closures are common enough that some flexibility is wise.' },
      { question: 'Can I go on to Manali from Kasol?', answer: 'Yes, and it is a natural extension. Manali is about 75 km from Kasol, back down the Parvati valley and up the Kullu valley, which takes two and a half to three hours. If both are on the itinerary, mention it when booking and we will plan it as one journey.' },
    ],
    related: ['chandigarh-airport-to-manali-taxi', 'chandigarh-airport-to-shimla-taxi', 'chandigarh-airport-to-dharamshala-taxi', 'delhi-airport-to-manali-taxi'],
  }),

  'chandigarh-airport-to-patiala-taxi': ar({
    slug: 'chandigarh-airport-to-patiala-taxi', hub: 'chandigarh-airport',
    airport: 'Chandigarh International Airport', airportCode: 'IXC', airportCity: 'Chandigarh',
    destination: 'Patiala', destinationState: 'Punjab',
    km: 70, time: '1.5-2 hrs', highway: 'NH7 via Zirakpur and Rajpura',
    attractions: ['Qila Mubarak', 'Sheesh Mahal', 'Baradari Gardens', 'Moti Bagh Palace', 'Gurudwara Dukh Nivaran Sahib', 'Patiala Gharana music heritage'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Under two hours', 'Old-city approach guidance'],
    description: [
      'Chandigarh Airport to Patiala is 70 km and an hour and a half to two hours on NH7 through Zirakpur and Rajpura. It is one of the shortest outstation transfers from IXC and an easy drive on good road.',
      'The driver tracks your flight and meets you at arrivals. The Zirakpur stretch just outside Chandigarh is the only part that congests, so an arrival outside the evening peak makes this comfortably under two hours.',
      'In Patiala, the Qila Mubarak complex in the old city is the main destination and is an active restoration, with the Sheesh Mahal and its painted gallery alongside. The old-city streets around it are narrow and the drop is at the complex edge. The Baradari gardens and Moti Bagh are straightforward.',
    ],
    faqs: [
      { question: 'How far is Patiala from Chandigarh Airport?', answer: '70 km, which is an hour and a half to two hours on NH7 via Zirakpur and Rajpura. The Zirakpur stretch immediately outside Chandigarh carries heavy traffic in the evening peak; outside that the drive is straightforward.' },
      { question: 'Can the taxi drop me at Qila Mubarak?', answer: 'At the complex edge, yes. The old-city streets immediately around Qila Mubarak are narrow and congested, so the drop is at the nearest accessible point and the last stretch is a short walk. The Sheesh Mahal, the Baradari gardens and Moti Bagh all have proper vehicle access.' },
      { question: 'Is a taxi better than the train from Chandigarh to Patiala?', answer: 'For an airport arrival, almost always. Rail connections between Chandigarh and Patiala are infrequent and the station transfer at the Chandigarh end costs you most of the time saved. A direct car is under two hours door to door with your luggage staying in one place.' },
      { question: 'Can I visit Patiala and Anandpur Sahib on the same trip?', answer: 'They are in different directions from Chandigarh, so it is a longer day rather than a natural pairing — Anandpur Sahib is about 90 km north-east of Chandigarh and 140 km from Patiala. It is perfectly doable as a full day with an early start. Tell us the plan when booking and we will quote the whole itinerary.' },
    ],
    related: ['chandigarh-airport-to-amritsar-taxi', 'chandigarh-airport-to-ludhiana-taxi', 'chandigarh-airport-to-shimla-taxi', 'chandigarh-airport-to-kasauli-taxi'],
  }),

  'chandigarh-airport-to-ludhiana-taxi': ar({
    slug: 'chandigarh-airport-to-ludhiana-taxi', hub: 'chandigarh-airport',
    airport: 'Chandigarh International Airport', airportCode: 'IXC', airportCity: 'Chandigarh',
    destination: 'Ludhiana', destinationState: 'Punjab',
    km: 100, time: '2-2.5 hrs', highway: 'NH5 via Kharar and Samrala',
    attractions: ['Punjab Agricultural University Museum', 'Lodhi Fort', 'Nehru Rose Garden', 'Maharaja Ranjit Singh War Museum', 'Hosiery and textile markets', 'Gurudwara Charan Kanwal at Machhiwara'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Business-district drops', 'Industrial-area route knowledge'],
    description: [
      'Chandigarh Airport to Ludhiana is 100 km and two to two and a half hours on NH5 through Kharar and Samrala. Most of the traffic on this route is business — Ludhiana is Punjab\'s industrial centre and the hosiery, bicycle and machine-tool trades bring buyers through Chandigarh airport constantly.',
      'The driver tracks your flight and meets you at arrivals, and for a business arrival that matters: a fixed fare and a known pickup point is a different proposition from finding a taxi after a delayed flight.',
      'Ludhiana is spread out and the industrial areas, the hosiery markets around Chaura Bazaar and the business hotels on Ferozepur Road are all some distance apart. Tell us the destination rather than just the city and the driver will plan the approach; the inner-city market areas congest heavily in working hours.',
    ],
    faqs: [
      { question: 'How long is the Chandigarh Airport to Ludhiana taxi?', answer: 'Two to two and a half hours for 100 km on NH5 via Kharar and Samrala. The road is good four-lane highway for most of the way; the slow sections are getting out of the Chandigarh periphery and getting into Ludhiana itself, which has heavy local traffic.' },
      { question: 'Can I book this transfer for an early-morning business meeting?', answer: 'Yes, and it is a common booking. We run this route at any hour, the fare is fixed in advance with no surge, and the driver tracks your flight so a delay does not lose the car. For a morning meeting in Ludhiana, allow two and a half to three hours from the airport to be comfortable rather than two.' },
      { question: 'Is there a better option than a taxi for Chandigarh to Ludhiana?', answer: 'There are trains and buses, and for a solo traveller with light luggage they are cheaper. For an airport arrival they generally are not quicker: you would need a transfer to the Chandigarh railway station, which is well outside the city, and then a local vehicle at the Ludhiana end. A direct car is door to door in two to two and a half hours.' },
      { question: 'Can the taxi wait and return the same day?', answer: 'Yes. A same-day return with waiting time is a standard arrangement for business trips on this route and is usually better value than two one-way transfers. Tell us roughly how long you expect to be and we will quote it as a round trip with the waiting included.' },
    ],
    related: ['chandigarh-airport-to-amritsar-taxi', 'chandigarh-airport-to-patiala-taxi', 'delhi-airport-to-chandigarh-taxi', 'chandigarh-airport-to-shimla-taxi'],
  }),

  // ─── DEHRADUN ─────────────────────────────────────────────────────────
  'dehradun-airport-to-auli-taxi': ar({
    slug: 'dehradun-airport-to-auli-taxi', hub: 'dehradun-airport',
    airport: 'Dehradun Jolly Grant Airport', airportCode: 'DED', airportCity: 'Dehradun',
    destination: 'Auli', destinationState: 'Uttarakhand',
    km: 275, time: '8-9 hrs', highway: 'NH7 and NH58 up the Alaknanda via Devprayag, Rudraprayag and Joshimath',
    attractions: ['Auli ski slope', 'Auli ropeway', 'Gorson Bugyal meadow', 'Nanda Devi views', 'Joshimath Narsingh Temple', 'Vishnuprayag confluence'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'High-altitude experienced drivers', 'Joshimath overnight option'],
    description: [
      'Dehradun Airport to Auli is 275 km and eight to nine hours, up the Alaknanda on the Badrinath road through Devprayag, Rudraprayag and Joshimath. It is a serious mountain drive and the kilometres tell you very little about it.',
      'For any arrival after mid-morning, we would plan an overnight at Srinagar or Rudraprayag rather than pushing through, because the upper Alaknanda gorge is not a road to be driving tired or after dark. Joshimath, 15 km below Auli, is the usual final base.',
      'Your driver tracks the flight and meets you at arrivals. Auli sits at 2,800 metres and the last stretch above Joshimath is steep; in winter the road can require chains or close entirely, in which case the ropeway from Joshimath is the way up. We will tell you the current position before you travel.',
    ],
    faqs: [
      { question: 'How long does the Dehradun Airport to Auli taxi take?', answer: 'Eight to nine hours for 275 km on the Badrinath road up the Alaknanda. Mountain distances are about the road rather than the kilometres here, and the stretch above Rudraprayag is slow. For anything but an early arrival we recommend breaking the journey overnight.' },
      { question: 'Can I reach Auli in one day from Dehradun Airport?', answer: 'If your flight lands early, yes — but it is a full day of mountain driving and you will arrive tired. The better plan for a mid-day or afternoon arrival is an overnight at Srinagar or Rudraprayag and a shorter second day, which also means the upper gorge is driven in daylight.' },
      { question: 'Is the road to Auli open in winter?', answer: 'Usually to Joshimath, and sometimes not the final stretch to Auli. The last 15 km above Joshimath is steep and can require chains or close entirely after heavy snow, in which case the ropeway from Joshimath is how people get up. We check the current position before any winter booking and will tell you honestly what to expect.' },
      { question: 'Do I need to worry about altitude at Auli?', answer: 'It is worth being aware of. Auli is at 2,800 metres and Joshimath at 1,890, so the gain from Dehradun is substantial but not extreme. Most people are fine. Taking the journey over two days rather than one helps, and if you are continuing higher toward Badrinath or the Valley of Flowers the gradual ascent matters more.' },
    ],
    related: ['dehradun-airport-to-rishikesh-taxi', 'dehradun-airport-to-haridwar-taxi', 'dehradun-airport-to-chopta-taxi', 'dehradun-airport-to-mussoorie-taxi'],
  }),

  'dehradun-airport-to-chopta-taxi': ar({
    slug: 'dehradun-airport-to-chopta-taxi', hub: 'dehradun-airport',
    airport: 'Dehradun Jolly Grant Airport', airportCode: 'DED', airportCity: 'Dehradun',
    destination: 'Chopta', destinationState: 'Uttarakhand',
    km: 230, time: '7-8 hrs', highway: 'NH7 and NH107 via Devprayag, Rudraprayag and Ukhimath',
    attractions: ['Tungnath Temple', 'Chandrashila summit', 'Deoria Tal', 'Chopta meadows', 'Ukhimath Omkareshwar Temple', 'Nanda Devi and Chaukhamba views'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Trailhead drop at Chopta', 'Hill-experienced drivers'],
    description: [
      'Dehradun Airport to Chopta is 230 km and seven to eight hours, up through Devprayag and Rudraprayag and then east via Ukhimath into the meadow country at 2,700 metres. The road is mountain road throughout and the time reflects that.',
      'Chopta is a trailhead rather than a town. The Tungnath temple is three and a half kilometres above it on foot, and Chandrashila another kilometre beyond that, with Nanda Devi, Trisul and Chaukhamba in view from the top. The car reaches Chopta; the rest is walked.',
      'Because the summit view is a first-light view, the pattern that works is to arrive at Chopta in the evening and start walking at dawn. That makes an early flight arrival at Dehradun considerably more useful than a late one, and for an afternoon landing we would suggest an overnight on the way at Rudraprayag.',
    ],
    faqs: [
      { question: 'How long is the Dehradun Airport to Chopta taxi?', answer: 'Seven to eight hours for 230 km via Devprayag, Rudraprayag and Ukhimath. It is mountain road the whole way, so the kilometre figure understates the journey considerably. An early flight arrival makes a same-day transfer comfortable; a late one is better broken overnight.' },
      { question: 'Can the taxi take me to Tungnath temple?', answer: 'No, and no vehicle can. Tungnath is three and a half kilometres above Chopta on a paved walking trail, roughly a two to three hour climb, with Chandrashila a further kilometre beyond. We drop at Chopta, which is the trailhead, and can be there for your return.' },
      { question: 'When is Chopta accessible?', answer: 'April to June and September to November are the main windows. The Tungnath temple closes for winter and the trail carries snow from roughly December to March, though Chopta itself is often reachable and is popular for snow trekking with proper equipment. The monsoon between July and September brings landslide closures on the approach roads.' },
      { question: 'Should I plan a night at Chopta or go up the same day?', answer: 'A night, if the view is the point. Chandrashila is clear for about forty minutes after first light and usually hazes over by mid-morning, so the walk needs to start at dawn — which is impossible on the back of a seven-hour drive. Arrive in the evening, climb at first light, and come down to drive back.' },
    ],
    related: ['dehradun-airport-to-auli-taxi', 'dehradun-airport-to-rishikesh-taxi', 'dehradun-airport-to-haridwar-taxi', 'dehradun-airport-to-mussoorie-taxi'],
  }),

  // ─── LUCKNOW ──────────────────────────────────────────────────────────
  'lucknow-airport-to-prayagraj-taxi': ar({
    slug: 'lucknow-airport-to-prayagraj-taxi', hub: 'lucknow-airport',
    airport: 'Lucknow Chaudhary Charan Singh Airport', airportCode: 'LKO', airportCity: 'Lucknow',
    destination: 'Prayagraj', destinationState: 'Uttar Pradesh',
    km: 205, time: '3.5-4 hrs', highway: 'NH30 via Raebareli',
    attractions: ['Triveni Sangam', 'Allahabad Fort', 'Anand Bhavan', 'Khusro Bagh', 'Allahabad University', 'Hanuman Mandir at Sangam'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Sangam boat timing guidance', 'Magh Mela route knowledge'],
    description: [
      'Lucknow Airport to Prayagraj is 205 km and three and a half to four hours on NH30 through Raebareli. Your driver tracks the flight and meets you at arrivals.',
      'The Triveni Sangam, where the Ganga and the Yamuna meet, is the usual destination, and it is a boat trip rather than a viewpoint. The two rivers show their different colours most clearly in early morning light, so a late-afternoon arrival and a dawn boat the next day is the pattern that works best.',
      'During the Magh Mela in January and February, and far more so during a Kumbh, the entire Sangam area is reorganised with temporary roads, pontoon bridges and vehicle restrictions that change week to week. If you are travelling then, tell us and the driver will plan against the current arrangement rather than the usual one.',
    ],
    faqs: [
      { question: 'How long is the Lucknow Airport to Prayagraj taxi?', answer: 'Three and a half to four hours for 205 km on NH30 via Raebareli. It is good highway for most of the way. Allow extra during the Magh Mela season in January and February, when traffic into Prayagraj is heavy and routes are diverted.' },
      { question: 'Can the taxi take me to the Triveni Sangam?', answer: 'To the boat jetty, yes. The confluence itself is reached by boat — the Sangam is where the rivers meet in open water, not a bank you can stand on — so the car drops at the jetty area and the boat is arranged there. Early morning is much the best time, both for the light and for the colour difference between the two rivers.' },
      { question: 'What changes during the Magh Mela or Kumbh?', answer: 'A great deal. The Sangam area is laid out afresh each year with temporary roads, pontoon bridges and extensive vehicle restrictions, and during a Kumbh the scale of that is enormous. Drop points move, sometimes a long way from where you want to be. Tell us your dates and we will plan against the arrangement in force rather than the normal one.' },
      { question: 'Can I continue from Prayagraj to Varanasi?', answer: 'Yes, it is a further 125 km and about two and a half hours on the expressway. Prayagraj and Varanasi together are a common itinerary off a Lucknow arrival. Mention it when booking and we will quote the whole journey rather than separate legs.' },
    ],
    related: ['lucknow-airport-to-varanasi-taxi', 'lucknow-airport-to-ayodhya-taxi', 'lucknow-airport-to-agra-taxi', 'varanasi-airport-to-ayodhya-taxi'],
  }),

  'lucknow-airport-to-agra-taxi': ar({
    slug: 'lucknow-airport-to-agra-taxi', hub: 'lucknow-airport',
    airport: 'Lucknow Chaudhary Charan Singh Airport', airportCode: 'LKO', airportCity: 'Lucknow',
    destination: 'Agra', destinationState: 'Uttar Pradesh',
    km: 340, time: '4.5-5 hrs', highway: 'Agra-Lucknow Expressway',
    attractions: ['Taj Mahal', 'Agra Fort', 'Itmad-ud-Daulah tomb', 'Fatehpur Sikri', 'Mehtab Bagh', 'Akbar tomb at Sikandra'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Expressway route', 'Sunrise Taj timing coordination'],
    description: [
      'Lucknow Airport to Agra is 340 km on the Agra-Lucknow Expressway and takes four and a half to five hours, which is quick for the distance — six-lane access-controlled road for almost all of it.',
      'The driver tracks your flight and meets you at arrivals. The expressway has limited services along it, so the driver will plan a stop; there is little point pressing on without one on a five-hour run.',
      'If the Taj at sunrise is the point of the trip, and for most people it is, an afternoon or evening arrival at Lucknow works well: reach Agra at night and be at the gates when they open. The marble changes colour for about twenty minutes after opening and the crowd is a fraction of what it is by nine. The monument is closed on Fridays.',
    ],
    faqs: [
      { question: 'How long is the Lucknow Airport to Agra taxi?', answer: 'Four and a half to five hours for 340 km on the Agra-Lucknow Expressway. It is six-lane access-controlled road for almost the whole way, which makes it considerably faster than the distance suggests and the timing reliable.' },
      { question: 'Can I reach Agra in time for the Taj at sunrise?', answer: 'Easily, if you arrive at Lucknow the day before. The drive is under five hours, so an afternoon or evening landing puts you in Agra at night with the sunrise opening comfortably within reach. The first twenty minutes after the gates open is the best light and the smallest crowd of the day.' },
      { question: 'Is the Taj Mahal open every day?', answer: 'No — it is closed on Fridays, which catches a great many visitors out. Agra Fort, Itmad-ud-Daulah, Sikandra and Fatehpur Sikri are all open, so a Friday in Agra is far from wasted, but if the Taj is the reason for the trip, plan the dates around it.' },
      { question: 'Can the taxi continue to Delhi or Jaipur from Agra?', answer: 'Yes. Delhi is 230 km on the Yamuna Expressway, about three and a half hours, and Jaipur is 240 km and four hours. A Lucknow arrival followed by Agra and then on to either is a common itinerary. Tell us the full plan when booking and we will quote it as one journey.' },
    ],
    related: ['lucknow-airport-to-prayagraj-taxi', 'lucknow-airport-to-ayodhya-taxi', 'delhi-airport-to-agra-taxi', 'jewar-airport-to-agra-taxi'],
  }),

  // ─── AMRITSAR ─────────────────────────────────────────────────────────
  'amritsar-airport-to-dharamshala-taxi': ar({
    slug: 'amritsar-airport-to-dharamshala-taxi', hub: 'amritsar-airport',
    airport: 'Amritsar Sri Guru Ram Dass Jee International Airport', airportCode: 'ATQ', airportCity: 'Amritsar',
    destination: 'Dharamshala', destinationState: 'Himachal Pradesh',
    km: 210, time: '4.5-5 hrs', highway: 'NH54 via Jalandhar and Pathankot',
    attractions: ['Tsuglagkhang complex at McLeod Ganj', 'Bhagsu waterfall', 'Triund trek trailhead', 'HPCA stadium', 'Kangra Fort', 'Norbulingka Institute'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Hill-experienced drivers', 'McLeod Ganj drop guidance'],
    description: [
      'Amritsar Airport to Dharamshala is 210 km and four and a half to five hours via Jalandhar and Pathankot, and it is the most reliable way into the Kangra valley by air — considerably more so than flying to Gaggal, whose short runway and weather-sensitive approach mean frequent cancellations.',
      'A good share of our bookings on this route are people whose Gaggal flight was cancelled that morning, which is worth knowing when you plan: Amritsar is the dependable arrival point for Dharamshala and the drive is an easy half-day.',
      'Your driver tracks the flight and meets you at arrivals. The final 9 km from lower Dharamshala up to McLeod Ganj is steep and narrow with very limited parking at the top, so tell us whether you are staying in lower Dharamshala, Sidhbari or up at McLeod Ganj and we will plan the drop.',
    ],
    faqs: [
      { question: 'How long is the Amritsar Airport to Dharamshala taxi?', answer: 'Four and a half to five hours for 210 km via Jalandhar and Pathankot on NH54. The plains section is good highway; the climb into the Kangra valley at the end is where the time goes. It is an easy half-day drive.' },
      { question: 'Should I fly to Gaggal or drive from Amritsar?', answer: 'Amritsar is the more reliable plan. Gaggal is only 13 km from lower Dharamshala, so when the flight operates it is much quicker, but the runway is short and the approach weather-sensitive and cancellations are common. A good number of our Amritsar to Dharamshala transfers are exactly that: a cancelled Gaggal flight rerouted by road.' },
      { question: 'Will the taxi take me up to McLeod Ganj?', answer: 'Yes. McLeod Ganj is 9 km above lower Dharamshala on a steep narrow road that takes about 25 minutes and congests in season. Parking up there is very limited, so for some guesthouses the drop is at the main square or bus stand with a short walk. Tell us the property and we will confirm.' },
      { question: 'Can I see the Golden Temple before leaving Amritsar?', answer: 'Yes, and many people do. The Golden Temple is 11 km from the airport and open through the night, so an early arrival can take it in before heading to Dharamshala, or a late one can see it in the evening and travel the next morning. Mention it when booking and we will build the time in rather than treating it as a separate trip.' },
    ],
    related: ['amritsar-airport-to-city-taxi', 'chandigarh-airport-to-dharamshala-taxi', 'delhi-airport-to-dharamshala-taxi', 'chandigarh-airport-to-dalhousie-taxi'],
  }),

  // ─── VARANASI ─────────────────────────────────────────────────────────
  'varanasi-airport-to-bodh-gaya-taxi': ar({
    slug: 'varanasi-airport-to-bodh-gaya-taxi', hub: 'varanasi-airport',
    airport: 'Varanasi Lal Bahadur Shastri Airport', airportCode: 'VNS', airportCity: 'Varanasi',
    destination: 'Bodh Gaya', destinationState: 'Bihar',
    km: 260, time: '5-5.5 hrs', highway: 'NH19 and NH120 via Sasaram and Gaya',
    attractions: ['Mahabodhi Temple', 'Bodhi Tree', 'Great Buddha Statue', 'Thai and Japanese monasteries', 'Sujata Stupa', 'Dungeshwari caves'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Buddhist circuit knowledge', 'Early-morning Mahabodhi timing'],
    description: [
      'Varanasi Airport to Bodh Gaya is 260 km and five to five and a half hours via Sasaram and Gaya. It is the standard connection on the Buddhist circuit and one we run constantly, particularly in the October to March season.',
      'Your driver tracks the flight and meets you at arrivals. Sarnath, where the Buddha gave his first sermon, is 10 km from Varanasi airport on the way out of the city, which makes it a natural stop on the same transfer rather than a separate trip.',
      'At Bodh Gaya the Mahabodhi compound is at its best between five and seven in the morning, when the chanting begins and the day\'s visitors have not arrived. That is the single most useful thing to know about timing a visit, and it is the reason most people stay the night rather than coming and going.',
    ],
    faqs: [
      { question: 'How long is the Varanasi Airport to Bodh Gaya taxi?', answer: 'Five to five and a half hours for 260 km on NH19 and NH120 via Sasaram and Gaya. The road is reasonable throughout. It is the standard Buddhist-circuit transfer and we run it year round, most heavily between October and March.' },
      { question: 'Can I stop at Sarnath on the way?', answer: 'Yes, and it makes obvious sense. Sarnath is 10 km from Varanasi airport, effectively on the way out of the city, so it adds almost no distance — only the hour or two you want to spend there. Mention it when booking so the driver plans the time.' },
      { question: 'When is the best time to visit the Mahabodhi Temple?', answer: 'Between five and seven in the morning. The chanting starts early, the light is good, and the compound is close to empty compared with the middle of the day. That timing is why most visitors stay a night at Bodh Gaya rather than treating it as a day trip from anywhere.' },
      { question: 'Can the taxi continue to Rajgir and Nalanda?', answer: 'Yes, and it completes the circuit properly. Rajgir is about 70 km from Bodh Gaya and Nalanda a further 15, so the two together are a comfortable day from Bodh Gaya or a stop on the way onward to Patna. Tell us the full itinerary when booking and we will quote it as one journey.' },
    ],
    related: ['varanasi-airport-to-sarnath-taxi', 'varanasi-airport-to-ayodhya-taxi', 'lucknow-airport-to-varanasi-taxi', 'lucknow-airport-to-prayagraj-taxi'],
  }),

  // ─── JEWAR (Noida International) ──────────────────────────────────────
  'jewar-airport-to-agra-taxi': ar({
    slug: 'jewar-airport-to-agra-taxi', hub: 'delhi-airport',
    airport: 'Noida International Airport, Jewar', airportCode: 'DXN', airportCity: 'Jewar',
    destination: 'Agra', destinationState: 'Uttar Pradesh',
    km: 130, time: '2-2.5 hrs', highway: 'Yamuna Expressway',
    attractions: ['Taj Mahal', 'Agra Fort', 'Itmad-ud-Daulah tomb', 'Fatehpur Sikri', 'Mehtab Bagh', 'Akbar tomb at Sikandra'],
    highlights: ['Flight tracking included', 'Meet and greet at arrival', 'Fixed fare, no surge', 'Shortest airport run to Agra', 'Sunrise Taj timing coordination'],
    description: [
      'Jewar to Agra is 130 km on the Yamuna Expressway and takes two to two and a half hours, which makes Noida International the closest airport to Agra by a wide margin — IGI is 230 km and an hour and a half further.',
      'That changes the arithmetic of a Taj visit considerably. A morning landing at Jewar can be at the monument the same afternoon, and an evening landing puts the sunrise opening well within reach the next day without a long drive first.',
      'The driver tracks your flight and meets you at arrivals. The expressway is six lanes and fully FASTag-enabled, with the Mathura plaza the only one on this stretch. Mathura and Vrindavan sit roughly halfway and fit naturally into the journey if you want them.',
    ],
    faqs: [
      { question: 'How far is Agra from Jewar airport?', answer: '130 km on the Yamuna Expressway, which is two to two and a half hours. That makes Noida International substantially the closest airport to Agra — Delhi IGI is 230 km and around three and a half hours by comparison.' },
      { question: 'Can I see the Taj Mahal the same day I land at Jewar?', answer: 'Yes, if you land in the morning. Two and a half hours to Agra leaves a comfortable afternoon at the monument. For the sunrise visit, which is the better one, land in the afternoon or evening, stay the night in Agra and be at the gates when they open. Remember the Taj is closed on Fridays.' },
      { question: 'Can I stop at Mathura and Vrindavan on the way?', answer: 'Yes, they are roughly halfway and directly on the route, so they add no meaningful distance. The Krishna Janmabhoomi complex at Mathura and the Vrindavan temples both fit into the transfer if you allow the time. Note that the lanes around Banke Bihari are closed to vehicles at peak hours.' },
      { question: 'Is a taxi from Jewar better than going via Delhi?', answer: 'For Agra, clearly. Going via Delhi means driving away from Agra first and then the full 230 km down, which is an extra hour and a half at least. A direct transfer from Jewar on the Yamuna Expressway is the shortest road route to Agra from any airport.' },
    ],
    related: ['delhi-airport-to-agra-taxi', 'delhi-airport-to-mathura-taxi', 'delhi-airport-to-vrindavan-taxi', 'lucknow-airport-to-agra-taxi'],
  }),
  };
}
