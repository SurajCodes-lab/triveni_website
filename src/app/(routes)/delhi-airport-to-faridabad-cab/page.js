import AirportToCityClient from '@/components/airport/AirportToCityClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Faridabad',
  distance: '35 km',
  duration: '45 min',
  fare: 899,
  slug: 'delhi-airport-to-faridabad-cab',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Faridabad?', answer: 'The fixed fare for a sedan from Delhi Airport (IGI) to Faridabad starts at just ₹899. SUV and Tempo Traveller options are also available at higher rates. All prices are all-inclusive with no hidden charges.' },
    { question: 'How long does it take to reach Faridabad from Delhi Airport?', answer: 'The journey from IGI Airport to Faridabad typically takes around 45 minutes covering 35 km via the Mathura Road / Faridabad Expressway. Traffic conditions during peak hours may add 15-20 minutes.' },
    { question: 'Is flight tracking included for Delhi Airport to Faridabad cab?', answer: 'Yes, we track your flight in real-time. If your flight is delayed or arrives early, our driver adjusts accordingly. They will be waiting at the arrivals gate with a name placard.' },
    { question: 'Can I book a Delhi Airport to Faridabad cab for late night arrival?', answer: 'Absolutely. Our Delhi Airport to Faridabad cab service operates 24/7. Whether your flight lands at 2 AM or 5 AM, a verified driver will be there at arrivals.' },
    { question: 'Which terminals at Delhi Airport do you provide pickup from?', answer: 'We provide pickup from all three terminals — Terminal 1 (T1), Terminal 2 (T2), and Terminal 3 (T3) of Indira Gandhi International Airport.' },
  ],
};

export const metadata = {
  title: tightenTitle(`Delhi Airport to Faridabad Cab ₹${ROUTE.fare} | Meet & Greet — 4.9★`),
  description: `Book Delhi Airport to Faridabad cab at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI arrivals, AC sedan/SUV. 24/7 service by Triveni Cabs.`,
  keywords: 'delhi airport to faridabad cab, delhi airport to faridabad taxi, delhi to faridabad airport taxi, taxi from delhi airport to faridabad, faridabad airport pickup, flight tracked faridabad taxi, fixed fare faridabad cab, delhi airport faridabad transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Faridabad Cab — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Faridabad transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking, meet & greet. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Delhi Airport to Faridabad Cab — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Faridabad transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking, meet & greet. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: `Delhi Airport to Faridabad Cab`,
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Faridabad' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '78', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Faridabad airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Faridabad for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "66", "bestRating": "5", "worstRating": "1" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Rajesh Kumar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver tracked my flight and was waiting at the arrival gate with a name board. Smooth ride, fixed fare honoured, no surge. Better than prepaid taxi." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Sneha Pillai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked a late-night airport pickup. AC sedan was clean, driver helped with luggage, and the journey was comfortable. Would recommend Triveni Cabs for any airport transfer." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Imran Qureshi" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Fixed price was honoured even when my flight landed at 3 AM. No surge pricing, no hidden charges. Driver was professional throughout the long drive." }
    ]
  };

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Faridabad', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
