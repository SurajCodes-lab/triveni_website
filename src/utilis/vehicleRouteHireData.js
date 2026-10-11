// src/utilis/vehicleRouteHireData.js - Vehicle-specific route hire data for 30 vehicle-route pages
// Pricing: perKm rate * max(distanceKm, 300) minimum billing
import { getDeterministicReviewCount } from '@/lib/seo/review-helpers';

const vehicles = {
  "innova": {
    name: "Toyota Innova",
    type: "MUV",
    seating: "7+1",
    luggage: "3 large bags",
    ac: true,
    fuelType: "Diesel",
    perKm: 14,
    idealFor: ["Family trips", "Hill stations"],
    features: ["Spacious", "Powerful engine", "Large boot"],
    image: "/images/car/innova_crysta.jpg",
  },
  "fortuner": {
    name: "Toyota Fortuner",
    type: "Premium SUV",
    seating: "7",
    luggage: "3 large bags",
    ac: true,
    fuelType: "Diesel",
    perKm: 22,
    idealFor: ["Luxury travel", "Mountain roads", "Leh-Ladakh"],
    features: ["4x4 capable", "Premium comfort", "Powerful"],
    image: "/images/car/premium_suv.jpg",
  },
  "ertiga": {
    name: "Maruti Ertiga",
    type: "MPV",
    seating: "7",
    luggage: "2 large bags",
    ac: true,
    fuelType: "Petrol/CNG",
    perKm: 13,
    idealFor: ["Budget family", "City tours"],
    features: ["Fuel efficient", "Comfortable", "Value for money"],
    image: "/images/car/ertiga.jpg",
  },
  "dzire": {
    name: "Maruti Dzire",
    type: "Sedan",
    seating: "4+1",
    luggage: "2 medium bags",
    ac: true,
    fuelType: "Petrol/CNG",
    perKm: 11,
    idealFor: ["Couples", "Solo", "Business"],
    features: ["Compact", "Fuel efficient", "City-friendly"],
    image: "/images/car/swift_dzire.jpg",
  },
  "innova-crysta": {
    name: "Innova Crysta",
    type: "Premium MUV",
    seating: "7+1",
    luggage: "3 large bags",
    ac: true,
    fuelType: "Diesel",
    perKm: 18,
    idealFor: ["Premium family", "Business"],
    features: ["Captain seats", "Premium interiors", "Smooth ride"],
    image: "/images/car/innova_crysta.jpg",
  },
  "traveller-12-seater": {
    name: "Force Traveller",
    type: "Tempo",
    seating: "12",
    luggage: "12 bags",
    ac: true,
    fuelType: "Diesel",
    perKm: 20,
    idealFor: ["Groups", "Pilgrimages", "Corporate"],
    features: ["Spacious", "Push-back seats", "Luggage carrier"],
    image: "/images/tempo/12_seater.jpg",
  },
};

