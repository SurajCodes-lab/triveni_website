'use client';

// ============================================================================
// CityToursPage — Ultra-Premium v2 (Aug 2026)
// Sightseeing family keeps its EMERALD/TEAL identity on slate-950.
// Foil headline = emerald-tinted gradient (from-emerald-200 via-emerald-400
// to-teal-600); GOLD is reserved for CTAs and prices only.
// Zero framer-motion (CSS-only transitions, INP-friendly); icons only from
// '@/components/ui/icons'; fixed-height image containers (no CLS).
// ============================================================================

import { useState } from 'react';
import { getToursByCity } from '@/utilis/sightseeingData';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Clock, Sparkles, Star, ChevronRight, ChevronDown, Users, Calendar,
  Phone, MessageCircle, Compass
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { generateFAQSchema } from '@/lib/seo/schema-generators';

// Shared Components
import SocialProofStrip from '@/components/shared/SocialProofStrip';

// SEO Components
import QuickAnswer from '@/components/seo/QuickAnswer';
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import { CrossServiceLinks, NearbyDestinations } from '@/components/seo/RelatedContent';
import { generateCityFAQs } from '@/lib/seo/faq-generator';
import { getNearbyDestinations, getRelatedContent } from '@/utilis/linkingHelper';

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
function EmeraldHeading({ eyebrow, title, foil, subtitle, align = 'center' }) {
  const alignCls = align === 'left' ? 'text-left' : 'text-center';
  return (
    <div className={`${alignCls} ${align === 'center' ? 'mx-auto max-w-3xl' : 'max-w-3xl'}`}>
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
        <p className={`mt-4 text-sm leading-relaxed text-slate-400 sm:text-base ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* FAQ — 2-per-row glass accordions (CSS grid-rows transition, no JS animation
   lib). Emits the same FAQPage schema FAQSection used to emit. */
function FaqGrid({ faqs, title, subtitle }) {
  const [open, setOpen] = useState(0);
  if (!faqs || faqs.length === 0) return null;
  const schema = generateFAQSchema(faqs);
  return (
    <section className="bg-slate-950 px-4 py-14 sm:px-6 md:py-20" aria-labelledby="city-faq-heading">
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <div className="mx-auto max-w-6xl">
        <EmeraldHeading eyebrow="Good to know" title={title} foil="answered" subtitle={subtitle} />
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

export default function CityToursPage({ city }) {
  const tours = getToursByCity(city);
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);
  const relatedContent = getRelatedContent(cityName);

  if (!tours || tours.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-black text-white">No Tours Found</h1>
          <p className="mb-6 text-slate-400">We don’t have tours for {cityName} yet.</p>
          <Link href="/sightseeing" className="text-emerald-400 hover:underline">
            Browse All Tours →
          </Link>
        </div>
      </div>
    );
  }

  const heroImage = tours[0]?.heroImage || `/images/destinations/${city}.jpg`;
  const cityWhatsappText = `Hi, I want to book a ${cityName} sightseeing tour. Please share tour options and best rates.`;
  const cityWhatsappHref = `https://wa.me/917668570551?text=${encodeURIComponent(cityWhatsappText)}`;

  // --- Quick Answer (AEO/GEO) — fact-first, built only from sightseeingData ---
  //
  // A city bucket holds every tour that *departs* from the city, so the
  // multi-day entries ("Jaipur to Jaisalmer 3 Days") carry highlights in
  // other cities. Rank by rough duration so the in-city day tours lead, and
  // only quote spots from those — otherwise "things to do in Jaipur" ends up
  // listing Jaisalmer Fort.
  const durationHours = (d) => {
    const text = String(d || '');
    const days = text.match(/(\d+)\s*days?/i);
    if (days) return parseInt(days[1], 10) * 24;
    if (/^half day/i.test(text)) return 5;
    const hours = text.match(/(\d+(?:\.\d+)?)\s*hours?/i);
    if (hours) return parseFloat(hours[1]);
    return 12;
  };
  const fareOf = (t) => {
    const f = [t.price?.sedan, t.price?.suv, t.price?.tempoTraveller, t.price?.carRental].filter(Boolean);
    return f.length ? Math.min(...f) : null;
  };
  const byLength = [...tours].sort((a, b) => durationHours(a.duration) - durationHours(b.duration));
  const dayTours = byLength.filter((t) => durationHours(t.duration) <= 24);
  const spotSource = dayTours.length ? dayTours : byLength;
  const dayFares = spotSource.map(fareOf).filter(Boolean);
  const allFares = tours.map(fareOf).filter(Boolean);
  const fromFare = dayFares.length ? Math.min(...dayFares) : (allFares.length ? Math.min(...allFares) : null);
  // Highlights read "Name - description", but some entries are plain selling
  // points ("Golden hour photography paradise"). Prefer the "Name - …" form so
  // we quote places, and drop entries already covered by a longer one
  // ("City Palace" under "Hawa Mahal & City Palace").
  const placeNames = (t) => {
    const hs = (t.highlights || []).map(String);
    const structured = hs.filter((h) => h.includes(' - '));
    return (structured.length ? structured : hs).slice(0, 4).map((h) => h.split(' - ')[0].trim());
  };
  const topSpots = spotSource
    .slice(0, 3)
    .flatMap(placeNames)
    .filter(Boolean)
    .reduce((acc, spot) => {
      const lower = spot.toLowerCase();
      if (acc.some((s) => s.toLowerCase().includes(lower) || lower.includes(s.toLowerCase()))) return acc;
      acc.push(spot);
      return acc;
    }, [])
    .slice(0, 6);
  const multiDayCount = tours.length - dayTours.length;
  const farePhrase = fromFare
    ? `, ${dayTours.length ? 'with day tours from' : 'from'} ₹${fromFare.toLocaleString()} for an AC sedan`
    : '';
  const cityQuickAnswer = [
    `Triveni Cabs runs ${tours.length} ready-to-book ${cityName} sightseeing tour${tours.length === 1 ? '' : 's'}${farePhrase}.`,
    topSpots.length ? ` The most-visited stops are ${topSpots.join(', ')}.` : '',
    dayTours.length && multiDayCount > 0
      ? ` ${multiDayCount} multi-day package${multiDayCount > 1 ? 's run' : ' runs'} onward from ${cityName} as well.`
      : '',
    ` Every tour is a private car with a driver — fuel, tolls and parking included — with free pickup from your ${cityName} hotel, home or station. Call +91-7668570551 or WhatsApp to confirm dates.`
  ].join('');
  const cityQuickFacts = [
    { label: 'Tours available', value: `${tours.length}` },
    fromFare ? { label: dayTours.length ? 'Day tour from' : 'Tours from', value: `₹${fromFare.toLocaleString()}` } : null,
    spotSource[0]?.duration ? { label: 'Typical length', value: spotSource[0].duration } : null,
    { label: 'Pickup', value: `Free ${cityName} pickup` }
  ].filter(Boolean).slice(0, 4);

  // Hero stat tiles — data-driven only (no placeholder facts).
  const heroStats = [
    { label: 'Ready-to-book tours', value: `${tours.length}` },
    fromFare ? { label: dayTours.length ? 'Day tours from' : 'Tours from', value: `₹${fromFare.toLocaleString()}` } : null,
    spotSource[0]?.duration ? { label: 'Typical length', value: spotSource[0].duration } : null,
    { label: 'Hotel pickup', value: 'Free' },
  ].filter(Boolean).slice(0, 4);

  return (
    <main className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/CollectionPage">
      {/* ============================================ */}
      {/* HERO — cinematic city photography            */}
      {/* ============================================ */}
      <header>
        <section className="relative flex min-h-[72vh] flex-col justify-end overflow-hidden bg-slate-950 sm:min-h-[78vh]">
          {/* Fixed full-bleed photo — no CLS */}
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={`${cityName} Sightseeing Tours`}
              fill
              priority
              quality={88}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/45 via-transparent to-teal-950/40" />
          </div>
          {/* Emerald aurora glows */}
          <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-[130px]" aria-hidden />
          <div className="pointer-events-none absolute bottom-24 -left-16 h-64 w-64 rounded-full bg-teal-400/10 blur-[110px]" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-24 sm:px-6 sm:pb-14 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              Explore {cityName}
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {cityName} sightseeing,
              <span className="mt-2 block font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
                done the unhurried way.
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300/90 sm:text-base md:text-lg">
              {tours.length} curated {cityName} tour{tours.length === 1 ? '' : 's'} — a private AC car, a driver who
              knows every gate and every queue, and free pickup from your hotel, home or station.
            </p>

            {/* Compact CTAs — gold, black text, sheen */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={cityWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('sightseeing_city_hero', cityWhatsappText)}
                className="sheen glow-gold inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                Book on WhatsApp
              </a>
              <a
                href="tel:+917668570551"
                onClick={() => trackPhoneCall('sightseeing_city_hero')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                Call 7668570551
              </a>
              <Link
                href="#tours"
                className="inline-flex min-h-[46px] items-center justify-center gap-1.5 px-3 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
              >
                Browse tours <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stat tiles — glass, data-driven */}
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
              {heroStats.map((s, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-xl">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-300/70">{s.label}</p>
                  <p className="mt-1 text-lg font-black leading-tight text-white sm:text-xl">{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-white/5 bg-slate-950">
        <div className="container mx-auto px-4 py-4 sm:px-6">
          <SEOBreadcrumb
            items={[
              { name: 'Sightseeing', url: '/sightseeing' },
              { name: `${cityName} Tours` }
            ]}
            variant="minimal"
            showSchema={false}
          />
        </div>
      </div>

      {/* === QUICK ANSWER (AEO/GEO) — fact-first, kept high on the page === */}
      <section className="bg-slate-950 px-4 pt-6 pb-2">
        <div className="mx-auto max-w-4xl rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 p-1.5">
          <QuickAnswer
            question={`What are the top things to do in ${cityName}, and what does a day tour cost?`}
            answer={cityQuickAnswer}
            facts={cityQuickFacts}
            tone="dark"
            className="border-emerald-500/20"
          />
        </div>
      </section>

      {/* Social Proof Strip */}
      <SocialProofStrip theme="dark" />

      {/* ============================================ */}
      {/* TOURS — photo-forward card stack              */}
      {/* ============================================ */}
      <section
        id="tours"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-14 md:py-20"
        aria-labelledby="city-tours-heading"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-emerald-500/5 blur-[180px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-teal-500/5 blur-[140px]" aria-hidden />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">Pick your day</p>
          <h2 id="city-tours-heading" className="mt-3 text-center text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl" itemProp="name">
            All {cityName}{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
              tours
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:text-base">
            {tours.length} curated sightseeing experience{tours.length === 1 ? '' : 's'} — every fare covers the car, fuel, driver, tolls and parking.
          </p>
          <EmeraldLane className="mx-auto mt-8 max-w-sm" />

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 sm:gap-7">
            {tours.map((tour) => {
              const lowestPrice = Math.min(
                tour.price.sedan || Infinity,
                tour.price.suv || Infinity,
                tour.price.tempoTraveller || Infinity
              );

              return (
                <Link key={tour.id} href={`/sightseeing/${tour.slug}`} className="group block">
                  <article className="h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/40">
                    {/* Fixed-height photo — no CLS */}
                    <div className="relative h-56 w-full overflow-hidden sm:h-60">
                      {tour.heroImage ? (
                        <>
                          <Image
                            src={tour.heroImage}
                            alt={tour.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                        </>
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-cyan-800" />
                      )}

                      {tour.reviews && (
                        <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full border border-amber-400/30 bg-slate-950/70 px-3 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
                          <Star className="h-3.5 w-3.5" fill="currentColor" />
                          {tour.reviews.averageRating}
                        </span>
                      )}

                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <h3 className="text-lg font-black leading-snug text-white drop-shadow-lg">{tour.name}</h3>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-400">{tour.shortDescription}</p>

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
                            ₹{Number.isFinite(lowestPrice) ? lowestPrice.toLocaleString() : '—'}
                          </p>
                          <p className="text-xs text-slate-500">Starting price</p>
                        </div>
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 transition-all group-hover:border-emerald-400 group-hover:bg-emerald-500">
                          <ChevronRight className="h-5 w-5 text-emerald-300 transition-all group-hover:translate-x-0.5 group-hover:text-white" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY US — glass stat tiles                     */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 py-14 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <EmeraldHeading
            eyebrow="The Triveni difference"
            title={`Why travellers book ${cityName} with`}
            foil="Triveni Cabs"
          />

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Expert Local Guides',
                description: `Certified ${cityName} guides with deep cultural knowledge, arranged on request`,
              },
              {
                icon: Calendar,
                title: 'Flexible Booking',
                description: 'Confirm on WhatsApp or a call — instant confirmation, free date changes',
              },
              {
                icon: Sparkles,
                title: 'Premium Experience',
                description: 'Clean AC cars, courteous chauffeurs and a pace you set yourself',
              },
              {
                icon: Star,
                title: 'Highly Rated',
                description: '4.8 average rating from 2000+ travellers across our tours',
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

      {/* FAQ — 2-per-row glass grid (same generator + schema as before) */}
      <FaqGrid
        faqs={generateCityFAQs({
          city: cityName,
          services: ['Airport Transfer', 'Sightseeing Tours', 'Corporate Transport', 'Wedding Cars'],
          tours: tours.slice(0, 5)
        })}
        title={`${cityName} tours,`}
        subtitle={`Everything you need to know about sightseeing in ${cityName} — pricing, pickup, guides and timings.`}
      />

      {/* Cross-Service Links */}
      <CrossServiceLinks
        city={cityName}
        title={`Other Services Available in ${cityName}`}
      />

      {/* Nearby Destinations */}
      <NearbyDestinations
        currentCity={cityName}
        destinations={getNearbyDestinations(city, 6)}
        title="Explore Nearby Destinations"
      />

      {/* Travel Guides & Articles */}
      {relatedContent && relatedContent.length > 0 && (
        <section className="bg-slate-950 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-300/90">Keep reading</p>
            <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
              Travel guides &{' '}
              <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">articles</span>
            </h2>
            <p className="mb-8 mt-1 text-sm text-slate-400">Explore more about {cityName}</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {relatedContent.slice(0, 6).map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-white/10"
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
      {/* FINAL CTA — night-drive band, gold action     */}
      {/* ============================================ */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950" aria-hidden />
        <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-emerald-500/15 blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-teal-400/10 blur-[110px]" aria-hidden />

        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6">
          <Compass className="mx-auto mb-5 h-9 w-9 text-emerald-300" aria-hidden />
          <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl">
            Ready to explore{' '}
            <span className="font-serif italic font-medium bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-600 bg-clip-text text-transparent">
              {cityName}?
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-emerald-100/70 sm:text-base">
            Book your {cityName} sightseeing tour today — one message, and your car, driver and itinerary are set.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={cityWhatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('sightseeing_city_final', cityWhatsappText)}
              className="sheen glow-gold inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-amber-400 px-8 py-3.5 text-sm font-black text-slate-900 transition-transform hover:scale-[1.02] active:scale-95 sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Book Now via WhatsApp
            </a>
            <a
              href="tel:+917668570551"
              onClick={() => trackPhoneCall('sightseeing_city_final')}
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              Call +91 76685 70551
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
