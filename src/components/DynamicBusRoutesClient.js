'use client';

// ============================================================================
// DynamicBusRoutesClient — "Triveni Aurora" redesign (Aug 2026)
// Premium dark-slate + gold photo-forward template behind /bus-routes/[route].
// Signature element: interactive BUS-SIZE SELECTOR fed by the route's own
// fleet data (never hardcoded rates — ranges shown exactly as billed, the
// estimate uses the range's lower bound and is labelled "from ≈").
// One-way is billed as a round trip — the coach returns to base either way.
// No framer-motion, no type animations: CSS-only transitions (INP-friendly).
// All JSON-LD for this template is emitted by page.js and is untouched.
// ============================================================================

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Bus,
  ArrowRight, TrendingUp, Sparkles, Info, Navigation, ChevronLeft,
  MapPinned, Sun
} from '@/components/ui/icons';

import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { generateUniqueIntro } from '@/utilis/uniqueIntroGenerator';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import InclusionBadges from '@/components/shared/InclusionBadges';
// Rich UI + ranking-lift components — wired May 23 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';
import CorridorLinks from '@/components/seo/CorridorLinks';
import QuickAnswer from '@/components/seo/QuickAnswer';
import Section from '@/components/ui/Section';
import AuroraHeading from '@/components/ui/AuroraHeading';
import RouteLine from '@/components/ui/RouteLine';

const TRUST_ROW = '4.9★ · Since 2015 · No hidden charges · Pay after trip';

// First number in a "₹30 - ₹35/km" style string → 30. Null when absent so the
// UI can say "quote on request" instead of inventing a figure.
const lowRateOf = (bus) => {
  const m = String(bus?.ratePerKm || '').match(/\d+/);
  return m ? parseInt(m[0], 10) : null;
};
const seatsOf = (bus) => {
  const m = String(bus?.capacity || bus?.name || '').match(/\d+/);
  return m ? parseInt(m[0], 10) : null;
};

// "Contact for details", "On request" and friends are absences wearing a value's
// clothes. Facts that resolve to null are dropped, never rendered as a placeholder.
// Real figures are resolved server-side in page.js via resolveRouteMetrics.
const PLACEHOLDER_VALUE = /^(contact|on request|on-request|tbd|n\/?a|-|—)/i;
const realValue = (v) => {
  const s = String(v ?? '').trim();
  return s && !PLACEHOLDER_VALUE.test(s) ? s : null;
};

