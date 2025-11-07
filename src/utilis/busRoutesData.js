// Bus Fleet Data with pricing structure
export const busFleet = [
  {
    id: 1,
    name: "22 Seater Mini Bus",
    capacity: "22 Passengers",
    seaterType: "22 Seater",
    ratePerKm: "₹30 - ₹35/km",
    driverAllowance: "₹800/day",
    minimumCharge: "₹6,000 (8 hrs / 100 km)",
    idealFor: "Small groups, family trips, airport pick-ups",
    features: ["AC", "Pushback seats", "Music system"],
    image: "/images/bus/22_seater.jpeg",
    color: "from-blue-500 to-blue-700",
    gradient: "bg-gradient-to-br from-blue-500/10 to-blue-700/10"
  },
  {
    id: 2,
    name: "25 Seater Mini Bus",
    capacity: "25 Passengers",
    seaterType: "25 Seater",
    ratePerKm: "₹32 - ₹36/km",
    driverAllowance: "₹900/day",
    minimumCharge: "₹6,500 (8 hrs / 100 km)",
    idealFor: "Pilgrimage tours, family outings",
    features: ["AC", "Pushback seats", "Luggage space"],
    image: "/images/bus/25_seater.jpeg",
    color: "from-green-500 to-green-700",
    gradient: "bg-gradient-to-br from-green-500/10 to-green-700/10"
  },
  {
    id: 3,
    name: "27 Seater Coach",
    capacity: "27 Passengers",
    seaterType: "27 Seater",
    ratePerKm: "₹34 - ₹38/km",
    driverAllowance: "₹900/day",
    minimumCharge: "₹6,800 (8 hrs / 100 km)",
    idealFor: "Corporate events, school trips",
    features: ["AC", "Mic system", "Curtains"],
    image: "/images/bus/27_seater.jpeg",
    color: "from-purple-500 to-purple-700",
    gradient: "bg-gradient-to-br from-purple-500/10 to-purple-700/10",
    popular: true
  },
  {
    id: 4,
    name: "35 Seater Luxury Coach",
    capacity: "35 Passengers",
    seaterType: "35 Seater",
    ratePerKm: "₹36 - ₹40/km",
    driverAllowance: "₹1,000/day",
    minimumCharge: "₹7,500 (8 hrs / 100 km)",
    idealFor: "Wedding guest transfers, group tours",
    features: ["AC", "Music system", "Comfortable recliners"],
    image: "/images/bus/35_seater.jpeg",
    color: "from-orange-500 to-orange-700",
    gradient: "bg-gradient-to-br from-orange-500/10 to-orange-700/10"
  },
  {
    id: 5,
    name: "41 Seater Coach",
    capacity: "41 Passengers",
    seaterType: "41 Seater",
    ratePerKm: "₹40 - ₹45/km",
    driverAllowance: "₹1,000/day",
    minimumCharge: "₹8,000 (8 hrs / 100 km)",
    idealFor: "Large group travel & pilgrimage",
    features: ["AC", "Pushback seats", "PA system"],
    image: "/images/bus/41_seater.jpeg",
    color: "from-red-500 to-red-700",
    gradient: "bg-gradient-to-br from-red-500/10 to-red-700/10"
  },
  {
    id: 6,
    name: "45 Seater Volvo Coach",
    capacity: "45 Passengers",
    seaterType: "45 Seater Volvo",
    ratePerKm: "₹45 - ₹50/km",
    driverAllowance: "₹1,200/day",
    minimumCharge: "₹9,000 (8 hrs / 100 km)",
    idealFor: "Long routes & corporate tours",
    features: ["Volvo 2×2 pushback seats", "AC", "Luggage rack"],
    image: "/images/bus/45_seater.jpeg",
    color: "from-indigo-500 to-indigo-700",
    gradient: "bg-gradient-to-br from-indigo-500/10 to-indigo-700/10",
    premium: true
  },
  {
    id: 7,
    name: "49 Seater Volvo Bus",
    capacity: "49 Passengers",
    seaterType: "49 Seater Volvo",
    ratePerKm: "₹48 - ₹55/km",
    driverAllowance: "₹1,200/day",
    minimumCharge: "₹9,500 (8 hrs / 100 km)",
    idealFor: "School trips, large events, group tours",
    features: ["AC", "Music system", "Comfortable seating"],
    image: "/images/bus/49_seater.jpeg",
    color: "from-teal-500 to-teal-700",
    gradient: "bg-gradient-to-br from-teal-500/10 to-teal-700/10",
    premium: true
  },
  {
    id: 8,
    name: "56 Seater Volvo / BharatBenz Coach",
    capacity: "56 Passengers",
    seaterType: "56 Seater Luxury",
    ratePerKm: "₹55 - ₹65/km",
    driverAllowance: "₹1,500/day",
    minimumCharge: "₹10,000 (8 hrs / 100 km)",
    idealFor: "Corporate or Pilgrimage tours, destination weddings",
    features: ["AC", "LED TV", "Luxury recliners", "Wi-Fi (optional)"],
    image: "/images/bus/56_seater.jpeg",
    color: "from-yellow-500 to-yellow-700",
    gradient: "bg-gradient-to-br from-yellow-500/10 to-yellow-700/10",
    premium: true,
    luxury: true
  }
];

