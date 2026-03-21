import { Metadata } from "next";
import WeddingPageClient from "@/components/wedding/WeddingPageClient";
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

export const metadata = {
  title: 'Wedding Car Rental 2026 | BMW ₹15K, Audi ₹18K | Triveni',
  description: 'Book wedding cars: BMW ₹15K, Audi ₹18K, Mercedes ₹20K, Vintage ₹25K. Baraat tempo 12-26 seater ₹8K+. 500+ weddings done. Decoration included. Call 7668570551.',
  keywords: 'wedding car rental, luxury wedding car, BMW wedding car, Audi wedding car, Mercedes wedding car, baraat tempo traveller, bridal car rental, wedding car Delhi, wedding car Jaipur, destination wedding car, vintage wedding car, shaadi car rental, wedding car decoration, wedding transportation India, book wedding car online',
  alternates: {
    canonical: "https://www.trivenicabs.in/wedding"
  },
  openGraph: {
    title: "💍 Your Dream Wedding Deserves a Royal Ride! Luxury Car Rental | Triveni Cabs",
    description: "Premium wedding cars (BMW, Audi, Mercedes) + Baraat tempo travellers. 500+ couples chose us. Professional chauffeurs, stunning decorations. Book now & save 15%!",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/wedding_section.jpg",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs Premium Wedding Car Rental Service - BMW, Audi, Mercedes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "💍 Make Your Wedding Royal! Book Luxury Car in 60 Sec | BMW • Audi • Mercedes",
    description: "BMW • Audi • Mercedes • Vintage Cars | Baraat Tempo Travellers | 500+ Happy Couples. Book your dream wedding ride today & save 15%!"
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

export default function WeddingPage() {
  // Enhanced Service Schema for Wedding Car Rental
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Wedding Car Rental Service",
    "name": "Luxury Wedding Car Rental",
    "description": "Premium wedding car rental with BMW, Audi, Mercedes & vintage cars for bride/groom entry. Baraat tempo travellers (12-26 seater), professional chauffeurs, stunning decorations included.",
    "provider": {
      "@type": "LocalBusiness",
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
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15000",
      "highPrice": "50000",
      "offerCount": "5"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Wedding Car Fleet",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "BMW Wedding Car",
            "description": "Luxury BMW for bride/groom entry with decoration"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Audi Wedding Car",
            "description": "Premium Audi for royal wedding entry"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Mercedes Wedding Car",
            "description": "Elegant Mercedes for special occasions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Vintage Wedding Car",
            "description": "Classic vintage car for timeless memories"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Baraat Tempo Traveller",
            "description": "12-26 seater tempo traveller for wedding guests"
          }
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://www.trivenicabs.in/wedding",
      "servicePhone": "+91-7668570551",
      "availableLanguage": ["English", "Hindi"]
    }
  };

  // FAQ Data for Schema and Client Component
  const faqs = [
    {
      question: "How much does a BMW wedding car cost in Delhi?",
      answer: "BMW wedding car rental in Delhi starts from ₹15,000 for local use (4 hours). This includes professional chauffeur, basic flower decoration, and fuel. Premium decoration packages available from ₹3,000 extra."
    },
    {
      question: "What types of wedding cars do you offer?",
      answer: "We offer luxury cars (BMW 5-Series ₹15K, Audi A6 ₹18K, Mercedes E-Class ₹20K), vintage cars (₹25K), premium SUVs (Fortuner, Innova ₹8K), and baraat tempo travellers (12-26 seater from ₹8K)."
    },
    {
      question: "Do you provide car decoration for weddings?",
      answer: "Yes! We provide floral decoration starting from ₹2,000. Options include rose petals, orchids, ribbons, and LED lights. Custom theme-based decorations available on request. Fresh flowers are arranged on the wedding day."
    },
    {
      question: "How far in advance should I book wedding car?",
      answer: "Book at least 2-4 weeks in advance, especially during wedding season (October-February). Peak dates like specific muhurat days require 1 month advance booking. Same-week bookings subject to availability."
    },
    {
      question: "Can I book tempo traveller for baraat?",
      answer: "Yes! We have 12, 17, 20, and 26 seater tempo travellers perfect for baraat. Starting from ₹8,000 for local use. All AC vehicles with pushback seats, music system, and decorated options available."
    },
    {
      question: "Do you serve destination weddings in Jaipur, Udaipur?",
      answer: "Yes! We serve destination weddings in Jaipur, Udaipur, Jodhpur, Agra (Taj), and other royal venues. Fleet includes luxury cars, vintage cars, and guest transport vehicles. Contact for special destination wedding packages."
    },
    {
      question: "Is chauffeur included in wedding car rental?",
      answer: "Yes! All wedding cars come with professional uniformed chauffeurs experienced in handling wedding events. Driver tip, fuel, and parking are included. No hidden charges."
    },
    {
      question: "Can I book multiple cars for different wedding functions?",
      answer: "Absolutely! We offer multi-function packages covering mehendi, sangeet, wedding, and reception. Get 10-15% discount on package bookings. Custom fleet combinations available for large weddings."
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
        "name": "Wedding Services",
        "item": "https://www.trivenicabs.in/wedding"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book Wedding Car with Triveni Cabs",
    "description": "Step-by-step guide to book luxury wedding car rental for your special day",
    "totalTime": "PT3M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Choose Your Wedding Car",
        "text": "Select from our premium fleet including BMW, Audi, Mercedes, vintage cars, or baraat tempo travellers (12-26 seater) based on your wedding theme and requirements",
        "url": "https://www.trivenicabs.in/wedding#fleet"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Select Decoration & Services",
        "text": "Choose from our beautiful floral decoration packages, theme-based decorations, and additional services like chauffeur uniform, red carpet, and photography coordination",
        "url": "https://www.trivenicabs.in/wedding#decorations"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Provide Wedding Details",
        "text": "Share your wedding date, venue location, pickup and drop points, number of vehicles needed, and any special requirements for your big day",
        "url": "https://www.trivenicabs.in/wedding#booking-form"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Instant Quote",
        "text": "Receive a detailed quote via WhatsApp with vehicle photos, decoration samples, package details, and transparent pricing within minutes",
        "url": "https://www.trivenicabs.in/wedding#booking-form"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Confirm & Relax",
        "text": "Confirm your booking with advance payment and our professional team will handle everything - from vehicle preparation to on-time delivery on your special day",
        "url": "https://www.trivenicabs.in/wedding"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <AEOHead pageType="wedding" data={{ url: '/wedding', title: 'Wedding Car Rental India' }} />
      <WeddingPageClient faqs={faqs} />
    </>
  );
}
