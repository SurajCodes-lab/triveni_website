import TourGuideClient from './TourGuideClient';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema,
  getArticleSchema,
  getHowToSchema,
  getComparisonSchema,
  getTodayDate,
} from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;

const TG_BASE = 'https://www.trivenicabs.in';
const TG_URL = `${TG_BASE}/tour-guide`;
const TG_IMG = `${TG_BASE}/images/tour-guide.jpg`;

// Guide-language fee + use-case matrix — feeds both visible table and Comparison schema.
const GUIDE_LANG_ROWS = [
  { feature: 'English', day: '₹1,500', bestFor: 'US / UK / Australia tourists, business visitors' },
  { feature: 'Hindi', day: '₹1,200', bestFor: 'Domestic travellers, NRI families' },
  { feature: 'French', day: '₹2,000', bestFor: 'France, Belgium, Canada (Québec), Switzerland' },
  { feature: 'Spanish', day: '₹2,000', bestFor: 'Spain & Latin American visitors' },
  { feature: 'German', day: '₹2,200', bestFor: 'Germany, Austria, Switzerland tour groups' },
  { feature: 'Chinese (Mandarin)', day: '₹2,500', bestFor: 'China, Taiwan, Singapore tourists' },
];

// Licensed vs unlicensed comparison — feeds visible table and Comparison schema.
const LICENSE_COMPARE_ROWS = [
  { feature: 'Government licence', licensed: 'Ministry of Tourism certified, photo-ID card', unlicensed: 'No verifiable licence' },
  { feature: 'Monument access', licensed: 'Allowed to guide inside ASI monuments', unlicensed: 'Often barred at ticket gates' },
  { feature: 'Knowledge depth', licensed: 'Trained in history, archaeology, culture', unlicensed: 'Anecdotal, unverified' },
  { feature: 'Pricing', licensed: 'Fixed day rate, shared upfront', unlicensed: 'Negotiated, commission-driven' },
  { feature: 'Accountability', licensed: 'Traceable, reviewable, insured booking', unlicensed: 'No recourse if things go wrong' },
];

