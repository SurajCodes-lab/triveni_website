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
    { name: "Kullu Manali", type: "Hill Station", distance: "540 km", duration: "12-14 hours" },
    { name: "Bir Billing", type: "Adventure", distance: "475 km", duration: "10-11 hours" },
    { name: "Solang Valley", type: "Hill Station", distance: "555 km", duration: "13-14 hours" },
    { name: "Spiti Valley", type: "Adventure", distance: "670 km", duration: "18-20 hours" },
    { name: "Ranikhet", type: "Hill Station", distance: "360 km", duration: "8-9 hours" },
    { name: "Amritsar", type: "Spiritual", distance: "450 km", duration: "8-9 hours" },
  ],
  Jaipur: [
    { name: "Delhi", type: "Heritage", distance: "280 km", duration: "5-6 hours" },
    { name: "Agra", type: "Heritage", distance: "240 km", duration: "4-5 hours" },
    { name: "Udaipur", type: "Heritage", distance: "395 km", duration: "6-7 hours" },
    { name: "Jaisalmer", type: "Heritage", distance: "565 km", duration: "9-10 hours" },
    { name: "Jodhpur", type: "Heritage", distance: "335 km", duration: "5-6 hours" },
    { name: "Mount Abu", type: "Hill Station", distance: "490 km", duration: "8-9 hours" },
    { name: "Pushkar", type: "Spiritual", distance: "145 km", duration: "2-3 hours" },
    { name: "Ranthambore", type: "Wildlife", distance: "180 km", duration: "3-4 hours" },
    { name: "Ajmer", type: "Spiritual", distance: "135 km", duration: "2-3 hours" },
    { name: "Bharatpur", type: "Wildlife", distance: "185 km", duration: "3-4 hours" },
  ],
  Agra: [
    { name: "Delhi", type: "Heritage", distance: "233 km", duration: "3-4 hours" },
    { name: "Jaipur", type: "Heritage", distance: "240 km", duration: "4-5 hours" },
    { name: "Mathura Vrindavan", type: "Spiritual", distance: "58 km", duration: "1-2 hours" },
    { name: "Lucknow", type: "Heritage", distance: "335 km", duration: "5-6 hours" },
    { name: "Ayodhya", type: "Spiritual", distance: "530 km", duration: "8-9 hours" },
    { name: "Varanasi", type: "Spiritual", distance: "610 km", duration: "10-11 hours" },
    { name: "Prayagraj", type: "Spiritual", distance: "435 km", duration: "7-8 hours" },
    { name: "Gaya", type: "Spiritual", distance: "740 km", duration: "12-13 hours" },
    { name: "Bharatpur", type: "Wildlife", distance: "55 km", duration: "1 hour" },
    { name: "Fatehpur Sikri", type: "Heritage", distance: "40 km", duration: "1 hour" },
  ],
  Haridwar: [
    { name: "Rishikesh", type: "Spiritual", distance: "25 km", duration: "1 hour" },
    { name: "Kedarnath", type: "Spiritual", distance: "250 km", duration: "8-9 hours" },
    { name: "Badrinath", type: "Spiritual", distance: "315 km", duration: "10-11 hours" },
    { name: "Gangotri", type: "Spiritual", distance: "270 km", duration: "9-10 hours" },
    { name: "Yamunotri", type: "Spiritual", distance: "230 km", duration: "8-9 hours" },
    { name: "Mussoorie", type: "Hill Station", distance: "90 km", duration: "2-3 hours" },
    { name: "Auli", type: "Hill Station", distance: "280 km", duration: "9-10 hours" },
    { name: "Chopta", type: "Hill Station", distance: "220 km", duration: "7-8 hours" },
    { name: "Delhi", type: "Spiritual", distance: "220 km", duration: "5-6 hours" },
    { name: "Dehradun", type: "Hill Station", distance: "55 km", duration: "1-2 hours" },
    { name: "Ranikhet", type: "Hill Station", distance: "240 km", duration: "6-7 hours" },
    { name: "Nainital", type: "Hill Station", distance: "200 km", duration: "5-6 hours" },
  ],
  Chandigarh: [
    { name: "Manali", type: "Hill Station", distance: "310 km", duration: "8-9 hours" },
    { name: "Shimla", type: "Hill Station", distance: "115 km", duration: "3-4 hours" },
    { name: "Kullu Manali", type: "Hill Station", distance: "310 km", duration: "8-9 hours" },
    { name: "Kasol", type: "Adventure", distance: "300 km", duration: "8-9 hours" },
    { name: "Dharamshala", type: "Hill Station", distance: "240 km", duration: "6-7 hours" },
    { name: "Dalhousie", type: "Hill Station", distance: "320 km", duration: "8-9 hours" },
    { name: "McLeod Ganj", type: "Hill Station", distance: "245 km", duration: "6-7 hours" },
    { name: "Spiti Valley", type: "Adventure", distance: "420 km", duration: "12-13 hours" },
    { name: "Leh Ladakh", type: "Adventure", distance: "725 km", duration: "18-20 hours" },
    { name: "Amritsar", type: "Spiritual", distance: "230 km", duration: "5-6 hours" },
    { name: "Kaza", type: "Adventure", distance: "420 km", duration: "12-13 hours" },
  ],
  Udaipur: [
    { name: "Jodhpur", type: "Heritage", distance: "260 km", duration: "5-6 hours" },
    { name: "Jaisalmer", type: "Heritage", distance: "470 km", duration: "8-9 hours" },
    { name: "Mount Abu", type: "Hill Station", distance: "165 km", duration: "3-4 hours" },
  ],
  Jodhpur: [
    { name: "Jaisalmer", type: "Heritage", distance: "285 km", duration: "5-6 hours" },
    { name: "Udaipur", type: "Heritage", distance: "260 km", duration: "5-6 hours" },
    { name: "Mount Abu", type: "Hill Station", distance: "265 km", duration: "5-6 hours" },
  ],
  Jaisalmer: [
    { name: "Bikaner", type: "Heritage", distance: "330 km", duration: "6-7 hours" },
    { name: "Udaipur", type: "Heritage", distance: "470 km", duration: "8-9 hours" },
    { name: "Jodhpur", type: "Heritage", distance: "285 km", duration: "5-6 hours" },
    { name: "Delhi", type: "Heritage", distance: "800 km", duration: "13-14 hours" },
  ],
  Ahmedabad: [
    { name: "Udaipur", type: "Heritage", distance: "260 km", duration: "4-5 hours" },
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

// Detailed route information for Jaipur to Delhi
export const jaipurToDelhiRoute = {
  route: "jaipur-to-delhi",
  origin: "Jaipur",
  destination: "Delhi",
  distance: "280 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 48 (Jaipur-Delhi Highway)",
  description: "Travel from Jaipur, the Pink City, to Delhi, India's capital city. This well-maintained highway connects two of North India's most important heritage destinations, offering a comfortable journey through Rajasthan's landscape.",
  highlights: [
    "Well-maintained NH 48 highway",
    "Multiple rest stops and dhabas",
    "Scenic Aravalli range views",
    "Fast connectivity between capitals",
    "Cultural transition experience"
  ],
  bestTimeToVisit: "October to March (Winter season)",
  attractions: [
    {
      name: "India Gate",
      timings: "Open 24 hours",
      entryFee: "Free entry",
      description: "Iconic war memorial in the heart of Delhi"
    },
    {
      name: "Red Fort",
      timings: "9:30 AM to 4:30 PM (Closed on Mondays)",
      entryFee: "₹50 for Indians, ₹600 for foreigners",
      description: "UNESCO World Heritage Mughal fort"
    },
    {
      name: "Qutub Minar",
      timings: "7:00 AM to 5:00 PM",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      description: "World's tallest brick minaret"
    },
    {
      name: "Lotus Temple",
      timings: "9:00 AM to 5:30 PM (Closed on Mondays)",
      entryFee: "Free entry",
      description: "Bahai House of Worship"
    }
  ],
  travelTips: [
    "Start early to avoid toll plaza traffic",
    "Delhi metro connectivity is excellent",
    "Carry valid ID for monument entries",
    "Try Delhi street food at Chandni Chowk",
    "Book accommodation near metro stations",
    "Use public transport in Delhi"
  ]
};

// Detailed route information for Jaipur to Agra
export const jaipurToAgraRoute = {
  route: "jaipur-to-agra",
  origin: "Jaipur",
  destination: "Agra",
  distance: "240 km",
  duration: "4-5 hours",
  type: "Heritage",
  highway: "NH 21 via Bharatpur",
  description: "Journey from the Pink City to the city of the Taj Mahal. This route connects two UNESCO World Heritage cities, passing through rural Rajasthan and offering glimpses of local life.",
  highlights: [
    "Connects two heritage cities",
    "Passes through Bharatpur region",
    "Bird sanctuary en route",
    "Golden Triangle circuit",
    "Rural Rajasthan experience"
  ],
  bestTimeToVisit: "October to March",
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
      description: "Massive red sandstone fort complex"
    },
    {
      name: "Fatehpur Sikri",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹610 for foreigners",
      description: "Abandoned Mughal capital"
    },
    {
      name: "Itmad-ud-Daulah",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹30 for Indians, ₹310 for foreigners",
      description: "Baby Taj - marble mausoleum"
    }
  ],
  travelTips: [
    "Complete Golden Triangle circuit",
    "Book Taj Mahal tickets online",
    "Visit Taj at sunrise for best views",
    "Avoid Fridays (Taj is closed)",
    "Try Agra's famous petha sweet",
    "Hire authorized guides at monuments"
  ]
};

// Detailed route information for Jaipur to Udaipur
export const jaipurToUdaipurRoute = {
  route: "jaipur-to-udaipur",
  origin: "Jaipur",
  destination: "Udaipur",
  distance: "395 km",
  duration: "6-7 hours",
  type: "Heritage",
  highway: "NH 58 and NH 76",
  description: "Travel from the Pink City to the City of Lakes. This scenic route takes you through the Aravalli hills, showcasing Rajasthan's diverse landscape and connecting two of its most romantic royal destinations.",
  highlights: [
    "Scenic Aravalli mountain route",
    "Beautiful lakeside destination",
    "Royal heritage experience",
    "Romantic palace stays",
    "Traditional Rajasthani culture"
  ],
  bestTimeToVisit: "September to March",
  attractions: [
    {
      name: "City Palace Udaipur",
      timings: "9:30 AM to 5:30 PM",
      entryFee: "₹300 for Indians, ₹600 for foreigners",
      description: "Magnificent palace overlooking Lake Pichola"
    },
    {
      name: "Lake Pichola",
      timings: "Open all day",
      entryFee: "Boat ride: ₹400-₹1000",
      description: "Scenic lake with island palaces"
    },
    {
      name: "Jag Mandir",
      timings: "10:00 AM to 6:00 PM",
      entryFee: "₹450 for Indians, ₹900 for foreigners",
      description: "Island palace on Lake Pichola"
    },
    {
      name: "Saheliyon Ki Bari",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "₹25 for Indians, ₹100 for foreigners",
      description: "Garden of maidens with fountains"
    }
  ],
  travelTips: [
    "Book hotel near City Palace",
    "Take sunset boat ride on Lake Pichola",
    "Visit Monsoon Palace for panoramic views",
    "Try traditional Rajasthani thali",
    "Shop at local handicraft markets",
    "Attend cultural shows at hotels"
  ]
};

// Detailed route information for Jaipur to Jaisalmer
export const jaipurToJaisalmerRoute = {
  route: "jaipur-to-jaisalmer",
  origin: "Jaipur",
  destination: "Jaisalmer",
  distance: "565 km",
  duration: "9-10 hours",
  type: "Heritage",
  highway: "NH 62 and NH 125",
  description: "Journey to the Golden City in the heart of the Thar Desert. This long but rewarding route takes you from the Pink City through gradually changing landscapes into the stunning desert terrain.",
  highlights: [
    "Desert landscape transformation",
    "Golden sandstone architecture",
    "Camel safari destination",
    "Star-studded desert nights",
    "Living fort experience"
  ],
  bestTimeToVisit: "October to February",
  attractions: [
    {
      name: "Jaisalmer Fort",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹250 for foreigners",
      description: "Living fort with inhabitants"
    },
    {
      name: "Patwon Ki Haveli",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "Five interconnected ornate havelis"
    },
    {
      name: "Sam Sand Dunes",
      timings: "Best at sunrise and sunset",
      entryFee: "Camel safari: ₹500-₹1500",
      description: "Iconic desert dunes experience"
    },
    {
      name: "Gadisar Lake",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Scenic artificial lake with temples"
    }
  ],
  travelTips: [
    "Prefer overnight journey or break at Jodhpur",
    "Book desert camp in advance",
    "Carry sunscreen and light clothes",
    "Don't miss desert sunset",
    "Try local Rajasthani cuisine",
    "Shop for handicrafts in fort"
  ]
};

