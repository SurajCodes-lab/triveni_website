// src/utilis/toursGuideLogistics.js
//
// Per-vehicle and per-city tour logistics for the tours-with-guide pages.
//
// WHY THIS FILE EXISTS
// --------------------
// Measured in Week 53 across every page family, the tours-with-guide pages are
// the least distinguishable on the whole site:
//
//     82 pages · 3,045 median words · 58.5% sibling overlap · 4.5% unique share
//
// Four and a half per cent. Three thousand words a page, of which roughly 2,900
// also appear on its siblings. Long and indistinguishable is a worse combination
// than short and indistinguishable, because the length implies an effort that is
// not reaching the reader.
//
// THE STRUCTURAL CAUSE, WHICH IS WHY A DATA FILE FIXES IT
// ------------------------------------------------------
// These pages are a city × vehicle grid. For one city the monuments, duration,
// distance, itinerary, hero image and gallery are shared across every vehicle
// variant, and only the vehicle name, the fare and a sentence of intro differ.
// So the Taj Mahal sedan, tempo and coach pages are the same page with a
// different price.
//
// That is not a writing failure. It is what a grid produces, and it only stops
// being true if the grid has something real to say at each intersection.
//
// It does. The difference between taking four people to the Taj in a sedan and
// forty-five in a coach is not the price — it is where the vehicle is allowed to
// stop, how far the walk is from there, how long the group takes to clear
// security, and what a guide can actually do with a group that size. Those are
// facts an operator knows and a listing site does not, and they are different at
// every intersection of the grid.
//
// HOW IT IS STRUCTURED, AND WHY NOT ONE RECORD PER PAGE
// ----------------------------------------------------
// Two tables rather than 82 records:
//
//   byVehicle — what this vehicle class means for a guided tour: group
//               movement, how the day paces, what the guide has to work with.
//   byCity    — the access facts for that city's monuments: where each class of
//               vehicle is actually allowed to stop, the walk from there, and
//               the security reality.
//
// Each page combines one of each, so every intersection of the grid gets a
// distinct pair. Eighteen entries instead of eighty-two, and a new city or a new
// vehicle is one entry rather than a column of them.
//
// WHAT IS DELIBERATELY NOT IN HERE
// --------------------------------
// No claim about equipment or staffing we have not confirmed — no whisper
// systems, no numbers of assistant guides. Access rules at protected monuments
// change by order and by season, so the wording says what to plan for and names
// who sets it rather than stating a rule as permanent fact. Distances from
// parking are the honest walking ranges, not best cases.

/**
 * What a vehicle class means for a guided tour day.
 *
 * Keyed by the vehicleSlug used in toursWithGuideData.
 */
