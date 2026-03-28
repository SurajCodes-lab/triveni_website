import CompetitorCompareClient from '@/components/competitor/CompetitorCompareClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-vs-makemytrip-cabs';
const pageTitle = 'Triveni Cabs vs MakeMyTrip Cabs: Comparison 2026 | Who Wins? — 4.9★';
const pageDesc = 'Triveni Cabs vs MakeMyTrip Cabs comparison 2026. Compare pricing, service quality, fleet, booking process. Direct cab service vs OTA intermediary. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs vs makemytrip cabs', 'makemytrip cab alternative', 'better than makemytrip cabs', 'mmt cab comparison', 'makemytrip outstation cab alternative', 'direct cab booking vs ota', 'makemytrip cab service review', 'cab booking without makemytrip', 'mmt cab competitor', 'best cab service north india'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs vs MakeMyTrip Cabs — Direct Service vs OTA Compared | 2026',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs vs MakeMyTrip Comparison' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Why book directly with Triveni Cabs instead of MakeMyTrip?', answer: 'MakeMyTrip is an OTA (intermediary) that adds commission to the cab fare. Booking directly with Triveni Cabs means no middleman markup, instant confirmation, and direct communication with your driver and support team.' },
  { question: 'Are MakeMyTrip cab prices higher than Triveni Cabs?', answer: 'Generally yes. MakeMyTrip adds a commission layer on top of the cab operator\'s fare. Triveni Cabs offers direct pricing without intermediary costs, often saving you 15-25% on the same routes.' },
  { question: 'What happens if there is an issue during a MakeMyTrip cab booking?', answer: 'With MakeMyTrip, you deal with their customer support who then contacts the cab vendor. With Triveni Cabs, you directly call our 24/7 support line (7668570551) for immediate resolution. No middleman delay.' },
  { question: 'Does MakeMyTrip guarantee the same driver for multi-day trips?', answer: 'MakeMyTrip assigns trips to local vendors who may change drivers. Triveni Cabs guarantees the same verified driver for your entire multi-day trip, ensuring continuity and comfort.' },
  { question: 'Can I customize my itinerary with MakeMyTrip cabs?', answer: 'MakeMyTrip offers fixed packages with limited customization. Triveni Cabs creates fully custom itineraries, allowing you to add stops, change routes, and adjust timings as needed.' },
];

const comparisonData = {
  tagline: 'Direct vs Intermediary — 2026 Guide',
  intro: 'MakeMyTrip is a travel booking platform, not a cab operator. When you book cabs on MMT, you get a third-party vendor. Here is why booking directly with Triveni Cabs is a better deal.',
  features: [
    { feature: 'Service Model', triveni: 'Direct operator', competitor: 'OTA intermediary', winner: 'triveni', note: 'Who runs the cab' },
    { feature: 'Price Transparency', triveni: 'No middleman markup', competitor: 'Commission added', winner: 'triveni', note: '15-25% cost difference' },
    { feature: 'Issue Resolution', triveni: 'Direct, instant', competitor: 'Through OTA support', winner: 'triveni', note: 'Problem-solving speed' },
    { feature: 'Driver Communication', triveni: 'Direct before trip', competitor: 'Via MMT only', winner: 'triveni', note: 'Pre-trip coordination' },
    { feature: 'Itinerary Flexibility', triveni: 'Fully customizable', competitor: 'Fixed packages', winner: 'triveni', note: 'Personalization' },
    { feature: 'Same Driver Guarantee', triveni: 'Yes, always', competitor: 'No guarantee', winner: 'triveni', note: 'Multi-day trips' },
    { feature: 'Cancellation Process', triveni: 'Instant, one call', competitor: 'Through app, delayed', winner: 'triveni', note: 'Ease of cancellation' },
    { feature: 'Google Rating', triveni: '4.9★ (10,000+)', competitor: 'Varies by vendor', winner: 'triveni', note: 'Accountable reviews' },
    { feature: 'Local Route Knowledge', triveni: 'Expert drivers', competitor: 'Random vendor assignment', winner: 'triveni', note: 'Regional expertise' },
    { feature: 'Repeat Customer Benefits', triveni: 'Loyalty discounts', competitor: 'MMT points only', winner: 'triveni', note: 'Long-term value' },
  ],
  advantages: [
    { title: 'No Middleman Commission', description: 'MakeMyTrip takes 15-25% commission from cab vendors, inflating your fare. Booking directly with Triveni Cabs eliminates this markup, saving you real money.' },
    { title: 'Direct Accountability', description: 'When you book through MMT, the cab vendor and MMT may blame each other for issues. With Triveni Cabs, there is one point of contact and full accountability.' },
    { title: 'Instant Issue Resolution', description: 'Call 7668570551 and get help in seconds. MMT cab issues go through their general support queue, potentially taking hours for a response.' },
    { title: 'Pre-Trip Driver Coordination', description: 'Speak directly with your driver before the trip to discuss pickup points, timing, and preferences. MMT does not facilitate this direct connection.' },
    { title: 'Custom Itineraries', description: 'Want to add a stop at a local dhaba? Change your drop point? With Triveni Cabs, it is a simple phone call. MMT packages are rigid.' },
    { title: 'Relationship-Based Service', description: 'We remember your preferences for future trips. Child seat, music preferences, early starts. This personal touch is impossible with OTA bookings.' },
  ],
  verdictTitle: 'Skip the Middleman — Book Directly with Triveni Cabs',
  verdictText: 'MakeMyTrip is a great platform for flights and hotels, but for cab services, booking directly with the operator saves money and delivers a better experience. Triveni Cabs offers direct pricing, instant support, customizable itineraries, and verified drivers. Why pay a middleman when you can go direct?',
  faqs,
};

export default function TriveniVsMakeMyTripPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Direct Cab Booking — Alternative to MakeMyTrip Cabs",
    "name": "Triveni Cabs — Better Than MakeMyTrip Cab Booking",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Triveni Cabs vs MakeMyTrip Cabs", "item": `https://www.trivenicabs.in/${slug}` }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CompetitorCompareClient competitor="MakeMyTrip Cabs" comparisonData={comparisonData} />
    </>
  );
}