// Detailed route information for Jaipur to Jodhpur
export const jaipurToJodhpurRoute = {
  route: "jaipur-to-jodhpur",
  origin: "Jaipur",
  destination: "Jodhpur",
  distance: "335 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 62",
  description: "Connect two of Rajasthan's most vibrant cities - from the Pink City to the Blue City. Experience the transition through rural Rajasthan and arrive at the magnificent Mehrangarh Fort.",
  highlights: [
    "Pink to Blue city journey",
    "Magnificent fort destination",
    "Desert landscape views",
    "Royal heritage sites",
    "Vibrant local markets"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Mehrangarh Fort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹100 for Indians, ₹600 for foreigners",
      description: "Massive fort with museum"
    },
    {
      name: "Jaswant Thada",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹50 for foreigners",
      description: "White marble memorial"
    },
    {
      name: "Umaid Bhawan Palace",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹100 for foreigners",
      description: "Art Deco palace with museum"
    },
    {
      name: "Clock Tower Market",
      timings: "10:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Vibrant bazaar for shopping"
    }
  ],
  travelTips: [
    "Start early to explore Jodhpur same day",
    "Visit Mehrangarh Fort in morning",
    "Try famous Makhania lassi",
    "Explore blue houses in old city",
    "Shop for handicrafts and textiles",
    "Book heritage hotel for experience"
  ]
};

// Detailed route information for Jaipur to Mount Abu
export const jaipurToMountAbuRoute = {
  route: "jaipur-to-mount-abu",
  origin: "Jaipur",
  destination: "Mount Abu",
  distance: "490 km",
  duration: "8-9 hours",
  type: "Hill Station",
  highway: "NH 48 and NH 27",
  description: "Escape from Jaipur to Rajasthan's only hill station. This journey takes you from the desert landscape to cool mountain air, lush greenery, and the stunning Dilwara Temples.",
  highlights: [
    "Desert to hills transformation",
    "Cool mountain climate",
    "Stunning Dilwara marble temples",
    "Nakki Lake attractions",
    "Scenic viewpoints"
  ],
  bestTimeToVisit: "All year round, especially March to June and September to December",
  attractions: [
    {
      name: "Dilwara Temples",
      timings: "12:00 PM to 6:00 PM",
      entryFee: "Free entry",
      description: "Exquisite Jain marble temples"
    },
    {
      name: "Nakki Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹100-₹300",
      description: "Sacred artificial lake"
    },
    {
      name: "Sunset Point",
      timings: "Best at sunset",
      entryFee: "₹10 per person",
      description: "Panoramic sunset views"
    },
    {
      name: "Guru Shikhar",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Highest point in Aravalli range"
    }
  ],
  travelTips: [
    "Carry light woolens",
    "Remove leather items before temple visit",
    "Book accommodation in advance",
    "Try local Gujarati cuisine",
    "Enjoy boating at Nakki Lake",
    "Visit sunset point for views"
  ]
};

// Detailed route information for Jaipur to Pushkar
export const jaipurToPushkarRoute = {
  route: "jaipur-to-pushkar",
  origin: "Jaipur",
  destination: "Pushkar",
  distance: "145 km",
  duration: "2-3 hours",
  type: "Spiritual",
  highway: "NH 58",
  description: "A short spiritual journey from Jaipur to the holy city of Pushkar, famous for its sacred lake, Brahma Temple, and vibrant camel fair. Perfect for a day trip or weekend getaway.",
  highlights: [
    "Sacred Pushkar Lake",
    "Only Brahma Temple in world",
    "Famous Pushkar Camel Fair",
    "Spiritual atmosphere",
    "Colorful local markets"
  ],
  bestTimeToVisit: "October to March, November for Pushkar Fair",
  attractions: [
    {
      name: "Pushkar Lake",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Sacred lake with 52 ghats"
    },
    {
      name: "Brahma Temple",
      timings: "6:00 AM to 1:30 PM, 3:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Rare temple dedicated to Lord Brahma"
    },
    {
      name: "Savitri Temple",
      timings: "5:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Hilltop temple with panoramic views"
    },
    {
      name: "Pushkar Bazaar",
      timings: "9:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Colorful market for handicrafts"
    }
  ],
  travelTips: [
    "Perfect for day trip from Jaipur",
    "Dress modestly for temples",
    "Take holy dip at Pushkar Lake",
    "Visit during camel fair (November)",
    "Try vegetarian Rajasthani food",
    "Shop for handicrafts and jewelry"
  ]
};

// Detailed route information for Jaipur to Ranthambore
export const jaipurToRanthamboreRoute = {
  route: "jaipur-to-ranthambore",
  origin: "Jaipur",
  destination: "Ranthambore",
  distance: "180 km",
  duration: "3-4 hours",
  type: "Wildlife",
  highway: "NH 52",
  description: "Journey from Jaipur to one of India's premier tiger reserves. Ranthambore National Park offers excellent wildlife viewing opportunities with its population of Bengal tigers and diverse fauna.",
  highlights: [
    "Premier tiger reserve",
    "Historic Ranthambore Fort",
    "Diverse wildlife spotting",
    "Jungle safari experience",
    "Ancient ruins in jungle"
  ],
  bestTimeToVisit: "October to April (Park closed July-September)",
  attractions: [
    {
      name: "Ranthambore National Park",
      timings: "6:00 AM to 10:00 AM, 2:30 PM to 6:00 PM",
      entryFee: "₹1500-₹3500 (including safari)",
      description: "Famous tiger reserve"
    },
    {
      name: "Ranthambore Fort",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "Included in park entry",
      description: "UNESCO World Heritage fort in jungle"
    },
    {
      name: "Padam Talao",
      timings: "During safari hours",
      entryFee: "Included in safari",
      description: "Largest lake in park, tiger hotspot"
    },
    {
      name: "Trinetra Ganesh Temple",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Ancient temple inside fort"
    }
  ],
  travelTips: [
    "Book safari permits in advance online",
    "Morning safaris better for sightings",
    "Wear neutral colors",
    "Carry binoculars and camera",
    "Stay in jungle resorts",
    "Winter offers best visibility"
  ]
};

// Detailed route information for Jaipur to Ajmer
export const jaipurToAjmerRoute = {
  route: "jaipur-to-ajmer",
  origin: "Jaipur",
  destination: "Ajmer",
  distance: "135 km",
  duration: "2-3 hours",
  type: "Spiritual",
  highway: "NH 58",
  description: "A short pilgrimage from Jaipur to Ajmer, home to the famous Ajmer Sharif Dargah. This spiritual destination attracts millions of devotees from all faiths throughout the year.",
  highlights: [
    "Famous Ajmer Sharif Dargah",
    "Sufi spiritual center",
    "Ana Sagar Lake",
    "Historic architecture",
    "Multi-faith pilgrimage site"
  ],
  bestTimeToVisit: "October to March, Urs festival in Rajab month",
  attractions: [
    {
      name: "Ajmer Sharif Dargah",
      timings: "4:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Shrine of Sufi saint Moinuddin Chishti"
    },
    {
      name: "Ana Sagar Lake",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Artificial lake with marble pavilions"
    },
    {
      name: "Adhai Din Ka Jhonpra",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "₹25 for Indians",
      description: "Indo-Islamic architecture mosque"
    },
    {
      name: "Nareli Jain Temple",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Modern marble Jain temple complex"
    }
  ],
  travelTips: [
    "Cover head before entering dargah",
    "Combine with Pushkar visit (11 km away)",
    "Try traditional sweets at dargah",
    "Respect religious sentiments",
    "Visit Ana Sagar in evening",
    "Shop at Dargah Bazaar"
  ]
};

// Detailed route information for Jaipur to Bharatpur
export const jaipurToBharatpurRoute = {
  route: "jaipur-to-bharatpur",
  origin: "Jaipur",
  destination: "Bharatpur",
  distance: "185 km",
  duration: "3-4 hours",
  type: "Wildlife",
  highway: "NH 21",
  description: "Travel from Jaipur to Bharatpur, home to the world-famous Keoladeo National Park. This UNESCO World Heritage site is a paradise for bird watchers and nature enthusiasts.",
  highlights: [
    "UNESCO World Heritage bird sanctuary",
    "400+ bird species",
    "Wetland ecosystem",
    "Heritage Bharatpur Fort",
    "Birdwatching paradise"
  ],
  bestTimeToVisit: "October to March (Migratory bird season)",
  attractions: [
    {
      name: "Keoladeo National Park",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹75 for Indians, ₹500 for foreigners",
      description: "Famous bird sanctuary and wetland"
    },
    {
      name: "Bharatpur Palace & Museum",
      timings: "10:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians",
      description: "Historic palace with museum"
    },
    {
      name: "Lohagarh Fort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹25 for Indians",
      description: "Iron Fort with massive structure"
    },
    {
      name: "Ganga Mandir",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Beautiful temple with South Indian architecture"
    }
  ],
  travelTips: [
    "Visit early morning for bird watching",
    "Hire cycle rickshaw in park",
    "Carry binoculars and camera",
    "Winter brings Siberian birds",
    "Combine with Agra trip (55 km away)",
    "Book forest lodge inside park"
  ]
};

// Detailed route information for Agra to Delhi
export const agraToDelhiRoute = {
  route: "agra-to-delhi",
  origin: "Agra",
  destination: "Delhi",
  distance: "233 km",
  duration: "3-4 hours",
  type: "Heritage",
  highway: "Yamuna Expressway",
  description: "Travel from the city of the Taj Mahal to India's capital. The Yamuna Expressway offers one of the fastest and smoothest highway experiences, connecting two major tourist destinations.",
  highlights: [
    "Fastest route via Yamuna Expressway",
    "6-lane expressway with excellent views",
    "Smooth and comfortable journey",
    "Well-maintained rest areas",
    "Connects two heritage cities"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "India Gate",
      timings: "Open 24 hours",
      entryFee: "Free entry",
      description: "Iconic war memorial"
    },
    {
      name: "Red Fort",
      timings: "9:30 AM to 4:30 PM (Closed on Mondays)",
      entryFee: "₹50 for Indians, ₹600 for foreigners",
      description: "UNESCO World Heritage Mughal fort"
    },
    {
      name: "Qutub Minar",
      timings: "7:00 AM to 5:00 PM",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      description: "Tallest brick minaret in the world"
    },
    {
      name: "Humayun's Tomb",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      description: "Precursor to Taj Mahal architecture"
    }
  ],
  travelTips: [
    "Start early to avoid Delhi traffic",
    "Use Delhi Metro for local travel",
    "Visit historical monuments in Old Delhi",
    "Try street food at Chandni Chowk",
    "Book hotels near metro connectivity",
    "Carry valid ID for all attractions"
  ]
};

// Detailed route information for Agra to Jaipur
export const agraToJaipurRoute = {
  route: "agra-to-jaipur",
  origin: "Agra",
  destination: "Jaipur",
  distance: "240 km",
  duration: "4-5 hours",
  type: "Heritage",
  highway: "NH 21 via Bharatpur",
  description: "Complete the famous Golden Triangle circuit from Agra to Jaipur. This route connects two royal cities, offering views of rural Rajasthan and the opportunity to visit Bharatpur Bird Sanctuary en route.",
  highlights: [
    "Golden Triangle circuit completion",
    "Bharatpur Bird Sanctuary en route",
    "Rural Rajasthan landscape",
    "Pink City destination",
    "Royal heritage experience"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Amber Fort",
      timings: "8:00 AM to 5:30 PM",
      entryFee: "₹100 for Indians, ₹500 for foreigners",
      description: "Magnificent hilltop fort"
    },
    {
      name: "City Palace",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "₹200 for Indians, ₹700 for foreigners",
      description: "Royal residence with museums"
    },
    {
      name: "Hawa Mahal",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "Iconic Palace of Winds"
    },
    {
      name: "Jantar Mantar",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "UNESCO astronomical observatory"
    }
  ],
  travelTips: [
    "Complete Golden Triangle tour",
    "Stop at Bharatpur for bird watching",
    "Try Rajasthani thali in Jaipur",
    "Shop at Johari Bazaar",
    "Book heritage hotel for experience",
    "Visit forts in morning hours"
  ]
};

