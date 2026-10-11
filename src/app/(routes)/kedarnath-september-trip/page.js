import { getFestivalBySlug } from '@/utilis/festivalData';
import { getPostMonsoonBySlug } from '@/utilis/season/postMonsoonSeason';
import FestivalTripClient from '@/components/festival/FestivalTripClient';
import { Hourglass } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const festival = getFestivalBySlug('kedarnath-september-trip') || getPostMonsoonBySlug('kedarnath-september-trip');

export const metadata = {
  title: tightenTitle('Kedarnath in September 2026 | Delhi to Gaurikund Cab'),
  description: 'Kedarnath trip September 2026. Delhi to Gaurikund cab from ₹12,500 sedan, ₹16,500 Ertiga. 450 km road transport. Call 7668570551.',
  keywords: 'kedarnath september trip, kedarnath in september, delhi to kedarnath cab september, kedarnath september 2026, delhi to gaurikund taxi, kedarnath trip post monsoon',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kedarnath-september-trip' },
  openGraph: {
    title: 'Kedarnath September 2026 | Delhi Cab from ₹12,500',
    description: 'Delhi to Gaurikund road transport for Kedarnath, 450 km. Post-monsoon window, lighter crowds.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kedarnath-september-trip', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/chardham/kedarnath-hero.png', width: 1200, height: 630, alt: 'Kedarnath September Trip Cab from Delhi — Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: 'Kedarnath September 2026 Trip', description: 'Delhi to Gaurikund cab from ₹12,500. Post-monsoon Kedarnath window.', images: ['/images/chardham/kedarnath-hero.png'], creator: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export const revalidate = 3600;

export default function KedarnathSeptemberTripPage() {
  if (!festival) return null;

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Kedarnath Yatra Road Transport", "name": "Kedarnath September Trip Cab Service", "description": "Delhi to Gaurikund/Sonprayag road transport for Kedarnath in the September-October post-monsoon window. Approximately 450 km. Trek and helicopter booked separately by the traveller.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366, Dandupura, near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Haridwar" }, { "@type": "City", "name": "Rishikesh" }, { "@type": "Place", "name": "Kedarnath" }, { "@type": "Place", "name": "Gaurikund" }], "offers": { "@type": "AggregateOffer", "lowPrice": "12500", "highPrice": "21500", "priceCurrency": "INR" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Char Dham Yatra", "item": "https://www.trivenicabs.in/chardham-yatra" }, { "@type": "ListItem", "position": 3, "name": "Kedarnath September Trip", "item": "https://www.trivenicabs.in/kedarnath-september-trip" }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": festival.faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) };

  // Season banner: shows only while the window below is still ahead of us.
  // Evaluated per render; `revalidate = 3600` regenerates the static page hourly,
  // so the banner drops itself within an hour of the window closing.
  const now = new Date();
  const seasonBanner = [
    { end: '2026-10-31T23:59:59+05:30', head: 'Kedarnath post-monsoon window, September to October 2026:', body: 'the portals stay open through September and October, closing for winter around Bhai Dooj. Exact dates are announced by the temple committee.' },
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
