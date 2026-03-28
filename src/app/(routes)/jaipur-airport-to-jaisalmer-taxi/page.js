import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Jaipur Airport',
  city: 'Jaisalmer',
  distance: '570 km',
  duration: '8.5 hr',
  fare: 6999,
  slug: 'jaipur-airport-to-jaisalmer-taxi',
  faqs: [
    { question: 'What is the fare from Jaipur Airport to Jaisalmer by cab?', answer: 'A sedan from Jaipur Airport to Jaisalmer costs ₹6,999 all-inclusive. SUV (Innova) is available at ₹9,799. The fare covers toll, fuel, driver allowance, and all charges for this long-distance transfer.' },
    { question: 'How far is Jaisalmer from Jaipur Airport?', answer: 'Jaisalmer is approximately 570 km from Jaipur Airport. The drive takes around 8.5 hours via NH-15 passing through Jodhpur. It is a full-day road trip through the Thar Desert region.' },
    { question: 'Can I stop at Jodhpur on the way to Jaisalmer?', answer: 'Yes, Jodhpur falls on the route and is a popular stop. You can visit Mehrangarh Fort or have lunch there. We offer flexible stops — just mention your preference while booking.' },
    { question: 'Is an overnight halt recommended for Jaipur to Jaisalmer cab?', answer: 'For an 8.5-hour journey, many travelers prefer a stop at Jodhpur. We can arrange a Jodhpur overnight halt and continue to Jaisalmer the next morning at a small additional charge.' },
    { question: 'What vehicles are best for the Jaipur to Jaisalmer highway drive?', answer: 'We recommend an SUV (Innova or Ertiga) for long-distance comfort. The highway is well-maintained but the extra legroom and suspension of an SUV makes the 8+ hour drive much more comfortable.' },
  ],
};

export const metadata = {
  title: `Jaipur Airport to Jaisalmer Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Jaipur Airport to Jaisalmer taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet. Via Jodhpur. 24/7 service by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Jaipur Airport to Jaisalmer Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Jaipur Airport to Jaisalmer transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Jaipur Airport to Jaisalmer Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Jaisalmer' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Jaipur Airport to Jaisalmer', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
