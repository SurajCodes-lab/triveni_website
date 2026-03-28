import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.varanasi;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = false;

export const metadata = {
  title: '15+ Places to Visit Near Varanasi by Car | Spiritual Trails | Book Cab',
  description: `Best places to visit near Varanasi by car. Sarnath (10 km), Prayagraj (120 km), Bodhgaya (250 km), Ayodhya (210 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near varanasi, places near varanasi, day trips from varanasi, varanasi nearby places, weekend getaways from varanasi, places around varanasi, tourist places near varanasi, buddhist circuit from varanasi',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-varanasi' },
  openGraph: { title: '15+ Places to Visit Near Varanasi by Car | Book Cab', description: 'Spiritual trails from Varanasi. Sarnath, Bodhgaya, Prayagraj, Ayodhya & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-varanasi', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Varanasi' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Varanasi | Triveni Cabs', description: 'Spiritual and heritage trips from Varanasi. Call 7668570551.', images: ['/images/sightseeing/Varanasi/varanasi_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearVaranasiPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Varanasi", "description": "Top destinations near Varanasi with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Varanasi", "item": "https://www.trivenicabs.in/places-to-visit-near-varanasi" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
