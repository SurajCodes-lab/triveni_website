import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Sonipat',
  distance: '55 km',
  duration: '1 hr',
  fare: 1099,
  slug: 'delhi-airport-to-sonipat-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Sonipat?', answer: 'A sedan cab from Delhi Airport (IGI) to Sonipat starts at ₹1,099 — all-inclusive with tolls, taxes, and driver charges. SUV options start at ₹1,539.' },
    { question: 'How far is Sonipat from Delhi Airport?', answer: 'Sonipat is approximately 55 km from IGI Airport. The journey takes about 1 hour via NH-44 under normal traffic conditions.' },
    { question: 'Is there a night surcharge for Delhi Airport to Sonipat cab?', answer: 'No, there are no hidden night surcharges. The fare remains the same whether your flight lands at noon or midnight. Our 24/7 service has consistent pricing.' },
    { question: 'Do you cover Kundli and Rajpur areas in Sonipat?', answer: 'Yes, we cover all areas in Sonipat district including Kundli, Rajpur, Ganaur, Murthal, and Sonipat city center.' },
    { question: 'How do I book a Delhi Airport to Sonipat cab?', answer: 'You can book via WhatsApp at +91 7668570551, call us directly, or send your flight details and we will arrange everything. Pre-booking is recommended for guaranteed availability.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Sonipat Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Sonipat taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI arrivals. 24/7 service by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Sonipat Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable IGI Airport to Sonipat transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Sonipat Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Sonipat' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Sonipat', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: ROUTE.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AirportToCityClient {...ROUTE} />
    </>
  );
}
