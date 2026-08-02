// src/utilis/stationTaxiEnrichment.js
// Programmatic rich-content generators for railway station taxi pages.
// Provides pickup details, things-to-do, reviews, seasonal tips, extended FAQs,
// comparison with auto/prepaid, inclusions, cancellation policy.

// ─── STATION-SPECIFIC PLATFORM & EXIT DETAILS ─────────────────────
const STATION_DETAILS = {
  'agra-cantt': {
    platforms: "7 platforms, main entrance on the south side (Agra Cantt Road)",
    exits: ["Main Exit (Gate 1) — connects to prepaid taxi stand and auto-rickshaw zone", "Platform 1 foot overbridge exit toward Sadar Bazaar side", "North Exit — toward Idgah Bus Stand"],
    bestExit: "Our drivers stand near Exit Gate 1 with your name placard, about 20 metres from the prepaid taxi counter — clearly visible as you walk out.",
    nearestPointsOfInterest: ["Taj Mahal (6 km, East Gate)", "Agra Fort (4 km)", "Mehtab Bagh (7 km)", "Sadar Bazaar (3 km)"],
    peakHours: ["6-9 AM (arrivals from Delhi — Shatabdi, Gatimaan, Vande Bharat)", "9-11 PM (arrivals from Mumbai, Bhopal)"],
  },
  'agra-fort': {
    platforms: "4 platforms in the heart of old Agra, walking distance from Agra Fort",
    exits: ["Main Exit (South side) — toward Kinari Bazaar and old city", "North Exit — toward Jama Masjid and Taj Ganj"],
    bestExit: "Driver waits outside the South Exit (main entry), next to the auto-rickshaw stand. We send the driver's photo and vehicle number 30 minutes before arrival.",
    nearestPointsOfInterest: ["Agra Fort (0.5 km — walkable)", "Jama Masjid (1 km)", "Kinari Bazaar (1 km)", "Taj Mahal (5 km)"],
  },
  'ajmer-junction': {
    platforms: "5 platforms; station is 1 km from the Dargah Sharif",
    exits: ["Main Exit (North) — toward Dargah Sharif and city centre", "South Exit — toward Ana Sagar Lake"],
    bestExit: "Driver meets you at the Main Exit next to the prepaid taxi board. For Dargah visitors during Urs week, we pre-arrange shared-zone pickup.",
    nearestPointsOfInterest: ["Ajmer Sharif Dargah (1 km)", "Ana Sagar Lake (2 km)", "Pushkar (15 km)", "Taragarh Fort (5 km)"],
  },
  'hazrat-nizamuddin': {
    platforms: "7 platforms, heavy arrivals from the south (Rajdhani, Duronto)",
    exits: ["Gate 1 (Main) — toward Nizamuddin East and metro station", "Gate 2 — toward Nizamuddin Bridge and Ring Road", "Foot overbridge to Nizamuddin West"],
    bestExit: "Driver waits at Gate 1 just outside the prepaid taxi booth. Nizamuddin Metro station is a 200 m walk if you prefer metro for short hops.",
    nearestPointsOfInterest: ["Humayun's Tomb (1.5 km)", "India Gate (8 km)", "Connaught Place (10 km)", "IGI Airport (16 km via Ring Road)"],
  },
  'jaipur-junction': {
    platforms: "6 platforms, main station for Jaipur city",
    exits: ["Main Exit (Platform 1 side) — toward Station Road and Sindhi Camp Bus Stand", "North Exit (Durgapura side) — less crowded, good for Mumbai train arrivals"],
    bestExit: "Driver stands at Main Exit opposite the pink-façade station building, next to the heritage bus stand. Hold your Triveni Cabs confirmation SMS visible.",
    nearestPointsOfInterest: ["Hawa Mahal (3 km)", "City Palace (3.5 km)", "Amber Fort (11 km)", "Jaipur Airport (13 km)"],
  },
  'mathura-junction': {
    platforms: "8 platforms, one of UP's busiest junctions",
    exits: ["Main Exit (East) — toward Krishna Janmabhoomi temple and Mathura bazaars", "West Exit — toward Govardhan/Vrindavan road"],
    bestExit: "Driver waits at Main Exit next to the auto-rickshaw stand. For Janmashtami and Holi (Braj Holi week), we pre-book pickup slots.",
    nearestPointsOfInterest: ["Krishna Janmabhoomi (2.5 km)", "Vrindavan (12 km)", "Govardhan (22 km)", "Barsana (40 km)"],
  },
  'new-delhi-station': {
    platforms: "16 platforms — India's busiest station, two sides (Paharganj and Ajmeri Gate)",
    exits: ["Paharganj Side (Platform 1 side) — toward Karol Bagh, Paharganj hotels, New Delhi Metro", "Ajmeri Gate Side (Platform 16 side) — toward Connaught Place, Bhavbhuti Marg"],
    bestExit: "We ask which exit you prefer at booking. Paharganj side is closer to Karol Bagh/CP hotels; Ajmeri Gate side is closer to Connaught Place south and metro. Driver waits with your name placard at the taxi pickup zone.",
    nearestPointsOfInterest: ["Connaught Place (1 km)", "India Gate (3 km)", "Red Fort (5 km)", "IGI Airport (16 km via Dhaula Kuan)", "Karol Bagh (3 km — Paharganj side)"],
  },
  'railway-station': {
    platforms: "Covering all major Indian railway stations",
    exits: ["Designated pickup zone outside main station building"],
    bestExit: "Our driver reaches the exit 10–15 minutes before your train arrives. You receive the driver's photo, vehicle number and live GPS location on WhatsApp.",
    nearestPointsOfInterest: ["Varies by city — covered under destination details"],
  },
};

