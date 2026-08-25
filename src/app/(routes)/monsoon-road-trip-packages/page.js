import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('monsoon-road-trip-packages');

export const metadata = {
  title: tightenTitle('Monsoon Road Trip Packages 2026 | Delhi to North India'),
  description: 'Book monsoon road trips from Delhi Aug-Sep 2026. Sedan from ₹8,250, Innova ₹13,500, Tempo ₹15,000. Honest route advice. Call 7668570551.',
  keywords: 'monsoon road trip packages, monsoon road trip from delhi, august road trip north india, september road trip delhi, monsoon cab packages, rainy season road trip india',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/monsoon-road-trip-packages' },
  openGraph: {
    title: 'Monsoon Road Trip Packages 2026 | From ₹8,250',
    description: 'Delhi monsoon road trips across North India. Aug-Sep 2026. AC vehicles with hill-route drivers.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/monsoon-road-trip-packages', siteName: 'Triveni Cabs',
    images: [{ url: '/images/packages/manali.webp', width: 1200, height: 630, alt: 'Monsoon Road Trip Packages from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Monsoon Road Trip Packages 2026', description: 'Delhi monsoon road trips Aug-Sep 2026. From ₹8,250.', images: ['/images/packages/manali.webp'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function MonsoonRoadTripPackagesPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Monsoon Road Trip Transport", "name": "Monsoon Road Trip Packages from Delhi", "description": "Monsoon season road trip cab and tempo packages from Delhi across North India for August-September 2026. Hill-route drivers, buffer-day planning, re-routing on landslide blockages.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Manali" }, { "@type": "City", "name": "Srinagar" }], "offers": { "@type": "AggregateOffer", "lowPrice": "8250", "highPrice": "48000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Monsoon Road Trip Packages", "item": "https://www.trivenicabs.in/monsoon-road-trip-packages" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-30T23:59:59+05:30', head: 'Monsoon road trip window, August to September 2026:', body: 'we are booking this season now, with buffer days and landslide re-routing planned into the itinerary.' },
  ].find((w) => now <= new Date(w.end));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {seasonBanner && (
        <div className="border-b border-amber-500/40 bg-amber-400 text-slate-900">
          <div className="mx-auto flex max-w-5xl items-start justify-center gap-2 px-4 py-2.5 sm:items-center">
            <Hourglass className="mt-[3px] h-4 w-4 shrink-0 sm:mt-0" aria-hidden="true" />
            <p className="text-[0.78rem] font-semibold leading-snug sm:text-center sm:text-sm">
              <span className="font-black">{seasonBanner.head}</span> {seasonBanner.body}
            </p>
          </div>
        </div>
      )}
      <FestivalTripClient festival={festival} />
    </>
  );
}