// Expanded FAQ — 14 questions for FAQPage schema + visible FAQ (TourGuideClient).
export const TOUR_GUIDE_FAQS = [
  {
    question: 'Are your tour guides licensed by the Ministry of Tourism?',
    answer: 'Yes. Every Triveni Cabs tour guide holds a valid Regional Level Guide (RLG) licence issued by the Ministry of Tourism, Government of India, plus an ASI monument pass where required. We share the guide’s photo-ID and licence number on WhatsApp at booking confirmation so you can verify before the tour begins.',
  },
  {
    question: 'What languages do your tour guides speak?',
    answer: 'Our certified guides speak English, Hindi, French, Spanish, German and Chinese (Mandarin) fluently. On 12–24 hours’ notice we can also arrange Italian, Japanese, Russian, Portuguese, Korean and Arabic-speaking guides through our associate network.',
  },
  {
    question: 'How much does a tour guide cost per day in India?',
    answer: 'Day rates depend on language: Hindi guides start at ₹1,200/day and English at ₹1,500/day. French and Spanish guides are ₹2,000/day, German ₹2,200/day, and Chinese (Mandarin) ₹2,500/day. The rate covers a full 8–10 hour touring day and is fixed at booking with no hidden charges.',
  },
  {
    question: 'How do I book a licensed tour guide?',
    answer: 'Pick your city and preferred language on this page, then send the form via WhatsApp or call +91 7668570551. We confirm an available licensed guide within minutes, share their licence and photo-ID, and lock the day rate. You can also bundle a vehicle so the guide and car arrive together.',
  },
  {
    question: 'Should I tip my tour guide, and how much?',
    answer: 'Tipping is appreciated but never compulsory — the day rate is complete in itself. If you were happy with the experience, ₹300–₹500 per day for a full-day guide is a customary gesture in India. For multi-day tours, travellers often tip ₹500–₹1,000 at the end.',
  },
  {
    question: 'Can I get a tour guide with a vehicle (car or tempo)?',
    answer: 'Yes — our most popular option is a bundled tour where a Ministry-licensed guide and an AC vehicle (sedan, Innova, tempo traveller or luxury car) arrive together at one fixed fare. See our Tours With Guide hub to book vehicle + guide packages for Agra, Delhi, Jaipur and the Golden Triangle.',
  },
  {
    question: 'Are monument entry tickets included in the guide fee?',
    answer: 'No — the guide day rate covers the guide’s professional service only. Monument entry tickets (e.g. Taj Mahal, Agra Fort, Amber Fort) are paid separately and your guide helps you buy the correct ticket, use the skip-the-line counter where available, and avoid overpriced touts.',
  },
  {
    question: 'Do you have female tour guides?',
    answer: 'Yes. We have licensed female guides in Delhi, Agra and Jaipur, popular with solo female travellers and families. Request a female guide when booking and we will confirm availability for your dates — we recommend booking 24–48 hours ahead for female-guide requests.',
  },
  {
    question: 'Can one guide cover a multi-city or Golden Triangle tour?',
    answer: 'Regional licences are city/region-specific, so for a Golden Triangle tour we typically assign a Delhi-licensed guide for Delhi, an Agra-licensed guide at the Taj and Agra Fort, and a Jaipur-licensed guide in Jaipur — each an expert in their own monuments. For seamless travel we keep the same vehicle and driver throughout.',
  },
  {
    question: 'What is included in the tour guide service?',
    answer: 'Expert historical and cultural commentary, personalised itinerary pacing, photography assistance at the best spots, ticket-counter guidance, honest shopping and restaurant recommendations, and help with local interactions. The guide tailors the day to your interests — history, food, photography, spirituality or architecture.',
  },
  {
    question: 'Can I customise my tour itinerary?',
    answer: 'Absolutely. Tell your guide your interests and pace and they will build the day around you — sunrise at the Taj, an Old Delhi food walk, an early start to beat the Amber Fort crowds, or a slow heritage-photography route. Custom itineraries are confirmed on WhatsApp before the tour.',
  },
  {
    question: 'How far in advance should I book a tour guide?',
    answer: 'For English and Hindi guides, same-day or next-day booking is usually fine. For foreign-language guides (French, German, Spanish, Chinese, Japanese), peak season (October–March) and female-guide requests, book at least 24–48 hours ahead to guarantee your preferred guide.',
  },
  {
    question: 'Which cities do you provide tour guides in?',
    answer: 'We cover 14+ cities: Delhi, Agra, Jaipur, Shimla, Manali, Haridwar, Chandigarh, Amritsar, Dehradun, Rishikesh, Jodhpur, Udaipur, Ayodhya and Ahmedabad — with the deepest bench of licensed guides on the Golden Triangle (Delhi–Agra–Jaipur) circuit.',
  },
  {
    question: 'What are the payment and cancellation terms?',
    answer: 'Pay the guide in cash or by online transfer; the rate is fixed at booking with no hidden charges. Cancel 24 hours ahead for a full refund. Same-day cancellations carry a 50% fee. GST invoices are available on request for business travellers.',
  },
];

