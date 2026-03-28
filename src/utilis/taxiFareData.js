// src/utilis/taxiFareData.js - Complete data for 18 city taxi fare pages
// Base Rates: Sedan ₹11/km, SUV ₹14/km, Tempo ₹20/km | Minimum Fare: ₹300

function generateFaqs(city, baseFare, comparisonWithOla) {
  return [
    { question: `What is the taxi fare per km in ${city}?`, answer: `Taxi fare in ${city} starts at ₹${baseFare.sedan}/km for an AC Sedan, ₹${baseFare.suv}/km for SUV (Innova/Ertiga), and ₹${baseFare.tempo}/km for Tempo Traveller. Triveni Cabs offers the most affordable rates with no surge pricing, unlike Ola/Uber that charge ${comparisonWithOla.ola}.` },
    { question: `How much does a cab cost for a full day in ${city}?`, answer: `A full-day cab (8 hrs/80 km) in ${city} costs approximately ₹2,000-2,500 for Sedan, ₹2,800-3,500 for SUV. Extra km is charged at ₹${baseFare.sedan}/km (Sedan) or ₹${baseFare.suv}/km (SUV). Toll and parking extra at actual.` },
    { question: `Is Triveni Cabs cheaper than Ola/Uber in ${city}?`, answer: `Yes, Triveni Cabs is significantly cheaper. We charge ₹${baseFare.sedan}/km for Sedan vs Ola/Uber's ${comparisonWithOla.ola}. That's a savings of up to ${comparisonWithOla.savings} on every ride. Plus, we have no surge pricing during peak hours or rain.` },
    { question: `Are there any hidden charges in ${city} taxi fare?`, answer: `No hidden charges with Triveni Cabs. Our fare includes driver allowance, fuel, and AC. Only toll charges and state tax (if applicable) are extra at actual. We don't charge booking fees, convenience fees, or peak-hour surcharges.` },
    { question: `What types of cabs are available in ${city}?`, answer: `We offer three vehicle categories in ${city}: Sedan (Swift Dzire/Etios) at ₹${baseFare.sedan}/km, SUV (Innova/Ertiga) at ₹${baseFare.suv}/km, and Tempo Traveller (12-20 seater) at ₹${baseFare.tempo}/km. All vehicles are AC, GPS-tracked, and well-maintained.` },
    { question: `How do I book the cheapest taxi in ${city}?`, answer: `Call Triveni Cabs at 7668570551 or WhatsApp us for the cheapest taxi in ${city}. Book directly to avoid app commissions. We offer flat rates with no surge pricing, making us ${comparisonWithOla.savings} cheaper than ride-hailing apps on average.` },
  ];
}

function createCity({ slug, city, baseFare, minimumFare, surcharges, popularFares, comparisonWithOla, relatedCities }) {
  return {
    slug,
    city,
    baseFare,
    minimumFare,
    surcharges,
    popularFares,
    comparisonWithOla,
    relatedCities: relatedCities || [],
    faqs: generateFaqs(city, baseFare, comparisonWithOla),
  };
}

