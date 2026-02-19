// How to Reach City Data
// Comprehensive travel guide data for 20 major Indian destinations

export const howToReachData = {
  delhi: {
    name: 'Delhi',
    slug: 'delhi',
    title: 'How to Reach Delhi - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Delhi by air, train, road and bus. Find the best routes, nearest airports, railway stations, and book affordable cabs.',
    introduction: 'Delhi, the capital city of India, is one of the most well-connected cities in the country. Situated in northern India, Delhi serves as the gateway to popular tourist destinations like Agra, Jaipur, Shimla, and Manali. Whether you are visiting for business, tourism, or pilgrimage, reaching Delhi is convenient from virtually any part of India or the world.',
    distanceFromDelhi: '0 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Indira Gandhi International Airport (DEL)',
      distance: 'Located 16 km from city centre (Connaught Place)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara, GoFirst, AirAsia, and all major international airlines',
      tips: 'Pre-book airport pickup to avoid surge pricing. Terminal 3 handles international and select domestic flights. Terminal 1 serves budget domestic carriers. Metro connects T3 to the city.',
    },
    byTrain: {
      stations: [
        { name: 'New Delhi Railway Station (NDLS)', area: 'Paharganj, Central Delhi' },
        { name: 'Old Delhi Railway Station (DLI)', area: 'Chandni Chowk, Old Delhi' },
        { name: 'Hazrat Nizamuddin (NZM)', area: 'Nizamuddin, South Delhi' },
        { name: 'Anand Vihar Terminal (ANVT)', area: 'East Delhi' },
        { name: 'Delhi Sarai Rohilla (DEE)', area: 'North Delhi' },
      ],
      tips: 'Book Tatkal tickets 1 day before journey at 10 AM. Rajdhani Express connects most major cities. Shatabdi Express is best for day trips to Agra, Jaipur, and Chandigarh.',
    },
    byRoad: {
      highways: [
        { from: 'Jaipur', highway: 'NH48 (Delhi-Jaipur Expressway)', distance: '280 km', time: '4-5 hours' },
        { from: 'Agra', highway: 'Yamuna Expressway / NH44', distance: '230 km', time: '3-4 hours' },
        { from: 'Chandigarh', highway: 'NH44 (Ambala-Delhi)', distance: '250 km', time: '4-5 hours' },
        { from: 'Haridwar', highway: 'NH334 via Meerut', distance: '210 km', time: '4-5 hours' },
        { from: 'Shimla', highway: 'NH44 via Chandigarh', distance: '350 km', time: '7-8 hours' },
        { from: 'Lucknow', highway: 'Agra-Lucknow Expressway + Yamuna Expressway', distance: '500 km', time: '7-8 hours' },
      ],
    },
    byBus: {
      busStands: ['ISBT Kashmere Gate', 'ISBT Anand Vihar', 'Sarai Kale Khan ISBT'],
      operators: ['DTC', 'UPSRTC', 'RSRTC', 'HRTC', 'PEPSU', 'Volvo AC services'],
      tips: 'Volvo buses from Jaipur and Chandigarh are comfortable overnight options. ISBT Kashmere Gate serves routes to Himachal and Uttarakhand. Anand Vihar covers UP and Bihar routes.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - affordable and comfortable for 1-2 people',
      family: 'SUV (Innova/Ertiga) - spacious for 4-6 people with luggage',
      group: 'Tempo Traveller (12-17 seater) - ideal for 8+ people',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/delhi',
      wedding: '/wedding/delhi',
      airport: '/airport-service/delhi',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Delhi from Jaipur?', answer: 'The fastest way is by car via the Delhi-Jaipur Expressway (NH48). The 280 km journey takes 4-5 hours. You can also take a Volvo bus or Shatabdi Express train from Jaipur Junction.' },
      { question: 'How far is Delhi Airport from the city centre?', answer: 'Indira Gandhi International Airport (Terminal 3) is about 16 km from Connaught Place. The Airport Metro Express line connects T3 to New Delhi Railway Station in about 20 minutes.' },
      { question: 'Which is the main railway station in Delhi?', answer: 'New Delhi Railway Station (NDLS) is the main and busiest station, centrally located in Paharganj. However, Hazrat Nizamuddin (NZM) also handles many important trains including Rajdhani services.' },
      { question: 'Can I book a cab from Delhi Airport to my hotel?', answer: 'Yes, you can pre-book an airport pickup with Triveni Cabs. We offer 24/7 airport transfer service from all three IGI Airport terminals to any location in Delhi NCR.' },
      { question: 'What is the best time to visit Delhi?', answer: 'October to March is the best time to visit Delhi when the weather is pleasant with temperatures between 10-25 degrees Celsius. Avoid May-June when temperatures can exceed 45 degrees.' },
    ],
  },

  agra: {
    name: 'Agra',
    slug: 'agra',
    title: 'How to Reach Agra - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Agra by air, train, road and bus. Best routes to the Taj Mahal city, nearest airports, railway stations, and cab booking.',
    introduction: 'Agra, home to the iconic Taj Mahal, is one of India\'s most visited cities. Located in Uttar Pradesh on the banks of the Yamuna River, Agra is well-connected by air, rail, and road. It forms part of the famous Golden Triangle tourist circuit with Delhi and Jaipur, making it easily accessible from multiple major cities.',
    distanceFromDelhi: '230 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Agra Airport / Kheria Airbase (AGR)',
      distance: '12 km from the city centre and Taj Mahal',
      airlines: 'Limited commercial operations. Nearest major airport is Delhi IGI (230 km). Some seasonal flights by IndiGo and SpiceJet.',
      tips: 'Most visitors fly into Delhi IGI Airport and take a car or train to Agra. The drive from Delhi Airport takes 3-4 hours via the Yamuna Expressway. Pre-book a Delhi Airport to Agra taxi for the best rates.',
    },
    byTrain: {
      stations: [
        { name: 'Agra Cantt Railway Station (AGC)', area: 'Cantonment Area, closest to Taj Mahal' },
        { name: 'Agra Fort Railway Station (AF)', area: 'Near Agra Fort, Old City' },
        { name: 'Raja Ki Mandi (RKM)', area: 'City centre, used for local trains' },
      ],
      tips: 'Gatimaan Express from Delhi (Nizamuddin) takes just 1 hour 40 minutes. Shatabdi Express takes about 2 hours. Agra Cantt is the preferred station for tourists visiting the Taj Mahal.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'Yamuna Expressway', distance: '230 km', time: '3-4 hours' },
        { from: 'Jaipur', highway: 'NH21 via Bharatpur', distance: '240 km', time: '4-5 hours' },
        { from: 'Lucknow', highway: 'Agra-Lucknow Expressway', distance: '330 km', time: '4-5 hours' },
        { from: 'Mathura', highway: 'NH44', distance: '58 km', time: '1-1.5 hours' },
        { from: 'Gwalior', highway: 'NH44', distance: '120 km', time: '2-3 hours' },
        { from: 'Varanasi', highway: 'NH19 via Lucknow', distance: '605 km', time: '9-10 hours' },
      ],
    },
    byBus: {
      busStands: ['Idgah Bus Stand', 'ISBT Agra'],
      operators: ['UPSRTC', 'RSRTC', 'Volvo AC services', 'Private operators from Delhi and Jaipur'],
      tips: 'UPSRTC runs regular buses from Delhi ISBT to Agra. The journey takes 4-5 hours via NH44. Volvo AC buses are available from Jaipur and Lucknow.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - perfect for a day trip from Delhi for 1-2 people',
      family: 'SUV (Innova/Ertiga) - comfortable for families with luggage',
      group: 'Tempo Traveller (12-17 seater) - best for large groups visiting Taj Mahal',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/agra',
      wedding: '/wedding/agra',
      airport: '/airport-service/agra',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the fastest way to reach Agra from Delhi?', answer: 'The Gatimaan Express (semi-high-speed train) from Nizamuddin to Agra Cantt takes just 1 hour 40 minutes. By car via the Yamuna Expressway, it takes 3-4 hours covering 230 km.' },
      { question: 'Is there an airport in Agra?', answer: 'Agra has the Kheria Airport (AGR) with limited commercial flights. Most tourists fly into Delhi IGI Airport and take a cab or train to Agra. We offer Delhi Airport to Agra taxi service.' },
      { question: 'How to reach Agra from Jaipur?', answer: 'From Jaipur, drive via NH21 through Bharatpur. The 240 km journey takes 4-5 hours. You can also take a bus from Sindhi Camp Bus Stand in Jaipur to Agra Idgah.' },
      { question: 'Which railway station is closest to Taj Mahal?', answer: 'Agra Cantt Railway Station (AGC) is the closest major station to the Taj Mahal, located about 6 km away. Auto-rickshaws and pre-paid taxis are available outside the station.' },
      { question: 'Can I do a same-day trip to Agra from Delhi?', answer: 'Yes, a same-day Agra tour from Delhi is very popular. Start early by 6 AM, drive via Yamuna Expressway, visit Taj Mahal, Agra Fort, and return by evening. Book a same-day tour with Triveni Cabs.' },
    ],
  },

  jaipur: {
    name: 'Jaipur',
    slug: 'jaipur',
    title: 'How to Reach Jaipur - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Jaipur by air, train, road and bus. Best routes to the Pink City, nearest airport, railway stations, and book cabs.',
    introduction: 'Jaipur, the Pink City and capital of Rajasthan, is a major tourist destination known for its magnificent forts, palaces, and vibrant culture. Part of the Golden Triangle circuit with Delhi and Agra, Jaipur is excellently connected by air, rail, and road, making it accessible from all major Indian cities.',
    distanceFromDelhi: '280 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Jaipur International Airport (JAI)',
      distance: '13 km from the city centre (Hawa Mahal area)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara, GoFirst, AirAsia. International flights to Dubai, Bangkok, Sharjah.',
      tips: 'Jaipur Airport has excellent connectivity with daily flights from Delhi, Mumbai, Kolkata, Bangalore, and Hyderabad. Pre-book airport transfer to avoid inflated taxi rates at the airport.',
    },
    byTrain: {
      stations: [
        { name: 'Jaipur Junction (JP)', area: 'Station Road, Central Jaipur' },
        { name: 'Gandhinagar Jaipur (GADJ)', area: 'Near Vaishali Nagar' },
        { name: 'Durgapura (DPA)', area: 'South Jaipur' },
      ],
      tips: 'Shatabdi Express from Delhi takes about 4.5 hours. Ajmer Shatabdi is convenient for a day trip. Double Decker train from Delhi is also a good option. Jaipur Junction is the main station.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH48 (Delhi-Jaipur Expressway)', distance: '280 km', time: '4-5 hours' },
        { from: 'Agra', highway: 'NH21 via Bharatpur', distance: '240 km', time: '4-5 hours' },
        { from: 'Udaipur', highway: 'NH48', distance: '400 km', time: '6-7 hours' },
        { from: 'Jodhpur', highway: 'NH62', distance: '340 km', time: '5-6 hours' },
        { from: 'Ajmer', highway: 'NH48', distance: '135 km', time: '2-3 hours' },
        { from: 'Chandigarh', highway: 'NH52 via Hisar', distance: '510 km', time: '8-9 hours' },
      ],
    },
    byBus: {
      busStands: ['Sindhi Camp Bus Stand (Central Bus Stand)', 'Narayan Singh Circle ISBT'],
      operators: ['RSRTC (Rajasthan Roadways)', 'DTC', 'UPSRTC', 'Volvo AC services', 'Private operators'],
      tips: 'RSRTC Volvo buses from Delhi run every 30 minutes and take 5-6 hours. Sindhi Camp is the main bus stand. Comfortable sleeper buses are available for overnight journeys from Mumbai and Ahmedabad.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - economical for 1-2 travellers from Delhi',
      family: 'SUV (Innova Crysta) - perfect for families exploring Rajasthan',
      group: 'Tempo Traveller (12-17 seater) - ideal for group sightseeing tours',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/jaipur',
      wedding: '/wedding/jaipur',
      airport: '/airport-service/jaipur',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Jaipur from Delhi?', answer: 'The Delhi-Jaipur Expressway (NH48) is the fastest route, taking 4-5 hours to cover 280 km. You can also take the Shatabdi Express train (4.5 hours) or a Volvo bus from ISBT Kashmere Gate.' },
      { question: 'Does Jaipur have an international airport?', answer: 'Yes, Jaipur International Airport (JAI) handles both domestic and international flights. It has direct connections to Dubai, Bangkok, and Sharjah, plus daily flights to all major Indian cities.' },
      { question: 'How to reach Jaipur from Agra?', answer: 'Drive via NH21 through Bharatpur. The 240 km journey takes 4-5 hours. You can also take a direct bus from Agra Idgah Bus Stand or book a cab for a comfortable journey through the Golden Triangle route.' },
      { question: 'Which is the main railway station in Jaipur?', answer: 'Jaipur Junction (JP) is the main and busiest railway station. It is centrally located and well-connected to all parts of the city via auto-rickshaws, buses, and taxis.' },
      { question: 'Can I hire a cab for a Jaipur sightseeing tour?', answer: 'Yes, Triveni Cabs offers full-day Jaipur sightseeing tours covering Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, and Nahargarh Fort. Book online or call us for the best rates.' },
    ],
  },

  shimla: {
    name: 'Shimla',
    slug: 'shimla',
    title: 'How to Reach Shimla - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Shimla by air, train, road and bus. Best routes to the Queen of Hills, nearest airport, toy train, and cab booking.',
    introduction: 'Shimla, the Queen of Hills and former summer capital of British India, is Himachal Pradesh\'s most popular hill station. Perched at an altitude of 2,205 meters in the foothills of the Himalayas, Shimla attracts tourists year-round with its colonial architecture, scenic beauty, and pleasant climate. The city is well-connected to Delhi, Chandigarh, and other major cities.',
    distanceFromDelhi: '350 km',
    bestTimeToVisit: 'March to June, December to February (snowfall)',
    byAir: {
      airport: 'Shimla Airport / Jubbarhatti Airport (SLV)',
      distance: '23 km from Mall Road, Shimla',
      airlines: 'Alliance Air operates flights from Delhi. Limited connectivity due to short runway and weather conditions.',
      tips: 'Flights to Shimla are often cancelled due to weather. The most reliable option is to fly into Chandigarh Airport (115 km away) and take a cab to Shimla. Pre-book your Chandigarh to Shimla taxi.',
    },
    byTrain: {
      stations: [
        { name: 'Shimla Railway Station (SML)', area: 'Cart Road, central Shimla' },
        { name: 'Kalka Railway Station (KLK)', area: 'Kalka, Haryana (start of toy train)' },
      ],
      tips: 'The UNESCO Heritage Kalka-Shimla Toy Train is a must-experience journey covering 96 km through 102 tunnels and 800+ bridges. Take Shatabdi Express from Delhi to Kalka, then the toy train to Shimla. The toy train takes 5-6 hours.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 via Chandigarh then NH5', distance: '350 km', time: '7-8 hours' },
        { from: 'Chandigarh', highway: 'NH5 via Kalka, Solan', distance: '115 km', time: '3-4 hours' },
        { from: 'Manali', highway: 'NH3 via Mandi, Bilaspur', distance: '250 km', time: '7-8 hours' },
        { from: 'Dharamshala', highway: 'NH154 via Mandi', distance: '235 km', time: '7-8 hours' },
        { from: 'Kullu', highway: 'NH3 via Mandi', distance: '200 km', time: '6-7 hours' },
      ],
    },
    byBus: {
      busStands: ['ISBT Shimla (Rivoli Bus Stand)', 'Old Bus Stand (Lakkar Bazaar)'],
      operators: ['HRTC (Himachal Roadways)', 'HPTDC', 'Volvo AC services from Delhi and Chandigarh'],
      tips: 'HRTC Volvo buses from Delhi ISBT run daily and take 8-9 hours. Buses from Chandigarh ISBT Sector 43 take 4-5 hours. Book HRTC Volvo online for confirmed seats.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - suitable for 1-2 people on mountain roads',
      family: 'SUV (Innova/Ertiga) - recommended for family trips with better hill handling',
      group: 'Tempo Traveller (12-17 seater) - ideal for group trips to Shimla-Manali',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/shimla',
      wedding: '/wedding/shimla',
      airport: '/airport-service/shimla',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Shimla from Delhi?', answer: 'The most comfortable option is to hire a cab from Delhi to Shimla via NH44 and NH5 (350 km, 7-8 hours). Alternatively, take a Shatabdi Express to Kalka and then the UNESCO Heritage Toy Train to Shimla.' },
      { question: 'How long does the Kalka-Shimla toy train take?', answer: 'The Kalka-Shimla narrow gauge railway takes about 5-6 hours to cover 96 km, passing through 102 tunnels and over 800 bridges. It is a UNESCO World Heritage Site and a scenic experience not to be missed.' },
      { question: 'Is there an airport in Shimla?', answer: 'Yes, Shimla has Jubbarhatti Airport (SLV) with limited flights from Delhi by Alliance Air. However, flights are frequently disrupted by weather. Flying to Chandigarh Airport and driving to Shimla is more reliable.' },
      { question: 'Can I drive to Shimla in my own car?', answer: 'Yes, the road from Delhi via Chandigarh to Shimla is well-maintained. However, mountain roads after Kalka require careful driving. Hiring a cab with an experienced hill driver is recommended for a stress-free journey.' },
      { question: 'Which is the best time to see snowfall in Shimla?', answer: 'December to February is the best period for snowfall in Shimla. January usually sees the heaviest snowfall. Book a cab in advance during the snow season as demand is very high.' },
    ],
  },

  manali: {
    name: 'Manali',
    slug: 'manali',
    title: 'How to Reach Manali - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Manali by air, train, road and bus. Best routes, nearest airports, bus services, and book affordable cabs to Manali.',
    introduction: 'Manali, nestled in the Beas River valley of Himachal Pradesh at an altitude of 2,050 meters, is one of India\'s most popular hill stations. Known for its adventure sports, hot springs, and stunning Himalayan landscapes, Manali serves as a gateway to Rohtang Pass, Solang Valley, and Leh-Ladakh. While there is no direct rail or air connectivity, Manali is well-connected by road.',
    distanceFromDelhi: '530 km',
    bestTimeToVisit: 'October to June (avoid monsoon July-September)',
    byAir: {
      airport: 'Bhuntar Airport / Kullu-Manali Airport (KUU)',
      distance: '50 km from Manali (located near Kullu)',
      airlines: 'Alliance Air and IndiGo operate limited flights from Delhi. Weather-dependent operations.',
      tips: 'Bhuntar Airport has a short runway and flights are frequently cancelled due to weather. Flying to Chandigarh Airport (310 km) and driving to Manali is the most reliable option. The drive from Chandigarh takes 7-8 hours.',
    },
    byTrain: {
      stations: [
        { name: 'Joginder Nagar (JDNX)', area: '165 km from Manali (narrow gauge terminus)' },
        { name: 'Chandigarh Railway Station (CDG)', area: '310 km from Manali' },
        { name: 'Ambala Cantt (UMB)', area: '360 km from Manali' },
      ],
      tips: 'There is no direct railway station in Manali. The nearest broad gauge station is Chandigarh. Take a train to Chandigarh and then hire a cab to Manali (7-8 hours drive). Alternatively, Kalka and Ambala are also options.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 to Chandigarh, then NH21 via Mandi', distance: '530 km', time: '11-13 hours' },
        { from: 'Chandigarh', highway: 'NH21 via Bilaspur, Mandi', distance: '310 km', time: '7-8 hours' },
        { from: 'Shimla', highway: 'NH3 via Mandi', distance: '250 km', time: '7-8 hours' },
        { from: 'Dharamshala', highway: 'NH154 via Mandi', distance: '200 km', time: '6-7 hours' },
        { from: 'Kasol', highway: 'NH305 via Bhuntar', distance: '80 km', time: '2-3 hours' },
      ],
    },
    byBus: {
      busStands: ['Manali Bus Stand (Mall Road)', 'HRTC Bus Stand Manali'],
      operators: ['HRTC (Himachal Roadways)', 'HPTDC Volvo', 'DTC Volvo', 'Private operators'],
      tips: 'HRTC and HPTDC run overnight Volvo buses from Delhi ISBT Kashmere Gate (12-14 hours). Buses from Chandigarh ISBT take 8-9 hours. The Volvo semi-sleeper is the most comfortable overnight option.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - economical for 1-2 people, suitable for NH roads',
      family: 'SUV (Innova Crysta) - highly recommended for mountain roads and family comfort',
      group: 'Tempo Traveller (12-17 seater) - best for group trips to Manali and Rohtang',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/manali',
      wedding: '/wedding/manali',
      airport: '/airport-service/manali',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Manali from Delhi?', answer: 'The most popular option is to take an overnight Volvo bus from Delhi ISBT (12-14 hours) or hire a cab (530 km, 11-13 hours). For a comfortable journey, break the trip at Chandigarh with an overnight stay.' },
      { question: 'Is there a direct flight to Manali?', answer: 'The nearest airport is Bhuntar/Kullu-Manali Airport (KUU), 50 km from Manali. Alliance Air and IndiGo operate limited flights from Delhi, but these are weather-dependent. Flying to Chandigarh and driving is more reliable.' },
      { question: 'How long does it take to drive from Delhi to Manali?', answer: 'The 530 km drive from Delhi to Manali takes 11-13 hours depending on traffic and road conditions. The route goes via Chandigarh and Mandi on NH21. Starting early (4-5 AM) is recommended.' },
      { question: 'Can I visit Rohtang Pass from Manali?', answer: 'Yes, Rohtang Pass is 51 km from Manali. You need a permit from the Manali SDM office. The pass is open from May to October. Hire an SUV for the trip as road conditions can be challenging.' },
      { question: 'Is it safe to drive to Manali in monsoon?', answer: 'The monsoon season (July-September) brings heavy rainfall and frequent landslides on the Delhi-Manali highway, especially near Mandi and Kullu. It is advisable to avoid road travel during peak monsoon. If you must travel, hire an experienced hill driver.' },
    ],
  },

  haridwar: {
    name: 'Haridwar',
    slug: 'haridwar',
    title: 'How to Reach Haridwar - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Haridwar by air, train, road and bus. Routes to the holy city, nearest airport, railway station, and cab booking.',
    introduction: 'Haridwar, one of the seven holiest places in Hinduism, sits at the foothills of the Himalayas where the Ganges enters the plains. Located in Uttarakhand, Haridwar is a gateway to the Char Dham pilgrimage and attracts millions of devotees annually for the Ganga Aarti at Har Ki Pauri. The city is well-connected by rail and road from Delhi and other major cities.',
    distanceFromDelhi: '210 km',
    bestTimeToVisit: 'February to June, September to November',
    byAir: {
      airport: 'Jolly Grant Airport, Dehradun (DED)',
      distance: '35 km from Haridwar',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara operate from Dehradun. Daily flights from Delhi, Mumbai, Bangalore, Hyderabad.',
      tips: 'Jolly Grant Airport in Dehradun is the nearest airport. Pre-book a taxi from Dehradun Airport to Haridwar (35 km, 45 minutes). Delhi IGI Airport is 210 km away with direct cab service available.',
    },
    byTrain: {
      stations: [
        { name: 'Haridwar Junction (HW)', area: 'Central Haridwar, near Har Ki Pauri' },
      ],
      tips: 'Haridwar Junction is well-connected to Delhi, Mumbai, Kolkata, and other cities. Shatabdi Express from Delhi takes about 4.5 hours. Jan Shatabdi is a budget-friendly option. Book tickets early during festival seasons like Kumbh Mela and Kanwar Yatra.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH334 via Meerut, Roorkee', distance: '210 km', time: '4-5 hours' },
        { from: 'Rishikesh', highway: 'NH7', distance: '25 km', time: '30-45 minutes' },
        { from: 'Dehradun', highway: 'NH7 via Rishikesh', distance: '55 km', time: '1.5-2 hours' },
        { from: 'Chandigarh', highway: 'NH72A via Yamunanagar', distance: '210 km', time: '5-6 hours' },
        { from: 'Jaipur', highway: 'NH48 to Delhi, then NH334', distance: '490 km', time: '9-10 hours' },
      ],
    },
    byBus: {
      busStands: ['Haridwar ISBT', 'Roadways Bus Stand'],
      operators: ['Uttarakhand Roadways (UTC)', 'UPSRTC', 'DTC', 'HRTC', 'Volvo services'],
      tips: 'Regular buses run from Delhi ISBT Kashmere Gate to Haridwar (4-5 hours). Uttarakhand Roadways runs frequent services. During Kanwar Yatra season, special buses and cab services are available.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - comfortable for Delhi-Haridwar for 1-2 people',
      family: 'SUV (Innova/Ertiga) - ideal for family pilgrimages with luggage',
      group: 'Tempo Traveller (12-17 seater) - perfect for group pilgrimages and Char Dham trips',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/haridwar',
      wedding: '/wedding/haridwar',
      airport: '/airport-service/haridwar',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Haridwar from Delhi?', answer: 'By car via NH334 through Meerut and Roorkee (210 km, 4-5 hours) is the most convenient option. You can also take the Shatabdi Express train (4.5 hours) or UPSRTC/UTC bus from Delhi ISBT.' },
      { question: 'Which airport is nearest to Haridwar?', answer: 'Jolly Grant Airport in Dehradun (DED) is the nearest airport, located 35 km from Haridwar. It has daily flights from Delhi, Mumbai, Bangalore, and other cities. Pre-book a taxi for the airport transfer.' },
      { question: 'How to reach Haridwar from Rishikesh?', answer: 'Haridwar is just 25 km from Rishikesh via NH7. The drive takes 30-45 minutes. Shared autos, buses, and taxis are readily available between the two holy cities.' },
      { question: 'Is Haridwar well-connected by train?', answer: 'Yes, Haridwar Junction (HW) is well-connected with direct trains from Delhi, Mumbai, Kolkata, Lucknow, Ahmedabad, and many other cities. Shatabdi, Rajdhani, and Jan Shatabdi trains run frequently from Delhi.' },
      { question: 'Can I book a cab from Haridwar for Char Dham Yatra?', answer: 'Yes, Triveni Cabs offers Char Dham Yatra packages from Haridwar covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Both SUVs and Tempo Travellers are available with experienced hill drivers.' },
    ],
  },

  rishikesh: {
    name: 'Rishikesh',
    slug: 'rishikesh',
    title: 'How to Reach Rishikesh - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Rishikesh by air, train, road and bus. Routes to the Yoga Capital, nearest airport, railway station, and cab booking.',
    introduction: 'Rishikesh, known as the Yoga Capital of the World, is a spiritual and adventure hub on the banks of the Ganges in Uttarakhand. Famous for its ashrams, white-water rafting, bungee jumping, and the iconic Ram Jhula and Laxman Jhula, Rishikesh attracts both spiritual seekers and adventure enthusiasts from around the globe.',
    distanceFromDelhi: '230 km',
    bestTimeToVisit: 'September to June (rafting season: September to May)',
    byAir: {
      airport: 'Jolly Grant Airport, Dehradun (DED)',
      distance: '20 km from Rishikesh',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara with daily flights from Delhi, Mumbai, Bangalore.',
      tips: 'Jolly Grant Airport in Dehradun is just 20 km from Rishikesh (30-40 minutes drive). Pre-book your airport transfer for a hassle-free arrival. Delhi IGI Airport is 230 km away.',
    },
    byTrain: {
      stations: [
        { name: 'Rishikesh Railway Station (RKSH)', area: 'Central Rishikesh' },
        { name: 'Haridwar Junction (HW)', area: '25 km from Rishikesh' },
      ],
      tips: 'Rishikesh station has limited trains. Most trains stop at Haridwar Junction which has better connectivity. Take a train to Haridwar and then a 30-minute cab ride to Rishikesh.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH334 via Meerut then NH7', distance: '230 km', time: '5-6 hours' },
        { from: 'Haridwar', highway: 'NH7', distance: '25 km', time: '30-45 minutes' },
        { from: 'Dehradun', highway: 'NH7', distance: '45 km', time: '1-1.5 hours' },
        { from: 'Mussoorie', highway: 'via Dehradun', distance: '70 km', time: '2-3 hours' },
        { from: 'Chandigarh', highway: 'NH72A via Haridwar', distance: '235 km', time: '5-6 hours' },
      ],
    },
    byBus: {
      busStands: ['Rishikesh Bus Stand (ISBT)', 'Yatra Bus Stand (for Char Dham buses)'],
      operators: ['Uttarakhand Roadways (UTC)', 'UPSRTC', 'DTC', 'Volvo services'],
      tips: 'Buses from Delhi ISBT take 5-6 hours. UTC runs regular services. During Char Dham season, special buses run from Rishikesh to Badrinath and Kedarnath.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - perfect for a weekend getaway for 1-2 people',
      family: 'SUV (Innova/Ertiga) - great for families planning rafting and sightseeing',
      group: 'Tempo Traveller (12-17 seater) - best for group adventure trips',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/rishikesh',
      wedding: '/wedding/rishikesh',
      airport: '/airport-service/rishikesh',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Rishikesh from Delhi?', answer: 'Hire a cab from Delhi to Rishikesh via NH334 (230 km, 5-6 hours). You can also take a train to Haridwar and then a 30-minute cab ride to Rishikesh. Overnight Volvo buses are also available.' },
      { question: 'Which is the nearest airport to Rishikesh?', answer: 'Jolly Grant Airport in Dehradun is just 20 km from Rishikesh with daily flights from Delhi, Mumbai, and Bangalore. The airport transfer takes about 30-40 minutes.' },
      { question: 'Is there a direct train to Rishikesh?', answer: 'Rishikesh has a small railway station (RKSH) with limited trains. Most visitors take a train to Haridwar Junction (HW), which has excellent connectivity, and then drive 25 km to Rishikesh.' },
      { question: 'How to reach Rishikesh for white-water rafting?', answer: 'Rafting camps are located between Shivpuri and Rishikesh (16-36 km upstream). Reach Rishikesh by road or train and then take a cab to your rafting starting point. Most rafting operators arrange pickup from Rishikesh town.' },
      { question: 'Can I book a cab from Rishikesh to Kedarnath?', answer: 'Yes, Triveni Cabs provides cab service from Rishikesh to Kedarnath base camp (Gaurikund/Sonprayag). The drive covers about 220 km and takes 7-8 hours. SUVs are recommended for the mountain roads.' },
    ],
  },

  varanasi: {
    name: 'Varanasi',
    slug: 'varanasi',
    title: 'How to Reach Varanasi - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Varanasi by air, train, road and bus. Routes to the spiritual capital, nearest airport, railway station, and cab booking.',
    introduction: 'Varanasi (Banaras), one of the oldest continuously inhabited cities in the world, is the spiritual capital of India. Situated on the banks of the sacred Ganges in Uttar Pradesh, Varanasi is famous for its ancient ghats, evening Ganga Aarti, Kashi Vishwanath Temple, and silk weaving. The city is well-connected by air, rail, and road.',
    distanceFromDelhi: '810 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Lal Bahadur Shastri International Airport (VNS)',
      distance: '26 km from city centre (Godowlia area)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara, AirAsia. International flights to Bangkok, Colombo via Delhi connection.',
      tips: 'Varanasi Airport has good domestic connectivity with daily flights from Delhi (1.5 hours), Mumbai (2 hours), Bangalore, and Kolkata. Pre-book airport transfer to avoid inflated auto-rickshaw fares.',
    },
    byTrain: {
      stations: [
        { name: 'Varanasi Junction / Varanasi Cantt (BSB)', area: 'Cantonment area' },
        { name: 'Manduadih Railway Station (MUV)', area: 'Manduadih, near Cantt' },
        { name: 'Mughal Sarai / Pt. Deen Dayal Upadhyaya Jn (DDU)', area: '17 km from Varanasi' },
      ],
      tips: 'Varanasi Junction (BSB) is the main station closest to the ghats. Rajdhani Express from Delhi takes about 11-12 hours. Vande Bharat Express is now available on the Delhi-Varanasi route and takes about 8 hours. DDU Junction is a major transit hub.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH19 (Grand Trunk Road) via Lucknow, Allahabad', distance: '810 km', time: '13-15 hours' },
        { from: 'Lucknow', highway: 'NH31 via Sultanpur', distance: '300 km', time: '5-6 hours' },
        { from: 'Prayagraj', highway: 'NH19', distance: '120 km', time: '2-3 hours' },
        { from: 'Ayodhya', highway: 'NH233 via Jaunpur', distance: '210 km', time: '4-5 hours' },
        { from: 'Bodh Gaya', highway: 'NH2 via Sasaram', distance: '250 km', time: '5-6 hours' },
      ],
    },
    byBus: {
      busStands: ['Varanasi ISBT (Cantt Bus Stand)', 'Lanka Bus Stand'],
      operators: ['UPSRTC', 'Bihar State Road Transport', 'Private Volvo operators from Delhi and Lucknow'],
      tips: 'UPSRTC runs regular buses from Lucknow (5-6 hours) and Prayagraj (2-3 hours). Overnight sleeper buses from Delhi take 13-15 hours. Taking a train or flight is recommended over bus for the Delhi-Varanasi route.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - suitable for local Varanasi sightseeing',
      family: 'SUV (Innova/Ertiga) - comfortable for family pilgrimages',
      group: 'Tempo Traveller (12-17 seater) - ideal for group religious tours covering Varanasi, Prayagraj, Ayodhya',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/varanasi',
      wedding: '/wedding/varanasi',
      airport: '/airport-service/varanasi',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Varanasi from Delhi?', answer: 'The fastest option is a flight from Delhi to Varanasi (1.5 hours). The Vande Bharat Express train takes about 8 hours. By car via NH19, the 810 km journey takes 13-15 hours and is recommended only with an overnight break.' },
      { question: 'Which airport serves Varanasi?', answer: 'Lal Bahadur Shastri International Airport (VNS) serves Varanasi, located 26 km from the city centre. It has daily flights from Delhi, Mumbai, Kolkata, Bangalore, and other major cities.' },
      { question: 'How to reach Varanasi from Prayagraj?', answer: 'Varanasi is just 120 km from Prayagraj via NH19. The drive takes 2-3 hours. Frequent trains and buses also connect the two cities. Hire a cab for a comfortable day trip between the cities.' },
      { question: 'Which railway station should I use in Varanasi?', answer: 'Varanasi Junction (BSB) is the main station and closest to the ghats and old city. Pt. Deen Dayal Upadhyaya Junction (DDU), 17 km away, is also used by many trains including Rajdhani Express.' },
      { question: 'Can I book a cab for Varanasi-Ayodhya-Prayagraj trip?', answer: 'Yes, Triveni Cabs offers multi-city pilgrimage packages covering Varanasi, Ayodhya, and Prayagraj. The combined trip can be done in 3-4 days with comfortable cab service and experienced drivers.' },
    ],
  },

  udaipur: {
    name: 'Udaipur',
    slug: 'udaipur',
    title: 'How to Reach Udaipur - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Udaipur by air, train, road and bus. Routes to the City of Lakes, nearest airport, railway station, and cab booking.',
    introduction: 'Udaipur, the City of Lakes and Venice of the East, is one of Rajasthan\'s most romantic destinations. Surrounded by the Aravalli Hills, Udaipur is famous for the Lake Palace, City Palace, and its stunning lakeside setting. Well-connected by air, rail, and road, Udaipur is a must-visit on any Rajasthan itinerary.',
    distanceFromDelhi: '660 km',
    bestTimeToVisit: 'September to March',
    byAir: {
      airport: 'Maharana Pratap Airport / Dabok Airport (UDR)',
      distance: '22 km from city centre (City Palace area)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara. Daily flights from Delhi (1.5 hours), Mumbai (1.5 hours), Jaipur (45 minutes).',
      tips: 'Udaipur Airport has excellent domestic connectivity. Pre-book airport transfer for a comfortable ride to your lakeside hotel. Flight from Delhi takes only 1.5 hours compared to 10+ hours by road.',
    },
    byTrain: {
      stations: [
        { name: 'Udaipur City Railway Station (UDZ)', area: 'Near city centre, Udai Pol' },
      ],
      tips: 'Udaipur is connected to Delhi via Mewar Express (12 hours overnight) and Chetak Express. AC Superfast trains run from Mumbai, Jaipur, and Ahmedabad. Udaipur City (UDZ) is the main station.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH48 via Jaipur', distance: '660 km', time: '10-11 hours' },
        { from: 'Jaipur', highway: 'NH48 via Ajmer, Chittorgarh', distance: '400 km', time: '6-7 hours' },
        { from: 'Jodhpur', highway: 'NH62 via Pali, Ranakpur', distance: '250 km', time: '4-5 hours' },
        { from: 'Ahmedabad', highway: 'NH48', distance: '260 km', time: '4-5 hours' },
        { from: 'Mount Abu', highway: 'NH8', distance: '165 km', time: '3-4 hours' },
        { from: 'Chittorgarh', highway: 'NH76', distance: '115 km', time: '2-3 hours' },
      ],
    },
    byBus: {
      busStands: ['Udaipur UIT Bus Stand (Main)', 'Sukhadia Circle Bus Stand'],
      operators: ['RSRTC (Rajasthan Roadways)', 'Gujarat SRTU', 'Private Volvo operators'],
      tips: 'RSRTC Volvo buses from Delhi run overnight (12-14 hours). Regular buses from Jaipur take 7-8 hours. The Jaipur-Udaipur route has comfortable AC bus options via RSRTC.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - great for a romantic couple getaway',
      family: 'SUV (Innova Crysta) - spacious for family Rajasthan tours',
      group: 'Tempo Traveller (12-17 seater) - perfect for group trips covering Udaipur, Jodhpur, Jaisalmer',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/udaipur',
      wedding: '/wedding/udaipur',
      airport: '/airport-service/udaipur',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Udaipur from Delhi?', answer: 'Flying is the fastest option - Delhi to Udaipur flights take just 1.5 hours. By car via NH48 through Jaipur, the 660 km journey takes 10-11 hours. The overnight Mewar Express train takes 12 hours.' },
      { question: 'Does Udaipur have an airport?', answer: 'Yes, Maharana Pratap Airport (UDR) at Dabok is 22 km from the city. It has daily flights to Delhi, Mumbai, Jaipur, and other cities operated by IndiGo, SpiceJet, Air India, and Vistara.' },
      { question: 'How to reach Udaipur from Jaipur?', answer: 'Drive via NH48 through Ajmer and Chittorgarh (400 km, 6-7 hours). You can also take RSRTC buses (7-8 hours) or trains like the Mewar Express. Hiring a cab gives you the flexibility to stop at Chittorgarh Fort.' },
      { question: 'Is there a direct train from Delhi to Udaipur?', answer: 'Yes, the Mewar Express (12963) runs daily from Hazrat Nizamuddin to Udaipur City station. The overnight journey takes about 12 hours. Chetak Express is another option from Delhi Sarai Rohilla.' },
      { question: 'Can I hire a cab for a Rajasthan circuit tour from Udaipur?', answer: 'Yes, Triveni Cabs offers Rajasthan circuit tours starting from Udaipur covering Jodhpur, Jaisalmer, Jaipur, and back. Both sedan and SUV options are available with experienced drivers.' },
    ],
  },

  amritsar: {
    name: 'Amritsar',
    slug: 'amritsar',
    title: 'How to Reach Amritsar - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Amritsar by air, train, road and bus. Routes to the Golden Temple city, nearest airport, railway station, and cab booking.',
    introduction: 'Amritsar, the spiritual and cultural centre of Sikhism, is home to the magnificent Golden Temple (Sri Harmandir Sahib). Located in Punjab near the Indo-Pakistan border, Amritsar is also known for the Wagah Border ceremony, Jallianwala Bagh, and its legendary street food. The city has excellent connectivity by air, rail, and road.',
    distanceFromDelhi: '450 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Sri Guru Ram Dass Jee International Airport (ATQ)',
      distance: '11 km from the Golden Temple',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara, GoFirst. International flights to UK, Canada, Dubai, Singapore.',
      tips: 'Amritsar Airport has excellent international connectivity especially to UK and Canada. Daily domestic flights from Delhi (1 hour), Mumbai (2 hours). Pre-book airport transfer to the Golden Temple area.',
    },
    byTrain: {
      stations: [
        { name: 'Amritsar Junction (ASR)', area: 'Central city, 2 km from Golden Temple' },
      ],
      tips: 'Shatabdi Express from Delhi takes about 6 hours. Swarna Shatabdi is the fastest train. Amritsar Junction is well-connected with direct trains from Delhi, Mumbai, Kolkata, Chennai, and Bangalore.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 via Karnal, Jalandhar', distance: '450 km', time: '7-8 hours' },
        { from: 'Chandigarh', highway: 'NH44 via Ludhiana, Jalandhar', distance: '230 km', time: '4-5 hours' },
        { from: 'Dharamshala', highway: 'NH154 via Pathankot', distance: '200 km', time: '4-5 hours' },
        { from: 'Jammu', highway: 'NH44', distance: '220 km', time: '4-5 hours' },
        { from: 'Wagah Border', highway: 'GT Road', distance: '28 km', time: '45 minutes' },
      ],
    },
    byBus: {
      busStands: ['Amritsar ISBT (GT Road)', 'Private Bus Stand (Hall Gate)'],
      operators: ['PEPSU (Punjab Roadways)', 'PRTC', 'DTC', 'HRTC', 'Private Volvo operators'],
      tips: 'PEPSU and PRTC Volvo buses from Delhi ISBT run daily (7-8 hours). Buses from Chandigarh take 4-5 hours. The Delhi-Amritsar route has frequent Volvo and sleeper bus services.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - comfortable for 1-2 pilgrims',
      family: 'SUV (Innova/Ertiga) - ideal for family pilgrimages',
      group: 'Tempo Traveller (12-17 seater) - perfect for group visits to Golden Temple and Wagah Border',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/amritsar',
      wedding: '/wedding/amritsar',
      airport: '/airport-service/amritsar',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Amritsar from Delhi?', answer: 'Flying is the fastest - Delhi to Amritsar flights take just 1 hour. By car via NH44, the 450 km journey takes 7-8 hours. Swarna Shatabdi Express train takes about 6 hours from New Delhi station.' },
      { question: 'Does Amritsar have an international airport?', answer: 'Yes, Sri Guru Ram Dass Jee International Airport (ATQ) has direct flights to London, Birmingham, Toronto, Dubai, Singapore, and major Indian cities. It is one of the best-connected airports in North India.' },
      { question: 'How far is the Golden Temple from the railway station?', answer: 'Amritsar Junction is just 2 km from the Golden Temple. You can easily walk, take an auto-rickshaw, or book a cab to reach Sri Harmandir Sahib from the station.' },
      { question: 'Can I visit Wagah Border from Amritsar?', answer: 'Yes, the Wagah Border is just 28 km from Amritsar (45 minutes drive). The flag lowering ceremony happens every evening before sunset. Book a cab early as the ceremony timings change seasonally.' },
      { question: 'Is it safe to drive from Delhi to Amritsar?', answer: 'Yes, NH44 (Delhi-Amritsar) is a well-maintained 4-lane highway. The 450 km drive takes 7-8 hours with good dhabas (roadside restaurants) along the way. Hiring a cab is recommended to avoid driving fatigue.' },
    ],
  },

  chandigarh: {
    name: 'Chandigarh',
    slug: 'chandigarh',
    title: 'How to Reach Chandigarh - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Chandigarh by air, train, road and bus. Routes to the City Beautiful, nearest airport, railway station, and cab booking.',
    introduction: 'Chandigarh, the City Beautiful, serves as the joint capital of Punjab and Haryana. Designed by the legendary architect Le Corbusier, this planned city is known for its clean roads, Rock Garden, and Sukhna Lake. Chandigarh is also the gateway to popular hill stations like Shimla, Manali, and Dharamshala, making it an important transit hub for Himachal Pradesh tourism.',
    distanceFromDelhi: '250 km',
    bestTimeToVisit: 'September to November, February to April',
    byAir: {
      airport: 'Chandigarh International Airport (IXC)',
      distance: '12 km from city centre (Sector 17)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara, GoFirst. Flights from Delhi (1 hour), Mumbai, Bangalore, Hyderabad.',
      tips: 'Chandigarh Airport has expanded with a new international terminal. It is also the nearest airport for Shimla, Manali, and other Himachal destinations. Pre-book your taxi for onward hill station journeys.',
    },
    byTrain: {
      stations: [
        { name: 'Chandigarh Railway Station (CDG)', area: 'Sector 17, Central Chandigarh' },
      ],
      tips: 'Shatabdi Express from Delhi takes about 3-3.5 hours. Jan Shatabdi and other trains run frequently. Chandigarh station is centrally located and well-connected to all major Indian cities.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 via Panipat, Karnal, Ambala', distance: '250 km', time: '4-5 hours' },
        { from: 'Shimla', highway: 'NH5 via Solan, Kalka', distance: '115 km', time: '3-4 hours' },
        { from: 'Manali', highway: 'NH21 via Mandi, Bilaspur', distance: '310 km', time: '7-8 hours' },
        { from: 'Amritsar', highway: 'NH44 via Ludhiana, Jalandhar', distance: '230 km', time: '4-5 hours' },
        { from: 'Dharamshala', highway: 'NH154 via Una', distance: '240 km', time: '5-6 hours' },
      ],
    },
    byBus: {
      busStands: ['ISBT Chandigarh (Sector 43)', 'Sector 17 Bus Stand'],
      operators: ['CTU (Chandigarh Transport)', 'HRTC', 'PEPSU (Punjab Roadways)', 'Haryana Roadways', 'Volvo services'],
      tips: 'ISBT Sector 43 has buses to Shimla, Manali, Delhi, and all Himachal destinations. HRTC Volvo buses to Shimla run every 30 minutes. Delhi Volvo buses take 4-5 hours.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - ideal for Delhi-Chandigarh for 1-2 people',
      family: 'SUV (Innova/Ertiga) - perfect for families heading to hill stations',
      group: 'Tempo Traveller (12-17 seater) - best for group trips to Shimla, Manali, Kasol',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/chandigarh',
      wedding: '/wedding/chandigarh',
      airport: '/airport-service/chandigarh',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Chandigarh from Delhi?', answer: 'The most convenient option is driving via NH44 (250 km, 4-5 hours). Shatabdi Express train takes just 3-3.5 hours from New Delhi station. Volvo buses from Delhi ISBT take about 5 hours.' },
      { question: 'Is Chandigarh Airport international?', answer: 'Yes, Chandigarh International Airport (IXC) has a new international terminal. It handles domestic flights to Delhi, Mumbai, Bangalore, and some international routes. It is also the nearest reliable airport for Shimla and Manali.' },
      { question: 'How to reach Shimla from Chandigarh?', answer: 'Drive via NH5 through Kalka and Solan (115 km, 3-4 hours). HRTC Volvo buses run every 30 minutes from ISBT Sector 43. You can also take the famous Kalka-Shimla Toy Train from Kalka (40 km from Chandigarh).' },
      { question: 'Can I hire a cab from Chandigarh to Manali?', answer: 'Yes, Triveni Cabs offers Chandigarh to Manali cab service. The 310 km journey via Mandi takes 7-8 hours. Both sedan and SUV options are available with experienced hill drivers.' },
      { question: 'Where is the main bus stand in Chandigarh?', answer: 'The main Inter-State Bus Terminal (ISBT) is in Sector 43. It has buses to all major cities including Delhi, Shimla, Manali, Amritsar, and Dharamshala. Sector 17 also has a smaller bus stand for local routes.' },
    ],
  },

  dehradun: {
    name: 'Dehradun',
    slug: 'dehradun',
    title: 'How to Reach Dehradun - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Dehradun by air, train, road and bus. Routes to the gateway of Uttarakhand, airport, railway station, and cab booking.',
    introduction: 'Dehradun, the capital of Uttarakhand, is nestled in the Doon Valley between the Himalayas and the Shivalik range. Known for its prestigious educational institutions, pleasant climate, and proximity to Mussoorie, Rishikesh, and Haridwar, Dehradun serves as the primary gateway to Uttarakhand\'s hill stations and pilgrimage centres.',
    distanceFromDelhi: '260 km',
    bestTimeToVisit: 'March to June, September to November',
    byAir: {
      airport: 'Jolly Grant Airport (DED)',
      distance: '30 km from Dehradun city centre (Clock Tower)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara. Daily flights from Delhi (1 hour), Mumbai, Bangalore, Hyderabad.',
      tips: 'Jolly Grant Airport serves Dehradun, Rishikesh (20 km), Haridwar (35 km), and Mussoorie (60 km). Pre-book your airport transfer for onward journeys to any of these destinations.',
    },
    byTrain: {
      stations: [
        { name: 'Dehradun Railway Station (DDN)', area: 'Central Dehradun, near Clock Tower' },
      ],
      tips: 'Shatabdi Express from Delhi takes about 5.5 hours. Nanda Devi Express runs overnight from Delhi. Jan Shatabdi is a budget option. Dehradun is the northern terminus of several important train routes.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 via Meerut then NH307 via Roorkee', distance: '260 km', time: '5-6 hours' },
        { from: 'Mussoorie', highway: 'Mussoorie Road', distance: '35 km', time: '1-1.5 hours' },
        { from: 'Rishikesh', highway: 'NH7', distance: '45 km', time: '1-1.5 hours' },
        { from: 'Haridwar', highway: 'NH7 via Rishikesh', distance: '55 km', time: '1.5-2 hours' },
        { from: 'Chandigarh', highway: 'NH72 via Paonta Sahib', distance: '170 km', time: '4-5 hours' },
      ],
    },
    byBus: {
      busStands: ['ISBT Dehradun (Rispana)', 'Parade Ground Bus Stand'],
      operators: ['Uttarakhand Roadways (UTC)', 'UPSRTC', 'DTC', 'Volvo services'],
      tips: 'UTC and DTC run frequent buses from Delhi ISBT to Dehradun (5-6 hours). Volvo buses are comfortable for overnight journeys. From Dehradun ISBT, buses run regularly to Mussoorie, Rishikesh, and Haridwar.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - suitable for Delhi-Dehradun for 1-2 people',
      family: 'SUV (Innova/Ertiga) - recommended for families visiting Mussoorie and Rishikesh',
      group: 'Tempo Traveller (12-17 seater) - ideal for groups covering Dehradun, Mussoorie, Rishikesh, Haridwar circuit',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/dehradun',
      wedding: '/wedding/dehradun',
      airport: '/airport-service/dehradun',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Dehradun from Delhi?', answer: 'Hire a cab via NH44 and NH307 (260 km, 5-6 hours). Shatabdi Express train takes 5.5 hours from New Delhi. Flights from Delhi take just 1 hour to Jolly Grant Airport.' },
      { question: 'How far is Dehradun Airport from the city?', answer: 'Jolly Grant Airport (DED) is 30 km from Dehradun city centre. The drive takes about 45 minutes. The airport also serves Rishikesh (20 km) and Haridwar (35 km).' },
      { question: 'How to reach Mussoorie from Dehradun?', answer: 'Mussoorie is just 35 km from Dehradun via the scenic Mussoorie Road. The drive takes 1-1.5 hours through beautiful mountain curves. Shared taxis, buses, and private cabs are all available.' },
      { question: 'Is there a direct train from Delhi to Dehradun?', answer: 'Yes, Shatabdi Express (daily) and Nanda Devi Express (overnight) run from New Delhi to Dehradun. Shatabdi reaches in about 5.5 hours. Jan Shatabdi is a budget alternative.' },
      { question: 'Can I hire a cab in Dehradun for Char Dham Yatra?', answer: 'Yes, Triveni Cabs provides Char Dham Yatra packages from Dehradun. The complete pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath takes 10-12 days. SUVs and Tempo Travellers available.' },
    ],
  },

  mussoorie: {
    name: 'Mussoorie',
    slug: 'mussoorie',
    title: 'How to Reach Mussoorie - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Mussoorie by air, train, road and bus. Routes to the Queen of Hills, nearest airport, railway station, and cab booking.',
    introduction: 'Mussoorie, the Queen of Hills, is a charming hill station in the Garhwal Himalayan range of Uttarakhand. At an altitude of 2,005 meters, Mussoorie offers breathtaking views of the Shivalik range and the Doon Valley. Known for its colonial-era charm, Kempty Falls, and Gun Hill, it is one of the most popular weekend getaways from Delhi.',
    distanceFromDelhi: '290 km',
    bestTimeToVisit: 'March to June, September to November',
    byAir: {
      airport: 'Jolly Grant Airport, Dehradun (DED)',
      distance: '60 km from Mussoorie (via Dehradun)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara. Daily flights from Delhi, Mumbai, Bangalore.',
      tips: 'Fly to Dehradun Jolly Grant Airport and take a cab to Mussoorie (60 km, 1.5-2 hours). Pre-book your airport to Mussoorie transfer for a seamless hill station experience.',
    },
    byTrain: {
      stations: [
        { name: 'Dehradun Railway Station (DDN)', area: '35 km from Mussoorie' },
      ],
      tips: 'There is no railway station in Mussoorie. The nearest station is Dehradun (35 km, 1-1.5 hours drive). Take a Shatabdi Express from Delhi to Dehradun and then a cab to Mussoorie.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 via Meerut, then via Dehradun', distance: '290 km', time: '6-7 hours' },
        { from: 'Dehradun', highway: 'Mussoorie Road via Rajpur', distance: '35 km', time: '1-1.5 hours' },
        { from: 'Rishikesh', highway: 'via Dehradun', distance: '70 km', time: '2-3 hours' },
        { from: 'Haridwar', highway: 'via Dehradun', distance: '80 km', time: '2.5-3 hours' },
        { from: 'Chandigarh', highway: 'via Dehradun', distance: '200 km', time: '5-6 hours' },
      ],
    },
    byBus: {
      busStands: ['Mussoorie Bus Stand (Library Chowk)', 'Picture Palace Bus Stand'],
      operators: ['Uttarakhand Roadways (UTC)', 'UPSRTC', 'Private operators from Delhi and Dehradun'],
      tips: 'UTC runs direct buses from Delhi ISBT to Mussoorie during peak season. Regular buses from Dehradun run every 30 minutes and take about 1.5 hours. During peak season, roads can be congested.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - fine for 1-2 people on Mussoorie roads',
      family: 'SUV (Innova/Ertiga) - better for mountain roads with family',
      group: 'Tempo Traveller (12-17 seater) - perfect for group outings to Mussoorie and nearby attractions',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/mussoorie',
      wedding: '/wedding/mussoorie',
      airport: '/airport-service/mussoorie',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Mussoorie from Delhi?', answer: 'Hire a cab from Delhi to Mussoorie via Meerut and Dehradun (290 km, 6-7 hours). Alternatively, fly or take a Shatabdi Express to Dehradun and then a 35 km cab ride to Mussoorie.' },
      { question: 'Is there an airport or railway station in Mussoorie?', answer: 'No, Mussoorie does not have its own airport or railway station. The nearest airport is Jolly Grant (60 km) and the nearest railway station is Dehradun (35 km).' },
      { question: 'How long does it take to drive from Dehradun to Mussoorie?', answer: 'The 35 km drive from Dehradun to Mussoorie takes 1-1.5 hours via the scenic Mussoorie Road. During peak tourist season and weekends, it can take longer due to traffic congestion.' },
      { question: 'Can I visit Mussoorie as a day trip from Dehradun?', answer: 'Yes, Mussoorie is perfect for a day trip from Dehradun. Start early, visit Kempty Falls, Mall Road, Gun Hill, and Company Garden, and return by evening. Book a local sightseeing cab for the day.' },
      { question: 'Which is the best season to visit Mussoorie?', answer: 'March to June is ideal for pleasant weather and summer escapes. September to November offers clear skies and beautiful views. December to February brings cold weather with occasional snowfall, popular among snow seekers.' },
    ],
  },

  nainital: {
    name: 'Nainital',
    slug: 'nainital',
    title: 'How to Reach Nainital - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Nainital by air, train, road and bus. Routes to the Lake District, nearest airport, railway station, and cab booking.',
    introduction: 'Nainital, the Lake District of India, is a charming hill station in the Kumaon foothills of Uttarakhand. Built around the beautiful Naini Lake and surrounded by seven hills, Nainital has been a favourite summer retreat since the British era. Known for its scenic beauty, boating, Naina Devi Temple, and panoramic views from Snow View Point, it attracts tourists throughout the year.',
    distanceFromDelhi: '300 km',
    bestTimeToVisit: 'March to June, September to November',
    byAir: {
      airport: 'Pantnagar Airport (PGH)',
      distance: '70 km from Nainital',
      airlines: 'Alliance Air operates limited flights from Delhi (seasonal).',
      tips: 'Pantnagar Airport has very limited flights. The most reliable option is to fly to Delhi or Dehradun and drive to Nainital. From Pantnagar, a cab to Nainital takes about 1.5-2 hours.',
    },
    byTrain: {
      stations: [
        { name: 'Kathgodam Railway Station (KGM)', area: '35 km from Nainital (nearest broad gauge)' },
        { name: 'Haldwani', area: '40 km from Nainital' },
      ],
      tips: 'Kathgodam is the nearest railhead to Nainital. Ranikhet Express and Uttar Sampark Kranti Express run from Delhi overnight. From Kathgodam, hire a cab for the scenic 35 km hill drive to Nainital (1-1.5 hours).',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH9 via Hapur, Moradabad, Haldwani', distance: '300 km', time: '6-7 hours' },
        { from: 'Kathgodam', highway: 'NH109 via Bhimtal', distance: '35 km', time: '1-1.5 hours' },
        { from: 'Dehradun', highway: 'via Haridwar, Ramnagar', distance: '280 km', time: '7-8 hours' },
        { from: 'Lucknow', highway: 'NH730 via Bareilly', distance: '370 km', time: '7-8 hours' },
        { from: 'Almora', highway: 'NH109', distance: '65 km', time: '2-3 hours' },
      ],
    },
    byBus: {
      busStands: ['Nainital Bus Stand (Tallital)', 'Haldwani ISBT (40 km)'],
      operators: ['Uttarakhand Roadways (UTC)', 'UPSRTC', 'DTC', 'Volvo services from Delhi'],
      tips: 'UTC and UPSRTC buses from Delhi ISBT to Haldwani/Nainital take 6-8 hours. Volvo buses are available during peak season. From Haldwani, shared taxis and UTC buses run to Nainital frequently.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - suitable for 1-2 people for the hill drive',
      family: 'SUV (Innova/Ertiga) - recommended for families with comfortable hill handling',
      group: 'Tempo Traveller (12-17 seater) - perfect for group trips to Nainital and surrounding lakes',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/nainital',
      wedding: '/wedding/nainital',
      airport: '/airport-service/nainital',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Nainital from Delhi?', answer: 'Hire a cab from Delhi via NH9 through Moradabad and Haldwani (300 km, 6-7 hours). Alternatively, take an overnight train to Kathgodam and then a 35 km cab ride up the hills to Nainital.' },
      { question: 'Which is the nearest railway station to Nainital?', answer: 'Kathgodam (KGM) is the nearest railway station, 35 km from Nainital. It is connected to Delhi by Ranikhet Express and other trains. From Kathgodam, the scenic uphill drive to Nainital takes 1-1.5 hours.' },
      { question: 'Is there an airport near Nainital?', answer: 'Pantnagar Airport (PGH) is 70 km from Nainital with limited flights from Delhi. For reliable air connectivity, fly to Delhi and drive 300 km to Nainital, or fly to Dehradun and drive 280 km.' },
      { question: 'How difficult is the road to Nainital?', answer: 'The road from Delhi to Haldwani is flat highway. After Haldwani, the 35 km hill road has curves but is well-maintained. An experienced hill driver is recommended for first-time visitors to the Kumaon hills.' },
      { question: 'Can I visit Bhimtal and Sattal from Nainital?', answer: 'Yes, Bhimtal (22 km) and Sattal (23 km) are beautiful lake towns near Nainital. Book a local sightseeing cab for a day trip covering Bhimtal, Sattal, and Naukuchiatal - the cluster of scenic lakes in Kumaon.' },
    ],
  },

  jodhpur: {
    name: 'Jodhpur',
    slug: 'jodhpur',
    title: 'How to Reach Jodhpur - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Jodhpur by air, train, road and bus. Routes to the Blue City, nearest airport, railway station, and cab booking.',
    introduction: 'Jodhpur, the Blue City and Sun City of India, is Rajasthan\'s second largest city and a former princely state capital. Dominated by the mighty Mehrangarh Fort perched on a rocky hilltop, Jodhpur is known for its blue-painted houses, Umaid Bhawan Palace, and spicy Rajasthani cuisine. It serves as a gateway to the Thar Desert and the western Rajasthan circuit.',
    distanceFromDelhi: '600 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Jodhpur Airport (JDH)',
      distance: '5 km from city centre (Mehrangarh Fort area)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara. Daily flights from Delhi (1.5 hours), Mumbai (2 hours), Jaipur (45 min).',
      tips: 'Jodhpur Airport is conveniently located close to the city centre. Daily flights from Delhi and Mumbai make it easily accessible. Pre-book airport transfer to your heritage hotel in the old city.',
    },
    byTrain: {
      stations: [
        { name: 'Jodhpur Junction (JU)', area: 'Central city, near Sojati Gate' },
      ],
      tips: 'Mandore Express from Delhi takes about 10-11 hours overnight. Suryanagari Express from Mumbai takes 15 hours. Jodhpur Junction is the main station and centrally located.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH48 via Jaipur then NH62', distance: '600 km', time: '9-10 hours' },
        { from: 'Jaipur', highway: 'NH62 via Ajmer, Beawar', distance: '340 km', time: '5-6 hours' },
        { from: 'Udaipur', highway: 'NH62 via Pali, Ranakpur', distance: '250 km', time: '4-5 hours' },
        { from: 'Jaisalmer', highway: 'NH15', distance: '285 km', time: '5-6 hours' },
        { from: 'Ahmedabad', highway: 'NH62', distance: '310 km', time: '5-6 hours' },
      ],
    },
    byBus: {
      busStands: ['Jodhpur Central Bus Stand (Paota)', 'Raika Bagh Bus Stand'],
      operators: ['RSRTC (Rajasthan Roadways)', 'Private Volvo operators from Delhi, Jaipur, Ahmedabad'],
      tips: 'RSRTC Volvo buses from Jaipur take 5-6 hours. Overnight buses from Delhi take 10-12 hours. Sleeper buses from Mumbai and Ahmedabad also available.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - comfortable for exploring the Blue City',
      family: 'SUV (Innova Crysta) - ideal for Rajasthan circuit tours',
      group: 'Tempo Traveller (12-17 seater) - perfect for group desert safaris and fort tours',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/jodhpur',
      wedding: '/wedding/jodhpur',
      airport: '/airport-service/jodhpur',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Jodhpur from Delhi?', answer: 'Flying is the fastest - Delhi to Jodhpur flights take just 1.5 hours. By car via Jaipur and NH62, the 600 km journey takes 9-10 hours. The Mandore Express overnight train takes 10-11 hours.' },
      { question: 'Does Jodhpur have an airport?', answer: 'Yes, Jodhpur Airport (JDH) is just 5 km from the city centre with daily flights from Delhi, Mumbai, and Jaipur operated by IndiGo, SpiceJet, Air India, and Vistara.' },
      { question: 'How to reach Jodhpur from Jaipur?', answer: 'Drive via NH62 through Ajmer and Beawar (340 km, 5-6 hours). RSRTC buses take 5-6 hours. Trains are also available with the Intercity Express being a popular option.' },
      { question: 'Can I visit Jaisalmer from Jodhpur?', answer: 'Yes, Jaisalmer is 285 km from Jodhpur via NH15 (5-6 hours drive). Book a cab for the Jodhpur-Jaisalmer journey with a stop at Osian temple on the way.' },
      { question: 'Is it worth renting a cab for a Rajasthan tour from Jodhpur?', answer: 'Absolutely. Jodhpur is an ideal starting point for a western Rajasthan circuit covering Jaisalmer, Mount Abu, Udaipur, and Pushkar. Hiring a cab gives you flexibility to explore at your own pace.' },
    ],
  },

  jaisalmer: {
    name: 'Jaisalmer',
    slug: 'jaisalmer',
    title: 'How to Reach Jaisalmer - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Jaisalmer by air, train, road and bus. Routes to the Golden City, nearest airport, railway station, and cab booking.',
    introduction: 'Jaisalmer, the Golden City, rises like a mirage from the Thar Desert in western Rajasthan. Known for its stunning sandstone fort (Sonar Quila), beautiful havelis, and mesmerizing sand dunes of Sam and Khuri, Jaisalmer is a must-visit destination on any Rajasthan trip. Despite its remote location, the city is accessible by air, rail, and road.',
    distanceFromDelhi: '780 km',
    bestTimeToVisit: 'October to March (Desert Festival in February)',
    byAir: {
      airport: 'Jaisalmer Airport (JSA)',
      distance: '17 km from city centre (Fort area)',
      airlines: 'IndiGo operates daily flights from Delhi and Mumbai (seasonal). Limited connectivity.',
      tips: 'Jaisalmer Airport has limited flights. Flying to Jodhpur (285 km) and driving to Jaisalmer is a more reliable option with better flight frequency. The Jodhpur-Jaisalmer drive takes 5-6 hours.',
    },
    byTrain: {
      stations: [
        { name: 'Jaisalmer Railway Station (JSM)', area: 'Near the Fort, central city' },
      ],
      tips: 'Delhi-Jaisalmer Express runs daily and takes about 18 hours. The Jodhpur-Jaisalmer train takes 5-6 hours. The train journey through the Thar Desert is scenic, especially at sunrise.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH48 via Jaipur, Jodhpur then NH15', distance: '780 km', time: '12-14 hours' },
        { from: 'Jodhpur', highway: 'NH15 via Pokhran', distance: '285 km', time: '5-6 hours' },
        { from: 'Jaipur', highway: 'NH62 via Jodhpur', distance: '560 km', time: '9-10 hours' },
        { from: 'Udaipur', highway: 'via Jodhpur', distance: '530 km', time: '9-10 hours' },
        { from: 'Bikaner', highway: 'NH15', distance: '330 km', time: '5-6 hours' },
      ],
    },
    byBus: {
      busStands: ['Jaisalmer Bus Stand (Hanuman Circle)'],
      operators: ['RSRTC (Rajasthan Roadways)', 'Private operators from Jodhpur and Jaipur'],
      tips: 'RSRTC runs overnight buses from Jaipur (10-12 hours) and Jodhpur (5-6 hours). Booking in advance is recommended during peak tourist season (October-March) and the Desert Festival.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - adequate for highway travel to Jaisalmer',
      family: 'SUV (Innova Crysta/Thar) - recommended for desert exploration and sand dunes',
      group: 'Tempo Traveller (12-17 seater) - ideal for group desert safaris and camping',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/jaisalmer',
      wedding: '/wedding/jaisalmer',
      airport: '/airport-service/jaisalmer',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Jaisalmer from Delhi?', answer: 'Fly to Jodhpur (1.5 hours from Delhi) and drive 285 km to Jaisalmer (5-6 hours). The Delhi-Jaisalmer Express train takes 18 hours overnight. By car from Delhi, the 780 km journey takes 12-14 hours.' },
      { question: 'Is there an airport in Jaisalmer?', answer: 'Yes, Jaisalmer has an airport (JSA) with IndiGo operating flights from Delhi and Mumbai, though services are seasonal and limited. Flying to Jodhpur and driving is more reliable.' },
      { question: 'How to reach the Sam Sand Dunes from Jaisalmer?', answer: 'Sam Sand Dunes are 42 km from Jaisalmer city (about 1 hour drive). Hire a cab or join a desert safari package that includes transport, camel ride, and overnight camping under the stars.' },
      { question: 'How far is Jaisalmer from Jodhpur?', answer: 'Jaisalmer is 285 km from Jodhpur via NH15 through Pokhran. The drive takes 5-6 hours on a well-maintained highway. Trains between the two cities take about 5-6 hours.' },
      { question: 'When is the best time to visit Jaisalmer?', answer: 'October to March is the best time when desert temperatures are pleasant (15-25 degrees). The Jaisalmer Desert Festival in February is a highlight. Avoid April-August when temperatures can exceed 45 degrees.' },
    ],
  },

  dharamshala: {
    name: 'Dharamshala',
    slug: 'dharamshala',
    title: 'How to Reach Dharamshala - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Dharamshala by air, train, road and bus. Routes to the Dalai Lama residence, nearest airport, railway station, and cab booking.',
    introduction: 'Dharamshala, the winter capital of Himachal Pradesh, is best known as the home of His Holiness the Dalai Lama and the Tibetan government-in-exile. Nestled in the Kangra Valley at the edge of the Himalayas, Dharamshala (and its upper division McLeodganj) offers stunning mountain views, Tibetan culture, cricket stadiums, and trekking opportunities. Despite its mountain location, it is reasonably well-connected.',
    distanceFromDelhi: '480 km',
    bestTimeToVisit: 'March to June, September to November',
    byAir: {
      airport: 'Gaggal Airport / Kangra Airport (DHM)',
      distance: '15 km from Dharamshala, 22 km from McLeodganj',
      airlines: 'Air India, IndiGo, SpiceJet. Flights from Delhi (seasonal), Chandigarh.',
      tips: 'Gaggal Airport has limited flights that are weather-dependent. Flying to Amritsar (200 km) or Chandigarh (240 km) and driving to Dharamshala is more reliable. Pre-book your transfer for the hill drive.',
    },
    byTrain: {
      stations: [
        { name: 'Pathankot Cantt (PKTC)', area: '85 km from Dharamshala' },
        { name: 'Kangra Mandir (KGMR)', area: '18 km from Dharamshala (narrow gauge)' },
      ],
      tips: 'Pathankot is the nearest major railhead (85 km, 2-3 hours drive). Take a train from Delhi to Pathankot and then hire a cab. The Kangra Valley narrow gauge railway from Pathankot is scenic but slow (5-6 hours).',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 to Jalandhar then NH154', distance: '480 km', time: '9-10 hours' },
        { from: 'Chandigarh', highway: 'NH154 via Una, Amb', distance: '240 km', time: '5-6 hours' },
        { from: 'Amritsar', highway: 'NH154 via Pathankot', distance: '200 km', time: '4-5 hours' },
        { from: 'Manali', highway: 'via Mandi, Jogindernagar', distance: '200 km', time: '6-7 hours' },
        { from: 'Shimla', highway: 'NH154 via Mandi', distance: '235 km', time: '7-8 hours' },
      ],
    },
    byBus: {
      busStands: ['Dharamshala Bus Stand', 'McLeodganj Bus Stand'],
      operators: ['HRTC (Himachal Roadways)', 'PEPSU', 'DTC Volvo', 'Private operators'],
      tips: 'HRTC runs overnight Volvo buses from Delhi ISBT (10-12 hours). Buses from Chandigarh take 6-7 hours. The Dharamshala-McLeodganj minibus runs frequently (20 minutes journey).',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - economical for 1-2 travellers',
      family: 'SUV (Innova/Ertiga) - recommended for families on mountain roads',
      group: 'Tempo Traveller (12-17 seater) - ideal for group spiritual retreats and treks',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/dharamshala',
      wedding: '/wedding/dharamshala',
      airport: '/airport-service/dharamshala',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Dharamshala from Delhi?', answer: 'The most comfortable option is hiring a cab (480 km, 9-10 hours via NH44 and NH154). You can also take an overnight Volvo bus from Delhi ISBT or fly to Gaggal Airport (weather-permitting). Flying to Amritsar and driving is a reliable alternative.' },
      { question: 'Is there an airport in Dharamshala?', answer: 'Gaggal Airport (DHM) is 15 km from Dharamshala with flights from Delhi and Chandigarh. However, flights are seasonal and weather-dependent. Amritsar (200 km) and Chandigarh (240 km) airports are more reliable alternatives.' },
      { question: 'How to reach McLeodganj from Dharamshala?', answer: 'McLeodganj is the upper part of Dharamshala, just 9 km away (20-30 minutes drive). Frequent shared taxis and minibuses run between Dharamshala Bus Stand and McLeodganj throughout the day.' },
      { question: 'Which railway station is nearest to Dharamshala?', answer: 'Pathankot Cantt (PKTC) is the nearest major station, 85 km away (2-3 hours drive). It is well-connected with trains from Delhi, Mumbai, and other cities. The Kangra Valley narrow gauge from Pathankot is a scenic alternative.' },
      { question: 'Can I book a cab to Dharamshala for Triund Trek?', answer: 'Yes, Triveni Cabs provides cab service to Dharamshala/McLeodganj. The Triund Trek starts from McLeodganj. We can arrange pickup, drop, and local sightseeing covering Bhagsu Waterfall, Namgyal Monastery, and the cricket stadium.' },
    ],
  },

  kasol: {
    name: 'Kasol',
    slug: 'kasol',
    title: 'How to Reach Kasol - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Kasol by air, train, road and bus. Routes to Mini Israel of India, nearest airport, and book affordable cabs to Kasol.',
    introduction: 'Kasol, often called the Mini Israel of India, is a picturesque hamlet in the Parvati Valley of Himachal Pradesh. Situated along the banks of the Parvati River at 1,640 meters, Kasol is a backpacker paradise known for its stunning natural beauty, trekking trails to Kheerganga and Malana, and vibrant cafe culture. Being a small village, Kasol has no direct air or rail connectivity.',
    distanceFromDelhi: '520 km',
    bestTimeToVisit: 'March to June, September to November',
    byAir: {
      airport: 'Bhuntar Airport / Kullu-Manali Airport (KUU)',
      distance: '30 km from Kasol',
      airlines: 'Alliance Air, IndiGo from Delhi. Weather-dependent operations.',
      tips: 'Bhuntar Airport is the nearest airport, 30 km from Kasol (1 hour drive). Flights are unreliable due to weather. Flying to Chandigarh Airport (280 km) and driving to Kasol is the most reliable option.',
    },
    byTrain: {
      stations: [
        { name: 'Joginder Nagar (JDNX)', area: '140 km from Kasol (narrow gauge)' },
        { name: 'Chandigarh Railway Station (CDG)', area: '280 km from Kasol' },
        { name: 'Ambala Cantt (UMB)', area: '330 km from Kasol' },
      ],
      tips: 'There is no direct rail connectivity to Kasol. Take a train to Chandigarh or Ambala and then hire a cab for the scenic drive through Mandi and Bhuntar to Kasol.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'NH44 to Chandigarh, NH21 via Mandi, Bhuntar', distance: '520 km', time: '11-13 hours' },
        { from: 'Chandigarh', highway: 'NH21 via Mandi, Bhuntar', distance: '280 km', time: '7-8 hours' },
        { from: 'Manali', highway: 'NH305 via Bhuntar', distance: '80 km', time: '2-3 hours' },
        { from: 'Bhuntar', highway: 'Parvati Valley Road', distance: '30 km', time: '1 hour' },
        { from: 'Kullu', highway: 'via Bhuntar', distance: '40 km', time: '1-1.5 hours' },
      ],
    },
    byBus: {
      busStands: ['Kasol Bus Stand (small)', 'Bhuntar Bus Stand (30 km, main interchange)'],
      operators: ['HRTC (Himachal Roadways)', 'Private buses from Delhi and Chandigarh'],
      tips: 'HRTC runs buses from Delhi to Bhuntar/Manali. Get off at Bhuntar and take a local bus or taxi to Kasol (30 km, 1 hour). Some private operators run direct Delhi-Kasol buses during peak season.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - suitable for the highway portion, manageable on Parvati Valley roads',
      family: 'SUV (Innova/Ertiga) - recommended for mountain roads with better ground clearance',
      group: 'Tempo Traveller (12-17 seater) - perfect for group trips to Kasol, Manali circuit',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/kasol',
      wedding: '/wedding/kasol',
      airport: '/airport-service/kasol',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Kasol from Delhi?', answer: 'Hire a cab from Delhi to Kasol via Chandigarh and Mandi (520 km, 11-13 hours). You can also take an overnight bus to Bhuntar and then a local taxi to Kasol. Breaking the journey at Chandigarh overnight makes the trip more comfortable.' },
      { question: 'Is there an airport or railway station near Kasol?', answer: 'The nearest airport is Bhuntar/Kullu-Manali (KUU), 30 km away, with limited flights. The nearest railway stations are Chandigarh (280 km) and Ambala (330 km). Road is the primary way to reach Kasol.' },
      { question: 'How to reach Kasol from Manali?', answer: 'Kasol is 80 km from Manali via Bhuntar. The scenic drive through the Kullu-Parvati valleys takes 2-3 hours. Local buses and taxis are available from Manali Bus Stand.' },
      { question: 'Is the road to Kasol safe?', answer: 'The road from Bhuntar to Kasol along the Parvati Valley is narrow in places but well-maintained. During monsoon (July-September), landslides can occur. Hiring a local driver familiar with the roads is recommended.' },
      { question: 'Can I book a cab for the Kasol-Kheerganga trek?', answer: 'Triveni Cabs can drop you at Barshaini (15 km from Kasol), the starting point of the Kheerganga trek. The trek is 12 km one way. We can arrange pickup after your trek as well.' },
    ],
  },

  ayodhya: {
    name: 'Ayodhya',
    slug: 'ayodhya',
    title: 'How to Reach Ayodhya - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Ayodhya by air, train, road and bus. Routes to Ram Mandir, nearest airport, railway station, and cab booking.',
    introduction: 'Ayodhya, the birthplace of Lord Ram, is one of the holiest cities in Hinduism. Located on the banks of the Saryu River in Uttar Pradesh, Ayodhya has witnessed a massive transformation with the construction of the grand Ram Mandir (inaugurated January 2024). The city now has a brand new international airport and improved rail connectivity, making it easier than ever to visit.',
    distanceFromDelhi: '640 km',
    bestTimeToVisit: 'October to March (Ram Navami in March/April is special)',
    byAir: {
      airport: 'Maharishi Valmiki International Airport, Ayodhya (AYJ)',
      distance: '8 km from Ram Mandir',
      airlines: 'IndiGo, Air India, SpiceJet, Akasa Air. Daily flights from Delhi (1.5 hours), Mumbai (2.5 hours), Ahmedabad, Bangalore.',
      tips: 'The new Ayodhya Airport (AYJ) opened in 2024 and has rapidly expanding connectivity. Direct flights from Delhi, Mumbai, and many other cities. Pre-book airport transfer to Ram Mandir for a hassle-free darshan.',
    },
    byTrain: {
      stations: [
        { name: 'Ayodhya Junction (AY)', area: 'Central Ayodhya, near Saryu River' },
        { name: 'Ayodhya Cantt (AYC)', area: '3 km from the city centre' },
        { name: 'Faizabad Junction (FD)', area: '7 km from Ayodhya (twin city)' },
      ],
      tips: 'Ayodhya Junction and Faizabad Junction are well-connected to Lucknow, Delhi, and Varanasi. New trains have been added post Ram Mandir inauguration. The Ayodhya-Delhi Vande Bharat is under consideration. Currently, take a train to Lucknow and hire a cab.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'Lucknow-Agra Expressway then NH27', distance: '640 km', time: '10-11 hours' },
        { from: 'Lucknow', highway: 'NH27 via Barabanki', distance: '135 km', time: '2.5-3 hours' },
        { from: 'Varanasi', highway: 'NH233 via Jaunpur', distance: '210 km', time: '4-5 hours' },
        { from: 'Prayagraj', highway: 'NH96', distance: '160 km', time: '3-4 hours' },
        { from: 'Agra', highway: 'Agra-Lucknow Expressway then NH27', distance: '465 km', time: '7-8 hours' },
      ],
    },
    byBus: {
      busStands: ['Ayodhya Bus Stand', 'Faizabad Bus Stand (7 km)'],
      operators: ['UPSRTC', 'Private AC buses from Lucknow, Varanasi, Delhi'],
      tips: 'UPSRTC runs frequent buses from Lucknow to Ayodhya/Faizabad (2.5-3 hours). From Delhi, overnight AC sleeper buses take 10-12 hours. New bus services have been added post Ram Mandir inauguration.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - perfect for a pilgrimage for 1-2 devotees',
      family: 'SUV (Innova/Ertiga) - comfortable for family pilgrimages',
      group: 'Tempo Traveller (12-17 seater) - ideal for group pilgrimages covering Ayodhya, Varanasi, Prayagraj',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/ayodhya',
      wedding: '/wedding/ayodhya',
      airport: '/airport-service/ayodhya',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'How to reach Ayodhya for Ram Mandir darshan?', answer: 'The easiest way is to fly directly to the new Ayodhya Airport (AYJ) from Delhi (1.5 hours), Mumbai, or other cities. You can also drive from Lucknow (135 km, 2.5-3 hours) or take a UPSRTC bus.' },
      { question: 'Does Ayodhya have an airport?', answer: 'Yes, Maharishi Valmiki International Airport (AYJ) opened in 2024 with growing connectivity. IndiGo, Air India, SpiceJet, and Akasa Air operate daily flights from Delhi, Mumbai, Ahmedabad, and other cities.' },
      { question: 'How far is Ayodhya from Lucknow?', answer: 'Ayodhya is just 135 km from Lucknow via NH27 (2.5-3 hours drive). Many pilgrims fly to Lucknow and hire a cab to Ayodhya. We offer Lucknow to Ayodhya cab service with experienced drivers.' },
      { question: 'Can I visit Ayodhya and Varanasi in one trip?', answer: 'Yes, Ayodhya and Varanasi are 210 km apart (4-5 hours drive). A combined 3-4 day pilgrimage covering Ayodhya Ram Mandir, Varanasi Kashi Vishwanath, and Prayagraj Sangam is very popular. Book a multi-city cab package.' },
      { question: 'Which is the nearest railway station to Ram Mandir?', answer: 'Ayodhya Junction (AY) is the nearest station, located in central Ayodhya. Ayodhya Cantt (AYC) and Faizabad Junction (FD, 7 km away) also serve the city with trains from Delhi, Lucknow, and Varanasi.' },
    ],
  },

  lucknow: {
    name: 'Lucknow',
    slug: 'lucknow',
    title: 'How to Reach Lucknow - By Air, Train, Road & Bus | Triveni Cabs',
    metaDescription: 'Complete guide on how to reach Lucknow by air, train, road and bus. Routes to the City of Nawabs, nearest airport, railway station, and cab booking.',
    introduction: 'Lucknow, the City of Nawabs, is the capital of Uttar Pradesh and a city of refined culture, stunning Mughal and Awadhi architecture, and legendary cuisine. Known for the Bara Imambara, Rumi Darwaza, and its famous kebabs and biryanis, Lucknow is excellently connected by air, rail, and road as one of North India\'s major metropolitan cities.',
    distanceFromDelhi: '500 km',
    bestTimeToVisit: 'October to March',
    byAir: {
      airport: 'Chaudhary Charan Singh International Airport (LKO)',
      distance: '14 km from Hazratganj (city centre)',
      airlines: 'Air India, IndiGo, SpiceJet, Vistara, AirAsia, GoFirst, Akasa Air. International flights to Dubai, Muscat, Jeddah.',
      tips: 'Lucknow Airport is well-connected with frequent daily flights from Delhi (1 hour), Mumbai (2 hours), Bangalore, Kolkata, and Hyderabad. The new terminal handles international flights. Pre-book airport transfer for a comfortable ride.',
    },
    byTrain: {
      stations: [
        { name: 'Lucknow Charbagh (LKO)', area: 'Charbagh, central Lucknow' },
        { name: 'Lucknow Junction (LJN)', area: 'Aishbagh, Old City' },
        { name: 'Lucknow NR (LKO NR)', area: 'Northern Railway zone' },
      ],
      tips: 'Lucknow Charbagh is the main station with excellent connectivity. Swarna Shatabdi from Delhi takes about 6.5 hours. Rajdhani Express takes about 6 hours. Lucknow is on the main Delhi-Kolkata rail route.',
    },
    byRoad: {
      highways: [
        { from: 'Delhi', highway: 'Agra-Lucknow Expressway + Yamuna Expressway', distance: '500 km', time: '7-8 hours' },
        { from: 'Agra', highway: 'Agra-Lucknow Expressway', distance: '330 km', time: '4-5 hours' },
        { from: 'Varanasi', highway: 'NH31 via Sultanpur', distance: '300 km', time: '5-6 hours' },
        { from: 'Kanpur', highway: 'NH27', distance: '80 km', time: '1.5-2 hours' },
        { from: 'Ayodhya', highway: 'NH27 via Barabanki', distance: '135 km', time: '2.5-3 hours' },
        { from: 'Prayagraj', highway: 'NH31', distance: '200 km', time: '3.5-4 hours' },
      ],
    },
    byBus: {
      busStands: ['Lucknow Alambagh Bus Stand (ISBT)', 'Kaiserbagh Bus Stand'],
      operators: ['UPSRTC', 'MP Roadways', 'Bihar SRTC', 'Private Volvo operators from Delhi'],
      tips: 'UPSRTC Volvo buses from Delhi take about 8-9 hours. Regular buses connect Lucknow to all major UP cities. The new expressway has significantly reduced travel times from Delhi and Agra.',
    },
    vehicleRecommendation: {
      solo: 'Sedan (Swift Dzire) - perfect for city sightseeing and short trips',
      family: 'SUV (Innova/Ertiga) - comfortable for family visits and multi-city trips',
      group: 'Tempo Traveller (12-17 seater) - ideal for group pilgrimages to Ayodhya, Varanasi, Prayagraj',
    },
    relatedLinks: {
      sightseeing: '/sightseeing/lucknow',
      wedding: '/wedding/lucknow',
      airport: '/airport-service/lucknow',
      tempoTraveller: '/tempo-traveller',
    },
    faqs: [
      { question: 'What is the best way to reach Lucknow from Delhi?', answer: 'Flying is the fastest - Delhi to Lucknow flights take just 1 hour. By car via the Agra-Lucknow Expressway (500 km, 7-8 hours). Swarna Shatabdi train takes 6.5 hours and Rajdhani Express about 6 hours.' },
      { question: 'Does Lucknow have an international airport?', answer: 'Yes, Chaudhary Charan Singh International Airport (LKO) has both domestic and international terminals. It offers flights to Dubai, Muscat, Jeddah, and all major Indian cities with airlines like IndiGo, Air India, and Vistara.' },
      { question: 'How to reach Ayodhya from Lucknow?', answer: 'Ayodhya is just 135 km from Lucknow via NH27 (2.5-3 hours by car). UPSRTC buses run frequently. Many pilgrims hire a cab from Lucknow for a day trip or multi-day pilgrimage covering Ayodhya and Varanasi.' },
      { question: 'Which is the main railway station in Lucknow?', answer: 'Lucknow Charbagh (LKO) is the main and most iconic station, known for its beautiful architecture. It handles most major trains from Delhi, Mumbai, Kolkata, and other cities.' },
      { question: 'Can I hire a cab for a Lucknow sightseeing tour?', answer: 'Yes, Triveni Cabs offers Lucknow city tours covering Bara Imambara, Chhota Imambara, Rumi Darwaza, Residency, and Hazratganj. We also provide multi-day packages covering Lucknow, Ayodhya, Varanasi, and Prayagraj.' },
    ],
  },
};

// Helper function to get all cities
export function getAllHowToReachCities() {
  return Object.keys(howToReachData);
}

// Helper function to get city data by slug
export function getHowToReachCityData(slug) {
  return howToReachData[slug] || null;
}

export default howToReachData;
