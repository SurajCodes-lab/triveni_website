import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Jaipur Airport',
  city: 'Ranthambore',
  distance: '180 km',
  duration: '3 hr',
  fare: 2799,
  slug: 'jaipur-airport-to-ranthambore-taxi',
  faqs: [
    { question: 'What is the fare from Jaipur Airport to Ranthambore?', answer: 'A sedan from Jaipur Airport to Ranthambore (Sawai Madhopur) costs ₹2,799 all-inclusive. SUV options start at ₹3,919. Toll, fuel, and driver charges are all covered.' },
    { question: 'How far is Ranthambore from Jaipur Airport?', answer: 'Ranthambore National Park (Sawai Madhopur) is approximately 180 km from Jaipur Airport. The drive takes about 3 hours via NH-11/NH-21.' },
    { question: 'Can the driver drop me at my Ranthambore resort?', answer: 'Yes, we provide door-to-door service. Whether your resort is in the Ranthambore zone or Sawai Madhopur town, the driver will drop you right at the entrance.' },
    { question: 'What is the best time to book a cab for Ranthambore safari?', answer: 'Ranthambore National Park is open from October to June. The peak tiger-sighting season is November to March. We recommend booking your airport transfer along with your safari dates.' },
    { question: 'Do you offer a Jaipur Airport to Ranthambore round trip package?', answer: 'Yes, we offer round-trip and multi-day packages. Many tourists book a Jaipur Airport pickup, 2-3 nights at Ranthambore, and then a return to Jaipur Airport. Contact us for custom pricing.' },
  ],
};

export const metadata = {
  title: `Jaipur Airport to Ranthambore Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Jaipur Airport to Ranthambore taxi at ₹${ROUTE.fare}. Direct transfer to safari zone. Flight tracking, meet & greet. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Jaipur Airport to Ranthambore Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Jaipur Airport to Ranthambore transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Jaipur Airport to Ranthambore Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'Place', name: 'Ranthambore' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Jaipur Airport to Ranthambore', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
