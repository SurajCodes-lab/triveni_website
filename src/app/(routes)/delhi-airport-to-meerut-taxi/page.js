import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Meerut',
  distance: '80 km',
  duration: '1.5 hr',
  fare: 1499,
  slug: 'delhi-airport-to-meerut-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Meerut?', answer: 'The fixed fare for a sedan from Delhi Airport to Meerut is ₹1,499. SUV options (Innova/Ertiga) are available at ₹2,099. All fares are all-inclusive with no hidden charges.' },
    { question: 'How long does it take from Delhi Airport to Meerut by cab?', answer: 'The journey from IGI Airport to Meerut covers approximately 80 km and takes about 1.5 hours via the Delhi-Meerut Expressway (DME). Traffic conditions may slightly vary the time.' },
    { question: 'Do you pick up from all Delhi Airport terminals for Meerut?', answer: 'Yes, we pick up from Terminal 1, Terminal 2, and Terminal 3 of IGI Airport. Our driver will meet you at the arrivals gate with a name placard.' },
    { question: 'Is the Delhi-Meerut Expressway used for this route?', answer: 'Yes, our drivers use the Delhi-Meerut Expressway for the fastest and smoothest ride. Toll charges are included in the quoted fare.' },
    { question: 'Can I book a cab from Meerut to Delhi Airport?', answer: 'Yes, we offer both pickup and drop services. Book a Meerut to Delhi Airport cab through WhatsApp or phone call for the same competitive rates.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Meerut Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Meerut taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI arrivals. Via Delhi-Meerut Expressway. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Meerut Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable IGI Airport to Meerut transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Meerut Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Meerut' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Meerut', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
