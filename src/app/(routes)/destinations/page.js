// src/app/(routes)/destinations/page.js
import { destinations, phoneNumber } from '@/utilis/data';
import ClientDestinationTabs from './client-components';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'India Like Never Before! Handpicked Destinations & Tour Packages | Triveni Cabs',
  description: 'From Himalayan heights to coastal delights! Discover 50+ curated destinations with exclusive tour packages. Delhi, Agra, Jaipur, Shimla, Manali, Kashmir & more. Golden Triangle tours, hill station escapes, beach getaways. Unforgettable experiences at unbeatable prices!',
  keywords: 'India destinations, tourist places India, tour packages, Delhi Agra Jaipur tour, golden triangle tour, hill station packages, Kashmir tour, Goa packages, Kerala tours, Rajasthan travel, North India tours, South India packages, weekend getaways, honeymoon destinations, family tour packages, best places to visit India, India travel destinations, vacation packages India',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/destinations',
    languages: {
      'en-IN': '/destinations',
      'hi-IN': '/destinations',
    },
  },
  openGraph: {
    title: 'India Like Never Before! 50+ Handpicked Destinations',
    description: 'Mountains, Beaches, Heritage & Culture - Exclusive tour packages to unforgettable places across India',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/destinations',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/about/about_banner.webp',
        width: 1200,
        height: 630,
        alt: 'Discover India - 50+ Handpicked Destinations by Triveni Cabs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover Incredible India | Tour Packages',
    description: '50+ destinations, curated experiences, affordable packages. Your dream trip awaits!',
    creator: '@TriveniCabs',
    site: '@TriveniCabs',
    images: ['/images/about/about_banner.webp']
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
  category: 'Travel & Tourism',
};

export default function DestinationsPage() {
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
        "name": "Destinations",
        "item": "https://www.trivenicabs.in/destinations"
      }
    ]
  };

  // CollectionPage Schema
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "India Travel Destinations - Triveni Cabs",
    "description": "Explore 50+ handpicked destinations across India with exclusive tour packages. From Himalayan adventures to coastal retreats.",
    "url": "https://www.trivenicabs.in/destinations",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Popular India Destinations",
      "numberOfItems": 50,
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Delhi", "url": "https://www.trivenicabs.in/delhi"},
        {"@type": "ListItem", "position": 2, "name": "Agra", "url": "https://www.trivenicabs.in/agra"},
        {"@type": "ListItem", "position": 3, "name": "Jaipur", "url": "https://www.trivenicabs.in/jaipur"},
        {"@type": "ListItem", "position": 4, "name": "Shimla", "url": "https://www.trivenicabs.in/shimla"},
        {"@type": "ListItem", "position": 5, "name": "Manali", "url": "https://www.trivenicabs.in/manali"},
        {"@type": "ListItem", "position": 6, "name": "Kashmir", "url": "https://www.trivenicabs.in/kashmir"},
        {"@type": "ListItem", "position": 7, "name": "Goa", "url": "https://www.trivenicabs.in/goa"},
        {"@type": "ListItem", "position": 8, "name": "Kerala", "url": "https://www.trivenicabs.in/kerala"}
      ]
    },
    "provider": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in"
    }
  };

  // TravelAgency Schema
  const travelAgencySchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Triveni Cabs - Tour Packages",
    "description": "Premium tour packages and destination travel services across India",
    "url": "https://www.trivenicabs.in/destinations",
    "telephone": "+91-7668570551",
    "priceRange": "$$",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tour Packages",
      "itemListElement": [
        {"@type": "Offer", "itemOffered": {"@type": "TouristTrip", "name": "Golden Triangle Tour"}},
        {"@type": "Offer", "itemOffered": {"@type": "TouristTrip", "name": "Hill Station Packages"}},
        {"@type": "Offer", "itemOffered": {"@type": "TouristTrip", "name": "Beach Getaways"}},
        {"@type": "Offer", "itemOffered": {"@type": "TouristTrip", "name": "Heritage Tours"}}
      ]
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the most popular destinations covered by Triveni Cabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We cover 50+ destinations including Delhi, Agra, Jaipur (Golden Triangle), hill stations like Shimla, Manali, Mussoorie, Nainital, beach destinations like Goa, and heritage sites across Rajasthan like Udaipur, Jodhpur, and Jaisalmer."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer customizable tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our tour packages are fully customizable. You can choose destinations, duration, accommodation level, and special activities based on your preferences and budget."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in your tour packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our packages typically include comfortable AC transportation, professional driver, sightseeing as per itinerary, and complete trip planning. Accommodation and meals can be added based on your requirements."
        }
      }
    ]
  };

  return (
    <main role="main" aria-label="India Travel Destinations" className="min-h-screen bg-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden" aria-label="Destinations Hero">
        <div className="absolute inset-0">
          <Image
            src="/images/about/about_banner.webp"
            alt="Discover India - Beautiful destinations from mountains to beaches"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        <div className="relative h-full mx-auto px-4 flex flex-col justify-center">
          <h1 className="text-3xl max-sm:text-[25px] md:text-4xl lg:text-5xl tracking-[0.06rem] font-bold text-white mb-6 animate-fade-in text-center">
            India Like You&apos;ve Never Seen Before
          </h1>
          <p className="text-xl max-sm:text-[15px] text-center text-gray-200 tracking-[0.06rem] mb-8 max-w-3xl mx-auto">
            50+ handpicked destinations waiting to steal your heart. From snow-capped peaks to sun-kissed beaches!
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="#destinations"
              className="px-8 py-3 bg-yellow-500 max-sm:text-sm max-sm:px-4 max-sm:py-2.5 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors min-h-[44px] flex items-center"
              aria-label="Explore destinations"
            >
              Explore Now
            </a>
            <Link
              href="/services"
              className="px-8 py-3 bg-white/10 max-sm:text-sm max-sm:px-4 max-sm:py-2.5 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm min-h-[44px] flex items-center"
              aria-label="View tour packages"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Client-side Navigation Tabs and Content */}
      <section id="destinations" aria-label="Destination categories">
        <ClientDestinationTabs />
      </section>
    </main>
  );
}