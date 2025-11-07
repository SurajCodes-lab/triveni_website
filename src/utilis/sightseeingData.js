// Sightseeing Tours Data

export const sightseeingTours = {
  jaipur: [
    {
      id: 1,
      name: "Jaipur Full Day City Tour",
      slug: "jaipur-full-day-city-tour",
      shortDescription: "Explore the Pink City's magnificent forts, palaces, and architectural marvels",
      fullDescription: "Experience the royal grandeur of Jaipur with our comprehensive full-day city tour. Visit the iconic Amber Fort with its stunning mirror work, explore the royal City Palace, marvel at the unique facade of Hawa Mahal, and discover the astronomical wonders at Jantar Mantar. This tour perfectly blends history, culture, and architecture.",
      duration: "8-10 hours",
      price: {
        carRental: 6500,
        withGuide: 8000,
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
        {
          time: "09:00 AM",
          activity: "Pick up from hotel/airport",
          duration: "30 mins"
        },
        {
          time: "09:30 AM",
          activity: "Amber Fort visit with elephant ride option",
          duration: "2.5 hours",
          description: "Explore the magnificent fort, Sheesh Mahal (Mirror Palace), and enjoy panoramic views"
        },
        {
          time: "12:00 PM",
          activity: "Jal Mahal photo stop",
          duration: "15 mins",
          description: "Capture stunning photos of the water palace"
        },
        {
          time: "12:30 PM",
          activity: "Lunch break at traditional restaurant",
          duration: "1 hour"
        },
        {
          time: "01:30 PM",
          activity: "City Palace and Museum",
          duration: "1.5 hours",
          description: "Visit royal courtyards, art galleries, and textile museum"
        },
        {
          time: "03:00 PM",
          activity: "Jantar Mantar Observatory",
          duration: "1 hour",
          description: "Discover ancient astronomical instruments"
        },
        {
          time: "04:00 PM",
          activity: "Hawa Mahal visit and photography",
          duration: "45 mins",
          description: "Explore the iconic facade and interior"
        },
        {
          time: "05:00 PM",
          activity: "Local market shopping (Johari Bazaar/Bapu Bazaar)",
          duration: "1 hour",
          description: "Shop for textiles, jewelry, and handicrafts"
        },
        {
          time: "06:00 PM",
          activity: "Drop off at hotel/airport",
          duration: "30 mins"
        }
      ],
      inclusions: [
        "Comfortable AC car with fuel",
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
      imagePrompt: "Majestic view of Amber Fort in Jaipur at golden hour with elephant procession, showcasing the pink sandstone architecture, mirror palace interiors, and panoramic Aravalli hills in background, cinematic photography, warm lighting",
      heroImagePrompt: "Stunning wide-angle hero shot of Hawa Mahal (Palace of Winds) at sunrise in Jaipur, intricate pink sandstone facade with 953 windows, bustling street below with traditional rickshaws, vibrant colors, architectural photography, ultra-detailed, 8k quality",
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
        "Photography is restricted in some palace areas - check before clicking",
        "Keep sufficient time for Amber Fort as it's extensive",
        "Try local Rajasthani cuisine at lunch",
        "Hire audio guides at monuments for detailed information"
      ],
      reviews: {
        averageRating: 4.8,
        totalReviews: 2847,
        highlights: [
          "Excellent guide knowledge",
          "Well-planned itinerary",
          "Comfortable transportation",
          "Great photo opportunities"
        ]
      },
      coordinates: {
        latitude: 26.9124,
        longitude: 75.7873
      },
      nearbyTours: ["jaipur-heritage-walk", "jaipur-night-tour", "ranthambore-day-trip"],
      languages: ["English", "Hindi", "French", "Spanish", "German"],
      groupSize: "1-6 persons per car",
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

// Featured tours for homepage
export const featuredTours = [
  "jaipur-full-day-city-tour" 
];

// Tour categories
export const tourCategories = [
  "Heritage & Culture",
  "Spiritual & Religious",
  "Adventure & Nature",
  "Wildlife Safari",
  "Hill Station",
  "Beach & Coastal"
];
