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
