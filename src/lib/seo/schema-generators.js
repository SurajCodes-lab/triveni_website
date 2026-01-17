/**
 * Schema Generators - Generate complete schema.org markup per page type
 * Supports TouristTrip, TaxiService, BreadcrumbList, FAQPage, and more
 */

import {
  COMPANY_INFO,
  BASE_URL,
  SITE_CONFIG,
  AGGREGATE_RATING,
  PRICING,
  VEHICLE_TYPES
} from './constants';

/**
 * Generate Organization schema (base schema for all pages)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}${SITE_CONFIG.logoUrl}`,
      width: 200,
      height: 60
    },
    description: COMPANY_INFO.description,
    foundingDate: COMPANY_INFO.foundingDate,
    founder: {
      '@type': 'Person',
      name: COMPANY_INFO.founder
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.addressCountry
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone.primary,
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN'
      },
      {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone.primary,
        contactType: 'reservations',
        availableLanguage: ['English', 'Hindi'],
        areaServed: 'IN'
      }
    ],
    sameAs: Object.values(COMPANY_INFO.social),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: AGGREGATE_RATING.bestRating,
      worstRating: AGGREGATE_RATING.worstRating
    }
  };
}

/**
 * Generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(options = {}) {
  const { city, specificServices = [] } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: COMPANY_INFO.name,
    description: COMPANY_INFO.description,
    url: BASE_URL,
    telephone: COMPANY_INFO.phone.primary,
    email: COMPANY_INFO.email.primary,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: city || COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: COMPANY_INFO.address.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: COMPANY_INFO.geo.latitude,
      longitude: COMPANY_INFO.geo.longitude
    },
    image: `${BASE_URL}${SITE_CONFIG.logoUrl}`,
    priceRange: '₹₹',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: AGGREGATE_RATING.bestRating,
      worstRating: AGGREGATE_RATING.worstRating
    },
    hasOfferCatalog: specificServices.length > 0 ? {
      '@type': 'OfferCatalog',
      name: 'Transportation Services',
      itemListElement: specificServices.map((service, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          description: service.description
        }
      }))
    } : undefined
  };
}

/**
 * Generate TouristTrip schema for tour pages
 */
export function generateTourSchema(tour) {
  const {
    name,
    slug,
    city,
    description,
    duration,
    price,
    image,
    highlights = [],
    itinerary = [],
    inclusions = [],
    reviews = []
  } = tour;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${BASE_URL}/sightseeing/${slug}/#touristtrip`,
    name: name,
    description: description,
    url: `${BASE_URL}/sightseeing/${slug}`,
    image: image,
    touristType: 'Leisure Traveler',
    provider: {
      '@type': 'TravelAgency',
      name: COMPANY_INFO.name,
      url: BASE_URL,
      telephone: COMPANY_INFO.phone.primary
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: itinerary.length,
      itemListElement: itinerary.map((stop, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristAttraction',
          name: stop.name || stop,
          description: stop.description || ''
        }
      }))
    },
    offers: {
      '@type': 'Offer',
      '@id': `${BASE_URL}/sightseeing/${slug}/#offer`,
      url: `${BASE_URL}/sightseeing/${slug}`,
      price: price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      seller: {
        '@type': 'TravelAgency',
        name: COMPANY_INFO.name
      }
    },
    aggregateRating: reviews.length > 0 ? {
      '@type': 'AggregateRating',
      ratingValue: calculateAverageRating(reviews),
      reviewCount: reviews.length,
      bestRating: 5,
      worstRating: 1
    } : {
      '@type': 'AggregateRating',
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: AGGREGATE_RATING.bestRating,
      worstRating: AGGREGATE_RATING.worstRating
    }
  };

  // Add duration if available
  if (duration) {
    schema.duration = duration;
  }

  return schema;
}

/**
 * Generate TouristDestination schema for city pages
 */
export function generateCitySchema(city, tours = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    '@id': `${BASE_URL}/${city.slug}/#touristdestination`,
    name: city.name,
    description: city.description || `Explore ${city.name} with Triveni Cabs. Book sightseeing tours, airport transfers, and local taxi services.`,
    url: `${BASE_URL}/${city.slug}`,
    image: city.image,
    geo: city.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng
    } : undefined,
    containsPlace: tours.slice(0, 10).map(tour => ({
      '@type': 'TouristAttraction',
      name: tour.name,
      url: `${BASE_URL}/sightseeing/${tour.slug}`
    })),
    touristType: ['Leisure Traveler', 'Family', 'Business Traveler'],
    includesAttraction: tours.slice(0, 5).map(tour => ({
      '@type': 'TouristAttraction',
      name: tour.name,
      description: tour.shortDescription || tour.description?.substring(0, 100)
    }))
  };
}

