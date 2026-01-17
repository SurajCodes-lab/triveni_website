import { Metadata } from "next";
import { notFound } from "next/navigation";
import CityWeddingPageClient from "@/components/wedding/CityWeddingPageClient";
import { getWeddingCityData, getAllWeddingCitySlugs } from "@/utilis/weddingCityData";

// Generate metadata for each city page
export async function generateMetadata({ params }) {
  const city = getWeddingCityData(params.city);

  if (!city) {
    return {
      title: "City Not Found - Triveni Cabs",
      description: "Wedding service city not found"
    };
  }

  return {
    // Title under 60 chars, no emojis (Google guidelines)
    title: `${city.name} Wedding Car Rental | BMW, Audi, Mercedes`,
    description: `Book wedding cars in ${city.name}. BMW, Audi, Mercedes, Baraat tempo. Professional chauffeurs. Call 7668570551.`,
    keywords: city.keywords,
    alternates: {
      canonical: `https://www.trivenicabs.in/wedding/${params.city}`
    },
    openGraph: {
      title: `${city.name} Wedding Car Rental | Luxury Cars`,
      description: `Wedding car rental in ${city.name}. BMW, Audi, Mercedes. Baraat tempo traveller. Book now!`,
      type: "website",
      locale: "en_IN",
      siteName: "Triveni Cabs",
      images: [
        {
          url: "/images/wedding_section.jpg",
          width: 1200,
          height: 630,
          alt: `${city.name} Premium Wedding Car Rental - BMW, Audi, Mercedes, Baraat Tempo Traveller`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${city.name} Wedding Car | BMW, Audi, Mercedes`,
      description: `Book luxury wedding cars in ${city.name}. BMW, Audi, Mercedes. Baraat tempo travellers. Book now!`
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

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What types of wedding cars are available in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We offer luxury cars (BMW, Audi, Mercedes, Jaguar), premium sedans, SUVs (Fortuner, Innova Crysta), tempo travellers (9-26 seater), and vintage cars in ${city.name}. All vehicles are well-maintained and available with professional chauffeurs.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide car decoration for weddings in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! We provide beautiful floral and theme-based decoration services in ${city.name}. You can choose from our standard decoration packages or request custom decorations based on your wedding theme and preferences.`
        }
      },
      {
        "@type": "Question",
        "name": `How much does wedding car rental cost in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Wedding car rental prices in ${city.name} range from ${city.priceRange} depending on the vehicle type, duration, and decoration requirements. We offer customized packages to fit every budget. Contact us for detailed pricing.`
        }
      },
      {
        "@type": "Question",
        "name": `How far in advance should I book a wedding car in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `We recommend booking at least 2-4 weeks in advance, especially during wedding season (October to March) in ${city.name}. However, we also accommodate last-minute bookings based on vehicle availability.`
        }
      },
      {
        "@type": "Question",
        "name": `Do you provide baraat tempo travellers in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes! We provide AC and Non-AC tempo travellers (9-26 seater) for baraat parties in ${city.name}. Our tempo travellers come with music systems, comfortable seating, and can be decorated as per your wedding theme.`
        }
      },
      {
        "@type": "Question",
        "name": `Are the chauffeurs professional and experienced in ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Absolutely! All our chauffeurs in ${city.name} are professional, uniformed, well-trained, and experienced in handling wedding events. They are familiar with local routes and ensure timely, safe transportation for your special day.`
        }
      }
    ]
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

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
