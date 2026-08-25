import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { Phone, MessageCircle, MapPin, Users, CheckCircle2, ArrowRight } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Char Dham Yatra by Tempo Traveller — Group Package 2026'),
  description: 'Char Dham yatra by tempo traveller: 12–17 seater AC group package from Haridwar/Dehradun. Per-km fare, itinerary and what is included. Upfront price. Call 7668570551.',
  keywords: ['char dham yatra by tempo traveller', 'char dham tempo traveller package', 'char dham group yatra', 'char dham tempo traveller fare', 'char dham 17 seater tempo', 'char dham yatra bus', 'char dham group tour by tempo'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/char-dham-yatra-by-tempo-traveller' },
  openGraph: {
    title: 'Char Dham Yatra by Tempo Traveller — Group Package',
    description: '12–17 seater AC group package from Haridwar. Call 7668570551.',
    url: `${BASE_URL}/char-dham-yatra-by-tempo-traveller`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham by Tempo Traveller', description: 'Group package 12–17 seater. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const TEMPO_OPTIONS = [
  { vehicle: 'Maharaja 9-seater (1x1 captain seats)', perKm: '₹26/km', note: 'Small group · luxury seats' },
  { vehicle: 'Maharaja 12-seater (2x1)', perKm: '₹28/km', note: 'Most popular for families' },
  { vehicle: 'Force Urbania 12-seater', perKm: '₹27/km', note: 'Smoothest ride on mountains' },
  { vehicle: '17-seater tempo (2x2)', perKm: '₹30/km', note: 'Larger groups' },
];

export default function Page() {
  const url = `${BASE_URL}/char-dham-yatra-by-tempo-traveller`;
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    name: "Char Dham Yata by Tempo Traveller",
    serviceType: "Group pilgrimage transport",
    provider: { "@type": "TaxiService", name: COMPANY_INFO.name, telephone: COMPANY_INFO.phone.primary },
    areaServed: [{ "@type": "Place", name: "Char Dham" }],
    offers: { "@type": "Offer", priceCurrency: "INR", price: "22", priceSpecification: { "@type": "UnitPriceSpecification", price: "22", priceCurrency: "INR", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "KMT" } } },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "10240" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Pilgrimage Cabs", item: `${BASE_URL}/pilgrimage-cabs` },
      { "@type": "ListItem", position: 3, name: "Char Dham by Tempo Traveller", item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-6">
            <Users className="h-3.5 w-3.5" /> 9 to 17 seater · group yatra · AC
          </span>
          <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Char Dham Yatra by Tempo Traveller
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Taking the family or satsang group on the Char Dham yatra? A tempo traveller or Force Urbania keeps everyone together, comfortable and in AC — no splitting across multiple cars. We run 9 to 17-seater group packages from Haridwar and Dehradun with fuel, driver and AC all included in one upfront per-km fare.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-amber-300 transition-all"><Phone className="h-5 w-5" /> Get group quote</Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"><MessageCircle className="h-5 w-5" /> WhatsApp</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-2">Tempo traveller options & per-km fare</h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">Fuel, driver allowance and AC included. Toll, parking and driver night allowance (₹300/night) extra at actual. Minimum 300 km/day. Full circuit ≈ 1,700 km.</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide"><tr><th className="px-5 py-3 font-semibold">Vehicle</th><th className="px-5 py-3 font-semibold">Per km</th><th className="px-5 py-3 font-semibold hidden sm:table-cell">Notes</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {TEMPO_OPTIONS.map((r) => (
                  <tr key={r.vehicle} className="hover:bg-amber-50/40"><td className="px-5 py-4 font-medium text-slate-900">{r.vehicle}</td><td className="px-5 py-4 font-bold text-amber-600">{r.perKm}</td><td className="px-5 py-4 text-slate-500 text-sm hidden sm:table-cell">{r.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-600 mt-6 text-sm">Sample 9-day group package (≈1,700 km): 12-seater Urbania ≈ <span className="font-bold text-amber-600">₹66,000</span>; 12-seater Maharaja ≈ ₹84,000; 17-seater tempo ≈ ₹90,000 (excludes toll, parking, stays, Kedarnath helicopter/trek).</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-6">Why a tempo traveller for Char Dham</h2>
            <ul className="space-y-3">
              {['Keep the whole group together — no splitting into cars', 'Cheaper per person than multiple sedans', 'Captain/pushback seats for long mountain drives', 'Roof carrier for luggage and yatra gear', 'One driver manages the group&apos;s pace & stops', 'Everyone shares the darshan experience en route'].map((f) => (
                <li key={f} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" /><span className="text-slate-700">{f}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-6">Best vehicle by group size</h2>
            <ul className="space-y-3">
              {[
                { s: '8–10 people', v: 'Maharaja 9-seater (1x1) — luxury captain seats' },
                { s: '11–14 people', v: 'Force Urbania 12-seater — smoothest mountain ride' },
                { s: '15–17 people', v: '17-seater tempo traveller (2x2)' },
                { s: '18+ people', v: 'Ask about our 26-seater and mini bus options' },
              ].map((x) => (
                <li key={x.s} className="flex items-start gap-3"><ArrowRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" /><span className="text-slate-700"><strong className="text-slate-900">{x.s}:</strong> {x.v}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={[
            { question: 'How much does Char Dham yatra cost by tempo traveller?', answer: 'For the ~1,700 km circuit from Haridwar: a 12-seater Force Urbania is about ₹66,000, a 12-seater Maharaja about ₹84,000, and a 17-seater about ₹90,000 — including fuel, driver and AC. Toll, parking and stays are extra. See our full [Char Dham taxi fare from Haridwar](/char-dham-yatra-taxi-fare-from-haridwar) breakdown.' },
            { question: 'Which tempo is best for Char Dham mountain roads?', answer: 'The Force Urbania is generally the most comfortable on Himalayan roads — newer, quieter, smoother suspension. The Maharaja has more luxurious seats. Compare them in [Maharaja tempo vs Urbania](/maharaja-tempo-traveller-vs-urbania).' },
            { question: 'Can the tempo traveller wait during darshan?', answer: 'Yes. The driver parks and waits at every dham for the entire group&apos;s darshan — there is no rushing. On multi-day stretches the driver and vehicle stay with you.' },
            { question: 'How many days does the Char Dham yatra take by tempo?', answer: 'A relaxed, safe circuit is 9–10 days from Haridwar. We never rush mountain drives — your safety and darshan time come first.' },
            { question: 'Do you provide tempo travellers from Dehradun too?', answer: 'Yes, we start from both Haridwar and Dehradun (Jolly Grant, near the airport). The per-km rate is the same; total distance differs slightly.' },
          ]} title="Char Dham by tempo traveller — FAQs" />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <RelatedLinks heading="Related pages" links={[
            { href: '/pilgrimage-cabs', anchor: 'Pilgrimage cabs hub' },
            { href: '/char-dham-yatra-taxi-fare-from-haridwar', anchor: 'Char Dham taxi fare from Haridwar' },
            { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
            { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
            { href: '/maharaja-tempo-traveller-vs-urbania', anchor: 'Maharaja tempo vs Urbania' },
          ]} tone="slate" />
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-950 mb-4">Book your group Char Dham yatra</h2>
          <p className="text-slate-900/70 text-lg mb-8 max-w-xl mx-auto">Tell us your group size and dates — get a confirmed tempo traveller package price.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all"><Phone className="h-5 w-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-slate-950 px-8 py-4 rounded-2xl font-bold border border-slate-900/10 hover:bg-white/30 transition-all"><MessageCircle className="h-5 w-5" /> WhatsApp us</Link>
          </div>
        </div>
      </section>

      <nav className="py-4 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500 flex-wrap">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link><span>/</span>
          <Link href="/pilgrimage-cabs" className="hover:text-amber-600 transition-colors">Pilgrimage Cabs</Link><span>/</span>
          <span className="text-slate-800 font-medium">Char Dham by Tempo Traveller</span>
        </div>
      </nav>
    </div>
  );
}