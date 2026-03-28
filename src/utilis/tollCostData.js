// src/utilis/tollCostData.js - Complete data for 25 toll cost guide pages
// Realistic toll plaza data for major North India routes (2026 rates)
// Pricing: Sedan ₹11/km, SUV ₹14/km (min 300km billing)

function calcCabFare(distanceKm) {
  const billableKm = Math.max(distanceKm, 300);
  return billableKm * 11;
}

function generateTollFaqs(origin, dest, totalTollCar, totalTollSuv, totalDistance, plazaCount, fastagInfo) {
  const sedanFare = calcCabFare(totalDistance);
  return [
    { question: `What is the total toll cost from ${origin} to ${dest} by car?`, answer: `The total toll cost from ${origin} to ${dest} is approximately ₹${totalTollCar} for a car/sedan and ₹${totalTollSuv} for an SUV. There are ${plazaCount} toll plaza(s) on this route. FASTag users get a small discount at all plazas.` },
    { question: `How many toll plazas are there on the ${origin} to ${dest} route?`, answer: `There are ${plazaCount} toll plaza(s) on the ${origin} to ${dest} route covering ${totalDistance} km. All toll plazas accept FASTag for contactless payment, reducing wait time significantly.` },
    { question: `Does FASTag work on the ${origin} to ${dest} route?`, answer: `Yes, all ${plazaCount} toll plazas on the ${origin} to ${dest} route accept FASTag. ${fastagInfo} FASTag lanes are faster and avoid cash queues.` },
    { question: `Are toll charges included in Triveni Cabs fare from ${origin} to ${dest}?`, answer: `Toll charges are extra and paid at actual during the journey. The cab fare from ${origin} to ${dest} starts at ₹${sedanFare.toLocaleString('en-IN')} (sedan). Toll of approximately ₹${totalTollCar} is paid separately. Our driver handles all toll payments.` },
    { question: `What is the total trip cost from ${origin} to ${dest} including toll?`, answer: `The total trip cost from ${origin} to ${dest} includes cab fare (from ₹${sedanFare.toLocaleString('en-IN')} for sedan) + toll charges (₹${totalTollCar} approx.) + fuel if self-driving. When booking with Triveni Cabs, you only pay cab fare + actual toll. No hidden charges.` },
    { question: `Can I avoid toll plazas on the ${origin} to ${dest} route?`, answer: `While alternate routes may bypass some tolls, they usually add 30-60+ minutes to travel time and pass through congested areas. The toll route via the main highway is recommended for comfort, safety, and faster travel. Our drivers always take the best route.` },
  ];
}

function createTollRoute({ slug, origin, destination, totalDistance, tollPlazas, fastagInfo, tips, estimatedFuel, relatedRoutes }) {
  const totalTollCar = tollPlazas.reduce((sum, t) => sum + t.carCost, 0);
  const totalTollSuv = tollPlazas.reduce((sum, t) => sum + t.suvCost, 0);
  const cabFare = calcCabFare(totalDistance);

  return {
    slug,
    origin,
    destination,
    totalDistance,
    tollPlazas,
    totalTollCost: { car: totalTollCar, suv: totalTollSuv },
    fastagInfo,
    tips,
    estimatedFuel,
    cabFare,
    faqs: generateTollFaqs(origin, destination, totalTollCar, totalTollSuv, totalDistance, tollPlazas.length, fastagInfo),
    relatedRoutes: relatedRoutes || [],
  };
}

