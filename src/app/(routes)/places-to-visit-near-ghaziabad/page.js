import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const data = placesToVisitPages.ghaziabad;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('15 Best Places to Visit Near Ghaziabad (2026) | With Distance'),
  description: 'Best places to visit near Ghaziabad by car — Agra (200 km), Mathura (145 km), Jim Corbett (240 km), Rishikesh (230 km). Distances, drive time & cab fare included.',
  keywords: 'places to visit near noida, places near noida, weekend getaways from noida, day trips from noida, noida nearby places, places around noida, tourist places near noida, places to visit near noida by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-ghaziabad' },
  openGraph: { title: '15+ Places to Visit Near Ghaziabad by Car | Book Cab', description: 'Quick getaways from Ghaziabad NCR. Agra, Mathura, Jim Corbett, Rishikesh & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-ghaziabad', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Ghaziabad' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Ghaziabad | Triveni Cabs™', description: 'NCR weekend getaways from Ghaziabad. Call 7668570551.', images: ['/images/sightseeing/Delhi/Delhi_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearGhaziabadPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Ghaziabad", "description": "Top destinations near Ghaziabad with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.listUrl}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Ghaziabad", "item": "https://www.trivenicabs.in/places-to-visit-near-ghaziabad" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
