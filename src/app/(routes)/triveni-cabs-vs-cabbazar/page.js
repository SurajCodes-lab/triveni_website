import CompetitorCompareClient from '@/components/competitor/CompetitorCompareClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-vs-cabbazar';
const pageTitle = 'Triveni Cabs vs CabBazar: Comparison 2026 | Who Wins? — 4.9★';
const pageDesc = 'Triveni Cabs vs CabBazar comparison 2026. Compare outstation pricing, fleet, driver verification, customer support. Direct service vs aggregator. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs vs cabbazar', 'cabbazar alternative', 'better than cabbazar', 'cabbazar vs triveni pricing', 'cabbazar review', 'outstation cab comparison 2026', 'cabbazar competitor', 'best outstation cab india', 'cabbazar hidden charges', 'reliable cab service north india'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs vs CabBazar — Pricing, Fleet & Support Compared | 2026',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs vs CabBazar Comparison' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Is CabBazar a direct cab operator like Triveni Cabs?', answer: 'No. CabBazar is an aggregator that connects you with local cab vendors. Triveni Cabs is a direct operator with its own verified fleet and drivers, ensuring consistent quality and accountability.' },
  { question: 'Why do CabBazar prices sometimes increase after booking?', answer: 'CabBazar initial quotes may not include toll, state permits, night charges, and parking. These are added later by the assigned vendor. Triveni Cabs quotes are all-inclusive from the start.' },
  { question: 'Is Triveni Cabs more reliable than CabBazar?', answer: 'Yes. Since Triveni Cabs operates its own fleet, there are no vendor no-shows or last-minute cancellations that can happen with aggregator services. Our 4.9-star Google rating reflects this reliability.' },
  { question: 'Can I speak to the driver before booking with CabBazar?', answer: 'CabBazar typically assigns a vendor/driver after booking, making pre-trip communication difficult. Triveni Cabs allows you to coordinate directly with your assigned driver before the trip.' },
  { question: 'Which service is better for hill station trips?', answer: 'Triveni Cabs. Our drivers are experienced mountain road drivers who know Shimla, Manali, Mussoorie, and other hill routes. CabBazar may assign a plains-area driver unfamiliar with mountain driving.' },
];

const comparisonData = {
  tagline: 'Direct Operator vs Aggregator — 2026',
  intro: 'CabBazar aggregates local cab vendors. Triveni Cabs operates its own verified fleet. This fundamental difference impacts pricing, reliability, and your overall travel experience.',
  features: [
    { feature: 'Business Model', triveni: 'Own fleet & drivers', competitor: 'Vendor aggregator', winner: 'triveni', note: 'Direct vs intermediary' },
    { feature: 'Pricing', triveni: 'All-inclusive, fixed', competitor: 'Base + variable extras', winner: 'triveni', note: 'Hidden charges risk' },
    { feature: 'Driver Reliability', triveni: 'Guaranteed, verified', competitor: 'Vendor-dependent', winner: 'triveni', note: 'No-show risk' },
    { feature: 'Vehicle Quality', triveni: 'Inspected fleet', competitor: 'Varies by vendor', winner: 'triveni', note: 'Consistency' },
    { feature: 'Hill Station Expertise', triveni: 'Mountain-trained drivers', competitor: 'Random assignment', winner: 'triveni', note: 'Driving skill' },
    { feature: 'Issue Resolution', triveni: 'Direct, one call', competitor: 'Through CabBazar + vendor', winner: 'triveni', note: 'Speed of resolution' },
    { feature: 'Google Rating', triveni: '4.9★ (10,000+)', competitor: '3.9★', winner: 'triveni', note: 'Customer feedback' },
    { feature: 'Booking Confirmation', triveni: 'Instant', competitor: 'After vendor accepts', winner: 'triveni', note: 'Speed' },
    { feature: 'Same-Day Changes', triveni: 'One phone call', competitor: 'Complex process', winner: 'triveni', note: 'Flexibility' },
    { feature: 'Night Travel Safety', triveni: 'Verified night drivers', competitor: 'Vendor-dependent', winner: 'triveni', note: 'Late night trips' },
  ],
  advantages: [
    { title: 'Own Fleet Accountability', description: 'CabBazar assigns random vendors who may cancel last minute. Triveni Cabs owns its fleet, so your booking is guaranteed. No vendor no-shows, ever.' },
    { title: 'Mountain Driving Expertise', description: 'Our drivers are trained for Himalayan roads. CabBazar may assign a plains driver unfamiliar with hairpin bends, altitude, and mountain weather conditions.' },
    { title: 'All-Inclusive Transparent Pricing', description: 'CabBazar base prices look attractive but extras pile up. Triveni Cabs quotes include toll, parking, night charges, and driver allowance from the start.' },
    { title: 'Instant, Not Auction-Based', description: 'CabBazar sometimes takes hours as vendors bid on your trip. Triveni Cabs confirms instantly because we are the operator, not a marketplace.' },
    { title: 'Consistent Vehicle Standards', description: 'Every Triveni cab is regularly maintained and inspected. CabBazar vendor vehicles vary wildly in cleanliness, age, and condition.' },
    { title: 'Single Point of Contact', description: 'One phone number (7668570551) handles everything. With CabBazar, you may need to coordinate between their support and the vendor, creating confusion.' },
  ],
  verdictTitle: 'Direct Service Beats Aggregator Every Time',
  verdictText: 'CabBazar attempts to offer variety through aggregation, but this model sacrifices consistency, reliability, and accountability. Triveni Cabs delivers a superior experience with its own verified fleet, experienced drivers, all-inclusive pricing, and instant booking. For North India travel, the choice is clear.',
  faqs,
};

export default function TriveniVsCabBazarPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Direct Cab Service — Alternative to CabBazar",
    "name": "Triveni Cabs — Better Than CabBazar Aggregator",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Triveni Cabs vs CabBazar", "item": `https://www.trivenicabs.in/${slug}` }
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
      <CompetitorCompareClient competitor="CabBazar" comparisonData={comparisonData} />
    </>
  );
}
