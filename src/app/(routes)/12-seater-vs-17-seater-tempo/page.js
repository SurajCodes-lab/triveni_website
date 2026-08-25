import Link from 'next/link';
import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';
import SemanticComparison from '@/components/seo/SemanticComparison';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getComparisonSchema, getArticleSchema, getHowToSchema, getSpeakableSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = '12-seater-vs-17-seater-tempo';
const SITE = 'https://www.trivenicabs.in';
const PAGE_URL = `${SITE}/${SLUG}`;
const OG_IMAGE = '/images/tempo/17_seater.jpg';
const data = getComparisonBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('12 Seater vs 17 Seater Tempo Traveller (2026)'),
  description:
    '12 vs 17 seater tempo traveller compared: capacity, price per km, comfort & best-for. Verdict: 12-seater for 8-12, 17-seater for 13-17. Book on 7668570551.',
  keywords:
    '12 seater vs 17 seater tempo, 12 seater vs 17 seater tempo traveller, 17 seater tempo traveller price, 12 seater tempo traveller price per km, which tempo traveller is better, tempo traveller capacity comparison, 12 vs 17 seater tempo cost, best tempo traveller for group, tempo traveller 12 seater, tempo traveller 17 seater, maharaja tempo traveller, tempo for char dham yatra, group travel tempo, tempo traveller for wedding, tempo traveller for pilgrimage, tempo traveller rental rate',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL(SITE),
  alternates: { canonical: PAGE_URL, languages: { 'en-IN': `/${SLUG}` } },
  openGraph: {
    title: '12 Seater vs 17 Seater Tempo Traveller — Which Should You Book? (2026 Guide)',
    description:
      'Side-by-side: seating, luggage, price per km and ideal group size. The honest verdict on whether a 12 or 17 seater tempo traveller is right for your trip.',
    type: 'article',
    locale: 'en_IN',
    url: PAGE_URL,
    siteName: 'Triveni Cabs',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: '12 Seater vs 17 Seater Tempo Traveller — side-by-side comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '12 vs 17 Seater Tempo Traveller — Which Is Better? (2026)',
    description: 'Capacity, price per km, comfort and best-for compared. Get the verdict before you book your group tempo traveller.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const COMPARISON_ROWS = [
  { feature: 'Seating capacity', v1: '10-12 passengers + driver', v2: '15-17 passengers + driver' },
  { feature: 'Price per km', v1: '₹23/km', v2: '₹25/km' },
  { feature: 'Minimum charge', v1: '₹5,500 (250 km/day)', v2: '₹6,000 (250 km/day)' },
  { feature: 'Luggage space', v1: 'Moderate — 8-10 medium bags', v2: 'Larger boot — 12-15 bags' },
  { feature: 'Legroom per seat', v1: 'More (fewer seats)', v2: 'Standard' },
  { feature: 'Mileage', v1: '9-11 km/l', v2: '8-10 km/l' },
  { feature: 'Hill-road handling', v1: 'Slightly better (lighter)', v2: 'Good' },
  { feature: 'Best for', v1: 'Families & groups of 8-12', v2: 'Groups of 13-17, pilgrimage, corporate' },
  { feature: 'Per-person cost (full)', v1: '₹958 (12 pax, 500 km)', v2: '₹735 (17 pax, 500 km)' },
];