/**
 * Generate TaxiService schema for route pages
 */
export function generateRouteSchema(origin, destination, data = {}) {
  const {
    distance,
    duration,
    price,
    slug,
    vehicles = VEHICLE_TYPES
  } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': `${BASE_URL}/${slug}/#taxiservice`,
    name: `${origin} to ${destination} Taxi Service`,
    description: `Book reliable taxi from ${origin} to ${destination}. Distance: ${distance}km, Duration: ${duration}. AC sedans, SUVs, and tempo travellers available 24/7.`,
    url: `${BASE_URL}/${slug}`,
    provider: {
      '@type': 'TravelAgency',
      name: COMPANY_INFO.name,
      url: BASE_URL,
      telephone: COMPANY_INFO.phone.primary,
      address: {
        '@type': 'PostalAddress',
        addressLocality: origin,
        addressCountry: 'IN'
      }
    },
    areaServed: [
      {
        '@type': 'City',
        name: origin
      },
      {
        '@type': 'City',
        name: destination
      }
    ],
    serviceType: 'Intercity Taxi Service',
    offers: vehicles.map(vehicle => ({
      '@type': 'Offer',
      name: `${vehicle.type} (${vehicle.seats} seater)`,
      description: `${origin} to ${destination} by ${vehicle.type}. ${vehicle.examples}`,
      price: vehicle.type === 'Sedan' ? price : Math.round(price * 1.3),
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      itemOffered: {
        '@type': 'Product',
        name: `${vehicle.type} Taxi`,
        description: `${vehicle.seats} seater ${vehicle.type}`
      }
    })),
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/${slug}`,
        actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform']
      },
      result: {
        '@type': 'Reservation',
        name: `${origin} to ${destination} Taxi Booking`
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: AGGREGATE_RATING.bestRating,
      worstRating: AGGREGATE_RATING.worstRating
    }
  };
}

/**
 * Generate TravelAction schema (supplement for route pages)
 */
export function generateTravelActionSchema(origin, destination, data = {}) {
  const { distance, duration, slug } = data;

  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAction',
    agent: {
      '@type': 'TravelAgency',
      name: COMPANY_INFO.name
    },
    fromLocation: {
      '@type': 'Place',
      name: origin,
      address: {
        '@type': 'PostalAddress',
        addressLocality: origin,
        addressCountry: 'IN'
      }
    },
    toLocation: {
      '@type': 'Place',
      name: destination,
      address: {
        '@type': 'PostalAddress',
        addressLocality: destination,
        addressCountry: 'IN'
      }
    },
    distance: distance ? {
      '@type': 'Distance',
      value: distance,
      unitCode: 'KMT'
    } : undefined,
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/${slug}`
    }
  };
}

/**
 * Generate Service schema for service pages (airport, corporate, wedding, event)
 */
export function generateServiceSchema(service) {
  const {
    name,
    slug,
    description,
    serviceType,
    price,
    priceUnit = 'per trip',
    areaServed,
    image
  } = service;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/${slug}/#service`,
    name: name,
    description: description,
    url: `${BASE_URL}/${slug}`,
    image: image,
    serviceType: serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      url: BASE_URL,
      telephone: COMPANY_INFO.phone.primary
    },
    areaServed: typeof areaServed === 'string' ? {
      '@type': 'City',
      name: areaServed
    } : areaServed,
    offers: price ? {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: price,
        priceCurrency: 'INR',
        unitText: priceUnit
      },
      availability: 'https://schema.org/InStock'
    } : undefined,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: AGGREGATE_RATING.bestRating,
      worstRating: AGGREGATE_RATING.worstRating
    }
  };
}

/**
 * Generate BreadcrumbList schema
 * @param {Array} items - Array of { name, url } objects
 */
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`
    }))
  };
}

/**
 * Generate FAQPage schema
 * @param {Array} faqs - Array of { question, answer } objects
 */
export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

/**
 * Generate Article/BlogPosting schema
 */
export function generateArticleSchema(article) {
  const {
    title,
    slug,
    excerpt,
    content,
    author,
    publishDate,
    modifiedDate,
    image,
    tags = []
  } = article;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/blog/${slug}/#article`,
    headline: title,
    description: excerpt,
    image: image,
    author: {
      '@type': 'Person',
      name: author || COMPANY_INFO.name
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${SITE_CONFIG.logoUrl}`
      }
    },
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`
    },
    keywords: tags.join(', '),
    articleSection: 'Travel',
    wordCount: content ? content.split(/\s+/).length : undefined
  };
}

/**
 * Generate ItemList schema for list pages
 */
