import { notFound } from "next/navigation";
import CityWeddingPageClient from "@/components/wedding/CityWeddingPageClient";
import { getDeterministicReviewCount } from "@/lib/seo/review-helpers";
import { getWeddingCityData, getAllWeddingCitySlugs } from "@/utilis/weddingCityData";
import { generateWeddingMetadata } from "@/lib/seo/metadata-factory";
import AEOHead from '@/components/seo/AEOHead';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getRelatedRoutes } from '@/utilis/linkingHelper';
import WeddingCityLocal from '@/components/seo/WeddingCityLocal';
// Week 53: the nineteen wedding city pages were 76.5% alike with a 10.9%
// unique share. These are the per-city facts that make each page about its
// own city — season, venue geography, the procession, and which cars the
// local venues can actually take.
import { getWeddingCityLocal } from '@/utilis/weddingCityLocal';
import DirectAnswer from '@/components/content/DirectAnswer';
import { deriveWeddingCityAnswer } from '@/utilis/directAnswers';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;
export const dynamicParams = false;

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = getWeddingCityData(params.city);

  if (!city) {
    return {
      title: tightenTitle("City Not Found"),
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
    "name": `${city.name} Wedding Car Rental — Triveni Cabs`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": city.description,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
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
      "image": "https://www.trivenicabs.in/images/wedding/luxury_car.jpg"
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
    ...getRatingAndReviews(params.city, 'wedding'),
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

  // Week 53: an Event node used to sit here, named "<City> Wedding Car Rental
  // Services" with eventStatus EventScheduled and no startDate. Google's Events
  // report flagged all 19 of them as invalid for exactly that reason, and the
  // report was right twice over: the field was missing, and the page does not
  // describe an event at all. It describes a car-hire service available all
  // year, which is why there was no date to give.
  //
  // Inventing a startDate would have satisfied the validator by asserting a
  // scheduled event that does not exist — the same class of error as the
  // composed review markup removed in Week 52. The node is removed instead.
  // Nothing is lost: the Service node above already describes the offering
  // correctly, the invalid Event nodes were never eligible for an Events rich
  // result, and the 139 genuinely dated festival Events elsewhere on the site
  // are untouched.


  // Product Schema for Wedding Car Fleet
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${city.name} Wedding Car Rental Services`,
    "description": city.description,
    "image": "https://www.trivenicabs.in/images/wedding/luxury_car.jpg",
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
    }
  };

  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Triveni Cabs - ${city.name} Wedding Car Rental`,
    "image": "https://www.trivenicabs.in/images/wedding/luxury_car.jpg",
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

      <AEOHead pageType="wedding" data={{ url: `/wedding/${params.city}`, title: `${city.name} Wedding Car Rental`, city: city.name }} />
      {/* relatedRoutes resolved here — the helper imports sightseeingData.js (1.24 MB). */}
      <CityWeddingPageClient
        city={city}
        citySlug={params.city}
        relatedRoutes={getRelatedRoutes(city.name)}
        shortAnswer={(() => {
          const a = deriveWeddingCityAnswer(city, getWeddingCityLocal(params.city));
          return a ? (
            <DirectAnswer heading={a.heading} lead={a.lead} facts={a.facts} note={a.note} />
          ) : null;
        })()}
      />
      <WeddingCityLocal city={city.name} local={getWeddingCityLocal(params.city)} />
    </>
  );
}
