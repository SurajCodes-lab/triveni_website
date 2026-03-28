import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Lucknow Airport',
  city: 'Ayodhya',
  distance: '135 km',
  duration: '2.5 hr',
  fare: 2199,
  slug: 'lucknow-airport-to-ayodhya-taxi',
  faqs: [
    { question: 'What is the fare from Lucknow Airport to Ayodhya?', answer: 'A sedan from Lucknow Airport (Chaudhary Charan Singh International) to Ayodhya costs ₹2,199 all-inclusive. SUV options are available at ₹3,079. No hidden charges.' },
    { question: 'How far is Ayodhya from Lucknow Airport?', answer: 'Ayodhya is approximately 135 km from Lucknow Airport. The drive takes about 2.5 hours via the Lucknow-Ayodhya Expressway / NH-330.' },
    { question: 'Can I be dropped directly at Ram Mandir in Ayodhya?', answer: 'Yes, our driver will drop you at any location in Ayodhya — Ram Janmabhoomi Temple, Hanuman Garhi, Saryu Ghat, or your hotel. Door-to-door service is included.' },
    { question: 'Is the Lucknow-Ayodhya Expressway used for this route?', answer: 'Yes, when the expressway route is available, our drivers use it for the fastest journey. The new expressway has significantly reduced travel time between Lucknow and Ayodhya.' },
    { question: 'Do you offer Ayodhya darshan with airport pickup?', answer: 'Yes, we offer combined packages — Lucknow Airport pickup + Ayodhya darshan (Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat) + hotel drop. Contact us on WhatsApp for custom itineraries.' },
  ],
};

export const metadata = {
  title: `Lucknow Airport to Ayodhya Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Lucknow Airport to Ayodhya taxi at ₹${ROUTE.fare}. Direct to Ram Mandir. Flight tracking, meet & greet. Via expressway. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Lucknow Airport to Ayodhya Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Lucknow Airport to Ayodhya transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Lucknow Airport to Ayodhya Taxi',
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
    { '@type': 'ListItem', position: 3, name: 'Lucknow Airport to Ayodhya', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