export default function TwelveVsSeventeenSeaterPage() {
  const rr = getRatingAndReviews(SLUG, 'tempo');

  const baseSchemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Tempo Traveller', url: '/tempo-traveller' },
      { name: '12 vs 17 Seater', url: `/${SLUG}` },
    ]),
    generateFAQSchema(data.faqs),
  );

  const comparisonSchema = getComparisonSchema({
    slug: SLUG,
    title: '12 Seater vs 17 Seater Tempo Traveller — Attribute Comparison',
    description:
      'Side-by-side comparison of 12 seater and 17 seater tempo travellers across capacity, price per km, luggage, comfort, mileage and ideal group size.',
    rows: COMPARISON_ROWS,
    mentions: ['Tempo Traveller', '12 Seater Tempo Traveller', '17 Seater Tempo Traveller', 'Maharaja Tempo Traveller', 'Group Travel'],
  });

  const howToSchema = getHowToSchema({
    name: 'How to Choose Between a 12 Seater and 17 Seater Tempo Traveller',
    description: 'A quick decision framework to pick the right tempo traveller size for your group.',
    totalTime: 'PT5M',
    steps: [
      { name: 'Count your travellers', text: 'Add up every passenger including children and the trip leader. Groups of 8-12 fit a 12 seater; 13-17 need a 17 seater.' },
      { name: 'Add a comfort buffer', text: 'For long journeys leave 1-2 seats spare for legroom and luggage. A group of 12 is often more comfortable in a 17 seater.' },
      { name: 'Factor in luggage', text: 'Pilgrimage and multi-day trips with heavy bags favour the 17 seater for its larger boot.' },
      { name: 'Compare per-head cost', text: 'Divide the per-km rate by occupancy. A near-full 17 seater is usually the lowest cost per person.' },
      { name: 'Book with Triveni Cabs', text: 'Call 7668570551 or WhatsApp to confirm vehicle, AC option and driver for your dates.' },
    ],
  });

  const articleSchema = getArticleSchema({
    slug: SLUG,
    headline: '12 Seater vs 17 Seater Tempo Traveller: Which Should You Book in 2026?',
    description:
      'An experience-based comparison of 12 and 17 seater tempo travellers covering capacity, per-km price, luggage, comfort and the right pick for your group size.',
    image: OG_IMAGE,
    datePublished: '2024-06-01',
    dateModified: getTodayDate(),
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: '12 & 17 Seater Tempo Traveller Hire',
    serviceType: 'Tempo Traveller Rental',
    description:
      'AC 12 seater and 17 seater tempo traveller hire with professional drivers for family trips, pilgrimage, corporate outings and group tours across North India.',
    url: PAGE_URL,
    areaServed: { '@type': 'Country', name: 'India' },
    brand: { '@type': 'Brand', name: 'Triveni Cabs' },
    provider: { '@type': 'TravelAgency', '@id': `${SITE}/#organization`, name: 'Triveni Cabs', telephone: '+91-7668570551' },
    aggregateRating: rr.aggregateRating,
    review: rr.review,
  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: '12 Seater vs 17 Seater Tempo Traveller',
    url: PAGE_URL,
    dateModified: getTodayDate(),
    speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(baseSchemas) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <SemanticComparison data={data} />
      <ComparisonClient data={data} />

      {/* AEO/GEO supplemental content — direct-answer verdict, attribute table, decision guide */}
      <section className="bg-slate-50 py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="speakable-headline text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            12 Seater vs 17 Seater Tempo Traveller: Which Should You Book?
          </h1>
          <p className="speakable-lead text-lg text-slate-700 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-8">
            Short answer: book a <strong>12 seater tempo traveller</strong> for groups of 8-12 to save money and enjoy more
            legroom per person. Book a <strong>17 seater</strong> for groups of 13-17 — the cost difference is only about
            ₹2/km, and split across more passengers the 17 seater is actually <strong>cheaper per head</strong> (around
            ₹735 vs ₹958 per person on a 500 km trip). For Char Dham Yatra and narrow hill roads, the lighter 12 seater is
            the safer pick even for slightly larger groups.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">12 Seater vs 17 Seater Tempo Traveller — Full Comparison Table</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">12 Seater Tempo</th>
                  <th className="px-4 py-3 font-semibold">17 Seater Tempo</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={r.feature} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-slate-700">{r.feature}</td>
                    <td className="px-4 py-3 text-slate-600">{r.v1}</td>
                    <td className="px-4 py-3 text-slate-600">{r.v2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to choose a 12 seater tempo traveller</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>Your group is 8-12 people and budget is the priority.</li>
                <li>You want maximum legroom and luggage space per person.</li>
                <li>The route involves narrow hill roads — Manali, Shimla, Dharamshala.</li>
                <li>You are doing a Char Dham Yatra where mountain roads stay tight.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to choose a 17 seater tempo traveller</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>Your group is 13-17 people — only the 17 seater fits everyone.</li>
                <li>You want the lowest per-person cost on a full vehicle.</li>
                <li>You need a larger boot for wedding outfits or pilgrimage luggage.</li>
                <li>You want the Maharaja luxury variant for VIP group travel.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost comparison example (500 km trip)</h2>
          <p className="text-slate-600 mb-8">
            At ₹23/km, a 12 seater costs about <strong>₹10,000 + driver allowance</strong> — roughly ₹833 per person for 12
            travellers. A 17 seater at ₹25/km costs about <strong>₹12,000 + driver allowance</strong> — but split across 17
            people that is just <strong>₹706 per head</strong>. The takeaway: if you can fill 15+ seats, the 17 seater wins
            on per-person value; for 8-12 people the 12 seater is the cheaper total.
          </p>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Quick answer for voice search</h2>
            <p className="speakable-faq-first text-slate-600">
              {data.faqs[0].answer}
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Not sure which tempo traveller to book?</h2>
            <p className="text-slate-300 mb-6">Tell us your group size and route — we will recommend 12 or 17 seater and quote a fixed fare.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300">Call +91 76685 70551</a>
              <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700">WhatsApp Quote</a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <h3 className="font-bold text-slate-700 mb-3">Related pages</h3>
            <div className="flex flex-wrap gap-4 text-blue-600">
              <Link href="/tempo-traveller" className="hover:underline">Tempo Traveller Routes &amp; Rates</Link>
              <Link href="/tempo-traveller-vs-mini-bus" className="hover:underline">Tempo Traveller vs Mini Bus</Link>
              <Link href="/tempo-vs-bus" className="hover:underline">Tempo vs Bus</Link>
              <Link href="/chardham-yatra" className="hover:underline">Char Dham Yatra by Tempo</Link>
              <Link href="/wedding" className="hover:underline">Wedding Group Transport</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