export const byVehicle = {
  'swift-dzire': {
    groupSize: 'Up to 4, usually a couple or a small family',
    pacing:
      'The fastest shape of guided day there is. Four people clear a monument security queue in ' +
      'minutes, so the itinerary can take in a fourth stop that a larger group would have to drop, ' +
      'and the day can be rescheduled on the morning if the light or the crowd suggests it.',
    guideWorking:
      'A guide with four people is having a conversation rather than giving a talk. Questions get ' +
      'answered as they arise and the route through a monument can follow what the group is ' +
      'actually interested in.',
    access:
      'A sedan reaches the closest permitted drop point at every monument on these tours. Where ' +
      'there is a vehicle-free zone, this is the class that gets you to the edge of it.',
  },
  ertiga: {
    groupSize: 'Up to 6, with real luggage room',
    pacing:
      'Nearly as quick through a monument as a sedan, with the advantage that six people travelling ' +
      'together are not split across two cars — which matters more than it sounds, because a guide ' +
      'cannot brief two vehicles at once.',
    guideWorking:
      'Still small enough for a conversation. Six is roughly the upper limit at which everyone can ' +
      'hear a guide indoors without raising a voice.',
    access:
      'Same drop points as a sedan at every monument here. No access penalty for the extra seats.',
  },
  'innova-crysta': {
    groupSize: 'Up to 7, the usual choice for a family with grandparents or small children',
    pacing:
      'The practical choice when the group includes someone who will want to sit down between ' +
      'monuments. Higher seating and a smoother ride on the Yamuna Expressway, and the day paces ' +
      'the same as a smaller car.',
    guideWorking:
      'Seven is comfortable for a single guide indoors and out. Beyond this the group starts ' +
      'needing to be gathered rather than simply walked.',
    access:
      'Reaches the same permitted drop points as the smaller cars.',
  },
  'force-urbania': {
    groupSize: 'Up to 12, an extended family or a small corporate group',
    pacing:
      'The first size at which the queue becomes a planning factor. Twelve people through monument ' +
      'security takes noticeably longer than four, so a twelve-seat day starts earlier than the ' +
      'same itinerary in a car — an hour earlier is the usual adjustment.',
    guideWorking:
      'A guide with twelve is giving a talk and has to position the group to be heard. Indoors at a ' +
      'busy monument that means waiting for space rather than walking straight in.',
    access:
      'A tempo-class vehicle is directed to the coach and large-vehicle parking at most protected ' +
      'monuments rather than the car drop. Expect a longer walk than a car at the same monument.',
  },
  'maharaja-tempo': {
    groupSize: 'Up to 17, the common group-tour size',
    pacing:
      'Seventeen people set the pace of the day rather than the itinerary doing it. Security, ' +
      'tickets, washrooms and gathering after each monument all take longer, and a realistic ' +
      'seventeen-seat day covers one stop fewer than the same hours in a car. Planning it the other ' +
      'way is the commonest mistake in group touring.',
    guideWorking:
      'At seventeen a guide needs the group standing still to be heard, which shapes where the ' +
      'commentary happens — outside and before entry, rather than in front of the thing being ' +
      'described.',
    access:
      'Parks with the large vehicles. At monuments with a vehicle-free zone this means a walk of ' +
      'several hundred metres to over a kilometre from the parking to the gate, which has to be in ' +
      'the plan if anyone in the group cannot manage it.',
  },
  'mini-bus-20': {
    groupSize: 'Up to 20, a school, college or corporate group',
    pacing:
      'Twenty is the point at which the group needs managing as well as guiding. Entry is best ' +
      'handled with tickets already in hand, and the day works with fewer stops and longer at each ' +
      'one rather than the reverse.',
    guideWorking:
      'A guide addressing twenty outdoors is working against ambient noise. The practical pattern is ' +
      'a full briefing before entry and short prompts inside.',
    access:
      'Coach parking only. The walk from parking to gate is the single biggest difference between ' +
      'this and a car at the same monument.',
  },
  'volvo-bus-45': {
    groupSize: 'Up to 45, a full tour group or an institutional party',
    pacing:
      'A forty-five-person day is a logistics exercise with a tour inside it. Boarding and ' +
      'disembarking alone account for a substantial part of the day, security queues are long, and ' +
      'the itinerary has to be built backwards from closing times rather than forwards from the ' +
      'start. Two monuments properly is a better day than four badly.',
    guideWorking:
      'Forty-five people cannot all hear one voice indoors. The honest plan is commentary on the ' +
      'coach and at assembly points, with the monument visit structured around a meeting time and ' +
      'place rather than a continuous guided walk.',
    access:
      'Coach parking, which at the most restricted monuments is the furthest point from the gate. ' +
      'Allow for the walk twice, out and back, and for the group to spread out over it.',
  },
  'luxury-car-bmw-audi': {
    groupSize: 'Up to 4, where the arrival matters as much as the tour',
    pacing:
      'Paced like a sedan day, with the flexibility that comes from a small group. The difference ' +
      'is in the travel between monuments rather than at them.',
    guideWorking:
      'As with any four-person group, a conversation rather than a talk.',
    access:
      'The closest permitted drop point, the same as any car. No monument grants vehicle access ' +
      'beyond its public limit for a premium vehicle, and anyone promising otherwise is not ' +
      'describing how these sites work.',
  },
};

/**
 * The access and crowd facts for each tour city's monuments.
 *
 * Access rules at protected monuments are set by the site authorities and change
 * by order and by season, so each entry names who sets them rather than stating
 * a rule as permanent.
 */
