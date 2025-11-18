import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityAirportServiceClient from "@/components/airport/CityAirportServiceClient";
import { getCityData, getAllCitySlugs } from "@/utilis/airportCityData";

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = getCityData(params.city);

  if (!city) {
    return {
      title: "City Not Found - Triveni Cabs",
      description: "Airport service city not found"
    };
  }

  return {
    title: `${city.name} Airport Taxi Service 24/7 | Book ${city.airport} Cab - Triveni Cabs`,
    description: city.description,
    keywords: city.keywords,
    alternates: {
      canonical: `https://trivenicabs.in/airport-service/${params.city}`
    },
    openGraph: {
      title: `${city.name} Airport Taxi | 24/7 ${city.airport} Cab Service`,
      description: city.description,
      type: "website",
      locale: "en_IN",
      siteName: "Triveni Cabs",
      images: [
        {
          url: "/images/airport_section.jpg",
          width: 1200,
          height: 630,
          alt: `${city.name} Airport Taxi Service`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.name} Airport Taxi 24/7 | ${city.airport} Cab`,
      description: `Book reliable ${city.name} airport transfer. Flight tracking, luggage help, on-time pickup. Pre-book now!`
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
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
      "email": "info@trivenicabs.in",
      "url": "https://trivenicabs.in"
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
        "item": "https://trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Airport Service",
        "item": "https://trivenicabs.in/airport-service"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${city.name} Airport Taxi`,
        "item": `https://trivenicabs.in/airport-service/${params.city}`
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
      <CityAirportServiceClient city={city} citySlug={params.city} />
    </>
  );
}
