// src/utilis/localTaxiCityData.js — Data for 23 city-specific local taxi pages
// Pricing: 4hr sedan ~1499-1999, 8hr ~2499-2999, 12hr ~3499-3999, full day ~3999-4999
// SUV is ~40% more than sedan

const localTaxiCities = {
  delhi: {
    slug: 'delhi',
    city: 'Delhi',
    tagline: 'Navigate the Capital with Ease — Hourly Cabs at Your Fingertips',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1799, suv: 2499 },
      { name: '8 Hours / 80 km', sedan: 2799, suv: 3899 },
      { name: '12 Hours / 120 km', sedan: 3799, suv: 5299 },
      { name: 'Full Day (24 hrs)', sedan: 4799, suv: 6699 },
    ],
    popularLocations: ['India Gate', 'Red Fort', 'Qutub Minar', 'Lotus Temple', 'Akshardham Temple', 'Chandni Chowk', 'Connaught Place', 'Humayun\'s Tomb'],
    coverageAreas: ['Central Delhi', 'South Delhi', 'North Delhi', 'Dwarka', 'Rohini', 'Karol Bagh'],
    localTips: 'Avoid travelling between 8-10 AM and 5-8 PM on weekdays due to extreme traffic. Metro+cab combos work best for crossing the city. Sundays are ideal for sightseeing as roads are relatively empty.',
    faqs: [
      { question: 'What is the cheapest local taxi package in Delhi?', answer: 'Our 4 Hours / 40 km sedan package starts at just Rs 1,799. This covers most short errands, shopping trips, and quick sightseeing within Central or South Delhi.' },
      { question: 'Are toll and parking charges included in Delhi local taxi fares?', answer: 'Toll charges and parking fees are not included and are payable at actual. However, our transparent billing means no hidden surprises — your driver will inform you of any extra charges upfront.' },
      { question: 'Can I extend my Delhi local taxi booking beyond the package hours?', answer: 'Yes, you can extend your trip. Extra hours are charged at Rs 200/hr for sedan and Rs 280/hr for SUV, with additional km charges at Rs 14/km (sedan) and Rs 18/km (SUV).' },
      { question: 'Which areas in Delhi does your local taxi service cover?', answer: 'We cover all of Delhi NCR including Central Delhi, South Delhi, North Delhi, East Delhi, West Delhi, Dwarka, Rohini, and areas up to the Delhi border.' },
      { question: 'Do you provide airport pickup as part of Delhi local taxi service?', answer: 'Airport pickup is a separate service. However, you can book a local taxi that starts from the airport — the meter begins when the driver reaches the terminal.' },
      { question: 'Is night-time local taxi available in Delhi?', answer: 'Yes, we operate 24/7 in Delhi. Night bookings (10 PM - 6 AM) may have a nominal night charge of Rs 200 added to the package fare.' },
    ],
    relatedCities: ['noida', 'gurgaon', 'ghaziabad', 'faridabad'],
  },

  agra: {
    slug: 'agra',
    city: 'Agra',
    tagline: 'Explore the City of the Taj — Reliable Hourly Cabs for Every Occasion',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1499, suv: 2099 },
      { name: '8 Hours / 80 km', sedan: 2499, suv: 3499 },
      { name: '12 Hours / 120 km', sedan: 3499, suv: 4899 },
      { name: 'Full Day (24 hrs)', sedan: 3999, suv: 5599 },
    ],
    popularLocations: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah', 'Kinari Bazaar', 'Sikandra'],
    coverageAreas: ['Tajganj', 'Civil Lines', 'Sadar Bazaar', 'Dayal Bagh', 'Sikandra', 'MG Road'],
    localTips: 'Taj Mahal is closed on Fridays. Visit early morning for sunrise views and fewer crowds. Use local taxis to combine Taj Mahal, Agra Fort, and Mehtab Bagh in one trip. Fatehpur Sikri is 40 km away — book the 8-hour package for that.',
    faqs: [
      { question: 'How much does a local taxi cost in Agra for Taj Mahal sightseeing?', answer: 'Our 4 Hours / 40 km sedan package at Rs 1,499 is perfect for Taj Mahal + Agra Fort visits. For a full day covering Fatehpur Sikri as well, the 8-hour package at Rs 2,499 is ideal.' },
      { question: 'Can I book a local taxi in Agra for just 2 hours?', answer: 'Our minimum package is 4 Hours / 40 km. This gives you enough time to comfortably visit the Taj Mahal and one additional attraction without rushing.' },
      { question: 'Do your Agra local taxis wait at the Taj Mahal?', answer: 'Yes, your driver waits for you at the parking area while you explore. Parking charges at Taj Mahal (approx Rs 50-100) are payable at actual.' },
      { question: 'Is AC included in the Agra local taxi fare?', answer: 'Yes, all our vehicles are fully air-conditioned. AC is included in every package — no extra charge regardless of weather or season.' },
      { question: 'Can I use Agra local taxi for shopping at Kinari Bazaar?', answer: 'Absolutely! Many customers use our 4-hour package for a combined shopping and sightseeing trip. Your driver will navigate the narrow lanes and find convenient parking.' },
      { question: 'What vehicles do you offer for Agra local taxi?', answer: 'We offer Sedan (Swift Dzire, Toyota Etios) and SUV (Innova Crysta, Ertiga) options. All vehicles are well-maintained, GPS-tracked, and driven by experienced local drivers.' },
    ],
    relatedCities: ['delhi', 'mathura', 'jaipur', 'lucknow'],
  },

  jaipur: {
    slug: 'jaipur',
    city: 'Jaipur',
    tagline: 'Ride Through the Pink City in Style — Hourly Local Taxi Service',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1699, suv: 2399 },
      { name: '8 Hours / 80 km', sedan: 2699, suv: 3799 },
      { name: '12 Hours / 120 km', sedan: 3699, suv: 5199 },
      { name: 'Full Day (24 hrs)', sedan: 4499, suv: 6299 },
    ],
    popularLocations: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Nahargarh Fort', 'Jal Mahal', 'Albert Hall Museum', 'Johari Bazaar'],
    coverageAreas: ['Old City (Walled City)', 'C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Tonk Road'],
    localTips: 'Amber Fort is 11 km from the city center — include it in your 8-hour package for a relaxed experience. The Old City is best explored in the morning before it gets crowded. Evening light shows at Amber Fort are spectacular.',
    faqs: [
      { question: 'What is the best local taxi package for Jaipur sightseeing?', answer: 'The 8 Hours / 80 km package at Rs 2,699 (sedan) is perfect for covering Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, and Nahargarh Fort in one day.' },
      { question: 'How far is Amber Fort from Jaipur city center?', answer: 'Amber Fort is approximately 11 km from the city center. Our local taxi service includes the drive there and waiting time while you explore the fort complex.' },
      { question: 'Can I book a local taxi for shopping in Jaipur bazaars?', answer: 'Yes! Our 4-hour package is great for shopping trips covering Johari Bazaar, Bapu Bazaar, and Tripolia Bazaar. Your driver knows all the best parking spots near these markets.' },
      { question: 'Are Jaipur local taxi drivers knowledgeable about tourist spots?', answer: 'All our Jaipur drivers are experienced locals who know every fort, palace, and hidden gem. They can suggest the best photo spots and timing for each attraction.' },
      { question: 'Is the Jaipur local taxi available for wedding functions?', answer: 'For wedding and event transportation, we recommend our dedicated wedding car service. However, local taxis can be booked for guest pickup/drop duties within Jaipur.' },
      { question: 'Do you offer local taxi service from Jaipur Airport?', answer: 'Yes, you can start your local taxi booking from Jaipur Airport (Sanganer). The driver will meet you at arrivals with a name board. Airport parking charges are extra.' },
    ],
    relatedCities: ['delhi', 'udaipur', 'jodhpur', 'agra'],
  },

  chandigarh: {
    slug: 'chandigarh',
    city: 'Chandigarh',
    tagline: 'Cruise Through the City Beautiful — Affordable Hourly Cab Service',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2599, suv: 3649 },
      { name: '12 Hours / 120 km', sedan: 3599, suv: 4999 },
      { name: 'Full Day (24 hrs)', sedan: 4299, suv: 5999 },
    ],
    popularLocations: ['Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Capitol Complex', 'Elante Mall', 'Sector 17 Market'],
    coverageAreas: ['Sector 17', 'Sector 22', 'Sector 35', 'Industrial Area', 'Manimajra', 'IT Park'],
    localTips: 'Chandigarh is a well-planned grid city — short distances between sectors make the 4-hour package very efficient. Visit Sukhna Lake at sunrise and Rock Garden by mid-morning. Sector 17 is great for evening shopping.',
    faqs: [
      { question: 'How much does a local taxi cost in Chandigarh?', answer: 'Local taxi in Chandigarh starts at Rs 1,599 for 4 Hours / 40 km (sedan). The city is compact, so this package covers most errands and sightseeing comfortably.' },
      { question: 'Can I visit Rock Garden and Sukhna Lake in the 4-hour package?', answer: 'Yes, Rock Garden and Sukhna Lake are close to each other. The 4-hour package gives you enough time to visit both with comfortable waiting time included.' },
      { question: 'Does the Chandigarh local taxi go to Panchkula and Mohali?', answer: 'Yes, our local taxi covers the entire Chandigarh Tricity — Chandigarh, Panchkula, and Mohali. All areas within the tricity are included in the km limit.' },
      { question: 'Is local taxi available from Chandigarh Railway Station?', answer: 'Yes, you can start your booking from Chandigarh Railway Station or Bus Stand. The driver will meet you at the exit with a name board.' },
      { question: 'Are your Chandigarh local taxis suitable for corporate meetings?', answer: 'Absolutely. Our sedan fleet includes well-maintained Dzire and Etios cars, and SUV options include Innova Crysta — all ideal for corporate travel within Chandigarh.' },
      { question: 'What if I exceed the km limit on my Chandigarh local taxi package?', answer: 'Extra km are charged at Rs 14/km for sedan and Rs 18/km for SUV. Extra hours are Rs 200/hr (sedan) and Rs 280/hr (SUV). Your driver will inform you before overages occur.' },
    ],
    relatedCities: ['delhi', 'shimla', 'amritsar', 'dehradun'],
  },

  lucknow: {
    slug: 'lucknow',
    city: 'Lucknow',
    tagline: 'Explore the City of Nawabs — Comfortable Local Taxi at Best Rates',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2599, suv: 3649 },
      { name: '12 Hours / 120 km', sedan: 3599, suv: 4999 },
      { name: 'Full Day (24 hrs)', sedan: 4299, suv: 5999 },
    ],
    popularLocations: ['Bara Imambara', 'Chota Imambara', 'Rumi Darwaza', 'Hazratganj', 'British Residency', 'Ambedkar Park'],
    coverageAreas: ['Hazratganj', 'Aminabad', 'Charbagh', 'Gomti Nagar', 'Aliganj', 'Alambagh'],
    localTips: 'Lucknow traffic can be intense in the old city area. Plan heritage visits (Imambaras, Rumi Gate) in the morning. Hazratganj is best for evening shopping and food. Try the famous Tunday Kebab — your driver will know the best outlet.',
    faqs: [
      { question: 'What is the local taxi fare in Lucknow for a full day?', answer: 'A full day local taxi in Lucknow costs Rs 4,299 for sedan and Rs 5,999 for SUV. This covers 24 hours of travel within Lucknow city limits.' },
      { question: 'Can I use Lucknow local taxi to visit Bara Imambara and nearby heritage sites?', answer: 'Yes, the 4-hour package at Rs 1,599 comfortably covers Bara Imambara, Chota Imambara, and Rumi Darwaza since they are all within a 2 km radius.' },
      { question: 'Is local taxi available from Lucknow Airport (Chaudhary Charan Singh)?', answer: 'Yes, we provide local taxi starting from Lucknow Airport. The driver meets you at arrivals. Airport parking charges (approx Rs 100) are extra.' },
      { question: 'Do you offer local taxi from Charbagh Railway Station?', answer: 'Yes, Charbagh is one of our most popular pickup points. The driver will meet you outside the main exit or at a pre-arranged spot.' },
      { question: 'Are your Lucknow drivers familiar with the old city lanes?', answer: 'All our Lucknow drivers are experienced locals who navigate the narrow old city lanes expertly. They know the best routes to avoid congestion in Aminabad and Chowk areas.' },
      { question: 'Can I hire a local taxi in Lucknow for a wedding function?', answer: 'Yes, our local taxi packages work well for wedding guest transfers. For large groups, we also offer Innova Crysta SUVs and tempo travellers.' },
    ],
    relatedCities: ['varanasi', 'ayodhya', 'agra', 'delhi'],
  },

  varanasi: {
    slug: 'varanasi',
    city: 'Varanasi',
    tagline: 'Experience the Spiritual Capital — Trusted Local Taxi Service',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1499, suv: 2099 },
      { name: '8 Hours / 80 km', sedan: 2499, suv: 3499 },
      { name: '12 Hours / 120 km', sedan: 3499, suv: 4899 },
      { name: 'Full Day (24 hrs)', sedan: 3999, suv: 5599 },
    ],
    popularLocations: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Sarnath', 'Assi Ghat', 'BHU Campus', 'Ramnagar Fort'],
    coverageAreas: ['Godowlia', 'Lanka', 'Assi', 'Cantonment', 'Sarnath', 'Pandeypur'],
    localTips: 'Varanasi old city lanes are not car-accessible — your driver will drop you at the nearest point and wait. Book the 8-hour package if visiting Sarnath (10 km away). The Ganga Aarti at Dashashwamedh Ghat is at 6:30 PM — plan accordingly.',
    faqs: [
      { question: 'How much is a local taxi in Varanasi for ghat visits?', answer: 'The 4-hour package at Rs 1,499 (sedan) covers drops to major ghats and temples. Note that the old city lanes require walking — your driver waits at the nearest accessible point.' },
      { question: 'Can I visit Sarnath with the Varanasi local taxi?', answer: 'Yes, Sarnath is 10 km from Varanasi city center. The 8-hour package at Rs 2,499 is ideal for combining Varanasi ghat visits with a Sarnath excursion.' },
      { question: 'Is local taxi available from Varanasi Airport (Lal Bahadur Shastri)?', answer: 'Yes, we offer local taxi starting from Varanasi Airport. Located 26 km from the city center, we recommend the 8-hour package for airport pickups with sightseeing.' },
      { question: 'Can the taxi go near Kashi Vishwanath Temple?', answer: 'Vehicles can reach up to Godowlia Chowk, which is a 5-minute walk from the temple. Your driver will guide you to the walking route and wait with the vehicle.' },
      { question: 'Do you have local taxis available during Ganga Aarti time?', answer: 'Yes, evening bookings for Ganga Aarti are very popular. Book the 4-hour evening package from 4 PM to cover Aarti at Dashashwamedh Ghat and a boat ride.' },
      { question: 'Are Varanasi local taxi drivers trustworthy and verified?', answer: 'All our drivers are police-verified, experienced locals with excellent knowledge of Varanasi. They carry valid commercial driving licenses and ID cards.' },
    ],
    relatedCities: ['lucknow', 'ayodhya', 'agra', 'delhi'],
  },

  amritsar: {
    slug: 'amritsar',
    city: 'Amritsar',
    tagline: 'Golden City, Golden Service — Hourly Local Taxi for Every Need',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2699, suv: 3799 },
      { name: '12 Hours / 120 km', sedan: 3699, suv: 5199 },
      { name: 'Full Day (24 hrs)', sedan: 4499, suv: 6299 },
    ],
    popularLocations: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum', 'Hall Bazaar', 'Gobindgarh Fort'],
    coverageAreas: ['Hall Bazaar', 'Lawrence Road', 'Ranjit Avenue', 'GT Road', 'Majitha Road', 'Airport Road'],
    localTips: 'Wagah Border ceremony starts at 4:30 PM (winter) or 5:30 PM (summer) — reach by 2:30 PM for good seats. Golden Temple is open 24/7 but early morning (4 AM Palki Sahib ceremony) is magical. Book the 8-hour package to cover both.',
    faqs: [
      { question: 'How much does a local taxi to Wagah Border from Amritsar cost?', answer: 'Wagah Border is 30 km from Amritsar city. The 8-hour package at Rs 2,699 (sedan) covers the round trip with comfortable waiting time for the flag-lowering ceremony.' },
      { question: 'Can I visit Golden Temple and Wagah Border in one day?', answer: 'Yes, the 8-hour package easily covers both. We suggest morning Golden Temple visit, lunch break, and then heading to Wagah Border by 2 PM for the ceremony.' },
      { question: 'Is local taxi available from Amritsar Railway Station?', answer: 'Yes, we provide pickup from Amritsar Junction Railway Station. The driver will meet you at the main exit. This is one of our most popular pickup points.' },
      { question: 'Do you offer local taxi from Amritsar Airport?', answer: 'Yes, Sri Guru Ram Dass Jee Airport pickup is available. The airport is 11 km from the city center. Your driver will greet you at arrivals.' },
      { question: 'Can I use the Amritsar local taxi for a food tour?', answer: 'Absolutely! Many customers book the 4-hour package for an Amritsar food tour covering Bharawan Da Dhaba, Kesar Da Dhaba, and the famous Lassi spots. Your driver will be your guide.' },
      { question: 'Is the local taxi available for early morning Golden Temple visits?', answer: 'Yes, we operate 24/7. You can book a 4 AM pickup for the Palki Sahib ceremony at Golden Temple. Night charge of Rs 200 applies for bookings before 6 AM.' },
    ],
    relatedCities: ['chandigarh', 'delhi', 'shimla', 'manali'],
  },

  haridwar: {
    slug: 'haridwar',
    city: 'Haridwar',
    tagline: 'Sacred Journeys Made Simple — Local Taxi for the Holy City',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1499, suv: 2099 },
      { name: '8 Hours / 80 km', sedan: 2499, suv: 3499 },
      { name: '12 Hours / 120 km', sedan: 3499, suv: 4899 },
      { name: 'Full Day (24 hrs)', sedan: 3999, suv: 5599 },
    ],
    popularLocations: ['Har Ki Pauri', 'Mansa Devi Temple', 'Chandi Devi Temple', 'Shantikunj', 'Rajaji National Park', 'Daksh Mahadev Temple'],
    coverageAreas: ['Har Ki Pauri', 'Jwalapur', 'Kankhal', 'Bhadrabad', 'BHEL Township', 'Bahadrabad'],
    localTips: 'Ganga Aarti at Har Ki Pauri is at sunset (6-7 PM). Mansa Devi ropeway closes at 5 PM. Book the 8-hour package if you plan to visit both temples and attend the Aarti. Traffic is heavy during Kanwar Yatra season (July-August).',
    faqs: [
      { question: 'How much is a local taxi in Haridwar for temple visits?', answer: 'The 4-hour package at Rs 1,499 covers visits to Har Ki Pauri, Mansa Devi (ropeway base), and nearby temples. For a comprehensive visit including Chandi Devi, book the 8-hour package.' },
      { question: 'Can I go to Rishikesh from Haridwar using local taxi?', answer: 'Rishikesh is 25 km from Haridwar. While possible with the 8-hour package, we recommend booking our dedicated Haridwar-Rishikesh combo or outstation service for better value.' },
      { question: 'Is local taxi available from Haridwar Railway Station?', answer: 'Yes, pickup from Haridwar Junction is available. The driver will meet you at the station exit. The station is centrally located, just 1 km from Har Ki Pauri.' },
      { question: 'Do you provide local taxi during Kumbh Mela or Kanwar Yatra?', answer: 'Yes, but we recommend booking well in advance during these peak seasons. Surge pricing may apply due to high demand and road diversions during Kanwar Yatra.' },
      { question: 'Can the taxi reach Har Ki Pauri directly?', answer: 'Vehicles can reach within 200 meters of Har Ki Pauri. The last stretch near the ghat is pedestrian-only. Your driver will guide you and wait at the nearest parking.' },
      { question: 'Is the driver familiar with all temple locations in Haridwar?', answer: 'Yes, all our Haridwar drivers are experienced locals who know every temple, ashram, and ghat in the city. They can also recommend the best dharamshalas and local eateries.' },
    ],
    relatedCities: ['rishikesh', 'dehradun', 'mussoorie', 'delhi'],
  },

  dehradun: {
    slug: 'dehradun',
    city: 'Dehradun',
    tagline: 'Gateway to the Hills — Reliable Local Taxi in the Doon Valley',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2699, suv: 3799 },
      { name: '12 Hours / 120 km', sedan: 3699, suv: 5199 },
      { name: 'Full Day (24 hrs)', sedan: 4499, suv: 6299 },
    ],
    popularLocations: ['Robbers Cave', 'Sahastradhara', 'FRI (Forest Research Institute)', 'Tapkeshwar Temple', 'Mindrolling Monastery', 'Rajpur Road'],
    coverageAreas: ['Rajpur Road', 'Clock Tower', 'ISBT', 'Race Course', 'Clement Town', 'Premnagar'],
    localTips: 'Robbers Cave is best visited in the morning before crowds arrive. FRI campus closes at 5 PM. Use the 8-hour package to combine city sightseeing with a drive to Sahastradhara. Mussoorie is 35 km uphill — book a separate outstation cab for that.',
    faqs: [
      { question: 'What is the local taxi fare in Dehradun for sightseeing?', answer: 'Local taxi in Dehradun starts at Rs 1,599 for 4 Hours / 40 km (sedan). The 8-hour package at Rs 2,699 is ideal for covering Robbers Cave, Sahastradhara, FRI, and Tapkeshwar Temple.' },
      { question: 'Can I go to Mussoorie with a Dehradun local taxi?', answer: 'Mussoorie is 35 km from Dehradun (1.5 hr hill drive). While technically possible with the 8-hour package, we recommend our dedicated outstation service for the best experience and value.' },
      { question: 'Is local taxi available from Dehradun Airport (Jolly Grant)?', answer: 'Yes, Jolly Grant Airport is 30 km from the city. We offer airport pickup with local taxi packages. The 8-hour package is recommended for airport+sightseeing combos.' },
      { question: 'Do you provide pickup from Dehradun Railway Station?', answer: 'Yes, pickup from Dehradun Railway Station on Haridwar Road is available. It is centrally located and one of our top pickup points in the city.' },
      { question: 'Are SUVs available for Dehradun local taxi?', answer: 'Yes, we offer both Sedan (Dzire/Etios) and SUV (Innova Crysta/Ertiga) options. SUVs are recommended for families or groups of 5+ passengers.' },
      { question: 'Is Dehradun local taxi suitable for corporate trips?', answer: 'Absolutely. Dehradun has many corporate offices and ONGC establishments. Our well-maintained fleet with professional drivers is perfect for business travel within the city.' },
    ],
    relatedCities: ['haridwar', 'rishikesh', 'mussoorie', 'chandigarh'],
  },

  rishikesh: {
    slug: 'rishikesh',
    city: 'Rishikesh',
    tagline: 'Yoga Capital Taxi Service — Explore Temples, Ashrams & Adventure Spots',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1499, suv: 2099 },
      { name: '8 Hours / 80 km', sedan: 2499, suv: 3499 },
      { name: '12 Hours / 120 km', sedan: 3499, suv: 4899 },
      { name: 'Full Day (24 hrs)', sedan: 3999, suv: 5599 },
    ],
    popularLocations: ['Lakshman Jhula', 'Ram Jhula', 'Triveni Ghat', 'Beatles Ashram', 'Neelkanth Mahadev Temple', 'Parmarth Niketan'],
    coverageAreas: ['Tapovan', 'Lakshman Jhula Area', 'Ram Jhula Area', 'Muni Ki Reti', 'Swargashram', 'Shivpuri'],
    localTips: 'Lakshman Jhula area is best explored on foot — the taxi will drop and wait at a parking area. Neelkanth Mahadev Temple is 32 km uphill — the 8-hour package covers it well. River rafting season is September to June.',
    faqs: [
      { question: 'How much does a local taxi in Rishikesh cost?', answer: 'Local taxi in Rishikesh starts at Rs 1,499 for 4 Hours / 40 km (sedan). This covers visits to Lakshman Jhula, Ram Jhula, and Triveni Ghat comfortably.' },
      { question: 'Can I visit Neelkanth Mahadev Temple with the local taxi?', answer: 'Yes, Neelkanth Temple is 32 km from Rishikesh town. The 8-hour package at Rs 2,499 is recommended as the hill road takes about 1 hour each way plus temple visit time.' },
      { question: 'Is local taxi available for rafting camp drops in Shivpuri?', answer: 'Yes, Shivpuri is 16 km from Rishikesh. Our 4-hour package covers the round trip to rafting camps. The driver will wait or return for pickup as per your preference.' },
      { question: 'Can the taxi drive to Lakshman Jhula directly?', answer: 'Vehicles can reach the parking area near Lakshman Jhula. The bridge and surrounding area is pedestrian-only. Your driver will drop you at the closest accessible point.' },
      { question: 'Do you offer local taxi from Rishikesh to nearby ashrams?', answer: 'Yes, our local taxi is perfect for ashram-hopping. Parmarth Niketan, Beatles Ashram, Sivananda Ashram — your driver will take you to each and wait.' },
      { question: 'Is night travel safe in Rishikesh with your local taxi?', answer: 'Yes, we operate 24/7. However, hill roads to Neelkanth or Shivpuri are not recommended after dark. Within the town, night travel is perfectly safe with our verified drivers.' },
    ],
    relatedCities: ['haridwar', 'dehradun', 'mussoorie', 'delhi'],
  },

  shimla: {
    slug: 'shimla',
    city: 'Shimla',
    tagline: 'Queen of Hills Awaits — Hourly Cab Service for Shimla Sightseeing',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1799, suv: 2499 },
      { name: '8 Hours / 80 km', sedan: 2899, suv: 3999 },
      { name: '12 Hours / 120 km', sedan: 3899, suv: 5499 },
      { name: 'Full Day (24 hrs)', sedan: 4699, suv: 6599 },
    ],
    popularLocations: ['Mall Road', 'The Ridge', 'Jakhoo Temple', 'Kufri', 'Christ Church', 'Indian Institute of Advanced Study'],
    coverageAreas: ['Mall Road', 'Lakkar Bazaar', 'Sanjauli', 'Mashobra', 'Chhota Shimla', 'New Shimla'],
    localTips: 'Mall Road is pedestrian-only — taxis stop at Cart Road or the lift. Kufri is 16 km from Shimla — include it in the 8-hour package. Winter (Dec-Feb) brings snowfall — carry warm clothes. Traffic on NH-5 can be slow on weekends.',
    faqs: [
      { question: 'What is the local taxi rate in Shimla?', answer: 'Local taxi in Shimla starts at Rs 1,799 for 4 Hours / 40 km (sedan). Hill station rates are slightly higher due to mountainous terrain and fuel consumption.' },
      { question: 'Can the taxi go to Mall Road in Shimla?', answer: 'Mall Road is a pedestrian-only zone. Your driver will drop you at Cart Road or the lift/escalator entrance. The taxi waits at the designated parking while you explore on foot.' },
      { question: 'Is Kufri included in the Shimla local taxi package?', answer: 'Kufri is 16 km from Shimla. The 8-hour package at Rs 2,899 (sedan) comfortably covers Mall Road, The Ridge, Jakhoo Temple, and a Kufri excursion.' },
      { question: 'Are local taxis suitable for Shimla hill roads?', answer: 'Yes, our vehicles are well-maintained for hill driving. Drivers are experienced with narrow mountain roads, hairpin bends, and Shimla traffic patterns.' },
      { question: 'Do you offer local taxi from Shimla Railway Station?', answer: 'Yes, we provide pickup from Shimla Railway Station (narrow gauge). The station is located on Cart Road, making it convenient for onward local sightseeing.' },
      { question: 'What is the best time to book a Shimla local taxi for sightseeing?', answer: 'Start early (8-9 AM) to avoid afternoon crowds at popular spots. Weekdays are significantly less crowded than weekends, especially during summer season.' },
    ],
    relatedCities: ['manali', 'chandigarh', 'dehradun', 'delhi'],
  },

  manali: {
    slug: 'manali',
    city: 'Manali',
    tagline: 'Mountain Paradise Cabs — Explore Manali at Your Own Pace',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1899, suv: 2649 },
      { name: '8 Hours / 80 km', sedan: 2999, suv: 4199 },
      { name: '12 Hours / 120 km', sedan: 3999, suv: 5599 },
      { name: 'Full Day (24 hrs)', sedan: 4999, suv: 6999 },
    ],
    popularLocations: ['Hadimba Temple', 'Solang Valley', 'Old Manali', 'Rohtang Pass', 'Vashisht Hot Springs', 'Mall Road Manali'],
    coverageAreas: ['Mall Road', 'Old Manali', 'Aleo', 'Prini', 'Naggar', 'Solang Nala'],
    localTips: 'Rohtang Pass requires a permit — apply online 1-2 days before. Solang Valley is 14 km from Manali and has adventure activities year-round. Old Manali has the best cafes. Atal Tunnel to Lahaul opens Sissu/Keylong access.',
    faqs: [
      { question: 'How much does a local taxi in Manali cost?', answer: 'Local taxi in Manali starts at Rs 1,899 for 4 Hours / 40 km (sedan). Manali rates are higher due to hill terrain, narrow roads, and seasonal demand.' },
      { question: 'Can I go to Solang Valley with the local taxi?', answer: 'Yes, Solang Valley is 14 km from Manali town. The 4-hour package covers a round trip to Solang Valley with waiting time for snow activities or paragliding.' },
      { question: 'Is Rohtang Pass included in the local taxi package?', answer: 'Rohtang Pass is 51 km from Manali. The 8-hour package can cover it, but you need a Rohtang permit (book online via HP government portal). Snow season may require an SUV.' },
      { question: 'Do I need an SUV for Manali local sightseeing?', answer: 'For Manali town, Old Manali, and Solang Valley, a sedan works fine. For Rohtang Pass or off-road destinations, an SUV (Innova/Ertiga) is strongly recommended.' },
      { question: 'Is the local taxi available during snowfall in Manali?', answer: 'Yes, we operate year-round. During heavy snowfall (Dec-Feb), SUVs with snow chains are recommended. Road conditions to Rohtang may require 4x4 vehicles.' },
      { question: 'Can I book a local taxi from Manali Bus Stand?', answer: 'Yes, Manali Bus Stand pickup is available. The driver will meet you at the bus stand. This is ideal for arriving passengers who want to start sightseeing immediately.' },
    ],
    relatedCities: ['shimla', 'chandigarh', 'delhi', 'dehradun'],
  },

  udaipur: {
    slug: 'udaipur',
    city: 'Udaipur',
    tagline: 'City of Lakes, City of Luxury — Premium Local Taxi Service',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1699, suv: 2399 },
      { name: '8 Hours / 80 km', sedan: 2799, suv: 3899 },
      { name: '12 Hours / 120 km', sedan: 3799, suv: 5299 },
      { name: 'Full Day (24 hrs)', sedan: 4599, suv: 6399 },
    ],
    popularLocations: ['City Palace', 'Lake Pichola', 'Jag Mandir', 'Saheliyon Ki Bari', 'Fateh Sagar Lake', 'Sajjangarh (Monsoon Palace)'],
    coverageAreas: ['Old City', 'Fateh Sagar', 'Chetak Circle', 'Sukhadia Circle', 'Hiran Magri', 'Ambamata'],
    localTips: 'Take a boat ride on Lake Pichola for the best view of City Palace. Sajjangarh is 5 km uphill and offers stunning sunset views. The Old City is a maze — your driver will know the best routes. Avoid monsoon for Sajjangarh (slippery roads).',
    faqs: [
      { question: 'What is the best local taxi package for Udaipur sightseeing?', answer: 'The 8-hour package at Rs 2,799 (sedan) covers City Palace, Lake Pichola, Saheliyon Ki Bari, Fateh Sagar Lake, and Sajjangarh with comfortable timing.' },
      { question: 'Can I visit Sajjangarh (Monsoon Palace) with local taxi?', answer: 'Yes, Sajjangarh is 5 km from the city center. Our local taxi takes you uphill and waits while you enjoy the panoramic sunset views. Entry fees and parking are extra.' },
      { question: 'Is the Udaipur local taxi available for wedding events?', answer: 'Yes, Udaipur is a popular wedding destination. Our local taxis handle guest pickups, venue transfers, and sightseeing. For decorated cars, check our wedding car service.' },
      { question: 'Do you offer local taxi from Udaipur Airport?', answer: 'Yes, Maharana Pratap Airport is 22 km from the city. We provide airport pickup with all local taxi packages. The 8-hour package is ideal for airport+sightseeing.' },
      { question: 'Can the taxi navigate Udaipur Old City streets?', answer: 'The Old City has very narrow lanes. Our drivers know every shortcut and parking spot. For the narrowest streets near City Palace, a short walk may be needed.' },
      { question: 'Is local taxi available for a Udaipur lake tour?', answer: 'Yes! The 4-hour package covers drops to Lake Pichola, Fateh Sagar, and Doodh Talai. Boat ride tickets at each lake are purchased separately.' },
    ],
    relatedCities: ['jodhpur', 'jaipur', 'jaisalmer', 'delhi'],
  },

  jodhpur: {
    slug: 'jodhpur',
    city: 'Jodhpur',
    tagline: 'The Blue City Beckons — Explore Jodhpur with Trusted Local Cabs',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2699, suv: 3799 },
      { name: '12 Hours / 120 km', sedan: 3699, suv: 5199 },
      { name: 'Full Day (24 hrs)', sedan: 4499, suv: 6299 },
    ],
    popularLocations: ['Mehrangarh Fort', 'Umaid Bhawan Palace', 'Jaswant Thada', 'Clock Tower Market', 'Mandore Gardens', 'Blue City Walk'],
    coverageAreas: ['Old City', 'Ratanada', 'Paota', 'Sardarpura', 'Shastri Nagar', 'Pal Road'],
    localTips: 'Mehrangarh Fort needs 2-3 hours to explore fully — take the audio guide. The Blue City is best photographed from the fort ramparts. Clock Tower Market is great for spices and textiles. Morning visits beat the Rajasthan heat.',
    faqs: [
      { question: 'How much does a Jodhpur local taxi cost for fort visits?', answer: 'The 4-hour package at Rs 1,599 (sedan) covers Mehrangarh Fort and Jaswant Thada. For a full day including Umaid Bhawan, Mandore Gardens, and shopping, choose the 8-hour package.' },
      { question: 'Can I visit both Mehrangarh Fort and Umaid Bhawan Palace in one trip?', answer: 'Yes, both are within Jodhpur city. The 8-hour package at Rs 2,699 gives you ample time for both palaces plus Clock Tower Market and Jaswant Thada.' },
      { question: 'Is local taxi available from Jodhpur Airport?', answer: 'Yes, we provide pickup from Jodhpur Airport which is just 5 km from the city center. Any of our packages can start from the airport terminal.' },
      { question: 'Do you offer local taxi from Jodhpur Railway Station?', answer: 'Yes, Jodhpur Junction is centrally located. Our driver will meet you at the station exit. This is a popular starting point for tourist packages.' },
      { question: 'Can I explore the Blue City streets by taxi?', answer: 'The Blue City (old Brahmin neighborhood) has very narrow lanes. Your driver will drop you at the entry point and you can explore on foot. The walking tour takes about 1-2 hours.' },
      { question: 'Is evening local taxi available for desert sunset views?', answer: 'Yes, we can take you to nearby desert viewpoints for sunset. The 4-hour evening package (3 PM - 7 PM) is perfect for this experience.' },
    ],
    relatedCities: ['jaisalmer', 'udaipur', 'jaipur', 'delhi'],
  },

  jaisalmer: {
    slug: 'jaisalmer',
    city: 'Jaisalmer',
    tagline: 'Golden City Adventures — Reliable Local Taxi in the Desert',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1699, suv: 2399 },
      { name: '8 Hours / 80 km', sedan: 2799, suv: 3899 },
      { name: '12 Hours / 120 km', sedan: 3799, suv: 5299 },
      { name: 'Full Day (24 hrs)', sedan: 4599, suv: 6399 },
    ],
    popularLocations: ['Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake', 'Nathmal Ki Haveli', 'Kuldhara Ghost Village'],
    coverageAreas: ['Fort Area', 'Gadisar Road', 'Hanuman Circle', 'Jethwai Road', 'Sam Road', 'Station Road'],
    localTips: 'Sam Sand Dunes are 42 km from the city — book the 8-hour package or full day. Jaisalmer Fort is a living fort with people still residing inside. Best time to visit is October to March. Sunset at Gadisar Lake is magical.',
    faqs: [
      { question: 'How much does a local taxi cost in Jaisalmer?', answer: 'Local taxi in Jaisalmer starts at Rs 1,699 for 4 Hours / 40 km (sedan). For Sam Sand Dunes (42 km away), the 8-hour or full day package is recommended.' },
      { question: 'Can I visit Sam Sand Dunes with the local taxi?', answer: 'Yes, Sam Sand Dunes are 42 km from Jaisalmer city. The 8-hour package at Rs 2,799 covers the round trip with ample time for camel rides and sunset views.' },
      { question: 'Is the local taxi available for Kuldhara Ghost Village?', answer: 'Yes, Kuldhara is 18 km from Jaisalmer. It can be combined with Sam Sand Dunes in the 8-hour package. The village is an eerie but fascinating experience.' },
      { question: 'Can I explore Jaisalmer Fort by taxi?', answer: 'The taxi can drive up to the fort entrance (vehicles are allowed inside the fort). Your driver can navigate the narrow fort lanes, though some areas are best explored on foot.' },
      { question: 'Do you offer local taxi from Jaisalmer Railway Station?', answer: 'Yes, Jaisalmer Railway Station pickup is available. The station is centrally located, just 2 km from the fort. Perfect for starting your sightseeing right after arrival.' },
      { question: 'Is an SUV necessary for desert trips from Jaisalmer?', answer: 'For the paved road to Sam Sand Dunes, a sedan is fine. For off-road desert safari experiences, we recommend an SUV or a dedicated jeep safari service.' },
    ],
    relatedCities: ['jodhpur', 'udaipur', 'jaipur', 'delhi'],
  },

  mussoorie: {
    slug: 'mussoorie',
    city: 'Mussoorie',
    tagline: 'Queen of the Hills — Local Taxi for Scenic Mountain Exploration',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1799, suv: 2499 },
      { name: '8 Hours / 80 km', sedan: 2899, suv: 3999 },
      { name: '12 Hours / 120 km', sedan: 3899, suv: 5499 },
      { name: 'Full Day (24 hrs)', sedan: 4699, suv: 6599 },
    ],
    popularLocations: ['Kempty Falls', 'Mall Road', 'Gun Hill', 'Company Garden', 'Lal Tibba', 'Cloud\'s End'],
    coverageAreas: ['Mall Road', 'Library Bazaar', 'Landour', 'Happy Valley', 'Jharipani', 'Kempty Falls Road'],
    localTips: 'Kempty Falls is 15 km from Mall Road — include it in the 8-hour package. Landour is higher and less crowded than Mall Road — perfect for nature lovers. Gun Hill ropeway offers the best panoramic views. Avoid weekends in summer for less crowds.',
    faqs: [
      { question: 'What is the local taxi rate in Mussoorie?', answer: 'Local taxi in Mussoorie starts at Rs 1,799 for 4 Hours / 40 km (sedan). Hill station rates are slightly higher due to mountainous terrain and gradient roads.' },
      { question: 'Can I visit Kempty Falls with the local taxi?', answer: 'Yes, Kempty Falls is 15 km from Mall Road. The 8-hour package at Rs 2,899 (sedan) covers Kempty Falls plus Mall Road, Gun Hill, and Company Garden.' },
      { question: 'Is Mall Road accessible by taxi in Mussoorie?', answer: 'Private vehicles are restricted on Mall Road during peak hours. Your driver will drop you at Picture Palace or Library end, and you can walk the scenic 2 km stretch.' },
      { question: 'Do you offer local taxi from Dehradun to Mussoorie?', answer: 'The Dehradun-Mussoorie drive (35 km) is an outstation trip. Once in Mussoorie, book our local taxi packages for sightseeing within the hill station.' },
      { question: 'Is the taxi suitable for Mussoorie hill roads?', answer: 'Yes, our vehicles are well-maintained for hill driving. Drivers are experienced with narrow mountain roads, steep gradients, and Mussoorie traffic patterns.' },
      { question: 'Can I visit Landour with the Mussoorie local taxi?', answer: 'Yes, Landour is 5 km from Mussoorie Mall Road. The 4-hour package covers a visit to Landour with Char Dukan and scenic walks. SUV recommended for the steep Landour roads.' },
    ],
    relatedCities: ['dehradun', 'rishikesh', 'haridwar', 'shimla'],
  },

  nainital: {
    slug: 'nainital',
    city: 'Nainital',
    tagline: 'Lake City Cabs — Explore Nainital with Comfortable Local Taxi',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1799, suv: 2499 },
      { name: '8 Hours / 80 km', sedan: 2899, suv: 3999 },
      { name: '12 Hours / 120 km', sedan: 3899, suv: 5499 },
      { name: 'Full Day (24 hrs)', sedan: 4699, suv: 6599 },
    ],
    popularLocations: ['Naini Lake', 'Mall Road', 'Snow View Point', 'Naina Devi Temple', 'Tiffin Top', 'Eco Cave Gardens'],
    coverageAreas: ['Tallital', 'Mallital', 'Snow View', 'Bara Pathar', 'Ayarpatta', 'Bhowali Road'],
    localTips: 'Nainital Mall Road is partially pedestrian — taxis go through but parking is limited. The ropeway to Snow View runs 10 AM - 5 PM. Boating on Naini Lake is best in the morning. Saturdays and holidays see heavy tourist traffic.',
    faqs: [
      { question: 'How much does a local taxi in Nainital cost?', answer: 'Local taxi in Nainital starts at Rs 1,799 for 4 Hours / 40 km (sedan). Hill station pricing reflects the mountainous terrain and narrow road conditions.' },
      { question: 'Can I visit Snow View Point with the local taxi?', answer: 'Yes, Snow View Point is accessible by road (4 km from Mall Road) or by ropeway. Our taxi can take you to the ropeway station or drive you up via the road route.' },
      { question: 'Is the local taxi available for Bhimtal and Sattal excursion?', answer: 'Bhimtal (22 km) and Sattal (23 km) can be covered in the 8-hour package. This makes a wonderful lake-hopping day trip from Nainital.' },
      { question: 'Can taxis drive on Nainital Mall Road?', answer: 'Taxis can use Mall Road but parking is limited. During peak season, one-way traffic rules apply. Your driver will manage the routing and find the best parking spots.' },
      { question: 'Do you offer local taxi from Kathgodam Railway Station?', answer: 'Kathgodam is 35 km from Nainital (the nearest railway station). This is an outstation trip. Once in Nainital, our local taxi packages handle all your sightseeing needs.' },
      { question: 'Is an SUV necessary for Nainital local sightseeing?', answer: 'A sedan works fine for most Nainital sightseeing. For excursions to Mukteshwar, Bhimtal, or if you have more than 4 passengers, an SUV is recommended.' },
    ],
    relatedCities: ['mussoorie', 'dehradun', 'rishikesh', 'delhi'],
  },

  mathura: {
    slug: 'mathura',
    city: 'Mathura',
    tagline: 'Birthplace of Lord Krishna — Comfortable Local Taxi for Temple Tours',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1499, suv: 2099 },
      { name: '8 Hours / 80 km', sedan: 2499, suv: 3499 },
      { name: '12 Hours / 120 km', sedan: 3499, suv: 4899 },
      { name: 'Full Day (24 hrs)', sedan: 3999, suv: 5599 },
    ],
    popularLocations: ['Shri Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Vishram Ghat', 'Govardhan Hill', 'Vrindavan Temples', 'Kusum Sarovar'],
    coverageAreas: ['Janmabhoomi Area', 'Vrindavan', 'Govardhan', 'Junction Road', 'Dampier Nagar', 'Highway Road'],
    localTips: 'Vrindavan is 12 km from Mathura — book the 8-hour package to cover both cities. Govardhan Parikrama is 23 km — the taxi can drive the outer road while you walk certain stretches. Holi in Mathura/Vrindavan is world-famous (Feb/March).',
    faqs: [
      { question: 'What is the local taxi fare for Mathura-Vrindavan sightseeing?', answer: 'The 8-hour package at Rs 2,499 (sedan) is perfect for covering both Mathura and Vrindavan temples. Vrindavan is 12 km from Mathura, making the 8-hour package ideal.' },
      { question: 'Can I visit Govardhan Hill with the Mathura local taxi?', answer: 'Yes, Govardhan is 23 km from Mathura. The 8-hour package covers the round trip with time for darshan. For Govardhan Parikrama, the full-day package is recommended.' },
      { question: 'Is the local taxi available during Holi festival in Mathura?', answer: 'Yes, but book well in advance for Holi season (February/March). Roads may have diversions due to processions. Our local drivers know the best routes during festivals.' },
      { question: 'Do you provide pickup from Mathura Junction Railway Station?', answer: 'Yes, Mathura Junction is a major pickup point. The station is centrally located, just 2 km from Shri Krishna Janmabhoomi temple.' },
      { question: 'Can I cover Mathura, Vrindavan, and Govardhan in one day?', answer: 'Yes, the full-day package at Rs 3,999 covers all three. Start early (7 AM) to comfortably visit major temples in Mathura, Vrindavan, and complete Govardhan darshan.' },
      { question: 'Are the temple areas accessible by taxi in Mathura?', answer: 'The taxi can reach within 200-500 meters of most temples. The Janmabhoomi area and Vrindavan temple lanes require short walks. Your driver will guide you to the nearest drop point.' },
    ],
    relatedCities: ['agra', 'delhi', 'lucknow', 'varanasi'],
  },

  ayodhya: {
    slug: 'ayodhya',
    city: 'Ayodhya',
    tagline: 'Sacred City of Lord Ram — Trusted Local Taxi for Temple Darshan',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1499, suv: 2099 },
      { name: '8 Hours / 80 km', sedan: 2499, suv: 3499 },
      { name: '12 Hours / 120 km', sedan: 3499, suv: 4899 },
      { name: 'Full Day (24 hrs)', sedan: 3999, suv: 5599 },
    ],
    popularLocations: ['Ram Mandir', 'Hanuman Garhi', 'Kanak Bhawan', 'Saryu Ghat', 'Nageshwarnath Temple', 'Dashrath Mahal'],
    coverageAreas: ['Ram Mandir Area', 'Naya Ghat', 'Rikabganj', 'Faizabad', 'Sahadatganj', 'Civil Lines'],
    localTips: 'Ram Mandir has specific darshan timings — check the latest schedule before visiting. Hanuman Garhi involves climbing 76 steps. Saryu Ghat aarti in the evening is a must-see. The city is undergoing rapid development with new roads and facilities.',
    faqs: [
      { question: 'How much does a local taxi in Ayodhya cost for Ram Mandir darshan?', answer: 'The 4-hour package at Rs 1,499 (sedan) covers Ram Mandir and 2-3 nearby temples. For a complete Ayodhya temple tour including Saryu Ghat, the 8-hour package at Rs 2,499 is ideal.' },
      { question: 'Can the taxi reach near Ram Mandir?', answer: 'Due to security protocols, vehicles park at designated parking areas near Ram Mandir. Your driver will drop you at the closest accessible point. Free shuttle services may operate from parking to temple.' },
      { question: 'Is local taxi available from Ayodhya Railway Station?', answer: 'Yes, we provide pickup from both Ayodhya Junction and the new Ayodhya Dham station. Our driver will meet you at the station exit with a name board.' },
      { question: 'Can I visit Faizabad attractions with the Ayodhya local taxi?', answer: 'Yes, Faizabad is adjacent to Ayodhya (just 6 km). The 8-hour package covers both Ayodhya temples and Faizabad historical sites like Gulab Bari and Bahu Begum Ka Maqbara.' },
      { question: 'Is the local taxi available during Diwali and Ram Navami?', answer: 'Yes, but book well in advance for major festivals. Ayodhya sees massive crowds during Diwali and Ram Navami. Our drivers know the best routes and parking spots during peak times.' },
      { question: 'Do you offer local taxi for the Saryu Ghat evening aarti?', answer: 'Yes, our 4-hour evening package is perfect for attending the Saryu Ghat aarti. The driver will navigate the evening crowds and find the best drop point near the ghat.' },
    ],
    relatedCities: ['lucknow', 'varanasi', 'mathura', 'delhi'],
  },

  noida: {
    slug: 'noida',
    city: 'Noida',
    tagline: 'NCR Corporate Hub — Professional Local Taxi Service at Best Rates',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1699, suv: 2399 },
      { name: '8 Hours / 80 km', sedan: 2699, suv: 3799 },
      { name: '12 Hours / 120 km', sedan: 3699, suv: 5199 },
      { name: 'Full Day (24 hrs)', sedan: 4499, suv: 6299 },
    ],
    popularLocations: ['Worlds of Wonder', 'Botanical Garden', 'DLF Mall of India', 'Okhla Bird Sanctuary', 'Sector 18 Market', 'Film City'],
    coverageAreas: ['Sector 18', 'Sector 62', 'Sector 125', 'Greater Noida', 'Noida Expressway', 'Knowledge Park'],
    localTips: 'Noida Expressway connects to Greater Noida in 30 minutes. Corporate parks are in Sectors 62-63 and along the expressway. DLF Mall of India in Sector 18 is Asia\'s largest mall. Metro connectivity makes cab+metro combos efficient.',
    faqs: [
      { question: 'What is the local taxi fare in Noida?', answer: 'Local taxi in Noida starts at Rs 1,699 for 4 Hours / 40 km (sedan). This covers most corporate trips, shopping outings, and travel within Noida sectors.' },
      { question: 'Does the Noida local taxi go to Greater Noida?', answer: 'Yes, Greater Noida is covered within our local taxi service. The Noida-Greater Noida Expressway makes it a quick 20-30 minute drive from central Noida.' },
      { question: 'Can I use the Noida local taxi for Delhi trips?', answer: 'Yes, our Noida local taxi covers Delhi as well since both are part of Delhi NCR. Cross-border travel between Noida and Delhi is included in the km limit.' },
      { question: 'Is the local taxi suitable for corporate office commutes?', answer: 'Absolutely. Many of our Noida customers are IT professionals and corporate executives. Our well-maintained fleet with professional drivers is ideal for business travel.' },
      { question: 'Do you offer local taxi from Noida metro stations?', answer: 'Yes, we provide pickup from any Noida metro station including Botanical Garden, Sector 18, Sector 52, and the Blue Line metro stations.' },
      { question: 'Is the Noida local taxi available for late-night corporate pickups?', answer: 'Yes, we operate 24/7 in Noida. Night bookings (10 PM - 6 AM) have a nominal night charge of Rs 200. Perfect for late-night IT shift pickups.' },
    ],
    relatedCities: ['delhi', 'ghaziabad', 'gurgaon', 'faridabad'],
  },

  gurgaon: {
    slug: 'gurgaon',
    city: 'Gurgaon',
    tagline: 'Millennium City Cabs — Premium Local Taxi for the Corporate Capital',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1799, suv: 2499 },
      { name: '8 Hours / 80 km', sedan: 2799, suv: 3899 },
      { name: '12 Hours / 120 km', sedan: 3799, suv: 5299 },
      { name: 'Full Day (24 hrs)', sedan: 4799, suv: 6699 },
    ],
    popularLocations: ['Cyber Hub', 'Kingdom of Dreams', 'Ambience Mall', 'Leisure Valley Park', 'Sultanpur Bird Sanctuary', 'Golf Course Road'],
    coverageAreas: ['Cyber City', 'Golf Course Road', 'MG Road', 'Sohna Road', 'Old Gurgaon', 'Sector 29'],
    localTips: 'Gurgaon traffic is worst between 8:30-10:30 AM and 5:30-8 PM on NH-8 and Golf Course Road. Cyber Hub is great for dining and meetings. Use internal roads through sectors to avoid expressway jams. Metro from HUDA City Centre connects to Delhi.',
    faqs: [
      { question: 'How much does a local taxi in Gurgaon cost?', answer: 'Local taxi in Gurgaon starts at Rs 1,799 for 4 Hours / 40 km (sedan). Premium pricing reflects the high-quality corporate-grade service expected in the Millennium City.' },
      { question: 'Is the Gurgaon local taxi available for airport transfers?', answer: 'IGI Airport is 25 km from Gurgaon. While you can use a local taxi for airport runs, our dedicated airport transfer service offers better value for one-way airport trips.' },
      { question: 'Can I use the Gurgaon local taxi for Delhi meetings?', answer: 'Yes, Delhi is accessible from Gurgaon and is included in the km count. However, factor in 30-60 minutes extra travel time due to NH-8 traffic during peak hours.' },
      { question: 'Do you offer corporate accounts for regular Gurgaon local taxi use?', answer: 'Yes, we offer monthly corporate packages for companies in Cyber City, Golf Course Road, and Udyog Vihar. Contact us for customized corporate rates and billing.' },
      { question: 'Is the local taxi available from Gurgaon metro stations?', answer: 'Yes, pickup from HUDA City Centre, Sector 53-54, Guru Dronacharya, and all Rapid Metro stations is available. Just share the station name during booking.' },
      { question: 'What type of vehicles are available for Gurgaon local taxi?', answer: 'We offer Sedan (Swift Dzire, Toyota Etios), SUV (Innova Crysta, Ertiga), and premium options. All vehicles are well-maintained, AC, and GPS-tracked.' },
    ],
    relatedCities: ['delhi', 'noida', 'faridabad', 'jaipur'],
  },

  ghaziabad: {
    slug: 'ghaziabad',
    city: 'Ghaziabad',
    tagline: 'Gateway of UP — Affordable Local Taxi for Every Journey',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2599, suv: 3649 },
      { name: '12 Hours / 120 km', sedan: 3599, suv: 4999 },
      { name: 'Full Day (24 hrs)', sedan: 4299, suv: 5999 },
    ],
    popularLocations: ['ISKCON Temple', 'Swarna Jayanti Park', 'Shipra Mall', 'Drizzling Land Water Park', 'City Forest', 'Hindon Air Force Station (viewpoint)'],
    coverageAreas: ['Indirapuram', 'Vaishali', 'Vasundhara', 'Kaushambi', 'Raj Nagar Extension', 'Crossing Republik'],
    localTips: 'Ghaziabad connects seamlessly to Delhi and Noida via NH-24 and the metro. Indirapuram and Vaishali are the main commercial hubs. Traffic on NH-24 peaks during morning and evening rush. Use internal sector roads for faster travel.',
    faqs: [
      { question: 'What is the local taxi fare in Ghaziabad?', answer: 'Local taxi in Ghaziabad starts at Rs 1,599 for 4 Hours / 40 km (sedan). This covers most trips within Indirapuram, Vaishali, Vasundhara, and surrounding areas.' },
      { question: 'Does the Ghaziabad local taxi go to Delhi and Noida?', answer: 'Yes, our Ghaziabad local taxi covers the entire Delhi NCR region. Travel to Delhi, Noida, and Greater Noida is included within the km limit of your package.' },
      { question: 'Is local taxi available from Ghaziabad Railway Station?', answer: 'Yes, we provide pickup from Ghaziabad Junction as well as New Ghaziabad station. The driver will meet you at the station exit.' },
      { question: 'Can I use the Ghaziabad local taxi for shopping trips?', answer: 'Absolutely! Our 4-hour package is perfect for shopping at Shipra Mall, Pacific Mall, or Gaur City Mall in Noida Extension. Your driver handles all the parking logistics.' },
      { question: 'Is the local taxi suitable for hospital visits in Ghaziabad?', answer: 'Yes, many customers use our service for hospital visits to Yashoda, Columbia Asia, and Max hospitals. The driver waits while you attend appointments.' },
      { question: 'Do you offer daily office commute packages in Ghaziabad?', answer: 'Yes, we offer monthly corporate packages for daily commutes from Ghaziabad to Delhi/Noida offices. Contact us for discounted regular commute rates.' },
    ],
    relatedCities: ['noida', 'delhi', 'gurgaon', 'faridabad'],
  },

  faridabad: {
    slug: 'faridabad',
    city: 'Faridabad',
    tagline: 'Industrial Capital of Haryana — Reliable Local Taxi at Best Fares',
    packages: [
      { name: '4 Hours / 40 km', sedan: 1599, suv: 2249 },
      { name: '8 Hours / 80 km', sedan: 2599, suv: 3649 },
      { name: '12 Hours / 120 km', sedan: 3599, suv: 4999 },
      { name: 'Full Day (24 hrs)', sedan: 4299, suv: 5999 },
    ],
    popularLocations: ['Surajkund', 'Badkhal Lake', 'Town Park', 'Crown Interiorz Mall', 'Nahar Singh Palace', 'Aravalli Golf Course'],
    coverageAreas: ['Sector 15-16', 'NIT (New Industrial Township)', 'Ballabhgarh', 'Surajkund', 'Greater Faridabad', 'Old Faridabad'],
    localTips: 'Surajkund Mela (February) is a major attraction — book early during the fair. Faridabad connects to Delhi via the Violet Metro Line. Mathura Road (NH-2) connects to Agra. The Aravalli ridge area is great for weekend nature walks.',
    faqs: [
      { question: 'What is the local taxi rate in Faridabad?', answer: 'Local taxi in Faridabad starts at Rs 1,599 for 4 Hours / 40 km (sedan). This covers trips within NIT, Greater Faridabad, and surrounding industrial areas.' },
      { question: 'Does the Faridabad local taxi go to Delhi?', answer: 'Yes, Delhi is accessible from Faridabad and is part of Delhi NCR. Cross-border travel is included in the km limit. The Badarpur border crossing takes 15-30 minutes depending on traffic.' },
      { question: 'Is local taxi available from Faridabad metro stations?', answer: 'Yes, we provide pickup from all Violet Line metro stations in Faridabad including Badkhal Mor, Escorts Mujesar, Old Faridabad, and Neelam Chowk Ajronda.' },
      { question: 'Can I use the Faridabad local taxi for Surajkund Mela?', answer: 'Yes, Surajkund is 8 km from Faridabad. During the Mela (February), we offer special packages. Traffic and parking can be heavy — our drivers know the best routes.' },
      { question: 'Is the local taxi suitable for factory/industrial area visits?', answer: 'Yes, Faridabad has many industrial areas and our local taxis are frequently used for business visits to factories, offices, and industrial complexes across the city.' },
      { question: 'Do you offer regular commute packages for Faridabad residents?', answer: 'Yes, we offer monthly packages for daily commuters traveling from Faridabad to Delhi, Noida, or Gurgaon. Contact us for customized corporate rates.' },
    ],
    relatedCities: ['delhi', 'noida', 'gurgaon', 'agra'],
  },
};

/**
 * Get local taxi city data by slug
 * @param {string} slug - City slug (e.g., 'delhi', 'agra')
 * @returns {object|null} City data object or null if not found
 */
export function getLocalTaxiCity(slug) {
  return localTaxiCities[slug] || null;
}

/**
 * Get all local taxi city slugs for static generation
 * @returns {string[]} Array of city slugs
 */
export function getAllLocalTaxiSlugs() {
  return Object.keys(localTaxiCities);
}

/**
 * Get related local taxi cities data
 * @param {string} slug - Current city slug
 * @returns {object[]} Array of related city data objects
 */
export function getRelatedLocalTaxiCities(slug) {
  const city = localTaxiCities[slug];
  if (!city || !city.relatedCities) return [];
  return city.relatedCities
    .map((relSlug) => localTaxiCities[relSlug])
    .filter(Boolean);
}

export default localTaxiCities;
