import Link from 'next/link';
import FAQSection from '@/components/seo/FAQSection';
import RelatedLinks from '@/components/seo/RelatedLinks';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { Phone, MessageCircle, MapPin, ArrowRight, Star, Shield, Clock } from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Pilgrimage Cabs & Darshan Taxi Service — Yatra by Car'),
  description: 'Book pilgrimage cabs and darshan taxi service for Char Dham, Vaishno Devi, Mathura-Vrindavan, Ayodhya, Amritsar and more. Verified driver, upfront fare. Call 7668570551.',
  keywords: ['pilgrimage cabs', 'darshan cabs', 'yatra taxi service', 'pilgrimage car rental', 'char dham cab', 'vaishno devi taxi', 'mathura vrindavan cab', 'religious tour taxi'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/pilgrimage-cabs' },
  openGraph: {
    title: 'Pilgrimage Cabs & Darshan Taxi Service',
    description: 'Char Dham, Vaishno Devi, Mathura-Vrindavan, Ayodhya & more. Call 7668570551.',
    url: `${BASE_URL}/pilgrimage-cabs`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Pilgrimage Cabs — Darshan Taxi Service', description: 'Yatra by car, verified driver. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

const DESTINATIONS = [
  { name: 'Char Dham Yatra', slug: '/chardham-yatra', desc: 'Yamunotri, Gangotri, Kedarnath & Badrinath from Haridwar/Dehradun.', season: 'May–Oct' },
  { name: 'Vaishno Devi (Katra)', slug: '/one-way-cab/delhi-to-katra', desc: 'Delhi to Katra one-way cab for the Mata Vaishno Devi darshan.', season: 'Year-round' },
  { name: 'Mathura–Vrindavan', slug: '/mathura-vrindavan-1-day-package', desc: 'Same-day Krishna janmabhoomi & banke bihari darshan tour.', season: 'Year-round' },
  { name: 'Ayodhya Ram Mandir', slug: '/ayodhya-ram-mandir-tour-from-delhi', desc: 'Delhi to Ayodhya for Ram Mandir darshan, with itinerary.', season: 'Year-round' },
  { name: 'Amritsar Golden Temple', slug: '/amritsar', desc: 'Golden Temple, Jallianwala Bagh & Wagah Border cab service.', season: 'Year-round' },
  { name: 'Kedarnath', slug: '/kedarnath-september-trip', desc: 'Kedarnath yatra cab with helicopter/trek guidance.', season: 'May–Oct' },
  { name: 'Kanwar Yatra (Haridwar)', slug: '/kanwar-yatra-cab-haridwar', desc: 'Haridwar Ganga jal kanwar yatra transport for groups.', season: 'Jul–Aug' },
  { name: 'Navratri Vaishno Devi', slug: '/navratri-vaishno-devi-cab', desc: 'Special navratri darshan cab to Vaishno Devi.', season: 'Navratri' },
];

export default function Page() {
  const url = `${BASE_URL}/pilgrimage-cabs`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pilgrimage & Darshan Taxi Service",
    serviceType: "Pilgrimage taxi service",
    provider: { "@type": "TaxiService", name: COMPANY_INFO.name, telephone: COMPANY_INFO.phone.primary },
    areaServed: DESTINATIONS.map((d) => ({ "@type": "Place", name: d.name })),
    url,
    description: "Chauffeur-driven pilgrimage cabs and darshan taxi service across North India — Char Dham, Vaishno Devi, Mathura-Vrindavan, Ayodhya and Amritsar.",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "10240" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Pilgrimage Cabs", item: url },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 sm:py-24 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-semibold text-amber-200 mb-6">
            <MapPin className="h-3.5 w-3.5" /> Darshan taxi service · {DESTINATIONS.length} yatra destinations
          </span>
          <h1 className="font-display-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Pilgrimage Cabs — Darshan Taxi Service Across India
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/70 leading-relaxed">
            Travel to your sacred destinations in comfort and safety with a verified, respectful driver. From Char Dham in the Himalayas to Mathura-Vrindavan, Ayodhya, Vaishno Devi and Amritsar — we plan the route, handle the mountain roads and wait while you darshan. One upfront fare, no surge, AC included.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-amber-300 transition-all">
              <Phone className="h-5 w-5" /> Plan your yatra — 7668570551
            </Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
              <MessageCircle className="h-5 w-5" /> WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: Star, t: '4.9★ rated', s: '10,000+ yatris' },
            { icon: Shield, t: 'Mountain-experienced', s: 'drivers' },
            { icon: Clock, t: '24/7 support', s: 'on the yatra' },
            { icon: Phone, t: 'Upfront fare', s: 'no surge' },
          ].map((x) => (
            <div key={x.t} className="flex flex-col items-center">
              <x.icon className="h-6 w-6 text-amber-500 mb-1" />
              <div className="font-semibold text-slate-900 text-sm">{x.t}</div>
              <div className="text-xs text-slate-500">{x.s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-2">Popular pilgrimage destinations</h2>
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-10">Tap any destination for routes, fares and darshan itineraries. Don&apos;t see yours? Call us — we go anywhere there&apos;s a road.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DESTINATIONS.map((d) => (
              <Link key={d.slug} href={d.slug} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:border-amber-400 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between">
                  <MapPin className="h-6 w-6 text-amber-500" />
                  <span className="text-xs font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded-full">{d.season}</span>
                </div>
                <h3 className="font-display-serif text-xl font-bold text-slate-900 mt-4 group-hover:text-amber-700 transition-colors">{d.name}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{d.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 mt-4">View routes <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 text-center mb-12">Why pilgrims book with Triveni</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: 'Mountain-ready drivers', d: 'Our drivers are experienced on Himalayan roads — Char Dham, Kedarnath, Hemkund — and know the safe parking and rest points.' },
              { t: 'Respectful & patient', d: 'Drivers wait at every temple for your darshan, help elderly yatris, and never rush the schedule. Your devotion comes first.' },
              { t: 'Group & tempo options', d: 'From a sedan for a couple to 17-seater tempo travellers and minibuses for the whole satsang group — one booking covers it.' },
            ].map((x) => (
              <div key={x.t} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-slate-950"><Star className="h-6 w-6" /></div>
                <h3 className="font-semibold text-slate-900 mb-2">{x.t}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal cross-link band — surfaces the Sep 2026 yatra window from the
          pilgrimage hub (Char Dham & Kedarnath peak, Janmashtami in Mathura). */}
      <section className="py-14 px-4 bg-gradient-to-b from-amber-50 to-white border-y border-amber-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">September 2026 · Yatra window</span>
            <h2 className="font-display-serif text-3xl font-bold text-slate-900 mt-2">Book the September yatra season</h2>
            <p className="text-slate-600 mt-3 max-w-2xl mx-auto">Post-monsoon is the best weather for Himalayan yatras — Char Dham & Kedarnath portals are open, and Janmashtami falls in Mathura. Fixed-fare, chauffeur-driven cabs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/chardham-yatra-september-2026', name: 'Char Dham — Sep 2026', desc: 'All four dhams from Haridwar. Temples open through October.' },
              { href: '/kedarnath-september-trip', name: 'Kedarnath in September', desc: 'Road + helicopter options. Best weather window of the year.' },
              { href: '/janmashtami-mathura-vrindavan-cab', name: 'Janmashtami Mathura', desc: 'Sep 4–6 darshan cabs from Delhi, Agra & Jaipur.' },
              { href: '/char-dham-yatra-by-tempo-traveller', name: 'Char Dham by Tempo', desc: 'Group yatra in 12–17 seater tempo travellers.' },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="group rounded-2xl border border-amber-200 bg-white p-5 hover:border-amber-400 hover:shadow-md transition-all">
                <h3 className="font-bold text-slate-900 group-hover:text-amber-700">{c.name}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-snug">{c.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-600 mt-3">View <ArrowRight className="h-3.5 w-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQSection faqs={[
            { question: 'Which pilgrimage destinations do you cover?', answer: 'Char Dham (Yamunotri, Gangotri, Kedarnath, Badrinath), Vaishno Devi (Katra), Mathura-Vrindavan, Ayodhya Ram Mandir, Amritsar Golden Temple, Kedarnath, Hemkund Sahib, Kanwar Yatra and many more. See our [Char Dham yatra](/chardham-yatra) hub, or call us for any destination.' },
            { question: 'Can you handle a group pilgrimage in a tempo traveller?', answer: 'Yes. We have 9 to 26-seater tempo travellers, Force Urbania and minibuses ideal for satsang and family groups. See [tempo traveller hire](/tempo-traveller-hire-near-me) and [Char Dham yatra by tempo traveller](/char-dham-yatra-by-tempo-traveller).' },
            { question: 'Is the fare all-inclusive for a yatra?', answer: 'Yes — fuel, driver allowance and AC are included in the per-km or package fare. Toll, parking, and any driver night allowance (on long multi-day yatras) are charged at actual and shown on your final bill.' },
            { question: 'Do drivers wait during darshan?', answer: 'Always. The driver waits at each temple for as long as your darshan takes — there is no rushing. For multi-day yatras the driver stays with you throughout.' },
            { question: 'When is Char Dham yatra season?', answer: 'The Char Dham yatra is open roughly May to October (the shrines close for winter). Book early for peak months — see [Char Dham yatra September 2026](/chardham-yatra-september-2026) and [Char Dham cost by car](/chardham-yatra-cost-by-car).' },
          ]} title="Pilgrimage cabs — FAQs" />
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <RelatedLinks heading="Related yatra pages" links={[
            { href: '/chardham-yatra', anchor: 'Char Dham yatra hub' },
            { href: '/chardham-yatra-september-2026', anchor: 'Char Dham yatra September 2026' },
            { href: '/kedarnath-september-trip', anchor: 'Kedarnath in September' },
            { href: '/char-dham-yatra-taxi-fare-from-haridwar', anchor: 'Char Dham taxi fare from Haridwar' },
            { href: '/char-dham-yatra-by-tempo-traveller', anchor: 'Char Dham yatra by tempo traveller' },
            { href: '/janmashtami-mathura-vrindavan-cab', anchor: 'Janmashtami Mathura–Vrindavan cab' },
            { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
            { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
          ]} tone="slate" />
        </div>
      </section>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-950 mb-4">Start your yatra with us</h2>
          <p className="text-slate-900/70 text-lg mb-8 max-w-xl mx-auto">Upfront fare, respectful driver, AC guaranteed. Tell us your destination and dates.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-slate-950 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-all"><Phone className="h-5 w-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur text-slate-950 px-8 py-4 rounded-2xl font-bold border border-slate-900/10 hover:bg-white/30 transition-all"><MessageCircle className="h-5 w-5" /> WhatsApp us</Link>
          </div>
        </div>
      </section>

      <nav className="py-4 px-4 bg-slate-100 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link><span>/</span>
          <span className="text-slate-800 font-medium">Pilgrimage Cabs</span>
        </div>
      </nav>
    </div>
  );
}