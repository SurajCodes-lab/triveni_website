// src/utilis/busVsCabData.js - Complete data for 20 bus vs cab comparison pages
// Cab Pricing: Sedan ₹11/km, SUV ₹14/km

function generateFaqs(origin, dest, distKm, busCost, sedanFare, timeSaved) {
  return [
    { question: `Is it cheaper to take a bus or cab from ${origin} to ${dest}?`, answer: `A bus from ${origin} to ${dest} costs ₹${busCost} (non-AC) to ₹${Math.round(busCost * 1.6)} (Volvo). A cab costs ₹${sedanFare} for Sedan. For solo travelers, bus is cheaper. For 2+ passengers sharing a cab, the per-person cab cost becomes comparable or cheaper than Volvo bus, with added comfort and door-to-door service.` },
    { question: `How much time does a cab save vs bus from ${origin} to ${dest}?`, answer: `A cab saves approximately ${timeSaved} compared to bus. Cabs take the fastest route without stops, while buses stop at multiple points. Plus, no waiting time at bus stands — you get picked up from your doorstep.` },
    { question: `Can I book a one-way cab from ${origin} to ${dest}?`, answer: `Yes, Triveni Cabs offers affordable one-way cab service from ${origin} to ${dest}. Starting at ₹${sedanFare} for AC Sedan. Call 7668570551 or WhatsApp for instant booking. No return fare charged for one-way trips.` },
    { question: `Is cab safe at night from ${origin} to ${dest}?`, answer: `Yes, Triveni Cabs provides GPS-tracked vehicles with verified drivers for the ${origin} to ${dest} route. All rides are monitored 24/7. We recommend daytime travel for the best experience, but our night service is fully safe with experienced drivers.` },
    { question: `What is the best way to travel from ${origin} to ${dest} with family?`, answer: `For families (3-4 members), a cab is the best option. Per-person cost in a Sedan becomes just ₹${Math.round(sedanFare / 4)} each, which is cheaper than Volvo bus tickets. Plus you get door-to-door service, AC comfort, flexible stops, and luggage space.` },
    { question: `How do I book the cheapest cab from ${origin} to ${dest}?`, answer: `Book directly with Triveni Cabs at 7668570551 to get the cheapest rate of ₹${sedanFare} (Sedan). Direct booking avoids app commissions. We offer flat rates with no surge pricing. WhatsApp us for an instant quote.` },
  ];
}

function createRoute({ slug, origin, destination, distanceKm, busOptions, cabOptions, verdict, scenarios, relatedRoutes }) {
  const sedanFare = Math.max(distanceKm, 300) * 11;
  const suvFare = Math.max(distanceKm, 300) * 14;
  const avgBusCost = Math.round(busOptions.reduce((s, b) => s + b.cost, 0) / busOptions.length);
  const timeSavedHrs = busOptions[0] ? (parseFloat(busOptions[0].duration) - parseFloat(cabOptions.sedan.duration)).toFixed(1) : '1-2';

  const comparison = {
    costSolo: { bus: `₹${avgBusCost}`, cab: `₹${sedanFare}`, winner: avgBusCost < sedanFare ? 'Bus' : 'Cab' },
    costCouple: { bus: `₹${avgBusCost * 2}`, cab: `₹${sedanFare}`, winner: (avgBusCost * 2) < sedanFare ? 'Bus' : 'Cab', perPerson: `₹${Math.round(sedanFare / 2)}` },
    costFamily: { bus: `₹${avgBusCost * 4}`, cab: `₹${sedanFare}`, winner: (avgBusCost * 4) < sedanFare ? 'Bus' : 'Cab', perPerson: `₹${Math.round(sedanFare / 4)}` },
    timeSaved: `${timeSavedHrs} hours`,
    comfortRating: { bus: 3, cab: 5 },
  };

  return {
    slug,
    origin,
    destination,
    distanceKm,
    busOptions,
    cabOptions: {
      sedan: { fare: `₹${sedanFare.toLocaleString('en-IN')}`, fareRaw: sedanFare, duration: cabOptions.sedan.duration, perKm: 11 },
      suv: { fare: `₹${suvFare.toLocaleString('en-IN')}`, fareRaw: suvFare, duration: cabOptions.suv.duration, perKm: 14 },
    },
    comparison,
    verdict,
    scenarios,
    relatedRoutes: relatedRoutes || [],
    faqs: generateFaqs(origin, destination, distanceKm, avgBusCost, sedanFare, comparison.timeSaved),
  };
}

