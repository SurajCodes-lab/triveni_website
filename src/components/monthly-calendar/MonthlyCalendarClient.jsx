'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, ChevronDown, Clock, Car, CheckCircle2,
  MapPin, Star, Users, Calendar, CloudSun, Sparkles, Award,
  ChevronRight, ChevronLeft, Compass
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

export default function MonthlyCalendarClient({ data, prev, next }) {
  const [activeDest, setActiveDest] = useState(-1);
  const whatsappMsg = `Hi, I want to plan a trip in ${data.month}. Please suggest destinations and cab rates.`;
  const firstCity = data.destinations?.[0]?.name || '';
  const heroImage = getCityImage(firstCity);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Travel almanac ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`Best places to visit in ${data.month}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          {/* Month navigation */}
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link href={`/where-to-go/${prev.slug}`} className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-2 rounded-full text-sm text-white/60 border border-white/15 hover:text-emerald-300 hover:border-emerald-400/30 transition-all">
              <ChevronLeft className="w-4 h-4" /> {prev.month}
            </Link>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 font-semibold text-sm">Travel Calendar 2026</span>
            </div>
            <Link href={`/where-to-go/${next.slug}`} className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-2 rounded-full text-sm text-white/60 border border-white/15 hover:text-emerald-300 hover:border-emerald-400/30 transition-all">
              {next.month} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest">Travel Almanac</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Where to Go in</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">{data.month}</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{data.tagline}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('monthly_calendar_hero')} className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  Plan My Trip <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+917668570551" onClick={() => trackPhoneCall('monthly_calendar_hero')} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Destinations</p>
                  <p className="text-3xl font-black text-white leading-tight">{data.destinations.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Festivals</p>
                  <p className="text-3xl font-black text-white leading-tight">{data.festivals.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Rating</p>
                  <p className="text-sm font-bold text-[#FACF2D]">4.9/5 Stars</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Support</p>
                  <p className="text-sm font-bold text-white/80">24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Weather / Crowd / Price indicators ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">{data.month} at a Glance</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: MapPin, label: 'Top Picks', value: `${data.destinations.length} places`, color: 'text-emerald-400' },
              { icon: Sparkles, label: 'Festivals', value: `${data.festivals.length} events`, color: 'text-teal-400' },
              { icon: Star, label: 'Traveler Rating', value: '4.9 / 5', color: 'text-[#FACF2D]' },
              { icon: Clock, label: 'Booking', value: '24/7 Support', color: 'text-cyan-400' },
            ].map((s, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center">
                <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2`} />
                <p className="text-sm font-black text-white">{s.value}</p>
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DESTINATIONS: Expandable cards ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Top Destinations</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Where to Go in {data.month}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.destinations.map((dest, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div onClick={() => setActiveDest(activeDest === i ? -1 : i)}
                  className={`bg-white rounded-xl border p-5 cursor-pointer transition-all duration-300 ${activeDest === i ? 'border-emerald-300 shadow-md' : 'border-slate-200 hover:border-slate-300 hover:shadow-sm'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{dest.name}</h3>
                      <p className="text-slate-500 text-sm mt-1">{dest.why}</p>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${activeDest === i ? 'bg-emerald-100 rotate-180' : 'bg-slate-100'}`}>
                      <ChevronDown className={`w-4 h-4 ${activeDest === i ? 'text-emerald-600' : 'text-slate-500'}`} />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full">
                      <CloudSun className="w-3 h-3" /> {dest.weather}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full">
                      <Users className="w-3 h-3" /> {dest.crowd}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full">
                      <Car className="w-3 h-3" /> {typeof dest.cabFare === 'number' ? `From \u20B9${dest.cabFare.toLocaleString('en-IN')}` : dest.cabFare}
                    </span>
                  </div>

                  <div className={`overflow-hidden transition-all duration-300 ${activeDest === i ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                    <div className="h-px bg-slate-100 mb-3" />
                    <div className="flex items-center gap-2 text-sm mb-2">
                      <span className="text-emerald-600 font-bold">Budget:</span>
                      <span className="text-slate-600">{dest.budgetRange} per person</span>
                    </div>
                    <p className="text-emerald-600 font-bold text-sm mb-2">Highlights:</p>
                    <div className="space-y-1.5">
                      {dest.highlights.map((h, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {h}
                        </div>
                      ))}
                    </div>
                    <a href="tel:+917668570551" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm mt-3 hover:gap-3 transition-all">
                      Book Cab to {dest.name} <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FESTIVALS: Dark section ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Festivals & Events</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">{data.month} Festivals</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {data.festivals.map((fest, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 flex items-start gap-4 hover:border-[#FACF2D]/30 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{fest.name}</h3>
                    <p className="text-emerald-400 text-sm font-medium mt-0.5">{fest.date}</p>
                    <p className="text-white/40 text-sm mt-0.5">{fest.where}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TRAVEL TIPS ━━━ */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-6 sm:p-8" data-snippet-type="direct-answer">
              <div className="key-info">
                <div className="flex items-center gap-3 mb-5">
                  <Award className="w-6 h-6 text-emerald-600" />
                  <h2 className="text-xl font-black text-slate-900">{data.month} Travel Tips</h2>
                </div>
                <div className="space-y-3">
                  {data.travelTips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-600 text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <FaqAccordion heading={`FAQs for ${data.month} Travel`} faqs={data.faqs} />

      {/* ━━━ MONTH NAVIGATION ━━━ */}
      <section className="py-12 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4 justify-between">
          <ScrollReveal>
            <Link href={`/where-to-go/${prev.slug}`} className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-emerald-200 transition-all group flex-1">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1"><ChevronLeft className="w-3 h-3" /> Previous Month</p>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{prev.month}</h3>
              <p className="text-slate-500 text-sm mt-1">{prev.tagline}</p>
            </Link>
          </ScrollReveal>
          <ScrollReveal stagger={80}>
            <Link href={`/where-to-go/${next.slug}`} className="block bg-white rounded-xl border border-slate-200 p-5 hover:shadow-md hover:border-emerald-200 transition-all group flex-1 text-right">
              <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1 justify-end">Next Month <ChevronRight className="w-3 h-3" /></p>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{next.month}</h3>
              <p className="text-slate-500 text-sm mt-1">{next.tagline}</p>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection heading={`Plan Your ${data.month} Trip`} subheading={`Tell us your dates and preferences. We'll plan the perfect ${data.month} getaway with cab, hotel, and sightseeing.`} />
      <MobileStickyBar />
    </div>
  );
}
