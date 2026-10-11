import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const service = getSpecialTransportBySlug('pet-friendly-cab-service');

const heroImage = {
  src: '/images/car/ertiga.jpg',
  alt: 'Ertiga SUV from the Triveni Cabs fleet — the vehicle most often booked for travelling with pets',
};

const fleetImages = [
  { src: '/images/car/swift_dzire.jpg', alt: 'Swift Dzire sedan from the Triveni Cabs fleet, fitted with a protective seat cover for pet travel' },
  { src: '/images/car/ertiga.jpg', alt: 'Ertiga SUV from the Triveni Cabs fleet, recommended for travelling with one or two pets' },
  { src: '/images/car/innova_crysta.jpg', alt: 'Innova Crysta from the Triveni Cabs fleet, the roomiest option for large pets and carriers' },
];

export const metadata = {
  title: tightenTitle('Pet-Friendly Cab Service | Travel with Dogs & Cats'),
  description: 'Book pet-friendly cab service. Travel with dogs, cats and pets in sanitized vehicles with pet seat covers. AC cabs from Rs 15/km. Call 7668570551.',
  keywords: 'pet friendly cab, pet taxi service, travel with pets, dog friendly cab, cat transport service, cab for pets, pet travel india',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/pet-friendly-cab-service' },
  openGraph: { title: 'Pet-Friendly Cab Service | Travel with Your Pets', description: 'Pet-friendly cabs with sanitized vehicles, seat covers, and trained drivers. From Rs 15/km.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/pet-friendly-cab-service', siteName: 'Triveni Cabs', images: [{ url: '/images/car/ertiga.jpg', width: 1200, height: 630, alt: 'Ertiga SUV from the Triveni Cabs fleet used for pet-friendly cab bookings' }] },
  twitter: { card: 'summary_large_image', title: 'Pet-Friendly Cab Service | Triveni Cabs™', description: 'Travel with pets. Sanitized vehicles, pet seat covers, AC cabs. From Rs 15/km.', images: ['/images/car/ertiga.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function PetFriendlyCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Pet-Friendly Cab Service", "name": "Pet-Friendly Cab Service - Travel with Your Pets", "description": "Pet-friendly cab service with sanitized vehicles, pet seat covers, and trained pet-comfortable drivers for safe pet travel.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Pet-Friendly Cab", "item": "https://www.trivenicabs.in/pet-friendly-cab-service" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": service.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SpecialTransportClient service={service} heroImage={heroImage} fleetImages={fleetImages} />
    </>
  );
}
