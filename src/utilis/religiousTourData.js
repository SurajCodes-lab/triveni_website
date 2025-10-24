export const religiousTours = [
  {
    id: 1,
    slug: "char-dham-yatra",
    title: "Char Dham Yatra – The Ultimate Himalayan Pilgrimage",
    subtitle: "Uttarakhand",
    tagline: "Your Partner in Faith & Comfort",
    description: "The Char Dham Yatra is one of India's most sacred pilgrimages, believed to wash away sins and lead the soul toward salvation. Located high in the Garhwal Himalayas of Uttarakhand, the Char Dham includes Yamunotri, Gangotri, Kedarnath, and Badrinath — each temple dedicated to a different deity and divine energy.",
    spiritualSignificance: "Embark on this 10- to 12-day spiritual expedition with Triveni Cabs, where every mile combines devotion, comfort, and safety.",

    duration: "10 – 12 Days",
    route: "Delhi → Haridwar → Yamunotri → Gangotri → Kedarnath → Badrinath → Delhi",

    highlights: [
      {
        name: "Yamunotri Dham",
        description: "The origin of River Yamuna; visit the temple of Goddess Yamuna amidst snow-clad peaks.",
        deity: "Goddess Yamuna",
        icon: "🏔️"
      },
      {
        name: "Gangotri Dham",
        description: "Dedicated to Goddess Ganga, this sacred site marks the birthplace of the River Ganga.",
        deity: "Goddess Ganga",
        icon: "🌊"
      },
      {
        name: "Kedarnath Dham",
        description: "One of the 12 Jyotirlingas of Lord Shiva, nestled near the Mandakini River.",
        deity: "Lord Shiva",
        icon: "🕉️"
      },
      {
        name: "Badrinath Dham",
        description: "Dedicated to Lord Vishnu; a beautiful temple surrounded by majestic Himalayan landscapes.",
        deity: "Lord Vishnu",
        icon: "🙏"
      }
    ],

    attractions: [
      "Scenic drives through Haridwar, Uttarkashi, Guptkashi, and Joshimath",
      "Evening Ganga Aarti at Har Ki Pauri in Haridwar",
      "Breathtaking Himalayan landscapes",
      "Ancient temple architecture and spiritual heritage"
    ],

    inclusions: [
      "Clean & sanitized vehicles (Sedan / SUV / Tempo Traveller / Luxury Coach)",
      "Experienced and polite pilgrimage drivers",
      "Pickup & drop from your home or hotel",
      "Assistance for temple registration & local sightseeing",
      "Flexible itinerary and hotel options"
    ],

    whyChoose: [
      {
        title: "Trusted Drivers",
        description: "Experienced drivers familiar with mountain terrain",
        icon: "👨‍✈️"
      },
      {
        title: "Transparent Pricing",
        description: "No hidden costs — what you see is what you pay",
        icon: "💰"
      },
      {
        title: "24×7 Support",
        description: "Round-the-clock on-trip assistance",
        icon: "📞"
      },
      {
        title: "Customizable",
        description: "Option to customize or add nearby destinations",
        icon: "✨"
      }
    ],

    images: {
      hero: "/images/packages/chardham.jpg"
    },

    pricing: {
      starting: "₹45,000",
      note: "Per vehicle (varies by vehicle type and season)"
    },

    bestTime: "May to October",

    itinerary: [
      { day: 1, title: "Delhi to Haridwar", description: "Departure from Delhi, reach Haridwar, attend Ganga Aarti" },
      { day: 2, title: "Haridwar to Yamunotri", description: "Journey to Yamunotri, darshan and overnight stay" },
      { day: 3, title: "Yamunotri to Gangotri", description: "Visit Gangotri temple, explore the sacred river origin" },
      { day: 4, title: "Gangotri to Guptkashi", description: "Travel to Guptkashi via scenic mountain routes" },
      { day: 5, title: "Guptkashi to Kedarnath", description: "Trek to Kedarnath temple, one of the holiest shrines" },
      { day: 6, title: "Kedarnath to Guptkashi", description: "Return trek and drive back to Guptkashi" },
      { day: 7, title: "Guptkashi to Badrinath", description: "Journey to Badrinath via Joshimath" },
      { day: 8, title: "Badrinath Sightseeing", description: "Full day at Badrinath temple and nearby attractions" },
      { day: 9, title: "Badrinath to Haridwar", description: "Return journey to Haridwar" },
      { day: 10, title: "Haridwar to Delhi", description: "Return to Delhi with blessed memories" }
    ],

    keywords: ["char dham yatra", "uttarakhand pilgrimage", "kedarnath badrinath tour", "yamunotri gangotri", "himalayan pilgrimage", "spiritual tour india"],

    featured: true,
    popular: true
  }
];

// Helper function to get tour by slug
export const getTourBySlug = (slug) => {
  return religiousTours.find(tour => tour.slug === slug);
};

// Helper function to get all tour slugs
export const getAllTourSlugs = () => {
  return religiousTours.map(tour => tour.slug);
};
