import { getRentalBySlug } from '@/utilis/rentalPackageData';
import RentalPackageClient from '@/components/rental/RentalPackageClient';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getArticleSchema, getHowToSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

const rental = getRentalBySlug('half-day-cab-rental');

export const metadata = {
  title: tightenTitle('Half Day Cab Rental | 4 Hours 40 km from Rs 1,500'),
  description: 'Book half day cab rental for 4 hours 40 km. Sedan Rs 1,500, SUV Rs 2,200, Innova Rs 2,800. Shopping, doctor visits, meetings. Call 7668570551.',
  keywords: 'half day cab rental, 4 hour cab rental, cab for 4 hours, half day taxi, short duration cab hire, cab for shopping, cab for doctor visit',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/half-day-cab-rental' },
  openGraph: { title: 'Half Day Cab Rental | 4 Hrs 40 km from Rs 1,500', description: 'Half day cab with driver. 4 hours, 40 km. From Rs 1,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/half-day-cab-rental', siteName: 'Triveni Cabs™' },
  twitter: { card: 'summary_large_image', title: 'Half Day Cab Rental | Rs 1,500', description: 'Half day cab rental. 4 hours 40 km. Sedan, SUV, Innova.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HalfDayCabRentalPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "@id": "https://www.trivenicabs.in/half-day-cab-rental/#service", "serviceType": "Half Day Cab Rental", "name": "Half Day Cab Rental - 4 Hours 40 km", "description": "Dedicated AC cab with driver for 4 hours and 40 km at flat rate. Perfect for shopping, doctor visits, meetings.", "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" }, "brand": { "@type": "Brand", "name": "Triveni Cabs" }, "offers": { "@type": "AggregateOffer", "lowPrice": "1500", "highPrice": "2800", "priceCurrency": "INR" }, ...getRatingAndReviews('half-day-cab-rental', 'city') };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Half Day Cab Rental", "item": "https://www.trivenicabs.in/half-day-cab-rental" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": rental.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })), "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead']) };
  const articleSchema = getArticleSchema({
    slug: 'half-day-cab-rental',
    headline: 'Half Day Cab Rental — 4 Hours / 40 km from ₹1,500',
    description: 'Half-day cab rental fares by vehicle, what is included, and how to book a dedicated 4-hour car with driver for shopping, doctor visits and meetings.',
    image: '/images/about/about_banner.webp',
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn('/half-day-cab-rental') || getTodayDate()),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead'],
  });
  const howToSchema = getHowToSchema({
    name: 'How to Book a Half Day Cab Rental',
    description: 'Book a dedicated 4-hour / 40 km cab with verified driver in under 2 minutes.',
    totalTime: 'PT2M',
    estimatedCost: { currency: 'INR', value: '1500' },
    steps: [
      { name: 'Call or WhatsApp', text: 'Call 7668570551 or message on WhatsApp with your city, pickup point, and date.' },
      { name: 'Choose your vehicle', text: 'Select Sedan (₹1,500), SUV (₹2,200), or Innova Crysta (₹2,800) for 4 hours / 40 km. The flat fare is confirmed upfront.' },
      { name: 'Get driver details', text: 'Receive a confirmed booking with driver name and vehicle number within 15 minutes.' },
      { name: 'Ride & pay after', text: 'The dedicated car and driver stay with you for 4 hours, waiting at every stop. Pay by cash or UPI at the end.' },
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