// Popular bus routes from major cities
export const busRoutes = {
  Delhi: [
    { name: "Agra", type: "Heritage", distance: "233 km", duration: "3-4 hours" },
    { name: "Jaipur", type: "Heritage", distance: "280 km", duration: "5-6 hours" },
    { name: "Udaipur", type: "Heritage", distance: "662 km", duration: "10-11 hours" },
    { name: "Jaisalmer", type: "Heritage", distance: "800 km", duration: "13-14 hours" },
    { name: "Jodhpur", type: "Heritage", distance: "580 km", duration: "9-10 hours" },
    { name: "Mount Abu", type: "Hill Station", distance: "740 km", duration: "12-13 hours" },
    { name: "Haridwar", type: "Spiritual", distance: "220 km", duration: "5-6 hours" },
    { name: "Rishikesh", type: "Spiritual", distance: "240 km", duration: "5-6 hours" },
    { name: "Dehradun", type: "Hill Station", distance: "250 km", duration: "6-7 hours" },
    { name: "Mussoorie", type: "Hill Station", distance: "290 km", duration: "7-8 hours" },
    { name: "Nainital", type: "Hill Station", distance: "315 km", duration: "7-8 hours" },
    { name: "Jim Corbett", type: "Wildlife", distance: "250 km", duration: "6-7 hours" },
    { name: "Lansdowne", type: "Hill Station", distance: "260 km", duration: "6-7 hours" },
    { name: "Manali", type: "Hill Station", distance: "540 km", duration: "12-14 hours" },
    { name: "Shimla", type: "Hill Station", distance: "350 km", duration: "8-9 hours" },
    { name: "Kasol", type: "Adventure", distance: "520 km", duration: "12-13 hours" },
    { name: "Dharamshala", type: "Hill Station", distance: "475 km", duration: "10-11 hours" },
    { name: "Dalhousie", type: "Hill Station", distance: "560 km", duration: "11-12 hours" },
    { name: "Leh Ladakh", type: "Adventure", distance: "1050 km", duration: "20-24 hours" },
    { name: "Ayodhya", type: "Spiritual", distance: "636 km", duration: "10-11 hours" },
  ],
}

// Detailed route information for Delhi to Agra
export const delhiToAgraRoute = {
  route: "delhi-to-agra",
  origin: "Delhi",
  destination: "Agra",
  distance: "233 km",
  duration: "3-4 hours",
  type: "Heritage",
  highway: "Yamuna Expressway",
  description: "Experience a comfortable journey from Delhi to Agra via the scenic Yamuna Expressway. Perfect for family trips, group tours, and day excursions to visit the magnificent Taj Mahal and other historical monuments.",
  highlights: [
    "Fastest route via Yamuna Expressway",
    "Well-maintained 6-lane highway",
    "Smooth and comfortable ride",
    "Multiple rest stops available",
    "Scenic views throughout the journey"
  ],
  bestTimeToVisit: "October to March (Winter season)",
 
  attractions: [
    {
      name: "Taj Mahal",
      timings: "Sunrise to Sunset (Closed on Fridays)",
      entryFee: "₹50 for Indians, ₹1100 for foreigners",
      description: "One of the Seven Wonders of the World"
    },
    {
      name: "Agra Fort",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹650 for foreigners",
      description: "UNESCO World Heritage Site"
    },
    {
      name: "Fatehpur Sikri",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹610 for foreigners",
      description: "Abandoned Mughal city, architectural marvel"
    },
    {
      name: "Mehtab Bagh",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      description: "Best sunset view of Taj Mahal"
    }
  ],
  travelTips: [
    "Start early morning (6-7 AM) to avoid Delhi traffic",
    "Carry valid ID proofs for all passengers",
    "Book Taj Mahal tickets online in advance",
    "Wear comfortable shoes for sightseeing",
    "Stay hydrated during the journey",
    "Taj Mahal is closed on Fridays"
  ]
};

// Detailed route information for Delhi to Jaipur
export const delhiToJaipurRoute = {
  route: "delhi-to-jaipur",
  origin: "Delhi",
  destination: "Jaipur",
  distance: "280 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 48 (Delhi-Jaipur Highway)",
  description: "Travel from Delhi to Jaipur, the Pink City of India, famous for its magnificent forts, palaces, and vibrant culture. The journey takes you through well-maintained highways offering a comfortable ride through Rajasthan's colorful landscape.",
  highlights: [
    "Well-maintained NH 48 highway",
    "Scenic views of Aravalli hills",
    "Multiple food courts and rest stops",
    "Royal heritage destinations",
    "Traditional Rajasthani culture"
  ],
  bestTimeToVisit: "October to March (Winter season)",
  attractions: [
    {
      name: "Amber Fort",
      timings: "8:00 AM to 5:30 PM",
      entryFee: "₹100 for Indians, ₹500 for foreigners",
      description: "Magnificent hilltop fort with stunning architecture"
    },
    {
      name: "City Palace",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "₹200 for Indians, ₹700 for foreigners",
      description: "Royal residence with museums and courtyards"
    },
    {
      name: "Hawa Mahal",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "Iconic pink palace with 953 windows"
    },
    {
      name: "Jantar Mantar",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "UNESCO World Heritage astronomical observatory"
    }
  ],
  travelTips: [
    "Start early to avoid traffic at toll plazas",
    "Carry sunglasses and sunscreen",
    "Try traditional Rajasthani cuisine",
    "Bargain at local markets",
    "Stay hydrated during sightseeing",
    "Hire a guide for better historical insights"
  ]
};

