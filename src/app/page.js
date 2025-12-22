import HomeClient from "@/components/home/HomeClient";
import { phoneNumber } from "@/utilis/data";

// Company info - hardcoded since not exported from data.js
const companyName = "Triveni Cabs";
const companyEmail = "info@trivenicabs.com";
const companyAddress = "New Delhi";
const companyCity = "Delhi";
const companyState = "Delhi";
const companyZip = "110001";

// Server-side metadata for SEO
export const metadata = {
  title: "Triveni Cabs - India's #1 Taxi Service | Wedding Cars, Airport Transfers, Tours",
  description: "Book reliable taxi services across India. Wedding car rentals (BMW, Audi, Mercedes), airport transfers, tempo traveller, tour packages & expert guides. 24/7 service, 500+ destinations, 10K+ happy customers.",
  keywords: [
    "taxi service india",
    "cab booking",
    "wedding car rental",
    "airport taxi",
    "tempo traveller",
    "tour packages india",
    "outstation cab",
    "luxury car rental",
    "delhi cab service",
    "agra taxi",
    "jaipur cab",
    "shimla manali taxi"
  ],
  openGraph: {
    title: "Triveni Cabs - India's #1 Travel Partner",
    description: "Wedding Cars | Airport Transfers | Tour Packages | Tempo Traveller | 500+ Destinations",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/HERO_SECTION_MAIN_PAGE.jpg",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs - Premium Taxi Services in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Triveni Cabs - India's #1 Travel Partner",
    description: "Book wedding cars, airport taxis, tempo travellers & tour packages. 24/7 service across 500+ destinations.",
    images: ["/images/HERO_SECTION_MAIN_PAGE.jpg"]
  },
  alternates: {
    canonical: "https://www.trivenicabs.com"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Generate structured data for SEO
function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.trivenicabs.com/#organization",
    name: companyName || "Triveni Cabs",
    description: "India's leading taxi and travel service provider offering wedding car rentals, airport transfers, tempo traveller, tour packages, and professional tour guides across 500+ destinations.",
    url: "https://www.trivenicabs.com",
    telephone: phoneNumber,
    email: companyEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyAddress,
      addressLocality: companyCity,
      addressRegion: companyState,
      postalCode: companyZip,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6139",
      longitude: "77.2090"
    },
    image: "https://www.trivenicabs.com/images/HERO_SECTION_MAIN_PAGE.jpg",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    },
    sameAs: [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/trivenicabs",
      "https://twitter.com/trivenicabs"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.trivenicabs.com/#website",
    url: "https://www.trivenicabs.com",
    name: "Triveni Cabs",
    description: "India's #1 Travel Partner - Book taxi services, wedding cars, airport transfers, tour packages & more",
    publisher: {
      "@id": "https://www.trivenicabs.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.trivenicabs.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Wedding Car Rental",
          description: "Luxury wedding cars including BMW, Audi, Mercedes with professional chauffeurs and car decoration",
          url: "https://www.trivenicabs.com/wedding",
          provider: { "@id": "https://www.trivenicabs.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Airport Transfer Service",
          description: "24/7 airport pickup and drop service across 50+ airports in India",
          url: "https://www.trivenicabs.com/airport-service",
          provider: { "@id": "https://www.trivenicabs.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Tempo Traveller Rental",
          description: "12-26 seater AC tempo travellers for group travel, family trips, and corporate tours",
          url: "https://www.trivenicabs.com/tempo-traveller",
          provider: { "@id": "https://www.trivenicabs.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Bus Rental Service",
          description: "22-56 seater Volvo AC buses for large groups, corporate events, and tour operators",
          url: "https://www.trivenicabs.com/bus-routes",
          provider: { "@id": "https://www.trivenicabs.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Tour Packages",
          description: "Curated tour packages including Golden Triangle, hill stations, and pilgrimage tours",
          url: "https://www.trivenicabs.com/services",
          provider: { "@id": "https://www.trivenicabs.com/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Professional Tour Guides",
          description: "Certified tour guides in 14+ cities, available in 6 languages",
          url: "https://www.trivenicabs.com/tour-guide",
          provider: { "@id": "https://www.trivenicabs.com/#organization" }
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Triveni Cabs offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Triveni Cabs offers wedding car rentals (BMW, Audi, Mercedes), airport transfers, tempo traveller rentals (12-26 seater), luxury bus rentals (22-56 seater), tour packages, outstation cabs to 500+ destinations, and professional tour guide services in 14+ cities."
        }
      },
      {
        "@type": "Question",
        name: "Is Triveni Cabs available 24/7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Triveni Cabs operates 24/7 across all services including airport transfers, emergency bookings, and customer support."
        }
      },
      {
        "@type": "Question",
        name: "Which cities does Triveni Cabs serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Triveni Cabs serves 14+ premium cities including Delhi, Agra, Jaipur, Haridwar, Chandigarh, Shimla, Manali, Amritsar, Dehradun, Rishikesh, Jodhpur, Udaipur, Ayodhya, and Ahmedabad, with 500+ routes available."
        }
      },
      {
        "@type": "Question",
        name: "How can I book a taxi with Triveni Cabs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book through WhatsApp, call us directly at ${phoneNumber}, or use our website for instant booking confirmation.`
        }
      }
    ]
  };

  return [organizationSchema, websiteSchema, servicesSchema, faqSchema];
}

export default function HomePage() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Structured Data for SEO */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Client-side interactive content */}
      <HomeClient />
    </>
  );
}
