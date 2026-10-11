// src/components/seo/ComparisonPage.jsx
// Shared server component for "X vs Y" comparison pages
// (maharaja-tempo-traveller-vs-urbania, self-drive-vs-driver-cab-delhi).
//
// Targets the commercial comparison query and funnels to a booking decision.
// Two-column compare table built from `rows`, a verdict section, FAQ + CTA.
// Gradient text hero (no image) keeps LCP text-bound. Carries Article +
// Breadcrumb schema; FAQ schema comes from FAQSection.
//
// Server component (SSR) — content is in the initial HTML for SEO + LCP.

import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { Phone, MessageCircle, Check, X, ArrowRight, Scale } from '@/components/ui/icons';

export default function ComparisonPage({
  slug,
  title,          // short label for hero badge, e.g. "Maharaja Tempo vs Force Urbania"
  h1,
  intro,
  leftName,       // e.g. "Maharaja Tempo Traveller"
  rightName,      // e.g. "Force Urbania"
  // rows: [{ label, left, right, higherIsBetter? }] — left/right are strings;
  // use "✓"/"✗" prefix-free; the component renders check/x icons when the cell
  // value is exactly "✓" or "✗".
  rows = [],
  verdict,        // string: which to choose when
  faqs = [],
  relatedLinks = [],
  ogImage = '/images/HERO_SECTION_MAIN_PAGE.jpg',
}) {
  const url = `${BASE_URL}/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description: intro,
    author: { "@type": "Organization", name: COMPANY_INFO.name },
    publisher: { "@type": "Organization", name: COMPANY_INFO.name },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: title, item: url },
    ],
  };

  const cell = (v) => {
    if (v === '✓') return <Check className="h-5 w-5 text-emerald-500 mx-auto" />;
    if (v === '✗') return <X className="h-5 w-5 text-rose-400 mx-auto" />;
    return <span className="text-slate-700">{v}</span>;
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-6">
            <Scale className="h-3.5 w-3.5" /> Comparison
          </span>
          <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* COMPARE TABLE */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-5 py-4 text-xs uppercase tracking-wide text-slate-400 font-semibold w-1/3">Feature</th>
                  <th className="px-5 py-4 font-display-serif text-lg font-bold text-slate-900">{leftName}</th>
                  <th className="px-5 py-4 font-display-serif text-lg font-bold text-slate-900">{rightName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((r) => (
                  <tr key={r.label} className="hover:bg-amber-50/40 transition-colors">
                    <td className="px-5 py-3.5 font-medium text-slate-700 text-sm">{r.label}</td>
                    <td className="px-5 py-3.5 text-center text-sm">{cell(r.left)}</td>
                    <td className="px-5 py-3.5 text-center text-sm">{cell(r.right)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VERDICT */}
      {verdict && (
        <section className="py-12 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto rounded-2xl border border-amber-200 bg-amber-50 p-8">
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-3">Which should you choose?</h2>
            <p className="text-slate-700 leading-relaxed">{verdict}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-bold hover:bg-amber-300 transition-all">
                <Phone className="h-4 w-4" /> Talk to us to decide
              </Link>
              <Link href="https://wa.me/917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition-all">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ + RELATED */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} title={`${title} — FAQs`} />
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="px-4 pb-10 sm:pb-16">
          <div className="max-w-5xl mx-auto">
            <RelatedLinks heading="Related" links={relatedLinks} tone="slate" />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <ArrowRight className="h-10 w-10 text-slate-900/80 mx-auto mb-5" />
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-950 mb-4">
            Still unsure? Get a quote for both
          </h2>
          <p className="text-slate-900/70 text-lg mb-8 max-w-xl mx-auto">
            Tell us your route and group size — we&apos;ll recommend the right vehicle and give you an upfront fare for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all">
              <Phone className="h-5 w-5" /> Call: 7668570551
            </Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-slate-950 px-8 py-4 rounded-2xl font-bold border border-slate-900/10 hover:bg-white/30 transition-all">
              <MessageCircle className="h-5 w-5" /> WhatsApp us
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="py-4 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">{title}</span>
        </div>
      </nav>
    </div>
  );
}