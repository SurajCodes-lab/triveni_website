import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'Mathura Junction', stationCode: 'MTJ', city: 'Mathura', platforms: 8, slug: 'mathura-junction-station-taxi',
  description: 'Pre-booked taxi from Mathura Junction Railway Station to Krishna Janmabhoomi, Vrindavan, Govardhan & Barsana. Fixed fares, AC vehicles, 24/7 platform exit pickup with name board.',
  cabWaitingPoint: 'Main Exit Gate (Junction Road side) — our driver waits with your name placard outside the main station building, near the auto-rickshaw stand.',
  majorTrains: ['Taj Express', 'Braj Express', 'Shatabdi Express', 'Rajdhani Express', 'Golden Temple Mail', 'Paschim Express'],
  destinations: [
    { name: 'Krishna Janmabhoomi', distance: '2 km', fare: 149 },
    { name: 'Vrindavan', distance: '12 km', fare: 399 },
    { name: 'Govardhan', distance: '25 km', fare: 699 },
    { name: 'Barsana', distance: '50 km', fare: 1199 },
    { name: 'Agra', distance: '58 km', fare: 1299 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'Krishna Janmabhoomi + Vrindavan temples + Prem Mandir', sedan: 1399, suv: 1899 },
    { name: '8 Hr / 80 Km', coverage: 'Full Mathura-Vrindavan-Govardhan circuit', sedan: 2299, suv: 2999 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Platform Exit Pickup', desc: 'Driver meets you at Mathura Junction main exit with name board. No rickshaw hassle with luggage.' },
    { icon: 'Shield', title: 'Fixed Fare — No Overcharge', desc: 'Pre-agreed pricing. Mathura autos often overcharge pilgrims — our fixed fares protect you.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'Mathura Junction handles trains at all hours, including overnight pilgrimage specials. We are always ready.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'All vehicles GPS tracked. Share live location with family for safe pilgrimage travel.' },
    { icon: 'BadgeCheck', title: 'Braj Circuit Experts', desc: 'Drivers who know every temple, ghat, and parikrama route in the Mathura-Vrindavan-Govardhan circuit.' },
    { icon: 'Sparkles', title: 'Pilgrimage Packages', desc: 'Special packages covering all holy sites — Krishna Janmabhoomi, Vrindavan, Govardhan, and Barsana.' },
  ],
  faqs: [
    { question: 'How much does a taxi from Mathura Junction to Vrindavan cost?', answer: 'A taxi from Mathura Junction to Vrindavan costs ₹399 for an AC sedan. The 12 km drive takes about 25-30 minutes. Our driver can also take you to multiple temples in Vrindavan including Prem Mandir, Banke Bihari, and ISKCON.' },
    { question: 'Can I book a taxi for the full Mathura-Vrindavan-Govardhan circuit?', answer: 'Yes! Our 8hr/80km package at ₹2,299 covers the complete Braj circuit — Mathura temples, Vrindavan temples, Govardhan Parikrama, and more. This is the most popular package for pilgrims arriving at Mathura Junction.' },
    { question: 'Is there a prepaid taxi at Mathura Junction station?', answer: 'Mathura Junction has limited prepaid taxi options. Auto-rickshaws dominate outside and frequently overcharge, especially during festivals like Janmashtami and Holi. Our pre-booked AC taxi is the safest and most comfortable choice.' },
    { question: 'How do I reach Govardhan from Mathura Junction?', answer: 'Govardhan is 25 km from Mathura Junction. Our taxi fare is ₹699 for AC sedan. The drive takes about 40-45 minutes. Many pilgrims combine this with Vrindavan for a full-day Braj darshan circuit.' },
    { question: 'Can I book a taxi from Mathura Junction to Agra for Taj Mahal?', answer: 'Absolutely! Mathura to Agra is 58 km and costs ₹1,299 for AC sedan. The drive takes about 1.5 hours via NH19. Many pilgrims combine Mathura-Vrindavan darshan with a Taj Mahal visit.' },
    { question: 'Do you provide taxi during Janmashtami and Holi festivals in Mathura?', answer: 'Yes, we operate 24/7 including during Janmashtami, Holi, and other major festivals. Demand is very high during these times, so we strongly recommend booking at least 2-3 days in advance. Call 7668570551 early.' },
  ],
};

export const metadata = {
  title: 'Mathura Junction Station Taxi | Pickup from ₹149 — 4.9★ Rated',
  description: 'Book taxi from Mathura Junction Railway Station (MTJ). Fixed fares from ₹149 to Krishna Janmabhoomi, Vrindavan, Govardhan. AC sedan & SUV, 24/7. Call 7668570551.',
  keywords: 'mathura junction taxi, mathura station cab, MTJ station taxi, taxi from mathura to vrindavan, mathura junction cab booking, mathura station to govardhan taxi, mathura railway station taxi, mathura to barsana cab, mathura junction to agra taxi, mathura station pickup',
  alternates: { canonical: '/mathura-junction-station-taxi' },
  openGraph: { title: 'Mathura Junction Taxi — Fixed Fare from ₹149 | Triveni Cabs', description: '24/7 taxi from Mathura Junction. Vrindavan ₹399, Govardhan ₹699, Agra ₹1,299. Platform pickup.', type: 'website', url: `${BASE_URL}/mathura-junction-station-taxi` },
};

export default function MathuraJunctionStationTaxiPage() {
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
