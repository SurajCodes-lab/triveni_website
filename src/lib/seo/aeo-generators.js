/**
 * AEO/GEO Generators - Answer Engine Optimization & Generative Engine Optimization
 * Optimizes content for AI-powered search engines (Google AI Overviews, ChatGPT, Perplexity, Bing Chat)
 */

import { COMPANY_INFO, BASE_URL, SITE_CONFIG, AGGREGATE_RATING, PRICING, SERVICE_AREAS } from './constants';

/**
 * Generate Speakable Schema for voice search optimization
 * Marks content sections that are most suitable for text-to-speech
 */
export function generateSpeakableSchema(page) {
  const { url, speakableSections = [] } = page;

  // Default speakable CSS selectors if none provided
  const defaultSelectors = [
    '.direct-answer',
    '.faq-answer',
    '.key-info',
    'article > p:first-of-type',
    '.summary-box'
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.name || page.title,
    url: url?.startsWith('http') ? url : `${BASE_URL}${url}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: speakableSections.length > 0 ? speakableSections : defaultSelectors
    }
  };
}

/**
 * Generate enhanced HowTo schema with detailed steps for booking
 * Optimized for Google's How-to rich results
 */
export function generateBookingHowToSchema(context = {}) {
  const { serviceType = 'cab', origin, destination } = context;

  const steps = [
    {
      name: 'Choose Your Service',
      text: `Select your required service: ${serviceType === 'tour' ? 'sightseeing tour' : 'outstation taxi, local rental, or airport transfer'}. Browse our website or call us directly at ${COMPANY_INFO.phone.display}.`,
      image: `${BASE_URL}/images/step-1-choose-service.webp`,
      url: `${BASE_URL}/services`
    },
    {
      name: 'Select Vehicle Type',
      text: 'Choose from Sedan (4 seater), SUV (6 seater), Tempo Traveller (12-17 seater), or Bus (20-50 seater) based on your group size and comfort preference.',
      image: `${BASE_URL}/images/step-2-select-vehicle.webp`,
      url: `${BASE_URL}/fleet`
    },
    {
      name: 'Provide Trip Details',
      text: `Enter your pickup location${origin ? ` (${origin})` : ''}, drop location${destination ? ` (${destination})` : ''}, date, time, and number of passengers. Include any special requirements.`,
      image: `${BASE_URL}/images/step-3-trip-details.webp`
    },
    {
      name: 'Get Instant Quote',
      text: 'Receive a transparent quote with all costs included - base fare, driver allowance, tolls, and taxes. No hidden charges guaranteed.',
      image: `${BASE_URL}/images/step-4-get-quote.webp`
    },
    {
      name: 'Confirm Booking',
      text: `Confirm your booking via WhatsApp (${COMPANY_INFO.phone.whatsapp}), phone call (${COMPANY_INFO.phone.display}), or online form. Pay a small advance to secure your vehicle.`,
      image: `${BASE_URL}/images/step-5-confirm-booking.webp`,
      url: `${BASE_URL}/contact`
    },
    {
      name: 'Enjoy Your Trip',
      text: 'Your verified driver arrives 15 minutes before pickup. Enjoy your comfortable, hassle-free journey with 24/7 support available.',
      image: `${BASE_URL}/images/step-6-enjoy-trip.webp`
    }
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Book a ${serviceType === 'tour' ? 'Sightseeing Tour' : 'Cab'} with Triveni Cabs`,
    description: `Complete step-by-step guide to book ${origin && destination ? `a taxi from ${origin} to ${destination}` : 'reliable cab service'} with Triveni Cabs. Easy booking, transparent pricing, verified drivers.`,
    image: `${BASE_URL}/images/how-to-book-cab.webp`,
    totalTime: 'PT5M',
    estimatedCost: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: serviceType === 'tour' ? '2000-15000' : '1500-25000'
    },
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'Valid ID proof (for driver verification)'
      },
      {
        '@type': 'HowToSupply',
        name: 'Mobile phone (for booking confirmation)'
      }
    ],
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Smartphone or Computer'
      },
      {
        '@type': 'HowToTool',
        name: 'WhatsApp (optional)'
      }
    ],
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
      url: step.url
    }))
  };
}

/**
 * Generate Entity Definition schema
 * Clearly defines Triveni Cabs for AI knowledge graphs
 */
