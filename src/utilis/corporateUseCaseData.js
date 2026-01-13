// Corporate Use Case Data
// SEO-optimized content for use case specific corporate transportation pages

export const corporateUseCases = {
  'employee-pick-drop': {
    id: 'employee-pick-drop',
    slug: 'employee-pick-drop',
    name: 'Employee Pick-up & Drop',
    title: 'Employee Pick-up & Drop Service',
    metaTitle: 'Employee Pickup Drop Service | Office Cab Service | Triveni Cabs',
    metaDescription: 'Reliable employee pickup and drop service for corporates. Door-to-door transport, flexible timings, GPS tracking. Serving Delhi NCR, Jaipur, Chandigarh. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    icon: '🚗',
    color: 'from-cyan-500 to-blue-500',
    tagline: 'Hassle-Free Employee Commute',
    subtitle: 'Door-to-Door Transport for Your Workforce',
    description: 'Transform your employee commute experience with Triveni Cabs\' comprehensive pick-up and drop service. We handle the complete logistics of transporting your workforce from their homes to office and back, ensuring they arrive fresh, on time, and ready to work.',

    howItWorks: [
      { step: 1, title: 'Share Employee Roster', description: 'Provide us with employee addresses and shift timings', icon: '📋' },
      { step: 2, title: 'Route Optimization', description: 'We plan optimal routes to minimize travel time', icon: '🗺️' },
      { step: 3, title: 'Vehicle Assignment', description: 'Right-sized vehicles assigned to each route', icon: '🚐' },
      { step: 4, title: 'Daily Operations', description: 'Seamless daily pickups with real-time tracking', icon: '✅' }
    ],

    features: [
      { icon: '🏠', title: 'Door-to-Door Service', description: 'Pickup from employee residence, drop at office gate' },
      { icon: '⏰', title: 'Flexible Timings', description: 'Multiple shift timings supported' },
      { icon: '📍', title: 'Real-time Tracking', description: 'Track every vehicle in real-time' },
      { icon: '🔄', title: 'Route Optimization', description: 'AI-powered routing for efficiency' },
      { icon: '👨‍✈️', title: 'Dedicated Drivers', description: 'Same drivers for consistency and trust' },
      { icon: '📱', title: 'Employee App', description: 'Employees can track their ride' },
      { icon: '📊', title: 'MIS Reports', description: 'Detailed reports for management' },
      { icon: '🚗', title: 'Backup Guarantee', description: 'Replacement vehicle in 30 minutes' }
    ],

    pricingModels: [
      {
        name: 'Per Employee Per Day',
        description: 'Fixed rate per employee transported',
        ideal: 'Variable attendance, hybrid work',
        features: ['Pay only for actual pickups', 'No minimum commitment', 'Flexible scaling']
      },
      {
        name: 'Monthly Package',
        description: 'Fixed monthly rate for defined routes',
        ideal: 'Regular daily transport',
        features: ['Predictable costs', 'Better rates', 'Dedicated vehicles']
      },
      {
        name: 'Per Kilometer',
        description: 'Distance-based billing',
        ideal: 'Spread out locations',
        features: ['Fair for long distances', 'Transparent billing', 'Route flexibility']
      }
    ],

    benefits: [
      { title: 'Improved Productivity', description: 'Employees arrive fresh, not stressed from commute' },
      { title: 'Better Retention', description: 'Transport benefit helps retain talent' },
      { title: 'Reduced Absenteeism', description: 'Reliable transport means fewer commute-related leaves' },
      { title: 'Cost Savings', description: 'Shared transport costs less than individual reimbursements' },
      { title: 'Safety & Compliance', description: 'Especially important for night shifts and women employees' },
      { title: 'Zero Admin Hassle', description: 'We handle all transport logistics' }
    ],

    faqs: [
      {
        question: 'How do you handle employee address changes or new joiners?',
        answer: 'Our system allows real-time roster updates. You can add new employees, update addresses, or remove employees through our dashboard or by informing your account manager. Routes are re-optimized automatically.'
      },
      {
        question: 'What if an employee is not ready when the vehicle arrives?',
        answer: 'Drivers wait for a standard 5-minute grace period. For habitual delays, we work with your HR team to address the issue. We can also implement a call-before-pickup system if needed.'
      },
      {
        question: 'Can you handle multiple office locations for the same company?',
        answer: 'Yes, we can manage transport to multiple office locations with different shift timings. Employees are routed to their designated office based on the roster.'
      },
      {
        question: 'How do you handle leave or Work From Home days?',
        answer: 'Daily roster updates by 6 PM allow you to mark leaves or WFH. We only charge for actual pickups made, so you don\'t pay for employees who don\'t travel.'
      }
    ],

    keywords: ['employee pickup drop service', 'office cab service', 'employee transport service', 'corporate pickup drop', 'staff transport service']
  },

  'airport-transfer-corporate': {
    id: 'airport-transfer-corporate',
    slug: 'airport-transfer-corporate',
    name: 'Corporate Airport Transfers',
    title: 'Corporate Airport Transfer Service',
    metaTitle: 'Corporate Airport Transfer | Business Airport Pickup | Triveni Cabs',
    metaDescription: 'Premium corporate airport transfer service. Executive airport pickup, flight tracking, meet & greet. Delhi IGI, Jaipur, Chandigarh airports. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    icon: '✈️',
    color: 'from-blue-600 to-indigo-600',
    tagline: 'Premium Airport Transfers for Business',
    subtitle: 'First-Class Airport Pickup & Drop Service',
    description: 'Make a great first impression with our premium corporate airport transfer service. Whether picking up important clients, executives, or business guests, our professional chauffeurs and premium vehicles ensure a seamless airport experience.',

    airports: [
      { name: 'Delhi IGI Airport', code: 'DEL', terminals: 'T1, T2, T3', coverage: 'Full NCR coverage' },
      { name: 'Jaipur International Airport', code: 'JAI', terminals: 'Single Terminal', coverage: 'All Jaipur areas' },
      { name: 'Chandigarh Airport', code: 'IXC', terminals: 'Single Terminal', coverage: 'Tricity coverage' },
      { name: 'Dehradun Jolly Grant', code: 'DED', terminals: 'Single Terminal', coverage: 'Dehradun & Mussoorie' }
    ],

    features: [
      { icon: '📡', title: 'Flight Tracking', description: 'We monitor flight status and adjust pickup time' },
      { icon: '👋', title: 'Meet & Greet', description: 'Driver with nameboard at arrival gate' },
      { icon: '🧳', title: 'Luggage Assistance', description: 'Help with bags to the vehicle' },
      { icon: '⏰', title: '24/7 Availability', description: 'Any flight time, we\'re there' },
      { icon: '🚘', title: 'Premium Vehicles', description: 'Clean, well-maintained premium cars' },
      { icon: '📱', title: 'Real-time Updates', description: 'SMS/WhatsApp updates on driver status' },
      { icon: '💳', title: 'Easy Billing', description: 'Centralized corporate billing' },
      { icon: '🔄', title: 'No Wait Charges', description: '60 min free waiting for flight delays' }
    ],

    vehicleOptions: [
      { type: 'Sedan', vehicles: 'Dzire, Etios, Amaze', capacity: '2-3 pax + luggage', useCase: 'Individual executives' },
      { type: 'Premium Sedan', vehicles: 'Camry, Accord', capacity: '2-3 pax + luggage', useCase: 'Senior executives, VIPs' },
      { type: 'SUV', vehicles: 'Innova Crysta, Ertiga', capacity: '4-5 pax + luggage', useCase: 'Small groups' },
      { type: 'Luxury', vehicles: 'Mercedes, BMW, Audi', capacity: '2-3 pax + luggage', useCase: 'CXOs, Board members' },
      { type: 'Tempo Traveller', vehicles: '12-17 Seater', capacity: '8-12 pax + luggage', useCase: 'Group arrivals' }
    ],

    pricingModels: [
      { name: 'One-Way Transfer', description: 'Airport to destination or vice versa', startingFrom: '₹1,500' },
      { name: 'Round Trip', description: 'Pickup + drop within same day', discount: '10% off' },
      { name: 'Corporate Account', description: 'Monthly billing for regular transfers', benefit: 'Best rates + priority' }
    ],

    faqs: [
      {
        question: 'What if the flight is delayed?',
        answer: 'We track all flights and automatically adjust pickup time based on actual arrival. We offer 60 minutes of free waiting time for delayed flights, so there\'s no extra charge for minor delays.'
      },
      {
        question: 'Can the driver meet inside the terminal with a nameboard?',
        answer: 'Yes, for meet & greet service, our driver will wait at the arrival gate with a nameboard displaying the guest\'s name. Additional parking charges apply for terminal entry.'
      },
      {
        question: 'Do you provide airport transfers for groups?',
        answer: 'Yes, we can arrange transport for groups of any size. From tempo travellers for 8-12 people to multiple vehicles for larger groups arriving together.'
      },
      {
        question: 'Can we set up a corporate account for regular airport transfers?',
        answer: 'Absolutely. Corporate accounts get centralized billing, best rates, priority booking, and a dedicated account manager. We can set up approval workflows as per your policy.'
      }
    ],

    keywords: ['corporate airport transfer', 'business airport pickup', 'executive airport cab', 'Delhi airport corporate cab', 'airport pickup service']
  },

  'executive-car-rental': {
    id: 'executive-car-rental',
    slug: 'executive-car-rental',
    name: 'Executive Car Rental',
    title: 'Executive Car Rental Service',
    metaTitle: 'Executive Car Rental | Luxury Car with Chauffeur | Triveni Cabs',
    metaDescription: 'Premium executive car rental with professional chauffeur. Luxury sedans, SUVs for business. Daily, weekly, monthly rentals. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    icon: '🚘',
    color: 'from-slate-700 to-slate-900',
    tagline: 'Travel Like a Leader',
    subtitle: 'Premium Cars with Professional Chauffeurs',
    description: 'Elevate your business travel with our executive car rental service. Perfect for CXOs, senior executives, and business leaders who need reliable, premium transportation with professional chauffeurs who understand corporate etiquette.',

    executiveFleet: [
      {
        category: 'Premium Sedan',
        vehicles: ['Toyota Camry', 'Honda Accord', 'Skoda Superb'],
        features: ['Leather interiors', 'Rear AC', 'Spacious legroom'],
        idealFor: 'Daily executive commute, client meetings'
      },
      {
        category: 'Luxury Sedan',
        vehicles: ['Mercedes E-Class', 'BMW 5 Series', 'Audi A6'],
        features: ['Luxury interiors', 'Premium sound', 'Executive comfort'],
        idealFor: 'CXOs, Board members, VIP clients'
      },
      {
        category: 'Premium SUV',
        vehicles: ['Toyota Fortuner', 'Innova Crysta', 'MG Gloster'],
        features: ['Commanding presence', 'Spacious', 'Versatile'],
        idealFor: 'Executives who prefer SUVs, site visits'
      },
      {
        category: 'Luxury SUV',
        vehicles: ['Mercedes GLS', 'BMW X5', 'Audi Q7'],
        features: ['Ultimate luxury', 'Statement vehicle', 'Best-in-class'],
        idealFor: 'Chairman, CEO, Ultra-premium needs'
      }
    ],

    useCases: [
      { title: 'CEO/CXO Daily Commute', description: 'Dedicated car and driver for daily office travel' },
      { title: 'Client Meetings', description: 'Make an impression when meeting important clients' },
      { title: 'Board Member Transport', description: 'Premium transport for board meetings' },
      { title: 'Investor Visits', description: 'Impress visiting investors with quality transport' },
      { title: 'VIP Guest Pickup', description: 'Welcome important guests in style' },
      { title: 'Business Events', description: 'Executive transport for conferences, seminars' }
    ],

    features: [
      { icon: '👨‍✈️', title: 'Professional Chauffeur', description: 'Well-groomed, trained in corporate etiquette' },
      { icon: '🚗', title: 'Premium Vehicle', description: 'Clean, well-maintained, latest models' },
      { icon: '💧', title: 'Amenities', description: 'Water, tissues, newspaper on request' },
      { icon: '🔒', title: 'Privacy', description: 'Confidential, discrete service' },
      { icon: '📱', title: 'Easy Booking', description: 'Book via call, WhatsApp, or app' },
      { icon: '📋', title: 'GST Invoice', description: 'Proper billing for corporate accounts' },
      { icon: '⏰', title: 'Punctual Service', description: 'Always on time, no waiting' },
      { icon: '🔄', title: 'Flexible Options', description: 'Daily, weekly, monthly rentals' }
    ],

    rentalOptions: [
      { duration: 'Daily', hours: '8 Hours / 80 KM', extraKm: '₹15-50/km', extraHr: '₹200-500/hr' },
      { duration: 'Weekly', hours: '8 Hours/day x 7 days', benefit: '10% discount' },
      { duration: 'Monthly', hours: '8 Hours/day x 26 days', benefit: '15-20% discount' },
      { duration: 'Outstation', hours: '300 KM/day minimum', benefit: 'All-inclusive packages' }
    ],

    faqs: [
      {
        question: 'Can we get the same driver every day?',
        answer: 'Yes, for monthly rentals, we assign a dedicated driver who becomes familiar with your preferences, regular routes, and schedule. This ensures consistency and builds trust.'
      },
      {
        question: 'What if we need the car for more than 8 hours?',
        answer: 'Extra hours are charged per hour based on the vehicle category. For regular extended usage, we can customize a package that suits your typical requirements.'
      },
      {
        question: 'Are luxury vehicles available for rent?',
        answer: 'Yes, we offer Mercedes, BMW, and Audi vehicles for executive rental. These are available on advance booking basis and come with specially trained chauffeurs.'
      },
      {
        question: 'Can we hire for outstation executive travel?',
        answer: 'Absolutely. We provide executive car rental for outstation travel with all-inclusive packages covering driver allowance, tolls, and parking.'
      }
    ],

    keywords: ['executive car rental', 'luxury car with chauffeur', 'premium car rental', 'business car hire', 'chauffeur driven car']
  },

  'office-shuttle-service': {
    id: 'office-shuttle-service',
    slug: 'office-shuttle-service',
    name: 'Office Shuttle Service',
    title: 'Office Shuttle Bus Service',
    metaTitle: 'Office Shuttle Service | Corporate Shuttle Bus | Triveni Cabs',
    metaDescription: 'Efficient office shuttle bus service for corporates. Fixed route shuttles, tempo travellers, AC buses. Employee transport made easy. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    icon: '🚌',
    color: 'from-green-500 to-emerald-600',
    tagline: 'Efficient Group Commute Solutions',
    subtitle: 'Shuttle Services That Work Like Clockwork',
    description: 'Optimize your employee transport costs with our efficient office shuttle services. Fixed routes, scheduled timings, and comfortable vehicles make group commuting the smartest choice for medium to large workforces.',

    shuttleTypes: [
      {
        type: 'Fixed Route Shuttle',
        description: 'Predefined routes with fixed stops and timings',
        idealFor: 'Regular daily commute, predictable attendance',
        vehicles: ['Tempo Traveller', 'Mini Bus', 'Bus']
      },
      {
        type: 'Hub & Spoke',
        description: 'Feeder vehicles to central hubs, then shuttles to office',
        idealFor: 'Spread out workforce, multiple pickup zones',
        vehicles: ['Mix of sedans and buses']
      },
      {
        type: 'Inter-Office Shuttle',
        description: 'Regular shuttles between multiple office locations',
        idealFor: 'Multi-location companies, campus connectivity',
        vehicles: ['Tempo Traveller', 'Mini Bus']
      },
      {
        type: 'Metro Feeder',
        description: 'Last-mile connectivity from metro stations to office',
        idealFor: 'Offices near metro, employee convenience',
        vehicles: ['Tempo Traveller', 'Mini Bus']
      }
    ],

    vehicleOptions: [
      { type: '12-17 Seater Tempo', capacity: '12-15 comfortable', ac: 'Yes', features: ['Pushback seats', 'Music system', 'Charging points'] },
      { type: '20-26 Seater Tempo', capacity: '18-24 comfortable', ac: 'Yes', features: ['Pushback seats', 'Maharaja variant available'] },
      { type: '32 Seater Mini Bus', capacity: '28-30 comfortable', ac: 'Yes', features: ['Comfortable seats', 'PA system'] },
      { type: '41-45 Seater Bus', capacity: '38-42 comfortable', ac: 'Yes', features: ['2x2 seating', 'Luggage space'] },
      { type: '52-56 Seater Bus', capacity: '48-52 comfortable', ac: 'Yes', features: ['2x3 seating', 'Large capacity'] }
    ],

    features: [
      { icon: '⏰', title: 'Fixed Schedule', description: 'Reliable, punctual departures' },
      { icon: '🗺️', title: 'Optimized Routes', description: 'Minimal travel time for all' },
      { icon: '📍', title: 'GPS Tracking', description: 'Track shuttle location in real-time' },
      { icon: '❄️', title: 'AC Vehicles', description: 'All shuttles are air-conditioned' },
      { icon: '🧹', title: 'Clean & Maintained', description: 'Daily cleaning, regular service' },
      { icon: '👨‍✈️', title: 'Professional Drivers', description: 'Trained, verified drivers' }
    ],

    benefits: [
      { title: 'Cost Efficient', description: 'Shared transport reduces per-employee cost significantly' },
      { title: 'Eco-Friendly', description: 'Fewer vehicles on road means lower carbon footprint' },
      { title: 'Predictable', description: 'Fixed schedules help employees plan their day' },
      { title: 'Scalable', description: 'Easy to add or remove routes as needs change' }
    ],

    faqs: [
      {
        question: 'How many employees do I need to start a shuttle service?',
        answer: 'A shuttle route becomes cost-effective with 10-12+ employees in a similar direction. We can help analyze your employee locations and recommend optimal shuttle configurations.'
      },
      {
        question: 'Can shuttle timings be customized for our office hours?',
        answer: 'Absolutely. We design shuttle schedules around your office timings. Morning pickups are timed to reach office 15-20 minutes before shift, and evening drops start post office hours.'
      },
      {
        question: 'What if some employees work different shifts?',
        answer: 'We can run multiple shuttle batches for different shift timings. Each shift can have its own set of shuttles with routes optimized for that batch of employees.'
      },
      {
        question: 'How do employees know when the shuttle will arrive?',
        answer: 'Employees can track the shuttle in real-time via our app or web portal. They also receive SMS/WhatsApp notifications when the shuttle is approaching their stop.'
      }
    ],

    keywords: ['office shuttle service', 'corporate shuttle bus', 'employee shuttle service', 'office bus service', 'company shuttle']
  },

  'monthly-car-rental-corporate': {
    id: 'monthly-car-rental-corporate',
    slug: 'monthly-car-rental-corporate',
    name: 'Monthly Car Rental',
    title: 'Monthly Car Rental for Corporates',
    metaTitle: 'Monthly Car Rental for Companies | Corporate Car Lease | Triveni Cabs',
    metaDescription: 'Flexible monthly car rental for businesses. Dedicated vehicle & driver, all-inclusive packages. Sedan, SUV, luxury options. Call 7668570551.',
    heroImage: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
    icon: '📅',
    color: 'from-violet-500 to-purple-600',
    tagline: 'Your Car, Your Driver, Your Schedule',
    subtitle: 'Hassle-Free Monthly Car Solutions for Business',
    description: 'Get a dedicated vehicle and driver for your business without the hassles of ownership. Our monthly car rental packages include everything - vehicle, driver, fuel management, maintenance, and insurance. Just use the car, we handle the rest.',

    rentalPackages: [
      {
        name: '8 Hours / 80 KM',
        description: 'Standard business day package',
        idealFor: 'Office commute + few meetings',
        extraKm: 'Per KM charges apply',
        extraHour: 'Per hour charges apply'
      },
      {
        name: '10 Hours / 100 KM',
        description: 'Extended business day',
        idealFor: 'Busy executives with multiple meetings',
        extraKm: 'Per KM charges apply',
        extraHour: 'Per hour charges apply'
      },
      {
        name: '12 Hours / 120 KM',
        description: 'Full day availability',
        idealFor: 'Senior management, field work',
        extraKm: 'Per KM charges apply',
        extraHour: 'Per hour charges apply'
      },
      {
        name: '24x7 Dedicated',
        description: 'Round the clock availability',
        idealFor: 'CXOs, on-call requirements',
        extraKm: 'Usually unlimited',
        extraHour: 'N/A - Always available'
      }
    ],

    vehicleCategories: [
      { category: 'Sedan', vehicles: ['Swift Dzire', 'Honda Amaze', 'Hyundai Aura'], priceRange: '₹28,000 - ₹35,000/month' },
      { category: 'Premium Sedan', vehicles: ['Toyota Camry', 'Honda Accord'], priceRange: '₹55,000 - ₹70,000/month' },
      { category: 'SUV', vehicles: ['Ertiga', 'Marazzo', 'XUV700'], priceRange: '₹38,000 - ₹48,000/month' },
      { category: 'Premium SUV', vehicles: ['Innova Crysta', 'Fortuner'], priceRange: '₹50,000 - ₹65,000/month' },
      { category: 'Luxury', vehicles: ['Mercedes', 'BMW', 'Audi'], priceRange: 'On Request' }
    ],

    features: [
      { icon: '🚗', title: 'Dedicated Vehicle', description: 'Same car assigned throughout' },
      { icon: '👨‍✈️', title: 'Professional Driver', description: 'Dedicated, trained chauffeur' },
      { icon: '🔧', title: 'Maintenance', description: 'All vehicle maintenance covered' },
      { icon: '📋', title: 'Insurance', description: 'Comprehensive insurance included' },
      { icon: '🔄', title: 'Replacement', description: 'Backup vehicle for breakdowns' },
      { icon: '📊', title: 'Monthly Reports', description: 'Detailed usage reports' },
      { icon: '⏰', title: 'Flexible Hours', description: 'Choose 8/10/12 hour packages' },
      { icon: '💰', title: 'All-Inclusive', description: 'No hidden costs, transparent pricing' }
    ],

    optionalAddOns: [
      { addon: 'Fuel Included', description: 'We manage fuel, you pay fixed rate' },
      { addon: 'GPS Dashboard', description: 'Track vehicle usage, routes taken' },
      { addon: 'Multiple Drivers', description: 'Backup drivers for extended hours' },
      { addon: 'Outstation Ready', description: 'Package that includes outstation travel' }
    ],

    faqs: [
      {
        question: 'What is the minimum rental period?',
        answer: 'Our monthly car rental is designed for minimum 1-month commitment. For shorter durations, we offer daily or weekly rentals at different rates.'
      },
      {
        question: 'Can we use the car for personal use on weekends?',
        answer: 'Yes, the car is at your disposal for the contracted hours. Usage within the daily limit (8/10/12 hours) can include personal use. Extra usage is charged additionally.'
      },
      {
        question: 'What happens if the driver is sick or on leave?',
        answer: 'We provide a replacement driver immediately at no extra cost. For dedicated relationships, we can also assign a backup driver who is familiar with your requirements.'
      },
      {
        question: 'Can we change the vehicle category mid-contract?',
        answer: 'Yes, vehicle upgrades or changes can be accommodated with reasonable notice. Pricing will be adjusted based on the new vehicle category.'
      },
      {
        question: 'How is fuel managed?',
        answer: 'By default, fuel is on actual basis - you pay for fuel consumed. We can also offer fuel-included packages where you pay a fixed monthly amount regardless of usage.'
      }
    ],

    keywords: ['monthly car rental for companies', 'corporate car rental monthly', 'long term car hire', 'company car with driver', 'business car lease']
  }
};

export const getAllUseCases = () => {
  return Object.values(corporateUseCases);
};

export const getUseCaseBySlug = (slug) => {
  return corporateUseCases[slug] || null;
};

export const getAllUseCaseSlugs = () => {
  return Object.keys(corporateUseCases);
};
