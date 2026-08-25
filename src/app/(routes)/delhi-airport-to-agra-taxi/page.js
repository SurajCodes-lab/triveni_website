import AirportOutstationClient from '@/components/airport/AirportOutstationClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Delhi Airport to Agra Taxi | Fixed ₹3,500 | Meet & Greet'),
  description: 'Delhi Airport (IGI) to Agra taxi. Fixed fare sedan ₹3,500, SUV ₹5,000. T1, T2, T3 pickup. Flight tracking, meet & greet. 3-4 hrs. Call 7668570551.',
  keywords: 'delhi airport to agra taxi, igi airport to agra cab, delhi airport agra transfer, airport taxi to agra, delhi to agra airport cab',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/delhi-airport-to-agra-taxi' },
  openGraph: {
    title: 'Delhi Airport to Agra Taxi | Fixed Fare ₹3,500 | Meet & Greet',
    description: 'Book reliable taxi from Delhi IGI Airport to Agra. Fixed fare, flight tracking, all terminal pickup. 3-4 hour drive.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/delhi-airport-to-agra-taxi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Agra/Taj_mahal.jpg', width: 1200, height: 630, alt: 'Delhi Airport to Agra Taxi Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi Airport to Agra Taxi | ₹3,500 Fixed Fare',
    description: 'IGI Airport to Agra cab service. Fixed fare, flight tracking, all terminal pickup.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Agra/Taj_mahal.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqData = [
  { question: "How much does a taxi from Delhi Airport to Agra cost?", answer: "Fixed fare: Sedan (Swift Dzire) ₹3,500, SUV (Innova/Ertiga) ₹5,000, Premium SUV (Innova Crysta) ₹6,500, Tempo Traveller ₹8,000. No surge pricing, no hidden charges. Tolls and parking included." },
  { question: "How do I find my driver at Delhi Airport?", answer: "Our driver will be waiting in the arrival area with a name board displaying your name. We track your flight in real-time and adjust arrival time accordingly. For T3, the driver waits at the designated taxi pickup zone. You will also receive the driver's photo and phone number via WhatsApp." },
  { question: "How long does it take from Delhi Airport to Agra?", answer: "3 to 4 hours depending on traffic and terminal. T3 (International) to Agra: ~3.5 hours via Yamuna Expressway. T1/T2 (Domestic) to Agra: ~3-3.5 hours. Late night flights have less traffic (2.5-3 hours)." },
  { question: "Can I book for a late night or early morning flight?", answer: "Yes! We operate 24/7. Whether your flight lands at 2 AM or 11 PM, our driver will be there. Night charges are already included in the quoted fare. No extra charges for odd hours." },
  { question: "What if my flight is delayed?", answer: "We track your flight in real-time. If your flight is delayed, the driver adjusts accordingly and will still be there when you land. No extra waiting charges for flight delays up to 3 hours. We monitor the flight from departure until landing." },
  { question: "Can I go directly to Taj Mahal from the airport?", answer: "Absolutely! Many tourists fly into Delhi and head straight to Agra. We can take you directly to the Taj Mahal (if timing permits) or to your Agra hotel first. Add Agra sightseeing for just ₹500 extra above the transfer fare." },
  { question: "Do you provide child seats or extra luggage space?", answer: "Child/baby seats are available on request at no extra charge. Our sedans accommodate 2 large suitcases + 2 cabin bags. SUVs can handle 4 large suitcases. For extra luggage, we recommend the SUV or Tempo Traveller." },
  { question: "Can I book a return trip from Agra to Delhi Airport?", answer: "Yes! We offer both one-way and round-trip transfers. Agra to Delhi Airport: same pricing. For round trips, we offer a 10% discount. The driver will time the departure based on your flight schedule, ensuring you reach 3 hours before departure." },
];

