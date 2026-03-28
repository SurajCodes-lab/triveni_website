// src/utilis/cabServiceCityData.js - Complete data for 15 Cab Service City Hub pages

function createCity({ slug, city, tagline, serviceOverrides, fleetOverrides, popularRoutes, faqOverrides }) {
  const defaultServices = [
    { name: 'Local Taxi', description: `Hourly rental cab within ${city} for shopping, meetings, and city tours`, startingPrice: 1500 },
    { name: 'Outstation Cab', description: `One-way and round-trip cabs from ${city} to all major cities`, startingPrice: 2500 },
    { name: 'Airport Transfer', description: `Reliable pickup and drop to ${city} airport with flight tracking`, startingPrice: 999 },
    { name: 'Railway Station Taxi', description: `Instant cab from ${city} railway station to any destination`, startingPrice: 499 },
    { name: 'Wedding Car Rental', description: `Decorated luxury cars for weddings and special events in ${city}`, startingPrice: 5000 },
  ];

  const defaultFleet = [
    { type: 'Sedan', model: 'Swift Dzire / Etios', perKm: 11, seats: 4 },
    { type: 'SUV', model: 'Innova Crysta / Ertiga', perKm: 14, seats: 6 },
    { type: 'Luxury', model: 'BMW / Mercedes', perKm: 35, seats: 4 },
    { type: 'Tempo Traveller', model: 'Force Traveller 12-Seater', perKm: 20, seats: 12 },
  ];

  const services = serviceOverrides || defaultServices;
  const fleet = fleetOverrides || defaultFleet;

  const defaultFaqs = [
    { question: `What is the cheapest cab service in ${city}?`, answer: `Triveni Cabs offers the most affordable cab service in ${city} starting at ₹${services[0].startingPrice} for local trips and ₹11/km for outstation. All fares include driver, fuel, and AC with no hidden charges.` },
    { question: `How do I book a cab in ${city}?`, answer: `Book instantly by calling 7668570551 or WhatsApp. Share your pickup location, destination, date, and time. You'll receive a confirmed booking with driver details within 15 minutes.` },
    { question: `Is Triveni Cabs available 24/7 in ${city}?`, answer: `Yes, Triveni Cabs operates 24 hours a day, 7 days a week in ${city}. Whether you need an early morning airport pickup or late night railway station drop, we're always available.` },
    { question: `What types of cabs are available in ${city}?`, answer: `We offer Sedan (4-seater), SUV (6-seater), Luxury cars (BMW/Mercedes), and Tempo Traveller (12-seater) in ${city}. All vehicles are AC, well-maintained, and GPS-tracked.` },
    { question: `Do you offer one-way cab from ${city}?`, answer: `Yes, we offer one-way cab service from ${city} to all major cities. One-way saves up to 50% compared to round-trip. Sedan from ₹11/km, SUV from ₹14/km.` },
    { question: `Are toll and parking charges included in ${city} cab fare?`, answer: `Base fare includes driver, fuel, and AC. Toll charges, parking fees, and state tax are extra at actual. For local ${city} trips, parking is usually included.` },
  ];

  return {
    slug,
    city,
    tagline,
    services,
    fleet,
    popularRoutes,
    faqs: faqOverrides || defaultFaqs,
  };
}

