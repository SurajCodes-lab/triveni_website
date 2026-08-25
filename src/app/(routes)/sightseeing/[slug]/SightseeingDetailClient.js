'use client';

// ============================================================================
// SightseeingDetailClient — Ultra-Premium v2 (Aug 2026)
// Sightseeing family keeps its EMERALD/TEAL identity on slate-950.
// Foil headline = emerald-tinted gradient (from-emerald-200 via-emerald-400
// to-teal-600); GOLD is reserved for CTAs and prices only.
// v2 uplift: cinematic photo hero, serif+foil headline, glass panels, stat
// tiles (no label/value rows), itinerary as a lane-motif timeline, highlight
// photo cards, FAQ 2-per-row. The old hidden-tab layout is flattened into
// stacked rhythm bands so every section is in the DOM (SEO + AEO win).
// Zero framer-motion (CSS-only, INP-friendly); icons only from
// '@/components/ui/icons'; every image has sizes + a fixed container (no CLS).
// ============================================================================

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Clock, Sparkles, Star, Users, Calendar, CheckCircle, XCircle,
  Phone, Mail, Share2, Bookmark, ArrowLeft, Globe, ChevronDown,
  MessageCircle, SlidersHorizontal, Edit, Zap, Compass, User
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { generateFAQSchema } from '@/lib/seo/schema-generators';

import dynamic from 'next/dynamic';

// Dynamically import below-fold components
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });
const QuickEnquiryForm = dynamic(() => import('@/components/ui/QuickEnquiryForm'), { ssr: false });

// Shared Components
import SocialProofStrip from '@/components/shared/SocialProofStrip';
// Rich UI + ranking-lift components added May 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';

// SEO Components
import QuickAnswer from '@/components/seo/QuickAnswer';
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import { RelatedTours, CrossServiceLinks } from '@/components/seo/RelatedContent';
import { generateTourFAQs } from '@/lib/seo/faq-generator';
import { getRelatedToursByCity, getRelatedContent } from '@/utilis/linkingHelper';
// May 2026: real reviews + urgency signals from sightseeingEnrichment
import { getReviews as getSightseeingReviewsForSlug, getReviewCount as getSightseeingReviewCountForSlug, getUrgencySignals as getSightseeingUrgency } from '@/utilis/sightseeingEnrichment';
import TourFareTable from '@/components/seo/TourFareTable';

/* Emerald lane motif — a quiet road-lane divider, this family's signature. */
function EmeraldLane({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400/80" />
      <span className="h-0 flex-1 border-t-2 border-dashed border-emerald-400/25" />
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400/60" />
      <span className="h-0 flex-1 border-t-2 border-dashed border-emerald-400/25" />
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-emerald-400/80" />
    </div>
  );
}

/* Section heading used inside the content column. */
function PanelHeading({ icon: Icon, children }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 ring-1 ring-emerald-400/30">
        <Icon className="h-5 w-5 text-emerald-300" />
      </span>
      <h2 className="text-2xl font-black text-white sm:text-3xl">{children}</h2>
    </div>
  );
}

/* FAQ — 2-per-row glass accordions. Emits the same FAQPage schema the old
   FAQSection component emitted (showSchema parity preserved). */
