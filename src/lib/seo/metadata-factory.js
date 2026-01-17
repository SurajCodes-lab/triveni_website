/**
 * Metadata Factory - Generate optimized titles, descriptions, and metadata per page type
 * Ensures consistent SEO patterns across 750+ pages
 */

import {
  COMPANY_INFO,
  BASE_URL,
  SITE_CONFIG,
  PAGE_TYPES,
  AGGREGATE_RATING,
  SERVICE_AREAS
} from './constants';

/**
 * Generate route page metadata (A to B taxi)
 * Title: {Origin} to {Destination} Cab ₹{Price} | 24/7 Taxi
 */
export function generateRouteMetadata({ origin, destination, price, distance, duration, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Cab ₹${price} | 24/7 Taxi`);
  const description = truncateDescription(
    `Book ${origin} to ${destination} cab at ₹${price}. ${distance}km, ${duration}. ` +
    `AC sedans, SUVs available 24/7. Safe, reliable taxi service. ` +
    `Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateRouteKeywords(origin, destination),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
      languages: {
        'en-IN': `/${slug}`,
        'hi-IN': `/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/routes/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${origin} to ${destination} Taxi Service`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `₹${price}`,
      'service-type': 'Intercity Taxi',
      'service-area': `${origin}, ${destination}`
    }
  };
}

/**
 * Generate tour page metadata
 * Title: {TourName} | ₹{Price} | {Duration} | Book Now
 */
