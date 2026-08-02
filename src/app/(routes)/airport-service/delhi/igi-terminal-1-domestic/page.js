import TerminalPageClient from '@/components/airport/TerminalPageClient';

export const revalidate = 3600;

export const metadata = {
  title: 'Delhi T1 Airport Taxi ₹450 | Flight-Tracked · No Surge',
  description: 'T1 domestic terminal taxi — Arrival Gate 1-4 pickup. Connaught Place ₹450, Gurgaon ₹550. 60 min free wait, no surge. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic' },
  openGraph: {
    title: 'Delhi T1 Taxi from ₹450 | Flight-Tracked Pickup, No Surge, Wait FREE 60 min',
    description: 'Landing at Delhi T1? Verified cab waiting at Arrival Gate 1-4 with your name. Fixed fares: Connaught Place ₹450, Gurgaon ₹550, Agra ₹3,500. No surge pricing even at 2 AM.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi IGI Airport Terminal 1 Domestic Taxi Service — Arrival Gate Pickup' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi T1 Airport Taxi ₹450 | No Surge, Flight-Tracked',
    description: 'T1 domestic terminal taxi. Flight delayed? 60 min free wait. Fixed fares, verified drivers, 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'delhi airport terminal 1 taxi, T1 delhi airport cab, terminal 1 IGI taxi, T1 domestic terminal pickup, IndiGo terminal cab delhi, SpiceJet terminal taxi, T1 to connaught place taxi, T1 to gurgaon cab, T1 to noida taxi, T1 to agra cab, late night T1 taxi, flight delayed T1 cab, T1 prepaid taxi alternative',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { q: 'Where is the pickup point at Delhi Airport Terminal 1?', a: 'Our drivers wait at the Arrival Gate exit on the Ground Floor, near Pillar No. 6-10, close to the Prepaid Taxi Counter. The driver will hold a nameboard with your name.' },
  { q: 'Which airlines operate from Terminal 1?', a: 'Terminal 1 handles domestic flights primarily from IndiGo, SpiceJet, GoFirst, AirAsia India, Star Air, and Fly91. All low-cost carrier domestic flights operate from T1.' },
  { q: 'How much does a taxi from Terminal 1 to city center cost?', a: 'A taxi from Terminal 1 to Connaught Place costs approximately ₹450-550, to Noida ₹800-950, and to Gurgaon ₹500-650. Prices start at ₹11/km with no hidden charges.' },
  { q: 'Do you wait if my flight is delayed?', a: 'Yes, we track your flight in real-time via the flight number you share at booking. If your flight is delayed, our driver adjusts arrival accordingly — we provide 60 minutes of free waiting after actual landing time, with no extra charge.' },
];

