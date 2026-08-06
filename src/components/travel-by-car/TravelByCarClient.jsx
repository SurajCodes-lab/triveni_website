'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, Route, Clock, Car, MapPin, Navigation, Star,
  Fuel, Coffee, Shield, CheckCircle2, Calendar, ChevronRight,
  ChevronDown, Info, Sparkles, Award,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { generateUniqueIntro } from '@/utilis/uniqueIntroGenerator';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
// Rich UI + ranking-lift components added May 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const QUALITY_COLORS = {
  excellent: { bar: 'bg-emerald-500', text: 'text-emerald-700', bg: 'bg-emerald-50', label: 'Excellent' },
  good:      { bar: 'bg-sky-500',     text: 'text-sky-700',     bg: 'bg-sky-50',     label: 'Good' },
  moderate:  { bar: 'bg-amber-500',   text: 'text-amber-700',   bg: 'bg-amber-50',   label: 'Moderate' },
  poor:      { bar: 'bg-red-500',     text: 'text-red-700',     bg: 'bg-red-50',     label: 'Poor' },
};

function getQuality(q) {
  const k = q.toLowerCase();
  if (k.includes('excellent')) return QUALITY_COLORS.excellent;
  if (k.includes('good')) return QUALITY_COLORS.good;
  if (k.includes('moderate')) return QUALITY_COLORS.moderate;
  return QUALITY_COLORS.poor;
}