export function generateTourMetadata({ tourName, city, price, duration, slug, description: tourDesc, image }) {
  const title = truncateTitle(`${tourName} | ₹${price} | ${duration} | Book Now`);
  const description = truncateDescription(
    tourDesc ||
    `Book ${tourName} in ${city} at ₹${price}. ${duration} guided tour with AC vehicle. ` +
    `Explore top attractions with experienced drivers. Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateTourKeywords(tourName, city),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/sightseeing/${slug}`,
      languages: {
        'en-IN': `/sightseeing/${slug}`,
        'hi-IN': `/sightseeing/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/sightseeing/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: image || `${BASE_URL}/images/tours/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${tourName} - ${city}`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Travel',
    other: {
      'price-range': `₹${price}`,
      'duration': duration,
      'tour-type': 'Sightseeing',
      'location': city
    }
  };
}

/**
 * Generate city hub page metadata
 * Title: {City} Taxi Service | From ₹11/km | Triveni Cabs
 */
export function generateCityHubMetadata({ city, minPrice = 11, services = [], slug }) {
  const title = truncateTitle(`${city} Taxi Service | From ₹${minPrice}/km | Triveni Cabs`);
  const serviceList = services.length > 0 ? services.slice(0, 3).join(', ') : 'Airport Transfer, Sightseeing, Outstation';
  const description = truncateDescription(
    `Best taxi service in ${city} from ₹${minPrice}/km. ${serviceList} & more. ` +
    `24/7 availability, experienced drivers. Book now! Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateCityKeywords(city),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${slug}`,
      languages: {
        'en-IN': `/${slug}`,
        'hi-IN': `/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/cities/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Taxi Service`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `From ₹${minPrice}/km`,
      'service-area': city,
      'available-services': serviceList
    }
  };
}

/**
 * Generate airport service page metadata
 * Title: {City} Airport Taxi | ₹{Price} | Flight Tracking
 */
export function generateAirportMetadata({ city, airportName, price, slug }) {
  const title = truncateTitle(`${city} Airport Taxi | ₹${price} | Flight Tracking`);
  const description = truncateDescription(
    `${city} airport taxi from ₹${price}. ${airportName} pickup/drop with flight tracking. ` +
    `24/7 service, meet & greet. Pre-book now! Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateAirportKeywords(city, airportName),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/airport-service/${slug}`,
      languages: {
        'en-IN': `/airport-service/${slug}`,
        'hi-IN': `/airport-service/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/airport-service/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/airport/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Airport Taxi Service`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `₹${price}`,
      'service-type': 'Airport Transfer',
      'airport': airportName
    }
  };
}

/**
 * Generate blog post metadata
 * Title: {Title} | Travel Guide | Triveni Cabs
 */
export function generateBlogMetadata({ title: blogTitle, excerpt, slug, image, author, publishDate, tags = [] }) {
  const title = truncateTitle(`${blogTitle} | Travel Guide | Triveni Cabs`);
  const description = truncateDescription(excerpt);

  return {
    title,
    description,
    keywords: tags.join(', '),
    authors: [{ name: author || COMPANY_INFO.name }],
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
      languages: {
        'en-IN': `/blog/${slug}`,
        'hi-IN': `/blog/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'article',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/blog/${slug}`,
      siteName: SITE_CONFIG.siteName,
      publishedTime: publishDate,
      authors: [author || COMPANY_INFO.name],
      images: [{
        url: image || SITE_CONFIG.defaultImage,
        width: 1200,
        height: 630,
        alt: blogTitle
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Travel'
  };
}

/**
 * Generate corporate service page metadata
 */
export function generateCorporateMetadata({ city, industry, useCase, slug }) {
  const contextualPart = industry || useCase || 'Transportation Service';
  const title = truncateTitle(`${city} Corporate ${contextualPart} | Triveni Cabs`);
  const description = truncateDescription(
    `Professional corporate transportation in ${city}. ${contextualPart} with dedicated fleet. ` +
    `Monthly contracts, employee shuttle, executive cabs. Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateCorporateKeywords(city, industry, useCase),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/corporate-transportation-service/${slug}`,
      languages: {
        'en-IN': `/corporate-transportation-service/${slug}`,
        'hi-IN': `/corporate-transportation-service/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/corporate-transportation-service/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/corporate/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Corporate Transportation`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Business Services'
  };
}

/**
 * Generate wedding service page metadata
 */
export function generateWeddingMetadata({ city, slug }) {
  const title = truncateTitle(`${city} Wedding Car Rental | Bridal Car | Triveni Cabs`);
  const description = truncateDescription(
    `Luxury wedding car rental in ${city}. Decorated bridal cars, vintage vehicles, ` +
    `guest transportation. Premium fleet for your special day. Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateWeddingKeywords(city),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/wedding/${slug}`,
      languages: {
        'en-IN': `/wedding/${slug}`,
        'hi-IN': `/wedding/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/wedding/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/wedding/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Wedding Car Rental`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Wedding Services'
  };
}

/**
 * Generate event transportation page metadata
 */
export function generateEventMetadata({ eventType, city, slug }) {
  const title = truncateTitle(`${eventType} Transportation ${city ? `in ${city}` : ''} | Triveni Cabs`);
  const description = truncateDescription(
    `Professional ${eventType.toLowerCase()} transportation ${city ? `in ${city}` : 'across India'}. ` +
    `Group travel, VIP shuttles, event logistics. All vehicle types available. ` +
    `Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateEventKeywords(eventType, city),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/event-transportation-service/${slug}`,
      languages: {
        'en-IN': `/event-transportation-service/${slug}`,
        'hi-IN': `/event-transportation-service/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/event-transportation-service/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/events/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${eventType} Transportation`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Event Services'
  };
}

/**
 * Generate tempo traveller route page metadata
 */
export function generateTempoMetadata({ origin, destination, price, seats, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Tempo Traveller | ${seats} Seater | ₹${price}`);
  const description = truncateDescription(
    `Book ${seats}-seater tempo traveller from ${origin} to ${destination} at ₹${price}. ` +
    `AC, comfortable, experienced drivers. Group travel made easy. ` +
    `Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateTempoKeywords(origin, destination, seats),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/tempo-traveller/${slug}`,
      languages: {
        'en-IN': `/tempo-traveller/${slug}`,
        'hi-IN': `/tempo-traveller/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/tempo-traveller/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/tempo/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${origin} to ${destination} Tempo Traveller`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation'
  };
}

/**
 * Generate bus route page metadata
 */
export function generateBusMetadata({ origin, destination, price, seats, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Bus Hire | ${seats} Seater | ₹${price}`);
  const description = truncateDescription(
    `Hire ${seats}-seater bus from ${origin} to ${destination} at ₹${price}. ` +
    `AC, luxury coaches for groups. Corporate tours, pilgrimages, events. ` +
    `Call ${COMPANY_INFO.phone.display}.`
  );

  return {
    title,
    description,
    keywords: generateBusKeywords(origin, destination, seats),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/bus-routes/${slug}`,
      languages: {
        'en-IN': `/bus-routes/${slug}`,
        'hi-IN': `/bus-routes/${slug}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/bus-routes/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/bus/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${origin} to ${destination} Bus Hire`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation'
  };
}

// ============= Helper Functions =============

/**
 * Truncate title to max 60 characters
 */
function truncateTitle(title) {
  if (title.length <= 60) return title;
  return title.substring(0, 57) + '...';
}

/**
 * Truncate description to max 155 characters
 */
function truncateDescription(desc) {
  if (desc.length <= 155) return desc;
  return desc.substring(0, 152) + '...';
}

/**
 * Get default robots configuration
 */
function getDefaultRobots() {
  return {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  };
}

// ============= Keyword Generators =============

function generateRouteKeywords(origin, destination) {
  return [
    `${origin} to ${destination} cab`,
    `${origin} to ${destination} taxi`,
    `${origin} ${destination} cab fare`,
    `${origin} to ${destination} taxi fare`,
    `cab from ${origin} to ${destination}`,
    `taxi from ${origin} to ${destination}`,
    `${origin} ${destination} distance`,
    `${origin} to ${destination} by car`,
    `${origin} to ${destination} cab booking`,
    `one way taxi ${origin} to ${destination}`,
    `round trip ${origin} to ${destination}`,
    'outstation cab',
    'intercity taxi',
    'car rental',
    COMPANY_INFO.name
  ].join(', ');
}

function generateTourKeywords(tourName, city) {
  return [
    tourName,
    `${city} sightseeing`,
    `${city} tour`,
    `${city} tourist places`,
    `${city} day tour`,
    `${city} local sightseeing`,
    `places to visit in ${city}`,
    `${city} tour package`,
    `${city} sightseeing by car`,
    `${city} one day tour`,
    `${city} taxi for sightseeing`,
    'sightseeing tour',
    'guided tour',
    COMPANY_INFO.name
  ].join(', ');
}

function generateCityKeywords(city) {
  return [
    `${city} taxi`,
    `${city} cab`,
    `${city} taxi service`,
    `${city} cab booking`,
    `taxi in ${city}`,
    `cab service in ${city}`,
    `${city} car rental`,
    `${city} taxi rates`,
    `${city} cab fare`,
    `${city} online cab booking`,
    `${city} airport taxi`,
    `${city} outstation taxi`,
    `${city} local taxi`,
    COMPANY_INFO.name
  ].join(', ');
}

function generateAirportKeywords(city, airportName) {
  return [
    `${city} airport taxi`,
    `${airportName} taxi`,
    `${city} airport cab`,
    `${airportName} cab`,
    `${city} airport transfer`,
    `${city} airport pickup`,
    `${city} airport drop`,
    `taxi from ${airportName}`,
    `cab to ${airportName}`,
    `${city} airport taxi fare`,
    'airport transfer',
    'airport pickup service',
    'flight tracking taxi',
    COMPANY_INFO.name
  ].join(', ');
}

function generateCorporateKeywords(city, industry, useCase) {
  const base = [
    `${city} corporate taxi`,
    `${city} corporate cab`,
    `${city} employee transportation`,
    `${city} corporate car rental`,
    `${city} office cab service`,
    'corporate transportation',
    'employee shuttle',
    'office transport',
    'business travel',
    'company cab service',
    COMPANY_INFO.name
  ];

  if (industry) {
    base.push(`${industry} transportation`, `${industry} employee shuttle`);
  }
  if (useCase) {
    base.push(useCase, `${useCase} transportation`);
  }

  return base.join(', ');
}

function generateWeddingKeywords(city) {
  return [
    `${city} wedding car`,
    `${city} wedding car rental`,
    `${city} bridal car`,
    `${city} wedding transportation`,
    `wedding car hire ${city}`,
    `decorated wedding car ${city}`,
    `vintage wedding car ${city}`,
    'wedding car rental',
    'bridal car service',
    'wedding guest transportation',
    'luxury wedding car',
    'marriage car',
    'shaadi car',
    COMPANY_INFO.name
  ].join(', ');
}

function generateEventKeywords(eventType, city) {
  const base = [
    `${eventType} transportation`,
    `${eventType} travel`,
    'event transportation',
    'group transportation',
    'conference transportation',
    'event shuttle',
    'VIP transport',
    'group travel service',
    COMPANY_INFO.name
  ];

  if (city) {
    base.unshift(
      `${eventType} transportation ${city}`,
      `${city} event transport`,
      `${city} group travel`
    );
  }

  return base.join(', ');
}

function generateTempoKeywords(origin, destination, seats) {
  return [
    `${origin} to ${destination} tempo traveller`,
    `tempo traveller ${origin} to ${destination}`,
    `${seats} seater tempo ${origin} to ${destination}`,
    `tempo traveller hire ${origin}`,
    `${origin} tempo traveller booking`,
    'tempo traveller rental',
    'tempo traveller on rent',
    '12 seater tempo traveller',
    '17 seater tempo traveller',
    'group travel',
    'family trip vehicle',
    COMPANY_INFO.name
  ].join(', ');
}

function generateBusKeywords(origin, destination, seats) {
  return [
    `${origin} to ${destination} bus hire`,
    `bus rental ${origin} to ${destination}`,
    `${seats} seater bus ${origin}`,
    `bus hire ${origin}`,
    `${origin} bus booking`,
    'bus rental',
    'bus on rent',
    'luxury bus hire',
    'AC bus rental',
    'volvo bus hire',
    'coach hire',
    'group bus booking',
    COMPANY_INFO.name
  ].join(', ');
}

export default {
  generateRouteMetadata,
  generateTourMetadata,
  generateCityHubMetadata,
  generateAirportMetadata,
  generateBlogMetadata,
  generateCorporateMetadata,
  generateWeddingMetadata,
  generateEventMetadata,
  generateTempoMetadata,
  generateBusMetadata
};
