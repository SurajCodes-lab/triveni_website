/**
 * Metadata Factory - Generate CTR-optimized titles, descriptions, and metadata per page type
 * Ensures consistent SEO patterns across 1,900+ pages
 *
 * CTR Title Formula: [Keyword] [Price] — [Benefit] [Trust Signal] | [CTA]
 * Description Formula: [What you get] + [Price] + [Why trust us] + [Action trigger]
 * OG titles are DIFFERENT from page titles (longer, more emotional for social shares)
 *
 * Power words for CTR:
 * - Urgency: 24/7, Instant, Same Day, Book Now, Today
 * - Trust: Verified Drivers, AC Guaranteed, 4.9★, 10,000+ Trips
 * - Value: Lowest Fare, Starting ₹, All Inclusive, No Hidden Cost
 * - Specificity: AC Sedan, Innova, SUV, Airport Pickup, Door-to-Door
 */

import {
  COMPANY_INFO,
  BASE_URL,
  SITE_CONFIG,
  PAGE_TYPES,
  AGGREGATE_RATING,
  SERVICE_AREAS,
  CITY_GEO_COORDS
} from './constants';
import { tightenTitle, finalizeTitle } from './serp-ctr';

/**
 * Generate local-SEO geo meta tags (geo.region, geo.placename, geo.position,
 * ICBM) for a given city. Resolves coordinates + ISO 3166-2 region from the
 * shared CITY_GEO_COORDS map.
 *
 * - When the city is in the map: emits all four tags (accurate lat/lng + region).
 * - When the city is NOT in the map: emits only geo.placename (the city name) —
 *   never falls back to HQ coordinates for a different city (wrong location
 *   signal is worse than a partial one).
 *
 * Returns a flat { key: value } object meant to be spread into a metadata
 * export's `other` field.
 */
export function generateGeoMeta(city) {
  if (!city) return {};
  const coords = CITY_GEO_COORDS[city];
  const meta = { 'geo.placename': city };
  if (coords) {
    meta['geo.position'] = `${coords.lat};${coords.lng}`;
    meta['ICBM'] = `${coords.lat}, ${coords.lng}`;
    if (coords.region) meta['geo.region'] = coords.region;
  }
  return meta;
}

/**
 * Generate route page metadata (A to B taxi)
 * CTR Formula: [Keyword] [Price] — [Benefit] [Trust] | [CTA]
 */
