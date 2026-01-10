// Event Transportation Service Data
// SEO-optimized content for event transportation services

export const eventCategories = [
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    icon: '🏛️',
    color: 'from-blue-500 to-indigo-600',
    description: 'Professional transportation for business gatherings',
    events: [
      { name: 'Conferences & Seminars', desc: 'Multi-point guest transportation' },
      { name: 'AGMs & Board Meetings', desc: 'Executive shuttle services' },
      { name: 'Product Launches', desc: 'VIP and media transport' },
      { name: 'Trade Shows & Exhibitions', desc: 'Team and visitor shuttles' },
      { name: 'Team Building & Retreats', desc: 'Offsite event transportation' }
    ]
  },
  {
    id: 'mice',
    title: 'MICE Events',
    icon: '🎪',
    color: 'from-purple-500 to-pink-600',
    description: 'Meetings, Incentives, Conferences & Exhibitions',
    events: [
      { name: 'Meetings', desc: 'Business meeting transportation' },
      { name: 'Incentive Trips', desc: 'Reward trip logistics' },
      { name: 'Conferences', desc: 'Large-scale delegate transport' },
      { name: 'Exhibitions', desc: 'Visitor shuttle management' },
      { name: 'Award Ceremonies', desc: 'VIP guest transportation' }
    ]
  },
  {
    id: 'social-events',
    title: 'Social Events',
    icon: '🎉',
    color: 'from-pink-500 to-rose-600',
    description: 'Memorable transportation for special occasions',
    events: [
      { name: 'Weddings & Engagements', desc: 'Complete baarat & guest transport' },
      { name: 'Pre-Wedding Functions', desc: 'Mehendi, sangeet, haldi logistics' },
      { name: 'Birthday Celebrations', desc: 'Party guest transportation' },
      { name: 'Anniversary Parties', desc: 'Family gathering transport' },
      { name: 'Family Gatherings', desc: 'Reunion and function logistics' }
    ]
  },
  {
    id: 'large-gatherings',
    title: 'Large Gatherings',
    icon: '👥',
    color: 'from-orange-500 to-amber-600',
    description: 'Mass transportation for mega events',
    events: [
      { name: 'Political Rallies', desc: 'Large-scale crowd transport' },
      { name: 'Religious Congregations', desc: 'Pilgrimage and satsang transport' },
      { name: 'Sports Events', desc: 'Team and spectator shuttles' },
      { name: 'Cultural Festivals', desc: 'Festival attendee transport' },
      { name: 'College & School Events', desc: 'Student group transportation' }
    ]
  }
];

export const eventServices = [
  {
    id: 'guest-transport',
    title: 'Guest Transportation',
    icon: '🚘',
    services: [
      { name: 'VIP & VVIP Transfers', desc: 'Luxury vehicles for important guests' },
      { name: 'Delegate Transportation', desc: 'Scheduled pickups for attendees' },
      { name: 'Speaker & Artist Pick-ups', desc: 'Dedicated vehicles for performers' },
      { name: 'Attendee Shuttle Services', desc: 'Regular shuttles between venues' }
    ]
  },
  {
    id: 'event-fleet',
    title: 'Fleet for Events',
    icon: '🚐',
    services: [
      { name: 'Luxury Sedans', desc: 'For executives and VIP guests' },
      { name: 'Premium SUVs', desc: 'For VVIPs and small groups' },
      { name: 'Tempo Travellers', desc: '12-26 seater for group transport' },
      { name: 'AC Buses', desc: '32-56 seater for large groups' },
      { name: 'Decorated Wedding Vehicles', desc: 'Special baarat and bridal cars' }
    ]
  },
  {
    id: 'event-support',
    title: 'Event Support',
    icon: '🎯',
    services: [
      { name: 'Multi-Point Coordination', desc: 'Synchronized pickups from multiple locations' },
      { name: 'Venue-to-Venue Transfers', desc: 'Seamless inter-venue movement' },
      { name: 'Airport-to-Venue Shuttles', desc: '24/7 arrival management' },
      { name: 'Emergency Backup Vehicles', desc: 'Standby fleet for contingencies' },
      { name: 'Real-Time Coordination', desc: 'Live tracking and communication' }
    ]
  }
];

