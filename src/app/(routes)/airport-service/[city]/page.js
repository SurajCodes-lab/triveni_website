import { notFound } from "next/navigation";
import CityAirportServiceClient from "@/components/airport/CityAirportServiceClient";
import { getCityData, getAllCitySlugs } from "@/utilis/airportCityData";
import { sightseeingTours } from '@/utilis/sightseeingData';
import { generateAirportMetadata } from "@/lib/seo/metadata-factory";

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = getCityData(params.city);

  if (!city) {
    return {
      title: "City Not Found - Triveni Cabs",
      description: "Airport service city not found"
    };
  }

  return generateAirportMetadata({
    city: city.name,
    airportName: city.airport,
    price: '11/km',
    slug: params.city
  });
}

// Generate static params for all cities
export async function generateStaticParams() {
  const citySlugs = getAllCitySlugs();
  return citySlugs.map((city) => ({
    city: city,
  }));
}

export default function CityAirportPage({ params }) {
  const city = getCityData(params.city);

  if (!city) {
    notFound();
  }

  // Enhanced Schema for city-specific airport service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "name": `${city.name} Airport Taxi Service`,
    "description": city.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    },
    "offers": {
      "@type": "Offer",
      "price": "11",
      "priceCurrency": "INR",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "11",
        "priceCurrency": "INR",
        "unitText": "per kilometer"
      },
      "availability": "https://schema.org/InStock",
      "validFrom": "2024-01-01"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
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
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Airport Service",
        "item": "https://www.trivenicabs.in/airport-service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${city.name} Airport Taxi`,
        "item": `https://www.trivenicabs.in/airport-service/${params.city}`
      }
    ]
  };

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
      <CityAirportServiceClient
        city={city}
        citySlug={params.city}
        cityTours={(sightseeingTours[params.city] || []).filter(t => t.slug.startsWith(params.city)).slice(0, 6)}
      />
    </>
  );
}
