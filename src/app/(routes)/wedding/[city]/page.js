import { notFound } from "next/navigation";
import CityWeddingPageClient from "@/components/wedding/CityWeddingPageClient";
import { getWeddingCityData, getAllWeddingCitySlugs } from "@/utilis/weddingCityData";
import { generateWeddingMetadata } from "@/lib/seo/metadata-factory";

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = false;
export const dynamicParams = false;

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = getWeddingCityData(params.city);

  if (!city) {
    return {
      title: "City Not Found - Triveni Cabs",
      description: "Wedding service city not found"
    };
  }

  return generateWeddingMetadata({
    city: city.name,
    slug: params.city
  });
}

// Generate static params for all cities
export async function generateStaticParams() {
  const citySlugs = getAllWeddingCitySlugs();
  return citySlugs.map((city) => ({
    city: city,
  }));
}

export default function CityWeddingPage({ params }) {
  const city = getWeddingCityData(params.city);

  if (!city) {
    notFound();
  }

  // Enhanced Service Schema for city-specific wedding service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Car Rental Service",
    "name": `${city.name} Wedding Car Rental`,
    "description": city.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressCountry": "IN"
      },
      "priceRange": city.priceRange,
      "image": "https://www.trivenicabs.in/images/wedding_section.jpg"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "addressCountry": "IN"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": city.priceRange.split('-')[0].trim().replace('₹', '').replace(',', ''),
      "highPrice": city.priceRange.split('-')[1].trim().split(' ')[0].replace('₹', '').replace(',', ''),
      "offerCount": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": `https://www.trivenicabs.in/wedding/${params.city}`,
      "servicePhone": "+91-7668570551",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // Breadcrumb Schema
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
        "name": "Wedding Services",
        "item": "https://www.trivenicabs.in/wedding"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${city.name} Wedding Car Rental`,
        "item": `https://www.trivenicabs.in/wedding/${params.city}`
      }
    ]
  };

  // Event Schema for Wedding Service
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": `${city.name} Wedding Car Rental Services`,
    "description": `Professional wedding car rental services in ${city.name} including luxury cars, baraat tempo travellers, and decorated vehicles for all wedding ceremonies.`,
    "image": "https://www.trivenicabs.in/images/wedding_section.jpg",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": city.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": city.name,
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.trivenicabs.in/wedding/${params.city}`,
      "price": city.priceRange,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    }
  };

  // Product Schema for Wedding Car Fleet
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${city.name} Wedding Car Rental Services`,
    "description": city.description,
    "image": "https://www.trivenicabs.in/images/wedding_section.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Triveni Cabs"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": city.priceRange.split('-')[0].trim().replace('₹', '').replace(',', ''),
      "highPrice": city.priceRange.split('-')[1].trim().split(' ')[0].replace('₹', '').replace(',', ''),
      "offerCount": "5",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Triveni Cabs - ${city.name} Wedding Car Rental`,
    "image": "https://www.trivenicabs.in/images/wedding_section.jpg",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "IN"
    },
    "url": `https://www.trivenicabs.in/wedding/${params.city}`,
    "priceRange": city.priceRange,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Event Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <CityWeddingPageClient city={city} citySlug={params.city} />
    </>
  );
}