export function generateRouteMetadata({ origin, destination, price, distance, duration, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Cab ₹${price} — AC, 24/7 4.9★ | Book Now`);
  const ogTitle = truncateOGTitle(`Book ${origin} to ${destination} Cab ₹${price} — AC Sedan, Verified Drivers, 24/7 Pickup | Triveni Cabs`);
  const description = truncateDescription(
    `AC sedan ${origin} to ${destination} ₹${price}. ${distance}, ${duration}. ` +
    `Verified driver, no hidden charges. 4.9★ by 10K+ travellers. Book in 2 min.`
  );
  const ogDescription = truncateDescription(
    `Book ${origin} to ${destination} cab at just ₹${price}. ${distance} in ${duration}. ` +
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
        url: `${BASE_URL}/images/car/swift_dzire.jpg`,
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
 * CTR Formula: [Tour] [Price] — [Benefit] [Trust] | [CTA]
 */
export function generateTourMetadata({ tourName, city, price, duration, slug, description: tourDesc, image, highlights = [], inclusions = [] }) {
  // Build keyword-rich title with specific attractions
  const topHighlights = highlights.slice(0, 2).map(h => typeof h === 'string' ? h : h.name || h.title || '').filter(Boolean).join(', ');
  const titleWithAttractions = topHighlights
    ? truncateTitle(`${tourName} ₹${price} — ${topHighlights} | Book`)
    : truncateTitle(`${tourName} ₹${price} — ${duration} Tour 4.9★ | Book`);
  const title = titleWithAttractions;
  const ogTitle = truncateOGTitle(`${tourName} ₹${price} — ${duration}, All Inclusive AC Vehicle & Expert Guide | Book Today`);

  // Build description with specific attractions instead of generic text
  const highlightText = highlights.slice(0, 4).map(h => typeof h === 'string' ? h : h.name || h.title || '').filter(Boolean).join(', ');
  const description = truncateDescription(
    tourDesc ||
    (highlightText
      ? `${tourName} ₹${price}: ${highlightText}. ${duration}, AC car, expert guide. 4.9★ rated. Book in 2 min.`
      : `${tourName} at ₹${price}. ${duration}, AC vehicle, expert driver. 4.9★ by 10K+ travellers. No hidden cost. Book in 2 min.`)
  );
  const ogDescription = truncateDescription(
    highlightText
      ? `Book ${tourName} ₹${price}: ${highlightText}. ${duration} all-inclusive tour. 4.9★ rated. Book now!`
      : `Book ${tourName} at just ₹${price}. ${duration} all-inclusive tour with AC vehicle & expert guide. 4.9★ rated. Book now!`
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
 * CTR Formula: [City Tours] [Price] — [Count] [Trust] | [CTA]
 */
export function generateSightseeingCityMetadata({ city, tourCount, lowestPrice, slug, heroImage }) {
  const title = truncateTitle(`${city} Tours from ₹${lowestPrice} — ${tourCount}+ Packages 4.9★ | Book`);
  const ogTitle = truncateOGTitle(`Explore ${city} — ${tourCount}+ Sightseeing Tours from ₹${lowestPrice} | Expert Guides | Triveni Cabs`);
  const description = truncateDescription(
    `${city} sightseeing: ${tourCount}+ packages from ₹${lowestPrice}. AC vehicle, expert guide. ` +
    `4.9★ by 10K+ tourists. No hidden cost. Book in 2 min.`
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
 * CTR Formula: [City Cab] [Price] — [Benefit] [Trust] | [CTA]
 */
export function generateCityHubMetadata({ city, minPrice = 11, services = [], slug }) {
  const title = truncateTitle(`${city} Cab ₹${minPrice}/km — AC, Verified Drivers 4.9★ | Book Now`);
  const ogTitle = truncateOGTitle(`${city} Taxi & Cab Service — From ₹${minPrice}/km, AC Vehicles, Verified Drivers | Triveni Cabs`);
  const serviceList = services.length > 0 ? services.slice(0, 3).join(', ') : 'Airport, Local, Outstation';
  const description = truncateDescription(
    `${city} cab from ₹${minPrice}/km. ${serviceList}. AC sedan/SUV, verified drivers. ` +
    `4.9★ by 10K+ travellers. No hidden charges. Book in 2 min.`
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
        url: `${BASE_URL}/images/car/innova_crysta.jpg`,
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
      ...generateGeoMeta(city),
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
 * CTR Formula: [Airport Cab] [Price] — [Benefit] [Trust] | [CTA]
 */
export function generateAirportMetadata({ city, airportName, price, slug }) {
  const title = truncateTitle(`${city} Airport Cab ₹${price} — 24/7 Pickup 4.9★ | Book Now`);
  const ogTitle = truncateOGTitle(`${city} Airport Cab ₹${price} — Meet at Terminal Exit, AC Vehicle, No Hidden Charges | Triveni Cabs`);
  const description = truncateDescription(
    `${city} airport cab ₹${price}. ${airportName} terminal pickup, AC sedan/SUV. ` +
    `No surge, fixed fare. 4.9★ by 10K+ travellers. Book in 2 min.`
  );
  const ogDescription = truncateDescription(
    `Book ${city} airport cab from ₹${price}. ${airportName} terminal pickup, meet at exit gate. ` +
    `AC vehicles, fixed fares, 24/7. Book now!`
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
      ...generateGeoMeta(city),
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
 * CTR Formula: [Corporate Cab] [Price] — [Benefit] [Trust] | [CTA]
 */
export function generateCorporateMetadata({ city, industry, useCase, slug }) {
  const contextualPart = industry || useCase || 'Cab';
  const title = truncateTitle(`${city} Corporate ${contextualPart} ₹11/km — 4.9★ | Get Quote`);
  const description = truncateDescription(
    `${city} corporate cab ₹11/km. Dedicated fleet, GPS, 24/7 support. ` +
    `500+ companies trust us. 4.9★ rated. Get free quote now.`
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
    category: 'Business Services',
    other: {
      ...generateGeoMeta(city),
      'price-range': 'From ₹11/km',
      'service-type': 'Corporate Transportation',
      'service-area': city,
      'rating': String(AGGREGATE_RATING.ratingValue)
    }
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
        url: `${BASE_URL}/images/wedding/luxury_car.jpg`,
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
      ...generateGeoMeta(city),
      'price-range': 'From ₹4,999',
      'service-type': 'Wedding Car Rental',
      'service-area': city,
      'rating': String(AGGREGATE_RATING.ratingValue)
    }
  };
}

/**
 * Generate event transportation page metadata
 * CTR Formula: [Event Transport] [Location] — [Trust] | [CTA]
 */
export function generateEventMetadata({ eventType, city, slug }) {
  const location = city ? `${city}` : 'India';
  const title = truncateTitle(`${eventType} Transport ${location} — 500+ Events 4.9★ | Quote`);
  const description = truncateDescription(
    `${eventType} transport in ${location}. Buses, tempos, luxury cars. ` +
    `500+ events served. 4.9★ rated. Get free quote today.`
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
 * CTR Formula: [Route Tempo] [Price] — [Seats] [Trust] | [CTA]
 */
export function generateTempoMetadata({ origin, destination, price, seats, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Tempo ₹${price} — ${seats} Seater AC 4.9★ | Book`);
  const ogTitle = truncateOGTitle(`${origin} to ${destination} Tempo Traveller from ₹${price} — ${seats} Seater AC | Triveni Cabs`);
  const description = truncateDescription(
    `${origin} to ${destination} tempo ₹${price}. ${seats}-seater AC, pushback seats. ` +
    `4.9★ by 2,500+ groups. No hidden cost. Book in 2 min.`
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
        url: `${BASE_URL}/images/tempo/17_seater.jpg`,
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
 * CTR Formula: [Route Bus] [Price] — [Seats] [Trust] | [CTA]
 */
export function generateBusMetadata({ origin, destination, price, seats, slug }) {
  const title = truncateTitle(`${origin} to ${destination} Bus ₹${price} — ${seats} Seater AC 4.9★ | Book`);
  const ogTitle = truncateOGTitle(`${origin} to ${destination} Bus Route & Hire from ₹${price} — AC ${seats} Seater | Triveni Cabs`);
  const description = truncateDescription(
    `${origin} to ${destination} bus hire ₹${price}. ${seats}-seater AC Volvo. ` +
    `4.9★ by 1,000+ groups. Fixed fare, no hidden cost. Book in 2 min.`
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
 * Smart truncate at word boundary to avoid cutting mid-word
 * Google truncates at ~60 chars for titles and ~155 for descriptions.
 * Cutting mid-word looks unprofessional and kills CTR.
 */
function smartTruncate(text, maxLength) {
  if (text.length <= maxLength) return text;
  const cutoff = maxLength - 3; // Reserve 3 chars for '...'
  const truncated = text.substring(0, cutoff);
  const lastSpace = truncated.lastIndexOf(' ');
  // If last space is too far back (>30% of text lost), hard-clip instead
  return (lastSpace > cutoff * 0.6 ? truncated.substring(0, lastSpace) : truncated) + '...';
}

/**
 * Truncate title to max 60 characters (Google SERP limit)
 * Uses word-boundary truncation to avoid mid-word cuts
 */
function truncateTitle(title) {
  // Clause-drop, not mid-phrase truncation.
  //
  // This used to call smartTruncate(title, 45), which cuts at a word boundary and
  // appends "...". Lowering the budget to 45 turned that into a visible defect:
  // 906 titles rendered in Google as "Agra to Amritsar Cab ₹7,440 — AC, 24/7... |
  // Triveni Cabs" — a broken-looking result that also wasted three characters,
  // and 368 of them were the root booking pages.
  //
  // tightenTitle strips known filler clauses ("Book Now", a trailing 4.9★) and
  // drops whole trailing clauses instead of cutting through one, keeping the fare
  // and never emitting an ellipsis. It also guards a visible ₹ figure, so a
  // fare-led title cannot lose its price to the truncation.
  return finalizeTitle(title, 45);
}

/**
 * Truncate OG title to max 95 characters (social shares can be longer)
 */
function truncateOGTitle(title) {
  return smartTruncate(title, 95);
}

/**
 * Truncate description to max 155 characters (Google SERP limit)
 * Uses word-boundary truncation to avoid mid-word cuts
 */
function truncateDescription(desc) {
  return smartTruncate(desc, 155);
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

/**
 * Generate Tours-With-Guide page metadata (Group A vehicle+itinerary, B language landing, C deep)
 * CTR Formula: bundled price → "Licensed Guide Included" trust → monument → no-surprise-fee promise
 */
export function generateTourWithGuideMetadata({
  slug,
  headline,
  city,
  vehicle,
  monument,
  bundledFare,
  guideFee,
  duration,
  guideLanguage,
  group,
  heroImage,
  intro,
}) {
  const monumentSegment = monument || (city || 'India');
  const langTag = guideLanguage ? `${guideLanguage}-Speaking ` : 'Licensed ';
  // Prefer the tour's own headline: it is written per tour and already names the
  // origin and vehicle, which is what distinguishes otherwise-identical Taj Mahal
  // tours from each other. The generic formulas below key only on monument+fare,
  // so several tours rendered the same title and competed with one another.
  const baseTitle = headline
    ? headline
    : group === 'B'
    ? `${guideLanguage || 'English'}-Speaking Tour Guide India ₹${guideFee}/day — Ministry-Licensed | Book`
    : group === 'C'
    ? `${monumentSegment} with ${langTag}Guide ₹${bundledFare?.toLocaleString('en-IN')} — All-In | Book`
    : `${monumentSegment} ₹${bundledFare?.toLocaleString('en-IN')} — Vehicle + Licensed Guide | Book`;

  // Language variants share one headline and differ only in a word that sits past
  // the truncation point: ten "Same Day Taj Mahal from Delhi with <Lang>-Speaking
  // Guide" pages all rendered as "Same Day Taj Mahal from Delhi with...", ten
  // identical titles competing for the same result. Leading with the language
  // guarantees the distinguishing term survives any cut.
  // Built with string slicing rather than a constructed RegExp on purpose: a
  // backslash escape written inside a template literal (`\s`) collapses to a bare
  // "s" before RegExp ever sees it, which silently produces a pattern that matches
  // nothing. Regex literals below are safe because they are not interpolated.
  const langLed = (() => {
    if (!guideLanguage) return baseTitle;
    const at = baseTitle.toLowerCase().indexOf(guideLanguage.toLowerCase());
    if (at <= 24) return baseTitle; // language already survives truncation
    const stem = baseTitle
      .slice(0, at)
      .replace(/\s*\b(with|in)\s*$/i, '')
      .replace(/\s*[—–|-]\s*$/, '')
      .trim();
    return stem ? `${guideLanguage} Guide — ${stem}` : baseTitle;
  })();

  const title = truncateTitle(langLed);
  const ogTitle = truncateOGTitle(
    group === 'B'
      ? `Hire a ${guideLanguage}-Speaking Tour Guide in India — ₹${guideFee}/day, Ministry-Licensed | Triveni Cabs`
      : `${monumentSegment} Tour with ${langTag}Guide — ${vehicle} + Guide Bundle ₹${bundledFare?.toLocaleString('en-IN')} | Triveni Cabs`
  );

  const description = truncateDescription(
    group === 'B'
      ? `Book a Ministry-licensed ${guideLanguage}-speaking tour guide for the Taj Mahal, Delhi, Jaipur or Golden Triangle. ₹${guideFee}/day. License proof shared at confirmation.`
      : `${monumentSegment} bundled tour ₹${bundledFare?.toLocaleString('en-IN')}: ${vehicle} + ${langTag.trim()} guide. ${duration}. Hotel pickup, no surprise fees. 4.9★, book in 2 min.`
  );
  const ogDescription = truncateDescription(
    group === 'B'
      ? `Hire a Ministry-licensed ${guideLanguage}-speaking tour guide in India from ₹${guideFee}/day. License proof on confirmation. Book on WhatsApp.`
      : `Book ${monumentSegment} with a ${langTag.trim()} guide + ${vehicle} from ₹${bundledFare?.toLocaleString('en-IN')}. ${duration}, hotel pickup, no surprise fees. 4.9★ rated.`
  );

  const url = `${BASE_URL}/tours-with-guide/${slug}`;
  const ogImage = heroImage ? (heroImage.startsWith('http') ? heroImage : `${BASE_URL}${heroImage}`) : `${BASE_URL}/images/sightseeing/Agra/Taj_mahal.jpg`;

  return {
    title,
    description,
    keywords: generateTourWithGuideKeywords(monumentSegment, city, guideLanguage, group),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
      languages: {
        'en-IN': `/tours-with-guide/${slug}`,
      },
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      type: 'website',
      locale: SITE_CONFIG.locale,
      url,
      siteName: SITE_CONFIG.siteName,
      images: [{
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${monumentSegment} — Tour With ${langTag.trim()} Guide — Triveni Cabs`,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      creator: SITE_CONFIG.twitterHandle,
      site: SITE_CONFIG.twitterHandle,
    },
    robots: getDefaultRobots(),
    category: 'Travel',
    other: {
      'price-range': bundledFare ? `₹${bundledFare}` : (guideFee ? `From ₹${guideFee}/day` : '₹₹'),
      'service-type': group === 'B' ? 'Tour Guide Hire' : 'Tour With Guide',
      'duration': duration || '',
      'language': guideLanguage || 'English',
      'rating': String(AGGREGATE_RATING.ratingValue),
      'review_count': String(AGGREGATE_RATING.reviewCount),
    },
  };
}

function generateTourWithGuideKeywords(monument, city, language, group) {
  const langKw = language ? `${language.toLowerCase()} speaking guide` : 'licensed tour guide';
  const base = group === 'B'
    ? [
        `${langKw} india`,
        `hire ${langKw}`,
        `${language?.toLowerCase()} tour guide ${city}`,
        `${language?.toLowerCase()} guide taj mahal`,
        `${language?.toLowerCase()} guide delhi`,
        `${language?.toLowerCase()} guide jaipur`,
        `${language?.toLowerCase()} guide golden triangle`,
        'ministry of tourism guide',
        'tours with guide',
        COMPANY_INFO.name,
      ]
    : [
        `${monument?.toLowerCase()} tour with guide`,
        `${monument?.toLowerCase()} ${langKw}`,
        `${city?.toLowerCase()} tour with guide`,
        `${city?.toLowerCase()} private tour`,
        `${monument?.toLowerCase()} tour package`,
        `${monument?.toLowerCase()} day tour`,
        'taj mahal tour with guide',
        'agra tour with guide',
        'delhi tour with guide',
        'jaipur tour with guide',
        'golden triangle tour with guide',
        'tours with guide india',
        COMPANY_INFO.name,
      ];
  return base.filter(Boolean).join(', ');
}

export default {
  generateGeoMeta,
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
  generateBusMetadata,
  generateTourWithGuideMetadata
};
