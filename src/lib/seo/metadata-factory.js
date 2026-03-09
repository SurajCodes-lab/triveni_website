/**
 * Metadata Factory - Generate CTR-optimized titles, descriptions, and metadata per page type
 * Ensures consistent SEO patterns across 750+ pages
 *
 * Title patterns use: Price + Trust signal (stars) + Brand
 * Description patterns use: What + Price + Trust signal + CTA
 * OG titles are DIFFERENT from page titles (longer, more emotional for social shares)
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
 * Title: {Origin} to {Destination} Taxi @ ₹{price} — 4.9★ Rated
 */
export function generateRouteMetadata({ origin, destination, price, distance, duration, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Cab @ ₹${price} — 4.9★ Rated`);
  const ogTitle = truncateOGTitle(`Book ${origin} to ${destination} Cab @ ₹${price} — Verified Drivers, AC Vehicles | Triveni Cabs`);
  const description = truncateDescription(
    `${origin} to ${destination} cab & taxi from ₹${price}. ${distance} km, ${duration}. ` +
    `AC sedan/SUV, one way & round trip. 4.9★ rated. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `Book ${origin} to ${destination} cab at just ₹${price}. ${distance} km in ${duration}. ` +
    `AC sedan/SUV, verified drivers, GPS tracking. 4.9★ rated, 10,000+ trips. Call now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/car/car1.webp`,
        width: 1200,
        height: 630,
        alt: `${origin} to ${destination} Taxi Service — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `₹${price}`,
      'service-type': 'Intercity Taxi',
      'service-area': `${origin}, ${destination}`,
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': String(AGGREGATE_RATING.reviewCount)
    }
  };
}

/**
 * Generate tour page metadata
 * Title: {TourName} @ ₹{price} ({duration}) — All Inclusive | Book Today
 */
export function generateTourMetadata({ tourName, city, price, duration, slug, description: tourDesc, image }) {
  const title = truncateTitle(`${tourName} @ ₹${price} (${duration}) — All Inclusive`);
  const ogTitle = truncateOGTitle(`${tourName} @ ₹${price} — ${duration}, All Inclusive with AC Vehicle | Book Today`);
  const description = truncateDescription(
    tourDesc ||
    `${tourName} at ₹${price}. ${duration}, AC vehicle, expert driver. ` +
    `4.9★ rated, 10,000+ happy customers. Call 7668570551 to book now!`
  );
  const ogDescription = truncateDescription(
    `Book ${tourName} at just ₹${price}. ${duration} all-inclusive tour with AC vehicle & expert guide. ` +
    `4.9★ rated. Book now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/sightseeing/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: image || `${BASE_URL}/images/tours/${slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: `${tourName} — ${city} Sightseeing Tour`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Travel',
    other: {
      'price-range': `₹${price}`,
      'duration': duration,
      'tour-type': 'Sightseeing',
      'location': city,
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': String(AGGREGATE_RATING.reviewCount)
    }
  };
}

/**
 * Generate sightseeing city page metadata
 * Title: {City} Tours — {n}+ Packages from ₹{price} | Triveni Cabs
 */
export function generateSightseeingCityMetadata({ city, tourCount, lowestPrice, slug, heroImage }) {
  const title = truncateTitle(`${city} Tours — ${tourCount}+ Packages from ₹${lowestPrice} | Triveni Cabs`);
  const ogTitle = truncateOGTitle(`Explore ${city} — ${tourCount}+ Sightseeing Tours from ₹${lowestPrice} | Expert Guides | Triveni Cabs`);
  const description = truncateDescription(
    `${city} sightseeing: ${tourCount}+ tour packages from ₹${lowestPrice}. ` +
    `Heritage, day trips, AC vehicle. 4.9★ rated, 10,000+ tourists served. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `Discover ${tourCount}+ sightseeing tours in ${city} starting ₹${lowestPrice}. ` +
    `Heritage sites, cultural experiences & guided day trips. Book now!`
  );

  return {
    title,
    description,
    keywords: generateSightseeingCityKeywords(city),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/sightseeing/${slug}`,
      languages: {
        'en-IN': `/sightseeing/${slug}`,
        'hi-IN': `/sightseeing/${slug}`
      }
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/sightseeing/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: heroImage || `${BASE_URL}/images/destinations/${slug}.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Sightseeing Tours — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Travel',
    other: {
      'tour-count': String(tourCount),
      'price-range': `From ₹${lowestPrice}`,
      'location': city,
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': String(AGGREGATE_RATING.reviewCount)
    }
  };
}

/**
 * Generate city hub page metadata
 * Title: {City} Cab Service — Lowest Fare ₹{minPrice}/km | Triveni Cabs
 */
