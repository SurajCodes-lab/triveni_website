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
    image: '/images/car/swift_dzire.jpg'
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
    image: '/images/car/innova_crysta.jpg'
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    capacity: '12-26 Passengers',
    ideal: 'Team outings, employee transport',
    vehicles: ['12 Seater', '17 Seater', '20 Seater', '26 Seater'],
    features: ['AC', 'Pushback Seats', 'Music System', 'Charging Points'],
    priceRange: '₹20-28/km',
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
    metaTitle: 'Corporate Cab Service Chandigarh | IT Corridor Transport',
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
    metaTitle: 'Corporate Cab Service Gurgaon | Cyber City Transport',
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
    metaTitle: 'Corporate Cab Service Lucknow | State Capital Transport',
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

// Direct-answer lead for AEO/GEO (voice + AI citation). 40-55 words, B2B specifics.
export const corporateDirectAnswer = "Triveni Cabs provides corporate transportation across Delhi NCR, Jaipur, Chandigarh, Agra, Dehradun, Noida, Gurgaon, Lucknow and Haridwar with a 500+ vehicle fleet — sedans, SUVs, tempo travellers and 56-seater buses. We offer employee pick-up & drop, executive travel, airport transfers and monthly contracts with GST invoicing, a dedicated account manager, GPS tracking, 30-minute backup vehicles and 24/7 operations. Corporate cabs start at ₹11/km.";

// Contract / pricing models — visible table + Offer schema source.
export const corporatePricingModels = [
  {
    id: 'per-trip',
    name: 'Per-Trip / Per-Employee',
    headline: 'Pay only for actual pickups',
    rateFrom: 'From ₹11/km',
    billing: 'Itemised monthly GST invoice',
    bestFor: 'Hybrid teams, variable attendance, pilot rollouts',
    inclusions: ['No minimum commitment', 'Scale up or down monthly', 'Per-employee usage breakdown', 'FASTag tolls billed at actuals'],
    icon: '🧾'
  },
  {
    id: 'monthly-contract',
    name: 'Monthly Cab Contract',
    headline: 'Fixed monthly rate for defined routes',
    rateFrom: 'Save 15-25% vs per-trip',
    billing: 'Single consolidated monthly GST invoice',
    bestFor: 'Regular daily shifts, fixed routes, ETS programs',
    inclusions: ['Predictable budget', 'Dedicated vehicles & drivers', 'Priority backup SLA', 'MIS reports + tracking dashboard'],
    icon: '📅',
    popular: true
  },
  {
    id: 'dedicated-fleet',
    name: 'Dedicated Fleet / Annual',
    headline: 'Vehicles parked exclusively for you',
    rateFrom: 'Lowest per-km, committed volume',
    billing: 'Monthly GST invoice on annual contract',
    bestFor: 'Large enterprises, 24/7 BPO/IT ops, multi-city accounts',
    inclusions: ['Branded vehicle option', 'On-site coordinator for big sites', 'Custom SLA & MIS formats', 'Multi-city consolidated billing'],
    icon: '🚐'
  }
];

// Corporate cabs vs aggregators (Ola/Uber) — visible comparison table + Comparison schema source.
export const corporateVsAggregator = [
  { feature: 'Pricing model', triveni: 'Fixed negotiated rate (from ₹11/km), no surge', aggregator: 'Dynamic surge pricing, up to 2-3x at peak' },
  { feature: 'Monthly cost (50 employees)', triveni: 'Predictable contract, 20-30% lower', aggregator: 'Volatile; ₹80k-1.2L/month higher on average' },
  { feature: 'GST invoicing & ITC', triveni: 'Single monthly GST invoice, full ITC', aggregator: 'Fragmented receipts, ITC reconciliation pain' },
  { feature: 'Driver consistency', triveni: 'Same police-verified drivers assigned', aggregator: 'Random driver every trip' },
  { feature: 'Cancellations / no-shows', triveni: '30-min backup vehicle guaranteed, free', aggregator: 'Driver cancels, you re-book at surge' },
  { feature: 'Women safety (night shift)', triveni: 'Guard escort, GPS-monitored, control room', aggregator: 'No corporate safety SLA' },
  { feature: 'Account management', triveni: 'Dedicated manager on call 24/7', aggregator: 'App support tickets only' },
  { feature: 'MIS reports & dashboard', triveni: 'Monthly MIS + live HR tracking dashboard', aggregator: 'Basic ride history export only' },
  { feature: 'Roster & shift handling', triveni: 'Bulk roster upload, route optimisation', aggregator: 'Manual per-employee booking' }
];