// Detailed route information for Agra to Mathura Vrindavan
export const agraToMathuraVrindavanRoute = {
  route: "agra-to-mathura-vrindavan",
  origin: "Agra",
  destination: "Mathura Vrindavan",
  distance: "58 km",
  duration: "1-2 hours",
  type: "Spiritual",
  highway: "NH 44",
  description: "A short spiritual journey from Agra to the birthplace of Lord Krishna. Mathura and Vrindavan are twin holy cities on the banks of the Yamuna, attracting millions of devotees annually.",
  highlights: [
    "Birthplace of Lord Krishna",
    "Ancient temples and ghats",
    "Yamuna River aarti",
    "Spiritual atmosphere",
    "Perfect day trip from Agra"
  ],
  bestTimeToVisit: "October to March, Janmashtami and Holi festivals",
  attractions: [
    {
      name: "Krishna Janmabhoomi Temple",
      timings: "5:30 AM to 12:00 PM, 4:00 PM to 9:30 PM",
      entryFee: "Free entry",
      description: "Birthplace of Lord Krishna"
    },
    {
      name: "Banke Bihari Temple",
      timings: "7:45 AM to 12:00 PM, 5:30 PM to 9:30 PM",
      entryFee: "Free entry",
      description: "Famous Krishna temple in Vrindavan"
    },
    {
      name: "ISKCON Vrindavan",
      timings: "4:30 AM to 1:00 PM, 4:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Grand temple with Krishna Balaram deities"
    },
    {
      name: "Vishram Ghat",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Sacred bathing ghat on Yamuna"
    }
  ],
  travelTips: [
    "Perfect for day trip from Agra",
    "Dress modestly for temples",
    "Attend evening aarti at ghats",
    "Try famous Mathura peda sweets",
    "Avoid carrying leather items",
    "Visit during Holi for unique experience"
  ]
};

// Detailed route information for Agra to Lucknow
export const agraToLucknowRoute = {
  route: "agra-to-lucknow",
  origin: "Agra",
  destination: "Lucknow",
  distance: "335 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 19 (Agra-Lucknow Expressway)",
  description: "Journey to Lucknow, the City of Nawabs, known for its rich cultural heritage, Mughal and Awadhi architecture, and world-famous cuisine. The expressway ensures a fast and comfortable journey.",
  highlights: [
    "Agra-Lucknow Expressway route",
    "City of Nawabs destination",
    "Awadhi cuisine capital",
    "Mughal architecture",
    "Cultural heritage experience"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Bara Imambara",
      timings: "6:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians, ₹500 for foreigners",
      description: "Architectural marvel with Bhool Bhulaiya maze"
    },
    {
      name: "Chota Imambara",
      timings: "6:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians",
      description: "Beautiful Indo-Islamic monument"
    },
    {
      name: "Rumi Darwaza",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Iconic gateway of Lucknow"
    },
    {
      name: "British Residency",
      timings: "9:00 AM to 5:30 PM",
      entryFee: "₹25 for Indians",
      description: "Historical ruins from 1857 uprising"
    }
  ],
  travelTips: [
    "Must try Tunday Kababi",
    "Visit Hazratganj for shopping",
    "Experience Lucknowi chikankari",
    "Try famous Awadhi biryani",
    "Attend evening sound & light show",
    "Book hotels in Hazratganj area"
  ]
};

// Detailed route information for Agra to Ayodhya
export const agraToAyodhyaRoute = {
  route: "agra-to-ayodhya",
  origin: "Agra",
  destination: "Ayodhya",
  distance: "530 km",
  duration: "8-9 hours",
  type: "Spiritual",
  highway: "NH 19 and NH 27",
  description: "A spiritual pilgrimage from Agra to Ayodhya, the birthplace of Lord Rama. This ancient holy city has been a major pilgrimage destination for Hindus for millennia.",
  highlights: [
    "Birthplace of Lord Rama",
    "Ram Janmabhoomi Temple",
    "Ancient pilgrimage city",
    "Saryu River ghats",
    "Ramayana heritage sites"
  ],
  bestTimeToVisit: "October to March, Ram Navami in April",
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
      description: "Important Hanuman temple on hilltop"
    },
    {
      name: "Kanak Bhawan",
      timings: "6:00 AM to 11:30 AM, 3:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Temple dedicated to Rama and Sita"
    },
    {
      name: "Saryu River Ghat",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Sacred river ghats for holy dip"
    }
  ],
  travelTips: [
    "Book accommodation in advance",
    "Carry valid ID for security",
    "Dress modestly for temples",
    "Attend evening Saryu aarti",
    "Try local Awadhi cuisine",
    "Respect religious sentiments"
  ]
};

// Detailed route information for Agra to Varanasi
export const agraToVaranasiRoute = {
  route: "agra-to-varanasi",
  origin: "Agra",
  destination: "Varanasi",
  distance: "610 km",
  duration: "10-11 hours",
  type: "Spiritual",
  highway: "NH 19 and NH 2",
  description: "Journey to Varanasi, one of the world's oldest living cities and the spiritual capital of India. Experience the mesmerizing Ganga Aarti and the ancient ghats along the holy Ganges.",
  highlights: [
    "Oldest living city",
    "Sacred Ganges ghats",
    "Mesmerizing Ganga Aarti",
    "Spiritual capital of India",
    "Kashi Vishwanath Temple"
  ],
  bestTimeToVisit: "October to March, Dev Deepawali in November",
  attractions: [
    {
      name: "Kashi Vishwanath Temple",
      timings: "3:00 AM to 11:00 PM",
      entryFee: "Free entry",
      description: "One of 12 Jyotirlingas, most sacred Shiva temple"
    },
    {
      name: "Dashashwamedh Ghat",
      timings: "Open all day, Aarti at 7:00 PM",
      entryFee: "Free entry",
      description: "Main ghat for evening Ganga Aarti"
    },
    {
      name: "Sarnath",
      timings: "Sunrise to sunset",
      entryFee: "₹25 for Indians",
      description: "Buddhist pilgrimage site where Buddha preached"
    },
    {
      name: "Assi Ghat",
      timings: "Open all day, Morning aarti at 6:00 AM",
      entryFee: "Free entry",
      description: "Popular ghat for morning rituals"
    }
  ],
  travelTips: [
    "Take overnight journey for comfort",
    "Attend Ganga Aarti at Dashashwamedh",
    "Take early morning boat ride",
    "Visit Sarnath Buddhist site",
    "Try Banarasi paan and lassi",
    "Book hotel near ghats"
  ]
};

// Detailed route information for Agra to Prayagraj
export const agraToPrayagrajRoute = {
  route: "agra-to-prayagraj",
  origin: "Agra",
  destination: "Prayagraj",
  distance: "435 km",
  duration: "7-8 hours",
  type: "Spiritual",
  highway: "NH 19 and NH 2",
  description: "Travel to Prayagraj (formerly Allahabad), the city of Sangam where three holy rivers meet. Famous for the Kumbh Mela, it's one of Hinduism's most sacred pilgrimage destinations.",
  highlights: [
    "Triveni Sangam confluence",
    "Kumbh Mela host city",
    "Three sacred rivers meet",
    "Ancient pilgrimage site",
    "Rich colonial history"
  ],
  bestTimeToVisit: "October to March, Kumbh Mela every 12 years, Magh Mela annually",
  attractions: [
    {
      name: "Triveni Sangam",
      timings: "Open all day",
      entryFee: "Boat ride: ₹100-₹500",
      description: "Confluence of Ganga, Yamuna, and Saraswati"
    },
    {
      name: "Allahabad Fort",
      timings: "9:00 AM to 5:00 PM (Limited access)",
      entryFee: "₹25 for Indians",
      description: "Akbar's fort on Sangam banks"
    },
    {
      name: "Anand Bhawan",
      timings: "9:30 AM to 5:00 PM (Closed on Mondays)",
      entryFee: "₹50 for Indians",
      description: "Nehru family ancestral home museum"
    },
    {
      name: "Khusro Bagh",
      timings: "7:00 AM to 5:30 PM",
      entryFee: "₹10 per person",
      description: "Mughal garden with tombs"
    }
  ],
  travelTips: [
    "Take holy dip at Sangam",
    "Hire boat for Sangam visit",
    "Visit during Magh Mela",
    "Try local chaat and sweets",
    "Book hotels in Civil Lines",
    "Respect pilgrimage sentiments"
  ]
};

// Detailed route information for Agra to Gaya
export const agraToGayaRoute = {
  route: "agra-to-gaya",
  origin: "Agra",
  destination: "Gaya",
  distance: "740 km",
  duration: "12-13 hours",
  type: "Spiritual",
  highway: "NH 19 and NH 83",
  description: "A long spiritual journey to Gaya, one of the most sacred Buddhist and Hindu pilgrimage sites. Home to the Mahabodhi Temple in Bodh Gaya where Buddha attained enlightenment.",
  highlights: [
    "Mahabodhi Temple UNESCO site",
    "Buddha's enlightenment place",
    "Buddhist circuit destination",
    "Hindu pilgrimage for rituals",
    "Ancient Bodhi Tree"
  ],
  bestTimeToVisit: "October to March, Buddha Purnima in May",
  attractions: [
    {
      name: "Mahabodhi Temple",
      timings: "5:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "UNESCO World Heritage Buddhist temple"
    },
    {
      name: "Bodhi Tree",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Sacred tree where Buddha attained enlightenment"
    },
    {
      name: "Vishnupad Temple",
      timings: "6:00 AM to 12:00 PM, 5:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Hindu temple with Vishnu's footprint"
    },
    {
      name: "Great Buddha Statue",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "80-feet tall Buddha statue"
    }
  ],
  travelTips: [
    "Prefer overnight bus journey",
    "Combine with Varanasi trip",
    "Visit early morning for peace",
    "Dress modestly for temples",
    "Join meditation sessions",
    "Try Tibetan monastery food"
  ]
};

// Detailed route information for Agra to Bharatpur
export const agraToBharatpurRoute = {
  route: "agra-to-bharatpur",
  origin: "Agra",
  destination: "Bharatpur",
  distance: "55 km",
  duration: "1 hour",
  type: "Wildlife",
  highway: "NH 21",
  description: "A short trip from Agra to the Keoladeo National Park in Bharatpur, a UNESCO World Heritage bird sanctuary. Perfect for nature lovers and bird watchers, especially during the winter migratory season.",
  highlights: [
    "UNESCO World Heritage bird sanctuary",
    "400+ bird species",
    "Perfect day trip from Agra",
    "Wetland ecosystem",
    "Heritage Lohagarh Fort"
  ],
  bestTimeToVisit: "October to March (Migratory bird season)",
  attractions: [
    {
      name: "Keoladeo National Park",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "₹75 for Indians, ₹500 for foreigners",
      description: "World-famous bird sanctuary"
    },
    {
      name: "Bharatpur Palace Museum",
      timings: "10:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians",
      description: "Historic palace with artifacts"
    },
    {
      name: "Lohagarh Fort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹25 for Indians",
      description: "Iron Fort with unique architecture"
    },
    {
      name: "Ganga Mandir",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Beautiful South Indian style temple"
    }
  ],
  travelTips: [
    "Ideal day trip from Agra",
    "Visit early morning for birds",
    "Hire cycle rickshaw in park",
    "Carry binoculars and camera",
    "Winter best for Siberian birds",
    "Combine with Agra sightseeing"
  ]
};