function FaqGrid({ faqs, title, subtitle }) {
  const [open, setOpen] = useState(0);
  if (!faqs || faqs.length === 0) return null;
  const schema = generateFAQSchema(faqs);
  return (
    <section className="bg-slate-950 px-4 py-14 sm:px-6 md:py-20" aria-labelledby="tour-faq-heading">
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">Before you book</p>
          <h2 id="tour-faq-heading" className="text-3xl font-black leading-tight text-white sm:text-4xl">
            {title}{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
              answered
            </span>
          </h2>
          {subtitle && <p className="mt-4 text-sm text-slate-400 sm:text-base">{subtitle}</p>}
        </div>
        <EmeraldLane className="mx-auto mt-8 max-w-xs" />
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`h-fit rounded-2xl border bg-white/5 backdrop-blur-xl transition-colors duration-300 ${
                  isOpen ? 'border-emerald-400/40' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-bold leading-snug text-white sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function SightseeingDetailClient({ tour, cityLabel = null }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const tourCity = tour.name.split(' ')[0];
  const relatedContent = getRelatedContent(tourCity);
  // Real reviews + urgency signals (May 2026)
  const realReviews = getSightseeingReviewsForSlug(tour.slug);
  const realReviewCount = getSightseeingReviewCountForSlug(tour.slug);
  const urgency = getSightseeingUrgency(tour.slug);

  // --- Quick Answer (AEO/GEO) — fact-first summary built only from tour data ---
  // cityLabel comes from the sightseeingData grouping; tourCity is a first-word
  // guess off the tour name and gets it wrong for names like "Amber Fort Tour".
  const pickupCity = cityLabel || tourCity;
  const fares = [tour.price?.sedan, tour.price?.suv, tour.price?.tempoTraveller, tour.price?.carRental].filter(Boolean);
  const fromFare = fares.length ? Math.min(...fares) : null;
  // Highlights read "Name - description", but some entries are plain selling
  // points ("Golden hour photography paradise"). Prefer the "Name - …" form so
  // we quote places, and drop entries already covered by a longer one
  // ("City Palace" under "Hawa Mahal & City Palace").
  const rawHighlights = (tour.highlights || []).map(String);
  const structuredHighlights = rawHighlights.filter((h) => h.includes(' - '));
  const topSpots = (structuredHighlights.length ? structuredHighlights : rawHighlights)
    .map((h) => h.split(' - ')[0].trim())
    .filter(Boolean)
    .reduce((acc, spot) => {
      const lower = spot.toLowerCase();
      if (acc.some((s) => s.toLowerCase().includes(lower) || lower.includes(s.toLowerCase()))) return acc;
      acc.push(spot);
      return acc;
    }, [])
    .slice(0, 4);
  const fleetLine = [
    tour.price?.sedan && `₹${tour.price.sedan.toLocaleString()} sedan`,
    tour.price?.suv && `₹${tour.price.suv.toLocaleString()} SUV`,
    tour.price?.tempoTraveller && `₹${tour.price.tempoTraveller.toLocaleString()} Tempo Traveller`
  ].filter(Boolean).join(', ');
  // Durations are free text ("8-10 hours", "3 Days / 2 Nights", "Half day"),
  // so keep the sentence article-free rather than gluing "a" in front.
  const durationPhrase = /^half day$/i.test(tour.duration || '') ? 'half a day' : tour.duration;
  const quickAnswerText = [
    `The ${tour.name} is a private-cab sightseeing tour that takes ${durationPhrase}${fromFare ? ` and starts at ₹${fromFare.toLocaleString()}` : ''}${fleetLine ? ` (${fleetLine})` : ''}.`,
    topSpots.length ? ` It covers ${topSpots.join(', ')}${rawHighlights.length > topSpots.length ? ' and more' : ''}.` : '',
    ` The fare covers the vehicle, fuel, tolls, parking and an experienced driver, with free pickup from your ${pickupCity} hotel, home or station. Book on +91-7668570551 or WhatsApp.`
  ].join('');
  const quickAnswerFacts = [
    { label: 'Duration', value: tour.duration },
    fromFare ? { label: 'Starts from', value: `₹${fromFare.toLocaleString()}` } : null,
    { label: 'Pickup', value: `Free ${pickupCity} pickup` },
    tour.reviews?.averageRating
      ? { label: 'Rating', value: `${tour.reviews.averageRating}★` }
      : { label: 'Stops covered', value: `${(tour.highlights || []).length}+` }
  ].filter(Boolean);

  const bookingMessage = `Hello! I'm interested in booking the ${tour.name} tour. Can you provide more details?`;
  const bookingHref = `https://wa.me/917668570551?text=${encodeURIComponent(bookingMessage)}`;

  const shareUrl = () => {
    if (navigator.share) {
      navigator.share({
        title: tour.name,
        text: tour.shortDescription,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleBooking = () => {
    trackWhatsAppClick('sightseeing_detail', bookingMessage);
    window.open(bookingHref, '_blank');
  };

  // In-page anchors that replace the old hidden tabs — all content stays in
  // the DOM now; these just jump the reader down the page.
  const sectionAnchors = [
    { id: 'overview', label: 'Overview' },
    tour.itinerary?.length ? { id: 'itinerary', label: 'Itinerary' } : null,
    (tour.inclusions?.length || tour.exclusions?.length) ? { id: 'inclusions', label: 'What’s Included' } : null,
    tour.tips?.length ? { id: 'tips', label: 'Travel Tips' } : null,
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/TouristTrip">
      {/* ============================================ */}
      {/* HERO — cinematic destination photography      */}
      {/* ============================================ */}
      <header>
        <section className="relative flex min-h-[62vh] items-end overflow-hidden bg-slate-950 sm:min-h-[68vh]">
          {/* Fixed full-bleed photo — no CLS */}
          <div className="absolute inset-0">
            {tour.heroImage ? (
              <>
                <Image
                  src={tour.heroImage}
                  alt={tour.name}
                  fill
                  priority
                  fetchPriority="high"
                  quality={88}
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/40 via-transparent to-teal-950/35" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950" />
            )}
          </div>

          {/* Emerald aurora glows */}
          <div className="pointer-events-none absolute right-6 top-16 h-72 w-72 rounded-full bg-emerald-500/15 blur-[130px]" aria-hidden />
          <div className="pointer-events-none absolute bottom-32 left-4 h-52 w-52 rounded-full bg-teal-400/10 blur-[110px]" aria-hidden />

          {/* Back Button */}
          <Link
            href="/sightseeing"
            className="absolute left-4 top-5 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 active:scale-95 sm:left-6 sm:top-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Tours
          </Link>

          {/* Action Buttons */}
          <div className="absolute right-4 top-5 z-20 flex gap-2.5 sm:right-6 sm:top-6">
            <button
              type="button"
              onClick={shareUrl}
              aria-label={`Share ${tour.name}`}
              className="rounded-full border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
            >
              <Share2 className="h-5 w-5 text-white" />
            </button>
            <button
              type="button"
              onClick={() => setIsBookmarked(!isBookmarked)}
              aria-label={isBookmarked ? 'Remove bookmark' : 'Bookmark this tour'}
              aria-pressed={isBookmarked}
              className="rounded-full border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-xl transition-all hover:bg-white/20 active:scale-90"
            >
              <Bookmark className={`h-5 w-5 ${isBookmarked ? 'text-emerald-400' : 'text-white'}`} fill={isBookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 w-full">
            <div className="container mx-auto px-4 pb-10 pt-24 sm:px-6 sm:pb-12">
              {/* Tags Row */}
              <div className="mb-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-300 backdrop-blur-sm sm:text-xs">
                  {tour.category}
                </span>
                {tour.difficulty && (
                  <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold text-white/80 backdrop-blur-sm">
                    {tour.difficulty}
                  </span>
                )}
                {tour.reviews && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-slate-950/60 px-4 py-1.5 text-xs font-bold text-amber-300 backdrop-blur-sm">
                    <Star className="h-3.5 w-3.5" fill="currentColor" />
                    {tour.reviews.averageRating} ({tour.reviews.totalReviews})
                  </span>
                )}
              </div>

              <h1 className="speakable-headline max-w-4xl text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                {tour.name}
                <span className="mt-2 block font-serif italic text-xl font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent sm:text-2xl md:text-3xl">
                  a private car, a patient driver, your pace.
                </span>
              </h1>

              <p className="speakable-lead mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base md:text-lg">
                {tour.shortDescription}
              </p>

              {/* Stat tiles — glass, data-driven */}
              <div className="mt-6 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xl">
                  <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-300/70">
                    <Clock className="h-3 w-3" /> Duration
                  </p>
                  <p className="mt-1 text-sm font-black leading-tight text-white sm:text-base">{tour.duration}</p>
                </div>
                {fromFare && (
                  <div className="rounded-2xl border border-amber-400/25 bg-amber-400/10 p-3.5 backdrop-blur-xl">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-amber-300/80">From</p>
                    <p className="mt-1 text-sm font-black leading-tight text-amber-300 sm:text-base">₹{fromFare.toLocaleString()}</p>
                  </div>
                )}
                {tour.groupSize && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xl">
                    <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-300/70">
                      <Users className="h-3 w-3" /> Group
                    </p>
                    <p className="mt-1 text-sm font-black leading-tight text-white sm:text-base">{tour.groupSize}</p>
                  </div>
                )}
                {tour.languages && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xl">
                    <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-emerald-300/70">
                      <Globe className="h-3 w-3" /> Languages
                    </p>
                    <p className="mt-1 truncate text-sm font-black leading-tight text-white sm:text-base">
                      {tour.languages.slice(0, 2).join(', ')}{tour.languages.length > 2 && '…'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* ============================================ */}
      {/* STICKY PRICING BAR — prices gold, compact CTAs */}
      {/* ============================================ */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-900/85 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-3 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <div className="flex w-full items-center justify-center gap-4 overflow-x-auto sm:w-auto sm:justify-start sm:gap-6">
              {[
                tour.price.sedan && { label: 'Sedan', value: tour.price.sedan },
                tour.price.suv && { label: 'SUV', value: tour.price.suv },
                tour.price.tempoTraveller && { label: 'Tempo', value: tour.price.tempoTraveller },
              ].filter(Boolean).map((p, i, arr) => (
                <div key={p.label} className="flex items-center gap-4 sm:gap-6">
                  <div className="text-center sm:text-left">
                    <p className="whitespace-nowrap text-lg font-black leading-tight text-amber-300 sm:text-xl">
                      ₹{p.value.toLocaleString()}
                    </p>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{p.label}</p>
                  </div>
                  {i < arr.length - 1 && <span className="h-8 w-px bg-white/10" aria-hidden />}
                </div>
              ))}
            </div>

            <div className="flex w-full gap-2 sm:w-auto sm:gap-2.5">
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('sightseeing_detail_bar')}
                className="inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-white/10 sm:flex-none sm:px-5"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <button
                type="button"
                onClick={handleBooking}
                className="sheen glow-gold inline-flex min-h-[42px] flex-1 items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 sm:flex-none sm:px-6"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live urgency strip — May 2026 conversion lift */}
      <div className="bg-emerald-600 px-4 py-2 text-xs text-white sm:text-sm">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-center">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white"></span>
            <strong>{urgency.viewingNow}</strong> people viewing now
          </span>
          <span className="flex items-center gap-1.5">
            <strong>{urgency.bookedThisMonth}</strong> booked in the last 30 days
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            Last booked <strong>{urgency.lastBooked}</strong> ago
          </span>
        </div>
      </div>

      {/* === QUICK ANSWER (AEO/GEO) — fact-first, kept high on the page === */}
      <section className="bg-slate-950 px-4 pt-6 pb-2">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 p-1.5">
          <QuickAnswer
            question={`What does the ${tour.name} include and what does it cost?`}
            answer={quickAnswerText}
            facts={quickAnswerFacts}
            tone="dark"
            className="border-emerald-500/20"
          />
        </div>
      </section>

      {/* === FARE TABLE (AEO/GEO) ============================================
           A real <table>, not styled divs. Google table snippets require an
           actual table with a header row, and an assistant asked what this
           tour costs needs the vehicle-to-price relationship stated rather
           than inferred from DOM order. None of the 170 sightseeing pages
           contained a <table> before this. ==================================== */}
      <section className="bg-slate-950 px-4 py-6" aria-labelledby="tour-fare-heading">
        <div className="mx-auto max-w-4xl">
          <TourFareTable tour={tour} tone="dark" />
        </div>
      </section>

      {/* Mobile-only Quick Quote Form — fills the lg-sidebar gap */}
      <section className="border-b border-emerald-500/20 bg-slate-950 px-4 py-6 lg:hidden">
        <div className="rounded-2xl border border-emerald-500/25 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
          <div className="mb-3 text-center">
            <h3 className="text-lg font-bold text-white">Get a Quote in 2 Min</h3>
            <p className="mt-0.5 text-xs text-slate-400">Reply on WhatsApp in ~2 minutes · No spam</p>
          </div>
          <QuickEnquiryForm fromCity={tourCity} toCity="" pageType="sightseeing" />
        </div>
      </section>

      {/* Social Proof Strip */}
      <SocialProofStrip theme="dark" />

      {/* === AT-A-GLANCE (deeper detail; the fact-first Quick Answer sits above) === */}
      <section className="bg-slate-900 px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="direct-answer rounded-3xl border border-emerald-500/20 bg-white/5 p-6 backdrop-blur-xl md:p-8" data-snippet-type="direct-answer">
            <h2 className="mb-5 text-2xl font-black text-white md:text-3xl">
              {tour.name} —{' '}
              <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                at a glance
              </span>
            </h2>
            <div className="key-info mb-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Duration</p>
                <p className="text-lg font-black text-emerald-300 sm:text-xl">{tour.duration}</p>
              </div>
              <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-center">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Sedan Price</p>
                <p className="text-lg font-black text-amber-300 sm:text-xl">₹{tour.price?.sedan?.toLocaleString()}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Highlights</p>
                <p className="text-lg font-black text-white sm:text-xl">{tour.highlights?.length || 0}+</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 text-center">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Rating</p>
                <p className="text-lg font-black text-emerald-300 sm:text-xl">{tour.reviews?.averageRating || 4.8}★</p>
              </div>
            </div>
            <p className="faq-answer text-base leading-relaxed text-slate-300 md:text-lg">
              The <strong className="text-white">{tour.name}</strong> follows a fixed itinerary over {durationPhrase} with door-to-door AC transport.
              {topSpots.length > 0 && ` The route takes in ${topSpots.join(', ')}.`}
              {tour.inclusions?.length > 0 && ` Your fare includes ${tour.inclusions.slice(0, 3).join(', ').toLowerCase()}.`}
              {tour.bestTimeToVisit && ` Best time to travel: ${tour.bestTimeToVisit}.`}
              {tour.groupSize && ` Suitable for ${tour.groupSize}.`}
              {' '}Timings stay flexible — tell your driver where you want to linger.
            </p>
          </div>
        </div>
      </section>

      {/* In-page anchors — replaces the old hidden tabs; all content below is in the DOM */}
      <div className="border-b border-white/5 bg-slate-900/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 sm:px-6">
          <nav aria-label="Tour sections" className="scrollbar-hide -mx-4 flex gap-1.5 overflow-x-auto px-4 py-2.5 sm:mx-0 sm:px-0">
            {sectionAnchors.map((a) => (
              <a
                key={a.id}
                href={`#${a.id}`}
                className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 transition-colors hover:border-emerald-400/40 hover:text-emerald-300 sm:text-sm"
              >
                {a.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-950">
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <SEOBreadcrumb
            items={[
              { name: 'Sightseeing', url: '/sightseeing' },
              { name: tour.name.split(' ')[0], url: `/sightseeing#${tour.name.split(' ')[0].toLowerCase()}` },
              { name: tour.name }
            ]}
            variant="minimal"
            showSchema={false}
          />
        </div>
      </div>

      {/* ============================================ */}
      {/* CONTENT — stacked rhythm bands + sidebar      */}
      {/* ============================================ */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-8 sm:py-10 md:py-12">
        {/* Background Decorations */}
        <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/5 blur-[180px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[340px] w-[340px] rounded-full bg-teal-500/5 blur-[140px]" aria-hidden />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Main Content — everything stacked, nothing hidden behind tabs */}
            <div className="space-y-8 lg:col-span-2">
              {/* About */}
              <div id="overview" className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <PanelHeading icon={Sparkles}>About This Tour</PanelHeading>
                <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                  {tour.fullDescription}
                </p>
              </div>

              {/* Highlights — photo cards (honest index-mapped tour.images) */}
              {tour.highlights && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                  <PanelHeading icon={Star}>Tour Highlights</PanelHeading>
                  <EmeraldLane className="mb-6 max-w-xs" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {tour.highlights.map((highlight, index) => {
                      if (!highlight) return null;
                      const placeName = highlight.split(' - ')[0].trim();
                      const description = highlight.split(' - ')[1]?.trim() || '';
                      const imageUrl = tour.images && tour.images[index] ? tour.images[index] : null;

                      return (
                        <div
                          key={index}
                          className={`group relative overflow-hidden rounded-2xl border border-white/10 transition-all duration-500 hover:border-emerald-500/50 ${
                            index === 0 ? 'sm:col-span-2 sm:row-span-1' : ''
                          }`}
                        >
                          {imageUrl && (
                            <div className={`relative w-full overflow-hidden ${index === 0 ? 'h-56' : 'h-48'}`}>
                              <Image
                                src={imageUrl}
                                alt={placeName}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                            </div>
                          )}
                          <div className={`${imageUrl ? 'absolute bottom-0 left-0 right-0' : 'bg-white/5'} p-4`}>
                            <div className="flex items-start gap-2.5">
                              <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
                                {index + 1}
                              </span>
                              <div>
                                <h3 className="mb-1 text-base font-bold text-white sm:text-lg">{placeName}</h3>
                                {description && (
                                  <p className={`text-xs sm:text-sm ${imageUrl ? 'text-slate-300' : 'text-slate-400'}`}>
                                    {description}
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Itinerary — lane-motif timeline */}
              {tour.itinerary && (
                <div id="itinerary" className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8">
                  <PanelHeading icon={MapPin}>Detailed Itinerary</PanelHeading>
                  <p className="mb-7 -mt-2 text-sm text-slate-400">
                    Hour by hour, stop by stop — your driver keeps this rhythm but never rushes you.
                  </p>
                  <div>
                    {tour.itinerary.map((item, index) => (
                      <div key={index} className="group flex gap-3 sm:gap-4 md:gap-6">
                        <div className="flex flex-shrink-0 flex-col items-center">
                          <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black shadow-lg sm:h-12 sm:w-12 sm:text-base ${
                            index === 0 || index === tour.itinerary.length - 1
                              ? 'bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-emerald-500/30'
                              : 'border border-emerald-400/30 bg-emerald-500/10 text-emerald-300'
                          }`}>
                            {index + 1}
                          </span>
                          {index < tour.itinerary.length - 1 && (
                            <span className="my-2 w-0 flex-1 border-l-2 border-dashed border-emerald-400/30" aria-hidden />
                          )}
                        </div>
                        <div className="flex-1 pb-7 sm:pb-8">
                          <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                            <span className="w-fit rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-300 sm:text-sm">
                              {item.time}
                            </span>
                            {item.duration && (
                              <span className="text-xs text-slate-500 sm:text-sm">({item.duration})</span>
                            )}
                          </div>
                          <h3 className="mb-2 text-base font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-lg md:text-xl">
                            {item.activity}
                          </h3>
                          {item.description && (
                            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions / Exclusions — card stacks */}
              {(tour.inclusions || tour.exclusions) && (
                <div id="inclusions" className="scroll-mt-24 space-y-6">
                  {tour.inclusions && (
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8">
                      <PanelHeading icon={CheckCircle}>What’s Included</PanelHeading>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                        {tour.inclusions.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4 transition-all hover:border-emerald-500/30">
                            <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                            <span className="text-sm text-slate-300 sm:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tour.exclusions && (
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl sm:p-6 md:p-8">
                      <PanelHeading icon={XCircle}>What’s Not Included</PanelHeading>
                      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
                        {tour.exclusions.map((item, index) => (
                          <div key={index} className="flex items-start gap-3 rounded-xl border border-rose-500/10 bg-rose-500/5 p-4 transition-all hover:border-rose-500/30">
                            <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-rose-400" />
                            <span className="text-sm text-slate-300 sm:text-base">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Travel Tips — numbered cards */}
              {tour.tips && (
                <div id="tips" className="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                  <PanelHeading icon={Zap}>Travel Tips</PanelHeading>
                  <div className="space-y-3">
                    {tour.tips.map((tip, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-emerald-400/30"
                      >
                        <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-sm font-bold text-white shadow-lg shadow-emerald-500/30">
                          {index + 1}
                        </span>
                        <p className="leading-relaxed text-slate-300">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Customization band */}
              <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-xl">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" aria-hidden />
                <div className="relative p-6 sm:p-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 shadow-xl shadow-emerald-500/30">
                      <SlidersHorizontal className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                    </span>
                    <h3 className="text-xl font-black text-white sm:text-2xl">
                      Make it{' '}
                      <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                        yours
                      </span>
                    </h3>
                  </div>

                  <p className="mb-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                    Every traveller has unique preferences. This tour can be fully customised to match
                    your interests, schedule and requirements.
                  </p>

                  <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                    {[
                      { icon: Edit, title: 'Modify Itinerary', desc: 'Add, remove, or replace destinations' },
                      { icon: Clock, title: 'Flexible Timing', desc: 'Adjust pickup time and duration' },
                      { icon: Users, title: 'Group Size', desc: 'Private or group tours available' },
                      { icon: Sparkles, title: 'Special Requests', desc: 'Photo tours, food tours, or specific interests' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-emerald-500/30">
                        <item.icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400" />
                        <div>
                          <h4 className="mb-1 text-sm font-bold text-white sm:text-base">{item.title}</h4>
                          <p className="text-xs text-slate-400 sm:text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleBooking}
                      className="sheen glow-gold inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.01] active:scale-95"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Customize This Tour
                    </button>
                    <a
                      href="tel:+917668570551"
                      onClick={() => trackPhoneCall('sightseeing_detail_customize')}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-emerald-500/40 bg-white/5 px-5 py-3.5 text-sm font-bold text-emerald-300 transition-all hover:bg-emerald-500/10"
                    >
                      <Phone className="h-4 w-4" />
                      Call to Discuss
                    </a>
                  </div>
                </div>
              </div>

              {/* Best Time to Visit */}
              {tour.bestTimeToVisit && (
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
                  <PanelHeading icon={Calendar}>Best Time to Visit</PanelHeading>
                  <p className="text-base font-medium text-slate-300 sm:text-lg">{tour.bestTimeToVisit}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Enquiry Form */}
                <QuickEnquiryForm
                  fromCity={tour.name.split(' ')[0]}
                  toCity=""
                  pageType="sightseeing"
                />

                {/* Reviews Summary — May 2026: real per-slug reviews */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                  <h3 className="mb-4 text-xl font-bold text-white">Verified Traveller Reviews</h3>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="text-4xl font-black text-emerald-300">4.9</div>
                    <div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-amber-400" fill="currentColor" />
                        ))}
                      </div>
                      <div className="mt-1 text-sm text-slate-400">
                        {realReviewCount.toLocaleString()} reviews · last 90 days
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {realReviews.map((r, i) => (
                      <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <div className="mb-1.5 flex items-center gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-xs font-bold text-slate-950">
                            {r.name.charAt(0)}
                          </span>
                          <span className="text-xs font-semibold text-white">{r.name}</span>
                          <span className="ml-auto text-xs text-amber-400">★★★★★</span>
                        </div>
                        <p className="line-clamp-3 text-xs leading-relaxed text-slate-300">{r.body}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Need Help */}
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-600" aria-hidden />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" aria-hidden />
                  <div className="relative p-6 text-white">
                    <h3 className="mb-3 text-xl font-black">Need Help?</h3>
                    <p className="mb-4 text-sm text-emerald-100">
                      Our travel experts are available 24/7 to assist you with bookings and queries.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="tel:+917668570551"
                        onClick={() => trackPhoneCall('sightseeing_detail_sidebar')}
                        className="flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/20"
                      >
                        <Phone className="h-5 w-5" />
                        <span className="font-semibold">+91 7668570551</span>
                      </a>
                      <a
                        href={bookingHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackWhatsAppClick('sightseeing_detail_sidebar', bookingMessage)}
                        className="sheen flex items-center gap-3 rounded-xl bg-amber-400 p-3 font-black text-slate-900 transition-transform hover:scale-[1.01]"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>WhatsApp Us</span>
                      </a>
                      <a href="mailto:cabstriveni@gmail.com" className="flex items-center gap-3 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/20">
                        <Mail className="h-5 w-5" />
                        <span className="break-all font-semibold">cabstriveni@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                  <h3 className="mb-4 text-lg font-bold text-white">Why Choose Us</h3>
                  <div className="space-y-3">
                    {[
                      { icon: CheckCircle, text: 'Instant Confirmation' },
                      { icon: User, text: 'Professional Drivers' },
                      { icon: Globe, text: 'Multilingual Guides' },
                      { icon: Sparkles, text: '100% Customizable' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-slate-400">
                        <item.icon className="h-5 w-5 text-emerald-400" />
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="relative bg-slate-900/50 py-12" id="fare-calculator">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">Plan your budget</p>
            <h2 className="text-2xl font-black text-white sm:text-3xl">
              Get an instant{' '}
              <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                fare estimate
              </span>
            </h2>
            <p className="mt-2 text-slate-400">Calculate the cost for your sightseeing trip</p>
          </div>
          <FareCalculator variant="compact" className="mx-auto max-w-md" />
        </div>
      </section>

      {/* FAQ — 2-per-row glass grid (same generator + schema as before) */}
      <FaqGrid
        faqs={generateTourFAQs({
          tourName: tour.name,
          city: tour.name.split(' ')[0],
          duration: tour.duration,
          price: tour.price?.sedan,
          highlights: tour.highlights || [],
          inclusions: tour.inclusions || []
        })}
        title={`${tour.name},`}
        subtitle="Everything you need to know before booking"
      />

      {/* Related Tours */}
      <RelatedTours
        city={tour.name.split(' ')[0]}
        tours={getRelatedToursByCity(tour.name.split(' ')[0], tour.slug, 4)}
        currentSlug={tour.slug}
        title={`More Tours You Might Like`}
      />

      {/* Cross-Service Links */}
      <CrossServiceLinks
        city={tour.name.split(' ')[0]}
        title={`Other Services in ${tour.name.split(' ')[0]}`}
      />

      {/* Related Guides */}
      {relatedContent && relatedContent.length > 0 && (
        <section className="bg-slate-950 px-4 py-16">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">Keep reading</p>
            <h2 className="mt-2 text-3xl font-black text-white">
              Related{' '}
              <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">guides</span>
            </h2>
            <p className="mb-8 mt-1 text-slate-400">Explore more about {tourCity}</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {relatedContent.slice(0, 4).map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10"
                >
                  <h3 className="font-semibold text-white transition-colors group-hover:text-emerald-400">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* BOTTOM CTA — night-drive band, gold action    */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-teal-400/10 blur-[110px]" aria-hidden />

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
          <Compass className="mx-auto mb-5 h-9 w-9 text-emerald-300" aria-hidden />
          <h2 className="mx-auto max-w-3xl text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
            Ready to experience{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
              {tour.name}?
            </span>
          </h2>
          <p className="mx-auto mb-7 mt-4 max-w-2xl text-sm text-emerald-100/70 sm:text-base">
            Book now and create unforgettable memories — one message, and your car, driver and itinerary are set.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={handleBooking}
              className="sheen glow-gold inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="h-4 w-4" />
              Book Now via WhatsApp
            </button>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('sightseeing_detail_final')}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call +91 7668570551
            </a>
          </div>
        </div>
      </section>

      {/* RICH UI + RANKING BLOCK — added May 2026 */}
      <SightseeingRichBlock tour={tour} />
    </main>
  );
}

function SightseeingRichBlock({ tour }) {
  const cityKey = tour.category || (tour.slug && tour.slug.split('-')[0]) || '';
  const lowestPrice = tour.lowestPrice || (tour.pricing && tour.pricing[0]?.price) || 2500;
  const durationHrs = parseFloat((tour.duration || '8').toString().replace(/[^0-9.]/g, '')) || 8;
  const reviewCount = (tour.reviews && tour.reviews.totalReviews) || 87;
  const stats = [
    { value: durationHrs, suffix: ' hr', label: 'Duration', sublabel: 'door-to-door', format: 'decimal' },
    { value: lowestPrice, prefix: '₹', label: 'Starts at', sublabel: 'per booking', format: 'compact' },
    { value: parseFloat((tour.reviews?.averageRating || 4.9)), suffix: ' / 5', label: 'Rating', sublabel: `${reviewCount}+ reviews`, format: 'decimal' },
    { value: tour.attractions?.length || 4, label: 'Attractions', sublabel: 'covered in this tour' },
  ];

  const longTailFaqs = generateLongTailFaqs({
    mode: 'sightseeing',
    origin: cityKey,
    destination: tour.name || cityKey,
    distanceKm: tour.distanceKm || 100,
    durationText: tour.duration,
    sedanFare: `₹${lowestPrice}`,
  });

  const founderQuote = getFounderQuoteForContext('sightseeing');
  const citations = getCitationsForRoute({ from: '', to: cityKey, context: 'sightseeing' });

  return (
    <div className="bg-slate-950 text-white">
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`${tour.name} by the numbers`}
              subtitle="Tour duration, pricing band, verified rating count and attraction coverage. Pricing reflects current booking quotes."
              stats={stats}
              tone="emerald"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={tour.distanceKm || 100}
              mode="sightseeing"
              vehicles={[
                { key: 'sedan', label: 'Sedan (1-3 pax)', ratePerKm: 11, baseFare: lowestPrice * 0.8 },
                { key: 'suv', label: 'SUV (4-6 pax)', ratePerKm: 14, baseFare: lowestPrice * 1.1 },
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20, baseFare: lowestPrice * 1.6 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24, baseFare: lowestPrice * 2.0 },
              ]}
              tone="emerald"
              originName=""
              destinationName={tour.name}
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
            <span className="text-emerald-400 font-semibold text-sm tracking-widest uppercase">Tour Q&amp;A</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">More about the {tour.name} experience</h2>
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
