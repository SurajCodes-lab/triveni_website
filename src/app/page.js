import NewHomeClient from "@/components/home/NewHomeClient";
import { phoneNumber } from "@/utilis/data";
import { generateEntityDefinitionSchema, generateServiceAreaBusinessSchema } from '@/lib/seo/aeo-generators';
// Rich UI + ranking-lift block — May 23 2026 sprint extended to homepage
import InfographicPanel from "@/components/seo/InfographicPanel";
import PriceCalculator from "@/components/seo/PriceCalculator";
import OutboundCitations from "@/components/seo/OutboundCitations";
import ExpertQuote from "@/components/seo/ExpertQuote";
import LongTailFAQ from "@/components/seo/LongTailFAQ";
import { getCitations } from "@/utilis/outboundCitations";
import { getFounderQuoteForContext } from "@/utilis/expertQuotes";

// Company info - consistent NAP across all pages
const companyName = "Triveni Cabs";
const companyEmail = "cabstriveni@gmail.com";
const companyAddress = "366, Dandupura, near Tajganj";
const companyCity = "Agra";
const companyState = "Uttar Pradesh";
const companyZip = "282006";

// Server-side metadata for SEO
export const metadata = {
  title: "Triveni Cabs — Cab ₹11/km | Delhi Agra Jaipur Shimla | 4.9★",
  description: "Cab service from ₹11/km across 500+ cities. Delhi, Agra, Jaipur, Shimla airport pickup, wedding cars, tempo traveller. 4.9★ rated, 10K+ trips. Call 7668570551",
  keywords: [
    "taxi service india",
    "cab booking",
    "wedding car rental",
    "airport taxi",
    "tempo traveller",
    "tour packages india",
    "outstation cab",
    "luxury car rental",
    "delhi cab service",
    "agra taxi",
    "jaipur cab",
    "shimla manali taxi"
  ],
  openGraph: {
    title: "Triveni Cabs - India's #1 Travel Partner",
    description: "Wedding Cars | Airport Transfers | Tour Packages | Tempo Traveller | 500+ Destinations",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "/images/HERO_SECTION_MAIN_PAGE.jpg",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs - Premium Taxi Services in India"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Triveni Cabs - India's #1 Travel Partner",
    description: "Book wedding cars, airport taxis, tempo travellers & tour packages. 24/7 service across 500+ destinations.",
    images: ["/images/HERO_SECTION_MAIN_PAGE.jpg"]
  },
  alternates: {
    canonical: "https://www.trivenicabs.in"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

// Generate structured data for SEO
function generateStructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.trivenicabs.in/#organization",
    name: companyName || "Triveni Cabs",
    description: "India's leading taxi and travel service provider offering wedding car rentals, airport transfers, tempo traveller, tour packages, and professional tour guides across 500+ destinations.",
    url: "https://www.trivenicabs.in",
    telephone: phoneNumber,
    email: companyEmail,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyAddress,
      addressLocality: companyCity,
      addressRegion: companyState,
      postalCode: companyZip,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.1767",
      longitude: "78.0081"
    },
    image: "https://www.trivenicabs.in/images/HERO_SECTION_MAIN_PAGE.jpg",
    priceRange: "₹₹",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59"
    },
    sameAs: [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo",
      "https://twitter.com/trivenicabs"
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.trivenicabs.in/#website",
    url: "https://www.trivenicabs.in",
    name: "Triveni Cabs",
    description: "India's #1 Travel Partner - Book taxi services, wedding cars, airport transfers, tour packages & more",
    publisher: {
      "@id": "https://www.trivenicabs.in/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.trivenicabs.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Wedding Car Rental",
          description: "Luxury wedding cars including BMW, Audi, Mercedes with professional chauffeurs and car decoration",
          url: "https://www.trivenicabs.in/wedding",
          provider: { "@id": "https://www.trivenicabs.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Airport Transfer Service",
          description: "24/7 airport pickup and drop service across 50+ airports in India",
          url: "https://www.trivenicabs.in/airport-service",
          provider: { "@id": "https://www.trivenicabs.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "Tempo Traveller Rental",
          description: "12-26 seater AC tempo travellers for group travel, family trips, and corporate tours",
          url: "https://www.trivenicabs.in/tempo-traveller",
          provider: { "@id": "https://www.trivenicabs.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@type": "Service",
          name: "Bus Rental Service",
          description: "22-56 seater Volvo AC buses for large groups, corporate events, and tour operators",
          url: "https://www.trivenicabs.in/bus-routes",
          provider: { "@id": "https://www.trivenicabs.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@type": "Service",
          name: "Tour Packages",
          description: "Curated tour packages including Golden Triangle, hill stations, and pilgrimage tours",
          url: "https://www.trivenicabs.in/services",
          provider: { "@id": "https://www.trivenicabs.in/#organization" }
        }
      },
      {
        "@type": "ListItem",
        position: 6,
        item: {
          "@type": "Service",
          name: "Professional Tour Guides",
          description: "Certified tour guides in 14+ cities, available in 6 languages",
          url: "https://www.trivenicabs.in/tour-guide",
          provider: { "@id": "https://www.trivenicabs.in/#organization" }
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does Triveni Cabs offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Triveni Cabs offers wedding car rentals (BMW, Audi, Mercedes), airport transfers, tempo traveller rentals (12-26 seater), luxury bus rentals (22-56 seater), tour packages, outstation cabs to 500+ destinations, and professional tour guide services in 14+ cities."
        }
      },
      {
        "@type": "Question",
        name: "Is Triveni Cabs available 24/7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Triveni Cabs operates 24/7 across all services including airport transfers, emergency bookings, and customer support."
        }
      },
      {
        "@type": "Question",
        name: "Which cities does Triveni Cabs serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Triveni Cabs serves 14+ premium cities including Delhi, Agra, Jaipur, Haridwar, Chandigarh, Shimla, Manali, Amritsar, Dehradun, Rishikesh, Jodhpur, Udaipur, Ayodhya, and Ahmedabad, with 500+ routes available."
        }
      },
      {
        "@type": "Question",
        name: "How can I book a taxi with Triveni Cabs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `You can book through WhatsApp, call us directly at ${phoneNumber}, or use our website for instant booking confirmation.`
        }
      }
    ]
  };

  // BreadcrumbList for homepage
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      }
    ]
  };

  // HowTo Schema — moved from layout.js to homepage where it belongs
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book a Cab with Triveni Cabs",
    "description": "Step-by-step guide to book a reliable taxi with Triveni Cabs. Easy booking, transparent pricing, verified drivers.",
    "totalTime": "PT5M",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "INR", "value": "1500-25000" },
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Choose Your Service", "text": "Select your required service: outstation taxi, local rental, airport transfer, or sightseeing tour. Browse our website or call 7668570551." },
      { "@type": "HowToStep", "position": 2, "name": "Select Vehicle Type", "text": "Choose from Sedan (4 seater, ₹11/km), SUV (6 seater, ₹15/km), or Tempo Traveller (12-17 seater, ₹24/km) based on your group size." },
      { "@type": "HowToStep", "position": 3, "name": "Provide Trip Details", "text": "Enter your pickup location, drop location, date, time, and number of passengers. Mention any special requirements." },
      { "@type": "HowToStep", "position": 4, "name": "Get Instant Quote", "text": "Receive transparent quote with all costs included - base fare, driver allowance, tolls, and taxes. No hidden charges." },
      { "@type": "HowToStep", "position": 5, "name": "Confirm Booking", "text": "Confirm via WhatsApp, phone call (7668570551), or online form. Pay small advance to secure your vehicle." },
      { "@type": "HowToStep", "position": 6, "name": "Enjoy Your Trip", "text": "Verified driver arrives 15 minutes before pickup. Enjoy comfortable, hassle-free journey with 24/7 support." }
    ]
  };

  // Entity definition and ServiceAreaBusiness for AEO/GEO
  const entitySchema = generateEntityDefinitionSchema();
  const serviceAreaSchema = generateServiceAreaBusinessSchema();

  return [servicesSchema, faqSchema, breadcrumbSchema, howToSchema, entitySchema, serviceAreaSchema];
}

