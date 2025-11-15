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
    },

    {
      id: 15,
      name: "Delhi to Nainital 2 Days Tour",
      slug: "delhi-to-nainital-2-days",
      shortDescription: "Explore the Lake District of India with scenic Naini Lake, snow views, and hill station charm",
      fullDescription: "Escape to the picturesque hill station of Nainital, nestled in the Kumaon foothills of the Himalayas. Enjoy boating on Naini Lake, visit viewpoints like Naina Peak and Snow View, explore Mall Road shopping, and discover nearby attractions like Bhimtal and Naukuchiatal. Perfect weekend getaway from Delhi with pleasant weather and stunning mountain scenery.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9000,
        suv: 12000,
        tempoTraveller: 17000,
        currency: "INR"
      },
      highlights: [
        "Naini Lake - Boating in pear-shaped lake",
        "Naina Devi Temple - Shakti Peetha on lake shore",
        "Mall Road - Shopping and cafes",
        "Snow View Point - Cable car ride with Himalayan views",
        "Naina Peak - Highest point trekking",
        "Bhimtal & Naukuchiatal - Serene nearby lakes"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pickup from Delhi", duration: "7-8 hours drive", description: "Scenic drive through Haldwani to Nainital" },
        { time: "Day 1 - 02:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 03:30 PM", activity: "Naini Lake boating", duration: "1.5 hours", description: "Paddle or row boat in scenic lake" },
        { time: "Day 1 - 05:00 PM", activity: "Mall Road evening walk", duration: "2 hours", description: "Shopping, cafes, and street food" },
        { time: "Day 1 - 07:00 PM", activity: "Dinner and overnight stay", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast and checkout", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Snow View Point cable car", duration: "1.5 hours", description: "Aerial ropeway ride and mountain views" },
        { time: "Day 2 - 10:30 AM", activity: "Naina Devi Temple", duration: "45 mins" },
        { time: "Day 2 - 11:30 AM", activity: "Bhimtal and Naukuchiatal lakes", duration: "2 hours", description: "Visit nearby scenic lakes" },
        { time: "Day 2 - 02:00 PM", activity: "Lunch and return journey to Delhi", duration: "7-8 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle (Sedan/SUV/Tempo Traveller)",
        "Fuel, driver allowance, parking, tolls",
        "All taxes and state permits"
      ],
      exclusions: [
        "Hotel accommodation (₹2000-5000 per night)",
        "Meals and refreshments",
        "Entry fees and activity charges",
        "Cable car (₹300-400)",
        "Boating charges (₹200-500)",
        "Personal expenses"
      ],
      bestTimeToVisit: "March-June (pleasant), October-November (autumn), December-February (winter/snow)",
      difficulty: "Easy",
      category: "Hill Station & Lakes",
      heroImage: "/images/sightseeing/nainital_hero_section.jpg",
      heroImagePrompt: "Stunning aerial view of Naini Lake in Nainital, pear-shaped emerald lake surrounded by seven hills, colorful buildings on hillsides, boats on water, Naina Devi Temple visible, snow-capped Himalayas in background, misty mountains, Queen of Lakes, scenic hill station panorama, golden hour lighting",
      images: [],
      additionalImages: [
        "Naini Lake at sunset with boating, reflection of hills in calm water, colorful paddle boats, Mall Road lights glowing, romantic evening atmosphere",
        "Snow View Point cable car ropeway ascending with Nainital town and lake view below, aerial tramway, tourists enjoying ride, panoramic Himalayan peaks",
        "Naina Peak (Cheena Peak) summit view with prayer flags, trekkers at highest point, 360-degree Himalayan vista, dense forest trail, adventure trekking",
        "Mall Road Nainital bustling with tourists, colonial-era buildings, cafes and restaurants, shopping, horse rides, vibrant hill station life",
        "Naina Devi Temple on lake shore, devotees, spiritual site, colorful flags, ancient Shakti Peetha, religious significance"
      ],
      tips: [
        "Book hotels in advance during peak season",
        "Carry warm clothes even in summer (evenings are cold)",
        "Mall Road parking is limited, hotel drop recommended",
        "Try local Kumaoni cuisine and Bal Mithai sweets",
        "Visit Tiffin Top for best sunrise views"
      ],
      reviews: { averageRating: 4.6, totalReviews: 2145 },
      coordinates: { latitude: 29.3803, longitude: 79.4636 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    },

    {
      id: 16,
      name: "Delhi to Mussoorie 2 Days Tour",
      slug: "delhi-to-mussoorie-2-days",
      shortDescription: "Queen of Hills adventure with Mall Road, Kempty Falls, and scenic mountain views",
      fullDescription: "Discover Mussoorie, the charming hill station known as the Queen of Hills. Explore the famous Mall Road with colonial architecture, visit Kempty Falls for a refreshing experience, enjoy Gun Hill ropeway ride, and discover serene spots like Company Garden and Lal Tibba. Perfect weekend escape with stunning valley views and pleasant weather.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9000,
        suv: 12000,
        tempoTraveller: 17000,
        currency: "INR"
      },
      highlights: [
        "Mall Road - Colonial charm and shopping",
        "Kempty Falls - Popular waterfall and swimming spot",
        "Gun Hill - Second highest point with ropeway",
        "Lal Tibba - Highest point in Mussoorie",
        "Company Garden - Municipal garden with lake",
        "Camel's Back Road - Scenic walking trail"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pickup from Delhi", duration: "6-7 hours drive", description: "Drive via Dehradun to Mussoorie" },
        { time: "Day 1 - 01:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 02:30 PM", activity: "Kempty Falls visit", duration: "2 hours", description: "Waterfall, bathing, photography" },
        { time: "Day 1 - 04:30 PM", activity: "Gun Hill ropeway ride", duration: "1.5 hours", description: "Cable car and valley views" },
        { time: "Day 1 - 06:00 PM", activity: "Mall Road evening stroll", duration: "2 hours", description: "Shopping, cafes, colonial buildings" },
        { time: "Day 1 - 08:00 PM", activity: "Dinner and overnight stay", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast and checkout", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Lal Tibba viewpoint", duration: "1 hour", description: "Highest point, telescope views" },
        { time: "Day 2 - 10:00 AM", activity: "Company Garden", duration: "1 hour", description: "Boating, flowers, picnic spot" },
        { time: "Day 2 - 11:00 AM", activity: "Camel's Back Road walk", duration: "1 hour" },
        { time: "Day 2 - 12:00 PM", activity: "Lunch and return journey to Delhi", duration: "6-7 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle with fuel",
        "Driver allowance, parking, tolls",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹2500-6000 per night)",
        "Meals",
        "Gun Hill ropeway (₹200-300)",
        "Entry fees and activities",
        "Personal expenses"
      ],
      bestTimeToVisit: "April-June (summer), September-November (autumn), December-February (winter/snow)",
      difficulty: "Easy",
      category: "Hill Station",
      heroImage: "/images/sightseeing/mussoorie_delhi_hero.jpg",
      heroImagePrompt: "Beautiful panoramic view of Mussoorie hill station, Mall Road with colonial buildings on hillside, Doon Valley visible far below, Himalayan ranges in background, misty mountains, Queen of Hills landscape, cable car to Gun Hill visible, lush green slopes, evening lights glowing, romantic hill town atmosphere",
      images: [],
      additionalImages: [
        "Kempty Falls cascading down with tourists bathing and enjoying, multi-tiered waterfall, lush greenery, changing rooms, popular tourist attraction, refreshing water",
        "Gun Hill ropeway cable car ascending over Mussoorie town, aerial view of valley, tourists inside gondola, second highest peak, panoramic vista",
        "Mall Road Mussoorie bustling with tourists, shops, cafes, colonial architecture, street vendors, horse rides, vibrant hill station atmosphere",
        "Lal Tibba highest point with vintage telescope, snow-capped Himalayan peaks view, prayer flags, observation deck, clear mountain scenery",
        "Company Garden with colorful flowers, boating lake, fountains, families picnicking, well-maintained municipal garden, leisure spot"
      ],
      tips: [
        "Avoid weekends and holidays for less crowds",
        "Parking on Mall Road restricted, walk from designated areas",
        "Kempty Falls best in monsoon but avoid heavy rains",
        "Try local chaat and Maggi at mountain stalls",
        "Carry jacket even in summer for evening chill"
      ],
      reviews: { averageRating: 4.5, totalReviews: 1987 },
      coordinates: { latitude: 30.4598, longitude: 78.0644 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    },

    {
      id: 17,
      name: "Delhi to Jim Corbett 2 Days Wildlife Tour",
      slug: "delhi-to-jim-corbett-2-days",
      shortDescription: "India's oldest national park with tiger safari, jungle adventure, and wildlife spotting",
      fullDescription: "Experience thrilling wildlife safari in Jim Corbett National Park, India's oldest and most prestigious national park. Enjoy jeep safari through different zones, spot Bengal tigers, elephants, deer, and exotic birds. Stay in jungle resorts, enjoy nature walks, and immerse in the wilderness of the Himalayan foothills.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 8000,
        suv: 11000,
        tempoTraveller: 16000,
        currency: "INR"
      },
      highlights: [
        "Jeep Safari - Tiger and wildlife spotting in jungle",
        "Corbett Museum - Jim Corbett's historic house",
        "Garjiya Devi Temple - Temple on Kosi River rock",
        "Corbett Falls - Scenic waterfall in dense forest",
        "Bird Watching - 600+ bird species",
        "Jungle resort stay with nature activities"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pickup from Delhi", duration: "5-6 hours drive", description: "Drive to Ramnagar (Corbett)" },
        { time: "Day 1 - 12:00 PM", activity: "Resort check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 02:00 PM", activity: "Corbett Falls visit", duration: "1.5 hours", description: "Forest walk to waterfall" },
        { time: "Day 1 - 03:30 PM", activity: "Garjiya Devi Temple", duration: "1 hour", description: "Temple on river rock" },
        { time: "Day 1 - 05:00 PM", activity: "Evening at resort - nature walk", duration: "2 hours" },
        { time: "Day 1 - 07:00 PM", activity: "Dinner and bonfire at resort", duration: "" },
        { time: "Day 2 - 05:30 AM", activity: "Early morning Jeep Safari", duration: "4 hours", description: "Dhikala/Bijrani/Jhirna zone safari" },
        { time: "Day 2 - 10:00 AM", activity: "Breakfast and checkout", duration: "1.5 hours" },
        { time: "Day 2 - 11:30 AM", activity: "Corbett Museum visit", duration: "1 hour", description: "Jim Corbett's ancestral home" },
        { time: "Day 2 - 12:30 PM", activity: "Lunch and return journey to Delhi", duration: "5-6 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle",
        "Fuel, driver allowance, tolls",
        "All taxes"
      ],
      exclusions: [
        "Resort accommodation (₹3000-8000 per night)",
        "Meals",
        "Jeep safari charges (₹3500-7000 per jeep)",
        "Park entry permits and guide fees",
        "Corbett Museum entry (₹100)",
        "Personal expenses"
      ],
      bestTimeToVisit: "November-June (park closed mid-June to mid-November)",
      difficulty: "Easy to Moderate",
      category: "Wildlife & Nature",
      heroImage: "/images/sightseeing/corbett_hero_section.jpg",
      heroImagePrompt: "Majestic Bengal tiger walking on forest path in Jim Corbett National Park, dense sal forest, dappled sunlight through trees, wildlife photography, powerful predator in natural habitat, India's tiger reserve, dramatic wildlife moment, photographic safari, 8k quality",
      images: [],
      additionalImages: [
        "Jeep safari in Corbett with tourists viewing wildlife, open-top safari vehicle on jungle track, elephants in background, adventure tourism, guided forest safari",
        "Garjiya Devi Temple perched on large rock in middle of Kosi River, devotees crossing, spiritual site, scenic river landscape, unique temple location",
        "Corbett Falls hidden in dense forest, waterfall cascading over rocks, lush greenery, trekking path, peaceful natural setting, monsoon beauty",
        "Asian elephant herd at Ramganga River in Corbett, wildlife drinking water, tusker leading, natural wildlife behavior, conservation success",
        "Luxury jungle resort in Corbett with machaan (watchtower), swimming pool, mountain view, eco-tourism accommodation, nature getaway"
      ],
      tips: [
        "Book safari permits well in advance (limited slots)",
        "Morning safaris have better tiger sighting chances",
        "Wear neutral colored clothes (avoid bright colors)",
        "Carry binoculars for wildlife and bird watching",
        "Dhikala zone requires overnight stay permit",
        "Maintain silence during safari for better sightings"
      ],
      reviews: { averageRating: 4.7, totalReviews: 2543 },
      coordinates: { latitude: 29.5300, longitude: 78.7700 },
      groupSize: "1-15 persons",
      accessibility: "Not wheelchair accessible (jungle terrain)"
    },

    {
      id: 18,
      name: "Delhi to Mathura-Vrindavan Same Day Tour",
      slug: "delhi-to-mathura-vrindavan-same-day",
      shortDescription: "Spiritual journey to Krishna's birthplace with temples, ghats, and divine atmosphere",
      fullDescription: "Embark on a spiritual day trip to Mathura and Vrindavan, the land of Lord Krishna. Visit Krishna Janmabhoomi Temple, Dwarkadhish Temple, ISKCON temple, and experience the divine atmosphere of Banke Bihari Temple. Attend evening Aarti at Vishram Ghat and explore the vibrant temple town culture.",
      duration: "Same Day (10-12 hours)",
      price: {
        sedan: 4500,
        suv: 6500,
        tempoTraveller: 9000,
        currency: "INR"
      },
      highlights: [
        "Krishna Janmabhoomi - Birthplace of Lord Krishna",
        "Banke Bihari Temple - Most popular Krishna temple",
        "ISKCON Vrindavan - Magnificent modern temple",
        "Vishram Ghat - Evening Aarti on Yamuna",
        "Prem Mandir - Illuminated temple with light show",
        "Govardhan Hill - Sacred pilgrimage site"
      ],
      itinerary: [
        { time: "06:00 AM", activity: "Pickup from Delhi", duration: "3 hours drive", description: "Via Yamuna Expressway to Mathura" },
        { time: "09:00 AM", activity: "Krishna Janmabhoomi Temple", duration: "1.5 hours", description: "Birthplace temple, security check required" },
        { time: "10:30 AM", activity: "Dwarkadhish Temple", duration: "45 mins", description: "Ancient Krishna temple" },
        { time: "11:15 AM", activity: "Drive to Vrindavan", duration: "30 mins" },
        { time: "12:00 PM", activity: "Banke Bihari Temple darshan", duration: "1.5 hours", description: "Crowded but divine experience" },
        { time: "01:30 PM", activity: "Lunch break", duration: "1 hour", description: "Pure vegetarian meal" },
        { time: "02:30 PM", activity: "ISKCON Temple Vrindavan", duration: "1 hour", description: "Beautiful architecture and gardens" },
        { time: "03:30 PM", activity: "Prem Mandir visit", duration: "1.5 hours", description: "Marble temple, musical fountain" },
        { time: "05:00 PM", activity: "Vishram Ghat Aarti", duration: "1 hour", description: "Evening ceremony on Yamuna" },
        { time: "06:00 PM", activity: "Optional Govardhan parikrama stop", duration: "30 mins" },
        { time: "06:30 PM", activity: "Return journey to Delhi", duration: "3 hours" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver, parking, tolls",
        "Expressway charges",
        "All taxes"
      ],
      exclusions: [
        "Temple offerings and donations",
        "Meals and refreshments",
        "Guide (₹800 extra)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October-March (Janmashtami and Holi are special)",
      difficulty: "Easy",
      category: "Spiritual & Religious",
      heroImage: "/images/sightseeing/mathura_vrindavan_hero.jpg",
      heroImagePrompt: "Magnificent Prem Mandir Vrindavan illuminated at night, white marble temple glowing with colorful lights, Krishna-Radha sculptures, musical fountain show, devotees gathered, divine architecture, spiritual grandeur, HDR photography, 8k quality",
      images: [],
      additionalImages: [
        "Banke Bihari Temple crowded with devotees, colorful decorations, priests, Krishna deity darshan, spiritual fervor, traditional Vaishnav worship, bhajan singing",
        "Krishna Janmabhoomi Temple complex, birthplace shrine, devotees praying, spiritual significance, ancient holy site, pilgrimage destination",
        "Vishram Ghat evening Aarti on Yamuna River, oil lamps, priests performing ritual, devotees gathered, spiritual ceremony, holy river banks",
        "ISKCON Vrindavan temple with ornate architecture, beautiful gardens, Krishna Balaram deities, international devotees, peaceful atmosphere",
        "Govardhan Hill parikrama path with pilgrims, sacred hill lifted by Krishna, religious significance, devotees walking barefoot, spiritual journey"
      ],
      tips: [
        "Remove shoes and leather items before entering temples",
        "Banke Bihari darshan can take 1-2 hours in queue",
        "Dress modestly, cover shoulders and knees",
        "Prem Mandir light show timing 7-8 PM (not to be missed)",
        "Mathura-Vrindavan is strictly vegetarian - no eggs/alcohol",
        "Keep valuables safe in crowded temples"
      ],
      reviews: { averageRating: 4.8, totalReviews: 3124 },
      coordinates: { latitude: 27.4924, longitude: 77.6737 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    },

    {
      id: 19,
      name: "Delhi to Neemrana Fort Same Day Tour",
      slug: "delhi-to-neemrana-fort-same-day",
      shortDescription: "Explore 15th century heritage fort palace with stunning architecture and zip-lining adventure",
      fullDescription: "Visit the magnificent Neemrana Fort Palace, a stunning 15th-century heritage property perched on a hill. Explore the fort's architecture, enjoy panoramic views, optional zip-lining adventure, and experience royal hospitality. Perfect day trip combining heritage, adventure, and luxury dining experience.",
      duration: "Same Day (8-10 hours)",
      price: {
        sedan: 4000,
        suv: 6000,
        tempoTraveller: 8500,
        currency: "INR"
      },
      highlights: [
        "Neemrana Fort Palace - 15th century heritage fort",
        "Zip-lining - India's first zip tour (optional)",
        "Step-wells - Ancient water structures",
        "Fort architecture - Rajput-Mughal fusion",
        "Panoramic views - Aravalli hills vista",
        "Heritage hotel experience - Royal ambiance"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pickup from Delhi", duration: "2.5 hours drive", description: "Delhi-Jaipur highway via Gurgaon" },
        { time: "09:30 AM", activity: "Neemrana Fort Palace arrival", duration: "30 mins", description: "Entry and orientation" },
        { time: "10:00 AM", activity: "Fort exploration", duration: "2 hours", description: "Multi-level fort, courtyards, galleries" },
        { time: "12:00 PM", activity: "Zip-lining adventure (optional)", duration: "1.5 hours", description: "6 zip lines across fort" },
        { time: "01:30 PM", activity: "Lunch at fort restaurant", duration: "1.5 hours", description: "Royal dining experience with views" },
        { time: "03:00 PM", activity: "Step-well and baori visit", duration: "1 hour" },
        { time: "04:00 PM", activity: "Shopping at fort boutique", duration: "30 mins" },
        { time: "04:30 PM", activity: "Return journey to Delhi", duration: "2.5 hours" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver, parking, tolls",
        "All taxes"
      ],
      exclusions: [
        "Neemrana Fort entry (₹500 for non-guests)",
        "Zip-lining charges (₹1500 per person)",
        "Meals and beverages",
        "Personal expenses"
      ],
      bestTimeToVisit: "October-March",
      difficulty: "Easy to Moderate",
      category: "Heritage & Adventure",
      heroImage: "/images/sightseeing/neemrana_fort_hero.jpg",
      heroImagePrompt: "Magnificent Neemrana Fort Palace perched on hill, 15th century multi-tiered heritage fort, Rajput architecture, arched windows and balconies, Aravalli hills landscape, zip lines visible between towers, majestic heritage property, dramatic hill fort panorama, golden evening light, architectural photography",
      images: [],
      additionalImages: [
        "Neemrana Fort zip-lining adventure with person zipping between fort towers, adrenaline rush, heritage adventure, safety equipment, unique experience",
        "Fort palace courtyard with traditional Rajasthani architecture, arches, hanging gardens, heritage hotel ambiance, royal setting",
        "Ancient step-well (baori) near Neemrana with geometric steps descending, intricate architecture, water conservation heritage, historical engineering",
        "Fort panoramic view from terrace with Aravalli ranges, infinity pool, heritage luxury, sunset dining setup, romantic ambiance",
        "Heritage room interior with antique furniture, traditional decor, royal bedroom, period architecture, luxury heritage stay"
      ],
      tips: [
        "Wear comfortable shoes for fort walking",
        "Book zip-lining in advance",
        "Minimum age for ziplining is 6 years",
        "Fort has steep steps, not ideal for elderly",
        "Try royal thali for lunch experience",
        "Photography allowed but respect hotel guests' privacy"
      ],
      reviews: { averageRating: 4.6, totalReviews: 1654 },
      coordinates: { latitude: 27.9833, longitude: 76.3833 },
      groupSize: "1-15 persons",
      accessibility: "Limited wheelchair access (heritage structure)"
    },

    {
      id: 20,
      name: "Delhi to Alwar-Sariska Same Day Tour",
      slug: "delhi-to-alwar-sariska-same-day",
      shortDescription: "Wildlife safari at Sariska Tiger Reserve and Alwar's royal heritage palaces",
      fullDescription: "Combine wildlife adventure with royal heritage on this day trip to Sariska and Alwar. Enjoy jeep safari in Sariska Tiger Reserve spotting tigers, leopards, and wildlife. Visit Alwar City Palace, Siliserh Lake, and Bala Quila fort. Experience Rajasthan's wildlife and culture in one comprehensive tour.",
      duration: "Same Day (12-14 hours)",
      price: {
        sedan: 5000,
        suv: 7000,
        tempoTraveller: 9500,
        currency: "INR"
      },
      highlights: [
        "Sariska Tiger Reserve - Bengal tiger safari",
        "Alwar City Palace - Royal heritage museum",
        "Siliserh Lake - Scenic palace on lake",
        "Bala Quila Fort - Hilltop fortress views",
        "Pandupol Temple - Ancient temple in reserve",
        "Wildlife spotting - Tigers, leopards, deer, peacocks"
      ],
      itinerary: [
        { time: "05:00 AM", activity: "Early pickup from Delhi", duration: "3 hours drive", description: "Drive to Sariska via Alwar road" },
        { time: "08:00 AM", activity: "Sariska jeep safari", duration: "3-4 hours", description: "Wildlife safari in tiger reserve" },
        { time: "12:00 PM", activity: "Breakfast/brunch break", duration: "1 hour" },
        { time: "01:00 PM", activity: "Alwar City Palace and Museum", duration: "1.5 hours", description: "Royal artifacts and architecture" },
        { time: "02:30 PM", activity: "Siliserh Lake visit", duration: "1 hour", description: "Scenic lake palace, boating" },
        { time: "03:30 PM", activity: "Bala Quila drive and photo stop", duration: "45 mins", description: "Fort viewpoint" },
        { time: "04:30 PM", activity: "Return journey to Delhi", duration: "3 hours" }
      ],
      inclusions: [
        "AC vehicle with fuel",
        "Driver, parking, tolls",
        "All taxes"
      ],
      exclusions: [
        "Sariska safari jeep (₹2500-3500)",
        "Entry permits and guide fees",
        "Alwar Palace entry (₹50-100)",
        "Meals",
        "Personal expenses"
      ],
      bestTimeToVisit: "October-March (safari best in winter mornings)",
      difficulty: "Easy",
      category: "Wildlife & Heritage",
      heroImage: "/images/sightseeing/sariska_alwar_hero.jpg",
      heroImagePrompt: "Bengal tiger in Sariska Tiger Reserve walking through dry deciduous forest, majestic predator, Aravalli hills landscape, wildlife photography, safari moment, natural habitat, conservation reserve, dramatic wildlife encounter, morning light filtering through trees",
      images: [],
      additionalImages: [
        "Jeep safari in Sariska with tourists spotting wildlife, open gypsy vehicle on forest track, deer crossing, adventure tourism, guided nature tour",
        "Alwar City Palace complex with Indo-Islamic architecture, ornate balconies, royal courtyards, museum artifacts, heritage building",
        "Siliserh Lake with palace hotel on shore, Aravalli hills reflection in water, boating, scenic royal retreat, tranquil setting",
        "Bala Quila fort atop hill overlooking Alwar city, massive walls, historic fortification, panoramic valley view, sunset photography",
        "Leopard resting on tree branch in Sariska, spotted predator, wildlife sighting, big cat conservation, forest ecosystem"
      ],
      tips: [
        "Early morning safari has best animal sighting chances",
        "Book safari permits in advance",
        "Carry binoculars and camera with zoom lens",
        "Wear earth-toned clothes for safari",
        "Alwar famous for milk cake (kalakand) - try local sweets",
        "Sariska temple visit requires 20km drive inside reserve"
      ],
      reviews: { averageRating: 4.5, totalReviews: 1432 },
      coordinates: { latitude: 27.4728, longitude: 76.3950 },
      groupSize: "1-15 persons",
      accessibility: "Not wheelchair accessible (safari terrain)"
    },

    {
      id: 21,
      name: "Delhi to Kasauli 2 Days Hill Station Tour",
      slug: "delhi-to-kasauli-2-days",
      shortDescription: "Tranquil Himalayan hill town with colonial charm, nature walks, and panoramic mountain views",
      fullDescription: "Escape to the serene hill station of Kasauli, a quaint colonial town in Himachal Pradesh. Walk through pine forests on Mall Road, visit Monkey Point for Himalayan views, explore Christ Church, and enjoy the peaceful atmosphere. Perfect for those seeking quiet mountain getaway with minimal commercialization.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 8500,
        suv: 11000,
        tempoTraveller: 16000,
        currency: "INR"
      },
      highlights: [
        "Monkey Point - Highest point with Hanuman temple",
        "Mall Road - Peaceful walking promenade",
        "Christ Church - Colonial era church",
        "Sunset Point - Panoramic valley views",
        "Kasauli Brewery - India's oldest distillery",
        "Gilbert Trail - Nature walk through forests"
      ],
      itinerary: [
        { time: "Day 1 - 07:00 AM", activity: "Pickup from Delhi", duration: "5-6 hours drive", description: "Via Chandigarh-Kalka-Kasauli route" },
        { time: "Day 1 - 01:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 02:30 PM", activity: "Monkey Point visit", duration: "1.5 hours", description: "Hanuman temple, mountain views" },
        { time: "Day 1 - 04:00 PM", activity: "Mall Road evening walk", duration: "2 hours", description: "Colonial buildings, cafes, shopping" },
        { time: "Day 1 - 06:00 PM", activity: "Sunset Point", duration: "1 hour" },
        { time: "Day 1 - 07:00 PM", activity: "Dinner and overnight stay", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast and checkout", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Christ Church visit", duration: "45 mins" },
        { time: "Day 2 - 10:00 AM", activity: "Gilbert Trail nature walk", duration: "2 hours", description: "Forest trek, bird watching" },
        { time: "Day 2 - 12:00 PM", activity: "Kasauli Brewery visit (exterior)", duration: "30 mins" },
        { time: "Day 2 - 12:30 PM", activity: "Lunch and return journey to Delhi", duration: "5-6 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle",
        "Driver, fuel, tolls",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹2500-5000 per night)",
        "Meals",
        "Entry fees",
        "Personal expenses"
      ],
      bestTimeToVisit: "March-June (summer), September-November (autumn)",
      difficulty: "Easy",
      category: "Hill Station & Nature",
      heroImage: "/images/sightseeing/kasauli_hero.jpg",
      heroImagePrompt: "Peaceful Kasauli Mall Road with colonial-era buildings, pine and deodar trees lining path, mist rolling through mountains, tourists walking, Victorian architecture, serene hill station atmosphere, Himalayan foothills, tranquil morning scene, golden light through trees",
      images: [],
      additionalImages: [
        "Monkey Point (Hanuman Temple) at highest peak of Kasauli, red temple structure, panoramic Himalayan views, devotees, prayer flags, summit viewpoint",
        "Christ Church Kasauli Gothic architecture with stained glass windows, colonial heritage, Sunday service, peaceful church compound, historical landmark",
        "Gilbert Trail forest path through dense pine and oak trees, nature walk, bird watching, trekking trail, lush greenery, peaceful hiking",
        "Sunset Point Kasauli with valley view turning golden, Sutlej river visible far below, mountains silhouette, romantic sunset spot, bench viewpoint",
        "Kasauli Brewery oldest distillery in India, colonial-era building, heritage site, Solan beer production, architectural landmark"
      ],
      tips: [
        "Kasauli is vehicle-restricted, walking required on Mall Road",
        "Carry comfortable walking shoes for trails",
        "Limited dining options, hotel meals recommended",
        "Very peaceful, ideal for couples and families",
        "Monkey Point has many monkeys, don't carry food openly",
        "Town closes early, plan evening activities accordingly"
      ],
      reviews: { averageRating: 4.4, totalReviews: 1245 },
      coordinates: { latitude: 30.8983, longitude: 76.9650 },
      groupSize: "1-15 persons",
      accessibility: "Limited wheelchair access (hilly terrain)"
    },

    {
      id: 22,
      name: "Delhi to Lansdowne 2 Days Peaceful Retreat",
      slug: "delhi-to-lansdowne-2-days",
      shortDescription: "Unspoiled cantonment hill town with oak forests, lakes, and serene mountain ambiance",
      fullDescription: "Discover Lansdowne, an offbeat and peaceful cantonment town in Uttarakhand. Walk through oak and pine forests, visit Bhulla Lake for boating, explore St. Mary's Church, and enjoy the untouched natural beauty. Perfect for digital detox and peaceful mountain retreat away from tourist crowds.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 8000,
        suv: 11000,
        tempoTraveller: 16000,
        currency: "INR"
      },
      highlights: [
        "Bhulla Lake - Boating in peaceful artificial lake",
        "St. Mary's Church - Colonial cantonment church",
        "Tip-n-Top Point - Panoramic Himalayan views",
        "War Memorial - Garhwal Rifles tribute",
        "Tarkeshwar Mahadev - Ancient Shiva temple",
        "Oak and pine forest walks"
      ],
      itinerary: [
        { time: "Day 1 - 07:00 AM", activity: "Pickup from Delhi", duration: "6-7 hours drive", description: "Via Kotdwar to Lansdowne" },
        { time: "Day 1 - 02:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 03:30 PM", activity: "Bhulla Lake visit", duration: "2 hours", description: "Boating, gardens, walking" },
        { time: "Day 1 - 05:30 PM", activity: "Tip-n-Top viewpoint", duration: "1 hour", description: "Sunset and mountain views" },
        { time: "Day 1 - 06:30 PM", activity: "Evening walk in cantonment", duration: "1 hour" },
        { time: "Day 1 - 07:30 PM", activity: "Dinner and overnight stay", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Tarkeshwar Mahadev Temple", duration: "2 hours", description: "Ancient temple, 37km scenic drive" },
        { time: "Day 2 - 11:00 AM", activity: "War Memorial and St. Mary's Church", duration: "1 hour" },
        { time: "Day 2 - 12:00 PM", activity: "Checkout and lunch", duration: "1 hour" },
        { time: "Day 2 - 01:00 PM", activity: "Return journey to Delhi", duration: "6-7 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle",
        "Fuel, driver, tolls",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹2000-4500 per night)",
        "Meals",
        "Boating charges (₹100-200)",
        "Entry fees",
        "Personal expenses"
      ],
      bestTimeToVisit: "March-June (summer), September-November (autumn)",
      difficulty: "Easy",
      category: "Hill Station & Nature",
      heroImage: "/images/sightseeing/lansdowne_hero.jpg",
      heroImagePrompt: "Serene Bhulla Lake in Lansdowne surrounded by oak and pine forests, paddle boats on calm water, misty mountains in background, peaceful hill station, cantonment town atmosphere, natural beauty, morning fog over lake, tranquil landscape photography",
      images: [],
      additionalImages: [
        "Tip-n-Top viewpoint with panoramic Himalayan snow peaks vista, observation deck, tourists enjoying view, Garhwal ranges, clear mountain scenery",
        "St. Mary's Church Lansdowne colonial-era architecture, white church building, pine trees surrounding, Sunday service, cantonment heritage",
        "War Memorial dedicated to Garhwal Rifles, military history, eternal flame, patriotic tribute, well-maintained memorial garden",
        "Tarkeshwar Mahadev Temple ancient Shiva shrine in dense deodar forest, religious significance, peaceful temple complex, devotees",
        "Oak forest walking trail in Lansdowne, nature walk, bird watching, peaceful trekking, untouched natural beauty, morning mist"
      ],
      tips: [
        "Very peaceful and less commercialized than other hill stations",
        "Limited restaurant options, hotel meals recommended",
        "Ideal for reading, relaxing, and digital detox",
        "Tarkeshwar temple drive is scenic but winding",
        "Carry warm clothes (evenings can be cold)",
        "Perfect destination for senior citizens and families"
      ],
      reviews: { averageRating: 4.5, totalReviews: 987 },
      coordinates: { latitude: 29.8413, longitude: 78.6810 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    },

    {
      id: 23,
      name: "Delhi to Varanasi 3 Days Spiritual Journey",
      slug: "delhi-to-varanasi-3-days",
      shortDescription: "Ancient holy city with Ganga Aarti, ghats, temples, and soul-stirring spiritual experience",
      fullDescription: "Embark on a transformative spiritual journey to Varanasi, the oldest living city in the world. Witness mesmerizing Ganga Aarti, take boat rides at sunrise, visit Kashi Vishwanath Temple, explore ancient ghats, and experience Sarnath where Buddha gave his first sermon. Immerse in the spiritual capital of India.",
      duration: "3 Days / 2 Nights",
      price: {
        sedan: 15000,
        suv: 20000,
        tempoTraveller: 29000,
        currency: "INR"
      },
      highlights: [
        "Ganga Aarti at Dashashwamedh Ghat - Spectacular evening ceremony",
        "Sunrise boat ride - Experience magical morning on Ganges",
        "Kashi Vishwanath Temple - Most sacred Shiva temple",
        "Sarnath - Buddhist pilgrimage site",
        "Manikarnika Ghat - Ancient cremation ghat",
        "Assi Ghat - Cultural hub and yoga classes"
      ],
      itinerary: [
        { time: "Day 1 - Morning", activity: "Flight/Train from Delhi to Varanasi", duration: "1.5 hours flight or overnight train" },
        { time: "Day 1 - 12:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 02:00 PM", activity: "Sarnath excursion", duration: "3 hours", description: "Dhamek Stupa, museum, deer park" },
        { time: "Day 1 - 06:00 PM", activity: "Evening Ganga Aarti at Dashashwamedh Ghat", duration: "2 hours", description: "Spectacular ceremony with thousands" },
        { time: "Day 1 - 08:00 PM", activity: "Dinner and rest", duration: "" },
        { time: "Day 2 - 05:30 AM", activity: "Sunrise boat ride on Ganges", duration: "2 hours", description: "Witness ghats come alive, morning rituals" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast at hotel", duration: "1 hour" },
        { time: "Day 2 - 09:30 AM", activity: "Kashi Vishwanath Temple darshan", duration: "2 hours", description: "Dress code and security required" },
        { time: "Day 2 - 12:00 PM", activity: "Walking tour of ghats", duration: "3 hours", description: "Assi, Manikarnika, Harishchandra ghats" },
        { time: "Day 2 - 03:00 PM", activity: "Lunch and rest", duration: "2 hours" },
        { time: "Day 2 - 05:00 PM", activity: "Banaras Hindu University and Bharat Kala Bhavan", duration: "2 hours" },
        { time: "Day 2 - 07:00 PM", activity: "Dinner - try Banarasi cuisine", duration: "1.5 hours" },
        { time: "Day 2 - 08:30 PM", activity: "Optional: Attend classical music performance", duration: "1.5 hours" },
        { time: "Day 3 - 08:00 AM", activity: "Breakfast and checkout", duration: "1.5 hours" },
        { time: "Day 3 - 10:00 AM", activity: "Shopping - Banarasi silk sarees", duration: "2 hours", description: "Famous silk weaving" },
        { time: "Day 3 - 12:00 PM", activity: "Lunch", duration: "1 hour" },
        { time: "Day 3 - Afternoon", activity: "Return flight/train to Delhi", duration: "" }
      ],
      inclusions: [
        "Round trip AC vehicle in Varanasi",
        "Local transfers and sightseeing",
        "Parking and tolls",
        "All taxes"
      ],
      exclusions: [
        "Delhi-Varanasi flights/train tickets",
        "Hotel accommodation (₹3000-8000 per night)",
        "Meals",
        "Boat ride charges (₹300-600)",
        "Temple offerings and donations",
        "Guide (₹1500 per day)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October-March (avoid summer heat), Dev Deepawali (Nov) is magical",
      difficulty: "Moderate (crowded, intense experience)",
      category: "Spiritual & Cultural",
      heroImage: "/images/sightseeing/varanasi_hero.jpg",
      heroImagePrompt: "Magical Ganga Aarti at Dashashwamedh Ghat Varanasi, priests in saffron robes holding massive brass lamps with fire, hundreds of devotees gathered, Ganges River flowing, boats with oil lamps floating, spiritual grandeur, evening divine ceremony, smoke and incense, long exposure photography, 8k quality",
      images: [],
      additionalImages: [
        "Sunrise boat ride on Ganges with ancient ghats in background, morning mist, people bathing in holy river, temples on shore, rowing boats, spiritual awakening, golden light",
        "Kashi Vishwanath Temple golden spire (shikhara), devotees queuing for darshan, ancient Jyotirlinga temple, spiritual significance, crowded pilgrimage site",
        "Sarnath Dhamek Stupa where Buddha gave first sermon, Buddhist pilgrims, deer park, ancient ruins, serene meditation site, archaeological importance",
        "Manikarnika burning ghat with cremation pyres, cycle of life and death, spiritual perspective, sacred ground, eternal flames, Hindu funeral rites",
        "Assi Ghat morning yoga and aarti, cultural hub, tourists and locals, boat rides, vibrant ghat life, spiritual activities, riverside scene"
      ],
      tips: [
        "Hire a knowledgeable guide to understand cultural significance",
        "Dress modestly, especially at temples and ghats",
        "Early morning boat ride is unmissable experience",
        "Kashi Vishwanath has strict security, no phones/cameras",
        "Try Banarasi paan, chaat, and lassi",
        "Respect cremation ghats - no photos at Manikarnika",
        "Lanes are narrow, walking is the best way to explore",
        "Be prepared for sensory overload and spiritual intensity"
      ],
      reviews: { averageRating: 4.9, totalReviews: 4567 },
      coordinates: { latitude: 25.3176, longitude: 82.9739 },
      groupSize: "1-15 persons",
      accessibility: "Not wheelchair accessible (narrow lanes, ghats with steps)"
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
    },

    {
      id: 24,
      name: "Jaipur to Mount Abu 2 Days Tour",
      slug: "jaipur-to-mount-abu-2-days",
      shortDescription: "Rajasthan's only hill station with Dilwara Temples, Nakki Lake, and stunning sunset points",
      fullDescription: "Escape to Mount Abu, Rajasthan's only hill station nestled in the Aravalli Range. Visit the exquisite marble Dilwara Temples, enjoy boating at Nakki Lake, witness breathtaking sunsets at Sunset Point, explore Guru Shikhar (highest peak), and visit the serene Achalgarh Fort. Perfect blend of spirituality, nature, and scenic beauty.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9000,
        suv: 12500,
        tempoTraveller: 18000,
        currency: "INR"
      },
      highlights: [
        "Dilwara Temples - Stunning marble architecture and intricate carvings",
        "Nakki Lake - Boating in sacred lake surrounded by hills",
        "Sunset Point - Panoramic views of valleys and sunset",
        "Guru Shikhar - Highest point in Rajasthan (1722m)",
        "Achalgarh Fort - Ancient fort with stunning views",
        "Peace Park - Japanese-style garden with beautiful landscapes"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pickup from Jaipur", duration: "7-8 hours drive", description: "Scenic drive through Aravalli hills" },
        { time: "Day 1 - 02:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 03:30 PM", activity: "Nakki Lake visit", duration: "2 hours", description: "Boating and lakeside walk" },
        { time: "Day 1 - 05:30 PM", activity: "Sunset Point", duration: "1.5 hours", description: "Spectacular sunset views" },
        { time: "Day 1 - 07:00 PM", activity: "Mall Road walk and shopping", duration: "1 hour" },
        { time: "Day 1 - 08:00 PM", activity: "Dinner and overnight stay", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Dilwara Temples visit", duration: "2 hours", description: "Marvel at exquisite marble work" },
        { time: "Day 2 - 11:00 AM", activity: "Guru Shikhar - Highest peak", duration: "1.5 hours", description: "Panoramic views and temple visit" },
        { time: "Day 2 - 12:30 PM", activity: "Achalgarh Fort", duration: "1 hour" },
        { time: "Day 2 - 01:30 PM", activity: "Checkout and lunch", duration: "1 hour" },
        { time: "Day 2 - 02:30 PM", activity: "Return journey to Jaipur", duration: "7-8 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle with fuel",
        "Driver allowance",
        "Parking and toll charges",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹2500-5000 per night)",
        "Meals and refreshments",
        "Entry fees to temples and attractions",
        "Boating charges (₹150-300)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March (cool weather)",
      difficulty: "Easy",
      category: "Hill Station & Temples",
      heroImage: "/images/sightseeing/mount_abu_hero.jpg",
      heroImagePrompt: "Stunning Dilwara Jain Temples Mount Abu with intricate white marble carvings, detailed pillars and domes, architectural masterpiece, spiritual atmosphere, morning light filtering through marble, ultra-detailed craftsmanship, 8k quality",
      images: [],
      additionalImages: [
        "Nakki Lake Mount Abu with boats, surrounding hills, heart-shaped lake, Toad Rock visible, tourists boating, serene atmosphere, sunset glow",
        "Sunset Point panoramic view of valleys and mountains turning golden, tourists gathered, romantic sunset, colorful sky, Aravalli ranges",
        "Guru Shikhar highest peak in Rajasthan with temple at summit, panoramic 360-degree views, mountain scenery, pilgrims climbing steps",
        "Achalgarh Fort ancient structure with stone walls, historical architecture, Mandakini Tank, scenic mountain views",
        "Peace Park Japanese-style garden with Buddha statues, manicured lawns, peaceful meditation spot, Mount Abu greenery"
      ],
      tips: [
        "Dilwara Temples open 12:00-6:00 PM (leather items not allowed)",
        "Carry warm clothes (evenings can be cold)",
        "Book hotels in advance during peak season",
        "Try local Rajasthani and Gujarati cuisine",
        "Early morning at Nakki Lake is most peaceful"
      ],
      reviews: { averageRating: 4.6, totalReviews: 1245 },
      coordinates: { latitude: 24.5926, longitude: 72.7156 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    },

    {
      id: 25,
      name: "Jaipur to Ranthambore Same Day Safari Tour",
      slug: "jaipur-to-ranthambore-same-day",
      shortDescription: "Wildlife safari in tiger reserve with historic Ranthambore Fort and thrilling jungle experience",
      fullDescription: "Experience the thrill of spotting Royal Bengal Tigers at Ranthambore National Park. Enjoy a guided safari through the jungle, visit the majestic Ranthambore Fort inside the park, and explore the rich wildlife including leopards, deer, crocodiles, and exotic birds. Perfect day trip for wildlife enthusiasts and photographers.",
      duration: "Same Day (12-14 hours)",
      price: {
        sedan: 5500,
        suv: 7500,
        tempoTraveller: 10000,
        currency: "INR"
      },
      highlights: [
        "Tiger Safari - Spot Royal Bengal Tigers in natural habitat",
        "Ranthambore Fort - UNESCO World Heritage Site inside park",
        "Wildlife Photography - Tigers, leopards, sloth bears, deer",
        "Padam Talao Lake - Scenic lake with Jogi Mahal",
        "Bird Watching - Over 300 species of birds",
        "Ganesh Temple - Ancient temple inside fort"
      ],
      itinerary: [
        { time: "05:00 AM", activity: "Pickup from Jaipur", duration: "3.5 hours drive", description: "Early morning departure for safari" },
        { time: "08:30 AM", activity: "Reach Ranthambore, safari check-in", duration: "30 mins" },
        { time: "09:00 AM", activity: "Morning Safari (Zone assigned)", duration: "3-4 hours", description: "Explore jungle in canter/gypsy, tiger spotting" },
        { time: "01:00 PM", activity: "Lunch at local restaurant", duration: "1 hour" },
        { time: "02:00 PM", activity: "Ranthambore Fort visit", duration: "2 hours", description: "Explore historic fort, temples, panoramic views" },
        { time: "04:00 PM", activity: "Evening Safari (if booked)", duration: "3 hours", description: "Second chance for tiger sighting" },
        { time: "07:00 PM", activity: "Return journey to Jaipur", duration: "3.5 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle with fuel",
        "Driver allowance",
        "Parking and toll charges",
        "All taxes"
      ],
      exclusions: [
        "Safari charges (₹1500-2500 per person for canter, ₹2500-4000 for gypsy)",
        "Entry fees to national park and fort",
        "Meals and refreshments",
        "Guide charges (₹200-300)",
        "Camera fees (₹200-500)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to June (park closed July-September monsoon)",
      difficulty: "Easy",
      category: "Wildlife & Adventure",
      heroImage: "/images/sightseeing/ranthambore_hero.jpg",
      heroImagePrompt: "Majestic Royal Bengal Tiger walking on forest path in Ranthambore National Park, golden light filtering through trees, wild natural habitat, powerful wildlife photography, alert tiger expression, jungle background, dramatic wildlife shot, 8k quality",
      images: [],
      additionalImages: [
        "Ranthambore Fort on hilltop inside national park, ancient ruins with fortification walls, panoramic jungle views, UNESCO heritage site, historical architecture",
        "Safari jeep with tourists spotting tiger in Ranthambore, open gypsy vehicle, excited travelers with cameras, jungle safari experience, adventure tourism",
        "Padam Talao lake with Jogi Mahal palace reflection, peaceful water body, deer drinking at shore, scenic landscape in Ranthambore",
        "Leopard resting on tree branch in Ranthambore, wildlife diversity, spotted cat, natural behavior, wildlife photography opportunity",
        "Ganesh Temple inside Ranthambore Fort, ancient Hindu shrine, pilgrimage site, stone architecture, devotees visiting"
      ],
      tips: [
        "Safari booking required in advance (online booking recommended)",
        "Early morning safari has better tiger sighting chances",
        "Wear neutral colored clothes (khaki, green, brown)",
        "Carry binoculars and camera with telephoto lens",
        "Zone 1-5 are best for tiger sightings",
        "Maintain silence during safari for better wildlife spotting",
        "Winter months (Dec-Feb) are best for sightings"
      ],
      reviews: { averageRating: 4.7, totalReviews: 1876 },
      coordinates: { latitude: 26.0173, longitude: 76.5026 },
      groupSize: "1-15 persons",
      accessibility: "Not wheelchair accessible (safari terrain)"
    },

    {
      id: 26,
      name: "Jaipur to Ajmer-Pushkar Same Day Spiritual Tour",
      slug: "jaipur-to-ajmer-pushkar-same-day",
      shortDescription: "Sacred pilgrimage to Ajmer Sharif Dargah and holy Pushkar Lake with Brahma Temple",
      fullDescription: "Experience the spiritual essence of Rajasthan by visiting Ajmer Sharif Dargah, one of India's holiest Sufi shrines, and Pushkar, the sacred city with the only Brahma Temple in the world. Walk around Pushkar Lake with 52 ghats, explore colorful bazaars, and witness the unique blend of Hindu and Sufi traditions.",
      duration: "Same Day (10-12 hours)",
      price: {
        sedan: 4500,
        suv: 6500,
        tempoTraveller: 9000,
        currency: "INR"
      },
      highlights: [
        "Ajmer Sharif Dargah - Sacred Sufi shrine of Khwaja Moinuddin Chishti",
        "Pushkar Lake - Holy lake with 52 bathing ghats",
        "Brahma Temple - World's only temple dedicated to Lord Brahma",
        "Savitri Temple - Hilltop temple with panoramic Pushkar views",
        "Pushkar Bazaar - Colorful markets with handicrafts and jewelry",
        "Ana Sagar Lake - Scenic artificial lake in Ajmer"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pickup from Jaipur", duration: "2.5 hours drive", description: "Drive to Ajmer" },
        { time: "09:30 AM", activity: "Ajmer Sharif Dargah visit", duration: "2 hours", description: "Sufi shrine darshan, qawwali music" },
        { time: "11:30 AM", activity: "Ana Sagar Lake", duration: "30 mins", description: "Scenic lake view and photo stop" },
        { time: "12:00 PM", activity: "Drive to Pushkar", duration: "30 mins" },
        { time: "12:30 PM", activity: "Lunch at local restaurant", duration: "1 hour" },
        { time: "01:30 PM", activity: "Pushkar Lake & Ghats walk", duration: "1 hour", description: "Holy lake circumambulation, temples" },
        { time: "02:30 PM", activity: "Brahma Temple darshan", duration: "45 mins", description: "Rare temple dedicated to Lord Brahma" },
        { time: "03:15 PM", activity: "Savitri Temple (optional)", duration: "1 hour", description: "Ropeway or trek to hilltop temple" },
        { time: "04:30 PM", activity: "Pushkar Bazaar shopping", duration: "1 hour", description: "Handicrafts, silver jewelry, textiles" },
        { time: "05:30 PM", activity: "Return journey to Jaipur", duration: "2.5 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle with fuel",
        "Driver allowance",
        "Parking and toll charges",
        "All taxes"
      ],
      exclusions: [
        "Meals and refreshments",
        "Entry fees and offerings at shrines (₹100-300)",
        "Savitri Temple ropeway (₹150 round trip)",
        "Guide charges (₹800-1000 for both cities)",
        "Shopping and personal expenses"
      ],
      bestTimeToVisit: "October to March, November for Pushkar Camel Fair",
      difficulty: "Easy",
      category: "Spiritual & Heritage",
      heroImage: "/images/sightseeing/ajmer_pushkar_hero.jpg",
      heroImagePrompt: "Stunning aerial view of Pushkar Lake with 52 white ghats, golden hour lighting, Brahma Temple visible, surrounding hills, holy city panorama, pilgrims bathing, colorful buildings around lake, spiritual atmosphere, vibrant colors, 8k quality",
      images: [],
      additionalImages: [
        "Ajmer Sharif Dargah white marble shrine with green dome, devotees gathered, qawwali singers performing, Sufi atmosphere, spiritual pilgrimage, incense smoke",
        "Brahma Temple Pushkar with red spire, unique Hindu architecture, only Brahma temple in world, devotees offering prayers, religious significance",
        "Pushkar Lake ghats during aarti ceremony, oil lamps floating, pilgrims bathing in holy water, temple bells ringing, sacred atmosphere, evening rituals",
        "Savitri Temple on hilltop with ropeway, panoramic view of Pushkar town and lake below, sunset views, temple complex, scenic landscape",
        "Colorful Pushkar bazaar with handicrafts, silver jewelry, textiles, vibrant street market, local vendors, traditional Rajasthani items, shopping experience"
      ],
      tips: [
        "Dress modestly for religious sites (cover head at Dargah)",
        "Remove shoes before entering temples and shrine",
        "Pushkar is vegetarian-only city (no alcohol, no eggs)",
        "Be cautious of aggressive priests demanding money",
        "Photography restricted inside Ajmer Sharif",
        "Thursday is special at Ajmer Sharif (qawwali performances)",
        "Pushkar Camel Fair in November attracts huge crowds"
      ],
      reviews: { averageRating: 4.6, totalReviews: 2134 },
      coordinates: { latitude: 26.4499, longitude: 74.6399 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible"
    },

    {
      id: 27,
      name: "Jaipur to Chittorgarh 2 Days Heritage Tour",
      slug: "jaipur-to-chittorgarh-2-days",
      shortDescription: "Explore India's largest fort complex with Vijay Stambh, Rani Padmini Palace, and tales of Rajput valor",
      fullDescription: "Discover the legendary Chittorgarh Fort, a UNESCO World Heritage Site and symbol of Rajput pride and sacrifice. Explore massive Victory Tower (Vijay Stambh), beautiful Rani Padmini Palace, Meera Temple, Kirti Stambh, and learn the epic tales of Rani Padmini and Maharana Pratap. Perfect for history buffs and architecture enthusiasts.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 8000,
        suv: 11000,
        tempoTraveller: 16000,
        currency: "INR"
      },
      highlights: [
        "Chittorgarh Fort - UNESCO World Heritage Site, India's largest fort",
        "Vijay Stambh - 37-meter tall Victory Tower with intricate carvings",
        "Rani Padmini Palace - Legendary queen's beautiful palace and lake",
        "Kirti Stambh - Tower of Fame dedicated to Jain Tirthankaras",
        "Meera Temple - Dedicated to devotional poet-saint Meerabai",
        "Gaumukh Reservoir - Sacred water source from rock formation"
      ],
      itinerary: [
        { time: "Day 1 - 07:00 AM", activity: "Pickup from Jaipur", duration: "5-6 hours drive", description: "Scenic drive through Rajasthan" },
        { time: "Day 1 - 01:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 02:30 PM", activity: "Chittorgarh Fort exploration - Part 1", duration: "3 hours", description: "Vijay Stambh, Rana Kumbha Palace, Gaumukh" },
        { time: "Day 1 - 05:30 PM", activity: "Sunset at fort viewpoint", duration: "1 hour" },
        { time: "Day 1 - 06:30 PM", activity: "Return to hotel, dinner and rest", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Fort exploration - Part 2", duration: "3 hours", description: "Padmini Palace, Meera Temple, Kirti Stambh" },
        { time: "Day 2 - 12:00 PM", activity: "Checkout and lunch", duration: "1 hour" },
        { time: "Day 2 - 01:00 PM", activity: "Return journey to Jaipur", duration: "5-6 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle with fuel",
        "Driver allowance",
        "Parking and toll charges",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹2000-4000 per night)",
        "Meals and refreshments",
        "Entry fees to fort (₹50-300)",
        "Guide charges (₹1000-1500 highly recommended)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March (avoid summer heat)",
      difficulty: "Moderate (considerable walking in fort)",
      category: "Heritage & History",
      heroImage: "/images/sightseeing/chittorgarh_hero.jpg",
      heroImagePrompt: "Majestic Vijay Stambh (Victory Tower) at Chittorgarh Fort rising 37 meters high, intricate stone carvings on nine storeys, panoramic view of massive fort complex, historical architecture, dramatic sky, UNESCO heritage site, Rajput glory, wide-angle shot, 8k quality",
      images: [],
      additionalImages: [
        "Rani Padmini Palace reflected in lotus pool, elegant three-storey structure, historic water palace, legendary queen's residence, romantic architecture, fort complex",
        "Kirti Stambh Tower of Fame with Jain sculptures, ancient monument dedicated to Adinath, intricate stone work, religious significance, historical landmark",
        "Meera Temple white structure dedicated to saint-poet Meerabai, devotional atmosphere, pilgrims offering prayers, Indo-Aryan architecture",
        "Gaumukh Reservoir with sacred water flowing from cow-mouth shaped rock, ancient water source, pilgrimage site, natural spring in fort",
        "Panoramic aerial view of massive Chittorgarh Fort spread over 700 acres on hilltop, largest fort complex in India, fortification walls, multiple palaces and temples"
      ],
      tips: [
        "Hire a guide to understand rich history and legends",
        "Wear comfortable walking shoes (fort covers huge area)",
        "Start early to explore entire fort (takes 5-6 hours)",
        "Carry water, sunscreen, and hat (limited shade)",
        "Sound and Light show in evening narrates fort's history",
        "Vehicle allowed inside fort for easier exploration",
        "Best photographed during golden hour"
      ],
      reviews: { averageRating: 4.7, totalReviews: 1567 },
      coordinates: { latitude: 24.8829, longitude: 74.6230 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible (vehicle access available)"
    },

    {
      id: 28,
      name: "Jaipur to Bikaner 2 Days Desert Heritage Tour",
      slug: "jaipur-to-bikaner-2-days",
      shortDescription: "Desert city with magnificent Junagarh Fort, Karni Mata Temple, and unique camel culture",
      fullDescription: "Journey to Bikaner, the desert jewel of Rajasthan known for its magnificent Junagarh Fort, unique Karni Mata Temple (Rat Temple), and rich camel heritage. Explore stunning palaces, taste famous Bikaneri bhujia, visit the National Camel Research Center, and experience authentic Thar desert culture and architecture.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9000,
        suv: 12000,
        tempoTraveller: 17000,
        currency: "INR"
      },
      highlights: [
        "Junagarh Fort - Unconquered fort with exquisite interiors",
        "Karni Mata Temple - Famous temple with thousands of sacred rats",
        "Lallgarh Palace - Beautiful red sandstone palace with museum",
        "National Camel Research Center - Unique camel breeding farm",
        "Rampuria Havelis - Stunning merchant havelis with intricate facades",
        "Bhandasar Jain Temple - Ancient temple with beautiful frescoes"
      ],
      itinerary: [
        { time: "Day 1 - 07:00 AM", activity: "Pickup from Jaipur", duration: "5-6 hours drive", description: "Drive through Shekhawati region" },
        { time: "Day 1 - 01:00 PM", activity: "Hotel check-in and lunch", duration: "1.5 hours" },
        { time: "Day 1 - 02:30 PM", activity: "Junagarh Fort exploration", duration: "2.5 hours", description: "Palace museums, Anup Mahal, Phool Mahal" },
        { time: "Day 1 - 05:00 PM", activity: "Rampuria Havelis walk", duration: "1 hour", description: "Admire ornate architecture" },
        { time: "Day 1 - 06:00 PM", activity: "Local market and snacks", duration: "1 hour", description: "Try famous Bikaneri bhujia" },
        { time: "Day 1 - 07:00 PM", activity: "Dinner and overnight stay", duration: "" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Karni Mata Temple visit", duration: "2 hours", description: "30km from Bikaner, sacred rat temple" },
        { time: "Day 2 - 11:00 AM", activity: "National Camel Research Center", duration: "1.5 hours", description: "Camel ride, farm tour" },
        { time: "Day 2 - 12:30 PM", activity: "Lallgarh Palace & Museum", duration: "1 hour" },
        { time: "Day 2 - 01:30 PM", activity: "Checkout and lunch", duration: "1 hour" },
        { time: "Day 2 - 02:30 PM", activity: "Return journey to Jaipur", duration: "5-6 hours" }
      ],
      inclusions: [
        "Round trip AC vehicle with fuel",
        "Driver allowance",
        "Parking and toll charges",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹2000-4000 per night)",
        "Meals and refreshments",
        "Entry fees to forts and museums (₹200-500)",
        "Karni Mata Temple offering and photography (₹50-100)",
        "Camel Research Center entry (₹100-200)",
        "Guide charges (₹1000-1500)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March (desert winters are pleasant)",
      difficulty: "Easy",
      category: "Heritage & Desert Culture",
      heroImage: "/images/sightseeing/bikaner_hero.jpg",
      heroImagePrompt: "Magnificent Junagarh Fort Bikaner with red sandstone and marble architecture, ornate balconies and windows, intricate carvings, desert fort complex, blue sky, Rajput architectural marvel, grand facade, wide-angle photography, 8k quality",
      images: [],
      additionalImages: [
        "Karni Mata Rat Temple interior with thousands of sacred rats, devotees feeding rats, unique religious site, silver gates, spiritual atmosphere",
        "Lallgarh Palace red sandstone structure with Indo-Saracenic architecture, beautiful lattice work, royal residence turned heritage hotel, manicured gardens",
        "National Camel Research Center with camels and handlers, camel breeding farm, unique tourist attraction, desert animals, camel ride opportunity",
        "Rampuria Havelis ornate facade with intricate stone carvings, red sandstone merchant houses, traditional Rajasthani architecture, historic quarter",
        "Anup Mahal inside Junagarh Fort with gold leaf paintings, mirror work, royal durbar hall, red and gold interiors, opulent palace chamber"
      ],
      tips: [
        "Remove shoes at Karni Mata Temple (rats are sacred)",
        "Wear socks at rat temple for hygiene",
        "Try authentic Bikaneri bhujia and rasgulla",
        "Early morning visit to Camel Research Center is best",
        "Photography charges extra at most monuments",
        "Junagarh Fort has air-conditioned museum rooms",
        "Desert gets very cold in winter nights - carry warm clothes"
      ],
      reviews: { averageRating: 4.5, totalReviews: 1345 },
      coordinates: { latitude: 28.0229, longitude: 73.3119 },
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
    },

    {
      id: 34,
      name: "Agra to Bharatpur (Same Day)",
      slug: "agra-to-bharatpur-same-day",
      shortDescription: "Bird watching paradise at Keoladeo National Park with diverse avian species",
      fullDescription: "Enjoy a day trip from Agra to Bharatpur, home to the famous Keoladeo Ghana National Park (Bharatpur Bird Sanctuary), a UNESCO World Heritage Site. Experience world-class bird watching with over 370 bird species, explore the historic Bharatpur Fort (Lohagarh), and enjoy peaceful nature walks. Perfect for nature lovers, photographers, and bird enthusiasts.",
      duration: "Same Day (6-8 hours)",
      price: {
        sedan: 3000,
        suv: 4500,
        tempoTraveller: 6500,
        currency: "INR"
      },
      highlights: [
        "Keoladeo National Park - UNESCO World Heritage bird sanctuary",
        "370+ bird species including Siberian cranes (winter)",
        "Lohagarh Fort - Iron Fort with impregnable defenses",
        "Cycle rickshaw safari through wetlands",
        "Photography opportunities for wildlife enthusiasts",
        "Government Museum Bharatpur"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pick up from Agra", duration: "1 hour drive", description: "Scenic drive to Bharatpur (55 km)" },
        { time: "08:00 AM", activity: "Arrival at Keoladeo National Park", duration: "30 mins", description: "Entry and rickshaw arrangement" },
        { time: "08:30 AM", activity: "Bird watching safari", duration: "3 hours", description: "Cycle rickshaw tour through sanctuary, spot migratory birds, herons, eagles" },
        { time: "11:30 AM", activity: "Nature walk and photography", duration: "1 hour", description: "Explore wetlands and forest trails" },
        { time: "12:30 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "01:30 PM", activity: "Lohagarh Fort visit", duration: "1.5 hours", description: "Explore historic fort, museum, and ramparts" },
        { time: "03:00 PM", activity: "Government Museum (optional)", duration: "45 mins", description: "Local artifacts and sculptures" },
        { time: "03:45 PM", activity: "Return journey to Agra", duration: "1 hour" },
        { time: "04:45 PM", activity: "Drop off at Agra", duration: "15 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Keoladeo National Park entry (₹200 for Indians, ₹500 for foreigners)",
        "Cycle rickshaw charges (₹100-150 per hour)",
        "Guide (₹500 extra)",
        "Lohagarh Fort entry (₹50)",
        "Meals and refreshments",
        "Binoculars rental (₹50)",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March (best for migratory birds)",
      difficulty: "Easy",
      category: "Wildlife & Nature",
      heroImage: "/images/sightseeing/Bharatpur_hero_section.jpg",
      heroImagePrompt: "Stunning view of Keoladeo Ghana National Park Bharatpur with painted storks nesting on trees, wetlands with lily pads, migratory birds flying, lush green landscape, cycle rickshaw on pathway, early morning golden light, wildlife photography, vibrant colors, HDR",
      images: [
        "/images/sightseeing/keoladeo_birds.jpg",
        "/images/sightseeing/bharatpur_sanctuary.jpg",
        "/images/sightseeing/lohagarh_fort.jpg",
        "/images/sightseeing/bird_watching.jpg"
      ],
      additionalImages: [
        "Painted storks and herons nesting on trees in Keoladeo sanctuary, colorful plumage, wetland background, natural habitat, bird photography",
        "Cycle rickshaw safari through Bharatpur bird sanctuary, narrow pathway, dense trees, tourists with binoculars, peaceful nature experience",
        "Lohagarh Fort (Iron Fort) Bharatpur with massive gates, bastions, moat, historic architecture, blue sky",
        "Siberian cranes at Keoladeo wetlands, white birds wading in water, reflection, winter migratory birds, rare species"
      ],
      tips: [
        "Best time for bird watching: early morning (6-9 AM)",
        "Carry binoculars for better viewing",
        "Hire a local guide for bird identification",
        "Cycle rickshaws are eco-friendly and quiet - best for bird watching",
        "Wear neutral colors and comfortable walking shoes",
        "Winter months (Nov-Feb) best for migratory birds",
        "Carry camera with zoom lens for photography"
      ],
      reviews: { averageRating: 4.6, totalReviews: 876 },
      coordinates: { latitude: 27.1584, longitude: 77.5277 },
      groupSize: "1-15 persons",
      accessibility: "Partially accessible - rickshaw safaris available"
    },

    {
      id: 35,
      name: "Agra to Fatehpur Sikri (Same Day)",
      slug: "agra-to-fatehpur-sikri-same-day",
      shortDescription: "Explore the abandoned Mughal city, UNESCO World Heritage Site with stunning architecture",
      fullDescription: "Discover the magnificent abandoned city of Fatehpur Sikri, built by Emperor Akbar in 1571. This UNESCO World Heritage Site showcases perfect blend of Hindu, Islamic, and Persian architecture. Explore the grand Buland Darwaza, beautiful Jama Masjid, Panch Mahal, and other palatial buildings. A must-visit for history buffs and architecture enthusiasts.",
      duration: "Same Day (5-6 hours)",
      price: {
        sedan: 2800,
        suv: 4200,
        tempoTraveller: 6000,
        currency: "INR"
      },
      highlights: [
        "Buland Darwaza - World's tallest gateway (54 meters)",
        "Jama Masjid - Beautiful mosque with intricate carvings",
        "Panch Mahal - Five-storied palace with 176 columns",
        "Diwan-i-Khas - Hall of Private Audience",
        "Tomb of Salim Chishti - White marble mausoleum",
        "Jodha Bai Palace - Blend of Hindu-Muslim architecture"
      ],
      itinerary: [
        { time: "08:00 AM", activity: "Pick up from Agra", duration: "1 hour drive", description: "Drive to Fatehpur Sikri (40 km)" },
        { time: "09:00 AM", activity: "Arrival and entry", duration: "30 mins", description: "Ticket purchase, guide arrangement" },
        { time: "09:30 AM", activity: "Buland Darwaza and Jama Masjid", duration: "1 hour", description: "Explore grand gateway and mosque complex" },
        { time: "10:30 AM", activity: "Salim Chishti Tomb visit", duration: "30 mins", description: "White marble shrine, tie threads for wishes" },
        { time: "11:00 AM", activity: "Diwan-i-Khas exploration", duration: "45 mins", description: "Ornate central pillar, Akbar's throne" },
        { time: "11:45 AM", activity: "Panch Mahal visit", duration: "45 mins", description: "Five-story palace, panoramic views" },
        { time: "12:30 PM", activity: "Jodha Bai Palace", duration: "45 mins", description: "Royal residence with courtyards" },
        { time: "01:15 PM", activity: "Lunch break", duration: "45 mins" },
        { time: "02:00 PM", activity: "Return journey to Agra", duration: "1 hour" },
        { time: "03:00 PM", activity: "Drop off at Agra", duration: "15 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Fatehpur Sikri entry (₹600 for foreigners, ₹50 for Indians)",
        "Tour guide (₹500 extra, highly recommended)",
        "Meals and refreshments",
        "Photography charges if any",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March (cooler weather)",
      difficulty: "Moderate (involves walking and stairs)",
      category: "Heritage & Culture",
      heroImage: "/images/sightseeing/Fatehpur_Sikri_hero_section.jpg",
      heroImagePrompt: "Majestic Buland Darwaza (Gate of Victory) at Fatehpur Sikri, towering red sandstone gateway, intricate Islamic calligraphy, people walking up steps for scale, dramatic architectural perspective, blue sky, UNESCO World Heritage Site, golden hour photography, HDR",
      images: [
        "/images/sightseeing/buland_darwaza.jpg",
        "/images/sightseeing/panch_mahal.jpg",
        "/images/sightseeing/salim_chishti_tomb.jpg",
        "/images/sightseeing/jodha_bai_palace.jpg"
      ],
      additionalImages: [
        "Buland Darwaza massive gateway from below, red sandstone, Persian inscriptions, stairs leading up, monumental architecture",
        "Panch Mahal five-storied palace with 176 columns, symmetrical design, open pavilions, sunset lighting, architectural marvel",
        "Salim Chishti Tomb with white marble, intricate jali work (lattice screens), pilgrims tying threads, peaceful courtyard",
        "Diwan-i-Khas central ornate pillar with carved brackets, Akbar's discussion hall, Indo-Persian architecture"
      ],
      tips: [
        "Wear comfortable shoes - lots of walking involved",
        "Hire a guide to understand the historical significance",
        "Carry water - can get hot during day",
        "Start early to avoid crowds and heat",
        "Photography allowed but some areas may have restrictions",
        "Respect religious site - modest dress recommended",
        "Allow 3-4 hours to explore properly"
      ],
      reviews: { averageRating: 4.7, totalReviews: 2145 },
      coordinates: { latitude: 27.0945, longitude: 77.6619 },
      groupSize: "1-15 persons",
      accessibility: "Limited due to stairs and uneven surfaces"
    },

    {
      id: 36,
      name: "Agra to Mathura-Vrindavan (Same Day)",
      slug: "agra-to-mathura-vrindavan-same-day",
      shortDescription: "Spiritual journey to Lord Krishna's birthplace with ancient temples and ghats",
      fullDescription: "Experience a divine day trip from Agra to the holy cities of Mathura and Vrindavan, the birthplace and childhood home of Lord Krishna. Visit sacred temples including Krishna Janmabhoomi, Dwarkadhish Temple, ISKCON Temple, and Banke Bihari Temple. Witness evening aarti at ghats, explore vibrant bazaars, and immerse yourself in devotional atmosphere. Perfect for spiritual seekers and culture enthusiasts.",
      duration: "Same Day (8-10 hours)",
      price: {
        sedan: 3500,
        suv: 5000,
        tempoTraveller: 7500,
        currency: "INR"
      },
      highlights: [
        "Krishna Janmabhoomi - Lord Krishna's birthplace",
        "Dwarkadhish Temple - Magnificent architecture",
        "Banke Bihari Temple - Most revered in Vrindavan",
        "ISKCON Temple Vrindavan - Modern spiritual complex",
        "Vishram Ghat - Sacred bathing ghat on Yamuna",
        "Prem Mandir - Illuminated marble temple",
        "Govardhan Hill - Sacred hill lifted by Krishna"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pick up from Agra", duration: "1.5 hours drive", description: "Drive to Mathura (58 km)" },
        { time: "08:30 AM", activity: "Krishna Janmabhoomi visit", duration: "1.5 hours", description: "Birthplace temple, security check, darshan" },
        { time: "10:00 AM", activity: "Dwarkadhish Temple", duration: "1 hour", description: "Beautiful temple, morning aarti" },
        { time: "11:00 AM", activity: "Vishram Ghat", duration: "45 mins", description: "Sacred ghat, feed fish, boat ride (optional)" },
        { time: "11:45 AM", activity: "Drive to Vrindavan", duration: "30 mins", description: "15 km to Vrindavan" },
        { time: "12:15 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "01:15 PM", activity: "Banke Bihari Temple", duration: "1.5 hours", description: "Most famous temple, expect crowds" },
        { time: "02:45 PM", activity: "ISKCON Temple Vrindavan", duration: "1 hour", description: "Peaceful complex, museum" },
        { time: "03:45 PM", activity: "Prem Mandir visit", duration: "1 hour", description: "Beautiful marble temple, fountains" },
        { time: "04:45 PM", activity: "Evening shopping at local bazaar", duration: "45 mins", description: "Krishna idols, religious items" },
        { time: "05:30 PM", activity: "Return journey to Agra", duration: "1.5 hours" },
        { time: "07:00 PM", activity: "Drop off at Agra", duration: "15 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Temple donations (optional)",
        "Guide (₹800 extra)",
        "Meals and prasad",
        "Boat ride at Vishram Ghat (₹50-100)",
        "Shopping expenses",
        "Camera fees at some temples",
        "Personal expenses"
      ],
      bestTimeToVisit: "October to March, Janmashtami festival (Aug-Sep) is special",
      difficulty: "Easy to Moderate",
      category: "Spiritual & Religious",
      heroImage: "/images/sightseeing/Mathura_Vrindavan_hero_section.jpg",
      heroImagePrompt: "Spectacular view of Banke Bihari Temple Vrindavan with devotees, colorful decorations, bells, Krishna deity in background, evening aarti atmosphere, vibrant colors, spiritual energy, traditional architecture, devotional photography, HDR",
      images: [
        "/images/sightseeing/krishna_janmabhoomi.jpg",
        "/images/sightseeing/banke_bihari_temple.jpg",
        "/images/sightseeing/prem_mandir.jpg",
        "/images/sightseeing/vishram_ghat.jpg"
      ],
      additionalImages: [
        "Krishna Janmabhoomi temple complex, birthplace shrine, devotees in queue, religious atmosphere, traditional architecture",
        "Banke Bihari Temple crowded with devotees, colorful flowers, bells, priests, intense devotional energy",
        "Prem Mandir illuminated at night, white marble temple, colorful lights, musical fountain, spectacular view",
        "Vishram Ghat on Yamuna river with devotees bathing, temple spires, boats, evening aarti, spiritual ambiance"
      ],
      tips: [
        "Dress modestly - no shorts or sleeveless in temples",
        "Remove shoes before entering temples",
        "Banke Bihari Temple can be very crowded - go early",
        "Photography restricted in many temples",
        "Keep valuables safe in crowded areas",
        "Try local pedas (sweet) from Mathura",
        "Krishna Janmabhoomi has strict security - no phones/cameras inside",
        "Evening aarti at temples is a must-see experience",
        "Prem Mandir best visited in evening for light show"
      ],
      reviews: { averageRating: 4.8, totalReviews: 3421 },
      coordinates: { latitude: 27.4924, longitude: 77.6737 },
      groupSize: "1-15 persons",
      accessibility: "Moderate - some temples have stairs"
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
    },

    {
      id: 29,
      name: "Chandigarh to Kasauli (Same Day)",
      slug: "chandigarh-to-kasauli-same-day",
      shortDescription: "Escape to the peaceful hill station of Kasauli with colonial charm and pine forests",
      fullDescription: "Enjoy a refreshing day trip from Chandigarh to Kasauli, a charming colonial hill station nestled in the Himalayas. Walk through pine and cedar forests, visit the historic Christ Church, explore the Monkey Point for panoramic views, and stroll along the quiet Mall Road. Perfect for a peaceful getaway from city life.",
      duration: "Same Day (8-10 hours)",
      price: {
        sedan: 4500,
        suv: 6500,
        tempoTraveller: 9000,
        currency: "INR"
      },
      highlights: [
        "Christ Church - Gothic architecture from 1853",
        "Monkey Point (Hanuman Temple) - Highest point with valley views",
        "Mall Road - Colonial charm and local shopping",
        "Sunset Point - Breathtaking Himalayan sunset views",
        "Kasauli Brewery - Asia's oldest distillery",
        "Gilbert Trail - Scenic nature walk through forests"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pick up from Chandigarh", duration: "1.5 hours drive", description: "Scenic drive to Kasauli (65 km)" },
        { time: "08:30 AM", activity: "Arrival at Kasauli, breakfast break", duration: "45 mins" },
        { time: "09:15 AM", activity: "Christ Church visit", duration: "45 mins", description: "Explore historic Gothic church" },
        { time: "10:00 AM", activity: "Monkey Point trek", duration: "1.5 hours", description: "Trek to highest point, Hanuman temple, panoramic views" },
        { time: "11:30 AM", activity: "Mall Road exploration", duration: "1.5 hours", description: "Shopping, cafes, colonial buildings" },
        { time: "01:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "02:00 PM", activity: "Gilbert Trail nature walk", duration: "1.5 hours", description: "Peaceful walk through pine forests" },
        { time: "03:30 PM", activity: "Sunset Point", duration: "1 hour", description: "Spectacular valley and sunset views" },
        { time: "04:30 PM", activity: "Kasauli Brewery visit (optional)", duration: "45 mins" },
        { time: "05:15 PM", activity: "Return journey to Chandigarh", duration: "1.5 hours" },
        { time: "06:45 PM", activity: "Drop off at Chandigarh", duration: "15 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel (Sedan/SUV/Tempo Traveller)",
        "Experienced hill driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Entry fees (₹100-200 total)",
        "Guide (₹800 extra)",
        "Meals and refreshments",
        "Personal expenses",
        "Brewery tasting charges"
      ],
      bestTimeToVisit: "March to June and September to November",
      difficulty: "Easy to Moderate",
      category: "Hill Station & Nature",
      heroImage: "/images/sightseeing/Kasauli_hero_section.jpg",
      heroImagePrompt: "Scenic view of Kasauli hill station with colonial Christ Church, pine forests, mountain ranges in background, misty morning atmosphere, peaceful small town charm, Victorian architecture, winding roads, HDR photography",
      images: [
        "/images/sightseeing/kasauli_christ_church.jpg",
        "/images/sightseeing/kasauli_monkey_point.jpg",
        "/images/sightseeing/kasauli_mall_road.jpg",
        "/images/sightseeing/kasauli_sunset.jpg"
      ],
      additionalImages: [
        "Christ Church Kasauli with Gothic architecture, red brick walls, stained glass windows, surrounded by pine trees, historic colonial building",
        "Monkey Point Kasauli with Hanuman temple, prayer flags, panoramic Himalayan valley views, tourists at viewpoint, dramatic sky",
        "Kasauli Mall Road with colonial-era buildings, quiet street, local shops, pine trees lining road, peaceful atmosphere",
        "Sunset from Kasauli viewpoint with golden light over mountains, silhouettes of trees, valley below, colorful sky"
      ],
      tips: [
        "Kasauli is a vehicle-free zone in many areas, be prepared to walk",
        "Carry comfortable walking shoes",
        "Monkey Point involves steep climb, suitable footwear required",
        "Weather can be cool even in summer, carry light jacket",
        "Mall Road is best explored on foot"
      ],
      reviews: { averageRating: 4.6, totalReviews: 892 },
      coordinates: { latitude: 30.8984, longitude: 76.9656 },
      groupSize: "1-15 persons",
      accessibility: "Limited due to hilly terrain and stairs"
    },

    {
      id: 30,
      name: "Chandigarh to Dharamshala (2 Days)",
      slug: "chandigarh-to-dharamshala-2-days",
      shortDescription: "Experience the spiritual home of Dalai Lama with Tibetan culture, monasteries, and Himalayan views",
      fullDescription: "Embark on a 2-day spiritual and scenic journey from Chandigarh to Dharamshala, the residence of the Dalai Lama. Explore vibrant Tibetan monasteries, visit the sacred Dalai Lama Temple, walk through colorful McLeod Ganj markets, experience the serene Bhagsunag waterfall and temple, and enjoy panoramic views of Dhauladhar mountain ranges. Perfect blend of spirituality, culture, and natural beauty.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9500,
        suv: 12500,
        tempoTraveller: 18000,
        currency: "INR"
      },
      highlights: [
        "Dalai Lama Temple Complex - Spiritual heart of Tibetan Buddhism",
        "McLeod Ganj - Little Lhasa with Tibetan culture and markets",
        "Bhagsunag Waterfall - Scenic trek to beautiful waterfall",
        "Namgyal Monastery - Largest Tibetan monastery outside Tibet",
        "Triund Trek Base - Gateway to popular trek",
        "Norbulingka Institute - Tibetan art and culture preservation"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pick up from Chandigarh", duration: "5-6 hours drive", description: "Scenic drive to Dharamshala (240 km)" },
        { time: "Day 1 - 12:00 PM", activity: "Arrival and hotel check-in", duration: "1 hour" },
        { time: "Day 1 - 01:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "Day 1 - 02:00 PM", activity: "Dalai Lama Temple visit", duration: "1.5 hours", description: "Explore temple complex, peaceful meditation" },
        { time: "Day 1 - 03:30 PM", activity: "Namgyal Monastery", duration: "1 hour", description: "Largest Tibetan monastery, prayer wheels" },
        { time: "Day 1 - 04:30 PM", activity: "McLeod Ganj market exploration", duration: "2 hours", description: "Tibetan shops, cafes, street food" },
        { time: "Day 1 - 06:30 PM", activity: "Evening at leisure, dinner", duration: "Rest of day" },
        { time: "Day 2 - 08:00 AM", activity: "Breakfast and check-out", duration: "1 hour" },
        { time: "Day 2 - 09:00 AM", activity: "Bhagsunag Temple and Waterfall trek", duration: "2.5 hours", description: "Temple visit and scenic waterfall trek" },
        { time: "Day 2 - 11:30 AM", activity: "Norbulingka Institute visit", duration: "1.5 hours", description: "Tibetan art, culture, beautiful gardens" },
        { time: "Day 2 - 01:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "Day 2 - 02:00 PM", activity: "Cricket Stadium visit (optional)", duration: "30 mins", description: "World's highest cricket stadium with mountain views" },
        { time: "Day 2 - 02:30 PM", activity: "Return journey to Chandigarh", duration: "5-6 hours" },
        { time: "Day 2 - 08:00 PM", activity: "Drop off at Chandigarh", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel for entire journey",
        "Experienced hill driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹1500-3000 per night)",
        "Entry fees (₹100-300 total)",
        "Guide (₹1500 per day extra)",
        "Meals (breakfast, lunch, dinner)",
        "Personal expenses",
        "Triund trek if opted"
      ],
      bestTimeToVisit: "March to June and September to November",
      difficulty: "Moderate",
      category: "Spiritual & Culture",
      heroImage: "/images/sightseeing/Dharamshala_hero_section.jpg",
      heroImagePrompt: "Stunning panoramic view of McLeod Ganj Dharamshala with Dalai Lama Temple complex, colorful Tibetan prayer flags, snow-capped Dhauladhar mountain ranges in background, Tibetan monks walking, vibrant cultural atmosphere, golden hour lighting, HDR photography",
      images: [
        "/images/sightseeing/dalai_lama_temple.jpg",
        "/images/sightseeing/mcleod_ganj.jpg",
        "/images/sightseeing/bhagsunag_waterfall.jpg",
        "/images/sightseeing/namgyal_monastery.jpg"
      ],
      additionalImages: [
        "Dalai Lama Temple with golden roof, colorful Tibetan prayer flags, devotees circumambulating, peaceful courtyard, mountain backdrop",
        "McLeod Ganj main square with Tibetan restaurants, colorful shops, monks in maroon robes, bustling market, Himalayan culture",
        "Bhagsunag Waterfall cascading down rocks, trekkers enjoying, lush green surroundings, natural pool, mountain scenery",
        "Namgyal Monastery with large prayer wheels, monks in discussion, Tibetan architecture, spiritual atmosphere, colorful decorations"
      ],
      tips: [
        "Respect Tibetan culture and Buddhism - remove shoes at temples",
        "Dalai Lama teachings happen occasionally - check schedule",
        "Bhagsunag trek requires comfortable shoes",
        "Weather can change quickly - carry rain gear and warm clothes",
        "Try Tibetan momos and thukpa in McLeod Ganj",
        "Book accommodation in advance during peak season"
      ],
      reviews: { averageRating: 4.8, totalReviews: 1456 },
      coordinates: { latitude: 32.2190, longitude: 76.3234 },
      groupSize: "1-15 persons",
      accessibility: "Moderate due to hilly terrain, limited wheelchair access"
    },

    {
      id: 31,
      name: "Chandigarh to Dalhousie (2 Days)",
      slug: "chandigarh-to-dalhousie-2-days",
      shortDescription: "Discover the Scottish charm of Dalhousie with colonial architecture, pine valleys, and Khajjiar meadows",
      fullDescription: "Experience a 2-day journey from Chandigarh to Dalhousie, a beautiful hill station known for its colonial charm and natural beauty. Explore the picturesque Khajjiar (Mini Switzerland of India), visit historic churches, walk through pine-covered valleys, enjoy panoramic views from Dainkund Peak, and discover the charm of Panchpula waterfall. Perfect getaway for nature lovers and peace seekers.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9500,
        suv: 12500,
        tempoTraveller: 18000,
        currency: "INR"
      },
      highlights: [
        "Khajjiar - Mini Switzerland with lush meadows",
        "St. John's Church - Gothic architecture from 1863",
        "Panchpula - Scenic waterfall and picnic spot",
        "Dainkund Peak - Highest peak with valley views",
        "Kalatop Wildlife Sanctuary - Dense deodar forests",
        "Subhash Baoli - Peaceful spot with natural spring"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pick up from Chandigarh", duration: "6-7 hours drive", description: "Scenic drive to Dalhousie (320 km)" },
        { time: "Day 1 - 01:00 PM", activity: "Arrival and hotel check-in", duration: "1 hour" },
        { time: "Day 1 - 02:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "Day 1 - 03:00 PM", activity: "Panchpula visit", duration: "1.5 hours", description: "Waterfall and memorial, nature walk" },
        { time: "Day 1 - 04:30 PM", activity: "Subhash Baoli", duration: "45 mins", description: "Natural spring, peaceful surroundings" },
        { time: "Day 1 - 05:15 PM", activity: "Mall Road Dalhousie", duration: "1.5 hours", description: "Evening walk, shopping, cafes" },
        { time: "Day 1 - 06:45 PM", activity: "St. John's Church visit", duration: "45 mins", description: "Gothic architecture, evening prayers" },
        { time: "Day 1 - 07:30 PM", activity: "Dinner and overnight stay", duration: "Rest of day" },
        { time: "Day 2 - 07:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 2 - 08:00 AM", activity: "Excursion to Khajjiar", duration: "4 hours", description: "Mini Switzerland, horse riding, zorbing, lake visit" },
        { time: "Day 2 - 12:00 PM", activity: "Kalatop Wildlife Sanctuary", duration: "1.5 hours", description: "Nature trek through deodar forests" },
        { time: "Day 2 - 01:30 PM", activity: "Check-out and lunch", duration: "1 hour" },
        { time: "Day 2 - 02:30 PM", activity: "Return journey to Chandigarh", duration: "6-7 hours" },
        { time: "Day 2 - 09:00 PM", activity: "Drop off at Chandigarh", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel for entire journey",
        "Experienced hill driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Hotel accommodation (₹1500-3000 per night)",
        "Entry fees (₹100-200 total)",
        "Guide (₹1200 per day extra)",
        "Meals (breakfast, lunch, dinner)",
        "Horse riding and activities at Khajjiar (₹300-800)",
        "Personal expenses"
      ],
      bestTimeToVisit: "March to June for pleasant weather, December to February for snow",
      difficulty: "Easy to Moderate",
      category: "Hill Station & Nature",
      heroImage: "/images/sightseeing/Dalhousie_hero_section.jpg",
      heroImagePrompt: "Breathtaking panoramic view of Khajjiar meadow with lush green grass, grazing horses, dense pine forests surrounding, snow-capped mountains in distance, Khajjiar Lake visible, blue sky with clouds, mini Switzerland of India, landscape photography, vibrant colors, HDR",
      images: [
        "/images/sightseeing/khajjiar_meadow.jpg",
        "/images/sightseeing/dalhousie_st_johns.jpg",
        "/images/sightseeing/panchpula_waterfall.jpg",
        "/images/sightseeing/dainkund_peak.jpg"
      ],
      additionalImages: [
        "Khajjiar meadow with green carpet-like grass, Khajjiar Lake, colorful flowers, horses grazing, pine trees, mountain backdrop, tourists enjoying",
        "St. John's Church Dalhousie with Victorian Gothic architecture, stone building, beautiful stained glass, pine trees around, historic landmark",
        "Panchpula waterfall cascading over rocks, lush greenery, colonial-era bridge, stream flowing, peaceful nature spot",
        "Dainkund Peak viewpoint with 360-degree valley views, winding road, deodar forests, Himalayan ranges, dramatic sky"
      ],
      tips: [
        "Khajjiar is 22 km from Dalhousie - keep time for travel",
        "Carry warm clothes as temperature drops in evening",
        "Horse riding at Khajjiar - negotiate rates beforehand",
        "Mall Road Dalhousie is best for evening walks",
        "Book hotel with valley view for best experience",
        "Try local Himachali cuisine"
      ],
      reviews: { averageRating: 4.7, totalReviews: 1234 },
      coordinates: { latitude: 32.5445, longitude: 75.9470 },
      groupSize: "1-15 persons",
      accessibility: "Moderate due to hilly terrain, limited wheelchair access"
    },

    {
      id: 32,
      name: "Chandigarh to Kasol (2 Days)",
      slug: "chandigarh-to-kasol-2-days",
      shortDescription: "Experience hippie paradise of Kasol with Parvati Valley, cafes, and Himalayan treks",
      fullDescription: "Embark on a 2-day adventure from Chandigarh to Kasol, the Israeli backpacker hub nestled in the beautiful Parvati Valley. Explore the charming village of Kasol, trek to Chalal for scenic views, visit the ancient Manikaran hot springs and gurudwara, experience riverside camping, and enjoy the cafe culture. Perfect for young travelers, nature lovers, and trekking enthusiasts.",
      duration: "2 Days / 1 Night",
      price: {
        sedan: 9500,
        suv: 12500,
        tempoTraveller: 18000,
        currency: "INR"
      },
      highlights: [
        "Kasol Village - Hippie paradise with cafes and culture",
        "Manikaran Sahib - Hot springs and holy gurudwara",
        "Chalal Trek - Scenic village trek along Parvati River",
        "Parvati River - Crystal clear mountain river",
        "Israeli Cafe Culture - International cuisine and vibes",
        "Tosh Village - Optional trek to scenic hamlet"
      ],
      itinerary: [
        { time: "Day 1 - 06:00 AM", activity: "Pick up from Chandigarh", duration: "7-8 hours drive", description: "Scenic drive to Kasol via Kullu Valley (310 km)" },
        { time: "Day 1 - 02:00 PM", activity: "Arrival at Kasol, check-in", duration: "1 hour" },
        { time: "Day 1 - 03:00 PM", activity: "Lunch at Israeli cafe", duration: "1 hour", description: "Experience unique cafe culture" },
        { time: "Day 1 - 04:00 PM", activity: "Kasol market walk", duration: "1.5 hours", description: "Shopping, cafes, riverside walk" },
        { time: "Day 1 - 05:30 PM", activity: "Chalal trek", duration: "2 hours", description: "Short trek to scenic village (30 mins each way + exploration)" },
        { time: "Day 1 - 07:30 PM", activity: "Dinner and leisure", duration: "Rest of day", description: "Enjoy bonfire and music at camps" },
        { time: "Day 2 - 07:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 2 - 08:00 AM", activity: "Excursion to Manikaran", duration: "3.5 hours", description: "Hot springs, Gurudwara darshan, langar, Ram Temple" },
        { time: "Day 2 - 11:30 AM", activity: "Parvati River activities", duration: "1.5 hours", description: "Riverside walk, photography, relaxation" },
        { time: "Day 2 - 01:00 PM", activity: "Check-out and lunch", duration: "1 hour" },
        { time: "Day 2 - 02:00 PM", activity: "Return journey to Chandigarh", duration: "7-8 hours" },
        { time: "Day 2 - 10:00 PM", activity: "Drop off at Chandigarh", duration: "30 mins" }
      ],
      inclusions: [
        "AC vehicle with fuel for entire journey",
        "Experienced mountain driver",
        "Parking and toll charges",
        "Bottled water",
        "All taxes"
      ],
      exclusions: [
        "Hotel/camping accommodation (₹1000-2500 per night)",
        "Entry fees if any",
        "Guide (₹1000 per day extra)",
        "Meals (breakfast, lunch, dinner)",
        "Trekking to Tosh or Kheerganga (optional)",
        "Personal expenses"
      ],
      bestTimeToVisit: "March to June and September to November (avoid monsoon)",
      difficulty: "Moderate (includes short treks)",
      category: "Adventure & Backpacking",
      heroImage: "/images/sightseeing/Kasol_hero_section.jpg",
      heroImagePrompt: "Stunning view of Kasol village along Parvati River with crystal clear turquoise water, pine-covered mountains, wooden cafes, colorful prayer flags, backpackers, hippie vibe, sunny day, dramatic Himalayan peaks in background, landscape photography, HDR",
      images: [
        "/images/sightseeing/kasol_village.jpg",
        "/images/sightseeing/manikaran_sahib.jpg",
        "/images/sightseeing/parvati_river.jpg",
        "/images/sightseeing/chalal_trek.jpg"
      ],
      additionalImages: [
        "Kasol main market with Israeli cafes, colorful shops, backpackers, mountain backdrop, relaxed atmosphere, Parvati River flowing nearby",
        "Manikaran Sahib Gurudwara with hot springs, steam rising, devotees bathing, golden dome, pilgrims, spiritual atmosphere",
        "Parvati River with crystal clear turquoise water, smooth rocks, pine trees, mountains, trekkers by riverside, pristine nature",
        "Chalal village with wooden houses, narrow trail, bridge over stream, pine forests, peaceful hamlet, mountain views"
      ],
      tips: [
        "Kasol is cash-only for most places - carry enough cash",
        "Try Israeli and continental food at cafes",
        "Chalal trek involves river crossing on narrow bridge",
        "Manikaran has hot springs - carry towel if you want to bathe",
        "Book camping in advance during peak season",
        "Respect local culture despite hippie atmosphere",
        "Road can be narrow and winding - prone to motion sickness"
      ],
      reviews: { averageRating: 4.7, totalReviews: 1876 },
      coordinates: { latitude: 32.0102, longitude: 77.3147 },
      groupSize: "1-15 persons",
      accessibility: "Difficult due to treks and terrain - not wheelchair accessible"
    },

    {
      id: 33,
      name: "Chandigarh to Spiti Valley (3-4 Days)",
      slug: "chandigarh-to-spiti-valley-3-4-days",
      shortDescription: "Epic Himalayan adventure through high-altitude cold desert with ancient monasteries and stunning landscapes",
      fullDescription: "Embark on an unforgettable 3-4 day journey from Chandigarh to the mystical Spiti Valley, one of India's most remote and beautiful regions. Travel through high mountain passes, visit ancient Buddhist monasteries like Key and Tabo, explore the world's highest villages including Kibber and Langza, witness the stunning Chandratal Lake, and experience the unique culture of this trans-Himalayan region. Perfect for adventure seekers and those looking for offbeat destinations.",
      duration: "3-4 Days / 2-3 Nights",
      price: {
        sedan: 18000,
        suv: 24000,
        tempoTraveller: 32000,
        currency: "INR"
      },
      highlights: [
        "Key Monastery - 1000-year-old hilltop monastery",
        "Chandratal Lake - Moon Lake at 14,100 ft altitude",
        "Kaza Town - Capital of Spiti Valley",
        "Kibber Village - One of world's highest villages",
        "Tabo Monastery - UNESCO site, Ajanta of the Himalayas",
        "Pin Valley National Park - Snow leopard habitat",
        "Langza - Fossil village with Buddha statue",
        "Kunzum Pass - 15,060 ft high mountain pass"
      ],
      itinerary: [
        { time: "Day 1 - 05:00 AM", activity: "Pick up from Chandigarh", duration: "10-11 hours drive", description: "Drive to Kalpa via Shimla-Rampur route (380 km)" },
        { time: "Day 1 - 04:00 PM", activity: "Arrival at Kalpa, check-in", duration: "1 hour", description: "Acclimatization at 9,711 ft" },
        { time: "Day 1 - 05:00 PM", activity: "Kalpa monastery and sunset point", duration: "2 hours", description: "Kinnaur Kailash views" },
        { time: "Day 1 - 07:00 PM", activity: "Dinner and overnight stay", duration: "Rest of day" },
        { time: "Day 2 - 07:00 AM", activity: "Breakfast and check-out", duration: "1 hour" },
        { time: "Day 2 - 08:00 AM", activity: "Drive to Kaza", duration: "8-9 hours", description: "Via Nako, crossing into Spiti Valley (200 km)" },
        { time: "Day 2 - 11:00 AM", activity: "Nako Lake stop", duration: "45 mins", description: "Scenic high-altitude lake" },
        { time: "Day 2 - 05:00 PM", activity: "Arrival at Kaza, check-in", duration: "1 hour" },
        { time: "Day 2 - 06:00 PM", activity: "Explore Kaza market", duration: "1.5 hours" },
        { time: "Day 2 - 07:30 PM", activity: "Dinner and overnight", duration: "Rest of day" },
        { time: "Day 3 - 08:00 AM", activity: "Breakfast", duration: "1 hour" },
        { time: "Day 3 - 09:00 AM", activity: "Key Monastery visit", duration: "2 hours", description: "Largest monastery in Spiti" },
        { time: "Day 3 - 11:00 AM", activity: "Kibber village", duration: "1.5 hours", description: "One of highest motorable villages" },
        { time: "Day 3 - 12:30 PM", activity: "Lunch at local dhaba", duration: "1 hour" },
        { time: "Day 3 - 01:30 PM", activity: "Langza fossil village", duration: "1.5 hours", description: "Buddha statue, fossil hunting" },
        { time: "Day 3 - 03:00 PM", activity: "Hikkim & Komic villages", duration: "2 hours", description: "World's highest post office" },
        { time: "Day 3 - 05:00 PM", activity: "Return to Kaza", duration: "1 hour" },
        { time: "Day 3 - 06:00 PM", activity: "Evening at leisure", duration: "Rest of day" },
        { time: "Day 4 - 06:00 AM", activity: "Early breakfast & check-out", duration: "1 hour" },
        { time: "Day 4 - 07:00 AM", activity: "Drive to Manali", duration: "Full day", description: "Via Kunzum Pass, Chandratal Lake, Rohtang Pass (200 km, 8-10 hrs)" },
        { time: "Day 4 - 10:00 AM", activity: "Chandratal Lake stop", duration: "2 hours", description: "Moon Lake - pristine beauty (if accessible)" },
        { time: "Day 4 - 05:00 PM", activity: "Arrival at Manali", duration: "30 mins" },
        { time: "Day 4 - 05:30 PM", activity: "Return to Chandigarh", duration: "7-8 hours drive (250 km)" },
        { time: "Day 4 - 01:00 AM", activity: "Drop off at Chandigarh", duration: "Late night arrival" }
      ],
      inclusions: [
        "AC vehicle (sedan/SUV) for entire journey (tempo traveller recommended)",
        "Experienced mountain driver familiar with Spiti routes",
        "All parking and toll charges",
        "Bottled water",
        "All taxes and permits"
      ],
      exclusions: [
        "Hotel accommodation (₹2000-4000 per night for 2-3 nights)",
        "Monastery entry fees (₹50-100 per monastery)",
        "Guide (₹2000 per day recommended)",
        "All meals (breakfast, lunch, dinner)",
        "Inner line permits for certain areas (₹200-500)",
        "Emergency oxygen (₹500 extra recommended)",
        "Personal expenses and insurance"
      ],
      bestTimeToVisit: "June to September only (roads closed rest of year)",
      difficulty: "Challenging (high altitude, rough roads)",
      category: "Adventure & Extreme",
      heroImage: "/images/sightseeing/Spiti_Valley_hero_section.jpg",
      heroImagePrompt: "Breathtaking panoramic view of Spiti Valley with Key Monastery perched on hilltop, barren cold desert mountains, winding Spiti River, snow-capped peaks, prayer flags, dramatic Himalayan landscape, golden hour lighting, ultra-wide angle, epic scale, HDR photography",
      images: [
        "/images/sightseeing/key_monastery.jpg",
        "/images/sightseeing/chandratal_lake.jpg",
        "/images/sightseeing/langza_village.jpg",
        "/images/sightseeing/spiti_valley_landscape.jpg"
      ],
      additionalImages: [
        "Key Monastery on hilltop with white-washed buildings, prayer flags, Spiti Valley below, barren mountains, blue sky, largest monastery in Spiti",
        "Chandratal Lake (Moon Lake) with crystal clear blue water, surrounding brown mountains, camping tents, reflection, pristine high-altitude beauty at 14,100 ft",
        "Langza village with giant Buddha statue, traditional stone houses, fossil-rich mountains, panoramic valley views, remote Himalayan settlement",
        "Spiti Valley cold desert landscape with winding roads, barren mountains, deep gorges, turquoise Spiti River, dramatic terrain, adventure photography"
      ],
      tips: [
        "ESSENTIAL: Acclimatization is crucial - don't rush, stay hydrated",
        "Carry altitude sickness medication (Diamox) and consult doctor",
        "Roads are extremely rough - SUV or Tempo Traveller recommended",
        "Limited mobile network - inform family beforehand",
        "Carry warm clothes even in summer - temperature drops drastically",
        "Inner line permits required - keep ID proofs handy",
        "ATMs scarce after Kaza - carry sufficient cash",
        "Respect local Buddhist culture and monasteries",
        "Book accommodation in advance during peak season",
        "Travel insurance highly recommended",
        "Chandratal accessible only June-September",
        "Pack medicines, sunscreen, lip balm, and energy bars"
      ],
      reviews: { averageRating: 4.9, totalReviews: 892 },
      coordinates: { latitude: 32.2396, longitude: 78.0474 },
      groupSize: "1-15 persons (smaller groups recommended)",
      accessibility: "Not wheelchair accessible - challenging terrain and high altitude"
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
      images: [
        "/images/sightseeing/jakhoo_temple.jpg",
        "/images/sightseeing/christ church shimla.jpg",
        "/images/sightseeing/Mall road shimla.jpg",
        "/images/sightseeing/the ridge shimla.jpg",
        "/images/sightseeing/kurif_adventure_park.jpg"
      ],
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
      heroImage: "/images/sightseeing/Manali_hero_section.jpg",
      heroImagePrompt: "Spectacular aerial view of Solang Valley Manali with snow-capped mountains, paragliders in sky, colorful parachutes, lush green meadows (summer) or white snow (winter), adventure activities happening below, dramatic Himalayan landscape, action photography, vibrant colors",
      images: [
        "/images/sightseeing/Hidmba_temple.jpg",
        "/images/sightseeing/Old_Manali.jpg",
        "/images/sightseeing/vashisht manali hot springs.jpg",
        "/images/sightseeing/Rohtang Pass.jpg",
        "/images/sightseeing/Paragliding_solang_valley.jpg"
      ],
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
      name: "Haridwar Spiritual Tour",
      slug: "haridwar-spiritual-tour",
      shortDescription: "Divine experience at the Gateway to Gods with sacred ghats and hilltop temples",
      fullDescription: "Immerse yourself in the spiritual essence of Haridwar, one of the seven holiest places in Hinduism. Witness the mesmerizing Ganga Aarti at Har Ki Pauri, visit the hilltop Mansa Devi and Chandi Devi temples via cable car, take a holy dip in the sacred Ganges, and explore ancient temples. Experience the divine energy of this pilgrimage city.",
      duration: "8-10 hours",
      price: {
        sedan: 2200,
        suv: 3500,
        tempoTraveller: 4800,
        currency: "INR"
      },
      highlights: [
        "Har Ki Pauri - Most sacred ghat and Ganga Aarti",
        "Mansa Devi Temple - Cable car ride to hilltop temple",
        "Chandi Devi Temple - Ropeway to goddess temple",
        "Maya Devi Temple - Ancient Shakti Peetha",
        "Bharat Mata Mandir - Unique multi-story temple",
        "Holy dip in sacred Ganges"
      ],
      itinerary: [
        { time: "07:00 AM", activity: "Pick up from hotel", duration: "30 mins" },
        { time: "07:30 AM", activity: "Har Ki Pauri morning visit and holy dip", duration: "1.5 hours", description: "Sacred ghat where Ganga leaves mountains" },
        { time: "09:00 AM", activity: "Mansa Devi Temple cable car", duration: "1.5 hours", description: "Hilltop temple with panoramic city views" },
        { time: "10:30 AM", activity: "Chandi Devi Temple ropeway", duration: "1.5 hours", description: "Ancient goddess temple on Neel Parvat" },
        { time: "12:00 PM", activity: "Lunch break", duration: "1 hour" },
        { time: "01:00 PM", activity: "Maya Devi Temple visit", duration: "45 mins", description: "One of 51 Shakti Peethas" },
        { time: "01:45 PM", activity: "Bharat Mata Mandir", duration: "45 mins", description: "Seven-story temple dedicated to Mother India" },
        { time: "02:30 PM", activity: "Daksh Mahadev Temple", duration: "45 mins" },
        { time: "03:15 PM", activity: "Local market and shopping", duration: "1.5 hours", description: "Buy religious items, rudraksha, brass idols" },
        { time: "04:45 PM", activity: "Rest and refresh", duration: "1 hour" },
        { time: "06:00 PM", activity: "Evening Ganga Aarti at Har Ki Pauri", duration: "1.5 hours", description: "Mesmerizing lamp ceremony with thousands of diyas" },
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
        "Mansa Devi cable car (₹200-250)",
        "Chandi Devi ropeway (₹200-250)",
        "Guide (₹1000 extra)",
        "Meals",
        "Temple offerings and donations"
      ],
      bestTimeToVisit: "September-April, especially during Kumbh Mela",
      difficulty: "Easy",
      category: "Spiritual & Religious",
      heroImage: "/images/sightseeing/Haridwar_hero_section.jpg",
      heroImagePrompt: "Magical evening Ganga Aarti at Har Ki Pauri Haridwar, hundreds of oil lamps floating on Ganges, priests performing ritual with fire, devotees gathered, golden light reflections on water, spiritual atmosphere, long exposure photography, divine ambiance, HDR",
      images: [
        "/images/sightseeing/Mansa_Devi_Temple.jpg"
      ],
      additionalImages: [
        "Har Ki Pauri sacred ghat crowded with devotees taking holy dip, Ganges flowing, temple in background, spiritual bathing scene, pilgrimage atmosphere",
        "Mansa Devi Temple on hilltop with cable car, panoramic view of Haridwar city and Ganges, colorful temple architecture, devotees praying",
        "Chandi Devi Temple accessible by ropeway, goddess shrine on mountain, cable car ascending, devotees gathered, scenic hilltop location",
        "Ganga Aarti ceremony close-up with priests in orange robes holding multi-tiered brass lamps, fire ritual, smoke rising, evening devotion",
        "Bharat Mata Mandir unique multi-story temple with relief map of India, nationalist shrine, architectural uniqueness, cultural landmark"
      ],
      tips: [
        "Ganga Aarti timing varies with sunset (usually 6-7 PM)",
        "Arrive 30 mins early for Aarti to get good spot",
        "Dress modestly, avoid leather items at temples",
        "Take holy dip early morning for less crowd",
        "Keep belongings safe during Aarti - very crowded",
        "Try local street food but stick to hygienic stalls"
      ],
      reviews: { averageRating: 4.8, totalReviews: 3421 },
      coordinates: { latitude: 29.9457, longitude: 78.1642 },
      groupSize: "1-15 persons",
      accessibility: "Partially wheelchair accessible (ghats difficult)"
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