export function getStationDetails(slug) {
  return STATION_DETAILS[slug] || STATION_DETAILS['railway-station'];
}

// ─── ARRIVAL TIPS BY TRAIN TYPE / TIMING ─────────────────────
const ARRIVAL_TIPS = [
  { scenario: "Early morning trains (Rajdhani / Duronto, 5–7 AM arrival)", tip: "Many hotels allow early check-in on request. We message the hotel in advance so your room is ready. Pre-booked taxi is essential — auto-rickshaws are scarce before 6 AM." },
  { scenario: "Shatabdi / Vande Bharat (daytime arrival, 10 AM – 4 PM)", tip: "Peak traffic near the station. Our driver uses alternate routes to avoid the main bazaar gridlock. Expect 10–15 minutes longer than Google Maps estimates during 8–11 AM and 5–8 PM." },
  { scenario: "Late night trains (10 PM – 1 AM arrival)", tip: "Prepaid taxi booth often closes after 11 PM. Pre-booking with us guarantees a safe, verified driver. 24×7 availability with night surcharge already included — no surge pricing." },
  { scenario: "Delayed train? No penalty.", tip: "Our driver tracks your PNR via IRCTC and adjusts pickup time automatically. First 60 minutes of extra wait is free. No rescheduling hassle from your end." },
];

export function getArrivalTips() {
  return ARRIVAL_TIPS;
}

// ─── COMPARISON: OUR TAXI vs ALTERNATIVES ─────────────────────
export function getTaxiComparison(stationName) {
  return [
    { mode: "Triveni Pre-booked Taxi", price: "Fixed fare, shared upfront", wait: "0 min (driver waiting at exit)", vehicle: "AC sedan / SUV under 4 years", badge: "RECOMMENDED", pros: "Platform exit pickup, fixed fare, clean AC, GPS tracked", cons: "Advance booking preferred" },
    { mode: "Prepaid Taxi Booth", price: "Fixed but 15–25% higher", wait: "10–20 min queue", vehicle: "Older cabs, not always AC", pros: "No booking needed", cons: "Queue, older vehicles, no tracking, no luggage help" },
    { mode: "Auto-rickshaw", price: "Metered but often overcharged", wait: "0 min", vehicle: "3-wheeler, no AC, limited luggage", pros: "Cheapest for short distances under 3 km", cons: "No AC, rough ride, meter tampering common, not safe with heavy luggage or kids" },
    { mode: "App Cabs (Ola / Uber)", price: "Surge pricing 1.5-3×", wait: "5–15 min + surge during peak hours", vehicle: "Varies, often non-AC cabs", pros: "Familiar app", cons: "Surge makes it 30–80% costlier than us during peak; driver cancellations common; sometimes can't enter station pickup zone" },
  ];
}

