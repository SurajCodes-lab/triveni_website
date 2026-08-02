'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, Plane, Shield, Clock, Users, Star, ChevronDown, Car,
  CheckCircle2, ArrowRight, Route, MapPin, Luggage, Navigation, Camera,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill, SectionKicker,
  TerminalBadge, RouteArc, Barcode, getAccent, HeroPhoto,
} from '@/components/airport/AirportKit';
import { getCityImage } from '@/utilis/imageUtils';

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

const slugToLabel = (slug) =>
  String(slug)
    .replace(/-taxi$|-cab$/, '')
    .split('-')
    .map((w) => (w === 'to' ? 'to' : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');

export default function AirportOutstationClient({ data, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(0);
  const accent = getAccent(data.destination);
  const heroWa = `Hi, I need a taxi from ${data.airport} to ${data.destination}. Please share availability and fare.`;

  const fares = [
    { key: 'sedan', label: 'Sedan', ...data.fares.sedan, tag: null, img: '/images/car/swift_dzire.jpg' },
    { key: 'suv', label: 'SUV', ...data.fares.suv, tag: 'Most Booked', img: '/images/car/innova_crysta.jpg' },
    { key: 'tempo', label: 'Tempo Traveller', ...data.fares.tempo, tag: null, img: '/images/tempo/16_seater.jpg' },
  ];

  return (
    <AirportShell accent={accent}>
      <SetStickyCta price={`₹${data.fares.sedan.price}`} label={`${data.airportCity} Airport → ${data.destination}`} whatsappText={heroWa} />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-4 pt-24 pb-16 md:pb-24">
        <HeroPhoto src={getCityImage(data.destination)} />
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={[
            { label: 'Home', href: '/' },
            { label: 'Airport Service', href: '/airport-service' },
            { label: `${data.airportCode} → ${data.destination}` },
          ]} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <TerminalBadge code={data.airportCode} sub="From" accentName={`${data.terminals.length} TERM`} />
                <FlightStatusPill label="Outstation Transfer" />
              </div>

              <h1 className="mt-7 text-3xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
                <span className="block bg-gradient-to-r from-[var(--air-accent)] via-[var(--air-accent2)] to-[var(--air-accent)] bg-clip-text text-transparent">{data.airportCity} Airport</span>
                <span className="block text-white">to {data.destination}</span>
              </h1>
              <p className="mt-2 font-mono text-sm tracking-wide text-slate-400">{data.airport} · {data.destinationState}</p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Direct outstation transfer with <strong className="text-white">live flight tracking</strong> &amp; meet-and-greet — fixed fare from
                <strong className="text-[color:var(--air-accent)]"> ₹{data.fares.sedan.price}</strong>, no surge.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { icon: Route, l: 'Distance', v: data.distance },
                  { icon: Clock, l: 'Drive Time', v: data.time },
                  { icon: Navigation, l: 'Route', v: data.highway },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                    <s.icon className="h-5 w-5 shrink-0 text-[color:var(--air-accent)]" />
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">{s.l}</div><div className="text-sm font-bold text-white">{s.v}</div></div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('airport_outstation_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
                  <Phone className="h-5 w-5" /> Call +91 7668570551
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('airport_outstation_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40 hover:bg-white/[0.08]">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp
                </a>
              </div>

              <RouteArc from={data.airportCode} to={data.destination.toUpperCase()} className="mt-10 max-w-md" />
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-[color:var(--air-accent)]/20 bg-white/[0.04] p-1.5 backdrop-blur-xl">
                <div className="mb-1 flex items-center justify-between px-4 pt-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Booking Desk</span>
                  <FlightStatusPill label="Open" />
                </div>
                <QuickEnquiryForm fromCity={`${data.airportCity} Airport`} toCity={data.destination} pageType="airport_transfer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BOARD ══ */}
      <section className="relative px-4 py-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-white/[0.06] bg-black/30 backdrop-blur-xl">
            <div className="grid grid-cols-2 divide-x divide-white/[0.05] sm:grid-cols-4 text-center">
              {[{ v: '4.9★', l: 'Rated' }, { v: 'Fixed', l: 'No Surge' }, { v: '24/7', l: 'Dispatch' }, { v: 'Live', l: 'Tracking' }].map((s, i) => (
                <div key={i} className="px-4 py-5"><div className="font-mono text-lg font-black text-[color:var(--air-accent)] sm:text-2xl">{s.v}</div><div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{s.l}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FARES — boarding-pass cards ══ */}
      <section className="relative px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Fixed Fares</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Pick your ride to {data.destination}</h2>
            <p className="mt-3 text-slate-400">Tolls, parking &amp; meet-and-greet included — what you see is what you pay.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {fares.map((v) => (
              <div key={v.key} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40">
                <div className="relative h-36 w-full overflow-hidden">
                  <Image src={v.img} alt={`${v.label} — ${data.airportCity} airport to ${data.destination}`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2"><Car className="h-5 w-5 text-[color:var(--air-accent)]" /><span className="font-bold text-white">{v.label}</span></div>
                  {v.tag && <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase text-black" style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))' }}>{v.tag}</span>}
                </div>
                <div className="relative">
                  <span className="absolute -left-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep)' }} />
                  <span className="absolute -right-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep)' }} />
                </div>
                <div className="px-5 py-5">
                  <p className="text-sm text-slate-400">{v.vehicle}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-300"><Users className="h-4 w-4 text-[color:var(--air-accent)]" /> Up to {v.seats} passengers</div>
                  <div className="mt-5 flex items-end justify-between">
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">Fixed fare</div><div className="font-mono text-2xl font-black text-[color:var(--air-accent)]">₹{v.price}</div></div>
                    <Barcode />
                  </div>
                  <a href={wa(`Hi, I want to book a ${v.label} from ${data.airport} to ${data.destination}. Please confirm.`)} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`airport_outstation_${v.key}`)}
                    className="mt-5 block rounded-xl border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] py-2.5 text-center text-sm font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                    Book {v.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TERMINALS ══ */}
      {Array.isArray(data.terminals) && data.terminals.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionKicker center>Pickup From Every Gate</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{data.airportCity} terminal pickup</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {data.terminals.map((t, i) => (
                <div key={i} className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white">{t.name}</span>
                    <span className="rounded-full border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[color:var(--air-accent)]">{t.type}</span>
                  </div>
                  <div className="mt-4 space-y-2.5 text-sm">
                    <div><span className="text-[color:var(--air-accent)]">Airlines: </span><span className="text-slate-300">{t.airlines}</span></div>
                    <div><span className="text-[color:var(--air-accent)]">Pickup: </span><span className="text-slate-300">{t.pickup}</span></div>
                    <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400"><Clock className="h-3.5 w-3.5" /> {t.driveTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ DESCRIPTION (SEO prose) ══ */}
      {Array.isArray(data.description) && data.description.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <SectionKicker center>The Journey</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">{data.airportCity} Airport → {data.destination}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-slate-300">
              {data.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </section>
      )}

      {/* ══ ATTRACTIONS ══ */}
      {Array.isArray(data.destinationAttractions) && data.destinationAttractions.length > 0 && (
        <section className="relative overflow-hidden px-4 py-16">
          <AirportBackdrop variant="grid" />
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>After You Arrive</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Explore {data.destination}</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {data.destinationAttractions.map((a) => (
                <span key={a} className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-[color:var(--air-accent)]/30">
                  <Camera className="h-4 w-4 text-[color:var(--air-accent)]" /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ FAQ ══ */}
      {Array.isArray(data.faqs) && data.faqs.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Traveller Help</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Frequently asked</h2>
            </div>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <div key={i} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-white">{faq.question}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[color:var(--air-accent)] transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && <div className="border-t border-white/[0.05] px-5 pb-5 pt-4 leading-relaxed text-slate-300">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══ RELATED ROUTES ══ */}
      {Array.isArray(relatedRoutes) && relatedRoutes.length > 0 && (
        <section className="relative px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <SectionKicker center>More Airport Routes</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">Related transfers</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((rel, i) => {
                const slug = typeof rel === 'string' ? rel : rel.slug;
                return (
                  <Link key={i} href={`/${slug}`}
                    className="group flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--air-accent)]/30">
                    <span className="flex items-center gap-3 font-semibold text-white"><Plane className="h-5 w-5 text-[color:var(--air-accent)]" /> {slugToLabel(slug)}</span>
                    <ArrowRight className="h-5 w-5 text-[color:var(--air-accent)] transition-transform group-hover:translate-x-1.5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden px-4 py-20">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Book your <span className="bg-gradient-to-r from-[var(--air-accent)] to-[var(--air-accent2)] bg-clip-text text-transparent">{data.airportCity} → {data.destination}</span> taxi
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">Fixed fare from ₹{data.fares.sedan.price} · flight tracking · meet &amp; greet · 24/7.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('airport_outstation_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-9 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('airport_outstation_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40">
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
