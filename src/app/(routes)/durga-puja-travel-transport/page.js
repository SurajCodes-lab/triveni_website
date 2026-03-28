import SeasonalPageClient from '@/components/seasonal/SeasonalPageClient';

export const revalidate = 3600;

const slug = 'durga-puja-travel-transport';
const pageTitle = 'Durga Puja 2026 Cab & Transport Service | Pandal Hopping Cabs — 4.9★';
const pageDesc = 'Book Durga Puja 2026 cab service for pandal hopping, airport transfers, and outstation trips. Kolkata, Delhi, and North India coverage. No surge pricing. From ₹1,499. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['durga puja cab service 2026', 'durga puja transport', 'pandal hopping cab booking', 'navratri cab service', 'durga puja travel package', 'navratri taxi booking', 'dussehra cab service', 'festive season cab north india', 'durga puja outstation cab', 'navratri pandal cab'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Durga Puja & Navratri 2026 Cab Service — Pandal Hopping Made Easy | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Durga Puja Cab Service' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Do you provide pandal hopping cab service during Durga Puja?', answer: 'Yes! We offer dedicated pandal hopping cab packages during Durga Puja. Book an 8-hour or 12-hour local package with AC sedan or SUV. The driver will take you to multiple pandals across the city.' },
  { question: 'Is there surge pricing during Durga Puja and Navratri?', answer: 'No, Triveni Cabs does not charge surge pricing during any festival including Durga Puja and Navratri. Our rates are fixed and transparent. Book in advance for guaranteed availability.' },
  { question: 'Can I book a cab for Navratri Garba venue transport?', answer: 'Yes, we provide hourly and daily rental cabs for Navratri events. Perfect for Garba venues, temple visits, and late-night returns. Available in Delhi, Jaipur, Agra, and other cities.' },
  { question: 'Do you offer outstation cabs during Durga Puja for family visits?', answer: 'Absolutely! Many families travel to their hometowns during Durga Puja. We offer one-way and round-trip outstation cabs to all major cities. Airport pickup/drop also available.' },
  { question: 'Are night cabs available during Durga Puja festivities?', answer: 'Yes, our cabs are available 24/7 during Durga Puja, including late-night pandal hopping and immersion procession transport. All drivers are verified for your safety.' },
];

export default function DurgaPujaPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Durga Puja & Navratri Cab Service",
    "name": "Durga Puja Travel & Transport 2026 — Triveni Cabs",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Durga Puja Travel Transport", "item": `https://www.trivenicabs.in/${slug}` }
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
      <SeasonalPageClient
        title="Durga Puja & Navratri Transport 2026"
        subtitle="Festive Season Special Cab Service"
        description="Celebrate Durga Puja and Navratri without transport worries. Pandal hopping packages, Garba venue transfers, outstation trips to family, and airport pickups. No surge pricing."
        theme="durga"
        destinations={[
          { name: 'Delhi Pandal Hopping', distance: 'City-wide coverage', description: 'Visit CR Park, Chittaranjan Park, and all major Durga Puja pandals in Delhi NCR with a dedicated cab.', highlights: ['CR Park', 'All Pandals', 'Night Service'], price: '\u20B91,499' },
          { name: 'Delhi to Kolkata', distance: '1,475 km, ~24 hrs', description: 'Travel home to Kolkata for Durga Puja. One-way and round-trip cabs with experienced long-distance drivers.', highlights: ['Long Distance', 'Rest Stops', 'Experienced Driver'], price: '\u20B918,999' },
          { name: 'Delhi to Varanasi', distance: '820 km, ~14 hrs', description: 'Navratri and Durga Puja celebrations at the ghats. Experience the spiritual energy of Kashi during festivals.', highlights: ['Ghat Aarti', 'Temple Visits', 'Spiritual'], price: '\u20B910,999' },
          { name: 'Delhi to Lucknow', distance: '555 km, ~8 hrs', description: 'Visit family during Durga Puja. Comfortable AC cab ride with all tolls included.', highlights: ['Family Visit', 'Comfortable', 'Affordable'], price: '\u20B97,499' },
          { name: 'Navratri Garba Transfers', distance: 'Local service', description: 'Evening pickup, drop to Garba venue, and late-night return. Safe and reliable for families.', highlights: ['Night Service', 'Safe', 'On-time'], price: '\u20B9999' },
          { name: 'Airport Festive Transfers', distance: 'Airport to city', description: '24/7 airport pickup during the festive season. Flight tracking, meet & greet, no waiting charges.', highlights: ['Flight Tracking', 'Meet & Greet', '24/7'], price: '\u20B9799' },
        ]}
        packages={[
          { name: 'Pandal Hopping Package', duration: '8 Hours', description: 'Dedicated cab for 8 hours of pandal hopping across the city. Visit 8-10 pandals comfortably.', includes: ['AC Sedan', '8 hours / 80 km', 'Experienced city driver', 'Night availability', 'Toll & parking'], price: '\u20B91,499', popular: true },
          { name: 'Navratri Evening Package', duration: '4 Hours', description: 'Evening cab for Garba events, temple visits, and late-night return. Perfect for families.', includes: ['AC Sedan', '4 hours / 40 km', 'Safe night travel', 'Female-friendly', 'No surge pricing'], price: '\u20B9999', popular: false },
          { name: 'Durga Puja Outstation', duration: 'Multi-day', description: 'One-way or round-trip cabs to your hometown for Durga Puja celebrations with family.', includes: ['AC Sedan or SUV', 'All tolls & fuel', 'Driver accommodation', 'Flexible departure', '24/7 support'], price: '\u20B97,499', popular: false },
          { name: 'Group Festive Tour', duration: 'Custom', description: 'Tempo traveller for family groups visiting multiple pandals or traveling outstation together.', includes: ['12-20 seater tempo', 'All permits', 'Music system', 'Experienced driver', 'Custom itinerary'], price: '\u20B94,999', popular: false },
        ]}
        faqs={faqs}
      />
    </>
  );
}