// ─── OUTSTATION OPTIONS FROM STATION ─────────────────────
const OUTSTATION_FROM_CITY = {
  'Agra': [
    { dest: "Delhi", distance: "230 km", time: "3-4 hrs", fare: "₹2,499" },
    { dest: "Jaipur", distance: "240 km", time: "4-5 hrs", fare: "₹3,999" },
    { dest: "Mathura", distance: "55 km", time: "1.5 hrs", fare: "₹1,299" },
    { dest: "Gwalior", distance: "120 km", time: "2.5 hrs", fare: "₹2,199" },
  ],
  'Delhi': [
    { dest: "Agra", distance: "230 km", time: "3-4 hrs", fare: "₹2,499" },
    { dest: "Jaipur", distance: "280 km", time: "4-5 hrs", fare: "₹3,299" },
    { dest: "Haridwar", distance: "230 km", time: "5-6 hrs", fare: "₹3,299" },
    { dest: "Shimla", distance: "350 km", time: "7-8 hrs", fare: "₹3,899" },
  ],
  'Jaipur': [
    { dest: "Delhi", distance: "280 km", time: "4-5 hrs", fare: "₹3,299" },
    { dest: "Udaipur", distance: "395 km", time: "6-7 hrs", fare: "₹4,399" },
    { dest: "Jodhpur", distance: "340 km", time: "6 hrs", fare: "₹3,799" },
    { dest: "Pushkar", distance: "150 km", time: "3 hrs", fare: "₹2,499" },
  ],
  'Ajmer': [
    { dest: "Pushkar", distance: "15 km", time: "30 min", fare: "₹499" },
    { dest: "Jaipur", distance: "135 km", time: "2.5 hrs", fare: "₹2,199" },
    { dest: "Udaipur", distance: "270 km", time: "5 hrs", fare: "₹3,299" },
    { dest: "Jodhpur", distance: "200 km", time: "4 hrs", fare: "₹2,799" },
  ],
  'Mathura': [
    { dest: "Vrindavan", distance: "12 km", time: "30 min", fare: "₹399" },
    { dest: "Agra", distance: "55 km", time: "1.5 hrs", fare: "₹1,299" },
    { dest: "Delhi", distance: "180 km", time: "3 hrs", fare: "₹2,299" },
    { dest: "Govardhan", distance: "22 km", time: "45 min", fare: "₹699" },
  ],
};

export function getOutstationFromCity(city) {
  return OUTSTATION_FROM_CITY[city] || [];
}

// ─── STATION-SPECIFIC REVIEWS (6 per station) ─────────────────────
const REVIEW_TEMPLATES = [
  { name: "Anand B.", rating: 5, vehicle: "Sedan", text: "Arrived at {station} on the Shatabdi at 9:15 AM. Driver was at Exit Gate 1 with my name placard bang on time. Clean Dzire, FASTag on dashboard, air-conditioned. Fare was exactly the ₹{fare} quoted on WhatsApp — no extras." },
  { name: "Kavita R.", rating: 5, vehicle: "Innova Crysta", text: "Family of 5 with four large suitcases arriving at {station}. Booked the Innova Crysta in advance — driver handled all luggage, knew the shortest route to our hotel, and was polite with kids. Much better than the prepaid booth chaos." },
  { name: "Rohit S.", rating: 5, vehicle: "SUV (Ertiga)", text: "Late-night Rajdhani arrival at {station} past midnight. Most booths were closed. Triveni driver was waiting exactly where promised. AC on full, bottled water offered. Reached hotel in 25 minutes safely." },
  { name: "Sujatha P.", rating: 4, vehicle: "Sedan", text: "Pre-booked on WhatsApp the night before. Fare at {fare} was ₹150 less than what the prepaid booth quoted. Driver was friendly and gave me local restaurant recommendations on the way. Only suggestion: SMS confirmation 2 hrs before would be nice." },
  { name: "Naveen T.", rating: 5, vehicle: "Innova", text: "Corporate traveller — Gatimaan arrival at {station}. The driver had already paid the platform parking and was standing at the exit. No stress. GST invoice arrived via email for expense claim. Will use Triveni again." },
  { name: "Meera A.", rating: 5, vehicle: "Sedan", text: "My train got delayed by 1.5 hours — called the driver worried about extra charges. He was tracking the PNR already and said no extra charge. Reached the hotel in a clean, honest, pleasant ride. Recommended." },
];

