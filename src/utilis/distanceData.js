// src/utilis/distanceData.js - Complete data for 100 distance & travel guide pages
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
  };
}

function generateFaqs(origin, dest, distKm, duration, highway, sedanFare) {
  return [
    { question: `What is the distance from ${origin} to ${dest} by road?`, answer: `The road distance from ${origin} to ${dest} is approximately ${distKm} km via ${highway}. The driving time is ${duration} depending on traffic and weather conditions.` },
    { question: `How much does a cab from ${origin} to ${dest} cost?`, answer: `A cab from ${origin} to ${dest} starts at ${sedanFare} for an AC Sedan. SUV (Innova/Ertiga) starts at ₹${Math.max(distKm, 300) * 14}. Toll and state tax extra at actual.` },
    { question: `How long does it take to drive from ${origin} to ${dest}?`, answer: `The drive from ${origin} to ${dest} takes approximately ${duration} via ${highway}. Starting early morning (5-6 AM) helps avoid traffic and reduces travel time.` },
    { question: `What is the best route from ${origin} to ${dest}?`, answer: `The recommended route is via ${highway}. This offers the best road conditions and shortest travel time. Our experienced drivers know all the routes and will choose the optimal path based on current conditions.` },
    { question: `Can I book a one-way cab from ${origin} to ${dest}?`, answer: `Yes, Triveni Cabs offers both one-way and round-trip cab service from ${origin} to ${dest}. One-way cab saves you up to 50% compared to round-trip when you need only a single direction drop.` },
    { question: `Is it safe to drive from ${origin} to ${dest} at night?`, answer: `The ${highway} route is well-lit on highway sections, but we recommend daytime travel for the safest experience. Our drivers are experienced in night driving if needed, and all vehicles have GPS tracking.` },
    { question: `What vehicles are available for ${origin} to ${dest}?`, answer: `We offer Sedan (Swift Dzire/Etios), SUV (Innova/Ertiga), and Tempo Traveller (12-seater) for the ${origin} to ${dest} route. All vehicles are AC, well-maintained, and GPS-equipped.` },
    { question: `Are toll charges included in the ${origin} to ${dest} cab fare?`, answer: `Toll charges and state tax are extra and paid at actual during the journey. Our driver handles all toll payments. You can also check our toll cost page for an estimate.` },
  ];
}

function createRoute({ slug, origin, destination, distanceKm, duration, highway, bestRoute, majorStops, tollPlazas, roadCondition, bestTime, localTip, relatedRoutes }) {
  const fares = calcFares(distanceKm);
  return {
    slug,
    origin,
    destination,
    distance: { km: distanceKm, miles: Math.round(distanceKm * 0.621) },
    duration,
    highway,
    bestRoute: bestRoute || `${origin} → ${majorStops.join(' → ')} → ${destination}`,
    ...fares,
    majorStops,
    tollPlazas: tollPlazas || [],
    roadCondition: roadCondition || 'Good highway roads for most of the journey.',
    bestTime: bestTime || 'October to March for pleasant weather',
    localTip: localTip || `Start early morning (5-6 AM) from ${origin} to avoid traffic.`,
    relatedRoutes: relatedRoutes || [],
    faqs: generateFaqs(origin, destination, distanceKm, duration, highway, fares.cabFares.sedan),
  };
}

