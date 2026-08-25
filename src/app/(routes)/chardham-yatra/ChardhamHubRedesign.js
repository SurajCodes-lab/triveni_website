'use client';

/**
 * ChardhamHubRedesign — "Sacred Himalayan Pilgrimage"
 * -----------------------------------------------------
 * Ground-up premium redesign of the Char Dham Yatra hub.
 * Palette: midnight indigo/slate base + sacred saffron/marigold + temple gold + snow-white.
 * Built from scratch; reuses the exact props page.js passes to the legacy ChardhamHubClient.
 *
 * SEO/CRO carry-over (do NOT remove):
 *  - .speakable-headline on H1
 *  - .speakable-lead on intro/direct-answer paragraph
 *  - .speakable-faq-first on first FAQ answer
 *  - <SetStickyCta/> with a chardham label
 *  - tracked CTAs via trackPhoneCall / trackWhatsAppClick
 *  - all internal links preserved (/chardham-yatra/{slug}, /tempo-traveller, /chardham-yatra-cost-by-car)
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  MessageCircle,
  WhatsAppIcon,
  Mountain,
  Star,
  ChevronDown,
  ArrowRight,
  CheckCircle,
  XCircle,
  IndianRupee,
  Calendar,
  Users,
  Flame,
  ShieldCheck,
} from '@/components/ui/icons';
import { yatraTypeComparison, peopleAlsoAsk, inclusions, exclusions } from '@/utilis/chardhamYatraData';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';

const PHONE = '7668570551';
const TEL = 'tel:+917668570551';
const wa = (text) => `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;

// Tracked CTA helpers (client component, so wiring analytics is safe)
const onCall = (loc) => trackPhoneCall(loc, PHONE);
const onWa = (loc, msg) => trackWhatsAppClick(loc, msg, 'chardham-hub');

// ---- Sacred ornamental divider (temple-arch / mountain motif) ----
function SacredDivider({ label, tone = 'dark' }) {
  const text = tone === 'light' ? 'text-amber-700/90' : 'text-amber-300/90';
  const line = tone === 'light' ? 'to-amber-600/50' : 'to-amber-400/50';
  return (
    <div className="flex items-center justify-center gap-3 mb-5">
      <span className={`h-px w-10 sm:w-16 bg-gradient-to-r from-transparent ${line}`} />
      <span className={`${text} text-base font-display-serif tracking-[0.2em] whitespace-nowrap`}>
        {label}
      </span>
      <span className={`h-px w-10 sm:w-16 bg-gradient-to-l from-transparent ${line}`} />
    </div>
  );
}

// Comparison table data (price table — mirrors legacy figures)
const comparisonData = [
  { vehicle: 'Swift Dzire (Sedan)', seats: 4, perKm: 12, est12Day: '₹38,400', bestFor: 'Couple / Solo', slug: 'by-sedan', popular: false },
  { vehicle: 'Maruti Ertiga', seats: 6, perKm: 15, est12Day: '₹48,000', bestFor: 'Small Family', slug: 'by-ertiga', popular: false },
  { vehicle: 'Innova Crysta', seats: 7, perKm: 18, est12Day: '₹57,600', bestFor: 'Family', slug: 'by-innova-crysta', popular: true },
  { vehicle: 'Toyota Fortuner', seats: 7, perKm: 25, est12Day: '₹80,000', bestFor: 'VIP / Premium', slug: 'by-fortuner', popular: false },
  { vehicle: '22-Seater Mini Bus', seats: 22, perKm: 32, est12Day: '₹1,02,400', bestFor: 'Medium Group', slug: 'by-bus', popular: false },
  { vehicle: '35-Seater Coach', seats: 35, perKm: 38, est12Day: '₹1,21,600', bestFor: 'Large Group', slug: 'by-bus', popular: false },
  { vehicle: '45-Seater Volvo', seats: 45, perKm: 48, est12Day: '₹1,53,600', bestFor: 'Premium Group', slug: 'by-bus', popular: false },
];

const trustFeatures = [
  { icon: Mountain, title: 'Experienced Hill Drivers', desc: '10+ years on Char Dham mountain roads. They know every blind turn, safe halt and weather window.' },
  { icon: ShieldCheck, title: 'Safety First', desc: 'GPS-tracked vehicles, verified drivers, first-aid and daytime-only driving as mandated on the circuit.' },
  { icon: Star, title: '4.9★ Rated Service', desc: 'Trusted by 10,000+ pilgrims across the Garhwal Himalayas. Rated 4.9/5 for Char Dham travel.' },
  { icon: IndianRupee, title: 'Transparent Pricing', desc: 'Fuel, tolls, state taxes and driver included. You see the full, all-inclusive cost upfront.' },
  { icon: Phone, title: '24/7 Trip Support', desc: 'A dedicated coordinator for your entire yatra. Call anytime, day or night, through the circuit.' },
  { icon: Flame, title: 'Oxygen-Equipped', desc: 'High-altitude support on request for Kedarnath (3,583 m) and Badrinath, plus free registration help.' },
];

export default function ChardhamHubRedesign({
  vehicleHubs = [],
  dhamPages = [],
  packagePages = [],
  allRoutes = [],
  imageBank,
  hubFaqs: hubFaqsProp = [],
  openingDates = [],
  howToBookSteps = [],
}) {
  const [openFaq, setOpenFaq] = useState(0);

  const routePages = allRoutes.filter((r) => r.pageType === 'route').slice(0, 8);

  // Dham reverence map keyed to dhamPages order (Kedarnath, Badrinath, Gangotri, Yamunotri)
  const dhamMeta = {
    Kedarnath: { deity: 'Lord Shiva · Jyotirlinga', accent: 'from-sky-400/60', ring: 'group-hover:ring-sky-300/50', tint: 'text-sky-200' },
    Badrinath: { deity: 'Lord Vishnu · Badrinarayan', accent: 'from-violet-400/60', ring: 'group-hover:ring-violet-300/50', tint: 'text-violet-200' },
    Gangotri: { deity: 'Goddess Ganga · Bhagirathi', accent: 'from-amber-400/60', ring: 'group-hover:ring-amber-300/50', tint: 'text-amber-200' },
    Yamunotri: { deity: 'Goddess Yamuna · Surya Kund', accent: 'from-rose-400/60', ring: 'group-hover:ring-rose-300/50', tint: 'text-rose-200' },
  };

  const heroMosaic = imageBank
    ? [imageBank.temples.yamunotri, imageBank.temples.gangotri, imageBank.temples.kedarnath, imageBank.temples.badrinath]
    : [];

  const faqs = (hubFaqsProp && hubFaqsProp.length > 0) ? hubFaqsProp : [
    { q: 'Which is the best car for Char Dham Yatra?', a: 'The Toyota Innova Crysta (₹18/km) is the most recommended car for Char Dham Yatra — a powerful diesel engine, spacious 7-seater cabin and proven reliability on Himalayan roads.' },
    { q: 'How much does Char Dham Yatra by car cost from Delhi?', a: 'A 12-day Char Dham Yatra by car from Delhi costs from ₹38,400 (Sedan), ₹57,600 (Innova Crysta) and ₹80,000 (Fortuner), including vehicle, fuel, driver and tolls.' },
  ];

  return (
    <div className="min-h-screen bg-[#0b1020] text-white overflow-x-hidden">
      {/* Price/route-aware global mobile sticky bar */}
      <SetStickyCta
        price="From ₹38,400"
        label="Char Dham Yatra 2026"
        whatsappText="Hello! I want to book a vehicle for Char Dham Yatra 2026. Please share the best price."
      />

      {/* ============================================================= */}
      {/* HERO — Himalayan Dawn                                          */}
      {/* ============================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* 4-Dham temple mosaic */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {heroMosaic.map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img}
                alt={['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'][i] + ' Temple — Char Dham Yatra'}
                fill
                priority={i === 2}
                className="object-cover"
                sizes="50vw"
              />
            </div>
          ))}
        </div>

        {/* Dawn gradient — indigo night fading to saffron horizon (photo stays visible) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1020]/80 via-[#161033]/55 to-[#0b1020]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(251,146,60,0.28),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(99,102,241,0.25),transparent_50%)]" />

        {/* Subtle om / sacred-geometry dot motif */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #FACF2D 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FACF2D 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-28">
          <div
            className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/10 px-5 py-2 backdrop-blur-md mb-7"
          >
            <span className="text-amber-200 font-display-serif text-sm tracking-[0.25em]">॥ Char Dham Yatra 2026 ॥</span>
          </div>

          <h1
            className="speakable-headline font-display-serif font-bold leading-[1.05] text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] text-white drop-shadow-2xl mb-6"
          >
            The Sacred Char Dham
            <br />
            <span className="text-gold-foil">
              by Car, SUV &amp; Bus
            </span>
          </h1>

          <p
            className="speakable-lead mx-auto max-w-3xl text-base md:text-lg text-indigo-100/85 leading-relaxed mb-8"
          >
            Book the complete Char Dham Yatra 2026 by road — Sedan from <strong className="text-amber-200">₹38,400</strong>, Innova Crysta <strong className="text-amber-200">₹57,600</strong>, and 22–56 seater buses. The full Yamunotri–Gangotri–Kedarnath–Badrinath circuit in 11–12 days with experienced Himalayan hill drivers.
          </p>

          {/* Dual CTA — above the fold on mobile */}
          <div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
          >
            <a
              href={TEL}
              onClick={() => onCall('chardham_hero')}
              className="sheen group flex items-center justify-center gap-3 rounded-full bg-[#FACF2D] px-8 py-4 font-black text-slate-900 text-lg shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all hover:bg-amber-300 hover:-translate-y-0.5 min-h-[52px] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px] lg:min-h-0"
            >
              <Phone className="w-5 h-5 lg:w-4 lg:h-4" /> Call {PHONE}
            </a>
            <a
              href={wa('Hello! I want to book a car for Char Dham Yatra 2026.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onWa('chardham_hero', 'hero')}
              className="flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 font-bold text-white text-lg backdrop-blur-md transition-all hover:bg-white/20 min-h-[52px] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px] lg:min-h-0"
            >
              <WhatsAppIcon className="w-5 h-5 text-green-400 lg:w-4 lg:h-4" /> WhatsApp Us
            </a>
          </div>

          {/* Trust row */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-indigo-100/80"
          >
            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#FACF2D]" /> 4.9&#9733; Rated</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-amber-300" /> Experienced hill drivers</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> 10,000+ pilgrims</span>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <span className="flex items-center gap-1.5"><Flame className="w-4 h-4 text-rose-300" /> Oxygen-equipped</span>
          </div>
        </div>

        {/* Mountain-peak bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0b1020] to-transparent" />
      </section>

      {/* ============================================================= */}
      {/* QUICK ENQUIRY                                                  */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0b1020] to-[#0e1428]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SacredDivider label="॥ Plan Your Yatra ॥" />
            <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white mb-4">Get a Free Char Dham Quote</h2>
            <p className="text-indigo-200/75 leading-relaxed">
              Share your origin city, travel dates and group size. Our Char Dham team replies within minutes with a transparent, all-inclusive quote — only a small refundable token reserves your vehicle for the 2026 season.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={TEL} onClick={() => onCall('chardham_quote_section')} className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/15 transition min-h-[44px]">
                <Phone className="w-4 h-4 text-amber-300" /> Call {PHONE}
              </a>
              <Link href="/chardham-yatra-cost-by-car" className="inline-flex items-center gap-2 rounded-full bg-amber-400/10 border border-amber-300/25 px-5 py-2.5 text-sm font-semibold text-amber-200 hover:bg-amber-400/15 transition min-h-[44px]">
                <IndianRupee className="w-4 h-4" /> See full cost guide
              </Link>
            </div>
          </div>
          <div className="flex lg:justify-end">
            <QuickEnquiryForm pageType="chardham" />
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* CHOOSE YOUR VEHICLE                                            */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-[#0e1428]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <SacredDivider label="॥ Choose Your Vehicle ॥" />
            <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-white mb-4">A Chariot for Every Pilgrim</h2>
            <p className="text-indigo-300/70 text-lg">From budget sedans to luxury SUVs and group buses — each tuned for Himalayan roads.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleHubs.map((hub, idx) => (
              <div
                key={hub.slug}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-amber-300/30 via-white/10 to-transparent hover:from-amber-300/60 transition-all"
              >
                <div className="relative h-full overflow-hidden rounded-3xl bg-[#0b1020]/90 backdrop-blur">
                  <Link href={`/chardham-yatra/${hub.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={hub.vehicle.image}
                        alt={`${hub.vehicle.name} for Char Dham Yatra`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent" />
                      {/* gold shimmer on hover */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-200/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="font-display-serif text-lg font-bold text-white drop-shadow">{hub.vehicle.name}</span>
                        <span className="rounded-full bg-orange-500/90 px-2.5 py-1 text-xs font-bold text-white flex items-center gap-1">
                          <Users className="w-3 h-3" /> {hub.vehicle.seats}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-amber-300/25 bg-amber-400/10 px-3 py-1 text-xs font-bold text-[#FACF2D]">₹{hub.vehicle.perKm}/km</span>
                        <span className="text-xs text-indigo-300/70">{hub.vehicle.bestFor}</span>
                      </div>
                      <div className="mb-4 flex flex-wrap gap-1.5">
                        {hub.vehicle.features.slice(0, 3).map((f, i) => (
                          <span key={i} className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] text-indigo-200/70">
                            <CheckCircle className="w-3 h-3 text-emerald-400/80" /> {f}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-indigo-300/70">From <span className="font-bold text-[#FACF2D]">{hub.estimatedPrice}</span></span>
                        <span className="flex items-center gap-1 text-sm font-semibold text-orange-300 transition-all group-hover:gap-2">
                          Explore <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                  {/* Per-card prefilled WhatsApp */}
                  <a
                    href={wa(`Hi! I am interested in Char Dham Yatra 2026 by ${hub.vehicle.name} (₹${hub.vehicle.perKm}/km). Please share the package details.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => onWa('chardham_vehicle_card', hub.vehicle.name)}
                    className="mx-5 mb-5 flex items-center justify-center gap-2 rounded-full border border-green-400/25 bg-green-500/10 py-2.5 text-sm font-semibold text-green-300 transition hover:bg-green-500/20 min-h-[44px]"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* THE FOUR SACRED DHAMS                                          */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#0e1428] to-[#0b1020]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <SacredDivider label="॥ The Four Sacred Dhams ॥" />
            <h2 className="font-display-serif text-3xl md:text-5xl font-bold text-white mb-4">Yamunotri · Gangotri · Kedarnath · Badrinath</h2>
            <p className="text-indigo-300/70 text-lg">Four shrines of the Garhwal Himalayas, each opening a different dimension of the divine.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dhamPages.map((dham, idx) => {
              const meta = dhamMeta[dham.destination] || dhamMeta.Kedarnath;
              return (
                <div
                  key={dham.slug}
                >
                  <Link
                    href={`/chardham-yatra/${dham.slug}`}
                    className={`group relative block h-72 md:h-96 overflow-hidden rounded-3xl ring-1 ring-white/10 ${meta.ring} transition-all`}
                  >
                    <Image
                      src={dham.images.hero}
                      alt={`${dham.destination} Temple — Char Dham Yatra by car`}
                      fill
                      className="object-cover transition-transform duration-[900ms] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* gold-trimmed frame */}
                    <div className="pointer-events-none absolute inset-3 rounded-2xl border border-amber-200/20 group-hover:border-amber-200/40 transition-colors" />
                    <div className={`absolute inset-0 bg-gradient-to-t via-black/30 to-transparent from-black/85`} />
                    <div className={`absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b ${meta.accent} to-transparent opacity-0 group-hover:opacity-30 transition-opacity`} />

                    {/* altitude badge */}
                    <span className="absolute top-5 right-5 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                      <Mountain className="w-3.5 h-3.5 text-amber-300" /> {dham.destinationData?.altitude || ''}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className={`mb-1 text-xs font-medium tracking-wide ${meta.tint}`}>{meta.deity}</p>
                      <h3 className="font-display-serif text-2xl md:text-3xl font-bold text-white mb-2">{dham.destination}</h3>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-200 transition-all group-hover:gap-2">
                        Plan your visit <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* POPULAR ROUTES                                                 */}
      {/* ============================================================= */}
      {routePages.length > 0 && (
        <section className="relative px-4 py-16 md:py-24 bg-[#0b1020]">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <SacredDivider label="॥ Popular Routes ॥" />
              <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white mb-3">Most-Booked Char Dham Routes</h2>
              <p className="text-indigo-300/65">Trusted starting points across Delhi, Haridwar, Rishikesh and Dehradun.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {routePages.map((route, idx) => (
                <div
                  key={route.slug}
                >
                  <Link
                    href={`/chardham-yatra/${route.slug}`}
                    className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-amber-300/30 hover:bg-white/[0.06]"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <span className="text-sm font-semibold text-white">{route.origin}</span>
                      <ArrowRight className="w-3 h-3 text-orange-400" />
                      <span className="text-sm font-semibold text-white">{route.destination}</span>
                    </div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-300">{route.vehicle.category}</span>
                      <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-300">{route.duration}</span>
                    </div>
                    <span className="text-sm font-bold text-[#FACF2D]">From {route.estimatedPrice}</span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Packages strip */}
            {packagePages.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="text-sm text-indigo-300/60">Curated packages:</span>
                {packagePages.map((pkg) => (
                  <Link
                    key={pkg.slug}
                    href={`/chardham-yatra/${pkg.slug}`}
                    className="rounded-full border border-amber-300/20 bg-amber-400/5 px-4 py-2 text-sm font-medium text-amber-200 transition hover:bg-amber-400/12 min-h-[40px] inline-flex items-center"
                  >
                    {pkg.title.replace(/ — .*/, '')}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* WHY TRIVENI — TRUST                                            */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-[#0e1428]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <SacredDivider label="॥ Why Triveni Cabs ॥" />
            <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white mb-3">A Yatra in Safe, Experienced Hands</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all hover:border-amber-300/30 hover:bg-white/[0.06]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-400/10 ring-1 ring-amber-300/20">
                    <Icon className="h-6 w-6 text-amber-300" />
                  </div>
                  <h3 className="mb-2 font-display-serif text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-indigo-200/65">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* PRICE COMPARISON TABLE                                         */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SacredDivider label="॥ Vehicle Price Comparison ॥" tone="light" />
            <h2 className="font-display-serif text-3xl md:text-4xl font-black text-slate-900 mb-3">Delhi → Char Dham · 12-Day Round Trip</h2>
            <p className="text-slate-600">Estimated fares for ~3,200 km. Fuel, tolls and driver included; GST (5%) extra.</p>
          </div>

          {/* Desktop gold ledger table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-amber-300/60 bg-white shadow-[0_20px_60px_-30px_rgba(184,134,11,0.35)]">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-amber-300/50 bg-amber-100/60">
                  <th className="px-5 py-4 text-sm font-bold text-amber-900">Vehicle</th>
                  <th className="px-5 py-4 text-sm font-bold text-amber-900">Seats</th>
                  <th className="px-5 py-4 text-sm font-bold text-amber-900">Per Km</th>
                  <th className="px-5 py-4 text-sm font-bold text-amber-900">Est. 12-Day Cost</th>
                  <th className="px-5 py-4 text-sm font-bold text-amber-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-amber-100 transition-colors hover:bg-amber-50/70 ${row.popular ? 'bg-amber-50' : ''}`}
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-slate-900">
                      <Link href={`/chardham-yatra/${row.slug}`} className="hover:text-amber-700 transition">{row.vehicle}</Link>
                      {row.popular && <span className="ml-2 rounded-full bg-[#FACF2D] px-2 py-0.5 text-[10px] font-bold uppercase text-slate-900">Most Popular</span>}
                    </td>
                    <td className="px-5 py-4 text-sm text-slate-600">{row.seats}</td>
                    <td className="px-5 py-4 text-sm font-bold text-amber-700">₹{row.perKm}</td>
                    <td className="px-5 py-4 text-sm font-black text-slate-900 tabular-nums">{row.est12Day}</td>
                    <td className="px-5 py-4 text-sm text-slate-500">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards (no horizontal scroll) */}
          <div className="space-y-3 md:hidden">
            {comparisonData.map((row, idx) => (
              <Link
                key={idx}
                href={`/chardham-yatra/${row.slug}`}
                className={`block rounded-2xl border p-4 bg-white shadow-sm ${row.popular ? 'border-amber-400/70' : 'border-amber-200/60'}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{row.vehicle}</span>
                  {row.popular && <span className="rounded-full bg-[#FACF2D] px-2 py-0.5 text-[10px] font-bold text-slate-900">POPULAR</span>}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{row.seats} seats · ₹{row.perKm}/km · {row.bestFor}</span>
                  <span className="font-black text-amber-700 tabular-nums">{row.est12Day}</span>
                </div>
              </Link>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-300/60 bg-white p-6 shadow-sm sm:flex-row">
            <p className="text-center font-semibold text-slate-900 sm:text-left">Not sure which chariot fits your budget? Get a free, tailored Char Dham quote.</p>
            <div className="flex items-center gap-3">
              <a href={TEL} onClick={() => onCall('chardham_price_table')} className="sheen flex items-center gap-2 rounded-full bg-[#FACF2D] px-6 py-3 text-sm font-black text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-300 min-h-[44px] lg:px-5 lg:py-2 lg:text-[13px] lg:min-h-0">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href={wa('Hi! Please suggest the best vehicle and price for my Char Dham Yatra 2026.')} target="_blank" rel="noopener noreferrer" onClick={() => onWa('chardham_price_table', 'price-help')} className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-800 transition hover:bg-slate-50 min-h-[44px] lg:px-5 lg:py-2 lg:text-[13px] lg:min-h-0">
                <WhatsAppIcon className="w-4 h-4 text-green-600" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* 2026 OPENING DATES                                             */}
      {/* ============================================================= */}
      {openingDates.length > 0 && (
        <section className="relative px-4 py-16 md:py-24 bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <SacredDivider label="॥ 2026 Opening Dates ॥" tone="light" />
              <h2 className="font-display-serif text-3xl md:text-4xl font-black text-slate-900 mb-3">Char Dham Kapat Dates &amp; Registration</h2>
              <p className="text-slate-600">Temple-door opening &amp; closing, altitude and access for each Dham. Registration is mandatory in 2026 — we assist free.</p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-amber-300/60 bg-white shadow-[0_20px_60px_-30px_rgba(184,134,11,0.35)]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-amber-300/50 bg-amber-100/60">
                    <th className="px-4 py-3 font-bold text-amber-900">Dham</th>
                    <th className="px-4 py-3 font-bold text-amber-900">Deity</th>
                    <th className="px-4 py-3 font-bold text-amber-900">Altitude</th>
                    <th className="px-4 py-3 font-bold text-amber-900">Opening 2026</th>
                    <th className="px-4 py-3 font-bold text-amber-900">Closing 2026</th>
                    <th className="px-4 py-3 font-bold text-amber-900">Access</th>
                  </tr>
                </thead>
                <tbody>
                  {openingDates.map((d, i) => (
                    <tr key={i} className="border-b border-amber-100 transition-colors hover:bg-amber-50/70">
                      <td className="px-4 py-4 font-semibold text-slate-900">{d.dham}</td>
                      <td className="px-4 py-4 text-slate-600">{d.deity}</td>
                      <td className="px-4 py-4 font-bold text-amber-700">{d.altitude}</td>
                      <td className="px-4 py-4 text-emerald-700">{d.opening}</td>
                      <td className="px-4 py-4 text-rose-700/80">{d.closing}</td>
                      <td className="px-4 py-4 text-slate-500">{d.trek}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="space-y-3 md:hidden">
              {openingDates.map((d, i) => (
                <div key={i} className="rounded-2xl border border-amber-200/60 bg-white p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-display-serif text-base font-bold text-slate-900">{d.dham}</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-amber-700"><Mountain className="w-3.5 h-3.5" /> {d.altitude}</span>
                  </div>
                  <p className="mb-2 text-xs text-slate-500">{d.deity}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <span className="text-emerald-700"><Calendar className="inline w-3 h-3 mr-1" />Opens: {d.opening}</span>
                    <span className="text-rose-700/80"><Calendar className="inline w-3 h-3 mr-1" />Closes: {d.closing}</span>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">{d.trek}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs text-slate-400">Kedarnath &amp; Badrinath exact dates are announced on Maha Shivratri / Vasant Panchami. All Dhams close around Diwali–Bhai Dooj in early November.</p>
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* HOW TO BOOK                                                    */}
      {/* ============================================================= */}
      {howToBookSteps.length > 0 && (
        <section className="relative px-4 py-16 md:py-24 bg-[#0b1020]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <SacredDivider label="॥ How to Book ॥" />
              <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white mb-3">From Planning to Your First Day on the Road</h2>
              <p className="text-indigo-300/65">Six simple steps to a worry-free Char Dham Yatra by car.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {howToBookSteps.map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-amber-300/30"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 font-bold text-[#1a1206]">{i + 1}</div>
                  <h3 className="mb-2 font-display-serif font-bold text-white">{step.name}</h3>
                  <p className="text-sm leading-relaxed text-indigo-200/65">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* DO DHAM vs CHAR DHAM vs EK DHAM                                */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-[#0e1428]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <SacredDivider label="॥ Compare Circuits ॥" />
            <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white mb-3">Do Dham vs Char Dham vs Ek Dham</h2>
            <p className="text-indigo-300/65">Compare by shrines, days, distance and starting cost.</p>
          </div>

          {/* Desktop */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-amber-300/15 bg-white/[0.03]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-amber-300/20 bg-amber-400/[0.06]">
                  <th className="px-4 py-3 font-semibold text-amber-200/90">Circuit</th>
                  <th className="px-4 py-3 font-semibold text-amber-200/90">Shrines</th>
                  <th className="px-4 py-3 font-semibold text-amber-200/90">Days</th>
                  <th className="px-4 py-3 font-semibold text-amber-200/90">Round Trip (Delhi)</th>
                  <th className="px-4 py-3 font-semibold text-amber-200/90">Ideal For</th>
                  <th className="px-4 py-3 font-semibold text-amber-200/90">From</th>
                </tr>
              </thead>
              <tbody>
                {yatraTypeComparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 transition-colors hover:bg-white/[0.04]">
                    <td className="px-4 py-4 font-semibold text-white">{row.type}</td>
                    <td className="px-4 py-4 text-indigo-200/80">{row.dhams}</td>
                    <td className="px-4 py-4 text-emerald-300/90">{row.days}</td>
                    <td className="px-4 py-4 text-indigo-200/65">{row.distanceFromDelhi}</td>
                    <td className="px-4 py-4 text-indigo-200/65">{row.idealFor}</td>
                    <td className="px-4 py-4 font-bold text-[#FACF2D]">{row.fromCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-3 md:hidden">
            {yatraTypeComparison.map((row, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">{row.type}</span>
                  <span className="font-bold text-[#FACF2D]">{row.fromCost}</span>
                </div>
                <p className="mb-1 text-xs text-indigo-200/70">{row.dhams}</p>
                <p className="text-xs text-indigo-200/60">{row.days} · {row.distanceFromDelhi} · {row.idealFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* INCLUSIONS / EXCLUSIONS                                        */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-[#0b1020]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SacredDivider label="॥ Transparent Fare ॥" />
            <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white mb-3">What’s Included &amp; Not Included</h2>
            <p className="text-indigo-300/65">Exactly what your Char Dham fare covers — no hidden charges.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-emerald-500/20 bg-white/[0.04] p-6 backdrop-blur">
              <h3 className="mb-4 flex items-center gap-2 font-display-serif text-lg font-bold text-emerald-400"><CheckCircle className="h-5 w-5" /> Included</h3>
              <ul className="space-y-3">
                {inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-indigo-100/75"><CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rose-500/20 bg-white/[0.04] p-6 backdrop-blur">
              <h3 className="mb-4 flex items-center gap-2 font-display-serif text-lg font-bold text-rose-400"><XCircle className="h-5 w-5" /> Not Included</h3>
              <ul className="space-y-3">
                {exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-indigo-100/75"><XCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-400" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* PEOPLE ALSO ASK                                                */}
      {/* ============================================================= */}
      {peopleAlsoAsk.length > 0 && (
        <section className="relative px-4 py-16 md:py-24 bg-[#0e1428]">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <SacredDivider label="॥ People Also Ask ॥" />
              <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white">Common Char Dham Questions</h2>
            </div>
            <div className="space-y-4">
              {peopleAlsoAsk.map((paa, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <h3 className="mb-2 text-sm font-semibold text-white md:text-base">{paa.q}</h3>
                  <p className="text-sm leading-relaxed text-indigo-200/70">{paa.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================= */}
      {/* SEO PROSE                                                      */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-[#0b1020]">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 font-display-serif text-3xl font-bold text-white">Complete Guide to Char Dham Yatra by Car, SUV &amp; Bus 2026</h2>
          <div className="space-y-5 text-indigo-100/70 leading-relaxed">
            <p>
              The Char Dham Yatra — <strong className="text-white">Yamunotri, Gangotri, Kedarnath and Badrinath</strong> — is the holiest pilgrimage circuit in Hinduism. Established by Adi Shankaracharya in the 8th century, these four sacred temples in the Garhwal Himalayas of Uttarakhand draw over 30 lakh devotees each year. Triveni Cabs offers the most comprehensive range of vehicles for this divine journey, from budget sedans to luxury SUVs and large group buses.
            </p>
            <p>
              Choosing the right vehicle is crucial. The mountainous terrain of Uttarakhand demands powerful engines, reliable braking and experienced drivers. Our fleet includes the <Link href="/chardham-yatra/by-sedan" className="text-[#FACF2D] underline underline-offset-2">Swift Dzire (₹12/km)</Link> for budget-conscious couples, the <Link href="/chardham-yatra/by-ertiga" className="text-[#FACF2D] underline underline-offset-2">Maruti Ertiga (₹15/km)</Link> for small families, the legendary <Link href="/chardham-yatra/by-innova-crysta" className="text-[#FACF2D] underline underline-offset-2">Toyota Innova Crysta (₹18/km)</Link> as the gold standard, and the premium <Link href="/chardham-yatra/by-fortuner" className="text-[#FACF2D] underline underline-offset-2">Toyota Fortuner (₹25/km)</Link> with 4x4 capability.
            </p>
            <p>
              For group pilgrimages, we offer <Link href="/chardham-yatra/by-bus" className="text-[#FACF2D] underline underline-offset-2">22 to 56-seater AC buses</Link> and <Link href="/tempo-traveller" className="text-[#FACF2D] underline underline-offset-2">12 to 26-seater tempo travellers</Link>. Whether you start from <Link href="/chardham-yatra/delhi-to-chardham-yatra-by-car" className="text-[#FACF2D] underline underline-offset-2">Delhi</Link>, <Link href="/chardham-yatra/haridwar-to-chardham-yatra-by-car" className="text-[#FACF2D] underline underline-offset-2">Haridwar</Link>, <Link href="/chardham-yatra/dehradun-to-chardham-yatra-by-car" className="text-[#FACF2D] underline underline-offset-2">Dehradun</Link> or <Link href="/chardham-yatra/rishikesh-to-chardham-yatra-by-car" className="text-[#FACF2D] underline underline-offset-2">Rishikesh</Link>, our experienced mountain drivers ensure a safe and comfortable yatra. See the full <Link href="/chardham-yatra-cost-by-car" className="text-[#FACF2D] underline underline-offset-2">Char Dham cost by car</Link> breakdown, or call <a href={TEL} onClick={() => onCall('chardham_seo_prose')} className="text-[#FACF2D]">7668570551</a> to book today.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FAQ ACCORDION                                                  */}
      {/* ============================================================= */}
      <section className="relative px-4 py-16 md:py-24 bg-[#0e1428]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <SacredDivider label="॥ Frequently Asked ॥" />
            <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-white">Char Dham Yatra — FAQs</h2>
          </div>

          <div className="grid gap-3 md:grid-cols-2 md:items-start">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left min-h-[44px]"
                  >
                    <span className="pr-2 text-sm font-semibold text-white md:text-base">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 flex-shrink-0 text-[#FACF2D] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <p className={`px-5 pb-5 text-sm leading-relaxed text-indigo-200/70${idx === 0 ? ' speakable-faq-first' : ''}`}>{faq.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/* FINAL CTA                                                      */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-[#FACF2D]" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 30% 40%, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="mb-3 font-display-serif text-base tracking-[0.25em] text-[#3a2606]/80">॥ श्री बद्रीनाथ · केदारनाथ ॥</p>
          <h2 className="mb-6 font-display-serif text-3xl md:text-5xl font-bold text-[#1a1206]">Begin Your Pilgrimage Today</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[#2a1d06]/85">
            Book early to secure your preferred vehicle for the 2026 Char Dham season. Experienced hill drivers, transparent all-inclusive pricing and 24/7 support for a truly divine journey.
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 max-w-md sm:max-w-none mx-auto">
            <a
              href={TEL}
              onClick={() => onCall('chardham_final_cta')}
              className="flex items-center justify-center gap-3 rounded-full bg-[#1a1206] px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:bg-black hover:-translate-y-0.5 min-h-[52px] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px] lg:min-h-0"
            >
              <Phone className="h-5 w-5 text-amber-300" /> Call {PHONE}
            </a>
            <a
              href={wa('Hello! I want to book a vehicle for Char Dham Yatra 2026.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onWa('chardham_final_cta', 'final')}
              className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-[#1a1206] shadow-xl transition-all hover:bg-amber-50 hover:-translate-y-0.5 min-h-[52px] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px] lg:min-h-0"
            >
              <WhatsAppIcon className="h-5 w-5 text-green-600" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
