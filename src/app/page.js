import Link from "next/link";
import Image from "next/image";
import HomeRedesign from "@/components/home/HomeRedesign";
// Resolved here rather than in the client components that use them: both read
// cityRoutesData.js (470 KiB), which has no reason to reach the browser.
import { getAllCities, getPopularRoutes } from "@/lib/searchUtils";
import { phoneNumber } from '@/utilis/contact';
import { getSeasonalNavItems } from '@/utilis/seasonalNav';
import { generateEntityDefinitionSchema, generateServiceAreaBusinessSchema } from '@/lib/seo/aeo-generators';
import { tightenTitle } from '@/lib/seo/serp-ctr';

// Company info - consistent NAP across all pages
const companyName = "Triveni Cabs™";
const companyEmail = "cabstriveni@gmail.com";
const companyAddress = "366, Dandupura, near Tajganj";
const companyCity = "Agra";
const companyState = "Uttar Pradesh";
const companyZip = "282006";

// Server-side metadata for SEO
export const metadata = {
  title: tightenTitle("Triveni Cabs™ — Cab ₹11/km | Delhi Agra Jaipur Shimla | 4.9★"),
  description: "Triveni Cabs™ — cab service from ₹11/km across 500+ cities. Delhi, Agra, Jaipur, Shimla airport pickup, wedding cars, tempo traveller. 4.9★ rated, 10K+ trips. Call 7668570551",
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
    title: "Triveni Cabs™ - India's #1 Travel Partner",
    description: "Wedding Cars | Airport Transfers | Tour Packages | Tempo Traveller | 500+ Destinations",
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs™",
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
    title: "Triveni Cabs™ - India's #1 Travel Partner",
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
      "https://www.instagram.com/cabstriveni",
      "https://twitter.com/trivenicabs"
    ]
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
      { "@type": "HowToStep", "position": 2, "name": "Select Vehicle Type", "text": "Choose from Sedan (4 seater, ₹11/km), SUV (6 seater, ₹15/km), or Tempo Traveller (12-17 seater, ₹25/km) based on your group size." },
      { "@type": "HowToStep", "position": 3, "name": "Provide Trip Details", "text": "Enter your pickup location, drop location, date, time, and number of passengers. Mention any special requirements." },
      { "@type": "HowToStep", "position": 4, "name": "Get Instant Quote", "text": "Receive transparent quote with all costs included - base fare, driver allowance, tolls, and taxes. No hidden charges." },
      { "@type": "HowToStep", "position": 5, "name": "Confirm Booking", "text": "Confirm via WhatsApp, phone call (7668570551), or online form. Pay small advance to secure your vehicle." },
      { "@type": "HowToStep", "position": 6, "name": "Enjoy Your Trip", "text": "Verified driver arrives 15 minutes before pickup. Enjoy comfortable, hassle-free journey with 24/7 support." }
    ]
  };

  // Entity definition and ServiceAreaBusiness for AEO/GEO
  const entitySchema = generateEntityDefinitionSchema();
  const serviceAreaSchema = generateServiceAreaBusinessSchema();

  return [servicesSchema, breadcrumbSchema, howToSchema, entitySchema, serviceAreaSchema];
}

