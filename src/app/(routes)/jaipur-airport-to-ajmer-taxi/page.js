import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Jaipur Airport',
  city: 'Ajmer',
  distance: '135 km',
  duration: '2 hr',
  fare: 1999,
  slug: 'jaipur-airport-to-ajmer-taxi',
  faqs: [
    { question: 'What is the fare from Jaipur Airport to Ajmer?', answer: 'A sedan from Jaipur Airport to Ajmer costs ₹1,999 all-inclusive. SUV (Innova/Ertiga) is available at ₹2,799. No hidden charges — toll and fuel are included.' },
    { question: 'How long does it take from Jaipur Airport to Ajmer?', answer: 'The journey from Jaipur Airport (Sanganer) to Ajmer covers approximately 135 km via NH-48 and takes about 2 hours.' },
    { question: 'Can I visit Pushkar after reaching Ajmer from Jaipur Airport?', answer: 'Pushkar is just 15 km from Ajmer. You can request a drop directly at Pushkar or visit Ajmer Dargah first and then head to Pushkar. We offer flexible routing.' },
    { question: 'Do you provide cab for Ajmer Dargah visit from Jaipur Airport?', answer: 'Yes, many travelers book our Jaipur Airport to Ajmer cab specifically for visiting the Ajmer Sharif Dargah. Our driver can wait while you visit and take you to your hotel or onward destination.' },
    { question: 'Is advance booking necessary for Jaipur Airport to Ajmer cab?', answer: 'We recommend booking at least 2-3 hours in advance for guaranteed pickup. During peak pilgrimage season (Urs festival), early booking is strongly advised.' },
  ],
};

export const metadata = {
  title: `Jaipur Airport to Ajmer Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Jaipur Airport to Ajmer taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet. Visit Ajmer Dargah and Pushkar. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Jaipur Airport to Ajmer Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Jaipur Airport to Ajmer transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Jaipur Airport to Ajmer Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Ajmer' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Jaipur Airport to Ajmer', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