// Detailed route information for Agra to Fatehpur Sikri
export const agraToFatehpurSikriRoute = {
  route: "agra-to-fatehpur-sikri",
  origin: "Agra",
  destination: "Fatehpur Sikri",
  distance: "40 km",
  duration: "1 hour",
  type: "Heritage",
  highway: "State Highway",
  description: "A short excursion from Agra to Fatehpur Sikri, the abandoned Mughal capital built by Emperor Akbar. This UNESCO World Heritage site showcases stunning Indo-Islamic architecture.",
  highlights: [
    "UNESCO World Heritage Site",
    "Abandoned Mughal capital",
    "Perfect half-day trip",
    "Indo-Islamic architecture",
    "Buland Darwaza gateway"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Buland Darwaza",
      timings: "Sunrise to sunset",
      entryFee: "₹50 for Indians, ₹610 for foreigners",
      description: "Magnificent 54-meter high gateway"
    },
    {
      name: "Jama Masjid",
      timings: "Sunrise to sunset",
      entryFee: "Included in entry ticket",
      description: "Grand mosque within the complex"
    },
    {
      name: "Panch Mahal",
      timings: "Sunrise to sunset",
      entryFee: "Included in entry ticket",
      description: "Five-story palatial structure"
    },
    {
      name: "Tomb of Salim Chishti",
      timings: "Sunrise to sunset",
      entryFee: "Free entry",
      description: "White marble shrine of Sufi saint"
    }
  ],
  travelTips: [
    "Perfect half-day trip from Agra",
    "Combine with Agra sightseeing",
    "Visit in morning hours",
    "Wear comfortable walking shoes",
    "Hire authorized guide",
    "Carry water and sunscreen"
  ]
};

// Detailed route information for Haridwar to Rishikesh
export const haridwarToRishikeshRoute = {
  route: "haridwar-to-rishikesh",
  origin: "Haridwar",
  destination: "Rishikesh",
  distance: "25 km",
  duration: "1 hour",
  type: "Spiritual",
  highway: "NH 58",
  description: "A short spiritual journey between two of India's most sacred cities along the Ganges. Haridwar and Rishikesh together form the gateway to the Char Dham pilgrimage and Himalayan adventures.",
  highlights: [
    "Twin holy cities on Ganges",
    "Yoga capital destination",
    "Adventure sports hub",
    "River rafting opportunities",
    "Spiritual and adventure combo"
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
      description: "Evening Ganga Aarti location"
    },
    {
      name: "Beatles Ashram",
      timings: "10:00 AM to 4:00 PM",
      entryFee: "₹150 for Indians, ₹600 for foreigners",
      description: "Historic ashram with graffiti art"
    }
  ],
  travelTips: [
    "Combine both cities in one trip",
    "Try river rafting in Rishikesh",
    "Attend Ganga Aarti in both cities",
    "Book yoga classes in advance",
    "No alcohol or meat in Rishikesh",
    "Visit riverside cafes near Laxman Jhula"
  ]
};

// Detailed route information for Haridwar to Kedarnath
export const haridwarToKedarnathRoute = {
  route: "haridwar-to-kedarnath",
  origin: "Haridwar",
  destination: "Kedarnath",
  distance: "250 km",
  duration: "8-9 hours to Gaurikund",
  type: "Spiritual",
  highway: "NH 58 and State Highway",
  description: "Sacred pilgrimage to Kedarnath, one of the Char Dham and 12 Jyotirlingas. The journey takes you to Gaurikund, from where a 16 km trek or helicopter ride leads to the ancient Kedarnath Temple.",
  highlights: [
    "Char Dham pilgrimage destination",
    "One of 12 Jyotirlingas",
    "Himalayan temple trek",
    "Scenic mountain journey",
    "Sacred Shiva temple"
  ],
  bestTimeToVisit: "May to June, September to October (Temple open April-November)",
  attractions: [
    {
      name: "Kedarnath Temple",
      timings: "4:00 AM to 9:00 PM (during season)",
      entryFee: "Free entry",
      description: "Ancient Jyotirlinga temple at 3,583m"
    },
    {
      name: "Gaurikund",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Hot water springs and trek starting point"
    },
    {
      name: "Sonprayag",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Confluence of rivers and vehicle point"
    },
    {
      name: "Triyuginarayan Temple",
      timings: "6:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Ancient temple with eternal flame"
    }
  ],
  travelTips: [
    "Book helicopter tickets in advance",
    "Register online before pilgrimage",
    "Carry warm clothes and raincoat",
    "Trek is 16 km from Gaurikund",
    "Hire ponies or palanquins if needed",
    "Check weather before travel"
  ]
};

// Detailed route information for Haridwar to Badrinath
export const haridwarToBadrinathRoute = {
  route: "haridwar-to-badrinath",
  origin: "Haridwar",
  destination: "Badrinath",
  distance: "315 km",
  duration: "10-11 hours",
  type: "Spiritual",
  highway: "NH 58",
  description: "Pilgrimage to Badrinath, one of the holiest Char Dham sites dedicated to Lord Vishnu. Located at 3,300m in the Garhwal Himalayas, it's accessible via the scenic Badrinath Highway.",
  highlights: [
    "Char Dham pilgrimage site",
    "Sacred Vishnu temple",
    "Himalayan mountain views",
    "Alaknanda River route",
    "Mana village nearby"
  ],
  bestTimeToVisit: "May to June, September to October (Temple open April-November)",
  attractions: [
    {
      name: "Badrinath Temple",
      timings: "4:30 AM to 1:00 PM, 4:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Sacred Vishnu temple in Himalayas"
    },
    {
      name: "Mana Village",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Last Indian village near Tibet border"
    },
    {
      name: "Tapt Kund",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Natural hot water spring for holy bath"
    },
    {
      name: "Vasudhara Falls",
      timings: "Daylight hours",
      entryFee: "Free entry",
      description: "Sacred waterfall, 6 km trek from Mana"
    }
  ],
  travelTips: [
    "Acclimatize at intermediate stops",
    "Carry oxygen cylinders for altitude",
    "Book accommodation in advance",
    "Visit Mana village and Vasudhara Falls",
    "Take holy bath in Tapt Kund",
    "Check road conditions before travel"
  ]
};

// Detailed route information for Haridwar to Gangotri
export const haridwarToGangotriRoute = {
  route: "haridwar-to-gangotri",
  origin: "Haridwar",
  destination: "Gangotri",
  distance: "270 km",
  duration: "9-10 hours",
  type: "Spiritual",
  highway: "NH 58 and State Highway",
  description: "Journey to Gangotri, the origin of the holy Ganges and one of the Char Dham sites. The temple sits at 3,100m, offering breathtaking views and a deeply spiritual experience.",
  highlights: [
    "Char Dham pilgrimage",
    "Origin of River Ganges",
    "Himalayan valley views",
    "Gaumukh glacier trek base",
    "Sacred Bhagirathi River"
  ],
  bestTimeToVisit: "May to June, September to October (Temple open April-November)",
  attractions: [
    {
      name: "Gangotri Temple",
      timings: "6:00 AM to 2:00 PM, 3:00 PM to 9:00 PM",
      entryFee: "Free entry",
      description: "Temple at origin of Ganges"
    },
    {
      name: "Gaumukh Glacier",
      timings: "Multi-day trek",
      entryFee: "Trekking permit required",
      description: "Source of Ganges, 18 km trek"
    },
    {
      name: "Pandava Gufa",
      timings: "Daylight hours",
      entryFee: "Free entry",
      description: "Cave where Pandavas meditated"
    },
    {
      name: "Surya Kund",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Hot water spring near temple"
    }
  ],
  travelTips: [
    "Carry warm clothes year-round",
    "Overnight stay recommended",
    "Trek to Gaumukh needs permit",
    "Book hotels in Gangotri or Uttarkashi",
    "Road may close in winter",
    "Hire local guides for treks"
  ]
};

// Detailed route information for Haridwar to Yamunotri
export const haridwarToYamunotriRoute = {
  route: "haridwar-to-yamunotri",
  origin: "Haridwar",
  destination: "Yamunotri",
  distance: "230 km",
  duration: "8-9 hours to Janki Chatti",
  type: "Spiritual",
  highway: "NH 58 and State Highway",
  description: "Pilgrimage to Yamunotri, the source of River Yamuna and one of Char Dham sites. The journey ends at Janki Chatti, from where a 6 km trek leads to the temple at 3,293m altitude.",
  highlights: [
    "Char Dham pilgrimage",
    "Source of River Yamuna",
    "Himalayan trek destination",
    "Hot water springs",
    "Scenic mountain route"
  ],
  bestTimeToVisit: "May to June, September to October (Temple open April-November)",
  attractions: [
    {
      name: "Yamunotri Temple",
      timings: "6:00 AM to 8:00 PM (during season)",
      entryFee: "Free entry",
      description: "Temple at source of Yamuna"
    },
    {
      name: "Surya Kund",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Hot water spring for cooking prasad"
    },
    {
      name: "Divya Shila",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Sacred rock pillar worshipped before temple"
    },
    {
      name: "Janki Chatti",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Base for trek with hot springs"
    }
  ],
  travelTips: [
    "Trek is 6 km from Janki Chatti",
    "Ponies and palanquins available",
    "Carry warm clothes and raincoat",
    "Book accommodation in advance",
    "Start trek early morning",
    "Check weather and road conditions"
  ]
};

// Detailed route information for Haridwar to Mussoorie
export const haridwarToMussoorieRoute = {
  route: "haridwar-to-mussoorie",
  origin: "Haridwar",
  destination: "Mussoorie",
  distance: "90 km",
  duration: "2-3 hours",
  type: "Hill Station",
  highway: "State Highway via Dehradun",
  description: "Escape to Mussoorie, the Queen of Hills, from the spiritual city of Haridwar. This short journey takes you from the plains to the cool mountain air and colonial charm of Mussoorie.",
  highlights: [
    "Queen of Hills destination",
    "Colonial-era architecture",
    "Pleasant mountain climate",
    "Mall Road shopping",
    "Scenic viewpoints"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Kempty Falls",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹50 per person",
      description: "Popular waterfall with activities"
    },
    {
      name: "Gun Hill",
      timings: "8:00 AM to 8:00 PM",
      entryFee: "Cable car: ₹150 return",
      description: "Second highest point with views"
    },
    {
      name: "Mall Road",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Famous shopping and dining street"
    },
    {
      name: "Lal Tibba",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Highest point with snow views"
    }
  ],
  travelTips: [
    "Perfect weekend getaway",
    "Book Mall Road side hotels",
    "Try momos and local cafes",
    "Take cable car to Gun Hill",
    "Avoid monsoon season",
    "Carry light woolens"
  ]
};

// Detailed route information for Haridwar to Auli
export const haridwarToAuliRoute = {
  route: "haridwar-to-auli",
  origin: "Haridwar",
  destination: "Auli",
  distance: "280 km",
  duration: "9-10 hours",
  type: "Hill Station",
  highway: "NH 58 and State Highway",
  description: "Journey to Auli, India's premier skiing destination, offering breathtaking views of Nanda Devi and other Himalayan peaks. A paradise for winter sports enthusiasts and nature lovers.",
  highlights: [
    "Premier skiing destination",
    "Nanda Devi peak views",
    "Cable car (ropeway) ride",
    "Winter sports hub",
    "Himalayan panoramic views"
  ],
  bestTimeToVisit: "December to February for skiing, April to June for views",
  attractions: [
    {
      name: "Auli Ski Resort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "Skiing: ₹500-₹3000",
      description: "Premier skiing slopes with equipment rental"
    },
    {
      name: "Auli Ropeway",
      timings: "8:00 AM to 5:00 PM",
      entryFee: "₹1000 return",
      description: "Asia's longest cable car from Joshimath"
    },
    {
      name: "Gurso Bugyal",
      timings: "Daylight hours",
      entryFee: "Free entry",
      description: "Alpine meadow, 3 km trek from Auli"
    },
    {
      name: "Chenab Lake",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Artificial lake with snow views"
    }
  ],
  travelTips: [
    "Book ski equipment in advance",
    "Carry heavy winter clothes",
    "Stay at GMVN or private resorts",
    "Take ropeway from Joshimath",
    "Visit Joshimath temples",
    "Check snow conditions before travel"
  ]
};

// Detailed route information for Haridwar to Chopta
export const haridwarToChoptaRoute = {
  route: "haridwar-to-chopta",
  origin: "Haridwar",
  destination: "Chopta",
  distance: "220 km",
  duration: "7-8 hours",
  type: "Hill Station",
  highway: "NH 58 and State Highway",
  description: "Discover Chopta, the Mini Switzerland of India, known for its meadows, alpine forests, and as the base for Tungnath temple trek. Perfect for nature lovers and trekkers.",
  highlights: [
    "Mini Switzerland of India",
    "Tungnath temple trek base",
    "Alpine meadows",
    "Chandrashila peak access",
    "Pristine natural beauty"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Tungnath Temple",
      timings: "6:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Highest Shiva temple, 3.5 km trek"
    },
    {
      name: "Chandrashila Peak",
      timings: "Daylight hours",
      entryFee: "Free entry",
      description: "Summit trek from Tungnath, panoramic views"
    },
    {
      name: "Deoria Tal",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Lake with Chaukhamba reflection, 3 km trek"
    },
    {
      name: "Chopta Meadows",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Beautiful alpine meadows for camping"
    }
  ],
  travelTips: [
    "Carry trekking gear and warm clothes",
    "Camp in Chopta meadows",
    "Trek to Tungnath and Chandrashila",
    "Visit Deoria Tal for sunrise",
    "Book camps or GMVN lodge",
    "Limited mobile connectivity"
  ]
};

