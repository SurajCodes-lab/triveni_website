// src/utilis/travelByCarData.js - Complete data for 40 travel-by-car driving guide pages
// Pricing: Sedan ₹11/km, SUV ₹14/km, Tempo ₹20/km (min 300km billing)

function calcFares(distanceKm) {
  const billableKm = Math.max(distanceKm, 300);
  const sedan = billableKm * 11;
  const suv = billableKm * 14;
  const tempo = billableKm * 20;
  return {
    cabFares: {
      sedan: `₹${sedan.toLocaleString('en-IN')}`,
      suv: `₹${suv.toLocaleString('en-IN')}`,
      tempo: `₹${tempo.toLocaleString('en-IN')}`,
    },
    sedanRaw: sedan,
    suvRaw: suv,
    tempoRaw: tempo,
  };
}

function generateFaqs(origin, dest, distKm, drivingTime, bestCarType, sedanFare) {
  return [
    { question: `How far is ${dest} from ${origin} by car?`, answer: `${dest} is approximately ${distKm} km from ${origin} by road. The drive takes around ${drivingTime} depending on traffic, road conditions, and stops. Starting early (5-6 AM) is recommended for the best experience.` },
    { question: `What is the best car for a ${origin} to ${dest} road trip?`, answer: `For the ${origin} to ${dest} drive, a ${bestCarType} is recommended. For families, an SUV like Innova/Ertiga offers more space and comfort. Solo travellers or couples can opt for a sedan like Swift Dzire.` },
    { question: `How much does a cab from ${origin} to ${dest} cost?`, answer: `A cab from ${origin} to ${dest} starts at ${sedanFare} for an AC Sedan (₹11/km). SUV starts at ₹${Math.max(distKm, 300) * 14} (₹14/km). Tempo Traveller at ₹${Math.max(distKm, 300) * 20} (₹20/km). Toll and state tax extra.` },
    { question: `Is the ${origin} to ${dest} road safe for driving?`, answer: `Yes, the ${origin} to ${dest} route is generally safe with well-maintained highways for most stretches. However, mountain sections (if any) require careful driving. We recommend experienced drivers for hill routes, especially during monsoon and winter.` },
    { question: `Where should I stop for food on the ${origin} to ${dest} drive?`, answer: `Popular food stops on the ${origin} to ${dest} route include highway dhabas and restaurants at major towns en route. Our drivers know the best clean and hygienic food stops. We recommend stopping every 2-3 hours for refreshments.` },
    { question: `Can I book a one-way cab from ${origin} to ${dest}?`, answer: `Yes, Triveni Cabs offers both one-way and round-trip cab service from ${origin} to ${dest}. One-way booking saves up to 50% compared to round-trip. Call 7668570551 or WhatsApp for instant quotes.` },
  ];
}

function createTravelRoute({
  slug, origin, destination, totalDistance, drivingTime,
  roadMap, drivingTips, petrolStops, foodStops,
  seasonalWarnings, bestCarType, faqs: customFaqs,
  relatedRoutes
}) {
  const fares = calcFares(totalDistance);
  const defaultFaqs = generateFaqs(origin, destination, totalDistance, drivingTime, bestCarType, fares.cabFares.sedan);
  return {
    slug,
    origin,
    destination,
    totalDistance,
    drivingTime,
    roadMap,
    drivingTips,
    petrolStops,
    foodStops,
    seasonalWarnings,
    bestCarType,
    ...fares,
    relatedRoutes: relatedRoutes || [],
    faqs: customFaqs || defaultFaqs,
  };
}

