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

      <SightseeingMainClient data={pageData} />
    </>
  );
}
