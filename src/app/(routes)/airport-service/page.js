import { Metadata } from "next";
import AirportServiceClient from "@/components/airport/AirportServiceClient";
import AEOHead from '@/components/seo/AEOHead';
import { getAllAirportPlaces } from '@/utilis/airportOutstationData';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Airport Taxi 2026 | Delhi IGI ₹1,500 | Flight Tracking'),
  description: 'Airport taxi — Delhi IGI ₹1,500, Jaipur ₹1,200, Chandigarh ₹1,000. Flight tracking, meet & greet, 24/7. Call 7668570551.',
  keywords: "airport taxi service, airport cab booking, flight tracking taxi, meet and greet airport, fixed fare airport cab, 24x7 airport transfer, Delhi IGI airport taxi, Jaipur airport cab, Chandigarh airport transfer, late night airport pickup, no surge airport taxi, Triveni Cabs",
  alternates: {
    canonical: "https://www.trivenicabs.in/airport-service"
  },
  openGraph: {
    title: "🚖 Book Airport Taxi in 60 Seconds | Flight Tracking + On-Time Guarantee",
    description: "India's most trusted airport transfer service! ✓ Real-time flight tracking ✓ Meet & greet ✓ Luggage help ✓ Zero cancellation fee. Serving Delhi IGI, Jaipur, Chandigarh & 50+ cities. Pre-book for guaranteed rates!",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/about/about_banner.webp",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs Premium Airport Taxi Service - 24/7 Available"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "🚖 Book Airport Taxi in 60 Sec | Flight Tracking + Zero Cancellation Fee",
    description: "✈️ Real-time flight tracking ✈️ Professional drivers ✈️ Luggage assistance ✈️ On-time guarantee ✈️ 50+ cities. Book now & travel stress-free!"
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

export default function AirportServicePage() {
  // Enhanced Service Schema for Airport Transfer
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "name": "Triveni Cabs - 24/7 Premium Airport Taxi Service",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": "Professional airport transfer service by Triveni Cabs with flight tracking, luggage assistance & on-time guarantee. Serving Delhi IGI, Jaipur, Chandigarh, Shimla & major cities across India.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Agra" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Shimla" },
      { "@type": "City", "name": "Manali" },
      { "@type": "City", "name": "Amritsar" },
      { "@type": "City", "name": "Haridwar" },
      { "@type": "City", "name": "Rishikesh" },
      { "@type": "City", "name": "Dehradun" },
      { "@type": "City", "name": "Jodhpur" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Ayodhya" }
    ],
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
      "reviewCount": "412",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Priya Sharma" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Driver from Triveni Cabs was waiting at IGI T3 arrival with a name board even though my Emirates flight landed 40 minutes late. Fixed fare honoured, no surge. Highly recommend for international arrivals."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Rohit Mehta" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Booked Triveni Cabs for a 2 AM Jaipur airport pickup. Driver tracked the flight, helped with luggage, AC sedan was clean. Far better than prepaid taxi counter prices."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Anjali Khanna" },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "Used the Chandigarh airport to Shimla service. Hill driver was experienced, Innova was comfortable for the family, fixed Rs 6,000 with no hidden charges. Will book again."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Airport Transfer Fleet",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Sedan Airport Taxi",
            "description": "Comfortable sedan for 1-4 passengers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "SUV Airport Taxi",
            "description": "Spacious SUV for families and groups"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Tempo Traveller Airport Transfer",
            "description": "Group transfer for 12-26 passengers"
          }
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.trivenicabs.in/airport-service",
      "servicePhone": "+91-7668570551",
      "availableLanguage": ["English", "Hindi"]
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  // HowTo Schema for Booking Process
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book Airport Taxi with Triveni Cabs",
    "description": "Step-by-step guide to book reliable airport transfer service with Triveni Cabs",
    "totalTime": "PT2M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose Your Service",
        "text": "Select airport pickup or drop service and choose your preferred vehicle type (Sedan, SUV, or Tempo Traveller)",
        "url": "https://www.trivenicabs.in/airport-service#booking-form"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter Journey Details",
        "text": "Provide pickup location, destination airport, date, time, and number of passengers. Add flight details for tracking.",
        "url": "https://www.trivenicabs.in/airport-service#booking-form"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Instant Confirmation",
        "text": "Submit your booking via WhatsApp and receive instant confirmation with driver details and fare quote",
        "url": "https://www.trivenicabs.in/airport-service#booking-form"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Enjoy Hassle-Free Transfer",
        "text": "Our professional driver will track your flight, meet you at arrival, assist with luggage, and ensure on-time transfer",
        "url": "https://www.trivenicabs.in/airport-service"
      }
    ]
  };

  // FAQ Data for Schema and Client Component
  const faqData = [
    {
      question: "What is the taxi fare from Delhi airport to city center?",
      answer: "Delhi IGI airport to city center (Connaught Place) starts from ₹800-1,200 depending on vehicle type. Sedan ₹800, SUV ₹1,200. Prices are fixed with no surge pricing."
    },
    {
      question: "How do I book an airport taxi with Triveni Cabs?",
      answer: "Book via WhatsApp at +91-7668570551, call directly, or use our website. We provide instant confirmation with driver details and exact fare within 2 minutes."
    },
    {
      question: "Do you provide flight tracking for delayed flights?",
      answer: "Yes, we track your flight in real-time. If your flight is delayed, your driver will be rescheduled automatically at no extra cost. No waiting charges for flight delays."
    },
    {
      question: "Can I book airport taxi for early morning (3-5 AM) flights?",
      answer: "Yes, we provide 24/7 airport taxi service including early morning and late night flights. Book in advance for guaranteed availability. No extra charges for odd hours."
    },
    {
      question: "What airports do you serve?",
      answer: "We serve Delhi IGI (T1, T2, T3), Jaipur International, Chandigarh, Amritsar, Dehradun Jolly Grant, Kullu-Manali Bhuntar, Udaipur, Jodhpur, and Lucknow airports."
    },
    {
      question: "Is there meet and greet service at the airport?",
      answer: "Yes, our driver will wait at the arrival gate with a name board. We provide luggage assistance and guide you to your vehicle. This service is complimentary."
    },
    {
      question: "What vehicles are available for airport transfer?",
      answer: "We offer Sedan (Swift Dzire, Etios) from ₹11/km, SUV (Innova, Ertiga) from ₹15/km, and Tempo Traveller (12-26 seater) from ₹23/km for group airport transfers."
    },
    {
      question: "How much in advance should I book airport taxi?",
      answer: "We recommend booking at least 4-6 hours in advance. For early morning flights or peak season, book 24 hours ahead. Same-day bookings subject to availability."
    }
  ];

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
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // Place graph for major Indian airports — anchors Service schema to real-world entities
  const placesGraph = {
    "@context": "https://schema.org",
    "@graph": getAllAirportPlaces()
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(placesGraph) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AEOHead pageType="airport" data={{ url: '/airport-service', title: 'Airport Taxi Service' }} />
      <AirportServiceClient faqData={faqData} />
    </>
  );
}
