import CompetitorCompareClient from '@/components/competitor/CompetitorCompareClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-vs-ola';
const pageTitle = 'Triveni Cabs vs Ola: Honest Comparison 2026 | Who Wins? — 4.9★';
const pageDesc = 'Triveni Cabs vs Ola comparison 2026. Compare pricing, surge charges, fleet, driver quality, outstation coverage. No surge pricing, verified drivers, 24/7 support. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs vs ola', 'ola alternative india', 'better than ola cabs', 'ola vs triveni pricing', 'ola surge pricing alternative', 'no surge pricing cab india', 'ola outstation alternative', 'cab service comparison india', 'reliable cab service vs ola', 'ola competitor north india'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs vs Ola — Pricing, Surge, Fleet & Service Compared | 2026 Guide',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs vs Ola Comparison' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Is Triveni Cabs cheaper than Ola for outstation trips?', answer: 'Yes, Triveni Cabs is significantly cheaper for outstation trips. While Ola charges dynamic/surge pricing that can 2-3x the fare during peak hours, Triveni Cabs offers fixed rates with no surge. Delhi to Agra sedan starts at ₹2,499 with all tolls included.' },
  { question: 'Does Triveni Cabs have surge pricing like Ola?', answer: 'No, Triveni Cabs never charges surge pricing. Whether it is peak hour, festive season, or bad weather, our rates remain fixed and transparent. What you see is what you pay.' },
  { question: 'Can I book Triveni Cabs without an app?', answer: 'Yes! Unlike Ola which requires an app, you can book Triveni Cabs via phone call (7668570551), WhatsApp, or our website. No app download, no login, no payment gateway issues.' },
  { question: 'Are Triveni Cabs drivers better than Ola drivers?', answer: 'Triveni Cabs drivers are background-verified, trained, and experienced. Unlike Ola where driver quality varies widely due to the aggregator model, our drivers are handpicked and regularly rated by customers.' },
  { question: 'Does Triveni Cabs cover the same cities as Ola?', answer: 'Triveni Cabs specializes in North India covering Delhi, Agra, Jaipur, Shimla, Manali, Rishikesh, Amritsar, and 100+ cities. For outstation, sightseeing, and airport transfers in these regions, we offer superior service.' },
];

const comparisonData = {
  tagline: 'Smart Comparator 2026',
  intro: 'Thinking about Ola for your next trip? See how Triveni Cabs compares on pricing, surge charges, fleet quality, and customer support. Make an informed decision.',
  features: [
    { feature: 'Surge Pricing', triveni: 'Never', competitor: '2-3x during peak', winner: 'triveni', note: 'Peak hours, festivals, rain' },
    { feature: 'Outstation Service', triveni: 'Specialized', competitor: 'Limited availability', winner: 'triveni', note: 'Multi-day trips, round trips' },
    { feature: 'Booking Method', triveni: 'Call / WhatsApp / Web', competitor: 'App only', winner: 'triveni', note: 'Ease of booking' },
    { feature: 'Price Transparency', triveni: 'Fixed quote upfront', competitor: 'Dynamic pricing', winner: 'triveni', note: 'Before trip starts' },
    { feature: 'Driver Verification', triveni: 'Background checked', competitor: 'Aggregator model', winner: 'triveni', note: 'Safety standards' },
    { feature: 'Customer Support', triveni: '24/7 dedicated line', competitor: 'In-app chat', winner: 'triveni', note: 'Response time' },
    { feature: 'Fleet Condition', triveni: 'Well-maintained fleet', competitor: 'Varies by driver', winner: 'triveni', note: 'Vehicle quality' },
    { feature: 'Google Rating', triveni: '4.9★ (10,000+)', competitor: '3.8★ (mixed)', winner: 'triveni', note: 'Customer satisfaction' },
    { feature: 'Cancellation Fee', triveni: 'Free (48 hrs)', competitor: 'Charges apply', winner: 'triveni', note: 'Flexibility' },
    { feature: 'Airport Service', triveni: 'Flight tracking included', competitor: 'Basic pickup', winner: 'triveni', note: 'Premium experience' },
  ],
  advantages: [
    { title: 'Zero Surge Pricing', description: 'While Ola can charge 2-3x during peak hours, rain, or festivals, Triveni Cabs maintains fixed rates 365 days a year.' },
    { title: 'Outstation Expertise', description: 'Ola is primarily a city cab service. Triveni Cabs specializes in outstation, sightseeing, and multi-day trips with experienced long-distance drivers.' },
    { title: 'Direct Communication', description: 'Talk to a real person instantly via phone or WhatsApp. No chatbots, no app crashes, no payment gateway issues.' },
    { title: 'Verified Fleet', description: 'Every vehicle is regularly inspected and maintained. No surprise old cars or unclean cabs like you might experience with aggregator services.' },
    { title: 'Transparent Billing', description: 'Get a fixed quote before your trip. No hidden convenience fees, no service charges, no dynamic adjustments.' },
    { title: 'Personalized Service', description: 'We remember your preferences, arrange child seats, provide early morning pickups, and customize itineraries. Ola cannot offer this level of personalization.' },
  ],
  verdictTitle: 'Triveni Cabs is the Clear Winner for Outstation & Long-Distance Travel',
  verdictText: 'While Ola works well for quick city rides, Triveni Cabs excels in outstation trips, sightseeing tours, airport transfers, and multi-day packages. With zero surge pricing, verified drivers, and 24/7 phone support, Triveni Cabs delivers a consistently superior experience for planned travel across North India.',
  faqs,
};

export default function TriveniVsOlaPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Premium Cab Service — Alternative to Ola",
    "name": "Triveni Cabs — Better Than Ola for Outstation Travel",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Triveni Cabs vs Ola", "item": `https://www.trivenicabs.in/${slug}` }
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
      <CompetitorCompareClient competitor="Ola" comparisonData={comparisonData} />
    </>
  );
}
