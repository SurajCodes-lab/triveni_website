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
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-mathura', 'agra-to-jaipur', 'delhi-to-shimla'],
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
    relatedRoutes: ['delhi-to-manali', 'delhi-to-chandigarh', 'delhi-to-mussoorie', 'chandigarh-to-shimla'],
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
    relatedRoutes: ['delhi-to-shimla', 'delhi-to-kasol', 'delhi-to-dharamshala', 'chandigarh-to-manali'],
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
    relatedRoutes: ['delhi-to-rishikesh', 'delhi-to-mussoorie', 'delhi-to-nainital', 'delhi-to-shimla'],
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
    relatedRoutes: ['delhi-to-haridwar', 'delhi-to-mussoorie', 'delhi-to-nainital', 'delhi-to-shimla'],
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
    relatedRoutes: ['delhi-to-shimla', 'delhi-to-manali', 'chandigarh-to-shimla', 'chandigarh-to-manali'],
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
    relatedRoutes: ['delhi-to-chandigarh', 'delhi-to-shimla', 'delhi-to-dharamshala', 'delhi-to-manali'],
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
    relatedRoutes: ['delhi-to-rishikesh', 'delhi-to-haridwar', 'delhi-to-nainital', 'delhi-to-shimla'],
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
    relatedRoutes: ['delhi-to-corbett', 'delhi-to-mussoorie', 'delhi-to-shimla', 'delhi-to-rishikesh'],
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
    relatedRoutes: ['delhi-to-agra', 'delhi-to-jaipur', 'agra-to-jaipur', 'delhi-to-haridwar'],
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
    relatedRoutes: ['delhi-to-nainital', 'delhi-to-rishikesh', 'delhi-to-mussoorie', 'delhi-to-haridwar'],
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
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'delhi-to-dharamshala', 'chandigarh-to-manali'],
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
    relatedRoutes: ['delhi-to-manali', 'delhi-to-shimla', 'delhi-to-amritsar', 'delhi-to-kasol'],
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
    relatedRoutes: ['delhi-to-agra', 'lucknow-to-varanasi', 'lucknow-to-ayodhya', 'delhi-to-mathura'],
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
    relatedRoutes: ['delhi-to-jaipur', 'delhi-to-udaipur', 'jaipur-to-jodhpur', 'jaipur-to-udaipur'],
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
    relatedRoutes: ['chandigarh-to-manali', 'delhi-to-shimla', 'delhi-to-chandigarh', 'delhi-to-manali'],
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
    relatedRoutes: ['chandigarh-to-shimla', 'delhi-to-manali', 'delhi-to-shimla', 'delhi-to-kasol'],
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
    relatedRoutes: ['lucknow-to-ayodhya', 'delhi-to-varanasi', 'delhi-to-agra', 'delhi-to-mathura'],
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
};

// ═══════════════════════════════════════════
// Helper functions for route pages
// ═══════════════════════════════════════════
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
