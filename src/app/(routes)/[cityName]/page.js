// src/app/[cityName]/page.js - COMPLETE ENHANCED VERSION

import { notFound } from 'next/navigation';
import Script from 'next/script';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = false;
export const dynamicParams = false;
import { cities, vehiclesServices, cityDetails, touristSpots } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes, defaultRoutes } from "@/utilis/cityRoutesData";
import { getCityLocalInfo } from "@/utilis/cityLocalInfo";
import { generateRouteMetadata, generateCityHubMetadata } from "@/lib/seo/metadata-factory";
import { generateRouteFAQs, generateCityFAQs } from "@/lib/seo/faq-generator";
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from "@/lib/seo/constants";
import CityServiceClient from "@/components/cities/CityServiceClient";
import RouteClientContent from "./RouteClientContent";
import CityLocalInfoSection from "@/components/cities/CityLocalInfoSection";
import AEOHead from '@/components/seo/AEOHead';

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
    // ROUTE PAGE METADATA — using factory
    const { cityName: originCity, destination } = routeData;
    const formattedCityName = originCity.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const formattedDestination = destination.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const routes = allCityRoutes[formattedCityName] || defaultRoutes[formattedCityName] || [];
    const route = Array.isArray(routes) ? routes.find(r => r && r.destination && r.destination.toLowerCase() === formattedDestination.toLowerCase()) : null;
    const startingPrice = route?.prices?.[0]?.price || "2,760";
    const estimatedDistance = route?.distance || '200';
    const estimatedTime = route?.time || '4 hours';

    return generateRouteMetadata({
      origin: formattedCityName,
      destination: formattedDestination,
      price: startingPrice.replace('₹', ''),
      distance: estimatedDistance,
      duration: estimatedTime,
      slug: cityName
    });
  } else {
    // CITY PAGE METADATA — using factory
    const formattedCityName = cityName.replace(/-/g, ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return generateCityHubMetadata({
      city: formattedCityName,
      minPrice: 11,
      services: ['Airport', 'Local', 'Outstation'],
      slug: cityName
    });
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

    const priceNum = parseInt(String(startingPrice).replace('₹', '').replace(',', '') || '2760');

    // Route Page Structured Data
    const routeServiceSchema = {
      "@context": "https://schema.org",
      "@type": "TaxiService",
      "name": `Triveni Cabs - ${formattedCityName} to ${formattedDestination} Taxi Service`,
      "description": `Professional cab service from ${formattedCityName} to ${formattedDestination}. ${estimatedDistance} km, ${estimatedTime}. AC vehicles, verified drivers, GPS tracking, 24/7 availability.`,
      "provider": {
        "@type": "LocalBusiness",
        "name": COMPANY_INFO.name,
        "telephone": COMPANY_INFO.phone.primary,
        "email": COMPANY_INFO.email.primary,
        "url": BASE_URL,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": COMPANY_INFO.address.streetAddress,
          "addressLocality": COMPANY_INFO.address.addressLocality,
          "addressRegion": COMPANY_INFO.address.addressRegion,
          "postalCode": COMPANY_INFO.address.postalCode,
          "addressCountry": "IN"
        },
        "priceRange": "₹₹",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": String(AGGREGATE_RATING.ratingValue),
          "reviewCount": String(AGGREGATE_RATING.reviewCount),
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      "areaServed": [
        {"@type": "City", "name": formattedCityName},
        {"@type": "City", "name": formattedDestination}
      ],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `${BASE_URL}/${cityName}`,
        "servicePhone": COMPANY_INFO.phone.primary,
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
        "name": COMPANY_INFO.name,
        "url": BASE_URL
      }
    };

    // Product/Offer schema — helps get price rich snippets in SERPs
    const routeProductSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${formattedCityName} to ${formattedDestination} Cab Booking`,
      "description": `Book ${formattedCityName} to ${formattedDestination} taxi starting ₹${startingPrice}. ${estimatedDistance} km, ${estimatedTime}. AC sedan, SUV, tempo traveller available.`,
      "brand": {
        "@type": "Brand",
        "name": COMPANY_INFO.name
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": priceNum,
        "highPrice": Math.round(priceNum * 2.5),
        "priceCurrency": "INR",
        "offerCount": route?.prices?.length || 6,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        "seller": {
          "@type": "Organization",
          "name": COMPANY_INFO.name
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(AGGREGATE_RATING.ratingValue),
        "reviewCount": String(AGGREGATE_RATING.reviewCount),
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // HowTo schema — booking process for featured snippets
    const routeHowToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Book ${formattedCityName} to ${formattedDestination} Cab`,
      "description": `Step-by-step guide to book a taxi from ${formattedCityName} to ${formattedDestination} with ${COMPANY_INFO.name}.`,
      "totalTime": "PT5M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": priceNum
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Contact Us",
          "text": `Call ${COMPANY_INFO.phone.display} or WhatsApp at ${COMPANY_INFO.phone.whatsapp} to enquire about ${formattedCityName} to ${formattedDestination} cab availability.`
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Choose Your Vehicle",
          "text": "Select from Sedan, SUV, Tempo Traveller, or Bus based on your group size and budget."
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Share Trip Details",
          "text": "Provide pickup date, time, address, and number of passengers. Choose one-way or round trip."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Confirm Booking",
          "text": "Receive instant booking confirmation with driver name, vehicle number, and contact details."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Enjoy Your Journey",
          "text": `Your verified driver picks you up on time for a comfortable ${formattedCityName} to ${formattedDestination} journey.`
        }
      ]
    };

    // FAQ schema from generator
    const routeFAQs = generateRouteFAQs({
      origin: formattedCityName,
      destination: formattedDestination,
      distance: estimatedDistance,
      duration: estimatedTime,
      price: priceNum,
      vehicles: route?.prices?.map(p => p.vehicle).filter(Boolean) || []
    });

    const routeFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": routeFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const routeBreadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": formattedCityName,
          "item": `${BASE_URL}/${originCity.toLowerCase().replace(/\s+/g, '-')}`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": `${formattedCityName} to ${formattedDestination}`,
          "item": `${BASE_URL}/${cityName}`
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
          id="route-product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeProductSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="route-howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeHowToSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="route-faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeFAQSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="route-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(routeBreadcrumbSchema) }}
          strategy="beforeInteractive"
        />
        <AEOHead pageType="route" data={{ url: `/${cityName}`, title: `${formattedCityName} to ${formattedDestination} Taxi`, origin: formattedCityName, destination: formattedDestination }} />
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

    // City GeoCoordinates lookup for LocalBusiness schema
    const cityGeoCoords = {
      'Delhi': { lat: 28.6139, lng: 77.2090 },
      'Jaipur': { lat: 26.9124, lng: 75.7873 },
      'Agra': { lat: 27.1767, lng: 78.0081 },
      'Chandigarh': { lat: 30.7333, lng: 76.7794 },
      'Shimla': { lat: 31.1048, lng: 77.1734 },
      'Manali': { lat: 32.2396, lng: 77.1887 },
      'Amritsar': { lat: 31.6340, lng: 74.8723 },
      'Haridwar': { lat: 29.9457, lng: 78.1642 },
      'Rishikesh': { lat: 30.0869, lng: 78.2676 },
      'Dehradun': { lat: 30.3165, lng: 78.0322 },
      'Udaipur': { lat: 24.5854, lng: 73.7125 },
      'Jodhpur': { lat: 26.2389, lng: 73.0243 },
      'Varanasi': { lat: 25.3176, lng: 82.9739 },
      'Lucknow': { lat: 26.8467, lng: 80.9462 },
      'Ayodhya': { lat: 26.7922, lng: 82.1998 },
      'Ahmedabad': { lat: 23.0225, lng: 72.5714 },
      'Mathura': { lat: 27.4924, lng: 77.6737 },
      'Nainital': { lat: 29.3803, lng: 79.4636 },
      'Mussoorie': { lat: 30.4598, lng: 78.0644 },
      'Jim Corbett': { lat: 29.5300, lng: 78.7747 },
      'Pushkar': { lat: 26.4899, lng: 74.5511 },
      'Ajmer': { lat: 26.4499, lng: 74.6399 },
      'Mount Abu': { lat: 24.5926, lng: 72.7156 },
      'Bikaner': { lat: 28.0229, lng: 73.3119 },
      'Jaisalmer': { lat: 26.9157, lng: 70.9083 },
      'Ranthambore': { lat: 26.0173, lng: 76.5026 },
      'Dharamshala': { lat: 32.2190, lng: 76.3234 },
      'Noida': { lat: 28.5355, lng: 77.3910 },
      'Gurgaon': { lat: 28.4595, lng: 77.0266 },
      'Ghaziabad': { lat: 28.6692, lng: 77.4538 }
    };

    const geo = cityGeoCoords[formattedCityName] || { lat: COMPANY_INFO.geo.latitude, lng: COMPANY_INFO.geo.longitude };

    // City Page Structured Data
    const cityServiceSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": `${COMPANY_INFO.name} - ${formattedCityName}`,
      "description": `Professional taxi service in ${formattedCityName}. Outstation trips, local tours, airport transfers, and special occasions. Verified drivers, AC vehicles, GPS tracking, 24/7 availability.`,
      "url": `${BASE_URL}/${cityName}`,
      "telephone": COMPANY_INFO.phone.primary,
      "email": COMPANY_INFO.email.primary,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": formattedCityName,
        "addressRegion": "India",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.lat,
        "longitude": geo.lng
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(AGGREGATE_RATING.ratingValue),
        "reviewCount": String(AGGREGATE_RATING.reviewCount),
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
      "name": `${formattedCityName} Taxi Service - ${COMPANY_INFO.name}`,
      "description": `24/7 taxi service in ${formattedCityName}. Book cabs for local trips, outstation tours, airport transfers, and special events.`,
      "provider": {
        "@type": "Organization",
        "name": COMPANY_INFO.name,
        "url": BASE_URL,
        "telephone": COMPANY_INFO.phone.primary
      },
      "areaServed": {
        "@type": "City",
        "name": formattedCityName
      },
      "serviceType": ["Taxi Service", "Cab Rental", "Car Rental", "Airport Transfer", "Outstation Taxi"],
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `${BASE_URL}/${cityName}`,
        "servicePhone": COMPANY_INFO.phone.primary,
        "availableLanguage": ["English", "Hindi"]
      }
    };

    // Product/Offer schema — helps get price rich snippets in SERPs
    const cityProductSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${formattedCityName} Taxi & Cab Service`,
      "description": `Book taxi in ${formattedCityName} from ₹11/km. Local, outstation, airport transfers. AC sedan, SUV, tempo traveller available 24/7.`,
      "brand": {
        "@type": "Brand",
        "name": COMPANY_INFO.name
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": 11,
        "highPrice": 50,
        "priceCurrency": "INR",
        "offerCount": vehiclesServices.length || 6,
        "availability": "https://schema.org/InStock",
        "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        "seller": {
          "@type": "Organization",
          "name": COMPANY_INFO.name
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": String(AGGREGATE_RATING.ratingValue),
        "reviewCount": String(AGGREGATE_RATING.reviewCount),
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // HowTo schema — booking process for featured snippets
    const cityHowToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": `How to Book a Taxi in ${formattedCityName}`,
      "description": `Step-by-step guide to book a cab in ${formattedCityName} with ${COMPANY_INFO.name}.`,
      "totalTime": "PT5M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "INR",
        "value": "11"
      },
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Contact Us",
          "text": `Call ${COMPANY_INFO.phone.display} or WhatsApp at ${COMPANY_INFO.phone.whatsapp} to enquire about ${formattedCityName} taxi availability and rates.`
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Choose Service Type",
          "text": `Select from local taxi, outstation cab, airport transfer, or sightseeing tour in ${formattedCityName}.`
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Select Your Vehicle",
          "text": "Choose from Sedan (₹11/km), SUV (₹14/km), Tempo Traveller (₹20/km), or Bus (₹35/km) based on group size."
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Confirm Booking",
          "text": "Share pickup date, time, and address. Receive instant confirmation with driver details and vehicle number."
        },
        {
          "@type": "HowToStep",
          "position": 5,
          "name": "Enjoy Your Ride",
          "text": `Your verified professional driver arrives on time at your ${formattedCityName} pickup location. Track your ride with GPS.`
        }
      ]
    };

    const cityBreadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BASE_URL
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": formattedCityName,
          "item": `${BASE_URL}/${cityName}`
        }
      ]
    };

    // Use centralized FAQ generator for richer, more SEO-optimized FAQs
    const cityFAQs = generateCityFAQs({
      city: formattedCityName,
      services: ['Airport Transfer', 'Local Sightseeing', 'Outstation Trips', 'Wedding Car', 'Corporate Travel'],
      tours: citySpots.slice(0, 3)
    });

    const cityFAQSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": cityFAQs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
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
          id="city-product-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityProductSchema) }}
          strategy="beforeInteractive"
        />
        <Script
          id="city-howto-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(cityHowToSchema) }}
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
        <AEOHead pageType="cityHub" data={{ url: `/${cityName}`, title: `${formattedCityName} Cab Service`, city: formattedCityName }} />
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