const routeData = {
  slug: 'delhi-airport-to-agra-taxi',
  airport: 'Delhi IGI Airport',
  airportCode: 'DEL',
  airportCity: 'Delhi',
  terminals: [
    { name: 'Terminal 1 (T1)', type: 'Domestic', airlines: 'IndiGo, SpiceJet (select flights)', pickup: 'Arrival Gate exit, taxi stand area', driveTime: '3-3.5 hrs to Agra' },
    { name: 'Terminal 2 (T2)', type: 'Domestic', airlines: 'Expanded domestic operations', pickup: 'Ground floor arrival exit', driveTime: '3-3.5 hrs to Agra' },
    { name: 'Terminal 3 (T3)', type: 'International + Domestic', airlines: 'Air India, Vistara, Emirates, Singapore Airlines, all international', pickup: 'Arrival hall, meeting point near Starbucks', driveTime: '3.5-4 hrs to Agra' },
  ],
  destination: 'Agra',
  destinationState: 'Uttar Pradesh',
  distance: '230 km',
  time: '3-4 hours',
  highway: 'Yamuna Expressway',
  fares: {
    sedan: { price: '3,500', vehicle: 'Swift Dzire / Amaze', seats: 4 },
    suv: { price: '5,000', vehicle: 'Innova / Ertiga', seats: 6 },
    tempo: { price: '8,000', vehicle: 'Force Tempo Traveller 12-seater', seats: 12 },
  },
  destinationAttractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Mehtab Bagh', 'Itmad-ud-Daulah', 'Sikandra'],
  description: [
    'Landing at Delhi IGI Airport and heading straight to the Taj Mahal? Our Delhi Airport to Agra taxi service offers a seamless transfer from any terminal — T1, T2 or T3. Your driver tracks your flight in real time, meets you at the arrival gate with a name board, and drives you directly to Agra in a clean, air-conditioned vehicle.',
    'The 230 km drive via the Yamuna Expressway takes around 3 to 4 hours, depending on your terminal and traffic. It is one of India’s smoothest highways, making it the preferred route for international tourists who fly into Delhi and want to see the Taj Mahal the very same day. We can drop you directly at the monument, your Agra hotel, or begin a full Agra sightseeing tour.',
    'Unlike airport prepaid taxis or app cabs with surge pricing, our fixed fare starts at just ₹3,500 for a sedan and includes tolls, parking, driver allowance and meet-and-greet. No hidden charges, no surprises — book for an early-morning, late-night, or any flight time, 24/7.',
  ],
  faqs: faqData,
  relatedRoutes: ['delhi-airport-to-jaipur-taxi', 'jaipur-airport-to-agra-taxi', 'delhi-airport-to-mathura-taxi', 'delhi-airport-to-haridwar-taxi'],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Delhi Airport to Agra Taxi', item: 'https://www.trivenicabs.in/delhi-airport-to-agra-taxi' },
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Airport Transfer',
  name: 'Delhi Airport to Agra Taxi Service',
  description: 'Reliable taxi service from Delhi IGI Airport (T1, T2, T3) to Agra. Fixed fare, flight tracking, meet & greet included.',
  provider: {
    '@id': 'https://www.trivenicabs.in/#organization', '@type': 'LocalBusiness',
    name: 'Triveni Cabs',
    telephone: '+91-7668570551',
    address: { '@type': 'PostalAddress', streetAddress: '366 Dandupura near Tajganj', addressLocality: 'Agra', postalCode: '282006', addressCountry: 'IN' },
  },
  offers: { '@type': 'AggregateOffer', lowPrice: '3500', highPrice: '8000', priceCurrency: 'INR' },
  areaServed: { '@type': 'Place', name: 'Delhi IGI Airport to Agra' },
  brand: { '@type': 'Brand', name: 'Triveni Cabs' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '104', bestRating: '5', worstRating: '1' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Pooja Verma' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: "Booked for my parents who don't speak English well. The driver spoke Hindi, helped them with luggage, and called me on arrival. Truly hassle-free service." },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rajesh Kumar' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Triveni Cabs driver tracked my flight and was waiting at the arrival gate with a name board. Smooth ride, fixed fare honoured, no surge. Better than prepaid taxi.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Sneha Pillai' }, reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked a late-night airport pickup. AC sedan was clean, driver helped with luggage, and the journey was comfortable. Would recommend Triveni Cabs for any airport transfer.' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

export default function DelhiAirportToAgraTaxiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AirportOutstationClient data={routeData} relatedRoutes={routeData.relatedRoutes} />
    </>
  );
}