// Route-specific data: distances, durations, highways, stops
const routeInfo = {
  "delhi-to-manali":     { origin: "Delhi",  destination: "Manali",     distanceKm: 530, duration: "12-13 hours", highway: "NH-44 & NH-21",                  stops: ["Karnal", "Chandigarh", "Bilaspur", "Mandi", "Kullu"] },
  "delhi-to-shimla":     { origin: "Delhi",  destination: "Shimla",     distanceKm: 350, duration: "7-8 hours",   highway: "NH-44 & NH-5",                   stops: ["Karnal", "Ambala", "Pinjore", "Solan"] },
  "delhi-to-haridwar":   { origin: "Delhi",  destination: "Haridwar",   distanceKm: 230, duration: "5-6 hours",   highway: "NH-334",                         stops: ["Meerut", "Muzaffarnagar", "Roorkee"] },
  "delhi-to-jaipur":     { origin: "Delhi",  destination: "Jaipur",     distanceKm: 280, duration: "4-5 hours",   highway: "NH-48 (Delhi-Jaipur Expressway)", stops: ["Gurgaon", "Neemrana", "Behror", "Shahpura"] },
  "delhi-to-agra":       { origin: "Delhi",  destination: "Agra",       distanceKm: 230, duration: "3-4 hours",   highway: "Yamuna Expressway",              stops: ["Greater Noida", "Mathura"] },
  "delhi-to-rishikesh":  { origin: "Delhi",  destination: "Rishikesh",  distanceKm: 245, duration: "5-6 hours",   highway: "NH-334 & NH-58",                 stops: ["Meerut", "Muzaffarnagar", "Roorkee", "Haridwar"] },
  "delhi-to-chandigarh": { origin: "Delhi",  destination: "Chandigarh", distanceKm: 250, duration: "4-5 hours",   highway: "NH-44",                          stops: ["Panipat", "Karnal", "Ambala"] },
  "delhi-to-nainital":   { origin: "Delhi",  destination: "Nainital",   distanceKm: 300, duration: "6-7 hours",   highway: "NH-9 & NH-109",                  stops: ["Moradabad", "Rampur", "Haldwani"] },
  "jaipur-to-udaipur":   { origin: "Jaipur", destination: "Udaipur",    distanceKm: 395, duration: "6-7 hours",   highway: "NH-48",                          stops: ["Ajmer", "Beawar", "Rajsamand"] },
  "jaipur-to-jodhpur":   { origin: "Jaipur", destination: "Jodhpur",    distanceKm: 335, duration: "5-6 hours",   highway: "NH-62",                          stops: ["Ajmer", "Beawar", "Pali"] },
  "delhi-to-leh":        { origin: "Delhi",  destination: "Leh",        distanceKm: 985, duration: "2 days",      highway: "NH-44, NH-21, NH-3",             stops: ["Chandigarh", "Manali", "Rohtang Pass", "Keylong", "Sarchu"] },
  "delhi-to-kashmir":    { origin: "Delhi",  destination: "Srinagar",   distanceKm: 810, duration: "18-20 hours", highway: "NH-44",                          stops: ["Ambala", "Ludhiana", "Jalandhar", "Udhampur", "Ramban"] },
  "delhi-to-mathura":    { origin: "Delhi",  destination: "Mathura",    distanceKm: 180, duration: "3-4 hours",   highway: "Yamuna Expressway",              stops: ["Greater Noida", "Jewar"] },
  "delhi-to-amritsar":    { origin: "Delhi",      destination: "Amritsar",   distanceKm: 450, duration: "7-8 hours",   highway: "NH-44",                          stops: ["Panipat", "Karnal", "Ambala", "Ludhiana", "Jalandhar"] },
  "delhi-to-dehradun":    { origin: "Delhi",      destination: "Dehradun",   distanceKm: 260, duration: "5-6 hours",   highway: "NH-44 & NH-7",                   stops: ["Meerut", "Muzaffarnagar", "Roorkee", "Haridwar"] },
  "delhi-to-mussoorie":   { origin: "Delhi",      destination: "Mussoorie",  distanceKm: 290, duration: "6-7 hours",   highway: "NH-44 & NH-7",                   stops: ["Meerut", "Roorkee", "Haridwar", "Dehradun"] },
  "delhi-to-dharamshala": { origin: "Delhi",      destination: "Dharamshala", distanceKm: 475, duration: "9-10 hours", highway: "NH-44 & NH-154",                 stops: ["Ambala", "Chandigarh", "Una", "Kangra"] },
  "delhi-to-katra":       { origin: "Delhi",      destination: "Katra",      distanceKm: 630, duration: "11-12 hours", highway: "NH-44",                          stops: ["Ambala", "Ludhiana", "Jalandhar", "Pathankot", "Jammu"] },
  "delhi-to-jodhpur":     { origin: "Delhi",      destination: "Jodhpur",    distanceKm: 600, duration: "10-11 hours", highway: "NH-48 & NH-62",                  stops: ["Jaipur", "Ajmer", "Beawar", "Pali"] },
  "delhi-to-udaipur":     { origin: "Delhi",      destination: "Udaipur",    distanceKm: 660, duration: "11-12 hours", highway: "NH-48",                          stops: ["Jaipur", "Ajmer", "Bhilwara", "Chittorgarh"] },
  "delhi-to-jaisalmer":   { origin: "Delhi",      destination: "Jaisalmer",  distanceKm: 790, duration: "13-14 hours", highway: "NH-48 & NH-11",                  stops: ["Jaipur", "Bikaner", "Pokhran"] },
  "delhi-to-varanasi":    { origin: "Delhi",      destination: "Varanasi",   distanceKm: 820, duration: "13-14 hours", highway: "NH-19 & Purvanchal Expressway",  stops: ["Aligarh", "Kanpur", "Prayagraj"] },
  "delhi-to-lucknow":     { origin: "Delhi",      destination: "Lucknow",    distanceKm: 555, duration: "8-9 hours",   highway: "Agra-Lucknow Expressway",        stops: ["Agra", "Etawah", "Kanpur"] },
  "delhi-to-ayodhya":     { origin: "Delhi",      destination: "Ayodhya",    distanceKm: 690, duration: "11-12 hours", highway: "Lucknow Expressway & NH-27",     stops: ["Agra", "Lucknow", "Barabanki"] },
  "delhi-to-corbett":     { origin: "Delhi",      destination: "Jim Corbett", distanceKm: 245, duration: "5-6 hours",  highway: "NH-9",                           stops: ["Hapur", "Moradabad", "Kashipur", "Ramnagar"] },
  "chandigarh-to-manali": { origin: "Chandigarh", destination: "Manali",     distanceKm: 310, duration: "8-9 hours",   highway: "NH-205 & NH-3",                  stops: ["Ropar", "Bilaspur", "Mandi", "Kullu"] },
  "chandigarh-to-shimla": { origin: "Chandigarh", destination: "Shimla",     distanceKm: 115, duration: "3-4 hours",   highway: "NH-5",                           stops: ["Kalka", "Parwanoo", "Solan"] },
  "jaipur-to-jaisalmer":  { origin: "Jaipur",     destination: "Jaisalmer",  distanceKm: 560, duration: "9-10 hours",  highway: "NH-11 & NH-15",                  stops: ["Kishangarh", "Nagaur", "Bikaner", "Pokhran"] },
};

