import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('monsoon-hill-station-packages');

export const metadata = {
  title: tightenTitle('Monsoon Hill Station Packages 2026 | Shimla & Manali'),
  description: 'Monsoon hill station cab packages from Delhi 2026. Shimla, Manali, Mussoorie, Nainital. Sedan from ₹8,250, Tempo ₹15,000. Call 7668570551.',
  keywords: 'monsoon hill station packages, shimla in monsoon, manali monsoon trip, mussoorie monsoon package, nainital in rains, delhi to hill station august, monsoon hill station cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/monsoon-hill-station-packages' },
  openGraph: {
    title: 'Monsoon Hill Station Packages 2026 | From ₹8,250',
    description: 'Shimla, Manali, Mussoorie and Nainital in the rains. Waterfalls at full flow, off-season rates.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/monsoon-hill-station-packages', siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Shimla/shimla_hero_section.jpg', width: 1200, height: 630, alt: 'Monsoon Hill Station Packages from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Monsoon Hill Station Packages 2026', description: 'Shimla, Manali, Mussoorie, Nainital in the rains. From ₹8,250.', images: ['/images/sightseeing/Shimla/shimla_hero_section.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function MonsoonHillStationPackagesPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Monsoon Hill Station Transport", "name": "Monsoon Hill Station Cab Packages from Delhi", "description": "Monsoon season cab and tempo packages from Delhi to Shimla, Manali, Mussoorie and Nainital for August-September 2026. Experienced hill drivers, daily road-status checks.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Shimla" }, { "@type": "City", "name": "Manali" }, { "@type": "City", "name": "Mussoorie" }, { "@type": "City", "name": "Nainital" }], "offers": { "@type": "AggregateOffer", "lowPrice": "8250", "highPrice": "20000", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Monsoon Hill Station Packages", "item": "https://www.trivenicabs.in/monsoon-hill-station-packages" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-30T23:59:59+05:30', head: 'Monsoon hill station season, August to September 2026:', body: 'the valleys are green and hotel rates drop, but keep a buffer day - Himachal and Uttarakhand hill roads do get landslides after a heavy spell.' },
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