export function generateCityHubMetadata({ city, minPrice = 11, services = [], slug }) {
  const title = truncateTitle(`${city} Taxi Service — Cab from ₹${minPrice}/km | Triveni Cabs`);
  const ogTitle = truncateOGTitle(`${city} Taxi & Cab Service — From ₹${minPrice}/km, AC Vehicles, Verified Drivers | Triveni Cabs`);
  const serviceList = services.length > 0 ? services.slice(0, 3).join(', ') : 'Airport, Local, Outstation';
  const description = truncateDescription(
    `Best taxi service in ${city} from ₹${minPrice}/km. ${serviceList} cab booking. ` +
    `AC sedan/SUV, verified drivers. 4.9★ rated. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `Book ${city} taxi & cab service from just ₹${minPrice}/km. ${serviceList} with AC vehicles & verified drivers. ` +
    `4.9★ rated. Book now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/car/car2.webp`,
        width: 1200,
        height: 630,
        alt: `${city} Cab Service — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `From ₹${minPrice}/km`,
      'service-area': city,
      'available-services': serviceList,
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': String(AGGREGATE_RATING.reviewCount)
    }
  };
}

/**
 * Generate airport service page metadata
 * Title: {City} Airport Taxi @ ₹{price} — Flight Tracking | 24/7
 */
export function generateAirportMetadata({ city, airportName, price, slug }) {
  const title = truncateTitle(`${city} Airport Taxi @ ₹${price} — Flight Tracking | 24/7`);
  const ogTitle = truncateOGTitle(`${city} Airport Taxi @ ₹${price} — Live Flight Tracking, Meet & Greet | Triveni Cabs`);
  const description = truncateDescription(
    `${city} airport taxi from ₹${price}. ${airportName} pickup/drop, flight tracking. ` +
    `No hidden charges. 4.9★ rated, 10,000+ trips. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `Book ${city} airport taxi from just ₹${price}. ${airportName} pickup/drop with live flight tracking. ` +
    `Meet & greet, no hidden charges. Book now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/airport-service/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/airport_section.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Airport Taxi Service — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `₹${price}`,
      'service-type': 'Airport Transfer',
      'airport': airportName,
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': String(AGGREGATE_RATING.reviewCount)
    }
  };
}

/**
 * Generate blog post metadata
 * Title: {Title} — Travel Guide 2026 | Triveni Cabs
 */
