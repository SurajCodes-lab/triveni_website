// Outstation Cab City Data
// Complete information for 15 city-specific outstation cab pages

const outstationCityData = {
  delhi: {
    slug: "delhi",
    city: "Delhi",
    tagline: "Gateway to North India — 50+ Outstation Routes",
    popularRoutes: [
      { destination: "Agra", distance: 233, fare: 3300, duration: "3h 30m", slug: "delhi-to-agra" },
      { destination: "Jaipur", distance: 281, fare: 3300, duration: "4h 30m", slug: "delhi-to-jaipur" },
      { destination: "Chandigarh", distance: 248, fare: 3300, duration: "4h", slug: "delhi-to-chandigarh" },
      { destination: "Shimla", distance: 342, fare: 3762, duration: "6h 30m", slug: "delhi-to-shimla" },
      { destination: "Manali", distance: 537, fare: 5907, duration: "11h", slug: "delhi-to-manali" },
      { destination: "Haridwar", distance: 228, fare: 3300, duration: "4h 30m", slug: "delhi-to-haridwar" },
      { destination: "Rishikesh", distance: 243, fare: 3300, duration: "5h", slug: "delhi-to-rishikesh" },
      { destination: "Dehradun", distance: 255, fare: 3300, duration: "5h", slug: "delhi-to-dehradun" },
      { destination: "Amritsar", distance: 450, fare: 4950, duration: "7h 30m", slug: "delhi-to-amritsar" },
      { destination: "Lucknow", distance: 556, fare: 6116, duration: "8h", slug: "delhi-to-lucknow" },
      { destination: "Varanasi", distance: 821, fare: 9031, duration: "12h", slug: "delhi-to-varanasi" },
      { destination: "Udaipur", distance: 660, fare: 7260, duration: "10h", slug: "delhi-to-udaipur" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the fare for outstation cabs from Delhi?", answer: "Outstation cab fares from Delhi start at just ₹11/km for Sedan (Swift Dzire/Etios), ₹15/km for SUV (Innova Crysta/Ertiga), and ₹24/km for Tempo Traveller. Minimum billing is 300 km for one-way trips. For example, Delhi to Agra costs approximately ₹3,300 for a sedan." },
      { question: "Can I book a one-way cab from Delhi?", answer: "Yes, one-way cabs from Delhi are available to all major destinations including Agra, Jaipur, Chandigarh, Haridwar, and more. You pay only for a single direction, saving up to 50% compared to round-trip fares. Call 7668570551 for instant booking." },
      { question: "What vehicles are available for outstation trips from Delhi?", answer: "We offer Sedan (Dzire/Etios, 4 passengers), SUV (Innova/Ertiga, 6 passengers), and Tempo Traveller (12-26 passengers). All vehicles are AC, GPS-tracked, and well-maintained. Choose based on group size and comfort preference." },
      { question: "How do I book an outstation cab from Delhi?", answer: "Book via WhatsApp at 7668570551, call us directly, or fill the enquiry form on our website. Share your pickup location in Delhi, destination, travel date, and number of passengers. Instant confirmation available 24/7." },
      { question: "Are toll and parking charges included in the outstation fare from Delhi?", answer: "Toll charges, state entry taxes, and parking fees are extra and paid directly at toll plazas. Driver allowance of ₹300/night applies for trips extending beyond 10 PM. All charges are transparently communicated before booking." },
      { question: "Can I make stops during my outstation trip from Delhi?", answer: "Yes, you can make stops along the way. One-way trips include up to 2 stops. Round trips allow unlimited stops within your itinerary. Additional detour km will be charged at the per-km rate of your vehicle type." },
    ],
    relatedCities: ["agra", "jaipur", "chandigarh", "noida"],
  },

  agra: {
    slug: "agra",
    city: "Agra",
    tagline: "From the City of Taj — Explore North India",
    popularRoutes: [
      { destination: "Delhi", distance: 233, fare: 3300, duration: "3h 30m", slug: "agra-to-delhi" },
      { destination: "Jaipur", distance: 240, fare: 3300, duration: "4h", slug: "agra-to-jaipur" },
      { destination: "Mathura", distance: 58, fare: 3300, duration: "1h 15m", slug: "agra-to-mathura" },
      { destination: "Fatehpur Sikri", distance: 40, fare: 3300, duration: "50m", slug: "agra-to-fatehpur-sikri" },
      { destination: "Lucknow", distance: 333, fare: 3663, duration: "5h 30m", slug: "agra-to-lucknow" },
      { destination: "Varanasi", distance: 605, fare: 6655, duration: "9h 30m", slug: "agra-to-varanasi" },
      { destination: "Gwalior", distance: 120, fare: 3300, duration: "2h", slug: "agra-to-gwalior" },
      { destination: "Chandigarh", distance: 440, fare: 4840, duration: "6h 30m", slug: "agra-to-chandigarh" },
      { destination: "Haridwar", distance: 428, fare: 4708, duration: "7h", slug: "agra-to-haridwar" },
      { destination: "Khajuraho", distance: 400, fare: 4400, duration: "7h", slug: "agra-to-khajuraho" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the cost of hiring an outstation cab from Agra?", answer: "Outstation cabs from Agra start at ₹11/km for Sedan (Dzire/Etios), ₹15/km for SUV (Innova Crysta), and ₹24/km for Tempo Traveller. Minimum 300 km billing for one-way. Agra to Delhi starts at approximately ₹3,300 for sedan." },
      { question: "Is one-way cab available from Agra to Delhi?", answer: "Yes, one-way cabs from Agra to Delhi and other destinations are available. You only pay for the single direction. Agra to Delhi one-way cab starts from ₹3,300 (sedan). Call 7668570551 for instant booking." },
      { question: "Can I do a Golden Triangle tour from Agra?", answer: "Absolutely! We offer Delhi-Agra-Jaipur Golden Triangle cab packages. Multi-day outstation trips with dedicated driver and vehicle. Customizable itinerary with hotel stops. Contact us for a custom quote." },
      { question: "What is included in Agra outstation cab fare?", answer: "The fare includes fuel, driver charges, and vehicle usage. Toll charges, state taxes, parking, and driver night allowance (₹300/night post 10 PM) are extra. No hidden charges with full transparency." },
      { question: "How early should I book an outstation cab from Agra?", answer: "We recommend booking 6-12 hours in advance for guaranteed availability. During peak season (October-March, Taj Mahal season), book 2-3 days ahead. Same-day booking available subject to availability." },
      { question: "Do you provide outstation cabs for Agra sightseeing plus drop?", answer: "Yes, we offer combination packages — Agra local sightseeing (Taj Mahal, Agra Fort, Fatehpur Sikri) followed by an outstation drop to Delhi, Jaipur, or any other city. Contact us for a combined fare quote." },
    ],
    relatedCities: ["delhi", "jaipur", "lucknow", "varanasi"],
  },

  jaipur: {
    slug: "jaipur",
    city: "Jaipur",
    tagline: "Pink City to Everywhere — Royal Rajasthan Rides",
    popularRoutes: [
      { destination: "Delhi", distance: 281, fare: 3300, duration: "4h 30m", slug: "jaipur-to-delhi" },
      { destination: "Agra", distance: 240, fare: 3300, duration: "4h", slug: "jaipur-to-agra" },
      { destination: "Udaipur", distance: 393, fare: 4323, duration: "6h 30m", slug: "jaipur-to-udaipur" },
      { destination: "Jodhpur", distance: 335, fare: 3685, duration: "5h 30m", slug: "jaipur-to-jodhpur" },
      { destination: "Jaisalmer", distance: 558, fare: 6138, duration: "8h 30m", slug: "jaipur-to-jaisalmer" },
      { destination: "Pushkar", distance: 145, fare: 3300, duration: "2h 30m", slug: "jaipur-to-pushkar" },
      { destination: "Ajmer", distance: 135, fare: 3300, duration: "2h", slug: "jaipur-to-ajmer" },
      { destination: "Ranthambore", distance: 180, fare: 3300, duration: "3h 30m", slug: "jaipur-to-ranthambore" },
      { destination: "Mount Abu", distance: 490, fare: 5390, duration: "7h 30m", slug: "jaipur-to-mount-abu" },
      { destination: "Chandigarh", distance: 520, fare: 5720, duration: "7h 30m", slug: "jaipur-to-chandigarh" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "How much does an outstation cab from Jaipur cost?", answer: "Outstation cabs from Jaipur start at ₹11/km (Sedan), ₹15/km (SUV), and ₹24/km (Tempo Traveller). Minimum 300 km billing. Jaipur to Delhi costs approx ₹3,300, Jaipur to Udaipur approx ₹4,323 for sedan." },
      { question: "Can I do a Rajasthan tour by cab from Jaipur?", answer: "Yes! We offer Rajasthan circuit tours: Jaipur-Jodhpur-Jaisalmer-Udaipur and other combinations. Multi-day trips with a dedicated driver and vehicle. Customizable itinerary. Call 7668570551 for personalized packages." },
      { question: "Is one-way cab available from Jaipur to Delhi?", answer: "Yes, one-way cabs from Jaipur to Delhi, Agra, and other cities are available at ₹11/km sedan. You pay only for one direction, saving up to 50%. Jaipur to Delhi one-way is approx ₹3,300." },
      { question: "What types of vehicles are available for Jaipur outstation?", answer: "Sedan (Swift Dzire/Etios, 4 pax), SUV (Innova Crysta/Ertiga, 6 pax), and Tempo Traveller (12-26 pax). All AC, GPS-tracked, and sanitized. Luxury options also available on request." },
      { question: "Are Jaipur outstation cabs available for airport pickup?", answer: "Yes, we provide Jaipur Airport to outstation direct transfers. Skip city traffic and head directly to Udaipur, Jodhpur, or any destination. Airport pickup with flight tracking. Pre-book for hassle-free service." },
      { question: "What is the cancellation policy for Jaipur outstation cabs?", answer: "Free cancellation up to 6 hours before pickup. 50% charge for cancellations within 6 hours. No charge if we fail to provide service. Rescheduling is free with 4 hours notice." },
    ],
    relatedCities: ["delhi", "agra", "udaipur", "jodhpur"],
  },

  chandigarh: {
    slug: "chandigarh",
    city: "Chandigarh",
    tagline: "Beautiful City to Hill Stations & Beyond",
    popularRoutes: [
      { destination: "Delhi", distance: 248, fare: 3300, duration: "4h", slug: "chandigarh-to-delhi" },
      { destination: "Shimla", distance: 113, fare: 3300, duration: "3h 30m", slug: "chandigarh-to-shimla" },
      { destination: "Manali", distance: 310, fare: 3410, duration: "8h", slug: "chandigarh-to-manali" },
      { destination: "Amritsar", distance: 230, fare: 3300, duration: "4h", slug: "chandigarh-to-amritsar" },
      { destination: "Dharamshala", distance: 260, fare: 3300, duration: "5h 30m", slug: "chandigarh-to-dharamshala" },
      { destination: "Kullu", distance: 270, fare: 3300, duration: "6h", slug: "chandigarh-to-kullu" },
      { destination: "Kasol", distance: 300, fare: 3300, duration: "7h", slug: "chandigarh-to-kasol" },
      { destination: "Dalhousie", distance: 315, fare: 3465, duration: "6h 30m", slug: "chandigarh-to-dalhousie" },
      { destination: "Haridwar", distance: 210, fare: 3300, duration: "4h 30m", slug: "chandigarh-to-haridwar" },
      { destination: "Dehradun", distance: 230, fare: 3300, duration: "4h", slug: "chandigarh-to-dehradun" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "How much does an outstation cab from Chandigarh cost?", answer: "Outstation cab from Chandigarh starts at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Chandigarh to Shimla approx ₹3,300, Chandigarh to Manali approx ₹3,410 for sedan." },
      { question: "Can I book a cab from Chandigarh to hill stations?", answer: "Yes! We specialize in Chandigarh to hill station trips — Shimla, Manali, Dharamshala, Dalhousie, Kasol, and more. Experienced hill-road drivers with well-maintained vehicles suitable for mountain terrain." },
      { question: "Is one-way cab available from Chandigarh to Shimla?", answer: "Yes, one-way cabs from Chandigarh to Shimla are available at ₹11/km sedan. The 113 km journey takes about 3.5 hours. Pay only for one direction. Minimum 300 km billing applies." },
      { question: "What is the best vehicle for Chandigarh to Manali trip?", answer: "For 1-4 passengers, a Sedan works well. For families of 5-6, choose SUV (Innova). For groups of 8-20, Tempo Traveller is ideal. SUV is recommended for comfort on the long mountain route." },
      { question: "Are Chandigarh outstation cabs available 24/7?", answer: "Yes, our outstation cabs from Chandigarh operate 24/7. Early morning departures and late-night pickups are available. Book anytime via call or WhatsApp at 7668570551." },
      { question: "Can I book a multi-day Himachal tour from Chandigarh?", answer: "Absolutely! We offer multi-day packages: Chandigarh-Shimla-Manali, Chandigarh-Dharamshala-Dalhousie, and custom itineraries. Vehicle and driver stay with you throughout. Contact us for daily rate packages." },
    ],
    relatedCities: ["shimla", "manali", "delhi", "amritsar"],
  },

  lucknow: {
    slug: "lucknow",
    city: "Lucknow",
    tagline: "City of Nawabs — Explore UP & Beyond",
    popularRoutes: [
      { destination: "Delhi", distance: 556, fare: 6116, duration: "8h", slug: "lucknow-to-delhi" },
      { destination: "Agra", distance: 333, fare: 3663, duration: "5h 30m", slug: "lucknow-to-agra" },
      { destination: "Varanasi", distance: 320, fare: 3520, duration: "5h", slug: "lucknow-to-varanasi" },
      { destination: "Ayodhya", distance: 135, fare: 3300, duration: "2h 30m", slug: "lucknow-to-ayodhya" },
      { destination: "Prayagraj", distance: 200, fare: 3300, duration: "3h 30m", slug: "lucknow-to-prayagraj" },
      { destination: "Kanpur", distance: 85, fare: 3300, duration: "1h 30m", slug: "lucknow-to-kanpur" },
      { destination: "Jaipur", distance: 580, fare: 6380, duration: "9h", slug: "lucknow-to-jaipur" },
      { destination: "Gorakhpur", distance: 273, fare: 3300, duration: "5h", slug: "lucknow-to-gorakhpur" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "How much does an outstation cab from Lucknow cost?", answer: "Outstation cabs from Lucknow start at ₹11/km for Sedan, ₹15/km for SUV, and ₹24/km for Tempo Traveller. Min 300 km billing. Lucknow to Varanasi approx ₹3,520, Lucknow to Delhi approx ₹6,116 for sedan." },
      { question: "Is one-way cab available from Lucknow to Ayodhya?", answer: "Yes, one-way cabs from Lucknow to Ayodhya are available at ₹11/km. The 135 km journey takes about 2.5 hours. Minimum 300 km billing applies, so fare starts at ₹3,300 for sedan." },
      { question: "Can I book an outstation cab from Lucknow to Varanasi?", answer: "Yes, Lucknow to Varanasi is one of our most popular routes. The 320 km journey via NH-31 takes about 5 hours. Sedan fare starts at ₹3,520. One-way and round-trip options available." },
      { question: "What vehicles are available for Lucknow outstation trips?", answer: "Sedan (Dzire/Etios, 4 passengers), SUV (Innova/Ertiga, 6 passengers), and Tempo Traveller (12-26 passengers). All AC vehicles with professional drivers familiar with UP highways." },
      { question: "Are night outstation trips available from Lucknow?", answer: "Yes, overnight departures are available. Night travel is popular for Delhi and Varanasi routes. Driver night allowance of ₹300 applies for trips post 10 PM. Book 24/7 at 7668570551." },
      { question: "Can I do an Ayodhya-Prayagraj-Varanasi tour from Lucknow?", answer: "Yes, we offer multi-city religious circuit tours from Lucknow. The Ayodhya-Prayagraj-Varanasi route is extremely popular. Dedicated vehicle and driver for the entire trip. Contact us for a custom multi-day package." },
    ],
    relatedCities: ["varanasi", "agra", "delhi", "dehradun"],
  },

  varanasi: {
    slug: "varanasi",
    city: "Varanasi",
    tagline: "Spiritual Capital — Sacred Routes Across India",
    popularRoutes: [
      { destination: "Lucknow", distance: 320, fare: 3520, duration: "5h", slug: "varanasi-to-lucknow" },
      { destination: "Prayagraj", distance: 125, fare: 3300, duration: "2h 30m", slug: "varanasi-to-prayagraj" },
      { destination: "Ayodhya", distance: 210, fare: 3300, duration: "4h", slug: "varanasi-to-ayodhya" },
      { destination: "Bodh Gaya", distance: 250, fare: 3300, duration: "5h", slug: "varanasi-to-bodh-gaya" },
      { destination: "Delhi", distance: 821, fare: 9031, duration: "12h", slug: "varanasi-to-delhi" },
      { destination: "Agra", distance: 605, fare: 6655, duration: "9h 30m", slug: "varanasi-to-agra" },
      { destination: "Patna", distance: 290, fare: 3300, duration: "5h 30m", slug: "varanasi-to-patna" },
      { destination: "Gorakhpur", distance: 230, fare: 3300, duration: "4h 30m", slug: "varanasi-to-gorakhpur" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the fare for outstation cabs from Varanasi?", answer: "Outstation fares from Varanasi start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Varanasi to Prayagraj approx ₹3,300, Varanasi to Lucknow approx ₹3,520 for sedan." },
      { question: "Can I book a cab from Varanasi to Bodh Gaya?", answer: "Yes, Varanasi to Bodh Gaya is one of our top spiritual routes. The 250 km journey takes about 5 hours. Sedan starts at ₹3,300 (min billing applies). One-way and round-trip available." },
      { question: "Is one-way cab available from Varanasi to Delhi?", answer: "Yes, one-way cabs from Varanasi to Delhi are available. The 821 km journey costs approximately ₹9,031 for sedan at ₹11/km. Professional drivers for the long-distance overnight route." },
      { question: "What is the best vehicle for Varanasi religious tour circuit?", answer: "For couples/small families, Sedan is perfect. For 5-6 passengers, SUV (Innova) offers more comfort for multi-day spiritual circuits. Groups of 8+ should opt for Tempo Traveller." },
      { question: "Can I do a Varanasi-Ayodhya-Prayagraj pilgrimage by cab?", answer: "Yes, we offer the holy trinity circuit covering Varanasi, Ayodhya, and Prayagraj. Multi-day packages with dedicated vehicle and driver. Customizable itinerary with temple stop schedules." },
      { question: "Are outstation cabs from Varanasi available for airport transfers?", answer: "Yes, we provide Varanasi Airport (Lal Bahadur Shastri Airport) to outstation direct transfers. Skip city transit and travel directly to Bodh Gaya, Prayagraj, or any destination." },
    ],
    relatedCities: ["lucknow", "agra", "delhi", "dehradun"],
  },

  amritsar: {
    slug: "amritsar",
    city: "Amritsar",
    tagline: "Holy City Routes — Punjab & North India",
    popularRoutes: [
      { destination: "Delhi", distance: 450, fare: 4950, duration: "7h 30m", slug: "amritsar-to-delhi" },
      { destination: "Chandigarh", distance: 230, fare: 3300, duration: "4h", slug: "amritsar-to-chandigarh" },
      { destination: "Dharamshala", distance: 210, fare: 3300, duration: "4h 30m", slug: "amritsar-to-dharamshala" },
      { destination: "Manali", distance: 425, fare: 4675, duration: "9h", slug: "amritsar-to-manali" },
      { destination: "Shimla", distance: 340, fare: 3740, duration: "7h", slug: "amritsar-to-shimla" },
      { destination: "Pathankot", distance: 110, fare: 3300, duration: "2h", slug: "amritsar-to-pathankot" },
      { destination: "Jalandhar", distance: 82, fare: 3300, duration: "1h 30m", slug: "amritsar-to-jalandhar" },
      { destination: "Wagah Border", distance: 30, fare: 3300, duration: "45m", slug: "amritsar-to-wagah-border" },
      { destination: "Dalhousie", distance: 200, fare: 3300, duration: "5h", slug: "amritsar-to-dalhousie" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the outstation cab fare from Amritsar?", answer: "Outstation cabs from Amritsar start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Amritsar to Delhi approx ₹4,950, Amritsar to Chandigarh approx ₹3,300 for sedan." },
      { question: "Can I book a one-way cab from Amritsar to Delhi?", answer: "Yes, one-way cabs from Amritsar to Delhi are available at ₹11/km. The 450 km journey costs approximately ₹4,950 for sedan. Overnight travel option available with experienced drivers." },
      { question: "Is cab available from Amritsar to hill stations?", answer: "Yes, we offer Amritsar to Dharamshala, Dalhousie, Shimla, and Manali cab services. Experienced hill-road drivers. SUV recommended for mountain routes for comfort and safety." },
      { question: "How do I book an outstation cab from Amritsar?", answer: "Call or WhatsApp 7668570551 with your pickup location, destination, travel date, and group size. Instant confirmation available. You can also fill the enquiry form on our website." },
      { question: "Can I visit Wagah Border and then continue outstation?", answer: "Yes, we offer Wagah Border visit + outstation drop packages. Watch the border ceremony and then travel to Chandigarh, Delhi, or any destination. Combo pricing available." },
      { question: "Are outstation cabs from Amritsar airport available?", answer: "Yes, direct airport-to-outstation transfers from Sri Guru Ram Dass Jee International Airport are available. Skip the city and travel directly to your destination." },
    ],
    relatedCities: ["chandigarh", "delhi", "shimla", "manali"],
  },

  haridwar: {
    slug: "haridwar",
    city: "Haridwar",
    tagline: "Gateway to Gods — Sacred & Scenic Routes",
    popularRoutes: [
      { destination: "Delhi", distance: 228, fare: 3300, duration: "4h 30m", slug: "haridwar-to-delhi" },
      { destination: "Rishikesh", distance: 25, fare: 3300, duration: "45m", slug: "haridwar-to-rishikesh" },
      { destination: "Dehradun", distance: 55, fare: 3300, duration: "1h 30m", slug: "haridwar-to-dehradun" },
      { destination: "Mussoorie", distance: 80, fare: 3300, duration: "2h 30m", slug: "haridwar-to-mussoorie" },
      { destination: "Chandigarh", distance: 210, fare: 3300, duration: "4h 30m", slug: "haridwar-to-chandigarh" },
      { destination: "Agra", distance: 428, fare: 4708, duration: "7h", slug: "haridwar-to-agra" },
      { destination: "Jaipur", distance: 490, fare: 5390, duration: "8h", slug: "haridwar-to-jaipur" },
      { destination: "Shimla", distance: 220, fare: 3300, duration: "6h", slug: "haridwar-to-shimla" },
      { destination: "Kedarnath", distance: 245, fare: 3300, duration: "8h", slug: "haridwar-to-kedarnath" },
      { destination: "Badrinath", distance: 320, fare: 3520, duration: "10h", slug: "haridwar-to-badrinath" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the outstation cab fare from Haridwar?", answer: "Outstation cabs from Haridwar start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Haridwar to Delhi approx ₹3,300, Haridwar to Badrinath approx ₹3,520." },
      { question: "Can I book a Char Dham tour cab from Haridwar?", answer: "Yes, we offer Char Dham Yatra packages from Haridwar covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Multi-day dedicated vehicle with experienced hill drivers. Contact us for detailed itinerary and pricing." },
      { question: "Is one-way cab available from Haridwar to Delhi?", answer: "Yes, one-way cabs from Haridwar to Delhi are available at ₹11/km sedan fare. The 228 km journey takes about 4.5 hours. Min 300 km billing, so fare starts at ₹3,300." },
      { question: "What vehicle is best for Haridwar to Kedarnath trip?", answer: "SUV (Innova Crysta) is highly recommended for the Haridwar to Kedarnath mountain route. The road has steep gradients and tight turns. SUVs offer better ground clearance and passenger comfort." },
      { question: "Are outstation cabs from Haridwar available early morning?", answer: "Yes, early morning departures (4 AM onwards) are available for pilgrimage and long-distance routes. Pre-book the night before. 24/7 booking via call or WhatsApp at 7668570551." },
      { question: "Can I make a stop at Rishikesh during my outstation trip from Haridwar?", answer: "Yes, Rishikesh stop is included on most routes departing from Haridwar. You can visit ghats, do darshan, and continue your journey. No extra charge for en-route stops." },
    ],
    relatedCities: ["dehradun", "delhi", "chandigarh", "shimla"],
  },

  dehradun: {
    slug: "dehradun",
    city: "Dehradun",
    tagline: "Capital of Uttarakhand — Mountains & Metropolis",
    popularRoutes: [
      { destination: "Delhi", distance: 255, fare: 3300, duration: "5h", slug: "dehradun-to-delhi" },
      { destination: "Mussoorie", distance: 35, fare: 3300, duration: "1h 15m", slug: "dehradun-to-mussoorie" },
      { destination: "Haridwar", distance: 55, fare: 3300, duration: "1h 30m", slug: "dehradun-to-haridwar" },
      { destination: "Rishikesh", distance: 45, fare: 3300, duration: "1h 15m", slug: "dehradun-to-rishikesh" },
      { destination: "Chandigarh", distance: 170, fare: 3300, duration: "3h 30m", slug: "dehradun-to-chandigarh" },
      { destination: "Shimla", distance: 220, fare: 3300, duration: "6h", slug: "dehradun-to-shimla" },
      { destination: "Nainital", distance: 290, fare: 3300, duration: "7h", slug: "dehradun-to-nainital" },
      { destination: "Agra", distance: 430, fare: 4730, duration: "7h", slug: "dehradun-to-agra" },
      { destination: "Auli", distance: 290, fare: 3300, duration: "9h", slug: "dehradun-to-auli" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "How much does an outstation cab from Dehradun cost?", answer: "Outstation cabs from Dehradun start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Dehradun to Delhi approx ₹3,300, Dehradun to Nainital approx ₹3,300 for sedan." },
      { question: "Is one-way cab available from Dehradun to Delhi?", answer: "Yes, one-way cabs from Dehradun to Delhi are available. The 255 km trip costs ₹3,300 (min 300 km billing at ₹11/km). Approximately 5 hours via NH-334. Book via 7668570551." },
      { question: "Can I book a cab from Dehradun to hill stations?", answer: "Yes, we offer Dehradun to Mussoorie, Nainital, Auli, Shimla and other hill station routes. Experienced mountain-road drivers with vehicles suited for hill terrain." },
      { question: "What is the best vehicle for Dehradun to Mussoorie?", answer: "Both Sedan and SUV work well for the short 35 km Dehradun to Mussoorie route. For larger groups or if you plan to continue to other hill stations, SUV or Tempo Traveller is recommended." },
      { question: "Are outstation cabs available from Dehradun Jolly Grant Airport?", answer: "Yes, direct airport-to-outstation transfers from Jolly Grant Airport are available. Skip the city and travel directly to Delhi, Mussoorie, Haridwar, or any destination." },
      { question: "Can I do a Dehradun-Mussoorie-Rishikesh combo trip?", answer: "Absolutely! Multi-stop trips are our specialty. Dehradun-Mussoorie-Rishikesh is a popular combo. Vehicle stays with you for the entire trip. Per-km billing for total distance covered." },
    ],
    relatedCities: ["haridwar", "delhi", "chandigarh", "shimla"],
  },

  udaipur: {
    slug: "udaipur",
    city: "Udaipur",
    tagline: "City of Lakes — Royal Rajasthan Highways",
    popularRoutes: [
      { destination: "Jaipur", distance: 393, fare: 4323, duration: "6h 30m", slug: "udaipur-to-jaipur" },
      { destination: "Jodhpur", distance: 260, fare: 3300, duration: "4h 30m", slug: "udaipur-to-jodhpur" },
      { destination: "Mount Abu", distance: 165, fare: 3300, duration: "3h", slug: "udaipur-to-mount-abu" },
      { destination: "Ahmedabad", distance: 260, fare: 3300, duration: "4h 30m", slug: "udaipur-to-ahmedabad" },
      { destination: "Delhi", distance: 660, fare: 7260, duration: "10h", slug: "udaipur-to-delhi" },
      { destination: "Chittorgarh", distance: 115, fare: 3300, duration: "2h", slug: "udaipur-to-chittorgarh" },
      { destination: "Ajmer", distance: 275, fare: 3300, duration: "4h 30m", slug: "udaipur-to-ajmer" },
      { destination: "Pushkar", distance: 280, fare: 3300, duration: "5h", slug: "udaipur-to-pushkar" },
      { destination: "Nathdwara", distance: 48, fare: 3300, duration: "1h", slug: "udaipur-to-nathdwara" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the outstation cab fare from Udaipur?", answer: "Outstation cabs from Udaipur start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km. Udaipur to Jaipur approx ₹4,323, Udaipur to Jodhpur approx ₹3,300 for sedan." },
      { question: "Can I do a Rajasthan tour from Udaipur?", answer: "Yes, we offer Rajasthan circuit tours: Udaipur-Jodhpur-Jaisalmer-Jaipur and custom routes. Multi-day packages with dedicated driver and vehicle. Experience royal Rajasthan at your pace." },
      { question: "Is one-way cab available from Udaipur to Jaipur?", answer: "Yes, one-way cabs from Udaipur to Jaipur are available. The 393 km journey costs approx ₹4,323 (sedan). Approximately 6.5 hours via NH-48. Book at 7668570551." },
      { question: "What vehicle is best for Udaipur to Mount Abu trip?", answer: "Sedan works well for the 165 km journey. For families or if continuing to other destinations, SUV is more comfortable. The route has some hill sections near Mount Abu." },
      { question: "Can I include Nathdwara temple visit on my outstation trip?", answer: "Yes, Nathdwara is just 48 km from Udaipur and can be a stop on routes heading toward Ajmer, Jaipur, or Jodhpur. No extra charge for en-route stops." },
      { question: "Are outstation cabs from Udaipur airport available?", answer: "Yes, direct Maharana Pratap Airport to outstation transfers available. Travel straight to Jaipur, Jodhpur, Mount Abu, or any destination without city transit." },
    ],
    relatedCities: ["jaipur", "jodhpur", "delhi", "agra"],
  },

  jodhpur: {
    slug: "jodhpur",
    city: "Jodhpur",
    tagline: "Blue City to Desert Adventures & Beyond",
    popularRoutes: [
      { destination: "Jaisalmer", distance: 285, fare: 3300, duration: "5h", slug: "jodhpur-to-jaisalmer" },
      { destination: "Jaipur", distance: 335, fare: 3685, duration: "5h 30m", slug: "jodhpur-to-jaipur" },
      { destination: "Udaipur", distance: 260, fare: 3300, duration: "4h 30m", slug: "jodhpur-to-udaipur" },
      { destination: "Delhi", distance: 600, fare: 6600, duration: "9h 30m", slug: "jodhpur-to-delhi" },
      { destination: "Mount Abu", distance: 270, fare: 3300, duration: "4h 30m", slug: "jodhpur-to-mount-abu" },
      { destination: "Ajmer", distance: 205, fare: 3300, duration: "3h 30m", slug: "jodhpur-to-ajmer" },
      { destination: "Pushkar", distance: 215, fare: 3300, duration: "4h", slug: "jodhpur-to-pushkar" },
      { destination: "Bikaner", distance: 250, fare: 3300, duration: "4h 30m", slug: "jodhpur-to-bikaner" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What does an outstation cab from Jodhpur cost?", answer: "Outstation cabs from Jodhpur start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Jodhpur to Jaisalmer approx ₹3,300, Jodhpur to Jaipur approx ₹3,685." },
      { question: "Can I book a cab from Jodhpur to Jaisalmer?", answer: "Yes, Jodhpur to Jaisalmer is our most popular desert route. The 285 km journey takes about 5 hours through scenic Thar Desert landscape. Sedan fare starts at ₹3,300." },
      { question: "Is a Jodhpur-Jaisalmer-Udaipur circuit available?", answer: "Yes, we offer the popular Rajasthan desert circuit: Jodhpur-Jaisalmer-Udaipur (or reverse). Multi-day package with dedicated driver. Experience forts, deserts, and lakes in one trip." },
      { question: "What vehicle is best for Jodhpur to Jaisalmer?", answer: "Sedan (Dzire) is comfortable for 2-3 passengers on this highway route. For families of 4-6, SUV (Innova) is ideal. For groups, Tempo Traveller offers space for desert camping gear." },
      { question: "Are one-way cabs available from Jodhpur?", answer: "Yes, one-way cabs from Jodhpur to Jaisalmer, Jaipur, Udaipur, Delhi and other cities are available. Pay only for single direction at ₹11/km sedan rate." },
      { question: "Can I book overnight outstation trips from Jodhpur?", answer: "Yes, overnight departures available especially for Delhi route (9.5 hours). Driver night allowance of ₹300 applies. Professional drivers experienced in long-distance night driving." },
    ],
    relatedCities: ["jaipur", "udaipur", "delhi", "agra"],
  },

  shimla: {
    slug: "shimla",
    city: "Shimla",
    tagline: "Queen of Hills — Mountain & Valley Routes",
    popularRoutes: [
      { destination: "Delhi", distance: 342, fare: 3762, duration: "7h", slug: "shimla-to-delhi" },
      { destination: "Chandigarh", distance: 113, fare: 3300, duration: "3h 30m", slug: "shimla-to-chandigarh" },
      { destination: "Manali", distance: 260, fare: 3300, duration: "7h", slug: "shimla-to-manali" },
      { destination: "Dharamshala", distance: 320, fare: 3520, duration: "8h", slug: "shimla-to-dharamshala" },
      { destination: "Kullu", distance: 225, fare: 3300, duration: "6h", slug: "shimla-to-kullu" },
      { destination: "Kufri", distance: 16, fare: 3300, duration: "45m", slug: "shimla-to-kufri" },
      { destination: "Narkanda", distance: 65, fare: 3300, duration: "2h", slug: "shimla-to-narkanda" },
      { destination: "Amritsar", distance: 340, fare: 3740, duration: "7h", slug: "shimla-to-amritsar" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the outstation cab fare from Shimla?", answer: "Outstation cabs from Shimla start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km. Shimla to Delhi approx ₹3,762, Shimla to Chandigarh approx ₹3,300 for sedan." },
      { question: "Can I book a cab from Shimla to Manali?", answer: "Yes, the Shimla to Manali route is one of our most scenic offerings. The 260 km journey takes about 7 hours through beautiful mountain roads. Sedan fare starts at ₹3,300." },
      { question: "Is one-way cab available from Shimla to Chandigarh?", answer: "Yes, one-way cabs from Shimla to Chandigarh are available. The 113 km descent takes about 3.5 hours. Min 300 km billing applies, so fare is ₹3,300 for sedan." },
      { question: "What vehicle is recommended for mountain outstation trips?", answer: "SUV (Innova Crysta) is highly recommended for Shimla outstation trips. Better ground clearance, more powerful engine for hills, and spacious for luggage. Sedan is suitable for shorter routes." },
      { question: "Are outstation cabs available from Shimla in winter?", answer: "Yes, our outstation cabs operate year-round including winter (Dec-Feb). Vehicles are winter-ready. Some high-altitude routes may be affected by snowfall — we advise alternate routes when needed." },
      { question: "Can I do a Shimla-Manali-Dharamshala circuit by cab?", answer: "Yes, multi-day Himachal circuits are our specialty. Shimla-Manali-Dharamshala takes 5-7 days ideally. Dedicated vehicle and driver throughout. Contact us for a customized package and daily rate." },
    ],
    relatedCities: ["chandigarh", "manali", "delhi", "dehradun"],
  },

  manali: {
    slug: "manali",
    city: "Manali",
    tagline: "Adventure Capital — Valley & Pass Routes",
    popularRoutes: [
      { destination: "Delhi", distance: 537, fare: 5907, duration: "11h", slug: "manali-to-delhi" },
      { destination: "Chandigarh", distance: 310, fare: 3410, duration: "8h", slug: "manali-to-chandigarh" },
      { destination: "Shimla", distance: 260, fare: 3300, duration: "7h", slug: "manali-to-shimla" },
      { destination: "Dharamshala", distance: 235, fare: 3300, duration: "7h", slug: "manali-to-dharamshala" },
      { destination: "Kullu", distance: 40, fare: 3300, duration: "1h", slug: "manali-to-kullu" },
      { destination: "Kasol", distance: 75, fare: 3300, duration: "2h 30m", slug: "manali-to-kasol" },
      { destination: "Solang Valley", distance: 14, fare: 3300, duration: "30m", slug: "manali-to-solang-valley" },
      { destination: "Leh", distance: 474, fare: 5214, duration: "14h", slug: "manali-to-leh" },
      { destination: "Rohtang Pass", distance: 51, fare: 3300, duration: "2h", slug: "manali-to-rohtang-pass" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What does an outstation cab from Manali cost?", answer: "Outstation cabs from Manali start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Manali to Delhi approx ₹5,907, Manali to Chandigarh approx ₹3,410 for sedan." },
      { question: "Can I book a cab from Manali to Leh?", answer: "Yes, the Manali-Leh highway route (474 km) is available June-September when the pass is open. SUV strongly recommended. The spectacular 14-hour journey crosses Rohtang, Baralacha, and Tanglang La passes." },
      { question: "Is one-way cab from Manali to Delhi available?", answer: "Yes, one-way cabs from Manali to Delhi are available. The 537 km journey costs approx ₹5,907 sedan. Overnight travel option with experienced mountain drivers." },
      { question: "What is the best vehicle for Manali outstation trips?", answer: "SUV (Innova Crysta) is strongly recommended for all Manali outstation routes due to mountain terrain. For Leh route, SUV is mandatory. Sedan suitable only for Manali to Chandigarh/Delhi via highway." },
      { question: "Are outstation cabs from Manali available in winter?", answer: "Yes, cabs to Chandigarh, Delhi, and Shimla operate year-round. However, Leh and Rohtang Pass routes close October-May due to snow. Atal Tunnel has made Lahaul accessible year-round." },
      { question: "Can I book a Manali to Spiti Valley cab?", answer: "Yes, Manali to Spiti (via Rohtang/Kunzum Pass) is available June-October. The journey takes 10-12 hours. SUV mandatory. Multi-day Spiti circuit packages available with camping stops." },
    ],
    relatedCities: ["shimla", "chandigarh", "delhi", "dehradun"],
  },

  noida: {
    slug: "noida",
    city: "Noida",
    tagline: "NCR Tech Hub — Outstation From Your Doorstep",
    popularRoutes: [
      { destination: "Agra", distance: 205, fare: 3300, duration: "3h", slug: "noida-to-agra" },
      { destination: "Jaipur", distance: 290, fare: 3300, duration: "5h", slug: "noida-to-jaipur" },
      { destination: "Haridwar", distance: 225, fare: 3300, duration: "4h 30m", slug: "noida-to-haridwar" },
      { destination: "Rishikesh", distance: 240, fare: 3300, duration: "5h", slug: "noida-to-rishikesh" },
      { destination: "Shimla", distance: 355, fare: 3905, duration: "7h", slug: "noida-to-shimla" },
      { destination: "Manali", distance: 550, fare: 6050, duration: "11h", slug: "noida-to-manali" },
      { destination: "Lucknow", distance: 530, fare: 5830, duration: "7h 30m", slug: "noida-to-lucknow" },
      { destination: "Chandigarh", distance: 260, fare: 3300, duration: "4h 30m", slug: "noida-to-chandigarh" },
      { destination: "Mathura", distance: 145, fare: 3300, duration: "2h 30m", slug: "noida-to-mathura" },
      { destination: "Nainital", distance: 305, fare: 3355, duration: "6h 30m", slug: "noida-to-nainital" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What is the fare for outstation cabs from Noida?", answer: "Outstation fares from Noida start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Noida to Agra approx ₹3,300, Noida to Shimla approx ₹3,905 for sedan." },
      { question: "Is pickup available from all Noida sectors?", answer: "Yes, door-to-door pickup from all Noida sectors, Greater Noida, Noida Extension, and Noida Expressway. Drivers are familiar with all sector layouts for seamless pickups." },
      { question: "Can I book a one-way cab from Noida to Agra?", answer: "Yes, one-way cabs from Noida to Agra, Jaipur, and other destinations available. Noida to Agra one-way starts at ₹3,300 sedan. Via Yamuna Expressway, takes about 3 hours." },
      { question: "What vehicles are available for Noida outstation trips?", answer: "Sedan (Dzire/Etios, 4 pax), SUV (Innova/Ertiga, 6 pax), Tempo Traveller (12-26 pax). All AC, GPS-tracked. Luxury vehicles available on request for corporate executives." },
      { question: "Are outstation cabs from Noida available for corporate trips?", answer: "Yes, we offer corporate outstation cab services from Noida tech parks and offices. GST billing available. Regular corporate rates for frequent travelers. Bulk booking discounts." },
      { question: "Can I take the Yamuna Expressway route for Agra trips?", answer: "Yes, the Noida-Agra Yamuna Expressway route is our default for Agra trips. Fastest route at 165 km taking 2.5-3 hours. Toll charges extra (approximately ₹700 one-way)." },
    ],
    relatedCities: ["delhi", "agra", "gurgaon", "lucknow"],
  },

  gurgaon: {
    slug: "gurgaon",
    city: "Gurgaon",
    tagline: "Millennium City — Business & Leisure Routes",
    popularRoutes: [
      { destination: "Jaipur", distance: 265, fare: 3300, duration: "4h 30m", slug: "gurgaon-to-jaipur" },
      { destination: "Agra", distance: 240, fare: 3300, duration: "3h 30m", slug: "gurgaon-to-agra" },
      { destination: "Chandigarh", distance: 260, fare: 3300, duration: "4h 30m", slug: "gurgaon-to-chandigarh" },
      { destination: "Shimla", distance: 355, fare: 3905, duration: "7h", slug: "gurgaon-to-shimla" },
      { destination: "Manali", distance: 550, fare: 6050, duration: "11h", slug: "gurgaon-to-manali" },
      { destination: "Haridwar", distance: 240, fare: 3300, duration: "5h", slug: "gurgaon-to-haridwar" },
      { destination: "Rishikesh", distance: 255, fare: 3300, duration: "5h 30m", slug: "gurgaon-to-rishikesh" },
      { destination: "Neemrana", distance: 115, fare: 3300, duration: "2h", slug: "gurgaon-to-neemrana" },
      { destination: "Udaipur", distance: 645, fare: 7095, duration: "9h 30m", slug: "gurgaon-to-udaipur" },
      { destination: "Amritsar", distance: 465, fare: 5115, duration: "7h 30m", slug: "gurgaon-to-amritsar" },
    ],
    vehicleOptions: [
      { type: "Sedan", model: "Dzire / Etios", seats: 4, perKm: 11, minKm: 300, image: "/images/vehicles/sedan.jpg" },
      { type: "SUV", model: "Innova / Ertiga", seats: 6, perKm: 15, minKm: 300, image: "/images/vehicles/suv.jpg" },
      { type: "Tempo Traveller", model: "Force Traveller 12-26 Seater", seats: 12, perKm: 24, minKm: 300, image: "/images/vehicles/tempo.jpg" },
    ],
    oneWayAvailable: true,
    roundTripDiscount: "15% off return fare",
    faqs: [
      { question: "What does an outstation cab from Gurgaon cost?", answer: "Outstation cabs from Gurgaon (Gurugram) start at ₹11/km (Sedan), ₹15/km (SUV), ₹24/km (Tempo Traveller). Min 300 km billing. Gurgaon to Jaipur approx ₹3,300, Gurgaon to Shimla approx ₹3,905." },
      { question: "Is door-to-door pickup available in Gurgaon?", answer: "Yes, we provide pickup from all Gurgaon locations — Cyber City, Golf Course Road, MG Road, Sohna Road, Sector 56, Udyog Vihar, all sectors. Drivers know all Gurgaon corporate parks and residential areas." },
      { question: "Can I book a one-way cab from Gurgaon to Jaipur?", answer: "Yes, one-way cabs from Gurgaon to Jaipur are available at ₹11/km sedan. The 265 km journey takes about 4.5 hours via NH-48. Min 300 km billing, fare starts at ₹3,300." },
      { question: "Are corporate outstation cab bookings available from Gurgaon?", answer: "Yes, we serve many Gurgaon corporate clients. GST invoice available. Monthly billing options for regular clients. Preferred rates for frequent bookings. Dedicated account manager for corporates." },
      { question: "What vehicle is best for Gurgaon weekend getaway trips?", answer: "For couples/small families, Sedan is great for Neemrana, Jaipur, Agra. For family trips to hills (Shimla, Manali), SUV offers more comfort and luggage space. Groups should opt for Tempo Traveller." },
      { question: "Is outstation cab from Gurgaon available for same-day return?", answer: "Yes, same-day round trips are popular for Neemrana, Agra (via Expressway), and Jaipur. Round trip minimum 250 km/day billing. Book early morning for comfortable same-day return." },
    ],
    relatedCities: ["delhi", "noida", "jaipur", "chandigarh"],
  },
};

/**
 * Get outstation city data by slug
 * @param {string} slug - City slug
 * @returns {object|null} City data or null
 */
export function getOutstationCity(slug) {
  return outstationCityData[slug] || null;
}

/**
 * Get all outstation city slugs
 * @returns {string[]} Array of city slugs
 */
export function getAllOutstationCitySlugs() {
  return Object.keys(outstationCityData);
}

/**
 * Get related outstation cities
 * @param {string} slug - Current city slug
 * @returns {object[]} Array of related city objects
 */
export function getRelatedOutstationCities(slug) {
  const city = outstationCityData[slug];
  if (!city || !city.relatedCities) return [];

  return city.relatedCities
    .map((relSlug) => outstationCityData[relSlug])
    .filter(Boolean);
}

export default outstationCityData;