// Detailed route information for Delhi to Udaipur
export const delhiToUdaipurRoute = {
  route: "delhi-to-udaipur",
  origin: "Delhi",
  destination: "Udaipur",
  distance: "662 km",
  duration: "10-11 hours",
  type: "Heritage",
  highway: "NH 48 and NH 58",
  description: "Journey to Udaipur, the City of Lakes, known for its romantic palaces, serene lakes, and stunning architecture. This long but scenic route takes you through the heart of Rajasthan.",
  highlights: [
    "Scenic Aravalli mountain views",
    "Beautiful lakeside destination",
    "Romantic palace hotels",
    "Rich cultural heritage",
    "Traditional Rajasthani hospitality"
  ],
  bestTimeToVisit: "September to March",
  attractions: [
    {
      name: "City Palace Udaipur",
      timings: "9:30 AM to 5:30 PM",
      entryFee: "₹300 for Indians, ₹600 for foreigners",
      description: "Magnificent palace complex overlooking Lake Pichola"
    },
    {
      name: "Lake Pichola",
      timings: "Open all day",
      entryFee: "Boat ride: ₹400-₹1000",
      description: "Scenic artificial lake with island palaces"
    },
    {
      name: "Jag Mandir",
      timings: "10:00 AM to 6:00 PM",
      entryFee: "₹450 for Indians, ₹900 for foreigners",
      description: "Beautiful island palace on Lake Pichola"
    },
    {
      name: "Saheliyon Ki Bari",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "₹25 for Indians, ₹100 for foreigners",
      description: "Historic garden with fountains"
    }
  ],
  travelTips: [
    "Break journey at Ajmer or Chittor",
    "Book overnight bus for comfortable travel",
    "Carry warm clothes for evening",
    "Pre-book hotel near City Palace",
    "Try boat ride during sunset",
    "Visit local handicraft markets"
  ]
};

// Detailed route information for Delhi to Jaisalmer
export const delhiToJaisalmerRoute = {
  route: "delhi-to-jaisalmer",
  origin: "Delhi",
  destination: "Jaisalmer",
  distance: "800 km",
  duration: "13-14 hours",
  type: "Heritage",
  highway: "NH 48 and NH 62",
  description: "Experience the golden sands of Jaisalmer, the Golden City located in the heart of the Thar Desert. This extensive journey rewards you with stunning desert landscapes and magnificent sandstone architecture.",
  highlights: [
    "Desert landscape views",
    "Golden sandstone architecture",
    "Camel safari opportunities",
    "Star-studded night camps",
    "Ancient trade route heritage"
  ],
  bestTimeToVisit: "October to February",
  attractions: [
    {
      name: "Jaisalmer Fort",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹250 for foreigners",
      description: "Living fort with houses, temples, and shops"
    },
    {
      name: "Patwon Ki Haveli",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "Five interconnected havelis with intricate carvings"
    },
    {
      name: "Sam Sand Dunes",
      timings: "Best at sunrise and sunset",
      entryFee: "Camel safari: ₹500-₹1500",
      description: "Iconic desert experience with dunes"
    },
    {
      name: "Gadisar Lake",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Historic lake with temples and ghats"
    }
  ],
  travelTips: [
    "Prefer overnight sleeper bus",
    "Carry water and snacks",
    "Book desert camp in advance",
    "Wear light, comfortable clothing",
    "Don't miss sunset at dunes",
    "Try local Rajasthani thali"
  ]
};

// Detailed route information for Delhi to Jodhpur
export const delhiToJodhpurRoute = {
  route: "delhi-to-jodhpur",
  origin: "Delhi",
  destination: "Jodhpur",
  distance: "580 km",
  duration: "9-10 hours",
  type: "Heritage",
  highway: "NH 48",
  description: "Travel to Jodhpur, the Blue City, famous for its magnificent Mehrangarh Fort, blue-painted houses, and rich cultural heritage. A perfect blend of history and vibrant Rajasthani culture.",
  highlights: [
    "Majestic Mehrangarh Fort views",
    "Blue city architecture",
    "Desert landscape",
    "Royal heritage sites",
    "Vibrant local markets"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Mehrangarh Fort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹100 for Indians, ₹600 for foreigners",
      description: "One of India's largest forts with museum"
    },
    {
      name: "Jaswant Thada",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹50 for foreigners",
      description: "White marble memorial with intricate carvings"
    },
    {
      name: "Umaid Bhawan Palace",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹100 for foreigners",
      description: "Magnificent palace with museum"
    },
    {
      name: "Clock Tower Market",
      timings: "10:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Bustling market for handicrafts and spices"
    }
  ],
  travelTips: [
    "Start early morning",
    "Carry sunscreen and hat",
    "Try Makhania lassi",
    "Shop for handicrafts",
    "Visit fort in morning",
    "Book heritage hotel for authentic experience"
  ]
};