// Detailed route information for Haridwar to Delhi
export const haridwarToDelhiRoute = {
  route: "haridwar-to-delhi",
  origin: "Haridwar",
  destination: "Delhi",
  distance: "220 km",
  duration: "5-6 hours",
  type: "Spiritual",
  highway: "NH 334 and NH 58",
  description: "Return journey from the holy city of Haridwar to Delhi. This well-connected route offers smooth highway travel, making it easy to combine spiritual pilgrimage with capital city exploration.",
  highlights: [
    "Well-maintained highways",
    "Smooth return journey",
    "Multiple rest stops",
    "Easy connectivity",
    "Pilgrimage to capital route"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "India Gate",
      timings: "Open 24 hours",
      entryFee: "Free entry",
      description: "Iconic war memorial"
    },
    {
      name: "Akshardham Temple",
      timings: "9:30 AM to 6:30 PM (Closed on Mondays)",
      entryFee: "Free entry",
      description: "Magnificent Hindu temple complex"
    },
    {
      name: "Lotus Temple",
      timings: "9:00 AM to 5:30 PM (Closed on Mondays)",
      entryFee: "Free entry",
      description: "Bahai House of Worship"
    },
    {
      name: "Connaught Place",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Shopping and dining hub"
    }
  ],
  travelTips: [
    "Start early to avoid traffic",
    "Use Delhi Metro for local travel",
    "Visit Akshardham if time permits",
    "Book hotels near metro stations",
    "Try Delhi street food",
    "Carry valid ID for attractions"
  ]
};

// Detailed route information for Haridwar to Dehradun
export const haridwarToDehradunRoute = {
  route: "haridwar-to-dehradun",
  origin: "Haridwar",
  destination: "Dehradun",
  distance: "55 km",
  duration: "1-2 hours",
  type: "Hill Station",
  highway: "State Highway",
  description: "A short scenic drive from Haridwar to Dehradun, the capital of Uttarakhand. Perfect for combining pilgrimage with hill station exploration, and as a gateway to Mussoorie.",
  highlights: [
    "Short scenic drive",
    "Capital city destination",
    "Pleasant year-round climate",
    "Gateway to Mussoorie",
    "Educational and cultural hub"
  ],
  bestTimeToVisit: "March to June, September to November",
  attractions: [
    {
      name: "Robber's Cave",
      timings: "8:00 AM to 5:00 PM",
      entryFee: "₹25 per person",
      description: "Natural cave with stream"
    },
    {
      name: "Sahastradhara",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹35 for Indians",
      description: "Therapeutic sulphur springs"
    },
    {
      name: "Mindrolling Monastery",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Beautiful Tibetan Buddhist monastery"
    },
    {
      name: "Forest Research Institute",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹100 for Indians",
      description: "Colonial architecture with museums"
    }
  ],
  travelTips: [
    "Ideal for day trip combination",
    "Use as base for Mussoorie visit",
    "Try Garhwali cuisine",
    "Visit Paltan Bazaar for shopping",
    "Carry light jacket",
    "Combine with Haridwar pilgrimage"
  ]
};

// Detailed route information for Chandigarh to Manali
export const chandigarhToManaliRoute = {
  route: "chandigarh-to-manali",
  origin: "Chandigarh",
  destination: "Manali",
  distance: "310 km",
  duration: "8-9 hours",
  type: "Hill Station",
  highway: "NH 205 and NH 3",
  description: "Journey from the planned city of Chandigarh to the scenic hill station of Manali. This popular route takes you through Kullu Valley, offering breathtaking mountain views and adventure opportunities.",
  highlights: [
    "Kullu Valley scenic route",
    "Snow-capped mountain views",
    "Adventure sports destination",
    "Ancient Hadimba Temple",
    "Solang Valley activities"
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
      description: "Adventure sports and skiing hub"
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
      description: "Backpacker village with cafes"
    }
  ],
  travelTips: [
    "Book Rohtang Pass permit in advance",
    "Carry warm clothes even in summer",
    "Try river rafting in Kullu",
    "Stay in Old Manali for cafes",
    "Pre-book hotels during peak season",
    "Check road conditions before travel"
  ]
};

// Detailed route information for Chandigarh to Shimla
export const chandigarhToShimlaRoute = {
  route: "chandigarh-to-shimla",
  origin: "Chandigarh",
  destination: "Shimla",
  distance: "115 km",
  duration: "3-4 hours",
  type: "Hill Station",
  highway: "NH 5",
  description: "Short and scenic journey from Chandigarh to Shimla, the Queen of Hills. This well-maintained highway offers a comfortable ride to the former summer capital of British India.",
  highlights: [
    "Quick weekend getaway",
    "Colonial architecture",
    "Famous Mall Road",
    "Scenic mountain views",
    "Pleasant climate year-round"
  ],
  bestTimeToVisit: "October to February for snow, March to June for pleasant weather",
  attractions: [
    {
      name: "The Ridge",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Open space with mountain views"
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
      description: "Hilltop temple with giant Hanuman statue"
    },
    {
      name: "Christ Church",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Historic Neo-Gothic church"
    }
  ],
  travelTips: [
    "Perfect weekend trip from Chandigarh",
    "Book Mall Road side hotels",
    "Walk on Ridge and Mall Road",
    "Try toy train from Kalka",
    "Carry light woolens",
    "Avoid long weekends for less crowd"
  ]
};

// Detailed route information for Chandigarh to Kullu Manali
export const chandigarhToKulluManaliRoute = {
  route: "chandigarh-to-kullu-manali",
  origin: "Chandigarh",
  destination: "Kullu Manali",
  distance: "310 km",
  duration: "8-9 hours",
  type: "Hill Station",
  highway: "NH 205 and NH 3",
  description: "Explore the beautiful Kullu Valley and Manali together. This route takes you through apple orchards, riverside views, and offers both cultural heritage and adventure activities.",
  highlights: [
    "Beautiful Kullu Valley",
    "Beas River scenic route",
    "Apple orchards views",
    "Adventure and heritage combo",
    "Riverside camping options"
  ],
  bestTimeToVisit: "March to June, October to February",
  attractions: [
    {
      name: "Bijli Mahadev Temple",
      timings: "6:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Temple with valley views, trek required"
    },
    {
      name: "Great Himalayan National Park",
      timings: "Daylight hours",
      entryFee: "₹50 for Indians",
      description: "UNESCO World Heritage biodiversity park"
    },
    {
      name: "Raghunath Temple Kullu",
      timings: "6:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Lord Rama temple in Kullu town"
    },
    {
      name: "Manikaran Sahib",
      timings: "4:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Gurudwara with hot springs"
    }
  ],
  travelTips: [
    "Stop at Kullu for local culture",
    "Visit Manikaran hot springs",
    "Try river rafting on Beas",
    "Buy local woolens and shawls",
    "Taste Kullu trout fish",
    "Camp by riverside in Kasol"
  ]
};

// Detailed route information for Chandigarh to Kasol
export const chandigarhToKasolRoute = {
  route: "chandigarh-to-kasol",
  origin: "Chandigarh",
  destination: "Kasol",
  distance: "300 km",
  duration: "8-9 hours",
  type: "Adventure",
  highway: "NH 205 and NH 3",
  description: "Journey to Kasol, the Mini Israel of India, nestled in Parvati Valley. Popular among backpackers, trekkers, and nature enthusiasts for its serene beauty and hippie culture.",
  highlights: [
    "Mini Israel of India",
    "Parvati Valley destination",
    "Trekking paradise",
    "Backpacker haven",
    "Israeli cafe culture"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Chalal Village",
      timings: "Daylight hours",
      entryFee: "Free entry",
      description: "Scenic village, short trek from Kasol"
    },
    {
      name: "Manikaran Sahib",
      timings: "4:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Holy gurudwara with hot springs"
    },
    {
      name: "Kheerganga Trek",
      timings: "Multi-day trek",
      entryFee: "₹50 forest entry",
      description: "Popular trek with hot water springs"
    },
    {
      name: "Tosh Village",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Beautiful mountain village"
    }
  ],
  travelTips: [
    "Carry cash, limited ATMs",
    "Book riverside guesthouses",
    "Try Israeli and local cuisine",
    "Trek to Kheerganga or Tosh",
    "Respect local culture",
    "Pack trekking gear"
  ]
};

// Detailed route information for Chandigarh to Dharamshala
export const chandigarhToDharamshalaRoute = {
  route: "chandigarh-to-dharamshala",
  origin: "Chandigarh",
  destination: "Dharamshala",
  distance: "240 km",
  duration: "6-7 hours",
  type: "Hill Station",
  highway: "NH 205 and NH 154",
  description: "Travel to Dharamshala, the residence of His Holiness the Dalai Lama and center of Tibetan culture in India. Nestled in the Dhauladhar ranges, it offers spirituality and natural beauty.",
  highlights: [
    "Home of Dalai Lama",
    "Tibetan culture hub",
    "Beautiful monasteries",
    "Dhauladhar mountain views",
    "Cricket stadium altitude"
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
      description: "Popular day/overnight trek"
    },
    {
      name: "Norbulingka Institute",
      timings: "9:00 AM to 5:30 PM",
      entryFee: "₹50 per person",
      description: "Tibetan arts and culture center"
    }
  ],
  travelTips: [
    "Stay in McLeodganj area",
    "Visit Tibetan Museum",
    "Try Tibetan momos and thukpa",
    "Trek to Triund for sunrise",
    "Respect monastery timings",
    "Carry warm clothes"
  ]
};

// Detailed route information for Chandigarh to Dalhousie
export const chandigarhToDalhousieRoute = {
  route: "chandigarh-to-dalhousie",
  origin: "Chandigarh",
  destination: "Dalhousie",
  distance: "320 km",
  duration: "8-9 hours",
  type: "Hill Station",
  highway: "NH 205 and NH 154",
  description: "Journey to Dalhousie, a charming hill station spread across five hills with colonial architecture and pristine natural beauty. Perfect for a peaceful retreat in the Himalayas.",
  highlights: [
    "Colonial-era charm",
    "Dense pine forests",
    "Victorian architecture",
    "Khajjiar Mini Switzerland",
    "Peaceful environment"
  ],
  bestTimeToVisit: "April to June, September to November",
  attractions: [
    {
      name: "Khajjiar",
      timings: "Open all day",
      entryFee: "Activities: ₹200-₹500",
      description: "Mini Switzerland with meadows"
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
      description: "Highest peak with views"
    },
    {
      name: "Kalatop Wildlife Sanctuary",
      timings: "7:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians",
      description: "Dense forest with wildlife"
    }
  ],
  travelTips: [
    "Must visit Khajjiar",
    "Book heritage hotels",
    "Walk on Mall Road",
    "Try Himachali cuisine",
    "Carry warm clothes",
    "Visit in off-season for peace"
  ]
};

// Detailed route information for Chandigarh to McLeod Ganj
export const chandigarhToMcLeodGanjRoute = {
  route: "chandigarh-to-mcleod-ganj",
  origin: "Chandigarh",
  destination: "McLeod Ganj",
  distance: "245 km",
  duration: "6-7 hours",
  type: "Hill Station",
  highway: "NH 205 and NH 154",
  description: "Visit McLeod Ganj, the Little Lhasa of India, known for its Tibetan community, monasteries, and stunning mountain views. A perfect blend of spirituality and natural beauty.",
  highlights: [
    "Little Lhasa of India",
    "Tibetan refugee settlement",
    "Buddhist monasteries",
    "Backpacker culture",
    "Trekking trails"
  ],
  bestTimeToVisit: "March to June, September to November",
  attractions: [
    {
      name: "Tsuglagkhang Complex",
      timings: "5:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Dalai Lama's temple complex"
    },
    {
      name: "Bhagsunag Temple & Waterfall",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Ancient temple with waterfall"
    },
    {
      name: "Triund Trek",
      timings: "Daylight hours",
      entryFee: "₹50 forest entry",
      description: "9 km trek with camping"
    },
    {
      name: "Tibetan Museum",
      timings: "9:00 AM to 5:00 PM (Closed Sundays)",
      entryFee: "Free entry",
      description: "Tibetan history and culture"
    }
  ],
  travelTips: [
    "Explore Tibetan markets",
    "Try authentic Tibetan food",
    "Book trek to Triund in advance",
    "Visit monasteries early morning",
    "Attend teachings if available",
    "Carry rain gear and woolens"
  ]
};

