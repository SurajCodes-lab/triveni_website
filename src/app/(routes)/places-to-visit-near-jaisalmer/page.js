import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const data = placesToVisitPages.jaisalmer;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('7 Places to Visit Near Jaisalmer by Car | Dunes & Desert'),
  description: `Best places to visit near Jaisalmer by car. Sam dunes (42 km), Khuri (48 km), Kuldhara (18 km), Longewala (120 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near jaisalmer, places near jaisalmer, sam sand dunes from jaisalmer, khuri dunes, day trips from jaisalmer, jaisalmer nearby places, desert trips from jaisalmer, tourist places near jaisalmer, places to visit near jaisalmer by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-jaisalmer' },
  openGraph: { title: '7 Places to Visit Near Jaisalmer by Car | Book Cab', description: 'Dunes, abandoned villages and desert highways from Jaisalmer, with cab fares for each.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-jaisalmer', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Jaisalmer' }] },
  twitter: { card: 'summary_large_image', title: '7 Places to Visit Near Jaisalmer by Car | Book Cab | Triveni Cabs™', description: 'Desert day trips from Jaisalmer. Call 7668570551.', images: ['/images/sightseeing/Jaisalmer/Jaisalmer_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearJaisalmerPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Jaisalmer", "description": "Top destinations near Jaisalmer with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.listUrl}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Jaisalmer", "item": "https://www.trivenicabs.in/places-to-visit-near-jaisalmer" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
