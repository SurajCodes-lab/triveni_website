import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Bareilly',
  distance: '260 km',
  duration: '4.5 hr',
  fare: 3499,
  slug: 'delhi-airport-to-bareilly-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Bareilly by cab?', answer: 'A sedan from Delhi Airport (IGI) to Bareilly costs ₹3,499 all-inclusive. SUV options (Innova/Ertiga) are available at ₹4,899. The fare covers toll, fuel, and driver charges.' },
    { question: 'How far is Bareilly from Delhi Airport?', answer: 'Bareilly is approximately 260 km from IGI Airport. The journey takes about 4.5 hours via NH-9 / Bareilly Highway under normal traffic conditions.' },
    { question: 'Is it safe to travel from Delhi Airport to Bareilly at night?', answer: 'Yes, absolutely. All our drivers are verified and experienced with highway driving. Vehicles are GPS-tracked and we share live location with you. The NH-9 highway is well-lit and patrolled.' },
    { question: 'Can I make a stop at Moradabad on the way to Bareilly?', answer: 'Yes, you can request a stop at Moradabad or any point along the route. Please mention this while booking so the driver can plan accordingly. Short stops of 15-20 min are free of charge.' },
    { question: 'Do you provide outstation return trips from Bareilly to Delhi Airport?', answer: 'Yes, we offer one-way and round-trip options. For a round trip, you get discounted rates. Contact us on WhatsApp for a customized quote based on your travel dates.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Bareilly Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Bareilly taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI. Via NH-9. 24/7 service by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Bareilly Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable IGI Airport to Bareilly transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Bareilly Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Bareilly' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Bareilly', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