const terminalT = {
  international: false,
  airportName: 'Delhi IGI Airport',
  airportCode: 'DEL',
  terminalCode: 'T1',
  terminalName: 'Terminal 1 (T1)',
  terminalType: 'Domestic Terminal',
  headlineTop: 'Delhi Airport',
  headlineSub: 'Terminal 1 Taxi',
  tagline: 'India’s busiest low-cost domestic terminal. A verified cab waits at Arrival Gate 1-4 with your name — fixed fare from ₹450, 60 minutes free wait, zero surge.',
  pickupPoint: 'Arrival Gate 1-4, Ground Floor, Pillar No. 6-10',
  meetingPoint: 'Outside Arrival Gate, near Prepaid Taxi Counter',
  waitInfo: '60 min free after landing',
  distance: '15 km from Connaught Place',
  overviewTitle: 'Delhi IGI Terminal 1 Domestic Taxi',
  overview: [
    'Arriving at Delhi Airport Terminal 1? T1 handles the bulk of India’s low-cost domestic traffic — IndiGo, SpiceJet, Akasa and more. The moment your flight lands, our driver is already at the Arrival Gate exit with a nameboard, ready to take your bags and walk you to a clean, air-conditioned cab.',
    'We track your flight in real time, so a delay never costs you a waiting charge — you get a full 60 minutes free after touchdown. Fares are fixed from ₹11/km with tolls and parking included: ₹450 to Connaught Place, ₹550 to Gurgaon, or a direct ₹3,500 run to Agra. Booking takes 30 seconds on call or WhatsApp, 24/7.',
  ],
  airlines: ['IndiGo', 'SpiceJet', 'GoFirst', 'AirAsia India', 'Star Air', 'Fly91'],
  features: [
    'Dedicated pickup zone at Arrival Gate',
    'Driver meets with nameboard at exit',
    'Free 60-minute waiting after flight landing',
    'Flight tracking for delayed arrivals',
    'Luggage assistance provided',
    '24/7 availability for all domestic flights',
  ],
  pricing: [
    { destination: 'Connaught Place', distance: '15 km', fare: '₹450-550', time: '30-45 min' },
    { destination: 'Noida Sector 18', distance: '32 km', fare: '₹800-950', time: '50-70 min' },
    { destination: 'Gurgaon Cyber City', distance: '18 km', fare: '₹500-650', time: '30-45 min' },
    { destination: 'Old Delhi Railway Stn', distance: '20 km', fare: '₹550-650', time: '40-55 min' },
    { destination: 'Faridabad', distance: '35 km', fare: '₹850-1000', time: '55-75 min' },
    { destination: 'Agra (Outstation)', distance: '230 km', fare: '₹3500-4000', time: '3-4 hours' },
  ],
  faqs,
  crumb: [
    { label: 'Home', href: '/' },
    { label: 'Airport Service', href: '/airport-service' },
    { label: 'Delhi', href: '/airport-service/delhi' },
    { label: 'T1 Domestic' },
  ],
  relatedServices: [
    { href: '/airport-service/delhi', title: 'Delhi IGI Airport Hub', desc: 'All terminals — T1, T2, T3 pickup', iconName: 'Plane' },
    { href: '/airport-service/delhi/igi-terminal-3-international', title: 'Delhi T3 International', desc: 'International arrivals pickup', iconName: 'Globe' },
    { href: '/delhi-airport-to-agra-taxi', title: 'Delhi Airport to Agra', desc: 'Direct Taj Mahal transfer from T1', iconName: 'Star' },
    { href: '/airport-service/jewar/jewar-terminal-1-international', title: 'Noida Jewar Airport', desc: 'NIA Terminal 1 taxi service', iconName: 'Navigation' },
    { href: '/sightseeing/delhi', title: 'Delhi Sightseeing', desc: 'Full-day Delhi city tour', iconName: 'MapPin' },
    { href: '/corporate-transportation-service', title: 'Corporate Cabs', desc: 'Executive airport transfers', iconName: 'Crown' },
  ],
  ctaTitle: 'Book your Delhi T1 taxi',
  ctaSub: 'Arrival Gate 1-4 pickup · 60 min free wait · fixed fare · 24/7.',
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Delhi T1 Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Delhi Airport Terminal 1 (T1) Domestic Terminal. IndiGo, SpiceJet, Akasa Air arrivals — fixed fare from Rs 450, 60 min free wait, Arrival Gate 1-4 pickup.",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "147", "bestRating": "5", "worstRating": "1" },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Manish Agarwal" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver was at T1 Arrival Gate 2 with nameboard exactly when my IndiGo flight landed. Fixed Rs 500 to Connaught Place — no surge, no hidden charges. Way better than the prepaid counter." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Riya Saxena" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Late-night SpiceJet arrival at T1, Triveni Cabs sedan was waiting as promised. Driver helped with luggage, clean AC car, journey to Gurgaon was smooth. Recommended." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Vivek Joshi" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked Triveni Cabs T1 to Agra direct from the airport. Yamuna Expressway drive in 3 hours, driver was knowledgeable, AC working perfectly. Saved time vs taking train from Delhi." }
  ],
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "offers": { "@type": "Offer", "price": "11", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "11", "priceCurrency": "INR", "unitText": "per kilometer" } }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
    { "@type": "ListItem", "position": 4, "name": "IGI Terminal 1 Domestic", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function DelhiTerminal1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