export function generateItemListSchema(items, listType = 'ItemList') {
  return {
    '@context': 'https://schema.org',
    '@type': listType,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': item.type || 'Thing',
        name: item.name,
        url: item.url?.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
        image: item.image,
        description: item.description
      }
    }))
  };
}

/**
 * Generate WebPage schema
 */
export function generateWebPageSchema(page) {
  const { name, slug, description, type = 'WebPage' } = page;

  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${BASE_URL}/${slug}/#webpage`,
    name: name,
    description: description,
    url: `${BASE_URL}/${slug}`,
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      name: SITE_CONFIG.siteName,
      url: BASE_URL
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`
    }
  };
}

/**
 * Generate Product schema with Offer (for specific vehicle bookings)
 */
export function generateProductSchema(product) {
  const { name, description, price, image, slug, category } = product;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: image,
    category: category,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name
    },
    offers: {
      '@type': 'Offer',
      url: `${BASE_URL}/${slug}`,
      price: price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: AGGREGATE_RATING.ratingValue,
      reviewCount: AGGREGATE_RATING.reviewCount,
      bestRating: AGGREGATE_RATING.bestRating,
      worstRating: AGGREGATE_RATING.worstRating
    }
  };
}

/**
 * Generate Event schema for wedding/event pages
 */
export function generateEventSchema(event) {
  const { name, description, location, startDate, endDate, image, url } = event;

  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: name,
    description: description,
    image: image,
    url: url,
    location: {
      '@type': 'Place',
      name: location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: location,
        addressCountry: 'IN'
      }
    },
    organizer: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: BASE_URL
    },
    offers: {
      '@type': 'Offer',
      url: url,
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString()
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode'
  };
}

/**
 * Generate HowTo schema for booking process
 */
export function generateHowToSchema(steps, title = 'How to Book a Cab') {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description: `Step by step guide to book a cab with ${COMPANY_INFO.name}`,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url
    })),
    totalTime: 'PT5M',
    tool: {
      '@type': 'HowToTool',
      name: 'Phone or Website'
    }
  };
}

/**
 * Combine multiple schemas into a single JSON-LD script
 */
export function combineSchemas(...schemas) {
  const validSchemas = schemas.filter(s => s !== null && s !== undefined);
  if (validSchemas.length === 0) return null;
  if (validSchemas.length === 1) return validSchemas[0];

  return {
    '@context': 'https://schema.org',
    '@graph': validSchemas.map(schema => {
      // Remove @context from individual schemas when combining
      const { '@context': _, ...rest } = schema;
      return rest;
    })
  };
}

/**
 * Generate complete schema for a tour page
 */
export function generateCompleteTourPageSchema(tour, breadcrumbItems, faqs) {
  return combineSchemas(
    generateTourSchema(tour),
    generateBreadcrumbSchema(breadcrumbItems),
    generateFAQSchema(faqs),
    generateOrganizationSchema()
  );
}

/**
 * Generate complete schema for a route page
 */
export function generateCompleteRoutePageSchema(origin, destination, data, breadcrumbItems, faqs) {
  return combineSchemas(
    generateRouteSchema(origin, destination, data),
    generateTravelActionSchema(origin, destination, data),
    generateBreadcrumbSchema(breadcrumbItems),
    generateFAQSchema(faqs),
    generateLocalBusinessSchema({ city: origin })
  );
}

/**
 * Generate complete schema for a city page
 */
export function generateCompleteCityPageSchema(city, tours, breadcrumbItems, faqs) {
  return combineSchemas(
    generateCitySchema(city, tours),
    generateItemListSchema(tours.map(t => ({
      type: 'TouristTrip',
      name: t.name,
      url: `/sightseeing/${t.slug}`,
      image: t.image,
      description: t.shortDescription
    }))),
    generateBreadcrumbSchema(breadcrumbItems),
    generateFAQSchema(faqs),
    generateLocalBusinessSchema({ city: city.name })
  );
}

// Helper function to calculate average rating
function calculateAverageRating(reviews) {
  if (!reviews || reviews.length === 0) return AGGREGATE_RATING.ratingValue;
  const sum = reviews.reduce((acc, r) => acc + (r.rating || r.stars || 5), 0);
  return (sum / reviews.length).toFixed(1);
}

export default {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateTourSchema,
  generateCitySchema,
  generateRouteSchema,
  generateTravelActionSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateArticleSchema,
  generateItemListSchema,
  generateWebPageSchema,
  generateProductSchema,
  generateEventSchema,
  generateHowToSchema,
  combineSchemas,
  generateCompleteTourPageSchema,
  generateCompleteRoutePageSchema,
  generateCompleteCityPageSchema
};
