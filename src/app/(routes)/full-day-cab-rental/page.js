import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getArticleSchema, getHowToSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const rental = getRentalBySlug('full-day-cab-rental');

export const metadata = {
  title: tightenTitle('Full Day Cab Rental | 8 Hours 80 km from Rs 2,500'),
  description: 'Book full day cab rental for 8 hours 80 km. Sedan Rs 2,500, SUV Rs 3,500, Innova Rs 4,500. Sightseeing, business, weddings. Call 7668570551.',
  keywords: 'full day cab rental, 8 hour cab rental, cab for full day, full day taxi hire, day cab with driver, sightseeing cab rental, full day car hire',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/full-day-cab-rental' },
  openGraph: { title: 'Full Day Cab Rental | 8 Hrs 80 km from Rs 2,500', description: 'Full day cab with driver. 8 hours, 80 km. From Rs 2,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/full-day-cab-rental', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Full Day Cab Rental | Rs 2,500', description: 'Full day cab rental. 8 hours 80 km. Sedan, SUV, Innova.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FullDayCabRentalPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "@id": "https://www.trivenicabs.in/full-day-cab-rental/#service", "serviceType": "Full Day Cab Rental", "name": "Full Day Cab Rental - 8 Hours 80 km", "description": "Dedicated AC vehicle and driver for 8 hours and 80 km. Perfect for city sightseeing, business travel, wedding functions.", "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" }, "brand": { "@type": "Brand", "name": "Triveni Cabs" }, "offers": { "@type": "AggregateOffer", "lowPrice": "2500", "highPrice": "4500", "priceCurrency": "INR" }, ...getRatingAndReviews('full-day-cab-rental', 'city') };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Full Day Cab Rental", "item": "https://www.trivenicabs.in/full-day-cab-rental" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": rental.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })), "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead']) };
  const articleSchema = getArticleSchema({
    slug: 'full-day-cab-rental',
    headline: 'Full Day Cab Rental — 8 Hours / 80 km from ₹2,500',
    description: 'Full-day cab rental fares by vehicle, what is included, and how to book a dedicated 8-hour car with driver across North India.',
    image: '/images/about/about_banner.webp',
    datePublished: '2026-01-01',
    dateModified: getTodayDate(),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead'],
  });
  const howToSchema = getHowToSchema({
    name: 'How to Book a Full Day Cab Rental',
    description: 'Book a dedicated 8-hour / 80 km cab with verified driver in under 2 minutes.',
    totalTime: 'PT2M',
    estimatedCost: { currency: 'INR', value: '2500' },
    steps: [
      { name: 'Call or WhatsApp', text: 'Call 7668570551 or message on WhatsApp with your city, pickup point, and date.' },
      { name: 'Choose your vehicle', text: 'Select Sedan (₹2,500), SUV (₹3,500), or Innova Crysta (₹4,500) for 8 hours / 80 km. The flat fare is confirmed upfront.' },
      { name: 'Get driver details', text: 'Receive a confirmed booking with driver name and vehicle number within 15 minutes.' },
      { name: 'Ride all day & pay after', text: 'The dedicated car and driver stay with you for 8 hours, waiting at every stop. Pay by cash or UPI at the end.' },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RentalPackageClient rental={rental} />
    </>
  );
}

export const revalidate = 3600;
