import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { Phone, MessageCircle, MapPin, CheckCircle2, ArrowRight } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Char Dham Yatra Taxi Fare From Haridwar — 2026 Cost'),
  description: 'Char Dham yatra taxi fare from Haridwar: sedan, SUV and tempo traveller per-km rates plus full package cost for Yamunotri-Gangotri-Kedarnath-Badrinath. Upfront fare. Call 7668570551.',
  keywords: ['char dham yatra taxi fare from haridwar', 'char dham cab fare from haridwar', 'char dham taxi price', 'char dham yatra cost from haridwar', 'haridwar to char dham cab fare', 'char dham taxi package', 'char dham yatra by car cost'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/char-dham-yatra-taxi-fare-from-haridwar' },
  openGraph: {
    title: 'Char Dham Yatra Taxi Fare From Haridwar — 2026',
    description: 'Per-km rates + full package cost. Upfront fare. Call 7668570551.',
    url: `${BASE_URL}/char-dham-yatra-taxi-fare-from-haridwar`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Char Dham Taxi Fare From Haridwar', description: 'Per-km + package cost. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const FARE_ROWS = [
  { vehicle: 'Sedan (Dzire/Etios)', perKm: '₹11/km', note: '4 pax · good roads only' },
  { vehicle: 'Ertiga SUV', perKm: '₹15/km', note: '6 pax · recommended min' },
  { vehicle: 'Innova Crysta', perKm: '₹18/km', note: '6+1 pax · best comfort' },
  { vehicle: 'Maharaja Tempo (9-seater)', perKm: '₹31/km', note: 'Groups · captain seats' },
  { vehicle: 'Force Urbania (12-seater)', perKm: '₹27/km', note: 'Groups · smoother ride' },
];

const ITINERARY = [
  { day: 'Day 1', t: 'Haridwar → Barkot (Yamunotri base)', d: '~220 km. Drive to Barkot/Janki Chatti; overnight stay.' },
  { day: 'Day 2', t: 'Yamunotri darshan → Barkot', d: '6 km trek/pony to Yamunotri temple; return to Barkot.' },
  { day: 'Day 3', t: 'Barkot → Uttarkashi (Gangotri base)', d: '~210 km. Drive to Uttarkashi; overnight.' },
  { day: 'Day 4', t: 'Gangotri darshan → Uttarkashi', d: '100 km round to Gangotri temple; return to Uttarkashi.' },
  { day: 'Day 5', t: 'Uttarkashi → Guptkashi (Kedarnath base)', d: '~220 km. Drive to Guptkashi/Sonprayag.' },
  { day: 'Day 6', t: 'Kedarnath darshan', d: 'Trek/helicopter from Sonprayag to Kedarnath; overnight.' },
  { day: 'Day 7', t: 'Kedarnath → Joshimath (Badrinath base)', d: '~220 km. Drive to Joshimath.' },
  { day: 'Day 8', t: 'Badrinath darshan → Rudraprayag', d: 'Badrinath temple; drive down to Rudraprayag.' },
  { day: 'Day 9', t: 'Rudraprayag → Haridwar', d: '~180 km. Drop at Haridwar; yatra complete.' },
];

export default function Page() {
  const url = `${BASE_URL}/char-dham-yatra-taxi-fare-from-haridwar`;

  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Char Dham Yatra by Taxi from Haridwar",
    description: "9-day Char Dham yatra (Yamunotri, Gangotri, Kedarnath, Badrinath) by chauffeur-driven cab from Haridwar, with per-km and package fares.",
    touristType: "Pilgrimage",
    offers: { "@type": "Offer", priceCurrency: "INR", price: "45000", availability: "https://schema.org/InStock" },
    provider: { "@type": "TaxiService", name: COMPANY_INFO.name, telephone: COMPANY_INFO.phone.primary },
    itinerary: ITINERARY.map((s, i) => ({ "@type": "TouristAttraction", position: i + 1, name: s.t, description: s.d })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Pilgrimage Cabs", item: `${BASE_URL}/pilgrimage-cabs` },
      { "@type": "ListItem", position: 3, name: "Char Dham Taxi Fare From Haridwar", item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-6">
            <MapPin className="h-3.5 w-3.5" /> From Haridwar · 9-day yatra · chauffeur-driven
          </span>
          <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Char Dham Yatra Taxi Fare From Haridwar
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Haridwar is the classic starting point for the Char Dham yatra — Yamunotri, Gangotri, Kedarnath and Badrinath. Here are the exact per-km and package taxi fares for the full circuit, with fuel, driver and AC included. No surge, no hidden charges — just the number you see.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-amber-300 transition-all"><Phone className="h-5 w-5" /> Get exact package quote</Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all"><MessageCircle className="h-5 w-5" /> WhatsApp</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-2">Per-km taxi fare (from Haridwar)</h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-8">Fuel, driver allowance and AC are included. Toll, parking and driver night allowance (₹300/night on multi-day yatras) are extra at actual. Minimum 300 km/day billing applies.</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wide"><tr><th className="px-5 py-3 font-semibold">Vehicle</th><th className="px-5 py-3 font-semibold">Per km</th><th className="px-5 py-3 font-semibold hidden sm:table-cell">Notes</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {FARE_ROWS.map((r) => (
                  <tr key={r.vehicle} className="hover:bg-amber-50/40"><td className="px-5 py-4 font-medium text-slate-900">{r.vehicle}</td><td className="px-5 py-4 font-bold text-amber-600">{r.perKm}</td><td className="px-5 py-4 text-slate-500 text-sm hidden sm:table-cell">{r.note}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-slate-600 mt-6 text-sm">Full 9-day circuit ≈ <span className="font-bold text-slate-900">1,600–1,800 km</span>. Sample package: Ertiga SUV ≈ <span className="font-bold text-amber-600">₹45,000</span>; Innova Crysta ≈ ₹54,000; 12-seater Urbania ≈ ₹81,000 (excludes toll, parking, stay, helicopter/trek at Kedarnath).</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-10">9-day Char Dham itinerary from Haridwar</h2>
          <ol className="relative border-l-2 border-amber-200 ml-3 space-y-6">
            {ITINERARY.map((s) => (
              <li key={s.day} className="ml-6">
                <span className="absolute -left-[11px] flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-slate-950 text-[10px] font-bold" />
                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide">{s.day}</div>
                <h3 className="font-semibold text-slate-900 mt-0.5">{s.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-6">What&apos;s included</h2>
            <ul className="space-y-3">
              {['Fuel for the entire circuit', 'Driver allowance (day & night)', 'AC throughout the trip', 'Background-verified mountain-experienced driver', 'Live GPS tracking shared with family', 'Flexible stops for darshan & rest'].map((f) => (
                <li key={f} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" /><span className="text-slate-700">{f}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display-serif text-2xl font-bold text-slate-900 mb-6">What&apos;s extra (at actual)</h2>
            <ul className="space-y-3">
              {['Toll taxes & interstate permits', 'Parking fees at each dham', 'Your hotel/guesthouse stays', 'Kedarnath helicopter or pony (optional)', 'Driver night allowance on long days (₹300/night)', 'Meals for driver (optional tip)'].map((f) => (
                <li key={f} className="flex items-start gap-3"><ArrowRight className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" /><span className="text-slate-700">{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={[
            { question: 'How much does the Char Dham yatax cost by taxi from Haridwar?', answer: 'It depends on vehicle and exact route. The full ~1,700 km circuit is roughly ₹45,000 in an Ertiga SUV, ₹54,000 in an Innova Crysta, and ₹81,000 in a 12-seater Urbania — including fuel, driver and AC. Toll, parking and stays are extra at actual. Call for an exact quote.' },
            { question: 'Which vehicle is best for Char Dham?', answer: 'For 1–4 people an Ertiga or Innova is ideal. For the best comfort on mountain roads we recommend the Innova Crysta or the [Force Urbania](/force-urbania-rent-per-km) (smoother suspension). For groups, a [tempo traveller](/char-dham-yatra-by-tempo-traveller) works well.' },
            { question: 'Can I start the yatra from Dehradun instead?', answer: 'Yes. Dehradun (Jolly Grant) is also a popular and sometimes cheaper start since it is closer to the route and has an airport. The fare structure is the same per-km rate; only the total distance changes.' },
            { question: 'When is Char Dham open?', answer: 'The shrines are open roughly May to October and close for winter. May–June and September are peak; book well ahead. See [Char Dham yatra September 2026](/chardham-yatra-september-2026).' },
            { question: 'Is the driver experienced on mountain roads?', answer: 'Yes — our Char Dham drivers are specifically experienced on these Himalayan roads and know the safe rest stops, parking and weather considerations. They wait patiently at every dham for your darshan.' },
          ]} title="Char Dham taxi fare — FAQs" />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <RelatedLinks heading="Related pilgrimage pages" links={[
            { href: '/pilgrimage-cabs', anchor: 'Pilgrimage cabs hub' },
            { href: '/char-dham-yatra-by-tempo-traveller', anchor: 'Char Dham yatra by tempo traveller' },
            { href: '/chardham-yatra', anchor: 'Char Dham yatra hub' },
            { href: '/chardham-yatra-cost-by-car', anchor: 'Char Dham cost by car' },
            { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
          ]} tone="slate" />
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-950 mb-4">Book your Char Dham yatra</h2>
          <p className="text-slate-900/70 text-lg mb-8 max-w-xl mx-auto">Upfront package fare, mountain-ready driver, AC guaranteed. Tell us your dates and group size.</p>
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
          <span className="text-slate-800 font-medium">Char Dham Taxi Fare From Haridwar</span>
        </div>
      </nav>
    </div>
  );
}