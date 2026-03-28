// src/utilis/oneWayCabData.js - Complete data for all 59 one-way cab routes
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

  // ===== REVERSE & ADDITIONAL ONE-WAY ROUTES (34 new routes) =====

  "rishikesh-to-delhi": {
    from: "Rishikesh",
    to: "Delhi",
    distance: "250 km",
    distanceNum: 250,
    time: "5-6 hours",
    highway: "NH-334 via Haridwar & Meerut Expressway",
    ...calcFares(250),
    highlights: ["Via Haridwar & Delhi-Meerut Expressway", "5-6 hours yoga capital to Delhi", "Post-adventure comfortable ride"],
    popularStops: ["Haridwar", "Roorkee"],
    bestTime: "Morning 7-8 AM after attending Ganga Aarti or yoga session",
    description: `Rishikesh to Delhi one-way cab covers 250 km from the yoga capital of the world to the national capital. After your spiritual retreat, adventure activities like river rafting, bungee jumping, or a peaceful stay by the Ganges, our one-way cab ensures a comfortable return to Delhi. The route passes through Haridwar and joins the Delhi-Meerut Expressway for a smooth ride.

The 5-6 hour drive takes you from the Himalayan foothills back to the plains. Many travellers visit Rishikesh for ashram stays, yoga retreats, or as part of the Char Dham circuit and need a reliable one-way ride back to Delhi for flights or trains. Our professional drivers ensure a relaxed, on-time journey. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Rishikesh to Delhi cost?", answer: "Rishikesh to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Rishikesh to Delhi take by cab?", answer: "Rishikesh to Delhi takes 5-6 hours via NH-334 and the Delhi-Meerut Expressway." },
      { question: "Can you drop me at Delhi Airport from Rishikesh?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Rishikesh are available with flight tracking." },
      { question: "Can I get picked up from my ashram in Rishikesh?", answer: "Yes, pickup from any ashram, hotel, camp, or address in Rishikesh including Laxman Jhula, Ram Jhula, and Tapovan areas." },
      { question: "Is the Rishikesh to Delhi route the same as Haridwar to Delhi?", answer: "Rishikesh is 25 km ahead of Haridwar. The route merges at Haridwar and follows the same highway to Delhi." },
      { question: "What is the best time to leave Rishikesh for Delhi?", answer: "Leave by 7-8 AM to reach Delhi by early afternoon. This avoids Delhi evening traffic and gives you a comfortable daytime drive." }
    ]
  },

  "manali-to-delhi": {
    from: "Manali",
    to: "Delhi",
    distance: "530 km",
    distanceNum: 530,
    time: "12-13 hours",
    highway: "NH-21 via Kullu & Chandigarh, then NH-44",
    ...calcFares(530),
    highlights: ["Via Kullu Valley & Chandigarh", "12-13 hours Himalayan to plains journey", "Epic mountain descent road trip"],
    popularStops: ["Kullu", "Sundernagar", "Chandigarh"],
    bestTime: "Night departure 8-9 PM to arrive in Delhi by morning",
    description: `Manali to Delhi one-way cab covers 530 km from the adventure capital of the Himalayas back to the national capital. After your mountain holiday — skiing, paragliding, visiting Rohtang Pass, or exploring Old Manali — our one-way cab provides a comfortable return without paying for a round trip. The route descends through the stunning Kullu Valley, passes Chandigarh, and joins NH-44 to Delhi.

The 12-13 hour drive is best done as an overnight journey. Depart Manali at 8-9 PM and arrive in Delhi by morning, ready for your flight or onward plans. Our experienced hill drivers navigate the mountain roads safely, transitioning to the plains highway seamlessly. Book from ₹5,830 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Manali to Delhi?", answer: "Manali to Delhi one-way cab costs ₹5,830 for Sedan (530 km at ₹11/km). Ertiga is ₹7,950 and Innova Crysta is ₹9,540. Toll extra." },
      { question: "How long does Manali to Delhi take by cab?", answer: "Manali to Delhi takes 12-13 hours by cab. The mountain section (Manali-Chandigarh) takes 7-8 hours and the plains (Chandigarh-Delhi) takes 4-5 hours." },
      { question: "Is overnight travel recommended from Manali to Delhi?", answer: "Yes, departing at 8-9 PM is popular. You sleep through the plains section and wake up near Delhi by morning." },
      { question: "Can I stop at Chandigarh on the way back?", answer: "Yes, Chandigarh is a natural midpoint. You can take a rest break or a short visit before continuing to Delhi." },
      { question: "Which vehicle is best for the Manali to Delhi return?", answer: "Innova Crysta is recommended for the long mountain journey — better comfort, suspension, and engine power on hills." },
      { question: "Is the road from Manali to Delhi safe at night?", answer: "The hill section requires careful driving, and our drivers are experienced on this route. The plains section (Chandigarh-Delhi) is well-lit and safe." }
    ]
  },

  "shimla-to-delhi": {
    from: "Shimla",
    to: "Delhi",
    distance: "350 km",
    distanceNum: 350,
    time: "7-8 hours",
    highway: "NH-5 to Chandigarh, then NH-44 to Delhi",
    ...calcFares(350),
    highlights: ["Via Chandigarh & NH-44", "7-8 hours Queen of Hills to Capital", "Scenic mountain descent"],
    popularStops: ["Solan", "Chandigarh"],
    bestTime: "Morning 6-7 AM for comfortable daytime travel",
    description: `Shimla to Delhi one-way cab covers 350 km from the Queen of Hills back to the capital. After your hill station holiday, honeymoon, or winter getaway, our one-way cab saves you 50% compared to round-trip fares. The route descends from Shimla through Solan and Kandaghat to Chandigarh, then takes the NH-44 expressway to Delhi.

The 7-8 hour drive includes the scenic Shimla-Chandigarh hill section (3 hours) and the Chandigarh-Delhi highway section (4-5 hours). Our experienced hill drivers ensure a safe descent through the winding mountain roads. Depart early morning and reach Delhi by afternoon. Book from ₹3,850 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Shimla to Delhi?", answer: "Shimla to Delhi one-way cab costs ₹3,850 for Sedan (350 km at ₹11/km). Ertiga is ₹5,250 and Innova Crysta is ₹6,300. Toll extra." },
      { question: "How long does Shimla to Delhi take by cab?", answer: "Shimla to Delhi takes 7-8 hours. The Shimla-Chandigarh hill section takes 3 hours and Chandigarh-Delhi takes 4-5 hours." },
      { question: "Can you drop me at Delhi Airport from Shimla?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Shimla are available with flight monitoring." },
      { question: "Is the Shimla-Chandigarh road safe for descent?", answer: "Yes, the road is well-maintained. Our drivers are experienced on hill roads and handle the 50+ hairpin bends safely." },
      { question: "Can I stop at Chandigarh on the way?", answer: "Yes, Chandigarh is a natural break point. You can stop for a meal or a quick visit to Rock Garden or Sukhna Lake." },
      { question: "Is night travel possible from Shimla to Delhi?", answer: "We recommend daytime travel for the hill section. The Chandigarh-Delhi highway is safe for night driving." }
    ]
  },

  "shimla-to-chandigarh": {
    from: "Shimla",
    to: "Chandigarh",
    distance: "115 km",
    distanceNum: 115,
    time: "3-4 hours",
    highway: "NH-5 via Solan & Kalka",
    ...calcFares(115),
    highlights: ["Via NH-5 scenic descent", "3-4 hours hill drive", "Queen of Hills to City Beautiful"],
    popularStops: ["Solan", "Kalka"],
    bestTime: "Morning 8-9 AM for clear mountain views",
    description: `Shimla to Chandigarh one-way cab covers 115 km descending from the Queen of Hills to the City Beautiful. This short but scenic drive is popular with travellers heading to Chandigarh Airport, Railway Station, or continuing to Delhi, Amritsar, or other plains destinations. Despite the short distance, the winding mountain roads make it a 3-4 hour journey.

Our one-way cab saves you from the hassle of booking a round trip when you only need a downhill drop. The route passes through Solan and Kalka (famous for the Kalka-Shimla toy train). Our skilled hill drivers ensure a safe, comfortable descent. Book from ₹3,300 for a Sedan (300 km minimum billing applies).`,
    faqs: [
      { question: "How much is a one-way cab from Shimla to Chandigarh?", answer: "Shimla to Chandigarh one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 115 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "Why is minimum billing 300 km for 115 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves you 50% versus a round-trip booking." },
      { question: "How long does Shimla to Chandigarh take?", answer: "The drive takes 3-4 hours due to winding mountain roads with 50+ hairpin turns despite the 115 km distance." },
      { question: "Can you drop me at Chandigarh Airport?", answer: "Yes, direct drops at Chandigarh Airport are available from Shimla, timed to your flight departure." },
      { question: "Is the toy train from Shimla to Kalka better?", answer: "The Shimla-Kalka toy train is scenic but takes 5-6 hours. Our cab reaches Chandigarh in 3-4 hours with door-to-door convenience." },
      { question: "Is the road from Shimla safe during monsoon?", answer: "The road is generally open during monsoon. Our drivers are experienced and avoid travel during active landslide warnings." }
    ]
  },

  "amritsar-to-delhi": {
    from: "Amritsar",
    to: "Delhi",
    distance: "450 km",
    distanceNum: 450,
    time: "7-8 hours",
    highway: "NH-44 (GT Road) via Jalandhar & Ambala",
    ...calcFares(450),
    highlights: ["Via NH-44 Grand Trunk Road", "7-8 hours Golden Temple city to Capital", "Punjab heartland return"],
    popularStops: ["Jalandhar", "Ludhiana", "Ambala"],
    bestTime: "Morning 6-7 AM after Golden Temple morning visit",
    description: `Amritsar to Delhi one-way cab covers 450 km along the historic Grand Trunk Road (NH-44). After visiting the magnificent Golden Temple, attending the Wagah Border ceremony, or attending a family event in Amritsar, our one-way cab provides a comfortable return to Delhi at half the cost of a round-trip booking.

The 7-8 hour drive passes through the bustling Punjab cities of Jalandhar, Ludhiana, and Ambala. The highway is in excellent condition with multiple food stops serving authentic Punjabi cuisine. Our drivers know the best dhaba stops along the route. Book from ₹4,950 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Amritsar to Delhi?", answer: "Amritsar to Delhi one-way cab costs ₹4,950 for Sedan (450 km at ₹11/km). Ertiga is ₹6,750 and Innova Crysta is ₹8,100. Toll extra." },
      { question: "How long does Amritsar to Delhi take by cab?", answer: "Amritsar to Delhi takes 7-8 hours via NH-44. The highway is well-maintained with minimal traffic outside peak hours." },
      { question: "Can you drop me at Delhi Airport from Amritsar?", answer: "Yes, direct airport drops at IGI Terminal 1, 2, or 3 from Amritsar with flight monitoring included." },
      { question: "What is the best time to leave Amritsar?", answer: "Leave by 6-7 AM to reach Delhi by early afternoon. This avoids Delhi evening traffic." },
      { question: "Can I stop for meals on the route?", answer: "Yes, the GT Road has legendary Punjabi dhabas. Stops at Jalandhar, Ludhiana, and Karnal are popular for meals." },
      { question: "Is night travel safe from Amritsar to Delhi?", answer: "Yes, NH-44 is well-lit, well-patrolled, and safe for night travel. Many travellers depart late evening." }
    ]
  },

  "amritsar-to-chandigarh": {
    from: "Amritsar",
    to: "Chandigarh",
    distance: "230 km",
    distanceNum: 230,
    time: "4-5 hours",
    highway: "NH-44 via Jalandhar & Ludhiana",
    ...calcFares(230),
    highlights: ["Via NH-44 Punjab highway", "4-5 hours through Punjab", "Golden Temple city to City Beautiful"],
    popularStops: ["Jalandhar", "Ludhiana"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Amritsar to Chandigarh one-way cab covers 230 km through the heart of Punjab. This route is popular with travellers heading to Chandigarh for business, catching a flight from Chandigarh Airport, or continuing to Shimla, Manali, or Delhi. After visiting the Golden Temple and experiencing Amritsar's culture, our one-way cab provides an affordable, comfortable ride.

The 4-5 hour drive on NH-44 passes through Jalandhar and Ludhiana, two of Punjab's largest cities. The highway is in excellent condition. Our drivers know the best food stops along the route. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Amritsar to Chandigarh?", answer: "Amritsar to Chandigarh one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 230 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Amritsar to Chandigarh take?", answer: "Amritsar to Chandigarh takes 4-5 hours via NH-44 through Jalandhar and Ludhiana." },
      { question: "Can you drop me at Chandigarh Airport?", answer: "Yes, direct drops at Chandigarh Airport from Amritsar are available with flight tracking." },
      { question: "Can I stop at Jalandhar on the way?", answer: "Yes, Jalandhar is on the route. Up to 2 on-route stops are included at no extra charge." },
      { question: "Is this route suitable for night travel?", answer: "Yes, NH-44 is well-lit and safe for night travel between Amritsar and Chandigarh." },
      { question: "What vehicles are available?", answer: "We offer Sedan (Swift Dzire/Etios), Ertiga (7-seater), and Innova Crysta (7-seater premium) for this route." }
    ]
  },

  "varanasi-to-delhi": {
    from: "Varanasi",
    to: "Delhi",
    distance: "820 km",
    distanceNum: 820,
    time: "12-14 hours",
    highway: "Purvanchal Expressway + Agra-Lucknow Expressway + Yamuna Expressway",
    ...calcFares(820),
    highlights: ["Via triple expressway route", "12-14 hours spiritual capital to Delhi", "Ganga to Yamuna journey"],
    popularStops: ["Lucknow bypass", "Agra bypass"],
    bestTime: "Night departure 7-8 PM to arrive in Delhi by morning",
    description: `Varanasi to Delhi one-way cab covers 820 km using three world-class expressways — the Purvanchal Expressway, Agra-Lucknow Expressway, and Yamuna Expressway. After your spiritual journey to the oldest living city, visiting the Ganga Ghats, Kashi Vishwanath Temple, and Sarnath, our one-way cab provides a comfortable return to Delhi at 50% savings versus round-trip fares.

The 12-14 hour drive is best done overnight, departing Varanasi at 7-8 PM and arriving in Delhi by morning. The expressway network has made this once-gruelling journey much more comfortable. Our professional drivers handle the long distance with scheduled rest breaks. Book from ₹9,020 for a Sedan.`,
    faqs: [
      { question: "How much does a one-way cab from Varanasi to Delhi cost?", answer: "Varanasi to Delhi one-way cab costs ₹9,020 for Sedan (820 km at ₹11/km). Ertiga is ₹12,300 and Innova Crysta is ₹14,760. Toll extra." },
      { question: "How long does Varanasi to Delhi take by cab?", answer: "Varanasi to Delhi takes 12-14 hours via the expressway route. Overnight travel is strongly recommended." },
      { question: "Is overnight travel recommended?", answer: "Yes, depart Varanasi at 7-8 PM and arrive in Delhi by 7-8 AM. This is the most popular timing for this route." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Varanasi with flight monitoring." },
      { question: "Do you assign two drivers for this distance?", answer: "For 820 km routes, we may assign a co-driver for safety, especially on overnight trips. This ensures the driver is always well-rested." },
      { question: "Is flying better than driving Varanasi to Delhi?", answer: "Flying takes 1.5 hours versus 12-14 by road. However, for 3-4 passengers with luggage, the overnight cab is cost-effective and convenient." }
    ]
  },

  "varanasi-to-lucknow": {
    from: "Varanasi",
    to: "Lucknow",
    distance: "300 km",
    distanceNum: 300,
    time: "5-6 hours",
    highway: "Purvanchal Expressway / NH-232",
    ...calcFares(300),
    highlights: ["Via Purvanchal Expressway", "5-6 hours holy city to Nawabi city", "Eastern UP to Central UP"],
    popularStops: ["Jaunpur", "Sultanpur"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Varanasi to Lucknow one-way cab covers 300 km through the heartland of Uttar Pradesh. After your pilgrimage to Kashi, visits to the Ganga Ghats, and darshan at Kashi Vishwanath Temple, our one-way cab provides a smooth ride to the City of Nawabs. The Purvanchal Expressway has made this journey faster and more comfortable than ever.

The 5-6 hour drive passes through the historic town of Jaunpur and the flat Gangetic plains. Whether you are heading to Lucknow for business, catching a flight, or continuing westward, our one-way service saves you 50% compared to round-trip bookings. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Varanasi to Lucknow?", answer: "Varanasi to Lucknow one-way cab costs ₹3,300 for Sedan (300 km at ₹11/km). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Varanasi to Lucknow take?", answer: "Varanasi to Lucknow takes 5-6 hours via the Purvanchal Expressway or NH-232." },
      { question: "Is the Purvanchal Expressway used?", answer: "Yes, the Purvanchal Expressway connects eastern UP to Lucknow, significantly reducing travel time." },
      { question: "Can I be picked up from my hotel in Varanasi?", answer: "Yes, pickup from any hotel, ghat area, Varanasi Airport, or Railway Station for the one-way trip to Lucknow." },
      { question: "Can I visit Ayodhya on the way?", answer: "Ayodhya is slightly off the direct route. A detour would add about 2 hours and additional kilometre charges." },
      { question: "Can you drop me at Lucknow Airport?", answer: "Yes, direct drops at Chaudhary Charan Singh International Airport, Lucknow from Varanasi are available." }
    ]
  },

  "lucknow-to-agra": {
    from: "Lucknow",
    to: "Agra",
    distance: "330 km",
    distanceNum: 330,
    time: "4-5 hours",
    highway: "Agra-Lucknow Expressway",
    ...calcFares(330),
    highlights: ["Via Agra-Lucknow Expressway", "4-5 hours expressway ride", "Nawabi city to Taj Mahal city"],
    popularStops: ["Expressway rest areas", "Kannauj bypass"],
    bestTime: "Early morning 5-6 AM for a Taj Mahal afternoon visit",
    description: `Lucknow to Agra one-way cab covers 330 km via the Agra-Lucknow Expressway, one of India's finest highways. This route connects the City of Nawabs to the city of the Taj Mahal, making it popular with tourists completing the UP heritage circuit, business travellers, and families. The expressway ensures a smooth, fast journey of just 4-5 hours.

Our one-way cab service saves you 50% if you are visiting Agra for a day or continuing to Delhi, Jaipur, or other destinations. The expressway has excellent rest areas with food and fuel. Our experienced drivers know every exit and lane. Book from ₹3,630 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Lucknow to Agra?", answer: "Lucknow to Agra one-way cab costs ₹3,630 for Sedan (330 km at ₹11/km). Ertiga is ₹4,950 and Innova is ₹5,940. Toll extra." },
      { question: "How long does Lucknow to Agra take?", answer: "Lucknow to Agra takes 4-5 hours via the Agra-Lucknow Expressway." },
      { question: "Is the Agra-Lucknow Expressway safe?", answer: "Yes, the expressway is well-maintained, patrolled, and has emergency services. One of the safest highways in India." },
      { question: "Can I continue to Delhi from Agra?", answer: "Yes, you can book a separate Agra to Delhi one-way cab or request an extended trip. Call 7668570551 for a combined quote." },
      { question: "Are meals available on the expressway?", answer: "Yes, the Agra-Lucknow Expressway has multiple rest areas with food courts, restrooms, and fuel stations." },
      { question: "Do you pick up from Lucknow Railway Station?", answer: "Yes, pickup from Lucknow Railway Station, Airport, or any address in Lucknow for the one-way trip to Agra." }
    ]
  },

  "udaipur-to-jaipur": {
    from: "Udaipur",
    to: "Jaipur",
    distance: "395 km",
    distanceNum: 395,
    time: "6-7 hours",
    highway: "NH-48 via Chittorgarh & Ajmer",
    ...calcFares(395),
    highlights: ["Via Chittorgarh Fort & Ajmer", "6-7 hours Lake City to Pink City", "Rajasthan heritage corridor"],
    popularStops: ["Chittorgarh", "Ajmer"],
    bestTime: "Morning 6-7 AM for scenic daylight drive through Rajasthan",
    description: `Udaipur to Jaipur one-way cab covers 395 km through the heart of Rajasthan, passing through the legendary Chittorgarh Fort and the pilgrim city of Ajmer. After your romantic getaway in the City of Lakes — visiting Lake Pichola, City Palace, and the sunset points — our one-way cab takes you to the Pink City comfortably and affordably.

The 6-7 hour drive passes through some of Rajasthan's most scenic countryside. You can stop at Chittorgarh Fort (UNESCO World Heritage Site) for a heritage break or Ajmer for a visit to the famous Dargah Sharif. Our drivers are experienced on this Rajasthan circuit route. Book from ₹4,345 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Udaipur to Jaipur?", answer: "Udaipur to Jaipur one-way cab costs ₹4,345 for Sedan (395 km at ₹11/km). Ertiga is ₹5,925 and Innova Crysta is ₹7,110. Toll extra." },
      { question: "How long does Udaipur to Jaipur take?", answer: "Udaipur to Jaipur takes 6-7 hours via NH-48 through Chittorgarh and Ajmer." },
      { question: "Can I visit Chittorgarh Fort on the way?", answer: "Yes, Chittorgarh Fort is on the route and makes for an excellent 1-2 hour stop. It is a UNESCO World Heritage Site." },
      { question: "Is the road from Udaipur to Jaipur good?", answer: "The highway is mostly 4-lane and well-maintained. Some sections near Chittorgarh may be 2-lane but are still good quality." },
      { question: "Can I stop at Ajmer Dargah on the way?", answer: "Yes, Ajmer is on the route. You can visit the Ajmer Sharif Dargah as an en-route stop." },
      { question: "Can I be dropped at Jaipur Airport?", answer: "Yes, direct drops at Jaipur International Airport from Udaipur are available." }
    ]
  },

  "jodhpur-to-delhi": {
    from: "Jodhpur",
    to: "Delhi",
    distance: "590 km",
    distanceNum: 590,
    time: "9-10 hours",
    highway: "NH-62 via Ajmer, then NH-48 to Delhi",
    ...calcFares(590),
    highlights: ["Via Ajmer & NH-48", "9-10 hours Blue City to Capital", "Desert to metropolis journey"],
    popularStops: ["Ajmer", "Jaipur bypass", "Neemrana"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Jodhpur to Delhi one-way cab covers 590 km from the magnificent Blue City to the national capital. After exploring Mehrangarh Fort, the vibrant Sardar Market, and the desert landscapes of Jodhpur, our one-way cab provides a comfortable return journey. The route passes through Ajmer, bypasses Jaipur, and joins the NH-48 expressway to Delhi.

The 9-10 hour drive is best started early morning or as an overnight trip. The changing landscape from the Thar Desert edge through the Aravalli foothills to the Delhi plains is a memorable experience. Our professional drivers ensure a safe, comfortable journey. Book from ₹6,490 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jodhpur to Delhi?", answer: "Jodhpur to Delhi one-way cab costs ₹6,490 for Sedan (590 km at ₹11/km). Ertiga is ₹8,850 and Innova Crysta is ₹10,620. Toll extra." },
      { question: "How long does Jodhpur to Delhi take?", answer: "Jodhpur to Delhi takes 9-10 hours via NH-62 and NH-48." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Jodhpur with flight monitoring." },
      { question: "Is overnight travel recommended?", answer: "Yes, departing Jodhpur at 9-10 PM and arriving in Delhi by morning is a popular option." },
      { question: "Can I stop at Jaipur on the way?", answer: "The route bypasses Jaipur. A city visit would require a detour. For a Jaipur stop, book Jodhpur-Jaipur and Jaipur-Delhi separately." },
      { question: "Which vehicle is best for this long route?", answer: "Innova Crysta is recommended for the 590 km journey. Sedan works for budget-conscious travellers." }
    ]
  },

  "jaisalmer-to-jodhpur": {
    from: "Jaisalmer",
    to: "Jodhpur",
    distance: "285 km",
    distanceNum: 285,
    time: "4-5 hours",
    highway: "NH-15 via Pokhran & Dechu",
    ...calcFares(285),
    highlights: ["Via NH-15 desert highway", "4-5 hours through the Thar Desert", "Golden City to Blue City"],
    popularStops: ["Pokhran", "Dechu"],
    bestTime: "Morning 7-8 AM for desert sunrise views",
    description: `Jaisalmer to Jodhpur one-way cab covers 285 km through the heart of the Thar Desert. After your magical experience in the Golden City — camel safaris at Sam Sand Dunes, exploring Jaisalmer Fort, and the stunning havelis — our one-way cab takes you to the Blue City of Jodhpur. This is a key leg of the popular Rajasthan desert circuit.

The 4-5 hour drive passes through the desert landscape with vast stretches of golden sand, occasional oases, and the town of Pokhran (site of India's nuclear tests). The highway is in good condition and the desert scenery makes this a memorable drive. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Jaisalmer to Jodhpur?", answer: "Jaisalmer to Jodhpur one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 285 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jaisalmer to Jodhpur take?", answer: "Jaisalmer to Jodhpur takes 4-5 hours via NH-15 through Pokhran." },
      { question: "Is the desert road safe?", answer: "Yes, NH-15 is a well-maintained national highway. Our drivers are experienced on this desert route." },
      { question: "Can I stop at Pokhran on the way?", answer: "Yes, Pokhran is on the route. You can visit the Pokhran Fort or stop for refreshments." },
      { question: "What time should I leave Jaisalmer?", answer: "Leave by 7-8 AM to enjoy the desert morning scenery and reach Jodhpur by noon for sightseeing." },
      { question: "Is this route part of the Rajasthan circuit?", answer: "Yes, Jaisalmer-Jodhpur is a key leg of the popular Jaisalmer-Jodhpur-Udaipur or Jaisalmer-Jodhpur-Jaipur Rajasthan circuit." }
    ]
  },

  "jaisalmer-to-jaipur": {
    from: "Jaisalmer",
    to: "Jaipur",
    distance: "560 km",
    distanceNum: 560,
    time: "8-9 hours",
    highway: "NH-15 via Jodhpur, then NH-62 via Ajmer",
    ...calcFares(560),
    highlights: ["Via Jodhpur & Ajmer", "8-9 hours desert to Pink City", "Complete Rajasthan desert circuit"],
    popularStops: ["Pokhran", "Jodhpur bypass", "Ajmer"],
    bestTime: "Early morning 5-6 AM for a full day of driving",
    description: `Jaisalmer to Jaipur one-way cab covers 560 km across the breadth of Rajasthan, from the golden sands of the Thar Desert to the Pink City. This is the longest single-leg route in the Rajasthan circuit, passing through Jodhpur and Ajmer. After your desert adventure in Jaisalmer, our one-way cab provides a direct, comfortable ride to Jaipur for your flight home or onward journey.

The 8-9 hour drive takes you from the barren beauty of the Thar through the Aravalli foothills to the bustling capital of Rajasthan. The changing landscape is one of the highlights of this drive. Our experienced drivers ensure comfortable navigation. Book from ₹6,160 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaisalmer to Jaipur?", answer: "Jaisalmer to Jaipur one-way cab costs ₹6,160 for Sedan (560 km at ₹11/km). Ertiga is ₹8,400 and Innova Crysta is ₹10,080. Toll extra." },
      { question: "How long does Jaisalmer to Jaipur take?", answer: "Jaisalmer to Jaipur takes 8-9 hours via Jodhpur and Ajmer." },
      { question: "Can I stop at Jodhpur on the way?", answer: "The route passes through Jodhpur. A quick stop for meals is possible, but a full Jodhpur sightseeing visit would require an extended stop." },
      { question: "Is this a long drive?", answer: "Yes, 560 km is a long drive. Early departure or overnight travel is recommended. Innova is preferred for comfort." },
      { question: "Can you drop me at Jaipur Airport?", answer: "Yes, direct drops at Jaipur International Airport from Jaisalmer are available." },
      { question: "What is the road condition?", answer: "NH-15 from Jaisalmer to Jodhpur and NH-62 from Jodhpur to Jaipur are well-maintained national highways." }
    ]
  },

  "jaipur-to-agra": {
    from: "Jaipur",
    to: "Agra",
    distance: "240 km",
    distanceNum: 240,
    time: "4-5 hours",
    highway: "NH-21 via Dausa & Bharatpur",
    ...calcFares(240),
    highlights: ["Via Bharatpur & Fatehpur Sikri", "4-5 hours Pink City to Taj City", "Golden Triangle return leg"],
    popularStops: ["Dausa", "Bharatpur Bird Sanctuary"],
    bestTime: "Morning 7-8 AM for an afternoon Taj Mahal visit",
    description: `Jaipur to Agra one-way cab covers 240 km through the Rajasthan-UP border region, completing the classic Golden Triangle route. After exploring the Pink City — Amber Fort, Hawa Mahal, City Palace, and the vibrant bazaars — our one-way cab takes you to the city of the Taj Mahal. This route passes near the famous Bharatpur Bird Sanctuary and Fatehpur Sikri.

The 4-5 hour drive through the scenic Rajasthani countryside is a pleasant journey. You can stop at Bharatpur for bird watching or Fatehpur Sikri for a heritage visit. Our one-way service saves you 50% compared to round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Agra?", answer: "Jaipur to Agra one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 240 km). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Jaipur to Agra take?", answer: "Jaipur to Agra takes 4-5 hours via NH-21 through Dausa and Bharatpur." },
      { question: "Can I visit Fatehpur Sikri on the way?", answer: "Yes, Fatehpur Sikri is near the Agra end of this route. It is a popular en-route stop for heritage enthusiasts." },
      { question: "Can I visit Bharatpur on the way?", answer: "Yes, Bharatpur Bird Sanctuary (Keoladeo National Park) is on the route. A 1-2 hour visit is possible." },
      { question: "Is this the Golden Triangle route?", answer: "Yes, Jaipur to Agra is the return leg of the Delhi-Agra-Jaipur Golden Triangle circuit." },
      { question: "Can I continue to Delhi from Agra?", answer: "Yes, book a separate Agra to Delhi one-way cab or call 7668570551 for a combined Jaipur-Agra-Delhi quote." }
    ]
  },

  "jaipur-to-ajmer": {
    from: "Jaipur",
    to: "Ajmer",
    distance: "135 km",
    distanceNum: 135,
    time: "2-2.5 hours",
    highway: "NH-48 via Dudu & Kishangarh",
    ...calcFares(135),
    highlights: ["Via NH-48 highway", "2-2.5 hours quick ride", "Pink City to Dargah city"],
    popularStops: ["Kishangarh"],
    bestTime: "Morning 7-8 AM for early darshan at Ajmer Dargah",
    description: `Jaipur to Ajmer one-way cab covers 135 km via the NH-48 highway. Ajmer is one of the most important pilgrimage centres in India, home to the Ajmer Sharif Dargah (shrine of Sufi saint Moinuddin Chishti) visited by millions of devotees annually. The nearby town of Pushkar with its sacred lake and Brahma Temple is also easily accessible from Ajmer.

The 2-2.5 hour drive is quick and comfortable on the well-maintained highway. Whether you are heading for pilgrimage, continuing to Pushkar, or attending a function in Ajmer, our one-way cab saves you 50% versus round-trip. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Jaipur to Ajmer?", answer: "Jaipur to Ajmer one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 135 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jaipur to Ajmer take?", answer: "Jaipur to Ajmer takes 2-2.5 hours via NH-48 through Kishangarh." },
      { question: "Can I continue to Pushkar from Ajmer?", answer: "Yes, Pushkar is just 15 km from Ajmer. You can request a Pushkar drop at minimal extra charge or book Jaipur to Pushkar directly." },
      { question: "Why is minimum billing 300 km for 135 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip booking." },
      { question: "Is there a direct cab to Pushkar from Jaipur?", answer: "Yes, we offer Jaipur to Pushkar one-way cab as well. The distance is 150 km via Ajmer." },
      { question: "What is the best time to visit Ajmer Dargah?", answer: "Morning hours (6-9 AM) and evening hours (5-8 PM) are best for darshan. Plan your departure from Jaipur accordingly." }
    ]
  },

  "jaipur-to-pushkar": {
    from: "Jaipur",
    to: "Pushkar",
    distance: "150 km",
    distanceNum: 150,
    time: "2.5-3 hours",
    highway: "NH-48 via Ajmer",
    ...calcFares(150),
    highlights: ["Via Ajmer & NH-48", "2.5-3 hours to sacred lake town", "Pink City to Brahma Temple town"],
    popularStops: ["Ajmer"],
    bestTime: "Morning 6-7 AM for peaceful morning aarti at Pushkar Lake",
    description: `Jaipur to Pushkar one-way cab covers 150 km via Ajmer to the sacred lakeside town of Pushkar. Home to the only Brahma Temple in the world and the holy Pushkar Lake, this is one of Rajasthan's most spiritual destinations. The town is also famous for the annual Pushkar Camel Fair and its vibrant hippie culture.

The 2.5-3 hour drive passes through Ajmer, where you can stop for darshan at the Ajmer Sharif Dargah. Pushkar is 15 km beyond Ajmer on a scenic road through the Nag Pahar hills. Our one-way cab is perfect for pilgrims and tourists who plan to stay in Pushkar. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Jaipur to Pushkar?", answer: "Jaipur to Pushkar one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 150 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jaipur to Pushkar take?", answer: "Jaipur to Pushkar takes 2.5-3 hours via NH-48 through Ajmer." },
      { question: "Can I visit Ajmer Dargah on the way?", answer: "Yes, Ajmer is on the route, 15 km before Pushkar. You can stop for darshan at the Ajmer Sharif Dargah." },
      { question: "Is Pushkar accessible by road?", answer: "Yes, Pushkar is well-connected by road from Jaipur via Ajmer. The road is in good condition." },
      { question: "When is the Pushkar Camel Fair?", answer: "The Pushkar Camel Fair is held annually in November (Kartik Purnima). Book your one-way cab well in advance during this period." },
      { question: "Why is minimum billing 300 km for 150 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip booking." }
    ]
  },

  "jaipur-to-jaisalmer": {
    from: "Jaipur",
    to: "Jaisalmer",
    distance: "560 km",
    distanceNum: 560,
    time: "8-9 hours",
    highway: "NH-62 via Ajmer & Jodhpur, then NH-15",
    ...calcFares(560),
    highlights: ["Via Jodhpur & the Thar Desert", "8-9 hours Pink City to Golden City", "Into the heart of the desert"],
    popularStops: ["Ajmer", "Jodhpur", "Pokhran"],
    bestTime: "Early morning 5-6 AM to arrive before sunset desert safari",
    description: `Jaipur to Jaisalmer one-way cab covers 560 km from the Pink City deep into the Thar Desert to the Golden City. Jaisalmer, with its magnificent sand fort, ornate havelis, and Sam Sand Dunes, is the crown jewel of the Rajasthan desert circuit. This route passes through Jodhpur and across the desert landscape.

The 8-9 hour drive takes you from the Aravalli foothills into the barren beauty of the Thar Desert. The changing landscape is one of the highlights of this journey. Leave early to arrive in Jaisalmer by afternoon for a sunset camel safari at Sam Sand Dunes. Book from ₹6,160 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Jaipur to Jaisalmer?", answer: "Jaipur to Jaisalmer one-way cab costs ₹6,160 for Sedan (560 km at ₹11/km). Ertiga is ₹8,400 and Innova Crysta is ₹10,080. Toll extra." },
      { question: "How long does Jaipur to Jaisalmer take?", answer: "Jaipur to Jaisalmer takes 8-9 hours via Jodhpur." },
      { question: "Can I stop at Jodhpur on the way?", answer: "Yes, Jodhpur is on the route. A quick stop for meals is possible, but a full sightseeing visit would require extra time." },
      { question: "What time should I leave for a sunset desert safari?", answer: "Leave Jaipur by 5-6 AM to reach Jaisalmer by 2-3 PM, giving you time to reach Sam Sand Dunes for the sunset camel safari." },
      { question: "Which vehicle for a 560 km desert drive?", answer: "Innova Crysta is recommended for long desert drives — better comfort, AC performance, and suspension." },
      { question: "Is the road to Jaisalmer good?", answer: "NH-62 and NH-15 are well-maintained national highways. The desert section has some single-lane stretches but is generally good." }
    ]
  },

  "chandigarh-to-dharamshala": {
    from: "Chandigarh",
    to: "Dharamshala",
    distance: "240 km",
    distanceNum: 240,
    time: "5-6 hours",
    highway: "NH-21 via Anandpur Sahib & Kangra",
    ...calcFares(240),
    highlights: ["Via Kangra Valley route", "5-6 hours to Little Lhasa", "Plains to Himalayan foothills"],
    popularStops: ["Anandpur Sahib", "Kangra"],
    bestTime: "Morning 6-7 AM for daylight hill driving",
    description: `Chandigarh to Dharamshala one-way cab covers 240 km from the City Beautiful to the home of the Dalai Lama. Dharamshala and McLeodganj, nestled in the Kangra Valley of Himachal Pradesh, attract spiritual seekers, trekkers, and culture enthusiasts from around the world. The route passes through Anandpur Sahib (the holy Sikh city) and the scenic Kangra Valley.

The 5-6 hour drive transitions from the plains to the beautiful Himalayan foothills. Our drivers are experienced on the hill roads of Himachal Pradesh. Whether you are heading for a meditation retreat, trekking expedition, or a peaceful mountain getaway, our one-way cab provides an affordable, comfortable ride. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Chandigarh to Dharamshala?", answer: "Chandigarh to Dharamshala one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 240 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Chandigarh to Dharamshala take?", answer: "The drive takes 5-6 hours via NH-21 through Anandpur Sahib and Kangra." },
      { question: "Can I be dropped at McLeodganj instead?", answer: "Yes, McLeodganj is just 10 km above Dharamshala. We can drop you at McLeodganj at no extra charge." },
      { question: "Can I stop at Anandpur Sahib?", answer: "Yes, Anandpur Sahib is on the route. You can visit the Takht Sri Kesgarh Sahib gurudwara as an en-route stop." },
      { question: "Is this a hill route?", answer: "The last section from Kangra to Dharamshala involves hill roads, but they are well-maintained. Our drivers are experienced." },
      { question: "Can I get picked up from Chandigarh Airport?", answer: "Yes, pickup from Chandigarh Airport, Railway Station, or any address in Chandigarh is available." }
    ]
  },

  "chandigarh-to-amritsar": {
    from: "Chandigarh",
    to: "Amritsar",
    distance: "230 km",
    distanceNum: 230,
    time: "4-5 hours",
    highway: "NH-44 via Ludhiana & Jalandhar",
    ...calcFares(230),
    highlights: ["Via NH-44 Punjab highway", "4-5 hours through Punjab heartland", "City Beautiful to Golden Temple city"],
    popularStops: ["Ludhiana", "Jalandhar"],
    bestTime: "Morning 7-8 AM for afternoon Golden Temple visit",
    description: `Chandigarh to Amritsar one-way cab covers 230 km through the fertile plains of Punjab. This route is popular with travellers heading to the Golden Temple, Wagah Border, or attending family events in Amritsar. The well-maintained NH-44 makes this a comfortable 4-5 hour drive through the heart of Punjab.

Our one-way cab is ideal if you are arriving in Chandigarh by train or flight and continuing to Amritsar. You pass through Ludhiana and Jalandhar, two of Punjab's largest cities. The highway has excellent food stops serving authentic Punjabi cuisine. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Amritsar?", answer: "Chandigarh to Amritsar one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 230 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Chandigarh to Amritsar take?", answer: "Chandigarh to Amritsar takes 4-5 hours via NH-44 through Ludhiana and Jalandhar." },
      { question: "Can I reach in time for Wagah Border ceremony?", answer: "Yes, leave Chandigarh by 10-11 AM to reach Amritsar by 2-3 PM. The Wagah Border ceremony starts at 4-5 PM." },
      { question: "Can I stop at Ludhiana on the way?", answer: "Yes, Ludhiana is on the route. Up to 2 on-route stops are included at no extra charge." },
      { question: "Is night travel available?", answer: "Yes, NH-44 is well-lit and safe for night travel between Chandigarh and Amritsar." },
      { question: "Do you pick up from Chandigarh Railway Station?", answer: "Yes, pickup from Chandigarh Railway Station, Airport, Bus Stand, or any address is available." }
    ]
  },

  "chandigarh-to-kasol": {
    from: "Chandigarh",
    to: "Kasol",
    distance: "310 km",
    distanceNum: 310,
    time: "8-9 hours",
    highway: "NH-21 via Mandi & Bhuntar, then Parvati Valley road",
    ...calcFares(310),
    highlights: ["Via Mandi & Parvati Valley", "8-9 hours to backpacker paradise", "Plains to Himalayan valley"],
    popularStops: ["Mandi", "Bhuntar"],
    bestTime: "Early morning 5-6 AM for daylight driving through mountains",
    description: `Chandigarh to Kasol one-way cab covers 310 km from the City Beautiful to the magical Parvati Valley. Kasol, often called the Amsterdam of India, is a backpacker's paradise nestled along the Parvati River in Himachal Pradesh. The route passes through Mandi and Bhuntar before entering the narrow, scenic Parvati Valley.

The 8-9 hour drive includes challenging mountain roads, especially in the Parvati Valley section. Our experienced hill drivers navigate the narrow roads safely. Whether you are heading for trekking to Kheerganga, visiting Manikaran Sahib, or simply enjoying the mountain vibes, our one-way cab gets you there comfortably. Book from ₹3,410 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Chandigarh to Kasol?", answer: "Chandigarh to Kasol one-way cab costs ₹3,410 for Sedan (310 km at ₹11/km). Ertiga is ₹4,650 and Innova is ₹5,580." },
      { question: "How long does Chandigarh to Kasol take?", answer: "The drive takes 8-9 hours. The last section through Parvati Valley is slow due to narrow mountain roads." },
      { question: "Is Innova recommended for Kasol route?", answer: "Ertiga or Innova is recommended for the mountain roads. Sedan works but may be less comfortable on rough patches." },
      { question: "Can I stop at Manikaran on the way?", answer: "Yes, Manikaran Sahib is 5 km before Kasol and is a popular en-route stop for the hot springs and gurudwara." },
      { question: "Is the Parvati Valley road safe?", answer: "The road is narrow but well-travelled. Our drivers are experienced on this route. Monsoon travel may have some risks due to landslides." },
      { question: "Can I get picked up from Chandigarh Airport?", answer: "Yes, pickup from Chandigarh Airport, Railway Station, or any address is available." }
    ]
  },

  "nainital-to-delhi": {
    from: "Nainital",
    to: "Delhi",
    distance: "300 km",
    distanceNum: 300,
    time: "6-7 hours",
    highway: "NH-9 via Haldwani & Moradabad",
    ...calcFares(300),
    highlights: ["Via Haldwani & Moradabad", "6-7 hours lake city to Capital", "Hill station to plains comfortable ride"],
    popularStops: ["Haldwani", "Rampur"],
    bestTime: "Morning 6-7 AM for comfortable daytime travel",
    description: `Nainital to Delhi one-way cab covers 300 km from the beautiful Lake District of Uttarakhand back to the national capital. After your holiday at the stunning Naini Lake, boating, visiting Snow View Point, and enjoying the colonial charm of the hill station, our one-way cab provides a comfortable return to Delhi.

The 6-7 hour drive descends from Nainital to Haldwani in the plains, then follows the highway through Moradabad to Delhi. The initial hill section takes about 1.5 hours, followed by a smooth plains drive. Our hill-experienced drivers ensure a safe descent. Book from ₹3,300 for a Sedan.`,
    faqs: [
      { question: "How much is a one-way cab from Nainital to Delhi?", answer: "Nainital to Delhi one-way cab costs ₹3,300 for Sedan (300 km at ₹11/km). Ertiga is ₹4,500 and Innova is ₹5,400. Toll extra." },
      { question: "How long does Nainital to Delhi take?", answer: "Nainital to Delhi takes 6-7 hours via Haldwani and Moradabad." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Nainital with flight monitoring." },
      { question: "Is the hill road from Nainital steep?", answer: "The Nainital to Haldwani descent has curves but is well-maintained. Our drivers are experienced on hill roads." },
      { question: "Can I be picked up from my hotel in Nainital?", answer: "Yes, pickup from any hotel in Nainital including Mall Road area, Tallital, and Mallital." },
      { question: "Is night travel possible from Nainital?", answer: "We recommend daytime travel for the hill descent section. The plains section is safe for night driving." }
    ]
  },

  "mussoorie-to-delhi": {
    from: "Mussoorie",
    to: "Delhi",
    distance: "290 km",
    distanceNum: 290,
    time: "6-7 hours",
    highway: "Via Dehradun, then NH-334 & Meerut Expressway",
    ...calcFares(290),
    highlights: ["Via Dehradun & Meerut Expressway", "6-7 hours Queen of Hills to Capital", "Mountain charm to city life"],
    popularStops: ["Dehradun", "Roorkee"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Mussoorie to Delhi one-way cab covers 290 km from the charming Queen of Hills back to the national capital. After your mountain getaway — walking on Mall Road, visiting Kempty Falls, enjoying the views from Gun Hill — our one-way cab provides a smooth return to Delhi. The route descends from Mussoorie to Dehradun and then takes the highway to Delhi.

The 6-7 hour drive starts with a scenic 35 km descent from Mussoorie to Dehradun (1 hour), then follows NH-334 through the Mohand forest, bypasses Haridwar, and joins the Delhi-Meerut Expressway. Our experienced hill drivers handle the mountain descent safely. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Mussoorie to Delhi?", answer: "Mussoorie to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 290 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Mussoorie to Delhi take?", answer: "Mussoorie to Delhi takes 6-7 hours including the 1-hour descent to Dehradun." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Mussoorie with flight tracking." },
      { question: "Can I be picked up from my hotel in Mussoorie?", answer: "Yes, pickup from any hotel on Mall Road, Library Point, or anywhere in Mussoorie." },
      { question: "Is it the same route as Dehradun to Delhi?", answer: "Yes, after descending to Dehradun (35 km, 1 hour), the route is the same as Dehradun to Delhi." },
      { question: "Is night travel possible from Mussoorie?", answer: "We recommend daytime travel for the Mussoorie-Dehradun hill descent. The Dehradun-Delhi highway is safe for night driving." }
    ]
  },

  "mcleodganj-to-delhi": {
    from: "McLeodganj",
    to: "Delhi",
    distance: "480 km",
    distanceNum: 480,
    time: "9-10 hours",
    highway: "Via Kangra & Chandigarh, then NH-44",
    ...calcFares(480),
    highlights: ["Via Kangra Valley & Chandigarh", "9-10 hours Little Lhasa to Capital", "Himalayan retreat to metropolis"],
    popularStops: ["Kangra", "Anandpur Sahib", "Chandigarh bypass"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `McLeodganj to Delhi one-way cab covers 480 km from the home of the Dalai Lama back to the national capital. After your spiritual retreat, Triund trek, visits to the Tibetan monasteries, and soaking in the Himalayan atmosphere, our one-way cab provides a comfortable return to Delhi. The route descends through the Kangra Valley, passes Chandigarh, and joins NH-44 to Delhi.

The 9-10 hour drive starts with scenic mountain roads through the Kangra Valley before transitioning to the plains highway. Our experienced hill drivers ensure safe navigation through the mountain section. Book from ₹5,280 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from McLeodganj to Delhi?", answer: "McLeodganj to Delhi one-way cab costs ₹5,280 for Sedan (480 km at ₹11/km). Ertiga is ₹7,200 and Innova Crysta is ₹8,640. Toll extra." },
      { question: "How long does McLeodganj to Delhi take?", answer: "McLeodganj to Delhi takes 9-10 hours via Kangra, Chandigarh bypass, and NH-44." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from McLeodganj with flight monitoring." },
      { question: "Is overnight travel possible?", answer: "Yes, departing at 9-10 PM and arriving in Delhi by morning is an option. The plains section is safe for night driving." },
      { question: "Can I stop at Chandigarh?", answer: "Yes, Chandigarh is on the route and makes for a natural break point for meals or a rest stop." },
      { question: "Is pickup from Dharamshala also available?", answer: "Yes, McLeodganj is 10 km above Dharamshala. Pickup from either location is available at the same rate." }
    ]
  },

  "kasol-to-delhi": {
    from: "Kasol",
    to: "Delhi",
    distance: "520 km",
    distanceNum: 520,
    time: "11-12 hours",
    highway: "Parvati Valley road to Bhuntar, then NH-21 via Mandi & Chandigarh to NH-44",
    ...calcFares(520),
    highlights: ["Via Parvati Valley & Chandigarh", "11-12 hours mountain valley to Capital", "Backpacker paradise to metro life"],
    popularStops: ["Bhuntar", "Mandi", "Chandigarh bypass"],
    bestTime: "Early morning 4-5 AM or overnight departure",
    description: `Kasol to Delhi one-way cab covers 520 km from the magical Parvati Valley back to the national capital. After your mountain adventure — trekking to Kheerganga, visiting Manikaran hot springs, or simply relaxing by the Parvati River — our one-way cab provides a comfortable return. The route exits the Parvati Valley, passes through Mandi and Chandigarh, then takes NH-44 to Delhi.

The 11-12 hour drive starts with the narrow Parvati Valley road before joining the wider highways. Overnight travel is popular, departing Kasol at night and arriving in Delhi by morning. Our experienced mountain drivers handle the challenging valley roads safely. Book from ₹5,720 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Kasol to Delhi?", answer: "Kasol to Delhi one-way cab costs ₹5,720 for Sedan (520 km at ₹11/km). Ertiga is ₹7,800 and Innova Crysta is ₹9,360. Toll extra." },
      { question: "How long does Kasol to Delhi take?", answer: "Kasol to Delhi takes 11-12 hours. The Parvati Valley section is slow, then the journey speeds up on the main highway." },
      { question: "Is overnight travel recommended?", answer: "Yes, departing at night is popular. However, the Parvati Valley road is best driven in daylight. Consider a 4-5 AM departure instead." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Kasol with flight tracking service." },
      { question: "Which vehicle is best for this long route?", answer: "Innova Crysta is recommended for the 520 km journey through mountains — better comfort and engine power." },
      { question: "Can I stop at Manikaran on the way?", answer: "Yes, Manikaran is 5 km from Kasol on the exit route. You can stop for the hot springs and gurudwara visit." }
    ]
  },

  "dharamshala-to-delhi": {
    from: "Dharamshala",
    to: "Delhi",
    distance: "475 km",
    distanceNum: 475,
    time: "9-10 hours",
    highway: "Via Kangra & Chandigarh, then NH-44",
    ...calcFares(475),
    highlights: ["Via Kangra Valley & NH-44", "9-10 hours Himachal to Capital", "Mountain town to metropolis"],
    popularStops: ["Kangra", "Anandpur Sahib", "Chandigarh bypass"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Dharamshala to Delhi one-way cab covers 475 km from the scenic Kangra Valley back to the national capital. Dharamshala, home to the Dalai Lama and the Tibetan government-in-exile, is a popular destination for spiritual seekers, cricket fans (HPCA Stadium), and nature lovers. Our one-way cab provides a comfortable return after your mountain stay.

The 9-10 hour drive descends from the Himachal hills through the Kangra Valley, passes near Chandigarh, and takes NH-44 to Delhi. The varied landscape — from pine forests to Punjab plains to the Delhi suburban sprawl — makes this an interesting journey. Book from ₹5,225 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Dharamshala to Delhi?", answer: "Dharamshala to Delhi one-way cab costs ₹5,225 for Sedan (475 km at ₹11/km). Ertiga is ₹7,125 and Innova Crysta is ₹8,550. Toll extra." },
      { question: "How long does Dharamshala to Delhi take?", answer: "Dharamshala to Delhi takes 9-10 hours via Kangra, Chandigarh bypass, and NH-44." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport Terminal 1, 2, or 3 from Dharamshala with flight monitoring." },
      { question: "Can I be picked up from McLeodganj?", answer: "Yes, McLeodganj is 10 km above Dharamshala. Pickup from McLeodganj is available at the same rate." },
      { question: "Is overnight travel safe?", answer: "The hill section is best driven in daylight. We recommend early morning departure. The plains section is safe for night driving." },
      { question: "Can I stop at Chandigarh on the way?", answer: "Yes, Chandigarh is a natural break point for meals or a short rest before continuing to Delhi." }
    ]
  },

  "mathura-to-delhi": {
    from: "Mathura",
    to: "Delhi",
    distance: "180 km",
    distanceNum: 180,
    time: "2.5-3 hours",
    highway: "Yamuna Expressway",
    ...calcFares(180),
    highlights: ["Via Yamuna Expressway", "2.5-3 hours quick ride", "Krishna's birthplace to Capital"],
    popularStops: ["Vrindavan (nearby)"],
    bestTime: "Morning after temple darshan or afternoon departure",
    description: `Mathura to Delhi one-way cab covers 180 km via the Yamuna Expressway. After visiting the birthplace of Lord Krishna, exploring the temples of Mathura and nearby Vrindavan, our one-way cab provides a quick, comfortable return to Delhi. The Yamuna Expressway makes this one of the fastest intercity routes in India.

The 2.5-3 hour drive is smooth on the six-lane expressway. Whether you visited for religious darshan, Holi celebrations, or a family trip, our one-way service saves you 50% versus round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Mathura to Delhi?", answer: "Mathura to Delhi one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 180 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Mathura to Delhi take?", answer: "Mathura to Delhi takes just 2.5-3 hours via the Yamuna Expressway." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Mathura with flight monitoring service." },
      { question: "Can I be picked up from Vrindavan?", answer: "Yes, Vrindavan is 15 km from Mathura. Pickup from Vrindavan temples or hotels is available." },
      { question: "Why is minimum billing 300 km for 180 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip." },
      { question: "Is this the same expressway as Delhi to Agra?", answer: "Yes, the Yamuna Expressway connects Delhi/Noida to Agra, passing through Mathura at the southern end." }
    ]
  },

  "vrindavan-to-delhi": {
    from: "Vrindavan",
    to: "Delhi",
    distance: "185 km",
    distanceNum: 185,
    time: "3-3.5 hours",
    highway: "Via Mathura, then Yamuna Expressway",
    ...calcFares(185),
    highlights: ["Via Yamuna Expressway", "3-3.5 hours temple town to Capital", "Sacred Braj to Delhi"],
    popularStops: ["Mathura"],
    bestTime: "After morning temple darshan, depart by 10-11 AM",
    description: `Vrindavan to Delhi one-way cab covers 185 km from the sacred town of Lord Krishna's childhood to the national capital. After visiting the magnificent temples — Banke Bihari, ISKCON, Prem Mandir — and experiencing the divine atmosphere of Vrindavan, our one-way cab provides a comfortable return to Delhi via the Yamuna Expressway.

The 3-3.5 hour drive joins the Yamuna Expressway near Mathura for a smooth, fast ride to Delhi. Our one-way service is perfect for pilgrims and tourists who visited for darshan and do not need a return ride from Delhi. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Vrindavan to Delhi?", answer: "Vrindavan to Delhi one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 185 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Vrindavan to Delhi take?", answer: "Vrindavan to Delhi takes 3-3.5 hours via Mathura and the Yamuna Expressway." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Vrindavan with flight monitoring." },
      { question: "Can I stop at Mathura on the way?", answer: "Yes, Mathura is on the route, 15 km from Vrindavan. You can stop at Krishna Janmabhoomi or other temples." },
      { question: "Why is minimum billing 300 km for 185 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip." },
      { question: "Is pickup from ISKCON Temple possible?", answer: "Yes, pickup from ISKCON Temple, Banke Bihari area, Prem Mandir, or any hotel in Vrindavan is available." }
    ]
  },

  "ayodhya-to-lucknow": {
    from: "Ayodhya",
    to: "Lucknow",
    distance: "135 km",
    distanceNum: 135,
    time: "2.5-3 hours",
    highway: "NH-330 via Barabanki",
    ...calcFares(135),
    highlights: ["Via NH-330 highway", "2.5-3 hours quick ride", "Ram Janmabhoomi city to Nawabi capital"],
    popularStops: ["Barabanki"],
    bestTime: "After morning temple darshan, depart by 10-11 AM",
    description: `Ayodhya to Lucknow one-way cab covers 135 km from the sacred birthplace of Lord Ram to the City of Nawabs. After visiting the Ram Janmabhoomi Temple, Hanuman Garhi, and the ghats of the Saryu River, our one-way cab provides a quick, comfortable ride to Lucknow for your flight, train, or onward journey.

The 2.5-3 hour drive passes through Barabanki on the well-maintained highway. With the new Ram Temple drawing millions of devotees, this route has become increasingly popular. Our one-way service saves you 50% versus round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Ayodhya to Lucknow?", answer: "Ayodhya to Lucknow one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 135 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Ayodhya to Lucknow take?", answer: "Ayodhya to Lucknow takes 2.5-3 hours via NH-330 through Barabanki." },
      { question: "Can you drop me at Lucknow Airport?", answer: "Yes, direct drops at Chaudhary Charan Singh International Airport, Lucknow from Ayodhya." },
      { question: "Why is minimum billing 300 km for 135 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus round-trip booking." },
      { question: "Is this route popular after Ram Temple darshan?", answer: "Yes, Ayodhya to Lucknow is one of the most popular return routes after visiting the Ram Janmabhoomi Temple." },
      { question: "Can I be picked up from my hotel in Ayodhya?", answer: "Yes, pickup from any hotel, dharamshala, or the temple area in Ayodhya is available." }
    ]
  },

  "prayagraj-to-lucknow": {
    from: "Prayagraj",
    to: "Lucknow",
    distance: "200 km",
    distanceNum: 200,
    time: "3.5-4 hours",
    highway: "Purvanchal Expressway / NH-232",
    ...calcFares(200),
    highlights: ["Via Purvanchal Expressway", "3.5-4 hours Sangam city to Nawabi capital", "Confluence to culture"],
    popularStops: ["Pratapgarh"],
    bestTime: "Morning 7-8 AM after Sangam visit",
    description: `Prayagraj to Lucknow one-way cab covers 200 km from the holy Sangam city (confluence of Ganga, Yamuna, and Saraswati rivers) to the City of Nawabs. After attending the Kumbh Mela, visiting the Triveni Sangam, or paying respects at the Allahabad Fort, our one-way cab provides a comfortable ride to Lucknow for your onward journey.

The 3.5-4 hour drive is smooth via the Purvanchal Expressway or NH-232. Prayagraj (formerly Allahabad) has seen a surge in tourism with the grand Kumbh Mela and improved infrastructure. Our one-way service is perfect for devotees returning to Lucknow for flights or trains. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Prayagraj to Lucknow?", answer: "Prayagraj to Lucknow one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 200 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Prayagraj to Lucknow take?", answer: "Prayagraj to Lucknow takes 3.5-4 hours via the Purvanchal Expressway or NH-232." },
      { question: "Can you drop me at Lucknow Airport?", answer: "Yes, direct drops at Chaudhary Charan Singh International Airport from Prayagraj are available." },
      { question: "Is this route busy during Kumbh Mela?", answer: "Yes, during Kumbh Mela period, advance booking is essential. We operate throughout the Mela with experienced drivers." },
      { question: "Why is minimum billing 300 km for 200 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus round-trip." },
      { question: "Can I be picked up from Sangam area?", answer: "Yes, pickup from Sangam, any ghat, hotel, Railway Station, or any address in Prayagraj is available." }
    ]
  },

  "corbett-to-delhi": {
    from: "Jim Corbett",
    to: "Delhi",
    distance: "260 km",
    distanceNum: 260,
    time: "5-6 hours",
    highway: "NH-9 via Moradabad",
    ...calcFares(260),
    highlights: ["Via Moradabad highway", "5-6 hours jungle to metro", "Wildlife adventure to city life"],
    popularStops: ["Kashipur", "Moradabad"],
    bestTime: "After morning jungle safari, depart by 10-11 AM",
    description: `Jim Corbett to Delhi one-way cab covers 260 km from India's oldest national park to the national capital. After your thrilling tiger safari, nature walks, and jungle resort stay at Corbett National Park, our one-way cab provides a comfortable return to Delhi. The route passes through Kashipur and Moradabad on the NH-9 highway.

The 5-6 hour drive transitions from the forested Kumaon foothills to the Gangetic plains. Whether you spotted a tiger, enjoyed elephant safaris, or simply relaxed in the wilderness, our clean AC cab and professional driver ensure a relaxed journey home. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Jim Corbett to Delhi?", answer: "Jim Corbett to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 260 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Jim Corbett to Delhi take?", answer: "Jim Corbett to Delhi takes 5-6 hours via NH-9 through Moradabad." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Jim Corbett National Park with flight tracking." },
      { question: "Can I be picked up from my jungle resort?", answer: "Yes, pickup from any resort or gate (Bijrani, Jhirna, Dhikala approach) in the Corbett area." },
      { question: "Is the road from Corbett good?", answer: "Yes, the highway from Ramnagar (Corbett gateway) to Delhi is well-maintained. The park approach roads may be narrow." },
      { question: "Can I stop at Moradabad for brass shopping?", answer: "Yes, Moradabad (Brass City) is on the route. You can stop for shopping as an en-route break." }
    ]
  },

  "lansdowne-to-delhi": {
    from: "Lansdowne",
    to: "Delhi",
    distance: "270 km",
    distanceNum: 270,
    time: "6-7 hours",
    highway: "Via Kotdwar, then NH-119 & NH-9",
    ...calcFares(270),
    highlights: ["Via Kotdwar & highway", "6-7 hours cantonment hill to Capital", "Peaceful hills to bustling metro"],
    popularStops: ["Kotdwar", "Najibabad"],
    bestTime: "Morning 7-8 AM for comfortable daytime travel",
    description: `Lansdowne to Delhi one-way cab covers 270 km from the quiet cantonment hill station back to the national capital. Lansdowne, one of the few unspoiled hill stations in Uttarakhand, is known for its serene atmosphere, war memorial, and the Garhwal Rifles regimental centre. After your peaceful getaway, our one-way cab provides a comfortable descent to Delhi.

The 6-7 hour drive starts with a scenic hill descent to Kotdwar, then follows the highway through Najibabad and joins the main Delhi road. The initial hill section requires experienced driving, and our drivers are well-versed on this route. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Lansdowne to Delhi?", answer: "Lansdowne to Delhi one-way cab starts at ₹3,300 for Sedan (300 km minimum billing for 270 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Lansdowne to Delhi take?", answer: "Lansdowne to Delhi takes 6-7 hours via Kotdwar and the NH-9 highway." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct airport drops at IGI Terminal 1, 2, or 3 from Lansdowne with flight tracking." },
      { question: "Is the hill road from Lansdowne difficult?", answer: "The Lansdowne to Kotdwar descent has moderate curves. Our drivers are experienced and ensure a safe journey." },
      { question: "Can I be picked up from my hotel in Lansdowne?", answer: "Yes, pickup from any hotel, Tip-N-Top, or the cantonment area in Lansdowne." },
      { question: "Is this a popular weekend getaway return route?", answer: "Yes, Lansdowne to Delhi is very popular as a weekend return. Book in advance for Sunday departures." }
    ]
  },

  "dalhousie-to-delhi": {
    from: "Dalhousie",
    to: "Delhi",
    distance: "560 km",
    distanceNum: 560,
    time: "10-11 hours",
    highway: "Via Pathankot & NH-44",
    ...calcFares(560),
    highlights: ["Via Pathankot & Punjab", "10-11 hours hill station to Capital", "Colonial charm to metro bustle"],
    popularStops: ["Pathankot", "Jalandhar", "Ludhiana"],
    bestTime: "Early morning 5-6 AM or overnight departure",
    description: `Dalhousie to Delhi one-way cab covers 560 km from the charming colonial hill station in Himachal Pradesh back to the national capital. After your mountain holiday — walking on Mall Road, visiting Khajjiar (Mini Switzerland of India), and enjoying the Himalayan views — our one-way cab provides a comfortable return. The route descends to Pathankot and joins NH-44 through Punjab to Delhi.

The 10-11 hour drive is best started early morning or as an overnight trip. The Dalhousie to Pathankot hill section takes about 2-3 hours, followed by the well-maintained Punjab plains highway. Our experienced drivers navigate both terrain types safely. Book from ₹6,160 for a Sedan.`,
    faqs: [
      { question: "What is the one-way cab fare from Dalhousie to Delhi?", answer: "Dalhousie to Delhi one-way cab costs ₹6,160 for Sedan (560 km at ₹11/km). Ertiga is ₹8,400 and Innova Crysta is ₹10,080. Toll extra." },
      { question: "How long does Dalhousie to Delhi take?", answer: "Dalhousie to Delhi takes 10-11 hours via Pathankot and NH-44 through Punjab." },
      { question: "Can you drop me at Delhi Airport?", answer: "Yes, direct drops at IGI Airport from Dalhousie with flight monitoring." },
      { question: "Can I stop at Khajjiar on the way?", answer: "Khajjiar is near Dalhousie. If you haven't visited, a short detour is possible at the start of the journey." },
      { question: "Is overnight travel recommended?", answer: "The hill section is best driven in daylight. Early morning departure (5-6 AM) is recommended to reach Delhi by evening." },
      { question: "Which vehicle is best for this route?", answer: "Innova Crysta is recommended for the long 560 km journey with hill and plains sections." }
    ]
  },

  "mount-abu-to-udaipur": {
    from: "Mount Abu",
    to: "Udaipur",
    distance: "165 km",
    distanceNum: 165,
    time: "3-3.5 hours",
    highway: "NH-48 via Abu Road",
    ...calcFares(165),
    highlights: ["Via Abu Road & NH-48", "3-3.5 hours Rajasthan's only hill station to Lake City", "Hills to lakes journey"],
    popularStops: ["Abu Road"],
    bestTime: "Morning 8-9 AM for scenic daylight drive",
    description: `Mount Abu to Udaipur one-way cab covers 165 km from Rajasthan's only hill station to the romantic City of Lakes. After visiting the stunning Dilwara Temples, Nakki Lake, and Sunset Point in Mount Abu, our one-way cab takes you to Udaipur — one of India's most beautiful cities. The route descends from Mount Abu to Abu Road and joins NH-48 to Udaipur.

The 3-3.5 hour drive starts with a scenic hill descent and then passes through the Aravalli countryside to Udaipur. This is a popular route for Rajasthan circuit travellers combining Mount Abu with Udaipur. Our one-way service saves you 50% versus round-trip fares. Book from ₹3,300 for a Sedan (300 km minimum billing).`,
    faqs: [
      { question: "How much is a one-way cab from Mount Abu to Udaipur?", answer: "Mount Abu to Udaipur one-way cab costs ₹3,300 for Sedan (300 km minimum billing for 165 km). Ertiga is ₹4,500 and Innova is ₹5,400." },
      { question: "How long does Mount Abu to Udaipur take?", answer: "Mount Abu to Udaipur takes 3-3.5 hours via Abu Road and NH-48." },
      { question: "Is the hill descent from Mount Abu steep?", answer: "The Mount Abu descent to Abu Road has curves but is well-maintained. Our drivers are experienced on this hill road." },
      { question: "Can I stop at Ranakpur on the way?", answer: "Ranakpur Jain Temple is slightly off the direct route but can be visited with a small detour. Ask your driver for options." },
      { question: "Why is minimum billing 300 km for 165 km?", answer: "One-way cabs have 300 km minimum billing as the driver returns empty. This still saves 50% versus a round-trip." },
      { question: "Is this part of the Rajasthan circuit?", answer: "Yes, Mount Abu to Udaipur is a popular leg of the Rajasthan tourism circuit (Jaipur-Udaipur-Mount Abu or Mount Abu-Udaipur-Jaipur)." }
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