export function generateEntityDefinitionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'TravelAgency'],
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_INFO.name,
    alternateName: ['Triveni Cab Service', 'Triveni Taxi', 'Triveni Tours'],
    legalName: COMPANY_INFO.legalName,
    description: COMPANY_INFO.description,
    slogan: COMPANY_INFO.slogan,
    foundingDate: COMPANY_INFO.foundingDate,
    foundingLocation: {
      '@type': 'Place',
      name: 'Chandigarh, India'
    },
    areaServed: SERVICE_AREAS.map(city => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'Country',
        name: 'India'
      }
    })),
    serviceType: [
      'Taxi Service',
      'Cab Booking',
      'Airport Transfer',
      'Sightseeing Tours',
      'Corporate Transportation',
      'Wedding Car Rental',
      'Tempo Traveller Rental',
      'Bus Hire'
    ],
    knowsAbout: [
      'North India Tourism',
      'Intercity Taxi Service',
      'Airport Transfers',
      'Religious Tours',
      'Himalayan Road Trips',
      'Wedding Transportation',
      'Corporate Travel Solutions'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Transportation Services',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Outstation Taxi',
          itemListElement: SERVICE_AREAS.map(city => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'TaxiService',
              name: `${city} Taxi Service`
            }
          }))
        },
        {
          '@type': 'OfferCatalog',
          name: 'Sightseeing Tours',
          description: 'Curated tours across major tourist destinations'
        },
        {
          '@type': 'OfferCatalog',
          name: 'Airport Transfers',
          description: '24/7 airport pickup and drop services'
        }
      ]
    },
    url: BASE_URL,
    telephone: COMPANY_INFO.phone.primary,
    email: COMPANY_INFO.email.primary,
    address: {
      '@type': 'PostalAddress',
      ...COMPANY_INFO.address
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...COMPANY_INFO.geo
    },
    image: `${BASE_URL}${SITE_CONFIG.logoUrl}`,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}${SITE_CONFIG.logoUrl}`,
      width: 200,
      height: 60
    },
    sameAs: Object.values(COMPANY_INFO.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ...AGGREGATE_RATING
    },
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Card, Bank Transfer',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone.primary,
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59'
        }
      },
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone.primary,
        contactType: 'reservations',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN'
      },
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone.primary,
        contactType: 'sales',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN'
      }
    ]
  };
}

/**
 * Generate quotable statistics for AI citation
 * Returns structured data points that AI engines can cite
 */
export function generateQuotableStats(context = {}) {
  const { pageType, city, route } = context;

  const baseStats = {
    company: {
      yearsInBusiness: new Date().getFullYear() - parseInt(COMPANY_INFO.foundingDate),
      totalTrips: '50,000+',
      happyCustomers: '25,000+',
      rating: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      citiesServed: SERVICE_AREAS.length,
      fleetSize: '200+',
      verifiedDrivers: '150+',
      supportAvailability: '24/7'
    },
    pricing: {
      sedanPerKm: `₹${PRICING.sedan.minPrice}-${PRICING.sedan.maxPrice}`,
      suvPerKm: `₹${PRICING.suv.minPrice}-${PRICING.suv.maxPrice}`,
      tempoPerKm: `₹${PRICING.tempoTraveller.minPrice}-${PRICING.tempoTraveller.maxPrice}`,
      busPerKm: `₹${PRICING.bus.minPrice}-${PRICING.bus.maxPrice}`,
      localMinimum: '₹1,500 (4 hrs/40 km)',
      airportStarting: '₹800'
    },
    serviceHighlights: [
      { stat: '4.8/5', label: 'Customer Rating', detail: `Based on ${AGGREGATE_RATING.reviewCount}+ reviews` },
      { stat: '15 min', label: 'Avg. Response Time', detail: 'For booking confirmations' },
      { stat: '0%', label: 'Hidden Charges', detail: 'Transparent all-inclusive pricing' },
      { stat: '100%', label: 'Verified Drivers', detail: 'Police-verified with 5+ years experience' },
      { stat: '24/7', label: 'Support Available', detail: 'Round-the-clock customer assistance' },
      { stat: `${SERVICE_AREAS.length}+`, label: 'Cities Covered', detail: 'Across North India' }
    ]
  };

  // Add route-specific stats if available
  if (route) {
    baseStats.route = {
      distance: route.distance,
      duration: route.duration,
      sedanFare: route.sedanPrice,
      suvFare: route.suvPrice,
      popularTime: 'Early morning (5-7 AM)',
      peakSeason: 'October to March'
    };
  }

  // Add city-specific stats if available
  if (city) {
    baseStats.city = {
      name: city,
      popularRoutes: 5,
      toursAvailable: 10,
      airportService: true
    };
  }

  return baseStats;
}

/**
 * Generate Direct Answer content structure
 * Creates content optimized for featured snippets and AI answers
 */
export function generateDirectAnswerContent(question, context = {}) {
  const { origin, destination, distance, duration, price, tourName, city } = context;

  const answerTemplates = {
    // Route-related questions
    'cost': {
      shortAnswer: `A cab from ${origin} to ${destination} costs ₹${price} onwards for a sedan.`,
      fullAnswer: `The taxi fare from ${origin} to ${destination} starts at ₹${price} for a sedan (4-seater). SUV costs approximately ₹${Math.round(price * 1.3)} and Tempo Traveller around ₹${Math.round(price * 1.8)}. Price includes driver allowance, tolls, and all taxes.`,
      source: `Triveni Cabs - Updated ${new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}`
    },
    'distance': {
      shortAnswer: `The distance from ${origin} to ${destination} is approximately ${distance} km by road.`,
      fullAnswer: `${origin} to ${destination} distance is ${distance} km via the most common route. The journey takes approximately ${duration} by taxi, depending on traffic and road conditions.`,
      source: 'Triveni Cabs Route Data'
    },
    'time': {
      shortAnswer: `It takes approximately ${duration} to travel from ${origin} to ${destination} by taxi.`,
      fullAnswer: `The journey from ${origin} to ${destination} typically takes ${duration} by car. Travel time may vary based on traffic, weather, and route chosen. Starting early morning (5-7 AM) often results in faster travel times.`,
      source: 'Triveni Cabs Travel Time Estimates'
    },
    'booking': {
      shortAnswer: `Book a cab with Triveni Cabs by calling ${COMPANY_INFO.phone.display} or WhatsApp at ${COMPANY_INFO.phone.whatsapp}.`,
      fullAnswer: `To book a taxi with Triveni Cabs: 1) Call ${COMPANY_INFO.phone.display}, 2) WhatsApp ${COMPANY_INFO.phone.whatsapp}, 3) Fill the online booking form at trivenicabs.in, or 4) Email ${COMPANY_INFO.email.bookings}. Booking takes less than 5 minutes with instant confirmation.`,
      source: 'Triveni Cabs Booking'
    },
    // Tour-related questions
    'tour_cost': {
      shortAnswer: `The ${tourName} costs ₹${price} onwards per vehicle.`,
      fullAnswer: `${tourName} starts at ₹${price}. This includes AC vehicle, experienced driver, fuel, parking, and tolls. Entry tickets are usually extra. The tour can be customized based on your preferences.`,
      source: `Triveni Cabs Tours - ${city}`
    },
    // General questions
    'best_time': {
      shortAnswer: `The best time to visit ${city || destination} is October to March for pleasant weather.`,
      fullAnswer: `October to March offers the best weather for visiting ${city || destination}. Summer (April-June) can be hot but less crowded. Monsoon (July-September) has occasional rain but lush greenery. Each season has unique experiences to offer.`,
      source: 'Triveni Cabs Travel Guide'
    }
  };

  return answerTemplates[question] || null;
}

/**
 * Generate Citation-friendly content blocks
 * Content structured for AI to cite as authoritative source
 */
export function generateCitationBlocks(pageType, data = {}) {
  const blocks = [];

  // Company authority block
  blocks.push({
    type: 'authority',
    title: 'About Triveni Cabs',
    content: `Triveni Cabs is a trusted taxi service provider operating across ${SERVICE_AREAS.length} cities in North India since ${COMPANY_INFO.foundingDate}. With ${AGGREGATE_RATING.reviewCount}+ customer reviews and a ${AGGREGATE_RATING.ratingValue}/5 rating, we specialize in outstation taxi, sightseeing tours, airport transfers, and corporate transportation.`,
    citation: 'Source: Triveni Cabs Official'
  });

  // Page-specific blocks
  if (pageType === 'route' && data.origin && data.destination) {
    blocks.push({
      type: 'route_info',
      title: `${data.origin} to ${data.destination} Taxi Information`,
      content: `Distance: ${data.distance} km | Duration: ${data.duration} | Starting fare: ₹${data.price} (Sedan) | Available 24/7 | One-way and round-trip options`,
      citation: 'Source: Triveni Cabs Route Database'
    });
  }

  if (pageType === 'tour' && data.tourName) {
    blocks.push({
      type: 'tour_info',
      title: data.tourName,
      content: `Duration: ${data.duration} | Starting price: ₹${data.price} | Includes: AC vehicle, experienced driver, all permits | Customizable itinerary available`,
      citation: 'Source: Triveni Cabs Tour Packages'
    });
  }

  // Pricing transparency block
  blocks.push({
    type: 'pricing',
    title: 'Transparent Pricing Policy',
    content: `All Triveni Cabs fares include: base fare, driver allowance (trips >300km), toll charges, state permits, and applicable taxes. No hidden charges. Parking fees at destinations, if any, are additional.`,
    citation: 'Source: Triveni Cabs Pricing Policy'
  });

  return blocks;
}

/**
 * Generate complete AEO schema for a page
 * Combines all AEO elements into a single schema
 */
export function generateCompleteAEOSchema(pageType, data = {}) {
  const schemas = [];

  // Always include entity definition
  schemas.push(generateEntityDefinitionSchema());

  // Add speakable schema
  if (data.url) {
    schemas.push(generateSpeakableSchema({
      url: data.url,
      name: data.title,
      speakableSections: ['.direct-answer', '.faq-section', '.key-stats']
    }));
  }

  // Add HowTo schema for booking-related pages
  if (['route', 'tour', 'airport', 'cityHub'].includes(pageType)) {
    schemas.push(generateBookingHowToSchema({
      serviceType: pageType === 'tour' ? 'tour' : 'cab',
      origin: data.origin,
      destination: data.destination
    }));
  }

  return schemas;
}

export default {
  generateSpeakableSchema,
  generateBookingHowToSchema,
  generateEntityDefinitionSchema,
  generateQuotableStats,
  generateDirectAnswerContent,
  generateCitationBlocks,
  generateCompleteAEOSchema
};
