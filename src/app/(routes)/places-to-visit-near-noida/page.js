import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.noida;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const metadata = {
  title: '15+ Places to Visit Near Noida by Car | NCR Getaways | Book Cab',
  description: `Best places to visit near Noida by car. Agra (200 km), Mathura (145 km), Jim Corbett (240 km), Rishikesh (230 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near noida, places near noida, weekend getaways from noida, day trips from noida, noida nearby places, places around noida, tourist places near noida, places to visit near noida by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-noida' },
  openGraph: { title: '15+ Places to Visit Near Noida by Car | Book Cab', description: 'Quick getaways from Noida NCR. Agra, Mathura, Jim Corbett, Rishikesh & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-noida', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Noida' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Noida | Triveni Cabs', description: 'NCR weekend getaways from Noida. Call 7668570551.', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearNoidaPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Noida", "description": "Top destinations near Noida with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Noida", "item": "https://www.trivenicabs.in/places-to-visit-near-noida" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
