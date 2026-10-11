'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, ChevronDown, Car, CheckCircle2,
  MapPin, Star, Users, Calendar, CloudSun, Sparkles, Award,
  ChevronRight, ChevronLeft, Compass
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import CTASection from '@/components/shared/CTASection';
import FleetShowcase from '@/components/shared/FleetShowcase';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

const formatFare = (fare) =>
  typeof fare === 'number' ? `₹${fare.toLocaleString('en-IN')}` : fare;

export default function MonthlyCalendarClient({ data, prev, next }) {
  const [activeDest, setActiveDest] = useState(-1);
  const [openFaq, setOpenFaq] = useState(0);
  const whatsappMsg = `Hi, I want to plan a trip in ${data.month}. Please suggest destinations and cab rates.`;
  const firstCity = data.destinations?.[0]?.name || '';
  const heroImage = getCityImage(firstCity);

  return (
    <div className="min-h-screen bg-[#FFF6DC] text-slate-900">
      <SetStickyCta label={`${data.month} Trip Planning`} whatsappText={whatsappMsg} />

      {/* ━━━ HERO — destination photo, scrim on text side only ━━━ */}
      <section className="relative min-h-[78vh] flex flex-col justify-end overflow-hidden bg-slate-950">
        <Image
          src={heroImage}
          alt={`Best places to visit in ${data.month} — ${firstCity}`}
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL={heroBlurDataURL}
        />
        {/* Scrim concentrated on the text (left) side; photo stays visible right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FACF2D]/70 to-transparent z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-16 sm:pt-28 pb-10 sm:pb-14">
          {/* Month navigation */}
          <div className="flex items-center gap-3 mb-7 flex-wrap">
            <Link href={`/where-to-go/${prev.slug}`} className="inline-flex items-center gap-1 bg-white/5 backdrop-blur-xl px-3 py-2 rounded-full text-sm text-white/60 border border-white/10 hover:text-[#FACF2D] hover:border-[#FACF2D]/40 transition-all">
              <ChevronLeft className="w-4 h-4" /> {prev.month}
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-2 rounded-full border border-white/10">
              <Calendar className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-amber-100/90 font-semibold text-sm tracking-wide">Travel Calendar 2026</span>
            </div>
            <Link href={`/where-to-go/${next.slug}`} className="inline-flex items-center gap-1 bg-white/5 backdrop-blur-xl px-3 py-2 rounded-full text-sm text-white/60 border border-white/10 hover:text-[#FACF2D] hover:border-[#FACF2D]/40 transition-all">
              {next.month} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Compass className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-amber-100/80 uppercase tracking-[0.25em]">The Travel Almanac</span>
              </div>
              <p className="text-white/50 text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] mb-3">Where to go in</p>
              <h1 className="font-display-serif text-5xl sm:text-6xl md:text-8xl text-white leading-[0.95]">
                <span className="text-gold-foil">{data.month}</span>
              </h1>
              <div className="w-16 h-px bg-gradient-to-r from-[#FACF2D] to-transparent my-5" />
              <p className="text-white/60 text-sm sm:text-base max-w-lg leading-relaxed">{data.tagline}</p>

              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('monthly_calendar_hero')}
                  className="sheen inline-flex items-center justify-center gap-2 bg-[#FACF2D] text-black w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] glow-gold lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
                >
                  Plan My {data.month} Trip <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+917668570551"
                  onClick={() => trackPhoneCall('monthly_calendar_hero')}
                  className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl text-white w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm border border-white/10 hover:border-[#FACF2D]/40 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
                >
                  <Phone className="w-4 h-4 text-[#FACF2D]" /> Call 7668570551
                </a>
              </div>

              {/* Trust row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-6 text-white/70 text-xs sm:text-sm font-medium">
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5 text-[#FACF2D] fill-[#FACF2D]" /> 4.9&#9733; Rated</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5 text-[#FACF2D]" /> 10,000+ Trips</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FACF2D]" /> Verified Drivers</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#FACF2D]" /> No Advance Payment</span>
              </div>
            </div>

            <div className="w-full lg:w-80 flex-shrink-0 space-y-4">
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 sm:p-6">
                <p className="text-[10px] text-amber-100/60 uppercase tracking-[0.25em] font-bold mb-4">{data.month} at a glance</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Destinations</p>
                    <p className="font-display-serif text-3xl text-white leading-tight">{data.destinations.length}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Festivals</p>
                    <p className="font-display-serif text-3xl text-white leading-tight">{data.festivals.length}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Rating</p>
                    <p className="text-sm font-bold text-[#FACF2D]">4.9/5 Stars</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Support</p>
                    <p className="text-sm font-bold text-white/80">24/7</p>
                  </div>
                </div>
              </div>
              <QuickEnquiryForm fromCity={firstCity} pageType="trip-planning" />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ WARM-LIGHT BAND: Destinations with photos ━━━ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFF6DC]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.3em] mb-2">Top Destinations</p>
            <h2 className="font-display-serif text-3xl sm:text-4xl md:text-5xl text-slate-900">Where to Go in {data.month}</h2>
            <div className="w-14 h-px bg-gradient-to-r from-amber-500 to-transparent mt-4 mb-10" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.destinations.map((dest, i) => (
              <ScrollReveal key={i} delay={Math.min(i, 4) * 50}>
                <div
                  onClick={() => setActiveDest(activeDest === i ? -1 : i)}
                  className={`bg-white rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${activeDest === i ? 'border-amber-300 shadow-lg shadow-amber-900/5' : 'border-amber-900/10 hover:border-amber-300/70 hover:shadow-md'}`}
                >
                  <div className="relative h-44 sm:h-48">
                    <Image
                      src={getCityImage(dest.name)}
                      alt={`${dest.name} in ${data.month}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      quality={75}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL={heroBlurDataURL}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between gap-3">
                      <h3 className="font-display-serif text-2xl text-white leading-tight">{dest.name}</h3>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-[#FACF2D] text-black px-2.5 py-1 rounded-full flex-shrink-0">
                        <Car className="w-3 h-3" /> From {formatFare(dest.cabFare)}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <p className="text-slate-600 text-sm leading-relaxed">{dest.why}</p>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${activeDest === i ? 'bg-amber-100 rotate-180' : 'bg-slate-100'}`}>
                        <ChevronDown className={`w-4 h-4 ${activeDest === i ? 'text-amber-600' : 'text-slate-500'}`} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 text-xs bg-sky-50 text-sky-800 px-3 py-1.5 rounded-full border border-sky-100">
                        <CloudSun className="w-3 h-3" /> {dest.weather}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-slate-50 text-slate-700 px-3 py-1.5 rounded-full border border-slate-100">
                        <Users className="w-3 h-3" /> {dest.crowd} crowd
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-800 px-3 py-1.5 rounded-full border border-amber-100">
                        {dest.budgetRange}
                      </span>
                    </div>

                    <div className={`overflow-hidden transition-all duration-300 ${activeDest === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                      <div className="h-px bg-amber-100 mb-3" />
                      <p className="text-amber-700 font-bold text-xs uppercase tracking-widest mb-2">Highlights</p>
                      <div className="space-y-1.5">
                        {dest.highlights.map((h, j) => (
                          <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" /> {h}
                          </div>
                        ))}
                      </div>
                      <a href="tel:+917668570551" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 text-amber-700 font-bold text-sm mt-4 hover:gap-3 transition-all">
                        Book Cab to {dest.name} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DARK BAND: The Month Ledger (fares table) + Festivals ━━━ */}
      <section className="relative py-16 md:py-24 px-4 sm:px-6 bg-aurora grain-overlay overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-[0.3em] mb-2">Cab Fares from Delhi</p>
            <h2 className="font-display-serif text-3xl sm:text-4xl md:text-5xl text-white">
              The {data.month} Ledger
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-xl">Every destination this month, side by side — weather, crowd level, trip budget and the one-way cab fare it starts at.</p>
            <div className="w-14 h-px bg-gradient-to-r from-[#FACF2D] to-transparent mt-5 mb-10" />
          </ScrollReveal>

          {/* Desktop table */}
          <ScrollReveal>
            <div className="hidden md:block bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-left">
                    <th className="px-5 py-4 text-[11px] font-bold text-amber-100/70 uppercase tracking-[0.2em]">Destination</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-amber-100/70 uppercase tracking-[0.2em]">Weather</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-amber-100/70 uppercase tracking-[0.2em]">Crowd</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-amber-100/70 uppercase tracking-[0.2em]">Trip Budget</th>
                    <th className="px-5 py-4 text-[11px] font-bold text-amber-100/70 uppercase tracking-[0.2em] text-right">Cab From</th>
                  </tr>
                </thead>
                <tbody>
                  {data.destinations.map((dest, i) => (
                    <tr key={i} className={`${i % 2 === 1 ? 'bg-white/[0.02]' : ''} border-b border-white/5 last:border-0 hover:bg-white/[0.05] transition-colors`}>
                      <td className="px-5 py-3.5 font-semibold text-white flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#FACF2D] flex-shrink-0" /> {dest.name}
                      </td>
                      <td className="px-5 py-3.5 text-white/60">{dest.weather}</td>
                      <td className="px-5 py-3.5 text-white/60">{dest.crowd}</td>
                      <td className="px-5 py-3.5 text-white/60">{dest.budgetRange}</td>
                      <td className="px-5 py-3.5 text-right font-bold text-[#FACF2D]">{formatFare(dest.cabFare)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Mobile stacked label/value cards */}
          <div className="md:hidden space-y-3">
            {data.destinations.map((dest, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-4">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <p className="font-semibold text-white flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FACF2D] flex-shrink-0" /> {dest.name}
                  </p>
                  <p className="font-bold text-[#FACF2D] text-sm flex-shrink-0">{formatFare(dest.cabFare)}</p>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40">Weather</span>
                    <span className="text-white/70 text-right">{dest.weather}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40">Crowd</span>
                    <span className="text-white/70 text-right">{dest.crowd}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-white/40">Trip budget</span>
                    <span className="text-white/70 text-right">{dest.budgetRange}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Festivals */}
          <div className="mt-10 sm:mt-16">
            <ScrollReveal>
              <p className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-[0.3em] mb-2">Festivals &amp; Events</p>
              <h3 className="font-display-serif text-2xl sm:text-3xl text-white mb-8">Worth Timing Your Trip Around</h3>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.festivals.map((fest, i) => (
                <ScrollReveal key={i} delay={i * 60}>
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 h-full hover:border-[#FACF2D]/30 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-[#FACF2D]/10 border border-[#FACF2D]/20 flex items-center justify-center mb-4">
                      <Sparkles className="w-5 h-5 text-[#FACF2D]" />
                    </div>
                    <h4 className="font-display-serif text-lg text-white">{fest.name}</h4>
                    <p className="text-white/50 text-sm leading-relaxed mt-2">{fest.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
              <p className="text-white/70 text-sm">
                <span className="text-white font-semibold">Fares are one-way from Delhi, all-inclusive quotes on call.</span>{' '}
                Tell us your dates — we’ll match the right car to the route.
              </p>
              <a
                href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('monthly_calendar_ledger')}
                className="sheen inline-flex items-center justify-center gap-2 bg-[#FACF2D] text-black w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] flex-shrink-0 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
              >
                Get {data.month} Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ WARM-LIGHT BAND: Travel tips (QuickAnswer block preserved) ━━━ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFF6DC]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-amber-900/10 shadow-sm p-6 sm:p-8" data-snippet-type="direct-answer">
              <div className="key-info">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                    <Award className="w-5 h-5 text-amber-600" />
                  </div>
                  <h2 className="font-display-serif text-2xl text-slate-900">{data.month} Travel Tips</h2>
                </div>
                <div className="space-y-3">
                  {data.travelTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FleetShowcase theme="light" accentColor="emerald" whatsappMessage="Hi, I'm planning a trip. Need cab service." title="Our Fleet" subtitle="Reliable vehicles for your travel plans" />

      {/* ━━━ DARK BAND: FAQ two-column ━━━ */}
      <section className="faq-section py-16 md:py-24 px-4 sm:px-6 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-[0.3em] mb-2 text-center">FAQ</p>
            <h2 className="font-display-serif text-3xl sm:text-4xl text-white text-center mb-10">
              FAQs for {data.month} Travel
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-4">
            {data.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={`bg-white/5 backdrop-blur-xl rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#FACF2D]/40' : 'border-white/10 hover:border-white/20'}`}>
                  <h3 className="m-0">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FACF2D]/50 rounded-2xl"
                  >
                    <span className="font-semibold text-white pr-4 text-sm sm:text-base">{faq.question}</span>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#FACF2D]/15 rotate-180' : 'bg-white/5'}`}>
                      <ChevronDown className={`w-4 h-4 ${isOpen ? 'text-[#FACF2D]' : 'text-white/50'}`} />
                    </div>
                  </button>
                  </h3>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 pb-5">
                      <div className="h-px bg-white/10 mb-4" />
                      <p className={`text-white/60 text-sm leading-relaxed ${i === 0 ? 'speakable-faq-first' : ''}`}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ WARM-LIGHT BAND: Month navigation ━━━ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#FFF6DC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-bold text-amber-700 uppercase tracking-[0.3em] mb-8 text-center">Keep Browsing the Calendar</p>
          </ScrollReveal>
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <ScrollReveal className="flex-1">
              <Link href={`/where-to-go/${prev.slug}`} className="block h-full bg-white rounded-2xl border border-amber-900/10 p-6 hover:shadow-md hover:border-amber-300 transition-all group">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-1"><ChevronLeft className="w-3 h-3" /> Previous Month</p>
                <h3 className="font-display-serif text-2xl text-slate-900 group-hover:text-amber-700 transition-colors">{prev.month}</h3>
                <p className="text-slate-500 text-sm mt-1.5">{prev.tagline}</p>
              </Link>
            </ScrollReveal>
            <ScrollReveal stagger={80} className="flex-1">
              <Link href={`/where-to-go/${next.slug}`} className="block h-full bg-white rounded-2xl border border-amber-900/10 p-6 hover:shadow-md hover:border-amber-300 transition-all group text-right">
                <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-1 justify-end">Next Month <ChevronRight className="w-3 h-3" /></p>
                <h3 className="font-display-serif text-2xl text-slate-900 group-hover:text-amber-700 transition-colors">{next.month}</h3>
                <p className="text-slate-500 text-sm mt-1.5">{next.tagline}</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTASection heading={`Plan Your ${data.month} Trip`} subheading={`Tell us your dates and preferences. We’ll plan the perfect ${data.month} getaway with cab, hotel, and sightseeing.`} />
    </div>
  );
}