// How to set up a corporate cab contract — visible steps + HowTo schema source.
export const corporateOnboardingSteps = [
  { step: 1, title: 'Share Your Requirement', description: 'Tell us headcount, shift timings, pickup zones and cities. Call 7668570551, WhatsApp, or request a proposal online.', icon: '📋' },
  { step: 2, title: 'Get a Custom Proposal', description: 'Within 24 hours we send a route plan, right-sized fleet mix, transparent per-km/monthly pricing and a draft SLA — all GST-inclusive.', icon: '🧮' },
  { step: 3, title: 'Sign Contract & Onboard', description: 'Approve terms, sign the agreement and share the employee roster. Your dedicated account manager is assigned the same day.', icon: '✍️' },
  { step: 4, title: 'Route Optimisation & Trial', description: 'We optimise routes, assign verified drivers and run a trial week so HR can validate timings and the tracking dashboard.', icon: '🗺️' },
  { step: 5, title: 'Go Live with 24/7 Support', description: 'Daily operations begin with GPS tracking, 30-minute backup SLA, monthly MIS reports and consolidated GST invoicing.', icon: '🚀' }
];

// Compliance / safety / GST / MIS — E-E-A-T trust block.
export const corporateCompliance = [
  { icon: '🧾', title: 'GST-Compliant Invoicing', description: 'Single monthly GST invoice with GSTIN for full Input Tax Credit. Trip logs, KMs and per-employee breakdowns included for finance reconciliation.' },
  { icon: '🛡️', title: 'Police-Verified Drivers', description: 'Every driver is background-checked and police-verified, trained in corporate etiquette, defensive driving and emergency response.' },
  { icon: '👩‍💼', title: 'Women-Safety Protocols', description: 'Night-shift transport includes female guard escort on demand, GPS-monitored routes, no-last-drop rule and a 24/7 control-room helpline.' },
  { icon: '📍', title: 'Live GPS Tracking', description: 'All vehicles are GPS-equipped. HR and admin get a real-time dashboard for vehicle location, route adherence and exception alerts.' },
  { icon: '📊', title: 'Monthly MIS Reports', description: 'Detailed reports cover trip logs, kilometers, on-time percentage, driver performance and per-employee usage — custom formats on request.' },
  { icon: '🚗', title: '30-Minute Backup SLA', description: 'Guaranteed replacement vehicle within 30 minutes for any breakdown, no-show or unavailability — included at no extra charge.' }
];

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
  },
  {
    question: 'Do you provide GST-compliant invoicing?',
    answer: 'Yes, we issue fully GST-compliant invoices monthly with our GSTIN clearly mentioned. This enables your finance team to claim Input Tax Credit (ITC). Invoices include trip logs, KMs, and per-employee breakdowns where applicable.'
  },
  {
    question: 'Do you offer night-shift cab service with women safety protocols?',
    answer: 'Yes, our night-shift transport for BPO/IT staff includes police-verified drivers, GPS-monitored routes, female guard escort on demand, and a 24/7 control-room helpline. Our protocols meet typical IT/BPO compliance requirements for women safety in night operations.'
  },
  {
    question: 'Will I get a dedicated account manager for our corporate account?',
    answer: 'Yes. Every corporate client receives a single point of contact who handles bookings, escalations, billing queries, and driver requests. The account manager is reachable on phone, WhatsApp, and email during business hours, with on-call coverage for emergencies.'
  },
  {
    question: 'How quickly can you provide a backup vehicle if one breaks down?',
    answer: 'Our SLA for backup vehicle deployment is 30 minutes within Delhi NCR, Jaipur, Chandigarh, Agra, and Dehradun service zones. Backup is included at no extra charge and applies to any breakdown, no-show, or unexpected unavailability of the assigned vehicle.'
  },
  {
    question: 'Can you support multiple cities for our company\'s pan-India transport?',
    answer: 'Yes. We currently serve Delhi NCR, Jaipur, Chandigarh, Agra, Dehradun, Noida, Gurgaon, Lucknow, and Haridwar with consolidated billing across all cities. Additional cities can be onboarded for accounts with sustained volume — typically activated within 2-3 weeks of contract sign-off.'
  },
  {
    question: 'Do you support shift roster changes and last-minute booking updates?',
    answer: 'Yes. HR teams can update shift rosters, add or remove employees, and adjust pickup points via our portal or by calling the account manager. Same-day changes are accepted up to 2 hours before pickup; permanent roster changes take effect from next shift.'
  },
  {
    question: 'What is the cost difference vs Ola/Uber for business?',
    answer: 'Dedicated corporate cab is typically 20-30% cheaper than Ola/Uber for the same volume because there is no surge pricing, no cancellation losses, and you negotiate fixed monthly rates. For 50+ employees on regular shifts, savings often exceed Rs 80,000-1,20,000 per month vs aggregator platforms.'
  },
  {
    question: 'Do you provide MIS reports and analytics dashboards for HR?',
    answer: 'Yes. HR and admin teams receive monthly MIS reports covering trip logs, kilometers, driver performance, on-time percentage, and per-employee usage breakdown. Larger accounts get a real-time dashboard for live vehicle tracking, route adherence, and exception alerts. Custom report formats are available on request.'
  },
  {
    question: 'What are your payment terms for corporate accounts?',
    answer: 'We offer credit-based monthly billing for established corporate accounts — typically 15 to 30 day payment terms against a GST invoice raised at month-end. New accounts may start with a security deposit or advance for the first cycle. Payments are accepted via NEFT/RTGS, UPI, and corporate cheque, and every invoice carries our GSTIN for Input Tax Credit.'
  },
  {
    question: 'How much does a corporate cab cost per kilometer?',
    answer: 'Corporate cab rates start at around ₹11/km for sedans on contract, ₹16-20/km for SUVs, ₹20-28/km for tempo travellers, and ₹45-75/km for buses. The exact rate depends on city, volume, shift pattern, and whether you choose per-trip, monthly, or dedicated-fleet billing. Monthly contracts for 50+ employees unlock the lowest per-km rates with no surge pricing.'
  },
  {
    question: 'What is the minimum number of employees for a corporate tie-up?',
    answer: 'There is no hard minimum — we serve everyone from a 5-person startup needing executive cabs to enterprises moving 500+ employees across multiple shifts. Smaller teams usually start on per-trip or per-employee billing, while teams of 30 or more benefit most from monthly contracts and dedicated routes with the best rates.'
  }
];