// Detailed route information for Delhi to Mount Abu
export const delhiToMountAbuRoute = {
  route: "delhi-to-mount-abu",
  origin: "Delhi",
  destination: "Mount Abu",
  distance: "740 km",
  duration: "12-13 hours",
  type: "Hill Station",
  highway: "NH 48 and NH 27",
  description: "Escape to Mount Abu, Rajasthan's only hill station, offering cool climate, lush greenery, and the famous Dilwara Temples. A refreshing contrast to Rajasthan's desert landscape.",
  highlights: [
    "Only hill station in Rajasthan",
    "Cool pleasant weather",
    "Stunning Dilwara Temples",
    "Nakki Lake boating",
    "Scenic mountain views"
  ],
  bestTimeToVisit: "All year round, especially March to June and September to December",
  attractions: [
    {
      name: "Dilwara Temples",
      timings: "12:00 PM to 6:00 PM",
      entryFee: "Free entry",
      description: "Stunning Jain temples with marble carvings"
    },
    {
      name: "Nakki Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹100-₹300",
      description: "Artificial lake surrounded by hills"
    },
    {
      name: "Sunset Point",
      timings: "Best at sunset",
      entryFee: "₹10 per person",
      description: "Panoramic views of sunset over hills"
    },
    {
      name: "Guru Shikhar",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Highest peak in Aravalli range"
    }
  ],
  travelTips: [
    "Carry light woolens even in summer",
    "Book accommodation in advance",
    "Remove leather items before temple visit",
    "Try local Gujarati food",
    "Enjoy boat ride at Nakki Lake",
    "Visit sunset point for panoramic views"
  ]
};

// Detailed route information for Delhi to Haridwar
export const delhiToHaridwarRoute = {
  route: "delhi-to-haridwar",
  origin: "Delhi",
  destination: "Haridwar",
  distance: "220 km",
  duration: "5-6 hours",
  type: "Spiritual",
  highway: "NH 334 and NH 58",
  description: "Journey to Haridwar, one of the seven holiest places in Hinduism, where the Ganges emerges from the Himalayas. Experience the divine atmosphere and witness the mesmerizing Ganga Aarti.",
  highlights: [
    "Sacred Ganga River ghats",
    "Evening Ganga Aarti ceremony",
    "Ancient temples",
    "Spiritual atmosphere",
    "Gateway to Himalayas"
  ],
  bestTimeToVisit: "October to February, March to April for festivals",
  attractions: [
    {
      name: "Har Ki Pauri",
      timings: "Open all day, Aarti at 6:00 PM",
      entryFee: "Free entry",
      description: "Most sacred ghat for Ganga Aarti"
    },
    {
      name: "Mansa Devi Temple",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry, cable car: ₹79",
      description: "Hilltop temple accessible by cable car"
    },
    {
      name: "Chandi Devi Temple",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry, cable car: ₹82",
      description: "Ancient temple on Neel Parvat"
    },
    {
      name: "Maya Devi Temple",
      timings: "5:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "One of the Shakti Peethas"
    }
  ],
  travelTips: [
    "Attend evening Ganga Aarti at Har Ki Pauri",
    "Dress modestly for temples",
    "Carry small denominations for offerings",
    "Try local prasad and street food",
    "Take holy dip early morning",
    "Avoid peak pilgrimage season if possible"
  ]
};

// Detailed route information for Delhi to Rishikesh
export const delhiToRishikeshRoute = {
  route: "delhi-to-rishikesh",
  origin: "Delhi",
  destination: "Rishikesh",
  distance: "240 km",
  duration: "5-6 hours",
  type: "Spiritual",
  highway: "NH 334",
  description: "Travel to Rishikesh, the Yoga Capital of the World, nestled in the foothills of the Himalayas. Famous for spirituality, adventure sports, and serene riverside ashrams along the holy Ganges.",
  highlights: [
    "Yoga and meditation capital",
    "Adventure sports hub",
    "Iconic suspension bridges",
    "Riverside ashrams",
    "Evening Ganga Aarti"
  ],
  bestTimeToVisit: "February to May, September to November",
  attractions: [
    {
      name: "Laxman Jhula",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Iconic suspension bridge over Ganges"
    },
    {
      name: "Ram Jhula",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Another famous suspension bridge"
    },
    {
      name: "Triveni Ghat",
      timings: "Open all day, Aarti at 6:00 PM",
      entryFee: "Free entry",
      description: "Popular ghat for Ganga Aarti"
    },
    {
      name: "Beatles Ashram",
      timings: "10:00 AM to 4:00 PM",
      entryFee: "₹150 for Indians, ₹600 for foreigners",
      description: "Abandoned ashram with graffiti art"
    }
  ],
  travelTips: [
    "Book yoga classes in advance",
    "Try river rafting (September to June)",
    "Carry comfortable walking shoes",
    "Rishikesh is alcohol and meat-free",
    "Stay in riverside ashram for experience",
    "Visit cafes near Laxman Jhula"
  ]
};

