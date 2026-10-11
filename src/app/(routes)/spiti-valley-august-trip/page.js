import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('spiti-valley-august-trip');

export const metadata = {
  title: tightenTitle('Spiti Valley August Trip 2026 | Dry in the Monsoon'),
  description: 'Spiti Valley trip from Delhi in August 2026. Rain-shadow desert stays dry. Sedan ₹18,700, Innova ₹30,600. Kinnaur in, Kunzum out. Call 7668570551.',
  keywords: 'spiti valley august trip, spiti in monsoon, delhi to spiti valley, spiti valley trip cost, kaza trip from delhi, spiti circuit shimla manali, spiti valley tempo traveller',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/spiti-valley-august-trip' },
  openGraph: {
    title: 'Spiti Valley August Trip 2026 | From ₹18,700',
    description: 'Spiti is a rain-shadow desert — dry in August while Himachal is wet. Delhi-Shimla-Kaza-Manali circuit.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/spiti-valley-august-trip', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Spiti_Valley/langza.jpeg', width: 1200, height: 630, alt: 'Spiti Valley August Trip from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Spiti Valley August Trip 2026', description: 'Rain-shadow Spiti stays dry in August. Delhi circuit from ₹18,700.', images: ['/images/sightseeing/Spiti_Valley/langza.jpeg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function SpitiValleyAugustTripPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Spiti Valley Road Trip Transport", "name": "Spiti Valley August Trip from Delhi", "description": "Delhi to Spiti Valley road trip in August via Shimla and Kinnaur, exiting over Kunzum Pass and the Atal Tunnel to Manali. Rain-shadow desert stays dry through the monsoon. Inner Line Permit assistance for the Kinnaur border stretch.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Kaza" }, { "@type": "City", "name": "Manali" }], "offers": { "@type": "AggregateOffer", "lowPrice": "18700", "highPrice": "47600", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Spiti Valley August Trip", "item": "https://www.trivenicabs.in/spiti-valley-august-trip" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-30T23:59:59+05:30', head: 'Spiti season, August to September 2026:', body: 'Chandratal and the Kunzum Pass road are the first things to shut when the weather turns, and the camps there run a short season.' },
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
