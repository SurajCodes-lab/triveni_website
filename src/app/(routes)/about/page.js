import AboutClient from "./AboutClient";

export const revalidate = false;

export const metadata = {
  title: "About Us | Triveni Cabs - India's Most Trusted Cab Service",
  description: "Discover Triveni Cabs - a brand born from passion, discipline, and customer-first values. 500+ premium vehicles, 50+ cities, 10,000+ happy customers. Safe, reliable, and affordable travel across India with 24/7 support.",
  keywords: "Triveni Cabs about, Pankaj Singh Gaur, cab service founder, India travel company, trusted cab service, reliable taxi India, professional drivers, customer focused travel, transparent pricing cabs, safe travel India, premium cab service, 24/7 support taxi, airport transfer India, outstation cab booking, taxi company India, car rental company, travel agency India, transportation service",
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: "/about",
    languages: {
      'en-IN': '/about',
      'hi-IN': '/about',
    },
  },
  openGraph: {
    title: "About Us | Triveni Cabs - India's Most Trusted Cab Service",
    description: "Discover Triveni Cabs - 500+ premium vehicles, 50+ cities, 10,000+ happy customers. Safe, reliable, and affordable travel across India with transparent pricing and 24/7 support.",
    type: "website",
    locale: "en_IN",
    url: "https://www.trivenicabs.in/about",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about_page_hero_section.jpg",
        width: 1200,
        height: 630,
        alt: "About Triveni Cabs - India's Most Trusted Cab Service with Premium Fleet"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Triveni Cabs - India's Most Trusted Cab Service",
    description: "500+ vehicles, 50+ cities, 10,000+ happy customers. Safe, reliable, and affordable travel across India with 24/7 support.",
    creator: '@TriveniCabs',
    site: '@TriveniCabs',
    images: ["/images/about_page_hero_section.jpg"]
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
};

export default function AboutPage() {
  // Enhanced Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Triveni Cabs",
    "alternateName": "Triveni Cabs India",
    "url": "https://www.trivenicabs.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trivenicabs.in/logo.png",
      "width": 250,
      "height": 60
    },
    "foundingDate": "2015",
    "founder": {
      "@type": "Person",
      "name": "Pankaj Singh Gaur",
      "jobTitle": "Founder & CEO"
    },
    "description": "India's most trusted cab service provider with a fleet of 500+ premium vehicles serving 50+ cities. Offering outstation, local, airport transfers, and wedding car rentals.",
    "slogan": "Your Journey, Our Responsibility",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 100,
      "maxValue": 500
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "366, Dandupura, near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "reservations",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://twitter.com/TriveniCabs",
      "https://www.facebook.com/TriveniCabs",
      "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Triveni Cabs Services",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Outstation Cab Service"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Local Taxi Service"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Airport Transfer"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Wedding Car Rental"}},
        {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Tempo Traveller Rental"}}
      ]
    }
  };

  // AboutPage Schema
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Triveni Cabs",
    "description": "Discover the story behind Triveni Cabs, our mission, vision, and commitment to providing safe and reliable transportation across India.",
    "url": "https://www.trivenicabs.in/about",
    "mainEntity": {
      "@id": "https://www.trivenicabs.in/#organization"
    },
    "inLanguage": "en-IN",
    "dateModified": new Date().toISOString(),
    "isPartOf": {
      "@type": "WebSite",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in"
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
        "name": "About Us",
        "item": "https://www.trivenicabs.in/about"
      }
    ]
  };

  // FAQ Schema for About Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who founded Triveni Cabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Triveni Cabs was founded by Pankaj Singh Gaur, a law graduate who stepped into the world of travel services with a mission to build a company that people can trust with their journeys and memories."
        }
      },
      {
        "@type": "Question",
        "name": "How many cities does Triveni Cabs operate in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Triveni Cabs operates in 50+ cities across India, including major cities like Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, and many more tourist destinations."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Triveni Cabs different from other cab services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Triveni Cabs stands out with 100% verified drivers, transparent pricing with no hidden charges, 24/7 customer support, GPS-tracked vehicles, and a fleet of 500+ premium well-maintained vehicles. We prioritize customer safety and comfort above everything."
        }
      },
      {
        "@type": "Question",
        "name": "Is Triveni Cabs available 24/7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Triveni Cabs provides round-the-clock service 24 hours a day, 7 days a week. Our customer support team is always available to assist you with bookings and queries."
        }
      }
    ]
  };

  return (
    <main role="main" aria-label="About Triveni Cabs">
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <AboutClient />
    </main>
  );
}