// Detailed route information for Delhi to Dehradun
export const delhiToDehradunRoute = {
  route: "delhi-to-dehradun",
  origin: "Delhi",
  destination: "Dehradun",
  distance: "250 km",
  duration: "6-7 hours",
  type: "Hill Station",
  highway: "NH 334",
  description: "Head to Dehradun, the capital of Uttarakhand, known for its pleasant climate, educational institutions, and proximity to popular hill stations. A perfect base for exploring the Himalayan region.",
  highlights: [
    "Pleasant weather year-round",
    "Gateway to Mussoorie",
    "Basmati rice fields",
    "Colonial architecture",
    "Educational hub"
  ],
  bestTimeToVisit: "March to June, September to November",
  attractions: [
    {
      name: "Robber's Cave",
      timings: "8:00 AM to 5:00 PM",
      entryFee: "₹25 per person",
      description: "Natural cave formation with stream"
    },
    {
      name: "Sahastradhara",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹35 for Indians",
      description: "Thousand-fold spring with therapeutic water"
    },
    {
      name: "Mindrolling Monastery",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Beautiful Tibetan monastery"
    },
    {
      name: "Forest Research Institute",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹100 for Indians",
      description: "Colonial-era building with museums"
    }
  ],
  travelTips: [
    "Visit during weekdays for less crowd",
    "Try local Garhwali cuisine",
    "Carry light jacket",
    "Use Dehradun as base for nearby trips",
    "Shop at Paltan Bazaar",
    "Visit early morning for peaceful experience"
  ]
};

// Detailed route information for Delhi to Mussoorie
export const delhiToMussoorieRoute = {
  route: "delhi-to-mussoorie",
  origin: "Delhi",
  destination: "Mussoorie",
  distance: "290 km",
  duration: "7-8 hours",
  type: "Hill Station",
  highway: "NH 334 and State Highway",
  description: "Escape to Mussoorie, the Queen of Hills, offering breathtaking mountain views, colonial charm, and pleasant weather. Perfect for a refreshing retreat in the Himalayan foothills.",
  highlights: [
    "Stunning Himalayan views",
    "Pleasant mountain weather",
    "Colonial-era architecture",
    "Mall Road shopping",
    "Cable car rides"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Kempty Falls",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹50 per person",
      description: "Popular waterfall with bathing area"
    },
    {
      name: "Gun Hill",
      timings: "8:00 AM to 8:00 PM",
      entryFee: "Cable car: ₹150 return",
      description: "Second highest point with panoramic views"
    },
    {
      name: "Lal Tibba",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Highest point in Mussoorie"
    },
    {
      name: "Camel's Back Road",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Scenic 3 km walking trail"
    }
  ],
  travelTips: [
    "Carry warm clothes even in summer",
    "Walk on Mall Road in evening",
    "Try local momos and Maggi",
    "Book hotel on Mall Road side",
    "Avoid monsoon season (July-August)",
    "Take cable car to Gun Hill"
  ]
};

// Detailed route information for Delhi to Nainital
export const delhiToNainitalRoute = {
  route: "delhi-to-nainital",
  origin: "Delhi",
  destination: "Nainital",
  distance: "315 km",
  duration: "7-8 hours",
  type: "Hill Station",
  highway: "NH 9 and NH 109",
  description: "Visit Nainital, the Lake District of India, known for its beautiful Naini Lake, pleasant weather, and Victorian-era architecture. A popular retreat in the Kumaon region of Uttarakhand.",
  highlights: [
    "Beautiful Naini Lake",
    "Pleasant climate",
    "Scenic viewpoints",
    "Boating activities",
    "Colonial architecture"
  ],
  bestTimeToVisit: "March to June, September to November",
  attractions: [
    {
      name: "Naini Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹150-₹300",
      description: "Pear-shaped lake in the heart of town"
    },
    {
      name: "Naina Devi Temple",
      timings: "6:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Sacred temple on lake's northern shore"
    },
    {
      name: "Tiffin Top (Dorothy's Seat)",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Scenic viewpoint with panoramic views"
    },
    {
      name: "Snow View Point",
      timings: "10:00 AM to 5:00 PM",
      entryFee: "Cable car: ₹300 return",
      description: "Himalayan views via cable car"
    }
  ],
  travelTips: [
    "Pre-book accommodation near Mall Road",
    "Enjoy boating in Naini Lake",
    "Walk around the lake in evening",
    "Try local Kumaoni cuisine",
    "Carry warm clothes",
    "Visit nearby Bhimtal and Naukuchiatal"
  ]
};

