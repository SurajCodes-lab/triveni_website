// Corporate Transportation Service Data
// SEO-optimized content for corporate cab/transportation services

export const corporateServices = [
  {
    id: 'daily-operations',
    title: 'Daily Operations',
    icon: '🏢',
    description: 'Seamless daily employee transportation solutions',
    services: [
      { name: 'Employee Pick-up & Drop', desc: 'Door-to-door service for your workforce' },
      { name: 'Shift-Based Transport', desc: 'Flexible scheduling for rotating shifts' },
      { name: 'Office Shuttle Services', desc: 'Fixed-route shuttles between locations' },
      { name: 'Executive Daily Commute', desc: 'Premium transport for senior management' }
    ]
  },
  {
    id: 'business-travel',
    title: 'Business Travel',
    icon: '✈️',
    description: 'Professional travel solutions for business needs',
    services: [
      { name: 'Executive Travel', desc: 'Luxury vehicles for business executives' },
      { name: 'Client Pick-up', desc: 'VIP transport for important clients' },
      { name: 'Inter-City Travel', desc: 'Comfortable outstation business trips' },
      { name: 'Multi-City Roadshows', desc: 'Coordinated travel for corporate events' }
    ]
  },
  {
    id: 'special-requirements',
    title: 'Special Requirements',
    icon: '🎯',
    description: 'Customized solutions for specific corporate needs',
    services: [
      { name: 'Airport Transfers', desc: '24/7 airport pickup and drop services' },
      { name: 'Railway Station Transfers', desc: 'Timely station pickups and drops' },
      { name: 'Project Site Visits', desc: 'Transportation to construction/project sites' },
      { name: 'Vendor & Partner Visits', desc: 'Professional transport for business visits' }
    ]
  },
  {
    id: 'long-term-solutions',
    title: 'Long-Term Solutions',
    icon: '📅',
    description: 'Extended corporate transportation partnerships',
    services: [
      { name: 'Monthly Car Rental', desc: 'Cost-effective long-term vehicle hire' },
      { name: 'Dedicated Drivers', desc: 'Assigned drivers for consistency' },
      { name: 'Fleet Management', desc: 'Complete transportation fleet solutions' },
      { name: 'On-Demand Availability', desc: 'Flexible booking as per requirements' }
    ]
  }
];

export const corporateFleet = [
  {
    id: 'sedan',
    name: 'Executive Sedan',
    capacity: '4 Passengers',
    ideal: 'Executive travel, client pickups',
    vehicles: ['Swift Dzire', 'Honda Amaze', 'Hyundai Aura'],
    features: ['AC', 'Leather Seats', 'Music System', 'GPS Tracking'],
    priceRange: '₹12-15/km',
    icon: '🚗',
    image: '/images/wedding/luxury_car.jpg'
  },
  {
    id: 'suv',
    name: 'Premium SUV',
    capacity: '6-7 Passengers',
    ideal: 'Senior management, VIP clients',
    vehicles: ['Innova Crysta', 'Ertiga', 'Marazzo'],
    features: ['AC', 'Spacious', 'Premium Interiors', 'GPS Tracking'],
    priceRange: '₹16-20/km',
    icon: '🚙',
    image: '/images/wedding/premium_suv.jpg'
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    capacity: '12-26 Passengers',
    ideal: 'Team outings, employee transport',
    vehicles: ['12 Seater', '17 Seater', '20 Seater', '26 Seater'],
    features: ['AC', 'Pushback Seats', 'Music System', 'Charging Points'],
    priceRange: '₹23-27/km',
    icon: '🚐',
    image: '/images/tempo/17_seater.jpg'
  },
  {
    id: 'bus',
    name: 'Corporate Bus',
    capacity: '32-56 Passengers',
    ideal: 'Large team transport, corporate events',
    vehicles: ['32 Seater', '41 Seater', '45 Seater', '56 Seater'],
    features: ['AC', 'Comfortable Seats', 'PA System', 'GPS Tracking'],
    priceRange: '₹45-75/km',
    icon: '🚌',
    image: '/images/bus/45_SEATER_BUS.jpg'
  }
];