// Inclusions & exclusions
const baseInclusions = ["AC vehicle", "Experienced driver", "All toll taxes", "State tax/permit", "Night halt charges", "Fuel charges"];
const baseExclusions = ["Parking fees at tourist spots", "Monument entry tickets", "Personal expenses", "Anything not mentioned in inclusions"];

function generateFaqs(vehicleName, vehicleType, origin, destination, distanceKm, fare, duration, perKm, seating) {
  const minKm = Math.max(distanceKm, 300);
  const roundTripFare = Math.round(fare * 2 * 0.9);
  return [
    {
      question: `How much does it cost to hire a ${vehicleName} from ${origin} to ${destination}?`,
      answer: `Hiring a ${vehicleName} from ${origin} to ${destination} costs approximately Rs ${fare.toLocaleString('en-IN')} for the ${distanceKm} km journey (minimum billing: ${minKm} km at Rs ${perKm}/km). This all-inclusive fare covers fuel, the driver, all tolls, and state permits. Call Triveni Cabs™ at 7668570551 for an exact, no-surge quote.`,
    },
    {
      question: `What is the per km rate for a ${vehicleName} on the ${origin} to ${destination} route?`,
      answer: `The ${vehicleName} is charged at Rs ${perKm}/km for the ${origin} to ${destination} route, with a minimum billing of ${minKm} km on one-way trips. There is no surge pricing — the rate is fixed at the time of booking and confirmed in writing on WhatsApp.`,
    },
    {
      question: `Is ${vehicleName} good for the ${origin} to ${destination} route?`,
      answer: `Yes, the ${vehicleName} is an excellent choice for ${origin} to ${destination}. ${vehicleType === 'Premium SUV' ? 'Its 4x4 capability and powerful engine handle mountain roads effortlessly.' : vehicleType === 'Sedan' ? 'Its fuel efficiency and compact size make highway travel comfortable and economical.' : vehicleType === 'Tempo' ? 'It comfortably seats 12 passengers with ample luggage space, perfect for group travel.' : 'Its spacious cabin and powerful engine make the ' + duration + ' journey smooth and comfortable for all passengers.'}`,
    },
    {
      question: `How long does it take to travel from ${origin} to ${destination} by ${vehicleName}?`,
      answer: `The ${origin} to ${destination} distance is approximately ${distanceKm} km and takes ${duration} by ${vehicleName}. We recommend starting early morning (5-6 AM) for the most comfortable journey with fewer traffic delays.`,
    },
    {
      question: `What is included in the ${vehicleName} hire from ${origin} to ${destination}?`,
      answer: `Your ${vehicleName} hire includes AC vehicle, experienced driver, fuel charges, toll taxes, state permits, and night halt charges. Parking at tourist spots and monument entry tickets are additional. All Triveni Cabs™ vehicles are GPS-tracked for your safety.`,
    },
    {
      question: `Can I book a one-way ${vehicleName} from ${origin} to ${destination}?`,
      answer: `Yes, Triveni Cabs™ offers both one-way and round-trip ${vehicleName} hire from ${origin} to ${destination}. One-way trips are charged at Rs ${perKm}/km with a minimum of 300 km billing. A round trip costs approximately Rs ${roundTripFare.toLocaleString('en-IN')} with a 10% return discount. Book via call at 7668570551 or WhatsApp for instant confirmation.`,
    },
    {
      question: `How many passengers can travel in a ${vehicleName} from ${origin} to ${destination}?`,
      answer: `The ${vehicleName} comfortably accommodates ${seating} passengers for the ${origin} to ${destination} trip. For larger groups, consider our Tempo Traveller options. All seats have individual AC vents and comfortable cushioning.`,
    },
    {
      question: `How do I book a ${vehicleName} from ${origin} to ${destination}?`,
      answer: `Booking takes under two minutes: call or WhatsApp Triveni Cabs™ at 7668570551 with your travel date and pickup address, confirm the Rs ${fare.toLocaleString('en-IN')} fare, and pay a small advance to lock the ${vehicleName}. You receive driver details before the trip — no app download or sign-up needed.`,
    },
    {
      question: `Is the driver and fuel included in the ${vehicleName} ${origin} to ${destination} fare?`,
      answer: `Yes. The Rs ${fare.toLocaleString('en-IN')} fare for ${origin} to ${destination} is all-inclusive of the experienced driver, fuel, all highway tolls, state taxes/permits, and driver night-halt allowance. You only pay extra for parking at attractions and monument entry tickets.`,
    },
    {
      question: `Can I make stops along the way from ${origin} to ${destination}?`,
      answer: `Absolutely. On the ${origin} to ${destination} route the ${vehicleName} can stop at your chosen rest stops, dhabas, and sightseeing spots at no extra per-stop charge on point-to-point trips. Just inform the driver in advance so the timing can be planned comfortably.`,
    },
  ];
}