// Detailed route information for Delhi to Jim Corbett
export const delhiToJimCorbettRoute = {
  route: "delhi-to-jim-corbett",
  origin: "Delhi",
  destination: "Jim Corbett",
  distance: "250 km",
  duration: "6-7 hours",
  type: "Wildlife",
  highway: "NH 9",
  description: "Embark on a wildlife adventure to Jim Corbett National Park, India's oldest national park, home to Bengal tigers, elephants, and diverse flora and fauna. Perfect for nature lovers and wildlife enthusiasts.",
  highlights: [
    "India's oldest national park",
    "Bengal tiger spotting",
    "Diverse wildlife",
    "Jungle safari experience",
    "River rafting in Kosi"
  ],
  bestTimeToVisit: "November to June (Park closed July-October)",
  attractions: [
    {
      name: "Dhikala Zone",
      timings: "6:00 AM to 11:00 AM, 2:00 PM to 6:00 PM",
      entryFee: "₹5000-₹10000 (including safari)",
      description: "Best zone for tiger sighting"
    },
    {
      name: "Bijrani Zone",
      timings: "6:00 AM to 11:00 AM, 2:00 PM to 5:00 PM",
      entryFee: "₹3000-₹6000",
      description: "Popular zone near Ramnagar"
    },
    {
      name: "Corbett Waterfall",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹50 per person",
      description: "Natural waterfall outside park"
    },
    {
      name: "Garjiya Devi Temple",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Temple on Kosi River rock"
    }
  ],
  travelTips: [
    "Book safari permits in advance online",
    "Wear neutral colors for safari",
    "Carry binoculars and camera",
    "Follow forest guide instructions",
    "Stay in jungle resorts for experience",
    "Winter mornings are best for sighting"
  ]
};

// Detailed route information for Delhi to Lansdowne
export const delhiToLansdowneRoute = {
  route: "delhi-to-lansdowne",
  origin: "Delhi",
  destination: "Lansdowne",
  distance: "260 km",
  duration: "6-7 hours",
  type: "Hill Station",
  highway: "NH 334",
  description: "Discover Lansdowne, a serene cantonment hill station known for its untouched natural beauty, peaceful environment, and oak and pine forests. Perfect for a quiet retreat away from tourist crowds.",
  highlights: [
    "Peaceful cantonment town",
    "Oak and pine forests",
    "Colonial architecture",
    "Less commercialized",
    "Panoramic Himalayan views"
  ],
  bestTimeToVisit: "All year round, especially April to June and October to November",
  attractions: [
    {
      name: "Bhulla Lake",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹50 per person",
      description: "Artificial lake for boating and picnics"
    },
    {
      name: "Tip N Top",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Highest point with panoramic views"
    },
    {
      name: "St. Mary's Church",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Historic colonial-era church"
    },
    {
      name: "Darwan Singh Museum",
      timings: "9:00 AM to 1:00 PM, 2:00 PM to 5:00 PM",
      entryFee: "₹20 per person",
      description: "Garhwal Rifles regimental museum"
    }
  ],
  travelTips: [
    "Carry warm clothes",
    "Book accommodation in advance",
    "Respect military cantonment rules",
    "Enjoy peaceful walks in forests",
    "Limited mobile connectivity",
    "Carry cash as ATMs are limited"
  ]
};

// Detailed route information for Delhi to Manali
export const delhiToManaliRoute = {
  route: "delhi-to-manali",
  origin: "Delhi",
  destination: "Manali",
  distance: "540 km",
  duration: "12-14 hours",
  type: "Hill Station",
  highway: "NH 44",
  description: "Journey to Manali, a high-altitude Himalayan resort town famous for its breathtaking landscapes, adventure activities, and ancient temples. A paradise for nature lovers and adventure enthusiasts.",
  highlights: [
    "Snow-capped mountains",
    "Adventure sports hub",
    "Ancient Hadimba Temple",
    "Rohtang Pass access",
    "Apple orchards"
  ],
  bestTimeToVisit: "October to February for snow, March to June for pleasant weather",
  attractions: [
    {
      name: "Hadimba Temple",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Ancient temple in cedar forest"
    },
    {
      name: "Solang Valley",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "Activities: ₹500-₹3000",
      description: "Adventure sports and skiing destination"
    },
    {
      name: "Rohtang Pass",
      timings: "9:00 AM to 5:00 PM (May-November)",
      entryFee: "NGT permit: ₹500",
      description: "High mountain pass with snow"
    },
    {
      name: "Old Manali",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Hippie village with cafes"
    }
  ],
  travelTips: [
    "Take overnight bus for comfort",
    "Pre-book Rohtang Pass permit",
    "Carry heavy woolens in winter",
    "Try river rafting in Beas",
    "Stay in Old Manali for cafes",
    "Acclimatize before high-altitude activities"
  ]
};

