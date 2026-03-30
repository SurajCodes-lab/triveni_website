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
  },
  shimla: {
    name: 'Shimla',
    slug: 'shimla',
    title: 'Event Transportation Service in Shimla',
    metaTitle: 'Event Transportation Shimla | Hill Station Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Shimla. Hill station weddings, corporate retreats, MICE events. Experienced hill drivers. Call 7668570551.',
    heroImage: '/images/sightseeing/Shimla/shimla_hero_section.jpg',
    tagline: 'Queen of Hills Event Destination',
    subtitle: 'Premium Hill Station Events',
    description: 'Shimla, the Queen of Hills, offers a stunning colonial setting for destination weddings and corporate retreats. Triveni Cabs provides expert mountain road transportation with experienced drivers for events at luxury resorts, heritage hotels, and scenic outdoor venues.',
    highlights: [
      'Destination weddings at Wildflower Hall, Oberoi Cecil',
      'Corporate retreats at hill resorts',
      'MICE events at Peterhoff and Clarkes Hotel',
      'Kufri adventure team building events'
    ],
    popularVenues: [
      { name: 'Wildflower Hall', type: 'Luxury Wedding' },
      { name: 'Oberoi Cecil', type: 'Heritage Events' },
      { name: 'Peterhoff Hotel', type: 'Conferences' },
      { name: 'Kufri Resorts', type: 'Team Building' }
    ],
    stats: {
      eventsHandled: '120+',
      happyClients: '500+',
      yearsExperience: '10+'
    },
    eventTypes: ['Destination Weddings', 'Corporate Retreats', 'MICE Events', 'Family Gatherings'],
    keywords: ['event transportation shimla', 'shimla wedding transport', 'corporate retreat shimla', 'hill station event transport shimla', 'mice events shimla']
  },
  manali: {
    name: 'Manali',
    slug: 'manali',
    title: 'Event Transportation Service in Manali',
    metaTitle: 'Event Transportation Manali | Adventure & Destination Events | Triveni Cabs',
    metaDescription: 'Event transportation in Manali & Kullu Valley. Destination weddings, adventure corporate retreats, team building events. Call 7668570551.',
    heroImage: '/images/sightseeing/Manali/Manali_hero_section.jpg',
    tagline: 'Adventure Valley Event Hub',
    subtitle: 'Mountain Adventure & Celebration Events',
    description: 'Manali and the Kullu Valley provide a spectacular mountain backdrop for destination weddings and adventure-themed corporate events. Triveni Cabs offers reliable mountain road transportation for events at scenic resorts, apple orchards, and riverside venues.',
    highlights: [
      'Destination weddings at Span Resort, The Himalayan',
      'Adventure team building with rafting and trekking',
      'Solang Valley outdoor events',
      'Riverside resort celebrations'
    ],
    popularVenues: [
      { name: 'Span Resort', type: 'Luxury Wedding' },
      { name: 'The Himalayan', type: 'Corporate Retreats' },
      { name: 'Solang Valley', type: 'Adventure Events' },
      { name: 'Apple Country Resort', type: 'Family Gatherings' }
    ],
    stats: {
      eventsHandled: '80+',
      happyClients: '350+',
      yearsExperience: '8+'
    },
    eventTypes: ['Destination Weddings', 'Adventure Events', 'Corporate Retreats', 'Family Celebrations'],
    keywords: ['event transportation manali', 'manali wedding transport', 'corporate retreat kullu', 'adventure event manali', 'destination wedding manali']
  },
  amritsar: {
    name: 'Amritsar',
    slug: 'amritsar',
    title: 'Event Transportation Service in Amritsar',
    metaTitle: 'Event Transportation Amritsar | Wedding & Religious Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Amritsar. Punjabi weddings, religious events, corporate gatherings. Golden Temple area specialists. Call 7668570551.',
    heroImage: '/images/sightseeing/Amritsar/Amristar_hero_section.jpg',
    tagline: 'Holy City Grand Events',
    subtitle: 'Punjab Premier Event Destination',
    description: 'Amritsar, home to the Golden Temple, hosts grand Punjabi weddings, religious congregations, and cultural events. Triveni Cabs provides professional event transportation covering all major venues, marriage palaces, and hotels across the city.',
    highlights: [
      'Grand Punjabi weddings at marriage palaces',
      'Religious event transport near Golden Temple',
      'Corporate events at Hyatt and Radisson',
      'Wagah Border ceremony guest transport'
    ],
    popularVenues: [
      { name: 'Hyatt Amritsar', type: 'Corporate Events' },
      { name: 'Radisson Blu', type: 'Luxury Weddings' },
      { name: 'Marriage Palaces GT Road', type: 'Traditional Weddings' },
      { name: 'Golden Temple Area', type: 'Religious Events' }
    ],
    stats: {
      eventsHandled: '180+',
      happyClients: '700+',
      yearsExperience: '12+'
    },
    eventTypes: ['Punjabi Weddings', 'Religious Events', 'Corporate Gatherings', 'Cultural Events'],
    keywords: ['event transportation amritsar', 'amritsar wedding transport', 'punjabi wedding car', 'golden temple event transport', 'corporate event amritsar']
  },
  haridwar: {
    name: 'Haridwar',
    slug: 'haridwar',
    title: 'Event Transportation Service in Haridwar',
    metaTitle: 'Event Transportation Haridwar | Religious & Spiritual Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Haridwar. Religious gatherings, Kumbh Mela logistics, spiritual retreats, wedding transport. Call 7668570551.',
    heroImage: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg',
    tagline: 'Sacred City Event Logistics',
    subtitle: 'Spiritual & Religious Event Transport',
    description: 'Haridwar, one of Hinduism holiest cities, hosts massive religious gatherings, spiritual retreats, and pilgrim events throughout the year. Triveni Cabs specializes in managing transportation for large religious congregations, corporate retreats at ashrams, and wedding events near the sacred Ganges.',
    highlights: [
      'Kumbh Mela and Ardh Kumbh transportation',
      'Religious congregation and satsang transport',
      'Ashram-based corporate retreat logistics',
      'Wedding events near ghat areas'
    ],
    popularVenues: [
      { name: 'Har Ki Pauri Area', type: 'Religious Events' },
      { name: 'Ashram Retreats', type: 'Corporate Spiritual' },
      { name: 'Haridwar Hotels', type: 'Wedding Events' },
      { name: 'Rajaji National Park Area', type: 'Team Building' }
    ],
    stats: {
      eventsHandled: '200+',
      happyClients: '800+',
      yearsExperience: '15+'
    },
    eventTypes: ['Religious Gatherings', 'Spiritual Retreats', 'Pilgrim Transport', 'Weddings'],
    keywords: ['event transportation haridwar', 'kumbh mela transport', 'religious event haridwar', 'haridwar wedding transport', 'pilgrim bus haridwar']
  },
  lucknow: {
    name: 'Lucknow',
    slug: 'lucknow',
    title: 'Event Transportation Service in Lucknow',
    metaTitle: 'Event Transportation Lucknow | Wedding & Corporate Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Lucknow. Nawabi weddings, corporate conferences, MICE events. City of Nawabs event logistics. Call 7668570551.',
    heroImage: '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg',
    tagline: 'City of Nawabs Event Excellence',
    subtitle: 'Premium Event Transport in UP Capital',
    description: 'Lucknow, the City of Nawabs, hosts elegant weddings, major corporate conferences, and cultural events at world-class venues. Triveni Cabs offers comprehensive event transportation services across the city, covering luxury hotels, convention centers, and heritage venues.',
    highlights: [
      'Nawabi-style grand weddings at luxury venues',
      'Corporate conferences at Taj and Hyatt',
      'Government event logistics in state capital',
      'Cultural festival transportation'
    ],
    popularVenues: [
      { name: 'Taj Mahal Lucknow', type: 'Luxury Weddings' },
      { name: 'Hyatt Regency', type: 'Corporate Events' },
      { name: 'Indira Gandhi Pratishthan', type: 'Conferences' },
      { name: 'Lulu Mall Area', type: 'Social Events' }
    ],
    stats: {
      eventsHandled: '250+',
      happyClients: '1000+',
      yearsExperience: '12+'
    },
    eventTypes: ['Grand Weddings', 'Corporate Events', 'Government Events', 'Cultural Festivals'],
    keywords: ['event transportation lucknow', 'lucknow wedding transport', 'corporate event lucknow', 'mice transport lucknow', 'wedding car lucknow']
  },
  udaipur: {
    name: 'Udaipur',
    slug: 'udaipur',
    title: 'Event Transportation Service in Udaipur',
    metaTitle: 'Event Transportation Udaipur | Royal Wedding & Lakeside Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Udaipur. Royal palace weddings, lakeside events, corporate retreats. India premier wedding destination. Call 7668570551.',
    heroImage: '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg',
    tagline: 'City of Lakes Royal Events',
    subtitle: 'India Premier Destination Wedding City',
    description: 'Udaipur, the City of Lakes, is India most sought-after destination wedding location with its stunning palace hotels and lakeside venues. Triveni Cabs provides luxury event transportation for royal weddings at Oberoi Udaivilas, Taj Lake Palace, and other iconic venues.',
    highlights: [
      'Royal weddings at Oberoi Udaivilas, Taj Lake Palace',
      'Lakeside events at Fateh Prakash Palace',
      'Corporate retreats at heritage hotels',
      'Guest sightseeing and excursion management'
    ],
    popularVenues: [
      { name: 'Oberoi Udaivilas', type: 'Ultra-Luxury Wedding' },
      { name: 'Taj Lake Palace', type: 'Royal Events' },
      { name: 'Fateh Prakash Palace', type: 'Heritage Events' },
      { name: 'Chunda Palace', type: 'Corporate Retreats' }
    ],
    stats: {
      eventsHandled: '200+',
      happyClients: '900+',
      yearsExperience: '13+'
    },
    eventTypes: ['Royal Weddings', 'Destination Events', 'Corporate Retreats', 'Lakeside Celebrations'],
    keywords: ['event transportation udaipur', 'udaipur wedding transport', 'royal wedding udaipur', 'destination wedding udaipur transport', 'lakeside event logistics']
  },
  varanasi: {
    name: 'Varanasi',
    slug: 'varanasi',
    title: 'Event Transportation Service in Varanasi',
    metaTitle: 'Event Transportation Varanasi | Religious & Cultural Event Transport | Triveni Cabs',
    metaDescription: 'Event transportation in Varanasi. Religious gatherings, cultural festivals, spiritual retreats, wedding guest transport. Call 7668570551.',
    heroImage: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg',
    tagline: 'Spiritual Capital Event Logistics',
    subtitle: 'Sacred City Event Transportation',
    description: 'Varanasi, one of the world oldest living cities, hosts major religious gatherings, cultural festivals, and spiritual events year-round. Triveni Cabs provides specialized event transportation navigating the city unique layout, connecting ghats, temples, and modern venues.',
    highlights: [
      'Dev Deepawali and Ganga Mahotsav event logistics',
      'Religious congregation transport near ghats',
      'Wedding guest transport in heritage city',
      'Conference and MICE at BHU and modern venues'
    ],
    popularVenues: [
      { name: 'Dashashwamedh Ghat Area', type: 'Religious Events' },
      { name: 'Ramada Plaza', type: 'Corporate Events' },
      { name: 'BHU Convention Center', type: 'Conferences' },
      { name: 'Heritage Hotels', type: 'Destination Weddings' }
    ],
    stats: {
      eventsHandled: '150+',
      happyClients: '600+',
      yearsExperience: '10+'
    },
    eventTypes: ['Religious Gatherings', 'Cultural Festivals', 'Spiritual Retreats', 'Destination Weddings'],
    keywords: ['event transportation varanasi', 'varanasi religious event transport', 'ghat event logistics', 'varanasi wedding transport', 'cultural festival varanasi']
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
    heroImage: '/images/wedding_section.jpg',
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
    heroImage: '/images/citypage_hero_section_image.jpg',
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
    heroImage: '/images/HERO_SECTION_MAIN_PAGE.jpg',
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
    heroImage: '/images/about_page_hero_section.jpg',
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
    heroImage: '/images/sightseeing/Varanasi/Kashi_Vishwanath_Temple.jpg',
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
    heroImage: '/images/citypage_hero_section_image.jpg',
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
  },
  {
    slug: 'destination-wedding-transport',
    name: 'Destination Weddings',
    icon: '💍',
    title: 'Destination Wedding Transportation in Rajasthan',
    tagline: 'Royal Transport for Royal Weddings',
    description: 'Premium transportation for destination weddings in Rajasthan. From palace venues in Jaipur and Udaipur to desert camps in Jaisalmer, we manage guest logistics for your dream wedding.',
    metaTitle: 'Destination Wedding Transport Rajasthan | Palace Wedding Logistics | Triveni Cabs',
    metaDescription: 'Destination wedding transportation in Rajasthan. Palace weddings in Jaipur, Udaipur, Jodhpur. Guest shuttles, airport transfers. Call 7668570551.',
    keywords: ['destination wedding transport rajasthan', 'palace wedding car hire', 'rajasthan wedding logistics', 'udaipur wedding transport', 'jaipur palace wedding shuttle'],
    heroImage: '/images/wedding_section.jpg',
    color: 'from-rose-500 to-pink-600',
    features: [
      { icon: '🏰', title: 'Palace Transfers', description: 'Luxury transport to heritage palace venues' },
      { icon: '✈️', title: 'Guest Arrivals', description: 'Airport and railway station pickup coordination' },
      { icon: '🚗', title: 'Bridal Entry', description: 'Decorated luxury cars for the bride and groom' },
      { icon: '🚐', title: 'Guest Shuttles', description: 'Tempo travellers and buses between hotel and venue' },
      { icon: '🎊', title: 'Multi-Event', description: 'Transport for mehendi, sangeet, wedding, reception' },
      { icon: '🌅', title: 'Excursions', description: 'Post-wedding guest sightseeing tours' }
    ],
    packages: [
      {
        name: 'Intimate Destination Wedding',
        description: 'For up to 100 guests',
        includes: ['1 Decorated bridal car', '3 Tempo travellers', 'Airport transfers', 'Venue shuttles'],
        price: 'Starting ₹25,000',
        ideal: 'Boutique hotel weddings'
      },
      {
        name: 'Grand Palace Wedding',
        description: 'For 100-500 guests',
        includes: ['Luxury bridal car', 'Baraat vehicle', '6 Tempo travellers', '2 Buses', 'All airport transfers', 'Dedicated coordinator'],
        price: 'Starting ₹75,000',
        ideal: 'Palace and fort weddings'
      },
      {
        name: 'Royal Destination Package',
        description: 'For 500+ guests',
        includes: ['Premium fleet', 'Multi-city pickups', '24/7 coordination', 'Guest sightseeing', 'Emergency backup'],
        price: 'Custom Quote',
        ideal: 'Multi-day royal celebrations'
      }
    ],
    faqs: [
      { question: 'Which Rajasthan venues do you serve?', answer: 'We cover all major venues including City Palace Jaipur, Rambagh Palace, Oberoi Udaivilas, Umaid Bhawan Jodhpur, Samode Palace, and many more.' },
      { question: 'Can you arrange guest sightseeing tours?', answer: 'Yes! We arrange pre/post wedding tours to local attractions like Amber Fort, Lake Pichola, and desert camps.' },
      { question: 'How do you handle outstation guest arrivals?', answer: 'We track all flight and train arrivals, coordinate pickups with name boards, and manage delays seamlessly.' },
      { question: 'Do you provide decorated vehicles?', answer: 'Yes, we offer flower decoration, ribbons, and custom branding for bridal cars and baraat vehicles.' }
    ]
  },
  {
    slug: 'political-rally-transport',
    name: 'Political Rallies',
    icon: '📢',
    title: 'Political Rally Transportation & Bus Rental',
    tagline: 'Large-Scale Crowd Transport Solutions',
    description: 'Reliable mass transportation for political rallies, election campaigns, and party events. Large fleet of buses and tempo travellers for crowd movement across cities.',
    metaTitle: 'Political Rally Bus Rental | Election Campaign Transport | Triveni Cabs',
    metaDescription: 'Political rally transportation and bus rental services. Large fleet for crowd transport. Campaign buses, rally shuttles. Call 7668570551.',
    keywords: ['political rally bus rental', 'election campaign transport', 'rally crowd bus', 'political event logistics', 'mass transportation rally'],
    heroImage: '/images/citypage_hero_section_image.jpg',
    color: 'from-orange-500 to-red-600',
    features: [
      { icon: '🚌', title: 'Mass Transport', description: 'Large fleet of buses for crowd movement' },
      { icon: '📍', title: 'Multi-City', description: 'Coordinate transport from multiple districts' },
      { icon: '🔊', title: 'Campaign Buses', description: 'Equipped buses for roadshow campaigns' },
      { icon: '⏰', title: 'Flexible Timing', description: 'Early morning to late night operations' },
      { icon: '🗺️', title: 'Route Planning', description: 'Optimized routes for maximum efficiency' },
      { icon: '📱', title: 'GPS Tracking', description: 'Real-time tracking of entire fleet' }
    ],
    packages: [
      {
        name: 'Local Rally',
        description: 'Single city rally transport',
        includes: ['5 AC buses', 'Multiple pickup points', 'Coordinator', 'Return transport'],
        price: 'Starting ₹50,000',
        ideal: 'City-level rallies, meetings'
      },
      {
        name: 'District Rally',
        description: 'Multi-town rally transport',
        includes: ['10+ Buses', 'District-wide pickups', 'Staging coordination', 'Emergency vehicles'],
        price: 'Starting ₹1,50,000',
        ideal: 'District-level political events'
      },
      {
        name: 'State-Level Campaign',
        description: 'Large-scale campaign logistics',
        includes: ['50+ Vehicles', 'Multi-district coordination', 'Campaign bus', 'Command center', '24/7 support'],
        price: 'Custom Quote',
        ideal: 'State elections, major rallies'
      }
    ],
    faqs: [
      { question: 'How many buses can you provide for a rally?', answer: 'We can arrange 50+ buses and tempo travellers through our network for large political events with advance notice.' },
      { question: 'Do you provide roadshow campaign buses?', answer: 'Yes, we can arrange open-top buses and decorated campaign vehicles for political roadshows.' },
      { question: 'Can you handle sudden large requirements?', answer: 'With 48-72 hours notice, we can mobilize a large fleet through our partner network across North India.' },
      { question: 'Are there any restrictions?', answer: 'We comply with all election commission guidelines and local transport regulations. All vehicles are legally registered and insured.' }
    ]
  },
  {
    slug: 'exhibition-transport',
    name: 'Exhibitions & Trade Shows',
    icon: '🏢',
    title: 'Exhibition & Trade Show Visitor Shuttle Service',
    tagline: 'Seamless Visitor Transport for Exhibitions',
    description: 'Professional shuttle services for trade shows, exhibitions, and expos. Move visitors, exhibitors, and staff efficiently between hotels, airports, and exhibition centers.',
    metaTitle: 'Exhibition Visitor Shuttle Service | Trade Show Transport | Triveni Cabs',
    metaDescription: 'Exhibition and trade show shuttle services. Visitor transport, exhibitor logistics. Auto Expo, IITF, trade fairs. Call 7668570551.',
    keywords: ['exhibition visitor shuttle service', 'trade show transport', 'expo shuttle bus', 'exhibition logistics', 'visitor shuttle hire'],
    heroImage: '/images/citypage_hero_section_image.jpg',
    color: 'from-violet-500 to-purple-600',
    features: [
      { icon: '🚐', title: 'Visitor Shuttles', description: 'Regular loops between metro, hotels, and venue' },
      { icon: '📦', title: 'Exhibitor Logistics', description: 'Transport for booth staff and materials' },
      { icon: '✈️', title: 'Delegate Pickups', description: 'Airport and station transfers for VIP delegates' },
      { icon: '🅿️', title: 'Park & Ride', description: 'Remote parking with shuttle to exhibition' },
      { icon: '🎪', title: 'Multi-Hall Support', description: 'Inter-hall shuttle for large exhibition centers' },
      { icon: '📋', title: 'Branded Service', description: 'Custom signage and branded shuttles available' }
    ],
    packages: [
      {
        name: 'Small Exhibition',
        description: 'Single day, up to 500 visitors',
        includes: ['3 Shuttle buses', 'Continuous loops', '2 VIP cars', 'Coordinator'],
        price: 'Starting ₹20,000/day',
        ideal: 'Local exhibitions, small expos'
      },
      {
        name: 'Medium Trade Show',
        description: 'Multi-day, up to 5,000 visitors',
        includes: ['6 Shuttle buses', 'Park & ride', '4 VIP cars', 'Route optimization', 'Coordination team'],
        price: 'Starting ₹50,000/day',
        ideal: 'Industry exhibitions, regional fairs'
      },
      {
        name: 'Major Expo',
        description: 'Multi-day, 5,000+ visitors',
        includes: ['12+ Buses', 'Multiple routes', 'VIP fleet', 'Command center', 'Branded shuttles', 'Extended hours'],
        price: 'Custom Quote',
        ideal: 'Auto Expo, IITF, major trade shows'
      }
    ],
    faqs: [
      { question: 'Can shuttles be branded with exhibition logo?', answer: 'Yes, we can arrange temporary branding and signage on shuttles with 1 week advance notice.' },
      { question: 'Do you provide inter-hall shuttles?', answer: 'Yes, for large exhibition centers like Pragati Maidan and IEML, we run inter-hall shuttle services.' },
      { question: 'How do you handle peak hours?', answer: 'We increase shuttle frequency during opening and closing hours. Additional backup vehicles are on standby.' },
      { question: 'Multi-day packages available?', answer: 'Yes, we offer discounted rates for multi-day exhibitions with consistent service throughout.' }
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
