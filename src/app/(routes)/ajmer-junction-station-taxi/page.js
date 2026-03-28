import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'Ajmer Junction', stationCode: 'AII', city: 'Ajmer', platforms: 5, slug: 'ajmer-junction-station-taxi',
  description: 'Pre-booked taxi from Ajmer Junction Railway Station to Ajmer Sharif Dargah, Pushkar, Ana Sagar Lake & Jaipur. Fixed fares, AC vehicles, 24/7 platform exit pickup with name board.',
  cabWaitingPoint: 'Main Exit Gate (towards Station Road) — our driver waits with your name placard right outside the station. The exit leads directly to the main market area.',
  majorTrains: ['Ajmer Shatabdi Express', 'Ajmer Superfast', 'Ajmer-Delhi Express', 'Chetak Express', 'Aravali Express', 'Sampark Kranti Express'],
  destinations: [
    { name: 'Ajmer Sharif Dargah', distance: '2 km', fare: 149 },
    { name: 'Pushkar', distance: '14 km', fare: 449 },
    { name: 'Ana Sagar Lake', distance: '3 km', fare: 199 },
    { name: 'Adhai Din Ka Jhonpra', distance: '2 km', fare: 149 },
    { name: 'Jaipur', distance: '135 km', fare: 1999 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'Dargah Sharif + Ana Sagar + Adhai Din Ka Jhonpra + Pushkar', sedan: 1399, suv: 1899 },
    { name: '8 Hr / 80 Km', coverage: 'Full Ajmer-Pushkar sightseeing with all temples & lakes', sedan: 2299, suv: 2999 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Station Exit Pickup', desc: 'Driver meets you at Ajmer Junction main exit with name board. No auto-rickshaw haggling.' },
    { icon: 'Shield', title: 'Fixed Fare — No Overcharge', desc: 'Pre-agreed pricing. Ajmer station autos often overcharge pilgrims — our fixed fares protect you.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'Ajmer Junction handles pilgrim trains at all hours including Urs festival specials. Always ready.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'Every vehicle GPS tracked. Share live trip link with family for safe and transparent travel.' },
    { icon: 'BadgeCheck', title: 'Ajmer-Pushkar Experts', desc: 'Local drivers who know every lane to the Dargah, Pushkar ghat, and all scenic viewpoints.' },
    { icon: 'Sparkles', title: 'Dargah + Pushkar Combo', desc: 'Special packages covering both Ajmer Sharif Dargah and Pushkar holy lake in one comfortable trip.' },
  ],
  faqs: [
    { question: 'How much does a taxi from Ajmer Junction to Ajmer Sharif Dargah cost?', answer: 'A taxi from Ajmer Junction to Ajmer Sharif Dargah costs just ₹149 for AC sedan. The distance is about 2 km and takes 10 minutes. Our driver drops you as close to the Dargah entrance as vehicles can go.' },
    { question: 'Can I book a taxi from Ajmer station to Pushkar?', answer: 'Yes! Ajmer Junction to Pushkar costs ₹449 for AC sedan. The scenic 14 km drive through the Aravalli hills takes about 25-30 minutes. We also offer Ajmer-Pushkar combo sightseeing packages.' },
    { question: 'Is there a prepaid taxi at Ajmer Junction station?', answer: 'Ajmer Junction has limited prepaid taxi options. Auto-rickshaws outside often overcharge, especially during Urs festival and peak pilgrim season. Our pre-booked AC taxi ensures fixed fare, clean vehicle, and driver at exit.' },
    { question: 'Can I book a taxi from Ajmer Junction to Jaipur?', answer: 'Absolutely! Ajmer to Jaipur is 135 km and costs ₹1,999 for AC sedan. The drive takes about 2.5 hours via NH48. We also offer reverse Jaipur-to-Ajmer drops at the same rate.' },
    { question: 'Do you provide taxi during the Ajmer Urs festival?', answer: 'Yes, we operate 24/7 including during the annual Urs at Ajmer Sharif. Demand peaks during Urs, so we recommend booking 3-5 days in advance. All fares remain fixed — no surge pricing during festivals.' },
    { question: 'What is the best way to visit both Ajmer and Pushkar in one day?', answer: 'Book our 8hr/80km package at ₹2,299. Start with Ajmer Sharif Dargah, Ana Sagar Lake, Adhai Din Ka Jhonpra, then drive to Pushkar for Brahma Temple, Pushkar Lake, and ghats. Driver stays with you all day.' },
  ],
};

export const metadata = {
  title: 'Ajmer Junction Station Taxi | Pickup from ₹149 — 4.9★ Rated',
  description: 'Book taxi from Ajmer Junction Railway Station (AII). Fixed fares from ₹149 to Ajmer Sharif Dargah, Pushkar, Ana Sagar Lake. AC sedan & SUV, 24/7. Call 7668570551.',
  keywords: 'ajmer junction taxi, ajmer station cab, AII station taxi, taxi from ajmer to pushkar, ajmer junction cab booking, ajmer station to dargah taxi, ajmer railway station taxi fare, ajmer to jaipur cab, ajmer junction prepaid taxi, ajmer station pickup',
  alternates: { canonical: '/ajmer-junction-station-taxi' },
  openGraph: { title: 'Ajmer Junction Taxi — Fixed Fare from ₹149 | Triveni Cabs', description: '24/7 taxi from Ajmer Junction. Dargah ₹149, Pushkar ₹449, Jaipur ₹1,999. AC vehicles, platform pickup.', type: 'website', url: `${BASE_URL}/ajmer-junction-station-taxi` },
};

export default function AjmerJunctionStationTaxiPage() {
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
