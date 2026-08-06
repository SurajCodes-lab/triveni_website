'use client';

// ============================================================================
// SightseeingMainClient — Ultra-Premium v2 (Aug 2026)
// The /sightseeing hub. Family identity: EMERALD/TEAL on slate-950; foil
// headline = emerald-tinted gradient (from-emerald-200 via-emerald-400 to
// teal-600); GOLD is reserved for CTAs and prices only.
// Zero framer-motion (CSS-only transitions, INP-friendly); icons only from
// '@/components/ui/icons'; fixed-height image containers (no CLS).
// ============================================================================

import { useState, memo, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Clock, Sparkles, Star, Users, Calendar, ChevronRight, ChevronDown,
  Heart, CheckCircle, Phone, MessageCircle, Compass, Camera
} from '@/components/ui/icons';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getSightseeingReviews, getDeterministicReviewCount } from '@/lib/seo/review-helpers';
import { getUrgencySignals } from '@/utilis/sightseeingEnrichment';

// Real review snippets for the hub (rotates from the sightseeing review pool)
const HUB_REVIEWS = getSightseeingReviews('sightseeing-hub-may-2026');
const HUB_REVIEW_COUNT = getDeterministicReviewCount('sightseeing-hub-may-2026', 800, 1400);

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

/* v2 heading: eyebrow + serif/foil headline in this family's emerald foil. */
function EmeraldHeading({ eyebrow, title, foil, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
        {title}{' '}
        {foil && (
          <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
            {foil}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function SightseeingMainClient({ data, faqData }) {
  const [favorites, setFavorites] = useState([]);
  const [openFaq, setOpenFaq] = useState(null);

  // Show all tours (removed filter functionality)
  const filteredTours = data.allTours;

  const toggleFavorite = useCallback((tourId) => {
    setFavorites(prev =>
      prev.includes(tourId)
        ? prev.filter(id => id !== tourId)
        : [...prev, tourId]
    );
  }, []);

  const hubWhatsappText = 'Hi, I want to book a sightseeing tour. Please share tour options and best rates.';
  const hubWhatsappHref = `https://wa.me/917668570551?text=${encodeURIComponent(hubWhatsappText)}`;

  return (
    <main className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/CollectionPage">
      <SetStickyCta
        label="Sightseeing Tours"
        whatsappText={hubWhatsappText}
      />

      {/* ============================================ */}
      {/* HERO — cinematic photography, serif+foil      */}
      {/* ============================================ */}
      <header>
        <section className="relative flex min-h-[74vh] flex-col justify-end overflow-hidden bg-slate-950 sm:min-h-[80vh]">
          {/* Fixed full-bleed photo — no CLS */}
          <div className="absolute inset-0">
            <Image
              src="/images/sightseeing/Sightseeingpage_hero_section_image.jpg"
              alt="Discover India's Hidden Treasures - Sightseeing Tours"
              fill
              priority
              fetchPriority="high"
              quality={88}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/50 via-transparent to-teal-950/45" />
          </div>

          {/* Emerald aurora glows */}
          <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-[140px]" aria-hidden />
          <div className="pointer-events-none absolute bottom-28 -left-16 h-64 w-64 rounded-full bg-teal-400/10 blur-[110px]" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-md">
              <Camera className="h-3.5 w-3.5" />
              {data.allTours.length}+ curated tours · 20+ destinations
            </span>

            <h1 className="speakable-headline mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Sightseeing tours
              <span className="mt-2 block font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                across North India.
              </span>
            </h1>

            <p className="speakable-lead mt-4 max-w-2xl text-sm leading-relaxed text-slate-300/90 sm:text-base md:text-lg">
              Expertly curated sightseeing tours across India’s most breathtaking destinations —
              a private AC car, a driver who knows every gate, and free hotel pickup on every tour.
            </p>

            {/* Compact CTAs — gold, black text, sheen */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={hubWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('sightseeing_hub_hero', hubWhatsappText)}
                className="sheen glow-gold inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Book via WhatsApp
              </a>
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('sightseeing_hub_hero')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call 7668570551
              </a>
              <Link
                href="#tours"
                className="inline-flex min-h-[46px] items-center justify-center gap-1.5 px-3 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
              >
                Explore tours <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stat tiles — glass, data-driven */}
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { number: `${data.allTours.length}+`, label: 'Tours' },
                { number: `${HUB_REVIEW_COUNT.toLocaleString()}+`, label: 'Verified Reviews' },
                { number: '4.9★', label: 'Avg Rating' }
              ].map((stat, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-center backdrop-blur-xl">
                  <p className="text-xl font-black leading-tight text-white sm:text-2xl">{stat.number}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-300/70 sm:text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>

      <SocialProofStrip theme="dark" />

      {/* ============================================ */}
      {/* REVIEWS + ENQUIRY — above-the-fold conversion */}
      {/* ============================================ */}
      <section className="relative border-y border-emerald-500/20 bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 py-10 text-white md:py-14" aria-labelledby="quote-cta-heading">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left: Real review snippets */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 backdrop-blur-md">
                <Star className="h-4 w-4 text-emerald-300" fill="currentColor" />
                <span className="text-xs font-semibold text-emerald-200">Verified Traveller Reviews</span>
              </div>
              <h2 id="quote-cta-heading" className="mb-6 text-2xl font-black leading-tight md:text-4xl">
                What our travellers say about
                <span className="block font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                  our sightseeing tours
                </span>
              </h2>
              <div className="space-y-4">
                {HUB_REVIEWS.slice(0, 3).map((r, i) => (
                  <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-colors hover:border-emerald-400/30">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 font-bold text-slate-950">
                        {r.name.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{r.name}</p>
                        <p className="flex gap-0.5 text-amber-400">{'★★★★★'}</p>
                      </div>
                    </div>
                    <p className="line-clamp-3 text-sm leading-relaxed text-slate-300">{r.body}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Above-the-fold enquiry form */}
            <div className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-emerald-500/25 bg-white/5 p-1 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.4rem] p-5 md:p-6">
                  <div className="mb-4 text-center">
                    <h3 className="text-xl font-bold text-white md:text-2xl">Get Tour Quote in 2 Min</h3>
                    <p className="mt-1 text-xs text-slate-400 md:text-sm">No spam · Reply on WhatsApp in ~2 minutes</p>
                  </div>
                  <QuickEnquiryForm pageType="sightseeing" />
                  <div className="mt-3 flex items-center justify-center gap-4 border-t border-white/10 pt-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-emerald-400" /> Free cancellation</span>
                    <span className="flex items-center gap-1"><CheckCircle className="h-4 w-4 text-emerald-400" /> No card needed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED TOURS                                */}
      {/* ============================================ */}
      {data.featuredTours.length > 0 && (
        <section id="tours" className="bg-slate-950 py-14 md:py-20" aria-labelledby="featured-tours-heading">
          <div className="container mx-auto px-4 sm:px-6">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">Traveller favourites</p>
            <h2 id="featured-tours-heading" className="mt-3 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
              Featured{' '}
              <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                tours
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:text-base">
              Our most popular and highly-rated sightseeing experiences
            </p>
            <EmeraldLane className="mx-auto mt-8 max-w-sm" />

            <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
              {data.featuredTours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  isFavorite={favorites.includes(tour.id)}
                  onToggleFavorite={toggleFavorite}
                  featured={true}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* ALL TOURS                                     */}
      {/* ============================================ */}
      <section
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-14 md:py-20"
        aria-labelledby="all-tours-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/5 blur-[180px]" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">The full collection</p>
          <h2 id="all-tours-heading" className="mt-3 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl" itemProp="name">
            All sightseeing{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
              tours
            </span>
          </h2>
          <p className="mt-4 text-center text-sm text-slate-400 sm:text-base">
            {filteredTours.length} {filteredTours.length === 1 ? 'tour' : 'tours'} available — every fare covers the car, fuel, driver, tolls and parking
          </p>

          <div className="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                isFavorite={favorites.includes(tour.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-lg text-slate-400">No tours found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US — glass stat tiles              */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <EmeraldHeading eyebrow="The Triveni difference" title="Why choose our" foil="tours?" />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Expert Guides',
                description: 'Certified local guides with deep cultural knowledge'
              },
              {
                icon: Calendar,
                title: 'Flexible Booking',
                description: 'Easy online booking with instant confirmation'
              },
              {
                icon: Sparkles,
                title: 'Premium Experience',
                description: 'Comfortable transport and personalized service'
              },
              {
                icon: Star,
                title: 'Highly Rated',
                description: '4.8★ average rating from 5000+ tourists'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-400/40"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 p-3.5 ring-1 ring-emerald-400/25">
                  <feature.icon className="h-6 w-6 text-emerald-300" />
                </div>
                <h3 className="mb-2 text-lg font-black text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ CARDS — 2-per-row glass grid              */}
      {/* ============================================ */}
      <section className="bg-slate-950 py-14 md:py-20" id="faq">
        <div className="container mx-auto px-4 sm:px-6">
          <EmeraldHeading
            eyebrow="Got questions?"
            title="Frequently asked,"
            foil="answered"
            subtitle="Everything you need to know about our sightseeing tours"
          />
          <EmeraldLane className="mx-auto mt-8 max-w-xs" />

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                question: 'What destinations do you cover?',
                answer: 'We offer tours across 20+ destinations including Delhi, Agra (Taj Mahal), Jaipur, Udaipur, Jodhpur, Varanasi, Mumbai, Goa, and more.',
                icon: MapPin
              },
              {
                question: 'Are tour guides included?',
                answer: 'Yes! Professional guides fluent in English, Hindi, French, Spanish, German & Chinese are included with every tour.',
                icon: Users
              },
              {
                question: 'Can I customize my tour?',
                answer: 'Absolutely! Choose your monuments, duration, meal preferences & special interests. We create your perfect itinerary.',
                icon: Sparkles
              },
              {
                question: 'What’s included in packages?',
                answer: 'AC transport, professional driver, tour guide, fuel, parking, tolls & complete itinerary planning. Entrance fees extra.',
                icon: CheckCircle
              },
              {
                question: 'How long are the tours?',
                answer: 'Flexible durations: Half-day (4-5 hrs), Full-day (8-10 hrs), or multi-day packages customized to your schedule.',
                icon: Clock
              },
              {
                question: 'What vehicles are available?',
                answer: 'Sedan (4 pax), SUV (6 pax), Tempo Traveller (12-16 pax). All AC, well-maintained with experienced drivers.',
                icon: MapPin
              },
              {
                question: 'How do I book a tour?',
                answer: 'Easy! WhatsApp us at +91-7668570551, call directly, or use our website. Instant confirmation guaranteed!',
                icon: Calendar
              },
              {
                question: 'Family-friendly tours?',
                answer: 'Yes! Flexible schedules, comfortable vehicles & child-friendly attractions. We customize pace for families.',
                icon: Heart
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/40 sm:p-7"
              >
                {/* Emerald accent line */}
                <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-emerald-400/70 to-teal-500/70" aria-hidden />

                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/25 to-teal-500/25 ring-1 ring-emerald-400/30">
                  <faq.icon className="h-5 w-5 text-emerald-300" />
                </div>

                <h3 className="mb-2.5 text-base font-bold text-white transition-colors group-hover:text-emerald-300 sm:text-lg">
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MID CTA — still have questions                */}
      {/* ============================================ */}
      <section className="border-y border-emerald-500/20 bg-gradient-to-r from-emerald-950 via-slate-950 to-teal-950 py-10 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-xl font-bold text-white sm:text-2xl md:text-3xl">
                Still have{' '}
                <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                  questions?
                </span>
              </h3>
              <p className="text-sm text-emerald-100/70 sm:text-base">
                Our travel experts are available 24/7 to help you plan the perfect tour
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('sightseeing_hub_footer')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                onClick={() => trackWhatsAppClick('sightseeing_hub_footer', hubWhatsappText)}
                href={hubWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="sheen glow-gold inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* POPULAR DESTINATIONS — photo cards            */}
      {/* ============================================ */}
      <section className="relative bg-slate-950 py-14 md:py-20">
        <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-teal-500/5 blur-[140px]" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <EmeraldHeading
            eyebrow="Explore India"
            title="Popular"
            foil="destinations"
            subtitle="Discover India’s most iconic cities with our expert-guided tours"
          />
          <EmeraldLane className="mx-auto mt-8 max-w-sm" />

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-7">
            {[
              {
                name: 'Delhi',
                slug: 'delhi',
                desc: 'Capital Heritage',
                tagline: 'Red Fort • Qutub Minar • India Gate',
                tours: '8+ Tours',
                image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg'
              },
              {
                name: 'Agra',
                slug: 'agra',
                desc: 'Wonder of the World',
                tagline: 'Taj Mahal • Agra Fort • Fatehpur Sikri',
                tours: '6+ Tours',
                image: '/images/sightseeing/Agra/Agra_hero_section.jpg'
              },
              {
                name: 'Jaipur',
                slug: 'jaipur',
                desc: 'The Pink City',
                tagline: 'Amber Fort • Hawa Mahal • City Palace',
                tours: '7+ Tours',
                image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg'
              },
              {
                name: 'Udaipur',
                slug: 'udaipur',
                desc: 'City of Lakes',
                tagline: 'Lake Palace • City Palace • Pichola',
                tours: '5+ Tours',
                image: '/images/sightseeing/Udaipur/Udaipur_hero_section.jpg'
              },
              {
                name: 'Varanasi',
                slug: 'varanasi',
                desc: 'Spiritual Capital',
                tagline: 'Ghats • Temples • Ganga Aarti',
                tours: '4+ Tours',
                image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg'
              },
              {
                name: 'Jodhpur',
                slug: 'jodhpur',
                desc: 'The Blue City',
                tagline: 'Mehrangarh • Jaswant Thada • Blue Streets',
                tours: '4+ Tours',
                image: '/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg'
              }
            ].map((city) => (
              <Link key={city.slug} href={`/sightseeing/${city.slug}`} className="group block">
                <div className="relative h-72 cursor-pointer overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 sm:h-80">
                  {/* Fixed-height photo — no CLS */}
                  <div className="absolute inset-0 bg-slate-900">
                    {city.image && (
                      <Image
                        src={city.image}
                        alt={`${city.name} Tours`}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Tours Badge */}
                  <span className="absolute right-4 top-4 rounded-full border border-emerald-400/30 bg-slate-950/60 px-3 py-1 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                    {city.tours}
                  </span>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-300" />
                      <span className="font-serif italic text-sm text-emerald-200/90">{city.desc}</span>
                    </div>
                    <h3 className="mb-2 text-2xl font-black text-white transition-colors group-hover:text-emerald-300 sm:text-3xl">
                      {city.name}
                    </h3>
                    <p className="mb-4 text-sm text-white/70">{city.tagline}</p>
                    <span className="flex items-center gap-2 text-sm font-semibold text-white transition-all group-hover:gap-3 group-hover:text-emerald-300">
                      Explore Tours
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ (server data) — 2-per-row accordions      */}
      {/* ============================================ */}
      {faqData && (
        <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-14 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6">
            <EmeraldHeading
              eyebrow="Before you book"
              title="More questions,"
              foil="more answers"
              subtitle="Everything you need to know about our sightseeing tours"
            />

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {faqData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className={`h-fit rounded-2xl border bg-white/5 backdrop-blur-xl transition-colors duration-300 ${
                      isOpen ? 'border-emerald-400/40' : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="pr-2 text-sm font-semibold leading-snug text-white sm:text-base">{faq.question}</span>
                      <ChevronDown
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                      <div className="overflow-hidden">
                        <p className="border-t border-white/10 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-300">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* FINAL CTA — night-drive band, gold action     */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 py-16 text-white md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-teal-400/10 blur-[110px]" aria-hidden />

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
          <Compass className="mx-auto mb-5 h-9 w-9 text-emerald-300" aria-hidden />
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Ready to start your{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
              adventure?
            </span>
          </h2>
          <p className="mx-auto mb-7 mt-4 max-w-2xl text-sm text-emerald-100/70 sm:text-base md:text-lg">
            Book your perfect sightseeing tour today and create memories that last a lifetime
          </p>
          <a
            onClick={() => trackWhatsAppClick('sightseeing_hub_final', hubWhatsappText)}
            href={hubWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="sheen glow-gold inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Book Now via WhatsApp
          </a>
        </div>
      </section>

      {/* Mobile sticky bar for instant conversion access */}
    </main>
  );
}

// Tour Card Component - memoized to prevent re-renders when favorites change for other cards
const TourCard = memo(function TourCard({ tour, isFavorite, onToggleFavorite, featured = false }) {
  const urgency = getUrgencySignals(tour.slug);
  return (
    <article
      className="group relative"
      itemScope
      itemType="https://schema.org/TouristTrip"
    >
      <Link href={`/sightseeing/${tour.slug}`} itemProp="url">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-emerald-500/10">
          {/* Fixed-height photo — no CLS */}
          <div className="relative h-60 w-full overflow-hidden bg-slate-900">
            {tour.heroImage ? (
              <>
                <Image
                  src={tour.heroImage}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800" />
            )}

            {featured && (
              <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-[10px] font-black uppercase tracking-wide text-slate-900 shadow-lg">
                <Star className="h-3 w-3" fill="currentColor" />
                Featured
              </span>
            )}

            {/* Urgency badge — booked X times */}
            <span className="absolute right-14 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-emerald-500/95 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"></span>
              {urgency.bookedThisMonth} booked this month
            </span>

            <div className="absolute bottom-4 left-4 right-4 z-10">
              <h4 className="text-lg font-black text-white drop-shadow-lg">{tour.name}</h4>
              <p className="mt-1 flex items-center gap-1 text-xs text-emerald-200">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"></span>
                {urgency.viewingNow} viewing · last booked {urgency.lastBooked} ago
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-emerald-300" itemProp="name">
              {tour.name}
            </h3>

            <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">
              {tour.shortDescription}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/20">
                <Clock className="h-3.5 w-3.5" /> {tour.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                <MapPin className="h-3.5 w-3.5 text-teal-400" /> {tour.category}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <div>
                <p className="text-2xl font-black leading-tight text-amber-300">
                  ₹{tour.price.sedan?.toLocaleString()}
                </p>
                <p className="text-xs text-slate-500">Starting price (Sedan)</p>
              </div>
              <span className="sheen inline-flex items-center gap-1 rounded-full bg-amber-400 px-4 py-2 text-sm font-black text-slate-900 transition-all group-hover:translate-x-0.5">
                View Tour <ChevronRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>

      {/* Favorite Button */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onToggleFavorite(tour.id);
        }}
        aria-label={isFavorite ? `Remove ${tour.name} from favourites` : `Save ${tour.name} to favourites`}
        aria-pressed={isFavorite}
        className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-slate-950/60 p-2 shadow-lg backdrop-blur-md transition-transform hover:scale-110"
      >
        <Heart className={`h-5 w-5 ${isFavorite ? 'text-red-500' : 'text-white'}`} fill={isFavorite ? 'currentColor' : 'none'} />
      </button>
    </article>
  );
});
