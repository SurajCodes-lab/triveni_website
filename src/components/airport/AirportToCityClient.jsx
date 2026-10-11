'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Plane, Clock, Shield, MapPin, Car, ChevronDown, CheckCircle2,
  Phone, Star, Users, Navigation, Luggage,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import {
  AirportShell, AirportBackdrop, AirportCrumb, FlightStatusPill, SectionKicker,
  RouteArc, Barcode, getAccent, HeroPhoto,
} from '@/components/airport/AirportKit';
import { getCityImage } from '@/utilis/imageUtils';
import { groupDigits } from '@/utilis/pricing';

const PHONE = '+917668570551';
const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

const VEHICLES = [
  { name: 'Sedan', desc: 'Swift Dzire · Etios', seats: '1–4', bags: '2', mult: 1, tag: null, img: '/images/car/swift_dzire.jpg' },
  { name: 'SUV', desc: 'Innova · Ertiga', seats: '1–6', bags: '4', mult: 1.4, tag: 'Most Booked', img: '/images/car/innova_crysta.jpg' },
  { name: 'Tempo Traveller', desc: '12–16 Seater', seats: '7–16', bags: '8+', mult: 2.2, tag: null, img: '/images/tempo/16_seater.jpg' },
];

const INCLUDES = [
  { icon: Navigation, t: 'Meet & greet at arrivals' },
  { icon: Plane, t: 'Real-time flight tracking' },
  { icon: Car, t: 'Clean AC vehicle' },
  { icon: Luggage, t: 'Free luggage assistance' },
  { icon: Clock, t: '30 min free waiting' },
  { icon: Shield, t: 'Fixed fare — no surge' },
];

