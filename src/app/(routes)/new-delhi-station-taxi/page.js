import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'New Delhi Railway Station', stationCode: 'NDLS', city: 'Delhi', platforms: 16, slug: 'new-delhi-station-taxi',
  description: 'Pre-booked taxi from New Delhi Railway Station (NDLS) to Connaught Place, India Gate, IGI Airport & across Delhi-NCR. Fixed fares, AC vehicles, 24/7 platform exit pickup.',
  cabWaitingPoint: 'Gate No. 1 (Ajmeri Gate Side) or Gate No. 2 (Paharganj Side) — tell us your exit gate and our driver meets you with a name placard immediately outside.',
  majorTrains: ['Rajdhani Express', 'Shatabdi Express', 'Vande Bharat', 'Duronto Express', 'Gatimaan Express', 'Sampark Kranti'],
  destinations: [
    { name: 'Connaught Place', distance: '2 km', fare: 199 },
    { name: 'India Gate', distance: '4 km', fare: 249 },
    { name: 'Red Fort', distance: '5 km', fare: 299 },
    { name: 'Airport IGI', distance: '18 km', fare: 599 },
    { name: 'Noida', distance: '20 km', fare: 699 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'India Gate + Qutub Minar + Lotus Temple', sedan: 1599, suv: 2199 },
    { name: '8 Hr / 80 Km', coverage: 'Full Delhi sightseeing — Old & New Delhi', sedan: 2699, suv: 3499 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Platform Exit Pickup', desc: 'Driver meets you at NDLS Gate 1 or Gate 2 with a name board. No searching in the crowd.' },
    { icon: 'Shield', title: 'Fixed Fare — No Surge', desc: 'Transparent pricing agreed before booking. No app surge, no meter tricks, no hidden charges.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'New Delhi station runs round the clock and so do we. Late night Rajdhani? We are there.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'Every vehicle is GPS tracked. Share live location with family for complete peace of mind.' },
    { icon: 'BadgeCheck', title: 'Verified Delhi Drivers', desc: 'Background-verified drivers who know every Delhi route, metro interchange, and shortcut.' },
    { icon: 'Sparkles', title: 'Better Than Prepaid Booth', desc: 'Our fares match or beat the NDLS prepaid counter. Better cars, no queue, driver waiting at exit.' },
  ],
  faqs: [
    { question: 'How much does a taxi from New Delhi Railway Station to IGI Airport cost?', answer: 'A taxi from NDLS to IGI Airport costs ₹599 for an AC sedan. The 18 km journey takes approximately 40-60 minutes depending on traffic. We also offer SUV options for larger groups.' },
    { question: 'Is there a prepaid taxi booth at New Delhi Railway Station?', answer: 'Yes, NDLS has prepaid taxi booths at both Gate 1 and Gate 2. However, queues are long, especially at peak hours. Our pre-booked service ensures your driver is already waiting when you exit — no queue, fixed fare, better vehicle.' },
    { question: 'Can I book a taxi from NDLS to Agra or Jaipur?', answer: 'Absolutely! We offer one-way outstation cabs from New Delhi station to Agra (₹2,499+), Jaipur (₹3,999+), Chandigarh (₹3,499+) and 50+ cities. Call 7668570551 for quotes.' },
    { question: 'Which exit gate should I use at New Delhi Railway Station?', answer: 'NDLS has two main exits — Gate 1 (Ajmeri Gate Side, towards Connaught Place) and Gate 2 (Paharganj Side). Tell us your gate when booking and our driver will be right there with your name board.' },
    { question: 'Do you provide taxi for Delhi sightseeing from New Delhi station?', answer: 'Yes! Our 4hr/40km package (₹1,599) covers India Gate, Qutub Minar, and Lotus Temple. The 8hr/80km package (₹2,699) covers full Old and New Delhi sightseeing. Driver stays with you all day.' },
    { question: 'Is it safe to take a taxi from New Delhi Railway Station late at night?', answer: 'With Triveni Cabs, absolutely. All our vehicles are GPS tracked, drivers are background-verified, and you receive driver details (name, phone, vehicle number) before pickup. We handle hundreds of late-night NDLS pickups monthly.' },
  ],
};

export const metadata = {
  title: 'New Delhi Station Taxi Service | Pickup from ₹199 — 4.9★ Rated',
  description: 'Book taxi from New Delhi Railway Station (NDLS). Fixed fares from ₹199 to CP, India Gate, Airport. AC sedan & SUV, 24/7, meet at platform exit. Call 7668570551.',
  keywords: 'new delhi station taxi, NDLS taxi, new delhi railway station cab, taxi from NDLS to airport, new delhi station to connaught place taxi, NDLS cab booking, new delhi station pickup, delhi railway station taxi fare, new delhi station prepaid taxi, NDLS to noida cab',
  alternates: { canonical: '/new-delhi-station-taxi' },
  openGraph: { title: 'New Delhi Railway Station Taxi — Fixed Fare from ₹199 | Triveni Cabs', description: '24/7 taxi from NDLS. CP ₹199, India Gate ₹249, Airport ₹599. AC vehicles, fixed fares, platform pickup.', type: 'website', url: `${BASE_URL}/new-delhi-station-taxi` },
};

export default function NewDelhiStationTaxiPage() {
  const cheapest = STATION.destinations.reduce((m, d) => Math.min(m, d.fare), Infinity);
  const highest = STATION.destinations.reduce((m, d) => Math.max(m, d.fare), 0);
  const schemas = [
    { "@context": "https://schema.org", "@type": "TaxiService", "name": `Triveni Cabs - ${STATION.stationName} Taxi`, "description": STATION.description, "provider": { "@type": "LocalBusiness", "name": COMPANY_INFO.name, "telephone": COMPANY_INFO.phone.primary }, "areaServed": { "@type": "Place", "name": STATION.city }, "offers": { "@type": "AggregateOffer", "lowPrice": cheapest, "highPrice": highest, "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", ...AGGREGATE_RATING } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL }, { "@type": "ListItem", "position": 2, "name": `${STATION.stationName} Taxi`, "item": `${BASE_URL}/${STATION.slug}` }] },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": STATION.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
  ];
  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-${STATION.slug}-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} strategy="beforeInteractive" />)}
      <AEOHead pageType="station" data={{ url: `/${STATION.slug}`, title: `${STATION.stationName} Taxi Service`, city: STATION.city }} />
      <StationTaxiClient data={STATION} />
    </>
  );
}