// Detailed route information for Chandigarh to Spiti Valley
export const chandigarhToSpitiValleyRoute = {
  route: "chandigarh-to-spiti-valley",
  origin: "Chandigarh",
  destination: "Spiti Valley",
  distance: "420 km",
  duration: "12-13 hours to Kaza",
  type: "Adventure",
  highway: "NH 205, NH 5, and State Highway",
  description: "Adventure to Spiti Valley, the Cold Desert Mountain Valley, known for its stark landscapes, ancient monasteries, and unique Indo-Tibetan culture. A true Himalayan adventure.",
  highlights: [
    "Cold desert landscape",
    "Ancient Buddhist monasteries",
    "Chandratal Lake access",
    "Indo-Tibetan culture",
    "High altitude adventure"
  ],
  bestTimeToVisit: "May to October (Roads open)",
  attractions: [
    {
      name: "Key Monastery",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "Free entry, donations welcome",
      description: "1000-year-old monastery"
    },
    {
      name: "Chandratal Lake",
      timings: "Open all day",
      entryFee: "₹50 camping fee",
      description: "Moon Lake at 4,300m"
    },
    {
      name: "Kibber Village",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "One of highest inhabited villages"
    },
    {
      name: "Pin Valley National Park",
      timings: "Daylight hours",
      entryFee: "₹50 for Indians",
      description: "Snow leopard habitat"
    }
  ],
  travelTips: [
    "Acclimatize properly at altitude",
    "Carry warm clothes and medicines",
    "Book homestays in advance",
    "Limited mobile connectivity",
    "Carry sufficient cash",
    "Respect local culture and monasteries"
  ]
};

// Detailed route information for Chandigarh to Leh Ladakh
export const chandigarhToLehLadakhRoute = {
  route: "chandigarh-to-leh-ladakh",
  origin: "Chandigarh",
  destination: "Leh Ladakh",
  distance: "725 km",
  duration: "18-20 hours (2-day journey)",
  type: "Adventure",
  highway: "NH 205, NH 3 (Manali-Leh Highway)",
  description: "Epic journey to Leh Ladakh via the legendary Manali-Leh Highway. This adventure route crosses high mountain passes and offers unparalleled Himalayan landscapes.",
  highlights: [
    "Legendary Manali-Leh Highway",
    "World's highest motorable passes",
    "Dramatic mountain landscapes",
    "Buddhist monasteries",
    "Pangong Lake access"
  ],
  bestTimeToVisit: "June to September (Road open)",
  attractions: [
    {
      name: "Pangong Lake",
      timings: "Open all day",
      entryFee: "₹300 per person + vehicle charges",
      description: "Stunning blue high-altitude lake"
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
      description: "One of world's highest passes"
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
    "Acclimatize in Leh for 48 hours",
    "Carry oxygen, warm clothes, medicines",
    "Get Inner Line Permits in advance",
    "Book accommodations ahead",
    "Check road conditions and weather"
  ]
};

// Detailed route information for Chandigarh to Amritsar
export const chandigarhToAmritsarRoute = {
  route: "chandigarh-to-amritsar",
  origin: "Chandigarh",
  destination: "Amritsar",
  distance: "230 km",
  duration: "5-6 hours",
  type: "Spiritual",
  highway: "NH 44",
  description: "Journey to Amritsar, the spiritual and cultural center of Sikhism, home to the magnificent Golden Temple. A perfect combination of spirituality, history, and Punjabi culture.",
  highlights: [
    "Golden Temple visit",
    "Wagah Border ceremony",
    "Rich Sikh heritage",
    "Jallianwala Bagh history",
    "Authentic Punjabi cuisine"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Golden Temple (Harmandir Sahib)",
      timings: "Open 24 hours",
      entryFee: "Free entry",
      description: "Holiest Sikh shrine, stunning architecture"
    },
    {
      name: "Wagah Border",
      timings: "Ceremony at 4:15 PM (winter), 5:15 PM (summer)",
      entryFee: "Free entry",
      description: "India-Pakistan border ceremony"
    },
    {
      name: "Jallianwala Bagh",
      timings: "6:30 AM to 7:30 PM",
      entryFee: "Free entry",
      description: "Historic memorial garden"
    },
    {
      name: "Partition Museum",
      timings: "10:00 AM to 6:00 PM (Closed Mondays)",
      entryFee: "₹20 for Indians",
      description: "Museum on India-Pakistan partition"
    }
  ],
  travelTips: [
    "Visit Golden Temple early morning",
    "Try langar (community kitchen)",
    "Book Wagah Border seats in advance",
    "Taste Amritsari kulcha and lassi",
    "Cover head at Golden Temple",
    "Shop at Hall Bazaar"
  ]
};

// Detailed route information for Udaipur to Jodhpur
export const udaipurToJodhpurRoute = {
  route: "udaipur-to-jodhpur",
  origin: "Udaipur",
  destination: "Jodhpur",
  distance: "260 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 62",
  description: "Journey from the City of Lakes to the Blue City. This scenic Rajasthan route connects two majestic cities, each with its own unique character, royal heritage, and stunning forts.",
  highlights: [
    "Two royal cities connection",
    "Aravalli range views",
    "Desert landscape transition",
    "Magnificent forts",
    "Rich Rajasthani culture"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Mehrangarh Fort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹100 for Indians, ₹600 for foreigners",
      description: "One of India's largest forts"
    },
    {
      name: "Jaswant Thada",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹50 for foreigners",
      description: "White marble memorial"
    },
    {
      name: "Umaid Bhawan Palace",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹100 for foreigners",
      description: "Art Deco palace with museum"
    },
    {
      name: "Clock Tower Market",
      timings: "10:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Vibrant local market"
    }
  ],
  travelTips: [
    "Start early from Udaipur",
    "Visit Mehrangarh Fort first",
    "Try famous Makhania lassi",
    "Explore blue houses in old city",
    "Shop for textiles and handicrafts",
    "Book heritage hotel in Jodhpur"
  ]
};

// Detailed route information for Udaipur to Jaisalmer
export const udaipurToJaisalmerRoute = {
  route: "udaipur-to-jaisalmer",
  origin: "Udaipur",
  destination: "Jaisalmer",
  distance: "470 km",
  duration: "8-9 hours",
  type: "Heritage",
  highway: "NH 62 and NH 125",
  description: "Epic journey from the City of Lakes through the Aravalli hills to the Golden City in the Thar Desert. Experience the dramatic landscape transformation from lakes to desert.",
  highlights: [
    "Lakes to desert journey",
    "Dramatic landscape change",
    "Golden sandstone architecture",
    "Desert safari destination",
    "Living fort experience"
  ],
  bestTimeToVisit: "October to February",
  attractions: [
    {
      name: "Jaisalmer Fort",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹250 for foreigners",
      description: "Living fort with inhabitants"
    },
    {
      name: "Patwon Ki Haveli",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "Cluster of five havelis"
    },
    {
      name: "Sam Sand Dunes",
      timings: "Best at sunrise and sunset",
      entryFee: "Camel safari: ₹500-₹1500",
      description: "Desert safari experience"
    },
    {
      name: "Gadisar Lake",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Historic artificial lake"
    }
  ],
  travelTips: [
    "Break journey at Jodhpur if needed",
    "Book desert camp in advance",
    "Carry sunscreen and light clothes",
    "Don't miss sunset at sand dunes",
    "Try local Rajasthani food",
    "Shop for handicrafts in fort"
  ]
};

// Detailed route information for Udaipur to Mount Abu
export const udaipurToMountAbuRoute = {
  route: "udaipur-to-mount-abu",
  origin: "Udaipur",
  destination: "Mount Abu",
  distance: "165 km",
  duration: "3-4 hours",
  type: "Hill Station",
  highway: "NH 27",
  description: "Short scenic journey from the City of Lakes to Rajasthan's only hill station. Escape the desert heat and enjoy cool mountain air, lush greenery, and the magnificent Dilwara Temples.",
  highlights: [
    "Quick hill station escape",
    "Cool mountain climate",
    "Stunning Dilwara Temples",
    "Nakki Lake boating",
    "Scenic viewpoints"
  ],
  bestTimeToVisit: "All year round, especially March to June",
  attractions: [
    {
      name: "Dilwara Temples",
      timings: "12:00 PM to 6:00 PM",
      entryFee: "Free entry",
      description: "Exquisite Jain marble temples"
    },
    {
      name: "Nakki Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹100-₹300",
      description: "Sacred lake with boating"
    },
    {
      name: "Sunset Point",
      timings: "Best at sunset",
      entryFee: "₹10 per person",
      description: "Panoramic sunset views"
    },
    {
      name: "Guru Shikhar",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Highest peak in Aravalli"
    }
  ],
  travelTips: [
    "Perfect weekend trip from Udaipur",
    "Carry light woolens",
    "Remove leather before temple visit",
    "Try Gujarati cuisine",
    "Enjoy boating at Nakki Lake",
    "Visit sunset point for views"
  ]
};

// Detailed route information for Jodhpur to Jaisalmer
export const jodhpurToJaisalmerRoute = {
  route: "jodhpur-to-jaisalmer",
  origin: "Jodhpur",
  destination: "Jaisalmer",
  distance: "285 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 125",
  description: "Travel from the Blue City to the Golden City through the heart of the Thar Desert. This route showcases Rajasthan's desert beauty and connects two of its most iconic heritage cities.",
  highlights: [
    "Blue to Golden city journey",
    "Thar Desert landscape",
    "Desert villages en route",
    "Camel safari destination",
    "Sand dunes experience"
  ],
  bestTimeToVisit: "October to February",
  attractions: [
    {
      name: "Jaisalmer Fort",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹250 for foreigners",
      description: "Massive living fort"
    },
    {
      name: "Patwon Ki Haveli",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      description: "Five ornate merchant havelis"
    },
    {
      name: "Sam Sand Dunes",
      timings: "Best at sunrise and sunset",
      entryFee: "Camel safari: ₹500-₹1500",
      description: "Iconic desert dunes"
    },
    {
      name: "Salim Singh Ki Haveli",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "₹50 per person",
      description: "Haveli with unique peacock brackets"
    }
  ],
  travelTips: [
    "Start early to explore Jaisalmer",
    "Book desert camp in advance",
    "Carry water and sunscreen",
    "Visit sand dunes at sunset",
    "Try local Rajasthani cuisine",
    "Explore fort streets on foot"
  ]
};

// Detailed route information for Jodhpur to Udaipur
export const jodhpurToUdaipurRoute = {
  route: "jodhpur-to-udaipur",
  origin: "Jodhpur",
  destination: "Udaipur",
  distance: "260 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 62",
  description: "Journey from the Blue City to the City of Lakes. Travel through the Aravalli hills from desert landscapes to the romantic lakeside setting of Udaipur.",
  highlights: [
    "Desert to lakes transition",
    "Aravalli mountain views",
    "Romantic lakeside destination",
    "Royal palaces",
    "Cultural heritage experience"
  ],
  bestTimeToVisit: "September to March",
  attractions: [
    {
      name: "City Palace Udaipur",
      timings: "9:30 AM to 5:30 PM",
      entryFee: "₹300 for Indians, ₹600 for foreigners",
      description: "Magnificent palace complex"
    },
    {
      name: "Lake Pichola",
      timings: "Open all day",
      entryFee: "Boat ride: ₹400-₹1000",
      description: "Scenic lake with island palaces"
    },
    {
      name: "Jag Mandir",
      timings: "10:00 AM to 6:00 PM",
      entryFee: "₹450 for Indians, ₹900 for foreigners",
      description: "Island palace on lake"
    },
    {
      name: "Saheliyon Ki Bari",
      timings: "9:00 AM to 7:00 PM",
      entryFee: "₹25 for Indians, ₹100 for foreigners",
      description: "Garden with fountains"
    }
  ],
  travelTips: [
    "Book hotel near City Palace",
    "Take sunset boat ride on Lake Pichola",
    "Visit Monsoon Palace for views",
    "Try traditional Rajasthani thali",
    "Shop at local markets",
    "Attend cultural shows at hotels"
  ]
};