// Detailed route information for Delhi to Shimla
export const delhiToShimlaRoute = {
  route: "delhi-to-shimla",
  origin: "Delhi",
  destination: "Shimla",
  distance: "350 km",
  duration: "8-9 hours",
  type: "Hill Station",
  highway: "NH 44",
  description: "Travel to Shimla, the Queen of Hills and former summer capital of British India. Famous for its Victorian architecture, pleasant weather, and scenic mountain views.",
  highlights: [
    "Colonial architecture",
    "Mall Road shopping",
    "Toy train to Kalka",
    "Scenic mountain views",
    "Pleasant climate"
  ],
  bestTimeToVisit: "October to February for snow, March to June for pleasant weather",
  attractions: [
    {
      name: "The Ridge",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Open space with panoramic views"
    },
    {
      name: "Mall Road",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Famous shopping street"
    },
    {
      name: "Jakhu Temple",
      timings: "7:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Highest point with Hanuman statue"
    },
    {
      name: "Christ Church",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Second oldest church in North India"
    }
  ],
  travelTips: [
    "Book accommodation on Mall Road",
    "Try toy train experience",
    "Carry warm clothes",
    "Walk on Mall Road in evening",
    "Avoid long weekends",
    "Try local apple products"
  ]
};

// Detailed route information for Delhi to Kasol
export const delhiToKasolRoute = {
  route: "delhi-to-kasol",
  origin: "Delhi",
  destination: "Kasol",
  distance: "520 km",
  duration: "12-13 hours",
  type: "Adventure",
  highway: "NH 44 and NH 305",
  description: "Head to Kasol, a hamlet in the Parvati Valley known for its Israeli culture, trekking trails, and serene natural beauty. Popular among backpackers and nature enthusiasts.",
  highlights: [
    "Mini Israel of India",
    "Trekking paradise",
    "Parvati River views",
    "Backpacker culture",
    "Peaceful mountain village"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Chalal Trek",
      timings: "Daylight hours",
      entryFee: "Free entry",
      description: "Short scenic village trek"
    },
    {
      name: "Manikaran Sahib",
      timings: "4:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Sacred gurudwara with hot springs"
    },
    {
      name: "Kheerganga Trek",
      timings: "Multi-day trek",
      entryFee: "₹50 forest entry",
      description: "Popular trekking destination"
    },
    {
      name: "Tosh Village",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Beautiful mountain village"
    }
  ],
  travelTips: [
    "Take overnight bus from Delhi",
    "Carry cash, limited ATMs",
    "Book guesthouse near river",
    "Try Israeli cuisine",
    "Respect local culture",
    "Carry trekking gear"
  ]
};

// Detailed route information for Delhi to Dharamshala
export const delhiToDharamshalaRoute = {
  route: "delhi-to-dharamshala",
  origin: "Delhi",
  destination: "Dharamshala",
  distance: "475 km",
  duration: "10-11 hours",
  type: "Hill Station",
  highway: "NH 44",
  description: "Visit Dharamshala, home to the Dalai Lama and a major center of Tibetan culture. Known for its scenic beauty, monasteries, and serene atmosphere in the Dhauladhar mountain range.",
  highlights: [
    "Tibetan culture hub",
    "Home of Dalai Lama",
    "Beautiful monasteries",
    "Dhauladhar range views",
    "Cricket stadium"
  ],
  bestTimeToVisit: "March to June, September to November",
  attractions: [
    {
      name: "Dalai Lama Temple",
      timings: "5:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "His Holiness's residence complex"
    },
    {
      name: "Bhagsu Waterfall",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Popular waterfall near McLeodganj"
    },
    {
      name: "Triund Trek",
      timings: "Daylight hours",
      entryFee: "₹50 forest entry",
      description: "Popular overnight trekking spot"
    },
    {
      name: "Norbulingka Institute",
      timings: "9:00 AM to 5:30 PM",
      entryFee: "₹50 per person",
      description: "Tibetan arts and culture center"
    }
  ],
  travelTips: [
    "Stay in McLeodganj for main attractions",
    "Try Tibetan momos and thukpa",
    "Visit Tibetan Museum",
    "Respect monastery rules",
    "Trek to Triund for sunrise",
    "Carry warm clothes"
  ]
};

// Detailed route information for Delhi to Dalhousie
export const delhiToDalhousieRoute = {
  route: "delhi-to-dalhousie",
  origin: "Delhi",
  destination: "Dalhousie",
  distance: "560 km",
  duration: "11-12 hours",
  type: "Hill Station",
  highway: "NH 44 and NH 154",
  description: "Escape to Dalhousie, a charming hill station spread across five hills, known for its colonial architecture, pine forests, and old-world charm. Perfect for a peaceful retreat.",
  highlights: [
    "Colonial-era charm",
    "Dense deodar forests",
    "Victorian architecture",
    "Peaceful environment",
    "Panoramic mountain views"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Khajjiar",
      timings: "Open all day",
      entryFee: "Activities: ₹200-₹500",
      description: "Mini Switzerland of India"
    },
    {
      name: "St. John's Church",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Victorian-era church"
    },
    {
      name: "Dainkund Peak",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Highest peak with panoramic views"
    },
    {
      name: "Kalatop Wildlife Sanctuary",
      timings: "7:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians",
      description: "Dense forest with wildlife"
    }
  ],
  travelTips: [
    "Take overnight bus",
    "Must visit Khajjiar",
    "Carry warm clothes",
    "Walk on Mall Road",
    "Try local Himachali cuisine",
    "Book heritage hotels"
  ]
};