export const byCity = {
  agra: {
    dropReality:
      'The Taj Mahal has a long-standing vehicle-free zone around it, so no class of vehicle stops ' +
      'at the monument itself. Cars reach the nearest permitted point; tempos, mini buses and ' +
      'coaches use the designated large-vehicle parking, which is further out. The final approach is ' +
      'on foot, by battery van or by cycle rickshaw depending on the gate.',
    walkFromParking:
      'From car drop to the East or West gate is a short walk. From coach parking it is ' +
      'considerably longer — plan on fifteen to twenty-five minutes each way for a group moving ' +
      'together, and more at the end of the day when everyone is tired.',
    crowdAndTiming:
      'Sunrise is the quietest hour and the best light, and it is also when the queue forms before ' +
      'opening. The monument is closed to tourists on Fridays, which is the single most important ' +
      'thing to get right about an Agra itinerary. Agra Fort and Itimad-ud-Daulah are open daily ' +
      'and far less crowded.',
    authority:
      'Entry, timings and the vehicle-free zone are set by the Archaeological Survey of India and ' +
      'the local administration, and they do change — confirm for your date.',
  },
  delhi: {
    dropReality:
      'Delhi monuments differ from one another more than Agra\'s do. Qutub Minar and Humayun\'s Tomb ' +
      'have their own parking with a short walk. Red Fort and Jama Masjid sit in Old Delhi, where ' +
      'the surrounding lanes are congested and large vehicles are restricted — a coach does not get ' +
      'close, and the last stretch is on foot or by rickshaw. India Gate and the central vista have ' +
      'controlled stopping that varies with events and security.',
    walkFromParking:
      'Short at Qutub Minar, Humayun\'s Tomb and Akshardham. Substantially longer for anything in ' +
      'Old Delhi in a large vehicle, and the walk is through crowds rather than along a path.',
    crowdAndTiming:
      'Most Delhi monuments close one day a week and the day is not the same for all of them, which ' +
      'is what breaks a multi-monument Delhi itinerary built without checking. Akshardham has ' +
      'security screening with restrictions on what can be carried in, and that takes longer for a ' +
      'group. Central Delhi roads around the government area close for events at short notice.',
    authority:
      'Timings, weekly closures and screening rules are set by the Archaeological Survey of India, ' +
      'Delhi Tourism and the individual trusts, and they vary by site — confirm for your date.',
  },
  jaipur: {
    dropReality:
      'Amer Fort is the constraint. The approach is a climb, and large vehicles park below while ' +
      'cars get further up; the final ascent is on foot or by jeep. The City Palace, Hawa Mahal and ' +
      'Jantar Mantar sit inside the walled city, where the streets are narrow and busy and a coach ' +
      'cannot reach the entrances — it parks outside the walls. Albert Hall and Jal Mahal are ' +
      'straightforward for any vehicle.',
    walkFromParking:
      'At Amer, from the lower parking to the fort entrance is a steep climb of fifteen to twenty-five ' +
      'minutes on foot. Inside the walled city, expect ten to twenty minutes from where a large ' +
      'vehicle can wait to the monument gate, through crowds and traffic.',
    crowdAndTiming:
      'Amer is best early, both for the light and because the climb is unpleasant in the middle of ' +
      'the day. Hawa Mahal faces east and photographs best in the morning. The walled city is ' +
      'congested from late morning onward, which affects a vehicle day far more than a walking one.',
    authority:
      'Timings and entry are set by the Rajasthan tourism and archaeology departments and the City ' +
      'Palace trust — confirm for your date.',
  },
  goldentriangle: {
    dropReality:
      'A Golden Triangle tour inherits the access reality of all three cities, and they are not the ' +
      'same. The practical consequence is that one vehicle serves three different parking situations ' +
      'over the trip, and the group walks furthest at Agra and climbs most at Amer.',
    walkFromParking:
      'Varies by city and by vehicle class. The longest single walk on the whole circuit is from ' +
      'coach parking to the Taj gate; the hardest is the Amer ascent.',
    crowdAndTiming:
      'The circuit has to be built around two fixed constraints: the Taj is closed on Fridays, and ' +
      'Delhi monuments have weekly closures that differ between them. Getting those wrong costs a ' +
      'whole day of a multi-day itinerary. Driving days between the cities are three to four hours ' +
      'Delhi–Agra on the expressway and four to five Agra–Jaipur.',
    authority:
      'Each city\'s sites are governed separately — the Archaeological Survey of India, the state ' +
      'tourism departments and the individual trusts. Confirm all three for your dates.',
  },
};

/**
 * The two logistics records for a tour, or nulls where none applies.
 *
 * The city block is only returned for group A — the city x vehicle grid. The
 * group B and C pages are guide-language landings whose `city` reads "India" or
 * a multi-city string, and attaching one city's monument access facts to those
 * produced "Access at India monuments" on ten pages with Delhi's parking
 * reality underneath it. Wrong, and caught only by reading what rendered.
 */
export function getTourLogistics(tour) {
  if (!tour) return null;
  const vehicle = byVehicle[tour.vehicleSlug] || null;
  const city = tour.group === 'A' ? byCity[tour.cityKey] || null : null;
  if (!vehicle && !city) return null;
  return { vehicle, city };
}

export default { byVehicle, byCity, getTourLogistics };
