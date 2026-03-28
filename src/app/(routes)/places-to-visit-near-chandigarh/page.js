import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.chandigarh;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = false;

export const metadata = {
  title: '15+ Places to Visit Near Chandigarh by Car | Hills & Heritage | Book Cab',
  description: `Best places to visit near Chandigarh by car. Shimla (115 km), Kasauli (60 km), Manali (310 km), Amritsar (230 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near chandigarh, places near chandigarh, weekend getaways from chandigarh, day trips from chandigarh, chandigarh nearby places, hill stations near chandigarh, places around chandigarh, tourist places near chandigarh',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-chandigarh' },
  openGraph: { title: '15+ Places to Visit Near Chandigarh by Car | Book Cab', description: 'Hill stations and heritage near Chandigarh. Shimla, Kasauli, Manali & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-chandigarh', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Chandigarh' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Chandigarh | Triveni Cabs', description: 'Hills and heritage trips from Chandigarh. Call 7668570551.', images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearChandigarhPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Chandigarh", "description": "Top destinations near Chandigarh with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Chandigarh", "item": "https://www.trivenicabs.in/places-to-visit-near-chandigarh" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
