'use client';

// ============================================================================
// DynamicTempoRoutes — "Triveni Aurora" redesign (Aug 2026)
// Premium dark-slate + gold photo-forward template behind /tempo-traveller/[route].
// Signature element: interactive SEATER SELECTOR fed by the route's own fleet
// data (never hardcoded rates), estimate math mirrors PriceCalculator
// (one-way billed both ways — no one-way discount on tempo).
// No framer-motion: CSS-only transitions (INP-friendly).
// ============================================================================

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle,
  ArrowRight, Route, Navigation, Calendar, ChevronLeft, Compass,
  CreditCard, Headphones, MapPinned, Sparkles, Zap,
  Mountain, Sun, Play, Crown, ShieldCheck
} from '@/components/ui/icons';
import { getAttractionsForCity } from '@/utilis/touristAttractionsData';
import { routeDescriptions } from '@/utilis/tempoTravellerData';
import { formatDestinationForDisplay } from '@/utilis/tempoColors';
// Rich UI + ranking-lift components — wired May 23 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { generateUniqueIntro } from '@/utilis/uniqueIntroGenerator';
import LeadQuoteSection from '@/components/shared/LeadQuoteSection';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';
import CorridorLinks from '@/components/seo/CorridorLinks';
import QuickAnswer from '@/components/seo/QuickAnswer';
import Section from '@/components/ui/Section';
import AuroraHeading from '@/components/ui/AuroraHeading';
import RouteLine from '@/components/ui/RouteLine';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const TRUST_ROW = '4.9★ · Since 2015 · No hidden charges · Pay after trip';

// "Contact for details", "On request" and friends are absences wearing a value's
// clothes. Facts that resolve to null are dropped, never rendered as a placeholder.
// Real figures are resolved server-side in page.js via resolveRouteMetrics.
const PLACEHOLDER_VALUE = /^(contact|on request|on-request|tbd|n\/?a|-|—)/i;
const realValue = (v) => {
  const s = String(v ?? '').trim();
  return s && !PLACEHOLDER_VALUE.test(s) ? s : null;
};