export const tollCostRoutes = {

  // ═══════════════════════════════════════════
  // 1. DELHI TO AGRA
  // ═══════════════════════════════════════════
  "delhi-to-agra": createTollRoute({
    slug: "delhi-to-agra", origin: "Delhi", destination: "Agra", totalDistance: 230,
    tollPlazas: [
      { name: "Jewar Toll Plaza", location: 60, carCost: 155, suvCost: 250, commercialCost: 535, acceptsFASTag: true },
      { name: "Mathura Toll Plaza", location: 160, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
    ],
    fastagInfo: "Yamuna Expressway is 100% FASTag-enabled. Both Jewar and Mathura toll plazas have dedicated FASTag lanes for quick passage.",
    tips: [
      "Carry FASTag for seamless toll payment on Yamuna Expressway — cash lanes have longer queues.",
      "Start early (5 AM) to avoid toll plaza rush and reach Agra by sunrise for Taj Mahal visit.",
      "Return toll is the same amount — budget ₹570 total for round-trip car toll charges.",
    ],
    estimatedFuel: { petrol: 1380, diesel: 1035 },
    relatedRoutes: ["agra-to-delhi", "delhi-to-mathura", "delhi-to-jaipur", "agra-to-jaipur"],
  }),

  // ═══════════════════════════════════════════
  // 2. DELHI TO JAIPUR
  // ═══════════════════════════════════════════
  "delhi-to-jaipur": createTollRoute({
    slug: "delhi-to-jaipur", origin: "Delhi", destination: "Jaipur", totalDistance: 280,
    tollPlazas: [
      { name: "Kherki Daula Toll Plaza", location: 30, carCost: 130, suvCost: 210, commercialCost: 445, acceptsFASTag: true },
      { name: "Manesar Toll Plaza", location: 55, carCost: 85, suvCost: 140, commercialCost: 295, acceptsFASTag: true },
      { name: "Shahjahanpur Toll Plaza", location: 160, carCost: 185, suvCost: 295, commercialCost: 630, acceptsFASTag: true },
    ],
    fastagInfo: "NH-48 Delhi-Jaipur Expressway is fully FASTag-compliant. All three toll plazas have multiple FASTag lanes for smooth transit.",
    tips: [
      "Kherki Daula toll can be congested during morning rush — FASTag saves 15-20 minutes here.",
      "Shahjahanpur is the costliest toll on this route at ₹185 for cars — keep FASTag balance topped up.",
      "Stop at Neemrana Fort (120 km) for a heritage break between the first two tolls and Shahjahanpur.",
    ],
    estimatedFuel: { petrol: 1680, diesel: 1260 },
    relatedRoutes: ["delhi-to-agra", "jaipur-to-udaipur", "jaipur-to-jodhpur", "agra-to-jaipur"],
  }),

  // ═══════════════════════════════════════════
  // 3. DELHI TO CHANDIGARH
  // ═══════════════════════════════════════════
  "delhi-to-chandigarh": createTollRoute({
    slug: "delhi-to-chandigarh", origin: "Delhi", destination: "Chandigarh", totalDistance: 250,
    tollPlazas: [
      { name: "Panipat Toll Plaza", location: 90, carCost: 165, suvCost: 265, commercialCost: 565, acceptsFASTag: true },
      { name: "Karnal Toll Plaza", location: 130, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Ambala Toll Plaza", location: 200, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
    ],
    fastagInfo: "NH-44 (GT Road) from Delhi to Chandigarh is fully FASTag-enabled. All three plazas have dedicated electronic toll collection lanes.",
    tips: [
      "Panipat toll area has food stalls — good for a quick breakfast stop if you started early from Delhi.",
      "Avoid Friday evening travel as weekend tourist traffic to Chandigarh/Shimla creates toll plaza congestion.",
      "Chandigarh is a Union Territory — no state entry tax. Only highway toll applies.",
    ],
    estimatedFuel: { petrol: 1500, diesel: 1125 },
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "chandigarh-to-manali", "chandigarh-to-shimla"],
  }),

  // ═══════════════════════════════════════════
  // 4. DELHI TO HARIDWAR
  // ═══════════════════════════════════════════
  "delhi-to-haridwar": createTollRoute({
    slug: "delhi-to-haridwar", origin: "Delhi", destination: "Haridwar", totalDistance: 230,
    tollPlazas: [
      { name: "Delhi-Meerut Expressway Toll", location: 35, carCost: 120, suvCost: 195, commercialCost: 415, acceptsFASTag: true },
      { name: "Muzaffarnagar Toll Plaza", location: 130, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Roorkee Toll Plaza", location: 180, carCost: 65, suvCost: 105, commercialCost: 225, acceptsFASTag: true },
    ],
    fastagInfo: "Delhi-Meerut Expressway and NH-334 are FASTag-enabled. The Roorkee toll is a smaller plaza with quick processing times.",
    tips: [
      "Leave Delhi by 2 PM to reach Haridwar in time for the famous Ganga Aarti at Har Ki Pauri (6-7 PM).",
      "The Delhi-Meerut Expressway toll is automated — FASTag is mandatory; no cash lanes available.",
      "Budget ₹560 round-trip toll for car. Uttarakhand does not charge separate state entry tax for cars.",
    ],
    estimatedFuel: { petrol: 1380, diesel: 1035 },
    relatedRoutes: ["delhi-to-rishikesh", "delhi-to-dehradun", "delhi-to-mussoorie"],
  }),

  // ═══════════════════════════════════════════
  // 5. DELHI TO MANALI
  // ═══════════════════════════════════════════
  "delhi-to-manali": createTollRoute({
    slug: "delhi-to-manali", origin: "Delhi", destination: "Manali", totalDistance: 530,
    tollPlazas: [
      { name: "Panipat Toll Plaza", location: 90, carCost: 165, suvCost: 265, commercialCost: 565, acceptsFASTag: true },
      { name: "Karnal Toll Plaza", location: 130, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Ambala Toll Plaza", location: 200, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Bilaspur Toll Plaza", location: 340, carCost: 65, suvCost: 105, commercialCost: 225, acceptsFASTag: true },
    ],
    fastagInfo: "All toll plazas on NH-44 and NH-21 accept FASTag. After Bilaspur, the route enters mountain roads with no further tolls.",
    tips: [
      "Total toll is ₹455 for car one-way. No tolls after Bilaspur — the mountain stretch is toll-free.",
      "Stop at Murthal (40 km from Delhi) for famous paranthas before hitting the first toll at Panipat.",
      "Carry warm clothes even in summer. Manali evenings are cool, and Rohtang can be freezing.",
    ],
    estimatedFuel: { petrol: 3180, diesel: 2385 },
    relatedRoutes: ["delhi-to-shimla", "delhi-to-chandigarh", "chandigarh-to-manali"],
  }),

  // ═══════════════════════════════════════════
  // 6. DELHI TO SHIMLA
  // ═══════════════════════════════════════════
  "delhi-to-shimla": createTollRoute({
    slug: "delhi-to-shimla", origin: "Delhi", destination: "Shimla", totalDistance: 350,
    tollPlazas: [
      { name: "Panipat Toll Plaza", location: 90, carCost: 165, suvCost: 265, commercialCost: 565, acceptsFASTag: true },
      { name: "Karnal Toll Plaza", location: 130, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Ambala Toll Plaza", location: 200, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
    ],
    fastagInfo: "NH-44 tolls are fully FASTag-enabled. After Pinjore/Kalka, mountain roads to Shimla have no toll plazas.",
    tips: [
      "Toll ends at Ambala — the Kalka-Shimla mountain stretch (90 km) is toll-free but winding.",
      "Friday evening traffic from Delhi means longer toll waits. Leave Saturday early morning instead.",
      "Himachal Pradesh charges a Green Tax (₹50-100) at the state border for vehicles entering the state.",
    ],
    estimatedFuel: { petrol: 2100, diesel: 1575 },
    relatedRoutes: ["delhi-to-chandigarh", "delhi-to-manali", "chandigarh-to-shimla"],
  }),

  // ═══════════════════════════════════════════
  // 7. DELHI TO LUCKNOW
  // ═══════════════════════════════════════════
  "delhi-to-lucknow": createTollRoute({
    slug: "delhi-to-lucknow", origin: "Delhi", destination: "Lucknow", totalDistance: 550,
    tollPlazas: [
      { name: "Jewar Toll Plaza (Yamuna Exp)", location: 60, carCost: 155, suvCost: 250, commercialCost: 535, acceptsFASTag: true },
      { name: "Mathura Toll Plaza (Yamuna Exp)", location: 160, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Agra-Lucknow Exp Toll (Firozabad)", location: 280, carCost: 195, suvCost: 315, commercialCost: 670, acceptsFASTag: true },
      { name: "Agra-Lucknow Exp Toll (Kannauj)", location: 420, carCost: 165, suvCost: 265, commercialCost: 565, acceptsFASTag: true },
    ],
    fastagInfo: "Both Yamuna Expressway and Agra-Lucknow Expressway are 100% FASTag-enabled. Carry sufficient FASTag balance for 4 toll plazas.",
    tips: [
      "This route uses two expressways — Yamuna Expressway + Agra-Lucknow Expressway. Both are toll roads.",
      "Total toll of ₹645 for car one-way. Budget ₹1,290 for round trip toll charges.",
      "The Agra-Lucknow Expressway has rest stops every 50 km with food courts and clean washrooms.",
    ],
    estimatedFuel: { petrol: 3300, diesel: 2475 },
    relatedRoutes: ["delhi-to-varanasi", "delhi-to-agra", "lucknow-to-varanasi", "lucknow-to-ayodhya"],
  }),

  // ═══════════════════════════════════════════
  // 8. DELHI TO AMRITSAR
  // ═══════════════════════════════════════════
  "delhi-to-amritsar": createTollRoute({
    slug: "delhi-to-amritsar", origin: "Delhi", destination: "Amritsar", totalDistance: 450,
    tollPlazas: [
      { name: "Panipat Toll Plaza", location: 90, carCost: 165, suvCost: 265, commercialCost: 565, acceptsFASTag: true },
      { name: "Karnal Toll Plaza", location: 130, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Ambala Toll Plaza", location: 200, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Ludhiana Toll Plaza", location: 310, carCost: 110, suvCost: 175, commercialCost: 375, acceptsFASTag: true },
      { name: "Jalandhar Toll Plaza", location: 370, carCost: 85, suvCost: 140, commercialCost: 295, acceptsFASTag: true },
    ],
    fastagInfo: "NH-44 (GT Road) is fully FASTag-enabled all the way to Amritsar. Five toll plazas require adequate FASTag balance.",
    tips: [
      "Five toll plazas totaling ₹585 for car. Ensure FASTag has at least ₹700 balance before starting.",
      "Ludhiana and Jalandhar toll areas can be congested — plan for 10-15 minute delays at peak hours.",
      "Visit Golden Temple early morning for the most peaceful experience. Don't miss langar (free community meal).",
    ],
    estimatedFuel: { petrol: 2700, diesel: 2025 },
    relatedRoutes: ["delhi-to-chandigarh", "delhi-to-manali"],
  }),

  // ═══════════════════════════════════════════
  // 9. DELHI TO DEHRADUN
  // ═══════════════════════════════════════════
  "delhi-to-dehradun": createTollRoute({
    slug: "delhi-to-dehradun", origin: "Delhi", destination: "Dehradun", totalDistance: 255,
    tollPlazas: [
      { name: "Delhi-Meerut Expressway Toll", location: 35, carCost: 120, suvCost: 195, commercialCost: 415, acceptsFASTag: true },
      { name: "Muzaffarnagar Toll Plaza", location: 130, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
    ],
    fastagInfo: "Delhi-Meerut Expressway is FASTag-only (no cash lanes). Muzaffarnagar plaza accepts both FASTag and cash.",
    tips: [
      "Only 2 toll plazas totaling ₹215 for car — one of the most affordable toll routes from Delhi.",
      "Delhi-Meerut Expressway toll is FASTag-mandatory. Ensure your tag is active before entering.",
      "Dehradun is the gateway to Mussoorie (35 km uphill). No additional toll for the Mussoorie stretch.",
    ],
    estimatedFuel: { petrol: 1530, diesel: 1148 },
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-haridwar", "delhi-to-rishikesh"],
  }),

  // ═══════════════════════════════════════════
  // 10. DELHI TO VARANASI
  // ═══════════════════════════════════════════
  "delhi-to-varanasi": createTollRoute({
    slug: "delhi-to-varanasi", origin: "Delhi", destination: "Varanasi", totalDistance: 820,
    tollPlazas: [
      { name: "Jewar Toll Plaza (Yamuna Exp)", location: 60, carCost: 155, suvCost: 250, commercialCost: 535, acceptsFASTag: true },
      { name: "Mathura Toll Plaza (Yamuna Exp)", location: 160, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Agra-Lucknow Exp Toll (Firozabad)", location: 280, carCost: 195, suvCost: 315, commercialCost: 670, acceptsFASTag: true },
      { name: "Agra-Lucknow Exp Toll (Kannauj)", location: 420, carCost: 165, suvCost: 265, commercialCost: 565, acceptsFASTag: true },
      { name: "Lucknow-Sultanpur Toll", location: 580, carCost: 110, suvCost: 175, commercialCost: 375, acceptsFASTag: true },
      { name: "Jaunpur Toll Plaza", location: 720, carCost: 75, suvCost: 120, commercialCost: 255, acceptsFASTag: true },
    ],
    fastagInfo: "Multiple expressways and NH sections — all 6 toll plazas are FASTag-enabled. Load at least ₹1,000 on FASTag before starting.",
    tips: [
      "Six toll plazas totaling ₹830 for car. This is a long route — consider an overnight halt in Lucknow.",
      "Yamuna + Agra-Lucknow Expressway covers the first 550 km smoothly. After Lucknow, it's national highway.",
      "Book a cab with Triveni — driver handles all tolls. You just pay the actual toll amount at the end.",
    ],
    estimatedFuel: { petrol: 4920, diesel: 3690 },
    relatedRoutes: ["delhi-to-lucknow", "lucknow-to-varanasi", "delhi-to-agra"],
  }),

  // ═══════════════════════════════════════════
  // 11. DELHI TO MEERUT
  // ═══════════════════════════════════════════
  "delhi-to-meerut": createTollRoute({
    slug: "delhi-to-meerut", origin: "Delhi", destination: "Meerut", totalDistance: 70,
    tollPlazas: [
      { name: "Delhi-Meerut Expressway Toll", location: 35, carCost: 120, suvCost: 195, commercialCost: 415, acceptsFASTag: true },
    ],
    fastagInfo: "Delhi-Meerut Expressway has a single FASTag-only toll plaza. No cash lanes — FASTag is mandatory.",
    tips: [
      "Only one toll plaza at ₹120 for car. The 14-lane Delhi-Meerut Expressway makes this a quick 45-minute drive.",
      "FASTag is mandatory — there are no cash lanes on this expressway. Get a FASTag beforehand.",
      "Meerut is also the starting point for trips to Haridwar, Rishikesh, and Dehradun.",
    ],
    estimatedFuel: { petrol: 420, diesel: 315 },
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-dehradun", "delhi-to-rishikesh"],
  }),

  // ═══════════════════════════════════════════
  // 12. JAIPUR TO UDAIPUR
  // ═══════════════════════════════════════════
  "jaipur-to-udaipur": createTollRoute({
    slug: "jaipur-to-udaipur", origin: "Jaipur", destination: "Udaipur", totalDistance: 395,
    tollPlazas: [
      { name: "Ajmer Toll Plaza", location: 135, carCost: 145, suvCost: 235, commercialCost: 500, acceptsFASTag: true },
      { name: "Beawar Toll Plaza", location: 190, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Rajsamand Toll Plaza", location: 310, carCost: 110, suvCost: 175, commercialCost: 375, acceptsFASTag: true },
    ],
    fastagInfo: "NH-48 from Jaipur to Udaipur has three toll plazas, all FASTag-enabled. The Rajsamand stretch offers beautiful Aravalli views.",
    tips: [
      "Three tolls totaling ₹350 for car. The Aravalli mountain stretch after Beawar is scenic but winding.",
      "Stop at Ajmer (135 km) for Ajmer Sharif Dargah visit and Pushkar (149 km) for Brahma Temple.",
      "Udaipur's City Palace and Lake Pichola are best visited at sunset. Plan to arrive by 4 PM.",
    ],
    estimatedFuel: { petrol: 2370, diesel: 1778 },
    relatedRoutes: ["jaipur-to-jodhpur", "jaipur-to-ajmer", "delhi-to-jaipur"],
  }),

  // ═══════════════════════════════════════════
  // 13. JAIPUR TO JODHPUR
  // ═══════════════════════════════════════════
  "jaipur-to-jodhpur": createTollRoute({
    slug: "jaipur-to-jodhpur", origin: "Jaipur", destination: "Jodhpur", totalDistance: 335,
    tollPlazas: [
      { name: "Ajmer Toll Plaza", location: 135, carCost: 145, suvCost: 235, commercialCost: 500, acceptsFASTag: true },
      { name: "Beawar Toll Plaza", location: 190, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Pali Toll Plaza", location: 270, carCost: 85, suvCost: 140, commercialCost: 295, acceptsFASTag: true },
    ],
    fastagInfo: "All three toll plazas on NH-62 accept FASTag. The route passes through the heart of Rajasthan's Aravalli region.",
    tips: [
      "Three tolls totaling ₹325 for car. The Beawar-Pali stretch has good dhabas for authentic Rajasthani food.",
      "Jodhpur's Mehrangarh Fort is best visited early morning for the 'Blue City' sunrise view.",
      "This route can also be combined with Jaisalmer (285 km further) for a complete Rajasthan trip.",
    ],
    estimatedFuel: { petrol: 2010, diesel: 1508 },
    relatedRoutes: ["jaipur-to-udaipur", "jaipur-to-ajmer", "delhi-to-jaipur"],
  }),

  // ═══════════════════════════════════════════
  // 14. JAIPUR TO AJMER
  // ═══════════════════════════════════════════
  "jaipur-to-ajmer": createTollRoute({
    slug: "jaipur-to-ajmer", origin: "Jaipur", destination: "Ajmer", totalDistance: 135,
    tollPlazas: [
      { name: "Dudu Toll Plaza", location: 55, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Kishangarh Toll Plaza", location: 105, carCost: 75, suvCost: 120, commercialCost: 255, acceptsFASTag: true },
    ],
    fastagInfo: "NH-48 Jaipur-Ajmer section has two FASTag-enabled toll plazas. Quick processing at both locations.",
    tips: [
      "Just ₹170 toll for car one-way. Short 2.5-hour drive on excellent highway.",
      "Visit Pushkar (14 km from Ajmer) — world's only Brahma Temple. Combined Ajmer-Pushkar trip is popular.",
      "Ajmer Sharif Dargah attracts pilgrims year-round. Urs Festival (annual) is the biggest gathering.",
    ],
    estimatedFuel: { petrol: 810, diesel: 608 },
    relatedRoutes: ["jaipur-to-udaipur", "jaipur-to-jodhpur", "delhi-to-jaipur"],
  }),

  // ═══════════════════════════════════════════
  // 15. AGRA TO JAIPUR
  // ═══════════════════════════════════════════
  "agra-to-jaipur": createTollRoute({
    slug: "agra-to-jaipur", origin: "Agra", destination: "Jaipur", totalDistance: 240,
    tollPlazas: [
      { name: "Bharatpur Toll Plaza", location: 55, carCost: 105, suvCost: 170, commercialCost: 360, acceptsFASTag: true },
      { name: "Dausa Toll Plaza", location: 150, carCost: 125, suvCost: 200, commercialCost: 430, acceptsFASTag: true },
    ],
    fastagInfo: "NH-21 Agra-Jaipur route has two toll plazas, both FASTag-enabled. The route passes through Bharatpur bird sanctuary area.",
    tips: [
      "Two tolls totaling ₹230 for car. This is the famous Golden Triangle route (Delhi-Agra-Jaipur).",
      "Stop at Fatehpur Sikri (40 km from Agra) — UNESCO World Heritage Site — before the first toll.",
      "Bharatpur's Keoladeo Bird Sanctuary (near the first toll) is worth a 2-hour detour for nature lovers.",
    ],
    estimatedFuel: { petrol: 1440, diesel: 1080 },
    relatedRoutes: ["agra-to-delhi", "delhi-to-jaipur", "delhi-to-agra"],
  }),

  // ═══════════════════════════════════════════
  // 16. AGRA TO DELHI
  // ═══════════════════════════════════════════
  "agra-to-delhi": createTollRoute({
    slug: "agra-to-delhi", origin: "Agra", destination: "Delhi", totalDistance: 230,
    tollPlazas: [
      { name: "Mathura Toll Plaza", location: 70, carCost: 130, suvCost: 210, commercialCost: 450, acceptsFASTag: true },
      { name: "Jewar Toll Plaza", location: 170, carCost: 155, suvCost: 250, commercialCost: 535, acceptsFASTag: true },
    ],
    fastagInfo: "Yamuna Expressway return journey has the same two toll plazas. FASTag is essential for the expressway.",
    tips: [
      "Same ₹285 toll as Delhi-to-Agra direction. Total round-trip toll budget: ₹570 for car.",
      "Leave Agra by 2 PM to reach Delhi before evening rush hour and avoid Noida Expressway traffic.",
      "The Yamuna Expressway has speed cameras — maintain 100 km/h speed limit to avoid fines.",
    ],
    estimatedFuel: { petrol: 1380, diesel: 1035 },
    relatedRoutes: ["delhi-to-agra", "agra-to-jaipur", "delhi-to-mathura"],
  }),

  // ═══════════════════════════════════════════
  // 17. CHANDIGARH TO MANALI
  // ═══════════════════════════════════════════
  "chandigarh-to-manali": createTollRoute({
    slug: "chandigarh-to-manali", origin: "Chandigarh", destination: "Manali", totalDistance: 310,
    tollPlazas: [
      { name: "Bilaspur Toll Plaza", location: 120, carCost: 65, suvCost: 105, commercialCost: 225, acceptsFASTag: true },
      { name: "Sundernagar Toll Plaza", location: 190, carCost: 55, suvCost: 90, commercialCost: 190, acceptsFASTag: true },
    ],
    fastagInfo: "NH-21 has two small toll plazas. After Sundernagar, mountain roads are toll-free. Both plazas accept FASTag.",
    tips: [
      "Only ₹120 toll for car — mountain routes have fewer toll plazas compared to plains highways.",
      "The Chandigarh-Manali route via Mandi is extremely scenic. Stop at Pandoh Dam for photos.",
      "Start early from Chandigarh (5-6 AM) to cross the mountain passes in daylight.",
    ],
    estimatedFuel: { petrol: 1860, diesel: 1395 },
    relatedRoutes: ["delhi-to-manali", "chandigarh-to-shimla", "delhi-to-chandigarh"],
  }),

  // ═══════════════════════════════════════════
  // 18. CHANDIGARH TO SHIMLA
  // ═══════════════════════════════════════════
  "chandigarh-to-shimla": createTollRoute({
    slug: "chandigarh-to-shimla", origin: "Chandigarh", destination: "Shimla", totalDistance: 115,
    tollPlazas: [
      { name: "Parwanoo Toll Plaza", location: 35, carCost: 75, suvCost: 120, commercialCost: 255, acceptsFASTag: true },
    ],
    fastagInfo: "Only one toll plaza at Parwanoo (Himachal Pradesh border). FASTag accepted. After Parwanoo, mountain roads are toll-free.",
    tips: [
      "Just ₹75 toll for car — one of the cheapest toll routes. The mountain drive is the real highlight.",
      "Himachal Pradesh may charge a separate Green Tax (₹50-100) at the state border checkpoint.",
      "The 80 km Kalka-Shimla mountain stretch has 100+ curves — enjoy the scenic drive through pine forests.",
    ],
    estimatedFuel: { petrol: 690, diesel: 518 },
    relatedRoutes: ["delhi-to-shimla", "chandigarh-to-manali", "delhi-to-chandigarh"],
  }),

  // ═══════════════════════════════════════════
  // 19. LUCKNOW TO VARANASI
  // ═══════════════════════════════════════════
  "lucknow-to-varanasi": createTollRoute({
    slug: "lucknow-to-varanasi", origin: "Lucknow", destination: "Varanasi", totalDistance: 300,
    tollPlazas: [
      { name: "Sultanpur Toll Plaza", location: 140, carCost: 110, suvCost: 175, commercialCost: 375, acceptsFASTag: true },
      { name: "Jaunpur Toll Plaza", location: 230, carCost: 75, suvCost: 120, commercialCost: 255, acceptsFASTag: true },
    ],
    fastagInfo: "NH-56 Lucknow-Varanasi route has two FASTag-enabled toll plazas. Road quality has improved significantly after 4-laning.",
    tips: [
      "Two tolls totaling ₹185 for car. Purvanchal Expressway is an alternative with different toll charges.",
      "Start early from Lucknow. The Jaunpur stretch can have heavy truck traffic in the afternoon.",
      "Varanasi's Ganga Aarti at Dashashwamedh Ghat starts at 6:45 PM — plan arrival accordingly.",
    ],
    estimatedFuel: { petrol: 1800, diesel: 1350 },
    relatedRoutes: ["delhi-to-varanasi", "delhi-to-lucknow", "lucknow-to-ayodhya"],
  }),

  // ═══════════════════════════════════════════
  // 20. LUCKNOW TO AYODHYA
  // ═══════════════════════════════════════════
  "lucknow-to-ayodhya": createTollRoute({
    slug: "lucknow-to-ayodhya", origin: "Lucknow", destination: "Ayodhya", totalDistance: 135,
    tollPlazas: [
      { name: "Barabanki Toll Plaza", location: 30, carCost: 85, suvCost: 140, commercialCost: 295, acceptsFASTag: true },
      { name: "Faizabad Toll Plaza", location: 115, carCost: 65, suvCost: 105, commercialCost: 225, acceptsFASTag: true },
    ],
    fastagInfo: "NH-330 has two toll plazas with FASTag facility. The route has been upgraded for increased pilgrim traffic to Ayodhya.",
    tips: [
      "Just ₹150 toll for car one-way. The road has been significantly upgraded since the Ram Temple inauguration.",
      "Ayodhya is experiencing massive infrastructure development — expect some diversions near the city.",
      "Visit Ram Janmabhoomi Temple, Hanuman Garhi, and Saryu River Ghat for evening aarti.",
    ],
    estimatedFuel: { petrol: 810, diesel: 608 },
    relatedRoutes: ["lucknow-to-varanasi", "delhi-to-lucknow", "delhi-to-varanasi"],
  }),

  // ═══════════════════════════════════════════
  // 21. DELHI TO MATHURA
  // ═══════════════════════════════════════════
  "delhi-to-mathura": createTollRoute({
    slug: "delhi-to-mathura", origin: "Delhi", destination: "Mathura", totalDistance: 180,
    tollPlazas: [
      { name: "Jewar Toll Plaza", location: 60, carCost: 155, suvCost: 250, commercialCost: 535, acceptsFASTag: true },
    ],
    fastagInfo: "Yamuna Expressway has one toll plaza at Jewar for the Delhi-Mathura stretch. 100% FASTag-enabled.",
    tips: [
      "Only one toll of ₹155 for car — Mathura exit is before the second toll plaza at km 160.",
      "Mathura is the birthplace of Lord Krishna. Visit Dwarkadhish Temple and Krishna Janmabhoomi.",
      "Combine Mathura with Vrindavan (12 km) and Agra (60 km) for a complete day trip from Delhi.",
    ],
    estimatedFuel: { petrol: 1080, diesel: 810 },
    relatedRoutes: ["delhi-to-agra", "agra-to-delhi", "delhi-to-jaipur"],
  }),

  // ═══════════════════════════════════════════
  // 22. DELHI TO NAINITAL
  // ═══════════════════════════════════════════
  "delhi-to-nainital": createTollRoute({
    slug: "delhi-to-nainital", origin: "Delhi", destination: "Nainital", totalDistance: 300,
    tollPlazas: [
      { name: "Ghaziabad Toll Plaza", location: 30, carCost: 85, suvCost: 140, commercialCost: 295, acceptsFASTag: true },
      { name: "Moradabad Toll Plaza", location: 170, carCost: 120, suvCost: 195, commercialCost: 415, acceptsFASTag: true },
      { name: "Rampur Toll Plaza", location: 220, carCost: 65, suvCost: 105, commercialCost: 225, acceptsFASTag: true },
    ],
    fastagInfo: "NH-9 has three toll plazas before Haldwani. After Haldwani, the 30 km mountain road to Nainital is toll-free.",
    tips: [
      "Three tolls totaling ₹270 for car. After Haldwani, the scenic mountain drive has no more tolls.",
      "The last 30 km Haldwani-Nainital stretch has hairpin bends — this is where the hill station magic begins.",
      "Nainital Lake boating is a must-do. Book a cab one-way and enjoy the return mountain views.",
    ],
    estimatedFuel: { petrol: 1800, diesel: 1350 },
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-dehradun", "delhi-to-rishikesh"],
  }),

  // ═══════════════════════════════════════════
  // 23. DELHI TO RISHIKESH
  // ═══════════════════════════════════════════
  "delhi-to-rishikesh": createTollRoute({
    slug: "delhi-to-rishikesh", origin: "Delhi", destination: "Rishikesh", totalDistance: 250,
    tollPlazas: [
      { name: "Delhi-Meerut Expressway Toll", location: 35, carCost: 120, suvCost: 195, commercialCost: 415, acceptsFASTag: true },
      { name: "Muzaffarnagar Toll Plaza", location: 130, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
      { name: "Roorkee Toll Plaza", location: 180, carCost: 65, suvCost: 105, commercialCost: 225, acceptsFASTag: true },
    ],
    fastagInfo: "Same toll route as Delhi-Haridwar with one extra stretch. All three plazas accept FASTag. Rishikesh is 25 km beyond Haridwar.",
    tips: [
      "Three tolls totaling ₹280 for car — same tolls as Delhi-Haridwar route since Rishikesh is 25 km further.",
      "Rishikesh is the 'Yoga Capital of the World'. Visit Laxman Jhula, Ram Jhula, and attend Triveni Ghat aarti.",
      "For river rafting, book in advance. The best rapids are between Shivpuri and Rishikesh (16 km stretch).",
    ],
    estimatedFuel: { petrol: 1500, diesel: 1125 },
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-dehradun", "delhi-to-mussoorie"],
  }),

  // ═══════════════════════════════════════════
  // 24. DELHI TO MUSSOORIE
  // ═══════════════════════════════════════════
  "delhi-to-mussoorie": createTollRoute({
    slug: "delhi-to-mussoorie", origin: "Delhi", destination: "Mussoorie", totalDistance: 290,
    tollPlazas: [
      { name: "Delhi-Meerut Expressway Toll", location: 35, carCost: 120, suvCost: 195, commercialCost: 415, acceptsFASTag: true },
      { name: "Muzaffarnagar Toll Plaza", location: 130, carCost: 95, suvCost: 155, commercialCost: 325, acceptsFASTag: true },
    ],
    fastagInfo: "Two toll plazas on the plains section. The Dehradun-Mussoorie mountain stretch (35 km) is toll-free but may have a small green tax.",
    tips: [
      "Only ₹215 toll for car. The tolls are on the plains section — the scenic mountain drive is toll-free.",
      "Mussoorie is called 'Queen of Hills'. Mall Road, Kempty Falls, and Gun Hill are must-visit spots.",
      "The Dehradun to Mussoorie road (35 km) has stunning valley views — stop at the viewpoints for photos.",
    ],
    estimatedFuel: { petrol: 1740, diesel: 1305 },
    relatedRoutes: ["delhi-to-dehradun", "delhi-to-rishikesh", "delhi-to-haridwar"],
  }),

  // ═══════════════════════════════════════════
  // 25. DELHI TO NOIDA
  // ═══════════════════════════════════════════
  "delhi-to-noida": createTollRoute({
    slug: "delhi-to-noida", origin: "Delhi", destination: "Noida", totalDistance: 25,
    tollPlazas: [
      { name: "DND Flyway Toll", location: 8, carCost: 30, suvCost: 45, commercialCost: 90, acceptsFASTag: true },
    ],
    fastagInfo: "DND Flyway has a single FASTag-enabled toll plaza. Alternatively, the Kalindi Kunj route is toll-free but slower.",
    tips: [
      "Only ₹30 toll for car via DND Flyway. Kalindi Kunj bridge is a toll-free alternative but adds 15-20 minutes.",
      "Noida Expressway connects to Yamuna Expressway for Agra. Budget additional toll if continuing to Agra.",
      "Peak hours (8-10 AM, 5-8 PM) see heavy traffic. Off-peak travel takes just 20-25 minutes via DND.",
    ],
    estimatedFuel: { petrol: 150, diesel: 113 },
    relatedRoutes: ["delhi-to-agra", "delhi-to-mathura", "delhi-to-meerut"],
  }),
};

// ═══════════════════════════════════════════
// EXPORT FUNCTIONS
// ═══════════════════════════════════════════

export function getTollCostRoute(slug) {
  return tollCostRoutes[slug] || null;
}

export function getAllTollCostSlugs() {
  return Object.keys(tollCostRoutes);
}

export function getRelatedTollCostRoutes(slug) {
  const route = tollCostRoutes[slug];
  if (!route) return [];
  return route.relatedRoutes
    .filter(rs => tollCostRoutes[rs])
    .map(rs => ({
      slug: rs,
      origin: tollCostRoutes[rs].origin,
      destination: tollCostRoutes[rs].destination,
      totalTollCar: tollCostRoutes[rs].totalTollCost.car,
      totalDistance: tollCostRoutes[rs].totalDistance,
    }));
}
