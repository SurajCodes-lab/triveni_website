import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.rishikesh;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = false;

export const metadata = {
  title: '15+ Places to Visit Near Rishikesh by Car | Adventure & Himalayas | Book Cab',
  description: `Best places to visit near Rishikesh by car. Haridwar (20 km), Mussoorie (70 km), Chopta (175 km), Auli (260 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near rishikesh, places near rishikesh, day trips from rishikesh, weekend getaways from rishikesh, rishikesh nearby places, places around rishikesh, tourist places near rishikesh, char dham from rishikesh',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-rishikesh' },
  openGraph: { title: '15+ Places to Visit Near Rishikesh by Car | Book Cab', description: 'Adventure and Himalayan retreats from Rishikesh. Haridwar, Mussoorie, Chopta, Auli & more.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-rishikesh', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Rishikesh' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Rishikesh | Triveni Cabs', description: 'Adventure and spiritual trips from Rishikesh. Call 7668570551.', images: ['/images/sightseeing/Rishikesh/Rishikesh_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearRishikeshPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Rishikesh", "description": "Top destinations near Rishikesh with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Rishikesh", "item": "https://www.trivenicabs.in/places-to-visit-near-rishikesh" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
