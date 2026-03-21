// src/app/tempo-traveller/[route]/page.js

import { tempoFleet, tempoRoutes, localSightseeing, tempoCities, routeDescriptions } from '@/utilis/tempoTravellerData';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = false;
export const dynamicParams = false;
import { chardhamRoutes } from '@/utilis/chardhamData';
import { generateTempoMetadata } from '@/lib/seo/metadata-factory';
import DynamicTempoRoutesClient from '@/components/DynamicTempoRoutes';
import TempoCityClient from '@/components/TempoCityClient';
import ChardhamTempoClient from '@/components/ChardhamTempoClient';
import AEOHead from '@/components/seo/AEOHead';

// Helper to check if slug is a Chardham route
function isChardhamSlug(slug) {
  return chardhamRoutes.some(route => route.slug === slug);
}

// Helper to get Chardham data by slug
function getChardhamBySlug(slug) {
  return chardhamRoutes.find(route => route.slug === slug);
}

// Helper to check if slug is a city
function isCitySlug(slug) {
  return Object.values(tempoCities).some(city => city.slug === slug);
}

// Helper to get city data by slug
function getCityBySlug(slug) {
  return Object.entries(tempoCities).find(([_, city]) => city.slug === slug);
}

export async function generateStaticParams() {
  // Generate static params for cities
  const cityParams = Object.values(tempoCities).map(city => ({
    route: city.slug,
  }));

  // Generate static params for ALL routes from tempoRoutes data
  const routeParams = [];
  Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
    destinations.forEach(dest => {
      const routeSlug = `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`;
      routeParams.push({ route: routeSlug });
    });
  });

  const chardhamParams = chardhamRoutes.map(route => ({
    route: route.slug
  }));

  return [...cityParams, ...routeParams, ...chardhamParams];
}

