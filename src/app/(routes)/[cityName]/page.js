// src/app/[cityName]/page.js - COMPLETE ENHANCED VERSION

import { notFound } from 'next/navigation';
import Script from 'next/script';
import { cities, vehiclesServices, cityDetails, touristSpots } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes, defaultRoutes } from "@/utilis/cityRoutesData";
import { getAllKeywordsForPage } from "@/utilis/enhancedKeywords";
import { getCityLocalInfo } from "@/utilis/cityLocalInfo";
import CityServiceClient from "@/components/cities/CityServiceClient";
import RouteClientContent from "./RouteClientContent";
import CityLocalInfoSection from "@/components/cities/CityLocalInfoSection";

const allCityRoutes = {
  ...cityRoutesData,
  ...basicCityRoutes
};

// Reserved route names that should NEVER be handled by this dynamic route
// These are static routes that should be served by their own page.js files
const RESERVED_ROUTES = [
  'services', 'about', 'contact', 'blog', 'wedding', 'destinations',
  'car-rental', 'tour-guide', 'tour-package', 'vehicles', 'tourist-spots',
  'airport-service', 'religious-tours', 'tempo-traveller', 'terms-and-conditions',
  'cancellation-and-refund-policy', 'sightseeing', 'routes', 'bus-routes',
  'tourist-attractions'
];

function parseRouteSlug(slug) {
  const parts = slug.split('-to-');
  if (parts.length !== 2) return null;
  const cityName = parts[0];
  const destination = parts[1].replace(/-/g, ' ');
  return { cityName, destination };
}

