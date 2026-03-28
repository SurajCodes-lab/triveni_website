import SeasonalPageClient from '@/components/seasonal/SeasonalPageClient';

export const revalidate = 3600;

const slug = 'long-weekend-getaway-packages-2026';
const pageTitle = 'Long Weekend Getaway Cab Packages 2026 | Quick Trips — 4.9★';
const pageDesc = 'Book long weekend 2026 cab packages. 2-3 day getaways to Agra, Jaipur, Jim Corbett, Rishikesh, Mathura. AC cabs, verified drivers, no surge pricing. From ₹1,999. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['long weekend cab packages 2026', 'weekend getaway cab booking', 'short trip cab india', '2 day trip cab service', 'weekend road trip cab', 'long weekend travel 2026', 'quick getaway cab delhi', 'saturday sunday cab trip', 'weekend holiday cab packages', 'mini vacation cab booking'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Long Weekend Getaway Packages 2026 — Escape the City in Style | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Long Weekend Getaway Packages' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Which long weekends in 2026 are best for a cab trip?', answer: 'Key long weekends in 2026: Republic Day (Jan 24-26), Holi (Mar 14-16), Independence Day (Aug 14-16), Gandhi Jayanti (Oct 2-4), Diwali (Oct 19-22), Christmas (Dec 25-27). Book early as demand spikes on these dates.' },
  { question: 'Can I book a round-trip cab for a 2-day weekend trip?', answer: 'Yes! Our weekend packages are designed for 2-3 day round trips. The driver stays at the destination and takes you back. All tolls, parking, and driver accommodation are included in the package price.' },
  { question: 'What is the cancellation policy for weekend packages?', answer: 'Free cancellation up to 48 hours before departure. 50% refund for cancellations within 24-48 hours. No refund for cancellations within 24 hours of departure.' },
  { question: 'Do you offer one-way cabs for weekend trips?', answer: 'Yes, one-way cabs are available for all weekend destinations. One-way rates are typically 40-50% less than round-trip rates. Check specific route pricing by calling 7668570551.' },
  { question: 'Can I extend my weekend trip by a day?', answer: 'Absolutely! You can extend your trip on the go. Additional day charges are communicated transparently. Just inform your driver or call our support team to arrange the extension.' },
];

export default function LongWeekendPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Long Weekend Cab Packages",
    "name": "Long Weekend Getaway Cab Packages 2026 — Triveni Cabs",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Long Weekend Getaway Packages 2026", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Long Weekend Getaway Packages 2026"
        subtitle="Quick Escapes for Every Long Weekend"
        description="Make the most of every long weekend in 2026. Curated 2-3 day road trip packages to the best destinations near Delhi. AC cabs, transparent pricing, and zero hassle."
        theme="weekend"
        destinations={[
          { name: 'Delhi to Agra', distance: '230 km, ~4 hrs', description: 'Perfect day trip or overnight getaway. Taj Mahal, Agra Fort, and Mehtab Bagh in one weekend.', highlights: ['Taj Mahal', 'Agra Fort', 'Street Food'], price: '\u20B91,999' },
          { name: 'Delhi to Jaipur', distance: '280 km, ~5 hrs', description: 'Pink City heritage weekend. Royal palaces, colorful bazaars, and Rajasthani cuisine.', highlights: ['Amer Fort', 'Hawa Mahal', 'Shopping'], price: '\u20B93,499' },
          { name: 'Delhi to Jim Corbett', distance: '260 km, ~6 hrs', description: 'Wildlife weekend in India\'s oldest national park. Safari, nature walks, and riverside stays.', highlights: ['Tiger Safari', 'Nature Walks', 'Riverside'], price: '\u20B93,999' },
          { name: 'Delhi to Rishikesh', distance: '240 km, ~5.5 hrs', description: 'Adventure and spirituality combo. White water rafting, bungee jumping, and Ganga Aarti.', highlights: ['Rafting', 'Bungee', 'Ganga Aarti'], price: '\u20B93,499' },
          { name: 'Delhi to Mathura-Vrindavan', distance: '180 km, ~3.5 hrs', description: 'Spiritual weekend getaway. Ancient temples, holy ghats, and Holi celebrations.', highlights: ['Temples', 'Holy Ghats', 'Sweets'], price: '\u20B91,999' },
          { name: 'Delhi to Neemrana', distance: '120 km, ~2.5 hrs', description: 'Quick luxury weekend. Neemrana Fort Palace, zip-lining, and vintage car rides.', highlights: ['Fort Palace', 'Zip Line', 'Heritage'], price: '\u20B91,499' },
        ]}
        packages={[
          { name: 'Weekend Agra Express', duration: '1N/2D', description: 'Quick Taj Mahal weekend trip. Depart Friday evening, return Sunday evening.', includes: ['AC Sedan', 'All sightseeing transfers', 'Toll & parking', 'Flexible timing', 'Driver meals included'], price: '\u20B92,999', popular: true },
          { name: 'Golden Triangle Weekend', duration: '2N/3D', description: 'Delhi-Agra-Jaipur in one power-packed long weekend. Hit all the highlights.', includes: ['AC Sedan or SUV', 'All sightseeing', 'Toll & parking included', 'Driver accommodation', '24/7 support'], price: '\u20B96,499', popular: false },
          { name: 'Rishikesh Adventure Weekend', duration: '1N/2D', description: 'Rafting, camping, and Ganga Aarti. The perfect adrenaline-fueled weekend escape.', includes: ['AC Sedan', 'Round trip from Delhi', 'Toll charges', 'Flexible departure', 'No hidden charges'], price: '\u20B93,499', popular: false },
          { name: 'Group Weekend Getaway', duration: 'Custom', description: 'Tempo traveller for friend groups or family outings. Any destination, any duration.', includes: ['12-16 seater AC tempo', 'Music system', 'All permits & tolls', 'Custom route planning', 'Driver accommodation'], price: '\u20B97,999', popular: false },
        ]}
        faqs={faqs}
      />
    </>
  );
}
