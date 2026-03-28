import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = false;

const ROUTE = {
  airport: 'Lucknow Airport',
  city: 'Varanasi',
  distance: '320 km',
  duration: '5.5 hr',
  fare: 4299,
  slug: 'lucknow-airport-to-varanasi-taxi',
  faqs: [
    { question: 'What is the fare from Lucknow Airport to Varanasi?', answer: 'A sedan from Lucknow Airport to Varanasi costs ₹4,299 all-inclusive. SUV options (Innova/Ertiga) are available at ₹6,019. Toll, fuel, and driver charges are covered.' },
    { question: 'How far is Varanasi from Lucknow Airport?', answer: 'Varanasi is approximately 320 km from Lucknow Airport (Chaudhary Charan Singh International). The drive takes about 5.5 hours via the Purvanchal Expressway / NH-231.' },
    { question: 'Can I stop at Ayodhya on the way to Varanasi from Lucknow Airport?', answer: 'Yes, Ayodhya falls on the route. A stop for Ram Mandir darshan is very popular. We can arrange a 2-3 hour halt at Ayodhya before continuing to Varanasi at a nominal additional waiting charge.' },
    { question: 'Is the Purvanchal Expressway used for this route?', answer: 'Yes, our drivers use the Purvanchal Expressway for the fastest and smoothest journey. This 6-lane expressway has significantly reduced travel time between Lucknow and Varanasi.' },
    { question: 'Can I be dropped at Varanasi ghats or Kashi Vishwanath Temple?', answer: 'We drop you as close as possible to the ghats. For narrow lanes near Kashi Vishwanath, the driver will drop you at the nearest accessible point and help with your luggage to the lane entrance.' },
  ],
};

export const metadata = {
  title: `Lucknow Airport to Varanasi Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Lucknow Airport to Varanasi taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet. Via Purvanchal Expressway. 24/7 by Triveni Cabs.`,
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Lucknow Airport to Varanasi Taxi — Just ₹${ROUTE.fare} | Triveni Cabs`,
    description: `Reliable Lucknow Airport to Varanasi transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Lucknow Airport to Varanasi Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Varanasi' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '10000', bestRating: '5' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Lucknow Airport to Varanasi', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
