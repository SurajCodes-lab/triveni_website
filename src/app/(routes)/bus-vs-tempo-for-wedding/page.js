import Link from 'next/link';
import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';
import SemanticComparison from '@/components/seo/SemanticComparison';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getComparisonSchema, getArticleSchema, getHowToSchema, getSpeakableSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

const SLUG = 'bus-vs-tempo-for-wedding';
const SITE = 'https://www.trivenicabs.in';
const PAGE_URL = `${SITE}/${SLUG}`;
const OG_IMAGE = '/images/bus/hero_section_image.webp';
const data = getComparisonBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Bus vs Tempo for Wedding (2026)'),
  description:
    'Bus or tempo for wedding guest transport & baraat? Compare capacity, cost per guest & venue access. Verdict: bus for 40+, tempo for baraat. Call 7668570551.',
  keywords:
    'bus vs tempo for wedding, bus or tempo for wedding, bus or tempo for baraat, wedding guest transport, baraat vehicle rental, wedding bus booking, tempo for wedding baraat, wedding group transport comparison, bus for wedding guests, tempo traveller for baraat, wedding shuttle service, destination wedding transport, baraat tempo with DJ, wedding bus cost, tempo vs bus for wedding price',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL(SITE),
  alternates: { canonical: PAGE_URL, languages: { 'en-IN': `/${SLUG}` } },
  openGraph: {
    title: 'Bus vs Tempo Traveller for Wedding — Which to Book for Guests & Baraat? (2026)',
    description:
      'Capacity, cost per guest, venue access and baraat suitability compared. The honest verdict on bus vs tempo traveller for your wedding transport.',
    type: 'article',
    locale: 'en_IN',
    url: PAGE_URL,
    siteName: 'Triveni Cabs',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Bus vs Tempo Traveller for Wedding — Triveni Cabs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bus vs Tempo for Wedding — Which Should You Book? (2026)',
    description: 'Guest capacity, cost per head, venue access and baraat fit compared. Get the verdict before you book wedding transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const COMPARISON_ROWS = [
  { feature: 'Guest capacity', v1: '40-56 passengers', v2: '12-26 passengers' },
  { feature: 'Price per km', v1: '₹45-65/km', v2: '₹20-28/km' },
  { feature: 'Per-person cost (40 guests)', v1: 'Lowest in one vehicle', v2: 'Needs 2-3 tempos' },
  { feature: 'Venue road access', v1: 'Needs wide roads', v2: 'Reaches any venue' },
  { feature: 'Baraat suitability', v1: 'Limited', v2: 'Traditional — DJ + decoration' },
  { feature: 'Luggage / outfits', v1: 'Massive underfloor hold', v2: 'Moderate boot' },
  { feature: 'Comfort', v1: 'Good (push-back on luxury)', v2: 'Excellent push-back seats' },
  { feature: 'Hill / destination weddings', v1: 'Not for narrow access', v2: 'Only practical option' },
  { feature: 'Best for', v1: 'Bulk guest transport (40+)', v2: 'Baraat & close-family shuttle' },
];