// Detailed route information for Delhi to Leh Ladakh
export const delhiToLehLadakhRoute = {
  route: "delhi-to-leh-ladakh",
  origin: "Delhi",
  destination: "Leh Ladakh",
  distance: "1050 km",
  duration: "20-24 hours (2-day journey recommended)",
  type: "Adventure",
  highway: "NH 44 (Manali-Leh Highway) or NH 1 (Srinagar-Leh Highway)",
  description: "Embark on an epic journey to Leh Ladakh, the land of high passes, pristine lakes, and dramatic landscapes. This challenging route rewards you with unparalleled natural beauty and adventure.",
  highlights: [
    "World's highest motorable passes",
    "Stunning mountain landscapes",
    "Buddhist monasteries",
    "Pangong and Tso Moriri lakes",
    "Unique cultural experience"
  ],
  bestTimeToVisit: "June to September (Road open season)",
  attractions: [
    {
      name: "Pangong Lake",
      timings: "Open all day",
      entryFee: "₹300 per person + vehicle charges",
      description: "Stunning high-altitude lake"
    },
    {
      name: "Nubra Valley",
      timings: "Open all day",
      entryFee: "₹400 permit per person",
      description: "Cold desert with sand dunes"
    },
    {
      name: "Khardung La",
      timings: "7:00 AM to 5:00 PM",
      entryFee: "Free entry",
      description: "One of world's highest motorable passes"
    },
    {
      name: "Thiksey Monastery",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹30 per person",
      description: "Beautiful Buddhist monastery"
    }
  ],
  travelTips: [
    "Mandatory 2-day journey with overnight halt",
    "Acclimatize in Leh for 24-48 hours",
    "Carry warm clothes and medicines",
    "Get Inner Line Permit for restricted areas",
    "Book accommodation in advance",
    "Hire experienced driver familiar with terrain"
  ]
};

// Detailed route information for Delhi to Ayodhya
export const delhiToAyodhyaRoute = {
  route: "delhi-to-ayodhya",
  origin: "Delhi",
  destination: "Ayodhya",
  distance: "636 km",
  duration: "10-11 hours",
  type: "Spiritual",
  highway: "NH 44 and NH 27",
  description: "Journey to Ayodhya, one of Hinduism's seven holiest cities and birthplace of Lord Rama. Experience the divine atmosphere and rich cultural heritage at this ancient pilgrimage site.",
  highlights: [
    "Birthplace of Lord Rama",
    "Ancient temples",
    "Ram Janmabhoomi complex",
    "Saryu River ghats",
    "Rich Ramayana heritage"
  ],
  bestTimeToVisit: "October to March, Ram Navami festival in April",
  attractions: [
    {
      name: "Ram Janmabhoomi Temple",
      timings: "6:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Sacred birthplace of Lord Rama"
    },
    {
      name: "Hanuman Garhi",
      timings: "5:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Hilltop temple dedicated to Hanuman"
    },
    {
      name: "Kanak Bhawan",
      timings: "6:00 AM to 11:30 AM, 3:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Temple gifted to Sita by Kaikeyi"
    },
    {
      name: "Saryu River Ghat",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Sacred bathing ghats"
    }
  ],
  travelTips: [
    "Book accommodation in advance",
    "Dress modestly for temples",
    "Carry valid ID for security checks",
    "Attend evening aarti at Saryu River",
    "Respect religious sentiments",
    "Try local Awadhi cuisine"
  ]
};

// Why choose our bus service
export const whyChooseUs = [
  {
    title: "Modern Fleet",
    description: "Well-maintained buses with latest safety features and comfortable seating",
    icon: "bus"
  },
  {
    title: "Professional Drivers",
    description: "Experienced and licensed drivers with excellent knowledge of routes",
    icon: "driver"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges, clear breakdown of all costs upfront",
    icon: "price"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock customer support for your peace of mind",
    icon: "support"
  },
  {
    title: "Safety First",
    description: "GPS tracking, first aid kits, and regular vehicle maintenance",
    icon: "safety"
  },
  {
    title: "Flexible Booking",
    description: "Easy online booking with flexible cancellation policy",
    icon: "booking"
  }
];

// Additional Information - Pricing & Terms
export const additionalInfo = {
  outstationTrips: {
    label: "Outstation Trips",
    value: "Minimum billing 250 km per day"
  },
  driverNightCharge: {
    label: "Driver Night Charge",
    value: "₹300 – ₹500 per night (if night halt)"
  },
  extraCharges: {
    label: "Toll, Parking & State Tax",
    value: "Extra (as per actual)"
  },
  localUsage: {
    label: "Local Usage (8 hrs / 100 km)",
    value: "Extra hour ₹400 | Extra km ₹30–60 depending on bus size"
  },
  billing: {
    label: "Billing Terms",
    value: "Includes fuel & driver; excludes GST (5%)"
  }
};