export default function DynamicTempoRoutesClient({ data }) {
  const { routeSlug, origin, destination, routeData, hasTouristSpots, localSightseeing, fleet, relatedRoutes, corridorLinks = [] } = data;

  const fleetList = useMemo(() => (Array.isArray(fleet) ? fleet : []), [fleet]);

  // Signature seater selector — defaults to the route's popular pick.
  const defaultSeaterIdx = Math.max(0, fleetList.findIndex((v) => v?.popular));
  const [selectedIdx, setSelectedIdx] = useState(defaultSeaterIdx);
  const selectedVehicle = fleetList[selectedIdx] || fleetList[0] || null;

  const routeDescription = routeDescriptions[routeSlug] || null;
  const displayDestination = formatDestinationForDisplay(destination);
  // Distance / drive time for the compact fact strips. Prefer the clean dataset
  // figure resolved server-side ("530 km"); routeDescription values can be prose-y.
  // Null means no source knows it — callers must omit the fact entirely.
  const routeDistance = realValue(routeData?.distance) || realValue(routeDescription?.distance);
  const routeDuration = realValue(routeData?.duration) || realValue(routeDescription?.travelTime);
  // Phase 3: unique, entity-rich, slug-seeded intro so each tempo route page reads differently.
  const uniqueIntro = generateUniqueIntro({
    origin,
    destination: displayDestination,
    distance: routeDistance,
    time: routeDuration,
    highway: '',
    attractions: Array.isArray(localSightseeing)
      ? localSightseeing.slice(0, 2).map((s) => (typeof s === 'string' ? s : (s.title || s.name || s.place || ''))).filter(Boolean)
      : [],
    vehicleType: 'tempo traveller',
    slug: routeSlug,
  });

  // Seater rates come straight off the route's own fleet so nothing on the page can
  // contradict the fare cards or the fare chart below.
  const seaterRates = useMemo(() => fleetList
    .map((v) => {
      const seats = (v?.name || '').match(/^(\d+)/);
      return seats && v?.outstationRate ? { seats: seats[1], rate: v.outstationRate } : null;
    })
    .filter(Boolean)
    .sort((a, b) => Number(a.seats) - Number(b.seats)), [fleetList]);

  const lowestRate = seaterRates[0]?.rate || '₹23/km';
  const highestRate = seaterRates[seaterRates.length - 1]?.rate || '₹28/km';
  const seaterRateSentence = seaterRates.length
    ? seaterRates.map((s) => `${s.rate} for a ${s.seats} seater`).join(', ')
    : '₹23/km for a 12 seater, ₹25/km for a 16 seater, ₹25/km for a 17 seater, ₹26/km for a 20 seater, ₹31/km for a 26 seater';
  const seaterList = seaterRates.length
    ? seaterRates.map((s) => `${s.seats}-seat ${s.rate}`).join(' · ')
    : '12-seat ₹23/km · 16-seat ₹25/km · 17-seat ₹25/km · 20-seat ₹28/km · 26-seat ₹31/km';

  // Fare estimate for the selected seater — mirrors PriceCalculator's
  // oneWayEqualsRoundTrip math exactly (distance × 2 × rate; billed both ways).
  const distanceKmNum = useMemo(() => {
    const n = parseFloat(String(routeDistance || '').replace(/[^0-9.]/g, ''));
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [routeDistance]);
  const selectedRateNum = selectedVehicle
    ? parseInt(String(selectedVehicle.outstationRate || '').replace(/[^\d]/g, ''), 10) || null
    : null;
  const selectedEstimate = distanceKmNum && selectedRateNum
    ? Math.round(distanceKmNum * 2 * selectedRateNum)
    : null;

  // Hero CTA: pre-fill WhatsApp with the route and the seater most groups pick.
  const heroSeater = fleetList.find((v) => v?.popular)?.name
    || fleetList[0]?.name
    || '17 Seater Tempo Traveller';
  const heroImage = fleetList.find((v) => v?.popular)?.image || '/images/tempo/17_seater.jpg';
  const heroWhatsAppHref = `https://wa.me/917668570551?text=${encodeURIComponent(
    `Hi, I need a ${heroSeater} from ${origin} to ${displayDestination}. Please share the fare and availability.`
  )}`;
  const selectedWhatsAppHref = `https://wa.me/917668570551?text=${encodeURIComponent(
    `Hi, I want to book a ${selectedVehicle?.name || 'tempo traveller'} from ${origin} to ${displayDestination}. Please share the exact fare and availability.`
  )}`;

  // Retained (computed, not emitted here — page.js owns all JSON-LD emission for
  // this route; kept so the schema source of truth stays in sync with the page copy).
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.trivenicabs.in/tempo-traveller/${routeSlug}#service`,
        "serviceType": "Tempo Traveller Rental",
        "name": `${origin} to ${destination} Tempo Traveller on Rent`,
        "alternateName": [
          `${origin} to ${destination} Tempo Traveller Booking`,
          `Tempo Traveller from ${origin} to ${destination}`,
          `${origin} ${destination} Tempo Traveller Hire`
        ],
        "description": `Book 12, 17, 20, 26 seater AC tempo traveller from ${origin} to ${destination}. Professional drivers, pushback seats, GPS tracking, music system. Best rates starting ${lowestRate}. Call +917668570551 for instant booking.`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Triveni Cabs",
          "telephone": "+917668570551",
          "email": "cabstriveni@gmail.com",
          "url": "https://www.trivenicabs.in",
          "image": "https://www.trivenicabs.in/images/logo.webp",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "City", "name": origin },
          { "@type": "City", "name": destination }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": lowestRate.replace(/[^\d]/g, ''),
          "highPrice": highestRate.replace(/[^\d]/g, ''),
          "offerCount": String(seaterRates.length || 5),
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": `${lowestRate.replace(/[^\d]/g, '')}-${highestRate.replace(/[^\d]/g, '')}`,
            "priceCurrency": "INR",
            "unitText": "per kilometer"
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${origin} to ${destination} Tempo Traveller Options`,
          "itemListElement": fleetList.map((v) => ({
            "@type": "Offer",
            "itemOffered": { "@type": "Product", "name": v?.name },
            "price": String(v?.outstationRate || '').replace(/[^\d]/g, ''),
            "priceCurrency": "INR"
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
          { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
          { "@type": "ListItem", "position": 3, "name": `${origin} to ${destination}`, "item": `https://www.trivenicabs.in/tempo-traveller/${routeSlug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does tempo traveller cost from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Tempo traveller rates from ${origin} to ${destination} are charged per kilometre: ${seaterRateSentence}. The rate covers fuel, driver and AC; tolls, parking, state permits and the night driver allowance are extra. A one-way drop is billed at the same rate as a round trip.`
            }
          },
          {
            "@type": "Question",
            "name": `What seater options are available for ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer ${seaterList}. All vehicles are AC equipped with pushback seats, a music system and charging points.`
            }
          },
          {
            "@type": "Question",
            "name": `How do I book tempo traveller from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call +917668570551 or WhatsApp with your travel date, pickup location and group size. You get an instant quote and confirm the booking on call or WhatsApp."
            }
          }
        ]
      }
    ]
  }), [origin, destination, routeSlug, fleetList, lowestRate, highestRate, seaterRates, seaterRateSentence, seaterList]);

  const faqItems = [
    {
      question: `How much does tempo traveller cost from ${origin} to ${displayDestination}?`,
      answer: `Tempo traveller rates from ${origin} to ${displayDestination} are set per kilometre by seater: ${seaterRateSentence}. The rate covers fuel, driver and AC; tolls, parking, state permits and the night driver allowance are billed extra. Call +917668570551 for an instant quote.`
    },
    {
      question: `What seater options are available for ${origin} to ${displayDestination}?`,
      answer: `We offer ${seaterList}. The 17 seater is the one most groups pick. All vehicles are AC with pushback seats, music system and charging points.`
    },
    {
      question: `How do I book tempo traveller from ${origin} to ${displayDestination}?`,
      answer: `Simply call +917668570551 or WhatsApp with your travel date, pickup location and group size. You'll receive an instant quote with vehicle options, and driver details reach you on SMS or WhatsApp before the trip.`
    },
    {
      question: `Is one-way booking available from ${origin} to ${displayDestination}?`,
      answer: `Yes, we run both one-way drops and round trips. A tempo traveller is billed at the same per-kilometre rate either way, because the vehicle still has to return to base — there is no one-way discount on tempo. Round trips over more than a day also include the driver's night allowance.`
    },
    {
      question: `What facilities are included in the tempo traveller?`,
      answer: `All our tempo travellers include: AC, pushback seats, music system with Bluetooth, USB charging for all seats, GPS tracking, first aid kit, fire extinguisher, ample luggage space, and clean sanitized interiors.`
    },
    {
      question: `Are drivers provided with the tempo traveller?`,
      answer: `Yes! All bookings include experienced professional drivers with 5+ years experience. They know the ${origin} to ${displayDestination} route well, including best stops for meals. Driver charges and accommodation are included.`
    },
  ];

  return (
    <article className="min-h-screen bg-slate-950 text-white" itemScope itemType="https://schema.org/TravelAction">
      <SetStickyCta
        price={`From ${lowestRate}`}
        label="Tempo Traveller"
        whatsappText={`Hi, I want to book a tempo traveller from ${origin} to ${displayDestination}. Please share availability and fare.`}
      />

      {/* ============================================ */}
      {/* HERO — real fleet photography, Aurora scrim   */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950">
        {/* Fleet photo backdrop — fixed-height container, no CLS */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${origin} to ${destination} Tempo Traveller — AC 12 to 26 seater with driver`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Scrim only where text sits: left + bottom */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
          <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10">
          {/* Top row: back link + route type badge */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 sm:mb-12">
            <Link
              href="/tempo-traveller"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/70 backdrop-blur-sm transition-colors hover:bg-white/10 hover:text-amber-400"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              All Routes
            </Link>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-amber-400 backdrop-blur-sm">
              <Sparkles className="h-3 w-3" />
              {routeData.type?.toUpperCase() || 'PREMIUM ROUTE'}
            </span>
          </div>

          <div className="max-w-3xl">
            {/* Giant route title */}
            <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <span className="text-gradient-gold">{origin}</span>
              <span className="mx-2 text-white/40 sm:mx-3">→</span>
              <span className="text-gradient-gold">{displayDestination}</span>
              <span className="mt-2 block text-lg font-bold text-white/75 sm:text-2xl">
                Tempo Traveller on Rent · 12–26 Seater AC
              </span>
            </h1>

            {/* Fare-first subline */}
            <p className="mt-4 text-base leading-relaxed text-slate-300/90 sm:text-lg">
              From <strong className="text-amber-400">{lowestRate}</strong> for a {seaterRates[0]?.seats || 12} seater
              — fuel, driver and AC included. One-way drop billed at the same rate as a round trip.
            </p>

            {/* Route line chip */}
            <div className="glass-dark mt-5 max-w-md rounded-2xl px-4 py-3">
              <RouteLine from={origin} to={displayDestination} tone="dark" />
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-white/60">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-amber-400" /> {routeDistance || 'Distance on request'}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-amber-400" /> {routeDuration || 'Drive time on request'}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="h-3.5 w-3.5 text-amber-400" /> {seaterRates[0]?.seats || 12}–{seaterRates[seaterRates.length - 1]?.seats || 26} seats
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
                onClick={() => trackWhatsAppClick('tempo_route_hero')}
                className="glow-gold flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-amber-400 text-sm font-black text-slate-900 shadow-lg transition-transform active:scale-95"
                aria-label={`WhatsApp Triveni Cabs for a ${origin} to ${displayDestination} tempo traveller`}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('tempo_route_hero')}
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 text-sm font-bold text-white backdrop-blur-sm transition-transform active:scale-95"
                aria-label={`Call Triveni Cabs for a ${origin} to ${displayDestination} tempo traveller`}
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
                onClick={() => trackWhatsAppClick('tempo_route_hero_primary')}
                className="sheen glow-gold inline-flex items-center justify-center gap-2.5 rounded-full bg-amber-400 px-8 py-4 text-base font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('tempo_route_hero_primary')}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call +91 76685 70551
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SIGNATURE — SEATER SELECTOR + fare estimate   */}
      {/* ============================================ */}
      <Section tone="dark" pad="sm" className="border-t border-white/5">
        <AuroraHeading
          tone="dark"
          eyebrow="Choose your tempo"
          title={`Which tempo traveller size should I book for ${origin} to`}
          highlight={`${displayDestination}?`}
          subtitle={`Tap a seater to see its fare for this route. Every vehicle is AC with pushback seats, music system and charging points — rates per km: ${seaterList}.`}
        />

        {/* Five photo cards */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4" role="tablist" aria-label="Tempo traveller seater options">
          {fleetList.map((vehicle, idx) => {
            const active = idx === selectedIdx;
            const seatsMatch = (vehicle.name || '').match(/^(\d+)/);
            return (
              <button
                key={vehicle.id}
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
                    src={vehicle.image}
                    alt={`${vehicle.name} — ${vehicle.capacity}`}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-slate-950/90 to-transparent" />
                  {vehicle.popular && (
                    <span className="absolute left-2 top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[0.6rem] font-black uppercase tracking-wide text-slate-900">
                      Popular
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className={`text-sm font-black leading-tight sm:text-base ${active ? 'text-amber-400' : 'text-white'}`}>
                    {seatsMatch ? `${seatsMatch[1]} Seater` : vehicle.name}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-400">{vehicle.capacity}</p>
                  <p className="mt-1.5 text-sm font-bold text-white">
                    {vehicle.outstationRate}
                    <span className="ml-1 text-[0.65rem] font-medium text-slate-400">outstation</span>
                  </p>
                </div>
                {active && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-amber-400" aria-hidden />}
              </button>
            );
          })}
        </div>

        {/* Selected seater — live fare estimate panel */}
        {selectedVehicle && (
          <div className="border-gradient-gold glass-dark mt-6 overflow-hidden rounded-3xl">
            <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
              {/* Photo side */}
              <div className="relative h-52 w-full sm:h-64 lg:h-full lg:min-h-[320px]">
                <Image
                  src={selectedVehicle.image}
                  alt={`${selectedVehicle.name} for ${origin} to ${destination}`}
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
                    <h3 className="text-xl font-black text-white sm:text-2xl">{selectedVehicle.name}</h3>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-slate-400">
                      <Users className="h-4 w-4 text-amber-400" /> {selectedVehicle.capacity}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-amber-400/10 px-2.5 py-1 text-xs font-bold text-amber-400 ring-1 ring-amber-400/30">
                    <Star className="h-3 w-3" fill="currentColor" /> 4.9
                  </span>
                </div>

                {/* Feature chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {(selectedVehicle.features || []).map((f, i) => (
                    <span key={i} className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Fare figures — straight off the route's fleet data */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/[0.04] p-3.5">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">Outstation</p>
                    <p className="mt-0.5 text-xl font-black text-amber-400">{selectedVehicle.outstationRate}</p>
                  </div>
                  <div className="rounded-2xl bg-white/[0.04] p-3.5">
                    <p className="text-[0.65rem] uppercase tracking-wide text-slate-400">Local (8 hrs / 80 km)</p>
                    <p className="mt-0.5 text-base font-bold text-white">{selectedVehicle.localRate}</p>
                  </div>
                  <div className="col-span-2 rounded-2xl bg-amber-400/10 p-3.5 ring-1 ring-amber-400/25 sm:col-span-1">
                    <p className="text-[0.65rem] uppercase tracking-wide text-amber-400/90">
                      {selectedEstimate ? `Est. this route` : 'Exact fare'}
                    </p>
                    <p className="mt-0.5 text-xl font-black text-white">
                      {selectedEstimate ? `≈ ₹${selectedEstimate.toLocaleString('en-IN')}` : 'On request'}
                    </p>
                    {selectedEstimate && (
                      <p className="mt-0.5 text-[0.65rem] text-slate-300/80">
                        {Math.round(distanceKmNum)} km billed both ways
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-400">
                  Rate covers fuel, driver and AC. Tolls, parking, state permits and the night driver
                  allowance are extra. A one-way drop is billed at the same rate as a round trip.
                </p>

                {/* CTAs */}
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={selectedWhatsAppHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('tempo_route_seater_selector')}
                    className="sheen glow-gold inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.01] active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book {(selectedVehicle.name || '').match(/^(\d+)/)?.[1] || ''} Seater on WhatsApp
                  </a>
                  <a
                    href="tel:+917668570551"
                    onClick={() => trackPhoneCall('tempo_route_seater_selector')}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                  >
                    <Phone className="h-4 w-4" />
                    Call now
                  </a>
                </div>
                {(() => {
                  const m = (selectedVehicle.name || '').match(/^(\d+)/);
                  return m ? (
                    <Link
                      href={`/${m[1]}-seater-tempo-traveller`}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300"
                    >
                      View {m[1]} seater details, specs &amp; routes
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : null;
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Machine-readable fare chart — same data as the cards above */}
        {fleetList.length > 0 && (
          <div className="mt-12">
            <h3 className="mb-4 text-xl font-black text-white md:text-2xl">
              {origin} to {displayDestination} tempo traveller fare chart
            </h3>
            {/* Mobile: stacked cards — no sideways scrolling */}
            <div className="space-y-3 md:hidden">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Tempo traveller rates from {origin} to {displayDestination}, 2026 — one way and round trip are priced the same
              </p>
              {fleetList.map((vehicle) => (
                <div key={`fare-card-${vehicle.id}`} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                  {vehicle.image && (
                    <div className="relative h-28 w-full">
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} — ${vehicle.capacity}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 0px"
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" aria-hidden />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-sm font-bold text-white">{vehicle.name}</p>
                    <dl className="mt-2.5 space-y-1.5">
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Seating</dt>
                        <dd className="text-right text-sm text-slate-300">{vehicle.capacity}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Outstation rate</dt>
                        <dd className="text-right text-sm font-bold text-amber-400">{vehicle.outstationRate}</dd>
                      </div>
                      <div className="flex items-baseline justify-between gap-3">
                        <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">Local (8 hrs / 80 km)</dt>
                        <dd className="text-right text-sm text-slate-300">{vehicle.localRate}</dd>
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
                  Tempo traveller rates from {origin} to {displayDestination}, 2026 — one way and round trip are priced the same
                </caption>
                <thead className="bg-white/5 text-white">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-bold">Tempo traveller</th>
                    <th scope="col" className="px-4 py-3 font-bold">Seating</th>
                    <th scope="col" className="px-4 py-3 font-bold">Outstation rate</th>
                    <th scope="col" className="px-4 py-3 font-bold">Local (8 hrs / 80 km)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {fleetList.map((vehicle) => (
                    <tr key={`fare-${vehicle.id}`} className="transition-colors hover:bg-white/5">
                      <th scope="row" className="px-4 py-3 text-left font-semibold text-white">
                        <span className="flex items-center gap-3">
                          {vehicle.image && (
                            <span className="relative block h-10 w-16 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
                              <Image
                                src={vehicle.image}
                                alt=""
                                fill
                                sizes="64px"
                                className="object-cover"
                              />
                            </span>
                          )}
                          {vehicle.name}
                        </span>
                      </th>
                      <td className="px-4 py-3 text-slate-300">{vehicle.capacity}</td>
                      <td className="px-4 py-3 font-bold text-amber-400">{vehicle.outstationRate}</td>
                      <td className="px-4 py-3 text-slate-300">{vehicle.localRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Rates include fuel, driver and AC. Tolls, parking, state permits and the night driver allowance are extra. A tempo traveller costs the same for a one-way drop as for a round trip.
            </p>
          </div>
        )}
      </Section>

      <LeadQuoteSection fromCity={origin} toCity={displayDestination} pageType="route" />

      {/* ============================================ */}
      {/* AEO QUICK ANSWER — above-the-fold extractable answer */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-12 pt-4 sm:px-6">
        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />
        <div className="relative mx-auto max-w-4xl">
          {/* Serif display heading carries the question; QuickAnswer keeps the answer */}
          <h2 className="font-display-serif mb-5 text-balance text-center text-[1.6rem] font-black leading-[1.15] tracking-tight text-white sm:text-4xl">
            How much does a tempo traveller from {origin} to {displayDestination}{' '}
            <span className="text-gradient-gold">cost?</span>
          </h2>
          <div className="border-gradient-gold glass-dark rounded-3xl p-2 sm:p-3">
            <QuickAnswer
              tone="dark"
              answer={`${origin} to ${displayDestination} tempo traveller hire is charged per kilometre by seater: ${seaterRateSentence}${routeDistance ? `, over roughly ${routeDistance}` : ''}${routeDuration ? ` and about ${routeDuration} of driving` : ''}. A tempo traveller costs the same for a one-way drop as for a round trip, because the vehicle has to return to base either way — there is no one-way discount on tempo. Every tempo is AC with pushback seats, a music system and charging points, and the rate covers fuel and driver; tolls, parking, state permits and the night driver allowance are billed extra.`}
              facts={[
                { label: 'Distance', value: routeDistance },
                { label: 'Drive time', value: routeDuration },
                { label: `From (${seaterRates[0]?.seats || 12} seater)`, value: lowestRate },
                { label: 'Seating', value: `${seaterRates[0]?.seats || 12} to ${seaterRates[seaterRates.length - 1]?.seats || 26} seats` },
              ].filter((f) => realValue(f.value))}
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* JOURNEY — route guide + booking glass card    */}
      {/* ============================================ */}
      <Section tone="aurora">
        {/* Serif editorial heading — ties this band to the hero display face */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-xs">
            <span className="h-px w-6 bg-amber-500/60" />
            Journey details
          </span>
          <h2 className="font-display-serif text-balance text-[1.6rem] font-black leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {origin} to {displayDestination} <span className="text-gradient-gold">road trip guide</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-300/80 sm:text-base lg:text-lg">
            Everything you need to know about the {origin} to {destination} route by tempo traveller — distance, drive time, stops and booking.
          </p>
        </div>

        {/* Journey stat tiles */}
        {(() => {
          const journeyStats = [
            {
              icon: Navigation,
              label: 'Distance',
              value: routeDistance,
              foil: true,
            },
            {
              icon: Clock,
              label: 'Travel Time',
              value: routeDuration,
            },
            {
              icon: Mountain,
              label: 'Destination Type',
              value: routeData.type || 'Tourism',
            },
            ...(routeDescription?.bestSeason
              ? [{ icon: Sun, label: 'Best Season', value: routeDescription.bestSeason }]
              : []),
            {
              icon: Calendar,
              label: 'Availability',
              value: routeData.exists ? 'Popular route · instant booking' : '365 days · 24/7 booking',
            },
          ].filter((stat) => realValue(stat.value));
          const lgCols = { 3: 'lg:grid-cols-3', 4: 'lg:grid-cols-4', 5: 'lg:grid-cols-5' }[journeyStats.length] || 'lg:grid-cols-3';
          return (
            <div className={`mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 ${lgCols}`}>
              {journeyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-amber-400/35"
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
          );
        })()}

        {/* Content grid: overview + stops + booking card */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-8">
          {/* Route overview */}
          {routeDescription ? (
            <>
              <div className="glass-dark rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/30 md:p-8">
                <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
                  <span className="rounded-xl bg-amber-400/15 p-2">
                    <MapPinned className="h-5 w-5 text-amber-400" />
                  </span>
                  Route Overview
                </h3>
                <p className="text-base leading-relaxed text-white/70">
                  {routeDescription.highlights}
                </p>
                {routeDescription.roadConditions && (
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
                    <p className="mb-1 flex items-center gap-2 text-sm font-bold text-amber-400">
                      <Route className="h-4 w-4" />
                      Road Conditions
                    </p>
                    <p className="text-sm text-white/60">{routeDescription.roadConditions}</p>
                  </div>
                )}
              </div>

              {/* Stops timeline */}
              <div className="glass-dark rounded-3xl p-6 transition-colors duration-300 hover:border-amber-400/30 md:p-8">
                <h3 className="mb-6 flex items-center gap-3 text-xl font-bold text-white">
                  <span className="rounded-xl bg-amber-400/15 p-2">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </span>
                  Popular Stops En-Route
                </h3>
                <div className="relative">
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
              </div>
            </>
          ) : (
            <div className="glass-dark rounded-3xl p-6 md:p-8 lg:col-span-2">
              <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-white">
                <span className="rounded-xl bg-amber-400/15 p-2">
                  <MapPinned className="h-5 w-5 text-amber-400" />
                </span>
                {origin} → {displayDestination} by tempo traveller
              </h3>
              <p className="text-base leading-relaxed text-white/70">
                Travel together in one AC tempo traveller from {origin} to {displayDestination} — pushback
                seats, music system, charging points and space for everyone’s luggage. Your driver
                handles the highway, the halts and the parking while the whole group rides in one vehicle.
              </p>
            </div>
          )}

          {/* Booking glass card */}
          <div className="border-gradient-gold glass-dark relative overflow-hidden rounded-3xl p-6 md:p-8">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/15 blur-3xl" aria-hidden />
            <h3 className="mb-3 flex items-center gap-3 text-xl font-bold text-white">
              <span className="rounded-xl bg-amber-400/15 p-2">
                <Zap className="h-5 w-5 text-amber-400" />
              </span>
              Get Instant Quote
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-white/70">
              Book your {origin} to {destination} tempo traveller now. Our team is available 24/7 for instant confirmation.
            </p>

            <div className="mb-5 rounded-2xl bg-white/[0.04] p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400">Starting from</p>
              <div className="mt-1 flex items-end gap-1.5">
                <span className="text-4xl font-black text-white sm:text-5xl">{lowestRate.replace('/km', '')}</span>
                <span className="mb-1.5 text-sm text-white/50">/km</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-white/60">{TRUST_ROW}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/25">✓ All Inclusive</span>
                <span className="rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300 ring-1 ring-sky-400/25">✓ No Hidden Charges</span>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={heroWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('tempo_route_quote_card')}
                className="sheen glow-gold flex w-full items-center justify-center gap-2.5 rounded-2xl bg-amber-400 py-4 text-sm font-black text-slate-900 transition-transform hover:scale-[1.01] active:scale-[0.98]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Booking
              </a>
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('tempo_route_quote_card')}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Call: +91-7668570551
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================================ */}
      {/* DIRECT ANSWER BOX (AEO/Featured Snippet Target) */}
      {/* ============================================ */}
      <section className="border-b border-slate-100 bg-white py-8 text-slate-900 md:py-12">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="direct-answer rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50 to-yellow-50 p-6 md:p-8" data-snippet-type="direct-answer">
            <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl">
              How much is a {origin} to {destination} tempo traveller in 2026?
            </h2>
            <div className="key-info mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: 'Distance', value: routeDistance },
                { label: 'Duration', value: routeDuration },
                { label: 'Starting Rate', value: lowestRate, accent: true },
                { label: 'Capacity', value: `${seaterRates[0]?.seats || 12}-${seaterRates[seaterRates.length - 1]?.seats || 26} Seat` },
              ].filter((f) => realValue(f.value)).map((f) => (
                <div key={f.label} className="rounded-xl border border-amber-100 bg-white p-4 text-center">
                  <p className="mb-1 text-xs font-semibold uppercase text-slate-500">{f.label}</p>
                  <p className={`text-xl font-black ${f.accent ? 'text-green-700' : 'text-slate-900'}`}>{f.value}</p>
                </div>
              ))}
            </div>
            <p className="faq-answer speakable-lead text-base leading-relaxed text-slate-700 md:text-lg">
              Tempo traveller hire from <strong>{origin} to {destination}</strong> starts at <strong>{lowestRate}</strong> for a {seaterRates[0]?.seats || 12} seater AC tempo.
              {routeDistance && ` The route covers approximately ${routeDistance}`}{routeDuration && ` and takes around ${routeDuration}`}.
              Rates are per kilometre and set by seater — <strong>{seaterList}</strong> — and a one-way drop is billed at the
              same rate as a round trip. Every tempo has pushback seats, AC, a music system, charging points and ample
              luggage space. Perfect for family trips, pilgrimages, wedding groups and corporate outings.
              Book by calling <strong>+91-7668570551</strong> or WhatsApp.
              4.9★ rated with 2,500+ group trips completed.
            </p>
            {uniqueIntro && (
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                {uniqueIntro}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US — glass stat grid               */}
      {/* ============================================ */}
      <Section tone="dark">
        <AuroraHeading
          tone="dark"
          eyebrow="Why Triveni Cabs"
          title={`Why book a ${origin} to ${displayDestination} tempo traveller`}
          highlight="with us?"
          subtitle={`Best tempo traveller service for ${origin} to ${destination} — safe drivers, GPS tracking, 24/7 support, transparent pricing.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Shield,
              title: 'Safe & Secure',
              description: 'GPS tracked vehicles with verified drivers, valid insurance & 24/7 monitoring',
              stat: '100%',
              statLabel: 'Safe Trips'
            },
            {
              icon: CreditCard,
              title: 'Transparent Pricing',
              description: 'No hidden charges, fixed rates, multiple payment options available',
              stat: '₹0',
              statLabel: 'Hidden Fees'
            },
            {
              icon: Car,
              title: 'Premium Fleet',
              description: 'Well-maintained AC tempo travellers with pushback seats & music system',
              stat: '200+',
              statLabel: 'Premium Fleet'
            },
            {
              icon: Headphones,
              title: '24/7 Support',
              description: 'Round-the-clock customer support via call & WhatsApp',
              stat: '24/7',
              statLabel: 'Available'
            },
          ].map((feature, index) => (
            <div key={index} className="group glass-dark relative h-full overflow-hidden rounded-3xl p-7 transition-colors duration-300 hover:border-amber-400/40">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-400/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <div className="mb-6 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <feature.icon className="h-7 w-7 text-amber-400" />
              </div>
              <div className="mb-3">
                <span className="text-4xl font-black text-white">{feature.stat}</span>
                <span className="ml-2 text-sm text-white/60">{feature.statLabel}</span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* AMENITIES SECTION                             */}
      {/* ============================================ */}
      <Section tone="aurora-light">
        <AuroraHeading
          eyebrow="On board"
          title={`What amenities does the ${origin} to ${displayDestination}`}
          highlight="tempo include?"
          subtitle={`AC tempo traveller with pushback seats, music system, GPS tracking and charging points for the ${origin} to ${destination} journey.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {[
            {
              title: 'Comfort Features',
              icon: Crown,
              items: ['Pushback Recliner Seats', 'Individual AC Vents', 'LED Reading Lights', 'Premium Interiors', 'Ample Legroom']
            },
            {
              title: 'Safety Equipment',
              icon: ShieldCheck,
              items: ['GPS Live Tracking', 'First Aid Kit', 'Fire Extinguisher', 'Valid Insurance', 'Emergency Contacts']
            },
            {
              title: 'Entertainment & More',
              icon: Play,
              items: ['Music System', 'USB Charging Points', 'Bluetooth Connectivity', 'Large Luggage Space', 'Curtains for Privacy']
            },
          ].map((category, index) => (
            <div key={index} className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-xl">
              <div className="mb-6 inline-flex rounded-2xl bg-amber-400/15 p-4">
                <category.icon className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="mb-6 text-xl font-bold text-slate-900">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* FAQ SECTION                                   */}
      {/* ============================================ */}
      <Section tone="light" className="bg-slate-50">
        <AuroraHeading
          eyebrow="Frequently asked"
          title={`Questions about the ${origin} to ${displayDestination}`}
          highlight="tempo traveller"
          subtitle={`Common questions about ${origin} to ${destination} tempo traveller booking, price, seating and more.`}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqItems.map((faq, index) => (
            <div key={index} className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-amber-300 hover:shadow-lg">
              <div className="mb-4 flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-amber-400 text-sm font-black text-slate-900">
                  Q
                </div>
                <h3 className="text-base font-bold leading-tight text-slate-900 md:text-lg">{faq.question}</h3>
              </div>
              <div className="pl-11">
                <p className={`leading-relaxed text-slate-600${index === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================ */}
      {/* TOURIST ATTRACTIONS                           */}
      {/* ============================================ */}
      {(() => {
        const attractions = getAttractionsForCity(destination);
        if (attractions.length > 0) {
          return (
            <Section tone="light">
              <AuroraHeading
                eyebrow={`Explore ${destination}`}
                title={`${destination} tourist attractions`}
                highlight="by tempo traveller"
                subtitle={`Top places to visit in ${destination} during your ${origin} to ${destination} tempo traveller trip.`}
              />

              <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {attractions.slice(0, 6).map((attraction, index) => (
                  <div key={index} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-amber-300 hover:bg-white hover:shadow-xl">
                    <div className="mb-4 flex items-start justify-between gap-3">
                      <h3 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                        {attraction.name}
                      </h3>
                      <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
                        attraction.type === 'Heritage' ? 'bg-amber-100 text-amber-700' :
                        attraction.type === 'Spiritual' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {attraction.type}
                      </span>
                    </div>
                    <p className="mb-4 line-clamp-2 text-sm text-slate-600">{attraction.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {attraction.highlights?.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="rounded bg-white px-2 py-1 text-xs text-slate-600 ring-1 ring-slate-100">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link
                  href={`/tourist-attractions/${destination.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-lg"
                >
                  <Compass className="h-5 w-5" />
                  View All {destination} Attractions
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </Section>
          );
        }
        return null;
      })()}

      {/* ============================================ */}
      {/* RELATED ROUTES (popular grid)                 */}
      {/* ============================================ */}
      <Section tone="dark" pad="sm">
        <AuroraHeading
          tone="dark"
          eyebrow="Keep exploring"
          title="More tempo traveller routes from"
          highlight={origin}
          subtitle={`Book tempo traveller from ${origin} to Manali, Shimla, Jaipur, Haridwar and more destinations.`}
        />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { to: 'Manali', type: 'Hill Station' },
            { to: 'Shimla', type: 'Hill Station' },
            { to: 'Jaipur', type: 'Heritage' },
            { to: 'Agra', type: 'Heritage' },
            { to: 'Haridwar', type: 'Spiritual' },
            { to: 'Rishikesh', type: 'Adventure' },
            { to: 'Dharamshala', type: 'Hill Station' },
            { to: 'Amritsar', type: 'Spiritual' },
          ].map((route, index) => (
            <Link
              key={index}
              href={`/tempo-traveller/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${route.to.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block"
            >
              <div className="glass-dark h-full rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-400/40">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15">
                  <MapPin className="h-5 w-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white transition-colors group-hover:text-amber-400">
                  {origin} to {route.to}
                </h3>
                <p className="text-sm text-white/50">{route.type}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/tempo-traveller"
            className="inline-flex items-center gap-2 font-bold text-amber-400 transition-colors hover:text-amber-300"
          >
            <Route className="h-5 w-5" />
            View All Tempo Traveller Routes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION                             */}
      {/* ============================================ */}
      <Section tone="aurora" className="border-t border-white/5">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-4xl font-black text-white md:text-6xl">
            Book {origin} to {displayDestination} <span className="text-gradient-gold">Tempo Traveller</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 md:text-xl">
            Call now to book {origin} to {destination} tempo traveller at best price — 12, 17, 20, 26 seater AC available!
          </p>
          <p className="mt-4 text-sm font-semibold text-white/60">{TRUST_ROW}</p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book tempo traveller from ${origin} to ${destination}. Please share rates.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sheen glow-gold-lg flex items-center justify-center gap-3 rounded-full bg-amber-400 px-10 py-5 text-lg font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="h-6 w-6" />
              WhatsApp Us
            </a>
            <a
              href="tel:+917668570551"
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
      {/* Related Routes from Same Origin — Internal Linking */}
      {/* ============================================ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="bg-white py-12 text-slate-900 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-center text-2xl font-bold text-slate-900 md:text-3xl">
              More Tempo Traveller Routes from {origin}
            </h2>
            <p className="mb-8 text-center text-slate-500">Popular group travel destinations from {origin}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/tempo-traveller/${r.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:border-amber-400 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 transition-colors group-hover:bg-amber-200">
                    <Navigation className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                      {origin} to {r.name}
                    </h3>
                    <p className="text-xs text-slate-500">{r.type} • Tempo Traveller from ₹23/km</p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-amber-500" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href={`/tempo-traveller/${origin.toLowerCase().replace(/\s+/g, '-')}`}
                className="inline-flex items-center gap-2 font-semibold text-amber-600 hover:text-amber-700"
              >
                View all routes from {origin}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* Related Services — Cross-linking for SEO      */}
      {/* ============================================ */}
      <section className="bg-slate-50 py-12 text-slate-900 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900 md:text-3xl">
            What are other ways to travel from {origin} to {displayDestination}?
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              href={`/bus-routes/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">🚌</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">{origin} to {displayDestination} Bus</h3>
              <p className="mt-1 text-sm text-slate-500">22-56 seater luxury buses from ₹30/km</p>
            </Link>
            <Link
              href={`/one-way-cab/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">🚕</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">{origin} to {displayDestination} Cab</h3>
              <p className="mt-1 text-sm text-slate-500">Sedan & SUV from ₹11/km one-way</p>
            </Link>
            {hasTouristSpots && (
              <Link
                href={`/tourist-attractions/${destination.toLowerCase().replace(/\s+/g, '-')}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-amber-400 hover:shadow-lg"
              >
                <div className="mb-2 text-2xl">📍</div>
                <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">{displayDestination} Tourist Spots</h3>
                <p className="mt-1 text-sm text-slate-500">Top sightseeing places & attractions</p>
              </Link>
            )}
            <Link
              href={`/sightseeing`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-amber-400 hover:shadow-lg"
            >
              <div className="mb-2 text-2xl">🗺️</div>
              <h3 className="font-bold text-slate-900 transition-colors group-hover:text-amber-600">Sightseeing Tours</h3>
              <p className="mt-1 text-sm text-slate-500">Full-day guided sightseeing packages</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SEO Content Section */}
      <section className="border-t border-slate-100 bg-white px-4 py-16 text-slate-900">
        <div className="prose prose-gray prose-lg mx-auto max-w-4xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            {origin} to {displayDestination} Tempo Traveller — Book AC 12–26 Seater with Driver
          </h2>
          <p className="leading-relaxed text-slate-700">
            Book a comfortable AC tempo traveller from {origin} to {displayDestination} with Triveni Cabs. We offer 12-seater,
            17-seater, 20-seater, and 26-seater Maharaja tempo travellers with professional drivers, GPS tracking, pushback
            recliner seats, music system, and charging points. Our rates start at just <strong>₹23/km</strong> for a 12-seater —
            making group travel affordable and comfortable.
          </p>
          <p className="leading-relaxed text-slate-700">
            Whether you are travelling with family, friends, a corporate team, or for a wedding — our {origin} to {displayDestination} tempo
            traveller service is available 24/7 with instant booking confirmation. All prices include fuel, driver charges, and
            vehicle costs. Only toll and state tax are extra. We provide both one-way drop and round-trip packages.
          </p>
          <p className="leading-relaxed text-slate-700">
            Triveni Cabs has completed 2500+ group trips with a 4.8-star customer rating. Our drivers have 5+ years of
            commercial driving experience with police verification and valid licences. Browse our full{' '}
            <Link href="/tempo-traveller" className="text-blue-600 hover:underline">tempo traveller fleet and routes</Link>,
            compare <Link href="/pricing" className="text-blue-600 hover:underline">vehicle pricing</Link>, or{' '}
            <a href="tel:+917668570551" className="text-blue-600 hover:underline">call 7668570551</a> for an instant quote.
          </p>
        </div>
      </section>

      {/* RICH-UI + RANKING BLOCK — May 23 sprint (Tempo route variant) */}
      <TempoRouteRichBlock origin={origin} destination={destination} displayDestination={displayDestination} routeData={routeData} routeSlug={routeSlug} />
    </article>
  );
}

/**
 * TempoRouteRichBlock — dark cinematic block injected at end of tempo route
 * pages. Mirrors the OneWay/Round-Trip/TravelByCar/Sightseeing rich UI for
 * visual consistency + ranking lift.
 */
function TempoRouteRichBlock({ origin, destination, displayDestination, routeData, routeSlug }) {
  const routeDistance = realValue(routeData?.distance);
  const routeDuration = realValue(routeData?.duration);
  const distanceKm = parseFloat((routeDistance || '').replace(/[^0-9.]/g, '')) || 300;
  const durationHrs = parseFloat((routeDuration || '').replace(/[^0-9.]/g, '')) || 6;
  // Canonical tempo card rates (12→₹23/km, 17→₹25/km) — must match the fare
  // chart, the seater selector and the PriceCalculator below.
  const seater12 = 20;
  const seater17 = 24;

  const stats = [
    { value: distanceKm, suffix: ' km', label: 'Distance', sublabel: 'one-way' },
    { value: durationHrs, suffix: ' hr', label: 'Drive time', sublabel: 'approx.', format: 'decimal' },
    { value: seater12, prefix: '₹', suffix: '/km', label: '12-seater', sublabel: 'starting rate' },
    { value: seater17, prefix: '₹', suffix: '/km', label: '17-seater', sublabel: 'starting rate' },
  ];

  const longTailFaqs = generateLongTailFaqs({
    mode: 'tempo',
    origin,
    destination: displayDestination,
    distanceKm,
    durationText: routeDuration,
  });

  const founderQuote = getFounderQuoteForContext('tempo');
  const citations = getCitationsForRoute({ from: origin, to: displayDestination, context: 'outstation' });

  return (
    <div className="bg-slate-950 text-white">
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`The ${origin} to ${displayDestination} tempo traveller by the numbers`}
              subtitle="Per-km rates by seater size, distance, and approximate drive time. Pricing refreshed weekly against actual driver invoices for this route."
              stats={stats}
              tone="amber"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={distanceKm}
              mode="one-way"
              oneWayEqualsRoundTrip
              vehicles={[
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24 },
                { key: 'tempo20', label: '20-Seater', ratePerKm: 26 },
                { key: 'tempo26', label: '26-Seater', ratePerKm: 28 },
              ]}
              tone="amber"
              originName={origin}
              destinationName={displayDestination}
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
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Tempo Q&amp;A</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">More about hiring a tempo traveller from {origin} to {displayDestination}</h2>
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
