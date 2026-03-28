import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'Jaipur Junction', stationCode: 'JP', city: 'Jaipur', platforms: 6, slug: 'jaipur-junction-station-taxi',
  description: 'Pre-booked taxi from Jaipur Junction Railway Station to Hawa Mahal, Amber Fort, City Palace & Jaipur Airport. Fixed fares, AC vehicles, 24/7 platform exit pickup with name board.',
  cabWaitingPoint: 'Main Exit Gate (towards Station Road / MI Road side) — our driver waits with your name placard just outside the station building, near the prepaid booth area.',
  majorTrains: ['Shatabdi Express', 'Rajdhani Express', 'Ajmer Shatabdi', 'Vande Bharat Express', 'Double Decker Express', 'Chetak Express'],
  destinations: [
    { name: 'Hawa Mahal', distance: '3 km', fare: 199 },
    { name: 'Amber Fort', distance: '11 km', fare: 399 },
    { name: 'City Palace', distance: '2 km', fare: 199 },
    { name: 'Nahargarh Fort', distance: '15 km', fare: 499 },
    { name: 'Jaipur Airport', distance: '13 km', fare: 449 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'Hawa Mahal + City Palace + Jantar Mantar + Nahargarh', sedan: 1499, suv: 1999 },
    { name: '8 Hr / 80 Km', coverage: 'Full Jaipur sightseeing with Amber Fort + Jal Mahal', sedan: 2499, suv: 3299 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Platform Exit Pickup', desc: 'Driver meets you at Jaipur Junction main exit with a name board. No auto-rickshaw hassle.' },
    { icon: 'Shield', title: 'Fixed Fare — No Surge', desc: 'Transparent pricing locked at booking. No tourist markup, no meter games, no hidden charges.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'Early morning Shatabdi or late night Rajdhani — your pre-booked taxi is ready at any hour.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'Every vehicle is GPS tracked. Share live trip link with family for real-time safety monitoring.' },
    { icon: 'BadgeCheck', title: 'Expert Jaipur Drivers', desc: 'Local drivers who know every Pink City lane, fort approach road, and parking spot perfectly.' },
    { icon: 'Sparkles', title: 'Beat the Prepaid Booth', desc: 'Better fares and vehicles than the station prepaid counter. No queue, no wait, driver at exit.' },
  ],
  faqs: [
    { question: 'How much does a taxi from Jaipur Junction to Amber Fort cost?', answer: 'A taxi from Jaipur Junction Railway Station to Amber Fort costs ₹399 for an AC sedan. The 11 km drive takes about 25-30 minutes. Our driver can also wait while you explore the fort (sightseeing package recommended).' },
    { question: 'Is there a prepaid taxi booth at Jaipur Junction station?', answer: 'Yes, Jaipur Junction has a prepaid taxi/auto counter outside the main exit. However, rates are often higher than our pre-booked service, and the queue during tourist season can be long. Pre-book with us for a hassle-free exit.' },
    { question: 'Can I book a full-day Jaipur sightseeing taxi from the station?', answer: 'Absolutely! Our 4hr/40km package at ₹1,499 covers Hawa Mahal, City Palace, Jantar Mantar, and Nahargarh. The 8hr/80km package at ₹2,499 adds Amber Fort, Jal Mahal, and more. Driver stays with you all day.' },
    { question: 'How do I get from Jaipur Junction to Jaipur Airport?', answer: 'Jaipur Junction to Jaipur Airport (Sanganer) is 13 km and costs ₹449 for AC sedan. The drive takes 25-35 minutes. We also offer reverse airport-to-station transfers at the same fixed fare.' },
    { question: 'Can I book a taxi from Jaipur station to Ajmer or Pushkar?', answer: 'Yes! Jaipur Junction to Ajmer costs ₹1,999 and to Pushkar ₹2,199 for AC sedan one-way. The 135 km drive to Ajmer takes about 2.5 hours via NH48. Call 7668570551 for outstation bookings.' },
    { question: 'Do you provide taxi service for late night trains at Jaipur Junction?', answer: 'Yes, we provide 24/7 taxi service at Jaipur Junction. Whether your Rajdhani arrives at 4 AM or your Shatabdi at 10 PM, our verified driver will be waiting at the exit gate with your name board.' },
  ],
};

export const metadata = {
  title: 'Jaipur Junction Station Taxi | Pickup from ₹199 — 4.9★ Rated',
  description: 'Book taxi from Jaipur Junction Railway Station (JP). Fixed fares from ₹199 to Hawa Mahal, Amber Fort, City Palace. AC sedan & SUV, 24/7. Call 7668570551.',
  keywords: 'jaipur junction taxi, jaipur station cab, JP station taxi, taxi from jaipur station to amber fort, jaipur junction cab booking, jaipur station to hawa mahal taxi, jaipur railway station taxi fare, jaipur station to airport cab, jaipur junction prepaid taxi, jaipur station pickup',
  alternates: { canonical: '/jaipur-junction-station-taxi' },
  openGraph: { title: 'Jaipur Junction Taxi — Fixed Fare from ₹199 | Triveni Cabs', description: '24/7 taxi from Jaipur Junction. Hawa Mahal ₹199, Amber Fort ₹399, Airport ₹449. Platform pickup.', type: 'website', url: `${BASE_URL}/jaipur-junction-station-taxi` },
};

export default function JaipurJunctionStationTaxiPage() {
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
