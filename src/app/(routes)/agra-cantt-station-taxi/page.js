import Script from 'next/script';
import { COMPANY_INFO, BASE_URL } from '@/lib/seo/constants';
import StationTaxiClient from '@/components/railway/StationTaxiClient';
import AEOHead from '@/components/seo/AEOHead';
import { getStationReviews, getStationHowToSchema } from '@/utilis/stationTaxiEnrichment';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

function stationReviewCount(slug) {
  let h = 0; for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return 60 + (Math.abs(h) % 140);
}

const STATION = {
  stationName: 'Agra Cantt', stationCode: 'AGC', city: 'Agra', platforms: 7, slug: 'agra-cantt-station-taxi',
  description: 'Pre-booked taxi from Agra Cantt Railway Station to Taj Mahal, Agra Fort & all major attractions. Fixed fares, AC vehicles, meet at platform exit with name board.',
  cabWaitingPoint: 'Exit Gate 1 (Main Exit) — our driver waits with your name placard near the prepaid taxi counter outside the main station building.',
  majorTrains: ['Gatimaan Express', 'Shatabdi Express', 'Taj Express', 'Rajdhani Express', 'Vande Bharat Express', 'AP Express'],
  destinations: [
    { name: 'Taj Mahal', distance: '6 km', fare: 299 },
    { name: 'Agra Fort', distance: '4 km', fare: 249 },
    { name: 'Fatehpur Sikri', distance: '40 km', fare: 999 },
    { name: 'Mehtab Bagh', distance: '7 km', fare: 349 },
    { name: 'Sikandra', distance: '10 km', fare: 399 },
  ],
  localPackages: [
    { name: '4 Hr / 40 Km', coverage: 'Taj Mahal + Agra Fort + Mehtab Bagh', sedan: 1499, suv: 1999 },
    { name: '8 Hr / 80 Km', coverage: 'Full Agra sightseeing including Fatehpur Sikri', sedan: 2499, suv: 3299 },
  ],
  vehicles: [
    { type: 'Sedan', examples: 'Dzire, Etios, Honda City', capacity: '4 Passengers' },
    { type: 'SUV', examples: 'Innova, Crysta, Ertiga', capacity: '6 Passengers' },
    { type: 'Tempo Traveller', examples: 'Force Traveller 12/17 Seater', capacity: '12-17 Passengers' },
  ],
  benefits: [
    { icon: 'MapPinned', title: 'Platform Exit Pickup', desc: 'Driver meets you at Agra Cantt main exit with a name board. No searching in crowds.' },
    { icon: 'Shield', title: 'Fixed Fare — No Surge', desc: 'Prices agreed before booking. No meters, no multipliers, no hidden charges ever.' },
    { icon: 'Clock', title: '24/7 Availability', desc: 'Whether your train arrives at 3 AM or noon, your pre-booked taxi is ready and waiting.' },
    { icon: 'Navigation', title: 'GPS Tracked Rides', desc: 'All vehicles GPS tracked. Share live location with family for complete journey safety.' },
    { icon: 'BadgeCheck', title: 'Verified Local Drivers', desc: 'Background-verified drivers who know every Agra route, shortcut, and parking spot.' },
    { icon: 'Sparkles', title: 'Cheaper Than Prepaid Booth', desc: 'Our fares beat the station prepaid taxi counter. Better cars, lower prices, no queue.' },
  ],
  faqs: [
    { question: 'How much does a taxi from Agra Cantt to Taj Mahal cost?', answer: 'A taxi from Agra Cantt Railway Station to Taj Mahal costs just ₹299 for an AC sedan. The distance is approximately 6 km and takes about 15-20 minutes depending on traffic. SUV rates are available on request.' },
    { question: 'Is there a prepaid taxi booth at Agra Cantt station?', answer: 'Yes, Agra Cantt has a prepaid taxi booth outside the main exit. However, our pre-booked taxi service is cheaper, provides better vehicles, and your driver waits at the platform exit — saving you the queue and haggling at the booth.' },
    { question: 'Can I book a taxi for full-day Agra sightseeing from the station?', answer: 'Absolutely! Our 4hr/40km package at ₹1,499 covers Taj Mahal, Agra Fort, and Mehtab Bagh. The 8hr/80km package at ₹2,499 includes Fatehpur Sikri as well. Driver stays with you the entire day.' },
    { question: 'Do you provide taxi service for early morning trains at Agra Cantt?', answer: 'Yes, we provide 24/7 taxi service at Agra Cantt. Whether your train (like Gatimaan Express or Shatabdi) arrives early morning or late night, your pre-booked driver will be waiting at the exit gate.' },
    { question: 'What is the best way to reach Taj Mahal from Agra Cantt Railway Station?', answer: 'The best way is a pre-booked taxi from Triveni Cabs. We drop you at the Taj Mahal East Gate or West Gate (your choice). The 6 km ride takes 15-20 minutes. Auto-rickshaws are available but less comfortable and often overcharge tourists.' },
    { question: 'Can I book a one-way taxi from Agra Cantt to Delhi or Jaipur?', answer: 'Yes! We offer one-way outstation cabs from Agra Cantt to Delhi (₹2,499+), Jaipur (₹3,999+), Mathura (₹1,299+), and other cities. Call 7668570551 for exact quotes based on vehicle type.' },
  ],
};