export default function BusVsTempoWeddingPage() {
  const rr = getRatingAndReviews(SLUG, 'tempo');

  const baseSchemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Wedding Cars', url: '/wedding' },
      { name: 'Bus vs Tempo for Wedding', url: `/${SLUG}` },
    ]),
    generateFAQSchema(data.faqs),
  );

  const comparisonSchema = getComparisonSchema({
    slug: SLUG,
    title: 'Bus vs Tempo Traveller for Wedding — Attribute Comparison',
    description:
      'Side-by-side comparison of wedding bus and tempo traveller across guest capacity, cost per head, venue access, baraat suitability, luggage and comfort.',
    rows: COMPARISON_ROWS,
    mentions: ['Wedding Bus', 'Tempo Traveller', 'Baraat Tempo', 'Wedding Guest Transport', 'Destination Wedding'],
  });

  const howToSchema = getHowToSchema({
    name: 'How to Choose Between a Bus and a Tempo Traveller for Your Wedding',
    description: 'A quick decision framework for booking wedding guest transport and baraat vehicles.',
    totalTime: 'PT5M',
    steps: [
      { name: 'Count your guests per movement', text: 'For 40+ guests in one shuttle, a bus is most economical; for baraat groups of 15-25, use a tempo traveller.' },
      { name: 'Check the venue road', text: 'Farmhouses and heritage venues with narrow access need tempos — a bus cannot reach them.' },
      { name: 'Plan the baraat', text: 'Baraat with DJ and decoration is traditionally a 17-20 seater tempo, not a bus.' },
      { name: 'Mix vehicles if needed', text: 'Most weddings combine one bus for bulk guest transport with 1-2 baraat tempos and family shuttles.' },
      { name: 'Book with Triveni Cabs', text: 'Call 7668570551 for a custom wedding transport quote with decoration options.' },
    ],
  });

  const articleSchema = getArticleSchema({
    slug: SLUG,
    headline: 'Bus vs Tempo Traveller for Wedding: Which to Book for Guests and Baraat (2026)',
    description:
      'An experience-based guide to wedding transport comparing bus and tempo traveller on guest capacity, cost per head, venue access, baraat suitability and comfort.',
    image: OG_IMAGE,
    datePublished: '2024-06-01',
    dateModified: getTodayDate(),
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'Wedding Bus & Baraat Tempo Traveller Hire',
    serviceType: 'Wedding Group Transport',
    description:
      'Wedding guest buses (40-56 seater) and baraat tempo travellers (12-26 seater) with decoration, DJ setup and professional drivers for weddings across North India.',
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
    name: 'Bus vs Tempo Traveller for Wedding',
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
            Bus vs Tempo Traveller for Wedding: Which Should You Book?
          </h1>
          <p className="speakable-lead text-lg text-slate-700 bg-rose-50 border border-rose-100 rounded-xl px-5 py-4 mb-8">
            Short answer: for transporting <strong>40+ wedding guests</strong> on a flat route, a <strong>bus</strong> is the
            most economical single-vehicle option. For a <strong>baraat of 15-25</strong>, a decorated{' '}
            <strong>tempo traveller</strong> with DJ setup is the traditional and most popular choice. For destination
            weddings at hill stations or venues with narrow access roads, tempo travellers are the only practical option.
            Most big weddings use a combination — one bus for bulk guest transport plus baraat tempos and family shuttles.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Bus vs Tempo Traveller for Wedding — Full Comparison Table</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Wedding Bus</th>
                  <th className="px-4 py-3 font-semibold">Tempo Traveller</th>
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
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to choose a wedding bus</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>You are moving 40+ guests to the venue in one shuttle.</li>
                <li>The venue has wide roads and ample bus parking.</li>
                <li>Guests carry heavy luggage and wedding outfits.</li>
                <li>You want the lowest cost per guest for bulk transport.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to choose a tempo traveller</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>It is a baraat of 15-25 with DJ and decoration.</li>
                <li>The venue has a narrow approach road (farmhouse, heritage).</li>
                <li>It is a hill-station or destination wedding.</li>
                <li>You need multiple pickup points for close family.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost comparison example (Delhi-Jaipur wedding, 560 km)</h2>
          <p className="text-slate-600 mb-8">
            A 45-seater luxury wedding bus costs about <strong>₹29,120</strong> round trip — roughly <strong>₹650 per
            guest</strong> for 45 people. Covering the same 45 guests with tempo travellers would need three 17-seaters at a
            higher combined cost and more coordination. The bus wins decisively for bulk guest transport; reserve tempos for
            the baraat and close-family movements where flexibility matters more than headcount.
          </p>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Quick answer for voice search</h2>
            <p className="speakable-faq-first text-slate-600">{data.faqs[0].answer}</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Planning wedding transport?</h2>
            <p className="text-slate-300 mb-6">Tell us your guest count, baraat size and venue — we will design a bus + baraat-tempo combo and quote a fixed package.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300">Call +91 76685 70551</a>
              <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700">WhatsApp Quote</a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <h3 className="font-bold text-slate-700 mb-3">Related pages</h3>
            <div className="flex flex-wrap gap-4 text-blue-600">
              <Link href="/wedding" className="hover:underline">Wedding Car &amp; Transport</Link>
              <Link href="/bus-routes" className="hover:underline">Wedding Bus Routes</Link>
              <Link href="/tempo-traveller" className="hover:underline">Baraat Tempo Traveller</Link>
              <Link href="/tempo-vs-bus" className="hover:underline">Tempo vs Bus</Link>
              <Link href="/12-seater-vs-17-seater-tempo" className="hover:underline">12 vs 17 Seater Tempo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