const cabServiceCities = {
  "delhi": createCity({
    slug: "delhi", city: "Delhi",
    tagline: "24/7 Cab Booking in Delhi NCR — Airport, Local, Outstation from ₹499",
    popularRoutes: [
      { to: 'Agra', distance: '230 km', fare: '₹2,530', time: '3-4 hrs' },
      { to: 'Jaipur', distance: '280 km', fare: '₹3,080', time: '5 hrs' },
      { to: 'Chandigarh', distance: '250 km', fare: '₹2,750', time: '4.5 hrs' },
      { to: 'Haridwar', distance: '230 km', fare: '₹2,530', time: '5 hrs' },
      { to: 'Shimla', distance: '350 km', fare: '₹3,850', time: '7 hrs' },
    ],
  }),
  "agra": createCity({
    slug: "agra", city: "Agra",
    tagline: "Agra Cab Service — Taj Mahal Tours, Local Sightseeing & Outstation from ₹499",
    popularRoutes: [
      { to: 'Delhi', distance: '230 km', fare: '₹2,530', time: '3-4 hrs' },
      { to: 'Jaipur', distance: '240 km', fare: '₹2,640', time: '4.5 hrs' },
      { to: 'Mathura', distance: '58 km', fare: '₹1,500', time: '1.5 hrs' },
      { to: 'Fatehpur Sikri', distance: '40 km', fare: '₹1,500', time: '1 hr' },
      { to: 'Lucknow', distance: '335 km', fare: '₹3,685', time: '6 hrs' },
    ],
  }),
  "jaipur": createCity({
    slug: "jaipur", city: "Jaipur",
    tagline: "Jaipur Taxi Service — Pink City Tours, Heritage Cabs & Rajasthan Outstation",
    popularRoutes: [
      { to: 'Delhi', distance: '280 km', fare: '₹3,080', time: '5 hrs' },
      { to: 'Agra', distance: '240 km', fare: '₹2,640', time: '4.5 hrs' },
      { to: 'Udaipur', distance: '395 km', fare: '₹4,345', time: '6 hrs' },
      { to: 'Jodhpur', distance: '340 km', fare: '₹3,740', time: '5.5 hrs' },
      { to: 'Pushkar', distance: '145 km', fare: '₹1,595', time: '3 hrs' },
    ],
  }),
  "chandigarh": createCity({
    slug: "chandigarh", city: "Chandigarh",
    tagline: "Chandigarh Cab Service — Hill Station Trips, Airport Transfers & City Tours",
    popularRoutes: [
      { to: 'Delhi', distance: '250 km', fare: '₹2,750', time: '4.5 hrs' },
      { to: 'Shimla', distance: '115 km', fare: '₹1,500', time: '3 hrs' },
      { to: 'Manali', distance: '310 km', fare: '₹3,410', time: '7 hrs' },
      { to: 'Dharamshala', distance: '240 km', fare: '₹2,640', time: '5 hrs' },
      { to: 'Amritsar', distance: '230 km', fare: '₹2,530', time: '4 hrs' },
    ],
  }),
  "lucknow": createCity({
    slug: "lucknow", city: "Lucknow",
    tagline: "Lucknow Cab Booking — Nawabi City Tours, Outstation & Airport Taxi Service",
    popularRoutes: [
      { to: 'Agra', distance: '335 km', fare: '₹3,685', time: '6 hrs' },
      { to: 'Varanasi', distance: '300 km', fare: '₹3,300', time: '5.5 hrs' },
      { to: 'Ayodhya', distance: '135 km', fare: '₹1,500', time: '3 hrs' },
      { to: 'Delhi', distance: '550 km', fare: '₹6,050', time: '8 hrs' },
      { to: 'Prayagraj', distance: '200 km', fare: '₹2,200', time: '4 hrs' },
    ],
  }),
  "varanasi": createCity({
    slug: "varanasi", city: "Varanasi",
    tagline: "Varanasi Taxi Service — Ghat Tours, Temple Circuits & Spiritual Journeys",
    popularRoutes: [
      { to: 'Ayodhya', distance: '200 km', fare: '₹2,200', time: '4 hrs' },
      { to: 'Prayagraj', distance: '125 km', fare: '₹1,500', time: '2.5 hrs' },
      { to: 'Bodh Gaya', distance: '250 km', fare: '₹2,750', time: '5 hrs' },
      { to: 'Lucknow', distance: '300 km', fare: '₹3,300', time: '5.5 hrs' },
      { to: 'Sarnath', distance: '13 km', fare: '₹499', time: '30 min' },
    ],
  }),
  "amritsar": createCity({
    slug: "amritsar", city: "Amritsar",
    tagline: "Amritsar Cab Service — Golden Temple, Wagah Border & Punjab-Himachal Trips",
    popularRoutes: [
      { to: 'Delhi', distance: '450 km', fare: '₹4,950', time: '7 hrs' },
      { to: 'Dharamshala', distance: '190 km', fare: '₹2,090', time: '4 hrs' },
      { to: 'Chandigarh', distance: '230 km', fare: '₹2,530', time: '4 hrs' },
      { to: 'Dalhousie', distance: '200 km', fare: '₹2,200', time: '5 hrs' },
      { to: 'Wagah Border', distance: '30 km', fare: '₹999', time: '45 min' },
    ],
  }),
  "haridwar": createCity({
    slug: "haridwar", city: "Haridwar",
    tagline: "Haridwar Cab Booking — Char Dham, Rishikesh & Uttarakhand Tour Packages",
    popularRoutes: [
      { to: 'Rishikesh', distance: '35 km', fare: '₹999', time: '1 hr' },
      { to: 'Delhi', distance: '230 km', fare: '₹2,530', time: '5 hrs' },
      { to: 'Dehradun', distance: '55 km', fare: '₹1,500', time: '1.5 hrs' },
      { to: 'Mussoorie', distance: '90 km', fare: '₹1,500', time: '3 hrs' },
      { to: 'Kedarnath (road end)', distance: '250 km', fare: '₹2,750', time: '8 hrs' },
    ],
  }),
  "dehradun": createCity({
    slug: "dehradun", city: "Dehradun",
    tagline: "Dehradun Taxi Service — Mussoorie Trips, Char Dham & Airport Transfers",
    popularRoutes: [
      { to: 'Mussoorie', distance: '35 km', fare: '₹999', time: '1.5 hrs' },
      { to: 'Haridwar', distance: '55 km', fare: '₹1,500', time: '1.5 hrs' },
      { to: 'Rishikesh', distance: '45 km', fare: '₹1,500', time: '1 hr' },
      { to: 'Delhi', distance: '255 km', fare: '₹2,805', time: '5.5 hrs' },
      { to: 'Nainital', distance: '295 km', fare: '₹3,245', time: '7 hrs' },
    ],
  }),
  "noida": createCity({
    slug: "noida", city: "Noida",
    tagline: "Noida Cab Service — NCR Airport Transfers, Corporate & Outstation Cabs",
    popularRoutes: [
      { to: 'Agra', distance: '200 km', fare: '₹2,200', time: '3 hrs' },
      { to: 'Delhi Airport', distance: '40 km', fare: '₹999', time: '1 hr' },
      { to: 'Jaipur', distance: '300 km', fare: '₹3,300', time: '5 hrs' },
      { to: 'Mathura', distance: '150 km', fare: '₹1,650', time: '2.5 hrs' },
      { to: 'Haridwar', distance: '220 km', fare: '₹2,420', time: '5 hrs' },
    ],
  }),
  "gurgaon": createCity({
    slug: "gurgaon", city: "Gurgaon",
    tagline: "Gurgaon Cab Booking — Corporate Cabs, Airport Shuttle & Weekend Getaways",
    popularRoutes: [
      { to: 'Delhi Airport', distance: '25 km', fare: '₹799', time: '45 min' },
      { to: 'Jaipur', distance: '260 km', fare: '₹2,860', time: '4.5 hrs' },
      { to: 'Agra', distance: '230 km', fare: '₹2,530', time: '3.5 hrs' },
      { to: 'Neemrana', distance: '100 km', fare: '₹1,500', time: '2 hrs' },
      { to: 'Shimla', distance: '350 km', fare: '₹3,850', time: '7 hrs' },
    ],
  }),
  "udaipur": createCity({
    slug: "udaipur", city: "Udaipur",
    tagline: "Udaipur Taxi Service — City of Lakes Tours, Rajasthan Circuit & Wedding Cars",
    popularRoutes: [
      { to: 'Jaipur', distance: '395 km', fare: '₹4,345', time: '6 hrs' },
      { to: 'Jodhpur', distance: '250 km', fare: '₹2,750', time: '4.5 hrs' },
      { to: 'Mount Abu', distance: '165 km', fare: '₹1,815', time: '3 hrs' },
      { to: 'Ahmedabad', distance: '260 km', fare: '₹2,860', time: '4 hrs' },
      { to: 'Chittorgarh', distance: '115 km', fare: '₹1,500', time: '2.5 hrs' },
    ],
  }),
  "jodhpur": createCity({
    slug: "jodhpur", city: "Jodhpur",
    tagline: "Jodhpur Cab Service — Blue City Tours, Desert Safaris & Rajasthan Circuits",
    popularRoutes: [
      { to: 'Jaisalmer', distance: '285 km', fare: '₹3,135', time: '5 hrs' },
      { to: 'Jaipur', distance: '340 km', fare: '₹3,740', time: '5.5 hrs' },
      { to: 'Udaipur', distance: '250 km', fare: '₹2,750', time: '4.5 hrs' },
      { to: 'Mount Abu', distance: '265 km', fare: '₹2,915', time: '4.5 hrs' },
      { to: 'Delhi', distance: '600 km', fare: '₹6,600', time: '9 hrs' },
    ],
  }),
  "shimla": createCity({
    slug: "shimla", city: "Shimla",
    tagline: "Shimla Taxi Service — Hill Station Tours, Manali Circuit & Kufri Trips",
    popularRoutes: [
      { to: 'Manali', distance: '250 km', fare: '₹2,750', time: '7 hrs' },
      { to: 'Chandigarh', distance: '115 km', fare: '₹1,500', time: '3 hrs' },
      { to: 'Delhi', distance: '350 km', fare: '₹3,850', time: '7 hrs' },
      { to: 'Kufri', distance: '15 km', fare: '₹999', time: '45 min' },
      { to: 'Narkanda', distance: '65 km', fare: '₹1,500', time: '2 hrs' },
    ],
  }),
  "rishikesh": createCity({
    slug: "rishikesh", city: "Rishikesh",
    tagline: "Rishikesh Cab Service — Adventure Capital Trips, Char Dham & Spiritual Tours",
    popularRoutes: [
      { to: 'Haridwar', distance: '35 km', fare: '₹999', time: '1 hr' },
      { to: 'Delhi', distance: '240 km', fare: '₹2,640', time: '5.5 hrs' },
      { to: 'Dehradun', distance: '45 km', fare: '₹1,500', time: '1 hr' },
      { to: 'Mussoorie', distance: '75 km', fare: '₹1,500', time: '2.5 hrs' },
      { to: 'Chopta', distance: '190 km', fare: '₹2,090', time: '6 hrs' },
    ],
  }),
};

export function getCabServiceCity(slug) {
  return cabServiceCities[slug] || null;
}

export function getAllCabServiceSlugs() {
  return Object.keys(cabServiceCities);
}

export function getRelatedCabCities(slug, limit = 4) {
  const all = Object.values(cabServiceCities);
  return all.filter(c => c.slug !== slug).slice(0, limit);
}