export default function AirportToCityClient({ airport, city, distance, duration, fare, faqs = [] }) {
  const [openFaq, setOpenFaq] = useState(0);
  const accent = getAccent(city);
  const heroWa = `Hi, I need a cab from ${airport} to ${city}. Please share availability and fare.`;

  return (
    <AirportShell accent={accent}>
      <SetStickyCta price={`₹${groupDigits(fare)}`} label={`${airport} → ${city}`} whatsappText={heroWa} />

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden px-4 pt-14 sm:pt-24 pb-16 md:pb-24">
        <HeroPhoto src={getCityImage(city)} />
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <AirportCrumb trail={[
            { label: 'Home', href: '/' },
            { label: 'Airport Service', href: '/airport-service' },
            { label: `${airport} → ${city}` },
          ]} />

          <div className="grid items-start gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <FlightStatusPill label="Airport Transfer" />
              <h1 className="mt-6 text-3xl font-black leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
                <span className="block bg-gradient-to-r from-[var(--air-accent)] via-[var(--air-accent2)] to-[var(--air-accent)] bg-clip-text text-transparent">{airport}</span>
                <span className="block text-white">to {city} Cab</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Pre-booked transfer with flight tracking, meet &amp; greet at arrivals, and a guaranteed fixed fare of
                <strong className="text-[color:var(--air-accent)]"> ₹{groupDigits(fare)}</strong>.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  { icon: MapPin, l: 'Distance', v: distance },
                  { icon: Clock, l: 'Duration', v: duration },
                  { icon: Car, l: 'Sedan Fare', v: `₹${groupDigits(fare)}` },
                ].map((s) => (
                  <div key={s.l} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 backdrop-blur-xl">
                    <s.icon className="h-5 w-5 text-[color:var(--air-accent)]" />
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">{s.l}</div><div className="text-sm font-bold text-white">{s.v}</div></div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('airport_to_city_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-7 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
                  <Phone className="h-5 w-5" /> Call +91 7668570551
                </a>
                <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('airport_to_city_hero')}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40 hover:bg-white/[0.08]">
                  <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp
                </a>
              </div>

              <RouteArc from={airport.toUpperCase().slice(0, 12)} to={city.toUpperCase()} className="mt-10 max-w-md" />
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-3xl border border-[color:var(--air-accent)]/20 bg-white/[0.04] p-1.5 backdrop-blur-xl">
                <div className="mb-1 flex items-center justify-between px-4 pt-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]">Booking Desk</span>
                  <FlightStatusPill label="Open" />
                </div>
                <QuickEnquiryForm fromCity={airport} toCity={city} pageType="airport_transfer" />
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
              {[{ v: '4.9★', l: 'Google Rated' }, { v: '10,000+', l: 'Airport Trips' }, { v: 'Verified', l: 'Drivers' }, { v: 'Live', l: 'Flight Tracking' }].map((s, i) => (
                <div key={i} className="px-4 py-5">
                  <div className="font-mono text-lg font-black text-[color:var(--air-accent)] sm:text-2xl">{s.v}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ FLIGHT TRACKING ══ */}
      <section className="relative overflow-hidden px-4 py-10 sm:py-16">
        <AirportBackdrop variant="grid" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="rounded-3xl border border-[color:var(--air-accent)]/15 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-start gap-5 md:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--air-accent)]/20 bg-[color:var(--air-accent)]/[0.1]">
                <Plane className="h-7 w-7 text-[color:var(--air-accent)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white md:text-3xl">Your driver tracks your flight</h2>
                <p className="mt-3 text-lg leading-relaxed text-slate-300">
                  Share your flight number and we monitor it in real time. Early or delayed, your driver adjusts automatically and waits at the {airport} arrivals gate with a name placard, ready to help with your luggage.
                </p>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { n: '01', t: 'Share flight details', s: 'PNR or flight number at booking' },
                { n: '02', t: 'We track in real time', s: 'Driver dispatched on your landing' },
                { n: '03', t: 'Meet at arrivals', s: 'Name placard + luggage help' },
              ].map((s) => (
                <div key={s.n} className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                  <div className="absolute right-4 top-2 font-mono text-5xl font-black text-[color:var(--air-accent)]/10">{s.n}</div>
                  <h3 className="relative font-semibold text-white">{s.t}</h3>
                  <p className="relative mt-1 text-sm text-slate-400">{s.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ VEHICLES ══ */}
      <section className="relative px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Cabin Class</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Choose your vehicle</h2>
            <p className="mt-3 text-slate-400">{airport} to {city} — all-inclusive pricing.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {VEHICLES.map((v) => (
              <div key={v.name} className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.02] transition-all duration-300 hover:-translate-y-1.5 hover:border-[color:var(--air-accent)]/40">
                <div className="relative h-36 w-full overflow-hidden">
                  <Image src={v.img} alt={`${v.name} — ${airport} to ${city}`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--air-deep)] via-transparent to-transparent" />
                </div>
                <div className="flex items-center justify-between border-b border-dashed border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2"><Car className="h-5 w-5 text-[color:var(--air-accent)]" /><span className="font-bold text-white">{v.name}</span></div>
                  {v.tag && <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase text-black" style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))' }}>{v.tag}</span>}
                </div>
                <div className="relative">
                  <span className="absolute -left-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep)' }} />
                  <span className="absolute -right-2 top-0 h-4 w-4 -translate-y-1/2 rounded-full" style={{ backgroundColor: 'var(--air-deep)' }} />
                </div>
                <div className="px-5 py-5">
                  <p className="text-sm text-slate-400">{v.desc}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-slate-300"><Users className="h-4 w-4 text-[color:var(--air-accent)]" /> {v.seats}</div>
                    <div className="flex items-center gap-2 text-slate-300"><Luggage className="h-4 w-4 text-[color:var(--air-accent)]" /> {v.bags} bags</div>
                  </div>
                  <div className="mt-5 flex items-end justify-between">
                    <div><div className="text-[10px] uppercase tracking-widest text-slate-500">Fixed fare</div><div className="font-mono text-2xl font-black text-[color:var(--air-accent)]">₹{groupDigits(Math.round(fare * v.mult))}</div></div>
                    <Barcode />
                  </div>
                  <a href={wa(`Hi, I want to book a ${v.name} from ${airport} to ${city}. Please confirm.`)} target="_blank" rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick(`airport_vehicle_${v.name.toLowerCase()}`)}
                    className="mt-5 block rounded-xl border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.1] py-2.5 text-center text-sm font-semibold text-[color:var(--air-accent)] transition-colors hover:bg-[color:var(--air-accent)]/20">
                    Book {v.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INCLUDES ══ */}
      <section className="relative px-4 py-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <SectionKicker center>Every Ride Includes</SectionKicker>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">What&apos;s included</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDES.map((it) => (
              <div key={it.t} className="flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-[color:var(--air-accent)]/25">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color:var(--air-accent)]/20 bg-[color:var(--air-accent)]/[0.1]"><it.icon className="h-5 w-5 text-[color:var(--air-accent)]" /></div>
                <span className="font-medium text-slate-200">{it.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      {faqs.length > 0 && (
        <section className="relative px-4 py-10 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <SectionKicker center>Traveller Help</SectionKicker>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">Frequently asked</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
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

      {/* ══ CTA ══ */}
      <section className="relative overflow-hidden px-4 py-12 sm:py-20">
        <AirportBackdrop variant="full" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <FlightStatusPill label="Now Boarding" className="mx-auto" />
          <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
            Ready to book your <span className="bg-gradient-to-r from-[var(--air-accent)] to-[var(--air-accent2)] bg-clip-text text-transparent">{airport} → {city}</span> cab?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-300">Fixed fare ₹{groupDigits(fare)} · flight tracking · 24/7 availability · verified drivers.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`tel:${PHONE}`} onClick={() => trackPhoneCall('airport_to_city_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl px-9 py-4 text-lg font-bold text-black transition-transform hover:scale-[1.02]"
              style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 12px 36px var(--air-glow)' }}>
              <Phone className="h-5 w-5" /> Call +91 7668570551
            </a>
            <a href={wa(heroWa)} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('airport_to_city_cta')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-9 py-4 text-lg font-bold text-white backdrop-blur-xl transition-colors hover:border-[color:var(--air-accent)]/40">
              <WhatsAppIcon className="h-5 w-5 text-emerald-400" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </AirportShell>
  );
}