export const busVsCabRoutes = {
  "delhi-to-manali": createRoute({
    slug: "delhi-to-manali", origin: "Delhi", destination: "Manali", distanceKm: 530,
    busOptions: [
      { type: "Ordinary Bus", duration: "14-16 hrs", cost: 750, frequency: "Every 2 hours" },
      { type: "Semi-Deluxe AC", duration: "13-15 hrs", cost: 1100, frequency: "4 daily" },
      { type: "Volvo AC", duration: "12-14 hrs", cost: 1500, frequency: "6 daily (evening)" },
    ],
    cabOptions: { sedan: { duration: "11-12 hrs" }, suv: { duration: "11-12 hrs" } },
    verdict: "Cab wins for families & groups of 2+. Saves 2-3 hours, door-to-door pickup, flexible stops at Murthal & Chandigarh. Bus is cheaper only for solo budget travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo bus at ₹1,500 is significantly cheaper than cab for one person. Overnight buses save a hotel night." },
      { scenario: "Couple Trip", winner: "Cab", reason: "Per-person cab cost drops to ~₹2,915 — similar to Volvo but with AC comfort, privacy, and door-to-door service." },
      { scenario: "Family of 4", winner: "Cab", reason: "At ~₹1,458 per person, cab is cheaper than Volvo bus tickets and infinitely more comfortable with kids." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ₹14/km seats 6-7. Per-person cost drops to ~₹1,237 — cheapest and most comfortable option." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "No bus stand hassle, AC comfort, rest stops on demand, and door-to-door service is essential for senior citizens." },
      { scenario: "Weekend Getaway", winner: "Cab", reason: "Flexibility to stop at Murthal dhabas, Chandigarh, and scenic points. Make the journey part of the trip." },
    ],
    relatedRoutes: ["delhi-to-shimla", "delhi-to-kasol", "delhi-to-dharamshala", "chandigarh-to-manali"],
  }),

  "delhi-to-shimla": createRoute({
    slug: "delhi-to-shimla", origin: "Delhi", destination: "Shimla", distanceKm: 350,
    busOptions: [
      { type: "Ordinary Bus", duration: "10-11 hrs", cost: 550, frequency: "Every 3 hours" },
      { type: "Semi-Deluxe AC", duration: "9-10 hrs", cost: 850, frequency: "5 daily" },
      { type: "Volvo AC", duration: "8-9 hrs", cost: 1200, frequency: "8 daily" },
    ],
    cabOptions: { sedan: { duration: "7-8 hrs" }, suv: { duration: "7-8 hrs" } },
    verdict: "Cab is the clear winner for couples and families. Saves 1-2 hours, offers scenic Kalka-Shimla mountain drive at your pace. Bus only for solo budget travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,200 saves money. Overnight bus saves a hotel night too." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,925/person in cab vs ₹1,200/person Volvo. Slightly more, but with immense comfort and flexibility." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹963/person — cheaper than Volvo bus! Door-to-door, stop at Pinjore Gardens, and comfortable for kids." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹817/person beats every bus option in both cost and comfort." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Mountain roads are tiring in buses. AC cab with rest stops is essential for seniors." },
      { scenario: "Honeymoon Trip", winner: "Cab", reason: "Privacy, scenic stops at Barog and Solan, no crowded bus stands. Make the drive romantic." },
    ],
    relatedRoutes: ["delhi-to-manali", "delhi-to-chandigarh", "chandigarh-to-shimla", "delhi-to-mussoorie"],
  }),

  "delhi-to-jaipur": createRoute({
    slug: "delhi-to-jaipur", origin: "Delhi", destination: "Jaipur", distanceKm: 280,
    busOptions: [
      { type: "Ordinary Bus", duration: "6-7 hrs", cost: 450, frequency: "Every 30 min" },
      { type: "Semi-Deluxe AC", duration: "5-6 hrs", cost: 700, frequency: "Every hour" },
      { type: "Volvo AC", duration: "5 hrs", cost: 1000, frequency: "10+ daily" },
    ],
    cabOptions: { sedan: { duration: "4-5 hrs" }, suv: { duration: "4-5 hrs" } },
    verdict: "Cab wins for 2+ travelers on the Delhi-Jaipur Expressway. Saves 1-2 hours. Bus is viable only for solo travelers on a tight budget.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,000 is much cheaper. Excellent expressway makes bus comfortable too." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person vs ₹1,000 Volvo. The door-to-door convenience on expressway makes cab worth it." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — cheaper than Volvo! Expressway drive is smooth and fast with kids." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹653/person beats all bus options. Stop at Neemrana Fort on the way." },
      { scenario: "Business Trip", winner: "Cab", reason: "Work on laptop during the drive, take calls, and arrive fresh. Time is money." },
      { scenario: "Weekend Getaway", winner: "Cab", reason: "Flexible timing, stop at Neemrana or Behror for food. No bus schedule constraints." },
    ],
    relatedRoutes: ["delhi-to-agra", "delhi-to-udaipur", "jaipur-to-udaipur", "jaipur-to-jodhpur"],
  }),

  "delhi-to-agra": createRoute({
    slug: "delhi-to-agra", origin: "Delhi", destination: "Agra", distanceKm: 230,
    busOptions: [
      { type: "Ordinary Bus", duration: "5-6 hrs", cost: 350, frequency: "Every hour" },
      { type: "Semi-Deluxe AC", duration: "4-5 hrs", cost: 550, frequency: "6 daily" },
      { type: "Volvo AC", duration: "4 hrs", cost: 850, frequency: "8 daily" },
    ],
    cabOptions: { sedan: { duration: "3-3.5 hrs" }, suv: { duration: "3-3.5 hrs" } },
    verdict: "Cab is ideal for Taj Mahal day trips. Saves 1-2 hours each way, enabling early morning Taj visit. Bus only for solo budget travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹850 is cheaper. Train (Gatimaan Express) is even faster at ₹750." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person via Yamuna Expressway. Start at 5 AM for sunrise Taj — impossible with bus timings." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — matches bus price! Yamuna Expressway is ultra-smooth for kids." },
      { scenario: "Taj Mahal Day Trip", winner: "Cab", reason: "Only a cab lets you leave at 5 AM, see Taj at sunrise, visit Agra Fort, and return by evening." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Yamuna Expressway in AC comfort. No bus stand struggle. Direct hotel-to-Taj service." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹700/person with stops at Mathura for peda and vrindavan darshan." },
    ],
    relatedRoutes: ["delhi-to-jaipur", "delhi-to-mathura", "agra-to-jaipur", "delhi-to-lucknow"],
  }),

  "delhi-to-haridwar": createRoute({
    slug: "delhi-to-haridwar", origin: "Delhi", destination: "Haridwar", distanceKm: 230,
    busOptions: [
      { type: "Ordinary Bus", duration: "7-8 hrs", cost: 400, frequency: "Every 2 hours" },
      { type: "Semi-Deluxe AC", duration: "6-7 hrs", cost: 650, frequency: "5 daily" },
      { type: "Volvo AC", duration: "5.5-6 hrs", cost: 900, frequency: "6 daily" },
    ],
    cabOptions: { sedan: { duration: "4.5-5 hrs" }, suv: { duration: "4.5-5 hrs" } },
    verdict: "Cab is better for religious groups and families. Arrive in time for Ganga Aarti with flexible departure. Bus is fine for solo pilgrims.",
    scenarios: [
      { scenario: "Solo Pilgrim", winner: "Bus", reason: "Volvo at ₹900 is budget-friendly. Many buses timed to reach for evening Aarti." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person with door-to-door service. Leave Delhi after lunch, reach for 7 PM Ganga Aarti." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person beats Volvo pricing. Kids can rest in AC comfort. Flexible stops." },
      { scenario: "Religious Group", winner: "Cab (Tempo)", reason: "Tempo Traveller for 12+ people at ₹20/km. Per person cost drops below ₹500." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "No crowded Kashmere Gate ISBT. AC comfort with stops at Meerut for chai." },
      { scenario: "Weekend Pilgrimage", winner: "Cab", reason: "Combine Haridwar + Rishikesh in one trip. Cab gives flexibility bus cannot." },
    ],
    relatedRoutes: ["delhi-to-rishikesh", "delhi-to-dehradun", "delhi-to-mussoorie", "delhi-to-nainital"],
  }),

  "delhi-to-chandigarh": createRoute({
    slug: "delhi-to-chandigarh", origin: "Delhi", destination: "Chandigarh", distanceKm: 250,
    busOptions: [
      { type: "Ordinary Bus", duration: "6-7 hrs", cost: 400, frequency: "Every 30 min" },
      { type: "Semi-Deluxe AC", duration: "5-6 hrs", cost: 650, frequency: "8 daily" },
      { type: "Volvo AC", duration: "4.5-5 hrs", cost: 950, frequency: "12+ daily" },
    ],
    cabOptions: { sedan: { duration: "4-4.5 hrs" }, suv: { duration: "4-4.5 hrs" } },
    verdict: "Very competitive route. Cab wins for 2+ travelers — only marginally more than Volvo but with door-to-door convenience on NH-44.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹950 on excellent highway. Frequent departures from ISBT." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person — worth it for direct NH-44 drive with no stops unless you want them." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — cheaper than Volvo! Stop at Murthal for paranthas on the way." },
      { scenario: "Business Trip", winner: "Cab", reason: "Work during the ride on smooth NH-44. Arrive fresh for meetings." },
      { scenario: "Gateway to Hills", winner: "Cab", reason: "If continuing to Shimla/Manali, cab from Delhi is seamless. No Chandigarh bus transfers." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹583/person. Murthal parantha stop included in the experience." },
    ],
    relatedRoutes: ["delhi-to-shimla", "delhi-to-manali", "chandigarh-to-shimla", "chandigarh-to-manali"],
  }),

  "delhi-to-rishikesh": createRoute({
    slug: "delhi-to-rishikesh", origin: "Delhi", destination: "Rishikesh", distanceKm: 250,
    busOptions: [
      { type: "Ordinary Bus", duration: "8-9 hrs", cost: 450, frequency: "Every 3 hours" },
      { type: "Semi-Deluxe AC", duration: "7-8 hrs", cost: 700, frequency: "4 daily" },
      { type: "Volvo AC", duration: "6-7 hrs", cost: 1000, frequency: "5 daily" },
    ],
    cabOptions: { sedan: { duration: "5-5.5 hrs" }, suv: { duration: "5-5.5 hrs" } },
    verdict: "Cab is ideal for adventure seekers and yoga retreaters. Saves 1.5-2 hours and offers direct ashram/resort drop. Bus for solo backpackers.",
    scenarios: [
      { scenario: "Solo Backpacker", winner: "Bus", reason: "Volvo at ₹1,000 leaves more budget for rafting and bungee. Overnight bus saves a night." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person with scenic Ganga-side drive. Drop directly at Laxman Jhula area." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — matches bus price. Kids enjoy the scenic river drive." },
      { scenario: "Adventure Group", winner: "Cab", reason: "Flexible timing for rafting schedules. Carry all gear comfortably." },
      { scenario: "Yoga Retreat", winner: "Cab", reason: "Direct drop at your ashram. No auto-rickshaw struggle from bus stand." },
      { scenario: "Haridwar + Rishikesh Combo", winner: "Cab", reason: "Visit both holy cities in one trip. Cab offers seamless inter-city travel." },
    ],
    relatedRoutes: ["delhi-to-haridwar", "delhi-to-dehradun", "delhi-to-mussoorie", "delhi-to-nainital"],
  }),

  "delhi-to-amritsar": createRoute({
    slug: "delhi-to-amritsar", origin: "Delhi", destination: "Amritsar", distanceKm: 450,
    busOptions: [
      { type: "Ordinary Bus", duration: "10-11 hrs", cost: 700, frequency: "Every 2 hours" },
      { type: "Semi-Deluxe AC", duration: "9-10 hrs", cost: 1000, frequency: "6 daily" },
      { type: "Volvo AC", duration: "8-9 hrs", cost: 1400, frequency: "8 daily" },
    ],
    cabOptions: { sedan: { duration: "7-8 hrs" }, suv: { duration: "7-8 hrs" } },
    verdict: "Cab is perfect for Golden Temple pilgrimages and family trips. Direct drive with no Ludhiana/Jalandhar stops. Bus for solo budget travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,400 is much cheaper. Overnight bus reaches early morning for darshan." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹2,475/person. Golden Temple at sunrise + Wagah Border in one day — only possible with cab." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹1,238/person — matches Volvo! Door-to-door with luggage for the whole family." },
      { scenario: "Wagah Border Trip", winner: "Cab", reason: "Cab lets you visit Golden Temple AND Wagah Border (32 km) in the same day." },
      { scenario: "Religious Group", winner: "Cab (Tempo)", reason: "Tempo at ₹20/km for 12+ people. Per-person under ₹800 with group comfort." },
      { scenario: "Weekend Trip", winner: "Cab", reason: "Leave Friday night, reach Saturday morning. Full weekend of sightseeing with flexible returns." },
    ],
    relatedRoutes: ["delhi-to-chandigarh", "delhi-to-dharamshala", "delhi-to-shimla", "delhi-to-manali"],
  }),

  "jaipur-to-udaipur": createRoute({
    slug: "jaipur-to-udaipur", origin: "Jaipur", destination: "Udaipur", distanceKm: 395,
    busOptions: [
      { type: "Ordinary Bus", duration: "8-9 hrs", cost: 550, frequency: "Every 3 hours" },
      { type: "Semi-Deluxe AC", duration: "7-8 hrs", cost: 850, frequency: "4 daily" },
      { type: "Volvo AC", duration: "6.5-7 hrs", cost: 1200, frequency: "5 daily" },
    ],
    cabOptions: { sedan: { duration: "5.5-6.5 hrs" }, suv: { duration: "5.5-6.5 hrs" } },
    verdict: "Cab is the royal way to travel between Rajasthan jewels. Stop at Chittorgarh Fort en route. Bus for solo budget travelers only.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,200 is affordable. Well-connected route with frequent buses." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹2,173/person. Stop at Chittorgarh Fort — making the journey a heritage experience." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹1,086/person — matches Volvo cost with infinitely more comfort and flexibility." },
      { scenario: "Heritage Tour", winner: "Cab", reason: "Stop at Chittorgarh Fort, Pushkar, or Nathdwara temple. Bus cannot offer this." },
      { scenario: "Honeymoon Trip", winner: "Cab", reason: "Udaipur is the City of Lakes. Arrive in style with a private cab, not a bus." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹920/person. Royal Rajasthan road trip experience." },
    ],
    relatedRoutes: ["jaipur-to-jodhpur", "delhi-to-udaipur", "delhi-to-jaipur", "jaipur-to-jaisalmer"],
  }),

  "jaipur-to-jodhpur": createRoute({
    slug: "jaipur-to-jodhpur", origin: "Jaipur", destination: "Jodhpur", distanceKm: 335,
    busOptions: [
      { type: "Ordinary Bus", duration: "7-8 hrs", cost: 500, frequency: "Every 2 hours" },
      { type: "Semi-Deluxe AC", duration: "6-7 hrs", cost: 750, frequency: "5 daily" },
      { type: "Volvo AC", duration: "5.5-6 hrs", cost: 1100, frequency: "4 daily" },
    ],
    cabOptions: { sedan: { duration: "5-5.5 hrs" }, suv: { duration: "5-5.5 hrs" } },
    verdict: "Cab offers the best Rajasthan road trip experience. Stop at Ajmer/Pushkar en route. Bus is okay for solo travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,100. The Pink City to Blue City bus is scenic and comfortable." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,843/person with stop at Pushkar or Ajmer Sharif. Heritage route experience." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹921/person — cheaper than Volvo! Desert landscape drive is memorable for kids." },
      { scenario: "Heritage Tour", winner: "Cab", reason: "Ajmer Sharif + Pushkar Lake en route to the Blue City. Impossible by bus." },
      { scenario: "Photography Trip", winner: "Cab", reason: "Stop at desert landscapes, camels, and windmills for Instagram-worthy shots." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹782/person. Royal Rajasthan desert drive." },
    ],
    relatedRoutes: ["jaipur-to-udaipur", "delhi-to-jodhpur", "delhi-to-jaipur", "jodhpur-to-jaisalmer"],
  }),

  "chandigarh-to-manali": createRoute({
    slug: "chandigarh-to-manali", origin: "Chandigarh", destination: "Manali", distanceKm: 310,
    busOptions: [
      { type: "Ordinary Bus", duration: "10-11 hrs", cost: 600, frequency: "Every 3 hours" },
      { type: "Semi-Deluxe AC", duration: "9-10 hrs", cost: 900, frequency: "4 daily" },
      { type: "Volvo AC", duration: "8-9 hrs", cost: 1300, frequency: "6 daily" },
    ],
    cabOptions: { sedan: { duration: "7-8 hrs" }, suv: { duration: "7-8 hrs" } },
    verdict: "Cab is the best option for the scenic mountain drive. Stop at Pandoh Dam and Kullu Valley. Bus for solo budget travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,300 is budget-friendly for the mountain route." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,705/person. Scenic Beas river drive, stop at Sundernagar, Pandoh Dam." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹853/person — cheaper than Volvo! Mountain roads are nauseating in buses for kids." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹723/person. Stop anywhere for mountain views and photos." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Mountain bus rides are extremely tiring. AC cab with rest stops is essential." },
      { scenario: "Adventure Trip", winner: "Cab", reason: "Carry rafting gear, skiing equipment. No luggage limits unlike bus." },
    ],
    relatedRoutes: ["delhi-to-manali", "chandigarh-to-shimla", "delhi-to-chandigarh", "delhi-to-kasol"],
  }),

  "chandigarh-to-shimla": createRoute({
    slug: "chandigarh-to-shimla", origin: "Chandigarh", destination: "Shimla", distanceKm: 120,
    busOptions: [
      { type: "Ordinary Bus", duration: "4-5 hrs", cost: 300, frequency: "Every hour" },
      { type: "Semi-Deluxe AC", duration: "3.5-4 hrs", cost: 450, frequency: "6 daily" },
      { type: "Volvo AC", duration: "3-3.5 hrs", cost: 650, frequency: "8 daily" },
    ],
    cabOptions: { sedan: { duration: "3-3.5 hrs" }, suv: { duration: "3-3.5 hrs" } },
    verdict: "Short scenic mountain drive. Cab is comparable in time but offers privacy and stops at Pinjore Gardens and Barog. Bus is fine for solo.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹650 is very affordable for a 3-hour mountain ride." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person. Short drive with scenic Kalka-Shimla road and Pinjore stop." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — slightly more than Volvo but infinitely better with kids on mountain roads." },
      { scenario: "Day Trip", winner: "Cab", reason: "Drive up in the morning, explore Shimla, return by evening. Bus timings do not allow this." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Short but winding mountain road. AC cab is much more comfortable than bus." },
      { scenario: "Honeymoon Trip", winner: "Cab", reason: "Private scenic drive on one of India's most beautiful mountain roads." },
    ],
    relatedRoutes: ["delhi-to-shimla", "chandigarh-to-manali", "delhi-to-chandigarh", "shimla-to-manali"],
  }),

  "lucknow-to-varanasi": createRoute({
    slug: "lucknow-to-varanasi", origin: "Lucknow", destination: "Varanasi", distanceKm: 300,
    busOptions: [
      { type: "Ordinary Bus", duration: "7-8 hrs", cost: 450, frequency: "Every 2 hours" },
      { type: "Semi-Deluxe AC", duration: "6-7 hrs", cost: 700, frequency: "5 daily" },
      { type: "Volvo AC", duration: "5.5-6 hrs", cost: 1000, frequency: "4 daily" },
    ],
    cabOptions: { sedan: { duration: "5-5.5 hrs" }, suv: { duration: "5-5.5 hrs" } },
    verdict: "Cab wins for pilgrims and families. Direct ghat-to-ghat service. Bus for solo travelers on UP state transport.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "UP State Roadways at ₹450 is very cheap. Frequent services available." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person. Direct drop at Dashashwamedh Ghat. No auto struggle in Varanasi lanes." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — cheaper than Volvo! Essential for families visiting Kashi Vishwanath." },
      { scenario: "Pilgrim Group", winner: "Cab (Tempo)", reason: "Tempo at ₹20/km for 12+ pilgrims. Most affordable and comfortable option." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Door-to-ghat service. No UP roadways bus stand chaos. AC comfort throughout." },
      { scenario: "Cultural Tour", winner: "Cab", reason: "Stop at Allahabad (Prayagraj) Sangam en route. Two holy cities in one trip." },
    ],
    relatedRoutes: ["delhi-to-varanasi", "delhi-to-lucknow", "varanasi-to-bodhgaya", "lucknow-to-ayodhya"],
  }),

  "delhi-to-nainital": createRoute({
    slug: "delhi-to-nainital", origin: "Delhi", destination: "Nainital", distanceKm: 300,
    busOptions: [
      { type: "Ordinary Bus", duration: "8-9 hrs", cost: 500, frequency: "Every 3 hours" },
      { type: "Semi-Deluxe AC", duration: "7-8 hrs", cost: 750, frequency: "4 daily" },
      { type: "Volvo AC", duration: "7 hrs", cost: 1100, frequency: "4 daily" },
    ],
    cabOptions: { sedan: { duration: "6-7 hrs" }, suv: { duration: "6-7 hrs" } },
    verdict: "Cab is ideal for the scenic Haldwani-Nainital mountain stretch. Bus passengers struggle with last 30 km hairpins. Cab offers comfort.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,100 is budget-friendly. But the last 30 km mountain stretch is tough in bus." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person. The Haldwani-Nainital drive is breathtaking in a private car." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — cheaper than Volvo! Mountain roads with kids need private cab comfort." },
      { scenario: "Weekend Getaway", winner: "Cab", reason: "Leave Friday night, reach Saturday morning. Enjoy Naini Lake boating with flexible schedule." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "30 km mountain hairpin drive needs AC comfort and rest stops. Bus is not recommended." },
      { scenario: "Nature Photography", winner: "Cab", reason: "Stop at scenic points between Haldwani and Nainital for Himalayan view photos." },
    ],
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-corbett", "delhi-to-rishikesh", "delhi-to-dehradun"],
  }),

  "delhi-to-mussoorie": createRoute({
    slug: "delhi-to-mussoorie", origin: "Delhi", destination: "Mussoorie", distanceKm: 290,
    busOptions: [
      { type: "Ordinary Bus", duration: "8-9 hrs", cost: 500, frequency: "Every 3 hours" },
      { type: "Semi-Deluxe AC", duration: "7-8 hrs", cost: 750, frequency: "3 daily" },
      { type: "Volvo AC", duration: "6.5-7 hrs", cost: 1050, frequency: "4 daily" },
    ],
    cabOptions: { sedan: { duration: "5.5-6 hrs" }, suv: { duration: "5.5-6 hrs" } },
    verdict: "Cab is perfect for the Queen of Hills. Scenic Rajpur Road drive, direct Mall Road drop. Bus drops at Dehradun, then you still need a cab.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹1,050. But note: bus only goes to Dehradun. You need another cab to Mussoorie (₹500)." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person. Direct Mall Road drop. No Dehradun transfer hassle. Saves ₹500 + time." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person. Direct hotel drop in Mussoorie. Scenic Rajpur Road drive with kids." },
      { scenario: "Honeymoon Trip", winner: "Cab", reason: "Private drive through the stunning Rajpur Road to the Queen of Hills. Romantic and comfortable." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Bus drops at Dehradun ISBT. Seniors cannot manage another cab to Mussoorie." },
      { scenario: "Weekend Getaway", winner: "Cab", reason: "Direct drive, stop at Kempty Falls on the way. No time wasted on bus transfers." },
    ],
    relatedRoutes: ["delhi-to-dehradun", "delhi-to-rishikesh", "delhi-to-haridwar", "delhi-to-nainital"],
  }),

  "delhi-to-dehradun": createRoute({
    slug: "delhi-to-dehradun", origin: "Delhi", destination: "Dehradun", distanceKm: 255,
    busOptions: [
      { type: "Ordinary Bus", duration: "7-8 hrs", cost: 450, frequency: "Every 2 hours" },
      { type: "Semi-Deluxe AC", duration: "6-7 hrs", cost: 700, frequency: "5 daily" },
      { type: "Volvo AC", duration: "5.5-6 hrs", cost: 950, frequency: "8 daily" },
    ],
    cabOptions: { sedan: { duration: "5-5.5 hrs" }, suv: { duration: "5-5.5 hrs" } },
    verdict: "Cab is the gateway to Uttarakhand. Direct service via Delhi-Meerut Expressway. Bus is competitive for solo travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Volvo at ₹950 is very affordable on this well-connected route." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹1,650/person. Delhi-Meerut Expressway makes the first half ultra-fast." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹825/person — cheaper than Volvo! Gateway to Mussoorie, Haridwar, Rishikesh." },
      { scenario: "Mussoorie Connection", winner: "Cab", reason: "Continue directly to Mussoorie (35 km more). Bus requires a transfer in Dehradun." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Door-to-door service. No ISBT hassle. Direct hotel/home drop in Dehradun." },
      { scenario: "Weekend Getaway", winner: "Cab", reason: "Combine Dehradun + Mussoorie + Rishikesh in one cab trip. Seamless travel." },
    ],
    relatedRoutes: ["delhi-to-mussoorie", "delhi-to-haridwar", "delhi-to-rishikesh", "delhi-to-nainital"],
  }),

  "delhi-to-varanasi": createRoute({
    slug: "delhi-to-varanasi", origin: "Delhi", destination: "Varanasi", distanceKm: 820,
    busOptions: [
      { type: "Ordinary Bus", duration: "14-16 hrs", cost: 900, frequency: "4 daily" },
      { type: "Semi-Deluxe AC", duration: "13-14 hrs", cost: 1400, frequency: "3 daily" },
      { type: "Volvo AC", duration: "12-13 hrs", cost: 1800, frequency: "3 daily (sleeper)" },
    ],
    cabOptions: { sedan: { duration: "11-12 hrs" }, suv: { duration: "11-12 hrs" } },
    verdict: "Long route where cab shines for groups and families. Overnight journey — cab lets you sleep at a highway hotel. Bus is tiring for 14+ hours.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Sleeper Volvo at ₹1,800 or train is better for solo. Cab is expensive alone." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹4,510/person. Break journey at Lucknow or Prayagraj. Comfortable overnight with driver swap." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹2,255/person — comparable to AC sleeper bus with infinitely more comfort." },
      { scenario: "Pilgrim Group", winner: "Cab (Tempo)", reason: "Tempo at ₹20/km for 12+ pilgrims. Stop at Prayagraj Sangam en route to Kashi." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "14-hour bus is not feasible for seniors. Cab with overnight hotel stop is the only option." },
      { scenario: "Multi-City Tour", winner: "Cab", reason: "Delhi → Lucknow → Prayagraj → Varanasi. Visit 3 holy cities in one road trip." },
    ],
    relatedRoutes: ["delhi-to-lucknow", "lucknow-to-varanasi", "delhi-to-agra", "delhi-to-haridwar"],
  }),

  "delhi-to-dharamshala": createRoute({
    slug: "delhi-to-dharamshala", origin: "Delhi", destination: "Dharamshala", distanceKm: 480,
    busOptions: [
      { type: "Ordinary Bus", duration: "11-12 hrs", cost: 700, frequency: "4 daily" },
      { type: "Semi-Deluxe AC", duration: "10-11 hrs", cost: 1050, frequency: "3 daily" },
      { type: "Volvo AC", duration: "9-10 hrs", cost: 1400, frequency: "5 daily (overnight)" },
    ],
    cabOptions: { sedan: { duration: "8-9 hrs" }, suv: { duration: "8-9 hrs" } },
    verdict: "Cab saves 2+ hours and offers scenic Kangra Valley drive. Ideal for Mcleodganj visitors. Bus for solo travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Overnight Volvo at ₹1,400 reaches early morning. Budget-friendly." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹2,640/person. Direct Mcleodganj drop. Scenic Kangra Valley drive." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹1,320/person — comparable to Volvo with kids' comfort." },
      { scenario: "Dalai Lama Visit", winner: "Cab", reason: "Direct Mcleodganj temple drop. No Dharamshala to Mcleodganj auto hassle." },
      { scenario: "Elderly Parents", winner: "Cab", reason: "Mountain bus ride for 10+ hours is exhausting. Cab with rest stops is essential." },
      { scenario: "Backpacking Trip", winner: "Cab", reason: "Carry trekking gear comfortably. Stop at Palampur tea gardens en route." },
    ],
    relatedRoutes: ["delhi-to-manali", "delhi-to-shimla", "delhi-to-amritsar", "delhi-to-chandigarh"],
  }),

  "delhi-to-kasol": createRoute({
    slug: "delhi-to-kasol", origin: "Delhi", destination: "Kasol", distanceKm: 520,
    busOptions: [
      { type: "Ordinary Bus", duration: "13-14 hrs", cost: 750, frequency: "3 daily" },
      { type: "Semi-Deluxe AC", duration: "12-13 hrs", cost: 1100, frequency: "2 daily" },
      { type: "Volvo AC", duration: "11-12 hrs", cost: 1500, frequency: "3 daily (to Bhuntar)" },
    ],
    cabOptions: { sedan: { duration: "10-11 hrs" }, suv: { duration: "10-11 hrs" } },
    verdict: "Cab is essential for the last stretch from Bhuntar to Kasol (30 km). Buses drop at Bhuntar — you need another cab anyway. Cab is seamless.",
    scenarios: [
      { scenario: "Solo Backpacker", winner: "Bus", reason: "Volvo to Bhuntar at ₹1,500 + local bus/taxi to Kasol. Budget backpacker route." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹2,860/person. Direct Kasol drop — no Bhuntar transfer. Scenic Parvati Valley drive." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹1,430/person — comparable to Volvo + transfer cost. Direct and hassle-free." },
      { scenario: "Group of Friends", winner: "Cab (SUV)", reason: "SUV at ~₹1,213/person. The Parvati Valley drive is legendary with friends." },
      { scenario: "Trekking Group", winner: "Cab", reason: "Carry all trekking gear. Direct drop at Kasol/Manikaran for Kheerganga trek." },
      { scenario: "Winter Trip", winner: "Cab", reason: "Mountain roads in winter need experienced drivers. Bus services reduce in winter." },
    ],
    relatedRoutes: ["delhi-to-manali", "delhi-to-shimla", "delhi-to-dharamshala", "chandigarh-to-manali"],
  }),

  "delhi-to-udaipur": createRoute({
    slug: "delhi-to-udaipur", origin: "Delhi", destination: "Udaipur", distanceKm: 660,
    busOptions: [
      { type: "Ordinary Bus", duration: "12-14 hrs", cost: 800, frequency: "3 daily" },
      { type: "Semi-Deluxe AC", duration: "11-12 hrs", cost: 1200, frequency: "3 daily" },
      { type: "Volvo AC", duration: "10-11 hrs", cost: 1600, frequency: "4 daily (sleeper)" },
    ],
    cabOptions: { sedan: { duration: "9-10 hrs" }, suv: { duration: "9-10 hrs" } },
    verdict: "Long but rewarding drive through Rajasthan. Cab lets you stop at Jaipur or Chittorgarh. Bus is for solo budget travelers.",
    scenarios: [
      { scenario: "Solo Budget Traveler", winner: "Bus", reason: "Sleeper Volvo at ₹1,600 with overnight travel. Saves a hotel night." },
      { scenario: "Couple Trip", winner: "Cab", reason: "₹3,630/person. Break at Jaipur or Chittorgarh Fort. Rajasthan road trip experience." },
      { scenario: "Family of 4", winner: "Cab", reason: "₹1,815/person — comparable to Volvo sleeper with door-to-door Lake Pichola drop." },
      { scenario: "Honeymoon Trip", winner: "Cab", reason: "The City of Lakes deserves a private car arrival. Stop at heritage sites en route." },
      { scenario: "Group of 6+", winner: "Cab (SUV)", reason: "SUV at ~₹1,540/person. Royal Rajasthan road trip through Aravalli hills." },
      { scenario: "Heritage Tour", winner: "Cab", reason: "Delhi → Jaipur → Chittorgarh → Udaipur. Multi-city Rajasthan heritage drive." },
    ],
    relatedRoutes: ["delhi-to-jaipur", "jaipur-to-udaipur", "delhi-to-jodhpur", "jaipur-to-jodhpur"],
  }),
};

// Helper functions for bus vs cab pages
export function getBusVsCabRoute(slug) {
  return busVsCabRoutes[slug] || null;
}

export function getAllBusVsCabSlugs() {
  return Object.keys(busVsCabRoutes);
}

export function getRelatedBusVsCabRoutes(slug) {
  const route = busVsCabRoutes[slug];
  if (!route) return [];
  return route.relatedRoutes
    .map(rs => busVsCabRoutes[rs])
    .filter(Boolean)
    .slice(0, 4);
}