export const eventFleet = [
  {
    id: 'luxury-sedan',
    name: 'Luxury Sedan',
    capacity: '4 Passengers',
    ideal: 'VIP guests, speakers, executives',
    vehicles: ['Mercedes', 'BMW', 'Audi', 'Toyota Camry'],
    features: ['Premium Interiors', 'Chauffeur Service', 'AC', 'Privacy'],
    priceRange: 'On Request',
    icon: '🚗',
    image: '/images/wedding/luxury_car.jpg',
    highlight: true
  },
  {
    id: 'innova-crysta',
    name: 'Innova Crysta / SUV',
    capacity: '6-7 Passengers',
    ideal: 'VVIPs, small groups, family guests',
    vehicles: ['Innova Crysta', 'Fortuner', 'XUV700'],
    features: ['Spacious', 'Premium', 'AC', 'GPS Tracking'],
    priceRange: '₹18-22/km',
    icon: '🚙',
    image: '/images/wedding/premium_suv.jpg',
    highlight: false
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    capacity: '12-26 Passengers',
    ideal: 'Group guests, relative transport',
    vehicles: ['12 Seater', '17 Seater', '20 Seater', '26 Seater Maharaja'],
    features: ['AC', 'Pushback Seats', 'Music', 'Charging Points'],
    priceRange: '₹23-27/km',
    icon: '🚐',
    image: '/images/tempo/17_seater.jpg',
    highlight: true
  },
  {
    id: 'ac-bus',
    name: 'AC Luxury Bus',
    capacity: '32-56 Passengers',
    ideal: 'Large guest groups, mass transport',
    vehicles: ['32 Seater', '41 Seater', '45 Seater', '56 Seater'],
    features: ['AC', 'Recliner Seats', 'PA System', 'Entertainment'],
    priceRange: '₹55-85/km',
    icon: '🚌',
    image: '/images/bus/45_SEATER_BUS.jpg',
    highlight: true
  },
  {
    id: 'wedding-special',
    name: 'Wedding Special',
    capacity: 'Customized',
    ideal: 'Baarat, bridal car, wedding procession',
    vehicles: ['Decorated Innova', 'Vintage Cars', 'Open Jeeps', 'Luxury Sedans'],
    features: ['Flower Decoration', 'Ribbons', 'Special Lighting', 'Music System'],
    priceRange: 'On Request',
    icon: '💒',
    image: '/images/wedding/vintage_car.jpg',
    highlight: true
  }
];

