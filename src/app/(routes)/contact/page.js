import ContactClient from "./ContactClient";
import { getSpeakableSchema } from "@/lib/seo/speakable-helpers";
import { getDeterministicReviewCount } from "@/lib/seo/review-helpers";
import { COMPANY_INFO, BASE_URL } from "@/lib/seo/constants";
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const PAGE_URL = `${BASE_URL}/contact`;
const REVIEW_COUNT = String(getDeterministicReviewCount("contact"));

export const metadata = {
  title: tightenTitle("Contact Us — 24/7 Support, Call 7668570551"),
  description: "Contact Triveni Cabs™ for reliable taxi booking across India. 24/7 customer support, instant WhatsApp booking, and quick response times.",
  keywords: "contact Triveni Cabs, taxi booking support, cab service contact, 24/7 taxi support, WhatsApp cab booking, Agra taxi contact, India cab service contact, emergency taxi support, reliable cab customer service",
  alternates: {
    canonical: "https://www.trivenicabs.in/contact"
  },
  openGraph: {
    title: "Contact Us | Triveni Cabs™ - 24/7 Customer Support",
    description: "Reach out to Triveni Cabs™ for reliable taxi booking across India. 24/7 support, instant WhatsApp booking, and professional service in 50+ cities.",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs™",
    images: [
      {
        url: "/images/about/about_banner.webp",
        width: 1200,
        height: 630,
        alt: "Contact Triveni Cabs - 24/7 Customer Support"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Triveni Cabs™ - 24/7 Customer Support",
    description: "24/7 customer support for all your taxi booking needs across India. Call, WhatsApp, or email us anytime."
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
};

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  "streetAddress": COMPANY_INFO.address.streetAddress,
  "addressLocality": COMPANY_INFO.address.addressLocality,
  "addressRegion": COMPANY_INFO.address.addressRegion,
  "postalCode": COMPANY_INFO.address.postalCode,
  "addressCountry": COMPANY_INFO.address.addressCountry
};

const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  "opens": "00:00",
  "closes": "23:59"
};

// Mirrors the FAQ copy rendered by ContactClient — keep the two in sync.
const FAQ_ENTRIES = [
  {
    q: "How can I book a cab with Triveni Cabs™?",
    a: "Call +91 76685 70551, send a WhatsApp message, fill the enquiry form on this page, or email cabstriveni@gmail.com. Phone and WhatsApp are answered 24 hours a day, every day."
  },
  {
    q: "What are your customer support hours?",
    a: "Booking support on phone and WhatsApp runs 24x7. Our Agra office is open for walk-in visits between 9:00 AM and 6:00 PM."
  },
  {
    q: "Which cities does Triveni Cabs™ operate in?",
    a: "We run across 50+ cities in North and Central India, including Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, Amritsar, Dehradun, Rishikesh, Haridwar, Jodhpur, Udaipur, Ayodhya and Ahmedabad, plus outstation trips from all of them."
  },
  {
    q: "How quickly can I get a cab after booking?",
    a: "For an immediate pickup we usually place a car within 30 to 60 minutes, depending on your location. Book 4 to 6 hours ahead for a scheduled local trip, and 24 hours ahead for outstation journeys."
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, UPI (Google Pay, PhonePe, Paytm), bank transfer and online payment. Corporate clients can request monthly billing with a GST invoice."
  }
];

export default function ContactPage() {
  return (
    <>
      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${PAGE_URL}#contactpage`,
            "name": "Contact Triveni Cabs",
            "description": "Get in touch with Triveni Cabs™ for 24/7 taxi booking support, inquiries, and customer service.",
            "url": PAGE_URL,
            "mainEntity": {
              "@type": "Organization",
              "name": COMPANY_INFO.name,
              "legalName": COMPANY_INFO.legalName,
              "foundingDate": COMPANY_INFO.foundingDate,
              "url": BASE_URL,
              "telephone": COMPANY_INFO.phone.primary,
              "email": COMPANY_INFO.email.primary,
              "address": POSTAL_ADDRESS,
              "sameAs": [
                COMPANY_INFO.social.facebook,
                COMPANY_INFO.social.instagram,
                COMPANY_INFO.social.twitter,
                COMPANY_INFO.social.linkedin
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": COMPANY_INFO.phone.primary,
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi"],
                  "hoursAvailable": OPENING_HOURS
                },
                {
                  "@type": "ContactPoint",
                  "telephone": COMPANY_INFO.phone.primary,
                  "contactType": "reservations",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi"],
                  "hoursAvailable": OPENING_HOURS
                }
              ]
            }
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
                "item": BASE_URL
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": PAGE_URL
              }
            ]
          })
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${PAGE_URL}#localbusiness`,
            "name": COMPANY_INFO.name,
            "image": `${BASE_URL}/logo.png`,
            "telephone": COMPANY_INFO.phone.primary,
            "email": COMPANY_INFO.email.primary,
            "address": POSTAL_ADDRESS,
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": COMPANY_INFO.geo.latitude,
              "longitude": COMPANY_INFO.geo.longitude
            },
            "hasMap": "https://maps.google.com/?q=366+Dandupura+near+Tajganj+Agra+Uttar+Pradesh+282006",
            "url": PAGE_URL,
            "priceRange": "₹₹",
            "currenciesAccepted": "INR",
            "paymentAccepted": "Cash, UPI, Bank Transfer, Credit Card",
            "openingHoursSpecification": OPENING_HOURS
          })
        }}
      />

      {/* FAQ Schema for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQ_ENTRIES.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a
              }
            }))
          })
        }}
      />

      {/* Speakable WebPage Schema for voice assistants */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${PAGE_URL}#webpage`,
            "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first'])
          })
        }}
      />

      <ContactClient />
    </>
  );
}
