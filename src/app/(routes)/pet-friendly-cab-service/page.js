import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';

const service = getSpecialTransportBySlug('pet-friendly-cab-service');

export const metadata = {
  title: 'Pet-Friendly Cab Service | Travel with Dogs & Cats | Triveni Cabs',
  description: 'Book pet-friendly cab service. Travel with dogs, cats and pets in sanitized vehicles with pet seat covers. AC cabs from Rs 15/km. Call 7668570551.',
  keywords: 'pet friendly cab, pet taxi service, travel with pets, dog friendly cab, cat transport service, cab for pets, pet travel india',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/pet-friendly-cab-service' },
  openGraph: { title: 'Pet-Friendly Cab Service | Travel with Your Pets', description: 'Pet-friendly cabs with sanitized vehicles, seat covers, and trained drivers. From Rs 15/km.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/pet-friendly-cab-service', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Pet-Friendly Cab Service | Triveni Cabs', description: 'Travel with pets. Sanitized vehicles, pet seat covers, AC cabs. From Rs 15/km.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = false;

export default function PetFriendlyCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Pet-Friendly Cab Service", "name": "Pet-Friendly Cab Service - Travel with Your Pets", "description": "Pet-friendly cab service with sanitized vehicles, pet seat covers, and trained pet-comfortable drivers for safe pet travel.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Pet-Friendly Cab", "item": "https://www.trivenicabs.in/pet-friendly-cab-service" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": service.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpecialTransportClient service={service} />
    </>
  );
}
