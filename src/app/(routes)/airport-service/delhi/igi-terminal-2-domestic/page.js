import TerminalPageClient from '@/components/airport/TerminalPageClient';

export const revalidate = 3600;

export const metadata = {
  title: 'Delhi T2 Airport Taxi ₹450 | Flight-Tracked · No Surge',
  description: 'T2 Vistara/Air India terminal pickup at Arrival Forecourt. Connaught Place ₹450, Gurgaon ₹550. 60 min free wait. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic' },
  openGraph: {
    title: 'Delhi T2 Taxi from ₹450 | Flight-Tracked Pickup, No Surge, Wait FREE 60 min',
    description: 'Landing at Delhi T2? Verified cab waiting at Arrival Forecourt with your name. Fixed fares: Connaught Place ₹450, Gurgaon ₹550, Agra ₹3,500. No surge pricing even at 2 AM.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi IGI Airport Terminal 2 Taxi Service — Vistara Air India Pickup' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi T2 Airport Taxi ₹450 | No Surge, Flight-Tracked',
    description: 'T2 terminal taxi — Vistara, Air India pickup. Flight delayed? 60 min free wait. Fixed fares, verified drivers.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'delhi airport terminal 2 taxi, T2 delhi airport cab, terminal 2 IGI taxi, vistara terminal taxi, air india T2 pickup, T2 to connaught place, T2 to gurgaon, T2 to noida, late night T2 taxi, T2 flight delayed cab, T2 prepaid alternative',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { q: 'Where is the pickup point at Delhi Airport Terminal 2?', a: 'Our drivers wait at the T2 Arrival Gate exit on the Ground Floor, near Pillar No. 12-16, close to the Taxi Stand Area. Your driver will hold a nameboard with your name.' },
  { q: 'Which airlines operate from Terminal 2?', a: 'Terminal 2 primarily handles Vistara domestic flights, Air India domestic flights, Alliance Air, and select AirAsia India flights. Some international charter flights also operate from T2.' },
  { q: 'Is Terminal 2 far from Terminal 3?', a: 'Terminal 2 is located near Terminal 3 and is connected via the airport shuttle. If you have a connecting international flight from T3, we can provide inter-terminal transfer service.' },
  { q: 'How do I know if my flight is from Terminal 2?', a: 'Check your airline ticket or booking confirmation for terminal information. Vistara and Air India domestic flights typically operate from T2. You can also check the Delhi Airport website for real-time terminal information.' },
];

const terminalT = {
  international: false,
  airportName: 'Delhi IGI Airport',
  airportCode: 'DEL',
  terminalCode: 'T2',
  terminalName: 'Terminal 2 (T2)',
  terminalType: 'Domestic & Select International Terminal',
  headlineTop: 'Delhi Airport',
  headlineSub: 'Terminal 2 Taxi',
  tagline: 'The Vistara & Air India domestic gateway. Your driver waits at the T2 arrival forecourt with your name — fixed fare from ₹450, real-time flight tracking, no surge ever.',
  pickupPoint: 'Arrival Gate, Ground Floor, Pillar No. 12-16',
  meetingPoint: 'Outside Arrival Hall, near Taxi Stand Area',
  waitInfo: '60 min free after landing',
  distance: '16 km from Connaught Place',
  overviewTitle: 'Delhi IGI Terminal 2 Taxi',
  overview: [
    'Landing at Delhi Airport Terminal 2? T2 handles Vistara and Air India domestic operations plus Alliance Air and select charters. As soon as your flight touches down, our driver is at the T2 arrival forecourt near Pillar 12-16 with a nameboard, ready to carry your bags to a clean AC cab.',
    'Flights run late — that is why we track yours in real time and wait free after landing, no surge at any hour. Fixed fares from ₹11/km include tolls and parking: ₹450 to Connaught Place, ₹500 to Gurgaon, or a direct outstation run to Jaipur. Confirm in 30 seconds by call or WhatsApp, 24/7.',
  ],
  airlines: ['Vistara (Domestic)', 'Air India (Domestic)', 'Alliance Air', 'AirAsia India (Select)', 'International Charters'],
  features: [
    'Dedicated pickup at T2 Arrival Gate',
    'Nameboard meet & greet service',
    'Free 60-minute waiting after landing',
    'Real-time flight tracking',
    'Luggage assistance included',
    '24/7 service for all flights',
  ],
  pricing: [
    { destination: 'Connaught Place', distance: '16 km', fare: '₹450-600', time: '35-50 min' },
    { destination: 'Noida Sector 18', distance: '33 km', fare: '₹850-1000', time: '55-75 min' },
    { destination: 'Gurgaon Cyber City', distance: '17 km', fare: '₹500-650', time: '25-40 min' },
    { destination: 'India Gate', distance: '18 km', fare: '₹500-600', time: '35-50 min' },
    { destination: 'Karol Bagh', distance: '14 km', fare: '₹400-500', time: '30-45 min' },
    { destination: 'Jaipur (Outstation)', distance: '280 km', fare: '₹4000-4500', time: '5 hours' },
  ],
  faqs,
  crumb: [
    { label: 'Home', href: '/' },
    { label: 'Airport Service', href: '/airport-service' },
    { label: 'Delhi', href: '/airport-service/delhi' },
    { label: 'T2 Domestic' },
  ],
  relatedServices: [
    { href: '/airport-service/delhi', title: 'Delhi IGI Airport Hub', desc: 'All terminals — T1, T2, T3 pickup', iconName: 'Plane' },
    { href: '/airport-service/delhi/igi-terminal-3-international', title: 'Delhi T3 International', desc: 'International arrivals pickup', iconName: 'Globe' },
    { href: '/delhi-airport-to-jaipur-taxi', title: 'Delhi Airport to Jaipur', desc: 'Direct Pink City transfer from T2', iconName: 'Star' },
    { href: '/airport-service/jewar/jewar-terminal-1-international', title: 'Noida Jewar Airport', desc: 'NIA Terminal 1 taxi service', iconName: 'Navigation' },
    { href: '/sightseeing/delhi', title: 'Delhi Sightseeing', desc: 'Full-day Delhi city tour', iconName: 'MapPin' },
    { href: '/corporate-transportation-service', title: 'Corporate Cabs', desc: 'Executive airport transfers', iconName: 'Crown' },
  ],
  ctaTitle: 'Book your Delhi T2 taxi',
  ctaSub: 'Arrival forecourt pickup · free wait · fixed fare · 24/7.',
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Delhi T2 Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Delhi Airport Terminal 2 (T2). Vistara, Air India, Alliance Air arrivals — fixed fare from Rs 450, 60 min free wait.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "400", "highPrice": "4500", "priceCurrency": "INR" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "124", "bestRating": "5", "worstRating": "1" },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Karan Bhatia" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs T2 to Connaught Place at Rs 500 — driver was at the arrival forecourt with nameboard, no surge pricing. Way better than waiting in the prepaid taxi line." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Anita Rao" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked Triveni Cabs T2 to Gurgaon for an early morning Vistara arrival. Driver was punctual, AC sedan was clean, fixed fare honoured. Will use again." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Suresh Pillai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Air India domestic at T2 landed late; Triveni Cabs driver waited the full 60 minutes free as promised. Honest service, transparent pricing." }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
    { "@type": "ListItem", "position": 4, "name": "IGI Terminal 2 Domestic", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function DelhiTerminal2Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