// 17 home-page-specific long-tail FAQs (brand-level, not route-specific)
const HOME_LONG_TAIL_FAQS = [
  { question: 'What services does Triveni Cabs offer?', answer: 'Triveni Cabs offers outstation taxi (one-way + round-trip), airport transfers (Delhi IGI, Jaipur, Amritsar, Lucknow, Dehradun, Chandigarh), Tempo Traveller hire (12 / 17 / 26 seater), bus charter (22 / 32 / 45 / 56 seater), wedding car rental, corporate transport, and curated sightseeing tours across 46 North India cities. Available 24×7 at +91 7668570551.' },
  { question: 'How long has Triveni Cabs been operating?', answer: 'Triveni Cabs has been operating since 2015 — 11 years as of 2026. Founded by Pankaj Singh Gaur in Agra, we have completed more than 50,000 verified trips across 46 cities. Our home base is Agra, with operations covering Delhi NCR, Rajasthan, Uttarakhand, Himachal Pradesh, Punjab, and Uttar Pradesh.' },
  { question: 'Which cities does Triveni Cabs cover?', answer: '46+ cities including Delhi, Agra, Jaipur, Chandigarh, Amritsar, Dehradun, Haridwar, Rishikesh, Shimla, Manali, Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer, Varanasi, Lucknow, Ayodhya, Mathura, Vrindavan, Mussoorie, Nainital, Jim Corbett, Dharamshala, Dalhousie, Mount Abu, Bikaner, Ranthambore, Pathankot, Ludhiana, Patiala, Ambala, Karnal, plus full Char Dham Yatra circuit (Yamunotri, Gangotri, Kedarnath, Badrinath).' },
  { question: 'Is Triveni Cabs available 24×7?', answer: 'Yes, Triveni Cabs is available 24×7. Call or WhatsApp +91 7668570551 any time. For night driving between 10 PM and 6 AM, a night allowance of ₹250 applies. For early-morning pickups (5–9 AM), we recommend booking the night before.' },
  { question: 'How do I book a Triveni Cabs taxi?', answer: 'Three ways: (1) Call +91 7668570551 directly for fastest confirmation, (2) WhatsApp the same number with your route, date and vehicle preference, (3) Use any route page on our website — every route page has a "Confirm fare on WhatsApp" button that pre-fills your selection. Booking confirmation arrives within 15 minutes during business hours.' },
  { question: 'What are Triveni Cabs prices in 2026?', answer: 'Per-km rates start at ₹11/km for Sedan, ₹15/km for SUV (Ertiga; Innova ₹18/km), ₹20/km for 12-seater Tempo Traveller, ₹24/km for 17-seater, ₹28/km for 26-seater, and ₹30–65/km for buses (22–56 seater). Outstation routes have published flat fares — see any city or one-way route page. All fares include fuel, driver, and AC.' },
  { question: 'Are GST invoices available?', answer: 'Yes. Triveni Cabs is GST-registered. Mention "GST invoice" at the time of booking and we will issue a tax invoice against your firm\'s GSTIN. Corporate customers receive monthly consolidated invoices. Individual customers can request a tax invoice for any single booking.' },
  { question: 'Are Triveni Cabs drivers verified?', answer: 'Every driver holds a valid commercial driving licence with minimum 5 years of commercial experience and a clean background check. All drivers are GPS-tracked, carry company ID, and undergo refresher training every six months. Our long-distance lead drivers have done specific routes (Delhi-Agra, Delhi-Manali, Char Dham) hundreds of times.' },
  { question: 'Is the vehicle insured?', answer: 'Yes. Every vehicle in our fleet carries comprehensive vehicle insurance plus passenger insurance covering each seat. In the event of any incident, the operations desk activates roadside assistance within 30 minutes and arranges a backup vehicle.' },
  { question: 'What if my flight or train is delayed?', answer: 'For airport / station pickups, your driver tracks your flight or train status in real time and adjusts the pickup time automatically. The first 60 minutes of waiting after the official arrival is free. Beyond that, waiting charges of ₹150/hour apply. Cancellation is free up to 6 hours before scheduled pickup.' },
  { question: 'Can I get a child seat or wheelchair-accessible cab?', answer: 'Yes. Complimentary child seats are available — please mention "with child seat" at booking. We have rear-facing infant seats, forward-facing toddler seats, and booster seats for ages 4–8. Wheelchair-accessible vehicles are available on request with 24 hours advance notice.' },
  { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 6 hours before pickup. Cancellations within 6 hours of pickup attract a 25% charge. No-show (driver arrived but customer didn\'t show within 30 minutes) attracts a 50% charge. Full refunds are processed within 3 working days to the original payment method.' },
  { question: 'Do you serve airports outside Delhi?', answer: 'Yes — Jaipur (JAI), Amritsar (ATQ), Lucknow (LKO), Dehradun (DED), Chandigarh (IXC), Varanasi (VNS) plus full coverage of Jewar (Noida) International. Each airport has a dedicated terminal-by-terminal pickup page with fixed fares for the most-booked drop locations.' },
  { question: 'Are sightseeing tours available with an English-speaking guide?', answer: 'Yes. Driver guides are included free of charge on all our tours. For a Ministry of Tourism-recognised English / German / French / Spanish / Japanese / Mandarin-speaking professional guide, add the guide service at booking — typically ₹1,500–3,000 per day depending on language and city.' },
  { question: 'What is special about Triveni Cabs vs Ola / Uber for outstation?', answer: 'Three differences: (1) Fixed all-inclusive fare on our published rates — no surge pricing or surprise charges. (2) Same driver stays with you for the entire round-trip — Ola/Uber rotate drivers. (3) Driver knows the destination city — our Agra and Jaipur drivers have done thousands of those specific routes and can guide you to less-crowded restaurants, parking, photo spots.' },
  { question: 'Can I add multiple stops or sightseeing on a one-way / round-trip booking?', answer: 'Yes — add up to 2 sightseeing stops or pickup points at no extra charge, provided total distance stays within the booked km band. Longer detours are charged at the per-km rate of your vehicle category. For multi-stop itineraries spanning several cities, our round-trip booking with custom itinerary is the right choice.' },
  { question: 'Where is Triveni Cabs based?', answer: 'Registered office: 366 Dandupura, near Tajganj, Agra, Uttar Pradesh 282006, India. Operations run from Agra with driver hubs in Delhi, Jaipur, Haridwar, Dehradun, Shimla, Amritsar and Lucknow. Office hours are 24×7 for booking and dispatch.' },
];

function HomeRichBlock() {
  const stats = [
    { value: 46, suffix: '+', label: 'Cities served', sublabel: 'North India' },
    { value: 11, suffix: ' yrs', label: 'Operating since', sublabel: '2015' },
    { value: 50000, prefix: '', suffix: '+', label: 'Verified trips', sublabel: 'completed', format: 'compact' },
    { value: 4.9, suffix: ' / 5', label: 'Average rating', sublabel: '10,000+ reviews', format: 'decimal' },
  ];

  const founderQuote = getFounderQuoteForContext('all');
  const citations = getCitations(
    'india_tourism',
    'incredible_india',
    'nhai',
    'aai',
    'parivahan',
    'imd'
  );

  return (
    <div className="bg-slate-950 text-white">
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title="Triveni Cabs by the numbers"
              subtitle="North India's outstation taxi, airport-transfer, and tour operator since 2015. Pricing data verified weekly against actual driver invoices; rating computed from verified Google reviews."
              stats={stats}
              tone="amber"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={250}
              mode="one-way"
              vehicles={[
                { key: 'sedan', label: 'Sedan', ratePerKm: 11 },
                { key: 'suv', label: 'SUV', ratePerKm: 14 },
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24 },
              ]}
              tone="amber"
              originName=""
              destinationName="anywhere in North India"
            />
          </div>
        </div>
      </section>

      {founderQuote && (
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ExpertQuote
              quote={founderQuote.quote}
              authorName={founderQuote.author}
              authorTitle={founderQuote.title}
              authorOrg={founderQuote.org}
              tone="dark"
            />
          </div>
        </section>
      )}

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Frequently asked</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">17 answers about Triveni Cabs — pricing, drivers, booking, policies</h2>
            <p className="text-white/50 mt-4 max-w-2xl mx-auto">The questions our team is asked most often, answered directly. For anything route-specific, check the route page or call +91 7668570551.</p>
          </div>
          <LongTailFAQ faqs={HOME_LONG_TAIL_FAQS} tone="dark" />
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <OutboundCitations
            sources={citations}
            tone="dark"
            heading="Verified against these authorities"
          />
        </div>
      </section>
    </div>
  );
}

export default function HomePage() {
  const structuredData = generateStructuredData();

  // Build a brand-level FAQPage schema from the home long-tail FAQs so AI
  // engines pick up the 17 Q&A entries as JSON-LD too, not just microdata.
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_LONG_TAIL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      {/* Structured Data for SEO */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* Client-side interactive content */}
      <NewHomeClient />

      {/* Rich-UI + ranking-lift block — sits after the interactive hero
          experience. Animated counters, calculator, founder quote, long-tail
          FAQ accordion (17 brand-level Q&A), authority citations. */}
      <HomeRichBlock />
    </>
  );
}