// 17 home-page-specific long-tail FAQs (brand-level, not route-specific)
const HOME_LONG_TAIL_FAQS = [
  { question: 'What services does Triveni Cabs™ offer?', answer: 'Triveni Cabs™ offers outstation taxi (one-way + round-trip), airport transfers (Delhi IGI, Jaipur, Amritsar, Lucknow, Dehradun, Chandigarh), Tempo Traveller hire (12 / 17 / 26 seater), bus charter (22 / 32 / 45 / 56 seater), wedding car rental, corporate transport, and curated sightseeing tours across 46 North India cities. Available 24×7 at +91 7668570551.' },
  { question: 'How long has Triveni Cabs™ been operating?', answer: 'Triveni Cabs™ has been operating since 2015 — 11 years as of 2026. Founded by Pankaj Singh Gaur in Agra, we have completed more than 50,000 verified trips across 46 cities. Our home base is Agra, with operations covering Delhi NCR, Rajasthan, Uttarakhand, Himachal Pradesh, Punjab, and Uttar Pradesh.' },
  { question: 'Which cities does Triveni Cabs™ cover?', answer: '46+ cities including Delhi, Agra, Jaipur, Chandigarh, Amritsar, Dehradun, Haridwar, Rishikesh, Shimla, Manali, Udaipur, Jodhpur, Jaisalmer, Pushkar, Ajmer, Varanasi, Lucknow, Ayodhya, Mathura, Vrindavan, Mussoorie, Nainital, Jim Corbett, Dharamshala, Dalhousie, Mount Abu, Bikaner, Ranthambore, Pathankot, Ludhiana, Patiala, Ambala, Karnal, plus full Char Dham Yatra circuit (Yamunotri, Gangotri, Kedarnath, Badrinath).' },
  { question: 'Is Triveni Cabs™ available 24×7?', answer: 'Yes, Triveni Cabs™ is available 24×7. Call or WhatsApp +91 7668570551 any time. For night driving between 10 PM and 6 AM, a night allowance of ₹250 applies. For early-morning pickups (5–9 AM), we recommend booking the night before.' },
  { question: 'How do I book a Triveni Cabs™ taxi?', answer: 'Three ways: (1) Call +91 7668570551 directly for fastest confirmation, (2) WhatsApp the same number with your route, date and vehicle preference, (3) Use any route page on our website — every route page has a "Confirm fare on WhatsApp" button that pre-fills your selection. Booking confirmation arrives within 15 minutes during business hours.' },
  { question: 'What are Triveni Cabs™ prices in 2026?', answer: 'Per-km rates start at ₹11/km for Sedan, ₹15/km for SUV (Ertiga; Innova ₹18/km), ₹23/km for 12-seater Tempo Traveller, ₹25/km for 17-seater, ₹31/km for 26-seater, and ₹30–65/km for buses (22–56 seater). Outstation routes have published flat fares — see any city or one-way route page. All fares include fuel, driver, and AC.' },
  { question: 'Are GST invoices available?', answer: 'Yes. Triveni Cabs™ is GST-registered. Mention "GST invoice" at the time of booking and we will issue a tax invoice against your firm\'s GSTIN. Corporate customers receive monthly consolidated invoices. Individual customers can request a tax invoice for any single booking.' },
  { question: 'Are Triveni Cabs™ drivers verified?', answer: 'Every driver holds a valid commercial driving licence with minimum 5 years of commercial experience and a clean background check. All drivers are GPS-tracked, carry company ID, and undergo refresher training every six months. Our long-distance lead drivers have done specific routes (Delhi-Agra, Delhi-Manali, Char Dham) hundreds of times.' },
  { question: 'Is the vehicle insured?', answer: 'Yes. Every vehicle in our fleet carries comprehensive vehicle insurance plus passenger insurance covering each seat. In the event of any incident, the operations desk activates roadside assistance within 30 minutes and arranges a backup vehicle.' },
  { question: 'What if my flight or train is delayed?', answer: 'For airport / station pickups, your driver tracks your flight or train status in real time and adjusts the pickup time automatically. The first 60 minutes of waiting after the official arrival is free. Beyond that, waiting charges of ₹150/hour apply. Cancellation is free up to 6 hours before scheduled pickup.' },
  { question: 'Can I get a child seat or wheelchair-accessible cab?', answer: 'Yes. Complimentary child seats are available — please mention "with child seat" at booking. We have rear-facing infant seats, forward-facing toddler seats, and booster seats for ages 4–8. Wheelchair-accessible vehicles are available on request with 24 hours advance notice.' },
  { question: 'What is your cancellation policy?', answer: 'Free cancellation up to 6 hours before pickup. Cancellations within 6 hours of pickup attract a 25% charge. No-show (driver arrived but customer didn\'t show within 30 minutes) attracts a 50% charge. Full refunds are processed within 3 working days to the original payment method.' },
  { question: 'Do you serve airports outside Delhi?', answer: 'Yes — Jaipur (JAI), Amritsar (ATQ), Lucknow (LKO), Dehradun (DED), Chandigarh (IXC), Varanasi (VNS) plus full coverage of Jewar (Noida) International. Each airport has a dedicated terminal-by-terminal pickup page with fixed fares for the most-booked drop locations.' },
  { question: 'Are sightseeing tours available with an English-speaking guide?', answer: 'Yes. Driver guides are included free of charge on all our tours. For a Ministry of Tourism-recognised English / German / French / Spanish / Japanese / Mandarin-speaking professional guide, add the guide service at booking — typically ₹1,500–3,000 per day depending on language and city.' },
  { question: 'What is special about Triveni Cabs™ vs Ola / Uber for outstation?', answer: 'Three differences: (1) Fixed all-inclusive fare on our published rates — no surge pricing or surprise charges. (2) Same driver stays with you for the entire round-trip — Ola/Uber rotate drivers. (3) Driver knows the destination city — our Agra and Jaipur drivers have done thousands of those specific routes and can guide you to less-crowded restaurants, parking, photo spots.' },
  { question: 'Can I add multiple stops or sightseeing on a one-way / round-trip booking?', answer: 'Yes — add up to 2 sightseeing stops or pickup points at no extra charge, provided total distance stays within the booked km band. Longer detours are charged at the per-km rate of your vehicle category. For multi-stop itineraries spanning several cities, our round-trip booking with custom itinerary is the right choice.' },
  { question: 'Where is Triveni Cabs™ based?', answer: 'Registered office: 366 Dandupura, near Tajganj, Agra, Uttar Pradesh 282006, India. Operations run from Agra with driver hubs in Delhi, Jaipur, Haridwar, Dehradun, Shimla, Amritsar and Lucknow. Office hours are 24×7 for booking and dispatch.' },
];

