import TerminalPageClient from '@/components/airport/TerminalPageClient';

export const revalidate = 3600;

export const metadata = {
  title: 'Jewar Airport T1 Taxi | Noida International Airport Cab',
  description: 'Noida International Airport (Jewar) T1 taxi — domestic & international flights. Cabs to Noida, Delhi, Agra from ₹11/km. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/jewar/jewar-terminal-1-international' },
  openGraph: {
    title: 'Noida International Airport Jewar Taxi | NIA Terminal 1 Cab 24/7',
    description: 'Jewar Airport (Noida International Airport) taxi service. International & domestic flights pickup. Book now for seamless transfers!',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Jewar Noida International Airport Taxi' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jewar Airport Taxi | Noida International Airport Cab',
    description: 'NIA Jewar T1 taxi — domestic & international pickup. Verified drivers, fixed fares. Call 7668570551.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'jewar airport taxi, noida international airport cab, NIA airport taxi, jewar terminal 1 taxi, jewar airport to noida cab, jewar airport to delhi taxi, jewar airport to agra cab, jewar airport pickup, jewar airport transfer, jewar airport cab booking',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { q: 'Where is the pickup point at Jewar Airport Terminal 1?', a: 'Our drivers wait outside the Arrival Hall on the Ground Floor, near Gate 1-6 at Pillar A10-A18, close to the Information Kiosk and designated Cab Pickup Zone. The driver holds a nameboard with your name.' },
  { q: 'How far is Jewar Airport from Noida and Delhi?', a: 'Jewar Airport (Noida International Airport) is approximately 35 km from Noida Sector 18 (40 mins), 25 km from Greater Noida (30 mins), and 72 km from Delhi Connaught Place (1.5-2 hours). It is connected via the Yamuna Expressway and Delhi-Mumbai Expressway.' },
  { q: 'How much does a taxi from Jewar Airport to Agra cost?', a: 'A taxi from Jewar Airport to Agra (Taj Mahal) costs approximately ₹2,200-2,500 for a sedan. The journey is about 130 km and takes 2-2.5 hours via the Yamuna Expressway. This is the closest international airport to Agra.' },
  { q: 'Is Jewar Airport closer to Agra than Delhi Airport?', a: 'Yes! Jewar Airport is only 130 km from Agra compared to 230 km from Delhi IGI Airport. This saves 100 km and approximately 1.5 hours of travel time, making it the preferred airport for Taj Mahal visitors.' },
  { q: 'Do you provide taxi service from Jewar Airport to Delhi IGI Airport?', a: 'Yes, we provide inter-airport transfers between Jewar Airport (NIA) and Delhi IGI Airport. The distance is approximately 80 km and takes 1.5-2 hours. Fare starts at ₹1,400-1,700 for a sedan.' },
];

