// Vehicle Hire Pages - 13 specific vehicle rental pages
// Each keyed by slug for easy lookup

export const vehicleHirePages = {
  "innova-crysta": {
    name: "Toyota Innova Crysta",
    slug: "innova-crysta",
    tagline: "The King of Family Travel",
    category: "Premium SUV",
    seats: 7,
    luggage: "3 large + 2 small bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual / Automatic",
    perKmRate: { outstation: "\u20B918/km", local: "\u20B920/km" },
    packages: {
      halfDay: "\u20B93,500 (4 hrs / 40 km)",
      fullDay: "\u20B95,500 (8 hrs / 80 km)",
      outstationPerKm: "\u20B918/km (min 300 km/day)"
    },
    features: ["AC", "Music System", "USB Charging", "Spacious Boot", "Reclining Seats", "Power Windows"],
    bestFor: ["Family trips", "Airport transfers", "Corporate travel", "Outstation tours"],
    specs: { engine: "2.7L Diesel", power: "171 BHP", mileage: "12-15 km/l", bootSpace: "300L" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B94,140", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B95,040", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B94,320", distance: "240 km" },
      { route: "Delhi to Manali", price: "\u20B99,540", distance: "530 km" },
      { route: "Delhi to Nainital", price: "\u20B95,580", distance: "310 km" },
      { route: "Delhi to Rishikesh", price: "\u20B94,500", distance: "250 km" },
      { route: "Delhi to Shimla", price: "\u20B96,300", distance: "350 km" },
      { route: "Delhi to Mussoorie", price: "\u20B95,040", distance: "280 km" }
    ],
    description: `The Toyota Innova Crysta is India's most trusted premium MPV for outstation travel and family trips. With 7 spacious seats, powerful 2.7L diesel engine, and legendary reliability, the Innova Crysta delivers unmatched comfort on long highway drives.

Triveni Cabs offers Innova Crysta rentals with experienced, verified drivers across 50+ cities in India. Whether you need an airport transfer, a weekend getaway, or a multi-day outstation tour, our well-maintained Innova Crysta fleet ensures a premium travel experience at competitive rates.

The Innova Crysta features captain seats in the second row, ample boot space for family luggage, powerful AC for Indian summers, and a smooth ride quality that makes even 500 km journeys comfortable. It is the top choice for families, corporate executives, and anyone who values space and reliability.

Book your Innova Crysta rental with Triveni Cabs starting at just \u20B918/km for outstation trips. All bookings include a professional driver, fuel, toll taxes information, and 24/7 roadside assistance.`,
    faqs: [
      { question: "What is the per km rate for Innova Crysta rental?", answer: "The Innova Crysta rental rate starts at \u20B918/km for outstation trips and \u20B920/km for local city travel. A minimum of 300 km/day applies for outstation bookings." },
      { question: "How many passengers can sit in an Innova Crysta?", answer: "The Toyota Innova Crysta comfortably seats 7 passengers including the driver. The second row has captain seats and the third row has a bench seat." },
      { question: "Is the Innova Crysta good for hill station trips?", answer: "Yes, the Innova Crysta is one of the best vehicles for hill stations. Its powerful diesel engine handles steep gradients easily, and the spacious cabin keeps passengers comfortable on winding mountain roads." },
      { question: "Does the Innova Crysta have enough boot space for luggage?", answer: "Yes, the Innova Crysta has approximately 300 liters of boot space, enough for 3 large suitcases and 2 small bags. For extra luggage, a roof carrier can be arranged." },
      { question: "Can I book an Innova Crysta for airport pickup?", answer: "Absolutely. We offer Innova Crysta airport transfers from all major airports including Delhi IGI, Jaipur, Lucknow, and more. The driver will be waiting at the arrival gate with a name board." },
      { question: "What is included in the Innova Crysta rental price?", answer: "The rental price includes the vehicle, professional driver, fuel cost calculation, and 24/7 support. Toll taxes and parking are typically paid extra by the passenger." },
      { question: "Is the Innova Crysta available in automatic transmission?", answer: "Yes, we offer both manual and automatic Innova Crysta variants. Please mention your preference while booking so we can confirm availability." },
      { question: "How do I book an Innova Crysta with Triveni Cabs?", answer: "You can book by calling us at 7668570551, sending a WhatsApp message, or filling out the booking form on our website. Instant confirmation is provided for most routes." }
    ],
    comparisons: ["ertiga", "fortuner"]
  },

  "ertiga": {
    name: "Maruti Ertiga",
    slug: "ertiga",
    tagline: "Smart Family Mover",
    category: "Compact MPV",
    seats: 6,
    luggage: "2 large + 2 small bags",
    ac: true,
    fuelType: "Petrol / CNG",
    transmission: "Manual / Automatic",
    perKmRate: { outstation: "\u20B915/km", local: "\u20B917/km" },
    packages: {
      halfDay: "\u20B92,500 (4 hrs / 40 km)",
      fullDay: "\u20B94,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B915/km (min 300 km/day)"
    },
    features: ["AC", "Music System", "USB Charging", "Compact Size", "Fuel Efficient", "Power Steering"],
    bestFor: ["Budget family trips", "City transfers", "Short outstation trips", "Small group travel"],
    specs: { engine: "1.5L Petrol / CNG", power: "103 BHP", mileage: "18-22 km/l", bootSpace: "209L" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B93,450", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B94,200", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B93,600", distance: "240 km" },
      { route: "Delhi to Mathura", price: "\u20B92,550", distance: "170 km" },
      { route: "Delhi to Nainital", price: "\u20B94,650", distance: "310 km" },
      { route: "Delhi to Rishikesh", price: "\u20B93,750", distance: "250 km" },
      { route: "Delhi to Chandigarh", price: "\u20B93,750", distance: "250 km" }
    ],
    description: `The Maruti Ertiga is India's best-selling compact MPV, perfect for budget-conscious families who need a spacious yet affordable vehicle for travel. With 6 comfortable seats, excellent fuel economy, and Maruti's legendary reliability, the Ertiga offers outstanding value for money.

Triveni Cabs provides well-maintained Ertiga rentals with professional drivers for local and outstation trips. The Ertiga is ideal for small families, couples with children, and budget travelers who want more space than a sedan without paying premium SUV rates.

The CNG variant of the Ertiga offers even better running costs, making it one of the most economical choices for long-distance travel. The compact dimensions make it easy to navigate city traffic and narrow hill roads, while the 1.5L engine provides adequate power for highway cruising.

Starting at just \u20B915/km for outstation trips, the Maruti Ertiga is the smartest choice for travelers who want space, comfort, and value. Book with Triveni Cabs for a hassle-free experience.`,
    faqs: [
      { question: "What is the rental rate for Maruti Ertiga?", answer: "The Ertiga rental starts at \u20B915/km for outstation and \u20B917/km for local trips. Minimum 300 km/day applies for outstation bookings." },
      { question: "How many people can travel in an Ertiga?", answer: "The Maruti Ertiga seats 6 passengers comfortably (including driver). It has 3 rows with 2+3+2 seating configuration." },
      { question: "Is the Ertiga available in CNG?", answer: "Yes, we have both petrol and CNG variants of the Ertiga. CNG offers better fuel economy and lower running costs, especially for long trips." },
      { question: "Is the Ertiga comfortable for outstation trips?", answer: "Yes, the Ertiga is quite comfortable for outstation trips up to 500 km. It has good suspension, adequate AC, and decent legroom for all passengers." },
      { question: "How much boot space does the Ertiga have?", answer: "The Ertiga has about 209 liters of boot space with all seats up. With the third row folded, boot space increases significantly for extra luggage." },
      { question: "Ertiga vs Innova: Which should I choose?", answer: "Choose the Ertiga for budget trips, small families (up to 5), and shorter distances. Choose the Innova Crysta for premium comfort, larger families, heavy luggage, and long-distance travel." }
    ],
    comparisons: ["innova-crysta", "swift-dzire"]
  },

  "swift-dzire": {
    name: "Swift Dzire",
    slug: "swift-dzire",
    tagline: "India's Favourite Outstation Sedan",
    category: "Sedan",
    seats: 4,
    luggage: "2 large + 1 small bag",
    ac: true,
    fuelType: "Petrol / CNG",
    transmission: "Manual / Automatic",
    perKmRate: { outstation: "\u20B911/km", local: "\u20B913/km" },
    packages: {
      halfDay: "\u20B91,800 (4 hrs / 40 km)",
      fullDay: "\u20B92,800 (8 hrs / 80 km)",
      outstationPerKm: "\u20B911/km (min 300 km/day)"
    },
    features: ["AC", "Music System", "USB Charging", "Fuel Efficient", "Comfortable Seats", "Power Windows"],
    bestFor: ["Couple trips", "Business travel", "Airport transfers", "Budget outstation"],
    specs: { engine: "1.2L Petrol / CNG", power: "89 BHP", mileage: "22-28 km/l", bootSpace: "378L" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B92,530", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B93,080", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B92,640", distance: "240 km" },
      { route: "Delhi to Mathura", price: "\u20B91,870", distance: "170 km" },
      { route: "Delhi to Nainital", price: "\u20B93,410", distance: "310 km" },
      { route: "Delhi to Rishikesh", price: "\u20B92,750", distance: "250 km" },
      { route: "Delhi to Chandigarh", price: "\u20B92,750", distance: "250 km" },
      { route: "Delhi to Shimla", price: "\u20B93,850", distance: "350 km" }
    ],
    description: `The Maruti Swift Dzire is India's most popular sedan for outstation travel and the most economical choice for long-distance cab bookings. With its excellent fuel efficiency of 22-28 km/l, comfortable 4-seater cabin, and surprisingly spacious 378L boot, the Dzire delivers more than its compact size suggests.

Triveni Cabs offers well-maintained Swift Dzire rentals with experienced drivers at just \u20B911/km for outstation trips. The Dzire is the go-to choice for couples, solo business travelers, and budget-conscious passengers who want a reliable, comfortable ride without breaking the bank.

The Swift Dzire handles both city traffic and highway cruising with equal ease. The CNG variant further reduces running costs, making it the most affordable way to travel between cities. Despite being a compact sedan, its boot can easily accommodate 2 large suitcases, making it practical for most travel needs.

Whether you are heading to Agra for the Taj Mahal, Jaipur for the Pink City, or Haridwar for a pilgrimage, the Swift Dzire with Triveni Cabs ensures a smooth, affordable, and comfortable journey.`,
    faqs: [
      { question: "What is the per km rate for Swift Dzire rental?", answer: "The Swift Dzire rental starts at \u20B911/km for outstation trips and \u20B913/km for local city travel. This is the most affordable vehicle option we offer." },
      { question: "How many passengers can sit in a Swift Dzire?", answer: "The Swift Dzire comfortably seats 4 passengers (including driver). It is best suited for 2-3 passengers with luggage." },
      { question: "Is the Swift Dzire good for long trips?", answer: "Yes, the Swift Dzire is excellent for outstation trips. Its fuel efficiency means lower costs, and the comfortable suspension handles highway driving well for trips up to 600-700 km." },
      { question: "Does the Swift Dzire have enough boot space?", answer: "The Dzire has 378 liters of boot space, which is quite generous for a sedan. It can easily fit 2 large suitcases and a small bag." },
      { question: "Is CNG Swift Dzire available?", answer: "Yes, we have both petrol and CNG variants. The CNG variant offers even better running costs and is ideal for budget-conscious travelers." },
      { question: "Dzire vs Ertiga: Which one should I book?", answer: "Book the Dzire if you are 2-3 passengers wanting the lowest rate. Book the Ertiga if you are 4-5 passengers or need more cabin space. The Dzire is \u20B911/km vs Ertiga at \u20B915/km." },
      { question: "Can I book a Swift Dzire for airport pickup?", answer: "Yes, Swift Dzire is our most popular airport transfer vehicle. We provide pickups from all major airports with the driver waiting at arrivals." }
    ],
    comparisons: ["ertiga", "innova-crysta"]
  },

  "fortuner": {
    name: "Toyota Fortuner",
    slug: "fortuner",
    tagline: "The Ultimate Power Machine",
    category: "Full-Size SUV",
    seats: 7,
    luggage: "4 large + 2 small bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual / Automatic",
    perKmRate: { outstation: "\u20B925/km", local: "\u20B928/km" },
    packages: {
      halfDay: "\u20B96,500 (4 hrs / 40 km)",
      fullDay: "\u20B910,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B925/km (min 300 km/day)"
    },
    features: ["AC", "Music System", "USB Charging", "4x4 Available", "Leather Seats", "Cruise Control", "Power Boot", "Sunroof"],
    bestFor: ["VIP travel", "Hill station trips", "Corporate executives", "Premium outstation tours"],
    specs: { engine: "2.8L Diesel", power: "201 BHP", mileage: "10-14 km/l", bootSpace: "400L" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B95,750", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B97,000", distance: "280 km" },
      { route: "Delhi to Manali", price: "\u20B913,250", distance: "530 km" },
      { route: "Delhi to Shimla", price: "\u20B98,750", distance: "350 km" },
      { route: "Delhi to Nainital", price: "\u20B97,750", distance: "310 km" },
      { route: "Delhi to Mussoorie", price: "\u20B97,000", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B96,000", distance: "240 km" },
      { route: "Delhi to Dehradun", price: "\u20B96,250", distance: "250 km" }
    ],
    description: `The Toyota Fortuner is the flagship SUV for premium travel in India. With its commanding 201 BHP diesel engine, 4x4 capability, and luxurious cabin, the Fortuner is the vehicle of choice for VIPs, corporate executives, and travelers who demand the very best.

Triveni Cabs offers Toyota Fortuner rentals with professional chauffeurs for those who want to travel in style and authority. The Fortuner effortlessly handles everything from smooth expressways to challenging hill station roads, making it the ultimate all-terrain luxury vehicle.

With leather seats, climate control, a powerful sound system, and ample space for 7 passengers, the Fortuner turns every journey into a premium experience. The 400L boot space easily accommodates luggage for extended trips, and the elevated seating position offers a commanding view of the road.

Book a Toyota Fortuner with Triveni Cabs at \u20B925/km for outstation trips. Ideal for Manali, Shimla, Leh, and other destinations where you need power, comfort, and prestige.`,
    faqs: [
      { question: "What is the rental rate for Toyota Fortuner?", answer: "The Fortuner rental rate is \u20B925/km for outstation and \u20B928/km for local travel. A minimum of 300 km/day applies for outstation bookings." },
      { question: "Is the Fortuner good for hill stations?", answer: "The Fortuner is arguably the best rental vehicle for hill stations in India. Its powerful diesel engine, high ground clearance, and available 4x4 make it ideal for mountain roads." },
      { question: "Can I book a Fortuner for a wedding?", answer: "Yes, the Fortuner is popular for wedding-related travel, VIP guest transfers, and groom entry. We provide decorated Fortuner services for weddings as well." },
      { question: "Fortuner vs Innova Crysta: Which should I book?", answer: "Choose the Fortuner for premium travel, hill stations, VIP transport, and when you want a powerful SUV. Choose the Innova Crysta for comfortable family travel at a more affordable rate (\u20B918/km vs \u20B925/km)." },
      { question: "Does the Fortuner have 4x4?", answer: "We have both 2WD and 4x4 Fortuner variants. For hill stations and off-road destinations, we recommend the 4x4 variant. Please request it while booking." },
      { question: "How many passengers can the Fortuner seat?", answer: "The Toyota Fortuner seats 7 passengers including the driver. It has a 2+3+2 seating layout with captain seats available in the second row on higher variants." },
      { question: "Is the Fortuner suitable for airport VIP pickup?", answer: "Absolutely. The Fortuner is our most requested vehicle for VIP airport transfers. The chauffeur meets you at arrivals with a name board." }
    ],
    comparisons: ["innova-crysta", "xuv700"]
  },

  "force-urbania": {
    name: "Force Urbania",
    slug: "force-urbania",
    tagline: "Premium Group Travel Redefined",
    category: "Luxury Van",
    seats: 12,
    luggage: "6 large bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKmRate: { outstation: "\u20B928/km", local: "\u20B932/km" },
    packages: {
      halfDay: "\u20B97,000 (4 hrs / 40 km)",
      fullDay: "\u20B911,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B928/km (min 300 km/day)"
    },
    features: ["AC", "Pushback Seats", "USB Charging", "LED Interior", "Large Windows", "PA System", "Luggage Rack"],
    bestFor: ["Corporate groups", "Family reunions", "Pilgrimage groups", "Airport group transfers"],
    specs: { engine: "2.6L Diesel", power: "113 BHP", mileage: "10-12 km/l", bootSpace: "Rear luggage compartment" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B96,440", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B97,840", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B96,720", distance: "240 km" },
      { route: "Delhi to Rishikesh", price: "\u20B97,000", distance: "250 km" },
      { route: "Delhi to Nainital", price: "\u20B98,680", distance: "310 km" },
      { route: "Delhi to Manali", price: "\u20B914,840", distance: "530 km" },
      { route: "Delhi to Shimla", price: "\u20B99,800", distance: "350 km" }
    ],
    description: `The Force Urbania is India's newest premium group travel vehicle, designed to bridge the gap between a tempo traveller and a luxury bus. With 12 spacious seats, modern styling, and car-like ride quality, the Urbania is revolutionizing how groups travel in India.

Triveni Cabs is among the first operators to offer the Force Urbania for rental. This vehicle features individual pushback seats, powerful AC, large panoramic windows, and a quiet cabin that makes it significantly more comfortable than traditional tempo travellers.

The Urbania is perfect for corporate teams, extended families, and travel groups of 10-12 who want premium comfort without booking an entire bus. Its modern design and smooth ride quality make it ideal for highway travel, and the powerful diesel engine handles hill stations with ease.

Book the Force Urbania with Triveni Cabs at \u20B928/km and experience the future of group travel. All bookings include an experienced driver, fuel, and 24/7 support.`,
    faqs: [
      { question: "What is the seating capacity of Force Urbania?", answer: "The Force Urbania seats 12 passengers comfortably with individual pushback seats. It is designed for premium group travel with more space per seat than a standard tempo traveller." },
      { question: "How is the Urbania different from a tempo traveller?", answer: "The Urbania offers car-like ride quality, better noise insulation, modern styling, and individual pushback seats. It feels more like a luxury van than a traditional tempo traveller." },
      { question: "What is the per km rate for Force Urbania?", answer: "The Urbania rental is \u20B928/km for outstation and \u20B932/km for local trips with a minimum of 300 km/day for outstation." },
      { question: "Is the Urbania good for hill station trips?", answer: "Yes, the Urbania handles hill roads well. Its powerful diesel engine and modern suspension provide a comfortable ride even on winding mountain roads." },
      { question: "Can I book the Urbania for a corporate outing?", answer: "Absolutely. The Force Urbania is our most popular choice for corporate outings, team trips, and office events due to its premium comfort and professional appearance." },
      { question: "Does the Urbania have luggage space?", answer: "Yes, the Urbania has a dedicated rear luggage compartment that can accommodate 6+ large bags. Additional luggage can be stored in overhead racks inside the cabin." }
    ],
    comparisons: ["maharaja-tempo", "ac-deluxe-tempo"]
  },

  "xuv700": {
    name: "Mahindra XUV700",
    slug: "xuv700",
    tagline: "Technology Meets Power",
    category: "Premium SUV",
    seats: 7,
    luggage: "3 large + 2 small bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual / Automatic",
    perKmRate: { outstation: "\u20B922/km", local: "\u20B925/km" },
    packages: {
      halfDay: "\u20B95,000 (4 hrs / 40 km)",
      fullDay: "\u20B98,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B922/km (min 300 km/day)"
    },
    features: ["AC", "ADAS Safety", "Panoramic Sunroof", "Alexa Built-in", "Wireless Charging", "Connected Car Tech", "Dual-Zone Climate"],
    bestFor: ["Tech-savvy travelers", "Long highway drives", "Family road trips", "Premium outstation"],
    specs: { engine: "2.2L mHawk Diesel", power: "182 BHP", mileage: "13-16 km/l", bootSpace: "350L" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B95,060", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B96,160", distance: "280 km" },
      { route: "Delhi to Manali", price: "\u20B911,660", distance: "530 km" },
      { route: "Delhi to Shimla", price: "\u20B97,700", distance: "350 km" },
      { route: "Delhi to Nainital", price: "\u20B96,820", distance: "310 km" },
      { route: "Delhi to Haridwar", price: "\u20B95,280", distance: "240 km" },
      { route: "Delhi to Rishikesh", price: "\u20B95,500", distance: "250 km" }
    ],
    description: `The Mahindra XUV700 is India's most technologically advanced SUV, packed with features like ADAS (Advanced Driver Assistance System), a panoramic sunroof, Alexa voice control, and connected car technology. With 182 BHP on tap, it delivers both power and sophistication.

Triveni Cabs offers the XUV700 for travelers who want the latest in automotive technology combined with the comfort of a full-size SUV. The XUV700 sits between the Innova Crysta and Fortuner in our fleet, offering premium features at a competitive price point.

The ADAS safety suite includes adaptive cruise control, lane keep assist, and automatic emergency braking, making long highway drives safer and more relaxed. The dual-zone climate control, wireless charging, and premium sound system ensure all passengers enjoy a first-class experience.

Book the Mahindra XUV700 with Triveni Cabs at \u20B922/km for outstation trips and experience the future of SUV travel in India.`,
    faqs: [
      { question: "What is the per km rate for XUV700 rental?", answer: "The XUV700 rental starts at \u20B922/km for outstation trips and \u20B925/km for local travel with a minimum of 300 km/day for outstation." },
      { question: "How many passengers can the XUV700 seat?", answer: "The XUV700 seats 7 passengers including the driver with a 2+3+2 layout. The second row is spacious with captain seats on higher variants." },
      { question: "What safety features does the XUV700 have?", answer: "The XUV700 comes with ADAS including adaptive cruise control, lane keep assist, automatic emergency braking, 7 airbags, and ESP. It is one of the safest SUVs on Indian roads." },
      { question: "XUV700 vs Innova Crysta: Which is better for rental?", answer: "The XUV700 offers more tech features, sunroof, and modern design at \u20B922/km. The Innova Crysta offers proven reliability and more interior space at \u20B918/km. Choose based on your preference." },
      { question: "Is the XUV700 comfortable for long trips?", answer: "Very comfortable. The ADAS features reduce driver fatigue, the suspension is tuned for highway cruising, and the panoramic sunroof adds to the travel experience." },
      { question: "Does the XUV700 have a sunroof?", answer: "Yes, our XUV700 fleet includes the top variant with a large panoramic sunroof, perfect for enjoying scenic hill station drives." }
    ],
    comparisons: ["innova-crysta", "fortuner"]
  },

  "maharaja-tempo": {
    name: "Maharaja Tempo Traveller",
    slug: "maharaja-tempo",
    tagline: "Royal Group Travel Experience",
    category: "Luxury Tempo Traveller",
    seats: "12-17",
    luggage: "8+ large bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKmRate: { outstation: "\u20B926/km", local: "\u20B930/km" },
    packages: {
      halfDay: "\u20B96,500 (4 hrs / 40 km)",
      fullDay: "\u20B910,500 (8 hrs / 80 km)",
      outstationPerKm: "\u20B926/km (min 300 km/day)"
    },
    features: ["AC", "Luxury Pushback Seats", "LED TV", "Music System", "USB Charging", "Curtains", "Ice Box", "Shoe Rack"],
    bestFor: ["Pilgrimage tours", "Wedding groups", "Corporate retreats", "Family reunions"],
    specs: { engine: "2.6L Diesel", power: "115 BHP (Force Traveller)", mileage: "8-10 km/l", bootSpace: "Rear luggage carrier" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B95,980", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B97,280", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B96,240", distance: "240 km" },
      { route: "Delhi to Rishikesh", price: "\u20B96,500", distance: "250 km" },
      { route: "Delhi to Nainital", price: "\u20B98,060", distance: "310 km" },
      { route: "Delhi to Manali", price: "\u20B913,780", distance: "530 km" },
      { route: "Delhi to Shimla", price: "\u20B99,100", distance: "350 km" },
      { route: "Delhi to Mussoorie", price: "\u20B97,280", distance: "280 km" }
    ],
    description: `The Maharaja Tempo Traveller is the premium choice for group travel in India. Featuring luxury pushback seats, LED TV entertainment, powerful AC, and a lavishly appointed interior, the Maharaja variant transforms group travel from ordinary to extraordinary.

Triveni Cabs offers Maharaja Tempo Travellers in 12-seater and 17-seater configurations, both featuring VIP-level amenities. The pushback seats recline significantly for maximum comfort on long journeys, while the LED TV keeps passengers entertained during travel.

The Maharaja Tempo is the preferred choice for Char Dham Yatra, Do Dham pilgrimages, Rajasthan tours, and wedding guest transfers. The spacious interior, roof-mounted luggage carrier, and ice box make multi-day trips comfortable and convenient.

Book a Maharaja Tempo Traveller with Triveni Cabs starting at \u20B926/km. Available in 12 and 17-seater variants with professional drivers experienced in hill and highway driving.`,
    faqs: [
      { question: "What is the difference between Maharaja and regular tempo traveller?", answer: "The Maharaja variant features luxury pushback seats with more recline, LED TV, premium interior, curtains, ice box, and shoe rack. Regular tempo travellers have standard fixed seats and basic amenities." },
      { question: "How many seats are available in a Maharaja Tempo?", answer: "We offer Maharaja Tempo Travellers in 12-seater and 17-seater variants. The 12-seater offers more space per passenger." },
      { question: "What is the per km rate for Maharaja Tempo?", answer: "The Maharaja Tempo Traveller rate is \u20B926/km for outstation with a minimum of 300 km/day. Local usage is \u20B930/km." },
      { question: "Is the Maharaja Tempo good for Char Dham Yatra?", answer: "Yes, the Maharaja Tempo is one of the most popular vehicles for Char Dham Yatra. The comfortable seats, powerful engine, and experienced hill drivers make it ideal for the pilgrimage route." },
      { question: "Does the Maharaja Tempo have a TV?", answer: "Yes, all our Maharaja Tempo Travellers are equipped with LED TV screens for passenger entertainment during long journeys." },
      { question: "Can I book a Maharaja Tempo for a wedding?", answer: "Absolutely. The Maharaja Tempo is very popular for wedding guest transfers, baraat parties, and mehndi events. We can arrange decorated vehicles on request." },
      { question: "How much luggage space does the Maharaja Tempo have?", answer: "The Maharaja Tempo has a roof-mounted luggage carrier and some rear storage. It can easily handle 8+ large bags for group travel." }
    ],
    comparisons: ["ac-deluxe-tempo", "force-urbania"]
  },

  "ac-deluxe-tempo": {
    name: "AC Deluxe Tempo Traveller",
    slug: "ac-deluxe-tempo",
    tagline: "Comfortable Group Travel on a Budget",
    category: "Standard Tempo Traveller",
    seats: "12-17",
    luggage: "8+ large bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKmRate: { outstation: "\u20B924/km", local: "\u20B927/km" },
    packages: {
      halfDay: "\u20B95,500 (4 hrs / 40 km)",
      fullDay: "\u20B99,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B924/km (min 300 km/day)"
    },
    features: ["AC", "Standard Seats", "Music System", "USB Charging", "Curtains", "First Aid Kit"],
    bestFor: ["Budget group travel", "School excursions", "Office outings", "Pilgrimage tours"],
    specs: { engine: "2.6L Diesel", power: "115 BHP", mileage: "8-10 km/l", bootSpace: "Rear luggage carrier" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B95,520", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B96,720", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B95,760", distance: "240 km" },
      { route: "Delhi to Rishikesh", price: "\u20B96,000", distance: "250 km" },
      { route: "Delhi to Nainital", price: "\u20B97,440", distance: "310 km" },
      { route: "Delhi to Manali", price: "\u20B912,720", distance: "530 km" },
      { route: "Delhi to Shimla", price: "\u20B98,400", distance: "350 km" }
    ],
    description: `The AC Deluxe Tempo Traveller is the most popular and affordable option for group travel in India. With comfortable standard seats, reliable AC, and ample luggage space, it provides excellent value for groups of 10-17 passengers traveling together.

Triveni Cabs offers AC Deluxe Tempo Travellers in 12-seater and 17-seater variants, perfect for school excursions, office outings, pilgrimages, and family group trips. The AC Deluxe variant offers all essential comforts at a lower price point compared to the Maharaja variant.

The vehicle comes equipped with a music system, curtains for privacy, USB charging points, and a first aid kit. The roof carrier provides ample space for group luggage. Our experienced drivers are well-versed in both highway and hill station routes.

Book an AC Deluxe Tempo Traveller with Triveni Cabs at just \u20B924/km for outstation trips. The most cost-effective way to travel as a group.`,
    faqs: [
      { question: "What is the difference between AC Deluxe and Maharaja Tempo?", answer: "The AC Deluxe has standard comfortable seats while the Maharaja has luxury pushback seats, LED TV, and premium interiors. The AC Deluxe is \u20B924/km vs Maharaja at \u20B926/km." },
      { question: "How many people can travel in an AC Deluxe Tempo?", answer: "We offer 12-seater and 17-seater AC Deluxe Tempo Travellers. The 17-seater is the most popular choice for large groups." },
      { question: "Is the AC Deluxe Tempo good for hill stations?", answer: "Yes, the AC Deluxe Tempo handles hill roads well. Our drivers are experienced with routes to Manali, Shimla, Nainital, Mussoorie, and other hill destinations." },
      { question: "What is included in the AC Deluxe Tempo rental?", answer: "The rental includes the vehicle, professional driver, AC, music system, and 24/7 support. Toll taxes and parking are paid separately." },
      { question: "Can I book for a school trip?", answer: "Yes, the AC Deluxe Tempo is very popular for school excursions and educational tours. We provide safe, verified drivers and well-maintained vehicles for school groups." },
      { question: "What is the minimum booking for AC Deluxe Tempo?", answer: "The minimum booking is 300 km/day for outstation trips at \u20B924/km. For local usage, the rate is \u20B927/km with a minimum of 4 hours or 8 hours package." }
    ],
    comparisons: ["maharaja-tempo", "mini-bus-20-seater"]
  },

  "mini-bus-20-seater": {
    name: "Mini Bus 20-Seater",
    slug: "mini-bus-20-seater",
    tagline: "Perfect for Medium Groups",
    category: "Mini Bus",
    seats: 20,
    luggage: "10+ large bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Manual",
    perKmRate: { outstation: "\u20B930/km", local: "\u20B935/km" },
    packages: {
      halfDay: "\u20B98,000 (4 hrs / 40 km)",
      fullDay: "\u20B913,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B930/km (min 300 km/day)"
    },
    features: ["AC", "Pushback Seats", "Music System", "PA System", "Curtains", "Luggage Hold", "First Aid Kit"],
    bestFor: ["Medium groups", "Corporate outings", "Wedding guests", "Pilgrimage groups"],
    specs: { engine: "3.8L Diesel", power: "130 BHP", mileage: "6-8 km/l", bootSpace: "Under-floor luggage hold" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B96,900", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B98,400", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B97,200", distance: "240 km" },
      { route: "Delhi to Rishikesh", price: "\u20B97,500", distance: "250 km" },
      { route: "Delhi to Nainital", price: "\u20B99,300", distance: "310 km" },
      { route: "Delhi to Shimla", price: "\u20B910,500", distance: "350 km" },
      { route: "Delhi to Manali", price: "\u20B915,900", distance: "530 km" }
    ],
    description: `The 20-Seater Mini Bus fills the sweet spot between tempo travellers and full-size buses, offering the ideal solution for medium-sized groups of 15-20 passengers. With comfortable pushback seats, dedicated luggage hold, and powerful AC, it provides bus-level amenities in a more maneuverable package.

Triveni Cabs offers 20-seater mini bus rentals for corporate outings, wedding guest transfers, school trips, and pilgrimage tours. The mini bus is easier to navigate on narrow roads compared to full-size coaches, making it suitable for hill station destinations too.

The under-floor luggage hold means no compromise on passenger space, and the PA system is perfect for tour guides or group announcements. All our mini buses are regularly serviced and sanitized.

Book a 20-seater mini bus with Triveni Cabs at \u20B930/km for outstation trips. The best choice when your group is too large for a tempo traveller but does not need a full 45-seater bus.`,
    faqs: [
      { question: "What is the per km rate for a 20-seater mini bus?", answer: "The 20-seater mini bus rental is \u20B930/km for outstation with a minimum of 300 km/day. Local rates are \u20B935/km." },
      { question: "Is the mini bus suitable for hill stations?", answer: "Yes, the 20-seater mini bus is more maneuverable than larger buses and can handle most hill station roads. However, for very narrow mountain roads, a tempo traveller may be more suitable." },
      { question: "Does the mini bus have luggage space?", answer: "Yes, the 20-seater mini bus has a dedicated under-floor luggage hold that can accommodate 10+ large suitcases without taking up passenger space." },
      { question: "Mini bus vs tempo traveller: Which should I book?", answer: "Book a tempo traveller (12-17 seats) for smaller groups. Book the 20-seater mini bus when you have 15-20 passengers. The mini bus offers better luggage space and a PA system." },
      { question: "Can I book a mini bus for a wedding?", answer: "Yes, the 20-seater mini bus is popular for ferrying wedding guests between venues, hotel-to-venue transfers, and destination wedding group transport." },
      { question: "Does the mini bus have AC?", answer: "Yes, all our 20-seater mini buses come with powerful AC systems suitable for Indian summers. The AC is regularly serviced for optimal cooling." }
    ],
    comparisons: ["ac-deluxe-tempo", "volvo-bus-45-seater"]
  },

  "volvo-bus-45-seater": {
    name: "Volvo Bus 45-Seater",
    slug: "volvo-bus-45-seater",
    tagline: "Luxury Travel for Large Groups",
    category: "Luxury Coach",
    seats: 45,
    luggage: "45+ large bags",
    ac: true,
    fuelType: "Diesel",
    transmission: "Automatic",
    perKmRate: { outstation: "\u20B945/km", local: "\u20B950/km" },
    packages: {
      halfDay: "\u20B918,000 (4 hrs / 40 km)",
      fullDay: "\u20B930,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B945/km (min 300 km/day)"
    },
    features: ["AC", "Volvo Recliner Seats", "LED TV", "PA System", "Washroom", "Wi-Fi", "Charging Points", "Curtains", "Reading Lights"],
    bestFor: ["Corporate events", "Destination weddings", "Large group tours", "Conference shuttles"],
    specs: { engine: "8.0L Diesel", power: "330 BHP", mileage: "4-5 km/l", bootSpace: "Large under-floor cargo hold" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B910,350", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B912,600", distance: "280 km" },
      { route: "Delhi to Haridwar", price: "\u20B910,800", distance: "240 km" },
      { route: "Delhi to Rishikesh", price: "\u20B911,250", distance: "250 km" },
      { route: "Delhi to Nainital", price: "\u20B913,950", distance: "310 km" },
      { route: "Delhi to Shimla", price: "\u20B915,750", distance: "350 km" },
      { route: "Delhi to Manali", price: "\u20B923,850", distance: "530 km" }
    ],
    description: `The 45-Seater Volvo Bus is the ultimate in luxury group transportation. Featuring Volvo recliner seats, LED TV entertainment, onboard washroom, Wi-Fi connectivity, and the legendary Volvo ride quality, this bus transforms group travel into a premium experience.

Triveni Cabs offers 45-seater Volvo bus rentals for corporate events, destination weddings, large group tours, and conference shuttles. The Volvo recliner seats ensure passenger comfort on even the longest journeys, while the onboard amenities keep everyone entertained and connected.

The massive under-floor cargo hold can accommodate luggage for all 45 passengers, and the air-ride suspension delivers a smooth, vibration-free ride. The powerful 330 BHP engine handles expressways and even gradual hill routes with ease.

Book a 45-seater Volvo Bus with Triveni Cabs at \u20B945/km. Perfect for groups of 30-45 passengers who demand premium comfort on their journey.`,
    faqs: [
      { question: "What is the rental rate for a 45-seater Volvo Bus?", answer: "The 45-seater Volvo Bus rental is \u20B945/km for outstation with a minimum of 300 km/day. Local rates are \u20B950/km." },
      { question: "Does the Volvo Bus have a washroom?", answer: "Yes, our 45-seater Volvo Buses come equipped with an onboard washroom, which is especially convenient for long-distance travel." },
      { question: "Does the Volvo Bus have Wi-Fi?", answer: "Yes, Wi-Fi connectivity is available on our Volvo Buses. Passengers can stay connected during the journey." },
      { question: "Can the Volvo Bus go to hill stations?", answer: "The Volvo Bus is suitable for destinations accessible via wide roads. For narrow hill station roads like those to Manali or Shimla, the bus can operate on the main highways. Some very narrow stretches may require alternative arrangements." },
      { question: "How to book a Volvo Bus for a wedding?", answer: "Call us at 7668570551 or WhatsApp to discuss your requirements. We need the date, pickup location, destination, number of guests, and any special arrangements. Advance booking of 5-7 days is recommended." },
      { question: "What amenities are included in the Volvo Bus?", answer: "AC, Volvo recliner seats, LED TV, PA system, washroom, Wi-Fi, individual charging points, reading lights, curtains, and a large under-floor luggage hold are all included." },
      { question: "Can the Volvo Bus be used for corporate events?", answer: "Yes, the Volvo Bus is our most popular choice for corporate events, conferences, and team outings. The PA system, Wi-Fi, and premium seating make it ideal for professional groups." }
    ],
    comparisons: ["mini-bus-20-seater", "luxury-car-rental"]
  },

  "luxury-car-rental": {
    name: "Luxury Car (BMW / Audi / Mercedes)",
    slug: "luxury-car-rental",
    tagline: "Travel in Ultimate Luxury",
    category: "Luxury Sedan / SUV",
    seats: 4,
    luggage: "2 large + 2 small bags",
    ac: true,
    fuelType: "Petrol / Diesel",
    transmission: "Automatic",
    perKmRate: { outstation: "\u20B950/km", local: "\u20B960/km" },
    packages: {
      halfDay: "\u20B912,000 (4 hrs / 40 km)",
      fullDay: "\u20B920,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B950/km (min 300 km/day)"
    },
    features: ["AC", "Leather Interior", "Premium Sound System", "Ambient Lighting", "Massage Seats", "Wi-Fi Hotspot", "Sunroof", "Climate Control"],
    bestFor: ["VIP transport", "Celebrity travel", "Corporate executives", "Special occasions"],
    specs: { engine: "2.0L-3.0L Petrol/Diesel", power: "190-350 BHP", mileage: "8-15 km/l", bootSpace: "400-500L" },
    popularRoutes: [
      { route: "Delhi to Agra", price: "\u20B911,500", distance: "230 km" },
      { route: "Delhi to Jaipur", price: "\u20B914,000", distance: "280 km" },
      { route: "Delhi Airport Transfer", price: "\u20B95,000", distance: "25-40 km" },
      { route: "Delhi to Chandigarh", price: "\u20B912,500", distance: "250 km" },
      { route: "Delhi to Shimla", price: "\u20B917,500", distance: "350 km" },
      { route: "Delhi to Dehradun", price: "\u20B912,500", distance: "250 km" }
    ],
    description: `Experience the pinnacle of automotive luxury with Triveni Cabs' premium fleet of BMW, Audi, and Mercedes-Benz vehicles. Our luxury car rental service brings world-class chauffeur-driven travel to India's discerning travelers, from corporate leaders to celebrities.

Choose from models like the BMW 5 Series, Audi A6, Mercedes-Benz E-Class, BMW X5, Audi Q7, and Mercedes GLS for the ultimate travel experience. Every vehicle in our luxury fleet is immaculately maintained, and our chauffeurs are trained to deliver five-star service.

The luxury car experience includes leather interiors, premium sound systems, ambient lighting, climate control, and in some models, massage seats and Wi-Fi connectivity. These vehicles make a statement at every destination, whether it is a business meeting, wedding venue, or airport.

Book a luxury car with Triveni Cabs starting at \u20B950/km. We offer BMW, Audi, and Mercedes for hire with professional chauffeurs. Advance booking recommended for availability.`,
    faqs: [
      { question: "Which luxury car brands do you offer?", answer: "We offer BMW (3 Series, 5 Series, 7 Series, X5), Audi (A4, A6, Q7), and Mercedes-Benz (C-Class, E-Class, S-Class, GLS) for rental with professional chauffeurs." },
      { question: "What is the rental rate for luxury cars?", answer: "Luxury car rental starts at \u20B950/km for outstation and \u20B960/km for local travel. Rates vary by specific model. Contact us for exact pricing for your preferred model." },
      { question: "Can I rent a luxury car for a wedding?", answer: "Yes, luxury cars are available for wedding events including groom entry, bride transport, and VIP guest transfers. We offer decorated luxury vehicles for weddings." },
      { question: "Is advance booking required for luxury cars?", answer: "Yes, we recommend booking luxury cars at least 3-7 days in advance as availability of specific models varies. For peak season and weddings, book 2-3 weeks ahead." },
      { question: "Do luxury cars come with a chauffeur?", answer: "Yes, all our luxury cars come with professionally trained chauffeurs in formal attire. Self-drive is not available for luxury vehicles." },
      { question: "Can I choose a specific car model?", answer: "Yes, you can request a specific model (e.g., BMW 5 Series or Mercedes E-Class). We will confirm availability based on your date and location. Alternative models of similar class may be offered if your first choice is unavailable." }
    ],
    comparisons: ["fortuner", "vintage-car-rental"]
  },

  "electric-car": {
    name: "Electric Car (EV Taxi)",
    slug: "electric-car",
    tagline: "Go Green, Travel Clean",
    category: "Electric Vehicle",
    seats: 4,
    luggage: "2 large + 1 small bag",
    ac: true,
    fuelType: "Electric",
    transmission: "Automatic",
    perKmRate: { outstation: "\u20B915/km", local: "\u20B917/km" },
    packages: {
      halfDay: "\u20B92,500 (4 hrs / 40 km)",
      fullDay: "\u20B94,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B915/km (min 250 km/day)"
    },
    features: ["AC", "Zero Emissions", "Silent Ride", "Automatic Transmission", "Regenerative Braking", "Fast Charging", "Digital Instrument Cluster"],
    bestFor: ["Eco-conscious travelers", "City commute", "Airport transfers", "Short outstation trips"],
    specs: { engine: "Electric Motor", power: "127-170 BHP", mileage: "300-500 km range", bootSpace: "350L" },
    popularRoutes: [
      { route: "Delhi Airport Transfer", price: "\u20B91,500", distance: "25-40 km" },
      { route: "Delhi to Agra", price: "\u20B93,450", distance: "230 km" },
      { route: "Delhi to Mathura", price: "\u20B92,550", distance: "170 km" },
      { route: "Delhi Local Full Day", price: "\u20B94,000", distance: "80 km" },
      { route: "Delhi to Chandigarh", price: "\u20B93,750", distance: "250 km" },
      { route: "Delhi to Jaipur", price: "\u20B94,200", distance: "280 km" }
    ],
    description: `Triveni Cabs is proud to introduce electric vehicle (EV) taxi services for eco-conscious travelers. Our electric car fleet offers a silent, smooth, zero-emission travel experience that is better for the planet and surprisingly affordable.

Our EV fleet includes models like the Tata Nexon EV, MG ZS EV, and Hyundai Kona Electric, offering ranges of 300-500 km on a single charge. With India's growing EV charging network, electric car travel is now practical for both city commutes and short outstation trips.

The electric driving experience is remarkably different from conventional vehicles. Instant torque delivers smooth acceleration, regenerative braking extends range, and the near-silent cabin creates a peaceful travel environment. Automatic transmission ensures effortless driving in city traffic.

Book an electric car with Triveni Cabs at just \u20B915/km for outstation trips. Join the green revolution and travel sustainably without compromising on comfort or convenience.`,
    faqs: [
      { question: "What electric car models do you offer?", answer: "We offer Tata Nexon EV, MG ZS EV, and Hyundai Kona Electric. Model availability depends on the city and route." },
      { question: "What is the range of your electric cars?", answer: "Our electric cars have a range of 300-500 km on a single charge depending on the model. This is sufficient for most city travel and short outstation trips." },
      { question: "Can I take an electric car for outstation trips?", answer: "Yes, electric cars are suitable for outstation trips up to 250-300 km one way. For longer distances, a charging stop may be required. Routes on expressways with charging stations are well-supported." },
      { question: "Is the electric car rate cheaper than petrol cars?", answer: "Yes, at \u20B915/km the electric car rate is comparable to an Ertiga and much cheaper per km than the running cost of a petrol vehicle. You get premium silent travel at economy prices." },
      { question: "How long does it take to charge the electric car?", answer: "Fast charging takes 30-60 minutes to reach 80%. If a charging stop is needed on your route, we plan it during a meal break so there is no wasted time." },
      { question: "Is the electric car comfortable?", answer: "Yes, electric cars offer an exceptionally smooth and quiet ride. The instant torque provides smooth acceleration, and the cabin is nearly silent compared to diesel or petrol vehicles." }
    ],
    comparisons: ["swift-dzire", "ertiga"]
  },

  "vintage-car-rental": {
    name: "Vintage Car (Non-Wedding)",
    slug: "vintage-car-rental",
    tagline: "Classic Rides for Special Occasions",
    category: "Vintage / Classic Car",
    seats: 4,
    luggage: "1 large + 1 small bag",
    ac: false,
    fuelType: "Petrol",
    transmission: "Manual",
    perKmRate: { outstation: "\u20B940/km", local: "\u20B950/km" },
    packages: {
      halfDay: "\u20B910,000 (4 hrs / 40 km)",
      fullDay: "\u20B918,000 (8 hrs / 80 km)",
      outstationPerKm: "\u20B940/km (min 200 km/day)"
    },
    features: ["Classic Styling", "Retro Interior", "Chrome Accents", "Vintage Horn", "White Wall Tires", "Chauffeur in Period Attire"],
    bestFor: ["Film shoots", "Photo sessions", "Corporate events", "Special occasions", "Birthday celebrations"],
    specs: { engine: "Varies (Ambassador / Contessa)", power: "55-85 BHP", mileage: "8-12 km/l", bootSpace: "200L" },
    popularRoutes: [
      { route: "Delhi City Tour", price: "\u20B910,000", distance: "40 km (4 hrs)" },
      { route: "Delhi Full Day", price: "\u20B918,000", distance: "80 km (8 hrs)" },
      { route: "Jaipur City Tour", price: "\u20B910,000", distance: "40 km (4 hrs)" },
      { route: "Agra City Tour", price: "\u20B910,000", distance: "40 km (4 hrs)" },
      { route: "Film Shoot (per day)", price: "\u20B920,000", distance: "Custom" },
      { route: "Photo Session (2 hrs)", price: "\u20B96,000", distance: "Stationary" }
    ],
    description: `Step back in time with Triveni Cabs' vintage car rental service. Our collection of classic Ambassador and Contessa cars, beautifully restored and maintained, offers a unique travel experience that turns heads and creates lasting memories.

Unlike our wedding vintage car service, this non-wedding rental is designed for film shoots, brand photo sessions, corporate events, birthday celebrations, city tours with a retro twist, and anyone who appreciates the charm of classic Indian automobiles.

The Hindustan Ambassador, once the king of Indian roads, and the Contessa, India's muscle car, are both available in immaculate condition with chrome accents, vintage interiors, and that unmistakable classic car charm. Our chauffeurs can even dress in period-appropriate attire for an authentic experience.

Book a vintage car with Triveni Cabs starting at \u20B940/km or \u20B910,000 for a half-day package. Perfect for creating Instagram-worthy moments and unforgettable experiences. Advance booking of 7-10 days is required.`,
    faqs: [
      { question: "What vintage car models do you offer?", answer: "We offer the Hindustan Ambassador (various years) and Contessa Classic. Both are beautifully restored with period-correct details and modern reliability improvements." },
      { question: "Are vintage cars available for film shoots?", answer: "Yes, our vintage cars are frequently used in Bollywood and ad film shoots. We offer full-day film shoot packages at \u20B920,000/day with flexible scheduling." },
      { question: "Do vintage cars have AC?", answer: "Most vintage cars do not have factory AC. Some restored models have had AC retrofitted. Please discuss your requirements while booking and we will try to accommodate." },
      { question: "How far in advance should I book a vintage car?", answer: "We recommend booking 7-10 days in advance for vintage cars as availability is limited. For film shoots and events, 2-3 weeks advance notice is preferred." },
      { question: "Can I use a vintage car for a city tour?", answer: "Absolutely! A vintage car city tour is one of our most popular experiences. Imagine touring Jaipur or Delhi in a classic Ambassador. It creates a completely unique travel memory." },
      { question: "Is this different from your wedding vintage car service?", answer: "Yes, this service is for non-wedding occasions like film shoots, corporate events, photo sessions, and special celebrations. Our wedding car rental service has separate pricing and decoration options." },
      { question: "Can the chauffeur wear vintage attire?", answer: "Yes, we can arrange for the chauffeur to wear period-appropriate attire (safari suit, vintage cap, etc.) for an authentic classic car experience. Please request this while booking." }
    ],
    comparisons: ["luxury-car-rental", "fortuner"]
  }
};

// Helper function to get all vehicle slugs for generateStaticParams
export function getAllVehicleHireSlugs() {
  return Object.keys(vehicleHirePages);
}

// Helper function to get vehicle data by slug
export function getVehicleHireData(slug) {
  return vehicleHirePages[slug] || null;
}

// Get all vehicles as an array
export function getAllVehicleHirePages() {
  return Object.values(vehicleHirePages);
}