export const travelByCarRoutes = {

  // ═══════════════════════════════════════════
  // DELHI ORIGIN ROUTES (20 routes)
  // ═══════════════════════════════════════════

  "delhi-to-manali": createTravelRoute({
    slug: "delhi-to-manali", origin: "Delhi", destination: "Manali", totalDistance: 530, drivingTime: "12-13 hours",
    roadMap: [
      { segment: "Delhi to Karnal", distance: 130, time: "2 hrs", roadQuality: "Excellent", highlights: "NH-44 expressway, Murthal paranthas stop" },
      { segment: "Karnal to Chandigarh", distance: 120, time: "1.5 hrs", roadQuality: "Excellent", highlights: "Smooth 4-lane highway, Haveli restaurant" },
      { segment: "Chandigarh to Bilaspur", distance: 100, time: "2.5 hrs", roadQuality: "Good", highlights: "Foothills begin, scenic Shivalik range views" },
      { segment: "Bilaspur to Mandi", distance: 80, time: "2 hrs", roadQuality: "Moderate", highlights: "Mountain roads, Sundernagar lake, Pandoh Dam" },
      { segment: "Mandi to Kullu", distance: 60, time: "2 hrs", roadQuality: "Moderate", highlights: "Beas river valley, stunning canyon views" },
      { segment: "Kullu to Manali", distance: 40, time: "1.5 hrs", roadQuality: "Good", highlights: "Apple orchards, Kullu valley, snow peaks visible" },
    ],
    drivingTips: [
      "Start from Delhi by 4-5 AM to reach Manali before dark — mountain driving at night is risky",
      "Stop at Murthal (40 km) for breakfast — the famous paranthas are a road trip tradition",
      "Carry warm clothes even in summer — Manali evenings drop to 5-10°C",
      "Keep your tank full after Chandigarh — petrol stations become sparse in mountains",
      "Download offline maps before Mandi — mobile network gets patchy in the ghats",
    ],
    petrolStops: 8,
    foodStops: ["Murthal Dhabas (40 km)", "Karnal Haveli (130 km)", "Chandigarh (250 km)", "Mandi town (410 km)"],
    seasonalWarnings: {
      winter: "Roads may be blocked by snow above Manali. Chains required. Atal Tunnel helps bypass Rohtang. Check BRO updates before travel (Dec-Feb).",
      monsoon: "High risk of landslides between Mandi and Kullu (Jul-Aug). NHAI helpline 1033 for road status. Carry emergency supplies.",
      summer: "Peak tourist season (May-Jun). Expect heavy traffic near Manali. Book accommodation in advance. Start extra early.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-kasol", "delhi-to-dharamshala", "chandigarh-to-manali", "shimla-to-manali"],
  }),

  "delhi-to-shimla": createTravelRoute({
    slug: "delhi-to-shimla", origin: "Delhi", destination: "Shimla", totalDistance: 350, drivingTime: "7-8 hours",
    roadMap: [
      { segment: "Delhi to Karnal", distance: 130, time: "2 hrs", roadQuality: "Excellent", highlights: "NH-44 expressway, smooth 6-lane road" },
      { segment: "Karnal to Ambala", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "GT Road heritage stretch" },
      { segment: "Ambala to Pinjore", distance: 30, time: "30 min", roadQuality: "Good", highlights: "Pinjore Gardens worth a quick stop" },
      { segment: "Pinjore to Solan", distance: 60, time: "2 hrs", roadQuality: "Moderate", highlights: "Mountain ghat begins at Kalka, 22 hairpin bends" },
      { segment: "Solan to Shimla", distance: 60, time: "1.5 hrs", roadQuality: "Good", highlights: "Pine forests, Barog tunnel, stunning valley views" },
    ],
    drivingTips: [
      "Leave Delhi by 5 AM to enjoy the Kalka-Shimla mountain stretch in daylight",
      "Stop at Barog for chai — the old railway tunnel nearby is a heritage attraction",
      "Carry motion sickness pills — 22 hairpin bends after Kalka can be nauseating",
      "Use lower gear on mountain descents — brakes overheat on the 30 km ghat section",
      "Parking in Shimla Mall Road area is very limited — use HPTDC parking lots",
    ],
    petrolStops: 6,
    foodStops: ["Murthal Dhabas (40 km)", "Ambala (200 km)", "Barog (280 km)", "Solan (290 km)"],
    seasonalWarnings: {
      winter: "Snow on roads possible Dec-Feb. Black ice above Kufri is dangerous. Carry chains and start late (after 8 AM) to let ice melt.",
      monsoon: "Landslides possible near Solan and Shimla (Jul-Sep). Road closures common. Check HP PWD road status before starting.",
      summer: "Heavy traffic on weekends (May-Jun). The Kalka-Shimla road gets jammed. Travel on weekdays if possible.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-manali", "delhi-to-kasol", "shimla-to-manali", "delhi-to-chandigarh", "chandigarh-to-shimla"],
  }),

  "delhi-to-rishikesh": createTravelRoute({
    slug: "delhi-to-rishikesh", origin: "Delhi", destination: "Rishikesh", totalDistance: 250, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Delhi to Meerut", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "Delhi-Meerut Expressway, world-class 14-lane highway" },
      { segment: "Meerut to Muzaffarnagar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Sugar belt of UP, roadside sugarcane juice stalls" },
      { segment: "Muzaffarnagar to Roorkee", distance: 50, time: "1 hr", roadQuality: "Good", highlights: "Ganges canal crossings, IIT Roorkee campus nearby" },
      { segment: "Roorkee to Haridwar", distance: 30, time: "40 min", roadQuality: "Good", highlights: "Approaching the holy city, temple spires visible" },
      { segment: "Haridwar to Rishikesh", distance: 25, time: "40 min", roadQuality: "Good", highlights: "Scenic Ganges drive, rafting camps along the river" },
    ],
    drivingTips: [
      "Leave Delhi by 5 AM for a peaceful arrival — Rishikesh is magical in morning light",
      "Stop at Haridwar for darshan at Har Ki Pauri before continuing to Rishikesh",
      "Carry comfortable walking shoes — many Rishikesh attractions involve walking and steps",
      "Avoid driving into Rishikesh old town — roads are very narrow, park at Tapovan",
      "Book your Ganges rafting in advance during Oct-Nov peak season",
    ],
    petrolStops: 5,
    foodStops: ["Meerut city (70 km)", "Muzaffarnagar (130 km)", "Roorkee (180 km)", "Haridwar (225 km)"],
    seasonalWarnings: {
      winter: "Pleasant driving weather. Rishikesh stays mild (10-20°C). Evenings are cool — carry a light jacket for Ganga Aarti.",
      monsoon: "River activities suspended Jul-Aug. Roads are fine but Ganga is in spate. Avoid river-side camps during heavy rain.",
      summer: "Hot drive through UP plains (40°C+). Keep AC on and carry water. Rishikesh itself is pleasantly warm.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-mussoorie", "delhi-to-dehradun", "haridwar-to-rishikesh"],
  }),

  "delhi-to-haridwar": createTravelRoute({
    slug: "delhi-to-haridwar", origin: "Delhi", destination: "Haridwar", totalDistance: 230, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Delhi to Meerut", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "Delhi-Meerut Expressway, fastest exit from Delhi" },
      { segment: "Meerut to Muzaffarnagar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Flat plains, farmland vistas" },
      { segment: "Muzaffarnagar to Roorkee", distance: 50, time: "1 hr", roadQuality: "Good", highlights: "Historic Ganges canal, engineering heritage" },
      { segment: "Roorkee to Haridwar", distance: 30, time: "40 min", roadQuality: "Good", highlights: "First glimpse of Shivalik hills, temple bells audible" },
    ],
    drivingTips: [
      "Leave by 2-3 PM if you want to catch the evening Ganga Aarti at Har Ki Pauri (6-7 PM)",
      "Haridwar has strict vegetarian-only zone — no non-veg food or alcohol within city limits",
      "Parking near Har Ki Pauri is almost impossible — use designated lots and walk",
      "Carry small change for temple donations and shoe-keepers near ghats",
      "Drive slowly through Haridwar outskirts — pedestrian traffic is heavy near ashrams",
    ],
    petrolStops: 4,
    foodStops: ["Meerut city (70 km)", "Muzaffarnagar (130 km)", "Roorkee (180 km)"],
    seasonalWarnings: {
      winter: "Cold mornings (5°C) but pleasant days. Ganga Aarti in winter is less crowded and more intimate.",
      monsoon: "Ganga is in full spate — a spectacular sight. Roads are fine. Carry umbrella for sudden showers.",
      summer: "Very hot drive (40°C+). Evening arrival recommended. Ganga dip is refreshing in summer heat.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-rishikesh", "delhi-to-dehradun", "delhi-to-mussoorie", "haridwar-to-rishikesh"],
  }),

  "delhi-to-agra": createTravelRoute({
    slug: "delhi-to-agra", origin: "Delhi", destination: "Agra", totalDistance: 230, drivingTime: "3-4 hours",
    roadMap: [
      { segment: "Delhi to Greater Noida", distance: 40, time: "40 min", roadQuality: "Excellent", highlights: "Noida Expressway, modern infrastructure" },
      { segment: "Greater Noida to Jewar", distance: 40, time: "30 min", roadQuality: "Excellent", highlights: "Yamuna Expressway begins, 6-lane world-class road" },
      { segment: "Jewar to Mathura", distance: 100, time: "1 hr", roadQuality: "Excellent", highlights: "Flat fertile plains, Yamuna Expressway speed limit 100 km/h" },
      { segment: "Mathura to Agra", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Krishna Janmabhoomi temple, famous Mathura peda sweets" },
    ],
    drivingTips: [
      "Leave Delhi by 4-5 AM to reach Agra for sunrise at Taj Mahal — the best light for photos",
      "Yamuna Expressway is toll-based (₹155 per car) — keep FASTag active for smooth passage",
      "Stop at Mathura (160 km) for famous peda sweets — every shop sells them, pick Brijwasi brand",
      "Speed cameras are active on Yamuna Expressway — maintain limit of 100 km/h",
      "Agra's inner city roads are chaotic — park near Shilpgram and take e-rickshaw to Taj Mahal",
    ],
    petrolStops: 3,
    foodStops: ["Greater Noida (40 km)", "Yamuna Expressway food court (120 km)", "Mathura (160 km)"],
    seasonalWarnings: {
      winter: "Perfect weather for sightseeing (Oct-Feb). Morning fog possible on expressway — use fog lights and maintain distance.",
      monsoon: "Yamuna Expressway is well-drained but waterlogging possible near Agra city (Jul-Sep). Taj looks stunning in rain.",
      summer: "Extreme heat (45°C+) May-Jun. Visit Taj Mahal at sunrise or sunset only. Carry water, sunscreen, and hat.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-jaipur", "agra-to-jaipur", "delhi-to-mathura", "delhi-to-varanasi"],
  }),

  "delhi-to-jaipur": createTravelRoute({
    slug: "delhi-to-jaipur", origin: "Delhi", destination: "Jaipur", totalDistance: 280, drivingTime: "4-5 hours",
    roadMap: [
      { segment: "Delhi to Gurgaon", distance: 30, time: "30 min", roadQuality: "Excellent", highlights: "NH-48, Cyber City skyline" },
      { segment: "Gurgaon to Neemrana", distance: 90, time: "1 hr", roadQuality: "Excellent", highlights: "Delhi-Jaipur Expressway, Neemrana Fort heritage hotel" },
      { segment: "Neemrana to Behror", distance: 30, time: "25 min", roadQuality: "Excellent", highlights: "Good food stops, clean restrooms at highway restaurants" },
      { segment: "Behror to Shahpura", distance: 70, time: "45 min", roadQuality: "Excellent", highlights: "Rajasthan border crossing, landscape turns arid" },
      { segment: "Shahpura to Jaipur", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Pink City approach, Amber Fort visible from highway" },
    ],
    drivingTips: [
      "Delhi-Jaipur Expressway is one of India's best roads — enjoy the smooth 6-lane highway",
      "Stop at Neemrana Fort (120 km) for a quick heritage walkthrough — 15th century step-well",
      "Behror has the best food options on this route — multiple highway restaurants with clean facilities",
      "Avoid entering Jaipur via Ajmer Road during rush hours — take the bypass to your hotel",
      "Carry cash for Jaipur — many heritage sites, markets, and auto-rickshaws prefer cash",
    ],
    petrolStops: 5,
    foodStops: ["Manesar (55 km)", "Neemrana (120 km)", "Behror (150 km)", "Shahpura (220 km)"],
    seasonalWarnings: {
      winter: "Best season (Oct-Mar). Pleasant 15-25°C. Jaipur's forts and palaces are stunning in winter light.",
      monsoon: "Expressway is excellent even in rain. Jaipur gets occasional heavy showers (Jul-Sep). Nahargarh views are magical in monsoon.",
      summer: "Extremely hot (45°C+) May-Jun. Keep AC on full blast. Avoid midday sightseeing. Early morning or evening only.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-agra", "delhi-to-udaipur", "jaipur-to-udaipur", "jaipur-to-jodhpur", "agra-to-jaipur"],
  }),

  "delhi-to-nainital": createTravelRoute({
    slug: "delhi-to-nainital", origin: "Delhi", destination: "Nainital", totalDistance: 300, drivingTime: "6-7 hours",
    roadMap: [
      { segment: "Delhi to Ghaziabad", distance: 20, time: "30 min", roadQuality: "Good", highlights: "NH-9 start, urban stretch" },
      { segment: "Ghaziabad to Moradabad", distance: 130, time: "2.5 hrs", roadQuality: "Good", highlights: "UP plains, brass city of Moradabad" },
      { segment: "Moradabad to Rampur", distance: 30, time: "30 min", roadQuality: "Good", highlights: "Historical Raza Library, Rohilkhand region" },
      { segment: "Rampur to Haldwani", distance: 80, time: "1.5 hrs", roadQuality: "Good", highlights: "Gateway to Kumaon, foothills begin" },
      { segment: "Haldwani to Nainital", distance: 35, time: "1.5 hrs", roadQuality: "Moderate", highlights: "30 km mountain ascent, 9 hairpin bends, stunning lake views" },
    ],
    drivingTips: [
      "The last 35 km from Haldwani to Nainital is all uphill — keep your engine cool and use low gears",
      "Bhimtal detour (5 km off route) has a less crowded lake — consider it if Nainital is too packed",
      "Nainital has a one-way traffic system — follow local signs and don't try shortcuts",
      "Stock up on snacks and water at Haldwani — options thin out on the mountain stretch",
      "Naini Lake boating is best in early morning before tourist crowds arrive",
    ],
    petrolStops: 5,
    foodStops: ["Ghaziabad (20 km)", "Moradabad (150 km)", "Rampur (180 km)", "Haldwani (265 km)"],
    seasonalWarnings: {
      winter: "Snow possible Dec-Feb above Nainital. Road to Snow View Point may close. Carry woolens — temperature drops to 0°C.",
      monsoon: "Landslide risk on Haldwani-Nainital stretch (Jul-Sep). Check Uttarakhand SDRF alerts. Roads can close suddenly.",
      summer: "Peak season (May-Jun). Nainital is pleasantly cool (15-25°C) while Delhi bakes. Book hotels early — they sell out.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-corbett", "delhi-to-lansdowne", "delhi-to-rishikesh"],
  }),

  "delhi-to-mussoorie": createTravelRoute({
    slug: "delhi-to-mussoorie", origin: "Delhi", destination: "Mussoorie", totalDistance: 290, drivingTime: "6-7 hours",
    roadMap: [
      { segment: "Delhi to Meerut", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "Delhi-Meerut Expressway" },
      { segment: "Meerut to Muzaffarnagar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Flat farmland drive" },
      { segment: "Muzaffarnagar to Roorkee", distance: 50, time: "1 hr", roadQuality: "Good", highlights: "Ganges canal belt" },
      { segment: "Roorkee to Dehradun", distance: 70, time: "1.5 hrs", roadQuality: "Good", highlights: "Shivalik foothills, Doon Valley approach" },
      { segment: "Dehradun to Mussoorie", distance: 35, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Stunning mountain climb, Kempty Falls en route, cloud forest" },
    ],
    drivingTips: [
      "The 35 km Dehradun-Mussoorie climb has blind curves — honk at every turn and stay in your lane",
      "Kempty Falls is 15 km before Mussoorie — good stop but crowded on weekends",
      "Mall Road in Mussoorie is vehicle-free — drop luggage at hotel first, then park below",
      "Night driving to Mussoorie is very scenic but risky — prefer daylight hours",
      "Gun Hill ropeway closes by 7 PM — plan accordingly if it is on your list",
    ],
    petrolStops: 5,
    foodStops: ["Meerut (70 km)", "Muzaffarnagar (130 km)", "Dehradun (255 km)", "Kempty Falls area (275 km)"],
    seasonalWarnings: {
      winter: "Snow likely Jan-Feb on Mussoorie roads. Lal Tibba and Dhanaulti get heavy snow. Carry chains.",
      monsoon: "Landslide season Jul-Sep. The Dehradun-Mussoorie road is especially vulnerable. Check road status.",
      summer: "Most popular season (May-Jun). Mussoorie is 20°C when Delhi is 45°C. Expect traffic jams on weekends.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-rishikesh", "delhi-to-haridwar", "delhi-to-dehradun", "delhi-to-nainital"],
  }),

  "delhi-to-kasol": createTravelRoute({
    slug: "delhi-to-kasol", origin: "Delhi", destination: "Kasol", totalDistance: 520, drivingTime: "12-13 hours",
    roadMap: [
      { segment: "Delhi to Chandigarh", distance: 250, time: "4 hrs", roadQuality: "Excellent", highlights: "NH-44, smooth highway, Murthal paranthas" },
      { segment: "Chandigarh to Bilaspur", distance: 100, time: "2.5 hrs", roadQuality: "Good", highlights: "Shivalik foothills, Gobind Sagar lake glimpses" },
      { segment: "Bilaspur to Mandi", distance: 80, time: "2 hrs", roadQuality: "Moderate", highlights: "Mountain roads begin, Pandoh Dam, tunnels" },
      { segment: "Mandi to Bhuntar", distance: 50, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Beas river gorge, narrow mountain roads" },
      { segment: "Bhuntar to Kasol", distance: 30, time: "1.5 hrs", roadQuality: "Poor", highlights: "Parvati Valley entrance, dramatic cliff road, river views" },
    ],
    drivingTips: [
      "Start from Delhi at 3-4 AM — Kasol is a genuine 12+ hour drive with stops",
      "The Bhuntar-Kasol stretch (30 km) has the worst road conditions — go slow on this narrow cliff road",
      "Carry snacks and water from Mandi onwards — options reduce dramatically",
      "Mobile network is patchy after Bhuntar — download offline maps and music before",
      "Consider a night halt in Mandi if you start late — driving to Kasol at night is extremely dangerous",
    ],
    petrolStops: 7,
    foodStops: ["Murthal (40 km)", "Chandigarh (250 km)", "Mandi (430 km)", "Bhuntar (480 km)"],
    seasonalWarnings: {
      winter: "Kasol gets snow Dec-Feb. Road to Kheerganga closes. The Parvati Valley road becomes icy — not recommended for inexperienced drivers.",
      monsoon: "Extremely dangerous Jul-Aug. Parvati Valley landslides are common and deadly. Strongly avoid this period.",
      summer: "Best season (Apr-Jun). Kasol is cool (15-25°C). Weekends get very crowded with backpackers.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-manali", "delhi-to-shimla", "delhi-to-dharamshala", "chandigarh-to-kasol"],
  }),

  "delhi-to-dharamshala": createTravelRoute({
    slug: "delhi-to-dharamshala", origin: "Delhi", destination: "Dharamshala", totalDistance: 480, drivingTime: "9-10 hours",
    roadMap: [
      { segment: "Delhi to Karnal", distance: 130, time: "2 hrs", roadQuality: "Excellent", highlights: "NH-44, Murthal breakfast stop" },
      { segment: "Karnal to Ambala", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "GT Road, smooth highway" },
      { segment: "Ambala to Ludhiana", distance: 120, time: "2 hrs", roadQuality: "Good", highlights: "Punjab heartland, industrial stretch" },
      { segment: "Ludhiana to Jalandhar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Agricultural fields, roadside dhabas" },
      { segment: "Jalandhar to Dharamshala", distance: 100, time: "3 hrs", roadQuality: "Moderate", highlights: "Mountain ascent begins, Kangra Valley views, Tibetan monasteries" },
    ],
    drivingTips: [
      "The Jalandhar-Dharamshala mountain stretch (100 km) takes 3 hours — do not underestimate it",
      "Stop at Gagal for tea — you will get the first panoramic Dhauladhar range view here",
      "McLeodganj is 10 km above Dharamshala — roads are narrow and steep, drive carefully",
      "Carry warm clothes year-round — Dharamshala at 1475m is always cooler than expected",
      "Visit Norbulingka Institute for authentic Tibetan culture — less crowded than McLeodganj market",
    ],
    petrolStops: 7,
    foodStops: ["Murthal (40 km)", "Karnal Haveli (130 km)", "Ludhiana (320 km)", "Jalandhar (380 km)"],
    seasonalWarnings: {
      winter: "Dharamshala gets snow Dec-Feb. McLeodganj road can be icy. Beautiful but pack heavy woolens.",
      monsoon: "Very heavy rainfall Jul-Sep (Dharamshala is India's wettest hill station after Cherrapunji). Landslides common.",
      summer: "Ideal season (Apr-Jun). Pleasant 20-28°C. HPCA cricket stadium offers spectacular mountain-backdrop matches.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-manali", "delhi-to-amritsar", "delhi-to-mcleodganj", "chandigarh-to-dharamshala", "amritsar-to-dharamshala"],
  }),

  "delhi-to-amritsar": createTravelRoute({
    slug: "delhi-to-amritsar", origin: "Delhi", destination: "Amritsar", totalDistance: 450, drivingTime: "7-8 hours",
    roadMap: [
      { segment: "Delhi to Karnal", distance: 130, time: "2 hrs", roadQuality: "Excellent", highlights: "NH-44, Great Indian food belt at Murthal" },
      { segment: "Karnal to Ambala", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "Military cantonment area" },
      { segment: "Ambala to Ludhiana", distance: 120, time: "1.5 hrs", roadQuality: "Good", highlights: "Punjab industrial hub, good dhabas" },
      { segment: "Ludhiana to Jalandhar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Sports goods capital of India" },
      { segment: "Jalandhar to Amritsar", distance: 80, time: "1.5 hrs", roadQuality: "Good", highlights: "Approaching the holy city, Wagah border vibes" },
    ],
    drivingTips: [
      "Visit the Golden Temple early morning (4-5 AM Amrit Vela) — the most spiritual experience",
      "Try langar (free community meal) at Golden Temple — feeds 50,000+ people daily",
      "Wagah Border ceremony is at 5:30 PM — time your arrival accordingly if you want to attend",
      "Punjab dhabas serve the best butter chicken and lassi in India — stop anywhere on GT Road",
      "Amritsar old city is a maze — use GPS to reach Golden Temple parking area directly",
    ],
    petrolStops: 7,
    foodStops: ["Murthal (40 km)", "Karnal (130 km)", "Ludhiana (320 km)", "Jalandhar (380 km)"],
    seasonalWarnings: {
      winter: "Cold but beautiful (Dec-Feb). Golden Temple fog photography is magical. Carry heavy woolens — Punjab winter is biting.",
      monsoon: "Roads are fine but hot and humid (Jul-Sep). Occasional flooding in low-lying areas.",
      summer: "Very hot (42°C+). Amritsar is sweltering May-Jun. Visit Golden Temple pool for cooling respite. Travel with AC on always.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-chandigarh", "delhi-to-dharamshala", "amritsar-to-dharamshala", "delhi-to-mcleodganj"],
  }),

  "delhi-to-chandigarh": createTravelRoute({
    slug: "delhi-to-chandigarh", origin: "Delhi", destination: "Chandigarh", totalDistance: 250, drivingTime: "4-5 hours",
    roadMap: [
      { segment: "Delhi to Panipat", distance: 90, time: "1.5 hrs", roadQuality: "Excellent", highlights: "NH-44, historic Panipat battlefield" },
      { segment: "Panipat to Karnal", distance: 40, time: "30 min", roadQuality: "Excellent", highlights: "Karnal lake, clean highway" },
      { segment: "Karnal to Ambala", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "GT Road, cantonment area" },
      { segment: "Ambala to Chandigarh", distance: 50, time: "1 hr", roadQuality: "Excellent", highlights: "Le Corbusier's planned city approach, Sukhna Lake" },
    ],
    drivingTips: [
      "NH-44 is one of India's best highways — enjoy the smooth 4-6 lane drive",
      "Chandigarh's sector system can confuse first-timers — download CityBus app or use Google Maps",
      "Rock Garden is Chandigarh's crown jewel — visit in the morning for fewer crowds",
      "Sukhna Lake evening walk is a must — arrive by 4 PM for the best experience",
      "Chandigarh is the gateway to Shimla, Manali, and Kasol — consider making it a pit stop",
    ],
    petrolStops: 4,
    foodStops: ["Murthal (40 km)", "Panipat (90 km)", "Karnal (130 km)", "Ambala (200 km)"],
    seasonalWarnings: {
      winter: "Pleasant but cold mornings (5°C). Sukhna Lake at sunrise is beautiful. Carry a jacket.",
      monsoon: "Highway is well-maintained in rain. Chandigarh looks green and lush Jul-Sep. Rose Garden is stunning.",
      summer: "Hot (38-40°C) but manageable. AC car recommended. Chandigarh's tree-lined avenues provide shade.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "chandigarh-to-shimla", "chandigarh-to-manali"],
  }),

  "delhi-to-kashmir": createTravelRoute({
    slug: "delhi-to-kashmir", origin: "Delhi", destination: "Srinagar (Kashmir)", totalDistance: 850, drivingTime: "18-20 hours",
    roadMap: [
      { segment: "Delhi to Ludhiana", distance: 320, time: "5 hrs", roadQuality: "Excellent", highlights: "NH-44, Punjab heartland" },
      { segment: "Ludhiana to Jalandhar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Agricultural Punjab" },
      { segment: "Jalandhar to Jammu", distance: 200, time: "3.5 hrs", roadQuality: "Good", highlights: "Pathankot military town, Jammu approach" },
      { segment: "Jammu to Udhampur", distance: 65, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Shivalik foothills, mountain drive begins" },
      { segment: "Udhampur to Ramban", distance: 80, time: "3 hrs", roadQuality: "Poor", highlights: "Patnitop hill station, dramatic mountain terrain" },
      { segment: "Ramban to Srinagar", distance: 130, time: "5 hrs", roadQuality: "Moderate", highlights: "Jawahar Tunnel, Banihal Pass, Kashmir Valley entrance" },
    ],
    drivingTips: [
      "Split this into a 2-day drive — overnight at Jammu or Patnitop, it is too long for a single day",
      "Jammu-Srinagar highway has one-way traffic on some sections — check schedule before starting",
      "Carry extra fuel, food, and water for the Jammu-Srinagar stretch — services are sparse",
      "Jawahar Tunnel can have long queues — be patient and keep engine running for ventilation",
      "Winter driving requires snow chains and experience — hire a local driver through Triveni Cabs",
    ],
    petrolStops: 10,
    foodStops: ["Karnal (130 km)", "Ludhiana (320 km)", "Jammu (580 km)", "Patnitop (650 km)"],
    seasonalWarnings: {
      winter: "Srinagar highway closes frequently Dec-Feb due to snow and landslides. Flight recommended in winter.",
      monsoon: "Highway extremely dangerous Jul-Aug. Landslides and road closures are daily events. Avoid driving.",
      summer: "Best time (Apr-Jun, Sep-Oct). Kashmir is paradise 20-30°C. Book houseboats in advance for peak season.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-amritsar", "delhi-to-dharamshala", "srinagar-to-leh", "delhi-to-manali"],
  }),

  "delhi-to-udaipur": createTravelRoute({
    slug: "delhi-to-udaipur", origin: "Delhi", destination: "Udaipur", totalDistance: 660, drivingTime: "10-11 hours",
    roadMap: [
      { segment: "Delhi to Jaipur", distance: 280, time: "4 hrs", roadQuality: "Excellent", highlights: "Delhi-Jaipur Expressway, Neemrana Fort" },
      { segment: "Jaipur to Ajmer", distance: 135, time: "2 hrs", roadQuality: "Good", highlights: "Pushkar turn-off, Ajmer Dargah" },
      { segment: "Ajmer to Bhilwara", distance: 130, time: "2 hrs", roadQuality: "Good", highlights: "Rajasthan textile town, Mewar region begins" },
      { segment: "Bhilwara to Udaipur", distance: 115, time: "2.5 hrs", roadQuality: "Moderate", highlights: "Aravalli hills, Rajsamand Lake, approaching Lake City" },
    ],
    drivingTips: [
      "Consider an overnight in Jaipur to break the journey — both cities deserve full exploration",
      "The Bhilwara-Udaipur stretch winds through Aravalli hills — scenic but requires careful driving",
      "Udaipur's old city has extremely narrow lanes — park at Fateh Sagar and take auto-rickshaw",
      "Lake Pichola sunset boat ride is unmissable — book in advance during peak season",
      "Carry water and sunscreen — Rajasthan heat is brutal, even inside an AC car during pit stops",
    ],
    petrolStops: 9,
    foodStops: ["Neemrana (120 km)", "Jaipur (280 km)", "Ajmer (415 km)", "Bhilwara (545 km)"],
    seasonalWarnings: {
      winter: "Best season (Oct-Feb). Udaipur is magical at 15-25°C. Lakes are full after monsoon. Perfect photography weather.",
      monsoon: "Udaipur transforms into a green paradise Jul-Sep. Lakes overflow. Monsoon Palace views are breathtaking. Roads can be slippery in Aravalli section.",
      summer: "Extremely hot (42-46°C) Apr-Jun. Not recommended unless necessary. Travel only with AC car. Avoid midday outdoor activities.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-jaipur", "jaipur-to-udaipur", "udaipur-to-jodhpur", "udaipur-to-jaisalmer"],
  }),

  "delhi-to-varanasi": createTravelRoute({
    slug: "delhi-to-varanasi", origin: "Delhi", destination: "Varanasi", totalDistance: 820, drivingTime: "12-14 hours",
    roadMap: [
      { segment: "Delhi to Agra", distance: 230, time: "3.5 hrs", roadQuality: "Excellent", highlights: "Yamuna Expressway, Mathura" },
      { segment: "Agra to Kanpur", distance: 280, time: "4 hrs", roadQuality: "Good", highlights: "NH-19, Agra-Lucknow Expressway option" },
      { segment: "Kanpur to Prayagraj", distance: 190, time: "3 hrs", roadQuality: "Good", highlights: "Triveni Sangam city, Ganga-Yamuna confluence" },
      { segment: "Prayagraj to Varanasi", distance: 120, time: "2.5 hrs", roadQuality: "Good", highlights: "Final stretch, spiritual UP, Sarnath near Varanasi" },
    ],
    drivingTips: [
      "This is a long drive — start at 4 AM or split into 2 days with a stop at Prayagraj or Lucknow",
      "The Purvanchal Expressway shortens the route — check if open for your vehicle type",
      "Varanasi old city is not car-friendly at all — park at Dashashwamedh parking and walk to ghats",
      "Evening Ganga Aarti at Dashashwamedh Ghat starts at 6:30 PM — plan your arrival accordingly",
      "Try kachori-sabzi for breakfast anywhere in UP — it is the local road-trip staple",
    ],
    petrolStops: 10,
    foodStops: ["Mathura (160 km)", "Agra (230 km)", "Kanpur (510 km)", "Prayagraj (700 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Dev Deepawali in Nov is spectacular — million lamps on Varanasi ghats. Morning fog possible.",
      monsoon: "Ganga floods ghats Jul-Sep. The experience is different but raw. Roads are generally fine on expressway.",
      summer: "Brutal heat (45°C+) May-Jun. Not recommended. If you must go, drive at night and rest during daytime.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-agra", "lucknow-to-varanasi", "varanasi-to-ayodhya", "delhi-to-prayagraj"],
  }),

  "delhi-to-leh": createTravelRoute({
    slug: "delhi-to-leh", origin: "Delhi", destination: "Leh", totalDistance: 990, drivingTime: "2-3 days (30+ hours driving)",
    roadMap: [
      { segment: "Delhi to Chandigarh", distance: 250, time: "4 hrs", roadQuality: "Excellent", highlights: "NH-44, starting the epic journey" },
      { segment: "Chandigarh to Manali", distance: 280, time: "8 hrs", roadQuality: "Moderate", highlights: "Mountain roads, Kullu Valley" },
      { segment: "Manali to Keylong", distance: 115, time: "4 hrs", roadQuality: "Moderate", highlights: "Atal Tunnel (9.2 km), Lahaul Valley" },
      { segment: "Keylong to Sarchu", distance: 105, time: "4 hrs", roadQuality: "Poor", highlights: "Baralacha La (4,890m), high-altitude desert" },
      { segment: "Sarchu to Leh", distance: 255, time: "10 hrs", roadQuality: "Poor", highlights: "Gata Loops (21 hairpin bends), Tanglang La, Upshi, Indus Valley" },
    ],
    drivingTips: [
      "This is a 3-day minimum road trip — Day 1: Delhi to Manali, Day 2: Manali to Sarchu/Jispa, Day 3: Sarchu to Leh",
      "Acclimatize at Manali for a day before ascending — altitude sickness above 3,500m is serious",
      "Carry Diamox (consult doctor), glucose, dry fruits — oxygen is thin above Keylong",
      "Petrol stations after Manali are unreliable — fill up at Tandi (last guaranteed fuel for 365 km)",
      "Inner Line Permit required for Leh — apply online at laikinh.in before your trip",
    ],
    petrolStops: 6,
    foodStops: ["Chandigarh (250 km)", "Manali (530 km)", "Keylong (645 km)", "Sarchu tent camps (750 km)"],
    seasonalWarnings: {
      winter: "Route CLOSED Nov-May. Passes are snow-bound. Only Srinagar-Leh may open briefly. Flight recommended.",
      monsoon: "Dangerous Jul-Aug. Flash floods at Sarchu and landslides at Baralacha. Drive only if experienced with backup plans.",
      summer: "Best window: Jun-Sep (after snow melts). Jul-Aug has rain risk but most reliable road conditions. Sep is ideal.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-manali", "manali-to-leh", "srinagar-to-leh", "delhi-to-spiti"],
  }),

  "delhi-to-spiti": createTravelRoute({
    slug: "delhi-to-spiti", origin: "Delhi", destination: "Kaza (Spiti Valley)", totalDistance: 680, drivingTime: "2-3 days (24+ hours driving)",
    roadMap: [
      { segment: "Delhi to Chandigarh", distance: 250, time: "4 hrs", roadQuality: "Excellent", highlights: "NH-44, gateway to the mountains" },
      { segment: "Chandigarh to Shimla", distance: 100, time: "3 hrs", roadQuality: "Moderate", highlights: "Mountain drive through Kalka ghats" },
      { segment: "Shimla to Narkanda", distance: 60, time: "2 hrs", roadQuality: "Moderate", highlights: "Apple orchards, Hatu Peak views" },
      { segment: "Narkanda to Reckong Peo", distance: 140, time: "6 hrs", roadQuality: "Poor", highlights: "Kinnaur Valley, Sutlej River gorge, apple belt" },
      { segment: "Reckong Peo to Kaza", distance: 130, time: "7 hrs", roadQuality: "Very Poor", highlights: "Spiti River, Buddhist villages, moonscape terrain" },
    ],
    drivingTips: [
      "Minimum 3-day road trip — Day 1: Delhi to Shimla/Narkanda, Day 2: to Reckong Peo/Kalpa, Day 3: to Kaza",
      "The Reckong Peo-Kaza road is among India's most dangerous — landslide-prone and narrow cliffs",
      "Inner Line Permit required beyond Reckong Peo — get it from Shimla DC office or apply online",
      "Carry all medicines, cash (no ATMs in Spiti), and extra food — Spiti is truly remote",
      "Respect the fragile ecology — do not litter, do not disturb Buddhist prayer flags or chortens",
    ],
    petrolStops: 5,
    foodStops: ["Chandigarh (250 km)", "Shimla (350 km)", "Narkanda (410 km)", "Reckong Peo (550 km)"],
    seasonalWarnings: {
      winter: "Route CLOSED Nov-Apr. Kunzum Pass and Rohtang are snow-bound. Spiti is cut off from the world.",
      monsoon: "Extremely dangerous Jul-Aug. Massive landslides in Kinnaur. Multiple road closures. Avoid.",
      summer: "Best time: Jun and Sep-Oct. July-Aug has landslide risk. Sep-Oct offers clearest skies and golden landscapes.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "delhi-to-leh", "shimla-to-manali"],
  }),

  "delhi-to-mcleodganj": createTravelRoute({
    slug: "delhi-to-mcleodganj", origin: "Delhi", destination: "McLeodganj", totalDistance: 490, drivingTime: "10-11 hours",
    roadMap: [
      { segment: "Delhi to Karnal", distance: 130, time: "2 hrs", roadQuality: "Excellent", highlights: "NH-44, Murthal paranthas" },
      { segment: "Karnal to Ludhiana", distance: 190, time: "2.5 hrs", roadQuality: "Good", highlights: "Punjab highway, GT Road" },
      { segment: "Ludhiana to Jalandhar", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Punjab agricultural belt" },
      { segment: "Jalandhar to Dharamshala", distance: 100, time: "2.5 hrs", roadQuality: "Moderate", highlights: "Kangra Valley, tea gardens" },
      { segment: "Dharamshala to McLeodganj", distance: 10, time: "30 min", roadQuality: "Poor", highlights: "Steep narrow road, Tibetan monastery area, Dalai Lama temple" },
    ],
    drivingTips: [
      "McLeodganj is 10 km above Dharamshala on a steep road with blind curves — go very slowly",
      "Parking is extremely limited in McLeodganj — park at Dharamshala and take taxi/local bus up",
      "Visit Dalai Lama temple complex early morning for free meditation session",
      "Triund trek starts from McLeodganj — requires a full day, plan separately if interested",
      "Try Tibetan thukpa and momos at Mcllo restaurant — the best in town",
    ],
    petrolStops: 7,
    foodStops: ["Murthal (40 km)", "Karnal (130 km)", "Ludhiana (320 km)", "Jalandhar (380 km)"],
    seasonalWarnings: {
      winter: "Snow Dec-Feb makes McLeodganj magical. Roads can be icy. Carry chains and warm waterproof clothes.",
      monsoon: "Among India's heaviest rainfall areas Jul-Sep. Landslides are common. Not recommended for road trips.",
      summer: "Perfect weather Apr-Jun (18-25°C). Peak tourist season. Book accommodation well in advance.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-dharamshala", "delhi-to-amritsar", "delhi-to-manali", "chandigarh-to-dharamshala"],
  }),

  "delhi-to-corbett": createTravelRoute({
    slug: "delhi-to-corbett", origin: "Delhi", destination: "Jim Corbett National Park", totalDistance: 260, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Delhi to Ghaziabad", distance: 20, time: "30 min", roadQuality: "Good", highlights: "NH-9, urban exit" },
      { segment: "Ghaziabad to Moradabad", distance: 130, time: "2.5 hrs", roadQuality: "Good", highlights: "UP plains, brass city" },
      { segment: "Moradabad to Kashipur", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Approaching terai region, sugarcane fields" },
      { segment: "Kashipur to Ramnagar", distance: 35, time: "45 min", roadQuality: "Good", highlights: "Corbett Museum in Ramnagar, gateway to park" },
      { segment: "Ramnagar to Dhikala/Bijrani", distance: 20, time: "45 min", roadQuality: "Moderate", highlights: "Inside park, forest roads, wildlife spotting begins" },
    ],
    drivingTips: [
      "Book safari and accommodation well in advance — Corbett gets fully booked months ahead in peak season",
      "Dhikala zone has the best tiger-spotting odds but requires advance CTR booking online",
      "Do not honk inside the park — it scares wildlife and is against park rules",
      "Carry binoculars and a zoom camera — you will regret not having them",
      "Last petrol station is at Ramnagar — fill up before entering the forest area",
    ],
    petrolStops: 4,
    foodStops: ["Ghaziabad (20 km)", "Moradabad (150 km)", "Kashipur (210 km)", "Ramnagar (245 km)"],
    seasonalWarnings: {
      winter: "Best for wildlife (Nov-Feb). Morning jungle safaris in 5°C fog are thrilling. Carry heavy woolens.",
      monsoon: "Park CLOSED Jul-Sep for breeding season. Most zones shut down. Plan accordingly.",
      summer: "Hot (35-40°C) but excellent for tiger sighting — animals come to water holes. Apr-Jun is peak tiger season.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-nainital", "delhi-to-lansdowne", "delhi-to-rishikesh", "delhi-to-mussoorie"],
  }),

  "delhi-to-lansdowne": createTravelRoute({
    slug: "delhi-to-lansdowne", origin: "Delhi", destination: "Lansdowne", totalDistance: 270, drivingTime: "6-7 hours",
    roadMap: [
      { segment: "Delhi to Meerut", distance: 70, time: "1 hr", roadQuality: "Excellent", highlights: "Delhi-Meerut Expressway" },
      { segment: "Meerut to Bijnor", distance: 90, time: "1.5 hrs", roadQuality: "Good", highlights: "Sugarcane belt, small-town UP" },
      { segment: "Bijnor to Kotdwar", distance: 70, time: "1.5 hrs", roadQuality: "Good", highlights: "Terai foothills, approaching Garhwal" },
      { segment: "Kotdwar to Lansdowne", distance: 40, time: "2 hrs", roadQuality: "Moderate", highlights: "Steep mountain road, pine and oak forests, misty views" },
    ],
    drivingTips: [
      "Lansdowne is a quiet cantonment town — perfect for those who hate crowded hill stations",
      "The Kotdwar-Lansdowne 40 km mountain road has no guardrails in places — drive very carefully",
      "Tip n Top viewpoint offers 360-degree Himalayan panorama — visit at sunrise",
      "There are no ATMs in Lansdowne — withdraw cash at Kotdwar before ascending",
      "Lansdowne has limited restaurant options — the Garhwal Mess (Army) sometimes allows civilian guests",
    ],
    petrolStops: 4,
    foodStops: ["Meerut (70 km)", "Bijnor (160 km)", "Kotdwar (230 km)"],
    seasonalWarnings: {
      winter: "Snow rare but extremely cold (0-5°C). Misty mornings. Few tourists — perfect solitude.",
      monsoon: "Heavy rain Jul-Sep. Leeches in forest trails. Road landslides possible. Beautiful but risky.",
      summer: "Pleasant (20-25°C) May-Jun. Less crowded than Nainital/Mussoorie. A true hidden gem.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-rishikesh", "delhi-to-nainital", "delhi-to-corbett", "delhi-to-haridwar"],
  }),

  "delhi-to-dalhousie": createTravelRoute({
    slug: "delhi-to-dalhousie", origin: "Delhi", destination: "Dalhousie", totalDistance: 560, drivingTime: "10-11 hours",
    roadMap: [
      { segment: "Delhi to Karnal", distance: 130, time: "2 hrs", roadQuality: "Excellent", highlights: "NH-44, Murthal paranthas" },
      { segment: "Karnal to Ludhiana", distance: 190, time: "2.5 hrs", roadQuality: "Good", highlights: "Punjab plains, GT Road" },
      { segment: "Ludhiana to Pathankot", distance: 170, time: "3 hrs", roadQuality: "Good", highlights: "Jalandhar bypass, approaching Himachal border" },
      { segment: "Pathankot to Dalhousie", distance: 80, time: "3 hrs", roadQuality: "Moderate", highlights: "Chamba Valley entrance, pine forests, colonial-era hill station" },
    ],
    drivingTips: [
      "The Pathankot-Dalhousie mountain road (80 km) takes a full 3 hours — do not rush",
      "Dalhousie retains British colonial charm — walk on Mall Road and Subhash Chowk",
      "Visit Khajjiar (22 km from Dalhousie) — called Mini Switzerland of India for its alpine meadows",
      "Carry woolens year-round — Dalhousie at 1,970m is always cool, even in summer",
      "Panchpula waterfalls are best in monsoon — but approach road gets muddy",
    ],
    petrolStops: 7,
    foodStops: ["Murthal (40 km)", "Karnal (130 km)", "Ludhiana (320 km)", "Pathankot (490 km)"],
    seasonalWarnings: {
      winter: "Heavy snowfall Dec-Feb. Khajjiar road may close. Beautiful but challenging. Pack for sub-zero temperatures.",
      monsoon: "Very heavy rain Jul-Sep. Landslides on Pathankot-Dalhousie stretch. Waterfalls are spectacular but roads are risky.",
      summer: "Perfect weather May-Jun (15-25°C). Peak season. Less crowded than Shimla/Manali. Great for families.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-dharamshala", "delhi-to-amritsar", "delhi-to-manali", "delhi-to-shimla"],
  }),

  // ═══════════════════════════════════════════
  // JAIPUR ORIGIN ROUTES (4 routes)
  // ═══════════════════════════════════════════

  "jaipur-to-udaipur": createTravelRoute({
    slug: "jaipur-to-udaipur", origin: "Jaipur", destination: "Udaipur", totalDistance: 395, drivingTime: "6-7 hours",
    roadMap: [
      { segment: "Jaipur to Ajmer", distance: 135, time: "2 hrs", roadQuality: "Good", highlights: "NH-48, Kishangarh marble market, Pushkar turn-off" },
      { segment: "Ajmer to Bhilwara", distance: 130, time: "2 hrs", roadQuality: "Good", highlights: "Rajasthan's textile town, Mewar region" },
      { segment: "Bhilwara to Chittorgarh", distance: 50, time: "1 hr", roadQuality: "Good", highlights: "Chittorgarh Fort — UNESCO World Heritage Site worth a detour" },
      { segment: "Chittorgarh to Udaipur", distance: 115, time: "2 hrs", roadQuality: "Moderate", highlights: "Aravalli hills, lake country, approaching Venice of the East" },
    ],
    drivingTips: [
      "Detour via Chittorgarh Fort (15 km off main route) — India's largest fort is breathtaking",
      "Pushkar is 15 km from Ajmer — worth a day trip for the sacred Brahma Temple and camel fair (Nov)",
      "Udaipur old city is a maze — let the GPS navigate you to Fateh Sagar Lake parking",
      "Lake Pichola boat ride at sunset is non-negotiable — book the 5 PM slot",
      "Try dal baati churma at any roadside dhaba in Rajasthan — it is the iconic dish",
    ],
    petrolStops: 6,
    foodStops: ["Kishangarh (95 km)", "Ajmer (135 km)", "Bhilwara (265 km)", "Chittorgarh (315 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Cool desert nights, warm days. Udaipur lakes are fullest after monsoon.",
      monsoon: "Udaipur in monsoon is stunning — green Aravallis, overflowing lakes, Sajjangarh views. Roads can be slippery.",
      summer: "Scorching (42-46°C) Apr-Jun. Drive with AC. Avoid midday sightseeing. Early morning or evening only.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-udaipur", "udaipur-to-jodhpur", "jaipur-to-jodhpur", "udaipur-to-jaisalmer"],
  }),

  "jaipur-to-jaisalmer": createTravelRoute({
    slug: "jaipur-to-jaisalmer", origin: "Jaipur", destination: "Jaisalmer", totalDistance: 570, drivingTime: "9-10 hours",
    roadMap: [
      { segment: "Jaipur to Jodhpur", distance: 335, time: "5 hrs", roadQuality: "Good", highlights: "NH-62, Rajasthan desert landscape unfolds" },
      { segment: "Jodhpur to Pokhran", distance: 150, time: "2.5 hrs", roadQuality: "Good", highlights: "Nuclear test site town, Thar Desert begins, sand dunes" },
      { segment: "Pokhran to Jaisalmer", distance: 110, time: "2 hrs", roadQuality: "Good", highlights: "Golden city mirage, fort visible 10 km before arrival" },
    ],
    drivingTips: [
      "This is a genuinely long desert drive — start early and carry extra water (minimum 5 liters)",
      "Jaisalmer Fort is a living fort — people still reside inside its golden sandstone walls",
      "Book a desert camp for the night at Sam Sand Dunes (40 km from Jaisalmer) — camel safari at sunset",
      "Petrol stations exist but are spaced 60-80 km apart after Jodhpur — never skip one",
      "Stop at Pokhran for chai — the famous nuclear test site has a museum worth visiting",
    ],
    petrolStops: 7,
    foodStops: ["Beawar (180 km)", "Jodhpur (335 km)", "Pokhran (485 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Desert nights drop to 5°C. Carry heavy woolens for desert camp overnight.",
      monsoon: "Rare rain Jul-Aug but when it comes, desert roads can flood briefly. Beautiful green Thar is a rare sight.",
      summer: "Extreme heat (48°C+). Not recommended. If you must go, drive only at night/early morning. Carry water obsessively.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["jaipur-to-jodhpur", "jaipur-to-udaipur", "udaipur-to-jaisalmer", "jaipur-to-mount-abu"],
  }),

  "jaipur-to-jodhpur": createTravelRoute({
    slug: "jaipur-to-jodhpur", origin: "Jaipur", destination: "Jodhpur", totalDistance: 335, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Jaipur to Beawar", distance: 180, time: "2.5 hrs", roadQuality: "Good", highlights: "NH-62, Ajmer bypass available, desert landscape" },
      { segment: "Beawar to Pali", distance: 80, time: "1.5 hrs", roadQuality: "Good", highlights: "Ranakpur Jain Temple turn-off (40 km detour — magnificent)" },
      { segment: "Pali to Jodhpur", distance: 70, time: "1.5 hrs", roadQuality: "Good", highlights: "Mehrangarh Fort visible from afar, Blue City approach" },
    ],
    drivingTips: [
      "Mehrangarh Fort in Jodhpur is India's most impressive fort — allocate 3-4 hours for it",
      "Detour to Ranakpur Jain Temple (40 km from Pali) — 1,444 hand-carved marble pillars, each unique",
      "Jodhpur's blue-painted houses are best viewed from Mehrangarh — carry a wide-angle lens",
      "Try Mirchi Vada at Shahi Samosa near Clock Tower — Jodhpur's most famous street food",
      "Avoid driving through the old Clock Tower market area — it is pedestrian chaos",
    ],
    petrolStops: 5,
    foodStops: ["Kishangarh (95 km)", "Beawar (180 km)", "Pali (260 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Desert mornings are cold (5-8°C) but days are warm and sunny.",
      monsoon: "Rare rain makes the desert stunning Jul-Sep. Umaid Bhawan Palace gardens are lush. Brief road flooding possible.",
      summer: "Brutal heat (45°C+). Avoid if possible. If must go, stay inside Mehrangarh and use AC car exclusively.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["jaipur-to-jaisalmer", "jaipur-to-udaipur", "udaipur-to-jodhpur", "delhi-to-jodhpur"],
  }),

  "jaipur-to-mount-abu": createTravelRoute({
    slug: "jaipur-to-mount-abu", origin: "Jaipur", destination: "Mount Abu", totalDistance: 490, drivingTime: "7-8 hours",
    roadMap: [
      { segment: "Jaipur to Beawar", distance: 180, time: "2.5 hrs", roadQuality: "Good", highlights: "NH-48/62, Ajmer area" },
      { segment: "Beawar to Sirohi", distance: 230, time: "3.5 hrs", roadQuality: "Good", highlights: "Pali, Rajasthan countryside" },
      { segment: "Sirohi to Mount Abu", distance: 80, time: "2 hrs", roadQuality: "Moderate", highlights: "28 hairpin bends, Aravalli mountain ascent, mist and cool air" },
    ],
    drivingTips: [
      "Mount Abu is Rajasthan's ONLY hill station — the 28 hairpin bends to reach it are dramatic",
      "Dilwara Jain Temples have the finest marble carving in India — visit in morning (12-2 PM closed)",
      "Nakki Lake boating is popular but sunset view from Sunset Point is the real attraction",
      "Carry a jacket — Mount Abu at 1,220m is 10°C cooler than the plains below",
      "The ghat road (Sirohi to Mt Abu) has heavy truck traffic — honk at every blind curve",
    ],
    petrolStops: 6,
    foodStops: ["Beawar (180 km)", "Pali (260 km)", "Sirohi (410 km)"],
    seasonalWarnings: {
      winter: "Excellent (Oct-Feb). Mt Abu gets to 5°C. Rare frost possible. Christmas celebrations are popular.",
      monsoon: "Green and misty Jul-Sep. Waterfalls appear. Ghat road can be slippery. Beautiful and uncrowded.",
      summer: "Mt Abu is a refuge from Rajasthan heat (25-33°C vs 45°C in plains). Peak season May-Jun. Book early.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["jaipur-to-udaipur", "jaipur-to-jodhpur", "delhi-to-udaipur", "udaipur-to-jodhpur"],
  }),

  // ═══════════════════════════════════════════
  // CHANDIGARH ORIGIN ROUTES (4 routes)
  // ═══════════════════════════════════════════

  "chandigarh-to-manali": createTravelRoute({
    slug: "chandigarh-to-manali", origin: "Chandigarh", destination: "Manali", totalDistance: 280, drivingTime: "7-8 hours",
    roadMap: [
      { segment: "Chandigarh to Bilaspur", distance: 100, time: "2.5 hrs", roadQuality: "Good", highlights: "Shivalik foothills, Gobind Sagar Lake" },
      { segment: "Bilaspur to Mandi", distance: 80, time: "2 hrs", roadQuality: "Moderate", highlights: "Mountain roads, Pandoh Dam, tunnels through rock" },
      { segment: "Mandi to Kullu", distance: 60, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Beas River valley, rafting spots, Vaishno Devi temple" },
      { segment: "Kullu to Manali", distance: 40, time: "1.5 hrs", roadQuality: "Good", highlights: "Apple orchards, Himalayan peaks, approaching Manali" },
    ],
    drivingTips: [
      "Start from Chandigarh by 6 AM to reach Manali in comfortable daylight hours",
      "The Bilaspur-Mandi section has several tunnels — keep headlights on even during daytime",
      "Stop at Pandoh Dam for photos — dramatic hydro-power structure in the mountains",
      "Kullu Valley has apple orchard stalls in season (Jul-Oct) — buy fresh apples at roadside",
      "Manali old town is more charming than new Manali — stay there if you prefer quiet",
    ],
    petrolStops: 5,
    foodStops: ["Bilaspur (100 km)", "Sundernagar (140 km)", "Mandi (180 km)", "Kullu (240 km)"],
    seasonalWarnings: {
      winter: "Roads open but icy patches Dec-Feb. Snow above Manali. Carry chains. Amazing for snow lovers.",
      monsoon: "Landslides between Mandi and Kullu Jul-Aug. Road closures happen. Check BRO helpline before starting.",
      summer: "Best time (Apr-Jun). Manali is cool (10-25°C). Very crowded on weekends. Weekday travel preferred.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-manali", "chandigarh-to-shimla", "chandigarh-to-kasol", "shimla-to-manali"],
  }),

  "chandigarh-to-shimla": createTravelRoute({
    slug: "chandigarh-to-shimla", origin: "Chandigarh", destination: "Shimla", totalDistance: 115, drivingTime: "3-4 hours",
    roadMap: [
      { segment: "Chandigarh to Pinjore", distance: 25, time: "30 min", roadQuality: "Excellent", highlights: "Pinjore Gardens (Mughal heritage), flat approach road" },
      { segment: "Pinjore to Kalka", distance: 10, time: "15 min", roadQuality: "Good", highlights: "Kalka — start of mountain railway and ghat road" },
      { segment: "Kalka to Solan", distance: 40, time: "1.5 hrs", roadQuality: "Moderate", highlights: "22 hairpin bends, toy train alongside, tunnel views" },
      { segment: "Solan to Shimla", distance: 45, time: "1.5 hrs", roadQuality: "Good", highlights: "Pine forests, Barog break, Mall Road glimpses" },
    ],
    drivingTips: [
      "This is a short but intense mountain drive — 22 hairpin bends demand full attention",
      "The Kalka-Shimla toy train runs alongside the road — look out for it for amazing photo ops",
      "Stop at Barog (halfway point) for chai and samosa — the old-world railway platform is charming",
      "Shimla parking is a nightmare — use HPTDC or ISBT parking lot and walk to Mall Road",
      "The last 5 km into Shimla is one-way system — follow the signage carefully",
    ],
    petrolStops: 3,
    foodStops: ["Pinjore (25 km)", "Barog (65 km)", "Solan (70 km)"],
    seasonalWarnings: {
      winter: "Snow possible Dec-Feb on upper sections. Black ice risk near Shimla. Beautiful but drive with caution.",
      monsoon: "Landslides near Solan Jul-Sep. Road closures possible. Check HP PWD status.",
      summer: "Weekend traffic jams (May-Jun). Leave by 6 AM from Chandigarh to avoid the queue at Shimla entry.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-shimla", "chandigarh-to-manali", "shimla-to-manali", "delhi-to-chandigarh"],
  }),

  "chandigarh-to-dharamshala": createTravelRoute({
    slug: "chandigarh-to-dharamshala", origin: "Chandigarh", destination: "Dharamshala", totalDistance: 240, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Chandigarh to Una", distance: 100, time: "2 hrs", roadQuality: "Good", highlights: "NH-21, Anandpur Sahib Gurudwara en route" },
      { segment: "Una to Kangra", distance: 80, time: "2 hrs", roadQuality: "Good", highlights: "Himachal countryside, Kangra Fort ruins" },
      { segment: "Kangra to Dharamshala", distance: 20, time: "40 min", roadQuality: "Good", highlights: "Tea gardens, Dhauladhar mountain panorama" },
      { segment: "Dharamshala to McLeodganj", distance: 10, time: "30 min", roadQuality: "Moderate", highlights: "Steep ascent, Tibetan culture, Dalai Lama temple" },
    ],
    drivingTips: [
      "Stop at Anandpur Sahib Gurudwara (45 km) — magnificent Sikh heritage site and free langar",
      "Kangra Fort is one of India's oldest forts (3,500+ years) — quick 30-minute stop is worth it",
      "The Kangra Valley tea gardens offer estate tours — Dharamshala is India's tea-producing hill station",
      "McLeodganj parking is almost non-existent — park at Dharamshala and take a local taxi up",
      "Bhagsunag waterfall trail from McLeodganj is an easy 2 km walk — perfect evening activity",
    ],
    petrolStops: 4,
    foodStops: ["Anandpur Sahib (45 km)", "Una (100 km)", "Kangra (180 km)"],
    seasonalWarnings: {
      winter: "Cold but beautiful Dec-Feb. Dharamshala sees occasional snowfall. McLeodganj at 1,770m gets snow reliably.",
      monsoon: "Very heavy rainfall Jul-Sep. Dharamshala is among India's wettest places. Landslides frequent. Avoid.",
      summer: "Best season Apr-Jun (20-28°C). Perfect weather for trekking, monastery visits, and cafe culture.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-dharamshala", "chandigarh-to-manali", "amritsar-to-dharamshala", "chandigarh-to-kasol"],
  }),

  "chandigarh-to-kasol": createTravelRoute({
    slug: "chandigarh-to-kasol", origin: "Chandigarh", destination: "Kasol", totalDistance: 280, drivingTime: "8-9 hours",
    roadMap: [
      { segment: "Chandigarh to Bilaspur", distance: 100, time: "2.5 hrs", roadQuality: "Good", highlights: "Shivalik mountains, Gobind Sagar Lake" },
      { segment: "Bilaspur to Mandi", distance: 80, time: "2 hrs", roadQuality: "Moderate", highlights: "Mountain roads, Pandoh Dam, tunnels" },
      { segment: "Mandi to Bhuntar", distance: 50, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Beas Valley narrowing, Kullu Airport area" },
      { segment: "Bhuntar to Kasol", distance: 30, time: "1.5 hrs", roadQuality: "Poor", highlights: "Parvati Valley cliff road, river crossings, hippie villages" },
    ],
    drivingTips: [
      "The Bhuntar-Kasol road (30 km) is narrow, unpaved in parts, and clings to cliffs — drive extremely slowly",
      "Kasol is a backpacker paradise — Israeli food, trance music, and stunning Parvati River views",
      "Kheerganga hot springs trek starts from Barshaini (15 km beyond Kasol) — plan a full day for it",
      "Mobile network dies after Bhuntar — download everything offline before entering Parvati Valley",
      "Do not park on the narrow Kasol road — there are designated parking areas at both ends of the village",
    ],
    petrolStops: 4,
    foodStops: ["Bilaspur (100 km)", "Mandi (180 km)", "Bhuntar (230 km)"],
    seasonalWarnings: {
      winter: "Snow Dec-Feb. Kasol is beautiful but cold. Kheerganga trek closed. Limited guesthouses open.",
      monsoon: "DANGEROUS Jul-Aug. Parvati Valley has deadly landslides and flash floods. Multiple fatalities every year. Do NOT go.",
      summer: "Best season Apr-Jun. Perfect 15-25°C. Parvati River is inviting. Peak backpacker season.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["chandigarh-to-manali", "delhi-to-kasol", "chandigarh-to-shimla", "chandigarh-to-dharamshala"],
  }),

  // ═══════════════════════════════════════════
  // LUCKNOW ORIGIN ROUTES (2 routes)
  // ═══════════════════════════════════════════

  "lucknow-to-varanasi": createTravelRoute({
    slug: "lucknow-to-varanasi", origin: "Lucknow", destination: "Varanasi", totalDistance: 300, drivingTime: "5-6 hours",
    roadMap: [
      { segment: "Lucknow to Sultanpur", distance: 140, time: "2.5 hrs", roadQuality: "Good", highlights: "Purvanchal Expressway or NH-56, flat UP plains" },
      { segment: "Sultanpur to Jaunpur", distance: 80, time: "1.5 hrs", roadQuality: "Good", highlights: "Historic Jaunpur, Atala Mosque, Shahi Bridge" },
      { segment: "Jaunpur to Varanasi", distance: 65, time: "1.5 hrs", roadQuality: "Good", highlights: "Approaching the ancient city, temple spires visible" },
    ],
    drivingTips: [
      "Purvanchal Expressway is the fastest option — 6-lane highway cuts travel time significantly",
      "Varanasi is India's oldest living city — walk the ghats at dawn for the most profound experience",
      "Auto-rickshaws in Varanasi are cheap and know the narrow lanes — use them inside the city",
      "Sarnath (10 km from Varanasi) is where Buddha gave his first sermon — unmissable for history lovers",
      "Try Kashi Chat and Banarasi Paan near Dashashwamedh Ghat — iconic street food",
    ],
    petrolStops: 4,
    foodStops: ["Sultanpur (140 km)", "Jaunpur (220 km)", "Varanasi outskirts (280 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Dev Deepawali (Nov) is a million-lamp spectacle on the ghats. Morning fog on expressway.",
      monsoon: "Ganga floods lower ghats Jul-Sep. Upper ghats accessible. Monsoon morning aarti is mystical. Roads fine on expressway.",
      summer: "Very hot (42-46°C) Apr-Jun. Dawn and dusk visits only. The evening aarti is cooler. Carry water everywhere.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-varanasi", "varanasi-to-ayodhya", "lucknow-to-ayodhya", "delhi-to-lucknow"],
  }),

  "lucknow-to-ayodhya": createTravelRoute({
    slug: "lucknow-to-ayodhya", origin: "Lucknow", destination: "Ayodhya", totalDistance: 135, drivingTime: "2.5-3 hours",
    roadMap: [
      { segment: "Lucknow to Barabanki", distance: 30, time: "40 min", roadQuality: "Good", highlights: "NH-27, exiting Lucknow" },
      { segment: "Barabanki to Faizabad", distance: 85, time: "1.5 hrs", roadQuality: "Good", highlights: "4-lane highway, UP countryside, approaching the holy city" },
      { segment: "Faizabad to Ayodhya", distance: 10, time: "20 min", roadQuality: "Good", highlights: "Ram Mandir approach, newly developed pilgrim infrastructure" },
    ],
    drivingTips: [
      "Ram Mandir (inaugurated Jan 2024) has long queues — arrive early morning for shorter wait times",
      "New highway makes this a comfortable 2.5-hour drive — road quality has improved dramatically",
      "Ayodhya is rapidly developing — new hotels, roads, and pilgrim facilities are opening constantly",
      "Carry shoes in a bag — you will need to remove them at multiple temples",
      "Saryu River Ghat aarti at sunset rivals Varanasi's — less crowded and equally spiritual",
    ],
    petrolStops: 2,
    foodStops: ["Barabanki (30 km)", "Faizabad (115 km)", "Ayodhya (130 km)"],
    seasonalWarnings: {
      winter: "Best for pilgrimage (Oct-Feb). Ram Navami (Mar/Apr) is the biggest festival — expect lakhs of devotees.",
      monsoon: "Saryu River in spate Jul-Sep. Ghat access may be limited. Roads fine. City can have waterlogging.",
      summer: "Hot (42°C+) but manageable with AC car. Morning and evening visits recommended. Ram Mandir has shade shelters.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["varanasi-to-ayodhya", "lucknow-to-varanasi", "delhi-to-ayodhya", "delhi-to-varanasi"],
  }),

  // ═══════════════════════════════════════════
  // INTER-CITY ROUTES (10 routes)
  // ═══════════════════════════════════════════

  "agra-to-jaipur": createTravelRoute({
    slug: "agra-to-jaipur", origin: "Agra", destination: "Jaipur", totalDistance: 240, drivingTime: "4-5 hours",
    roadMap: [
      { segment: "Agra to Fatehpur Sikri", distance: 40, time: "45 min", roadQuality: "Good", highlights: "Mughal ghost city, UNESCO World Heritage Site — essential stop" },
      { segment: "Fatehpur Sikri to Bharatpur", distance: 20, time: "30 min", roadQuality: "Good", highlights: "Bharatpur Bird Sanctuary (Keoladeo), amazing for bird lovers" },
      { segment: "Bharatpur to Dausa", distance: 100, time: "1.5 hrs", roadQuality: "Good", highlights: "Rajasthan border, Abhaneri step-well (Chand Baori — 3,500 steps)" },
      { segment: "Dausa to Jaipur", distance: 60, time: "1 hr", roadQuality: "Good", highlights: "Approaching Pink City, Amber Fort visible from highway" },
    ],
    drivingTips: [
      "Golden Triangle route classic (Delhi-Agra-Jaipur) — this is the Agra-to-Jaipur leg",
      "Fatehpur Sikri (40 km from Agra) is a must-stop — Akbar's abandoned Mughal capital is haunting",
      "Detour to Chand Baori step-well at Abhaneri (off NH-21) — featured in The Dark Knight Rises",
      "Jaipur's Amber Fort is on this approach — stop there before entering the city",
      "Carry water and snacks — the middle section has fewer quality food stops",
    ],
    petrolStops: 4,
    foodStops: ["Fatehpur Sikri (40 km)", "Bharatpur (60 km)", "Dausa (160 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Mar). Perfect 20-25°C for exploring forts and palaces. Bharatpur migratory birds peak in Jan.",
      monsoon: "Roads fine but Bharatpur bird sanctuary is lush Jul-Sep. Jaipur's forts look dramatic with rain clouds.",
      summer: "Extremely hot (45°C+). Not recommended for sightseeing. If must go, start at dawn and finish by 10 AM.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-agra", "delhi-to-jaipur", "jaipur-to-udaipur", "agra-to-delhi"],
  }),

  "shimla-to-manali": createTravelRoute({
    slug: "shimla-to-manali", origin: "Shimla", destination: "Manali", totalDistance: 250, drivingTime: "7-8 hours",
    roadMap: [
      { segment: "Shimla to Narkanda", distance: 60, time: "2 hrs", roadQuality: "Moderate", highlights: "Hatu Peak views, apple orchards, pine forests" },
      { segment: "Narkanda to Mandi", distance: 100, time: "3 hrs", roadQuality: "Moderate", highlights: "Descending via Sundernagar, Pandoh Dam, river valleys" },
      { segment: "Mandi to Kullu", distance: 55, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Beas River gorge, rafting camps, orchard country" },
      { segment: "Kullu to Manali", distance: 40, time: "1.5 hrs", roadQuality: "Good", highlights: "Himalayan peaks, cedar forests, hot springs at Vashisht" },
    ],
    drivingTips: [
      "This is India's most scenic mountain drive — every turn brings a new Himalayan vista",
      "Do NOT rush this drive — the 250 km takes 7-8 hours because of winding mountain roads",
      "Stop at Narkanda for apple orchards in season (Jul-Oct) — buy straight from the growers",
      "The Mandi-Kullu-Manali stretch follows the Beas River — stop anywhere for stunning river photos",
      "Vashisht Hot Springs (3 km from Manali) have free natural hot water baths — perfect after the drive",
    ],
    petrolStops: 4,
    foodStops: ["Narkanda (60 km)", "Mandi (160 km)", "Kullu (215 km)"],
    seasonalWarnings: {
      winter: "Route open but icy patches possible Dec-Feb. Snow at Narkanda is common. Drive carefully.",
      monsoon: "Landslides between Narkanda and Mandi Jul-Aug. Road closures are regular. Check NHAI status.",
      summer: "Best time (Apr-Jun). Both Shimla and Manali are pleasant. Heavy tourist traffic on weekends.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "chandigarh-to-manali", "chandigarh-to-shimla"],
  }),

  "manali-to-leh": createTravelRoute({
    slug: "manali-to-leh", origin: "Manali", destination: "Leh", totalDistance: 475, drivingTime: "2 days (16-18 hours driving)",
    roadMap: [
      { segment: "Manali to Keylong", distance: 115, time: "3.5 hrs", roadQuality: "Moderate", highlights: "Atal Tunnel (9.2 km), Sissu waterfall, Lahaul Valley" },
      { segment: "Keylong to Jispa", distance: 20, time: "30 min", roadQuality: "Moderate", highlights: "Bhaga River, camping paradise, last comfortable stop" },
      { segment: "Jispa to Sarchu", distance: 85, time: "3.5 hrs", roadQuality: "Poor", highlights: "Baralacha La (4,890m), high-altitude desert, yak sightings" },
      { segment: "Sarchu to Pang", distance: 80, time: "3 hrs", roadQuality: "Poor", highlights: "Gata Loops (21 hairpin bends), Nakeela La, altitude sickness zone" },
      { segment: "Pang to Leh", distance: 175, time: "5 hrs", roadQuality: "Moderate", highlights: "Moore Plains, Tanglang La, Upshi, Indus Valley descent into Leh" },
    ],
    drivingTips: [
      "This is India's ULTIMATE road trip — plan 2 days minimum with overnight at Jispa or Sarchu",
      "Atal Tunnel has eliminated the Rohtang Pass challenge — Keylong is now reachable in 3.5 hours from Manali",
      "Carry Diamox for altitude sickness, glucose, and ORS — you will cross passes above 4,800m",
      "Fill fuel at Tandi (65 km from Manali) — next reliable petrol is 365 km away at Karu near Leh",
      "Acclimatize at Leh for 24 hours after arrival — do not exert yourself, drink lots of water",
    ],
    petrolStops: 3,
    foodStops: ["Sissu (45 km)", "Keylong/Jispa (115 km)", "Sarchu tent camps (220 km)", "Pang tent camps (300 km)"],
    seasonalWarnings: {
      winter: "Route CLOSED Nov-May. All passes are snow-bound. Not possible.",
      monsoon: "Dangerous Jul-Aug. Flash floods at Sarchu, landslides at Baralacha. Attempt only with experienced driver and backup plan.",
      summer: "Best window: Jun and Sep. July-Aug has rain and flood risk. September offers clearest skies and autumn colors.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["delhi-to-leh", "srinagar-to-leh", "delhi-to-manali", "delhi-to-spiti"],
  }),

  "srinagar-to-leh": createTravelRoute({
    slug: "srinagar-to-leh", origin: "Srinagar", destination: "Leh", totalDistance: 420, drivingTime: "2 days (14-16 hours driving)",
    roadMap: [
      { segment: "Srinagar to Sonamarg", distance: 80, time: "2.5 hrs", roadQuality: "Good", highlights: "Sindh Valley, Thajiwas Glacier, golden meadows" },
      { segment: "Sonamarg to Drass", distance: 65, time: "3 hrs", roadQuality: "Moderate", highlights: "Zoji La Pass (3,528m), Kargil War Memorial at Drass" },
      { segment: "Drass to Kargil", distance: 60, time: "1.5 hrs", roadQuality: "Good", highlights: "Drass — second coldest inhabited place on Earth, war memorial" },
      { segment: "Kargil to Lamayuru", distance: 100, time: "3.5 hrs", roadQuality: "Moderate", highlights: "Mulbekh Maitreya Buddha, Namika La, moonscape landscape" },
      { segment: "Lamayuru to Leh", distance: 105, time: "3.5 hrs", roadQuality: "Moderate", highlights: "Magnetic Hill, Indus-Zanskar confluence, Leh Palace approach" },
    ],
    drivingTips: [
      "Split into 2 days: Day 1 Srinagar to Kargil (205 km), Day 2 Kargil to Leh (215 km)",
      "Zoji La Pass is the most dangerous section — narrow, unpaved, steep drops with no guardrails",
      "Stop at Kargil War Memorial (Drass) — a deeply moving tribute to India's soldiers",
      "Magnetic Hill near Leh has a gravity-defying optical illusion — stop for the famous photo",
      "This route is slightly easier on altitude than Manali-Leh — better for first-time Ladakh visitors",
    ],
    petrolStops: 4,
    foodStops: ["Sonamarg (80 km)", "Drass (145 km)", "Kargil (205 km)", "Lamayuru (305 km)"],
    seasonalWarnings: {
      winter: "Route CLOSED Dec-Apr. Zoji La is snow-bound. BRO clears it by late May usually.",
      monsoon: "Zoji La extremely dangerous in rain Jul-Aug. Landslides and mud flows are common. Avoid if possible.",
      summer: "Best time: Jun and Sep-Oct. July-Aug has rain risk at Zoji La but rest of the route is fine. October has autumn golden colors.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["manali-to-leh", "delhi-to-leh", "delhi-to-kashmir", "delhi-to-manali"],
  }),

  "amritsar-to-dharamshala": createTravelRoute({
    slug: "amritsar-to-dharamshala", origin: "Amritsar", destination: "Dharamshala", totalDistance: 200, drivingTime: "4-5 hours",
    roadMap: [
      { segment: "Amritsar to Pathankot", distance: 110, time: "2 hrs", roadQuality: "Good", highlights: "Punjab countryside, military cantonment" },
      { segment: "Pathankot to Kangra", distance: 60, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Entering Himachal, Kangra Fort, tea gardens" },
      { segment: "Kangra to Dharamshala", distance: 20, time: "40 min", roadQuality: "Good", highlights: "Dhauladhar panorama, HPCA Stadium, Tibetan settlements" },
    ],
    drivingTips: [
      "Combine Golden Temple and Dharamshala in a single trip — two completely different spiritual experiences",
      "Kangra Fort (3,500+ years old) deserves a 30-minute stop — panoramic Dhauladhar views from the top",
      "The Pathankot-Kangra stretch crosses into Himachal — landscape changes from flat to mountainous",
      "Tea estate visits are possible near Kangra — Dharamshala produces some of India's finest green tea",
      "McLeodganj above Dharamshala has better cafes, shops, and the Dalai Lama temple",
    ],
    petrolStops: 3,
    foodStops: ["Pathankot (110 km)", "Kangra (170 km)", "Dharamshala (190 km)"],
    seasonalWarnings: {
      winter: "Cold Dec-Feb. Dharamshala may have snow. Amritsar is foggy — start after 9 AM. Beautiful winter light.",
      monsoon: "Very heavy rain at Dharamshala Jul-Sep. Pathankot road is fine but mountain section can have landslides.",
      summer: "Best time Apr-Jun. Dharamshala is cool (20-28°C) while Amritsar bakes at 42°C. Perfect escape.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-dharamshala", "chandigarh-to-dharamshala", "delhi-to-amritsar", "delhi-to-mcleodganj"],
  }),

  "haridwar-to-rishikesh": createTravelRoute({
    slug: "haridwar-to-rishikesh", origin: "Haridwar", destination: "Rishikesh", totalDistance: 25, drivingTime: "40-50 minutes",
    roadMap: [
      { segment: "Haridwar to Raiwala", distance: 10, time: "20 min", roadQuality: "Good", highlights: "Flat road along canal, ashram belt, BHEL township" },
      { segment: "Raiwala to Rishikesh", distance: 15, time: "25 min", roadQuality: "Good", highlights: "Ganges appears alongside, rafting launch points, approaching yoga capital" },
    ],
    drivingTips: [
      "This is a short drive — visit both cities in a single day easily",
      "Attend Ganga Aarti at Har Ki Pauri (Haridwar) at sunset, then drive to Rishikesh for dinner",
      "Rishikesh Laxman Jhula (or new bridge) offers the most iconic photo opportunity",
      "Parking at Ram Jhula and Laxman Jhula is very limited — Tapovan area has better parking options",
      "Try the Beatles Ashram in Rishikesh — now open as an art gallery and memorial",
    ],
    petrolStops: 1,
    foodStops: ["Haridwar (0 km)", "Rishikesh (25 km)"],
    seasonalWarnings: {
      winter: "Pleasant (10-20°C). Fewer crowds. Ganga Aarti in winter is serene. Carry a light jacket for evening.",
      monsoon: "Ganga in full spate Jul-Sep. Rafting suspended. The green mountains and mist make for magical photos.",
      summer: "Warm (30-38°C) but manageable. Rafting is best Feb-May and Sep-Nov. International Yoga Festival in March.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-rishikesh", "delhi-to-dehradun", "delhi-to-mussoorie"],
  }),

  "udaipur-to-jodhpur": createTravelRoute({
    slug: "udaipur-to-jodhpur", origin: "Udaipur", destination: "Jodhpur", totalDistance: 260, drivingTime: "4-5 hours",
    roadMap: [
      { segment: "Udaipur to Gogunda", distance: 40, time: "45 min", roadQuality: "Good", highlights: "Aravalli exit, Maharana Pratap memorial, tribal villages" },
      { segment: "Gogunda to Ranakpur", distance: 60, time: "1.5 hrs", roadQuality: "Moderate", highlights: "Ranakpur Jain Temple — 1,444 pillars, each uniquely carved" },
      { segment: "Ranakpur to Pali", distance: 80, time: "1.5 hrs", roadQuality: "Good", highlights: "Descending to plains, Rajasthan rural landscape" },
      { segment: "Pali to Jodhpur", distance: 70, time: "1.5 hrs", roadQuality: "Good", highlights: "Mehrangarh Fort on horizon, Blue City approach" },
    ],
    drivingTips: [
      "Ranakpur Jain Temple (100 km from Udaipur) is an absolute must-stop — allocate 1.5 hours for it",
      "The Ranakpur temple has 1,444 hand-carved marble pillars with NO two designs alike — mind-blowing",
      "Jodhpur's Clock Tower market area is best explored on foot — incredible spice and handicraft bazaar",
      "Mirchi Vada near Clock Tower is Jodhpur's signature street food — spicy and unforgettable",
      "Mehrangarh Fort audio guide (voiced by the Maharaja) is one of India's best museum experiences",
    ],
    petrolStops: 4,
    foodStops: ["Gogunda (40 km)", "Ranakpur (100 km)", "Pali (180 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Pleasant 15-25°C. Desert sunsets are spectacular. Fort visits are comfortable.",
      monsoon: "Brief but dramatic rain Jul-Sep. Aravalli section can be slippery. Blue City with grey clouds is photogenic.",
      summer: "Extremely hot (45°C+). Not recommended. If must travel, drive early morning and stay indoors midday.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["jaipur-to-jodhpur", "jaipur-to-udaipur", "udaipur-to-jaisalmer", "jaipur-to-jaisalmer"],
  }),

  "udaipur-to-jaisalmer": createTravelRoute({
    slug: "udaipur-to-jaisalmer", origin: "Udaipur", destination: "Jaisalmer", totalDistance: 530, drivingTime: "8-9 hours",
    roadMap: [
      { segment: "Udaipur to Jodhpur", distance: 260, time: "4.5 hrs", roadQuality: "Good", highlights: "Ranakpur temples, Aravalli to desert transition" },
      { segment: "Jodhpur to Pokhran", distance: 150, time: "2.5 hrs", roadQuality: "Good", highlights: "Deep Thar Desert, nuclear test site, sparse population" },
      { segment: "Pokhran to Jaisalmer", distance: 110, time: "2 hrs", roadQuality: "Good", highlights: "Golden city mirage appears, sand dunes, fort silhouette" },
    ],
    drivingTips: [
      "This crosses the full breadth of the Thar Desert — carry minimum 5 liters water per person",
      "Stop at Jodhpur for Mehrangarh Fort or at least lunch — it is the midway point",
      "After Jodhpur, petrol stations are 60-80 km apart — never drive past one without checking your gauge",
      "Jaisalmer Fort glows golden at sunset — time your arrival for late afternoon if possible",
      "Sam Sand Dunes (40 km from Jaisalmer) for camel safari and desert camping — book ahead",
    ],
    petrolStops: 7,
    foodStops: ["Ranakpur (100 km)", "Jodhpur (260 km)", "Pokhran (410 km)"],
    seasonalWarnings: {
      winter: "Best time (Oct-Feb). Desert nights are 5°C — carry woolens for desert camp. Days are sunny and pleasant.",
      monsoon: "Rare rain transforms desert to green Jul-Aug. Roads can flood briefly. Beautiful but unpredictable.",
      summer: "Extreme heat (48°C+). Travel ONLY in AC vehicle. Carry extra water. Not recommended for tourists.",
    },
    bestCarType: "SUV (Innova/Ertiga)",
    relatedRoutes: ["jaipur-to-jaisalmer", "udaipur-to-jodhpur", "jaipur-to-udaipur", "jaipur-to-jodhpur"],
  }),

  "varanasi-to-ayodhya": createTravelRoute({
    slug: "varanasi-to-ayodhya", origin: "Varanasi", destination: "Ayodhya", totalDistance: 200, drivingTime: "4-5 hours",
    roadMap: [
      { segment: "Varanasi to Jaunpur", distance: 65, time: "1.5 hrs", roadQuality: "Good", highlights: "Jaunpur Shahi Bridge, Atala Mosque, Sharqi architecture" },
      { segment: "Jaunpur to Sultanpur", distance: 80, time: "1.5 hrs", roadQuality: "Good", highlights: "UP heartland, flat agricultural landscape" },
      { segment: "Sultanpur to Faizabad", distance: 50, time: "1 hr", roadQuality: "Good", highlights: "Approaching Ayodhya twin city, historical Faizabad" },
      { segment: "Faizabad to Ayodhya", distance: 10, time: "20 min", roadQuality: "Good", highlights: "Ram Mandir domes visible, new pilgrim infrastructure" },
    ],
    drivingTips: [
      "Combine Varanasi and Ayodhya for the ultimate spiritual road trip in UP",
      "New highway connectivity has made this drive much smoother than before",
      "Visit Ram Mandir early morning to avoid long queues — afternoon waits can exceed 2-3 hours",
      "Saryu River aarti in Ayodhya is gaining fame — attend it at sunset for a spiritual experience",
      "Carry modest clothing for both cities — temples have dress code expectations",
    ],
    petrolStops: 3,
    foodStops: ["Jaunpur (65 km)", "Sultanpur (145 km)", "Faizabad (195 km)"],
    seasonalWarnings: {
      winter: "Best for pilgrimage (Oct-Feb). Both cities have major festivals in winter — Diwali in Ayodhya is spectacular.",
      monsoon: "Both rivers in spate Jul-Sep. Roads fine but ghat access limited. Ram Navami (Mar/Apr) draws millions.",
      summer: "Hot (42°C+) but manageable with AC cab. Morning visits to temples, afternoon rest, evening aarti schedule works.",
    },
    bestCarType: "Sedan (Swift Dzire)",
    relatedRoutes: ["lucknow-to-ayodhya", "lucknow-to-varanasi", "delhi-to-varanasi", "delhi-to-ayodhya"],
  }),
};

// ═══════════════════════════════════════════
// EXPORT FUNCTIONS
// ═══════════════════════════════════════════

export function getTravelByCarRoute(slug) {
  return travelByCarRoutes[slug] || null;
}

export function getAllTravelByCarSlugs() {
  return Object.keys(travelByCarRoutes);
}

export function getRelatedTravelByCarRoutes(slug) {
  const route = travelByCarRoutes[slug];
  if (!route) return [];
  return route.relatedRoutes
    .map(rs => travelByCarRoutes[rs])
    .filter(Boolean)
    .slice(0, 4);
}
