// src/utilis/oneWayCabData.js - Complete data for all 26 one-way cab routes
// Pricing: Sedan ₹11/km, Ertiga ₹15/km, Innova ₹18/km (min 300km billing)

function calcFares(distanceKm) {
  const billableKm = Math.max(distanceKm, 300);
  const sedan = billableKm * 11;
  const ertiga = billableKm * 15;
  const innova = billableKm * 18;
  return {
    oneWayFares: {
      sedan: `₹${sedan.toLocaleString('en-IN')}`,
      ertiga: `₹${ertiga.toLocaleString('en-IN')}`,
      innova: `₹${innova.toLocaleString('en-IN')}`,
    },
    roundTripFares: {
      sedan: `₹${(sedan * 2).toLocaleString('en-IN')}`,
      ertiga: `₹${(ertiga * 2).toLocaleString('en-IN')}`,
      innova: `₹${(innova * 2).toLocaleString('en-IN')}`,
    },
    savings: `₹${sedan.toLocaleString('en-IN')}`,
    savingsPercent: "50%",
    sedanRaw: sedan,
  };
}

export const oneWayRoutes = {
  "delhi-to-agra": {
    from: "Delhi",
    to: "Agra",
    distance: "230 km",
    distanceNum: 230,
    time: "3-4 hours",
    highway: "Yamuna Expressway",
    ...calcFares(230),
    highlights: ["Via Yamuna Expressway", "3-4 hours smooth drive", "Toll included in fare estimate"],
    popularStops: ["Mathura", "Vrindavan"],
    bestTime: "Early morning 5-6 AM to avoid traffic and enjoy Taj Mahal sunrise",
    description: `The Delhi to Agra one-way cab route is one of the most popular intercity trips in India, covering 230 km via the six-lane Yamuna Expressway. Thousands of tourists, families, and business travellers make this journey daily to visit the iconic Taj Mahal, Agra Fort, and the vibrant streets of Agra. With Triveni Cabs, you pay only for the one-way distance — saving up to 50% compared to booking a round-trip cab when you only need a single-direction drop.

Our professional drivers know every exit and shortcut on the Yamuna Expressway. The drive takes just 3-4 hours in a clean, air-conditioned vehicle. You can request a stop at Mathura or Vrindavan en route at no extra charge (if on-route). Whether you are catching an early morning train from Agra, attending a wedding, or simply relocating — our one-way cab service from Delhi to Agra is the smartest, most affordable way to travel.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Agra cost?", answer: "A one-way cab from Delhi to Agra starts at ₹3,300 for a Sedan (300 km minimum billing at ₹11/km). Ertiga SUV costs ₹4,500 and Innova Crysta costs ₹5,400. Toll charges and state tax are extra at actual." },
      { question: "How long does Delhi to Agra take by cab?", answer: "Delhi to Agra takes 3-4 hours via the Yamuna Expressway. Early morning departures (5-6 AM) can reach in under 3 hours with minimal traffic." },
      { question: "Can I stop at Mathura on the way from Delhi to Agra?", answer: "Yes, up to 2 on-route stops are included free. Mathura and Vrindavan are popular stops on this route. Off-route detours may incur additional charges." },
      { question: "Is it cheaper to take a one-way cab or train from Delhi to Agra?", answer: "For 2-3 passengers, a one-way cab from Delhi to Agra is comparable to AC train tickets while offering door-to-door convenience, no waiting, and luggage freedom." },
      { question: "What is the best time to leave Delhi for Agra?", answer: "Leave by 5-6 AM to reach Agra by 8-9 AM, perfect for a Taj Mahal sunrise visit. Avoid leaving between 8-10 AM due to Delhi traffic." },
      { question: "Do you offer airport pickup for Delhi to Agra one-way cab?", answer: "Yes, we offer pickup from Delhi Airport (IGI Terminal 1, 2, 3), any Delhi hotel, or any address in Delhi NCR for the Delhi to Agra one-way trip." }
    ]
  },

  "delhi-to-jaipur": {
    from: "Delhi",
    to: "Jaipur",
    distance: "280 km",
    distanceNum: 280,
    time: "4-5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)",
    ...calcFares(280),
    highlights: ["Via NH-48 Expressway", "4-5 hours comfortable ride", "Gateway to Rajasthan"],
    popularStops: ["Neemrana Fort", "Behror"],
    bestTime: "Early morning 5-6 AM or post-lunch to avoid Gurgaon traffic",
    description: `Delhi to Jaipur is one of the busiest intercity corridors in North India, spanning 280 km via the NH-48 Delhi-Jaipur Expressway. The Pink City attracts millions of tourists, wedding guests, and business travellers each year. Our one-way cab service on this route saves you up to 50% compared to round-trip bookings — ideal when you are flying back from Jaipur, continuing to Udaipur, or simply do not need a return cab.

The Delhi to Jaipur drive takes 4-5 hours via the well-maintained expressway. En route, you can stop at Neemrana Fort for a quick photo break or grab refreshments at the highway dhabas near Behror. Our drivers are experienced on this route and ensure a comfortable, punctual journey. Book a Sedan from ₹3,300, Ertiga from ₹4,500, or Innova Crysta from ₹5,400 for your one-way trip.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Jaipur?", answer: "One-way cab from Delhi to Jaipur starts at ₹3,300 for Sedan (300 km minimum billing at ₹11/km). Ertiga costs ₹4,500 and Innova Crysta costs ₹5,400. Toll and state tax extra." },
      { question: "How long does Delhi to Jaipur take by car?", answer: "Delhi to Jaipur takes 4-5 hours via the NH-48 Expressway. Traffic near Gurgaon can add 30-45 minutes during peak hours." },
      { question: "Can I visit Neemrana Fort on the way to Jaipur?", answer: "Yes, Neemrana Fort is a popular en-route stop. We allow up to 2 on-route stops at no extra charge." },
      { question: "Is one-way cab available from Delhi Airport to Jaipur?", answer: "Yes, we provide airport pickup from IGI Terminal 1, 2, or 3 for your Delhi to Jaipur one-way trip. Flight tracking included." },
      { question: "Which is cheaper — one-way cab or bus from Delhi to Jaipur?", answer: "For 2+ passengers sharing a Sedan, one-way cab is comparable to Volvo bus tickets while offering door-to-door convenience and luggage space." },
      { question: "Do I need to pay toll separately for Delhi to Jaipur?", answer: "Yes, toll charges on Delhi-Jaipur Expressway (approximately ₹500-700) are paid at actual. Our driver handles toll payments." }
    ]
  },

  "delhi-to-chandigarh": {
    from: "Delhi",
    to: "Chandigarh",
    distance: "250 km",
    distanceNum: 250,
    time: "4-5 hours",
    highway: "NH-44 (GT Karnal Road / Ambala-Chandigarh Expressway)",
    ...calcFares(250),
    highlights: ["Via NH-44 & Ambala Expressway", "4-5 hours drive", "The City Beautiful awaits"],
    popularStops: ["Karnal", "Ambala"],
    bestTime: "Early morning 5-6 AM to avoid Delhi-Panipat traffic",
    description: `The Delhi to Chandigarh one-way cab covers 250 km via NH-44 and the Ambala-Chandigarh Expressway. Chandigarh, the planned city designed by Le Corbusier, is a popular destination for business trips, family visits, and as a gateway to Shimla and Manali. Our one-way cab lets you save up to 50% when you need only a single-direction drop — perfect if you are continuing to Shimla, Manali, or flying out from Chandigarh Airport.

The drive takes 4-5 hours depending on traffic near Panipat-Karnal. Our experienced drivers navigate the GT Road efficiently, ensuring a comfortable ride. You can stop at Karnal for a meal or Ambala for refreshments. Book your one-way cab starting at just ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Chandigarh cost?", answer: "Delhi to Chandigarh one-way cab starts at ₹3,300 for Sedan (300 km minimum at ₹11/km). Ertiga SUV is ₹4,500 and Innova Crysta is ₹5,400. Toll and tax extra." },
      { question: "How long is the drive from Delhi to Chandigarh?", answer: "The Delhi to Chandigarh drive takes 4-5 hours via NH-44. Early morning trips avoid traffic congestion near Panipat and Karnal." },
      { question: "Can I continue from Chandigarh to Shimla in the same cab?", answer: "For a one-way cab, the booking is Delhi to Chandigarh only. You can book a separate Chandigarh to Shimla one-way cab for the onward journey." },
      { question: "Is night travel available from Delhi to Chandigarh?", answer: "Yes, we operate 24/7 including late night and early morning departures. Night travel is comfortable on NH-44." },
      { question: "What vehicles are available for Delhi to Chandigarh one-way?", answer: "We offer Sedan (Swift Dzire/Etios), Ertiga (7-seater), and Innova Crysta (7-seater premium) for Delhi to Chandigarh one-way trips." },
      { question: "Can I get picked up from Delhi Airport for Chandigarh?", answer: "Yes, airport pickup from any terminal at IGI Airport is available. Our driver will meet you at arrivals with a name board." }
    ]
  },

  "delhi-to-haridwar": {
    from: "Delhi",
    to: "Haridwar",
    distance: "230 km",
    distanceNum: 230,
    time: "5-6 hours",
    highway: "NH-334 via Meerut Expressway",
    ...calcFares(230),
    highlights: ["Via Delhi-Meerut Expressway", "5-6 hours spiritual journey", "Gateway to Char Dham"],
    popularStops: ["Meerut", "Muzaffarnagar", "Roorkee"],
    bestTime: "Early morning 4-5 AM for Ganga Aarti timing",
    description: `Delhi to Haridwar is a deeply spiritual route covering 230 km through the plains of western Uttar Pradesh and Uttarakhand. Haridwar, the gateway to Char Dham and one of the seven holiest cities in Hinduism, draws millions of pilgrims and tourists annually. Our one-way cab service is perfect for devotees heading to Haridwar for Ganga Aarti, Kanwar Yatra, or continuing to Rishikesh for yoga and adventure.

The drive takes 5-6 hours via the Delhi-Meerut Expressway and NH-334. Traffic can vary around Meerut and Muzaffarnagar, so early morning departures are recommended. Our drivers are familiar with the route and can suggest the best time to reach for the famous evening Ganga Aarti at Har Ki Pauri. Save up to 50% with our one-way cab versus a round-trip booking.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Haridwar?", answer: "One-way cab from Delhi to Haridwar starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra at actual." },
      { question: "How long does Delhi to Haridwar take by cab?", answer: "Delhi to Haridwar takes 5-6 hours by cab. The Delhi-Meerut Expressway has reduced travel time significantly." },
      { question: "Can I stop at Rishikesh on the way to Haridwar?", answer: "Rishikesh is 25 km beyond Haridwar. You can book Delhi to Rishikesh instead, or add Rishikesh as an on-route extension." },
      { question: "Is one-way cab available during Kanwar Yatra season?", answer: "Yes, we operate during Kanwar Yatra with experienced drivers who know alternate routes during road diversions." },
      { question: "Can I book a return one-way cab from Haridwar to Delhi?", answer: "Yes, we offer Haridwar to Delhi one-way cab at the same rates. Book for any date and time." },
      { question: "What is the best time to leave Delhi for Haridwar?", answer: "Leave by 4-5 AM to reach Haridwar by 9-10 AM. This gives you the full day for temple visits and evening Ganga Aarti." }
    ]
  },

  "delhi-to-shimla": {
    from: "Delhi",
    to: "Shimla",
    distance: "350 km",
    distanceNum: 350,
    time: "7-8 hours",
    highway: "NH-44 via Chandigarh, then NH-5",
    ...calcFares(350),
    highlights: ["Via Chandigarh & NH-5 hill road", "7-8 hours scenic drive", "Queen of Hills destination"],
    popularStops: ["Chandigarh", "Pinjore Gardens", "Solan"],
    bestTime: "Early morning 4-5 AM to reach before dark on hill roads",
    description: `The Delhi to Shimla one-way cab covers 350 km through the plains to the beautiful hill station known as the Queen of Hills. The route passes through Chandigarh and then winds up through scenic Himalayan foothills via Solan and Kandaghat. Shimla is a favourite summer getaway, honeymoon destination, and winter wonderland — and our one-way cab is perfect if you plan to stay for multiple days or return by train or bus.

The drive takes 7-8 hours, with the Chandigarh-Shimla hill section requiring careful driving through winding mountain roads. Our experienced hill drivers ensure safe and comfortable travel. You can stop at Chandigarh or Pinjore Gardens for a break. Book from ₹3,850 for a Sedan one-way trip and save 50% versus round-trip fares.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Shimla?", answer: "Delhi to Shimla one-way cab costs ₹3,850 for Sedan (350 km at ₹11/km). Ertiga is ₹5,250 and Innova Crysta is ₹6,300. Toll and tax extra." },
      { question: "How long does Delhi to Shimla take by car?", answer: "Delhi to Shimla takes 7-8 hours by cab. The plains section (Delhi-Chandigarh) takes 4-5 hours, and the hill section (Chandigarh-Shimla) takes 3 hours." },
      { question: "Is the road from Delhi to Shimla safe?", answer: "Yes, the Delhi-Chandigarh highway is excellent. The Chandigarh-Shimla hill road is well-maintained. Our drivers are experienced on hill routes." },
      { question: "Can I stop at Chandigarh on the way to Shimla?", answer: "Yes, Chandigarh is an en-route stop. You can take a break at Rock Garden or Sukhna Lake before continuing to Shimla." },
      { question: "Is Innova better than Sedan for Delhi to Shimla?", answer: "Innova Crysta is recommended for families with heavy luggage as it handles hill roads better. Sedan works well for 2-3 passengers with light luggage." },
      { question: "Do you provide one-way cab from Delhi to Shimla in winter?", answer: "Yes, we operate year-round including winter. Our drivers carry chains for snow conditions and know alternate routes." }
    ]
  },

  "delhi-to-manali": {
    from: "Delhi",
    to: "Manali",
    distance: "540 km",
    distanceNum: 540,
    time: "12-14 hours",
    highway: "NH-44 to Chandigarh, NH-21 to Manali",
    ...calcFares(540),
    highlights: ["Via Chandigarh & Kullu Valley", "12-14 hours epic road trip", "Adventure capital of India"],
    popularStops: ["Chandigarh", "Bilaspur", "Sundernagar", "Kullu"],
    bestTime: "Night departure 9-10 PM or early morning 4 AM",
    description: `Delhi to Manali is one of the most scenic road trips in India, covering 540 km through the plains, across Chandigarh, and deep into the Kullu Valley of Himachal Pradesh. Manali is India's adventure capital, offering snow, trekking, paragliding, river rafting, and the gateway to Rohtang Pass and Leh-Ladakh. Our one-way cab service is ideal for travellers who plan to stay in Manali for days or continue to Leh, Spiti, or other Himalayan destinations.

The drive takes 12-14 hours with stops. Many travellers prefer an overnight departure from Delhi (9-10 PM) to arrive in Manali by morning. The route passes through stunning scenery after Bilaspur — river gorges, pine forests, and snow-capped peaks. Our hill-experienced drivers ensure safe navigation through the winding Kullu-Manali highway. Book from ₹5,940 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Manali?", answer: "Delhi to Manali one-way cab costs ₹5,940 for Sedan (540 km at ₹11/km). Ertiga is ₹8,100 and Innova Crysta is ₹9,720. Toll extra." },
      { question: "How long does Delhi to Manali take by cab?", answer: "Delhi to Manali takes 12-14 hours by cab depending on road conditions and stops. Night travel can be faster due to less traffic." },
      { question: "Is night travel recommended for Delhi to Manali?", answer: "Many travellers prefer departing Delhi at 9-10 PM to arrive in Manali by morning. Our drivers are experienced in night driving on this route." },
      { question: "Which vehicle is best for Delhi to Manali one-way trip?", answer: "Innova Crysta or Ertiga is recommended for comfort on the long journey. Sedan works for budget-conscious travellers with light luggage." },
      { question: "Can I stop at Chandigarh on the Delhi to Manali route?", answer: "Yes, Chandigarh is a natural break point. You can stop for meals or a short rest before continuing to Manali." },
      { question: "Is Delhi to Manali road open in winter?", answer: "Yes, the Delhi-Manali highway is open year-round. However, road conditions may vary during heavy snowfall. Our drivers carry chains." }
    ]
  },

  "delhi-to-dehradun": {
    from: "Delhi",
    to: "Dehradun",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-334 via Meerut & Haridwar bypass",
    ...calcFares(260),
    highlights: ["Via Delhi-Meerut Expressway", "5-6 hours to Doon Valley", "Gateway to Mussoorie & Uttarakhand"],
    popularStops: ["Meerut", "Roorkee", "Haridwar bypass"],
    bestTime: "Early morning 5-6 AM for a comfortable daytime arrival",
    description: `The Delhi to Dehradun one-way cab covers 260 km through the Gangetic plains and into the picturesque Doon Valley. Dehradun, the capital of Uttarakhand, is a popular destination for students, government officials, and tourists heading to Mussoorie, the Rajaji National Park, or the foothills of the Himalayas. Our one-way cab saves you 50% when you only need a single-direction drop.

The drive takes 5-6 hours via the Delhi-Meerut Expressway and NH-334. The route bypasses Haridwar and enters Dehradun through the scenic Mohand forest area. Whether you are dropping a student at DOON School, UPES, or attending official work at the Uttarakhand Secretariat — our clean, AC cabs with professional drivers ensure a comfortable journey. Book from ₹3,300 one-way.`,
    faqs: [
      { question: "How much is a one-way cab from Delhi to Dehradun?", answer: "Delhi to Dehradun one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga costs ₹4,500 and Innova costs ₹5,400." },
      { question: "How long does Delhi to Dehradun take by cab?", answer: "The drive takes 5-6 hours via Delhi-Meerut Expressway and NH-334. Early morning trips are fastest." },
      { question: "Can I continue to Mussoorie from Dehradun?", answer: "Mussoorie is 35 km from Dehradun. You can book a separate Dehradun to Mussoorie cab, or request an extended drop at additional cost." },
      { question: "Is airport pickup available for Delhi to Dehradun?", answer: "Yes, we provide pickup from Delhi Airport (IGI Terminal 1, 2, 3) for Dehradun-bound one-way trips." },
      { question: "Which route does the cab take from Delhi to Dehradun?", answer: "The cab takes Delhi-Meerut Expressway, then NH-334 through Muzaffarnagar, Roorkee, bypassing Haridwar, to Dehradun." },
      { question: "Is one-way cab cheaper than flight for Delhi to Dehradun?", answer: "For 2-3 passengers sharing, one-way cab is often cheaper than combined flight tickets plus airport transfers, with door-to-door convenience." }
    ]
  },

  "delhi-to-amritsar": {
    from: "Delhi",
    to: "Amritsar",
    distance: "450 km",
    distanceNum: 450,
    time: "7-8 hours",
    highway: "NH-44 (GT Road) via Ambala & Ludhiana",
    ...calcFares(450),
    highlights: ["Via NH-44 Grand Trunk Road", "7-8 hours to the Golden Temple city", "Punjab heartland drive"],
    popularStops: ["Karnal", "Ambala", "Ludhiana", "Jalandhar"],
    bestTime: "Early morning 4-5 AM to arrive before evening Wagah Border ceremony",
    description: `Delhi to Amritsar is a 450 km journey along the historic Grand Trunk Road (NH-44) through the heart of Punjab. Amritsar, home to the iconic Golden Temple (Sri Harmandir Sahib) and the Wagah Border ceremony, is one of India's most visited cities. Our one-way cab service is perfect for pilgrims, tourists, and families who plan to stay in Amritsar or continue to Wagah, Attari, or other Punjab destinations.

The drive takes 7-8 hours with the excellent four-lane highway making it a comfortable ride. You pass through Karnal, Ambala, Ludhiana, and Jalandhar — the bustling cities of Punjab known for their food and culture. Our drivers know the best dhaba stops for authentic Punjabi meals. Book from ₹4,950 for a Sedan and save 50% compared to round-trip.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Amritsar?", answer: "Delhi to Amritsar one-way cab costs ₹4,950 for Sedan (450 km at ₹11/km). Ertiga is ₹6,750 and Innova Crysta is ₹8,100. Toll extra." },
      { question: "How long does Delhi to Amritsar take by cab?", answer: "Delhi to Amritsar takes 7-8 hours via NH-44. The highway is in excellent condition with minimal traffic outside peak hours." },
      { question: "Can I visit Wagah Border if I take a morning cab from Delhi?", answer: "Yes, leave Delhi by 4-5 AM to reach Amritsar by noon. The Wagah Border ceremony starts at 4-5 PM, giving you plenty of time." },
      { question: "Is overnight travel possible for Delhi to Amritsar?", answer: "Yes, we offer late-night departures. The NH-44 is well-lit and safe for night travel. Reach Amritsar by early morning." },
      { question: "Which vehicle is recommended for Delhi to Amritsar?", answer: "For families, Ertiga or Innova is recommended for comfort on the 7-8 hour journey. Sedan works well for 2-3 passengers." },
      { question: "Can I stop for meals on the Delhi to Amritsar route?", answer: "Absolutely. The GT Road has famous dhabas. Murthal (near Delhi), Karnal, and the Amritsar highway dhabas serve legendary Punjabi food." }
    ]
  },

  "delhi-to-lucknow": {
    from: "Delhi",
    to: "Lucknow",
    distance: "550 km",
    distanceNum: 550,
    time: "8-9 hours",
    highway: "Agra-Lucknow Expressway via Yamuna Expressway",
    ...calcFares(550),
    highlights: ["Via Yamuna + Agra-Lucknow Expressway", "8-9 hours on premium expressways", "City of Nawabs"],
    popularStops: ["Agra bypass", "Kannauj", "Unnao"],
    bestTime: "Early morning 4-5 AM or night departure",
    description: `Delhi to Lucknow by one-way cab covers 550 km through some of India's finest expressways — the Yamuna Expressway and the Agra-Lucknow Expressway. The City of Nawabs, known for its rich Mughal heritage, Lucknowi cuisine, and gracious culture, is a major business and cultural centre. Our one-way cab is ideal for travellers relocating, attending events, or those who prefer the comfort of a private car over trains and flights.

The 8-9 hour drive is smooth on the high-speed expressways. You bypass Agra entirely and connect to the Agra-Lucknow Expressway, making this one of the fastest road routes between the two cities. Our drivers are well-versed in expressway protocols. Book from ₹6,050 for a Sedan one-way trip.`,
    faqs: [
      { question: "What is the one-way cab fare from Delhi to Lucknow?", answer: "Delhi to Lucknow one-way cab costs ₹6,050 for Sedan (550 km at ₹11/km). Ertiga is ₹8,250 and Innova is ₹9,900. Toll extra." },
      { question: "How long does Delhi to Lucknow take by cab?", answer: "Delhi to Lucknow takes 8-9 hours via the Yamuna Expressway and Agra-Lucknow Expressway combination." },
      { question: "Is driving to Lucknow faster than the train?", answer: "The cab takes 8-9 hours versus 6-8 hours by Shatabdi/Tejas train. However, the cab offers door-to-door convenience and flexibility." },
      { question: "Can I make stops on the Delhi to Lucknow route?", answer: "Yes, up to 2 on-route stops are allowed. The expressways have rest areas with food courts and fuel stations." },
      { question: "Is night travel safe for Delhi to Lucknow?", answer: "Yes, both the Yamuna and Agra-Lucknow Expressways are well-lit, patrolled, and safe for night travel." },
      { question: "Do you offer airport pickup for this route?", answer: "Yes, we pick up from Delhi Airport (any terminal) or any address in Delhi NCR for the one-way trip to Lucknow." }
    ]
  },

  "delhi-to-varanasi": {
    from: "Delhi",
    to: "Varanasi",
    distance: "800 km",
    distanceNum: 800,
    time: "12-14 hours",
    highway: "Yamuna Expressway + Agra-Lucknow Expressway + Purvanchal Expressway",
    ...calcFares(800),
    highlights: ["Via triple expressway route", "12-14 hours to the spiritual capital", "Oldest living city in the world"],
    popularStops: ["Agra bypass", "Lucknow bypass", "Sultanpur"],
    bestTime: "Night departure 8-9 PM to arrive by morning for Ganga Aarti",
    description: `Delhi to Varanasi is an epic 800 km one-way cab journey to the spiritual capital of India. Varanasi (Kashi/Benaras), the oldest continuously inhabited city in the world, is a must-visit for pilgrims, spiritual seekers, and culture enthusiasts. The route now uses three world-class expressways — Yamuna, Agra-Lucknow, and Purvanchal — making this long drive smoother than ever before.

Our one-way cab service saves you significantly compared to round-trip bookings. The 12-14 hour drive is best done as an overnight journey, departing Delhi at 8-9 PM and arriving in Varanasi by morning — just in time for the mesmerizing Ganga Aarti. Our professional drivers handle the long distance with scheduled rest breaks. Book from ₹8,800 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Delhi to Varanasi cost?", answer: "Delhi to Varanasi one-way cab costs ₹8,800 for Sedan (800 km at ₹11/km). Ertiga is ₹12,000 and Innova is ₹14,400. Toll extra." },
      { question: "How long does Delhi to Varanasi take by cab?", answer: "Delhi to Varanasi takes 12-14 hours by cab via the expressway route. Night travel is recommended for this distance." },
      { question: "Is driving Delhi to Varanasi better than flying?", answer: "Flying takes 1.5 hours versus 12-14 by road. However, for families with luggage or those who dislike flying, the overnight cab ride is comfortable and cost-effective for 3-4 passengers." },
      { question: "Can the driver take a rest break on this long route?", answer: "Yes, our drivers take planned rest breaks at expressway rest areas. For routes over 500 km, we may assign a co-driver for safety." },
      { question: "What is the recommended vehicle for Delhi to Varanasi?", answer: "Innova Crysta is strongly recommended for the 800 km journey — more legroom, better suspension, and greater comfort for long hours." },
      { question: "Is Purvanchal Expressway used for this route?", answer: "Yes, we use the Purvanchal Expressway (connecting Lucknow to eastern UP) which has significantly reduced travel time to Varanasi." }
    ]
  },

  "agra-to-delhi": {
    from: "Agra",
    to: "Delhi",
    distance: "230 km",
    distanceNum: 230,
    time: "3-4 hours",
    highway: "Yamuna Expressway",
    ...calcFares(230),
    highlights: ["Via Yamuna Expressway", "3-4 hours smooth ride", "Perfect after Taj Mahal visit"],
    popularStops: ["Mathura", "Vrindavan"],
    bestTime: "After lunch 1-2 PM post Taj Mahal morning visit, or evening 5-6 PM",
    description: `The Agra to Delhi one-way cab is the perfect way to return to the capital after your Taj Mahal visit, wedding attendance, or business trip in Agra. Covering 230 km via the Yamuna Expressway, this 3-4 hour ride is smooth, comfortable, and saves you 50% compared to booking a round-trip from Delhi.

Many tourists visit Agra for a day trip and need a reliable cab back to Delhi — to catch a flight, train, or simply return home. Our one-way cab service ensures you do not pay for an empty return vehicle. Professional drivers, clean AC cars, and transparent pricing make this the smartest way to travel. Book from just ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Agra to Delhi?", answer: "Agra to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga costs ₹4,500 and Innova costs ₹5,400." },
      { question: "Can you drop me at Delhi Airport from Agra?", answer: "Yes, we provide direct Agra to Delhi Airport drops at IGI Terminal 1, 2, or 3. Our drivers monitor flight timings for punctual drops." },
      { question: "How long does Agra to Delhi take?", answer: "Agra to Delhi takes 3-4 hours via the Yamuna Expressway. Allow extra time during evening rush hours in Delhi." },
      { question: "Can I visit Mathura or Vrindavan on the way back to Delhi?", answer: "Yes, Mathura and Vrindavan are on-route stops from Agra to Delhi. Up to 2 stops are included at no extra charge." },
      { question: "What time should I leave Agra to reach Delhi Airport for an evening flight?", answer: "For an 8 PM flight, leave Agra by 3 PM. This gives you 4 hours for travel plus 1 hour buffer for check-in." },
      { question: "Is this service available on weekends and holidays?", answer: "Yes, we operate 365 days including weekends, holidays, and festival seasons. Advance booking recommended during peak periods." }
    ]
  },

  "agra-to-jaipur": {
    from: "Agra",
    to: "Jaipur",
    distance: "240 km",
    distanceNum: 240,
    time: "4-5 hours",
    highway: "NH-21 via Bharatpur & Dausa",
    ...calcFares(240),
    highlights: ["Via Bharatpur & Fatehpur Sikri", "4-5 hours Golden Triangle leg", "Pink City from Taj City"],
    popularStops: ["Fatehpur Sikri", "Bharatpur Bird Sanctuary", "Dausa"],
    bestTime: "Morning 7-8 AM after early Taj Mahal visit",
    description: `Agra to Jaipur is the classic Golden Triangle route leg, covering 240 km through the historical heartland of Rajasthan. This one-way cab route connects the city of the Taj Mahal to the Pink City, passing through Fatehpur Sikri (Akbar's abandoned capital) and near the world-famous Bharatpur Bird Sanctuary (Keoladeo National Park). Perfect for tourists completing the Golden Triangle circuit.

Our one-way cab saves you 50% if you are continuing your journey beyond Jaipur — to Udaipur, Jodhpur, or flying home from Jaipur Airport. The 4-5 hour drive passes through scenic Rajasthani countryside. Stop at Fatehpur Sikri for a quick heritage visit or Bharatpur for bird watching. Book from ₹3,300 one-way.`,
    faqs: [
      { question: "What is the one-way cab fare from Agra to Jaipur?", answer: "Agra to Jaipur one-way cab costs ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "Can I stop at Fatehpur Sikri on the way?", answer: "Yes, Fatehpur Sikri is 40 km from Agra on the Agra-Jaipur road. It is a popular en-route stop and we allow up to 2 on-route stops free." },
      { question: "How long does Agra to Jaipur take by cab?", answer: "Agra to Jaipur takes 4-5 hours via NH-21 through Bharatpur and Dausa." },
      { question: "Is this part of the Golden Triangle tour?", answer: "Yes, Agra to Jaipur is the second leg of the famous Delhi-Agra-Jaipur Golden Triangle. Many tourists complete this circuit using one-way cabs." },
      { question: "Can I visit Bharatpur on the way to Jaipur?", answer: "Yes, Bharatpur Bird Sanctuary (Keoladeo) is on the route. A 1-2 hour visit is possible as an en-route stop." },
      { question: "What is the road condition from Agra to Jaipur?", answer: "The Agra-Jaipur highway is mostly 4-lane and in good condition. Some stretches near Bharatpur may have 2-lane sections." }
    ]
  },

  "agra-to-lucknow": {
    from: "Agra",
    to: "Lucknow",
    distance: "330 km",
    distanceNum: 330,
    time: "5-6 hours",
    highway: "Agra-Lucknow Expressway",
    ...calcFares(330),
    highlights: ["Via Agra-Lucknow Expressway", "5-6 hours expressway ride", "Connecting heritage to culture"],
    popularStops: ["Firozabad", "Kannauj (Perfume City)", "Unnao"],
    bestTime: "Morning departure for daytime travel on the expressway",
    description: `The Agra to Lucknow one-way cab covers 330 km via the Agra-Lucknow Expressway, one of India's finest highways. This route connects the Taj Mahal city to the City of Nawabs, making it popular with tourists, government officials, and families. The expressway ensures a smooth, fast journey of just 5-6 hours.

Our one-way cab service is ideal if you are visiting Lucknow for a wedding, business meeting, or continuing to Ayodhya, Varanasi, or other eastern UP destinations. No need to pay for a round trip when you need only a single direction. Our clean, AC vehicles and experienced drivers make this an effortless journey. Sedan from ₹3,630 one-way.`,
    faqs: [
      { question: "How much is a one-way cab from Agra to Lucknow?", answer: "Agra to Lucknow one-way cab costs ₹3,630 for Sedan (330 km at ₹11/km). Ertiga is ₹4,950 and Innova is ₹5,940. Toll extra." },
      { question: "How long does Agra to Lucknow take by cab?", answer: "Agra to Lucknow takes 5-6 hours via the Agra-Lucknow Expressway. The expressway has minimal traffic." },
      { question: "Is the Agra-Lucknow Expressway safe?", answer: "Yes, the expressway is well-maintained, fully patrolled, has emergency services, and speed monitoring. It is one of the safest highways in India." },
      { question: "Can I stop at Kannauj on the way?", answer: "Kannauj (India's Perfume Capital) is near the expressway. The expressway has rest areas but a Kannauj city visit would require an off-route detour." },
      { question: "Are meals available on the expressway?", answer: "Yes, the Agra-Lucknow Expressway has multiple rest areas with food courts, restrooms, and fuel stations." },
      { question: "Do you pick up from hotels in Agra?", answer: "Yes, we pick up from any hotel, railway station, or address in Agra for the one-way trip to Lucknow." }
    ]
  },

  "jaipur-to-delhi": {
    from: "Jaipur",
    to: "Delhi",
    distance: "280 km",
    distanceNum: 280,
    time: "4-5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway)",
    ...calcFares(280),
    highlights: ["Via NH-48 Expressway", "4-5 hours back to Delhi", "Return leg of Golden Triangle"],
    popularStops: ["Neemrana Fort", "Behror", "Manesar"],
    bestTime: "Morning departure to avoid Delhi evening traffic",
    description: `The Jaipur to Delhi one-way cab covers 280 km via the NH-48 Delhi-Jaipur Expressway. This is one of the most-booked return routes for Golden Triangle tourists, wedding guests, and business travellers heading back to Delhi for flights or trains. Our one-way cab saves you 50% compared to booking a round trip from Delhi.

The 4-5 hour ride is comfortable on the well-maintained expressway. You can stop at Neemrana Fort for a heritage break or grab lunch at the famous highway eateries near Behror. Our drivers time the arrival to help you avoid Delhi's evening rush hour. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Delhi?", answer: "Jaipur to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Can you drop me at Delhi Airport from Jaipur?", answer: "Yes, we provide direct drop to IGI Airport Terminal 1, 2, or 3 from Jaipur. Flight monitoring included for timely drops." },
      { question: "How long does Jaipur to Delhi take?", answer: "Jaipur to Delhi takes 4-5 hours via the NH-48 Expressway. Add 30-45 minutes if arriving during Delhi peak traffic." },
      { question: "What is the best time to leave Jaipur for Delhi?", answer: "Leave by 7-8 AM to reach Delhi by noon, avoiding both Jaipur and Delhi traffic. Or leave after 8 PM for a relaxed night drive." },
      { question: "Can I stop at Neemrana on the way?", answer: "Yes, Neemrana Fort is a popular en-route stop on the Jaipur-Delhi highway. We allow up to 2 on-route stops free." },
      { question: "Is this route suitable for night travel?", answer: "Yes, the NH-48 expressway is well-lit and safe for night travel. Many travellers prefer late evening departures." }
    ]
  },

  "jaipur-to-udaipur": {
    from: "Jaipur",
    to: "Udaipur",
    distance: "395 km",
    distanceNum: 395,
    time: "6-7 hours",
    highway: "NH-48 via Ajmer & Chittorgarh",
    ...calcFares(395),
    highlights: ["Via Ajmer & Chittorgarh Fort", "6-7 hours through Rajasthan", "City of Lakes destination"],
    popularStops: ["Ajmer", "Pushkar (nearby)", "Chittorgarh"],
    bestTime: "Morning 6-7 AM for scenic daylight drive through Rajasthan",
    description: `Jaipur to Udaipur is a stunning 395 km journey through the heart of Rajasthan, passing through Ajmer, near the sacred Pushkar, and the legendary Chittorgarh Fort. Udaipur, the City of Lakes and the Venice of the East, is one of India's most romantic destinations — perfect for honeymooners, heritage enthusiasts, and photographers.

Our one-way cab is ideal for travellers who are touring Rajasthan and moving from the Pink City to the Lake City without needing a return cab to Jaipur. The 6-7 hour drive passes through Rajasthani countryside with opportunities to stop at Chittorgarh Fort (a UNESCO World Heritage Site). Book from ₹4,345 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Udaipur?", answer: "Jaipur to Udaipur one-way cab costs ₹4,345 for Sedan (395 km at ₹11/km). Ertiga is ₹5,925 and Innova is ₹7,110. Toll extra." },
      { question: "How long does Jaipur to Udaipur take by cab?", answer: "Jaipur to Udaipur takes 6-7 hours by cab via the NH-48 through Ajmer and Chittorgarh." },
      { question: "Can I visit Chittorgarh Fort on the way?", answer: "Yes, Chittorgarh Fort is on-route and makes for an excellent 1-2 hour stop. It is a UNESCO World Heritage Site." },
      { question: "Is the road from Jaipur to Udaipur good?", answer: "The highway is mostly 4-lane and well-maintained. Some sections near Chittorgarh may be 2-lane but are still good quality." },
      { question: "Can I stop at Pushkar on the way?", answer: "Pushkar is about 15 km off the main highway near Ajmer. A detour to Pushkar is possible with slight additional charges." },
      { question: "Which is better for Jaipur to Udaipur - cab or train?", answer: "Cab offers door-to-door convenience and en-route stops at Chittorgarh. Train takes 6-8 hours without sightseeing options." }
    ]
  },

  "jaipur-to-jodhpur": {
    from: "Jaipur",
    to: "Jodhpur",
    distance: "340 km",
    distanceNum: 340,
    time: "5-6 hours",
    highway: "NH-62 via Ajmer & Beawar",
    ...calcFares(340),
    highlights: ["Via Ajmer & the Thar Desert edge", "5-6 hours Rajasthani adventure", "Blue City destination"],
    popularStops: ["Ajmer", "Beawar", "Pali"],
    bestTime: "Morning 6-7 AM for the full desert landscape experience",
    description: `Jaipur to Jodhpur covers 340 km through the Aravalli foothills and the edge of the Thar Desert. Jodhpur, the Blue City and Sun City, is famous for the magnificent Mehrangarh Fort, vibrant markets, and as a gateway to the desert. Our one-way cab is perfect for Rajasthan circuit travellers moving from the Pink City to the Blue City.

The 5-6 hour drive passes through Ajmer and Beawar before entering the arid Thar landscape. The changing scenery from green Aravallis to golden desert is a highlight of this drive. Stop at Ajmer Sharif Dargah en route or enjoy the highway dhabas serving authentic Rajasthani dal-baati-churma. Book from ₹3,740 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Jodhpur?", answer: "Jaipur to Jodhpur one-way cab costs ₹3,740 for Sedan (340 km at ₹11/km). Ertiga is ₹5,100 and Innova is ₹6,120. Toll extra." },
      { question: "How long does Jaipur to Jodhpur take?", answer: "Jaipur to Jodhpur takes 5-6 hours via NH-62 through Ajmer and Beawar." },
      { question: "Can I visit Ajmer Dargah on the way?", answer: "Yes, Ajmer is on the route. You can make a quick visit to the Ajmer Sharif Dargah as an en-route stop." },
      { question: "What is the road condition?", answer: "The Jaipur-Jodhpur highway is well-maintained with mostly 4-lane sections. Good for comfortable driving." },
      { question: "Is this route part of the Rajasthan circuit?", answer: "Yes, Jaipur-Jodhpur is a key leg of the popular Rajasthan tourism circuit (Jaipur-Jodhpur-Udaipur or Jaipur-Jodhpur-Jaisalmer)." },
      { question: "Can I continue to Jaisalmer from Jodhpur?", answer: "Yes, you can book a separate Jodhpur to Jaisalmer one-way cab. Call 7668570551 for a combined quote." }
    ]
  },

  "chandigarh-to-delhi": {
    from: "Chandigarh",
    to: "Delhi",
    distance: "250 km",
    distanceNum: 250,
    time: "4-5 hours",
    highway: "NH-44 via Ambala & Karnal",
    ...calcFares(250),
    highlights: ["Via NH-44 highway", "4-5 hours comfortable ride", "The Beautiful City to Capital"],
    popularStops: ["Ambala", "Karnal", "Panipat"],
    bestTime: "Morning 7-8 AM to avoid Delhi afternoon traffic",
    description: `Chandigarh to Delhi one-way cab covers 250 km via the NH-44 through Ambala and Karnal. This is a popular return route for travellers who came to Chandigarh from Shimla, Manali, or other Himachal destinations and need a comfortable ride back to Delhi for flights, trains, or home. Save 50% with our one-way service.

The 4-5 hour drive on the well-maintained NH-44 is straightforward and comfortable. You pass through the historic cities of Ambala, Karnal, and Panipat. Our drivers aim to time your arrival to avoid Delhi's notorious traffic. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Delhi?", answer: "Chandigarh to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Chandigarh are available with flight tracking." },
      { question: "How long does Chandigarh to Delhi take?", answer: "The drive takes 4-5 hours via NH-44. Traffic near Panipat and Delhi border can add 30-45 minutes." },
      { question: "Can I get picked up from Chandigarh Railway Station?", answer: "Yes, pickup from Chandigarh Railway Station, Airport, Bus Stand, or any hotel/address in Chandigarh." },
      { question: "Is early morning departure available?", answer: "Yes, we operate 24/7. Early morning (4-5 AM) departures are common for catching morning flights from Delhi." },
      { question: "What about toll charges on this route?", answer: "Toll charges on the Chandigarh-Delhi route are approximately ₹400-600 and paid at actual. Driver handles payments." }
    ]
  },

  "chandigarh-to-manali": {
    from: "Chandigarh",
    to: "Manali",
    distance: "310 km",
    distanceNum: 310,
    time: "7-8 hours",
    highway: "NH-21 via Bilaspur & Kullu",
    ...calcFares(310),
    highlights: ["Via Kullu Valley scenic route", "7-8 hours mountain drive", "Adventure awaits in Manali"],
    popularStops: ["Bilaspur", "Sundernagar", "Kullu"],
    bestTime: "Early morning 5-6 AM to arrive before sunset for safety on hill roads",
    description: `Chandigarh to Manali is a spectacular 310 km mountain drive through the Kullu Valley. This is the most popular way to reach Manali for travellers coming from Delhi (via Chandigarh) or those flying into Chandigarh Airport. The route climbs from the plains into the Himalayas, offering breathtaking views of river gorges, pine forests, and snow-capped peaks.

Our one-way cab is perfect if you are staying in Manali for a holiday or continuing to Rohtang, Solang, or Leh. The 7-8 hour drive requires skilled hill drivers, and our team includes some of the most experienced mountain drivers in the region. Book from ₹3,410 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Manali?", answer: "Chandigarh to Manali one-way costs ₹3,410 for Sedan (310 km at ₹11/km). Ertiga is ₹4,650 and Innova is ₹5,580. Toll extra." },
      { question: "How long does Chandigarh to Manali take?", answer: "Chandigarh to Manali takes 7-8 hours depending on traffic at Sundernagar and Kullu. Monsoon season may add time." },
      { question: "Is the Chandigarh-Manali road safe?", answer: "The road is well-maintained but includes mountain sections. Our drivers are hill-road specialists with years of experience on this route." },
      { question: "Can I stop at Kullu on the way?", answer: "Yes, Kullu town is on the route, about 40 km before Manali. You can stop for shopping (Kullu shawls) or a meal." },
      { question: "Is this route open in winter?", answer: "Yes, the Chandigarh-Manali highway is open year-round. Our drivers carry snow chains during winter months." },
      { question: "Should I choose Innova or Sedan for hill travel?", answer: "Innova is recommended for hill routes — better ground clearance, more comfortable on curves, and superior engine for mountain driving." }
    ]
  },

  "chandigarh-to-shimla": {
    from: "Chandigarh",
    to: "Shimla",
    distance: "120 km",
    distanceNum: 120,
    time: "3-4 hours",
    highway: "NH-5 via Pinjore & Solan",
    ...calcFares(120),
    highlights: ["Via NH-5 scenic hill road", "3-4 hours mountain drive", "Queen of Hills from City Beautiful"],
    popularStops: ["Pinjore Gardens", "Kalka", "Solan"],
    bestTime: "Morning 8-9 AM for clear mountain views",
    description: `Chandigarh to Shimla is a short but scenic 120 km hill drive via NH-5, climbing from the plains into the misty Himalayan foothills. This is the most popular route to reach Shimla from the plains, and our one-way cab is perfect for travellers arriving in Chandigarh by train, flight, or from Delhi and continuing to the Queen of Hills.

Despite the short distance, the drive takes 3-4 hours due to the winding mountain roads. The journey passes through Pinjore (with its beautiful Mughal Gardens), Kalka (the starting point of the famous toy train), and Solan before reaching Shimla. Our experienced hill drivers ensure safe navigation through the 50+ hairpin bends. Book from ₹3,300 (300 km minimum billing) for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Shimla?", answer: "Chandigarh to Shimla one-way cab costs ₹3,300 for Sedan (300 km minimum billing applies even for 120 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Why is minimum billing 300 km for a 120 km distance?", answer: "One-way cabs have a 300 km minimum billing because the driver must return empty. This still saves you 50% versus a round-trip booking." },
      { question: "How long does Chandigarh to Shimla take?", answer: "The drive takes 3-4 hours. The road is winding with 50+ hairpin turns, so speed is limited despite the short distance." },
      { question: "Can I get picked up from Chandigarh Airport?", answer: "Yes, we provide pickup from Chandigarh Airport, Railway Station, or any address in Chandigarh for the Shimla trip." },
      { question: "Is the toy train from Kalka to Shimla better than a cab?", answer: "The Kalka-Shimla toy train is scenic but slow (5-6 hours). Our cab reaches in 3-4 hours with door-to-door convenience." },
      { question: "Is Innova necessary for the Shimla hill road?", answer: "Sedan handles the Chandigarh-Shimla road well. Innova is better for families with heavy luggage or those who want extra comfort." }
    ]
  },

  "lucknow-to-delhi": {
    from: "Lucknow",
    to: "Delhi",
    distance: "550 km",
    distanceNum: 550,
    time: "8-9 hours",
    highway: "Agra-Lucknow Expressway + Yamuna Expressway",
    ...calcFares(550),
    highlights: ["Via dual expressway route", "8-9 hours premium road trip", "Nawabi city to Capital"],
    popularStops: ["Agra bypass", "Expressway rest areas"],
    bestTime: "Early morning 5-6 AM or night departure for Delhi morning arrival",
    description: `Lucknow to Delhi one-way cab covers 550 km using the Agra-Lucknow Expressway and Yamuna Expressway — two of India's best highways. This route is popular with government officials, business travellers, students, and families returning to Delhi after visits to Lucknow. Our one-way service saves you 50% compared to round-trip fares.

The 8-9 hour drive is smooth and comfortable on the high-speed expressways. Rest areas along the route provide food, fuel, and restrooms. Many travellers prefer overnight departure (10-11 PM) from Lucknow to arrive in Delhi by early morning. Our drivers are well-rested and experienced on this long route. Book from ₹6,050 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Lucknow to Delhi?", answer: "Lucknow to Delhi one-way cab costs ₹6,050 for Sedan (550 km at ₹11/km). Ertiga is ₹8,250 and Innova is ₹9,900." },
      { question: "How long does Lucknow to Delhi take?", answer: "Lucknow to Delhi takes 8-9 hours via the Agra-Lucknow and Yamuna Expressways." },
      { question: "Can I be dropped at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Lucknow are available with flight tracking." },
      { question: "Is night travel recommended?", answer: "Yes, overnight travel is popular for this route. The expressways are safe, well-lit, and have emergency services." },
      { question: "What vehicle is best for Lucknow to Delhi?", answer: "Innova Crysta is recommended for the long 550 km journey. Sedan works for budget-conscious travellers." },
      { question: "Can I make stops on the expressway?", answer: "Yes, the expressways have multiple rest areas. Up to 2 stops for meals/restrooms are standard." }
    ]
  },

  "lucknow-to-varanasi": {
    from: "Lucknow",
    to: "Varanasi",
    distance: "320 km",
    distanceNum: 320,
    time: "5-6 hours",
    highway: "Purvanchal Expressway / NH-232",
    ...calcFares(320),
    highlights: ["Via Purvanchal Expressway", "5-6 hours to the holy city", "Nawabi culture to ancient spirituality"],
    popularStops: ["Sultanpur", "Jaunpur"],
    bestTime: "Morning 6-7 AM to reach for evening Ganga Aarti",
    description: `Lucknow to Varanasi one-way cab covers 320 km through the heartland of Uttar Pradesh. With the new Purvanchal Expressway, this journey is faster and smoother than ever. Varanasi, the spiritual capital of India, attracts pilgrims, tourists, and seekers from across the world. Our one-way cab is perfect if you are visiting Varanasi from Lucknow without needing a return ride.

The 5-6 hour drive passes through the flat Gangetic plains and the historic town of Jaunpur. The Purvanchal Expressway has significantly improved travel time and comfort on this route. Our drivers know the best lanes and exits. Book from ₹3,520 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Lucknow to Varanasi?", answer: "Lucknow to Varanasi one-way cab costs ₹3,520 for Sedan (320 km at ₹11/km). Ertiga is ₹4,800 and Innova is ₹5,760." },
      { question: "How long does Lucknow to Varanasi take?", answer: "The drive takes 5-6 hours via the Purvanchal Expressway or NH-232." },
      { question: "Is the Purvanchal Expressway used for this route?", answer: "Yes, the Purvanchal Expressway connects Lucknow to eastern UP, significantly reducing travel time to Varanasi." },
      { question: "Can I visit Ayodhya on the way?", answer: "Ayodhya is slightly off the direct route (via Sultanpur). A detour to Ayodhya would add about 2 hours and additional km charges." },
      { question: "What is the best time to reach Varanasi?", answer: "Aim to reach by 4-5 PM to witness the famous evening Ganga Aarti at Dashashwamedh Ghat, which starts at sunset." },
      { question: "Are highway rest stops available?", answer: "Yes, both the Purvanchal Expressway and NH-232 have rest areas with food and fuel." }
    ]
  },

  "haridwar-to-delhi": {
    from: "Haridwar",
    to: "Delhi",
    distance: "230 km",
    distanceNum: 230,
    time: "5-6 hours",
    highway: "NH-334 via Roorkee & Meerut",
    ...calcFares(230),
    highlights: ["Via Meerut route", "5-6 hours return to Delhi", "Post-pilgrimage comfortable ride"],
    popularStops: ["Roorkee", "Muzaffarnagar", "Meerut"],
    bestTime: "After morning Ganga Aarti, depart by 8-9 AM",
    description: `Haridwar to Delhi one-way cab is the ideal way to return to Delhi after your pilgrimage or spiritual retreat. Covering 230 km via NH-334 through Roorkee and Meerut, this 5-6 hour ride in a comfortable AC cab lets you relax after your holy dip in the Ganges and temple visits.

Many devotees visit Haridwar for Ganga Aarti, Kanwar Yatra, or as a stopover on the way to Rishikesh, Kedarnath, or Badrinath. Our one-way cab ensures you do not overpay for a round trip. Professional drivers, clean vehicles, and transparent pricing. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Haridwar to Delhi?", answer: "Haridwar to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Haridwar to Delhi take?", answer: "Haridwar to Delhi takes 5-6 hours via NH-334 through Roorkee and Meerut." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct airport drops at IGI Terminal 1, 2, or 3 from Haridwar are available." },
      { question: "Can I get picked up from Rishikesh instead of Haridwar?", answer: "Yes, Rishikesh is 25 km from Haridwar. Pickup from Rishikesh for Delhi drop is available at the same rate (distance is similar)." },
      { question: "Is late-night travel available?", answer: "Yes, we operate 24/7. Late-night and early morning departures from Haridwar are available." },
      { question: "What about Kanwar Yatra period availability?", answer: "We operate during Kanwar Yatra with drivers experienced in navigating the special traffic arrangements." }
    ]
  },

  "dehradun-to-delhi": {
    from: "Dehradun",
    to: "Delhi",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-334 via Haridwar bypass & Meerut",
    ...calcFares(260),
    highlights: ["Via Haridwar bypass & Meerut", "5-6 hours Doon Valley to Capital", "Scenic foothills to plains"],
    popularStops: ["Mohand", "Roorkee", "Muzaffarnagar"],
    bestTime: "Morning 6-7 AM for comfortable daytime travel",
    description: `Dehradun to Delhi one-way cab covers 260 km from the beautiful Doon Valley to the capital. This route is popular with students, government staff, and tourists returning from Dehradun, Mussoorie, or the Uttarakhand hills. The drive takes you through the scenic Mohand forest area, bypasses Haridwar, and joins the Delhi-Meerut Expressway.

Our one-way cab saves you 50% compared to a round-trip booking — perfect if you flew into Dehradun and are returning by road, or if you simply need a single-direction drop. Professional drivers, AC vehicles, and no hidden charges. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Dehradun to Delhi?", answer: "Dehradun to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Dehradun to Delhi take?", answer: "The drive takes 5-6 hours via NH-334 and the Delhi-Meerut Expressway." },
      { question: "Can I be picked up from Mussoorie instead?", answer: "Yes, pickup from Mussoorie is available. Mussoorie is 35 km from Dehradun, adding about 1 hour and ₹385 extra (Sedan)." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Dehradun are available with flight tracking service." },
      { question: "Is this cheaper than the Dehradun-Delhi train?", answer: "For 2-3 passengers, the shared cab cost is comparable to AC train tickets with added door-to-door convenience." },
      { question: "What is the route taken?", answer: "Dehradun → Mohand Forest → Haridwar bypass → Roorkee → Muzaffarnagar → Meerut → Delhi-Meerut Expressway → Delhi." }
    ]
  },

  "agra-to-varanasi": {
    from: "Agra",
    to: "Varanasi",
    distance: "605 km",
    distanceNum: 605,
    time: "9-10 hours",
    highway: "Agra-Lucknow Expressway + Purvanchal Expressway",
    ...calcFares(605),
    highlights: ["Via dual expressway route", "9-10 hours Taj to Ganga journey", "Heritage meets spirituality"],
    popularStops: ["Lucknow bypass", "Sultanpur", "Jaunpur"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Agra to Varanasi one-way cab covers 605 km through two premium expressways — the Agra-Lucknow Expressway and the Purvanchal Expressway. This route connects India's most iconic heritage city (Taj Mahal) with its most sacred spiritual city (Ganga Ghats of Varanasi). It is a favourite route for tourists completing the UP heritage circuit.

The 9-10 hour drive is comfortable on the expressways. You bypass Lucknow and continue east towards Varanasi. Overnight travel is popular, departing Agra at 9-10 PM and arriving in Varanasi by morning. Our drivers are experienced on this long route with planned rest breaks. Book from ₹6,655 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Agra to Varanasi?", answer: "Agra to Varanasi one-way cab costs ₹6,655 for Sedan (605 km at ₹11/km). Ertiga is ₹9,075 and Innova is ₹10,890." },
      { question: "How long does Agra to Varanasi take?", answer: "Agra to Varanasi takes 9-10 hours via the Agra-Lucknow and Purvanchal Expressways." },
      { question: "Is overnight travel recommended?", answer: "Yes, many travellers prefer departing at night to arrive in Varanasi by morning for the Ganga Aarti." },
      { question: "Can I stop at Lucknow on the way?", answer: "The route bypasses Lucknow via the expressway. A Lucknow city visit would require a detour and additional charges." },
      { question: "Which vehicle for a 605 km journey?", answer: "Innova Crysta is recommended for the long distance — more space, better comfort, and a smoother ride." },
      { question: "Do you assign two drivers for this distance?", answer: "For routes over 500 km, we may assign a co-driver for safety, especially on overnight trips." }
    ]
  },

  "noida-to-agra": {
    from: "Noida",
    to: "Agra",
    distance: "200 km",
    distanceNum: 200,
    time: "2.5-3 hours",
    highway: "Yamuna Expressway (Noida entry)",
    ...calcFares(200),
    highlights: ["Direct Yamuna Expressway access", "2.5-3 hours fastest route", "Noida to Taj Mahal"],
    popularStops: ["Mathura", "Vrindavan"],
    bestTime: "Early morning 5-6 AM for Taj Mahal sunrise",
    description: `Noida to Agra is one of the quickest intercity routes in India — just 200 km via the Yamuna Expressway with the entry point right in Noida. This makes it even faster than Delhi to Agra, with a drive time of just 2.5-3 hours. Residents of Noida, Greater Noida, and Ghaziabad find this route incredibly convenient for Taj Mahal visits, weddings, and business trips.

Our one-way cab service from Noida to Agra is perfect for day trippers who plan to return by train or those attending events in Agra. The Yamuna Expressway entry at Noida means you skip Delhi traffic entirely. Save 50% with our one-way fares. Book from ₹3,300 for a Sedan (300 km minimum billing applies).`,
    faqs: [
      { question: "How much is a one-way cab from Noida to Agra?", answer: "Noida to Agra one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 200 km distance). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Noida to Agra take?", answer: "Noida to Agra takes just 2.5-3 hours via the Yamuna Expressway. The expressway entry is in Noida itself." },
      { question: "Is it faster from Noida than Delhi?", answer: "Yes, Noida is closer to the Yamuna Expressway entry point, saving 30-45 minutes compared to central Delhi." },
      { question: "Can I be picked up from Greater Noida?", answer: "Yes, pickup from anywhere in Noida, Greater Noida, or Ghaziabad for the Agra one-way trip." },
      { question: "Why is minimum billing 300 km for a 200 km ride?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. Still saves 50% versus a round-trip booking." },
      { question: "Can I stop at Mathura/Vrindavan?", answer: "Yes, both are on-route stops from Noida to Agra. Up to 2 stops included at no extra charge." }
    ]
  },

  "gurgaon-to-jaipur": {
    from: "Gurgaon",
    to: "Jaipur",
    distance: "260 km",
    distanceNum: 260,
    time: "4-4.5 hours",
    highway: "NH-48 (Delhi-Jaipur Expressway, Gurgaon entry)",
    ...calcFares(260),
    highlights: ["Direct NH-48 access from Gurgaon", "4-4.5 hours to Pink City", "Skip Delhi traffic entirely"],
    popularStops: ["Neemrana Fort", "Behror"],
    bestTime: "Morning 6-7 AM or evening post-office hours",
    description: `Gurgaon (Gurugram) to Jaipur is a convenient 260 km drive via the NH-48 Delhi-Jaipur Expressway. Since Gurgaon sits right on the highway, you skip Delhi traffic entirely — making this faster than a Delhi-Jaipur trip. This route is especially popular with corporate professionals, IT workers, and families living in Gurgaon, Manesar, and the surrounding areas.

Our one-way cab from Gurgaon to Jaipur takes just 4-4.5 hours and saves you 50% compared to a round-trip fare. Whether you are heading for a Rajasthan getaway, attending a wedding in Jaipur, or on a business trip — our professional drivers ensure a comfortable, on-time journey. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Gurgaon to Jaipur?", answer: "Gurgaon to Jaipur one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 260 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Gurgaon to Jaipur take?", answer: "Gurgaon to Jaipur takes 4-4.5 hours via NH-48. Faster than Delhi since you skip Delhi traffic." },
      { question: "Is it cheaper from Gurgaon than Delhi?", answer: "The fare is the same (300 km minimum billing), but you save 30-60 minutes of travel time by avoiding Delhi city traffic." },
      { question: "Can I be picked up from my office in Gurgaon?", answer: "Yes, pickup from any location in Gurgaon, Cyber City, Manesar, Sohna Road, or Golf Course Road." },
      { question: "Can I stop at Neemrana Fort?", answer: "Yes, Neemrana Fort is on the Gurgaon-Jaipur highway and makes for a great en-route stop." },
      { question: "Do you offer Gurgaon to Jaipur for corporate travel?", answer: "Yes, we offer corporate one-way cabs with invoicing, GST bills, and dedicated account managers. Call 7668570551." }
    ]
  },
};

// Helper functions
export function getOneWayRoute(slug) {
  return oneWayRoutes[slug] || null;
}

export function getAllOneWayRouteSlugs() {
  return Object.keys(oneWayRoutes);
}

export function getRelatedRoutes(slug) {
  const route = oneWayRoutes[slug];
  if (!route) return [];

  const reverseSlug = `${route.to.toLowerCase().replace(/\s+/g, '-')}-to-${route.from.toLowerCase().replace(/\s+/g, '-')}`;
  const related = [];

  // Add reverse route if it exists
  if (oneWayRoutes[reverseSlug]) {
    related.push({ slug: reverseSlug, ...oneWayRoutes[reverseSlug] });
  }

  // Add other routes from the same origin city
  Object.entries(oneWayRoutes).forEach(([key, value]) => {
    if (key !== slug && key !== reverseSlug && value.from === route.from) {
      related.push({ slug: key, ...value });
    }
  });

  // Add routes to the same destination from other cities
  Object.entries(oneWayRoutes).forEach(([key, value]) => {
    if (key !== slug && key !== reverseSlug && value.to === route.to && value.from !== route.from) {
      related.push({ slug: key, ...value });
    }
  });

  return related.slice(0, 8);
}
