'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Plane, Shield, Clock, Car, MapPin, Star, Navigation, Globe, Crown,
  Luggage, Users, ChevronDown, CheckCircle2, ArrowRight,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill,
  TerminalBadge, getAccent, HeroPhoto,
  SerifHeading, TrustSeal, LaneStrip, GOLD_BTN, GHOST_BTN, FOIL,
} from '@/components/airport/AirportKit';

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

const ICONS = { Plane, Globe, Car, Crown, Star, MapPin, Navigation, Shield, Clock, Users, Luggage };

// Pick a representative photo for a related-service link by its href keywords.
const relImg = (href = '') => {
  const h = href.toLowerCase();
  if (h.includes('agra')) return '/images/sightseeing/Agra/Taj_mahal.jpg';
  if (h.includes('jewar')) return '/images/airport_section.jpg';
  if (h.includes('terminal') || h.includes('airport-service')) return '/images/airport_section.jpg';
  if (h.includes('sightseeing/delhi')) return '/images/sightseeing/Delhi/Delhi_hero_section.jpg';
  if (h.includes('sightseeing')) return '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg';
  if (h.includes('jaipur')) return '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg';
  if (h.includes('tempo')) return '/images/tempo/16_seater.jpg';
  if (h.includes('wedding')) return '/images/wedding/premium_suv.jpg';
  if (h.includes('corporate')) return '/images/citypage_hero_section_image.jpg';
  return '/images/citypage_hero_section_image.jpg';
};