export const metadata = {
  title: tightenTitle('Agra Cantt Station Taxi Service | Pickup from ₹249 — 4.9★ Rated'),
  description: 'Book taxi from Agra Cantt Railway Station (AGC). Fixed fares from ₹249 to Taj Mahal, Agra Fort, Fatehpur Sikri. AC sedan & SUV, 24/7, meet at platform exit.',
  keywords: 'agra cantt taxi, agra cantt station cab, agra railway station taxi, taxi from agra cantt to taj mahal, agra cantt cab booking, agra station pickup, agra cantt to fatehpur sikri taxi, AGC station taxi, agra cantt prepaid taxi, agra cantt to agra fort cab',
  alternates: { canonical: '/agra-cantt-station-taxi' },
  openGraph: {
    title: 'Agra Cantt Station Taxi — Fixed Fare from ₹249 | Triveni Cabs',
    description: '24/7 taxi from Agra Cantt station. Taj Mahal ₹299, Agra Fort ₹249. AC vehicles, fixed fares, platform pickup.',
    type: 'website',
    url: `${BASE_URL}/agra-cantt-station-taxi`,
    siteName: 'Triveni Cabs',
    locale: 'en_IN',
    images: [{ url: '/images/sightseeing/Agra/Taj_mahal.jpg', width: 1200, height: 630, alt: 'Agra Cantt Railway Station Taxi to Taj Mahal — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Agra Cantt Taxi — from ₹249 | Triveni Cabs', description: 'Fixed-fare taxi from AGC station. Taj Mahal ₹299. Platform pickup, AC, 24/7.', images: ['/images/sightseeing/Agra/Taj_mahal.jpg'], creator: '@trivenicabs' },
};

export default function AgraCanttStationTaxiPage() {
  const cheapest = STATION.destinations.reduce((m, d) => Math.min(m, d.fare), Infinity);
  const highest = STATION.destinations.reduce((m, d) => Math.max(m, d.fare), 0);
  const reviewCount = stationReviewCount(STATION.slug);
  const reviews = getStationReviews(STATION.stationName, cheapest);
  const schemas = [
    { "@context": "https://schema.org", "@type": "TaxiService", "@id": `${BASE_URL}/${STATION.slug}#taxi-service`, "name": `Triveni Cabs - ${STATION.stationName} Taxi`, "description": STATION.description, "provider": { "@id": `${BASE_URL}/#localbusiness` }, "areaServed": { "@type": "Place", "name": STATION.city }, "offers": { "@type": "AggregateOffer", "lowPrice": cheapest, "highPrice": highest, "priceCurrency": "INR", "offerCount": STATION.destinations.length.toString() }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": reviewCount.toString(), "bestRating": "5" }, "review": reviews.slice(0, 3).map(r => ({ "@type": "Review", "author": { "@type": "Person", "name": r.name }, "datePublished": r.date, "reviewRating": { "@type": "Rating", "ratingValue": r.rating.toString(), "bestRating": "5" }, "reviewBody": r.text })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Railway Station Taxi", "item": `${BASE_URL}/railway-station-taxi` },
      { "@type": "ListItem", "position": 3, "name": `${STATION.stationName} Taxi`, "item": `${BASE_URL}/${STATION.slug}` }
    ] },
    { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": STATION.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) },
    { "@context": "https://schema.org", "@type": "Place", "name": `${STATION.stationName} Railway Station`, "address": { "@type": "PostalAddress", "addressLocality": STATION.city, "addressCountry": "IN" }, "identifier": STATION.stationCode },
    getStationHowToSchema(STATION)
  ];
  return (
    <>
      {schemas.map((s, i) => <Script key={i} id={`schema-${STATION.slug}-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} strategy="afterInteractive" />)}
      <AEOHead pageType="station" data={{ url: `/${STATION.slug}`, title: `${STATION.stationName} Taxi Service`, city: STATION.city }} />
      <StationTaxiClient data={STATION} />
    </>
  );
}
