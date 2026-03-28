import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Karnal',
  distance: '130 km',
  duration: '2.5 hr',
  fare: 1999,
  slug: 'delhi-airport-to-karnal-taxi',
  faqs: [
    { question: 'What is the cab fare from Delhi Airport to Karnal?', answer: 'A sedan cab from Delhi Airport (IGI) to Karnal is ₹1,999 — fully inclusive of tolls and taxes. SUV options like Innova are available at ₹2,799.' },
    { question: 'How far is Karnal from Delhi Airport?', answer: 'Karnal is approximately 130 km from IGI Airport. The drive takes around 2.5 hours via NH-44 (Grand Trunk Road / Karnal Highway).' },
    { question: 'Is the toll included in the Delhi Airport to Karnal fare?', answer: 'Yes, the quoted fare of ₹1,999 for sedan is all-inclusive. Toll charges, fuel, driver allowance, and GST are all covered. No hidden costs.' },
    { question: 'Can I get picked up late at night from Delhi Airport for Karnal?', answer: 'Yes, our Delhi Airport to Karnal cab service is available 24/7. Night pickups are handled with the same professionalism — verified driver, flight tracking, and meet & greet.' },
    { question: 'What route does the driver take from Delhi Airport to Karnal?', answer: 'The driver takes NH-44 (formerly GT Road) via Panipat. This is the fastest and most comfortable route with excellent road conditions.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Karnal Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Karnal taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI. Via NH-44. 24/7 reliable service by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Karnal Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable IGI Airport to Karnal transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare, flight tracking. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Karnal Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Karnal' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Karnal', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