const terminalT = {
  international: true,
  airportName: 'Noida International Airport (Jewar)',
  airportCode: 'NIA',
  terminalCode: 'T1',
  terminalName: 'Terminal 1',
  terminalType: 'International & Domestic Terminal',
  headlineTop: 'Jewar Airport',
  headlineSub: 'Terminal 1 Taxi',
  tagline: 'India’s newest greenfield international airport — and the closest one to the Taj Mahal. Premium pickup at Gate 1-6 with your name, 45 min free wait, fixed fare from ₹11/km.',
  pickupPoint: 'Arrival Hall, Ground Floor, Gate 1-6, Near Pillar A10-A18',
  meetingPoint: 'Outside Arrival Hall, near Information Kiosk and Cab Pickup Zone',
  waitInfo: '45 min (Intl) · 30 min (Domestic)',
  distance: '35 km from Noida Sector 18, 72 km from Delhi',
  overviewTitle: 'Noida International Airport Jewar — Premium Transfer',
  overview: [
    'Arriving at Noida International Airport (NIA) Jewar? India’s newest greenfield international airport in Gautam Buddha Nagar sits on the Yamuna Expressway with seamless links to Noida, Greater Noida, Delhi, Agra and the whole western-UP region. Our driver is stationed at the Terminal 1 arrival exit near Gate 1-6, holding a nameboard with your name.',
    'Jewar’s biggest advantage is its proximity to Agra and the Taj Mahal — just 130 km versus 230 km from Delhi IGI, saving roughly 1.5 hours. We offer 45 minutes free waiting for international flights and 30 minutes for domestic, with real-time tracking. Fixed fares from ₹11/km, no surge — the same rate at midnight, early morning or peak hour, with tolls and parking charged at actual.',
  ],
  airlines: ['IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'AirAsia India', 'Akasa Air', 'Emirates', 'Singapore Airlines', 'Thai Airways', 'Lufthansa', 'Qatar Airways', 'Etihad Airways'],
  features: [
    'State-of-the-art terminal pickup zone',
    'Driver meets with nameboard at arrival exit',
    'Free 45-minute waiting for international flights',
    'Free 30-minute waiting for domestic flights',
    'Real-time flight tracking for all arrivals',
    'Luggage trolley assistance provided',
    'Multi-language driver support (English/Hindi)',
    'Direct highway connectivity to Delhi-Mumbai Expressway',
  ],
  pricing: [
    { destination: 'Greater Noida', distance: '25 km', fare: '₹400-500', time: '25-35 min' },
    { destination: 'Noida Sector 18', distance: '35 km', fare: '₹550-700', time: '35-45 min' },
    { destination: 'Delhi Connaught Place', distance: '72 km', fare: '₹1200-1500', time: '1.5-2 hours' },
    { destination: 'Ghaziabad', distance: '55 km', fare: '₹900-1100', time: '1-1.5 hours' },
    { destination: 'Mathura', distance: '90 km', fare: '₹1500-1800', time: '1.5 hours' },
    { destination: 'Agra (Taj Mahal)', distance: '130 km', fare: '₹2200-2500', time: '2-2.5 hours' },
    { destination: 'Delhi Airport (IGI)', distance: '80 km', fare: '₹1400-1700', time: '1.5-2 hours' },
  ],
  faqs,
  crumb: [
    { label: 'Home', href: '/' },
    { label: 'Airport Service', href: '/airport-service' },
    { label: 'Jewar', href: '/airport-service/jewar' },
    { label: 'T1 International' },
  ],
  relatedServices: [
    { href: '/airport-service/delhi', title: 'Delhi IGI Airport Taxi', desc: 'T1, T2, T3 pickup at IGI', iconName: 'Globe' },
    { href: '/airport-service/agra', title: 'Agra Airport Taxi', desc: 'Kheria Airport cab for Taj visitors', iconName: 'Car' },
    { href: '/delhi-airport-to-agra-taxi', title: 'Airport to Agra', desc: 'Direct Taj Mahal transfer', iconName: 'Star' },
    { href: '/sightseeing/agra', title: 'Agra Sightseeing Tour', desc: 'Same-day Taj Mahal tour from Jewar', iconName: 'MapPin' },
    { href: '/corporate-transportation-service', title: 'Corporate Cabs', desc: 'Executive transport for Noida IT', iconName: 'Crown' },
    { href: '/sightseeing/delhi', title: 'Delhi Sightseeing Tour', desc: 'Full-day Delhi tour for arrivals', iconName: 'Navigation' },
  ],
  ctaTitle: 'Book Jewar Airport taxi now',
  ctaSub: 'India’s newest international airport · closest to Agra · 24/7 premium service.',
};

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Noida International Airport (Jewar) Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Noida International Airport (NIA Jewar) Terminal 1. International and domestic arrivals — fixed fare to Noida, Delhi, Agra, Mathura. 24/7 availability with flight tracking.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": [
    { "@type": "City", "name": "Jewar" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Greater Noida" }
  ],
  "offers": { "@type": "AggregateOffer", "lowPrice": "400", "highPrice": "2500", "priceCurrency": "INR" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "92", "bestRating": "5", "worstRating": "1" },
  "review": [
    { "@type": "Review", "author": { "@type": "Person", "name": "Deepak Tyagi" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver met me at NIA Jewar T1 arrival as soon as my flight landed. Quick transfer to Noida Sector 18, fixed fare honoured. Easier than the IGI prepaid counter for Noida residents." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Anjali Bansal" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked Jewar to Agra direct via Triveni Cabs — saved 2+ hours vs going to Delhi. Yamuna Expressway connectivity from NIA is excellent. Great choice for Taj Mahal day-trippers." },
    { "@type": "Review", "author": { "@type": "Person", "name": "Rahul Goyal" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Late-night international arrival at Jewar T1, Triveni Cabs driver had nameboard ready, helped with the smart-parking exit. Modern airport, modern service. Will book again." }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Jewar", "item": "https://www.trivenicabs.in/airport-service/jewar" },
    { "@type": "ListItem", "position": 4, "name": "Terminal 1 International", "item": "https://www.trivenicabs.in/airport-service/jewar/jewar-terminal-1-international" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function JewarTerminal1Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