// Detailed route information for Jodhpur to Mount Abu
export const jodhpurToMountAbuRoute = {
  route: "jodhpur-to-mount-abu",
  origin: "Jodhpur",
  destination: "Mount Abu",
  distance: "265 km",
  duration: "5-6 hours",
  type: "Hill Station",
  highway: "NH 62 and NH 27",
  description: "Escape from the Blue City to Rajasthan's only hill station. Experience the transition from desert plains to cool mountain air and lush greenery.",
  highlights: [
    "Desert to hills escape",
    "Rajasthan's only hill station",
    "Dilwara marble temples",
    "Cool climate retreat",
    "Scenic mountain views"
  ],
  bestTimeToVisit: "All year round, March to June for relief from heat",
  attractions: [
    {
      name: "Dilwara Temples",
      timings: "12:00 PM to 6:00 PM",
      entryFee: "Free entry",
      description: "Stunning Jain temples with marble work"
    },
    {
      name: "Nakki Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹100-₹300",
      description: "Artificial lake with boating"
    },
    {
      name: "Sunset Point",
      timings: "Best at sunset",
      entryFee: "₹10 per person",
      description: "Popular viewpoint"
    },
    {
      name: "Guru Shikhar",
      timings: "6:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Highest point in Aravalli range"
    }
  ],
  travelTips: [
    "Carry woolens even in summer",
    "Remove leather items before temple visit",
    "Book accommodation in advance",
    "Try Gujarati cuisine",
    "Enjoy boating at Nakki Lake",
    "Visit viewpoints for panoramic views"
  ]
};

// Detailed route information for Jaisalmer to Bikaner
export const jaisalmerToBikanerRoute = {
  route: "jaisalmer-to-bikaner",
  origin: "Jaisalmer",
  destination: "Bikaner",
  distance: "330 km",
  duration: "6-7 hours",
  type: "Heritage",
  highway: "NH 62",
  description: "Journey through the Thar Desert from the Golden City to Bikaner, known for its magnificent forts, palaces, and the famous Karni Mata Temple. Experience authentic desert Rajasthan.",
  highlights: [
    "Desert route through Thar",
    "Magnificent Junagarh Fort",
    "Famous Karni Mata Temple",
    "Camel breeding farm",
    "Authentic Rajasthani culture"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Junagarh Fort",
      timings: "10:00 AM to 5:30 PM",
      entryFee: "₹50 for Indians, ₹300 for foreigners",
      description: "Unconquered fort with museums"
    },
    {
      name: "Karni Mata Temple (Rat Temple)",
      timings: "6:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Famous temple with sacred rats"
    },
    {
      name: "Lalgarh Palace",
      timings: "10:00 AM to 5:00 PM",
      entryFee: "₹50 for Indians, ₹100 for foreigners",
      description: "Red sandstone palace with museum"
    },
    {
      name: "National Camel Research Centre",
      timings: "2:00 PM to 5:00 PM",
      entryFee: "₹30 per person",
      description: "Asia's largest camel farm"
    }
  ],
  travelTips: [
    "Visit Karni Mata Temple in morning",
    "Try famous Bikaneri bhujia",
    "Explore Junagarh Fort thoroughly",
    "Visit camel farm in evening",
    "Shop for leather items",
    "Taste local Rajasthani snacks"
  ]
};

// Detailed route information for Jaisalmer to Udaipur
export const jaisalmerToUdaipurRoute = {
  route: "jaisalmer-to-udaipur",
  origin: "Jaisalmer",
  destination: "Udaipur",
  distance: "470 km",
  duration: "8-9 hours",
  type: "Heritage",
  highway: "NH 125 and NH 62",
  description: "Epic journey from the Golden City in the Thar Desert to the romantic City of Lakes. Experience the dramatic transformation from desert to the Aravalli hills and serene lakes.",
  highlights: [
    "Desert to lakes journey",
    "Dramatic landscape change",
    "Romantic lakeside city",
    "Royal palace complex",
    "Boat ride experiences"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "City Palace Udaipur",
      timings: "9:30 AM to 5:30 PM",
      entryFee: "₹300 for Indians, ₹600 for foreigners",
      description: "Palace complex on Lake Pichola"
    },
    {
      name: "Lake Pichola",
      timings: "Open all day",
      entryFee: "Boat ride: ₹400-₹1000",
      description: "Beautiful lake with palaces"
    },
    {
      name: "Jag Mandir",
      timings: "10:00 AM to 6:00 PM",
      entryFee: "₹450 for Indians, ₹900 for foreigners",
      description: "Island palace destination"
    },
    {
      name: "Fateh Sagar Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹200-₹400",
      description: "Lake with island gardens"
    }
  ],
  travelTips: [
    "Break journey at Jodhpur",
    "Book hotel near City Palace",
    "Take sunset boat ride",
    "Visit Monsoon Palace",
    "Try Rajasthani thali",
    "Shop at local markets"
  ]
};

// Detailed route information for Jaisalmer to Jodhpur
export const jaisalmerToJodhpurRoute = {
  route: "jaisalmer-to-jodhpur",
  origin: "Jaisalmer",
  destination: "Jodhpur",
  distance: "285 km",
  duration: "5-6 hours",
  type: "Heritage",
  highway: "NH 125",
  description: "Travel from the Golden City to the Blue City through the Thar Desert. Connect two of Rajasthan's most iconic cities, each with its unique charm and magnificent forts.",
  highlights: [
    "Golden to Blue city route",
    "Thar Desert views",
    "Majestic Mehrangarh Fort",
    "Blue houses exploration",
    "Local market experiences"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Mehrangarh Fort",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹100 for Indians, ₹600 for foreigners",
      description: "Massive fort with museum"
    },
    {
      name: "Jaswant Thada",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹50 for foreigners",
      description: "White marble cenotaph"
    },
    {
      name: "Umaid Bhawan Palace",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "₹30 for Indians, ₹100 for foreigners",
      description: "Art Deco palace"
    },
    {
      name: "Clock Tower & Sardar Market",
      timings: "10:00 AM to 9:00 PM",
      entryFee: "Free entry",
      description: "Vibrant local bazaar"
    }
  ],
  travelTips: [
    "Start early from Jaisalmer",
    "Visit Mehrangarh Fort first",
    "Try Makhania lassi",
    "Explore blue houses area",
    "Shop for textiles",
    "Book heritage hotel"
  ]
};

// Detailed route information for Jaisalmer to Delhi
export const jaisalmerToDelhiRoute = {
  route: "jaisalmer-to-delhi",
  origin: "Jaisalmer",
  destination: "Delhi",
  distance: "800 km",
  duration: "13-14 hours",
  type: "Heritage",
  highway: "NH 62 and NH 48",
  description: "Long journey from the Golden City in the Thar Desert to India's capital. This extensive route rewards you with the transition from desert landscapes to the bustling metropolis.",
  highlights: [
    "Desert to capital journey",
    "Long-distance highway travel",
    "Landscape transformation",
    "Capital city destination",
    "Heritage to modern transition"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "India Gate",
      timings: "Open 24 hours",
      entryFee: "Free entry",
      description: "Iconic war memorial"
    },
    {
      name: "Red Fort",
      timings: "9:30 AM to 4:30 PM (Closed Mondays)",
      entryFee: "₹50 for Indians, ₹600 for foreigners",
      description: "UNESCO World Heritage fort"
    },
    {
      name: "Qutub Minar",
      timings: "7:00 AM to 5:00 PM",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      description: "Tallest brick minaret"
    },
    {
      name: "Lotus Temple",
      timings: "9:00 AM to 5:30 PM (Closed Mondays)",
      entryFee: "Free entry",
      description: "Bahai House of Worship"
    }
  ],
  travelTips: [
    "Prefer overnight bus journey",
    "Carry snacks and water",
    "Use Delhi Metro for local travel",
    "Visit monuments in Old Delhi",
    "Try street food at Chandni Chowk",
    "Book hotel near metro station"
  ]
};

// Detailed route information for Delhi to Kullu Manali
export const delhiToKulluManaliRoute = {
  route: "delhi-to-kullu-manali",
  origin: "Delhi",
  destination: "Kullu Manali",
  distance: "540 km",
  duration: "12-14 hours",
  type: "Hill Station",
  highway: "NH 44",
  description: "Journey from India's capital to the beautiful Kullu Valley and Manali. This scenic route takes you through mountains, apple orchards, and riverside views, offering both cultural heritage and adventure.",
  highlights: [
    "Kullu Valley exploration",
    "Beas River scenic route",
    "Apple orchards and pine forests",
    "Adventure sports destination",
    "Ancient temples and culture"
  ],
  bestTimeToVisit: "March to June, October to February",
  attractions: [
    {
      name: "Hadimba Temple",
      timings: "8:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Ancient temple in cedar forest"
    },
    {
      name: "Bijli Mahadev Temple",
      timings: "6:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Temple with valley views in Kullu"
    },
    {
      name: "Solang Valley",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "Activities: ₹500-₹3000",
      description: "Adventure sports hub"
    },
    {
      name: "Manikaran Sahib",
      timings: "4:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Holy gurudwara with hot springs"
    }
  ],
  travelTips: [
    "Take overnight bus for comfort",
    "Stop at Kullu for local culture",
    "Visit Manikaran hot springs",
    "Try river rafting on Beas",
    "Buy local woolens and shawls",
    "Pre-book Rohtang Pass permit"
  ]
};

// Detailed route information for Delhi to Bir Billing
export const delhiToBirBillingRoute = {
  route: "delhi-to-bir-billing",
  origin: "Delhi",
  destination: "Bir Billing",
  distance: "475 km",
  duration: "10-11 hours",
  type: "Adventure",
  highway: "NH 44 and NH 154",
  description: "Adventure to Bir Billing, the paragliding capital of India. Located in the Kangra Valley, this destination offers world-class paragliding opportunities and serene Tibetan culture.",
  highlights: [
    "Paragliding capital of India",
    "World-class paragliding site",
    "Tibetan monasteries",
    "Scenic Kangra Valley",
    "Adventure sports hub"
  ],
  bestTimeToVisit: "September to November, March to May for paragliding",
  attractions: [
    {
      name: "Billing Paragliding Site",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "Paragliding: ₹2500-₹3500",
      description: "World's second-best paragliding site"
    },
    {
      name: "Chokling Monastery",
      timings: "6:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Beautiful Tibetan monastery"
    },
    {
      name: "Deer Park Institute",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "Free entry",
      description: "Buddhist study and meditation center"
    },
    {
      name: "Bir Tea Factory",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "Free entry",
      description: "Learn about tea processing"
    }
  ],
  travelTips: [
    "Book paragliding in advance",
    "Carry warm clothes and trekking shoes",
    "Stay in Bir village homestays",
    "Visit cafes with mountain views",
    "Try Tibetan cuisine",
    "Check weather for paragliding"
  ]
};

// Detailed route information for Delhi to Solang Valley
export const delhiToSolangValleyRoute = {
  route: "delhi-to-solang-valley",
  origin: "Delhi",
  destination: "Solang Valley",
  distance: "555 km",
  duration: "13-14 hours",
  type: "Hill Station",
  highway: "NH 44",
  description: "Journey to Solang Valley near Manali, a paradise for adventure enthusiasts. Famous for skiing, paragliding, and zorbing, it offers year-round activities and stunning Himalayan views.",
  highlights: [
    "Adventure sports paradise",
    "Skiing in winter",
    "Paragliding and zorbing",
    "Cable car rides",
    "Snow-capped mountain views"
  ],
  bestTimeToVisit: "December to February for skiing, March to June for activities",
  attractions: [
    {
      name: "Solang Valley Ski Resort",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "Activities: ₹500-₹3000",
      description: "Skiing and snow activities"
    },
    {
      name: "Solang Ropeway",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "₹700-₹1000 return",
      description: "Cable car to mountain top"
    },
    {
      name: "Anjani Mahadev Temple",
      timings: "6:00 AM to 7:00 PM",
      entryFee: "Free entry",
      description: "Trek to hilltop temple"
    },
    {
      name: "Adventure Activity Zone",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "Per activity: ₹300-₹1500",
      description: "Paragliding, zorbing, ATVs"
    }
  ],
  travelTips: [
    "Take overnight bus to Manali",
    "Book ski equipment in advance",
    "Carry heavy winter clothes",
    "Try multiple adventure activities",
    "Visit Rohtang Pass if open",
    "Stay in Manali for accommodation"
  ]
};

