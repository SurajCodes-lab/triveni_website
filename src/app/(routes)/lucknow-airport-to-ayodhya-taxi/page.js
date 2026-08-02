import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = 3600;

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
  keywords: 'lucknow airport to ayodhya taxi, lucknow airport to ayodhya cab, lucknow to ayodhya airport taxi, taxi from lucknow airport to ayodhya, ayodhya airport pickup, flight tracked ayodhya taxi, fixed fare ayodhya cab, lucknow airport ayodhya transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Lucknow Airport to Ayodhya Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Lucknow Airport to Ayodhya transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Lucknow Airport to Ayodhya Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Lucknow Airport to Ayodhya transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Lucknow Airport to Ayodhya Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Ayodhya' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '140', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Ayodhya airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Ayodhya for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "173", "bestRating": "5", "worstRating": "1" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Arjun Nair" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "International arrival pickup at IGI T3 went perfectly. Driver had nameboard, helped with currency exchange directions, and got us to our hotel without delay." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Pooja Verma" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked for my parents who don't speak English well. The driver spoke Hindi, helped them with luggage, and called me on arrival. Truly hassle-free service." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Rajesh Kumar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver tracked my flight and was waiting at the arrival gate with a name board. Smooth ride, fixed fare honoured, no surge. Better than prepaid taxi." }
    ]
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