export async function generateMetadata({ params }) {
  // Await params in Next.js 15
  const resolvedParams = await params;
  const { route } = resolvedParams;

  // Add null check
  if (!route) {
    return {
      title: 'Tempo Traveller Service | Premium Group Travel',
      description: 'Book premium tempo travellers for comfortable group travel across India.'
    };
  }

  // Check if it's a Chardham page
  if (isChardhamSlug(route)) {
    const chardhamData = getChardhamBySlug(route);
    const startingPrice = chardhamData.packages?.[0]?.price || '₹70,000';

    // Concise title (under 60 chars) per Google guidelines
    const pageTitle = `${chardhamData.origin} to Chardham Yatra Tempo | ${startingPrice}`;

    // Meta description under 160 chars, unique and descriptive
    const pageDescription = `Book ${chardhamData.origin} to Chardham Yatra by tempo traveller. ${chardhamData.duration} package covering Kedarnath, Badrinath, Gangotri, Yamunotri. AC vehicles, experienced drivers.`;

    return {
      title: pageTitle,
      description: pageDescription,
      applicationName: 'Triveni Cabs',
      authors: [{ name: 'Triveni Cabs' }],
      creator: 'Triveni Cabs',
      publisher: 'Triveni Cabs',
      metadataBase: new URL('https://www.trivenicabs.in'),
      alternates: {
        canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      },
      openGraph: {
        title: `${chardhamData.title} | Book Online`,
        description: pageDescription,
        url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs',
        images: [
          {
            url: chardhamData.images?.hero || '/images/tempo_hero_section.jpg',
            width: 1200,
            height: 630,
            alt: `${chardhamData.title} - Tempo Traveller Service`,
            type: 'image/jpeg',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: pageTitle,
        description: `${chardhamData.duration} pilgrimage package. AC tempo with driver. Call +91-7668570551`,
        site: '@trivenicabs',
        images: [chardhamData.images?.hero || '/images/tempo_hero_section.jpg'],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
        },
      },
      category: 'Travel',
    };
  }

  // Check if it's a city page
  if (isCitySlug(route)) {
    const [cityName, cityData] = getCityBySlug(route);
    const routeCount = tempoRoutes[cityName]?.length || 0;

    return {
      // Title under 60 chars, Description under 155 chars
      title: `Tempo Traveller in ${cityData.name} | 12-26 Seater ₹23/km`,
      description: `Book tempo traveller in ${cityData.name}. 12-26 seater AC vehicles, ₹23-27/km. ${routeCount}+ routes available. Call 7668570551.`,
      applicationName: 'Triveni Cabs',
      metadataBase: new URL('https://www.trivenicabs.in'),
      alternates: {
        canonical: `https://www.trivenicabs.in/tempo-traveller/${route}`,
      },
      openGraph: {
        title: `Tempo Traveller from ${cityData.name} | ${routeCount} Destinations | Book Online`,
        description: `${cityData.tagline} - Book tempo traveller from ${cityData.name} to ${cityData.popularDestinations.join(', ')} and more. ₹23-27/km all-inclusive.`,
        url: `https://www.trivenicabs.in/tempo-traveller/${route}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs - Tempo Traveller Rental',
        images: [
          {
            url: '/images/tempo_hero_section.jpg',
            width: 1200,
            height: 630,
            alt: `Tempo Traveller on Rent from ${cityData.name} - Triveni Cabs`,
            type: 'image/jpeg',
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title: `Tempo Traveller from ${cityData.name} | ${routeCount} Destinations | ₹23/km`,
        description: `${cityData.tagline} | Book tempo traveller to ${cityData.popularDestinations.join(', ')} | Call +91-7668570551`,
        site: '@trivenicabs',
        images: ['/images/tempo_hero_section.jpg'],
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
      category: 'Travel & Transportation',
    };
  }

  // It's a route page
  const routeParts = route.split('-to-');
  if (routeParts.length !== 2) {
    return {
      title: 'Tempo Traveller Service | Premium Group Travel',
      description: 'Book premium tempo travellers for comfortable group travel across India.'
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

  return generateTempoMetadata({
    origin: originFormatted,
    destination: destinationFormatted,
    price: '23/km',
    seats: '12-26',
    slug: route
  });
}

export default async function TempoTravellerRoutePage({ params }) {
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

  // Check if it's a Chardham page
  if (isChardhamSlug(route)) {
    const chardhamData = getChardhamBySlug(route);
    const startingPrice = chardhamData.packages?.[0]?.price || '₹70,000';

    // Service schema for pilgrimage transport - per Google guidelines
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Pilgrimage Transport Service",
      "name": `${chardhamData.title} by Tempo Traveller`,
      "description": chardhamData.description,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Triveni Cabs",
        "telephone": "+91-7668570551",
        "email": "cabstriveni@gmail.com",
        "url": "https://www.trivenicabs.in",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Delhi",
          "addressRegion": "Delhi",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹"
      },
      "areaServed": {
        "@type": "State",
        "name": "Uttarakhand"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": startingPrice.replace('₹', '').replace(',', ''),
        "priceCurrency": "INR",
        "offerCount": chardhamData.packages?.length || 5
      }
    };

    // BreadcrumbList schema
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
          "name": "Tempo Traveller",
          "item": "https://www.trivenicabs.in/tempo-traveller"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": chardhamData.title,
          "item": `https://www.trivenicabs.in/tempo-traveller/${route}`
        }
      ]
    };

    // FAQPage schema - only if FAQs exist (per Google guidelines)
    const faqSchema = chardhamData.faqs && chardhamData.faqs.length > 0 ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": chardhamData.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    } : null;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        <AEOHead pageType="tour" data={{ url: `/tempo-traveller/${route}`, title: `Chardham ${chardhamData.name} Tempo Traveller` }} />
        <ChardhamTempoClient data={chardhamData} />
      </>
    );
  }

  // Check if it's a city page
  if (isCitySlug(route)) {
    const [cityName, cityData] = getCityBySlug(route);
    const cityRoutes = tempoRoutes[cityName] || [];

    // Prepare all cities data for "Other Cities" section
    const allCitiesData = Object.entries(tempoCities).map(([name, data]) => ({
      ...data,
      routeCount: tempoRoutes[name]?.length || 0
    }));

    const pageData = {
      cityData: cityData,
      routes: cityRoutes,
      fleet: tempoFleet,
      allCities: allCitiesData
    };

    // City page schemas
    const cityBreadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
        { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
        { "@type": "ListItem", "position": 3, "name": `Tempo Traveller in ${cityData.name}`, "item": `https://www.trivenicabs.in/tempo-traveller/${route}` }
      ]
    };

    const cityServiceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Tempo Traveller Rental",
      "name": `Tempo Traveller on Rent in ${cityData.name}`,
      "description": `Book 12-26 seater AC tempo traveller in ${cityData.name}. ${cityRoutes.length}+ routes to ${cityData.popularDestinations.join(', ')} and more. From ₹23/km all-inclusive.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Triveni Cabs",
        "telephone": "+91-7668570551",
        "url": "https://www.trivenicabs.in",
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "10000",
          "bestRating": "5"
        }
      },
      "areaServed": { "@type": "City", "name": cityData.name },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "23",
        "highPrice": "28",
        "priceCurrency": "INR",
        "offerCount": cityRoutes.length
      }
    };

    const cityItemListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `Tempo Traveller Routes from ${cityData.name}`,
      "numberOfItems": cityRoutes.length,
      "itemListElement": cityRoutes.slice(0, 10).map((r, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${cityData.name} to ${r.name} Tempo Traveller`,
        "url": `https://www.trivenicabs.in/tempo-traveller/${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`
      }))
    };

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBreadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cityItemListSchema) }} />
        <AEOHead pageType="tempo" data={{ url: `/tempo-traveller/${route}`, title: `${cityData.name} Tempo Traveller`, city: cityData.name }} />
        <TempoCityClient data={pageData} />
      </>
    );
  }

  // It's a route page
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
    if (tempoRoutes[originCity]) {
      const routeInfo = tempoRoutes[originCity].find(r =>
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
      origin: originCity,
      destination: destinationCity,
      exists: false
    };
  };

  // Check if tourist spots are available for the destination
  const hasTouristSpots = (city) => {
    const spotsAvailable = ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Haridwar', 'Rishikesh', 'Shimla', 'Manali', 'Amritsar', 'Lucknow', 'Varanasi', 'Jodhpur', 'Ayodhya'];
    return spotsAvailable.includes(city);
  };

  const routeData = findRouteData(originFormatted, destinationFormatted);
  const destinationSightseeing = localSightseeing?.[destinationFormatted] || [];

  // Get related routes from the same origin for internal linking
  const relatedRoutes = (tempoRoutes[originFormatted] || [])
    .filter(r => r.name.toLowerCase() !== destinationFormatted.toLowerCase())
    .slice(0, 6)
    .map(r => ({
      name: r.name,
      type: r.type,
      slug: `${originFormatted.toLowerCase().replace(/\s+/g, '-')}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`
    }));

  // Prepare data for client component
  const pageData = {
    routeSlug: route,
    origin: originFormatted,
    destination: destinationFormatted,
    routeData: routeData,
    hasTouristSpots: hasTouristSpots(destinationFormatted),
    localSightseeing: destinationSightseeing,
    fleet: tempoFleet,
    relatedRoutes: relatedRoutes
  };

  // Get route description for enriched schema data
  const routeDesc = routeDescriptions[route] || null;

  // TravelAction schema
  const travelActionSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAction",
    "name": `${originFormatted} to ${destinationFormatted} Tempo Traveller Service`,
    "description": `Premium tempo traveller rental from ${originFormatted} to ${destinationFormatted}. 12 to 26 seater AC tempo with pushback seats, professional drivers, and GPS tracking.`,
    "fromLocation": {
      "@type": "Place",
      "name": originFormatted,
      "address": { "@type": "PostalAddress", "addressCountry": "IN" }
    },
    "toLocation": {
      "@type": "Place",
      "name": destinationFormatted,
      "address": { "@type": "PostalAddress", "addressCountry": "IN" }
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    ...(routeDesc?.distance && { "distance": routeDesc.distance }),
    ...(routeDesc?.travelTime && { "duration": routeDesc.travelTime })
  };

  // Product schema with pricing and rating
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${originFormatted} to ${destinationFormatted} Tempo Traveller Rental`,
    "description": `Book tempo traveller from ${originFormatted} to ${destinationFormatted}. Available in 12, 14, 17, 20, and 26 seater options. All vehicles AC with pushback seats, music system, and GPS tracking.`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "23",
      "highPrice": "28",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "INR",
        "unitText": "per kilometer"
      },
      "availability": "https://schema.org/InStock",
      "url": `https://www.trivenicabs.in/tempo-traveller/${route}`,
      "seller": { "@type": "Organization", "name": "Triveni Cabs" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
      { "@type": "ListItem", "position": 3, "name": `${originFormatted} to ${destinationFormatted}`, "item": `https://www.trivenicabs.in/tempo-traveller/${route}` }
    ]
  };

  // FAQPage schema — route-specific long-tail keyword targeting
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the fare for ${originFormatted} to ${destinationFormatted} tempo traveller?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Tempo traveller fare from ${originFormatted} to ${destinationFormatted} starts at ₹23/km for 12 seater and goes up to ₹28/km for 26 seater AC tempo. ${routeDesc?.distance ? `The total distance is approximately ${routeDesc.distance}.` : ''} Price includes driver, fuel, and AC. Toll and parking extra. Call 7668570551 for exact quote.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does ${originFormatted} to ${destinationFormatted} take by tempo traveller?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": routeDesc?.travelTime
            ? `The journey from ${originFormatted} to ${destinationFormatted} by tempo traveller takes approximately ${routeDesc.travelTime}, depending on traffic and road conditions.`
            : `The travel time from ${originFormatted} to ${destinationFormatted} by tempo traveller depends on the route and traffic. Contact us at 7668570551 for estimated travel time.`
        }
      },
      {
        "@type": "Question",
        "name": `What tempo traveller sizes are available for ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer 12 seater, 14 seater, 17 seater, 20 seater, and 26 seater tempo travellers for ${originFormatted} to ${destinationFormatted}. All are AC with pushback seats, music system, charging points, and GPS tracking. 17 seater is most popular for this route.`
        }
      },
      {
        "@type": "Question",
        "name": `Is it safe to travel ${originFormatted} to ${destinationFormatted} by tempo traveller?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, absolutely safe. All our tempo travellers for ${originFormatted} to ${destinationFormatted} come with experienced drivers (10+ years), GPS tracking, first-aid kit, and 24/7 roadside assistance. Vehicles are regularly serviced and inspected.`
        }
      },
      {
        "@type": "Question",
        "name": `Can I book ${originFormatted} to ${destinationFormatted} tempo traveller for a round trip?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, we offer both one-way and round trip tempo traveller bookings from ${originFormatted} to ${destinationFormatted}. Round trips get better per-km rates. Multi-day trips with sightseeing stops are also available. Call 7668570551 or WhatsApp for custom itineraries.`
        }
      },
      {
        "@type": "Question",
        "name": `What is the best time to travel from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": routeDesc?.bestSeason
            ? `The best time to travel from ${originFormatted} to ${destinationFormatted} is ${routeDesc.bestSeason}. We recommend starting early morning for the most comfortable journey.`
            : `${originFormatted} to ${destinationFormatted} can be traveled year-round. We recommend starting early morning for the best experience. Contact us for seasonal travel advice.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide overnight tempo traveller from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes, overnight tempo traveller service is available from ${originFormatted} to ${destinationFormatted}. Our experienced drivers are comfortable with night driving. For long routes, we provide two drivers for safety. Driver night charges apply for overnight journeys.`
        }
      },
      {
        "@type": "Question",
        "name": `How do I book a tempo traveller from ${originFormatted} to ${destinationFormatted}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Booking is easy: Call +91-7668570551 or WhatsApp us with your travel date, pickup location in ${originFormatted}, group size, and any sightseeing stops needed. We confirm within 15 minutes with driver details and vehicle photos. No advance payment needed for most bookings.`
        }
      }
    ]
  };

  // HowTo schema for booking
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Book Tempo Traveller from ${originFormatted} to ${destinationFormatted}`,
    "description": `Step-by-step guide to book tempo traveller for ${originFormatted} to ${destinationFormatted} trip`,
    "totalTime": "PT5M",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Choose Your Vehicle", "text": `Select from 12 to 26 seater tempo travellers for your ${originFormatted} to ${destinationFormatted} journey based on group size` },
      { "@type": "HowToStep", "position": 2, "name": "Call or WhatsApp", "text": "Contact us at +91-7668570551 or WhatsApp for instant booking and price quote" },
      { "@type": "HowToStep", "position": 3, "name": "Share Trip Details", "text": `Provide travel date, pickup location in ${originFormatted}, number of passengers, and any sightseeing stops` },
      { "@type": "HowToStep", "position": 4, "name": "Get Instant Confirmation", "text": "Receive booking confirmation with driver name, photo, vehicle number, and GPS tracking link within 15 minutes" }
    ]
  };

  return (
    <>
      <script
        id="tempo-travel-action"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelActionSchema) }}
      />
      <script
        id="tempo-product"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        id="tempo-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="tempo-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        id="tempo-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <AEOHead pageType="tempo" data={{ url: `/tempo-traveller/${route}`, title: `Tempo Traveller ${originFormatted} to ${destinationFormatted}`, origin: originFormatted, destination: destinationFormatted, city: originFormatted }} />
      <DynamicTempoRoutesClient data={pageData} />
    </>
  );
}