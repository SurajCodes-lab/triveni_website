import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const data = placesToVisitPages.jodhpur;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('9 Places to Visit Near Jodhpur by Car | Desert & Forts'),
  description: `Best places to visit near Jodhpur by car. Osian (65 km), Ranakpur (160 km), Jaisalmer (285 km), Mount Abu (265 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near jodhpur, places near jodhpur, weekend getaways from jodhpur, day trips from jodhpur, jodhpur nearby places, places around jodhpur, rajasthan road trip from jodhpur, tourist places near jodhpur, places to visit near jodhpur by car',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-jodhpur' },
  openGraph: { title: '9 Places to Visit Near Jodhpur by Car | Book Cab', description: 'Explore western Rajasthan from Jodhpur. Osian, Ranakpur, Kumbhalgarh, Jaisalmer & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-jodhpur', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Jodhpur/Jodhpur_Hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Jodhpur' }] },
  twitter: { card: 'summary_large_image', title: '9 Places to Visit Near Jodhpur by Car | Book Cab | Triveni Cabs™', description: 'Desert and fort road trips from Jodhpur. Call 7668570551.', images: ['/images/sightseeing/Jodhpur/Jodhpur_Hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearJodhpurPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Jodhpur", "description": "Top destinations near Jodhpur with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.listUrl}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Jodhpur", "item": "https://www.trivenicabs.in/places-to-visit-near-jodhpur" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
