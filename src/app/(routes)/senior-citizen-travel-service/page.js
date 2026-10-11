import { getSpecialTransportBySlug } from '@/utilis/specialTransportData';
import SpecialTransportClient from '@/components/special/SpecialTransportClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const service = getSpecialTransportBySlug('senior-citizen-travel-service');

const heroImage = {
  src: '/images/car/innova_crysta.jpg',
  alt: 'Innova Crysta from the Triveni Cabs fleet — the recommended vehicle for senior citizen travel thanks to its high seats and easy entry',
};

const fleetImages = [
  { src: '/images/car/swift_dzire.jpg', alt: 'Swift Dzire sedan from the Triveni Cabs fleet used for short senior citizen trips' },
  { src: '/images/car/ertiga.jpg', alt: 'Ertiga SUV from the Triveni Cabs fleet, comfortable for elders travelling with family' },
  { src: '/images/car/innova_crysta.jpg', alt: 'Innova Crysta from the Triveni Cabs fleet, the recommended vehicle for elderly passengers on long journeys' },
];

export const metadata = {
  title: tightenTitle('Senior Citizen Travel Service | Elderly-Friendly Cabs'),
  description: 'Book senior citizen cab service. Patient drivers, gentle driving, door-to-door assistance. Sedan from Rs 11/km. Regular packages for temple visits.',
  keywords: 'senior citizen cab, elderly cab service, senior citizen travel, elderly transport, old age cab, senior citizen taxi, elderly friendly cab, senior citizen car service',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/senior-citizen-travel-service' },
  openGraph: { title: 'Senior Citizen Travel Service | Elderly-Friendly', description: 'Patient drivers, gentle driving, door-to-door assistance for senior citizens.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/senior-citizen-travel-service', siteName: 'Triveni Cabs', images: [{ url: '/images/car/innova_crysta.jpg', width: 1200, height: 630, alt: 'Innova Crysta from the Triveni Cabs fleet used for senior citizen travel bookings' }] },
  twitter: { card: 'summary_large_image', title: 'Senior Citizen Cab Service', description: 'Elderly-friendly cab service. Patient drivers, smooth driving.', images: ['/images/car/innova_crysta.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function SeniorCitizenTravelPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Senior Citizen Travel Service", "name": "Senior Citizen Travel Service - Elderly-Friendly Cabs", "description": "Cab service designed for senior citizens with patient drivers, gentle driving, and door-to-door assistance.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Special Services", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 3, "name": "Senior Citizen Travel", "item": "https://www.trivenicabs.in/senior-citizen-travel-service" }] };
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
