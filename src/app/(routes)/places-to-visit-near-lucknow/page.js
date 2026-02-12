import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.lucknow;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const metadata = {
  title: '15+ Places to Visit Near Lucknow by Car | Heritage & Pilgrimage | Book Cab',
  description: `Best places to visit near Lucknow by car. Ayodhya (135 km), Varanasi (300 km), Prayagraj (200 km), Agra (330 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near lucknow, places near lucknow, weekend getaways from lucknow, day trips from lucknow, lucknow nearby places, places around lucknow, tourist places near lucknow, places to visit near lucknow by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-lucknow' },
  openGraph: { title: '15+ Places to Visit Near Lucknow by Car | Book Cab', description: 'Explore heritage and pilgrimage sites near Lucknow. Ayodhya, Varanasi, Prayagraj & more.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-lucknow', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Lucknow' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Lucknow | Triveni Cabs', description: 'Heritage and spiritual trips from Lucknow. Call 7668570551.', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearLucknowPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Lucknow", "description": "Top destinations near Lucknow with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Lucknow", "item": "https://www.trivenicabs.in/places-to-visit-near-lucknow" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
