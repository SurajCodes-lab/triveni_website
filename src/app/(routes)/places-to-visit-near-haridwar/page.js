import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.haridwar;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const metadata = {
  title: '15+ Places to Visit Near Haridwar by Car | Spiritual & Adventure | Book Cab',
  description: `Best places to visit near Haridwar by car. Rishikesh (20 km), Mussoorie (80 km), Jim Corbett (130 km), Kedarnath (245 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near haridwar, places near haridwar, day trips from haridwar, weekend getaways from haridwar, haridwar nearby places, char dham from haridwar, places around haridwar, tourist places near haridwar',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-haridwar' },
  openGraph: { title: '15+ Places to Visit Near Haridwar by Car | Book Cab', description: 'Spiritual trails and Himalayan adventures from Haridwar. Rishikesh, Mussoorie, Kedarnath & more.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-haridwar', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Haridwar' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Haridwar | Triveni Cabs', description: 'Spiritual and adventure trips from Haridwar. Call 7668570551.', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearHaridwarPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Haridwar", "description": "Top destinations near Haridwar with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Haridwar", "item": "https://www.trivenicabs.in/places-to-visit-near-haridwar" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
