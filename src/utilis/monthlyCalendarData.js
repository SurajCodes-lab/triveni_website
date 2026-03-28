/**
 * Monthly Travel Calendar Data — Triveni Cabs
 *
 * 12 months of seasonal destination recommendations for North India travel.
 * Each month includes 8-10 destinations with weather, crowd, budget, cab fare,
 * highlights, travel tips, festivals, and 6 FAQs.
 *
 * Used by: /where-to-go/[month] pages
 * Component: MonthlyCalendarClient.jsx
 */

const monthlyCalendarData = [
  // ════════════════════════════════════════════════════════
  // JANUARY — Snow & New Year
  // ════════════════════════════════════════════════════════
  {
    slug: 'january',
    month: 'January',
    tagline: 'Start the New Year with Snow & Warmth',
    destinations: [
      { name: 'Manali', why: 'Snow-covered paradise with fresh snowfall across Solang and Rohtang', weather: '-5\u00b0C to 5\u00b0C', crowd: 'High', budgetRange: '\u20b98,000 - \u20b925,000', cabFare: 5999, highlights: ['Snow trekking in Solang Valley', 'Skiing and snowboarding', 'Hot springs at Vashisht', 'Old Manali cafes'] },
      { name: 'Shimla', why: 'Colonial charm meets winter wonderland with snowfall on Mall Road', weather: '-2\u00b0C to 8\u00b0C', crowd: 'High', budgetRange: '\u20b96,000 - \u20b918,000', cabFare: 4999, highlights: ['Snowfall on The Ridge', 'Kufri snow activities', 'Heritage toy train ride', 'Christ Church photography'] },
      { name: 'Gulmarg', why: 'Asia\u2019s premier skiing destination with world-class gondola rides', weather: '-7\u00b0C to 0\u00b0C', crowd: 'High', budgetRange: '\u20b912,000 - \u20b935,000', cabFare: 8999, highlights: ['Gondola ride to Kongdoori', 'Skiing lessons for beginners', 'Alpather Lake frozen trek', 'Snow photography walks'] },
      { name: 'Jaisalmer', why: 'Golden desert at its best \u2014 pleasant winter days and freezing desert nights', weather: '5\u00b0C to 24\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 6499, highlights: ['Desert safari at Sam Dunes', 'Jaisalmer Fort exploration', 'Patwon Ki Haveli', 'Desert camping under stars'] },
      { name: 'Ranthambore', why: 'Peak wildlife season \u2014 best chance to spot Bengal tigers near watering holes', weather: '4\u00b0C to 22\u00b0C', crowd: 'High', budgetRange: '\u20b97,000 - \u20b920,000', cabFare: 4999, highlights: ['Tiger safari in Zone 1-5', 'Ranthambore Fort trek', 'Bird watching at Padam Talao', 'Rajasthani cultural evenings'] },
      { name: 'Jaipur', why: 'The Pink City at its most comfortable \u2014 cool mornings, warm days', weather: '8\u00b0C to 22\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 2999, highlights: ['Amber Fort sunrise visit', 'Hawa Mahal golden hour', 'Jaipur Literature Festival', 'Johari Bazaar shopping'] },
      { name: 'Agra', why: 'Taj Mahal in winter mist is magical \u2014 perfect weather for monument hopping', weather: '7\u00b0C to 21\u00b0C', crowd: 'Medium', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Taj Mahal misty sunrise', 'Agra Fort heritage walk', 'Fatehpur Sikri day trip', 'Mughlai cuisine trail'] },
      { name: 'Udaipur', why: 'Lake City romance with cool evenings and crystal-clear skies', weather: '8\u00b0C to 24\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 5499, highlights: ['Lake Pichola boat ride', 'City Palace tour', 'Jag Mandir island visit', 'Sunset at Sajjangarh'] },
      { name: 'Varanasi', why: 'Spiritual capital at its most atmospheric \u2014 winter Ganga Aarti is unforgettable', weather: '5\u00b0C to 20\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5999, highlights: ['Ganga Aarti at Dashashwamedh', 'Sunrise boat ride', 'Sarnath Buddhist pilgrimage', 'Kashi Vishwanath lane food walk'] },
    ],
    travelTips: [
      'Pack heavy woolens, thermals, and waterproof jackets for hill stations',
      'Book cabs and hotels well in advance \u2014 January is peak tourist season',
      'Carry chains for snow areas as roads can be slippery',
      'Check Rohtang Pass status before planning \u2014 often closed in January',
      'Early morning fog on plains can delay travel \u2014 start after 9 AM',
    ],
    festivals: [
      { name: 'Lohri', description: 'Bonfire festival celebrated across North India on January 13, marking the end of winter solstice' },
      { name: 'Makar Sankranti', description: 'Kite-flying festival on January 14\u201315, celebrated grandly in Jaipur and across Rajasthan' },
      { name: 'Republic Day', description: 'January 26 parade in Delhi \u2014 book early as the city fills up fast' },
    ],
    faqs: [
      { question: 'Where should I go in January for snow?', answer: 'Manali, Shimla, Gulmarg, and Auli are the best snow destinations in January. Manali offers the most accessible snowfall with Solang Valley and Rohtang (if open). Gulmarg has world-class skiing. Book your cab with Triveni Cabs for safe snow-road driving with experienced hill drivers.' },
      { question: 'Is January a good time to visit Rajasthan?', answer: 'January is the BEST time for Rajasthan. Days are pleasant (20-24\u00b0C) and nights are cool. Jaipur, Udaipur, Jaisalmer, and Ranthambore are all perfect. The Jaipur Literature Festival also happens in late January. We offer multi-city Rajasthan cab packages starting at \u20b92,999.' },
      { question: 'What should I pack for a January trip to Manali?', answer: 'Pack heavy woolens, thermals (top and bottom), waterproof jacket, snow boots, gloves, muffler, and sunglasses. Carry lip balm and moisturizer as the air is extremely dry. If you plan snow activities, waterproof pants are essential.' },
      { question: 'How much does a cab from Delhi to Manali cost in January?', answer: 'A one-way cab from Delhi to Manali costs \u20b95,999 for sedan and \u20b97,999 for SUV with Triveni Cabs. The 530 km journey takes 12-14 hours. We recommend our SUVs for January trips as they handle snow-covered roads better. Call 7668570551 to book.' },
      { question: 'Are roads to hill stations safe in January?', answer: 'Major highways to Shimla, Manali, and Mussoorie are generally open and well-maintained. However, roads beyond Manali (Rohtang, Leh) are usually closed. Our drivers are experienced hill-road specialists who carry chains and know alternate routes.' },
      { question: 'Can I do a weekend trip in January from Delhi?', answer: 'Absolutely! Top weekend getaways from Delhi in January: Agra (3-4 hrs, \u20b91,999), Jaipur (5 hrs, \u20b92,999), Rishikesh (6 hrs, \u20b93,999), or Shimla (7 hrs, \u20b94,999). We offer round-trip weekend packages with driver stay included. Call 7668570551 for quotes.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // FEBRUARY — Romance & Festivals
  // ════════════════════════════════════════════════════════
  {
    slug: 'february',
    month: 'February',
    tagline: 'Romance, Festivals & the Last of the Snow',
    destinations: [
      { name: 'Agra', why: 'Valentine\u2019s special \u2014 Taj Mahal, the ultimate monument of love', weather: '9\u00b0C to 25\u00b0C', crowd: 'High', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Taj Mahal sunrise with your partner', 'Mehtab Bagh sunset view', 'Mughlai dinner experience', 'Agra Fort romantic walk'] },
      { name: 'Udaipur', why: 'India\u2019s most romantic city \u2014 lake palaces, boat rides, and sunsets', weather: '10\u00b0C to 27\u00b0C', crowd: 'High', budgetRange: '\u20b96,000 - \u20b920,000', cabFare: 5499, highlights: ['Lake Pichola sunset cruise', 'City Palace candlelight dinner', 'Jag Niwas island visit', 'Vintage car museum'] },
      { name: 'Shimla', why: 'Late-season snowfall and fewer crowds than January', weather: '0\u00b0C to 10\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 4999, highlights: ['Last snowfall of the season', 'Ice skating at natural rink', 'Jakhu Temple trek', 'Green Valley views'] },
      { name: 'Manali', why: 'Heavy snowfall continues \u2014 Solang Valley is a winter sports playground', weather: '-4\u00b0C to 6\u00b0C', crowd: 'Medium', budgetRange: '\u20b97,000 - \u20b922,000', cabFare: 5999, highlights: ['Igloo camping in Solang', 'Snow tubing and skiing', 'Atal Tunnel drive to Sissu', 'Riverside bonfires'] },
      { name: 'Jodhpur', why: 'Blue City charm with perfect weather for heritage walks', weather: '10\u00b0C to 27\u00b0C', crowd: 'Low', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5999, highlights: ['Mehrangarh Fort sunrise', 'Blue City walking tour', 'Clock Tower market', 'Desert cuisine at Umaid Bhawan'] },
      { name: 'Ranthambore', why: 'Tiger sighting probability peaks \u2014 drier forests mean better visibility', weather: '7\u00b0C to 25\u00b0C', crowd: 'High', budgetRange: '\u20b97,000 - \u20b920,000', cabFare: 4999, highlights: ['Morning jeep safari', 'Canter safari for groups', 'Ranthambore Fort exploration', 'Lakeside bird watching'] },
      { name: 'Mathura & Vrindavan', why: 'Holi preparations begin \u2014 temples vibrant with pre-festival energy', weather: '9\u00b0C to 26\u00b0C', crowd: 'Medium', budgetRange: '\u20b93,000 - \u20b98,000', cabFare: 1999, highlights: ['Krishna Janmabhoomi temple', 'Banke Bihari darshan', 'Govardhan Parikrama', 'Prem Mandir light show'] },
      { name: 'Auli', why: 'India\u2019s best skiing destination \u2014 snow-covered meadows with Nanda Devi views', weather: '-5\u00b0C to 5\u00b0C', crowd: 'Medium', budgetRange: '\u20b98,000 - \u20b922,000', cabFare: 6999, highlights: ['Skiing on groomed slopes', 'Asia\u2019s highest gondola ride', 'Nanda Devi viewpoint', 'Gorson Bugyal snow trek'] },
      { name: 'Bikaner', why: 'Camel festival month \u2014 unique Rajasthani culture at its finest', weather: '7\u00b0C to 25\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5499, highlights: ['Camel Festival celebrations', 'Junagarh Fort tour', 'Karni Mata Temple', 'Rampuria Haveli walk'] },
    ],
    travelTips: [
      'February is peak Valentine\u2019s season \u2014 book Agra and Udaipur hotels 2-3 weeks early',
      'Hill stations still have snow but roads are more reliable than January',
      'Carry layers \u2014 mornings and evenings are cold, afternoons can be warm on plains',
      'Rajasthan is ideal this month \u2014 comfortable for sightseeing all day',
      'Holi falls in late Feb/March \u2014 check dates if you want to experience it',
    ],
    festivals: [
      { name: 'Bikaner Camel Festival', description: 'Two-day camel fair featuring camel races, beauty contests, and folk music performances' },
      { name: 'Surajkund Mela', description: 'International crafts fair near Delhi (Feb 1-17), showcasing handicrafts from across India' },
      { name: 'Taj Mahotsav', description: 'Cultural festival in Agra with arts, crafts, cuisine, and performances near the Taj' },
    ],
    faqs: [
      { question: 'Where should I take my partner in February?', answer: 'Agra (Taj Mahal) and Udaipur (Lake City) are the most romantic destinations. Agra is closer to Delhi (3-4 hours by cab, \u20b91,999) while Udaipur is a longer drive but incredibly scenic. We also recommend Shimla for couples who love snow. Call 7668570551 for couple trip packages.' },
      { question: 'Is February good for Rajasthan road trips?', answer: 'February is one of the best months for Rajasthan. The weather is ideal (15-27\u00b0C during the day) for exploring forts and palaces. A 5-day Jaipur-Jodhpur-Udaipur circuit is perfect. Our multi-city Rajasthan packages start at \u20b911,999 with experienced drivers.' },
      { question: 'Does Manali still have snow in February?', answer: 'Yes, February often has the heaviest snowfall in Manali. Solang Valley is covered in 3-5 feet of snow, and the Atal Tunnel provides easy access to Lahaul. Our SUVs are equipped for snow driving. Round trip from Delhi starts at \u20b911,999.' },
      { question: 'What is the cheapest winter destination from Delhi?', answer: 'Agra is the closest and cheapest \u2014 just \u20b91,999 one-way by cab (3-4 hours). For a budget hill station trip, try Mussoorie or Rishikesh at \u20b93,999. Mathura-Vrindavan is also very affordable at \u20b91,999 and combines spiritual and cultural experiences.' },
      { question: 'Can I book a cab for the Surajkund Mela?', answer: 'Absolutely! Surajkund is just 45 minutes from Delhi. We offer day-trip packages from \u20b9999 (8 hours, 80 km). The mela is a great family outing with food, crafts, and cultural performances. Book early as roads get congested during mela weeks.' },
      { question: 'Is Ranthambore open in February?', answer: 'Yes, Ranthambore National Park is open from October to June. February is one of the best months for tiger spotting as the forest is dry, making animal visibility excellent. Book safaris and cab together \u2014 our Jaipur-Ranthambore package starts at \u20b94,999.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // MARCH — Spring Blooms & Holi
  // ════════════════════════════════════════════════════════
  {
    slug: 'march',
    month: 'March',
    tagline: 'Spring Colours, Holi Festivities & Blossoming Trails',
    destinations: [
      { name: 'Mathura & Vrindavan', why: 'Lathmar Holi \u2014 the most iconic Holi celebration in India', weather: '14\u00b0C to 30\u00b0C', crowd: 'Very High', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Lathmar Holi in Barsana', 'Holi at Banke Bihari Temple', 'Phalen Ki Holi processions', 'Temple flower showers'] },
      { name: 'Rishikesh', why: 'Perfect rafting weather before summer heat \u2014 river is at ideal flow', weather: '12\u00b0C to 28\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 3999, highlights: ['White water rafting on Ganga', 'Bungee jumping (highest in India)', 'Lakshman Jhula walks', 'Beatles Ashram meditation'] },
      { name: 'Dharamshala', why: 'Spring blossoms carpet the hillside \u2014 rhododendrons bloom everywhere', weather: '8\u00b0C to 18\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 5499, highlights: ['Triund Trek spring trail', 'Dalai Lama Temple visit', 'McLeod Ganj cafe culture', 'Bhagsu Waterfall trek'] },
      { name: 'Jaipur', why: 'Elephant Festival and Holi make March magical in the Pink City', weather: '14\u00b0C to 30\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 2999, highlights: ['Elephant Festival celebrations', 'Holi at City Palace', 'Amber Fort in spring light', 'Nahargarh sunset views'] },
      { name: 'Haridwar', why: 'Pleasant weather for spiritual exploration before summer pilgrim rush', weather: '12\u00b0C to 27\u00b0C', crowd: 'Medium', budgetRange: '\u20b93,000 - \u20b99,000', cabFare: 3499, highlights: ['Ganga Aarti at Har Ki Pauri', 'Mansa Devi cable car', 'Chandi Devi temple trek', 'Rajaji National Park safari'] },
      { name: 'Dehradun', why: 'Gateway city blossoms in spring \u2014 perfect base for Mussoorie day trip', weather: '10\u00b0C to 25\u00b0C', crowd: 'Low', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 3999, highlights: ['Robbers Cave exploration', 'Sahastradhara hot springs', 'Forest Research Institute', 'Mussoorie day trip'] },
      { name: 'Amritsar', why: 'Comfortable weather for Golden Temple visit and Wagah Border ceremony', weather: '12\u00b0C to 26\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Golden Temple at dawn', 'Wagah Border flag ceremony', 'Jallianwala Bagh memorial', 'Amritsari kulcha food trail'] },
      { name: 'Agra', why: 'Last comfortable month before summer \u2014 Taj looks spectacular in spring light', weather: '14\u00b0C to 30\u00b0C', crowd: 'Medium', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Taj Mahal spring garden view', 'Agra Fort heritage walk', 'Wildlife SOS sanctuary', 'Fatehpur Sikri excursion'] },
      { name: 'Pushkar', why: 'Holi in the holy city \u2014 foreigners flock here for vibrant celebrations', weather: '14\u00b0C to 30\u00b0C', crowd: 'High', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 4499, highlights: ['World-famous Pushkar Holi', 'Brahma Temple darshan', 'Pushkar Lake sunset', 'Desert camel ride'] },
    ],
    travelTips: [
      'Book Mathura/Vrindavan cabs 2 weeks before Holi \u2014 demand is extreme',
      'Wear white clothes for Holi celebrations \u2014 colours wash off easier',
      'March is the last comfortable month for Rajasthan before heat kicks in',
      'Spring treks in Himachal are beautiful \u2014 trails open up after winter',
      'Carry sunscreen even in hill stations \u2014 UV is strong in spring',
    ],
    festivals: [
      { name: 'Holi', description: 'Festival of colours celebrated across India. Lathmar Holi in Barsana/Mathura starts a week before the main day' },
      { name: 'Maha Shivratri', description: 'Grand celebrations at Haridwar, Rishikesh, and Varanasi with all-night temple vigils' },
      { name: 'International Yoga Festival', description: 'Week-long yoga festival in Rishikesh attracting practitioners from around the world' },
    ],
    faqs: [
      { question: 'Where is the best place to celebrate Holi?', answer: 'Mathura-Vrindavan is the undisputed Holi capital. Lathmar Holi in Barsana starts a week before the main festival. Pushkar is also famous, especially among international tourists. We offer special Holi packages: Delhi to Mathura round trip for \u20b91,999 with experienced drivers who know the festival routes.' },
      { question: 'Is March good for trekking in Himachal?', answer: 'March is excellent for lower-altitude treks. Triund (Dharamshala), Kheerganga, and Prashar Lake treks open up. Snow starts melting at lower elevations, creating stunning waterfalls. Our cab-plus-trek packages start at \u20b95,499 from Delhi with drop-off at trail heads.' },
      { question: 'What should I do for a 3-day trip in March from Delhi?', answer: 'Best 3-day options: Rishikesh-Haridwar (spiritual + adventure), Jaipur-Pushkar (heritage + Holi), or Dharamshala (nature + culture). Our 3-day packages include cab, driver stay, and toll \u2014 starting at \u20b95,999 for sedan. Call 7668570551 for customized itineraries.' },
      { question: 'Is it too hot in March for Rajasthan?', answer: 'Early March is perfect (20-28\u00b0C), but temperatures rise to 30-35\u00b0C by late March. Best to visit in the first two weeks. Morning sightseeing and evening explorations are recommended. We provide AC cabs for comfortable travel between cities.' },
      { question: 'How far in advance should I book a Holi trip cab?', answer: 'Book at least 10-14 days in advance for Holi trips. Mathura, Vrindavan, and Barsana see extreme demand with roads packed. Our drivers know back routes to avoid traffic jams. Early booking ensures guaranteed vehicle availability.' },
      { question: 'Can I visit Rishikesh and Haridwar together?', answer: 'Yes! They are just 25 km apart. A 2-day trip covers both perfectly \u2014 Day 1 in Haridwar (temples, Ganga Aarti) and Day 2 in Rishikesh (rafting, cafes, ashrams). Our round-trip package from Delhi covers both cities for \u20b93,999.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // APRIL — Hill Stations Awaken
  // ════════════════════════════════════════════════════════
  {
    slug: 'april',
    month: 'April',
    tagline: 'Escape the Heat \u2014 Hill Stations Awaken',
    destinations: [
      { name: 'Mussoorie', why: 'Queen of Hills at its most pleasant before monsoon', weather: '10\u00b0C to 22\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 3999, highlights: ['Kempty Falls visit', 'Camel\u2019s Back Road walk', 'Gun Hill cable car', 'Landour bakeries and cafes'] },
      { name: 'Nainital', why: 'Lake city at its most beautiful \u2014 boating season begins with clear skies', weather: '10\u00b0C to 22\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 4999, highlights: ['Naini Lake boating', 'Snow View Point cable car', 'Tiffin Top trek', 'Mall Road evening walk'] },
      { name: 'Dharamshala', why: 'Wildflowers carpet the trails as rhododendron season ends', weather: '10\u00b0C to 22\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 5499, highlights: ['Triund Trek wildflowers', 'IPL cricket at HPCA stadium', 'Tibetan cooking class', 'Naddi viewpoint sunrise'] },
      { name: 'Rishikesh', why: 'Adventure season peaks \u2014 warm enough for rafting, not yet monsoon', weather: '16\u00b0C to 32\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 3999, highlights: ['Grade 3-4 river rafting', 'Cliff jumping at Shivpuri', 'Camping by the Ganga', 'Yoga retreat experiences'] },
      { name: 'Kasol', why: 'Parvati Valley comes alive \u2014 snow melts reveal lush green meadows', weather: '6\u00b0C to 18\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Kheerganga hot spring trek', 'Chalal village walk', 'Tosh village exploration', 'Israeli-Indian fusion cafes'] },
      { name: 'Jim Corbett', why: 'Last month before park closes for monsoon \u2014 wildlife is most visible', weather: '18\u00b0C to 36\u00b0C', crowd: 'Medium', budgetRange: '\u20b96,000 - \u20b918,000', cabFare: 4499, highlights: ['Dhikala zone jeep safari', 'Tiger spotting peak season', 'Elephant safari experience', 'Corbett waterfall trek'] },
      { name: 'Shimla', why: 'Perfect pre-summer escape \u2014 apple orchards start blooming', weather: '8\u00b0C to 20\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 4999, highlights: ['Apple orchard visits in Narkanda', 'Mashobra nature trails', 'Heritage walk on Mall Road', 'Toy train from Kalka'] },
      { name: 'Dalhousie', why: 'Peaceful hill station with stunning Dhauladhar views and no crowds', weather: '8\u00b0C to 18\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Kalatop Wildlife Sanctuary', 'Panchpula waterfall trek', 'Dainkund Peak hike', 'St. John\u2019s Church heritage'] },
      { name: 'Manali', why: 'Snow melts into waterfalls \u2014 valley turns green while peaks stay white', weather: '2\u00b0C to 15\u00b0C', crowd: 'Medium', budgetRange: '\u20b97,000 - \u20b920,000', cabFare: 5999, highlights: ['Hampta Pass trek opening', 'Jogini Waterfall spring flow', 'Solang Valley paragliding begins', 'Van Vihar nature park'] },
    ],
    travelTips: [
      'April is the sweet spot for hill stations \u2014 pleasant and not yet crowded',
      'Book early for long weekends \u2014 Ram Navami and Ambedkar Jayanti create rush',
      'Plains start heating up \u2014 AC cabs are essential for Rajasthan and UP routes',
      'Carry light woolens for hill stations \u2014 evenings can still be chilly',
      'Wildlife parks close for monsoon from June \u2014 April is the last chance',
    ],
    festivals: [
      { name: 'Ram Navami', description: 'Birthday of Lord Ram \u2014 grand celebrations in Ayodhya with special processions' },
      { name: 'Baisakhi', description: 'Harvest festival of Punjab (April 13-14) \u2014 special celebrations in Amritsar with folk dances' },
      { name: 'Ambedkar Jayanti', description: 'National holiday on April 14 \u2014 long weekend opportunity for travel' },
    ],
    faqs: [
      { question: 'Where should I go in April to beat the heat?', answer: 'Best options from Delhi: Mussoorie (6 hrs, 15-22\u00b0C), Nainital (7 hrs, 12-22\u00b0C), Shimla (7 hrs, 10-20\u00b0C), or Manali (12 hrs, 5-15\u00b0C). All are significantly cooler than the plains. Our hill station packages start at \u20b93,999 one-way with experienced hill drivers.' },
      { question: 'Is April good for rafting in Rishikesh?', answer: 'April is excellent for rafting! Water levels are ideal for Grade 3-4 rapids, and the weather is warm enough to enjoy getting wet. Best stretches: Shivpuri to Rishikesh (16 km) or Brahmpuri (9 km). We offer Delhi-Rishikesh cab + rafting packages from \u20b93,999.' },
      { question: 'Can I do a road trip from Delhi to Kasol in April?', answer: 'April is a fantastic time for Kasol. The Parvati Valley turns green, and Kheerganga trek opens up. The drive from Delhi is about 12 hours via Chandigarh. We recommend breaking the journey at Chandigarh. Our one-way fare to Kasol starts at \u20b95,999.' },
      { question: 'Is Jim Corbett open in April?', answer: 'Yes, most zones are open in April (Bijrani, Jhirna, Dhela, Durga Devi). Only Dhikala sometimes closes by mid-April. This is actually a great time for tiger sightings as water sources dry up. Our Corbett packages from Delhi start at \u20b94,499.' },
      { question: 'What are the best long weekend destinations in April?', answer: 'For a 3-day weekend: Mussoorie + Dhanaulti (close, scenic), Nainital + Bhimtal (lake district), or Rishikesh + Haridwar (spiritual + adventure). For 4 days: Dharamshala or Kasol. All reachable within 6-12 hours by cab. Book early for long weekends!' },
      { question: 'How hot does it get in Rajasthan in April?', answer: 'April sees 35-40\u00b0C in Rajasthan. We don\u2019t recommend Rajasthan for April unless you\u2019re comfortable with heat. Stick to hill stations instead. If you must visit, early morning sightseeing in our AC cabs makes it manageable.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // MAY — Peak Summer & Hill Station Rush
  // ════════════════════════════════════════════════════════
  {
    slug: 'may',
    month: 'May',
    tagline: 'Summer Rush \u2014 Hill Stations at Their Busiest',
    destinations: [
      { name: 'Manali', why: 'Every North Indian\u2019s summer escape \u2014 Rohtang Pass opens for the season', weather: '5\u00b0C to 20\u00b0C', crowd: 'Very High', budgetRange: '\u20b98,000 - \u20b928,000', cabFare: 5999, highlights: ['Rohtang Pass day trip', 'Solang Valley paragliding', 'River crossing at Beas', 'Atal Tunnel to Sissu'] },
      { name: 'Shimla', why: 'Colonial charm with summer buzz \u2014 Mall Road comes alive', weather: '12\u00b0C to 25\u00b0C', crowd: 'Very High', budgetRange: '\u20b96,000 - \u20b918,000', cabFare: 4999, highlights: ['Kufri horse riding', 'Naldehra golf course', 'Toy train experience', 'Summer Hill nature walks'] },
      { name: 'Mussoorie', why: 'Closest hill station to Delhi \u2014 perfect for families with young children', weather: '14\u00b0C to 28\u00b0C', crowd: 'Very High', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 3999, highlights: ['Company Garden picnic', 'Kempty Falls splash', 'Lal Tibba viewpoint', 'Cloud\u2019s End nature trail'] },
      { name: 'Nainital', why: 'Lake District magic \u2014 boating, trekking, and mountain views', weather: '12\u00b0C to 25\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 4999, highlights: ['Naini Lake paddleboating', 'Bhimtal and Sattal day trip', 'Eco Cave Gardens', 'Naina Devi Temple visit'] },
      { name: 'Kasol', why: 'Backpacker paradise \u2014 perfect weather for Kheerganga and beyond', weather: '8\u00b0C to 22\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 5999, highlights: ['Kheerganga hot spring trek', 'Malana village visit', 'Tosh village camping', 'Riverside bonfire nights'] },
      { name: 'Dharamshala', why: 'McLeod Ganj buzzes with travelers \u2014 Triund Trek at its best', weather: '14\u00b0C to 26\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 5499, highlights: ['Triund overnight camping', 'Bhagsunag waterfall trek', 'Tibetan market shopping', 'HPCA Stadium visit'] },
      { name: 'Dalhousie', why: 'Quieter alternative to Shimla/Manali \u2014 old-world charm with fewer crowds', weather: '12\u00b0C to 22\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Khajjiar (Mini Switzerland)', 'Chamba heritage walk', 'Panchpula nature trail', 'Dainkund Peak sunrise'] },
      { name: 'Chopta & Tungnath', why: 'Uttarakhand\u2019s hidden gem \u2014 world\u2019s highest Shiva temple trek', weather: '5\u00b0C to 15\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Tungnath Temple trek (3,680m)', 'Chandrashila summit sunrise', 'Deoria Tal camping', 'Sari village homestays'] },
      { name: 'Auli', why: 'Summer meadows replace ski slopes \u2014 Bugyal treks with panoramic views', weather: '5\u00b0C to 18\u00b0C', crowd: 'Low', budgetRange: '\u20b97,000 - \u20b918,000', cabFare: 6999, highlights: ['Gorson Bugyal meadow trek', 'Gondola with Nanda Devi views', 'Kuari Pass trek', 'Joshimath exploration'] },
      { name: 'Spiti Valley', why: 'Roads start opening \u2014 early season adventurers get pristine landscapes', weather: '-2\u00b0C to 15\u00b0C', crowd: 'Low', budgetRange: '\u20b910,000 - \u20b930,000', cabFare: 9999, highlights: ['Key Monastery visit', 'Chandratal Lake opening', 'Kibber village exploration', 'Kaza market walk'] },
    ],
    travelTips: [
      'Book hill station cabs 3-4 weeks in advance \u2014 May is absolute peak season',
      'Expect traffic jams near Shimla, Manali, and Mussoorie on weekends',
      'Start early morning to avoid highway congestion \u2014 leave Delhi by 4-5 AM',
      'Carry light cotton clothes with one warm layer for hill station evenings',
      'AC is essential for plains travel \u2014 temperatures cross 40\u00b0C in Delhi, Agra, Jaipur',
    ],
    festivals: [
      { name: 'Buddha Purnima', description: 'Full moon day celebrating Buddha\u2019s birth \u2014 special celebrations in Bodh Gaya and Dharamshala' },
      { name: 'Summer Festival Shimla', description: 'Cultural extravaganza on The Ridge with folk music, food stalls, and performances' },
      { name: 'Manali Summer Carnival', description: 'Week-long celebration with folk dances, music, and adventure sports competitions' },
    ],
    faqs: [
      { question: 'Which is the best hill station from Delhi in May?', answer: 'For quick getaways: Mussoorie (6 hrs, \u20b93,999). For families: Nainital (7 hrs, \u20b94,999). For adventure: Manali (12 hrs, \u20b95,999). For peace: Dalhousie (11 hrs, \u20b95,999). All are significantly cooler than Delhi\u2019s 40\u00b0C+ heat. Call 7668570551 to book.' },
      { question: 'Is Rohtang Pass open in May?', answer: 'Rohtang Pass typically opens in mid-May (exact date depends on snowfall and BRO clearance). The Atal Tunnel to Sissu is open year-round. We monitor pass status daily. Our Manali packages include Rohtang/Atal Tunnel day trips.' },
      { question: 'How early should I book a cab for May trips?', answer: 'Book at least 3-4 weeks in advance. Weekend availability fills up quickly. For long weekends (around Buddha Purnima), book a month ahead. Triveni Cabs guarantees your booking once confirmed \u2014 no last-minute cancellations.' },
      { question: 'Is Spiti Valley accessible in May?', answer: 'The Shimla-Spiti route via Kinnaur starts opening in late April/May. The Manali-Spiti route (via Rohtang/Kunzum) usually opens in June. Our 4x4 vehicles handle Spiti roads well. 7-day Spiti circuit from \u20b915,999.' },
      { question: 'What are some offbeat hill stations for May?', answer: 'Skip crowded Shimla/Manali and try: Chopta-Tungnath (Uttarakhand), Mukteshwar (near Nainital), Chail (near Shimla), Bir Billing (Himachal), or Lansdowne (Uttarakhand). These are peaceful, scenic, and uncrowded.' },
      { question: 'How much does a round trip to Manali cost in May?', answer: 'Round trip from Delhi: Sedan \u20b911,999, SUV (Innova/Ertiga) \u20b915,999. This includes driver stay, toll, and parking. Trip duration is typically 4-5 days. Call 7668570551 for exact quotes.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // JUNE — Pre-Monsoon & High Altitude
  // ════════════════════════════════════════════════════════
  {
    slug: 'june',
    month: 'June',
    tagline: 'Chase the Mountains Before the Monsoon',
    destinations: [
      { name: 'Ladakh', why: 'Season opens \u2014 crystal-clear skies, open passes, and magical landscapes', weather: '5\u00b0C to 20\u00b0C', crowd: 'High', budgetRange: '\u20b915,000 - \u20b945,000', cabFare: 12999, highlights: ['Pangong Lake overnight camp', 'Nubra Valley sand dunes', 'Khardung La pass drive', 'Magnetic Hill experience'] },
      { name: 'Spiti Valley', why: 'Both routes fully open \u2014 the complete Spiti circuit is now possible', weather: '0\u00b0C to 18\u00b0C', crowd: 'Medium', budgetRange: '\u20b912,000 - \u20b935,000', cabFare: 9999, highlights: ['Chandratal Lake camping', 'Key Monastery visit', 'Kunzum Pass crossing', 'Pin Valley National Park'] },
      { name: 'Manali', why: 'Gateway to Ladakh and Spiti \u2014 enjoy before monsoon hits in July', weather: '8\u00b0C to 22\u00b0C', crowd: 'High', budgetRange: '\u20b97,000 - \u20b922,000', cabFare: 5999, highlights: ['Rohtang Pass excursion', 'Hampta Pass trek', 'Beas Kund trek', 'Naggar Castle heritage'] },
      { name: 'Shimla', why: 'Still pleasant before monsoon \u2014 last chance for clear mountain views', weather: '14\u00b0C to 26\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 4999, highlights: ['Tattapani hot springs', 'Fagu sunrise point', 'Chail wildlife sanctuary', 'Shimla heritage walk'] },
      { name: 'Kasol', why: 'Last window before monsoon closes treks \u2014 Kheerganga at its lushest', weather: '10\u00b0C to 24\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 5999, highlights: ['Kheerganga final-window trek', 'Tosh village panoramas', 'Grahan village day hike', 'Parvati River camps'] },
      { name: 'Mussoorie', why: 'Cloud formations start \u2014 dramatic sunsets and misty mornings', weather: '16\u00b0C to 28\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 3999, highlights: ['George Everest viewpoint', 'Jabarkhet Nature Reserve', 'Landour bakehouse trail', 'Mossy Falls hidden gem'] },
      { name: 'Nainital', why: 'Lake sparkles in pre-monsoon light \u2014 boating is at its best', weather: '14\u00b0C to 26\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 4999, highlights: ['Naini Lake sunset boating', 'Pangot bird watching', 'Mukteshwar day trip', 'Kilbury bird sanctuary'] },
      { name: 'Bir Billing', why: 'Paragliding capital of India \u2014 thermals are strong for epic flights', weather: '14\u00b0C to 26\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5499, highlights: ['Tandem paragliding flight', 'Billing takeoff site trek', 'Monastery hopping', 'Tibetan colony exploration'] },
      { name: 'Auli', why: 'Alpine meadows in full bloom \u2014 Bugyal flowers create a rainbow carpet', weather: '5\u00b0C to 18\u00b0C', crowd: 'Low', budgetRange: '\u20b97,000 - \u20b918,000', cabFare: 6999, highlights: ['Gorson Bugyal flower meadows', 'Kuari Pass window trek', 'Joshimath temple visit', 'Nanda Devi base panoramas'] },
    ],
    travelTips: [
      'June is the LAST window for Ladakh/Spiti before monsoon \u2014 book immediately',
      'Carry rain gear even for hill stations \u2014 pre-monsoon showers are common',
      'Check road conditions for Manali-Leh highway daily \u2014 landslides possible',
      'Altitude sickness is real in Ladakh \u2014 spend 2 days acclimatizing in Leh',
      'Hydrate aggressively at high altitude \u2014 dry air causes dehydration quickly',
    ],
    festivals: [
      { name: 'Hemis Festival', description: 'Largest monastic festival in Ladakh with masked dances and spiritual ceremonies' },
      { name: 'Sindhu Darshan', description: 'Festival celebrating the Indus River held at Leh, promoting national harmony' },
      { name: 'Saga Dawa', description: 'Buddhist festival marking Buddha\u2019s life events \u2014 celebrated across Ladakh and Spiti' },
    ],
    faqs: [
      { question: 'Is June good for Ladakh?', answer: 'June is one of the BEST months for Ladakh. All passes (Khardung La, Chang La, Tanglang La) are open, roads are clear, and the weather is warm. Our Manali-Leh-Manali package starts at \u20b912,999 for 7 days.' },
      { question: 'Can I do a Spiti Valley circuit in June?', answer: 'Yes! June is when both the Shimla-Kinnaur and Manali-Kunzum routes are fully open. This is the best month for Chandratal Lake camping. Our 8-day Spiti circuit costs \u20b915,999 for sedan. SUV recommended at \u20b919,999.' },
      { question: 'Does monsoon affect hill stations in June?', answer: 'Pre-monsoon showers start in late June but are usually brief. The first two weeks are mostly dry and clear. After mid-June, expect afternoon showers in Himachal and Uttarakhand. Carry a poncho and waterproof bags.' },
      { question: 'What is the Delhi to Leh cab fare?', answer: 'Our Manali-Leh route fare starts at \u20b912,999 for sedan (7-day package). The route takes 2 days of driving (1,000+ km). We also offer Srinagar-Leh packages from \u20b914,999. All include driver accommodation. Call 7668570551.' },
      { question: 'Is June safe for mountain road trips?', answer: 'First two weeks of June are excellent. After mid-June, landslide risk increases on some routes. We monitor road conditions 24/7 and our drivers carry emergency kits. Always buy travel insurance for high-altitude trips.' },
      { question: 'What should I pack for Ladakh in June?', answer: 'Essentials: layers (temp swings 5-20\u00b0C), sunscreen SPF 50+, sunglasses, lip balm, altitude sickness medication, warm jacket, thermals for nights. Our drivers carry oxygen cylinders and first-aid kits as standard.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // JULY — Monsoon Magic
  // ════════════════════════════════════════════════════════
  {
    slug: 'july',
    month: 'July',
    tagline: 'Monsoon Magic \u2014 Green Landscapes & Offbeat Adventures',
    destinations: [
      { name: 'Ladakh', why: 'Rain shadow region stays dry while rest of India is drenched', weather: '8\u00b0C to 25\u00b0C', crowd: 'Very High', budgetRange: '\u20b915,000 - \u20b945,000', cabFare: 12999, highlights: ['Pangong Lake turquoise waters', 'Tso Moriri pristine camping', 'Nubra Valley camel ride', 'Hemis Festival attendance'] },
      { name: 'Spiti Valley', why: 'Dry trans-Himalayan valley \u2014 monsoon barely touches Spiti', weather: '2\u00b0C to 18\u00b0C', crowd: 'High', budgetRange: '\u20b912,000 - \u20b935,000', cabFare: 9999, highlights: ['Chandratal camping', 'Dhankar Monastery perch', 'Hikkim highest post office', 'Langza fossil hunting'] },
      { name: 'Valley of Flowers', why: 'UNESCO site opens \u2014 300+ species of wildflowers bloom simultaneously', weather: '5\u00b0C to 15\u00b0C', crowd: 'Medium', budgetRange: '\u20b98,000 - \u20b920,000', cabFare: 6999, highlights: ['Valley of Flowers National Park', 'Hemkund Sahib pilgrimage', 'Govindghat base camp', 'Rare Himalayan flora photography'] },
      { name: 'Udaipur', why: 'Lakes overflow and the City of Lakes lives up to its name', weather: '24\u00b0C to 34\u00b0C', crowd: 'Low', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 5499, highlights: ['Lake Pichola at full glory', 'Monsoon Palace sunset', 'Jag Mandir island visit', 'Green Aravalli drives'] },
      { name: 'Dehradun', why: 'Monsoon makes the Doon Valley lush \u2014 waterfalls come alive', weather: '20\u00b0C to 32\u00b0C', crowd: 'Low', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 3999, highlights: ['Robbers Cave monsoon flow', 'Sahastradhara mineral springs', 'Mindrolling Monastery', 'Lacchiwala picnic spot'] },
      { name: 'Mount Abu', why: 'Rajasthan\u2019s only hill station \u2014 monsoon transforms the arid Aravallis', weather: '20\u00b0C to 30\u00b0C', crowd: 'Low', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5999, highlights: ['Nakki Lake monsoon beauty', 'Dilwara Jain Temples', 'Guru Shikhar highest point', 'Trevor\u2019s Tank wildlife'] },
      { name: 'Kasol', why: 'Monsoon brings waterfalls and mushroom season \u2014 valley beauty peaks', weather: '10\u00b0C to 22\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Waterfall photography walks', 'Parvati Valley in mist', 'Cafe culture in rain', 'Riverside bonfire evenings'] },
      { name: 'Tirthan Valley', why: 'Hidden gem of Himachal \u2014 pristine river, trout fishing, and zero crowds', weather: '12\u00b0C to 24\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5499, highlights: ['Great Himalayan National Park edge', 'Trout fishing in Tirthan River', 'Jalori Pass trek', 'Serolsar Lake hike'] },
      { name: 'Cherrapunji & Shillong', why: 'Wettest place on earth in full glory \u2014 living root bridges and waterfalls', weather: '15\u00b0C to 23\u00b0C', crowd: 'Medium', budgetRange: '\u20b910,000 - \u20b925,000', cabFare: 14999, highlights: ['Living root bridges trek', 'Nohkalikai Falls', 'Dawki crystal clear river', 'Shillong Police Bazaar'] },
    ],
    travelTips: [
      'Ladakh and Spiti are monsoon-proof \u2014 they sit in the rain shadow region',
      'Carry waterproof bags, rain jackets, and quick-dry clothes everywhere',
      'Road conditions deteriorate in monsoon \u2014 allow extra travel time',
      'Leeches are common on monsoon treks \u2014 carry salt and leech socks',
      'Book monsoon specials \u2014 hotels offer 30-50% discounts this season',
    ],
    festivals: [
      { name: 'Hemis Festival', description: 'Two-day masked dance festival at Hemis Monastery, Ladakh' },
      { name: 'Teej', description: 'Monsoon festival for married women \u2014 celebrated with swings, songs, and henna across North India' },
      { name: 'Amarnath Yatra', description: 'Sacred pilgrimage to the ice Shivling cave in Kashmir \u2014 annual yatra from July to August' },
    ],
    faqs: [
      { question: 'Where can I travel in July without monsoon?', answer: 'Ladakh and Spiti Valley are in the Himalayan rain shadow and receive minimal monsoon rainfall. Ladakh in July has warm days (20-25\u00b0C) and clear skies. Both are perfect for July travel. Our Ladakh packages start at \u20b912,999 from Manali.' },
      { question: 'Is it safe to travel by road in monsoon?', answer: 'Main highways are well-maintained and safe. Mountain roads can be tricky \u2014 we send experienced hill drivers with monsoon expertise. Our vehicles have all-weather tyres and emergency kits. We monitor weather 24/7. Avoid night driving in hills during monsoon.' },
      { question: 'Can I visit Valley of Flowers in July?', answer: 'July is THE best month for Valley of Flowers! Peak bloom is mid-July to mid-August. You trek 17 km from Govindghat. Our cab gets you to Govindghat from Haridwar/Rishikesh (\u20b96,999 round trip) where the trek begins.' },
      { question: 'Is Udaipur beautiful in monsoon?', answer: 'Udaipur in monsoon is magical! All lakes fill up, Monsoon Palace offers dramatic cloud views, and the Aravallis turn emerald green. Hotels offer 30-40% monsoon discounts. Our package from Delhi starts at \u20b95,499 one-way.' },
      { question: 'What should I pack for a monsoon trip?', answer: 'Essentials: waterproof jacket/poncho, quick-dry clothes, waterproof phone pouch, umbrella, extra socks, anti-fungal powder, insect repellent, waterproof backpack cover. For treks: leech socks and salt.' },
      { question: 'Are there monsoon discounts on cab fares?', answer: 'Yes! July-August is off-peak for most destinations (except Ladakh). We offer 10-15% monsoon discounts on round-trip bookings. Hotels also offer 30-50% off. Call 7668570551 for monsoon special packages.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // AUGUST — Monsoon Continues & Independence Day
  // ════════════════════════════════════════════════════════
  {
    slug: 'august',
    month: 'August',
    tagline: 'Green India, Monsoon Retreats & Independence Day Escapes',
    destinations: [
      { name: 'Ladakh', why: 'Peak season continues \u2014 longest daylight hours and warmest temperatures', weather: '10\u00b0C to 27\u00b0C', crowd: 'Very High', budgetRange: '\u20b915,000 - \u20b945,000', cabFare: 12999, highlights: ['Pangong Lake changing colours', 'Tso Moriri wildlife', 'Zanskar Valley opening', 'Lamayuru Moonland landscapes'] },
      { name: 'Valley of Flowers', why: 'Peak bloom \u2014 the valley is a riot of brahmakamal, blue poppy, and cobra lily', weather: '5\u00b0C to 15\u00b0C', crowd: 'High', budgetRange: '\u20b98,000 - \u20b920,000', cabFare: 6999, highlights: ['Peak wildflower bloom', 'Hemkund Sahib Gurudwara', 'Alpine butterfly photography', 'Badrinath temple side trip'] },
      { name: 'Spiti Valley', why: 'Summer warmth makes the cold desert comfortable \u2014 all roads clear', weather: '5\u00b0C to 20\u00b0C', crowd: 'High', budgetRange: '\u20b912,000 - \u20b935,000', cabFare: 9999, highlights: ['Complete Spiti circuit drive', 'Tabo 1,000-year-old murals', 'Pin Valley snow leopard territory', 'Chicham bridge thrill'] },
      { name: 'Udaipur', why: 'Lakes at their fullest \u2014 the Venice of the East at maximum splendour', weather: '24\u00b0C to 33\u00b0C', crowd: 'Low', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 5499, highlights: ['Fateh Sagar Lake boat ride', 'Monsoon Palace cloud show', 'Vintage car museum', 'Haldighati battlefield visit'] },
      { name: 'Tirthan Valley', why: 'Hidden Himachal \u2014 pristine river valley at the edge of Great Himalayan NP', weather: '12\u00b0C to 24\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5499, highlights: ['Great Himalayan National Park', 'Trout fishing in Tirthan River', 'Jalori Pass trek', 'Serolsar Lake hike'] },
      { name: 'Jibhi', why: 'Instagram-famous hamlet with waterfalls, forests, and wooden homestays', weather: '12\u00b0C to 22\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5499, highlights: ['Jibhi waterfall trek', 'Chehni Kothi ancient tower', 'Treehouse stays', 'Jalori Pass day drive'] },
      { name: 'Bir Billing', why: 'Monsoon thermals create dramatic flights \u2014 experienced pilots love August', weather: '14\u00b0C to 26\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5499, highlights: ['Tandem paragliding in clouds', 'Monastery trail walk', 'Billing takeoff point trek', 'Barot Valley day trip'] },
      { name: 'Coorg', why: 'Peak monsoon beauty \u2014 waterfalls, coffee aroma, and misty hills', weather: '18\u00b0C to 25\u00b0C', crowd: 'Medium', budgetRange: '\u20b96,000 - \u20b918,000', cabFare: 7999, highlights: ['Iruppu Falls at full force', 'Dubare elephant camp', 'Mandalpatti Peak jeep ride', 'Homemade Kodava cuisine'] },
      { name: 'Dehradun', why: 'Lush green Doon Valley \u2014 waterfalls and monsoon beauty at doorstep', weather: '20\u00b0C to 32\u00b0C', crowd: 'Low', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 3999, highlights: ['Robbers Cave monsoon flow', 'Sahastradhara springs', 'Mindrolling Monastery', 'Mussoorie monsoon day trip'] },
    ],
    travelTips: [
      'Independence Day (Aug 15) long weekend fills up fast \u2014 book 3 weeks ahead',
      'Monsoon is still strong \u2014 waterproof everything and carry dry bags',
      'Ladakh and Spiti roads may have brief closures due to cloud bursts',
      'Mountain leeches are active \u2014 carry salt, tobacco, or leech socks',
      'Waterfalls are at peak \u2014 Rishikesh, Mussoorie, and Dehradun areas are stunning',
    ],
    festivals: [
      { name: 'Independence Day', description: 'August 15 \u2014 special celebrations at Red Fort, Delhi. Long weekend travel opportunity' },
      { name: 'Raksha Bandhan', description: 'Brother-sister festival \u2014 family travel increases during this period' },
      { name: 'Janmashtami', description: 'Krishna\u2019s birthday \u2014 grand celebrations in Mathura and Vrindavan with midnight festivities' },
    ],
    faqs: [
      { question: 'Is August too late for Ladakh?', answer: 'Not at all! August is still peak Ladakh season \u2014 warmest month with long days. Occasional cloud bursts can block roads temporarily but our experienced drivers know alternate routes. Book our 7-day Ladakh circuit at \u20b912,999.' },
      { question: 'Where should I go for the Independence Day long weekend?', answer: 'Best 3-day options: Tirthan Valley (offbeat, peaceful), Bir Billing (adventure), Jibhi (Instagram-worthy), or Rishikesh (rafting + monsoon waterfalls). Avoid Manali/Shimla \u2014 extremely crowded on long weekends.' },
      { question: 'Is Valley of Flowers still blooming in August?', answer: 'August is peak bloom! Mid-July to mid-August sees maximum wildflower variety including rare Brahmakamal and Blue Poppy. Trek from Govindghat \u2014 our cab gets you there from Haridwar for \u20b96,999 round trip.' },
      { question: 'Can I visit Mathura for Janmashtami by cab?', answer: 'Absolutely! Janmashtami in Mathura-Vrindavan is a once-in-a-lifetime experience. Midnight celebrations at Krishna Janmabhoomi temple are spectacular. Our Delhi-Mathura round trip costs \u20b91,999. Book at least 2 weeks ahead.' },
      { question: 'What are budget monsoon destinations from Delhi?', answer: 'Budget picks: Dehradun (\u20b93,999), Rishikesh (\u20b93,999), Mussoorie (\u20b93,999). Monsoon discounts mean hotel rates are 30-50% lower. Our round-trip packages include driver stay and toll.' },
      { question: 'Is it safe to drive to Spiti in August?', answer: 'August Spiti roads are generally open but occasional landslides on Manali-Rohtang section are possible. The Shimla-Kinnaur route is more reliable. Our SUVs with experienced drivers are recommended. We monitor weather 24/7 and reroute if needed.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // SEPTEMBER — Post-Monsoon Freshness
  // ════════════════════════════════════════════════════════
  {
    slug: 'september',
    month: 'September',
    tagline: 'Post-Monsoon Freshness \u2014 Crystal Clear Skies Return',
    destinations: [
      { name: 'Spiti Valley', why: 'Last window before winter closes the roads \u2014 crystal clear skies', weather: '0\u00b0C to 16\u00b0C', crowd: 'Medium', budgetRange: '\u20b912,000 - \u20b932,000', cabFare: 9999, highlights: ['Chandratal Lake mirror reflections', 'Key Monastery autumn colours', 'Kibber highest village walk', 'Kaza market last chance'] },
      { name: 'Ladakh', why: 'Season winds down \u2014 fewer crowds, stunning autumn light, discounted rates', weather: '5\u00b0C to 20\u00b0C', crowd: 'Medium', budgetRange: '\u20b912,000 - \u20b938,000', cabFare: 12999, highlights: ['Pangong with autumn golden hues', 'Hemis National Park wildlife', 'Alchi Monastery visit', 'Leh Palace heritage walk'] },
      { name: 'Rishikesh', why: 'Monsoon recedes and rafting resumes \u2014 Ganga at exciting flow levels', weather: '18\u00b0C to 30\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 3999, highlights: ['Post-monsoon rafting', 'Ganga at exciting flow', 'Camping by the river', 'Waterfall hikes nearby'] },
      { name: 'Rajasthan', why: 'Post-monsoon greenery on forts \u2014 Rajasthan looks its freshest', weather: '22\u00b0C to 35\u00b0C', crowd: 'Low', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 2999, highlights: ['Green Mehrangarh Fort', 'Ranthambore reopens', 'Pushkar Lake full', 'Bundi stepwells after rain'] },
      { name: 'Dharamshala', why: 'Rain-washed Dhauladhar range glows \u2014 Triund Trek at its greenest', weather: '12\u00b0C to 22\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5499, highlights: ['Triund green carpet trek', 'Rain-washed monastery visits', 'McLeod Ganj autumn vibes', 'Kangra Fort exploration'] },
      { name: 'Manali', why: 'Post-monsoon colours paint the valley \u2014 apple orchards laden with fruit', weather: '6\u00b0C to 18\u00b0C', crowd: 'Low', budgetRange: '\u20b96,000 - \u20b918,000', cabFare: 5999, highlights: ['Apple orchard visits', 'Autumn colours in Old Manali', 'Hampta Pass last trek window', 'Naggar apple picking'] },
      { name: 'Agra', why: 'Post-monsoon clarity reveals the Taj in its sharpest detail', weather: '22\u00b0C to 33\u00b0C', crowd: 'Medium', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Taj Mahal with lush gardens', 'Agra Fort post-rain beauty', 'Mehtab Bagh green lawns', 'Chambal Safari revival'] },
      { name: 'Kasol', why: 'Post-monsoon Parvati Valley is a photographer\u2019s dream', weather: '8\u00b0C to 20\u00b0C', crowd: 'Low', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 5999, highlights: ['Kheerganga post-monsoon trek', 'Waterfall photography walks', 'Tosh autumn colours', 'Parvati River at full flow'] },
      { name: 'Bundi', why: 'Rajasthan\u2019s hidden gem \u2014 stepwells overflow and Taragarh Fort gleams green', weather: '22\u00b0C to 33\u00b0C', crowd: 'Low', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 3999, highlights: ['Taragarh Fort trek', 'Step-well photography tour', 'Bundi Palace murals', 'Nawal Sagar Lake sunset'] },
    ],
    travelTips: [
      'September is an underrated gem \u2014 prices drop but beauty peaks post-monsoon',
      'Spiti and Ladakh roads may close anytime in late September \u2014 go early',
      'Wildlife parks reopen \u2014 Ranthambore, Jim Corbett are great this month',
      'Carry layers \u2014 mornings are cool, afternoons can be warm',
      'Book mid-week for best deals \u2014 September has low demand and great availability',
    ],
    festivals: [
      { name: 'Ganesh Chaturthi', description: 'Lord Ganesha\u2019s birthday \u2014 grand celebrations especially in Maharashtra and South India' },
      { name: 'Onam', description: 'Kerala\u2019s harvest festival with boat races, flower carpets, and Onam Sadya feast' },
      { name: 'Navratri Begins', description: 'Nine nights of worship and Garba dances \u2014 vibrant celebrations across Gujarat and North India' },
    ],
    faqs: [
      { question: 'Is September a good month to travel?', answer: 'September is excellent but underrated. Monsoon is receding, landscapes are lush green, tourist crowds are minimal, and prices are low. Post-monsoon clarity gives the best mountain views. Perfect for Uttarakhand, Himachal, and Rajasthan. Call 7668570551 for September deals.' },
      { question: 'Can I still visit Spiti Valley in September?', answer: 'Early September (first 2 weeks) is usually fine. Kunzum Pass may close by late September due to early snowfall. The Shimla-Kinnaur route stays open longer. We recommend the Shimla-Spiti route in September.' },
      { question: 'When does Ranthambore reopen after monsoon?', answer: 'Ranthambore typically reopens October 1. September is good for visiting nearby Bundi and Sawai Madhopur. Our Jaipur-Ranthambore packages are available from October \u2014 book early as October fills up fast.' },
      { question: 'Is September good for Golden Triangle tour?', answer: 'September is decent for the Golden Triangle (Delhi-Agra-Jaipur). Temperatures are lower than summer (28-35\u00b0C), monuments look fresh after rain, and crowds are thin. Our Golden Triangle package starts at \u20b94,999 for 3 days.' },
      { question: 'What are the cheapest destinations in September?', answer: 'September offers the best value: Rishikesh (\u20b93,999 round trip), Dehradun-Mussoorie (\u20b93,999), Agra (\u20b91,999, Taj in post-rain glory), and Nainital (\u20b94,999). Hotels give 20-40% off in September.' },
      { question: 'Is trekking safe in September in Himachal?', answer: 'September trekking is excellent in lower Himachal (Triund, Prashar Lake, Bijli Mahadev). Higher altitude treks are doable in early September. Avoid late September for high passes. Trails are green and waterfalls are active.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // OCTOBER — Festival Season & Perfect Weather
  // ════════════════════════════════════════════════════════
  {
    slug: 'october',
    month: 'October',
    tagline: 'Festival Season \u2014 Perfect Weather Returns Everywhere',
    destinations: [
      { name: 'Jaipur', why: 'Ideal weather for the Pink City \u2014 Dussehra adds festive magic', weather: '18\u00b0C to 32\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 2999, highlights: ['Dussehra at Ramnagar', 'Amber Fort in golden light', 'Johari Bazaar festive shopping', 'Nahargarh sunset views'] },
      { name: 'Udaipur', why: 'Lakes are full from monsoon \u2014 the Venice of East at its most photogenic', weather: '18\u00b0C to 32\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 5499, highlights: ['Lake Pichola full-lake boat ride', 'City Palace Dussehra celebration', 'Sajjangarh Palace sunset', 'Haldighati visit'] },
      { name: 'Varanasi', why: 'Dussehra celebrations \u2014 Ram Lila at its most dramatic', weather: '20\u00b0C to 33\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5999, highlights: ['Ramnagar Ram Lila (UNESCO)', 'Ganga Aarti in festive mood', 'Sarnath Buddhist heritage', 'BHU campus walk'] },
      { name: 'Ranthambore', why: 'Park reopens \u2014 first safaris of the season in comfortable weather', weather: '18\u00b0C to 33\u00b0C', crowd: 'High', budgetRange: '\u20b97,000 - \u20b920,000', cabFare: 4999, highlights: ['Tiger safari opening week', 'Ranthambore Fort autumn light', 'Padam Talao wildlife', 'Sawai Madhopur heritage walk'] },
      { name: 'Jim Corbett', why: 'National park reopens \u2014 lush greenery and rejuvenated wildlife', weather: '15\u00b0C to 28\u00b0C', crowd: 'Medium', budgetRange: '\u20b96,000 - \u20b918,000', cabFare: 4499, highlights: ['Dhikala zone opening', 'Elephant sightings in Bijrani', 'Corbett Falls trek', 'Garjia Devi temple visit'] },
      { name: 'Jodhpur', why: 'Blue City in perfect weather \u2014 Mehrangarh stunning against blue skies', weather: '18\u00b0C to 33\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 5999, highlights: ['Mehrangarh Fort zip-lining', 'Blue City photography walk', 'Umaid Bhawan Palace museum', 'Desert drive to Osian'] },
      { name: 'Agra', why: 'Post-monsoon Taj with clear skies \u2014 one of the best months for photography', weather: '18\u00b0C to 32\u00b0C', crowd: 'High', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Taj Mahal with clear blue sky', 'Agra Fort in golden light', 'Fatehpur Sikri day trip', 'Chambal river safari'] },
      { name: 'Shimla', why: 'Autumn colours paint the hills \u2014 fewer crowds than summer', weather: '8\u00b0C to 18\u00b0C', crowd: 'Medium', budgetRange: '\u20b95,000 - \u20b914,000', cabFare: 4999, highlights: ['Autumn foliage on Mall Road', 'Apple season harvest', 'Narkanda autumn drive', 'Christ Church autumn photography'] },
      { name: 'Pushkar', why: 'Build-up to the famous Pushkar Camel Fair \u2014 desert comes alive', weather: '18\u00b0C to 32\u00b0C', crowd: 'Medium', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 4499, highlights: ['Pushkar Lake holy dip', 'Brahma Temple darshan', 'Desert sunset camel ride', 'Pre-fair local markets'] },
    ],
    travelTips: [
      'October marks the start of peak tourist season \u2014 book early for Dussehra weekend',
      'Weather is perfect almost everywhere \u2014 the best month for pan-India travel',
      'Wildlife parks reopen \u2014 book safari permits 2-3 months in advance',
      'Festive pricing begins \u2014 hotels and flights start increasing rates',
      'Dussehra long weekend fills up fast \u2014 confirm bookings 2 weeks ahead',
    ],
    festivals: [
      { name: 'Navratri & Dussehra', description: 'Nine nights of Garba dances followed by Dussehra victory celebrations \u2014 spectacular everywhere' },
      { name: 'Pushkar Camel Fair Prep', description: 'World-famous camel trading fair (Oct/Nov) build-up with traders arriving from across Rajasthan' },
      { name: 'Gandhi Jayanti', description: 'October 2 national holiday \u2014 long weekend opportunity for travel' },
    ],
    faqs: [
      { question: 'Is October the best month to visit India?', answer: 'October is one of the absolute best months. Monsoon has ended, skies are clear, temperatures are comfortable everywhere, and the festive season adds cultural richness. It works for Rajasthan, Uttarakhand, Himachal, and UP equally well.' },
      { question: 'Where should I go for Dussehra celebrations?', answer: 'Top Dussehra experiences: Varanasi (Ramnagar Ram Lila \u2014 UNESCO listed), Mysore (Dasara procession), Delhi (Ravana effigy burning), Kullu (unique local Dussehra). We offer special Dussehra packages from Delhi starting at \u20b93,999.' },
      { question: 'Is Ranthambore good in October?', answer: 'Excellent! The park reopens after monsoon, vegetation is green giving beautiful backdrop for tiger photos, and temperatures are comfortable. Book Zone 1-5 jeep safaris. Our Jaipur-Ranthambore package: \u20b94,999.' },
      { question: 'What is the best Rajasthan itinerary for October?', answer: '7-day route: Delhi \u2192 Jaipur (2 days) \u2192 Pushkar (1 day) \u2192 Jodhpur (2 days) \u2192 Udaipur (2 days) \u2192 Delhi. Our 7-day sedan package: \u20b911,999 including driver stay, toll, and parking. Call 7668570551.' },
      { question: 'Are hill stations still good in October?', answer: 'October brings autumn colours to Shimla, Manali, and Dharamshala. Less crowded than summer and foliage is stunning \u2014 golden, red, and orange. Nights get cold (5-10\u00b0C). Our round trips start at \u20b94,999.' },
      { question: 'How early should I book for Dussehra weekend?', answer: 'Book 2-3 weeks before Dussehra. Popular destinations fill up fast. Cab availability is limited during festive weekends. Triveni Cabs guarantees confirmed bookings \u2014 no last-minute cancellations. Call 7668570551 early.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // NOVEMBER — Autumn Gold & Early Winter
  // ════════════════════════════════════════════════════════
  {
    slug: 'november',
    month: 'November',
    tagline: 'Golden Autumn, Diwali Glow & Winter Whispers',
    destinations: [
      { name: 'Jaisalmer', why: 'The Golden City at its most golden \u2014 perfect desert weather begins', weather: '12\u00b0C to 28\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 6499, highlights: ['Sam Sand Dunes desert camp', 'Jaisalmer Fort golden hour', 'Patwon Ki Haveli details', 'Desert cultural evening'] },
      { name: 'Varanasi', why: 'Dev Deepawali \u2014 millions of diyas light up the entire Ganges ghats', weather: '14\u00b0C to 28\u00b0C', crowd: 'Very High', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 5999, highlights: ['Dev Deepawali celebrations', 'Million diyas on ghats', 'Special Ganga Aarti', 'Illuminated boat ride'] },
      { name: 'Jaipur', why: 'Perfect sightseeing weather \u2014 every fort and palace glows in November light', weather: '12\u00b0C to 27\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 2999, highlights: ['Diwali at City Palace', 'Hot air balloon over Amber Fort', 'Nahargarh night trek', 'Chokhi Dhani cultural dinner'] },
      { name: 'Pushkar', why: 'Pushkar Camel Fair \u2014 the world\u2019s largest camel trading event', weather: '12\u00b0C to 28\u00b0C', crowd: 'Very High', budgetRange: '\u20b94,000 - \u20b915,000', cabFare: 4499, highlights: ['Camel Fair grounds', 'Hot air balloon rides', 'Pushkar Lake evening aarti', 'Desert camp with folk music'] },
      { name: 'Ranthambore', why: 'Prime tiger territory \u2014 dry season improves visibility dramatically', weather: '10\u00b0C to 28\u00b0C', crowd: 'High', budgetRange: '\u20b97,000 - \u20b922,000', cabFare: 4999, highlights: ['Zone 1-5 tiger safari', 'Padam Talao birding', 'Ranthambore Fort sunset', 'Wildlife photography workshop'] },
      { name: 'Agra', why: 'Ideal Taj weather \u2014 cool mornings with mist create magical photography', weather: '10\u00b0C to 27\u00b0C', crowd: 'High', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 1999, highlights: ['Taj Mahal misty sunrise', 'Agra Fort in autumn light', 'Sur Sarovar Bird Sanctuary', 'Mughlai food walk'] },
      { name: 'Amritsar', why: 'Guru Nanak Jayanti celebrations \u2014 Golden Temple at its most spiritual', weather: '8\u00b0C to 22\u00b0C', crowd: 'High', budgetRange: '\u20b95,000 - \u20b915,000', cabFare: 5999, highlights: ['Golden Temple Guru Purab', 'Wagah Border ceremony', 'Partition Museum visit', 'Amritsari food trail'] },
      { name: 'Goa', why: 'Season begins \u2014 beaches are clean, shacks are open, sunsets are magical', weather: '22\u00b0C to 32\u00b0C', crowd: 'High', budgetRange: '\u20b98,000 - \u20b925,000', cabFare: 14999, highlights: ['Palolem Beach sunset', 'Old Goa churches heritage', 'Dudhsagar Falls day trip', 'Goan seafood trail'] },
      { name: 'Orchha', why: 'Hidden gem of MP \u2014 medieval temples and palaces without the crowds', weather: '12\u00b0C to 28\u00b0C', crowd: 'Low', budgetRange: '\u20b93,000 - \u20b910,000', cabFare: 3999, highlights: ['Orchha Fort Complex', 'Chaturbhuj Temple', 'Betwa River rafting', 'Ram Raja Temple evening aarti'] },
    ],
    travelTips: [
      'November has Diwali \u2014 book 3-4 weeks early as travel demand spikes',
      'Pushkar Camel Fair dates change yearly \u2014 check the lunar calendar',
      'Perfect weather for Rajasthan, UP, and MP \u2014 best time for heritage tourism',
      'Early winter sets in at hill stations \u2014 carry heavy woolens if heading north',
      'Dev Deepawali in Varanasi (15 days after Diwali) is an extraordinary spectacle',
    ],
    festivals: [
      { name: 'Diwali', description: 'Festival of lights \u2014 the country illuminates with diyas and fireworks. Best in Jaipur, Varanasi, or Ayodhya' },
      { name: 'Dev Deepawali', description: '15 days after Diwali in Varanasi \u2014 one million diyas light up 80+ ghats along the Ganga' },
      { name: 'Pushkar Camel Fair', description: 'World-famous annual camel and livestock fair with cultural events, hot air balloons, and desert camping' },
      { name: 'Guru Nanak Jayanti', description: 'Birth anniversary of Guru Nanak Dev \u2014 spectacular celebrations at Golden Temple, Amritsar' },
    ],
    faqs: [
      { question: 'Where should I go for Diwali celebrations?', answer: 'Best Diwali destinations: Jaipur (Nahargarh Fort illumination), Varanasi (Ganga ghats with diyas), Ayodhya (grand Deepotsav with record diyas), and Amritsar (Golden Temple illumination). Our Diwali packages include cab + hotel recommendations. Book 3 weeks early!' },
      { question: 'What is Dev Deepawali and when is it?', answer: 'Dev Deepawali is 15 days after Diwali in Varanasi. Over 1 million diyas light up 80+ ghats along the Ganga. Our Delhi-Varanasi package for Dev Deepawali starts at \u20b95,999. An unmissable experience.' },
      { question: 'Is November good for a Rajasthan road trip?', answer: 'November is PERFECT for Rajasthan! Temperatures are ideal (15-28\u00b0C), festivals add colour. Best route: Jaipur \u2192 Pushkar \u2192 Jodhpur \u2192 Jaisalmer \u2192 Udaipur. Our 8-day circuit costs \u20b914,999 with sedan, including driver stay and toll.' },
      { question: 'When is the Pushkar Camel Fair?', answer: 'Pushkar Fair dates follow the Hindu lunar calendar (Kartik Purnima) \u2014 typically falls in November. The main fair runs 5-7 days before the full moon. Hot air balloon rides, camel races, and folk performances are highlights. Jaipur-Pushkar packages from \u20b94,499.' },
      { question: 'Is it cold in November at hill stations?', answer: 'Yes, quite cold. Shimla/Manali: 0-10\u00b0C, Dharamshala: 5-15\u00b0C, Mussoorie: 3-12\u00b0C. First snowfall is possible in late November at higher elevations. Carry heavy woolens, thermals, and warm accessories.' },
      { question: 'Can I combine Agra and Varanasi in a single trip?', answer: 'Delhi \u2192 Agra (4 hrs) \u2192 Varanasi (12 hrs by road) is a classic 5-day circuit. We offer the Delhi-Agra-Varanasi-Delhi package for \u20b99,999 by cab with experienced long-distance drivers. Call 7668570551.' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // DECEMBER — Winter Wonderland & New Year
  // ════════════════════════════════════════════════════════
  {
    slug: 'december',
    month: 'December',
    tagline: 'Winter Getaways, Christmas Cheer & New Year Countdowns',
    destinations: [
      { name: 'Goa', why: 'Peak season \u2014 Christmas and New Year parties make Goa the ultimate destination', weather: '20\u00b0C to 32\u00b0C', crowd: 'Very High', budgetRange: '\u20b910,000 - \u20b935,000', cabFare: 14999, highlights: ['Christmas Mass at Se Cathedral', 'New Year beach parties', 'Anjuna flea market', 'Spice plantation tours'] },
      { name: 'Jaisalmer', why: 'Desert winter is magical \u2014 starry skies, bonfire nights, Sam Dunes camps', weather: '5\u00b0C to 24\u00b0C', crowd: 'Very High', budgetRange: '\u20b96,000 - \u20b920,000', cabFare: 6499, highlights: ['Desert camping under stars', 'Jaisalmer Fort New Year', 'Camel safari to remote dunes', 'Kuldhara ghost village'] },
      { name: 'Shimla', why: 'Christmas vibes at Christ Church \u2014 snow possible by late December', weather: '-2\u00b0C to 8\u00b0C', crowd: 'Very High', budgetRange: '\u20b97,000 - \u20b922,000', cabFare: 4999, highlights: ['Christmas at Christ Church', 'Kufri snow play', 'Mall Road winter walk', 'New Year on The Ridge'] },
      { name: 'Manali', why: 'First major snowfall \u2014 winter sports season kicks off', weather: '-5\u00b0C to 5\u00b0C', crowd: 'High', budgetRange: '\u20b98,000 - \u20b928,000', cabFare: 5999, highlights: ['Fresh snowfall experience', 'Solang Valley snow sports', 'New Year bonfire parties', 'Atal Tunnel winter drive'] },
      { name: 'Gulmarg', why: 'India\u2019s premier ski resort opens \u2014 world-class skiing', weather: '-8\u00b0C to 0\u00b0C', crowd: 'High', budgetRange: '\u20b912,000 - \u20b940,000', cabFare: 8999, highlights: ['Skiing on fresh powder', 'Gondola Phase 2 ride', 'Snow-covered golf course', 'Igloo restaurant experience'] },
      { name: 'Jaipur', why: 'Cool winter mornings make fort-hopping a dream \u2014 zero humidity', weather: '7\u00b0C to 22\u00b0C', crowd: 'Very High', budgetRange: '\u20b95,000 - \u20b916,000', cabFare: 2999, highlights: ['Amber Fort misty morning', 'Hot air balloon sunrise', 'Hawa Mahal winter photography', 'Chokhi Dhani bonfire dinner'] },
      { name: 'Varanasi', why: 'Winter mist on the Ganga creates an ethereal atmosphere', weather: '5\u00b0C to 20\u00b0C', crowd: 'Medium', budgetRange: '\u20b94,000 - \u20b912,000', cabFare: 5999, highlights: ['Misty Ganga boat ride', 'Winter evening aarti', 'Sarnath monastery visit', 'Malaiyo winter delicacy tasting'] },
      { name: 'Rishikesh', why: 'Clear Ganga waters, mild weather, and New Year camps by the river', weather: '5\u00b0C to 18\u00b0C', crowd: 'High', budgetRange: '\u20b94,000 - \u20b914,000', cabFare: 3999, highlights: ['New Year riverside camping', 'Winter rafting (cold but thrilling)', 'Lakshman Jhula sunset', 'Beatles Ashram quiet season'] },
      { name: 'Rann of Kutch', why: 'Rann Utsav in full swing \u2014 white desert under moonlight is surreal', weather: '10\u00b0C to 25\u00b0C', crowd: 'High', budgetRange: '\u20b98,000 - \u20b922,000', cabFare: 8999, highlights: ['White Rann full moon walk', 'Rann Utsav tent city', 'Kutch handicraft villages', 'Flamingo watching at Little Rann'] },
      { name: 'Auli', why: 'Skiing season opens \u2014 pristine slopes with fewer crowds than Gulmarg', weather: '-5\u00b0C to 5\u00b0C', crowd: 'Medium', budgetRange: '\u20b98,000 - \u20b922,000', cabFare: 6999, highlights: ['Skiing on fresh slopes', 'Asia\u2019s longest gondola ride', 'Nanda Devi snow views', 'Joshimath winter heritage'] },
    ],
    travelTips: [
      'December is peak season everywhere \u2014 book cabs and hotels 4-6 weeks in advance',
      'New Year\u2019s Eve rates are highest of the year \u2014 confirm pricing before booking',
      'Pack heaviest woolens for hill stations \u2014 sub-zero temperatures are common',
      'Goa and Rajasthan are the most popular December destinations \u2014 expect crowds',
      'Check road conditions for hill stations \u2014 snowfall can block routes unexpectedly',
    ],
    festivals: [
      { name: 'Christmas', description: 'Celebrated grandly in Goa, Shimla, and Pondicherry with midnight mass and festive markets' },
      { name: 'Rann Utsav', description: 'Multi-month festival at the White Rann of Kutch (Nov-Feb) with cultural performances and tent city' },
      { name: 'New Year\u2019s Eve', description: 'Major celebrations in Goa, Rishikesh, Manali, Udaipur, and Jaisalmer' },
      { name: 'Hornbill Festival', description: 'Festival of Festivals in Nagaland (Dec 1-10) showcasing Naga tribal culture' },
    ],
    faqs: [
      { question: 'Where should I go for Christmas in India?', answer: 'Goa is the Christmas capital \u2014 midnight mass at Se Cathedral, decorated streets, and beach parties. Shimla offers a white Christmas with possible snowfall. Pondicherry has French-quarter celebrations. Our Goa package from Delhi starts at \u20b914,999.' },
      { question: 'What are the best New Year destinations from Delhi?', answer: 'Top picks: Goa (beach parties), Rishikesh (riverside camping + bonfire), Manali (snow + bonfire), Jaisalmer (desert camp + folk music), Udaipur (lake-side dinner). Our New Year packages start at \u20b93,999 for Rishikesh. Book 4-6 weeks early.' },
      { question: 'Is December good for snow in Manali and Shimla?', answer: 'December brings first major snowfall to Manali (mid-December onwards) and Shimla (late December). Solang Valley and Kufri are best for snow activities. Our SUVs with chains handle snow roads safely. Round trip from Delhi: \u20b911,999.' },
      { question: 'How much does a Goa trip cost by cab from Delhi?', answer: 'Delhi to Goa by cab is about 1,900 km (28-30 hours). We offer a 2-day drive with overnight stop. One-way from \u20b914,999. However, we recommend flying to Goa and using our local cab service \u2014 airport pickup + 5-day local package from \u20b94,999.' },
      { question: 'Is Rann of Kutch worth visiting in December?', answer: 'December is the BEST time! Rann Utsav is in full swing with tent city, cultural performances, and full-moon white desert walks. Our Ahmedabad-Kutch package costs \u20b98,999 round trip with 2-day itinerary.' },
      { question: 'What should I budget for a December holiday?', answer: 'December is peak season \u2014 expect 50-100% premium on hotels. Cab fares remain standard with Triveni Cabs (no surge pricing). Budget per person: Goa \u20b915,000-35,000, Rajasthan \u20b98,000-20,000, Hill stations \u20b910,000-25,000, Rishikesh \u20b95,000-12,000.' },
    ],
  },
];

/**
 * Get data for a specific month by slug
 * @param {string} slug - Month slug (e.g., 'january', 'february')
 * @returns {Object|null} Month data object or null if not found
 */
export function getMonthData(slug) {
  return monthlyCalendarData.find((m) => m.slug === slug) || null;
}

/**
 * Get all month slugs for static generation
 * @returns {string[]} Array of month slugs
 */
export function getAllMonthSlugs() {
  return monthlyCalendarData.map((m) => m.slug);
}

/**
 * Get all months data (for index/listing pages)
 * @returns {Object[]} Array of all month data objects
 */
export function getAllMonthsData() {
  return monthlyCalendarData;
}

/**
 * Get previous and next month data for navigation
 * @param {string} slug - Current month slug
 * @returns {{ prev: { slug: string, month: string }, next: { slug: string, month: string } }}
 */
export function getAdjacentMonths(slug) {
  const idx = monthlyCalendarData.findIndex((m) => m.slug === slug);
  const prevIdx = idx > 0 ? idx - 1 : monthlyCalendarData.length - 1;
  const nextIdx = idx < monthlyCalendarData.length - 1 ? idx + 1 : 0;
  return {
    prev: { slug: monthlyCalendarData[prevIdx].slug, month: monthlyCalendarData[prevIdx].month },
    next: { slug: monthlyCalendarData[nextIdx].slug, month: monthlyCalendarData[nextIdx].month },
  };
}

export default monthlyCalendarData;