export const distanceRoutes = {
  // ═══════════════════════════════════════════
  // DELHI ORIGIN ROUTES (30 routes)
  // ═══════════════════════════════════════════
  "delhi-to-manali": createRoute({
    slug: "delhi-to-manali", origin: "Delhi", destination: "Manali", distanceKm: 530, duration: "12-13 hours",
    highway: "NH-44 & NH-21", majorStops: ["Karnal", "Chandigarh", "Bilaspur", "Mandi", "Kullu"],
    tollPlazas: [
      { name: "Panipat Toll", km: 90, cost: 165 }, { name: "Karnal Toll", km: 130, cost: 130 },
      { name: "Ambala Toll", km: 200, cost: 95 }, { name: "Bilaspur Toll", km: 340, cost: 65 },
    ],
    roadCondition: "NH-44 is excellent 4-lane highway till Chandigarh. After Bilaspur, mountain roads begin with hairpin bends. Road quality is good but narrow in some stretches near Mandi.",
    bestTime: "March to June, September to November. Avoid July-August (landslides) and Dec-Feb (snow may block roads).",
    localTip: "Stop at Murthal (40 km from Delhi) for famous paranthas. Carry warm clothes even in summer as Manali evenings are cool.",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-kasol", "delhi-to-dharamshala", "chandigarh-to-manali"],
  }),
  "delhi-to-shimla": createRoute({
    slug: "delhi-to-shimla", origin: "Delhi", destination: "Shimla", distanceKm: 350, duration: "7-8 hours",
    highway: "NH-44 & NH-5", majorStops: ["Karnal", "Ambala", "Pinjore", "Solan"],
    tollPlazas: [
      { name: "Panipat Toll", km: 90, cost: 165 }, { name: "Karnal Toll", km: 130, cost: 130 },
      { name: "Ambala Toll", km: 200, cost: 95 },
    ],
    roadCondition: "Excellent highway till Pinjore. Mountain roads after Kalka are well-maintained but winding.",
    bestTime: "March to June for pleasant weather, December to February for snowfall experience.",
    localTip: "The Kalka-Shimla mountain stretch is scenic. Stop at Barog for tea and views.",
    relatedRoutes: ["delhi-to-manali", "delhi-to-kasol", "shimla-to-manali", "delhi-to-chandigarh"],
  }),
  "delhi-to-jaipur": createRoute({
    slug: "delhi-to-jaipur", origin: "Delhi", destination: "Jaipur", distanceKm: 280, duration: "4-5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)", majorStops: ["Gurgaon", "Neemrana", "Behror", "Shahpura"],
    tollPlazas: [
      { name: "Kherki Daula Toll", km: 30, cost: 130 }, { name: "Manesar Toll", km: 55, cost: 85 },
      { name: "Shahjahanpur Toll", km: 160, cost: 185 },
    ],
    roadCondition: "Excellent 6-lane expressway the entire way. One of India's best highways.",
    bestTime: "October to March for pleasant weather. Avoid May-June extreme heat.",
    localTip: "Stop at Neemrana Fort (120 km from Delhi) for a quick heritage visit. Behror has good food stops.",
    relatedRoutes: ["delhi-to-agra", "delhi-to-udaipur", "delhi-to-jodhpur", "jaipur-to-udaipur"],
  }),
  "delhi-to-agra": createRoute({
    slug: "delhi-to-agra", origin: "Delhi", destination: "Agra", distanceKm: 230, duration: "3-4 hours",
    highway: "Yamuna Expressway", majorStops: ["Greater Noida", "Mathura"],
    tollPlazas: [
      { name: "Jewar Toll", km: 60, cost: 155 }, { name: "Mathura Toll", km: 160, cost: 130 },
    ],
    roadCondition: "Yamuna Expressway is a world-class 6-lane highway. Smooth, fast, excellent road.",
    bestTime: "October to March. Avoid peak summer heat (May-June).",
    localTip: "Leave by 5 AM to reach Agra for sunrise at Taj Mahal. Stop at Mathura for famous peda sweets.",
    relatedRoutes: ["delhi-to-jaipur", "agra-to-jaipur", "delhi-to-mathura", "agra-to-fatehpur-sikri"],
  }),
  "delhi-to-haridwar": createRoute({
    slug: "delhi-to-haridwar", origin: "Delhi", destination: "Haridwar", distanceKm: 230, duration: "5-6 hours",
    highway: "NH-334 via Delhi-Meerut Expressway", majorStops: ["Meerut", "Muzaffarnagar", "Roorkee"],
    tollPlazas: [
      { name: "Meerut Toll", km: 70, cost: 120 }, { name: "Muzaffarnagar Toll", km: 130, cost: 95 },
    ],
    roadCondition: "Delhi-Meerut Expressway is excellent. After Meerut, road is good but can have truck traffic.",
    bestTime: "Year-round destination. October to March for pleasant weather. Monsoon for lush Ganga views.",
    localTip: "Leave by 3 PM from Delhi to arrive in time for the famous Ganga Aarti at Har Ki Pauri (6-7 PM).",
    relatedRoutes: ["delhi-to-rishikesh", "delhi-to-dehradun", "haridwar-to-rishikesh", "delhi-to-mussoorie"],
  }),
  "delhi-to-rishikesh": createRoute({
    slug: "delhi-to-rishikesh", origin: "Delhi", destination: "Rishikesh", distanceKm: 250, duration: "5-6 hours",
    highway: "NH-334 via Delhi-Meerut Expressway", majorStops: ["Meerut", "Muzaffarnagar", "Roorkee", "Haridwar"],
    roadCondition: "Good highway till Haridwar, then scenic road along the Ganges to Rishikesh.",
    bestTime: "September to November and February to May. Monsoon is lush but risky for river activities.",
    localTip: "Rishikesh is 25 km beyond Haridwar. Visit Laxman Jhula and attend evening Ganga Aarti at Triveni Ghat.",
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-dehradun", "rishikesh-to-dehradun", "delhi-to-mussoorie"],
  }),
  "delhi-to-chandigarh": createRoute({
    slug: "delhi-to-chandigarh", origin: "Delhi", destination: "Chandigarh", distanceKm: 250, duration: "4-5 hours",
    highway: "NH-44 (GT Road)", majorStops: ["Panipat", "Karnal", "Ambala"],
    tollPlazas: [
      { name: "Panipat Toll", km: 90, cost: 165 }, { name: "Karnal Toll", km: 130, cost: 130 },
      { name: "Ambala Toll", km: 200, cost: 95 },
    ],
    roadCondition: "NH-44 is a well-maintained 4-6 lane highway. Smooth journey throughout.",
    bestTime: "October to March for pleasant weather. Gateway to Shimla and Manali.",
    localTip: "Chandigarh is the gateway to hill stations. Rock Garden and Sukhna Lake are must-visit.",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "chandigarh-to-shimla", "chandigarh-to-manali"],
  }),
  "delhi-to-amritsar": createRoute({
    slug: "delhi-to-amritsar", origin: "Delhi", destination: "Amritsar", distanceKm: 450, duration: "7-8 hours",
    highway: "NH-44 (GT Road)", majorStops: ["Karnal", "Ambala", "Ludhiana", "Jalandhar"],
    roadCondition: "NH-44 is mostly 4-lane. Some congestion near Ludhiana and Jalandhar.",
    bestTime: "October to March for comfortable weather. Diwali and Baisakhi are special times to visit.",
    localTip: "Visit Golden Temple early morning for the most peaceful experience. Don't miss langar (free community meal).",
    relatedRoutes: ["delhi-to-chandigarh", "amritsar-to-dharamshala", "amritsar-to-wagah-border"],
  }),
  "delhi-to-nainital": createRoute({
    slug: "delhi-to-nainital", origin: "Delhi", destination: "Nainital", distanceKm: 300, duration: "6-7 hours",
    highway: "NH-9 via Moradabad", majorStops: ["Ghaziabad", "Moradabad", "Rampur", "Haldwani"],
    roadCondition: "Highway is good till Haldwani. Mountain road to Nainital (30 km) has hairpin bends.",
    bestTime: "March to June and September to November. Winter is cold but beautiful for snow views.",
    localTip: "The last 30 km from Haldwani to Nainital is very scenic. Naini Lake boating is a must-do.",
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-corbett", "delhi-to-lansdowne", "dehradun-to-nainital"],
  }),
  "delhi-to-mussoorie": createRoute({
    slug: "delhi-to-mussoorie", origin: "Delhi", destination: "Mussoorie", distanceKm: 290, duration: "6-7 hours",
    highway: "NH-334 via Meerut & Dehradun", majorStops: ["Meerut", "Muzaffarnagar", "Roorkee", "Dehradun"],
    roadCondition: "Good highway till Dehradun. Mountain road from Dehradun to Mussoorie (35 km) is scenic and winding.",
    bestTime: "March to June for pleasant weather. October-November for clear mountain views.",
    localTip: "Mussoorie is called 'Queen of Hills'. Visit Kempty Falls and Mall Road. Dehradun to Mussoorie last stretch is very scenic.",
    relatedRoutes: ["delhi-to-dehradun", "delhi-to-rishikesh", "dehradun-to-mussoorie", "delhi-to-nainital"],
  }),
  "delhi-to-dehradun": createRoute({
    slug: "delhi-to-dehradun", origin: "Delhi", destination: "Dehradun", distanceKm: 255, duration: "5-6 hours",
    highway: "NH-334 via Delhi-Meerut Expressway", majorStops: ["Meerut", "Muzaffarnagar", "Roorkee"],
    roadCondition: "Delhi-Meerut Expressway is excellent. Good roads throughout the route.",
    bestTime: "Year-round destination. March to June and September to November are ideal.",
    localTip: "Dehradun is gateway to Mussoorie (35 km) and Uttarakhand hill stations. Robber's Cave is a unique attraction.",
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-rishikesh", "delhi-to-haridwar", "dehradun-to-mussoorie"],
  }),
  "delhi-to-mcleodganj": createRoute({
    slug: "delhi-to-mcleodganj", origin: "Delhi", destination: "McLeodganj", distanceKm: 480, duration: "9-10 hours",
    highway: "NH-44 & NH-20", majorStops: ["Karnal", "Ambala", "Rupnagar", "Una", "Kangra"],
    roadCondition: "Good highway till Ambala. Mountain roads after Kangra are scenic but narrow in parts.",
    bestTime: "March to June and September to November. Monsoon has landslide risks.",
    localTip: "McLeodganj is the home of Dalai Lama. Visit Bhagsu Falls and Triund trek starting point.",
    relatedRoutes: ["delhi-to-dharamshala", "delhi-to-kasol", "delhi-to-dalhousie", "chandigarh-to-dharamshala"],
  }),
  "delhi-to-kasol": createRoute({
    slug: "delhi-to-kasol", origin: "Delhi", destination: "Kasol", distanceKm: 520, duration: "11-12 hours",
    highway: "NH-44 via Chandigarh & Mandi", majorStops: ["Chandigarh", "Bilaspur", "Mandi", "Bhuntar"],
    roadCondition: "Good highway till Chandigarh. Mountain roads after Mandi. Narrow roads near Kasol.",
    bestTime: "March to June and September to November. Avoid monsoon (July-August).",
    localTip: "Kasol is known as 'Mini Israel of India'. Visit Kheerganga trek and Manikaran hot springs.",
    relatedRoutes: ["delhi-to-manali", "delhi-to-dharamshala", "chandigarh-to-kasol"],
  }),
  "delhi-to-dharamshala": createRoute({
    slug: "delhi-to-dharamshala", origin: "Delhi", destination: "Dharamshala", distanceKm: 475, duration: "9-10 hours",
    highway: "NH-44 & NH-20", majorStops: ["Karnal", "Ambala", "Rupnagar", "Una"],
    roadCondition: "Good highway till Ambala. Well-maintained mountain roads after Una.",
    bestTime: "March to June and September to November. Beautiful in spring with rhododendrons.",
    localTip: "Dharamshala has two parts: lower Dharamshala and upper McLeodganj. Most tourists stay in McLeodganj.",
    relatedRoutes: ["delhi-to-mcleodganj", "delhi-to-dalhousie", "chandigarh-to-dharamshala"],
  }),
  "delhi-to-varanasi": createRoute({
    slug: "delhi-to-varanasi", origin: "Delhi", destination: "Varanasi", distanceKm: 820, duration: "12-14 hours",
    highway: "NH-19 (Grand Trunk Road) via Agra & Lucknow", majorStops: ["Agra", "Kanpur", "Lucknow", "Sultanpur"],
    roadCondition: "Mix of expressway and national highway. Agra to Lucknow via expressway is excellent.",
    bestTime: "October to March for pleasant weather. Dev Deepawali (November) is magical in Varanasi.",
    localTip: "Book overnight cab with a halt. Ganga Aarti at Dashashwamedh Ghat is a must-see.",
    relatedRoutes: ["delhi-to-lucknow", "delhi-to-ayodhya", "lucknow-to-varanasi", "varanasi-to-ayodhya"],
  }),
  "delhi-to-lucknow": createRoute({
    slug: "delhi-to-lucknow", origin: "Delhi", destination: "Lucknow", distanceKm: 550, duration: "8-9 hours",
    highway: "Agra-Lucknow Expressway via Yamuna Expressway", majorStops: ["Agra", "Firozabad", "Etawah", "Kannauj"],
    roadCondition: "Yamuna + Agra-Lucknow Expressway makes this a fast route. Excellent highway.",
    bestTime: "October to March. Visit during Lucknow Mahotsav for cultural experience.",
    localTip: "Lucknow is famous for Tunday Kebabi and Chikan embroidery. Bara Imambara is a must-visit.",
    relatedRoutes: ["delhi-to-varanasi", "delhi-to-ayodhya", "lucknow-to-varanasi", "lucknow-to-ayodhya"],
  }),
  "delhi-to-ayodhya": createRoute({
    slug: "delhi-to-ayodhya", origin: "Delhi", destination: "Ayodhya", distanceKm: 630, duration: "9-10 hours",
    highway: "Yamuna + Agra-Lucknow Expressway + NH-330", majorStops: ["Agra", "Lucknow", "Barabanki"],
    roadCondition: "Excellent expressways for most of the route. Last 130 km from Lucknow is good NH.",
    bestTime: "October to March. Ram Navami and Deepotsav are grand celebrations in Ayodhya.",
    localTip: "Visit the Ram Janmabhoomi Temple, Hanuman Garhi, and Saryu River Ghat for evening aarti.",
    relatedRoutes: ["delhi-to-lucknow", "delhi-to-varanasi", "lucknow-to-ayodhya", "varanasi-to-ayodhya"],
  }),
  "delhi-to-udaipur": createRoute({
    slug: "delhi-to-udaipur", origin: "Delhi", destination: "Udaipur", distanceKm: 660, duration: "10-11 hours",
    highway: "NH-48 via Jaipur & Ajmer", majorStops: ["Jaipur", "Ajmer", "Beawar", "Rajsamand"],
    roadCondition: "Good 4-lane highway. Some stretches after Ajmer are 2-lane.",
    bestTime: "October to March for the best lake experience and comfortable weather.",
    localTip: "Udaipur is the 'City of Lakes'. Stay near Lake Pichola for the best experience. Sunset boat ride is magical.",
    relatedRoutes: ["delhi-to-jaipur", "jaipur-to-udaipur", "udaipur-to-jodhpur", "udaipur-to-mount-abu"],
  }),
  "delhi-to-jodhpur": createRoute({
    slug: "delhi-to-jodhpur", origin: "Delhi", destination: "Jodhpur", distanceKm: 590, duration: "9-10 hours",
    highway: "NH-48 via Jaipur & Ajmer", majorStops: ["Jaipur", "Ajmer", "Beawar", "Pali"],
    roadCondition: "NH-48 is good till Ajmer. Mixed road quality after Ajmer.",
    bestTime: "October to March. Rajasthan International Folk Festival (RIFF) in October is special.",
    localTip: "Jodhpur is the 'Blue City'. Mehrangarh Fort and blue houses view at sunrise is incredible.",
    relatedRoutes: ["delhi-to-jaipur", "delhi-to-jaisalmer", "jodhpur-to-jaisalmer", "jaipur-to-jodhpur"],
  }),
  "delhi-to-jaisalmer": createRoute({
    slug: "delhi-to-jaisalmer", origin: "Delhi", destination: "Jaisalmer", distanceKm: 780, duration: "12-13 hours",
    highway: "NH-48 via Jaipur & Jodhpur", majorStops: ["Jaipur", "Jodhpur", "Pokhran"],
    roadCondition: "Good highway to Jodhpur. Jodhpur to Jaisalmer stretch passes through desert terrain.",
    bestTime: "October to March. Desert Festival in February is a unique experience.",
    localTip: "Book a night halt in Jodhpur for comfortable travel. Sam Sand Dunes sunset is unforgettable.",
    relatedRoutes: ["delhi-to-jodhpur", "jaipur-to-jaisalmer", "jodhpur-to-jaisalmer"],
  }),
  "delhi-to-pushkar": createRoute({
    slug: "delhi-to-pushkar", origin: "Delhi", destination: "Pushkar", distanceKm: 400, duration: "7-8 hours",
    highway: "NH-48 via Jaipur", majorStops: ["Jaipur", "Ajmer"],
    roadCondition: "Good highway. Pushkar is 14 km from Ajmer via a scenic mountain pass.",
    bestTime: "October to March. Pushkar Camel Fair (November) is world-famous.",
    localTip: "Pushkar is one of the holiest towns for Hindus. Brahma Temple is the only one in the world.",
    relatedRoutes: ["delhi-to-jaipur", "delhi-to-ajmer", "jaipur-to-pushkar"],
  }),
  "delhi-to-ajmer": createRoute({
    slug: "delhi-to-ajmer", origin: "Delhi", destination: "Ajmer", distanceKm: 390, duration: "6-7 hours",
    highway: "NH-48 via Jaipur", majorStops: ["Jaipur", "Dudu"],
    roadCondition: "Excellent highway throughout. Fast and comfortable journey.",
    bestTime: "October to March. Urs Festival at Ajmer Dargah attracts pilgrims worldwide.",
    localTip: "Visit Ajmer Sharif Dargah and then head to Pushkar (14 km) for Brahma Temple.",
    relatedRoutes: ["delhi-to-pushkar", "delhi-to-jaipur", "jaipur-to-ajmer"],
  }),
  "delhi-to-corbett": createRoute({
    slug: "delhi-to-corbett", origin: "Delhi", destination: "Jim Corbett", distanceKm: 260, duration: "5-6 hours",
    highway: "NH-9 via Moradabad", majorStops: ["Ghaziabad", "Moradabad", "Kashipur", "Ramnagar"],
    roadCondition: "Good highway till Moradabad. Road to Ramnagar is scenic and well-maintained.",
    bestTime: "November to June. Park closed during monsoon (July-September). Winter is best for tiger sighting.",
    localTip: "Book safari permits in advance. Bijrani and Dhikala zones are best for tiger sighting.",
    relatedRoutes: ["delhi-to-nainital", "delhi-to-lansdowne"],
  }),
  "delhi-to-lansdowne": createRoute({
    slug: "delhi-to-lansdowne", origin: "Delhi", destination: "Lansdowne", distanceKm: 270, duration: "6-7 hours",
    highway: "NH-334 via Kotdwar", majorStops: ["Meerut", "Bijnor", "Kotdwar"],
    roadCondition: "Mixed road quality. Good highway initially, mountain roads after Kotdwar.",
    bestTime: "March to June and September to November. Less crowded alternative to Mussoorie.",
    localTip: "Lansdowne is a quiet cantonment hill station. Tip N Top viewpoint offers Himalayan panorama.",
    relatedRoutes: ["delhi-to-nainital", "delhi-to-corbett", "delhi-to-rishikesh"],
  }),
  "delhi-to-dalhousie": createRoute({
    slug: "delhi-to-dalhousie", origin: "Delhi", destination: "Dalhousie", distanceKm: 560, duration: "10-11 hours",
    highway: "NH-44 via Pathankot", majorStops: ["Karnal", "Ambala", "Ludhiana", "Jalandhar", "Pathankot"],
    roadCondition: "Good highway till Pathankot. Mountain road from Pathankot to Dalhousie is scenic.",
    bestTime: "March to June and September to November. December-February for snowfall.",
    localTip: "Dalhousie is less commercialized than Shimla/Manali. Visit Khajjiar, the 'Mini Switzerland of India'.",
    relatedRoutes: ["delhi-to-amritsar", "delhi-to-dharamshala", "amritsar-to-dharamshala"],
  }),
  "delhi-to-mathura": createRoute({
    slug: "delhi-to-mathura", origin: "Delhi", destination: "Mathura", distanceKm: 180, duration: "2.5-3 hours",
    highway: "Yamuna Expressway", majorStops: ["Greater Noida"],
    roadCondition: "Yamuna Expressway is a world-class 6-lane highway. Smooth, fast journey.",
    bestTime: "Year-round. Holi in Mathura/Vrindavan is the most famous celebration in India.",
    localTip: "Mathura is birthplace of Lord Krishna. Visit Krishna Janmabhoomi and Vishram Ghat.",
    relatedRoutes: ["delhi-to-agra", "delhi-to-vrindavan"],
  }),
  "delhi-to-vrindavan": createRoute({
    slug: "delhi-to-vrindavan", origin: "Delhi", destination: "Vrindavan", distanceKm: 185, duration: "3-3.5 hours",
    highway: "Yamuna Expressway", majorStops: ["Greater Noida", "Mathura"],
    roadCondition: "Excellent expressway to Mathura, then 15 km to Vrindavan.",
    bestTime: "Year-round. Janmashtami and Holi are the grandest celebrations.",
    localTip: "Visit Prem Mandir (illuminated at night), Banke Bihari Temple, and ISKCON Temple.",
    relatedRoutes: ["delhi-to-mathura", "delhi-to-agra"],
  }),
  "delhi-to-bareilly": createRoute({
    slug: "delhi-to-bareilly", origin: "Delhi", destination: "Bareilly", distanceKm: 260, duration: "5-6 hours",
    highway: "NH-9", majorStops: ["Ghaziabad", "Moradabad"],
    roadCondition: "Good national highway. Some congestion near Moradabad.",
    bestTime: "October to March for comfortable travel.",
    localTip: "Bareilly is famous for Zari-Zardozi work and Alakhnath Temple.",
    relatedRoutes: ["delhi-to-nainital", "delhi-to-corbett"],
  }),
  "delhi-to-moradabad": createRoute({
    slug: "delhi-to-moradabad", origin: "Delhi", destination: "Moradabad", distanceKm: 170, duration: "3-4 hours",
    highway: "NH-9", majorStops: ["Ghaziabad", "Hapur"],
    roadCondition: "Good highway throughout. Can have truck traffic near Moradabad.",
    bestTime: "October to March.",
    localTip: "Moradabad is the 'Brass City of India'. Good stopover en route to Nainital.",
    relatedRoutes: ["delhi-to-nainital", "delhi-to-bareilly"],
  }),
  "delhi-to-meerut": createRoute({
    slug: "delhi-to-meerut", origin: "Delhi", destination: "Meerut", distanceKm: 70, duration: "1-1.5 hours",
    highway: "Delhi-Meerut Expressway", majorStops: [],
    roadCondition: "Brand new 14-lane Delhi-Meerut Expressway. India's widest highway.",
    bestTime: "Year-round.",
    localTip: "Meerut is famous for sports goods manufacturing. Quick day trip from Delhi.",
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-rishikesh"],
  }),
  "delhi-to-noida": createRoute({
    slug: "delhi-to-noida", origin: "Delhi", destination: "Noida", distanceKm: 25, duration: "30-60 minutes",
    highway: "DND Flyway / Noida-Greater Noida Expressway", majorStops: [],
    roadCondition: "Excellent urban expressway.",
    bestTime: "Year-round.",
    localTip: "Use DND Flyway or Kalindi Kunj for quickest access.",
    relatedRoutes: ["delhi-to-agra", "noida-to-agra", "delhi-to-gurgaon"],
  }),
  "delhi-to-gurgaon": createRoute({
    slug: "delhi-to-gurgaon", origin: "Delhi", destination: "Gurgaon", distanceKm: 30, duration: "30-60 minutes",
    highway: "NH-48", majorStops: [],
    roadCondition: "Excellent urban highway. Heavy traffic during office hours.",
    bestTime: "Year-round. Avoid Monday morning and Friday evening traffic.",
    localTip: "Gurgaon is India's corporate hub. Cyber Hub for dining, Kingdom of Dreams for entertainment.",
    relatedRoutes: ["delhi-to-jaipur", "gurgaon-to-jaipur", "delhi-to-noida"],
  }),
  "delhi-to-faridabad": createRoute({
    slug: "delhi-to-faridabad", origin: "Delhi", destination: "Faridabad", distanceKm: 30, duration: "30-60 minutes",
    highway: "Mathura Road / Faridabad-Noida Expressway", majorStops: [],
    roadCondition: "Good urban roads. Multiple route options available.",
    bestTime: "Year-round.",
    localTip: "Surajkund Crafts Fair in February is a major cultural event.",
    relatedRoutes: ["delhi-to-agra", "delhi-to-noida"],
  }),
  "delhi-to-ghaziabad": createRoute({
    slug: "delhi-to-ghaziabad", origin: "Delhi", destination: "Ghaziabad", distanceKm: 25, duration: "30-50 minutes",
    highway: "NH-9 / NH-24", majorStops: [],
    roadCondition: "Urban highway. Heavy traffic during peak hours.",
    bestTime: "Year-round.",
    localTip: "Gateway to western UP. Good connectivity to Meerut and Moradabad.",
    relatedRoutes: ["delhi-to-meerut", "delhi-to-noida"],
  }),
  "delhi-to-karnal": createRoute({
    slug: "delhi-to-karnal", origin: "Delhi", destination: "Karnal", distanceKm: 130, duration: "2-2.5 hours",
    highway: "NH-44 (GT Road)", majorStops: ["Panipat"],
    roadCondition: "Excellent 4-6 lane NH-44. One of India's best maintained highways.",
    bestTime: "Year-round. Karnal lake is pleasant October to March.",
    localTip: "Karnal is a good midway stop on Delhi-Chandigarh route. Famous for its dairy products.",
    relatedRoutes: ["delhi-to-chandigarh", "delhi-to-panipat"],
  }),
  "delhi-to-panipat": createRoute({
    slug: "delhi-to-panipat", origin: "Delhi", destination: "Panipat", distanceKm: 90, duration: "1.5-2 hours",
    highway: "NH-44 (GT Road)", majorStops: [],
    roadCondition: "Excellent NH-44 highway.",
    bestTime: "October to March. Visit Panipat battle memorial.",
    localTip: "Historic city of three major battles. Known for handloom industry.",
    relatedRoutes: ["delhi-to-karnal", "delhi-to-chandigarh"],
  }),
  "delhi-to-aligarh": createRoute({
    slug: "delhi-to-aligarh", origin: "Delhi", destination: "Aligarh", distanceKm: 140, duration: "2.5-3 hours",
    highway: "Yamuna Expressway / NH-91", majorStops: ["Greater Noida"],
    roadCondition: "Good highway. Yamuna Expressway makes it a fast drive.",
    bestTime: "October to March.",
    localTip: "Aligarh is home to Aligarh Muslim University. Famous for lock-making industry.",
    relatedRoutes: ["delhi-to-agra", "delhi-to-mathura"],
  }),
  "delhi-to-rohtak": createRoute({
    slug: "delhi-to-rohtak", origin: "Delhi", destination: "Rohtak", distanceKm: 70, duration: "1-1.5 hours",
    highway: "NH-9 / Delhi-Rohtak Expressway", majorStops: [],
    roadCondition: "Good highway. Delhi-Rohtak expressway under development.",
    bestTime: "Year-round.",
    localTip: "Rohtak is an important city in Haryana. Tilyar Lake is a nice spot for a break.",
    relatedRoutes: ["delhi-to-chandigarh", "delhi-to-jaipur"],
  }),
  "delhi-to-sonipat": createRoute({
    slug: "delhi-to-sonipat", origin: "Delhi", destination: "Sonipat", distanceKm: 45, duration: "45-60 minutes",
    highway: "NH-44 (GT Road)", majorStops: [],
    roadCondition: "Excellent NH-44. Short commute distance.",
    bestTime: "Year-round.",
    localTip: "Gateway to Haryana. Upcoming Kundli-Manesar-Palwal (KMP) expressway hub.",
    relatedRoutes: ["delhi-to-panipat", "delhi-to-karnal"],
  }),

  // ═══════════════════════════════════════════
  // JAIPUR ORIGIN ROUTES (10 routes)
  // ═══════════════════════════════════════════
  "jaipur-to-udaipur": createRoute({
    slug: "jaipur-to-udaipur", origin: "Jaipur", destination: "Udaipur", distanceKm: 395, duration: "6-7 hours",
    highway: "NH-48 via Ajmer & Beawar", majorStops: ["Ajmer", "Beawar", "Rajsamand"],
    roadCondition: "Good 4-lane highway. Scenic drive through Aravalli range.",
    bestTime: "October to March. Monsoon makes the lakes beautiful.",
    localTip: "Stop at Ajmer (130 km) or Pushkar for a break. Chittorgarh is a detour-worthy fort.",
    relatedRoutes: ["jaipur-to-jodhpur", "udaipur-to-jodhpur", "delhi-to-udaipur"],
  }),
  "jaipur-to-jodhpur": createRoute({
    slug: "jaipur-to-jodhpur", origin: "Jaipur", destination: "Jodhpur", distanceKm: 340, duration: "5-6 hours",
    highway: "NH-62 via Ajmer", majorStops: ["Ajmer", "Beawar", "Pali"],
    roadCondition: "Good highway. Terrain becomes increasingly arid as you approach Jodhpur.",
    bestTime: "October to March. Desert landscape is mesmerizing.",
    localTip: "Mehrangarh Fort in Jodhpur is one of India's most magnificent forts. Blue City view from the top is iconic.",
    relatedRoutes: ["jaipur-to-jaisalmer", "jaipur-to-udaipur", "jodhpur-to-jaisalmer"],
  }),
  "jaipur-to-jaisalmer": createRoute({
    slug: "jaipur-to-jaisalmer", origin: "Jaipur", destination: "Jaisalmer", distanceKm: 560, duration: "8-9 hours",
    highway: "NH-62 via Jodhpur", majorStops: ["Ajmer", "Jodhpur", "Pokhran"],
    roadCondition: "Good highway to Jodhpur. Jodhpur to Jaisalmer passes through Thar Desert.",
    bestTime: "October to March. Desert Festival in February is must-attend.",
    localTip: "Break journey at Jodhpur. Sam Sand Dunes camel ride and desert camping are unforgettable.",
    relatedRoutes: ["jaipur-to-jodhpur", "jodhpur-to-jaisalmer", "delhi-to-jaisalmer"],
  }),
  "jaipur-to-ajmer": createRoute({
    slug: "jaipur-to-ajmer", origin: "Jaipur", destination: "Ajmer", distanceKm: 135, duration: "2-2.5 hours",
    highway: "NH-48", majorStops: ["Dudu"],
    roadCondition: "Excellent highway. Quick, comfortable drive.",
    bestTime: "October to March. Urs Festival is spiritually powerful.",
    localTip: "Combine Ajmer and Pushkar (14 km further) for a complete spiritual experience.",
    relatedRoutes: ["jaipur-to-pushkar", "delhi-to-ajmer"],
  }),
  "jaipur-to-pushkar": createRoute({
    slug: "jaipur-to-pushkar", origin: "Jaipur", destination: "Pushkar", distanceKm: 150, duration: "2.5-3 hours",
    highway: "NH-48 via Ajmer", majorStops: ["Ajmer"],
    roadCondition: "Good highway to Ajmer, then scenic mountain pass to Pushkar.",
    bestTime: "October to March. Pushkar Camel Fair (November) is world-famous.",
    localTip: "Visit Brahma Temple and take a holy dip in Pushkar Lake. Stay for sunset at the ghats.",
    relatedRoutes: ["jaipur-to-ajmer", "delhi-to-pushkar"],
  }),
  "jaipur-to-agra": createRoute({
    slug: "jaipur-to-agra", origin: "Jaipur", destination: "Agra", distanceKm: 240, duration: "4-5 hours",
    highway: "NH-21 via Bharatpur", majorStops: ["Dausa", "Bharatpur"],
    roadCondition: "Good national highway. Part of the Golden Triangle circuit.",
    bestTime: "October to March. Complete the Golden Triangle with Delhi.",
    localTip: "Stop at Bharatpur Bird Sanctuary (Keoladeo National Park) en route. UNESCO World Heritage Site.",
    relatedRoutes: ["agra-to-jaipur", "delhi-to-agra", "delhi-to-jaipur"],
  }),
  "jaipur-to-mount-abu": createRoute({
    slug: "jaipur-to-mount-abu", origin: "Jaipur", destination: "Mount Abu", distanceKm: 490, duration: "7-8 hours",
    highway: "NH-48 via Udaipur Road", majorStops: ["Beawar", "Sirohi"],
    roadCondition: "Good highway with mountain roads for the last 25 km up to Mount Abu.",
    bestTime: "October to March. Only hill station in Rajasthan.",
    localTip: "Dilwara Jain Temples are architectural marvels. Sunset Point at Nakki Lake is beautiful.",
    relatedRoutes: ["jaipur-to-udaipur", "udaipur-to-mount-abu"],
  }),
  "jaipur-to-ranthambore": createRoute({
    slug: "jaipur-to-ranthambore", origin: "Jaipur", destination: "Ranthambore", distanceKm: 180, duration: "3-3.5 hours",
    highway: "NH-52 via Tonk", majorStops: ["Tonk", "Sawai Madhopur"],
    roadCondition: "Good highway. The park is near Sawai Madhopur town.",
    bestTime: "October to June. Park closed during monsoon. Zone 3-5 have best tiger sighting.",
    localTip: "Book safari permits well in advance. Morning safaris have better tiger sighting chances.",
    relatedRoutes: ["jaipur-to-udaipur", "delhi-to-corbett"],
  }),
  "jaipur-to-bikaner": createRoute({
    slug: "jaipur-to-bikaner", origin: "Jaipur", destination: "Bikaner", distanceKm: 330, duration: "5-6 hours",
    highway: "NH-11", majorStops: ["Sikar", "Fatehpur"],
    roadCondition: "Good highway through Shekhawati region. Scenic painted havelis en route.",
    bestTime: "October to March. Bikaner Camel Festival in January is unique.",
    localTip: "Stop at Shekhawati region for painted havelis. Bikaner is famous for Junagarh Fort and snacks.",
    relatedRoutes: ["jaipur-to-jaisalmer", "jaipur-to-jodhpur"],
  }),
  "jaipur-to-delhi": createRoute({
    slug: "jaipur-to-delhi", origin: "Jaipur", destination: "Delhi", distanceKm: 280, duration: "4-5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)", majorStops: ["Shahpura", "Behror", "Neemrana"],
    roadCondition: "Excellent 6-lane expressway. One of India's best highways.",
    bestTime: "Year-round. Comfortable drive any season.",
    localTip: "Leave Jaipur early to reach Delhi before office-hour traffic. Neemrana Fort is a good break point.",
    relatedRoutes: ["delhi-to-jaipur", "delhi-to-agra"],
  }),

  // ═══════════════════════════════════════════
  // AGRA ORIGIN ROUTES (6 routes)
  // ═══════════════════════════════════════════
  "agra-to-jaipur": createRoute({
    slug: "agra-to-jaipur", origin: "Agra", destination: "Jaipur", distanceKm: 240, duration: "4-5 hours",
    highway: "NH-21 via Bharatpur", majorStops: ["Bharatpur", "Dausa"],
    roadCondition: "Good national highway. Scenic route through Rajasthan countryside.",
    bestTime: "October to March. Complete the Golden Triangle circuit.",
    localTip: "Visit Fatehpur Sikri (40 km from Agra) before heading to Jaipur. Bharatpur Bird Sanctuary is en route.",
    relatedRoutes: ["jaipur-to-agra", "delhi-to-agra", "agra-to-delhi"],
  }),
  "agra-to-delhi": createRoute({
    slug: "agra-to-delhi", origin: "Agra", destination: "Delhi", distanceKm: 230, duration: "3-4 hours",
    highway: "Yamuna Expressway", majorStops: ["Mathura"],
    roadCondition: "World-class 6-lane Yamuna Expressway. Smooth and fast.",
    bestTime: "Year-round. Evening return recommended after Agra sightseeing.",
    localTip: "Leave Agra by 4 PM to reach Delhi by 8 PM. Stop at Mathura for famous Peda sweets.",
    relatedRoutes: ["delhi-to-agra", "agra-to-jaipur"],
  }),
  "agra-to-mathura": createRoute({
    slug: "agra-to-mathura", origin: "Agra", destination: "Mathura", distanceKm: 58, duration: "1-1.5 hours",
    highway: "NH-19", majorStops: [],
    roadCondition: "Good highway. Short comfortable drive.",
    bestTime: "Year-round. Holi and Janmashtami are spectacular in Mathura.",
    localTip: "Combine Mathura and Vrindavan (12 km further) for a complete pilgrimage day trip.",
    relatedRoutes: ["agra-to-delhi", "delhi-to-mathura"],
  }),
  "agra-to-fatehpur-sikri": createRoute({
    slug: "agra-to-fatehpur-sikri", origin: "Agra", destination: "Fatehpur Sikri", distanceKm: 40, duration: "45 minutes-1 hour",
    highway: "NH-11", majorStops: [],
    roadCondition: "Good road. Short scenic drive.",
    bestTime: "October to March. Early morning visit recommended to avoid crowds.",
    localTip: "Fatehpur Sikri is a UNESCO World Heritage Site built by Emperor Akbar. Buland Darwaza is the tallest gateway in the world.",
    relatedRoutes: ["agra-to-jaipur", "delhi-to-agra"],
  }),
  "agra-to-varanasi": createRoute({
    slug: "agra-to-varanasi", origin: "Agra", destination: "Varanasi", distanceKm: 600, duration: "9-10 hours",
    highway: "Agra-Lucknow Expressway & NH", majorStops: ["Lucknow", "Sultanpur"],
    roadCondition: "Agra-Lucknow Expressway is excellent. Mixed road quality after Lucknow.",
    bestTime: "October to March. Dev Deepawali in November is magical.",
    localTip: "Break the journey at Lucknow for a meal. Try Lucknow's famous Tunday Kebabs.",
    relatedRoutes: ["agra-to-lucknow", "lucknow-to-varanasi"],
  }),
  "agra-to-lucknow": createRoute({
    slug: "agra-to-lucknow", origin: "Agra", destination: "Lucknow", distanceKm: 330, duration: "4-5 hours",
    highway: "Agra-Lucknow Expressway", majorStops: ["Firozabad", "Etawah"],
    roadCondition: "Brand new Agra-Lucknow Expressway. Excellent 6-lane highway.",
    bestTime: "Year-round. Lucknow Mahotsav (November) is a cultural treat.",
    localTip: "Agra-Lucknow Expressway has made this one of the fastest intercity routes in UP.",
    relatedRoutes: ["agra-to-varanasi", "lucknow-to-varanasi"],
  }),

  // ═══════════════════════════════════════════
  // CHANDIGARH ORIGIN ROUTES (5 routes)
  // ═══════════════════════════════════════════
  "chandigarh-to-manali": createRoute({
    slug: "chandigarh-to-manali", origin: "Chandigarh", destination: "Manali", distanceKm: 310, duration: "7-8 hours",
    highway: "NH-21 via Bilaspur & Mandi", majorStops: ["Bilaspur", "Sundernagar", "Mandi", "Kullu"],
    roadCondition: "Mountain highway. Good but winding roads with beautiful valley views.",
    bestTime: "March to June, September to November. Avoid monsoon landslide season.",
    localTip: "Stop at Pandoh Dam for photos. Kullu Valley scenery before Manali is stunning.",
    relatedRoutes: ["chandigarh-to-shimla", "chandigarh-to-dharamshala", "delhi-to-manali"],
  }),
  "chandigarh-to-shimla": createRoute({
    slug: "chandigarh-to-shimla", origin: "Chandigarh", destination: "Shimla", distanceKm: 115, duration: "3-4 hours",
    highway: "NH-5 via Kalka", majorStops: ["Pinjore", "Kalka", "Solan"],
    roadCondition: "Scenic mountain road after Kalka. Well-maintained but many curves.",
    bestTime: "March to June for pleasant weather. December-February for snowfall.",
    localTip: "Alternative: Take toy train from Kalka to Shimla for a scenic UNESCO heritage experience.",
    relatedRoutes: ["chandigarh-to-manali", "delhi-to-shimla", "shimla-to-manali"],
  }),
  "chandigarh-to-dharamshala": createRoute({
    slug: "chandigarh-to-dharamshala", origin: "Chandigarh", destination: "Dharamshala", distanceKm: 240, duration: "5-6 hours",
    highway: "NH-20 via Una", majorStops: ["Rupnagar", "Una", "Kangra"],
    roadCondition: "Good highway with scenic mountain stretches.",
    bestTime: "March to June, September to November.",
    localTip: "Dharamshala is the home of Tibetan Government in exile. Visit Namgyal Monastery.",
    relatedRoutes: ["chandigarh-to-manali", "chandigarh-to-amritsar", "delhi-to-dharamshala"],
  }),
  "chandigarh-to-amritsar": createRoute({
    slug: "chandigarh-to-amritsar", origin: "Chandigarh", destination: "Amritsar", distanceKm: 230, duration: "4-5 hours",
    highway: "NH-44 via Ludhiana & Jalandhar", majorStops: ["Ludhiana", "Jalandhar"],
    roadCondition: "Good 4-lane highway. Some congestion near Ludhiana.",
    bestTime: "October to March. Baisakhi (April) is a special time at Golden Temple.",
    localTip: "Visit Wagah Border ceremony (30 km from Amritsar) for the flag-lowering ceremony at sunset.",
    relatedRoutes: ["chandigarh-to-dharamshala", "delhi-to-amritsar", "amritsar-to-wagah-border"],
  }),
  "chandigarh-to-kasol": createRoute({
    slug: "chandigarh-to-kasol", origin: "Chandigarh", destination: "Kasol", distanceKm: 310, duration: "8-9 hours",
    highway: "NH-21 via Mandi & Bhuntar", majorStops: ["Bilaspur", "Mandi", "Bhuntar"],
    roadCondition: "Mountain roads throughout. Scenic but slow in some stretches.",
    bestTime: "March to June, September to November. Avoid monsoon.",
    localTip: "Kasol is in Parvati Valley. Visit Manikaran Gurudwara and its hot springs (4 km from Kasol).",
    relatedRoutes: ["chandigarh-to-manali", "chandigarh-to-dharamshala", "delhi-to-kasol"],
  }),

  // ═══════════════════════════════════════════
  // LUCKNOW ORIGIN ROUTES (5 routes)
  // ═══════════════════════════════════════════
  "lucknow-to-varanasi": createRoute({
    slug: "lucknow-to-varanasi", origin: "Lucknow", destination: "Varanasi", distanceKm: 300, duration: "5-6 hours",
    highway: "Purvanchal Expressway / NH-56", majorStops: ["Sultanpur", "Jaunpur"],
    roadCondition: "Purvanchal Expressway has made this route much faster. Excellent road.",
    bestTime: "October to March. Dev Deepawali in November is spectacular.",
    localTip: "Take Purvanchal Expressway for fastest route. Varanasi's Ganga Aarti is a must-see.",
    relatedRoutes: ["lucknow-to-ayodhya", "lucknow-to-prayagraj", "varanasi-to-ayodhya"],
  }),
  "lucknow-to-ayodhya": createRoute({
    slug: "lucknow-to-ayodhya", origin: "Lucknow", destination: "Ayodhya", distanceKm: 135, duration: "2.5-3 hours",
    highway: "NH-330 via Barabanki", majorStops: ["Barabanki"],
    roadCondition: "Good national highway. Road upgraded recently for Ayodhya development.",
    bestTime: "October to March. Ram Navami and Deepotsav are grand celebrations.",
    localTip: "Ayodhya has undergone massive development. New Ram Mandir is a marvel of architecture.",
    relatedRoutes: ["lucknow-to-varanasi", "varanasi-to-ayodhya", "delhi-to-ayodhya"],
  }),
  "lucknow-to-prayagraj": createRoute({
    slug: "lucknow-to-prayagraj", origin: "Lucknow", destination: "Prayagraj", distanceKm: 200, duration: "3.5-4 hours",
    highway: "Purvanchal Expressway / NH-96", majorStops: ["Rae Bareli", "Pratapgarh"],
    roadCondition: "Good highway. Purvanchal Expressway option available.",
    bestTime: "October to March. Maha Kumbh Mela is the world's largest gathering.",
    localTip: "Triveni Sangam (confluence of Ganga, Yamuna, Saraswati) is the holiest spot. Take a boat ride.",
    relatedRoutes: ["lucknow-to-varanasi", "lucknow-to-ayodhya", "varanasi-to-prayagraj"],
  }),
  "lucknow-to-agra": createRoute({
    slug: "lucknow-to-agra", origin: "Lucknow", destination: "Agra", distanceKm: 330, duration: "4-5 hours",
    highway: "Agra-Lucknow Expressway", majorStops: ["Etawah", "Firozabad"],
    roadCondition: "Brand new Agra-Lucknow Expressway. World-class 6-lane highway.",
    bestTime: "October to March.",
    localTip: "One of India's fastest intercity routes thanks to the new expressway. Toll plaza accepts FASTag.",
    relatedRoutes: ["agra-to-lucknow", "delhi-to-agra", "delhi-to-lucknow"],
  }),
  "lucknow-to-kanpur": createRoute({
    slug: "lucknow-to-kanpur", origin: "Lucknow", destination: "Kanpur", distanceKm: 80, duration: "1.5-2 hours",
    highway: "NH-27 / Agra-Lucknow Expressway", majorStops: ["Unnao"],
    roadCondition: "Good highway. Short comfortable drive.",
    bestTime: "Year-round.",
    localTip: "Kanpur is UP's industrial hub. Green Park Stadium is a famous cricket venue.",
    relatedRoutes: ["lucknow-to-varanasi", "lucknow-to-agra"],
  }),

  // ═══════════════════════════════════════════
  // HARIDWAR & DEHRADUN ROUTES (5 routes)
  // ═══════════════════════════════════════════
  "haridwar-to-rishikesh": createRoute({
    slug: "haridwar-to-rishikesh", origin: "Haridwar", destination: "Rishikesh", distanceKm: 25, duration: "30-45 minutes",
    highway: "NH-7", majorStops: [],
    roadCondition: "Good road along the Ganges. Scenic short drive.",
    bestTime: "Year-round. Adventure activities best February to May.",
    localTip: "The drive along the Ganges is beautiful. Both cities can be covered in a day trip.",
    relatedRoutes: ["haridwar-to-dehradun", "delhi-to-rishikesh", "delhi-to-haridwar"],
  }),
  "haridwar-to-dehradun": createRoute({
    slug: "haridwar-to-dehradun", origin: "Haridwar", destination: "Dehradun", distanceKm: 55, duration: "1-1.5 hours",
    highway: "NH-7 via Rishikesh or Direct Route", majorStops: ["Rishikesh"],
    roadCondition: "Good road. Two route options: via Rishikesh (longer but scenic) or direct.",
    bestTime: "Year-round.",
    localTip: "From Dehradun, you can easily access Mussoorie (35 km further up).",
    relatedRoutes: ["haridwar-to-rishikesh", "dehradun-to-mussoorie", "delhi-to-dehradun"],
  }),
  "haridwar-to-mussoorie": createRoute({
    slug: "haridwar-to-mussoorie", origin: "Haridwar", destination: "Mussoorie", distanceKm: 90, duration: "2.5-3 hours",
    highway: "Via Dehradun", majorStops: ["Dehradun"],
    roadCondition: "Good road to Dehradun, then scenic mountain climb to Mussoorie.",
    bestTime: "March to June, October to November.",
    localTip: "The Dehradun to Mussoorie mountain road has spectacular valley views.",
    relatedRoutes: ["haridwar-to-dehradun", "dehradun-to-mussoorie", "delhi-to-mussoorie"],
  }),
  "dehradun-to-mussoorie": createRoute({
    slug: "dehradun-to-mussoorie", origin: "Dehradun", destination: "Mussoorie", distanceKm: 35, duration: "1-1.5 hours",
    highway: "Mussoorie Road", majorStops: [],
    roadCondition: "Well-maintained mountain road with sharp hairpin bends. Scenic throughout.",
    bestTime: "March to June for pleasant weather. December-February for snow.",
    localTip: "Mussoorie Road has multiple viewpoints. Stop at Picture Palace viewpoint for Doon Valley panorama.",
    relatedRoutes: ["dehradun-to-rishikesh", "dehradun-to-nainital", "delhi-to-mussoorie"],
  }),
  "dehradun-to-rishikesh": createRoute({
    slug: "dehradun-to-rishikesh", origin: "Dehradun", destination: "Rishikesh", distanceKm: 45, duration: "1-1.5 hours",
    highway: "NH-7 via Doiwala", majorStops: [],
    roadCondition: "Good road through the Doon Valley.",
    bestTime: "Year-round. February to May for river rafting.",
    localTip: "Rishikesh is the yoga capital of the world. Book a rafting trip for Ganges rapids adventure.",
    relatedRoutes: ["dehradun-to-mussoorie", "haridwar-to-rishikesh", "delhi-to-rishikesh"],
  }),
  "dehradun-to-nainital": createRoute({
    slug: "dehradun-to-nainital", origin: "Dehradun", destination: "Nainital", distanceKm: 290, duration: "7-8 hours",
    highway: "Via Haridwar & Haldwani", majorStops: ["Haridwar", "Kotdwar", "Haldwani"],
    roadCondition: "Mix of highway and mountain roads. Scenic but long drive.",
    bestTime: "March to June, September to November.",
    localTip: "This is a long mountain drive. Consider a halt at Haridwar to break the journey.",
    relatedRoutes: ["delhi-to-nainital", "dehradun-to-rishikesh"],
  }),

  // ═══════════════════════════════════════════
  // AMRITSAR & VARANASI ROUTES (5 routes)
  // ═══════════════════════════════════════════
  "amritsar-to-dharamshala": createRoute({
    slug: "amritsar-to-dharamshala", origin: "Amritsar", destination: "Dharamshala", distanceKm: 200, duration: "4-5 hours",
    highway: "NH-54 via Pathankot", majorStops: ["Pathankot", "Kangra"],
    roadCondition: "Good highway to Pathankot. Scenic mountain road to Dharamshala.",
    bestTime: "March to June, September to November.",
    localTip: "Pathankot is the transit point. From here, mountain roads wind through Kangra Valley.",
    relatedRoutes: ["chandigarh-to-dharamshala", "delhi-to-dharamshala", "delhi-to-amritsar"],
  }),
  "amritsar-to-wagah-border": createRoute({
    slug: "amritsar-to-wagah-border", origin: "Amritsar", destination: "Wagah Border", distanceKm: 30, duration: "30-45 minutes",
    highway: "GT Road", majorStops: [],
    roadCondition: "Good road. Short drive from Amritsar city.",
    bestTime: "Year-round. Evening ceremony starts around 4-5 PM (timing varies by season).",
    localTip: "Reach 2 hours early to get a good seat for the patriotic flag-lowering ceremony. Very emotional experience.",
    relatedRoutes: ["delhi-to-amritsar", "chandigarh-to-amritsar"],
  }),
  "varanasi-to-ayodhya": createRoute({
    slug: "varanasi-to-ayodhya", origin: "Varanasi", destination: "Ayodhya", distanceKm: 200, duration: "4-5 hours",
    highway: "NH-56 via Jaunpur", majorStops: ["Jaunpur"],
    roadCondition: "Good national highway. Road improved significantly with recent development.",
    bestTime: "October to March. Deepotsav and Ram Navami in Ayodhya are spectacular.",
    localTip: "The new Ram Mandir in Ayodhya is India's most visited new temple. Visit at sunrise for least crowds.",
    relatedRoutes: ["varanasi-to-prayagraj", "lucknow-to-ayodhya", "delhi-to-ayodhya"],
  }),
  "varanasi-to-prayagraj": createRoute({
    slug: "varanasi-to-prayagraj", origin: "Varanasi", destination: "Prayagraj", distanceKm: 125, duration: "2.5-3 hours",
    highway: "NH-19", majorStops: [],
    roadCondition: "Good highway. Comfortable short drive.",
    bestTime: "October to March. Maha Kumbh Mela period is extraordinary (but extremely crowded).",
    localTip: "Visit Triveni Sangam for a holy dip and boat ride. Allahabad Fort overlooks the confluence.",
    relatedRoutes: ["varanasi-to-ayodhya", "lucknow-to-prayagraj"],
  }),
  "varanasi-to-bodhgaya": createRoute({
    slug: "varanasi-to-bodhgaya", origin: "Varanasi", destination: "Bodh Gaya", distanceKm: 250, duration: "5-6 hours",
    highway: "NH-2 via Sasaram", majorStops: ["Sasaram", "Gaya"],
    roadCondition: "Mostly good highway. Some stretches may have construction.",
    bestTime: "October to March. Buddha Purnima is special in Bodh Gaya.",
    localTip: "Bodh Gaya is where Siddhartha Gautama attained enlightenment. Mahabodhi Temple is a UNESCO site.",
    relatedRoutes: ["varanasi-to-ayodhya", "varanasi-to-prayagraj"],
  }),

  // ═══════════════════════════════════════════
  // UDAIPUR & JODHPUR ROUTES (5 routes)
  // ═══════════════════════════════════════════
  "udaipur-to-jodhpur": createRoute({
    slug: "udaipur-to-jodhpur", origin: "Udaipur", destination: "Jodhpur", distanceKm: 260, duration: "4-5 hours",
    highway: "NH-62 via Ranakpur", majorStops: ["Ranakpur", "Pali"],
    roadCondition: "Good highway through scenic Aravalli countryside.",
    bestTime: "October to March. Ranakpur Jain Temple en route is a must-stop.",
    localTip: "Stop at Ranakpur Jain Temple (100 km from Udaipur). Its 1,444 intricately carved marble pillars are breathtaking.",
    relatedRoutes: ["udaipur-to-jaisalmer", "udaipur-to-mount-abu", "jaipur-to-udaipur"],
  }),
  "udaipur-to-jaisalmer": createRoute({
    slug: "udaipur-to-jaisalmer", origin: "Udaipur", destination: "Jaisalmer", distanceKm: 530, duration: "8-9 hours",
    highway: "Via Jodhpur", majorStops: ["Ranakpur", "Jodhpur", "Pokhran"],
    roadCondition: "Good highway via Jodhpur. Desert terrain after Jodhpur.",
    bestTime: "October to March. Desert Festival in February.",
    localTip: "Break the journey at Jodhpur for Mehrangarh Fort visit. Jaisalmer Fort is a living fort (people still live inside).",
    relatedRoutes: ["udaipur-to-jodhpur", "jodhpur-to-jaisalmer"],
  }),
  "udaipur-to-mount-abu": createRoute({
    slug: "udaipur-to-mount-abu", origin: "Udaipur", destination: "Mount Abu", distanceKm: 165, duration: "3-3.5 hours",
    highway: "NH-48", majorStops: ["Gogunda"],
    roadCondition: "Good road. Mountain climb for the last 25 km is scenic with hairpin bends.",
    bestTime: "October to March. Only hill station in Rajasthan.",
    localTip: "Dilwara Jain Temples are a UNESCO-worthy marvel. Visit Nakki Lake for boating.",
    relatedRoutes: ["udaipur-to-jodhpur", "jaipur-to-mount-abu"],
  }),
  "udaipur-to-chittorgarh": createRoute({
    slug: "udaipur-to-chittorgarh", origin: "Udaipur", destination: "Chittorgarh", distanceKm: 115, duration: "2-2.5 hours",
    highway: "NH-48", majorStops: [],
    roadCondition: "Good highway. Comfortable short drive.",
    bestTime: "October to March.",
    localTip: "Chittorgarh Fort is India's largest fort. Light and sound show narrates the tales of Rajput valor.",
    relatedRoutes: ["jaipur-to-udaipur", "udaipur-to-jodhpur"],
  }),

  // ═══════════════════════════════════════════
  // SHIMLA, MANALI & SRINAGAR ROUTES (8 routes)
  // ═══════════════════════════════════════════
  "shimla-to-manali": createRoute({
    slug: "shimla-to-manali", origin: "Shimla", destination: "Manali", distanceKm: 250, duration: "7-8 hours",
    highway: "NH-3 via Mandi", majorStops: ["Bilaspur", "Sundernagar", "Mandi", "Kullu"],
    roadCondition: "Mountain highway through beautiful pine forests and valleys. Well-maintained but winding.",
    bestTime: "March to June, September to November. Winter roads may have snow blockages.",
    localTip: "This is one of India's most scenic drives. Stop at Kullu Valley for apple orchards and river views.",
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "chandigarh-to-manali"],
  }),
  "manali-to-leh": createRoute({
    slug: "manali-to-leh", origin: "Manali", destination: "Leh", distanceKm: 475, duration: "12-15 hours (2-day recommended)",
    highway: "Manali-Leh Highway via Rohtang Pass", majorStops: ["Rohtang Pass", "Keylong", "Jispa", "Sarchu", "Tanglang La"],
    roadCondition: "One of the world's highest motorable roads. Challenging terrain, passes above 15,000 ft. Requires acclimatization.",
    bestTime: "June to September only. Road closed October to May due to snow.",
    localTip: "This is an epic 2-day road trip. Stay overnight at Jispa or Sarchu. Carry altitude sickness medicine. SUV recommended.",
    relatedRoutes: ["delhi-to-manali", "srinagar-to-leh"],
  }),
  "manali-to-rohtang-pass": createRoute({
    slug: "manali-to-rohtang-pass", origin: "Manali", destination: "Rohtang Pass", distanceKm: 52, duration: "2-3 hours",
    highway: "Manali-Leh Highway / Atal Tunnel", majorStops: [],
    roadCondition: "Mountain road with steep gradients. Snow-covered most of the year. Atal Tunnel provides alternative access.",
    bestTime: "May to October. Permit required for Rohtang Pass (available online).",
    localTip: "Apply for Rohtang Pass permit online (limited daily vehicles). Atal Tunnel bypasses the pass for through traffic.",
    relatedRoutes: ["manali-to-leh", "delhi-to-manali"],
  }),
  "rishikesh-to-dehradun": createRoute({
    slug: "rishikesh-to-dehradun", origin: "Rishikesh", destination: "Dehradun", distanceKm: 45, duration: "1-1.5 hours",
    highway: "NH-7 via Doiwala", majorStops: [],
    roadCondition: "Good road through the valley. Pleasant scenic drive.",
    bestTime: "Year-round.",
    localTip: "Dehradun has good connectivity to Delhi. Clock Tower area has great local food.",
    relatedRoutes: ["dehradun-to-rishikesh", "dehradun-to-mussoorie"],
  }),
  "jodhpur-to-jaisalmer": createRoute({
    slug: "jodhpur-to-jaisalmer", origin: "Jodhpur", destination: "Jaisalmer", distanceKm: 285, duration: "4-5 hours",
    highway: "NH-15", majorStops: ["Pokhran"],
    roadCondition: "Good highway through Thar Desert. Flat terrain, straight road.",
    bestTime: "October to March. Desert sunset is magical.",
    localTip: "Stop at Pokhran (nuclear test site museum). Jaisalmer Fort is the only living fort in India.",
    relatedRoutes: ["jaipur-to-jaisalmer", "udaipur-to-jaisalmer"],
  }),
  "jodhpur-to-udaipur": createRoute({
    slug: "jodhpur-to-udaipur", origin: "Jodhpur", destination: "Udaipur", distanceKm: 260, duration: "4-5 hours",
    highway: "NH-62 via Ranakpur", majorStops: ["Pali", "Ranakpur"],
    roadCondition: "Good highway. Scenic Aravalli landscape.",
    bestTime: "October to March.",
    localTip: "Must-stop at Ranakpur Jain Temple. Kumbalgarh Fort (90 km from Udaipur) is also worth a detour.",
    relatedRoutes: ["udaipur-to-jodhpur", "jaipur-to-jodhpur"],
  }),
  "srinagar-to-leh": createRoute({
    slug: "srinagar-to-leh", origin: "Srinagar", destination: "Leh", distanceKm: 420, duration: "10-12 hours (2-day recommended)",
    highway: "NH-1D via Kargil", majorStops: ["Sonamarg", "Zoji La Pass", "Drass", "Kargil"],
    roadCondition: "High altitude mountain road. Passes through Zoji La Pass (11,575 ft). BRO-maintained.",
    bestTime: "June to October only. Road closed in winter.",
    localTip: "Stay overnight at Kargil to break the journey. Visit Kargil War Memorial. Magnetic Hill near Leh is fascinating.",
    relatedRoutes: ["srinagar-to-gulmarg", "srinagar-to-pahalgam", "manali-to-leh"],
  }),
  "srinagar-to-gulmarg": createRoute({
    slug: "srinagar-to-gulmarg", origin: "Srinagar", destination: "Gulmarg", distanceKm: 50, duration: "1.5-2 hours",
    highway: "Srinagar-Gulmarg Road", majorStops: ["Tangmarg"],
    roadCondition: "Good mountain road. Scenic drive through pine forests.",
    bestTime: "December to March for skiing. April to June for green meadows. September to November for autumn colors.",
    localTip: "Gulmarg Gondola (cable car) to Kongdoori and Apharwat Peak is a must-do. World's second highest operating cable car.",
    relatedRoutes: ["srinagar-to-pahalgam", "srinagar-to-leh"],
  }),
  "srinagar-to-pahalgam": createRoute({
    slug: "srinagar-to-pahalgam", origin: "Srinagar", destination: "Pahalgam", distanceKm: 95, duration: "2-3 hours",
    highway: "NH-44 via Anantnag", majorStops: ["Anantnag"],
    roadCondition: "Good road along the Lidder River. Scenic countryside.",
    bestTime: "April to October. Base camp for Amarnath Yatra.",
    localTip: "Pahalgam is the starting point of Amarnath Yatra. Betaab Valley, Aru Valley, and Chandanwari are must-visits.",
    relatedRoutes: ["srinagar-to-gulmarg", "srinagar-to-leh"],
  }),

  // ═══════════════════════════════════════════
  // MISC & NCR ROUTES (5 routes)
  // ═══════════════════════════════════════════
  "noida-to-agra": createRoute({
    slug: "noida-to-agra", origin: "Noida", destination: "Agra", distanceKm: 200, duration: "2.5-3 hours",
    highway: "Yamuna Expressway", majorStops: [],
    roadCondition: "Yamuna Expressway starts from Noida. Excellent 6-lane highway.",
    bestTime: "October to March. Leave early for Taj Mahal sunrise.",
    localTip: "Noida is closer to Yamuna Expressway entry than Delhi. Faster route to Agra by 30-45 minutes.",
    relatedRoutes: ["delhi-to-agra", "agra-to-delhi"],
  }),
  "gurgaon-to-jaipur": createRoute({
    slug: "gurgaon-to-jaipur", origin: "Gurgaon", destination: "Jaipur", distanceKm: 250, duration: "3.5-4.5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)", majorStops: ["Neemrana", "Behror"],
    roadCondition: "Excellent 6-lane expressway. Bypasses Delhi traffic.",
    bestTime: "October to March.",
    localTip: "Starting from Gurgaon saves 30-60 minutes vs Delhi city. Direct expressway access.",
    relatedRoutes: ["delhi-to-jaipur", "jaipur-to-delhi"],
  }),

  // Reverse direction routes (popular returns)
  "manali-to-delhi": createRoute({
    slug: "manali-to-delhi", origin: "Manali", destination: "Delhi", distanceKm: 530, duration: "12-13 hours",
    highway: "NH-21 & NH-44", majorStops: ["Kullu", "Mandi", "Bilaspur", "Chandigarh", "Karnal"],
    roadCondition: "Downhill from Manali makes driving easier. NH-44 is excellent after Chandigarh.",
    bestTime: "March to November. Avoid Dec-Feb when Rohtang area may have snow.",
    localTip: "Start early (5-6 AM) from Manali to cross mountain sections in daylight. Stop at Chandigarh for a break.",
    relatedRoutes: ["delhi-to-manali", "shimla-to-delhi"],
  }),
  "shimla-to-delhi": createRoute({
    slug: "shimla-to-delhi", origin: "Shimla", destination: "Delhi", distanceKm: 350, duration: "7-8 hours",
    highway: "NH-5 & NH-44", majorStops: ["Solan", "Kalka", "Ambala", "Karnal"],
    roadCondition: "Mountain roads till Kalka, then excellent highway to Delhi.",
    bestTime: "Year-round.",
    localTip: "Start before 8 AM to reach Delhi by afternoon. The descent from Shimla is scenic.",
    relatedRoutes: ["delhi-to-shimla", "manali-to-delhi"],
  }),
  "haridwar-to-delhi": createRoute({
    slug: "haridwar-to-delhi", origin: "Haridwar", destination: "Delhi", distanceKm: 230, duration: "5-6 hours",
    highway: "NH-334 via Delhi-Meerut Expressway", majorStops: ["Roorkee", "Muzaffarnagar", "Meerut"],
    roadCondition: "Good highway. Delhi-Meerut Expressway makes the last stretch very fast.",
    bestTime: "Year-round.",
    localTip: "Attend morning Ganga Aarti at 5:30 AM, then leave for Delhi.",
    relatedRoutes: ["delhi-to-haridwar", "rishikesh-to-delhi"],
  }),
  "amritsar-to-delhi": createRoute({
    slug: "amritsar-to-delhi", origin: "Amritsar", destination: "Delhi", distanceKm: 450, duration: "7-8 hours",
    highway: "NH-44 (GT Road)", majorStops: ["Jalandhar", "Ludhiana", "Ambala", "Karnal"],
    roadCondition: "Good 4-lane NH-44. Well-maintained throughout.",
    bestTime: "Year-round.",
    localTip: "Start early to reach Delhi by afternoon. Haveli restaurant at Jalandhar is famous for Punjabi food.",
    relatedRoutes: ["delhi-to-amritsar", "chandigarh-to-amritsar"],
  }),
  "nainital-to-delhi": createRoute({
    slug: "nainital-to-delhi", origin: "Nainital", destination: "Delhi", distanceKm: 300, duration: "6-7 hours",
    highway: "NH-9 via Haldwani & Moradabad", majorStops: ["Haldwani", "Moradabad", "Ghaziabad"],
    roadCondition: "Mountain road for first 30 km, then good highway.",
    bestTime: "Year-round.",
    localTip: "Buy Nainital candles (famous souvenir) before leaving. Start before 7 AM for comfortable drive.",
    relatedRoutes: ["delhi-to-nainital", "mussoorie-to-delhi"],
  }),
  "mussoorie-to-delhi": createRoute({
    slug: "mussoorie-to-delhi", origin: "Mussoorie", destination: "Delhi", distanceKm: 290, duration: "6-7 hours",
    highway: "Via Dehradun & NH-334", majorStops: ["Dehradun", "Roorkee", "Meerut"],
    roadCondition: "Mountain road to Dehradun, then excellent highway to Delhi.",
    bestTime: "Year-round.",
    localTip: "Stop at Dehradun for breakfast at Kumar's or Orchard. Delhi-Meerut Expressway makes the last stretch fast.",
    relatedRoutes: ["delhi-to-mussoorie", "nainital-to-delhi"],
  }),
  "varanasi-to-lucknow": createRoute({
    slug: "varanasi-to-lucknow", origin: "Varanasi", destination: "Lucknow", distanceKm: 300, duration: "5-6 hours",
    highway: "Purvanchal Expressway", majorStops: ["Jaunpur", "Sultanpur"],
    roadCondition: "Purvanchal Expressway has made this a fast route.",
    bestTime: "Year-round.",
    localTip: "Take Purvanchal Expressway for the fastest route. Lucknow is famous for street food.",
    relatedRoutes: ["lucknow-to-varanasi", "varanasi-to-ayodhya"],
  }),
  "dharamshala-to-delhi": createRoute({
    slug: "dharamshala-to-delhi", origin: "Dharamshala", destination: "Delhi", distanceKm: 475, duration: "9-10 hours",
    highway: "NH-20 & NH-44", majorStops: ["Una", "Rupnagar", "Ambala", "Karnal"],
    roadCondition: "Mountain roads initially, then excellent highway after Ambala.",
    bestTime: "Year-round. Avoid monsoon for mountain section.",
    localTip: "Start early to cross mountain section in daylight. The Kangra Valley views on descent are spectacular.",
    relatedRoutes: ["delhi-to-dharamshala", "kasol-to-delhi"],
  }),
  "kasol-to-delhi": createRoute({
    slug: "kasol-to-delhi", origin: "Kasol", destination: "Delhi", distanceKm: 520, duration: "11-12 hours",
    highway: "Via Bhuntar, Mandi & NH-44", majorStops: ["Bhuntar", "Mandi", "Chandigarh"],
    roadCondition: "Narrow mountain roads near Kasol, then good highway after Mandi.",
    bestTime: "March to November. Avoid monsoon landslide risks.",
    localTip: "Start very early (4-5 AM) for this long drive. Consider a halt at Chandigarh to break the journey.",
    relatedRoutes: ["delhi-to-kasol", "dharamshala-to-delhi"],
  }),
  "rishikesh-to-delhi": createRoute({
    slug: "rishikesh-to-delhi", origin: "Rishikesh", destination: "Delhi", distanceKm: 250, duration: "5-6 hours",
    highway: "NH-334 via Delhi-Meerut Expressway", majorStops: ["Haridwar", "Roorkee", "Meerut"],
    roadCondition: "Good highway. Delhi-Meerut Expressway makes approach to Delhi fast.",
    bestTime: "Year-round.",
    localTip: "Do a morning yoga session in Rishikesh before departing for Delhi.",
    relatedRoutes: ["delhi-to-rishikesh", "haridwar-to-delhi"],
  }),
};

// Helper functions for route pages
export function getDistanceRoute(slug) {
  return distanceRoutes[slug] || null;
}

export function getAllDistanceRouteSlugs() {
  return Object.keys(distanceRoutes);
}

export function getRelatedDistanceRoutes(slug) {
  const route = distanceRoutes[slug];
  if (!route) return [];
  return route.relatedRoutes
    .map(rs => distanceRoutes[rs])
    .filter(Boolean)
    .slice(0, 6);
}

export function getDistanceRouteCount() {
  return Object.keys(distanceRoutes).length;
}