export function createRouteSlug(cityName, destination) {
  if (!cityName || !destination) return '';
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

export async function generateStaticParams() {
  const params = [];
  if (!Array.isArray(cities)) {
    console.error("Cities is not an array:", cities);
    return params;
  }
  cities.forEach(city => {
    if (!city || !city.name) {
      console.error("Invalid city object:", city);
      return;
    }
    const cityName = city.name.toLowerCase();
    params.push({ cityName: cityName });
    const formattedCityName = city.name.charAt(0).toUpperCase() + city.name.slice(1);
    const routes = allCityRoutes[formattedCityName] || [];
    if (Array.isArray(routes)) {
      routes.forEach(route => {
        if (route && route.destination) {
          params.push({ cityName: createRouteSlug(cityName, route.destination) });
        }
      });
    }
  });
  console.log(`Generated ${params.length} static params`);
  return params;
}

export async function generateMetadata({ params }) {
  const { cityName } = params;
  const routeData = parseRouteSlug(cityName);

  if (routeData) {
    // ROUTE PAGE METADATA
    const { cityName: originCity, destination } = routeData;
    const formattedCityName = originCity.charAt(0).toUpperCase() + originCity.slice(1);
    const formattedDestination = destination.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const routes = allCityRoutes[formattedCityName] || [];
    const route = Array.isArray(routes) ? routes.find(r => r && r.destination && r.destination.toLowerCase() === formattedDestination.toLowerCase()) : null;
    const startingPrice = route?.prices?.[0]?.price || "₹2760";

    // Get ALL keywords for this route
    const allKeywords = getAllKeywordsForPage(formattedCityName, formattedDestination);

    const enhancedTitle = `Book ${formattedCityName} to ${formattedDestination} Cab Service Online | Starting ${startingPrice} | 24x7 Taxi Booking - Triveni Cabs`;
    const enhancedDescription = `Book reliable ${formattedCityName} to ${formattedDestination} cab service online. ✅ Professional drivers ✅ AC vehicles ✅ GPS tracking ✅ 24/7 availability ✅ Transparent pricing from ${startingPrice}. One-way, round trip & outstation taxi booking available. Safe, comfortable & affordable car rental service.`;

    return {
      title: enhancedTitle,
      description: enhancedDescription,
      keywords: allKeywords.join(', '),
      authors: [{ name: 'Triveni Cabs' }],
      creator: 'Triveni Cabs',
      publisher: 'Triveni Cabs',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL('https://www.trivenicabs.in'),
      openGraph: {
        title: `${formattedCityName} to ${formattedDestination} Taxi Service | Book Online at ${startingPrice} | Triveni Cabs`,
        description: `Professional cab service from ${formattedCityName} to ${formattedDestination}. AC vehicles, verified drivers, GPS tracking, transparent pricing. Book your taxi now!`,
        type: 'website',
        locale: 'en_IN',
        url: `https://www.trivenicabs.in/${cityName}`,
        siteName: 'Triveni Cabs - Premium Taxi Service India',
        images: [{
          url: 'https://www.trivenicabs.in/images/car/car1.webp',
          width: 1200,
          height: 630,
          alt: `${formattedCityName} to ${formattedDestination} cab service - Professional taxi booking`
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: `${formattedCityName} to ${formattedDestination} Cab Service - Starting ${startingPrice}`,
        description: `Book reliable taxi from ${formattedCityName} to ${formattedDestination}. Professional drivers, AC vehicles, 24x7 service.`,
        images: ['https://www.trivenicabs.in/images/car/car1.webp'],
        creator: '@TriveniCabs',
        site: '@TriveniCabs',
      },
      alternates: {
        canonical: `https://www.trivenicabs.in/${cityName}`,
        languages: {
          'en-IN': `https://www.trivenicabs.in/${cityName}`,
          'hi-IN': `https://www.trivenicabs.in/${cityName}`,
        },
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
      category: 'Transportation',
      classification: 'Taxi Service',
      other: {
        'geo.region': 'IN',
        'geo.placename': `${formattedCityName}, ${formattedDestination}`,
        'price:currency': 'INR',
        'price:amount': startingPrice.replace('₹', ''),
        'availability': 'in stock',
        'rating': '4.8',
        'review_count': '1250',
      }
    };
  } else {
    // CITY PAGE METADATA
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    // Get ALL keywords for this city
    const allKeywords = getAllKeywordsForPage(formattedCityName);

    const enhancedCityTitle = `#1 Taxi Service in ${formattedCityName} | 24x7 Cab Booking | Car Rental & Outstation Tours - Triveni Cabs`;
    const enhancedCityDescription = `Book the best taxi service in ${formattedCityName} for outstation trips, local tours, airport transfers & wedding car rentals. ✅ Professional verified drivers ✅ AC vehicles ✅ GPS tracking ✅ 24/7 availability ✅ Transparent pricing ✅ Instant booking. Safe, reliable & affordable cab service.`;

    return {
      title: enhancedCityTitle,
      description: enhancedCityDescription,
      keywords: allKeywords.join(', '),
      authors: [{ name: 'Triveni Cabs' }],
      creator: 'Triveni Cabs',
      publisher: 'Triveni Cabs',
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      metadataBase: new URL('https://www.trivenicabs.in'),
      openGraph: {
        title: `Best Taxi Service in ${formattedCityName} | Professional Cab Booking - Triveni Cabs`,
        description: `Reliable taxi service in ${formattedCityName}. Book cabs for outstation, local trips, and special occasions. Professional drivers, transparent pricing, 24x7 service.`,
        type: 'website',
        locale: 'en_IN',
        url: `https://www.trivenicabs.in/${cityName}`,
        siteName: 'Triveni Cabs - Premium Taxi Service India',
        images: [{
          url: 'https://www.trivenicabs.in/images/car/car2.webp',
          width: 1200,
          height: 630,
          alt: `Professional taxi service in ${formattedCityName} - Triveni Cabs`
        }]
      },
      twitter: {
        card: 'summary_large_image',
        title: `Best Taxi Service in ${formattedCityName} | Triveni Cabs`,
        description: `Professional taxi service in ${formattedCityName}. Outstation trips, local tours, airport transfers. Book now!`,
        images: ['https://www.trivenicabs.in/images/car/car2.webp'],
        creator: '@TriveniCabs',
        site: '@TriveniCabs',
      },
      alternates: {
        canonical: `https://www.trivenicabs.in/${cityName}`,
        languages: {
          'en-IN': `https://www.trivenicabs.in/${cityName}`,
          'hi-IN': `https://www.trivenicabs.in/${cityName}`,
        },
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
      category: 'Transportation',
      classification: 'Taxi Service',
      other: {
        'geo.region': 'IN',
        'geo.placename': formattedCityName,
        'availability': 'in stock',
        'rating': '4.8',
        'review_count': '1250',
      }
    };
  }
}

export default function CityNamePage({ params }) {
  const { cityName } = params;

  // CRITICAL: Block reserved routes from being handled by this dynamic route
  // This prevents "/services", "/about", etc. from being caught here
  if (RESERVED_ROUTES.includes(cityName.toLowerCase())) {
    notFound();
  }

  const routeData = parseRouteSlug(cityName);

  if (routeData) {
    const { cityName: originCity, destination} = routeData;
    const formattedCityName = originCity.charAt(0).toUpperCase() + originCity.slice(1);
    const formattedDestination = destination.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const cityExists = cities.some(city => city.name.toLowerCase() === originCity.toLowerCase());
    if (!cityExists) { notFound(); }
    
    const routes = allCityRoutes[formattedCityName] || defaultRoutes || [];
    const route = Array.isArray(routes) ? routes.find(r => r && r.destination && r.destination.toLowerCase() === formattedDestination.toLowerCase()) : null;
    
    if (!route) { notFound(); }
    
    const estimatedDistance = route.distance || `${Math.floor(Math.random() * 200) + 150} km`;
    const estimatedTime = route.time || `${Math.floor(Math.random() * 4) + 3} hours`;
    const startingPrice = route?.prices?.[0]?.price || "₹2760";

    // Route Page Structured Data
    const routeServiceSchema = {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": `Triveni Cabs - ${formattedCityName} to ${formattedDestination} Taxi Service`,
      "description": `Professional cab service from ${formattedCityName} to ${formattedDestination}. AC vehicles, verified drivers, GPS tracking, 24/7 availability.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "Triveni Cabs",
        "telephone": "+91-7668570551",
        "email": "info@trivenicabs.in",
        "url": "https://www.trivenicabs.in",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "1250"
        }
      },
      "areaServed": [
        {"@type": "City", "name": formattedCityName},
        {"@type": "City", "name": formattedDestination}
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `https://www.trivenicabs.in/${cityName}`,
        "servicePhone": "+91-7668570551",
        "availableLanguage": ["English", "Hindi"]
      }
    };

    const routeTripSchema = {
      "@context": "https://schema.org",
      "@type": "TravelAction",
      "name": `${formattedCityName} to ${formattedDestination} Cab Service`,
      "description": `Book reliable taxi from ${formattedCityName} to ${formattedDestination}. Distance: ${estimatedDistance}, Duration: ${estimatedTime}`,
      "fromLocation": {
        "@type": "Place",
        "name": formattedCityName,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": formattedCityName,
          "addressCountry": "IN"
        }
      },
      "toLocation": {
        "@type": "Place",
        "name": formattedDestination,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": formattedDestination,
          "addressCountry": "IN"
        }
      },
      "distance": estimatedDistance,
      "provider": {
        "@type": "Organization",
        "name": "Triveni Cabs",
        "url": "https://www.trivenicabs.in"
      }
    };

    const routeBreadcrumbSchema = {
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
          "name": formattedCityName,
          "item": `https://www.trivenicabs.in/${originCity.toLowerCase()}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${formattedCityName} to ${formattedDestination}`,
          "item": `https://www.trivenicabs.in/${cityName}`
        }
      ]
    };

    const routeFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How much does a cab from ${formattedCityName} to ${formattedDestination} cost?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Cab fare from ${formattedCityName} to ${formattedDestination} starts from ${startingPrice}. The final cost depends on vehicle type, distance (${estimatedDistance}), and any additional services. We offer transparent pricing with no hidden charges.`
          }
        },
        {
          "@type": "Question",
          "name": `How long does it take to travel from ${formattedCityName} to ${formattedDestination}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `The journey from ${formattedCityName} to ${formattedDestination} typically takes ${estimatedTime}, covering approximately ${estimatedDistance}. Travel time may vary based on traffic and route conditions.`
          }
        },
        {
          "@type": "Question",
          "name": `What types of vehicles are available for ${formattedCityName} to ${formattedDestination} trip?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Sedan (4 seater), SUV (7 seater), and Tempo Traveller (12+ seater) options. All vehicles are AC equipped with professional drivers, GPS tracking, and regularly maintained for your safety and comfort."
          }
        },
        {
          "@type": "Question",
          "name": `Can I book a one-way or round trip from ${formattedCityName} to ${formattedDestination}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer both one-way and round trip bookings. You can also book multi-day packages, hourly rentals, or outstation trips based on your needs. Flexible booking options available 24/7."
          }
        }
      ]
    };

    return (
      <>
        <Script
          id="route-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeServiceSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="route-trip-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeTripSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="route-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeBreadcrumbSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="route-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeFAQSchema) }}
          strategy="beforeInteractive"
        />
        <RouteClientContent
          cityName={originCity}
          formattedCityName={formattedCityName}
          destination={destination.replace(/\s+/g, '-')}
          formattedDestination={formattedDestination}
          estimatedDistance={estimatedDistance}
          estimatedTime={estimatedTime}
          route={route}
          routes={routes}
          vehiclesServices={vehiclesServices}
        />
      </>
    );
  } else {
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    const cityExists = cities.some(city => city.name.toLowerCase() === cityName.toLowerCase());
    if (!cityExists) { notFound(); }
    
    const citySpots = touristSpots[formattedCityName] || [];
    let details = {};
    
    try {
      details = cityDetails[formattedCityName] || cityDetails.Delhi || {
        coverage: {
          fullCoverage: [`${formattedCityName} City Center`, `${formattedCityName} Railway Station`, `${formattedCityName} Airport`, "Major Shopping Areas", "Business Districts"],
          limitedCoverage: ["Remote Suburbs", "Industrial Areas", "Outer Ring Areas"],
          restricted: ["Military Zones", "Restricted Government Areas"]
        },
        peakHours: {
          morning: "7:00 AM - 10:00 AM",
          evening: "5:00 PM - 8:00 PM",
          surcharge: "15-25% extra during peak hours"
        },
        safetyFeatures: ["Real-time GPS Tracking", "Verified Professional Drivers", "24/7 Customer Support", "Regular Vehicle Maintenance", "Emergency SOS Button", "Sanitized Vehicles", "Driver Background Verification", "Live Trip Sharing"],
        popularRoutes: [`${formattedCityName} to Delhi`, `${formattedCityName} Airport Transfer`, `${formattedCityName} Local Sightseeing`, `${formattedCityName} Outstation Tours`]
      };
    } catch (error) {
      console.error("Error accessing city details:", error);
      details = {
        coverage: {
          fullCoverage: [`${formattedCityName} City Center`, `${formattedCityName} Railway Station`, `${formattedCityName} Airport`, "Major Commercial Areas", "Tourist Attractions"],
          limitedCoverage: ["Outer City Areas", "Remote Localities"],
          restricted: ["Restricted Security Zones"]
        },
        peakHours: {
          morning: "8:00 AM - 10:00 AM",
          evening: "5:00 PM - 8:00 PM",
          surcharge: "10-25% extra during peak hours"
        },
        safetyFeatures: ["Professional Verified Drivers", "GPS Vehicle Tracking", "24/7 Customer Support", "Emergency Assistance", "Clean Sanitized Vehicles"],
        popularRoutes: [`${formattedCityName} Local Tours`, `${formattedCityName} Airport Transfer`, `${formattedCityName} to Major Cities`]
      };
    }

    // City Page Structured Data
    const cityServiceSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `Triveni Cabs - ${formattedCityName}`,
      "description": `Professional taxi service in ${formattedCityName}. Outstation trips, local tours, airport transfers, and special occasions. Verified drivers, AC vehicles, GPS tracking, 24/7 availability.`,
      "url": `https://www.trivenicabs.in/${cityName}`,
      "telephone": "+91-7668570551",
      "email": "info@trivenicabs.in",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formattedCityName,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": {
        "@type": "City",
        "name": formattedCityName,
        "addressCountry": "IN"
      }
    };

    const cityTaxiServiceSchema = {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": `${formattedCityName} Taxi Service - Triveni Cabs`,
      "description": `24/7 taxi service in ${formattedCityName}. Book cabs for local trips, outstation tours, airport transfers, and special events.`,
      "provider": {
        "@type": "Organization",
        "name": "Triveni Cabs",
        "url": "https://www.trivenicabs.in",
        "telephone": "+91-7668570551"
      },
      "areaServed": {
        "@type": "City",
        "name": formattedCityName
      },
      "serviceType": ["Taxi Service", "Cab Rental", "Car Rental", "Airport Transfer", "Outstation Taxi"],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `https://www.trivenicabs.in/${cityName}`,
        "servicePhone": "+91-7668570551",
        "availableLanguage": ["English", "Hindi"]
      }
    };

    const cityBreadcrumbSchema = {
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
          "name": formattedCityName,
          "item": `https://www.trivenicabs.in/${cityName}`
        }
      ]
    };

    const cityFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How can I book a taxi in ${formattedCityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `You can book a taxi in ${formattedCityName} through our website trivenicabs.in or by calling +91-7668570551. We offer instant booking, advance reservations, and same-day service with professional drivers.`
          }
        },
        {
          "@type": "Question",
          "name": `What types of cabs are available in ${formattedCityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer Sedan (4 seater), SUV (7 seater), and Tempo Traveller (12+ seater) options. All vehicles are AC equipped, well-maintained, GPS tracked, and driven by verified professional drivers."
          }
        },
        {
          "@type": "Question",
          "name": `Do you provide outstation taxi service from ${formattedCityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, we provide outstation taxi service from ${formattedCityName} to all major cities across India. You can book one-way, round trip, or multi-day packages with flexible pickup and drop-off options.`
          }
        },
        {
          "@type": "Question",
          "name": `Is ${formattedCityName} airport transfer available?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Yes, we provide reliable airport transfer service in ${formattedCityName}. 24/7 availability, flight tracking, meet & greet service, and punctual pickups with professional drivers.`
          }
        },
        {
          "@type": "Question",
          "name": `What are the taxi rates in ${formattedCityName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `Taxi rates in ${formattedCityName} vary based on vehicle type and distance. Sedan starts from ₹12/km, SUV from ₹16/km. We offer transparent pricing with no hidden charges. Contact us for custom packages.`
          }
        }
      ]
    };

    const cityServiceListSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": `${formattedCityName} Taxi Services`,
      "description": `Available taxi services in ${formattedCityName}`,
      "numberOfItems": vehiclesServices.length,
      "itemListElement": vehiclesServices.map((vehicle, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": vehicle.name,
          "description": vehicle.description,
          "offers": {
            "@type": "Offer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    };

    // Get city-specific local information
    const cityLocalInfo = getCityLocalInfo(formattedCityName);

    return (
      <>
        <Script
          id="city-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="city-taxi-service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityTaxiServiceSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="city-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityBreadcrumbSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="city-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityFAQSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="city-service-list-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityServiceListSchema) }}
          strategy="beforeInteractive"
        />
        <CityServiceClient
          formattedCityName={formattedCityName}
          citySpots={citySpots}
          details={details}
          vehiclesServices={vehiclesServices}
          cityLocalInfo={cityLocalInfo}
        />
      </>
    );
  }
}