// ── GEO / AEO: per-city business-district (tech park / office hub) Place entities ──
// Additive map keyed by city slug. Each city carries its own GeoCoordinates +
// addressRegion + containedInPlace (city → state → India), and a list of key
// business districts / tech parks rendered as `containsPlace` children with geo.
// Used by /corporate-transportation-service/[city] to anchor the page to
// real-world office hubs for local search + AI answer engines (GEO).
export const corporateCityGeo = {
  delhi: {
    name: 'Delhi NCR',
    region: 'Delhi',
    postalCode: '110001',
    lat: '28.6139',
    lng: '77.2090',
    districts: [
      { name: 'Gurgaon Cyber City', type: 'IT & Business Hub', lat: '28.4949', lng: '77.0895' },
      { name: 'Noida Sector 62', type: 'IT Corridor', lat: '28.6280', lng: '77.3649' },
      { name: 'Connaught Place', type: 'Central Business District', lat: '28.6315', lng: '77.2167' },
      { name: 'Nehru Place', type: 'Commercial Hub', lat: '28.5494', lng: '77.2509' },
      { name: 'Aerocity', type: 'Business District', lat: '28.5526', lng: '77.1216' }
    ]
  },
  agra: {
    name: 'Agra',
    region: 'Uttar Pradesh',
    postalCode: '282001',
    lat: '27.1767',
    lng: '78.0081',
    districts: [
      { name: 'Nunhai Industrial Area', type: 'Manufacturing Hub', lat: '27.2150', lng: '78.0450' },
      { name: 'Sikandra Industrial Area', type: 'Leather Industry Zone', lat: '27.2167', lng: '77.9667' },
      { name: 'Civil Lines', type: 'Commercial Area', lat: '27.2000', lng: '78.0100' }
    ]
  },
  jaipur: {
    name: 'Jaipur',
    region: 'Rajasthan',
    postalCode: '302001',
    lat: '26.9124',
    lng: '75.7873',
    districts: [
      { name: 'Mahindra World City SEZ', type: 'Special Economic Zone', lat: '26.7470', lng: '75.8520' },
      { name: 'Sitapura IT Park', type: 'Technology Hub', lat: '26.7700', lng: '75.8400' },
      { name: 'EPIP Sitapura', type: 'Industrial Area', lat: '26.7720', lng: '75.8470' },
      { name: 'Malviya Nagar', type: 'Commercial District', lat: '26.8540', lng: '75.8100' }
    ]
  },
  chandigarh: {
    name: 'Chandigarh',
    region: 'Chandigarh',
    postalCode: '160001',
    lat: '30.7333',
    lng: '76.7794',
    districts: [
      { name: 'Chandigarh IT Park', type: 'Technology Hub', lat: '30.7270', lng: '76.8430' },
      { name: 'Mohali Phase 8B', type: 'IT Corridor', lat: '30.7050', lng: '76.7300' },
      { name: 'Industrial Area Phase 1', type: 'Manufacturing Zone', lat: '30.7100', lng: '76.8000' },
      { name: 'Panchkula IT Park', type: 'Tech Zone', lat: '30.6900', lng: '76.8530' }
    ]
  },
  dehradun: {
    name: 'Dehradun',
    region: 'Uttarakhand',
    postalCode: '248001',
    lat: '30.3165',
    lng: '78.0322',
    districts: [
      { name: 'IT Park Sahastradhara', type: 'Technology Hub', lat: '30.3870', lng: '78.0810' },
      { name: 'Selaqui Industrial Area', type: 'Pharma & Manufacturing', lat: '30.3700', lng: '77.8600' },
      { name: 'Rajpur Road', type: 'Commercial Corridor', lat: '30.3500', lng: '78.0700' }
    ]
  },
  noida: {
    name: 'Noida',
    region: 'Uttar Pradesh',
    postalCode: '201301',
    lat: '28.5355',
    lng: '77.3910',
    districts: [
      { name: 'Sector 62 IT Hub', type: 'Technology Park', lat: '28.6280', lng: '77.3649' },
      { name: 'Sector 63', type: 'IT & Industrial Hub', lat: '28.6200', lng: '77.3810' },
      { name: 'Greater Noida Expressway', type: 'Corporate Corridor', lat: '28.4744', lng: '77.5040' },
      { name: 'Film City', type: 'Media & Tech Hub', lat: '28.5950', lng: '77.3140' }
    ]
  },
  gurgaon: {
    name: 'Gurgaon',
    region: 'Haryana',
    postalCode: '122001',
    lat: '28.4595',
    lng: '77.0266',
    districts: [
      { name: 'DLF Cyber City', type: 'IT & Business Hub', lat: '28.4949', lng: '77.0895' },
      { name: 'Udyog Vihar', type: 'Industrial Estate', lat: '28.5020', lng: '77.0850' },
      { name: 'Golf Course Road', type: 'Premium Corporate Corridor', lat: '28.4420', lng: '77.0990' },
      { name: 'Sohna Road', type: 'Business Corridor', lat: '28.4100', lng: '77.0400' }
    ]
  },
  lucknow: {
    name: 'Lucknow',
    region: 'Uttar Pradesh',
    postalCode: '226001',
    lat: '26.8467',
    lng: '80.9462',
    districts: [
      { name: 'Gomti Nagar IT City', type: 'Technology Hub', lat: '26.8540', lng: '81.0010' },
      { name: 'Hazratganj', type: 'Commercial District', lat: '26.8520', lng: '80.9460' },
      { name: 'Vibhuti Khand', type: 'Corporate Area', lat: '26.8610', lng: '81.0030' }
    ]
  },
  haridwar: {
    name: 'Haridwar',
    region: 'Uttarakhand',
    postalCode: '249401',
    lat: '29.9457',
    lng: '78.1642',
    districts: [
      { name: 'BHEL Haridwar', type: 'PSU Campus', lat: '29.9300', lng: '78.0900' },
      { name: 'SIDCUL Industrial Area', type: 'Industrial Estate', lat: '29.9400', lng: '78.0700' },
      { name: 'Roshnabad', type: 'Commercial Area', lat: '29.9100', lng: '78.0600' }
    ]
  }
};

