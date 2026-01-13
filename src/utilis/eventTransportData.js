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
    color: 'from-indigo-500 to-violet-600',
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
    color: 'from-teal-500 to-cyan-600',
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
    color: 'from-slate-600 to-slate-800',
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

// Event Types for dynamic pages
export const eventTypes = [
  {
    slug: 'wedding-transportation',
    name: 'Wedding Transport',
    icon: '💒',
    title: 'Wedding Guest Transportation Services',
    tagline: 'Make Your Special Day Stress-Free',
    description: 'Complete wedding transportation solutions - from baraat arrangements to guest pickups. We handle the logistics so you can focus on celebrating.',
    metaTitle: 'Wedding Transportation Services | Guest Transport for Weddings | Triveni Cabs',
    metaDescription: 'Professional wedding transportation in Delhi, Jaipur, Chandigarh. Baraat cars, guest shuttles, decorated vehicles. 500+ fleet. Book now!',
    keywords: ['wedding transportation', 'wedding car rental', 'baraat car', 'wedding guest transport', 'wedding bus hire', 'decorated wedding car'],
    heroImage: '/images/events/wedding-transportation.jpg',
    color: 'from-cyan-500 to-blue-600',
    features: [
      { icon: '🚗', title: 'Bridal Car', description: 'Luxury decorated car for the bride\'s grand entry' },
      { icon: '🎺', title: 'Baraat Vehicles', description: 'Open jeeps, vintage cars for groom\'s procession' },
      { icon: '🚌', title: 'Guest Shuttles', description: 'Tempo travellers and buses for guest transport' },
      { icon: '✈️', title: 'Airport Transfers', description: 'Pick outstation guests from airports/stations' },
      { icon: '🎊', title: 'Event Transfers', description: 'Transport between mehendi, sangeet, wedding venues' },
      { icon: '👨‍👩‍👧‍👦', title: 'Family Vehicles', description: 'Dedicated cars for immediate family members' }
    ],
    packages: [
      {
        name: 'Basic Wedding Package',
        description: 'Essential transportation for small weddings',
        includes: ['1 Decorated bridal car', '2 Tempo travellers (12 seater)', 'Driver coordination'],
        price: 'Starting ₹15,000',
        ideal: 'Intimate weddings (50-100 guests)'
      },
      {
        name: 'Premium Wedding Package',
        description: 'Complete transport for medium weddings',
        includes: ['1 Luxury bridal car', '1 Baraat vehicle', '4 Tempo travellers', 'Multi-point pickups', 'Coordinator'],
        price: 'Starting ₹35,000',
        ideal: 'Medium weddings (100-300 guests)'
      },
      {
        name: 'Royal Wedding Package',
        description: 'Full-service transport for grand celebrations',
        includes: ['Premium bridal car', 'Vintage baraat car', '2 Luxury buses', '6 Tempo travellers', 'Airport transfers', '24/7 coordinator'],
        price: 'Starting ₹75,000',
        ideal: 'Grand weddings (300+ guests)'
      }
    ],
    faqs: [
      { question: 'How early should I book for my wedding?', answer: 'We recommend booking 3-4 weeks in advance, especially during peak season (October-February). For destination weddings, book 1 month ahead.' },
      { question: 'Can you decorate the wedding cars?', answer: 'Yes! We offer flower decoration for bridal cars and baraat vehicles. Fresh flowers are arranged on the wedding day. Decoration starts from ₹2,000.' },
      { question: 'Do you provide vintage/classic cars?', answer: 'We can arrange vintage cars like Ambassador on request for baraat. These require advance booking.' },
      { question: 'How do you handle multiple pickup locations?', answer: 'Share your guest list with addresses, and we create optimized routes. Our coordinator manages timings to ensure all guests reach together.' }
    ]
  },
  {
    slug: 'corporate-event-transport',
    name: 'Corporate Events',
    icon: '🎪',
    title: 'Corporate Event Transportation',
    tagline: 'Professional Transport for Business Events',
    description: 'Seamless transportation for conferences, seminars, product launches, and corporate gatherings. Impress your delegates with punctual, professional service.',
    metaTitle: 'Corporate Event Transportation | Conference & Seminar Transport | Triveni Cabs',
    metaDescription: 'Corporate event transportation for conferences, seminars, product launches. Airport transfers, venue shuttles, executive cars. Get quote!',
    keywords: ['corporate event transport', 'conference transportation', 'seminar bus hire', 'corporate shuttle service', 'event logistics'],
    heroImage: '/images/events/corporate-event-transport.jpg',
    color: 'from-blue-500 to-indigo-600',
    features: [
      { icon: '✈️', title: 'Airport Transfers', description: 'Meet & greet for delegates arriving by air' },
      { icon: '🚐', title: 'Venue Shuttles', description: 'Regular shuttles between hotels and venue' },
      { icon: '🚗', title: 'Executive Cars', description: 'Premium sedans for VIP speakers' },
      { icon: '🚌', title: 'Delegate Buses', description: 'Comfortable AC buses for large groups' },
      { icon: '📋', title: 'Manifest Management', description: 'Track all pickups with coordination system' },
      { icon: '🌙', title: 'Late Night Service', description: 'Post-dinner and networking event drop-offs' }
    ],
    packages: [
      {
        name: 'Small Conference',
        description: 'For seminars up to 50 delegates',
        includes: ['Airport transfers', '2 Shuttle trips/day', '2 Executive cars', 'Coordinator'],
        price: 'Starting ₹20,000/day',
        ideal: 'Workshops, training sessions'
      },
      {
        name: 'Medium Conference',
        description: 'For 50-200 delegates',
        includes: ['Airport transfers', '4 Shuttle trips/day', '4 Executive cars', '2 Tempo travellers', 'Dedicated coordinator'],
        price: 'Starting ₹45,000/day',
        ideal: 'Industry conferences, seminars'
      },
      {
        name: 'Large Conference',
        description: 'For 200+ delegates',
        includes: ['All airport transfers', 'Continuous shuttles', '6 Executive cars', '2 Luxury buses', 'On-site coordination'],
        price: 'Starting ₹85,000/day',
        ideal: 'National conferences, exhibitions'
      }
    ],
    faqs: [
      { question: 'Can you provide branded vehicles?', answer: 'Yes, we can arrange temporary branding/signage with your company or event logo. This requires 1 week advance notice.' },
      { question: 'How do you track delegate pickups?', answer: 'We provide real-time tracking dashboard and regular updates. Each vehicle has GPS tracking.' },
      { question: 'Do drivers speak English?', answer: 'Yes, for corporate events we assign drivers with basic English. For VIP transfers, better English proficiency available.' },
      { question: 'Can you handle multi-city events?', answer: 'Absolutely! We operate in Delhi, Jaipur, Chandigarh, Agra, and Dehradun. Can coordinate across multiple cities.' }
    ]
  },
  {
    slug: 'concert-festival-transport',
    name: 'Concerts & Festivals',
    icon: '🎵',
    title: 'Concert & Festival Transportation',
    tagline: 'Get Your Crowd There & Back Safely',
    description: 'Large-scale transportation for music concerts, cultural festivals, and entertainment events. Safe, reliable transport for thousands of attendees.',
    metaTitle: 'Concert & Festival Transportation | Event Shuttle Services | Triveni Cabs',
    metaDescription: 'Concert and festival transportation services. Shuttle buses, parking solutions, late-night transport. Handle crowds of any size. Book now!',
    keywords: ['concert transportation', 'festival shuttle', 'event bus hire', 'music festival transport', 'crowd transport'],
    heroImage: '/images/events/concert-festival-transport.jpg',
    color: 'from-indigo-500 to-purple-600',
    features: [
      { icon: '🚌', title: 'Shuttle Services', description: 'Regular shuttles from parking and metro stations' },
      { icon: '🅿️', title: 'Park & Ride', description: 'Remote parking with shuttle to venue' },
      { icon: '🌙', title: 'Late Night Returns', description: 'Safe transport after late-night shows' },
      { icon: '👥', title: 'Group Bookings', description: 'Pre-booked transport for fan groups' },
      { icon: '🎤', title: 'Artist Transport', description: 'Premium vehicles for performers and crew' },
      { icon: '🔄', title: 'Continuous Loops', description: 'Non-stop shuttle loops during event' }
    ],
    packages: [
      {
        name: 'Small Event',
        description: 'For up to 1,000 attendees',
        includes: ['4 Shuttle buses', 'Continuous loops', '2 Premium cars for artists'],
        price: 'Starting ₹30,000',
        ideal: 'Club events, small concerts'
      },
      {
        name: 'Medium Event',
        description: 'For 1,000-5,000 attendees',
        includes: ['8 Shuttle buses', 'Park & ride setup', '4 Premium cars', 'Coordination team'],
        price: 'Starting ₹75,000',
        ideal: 'Music festivals, large concerts'
      },
      {
        name: 'Large Event',
        description: 'For 5,000+ attendees',
        includes: ['15+ Shuttle buses', 'Multiple routes', 'VIP transport', 'Command center', 'Late night service'],
        price: 'Custom Quote',
        ideal: 'Major festivals, stadium events'
      }
    ],
    faqs: [
      { question: 'Can you handle 10,000+ attendees?', answer: 'Yes! We coordinate with partners for large events. Early planning is essential.' },
      { question: 'How do you manage crowd flow?', answer: 'Designated pickup/drop zones, queue management, and continuous shuttle loops prevent overcrowding.' },
      { question: 'Do you provide late-night service?', answer: 'Yes, we operate until all attendees are transported. Late-night charges may apply after midnight.' },
      { question: 'Multi-day festival packages?', answer: 'Absolutely! We offer multi-day packages with consistent service throughout.' }
    ]
  },
  {
    slug: 'sports-event-transport',
    name: 'Sports Events',
    icon: '🏟️',
    title: 'Sports Event Transportation',
    tagline: 'Team Travel & Fan Transport Solutions',
    description: 'Reliable transportation for sports teams, tournaments, and spectators. From local matches to national championships.',
    metaTitle: 'Sports Event Transportation | Team Bus Hire | Tournament Transport | Triveni Cabs',
    metaDescription: 'Sports event transportation for teams and spectators. Team buses, fan shuttles, tournament logistics. Book now!',
    keywords: ['sports team transport', 'team bus hire', 'tournament transportation', 'fan shuttle', 'cricket team bus'],
    heroImage: '/images/events/sports-event-transport.jpg',
    color: 'from-green-500 to-emerald-600',
    features: [
      { icon: '🚌', title: 'Team Buses', description: 'Comfortable buses with equipment space' },
      { icon: '🎫', title: 'Fan Shuttles', description: 'Stadium shuttles from key city points' },
      { icon: '🏆', title: 'Tournament Support', description: 'Multi-day transport for tournaments' },
      { icon: '🏃', title: 'Athlete Transport', description: 'Timely transport to training and matches' },
      { icon: '📦', title: 'Equipment Vehicle', description: 'Separate vehicle for sports equipment' },
      { icon: '🏨', title: 'Hotel Transfers', description: 'Shuttles between team hotel and venue' }
    ],
    packages: [
      {
        name: 'Single Match',
        description: 'Transport for one match day',
        includes: ['Team bus', 'Equipment vehicle', 'Hotel-venue transfers'],
        price: 'Starting ₹15,000',
        ideal: 'Local matches, friendly games'
      },
      {
        name: 'Tournament Package',
        description: 'Multi-day tournament support',
        includes: ['Dedicated team bus', 'Equipment logistics', 'All venue transfers', 'Flexible scheduling'],
        price: 'Starting ₹50,000/week',
        ideal: 'Cricket tournaments, football leagues'
      },
      {
        name: 'League Support',
        description: 'Season-long transportation partner',
        includes: ['Dedicated fleet', 'Priority booking', 'Fixed rates', 'Backup vehicles'],
        price: 'Custom Quote',
        ideal: 'Professional teams, leagues'
      }
    ],
    faqs: [
      { question: 'Can buses accommodate sports equipment?', answer: 'Yes, our buses have luggage compartments. For large equipment, we provide separate equipment vehicle.' },
      { question: 'Early morning transport available?', answer: 'Yes, we operate 24/7. Early morning pickups at standard rates.' },
      { question: 'Outstation tournaments?', answer: 'We regularly transport teams across North India. Outstation packages include driver stay.' },
      { question: 'Fan packages for IPL matches?', answer: 'Yes, during IPL we operate special stadium shuttles. Group bookings get discounts.' }
    ]
  },
  {
    slug: 'religious-event-transport',
    name: 'Religious Events',
    icon: '🛕',
    title: 'Religious Event Transportation',
    tagline: 'Sacred Journeys Made Comfortable',
    description: 'Respectful, reliable transportation for religious ceremonies, pilgrimages, and spiritual gatherings. Serving all faiths with dedication.',
    metaTitle: 'Religious Event Transportation | Pilgrimage Bus Hire | Temple Tour | Triveni Cabs',
    metaDescription: 'Religious event transportation for pilgrimages, temple visits, spiritual gatherings. Char Dham, temple tours. Book now!',
    keywords: ['religious event transport', 'pilgrimage bus', 'temple tour', 'char dham yatra', 'religious tour bus'],
    heroImage: '/images/events/religious-event-transport.jpg',
    color: 'from-teal-500 to-emerald-600',
    features: [
      { icon: '🛕', title: 'Temple Visits', description: 'Day trips to nearby temples and shrines' },
      { icon: '🚌', title: 'Pilgrimage Tours', description: 'Multi-day yatras to sacred destinations' },
      { icon: '🙏', title: 'Ceremony Transport', description: 'Guest transport for pujas and functions' },
      { icon: '👨‍👩‍👧‍👦', title: 'Group Pilgrimages', description: 'Community and sangat group tours' },
      { icon: '🌅', title: 'Early Morning', description: 'Pre-dawn pickups for morning rituals' },
      { icon: '♿', title: 'Accessible Vehicles', description: 'Vehicles suitable for elderly passengers' }
    ],
    packages: [
      {
        name: 'Day Pilgrimage',
        description: 'Single day temple visit',
        includes: ['Tempo traveller/bus', 'Multiple pickup points', 'Wait time at temple', 'Return drop'],
        price: 'Starting ₹6,000',
        ideal: 'Vrindavan, Haridwar day trips'
      },
      {
        name: 'Weekend Yatra',
        description: '2-3 day pilgrimage tour',
        includes: ['AC vehicle', 'Driver stay', 'Flexible itinerary', 'All transfers'],
        price: 'Starting ₹15,000',
        ideal: 'Vaishno Devi, Rishikesh trips'
      },
      {
        name: 'Char Dham Package',
        description: 'Complete Char Dham Yatra support',
        includes: ['Dedicated vehicle', 'Experienced hill driver', '10-12 day support', 'All permits'],
        price: 'Starting ₹45,000',
        ideal: 'Char Dham Yatra groups'
      }
    ],
    faqs: [
      { question: 'Do drivers know pilgrimage routes?', answer: 'Yes, our drivers are experienced with Char Dham, Vaishno Devi, Vrindavan, and major temples.' },
      { question: 'Stops for meals and rest?', answer: 'We plan routes with stops at clean, vegetarian restaurants. Specific stops can be requested.' },
      { question: 'Early morning temple visits?', answer: 'Yes, we provide 24/7 service. Many prefer early morning departures.' },
      { question: 'Large religious gatherings?', answer: 'Yes, we arrange multiple buses for sangat groups, jagrans, and community events.' }
    ]
  },
  {
    slug: 'school-college-events',
    name: 'Educational Events',
    icon: '🎓',
    title: 'School & College Event Transportation',
    tagline: 'Safe Transport for Educational Events',
    description: 'Trusted transportation for school excursions, college fests, educational tours, and convocations. Safety-first approach for student transport.',
    metaTitle: 'School & College Event Transportation | Educational Tour Bus | Triveni Cabs',
    metaDescription: 'Safe transportation for school trips, college fests, educational tours. GPS tracking, verified drivers. Book school bus now!',
    keywords: ['school bus hire', 'college fest transport', 'educational tour bus', 'school excursion', 'student transportation'],
    heroImage: '/images/events/school-college-events.jpg',
    color: 'from-cyan-500 to-blue-600',
    features: [
      { icon: '🏫', title: 'School Excursions', description: 'Safe transport for field trips and picnics' },
      { icon: '🎭', title: 'College Fests', description: 'Shuttle services for cultural & tech fests' },
      { icon: '🎓', title: 'Convocation', description: 'Guest transport for graduation ceremonies' },
      { icon: '🏕️', title: 'Educational Tours', description: 'Multi-day historical and science trips' },
      { icon: '🏆', title: 'Sports Days', description: 'Transport for inter-school sports events' },
      { icon: '👨‍👩‍👧', title: 'Parent Meetings', description: 'Shuttle for PTM and school events' }
    ],
    packages: [
      {
        name: 'Day Excursion',
        description: 'Single day school trip',
        includes: ['AC bus/tempo traveller', 'Experienced driver', 'School pickup & drop', 'Teacher coordination'],
        price: 'Starting ₹8,000',
        ideal: 'Museum visits, local trips'
      },
      {
        name: 'Overnight Trip',
        description: '2-3 day educational tour',
        includes: ['Comfortable AC vehicle', 'Driver accommodation', 'Flexible stops', 'Emergency support'],
        price: 'Starting ₹20,000',
        ideal: 'Historical tours, nature camps'
      },
      {
        name: 'College Fest Package',
        description: 'Multi-day fest transport',
        includes: ['Shuttle service', 'Multiple routes', 'Extended hours', 'Student coordinator'],
        price: 'Custom Quote',
        ideal: 'Technical fests, cultural events'
      }
    ],
    faqs: [
      { question: 'Are drivers verified for student transport?', answer: 'Yes, all drivers undergo thorough background verification. For school trips, we assign experienced drivers.' },
      { question: 'Can parents track the bus?', answer: 'Yes, we provide GPS tracking links for school authorities and parents.' },
      { question: 'First-aid kits in vehicles?', answer: 'Yes, all vehicles carry basic first-aid kits. Additional safety measures for school trips.' },
      { question: 'Teacher communication with driver?', answer: 'We provide driver contact to teacher-in-charge. Our coordination team available 24/7.' }
    ]
  }
];

export const getAllEventTypes = () => {
  return eventTypes;
};

export const getEventTypeBySlug = (slug) => {
  return eventTypes.find(event => event.slug === slug);
};

export const getAllEventTypeSlugs = () => {
  return eventTypes.map(event => event.slug);
};

export const getAllEventCities = () => {
  return Object.values(eventCities);
};

export const getEventCityBySlug = (slug) => {
  return eventCities[slug] || null;
};

export const getAllEventSlugs = () => {
  return Object.keys(eventCities);
};
