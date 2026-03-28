import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Aligarh',
  distance: '140 km',
  duration: '2.5 hr',
  fare: 2199,
  slug: 'delhi-airport-to-aligarh-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Aligarh?', answer: 'A sedan from Delhi Airport (IGI) to Aligarh costs ₹2,199. SUV options (Innova/Ertiga) are available at ₹3,079. The fare is all-inclusive — no hidden charges, tolls, or surge pricing.' },
    { question: 'How long is the drive from Delhi Airport to Aligarh?', answer: 'The journey from IGI Airport to Aligarh covers approximately 140 km and takes around 2.5 hours via the Yamuna Expressway / NH-91.' },
    { question: 'Which route is taken for Delhi Airport to Aligarh?', answer: 'Our drivers take the Yamuna Expressway which is the fastest and most comfortable route. Alternatively, NH-91 via Bulandshahr can be used depending on traffic conditions.' },
    { question: 'Can I be dropped at Aligarh Muslim University (AMU) campus?', answer: 'Yes, we drop you at any location within Aligarh city — AMU campus, Civil Lines, Ramghat Road, or any specific address you provide.' },
    { question: 'Is advance booking required for Delhi Airport to Aligarh cab?', answer: 'While we try to accommodate last-minute requests, advance booking is recommended for guaranteed availability, especially during peak travel seasons and exam periods.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Aligarh Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Aligarh taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI. Via Yamuna Expressway. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Aligarh Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable IGI Airport to Aligarh transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Aligarh Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Aligarh' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Aligarh', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
