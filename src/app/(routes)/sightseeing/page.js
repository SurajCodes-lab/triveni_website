// src/app/sightseeing/page.js

import SightseeingMainClient from './SightseeingMainClient';
import { getAllTours, tourCategories, featuredTours } from '@/utilis/sightseeingData';
import AEOHead from '@/components/seo/AEOHead';

// Static generation - no ISR
export const revalidate = false;

export const metadata = {
  title: 'Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni',
  description: 'Book sightseeing tours from Delhi: Taj Mahal ₹3,500, Jaipur ₹4,500, Golden Triangle ₹12,000. 50+ tours, AC cars, expert guides. 10,000+ happy tourists. Call 7668570551.',
  keywords: 'sightseeing tours India, Taj Mahal tour from Delhi, same day Agra tour, Golden Triangle tour, Delhi city tour, Jaipur sightseeing, heritage tours India, day tour packages, guided city tours, book sightseeing tour online, private tours India, full day tour, Agra sightseeing, Varanasi tour, Triveni Cabs tours',
  alternates: {
    canonical: 'https://www.trivenicabs.in/sightseeing'
  },
  openGraph: {
    title: 'Premium Sightseeing Tours India | Expert-Curated Heritage & Cultural Day Tours',
    description: '🏰 Discover India\'s wonders with expert-guided tours | 20+ destinations | Heritage, culture & architectural marvels | Customizable itineraries | Best rates guaranteed!',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/sightseeing',
    images: [
      {
        url: '/images/sightseeing-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Sightseeing Tours across India - Heritage & Cultural Experiences - Triveni Cabs'
      }
    ],
    article: {
      publisher: 'https://www.trivenicabs.in',
      modifiedTime: new Date().toISOString()
    }
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

  const faqData = [
    { question: "What sightseeing destinations do you cover?", answer: "We offer sightseeing tours across 20+ destinations including Delhi (Red Fort, Qutub Minar, India Gate), Agra (Taj Mahal, Agra Fort), Jaipur (Amber Fort, City Palace, Hawa Mahal), Udaipur, Jodhpur, Varanasi, Mumbai, Goa, and many more historical and cultural sites across India." },
    { question: "Are tour guides included in the sightseeing packages?", answer: "Yes, all our sightseeing tours include professional, licensed tour guides who are experts in history, culture, and architecture. Guides are available in multiple languages including English, Hindi, French, Spanish, German, and Chinese." },
    { question: "Can I customize my sightseeing tour?", answer: "Absolutely! We offer fully customizable sightseeing tours. You can choose which monuments to visit, duration of each stop, meal preferences, and add special interests like photography, shopping, or local food experiences. Contact us to create your personalized itinerary." },
    { question: "What is included in the sightseeing tour package?", answer: "Our packages include comfortable AC transportation, professional driver, expert tour guide, all vehicle-related expenses (fuel, parking, tolls), and complete itinerary planning. Entrance fees to monuments, meals, and personal expenses are typically not included but can be arranged." },
    { question: "How long do the sightseeing tours last?", answer: "We offer flexible tour durations from half-day tours (4-5 hours) to full-day tours (8-10 hours) and multi-day packages. The duration can be customized based on your schedule and the number of attractions you wish to visit." }
  ];

  // Consolidate all schemas into a single script tag (reduces DOM nodes & parse time)
  const schemas = [
    { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Premium Sightseeing Tours - Triveni Cabs", "description": "Expert-curated sightseeing tours across India covering heritage sites, cultural landmarks, and architectural marvels with professional guides and comfortable transportation.", "url": "https://www.trivenicabs.in/sightseeing", "provider": { "@type": "TravelAgency", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" }, "touristType": ["Families", "Solo Travelers", "Couples", "Groups", "International Tourists", "Domestic Tourists"], "itinerary": allTours.map(tour => ({ "@type": "Trip", "name": tour.name, "description": tour.shortDescription, "url": `https://www.trivenicabs.in/sightseeing/${tour.slug}` })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Sightseeing Tours", "item": "https://www.trivenicabs.in/sightseeing" }] },
    { "@context": "https://schema.org", "@type": "Service", "serviceType": "Sightseeing and Heritage Tour Services", "name": "Premium Sightseeing Tours India", "description": "Expert-guided heritage tours, cultural experiences & architectural marvels across 20+ destinations. Customizable itineraries, professional guides, comfortable transport.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in" }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Agra" }, { "@type": "City", "name": "Jaipur" }, { "@type": "City", "name": "Udaipur" }, { "@type": "City", "name": "Jodhpur" }, { "@type": "City", "name": "Varanasi" }, { "@type": "City", "name": "Mumbai" }, { "@type": "City", "name": "Goa" }], "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "920", "bestRating": "5", "worstRating": "1" }, "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "3000", "highPrice": "5000", "offerCount": allTours.length.toString() }, "availableChannel": { "@type": "ServiceChannel", "serviceUrl": "https://www.trivenicabs.in/sightseeing", "servicePhone": "+91-7668570551", "availableLanguage": ["English", "Hindi", "French", "Spanish", "German", "Chinese"] } },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) },
    { "@context": "https://schema.org", "@type": "ItemList", "name": "Premium Sightseeing Tours in India", "numberOfItems": allTours.length, "itemListElement": allTours.map((tour, index) => { const prices = [tour.price.sedan, tour.price.suv, tour.price.tempoTraveller, tour.price.carRental].filter(Boolean); return { "@type": "ListItem", "position": index + 1, "item": { "@type": "TouristTrip", "name": tour.name, "url": `https://www.trivenicabs.in/sightseeing/${tour.slug}`, "description": tour.shortDescription, "offers": { "@type": "Offer", "price": Math.min(...prices), "priceCurrency": "INR", "availability": "https://schema.org/InStock" }, ...(tour.reviews && { "aggregateRating": { "@type": "AggregateRating", "ratingValue": tour.reviews.averageRating.toString(), "reviewCount": tour.reviews.totalReviews.toString() } }) } }; }) },
    { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Book a Sightseeing Tour with Triveni Cabs", "description": "Simple step-by-step guide to book your perfect sightseeing tour in India with Triveni Cabs", "totalTime": "PT5M", "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "3000-5000" }, "step": [{ "@type": "HowToStep", "position": 1, "name": "Choose Your Tour", "text": "Browse our collection of 20+ sightseeing tours across India and select the one that matches your interests." }, { "@type": "HowToStep", "position": 2, "name": "Select Vehicle Type", "text": "Choose your preferred vehicle - Sedan, SUV, or Tempo Traveller based on your group size." }, { "@type": "HowToStep", "position": 3, "name": "Contact Us", "text": "Reach out via WhatsApp (+91-7668570551), phone call, or email to confirm your booking." }, { "@type": "HowToStep", "position": 4, "name": "Customize If Needed", "text": "Let us know if you want to modify the itinerary or need multilingual guides." }, { "@type": "HowToStep", "position": 5, "name": "Confirm and Pay", "text": "Receive instant confirmation. Flexible payment options. No hidden charges." }] },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <AEOHead pageType="tour" data={{ url: '/sightseeing', title: 'Sightseeing Tours India' }} />
      <SightseeingMainClient data={pageData} faqData={faqData} />
    </>
  );
}
