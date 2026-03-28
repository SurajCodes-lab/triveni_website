import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Varanasi Airport',
  city: 'Ayodhya',
  distance: '200 km',
  duration: '3.5 hr',
  fare: 2999,
  slug: 'varanasi-airport-to-ayodhya-taxi',
  faqs: [
    { question: 'What is the fare from Varanasi Airport to Ayodhya?', answer: 'A sedan from Varanasi Airport (Lal Bahadur Shastri International) to Ayodhya costs ₹2,999 all-inclusive. SUV options start at ₹4,199. The fare covers toll, fuel, and driver charges.' },
    { question: 'How far is Ayodhya from Varanasi Airport?', answer: 'Ayodhya is approximately 200 km from Varanasi Airport. The drive takes about 3.5 hours via NH-233 / Prayagraj Highway.' },
    { question: 'Is this route popular for Ram Mandir pilgrims?', answer: 'Yes, many devotees fly into Varanasi and then travel to Ayodhya for Ram Mandir darshan. We offer a combined Varanasi-Ayodhya pilgrimage package with local sightseeing at both cities.' },
    { question: 'Can I visit Varanasi ghats before heading to Ayodhya?', answer: 'Absolutely. We can arrange a half-day Varanasi darshan (Kashi Vishwanath, Dashashwamedh Ghat, Sarnath) before driving to Ayodhya. Contact us for a combined itinerary with pricing.' },
    { question: 'Do you provide return cab from Ayodhya to Varanasi Airport?', answer: 'Yes, we offer both one-way and round-trip transfers. For round trips, you get discounted rates. Our drivers are familiar with the route and can suggest the best timing for your return flight.' },
  ],
};

export const metadata = {
  title: `Varanasi Airport to Ayodhya Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Varanasi Airport to Ayodhya taxi at ₹${ROUTE.fare}. Direct to Ram Mandir. Flight tracking, meet & greet at Lal Bahadur Shastri Airport. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Varanasi Airport to Ayodhya Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Varanasi Airport to Ayodhya transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Varanasi Airport to Ayodhya Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Ayodhya' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Varanasi Airport to Ayodhya', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