export default function DynamicBusRoutesClient({ data }) {
  const { routeSlug, origin, destination, routeData, localSightseeing, fleet, routeDescription, relatedRoutes, corridorLinks = [] } = data;

  const fleetList = useMemo(() => (Array.isArray(fleet) ? fleet : []), [fleet]);

  // Distance / drive time for the compact fact strips. Prefer the clean dataset
  // figure resolved server-side ("530 km"); routeDescription values can be prose-y.
  // Null means no source knows it — callers must omit the fact entirely.
  const routeDistance = realValue(routeData?.distance) || realValue(routeDescription?.distance);
  const routeDuration = realValue(routeData?.duration) || realValue(routeDescription?.travelTime);

  // Phase 3: unique, entity-rich, slug-seeded intro so each bus route page reads differently.
  const uniqueIntro = generateUniqueIntro({
    origin,
    destination,
    distance: routeDistance,
    time: routeDuration,
    highway: '',
    attractions: Array.isArray(localSightseeing)
      ? localSightseeing.slice(0, 2).map((s) => (typeof s === 'string' ? s : (s.title || s.name || s.place || ''))).filter(Boolean)
      : [],
    vehicleType: 'AC bus or mini-bus',
    slug: routeSlug,
  });

  // Signature bus-size selector — defaults to the size most groups pick.
  const defaultIdx = Math.max(0, fleetList.findIndex((b) => b?.popular));
  const [selectedIdx, setSelectedIdx] = useState(defaultIdx);
  const selectedBus = fleetList[selectedIdx] || fleetList[0] || null;
  const [openFaq, setOpenFaq] = useState(null);

  // Seat range and entry rate are read off this route's own fleet so the answer copy
  // can never drift from the size selector and fare chart further down the page.
  const seatCounts = fleetList.map(seatsOf).filter((n) => Number.isFinite(n)).sort((a, b) => a - b);
  const minSeats = seatCounts[0] || 22;
  const maxSeats = seatCounts[seatCounts.length - 1] || 56;
  const rateNumbers = fleetList
    .flatMap((b) => String(b?.ratePerKm || '').match(/\d+/g) || [])
    .map(Number)
    .filter((n) => Number.isFinite(n));
  const minRate = rateNumbers.length ? Math.min(...rateNumbers) : 30;
  const maxRate = rateNumbers.length ? Math.max(...rateNumbers) : 65;

  // Fare estimate for the selected coach — one-way billed both ways
  // (distance × 2 × lower bound of the per-km range), labelled "from ≈".
  const distanceKmNum = useMemo(() => {
    const n = parseFloat(String(routeDistance || '').replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [routeDistance]);
  const selectedLowRate = lowRateOf(selectedBus);
  const selectedEstimate = distanceKmNum && selectedLowRate
    ? Math.round(distanceKmNum * 2 * selectedLowRate)
    : null;

  // Hero CTA: pre-fill WhatsApp with the route and the coach size the enquiry is for.
  const heroWhatsAppHref = `https://wa.me/917668570551?text=${encodeURIComponent(
    `Hi, I need a bus from ${origin} to ${destination}. Please share fares for ${minSeats} to ${maxSeats} seater coaches and availability.`
  )}`;
  const selectedWhatsAppHref = `https://wa.me/917668570551?text=${encodeURIComponent(
    `Hi, I want to book the ${selectedBus?.name || 'bus'} for ${origin} to ${destination}. Please share rates.`
  )}`;

  // FAQ content — preserved in full (mirrors the FAQPage JSON-LD in page.js).
  const faqItems = [
    {
      question: `What is the distance from ${origin} to ${destination}?`,
      answer: routeDistance
        ? `The distance from ${origin} to ${destination} is approximately ${routeDistance}. Our luxury buses cover this route comfortably with experienced drivers.`
        : `The distance from ${origin} to ${destination} varies based on the route. Please contact us at +91-7668570551 for exact details and the best route options.`
    },
    {
      question: `How long does it take from ${origin} to ${destination} by bus?`,
      answer: routeDuration
        ? `The journey from ${origin} to ${destination} takes approximately ${routeDuration} by luxury bus, depending on traffic and route conditions. We ensure comfortable travel throughout the journey.`
        : `The journey time from ${origin} to ${destination} depends on various factors including traffic and route. Please contact us at +91-7668570551 for accurate travel time estimates.`
    },
    {
      question: `What bus sizes are available for ${origin} to ${destination} route?`,
      answer: `We offer multiple bus sizes for ${origin} to ${destination} route including 22, 25, 27, 32, 35, 41, 45, 49, 52, and 56 seater buses. All buses are AC equipped with pushback seats, entertainment systems, and modern amenities for comfortable group travel.`
    },
    {
      question: `How much does it cost to rent a bus from ${origin} to ${destination}?`,
      answer: `Bus rental rates from ${origin} to ${destination} start from ₹${minRate}/km for a ${minSeats} seater mini bus and go up to ₹${maxRate}/km for a ${maxSeats} seater luxury Volvo. A one-way drop is billed at the same rate as a round trip, since the coach returns to base either way. Final cost depends on bus size, season and booking duration. Contact us at +91-7668570551 for exact quotes.`
    },
    {
      question: `Can I book a bus online for ${origin} to ${destination}?`,
      answer: `Yes, you can book a bus online for ${origin} to ${destination} through our website or by calling +91-7668570551. We provide instant confirmation, flexible booking options, and 24/7 customer support for all your bus rental needs.`
    },
    {
      question: `What amenities are included in the bus from ${origin} to ${destination}?`,
      answer: `All buses on the ${origin} to ${destination} route include AC, pushback/reclining seats, an entertainment system, GPS tracking, charging points, reading lights, and spacious luggage storage. Premium Volvo coaches offer additional amenities like WiFi and an onboard washroom for long journeys.`
    },
    {
      question: `Is advance booking required for the ${origin} to ${destination} bus?`,
      answer: `We recommend booking 7-15 days in advance for the ${origin} to ${destination} route, especially during peak season, weddings, and festival dates. However, same-day and next-day bookings are also accepted subject to availability. Call +91-7668570551 to confirm.`
    },
    {
      question: `What is the cancellation policy for ${origin} to ${destination} bus booking?`,
      answer: `Cancellations made 48 or more hours before departure receive a full refund. Cancellations within 24-48 hours receive a 50% refund, and there is no refund for cancellations within 24 hours of departure. Terms may vary during peak season and for special events.`
    }
  ];

  return (
    <article className="min-h-screen bg-slate-950 text-white" itemScope itemType="https://schema.org/TravelAction">
      <SetStickyCta
        price={`From ₹${minRate}/km`}
        label={`${data.city || 'Bus'} Bus Hire`}
        whatsappText={`Hi, I want to book a bus from ${origin} to ${destination}. Please share availability and fare.`}
      />

      {/* ============================================ */}
      {/* HERO — real coach photography, Aurora scrim   */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Coach photo backdrop — vivid, scrim only over the text zone */}
        <div className="absolute inset-0">
          <Image
            src="/images/bus/hero_section_image.webp"
            alt={`Luxury bus rental service from ${origin} to ${destination} — 22 to 56 seater AC coaches for group travel`}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10">
          {/* Top row: back link + route type badge */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-10">
            <Link
              href="/bus-routes"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/70 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-amber-400"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              All Bus Routes
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-amber-400 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              {routeData.type?.toUpperCase() || 'PREMIUM ROUTE'}
            </span>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div className="min-w-0">
              {/* Giant route title */}
              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                <span className="text-gradient-gold">{origin}</span>
                <span className="mx-2 text-white/40 sm:mx-3">→</span>
                <span className="text-gradient-gold">{destination}</span>
                <span className="mt-2 block text-lg font-bold text-white/75 sm:text-2xl">
                  Bus on Hire · {minSeats}–{maxSeats} Seater AC Coaches
                </span>
              </h1>

              {/* Fare-first subline */}
              <p className="mt-4 text-base leading-relaxed text-slate-300/90 sm:text-lg">
                From <strong className="text-amber-400">₹{minRate}/km</strong> for a {minSeats} seater AC mini bus
                — fuel, driver and AC included. One-way is billed as a round trip, since the coach
                returns to base either way. Private charter for your group, not seat booking.
              </p>

              {/* Route line chip */}
              <div className="glass-dark mt-5 max-w-md rounded-2xl px-4 py-3">
                <RouteLine from={origin} to={destination} tone="dark" />
                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-amber-400" /> {routeDistance || 'Distance on request'}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-amber-400" /> {routeDuration || 'Drive time on request'}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Bus className="h-3.5 w-3.5 text-amber-400" /> {fleetList.length} coach sizes
                  </span>
                </div>
              </div>

              {/* Trust row */}
              <p className="mt-4 text-xs font-semibold tracking-wide text-white/70 sm:text-sm">
                {TRUST_ROW}
              </p>

              {/* Mobile-only compact CTA row; desktop keeps the full-size buttons below. */}
              <div className="mt-5 grid w-full max-w-xs grid-cols-2 gap-2 md:hidden">
                <a
                  href={heroWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('bus_route_hero')}
                  className="glow-gold flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-amber-400 text-sm font-black text-slate-900 shadow-lg transition-transform active:scale-95"
                  aria-label={`WhatsApp Triveni Cabs for a ${origin} to ${destination} bus`}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:+917668570551"
                  onClick={() => trackPhoneCall('bus_route_hero')}
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur-sm transition-transform active:scale-95"
                  aria-label={`Call Triveni Cabs for a ${origin} to ${destination} bus`}
                >
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </div>

              {/* Full-size CTAs (desktop) */}
              <div className="mt-6 hidden flex-wrap gap-3 md:flex">
                <a
                  href={heroWhatsAppHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('bus_route_hero_primary')}
                  className="sheen glow-gold inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-400 px-8 py-4 text-base font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
                  aria-label={`Contact Triveni Cabs on WhatsApp for ${origin} to ${destination} bus booking`}
                >
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </a>
                <a
                  href="tel:+917668570551"
                  onClick={() => trackPhoneCall('bus_route_hero_primary')}
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
                  aria-label={`Call Triveni Cabs for ${origin} to ${destination} bus booking`}
                >
                  <Phone className="h-5 w-5" />
                  Call +91 76685 70551
                </a>
              </div>
            </div>

            {/* Enquiry form — QuickEnquiryForm is dark-only, sits on glass */}
            <div className="border-gradient-gold glass-dark rounded-3xl p-4 sm:p-5">
              <QuickEnquiryForm
                fromCity={origin}
                toCity={destination}
                pageType="bus"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SIGNATURE — BUS-SIZE SELECTOR + fare estimate */}
      {/* ============================================ */}
      <Section tone="dark" pad="sm" className="border-t border-white/5">
        <AuroraHeading
          tone="dark"
          eyebrow="Choose your coach"
          title={`Which bus size should I book for ${origin} to`}
          highlight={`${destination}?`}
          subtitle={`Tap a coach to see its rate for this route. Every bus is AC with pushback seats and a professional driver — from a ${minSeats} seater mini bus at ₹${minRate}/km up to a ${maxSeats} seater luxury Volvo.`}
        />

        {/* Photo cards — one per coach size the fleet actually has */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" role="tablist" aria-label="Bus size options">
          {fleetList.map((bus, idx) => {
            const active = idx === selectedIdx;
            const seats = seatsOf(bus);
            return (
              <button
                key={bus.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedIdx(idx)}
                className={`group relative overflow-hidden rounded-2xl text-left transition-all duration-300 ${
                  active
                    ? 'glass-dark glow-gold ring-2 ring-amber-400'
                    : 'glass-dark ring-1 ring-white/10 hover:ring-white/25'
                }`}
              >
                {/* Fixed-height photo — no CLS */}
                <div className="relative h-24 w-full sm:h-28">
                  <Image
                    src={bus.image}
                    alt={`${bus.name} — ${bus.capacity}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 12vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  {bus.popular && (
                    <span className="absolute left-2 top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wide text-slate-900">
                      Popular
                    </span>
                  )}
                  {bus.luxury && (
                    <span className="absolute left-2 top-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wide text-amber-400 ring-1 ring-amber-400/40 backdrop-blur-sm">
                      Luxury
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className={`text-sm font-black leading-tight sm:text-base ${active ? 'text-amber-400' : 'text-white'}`}>
                    {seats ? `${seats} Seater` : bus.name}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-400">{bus.seaterType || bus.capacity}</p>
                  <p className="mt-1.5 text-xs font-bold text-white sm:text-sm">
                    {bus.ratePerKm || 'Quote on request'}
                  </p>
                </div>
                {active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-400" aria-hidden />}
              </button>
            );
          })}
        </div>

        {/* Selected coach — live fare estimate panel */}
        {selectedBus && (
          <div className="border-gradient-gold glass-dark mt-6 overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              {/* Photo side */}
              <div className="relative h-52 w-full sm:h-64 lg:h-full lg:min-h-[340px]">
                <Image
                  src={selectedBus.image}
                  alt={`${selectedBus.name} for ${origin} to ${destination}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent lg:hidden" />
              </div>

              {/* Detail + estimate side */}
              <div className="flex flex-col p-5 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-black text-white sm:text-2xl">{selectedBus.name}</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-400">
                      <Users className="h-4 w-4 text-amber-400" /> {selectedBus.capacity}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-amber-400/10 px-2.5 py-1 text-xs font-bold text-amber-400 ring-1 ring-amber-400/30">
                    <Star className="h-3 w-3" fill="currentColor" /> 4.9
                  </span>
                </div>

                {/* Ideal-for + feature chips */}
                <p className="mt-3 text-sm text-slate-300">
                  <span className="font-bold text-white">Ideal for:</span> {selectedBus.idealFor}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {(selectedBus.features || []).map((f, i) => (
                    <span key={i} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Fare figures — straight off the route's fleet data */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/[0.04] p-3.5">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">Per km</p>
                    <p className="mt-0.5 text-lg font-black text-amber-400 sm:text-xl">{selectedBus.ratePerKm || 'On request'}</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] p-3.5">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">Minimum</p>
                    <p className="mt-0.5 text-sm font-bold text-white sm:text-base">{selectedBus.minimumCharge || 'On request'}</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] p-3.5">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">Driver allowance</p>
                    <p className="mt-0.5 text-sm font-bold text-white sm:text-base">{selectedBus.driverAllowance || 'On request'}</p>
                  </div>
                  <div className="rounded-2xl bg-amber-400/10 p-3.5 ring-1 ring-amber-400/25">
                    <p className="text-[0.65rem] uppercase tracking-wide text-amber-400/90">
                      {selectedEstimate ? 'Est. this route' : 'Exact fare'}
                    </p>
                    <p className="mt-0.5 text-lg font-black text-white sm:text-xl">
                      {selectedEstimate ? `from ≈ ₹${selectedEstimate.toLocaleString('en-IN')}` : 'Quote on request'}
                    </p>
                    {selectedEstimate && (
                      <p className="mt-0.5 text-[0.65rem] text-slate-300/80">
                        {Math.round(distanceKmNum)} km billed both ways
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  Rate covers the coach, fuel, AC and driver. Tolls, parking, state permits and the driver
                  night allowance are extra at actuals. A one-way drop is billed as a round trip.
                </p>

                {/* CTAs — compact on desktop, full-width tap targets on mobile */}
                <div className="mt-5 flex flex-col gap-2.5 lg:flex-row lg:items-center">
                  <a
                    href={selectedWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('bus_routes')}
                    className="sheen glow-gold inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.01] active:scale-95 lg:w-auto lg:py-2 lg:text-[13px]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book {seatsOf(selectedBus) || ''} Seater on WhatsApp
                  </a>
                  <a
                    href="tel:+917668570551"
                    onClick={() => trackPhoneCall('bus_routes')}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 lg:w-auto lg:py-2 lg:text-[13px]"
                  >
                    <Phone className="h-4 w-4" />
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Machine-readable fare chart — same data as the selector above */}
        {fleetList.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-black text-white md:text-2xl">
              {origin} to {destination} bus hire fare chart
            </h3>
            {/* Mobile: stacked cards — no sideways scrolling */}
            <div className="space-y-3 md:hidden">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Bus charter rates from {origin} to {destination}, 2026 — one way and round trip are priced the same
              </p>
              {fleetList.map((bus) => (
                <div key={`fare-card-${bus.id}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  {bus.image && (
                    <div className="relative h-28 w-full">
                      <Image
                        src={bus.image}
                        alt={`${bus.name} — ${bus.capacity}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 0px"
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" aria-hidden />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-bold text-white">{bus.name}</p>
                    <dl className="mt-2.5 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Capacity</dt>
                        <dd className="text-right text-sm text-slate-300">{bus.capacity}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Rate per km</dt>
                        <dd className="text-right text-sm font-bold text-amber-400">{bus.ratePerKm}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Minimum charge</dt>
                        <dd className="text-right text-sm text-slate-300">{bus.minimumCharge}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Driver allowance</dt>
                        <dd className="text-right text-sm text-slate-300">{bus.driverAllowance}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: true semantic table, fits its container */}
            <div className="hidden overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:block">
              <table className="w-full text-left text-sm text-slate-200">
                <caption className="px-4 pb-3 pt-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Bus charter rates from {origin} to {destination}, 2026 — one way and round trip are priced the same
                </caption>
                <thead className="bg-white/5 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">Bus</th>
                    <th scope="col" className="px-4 py-3 font-bold">Capacity</th>
                    <th scope="col" className="px-4 py-3 font-bold">Rate per km</th>
                    <th scope="col" className="px-4 py-3 font-bold">Minimum charge</th>
                    <th scope="col" className="px-4 py-3 font-bold">Driver allowance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {fleetList.map((bus) => (
                    <tr key={`fare-${bus.id}`} className="transition-colors hover:bg-white/5">
                      <th scope="row" className="px-4 py-3 text-left font-semibold text-white">
                        <span className="flex items-center gap-3">
                          {bus.image && (
                            <span className="relative block h-10 w-16 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
                              <Image
                                src={bus.image}
                                alt=""
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </span>
                          )}
                          {bus.name}
                        </span>
                      </th>
                      <td className="px-4 py-3 text-slate-300">{bus.capacity}</td>
                      <td className="px-4 py-3 font-bold text-amber-400">{bus.ratePerKm}</td>
                      <td className="px-4 py-3 text-slate-300">{bus.minimumCharge}</td>
                      <td className="px-4 py-3 text-slate-300">{bus.driverAllowance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Rates include fuel, driver and AC. Tolls, parking, state permits and interstate taxes are extra. A bus charter costs the same for a one-way drop as for a round trip. For a group under 26, a{' '}
              <Link href={`/tempo-traveller/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`} className="font-semibold text-amber-400 hover:text-amber-300">
                tempo traveller at ₹20–28/km
              </Link>{' '}
              usually works out cheaper per seat.
            </p>
          </div>
        )}
      </Section>

      {/* ============================================ */}
      {/* AEO QUICK ANSWER — above-the-fold extractable answer */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-12 pt-4 sm:px-6">
        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl">
          {/* Serif display heading carries the question; QuickAnswer keeps the answer */}
          <h2 className="font-display-serif mb-5 text-balance text-center text-[1.6rem] font-black leading-[1.15] tracking-tight text-white sm:text-4xl">
            {origin} to {destination} bus:{' '}
            <span className="text-gradient-gold">what does it cost to hire one?</span>
          </h2>
          <div className="border-gradient-gold glass-dark rounded-3xl p-2 sm:p-3">
            <QuickAnswer
              tone="dark"
              answer={`${origin} to ${destination} bus hire: ${minSeats}–${maxSeats} seater AC coaches from ₹${minRate}/km, rising to about ₹${maxRate}/km for the largest luxury Volvo${routeDistance ? `, covering roughly ${routeDistance}` : ''}${routeDuration ? ` in around ${routeDuration}` : ''}. One-way is billed as a round trip, since the coach returns to base either way — there is no one-way discount on bus charter. For groups under 26, a tempo traveller (₹20–28/km depending on seater) usually works out cheaper per seat. Every coach is AC with pushback seats and the rate covers fuel and driver; tolls, parking, state permits and the driver night allowance are billed extra. This is a private charter for your group, not a scheduled seat-booking service.`}
              facts={[
                { label: 'Distance', value: routeDistance },
                { label: 'Drive time', value: routeDuration },
                { label: `From (${minSeats} seater)`, value: `₹${minRate}/km` },
                { label: 'Seating', value: `${minSeats} to ${maxSeats} seats` },
              ].filter((f) => realValue(f.value))}
            />
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* ============================================ */}
      {/* WARM LIGHT BAND — trust strip + direct answer */}
      {/* ============================================ */}
      <section className="border-b border-amber-100 bg-gradient-to-b from-amber-50/70 via-white to-white py-8 text-slate-900 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Trust strip */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 md:gap-10">
            <span className="flex items-center gap-1.5 font-medium">
              <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" /> 4.9★ Google Rating
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="h-4 w-4 text-blue-500" /> 10,000+ Trips
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="h-4 w-4 text-green-500" /> Since 2015
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="h-4 w-4 text-red-500" /> 500+ Cities
            </span>
          </div>

          {/* DIRECT ANSWER BOX (AEO/Featured Snippet Target) */}
          <div className="direct-answer rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 md:p-8" data-snippet-type="direct-answer">
            <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl">
              {origin} to {destination} bus hire — what does it cost in 2026?
            </h2>
            <div className="key-info mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: 'Distance', value: routeDistance },
                { label: 'Duration', value: routeDuration },
                { label: 'Starting Rate', value: `₹${minRate}/km`, accent: true },
                { label: 'Bus Sizes', value: `${minSeats}-${maxSeats} Seat` },
              ].filter((f) => realValue(f.value)).map((f) => (
                <div key={f.label} className="rounded-xl border border-amber-100 bg-white p-4 text-center">
                  <p className="mb-1 text-xs font-semibold uppercase text-slate-500">{f.label}</p>
                  <p className={`text-xl font-black ${f.accent ? 'text-green-700' : 'text-slate-900'}`}>{f.value}</p>
                </div>
              ))}
            </div>
            <p className="faq-answer speakable-lead text-base leading-relaxed text-slate-700 md:text-lg">
              <strong>{origin} to {destination} bus hire</strong> starts at <strong>₹{minRate}/km</strong> for a {minSeats} seater AC mini bus and
              runs to about <strong>₹{maxRate}/km</strong> for a {maxSeats} seater luxury Volvo.
              {routeDistance && ` The route covers approximately ${routeDistance}`}{routeDuration && ` and takes around ${routeDuration}`}.
              A one-way drop is billed as a round trip, because the coach returns to base either way.
              Triveni Cabs runs {minSeats} to {maxSeats} seater AC coaches with pushback seats,
              entertainment systems, GPS tracking and professional drivers — ideal for corporate outings, wedding groups,
              pilgrimages and school trips. For a group under 26, a <strong>tempo traveller at ₹20–28/km</strong> depending on seater
              usually costs less per seat. Book by calling <strong>+91-7668570551</strong> or WhatsApp for instant confirmation.
              4.9★ rated with 10,000+ group trips completed.
            </p>
            {uniqueIntro && (
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {uniqueIntro}
              </p>
            )}
          </div>

          {/* SEO-rich introduction — kept with the answer box on the light band */}
          <div className="mt-8 text-center">
            <p className="mb-4 text-base leading-relaxed text-gray-700 md:text-lg">
              Looking for reliable <strong>bus rental services from {origin} to {destination}</strong>? Book our premium <strong>luxury bus hire</strong> service featuring <strong>22 seater mini buses</strong> to <strong>56 seater Volvo coaches</strong>.
              {routeDistance && routeDuration && (
                <> Covering <strong>{routeDistance}</strong> in approximately <strong>{routeDuration}</strong>, </>
              )}
              our <strong>AC buses</strong> are perfect for corporate events, weddings, pilgrimage tours, and group travel.
            </p>
            <p className="text-base leading-relaxed text-gray-700 md:text-lg">
              All vehicles feature <strong>pushback seats</strong>, entertainment systems, <strong>GPS tracking</strong>, and spacious luggage storage. Travel with experienced <strong>professional drivers</strong> ensuring safe and comfortable journeys on the <strong>{origin} to {destination} route</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ROUTE GUIDE — route-specific content          */}
      {/* ============================================ */}
      {routeDescription && (
        <Section tone="aurora">
          {/* Serif editorial heading — ties this band to the hero display face */}
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-xs">
              <span className="h-px w-6 bg-amber-500/60" />
              Route guide
            </span>
            <h2 className="font-display-serif text-balance text-[1.6rem] font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              {origin} to {destination} <span className="text-gradient-gold">Road Trip Guide</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-300/80 sm:text-base lg:text-lg">
              Everything you need to know about the {origin} to {destination} route by bus.
            </p>
          </div>

          {/* Journey stat tiles */}
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {[
              { icon: Clock, label: 'Travel Time', value: routeDescription.travelTime },
              { icon: Navigation, label: 'Distance', value: routeDescription.distance, foil: true },
              { icon: Sun, label: 'Best Season', value: routeDescription.bestSeason, wide: true },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-amber-400/35 ${stat.wide ? 'col-span-2 md:col-span-1' : ''}`}
              >
                <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-amber-400/10 blur-2xl" aria-hidden />
                <span className="relative inline-flex rounded-xl bg-amber-400/15 p-2.5 ring-1 ring-amber-400/20">
                  <stat.icon className="h-5 w-5 text-amber-400" />
                </span>
                <p className="relative mt-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/45">
                  {stat.label}
                </p>
                <p className={`relative mt-1 font-black leading-tight ${stat.foil ? 'text-gold-foil text-xl sm:text-2xl' : 'text-sm text-white sm:text-base'}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Content grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 md:gap-8">
            {/* Highlights + Bus Types Card */}
            <div className="glass-dark rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/30 md:p-8">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
                <span className="rounded-xl bg-amber-400/15 p-2">
                  <MapPinned className="h-5 w-5 text-amber-400" />
                </span>
                Route Overview
              </h3>
              <p className="mb-6 text-base leading-relaxed text-white/70">
                {routeDescription.highlights}
              </p>

              {/* Recommended Bus Types */}
              {routeDescription.busTypes && (
                <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
                  <p className="mb-1 flex items-center gap-2 text-sm font-bold text-amber-400">
                    <Bus className="h-4 w-4" />
                    Recommended Bus Types
                  </p>
                  <p className="text-sm text-white/70">{routeDescription.busTypes}</p>
                </div>
              )}
            </div>

            {/* Stops + Travel Tips Card */}
            <div className="glass-dark rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/30 md:p-8">
              <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
                <span className="rounded-xl bg-amber-400/15 p-2">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </span>
                Popular Stops En-Route
              </h3>
              <div className="relative mb-6">
                {/* Gold lane line running the length of the journey */}
                <span
                  className="absolute bottom-5 left-[15px] top-5 w-0.5 opacity-70"
                  style={{ backgroundImage: 'repeating-linear-gradient(180deg, #FACF2D 0 12px, transparent 12px 24px)' }}
                  aria-hidden
                />
                <ol className="relative space-y-3">
                  {routeDescription.stops.map((stop, index) => {
                    const isFirst = index === 0;
                    const isLast = index === routeDescription.stops.length - 1;
                    return (
                      <li key={index} className="group relative pl-12">
                        <span
                          className={`absolute left-0 top-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-black ${
                            isLast
                              ? 'bg-gradient-to-br from-[#ffe9a0] via-[#facf2d] to-[#b8860b] text-slate-900 ring-2 ring-amber-300/40'
                              : isFirst
                                ? 'bg-amber-400 text-slate-900 ring-2 ring-amber-400/30'
                                : 'bg-slate-900 text-white/70 ring-1 ring-white/20'
                          }`}
                        >
                          {index + 1}
                        </span>
                        <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition-colors duration-300 group-hover:border-amber-400/35">
                          <p className="font-bold text-white">{stop}</p>
                          {(isFirst || isLast) && (
                            <p className="mt-0.5 text-xs text-white/45">
                              {isLast ? 'Final destination' : 'Departure point'}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              {/* Travel Tips */}
              {routeDescription.travelTips && (
                <div className="rounded-xl border border-sky-400/20 bg-sky-400/10 p-4">
                  <p className="mb-1 flex items-center gap-2 text-sm font-bold text-sky-300">
                    <Info className="h-4 w-4" />
                    Travel Tips
                  </p>
                  <p className="text-sm text-white/70">{routeDescription.travelTips}</p>
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* ============================================ */}
      {/* LOCAL SIGHTSEEING                             */}
      {/* ============================================ */}
      {localSightseeing.length > 0 && (
        <Section tone="light">
          <AuroraHeading
            eyebrow="Tourist attractions"
            title={`What can you visit in ${destination}`}
            highlight="on a bus tour?"
            subtitle={`Explore popular sightseeing spots with our luxury bus tours in ${destination}.`}
          />

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
            {localSightseeing.map((place, index) => (
              <div
                key={index}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg sm:p-5 md:p-6"
              >
                <MapPin className="mx-auto mb-2 h-6 w-6 text-amber-500 transition-transform group-hover:scale-110 sm:h-7 sm:w-7 md:mb-3 md:h-8 md:w-8" />
                <h3 className="text-sm font-bold text-slate-900 transition-colors group-hover:text-amber-600 sm:text-base">{place}</h3>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ============================================ */}
      {/* WHY CHOOSE US — glass grid                    */}
      {/* ============================================ */}
      <Section tone="dark">
        <AuroraHeading
          tone="dark"
          eyebrow="Why Triveni Cabs"
          title={`Why choose our ${origin} to ${destination}`}
          highlight="bus service?"
          subtitle="Your trusted travel partner for safe and comfortable bus journeys."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: 'Safe Travel', description: 'GPS tracking & sanitized vehicles' },
            { icon: Star, title: 'Expert Drivers', description: 'Professional & experienced' },
            { icon: TrendingUp, title: 'Best Prices', description: 'Transparent pricing, no hidden charges' },
            { icon: Clock, title: '24/7 Support', description: 'Always available for you' }
          ].map((feature, index) => (
            <div
              key={index}
              className="glass-dark rounded-3xl p-7 text-center transition-colors duration-300 hover:border-amber-400/40"
            >
              <div className="mx-auto mb-4 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <feature.icon className="h-7 w-7 text-amber-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white md:text-xl">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/60 md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <InclusionBadges preset="tour" theme="dark" />

      {/* ============================================ */}
      {/* FAQ — two per row on md+, stacked on mobile   */}
      {/* ============================================ */}
      <Section tone="light" className="bg-slate-50">
        <AuroraHeading
          eyebrow="Frequently asked"
          title={`Questions about ${origin} to ${destination}`}
          highlight="bus rental"
          subtitle="Everything you need to know about our bus hire service."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-6">
          {faqItems.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              >
                <h3 className="text-sm font-bold text-slate-900 md:text-base">
                  {faq.question}
                </h3>
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/15 text-amber-500 transition-transform duration-200 ${openFaq === index ? 'rotate-45' : ''}`} aria-hidden>
                  <span className="text-lg font-bold leading-none">+</span>
                </span>
              </button>
              {openFaq === index && (
                <div className="px-5 pb-4 md:px-6 md:pb-5">
                  <p className={`text-sm leading-relaxed text-slate-600 md:text-base${index === 0 ? ' speakable-faq-first' : ''}`}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* FINAL CTA                                     */}
      {/* ============================================ */}
      <Section tone="aurora" className="border-t border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-black text-white md:text-6xl">
            Book {origin} to {destination} <span className="text-gradient-gold">Bus</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Call now to charter a {minSeats}–{maxSeats} seater AC coach for {origin} to {destination} at the best price — instant confirmation on call or WhatsApp.
          </p>
          <p className="mt-4 text-sm font-semibold text-white/60">{TRUST_ROW}</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={heroWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('bus_route_final_cta')}
              className="sheen glow-gold-lg flex items-center justify-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-lg font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('bus_route_final_cta')}
              className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-6 w-6" />
              Call: +91 76685 70551
            </a>
          </div>
        </div>
      </Section>

      {/* ============================================ */}
      {/* Corridor cluster — same route in other formats */}
      {/* ============================================ */}
      {corridorLinks.length > 0 && (
        <section className="bg-white py-10 text-slate-900 md:py-14">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <CorridorLinks links={corridorLinks} fromLabel={origin} toLabel={destination} theme="light" />
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* Related Routes from Same Origin               */}
      {/* ============================================ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="bg-slate-50 py-12 text-slate-900 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-center text-2xl font-bold text-slate-900 md:text-3xl">
              More Bus Routes from {origin}
            </h2>
            <p className="mb-8 text-center text-slate-500">Popular bus hire destinations from {origin}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/bus-routes/${r.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-amber-400 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 transition-colors group-hover:bg-amber-200">
                    <Navigation className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                      {origin} to {r.name}
                    </h3>
                    <p className="text-xs text-slate-500">{r.type} • {r.distance}</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-500" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/bus-routes"
                className="inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700"
              >
                View all bus routes
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* Related Services — Cross-linking for SEO      */}
      {/* ============================================ */}
      <section className="bg-white py-12 text-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            What are other ways to travel from {origin} to {destination}?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href={`/tempo-traveller/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">🚐</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">{origin} to {destination} Tempo</h3>
              <p className="mt-1 text-sm text-slate-500">12-26 seater AC tempo from ₹23/km</p>
            </Link>
            <Link
              href={`/one-way-cab/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">🚕</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">{origin} to {destination} Cab</h3>
              <p className="mt-1 text-sm text-slate-500">Sedan & SUV from ₹11/km one-way</p>
            </Link>
            <Link
              href={`/sightseeing`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">🗺️</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">Sightseeing Tours</h3>
              <p className="mt-1 text-sm text-slate-500">Full-day guided tour packages</p>
            </Link>
            <Link
              href={`/tour-package`}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">✈️</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">Tour Packages</h3>
              <p className="mt-1 text-sm text-slate-500">All-inclusive multi-day tour packages</p>
            </Link>
          </div>
        </div>
      </section>

      {/* RICH-UI + RANKING BLOCK — May 23 sprint (Bus route variant) */}
      <BusRouteRichBlock origin={origin} destination={destination} routeData={routeData} />
    </article>
  );
}

function BusRouteRichBlock({ origin, destination, routeData }) {
  const routeDistance = realValue(routeData?.distance);
  const routeDuration = realValue(routeData?.duration);
  const distanceKm = parseFloat((routeDistance || '').replace(/[^0-9.]/g, '')) || 400;
  const durationHrs = parseFloat((routeDuration || '').replace(/[^0-9.]/g, '')) || 8;
  const stats = [
    { value: distanceKm, suffix: ' km', label: 'Distance', sublabel: 'one-way' },
    { value: durationHrs, suffix: ' hr', label: 'Drive time', sublabel: 'approx.', format: 'decimal' },
    { value: 30, prefix: '₹', suffix: '/km', label: '22-seater', sublabel: 'starting' },
    { value: 65, prefix: '₹', suffix: '/km', label: '56-seater', sublabel: 'luxury Volvo' },
  ];

  const longTailFaqs = generateLongTailFaqs({
    mode: 'bus',
    origin,
    destination,
    distanceKm,
    durationText: routeDuration,
  });

  const founderQuote = getFounderQuoteForContext('all');
  const citations = getCitationsForRoute({ from: origin, to: destination, context: 'outstation' });

  return (
    <div className="bg-slate-950 text-white">
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`The ${origin} to ${destination} bus charter by the numbers`}
              subtitle="Per-km rates by bus size, distance, and approximate drive time. Pricing reflects actual operator invoices on this corridor."
              stats={stats}
              tone="cyan"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={distanceKm}
              mode="one-way"
              oneWayEqualsRoundTrip
              vehicles={[
                { key: 'bus22', label: '22-Seater', ratePerKm: 30 },
                { key: 'bus35', label: '35-Seater', ratePerKm: 42 },
                { key: 'bus45', label: '45-Seater', ratePerKm: 52 },
                { key: 'bus56', label: '56-Seater', ratePerKm: 65 },
              ]}
              tone="cyan"
              originName={origin}
              destinationName={destination}
            />
          </div>
        </div>
      </section>

      {founderQuote && (
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ExpertQuote quote={founderQuote.quote} authorName={founderQuote.author} authorTitle={founderQuote.title} authorOrg={founderQuote.org} tone="dark" />
          </div>
        </section>
      )}

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-cyan-400 font-semibold text-sm tracking-widest uppercase">Bus Charter Q&amp;A</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">More about chartering a bus from {origin} to {destination}</h2>
          </div>
          <LongTailFAQ faqs={longTailFaqs} tone="dark" />
        </div>
      </section>

      {citations.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <OutboundCitations sources={citations} tone="dark" heading="Verified against these sources" />
          </div>
        </section>
      )}
    </div>
  );
}