/**
 * GEO/AEO: Build a City Place schema for a corporate city, with key business
 * districts / tech parks / office hubs as `containsPlace` children (each with
 * its own GeoCoordinates). Anchors the city to a city → state → India geo graph.
 * Returns null if the slug has no geo record (safe to spread into JSON-LD).
 */
export const getCorporateCityPlaceSchema = (slug) => {
  const g = corporateCityGeo[slug];
  if (!g) return null;
  const base = 'https://www.trivenicabs.in';
  const cityId = `${base}/corporate-transportation-service/${slug}/#place`;
  return {
    "@context": "https://schema.org",
    "@type": "City",
    "@id": cityId,
    "name": g.name,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": g.name,
      "addressRegion": g.region,
      "postalCode": g.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": g.lat,
      "longitude": g.lng
    },
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": g.region,
      "containedInPlace": { "@type": "Country", "name": "India" }
    },
    "containsPlace": g.districts.map((d) => ({
      "@type": "Place",
      "name": d.name,
      "additionalType": d.type,
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": d.lat,
        "longitude": d.lng
      },
      "containedInPlace": { "@id": cityId }
    }))
  };
};

export const getAllCorporateCities = () => {
  return Object.values(corporateCities);
};

export const getCorporateCityBySlug = (slug) => {
  return corporateCities[slug] || null;
};

export const getAllCorporateSlugs = () => {
  return Object.keys(corporateCities);
};
