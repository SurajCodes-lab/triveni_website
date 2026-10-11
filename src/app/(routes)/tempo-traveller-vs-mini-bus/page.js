import Link from 'next/link';
import { getComparisonBySlug } from '@/utilis/comparisonData';
import ComparisonClient from '@/components/content/ComparisonClient';
import { generateFAQSchema, generateBreadcrumbSchema, generateWebPageSchema, combineSchemas } from '@/lib/seo/schema-generators';
import SemanticComparison from '@/components/seo/SemanticComparison';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getComparisonSchema, getArticleSchema, getHowToSchema, getSpeakableSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

const SLUG = 'tempo-traveller-vs-mini-bus';
const SITE = 'https://www.trivenicabs.in';
const PAGE_URL = `${SITE}/${SLUG}`;
const OG_IMAGE = '/images/tempo/17_seater.jpg';
const data = getComparisonBySlug(SLUG);

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Tempo Traveller vs Mini Bus (2026)'),
  description:
    'Tempo traveller vs mini bus compared: capacity, price per km, hill access & comfort. Verdict: tempo for 12-17 & hills, mini bus for 20-27. Call 7668570551.',
  keywords:
    'tempo traveller vs mini bus, tempo traveller vs mini bus price, 17 seater vs 22 seater, 17 seater tempo vs 27 seater mini bus, tempo or mini bus for group, mini bus rental vs tempo traveller, which is better tempo or mini bus, best vehicle for group tour, tempo traveller for hill station, mini bus for wedding, group travel vehicle comparison, tempo traveller capacity, mini bus capacity, tempo traveller price per km, mini bus price per km',
  authors: [{ name: 'Triveni Cabs™' }],
  metadataBase: new URL(SITE),
  alternates: { canonical: PAGE_URL, languages: { 'en-IN': `/${SLUG}` } },
  openGraph: {
    title: 'Tempo Traveller vs Mini Bus — Which Is Better for Your Group? (2026 Guide)',
    description:
      'Capacity, price per km, hill-road access and comfort compared side by side. The honest verdict on whether a tempo traveller or a mini bus suits your trip.',
    type: 'article',
    locale: 'en_IN',
    url: PAGE_URL,
    siteName: 'Triveni Cabs™',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Tempo Traveller vs Mini Bus — side-by-side comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tempo Traveller vs Mini Bus — Which Is Better? (2026)',
    description: 'Capacity, price per km, hill access and comfort compared. Get the verdict before you book your group vehicle.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const COMPARISON_ROWS = [
  { feature: 'Seating capacity', v1: '12-17 passengers', v2: '20-27 passengers' },
  { feature: 'Price per km', v1: '₹20-28/km', v2: '₹32-38/km' },
  { feature: 'Minimum charge', v1: '₹6,000 (250 km/day)', v2: '₹8,000 (250 km/day)' },
  { feature: 'Hill-road access', v1: 'Excellent — narrow roads OK', v2: 'Limited — not for steep hills' },
  { feature: 'Seat comfort', v1: 'Push-back reclining seats', v2: 'Standard coach seats' },
  { feature: 'Luggage space', v1: 'Moderate boot', v2: 'Large underfloor storage' },
  { feature: 'Mileage', v1: '8-10 km/l', v2: '5-7 km/l' },
  { feature: 'Maneuvering', v1: 'Easy in tight spaces', v2: 'Needs wide roads & parking' },
  { feature: 'Best for', v1: 'Hills, pilgrimage, 12-17 pax', v2: 'Highways, functions, 20-27 pax' },
];