// Fare breakdown rows (AEO/featured-snippet friendly)
function getFareBreakdown(perKm, distanceKm, fare) {
  const minKm = Math.max(distanceKm, 300);
  return [
    { label: 'Base distance billed', value: `${minKm} km (min)` },
    { label: 'Per km rate', value: `Rs ${perKm}/km` },
    { label: 'Fuel charges', value: 'Included' },
    { label: 'Tolls & state permits', value: 'Included' },
    { label: 'Driver allowance', value: 'Included' },
    { label: 'Total all-inclusive fare', value: `Rs ${fare.toLocaleString('en-IN')}` },
  ];
}

// How-to booking steps (HowTo schema + on-page)
function getBookingSteps(vehicleName, origin, destination, fare) {
  return [
    { name: 'Call or WhatsApp', text: `Contact Triveni Cabs™ at 7668570551 with your ${origin} to ${destination} travel date, pickup address, and passenger count.` },
    { name: 'Confirm the fare', text: `Get the all-inclusive ${vehicleName} fare of Rs ${fare.toLocaleString('en-IN')} confirmed in writing on WhatsApp — no surge, no hidden charges.` },
    { name: 'Pay a small advance', text: `Lock the ${vehicleName} for your date with a small advance via UPI, card, or bank transfer. The balance is paid at trip end.` },
    { name: 'Receive driver details', text: `Get the assigned driver's name, photo, and vehicle number before the trip, plus a live GPS tracking link for safety.` },
    { name: 'Travel comfortably', text: `Your ${vehicleName} arrives at your doorstep at the scheduled time for the ${origin} to ${destination} journey.` },
  ];
}

// Direct-answer lead sentence (speakable / AI answer)
function getDirectAnswer(vehicleName, vehicleType, origin, destination, distanceKm, duration, fare, perKm, seating) {
  return `Hiring a ${vehicleName} on rent from ${origin} to ${destination} costs Rs ${fare.toLocaleString('en-IN')} all-inclusive for the ${distanceKm} km, ${duration} journey. The fare covers an AC ${vehicleType.toLowerCase()} that seats ${seating}, an experienced driver, fuel, and all tolls at Rs ${perKm}/km. Book instantly with Triveni Cabs™ on 7668570551.`;
}