function HomeRichBlock() {
  return (
    <section className="bg-slate-50 px-4 py-14 sm:px-6" aria-labelledby="home-booking-faq">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800">Before you book</p>
          <h2 id="home-booking-faq" className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">Your cab booking questions, answered</h2>
          <p className="mt-3 text-slate-600">Check services, fares and booking details. Confirm the terms for your selected route with our team before paying.</p>
        </div>
        <div className="mt-7 grid items-start gap-3 lg:grid-cols-2">
          {HOME_LONG_TAIL_FAQS.map((faq) => (
            <details key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-5">
              <summary className="cursor-pointer text-base font-bold leading-relaxed text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-700">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
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
      <HomeRedesign
        cities={getAllCities()}
        popularRoutes={getPopularRoutes()}
        seasonalContent={<SeasonSpecials />}
        bookingHelp={<HomeRichBlock />}
      />

      {/* Season Specials — Aug/Sep 2026 in-window campaign pages given homepage
          equity (they previously had zero homepage links). Server-rendered,
          date-gated: renders only during the Aug–Oct season window, null
          off-season. Paired with the layout revalidate=3600 so it stays fresh. */}

      {/* Rich-UI + ranking-lift block — sits after the interactive hero
          experience. Animated counters, calculator, founder quote, long-tail
          FAQ accordion (17 brand-level Q&A), authority citations. */}
    </>
  );
}

// Aug–Oct 2026 seasonal campaign cards. Gives the seasonal money pages
// homepage equity (previously footer-only). Date-gated to the season window.
// Week 48: the homepage season block used to be a hand-written August list
// (Independence Day, Janmashtami, a "Mumbai & Pune" line) that stayed up until
// somebody edited it. It now reads the same date-driven list the header menu
// uses (src/utilis/seasonalNav.js), so the cards are whatever is in its window
// on the day the page is rendered (ISR, hourly), through the wedding season and
// the New Year. Each entry here only adds the card copy; the dates live in one place.
const SEASON_CARD_COPY = {
  '/navratri-vaishno-devi-cab': { name: 'Navratri Vaishno Devi — 11–20 Oct', blurb: 'Delhi to Katra cabs for the busiest ten days at the shrine. Fixed fares, the driver waits while you climb.', image: '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg' },
  '/navratri-vaishno-devi-by-road': { name: 'Navratri by road: the Delhi–Katra guide', blurb: 'The 630 km drive, the yatra parchi, darshan waits in October and where the cab parks.', image: '/images/sightseeing/Vaishno_Devi/Vaishno_Devi_hero_section.jpg' },
  '/kullu-dussehra-2026-by-car': { name: 'Kullu Dussehra — 20–26 Oct', blurb: 'The week-long fair on Dhalpur ground and the drive from Chandigarh through Mandi.', image: '/images/sightseeing/Manali/Manali_hero_section.jpg' },
  '/durga-puja-travel-transport': { name: 'Durga Puja & Dussehra — 17–20 Oct', blurb: 'Pandal-hopping and Dussehra travel by cab and Tempo Traveller across North India.', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  '/kedarnath-september-trip': { name: 'Kedarnath in the clear-weather window', blurb: 'Best weather for Kedarnath before the portals close. Road and helicopter packages from Delhi, Rishikesh and Haridwar.', image: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg' },
  '/chardham-yatra-september-2026': { name: 'Char Dham before the portals close', blurb: 'Post-monsoon Char Dham, portals open through October. Taxi packages from Haridwar, Rishikesh and Delhi.', image: '/images/sightseeing/Char_Dham/Chardham_hero_section.jpg' },
  '/diwali-ayodhya-transport': { name: 'Diwali in Ayodhya — Deepotsav 7 Nov', blurb: 'Delhi to Ayodhya cabs for Deepotsav on the Saryu and Diwali at the Ram Mandir.', image: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg' },
  '/deepotsav-ayodhya-2026-guide': { name: 'Deepotsav guide: how to reach, where to stand', blurb: 'The expressway drive, the public viewing points, the closures and when to leave.', image: '/images/sightseeing/Ayodhya/Ayodhya_Hero_section.jpg' },
  '/diwali-tour-packages-2026-from-delhi': { name: 'Diwali trips from Delhi — 7–9 Nov', blurb: 'Ayodhya, Amritsar, Jaipur, Mathura, Varanasi, Shimla or Rishikesh: three days by car with the fare worked out per route.', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  '/chhath-puja-varanasi-transport': { name: 'Chhath Puja Varanasi — 13–16 Nov', blurb: 'Ghat drops for the Sandhya and Usha Arghya, overnight from Delhi.', image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg' },
  '/chhath-puja-varanasi-ghat-guide': { name: 'Chhath on the Varanasi ghats: the guide', blurb: 'Which ghats, the arghya timings, where the roads close and where the cab waits.', image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg' },
  '/pushkar-mela-transport': { name: 'Pushkar Mela — 17–25 Nov', blurb: 'Camel fair cabs from Delhi and Jaipur, the driver stays on through the fair.', image: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg' },
  '/pushkar-mela-2026-by-car': { name: 'Pushkar Mela by car: the guide', blurb: 'The trading days, the Kartik Purnima dip, the Delhi and Jaipur drives, the parking.', image: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg' },
  '/dev-deepawali-varanasi-2026': { name: 'Dev Deepawali Varanasi — 24 Nov', blurb: 'The one night every ghat is lit end to end: the boat to book now and the Delhi drive.', image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg' },
  '/wedding': { name: 'Wedding cars — season opens 20 Nov', blurb: 'BMW, Audi, Mercedes, vintage and baraat Tempo Travellers, decorated, with chauffeur.', image: '/images/wedding/luxury_car.jpg' },
  '/best-car-for-wedding-2026': { name: 'Which car for which wedding moment', blurb: 'Bride entry, groom entry, vidai and baraat: the 2026 prices per day and how to choose.', image: '/images/wedding/vintage_car.jpg' },
  '/christmas-shimla-manali-package': { name: 'Christmas Shimla–Manali', blurb: 'Snow week in Himachal by car from Delhi and Chandigarh.', image: '/images/sightseeing/Shimla/shimla_hero_section.jpg' },
  '/new-year-road-trip-packages': { name: 'New Year road trips', blurb: 'Hill-station and desert New Year drives with the driver staying on.', image: '/images/sightseeing/Manali/Manali_hero_section.jpg' },
  '/winter-snow-trip-packages': { name: 'Winter snow trips', blurb: 'Kufri, Dhanaulti, Auli and Manali snow drives from Delhi NCR, December to January.', image: '/images/sightseeing/Kufri/kufri_hero_section.jpg' },
};

function SeasonSpecials() {
  const items = getSeasonalNavItems(new Date(), 8).filter((i) => SEASON_CARD_COPY[i.href]);
  // Nothing in window: render nothing rather than a stale block.
  if (!items.length) return null;

  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-14 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Season Specials · this window</span>
          <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight text-slate-900">
            Book the season before the window closes
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Navratri at Katra, Kullu Dussehra, Deepotsav in Ayodhya, Chhath and Dev Deepawali on the Varanasi ghats, Pushkar Mela and the wedding season: fixed-fare, chauffeur-driven cabs from Delhi NCR, Chandigarh, Jaipur and Lucknow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => {
            const card = SEASON_CARD_COPY[item.href];
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm transition hover:border-amber-400 hover:shadow-md"
              >
                {/* Fixed aspect ratio with `fill`, so the card reserves its
                    space before the image arrives and cannot shift the grid.
                    Every path is checked against public/ at build time. */}
                {card.image && (
                  <span className="relative block aspect-[16/10] overflow-hidden bg-amber-50">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                  </span>
                )}
                <span className="flex flex-col flex-grow p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700">
                    {card.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-snug flex-grow">
                    {card.blurb}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-amber-700 group-hover:underline">
                    View details →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