// Detailed route information for Delhi to Spiti Valley
export const delhiToSpitiValleyRoute = {
  route: "delhi-to-spiti-valley",
  origin: "Delhi",
  destination: "Spiti Valley",
  distance: "670 km",
  duration: "18-20 hours to Kaza",
  type: "Adventure",
  highway: "NH 44, NH 5, and State Highway",
  description: "Epic adventure to Spiti Valley, the Cold Desert Mountain Valley. Known for its stark landscapes, ancient monasteries, and unique Indo-Tibetan culture at high altitude.",
  highlights: [
    "Cold desert landscape",
    "Ancient Buddhist monasteries",
    "High altitude villages",
    "Chandratal Lake access",
    "Indo-Tibetan culture"
  ],
  bestTimeToVisit: "May to October (Roads open)",
  attractions: [
    {
      name: "Key Monastery",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "Free entry, donations welcome",
      description: "1000-year-old monastery"
    },
    {
      name: "Chandratal Lake",
      timings: "Open all day",
      entryFee: "₹50 camping fee",
      description: "Moon Lake at 4,300m altitude"
    },
    {
      name: "Kibber Village",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "One of highest inhabited villages"
    },
    {
      name: "Pin Valley National Park",
      timings: "Daylight hours",
      entryFee: "₹50 for Indians",
      description: "Snow leopard habitat"
    }
  ],
  travelTips: [
    "Mandatory 2-day journey",
    "Acclimatize properly at altitude",
    "Carry warm clothes and medicines",
    "Book homestays in advance",
    "Limited mobile connectivity",
    "Respect local monasteries"
  ]
};

// Detailed route information for Chandigarh to Kaza
export const chandigarhToKazaRoute = {
  route: "chandigarh-to-kaza",
  origin: "Chandigarh",
  destination: "Kaza",
  distance: "420 km",
  duration: "12-13 hours",
  type: "Adventure",
  highway: "NH 205, NH 5, and State Highway",
  description: "Adventure journey from Chandigarh to Kaza, the administrative center of Spiti Valley. This high-altitude destination offers ancient monasteries, stark landscapes, and unique Tibetan culture.",
  highlights: [
    "Spiti Valley headquarters",
    "Ancient Buddhist monasteries",
    "High altitude desert",
    "Fossil discoveries",
    "Traditional Spiti culture"
  ],
  bestTimeToVisit: "May to October (Roads open)",
  attractions: [
    {
      name: "Key Monastery",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "Free entry, donations welcome",
      description: "Largest monastery in Spiti"
    },
    {
      name: "Komic Village",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Highest motorable village with monastery"
    },
    {
      name: "Langza Buddha Statue",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Village with fossil hunting"
    },
    {
      name: "Hikkim Post Office",
      timings: "9:00 AM to 5:00 PM",
      entryFee: "Free entry",
      description: "World's highest post office"
    }
  ],
  travelTips: [
    "Acclimatize before high altitude",
    "Carry oxygen and medicines",
    "Book homestays in villages",
    "Minimal mobile connectivity",
    "Carry sufficient cash",
    "Respect Buddhist culture"
  ]
};

// Detailed route information for Haridwar to Ranikhet
export const haridwarToRanikhetRoute = {
  route: "haridwar-to-ranikhet",
  origin: "Haridwar",
  destination: "Ranikhet",
  distance: "240 km",
  duration: "6-7 hours",
  type: "Hill Station",
  highway: "NH 109 and State Highway",
  description: "Journey from the holy city to the peaceful cantonment town of Ranikhet. Known for its pine forests, golf course, and Himalayan views, it offers a serene escape from tourist crowds.",
  highlights: [
    "Peaceful cantonment town",
    "Dense pine and oak forests",
    "Himalayan peak views",
    "Kumaon Regiment center",
    "Golf course at altitude"
  ],
  bestTimeToVisit: "All year round, especially April to June and September to November",
  attractions: [
    {
      name: "Chaubatia Gardens",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹50 per person",
      description: "Apple orchards with mountain views"
    },
    {
      name: "Jhula Devi Temple",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Ancient temple with bells"
    },
    {
      name: "Ranikhet Golf Course",
      timings: "7:00 AM to 6:00 PM",
      entryFee: "₹500-₹1000",
      description: "Asia's highest golf course"
    },
    {
      name: "Kumaon Regimental Museum",
      timings: "9:00 AM to 5:00 PM (Closed Mondays)",
      entryFee: "₹20 per person",
      description: "Military heritage museum"
    }
  ],
  travelTips: [
    "Peaceful alternative to crowded hill stations",
    "Walk through pine forests",
    "Visit apple orchards in season",
    "Carry warm clothes",
    "Limited commercialization",
    "Respect cantonment rules"
  ]
};

// Detailed route information for Haridwar to Nainital
export const haridwarToNainitalRoute = {
  route: "haridwar-to-nainital",
  origin: "Haridwar",
  destination: "Nainital",
  distance: "200 km",
  duration: "5-6 hours",
  type: "Hill Station",
  highway: "NH 109",
  description: "Travel from the spiritual city to the Lake District of India. Nainital's beautiful Naini Lake, pleasant weather, and Victorian-era charm make it a perfect hill station retreat.",
  highlights: [
    "Beautiful Naini Lake",
    "Lake District of India",
    "Boating activities",
    "Scenic viewpoints",
    "Colonial architecture"
  ],
  bestTimeToVisit: "March to June, September to November",
  attractions: [
    {
      name: "Naini Lake",
      timings: "Open all day",
      entryFee: "Boating: ₹150-₹300",
      description: "Pear-shaped lake in town center"
    },
    {
      name: "Naina Devi Temple",
      timings: "6:00 AM to 10:00 PM",
      entryFee: "Free entry",
      description: "Sacred temple on lake shore"
    },
    {
      name: "Snow View Point",
      timings: "10:00 AM to 5:00 PM",
      entryFee: "Cable car: ₹300 return",
      description: "Panoramic Himalayan views"
    },
    {
      name: "Tiffin Top",
      timings: "Open all day",
      entryFee: "Free entry",
      description: "Scenic viewpoint with trek"
    }
  ],
  travelTips: [
    "Pre-book hotels near Mall Road",
    "Enjoy boating in Naini Lake",
    "Walk around the lake",
    "Try local Kumaoni cuisine",
    "Visit nearby Bhimtal",
    "Carry warm clothes"
  ]
};

// Detailed route information for Delhi to Ranikhet
export const delhiToRanikhetRoute = {
  route: "delhi-to-ranikhet",
  origin: "Delhi",
  destination: "Ranikhet",
  distance: "360 km",
  duration: "8-9 hours",
  type: "Hill Station",
  highway: "NH 9 and NH 109",
  description: "Journey to Ranikhet, a serene cantonment town known for its tranquility, dense forests, and panoramic Himalayan views. Perfect for those seeking peace away from commercialized tourist spots.",
  highlights: [
    "Serene cantonment town",
    "Pine and deodar forests",
    "Himalayan panoramic views",
    "Golf course destination",
    "Peaceful environment"
  ],
  bestTimeToVisit: "All year round, April to June and September to November ideal",
  attractions: [
    {
      name: "Chaubatia Gardens",
      timings: "7:00 AM to 7:00 PM",
      entryFee: "₹50 per person",
      description: "Fruit orchards with views"
    },
    {
      name: "Jhula Devi Temple",
      timings: "6:00 AM to 8:00 PM",
      entryFee: "Free entry",
      description: "Temple with thousands of bells"
    },
    {
      name: "Ranikhet Golf Course",
      timings: "7:00 AM to 6:00 PM",
      entryFee: "₹500-₹1000",
      description: "High-altitude golf course"
    },
    {
      name: "Kumaon Regimental Museum",
      timings: "9:00 AM to 5:00 PM (Closed Mondays)",
      entryFee: "₹20 per person",
      description: "Military history museum"
    }
  ],
  travelTips: [
    "Book cantonment area hotels",
    "Walk through forest trails",
    "Visit apple orchards",
    "Carry woolens year-round",
    "Respect military area rules",
    "Limited nightlife and commercialization"
  ]
};

// Detailed route information for Delhi to Amritsar
export const delhiToAmritsarRoute = {
  route: "delhi-to-amritsar",
  origin: "Delhi",
  destination: "Amritsar",
  distance: "450 km",
  duration: "8-9 hours",
  type: "Spiritual",
  highway: "NH 44",
  description: "Journey to Amritsar, the spiritual and cultural heart of Sikhism. Home to the magnificent Golden Temple, this city offers rich history, the Wagah Border ceremony, and authentic Punjabi culture.",
  highlights: [
    "Sacred Golden Temple",
    "Wagah Border ceremony",
    "Jallianwala Bagh history",
    "Rich Punjabi culture",
    "Authentic Punjabi cuisine"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "Golden Temple (Harmandir Sahib)",
      timings: "Open 24 hours",
      entryFee: "Free entry",
      description: "Holiest Sikh shrine"
    },
    {
      name: "Wagah Border",
      timings: "Ceremony at 4:15 PM (winter), 5:15 PM (summer)",
      entryFee: "Free entry",
      description: "India-Pakistan border retreat ceremony"
    },
    {
      name: "Jallianwala Bagh",
      timings: "6:30 AM to 7:30 PM",
      entryFee: "Free entry",
      description: "Historic memorial garden"
    },
    {
      name: "Partition Museum",
      timings: "10:00 AM to 6:00 PM (Closed Mondays)",
      entryFee: "₹20 for Indians",
      description: "Museum on 1947 partition"
    }
  ],
  travelTips: [
    "Visit Golden Temple early morning",
    "Experience community langar",
    "Book Wagah Border seats online",
    "Try Amritsari kulcha and lassi",
    "Cover head at Golden Temple",
    "Shop at Hall Bazaar"
  ]
};

// Detailed route information for Ahmedabad to Udaipur
export const ahmedabadToUdaipurRoute = {
  route: "ahmedabad-to-udaipur",
  origin: "Ahmedabad",
  destination: "Udaipur",
  distance: "260 km",
  duration: "4-5 hours",
  type: "Heritage",
  highway: "NH 48",
  description: "Travel from Gujarat's vibrant commercial capital to Rajasthan's romantic City of Lakes. This scenic journey takes you through the Aravalli hills, connecting two culturally rich cities with magnificent palaces, lakes, and heritage sites.",
  highlights: [
    "Well-maintained NH 48 highway",
    "Scenic Aravalli mountain views",
    "Cultural transition from Gujarat to Rajasthan",
    "City of Lakes destination",
    "Royal Mewar heritage"
  ],
  bestTimeToVisit: "October to March",
  attractions: [
    {
      name: "City Palace",
      timings: "9:30 AM to 5:30 PM",
      entryFee: "₹300 for Indians, ₹600 for foreigners",
      description: "Stunning palace complex overlooking Lake Pichola"
    },
    {
      name: "Lake Pichola",
      timings: "Boat rides 10:00 AM to 5:00 PM",
      entryFee: "₹400-₹1,500 for boat rides",
      description: "Iconic lake with Jag Mandir and Lake Palace"
    },
    {
      name: "Jag Mandir Palace",
      timings: "10:00 AM to 6:00 PM",
      entryFee: "₹350 for Indians, ₹750 for foreigners",
      description: "Beautiful island palace on Lake Pichola"
    },
    {
      name: "Sajjangarh Palace (Monsoon Palace)",
      timings: "9:00 AM to 6:00 PM",
      entryFee: "₹80 for Indians, ₹300 for foreigners",
      description: "Hilltop palace with panoramic city views"
    }
  ],
  travelTips: [
    "Start early morning to reach Udaipur by afternoon",
    "Carry water and snacks for the journey",
    "Best sunset views from Sajjangarh Palace",
    "Book boat rides in advance during peak season",
    "Try traditional Rajasthani thali in Udaipur",
    "Visit lakeside restaurants for romantic dining"
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