// Known slug sets for safe interlinking (verified against oneWayCabData.js + distanceData.js)
const ONE_WAY_SLUGS = new Set([
  "delhi-to-agra", "delhi-to-chandigarh", "delhi-to-haridwar", "delhi-to-jaipur",
  "delhi-to-manali", "delhi-to-nainital", "delhi-to-rishikesh", "delhi-to-shimla",
  "jaipur-to-jodhpur", "jaipur-to-udaipur",
]);
const DISTANCE_SLUGS = new Set([
  "delhi-to-agra", "delhi-to-chandigarh", "delhi-to-haridwar", "delhi-to-jaipur",
  "delhi-to-manali", "delhi-to-mathura", "delhi-to-nainital", "delhi-to-rishikesh",
  "delhi-to-shimla", "jaipur-to-jodhpur", "jaipur-to-udaipur",
]);
const CITY_HUB_SLUGS = new Set(["delhi", "agra", "jaipur", "haridwar", "chandigarh"]);

// Internal links for SEO interlinking. Only emits links whose targets exist.
function getInternalLinks(vehicleType, routeSlug, origin, destination) {
  const od = routeSlug; // routeSlug is already "origin-to-destination"
  const originSlug = origin.toLowerCase();
  const links = [];
  if (ONE_WAY_SLUGS.has(od)) {
    links.push({ label: `${origin} to ${destination} one-way cab fare`, href: `/one-way-cab/${od}` });
  }
  if (DISTANCE_SLUGS.has(od)) {
    links.push({ label: `${origin} to ${destination} distance & route map`, href: `/distance/${od}` });
  }
  if (CITY_HUB_SLUGS.has(originSlug)) {
    links.push({ label: `All ${origin} taxi & cab services`, href: `/${originSlug}` });
  }
  links.push({ label: 'Compare our full fleet & per-km rates', href: '/triveni-cabs-fleet' });
  return links;
}

function calcFare(perKm, distanceKm) {
  return perKm * Math.max(distanceKm, 300);
}

// Vehicle-route assignment definitions
// 15 North-India money routes added across all 5 main vehicle types (75 pages).
const NEW_HIRE_ROUTES = [
  "delhi-to-amritsar", "delhi-to-dehradun", "delhi-to-mussoorie", "delhi-to-dharamshala",
  "delhi-to-katra", "delhi-to-jodhpur", "delhi-to-udaipur", "delhi-to-jaisalmer",
  "delhi-to-varanasi", "delhi-to-lucknow", "delhi-to-ayodhya", "delhi-to-corbett",
  "chandigarh-to-manali", "chandigarh-to-shimla", "jaipur-to-jaisalmer",
];

const vehicleRouteDefs = {
  "innova":               ["delhi-to-manali", "delhi-to-shimla", "delhi-to-haridwar", "delhi-to-jaipur", "delhi-to-agra", "delhi-to-rishikesh", "delhi-to-chandigarh", "delhi-to-nainital", "jaipur-to-udaipur", "jaipur-to-jodhpur", ...NEW_HIRE_ROUTES],
  "fortuner":             ["delhi-to-manali", "delhi-to-shimla", "delhi-to-leh", "delhi-to-kashmir", "delhi-to-rishikesh", ...NEW_HIRE_ROUTES],
  "ertiga":               ["delhi-to-manali", "delhi-to-jaipur", "delhi-to-agra", "delhi-to-shimla", "delhi-to-haridwar", ...NEW_HIRE_ROUTES],
  "dzire":                ["delhi-to-agra", "delhi-to-jaipur", "delhi-to-chandigarh", "delhi-to-haridwar", "delhi-to-mathura", ...NEW_HIRE_ROUTES],
  "innova-crysta":        ["delhi-to-manali", "delhi-to-shimla", "delhi-to-jaipur", ...NEW_HIRE_ROUTES],
  "traveller-12-seater":  ["delhi-to-manali", "delhi-to-haridwar"],
};

// Slug mapping: vehicleType -> URL folder name
function getVehicleSlug(vehicleType) {
  if (vehicleType === "innova-crysta") return "innova-crysta-hire";
  if (vehicleType === "traveller-12-seater") return "traveller-12-seater";
  return `${vehicleType}-hire`;
}

