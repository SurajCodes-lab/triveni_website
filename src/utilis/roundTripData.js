// src/utilis/roundTripData.js - Complete data for 25 round-trip route pages
// Pricing: Round trip = one-way fare * 2 with 10% discount
// Per km: Sedan ₹11/km, SUV ₹14/km, Tempo ₹20/km (min 300km billing per direction)

function calcRoundTripFares(distanceKm) {
  const billableOneWay = Math.max(distanceKm, 300);
  const totalKm = billableOneWay * 2;
  // 10% discount on round trip
  const sedan = Math.round(totalKm * 11 * 0.9);
  const suv = Math.round(totalKm * 14 * 0.9);
  const tempo = Math.round(totalKm * 20 * 0.9);
  return {
    cabFares: {
      sedan: `₹${sedan.toLocaleString('en-IN')}`,
      suv: `₹${suv.toLocaleString('en-IN')}`,
      tempo: `₹${tempo.toLocaleString('en-IN')}`,
    },
    sedanRaw: sedan,
    suvRaw: suv,
    tempoRaw: tempo,
    totalBillableKm: totalKm,
  };
}

function generateRoundTripFaqs(origin, dest, distKm, duration, highway, sedanFare, nightHalt) {
  return [
    {
      question: `What is the cost of a round trip cab from ${origin} to ${dest}?`,
      answer: `A round trip cab from ${origin} to ${dest} and back starts at ${sedanFare} for an AC Sedan (Swift Dzire/Etios). SUV (Innova/Ertiga) and Tempo Traveller options are also available. This fare includes 10% round trip discount, driver charges, fuel, and AC. Toll and state tax are extra at actual.`,
    },
    {
      question: `How far is ${dest} from ${origin} by road?`,
      answer: `${dest} is approximately ${distKm} km from ${origin} by road via ${highway}. The one-way driving time is about ${duration}. For a round trip, the total distance covered is approximately ${distKm * 2} km.`,
    },
    {
      question: `Does the driver stay with me during the ${origin} to ${dest} round trip?`,
      answer: `Yes, with Triveni Cabs round trip service, the same driver and car stay with you for the entire trip. The driver waits at ${dest} while you explore, sightsee, or attend meetings. ${nightHalt ? 'Driver night halt charges (₹300/night) apply for overnight stays.' : 'No extra waiting charges during the day.'}`,
    },
    {
      question: `Is a night halt required for ${origin} to ${dest} round trip?`,
      answer: nightHalt
        ? `Yes, given the ${distKm} km distance and ${duration} one-way drive time, a night halt at ${dest} is recommended. Driver night halt allowance is ₹300/night. This ensures a safe and comfortable journey for both you and the driver.`
        : `A night halt is not mandatory for the ${origin} to ${dest} round trip as the distance is ${distKm} km one way. However, if you plan to spend the night at ${dest}, driver night halt allowance of ₹300/night applies.`,
    },
    {
      question: `What is included in the ${origin} to ${dest} round trip fare?`,
      answer: `The round trip fare includes: AC vehicle with GPS tracking, experienced verified driver, fuel charges, door-to-door pickup and drop, 10% round trip discount, and 24/7 customer support. Excluded: toll charges, state tax, parking fees, and driver night halt (₹300/night if applicable).`,
    },
    {
      question: `Can I customize the ${origin} to ${dest} round trip itinerary?`,
      answer: `Absolutely! Our round trip service is fully flexible. You can add stops, visit attractions en route, change the schedule, or extend the trip. Just discuss your plans with our team at 7668570551 and we will tailor the trip to your needs at no extra planning charge.`,
    },
  ];
}

function createRoute({
  slug, origin, destination, distanceKm, duration, highway,
  nightHalt, suggestedItinerary, inclusions, exclusions,
  relatedRoutes, bestTime, localTip,
}) {
  const fares = calcRoundTripFares(distanceKm);
  return {
    slug,
    origin,
    destination,
    distanceKm,
    totalRoundTripKm: distanceKm * 2,
    duration,
    highway,
    ...fares,
    driverAllowance: '₹300/night',
    nightHalt: !!nightHalt,
    suggestedItinerary: suggestedItinerary || [],
    inclusions: inclusions || [
      'AC vehicle with GPS tracking',
      'Experienced & verified driver',
      'Fuel charges included',
      'Door-to-door pickup & drop',
      '10% round trip discount applied',
      '24/7 customer support',
      'Flexible scheduling',
      'Multiple stops allowed',
    ],
    exclusions: exclusions || [
      'Toll charges (paid at actual)',
      'State tax / entry fees',
      'Parking charges',
      'Driver night halt (₹300/night)',
      'Monument / attraction entry tickets',
      'Personal expenses & meals',
    ],
    bestTime: bestTime || 'October to March for pleasant weather.',
    localTip: localTip || `Start early morning from ${origin} to maximize your time at ${destination}.`,
    relatedRoutes: relatedRoutes || [],
    faqs: generateRoundTripFaqs(origin, destination, distanceKm, duration, highway, fares.cabFares.sedan, nightHalt),
  };
}

