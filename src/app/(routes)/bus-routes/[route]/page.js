// src/app/bus-routes/[route]/page.js

import { busFleet, busRoutes, localSightseeing, delhiToAgraRoute } from '@/utilis/busRoutesData';
import DynamicBusRoutesClient from '@/components/DynamicBusRoutesClient';
import Script from 'next/script';

export async function generateStaticParams() {
  // Generate static params for popular routes
  const popularRoutes = [
    'delhi-to-agra',
    'delhi-to-jaipur',
    'delhi-to-shimla',
    'delhi-to-manali',
    'delhi-to-haridwar',
    'delhi-to-rishikesh',
    'delhi-to-amritsar',
    'delhi-to-dharamshala',
    'mumbai-to-pune',
    'mumbai-to-goa',
    'jaipur-to-delhi',
    'jaipur-to-agra',
    'jaipur-to-udaipur'
  ];

  return popularRoutes.map((route) => ({
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
      title: 'Bus Routes Service | Premium Group Travel',
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

  return {
    title: `Big Group? No Problem! ${originFormatted} to ${destinationFormatted} Luxury Bus 22-56 Seater | Book Now & Save 20%`,
    description: `🚌 Roll in comfort from ${originFormatted} to ${destinationFormatted}! Luxury Volvo & AC buses (22-56 seater) with reclining seats, entertainment & AC. Perfect for corporate events, weddings, pilgrimages & tours. 1000+ groups trusted us. Professional drivers, GPS tracking, on-time guarantee. Book online in 60 seconds & get instant confirmation + 20% discount!`,
    keywords: [
      // Primary route keywords
      `bus ${origin} to ${destination}`,
      `${origin} to ${destination} bus booking`,
      `${origin} to ${destination} bus price`,
      `bus on rent ${origin} to ${destination}`,
      `luxury bus ${origin} to ${destination}`,
      `volvo bus ${origin} to ${destination}`,
      `book bus ${origin} to ${destination}`,
      `${origin} to ${destination} bus fare`,
      `bus hire ${origin} to ${destination}`,
      `${origin} ${destination} bus`,
      `${origin} to ${destination} group travel`,
      `bus rental ${origin} to ${destination}`,
      `ac bus ${origin} to ${destination}`,
      `mini bus ${origin} to ${destination}`,
      `${origin} to ${destination} outstation bus`,

      // Bus capacity keywords
      `22 seater bus ${origin} to ${destination}`,
      `25 seater bus ${origin} to ${destination}`,
      `27 seater bus ${origin} to ${destination}`,
      `32 seater bus ${origin} to ${destination}`,
      `35 seater bus ${origin} to ${destination}`,
      `41 seater bus ${origin} to ${destination}`,
      `45 seater bus ${origin} to ${destination}`,
      `49 seater bus ${origin} to ${destination}`,
      `52 seater bus ${origin} to ${destination}`,
      `56 seater bus ${origin} to ${destination}`,

      // Purpose-based keywords
      `corporate bus ${origin} to ${destination}`,
      `wedding bus ${origin} to ${destination}`,
      `pilgrimage bus ${origin} to ${destination}`,
      `school bus hire ${origin} to ${destination}`,
      `college trip bus ${origin} to ${destination}`,
      `family tour bus ${origin} to ${destination}`,
      `group tour bus ${origin} to ${destination}`,
      `employee transport ${origin} to ${destination}`,
      `conference bus ${origin} to ${destination}`,
      `event bus ${origin} to ${destination}`,
      `destination wedding bus ${origin} to ${destination}`,
      `baraat bus ${origin} to ${destination}`,
      `religious tour bus ${origin} to ${destination}`,
      `temple tour bus ${origin} to ${destination}`,
      `sightseeing bus ${origin} to ${destination}`,

      // Service type keywords
      `cheap bus ${origin} to ${destination}`,
      `best bus service ${origin} to ${destination}`,
      `online bus booking ${origin} to ${destination}`,
      `instant bus booking ${origin} to ${destination}`,
      `bus charter ${origin} to ${destination}`,
      `coach hire ${origin} to ${destination}`,
      `luxury coach ${origin} to ${destination}`,
      `premium bus ${origin} to ${destination}`,
      `tourist bus ${origin} to ${destination}`,
      `party bus ${origin} to ${destination}`,
      `night bus ${origin} to ${destination}`,
      `sleeper bus ${origin} to ${destination}`,

      // Feature-based keywords
      `ac bus ${origin} to ${destination}`,
      `volvo bus ${origin} to ${destination}`,
      `pushback seat bus ${origin} to ${destination}`,
      `reclining seat bus ${origin} to ${destination}`,
      `wifi bus ${origin} to ${destination}`,
      `GPS tracked bus ${origin} to ${destination}`,
      `entertainment bus ${origin} to ${destination}`,
      `comfortable bus ${origin} to ${destination}`,
      `safe bus ${origin} to ${destination}`,
      `clean bus ${origin} to ${destination}`,

      // Booking-related keywords
      `bus booking online ${origin} to ${destination}`,
      `reserve bus ${origin} to ${destination}`,
      `book bus ticket ${origin} to ${destination}`,
      `bus reservation ${origin} to ${destination}`,
      `advance bus booking ${origin} to ${destination}`,
      `same day bus booking ${origin} to ${destination}`,
      `instant confirmation bus ${origin} to ${destination}`,

      // Pricing keywords
      `bus price ${origin} to ${destination}`,
      `bus fare ${origin} to ${destination}`,
      `bus rates ${origin} to ${destination}`,
      `bus cost ${origin} to ${destination}`,
      `affordable bus ${origin} to ${destination}`,
      `budget bus ${origin} to ${destination}`,
      `economical bus ${origin} to ${destination}`,
      `cheap bus hire ${origin} to ${destination}`,
      `best price bus ${origin} to ${destination}`,

      // Trip type keywords
      `one way bus ${origin} to ${destination}`,
      `round trip bus ${origin} to ${destination}`,
      `return bus ${origin} to ${destination}`,
      `multi-day bus ${origin} to ${destination}`,
      `weekend bus ${origin} to ${destination}`,
      `holiday bus ${origin} to ${destination}`,
      `tour package bus ${origin} to ${destination}`,

      // Additional variations
      `${origin} ${destination} bus hire`,
      `${origin} ${destination} bus rental`,
      `${origin} ${destination} bus service`,
      `${origin} ${destination} bus booking online`,
      `${origin} ${destination} luxury bus`,
      `${origin} ${destination} volvo bus`,
      `${origin} ${destination} ac bus`,
      `${origin} ${destination} coach hire`,
      `${origin} ${destination} mini bus`,
      `${origin} ${destination} tourist bus`,
      `hire bus ${origin} to ${destination}`,
      `rent bus ${origin} to ${destination}`,
      `charter bus ${origin} to ${destination}`,

      // Long-tail keywords
      `best bus rental service ${origin} to ${destination}`,
      `reliable bus service ${origin} to ${destination}`,
      `professional bus service ${origin} to ${destination}`,
      `luxury bus booking ${origin} to ${destination}`,
      `bus with driver ${origin} to ${destination}`,
      `bus on rent with driver ${origin} to ${destination}`,
      `group bus booking ${origin} to ${destination}`,
      `large group bus ${origin} to ${destination}`,
      `corporate group bus ${origin} to ${destination}`,
      `wedding guest bus ${origin} to ${destination}`,
      `tourist group bus ${origin} to ${destination}`,
      `school group bus ${origin} to ${destination}`,
      `college group bus ${origin} to ${destination}`,
      `family group bus ${origin} to ${destination}`,
      `friends group bus ${origin} to ${destination}`,
      `bus for large groups ${origin} to ${destination}`,
      `bus for corporate event ${origin} to ${destination}`,
      `bus for wedding ${origin} to ${destination}`,
      `bus for pilgrimage ${origin} to ${destination}`,
      `bus for tour ${origin} to ${destination}`,
      `bus for sightseeing ${origin} to ${destination}`,
      `bus for picnic ${origin} to ${destination}`,
      `bus for excursion ${origin} to ${destination}`,
      `bus for outing ${origin} to ${destination}`,
      `how to book bus ${origin} to ${destination}`,
      `where to book bus ${origin} to ${destination}`,
      `bus booking ${origin} ${destination}`,
      `bus hire ${origin} ${destination}`,
      `bus rental ${origin} ${destination}`,
      `bus service ${origin} ${destination}`,
      `${originFormatted} to ${destinationFormatted} bus`,
      `${originFormatted} ${destinationFormatted} bus booking`,
      `${originFormatted} ${destinationFormatted} bus hire`,
      `${originFormatted} ${destinationFormatted} bus rental`,
      `bus from ${origin} to ${destination}`,
      `bus to ${destination} from ${origin}`,
      `${destination} bus from ${origin}`,
      `${origin} bus to ${destination}`,
      `travel by bus ${origin} to ${destination}`,
      `bus travel ${origin} to ${destination}`,
      `bus journey ${origin} to ${destination}`,
      `bus trip ${origin} to ${destination}`,
      `bus tour ${origin} to ${destination}`,
      `bus transport ${origin} to ${destination}`,
      `bus transportation ${origin} to ${destination}`,
      `bus transfer ${origin} to ${destination}`,
      `bus shuttle ${origin} to ${destination}`,
      `intercity bus ${origin} to ${destination}`,
      `interstate bus ${origin} to ${destination}`,
      `long distance bus ${origin} to ${destination}`,
      `outstation bus ${origin} to ${destination}`,
      `highway bus ${origin} to ${destination}`,
      `express bus ${origin} to ${destination}`,
      `deluxe bus ${origin} to ${destination}`,
      `super deluxe bus ${origin} to ${destination}`,
      `semi sleeper bus ${origin} to ${destination}`,
      `seater bus ${origin} to ${destination}`,
      `non ac bus ${origin} to ${destination}`,
      `air conditioned bus ${origin} to ${destination}`,
      `climate control bus ${origin} to ${destination}`,
      `modern bus ${origin} to ${destination}`,
      `new bus ${origin} to ${destination}`,
      `latest bus ${origin} to ${destination}`,
      `luxury travel bus ${origin} to ${destination}`,
      `premium travel bus ${origin} to ${destination}`,
      `comfortable travel bus ${origin} to ${destination}`,
      `safe travel bus ${origin} to ${destination}`,
      `secure bus service ${origin} to ${destination}`,
      `verified bus service ${origin} to ${destination}`,
      `licensed bus service ${origin} to ${destination}`,
      `insured bus service ${origin} to ${destination}`,
      `24x7 bus service ${origin} to ${destination}`,
      `24/7 bus booking ${origin} to ${destination}`,
      `customer support bus ${origin} to ${destination}`,
      `bus near me ${origin} to ${destination}`,
      `local bus service ${origin} to ${destination}`,
      `bus operator ${origin} to ${destination}`,
      `bus company ${origin} to ${destination}`,
      `bus provider ${origin} to ${destination}`,
      `bus vendor ${origin} to ${destination}`,
      `bus agency ${origin} to ${destination}`,
      `bus service provider ${origin} to ${destination}`,
      `top bus rental ${origin} to ${destination}`,
      `leading bus service ${origin} to ${destination}`,
      `trusted bus service ${origin} to ${destination}`,
      `recommended bus service ${origin} to ${destination}`,
      `popular bus service ${origin} to ${destination}`,
      `rated bus service ${origin} to ${destination}`,
      `reviewed bus service ${origin} to ${destination}`,
      `bus reviews ${origin} to ${destination}`,
      `bus ratings ${origin} to ${destination}`,
      `bus testimonials ${origin} to ${destination}`,
      `bus feedback ${origin} to ${destination}`
    ].join(', '),
    alternates: {
      canonical: `https://trivenicabs.in/bus-routes/${route}`
    },
    openGraph: {
      title: `Big Groups Travel Better! ${originFormatted} to ${destinationFormatted} Luxury Bus | 22-56 Seater`,
      description: `🚌 22-56 seater Volvo & AC buses | Reclining seats • Entertainment • GPS tracking. 1000+ groups trusted us. Book now & save 20%!`,
      url: `https://trivenicabs.in/bus-routes/${route}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [
        {
          url: 'https://trivenicabs.in/images/bus/hero_section_image.png',
          width: 1200,
          height: 630,
          alt: `${originFormatted} to ${destinationFormatted} Bus Service - Triveni Cabs`,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${originFormatted} to ${destinationFormatted} Luxury Bus | 22-56 Seater`,
      description: `🚌 Volvo comfort • AC • Entertainment. Perfect for corporate, weddings & tours. Book now!`,
      images: ['https://trivenicabs.in/images/bus/hero_section_image.png']
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Triveni Cabs - Bus Rental Services' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs India',
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

  const routeData = findRouteData(originFormatted, destinationFormatted);
  const destinationSightseeing = localSightseeing?.[destinationFormatted] || [];
  const detailedRouteInfo = getDetailedRouteInfo();

  // Prepare data for client component
  const pageData = {
    routeSlug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    routeData: routeData,
    localSightseeing: destinationSightseeing,
    fleet: busFleet,
    detailedRouteInfo: detailedRouteInfo
  };

  // JSON-LD Structured Data for specific route
  const busRouteSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": `${originFormatted} to ${destinationFormatted} Bus Service`,
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
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "info@trivenicabs.in",
      "url": "https://trivenicabs.in"
    },
    ...(routeData.distance !== 'Contact for details' && { "distance": routeData.distance }),
    ...(routeData.duration !== 'Contact for details' && { "duration": routeData.duration })
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${originFormatted} to ${destinationFormatted} Bus Rental Service`,
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
      "url": `https://trivenicabs.in/bus-routes/${route}`,
      "seller": {
        "@type": "Organization",
        "name": "Triveni Cabs"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "350",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bus Routes",
        "item": "https://trivenicabs.in/bus-routes"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${originFormatted} to ${destinationFormatted}`,
        "item": `https://trivenicabs.in/bus-routes/${route}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
      }
    ]
  };

  return (
    <>
      <Script
        id="bus-route-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busRouteSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      <DynamicBusRoutesClient data={pageData} />
    </>
  );
}