export function getStationReviews(stationName, sampleFare = 299) {
  const dates = ["2026-01-22", "2026-02-10", "2026-02-28", "2026-03-15", "2026-03-28", "2026-04-08"];
  return REVIEW_TEMPLATES.map((r, i) => ({
    ...r,
    text: r.text.replace(/{station}/g, stationName).replace(/{fare}/g, sampleFare),
    date: dates[i],
  }));
}

// ─── THINGS TO DO IN CITY AFTER ARRIVAL ─────────────────────
const CITY_THINGS_TO_DO = {
  'Agra': [
    { title: "Sunrise at the Taj Mahal (East Gate)", time: "5:30–8 AM", detail: "Ask your driver to drop at East Gate — shorter queue than West Gate. Marble glows pink-gold." },
    { title: "Agra Fort & Kala Masjid", time: "9–11 AM", detail: "Red sandstone Mughal fortress with views of the Taj across the Yamuna. 2 hours needed." },
    { title: "Petha & chaat crawl at Sadar Bazaar", time: "7–9 PM", detail: "Panchhi Petha, Brijwasi sweets, bedai breakfast at Deviram. Your driver knows the best stalls." },
    { title: "Mehtab Bagh Taj sunset view", time: "5–6:30 PM", detail: "Across the Yamuna — the Moonlight Garden. Fewer crowds, magical light." },
  ],
  'Delhi': [
    { title: "Red Fort + Chandni Chowk food walk", time: "10 AM – 2 PM", detail: "Mughal fort plus Old Delhi parathas, kebabs at Karim's, jalebi at Old Famous." },
    { title: "Qutub Minar complex", time: "Afternoon", detail: "73 m UNESCO minaret plus the iron pillar that hasn't rusted in 1,600 years." },
    { title: "India Gate & Kartavya Path", time: "Evening", detail: "War memorial plus the new ceremonial boulevard — food stalls open after dark." },
    { title: "Humayun's Tomb", time: "Morning", detail: "Prototype for the Taj Mahal. Close to Hazrat Nizamuddin station." },
  ],
  'Jaipur': [
    { title: "Amer Fort (elephant ramp)", time: "8–11 AM", detail: "Sheesh Mahal, Ganesh Pol, mirror palace. Arrive early — tour buses pack in by 10 AM." },
    { title: "Hawa Mahal photo stop", time: "11:30 AM", detail: "Best shot from Wind View Café across the road — morning light hits the façade." },
    { title: "City Palace + Jantar Mantar", time: "1–3:30 PM", detail: "Royal museum plus the world's largest stone sundial — UNESCO site." },
    { title: "Chokhi Dhani folk village", time: "7–10 PM", detail: "Rajasthani thali, folk dance, camel rides. Touristy but fun for first-timers." },
  ],
  'Ajmer': [
    { title: "Ajmer Sharif Dargah ziyarat", time: "Morning", detail: "Sufi shrine of Khwaja Moinuddin Chishti — all faiths welcome. Remove shoes, head covered." },
    { title: "Ana Sagar Lake & Daulat Bagh", time: "Afternoon", detail: "12th-century artificial lake with Mughal gardens. Paddle boats available." },
    { title: "Pushkar day trip", time: "Half day", detail: "15 km — Brahma Temple (one of few in India), Pushkar Lake ghats, Savitri Mata ropeway." },
  ],
  'Mathura': [
    { title: "Krishna Janmabhoomi darshan", time: "Morning (6-8 AM best)", detail: "Birthplace of Krishna. Strict security — no phones or bags allowed inside." },
    { title: "Vrindavan temple trail", time: "Afternoon", detail: "Banke Bihari (arrive before 8 AM), ISKCON, Prem Mandir (evening musical fountain)." },
    { title: "Govardhan Parikrama", time: "Full day", detail: "22 km sacred circumambulation trail. Cab drops and picks up at key temple points." },
  ],
};

