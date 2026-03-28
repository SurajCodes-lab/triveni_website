import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Varanasi Airport',
  city: 'Sarnath',
  distance: '30 km',
  duration: '40 min',
  fare: 799,
  slug: 'varanasi-airport-to-sarnath-taxi',
  faqs: [
    { question: 'What is the fare from Varanasi Airport to Sarnath?', answer: 'A sedan from Varanasi Airport (Lal Bahadur Shastri International) to Sarnath costs just ₹799 all-inclusive. SUV options are available at ₹1,119. No surge pricing or hidden fees.' },
    { question: 'How far is Sarnath from Varanasi Airport?', answer: 'Sarnath is approximately 30 km from Varanasi Airport. The drive takes about 40 minutes depending on city traffic conditions.' },
    { question: 'What can I see at Sarnath?', answer: 'Sarnath is where Lord Buddha gave his first sermon. Key attractions include Dhamek Stupa, Chaukhandi Stupa, Sarnath Museum (with the original Ashoka Pillar capital), Mulagandha Kuti Vihar, and the Deer Park.' },
    { question: 'Can I combine Sarnath visit with Varanasi ghat tour?', answer: 'Yes, we offer combined packages. The driver can take you from Varanasi Airport to Sarnath for sightseeing (2-3 hours) and then to your hotel near the ghats in Varanasi. Contact us for pricing.' },
    { question: 'Is the Varanasi Airport to Sarnath cab available for early morning flights?', answer: 'Yes, our service operates 24/7. Whether you land at dawn or midnight, a verified driver will be waiting at the arrivals gate with your name placard.' },
  ],
};

export const metadata = {
  title: `Varanasi Airport to Sarnath Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Varanasi Airport to Sarnath taxi at ₹${ROUTE.fare}. Direct to Buddhist heritage site. Flight tracking, meet & greet. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Varanasi Airport to Sarnath Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Varanasi Airport to Sarnath transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Varanasi Airport to Sarnath Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'Place', name: 'Sarnath' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Varanasi Airport to Sarnath', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
