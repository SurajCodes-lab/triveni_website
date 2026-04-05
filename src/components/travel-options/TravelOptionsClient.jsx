'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, Clock, Car, CheckCircle2, Star, Users, MapPin,
  Shield, ChevronRight, Award, Bus, Plane, TrainFront, Navigation,
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const MODE_CONFIG = {
  Car:    { Icon: Car,        color: 'emerald', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', bar: 'bg-emerald-500', badge: 'bg-emerald-600', ring: 'ring-emerald-200', darkBg: 'bg-emerald-500/10', darkBorder: 'border-emerald-500/20' },
  Bus:    { Icon: Bus,        color: 'blue',    bg: 'bg-blue-50',    border: 'border-blue-200',    text: 'text-blue-600',    bar: 'bg-blue-500',    badge: 'bg-blue-600',    ring: 'ring-blue-200',    darkBg: 'bg-blue-500/10',    darkBorder: 'border-blue-500/20' },
  Train:  { Icon: TrainFront, color: 'amber',   bg: 'bg-amber-50',   border: 'border-amber-200',   text: 'text-amber-600',   bar: 'bg-amber-500',   badge: 'bg-amber-600',   ring: 'ring-amber-200',   darkBg: 'bg-amber-500/10',   darkBorder: 'border-amber-500/20' },
  Flight: { Icon: Plane,      color: 'violet',  bg: 'bg-violet-50',  border: 'border-violet-200',  text: 'text-violet-600',  bar: 'bg-violet-500',  badge: 'bg-violet-600',  ring: 'ring-violet-200',  darkBg: 'bg-violet-500/10',  darkBorder: 'border-violet-500/20' },
};

function MetricBar({ value, max = 5, barClass = 'bg-emerald-500' }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <div key={i} className={`h-2 flex-1 rounded-full ${i < value ? barClass : 'bg-slate-200'}`} />
      ))}
    </div>
  );
}