export default function TempoVsMiniBusPage() {
  const rr = getRatingAndReviews(SLUG, 'tempo');

  const baseSchemas = combineSchemas(
    generateWebPageSchema({ name: data.title, slug: SLUG, description: data.metaDescription }),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Vehicles', url: '/vehicles' },
      { name: 'Tempo vs Mini Bus', url: `/${SLUG}` },
    ]),
    generateFAQSchema(data.faqs),
  );

  const comparisonSchema = getComparisonSchema({
    slug: SLUG,
    title: 'Tempo Traveller vs Mini Bus — Attribute Comparison',
    description:
      'Side-by-side comparison of tempo traveller and mini bus across capacity, price per km, hill-road access, luggage, comfort and ideal group size.',
    rows: COMPARISON_ROWS,
    mentions: ['Tempo Traveller', 'Mini Bus', '17 Seater Tempo Traveller', '27 Seater Mini Bus', 'Group Travel', 'Hill Station Trip'],
  });

  const howToSchema = getHowToSchema({
    name: 'How to Choose Between a Tempo Traveller and a Mini Bus',
    description: 'A quick decision framework to pick the right group vehicle for your route and party size.',
    totalTime: 'PT5M',
    steps: [
      { name: 'Count your group', text: 'Up to 17 passengers fit a tempo traveller; 18-27 need a mini bus.' },
      { name: 'Check the terrain', text: 'Hill stations and narrow roads rule out a mini bus — choose a tempo traveller (or two).' },
      { name: 'Weigh luggage needs', text: 'Heavy luggage for weddings or long tours favours the mini bus underfloor storage.' },
      { name: 'Compare per-head cost', text: 'A near-full mini bus is cheaper per person for 20+ travellers; a tempo wins for smaller groups.' },
      { name: 'Book with Triveni Cabs™', text: 'Call 7668570551 or WhatsApp to confirm vehicle, AC and driver for your dates.' },
    ],
  });

  const articleSchema = getArticleSchema({
    slug: SLUG,
    headline: 'Tempo Traveller vs Mini Bus: Which Is Better for Group Travel in 2026?',
    description:
      'An experience-based comparison of tempo travellers and mini buses covering capacity, per-km price, hill-road access, luggage and comfort for group trips.',
    image: OG_IMAGE,
    datePublished: '2024-06-01',
    dateModified: (getContentUpdatedOn(`/${SLUG}`) || getTodayDate()),
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#service`,
    name: 'Tempo Traveller & Mini Bus Hire',
    serviceType: 'Group Vehicle Rental',
    description:
      'AC tempo traveller (12-17 seater) and mini bus (20-27 seater) hire with professional drivers for group tours, pilgrimage, weddings and corporate travel across North India.',
    url: PAGE_URL,
    areaServed: { '@type': 'Country', name: 'India' },
    brand: { '@type': 'Brand', name: 'Triveni Cabs' },
    provider: { '@type': 'TravelAgency', '@id': `${SITE}/#organization`, name: 'Triveni Cabs', telephone: '+91-7668570551' },

  };

  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${PAGE_URL}#webpage`,
    name: 'Tempo Traveller vs Mini Bus',
    url: PAGE_URL,
    dateModified: (getContentUpdatedOn(`/${SLUG}`) || getTodayDate()),
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
          <h2 className="speakable-headline text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Tempo Traveller vs Mini Bus: Which Is Better for Group Travel?
          </h2>
          <p className="speakable-lead text-lg text-slate-700 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 mb-8">
            Short answer: choose a <strong>tempo traveller</strong> (12-17 seater) for hill stations, pilgrimages and any
            route with narrow roads — its push-back seats and easy handling make it the comfort pick. Choose a{' '}
            <strong>mini bus</strong> (20-27 seater) when your group is 18-27 people travelling on highways or attending
            functions where luggage space and the lowest per-head cost matter most. For mountain trips like Manali or
            Shimla, a mini bus is not recommended — two tempo travellers are safer and more flexible.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Tempo Traveller vs Mini Bus — Full Comparison Table</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-4 py-3 font-semibold">Feature</th>
                  <th className="px-4 py-3 font-semibold">Tempo Traveller</th>
                  <th className="px-4 py-3 font-semibold">Mini Bus</th>
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
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to choose a tempo traveller</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>Your group is 12-17 people.</li>
                <li>You are heading to hill stations or narrow mountain roads.</li>
                <li>You want push-back reclining seats and a premium feel.</li>
                <li>You need multiple pickup points (book two tempos).</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-3">When to choose a mini bus</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                <li>Your group is 20-27 people travelling together.</li>
                <li>The route is highway or flat plains, not steep hills.</li>
                <li>You have heavy luggage that needs underfloor storage.</li>
                <li>You want the lowest per-person cost on a full vehicle.</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cost comparison example (Delhi-Rishikesh, 460 km)</h2>
          <p className="text-slate-600 mb-8">
            A 17 seater tempo runs about <strong>₹11,960-12,420</strong> — roughly ₹700-730 per person across 17 travellers.
            A 22 seater mini bus runs about <strong>₹14,720-17,480</strong> — about ₹670-795 per head across 22 travellers.
            The mini bus is cheaper per person only when you actually fill all the seats; for 12-17 people the tempo is the
            clear value winner and far better on the hills near Rishikesh.
          </p>

          <div className="bg-white rounded-xl border border-slate-200 p-6 mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Quick answer for voice search</h2>
            <p className="speakable-faq-first text-slate-600">{data.faqs[0].answer}</p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need help picking the right group vehicle?</h2>
            <p className="text-slate-300 mb-6">Share your group size and route — we will recommend tempo or mini bus and quote a fixed fare.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300">Call +91 76685 70551</a>
              <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700">WhatsApp Quote</a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6">
            <h3 className="font-bold text-slate-700 mb-3">Related pages</h3>
            <div className="flex flex-wrap gap-4 text-blue-600">
              <Link href="/tempo-traveller" className="hover:underline">Tempo Traveller Routes &amp; Rates</Link>
              <Link href="/bus-routes" className="hover:underline">Bus &amp; Mini Bus Routes</Link>
              <Link href="/12-seater-vs-17-seater-tempo" className="hover:underline">12 vs 17 Seater Tempo</Link>
              <Link href="/tempo-vs-bus" className="hover:underline">Tempo vs Bus</Link>
              <Link href="/chardham-yatra" className="hover:underline">Char Dham Yatra by Tempo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
