'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import LeadQuoteSection from '@/components/shared/LeadQuoteSection';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
// Rich UI + ranking-lift components added May 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import CorridorLinks from '@/components/seo/CorridorLinks';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';
import {
  Phone, ArrowRight, Clock, Car, CheckCircle2,
  Route, MapPin, Users, Calendar, ChevronRight, ChevronDown,
  XCircle, MinusCircle, Star, Zap, Shield,
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const VEHICLES = [
  { key: 'sedan', label: 'Sedan', desc: 'Swift Dzire / Etios', seats: '4 Seater', rate: '11/km', img: '/images/car/swift_dzire.jpg', popular: false, bags: '2 large + 1 cabin', best: 'Couples and small families' },
  { key: 'suv', label: 'SUV', desc: 'Innova / Ertiga', seats: '6-7 Seater', rate: '14/km', img: '/images/car/innova_crysta.jpg', popular: true, bags: '4 large + 2 cabin', best: 'Families of 5 to 7 with luggage' },
  { key: 'tempo', label: 'Tempo Traveller', desc: '12-Seater AC', seats: '12 Seater', rate: '20/km', img: '/images/tempo/12_seater.jpg', popular: false, bags: '12 large + hand baggage', best: 'Large groups and multi-family trips' },
];

const BENEFITS = [
  { icon: Users, title: 'Same Driver, Entire Trip', text: 'Your dedicated driver stays from pickup to final drop. No strangers, no rebooking.' },
  { icon: Calendar, title: 'No Rebooking Hassle', text: 'One booking covers your entire round trip. No searching for return cabs.' },
  { icon: Clock, title: 'Flexible Schedule', text: 'Change plans on the go. Add stops, extend stays, or leave early.' },
  { icon: Zap, title: 'Cost Effective', text: 'Flat 10% round trip discount vs two one-way bookings. Save on multi-day trips.' },
];

export default function RoundTripClient({ route, relatedRoutes, corridorLinks = [] }) {
  const [expandedDay, setExpandedDay] = useState(0);
  const whatsappMsg = `Hi, I want to book a round trip cab from ${route.origin} to ${route.destination} (${route.distanceKm} km one-way, ${route.totalRoundTripKm} km round trip)`;
  const tripDays = route.suggestedItinerary?.length || 1;
  const heroImage = getCityImage(route.destination) || getCityImage(route.origin);
  const rawFares = { sedan: route.sedanRaw, suv: route.suvRaw, tempo: route.tempoRaw };

  return (
    <div className="min-h-screen bg-[#0A0A0E] text-white">
      <style jsx global>{`
        .rtr-serif { font-family: Georgia, 'Times New Roman', serif; }
      `}</style>

      {/* ━━━ HERO: Journey Loop with circular indicator ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${route.origin} to ${route.destination} round trip cab`} fill priority className="object-cover scale-105" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/40 via-transparent to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-20" />
        <div className="absolute bottom-1/4 left-[6%] w-72 h-72 bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/round-trip" className="hover:text-white/70 transition-colors">Round Trip</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#FACF2D]/15 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#FACF2D]/25 mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FACF2D] animate-pulse" />
                <Route className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Round Trip</span>
              </div>
              <p className="rtr-serif text-amber-200/70 text-base sm:text-lg italic mb-2">Book Return Journey</p>
              <h1 className="speakable-headline text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {route.origin} to {route.destination}<br />
                <span className="rtr-serif italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-300 to-orange-300">Round Trip Cab</span>
              </h1>

              {/* Visual round-trip loop indicator */}
              <div className="inline-flex items-center gap-2 mt-5 mb-2 text-sm bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                <span className="font-bold text-white">{route.origin}</span>
                <div className="flex items-center gap-1"><div className="w-6 h-px bg-gradient-to-r from-[#FACF2D]/70 to-amber-400/70" /><ArrowRight className="w-3 h-3 text-amber-400" /></div>
                <span className="font-bold text-amber-300">{route.destination}</span>
                <div className="flex items-center gap-1"><div className="w-6 h-px bg-gradient-to-l from-[#FACF2D]/70 to-amber-400/70" /><ArrowRight className="w-3 h-3 text-amber-400 rotate-180" /></div>
                <span className="font-bold text-white">{route.origin}</span>
              </div>
              <p className="text-white/40 mt-2 text-sm sm:text-base max-w-lg">{route.distanceKm} km one-way · From {route.cabFares.sedan} round trip · Driver stays with you</p>

              {/* Trust row sits with the fare above, where the decision is made */}
              <p className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[11px] sm:text-xs text-white/45">
                <Star className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" aria-hidden="true" />
                <span className="font-semibold text-white/70">4.9</span>
                <span aria-hidden="true">·</span><span>Since 2015</span>
                <span aria-hidden="true">·</span><span>No hidden charges</span>
                <span aria-hidden="true">·</span><span>Pay after trip</span>
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackWhatsAppClick('roundtrip_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#FACF2D] text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </a>
                <a onClick={() => trackPhoneCall('roundtrip_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
              </div>
            </div>

            {/* Floating stat card — gold-trimmed */}
            <div className="bg-white/10 backdrop-blur-xl border border-[#FACF2D]/30 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0 shadow-2xl shadow-amber-950/30">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Round Trip</p>
                  <p className="text-3xl font-black leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#FACF2D] to-amber-200">{route.totalRoundTripKm}<span className="text-lg text-white/40 ml-0.5">km</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Duration</p>
                  <p className="text-sm font-bold text-white/80">{route.duration} one-way</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Trip Days</p>
                  <p className="text-sm font-bold text-white/80">{tripDays === 1 ? 'Same Day' : `${tripDays} Days`}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Sedan From</p>
                  <p className="text-sm font-bold text-[#FACF2D]">{route.cabFares.sedan}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40 font-medium">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LeadQuoteSection fromCity={route.origin} toCity={route.destination} pageType="route" />

      {/* ━━━ AEO QUICK ANSWER ━━━ */}
      <section className="bg-slate-950 px-4 sm:px-6 pt-8">
        <div className="max-w-4xl mx-auto">
          <QuickAnswer
            tone="dark"
            question={`How much is a ${route.origin} to ${route.destination} round trip cab?`}
            answer={`A ${route.origin} to ${route.destination} round trip cab costs ${route.cabFares?.sedan || ''} for a sedan (${route.totalRoundTripKm} km round trip, ${route.distanceKm} km each way${route.highway ? `, via ${route.highway}` : ''}). The driver stays with you for the whole trip and returns you to ${route.origin}. SUV and tempo options are available; fares are all-inclusive of fuel, driver and tolls${route.nightHalt ? ', plus ₹300/night driver allowance for overnight trips' : ''}.`}
            facts={[
              { label: 'Round trip', value: `${route.totalRoundTripKm} km` },
              { label: 'One way', value: `${route.distanceKm} km` },
              { label: 'From (sedan)', value: route.cabFares?.sedan || '—' },
              { label: 'Trip', value: route.nightHalt ? 'Multi-day' : 'Same-day OK' },
            ]}
          />
        </div>
      </section>

      {/* ━━━ ROUTE STRIP ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Trip Summary</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Round Trip', value: `${route.totalRoundTripKm} km`, icon: Route },
              { label: 'One-Way', value: route.duration, icon: Clock },
              { label: 'Highway', value: route.highway, icon: MapPin },
              { label: 'Discount', value: '10% Off', icon: Zap },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-3 sm:p-4 hover:border-amber-500/30 transition-all">
                <div className="flex items-center gap-2 mb-1">
                  <stat.icon className="w-4 h-4 text-amber-400" />
                  <span className="text-[9px] text-white/30 uppercase tracking-widest font-semibold">{stat.label}</span>
                </div>
                <p className="text-lg font-black bg-clip-text text-transparent bg-gradient-to-br from-[#FACF2D] to-amber-300">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ DIRECT-ANSWER LEAD: voice/AI answer target ━━━ */}
      <section className="py-10 sm:py-12 px-4 sm:px-6 bg-[#0A0A0E]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 rounded-2xl border border-amber-200/70 shadow-sm p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-black text-white mb-3">
              How much does a {route.origin} to {route.destination} round trip cab cost?
            </h2>
            <p className="speakable-lead text-slate-200 text-sm sm:text-base leading-relaxed">
              A <strong>{route.origin} to {route.destination} round trip cab</strong> starts at <strong>{route.cabFares.sedan}</strong> for an AC Sedan, with SUV at {route.cabFares.suv} and Tempo Traveller at {route.cabFares.tempo}. The route is <strong>{route.distanceKm} km one-way</strong> ({route.totalRoundTripKm} km round trip) via {route.highway}, taking about {route.duration} one-way. The <strong>same driver and car stay with you</strong> for the entire trip{route.nightHalt ? `, including the overnight halt at ${route.destination} (driver night halt ${route.driverAllowance})` : ' with same-day return'}. Fares include a <strong>10% round trip discount</strong>, fuel, driver and AC; toll, parking and state taxes are extra at actual.
            </p>
            <p className="speakable-faq-first sr-only">
              {route.faqs && route.faqs.length > 0 ? route.faqs[0].answer : ''}
            </p>
          </div>
        </div>
      </section>

      {/* ━━━ ITINERARY: Expandable timeline ━━━ */}
      {route.suggestedItinerary && route.suggestedItinerary.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Your Journey</p>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
                <h2 className="text-2xl sm:text-3xl font-black text-white">What is the day-by-day itinerary?</h2>
                <p className="text-sm text-slate-500">{tripDays === 1 ? 'Same Day Return' : `${tripDays} Days`} · Fully Customizable</p>
              </div>
            </ScrollReveal>

            <div className="space-y-3">
              {route.suggestedItinerary.map((item, i) => {
                const isOpen = expandedDay === i;
                return (
                  <ScrollReveal key={i} delay={i * 40}>
                    <div className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-white/5 shadow-lg border-white/10' : 'bg-white/[0.03] border-white/10 hover:border-white/10 hover:bg-white/[0.06]'}`}>
                      <button onClick={() => setExpandedDay(isOpen ? -1 : i)} className="w-full flex items-center gap-3 sm:gap-4 p-4 sm:p-5 text-left">
                        <div className="w-1.5 self-stretch rounded-full bg-gradient-to-b from-amber-400 to-orange-500 flex-shrink-0" />
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-black text-xs">{String(item.day).padStart(2, '0')}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Day {item.day}</p>
                          <h3 className="font-bold text-white text-sm sm:text-base truncate">{item.title}</h3>
                        </div>
                        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      <div className={`transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                        <div className="px-5 pb-5 pl-[4.5rem] sm:pl-[5rem]">
                          <div className="h-px bg-slate-100 mb-3" />
                          <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}

              {/* Return node */}
              <ScrollReveal delay={route.suggestedItinerary.length * 40}>
                <div className="rounded-xl border border-amber-200 bg-amber-50 overflow-hidden">
                  <div className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5">
                    <div className="w-1.5 self-stretch rounded-full bg-amber-500 flex-shrink-0" />
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-amber-800">Return to {route.origin}</h3>
                      <p className="text-amber-700/70 text-sm">Safe drop at your doorstep. Same driver, same car throughout.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100}>
              <div className="mt-6 bg-white/5 rounded-xl border border-amber-200 p-4 text-center">
                <p className="text-slate-500 text-sm">This itinerary is fully customizable. Call <a href="tel:7668570551" className="text-amber-600 font-bold hover:text-amber-700">7668570551</a> to tailor it.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Ornament divider */}
      <div className="flex items-center justify-center gap-3 py-2 bg-[#0A0A0E]" aria-hidden="true">
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-300" />
        <Route className="w-4 h-4 text-amber-500" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-300" />
      </div>

      {/* ━━━ PRICING: Dark section with 3 vehicle cards ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Round Trip Fares</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">What does a {route.origin} to {route.destination} round-trip cost?</h2>
              <p className="text-white/30 text-sm">All fares include driver, fuel, AC & 10% discount</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VEHICLES.map((v, i) => {
              const fare = route.cabFares[v.key];
              const rawFare = rawFares[v.key];
              const perDay = tripDays > 1 && rawFare ? Math.round(rawFare / tripDays) : null;
              return (
                <ScrollReveal key={v.key} stagger={i * 100}>
                  <div className={`relative rounded-2xl overflow-hidden group ${v.popular ? 'ring-2 ring-[#FACF2D]/60 shadow-2xl shadow-amber-500/20' : 'ring-1 ring-white/10'}`}>
                    {v.popular && <div className="bg-gradient-to-r from-[#FACF2D] to-amber-400 text-center py-1.5"><span className="inline-flex items-center gap-1 text-[10px] font-black text-white uppercase tracking-widest"><Star className="w-3 h-3 fill-slate-900" /> Most Popular</span></div>}
                    <div className="relative h-36 sm:h-40">
                      <Image src={v.img} alt={v.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <h3 className="text-lg font-black text-white">{v.label}</h3>
                        <p className="text-[11px] text-white/50">{v.desc} · {v.seats}</p>
                      </div>
                    </div>
                    <div className="bg-slate-800 p-5">
                      <div className="flex items-end justify-between mb-2">
                        <div>
                          <p className="text-[10px] text-white/30 uppercase tracking-wider">Round Trip Fare</p>
                          <p className="text-2xl sm:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-amber-100">{fare}</p>
                        </div>
                        <span className="text-xs text-white/30 font-medium">Rs. {v.rate}</span>
                      </div>
                      <p className="text-xs text-white/30 mb-3">{route.totalBillableKm} km billed</p>
                      {perDay && <p className="text-xs text-amber-400 font-semibold mb-3">Rs. {perDay.toLocaleString('en-IN')}/day ({tripDays} days)</p>}
                      <div className="flex items-center gap-1.5 mb-4">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-amber-400 text-[11px] font-bold">10% Discount Applied</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {['AC Vehicle', 'GPS Tracked', 'Fuel Included', 'Verified Driver'].map((f, j) => (
                          <span key={j} className="flex items-center gap-1.5 text-[11px] text-white/50">
                            <CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" /> {f}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-[1fr_auto] gap-2">
                        <a onClick={() => trackWhatsAppClick('roundtrip_fare')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.label} round trip from ${route.origin} to ${route.destination}`)}`} target="_blank" rel="noopener noreferrer"
                          className={`block text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${v.popular ? 'bg-[#FACF2D] text-slate-950 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                          Book {v.label} <ArrowRight className="w-4 h-4 inline ml-1" />
                        </a>
                        <a onClick={() => trackPhoneCall('roundtrip_fare')} href="tel:+917668570551" aria-label={`Call to book ${v.label}`}
                          className="flex items-center justify-center px-3.5 rounded-xl bg-white/10 text-white hover:bg-white/15 border border-white/10 transition-all active:scale-[0.97]">
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
          {/* ── Semantic fare table (AEO): the same fares as the cards above, in a
                real <table> so AI answer engines can extract them as data. ── */}
          <div className="mt-10 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[680px]" data-speakable="true">
                <caption className="text-left text-white/40 text-xs px-5 pt-5 pb-3 caption-top">
                  {route.origin} to {route.destination} round trip cab fares by vehicle ({route.totalRoundTripKm} km round trip, {route.totalBillableKm} km billed, 10% round trip discount applied)
                </caption>
                <thead className="bg-[#FACF2D]/10 border-y border-[#FACF2D]/20">
                  <tr>
                    <th scope="col" className="text-left p-4 text-[#FACF2D] font-bold uppercase text-xs tracking-wider">Vehicle</th>
                    <th scope="col" className="text-left p-4 text-[#FACF2D] font-bold uppercase text-xs tracking-wider">Seats</th>
                    <th scope="col" className="text-left p-4 text-[#FACF2D] font-bold uppercase text-xs tracking-wider">Luggage</th>
                    <th scope="col" className="text-left p-4 text-[#FACF2D] font-bold uppercase text-xs tracking-wider">Rate</th>
                    <th scope="col" className="text-left p-4 text-[#FACF2D] font-bold uppercase text-xs tracking-wider">Round trip fare</th>
                    <th scope="col" className="text-left p-4 text-[#FACF2D] font-bold uppercase text-xs tracking-wider">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {VEHICLES.map((v) => (
                    <tr key={v.key} className="border-b border-white/5 last:border-b-0 hover:bg-white/[0.04] transition-colors">
                      <th scope="row" className="p-4 text-left text-white font-bold align-top">
                        {v.label}
                        <span className="block text-white/40 text-xs font-medium mt-0.5">{v.desc}</span>
                      </th>
                      <td className="p-4 text-white/70 align-top">{v.seats}</td>
                      <td className="p-4 text-white/60 text-xs leading-relaxed align-top">{v.bags}</td>
                      <td className="p-4 text-white/70 align-top">Rs. {v.rate}</td>
                      <td className="p-4 text-[#FACF2D] font-black align-top">{route.cabFares[v.key]}</td>
                      <td className="p-4 text-white/60 text-xs leading-relaxed align-top">{v.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-center text-white/20 text-xs">* Toll charges, state tax, parking, and driver night halt ({route.driverAllowance}) extra at actual.</p>
        </div>
      </section>

      {/* ━━━ INCLUSIONS / EXCLUSIONS: Two-column visual ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Full Transparency</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">What is included and excluded in the round-trip fare?</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-white/5 rounded-2xl border border-amber-100 p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center"><CheckCircle2 className="w-5 h-5 text-amber-600" /></div>
                  <div><h3 className="font-black text-amber-800">Included</h3><p className="text-xs text-amber-600/70">In your round trip fare</p></div>
                </div>
                <div className="space-y-2.5">
                  {route.inclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-amber-50 rounded-lg px-3 py-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={80}>
              <div className="bg-white/5 rounded-2xl border border-red-100 p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center"><XCircle className="w-5 h-5 text-red-500" /></div>
                  <div><h3 className="font-black text-red-800">Not Included</h3><p className="text-xs text-red-500/70">Paid separately at actual</p></div>
                </div>
                <div className="space-y-2.5">
                  {route.exclusions.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-50 rounded-lg px-3 py-2">
                      <MinusCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
                {route.nightHalt && (
                  <div className="mt-4 rounded-xl bg-amber-50 border border-amber-200/60 p-3">
                    <div className="flex items-center gap-2 text-amber-700 text-sm font-medium">
                      <Star className="w-4 h-4" />
                      <span>Driver Night Halt: {route.driverAllowance}</span>
                    </div>
                    <p className="text-xs text-amber-600/70 mt-1 ml-6">Required for overnight stays at {route.destination}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ BENEFITS: Asymmetric bento ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">The Smart Choice</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Why book a round-trip cab instead of two one-ways?</h2>
          </ScrollReveal>

          {/* Asymmetric bento: first card spans 2 cols on large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BENEFITS.map((b, i) => (
              <ScrollReveal key={i} stagger={i * 60}>
                <div className={`rounded-xl border transition-all duration-300 p-5 sm:p-6 h-full ${i === 0 ? 'lg:col-span-2 bg-slate-900 text-white border-slate-700' : 'bg-white/5 border-white/10 hover:border-amber-200 hover:shadow-md'}`}>
                  <b.icon className={`w-5 h-5 mb-3 ${i === 0 ? 'text-[#FACF2D]' : 'text-amber-500'}`} />
                  <h3 className={`font-bold text-sm mb-2 ${i === 0 ? 'text-white' : 'text-white'}`}>{b.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/50' : 'text-slate-500'}`}>{b.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ RICH-UI: Infographic + Calculator + Quote + Long-Tail FAQ + Citations ━━━ */}
      <RoundTripRichBlock route={route} relatedRoutes={relatedRoutes} />

      {/* ━━━ CORRIDOR CLUSTER: same route in other formats ━━━ */}
      {corridorLinks.length > 0 && (
        <section className="py-10 sm:py-14 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <CorridorLinks
              links={corridorLinks}
              fromLabel={route.origin}
              toLabel={route.destination}
              theme="dark"
            />
          </div>
        </section>
      )}

      {/* ━━━ FAQ ━━━ */}
      <FaqAccordion heading={`${route.origin} to ${route.destination} Round Trip FAQs`} faqs={route.faqs || []} />

      {/* ━━━ RELATED ROUTES ━━━ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Which other round trips can I book from {route.origin}?</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relatedRoutes.map((r, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/round-trip/${r.slug}`} className="group flex items-center gap-4 bg-[#0A0A0E] rounded-xl p-4 hover:bg-white/5 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-white/10">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 transition-colors">
                      <Route className="w-4 h-4 text-amber-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-white text-sm truncate">{r.origin} to {r.destination}</p>
                      <p className="text-xs text-slate-500">{r.totalRoundTripKm} km RT · From {r.cabFares.sedan}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Book ${route.origin} to ${route.destination} Round Trip`} subheading={`${route.totalRoundTripKm} km round trip from ${route.cabFares.sedan}. Driver stays with you. 10% discount. AC vehicles.`} />
      <SetStickyCta
        price={route.cabFares.sedan}
        label={`${route.origin} to ${route.destination} round trip`}
        whatsappText={whatsappMsg}
      />
    </div>
  );
}

/**
 * RoundTripRichBlock — dark cinematic block injected mid-page on round-trip
 * routes for the data-dashboard + interactive engagement look. Same component
 * set as the OneWay route page so the visual quality matches.
 */
function RoundTripRichBlock({ route, relatedRoutes }) {
  const distanceKm = route.distanceKm || 233;
  const oneWayKm = distanceKm;
  const totalKm = route.totalRoundTripKm || distanceKm * 2;
  const sedanFareNum = parseInt((route.cabFares?.sedan || '').replace(/[^0-9]/g, ''), 10) || 6500;
  const days = route.suggestedItinerary?.length || 2;

  const stats = [
    { value: oneWayKm, suffix: ' km', label: 'One-way', sublabel: 'via highway' },
    { value: totalKm, suffix: ' km', label: 'Round trip', sublabel: 'with day km cap' },
    { value: sedanFareNum, prefix: '₹', label: 'Sedan from', sublabel: 'all-inclusive', format: 'compact' },
    { value: days, suffix: ' days', label: 'Trip length', sublabel: 'suggested itinerary' },
  ];

  const longTailFaqs = generateLongTailFaqs({
    mode: 'round-trip',
    origin: route.origin,
    destination: route.destination,
    distanceKm: oneWayKm,
    durationText: route.durationOneWay || '',
    sedanFare: route.cabFares?.sedan,
    suvFare: route.cabFares?.suv,
    tempoFare: route.cabFares?.tempo,
  });

  const founderQuote = getFounderQuoteForContext('round-trip');
  const citations = getCitationsForRoute({ from: route.origin, to: route.destination, context: 'outstation' });

  return (
    <>
      {/* Dark cinematic infographic + calculator */}
      <section className="py-12 md:py-20 px-4 sm:px-6 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`The ${route.origin} to ${route.destination} round-trip by the numbers`}
              subtitle="Round-trip means the same driver and vehicle stay with you for the entire trip — including overnight halts. Pricing reflects actual driver invoices verified weekly."
              stats={stats}
              tone="amber"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={oneWayKm}
              mode="round-trip"
              vehicles={[
                { key: 'sedan', label: 'Sedan', ratePerKm: 11 },
                { key: 'suv', label: 'SUV', ratePerKm: 14 },
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24 },
              ]}
              tone="amber"
              originName={route.origin}
              destinationName={route.destination}
            />
          </div>
        </div>
      </section>

      {founderQuote && (
        <section className="py-10 px-4 sm:px-6 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <ExpertQuote
              quote={founderQuote.quote}
              authorName={founderQuote.author}
              authorTitle={founderQuote.title}
              authorOrg={founderQuote.org}
              tone="dark"
            />
          </div>
        </section>
      )}

      {/* Long-tail FAQ + citations */}
      <section className="py-16 px-4 sm:px-6 bg-slate-950 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">More Answers</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">More about booking {route.origin} to {route.destination} round-trip</h2>
          </div>
          <LongTailFAQ faqs={longTailFaqs} tone="dark" />
        </div>
      </section>

      {citations.length > 0 && (
        <section className="py-12 px-4 sm:px-6 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <OutboundCitations sources={citations} tone="dark" heading="Verified against these sources" />
          </div>
        </section>
      )}
    </>
  );
}
