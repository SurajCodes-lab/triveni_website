// src/app/sightseeing/page.js

import SightseeingMainClient from './SightseeingMainClient';
import { getAllTours, tourCategories, featuredTours } from '@/utilis/sightseeingData';

export const metadata = {
  title: 'Premium Sightseeing Tours India | Expert-Curated Heritage & Cultural Day Tours | Book Professional Guided City Tours',
  description: 'Discover India\'s wonders with premium sightseeing tours across 20+ destinations. Expert-guided heritage tours, cultural experiences & architectural marvels. Visit Taj Mahal, Jaipur forts, Delhi monuments & more. Customizable itineraries, professional guides, comfortable transport. Book now - Best rates guaranteed!',
  keywords: [
    // Primary Keywords
    'sightseeing tours India',
    'city tours India',
    'guided sightseeing tours',
    'heritage tours India',
    'cultural tours',
    'day tours India',
    'tourist attractions tours',
    'monument tours India',

    // City-Based Keywords
    'Jaipur sightseeing tour',
    'Agra sightseeing tour',
    'Delhi city tour',
    'Taj Mahal tour',
    'Jaipur city tour',
    'Delhi sightseeing',
    'Agra day tour',
    'Jaipur day tour',
    'Delhi heritage tour',

    // Service Type Keywords
    'private sightseeing tours',
    'group sightseeing tours',
    'customized city tours',
    'full day sightseeing',
    'half day tours',
    'guided monument tours',
    'heritage walk tours',
    'cultural sightseeing',
    'historical tours India',

    // Long-Tail Keywords
    'best sightseeing tours in India',
    'professional guided tours',
    'book sightseeing tour online',
    'affordable city tours India',
    'customizable sightseeing packages',
    'expert tour guide services',
    'comfortable sightseeing tours',
    'UNESCO heritage site tours',

    // Experience Keywords
    'Amber Fort tour',
    'City Palace Jaipur tour',
    'Hawa Mahal visit',
    'Jantar Mantar tour',
    'Red Fort Delhi tour',
    'Qutub Minar tour',
    'Humayun Tomb tour',
    'India Gate tour',

    // Booking Keywords
    'instant sightseeing booking',
    'online tour booking India',
    'WhatsApp tour booking',
    '24/7 tour services',
    'same day tour booking',
    'skip the line tours',

    // Quality Keywords
    'trusted sightseeing tours',
    'verified tour operators',
    'licensed tour guides',
    'authentic cultural experience',
    'professional tour services',
    'best rated tours India'
  ].join(', '),
  alternates: {
    canonical: 'https://trivenicabs.in/sightseeing'
  },
  openGraph: {
    title: 'Premium Sightseeing Tours India | Expert-Curated Heritage & Cultural Day Tours',
    description: '🏰 Discover India\'s wonders with expert-guided tours | 20+ destinations | Heritage, culture & architectural marvels | Customizable itineraries | Best rates guaranteed!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://trivenicabs.in/sightseeing',
    images: [
      {
        url: '/images/sightseeing-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Sightseeing Tours across India - Heritage & Cultural Experiences'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Sightseeing Tours India | Heritage & Culture',
    description: '🏰 Expert-guided tours | 20+ destinations | Taj Mahal, Jaipur forts, Delhi monuments | Customizable | Book now!',
    images: ['/images/sightseeing-hero.jpg'],
    creator: '@TriveniCabs',
    site: '@TriveniCabs'
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
  },
  other: {
    'price-range': 'INR 3000-5000',
    'service-areas': 'Delhi, Agra, Jaipur, Udaipur, Jodhpur, Varanasi, Mumbai, Goa, Kerala, Rajasthan',
    'languages': 'English, Hindi, French, Spanish, German, Chinese',
    'booking': 'Online, WhatsApp, Phone'
  }
};

export default function SightseeingPage() {
  // Get all tours on server side for SEO
  const allTours = getAllTours();
  const featured = allTours.filter(tour => featuredTours.includes(tour.slug));

  const pageData = {
    allTours,
    featuredTours: featured,
    categories: tourCategories
  };

  return (
    <>
      {/* Enhanced Schema.org markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": "Premium Sightseeing Tours - Triveni Cabs",
            "description": "Expert-curated sightseeing tours across India covering heritage sites, cultural landmarks, and architectural marvels with professional guides and comfortable transportation.",
            "url": "https://trivenicabs.in/sightseeing",
            "provider": {
              "@type": "TravelAgency",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "url": "https://trivenicabs.in"
            },
            "touristType": [
              "Families",
              "Solo Travelers",
              "Couples",
              "Groups",
              "International Tourists",
              "Domestic Tourists"
            ],
            "itinerary": allTours.map(tour => ({
              "@type": "Trip",
              "name": tour.name,
              "description": tour.shortDescription,
              "url": `https://trivenicabs.in/sightseeing/${tour.slug}`
            }))
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Sightseeing Tours",
                "item": "https://trivenicabs.in/sightseeing"
              }
            ]
          })
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Sightseeing and Heritage Tour Services",
            "name": "Premium Sightseeing Tours India",
            "description": "Expert-guided heritage tours, cultural experiences & architectural marvels across 20+ destinations. Customizable itineraries, professional guides, comfortable transport.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "email": "info@trivenicabs.in",
              "url": "https://trivenicabs.in"
            },
            "areaServed": [
              {"@type": "City", "name": "Delhi"},
              {"@type": "City", "name": "Agra"},
              {"@type": "City", "name": "Jaipur"},
              {"@type": "City", "name": "Udaipur"},
              {"@type": "City", "name": "Jodhpur"},
              {"@type": "City", "name": "Varanasi"},
              {"@type": "City", "name": "Mumbai"},
              {"@type": "City", "name": "Goa"}
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "920",
              "bestRating": "5",
              "worstRating": "1"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "INR",
              "lowPrice": "3000",
              "highPrice": "5000",
              "offerCount": allTours.length.toString()
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://trivenicabs.in/sightseeing",
              "servicePhone": "+91-7668570551",
              "availableLanguage": ["English", "Hindi", "French", "Spanish", "German", "Chinese"]
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What sightseeing destinations do you cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer sightseeing tours across 20+ destinations including Delhi (Red Fort, Qutub Minar, India Gate), Agra (Taj Mahal, Agra Fort), Jaipur (Amber Fort, City Palace, Hawa Mahal), Udaipur, Jodhpur, Varanasi, Mumbai, Goa, and many more historical and cultural sites across India."
                }
              },
              {
                "@type": "Question",
                "name": "Are tour guides included in the sightseeing packages?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, all our sightseeing tours include professional, licensed tour guides who are experts in history, culture, and architecture. Guides are available in multiple languages including English, Hindi, French, Spanish, German, and Chinese."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize my sightseeing tour?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! We offer fully customizable sightseeing tours. You can choose which monuments to visit, duration of each stop, meal preferences, and add special interests like photography, shopping, or local food experiences. Contact us to create your personalized itinerary."
                }
              },
              {
                "@type": "Question",
                "name": "What is included in the sightseeing tour package?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our packages include comfortable AC transportation, professional driver, expert tour guide, all vehicle-related expenses (fuel, parking, tolls), and complete itinerary planning. Entrance fees to monuments, meals, and personal expenses are typically not included but can be arranged."
                }
              },
              {
                "@type": "Question",
                "name": "How long do the sightseeing tours last?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer flexible tour durations from half-day tours (4-5 hours) to full-day tours (8-10 hours) and multi-day packages. The duration can be customized based on your schedule and the number of attractions you wish to visit."
                }
              }
            ]
          })
        }}
      />

      <SightseeingMainClient data={pageData} />
    </>
  );
}
