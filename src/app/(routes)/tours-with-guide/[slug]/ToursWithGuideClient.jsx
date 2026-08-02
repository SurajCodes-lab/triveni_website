'use client';

// ToursWithGuideClient — premium editorial gold-on-dark design system.
// Magazine-style hero, floating polaroid stack, gold-trimmed price card with
// savings ribbon, Mughal-arch ornament dividers, serif accent typography,
// timeline itinerary with image rail, avatar-style reviews.

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnswerBox from '@/components/seo/AnswerBox';
import InlineCTA from '@/components/seo/InlineCTA';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { captureLead } from '@/utilis/captureLead';

const PHONE = '7668570551';
const INTL_PHONE = '917668570551';
const WA_BASE = `https://wa.me/${INTL_PHONE}`;

function fmt(n) {
  return typeof n === 'number' ? `₹${n.toLocaleString('en-IN')}` : n;
}

// Deterministic initials/colour for review avatars
const AVATAR_PALETTE = [
  'from-amber-400 to-yellow-500',
  'from-emerald-400 to-teal-500',
  'from-rose-400 to-pink-500',
  'from-sky-400 to-indigo-500',
  'from-fuchsia-400 to-purple-500',
];
function getAvatar(author) {
  const initials = (author || 'GT').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  let h = 0;
  for (const c of (author || '')) h = ((h << 5) - h) + c.charCodeAt(0) | 0;
  const palette = AVATAR_PALETTE[Math.abs(h) % AVATAR_PALETTE.length];
  return { initials, palette };
}

// UNESCO monument detection for highlights chip
const UNESCO_SITES = new Set([
  'taj mahal', 'agra fort', 'fatehpur sikri', 'red fort', 'humayun', "humayun's tomb",
  'qutub minar', 'jantar mantar', 'amber fort',
]);
function getHighlights(record) {
  const monuments = (record.monuments || []).map(m => (m || '').toLowerCase());
  const hasUnesco = monuments.some(m => Array.from(UNESCO_SITES).some(u => m.includes(u)));
  const durHrs = parseInt((record.duration || '').match(/(\d+)\s*hr/i)?.[1] || 0);
  const isFullDay = durHrs >= 6 || /day|full/i.test(record.duration || '');

  const chips = [];
  if (hasUnesco) chips.push({ icon: 'unesco', label: 'UNESCO sites' });
  chips.push({ icon: 'ticket', label: 'Skip-the-line help' });
  chips.push({ icon: 'camera', label: 'Photo stops' });
  if (isFullDay) chips.push({ icon: 'meal', label: 'Lunch break' });
  if (record.pickupCity || record.city) chips.push({ icon: 'pickup', label: 'Hotel pickup' });
  chips.push({ icon: 'snow', label: 'AC vehicle' });
  return chips.slice(0, 5);
}

// Money-route cross-links per tour cityKey. Every href below is a slug that
// exists in its own data file: sightseeingTours (sightseeingData.js),
// oneWayRoutes (oneWayCabData.js), roundTripRoutes (roundTripData.js) and
// cities (data.js). Do not add a route here without checking it first.
const PLAN_TRIP_LINKS = {
  agra: [
    { kind: 'Sightseeing', label: 'Agra Sightseeing Tours', href: '/sightseeing/agra' },
    { kind: 'One-way', label: 'Delhi to Agra Cab', href: '/one-way-cab/delhi-to-agra' },
    { kind: 'One-way', label: 'Agra to Jaipur Cab', href: '/one-way-cab/agra-to-jaipur' },
    { kind: 'Round trip', label: 'Delhi to Agra Round Trip', href: '/round-trip/delhi-to-agra' },
    { kind: 'City hub', label: 'Agra Taxi Service', href: '/agra' },
  ],
  delhi: [
    { kind: 'Sightseeing', label: 'Delhi Sightseeing Tours', href: '/sightseeing/delhi' },
    { kind: 'One-way', label: 'Delhi to Agra Cab', href: '/one-way-cab/delhi-to-agra' },
    { kind: 'One-way', label: 'Delhi to Jaipur Cab', href: '/one-way-cab/delhi-to-jaipur' },
    { kind: 'Round trip', label: 'Delhi to Jaipur Round Trip', href: '/round-trip/delhi-to-jaipur' },
    { kind: 'City hub', label: 'Delhi Taxi Service', href: '/delhi' },
  ],
  jaipur: [
    { kind: 'Sightseeing', label: 'Jaipur Sightseeing Tours', href: '/sightseeing/jaipur' },
    { kind: 'One-way', label: 'Jaipur to Delhi Cab', href: '/one-way-cab/jaipur-to-delhi' },
    { kind: 'One-way', label: 'Jaipur to Agra Cab', href: '/one-way-cab/jaipur-to-agra' },
    { kind: 'Round trip', label: 'Agra to Jaipur Round Trip', href: '/round-trip/agra-to-jaipur' },
    { kind: 'City hub', label: 'Jaipur Taxi Service', href: '/jaipur' },
  ],
  goldentriangle: [
    { kind: 'Sightseeing', label: 'Delhi Sightseeing Tours', href: '/sightseeing/delhi' },
    { kind: 'Sightseeing', label: 'Agra Sightseeing Tours', href: '/sightseeing/agra' },
    { kind: 'Sightseeing', label: 'Jaipur Sightseeing Tours', href: '/sightseeing/jaipur' },
    { kind: 'Round trip', label: 'Delhi to Agra Round Trip', href: '/round-trip/delhi-to-agra' },
    { kind: 'Round trip', label: 'Delhi to Jaipur Round Trip', href: '/round-trip/delhi-to-jaipur' },
  ],
};

const PLAN_TRIP_AREA = {
  agra: 'Agra',
  delhi: 'Delhi',
  jaipur: 'Jaipur',
  goldentriangle: 'Delhi, Agra and Jaipur',
};

// Deterministic booking pulse (urgency cue)
function getBookingPulse(slug) {
  let h = 0;
  for (const c of slug) h = ((h << 5) - h) + c.charCodeAt(0) | 0;
  const a = Math.abs(h);
  const daysAgo = (a % 5) + 1;            // 1..5 days ago
  const weeklyBookings = ((a >> 3) % 22) + 8;  // 8..29 bookings/week
  return { daysAgo, weeklyBookings };
}

