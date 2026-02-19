// src/app/[cityName]/page.js - COMPLETE ENHANCED VERSION

import { notFound } from 'next/navigation';
import Script from 'next/script';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;
import { cities, vehiclesServices, cityDetails, touristSpots } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes, defaultRoutes } from "@/utilis/cityRoutesData";
// Dynamic import for keywords to reduce initial bundle size (37K+ lines)
// import { getAllKeywordsForPage } from "@/utilis/enhancedKeywords";
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
  // Convert hyphens to spaces for both city name and destination
  const cityName = parts[0].replace(/-/g, ' ');
  const destination = parts[1].replace(/-/g, ' ');
  return { cityName, destination };
}

export function createRouteSlug(cityName, destination) {
  if (!cityName || !destination) return '';
  return `${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
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
    const cityName = city.name.toLowerCase().replace(/\s+/g, '-');
    params.push({ cityName: cityName });
    // Use original city name from data (already properly formatted)
    const formattedCityName = city.name;
    const routes = allCityRoutes[formattedCityName] || defaultRoutes[formattedCityName] || [];
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
    // Properly capitalize multi-word city names (e.g., "jim corbett" -> "Jim Corbett")
    const formattedCityName = originCity.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const formattedDestination = destination.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const routes = allCityRoutes[formattedCityName] || defaultRoutes[formattedCityName] || [];
    const route = Array.isArray(routes) ? routes.find(r => r && r.destination && r.destination.toLowerCase() === formattedDestination.toLowerCase()) : null;
    const startingPrice = route?.prices?.[0]?.price || "₹2760";

    // Get ALL keywords for this route (dynamically imported to reduce bundle)
    const { getAllKeywordsForPage } = await import("@/utilis/enhancedKeywords");
    const allKeywords = getAllKeywordsForPage(formattedCityName, formattedDestination);

    // Title under 60 chars, Description under 155 chars (Google guidelines)
    const enhancedTitle = `${formattedCityName} to ${formattedDestination} Cab ${startingPrice} | 24/7 Taxi`;
    const enhancedDescription = `Book ${formattedCityName} to ${formattedDestination} cab at ${startingPrice}. AC vehicles, verified drivers, 24/7 booking. Call 7668570551.`;

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
        title: `${formattedCityName} to ${formattedDestination} Cab | ${startingPrice} | 24x7 Booking`,
        description: `Book ${formattedCityName} to ${formattedDestination} cab service. AC vehicles, verified drivers, GPS tracking. Starting ${startingPrice}. Call 7668570551!`,
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

    // Get ALL keywords for this city (dynamically imported to reduce bundle)
    const { getAllKeywordsForPage } = await import("@/utilis/enhancedKeywords");
    const allKeywords = getAllKeywordsForPage(formattedCityName);

    const enhancedCityTitle = `Taxi Service in ${formattedCityName} | 24x7 Cab Booking | Car Rental & Outstation Tours`;
    const enhancedCityDescription = `Book trusted taxi service in ${formattedCityName} for outstation trips, local tours, airport transfers & wedding car rentals. Professional verified drivers, AC vehicles, GPS tracking, 24/7 availability, transparent pricing. Safe & affordable cab service. Call 7668570551!`;

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
        title: `Taxi Service in ${formattedCityName} | Cab Booking Online | Triveni Cabs`,
        description: `Book taxi in ${formattedCityName} for outstation, local trips & airport transfers. Professional drivers, AC vehicles, 24x7 service. Call 7668570551!`,
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
        title: `Taxi Service ${formattedCityName} | Book Online | Triveni Cabs`,
        description: `Book taxi in ${formattedCityName} - Outstation, local tours, airport transfers. 24x7 service. Call 7668570551!`,
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
    // Properly capitalize multi-word city names (e.g., "jim corbett" -> "Jim Corbett")
    const formattedCityName = originCity.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const formattedDestination = destination.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const cityExists = cities.some(city => city.name.toLowerCase() === originCity.toLowerCase());
    if (!cityExists) { notFound(); }
    
    const routes = allCityRoutes[formattedCityName] || defaultRoutes[formattedCityName] || [];
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
        "email": "cabstriveni@gmail.com",
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
          "item": `https://www.trivenicabs.in/${originCity.toLowerCase().replace(/\s+/g, '-')}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${formattedCityName} to ${formattedDestination}`,
          "item": `https://www.trivenicabs.in/${cityName}`
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
    // Convert hyphenated URL slug to properly capitalized city name (e.g., "jim-corbett" -> "Jim Corbett")
    const formattedCityName = cityName.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const cityExists = cities.some(city => city.name.toLowerCase() === formattedCityName.toLowerCase());
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
      "email": "cabstriveni@gmail.com",
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