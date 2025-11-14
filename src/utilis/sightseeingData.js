// Sightseeing Tours Data

export const sightseeingTours = {
  delhi: [
    {
      id: 1,
      name: "Delhi Full Day City Tour",
      slug: "delhi-full-day-city-tour",
      shortDescription: "Discover Old and New Delhi's iconic landmarks, from Mughal monuments to modern marvels",
      fullDescription: "Experience the perfect blend of old and new in India's capital city. Visit the majestic Red Fort, explore the bustling lanes of Chandni Chowk, marvel at the architectural wonder of Akshardham Temple, pay respects at India Gate, and discover the spiritual serenity of Lotus Temple. This comprehensive tour covers UNESCO World Heritage Sites and modern architectural marvels.",
      duration: "8-10 hours",
      price: {
        sedan: 2500,
        suv: 3500,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "Red Fort - UNESCO World Heritage Site, Mughal architecture masterpiece",
        "Akshardham Temple - World's largest Hindu temple complex",
        "India Gate - War memorial and iconic landmark",
        "Lotus Temple - Architectural marvel, symbol of peace",
        "Qutub Minar - Tallest brick minaret in the world",
        "Humayun's Tomb - Magnificent Mughal garden tomb"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "08:30 AM", activity: "Red Fort visit", duration: "1.5 hours", description: "Explore UNESCO World Heritage Site and Mughal architecture" },
        { time: "10:00 AM", activity: "Jama Masjid visit", duration: "45 mins", description: "India's largest mosque with stunning architecture" },
        { time: "11:00 AM", activity: "Raj Ghat - Gandhi Memorial", duration: "45 mins" },
        { time: "12:00 PM", activity: "Humayun's Tomb", duration: "1 hour", description: "UNESCO site, precursor to Taj Mahal" },
        { time: "01:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "02:00 PM", activity: "India Gate and surrounding monuments", duration: "1 hour" },
        { time: "03:00 PM", activity: "Lotus Temple visit", duration: "1 hour", description: "Meditate in peaceful surroundings" },
        { time: "04:00 PM", activity: "Qutub Minar complex", duration: "1.5 hours", description: "Explore UNESCO site and Iron Pillar" },
        { time: "05:30 PM", activity: "Akshardham Temple", duration: "2 hours", description: "Evening visit with musical fountain show" },
        { time: "07:30 PM", activity: "Drop off at hotel", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Monument entry tickets (₹1200-1800 per person)",
        "Tour guide (₹1500 extra)",
        "Meals and refreshments",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March",
      difficulty: "Easy",
      category: "Heritage & Culture",
      heroImage: "/images/sightseeing/Delhi_hero_section.jpg",
      heroImagePrompt: "Stunning wide-angle shot of Red Fort (Lal Qila) in Delhi at golden hour, massive red sandstone walls, main gate with tourists, Indian flag flying, dramatic sky, architectural photography, vibrant colors, ultra-detailed, 8k quality",
      images: [
        "/images/sightseeing/Akshardham_Temple.jpg",
        "/images/sightseeing/India_Gate.jpg",
        "/images/sightseeing/Lotus Temple.jpg",
        "/images/sightseeing/Humayun's_Tomb.jpg",
        "/images/sightseeing/Outub_Minar.jpg"
      ],
      additionalImages: [
        "Akshardham Temple at night with illuminated intricate carvings, musical fountain show, reflection in water, grand architecture, HDR photography",
        "India Gate war memorial at sunset with eternal flame, manicured lawns, people gathered, patriotic atmosphere, warm golden light",
        "Lotus Temple (Bahá'í House) exterior with blooming lotus petals design, white marble, blue sky, serene gardens, architectural marvel, symmetrical composition",
        "Humayun's Tomb with Mughal architecture, red sandstone and white marble, Persian-style Charbagh garden, UNESCO World Heritage Site, symmetrical composition",
        "Qutub Minar towering 73 meters high, red sandstone minaret, intricate carvings, Iron Pillar, ancient ruins, UNESCO heritage site, dramatic angle"
      ],
      tips: [
        "Start early to avoid Delhi traffic",
        "Dress modestly for religious sites",
        "Akshardham closed on Mondays",
        "Carry ID proof and water bottle",
        "Best time to visit Lotus Temple is early morning"
      ],
      reviews: { averageRating: 4.7, totalReviews: 3421 },
      coordinates: { latitude: 28.6139, longitude: 77.2090 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ],

  jaipur: [
    {
      id: 2,
      name: "Jaipur Full Day City Tour",
      slug: "jaipur-full-day-city-tour",
      shortDescription: "Explore the Pink City's magnificent forts, palaces, and architectural marvels",
      fullDescription: "Experience the royal grandeur of Jaipur with our comprehensive full-day city tour. Visit the iconic Amber Fort with its stunning mirror work, explore the royal City Palace, marvel at the unique facade of Hawa Mahal, and discover the astronomical wonders at Jantar Mantar. This tour perfectly blends history, culture, and architecture.",
      duration: "8-10 hours",
      price: {
        sedan: 2500,
        suv: 3800,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "Amber Fort - Majestic hilltop fortress with mirror palace",
        "City Palace - Royal residence with museums and courtyards",
        "Hawa Mahal - Iconic 'Palace of Winds' with 953 windows",
        "Jantar Mantar - UNESCO World Heritage astronomical observatory",
        "Local Markets - Experience vibrant bazaars and handicrafts",
        "Jal Mahal - Stunning water palace (photo stop)"
      ],
      itinerary: [
        { time: "09:00 AM", activity: "Pick up from hotel/airport", duration: "30 mins" },
        { time: "09:30 AM", activity: "Amber Fort visit with elephant ride option", duration: "2.5 hours", description: "Explore the magnificent fort, Sheesh Mahal (Mirror Palace), and enjoy panoramic views" },
        { time: "12:00 PM", activity: "Jal Mahal photo stop", duration: "15 mins", description: "Capture stunning photos of the water palace" },
        { time: "12:30 PM", activity: "Lunch break at traditional restaurant", duration: "1 hour" },
        { time: "01:30 PM", activity: "City Palace and Museum", duration: "1.5 hours", description: "Visit royal courtyards, art galleries, and textile museum" },
        { time: "03:00 PM", activity: "Jantar Mantar Observatory", duration: "1 hour", description: "Discover ancient astronomical instruments" },
        { time: "04:00 PM", activity: "Hawa Mahal visit and photography", duration: "45 mins", description: "Explore the iconic facade and interior" },
        { time: "05:00 PM", activity: "Local market shopping (Johari Bazaar/Bapu Bazaar)", duration: "1 hour", description: "Shop for textiles, jewelry, and handicrafts" },
        { time: "06:00 PM", activity: "Drop off at hotel/airport", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced driver with local knowledge",
        "Parking charges and toll taxes",
        "Bottled water during the tour",
        "All applicable taxes"
      ],
      exclusions: [
        "Entry tickets to monuments (approx ₹1000-1500 per person)",
        "Tour guide charges (₹1500 extra if opted)",
        "Lunch and refreshments",
        "Elephant ride at Amber Fort (₹900-1200)",
        "Personal expenses and shopping",
        "Camera fees at monuments"
      ],
      bestTimeToVisit: "October to March",
      difficulty: "Easy",
      category: "Heritage & Culture",
      heroImage: "/images/sightseeing/jaipur_hero_section_image.jpg",
      heroImagePrompt: "Stunning wide-angle hero shot of Hawa Mahal (Palace of Winds) at sunrise in Jaipur, intricate pink sandstone facade with 953 windows, bustling street below with traditional rickshaws, vibrant colors, architectural photography, ultra-detailed, 8k quality",
      images: [
        "/images/sightseeing/amber_fort.jpg",
        "/images/sightseeing/city_palace.jpg",
        "/images/sightseeing/jantar_mantar.jpg",
        "/images/sightseeing/Johari_bazar.jpg",
        "/images/sightseeing/Jal_Mahal.jpg"
      ],
      additionalImages: [
        "Interior of Sheesh Mahal (Mirror Palace) at Amber Fort with intricate mirror work and colorful glass, dramatic lighting creating magical reflections",
        "City Palace courtyard with royal peacock gate, traditional Rajasthani architecture, colorful walls, tourists in background",
        "Jantar Mantar astronomical instruments at sunset, geometric structures casting dramatic shadows, ancient scientific marvel",
        "Vibrant Johari Bazaar market scene with colorful textiles, jewelry shops, local vendors, busy street life in Jaipur",
        "Jal Mahal water palace floating in Man Sagar Lake with mountain backdrop, reflection in water, serene sunset ambiance"
      ],
      tips: [
        "Wear comfortable walking shoes as there's considerable walking",
        "Carry sunscreen and hat for sun protection",
        "Early morning start recommended to avoid crowds and heat",
        "Bargain at local markets - first price is usually negotiable",
        "Photography is restricted in some palace areas - check before clicking"
      ],
      reviews: { averageRating: 4.8, totalReviews: 2847 },
      coordinates: { latitude: 26.9124, longitude: 75.7873 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ],

  agra: [
    {
      id: 3,
      name: "Agra Full Day City Tour",
      slug: "agra-full-day-city-tour",
      shortDescription: "Witness the Taj Mahal, Agra Fort, and Fatehpur Sikri in one comprehensive day",
      fullDescription: "Experience the grandeur of Mughal architecture with visits to three UNESCO World Heritage Sites. Marvel at the Taj Mahal at sunrise, explore the massive Agra Fort, and discover the abandoned city of Fatehpur Sikri. This tour covers the best of Agra's historical monuments and Mughal legacy.",
      duration: "8-10 hours",
      price: {
        sedan: 2200,
        suv: 3500,
        tempoTraveller: 4800,
        currency: "INR"
      },
      highlights: [
        "Taj Mahal - One of Seven Wonders of the World",
        "Agra Fort - Massive red sandstone fortress",
        "Fatehpur Sikri - Abandoned Mughal city",
        "Mehtab Bagh - Sunset view of Taj Mahal",
        "Local marble inlay workshops",
        "Itmad-ud-Daulah - Baby Taj"
      ],
      itinerary: [
        { time: "06:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "06:30 AM", activity: "Taj Mahal sunrise visit", duration: "3 hours", description: "Witness the monument in morning light, explore gardens and mausoleum" },
        { time: "09:30 AM", activity: "Breakfast break", duration: "45 mins" },
        { time: "10:15 AM", activity: "Agra Fort exploration", duration: "2 hours", description: "Visit palaces, halls, and enjoy Taj view from fort" },
        { time: "12:30 PM", activity: "Lunch and marble workshop visit", duration: "1.5 hours" },
        { time: "02:00 PM", activity: "Fatehpur Sikri excursion", duration: "2.5 hours", description: "Explore Buland Darwaza, Jama Masjid, and palaces" },
        { time: "05:00 PM", activity: "Mehtab Bagh sunset view", duration: "1 hour", description: "Taj Mahal sunset photography from across Yamuna" },
        { time: "06:00 PM", activity: "Drop off at hotel", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced driver",
        "Parking and tolls",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Taj Mahal entry (₹1100 for foreigners, ₹50 for Indians)",
        "Agra Fort entry (₹650 for foreigners, ₹50 for Indians)",
        "Tour guide (₹1500 extra)",
        "Meals",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March",
      difficulty: "Easy",
      category: "Heritage & Culture",
      heroImage: "/images/sightseeing/Agra_Hero_section.jpg",
      heroImagePrompt: "Iconic Taj Mahal at sunrise, white marble mausoleum glowing in golden morning light, perfect reflection in front pool, manicured Mughal gardens, cypress trees framing, clear blue sky, breathtaking symmetry, professional architectural photography, 8k ultra-detailed",
      images: [
        "/images/sightseeing/agra_fort.jpg",
        "/images/sightseeing/Fathepur_shikiri.jpg",
        "/images/sightseeing/Mehtab_Bagh.jpg",
        "/images/sightseeing/Diwan_i_kHAS.jpg",
        "/images/sightseeing/agra_fort.jpg"
      ],
      additionalImages: [
        "Agra Fort massive red sandstone walls and gates, Mughal architecture, dramatic sky, tourists exploring, wide-angle shot, historical grandeur",
        "Fatehpur Sikri Buland Darwaza (tallest gateway in world), massive stone archway, intricate carvings, people for scale, majestic perspective",
        "Taj Mahal intricate marble inlay work close-up, precious stones, floral patterns, detailed craftsmanship, macro photography",
        "Mehtab Bagh garden with Taj Mahal view across Yamuna river at sunset, orange sky, serene atmosphere, romantic setting",
        "Diwan-i-Khas (Hall of Private Audience) in Agra Fort, ornate pillars, Mughal architecture details, soft indoor lighting"
      ],
      tips: [
        "Taj Mahal closed on Fridays",
        "Book tickets online to avoid queues",
        "Remove shoes before entering Taj main platform",
        "Fatehpur Sikri requires lots of walking",
        "Carry sunscreen and water"
      ],
      reviews: { averageRating: 4.9, totalReviews: 4523 },
      coordinates: { latitude: 27.1751, longitude: 78.0421 },
      groupSize: "1-15 persons",
      accessibility: "Wheelchair accessible with assistance"
    }
  ],

  chandigarh: [
    {
      id: 4,
      name: "Chandigarh City Tour",
      slug: "chandigarh-city-tour",
      shortDescription: "Explore India's first planned city with modern architecture and beautiful gardens",
      fullDescription: "Discover Chandigarh's unique urban planning by Le Corbusier. Visit the famous Rock Garden, serene Sukhna Lake, beautiful Rose Garden, and modern Capitol Complex. Experience the perfect blend of nature, art, and architecture in this well-planned city.",
      duration: "6-8 hours",
      price: {
        sedan: 2500,
        suv: 3800,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "Rock Garden - Unique sculpture garden from waste materials",
        "Sukhna Lake - Serene artificial lake for boating",
        "Rose Garden - Asia's largest rose garden",
        "Capitol Complex - Le Corbusier's masterpiece",
        "Sector 17 Market - Shopping hub",
        "Pinjore Gardens - Mughal garden nearby"
      ],
      itinerary: [
        { time: "09:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "09:30 AM", activity: "Rock Garden visit", duration: "1.5 hours", description: "Explore unique sculpture garden" },
        { time: "11:00 AM", activity: "Sukhna Lake", duration: "1 hour", description: "Boating and lake walk" },
        { time: "12:00 PM", activity: "Rose Garden", duration: "1 hour" },
        { time: "01:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "02:00 PM", activity: "Capitol Complex photo stop", duration: "45 mins" },
        { time: "03:00 PM", activity: "Sector 17 Market shopping", duration: "1.5 hours" },
        { time: "04:30 PM", activity: "Pinjore Gardens (optional)", duration: "1 hour" },
        { time: "05:30 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Entry fees (₹200-400 total)",
        "Guide (₹1000 extra)",
        "Meals",
        "Boating charges"
      ],
      bestTimeToVisit: "Year-round, best in spring for Rose Garden",
      difficulty: "Easy",
      category: "Modern Architecture & Gardens",
      heroImage: "/images/sightseeing/Chandigarh_hero_section.jpg",
      heroImagePrompt: "Beautiful Rock Garden Chandigarh with unique sculptures made from waste materials, colorful recycled art installations, waterfalls, narrow pathways, artistic creativity, vibrant colors, wide-angle photography, detailed textures",
      images: [
        "/images/sightseeing/sukhana_lake.jpg",
        "/images/sightseeing/capitol_complex.jpeg",
        "/images/sightseeing/Zakir_hUSSAIN_ROSE_Garden.jpg",
        "/images/sightseeing/sukhana_lake.jpg"
      ],
      additionalImages: [
        "Sukhna Lake at sunrise with mirror-like reflection, boats, joggers on promenade, Shivalik hills in background, peaceful morning atmosphere",
        "Capitol Complex Open Hand Monument by Le Corbusier, modern architecture, geometric design, blue sky, minimalist composition",
        "Zakir Hussain Rose Garden in full bloom, thousands of rose varieties, colorful flower beds, manicured lawns, spring photography",
        "Sector 17 Plaza modern shopping complex, fountains, urban landscape, evening lights, people walking, contemporary city life"
      ],
      tips: [
        "Rose Garden best in February-March",
        "Sukhna Lake beautiful at sunrise",
        "Sector 17 market closed on Mondays",
        "Carry comfortable shoes for walking"
      ],
      reviews: { averageRating: 4.5, totalReviews: 1823 },
      coordinates: { latitude: 30.7333, longitude: 76.7794 },
      groupSize: "1-15 persons",
      accessibility: "Fully wheelchair accessible"
    }
  ],

  shimla: [
    {
      id: 5,
      name: "Shimla Kufri Tour",
      slug: "shimla-kufri-tour",
      shortDescription: "Experience the Queen of Hills with colonial architecture, Mall Road, and snow adventures in Kufri",
      fullDescription: "Explore Shimla's colonial charm and natural beauty. Walk the famous Mall Road, visit Jakhoo Temple with panoramic views, experience adventure activities in Kufri, and discover Christ Church. Perfect blend of nature, culture, and adventure in the Himalayas.",
      duration: "8-10 hours",
      price: {
        sedan: 3000,
        suv: 4200,
        tempoTraveller: 6000,
        currency: "INR"
      },
      highlights: [
        "Mall Road - Colonial architecture and shopping",
        "Kufri - Adventure sports and snow activities",
        "Jakhoo Temple - Highest point with Hanuman statue",
        "Christ Church - Neo-Gothic architecture",
        "The Ridge - Scenic views and events",
        "Himalayan views and pine forests"
      ],
      itinerary: [
        { time: "09:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "09:30 AM", activity: "Kufri visit", duration: "3 hours", description: "Horse riding, yak rides, skiing (winter), zoo visit" },
        { time: "12:30 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "01:30 PM", activity: "Jakhoo Temple trek", duration: "1.5 hours", description: "Visit Hanuman temple, feed monkeys, panoramic views" },
        { time: "03:00 PM", activity: "Mall Road and The Ridge", duration: "2 hours", description: "Shopping, cafes, Christ Church visit" },
        { time: "05:00 PM", activity: "Lakkar Bazaar shopping", duration: "1 hour" },
        { time: "06:00 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Experienced hill driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Entry fees (₹300-500)",
        "Adventure activity charges in Kufri",
        "Guide (₹1200 extra)",
        "Meals",
        "Horse/yak rides"
      ],
      bestTimeToVisit: "May-June for pleasant weather, December-February for snow",
      difficulty: "Moderate",
      category: "Hill Station & Adventure",
      heroImage: "/images/sightseeing/shimla_hero_section.jpg",
      heroImagePrompt: "Stunning panoramic view of Shimla town from Jakhoo Temple, colonial buildings nestled in pine-covered hills, dramatic Himalayan ranges in background, golden sunset light, misty valleys, iconic toy train track visible, scenic mountain landscape, HDR photography",
      images: [],
      additionalImages: [
        "Mall Road Shimla at evening with colonial buildings, street lights glowing, tourists strolling, cafes and shops, Victorian architecture, festive atmosphere",
        "Christ Church in snow with neo-Gothic architecture, stained glass windows, snow-covered pine trees, winter wonderland, iconic Shimla landmark",
        "Kufri adventure park with horse riding, snow activities, Himalayan backdrop, tourists enjoying, colorful traditional Himachali attire",
        "Jakhoo Temple towering Hanuman statue (108 feet tall), orange colored, overlooking Shimla valley, devotees, dramatic sky",
        "The Ridge Shimla with open square, Tudor-style library building, mountain views, clear blue sky, people gathering"
      ],
      tips: [
        "Carry woolens even in summer",
        "Mall Road is vehicle-free zone",
        "Monkeys at Jakhoo Temple can be mischievous",
        "Book Kufri activities in advance during peak season",
        "Try local Himachali food"
      ],
      reviews: { averageRating: 4.6, totalReviews: 2156 },
      coordinates: { latitude: 31.1048, longitude: 77.1734 },
      groupSize: "1-15 persons",
      accessibility: "Limited wheelchair access due to hills"
    }
  ],

  manali: [
    {
      id: 6,
      name: "Manali Solang Valley Tour",
      slug: "manali-solang-valley-tour",
      shortDescription: "Adventure-packed day in Himalayas with Solang Valley, Hidimba Temple, and Old Manali",
      fullDescription: "Experience the best of Manali with adventure sports in Solang Valley, spiritual visit to ancient Hidimba Temple, explore Old Manali's hippie culture, and enjoy scenic beauty of Vashisht hot springs. Perfect for adventure seekers and nature lovers.",
      duration: "8-10 hours",
      price: {
        sedan: 3000,
        suv: 4500,
        tempoTraveller: 6000,
        currency: "INR"
      },
      highlights: [
        "Solang Valley - Paragliding, zorbing, skiing",
        "Hidimba Temple - Ancient wooden temple in deodar forest",
        "Old Manali - Cafes, shopping, river views",
        "Vashisht - Hot water springs and temple",
        "Manu Temple - Dedicated to sage Manu",
        "Club House - Adventure activities"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "08:30 AM", activity: "Solang Valley", duration: "3.5 hours", description: "Paragliding, ropeway, zorbing, skiing (winter)" },
        { time: "12:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "01:00 PM", activity: "Hidimba Temple visit", duration: "1 hour", description: "Explore ancient temple in cedar forest" },
        { time: "02:00 PM", activity: "Manu Temple", duration: "30 mins" },
        { time: "02:30 PM", activity: "Old Manali exploration", duration: "1.5 hours", description: "Cafes, shopping, river walk" },
        { time: "04:00 PM", activity: "Vashisht hot springs", duration: "1 hour" },
        { time: "05:00 PM", activity: "Mall Road shopping", duration: "1 hour" },
        { time: "06:00 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Experienced mountain driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Solang Valley activities (₹500-3500 per activity)",
        "Ropeway charges (₹700-900)",
        "Entry fees",
        "Guide (₹1500 extra)",
        "Meals"
      ],
      bestTimeToVisit: "April-June for adventure sports, December-February for snow",
      difficulty: "Moderate",
      category: "Adventure & Nature",
      heroImage: "/images/sightseeing/manali_hero_section.jpg",
      heroImagePrompt: "Spectacular aerial view of Solang Valley Manali with snow-capped mountains, paragliders in sky, colorful parachutes, lush green meadows (summer) or white snow (winter), adventure activities happening below, dramatic Himalayan landscape, action photography, vibrant colors",
      images: [],
      additionalImages: [
        "Hidimba Temple ancient wooden architecture surrounded by tall deodar cedar trees, pagoda-style roof, intricate carvings, forest setting, mystical atmosphere",
        "Paragliding over Solang Valley with stunning mountain views, adventure seekers in air, valley below, snow peaks, adrenaline rush moment",
        "Old Manali riverside cafes with mountain backdrop, bohemian vibe, travelers relaxing, wooden structures, peaceful Beas River flowing",
        "Vashisht hot water springs natural pool, stone architecture, steam rising, temple in background, therapeutic bathing scene",
        "Rohtang Pass snow landscape with tourists playing in snow, prayer flags, winding mountain roads, adventure vehicles, breathtaking panorama"
      ],
      tips: [
        "Book Solang activities early morning",
        "Carry extra woolens for Solang Valley",
        "Rohtang Pass permit required (if visiting)",
        "Old Manali cafes serve great food",
        "Vashisht springs separate timings for men and women"
      ],
      reviews: { averageRating: 4.8, totalReviews: 3241 },
      coordinates: { latitude: 32.2396, longitude: 77.1887 },
      groupSize: "1-15 persons",
      accessibility: "Not wheelchair accessible"
    }
  ],

  haridwar: [
    {
      id: 7,
      name: "Haridwar Rishikesh Spiritual Tour",
      slug: "haridwar-rishikesh-spiritual-tour",
      shortDescription: "Divine experience covering Ganga Aarti, ancient temples, and yoga capital",
      fullDescription: "Immerse yourself in spirituality with visits to sacred ghats of Haridwar and ashrams of Rishikesh. Witness the mesmerizing Ganga Aarti, visit Mansa Devi Temple via cable car, explore Beatles Ashram, and experience adventure at Laxman Jhula. Perfect spiritual and adventure combination.",
      duration: "10-12 hours",
      price: {
        sedan: 2200,
        suv: 3500,
        tempoTraveller: 4800,
        currency: "INR"
      },
      highlights: [
        "Har Ki Pauri - Ganga Aarti at sacred ghat",
        "Mansa Devi Temple - Cable car ride and panoramic views",
        "Laxman Jhula - Iconic suspension bridge",
        "Beatles Ashram - Graffiti art and meditation",
        "Triveni Ghat - River rafting starting point",
        "Parmarth Niketan - Famous ashram"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "07:30 AM", activity: "Har Ki Pauri visit and holy dip", duration: "1.5 hours" },
        { time: "09:00 AM", activity: "Mansa Devi Temple cable car", duration: "1.5 hours" },
        { time: "10:30 AM", activity: "Drive to Rishikesh", duration: "45 mins" },
        { time: "11:15 AM", activity: "Laxman Jhula and Ram Jhula", duration: "1.5 hours" },
        { time: "12:45 PM", activity: "Lunch near river", duration: "1 hour" },
        { time: "01:45 PM", activity: "Beatles Ashram visit", duration: "1 hour" },
        { time: "02:45 PM", activity: "Parmarth Niketan", duration: "1 hour" },
        { time: "03:45 PM", activity: "Cafe hopping and shopping", duration: "1.5 hours" },
        { time: "05:15 PM", activity: "Return to Haridwar for Ganga Aarti", duration: "1 hour" },
        { time: "06:30 PM", activity: "Witness Ganga Aarti at Har Ki Pauri", duration: "1 hour" },
        { time: "07:30 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Cable car (₹200-250)",
        "Beatles Ashram entry (₹150)",
        "Guide (₹1200 extra)",
        "Meals",
        "Offerings for Ganga Aarti"
      ],
      bestTimeToVisit: "September-April",
      difficulty: "Easy",
      category: "Spiritual & Religious",
      heroImage: "/images/sightseeing/haridwar_hero_section.jpg",
      heroImagePrompt: "Magical evening Ganga Aarti at Har Ki Pauri Haridwar, hundreds of oil lamps floating on Ganges, priests performing ritual with fire, devotees gathered, golden light reflections on water, spiritual atmosphere, long exposure photography, divine ambiance, HDR",
      images: [],
      additionalImages: [
        "Laxman Jhula suspension bridge over Ganga river with mountains in background, pedestrians crossing, turquoise water, iconic Rishikesh landmark",
        "Mansa Devi Temple on hilltop with cable car, panoramic view of Haridwar city and Ganges, colorful temple architecture, devotees",
        "Beatles Ashram abandoned buildings with vibrant graffiti art, meditation cells, overgrown vegetation, artistic decay, bohemian vibe",
        "Parmarth Niketan ashram riverside view, yoga practitioners on ghats, sunset over Ganga, peaceful meditation scene, spiritual retreat",
        "Rishikesh cafes with Himalayan views, Israeli and international cuisine, travelers gathering, mountain town vibe, cultural fusion"
      ],
      tips: [
        "Ganga Aarti timing varies with season (sunset)",
        "Dress modestly at temples",
        "Remove leather items before temple entry",
        "Try river rafting if adventurous (extra)",
        "Rishikesh is alcohol and non-veg free"
      ],
      reviews: { averageRating: 4.9, totalReviews: 2876 },
      coordinates: { latitude: 29.9457, longitude: 78.1642 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ],

  rishikesh: [
    {
      id: 8,
      name: "Rishikesh Adventure & Spiritual Tour",
      slug: "rishikesh-adventure-spiritual-tour",
      shortDescription: "Perfect blend of river rafting, bungee jumping, and spiritual ashram visits",
      fullDescription: "Experience both sides of Rishikesh - adventure capital and yoga hub. Optional river rafting, visit famous Beatles Ashram, explore both Jhoola bridges, attend evening Ganga Aarti, and discover cafes culture. Ideal for young travelers seeking thrills and spirituality.",
      duration: "8-10 hours",
      price: {
        sedan: 2500,
        suv: 3800,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "River Rafting - Thrilling rapids experience (optional)",
        "Bungee Jumping - India's highest (optional)",
        "Laxman Jhula & Ram Jhula - Iconic bridges",
        "Beatles Ashram - Graffiti and meditation",
        "Neelkanth Mahadev - Shiva temple in hills",
        "Ganga Aarti - Evening spiritual ceremony"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "08:30 AM", activity: "River Rafting (optional, 16 km)", duration: "2.5 hours", description: "Shivpuri to Rishikesh rapids" },
        { time: "11:00 AM", activity: "Breakfast/Rest", duration: "1 hour" },
        { time: "12:00 PM", activity: "Laxman Jhula area exploration", duration: "1 hour" },
        { time: "01:00 PM", activity: "Lunch at riverside cafe", duration: "1 hour" },
        { time: "02:00 PM", activity: "Beatles Ashram visit", duration: "1 hour" },
        { time: "03:00 PM", activity: "Neelkanth Mahadev Temple", duration: "2 hours", description: "Mountain temple drive" },
        { time: "05:00 PM", activity: "Ram Jhula and shopping", duration: "1 hour" },
        { time: "06:00 PM", activity: "Triveni Ghat Ganga Aarti", duration: "1 hour" },
        { time: "07:00 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "River rafting (₹500-1500 depending on distance)",
        "Bungee jumping (₹3500)",
        "Beatles Ashram entry (₹150)",
        "Guide (₹1200 extra)",
        "Meals and activities"
      ],
      bestTimeToVisit: "September-November, March-May",
      difficulty: "Moderate to Challenging",
      category: "Adventure & Spiritual",
      heroImage: "/images/sightseeing/rishikesh_hero_section.jpg",
      heroImagePrompt: "Adrenaline-packed river rafting action shot in Ganga rapids Rishikesh, raft full of adventurers paddling through white water, splashes everywhere, mountains and forests on riverside, dynamic action photography, bright sunny day, excitement captured",
      images: [],
      additionalImages: [
        "Bungee jumping platform India's highest, jumper mid-air with mountain valley below, adventure sports, thrilling moment, safety gear visible",
        "Beatles Ashram graffiti walls with psychedelic art, colorful murals, abandoned meditation cells, artistic expression, unique cultural site",
        "Laxman Jhula at blue hour with lights reflecting in Ganga, pedestrians crossing, temples lit up, magical evening atmosphere",
        "Neelkanth Mahadev Temple in lush mountains, devotees, Shiva lingam, peaceful forest setting, spiritual energy",
        "Rishikesh riverside cafes, travelers relaxing, mountain views, cultural melting pot, backpacker vibe, sunset colors"
      ],
      tips: [
        "Book rafting and bungee in advance",
        "Carry quick-dry clothes for rafting",
        "Minimum age for rafting is 12 years",
        "No alcohol or non-veg in Rishikesh",
        "Waterproof bag for valuables during rafting"
      ],
      reviews: { averageRating: 4.7, totalReviews: 3142 },
      coordinates: { latitude: 30.0869, longitude: 78.2676 },
      groupSize: "1-15 persons",
      accessibility: "Not accessible for wheelchair users"
    }
  ],

  dehradun: [
    {
      id: 9,
      name: "Dehradun Mussoorie Tour",
      slug: "dehradun-mussoorie-tour",
      shortDescription: "Explore the Queen of Hills and Doon Valley's scenic beauty",
      fullDescription: "Discover Dehradun's colonial heritage and Mussoorie's hill station charm. Visit Robber's Cave, Forest Research Institute, drive to Mussoorie for Mall Road, Gun Hill, Kempty Falls. Experience panoramic Himalayan views and pleasant mountain weather.",
      duration: "10-12 hours",
      price: {
        sedan: 2500,
        suv: 3800,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "Mussoorie Mall Road - Colonial charm shopping",
        "Gun Hill - Ropeway and valley views",
        "Kempty Falls - Refreshing waterfall",
        "Robber's Cave - Natural cave formation",
        "FRI - Impressive colonial architecture",
        "Lal Tibba - Highest point in Mussoorie"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "07:30 AM", activity: "Robber's Cave (Gucchu Pani)", duration: "1 hour" },
        { time: "08:30 AM", activity: "Forest Research Institute", duration: "1 hour" },
        { time: "09:30 AM", activity: "Drive to Mussoorie", duration: "1.5 hours" },
        { time: "11:00 AM", activity: "Gun Hill ropeway and views", duration: "1.5 hours" },
        { time: "12:30 PM", activity: "Lunch on Mall Road", duration: "1 hour" },
        { time: "01:30 PM", activity: "Mall Road shopping and cafes", duration: "2 hours" },
        { time: "03:30 PM", activity: "Kempty Falls visit", duration: "1.5 hours" },
        { time: "05:00 PM", activity: "Lal Tibba viewpoint", duration: "45 mins" },
        { time: "06:00 PM", activity: "Return to Dehradun", duration: "1.5 hours" },
        { time: "07:30 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Mountain driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Gun Hill ropeway (₹200-300)",
        "Entry fees",
        "Guide (₹1200 extra)",
        "Meals",
        "Personal expenses"
      ],
      bestTimeToVisit: "March-June, September-November",
      difficulty: "Easy",
      category: "Hill Station",
      heroImage: "/images/sightseeing/dehradun_hero_section.jpg",
      heroImagePrompt: "Beautiful panoramic view of Mussoorie Mall Road at sunset, colonial buildings, cafes and shops lit up, tourists strolling, mountain town atmosphere, Doon Valley visible below, string lights glowing, Queen of Hills landscape, warm evening ambiance",
      images: [],
      additionalImages: [
        "Gun Hill Mussoorie top viewpoint with telescope, Himalayan snow peaks visible, ropeway cable cars, tourists enjoying, dramatic mountain scenery",
        "Kempty Falls cascading water with tourists bathing and enjoying, lush green surroundings, multi-tiered waterfall, popular tourist spot",
        "Forest Research Institute Dehradun colonial architecture, Greco-Roman style building, red brick structure, sprawling lawns, impressive facade",
        "Robber's Cave natural rock formation with stream flowing through, people wading in water, cool cave atmosphere, geological wonder",
        "Lal Tibba highest point with snow-capped Himalayan range view, prayer flags, viewing binoculars, panoramic landscape"
      ],
      tips: [
        "Mussoorie can be crowded on weekends",
        "Carry light jacket even in summer",
        "Mall Road parking is far, prepare for walk",
        "Kempty Falls best avoided during monsoon",
        "Try local Maggi at mountain stalls"
      ],
      reviews: { averageRating: 4.4, totalReviews: 1745 },
      coordinates: { latitude: 30.3165, longitude: 78.0322 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ],

  amritsar: [
    {
      id: 10,
      name: "Amritsar Golden Temple & Wagah Border Tour",
      slug: "amritsar-golden-temple-wagah-border-tour",
      shortDescription: "Spiritual Golden Temple visit and patriotic Wagah Border ceremony",
      fullDescription: "Experience the spiritual heart of Sikhism at Golden Temple, witness the energetic Wagah Border ceremony, visit Jallianwala Bagh memorial, and explore the bustling streets of Amritsar. Includes langar (community kitchen) meal and patriotic ceremony.",
      duration: "8-10 hours",
      price: {
        sedan: 2500,
        suv: 3800,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "Golden Temple - Harmandir Sahib spiritual experience",
        "Wagah Border - Indo-Pak border ceremony",
        "Jallianwala Bagh - Freedom struggle memorial",
        "Partition Museum - Emotional historical journey",
        "Langar - Community kitchen meal",
        "Local Kulcha and Lassi tasting"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "08:30 AM", activity: "Golden Temple visit and Langar", duration: "3 hours", description: "Spiritual walk, sarovar dip, langar meal" },
        { time: "11:30 AM", activity: "Jallianwala Bagh", duration: "1 hour" },
        { time: "12:30 PM", activity: "Lunch (Kulcha, Lassi)", duration: "1 hour" },
        { time: "01:30 PM", activity: "Partition Museum visit", duration: "1 hour" },
        { time: "02:30 PM", activity: "Free time/shopping", duration: "1 hour" },
        { time: "03:30 PM", activity: "Drive to Wagah Border", duration: "45 mins" },
        { time: "04:15 PM", activity: "Wagah Border ceremony (4-5 PM)", duration: "2 hours", description: "Patriotic atmosphere, flag lowering ceremony" },
        { time: "06:15 PM", activity: "Return to Amritsar", duration: "45 mins" },
        { time: "07:00 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Entry fees (mostly free except museum ₹10-20)",
        "Guide (₹1000 extra)",
        "Meals (except langar)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October-March",
      difficulty: "Easy",
      category: "Spiritual & Patriotic",
      heroImage: "/images/sightseeing/amritsar_hero_section.jpg",
      heroImagePrompt: "Stunning Golden Temple Amritsar (Harmandir Sahib) illuminated at night, golden dome reflecting in sacred Amrit Sarovar pool, pilgrims walking on white marble causeway, spiritual ambiance, perfect symmetry, long exposure photography, divine golden glow, 8k quality",
      images: [],
      additionalImages: [
        "Wagah Border ceremony with BSF soldiers in ceremonial dress performing high-kicks, crowds cheering with Indian flags, patriotic atmosphere, sunset timing, energetic scene",
        "Jallianwala Bagh memorial with bullet marks on walls, narrow entrance, martyrs' well, eternal flame, emotional historical site, solemn atmosphere",
        "Golden Temple daytime view with pilgrims bathing in Amrit Sarovar, marble walkways, golden architecture, Sikh devotees, spiritual cleansing",
        "Langar hall Golden Temple with volunteers serving free food, large community kitchen, people sitting in rows, Sikh tradition of service",
        "Partition Museum displays with vintage photographs, emotional artifacts, personal belongings, historical documentation, moving experience"
      ],
      tips: [
        "Cover head at Golden Temple (scarves available)",
        "Remove shoes and wash feet before entering",
        "Reach Wagah Border by 3:30 PM for good seats",
        "Langar is free but donations welcome",
        "No tobacco/alcohol near Golden Temple",
        "Wagah ceremony cancelled during bad weather"
      ],
      reviews: { averageRating: 4.9, totalReviews: 4234 },
      coordinates: { latitude: 31.6200, longitude: 74.8765 },
      groupSize: "1-15 persons",
      accessibility: "Golden Temple fully wheelchair accessible"
    }
  ],

  jodhpur: [
    {
      id: 11,
      name: "Jodhpur Blue City Tour",
      slug: "jodhpur-blue-city-tour",
      shortDescription: "Explore the majestic Mehrangarh Fort and Blue City's vibrant streets",
      fullDescription: "Discover Jodhpur's royal heritage with visits to the imposing Mehrangarh Fort, elegant Jaswant Thada, and luxury Umaid Bhawan Palace. Walk through blue-painted old city lanes, visit bustling Clock Tower market, and enjoy panoramic desert views.",
      duration: "7-9 hours",
      price: {
        sedan: 2800,
        suv: 3800,
        tempoTraveller: 5500,
        currency: "INR"
      },
      highlights: [
        "Mehrangarh Fort - Magnificent hilltop fortress",
        "Jaswant Thada - White marble memorial",
        "Umaid Bhawan Palace - Luxury heritage hotel",
        "Blue City - Iconic blue-painted houses",
        "Clock Tower - Bustling Sardar Market",
        "Mandore Gardens - Ancient cenotaphs"
      ],
      itinerary: [
        { time: "09:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "09:30 AM", activity: "Mehrangarh Fort visit", duration: "2.5 hours", description: "Explore palaces, museum, cannons, enjoy views" },
        { time: "12:00 PM", activity: "Jaswant Thada", duration: "45 mins" },
        { time: "12:45 PM", activity: "Lunch at rooftop restaurant", duration: "1 hour" },
        { time: "01:45 PM", activity: "Blue City walking tour", duration: "1.5 hours", description: "Navigate narrow blue lanes, photography" },
        { time: "03:15 PM", activity: "Umaid Bhawan Palace (exterior + museum)", duration: "1 hour" },
        { time: "04:15 PM", activity: "Clock Tower and Sardar Market", duration: "1.5 hours", description: "Shopping for textiles, spices, handicrafts" },
        { time: "05:45 PM", activity: "Mandore Gardens (optional)", duration: "45 mins" },
        { time: "06:30 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Mehrangarh Fort entry (₹600 for foreigners, ₹100 for Indians)",
        "Umaid Bhawan museum (₹100)",
        "Guide (₹1500 extra)",
        "Meals",
        "Personal expenses"
      ],
      bestTimeToVisit: "October-March",
      difficulty: "Moderate",
      category: "Heritage & Culture",
      heroImage: "/images/sightseeing/jodhpur_hero_section.jpg",
      heroImagePrompt: "Breathtaking view of Mehrangarh Fort towering over Jodhpur Blue City, massive red sandstone fortress walls on hilltop, hundreds of blue-painted houses below, golden sunset light, dramatic desert landscape, architectural marvel, ultra-wide angle, HDR photography",
      images: [],
      additionalImages: [
        "Blue City Jodhpur aerial view with blue-painted houses, narrow winding streets, Mehrangarh Fort looming above, unique urban landscape, vibrant blue color",
        "Jaswant Thada white marble cenotaph with intricate lattice work, serene setting, lake reflection, royal memorial, peaceful atmosphere",
        "Mehrangarh Fort interior courtyard with colorful stained glass windows, ornate Rajput palaces, intricate carvings, royal grandeur",
        "Clock Tower Jodhpur bustling Sardar Market with spices, textiles, vegetables, busy street life, colorful traditional Rajasthani culture",
        "Umaid Bhawan Palace exterior art deco architecture, sandstone building, luxury heritage hotel, manicured lawns, royal splendor"
      ],
      tips: [
        "Fort has steep climbs, wear comfortable shoes",
        "Blue City best explored in morning light",
        "Bargain at Sardar Market",
        "Try Makhaniya Lassi near Clock Tower",
        "Audio guide recommended at Mehrangarh Fort"
      ],
      reviews: { averageRating: 4.7, totalReviews: 2341 },
      coordinates: { latitude: 26.2967, longitude: 73.0187 },
      groupSize: "1-15 persons",
      accessibility: "Limited wheelchair access in old city"
    }
  ],

  udaipur: [
    {
      id: 12,
      name: "Udaipur City of Lakes Tour",
      slug: "udaipur-city-of-lakes-tour",
      shortDescription: "Romantic tour of palaces, lakes, and royal heritage",
      fullDescription: "Experience Udaipur's romantic charm with visits to City Palace, boat ride on Lake Pichola, Jagdish Temple, Saheliyon Ki Bari garden, and sunset at Fateh Sagar Lake. Explore the Venice of the East with its lakeside palaces and cultural heritage.",
      duration: "8-10 hours",
      price: {
        sedan: 2800,
        suv: 3800,
        tempoTraveller: 5500,
        currency: "INR"
      },
      highlights: [
        "City Palace - Largest royal complex in Rajasthan",
        "Lake Pichola - Boat ride to Jag Mandir",
        "Jagdish Temple - Indo-Aryan architecture",
        "Saheliyon Ki Bari - Garden of Maidens",
        "Fateh Sagar Lake - Sunset views",
        "Bagore Ki Haveli - Cultural evening show"
      ],
      itinerary: [
        { time: "09:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "09:30 AM", activity: "City Palace complex", duration: "2.5 hours", description: "Museums, courtyards, lake views" },
        { time: "12:00 PM", activity: "Jagdish Temple visit", duration: "30 mins" },
        { time: "12:30 PM", activity: "Lunch at lake-view restaurant", duration: "1 hour" },
        { time: "01:30 PM", activity: "Lake Pichola boat ride", duration: "1.5 hours", description: "Visit Jag Mandir island palace" },
        { time: "03:00 PM", activity: "Saheliyon Ki Bari", duration: "45 mins" },
        { time: "03:45 PM", activity: "Fateh Sagar Lake", duration: "1 hour", description: "Lakeside walk, boat ride" },
        { time: "04:45 PM", activity: "Monsoon Palace drive (photo stop)", duration: "1 hour" },
        { time: "05:45 PM", activity: "Bagore Ki Haveli museum", duration: "1 hour" },
        { time: "06:45 PM", activity: "Optional evening cultural show", duration: "1 hour" },
        { time: "07:45 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "City Palace entry (₹300 for Indians, ₹600 for foreigners)",
        "Boat ride (₹400-1000 depending on type)",
        "Cultural show (₹500)",
        "Guide (₹1500 extra)",
        "Meals"
      ],
      bestTimeToVisit: "October-March",
      difficulty: "Easy",
      category: "Heritage & Romance",
      heroImage: "/images/sightseeing/udaipur_hero_section.jpg",
      heroImagePrompt: "Magical evening view of City Palace Udaipur and Lake Pichola, white palace complex illuminated, Jag Mandir island palace lit up, Lake Palace hotel, reflections in calm water, colorful sunset sky, romantic atmosphere, long exposure, dreamy landscape, 8k ultra-detailed",
      images: [],
      additionalImages: [
        "City Palace interior with colorful glass mosaic peacock courtyard (Mor Chowk), intricate mirror work, vibrant Rajasthani art, royal opulence",
        "Lake Pichola boat ride view with City Palace on shore, Aravalli hills backdrop, traditional wooden boat, romantic sunset, serene waters",
        "Jag Mandir island palace white marble building on Lake Pichola, domed structures, gardens, tourist boat approaching, scenic island",
        "Saheliyon Ki Bari fountains and pools, lotus pool, marble elephants, lush gardens, maidens' garden, peaceful retreat",
        "Fateh Sagar Lake with Nehru Park island, tourist boats, mountain backdrop, ropeway visible, popular leisure spot, azure waters"
      ],
      tips: [
        "Book boat ride in advance during peak season",
        "City Palace opens at 9:30 AM",
        "Evening cultural show timings 7-8 PM",
        "Lake Palace can only be visited if staying there",
        "Monsoon Palace sunset views are spectacular"
      ],
      reviews: { averageRating: 4.8, totalReviews: 3156 },
      coordinates: { latitude: 24.5854, longitude: 73.7125 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ],

  ayodhya: [
    {
      id: 13,
      name: "Ayodhya Spiritual Tour",
      slug: "ayodhya-spiritual-tour",
      shortDescription: "Divine journey through Lord Ram's birthplace and sacred temples",
      fullDescription: "Embark on a spiritual journey to Ayodhya, the birthplace of Lord Rama. Visit the new Ram Mandir, sacred Saryu River ghats, Hanuman Garhi, Kanak Bhawan, and other important temples. Experience the religious significance and cultural heritage of this ancient holy city.",
      duration: "6-8 hours",
      price: {
        sedan: 2500,
        suv: 3800,
        tempoTraveller: 5000,
        currency: "INR"
      },
      highlights: [
        "Ram Janmabhoomi - New Ram Mandir",
        "Hanuman Garhi - 70 steps fortress temple",
        "Kanak Bhawan - Ram-Sita temple with gold crowns",
        "Saryu River Aarti - Evening ceremony",
        "Dashrath Mahal - Lord Ram's ancestral palace",
        "Multiple sacred temples and ghats"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "08:30 AM", activity: "Ram Janmabhoomi temple complex", duration: "2.5 hours", description: "Darshan at new temple, security check required" },
        { time: "11:00 AM", activity: "Hanuman Garhi", duration: "1 hour", description: "Climb 70 steps to fortress temple" },
        { time: "12:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "01:00 PM", activity: "Kanak Bhawan", duration: "45 mins" },
        { time: "01:45 PM", activity: "Dashrath Mahal and Sita ki Rasoi", duration: "1 hour" },
        { time: "02:45 PM", activity: "Other temples (Nageshwarnath, etc)", duration: "1 hour" },
        { time: "03:45 PM", activity: "Ramkot and ghat visit", duration: "45 mins" },
        { time: "04:30 PM", activity: "Free time/shopping", duration: "1 hour" },
        { time: "05:30 PM", activity: "Saryu Aarti attendance", duration: "1 hour" },
        { time: "06:30 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Temple offerings",
        "Guide (₹1000 extra)",
        "Meals",
        "Personal expenses",
        "Donation at temples"
      ],
      bestTimeToVisit: "October-March",
      difficulty: "Easy to Moderate",
      category: "Spiritual & Religious",
      heroImage: "/images/sightseeing/ayodhya_hero_section.jpg",
      heroImagePrompt: "Grand aerial view of new Ram Mandir Ayodhya, magnificent temple architecture with multiple shikhars (spires), pink sandstone construction, thousands of devotees, Saryu River in background, holy city landscape, divine atmosphere, architectural grandeur, golden hour lighting, 8k resolution",
      images: [],
      additionalImages: [
        "Hanuman Garhi fortress temple with orange flag, devotees climbing 70 steps, sunset lighting, powerful Hanuman deity, spiritual energy",
        "Saryu River ghat evening Aarti with oil lamps floating, priests performing ritual, devotees gathered, holy Saryu flowing, divine ceremony",
        "Kanak Bhawan temple with golden crowns, Ram and Sita idols, ornate decorations, devotees offering prayers, intimate darshan",
        "Ram Janmabhoomi temple complex interior with devotees, security arrangements, new architecture, spiritual gathering, pilgrimage site",
        "Ayodhya skyline with temples and ghats along Saryu River, sunset reflection, ancient holy city, spiritual destination panorama"
      ],
      tips: [
        "Security is strict at Ram Janmabhoomi, carry valid ID",
        "No phones/cameras inside Ram temple",
        "Dress modestly, cover shoulders and knees",
        "Remove shoes at temple entrance",
        "Aarti timing varies, check locally",
        "Book accommodation in advance during festive seasons"
      ],
      reviews: { averageRating: 4.8, totalReviews: 2734 },
      coordinates: { latitude: 26.7922, longitude: 82.1998 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ],

  ahmedabad: [
    {
      id: 14,
      name: "Ahmedabad Heritage & Modern City Tour",
      slug: "ahmedabad-heritage-modern-city-tour",
      shortDescription: "Explore UNESCO heritage city with Sabarmati Ashram, mosques, and modern attractions",
      fullDescription: "Discover Ahmedabad's rich heritage from Jama Masjid to Sabarmati Ashram. Visit the stunning Adalaj Stepwell, explore old city pols (neighborhoods), experience Kankaria Lake, and see modern architectural marvels. Perfect blend of history, spirituality, and modernity.",
      duration: "8-10 hours",
      price: {
        sedan: 2800,
        suv: 3800,
        tempoTraveller: 5500,
        currency: "INR"
      },
      highlights: [
        "Sabarmati Ashram - Gandhi's residence",
        "Jama Masjid - Indo-Islamic architecture",
        "Adalaj Stepwell - Architectural wonder",
        "Sidi Saiyyed Mosque - Jali work masterpiece",
        "Kankaria Lake - Entertainment hub",
        "Old City Heritage Walk - Pols and havelis"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "08:30 AM", activity: "Sabarmati Ashram", duration: "1.5 hours", description: "Gandhi museum, Hriday Kunj, spinning wheels" },
        { time: "10:00 AM", activity: "Jama Masjid visit", duration: "45 mins" },
        { time: "10:45 AM", activity: "Old City heritage walk", duration: "1.5 hours", description: "Pols, havelis, traditional houses" },
        { time: "12:15 PM", activity: "Sidi Saiyyed Mosque", duration: "30 mins", description: "Famous tree of life jali" },
        { time: "12:45 PM", activity: "Gujarati thali lunch", duration: "1 hour" },
        { time: "01:45 PM", activity: "Adalaj Stepwell", duration: "1 hour", description: "5-story stepwell with intricate carvings" },
        { time: "02:45 PM", activity: "Akshardham Temple Gandhinagar", duration: "2 hours", description: "Modern temple complex" },
        { time: "04:45 PM", activity: "Kankaria Lake", duration: "1.5 hours", description: "Toy train, zoo, balloon safari" },
        { time: "06:15 PM", activity: "Manek Chowk street food", duration: "1 hour" },
        { time: "07:15 PM", activity: "Drop off", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver",
        "Parking and tolls",
        "Water",
        "Taxes"
      ],
      exclusions: [
        "Entry fees (₹300-500 total)",
        "Kankaria Lake activities (₹50-200 per activity)",
        "Guide (₹1500 extra)",
        "Meals (except thali)",
        "Personal expenses"
      ],
      bestTimeToVisit: "November-February",
      difficulty: "Easy",
      category: "Heritage & Modern",
      heroImage: "/images/sightseeing/ahmedabad_hero_section.jpg",
      heroImagePrompt: "Stunning Adalaj Stepwell aerial view showing 5-story octagonal structure, intricate Indo-Islamic carvings, geometric patterns, people descending steps, architectural marvel, natural lighting from above, detailed stonework, symmetrical composition, HDR photography, 8k quality",
      images: [],
      additionalImages: [
        "Sabarmati Ashram Gandhi's living quarters (Hriday Kunj), simple room with spinning wheel, historical artifacts, peaceful courtyard, freedom struggle memorabilia",
        "Sidi Saiyyed Mosque famous Tree of Life jali window, intricate stone lattice work, natural light filtering through, architectural masterpiece, delicate carving",
        "Jama Masjid Ahmedabad yellow sandstone Indo-Saracenic architecture, 260 pillars, courtyard with ablution pool, morning prayers, peaceful atmosphere",
        "Kankaria Lake circular lake with attractions, toy train, hot air balloon, evening lights, families enjoying, urban entertainment hub",
        "Old Ahmedabad pol (traditional neighborhood) narrow lanes, wooden havelis, traditional Gujarat architecture, local life, heritage area, cultural preservation"
      ],
      tips: [
        "Old city best explored in morning to avoid heat",
        "Try authentic Gujarati thali",
        "Manek Chowk transforms to street food hub at night",
        "Stepwell can be hot, visit early or late",
        "Heritage walk requires moderate walking",
        "Ahmedabad is vegetarian city"
      ],
      reviews: { averageRating: 4.6, totalReviews: 1923 },
      coordinates: { latitude: 23.0225, longitude: 72.5714 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    }
  ]
};

// Get all tours as a flat array
export const getAllTours = () => {
  const tours = [];
  Object.keys(sightseeingTours).forEach(city => {
    tours.push(...sightseeingTours[city]);
  });
  return tours;
};

// Get tour by slug
export const getTourBySlug = (slug) => {
  const allTours = getAllTours();
  return allTours.find(tour => tour.slug === slug);
};

// Get tours by category
export const getToursByCategory = (category) => {
  const allTours = getAllTours();
  return allTours.filter(tour => tour.category === category);
};

// Get tours by city
export const getToursByCity = (city) => {
  return sightseeingTours[city.toLowerCase()] || [];
};

// Get cities with sightseeing tours
export const getCitiesWithTours = () => {
  return Object.keys(sightseeingTours);
};

// Featured tours for homepage
export const featuredTours = [
  "jaipur-full-day-city-tour",
  "delhi-full-day-city-tour",
  "agra-full-day-city-tour",
  "amritsar-golden-temple-wagah-border-tour"
];

// Tour categories
export const tourCategories = [
  "Heritage & Culture",
  "Spiritual & Religious",
  "Adventure & Nature",
  "Hill Station",
  "Modern Architecture & Gardens",
  "Heritage & Romance"
];
