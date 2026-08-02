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
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill, SectionKicker,
  TerminalBadge, BoardRow, getAccent, HeroPhoto,
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

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pb-24">
        <HeroPhoto src="/images/airport_section.jpg" />
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={t.crumb} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <TerminalBadge code={t.terminalCode} sub="Terminal" accentName={t.airportCode} />
                <FlightStatusPill label={t.international ? 'International · 24/7' : 'Domestic · 24/7'} />
              </div>

              <h1 className="mt-7 text-3xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
                <span className="block bg-gradient-to-r from-[var(--air-accent)] via-[var(--air-accent2)] to-[var(--air-accent)] bg-clip-text text-transparent">{t.headlineTop}</span>
                <span className="block text-white">{t.headlineSub}</span>
              </h1>
              <p className="mt-2 font-mono text-sm tracking-wide text-slate-400">{t.airportName} · {t.terminalType}</p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{t.tagline}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall(`terminal_${t.terminalCode}_hero`)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
                  <Phone className="h-5 w-5" /> Book {t.terminalCode} Pickup
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`terminal_${t.terminalCode}_hero`)}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40 hover:bg-white/[0.08]">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {premium.map((f, i) => {
                  const Ic = ICONS[f.iconName] || Plane;
                  return (
                    <div key={i} className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5 transition-colors hover:border-[color:var(--air-accent)]/25">
                      <Ic className="mb-3 h-7 w-7 text-[color:var(--air-accent)]" />
                      <div className="text-sm font-bold text-white">{f.label}</div>
                      <div className="text-xs text-slate-500">{f.desc}</div>
                    </div>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-[color:var(--air-accent)]/15 bg-[color:var(--air-accent)]/[0.05] p-6">
                <h3 className="flex items-center gap-2 font-bold text-white"><MapPin className="h-5 w-5 text-[color:var(--air-accent)]" /> {t.terminalCode} Pickup Point</h3>
                <div className="mt-4 space-y-2.5 text-sm">
                  <div><span className="font-semibold text-[color:var(--air-accent)]">Gate: </span><span className="text-slate-300">{t.pickupPoint}</span></div>
                  <div><span className="font-semibold text-[color:var(--air-accent)]">Meet: </span><span className="text-slate-300">{t.meetingPoint}</span></div>
                  <div><span className="font-semibold text-[color:var(--air-accent)]">Wait: </span><span className="text-slate-300">{t.waitInfo}</span></div>
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

      {/* ══ OVERVIEW ══ */}
      {Array.isArray(t.overview) && t.overview.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <SectionKicker center>{t.terminalCode} Arrivals</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{t.overviewTitle || `${t.airportName} ${t.terminalCode} Taxi`}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">{t.overview.map((p, i) => <p key={i}>{p}</p>)}</div>
          </div>
        </section>
      )}

      {/* ══ AIRLINES ══ */}
      {Array.isArray(t.airlines) && t.airlines.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Now Arriving</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Airlines at {t.terminalCode}</h2>
            </div>
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

      {/* ══ PRICING BOARD ══ */}
      {Array.isArray(t.pricing) && t.pricing.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Fare Guide</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{t.terminalCode} fare estimates</h2>
              <p className="mt-3 text-slate-400">Transparent pricing from ₹11/km. No surge, no hidden charges.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[color:var(--air-accent)]/15 bg-black/30 backdrop-blur-xl">
              <div className="min-w-[560px]">
                <BoardRow head cols={[{ v: 'Destination', w: '2fr' }, { v: 'Distance', w: '1fr' }, { v: 'Fare', w: '1fr' }, { v: 'Time', w: '1fr' }]} />
                {t.pricing.map((r, i) => (
                  <BoardRow key={i} accentLast cols={[
                    { v: r.destination, w: '2fr' },
                    { v: r.distance, w: '1fr', mono: true, dim: true },
                    { v: r.fare, w: '1fr', mono: true },
                    { v: r.time, w: '1fr', dim: true },
                  ]} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ══ FEATURES ══ */}
      {Array.isArray(t.features) && t.features.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>{t.terminalCode} Service</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Pickup features</h2>
            </div>
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

      {/* ══ HOW TO BOOK ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Simple Process</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Book your {t.terminalCode} taxi</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: '01', t: 'Call or WhatsApp', d: `Share your flight number, arrival time & drop point for ${t.terminalCode}. We confirm instantly, 24/7.` },
              { n: '02', t: 'We track your flight', d: 'Driver is dispatched on your real landing time. Delays are on us — no extra charge.' },
              { n: '03', t: 'Meet at the gate', d: `Spot your name on the placard at ${t.pickupPoint}. Bags loaded, ride away in a clean AC cab.` },
            ].map((s) => (
              <div key={s.n} className="relative overflow-hidden rounded-2xl border border-[color:var(--air-accent)]/12 bg-white/[0.03] p-7">
                <div className="absolute right-5 top-3 font-mono text-6xl font-black text-[color:var(--air-accent)]/10">{s.n}</div>
                <div className="relative z-10"><h3 className="text-xl font-bold text-white">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      {Array.isArray(t.faqs) && t.faqs.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Traveller Help</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{t.terminalCode} FAQs</h2>
            </div>
            <div className="space-y-3">
              {t.faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-white">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--air-accent)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="border-t border-white/[0.05] px-5 pb-5 pt-4 leading-relaxed text-slate-300">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ RELATED SERVICES ══ */}
      {Array.isArray(t.relatedServices) && t.relatedServices.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Explore More</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">Related services</h2>
            </div>
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
        <section className="relative px-4 py-14">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-10 text-center text-2xl font-black text-white">Popular links</h2>
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
      <section className="relative overflow-hidden px-4 py-20">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-6xl">{t.ctaTitle || `Book your ${t.terminalCode} taxi`}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">{t.ctaSub || 'Fixed fare · flight tracking · meet & greet · 24/7 dispatch.'}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall(`terminal_${t.terminalCode}_cta`)}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-9 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`terminal_${t.terminalCode}_cta`)}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40">
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
