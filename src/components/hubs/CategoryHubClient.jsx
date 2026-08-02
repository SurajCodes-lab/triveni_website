import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, MapPin, ShieldCheck, Clock, Star } from '@/components/ui/icons';

const PHONE = '+917668570551';
const WA = 'https://wa.me/917668570551';

// Server-safe category-hub landing page. Lists every route/city in a category as
// internal links (crawl + internal-link equity), with hero, intro, CTAs and trust row.
// Props:
//   title, subtitle, intro (string), breadcrumbLabel,
//   items: [{ href, label, sub? }], total (number, optional),
//   columns (optional grid hint), waText (optional prefilled WhatsApp text)
export default function CategoryHubClient({
  title,
  subtitle,
  intro,
  breadcrumbLabel,
  items = [],
  waText,
}) {
  const count = items.length;
  const wa = `${WA}?text=${encodeURIComponent(waText || `Hi, I want to book a cab. (${breadcrumbLabel || title})`)}`;

  return (
    <main className="bg-[#f8f7f4] min-h-screen">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-white/60 mb-5">
            <Link href="/" className="hover:text-white/90">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/90">{breadcrumbLabel || title}</span>
          </nav>

          <h1 className="speakable-headline text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-base sm:text-lg text-[#FACF2D] font-semibold">{subtitle}</p>
          )}
          {intro && (
            <p className="speakable-lead mt-4 max-w-3xl text-sm sm:text-base text-white/75 leading-relaxed">
              {intro}
            </p>
          )}

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
              <Phone className="w-4 h-4" /> Call 7668570551
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Quote
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-[#FACF2D]" /> 4.9 rated</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verified drivers</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-sky-400" /> 24/7 support</span>
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-400" /> {count}+ routes</span>
          </div>
        </div>
      </section>

      {/* Links grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-1">
          All {breadcrumbLabel || title} ({count})
        </h2>
        <p className="text-sm text-slate-500 mb-6">Tap any route for fares, details and instant booking.</p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className="group flex items-center justify-between gap-3 bg-white rounded-xl px-4 py-3 border border-slate-200/80 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <span className="min-w-0">
                  <span className="block font-bold text-slate-800 text-sm truncate group-hover:text-amber-700">{it.label}</span>
                  {it.sub && <span className="block text-[11px] text-slate-400 truncate">{it.sub}</span>}
                </span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 shrink-0 transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-black">Not sure which option fits?</h2>
          <p className="mt-2 text-white/70 text-sm sm:text-base">Tell us your route — we'll share the best fare and vehicle in minutes.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-7 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-500 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-emerald-400 transition-all">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
