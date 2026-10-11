// src/components/seo/NearMePage.jsx
// Shared server component for "near me" landing pages (cab-service-near-me,
// outstation-cabs-near-me, tempo-traveller-hire-near-me, innova-on-rent-near-me,
// one-way-taxi-near-me, wedding-car-rental-near-me).
//
// One canonical near-me page per service is deliberate: it avoids 462 city
// pages cannibalizing each other for "near me" intent. The page targets the
// national near-me query, lists the cities we serve (with deep-links to each
// city hub), and carries LocalBusiness + areaServed schema so Google can map
// the query to our real service area.
//
// Server component (SSR) — content is in the initial HTML for SEO + LCP. The
// only client island is <FAQSection/> (accordion + FAQ schema).

import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { COMPANY_INFO, BASE_URL } from '@/lib/seo/constants';
import { Phone, MessageCircle, MapPin, Shield, Clock, Star, CheckCircle2, ArrowRight, Car } from '@/components/ui/icons';

// Cities Triveni serves with hub pages — keep in sync with linkingHelper money cities.
const DEFAULT_CITIES = [
  { name: 'Delhi', slug: '/delhi' },
  { name: 'Agra', slug: '/agra' },
  { name: 'Jaipur', slug: '/jaipur' },
  { name: 'Amritsar', slug: '/amritsar' },
  { name: 'Chandigarh', slug: '/chandigarh' },
  { name: 'Lucknow', slug: '/lucknow' },
  { name: 'Haridwar', slug: '/haridwar' },
  { name: 'Dehradun', slug: '/dehradun' },
  { name: 'Rishikesh', slug: '/rishikesh' },
  { name: 'Mussoorie', slug: '/mussoorie' },
  { name: 'Manali', slug: '/manali' },
  { name: 'Shimla', slug: '/shimla' },
  { name: 'Mathura', slug: '/mathura' },
  { name: 'Nainital', slug: '/nainital' },
  { name: 'Ayodhya', slug: '/ayodhya' },
  { name: 'Varanasi', slug: '/varanasi' },
  { name: 'Udaipur', slug: '/udaipur' },
  { name: 'Jodhpur', slug: '/jodhpur' },
];

export default function NearMePage({
  slug,           // e.g. 'cab-service-near-me'
  h1,             // page H1
  intro,          // hero paragraph
  fareChips = [], // [{ label: 'Sedan', value: '₹11/km' }, ...]
  serviceType,    // schema serviceType, e.g. 'TaxiService'
  serviceDescription,
  cities = DEFAULT_CITIES,
  faqs = [],
  relatedLinks = [],
  ogImage = '/images/HERO_SECTION_MAIN_PAGE.jpg',
}) {
  const url = `${BASE_URL}/${slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", serviceType || "TaxiService"],
    "@id": `${BASE_URL}/#localbusiness`,
    name: COMPANY_INFO.name,
    image: `${BASE_URL}${ogImage}`,
    url,
    telephone: COMPANY_INFO.phone.primary,
    priceRange: "₹11-₹50/km",
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.addressLocality,
      addressRegion: COMPANY_INFO.address.addressRegion,
      postalCode: COMPANY_INFO.address.postalCode,
      addressCountry: "IN",
    },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
    
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: h1, item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-6">
            <MapPin className="h-3.5 w-3.5" /> Available in {cities.length}+ cities across India
          </span>
          <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            {h1}
          </h1>
          <p className="speakable-lead mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed">
            {intro}
          </p>

          {fareChips.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {fareChips.map((f) => (
                <div key={f.label} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
                  <div className="text-2xl font-bold bg-gradient-to-br from-amber-300 to-orange-500 bg-clip-text text-transparent">{f.value}</div>
                  <div className="text-xs text-white/55 mt-0.5">{f.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-amber-300 transition-all">
              <Phone className="h-5 w-5" /> Call 7668570551
            </Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Star, t: '4.9★ rated', s: '10,000+ trips' },
            { icon: Shield, t: 'Verified drivers', s: 'Background checked' },
            { icon: Clock, t: '24/7 booking', s: 'Day or night' },
            { icon: CheckCircle2, t: 'No hidden cost', s: 'Upfront fare' },
          ].map((x) => (
            <div key={x.t} className="flex flex-col items-center">
              <x.icon className="h-6 w-6 text-amber-500 mb-1" />
              <div className="font-semibold text-slate-900 text-sm">{x.t}</div>
              <div className="text-xs text-slate-500">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CITIES WE SERVE */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-2">
            Cabs near you — cities we serve
          </h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">
            Book a verified, air-conditioned cab with doorstep pickup in any of these cities. Tap your city for local fares and routes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={c.slug}
                className="group flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:border-amber-400 hover:bg-amber-50 transition-colors"
              >
                <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span className="font-medium text-slate-800 group-hover:text-amber-700 text-sm truncate">{c.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-slate-300 group-hover:text-amber-500 ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-10 sm:py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-12">Book in 3 simple steps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: '1', t: 'Call or WhatsApp', d: 'Tell us your pickup city, drop point and time. Get a confirmed upfront fare in 2 minutes — no surge, no meter.' },
              { n: '2', t: 'We assign a driver', d: 'A background-verified driver in a clean, AC vehicle is dispatched to your doorstep with live tracking shared.' },
              { n: '3', t: 'Travel & pay', d: 'Complete your trip comfortably. Pay the agreed fare — fuel, driver and AC included. Toll/parking extra at actual.' },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-bold text-lg">{s.n}</div>
                <h3 className="font-semibold text-slate-900 mb-2">{s.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + RELATED */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={faqs} title={`${h1} — FAQs`} />
        </div>
      </section>

      {relatedLinks.length > 0 && (
        <section className="px-4 pb-10 sm:pb-16">
          <div className="max-w-5xl mx-auto">
            <RelatedLinks heading="Related services" links={relatedLinks} tone="slate" />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Car className="h-12 w-12 text-slate-900/80 mx-auto mb-6" />
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-950 mb-4">
            Book your cab now
          </h2>
          <p className="text-slate-900/70 text-lg mb-8 max-w-xl mx-auto">
            Upfront fare, verified driver, AC guaranteed. Call or WhatsApp — we answer 24/7.
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
          <span className="text-slate-800 font-medium">{h1}</span>
        </div>
      </nav>
    </div>
  );
}