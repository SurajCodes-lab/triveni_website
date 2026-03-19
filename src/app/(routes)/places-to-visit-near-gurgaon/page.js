import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.gurgaon;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = false;

export const metadata = {
  title: '15 Best Places to Visit Near Gurgaon (2026) | Road Trips',
  description: 'Top places to visit near Gurgaon by car — Neemrana (100 km), Jaipur (260 km), Alwar (140 km), Rishikesh (245 km). Distances, drive time & travel tips.',
  keywords: 'places to visit near gurgaon, places near gurgaon, weekend getaways from gurgaon, day trips from gurgaon, gurgaon nearby places, places around gurgaon, tourist places near gurgaon, places to visit near gurugram',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-gurgaon' },
  openGraph: { title: '15+ Places to Visit Near Gurgaon by Car | Book Cab', description: 'Weekend escapes from Gurgaon. Neemrana, Jaipur, Alwar, Rishikesh & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-gurgaon', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Gurgaon' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Gurgaon | Triveni Cabs', description: 'Weekend escapes from Millennium City. Call 7668570551.', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearGurgaonPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Gurgaon", "description": "Top destinations near Gurgaon with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Gurgaon", "item": "https://www.trivenicabs.in/places-to-visit-near-gurgaon" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