export default function TravelByCarClient({ route, relatedRoutes }) {
  const [expandedSeg, setExpandedSeg] = useState(0);
  const [activeSeason, setActiveSeason] = useState('winter');
  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination} (${route.totalDistance} km)`;
  // Phase 3: unique, entity-rich, slug-seeded intro so each travel-by-car page reads differently.
  const uniqueIntro = generateUniqueIntro({
    origin: route.origin,
    destination: route.destination,
    distance: `${route.totalDistance} km`,
    time: route.drivingTime,
    highway: route.highway,
    attractions: (route.attractions || route.topAttractions || []),
    vehicleType: route.bestCarType || 'AC sedan or SUV',
    slug: route.slug || `${route.origin}-to-${route.destination}`,
  });
  const heroImage = getCityImage(route.destination) || getCityImage(route.origin);
  const totalSegDist = route.roadMap.reduce((s, r) => s + r.distance, 0) || route.totalDistance;

  const seasons = [
    { key: 'winter', label: 'Winter', sub: 'Dec — Feb', icon: '❄', text: route.seasonalWarnings.winter, accent: 'bg-sky-500', ring: 'ring-sky-200' },
    { key: 'monsoon', label: 'Monsoon', sub: 'Jul — Sep', icon: '🌧', text: route.seasonalWarnings.monsoon, accent: 'bg-emerald-500', ring: 'ring-emerald-200' },
    { key: 'summer', label: 'Summer', sub: 'Apr — Jun', icon: '☀', text: route.seasonalWarnings.summer, accent: 'bg-amber-500', ring: 'ring-amber-200' },
  ];

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">
      <style jsx global>{`
        .tbc-serif { font-family: Georgia, 'Times New Roman', serif; }
      `}</style>

      {/* ━━━ HERO: Full-bleed immersive photo ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`Drive ${route.origin} to ${route.destination}`} fill priority className="object-cover scale-105" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/40 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-emerald-400 z-20" />
        <div className="absolute bottom-1/4 left-[6%] w-72 h-72 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/travel-by-car" className="hover:text-white/70 transition-colors">Road Trips</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          {/* Split layout: content left, stat card right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-emerald-400/25 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <Car className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Road Trip Guide</span>
              </div>
              <p className="tbc-serif text-emerald-200/70 text-base sm:text-lg italic mb-2">Drive</p>
              <h1 className="speakable-headline text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {route.origin} to {route.destination}<br />
                <span className="tbc-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-300 to-emerald-400">
                  by Car
                </span>
              </h1>
              {/* Route badge */}
              <div className="inline-flex items-center gap-2.5 mt-4 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="inline-flex items-center gap-1.5 font-bold text-white"><MapPin className="w-3.5 h-3.5 text-[#FACF2D]" />{route.origin}</span>
                <span className="flex items-center gap-1" aria-hidden="true">
                  <span className="w-8 h-px bg-gradient-to-r from-[#FACF2D]/70 to-emerald-400/70" />
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="w-8 h-px bg-gradient-to-l from-emerald-400/70 to-[#FACF2D]/70" />
                </span>
                <span className="inline-flex items-center gap-1.5 font-bold text-emerald-300"><MapPin className="w-3.5 h-3.5 text-emerald-400" />{route.destination}</span>
              </div>
              <p className="text-white/45 mt-3 text-sm sm:text-base max-w-lg leading-relaxed">{route.totalDistance} km &middot; {route.drivingTime} drive &middot; cab from <span className="text-[#FACF2D] font-bold">{route.cabFares.sedan}</span></p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('travel_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('travel_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Right: floating stat card — gold-trimmed */}
            <div className="bg-white/10 backdrop-blur-xl border border-[#FACF2D]/30 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0 shadow-2xl shadow-emerald-950/30">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Distance</p>
                  <p className="text-3xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#FACF2D] to-amber-200">{route.totalDistance}<span className="text-lg text-white/40 ml-0.5">km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Drive Time</p>
                  <p className="text-3xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-br from-emerald-300 to-emerald-400">{route.drivingTime.split('-')[0].trim()}<span className="text-lg text-white/40 ml-0.5">hrs</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Highway</p>
                  <p className="text-sm font-bold text-white/80">{route.highway}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Cab From</p>
                  <p className="text-sm font-bold text-[#FACF2D]">{route.cabFares.sedan}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DIRECT-ANSWER LEAD: voice + featured-snippet target ━━━ */}
      <section className="bg-white py-8 sm:py-10 px-4 sm:px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
            How far is {route.destination} from {route.origin} by car?
          </h2>
          <p className="speakable-lead text-slate-600 text-sm sm:text-base leading-relaxed">
            {route.destination} is approximately <strong className="text-slate-900">{route.totalDistance} km from {route.origin}</strong> by road,
            a drive of about <strong className="text-slate-900">{route.drivingTime}</strong> depending on traffic and stops.
            The recommended vehicle is a <strong className="text-slate-900">{route.bestCarType}</strong>, and a one-way AC cab
            starts at <strong className="text-slate-900">{route.cabFares.sedan}</strong> (sedan), {route.cabFares.suv} (SUV),
            or {route.cabFares.tempo} (tempo). Toll and state tax are extra. Start by 5-6 AM for the smoothest run.
          </p>
          {uniqueIntro && (
            <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed">
              {uniqueIntro}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-4">
            <Link href={`/distance/${route.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors">
              <Route className="w-3.5 h-3.5" /> {route.origin}-{route.destination} distance &amp; time
            </Link>
            <Link href={`/one-way-cab/${route.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors">
              <Car className="w-3.5 h-3.5" /> One-way cab {route.origin} to {route.destination}
            </Link>
            <Link href={`/toll-cost/${route.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full transition-colors">
              <MapPin className="w-3.5 h-3.5" /> {route.origin} to {route.destination} toll cost
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ VISUAL ROUTE STRIP: The journey at a glance ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Your Route</p>
          {/* Horizontal journey bar */}
          <div className="flex items-center gap-0 w-full">
            <div className="text-center flex-shrink-0 w-16 sm:w-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FACF2D] flex items-center justify-center mx-auto mb-1">
                <MapPin className="w-4 h-4 text-slate-900" />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">{route.origin}</p>
            </div>

            <div className="flex-1 flex h-3 sm:h-4 rounded-full overflow-hidden mx-1">
              {route.roadMap.map((seg, i) => {
                const qc = getQuality(seg.roadQuality);
                const pct = (seg.distance / totalSegDist) * 100;
                return (
                  <div key={i} className={`${qc.bar} relative group cursor-pointer transition-opacity hover:opacity-80`} style={{ width: `${pct}%` }} onClick={() => setExpandedSeg(i)}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] px-2 py-0.5 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 font-medium">
                      {seg.segment} · {seg.distance}km · {qc.label}
                    </div>
                    {i < route.roadMap.length - 1 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-full bg-slate-900/50 z-10" />
                    )}
                  </div>
                );
              })}
            </div>

            <div className="text-center flex-shrink-0 w-16 sm:w-20">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-500 flex items-center justify-center mx-auto mb-1">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <p className="text-[10px] sm:text-xs font-bold text-white truncate">{route.destination}</p>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-4">
            {Object.values(QUALITY_COLORS).map(q => (
              <div key={q.label} className="flex items-center gap-1.5">
                <div className={`w-2.5 h-2.5 rounded-full ${q.bar}`} />
                <span className="text-[10px] text-white/40 font-medium">{q.label}</span>
              </div>
            ))}
          </div>

          {/* Lead capture form */}
          <div className="mt-8 flex justify-center">
            <QuickEnquiryForm fromCity={route.origin} toCity={route.destination} pageType="route" />
          </div>
        </div>
      </section>

      {/* ━━━ ROAD SEGMENTS: Expandable detail cards ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Segment by Segment</p>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900">The Road Ahead</h2>
              </div>
              <p className="text-sm text-slate-500">{route.roadMap.length} segments · {route.totalDistance} km total</p>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {route.roadMap.map((seg, i) => {
              const qc = getQuality(seg.roadQuality);
              const isOpen = expandedSeg === i;
              return (
                <ScrollReveal key={i} delay={i * 40}>
                  <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white shadow-lg border-slate-200' : 'bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white'}`}>
                    <button onClick={() => setExpandedSeg(isOpen ? -1 : i)} className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left">
                      {/* Road quality bar indicator */}
                      <div className={`w-1.5 self-stretch rounded-full ${qc.bar} flex-shrink-0`} />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-bold text-slate-400 tabular-nums w-5">{String(i + 1).padStart(2, '0')}</span>
                          <h3 className="font-bold text-slate-900 text-sm sm:text-base truncate">{seg.segment}</h3>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500">
                          <span className="font-semibold">{seg.distance} km</span>
                          <span>{seg.time}</span>
                          <span className={`font-bold ${qc.text}`}>{seg.roadQuality}</span>
                        </div>
                      </div>

                      {/* Visual distance proportion */}
                      <div className="hidden sm:block w-20">
                        <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className={`h-full ${qc.bar} rounded-full`} style={{ width: `${(seg.distance / totalSegDist) * 100}%` }} />
                        </div>
                      </div>

                      <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    <div className={`transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                      <div className="px-5 pb-5 pl-10 sm:pl-12">
                        <div className="h-px bg-slate-100 mb-3" />
                        <p className="text-slate-600 text-sm leading-relaxed">{seg.highlights}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ PRICING: Premium bento layout ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Book This Route</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">{route.origin} to {route.destination} Cab</h2>
              <p className="text-white/30 text-sm">All-inclusive · No hidden charges</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: 'Sedan', sub: 'Swift Dzire / Etios', fare: route.cabFares.sedan, seats: '4', perKm: '₹11/km', img: '/images/car/swift_dzire.jpg', pop: false },
              { name: 'SUV', sub: 'Innova Crysta / Ertiga', fare: route.cabFares.suv, seats: '6-7', perKm: '₹15/km', img: '/images/car/innova_crysta.jpg', pop: true },
              { name: 'Tempo Traveller', sub: '12-Seater AC', fare: route.cabFares.tempo, seats: '12', perKm: '₹20/km', img: '/images/tempo/12_seater.jpg', pop: false },
            ].map((v, i) => (
              <ScrollReveal key={i} stagger={i * 100}>
                <div className={`relative rounded-2xl overflow-hidden group ${v.pop ? 'ring-2 ring-[#FACF2D]/60 shadow-2xl shadow-amber-500/20' : 'ring-1 ring-white/10'}`}>
                  {v.pop && <div className="bg-gradient-to-r from-[#FACF2D] to-amber-400 text-center py-1.5"><span className="inline-flex items-center gap-1 text-[10px] font-black text-slate-900 uppercase tracking-widest"><Star className="w-3 h-3 fill-slate-900" /> Most Popular</span></div>}
                  <div className="relative h-36 sm:h-40">
                    <Image src={v.img} alt={v.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="text-lg font-black text-white">{v.name}</h3>
                      <p className="text-[11px] text-white/50">{v.sub} · {v.seats} Seater</p>
                    </div>
                  </div>
                  <div className="bg-slate-800 p-5">
                    <div className="flex items-end justify-between mb-4">
                      <div>
                        <p className="text-[10px] text-white/30 uppercase tracking-wider">Starting from</p>
                        <p className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-amber-100">{v.fare}</p>
                      </div>
                      <span className="text-xs text-white/30 font-medium">{v.perKm}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {['AC Vehicle', 'GPS Tracked', 'Fuel Included', 'Verified Driver'].map((f, j) => (
                        <span key={j} className="flex items-center gap-1.5 text-[11px] text-white/50">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" /> {f}
                        </span>
                      ))}
                    </div>
                    <a onClick={() => trackWhatsAppClick('travel_fare')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, book ${v.name} from ${route.origin} to ${route.destination}`)}`} target="_blank" rel="noopener noreferrer"
                      className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${v.pop ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                      Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ornament divider */}
      <div className="flex items-center justify-center gap-3 py-4" aria-hidden="true">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-300" />
        <Navigation className="w-4 h-4 text-emerald-500" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-300" />
      </div>

      {/* ━━━ SEASON TABS + TIPS: Bento asymmetric ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">When to Go</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Seasonal Road Conditions</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Season tabs */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2">
              {seasons.map(s => (
                <button key={s.key} onClick={() => setActiveSeason(s.key)}
                  className={`flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 sm:py-4 rounded-xl text-left transition-all duration-300 ${
                    activeSeason === s.key ? `bg-white shadow-lg ring-2 ${s.ring}` : 'bg-white/50 hover:bg-white'
                  }`}>
                  <span className="text-lg sm:text-xl">{s.icon}</span>
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm truncate">{s.label}</p>
                    <p className="text-[10px] text-slate-400 hidden sm:block">{s.sub}</p>
                  </div>
                </button>
              ))}
            </div>
            {/* Active season detail */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              {seasons.filter(s => s.key === activeSeason).map(s => (
                <div key={s.key}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl ${s.accent} flex items-center justify-center`}>
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">{s.label} Driving Conditions</h3>
                      <p className="text-xs text-slate-400">{s.sub}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips + Food bento row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
            <ScrollReveal className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <Info className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-black text-slate-900 text-sm">Driving Tips</h3>
                </div>
                <div className="columns-1 sm:columns-2 gap-4 space-y-3">
                  {route.drivingTips.map((tip, i) => (
                    <div key={i} className="break-inside-avoid flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-md bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-black text-emerald-600">{i + 1}</span>
                      <p className="text-slate-600 text-sm leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={100}>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 p-6 h-full">
                <div className="flex items-center gap-2 mb-5">
                  <Coffee className="w-4 h-4 text-amber-700" />
                  <h3 className="font-black text-slate-900 text-sm">Food Stops</h3>
                </div>
                <div className="space-y-2.5">
                  {route.foodStops.map((stop, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/60 rounded-lg px-3 py-2">
                      <span className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center text-[10px] font-black text-amber-800 flex-shrink-0">{i + 1}</span>
                      <span className="text-sm text-slate-700 font-medium">{stop}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Car + Fuel recommendation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <ScrollReveal>
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <Car className="w-5 h-5 text-[#FACF2D] mb-3" />
                <h3 className="font-black mb-2">Best Car for This Trip</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  We recommend <span className="text-[#FACF2D] font-bold">{route.bestCarType}</span> for the {route.origin} to {route.destination} drive.
                  {route.bestCarType.toLowerCase().includes('suv') ? ' Mountain roads and luggage space make SUVs ideal.' : ' Well-maintained highway makes a sedan the perfect, cost-effective choice.'}
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={80}>
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <Fuel className="w-5 h-5 text-emerald-400 mb-3" />
                <h3 className="font-black mb-2">Fuel Planning</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  <span className="text-emerald-400 font-bold">{route.petrolStops} fuel stations</span> along the route.
                  {route.petrolStops <= 4 ? ' Limited pumps on parts of this route — fill up at every opportunity.' : ' Well-spaced stations. Fill up once mid-route for a comfortable buffer.'}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ RICH UI: Infographic + Calculator + Quote + Long-Tail FAQ + Citations ━━━ */}
      <TravelByCarRichBlock route={route} />

      {/* ━━━ FAQ ━━━ */}
      {route.faqs && route.faqs.length > 0 && (
        <section className="bg-gray-50 pt-12 sm:pt-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-xl border border-slate-200 p-5">
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1.5">Quick Answer</p>
            <p className="font-bold text-slate-900 text-sm mb-1.5">{route.faqs[0].question}</p>
            <p className="speakable-faq-first text-slate-600 text-sm leading-relaxed">{route.faqs[0].answer}</p>
          </div>
        </section>
      )}
      <FaqAccordion heading={`${route.origin} to ${route.destination} Road Trip FAQs`} faqs={route.faqs} />

      {/* ━━━ RELATED ━━━ */}
      {relatedRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">More Road Trips</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Related Driving Guides</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/travel-by-car/${r.slug}`} className="group flex items-center gap-4 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                      <Car className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{r.origin} → {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.totalDistance} km · {r.drivingTime}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Book ${route.origin} to ${route.destination} Cab`} subheading={`${route.totalDistance} km · From ${route.cabFares.sedan} · AC vehicles, verified drivers, 24/7 support`} />

      <SetStickyCta
        price={route.cabFares?.sedan}
        label={`${route.origin} → ${route.destination}`}
        whatsappText={whatsappMsg}
      />
    </div>
  );
}

function TravelByCarRichBlock({ route }) {
  const distanceKm = route.totalDistance || 250;
  const sedanFareNum = parseInt((route.cabFares?.sedan || '').replace(/[^0-9]/g, ''), 10) || 4000;
  const drivingHours = parseFloat((route.drivingTime || '5').toString().replace(/[^0-9.]/g, '')) || 5;
  const stats = [
    { value: distanceKm, suffix: ' km', label: 'Total distance', sublabel: 'one-way' },
    { value: drivingHours, suffix: ' hr', label: 'Driving time', sublabel: 'plus stops', format: 'decimal' },
    { value: sedanFareNum, prefix: '₹', label: 'Sedan from', sublabel: 'all-inclusive', format: 'compact' },
    { value: route.fuelStops?.length || 3, label: 'Fuel stops', sublabel: 'recommended en-route' },
  ];

  const longTailFaqs = generateLongTailFaqs({
    mode: 'travel-by-car',
    origin: route.origin,
    destination: route.destination,
    distanceKm,
    durationText: route.drivingTime,
    sedanFare: route.cabFares?.sedan,
    suvFare: route.cabFares?.suv,
    tempoFare: route.cabFares?.tempo,
    highway: route.highway,
  });

  const founderQuote = getFounderQuoteForContext('travel-by-car');
  const citations = getCitationsForRoute({ from: route.origin, to: route.destination, context: 'outstation' });

  return (
    <div className="bg-slate-950 text-white">
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`The ${route.origin} to ${route.destination} road trip by the numbers`}
              subtitle="Distance, driving time, fuel stop counts and indicative fares verified weekly against our drivers' actual route runs."
              stats={stats}
              tone="emerald"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={distanceKm}
              mode="one-way"
              vehicles={[
                { key: 'sedan', label: 'Sedan', ratePerKm: 11 },
                { key: 'suv', label: 'SUV', ratePerKm: 14 },
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24 },
              ]}
              tone="emerald"
              originName={route.origin}
              destinationName={route.destination}
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
            <span className="text-emerald-400 font-semibold text-sm tracking-widest uppercase">Road Trip Q&amp;A</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">More about driving from {route.origin} to {route.destination}</h2>
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
