import { Metadata } from "next";
import AirportServiceClient from "@/components/airport/AirportServiceClient";

export const metadata = {
  title: "🚖 Never Miss Your Flight! Book Airport Taxi in 60 Seconds | 24/7 Available | Triveni Cabs",
  description: "Book India's #1 airport taxi service instantly! ✓ Real-time flight tracking ✓ Professional chauffeurs ✓ Zero cancellation fee ✓ Guaranteed on-time pickup ✓ Luggage assistance. Serving 50+ cities including Delhi IGI, Jaipur, Chandigarh. Pre-book now & save 15%! Starting ₹11/km.",
  keywords: "airport taxi, airport cab service, airport transfer, airport pickup, airport drop, airport cab booking, 24x7 airport cab, cheap airport taxi, airport taxi service, airport transfer service, best airport taxi near me, reliable airport cab, instant airport taxi booking, airport taxi booking online, pre book airport taxi, advance airport cab booking, airport taxi delhi, delhi airport cab service, delhi to airport taxi, indira gandhi airport taxi, IGI airport taxi, delhi airport transfer, airport pickup delhi, delhi airport drop, delhi airport cab booking, cheap airport taxi delhi, 24x7 airport cab delhi, best airport taxi delhi, affordable airport cab delhi, delhi airport taxi booking, delhi airport pickup service, delhi airport drop service, new delhi airport taxi, IGI terminal 3 taxi, IGI terminal 1 taxi, IGI terminal 2 taxi, delhi airport to city taxi, delhi airport to noida taxi, delhi airport to gurgaon cab, delhi airport to faridabad taxi, airport taxi jaipur, jaipur airport cab service, jaipur to airport taxi, jaipur international airport taxi, jaipur airport transfer, airport pickup jaipur, jaipur airport drop, jaipur airport cab booking, sanganer airport taxi, cheap airport taxi jaipur, jaipur airport to city taxi, best airport cab jaipur, jaipur airport pickup service, airport taxi agra, agra airport cab service, agra to delhi airport taxi, kheria airport taxi agra, agra airport transfer, airport pickup agra, agra to airport cab, agra airport drop service, agra to jaipur airport taxi, airport taxi chandigarh, chandigarh airport cab, chandigarh international airport taxi, airport transfer chandigarh, airport pickup chandigarh, chandigarh airport drop, mohali airport taxi, chandigarh airport cab booking, cheap airport taxi chandigarh, chandigarh airport to city taxi, best airport cab chandigarh, airport taxi shimla, shimla airport cab service, shimla to chandigarh airport taxi, shimla to delhi airport taxi, shimla airport transfer, jubbarhatti airport taxi, shimla to airport cab, shimla airport pickup, airport taxi manali, manali to kullu airport taxi, manali to chandigarh airport taxi, manali to delhi airport taxi, bhuntar airport to manali taxi, manali airport transfer, kullu airport taxi manali, manali airport cab service, kullu manali airport taxi, bhuntar to manali taxi, airport taxi amritsar, amritsar airport cab service, sri guru ram dass airport taxi, amritsar international airport taxi, amritsar airport transfer, airport pickup amritsar, amritsar airport drop, golden temple to airport taxi, amritsar airport cab booking, cheap airport taxi amritsar, best airport cab amritsar, airport taxi haridwar, haridwar to delhi airport taxi, haridwar to dehradun airport taxi, jolly grant airport to haridwar, haridwar airport transfer, haridwar airport cab service, haridwar to airport cab, haridwar airport pickup, airport taxi rishikesh, rishikesh to delhi airport taxi, rishikesh to dehradun airport taxi, jolly grant airport to rishikesh, rishikesh airport transfer, rishikesh airport cab service, rishikesh to airport cab, rishikesh airport pickup, airport taxi dehradun, dehradun airport cab service, jolly grant airport taxi, dehradun to delhi airport taxi, dehradun airport transfer, airport pickup dehradun, dehradun airport drop, dehradun to airport cab, jolly grant to dehradun taxi, cheap airport taxi dehradun, airport taxi jodhpur, jodhpur airport cab service, jodhpur airport transfer, jodhpur to jaipur airport taxi, airport pickup jodhpur, jodhpur airport drop, jodhpur to airport cab, jodhpur airport taxi booking, airport taxi udaipur, udaipur airport cab service, maharana pratap airport taxi, udaipur airport transfer, airport pickup udaipur, udaipur airport drop, udaipur to jaipur airport taxi, udaipur to airport cab, udaipur airport cab booking, airport taxi ayodhya, ayodhya to lucknow airport taxi, ayodhya to delhi airport taxi, ayodhya airport transfer, airport pickup ayodhya, ram mandir to airport taxi, ayodhya airport cab service, ayodhya to airport cab, one way airport taxi, round trip airport taxi, airport taxi near me, airport cab near me, luxury airport taxi, premium airport cab, sedan airport taxi, SUV airport taxi, innova airport taxi, tempo traveller airport transfer, corporate airport transfer, group airport transfer, family airport taxi, early morning airport taxi, late night airport cab, midnight airport taxi, airport to hotel taxi, hotel to airport taxi, airport to home taxi, home to airport cab, airport shuttle service, airport taxi fare, airport cab charges, airport taxi rate, airport transfer cost, how to book airport taxi, airport taxi contact number, airport cab customer care, airport transfer with flight tracking, meet and greet airport service, airport taxi with luggage assistance, safe airport transfer, verified airport drivers, sanitized airport cabs, GPS tracked airport taxi, fixed fare airport cab, no surge pricing airport taxi, instant confirmation airport booking",
  alternates: {
    canonical: "https://www.trivenicabs.in/airport-service"
  },
  openGraph: {
    title: "🚖 Book Airport Taxi in 60 Seconds | Flight Tracking + On-Time Guarantee | Triveni Cabs",
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
    "name": "24/7 Premium Airport Taxi Service",
    "description": "Professional airport transfer service with flight tracking, luggage assistance & on-time guarantee. Serving Delhi, Jaipur, Chandigarh, Shimla & major cities across India.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "info@trivenicabs.in",
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
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
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
      question: "How do I book an airport taxi with Triveni Cabs?",
      answer: "You can book easily via our website form, call us at +91-7668570551, or message us on WhatsApp. We offer instant confirmation."
    },
    {
      question: "Do you provide flight tracking?",
      answer: "Yes, we monitor your flight status in real-time to ensure our driver is there when you arrive, even if your flight is delayed."
    },
    {
      question: "Is there a cancellation fee?",
      answer: "We have a flexible cancellation policy. Please contact us as soon as possible if your plans change."
    },
    {
      question: "Are the taxi fares fixed?",
      answer: "Yes, we offer transparent, fixed pricing with no hidden surcharges or surge pricing."
    },
    {
      question: "Can I book a cab for a large group?",
      answer: "Absolutely! We have a diverse fleet ranging from Sedans and SUVs to Tempo Travellers and buses for large groups."
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
      <AirportServiceClient faqData={faqData} />
    </>
  );
}
