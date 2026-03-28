import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'Delhi Junction (Old Delhi)', stationCode: 'DLI', city: 'Delhi', platforms: 16, slug: 'delhi-junction-old-delhi-taxi',
  description: 'Pre-booked taxi from Delhi Junction / Old Delhi Railway Station to Red Fort, Chandni Chowk, Connaught Place & IGI Airport. Fixed fares, AC vehicles, hassle-free platform pickup.',
  cabWaitingPoint: 'Main Exit Gate facing Chandni Chowk road — our driver waits right outside the station with your name placard, away from the auto-rickshaw crowd.',
  majorTrains: ['Rajdhani Express', 'Grand Trunk Express', 'Tamil Nadu Express', 'Kerala Express', 'Golden Temple Mail', 'Poorva Express'],
  destinations: [
    { name: 'Red Fort', distance: '1 km', fare: 149 },
    { name: 'Chandni Chowk', distance: '0.5 km', fare: 149 },
    { name: 'Jama Masjid', distance: '1 km', fare: 149 },
    { name: 'Connaught Place', distance: '5 km', fare: 249 },
    { name: 'IGI Airport', distance: '22 km', fare: 699 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'Red Fort + Jama Masjid + Chandni Chowk + India Gate', sedan: 1599, suv: 2199 },
    { name: '8 Hr / 80 Km', coverage: 'Full Old Delhi + New Delhi sightseeing tour', sedan: 2699, suv: 3499 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Exit Gate Pickup', desc: 'Driver meets you at Old Delhi station main exit with name board. Skip the auto-rickshaw chaos.' },
    { icon: 'Shield', title: 'Fixed Fare — No Haggling', desc: 'Pre-agreed pricing. No rickshaw-style bargaining, no inflated tourist rates, no hidden charges.' },
    { icon: 'Clock', title: '24/7 Service', desc: 'Old Delhi station has trains arriving round the clock. Our drivers are available at any hour.' },
    { icon: 'Navigation', title: 'GPS Tracked Vehicles', desc: 'Live GPS tracking on all rides. Share your trip with family for complete safety assurance.' },
    { icon: 'BadgeCheck', title: 'Expert Local Drivers', desc: 'Our drivers navigate Old Delhi narrow lanes and Delhi traffic with ease. No wrong turns.' },
    { icon: 'Sparkles', title: 'Skip the Prepaid Queue', desc: 'No waiting at prepaid counters. Your driver is already outside when you walk out of the station.' },
  ],
  faqs: [
    { question: 'How much does a taxi from Old Delhi station to Red Fort cost?', answer: 'A taxi from Delhi Junction (Old Delhi) to Red Fort costs just ₹149. The distance is barely 1 km but navigating through Chandni Chowk traffic on your own with luggage can be challenging. Our AC sedan makes it effortless.' },
    { question: 'Is it safe to take a taxi from Old Delhi station at night?', answer: 'With Triveni Cabs, yes. All vehicles are GPS tracked, drivers are background-verified, and you receive the driver details (name, phone, vehicle number) before pickup. We handle late-night Old Delhi pickups regularly.' },
    { question: 'Can I book a taxi from Delhi Junction to IGI Airport?', answer: 'Yes! Delhi Junction to IGI Airport taxi costs ₹699 for AC sedan. The 22 km journey takes 45-75 minutes depending on traffic. We also offer SUVs for larger groups with extra luggage.' },
    { question: 'What is the difference between Old Delhi and New Delhi station?', answer: 'Delhi Junction (DLI) is in Old Delhi near Chandni Chowk and Red Fort. New Delhi station (NDLS) is near Connaught Place and Paharganj. Check your ticket carefully. We serve both stations with fixed-fare taxis.' },
    { question: 'Do you offer Old Delhi sightseeing packages from the station?', answer: 'Yes! Our 4hr/40km package at ₹1,599 covers Red Fort, Jama Masjid, Chandni Chowk, and India Gate. The 8hr/80km package at ₹2,699 covers both Old and New Delhi attractions. Your driver stays with you all day.' },
    { question: 'How do I find my taxi at crowded Old Delhi station?', answer: 'When you book with us, you get the driver name, phone number, and vehicle details via WhatsApp. The driver waits at the main exit gate with your name board. Call the driver directly if needed — no confusion, no searching.' },
  ],
};

export const metadata = {
  title: 'Old Delhi Station Taxi Service | Pickup from ₹149 — 4.9★ Rated',
  description: 'Book taxi from Delhi Junction / Old Delhi Railway Station (DLI). Fixed fares from ₹149 to Red Fort, Chandni Chowk, Airport. AC sedan & SUV, 24/7. Call 7668570551.',
  keywords: 'old delhi station taxi, delhi junction taxi, DLI station cab, taxi from old delhi to red fort, delhi junction cab booking, old delhi station to airport taxi, chandni chowk station taxi, old delhi railway station cab, DLI to connaught place taxi, old delhi station pickup',
  alternates: { canonical: '/delhi-junction-old-delhi-taxi' },
  openGraph: { title: 'Old Delhi Station Taxi — Fixed Fare from ₹149 | Triveni Cabs', description: '24/7 taxi from Delhi Junction. Red Fort ₹149, CP ₹249, Airport ₹699. AC vehicles, platform pickup.', type: 'website', url: `${BASE_URL}/delhi-junction-old-delhi-taxi` },
};

export default function DelhiJunctionTaxiPage() {
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
