import CompetitorCompareClient from '@/components/competitor/CompetitorCompareClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-vs-uber';
const pageTitle = 'Triveni Cabs vs Uber: Honest Comparison 2026 | Who Wins? — 4.9★';
const pageDesc = 'Triveni Cabs vs Uber comparison 2026. Compare pricing, surge charges, outstation coverage, driver quality. Zero surge pricing, verified drivers, 24/7 support. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs vs uber', 'uber alternative india', 'better than uber cabs', 'uber vs triveni pricing', 'uber surge pricing alternative', 'no surge cab service india', 'uber outstation alternative', 'cab booking without app', 'uber competitor north india', 'reliable cab vs uber'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs vs Uber — Pricing, Coverage & Service Compared | 2026 Guide',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs vs Uber Comparison' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Is Triveni Cabs better than Uber for long-distance trips?', answer: 'Yes. Uber is designed for city rides, not outstation travel. Triveni Cabs specializes in outstation trips with experienced long-distance drivers, fixed pricing, and multi-day packages. No surge pricing ever.' },
  { question: 'Why should I choose Triveni Cabs over Uber?', answer: 'Triveni Cabs offers zero surge pricing, verified drivers, phone/WhatsApp booking (no app needed), outstation specialization, and 24/7 dedicated phone support. Uber cannot match this for planned travel.' },
  { question: 'Does Uber offer outstation cabs like Triveni?', answer: 'Uber offers limited outstation options through Uber Intercity, but availability is inconsistent and surge pricing applies. Triveni Cabs has dedicated outstation service with fixed rates to 100+ destinations.' },
  { question: 'Can I book Triveni Cabs for airport pickup without an app?', answer: 'Yes! Call 7668570551 or WhatsApp us. We provide airport pickup with flight tracking, meet & greet, and no waiting charges for delayed flights. No app download required.' },
  { question: 'How does Triveni Cabs pricing compare to Uber for Agra trips?', answer: 'Delhi to Agra one-way in Triveni Cabs costs a fixed ₹2,499 (sedan) with all tolls included. Uber Intercity charges vary based on demand and can be 30-50% higher during peak times due to surge.' },
];

const comparisonData = {
  tagline: 'Smart Comparator 2026',
  intro: 'Uber is great for quick city rides, but how does it stack up for outstation travel, sightseeing, and planned trips? Here is the detailed comparison.',
  features: [
    { feature: 'Surge Pricing', triveni: 'Never', competitor: 'Up to 3x in demand', winner: 'triveni', note: 'Peak demand pricing' },
    { feature: 'Outstation Coverage', triveni: '100+ destinations', competitor: 'Limited Intercity', winner: 'triveni', note: 'Route availability' },
    { feature: 'Booking Without App', triveni: 'Call / WhatsApp / Web', competitor: 'App mandatory', winner: 'triveni', note: 'Booking flexibility' },
    { feature: 'Fixed Price Quote', triveni: 'Yes, before booking', competitor: 'Estimated range only', winner: 'triveni', note: 'Price certainty' },
    { feature: 'Multi-Day Trips', triveni: 'Specialized packages', competitor: 'Not supported', winner: 'triveni', note: 'Trip duration' },
    { feature: 'Driver Consistency', triveni: 'Same driver, full trip', competitor: 'Different each ride', winner: 'triveni', note: 'Service continuity' },
    { feature: 'Phone Support', triveni: '24/7 phone line', competitor: 'App-based only', winner: 'triveni', note: 'Help accessibility' },
    { feature: 'Google Rating', triveni: '4.9★ (10,000+)', competitor: '4.1★ (mixed)', winner: 'triveni', note: 'Customer reviews' },
    { feature: 'Sightseeing Packages', triveni: 'Curated city tours', competitor: 'Not available', winner: 'triveni', note: 'Tourism support' },
    { feature: 'Flight Tracking', triveni: 'Included free', competitor: 'Not available', winner: 'triveni', note: 'Airport service' },
  ],
  advantages: [
    { title: 'No Surge, Ever', description: 'Uber surge can multiply fares 2-3x during rain, events, or peak hours. Triveni Cabs charges the same fixed rate regardless of demand.' },
    { title: 'Outstation Mastery', description: 'While Uber Intercity has limited routes, Triveni Cabs covers 100+ outstation destinations with experienced long-distance drivers and multi-day packages.' },
    { title: 'Same Driver All Trip', description: 'On multi-day trips, your Triveni driver stays with you the entire journey. With Uber, you would need to book a new ride each time.' },
    { title: 'Human Touch Booking', description: 'Call or WhatsApp a real person. No app glitches, payment failures, or OTP issues. Simple, fast, human-centered booking.' },
    { title: 'All-Inclusive Pricing', description: 'Our quotes include toll, parking, and driver allowance. Uber estimates often exclude these, leading to surprise charges at the end.' },
    { title: 'Tourism Expertise', description: 'Our drivers double as local guides, suggesting best viewpoints, food stops, and photo spots. Uber drivers typically just follow GPS.' },
  ],
  verdictTitle: 'Triveni Cabs Wins for Any Trip Beyond a City Ride',
  verdictText: 'Uber excels at on-demand city rides. But for outstation travel, airport transfers, sightseeing tours, wedding transport, or any planned journey, Triveni Cabs offers a fundamentally better experience. Fixed pricing, verified drivers, 24/7 phone support, and deep expertise in North Indian routes make Triveni Cabs the smart choice.',
  faqs,
};

export default function TriveniVsUberPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Premium Cab Service — Alternative to Uber",
    "name": "Triveni Cabs — Better Than Uber for Outstation Travel",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Triveni Cabs vs Uber", "item": `https://www.trivenicabs.in/${slug}` }
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
      <CompetitorCompareClient competitor="Uber" comparisonData={comparisonData} />
    </>
  );
}
