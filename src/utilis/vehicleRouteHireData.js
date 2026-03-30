// src/utilis/vehicleRouteHireData.js - Vehicle-specific route hire data for 30 vehicle-route pages
// Pricing: perKm rate * max(distanceKm, 300) minimum billing

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
};

// Inclusions & exclusions
const baseInclusions = ["AC vehicle", "Experienced driver", "All toll taxes", "State tax/permit", "Night halt charges", "Fuel charges"];
const baseExclusions = ["Parking fees at tourist spots", "Monument entry tickets", "Personal expenses", "Anything not mentioned in inclusions"];

function generateFaqs(vehicleName, vehicleType, origin, destination, distanceKm, fare, duration, perKm, seating) {
  const minKm = Math.max(distanceKm, 300);
  return [
    {
      question: `How much does it cost to hire a ${vehicleName} from ${origin} to ${destination}?`,
      answer: `Hiring a ${vehicleName} from ${origin} to ${destination} costs approximately Rs ${fare.toLocaleString('en-IN')} for the ${distanceKm} km journey (minimum billing: ${minKm} km at Rs ${perKm}/km). This includes fuel, driver charges, and all tolls. Call Triveni Cabs at 7668570551 for exact fare.`,
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
      answer: `Your ${vehicleName} hire includes AC vehicle, experienced driver, fuel charges, toll taxes, state permits, and night halt charges. Parking at tourist spots and monument entry tickets are additional. All Triveni Cabs vehicles are GPS-tracked for your safety.`,
    },
    {
      question: `Can I book a one-way ${vehicleName} from ${origin} to ${destination}?`,
      answer: `Yes, Triveni Cabs offers both one-way and round-trip ${vehicleName} hire from ${origin} to ${destination}. One-way trips are charged at Rs ${perKm}/km with a minimum of 300 km billing. Book via call at 7668570551 or WhatsApp for instant confirmation.`,
    },
    {
      question: `How many passengers can travel in a ${vehicleName} from ${origin} to ${destination}?`,
      answer: `The ${vehicleName} comfortably accommodates ${seating} passengers for the ${origin} to ${destination} trip. For larger groups, consider our Tempo Traveller options. All seats have individual AC vents and comfortable cushioning.`,
    },
  ];
}

function calcFare(perKm, distanceKm) {
  return perKm * Math.max(distanceKm, 300);
}

// Vehicle-route assignment definitions
const vehicleRouteDefs = {
  "innova":               ["delhi-to-manali", "delhi-to-shimla", "delhi-to-haridwar", "delhi-to-jaipur", "delhi-to-agra", "delhi-to-rishikesh", "delhi-to-chandigarh", "delhi-to-nainital", "jaipur-to-udaipur", "jaipur-to-jodhpur"],
  "fortuner":             ["delhi-to-manali", "delhi-to-shimla", "delhi-to-leh", "delhi-to-kashmir", "delhi-to-rishikesh"],
  "ertiga":               ["delhi-to-manali", "delhi-to-jaipur", "delhi-to-agra", "delhi-to-shimla", "delhi-to-haridwar"],
  "dzire":                ["delhi-to-agra", "delhi-to-jaipur", "delhi-to-chandigarh", "delhi-to-haridwar", "delhi-to-mathura"],
  "innova-crysta":        ["delhi-to-manali", "delhi-to-shimla", "delhi-to-jaipur"],
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
      { title: "Best Value for Money", desc: `At Rs 13/km, the Ertiga offers the most affordable 7-seater option for ${dest}. Budget-friendly without compromising on comfort.` },
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
      inclusions: baseInclusions,
      exclusions: baseExclusions,
      faqs: generateFaqs(vehicle.name, vehicle.type, info.origin, info.destination, info.distanceKm, fare, info.duration, vehicle.perKm, vehicle.seating),
      relatedVehicleRoutes: getRelatedForRoute(vehicleType, routeSlug),
      whyThisVehicle: getWhyVehicle(vehicleType, info),
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