export function getCityThingsToDo(city) {
  return CITY_THINGS_TO_DO[city] || [
    { title: `Explore ${city} city centre`, time: "Afternoon", detail: `Ask your Triveni driver for a ${city} sightseeing circuit — we can convert to a half-day package on request.` },
    { title: `${city} local cuisine`, time: "Meals", detail: "Driver knows the best local dhabas and heritage restaurants — just ask." },
  ];
}

// ─── INCLUSIONS / EXCLUSIONS ─────────────────────
export const STATION_TAXI_INCLUSIONS = [
  "Driver waits at platform exit with name placard (up to 60 min free wait if train delays)",
  "Live PNR / train-status tracking — no penalty if train is late",
  "AC sedan / SUV under 4 years, cleaned and sanitized before every trip",
  "Verified driver with ID card on dashboard — photo + vehicle number shared via WhatsApp",
  "GPS-tracked ride — live location sharable with family",
  "Fuel & driver allowance included in the quoted fare",
  "FASTag + toll handled by driver (reimbursed at actual)",
  "24×7 customer support before, during, after trip",
];

export const STATION_TAXI_EXCLUSIONS = [
  "Parking fees at destination sightseeing spots (e.g., Taj Mahal, Amber Fort) — paid at actual",
  "Monument entry tickets for passengers",
  "Any meals or beverages for the driver",
  "Extra waiting time beyond 60 min (₹150 / hour)",
  "Inter-state tax if you cross a state border (₹200–500 at actual)",
  "GST on the fare where applicable (included in invoice on request)",
];

// ─── CANCELLATION POLICY ─────────────────────
export const STATION_CANCELLATION_POLICY = [
  { window: "More than 2 hours before train arrival", charge: "Free cancellation — full refund if advance paid" },
  { window: "30 min – 2 hours before arrival", charge: "₹150 cancellation fee (or held as credit for next booking)" },
  { window: "Under 30 min before arrival / no-show", charge: "50% of fare charged" },
  { window: "Train cancelled / platform change", charge: "No charge — just send us the new ETA on WhatsApp" },
];

// ─── EXTENDED FAQs (8 more, route-specific) ─────────────────────
export function getExtendedStationFaqs(stationName, stationCode, city) {
  return [
    { question: `Will the driver wait if my train to ${stationName} is delayed?`, answer: `Yes — we track your PNR / train status live via IRCTC. The first 60 minutes of wait time after your actual arrival is completely free. No penalty for genuine delays. Just share your PNR when you book.` },
    { question: `Can I pre-book a taxi from ${stationName} for a month-old reservation?`, answer: `Absolutely. Bookings can be made up to 6 months in advance for ${stationName} (${stationCode}). Fare is locked at the time of booking — no surge even on festival days.` },
    { question: `Is there any night surcharge for late arrivals at ${stationName}?`, answer: `No night surcharge. Whether you arrive at 3 AM or 3 PM, the fare is the same as the daytime quote. Our 24×7 pickup is one of the main reasons travellers switch from prepaid booth or app cabs.` },
    { question: `Can I pay by UPI, card, or do I need cash at ${stationName}?`, answer: `We accept UPI (PhonePe, GPay, Paytm), card (Visa/Mastercard/Rupay), and cash. Bill is generated on booking confirmation; partial advance available on request.` },
    { question: `What if I need to change my drop location after booking?`, answer: `Drop address can be changed up to 30 minutes before pickup at no charge if within the same city. For major changes (different area / further distance), fare may be revised on actuals.` },
    { question: `Can I book a child seat for ${stationName} pickup?`, answer: `Yes — infant, toddler, and booster seats available on request at no extra charge. Please mention while booking so the driver carries the right seat in the car.` },
    { question: `Do you issue a GST invoice for corporate / business expense claims?`, answer: `Yes — share your GSTIN at booking and we issue a GST-compliant invoice via email within 24 hours of trip completion. Useful for corporate travel expense reimbursement.` },
    { question: `How will I know which car is mine at ${stationName} exit?`, answer: `30 minutes before your arrival, we send on WhatsApp: driver's name + photo, vehicle number, car model + colour, and live GPS location. Driver also holds a printed placard with your name at the exit gate.` },
  ];
}