// Related vehicle routes builder
function getRelatedForRoute(vehicleType, routeSlug) {
  const related = [];
  // Same vehicle, different routes
  const sameVehicleRoutes = vehicleRouteDefs[vehicleType] || [];
  for (const rs of sameVehicleRoutes) {
    if (rs !== routeSlug && related.length < 3) {
      const r = routeInfo[rs];
      if (r) {
        related.push({
          vehicleType,
          vehicleSlug: getVehicleSlug(vehicleType),
          routeSlug: rs,
          label: `${vehicles[vehicleType].name}: ${r.origin} to ${r.destination}`,
        });
      }
    }
  }
  // Same route, different vehicles
  for (const [vt, routes] of Object.entries(vehicleRouteDefs)) {
    if (vt !== vehicleType && routes.includes(routeSlug) && related.length < 6) {
      const r = routeInfo[routeSlug];
      if (r) {
        related.push({
          vehicleType: vt,
          vehicleSlug: getVehicleSlug(vt),
          routeSlug,
          label: `${vehicles[vt].name}: ${r.origin} to ${r.destination}`,
        });
      }
    }
  }
  return related;
}

// Why this vehicle for this route
function getWhyVehicle(vehicleType, info) {
  const dist = info.distanceKm;
  const dest = info.destination;
  const isMountain = ["Manali", "Shimla", "Leh", "Srinagar", "Rishikesh", "Nainital"].includes(dest);

  const reasons = {
    "innova": [
      { title: "Spacious Cabin", desc: `The Innova offers ample legroom and headspace for a comfortable ${dist} km journey. All 7 passengers travel in comfort even on long drives.` },
      { title: "Powerful Engine", desc: `With a robust diesel engine, the Innova handles ${isMountain ? 'steep mountain gradients and hairpin bends' : 'highway cruising'} effortlessly, maintaining passenger comfort throughout.` },
      { title: "Large Boot Space", desc: `Fits 3 large suitcases easily, making it ideal for family trips to ${dest} where you need to carry extra luggage and travel essentials.` },
      { title: "Proven Reliability", desc: `Toyota Innova is India most trusted MUV for long-distance travel. Our well-maintained fleet ensures zero breakdowns on your ${dest} trip.` },
    ],
    "fortuner": [
      { title: "4x4 Mountain Capability", desc: `The Fortuner 4-wheel drive system conquers ${isMountain ? 'challenging mountain passes and snowy roads' : 'any terrain'} on the way to ${dest} with ease.` },
      { title: "Premium Luxury", desc: `Leather seats, premium cabin, and superior suspension turn the ${dist} km journey into a luxury experience befitting discerning travelers.` },
      { title: "Superior Ground Clearance", desc: `At 225mm, the Fortuner glides over rough patches and ${isMountain ? 'mountain road imperfections' : 'highway construction zones'} that other vehicles struggle with.` },
      { title: "Powerful Performance", desc: `The 2.8L diesel engine produces 204 PS, making ${isMountain ? 'high-altitude climbs and overtaking on mountain roads' : 'highway overtakes'} effortless and safe.` },
    ],
    "ertiga": [
      { title: "Best Value for Money", desc: `At Rs 15/km, the Ertiga offers the most affordable 7-seater option for ${dest}. Budget-friendly without compromising on comfort.` },
      { title: "Fuel Efficient", desc: `With Petrol/CNG options, the Ertiga delivers excellent mileage on the ${dist} km route, keeping your overall trip cost low.` },
      { title: "Comfortable Seating", desc: `All 7 seats have adequate legroom for the ${info.duration} journey. Perfect for families who want comfort at an affordable price.` },
      { title: "City and Highway Ready", desc: `The Ertiga compact dimensions and smooth handling make it equally adept at navigating ${dest} city traffic and cruising on the highway.` },
    ],
    "dzire": [
      { title: "Most Economical", desc: `At Rs 11/km, the Dzire is the most budget-friendly option for the ${dest} trip. Ideal for couples and small groups watching their budget.` },
      { title: "Highway Comfort", desc: `Despite its compact size, the Dzire offers a smooth ride on expressways and highways, making the ${info.duration} journey comfortable.` },
      { title: "Easy Maneuverability", desc: `The sedan compact footprint makes city navigation in ${dest} effortless, from narrow lanes to crowded tourist areas.` },
      { title: "Fuel Efficiency Champion", desc: `The Dzire excellent mileage on both Petrol and CNG keeps your ${dist} km trip cost-effective while maintaining AC comfort throughout.` },
    ],
    "innova-crysta": [
      { title: "Captain Seat Luxury", desc: `The Crysta second-row captain seats with armrests transform the ${dist} km journey into a business-class experience.` },
      { title: "Premium Interiors", desc: `Leather upholstery, mood lighting, and superior noise insulation ensure a premium travel experience all the way to ${dest}.` },
      { title: "Smoother Ride Quality", desc: `Upgraded suspension and engine refinement over the standard Innova make the ${info.duration} journey significantly smoother and quieter.` },
      { title: "Corporate and VIP Ready", desc: `The Crysta premium presence and comfort make it the preferred choice for business travel and VIP transfers to ${dest}.` },
    ],
    "traveller-12-seater": [
      { title: "Group Travel Made Easy", desc: `Seat 12 passengers together for the ${dest} trip. No need to split into multiple cars and lose coordination.` },
      { title: "Ample Luggage Space", desc: `Roof carrier and under-seat storage accommodate bags for all 12 passengers, even for extended trips to ${dest}.` },
      { title: "Push-Back Reclining Seats", desc: `Individual push-back seats allow passengers to recline and rest during the ${info.duration} journey to ${dest}.` },
      { title: "Cost Per Person Savings", desc: `Split among 12 travelers, the per-person cost is significantly lower than hiring multiple smaller vehicles for the ${dist} km trip.` },
    ],
  };

  return reasons[vehicleType] || reasons["innova"];
}

