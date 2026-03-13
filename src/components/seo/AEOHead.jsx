/**
 * AEOHead — Server component for per-page AEO/GEO schema injection
 *
 * Drop this into any page.js to add Answer Engine Optimization schemas.
 * Generates page-specific Speakable + HowTo + LocalService schemas.
 *
 * Usage:
 *   <AEOHead pageType="route" data={{ url: '/one-way-cab/delhi-to-agra', title: '...', origin: 'Delhi', destination: 'Agra' }} />
 *   <AEOHead pageType="tour" data={{ url: '/sightseeing/agra', title: '...', city: 'Agra' }} />
 *   <AEOHead pageType="airport" data={{ url: '/airport-service/delhi', title: '...', city: 'Delhi' }} />
 *   <AEOHead pageType="cityHub" data={{ url: '/delhi', title: '...', city: 'Delhi' }} />
 *   <AEOHead pageType="wedding" data={{ url: '/wedding/agra', title: '...', city: 'Agra' }} />
 *   <AEOHead pageType="corporate" data={{ url: '/corporate/delhi', title: '...', city: 'Delhi' }} />
 *   <AEOHead pageType="event" data={{ url: '/event/slug', title: '...' }} />
 *   <AEOHead pageType="station" data={{ url: '/railway-station-taxi/agra-cantt', title: '...', city: 'Agra' }} />
 *   <AEOHead pageType="busStand" data={{ url: '/bus-stand-taxi/isbt-kashmere-gate', title: '...', city: 'Delhi' }} />
 */

import { BASE_URL, COMPANY_INFO, AGGREGATE_RATING } from '@/lib/seo/constants';

function buildSpeakableSchema(url, title) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    url: url?.startsWith('http') ? url : `${BASE_URL}${url}`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.direct-answer',
        '.faq-answer',
        '.key-info',
        '.key-stats',
        '.summary-box',
        '[data-snippet-type]',
        '[data-citation-source]'
      ]
    }
  };
}

function buildHowToSchema(pageType, data) {
  const { origin, destination } = data;
  const isRoute = ['route', 'airport', 'station', 'busStand'].includes(pageType);
  const isTour = ['tour', 'event'].includes(pageType);

  const tripDesc = origin && destination
    ? `a taxi from ${origin} to ${destination}`
    : data.city
      ? `cab service in ${data.city}`
      : 'reliable cab service';

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Book ${isTour ? 'a Tour' : 'a Cab'} with Triveni Cabs${data.city ? ` in ${data.city}` : ''}`,
    description: `Step-by-step guide to book ${tripDesc} with Triveni Cabs.`,
    totalTime: 'PT5M',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Choose Service', text: `Visit trivenicabs.in or call ${COMPANY_INFO.phone.display} to select your service.` },
      { '@type': 'HowToStep', position: 2, name: 'Select Vehicle', text: 'Pick Sedan (₹11/km), SUV (₹15/km), or Tempo Traveller (₹24/km) based on group size.' },
      { '@type': 'HowToStep', position: 3, name: 'Share Trip Details', text: `Provide pickup${origin ? ` from ${origin}` : ''}, drop${destination ? ` to ${destination}` : ''}, date, time, and passengers.` },
      { '@type': 'HowToStep', position: 4, name: 'Get Quote', text: 'Receive transparent all-inclusive quote with no hidden charges.' },
      { '@type': 'HowToStep', position: 5, name: 'Confirm & Travel', text: `Confirm via WhatsApp or call. Driver arrives 15 min early. 24/7 support.` }
    ]
  };
}

function buildLocalServiceSchema(city, serviceType) {
  if (!city) return null;

  const serviceMap = {
    route: { name: `${city} Taxi Service`, type: 'TaxiService' },
    tour: { name: `${city} Sightseeing Tours`, type: 'TouristTrip' },
    airport: { name: `${city} Airport Transfer`, type: 'AirportTransfer' },
    cityHub: { name: `${city} Cab Service`, type: 'TaxiService' },
    wedding: { name: `${city} Wedding Car Rental`, type: 'WeddingCarRental' },
    corporate: { name: `${city} Corporate Transport`, type: 'CorporateTransport' },
    event: { name: `${city} Event Transportation`, type: 'EventTransportation' },
    station: { name: `${city} Railway Station Taxi`, type: 'TaxiService' },
    busStand: { name: `${city} Bus Stand Taxi`, type: 'TaxiService' },
    tempo: { name: `${city} Tempo Traveller`, type: 'TempoTravellerRental' },
  };

  const svc = serviceMap[serviceType] || serviceMap.route;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/${city.toLowerCase().replace(/\s+/g, '-')}/#${serviceType}service`,
    name: `${svc.name} — Triveni Cabs`,
    serviceType: svc.type,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone.primary
    },
    areaServed: {
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'Country', name: 'India' }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ...AGGREGATE_RATING
    }
  };
}

export default function AEOHead({ pageType = 'route', data = {} }) {
  const schemas = [];

  // 1. Page-specific Speakable schema
  if (data.url) {
    schemas.push(buildSpeakableSchema(data.url, data.title || ''));
  }

  // 2. HowTo schema for booking pages
  if (['route', 'tour', 'airport', 'cityHub', 'station', 'busStand', 'wedding', 'corporate', 'event', 'tempo'].includes(pageType)) {
    schemas.push(buildHowToSchema(pageType, data));
  }

  // 3. Local service schema for city pages
  if (data.city) {
    const localSchema = buildLocalServiceSchema(data.city, pageType);
    if (localSchema) schemas.push(localSchema);
  }

  if (schemas.length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}
