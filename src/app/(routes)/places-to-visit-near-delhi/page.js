import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.delhi;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const metadata = {
  title: '20+ Places to Visit Near Delhi by Car | Weekend Getaways | Book Cab',
  description: `Best places to visit near Delhi by car. Agra (230 km), Jaipur (280 km), Mussoorie (290 km), Rishikesh (245 km) & 16 more. Sedan ₹11/km. Book cab: 7668570551.`,
  keywords: 'places to visit near delhi, weekend getaways from delhi, places near delhi by car, day trips from delhi, delhi nearby places, road trips from delhi, places around delhi, best places near delhi, tourist places near delhi, places to visit near delhi within 200 km, places to visit near delhi within 300 km',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-delhi' },
  openGraph: { title: '20+ Places to Visit Near Delhi by Car | Book Cab', description: 'Discover the best weekend getaways and day trips from Delhi. Book a cab from ₹11/km. Agra, Jaipur, Mussoorie, Rishikesh & more.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-delhi', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Delhi' }] },
  twitter: { card: 'summary_large_image', title: '20+ Places to Visit Near Delhi by Car | Triveni Cabs', description: 'Best day trips and weekend getaways from Delhi with cab fares. Call 7668570551.', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearDelhiPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Delhi", "description": "Top destinations near Delhi with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Delhi", "item": "https://www.trivenicabs.in/places-to-visit-near-delhi" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