export const corporateCities = {
  delhi: {
    name: 'Delhi',
    slug: 'delhi',
    title: 'Corporate Transportation Service in Delhi',
    metaTitle: 'Corporate Cab Service Delhi | Employee Transport | Triveni Cabs',
    metaDescription: 'Premium corporate transportation service in Delhi NCR. Employee pick-up/drop, executive travel, airport transfers. 24/7 service. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'Delhi NCR Corporate Hub',
    subtitle: 'Trusted by 500+ Companies in Delhi NCR',
    description: 'Triveni Cabs provides comprehensive corporate transportation solutions in Delhi NCR, serving IT parks in Gurgaon, corporate offices in Noida, and business districts across the capital. Our fleet of executive sedans, SUVs, tempo travellers, and buses ensures your workforce travels in comfort and arrives on time, every time.',
    highlights: [
      'Serving Gurgaon Cyber City, DLF Phase 1-5, Udyog Vihar',
      'Noida Sector 62, 63, 125, 126 IT corridors',
      'Delhi CBD - Connaught Place, Nehru Place, Okhla',
      'IGI Airport corporate transfers 24/7'
    ],
    businessAreas: [
      { name: 'Gurgaon Cyber City', type: 'IT Hub' },
      { name: 'Noida Expressway', type: 'Corporate Corridor' },
      { name: 'Connaught Place', type: 'CBD' },
      { name: 'Aerocity', type: 'Business District' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab service delhi', 'employee transport delhi', 'corporate car rental delhi ncr', 'executive cab delhi', 'office cab service gurgaon', 'corporate transportation noida']
  },
  agra: {
    name: 'Agra',
    slug: 'agra',
    title: 'Corporate Transportation Service in Agra',
    metaTitle: 'Corporate Cab Service Agra | Business Travel | Triveni Cabs',
    metaDescription: 'Reliable corporate transportation in Agra. Executive travel, client visits, industrial area transport. Professional drivers. Call 7668570551.',
    heroImage: '/images/sightseeing/Agra/Agra_Hero_section.jpg',
    tagline: 'Business Gateway to Taj City',
    subtitle: 'Connecting Agra Industries with Excellence',
    description: 'Triveni Cabs offers specialized corporate transportation services in Agra, catering to the leather, footwear, and tourism industries. From industrial area pickups to executive hotel transfers, we ensure your business operations run smoothly with our reliable and professional service.',
    highlights: [
      'Industrial area connectivity - Nunhai, Artoni, Sikandra',
      'Hotel-to-meeting venue transfers',
      'Delhi-Agra business corridor express service',
      'Client tours to Taj Mahal and Agra Fort'
    ],
    businessAreas: [
      { name: 'Nunhai Industrial Area', type: 'Manufacturing Hub' },
      { name: 'Sikandra Industrial', type: 'Leather Industry' },
      { name: 'Hotel Zone', type: 'Tourism Business' },
      { name: 'Civil Lines', type: 'Commercial Area' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab agra', 'business travel agra', 'industrial transport agra', 'executive cab agra', 'corporate car rental agra']
  },
  jaipur: {
    name: 'Jaipur',
    slug: 'jaipur',
    title: 'Corporate Transportation Service in Jaipur',
    metaTitle: 'Corporate Cab Service Jaipur | IT Park Transport | Triveni Cabs',
    metaDescription: 'Premier corporate transportation in Jaipur. IT park shuttles, employee transport, business travel. Serving Mahindra SEZ, EPIP. Call 7668570551.',
    heroImage: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
    tagline: 'Pink City Corporate Solutions',
    subtitle: 'Empowering Jaipur IT & Business Sector',
    description: 'Triveni Cabs delivers premium corporate transportation services in Jaipur, the emerging IT and business hub of Rajasthan. We serve major technology parks, SEZs, and corporate offices with reliable employee transport, executive travel, and event transportation solutions.',
    highlights: [
      'Mahindra World City SEZ shuttle services',
      'Sitapura IT Park employee transport',
      'EPIP Sitapura industrial connectivity',
      'Tonk Road business corridor service'
    ],
    businessAreas: [
      { name: 'Mahindra World City', type: 'SEZ' },
      { name: 'Sitapura IT Park', type: 'Technology Hub' },
      { name: 'EPIP Sitapura', type: 'Industrial Area' },
      { name: 'Malviya Nagar', type: 'Commercial District' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab jaipur', 'IT park transport jaipur', 'employee shuttle jaipur', 'executive cab jaipur', 'mahindra sez transport']
  },
  chandigarh: {
    name: 'Chandigarh',
    slug: 'chandigarh',
    title: 'Corporate Transportation Service in Chandigarh',
    metaTitle: 'Corporate Cab Service Chandigarh | IT Corridor Transport | Triveni Cabs',
    metaDescription: 'Professional corporate transportation in Chandigarh & Mohali. IT corridor, Infosys campus, industrial area service. Call 7668570551.',
    heroImage: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    tagline: 'Tricity IT Corridor Excellence',
    subtitle: 'Serving Chandigarh-Mohali-Panchkula Business Hub',
    description: 'Triveni Cabs provides exceptional corporate transportation across the Chandigarh Tricity region, connecting major IT companies, industrial areas, and business districts. Our service spans Chandigarh IT Park, Mohali Phase 8B, and industrial sectors with punctual and professional transport solutions.',
    highlights: [
      'Chandigarh IT Park shuttle services',
      'Mohali Phase 8B & SAS Nagar connectivity',
      'Infosys Mohali campus transport',
      'Industrial Area Phase 1 & 2 service'
    ],
    businessAreas: [
      { name: 'Chandigarh IT Park', type: 'Technology Hub' },
      { name: 'Mohali Phase 8B', type: 'IT Corridor' },
      { name: 'Industrial Area Phase 1', type: 'Manufacturing' },
      { name: 'Panchkula IT Park', type: 'Tech Zone' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab chandigarh', 'IT park transport mohali', 'employee transport chandigarh', 'corporate car rental tricity', 'infosys campus transport']
  },
  dehradun: {
    name: 'Dehradun',
    slug: 'dehradun',
    title: 'Corporate Transportation Service in Dehradun',
    metaTitle: 'Corporate Cab Service Dehradun | IT Park Transport | Triveni Cabs',
    metaDescription: 'Reliable corporate transportation in Dehradun. IT Park Sahastradhara, Selaqui connectivity, executive travel. Call 7668570551.',
    heroImage: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
    tagline: 'Uttarakhand Corporate Gateway',
    subtitle: 'Connecting Dehradun Business & IT Sector',
    description: 'Triveni Cabs offers corporate transportation services in Dehradun, supporting the growing IT and pharmaceutical industries. From IT Park Sahastradhara to Selaqui industrial area, we provide reliable employee transport and executive travel services in the capital of Uttarakhand.',
    highlights: [
      'IT Park Sahastradhara shuttle services',
      'Selaqui Industrial Area connectivity',
      'Pharma company employee transport',
      'Mussoorie corporate retreat transfers'
    ],
    businessAreas: [
      { name: 'IT Park Sahastradhara', type: 'Technology Hub' },
      { name: 'Selaqui Industrial', type: 'Pharma & Manufacturing' },
      { name: 'Rajpur Road', type: 'Commercial Corridor' },
      { name: 'SIDCUL', type: 'Industrial Estate' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab dehradun', 'IT park transport dehradun', 'employee transport dehradun', 'corporate car rental dehradun', 'selaqui transport']
  },
  noida: {
    name: 'Noida',
    slug: 'noida',
    title: 'Corporate Transportation Service in Noida',
    metaTitle: 'Corporate Cab Service Noida | IT Hub Transport | Triveni Cabs',
    metaDescription: 'Premium corporate transportation in Noida. Sector 62/63 IT hubs, Film City, Expressway connectivity. Employee pick-up/drop. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'Noida IT Hub Excellence',
    subtitle: 'Powering Noida Expressway Corporate Corridor',
    description: 'Triveni Cabs delivers premium corporate transportation services in Noida, one of India\'s fastest-growing IT and business hubs. From Sector 62 tech parks to Film City, Greater Noida Expressway to Knowledge Park, we ensure your workforce travels with reliability and comfort across the entire Noida region.',
    highlights: [
      'Sector 62, 63, 125, 126 IT park shuttles',
      'Greater Noida Expressway corporate corridor',
      'Film City and Knowledge Park connectivity',
      'Noida-Delhi-Gurgaon intercity corporate service'
    ],
    businessAreas: [
      { name: 'Sector 62-63 IT Hub', type: 'Technology Park' },
      { name: 'Greater Noida Expressway', type: 'Corporate Corridor' },
      { name: 'Film City', type: 'Media & Tech' },
      { name: 'Knowledge Park', type: 'Business District' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab service noida', 'employee transport noida', 'IT hub cab noida', 'office cab service noida', 'corporate car rental noida', 'sector 62 cab service']
  },
  gurgaon: {
    name: 'Gurgaon',
    slug: 'gurgaon',
    title: 'Corporate Transportation Service in Gurgaon',
    metaTitle: 'Corporate Cab Service Gurgaon | Cyber City Transport | Triveni Cabs',
    metaDescription: 'Premium corporate cab service in Gurgaon. Cyber City, DLF Phase 1-5, Udyog Vihar, Sohna Road coverage. Employee transport. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'Millennium City Corporate Hub',
    subtitle: 'Serving Fortune 500 Companies in Gurgaon',
    description: 'Triveni Cabs provides world-class corporate transportation in Gurgaon, the Millennium City and India\'s leading corporate hub. From DLF Cyber City to Udyog Vihar, Sohna Road to Golf Course Road, we connect Gurgaon\'s top business districts with reliable, professional transport solutions for enterprises of all sizes.',
    highlights: [
      'DLF Cyber City and Cyber Hub connectivity',
      'Udyog Vihar Phase 1-5 industrial transport',
      'Golf Course Road and Sohna Road corridors',
      'MG Road and IFFCO Chowk business hubs'
    ],
    businessAreas: [
      { name: 'DLF Cyber City', type: 'IT & Business Hub' },
      { name: 'Udyog Vihar', type: 'Industrial Estate' },
      { name: 'Golf Course Road', type: 'Premium Corporate' },
      { name: 'Sohna Road', type: 'Business Corridor' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab service gurgaon', 'employee transport gurgaon', 'cyber city cab service', 'DLF corporate cab', 'office cab gurgaon', 'corporate car rental gurgaon']
  },
  lucknow: {
    name: 'Lucknow',
    slug: 'lucknow',
    title: 'Corporate Transportation Service in Lucknow',
    metaTitle: 'Corporate Cab Service Lucknow | State Capital Transport | Triveni Cabs',
    metaDescription: 'Reliable corporate transportation in Lucknow. Gomti Nagar IT City, government offices, Hazratganj business district. Employee transport. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    tagline: 'UP State Capital Corporate Hub',
    subtitle: 'Connecting Lucknow Government & IT Sectors',
    description: 'Triveni Cabs offers professional corporate transportation services in Lucknow, the state capital of Uttar Pradesh. We serve government offices, IT hubs in Gomti Nagar, corporate houses in Hazratganj, and industrial areas across the city with punctual, reliable employee transport and executive travel services.',
    highlights: [
      'Gomti Nagar IT City and tech park shuttles',
      'Government office and Vidhan Sabha connectivity',
      'Hazratganj and Aminabad business district service',
      'Lucknow Airport corporate transfers 24/7'
    ],
    businessAreas: [
      { name: 'Gomti Nagar IT City', type: 'Technology Hub' },
      { name: 'Hazratganj', type: 'Commercial District' },
      { name: 'Vibhuti Khand', type: 'Corporate Area' },
      { name: 'Aliganj Industrial', type: 'Industrial Zone' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate cab lucknow', 'employee transport lucknow', 'government vehicle rental lucknow', 'office cab lucknow', 'corporate car rental lucknow', 'gomti nagar cab service']
  },
  haridwar: {
    name: 'Haridwar',
    slug: 'haridwar',
    title: 'Corporate Transportation Service in Haridwar',
    metaTitle: 'Corporate Transport Haridwar | BHEL SIDCUL Cab | Triveni Cabs',
    metaDescription: 'Corporate cab service in Haridwar. BHEL campus, SIDCUL industrial area, pharma companies. Employee transport and executive travel. Call 7668570551.',
    heroImage: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
    tagline: 'Haridwar Industrial Hub Gateway',
    subtitle: 'Powering BHEL & SIDCUL Workforce Mobility',
    description: 'Triveni Cabs provides specialized corporate transportation in Haridwar, serving major industrial establishments including BHEL, SIDCUL industrial area, and pharmaceutical companies. Our service connects the holy city\'s industrial belt with reliable employee transport, shift-based operations, and executive travel solutions.',
    highlights: [
      'BHEL Haridwar campus employee transport',
      'SIDCUL Industrial Area full connectivity',
      'Pharmaceutical company shift-based transport',
      'Haridwar-Dehradun intercity corporate service'
    ],
    businessAreas: [
      { name: 'BHEL Haridwar', type: 'PSU Campus' },
      { name: 'SIDCUL Industrial', type: 'Industrial Estate' },
      { name: 'Pharma Hub', type: 'Pharmaceutical Zone' },
      { name: 'Roshnabad', type: 'Commercial Area' }
    ],
    stats: {
      fleet: '500+'
    },
    keywords: ['corporate transport haridwar', 'BHEL cab service', 'SIDCUL employee transport', 'industrial cab haridwar', 'corporate car rental haridwar', 'pharma company transport haridwar']
  }
};

export const corporateBenefits = [
  {
    icon: '💼',
    title: 'Single Vendor Solution',
    description: 'One partner for all transportation needs - sedans to buses'
  },
  {
    icon: '📊',
    title: 'Cost Optimization',
    description: 'Volume-based pricing and transparent billing'
  },
  {
    icon: '🔒',
    title: 'Safety & Compliance',
    description: 'Verified drivers, GPS tracking, and insurance coverage'
  },
  {
    icon: '⚡',
    title: 'Real-Time Tracking',
    description: 'Live vehicle tracking and trip monitoring'
  },
  {
    icon: '📋',
    title: 'MIS Reports',
    description: 'Detailed monthly reports for expense management'
  },
  {
    icon: '🎯',
    title: 'Dedicated Manager',
    description: 'Single point of contact for all coordination'
  }
];

export const corporateFAQs = [
  {
    question: 'What corporate transportation services do you offer?',
    answer: 'We offer comprehensive corporate transportation including employee pick-up/drop, executive travel, airport transfers, inter-city travel, monthly car rental, dedicated drivers, and complete fleet management solutions. Our fleet ranges from executive sedans to 56-seater buses.'
  },
  {
    question: 'How does corporate billing work?',
    answer: 'We offer flexible billing options including monthly invoicing, trip-wise billing, and customized packages. You receive detailed MIS reports with trip logs, kilometer readings, and expense breakdowns for easy reconciliation.'
  },
  {
    question: 'Are your drivers verified and trained?',
    answer: 'Yes, all our drivers undergo rigorous background verification, police checks, and professional training. They are experienced in corporate etiquette, time management, and safe driving practices.'
  },
  {
    question: 'Can you handle employee transport for multiple shifts?',
    answer: 'Absolutely! We specialize in shift-based employee transport with customized routing, multiple pickup points, and flexible scheduling for 24/7 operations including night shifts.'
  },
  {
    question: 'Do you provide GPS tracking for corporate accounts?',
    answer: 'Yes, all our vehicles are equipped with GPS tracking. Corporate clients get access to a dashboard for real-time vehicle tracking, trip history, and employee safety monitoring.'
  },
  {
    question: 'What is the minimum contract period for corporate services?',
    answer: 'We offer flexible arrangements from one-time bookings to annual contracts. Monthly contracts typically offer the best rates, but we customize based on your specific requirements.'
  }
];

export const getAllCorporateCities = () => {
  return Object.values(corporateCities);
};

export const getCorporateCityBySlug = (slug) => {
  return corporateCities[slug] || null;
};

export const getAllCorporateSlugs = () => {
  return Object.keys(corporateCities);
};