export function generateBlogMetadata({ title: blogTitle, excerpt, slug, image, author, publishDate, tags = [] }) {
  const title = truncateTitle(`${blogTitle} — Travel Guide 2026`);
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
  const contextualPart = industry || useCase || 'Cab Service';
  const title = truncateTitle(`${city} Corporate ${contextualPart} — Monthly Plans Available`);
  const description = truncateDescription(
    `${city} corporate transportation from ₹11/km. ${contextualPart} with dedicated fleet. ` +
    `Monthly contracts, GPS tracking, 24/7 support. Call ${COMPANY_INFO.phone.display}!`
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
 * Title: {City} Wedding Car ₹4,999 — BMW, Audi, Mercedes | Book Now
 */
export function generateWeddingMetadata({ city, slug }) {
  const title = truncateTitle(`${city} Wedding Car ₹4,999 — BMW, Audi, Mercedes | Book Now`);
  const ogTitle = truncateOGTitle(`${city} Wedding Car Rental from ₹4,999 — BMW, Audi, Mercedes, Decorated Baraat | Triveni Cabs`);
  const description = truncateDescription(
    `${city} wedding car from ₹4,999. BMW, Audi, Mercedes, baraat tempo. ` +
    `Professional chauffeurs. 4.9★ rated, 500+ weddings. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `Book luxury wedding cars in ${city} from ₹4,999. BMW, Audi, Mercedes & decorated baraat tempo travellers. ` +
    `500+ weddings served. Book now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/wedding/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/wedding_section.jpg`,
        width: 1200,
        height: 630,
        alt: `${city} Wedding Car Rental — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Wedding Services',
    other: {
      'price-range': 'From ₹4,999',
      'service-type': 'Wedding Car Rental',
      'service-area': city,
      'rating': String(AGGREGATE_RATING.ratingValue)
    }
  };
}

/**
 * Generate event transportation page metadata
 */
export function generateEventMetadata({ eventType, city, slug }) {
  const location = city ? `${city}` : 'India';
  const title = truncateTitle(`${eventType} Transportation ${location} — Group Travel Experts`);
  const description = truncateDescription(
    `${eventType} transportation in ${location}. Buses, tempos, luxury cars available. ` +
    `Trusted by 500+ events. Get free quote: ${COMPANY_INFO.phone.display}!`
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
 * Title: {Origin} to {Destination} Tempo Traveller | ₹{price} AC
 */
export function generateTempoMetadata({ origin, destination, price, seats, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Tempo Traveller | ₹${price} AC`);
  const ogTitle = truncateOGTitle(`${origin} to ${destination} Tempo Traveller from ₹${price} — ${seats} Seater AC | Triveni Cabs`);
  const description = truncateDescription(
    `${origin} to ${destination} tempo traveller from ₹${price}. ${seats}-seater AC with pushback seats. ` +
    `4.9★ rated, 2,500+ groups served. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `Book ${origin} to ${destination} tempo traveller at ₹${price}. ${seats}-seater AC, professional drivers, GPS tracking. ` +
    `2,500+ happy groups. Book now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/tempo-traveller/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/tempo_hero_section.jpg`,
        width: 1200,
        height: 630,
        alt: `${origin} to ${destination} Tempo Traveller — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `₹${price}`,
      'service-type': 'Tempo Traveller Rental',
      'service-area': `${origin}, ${destination}`,
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': '2500'
    }
  };
}

/**
 * Generate bus route page metadata
 * Title: {Origin} to {Destination} Bus @ ₹{price} — AC {seats} Seater
 */
export function generateBusMetadata({ origin, destination, price, seats, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Bus — Route, Fare & Hire ₹${price}`);
  const ogTitle = truncateOGTitle(`${origin} to ${destination} Bus Route & Hire from ₹${price} — AC ${seats} Seater | Triveni Cabs`);
  const description = truncateDescription(
    `${origin} to ${destination} bus route, fare & AC bus hire from ₹${price}. ${seats}-seater Volvo. ` +
    `4.9★ rated, 1,000+ groups served. Call 7668570551.`
  );
  const ogDescription = truncateDescription(
    `${origin} to ${destination} bus route info & luxury bus hire from ₹${price}. ${seats}-seater AC Volvo. ` +
    `1,000+ groups trusted us. Book now!`
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
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: `${BASE_URL}/bus-routes/${slug}`,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: `${BASE_URL}/images/bus/hero_section_image.webp`,
        width: 1200,
        height: 630,
        alt: `${origin} to ${destination} Bus Hire — Triveni Cabs`
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle
    },
    robots: getDefaultRobots(),
    category: 'Transportation',
    other: {
      'price-range': `₹${price}`,
      'service-type': 'Bus Hire',
      'service-area': `${origin}, ${destination}`,
      'rating': String(AGGREGATE_RATING.ratingValue)
    }
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
 * Truncate OG title to max 95 characters (social shares can be longer)
 */
function truncateOGTitle(title) {
  if (title.length <= 95) return title;
  return title.substring(0, 92) + '...';
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
    `${origin} to ${destination} cab service`,
    `${origin} ${destination} cab`,
    `cab from ${origin} to ${destination}`,
    `taxi from ${origin} to ${destination}`,
    `${origin} to ${destination} one way cab`,
    `${origin} to ${destination} round trip`,
    `${origin} to ${destination} cab booking`,
    `${origin} to ${destination} taxi fare`,
    `${origin} to ${destination} by car`,
    `${destination} to ${origin} cab`,
    `${origin} to ${destination} tempo traveller`,
    'outstation cab',
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

function generateSightseeingCityKeywords(city) {
  return [
    `${city} sightseeing`,
    `${city} tour packages`,
    `${city} city tour`,
    `${city} tours`,
    `${city} tourist places`,
    `places to visit in ${city}`,
    `things to do in ${city}`,
    `${city} day tour`,
    `${city} guided tours`,
    `${city} heritage tour`,
    `${city} sightseeing by car`,
    `book ${city} tour online`,
    'sightseeing tour India',
    COMPANY_INFO.name
  ].join(', ');
}

function generateCityKeywords(city) {
  return [
    `${city} taxi service`,
    `taxi service in ${city}`,
    `${city} cab service`,
    `cab service in ${city}`,
    `cabs in ${city}`,
    `taxi in ${city}`,
    `${city} taxi`,
    `${city} cab`,
    `${city} cab booking`,
    `taxi ${city}`,
    `cab ${city}`,
    `${city} taxi booking`,
    `${city} local taxi`,
    `${city} outstation taxi`,
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
    `wedding car rental ${city}`,
    `${city} wedding car rental`,
    `${city} wedding car`,
    `${city} bridal car`,
    `doli car booking ${city}`,
    `doli car rental`,
    `wedding car hire ${city}`,
    `decorated wedding car ${city}`,
    `${city} wedding transportation`,
    'wedding car rental',
    'doli car booking',
    'bridal car service',
    'luxury wedding car',
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
    `${origin} to ${destination} tempo traveller price`,
    `${origin} to ${destination} tempo traveller booking`,
    `tempo traveller hire ${origin}`,
    `${origin} tempo traveller booking`,
    'tempo traveller rental',
    'tempo traveller on rent',
    '12 seater tempo traveller',
    '17 seater tempo traveller',
    '20 seater tempo traveller',
    COMPANY_INFO.name
  ].join(', ');
}

function generateBusKeywords(origin, destination, seats) {
  return [
    `${origin} to ${destination} bus`,
    `${origin} to ${destination} bus route`,
    `${origin} to ${destination} bus fare`,
    `${origin} to ${destination} bus hire`,
    `${origin} to ${destination} bus booking`,
    `bus from ${origin} to ${destination}`,
    `${seats} seater bus ${origin}`,
    `${origin} to ${destination} volvo bus`,
    `${origin} to ${destination} AC bus`,
    'bus rental',
    'luxury bus hire',
    'group bus booking',
    COMPANY_INFO.name
  ].join(', ');
}

export default {
  generateRouteMetadata,
  generateTourMetadata,
  generateSightseeingCityMetadata,
  generateCityHubMetadata,
  generateAirportMetadata,
  generateBlogMetadata,
  generateCorporateMetadata,
  generateWeddingMetadata,
  generateEventMetadata,
  generateTempoMetadata,
  generateBusMetadata
};
