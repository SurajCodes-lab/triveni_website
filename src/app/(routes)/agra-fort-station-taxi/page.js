import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'Agra Fort', stationCode: 'AF', city: 'Agra', platforms: 4, slug: 'agra-fort-station-taxi',
  description: 'Pre-booked taxi from Agra Fort Railway Station to Agra Fort, Taj Mahal, Kinari Bazaar & Fatehpur Sikri. Fixed fares, AC vehicles, hassle-free station exit pickup with name board.',
  cabWaitingPoint: 'Main Exit Gate — our driver waits immediately outside the station building with your name placard. The station is compact, so you will spot the driver quickly.',
  majorTrains: ['Taj Express', 'Marudhar Express', 'Chambal Express', 'Passenger Trains', 'DEMU Services'],
  destinations: [
    { name: 'Agra Fort', distance: '0.5 km', fare: 149 },
    { name: 'Taj Mahal', distance: '3 km', fare: 199 },
    { name: 'Kinari Bazaar', distance: '1 km', fare: 149 },
    { name: 'Jama Masjid', distance: '1 km', fare: 149 },
    { name: 'Fatehpur Sikri', distance: '37 km', fare: 899 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'Agra Fort + Taj Mahal + Mehtab Bagh + Kinari Bazaar', sedan: 1499, suv: 1999 },
    { name: '8 Hr / 80 Km', coverage: 'Full Agra sightseeing including Fatehpur Sikri', sedan: 2499, suv: 3299 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Station Exit Pickup', desc: 'Driver meets you at Agra Fort station main exit. Small station — easy to find your car instantly.' },
    { icon: 'Shield', title: 'Fixed Fare — No Haggling', desc: 'Pre-agreed price. No rickshaw bargaining, no inflated tourist rates outside this busy station.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'Agra Fort station handles trains at all hours. Your pre-booked driver is always ready on time.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'All vehicles are GPS tracked. Share live location with family for complete travel safety.' },
    { icon: 'BadgeCheck', title: 'Expert Agra Drivers', desc: 'Drivers who know every lane around the Taj, best photo spots, and parking shortcuts.' },
    { icon: 'Sparkles', title: 'Closest to Agra Fort', desc: 'This station is right next to Agra Fort — your hotel or attraction is just minutes away.' },
  ],
  faqs: [
    { question: 'How far is Agra Fort Railway Station from Taj Mahal?', answer: 'Agra Fort station is just 3 km from Taj Mahal. A taxi ride costs ₹199 and takes about 10 minutes. This station is actually closer to the Taj than Agra Cantt station, making it convenient for quick visits.' },
    { question: 'Is Agra Fort station the same as Agra Cantt station?', answer: 'No, they are different stations. Agra Fort (AF) is in the heart of old Agra near Agra Fort and Kinari Bazaar. Agra Cantt (AGC) is the main station, 4 km south. Check your ticket carefully — we serve both stations.' },
    { question: 'Can I book a full-day sightseeing taxi from Agra Fort station?', answer: 'Yes! Our 4hr/40km package at ₹1,499 covers Agra Fort, Taj Mahal, Mehtab Bagh, and Kinari Bazaar. The 8hr/80km package at ₹2,499 adds Fatehpur Sikri. Driver stays with you the entire day.' },
    { question: 'Are auto-rickshaws available outside Agra Fort station?', answer: 'Yes, autos are available but they overcharge tourists heavily, especially during peak season. Our pre-booked AC taxi at ₹149 is barely more than an auto fare but far more comfortable and trustworthy.' },
    { question: 'How do I reach Fatehpur Sikri from Agra Fort station?', answer: 'Fatehpur Sikri is 37 km from Agra Fort station. Our taxi fare is ₹899 one-way for AC sedan. The drive takes about 50-60 minutes via NH21. We also offer return trips and combined sightseeing packages.' },
    { question: 'Which trains stop at Agra Fort Railway Station?', answer: 'Agra Fort station handles Taj Express (from Delhi), Marudhar Express, Chambal Express, and several passenger/DEMU trains. It is smaller than Agra Cantt but very convenient for Old Agra area attractions.' },
  ],
};

export const metadata = {
  title: 'Agra Fort Station Taxi Service | Pickup from ₹149 — 4.9★ Rated',
  description: 'Book taxi from Agra Fort Railway Station (AF). Fixed fares from ₹149 to Taj Mahal, Agra Fort, Fatehpur Sikri. AC sedan & SUV, 24/7, station exit pickup. Call 7668570551.',
  keywords: 'agra fort station taxi, agra fort railway station cab, AF station taxi, taxi from agra fort station to taj mahal, agra fort station cab booking, agra fort to fatehpur sikri taxi, agra fort station pickup, agra fort station to kinari bazaar cab, agra fort railway taxi fare, AF station cab service',
  alternates: { canonical: '/agra-fort-station-taxi' },
  openGraph: { title: 'Agra Fort Station Taxi — Fixed Fare from ₹149 | Triveni Cabs', description: '24/7 taxi from Agra Fort station. Taj Mahal ₹199, Agra Fort ₹149, Fatehpur Sikri ₹899. Platform pickup.', type: 'website', url: `${BASE_URL}/agra-fort-station-taxi` },
};

export default function AgraFortStationTaxiPage() {
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
