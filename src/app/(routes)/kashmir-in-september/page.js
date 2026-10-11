import { getFestivalBySlug } from '@/utilis/festivalData';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('kashmir-in-september');

export const metadata = {
  title: tightenTitle('Kashmir in September 2026 | Post-Monsoon Trip from Delhi'),
  description: 'Kashmir in September 2026 — clear post-monsoon skies, 20-27°C, shoulder rates. Srinagar, Gulmarg, Pahalgam, Sonamarg. From ₹19,800. Call 7668570551.',
  keywords: 'kashmir in september, kashmir september weather, srinagar in september, kashmir trip september 2026, delhi to kashmir cab, gulmarg pahalgam september, kashmir post monsoon',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kashmir-in-september' },
  openGraph: {
    title: 'Kashmir in September 2026 | From ₹19,800',
    description: 'September is post-monsoon in Kashmir — clear skies, pleasant days, shoulder-season rates. Srinagar, Gulmarg, Pahalgam, Sonamarg.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kashmir-in-september', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Srinagar/Dal_Lake.jpg', width: 1200, height: 630, alt: 'Kashmir in September — Dal Lake Srinagar — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kashmir in September 2026', description: 'Post-monsoon Kashmir. Clear skies, shoulder rates. From ₹19,800.', images: ['/images/sightseeing/Srinagar/Dal_Lake.jpg'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function KashmirInSeptemberPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Kashmir September Trip Transport", "name": "Kashmir in September — Cab and Tempo from Delhi", "description": "September post-monsoon Kashmir trips covering Srinagar, Gulmarg, Pahalgam and Sonamarg. Road transport from Delhi via Jammu, or local valley circuits for customers flying into Srinagar.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Srinagar" }, { "@type": "City", "name": "Gulmarg" }, { "@type": "City", "name": "Pahalgam" }, { "@type": "City", "name": "Sonamarg" }], "offers": { "@type": "AggregateOffer", "lowPrice": "19800", "highPrice": "50400", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Kashmir in September", "item": "https://www.trivenicabs.in/kashmir-in-september" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": (festival.faqs || []).map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-09-30T23:59:59+05:30', head: 'Kashmir in September 2026:', body: 'by September the monsoon has largely withdrawn from the valley. We are booking September dates now.' },
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
