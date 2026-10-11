import { notFound } from 'next/navigation';
import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('hariyali-teej-jaipur-cab');

export const metadata = {
  title: tightenTitle('Hariyali Teej Jaipur Cab 2026 | Delhi to Jaipur'),
  description: 'Delhi to Jaipur cab for the Teej procession, August 2026. 280 km on NH-48. Sedan ₹11/km, Innova ₹18/km, no surge. Call 7668570551.',
  keywords: 'hariyali teej jaipur cab, teej jaipur 2026, delhi to jaipur teej cab, jaipur teej procession, teej festival rajasthan cab, jaipur cab august 2026, tripolia bazaar teej',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/hariyali-teej-jaipur-cab' },
  openGraph: {
    title: 'Hariyali Teej Jaipur Cab 2026 | From ₹3,300',
    description: 'Delhi to Jaipur for the Teej royal procession, August 2026. 280 km on NH-48. Old City, Amber Fort, Johari Bazaar.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/hariyali-teej-jaipur-cab', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg', width: 1200, height: 630, alt: 'Hariyali Teej Cab to Jaipur Old City — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Hariyali Teej Jaipur Cab 2026', description: 'Delhi to Jaipur for the Teej procession, August 2026. From ₹3,300.', images: ['/images/sightseeing/Jaipur/Hawa_Mahal.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function HariyaliTeejJaipurPage() {
  if (!festival) notFound();

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Teej Festival Transport", "name": "Hariyali Teej Jaipur Cab Service", "description": "Cab from Delhi to Jaipur for the Hariyali Teej royal procession in August 2026. Old City, Tripolia Bazaar, Amber Fort, City Palace and Johari Bazaar.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Gurgaon" }, { "@type": "City", "name": "Noida" }, { "@type": "City", "name": "Jaipur" }], "offers": { "@type": "AggregateOffer", "lowPrice": "3300", "highPrice": "15680", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Hariyali Teej Jaipur Cab", "item": "https://www.trivenicabs.in/hariyali-teej-jaipur-cab" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-08-31T23:59:59+05:30', head: 'Hariyali Teej, August 2026:', body: 'Rajasthan Tourism announces the exact procession date a few weeks ahead. Tell us your dates and we will hold a vehicle.' },
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
