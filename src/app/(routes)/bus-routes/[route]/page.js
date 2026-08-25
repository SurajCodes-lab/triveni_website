// src/app/bus-routes/[route]/page.js

import { busFleet, busRoutes, localSightseeing, delhiToAgraRoute, busRouteDescriptions } from '@/utilis/busRoutesData';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;
export const dynamicParams = false;
import DynamicBusRoutesClient from '@/components/DynamicBusRoutesClient';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import { resolveRouteMetrics } from '@/utilis/routeMetrics';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getMoneyPageLinks, getSiloHubLinks } from '@/lib/seo/linkingHelper';
import { generateBusMetadata } from '@/lib/seo/metadata-factory';
import { generateBusServiceSchema } from '@/lib/seo/schema-generators';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getSpeakableSchema, getTodayDate, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import AEOHead from '@/components/seo/AEOHead';
// Server-only: pulls in the large blog dataset, never import from a client component.
import { getRelatedBlogPosts } from '@/lib/seo/blogLinkHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Keep only the numeric part of a distance / duration so a long-form value
// cannot eat the whole snippet.
const compactKm = (d) => {
  const m = /(\d[\d,]*)\s*km/i.exec(d || '');
  return m ? `${m[1]} km` : null;
};
const compactDuration = (t) => {
  const s = String(t || '').split('(')[0].trim();
  return s && s.length <= 20 ? s : null;
};

// Fare-first meta description: numbers lead, softer segments drop off the end
// until the line fits inside Google's ~160-char snippet.
function buildFareFirstDescription(segments, limit = 160) {
  const parts = segments.filter(Boolean);
  let out = parts.join(' · ');
  while (out.length > limit && parts.length > 1) {
    parts.pop();
    out = parts.join(' · ');
  }
  return out.length > limit ? out.slice(0, limit) : out;
}

// Viewport export (moved from metadata for Next.js 15 compatibility)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FACF2D' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export async function generateStaticParams() {
  // Generate static params for ALL 80 routes from busRoutes data
  const allRoutes = [];

  Object.entries(busRoutes).forEach(([origin, destinations]) => {
    destinations.forEach(dest => {
      const routeSlug = `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`;
      allRoutes.push(routeSlug);
    });
  });

  return allRoutes.map((route) => ({
    route: route,
  }));
}

export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check
  if (!route) {
    return {
      title: tightenTitle('Bus Routes Service | Premium Group Travel'),
      description: 'Book premium buses for comfortable group travel across India.'
    };
  }

  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return {
      title: 'Bus Routes Service | Premium Group Travel',
      description: 'Book premium buses for comfortable group travel across India.'
    };
  }

  const [origin, destination] = routeParts;

  const formatCityName = (city) => {
    return city.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const originFormatted = formatCityName(origin);
  const destinationFormatted = formatCityName(destination);

  // Distance / duration come straight from the busRoutes entry when the pair exists.
  const routeEntry = (busRoutes[originFormatted] || []).find(
    (r) => r.name.toLowerCase() === destinationFormatted.toLowerCase()
  );
  const baseMeta = generateBusMetadata({
    origin: originFormatted,
    destination: destinationFormatted,
    price: '30/km',
    seats: '22-56',
    slug: route
  });

  return {
    ...baseMeta,
    description: buildFareFirstDescription([
      '22-56 seater bus from ₹30/km',
      `${originFormatted} to ${destinationFormatted}${compactKm(routeEntry?.distance) ? ` ${compactKm(routeEntry.distance)}` : ''}`,
      compactDuration(routeEntry?.duration),
      'driver + fuel included',
      '4.9★',
      'call 7668570551'
    ])
  };
}