export const eventCities = {
  delhi: {
    name: 'Delhi',
    slug: 'delhi',
    title: 'Event Transportation Service in Delhi',
    metaTitle: 'Event Transportation Delhi | Wedding, Corporate Event Transport | Triveni Cabs',
    metaDescription: 'Premium event transportation in Delhi NCR. Wedding guest transport, corporate event shuttles, MICE logistics. 500+ events handled. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'Delhi NCR Event Capital',
    subtitle: '500+ Successful Events Served',
    description: 'Triveni Cabs is Delhi NCR premier event transportation partner, handling weddings at luxury venues like Taj Palace and Leela, corporate conferences at Pragati Maidan, and MICE events across the capital. Our extensive fleet and experienced coordination team ensure flawless guest transportation for events of any scale.',
    highlights: [
      'Wedding venues - Taj Palace, ITC Maurya, The Leela',
      'Convention centers - Pragati Maidan, IEML Greater Noida',
      'Farmhouse events - Chattarpur, Mehrauli',
      'Corporate parks - Aerocity, Cyber Hub'
    ],
    popularVenues: [
      { name: 'Taj Palace Hotel', type: 'Luxury Wedding' },
      { name: 'Pragati Maidan', type: 'Exhibitions & MICE' },
      { name: 'IEML Greater Noida', type: 'Trade Shows' },
      { name: 'Farmhouse Chattarpur', type: 'Destination Events' }
    ],
    stats: {
      eventsHandled: '500+',
      happyClients: '2000+',
      yearsExperience: '15+'
    },
    eventTypes: ['Weddings', 'Corporate Events', 'MICE', 'Trade Shows', 'Political Events'],
    keywords: ['event transportation delhi', 'wedding car delhi', 'corporate event transport delhi ncr', 'mice transport delhi', 'guest shuttle delhi', 'wedding guest transport delhi']
  },
  agra: {
    name: 'Agra',
    slug: 'agra',
    title: 'Event Transportation Service in Agra',
    metaTitle: 'Event Transportation Agra | Destination Wedding Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Agra. Destination weddings near Taj Mahal, corporate events, MICE logistics. Professional service. Call 7668570551.',
    heroImage: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    tagline: 'Taj City Wedding Destination',
    subtitle: 'Making Agra Events Memorable',
    description: 'Agra, with its iconic Taj Mahal backdrop, is India premier destination wedding location. Triveni Cabs specializes in event transportation for weddings at heritage hotels, corporate events at convention facilities, and tourist group management. Our local expertise ensures smooth logistics for your Agra event.',
    highlights: [
      'Destination weddings at Oberoi Amarvilas, ITC Mughal',
      'Heritage venue events - Agra Fort views',
      'Corporate retreats and conferences',
      'Tourist group management for events'
    ],
    popularVenues: [
      { name: 'Oberoi Amarvilas', type: 'Luxury Wedding' },
      { name: 'ITC Mughal', type: 'Heritage Events' },
      { name: 'Jaypee Palace', type: 'Conferences' },
      { name: 'Crystal Sarovar', type: 'Corporate Events' }
    ],
    stats: {
      eventsHandled: '150+',
      happyClients: '500+',
      yearsExperience: '12+'
    },
    eventTypes: ['Destination Weddings', 'Heritage Events', 'Corporate Retreats', 'Tourist Groups'],
    keywords: ['event transportation agra', 'destination wedding agra', 'wedding transport taj mahal', 'corporate event agra', 'guest transport agra']
  },
  jaipur: {
    name: 'Jaipur',
    slug: 'jaipur',
    title: 'Event Transportation Service in Jaipur',
    metaTitle: 'Event Transportation Jaipur | Royal Wedding Transport | Triveni Cabs',
    metaDescription: 'Royal event transportation in Jaipur. Palace weddings, corporate events, MICE logistics. Experienced in heritage venues. Call 7668570551.',
    heroImage: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
    tagline: 'Pink City Royal Events',
    subtitle: 'India Premier Wedding & Event Destination',
    description: 'Jaipur, the Pink City, offers unparalleled royal wedding experiences at majestic palaces and heritage hotels. Triveni Cabs brings extensive experience in managing transportation for palace weddings at City Palace, Samode, and Rambagh, along with corporate events at JKK and JECC. Experience royal treatment for your guests.',
    highlights: [
      'Palace weddings - City Palace, Samode Palace, Rambagh',
      'Heritage hotels - Taj Jai Mahal, Oberoi Rajvilas',
      'Convention centers - JECC, JKK, Birla Auditorium',
      'Desert camp events and offsite venues'
    ],
    popularVenues: [
      { name: 'City Palace', type: 'Royal Wedding' },
      { name: 'Rambagh Palace', type: 'Luxury Events' },
      { name: 'JECC', type: 'Exhibitions & MICE' },
      { name: 'Samode Palace', type: 'Heritage Wedding' }
    ],
    stats: {
      eventsHandled: '300+',
      happyClients: '1200+',
      yearsExperience: '14+'
    },
    eventTypes: ['Royal Weddings', 'Palace Events', 'MICE', 'Corporate Retreats', 'Cultural Festivals'],
    keywords: ['event transportation jaipur', 'royal wedding jaipur', 'palace wedding transport', 'corporate event jaipur', 'mice transport jaipur', 'wedding car jaipur']
  },
  chandigarh: {
    name: 'Chandigarh',
    slug: 'chandigarh',
    title: 'Event Transportation Service in Chandigarh',
    metaTitle: 'Event Transportation Chandigarh | Wedding & Corporate Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Chandigarh Tricity. Wedding venues, corporate events, MICE logistics. Serving Chandigarh, Mohali, Panchkula. Call 7668570551.',
    heroImage: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    tagline: 'Tricity Event Excellence',
    subtitle: 'Serving Chandigarh-Mohali-Panchkula Events',
    description: 'Chandigarh Tricity region hosts spectacular weddings and corporate events at premium venues across Chandigarh, Mohali, and Panchkula. Triveni Cabs provides seamless event transportation services covering all three cities, ensuring your guests travel comfortably between venues, hotels, and airports.',
    highlights: [
      'Wedding venues across Tricity region',
      'Corporate events at CII Chandigarh, hotels',
      'IT sector annual gatherings and conferences',
      'Zirakpur and Mohali farmhouse events'
    ],
    popularVenues: [
      { name: 'JW Marriott', type: 'Luxury Events' },
      { name: 'Hyatt Regency', type: 'Corporate Events' },
      { name: 'Farmhouses Zirakpur', type: 'Wedding Venues' },
      { name: 'CII Chandigarh', type: 'Conferences' }
    ],
    stats: {
      eventsHandled: '200+',
      happyClients: '800+',
      yearsExperience: '10+'
    },
    eventTypes: ['Weddings', 'Corporate Events', 'IT Conferences', 'Social Gatherings'],
    keywords: ['event transportation chandigarh', 'wedding transport chandigarh', 'corporate event chandigarh', 'mice transport mohali', 'tricity event logistics']
  },
  dehradun: {
    name: 'Dehradun',
    slug: 'dehradun',
    title: 'Event Transportation Service in Dehradun',
    metaTitle: 'Event Transportation Dehradun | Hill Station Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Dehradun & Mussoorie. Hill station weddings, corporate retreats, adventure events. Call 7668570551.',
    heroImage: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
    tagline: 'Uttarakhand Event Gateway',
    subtitle: 'Hill Station Events & Retreats',
    description: 'Dehradun and Mussoorie offer stunning hill station settings for destination weddings and corporate retreats. Triveni Cabs specializes in navigating mountain roads, providing reliable transportation for events at luxury resorts, heritage properties, and scenic outdoor venues in the Doon Valley.',
    highlights: [
      'Mussoorie resort weddings and events',
      'Corporate retreats at forest resorts',
      'Adventure team building transportation',
      'Rishikesh event connectivity'
    ],
    popularVenues: [
      { name: 'JW Marriott Mussoorie', type: 'Luxury Events' },
      { name: 'Jaypee Residency', type: 'Corporate Retreats' },
      { name: 'Forest Resorts', type: 'Team Building' },
      { name: 'Rishikesh Camps', type: 'Adventure Events' }
    ],
    stats: {
      eventsHandled: '100+',
      happyClients: '400+',
      yearsExperience: '8+'
    },
    eventTypes: ['Destination Weddings', 'Corporate Retreats', 'Adventure Events', 'Family Gatherings'],
    keywords: ['event transportation dehradun', 'mussoorie wedding transport', 'corporate retreat dehradun', 'hill station event transport', 'destination wedding uttarakhand']
  }
};

