import CompetitorCompareClient from '@/components/competitor/CompetitorCompareClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-vs-savaari';
const pageTitle = 'Triveni Cabs vs Savaari: Honest Comparison 2026 | Who Wins? — 4.9★';
const pageDesc = 'Triveni Cabs vs Savaari comparison 2026. Compare outstation pricing, fleet quality, driver verification, customer support. Transparent billing, 24/7 support. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs vs savaari', 'savaari alternative', 'better than savaari cabs', 'savaari vs triveni pricing', 'savaari cab comparison', 'outstation cab comparison india', 'savaari competitor', 'best outstation cab service', 'savaari review alternative', 'reliable outstation cab india'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs vs Savaari — Outstation Pricing & Service Compared | 2026',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs vs Savaari Comparison' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Is Triveni Cabs cheaper than Savaari for outstation trips?', answer: 'In most North India routes, yes. Triveni Cabs offers competitive fixed pricing with all tolls included. Savaari quotes sometimes exclude toll charges which are added later, making the final bill higher than expected.' },
  { question: 'How does driver quality compare between Triveni Cabs and Savaari?', answer: 'Triveni Cabs handpicks and directly trains its drivers, while Savaari operates an aggregator model partnering with local operators. This means Triveni has more consistent quality control over the driver experience.' },
  { question: 'Does Savaari have hidden charges that Triveni Cabs does not?', answer: 'Savaari sometimes charges extra for night driving, state permit fees, and parking. Triveni Cabs includes all charges (toll, parking, driver allowance, night charges) in the upfront quote with zero hidden fees.' },
  { question: 'Which is better for North India travel — Triveni or Savaari?', answer: 'Triveni Cabs is the stronger choice for North India (Delhi, Agra, Jaipur, Shimla, Manali, Rishikesh, Amritsar). Our drivers know these routes intimately. Savaari has broader pan-India coverage but less regional expertise.' },
  { question: 'Can I book Triveni Cabs via phone like Savaari?', answer: 'Yes! Triveni Cabs offers phone (7668570551), WhatsApp, and website booking. Unlike Savaari where phone support can be slow, Triveni provides instant confirmation via a dedicated phone line.' },
];

const comparisonData = {
  tagline: 'Outstation Cab Showdown 2026',
  intro: 'Both Triveni Cabs and Savaari focus on outstation travel. But which one delivers better value, service quality, and transparency? Let us compare them side by side.',
  features: [
    { feature: 'Pricing Model', triveni: 'All-inclusive fixed', competitor: 'Base + extras', winner: 'triveni', note: 'Toll, parking, night charges' },
    { feature: 'Hidden Charges', triveni: 'Zero', competitor: 'Toll, night, permit extra', winner: 'triveni', note: 'Final bill surprise' },
    { feature: 'Driver Model', triveni: 'Own verified fleet', competitor: 'Aggregator partners', winner: 'triveni', note: 'Quality control' },
    { feature: 'North India Expertise', triveni: 'Specialized', competitor: 'Pan-India general', winner: 'triveni', note: 'Regional knowledge' },
    { feature: 'Instant Confirmation', triveni: 'Yes, on call', competitor: '1-4 hour wait', winner: 'triveni', note: 'Booking speed' },
    { feature: 'WhatsApp Booking', triveni: 'Full support', competitor: 'Limited', winner: 'triveni', note: 'Channel availability' },
    { feature: 'Google Rating', triveni: '4.9★ (10,000+)', competitor: '4.2★', winner: 'triveni', note: 'Customer satisfaction' },
    { feature: 'Same-Day Booking', triveni: 'Available', competitor: '6-hour advance needed', winner: 'triveni', note: 'Flexibility' },
    { feature: 'Multi-Day Packages', triveni: 'Custom, all-inclusive', competitor: 'Per-day billing', winner: 'triveni', note: 'Package structure' },
    { feature: 'Cancellation', triveni: 'Free (48 hrs)', competitor: 'Partial charges', winner: 'triveni', note: 'Flexibility' },
  ],
  advantages: [
    { title: 'Truly All-Inclusive Pricing', description: 'Savaari quotes often exclude toll, night charges, and state permits. Triveni Cabs includes everything in the upfront quote — zero surprises on your bill.' },
    { title: 'Direct Fleet, Not Aggregated', description: 'Savaari partners with local operators who may send different quality vehicles. Triveni maintains its own fleet ensuring consistent vehicle quality and driver standards.' },
    { title: 'North India Route Mastery', description: 'Our drivers know every highway, shortcut, and scenic stop across North India. Savaari drivers assigned through local partners may lack this intimate route knowledge.' },
    { title: 'Instant Booking Confirmation', description: 'Call and get instant confirmation. Savaari often takes 1-4 hours to assign a driver, creating uncertainty for time-sensitive trips.' },
    { title: 'Personal Touch', description: 'Your driver remembers your preferences. Need an early start? Child seat? Specific music? Triveni drivers accommodate personal requests that aggregator drivers may not.' },
    { title: 'Local Food & Stop Recommendations', description: 'Our experienced drivers recommend the best dhabas, viewpoints, and photo spots along every route. This local knowledge transforms a ride into an experience.' },
  ],
  verdictTitle: 'Triveni Cabs Offers Better Value for North India Outstation Travel',
  verdictText: 'While Savaari covers more cities pan-India, Triveni Cabs dominates North Indian routes with superior pricing transparency, driver quality, and regional expertise. If your travel is in Delhi, Rajasthan, Himachal, Uttarakhand, UP, or Punjab, Triveni Cabs is the smarter choice with its all-inclusive pricing and instant booking.',
  faqs,
};

export default function TriveniVsSavaariPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Outstation Cab Service — Alternative to Savaari",
    "name": "Triveni Cabs — Better Than Savaari for North India Travel",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Triveni Cabs vs Savaari", "item": `https://www.trivenicabs.in/${slug}` }
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
      <CompetitorCompareClient competitor="Savaari" comparisonData={comparisonData} />
    </>
  );
}