export default async function BusRoutePage({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check and handle invalid routes
  if (!route) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Route</h1>
          <p className="text-gray-600">The requested route was not found.</p>
        </div>
      </div>
    );
  }

  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid Route Format</h1>
          <p className="text-gray-600">The route format should be origin-to-destination.</p>
        </div>
      </div>
    );
  }

  const [origin, destination] = routeParts;

  const formatCityName = (city) => {
    return city.split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  const originFormatted = formatCityName(origin);
  const destinationFormatted = formatCityName(destination);

  // Find route data on server side
  const findRouteData = (originCity, destinationCity) => {
    if (busRoutes[originCity]) {
      const routeInfo = busRoutes[originCity].find(r =>
        r.name.toLowerCase() === destinationCity.toLowerCase()
      );
      if (routeInfo) {
        return {
          ...routeInfo,
          origin: originCity,
          destination: destinationCity,
          exists: true
        };
      }
    }

    return {
      name: destinationCity,
      type: 'Tourism',
      distance: 'Contact for details',
      duration: 'Contact for details',
      origin: originCity,
      destination: destinationCity,
      exists: false
    };
  };

  // Get detailed route info for Delhi to Agra
  const getDetailedRouteInfo = () => {
    if (route === 'delhi-to-agra') {
      return delhiToAgraRoute;
    }
    return null;
  };

  const routeDataBase = findRouteData(originFormatted, destinationFormatted);
  // When the busRoutes entry has no distance/drive time, borrow the real figures
  // for this corridor from the distance / one-way datasets. The 'Contact for
  // details' sentinel is kept when nothing resolves, so the existing schema
  // guards below still behave — the client drops the fact rather than showing it.
  const routeMetrics = resolveRouteMetrics({
    slug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    distance: routeDataBase.distance,
    duration: routeDataBase.duration,
  });
  const routeData = {
    ...routeDataBase,
    distance: routeMetrics.distance || routeDataBase.distance,
    duration: routeMetrics.duration || routeDataBase.duration,
  };
  const destinationSightseeing = localSightseeing?.[destinationFormatted] || [];
  const detailedRouteInfo = getDetailedRouteInfo();

  // Get route-specific description if available
  const routeDescription = busRouteDescriptions?.[route] || null;

  // Blog posts covering this corridor — links money page back to editorial content.
  const busBlogLinks = getRelatedBlogPosts([originFormatted, destinationFormatted], 3)
    .map((p) => ({
      href: `/blog/${p.slug}`,
      anchor: p.readTime ? `${p.title} · ${p.readTime}` : p.title
    }));

  // Get related routes from the same origin for internal linking
  const relatedRoutes = (busRoutes[originFormatted] || [])
    .filter(r => r.name.toLowerCase() !== destinationFormatted.toLowerCase())
    .slice(0, 6)
    .map(r => ({
      name: r.name,
      type: r.type,
      distance: r.distance,
      slug: `${originFormatted.toLowerCase().replace(/\s+/g, '-')}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`
    }));

  // Prepare data for client component
  const pageData = {
    routeSlug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    routeData: routeData,
    localSightseeing: destinationSightseeing,
    fleet: busFleet,
    detailedRouteInfo: detailedRouteInfo,
    routeDescription: routeDescription,
    relatedRoutes: relatedRoutes,
    corridorLinks: getCorridorLinks(route, 'bus-routes')
  };

  // JSON-LD Structured Data for specific route
  const busRouteSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": `${originFormatted} to ${destinationFormatted} Bus Service by Triveni Cabs`,
    "description": `Premium luxury bus rental service from ${originFormatted} to ${destinationFormatted}. Choose from 22 to 56 seater Volvo and AC buses with professional drivers, GPS tracking, and modern amenities.`,
    "fromLocation": {
      "@type": "Place",
      "name": originFormatted,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "toLocation": {
      "@type": "Place",
      "name": destinationFormatted,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    ...(routeData.distance !== 'Contact for details' && { "distance": routeData.distance }),
    ...(routeData.duration !== 'Contact for details' && { "duration": routeData.duration })
  };

  // ─── DEEPER GEO: geo-located City Place entities + bus-native BusTrip ───
  const toCitySlug = (s) => s.toLowerCase().replace(/\s+/g, '-');
  const originPlace = getCityPlaceSchema(toCitySlug(originFormatted), { idSlug: `bus-routes/${route}#origin` });
  const destPlace = getCityPlaceSchema(toCitySlug(destinationFormatted), { idSlug: `bus-routes/${route}#destination` });

  // Enrich the TravelAction endpoints with real coordinates + full address
  if (originPlace) { busRouteSchema.fromLocation.geo = originPlace.geo; busRouteSchema.fromLocation.address = originPlace.address; }
  if (destPlace) { busRouteSchema.toLocation.geo = destPlace.geo; busRouteSchema.toLocation.address = destPlace.address; }

  const isoDuration = (() => {
    const m = (routeData.duration || '').match(/\d+/);
    return m ? `PT${m[0]}H` : null;
  })();
  const distanceKmNum = (() => {
    const m = (routeData.distance || '').match(/\d+/);
    return m ? parseInt(m[0], 10) : null;
  })();
  const busStation = (place, cityName) => ({
    "@type": "BusStation",
    "name": `${cityName} Bus Stand`,
    ...(place
      ? { "address": place.address, "geo": place.geo }
      : { "address": { "@type": "PostalAddress", "addressLocality": cityName, "addressCountry": "IN" } }),
  });
  const busTripSchema = {
    "@context": "https://schema.org",
    "@type": "BusTrip",
    "name": `${originFormatted} to ${destinationFormatted} Bus`,
    "description": `Chartered bus service from ${originFormatted} to ${destinationFormatted} — 22 to 56 seater AC and Volvo coaches with a professional driver.`,
    "provider": { "@type": "TravelAgency", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs" },
    "departureBusStop": busStation(originPlace, originFormatted),
    "arrivalBusStop": busStation(destPlace, destinationFormatted),
    ...(distanceKmNum ? { "distance": `${distanceKmNum} km` } : {}),
    ...(isoDuration ? { "estimatedDuration": isoDuration } : {}),
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "30",
      "priceSpecification": { "@type": "UnitPriceSpecification", "price": "30", "priceCurrency": "INR", "unitText": "per km" },
      "availability": "https://schema.org/InStock",
      "url": `https://www.trivenicabs.in/bus-routes/${route}`,
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${originFormatted} to ${destinationFormatted} Bus Rental — Triveni Cabs`,
    "description": `Book luxury buses from ${originFormatted} to ${destinationFormatted}. Available in 22, 25, 27, 32, 35, 41, 45, 49, 52, and 56 seater options. All buses equipped with AC, reclining seats, entertainment systems, and GPS tracking.`,
    "brand": {
      "@type": "Brand",
      "name": "Triveni Cabs"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "30",
      "highPrice": "65",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "INR",
        "unitText": "per kilometer"
      },
      "availability": "https://schema.org/InStock",
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      "url": `https://www.trivenicabs.in/bus-routes/${route}`,
      "seller": {
        "@type": "Organization",
        "@id": "https://www.trivenicabs.in/#organization",
        "name": "Triveni Cabs"
      }
    },
    ...getRatingAndReviews(route, 'bus')
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bus Routes",
        "item": "https://www.trivenicabs.in/bus-routes"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${originFormatted} to ${destinationFormatted}`,
        "item": `https://www.trivenicabs.in/bus-routes/${route}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the distance from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": routeData.distance !== 'Contact for details'
            ? `The distance from ${originFormatted} to ${destinationFormatted} is approximately ${routeData.distance}.`
            : `The distance from ${originFormatted} to ${destinationFormatted} varies based on the route. Please contact us at +91-7668570551 for exact details.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does it take from ${originFormatted} to ${destinationFormatted} by bus?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": routeData.duration !== 'Contact for details'
            ? `The journey from ${originFormatted} to ${destinationFormatted} takes approximately ${routeData.duration} by luxury bus, depending on traffic and route conditions.`
            : `The journey time from ${originFormatted} to ${destinationFormatted} depends on various factors. Please contact us at +91-7668570551 for accurate travel time.`
        }
      },
      {
        "@type": "Question",
        "name": `What bus sizes are available for ${originFormatted} to ${destinationFormatted} route?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer multiple bus sizes for ${originFormatted} to ${destinationFormatted} route including 22, 25, 27, 32, 35, 41, 45, 49, 52, and 56 seater buses. All buses are AC equipped with modern amenities.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does it cost to rent a bus from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Bus rental rates from ${originFormatted} to ${destinationFormatted} start from ₹30/km for 22 seater and go up to ₹65/km for 56 seater luxury Volvo buses. Final cost depends on bus size, season, and booking duration. Contact us for exact quotes.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I book a bus online for ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, you can book a bus online for ${originFormatted} to ${destinationFormatted} through our website or by calling +91-7668570551. We provide instant confirmation and flexible booking options.`
        }
      },
      {
        "@type": "Question",
        "name": `What amenities are included in the bus from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `All buses on ${originFormatted} to ${destinationFormatted} route include AC, pushback/reclining seats, entertainment system, GPS tracking, charging points, reading lights, and spacious luggage storage. Premium buses offer additional amenities like WiFi and washroom.`
        }
      },
      {
        "@type": "Question",
        "name": `Is advance booking required for ${originFormatted} to ${destinationFormatted} bus?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We recommend booking 7-15 days in advance for ${originFormatted} to ${destinationFormatted} route, especially during peak season. However, same-day and next-day bookings are also accepted subject to availability.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the cancellation policy for ${originFormatted} to ${destinationFormatted} bus booking?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Cancellations made 48+ hours before departure receive full refund. 24-48 hours cancellations receive 50% refund. No refund for cancellations within 24 hours. Terms may vary during peak season.`
        }
      }
    ]
  };

  const howToBookSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Book a Bus from ${originFormatted} to ${destinationFormatted}`,
    "description": `Step-by-step guide to book luxury bus rental service from ${originFormatted} to ${destinationFormatted}`,
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Select Your Bus",
        "text": `Choose from 22 to 56 seater buses for your ${originFormatted} to ${destinationFormatted} journey based on group size`
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Call or WhatsApp",
        "text": "Contact us at +91-7668570551 or WhatsApp for instant booking confirmation"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Confirm Details",
        "text": `Provide travel date, pickup location in ${originFormatted}, and passenger count`
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Confirmation",
        "text": "Receive instant booking confirmation with driver details and trip information"
      }
    ]
  };

  // Article schema — editorial entity for AEO/GEO + freshness signal, Speakable
  // wired to the route H1, direct-answer lead and first FAQ answer.
  const articleSchema = getArticleSchema({
    slug: `bus-routes/${route}`,
    headline: `${originFormatted} to ${destinationFormatted} Bus Hire (2026) — Fares, Bus Sizes & Booking Guide`,
    description: `How to charter a bus from ${originFormatted} to ${destinationFormatted}: 22-56 seater AC coach fares from ₹30/km${routeData.distance !== 'Contact for details' ? `, ${routeData.distance} distance` : ''}, what is included, and how to book for weddings, corporate and group tours.`,
    image: '/images/bus/hero_section_image.webp',
    datePublished: '2026-01-01',
    dateModified: getTodayDate(),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busRouteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToBookSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          ...generateBusServiceSchema(originFormatted, destinationFormatted, '30', '22-56'),
          brand: { "@type": "Brand", "name": "Triveni Cabs" },
          ...getRatingAndReviews(route, 'bus')
        }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busTripSchema) }}
      />
      {originPlace && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(originPlace) }}
        />
      )}
      {destPlace && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(destPlace) }}
        />
      )}
      <AEOHead pageType="route" data={{ url: `/bus-routes/${route}`, title: `${originFormatted} to ${destinationFormatted} Bus Service` }} />

      <DynamicBusRoutesClient data={pageData} />

      <div className="container mx-auto px-4 pb-12">
        <RelatedLinks
          heading="Related services"
          links={getSiloHubLinks('bus', 6)}
          ariaLabel="Other Triveni Cabs services"
          tone="slate"
        />
        {busBlogLinks.length > 0 && (
          <RelatedLinks
            heading="Trip guides & tips"
            links={busBlogLinks}
            ariaLabel={`${originFormatted} to ${destinationFormatted} travel guides`}
            tone="amber"
          />
        )}
      </div>
    </>
  );
}
