import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Delhi T3 International Airport Taxi ₹550 | No Surge'),
  description: 'T3 international arrivals — 90 min free wait. Verified driver, nameboard. Connaught Place ₹550, Gurgaon ₹650, Agra ₹3,800. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international' },
  openGraph: {
    title: 'Delhi T3 International Taxi ₹550 | 90 min Free Wait, Flight-Tracked Pickup',
    description: 'Arriving at T3 from overseas? Verified cab waiting with your name. Fixed fares — Connaught Place ₹550, Gurgaon ₹650, Agra ₹3,800. No surge, baggage help, 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi IGI T3 International Airport Taxi — 90 min Free Wait, Fixed Fare' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi T3 International Airport Taxi ₹550 | 90 min Free Wait',
    description: 'T3 international pickup with nameboard. Fixed fares, no surge. Emirates/Lufthansa/Singapore arrivals welcome 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'delhi airport terminal 3 taxi, T3 delhi airport cab, terminal 3 IGI taxi, international terminal delhi cab, T3 international flight pickup, emirates T3 taxi, lufthansa T3 cab, singapore airlines delhi taxi, T3 to connaught place taxi, T3 to gurgaon cab, T3 to hotel taxi, late night T3 taxi, T3 prepaid taxi alternative, T3 arrival gate pickup',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { q: 'Where exactly does the driver meet me at Terminal 3?', a: 'After clearing immigration and customs at T3 International Arrival, exit through Gate 4-8. Our driver will be waiting outside the arrival hall near the Forex Counter/Starbucks with a nameboard showing your name.' },
  { q: 'Which international airlines fly into Terminal 3?', a: 'Terminal 3 handles all major international airlines including Emirates, Lufthansa, Singapore Airlines, British Airways, Thai Airways, Qatar Airways, Etihad, Turkish Airlines, Air France, and Air India international flights.' },
  { q: 'How long do you wait for international flights?', a: 'We provide 45 minutes free waiting time for international flights after actual landing, accounting for immigration and customs clearance. Our team tracks your flight in real-time and adjusts for delays.' },
  { q: 'Can I book a taxi from T3 to Agra same day?', a: 'Yes! Many international tourists book our taxi from Terminal 3 directly to Agra for the Taj Mahal. The journey takes 3-4 hours. We also offer Delhi-Agra day tour packages starting from the airport.' },
];

