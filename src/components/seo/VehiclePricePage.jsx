// src/components/seo/VehiclePricePage.jsx
// Shared server component for vehicle price / per-km intent pages
// (innova-crysta-rent-per-km, ertiga-cab-booking, force-urbania-rent-per-km,
// force-urbania-rent-price, maharaja-tempo-traveller-price).
//
// Targets the "rent per km / price / booking" commercial query for a specific
// vehicle model. Gradient text hero (no hero image) keeps LCP text-bound and
// fast. Carries Service + Offer priceSpecification schema so Google can show a
// price against the query, plus Breadcrumb. FAQ schema comes from FAQSection.
//
// Server component (SSR) — content is in the initial HTML for SEO + LCP. The
// only client island is <FAQSection/>.

import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { COMPANY_INFO, BASE_URL } from '@/lib/seo/constants';
import { Phone, MessageCircle, CheckCircle2, Users, Fuel, Gauge, ArrowRight, Star, Shield } from '@/components/ui/icons';

export default function VehiclePricePage({
  slug,
  vehicleName,    // e.g. "Innova Crysta"
  h1,
  intro,
  category,       // e.g. "SUV", "Tempo Traveller"
  seating,        // e.g. "6 + 1"
  fareRows = [],  // [{ vehicle, perKm, minKmDay, note }]
  features = [],  // string[]
  useCases = [],  // string[]
  faqs = [],
  relatedLinks = [],
  ogImage = '/images/HERO_SECTION_MAIN_PAGE.jpg',
}) {
  const url = `${BASE_URL}/${slug}`;
  const primaryFare = fareRows[0];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${vehicleName} rental with driver`,
    serviceType: `${category} rental`,
    provider: {
      "@type": "AutoRental",
      name: COMPANY_INFO.name,
      telephone: COMPANY_INFO.phone.primary,
      address: {
        "@type": "PostalAddress",
        addressLocality: COMPANY_INFO.address.addressLocality,
        addressRegion: COMPANY_INFO.address.addressRegion,
        addressCountry: "IN",
      },
    },
    areaServed: { "@type": "Country", name: "India" },
    offers: primaryFare
      ? {
          "@type": "Offer",
          priceCurrency: "INR",
          price: String(primaryFare.perKm).replace(/[^\d.]/g, ''),
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(primaryFare.perKm).replace(/[^\d.]/g, ''),
            priceCurrency: "INR",
            referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "KMT" },
            billingIncrement: "per km",
          },
          availability: "https://schema.org/InStock",
        }
      : undefined,
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "10240" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: vehicleName, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-6">
            <Gauge className="h-3.5 w-3.5" /> {category} · {seating} seater · chauffeur-driven
          </span>
          <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {h1}
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            {intro}
          </p>

          {primaryFare && (
            <div className="mt-8 inline-flex items-baseline gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4">
              <span className="text-sm text-white/55">Starting from</span>
              <span className="text-3xl font-bold bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text text-transparent">
                {primaryFare.perKm}
              </span>
              <span className="text-sm text-white/55">/ km · all-inclusive</span>
            </div>
          )}

          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-amber-300 transition-all">
              <Phone className="h-5 w-5" /> Call for exact fare
            </Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
              <MessageCircle className="h-5 w-5" /> WhatsApp quote
            </Link>
          </div>
        </div>
      </section>

      {/* FARE TABLE */}
      {fareRows.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-2">
              {vehicleName} fare — per km, all-inclusive
            </h2>
            <p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">
              Fuel, driver allowance and AC are included in the per-km rate. Toll and parking are charged at actual. Outstation trips bill a minimum of 300 km/day.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Vehicle</th>
                    <th className="px-5 py-3 font-semibold">Per km</th>
                    <th className="px-5 py-3 font-semibold">Min / day</th>
                    <th className="px-5 py-3 font-semibold hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {fareRows.map((r) => (
                    <tr key={r.vehicle} className="hover:bg-amber-50/40 transition-colors">
                      <td className="px-5 py-4 font-medium text-slate-900">{r.vehicle}</td>
                      <td className="px-5 py-4 font-bold text-amber-600">{r.perKm}</td>
                      <td className="px-5 py-4 text-slate-600 text-sm">{r.minKmDay}</td>
                      <td className="px-5 py-4 text-slate-500 text-sm hidden sm:table-cell">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* FEATURES + USE CASES */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-6">What you get</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-6">Ideal for</h2>
            <ul className="space-y-3">
              {useCases.map((u) => (
                <li key={u} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{u}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Users, t: seating, s: 'seating' },
                { icon: Fuel, t: 'Included', s: 'fuel + AC' },
                { icon: Shield, t: 'Verified', s: 'driver' },
              ].map((x) => (
                <div key={x.t} className="rounded-xl bg-white border border-slate-200 px-2 py-4">
                  <x.icon className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                  <div className="font-bold text-slate-900 text-sm">{x.t}</div>
                  <div className="text-xs text-slate-500">{x.s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + RELATED */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} title={`${vehicleName} — frequently asked questions`} />
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="px-4 pb-16">
          <div className="max-w-5xl mx-auto">
            <RelatedLinks heading="Related vehicles & services" links={relatedLinks} tone="slate" />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Star className="h-10 w-10 text-slate-900/80 mx-auto mb-5" />
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-950 mb-4">
            Book your {vehicleName} today
          </h2>
          <p className="text-slate-900/70 text-lg mb-8 max-w-xl mx-auto">
            Tell us your route and dates — get a confirmed, all-inclusive per-km fare in minutes. Chauffeur-driven, AC guaranteed.
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
          <span className="text-slate-800 font-medium">{vehicleName}</span>
        </div>
      </nav>
    </div>
  );
}