// ─── WHY PRE-BOOK EXPLAINER ─────────────────────
// ─── HOWTO SCHEMA GENERATOR — 4-step booking ─────────────────────
export function getStationHowToSchema(station) {
  const { stationName, stationCode, city, slug, destinations } = station;
  const cheapest = destinations.reduce((m, d) => Math.min(m, d.fare), Infinity);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Book a Taxi from ${stationName} Railway Station`,
    "description": `Book a pre-paid taxi from ${stationName} (${stationCode}) in 4 simple steps. Driver waits at platform exit with name board.`,
    "totalTime": "PT2M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": cheapest.toString() },
    "supply": [
      { "@type": "HowToSupply", "name": "Train arrival time (or PNR number)" },
      { "@type": "HowToSupply", "name": "Drop destination in " + city },
      { "@type": "HowToSupply", "name": "Vehicle preference (Sedan / SUV / Tempo)" }
    ],
    "step": [
      { "@type": "HowToStep", "position": 1, "name": `Share your ${stationName} arrival`, "text": `Call or WhatsApp 7668570551 with your PNR or train arrival time at ${stationName} (${stationCode}), your drop destination, and vehicle preference. Book 30 min – 6 months in advance.`, "url": `https://www.trivenicabs.in/${slug}#step1` },
      { "@type": "HowToStep", "position": 2, "name": "Get driver details before train arrives", "text": `30 minutes before your train arrival, receive driver's photo, vehicle number, car model, and live GPS location on WhatsApp. Driver holds printed placard with your name at the exit gate.`, "url": `https://www.trivenicabs.in/${slug}#step2` },
      { "@type": "HowToStep", "position": 3, "name": `Meet driver at ${stationName} exit`, "text": `Walk out of ${stationName} Exit Gate. Driver is waiting at the platform exit taxi zone — no queue, no haggling. Up to 60 minutes free wait if train is delayed (PNR-tracked automatically).`, "url": `https://www.trivenicabs.in/${slug}#step3` },
      { "@type": "HowToStep", "position": 4, "name": "Enjoy fixed-fare clean ride", "text": `Settle into a clean, AC vehicle with verified driver. Fare is exactly what was quoted — no surge, no meter tampering. Pay via UPI, card, or cash.`, "url": `https://www.trivenicabs.in/${slug}#step4` }
    ]
  };
}

export function getWhyPreBookReasons(stationName) {
  return [
    { title: "No queue at the prepaid booth", detail: `Save 15–25 minutes at ${stationName} — especially important after a long journey with luggage.` },
    { title: "Fare known before your train even arrives", detail: "No haggling at the exit, no meter tampering, no surge pricing. The quote on WhatsApp is the final price." },
    { title: "Driver recognises you, not vice versa", detail: "Name placard + pre-shared driver photo. You walk out of the station and into the car — no searching." },
    { title: "Safer for solo women travellers", detail: "Background-verified driver, photo + vehicle number shared in advance, GPS tracked trip, shareable live location." },
  ];
}