export const taxiFareCities = {
  "delhi": createCity({
    slug: "delhi", city: "Delhi",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Connaught Place", to: "IGI Airport", distance: 18, fare: 450 },
      { from: "Delhi Station", to: "Noida Sector 62", distance: 28, fare: 550 },
      { from: "Karol Bagh", to: "Gurgaon Cyber City", distance: 32, fare: 600 },
      { from: "Dwarka", to: "India Gate", distance: 25, fare: 500 },
      { from: "Rohini", to: "Saket Mall", distance: 22, fare: 480 },
      { from: "Lajpat Nagar", to: "Chandni Chowk", distance: 12, fare: 350 },
      { from: "Nehru Place", to: "Pitampura", distance: 28, fare: 550 },
      { from: "Vasant Kunj", to: "Red Fort", distance: 24, fare: 500 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["noida", "gurgaon", "agra", "jaipur"],
  }),

  "agra": createCity({
    slug: "agra", city: "Agra",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Taj Mahal", to: "Agra Fort", distance: 4, fare: 300 },
      { from: "Agra Cantt Station", to: "Taj Mahal", distance: 6, fare: 300 },
      { from: "Agra City", to: "Fatehpur Sikri", distance: 40, fare: 500 },
      { from: "Taj Mahal", to: "Mehtab Bagh", distance: 3, fare: 300 },
      { from: "Agra", to: "Mathura", distance: 58, fare: 650 },
      { from: "Idgah Bus Stand", to: "Sikandra", distance: 10, fare: 350 },
      { from: "Dayalbagh", to: "Taj Mahal", distance: 8, fare: 300 },
      { from: "Agra Cantt", to: "Etmad-ud-Daulah", distance: 5, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["delhi", "jaipur", "lucknow", "varanasi"],
  }),

  "jaipur": createCity({
    slug: "jaipur", city: "Jaipur",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Jaipur Station", to: "Amber Fort", distance: 14, fare: 350 },
      { from: "Hawa Mahal", to: "City Palace", distance: 1, fare: 300 },
      { from: "Jaipur Airport", to: "MI Road", distance: 12, fare: 350 },
      { from: "Sindhi Camp", to: "Nahargarh Fort", distance: 15, fare: 380 },
      { from: "Mansarovar", to: "Johari Bazaar", distance: 10, fare: 320 },
      { from: "Jaipur", to: "Ajmer", distance: 135, fare: 1500 },
      { from: "Vaishali Nagar", to: "Jal Mahal", distance: 8, fare: 300 },
      { from: "Tonk Road", to: "Albert Hall Museum", distance: 6, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹15-19/km", triveni: "₹11/km", savings: "35%" },
    relatedCities: ["delhi", "agra", "udaipur", "jodhpur"],
  }),

  "chandigarh": createCity({
    slug: "chandigarh", city: "Chandigarh",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Sector 17", to: "Rock Garden", distance: 4, fare: 300 },
      { from: "Chandigarh Station", to: "Sukhna Lake", distance: 8, fare: 300 },
      { from: "ISBT 43", to: "Elante Mall", distance: 5, fare: 300 },
      { from: "Chandigarh Airport", to: "Sector 35", distance: 12, fare: 350 },
      { from: "Mohali", to: "Panchkula", distance: 18, fare: 400 },
      { from: "Sector 22", to: "Rose Garden", distance: 3, fare: 300 },
      { from: "Chandigarh", to: "Pinjore Gardens", distance: 22, fare: 450 },
      { from: "IT Park", to: "Sector 9", distance: 7, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹14-17/km", triveni: "₹11/km", savings: "28%" },
    relatedCities: ["delhi", "shimla", "manali", "amritsar"],
  }),

  "lucknow": createCity({
    slug: "lucknow", city: "Lucknow",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Hazratganj", to: "Bara Imambara", distance: 5, fare: 300 },
      { from: "Lucknow Station", to: "Gomti Nagar", distance: 10, fare: 320 },
      { from: "Amausi Airport", to: "Hazratganj", distance: 16, fare: 380 },
      { from: "Aminabad", to: "Ambedkar Park", distance: 8, fare: 300 },
      { from: "Charbagh", to: "Lucknow Zoo", distance: 6, fare: 300 },
      { from: "Gomti Nagar", to: "Rumi Darwaza", distance: 12, fare: 350 },
      { from: "Indira Nagar", to: "British Residency", distance: 9, fare: 310 },
      { from: "Alambagh", to: "Dilkusha Garden", distance: 14, fare: 360 },
    ],
    comparisonWithOla: { ola: "₹13-17/km", triveni: "₹11/km", savings: "25%" },
    relatedCities: ["varanasi", "agra", "delhi", "amritsar"],
  }),

  "varanasi": createCity({
    slug: "varanasi", city: "Varanasi",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Varanasi Cantt", to: "Dashashwamedh Ghat", distance: 6, fare: 300 },
      { from: "Varanasi Airport", to: "Assi Ghat", distance: 28, fare: 550 },
      { from: "Sarnath", to: "Kashi Vishwanath", distance: 12, fare: 350 },
      { from: "BHU", to: "Manikarnika Ghat", distance: 5, fare: 300 },
      { from: "Varanasi Junction", to: "Sarnath", distance: 10, fare: 320 },
      { from: "Lanka", to: "Ramnagar Fort", distance: 14, fare: 360 },
      { from: "Sigra", to: "Tulsi Manas Mandir", distance: 4, fare: 300 },
      { from: "Godowlia", to: "Sankat Mochan Temple", distance: 3, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["lucknow", "agra", "delhi", "haridwar"],
  }),

  "amritsar": createCity({
    slug: "amritsar", city: "Amritsar",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Golden Temple", to: "Wagah Border", distance: 32, fare: 600 },
      { from: "Amritsar Station", to: "Golden Temple", distance: 3, fare: 300 },
      { from: "Amritsar Airport", to: "City Center", distance: 12, fare: 350 },
      { from: "Hall Bazaar", to: "Jallianwala Bagh", distance: 1, fare: 300 },
      { from: "Amritsar", to: "Durgiana Temple", distance: 4, fare: 300 },
      { from: "Raja Sansi", to: "Partition Museum", distance: 14, fare: 360 },
      { from: "Amritsar", to: "Pul Kanjri", distance: 25, fare: 500 },
      { from: "Bus Stand", to: "Maharaja Ranjit Singh Museum", distance: 5, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["chandigarh", "delhi", "shimla", "manali"],
  }),

  "haridwar": createCity({
    slug: "haridwar", city: "Haridwar",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Har Ki Pauri", to: "Mansa Devi Temple", distance: 3, fare: 300 },
      { from: "Haridwar Station", to: "Chandi Devi Temple", distance: 6, fare: 300 },
      { from: "Haridwar", to: "Rishikesh", distance: 25, fare: 400 },
      { from: "Haridwar", to: "Rajaji National Park", distance: 10, fare: 320 },
      { from: "Har Ki Pauri", to: "Shantikunj Ashram", distance: 5, fare: 300 },
      { from: "Haridwar Bus Stand", to: "Daksha Mahadev Temple", distance: 4, fare: 300 },
      { from: "Haridwar", to: "Neelkanth Mahadev", distance: 32, fare: 600 },
      { from: "Haridwar", to: "Lakshman Jhula", distance: 28, fare: 550 },
    ],
    comparisonWithOla: { ola: "₹14-17/km", triveni: "₹11/km", savings: "28%" },
    relatedCities: ["rishikesh", "dehradun", "delhi", "mussoorie"],
  }),

  "dehradun": createCity({
    slug: "dehradun", city: "Dehradun",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Dehradun Station", to: "Robbers Cave", distance: 9, fare: 310 },
      { from: "Clock Tower", to: "Sahastradhara", distance: 14, fare: 360 },
      { from: "Dehradun", to: "Mussoorie", distance: 35, fare: 500 },
      { from: "ISBT Dehradun", to: "Forest Research Institute", distance: 6, fare: 300 },
      { from: "Jolly Grant Airport", to: "Dehradun City", distance: 30, fare: 500 },
      { from: "Rajpur Road", to: "Tapkeshwar Temple", distance: 7, fare: 300 },
      { from: "Dehradun", to: "Haridwar", distance: 52, fare: 600 },
      { from: "Dehradun", to: "Rishikesh", distance: 45, fare: 550 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["haridwar", "rishikesh", "mussoorie", "delhi"],
  }),

  "shimla": createCity({
    slug: "shimla", city: "Shimla",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Mall Road", to: "Kufri", distance: 16, fare: 380 },
      { from: "Shimla Station", to: "The Ridge", distance: 2, fare: 300 },
      { from: "Shimla", to: "Narkanda", distance: 65, fare: 720 },
      { from: "Lakkar Bazaar", to: "Jakhoo Temple", distance: 3, fare: 300 },
      { from: "ISBT Shimla", to: "Christ Church", distance: 4, fare: 300 },
      { from: "Shimla", to: "Chail", distance: 45, fare: 550 },
      { from: "Shimla", to: "Mashobra", distance: 12, fare: 350 },
      { from: "Shimla", to: "Naldehra Golf Course", distance: 22, fare: 450 },
    ],
    comparisonWithOla: { ola: "₹16-22/km", triveni: "₹11/km", savings: "40%" },
    relatedCities: ["manali", "chandigarh", "delhi", "dehradun"],
  }),

  "manali": createCity({
    slug: "manali", city: "Manali",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Mall Road Manali", to: "Solang Valley", distance: 14, fare: 360 },
      { from: "Manali", to: "Rohtang Pass", distance: 51, fare: 600 },
      { from: "Old Manali", to: "Hadimba Temple", distance: 3, fare: 300 },
      { from: "Manali Bus Stand", to: "Vashisht Temple", distance: 4, fare: 300 },
      { from: "Manali", to: "Atal Tunnel", distance: 25, fare: 480 },
      { from: "Manali", to: "Kullu", distance: 40, fare: 500 },
      { from: "Manali", to: "Naggar Castle", distance: 22, fare: 450 },
      { from: "Manali", to: "Manikaran", distance: 80, fare: 900 },
    ],
    comparisonWithOla: { ola: "₹18-25/km", triveni: "₹11/km", savings: "45%" },
    relatedCities: ["shimla", "chandigarh", "delhi", "rishikesh"],
  }),

  "udaipur": createCity({
    slug: "udaipur", city: "Udaipur",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "City Palace", to: "Lake Pichola", distance: 1, fare: 300 },
      { from: "Udaipur Station", to: "Fateh Sagar Lake", distance: 5, fare: 300 },
      { from: "Udaipur Airport", to: "City Center", distance: 22, fare: 450 },
      { from: "Udaipur", to: "Kumbhalgarh Fort", distance: 85, fare: 950 },
      { from: "Haldighati", to: "Udaipur", distance: 40, fare: 500 },
      { from: "Udaipur", to: "Ranakpur Jain Temple", distance: 95, fare: 1050 },
      { from: "Saheliyon Ki Bari", to: "Jagdish Temple", distance: 3, fare: 300 },
      { from: "Udaipur", to: "Nathdwara", distance: 48, fare: 550 },
    ],
    comparisonWithOla: { ola: "₹15-20/km", triveni: "₹11/km", savings: "35%" },
    relatedCities: ["jaipur", "jodhpur", "delhi", "agra"],
  }),

  "jodhpur": createCity({
    slug: "jodhpur", city: "Jodhpur",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Mehrangarh Fort", to: "Jaswant Thada", distance: 1, fare: 300 },
      { from: "Jodhpur Station", to: "Clock Tower", distance: 3, fare: 300 },
      { from: "Jodhpur Airport", to: "City Center", distance: 5, fare: 300 },
      { from: "Jodhpur", to: "Osian Temple", distance: 65, fare: 720 },
      { from: "Umaid Bhawan Palace", to: "Mandore Garden", distance: 10, fare: 320 },
      { from: "Jodhpur", to: "Jaisalmer", distance: 285, fare: 3150 },
      { from: "Sardar Market", to: "Rao Jodha Park", distance: 2, fare: 300 },
      { from: "Jodhpur", to: "Mount Abu", distance: 265, fare: 2920 },
    ],
    comparisonWithOla: { ola: "₹15-19/km", triveni: "₹11/km", savings: "33%" },
    relatedCities: ["jaipur", "udaipur", "delhi", "agra"],
  }),

  "rishikesh": createCity({
    slug: "rishikesh", city: "Rishikesh",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Ram Jhula", to: "Laxman Jhula", distance: 3, fare: 300 },
      { from: "Rishikesh Station", to: "Triveni Ghat", distance: 2, fare: 300 },
      { from: "Rishikesh", to: "Haridwar", distance: 25, fare: 400 },
      { from: "Rishikesh", to: "Neelkanth Mahadev", distance: 32, fare: 600 },
      { from: "Tapovan", to: "Beatles Ashram", distance: 5, fare: 300 },
      { from: "Rishikesh", to: "Shivpuri (Rafting)", distance: 16, fare: 380 },
      { from: "Rishikesh", to: "Dehradun", distance: 45, fare: 550 },
      { from: "Rishikesh Bus Stand", to: "Parmarth Niketan", distance: 4, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹15-20/km", triveni: "₹11/km", savings: "35%" },
    relatedCities: ["haridwar", "dehradun", "mussoorie", "delhi"],
  }),

  "nainital": createCity({
    slug: "nainital", city: "Nainital",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Naini Lake", to: "Snow View Point", distance: 3, fare: 300 },
      { from: "Tallital", to: "Naina Devi Temple", distance: 2, fare: 300 },
      { from: "Nainital", to: "Bhimtal", distance: 22, fare: 450 },
      { from: "Mall Road", to: "Tiffin Top", distance: 4, fare: 300 },
      { from: "Nainital", to: "Mukteshwar", distance: 52, fare: 600 },
      { from: "Nainital", to: "Ranikhet", distance: 60, fare: 680 },
      { from: "Nainital Bus Stand", to: "Eco Cave Gardens", distance: 2, fare: 300 },
      { from: "Nainital", to: "Corbett National Park", distance: 65, fare: 720 },
    ],
    comparisonWithOla: { ola: "₹16-22/km", triveni: "₹11/km", savings: "40%" },
    relatedCities: ["delhi", "mussoorie", "rishikesh", "dehradun"],
  }),

  "mussoorie": createCity({
    slug: "mussoorie", city: "Mussoorie",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Mall Road", to: "Kempty Falls", distance: 15, fare: 370 },
      { from: "Library Point", to: "Lal Tibba", distance: 6, fare: 300 },
      { from: "Mussoorie", to: "Dehradun", distance: 35, fare: 500 },
      { from: "Picture Palace", to: "Gun Hill", distance: 2, fare: 300 },
      { from: "Mussoorie", to: "Dhanaulti", distance: 30, fare: 480 },
      { from: "Mussoorie", to: "Haridwar", distance: 82, fare: 910 },
      { from: "Cloud End", to: "Camel Back Road", distance: 5, fare: 300 },
      { from: "Mussoorie Bus Stand", to: "Company Garden", distance: 3, fare: 300 },
    ],
    comparisonWithOla: { ola: "₹18-24/km", triveni: "₹11/km", savings: "45%" },
    relatedCities: ["dehradun", "haridwar", "rishikesh", "delhi"],
  }),

  "noida": createCity({
    slug: "noida", city: "Noida",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Sector 18", to: "IGI Airport", distance: 38, fare: 650 },
      { from: "Sector 62", to: "Connaught Place", distance: 25, fare: 500 },
      { from: "Noida Expressway", to: "DLF Mall of India", distance: 8, fare: 300 },
      { from: "Sector 15", to: "Greater Noida", distance: 25, fare: 500 },
      { from: "Noida City Centre", to: "Worlds of Wonder", distance: 3, fare: 300 },
      { from: "Sector 137", to: "Botanical Garden", distance: 12, fare: 350 },
      { from: "Sector 50", to: "Gurgaon Cyber Hub", distance: 45, fare: 700 },
      { from: "Noida", to: "Agra", distance: 200, fare: 2200 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["delhi", "gurgaon", "agra", "lucknow"],
  }),

  "gurgaon": createCity({
    slug: "gurgaon", city: "Gurgaon",
    baseFare: { sedan: 11, suv: 14, tempo: 20 },
    minimumFare: 300,
    surcharges: { night: "25% after 11 PM", holiday: "10%", airport: "₹100 pickup fee" },
    popularFares: [
      { from: "Cyber City", to: "IGI Airport", distance: 18, fare: 400 },
      { from: "MG Road", to: "Connaught Place", distance: 30, fare: 580 },
      { from: "Sohna Road", to: "Ambience Mall", distance: 10, fare: 320 },
      { from: "Golf Course Road", to: "Sector 29", distance: 5, fare: 300 },
      { from: "DLF Phase 3", to: "Huda City Centre", distance: 4, fare: 300 },
      { from: "Gurgaon", to: "Jaipur", distance: 250, fare: 2750 },
      { from: "Sector 56", to: "Kingdom of Dreams", distance: 8, fare: 300 },
      { from: "Manesar", to: "Cyber Hub", distance: 15, fare: 370 },
    ],
    comparisonWithOla: { ola: "₹14-18/km", triveni: "₹11/km", savings: "30%" },
    relatedCities: ["delhi", "noida", "jaipur", "agra"],
  }),
};

// Helper functions for taxi fare pages
export function getTaxiFareCity(slug) {
  return taxiFareCities[slug] || null;
}

export function getAllTaxiFareSlugs() {
  return Object.keys(taxiFareCities);
}

export function getRelatedTaxiFareCities(slug) {
  const city = taxiFareCities[slug];
  if (!city) return [];
  return city.relatedCities
    .map(rs => taxiFareCities[rs])
    .filter(Boolean)
    .slice(0, 4);
}