export const roundTripRoutes = {
'delhi-to-lansdowne': createRoute({
    slug: 'delhi-to-lansdowne',
    origin: 'Delhi',
    destination: 'Lansdowne',
    distanceKm: 250,
    duration: '6-7 hours',
    highway: 'NH-534 via Kotdwar',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather and clear valley views, September to November for post-monsoon greenery.',
    localTip: 'Lansdowne is a peaceful cantonment hill town with no nightlife, so pack a good book. Carry cash as ATMs are limited and mobile network is patchy in the interiors.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Lansdowne', description: 'Early morning departure from Delhi via NH-534 through Meerut and Kotdwar. Enjoy the scenic ghat climb from Kotdwar into the Garhwal hills. Arrive Lansdowne by afternoon. Check in, then a relaxed walk to Tip-in-Top (Tiffin Top) for sunset views over the Shivalik ranges. Night stay.' },
      { day: 2, title: 'Lansdowne Sightseeing & Return', description: 'Visit Bhulla Tal lake for boating, St. Mary Church, the Garhwali Mess war museum, and the Durga Devi Temple. Quiet nature walks through oak and pine forests. After lunch, begin the return drive to Delhi via Kotdwar, arriving late evening.' },
    ],
    relatedRoutes: ['delhi-to-nainital', 'delhi-to-mussoorie', 'delhi-to-corbett', 'delhi-to-haridwar', 'dehradun-to-nainital'],
  }),

  'delhi-to-mcleodganj': createRoute({
    slug: 'delhi-to-mcleodganj',
    origin: 'Delhi',
    destination: 'McLeodganj',
    distanceKm: 475,
    duration: '10-11 hours',
    highway: 'NH-44 via Chandigarh & Pathankot',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather, September to November for clear Dhauladhar views. Snowfall possible December to February.',
    localTip: 'McLeodganj is Little Lhasa, the home of the Dalai Lama. Visit the Tsuglagkhang Complex in the morning and try Tibetan momos and thukpa at the local cafes. Roads beyond Dharamshala are steep and narrow.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to McLeodganj', description: 'Very early departure (4-5 AM recommended) from Delhi via NH-44 through Chandigarh and Pathankot. Breakfast stop at Murthal. Long scenic drive with the Dhauladhar range appearing near Kangra. Arrive McLeodganj by evening. Explore the lively main square and Bhagsu Road cafes. Night stay.' },
      { day: 2, title: 'McLeodganj & Dharamshala Sightseeing', description: 'Visit the Dalai Lama Temple (Tsuglagkhang Complex) and Namgyal Monastery. Trek or drive to Bhagsu Waterfall and Bhagsunag Temple. Continue to St. John in the Wilderness church and Naddi viewpoint for sunset. Optional visit to the HPCA cricket stadium in Dharamshala. Night stay.' },
      { day: 3, title: 'Dharamkot & Return Journey', description: 'Morning walk to Dharamkot or the Triund trail base for Himalayan views. Last-minute Tibetan handicraft shopping. After an early lunch, begin the long return drive to Delhi via Pathankot and Chandigarh, arriving late night.' },
    ],
    relatedRoutes: ['delhi-to-dharamshala', 'delhi-to-bir-billing', 'delhi-to-amritsar', 'chandigarh-to-mcleodganj', 'dharamshala-to-manali'],
  }),

  'delhi-to-neemrana': createRoute({
    slug: 'delhi-to-neemrana',
    origin: 'Delhi',
    destination: 'Neemrana',
    distanceKm: 120,
    duration: '2.5-3 hours',
    highway: 'NH-48 (Delhi-Jaipur Highway)',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. The zip-lining and fort experience are best enjoyed in the cooler months.',
    localTip: 'Book lunch or the day-visit package at Neemrana Fort-Palace in advance as entry is limited for non-guests. Try the Flying Fox zip-lining tour over the Aravalli hills for a memorable experience.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Neemrana Fort & Back', description: 'Morning departure from Delhi via NH-48. Arrive Neemrana in under 3 hours. Explore the magnificent 15th-century Neemrana Fort-Palace with its layered terraces, hanging gardens, and stepwell (Baori). Enjoy a heritage lunch and the Flying Fox zip-line adventure. Relax at the palace before an evening return to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-agra', 'delhi-to-alwar', 'delhi-to-pushkar'],
  }),

  'delhi-to-alwar': createRoute({
    slug: 'delhi-to-alwar',
    origin: 'Delhi',
    destination: 'Alwar',
    distanceKm: 160,
    duration: '3-4 hours',
    highway: 'NH-48 via Sariska',
    nightHalt: true,
    bestTime: 'October to March for pleasant weather and the best chances of tiger sightings at Sariska. The reserve is partially closed during monsoon.',
    localTip: 'For a tiger safari at Sariska, book your gypsy permit online in advance and opt for the early morning slot. The haunted Bhangarh Fort must be exited before sunset as per official rules.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Alwar & Sariska', description: 'Morning departure from Delhi via NH-48. Arrive Alwar by midday. Visit Bala Quila (Alwar Fort), the City Palace, and Moosi Maharani Ki Chhatri. Afternoon or next-morning safari at Sariska Tiger Reserve. Night stay near Sariska or Alwar.' },
      { day: 2, title: 'Bhangarh Fort & Return', description: 'Early morning tiger safari at Sariska (if not done day one). Drive to the famously haunted Bhangarh Fort and the nearby Siliserh Lake Palace. Lunch by the lake, then begin the return drive to Delhi, arriving by evening.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-neemrana', 'delhi-to-ranthambore', 'delhi-to-agra'],
  }),

  'chandigarh-to-amritsar': createRoute({
    slug: 'chandigarh-to-amritsar',
    origin: 'Chandigarh',
    destination: 'Amritsar',
    distanceKm: 230,
    duration: '4-5 hours',
    highway: 'NH-54 (Amritsar-Jalandhar Highway)',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. Visit the Golden Temple during Baisakhi or Gurpurab for a spectacular atmosphere.',
    localTip: 'Reach the Wagah Border by 3-4 PM to get a good seat for the evening Beating Retreat ceremony. The Golden Temple langar and the Amritsari kulcha at Kesar Da Dhaba are must-try experiences.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Amritsar', description: 'Morning departure from Chandigarh via NH-54 through Jalandhar. Arrive Amritsar by midday. Pay obeisance at the Golden Temple (Sri Harmandir Sahib) and partake in the community langar. Visit Jallianwala Bagh and the Partition Museum. Evening drive to the Wagah Border for the Beating Retreat ceremony. Night stay in Amritsar.' },
      { day: 2, title: 'Amritsar Sightseeing & Return', description: 'Early morning darshan at the Golden Temple for the peaceful ambience. Visit the Durgiana Temple and Gobindgarh Fort. Enjoy an authentic Amritsari breakfast of kulcha and lassi. After lunch, begin the return drive to Chandigarh, arriving by evening.' },
    ],
    relatedRoutes: ['delhi-to-amritsar', 'chandigarh-to-shimla', 'delhi-to-chandigarh', 'chandigarh-to-dalhousie', 'amritsar-to-dharamshala'],
  }),

  'jaipur-to-ranthambore': createRoute({
    slug: 'jaipur-to-ranthambore',
    origin: 'Jaipur',
    destination: 'Ranthambore',
    distanceKm: 160,
    duration: '3-4 hours',
    highway: 'NH-21 via Sawai Madhopur',
    nightHalt: true,
    bestTime: 'October to March is ideal, though summer (April-June) offers higher tiger sighting chances near waterholes. The park is closed during monsoon (July-September).',
    localTip: 'Book your safari gypsy or canter permit online well in advance, especially for the core zones 1-5. Early morning safaris offer the best tiger sighting chances and cooler weather.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Ranthambore', description: 'Morning departure from Jaipur via NH-21 to Sawai Madhopur. Arrive Ranthambore by midday, check in, and rest. Afternoon jungle safari into the tiger reserve to spot Bengal tigers, leopards, sloth bears, and rich birdlife. Evening at leisure. Night stay near the park.' },
      { day: 2, title: 'Morning Safari & Return', description: 'Early morning safari for the best wildlife sightings. Visit the historic Ranthambore Fort (a UNESCO World Heritage Site) and the Trinetra Ganesh Temple within it. After lunch, begin the return drive to Jaipur, arriving by evening.' },
    ],
    relatedRoutes: ['delhi-to-ranthambore', 'jaipur-to-udaipur', 'jaipur-to-pushkar', 'jaipur-to-jodhpur'],
  }),

  'jaipur-to-ajmer': createRoute({
    slug: 'jaipur-to-ajmer',
    origin: 'Jaipur',
    destination: 'Ajmer',
    distanceKm: 135,
    duration: '2.5-3 hours',
    highway: 'NH-48 (Jaipur-Ajmer Highway)',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. The Ajmer Sharif Urs festival and the Pushkar Camel Fair (November) draw huge crowds.',
    localTip: 'Cover your head and remove footwear before entering the Ajmer Sharif Dargah; buy a chadar and flowers from the bazaar outside. Combine the trip with nearby Pushkar to visit the rare Brahma Temple and the holy lake.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Ajmer & Pushkar', description: 'Morning departure from Jaipur via NH-48. Arrive Ajmer in under 3 hours. Offer prayers at the revered Ajmer Sharif Dargah of Khwaja Moinuddin Chishti. Visit Adhai Din Ka Jhonpra and Ana Sagar Lake. Drive 15 km to Pushkar to see the sacred Pushkar Lake and the unique Brahma Temple. Evening return to Jaipur.' },
    ],
    relatedRoutes: ['delhi-to-ajmer', 'jaipur-to-pushkar', 'delhi-to-pushkar', 'jaipur-to-udaipur'],
  }),

  'delhi-to-khatu-shyam': createRoute({
    slug: 'delhi-to-khatu-shyam',
    origin: 'Delhi',
    destination: 'Khatu Shyam',
    distanceKm: 270,
    duration: '5-6 hours',
    highway: 'NH-48 via Ringas',
    nightHalt: false,
    bestTime: 'October to March for comfortable travel. The Phalgun Mela (February-March) is the biggest festival but draws massive crowds and long darshan queues.',
    localTip: 'Weekends and Ekadashi days see very heavy rush at the Khatu Shyam Ji Temple. Arrive early morning for a quicker darshan, and carry prasad offerings and a nishan flag from the local market for the traditional ritual.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Khatu Shyam Pilgrimage & Back', description: 'Early morning departure from Delhi via NH-48 through Kotputli and Ringas. Arrive Khatu village in the Sikar district by late morning. Darshan at the famous Khatu Shyam Ji Temple, dedicated to Barbarika (Shyam Baba). Visit the Shyam Kund sacred pond and the local bazaars for prasad. After a devotional afternoon, begin the return drive to Delhi, arriving late evening.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-ajmer', 'delhi-to-pushkar', 'delhi-to-neemrana'],
  }),

  'delhi-to-bharatpur': createRoute({
    slug: 'delhi-to-bharatpur',
    origin: 'Delhi',
    destination: 'Bharatpur',
    distanceKm: 220,
    duration: '4-5 hours',
    highway: 'Yamuna Expressway via Mathura',
    nightHalt: false,
    bestTime: 'October to March is the prime birdwatching season at Keoladeo, when thousands of migratory birds arrive. Avoid the summer heat of April to June.',
    localTip: 'Hire a cycle-rickshaw with a trained naturalist guide inside Keoladeo National Park for the best bird sightings, or rent a bicycle to explore at your own pace. Carry binoculars and reach at dawn when bird activity peaks.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Bharatpur & Keoladeo', description: 'Early morning departure from Delhi via the Yamuna Expressway through Mathura. Arrive Bharatpur by late morning. Explore the Keoladeo National Park (Bharatpur Bird Sanctuary), a UNESCO World Heritage Site, on cycle-rickshaw or bicycle to spot painted storks, kingfishers, and migratory species. Visit the Lohagarh Fort and Bharatpur Palace Museum. Optional evening detour toward nearby Agra. Return to Delhi by night.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'delhi-to-mathura', 'agra-to-jaipur', 'delhi-to-jaipur'],
  }),
  // ═══════════════════════════════════════════
  // DELHI ORIGIN ROUTES (15 routes)
  // ═══════════════════════════════════════════
  'delhi-to-agra': createRoute({
    slug: 'delhi-to-agra',
    origin: 'Delhi',
    destination: 'Agra',
    distanceKm: 230,
    duration: '3-4 hours',
    highway: 'Yamuna Expressway',
    nightHalt: false,
    bestTime: 'October to March. Avoid May-June extreme heat. Taj Mahal looks magical at sunrise.',
    localTip: 'Visit Taj Mahal at sunrise for fewer crowds and magical photos. Book a guide at the gate for ₹500.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Agra & Sightseeing', description: 'Early morning departure from Delhi via Yamuna Expressway (3 hrs). Visit Taj Mahal at sunrise, explore Agra Fort, enjoy lunch at Pinch of Spice. Afternoon visit to Mehtab Bagh for Taj sunset views. Return to Delhi by evening.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-mathura', 'agra-to-jaipur', 'delhi-to-shimla', 'delhi-to-gwalior'],
  }),

  'delhi-to-jaipur': createRoute({
    slug: 'delhi-to-jaipur',
    origin: 'Delhi',
    destination: 'Jaipur',
    distanceKm: 280,
    duration: '4-5 hours',
    highway: 'NH-48 (Delhi-Jaipur Expressway)',
    nightHalt: true,
    bestTime: 'October to March for pleasant weather. Jaipur Literature Festival in January is a highlight.',
    localTip: 'Stop at Neemrana Fort (120 km from Delhi) for a quick heritage visit. Reach Jaipur by lunch for full day of sightseeing.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Jaipur & City Exploration', description: 'Morning departure via Delhi-Jaipur Expressway. Arrive by noon. Visit Amber Fort with elephant ride, Jal Mahal photo stop. Evening at Nahargarh Fort for sunset views over the Pink City. Night stay in Jaipur.' },
      { day: 2, title: 'Jaipur Sightseeing & Return', description: 'Morning visit to Hawa Mahal, City Palace, and Jantar Mantar. Shopping at Johari Bazaar for jewelry and textiles. Lunch at traditional Rajasthani thali restaurant. Depart for Delhi post-lunch, arriving by evening.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'delhi-to-udaipur', 'delhi-to-jodhpur', 'jaipur-to-udaipur', 'agra-to-jaipur'],
  }),

  'delhi-to-shimla': createRoute({
    slug: 'delhi-to-shimla',
    origin: 'Delhi',
    destination: 'Shimla',
    distanceKm: 350,
    duration: '7-8 hours',
    highway: 'NH-44 & NH-5',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather, December to February for snowfall. Avoid monsoon (July-August).',
    localTip: 'The Kalka-Shimla mountain stretch is scenic. Stop at Barog for tea and views. Mall Road evening walk is a must.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Shimla', description: 'Early morning departure via NH-44. Stop at Murthal for breakfast paranthas. Cross Chandigarh and enter mountain roads at Kalka. Scenic drive through pine forests. Arrive Shimla by evening. Stroll on Mall Road.' },
      { day: 2, title: 'Shimla Sightseeing & Return', description: 'Morning visit Jakhoo Temple (highest point), Christ Church, The Ridge. Visit Kufri for adventure activities and snow point. After lunch, begin return journey to Delhi via the scenic mountain route.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-chandigarh', 'delhi-to-mussoorie', 'chandigarh-to-shimla', 'shimla-to-manali'],
  }),

  'delhi-to-manali': createRoute({
    slug: 'delhi-to-manali',
    origin: 'Delhi',
    destination: 'Manali',
    distanceKm: 530,
    duration: '12-13 hours',
    highway: 'NH-44 & NH-21',
    nightHalt: true,
    bestTime: 'March to June for green valleys, September to November for autumn colors. December-February for snow.',
    localTip: 'Break the journey at Chandigarh or Mandi. Carry warm clothes even in summer as Manali evenings are cool.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Manali', description: 'Early morning departure (4-5 AM recommended). Breakfast stop at Murthal. Drive via Chandigarh, Bilaspur, Mandi, and Kullu. Arrive Manali by evening. Rest and explore Old Manali for dinner.' },
      { day: 2, title: 'Manali Sightseeing', description: 'Visit Solang Valley for adventure activities (paragliding, zorbing). Explore Hadimba Temple, Manu Temple, and Vashisht Hot Springs. Evening walk along the Beas River. Night stay in Manali.' },
      { day: 3, title: 'Rohtang Pass & Return Journey', description: 'Early morning trip to Rohtang Pass or Atal Tunnel (permit needed for Rohtang). Snow activities and panoramic Himalayan views. Return to Manali for lunch, then begin the journey back to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-shimla', 'delhi-to-kasol', 'delhi-to-dharamshala', 'chandigarh-to-manali', 'jaipur-to-manali'],
  }),

  'delhi-to-haridwar': createRoute({
    slug: 'delhi-to-haridwar',
    origin: 'Delhi',
    destination: 'Haridwar',
    distanceKm: 230,
    duration: '4-5 hours',
    highway: 'NH-334 (Delhi-Haridwar Highway)',
    nightHalt: false,
    bestTime: 'Year-round. Ganga Aarti is most spectacular during Kumbh Mela and major festivals.',
    localTip: 'Time your arrival for the evening Ganga Aarti at Har Ki Pauri (starts at sunset). It is a life-changing experience.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Haridwar & Sacred Experience', description: 'Morning departure from Delhi via NH-334. Arrive Haridwar by noon. Visit Mansa Devi Temple (cable car), Chandi Devi Temple. Explore the ghats and local markets. Witness the mesmerizing Ganga Aarti at Har Ki Pauri at sunset. Return to Delhi by late night.' },
    ],
    relatedRoutes: ['delhi-to-rishikesh', 'delhi-to-mussoorie', 'delhi-to-nainital', 'delhi-to-shimla', 'haridwar-to-rishikesh', 'delhi-to-meerut'],
  }),

  'delhi-to-rishikesh': createRoute({
    slug: 'delhi-to-rishikesh',
    origin: 'Delhi',
    destination: 'Rishikesh',
    distanceKm: 250,
    duration: '5-6 hours',
    highway: 'NH-334 via Haridwar',
    nightHalt: true,
    bestTime: 'September to November and February to May. Rafting season is September to June.',
    localTip: 'Visit Laxman Jhula and Ram Jhula bridges. Try river rafting (16 km stretch is most popular). Beatles Ashram is a unique visit.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Rishikesh', description: 'Morning departure via NH-334. Optional stop at Haridwar for Ganga darshan. Arrive Rishikesh by noon. Visit Laxman Jhula, Ram Jhula, Triveni Ghat. Evening yoga session at Parmarth Niketan Ashram. Night stay.' },
      { day: 2, title: 'Adventure & Return', description: 'Early morning river rafting (16 km Shivpuri to Rishikesh). Visit Beatles Ashram and Neelkanth Mahadev Temple. Lunch at a cafe overlooking the Ganges. Afternoon departure for Delhi.' },
    ],
    relatedRoutes: ['delhi-to-haridwar', 'delhi-to-mussoorie', 'delhi-to-nainital', 'delhi-to-shimla', 'rishikesh-to-dehradun'],
  }),

  'delhi-to-chandigarh': createRoute({
    slug: 'delhi-to-chandigarh',
    origin: 'Delhi',
    destination: 'Chandigarh',
    distanceKm: 260,
    duration: '4-5 hours',
    highway: 'NH-44 (Ambala-Chandigarh Expressway)',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. Rose Garden blooms best in February-March.',
    localTip: 'Rock Garden is a must-visit. Sukhna Lake is perfect for an evening stroll. Sector 17 for shopping.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Chandigarh & City Tour', description: 'Morning departure via NH-44. Arrive by noon. Visit the famous Rock Garden, Sukhna Lake for boating, Rose Garden (Asia largest). Explore Sector 17 plaza for shopping and food. Return to Delhi by evening.' },
    ],
    relatedRoutes: ['delhi-to-shimla', 'delhi-to-manali', 'chandigarh-to-shimla', 'chandigarh-to-manali', 'delhi-to-rohtak'],
  }),

  'delhi-to-amritsar': createRoute({
    slug: 'delhi-to-amritsar',
    origin: 'Delhi',
    destination: 'Amritsar',
    distanceKm: 450,
    duration: '7-8 hours',
    highway: 'NH-44 (GT Road / Delhi-Amritsar Highway)',
    nightHalt: true,
    bestTime: 'October to March for comfortable weather. Baisakhi (April) and Diwali celebrations are spectacular at Golden Temple.',
    localTip: 'Golden Temple langar (free community kitchen) serves 50,000+ meals daily. Wagah Border ceremony starts at 4:30 PM in winter, 5:30 PM in summer.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Amritsar', description: 'Early morning departure via NH-44 through Karnal, Ambala, Ludhiana, Jalandhar. Arrive by afternoon. Visit Golden Temple for darshan. Evening Wagah Border ceremony (reach by 3:30 PM). Night stay.' },
      { day: 2, title: 'Amritsar Heritage & Return', description: 'Early morning visit Golden Temple (most peaceful). Jallianwala Bagh memorial. Explore Partition Museum and Hall Bazaar. Taste Amritsari kulcha at Kesar da Dhaba. Post-lunch departure for Delhi.' },
    ],
    relatedRoutes: ['delhi-to-chandigarh', 'delhi-to-shimla', 'delhi-to-dharamshala', 'delhi-to-manali', 'amritsar-to-dharamshala'],
  }),

  'delhi-to-mussoorie': createRoute({
    slug: 'delhi-to-mussoorie',
    origin: 'Delhi',
    destination: 'Mussoorie',
    distanceKm: 290,
    duration: '6-7 hours',
    highway: 'NH-334 via Dehradun',
    nightHalt: true,
    bestTime: 'March to June for pleasant hill weather. September to November for clear Himalayan views.',
    localTip: 'Mussoorie is the Queen of Hills. Kempty Falls is 15 km from Mall Road. Gun Hill ropeway offers 360-degree Himalayan views.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Mussoorie', description: 'Morning departure via NH-334. Drive through Meerut, Roorkee to Dehradun. Scenic uphill drive to Mussoorie. Arrive by afternoon. Evening stroll on Mall Road, visit Library Point. Night stay.' },
      { day: 2, title: 'Mussoorie Sightseeing & Return', description: 'Morning visit Gun Hill via ropeway for panoramic views. Explore Kempty Falls, Company Garden, and Camel Back Road. After lunch, descend to Dehradun and drive back to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-rishikesh', 'delhi-to-haridwar', 'delhi-to-nainital', 'delhi-to-shimla', 'dehradun-to-mussoorie', 'mussoorie-to-rishikesh'],
  }),

  'delhi-to-nainital': createRoute({
    slug: 'delhi-to-nainital',
    origin: 'Delhi',
    destination: 'Nainital',
    distanceKm: 300,
    duration: '6-7 hours',
    highway: 'NH-9 via Moradabad & Haldwani',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather. October to November for clear views. Snowfall possible in January.',
    localTip: 'Naini Lake boat ride is a must. Naina Devi Temple at the lake edge. Snow View Point via cable car for Himalayan panorama.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Nainital', description: 'Early departure via NH-9 through Ghaziabad, Moradabad, Haldwani. Mountain road begins at Kathgodam. Arrive Nainital by afternoon. Boat ride on Naini Lake. Visit Naina Devi Temple. Evening walk on Mall Road. Night stay.' },
      { day: 2, title: 'Nainital Exploration & Return', description: 'Morning cable car to Snow View Point. Visit Eco Cave Garden, Tiffin Top trek. Explore Tibetan Market for shopping. After lunch, begin return drive to Delhi via Haldwani.' },
    ],
    relatedRoutes: ['delhi-to-corbett', 'delhi-to-mussoorie', 'delhi-to-shimla', 'delhi-to-rishikesh', 'delhi-to-moradabad'],
  }),

  'delhi-to-mathura': createRoute({
    slug: 'delhi-to-mathura',
    origin: 'Delhi',
    destination: 'Mathura',
    distanceKm: 180,
    duration: '2.5-3.5 hours',
    highway: 'Yamuna Expressway',
    nightHalt: false,
    bestTime: 'Year-round. Holi in Mathura-Vrindavan (February-March) is world-famous. Janmashtami (August) is spectacular.',
    localTip: 'Visit both Mathura and Vrindavan (15 km apart). Banke Bihari Temple evening aarti in Vrindavan is a must-see.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Mathura-Vrindavan & Return', description: 'Morning departure via Yamuna Expressway. Visit Shri Krishna Janmabhoomi Temple, Dwarkadhish Temple in Mathura. Drive to Vrindavan for Banke Bihari Temple, ISKCON Temple, and Prem Mandir. Evening aarti. Return to Delhi by night.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'delhi-to-jaipur', 'agra-to-jaipur', 'delhi-to-haridwar', 'delhi-to-vrindavan'],
  }),

  'delhi-to-corbett': createRoute({
    slug: 'delhi-to-corbett',
    origin: 'Delhi',
    destination: 'Jim Corbett National Park',
    distanceKm: 260,
    duration: '5-6 hours',
    highway: 'NH-9 via Moradabad',
    nightHalt: true,
    bestTime: 'November to June (park closed July-October for monsoon). Best tiger sighting: March to June.',
    localTip: 'Book safari permits in advance online. Dhikala zone offers the best wildlife experience. Carry binoculars for bird watching.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Jim Corbett', description: 'Early morning departure via NH-9 through Moradabad. Arrive Ramnagar (park gate) by noon. Afternoon jeep safari in Bijrani or Jhirna zone. Spot tigers, elephants, deer, and exotic birds. Evening at riverside resort. Night stay.' },
      { day: 2, title: 'Morning Safari & Return', description: 'Early morning (6 AM) safari for best wildlife sightings. Breakfast at resort. Visit Corbett Museum in Kaladhungi. Begin return drive to Delhi post-lunch, arriving by evening.' },
    ],
    relatedRoutes: ['delhi-to-nainital', 'delhi-to-rishikesh', 'delhi-to-mussoorie', 'delhi-to-haridwar', 'delhi-to-bareilly'],
  }),

  'delhi-to-kasol': createRoute({
    slug: 'delhi-to-kasol',
    origin: 'Delhi',
    destination: 'Kasol',
    distanceKm: 520,
    duration: '11-12 hours',
    highway: 'NH-44 & NH-21 via Chandigarh & Bhuntar',
    nightHalt: true,
    bestTime: 'March to June and September to November. Avoid monsoon (heavy landslides). Winter has heavy snowfall.',
    localTip: 'Kasol is the Mini Israel of India. Trek to Kheerganga hot springs (12 km). Chalal village walk along Parvati River is magical.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Kasol', description: 'Very early departure (3-4 AM). Drive via Chandigarh, Bilaspur, Mandi, Bhuntar. Turn into Parvati Valley at Bhuntar. Arrive Kasol by afternoon/evening. Explore the village, riverside cafes. Night stay.' },
      { day: 2, title: 'Kasol Exploration', description: 'Trek to Chalal village (1 km). Visit Manikaran Sahib Gurudwara and hot springs. Relax by the Parvati River. Try Israeli and Italian food at riverside cafes. Night stay in Kasol.' },
      { day: 3, title: 'Kheerganga Trek or Return', description: 'Option 1: Trek to Kheerganga hot springs (12 km, 5-6 hrs). Option 2: Explore Tosh village. Begin return drive to Delhi post-lunch, arriving late night.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'delhi-to-dharamshala', 'chandigarh-to-manali', 'kasol-to-manali'],
  }),

  'delhi-to-dharamshala': createRoute({
    slug: 'delhi-to-dharamshala',
    origin: 'Delhi',
    destination: 'Dharamshala',
    distanceKm: 480,
    duration: '9-10 hours',
    highway: 'NH-44 via Chandigarh & Una',
    nightHalt: true,
    bestTime: 'March to June and September to November. Tibetan New Year (Losar) celebrations are vibrant.',
    localTip: 'Stay in McLeodganj (upper Dharamshala) for Tibetan culture. Visit Dalai Lama temple complex. Bhagsu Waterfall is a short trek.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Dharamshala', description: 'Early departure via NH-44 through Chandigarh and Una. Scenic mountain drive through Kangra Valley. Arrive Dharamshala/McLeodganj by evening. Stroll Jogiwara Road for Tibetan food. Night stay.' },
      { day: 2, title: 'Dharamshala-McLeodganj Sightseeing', description: 'Visit Dalai Lama Temple Complex, Tsuglagkhang. Namgyal Monastery. Trek to Bhagsu Waterfall and Shiva Cafe. Explore Tibetan handicraft market. Visit HPCA Cricket Stadium. Night stay.' },
      { day: 3, title: 'Triund Trek or Return', description: 'Optional morning trek to Triund (9 km, stunning views). Or visit Kangra Fort and Chamunda Devi Temple. Begin return drive to Delhi post-lunch.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'delhi-to-amritsar', 'delhi-to-kasol', 'delhi-to-dalhousie'],
  }),

  'delhi-to-varanasi': createRoute({
    slug: 'delhi-to-varanasi',
    origin: 'Delhi',
    destination: 'Varanasi',
    distanceKm: 820,
    duration: '12-14 hours',
    highway: 'NH-19 (Purvanchal Expressway)',
    nightHalt: true,
    bestTime: 'October to March. Dev Deepawali (November) when all ghats are lit with diyas is magical.',
    localTip: 'Take a sunrise boat ride on the Ganges. The evening Ganga Aarti at Dashashwamedh Ghat is unforgettable. Try Banarasi paan.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Varanasi', description: 'Early morning departure via NH-19 and Purvanchal Expressway. Long but comfortable highway drive through Lucknow. Arrive Varanasi by evening. Witness the grand Ganga Aarti at Dashashwamedh Ghat. Night stay.' },
      { day: 2, title: 'Varanasi Spiritual Experience', description: 'Sunrise boat ride on the Ganges (5:30 AM). Visit Kashi Vishwanath Temple, Sankat Mochan Temple. Explore the ancient lanes of Banaras. Visit Sarnath (10 km) where Buddha gave his first sermon. Night stay.' },
      { day: 3, title: 'Varanasi & Return', description: 'Morning visit to Assi Ghat, Tulsi Manas Temple, BHU campus. Shopping for Banarasi silk sarees in the lanes. Begin return drive to Delhi post-lunch.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'lucknow-to-varanasi', 'lucknow-to-ayodhya', 'delhi-to-mathura', 'varanasi-to-prayagraj'],
  }),

  'delhi-to-udaipur': createRoute({
    slug: 'delhi-to-udaipur',
    origin: 'Delhi',
    destination: 'Udaipur',
    distanceKm: 660,
    duration: '10-11 hours',
    highway: 'NH-48 via Jaipur & Ajmer',
    nightHalt: true,
    bestTime: 'September to March. Mewar Festival (March-April) and World Music Festival are highlights.',
    localTip: 'Udaipur is the Venice of the East. Sunset boat ride on Lake Pichola is a must. Dinner at Ambrai for lake views.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Udaipur', description: 'Early departure via NH-48. Drive through Jaipur and Ajmer (optional Pushkar stop). Arrive Udaipur by evening. Sunset boat ride on Lake Pichola with views of Lake Palace. Night stay.' },
      { day: 2, title: 'Udaipur Sightseeing', description: 'Visit City Palace (largest palace complex in Rajasthan), Jagdish Temple, Saheliyon Ki Bari. Afternoon at Fateh Sagar Lake. Evening explore old city lanes and rooftop restaurants. Night stay.' },
      { day: 3, title: 'Udaipur Exploration & Return', description: 'Morning visit Monsoon Palace for panoramic views. Shilpgram crafts village. Shopping for miniature paintings. Begin return drive to Delhi post-lunch.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-jodhpur', 'jaipur-to-udaipur', 'jaipur-to-jodhpur'],
  }),

  'delhi-to-jodhpur': createRoute({
    slug: 'delhi-to-jodhpur',
    origin: 'Delhi',
    destination: 'Jodhpur',
    distanceKm: 600,
    duration: '9-10 hours',
    highway: 'NH-48 via Jaipur',
    nightHalt: true,
    bestTime: 'October to March. Marwar Festival (October) showcases Rajasthani culture and music.',
    localTip: 'Jodhpur is the Blue City. Mehrangarh Fort is India most impressive fort. Try the famous Mirchi Bada and Makhania Lassi.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Jodhpur', description: 'Early departure via NH-48. Drive through Jaipur. Arrive Jodhpur by evening. Explore the blue-painted houses of old city. Dinner at rooftop restaurant overlooking Mehrangarh Fort. Night stay.' },
      { day: 2, title: 'Jodhpur Sightseeing & Return', description: 'Morning visit Mehrangarh Fort (audio guide recommended). Jaswant Thada marble cenotaph. Umaid Bhawan Palace Museum. Clock Tower market for spices. Begin return drive to Delhi post-lunch.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-udaipur', 'jaipur-to-jodhpur', 'jaipur-to-udaipur', 'delhi-to-bikaner'],
  }),

  // ═══════════════════════════════════════════
  // JAIPUR ORIGIN ROUTES (3 routes)
  // ═══════════════════════════════════════════
  'jaipur-to-udaipur': createRoute({
    slug: 'jaipur-to-udaipur',
    origin: 'Jaipur',
    destination: 'Udaipur',
    distanceKm: 395,
    duration: '6-7 hours',
    highway: 'NH-48 via Ajmer & Chittorgarh',
    nightHalt: true,
    bestTime: 'October to March. Stop at Chittorgarh Fort en route for a historical experience.',
    localTip: 'Two route options: via Ajmer-Beawar (shorter) or via Chittorgarh (historic). Chittorgarh route adds 30 km but includes India largest fort.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Udaipur via Chittorgarh', description: 'Morning departure. Stop at Chittorgarh Fort (India largest fort) for 2 hours. Continue to Udaipur. Arrive by evening. Sunset boat ride on Lake Pichola. Night stay.' },
      { day: 2, title: 'Udaipur Sightseeing & Return', description: 'Visit City Palace, Jagdish Temple, Saheliyon Ki Bari. Lunch at lakeside restaurant. Explore old city. Begin return to Jaipur post-lunch via Ajmer route.' },
    ],
    relatedRoutes: ['jaipur-to-jodhpur', 'jaipur-to-pushkar', 'delhi-to-udaipur', 'delhi-to-jaipur'],
  }),

  'jaipur-to-jodhpur': createRoute({
    slug: 'jaipur-to-jodhpur',
    origin: 'Jaipur',
    destination: 'Jodhpur',
    distanceKm: 335,
    duration: '5-6 hours',
    highway: 'NH-62 via Ajmer & Beawar',
    nightHalt: true,
    bestTime: 'October to March. The desert landscape between Pali and Jodhpur is strikingly beautiful at sunset.',
    localTip: 'Stop at Ajmer Sharif Dargah (one of India most important Sufi shrines) en route. Pushkar is just 15 km from Ajmer.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Jodhpur', description: 'Morning departure via Ajmer. Optional stop at Pushkar for Brahma Temple and holy lake. Continue through Aravalli hills to Jodhpur. Evening exploration of blue city lanes. Night stay.' },
      { day: 2, title: 'Jodhpur Exploration & Return', description: 'Morning at Mehrangarh Fort (allow 3 hours). Visit Jaswant Thada, Mandore Gardens. Lunch with fort views. Shopping at Sardar Market near Clock Tower. Return drive to Jaipur.' },
    ],
    relatedRoutes: ['jaipur-to-udaipur', 'jaipur-to-pushkar', 'delhi-to-jodhpur', 'delhi-to-jaipur'],
  }),

  'jaipur-to-pushkar': createRoute({
    slug: 'jaipur-to-pushkar',
    origin: 'Jaipur',
    destination: 'Pushkar',
    distanceKm: 150,
    duration: '2.5-3 hours',
    highway: 'NH-48 via Ajmer',
    nightHalt: false,
    bestTime: 'October to March. Pushkar Camel Fair (November) is world-famous. Full moon nights at the lake are serene.',
    localTip: 'Pushkar has the only Brahma Temple in the world. Visit 52 ghats around the holy lake. Rose Garden for Pushkar famous roses.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Pushkar & Return', description: 'Morning departure to Pushkar via Ajmer. Visit Ajmer Sharif Dargah en route. In Pushkar, visit Brahma Temple, take a holy dip at Pushkar Lake ghats, explore the vibrant market. Camel ride in sand dunes. Return to Jaipur by evening.' },
    ],
    relatedRoutes: ['jaipur-to-udaipur', 'jaipur-to-jodhpur', 'delhi-to-jaipur', 'agra-to-jaipur'],
  }),

  // ═══════════════════════════════════════════
  // AGRA ORIGIN ROUTES (1 route)
  // ═══════════════════════════════════════════
  'agra-to-jaipur': createRoute({
    slug: 'agra-to-jaipur',
    origin: 'Agra',
    destination: 'Jaipur',
    distanceKm: 240,
    duration: '4-5 hours',
    highway: 'NH-21 via Bharatpur & Dausa',
    nightHalt: true,
    bestTime: 'October to March. Stop at Fatehpur Sikri (40 km from Agra) and Bharatpur Bird Sanctuary en route.',
    localTip: 'This is the final leg of the Golden Triangle. Stop at Fatehpur Sikri and Abhaneri Stepwell (Chand Baori) en route.',
    suggestedItinerary: [
      { day: 1, title: 'Agra to Jaipur via Heritage Stops', description: 'Morning departure. Visit Fatehpur Sikri (UNESCO site, 40 km from Agra). Optional stop at Bharatpur Bird Sanctuary. Visit Abhaneri Stepwell (Chand Baori). Arrive Jaipur by evening. Night stay.' },
      { day: 2, title: 'Jaipur Sightseeing & Return', description: 'Morning at Amber Fort. Visit Hawa Mahal, City Palace, Jantar Mantar. Shopping at Bapu Bazaar. Return drive to Agra via NH-21.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-agra', 'jaipur-to-udaipur', 'jaipur-to-pushkar'],
  }),

  // ═══════════════════════════════════════════
  // CHANDIGARH ORIGIN ROUTES (2 routes)
  // ═══════════════════════════════════════════
  'chandigarh-to-shimla': createRoute({
    slug: 'chandigarh-to-shimla',
    origin: 'Chandigarh',
    destination: 'Shimla',
    distanceKm: 115,
    duration: '3-3.5 hours',
    highway: 'NH-5 via Kalka & Solan',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather, December to February for snow. The mountain road is scenic year-round.',
    localTip: 'The Chandigarh-Shimla highway runs parallel to the toy train route. Stop at Barog for chai and stunning valley views.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Shimla', description: 'Morning departure via NH-5. Scenic mountain drive through Kalka, Parwanoo, Solan. Stop at Barog for tea. Arrive Shimla by noon. Visit Christ Church, The Ridge, Lakkar Bazaar. Evening Mall Road walk. Night stay.' },
      { day: 2, title: 'Shimla Sightseeing & Return', description: 'Morning visit Jakhoo Temple, Kufri adventure park, Green Valley. Shopping for Himachali shawls and caps. After lunch, scenic return drive to Chandigarh.' },
    ],
    relatedRoutes: ['chandigarh-to-manali', 'delhi-to-shimla', 'delhi-to-chandigarh', 'delhi-to-manali', 'kasol-to-chandigarh'],
  }),

  'chandigarh-to-manali': createRoute({
    slug: 'chandigarh-to-manali',
    origin: 'Chandigarh',
    destination: 'Manali',
    distanceKm: 310,
    duration: '7-8 hours',
    highway: 'NH-21 via Bilaspur & Mandi',
    nightHalt: true,
    bestTime: 'March to June for lush green valleys. October-November for autumn. December-February for snow adventures.',
    localTip: 'Stop at Pandoh Dam and Hanogi Mata Temple en route. The Beas River runs alongside the highway after Mandi.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Manali', description: 'Morning departure via NH-21 through Bilaspur, Sundernagar, Mandi. Stop at Pandoh Dam for photos. River views along Beas after Mandi. Arrive Manali by evening. Explore Old Manali. Night stay.' },
      { day: 2, title: 'Manali Sightseeing', description: 'Visit Solang Valley, Hadimba Temple, Manu Temple, Vashisht Hot Springs. Atal Tunnel visit. Adventure activities at Solang. Evening by Beas River. Night stay.' },
      { day: 3, title: 'Rohtang/Sissu & Return', description: 'Morning excursion to Sissu or Rohtang Pass (permit required). Snow activities. Return to Manali for lunch. Begin drive back to Chandigarh arriving by late evening.' },
    ],
    relatedRoutes: ['chandigarh-to-shimla', 'delhi-to-manali', 'delhi-to-shimla', 'delhi-to-kasol', 'delhi-to-leh'],
  }),

  // ═══════════════════════════════════════════
  // LUCKNOW ORIGIN ROUTES (2 routes)
  // ═══════════════════════════════════════════
  'lucknow-to-varanasi': createRoute({
    slug: 'lucknow-to-varanasi',
    origin: 'Lucknow',
    destination: 'Varanasi',
    distanceKm: 320,
    duration: '5-6 hours',
    highway: 'Purvanchal Expressway / NH-56',
    nightHalt: true,
    bestTime: 'October to March. Dev Deepawali (November) and Ganga Aarti are must-see experiences.',
    localTip: 'Purvanchal Expressway has cut travel time significantly. Reach Varanasi by afternoon for evening Ganga Aarti.',
    suggestedItinerary: [
      { day: 1, title: 'Lucknow to Varanasi', description: 'Morning departure via Purvanchal Expressway (smooth 6-lane highway). Arrive Varanasi by afternoon. Visit Kashi Vishwanath Temple. Evening Ganga Aarti at Dashashwamedh Ghat. Night stay.' },
      { day: 2, title: 'Varanasi & Sarnath', description: 'Sunrise boat ride on Ganges (5:30 AM). Visit ghats and morning rituals. Drive to Sarnath (10 km) for Buddhist history. Evening explore Banaras lanes, try street food. Night stay or return to Lucknow.' },
    ],
    relatedRoutes: ['lucknow-to-ayodhya', 'delhi-to-varanasi', 'delhi-to-agra', 'delhi-to-mathura', 'varanasi-to-prayagraj'],
  }),

  'lucknow-to-ayodhya': createRoute({
    slug: 'lucknow-to-ayodhya',
    origin: 'Lucknow',
    destination: 'Ayodhya',
    distanceKm: 135,
    duration: '2.5-3 hours',
    highway: 'NH-330 (Lucknow-Ayodhya Highway)',
    nightHalt: false,
    bestTime: 'Year-round. Ram Navami (March-April) celebrations are grand. The new Ram Mandir is best visited early morning.',
    localTip: 'Visit the newly built Ram Mandir early morning to avoid crowds. Carry ID proof for temple entry. Saryu River ghats are peaceful.',
    suggestedItinerary: [
      { day: 1, title: 'Lucknow to Ayodhya & Return', description: 'Early morning departure. Visit the grand Ram Mandir (newly built). Explore Hanuman Garhi, Kanak Bhawan, Dashrath Mahal. Take a boat ride on Saryu River. Visit the evening aarti at ghats. Return to Lucknow by night.' },
    ],
    relatedRoutes: ['lucknow-to-varanasi', 'delhi-to-varanasi', 'delhi-to-agra', 'delhi-to-mathura'],
  }),
  'delhi-to-dehradun': createRoute({
    slug: 'delhi-to-dehradun',
    origin: 'Delhi',
    destination: 'Dehradun',
    distanceKm: 260,
    duration: '5-6 hours',
    highway: 'NH-44 & Delhi-Dehradun Expressway',
    nightHalt: true,
    bestTime: 'September to April for pleasant weather. Avoid peak monsoon (July-August) due to landslide risk on hill approaches.',
    localTip: 'Stop at Cheetal Grand near Khatauli for a famous breakfast halt. Robbers Cave and Sahastradhara are refreshing morning spots.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Dehradun', description: 'Early morning departure via the new Delhi-Dehradun Expressway. Breakfast halt at Cheetal Grand. Arrive Dehradun by afternoon. Visit Robbers Cave and Clock Tower market in the evening.' },
      { day: 2, title: 'Dehradun Sightseeing and Return', description: 'Morning visit to Sahastradhara, Forest Research Institute and Tapkeshwar Temple. After lunch begin the return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-mussoorie', 'delhi-to-haridwar', 'delhi-to-nainital', 'delhi-to-shimla', 'dehradun-to-rishikesh'],
  }),
  'delhi-to-lucknow': createRoute({
    slug: 'delhi-to-lucknow',
    origin: 'Delhi',
    destination: 'Lucknow',
    distanceKm: 555,
    duration: '8-9 hours',
    highway: 'Yamuna Expressway & Agra-Lucknow Expressway',
    nightHalt: true,
    bestTime: 'October to March for cool comfortable weather. Summers are very hot, so early morning travel is advised.',
    localTip: 'The Agra-Lucknow Expressway is smooth and fast. Try authentic Tunday Kababi and Awadhi biryani in the old city near Chowk.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Lucknow', description: 'Early departure via Yamuna Expressway and Agra-Lucknow Expressway. Lunch break midway. Arrive Lucknow by evening. Stroll around Hazratganj market and try local kebabs.' },
      { day: 2, title: 'Lucknow Sightseeing and Return', description: 'Morning visit to Bara Imambara, Chota Imambara, Rumi Darwaza and British Residency. After an Awadhi lunch begin the return journey to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-ayodhya', 'delhi-to-agra', 'lucknow-to-ayodhya', 'delhi-to-jaipur', 'delhi-to-kanpur'],
  }),
  'delhi-to-ayodhya': createRoute({
    slug: 'delhi-to-ayodhya',
    origin: 'Delhi',
    destination: 'Ayodhya',
    distanceKm: 690,
    duration: '10-11 hours',
    highway: 'Yamuna Expressway & Agra-Lucknow Expressway',
    nightHalt: true,
    bestTime: 'October to March for comfortable darshan weather. Diwali Deepotsav is spectacular but very crowded.',
    localTip: 'Plan an early morning Ram Mandir darshan to avoid long queues. Sarayu Aarti at the ghat in the evening is deeply peaceful.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Ayodhya', description: 'Early morning departure via Yamuna and Agra-Lucknow Expressways. Lunch halt near Lucknow. Arrive Ayodhya by evening. Attend the Sarayu Aarti at the ghat.' },
      { day: 2, title: 'Ayodhya Temple Darshan', description: 'Early morning Ram Mandir darshan followed by Hanuman Garhi and Kanak Bhawan. Visit Ram Ki Paidi and local temples. Rest for the night.' },
      { day: 3, title: 'Ayodhya to Delhi', description: 'Morning visit to any remaining temples and ghats. After breakfast begin the long return drive to Delhi via the expressways.' },
    ],
    relatedRoutes: ['delhi-to-lucknow', 'lucknow-to-ayodhya', 'delhi-to-agra', 'delhi-to-katra'],
  }),
  'delhi-to-jaisalmer': createRoute({
    slug: 'delhi-to-jaisalmer',
    origin: 'Delhi',
    destination: 'Jaisalmer',
    distanceKm: 790,
    duration: '11-12 hours',
    highway: 'NH-48 & NH-11',
    nightHalt: true,
    bestTime: 'October to March for cool desert weather. The Desert Festival in February is a colourful highlight. Avoid summer extreme heat.',
    localTip: 'Book a Sam Sand Dunes sunset camel safari and an overnight desert camp. The golden Jaisalmer Fort glows beautifully at sunset.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Jaisalmer', description: 'Very early departure via NH-48 towards Jaipur, then onward through Bikaner region. Long highway drive with meal halts. Arrive Jaisalmer by late evening and rest.' },
      { day: 2, title: 'Jaisalmer Fort and Desert Safari', description: 'Morning explore the living Jaisalmer Fort, Patwon Ki Haveli and Gadisar Lake. Afternoon drive to Sam Sand Dunes for a camel safari, sunset and a cultural desert camp evening.' },
      { day: 3, title: 'Jaisalmer to Delhi', description: 'Morning visit to Kuldhara abandoned village and Bada Bagh cenotaphs. After lunch begin the long return drive to Delhi.' },
    ],
    relatedRoutes: ['jaipur-to-jaisalmer', 'delhi-to-jodhpur', 'delhi-to-udaipur', 'jaipur-to-bikaner'],
  }),
  'delhi-to-pushkar': createRoute({
    slug: 'delhi-to-pushkar',
    origin: 'Delhi',
    destination: 'Pushkar',
    distanceKm: 400,
    duration: '7-8 hours',
    highway: 'NH-48',
    nightHalt: true,
    bestTime: 'October to March for pleasant weather. The Pushkar Camel Fair in November is world famous but extremely crowded.',
    localTip: 'Pushkar has the rare Brahma Temple. Take a sunset walk around the sacred Pushkar Lake and explore the colourful bazaar for textiles.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Pushkar', description: 'Morning departure via NH-48 past Jaipur. Lunch halt near Jaipur. Arrive Pushkar by evening. Walk the ghats of Pushkar Lake and browse the main bazaar.' },
      { day: 2, title: 'Pushkar Temples and Return', description: 'Morning darshan at the Brahma Temple and Savitri Temple viewpoint. Visit the lake ghats. After lunch begin the return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-ajmer', 'delhi-to-jaipur', 'delhi-to-udaipur', 'delhi-to-jodhpur'],
  }),
  'delhi-to-ajmer': createRoute({
    slug: 'delhi-to-ajmer',
    origin: 'Delhi',
    destination: 'Ajmer',
    distanceKm: 390,
    duration: '7 hours',
    highway: 'NH-48',
    nightHalt: true,
    bestTime: 'October to March for comfortable weather. The Urs festival draws huge pilgrim crowds, so plan accordingly.',
    localTip: 'The Ajmer Sharif Dargah is the main draw. Pushkar is just a short drive away, so many travellers combine both in one trip.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Ajmer', description: 'Morning departure via NH-48 past Jaipur. Lunch halt en route. Arrive Ajmer by evening. Visit Ajmer Sharif Dargah and Ana Sagar Lake at sunset.' },
      { day: 2, title: 'Ajmer Sightseeing and Return', description: 'Morning visit to Adhai Din Ka Jhonpra and a short trip to nearby Pushkar Brahma Temple. After lunch begin the return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-pushkar', 'delhi-to-jaipur', 'delhi-to-udaipur', 'delhi-to-jodhpur'],
  }),
  'delhi-to-katra': createRoute({
    slug: 'delhi-to-katra',
    origin: 'Delhi',
    destination: 'Katra',
    distanceKm: 630,
    duration: '10-11 hours',
    highway: 'NH-44',
    nightHalt: true,
    bestTime: 'March to June and September to November for pleasant weather. Winters bring chilly cold and occasional snow on the upper track.',
    localTip: 'Katra is the base for the Vaishno Devi trek. Register your yatra slip early and carry comfortable shoes for the 12 km climb.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Katra', description: 'Early morning departure via NH-44 through Ambala and Jammu. Meal halts en route. Arrive Katra by evening and rest before the yatra.' },
      { day: 2, title: 'Vaishno Devi Darshan', description: 'Begin the trek or take a pony or helicopter to Bhawan for Mata Vaishno Devi darshan. Many also visit Bhairavnath Temple at the top before returning to Katra by evening.' },
      { day: 3, title: 'Katra to Delhi', description: 'Morning visit to local temples or shopping for prasad. After breakfast begin the long return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-amritsar', 'delhi-to-haridwar', 'delhi-to-shimla', 'delhi-to-ayodhya'],
  }),
  'delhi-to-kasauli': createRoute({
    slug: 'delhi-to-kasauli',
    origin: 'Delhi',
    destination: 'Kasauli',
    distanceKm: 290,
    duration: '6 hours',
    highway: 'NH-44',
    nightHalt: true,
    bestTime: 'March to June for cool hill weather and September to November for clear views. Monsoon brings lush greenery but slippery roads.',
    localTip: 'Kasauli is a quiet colonial hill town. Walk the Gilbert Trail for birdwatching and enjoy sunset from Sunset Point near Monkey Point.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Kasauli', description: 'Morning departure via NH-44 past Chandigarh. Breakfast halt at Murthal. Climb the hill road to Kasauli by afternoon. Walk the Mall Road and Christ Church area in the evening.' },
      { day: 2, title: 'Kasauli Sightseeing and Return', description: 'Morning walk along the Gilbert Trail and visit Sunset Point and Baba Balak Nath Temple. After lunch begin the return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-shimla', 'chandigarh-to-kasauli', 'delhi-to-chandigarh', 'chandigarh-to-shimla'],
  }),
  'delhi-to-bir-billing': createRoute({
    slug: 'delhi-to-bir-billing',
    origin: 'Delhi',
    destination: 'Bir Billing',
    distanceKm: 510,
    duration: '11-12 hours',
    highway: 'NH-44 & NH-154',
    nightHalt: true,
    bestTime: 'March to June and October to November are best for paragliding with clear skies. Flying often pauses during monsoon.',
    localTip: 'Bir Billing is the paragliding capital of India. The takeoff is at Billing and landing at Bir. The Tibetan colony cafes are a charming stop.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Bir Billing', description: 'Early morning departure via NH-44 towards Chandigarh, then mountain roads through Bilaspur and Mandi. Long scenic drive. Arrive Bir by evening and rest at a cafe.' },
      { day: 2, title: 'Paragliding and Sightseeing', description: 'Morning paragliding from Billing takeoff site. Afternoon explore the Tibetan colony, monasteries and Deer Park Institute. Relax at the local cafes.' },
      { day: 3, title: 'Bir Billing to Delhi', description: 'Morning visit to Sherabling Monastery. After breakfast begin the long return drive to Delhi through the hills.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'chandigarh-to-manali', 'delhi-to-dehradun', 'dharamshala-to-manali'],
  }),
  'delhi-to-mount-abu': createRoute({
    slug: 'delhi-to-mount-abu',
    origin: 'Delhi',
    destination: 'Mount Abu',
    distanceKm: 750,
    duration: '12-13 hours',
    highway: 'NH-48',
    nightHalt: true,
    bestTime: 'October to March for pleasant cool weather. It is the only hill station in Rajasthan and a popular summer escape too.',
    localTip: 'The Dilwara Jain Temples have exquisite marble carving. Catch the famous Nakki Lake boat ride and the Sunset Point evening view.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Mount Abu', description: 'Very early departure via NH-48 past Jaipur and Ajmer. Long highway drive with meal halts. Climb the hill road to Mount Abu by late evening and rest.' },
      { day: 2, title: 'Mount Abu Sightseeing', description: 'Morning visit the Dilwara Jain Temples and Guru Shikhar peak. Afternoon enjoy a Nakki Lake boat ride and the famous Sunset Point view in the evening.' },
      { day: 3, title: 'Mount Abu to Delhi', description: 'Morning visit to Achalgarh Fort and Adhar Devi Temple. After lunch begin the long return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-udaipur', 'delhi-to-jodhpur', 'delhi-to-ajmer', 'delhi-to-pushkar', 'jaipur-to-mount-abu'],
  }),
  'delhi-to-ranthambore': createRoute({
    slug: 'delhi-to-ranthambore',
    origin: 'Delhi',
    destination: 'Ranthambore',
    distanceKm: 380,
    duration: '7 hours',
    highway: 'NH-48 & NH-21',
    nightHalt: true,
    bestTime: 'October to April for the best tiger sighting safaris. The park is closed during the monsoon months, so plan in the dry season.',
    localTip: 'Book your jungle safari permit in advance for the core zones. Early morning safaris offer the best chance of spotting a tiger.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Ranthambore', description: 'Morning departure via NH-48 towards Jaipur, then onward to Sawai Madhopur. Lunch halt en route. Arrive Ranthambore by evening and rest before the safari.' },
      { day: 2, title: 'Tiger Safari and Return', description: 'Early morning jungle safari in the tiger reserve. Visit the historic Ranthambore Fort and Trinetra Ganesh Temple. After lunch begin the return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-corbett', 'delhi-to-agra', 'delhi-to-pushkar'],
  }),
  'jaipur-to-jaisalmer': createRoute({
    slug: 'jaipur-to-jaisalmer',
    origin: 'Jaipur',
    destination: 'Jaisalmer',
    distanceKm: 560,
    duration: '9-10 hours',
    highway: 'NH-11 & NH-125',
    nightHalt: true,
    bestTime: 'October to March for cool desert weather. The February Desert Festival brings folk music, dance and camel races to life.',
    localTip: 'Break the long drive with a stop in Bikaner or Pokhran. Reserve a Sam Sand Dunes camel safari and an overnight desert camp.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Jaisalmer', description: 'Early departure from Jaipur via NH-11 through Kishangarh and Bikaner region. Long highway drive with meal halts. Arrive Jaisalmer by evening and rest.' },
      { day: 2, title: 'Jaisalmer Fort and Desert Safari', description: 'Morning explore the living Jaisalmer Fort, Patwon Ki Haveli and Gadisar Lake. Afternoon drive to Sam Sand Dunes for a camel safari, sunset and a desert camp evening.' },
      { day: 3, title: 'Jaisalmer to Jaipur', description: 'Morning visit to Kuldhara abandoned village and Bada Bagh cenotaphs. After lunch begin the long return drive to Jaipur.' },
    ],
    relatedRoutes: ['delhi-to-jaisalmer', 'jaipur-to-bikaner', 'jaipur-to-udaipur', 'delhi-to-jodhpur'],
  }),
  'jaipur-to-bikaner': createRoute({
    slug: 'jaipur-to-bikaner',
    origin: 'Jaipur',
    destination: 'Bikaner',
    distanceKm: 335,
    duration: '6 hours',
    highway: 'NH-11',
    nightHalt: true,
    bestTime: 'October to March for pleasant desert weather. The Camel Festival in January is a vibrant cultural highlight of Bikaner.',
    localTip: 'Bikaner is famous for its bhujia and rasgulla. The Junagarh Fort is remarkably well preserved and the camel breeding farm is unique.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Bikaner', description: 'Morning departure from Jaipur via NH-11 through Kishangarh and Nagaur region. Lunch halt en route. Arrive Bikaner by afternoon. Explore the local bazaar and try the famous bhujia.' },
      { day: 2, title: 'Bikaner Sightseeing and Return', description: 'Morning visit to Junagarh Fort, Karni Mata Temple at Deshnoke and the National Research Centre on Camel. After lunch begin the return drive to Jaipur.' },
    ],
    relatedRoutes: ['jaipur-to-jaisalmer', 'delhi-to-jaisalmer', 'jaipur-to-udaipur', 'delhi-to-jodhpur', 'delhi-to-bikaner'],
  }),
  'agra-to-mathura': createRoute({
    slug: 'agra-to-mathura',
    origin: 'Agra',
    destination: 'Mathura',
    distanceKm: 55,
    duration: '1-1.5 hours',
    highway: 'NH-44 & Yamuna Expressway',
    nightHalt: false,
    bestTime: 'October to March for comfortable weather. Janmashtami and Holi are spectacular festival times in the Braj region.',
    localTip: 'Combine Mathura with nearby Vrindavan in the same day. Try the local pedha sweet and attend the evening aarti at the ghats.',
    suggestedItinerary: [
      { day: 1, title: 'Agra to Mathura and Vrindavan Day Trip', description: 'Morning departure from Agra via NH-44. Reach Mathura within the hour. Visit Krishna Janmabhoomi Temple and the Yamuna ghats. Drive to nearby Vrindavan for Banke Bihari and Prem Mandir, then return to Agra by evening.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'delhi-to-jaipur', 'delhi-to-pushkar', 'delhi-to-ayodhya', 'delhi-to-aligarh'],
  }),
  'chandigarh-to-kasauli': createRoute({
    slug: 'chandigarh-to-kasauli',
    origin: 'Chandigarh',
    destination: 'Kasauli',
    distanceKm: 60,
    duration: '1.5-2 hours',
    highway: 'NH-5',
    nightHalt: false,
    bestTime: 'March to June for cool hill weather and September to November for clear views. A perfect quick getaway from Chandigarh.',
    localTip: 'Kasauli is an easy day trip from Chandigarh. Enjoy the Gilbert Trail walk, Sunset Point and the colonial charm of Mall Road.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Kasauli Day Trip', description: 'Morning departure from Chandigarh via NH-5 and the hill road. Reach Kasauli in under two hours. Walk the Gilbert Trail, visit Christ Church and Sunset Point, enjoy lunch at a hill cafe and return to Chandigarh by evening.' },
    ],
    relatedRoutes: ['delhi-to-kasauli', 'chandigarh-to-shimla', 'delhi-to-shimla', 'chandigarh-to-dalhousie'],
  }),
  'chandigarh-to-dalhousie': createRoute({
    slug: 'chandigarh-to-dalhousie',
    origin: 'Chandigarh',
    destination: 'Dalhousie',
    distanceKm: 320,
    duration: '7-8 hours',
    highway: 'NH-5 & NH-154',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather and December to February for snowfall. Monsoon brings lush greenery but slippery hill roads.',
    localTip: 'Dalhousie is a serene colonial hill town. Visit nearby Khajjiar, often called mini Switzerland, for its green meadow and pine forests.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Dalhousie', description: 'Early morning departure from Chandigarh via NH-5 and NH-154 through Una and Pathankot. Long scenic hill drive with meal halts. Arrive Dalhousie by evening and stroll the Mall Road.' },
      { day: 2, title: 'Dalhousie and Khajjiar Sightseeing', description: 'Morning visit to Khajjiar meadow, Kalatop wildlife sanctuary and St John Church. Enjoy the pine forest views and local Tibetan market before resting for the night.' },
      { day: 3, title: 'Dalhousie to Chandigarh', description: 'Morning visit to Panchpula and Satdhara falls. After breakfast begin the return drive to Chandigarh through the hills.' },
    ],
    relatedRoutes: ['chandigarh-to-shimla', 'chandigarh-to-manali', 'delhi-to-amritsar', 'chandigarh-to-kasauli', 'delhi-to-dalhousie'],
  }),
  'chandigarh-to-mcleodganj': createRoute({
    slug: 'chandigarh-to-mcleodganj',
    origin: 'Chandigarh',
    destination: 'McLeodganj',
    distanceKm: 250,
    duration: '6-7 hours',
    highway: 'NH154 via Una-Kangra',
    nightHalt: true,
    bestTime: 'March to June and September to November. Avoid heavy monsoon (July-August) on the Kangra hill roads.',
    localTip: 'Start early from Chandigarh to reach McLeodganj by afternoon. The Triund trek needs a full day, so plan an extra night if trekking.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to McLeodganj', description: 'Morning departure via Una and Kangra. Lunch at a Kangra dhaba. Arrive McLeodganj by evening. Stroll the Main Square and Temple Road. Overnight in McLeodganj.' },
      { day: 2, title: 'McLeodganj Sightseeing & Return', description: 'Visit the Dalai Lama Temple (Tsuglagkhang), Bhagsunag Falls, St John in the Wilderness church and Namgyal Monastery. After lunch, begin the return drive to Chandigarh.' },
    ],
    relatedRoutes: ['amritsar-to-dharamshala', 'chandigarh-to-dalhousie', 'chandigarh-to-shimla', 'delhi-to-dharamshala'],
  }),

  'chandigarh-to-mussoorie': createRoute({
    slug: 'chandigarh-to-mussoorie',
    origin: 'Chandigarh',
    destination: 'Mussoorie',
    distanceKm: 190,
    duration: '5-6 hours',
    highway: 'Via Paonta Sahib & Dehradun',
    nightHalt: true,
    bestTime: 'April to June for pleasant weather, September to November for clear valley views. December to February for occasional snow.',
    localTip: 'The Paonta Sahib route is scenic along the Yamuna. Reach Mussoorie by afternoon for a Mall Road evening and Gun Hill sunset.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Mussoorie', description: 'Drive via Paonta Sahib and Dehradun along the Yamuna. Arrive Mussoorie by afternoon. Evening walk on Mall Road and Gun Hill ropeway. Overnight in Mussoorie.' },
      { day: 2, title: 'Mussoorie Sightseeing & Return', description: 'Visit Kempty Falls, Lal Tibba, Camel Back Road and Company Garden. After lunch, return to Chandigarh via Dehradun.' },
    ],
    relatedRoutes: ['chandigarh-to-shimla', 'delhi-to-mussoorie', 'chandigarh-to-narkanda', 'chandigarh-to-chail'],
  }),

  'chandigarh-to-chail': createRoute({
    slug: 'chandigarh-to-chail',
    origin: 'Chandigarh',
    destination: 'Chail',
    distanceKm: 110,
    duration: '3-4 hours',
    highway: 'Via Solan & Kandaghat',
    nightHalt: true,
    bestTime: 'March to June and September to November. A quiet alternative to Shimla, pleasant most of the year.',
    localTip: 'Chail is a peaceful retreat near Shimla. Visit the world’s highest cricket ground and Chail Palace. Easy to pair with Kufri.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Chail', description: 'Scenic drive via Solan and Kandaghat through pine forests. Arrive Chail by afternoon. Visit Chail Palace and the famous high-altitude cricket ground. Overnight in Chail.' },
      { day: 2, title: 'Chail Sightseeing & Return', description: 'Visit Kali Ka Tibba temple for panoramic views, Sadhupul and the Chail Wildlife Sanctuary. After lunch, return to Chandigarh.' },
    ],
    relatedRoutes: ['chandigarh-to-shimla', 'chandigarh-to-kasauli', 'chandigarh-to-narkanda', 'chandigarh-to-mussoorie'],
  }),

  'chandigarh-to-narkanda': createRoute({
    slug: 'chandigarh-to-narkanda',
    origin: 'Chandigarh',
    destination: 'Narkanda',
    distanceKm: 150,
    duration: '5-6 hours',
    highway: 'NH5 via Shimla',
    nightHalt: true,
    bestTime: 'April to June for apple-blossom season and green meadows, December to February for snow and skiing at Narkanda.',
    localTip: 'Narkanda lies beyond Shimla at 2700m. The Hatu Peak drive and apple orchards are highlights. Carry warm clothes year-round.',
    suggestedItinerary: [
      { day: 1, title: 'Chandigarh to Narkanda', description: 'Drive via Shimla on NH5, climbing through pine and deodar forests. Arrive Narkanda by evening. Relax amid apple orchards. Overnight in Narkanda.' },
      { day: 2, title: 'Hatu Peak & Return', description: 'Morning drive to Hatu Peak (3300m) for Himalayan views and the Hatu Mata temple. Visit Stokes Farm orchards. After lunch, return to Chandigarh via Shimla.' },
    ],
    relatedRoutes: ['chandigarh-to-shimla', 'chandigarh-to-chail', 'chandigarh-to-kasauli', 'chandigarh-to-mussoorie'],
  }),

  'delhi-to-dalhousie': createRoute({
    slug: 'delhi-to-dalhousie',
    origin: 'Delhi',
    destination: 'Dalhousie',
    distanceKm: 560,
    duration: '12-13 hours',
    highway: 'NH-44 & NH-154 via Ambala, Pathankot & Banikhet',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather and clear valley views, and December to February for snowfall. Monsoon (July-August) brings landslide risk on the hill roads.',
    localTip: 'Dalhousie is a colonial-era hill town spread across five hills at around 2000m. The meadow of Khajjiar, about 24 km away, is often called Mini Switzerland and is a must-visit. Carry warm layers even in summer as evenings are cold.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Dalhousie', description: 'Very early departure (4-5 AM) from Delhi via NH-44 through Ambala and Pathankot, the 560 km drive takes about 12-13 hours. Enjoy the climb through pine forests near Banikhet. Arrive Dalhousie by evening and take a relaxed walk along the Mall Road and Gandhi Chowk. Overnight in Dalhousie.' },
      { day: 2, title: 'Dalhousie & Khajjiar Sightseeing', description: 'Full day of local sightseeing covering St John\'s Church, Panchpula, Satdhara Falls and Subhash Baoli. Drive to the grassy meadow of Khajjiar (24 km) for horse riding and forest walks, and visit Dainkund Peak, the highest point in Dalhousie. Overnight in Dalhousie.' },
      { day: 3, title: 'Return to Delhi', description: 'After breakfast and last-minute shopping for Chamba handicrafts and rumals, begin the long return drive to Delhi via Pathankot and Ambala, arriving late night.' },
    ],
    relatedRoutes: ['delhi-to-dharamshala', 'delhi-to-mcleodganj', 'delhi-to-amritsar', 'delhi-to-manali'],
  }),

  'delhi-to-moradabad': createRoute({
    slug: 'delhi-to-moradabad',
    origin: 'Delhi',
    destination: 'Moradabad',
    distanceKm: 170,
    duration: '3-4 hours',
    highway: 'NH-9 via Gajraula',
    nightHalt: false,
    bestTime: 'October to March for comfortable sightseeing and shopping weather. Summers (April-June) are hot on the plains.',
    localTip: 'Moradabad is known as Peetal Nagri, the Brass City, and its brass and metal handicraft bazaars are the main draw for shoppers and exporters. The Prince Road and Peeps Colony markets are good places to buy decorative brassware directly.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Moradabad & Back', description: 'Morning departure from Delhi on NH-9 via Gajraula, the 170 km drive takes about 3-4 hours. Spend the day exploring the famous brass handicraft markets, the historic Jama Masjid, and the Sai Temple. Enjoy local sightseeing and shopping before an evening return drive to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-nainital', 'delhi-to-corbett', 'delhi-to-haridwar', 'delhi-to-bareilly'],
  }),

  'delhi-to-aligarh': createRoute({
    slug: 'delhi-to-aligarh',
    origin: 'Delhi',
    destination: 'Aligarh',
    distanceKm: 140,
    duration: '2.5-3 hours',
    highway: 'Yamuna Expressway & NH-34 via Khair',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. The city is on the plains, so avoid the peak summer heat of May and June.',
    localTip: 'Aligarh is famous as the Lock City of India and for the historic Aligarh Muslim University campus, whose Victoria Gate and old buildings are worth a visit. The Aligarh Fort (Aligarh Qila) and the bustling lock and hardware markets round out a day trip.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Aligarh & Back', description: 'Morning departure from Delhi via the Yamuna Expressway and NH-34, the 140 km drive takes about 2.5-3 hours. Explore the Aligarh Muslim University campus, the Aligarh Fort, and Sir Syed academic landmarks. Browse the well-known lock and brassware markets before an evening return to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'delhi-to-mathura', 'delhi-to-vrindavan', 'delhi-to-jaipur'],
  }),

  'delhi-to-rohtak': createRoute({
    slug: 'delhi-to-rohtak',
    origin: 'Delhi',
    destination: 'Rohtak',
    distanceKm: 70,
    duration: '1.5-2 hours',
    highway: 'NH-9 & KMP Expressway via Bahadurgarh',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather, ideal for the lake and outdoor sightseeing.',
    localTip: 'Rohtak is an easy same-day trip from Delhi. Tilyar Lake with its adjoining zoo is the main family attraction, while the Asthal Bohar math and the 1857 memorial add historical interest. The drive via the KMP Expressway is quick and smooth.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Rohtak & Back', description: 'Morning departure from Delhi via NH-9 and the KMP Expressway through Bahadurgarh, the 70 km drive takes about 1.5-2 hours. Visit Tilyar Lake and the mini zoo, the Asthal Bohar Math, and local markets. Enjoy a relaxed day of local sightseeing before returning to Delhi the same evening.' },
    ],
    relatedRoutes: ['delhi-to-chandigarh', 'delhi-to-jaipur', 'delhi-to-neemrana', 'delhi-to-agra'],
  }),

  'delhi-to-leh': createRoute({
    slug: 'delhi-to-leh',
    origin: 'Delhi',
    destination: 'Leh',
    distanceKm: 1010,
    duration: '2-day drive (with overnight halt)',
    highway: 'NH-3 Manali-Leh Highway via Keylong & Sarchu',
    nightHalt: true,
    bestTime: 'The Manali-Leh road is typically open only from mid-May to September or early October. The high passes are closed by snow in winter, so plan strictly within the road season.',
    localTip: 'The Delhi to Leh drive is a serious high-altitude Himalayan journey of about 1010 km, crossing passes above 5000m. It is a two-day drive each way with an overnight halt en route (Keylong or Sarchu). Acclimatise for a day or two after reaching Leh before heading higher, drink plenty of water, and avoid alcohol to reduce altitude sickness. Inner Line Permits are required for Nubra Valley, Pangong Lake and other border areas, so plan permits in advance.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Manali', description: 'Long departure from Delhi to Manali (about 530 km) via Chandigarh and Mandi on NH-3, taking around 12-14 hours. Overnight in Manali to begin acclimatising to altitude.' },
      { day: 2, title: 'Manali to Keylong / Jispa', description: 'Cross the Atal Tunnel and drive over the Lahaul valley to Keylong or Jispa. This shorter high-altitude leg helps the body adjust. Overnight halt in the mountains.' },
      { day: 3, title: 'Keylong to Leh via high passes', description: 'The dramatic drive over Baralacha La, Nakee La, Lachulung La and Tanglang La (over 5000m) across the Moore Plains to Leh. Take it slow and stay hydrated. Overnight rest in Leh to acclimatise fully.' },
      { day: 4, title: 'Leh Local Sightseeing', description: 'A gentle day exploring Leh Palace, Shanti Stupa, Leh Market, Magnetic Hill, the Sangam of the Indus and Zanskar rivers, and Gurudwara Pathar Sahib. Rest to complete acclimatisation before higher excursions.' },
      { day: 5, title: 'Excursions & Return Planning', description: 'With Inner Line Permits arranged, visit Khardung La and the Nubra Valley or Pangong Lake as day or overnight trips, subject to your schedule. Plan the return by the same Manali route or via Srinagar, again as a two-day drive with an overnight halt.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'delhi-to-dharamshala', 'delhi-to-amritsar'],
  }),

  'delhi-to-meerut': createRoute({
    slug: 'delhi-to-meerut',
    origin: 'Delhi',
    destination: 'Meerut',
    distanceKm: 70,
    duration: '1.5-2 hours',
    highway: 'Delhi-Meerut Expressway (NH-34)',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. The Delhi-Meerut Expressway makes this a quick trip any time of year.',
    localTip: 'Meerut is closely tied to the 1857 revolt and the Shaheed Smarak and Augharnath Temple (Kali Paltan Mandir) mark that history. The city is also a major sports-goods and scissors manufacturing hub, and the ancient site of Hastinapur lies nearby for a longer outing.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Meerut & Back', description: 'Morning departure from Delhi on the Delhi-Meerut Expressway, the 70 km drive takes under 2 hours. Visit the Shaheed Smarak, Augharnath Temple, St John\'s Church and the Company Bagh. Explore local sports-goods markets before an evening return to Delhi.' },
    ],
    relatedRoutes: ['delhi-to-haridwar', 'delhi-to-rishikesh', 'delhi-to-nainital', 'delhi-to-mussoorie'],
  }),

  'delhi-to-bareilly': createRoute({
    slug: 'delhi-to-bareilly',
    origin: 'Delhi',
    destination: 'Bareilly',
    distanceKm: 260,
    duration: '5-6 hours',
    highway: 'NH-9',
    nightHalt: true,
    bestTime: 'October to March for comfortable weather. Summers on the plains are hot, so an early start is advisable.',
    localTip: 'Bareilly, the Nath Nagri, is known for its four ancient Nath (Shiva) temples including Alakhnath and Trivati Nath, and the revered Dargah Ala Hazrat. The city is famously referenced for its jhumkas and manjha (kite string), and its bazaars are good for local shopping.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Bareilly', description: 'Morning departure from Delhi on NH-9, the 260 km drive takes about 5-6 hours. Arrive by afternoon and visit the Nath temples and Dargah Ala Hazrat. Evening at leisure exploring the local markets. Overnight in Bareilly.' },
      { day: 2, title: 'Bareilly Sightseeing & Return', description: 'Morning visit to the Bareilly Zoo and remaining temples, followed by shopping for the city\'s famous jhumkas. After lunch, begin the return drive to Delhi, arriving in the evening.' },
    ],
    relatedRoutes: ['delhi-to-nainital', 'delhi-to-corbett', 'delhi-to-lucknow', 'delhi-to-moradabad'],
  }),

  'delhi-to-vrindavan': createRoute({
    slug: 'delhi-to-vrindavan',
    origin: 'Delhi',
    destination: 'Vrindavan',
    distanceKm: 160,
    duration: '3-3.5 hours',
    highway: 'Yamuna Expressway',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. Janmashtami and Holi are special but very crowded times in the Braj region.',
    localTip: 'Vrindavan is the heart of Krishna devotion in the Braj region. Plan darshan around temple timings as Banke Bihari Temple closes in the afternoon. Prem Mandir is beautifully lit after sunset, and the ISKCON temple is known for its serene kirtans.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Vrindavan & Back', description: 'Early morning departure from Delhi via the Yamuna Expressway, the 160 km drive takes about 3-3.5 hours. Visit the Banke Bihari Temple, Prem Mandir, the ISKCON temple, Nidhivan and Radha Raman Temple. Nearby Mathura can be added if time permits. Return to Delhi the same evening after aarti.' },
    ],
    relatedRoutes: ['delhi-to-mathura', 'delhi-to-agra', 'delhi-to-jaipur', 'agra-to-mathura'],
  }),

  'delhi-to-gwalior': createRoute({
    slug: 'delhi-to-gwalior',
    origin: 'Delhi',
    destination: 'Gwalior',
    distanceKm: 320,
    duration: '5-6 hours',
    highway: 'Yamuna Expressway & NH-44 via Agra',
    nightHalt: true,
    bestTime: 'October to March for comfortable sightseeing. The hilltop fort is best explored in the cooler months.',
    localTip: 'Gwalior Fort, one of India\'s most imposing hill forts, dominates the city and the evening sound-and-light show there is worth timing your visit for. Jai Vilas Palace with the Scindia Museum houses a famous silver-train dining piece and grand chandeliers.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Gwalior', description: 'Morning departure from Delhi via the Yamuna Expressway and NH-44 through Agra, the 320 km drive takes about 5-6 hours. Arrive by afternoon and begin with Gwalior Fort, Man Mandir Palace and the Sas-Bahu temples. Attend the evening light-and-sound show. Overnight in Gwalior.' },
      { day: 2, title: 'Gwalior Sightseeing & Return', description: 'Morning visit to Jai Vilas Palace and Scindia Museum, the Tomb of Tansen, Teli ka Mandir and the Sun Temple. After lunch, begin the return drive to Delhi via Agra, arriving late evening.' },
    ],
    relatedRoutes: ['delhi-to-agra', 'delhi-to-jaipur', 'delhi-to-mathura', 'agra-to-jaipur'],
  }),

  'delhi-to-bikaner': createRoute({
    slug: 'delhi-to-bikaner',
    origin: 'Delhi',
    destination: 'Bikaner',
    distanceKm: 450,
    duration: '7-8 hours',
    highway: 'NH-9 / NH-62 via Sikar & Fatehpur',
    nightHalt: true,
    bestTime: 'October to March for cool desert weather. The Bikaner Camel Festival in January is a colourful highlight. Avoid the intense summer heat of April to June.',
    localTip: 'Bikaner is a desert city famous for the beautifully preserved Junagarh Fort, the unique Karni Mata Temple at Deshnoke (the Rat Temple), and the National Research Centre on Camel. Do not miss the city\'s namesake Bikaneri bhujia and sweets.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Bikaner', description: 'Early morning departure from Delhi via NH-9 and NH-62 through Sikar and Fatehpur, the 450 km drive takes about 7-8 hours. Arrive by evening and explore the Rampuria Havelis and local bazaars. Overnight in Bikaner.' },
      { day: 2, title: 'Bikaner Sightseeing', description: 'Full day covering Junagarh Fort, Lalgarh Palace, and the National Research Centre on Camel (open afternoons). Drive to Deshnoke to visit the Karni Mata Rat Temple. Overnight in Bikaner.' },
      { day: 3, title: 'Return to Delhi', description: 'After breakfast and shopping for Bikaneri bhujia and rasgullas, begin the return drive to Delhi via Sikar, arriving late evening.' },
    ],
    relatedRoutes: ['jaipur-to-bikaner', 'delhi-to-jaipur', 'delhi-to-jaisalmer', 'delhi-to-jodhpur'],
  }),

  'delhi-to-kanpur': createRoute({
    slug: 'delhi-to-kanpur',
    origin: 'Delhi',
    destination: 'Kanpur',
    distanceKm: 480,
    duration: '7-8 hours',
    highway: 'Yamuna Expressway & NH-19 via Agra',
    nightHalt: true,
    bestTime: 'October to March for pleasant weather. Summers on the plains are hot and humid.',
    localTip: 'Kanpur is a major industrial city on the Ganga. The JK Temple (Radhakrishna Temple), Allen Forest Zoo and Moti Jheel are popular in the city, while the peaceful Ganga ghats and ashrams of Bithoor, about 20 km away, are a serene half-day add-on.',
    suggestedItinerary: [
      { day: 1, title: 'Delhi to Kanpur', description: 'Early morning departure from Delhi via the Yamuna Expressway and NH-19 through Agra, the 480 km drive takes about 7-8 hours. Arrive by evening and relax. Overnight in Kanpur.' },
      { day: 2, title: 'Kanpur & Bithoor Sightseeing, Return', description: 'Morning visit to the JK Temple, Allen Forest Zoo and Moti Jheel, followed by the Ganga ghats and Valmiki Ashram at Bithoor. After lunch, begin the return drive to Delhi, arriving late night, or extend to add a night for a relaxed pace.' },
    ],
    relatedRoutes: ['delhi-to-lucknow', 'delhi-to-agra', 'lucknow-to-varanasi', 'delhi-to-varanasi'],
  }),

  'dehradun-to-mussoorie': createRoute({
    slug: 'dehradun-to-mussoorie',
    origin: 'Dehradun',
    destination: 'Mussoorie',
    distanceKm: 35,
    duration: '1-1.5 hours',
    highway: 'Mussoorie Road',
    nightHalt: false,
    bestTime: 'March to June for cool summer escape and clear views, and September to November for post-monsoon greenery. Snowfall is possible in December and January.',
    localTip: 'Mussoorie, the Queen of Hills, is just 35 km uphill from Dehradun and makes an easy same-day round trip. Ride the Gun Hill ropeway for valley views, stroll the Mall Road and Camel\'s Back Road, and visit Kempty Falls early to beat the crowds.',
    suggestedItinerary: [
      { day: 1, title: 'Dehradun to Mussoorie & Back', description: 'Morning departure from Dehradun on the winding Mussoorie Road, the 35 km climb takes about 1-1.5 hours. Visit Kempty Falls, take the Gun Hill ropeway, walk the Mall Road and Camel\'s Back Road, and stop at Company Garden and Lal Tibba viewpoint. Return to Dehradun by evening.' },
    ],
    relatedRoutes: ['delhi-to-mussoorie', 'delhi-to-dehradun', 'delhi-to-nainital', 'delhi-to-rishikesh'],
  }),

  'dehradun-to-rishikesh': createRoute({
    slug: 'dehradun-to-rishikesh',
    origin: 'Dehradun',
    destination: 'Rishikesh',
    distanceKm: 45,
    duration: '1-1.5 hours',
    highway: 'NH-7 via Doiwala',
    nightHalt: false,
    bestTime: 'September to November and February to May are ideal. River rafting season typically runs from late September to June, avoiding the monsoon.',
    localTip: 'Rishikesh is the Yoga Capital of the World on the banks of the Ganga, an easy 45 km from Dehradun. Time your visit to catch the evening Ganga Aarti at Triveni Ghat or Parmarth Niketan, and cross the iconic Laxman Jhula and Ram Jhula suspension bridges.',
    suggestedItinerary: [
      { day: 1, title: 'Dehradun to Rishikesh & Back', description: 'Morning departure from Dehradun on NH-7 via Doiwala, the 45 km drive takes about 1-1.5 hours. Visit Laxman Jhula and Ram Jhula, the Beatles Ashram, and Triveni Ghat. Optional white-water rafting in season. Stay for the evening Ganga Aarti before returning to Dehradun.' },
    ],
    relatedRoutes: ['delhi-to-rishikesh', 'delhi-to-haridwar', 'delhi-to-dehradun', 'delhi-to-mussoorie'],
  }),

  'haridwar-to-rishikesh': createRoute({
    slug: 'haridwar-to-rishikesh',
    origin: 'Haridwar',
    destination: 'Rishikesh',
    distanceKm: 25,
    duration: '45 minutes',
    highway: 'NH-7 direct',
    nightHalt: false,
    bestTime: 'September to November and February to May for pleasant weather and the best rafting conditions.',
    localTip: 'Haridwar and Rishikesh are twin holy towns just 25 km apart, easily combined in one day. See the grand evening Ganga Aarti at Har Ki Pauri in Haridwar and the serene aarti at Parmarth Niketan or Triveni Ghat in Rishikesh, with temple visits and rafting in between.',
    suggestedItinerary: [
      { day: 1, title: 'Haridwar to Rishikesh & Back', description: 'Short 25 km drive from Haridwar to Rishikesh on NH-7, about 45 minutes. Explore Laxman Jhula, Ram Jhula and the riverside temples, with optional rafting in season. Return to Haridwar in time for the famous evening Ganga Aarti at Har Ki Pauri.' },
    ],
    relatedRoutes: ['delhi-to-haridwar', 'delhi-to-rishikesh', 'delhi-to-dehradun', 'delhi-to-mussoorie'],
  }),

  'rishikesh-to-dehradun': createRoute({
    slug: 'rishikesh-to-dehradun',
    origin: 'Rishikesh',
    destination: 'Dehradun',
    distanceKm: 45,
    duration: '1-1.5 hours',
    highway: 'NH-7 via Doiwala',
    nightHalt: false,
    bestTime: 'September to November and February to May for pleasant weather across both towns.',
    localTip: 'Dehradun, the Doon Valley capital, is 45 km from Rishikesh and makes a relaxed same-day trip. Robber\'s Cave (Guchhupani) with its stream walk, Sahastradhara sulphur springs, the Forest Research Institute campus, and Tapkeshwar Temple are the main highlights.',
    suggestedItinerary: [
      { day: 1, title: 'Rishikesh to Dehradun & Back', description: 'Morning departure from Rishikesh on NH-7 via Doiwala, the 45 km drive takes about 1-1.5 hours. Visit Robber\'s Cave, Sahastradhara, the Forest Research Institute, Tapkeshwar Temple and Mindrolling Monastery. Return to Rishikesh by evening.' },
    ],
    relatedRoutes: ['delhi-to-dehradun', 'delhi-to-rishikesh', 'delhi-to-mussoorie', 'delhi-to-haridwar'],
  }),

  'jaipur-to-mount-abu': createRoute({
    slug: 'jaipur-to-mount-abu',
    origin: 'Jaipur',
    destination: 'Mount Abu',
    distanceKm: 490,
    duration: '8-9 hours',
    highway: 'NH-48 & NH-27 via Ajmer, Pali & Abu Road',
    nightHalt: true,
    bestTime: 'October to March for pleasant weather, and April to June as a cool escape from the desert heat since Mount Abu is a hill station. The summer festival is held in June.',
    localTip: 'Mount Abu is Rajasthan\'s only hill station, at about 1220m in the Aravallis. The exquisitely carved Dilwara Jain Temples are the highlight (note their strict timings and dress code). Nakki Lake for boating and Guru Shikhar, the highest peak in the range, are must-sees.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Mount Abu', description: 'Early morning departure from Jaipur via NH-48 and NH-27 through Ajmer, Pali and Abu Road, the 490 km drive takes about 8-9 hours. Arrive by evening, relax at Nakki Lake and catch the sunset from Sunset Point. Overnight in Mount Abu.' },
      { day: 2, title: 'Mount Abu Sightseeing', description: 'Full day covering the Dilwara Jain Temples, Guru Shikhar peak, Achalgarh Fort and Achaleshwar Mahadev Temple, and a stroll around Nakki Lake. Overnight in Mount Abu.' },
      { day: 3, title: 'Return to Jaipur', description: 'After breakfast, visit the Adhar Devi Temple or the wildlife sanctuary if time allows, then begin the return drive to Jaipur via Abu Road and Ajmer, arriving late evening.' },
    ],
    relatedRoutes: ['jaipur-to-udaipur', 'jaipur-to-jodhpur', 'delhi-to-mount-abu', 'jaipur-to-pushkar'],
  }),

  'varanasi-to-prayagraj': createRoute({
    slug: 'varanasi-to-prayagraj',
    origin: 'Varanasi',
    destination: 'Prayagraj',
    distanceKm: 125,
    duration: '2.5-3 hours',
    highway: 'NH-19 via Gyanpur',
    nightHalt: false,
    bestTime: 'October to March for pleasant weather. During the Magh Mela and Kumbh, Prayagraj draws enormous crowds at the Sangam.',
    localTip: 'Prayagraj (Allahabad) is best known for the Triveni Sangam, the sacred confluence of the Ganga, Yamuna and the mythical Saraswati, where a boat ride to the meeting point is a moving experience. Anand Bhavan, the Nehru family home, and the Akbar-era Allahabad Fort are also worth visiting.',
    suggestedItinerary: [
      { day: 1, title: 'Varanasi to Prayagraj & Back', description: 'Morning departure from Varanasi on NH-19 via Gyanpur, the 125 km drive takes about 2.5-3 hours. Take a boat to the Triveni Sangam, then visit Anand Bhavan, the Allahabad Fort with Akshayavat, and Khusro Bagh. Return to Varanasi in the evening, or stay for the Ganga Aarti back in Varanasi.' },
    ],
    relatedRoutes: ['lucknow-to-varanasi', 'delhi-to-varanasi', 'delhi-to-ayodhya', 'lucknow-to-ayodhya'],
  }),

  'jaipur-to-manali': createRoute({
    slug: 'jaipur-to-manali',
    origin: 'Jaipur',
    destination: 'Manali',
    distanceKm: 800,
    duration: '15-16 hours',
    highway: 'NH-48 & NH-3 via Chandigarh, Bilaspur & Mandi',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather and snow at Solang and Rohtang, and September to November for clear mountain views. Winter brings heavy snowfall and possible road closures on the high passes.',
    localTip: 'Jaipur to Manali is a long 800 km journey best broken with an overnight halt near Chandigarh or Bilaspur. In Manali, the Hadimba Temple, Solang Valley, Old Manali and the Atal Tunnel to Sissu are the highlights, while Rohtang Pass requires a permit and is weather-dependent.',
    suggestedItinerary: [
      { day: 1, title: 'Jaipur to Chandigarh / Bilaspur', description: 'Early departure from Jaipur via NH-48, driving through Delhi\'s bypass to Chandigarh or onward to Bilaspur. This breaks the long journey into manageable legs. Overnight halt en route.' },
      { day: 2, title: 'To Manali', description: 'Continue on NH-3 via Mandi and Kullu along the Beas river, reaching Manali by afternoon. Relax on Mall Road and explore Old Manali cafes. Overnight in Manali.' },
      { day: 3, title: 'Manali Sightseeing', description: 'Visit the Hadimba Temple, Manu Temple and Vashisht hot springs, then head to Solang Valley for adventure activities and drive through the Atal Tunnel to Sissu. Overnight in Manali.' },
      { day: 4, title: 'Return Journey', description: 'Begin the long return drive toward Jaipur with an overnight halt near Chandigarh, completing the journey the following day. Adjust the pace to your comfort.' },
    ],
    relatedRoutes: ['chandigarh-to-manali', 'delhi-to-manali', 'delhi-to-shimla', 'jaipur-to-udaipur'],
  }),

  'dharamshala-to-manali': createRoute({
    slug: 'dharamshala-to-manali',
    origin: 'Dharamshala',
    destination: 'Manali',
    distanceKm: 230,
    duration: '6-7 hours',
    highway: 'NH-154 & NH-3 via Mandi and Kullu',
    nightHalt: true,
    bestTime: 'March to June and September to November for clear weather and open roads. Winter snow can slow the hill drive between the two valleys.',
    localTip: 'The Dharamshala to Manali drive links the Kangra and Kullu valleys over about 230 km via Mandi, taking 6-7 hours through scenic hill terrain, so an overnight stay in Manali is recommended. In Manali, Hadimba Temple, Solang Valley and the Atal Tunnel are the main draws.',
    suggestedItinerary: [
      { day: 1, title: 'Dharamshala to Manali', description: 'Morning departure from Dharamshala on NH-154 and NH-3 via Mandi and Kullu, the 230 km drive takes about 6-7 hours along the Beas river. Arrive Manali by evening and stroll Mall Road and Old Manali. Overnight in Manali.' },
      { day: 2, title: 'Manali Sightseeing & Return', description: 'Morning visit to the Hadimba Temple, Vashisht hot springs and Solang Valley, with an optional drive through the Atal Tunnel. After lunch, begin the return drive to Dharamshala via Mandi, arriving in the evening.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-dharamshala', 'chandigarh-to-manali', 'delhi-to-mcleodganj'],
  }),

  'kasol-to-chandigarh': createRoute({
    slug: 'kasol-to-chandigarh',
    origin: 'Kasol',
    destination: 'Chandigarh',
    distanceKm: 280,
    duration: '6-7 hours',
    highway: 'NH-3 via Bhuntar, Mandi and Bilaspur',
    nightHalt: true,
    bestTime: 'March to June and September to November for pleasant weather in the Parvati Valley and clear road conditions down to Chandigarh.',
    localTip: 'Kasol sits in the scenic Parvati Valley and is the base for Manikaran Sahib\'s hot springs and the Kheerganga trek. The 280 km drive down to Chandigarh takes 6-7 hours, so an overnight halt is sensible. In Chandigarh, the Rock Garden, Sukhna Lake and Sector 17 are the highlights.',
    suggestedItinerary: [
      { day: 1, title: 'Kasol to Chandigarh', description: 'Morning departure from Kasol, first visiting Manikaran Sahib\'s hot springs and gurudwara nearby. Then drive down NH-3 via Bhuntar, Mandi and Bilaspur, the 280 km route taking about 6-7 hours. Arrive Chandigarh by evening. Overnight in Chandigarh.' },
      { day: 2, title: 'Chandigarh Sightseeing & Return', description: 'Explore the Rock Garden, Sukhna Lake, the Rose Garden and Sector 17 market. After lunch, begin the return drive to Kasol via Mandi and Bhuntar, arriving in the evening.' },
    ],
    relatedRoutes: ['delhi-to-kasol', 'chandigarh-to-manali', 'delhi-to-chandigarh', 'delhi-to-manali'],
  }),

  'mussoorie-to-rishikesh': createRoute({
    slug: 'mussoorie-to-rishikesh',
    origin: 'Mussoorie',
    destination: 'Rishikesh',
    distanceKm: 78,
    duration: '2-2.5 hours',
    highway: 'Via Dehradun',
    nightHalt: false,
    bestTime: 'September to November and February to May for pleasant weather in both the hills and the river town.',
    localTip: 'From the hill station of Mussoorie it is a 78 km downhill drive via Dehradun to Rishikesh, about 2-2.5 hours. Plan to reach Rishikesh by evening for the Ganga Aarti at Parmarth Niketan or Triveni Ghat, and cross the Laxman Jhula and Ram Jhula bridges.',
    suggestedItinerary: [
      { day: 1, title: 'Mussoorie to Rishikesh & Back', description: 'Morning departure from Mussoorie, descending via Dehradun to Rishikesh, the 78 km drive taking about 2-2.5 hours. Explore Laxman Jhula, Ram Jhula, the Beatles Ashram and riverside temples, with optional rafting in season. Stay for the evening Ganga Aarti before returning to Mussoorie.' },
    ],
    relatedRoutes: ['delhi-to-mussoorie', 'delhi-to-rishikesh', 'delhi-to-dehradun', 'delhi-to-haridwar'],
  }),

  'kasol-to-manali': createRoute({
    slug: 'kasol-to-manali',
    origin: 'Kasol',
    destination: 'Manali',
    distanceKm: 75,
    duration: '2.5-3 hours',
    highway: 'Via Bhuntar & Kullu on NH-3',
    nightHalt: false,
    bestTime: 'March to June and September to November for clear weather and open roads through the Kullu valley.',
    localTip: 'Kasol to Manali is a short 75 km hop of about 2.5-3 hours via Bhuntar and Kullu, easily done in a day. On the way you can stop at Kullu for river rafting or shawl shopping. In Manali, the Hadimba Temple, Mall Road and Solang Valley are the main attractions.',
    suggestedItinerary: [
      { day: 1, title: 'Kasol to Manali & Back', description: 'Morning departure from Kasol via Bhuntar and Kullu on NH-3, the 75 km drive taking about 2.5-3 hours along the Beas river. Visit the Hadimba Temple, Manu Temple, Vashisht hot springs and Mall Road, with an optional trip toward Solang Valley. Return to Kasol by evening.' },
    ],
    relatedRoutes: ['delhi-to-kasol', 'delhi-to-manali', 'chandigarh-to-manali', 'delhi-to-shimla'],
  }),

  'shimla-to-manali': createRoute({
    slug: 'shimla-to-manali',
    origin: 'Shimla',
    destination: 'Manali',
    distanceKm: 250,
    duration: '7-8 hours',
    highway: 'NH-3 via Mandi',
    nightHalt: true,
    bestTime: 'March to June and September to November for clear weather and open roads. Winter snow can slow the hill drive, though it adds to the scenery.',
    localTip: 'The Shimla to Manali drive covers about 250 km over 7-8 hours via Sundernagar and Mandi, so an overnight stay in Manali is recommended rather than a same-day return. The Pandoh Dam and the Beas river valley make for scenic stops en route.',
    suggestedItinerary: [
      { day: 1, title: 'Shimla to Manali', description: 'Early morning departure from Shimla on NH-3 via Sundernagar and Mandi, the 250 km drive taking about 7-8 hours through pine-clad hills and along the Beas river. Arrive Manali by evening and stroll Mall Road and Old Manali. Overnight in Manali.' },
      { day: 2, title: 'Manali Sightseeing & Return', description: 'Morning visit to the Hadimba Temple, Vashisht hot springs and Solang Valley. After lunch, begin the return drive to Shimla via Mandi, arriving late evening.' },
    ],
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'chandigarh-to-manali', 'chandigarh-to-shimla'],
  }),

  'dehradun-to-nainital': createRoute({
    slug: 'dehradun-to-nainital',
    origin: 'Dehradun',
    destination: 'Nainital',
    distanceKm: 290,
    duration: '7-8 hours',
    highway: 'Via Haridwar & Haldwani',
    nightHalt: true,
    bestTime: 'March to June as a cool summer escape and September to November for clear lake views. Winter is cold with occasional snow near the higher points.',
    localTip: 'Nainital is a lakeside hill station built around the emerald Naini Lake, about 290 km and 7-8 hours from Dehradun, so an overnight stay is recommended. Boating on Naini Lake, the Snow View ropeway, the Naina Devi Temple and a stroll along the Mall Road are the essentials.',
    suggestedItinerary: [
      { day: 1, title: 'Dehradun to Nainital', description: 'Early morning departure from Dehradun via Haridwar and Haldwani, the 290 km drive taking about 7-8 hours. Arrive Nainital by evening, take a boat ride on Naini Lake and walk the Mall Road. Overnight in Nainital.' },
      { day: 2, title: 'Nainital Sightseeing & Return', description: 'Morning visit to the Naina Devi Temple, the Snow View ropeway, Tiffin Top and Naina Peak, with an optional trip to Bhimtal. After lunch, begin the return drive to Dehradun, arriving late evening.' },
    ],
    relatedRoutes: ['delhi-to-nainital', 'delhi-to-dehradun', 'delhi-to-corbett', 'delhi-to-mussoorie'],
  }),

  'amritsar-to-dharamshala': createRoute({
    slug: 'amritsar-to-dharamshala',
    origin: 'Amritsar',
    destination: 'Dharamshala',
    distanceKm: 200,
    duration: '4-5 hours',
    highway: 'NH-54 via Pathankot',
    nightHalt: true,
    bestTime: 'March to June for pleasant weather and clear Dhauladhar views, and September to November after the monsoon. Snowfall is possible in McLeodganj in December and January.',
    localTip: 'Dharamshala and upper McLeodganj are home to the Dalai Lama and the Tibetan community, about 200 km and 4-5 hours from Amritsar via Pathankot, so an overnight stay is recommended. The Dalai Lama Temple complex, Bhagsu Waterfall and the Triund trek base are the highlights.',
    suggestedItinerary: [
      { day: 1, title: 'Amritsar to Dharamshala', description: 'Morning departure from Amritsar on NH-54 via Pathankot, the 200 km drive taking about 4-5 hours with the Dhauladhar range appearing near Kangra. Arrive McLeodganj by afternoon and explore the lively main square and Bhagsu Road cafes. Overnight in McLeodganj.' },
      { day: 2, title: 'Dharamshala Sightseeing & Return', description: 'Morning visit to the Dalai Lama Temple (Tsuglagkhang Complex), Bhagsu Waterfall, Naddi viewpoint and the HPCA cricket stadium. After lunch, begin the return drive to Amritsar via Pathankot, arriving in the evening.' },
    ],
    relatedRoutes: ['delhi-to-dharamshala', 'delhi-to-mcleodganj', 'delhi-to-amritsar', 'chandigarh-to-mcleodganj'],
  }),
};

// ═══════════════════════════════════════════
// Helper functions for route pages
// ═══════════════════════════════════════════
// Slugify a city display name ("Greater Noida" -> "greater-noida") so it can be
// matched against the _CITY_PLACES geo map in speakable-helpers.
export function cityToGeoSlug(cityName) {
  return String(cityName || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getRoundTripRoute(slug) {
  return roundTripRoutes[slug] || null;
}

export function getAllRoundTripSlugs() {
  return Object.keys(roundTripRoutes);
}

export function getRelatedRoundTripRoutes(slug) {
  const route = roundTripRoutes[slug];
  if (!route) return [];
  return route.relatedRoutes
    .map((rs) => roundTripRoutes[rs])
    .filter(Boolean)
    .slice(0, 6);
}

export function getRoundTripRouteCount() {
  return Object.keys(roundTripRoutes).length;
}