export default function TerminalPageClient({ t }) {
  const [openFaq, setOpenFaq] = useState(0);
  const accent = t.accent || getAccent('default');
  const heroWa = `Hi, I need a taxi from ${t.airportName} ${t.terminalCode}. Please share availability and fare.`;

  const premium = t.premiumFeatures || [
    { iconName: t.international ? 'Globe' : 'Plane', label: t.international ? 'International Arrivals' : 'All Domestic Flights', desc: t.terminalType },
    { iconName: 'Clock', label: t.waitInfo || '60 Min Free Wait', desc: 'After actual landing' },
    { iconName: 'Shield', label: 'Flight Tracking', desc: 'Real-time delay monitoring' },
    { iconName: 'Crown', label: 'Meet & Greet', desc: 'Nameboard at arrival gate' },
  ];

  return (
    <AirportShell accent={accent}>
      <SetStickyCta price="From ₹11/km" label={`${t.airportCode} ${t.terminalCode} Taxi`} whatsappText={heroWa} />

      {/* ══ HERO — cinematic photo, serif + gold-foil title ══ */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pb-24">
        <HeroPhoto src="/images/airport_section.jpg" />
        <LaneStrip />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={t.crumb} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <TerminalBadge code={t.terminalCode} sub="Terminal" accentName={t.airportCode} />
                <FlightStatusPill label={t.international ? 'International · 24/7' : 'Domestic · 24/7'} />
              </div>

              <h1 className="mt-7 font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
                <span className={`block ${FOIL}`}>{t.headlineTop}</span>
                <span className="block text-white">{t.headlineSub}</span>
              </h1>
              <p className="mt-2 font-mono text-sm tracking-wide text-slate-400">{t.airportName} · {t.terminalType}</p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t.tagline}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall(`terminal_${t.terminalCode}_hero`)}
                  className={`${GOLD_BTN} w-full px-7 py-4 text-base lg:w-auto lg:py-2`}>
                  <Phone className="h-5 w-5" /> Book {t.terminalCode} Pickup
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`terminal_${t.terminalCode}_hero`)}
                  className={`${GHOST_BTN} w-full px-7 py-4 text-base lg:w-auto lg:py-2`}>
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp
                </a>
              </div>

              <TrustSeal compact className="mt-6 max-w-md" />
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {premium.map((f, i) => {
                  const Ic = ICONS[f.iconName] || Plane;
                  return (
                    <div key={i} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 backdrop-blur-md transition-colors hover:border-[color:var(--air-accent)]/25">
                      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15">
                        <Ic className="h-5 w-5 text-[color:var(--air-accent)]" />
                      </span>
                      <div className="text-sm font-bold text-white">{f.label}</div>
                      <div className="text-xs text-slate-500">{f.desc}</div>
                    </div>
                  );
                })}
              </div>
              {/* Pickup point — glass stat tiles, gold icon chips, missing facts omitted */}
              <div className="rounded-2xl border border-[color:var(--air-accent)]/15 bg-[color:var(--air-accent)]/[0.05] p-6 backdrop-blur-md">
                <h3 className="flex items-center gap-2 font-bold text-white"><MapPin className="h-5 w-5 text-[color:var(--air-accent)]" /> {t.terminalCode} Pickup Point</h3>
                <div className="mt-4 grid gap-3">
                  {[
                    { icon: Navigation, l: 'Gate', v: t.pickupPoint },
                    { icon: Users, l: 'Meet', v: t.meetingPoint },
                    { icon: Clock, l: 'Wait', v: t.waitInfo },
                  ].filter((s) => s.v).map((s) => (
                    <div key={s.l} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-400/15">
                        <s.icon className="h-4 w-4 text-[color:var(--air-accent)]" />
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] uppercase tracking-widest text-slate-500">{s.l}</div>
                        <div className="text-sm font-semibold leading-snug text-slate-200">{s.v}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ENQUIRY ══ */}
      <section className="relative px-4 pb-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-[color:var(--air-accent)]/20 bg-white/[0.04] p-1.5 backdrop-blur-xl">
            <div className="mb-1 flex items-center justify-between px-4 pt-3">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">{t.terminalCode} Booking Desk</span>
              <FlightStatusPill label="Open" />
            </div>
            <QuickEnquiryForm fromCity={`${t.airportName} ${t.terminalCode}`} pageType="airport_transfer" />
          </div>
        </div>
      </section>

      {/* ══ OVERVIEW — warm-light band ══ */}
      {Array.isArray(t.overview) && t.overview.length > 0 && (
        <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-4xl">
            <SerifHeading
              tone="light"
              center
              eyebrow={`${t.terminalCode} Arrivals`}
              title={t.overviewTitle || `${t.airportName} ${t.terminalCode} Taxi`}
              className="mb-8"
            />
            <div className="space-y-5 text-lg leading-relaxed text-slate-700">{t.overview.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
        </section>
      )}

      {/* ══ AIRLINES ══ */}
      {Array.isArray(t.airlines) && t.airlines.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <SerifHeading
              center
              eyebrow="Now Arriving"
              title="Airlines at"
              highlight={t.terminalCode}
              className="mb-10"
            />
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {t.airlines.map((a, i) => (
                <div key={i} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3.5 transition-colors hover:border-[color:var(--air-accent)]/25">
                  <Plane className="h-4 w-4 shrink-0 text-[color:var(--air-accent)]" />
                  <span className="text-sm font-semibold text-white">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ PRICING — stacked cards on mobile, true table md+ ══ */}
      {Array.isArray(t.pricing) && t.pricing.length > 0 && (
        <section className="relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SerifHeading
              center
              eyebrow="Fare Guide"
              title={`${t.terminalCode} fare`}
              highlight="estimates"
              subtitle="Transparent pricing from ₹11/km. No surge, no hidden charges."
              className="mb-10"
            />

            {/* Mobile: one glass card per destination — no sideways scrolling */}
            <div className="space-y-3 md:hidden">
              {t.pricing.map((r, i) => (
                <div key={`fare-card-${i}`} className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl">
                  <p className="flex items-center gap-2 text-sm font-bold text-white">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-400/15">
                      <MapPin className="h-4 w-4 text-[color:var(--air-accent)]" />
                    </span>
                    {r.destination}
                  </p>
                  <dl className="mt-3 space-y-1.5">
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Distance</dt>
                      <dd className="text-right font-mono text-sm text-slate-300">{r.distance}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Fare</dt>
                      <dd className="text-right font-mono text-sm font-bold text-[color:var(--air-accent)]">{r.fare}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-3">
                      <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Time</dt>
                      <dd className="text-right font-mono text-sm text-slate-400">{r.time}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            {/* Desktop: true semantic table, fits its container */}
            <div className="hidden overflow-hidden rounded-2xl border border-[color:var(--air-accent)]/15 bg-black/30 backdrop-blur-xl md:block">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[color:var(--air-accent)]/15 bg-[color:var(--air-accent)]/[0.08]">
                    <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Destination</th>
                    <th scope="col" className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Distance</th>
                    <th scope="col" className="px-4 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Fare</th>
                    <th scope="col" className="px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {t.pricing.map((r, i) => (
                    <tr key={i} className="border-b border-white/[0.04] transition-colors hover:bg-[color:var(--air-accent)]/[0.04]">
                      <th scope="row" className="px-6 py-4 text-left text-sm font-semibold text-white">{r.destination}</th>
                      <td className="px-4 py-4 font-mono text-sm text-slate-400">{r.distance}</td>
                      <td className="px-4 py-4 font-mono text-sm font-bold text-[color:var(--air-accent)]">{r.fare}</td>
                      <td className="px-6 py-4 font-mono text-sm text-slate-400">{r.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex justify-center">
              <TrustSeal />
            </div>
          </div>
        </section>
      )}

      {/* ══ FEATURES ══ */}
      {Array.isArray(t.features) && t.features.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16 md:py-24">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <SerifHeading
              center
              eyebrow={`${t.terminalCode} Service`}
              title="Pickup"
              highlight="features"
              className="mb-10"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[color:var(--air-accent)]/20 bg-[color:var(--air-accent)]/[0.1]">
                    <CheckCircle2 className="h-4 w-4 text-[color:var(--air-accent)]" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed text-slate-200">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ HOW TO BOOK — warm-light band ══ */}
      <section className="relative bg-gradient-to-b from-white via-amber-50/60 to-[#FFF6DC] px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-5xl">
          <SerifHeading
            tone="light"
            center
            eyebrow="Simple Process"
            title={`Book your ${t.terminalCode}`}
            highlight="taxi"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Call or WhatsApp', d: `Share your flight number, arrival time & drop point for ${t.terminalCode}. We confirm instantly, 24/7.` },
              { n: '02', t: 'We track your flight', d: 'Driver is dispatched on your real landing time. Delays are on us — no extra charge.' },
              { n: '03', t: 'Meet at the gate', d: `Spot your name on the placard at ${t.pickupPoint}. Bags loaded, ride away in a clean AC cab.` },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-white p-7 shadow-[0_16px_50px_-32px_rgba(15,23,42,0.3)]">
                <div className="absolute right-5 top-3 font-mono text-6xl font-black text-amber-400/20">{s.n}</div>
                <div className="relative z-10"><h3 className="text-xl font-bold text-slate-900">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      {Array.isArray(t.faqs) && t.faqs.length > 0 && (
        <section className="relative bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SerifHeading
              tone="light"
              center
              eyebrow="Traveller Help"
              title={`${t.terminalCode}`}
              highlight="FAQs"
              className="mb-10"
            />
            <div className="grid items-start gap-3 md:grid-cols-2 md:gap-4">
              {t.faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-amber-200/60 bg-white shadow-[0_16px_50px_-34px_rgba(15,23,42,0.3)]">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-slate-900">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-amber-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="border-t border-amber-100 px-5 pb-5 pt-4 leading-relaxed text-slate-600">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ RELATED SERVICES ══ */}
      {Array.isArray(t.relatedServices) && t.relatedServices.length > 0 && (
        <section className="relative px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SerifHeading
              center
              eyebrow="Explore More"
              title="Related"
              highlight="services"
              className="mb-10"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {t.relatedServices.map((s, i) => {
                const Ic = ICONS[s.iconName] || Car;
                return (
                  <Link key={i} href={s.href}
                    className="group overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--air-accent)]/30">
                    <div className="relative h-32 w-full overflow-hidden">
                      <Image src={relImg(s.href)} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-[var(--air-deep)]/40 to-transparent" />
                      <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--air-accent)]/30 bg-black/40 backdrop-blur-sm">
                        <Ic className="h-5 w-5 text-[color:var(--air-accent)]" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white group-hover:text-[color:var(--air-accent)]">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══ POPULAR LINKS ══ */}
      {Array.isArray(t.popularLinks) && t.popularLinks.length > 0 && (
        <section className="relative px-4 py-14 md:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display-serif mb-10 text-center text-2xl font-black text-white">Popular <span className={FOIL}>links</span></h2>
            <div className="grid gap-8 md:grid-cols-4">
              {t.popularLinks.map((col, i) => (
                <div key={i}>
                  <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-[color:var(--air-accent)]">{col.heading}</h3>
                  <ul className="space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href}><Link href={l.href} className="text-sm text-slate-500 transition-colors hover:text-[color:var(--air-accent)]">{l.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden px-4 py-20 md:py-24">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 font-display-serif text-balance text-4xl font-black leading-tight text-white md:text-6xl">{t.ctaTitle || `Book your ${t.terminalCode} taxi`}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{t.ctaSub || 'Fixed fare · flight tracking · meet & greet · 24/7 dispatch.'}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall(`terminal_${t.terminalCode}_cta`)}
              className={`${GOLD_BTN} w-full px-9 py-4 text-base sm:w-auto lg:py-2`}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`terminal_${t.terminalCode}_cta`)}
              className={`${GHOST_BTN} w-full px-9 py-4 text-base sm:w-auto lg:py-2`}>
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