// ═══════════════════════════════════════════
// BUILD ALL VEHICLE-ROUTE OBJECTS
// ═══════════════════════════════════════════
const vehicleRouteMap = {};

for (const [vehicleType, routeSlugs] of Object.entries(vehicleRouteDefs)) {
  const vehicle = vehicles[vehicleType];
  const vehicleSlug = getVehicleSlug(vehicleType);

  for (const routeSlug of routeSlugs) {
    const info = routeInfo[routeSlug];
    if (!info) continue;
    const fare = calcFare(vehicle.perKm, info.distanceKm);

    const key = `${vehicleType}::${routeSlug}`;
    vehicleRouteMap[key] = {
      vehicleType,
      vehicleSlug,
      routeSlug,
      origin: info.origin,
      destination: info.destination,
      distanceKm: info.distanceKm,
      duration: info.duration,
      highway: info.highway,
      stops: info.stops,
      fare,
      fareFormatted: `Rs ${fare.toLocaleString('en-IN')}`,
      perKm: vehicle.perKm,
      inclusions: baseInclusions,
      exclusions: baseExclusions,
      faqs: generateFaqs(vehicle.name, vehicle.type, info.origin, info.destination, info.distanceKm, fare, info.duration, vehicle.perKm, vehicle.seating),
      relatedVehicleRoutes: getRelatedForRoute(vehicleType, routeSlug),
      whyThisVehicle: getWhyVehicle(vehicleType, info),
      directAnswer: getDirectAnswer(vehicle.name, vehicle.type, info.origin, info.destination, info.distanceKm, info.duration, fare, vehicle.perKm, vehicle.seating),
      fareBreakdown: getFareBreakdown(vehicle.perKm, info.distanceKm, fare),
      bookingSteps: getBookingSteps(vehicle.name, info.origin, info.destination, fare),
      internalLinks: getInternalLinks(vehicleType, routeSlug, info.origin, info.destination),
      roundTripFare: Math.round(fare * 2 * 0.9),
      reviewCount: getDeterministicReviewCount(`${vehicleType}-${routeSlug}`),
    };
  }
}

// ═══════════════════════════════════════════
// EXPORTED FUNCTIONS
// ═══════════════════════════════════════════

/** Get a specific vehicle-route combination */
export function getVehicleHireRoute(vehicleType, routeSlug) {
  return vehicleRouteMap[`${vehicleType}::${routeSlug}`] || null;
}

/** Get all routes for a specific vehicle type */
export function getAllVehicleHireRoutes(vehicleType) {
  return Object.values(vehicleRouteMap).filter((r) => r.vehicleType === vehicleType);
}

/** Get vehicle specs */
export function getVehicleSpec(vehicleType) {
  return vehicles[vehicleType] || null;
}

/** Get all vehicle type keys */
export function getAllVehicleTypes() {
  return Object.keys(vehicles);
}

/** Get all route entries across all vehicle types */
export function getAllVehicleRouteEntries() {
  return Object.values(vehicleRouteMap);
}