export const eventBenefits = [
  {
    icon: '🎯',
    title: 'Dedicated Coordination',
    description: 'Single point of contact for all transportation needs'
  },
  {
    icon: '📍',
    title: 'Multi-Point Pickup',
    description: 'Coordinated pickups from multiple locations simultaneously'
  },
  {
    icon: '🚐',
    title: 'Diverse Fleet',
    description: 'Sedans to buses - all vehicle types available'
  },
  {
    icon: '⏰',
    title: 'Punctual Service',
    description: 'On-time arrivals for seamless event flow'
  },
  {
    icon: '📱',
    title: 'Real-Time Updates',
    description: 'Live tracking and status updates for organizers'
  },
  {
    icon: '🔄',
    title: 'Backup Vehicles',
    description: 'Emergency standby fleet for contingencies'
  }
];

export const eventFAQs = [
  {
    question: 'What types of events do you provide transportation for?',
    answer: 'We provide transportation for all types of events including weddings (baarat, guest transport, venue shuttles), corporate events (conferences, AGMs, team outings), MICE events (meetings, incentives, exhibitions), social gatherings (birthdays, anniversaries), and large events (political rallies, religious gatherings, sports events).'
  },
  {
    question: 'How do you coordinate guest pickups from multiple locations?',
    answer: 'We assign a dedicated coordinator for your event who plans pickup routes, allocates vehicles, and manages real-time coordination. Our GPS tracking system ensures all vehicles are monitored, and we provide regular updates to the event organizer.'
  },
  {
    question: 'Do you provide decorated vehicles for weddings?',
    answer: 'Yes! We offer specially decorated vehicles for weddings including decorated Innova for baraat, bridal car with flower arrangements, vintage cars for special entry, and open jeeps for groom procession. Decoration charges apply separately.'
  },
  {
    question: 'What happens if there is a vehicle breakdown during the event?',
    answer: 'We maintain backup vehicles on standby for all major events. In case of any breakdown, a replacement vehicle is dispatched immediately to ensure zero disruption to your event transportation.'
  },
  {
    question: 'Can you handle transportation for events with 500+ guests?',
    answer: 'Absolutely! We specialize in large-scale event transportation. We have managed events with 2000+ guests using a combination of buses, tempo travellers, and cars with coordinated timing and multiple pickup points.'
  },
  {
    question: 'Do you offer airport pickup coordination for destination events?',
    answer: 'Yes, we provide 24/7 airport pickup coordination for destination events. We track flight arrivals, manage delayed flights, and ensure guests are picked up promptly with name boards and meet-and-greet service.'
  }
];

export const getAllEventCities = () => {
  return Object.values(eventCities);
};

export const getEventCityBySlug = (slug) => {
  return eventCities[slug] || null;
};

export const getAllEventSlugs = () => {
  return Object.keys(eventCities);
};
