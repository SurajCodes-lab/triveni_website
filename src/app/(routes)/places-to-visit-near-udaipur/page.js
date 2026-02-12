import { placesToVisitPages } from '@/utilis/placesToVisitData';
import PlacesToVisitClient from '@/components/places/PlacesToVisitClient';

const data = placesToVisitPages.udaipur;
const allCities = Object.values(placesToVisitPages).map(c => ({ city: c.city, slug: c.slug }));

export const metadata = {
  title: '15+ Places to Visit Near Udaipur by Car | Royal Mewar | Book Cab',
  description: `Best places to visit near Udaipur by car. Chittorgarh (115 km), Kumbhalgarh (85 km), Ranakpur (90 km), Mount Abu (165 km) & more. Sedan ₹11/km. Call 7668570551.`,
  keywords: 'places to visit near udaipur, places near udaipur, day trips from udaipur, weekend getaways from udaipur, udaipur nearby places, places around udaipur, tourist places near udaipur, rajasthan from udaipur',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/places-to-visit-near-udaipur' },
  openGraph: { title: '15+ Places to Visit Near Udaipur by Car | Book Cab', description: 'Royal Mewar excursions from Udaipur. Chittorgarh, Kumbhalgarh, Ranakpur, Jawai & more.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/places-to-visit-near-udaipur', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Places to Visit Near Udaipur' }] },
  twitter: { card: 'summary_large_image', title: '15+ Places to Visit Near Udaipur | Triveni Cabs', description: 'Mewar heritage trips from Udaipur. Call 7668570551.', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PlacesToVisitNearUdaipurPage() {
  const itemListSchema = { "@context": "https://schema.org", "@type": "ItemList", "name": "Places to Visit Near Udaipur", "description": "Top destinations near Udaipur with distance, drive time, and cab fares", "numberOfItems": data.destinations.length, "itemListElement": data.destinations.map((d, i) => ({ "@type": "ListItem", "position": i + 1, "name": d.name, "url": `https://www.trivenicabs.in${d.bookingSlug}` })) };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Places to Visit Near Udaipur", "item": "https://www.trivenicabs.in/places-to-visit-near-udaipur" }] };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PlacesToVisitClient data={data} allCities={allCities} />
    </>
  );
}