const terminalT = {
  international: true,
  airportName: 'Delhi IGI Airport',
  airportCode: 'DEL',
  terminalCode: 'T3',
  terminalName: 'Terminal 3 (T3)',
  terminalType: 'International & Premium Domestic Terminal',
  headlineTop: 'Delhi Airport',
  headlineSub: 'Terminal 3 International',
  tagline: 'India’s flagship international gateway. After immigration, a verified chauffeur greets you at Gate 4-8 with your name — fixed fare from ₹550, 45 min free wait for customs, no surge.',
  pickupPoint: 'International Arrival, Ground Floor, Gate 4-8, Near Pillar 20-28',
  meetingPoint: 'Outside International Arrival Hall, near Forex Counter and Starbucks',
  waitInfo: '45 min free for international',
  distance: '18 km from Connaught Place',
  overviewTitle: 'Delhi IGI Terminal 3 International Taxi',
  overview: [
    'Arriving at Delhi Airport Terminal 3 from overseas? T3 is India’s premier international terminal, serving Emirates, Lufthansa, Singapore Airlines, British Airways and every major carrier. After you clear immigration and customs and step out of Gate 4-8, your driver is already there with a nameboard near the Forex Counter, ready to help with your luggage and currency questions.',
    'International arrivals take time — so we give you 45 minutes of free waiting after landing and track your flight in real time, with absolutely no surge pricing. Fixed fares from ₹11/km include tolls and parking: ₹550 to Connaught Place, ₹650 to Gurgaon, ₹300 to an Aerocity hotel, or a direct same-day run to Agra for the Taj Mahal. Book on call or WhatsApp, 24/7.',
  ],
  airlines: ['Emirates', 'Lufthansa', 'Singapore Airlines', 'British Airways', 'Thai Airways', 'Air India (Intl)', 'Vistara (Intl)', 'Qatar Airways', 'Etihad Airways', 'Turkish Airlines', 'Air France'],
  features: [
    'International arrival gate pickup',
    'Nameboard meet & greet with passenger name',
    'Free 45-minute waiting for international flights',
    'Real-time international flight tracking',
    'Luggage trolley assistance',
    'Multi-language driver support (English/Hindi)',
    'Currency exchange guidance available',
    'Hotel booking assistance on request',
  ],
  pricing: [
    { destination: 'Connaught Place', distance: '18 km', fare: '₹500-650', time: '35-55 min' },
    { destination: 'Aerocity Hotels', distance: '3 km', fare: '₹200-300', time: '10 min' },
    { destination: 'Noida Sector 18', distance: '35 km', fare: '₹900-1100', time: '60-80 min' },
    { destination: 'Gurgaon Cyber City', distance: '16 km', fare: '₹500-600', time: '25-40 min' },
    { destination: 'Paharganj (Budget Hotels)', distance: '16 km', fare: '₹450-550', time: '35-50 min' },
    { destination: 'Agra (Taj Mahal)', distance: '230 km', fare: '₹3500-4000', time: '3-4 hours' },
    { destination: 'Jaipur', distance: '280 km', fare: '₹4000-4500', time: '5 hours' },
  ],
  faqs,
  crumb: [
    { label: 'Home', href: '/' },
    { label: 'Airport Service', href: '/airport-service' },
    { label: 'Delhi', href: '/airport-service/delhi' },
    { label: 'T3 International' },
  ],
  relatedServices: [
    { href: '/airport-service/delhi', title: 'Delhi IGI Airport Hub', desc: 'All terminals — T1, T2, T3 pickup', iconName: 'Plane' },
    { href: '/airport-service/delhi/igi-terminal-1-domestic', title: 'Delhi T1 Domestic', desc: 'Domestic low-cost carrier pickup', iconName: 'Car' },
    { href: '/delhi-airport-to-agra-taxi', title: 'Delhi Airport to Agra', desc: 'Same-day Taj Mahal transfer from T3', iconName: 'Star' },
    { href: '/airport-service/jewar/jewar-terminal-1-international', title: 'Noida Jewar Airport', desc: 'NIA Terminal 1 international taxi', iconName: 'Globe' },
    { href: '/sightseeing/delhi', title: 'Delhi Sightseeing', desc: 'Full-day Delhi city tour', iconName: 'MapPin' },
    { href: '/corporate-transportation-service', title: 'Corporate Cabs', desc: 'Executive VIP transfers', iconName: 'Crown' },
  ],
  ctaTitle: 'Book your Delhi T3 international taxi',
  ctaSub: 'Gate 4-8 meet & greet · 45 min free wait · fixed fare · 24/7.',
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "International Airport Transfer Service",
  "name": "Delhi T3 International Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Premium Triveni Cabs taxi service from Delhi Airport Terminal 3 (T3) International Terminal. Emirates, Lufthansa, Singapore Airlines, British Airways arrivals — 90 min free wait, fixed fares.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "200", "highPrice": "4500", "priceCurrency": "INR" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "168", "bestRating": "5", "worstRating": "1" },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Daniel Becker" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver waited at T3 international arrival with nameboard despite my Lufthansa flight being 75 minutes late. Spoke decent English, helped with luggage, no surge charges. Best airport pickup I have used in India." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Yuki Tanaka" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked Triveni Cabs for T3 to Aerocity hotel. The 45-minute free wait for customs clearance is real — driver did not charge extra despite the queue. Clean sedan, professional driver." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Sarah Mitchell" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Direct T3 to Agra transfer for the Taj Mahal day trip. Triveni Cabs handled everything — flight tracking, water bottles in the car, knowledgeable driver. Saved hours vs prepaid taxi." }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
    { "@type": "ListItem", "position": 4, "name": "IGI Terminal 3 International", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function DelhiTerminal3Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