export default function ToursWithGuideClient({
  record,
  things,
  pickups,
  guideCred,
  priceBd,
  faqs,
  reviews,
  reviewCount,
  incExc,
  related,
  directAnswer,
  vehicleComparison = [],
  languageAvailability = [],
  bookingSteps = [],
}) {
  const waText = `Hi Triveni Cabs, I want to book the "${record.headline}". Bundled fare: ${fmt(record.bundledFare)}. Please share availability.`;
  const waMsg = encodeURIComponent(waText);

  // Calculate savings vs separate booking (10% markup assumed when booked apart)
  const separateTotal = Math.round((record.vehicleFare + record.guideFee) * 1.1);
  const savings = Math.max(0, separateTotal - record.bundledFare);

  const highlights = getHighlights(record);
  const pulse = getBookingPulse(record.slug);

  const galleryImages = record.gallery || [];
  const monumentLabels = record.monuments || [];
  const [lightboxIdx, setLightboxIdx] = useState(null);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIdx(null);
      else if (e.key === 'ArrowRight') setLightboxIdx(i => (i + 1) % galleryImages.length);
      else if (e.key === 'ArrowLeft') setLightboxIdx(i => (i - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIdx, galleryImages.length]);

  return (
    <main className="min-h-screen bg-[#0a0a14] text-slate-100 selection:bg-amber-300/30 selection:text-amber-100">
      <SetStickyCta
        price={fmt(record.bundledFare)}
        label={record.headline}
        whatsappText={waText}
      />
      <ScrollProgress />
      <StickyTOC />
      {/* ============= HERO ============= */}
      <section className="relative isolate overflow-hidden border-b border-amber-400/10">
        <div className="absolute inset-0 -z-10">
          <Image
            src={record.heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.15),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_55%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/55 via-[#0a0a14]/85 to-[#0a0a14]" />
          <DotsTexture />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-20">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-2 text-[11px] text-amber-200/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-300 transition">Home</Link>
            <span className="text-amber-300/40">/</span>
            <Link href="/tours-with-guide" className="hover:text-amber-300 transition">Tours With Guide</Link>
            {record.group === 'B' || record.group === 'C' ? (
              <>
                <span className="text-amber-300/40">/</span>
                <Link href="/tours-with-guide/by-guide-language" className="hover:text-amber-300 transition">By Language</Link>
              </>
            ) : (
              <>
                <span className="text-amber-300/40">/</span>
                <span className="text-amber-300/80">{record.city}</span>
              </>
            )}
            <span className="text-amber-300/40">/</span>
            <span className="text-white/90 truncate max-w-[40ch]">{record.headline}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT — copy */}
            <div className="lg:col-span-7">
              <MinistryCrest language={record.guideLanguage} />

              <h1 className="speakable-headline mt-7 font-black leading-[0.98] tracking-tight tg-hero-enter" style={{ animationDelay: '80ms' }}>
                <span className="block text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  {record.headline}
                </span>
                {record.subheadline && (
                  <span className="block mt-3 font-serif italic font-medium text-amber-100/80 text-xl md:text-2xl tracking-tight">
                    {record.subheadline}
                  </span>
                )}
              </h1>

              <p className="speakable-lead mt-6 max-w-2xl text-base md:text-lg text-slate-300/95 leading-relaxed tg-hero-enter" style={{ animationDelay: '180ms' }}>
                {directAnswer || record.intro}
              </p>
              {directAnswer && record.intro && (
                <p className="mt-4 max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed tg-hero-enter" style={{ animationDelay: '230ms' }}>
                  {record.intro}
                </p>
              )}

              {/* Tour highlights chip row */}
              <div className="mt-7 flex flex-wrap gap-2 tg-hero-enter" style={{ animationDelay: '260ms' }}>
                {highlights.map((h, i) => (
                  <span key={i} className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.06] px-3 py-1.5 text-xs font-bold text-amber-100">
                    <HighlightIcon name={h.icon} />
                    {h.label}
                  </span>
                ))}
              </div>

              {/* Stat row */}
              <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 max-w-2xl tg-hero-enter" style={{ animationDelay: '340ms' }}>
                <HeroStat label="Bundled fare" value={fmt(record.bundledFare)} />
                <HeroStat label="Guide fee" value={fmt(record.guideFee)} />
                <HeroStat label="Duration" value={record.duration} />
                <HeroStat label="Vehicle" value={record.vehicle.split(' ')[0]} />
              </div>

              {/* CTA pair */}
              <div className="mt-9 flex flex-wrap items-center gap-3 tg-hero-enter" style={{ animationDelay: '420ms' }}>
                <a
                  href={`tel:+91${PHONE}`}
                  onClick={() => trackPhoneCall('tours_with_guide_hero')}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-amber-300 to-yellow-500 px-7 py-4 font-extrabold text-[#1a1408] shadow-[0_18px_40px_-12px_rgba(251,191,36,0.6)] hover:shadow-[0_22px_50px_-12px_rgba(251,191,36,0.8)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
                >
                  <Icon name="phone" className="w-5 h-5" /> Call {PHONE}
                  <Icon name="arrow" className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition" />
                </a>
                <a
                  href={`${WA_BASE}?text=${waMsg}`}
                  target="_blank"
                  rel="noopener"
                  onClick={() => trackWhatsAppClick('tours_with_guide_hero', waText)}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300/40 bg-emerald-400/5 px-6 py-4 font-extrabold text-emerald-100 hover:bg-emerald-400/15 hover:border-emerald-300/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
                >
                  <Icon name="whatsapp" className="w-5 h-5" /> WhatsApp Quote
                </a>
              </div>

              {/* Mini trust strip */}
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2 text-[11px] uppercase tracking-[0.18em]">
                <TrustChip>{reviewCount}+ recent travellers</TrustChip>
                <TrustChip>4.9 ★ Google &amp; TripAdvisor</TrustChip>
                <TrustChip>No surprise fees</TrustChip>
              </div>
            </div>

            {/* RIGHT — single hero polaroid + photo strip */}
            <div className="lg:col-span-5 relative">
              <HeroVisuals record={record} />
            </div>
          </div>
        </div>

        <ArchDivider />
      </section>

      {/* ============= TRUST MARQUEE ============= */}
      <TrustMarquee />

      {/* ============= ANSWER BOX ============= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <AnswerBox
          theme="guide"
          title="Quick Answer"
          answer={`${record.headline}: bundled fare ${fmt(record.bundledFare)} (vehicle ${fmt(record.vehicleFare)} + ${record.guideLanguage || 'English'}-speaking licensed guide ${fmt(record.guideFee)}). ${record.duration}, ${record.distance}. Hotel pickup included. No surprise fees.`}
          stats={[
            { label: 'Bundled Fare', value: fmt(record.bundledFare) },
            { label: 'Guide Fee', value: fmt(record.guideFee) },
            { label: 'Vehicle', value: `${record.vehicle} · ${record.vehicleSeats} seats` },
            { label: 'Duration', value: record.duration },
          ]}
          lastReviewed={record.lastReviewed}
          source="Triveni Cabs licensed-guide partnership data"
          className="shadow-[0_30px_80px_-30px_rgba(251,191,36,0.3)]"
        />
      </section>

      {/* ============= PRICE CARD + MONUMENT GRID ============= */}
      <section id="price" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Price card */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 self-start">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-400/30 bg-gradient-to-br from-[#1a1408] via-slate-950 to-slate-900 p-7 shadow-[0_30px_80px_-20px_rgba(251,191,36,0.35)]">
              {/* Decorative blooms */}
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 w-40 h-40 rounded-full bg-emerald-400/10 blur-3xl" />
              <CornerOrnaments />

              {savings > 500 && (
                <div className="absolute -top-3 -left-3 rotate-[-6deg]">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 text-[#0a1a14] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-md shadow-lg">
                    Save ₹{savings.toLocaleString('en-IN')}
                  </div>
                </div>
              )}

              <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 font-bold">Bundled price</p>
              <p className="mt-2 font-black leading-none">
                <span className="text-5xl bg-gradient-to-b from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                  {fmt(record.bundledFare)}
                </span>
              </p>
              <p className="mt-2 font-serif italic text-[13px] text-amber-200/70">
                vehicle &amp; licensed guide — one fare
              </p>

              {/* Booking pulse — social-proof urgency */}
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-400/10 border border-emerald-300/25 px-3 py-2">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-[11px] font-bold text-emerald-100 leading-tight">
                  Last booked {pulse.daysAgo === 1 ? 'yesterday' : `${pulse.daysAgo} days ago`} · {pulse.weeklyBookings} this week
                </span>
              </div>

              {/* Earliest pickup */}
              <EarliestPickup />

              <div className="my-5 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

              <div className="space-y-3 text-sm">
                <PriceRow label={priceBd.vehicle.label} amount={priceBd.vehicle.amount} />
                <PriceRow label={priceBd.guide.label} amount={priceBd.guide.amount} />
                <div className="border-t border-amber-400/20 pt-3 flex items-center justify-between text-base font-black">
                  <span className="text-amber-200">Total bundle</span>
                  <span className="text-amber-200">{fmt(record.bundledFare)}</span>
                </div>
                <p className="text-[10px] text-slate-500 italic">{priceBd.excludeMonumentTickets}</p>
              </div>

              <a
                href={`${WA_BASE}?text=${waMsg}`}
                target="_blank"
                rel="noopener"
                onClick={() => trackWhatsAppClick('tours_with_guide_pricecard', waText)}
                className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 px-5 py-3.5 font-extrabold text-[#0a1a14] hover:shadow-[0_20px_40px_-12px_rgba(20,184,166,0.6)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1408]"
              >
                <Icon name="whatsapp" className="w-5 h-5" /> Lock-In on WhatsApp
                <Icon name="arrow" className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href={`tel:+91${PHONE}`}
                onClick={() => trackPhoneCall('tours_with_guide_pricecard')}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-amber-400/40 px-5 py-3.5 font-extrabold text-amber-200 hover:bg-amber-400/10 hover:border-amber-400/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1408]"
              >
                <Icon name="phone" className="w-5 h-5" /> Call {PHONE}
              </a>

              <div className="mt-5 grid grid-cols-3 gap-2 pt-4 border-t border-amber-400/15">
                <Reassurance icon="shield" label="Cancel 24h" />
                <Reassurance icon="fileCheck" label="License proof" />
                <Reassurance icon="zap" label="Confirm <10m" />
              </div>

              {/* Inline lead form */}
              <InlineLeadForm record={record} />
            </div>
          </aside>

          {/* Monument gallery */}
          <div className="lg:col-span-8">
            <SectionTitle eyebrow="What you'll see" title="Monuments on this tour" />
            <MonumentGallery record={record} onOpen={setLightboxIdx} />
          </div>
        </div>
      </section>

      {/* ============= ITINERARY ============= */}
      <section id="itinerary" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
        <SectionTitle eyebrow="The day, hour by hour" title="Day-by-day itinerary" sub="Built around monument opening hours, guide handover and rest breaks." />
        <div className="mt-10 space-y-7">
          {(record.itinerary || []).map((d, i) => (
            <div
              key={i}
              className="relative rounded-[1.6rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/40 p-6 md:p-9 backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-400/[0.08] blur-3xl" />
              <div className="flex items-center gap-5 mb-6">
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center font-black text-[#1a1408] text-xl shadow-[0_12px_30px_-8px_rgba(251,191,36,0.55)]">
                  {i + 1}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/70 font-bold">Day {i + 1}</p>
                  <h3 className="text-xl md:text-2xl font-black text-amber-100 leading-tight">{d.day}</h3>
                </div>
              </div>
              <ol className="relative pl-7 border-l border-amber-400/25 space-y-7">
                {d.stops.map((s, j) => {
                  const gallery = record.gallery || [];
                  const stopImg = gallery.length ? gallery[j % gallery.length] : record.heroImage;
                  return (
                    <li key={j} className="relative">
                      <span className="absolute -left-[34px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-amber-200 to-amber-500 ring-4 ring-amber-400/15" />
                      <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-start">
                        <div>
                          <div className="flex flex-wrap items-baseline gap-3">
                            <span className="text-[11px] font-black tracking-widest uppercase text-amber-200 bg-gradient-to-r from-amber-400/15 to-transparent border border-amber-400/30 rounded px-2.5 py-1">
                              {s.time}
                            </span>
                            <span className="font-bold text-white text-base">{s.stop}</span>
                          </div>
                          <p className="mt-2 text-sm text-slate-300/95 leading-relaxed max-w-2xl">{s.detail}</p>
                        </div>
                        {stopImg && (
                          <div className="relative w-full sm:w-28 sm:h-28 aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden ring-1 ring-amber-400/20 shrink-0 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.7)]">
                            <Image src={stopImg} alt={s.stop} fill sizes="(max-width: 640px) 100vw, 112px" className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/50 to-transparent" />
                          </div>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <ArchDivider />

      {/* ============= VEHICLE + GUIDE PROFILE ============= */}
      <section id="vehicle" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 scroll-mt-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Vehicle */}
          <div className="lg:col-span-7 rounded-[1.6rem] border border-amber-400/15 bg-slate-900/40 overflow-hidden shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-[16/9]">
              <Image
                src={record.vehicleImage}
                alt={record.vehicle}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold">
                  Your Vehicle · AC · Verified Driver
                </span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="font-serif italic text-amber-200/85 text-base">Your ride for the day</p>
                <p className="text-3xl md:text-4xl font-black text-white leading-tight">{record.vehicle}</p>
              </div>
            </div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-5 border-t border-amber-400/10">
              <Spec label="Category" value={record.vehicleCategory} />
              <Spec label="Seats" value={`${record.vehicleSeats} pax`} />
              <Spec label="Bag space" value={record.vehicleBagSpace} />
              <Spec label="AC" value="Yes · all-day" />
              <Spec label="Driver" value="Verified · 5 yr+ exp" />
              <Spec label="GPS" value="Live tracking" />
            </div>
          </div>

          {/* Guide profile card */}
          <div className="lg:col-span-5 relative rounded-[1.6rem] border border-emerald-300/25 bg-gradient-to-br from-emerald-950 via-slate-950 to-slate-900 p-7 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-emerald-400/15 blur-3xl" />
            <CornerOrnaments emerald />

            {/* Avatar + handle */}
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-emerald-300 via-emerald-400 to-teal-500 flex items-center justify-center shadow-[0_14px_36px_-8px_rgba(20,184,166,0.65)] ring-2 ring-emerald-300/40 ring-offset-2 ring-offset-[#0a1a14]">
                  <span className="font-serif font-black text-[#0a1a14] text-[2.4rem] leading-none italic select-none">
                    {(guideCred.spokenLanguage || record.guideLanguage || 'G')[0]}
                  </span>
                  <div className="absolute inset-1.5 rounded-full border border-white/25 pointer-events-none" />
                </div>
                {/* License badge */}
                <div className="absolute -bottom-1.5 -right-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 flex items-center justify-center shadow-lg ring-2 ring-[#0a1a14] text-[#1a1408]">
                  <Icon name="badge" className="w-4 h-4" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300/80 font-bold">Your Guide</p>
                <p className="font-black text-emerald-50 text-xl leading-tight">{guideCred.spokenLanguage || record.guideLanguage || 'English'}-Speaking Licensed</p>
                <p className="font-serif italic text-emerald-200/80 text-sm mt-0.5">Govt. of India approved · Ministry of Tourism</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3.5 text-sm">
              <CredRow label="License" value={guideCred.licenseType} />
              <CredRow label="Experience" value={guideCred.minimumExperience} />
              <CredRow label="Language" value={`${guideCred.spokenLanguage}${guideCred.nativeRendering && guideCred.nativeRendering !== guideCred.spokenLanguage ? ` · ${guideCred.nativeRendering}` : ''}`} />
              <CredRow label="Day rate" value={`₹${guideCred.dailyFee.toLocaleString('en-IN')}/day · fixed`} />
              <CredRow label="Proof" value={guideCred.proofOfLicense} />
            </ul>

            <div className="mt-6 pt-5 border-t border-emerald-300/20">
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-300/80 mb-3">Specialisations</p>
              <div className="flex flex-wrap gap-2">
                {guideCred.extraSkills.map((s, i) => (
                  <span key={i} className="inline-flex items-center rounded-full bg-emerald-400/10 border border-emerald-300/30 text-emerald-100 text-[11px] font-semibold px-3 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============= VEHICLE COMPARISON TABLE ============= */}
      {vehicleComparison.length > 1 && (
        <section id="compare" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
          <SectionTitle
            eyebrow="Pick the right ride"
            title={`Which vehicle for the ${record.city.split(' →')[0].trim()} tour?`}
            sub="Same licensed guide, your choice of vehicle. Bundled fares below include the guide fee. Larger groups simply scale the vehicle, not the guide."
          />
          <VehicleComparisonTable rows={vehicleComparison} guideFee={record.guideFee} />
        </section>
      )}

      {/* ============= INCLUSIONS / EXCLUSIONS ============= */}
      <section id="includes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
        <SectionTitle eyebrow="No surprise fees" title="What's included · what's not" />
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          <div className="relative rounded-[1.4rem] border border-emerald-300/30 bg-gradient-to-br from-emerald-950/60 via-slate-950 to-slate-900 p-7 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-emerald-400/15 blur-2xl" />
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-emerald-200 mb-4">
              <span className="w-7 h-7 rounded-full bg-emerald-400/20 border border-emerald-300/40 flex items-center justify-center text-emerald-200">
                <Icon name="check" className="w-3.5 h-3.5" />
              </span>
              Included in bundle
            </p>
            <ul className="space-y-3">
              {incExc.inclusions.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-emerald-50">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-300 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-[1.4rem] border border-rose-300/20 bg-gradient-to-br from-rose-950/40 via-slate-950 to-slate-900 p-7 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-rose-400/10 blur-2xl" />
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-rose-200 mb-4">
              <span className="w-7 h-7 rounded-full bg-rose-400/15 border border-rose-300/30 flex items-center justify-center text-rose-200">
                <Icon name="x" className="w-3.5 h-3.5" />
              </span>
              Paid separately
            </p>
            <ul className="space-y-3">
              {incExc.exclusions.map((it, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-rose-50/95">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-rose-300/70 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============= MID INLINE CTA ============= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <InlineCTA
          theme="guide"
          headline={`Ready to book ${record.headline.split('—')[0].trim()}?`}
          sub={`Bundled fare ${fmt(record.bundledFare)} · ${record.duration} · Licensed ${record.guideLanguage || 'English'}-speaking guide`}
          context={`tours-with-guide-${record.slug}`}
          waMessage={`Hi Triveni Cabs, I want to book the ${record.headline}. Please share availability and final quote.`}
          variant="full"
          showPrice
          priceFrom={fmt(record.bundledFare)}
        />
      </section>

      {/* ============= THINGS TO DO ============= */}
      <section id="things" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
        <SectionTitle eyebrow="Beyond the monuments" title={`Things to do in ${record.city.split(' →')[0].trim()}`} sub="Curated by our city operations team for after-tour evenings." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {things.map((t, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-amber-400/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 hover:border-amber-300/40 transition"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl bg-amber-400/0 group-hover:bg-amber-400/15 transition" />
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-[11px] font-black mb-3">{i + 1}</span>
              <p className="text-base font-black text-amber-100 mb-2">{t.title}</p>
              <p className="text-sm text-slate-300/95 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============= PICKUP POINTS ============= */}
      <section id="pickup" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
        <SectionTitle eyebrow="Where we pick you up" title={`Pickup in ${(record.pickupCity || record.city).split(' →')[0].trim()}`} />
        <div className="mt-10 grid md:grid-cols-2 gap-3">
          {pickups.map((p, i) => (
            <div key={i} className="group rounded-xl border border-amber-400/10 bg-slate-900/40 px-5 py-4 hover:border-amber-300/40 transition flex items-start gap-3">
              <span className="mt-0.5 w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-200 flex items-center justify-center shrink-0">
                <Icon name="mapPin" className="w-4 h-4" />
              </span>
              <div>
                <p className="font-bold text-amber-100">{p.name}</p>
                <p className="text-xs text-slate-400 mt-0.5">{p.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============= GUIDE LANGUAGE AVAILABILITY ============= */}
      {languageAvailability.length > 0 && (
        <section id="languages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
          <SectionTitle
            eyebrow="Speak your language"
            title={`${record.guideLanguage || 'English'} & other licensed guide languages`}
            sub={`We arrange Ministry of Tourism licensed guides on the Agra–Delhi–Jaipur circuit in ${languageAvailability.length} languages. The ${record.guideLanguage || 'English'}-speaking guide is included in this tour's bundled fare.`}
          />
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {languageAvailability.map((l) => (
              <div
                key={l.name}
                className={`rounded-xl border px-4 py-4 transition ${
                  l.current
                    ? 'border-emerald-300/40 bg-emerald-400/[0.08]'
                    : 'border-amber-400/10 bg-slate-900/40 hover:border-amber-300/40'
                }`}
              >
                <p className="font-black text-amber-100 flex items-center gap-2">
                  {l.name}
                  {l.current && (
                    <span className="inline-flex items-center rounded-full bg-emerald-400/20 border border-emerald-300/40 text-emerald-200 text-[8px] uppercase tracking-widest font-black px-1.5 py-0.5">
                      Included
                    </span>
                  )}
                </p>
                {l.nativeName && l.nativeName !== l.name && (
                  <p className="text-xs text-slate-400 mt-0.5">{l.nativeName}</p>
                )}
                <p className="text-[11px] text-slate-500 mt-1.5">From {fmt(l.dailyFee)}/day · {l.demand} demand</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ============= HOW TO BOOK ============= */}
      {bookingSteps.length > 0 && (
        <section id="howto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
          <SectionTitle
            eyebrow="Booking in minutes"
            title={`How to book the ${record.city.split(' →')[0].trim()} guided tour`}
            sub={`Five steps from enquiry to a confirmed licensed guide and AC ${record.vehicle}.`}
          />
          <ol className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {bookingSteps.map((s, i) => (
              <li
                key={i}
                className="relative rounded-2xl border border-amber-400/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 hover:border-amber-300/40 transition"
              >
                <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 text-[#1a1408] text-sm font-black mb-3 shadow-[0_10px_24px_-8px_rgba(251,191,36,0.6)]">
                  {i + 1}
                </span>
                <p className="text-base font-black text-amber-100 mb-2 leading-tight">{s.name}</p>
                <p className="text-sm text-slate-300/95 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ============= FAQ ============= */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
        <SectionTitle eyebrow="Frequently asked" title="Everything travellers ask" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-2xl border border-amber-400/10 bg-slate-900/40 hover:border-amber-300/40 transition"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 focus-visible:outline-none focus-visible:bg-amber-400/5 rounded-2xl">
                <span className="text-base font-bold text-amber-100">{f.q}</span>
                <span className="shrink-0 w-8 h-8 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 flex items-center justify-center group-open:rotate-45 transition text-xl leading-none font-black">+</span>
              </summary>
              <div className={`px-6 pb-6 text-sm text-slate-300/95 leading-relaxed${i === 0 ? ' speakable-faq-first' : ''}`}>{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ============= REVIEWS ============= */}
      <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-20">
        <ReviewsBlock reviews={reviews} reviewCount={reviewCount} />
      </section>

      {/* ============= RELATED TOURS ============= */}
      {related.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="More from this section" title="Related tours" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {related.map((t) => (
              <Link
                key={t.slug}
                href={`/tours-with-guide/${t.slug}`}
                className="group block rounded-2xl border border-amber-400/10 bg-slate-900/40 overflow-hidden hover:border-amber-300/40 transition shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={t.heroImage}
                    alt={t.headline}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-[1.06] transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="text-[10px] text-amber-300/90 font-bold uppercase tracking-[0.2em]">{t.city}</p>
                    <p className="text-base font-black text-white truncate leading-tight mt-0.5">{t.headline}</p>
                  </div>
                </div>
                <div className="px-4 py-3.5 flex items-center justify-between border-t border-amber-400/10">
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">From</p>
                    <p className="text-base font-black text-amber-200">{fmt(t.bundledFare)}</p>
                  </div>
                  <span className="text-xs text-slate-400">{t.duration}</span>
                  <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-200 group-hover:bg-amber-400 group-hover:text-[#1a1408] transition font-extrabold">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ============= PLAN YOUR TRIP (money-route cross-links) ============= */}
      <PlanYourTrip cityKey={record.cityKey} />

      {/* ============= REASSURANCE BAND ============= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-400/15 bg-gradient-to-br from-[#1a1408]/60 via-slate-950 to-slate-900/40 p-6 sm:p-8">
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/[0.08] blur-3xl" />
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80 text-center mb-5">Why book Triveni</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            <ReassuranceItem icon="badge" title="GST registered" sub="Compliant invoice" />
            <ReassuranceItem icon="shield" title="24-hour cancel" sub="Full refund window" />
            <ReassuranceItem icon="fileCheck" title="License proof" sub="Shared on WhatsApp" />
            <ReassuranceItem icon="zap" title="4-min reply SLA" sub="Avg. response time" />
          </div>
        </div>
      </section>

      {/* ============= FINAL BANNER CTA ============= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-24">
        <InlineCTA
          theme="guide"
          headline="Lock in your guide-included tour today"
          sub={`Same bundled fare on call, WhatsApp or web — ${fmt(record.bundledFare)}, no surprise charges, license proof at confirmation.`}
          context={`tours-with-guide-final-${record.slug}`}
          waMessage={`Hi Triveni Cabs, I'm ready to book "${record.headline}" for ${fmt(record.bundledFare)}.`}
          variant="banner"
        />
      </section>

      {/* ============= LIGHTBOX ============= */}
      {lightboxIdx !== null && galleryImages[lightboxIdx] && (
        <Lightbox
          images={galleryImages}
          labels={monumentLabels}
          index={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx(i => (i - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setLightboxIdx(i => (i + 1) % galleryImages.length)}
        />
      )}
    </main>
  );
}

function Lightbox({ images, labels, index, onClose, onPrev, onNext }) {
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        aria-label="Close"
      >
        <Icon name="x" className="w-6 h-6" />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white items-center justify-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl w-full max-h-[85vh] aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-amber-300/20 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.9)]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image src={images[index]} alt={labels[index] || `Image ${index + 1}`} fill sizes="80vw" className="object-cover" priority />
        {labels[index] && (
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300/80">Stop {index + 1} of {images.length}</p>
            <p className="text-2xl md:text-3xl font-black text-white leading-tight mt-1">{labels[index]}</p>
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white items-center justify-center transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
          </svg>
        </button>
      )}

      {/* Mobile prev/next dots */}
      {images.length > 1 && (
        <div className="sm:hidden absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2" onClick={(e) => e.stopPropagation()}>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onPrev && onNext /* noop wrapper */}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition ${i === index ? 'bg-amber-300 w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// PRESENTATIONAL COMPONENTS
// ============================================================

function HeroStat({ label, value }) {
  return (
    <div className="border-l border-amber-400/25 pl-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-1 font-black text-xl md:text-2xl bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-transparent leading-none truncate">
        <CountUp value={value} />
      </p>
    </div>
  );
}

function parseCountable(value) {
  if (typeof value !== 'string') return { number: NaN, prefix: '', suffix: '' };
  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  if (!match) return { number: NaN, prefix: '', suffix: '' };
  const [, prefix, numStr, suffix] = match;
  const number = parseFloat(numStr.replace(/,/g, ''));
  const isFloat = numStr.includes('.');
  return { prefix: prefix || '', number, suffix: suffix || '', isFloat };
}

function CountUp({ value }) {
  const parts = useMemo(() => parseCountable(value), [value]);
  const [n, setN] = useState(Number.isFinite(parts.number) ? 0 : null);
  const ref = useRef(null);

  useEffect(() => {
    if (!Number.isFinite(parts.number) || !ref.current) return;
    let raf;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 900;
        const tick = (t) => {
          const p = Math.min(1, (t - start) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(parts.number * eased);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        obs.disconnect();
      }
    });
    obs.observe(ref.current);
    return () => { obs.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, [parts.number]);

  if (!Number.isFinite(parts.number)) return <span ref={ref}>{value}</span>;
  const display = parts.isFloat ? n.toFixed(1) : Math.round(n).toLocaleString('en-IN');
  return <span ref={ref}>{parts.prefix}{display}{parts.suffix}</span>;
}

function TrustChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="w-1 h-1 rounded-full bg-amber-300/80" />
      <span className="text-slate-400 font-semibold">{children}</span>
    </span>
  );
}

function MinistryCrest({ language }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <div className="inline-flex items-stretch rounded-full border border-amber-300/35 bg-gradient-to-r from-amber-500/[0.12] via-amber-400/[0.06] to-transparent overflow-hidden">
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#1a1408]">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
            <path d="M12 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 14.77 6.8 17.5l.99-5.78L3.58 7.62l5.82-.85L12 1.5z" />
          </svg>
        </div>
        <div className="px-4 py-1.5 flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/70 font-bold">Licensed by</span>
          <span className="text-xs font-extrabold text-amber-100">Ministry of Tourism · Govt. of India</span>
        </div>
      </div>
      {language && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/35 bg-emerald-400/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" /> {language}-speaking
        </span>
      )}
    </div>
  );
}

function HeroVisuals({ record }) {
  const tiles = (record.gallery || []).slice(0, 3);
  const labels = record.monuments || [];
  return (
    <div className="relative h-[420px] sm:h-[480px] lg:h-[520px] w-full mt-8 lg:mt-0">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-emerald-500/10 blur-3xl rounded-full" />
      {/* Main feature image */}
      <div className="absolute top-0 right-0 w-[78%] aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-amber-300/20 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <Image
          src={record.heroImage}
          alt={record.headline}
          fill
          sizes="(max-width: 1024px) 80vw, 30vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/70 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="font-serif italic text-amber-200/85 text-sm">Featured stop</p>
          <p className="text-xl font-black text-white">{labels[0] || record.city}</p>
        </div>
        {/* Top-left corner badge */}
        <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-md border border-amber-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold">
          <span className="text-amber-300">★</span> Bestseller
        </div>
      </div>
      {/* Floating polaroid (bottom-left) */}
      {tiles[1] && (
        <div className="absolute bottom-4 left-0 w-[55%] rounded-xl bg-[#fef9e7] p-2 rotate-[-5deg] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-black/10 hover:rotate-0 transition duration-500">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-slate-900">
            <Image src={tiles[1]} alt={labels[1] || 'stop'} fill sizes="40vw" className="object-cover" />
          </div>
          <p className="px-1 pt-1.5 font-serif italic text-[12px] text-[#3a2a08] leading-tight">{labels[1] || 'Monument stop'}</p>
        </div>
      )}
      {/* Small accent polaroid (top-left) */}
      {tiles[2] && (
        <div className="absolute top-12 -left-2 w-[38%] rounded-xl bg-[#fef9e7] p-2 rotate-[4deg] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)] ring-1 ring-black/10 hover:rotate-0 transition duration-500 hidden sm:block">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-900">
            <Image src={tiles[2]} alt={labels[2] || 'stop'} fill sizes="30vw" className="object-cover" />
          </div>
        </div>
      )}
    </div>
  );
}

function MonumentGallery({ record, onOpen }) {
  const imgs = (record.gallery || []).slice(0, 6);
  const labels = record.monuments || [];
  if (imgs.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="grid grid-cols-6 grid-rows-2 gap-3 auto-rows-fr h-[460px]">
        {/* Feature large */}
        <button type="button" onClick={() => onOpen?.(0)} className="col-span-6 sm:col-span-4 row-span-2 group relative overflow-hidden rounded-2xl ring-1 ring-amber-400/15 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
          <Image src={imgs[0]} alt={labels[0] || `${record.city} monument`} fill sizes="(max-width: 640px) 100vw, 60vw" className="object-cover group-hover:scale-105 transition duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />
          <CornerOrnaments />
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-amber-300/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold opacity-0 group-hover:opacity-100 transition">
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="M21 21l-4.3-4.3M11 8v6M8 11h6" /></svg>
            View larger
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300/90">Featured stop</p>
            <p className="font-serif italic text-amber-200/90 text-sm mt-1">A few minutes with</p>
            <p className="text-2xl md:text-3xl font-black text-white leading-tight">{labels[0] || `${record.city} monument`}</p>
          </div>
        </button>
        {/* Small tiles */}
        {imgs.slice(1, 5).map((img, i) => (
          <button type="button" onClick={() => onOpen?.(i + 1)} key={i} className="col-span-3 sm:col-span-2 row-span-1 group relative overflow-hidden rounded-xl ring-1 ring-amber-400/10 hover:ring-amber-300/40 transition text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300">
            <Image src={img} alt={labels[i + 1] || `Stop ${i + 2}`} fill sizes="(max-width: 1024px) 33vw, 20vw" className="object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/60 to-transparent">
              <p className="text-[11px] font-bold text-amber-200 truncate">{labels[i + 1] || `Stop ${i + 2}`}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Monument chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {(record.monuments || []).map((m, i) => (
          <span key={i} className="inline-flex items-center gap-1.5 rounded-full bg-amber-400/8 border border-amber-400/25 text-amber-100 text-xs font-semibold px-3 py-1.5">
            <span className="text-amber-300 text-[9px]">●</span>{m}
          </span>
        ))}
      </div>
    </div>
  );
}

function PriceRow({ label, amount }) {
  return (
    <div className="flex items-center justify-between text-slate-300">
      <span className="text-sm">{label}</span>
      <span className="font-bold text-white">{typeof amount === 'number' ? `₹${amount.toLocaleString('en-IN')}` : amount}</span>
    </div>
  );
}

function VehicleComparisonTable({ rows, guideFee }) {
  return (
    <div className="mt-10 overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-slate-900/40">
      {/* Desktop / tablet table */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">
            Vehicle options for this guided tour compared by seats, vehicle fare, bundled fare and ideal traveller group
          </caption>
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80 font-bold border-b border-amber-400/20">
              <th scope="col" className="px-5 py-4">Vehicle</th>
              <th scope="col" className="px-5 py-4">Seats</th>
              <th scope="col" className="px-5 py-4">Luggage</th>
              <th scope="col" className="px-5 py-4">Bundled fare</th>
              <th scope="col" className="px-5 py-4">Best for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((v, i) => (
              <tr
                key={v.slug}
                className={`border-b border-amber-400/10 last:border-0 text-sm ${v.current ? 'bg-amber-400/[0.07]' : 'hover:bg-white/[0.02]'} transition`}
              >
                <th scope="row" className="px-5 py-4 font-bold text-amber-100">
                  <span className="flex items-center gap-2">
                    {v.name}
                    {v.current && (
                      <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[9px] uppercase tracking-widest font-black px-2 py-0.5">
                        This tour
                      </span>
                    )}
                  </span>
                  <span className="block text-[11px] text-slate-500 font-medium mt-0.5">{v.category}</span>
                </th>
                <td className="px-5 py-4 text-slate-300">{v.seats} pax</td>
                <td className="px-5 py-4 text-slate-400 text-xs">{v.bagSpace}</td>
                <td className="px-5 py-4 font-black text-amber-200">{fmt(v.bundledFare)}</td>
                <td className="px-5 py-4 text-slate-300 text-xs">{v.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="sm:hidden divide-y divide-amber-400/10">
        {rows.map((v) => (
          <div key={v.slug} className={`p-5 ${v.current ? 'bg-amber-400/[0.07]' : ''}`}>
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="font-bold text-amber-100 flex items-center gap-2">
                  {v.name}
                  {v.current && (
                    <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[8px] uppercase tracking-widest font-black px-1.5 py-0.5">
                      This tour
                    </span>
                  )}
                </p>
                <p className="text-[11px] text-slate-500">{v.category} · {v.seats} pax</p>
              </div>
              <p className="font-black text-amber-200 shrink-0">{fmt(v.bundledFare)}</p>
            </div>
            <p className="text-xs text-slate-400 mt-2">{v.bestFor}</p>
          </div>
        ))}
      </div>

      <p className="px-5 py-3 text-[11px] text-slate-500 italic border-t border-amber-400/10">
        Bundled fare = vehicle + the same licensed guide ({fmt(guideFee)} guide fee). Monument tickets are paid at the gate.
      </p>
    </div>
  );
}

function InlineLeadForm({ record }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    captureLead({
      name,
      phone,
      date,
      pageType: 'tours_with_guide',
      toCity: record.headline || '',
    });
    const msg = `Hi Triveni Cabs, I'd like to book "${record.headline}" (bundled ${typeof record.bundledFare === 'number' ? `₹${record.bundledFare.toLocaleString('en-IN')}` : record.bundledFare}).\n\nName: ${name}\nWhatsApp: ${phone}\nPreferred date: ${date || 'flexible'}\n\nPlease confirm availability and final fare.`;
    const url = `https://wa.me/${INTL_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener');
  };

  const inputCls = 'w-full rounded-lg bg-slate-950/60 border border-amber-400/15 px-3 py-2.5 text-sm text-amber-50 placeholder:text-slate-500 focus:border-amber-400/60 focus:bg-slate-950/80 focus:outline-none focus-visible:ring-1 focus-visible:ring-amber-400/50 transition';

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full text-left flex items-center justify-between rounded-xl border border-amber-400/15 bg-slate-950/40 px-4 py-3 text-xs font-bold text-amber-100 hover:border-amber-400/40 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/50"
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <Icon name="fileCheck" className="w-4 h-4 text-amber-300" />
          Or get a tailored quote
        </span>
        <span className={`text-amber-300 transition-transform text-lg leading-none ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <form onSubmit={onSubmit} className="mt-2 space-y-2 rounded-xl border border-amber-400/20 bg-slate-950/60 p-3 animate-fade-in-up">
          <label className="block">
            <span className="sr-only">Your name</span>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className={inputCls} />
          </label>
          <label className="block">
            <span className="sr-only">WhatsApp number</span>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp number" required type="tel" pattern="[0-9+\s-]{8,}" className={inputCls} />
          </label>
          <label className="block">
            <span className="sr-only">Preferred date</span>
            <input value={date} onChange={(e) => setDate(e.target.value)} placeholder="Preferred date (or 'flexible')" className={inputCls} />
          </label>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-300 to-yellow-500 px-4 py-2.5 text-[#1a1408] text-sm font-extrabold hover:shadow-[0_14px_30px_-10px_rgba(251,191,36,0.6)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1408]"
          >
            <Icon name="whatsapp" className="w-4 h-4" />
            Send to WhatsApp
          </button>
          <p className="text-[10px] text-slate-500 text-center">We reply in under 4 minutes during business hours.</p>
        </form>
      )}
    </div>
  );
}

function EarliestPickup() {
  const [day, setDay] = useState('tomorrow');
  useEffect(() => {
    const t = new Date();
    t.setDate(t.getDate() + 1);
    const wd = t.toLocaleDateString('en-IN', { weekday: 'long' });
    setDay(wd);
  }, []);
  return (
    <div className="mt-3 flex items-center gap-2 rounded-lg bg-slate-900/40 border border-amber-400/15 px-3 py-2">
      <Icon name="zap" className="w-3.5 h-3.5 text-amber-300 shrink-0" />
      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">Earliest pickup</span>
      <span className="text-[11px] text-amber-200 font-bold ml-auto">{day} · 06:00</span>
    </div>
  );
}

function ReassuranceItem({ icon, title, sub }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
        <Icon name={icon} className="w-5 h-5" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-black text-amber-100 leading-tight">{title}</p>
        <p className="text-[11px] text-slate-400 mt-0.5">{sub}</p>
      </div>
    </div>
  );
}

function Reassurance({ icon, label }) {
  return (
    <div className="flex flex-col items-center text-center gap-1">
      <span className="text-amber-300"><Icon name={icon} className="w-4 h-4" /></span>
      <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-tight">{label}</span>
    </div>
  );
}

// Cross-links from a guided tour out to the transfer / sightseeing money pages
// for the same city, for travellers who want the car without the guide bundle.
function PlanYourTrip({ cityKey }) {
  const links = PLAN_TRIP_LINKS[cityKey];
  if (!links?.length) return null;
  const area = PLAN_TRIP_AREA[cityKey] || 'your route';
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
      <SectionTitle
        eyebrow="Plan your trip"
        title="Travelling without a guide?"
        sub={`Point-to-point transfers, round trips and sightseeing packages across ${area} — same fleet, same drivers, guide optional.`}
      />
      <div className="mt-8 flex flex-wrap gap-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group inline-flex items-center gap-3 rounded-xl border border-amber-400/15 bg-slate-900/40 px-4 py-3 hover:border-amber-300/45 hover:bg-amber-400/[0.06] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.18em] text-amber-300/70">{l.kind}</span>
            <span className="text-sm font-bold text-slate-200 group-hover:text-white transition">{l.label}</span>
            <span className="text-amber-300/60 group-hover:translate-x-0.5 group-hover:text-amber-200 transition">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight leading-[1.02]">
        <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {sub && (
        <p className="mt-3 font-serif italic text-slate-400 text-base md:text-lg leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300/70 font-bold">{label}</p>
      <p className="mt-1 font-bold text-amber-100">{value}</p>
    </div>
  );
}

function CredRow({ label, value }) {
  return (
    <li className="flex items-start justify-between gap-3 border-b border-emerald-300/15 pb-3 last:border-0">
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-300/70 w-28 flex-shrink-0 mt-0.5">{label}</span>
      <span className="text-sm text-emerald-50 text-right font-medium">{value}</span>
    </li>
  );
}

function DotsTexture() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: 'radial-gradient(rgba(251,191,36,0.9) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
  );
}

function ArchDivider() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12" aria-hidden>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/30" />
        <svg viewBox="0 0 80 32" className="w-20 h-8 text-amber-400/60" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <path d="M2 30 Q 2 4 40 4 Q 78 4 78 30" />
          <path d="M10 30 Q 10 12 40 12 Q 70 12 70 30" />
          <circle cx="40" cy="6" r="1.6" fill="currentColor" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/30" />
      </div>
    </div>
  );
}

const TOC_ITEMS = [
  { id: 'price',     label: 'Price' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'vehicle',   label: 'Vehicle & Guide' },
  { id: 'compare',   label: 'Compare vehicles' },
  { id: 'includes',  label: "What's included" },
  { id: 'things',    label: 'Things to do' },
  { id: 'pickup',    label: 'Pickup' },
  { id: 'howto',     label: 'How to book' },
  { id: 'faq',       label: 'FAQ' },
  { id: 'reviews',   label: 'Reviews' },
];

function ReviewsBlock({ reviews, reviewCount }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? reviews : reviews.slice(0, 3);
  const hiddenCount = Math.max(0, reviews.length - 3);
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <SectionTitle eyebrow={`Rated 4.9 / 5 · ${reviewCount}+ travellers`} title="Recent reviews" />
        <div className="inline-flex items-center gap-3 text-sm">
          <div className="flex text-2xl text-amber-300">{'★★★★★'}</div>
          <span className="font-black text-white text-xl">4.9</span>
          <span className="text-slate-400">/ 5</span>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5">
        {visible.map((r, i) => {
          const av = getAvatar(r.author);
          return (
            <div key={i} className="relative rounded-2xl border border-amber-400/10 bg-gradient-to-br from-slate-900 via-slate-900/60 to-slate-900/30 p-6 overflow-hidden">
              <span className="absolute top-3 right-4 text-7xl text-amber-300/10 font-serif leading-none select-none">&ldquo;</span>
              <div className="flex items-center gap-1 mb-4 text-amber-300 text-sm">
                {Array.from({ length: r.stars }).map((_, k) => <span key={k}>★</span>)}
              </div>
              <p className="text-sm text-slate-200 italic leading-relaxed relative">&ldquo;{r.body}&rdquo;</p>
              <div className="mt-5 pt-5 border-t border-amber-400/10 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${av.palette} flex items-center justify-center text-[#1a1408] font-black text-sm shrink-0`}>
                  {av.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-amber-200 text-sm truncate">{r.author}</p>
                  <p className="text-[11px] text-slate-500">{r.date} · Verified booking</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {hiddenCount > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded(v => !v)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-amber-400/40 bg-amber-400/[0.06] px-6 py-3 font-extrabold text-amber-200 hover:bg-amber-400/15 hover:border-amber-400/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
          >
            {expanded ? 'Show fewer reviews' : `Read ${hiddenCount} more reviews`}
            <svg className={`w-4 h-4 transition ${expanded ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}

function TrustMarquee() {
  const items = [
    'Featured in Lonely Planet',
    'TripAdvisor 4.9 ★',
    '10,000+ travellers served',
    'Ministry of Tourism · Licensed',
    'GST Registered',
    'No surprise fees',
    '24×7 WhatsApp support',
    'Cancel up to 24 hrs',
  ];
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-amber-400/15 bg-gradient-to-r from-[#1a1408]/50 via-slate-950 to-[#1a1408]/50 py-3 mt-12">
      <div className="flex tg-marquee whitespace-nowrap will-change-transform">
        {doubled.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 shrink-0">
            <svg className="w-3 h-3 text-amber-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2z" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.3em] text-amber-100/90 font-bold">{it}</span>
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a14] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
    </div>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max <= 0 ? 0 : Math.max(0, Math.min(1, h.scrollTop / max)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-amber-400/[0.08] z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.6)]"
        style={{ width: `${progress * 100}%`, transition: 'width 100ms linear' }}
      />
    </div>
  );
}

function StickyTOC() {
  const [active, setActive] = useState('price');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );
    TOC_ITEMS.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden xl:block fixed right-5 top-1/2 -translate-y-1/2 z-30" aria-label="Page sections">
      <ul className="space-y-2 py-2">
        {TOC_ITEMS.map(item => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center gap-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold transition focus-visible:outline-none ${
                  isActive ? 'text-amber-200' : 'text-slate-500 hover:text-amber-300'
                }`}
              >
                <span className={`h-px transition-all duration-300 ${
                  isActive ? 'w-10 bg-amber-300' : 'w-4 bg-slate-600 group-hover:w-8 group-hover:bg-amber-400'
                }`} />
                <span className={`transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Generic icon registry — used across CTAs, reassurance, pickup markers.
function Icon({ name, className = 'w-5 h-5' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', 'aria-hidden': true };
  switch (name) {
    case 'phone':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" /></svg>;
    case 'whatsapp':
      return <svg {...common} fill="currentColor" stroke="none"><path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8 8 0 01-2.4-1.5 8.8 8.8 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5.3-.4.1-.4-.1-.4-.7-1.6c-.2-.4-.4-.3-.5-.3H7.9a1 1 0 00-.7.3 3 3 0 00-1 2.3c0 1.3 1 2.6 1.1 2.8s2 3 4.7 4.2l1.6.6 1.5.1c.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2zM12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2z" /></svg>;
    case 'message':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.4 8.4 0 01-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z" /></svg>;
    case 'shield':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>;
    case 'fileCheck':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path strokeLinecap="round" strokeLinejoin="round" d="M14 2v6h6M9 15l2 2 4-4" /></svg>;
    case 'zap':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
    case 'mapPin':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case 'check':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>;
    case 'x':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" /></svg>;
    case 'arrow':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" /></svg>;
    case 'badge':
      return <svg {...common}><path strokeLinecap="round" strokeLinejoin="round" d="M3.85 8.62a4 4 0 014.78-4.78 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.78 4.78 4 4 0 01-6.74 0 4 4 0 01-4.78-4.78 4 4 0 010-6.74z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /></svg>;
    default:
      return null;
  }
}

function HighlightIcon({ name }) {
  const cls = 'w-3.5 h-3.5 text-amber-300';
  switch (name) {
    case 'unesco':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-8h6v8" />
        </svg>
      );
    case 'ticket':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v3a2 2 0 010 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 010-4V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
        </svg>
      );
    case 'camera':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <circle cx="12" cy="13" r="3.5" />
        </svg>
      );
    case 'meal':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 3v7a3 3 0 003 3v8M7 13a3 3 0 003-3V3M14 3c-1 4 0 7 3 7v11" />
        </svg>
      );
    case 'pickup':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'snow':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path strokeLinecap="round" d="M12 2v20M4 6l16 12M20 6L4 18" />
        </svg>
      );
    default:
      return <span className="w-2 h-2 rounded-full bg-amber-300" />;
  }
}

function CornerOrnaments({ emerald }) {
  const c = emerald ? 'text-emerald-300/40' : 'text-amber-300/40';
  return (
    <>
      <svg className={`absolute top-3 left-3 w-8 h-8 ${c}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <path d="M2 14 V 2 H 14" />
        <path d="M2 8 H 8 V 2" />
      </svg>
      <svg className={`absolute bottom-3 right-3 w-8 h-8 ${c}`} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <path d="M30 18 V 30 H 18" />
        <path d="M30 24 H 24 V 30" />
      </svg>
    </>
  );
}