export default function TravelOptionsClient({ route, relatedRoutes }) {
  const [activeMode, setActiveMode] = useState('Car');

  const whatsappMsg = `Hi, I want to book a cab from ${route.origin} to ${route.destination}`;
  const carMode = route.modes.find(m => m.mode === 'Car');
  const availableModes = route.modes.filter(m => m.comfort > 0);
  const heroImage = getCityImage(route.origin);
  const selectedMode = route.modes.find(m => m.mode === activeMode);
  const selectedConfig = MODE_CONFIG[activeMode] || MODE_CONFIG.Car;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Multi-modal transport selector ━━━ */}
      <section className="relative min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${route.origin} to ${route.destination} travel options`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 z-20 flex">
          <div className="flex-1 bg-emerald-500" />
          <div className="flex-1 bg-blue-500" />
          <div className="flex-1 bg-amber-500" />
          <div className="flex-1 bg-violet-500" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/travel-options" className="hover:text-white/70 transition-colors">Travel Options</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.origin} to {route.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Navigation className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-widest">Multi-Modal Hub</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">How to Reach</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {route.origin}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400">{route.destination}</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg">Compare Car, Bus, Train, and Flight -- find the best way to travel</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('travel_options_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('travel_options_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            {/* Quick stat card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Modes</p>
                  <p className="text-2xl font-black text-white leading-tight">{availableModes.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">By Car</p>
                  <p className="text-sm font-bold text-white/80">{carMode?.duration || '--'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Cab Fare</p>
                  <p className="text-sm font-bold text-[#FACF2D]">{carMode?.cost || '--'}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Booking</p>
                  <p className="text-sm font-bold text-white/80">24/7</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ MODE SELECTOR STRIP ━━━ */}
      <section className="bg-slate-900 py-4 sm:py-5 px-4 sm:px-6 overflow-x-auto">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3">
          {route.modes.map((mode) => {
            const cfg = MODE_CONFIG[mode.mode] || MODE_CONFIG.Car;
            const isAvailable = mode.comfort > 0;
            const isActive = activeMode === mode.mode;
            return (
              <button key={mode.mode} onClick={() => isAvailable && setActiveMode(mode.mode)}
                className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-bold text-sm transition-all flex-shrink-0 ${
                  !isAvailable ? 'opacity-30 cursor-not-allowed bg-white/5 text-white/30' :
                  isActive ? `${cfg.bar} text-white shadow-lg` :
                  'bg-white/10 text-white/60 hover:bg-white/15 hover:text-white/80'
                }`}>
                <cfg.Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{mode.mode}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ━━━ 4 LARGE TRANSPORT MODE CARDS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">4-Way Comparison</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{route.origin} to {route.destination} -- Every Way to Get There</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {route.modes.map((mode, i) => {
              const cfg = MODE_CONFIG[mode.mode] || MODE_CONFIG.Car;
              const isAvailable = mode.comfort > 0;
              const isActive = activeMode === mode.mode;
              const isBest = mode.mode === 'Car';

              return (
                <ScrollReveal key={i} delay={i * 80}>
                  <div onClick={() => isAvailable && setActiveMode(mode.mode)}
                    className={`relative cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                      !isAvailable ? 'opacity-50 border-slate-200 bg-slate-50' :
                      isActive ? `${cfg.border} shadow-lg ring-2 ${cfg.ring} bg-white` :
                      'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                    }`}>
                    {/* Color accent */}
                    <div className={`h-1.5 ${cfg.bar}`} />

                    {isAvailable && isBest && (
                      <div className="absolute top-5 right-4 z-10">
                        <span className={`${cfg.badge} text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider`}>Best Value</span>
                      </div>
                    )}

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-5">
                        <div className={`w-12 h-12 rounded-xl ${cfg.bg} flex items-center justify-center`}>
                          <cfg.Icon className={`w-6 h-6 ${cfg.text}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-slate-900">{mode.mode}</h3>
                          {isAvailable && <p className="text-xs text-slate-400">{mode.bestFor}</p>}
                        </div>
                      </div>

                      {isAvailable ? (
                        <>
                          <div className="grid grid-cols-2 gap-4 mb-5">
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Duration</p>
                              <p className="text-lg font-black text-slate-900">{mode.duration}</p>
                            </div>
                            <div>
                              <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">Cost</p>
                              <p className={`text-lg font-black ${cfg.text}`}>{mode.cost}</p>
                            </div>
                          </div>

                          {/* Visual bars */}
                          <div className="space-y-3">
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Comfort</span>
                                <span className="text-[10px] font-bold text-slate-500">{mode.comfort}/5</span>
                              </div>
                              <MetricBar value={mode.comfort} barClass={cfg.bar} />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Flexibility</span>
                                <span className="text-[10px] font-bold text-slate-500">{mode.flexibility}/5</span>
                              </div>
                              <MetricBar value={mode.flexibility} barClass={cfg.bar} />
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-slate-400 text-sm">Not available on this route</p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━ VISUAL DURATION/COST COMPARISON BARS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">At a Glance</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Relative Duration and Cost</h2>
          </ScrollReveal>

          {availableModes.length > 0 && (() => {
            const parseDuration = (d) => {
              const h = d.match(/(\d+)\s*h/i);
              const m = d.match(/(\d+)\s*m/i);
              return (h ? parseInt(h[1]) * 60 : 0) + (m ? parseInt(m[1]) : 0);
            };
            const parseCost = (c) => parseInt(String(c).replace(/[^0-9]/g, '')) || 0;
            const maxDur = Math.max(...availableModes.map(m => parseDuration(m.duration)));
            const maxCost = Math.max(...availableModes.map(m => parseCost(m.cost)));

            return (
              <div className="space-y-6">
                {/* Duration bars */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Travel Time</p>
                  <div className="space-y-3">
                    {availableModes.map((mode) => {
                      const cfg = MODE_CONFIG[mode.mode] || MODE_CONFIG.Car;
                      const dur = parseDuration(mode.duration);
                      const pct = maxDur > 0 ? (dur / maxDur) * 100 : 0;
                      return (
                        <div key={mode.mode} className="flex items-center gap-3">
                          <div className="w-20 flex items-center gap-2 flex-shrink-0">
                            <cfg.Icon className={`w-4 h-4 ${cfg.text}`} />
                            <span className="text-sm font-bold text-slate-700">{mode.mode}</span>
                          </div>
                          <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${cfg.bar} rounded-full flex items-center justify-end pr-2 transition-all duration-500`} style={{ width: `${Math.max(pct, 15)}%` }}>
                              <span className="text-[10px] font-bold text-white whitespace-nowrap">{mode.duration}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Cost bars */}
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cost</p>
                  <div className="space-y-3">
                    {availableModes.map((mode) => {
                      const cfg = MODE_CONFIG[mode.mode] || MODE_CONFIG.Car;
                      const cost = parseCost(mode.cost);
                      const pct = maxCost > 0 ? (cost / maxCost) * 100 : 0;
                      return (
                        <div key={mode.mode} className="flex items-center gap-3">
                          <div className="w-20 flex items-center gap-2 flex-shrink-0">
                            <cfg.Icon className={`w-4 h-4 ${cfg.text}`} />
                            <span className="text-sm font-bold text-slate-700">{mode.mode}</span>
                          </div>
                          <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${cfg.bar} rounded-full flex items-center justify-end pr-2 transition-all duration-500`} style={{ width: `${Math.max(pct, 15)}%` }}>
                              <span className="text-[10px] font-bold text-white whitespace-nowrap">{mode.cost}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ━━━ DARK VERDICT SECTION ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Verdict */}
              <div className="lg:flex-1 bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-[#FACF2D]" />
                  <h2 className="text-xl font-black text-white">Our Verdict</h2>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{route.verdict}</p>
                <a onClick={() => trackWhatsAppClick('travel_verdict')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all">
                  Book a Cab <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Why cab advantages */}
              <div className="lg:w-80 space-y-3">
                {[
                  { icon: MapPin, title: 'Door-to-Door', desc: 'No station transfers' },
                  { icon: Clock, title: 'Flexible Timing', desc: 'Leave when you want' },
                  { icon: Shield, title: 'Private and Safe', desc: 'GPS tracked, 24/7 support' },
                  { icon: Users, title: 'Group Friendly', desc: 'Per-person cost drops with more riders' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5 hover:border-emerald-500/20 transition-all">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-[11px] text-white/30">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <FaqAccordion heading={`${route.origin} to ${route.destination} Travel FAQs`} faqs={route.faqs} />

      {/* ━━━ RELATED ROUTES ━━━ */}
      {relatedRoutes.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Compare More Routes</h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedRoutes.map((rr, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/travel-options/${rr.slug}`} className="group bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-emerald-200 block">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm mb-0.5">{rr.origin} to {rr.destination}</h3>
                    <p className="text-xs text-slate-400">{rr.modes.find(m => m.mode === 'Car')?.duration || ''}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading="Book Your Cab Now" subheading={`${route.origin} to ${route.destination} -- AC cab from ${carMode?.cost || 'N/A'}. Door-to-door with verified drivers.`} />
      <MobileStickyBar />
    </div>
  );
}
