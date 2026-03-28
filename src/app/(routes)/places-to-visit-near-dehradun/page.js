import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.dehradun;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const revalidate = false;

export const metadata = {
  title: '15+ Places to Visit Near Dehradun by Car | Mountain Escapes | Book Cab',
  description: `Best places to visit near Dehradun by car. Mussoorie (35 km), Rishikesh (45 km), Haridwar (55 km), Auli (290 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near dehradun, places near dehradun, weekend getaways from dehradun, day trips from dehradun, dehradun nearby places, hill stations near dehradun, places around dehradun, tourist places near dehradun',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-dehradun' },
  openGraph: { title: '15+ Places to Visit Near Dehradun by Car | Book Cab', description: 'Mountain escapes from Dehradun. Mussoorie, Rishikesh, Auli, Chopta & more with cab fares.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-dehradun', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Dehradun' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Dehradun | Triveni Cabs', description: 'Himalayan adventures from Dehradun. Call 7668570551.', images: ['/images/sightseeing/Dehradun/Dehradun_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearDehradunPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Dehradun", "description": "Top destinations near Dehradun with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Dehradun", "item": "https://www.trivenicabs.in/places-to-visit-near-dehradun" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
