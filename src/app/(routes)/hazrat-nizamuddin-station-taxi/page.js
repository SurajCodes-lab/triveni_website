import Script from 'next/script';
import { COMPANY_INFO, AGGREGATE_RATING, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';

export const revalidate = false;

const STATION = {
  stationName: 'Hazrat Nizamuddin', stationCode: 'NZM', city: 'Delhi', platforms: 7, slug: 'hazrat-nizamuddin-station-taxi',
  description: 'Pre-booked taxi from Hazrat Nizamuddin Railway Station (NZM) to Humayun\'s Tomb, India Gate, Connaught Place & IGI Airport. Fixed fares, AC vehicles, 24/7 platform exit pickup.',
  cabWaitingPoint: 'Main Exit Gate (towards Nizamuddin West) — our driver waits with your name placard just outside the station building, near the parking area.',
  majorTrains: ['Rajdhani Express', 'Duronto Express', 'AP Express', 'Karnataka Express', 'Thiruvananthapuram Rajdhani', 'Swarna Jayanti Express'],
  destinations: [
    { name: "Humayun's Tomb", distance: '1 km', fare: 149 },
    { name: 'India Gate', distance: '5 km', fare: 249 },
    { name: 'Connaught Place', distance: '7 km', fare: 299 },
    { name: 'Agra (Outstation)', distance: '200 km', fare: 2499 },
    { name: 'IGI Airport', distance: '20 km', fare: 649 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: "Humayun's Tomb + India Gate + Lotus Temple", sedan: 1599, suv: 2199 },
    { name: '8 Hr / 80 Km', coverage: 'Full Delhi sightseeing — South Delhi + Central Delhi', sedan: 2699, suv: 3499 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Platform Exit Pickup', desc: 'Driver meets you at NZM main exit with a name board. No confusion in the station crowd.' },
    { icon: 'Shield', title: 'Fixed Fare — No Surge', desc: 'Pre-agreed fare with zero surge pricing. No app multipliers, no meter games, no hidden costs.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'Nizamuddin handles many overnight Rajdhanis. Our drivers are ready at any hour of the day.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'Live GPS tracking on every ride. Share your trip link with family for real-time safety updates.' },
    { icon: 'BadgeCheck', title: 'Verified Drivers', desc: 'All drivers are police-verified, experienced, and fluent in Hindi and English navigation.' },
    { icon: 'Sparkles', title: 'Outstation Ready', desc: 'Need to go straight to Agra from NZM? We offer outstation one-way cabs at fixed rates too.' },
  ],
  faqs: [
    { question: "How much is a taxi from Hazrat Nizamuddin to Humayun's Tomb?", answer: "A taxi from Nizamuddin station to Humayun's Tomb costs just ₹149 for an AC sedan. It's barely 1 km away and takes 5 minutes. Walking is possible but with luggage a cab is far more convenient." },
    { question: 'Can I get a taxi from Nizamuddin station to IGI Airport?', answer: 'Yes! Hazrat Nizamuddin to IGI Airport costs ₹649 for AC sedan. The 20 km ride takes 35-55 minutes depending on traffic. We track your train timing to ensure the driver is ready on arrival.' },
    { question: 'Is there a prepaid taxi counter at Hazrat Nizamuddin station?', answer: 'Hazrat Nizamuddin has limited prepaid options compared to NDLS. Auto-rickshaws dominate outside. Our pre-booked AC taxi service is the best option — fixed fare, comfortable vehicle, driver waiting at exit.' },
    { question: 'Can I book a taxi from Nizamuddin station directly to Agra?', answer: 'Absolutely! We offer NZM to Agra one-way taxi at ₹2,499 for AC sedan. The 200 km Yamuna Expressway route takes about 3 hours. Many Rajdhani passengers use this for Taj Mahal trips.' },
    { question: 'Which trains stop at Hazrat Nizamuddin station?', answer: 'NZM handles major Rajdhani Express trains (Mumbai, Bengaluru, Chennai, Kerala), Duronto Express, AP Express, and many South/West India bound trains. We provide taxi pickup for all train arrivals, 24/7.' },
    { question: 'How do I find my driver at Hazrat Nizamuddin station?', answer: 'After booking, you receive driver name, phone number, and vehicle details on WhatsApp. The driver waits at the main exit gate (Nizamuddin West side) with your name board. You can call the driver directly.' },
  ],
};

export const metadata = {
  title: 'Hazrat Nizamuddin Station Taxi | Pickup from ₹149 — 4.9★ Rated',
  description: "Book taxi from Hazrat Nizamuddin Railway Station (NZM). Fixed fares from ₹149 to Humayun's Tomb, India Gate, Airport. AC sedan & SUV, 24/7. Call 7668570551.",
  keywords: 'nizamuddin station taxi, NZM taxi, hazrat nizamuddin cab, taxi from nizamuddin to airport, nizamuddin station to agra taxi, NZM station cab booking, nizamuddin railway station taxi, nizamuddin to connaught place cab, NZM station pickup, hazrat nizamuddin prepaid taxi',
  alternates: { canonical: '/hazrat-nizamuddin-station-taxi' },
  openGraph: { title: 'Hazrat Nizamuddin Station Taxi — Fixed Fare from ₹149 | Triveni Cabs', description: "24/7 taxi from NZM. Humayun's Tomb ₹149, Airport ₹649, Agra ₹2,499. Platform pickup.", type: 'website', url: `${BASE_URL}/hazrat-nizamuddin-station-taxi` },
};

export default function HazratNizamuddinStationTaxiPage() {
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
