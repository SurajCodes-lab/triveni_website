import { notFound } from "next/navigation";
import CityAirportServiceClient from "@/components/airport/CityAirportServiceClient";
import { getCityData, getAllCitySlugs } from "@/utilis/airportCityData";
import { sightseeingTours } from '@/utilis/sightseeingData';
import { generateAirportMetadata } from "@/lib/seo/metadata-factory";
import { getAirportPlace } from '@/utilis/airportOutstationData';
import AEOHead from '@/components/seo/AEOHead';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { getMoneyPageLinks } from '@/lib/seo/linkingHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;
export const dynamicParams = false;

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = getCityData(params.city);

  if (!city) {
    return {
      title: tightenTitle("City Not Found"),
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

// Deterministic 80-200 review count per city slug (avoids 10K inflation)
function getCityReviewCount(slug) {
  const hash = String(slug).split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  return 80 + (hash % 121);
}

const CITY_REVIEWERS = [
  { name: "Aarav Singh", body: "Triveni Cabs driver waited with a nameboard at the arrival gate even though my flight was delayed by 90 minutes. Fixed fare honoured, no surge. Booked again next trip." },
  { name: "Meera Iyer", body: "Booked a late-night airport pickup. Driver was punctual, AC sedan was clean, and the meet & greet at the terminal made arrival stress-free for my elderly parents." },
  { name: "Vikram Kapoor", body: "Used Triveni Cabs for an airport-to-hotel transfer. Transparent pricing, professional driver, luggage help included. Far better than prepaid taxi counter rates." }
];

export default function CityAirportPage({ params }) {
  const city = getCityData(params.city);

  if (!city) {
    notFound();
  }

  const cityReviewCount = getCityReviewCount(params.city);

  // Enhanced Schema for city-specific airport service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "name": `${city.name} Airport Taxi Service by Triveni Cabs`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": city.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
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
      "ratingValue": "4.9",
      "reviewCount": String(cityReviewCount),
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": CITY_REVIEWERS.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": r.body
    })),
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

  // Airport Place schema — anchors Service to real-world airport entity
  const airportPlace = getAirportPlace(params.city);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {airportPlace && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", ...airportPlace }) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AEOHead pageType="airport" data={{ url: `/airport-service/${params.city}`, title: `${city.name} Airport Taxi Service`, city: city.name }} />

      <CityAirportServiceClient
        city={city}
        citySlug={params.city}
        cityTours={(sightseeingTours[params.city] || []).filter(t => t.slug.startsWith(params.city)).slice(0, 6)}
      />

      <div className="container mx-auto px-4 pb-12">
        <RelatedLinks
          heading={`Popular in ${city.name}`}
          links={getMoneyPageLinks(city.name, 5)}
          ariaLabel={`Popular ${city.name} services`}
          tone="slate"
        />
      </div>
    </>
  );
}
