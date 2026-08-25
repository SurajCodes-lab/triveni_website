'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Clock, Shield, Bus, Car, Users, Star, ChevronDown,
  CheckCircle2, ArrowRight, Route, Navigation, IndianRupee, Zap,
  MapPinned, Gauge, Headphones, ShieldCheck, Navigation2
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage } from '@/utilis/imageUtils';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import SectionDivider from '@/components/shared/SectionDivider';

// ─── Ultra-Premium v2 vocabulary ────────────────────────────────────────────
const FOIL =
  'text-gold-foil bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(250,207,45,0.35)]';
const GOLD_BTN =
  'sheen inline-flex items-center justify-center gap-2 rounded-full bg-[#FACF2D] font-black text-slate-950 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 active:translate-y-0 active:scale-[0.98]';
const GHOST_BTN =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10';
const CTA_SIZE = 'w-full px-7 py-4 text-sm lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GLASS = 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10';

function SerifHeading({ eyebrow, icon: EyebrowIcon, title, highlight, after, subtitle, tone = 'dark' }) {
  const dark = tone === 'dark';
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      {eyebrow && (
        <span className={`mb-4 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] sm:text-xs ${dark ? 'text-amber-300' : 'text-amber-600'}`}>
          <span className={`h-px w-7 ${dark ? 'bg-amber-400/60' : 'bg-amber-500/60'}`} />
          {EyebrowIcon && <EyebrowIcon className="h-3.5 w-3.5" />}
          {eyebrow}
          <span className={`h-px w-7 ${dark ? 'bg-amber-400/60' : 'bg-amber-500/60'}`} />
        </span>
      )}
      <h2 className={`font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.75rem] ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title} {highlight && <span className={FOIL}>{highlight}</span>}{after ? <> {after}</> : null}
      </h2>
      {subtitle && (
        <p className={`mx-auto mt-4 max-w-2xl text-sm leading-relaxed sm:text-base ${dark ? 'text-slate-300/80' : 'text-slate-600'}`}>{subtitle}</p>
      )}
    </div>
  );
}

export default function BusStandClient({ stand, slug, allStands, faqs }) {
  const [openFaq, setOpenFaq] = useState(null);
  // Rich FAQ set passed from the server (10-12 stand-specific Qs). Falls back
  // to the curated stand.faqs if the prop is not provided.
  const faqList = Array.isArray(faqs) && faqs.length ? faqs : (stand.faqs || []);
  const heroImage = getCityImage(stand.city);

  return (
    <article className="min-h-screen bg-slate-950 text-white" itemScope itemType="https://schema.org/TaxiService">
      <StickyPriceBar
        title={`${stand.name} Taxi Service`}
        price={stand.destinations?.[0]?.fare || ''}
        whatsappMessage={`Hi, I need a taxi from ${stand.name}, ${stand.city}`}
      />

      {/* ====== HERO — visible city photo, scrim on the text side only ====== */}
      <section className="relative flex min-h-[84vh] flex-col justify-end overflow-hidden">
        <Image
          src={heroImage}
          alt={`${stand.city} — taxi from ${stand.name}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
        <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/80 via-slate-950/25 to-transparent lg:w-3/4" />
        <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-28 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/45" aria-label="Breadcrumb">
            <Link href="/" className="transition-colors hover:text-amber-300">Home</Link>
            <ChevronDown className="h-3 w-3 -rotate-90" />
            <Link href="/bus-stand-taxi" className="transition-colors hover:text-amber-300">Bus Stand Taxi</Link>
            <ChevronDown className="h-3 w-3 -rotate-90" />
            <span className="text-amber-300">{stand.name}</span>
          </nav>

          <div className="grid items-end gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              {/* Bus route-board seal — honest data: terminal + operators count */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-slate-950/60 py-2 pl-2 pr-5 backdrop-blur-md">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-amber-400/15">
                  <Bus className="h-4 w-4 text-[#FACF2D]" />
                </span>
                <span className="text-left">
                  <span className="block font-mono text-[11px] font-black tracking-[0.22em] text-amber-200">{stand.city.toUpperCase()} BUS TERMINAL · {stand.busOperators.length}+ OPERATORS</span>
                  <span className="block text-[10px] text-white/55">Driver meets you at the bus stand exit, 24/7</span>
                </span>
              </div>

              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {stand.name}
                <span className={`block ${FOIL}`}>Cab &amp; Taxi Service</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                {stand.description}
              </p>

              {/* CTA buttons — gold + ghost, compact on desktop */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="tel:7668570551"
                  onClick={() => trackPhoneCall('bus_stand')}
                  className={`${GOLD_BTN} ${CTA_SIZE}`}
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Now - 7668570551</span>
                </a>
                <a
                  href="https://wa.me/917668570551"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('bus_stand')}
                  className={`${GHOST_BTN} ${CTA_SIZE}`}
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#FACF2D]" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Glass Info Card — Bus Route Board Style */}
            <div className="relative">
              <div className="border-gradient-gold relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-xl">
                {/* Route board header */}
                <div className="border-b border-amber-400/25 bg-gradient-to-r from-amber-400/15 via-amber-300/5 to-transparent px-8 py-5">
                  <div className="flex items-center gap-3">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <h2 className="font-mono text-lg font-bold uppercase tracking-wide text-amber-100">Station Info Board</h2>
                  </div>
                </div>

                <div className="space-y-5 p-8">
                  {[
                    { icon: MapPin, label: 'Location', value: stand.area },
                    { icon: Navigation, label: 'Pickup Point', value: stand.cabWaitingArea },
                    { icon: Bus, label: 'Operators', value: stand.busOperators.join(' | ') },
                    { icon: Clock, label: 'Service Hours', value: '24/7 - Round the Clock' },
                  ].map((item, i) => (
                    <div key={i} className="group flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 transition-colors group-hover:bg-amber-400/20">
                        <item.icon className="h-5 w-5 text-[#FACF2D]" />
                      </div>
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wider text-white/45">{item.label}</p>
                        <p className="font-medium leading-snug text-gray-200">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Landmarks footer */}
                <div className="px-8 pb-6">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wider text-white/45">Nearby Landmarks</p>
                  <div className="flex flex-wrap gap-2">
                    {stand.nearbyLandmarks.map((landmark, i) => (
                      <span key={i} className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs text-amber-200 transition-colors hover:border-amber-400/40">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* Quick Stats Bar */}
      <section className="relative border-y border-amber-400/10 bg-slate-900/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-amber-400/5" />
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
            {[
              { icon: Bus, label: 'Bus Operators', value: `${stand.busOperators.length}+ Lines` },
              { icon: Clock, label: 'Service', value: '24/7 Available' },
              { icon: Zap, label: 'Pickup', value: 'Instant' },
              { icon: MapPinned, label: 'GPS Tracked', value: 'Live Tracking' },
            ].map((stat, i) => (
              <div key={i} className="group flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:scale-110">
                  <stat.icon className="h-7 w-7 text-[#FACF2D]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/45">{stat.label}</p>
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DIRECT ANSWER BOX (AEO/Featured Snippet Target) — warm-light band === */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="direct-answer rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] md:p-8" data-snippet-type="direct-answer">
            <h2 className="font-display-serif mb-4 text-2xl font-black text-slate-900 md:text-3xl">
              How do I get a taxi from <span className={FOIL}>{stand.name}?</span>
            </h2>
            <div className="key-info mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Starting Fare</p>
                <p className="font-display-serif text-xl font-black text-amber-600">{stand.destinations?.[0]?.fare || '₹300'}</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Destinations</p>
                <p className="font-display-serif text-xl font-black text-slate-900">{stand.destinations.length}+</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Available</p>
                <p className="font-display-serif text-xl font-black text-slate-900">24/7</p>
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase text-slate-500">Rating</p>
                <p className="font-display-serif text-xl font-black text-amber-600">4.9★</p>
              </div>
            </div>
            <p className="speakable-lead faq-answer text-base leading-relaxed text-slate-700 md:text-lg">
              Taxi from <strong className="text-slate-900">{stand.name}, {stand.city}</strong> starts at just <strong className="text-amber-600">{stand.destinations?.[0]?.fare || '₹300'}</strong> for AC sedan.
              Our drivers wait at the <strong className="text-slate-900">bus stand exit gate</strong> — no surge pricing, no meter tampering.
              Fixed fares to {stand.destinations.slice(0, 3).map(d => d.name).join(', ')} and {Math.max(0, stand.destinations.length - 3)}+ more destinations.
              AC sedan and SUV with verified drivers, GPS tracking, and 24/7 availability.
              Call <strong className="text-slate-900">+91-7668570551</strong> or WhatsApp to book instantly. 4.9★ rated by verified travellers.
            </p>
          </div>
        </div>
      </section>

      {/* ====== FARE CARDS — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="Transparent Pricing"
            icon={IndianRupee}
            title="What does a taxi from"
            highlight={stand.name}
            after="cost?"
            subtitle="Fixed fares with no hidden charges. All prices for AC sedan (Swift Dzire / Honda Amaze)."
            tone="dark"
          />

          {/* Bus-route-board styled fare cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stand.destinations.map((dest, i) => (
              <div key={i} className="group relative">
                <div className={`relative overflow-hidden ${GLASS} transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10`}>
                  {/* Route number header */}
                  <div className="flex items-center justify-between border-b border-white/5 bg-gradient-to-r from-amber-400/15 to-transparent px-5 py-3">
                    <span className="font-mono text-sm font-bold text-amber-300">ROUTE {String(i + 1).padStart(2, '0')}</span>
                    <span className={`font-display-serif font-black ${FOIL}`}>{dest.fare}</span>
                  </div>

                  <div className="p-5">
                    <div className="mb-4 flex items-start gap-3">
                      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10">
                        <MapPin className="h-4 w-4 text-[#FACF2D]" />
                      </div>
                      <div>
                        <h3 className="font-display-serif text-lg font-black text-white transition-colors group-hover:text-amber-300">{dest.name}</h3>
                        <div className="mt-1 flex items-center gap-3 text-sm text-gray-400">
                          <span>{dest.distance}</span>
                          <span className="h-1 w-1 rounded-full bg-gray-600" />
                          <span>{dest.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href="tel:7668570551"
                        onClick={() => trackPhoneCall('bus_stand')}
                        className={`${GOLD_BTN} px-3 py-2.5 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}
                      >
                        <Phone className="h-3.5 w-3.5" />
                        Call
                      </a>
                      <a
                        href={`https://wa.me/917668570551?text=${encodeURIComponent(
                          `Hi, I need a taxi from ${stand.name} to ${dest.name} (${dest.fare}). Please confirm.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('bus_stand')}
                        className={`${GHOST_BTN} px-3 py-2.5 text-sm lg:px-5 lg:py-2 lg:text-[13px]`}
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">* Fares are approximate for AC sedan. SUV and premium vehicles available at additional charges.</p>
        </div>
      </section>

      {/* ====== BUS OPERATORS — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="Terminal Lines"
            icon={Bus}
            title="Which bus operators run from"
            highlight={`${stand.name}?`}
            subtitle="Major bus services operating from this terminal"
            tone="light"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stand.busOperators.map((operator, i) => (
              <div key={i} className="group rounded-2xl border border-amber-200 bg-white p-7 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_20px_60px_-28px_rgba(180,130,10,0.6)]">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/50 bg-gradient-to-br from-amber-100 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <Bus className="h-7 w-7 text-amber-600" />
                  </div>
                  <h3 className="font-display-serif text-xl font-black text-slate-900 transition-colors group-hover:text-amber-700">{operator}</h3>
                </div>
                <p className="leading-relaxed text-slate-600">Regular interstate and local bus services connecting {stand.city} to multiple destinations across the region.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE TRIVENI — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="Why Choose Us"
            icon={Star}
            title="Why Triveni Cabs at"
            highlight={`${stand.name}?`}
            subtitle={`The most trusted cab service at ${stand.name}, ${stand.city}. Here is what makes us different.`}
            tone="dark"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Verified Drivers', desc: 'All drivers are background-verified, licensed, and trained for professional service. Your safety is our top priority at every ride.' },
              { icon: IndianRupee, title: 'Fixed Fares', desc: 'No surge pricing, no hidden charges, no meter tampering. What we quote is what you pay - transparently guaranteed every single time.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Whether your bus arrives at 3 AM or 3 PM, our drivers are always ready. Late night and early morning pickups at no extra charge.' },
              { icon: Gauge, title: 'Instant Pickup', desc: 'Pre-booked cabs ensure zero waiting time. Your driver reaches the bus stand before your bus arrives so you never wait.' },
              { icon: Car, title: 'Clean AC Cabs', desc: 'Step out of a long bus journey into a well-maintained, air-conditioned sedan or SUV. Clean, sanitized, and comfortable every time.' },
              { icon: Headphones, title: '24/7 Customer Support', desc: 'Dedicated helpline for any issues during your journey. Real-time GPS tracking so you and your family know exactly where you are.' },
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className={`relative h-full ${GLASS} p-7 transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40`}>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-7 w-7 text-[#FACF2D]" />
                  </div>
                  <h3 className="font-display-serif mb-3 text-xl font-black text-white transition-colors group-hover:text-amber-300">{feature.title}</h3>
                  <p className="leading-relaxed text-gray-400">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW TO BOOK — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="Simple Process"
            icon={Zap}
            title="How to"
            highlight="Book Your Cab"
            subtitle={`4 simple steps to your comfortable ride from ${stand.name}`}
            tone="light"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {[
              { step: '01', title: 'Call or WhatsApp', desc: 'Reach us at 7668570551 with your bus arrival details, expected time, and your destination.', icon: Phone },
              { step: '02', title: 'Share Bus Details', desc: 'Tell us your bus number, operator name, expected arrival time, and exact drop location.', icon: Bus },
              { step: '03', title: 'Driver Assigned', desc: 'We assign a verified, experienced driver who reaches the bus stand before your bus arrives.', icon: Navigation2 },
              { step: '04', title: 'Enjoy Your Ride', desc: 'Meet your driver at the pickup point and enjoy a comfortable, air-conditioned cab ride to your destination.', icon: Car },
            ].map((item, i) => (
              <div key={i} className="group relative text-center">
                <div className="relative inline-block">
                  <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-[#FACF2D]/50 bg-gradient-to-br from-amber-100 via-amber-50 to-transparent transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-10 w-10 text-amber-600" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#FACF2D] text-sm font-bold text-slate-950 shadow-[0_8px_24px_-8px_rgba(250,207,45,0.7)]">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-display-serif mb-3 text-xl font-black text-slate-900">{item.title}</h3>
                <p className="leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== MAJOR ROUTES — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="Bus Routes Served"
            icon={Route}
            title="Which major bus routes run from"
            highlight={`${stand.name}?`}
            subtitle="Popular bus routes with premium cab alternatives. Skip the bus, travel in comfort with Triveni Cabs."
            tone="dark"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stand.majorRoutes.map((route, i) => (
              <div key={i} className="group relative">
                <div className={`relative overflow-hidden ${GLASS} transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40`}>
                  {/* Route stripe */}
                  <div className="h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" />

                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 transition-colors group-hover:bg-amber-400/20">
                        <Route className="h-6 w-6 text-[#FACF2D]" />
                      </div>
                      <div>
                        <h3 className="font-display-serif text-lg font-black text-white transition-colors group-hover:text-amber-300">{route}</h3>
                        <p className="font-mono text-xs text-gray-500">BUS + CAB AVAILABLE</p>
                      </div>
                    </div>
                    <p className="mb-5 text-sm text-gray-400">Skip the crowded bus. Travel this route in a comfortable, air-conditioned Triveni cab with fixed transparent fares.</p>
                    <a
                      href="tel:7668570551"
                      onClick={() => trackPhoneCall('bus_stand')}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition-colors hover:text-amber-200"
                    >
                      Book Cab Instead <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== SEO CONTENT — warm-light band ====== */}
      <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-4xl sm:px-2 lg:px-4">
          <div className="rounded-2xl border border-amber-200 bg-white p-8 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] md:p-12">
            <h2 className="font-display-serif mb-6 text-2xl font-black text-slate-900 md:text-3xl">
              How do I book a cab from <span className={FOIL}>{stand.name}, {stand.city}?</span>
            </h2>
            <div className="space-y-4 leading-relaxed text-slate-700">
              <p>
                Arriving at {stand.name} in {stand.city}? Finding reliable transportation after a long bus journey can be challenging, especially during late night hours or peak festival seasons. Triveni Cabs is your trusted partner for comfortable, affordable cab service right from {stand.name} to anywhere in {stand.city} and beyond.
              </p>
              <p>
                {stand.name} is one of the busiest bus terminals in {stand.city}, served by major operators including {stand.busOperators.join(', ')}. With buses arriving from routes like {stand.majorRoutes.slice(0, 3).join(', ')}, thousands of passengers need reliable onward transportation daily.
              </p>
              <h3 className="font-display-serif pt-4 text-xl font-black text-slate-900">Why Pre-Book Your Cab from {stand.name}?</h3>
              <p>
                Auto-rickshaws and local taxis at bus stands often overcharge, especially late at night or during festivals. By pre-booking with Triveni Cabs, you get guaranteed fixed fares, a verified driver waiting at the pickup point ({stand.cabWaitingArea}), and a clean air-conditioned vehicle for your comfort after a tiring bus ride.
              </p>
              <p>
                Our most popular destinations from {stand.name} include {stand.destinations.slice(0, 4).map(d => `${d.name} (${d.distance}, ${d.fare})`).join(', ')}. Whether you need a quick city transfer or a long-distance outstation trip, we have you covered 24 hours a day, 7 days a week, 365 days a year.
              </p>
              <h3 className="font-display-serif pt-4 text-xl font-black text-slate-900">Landmarks Near {stand.name}</h3>
              <p>
                {stand.name} is conveniently located near {stand.nearbyLandmarks.join(', ')}. Our drivers are local experts who know the fastest routes to all major destinations in {stand.city}, helping you avoid traffic congestion and reach your destination on time every time.
              </p>
              <h3 className="font-display-serif pt-4 text-xl font-black text-slate-900">Outstation Cabs from {stand.name}</h3>
              <p>
                Beyond city rides, Triveni Cabs also offers outstation cab services from {stand.name}. Popular outstation routes include {stand.majorRoutes.slice(0, 3).join(', ')} and more. All outstation trips come with experienced drivers who are familiar with highway driving and ensure a safe, comfortable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== TRAVEL TIPS — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="Insider Tips"
            title="What are the best travel tips for"
            highlight={`${stand.name}?`}
            subtitle={`Insider tips for a smooth journey from ${stand.name}`}
            tone="dark"
          />
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {stand.tips.map((tip, i) => (
              <div key={i} className={`group flex items-start gap-4 ${GLASS} p-6 transition-all duration-300 hover:border-amber-400/40`}>
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-amber-400/25 bg-amber-400/10">
                  <CheckCircle2 className="h-4 w-4 text-[#FACF2D]" />
                </div>
                <p className="leading-relaxed text-gray-300">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InclusionBadges preset="local" theme="dark" />
      <SectionDivider color="amber" className="my-8" />

      {/* ====== FAQ — warm-light band, two-column grid ====== */}
      <section className="faq-section bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-6xl sm:px-2 lg:px-4">
          <SerifHeading
            eyebrow="FAQs"
            title="Frequently Asked"
            highlight="Questions"
            subtitle={`Common queries about taxi service from ${stand.name}, ${stand.city}`}
            tone="light"
          />

          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {faqList.map((faq, i) => (
              <div key={i} className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${openFaq === i ? 'border-amber-400 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.55)]' : 'border-amber-200 hover:border-amber-300'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="flex w-full items-center justify-between rounded-2xl px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50 md:px-7 md:py-6"
                >
                  <span className="pr-4 text-base font-bold text-slate-900 transition-colors group-hover:text-amber-700 md:text-lg">{faq.question}</span>
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-amber-300 transition-all duration-300 ${openFaq === i ? 'rotate-180 bg-[#FACF2D]' : 'bg-amber-50'}`}>
                    <ChevronDown className={`h-4 w-4 ${openFaq === i ? 'text-slate-950' : 'text-amber-600'}`} />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-[32rem] pb-6 md:pb-7' : 'max-h-0'}`}>
                  <p className={`px-6 leading-relaxed text-slate-600 md:px-7 ${i === 0 ? 'speakable-faq-first faq-answer-1' : ''}`}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== CROSS-SERVICE LINKS — dark band ====== */}
      <section className="px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            title="What are other travel options from"
            highlight={`${stand.city}?`}
            subtitle={`Explore more ways to travel from ${stand.city}`}
            tone="dark"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: `${stand.city} Railway Station Taxi`, href: `/railway-station-taxi`, icon: Route, desc: 'Taxi service at railway stations' },
              { title: `${stand.city} Sightseeing Tours`, href: `/sightseeing/${stand.city.toLowerCase().replace(/\s+/g, '-')}`, icon: MapPin, desc: 'Explore tourist attractions' },
              { title: `One-Way Cab from ${stand.city}`, href: `/one-way-cab`, icon: Car, desc: 'Affordable outstation cabs' },
              { title: 'Tour Packages', href: '/tour-package', icon: Navigation, desc: 'Multi-day curated tours' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={`group ${GLASS} p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 transition-transform duration-300 group-hover:scale-110">
                  <link.icon className="h-6 w-6 text-[#FACF2D]" />
                </div>
                <h3 className="mb-1 font-bold text-white transition-colors group-hover:text-amber-300">{link.title}</h3>
                <p className="text-sm text-gray-400">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====== OTHER BUS STAND TAXI SERVICES ====== */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
          <SerifHeading
            title="Other"
            highlight="Bus Stand Taxi Services"
            subtitle="Explore cab services at other bus stands across India"
            tone="dark"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(allStands)
              .filter(([key]) => key !== slug)
              .slice(0, 6)
              .map(([key, s]) => (
                <Link
                  key={key}
                  href={`/bus-stand-taxi/${key}`}
                  className={`group flex items-center gap-4 ${GLASS} p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-400/40`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-amber-400/25 bg-amber-400/10 transition-transform duration-300 group-hover:scale-110">
                    <Bus className="h-6 w-6 text-[#FACF2D]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white transition-colors group-hover:text-amber-300">{s.name}</h3>
                    <p className="text-sm text-gray-400">{s.city}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0 text-gray-600 transition-all group-hover:translate-x-1 group-hover:text-amber-400" />
                </Link>
              ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/bus-stand-taxi"
              className="inline-flex items-center gap-2 text-lg font-semibold text-amber-300 transition-colors hover:text-amber-200"
            >
              View All Bus Stand Taxi Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ====== FINAL CTA — city photo banner with gold ====== */}
      <section className="relative overflow-hidden px-4 py-24 md:py-32">
        <Image
          src={heroImage}
          alt={`${stand.city} — book your bus stand taxi`}
          fill
          className="object-cover"
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-slate-950/80" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#FACF2D]/70 bg-gradient-to-br from-amber-400/25 via-transparent to-transparent backdrop-blur-xl">
            <Bus className="h-9 w-9 text-[#FACF2D]" />
          </div>
          <h2 className="font-display-serif mb-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Need a Cab from <span className={FOIL}>{stand.name}?</span>
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/65 md:text-xl">
            Book your ride now. Comfortable, safe, and affordable travel from {stand.name}, {stand.city}. Available 24/7 with fixed transparent fares.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:7668570551"
              onClick={() => trackPhoneCall('bus_stand')}
              className={`${GOLD_BTN} ${CTA_SIZE}`}
            >
              <Phone className="h-4 w-4" />
              Call 7668570551
            </a>
            <a
              href="https://wa.me/917668570551"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('bus_stand')}
              className={`${GHOST_BTN} ${CTA_SIZE}`}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