export const metadata = {
  title: 'Tour Guide India 2026 | Licensed Guides ₹1,200/Day',
  description: 'Hire certified tour guides in Delhi, Agra, Jaipur & 14+ cities. Multi-language (EN/FR/ES/DE). Ministry licensed. ₹1,200-3,000/day. 100+ guides.',
  keywords: [
    // Primary Keywords - High Volume
    'tour guide India',
    'tour guide services',
    'professional tour guide',
    'certified tour guide',
    'licensed tour guide India',
    'hire tour guide India',
    'book tour guide',
    'local tour guide',
    'expert tour guide',
    'tourist guide services',

    // City-Based Keywords
    'tour guide in Delhi',
    'tour guide in Agra',
    'tour guide in Jaipur',
    'tour guide in Shimla',
    'tour guide in Manali',
    'tour guide in Haridwar',
    'tour guide in Chandigarh',
    'tour guide in Amritsar',
    'tour guide in Dehradun',
    'tour guide in Rishikesh',
    'tour guide in Jodhpur',
    'tour guide in Udaipur',
    'tour guide in Ayodhya',
    'tour guide in Ahmedabad',
    'Agra tour guide',
    'Delhi tour guide',
    'Jaipur tour guide',
    'Rajasthan tour guide',
    'North India tour guide',

    // Language-Based Keywords
    'English speaking tour guide India',
    'Hindi tour guide',
    'French speaking tour guide India',
    'Spanish tour guide India',
    'German speaking guide India',
    'Chinese tour guide India',
    'multi-language tour guide',
    'foreign language tour guide',
    'bilingual tour guide',

    // Service Type Keywords
    'heritage tour guide',
    'cultural tour guide India',
    'historical tour guide',
    'sightseeing guide services',
    'monument tour guide',
    'temple tour guide',
    'palace tour guide',
    'fort tour guide',
    'museum tour guide',
    'archaeological tour guide',

    // Long-Tail Keywords
    'best tour guide in India',
    'affordable tour guide services India',
    'certified professional tour guide India',
    'government approved tour guide',
    'Ministry of Tourism certified guide',
    'experienced local tour guide',
    'knowledgeable tour guide India',
    'book tour guide online India',
    'hire private tour guide India',
    'personal tour guide India',
    'customized tour guide services',
    'flexible tour guide booking',

    // Tourist Experience Keywords
    'Taj Mahal tour guide',
    'Golden Triangle tour guide',
    'spiritual tour guide India',
    'pilgrimage tour guide',
    'adventure tour guide',
    'photography tour guide',
    'food tour guide India',
    'walking tour guide',
    'historical monument guide',
    'cultural heritage guide',

    // Booking & Service Keywords
    'instant tour guide booking',
    'WhatsApp tour guide booking',
    'online tour guide reservation',
    '24/7 tour guide services',
    'same day tour guide booking',
    'last minute tour guide',
    'tour guide with car',
    'tour guide package',
    'all-inclusive tour guide',

    // Quality & Trust Keywords
    'trusted tour guide India',
    'reliable tour guide services',
    'verified tour guide',
    'licensed tourist guide',
    'authentic tour experience',
    'expert local guide',
    'professional tourist guide',
    'qualified tour guide',
    'experienced heritage guide',

    // Feature-Based Keywords
    'tour guide with photography help',
    'tour guide for foreign tourists',
    'tour guide for solo travelers',
    'tour guide for families',
    'tour guide for groups',
    'private tour guide services',
    'personalized tour itinerary',
    'custom tour guide booking',
    'skip the line tour guide',

    // Location + Service Combinations
    'Delhi sightseeing guide',
    'Agra Taj Mahal guide',
    'Jaipur city tour guide',
    'Shimla Manali tour guide',
    'Golden Temple tour guide',
    'Varanasi spiritual guide',
    'Rajasthan heritage guide',
    'North India cultural guide',

    // Price-Related Keywords
    'cheap tour guide India',
    'affordable tour guide rates',
    'budget tour guide services',
    'tour guide price India',
    'tour guide cost per day',
    'economical tour guide',
    'value for money tour guide',

    // Niche Keywords
    'female tour guide India',
    'senior citizen tour guide',
    'student tour guide',
    'academic tour guide',
    'research tour guide',
    'documentary tour guide',
    'journalist tour guide',

    // Intent-Based Keywords
    'find tour guide near me',
    'tour guide contact number',
    'book tour guide now',
    'hire tour guide today',
    'tour guide availability',
    'tour guide reviews India',
    'best rated tour guide',
    'top tour guide services'
  ].join(', '),
  alternates: {
    canonical: 'https://www.trivenicabs.in/tour-guide'
  },
  openGraph: {
    title: 'Expert Tour Guides in India | Certified Multi-Language Local Guides',
    description: 'Book certified professional tour guides across 14+ cities. Multi-language guides (English, Hindi, French, Spanish, German, Chinese). Licensed by Ministry of Tourism. Instant booking from ₹1200/day.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/tour-guide',
    images: [
      {
        url: '/images/tour-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Certified Tour Guides in India - Multi-Language Local Expert Guides'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Expert Tour Guides Across India | Certified Local Guides',
    description: '🎯 Certified guides in 14+ cities | 6 languages | Heritage & cultural tours | ₹1200/day onwards | Instant WhatsApp booking',
    images: ['/images/tour-guide.jpg'],
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
    'price-range': 'INR 1200-2500',
    'service-areas': 'Delhi, Agra, Jaipur, Shimla, Manali, Haridwar, Chandigarh, Amritsar, Dehradun, Rishikesh, Jodhpur, Udaipur, Ayodhya, Ahmedabad',
    'languages': 'English, Hindi, French, Spanish, German, Chinese',
    'booking': 'Online, WhatsApp, Phone'
  }
};

export default function TourGuidePage() {
  return (
    <>
      {/* Enhanced Schema.org markup for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristInformationCenter",
            "name": "Professional Tour Guide Services - Triveni Cabs",
            "description": "Book experienced, certified tour guides in 14+ Indian cities. Multi-language guides available in 6 languages including English, Hindi, French, Spanish, German, and Chinese.",
            "url": "https://www.trivenicabs.in/tour-guide",
            "telephone": "+91-7668570551",
            "image": "https://www.trivenicabs.in/images/tour-guide.jpg",
            "priceRange": "₹1200-₹2500",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "366, Dandupura, near Tajganj",
              "addressLocality": "Agra",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "282006",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "27.1767",
              "longitude": "78.0081"
            },
            "openingHoursSpecification": {
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
            },
            "areaServed": [
              {
                "@type": "City",
                "name": "Delhi"
              },
              {
                "@type": "City",
                "name": "Agra"
              },
              {
                "@type": "City",
                "name": "Jaipur"
              },
              {
                "@type": "City",
                "name": "Shimla"
              },
              {
                "@type": "City",
                "name": "Manali"
              },
              {
                "@type": "City",
                "name": "Haridwar"
              },
              {
                "@type": "City",
                "name": "Chandigarh"
              },
              {
                "@type": "City",
                "name": "Amritsar"
              },
              {
                "@type": "City",
                "name": "Dehradun"
              },
              {
                "@type": "City",
                "name": "Rishikesh"
              },
              {
                "@type": "City",
                "name": "Jodhpur"
              },
              {
                "@type": "City",
                "name": "Udaipur"
              },
              {
                "@type": "City",
                "name": "Ayodhya"
              },
              {
                "@type": "City",
                "name": "Ahmedabad"
              }
            ],
            "serviceType": [
              "Tour Guide Services",
              "Heritage Tours",
              "Cultural Tours",
              "Sightseeing Tours",
              "Historical Tours",
              "Multi-language Guide Services",
              "Private Tour Guide",
              "Group Tour Guide",
              "Certified Tour Guide",
              "Licensed Tour Guide"
            ],
            "availableLanguage": [
              {
                "@type": "Language",
                "name": "English",
                "alternateName": "en"
              },
              {
                "@type": "Language",
                "name": "Hindi",
                "alternateName": "hi"
              },
              {
                "@type": "Language",
                "name": "French",
                "alternateName": "fr"
              },
              {
                "@type": "Language",
                "name": "Spanish",
                "alternateName": "es"
              },
              {
                "@type": "Language",
                "name": "German",
                "alternateName": "de"
              },
              {
                "@type": "Language",
                "name": "Chinese",
                "alternateName": "zh"
              }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Tour Guide Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "English Speaking Tour Guide",
                    "description": "Professional English speaking tour guide for heritage, cultural, and sightseeing tours across India"
                  },
                  "price": "1500",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1500",
                    "priceCurrency": "INR",
                    "referenceQuantity": {
                      "@type": "QuantitativeValue",
                      "value": "1",
                      "unitText": "DAY"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hindi Tour Guide",
                    "description": "Professional Hindi speaking local tour guide with deep cultural knowledge"
                  },
                  "price": "1200",
                  "priceCurrency": "INR",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1200",
                    "priceCurrency": "INR",
                    "referenceQuantity": {
                      "@type": "QuantitativeValue",
                      "value": "1",
                      "unitText": "DAY"
                    }
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "French Speaking Tour Guide",
                    "description": "Certified French speaking tour guide for international tourists"
                  },
                  "price": "2000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spanish Speaking Tour Guide",
                    "description": "Expert Spanish speaking guide for cultural and heritage tours"
                  },
                  "price": "2000",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "German Speaking Tour Guide",
                    "description": "Professional German speaking tour guide with historical expertise"
                  },
                  "price": "2200",
                  "priceCurrency": "INR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Chinese Speaking Tour Guide",
                    "description": "Certified Chinese speaking guide for Asian tourists"
                  },
                  "price": "2500",
                  "priceCurrency": "INR"
                }
              ]
            },
            ...getRatingAndReviews('tour-guide-hub', 'sightseeing'),
            "sameAs": [
              "https://www.facebook.com/trivenicabs",
              "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo",
              "https://twitter.com/TriveniCabs"
            ],
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/917668570551?text=Hello!%20I%27m%20interested%20in%20booking%20a%20tour%20guide.",
                "actionPlatform": [
                  "http://schema.org/DesktopWebPlatform",
                  "http://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": "Tour Guide Booking"
              }
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
                "item": "https://www.trivenicabs.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Tour Guide Services",
                "item": "https://www.trivenicabs.in/tour-guide"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema — 14 questions, Speakable-enabled */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${TG_URL}#faq`,
            "speakable": getSpeakableSchema(['.speakable-faq-first']),
            "mainEntity": TOUR_GUIDE_FAQS.map(f => ({
              "@type": "Question",
              "name": f.question,
              "acceptedAnswer": { "@type": "Answer", "text": f.answer }
            }))
          })
        }}
      />

      {/* Article Schema (E-E-A-T + freshness + Speakable for voice search) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getArticleSchema({
            slug: 'tour-guide',
            headline: 'Tour Guide India — Hire a Licensed Multilingual Tourist Guide',
            description: 'How to hire a Ministry-of-Tourism licensed tour guide in India: languages, day-rate fees, female guides, monument tickets, tipping and booking with or without a vehicle.',
            image: TG_IMG,
            datePublished: '2026-01-01',
            dateModified: getTodayDate(),
            authorName: 'editorial',
            speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
          }))
        }}
      />

      {/* HowTo Schema — book a licensed tour guide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getHowToSchema({
            name: 'How to Book a Licensed Tour Guide in India',
            description: 'Book a Ministry-of-Tourism licensed, multilingual tour guide in 5 simple steps — verify the licence before your tour begins.',
            totalTime: 'PT5M',
            estimatedCost: { currency: 'INR', value: '1200' },
            steps: [
              { name: 'Choose your city', text: 'Select the city you are visiting — Delhi, Agra, Jaipur or any of our 14+ destinations. Each city has its own bench of region-licensed guides.' },
              { name: 'Pick a guide language', text: 'Choose English, Hindi, French, Spanish, German or Chinese. Day rates range from ₹1,200 (Hindi) to ₹2,500 (Mandarin). Less-common languages can be arranged on 12–24 hours notice.' },
              { name: 'Send your request', text: 'Submit the booking form via WhatsApp or call +91 7668570551 with your dates, group size and interests.' },
              { name: 'Verify the licence', text: 'We share the assigned guide’s Ministry of Tourism licence number and photo-ID on WhatsApp so you can confirm before the tour starts.' },
              { name: 'Confirm and tour', text: 'Lock the fixed day rate, optionally bundle a vehicle, and meet your licensed guide at your hotel, the monument gate or the airport.' },
            ],
          }))
        }}
      />

      {/* Comparison Schema — licensed vs unlicensed guide */}
      {getComparisonSchema({
        slug: 'tour-guide',
        title: 'Licensed Tour Guide vs Unlicensed Freelance Guide in India',
        description: 'How a Ministry-of-Tourism licensed tour guide compares with an unlicensed freelance or tout guide across licence, monument access, knowledge, pricing and accountability.',
        rows: LICENSE_COMPARE_ROWS,
        mentions: ['Ministry of Tourism', 'Regional Level Guide licence', 'Archaeological Survey of India', 'Taj Mahal', 'tour guide'],
      }).map((node, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}

      <TourGuideClient faqs={TOUR_GUIDE_FAQS} languageRows={GUIDE_LANG_ROWS} compareRows={LICENSE_COMPARE_ROWS} />
    </>
  );
}
