'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2, IndianRupee, Route, Zap, MapPin, Navigation, Star, Users } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import RouteVisualization from '@/components/shared/RouteVisualization';
import SectionDivider from '@/components/shared/SectionDivider';

export default function OneWayCabRouteClient({ route, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <StickyPriceBar
        title={`${route.from} to ${route.to} One-Way Cab`}
        price={route.sedanFare || ''}
        badge="Save 50%"
        whatsappMessage={`Hi, I want to book a one-way cab from ${route.from} to ${route.to}`}
      />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); } 50% { box-shadow: 0 0 50px rgba(245,158,11,0.6); } }
        @keyframes dash-flow { 0% { stroke-dashoffset: 100; } 100% { stroke-dashoffset: 0; } }
        @keyframes arrow-slide { 0% { transform: translateX(-8px); opacity:0.4; } 50% { transform: translateX(8px); opacity:1; } 100% { transform: translateX(-8px); opacity:0.4; } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 3s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-arrow-slide { animation: arrow-slide 2s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO: Dramatic amber/gold gradient with animated directional flow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/50 to-yellow-950/30 animate-gradient-x" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-amber-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-yellow-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-[60%] left-[40%] w-40 h-40 bg-orange-500/10 rounded-full blur-[80px]" />

        {/* Animated floating savings badge */}
        <div className="absolute top-24 right-[12%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-8 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl animate-pulse-glow">
              <div className="text-center">
                <div className="text-3xl font-black text-white">{route.savingsPercent}</div>
                <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated directional arrows */}
        <div className="absolute bottom-32 right-[6%] hidden lg:flex items-center gap-3 opacity-20">
          {[0, 1, 2].map((i) => (
            <ArrowRight key={i} className="w-8 h-8 text-amber-400 animate-arrow-slide" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>

        {/* Bottom edge */}
        <div className="absolute -bottom-1 left-0 right-0 h-32 bg-slate-950" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-amber-500/25">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 font-semibold text-sm tracking-wide">One-Way Cab &mdash; Pay Single Direction Only</span>
          </div>

          {/* City names with animated arrow */}
          <div className="flex items-center gap-4 sm:gap-6 mb-6 flex-wrap">
            <span className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tight">{route.from}</span>
            <div className="flex items-center gap-1.5">
              <div className="w-10 sm:w-20 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full" />
              <div className="animate-arrow-slide">
                <ArrowRight className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
              </div>
              <div className="w-10 sm:w-20 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
            </div>
            <span className="text-5xl md:text-6xl lg:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400">{route.to}</span>
          </div>

          {/* H1 with price */}
          <h1 className="text-xl md:text-2xl lg:text-3xl text-white/50 mb-6 max-w-3xl font-medium">
            One Way Cab {route.from} to {route.to} from <span className="text-amber-400 font-black">{route.oneWayFares.sedan}</span>
          </h1>

          {/* Info pills */}
          <div className="flex flex-wrap gap-3 mb-10">
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/10 text-sm text-white/70">
              <Route className="w-4 h-4 text-amber-400" /> {route.distance}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/10 text-sm text-white/70">
              <Clock className="w-4 h-4 text-amber-400" /> {route.time}
            </span>
            <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-white/10 text-sm text-white/70">
              <Navigation className="w-4 h-4 text-amber-400" /> {route.highway}
            </span>
            <span className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-xl px-5 py-2.5 rounded-2xl border border-green-500/25 text-sm text-green-400 font-bold">
              <Zap className="w-4 h-4" /> Save {route.savings}
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('oneway_cab')} href="tel:+917668570551" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-8 py-4.5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('oneway_cab')} href={`https://wa.me/917668570551?text=I want to book a one-way cab from ${route.from} to ${route.to}`} className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-xl text-white px-8 py-4.5 rounded-2xl font-bold text-lg border border-white/15 hover:bg-white/10 hover:border-amber-500/40 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
              WhatsApp Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />
      <RouteVisualization origin={route.from} destination={route.to} distance={route.distance} duration={route.duration} highway={route.highway} accentColor="amber" />

      {/* ═══════════════════════════════════════════════════════════════
          SAVINGS COMPARISON: Arrow-shaped directional cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">See Your Savings</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">One-Way vs Round Trip</h2>
            <p className="text-white/40 mt-4 text-lg">{route.from} to {route.to} &mdash; {route.distance} via {route.highway}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sedan", sub: "Swift Dzire / Etios", ow: route.oneWayFares.sedan, rt: route.roundTripFares.sedan, seats: "4 Seater", gradient: "from-amber-600 to-yellow-600", glow: "shadow-amber-500/30", borderHover: "hover:border-amber-500/50" },
              { name: "Ertiga", sub: "7-Seater SUV", ow: route.oneWayFares.ertiga, rt: route.roundTripFares.ertiga, seats: "7 Seater", gradient: "from-orange-600 to-yellow-600", glow: "shadow-orange-500/30", borderHover: "hover:border-orange-500/50" },
              { name: "Innova Crysta", sub: "Premium 7-Seater", ow: route.oneWayFares.innova, rt: route.roundTripFares.innova, seats: "7 Seater", gradient: "from-yellow-600 to-amber-600", glow: "shadow-yellow-500/30", borderHover: "hover:border-yellow-500/50" },
            ].map((v, i) => (
              <div key={i} className={`group relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 ${v.borderHover} p-7 transition-all duration-500 hover:bg-white/[0.08] hover:shadow-2xl ${v.glow} hover:scale-[1.02]`}>
                {/* Arrow accent at top */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-8 bg-gradient-to-r ${v.gradient} rounded-full flex items-center justify-center`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>

                <div className="mt-4 flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-black text-xl text-white">{v.name}</h3>
                    <p className="text-white/40 text-sm">{v.sub}</p>
                  </div>
                  <span className="text-xs font-bold text-white/50 bg-white/10 px-3 py-1.5 rounded-full border border-white/5">{v.seats}</span>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">One-Way Fare</span>
                    <span className="text-2xl font-black text-amber-400">{v.ow}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/50 text-sm">Round Trip</span>
                    <span className="text-lg font-bold text-white/25 line-through">{v.rt}</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
                  <div className="flex justify-between items-center bg-green-500/10 rounded-xl px-4 py-3 border border-green-500/20">
                    <span className="text-green-400 text-sm font-bold flex items-center gap-1.5">
                      <Zap className="w-4 h-4" /> You Save
                    </span>
                    <span className="text-xl font-black text-green-400">{v.ow}</span>
                  </div>
                </div>

                <Link onClick={() => trackPhoneCall('oneway_cab')} href="tel:+917668570551" className={`mt-6 block text-center bg-gradient-to-r ${v.gradient} text-white px-6 py-3.5 rounded-2xl font-bold text-sm shadow-lg ${v.glow} hover:scale-105 transition-all duration-300`}>
                  Book {v.name} &rarr;
                </Link>
              </div>
            ))}
          </div>

          <p className="text-white/25 text-xs mt-6 text-center">Min 300 km billing. Toll, parking, state tax extra at actual. Driver allowance included.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ROUTE OVERVIEW: Visual route map with animated path
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Route Details</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">{route.from} to {route.to} Route</h2>
          </div>

          <div className="bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl shadow-amber-500/5">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              {/* Left: Route info cards (3 cols) */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Navigation, label: "Highway", value: route.highway, color: "amber" },
                  { icon: Route, label: "Distance", value: route.distance, color: "yellow" },
                  { icon: Clock, label: "Travel Time", value: route.time, color: "orange" },
                  { icon: Star, label: "Best Time to Leave", value: route.bestTime, color: "amber" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/[0.04] rounded-2xl border border-white/10 p-5 hover:border-amber-500/30 transition-all duration-300">
                    <div className={`w-10 h-10 bg-${item.color}-500/20 rounded-xl flex items-center justify-center mb-3`}>
                      <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                    </div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              {/* Right: Visual route path (2 cols) */}
              <div className="lg:col-span-2 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-xs py-4">
                  {/* From city pin */}
                  <div className="flex items-center gap-4 mb-2">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-amber-500/30 rounded-full blur-md animate-pulse" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/40">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="font-black text-xl text-white">{route.from}</span>
                      <p className="text-white/30 text-xs">Pickup Point</p>
                    </div>
                  </div>

                  {/* Animated route line */}
                  <div className="ml-6 border-l-2 border-dashed border-amber-500/40 pl-10 py-4 space-y-3">
                    {route.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                    {route.popularStops.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/5">
                        <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold">En-Route Stops</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {route.popularStops.map((stop, i) => (
                            <span key={i} className="bg-amber-500/10 text-yellow-300 px-3 py-1.5 rounded-full text-xs font-semibold border border-amber-500/20">
                              {stop}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* To city pin */}
                  <div className="flex items-center gap-4 mt-2">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-orange-500/30 rounded-full blur-md animate-pulse" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/40">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="font-black text-xl text-white">{route.to}</span>
                      <p className="text-white/30 text-xs">Drop Point</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SEO DESCRIPTION: Rich content section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-10 text-center tracking-tight">
            One Way Cab from <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">{route.from}</span> to <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">{route.to}</span>
          </h2>
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-10">
            <div className="space-y-5 text-white/60 text-lg leading-relaxed">
              {route.description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS: Animated numbered steps with glow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Easy Process</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">Book in 4 Simple Steps</h2>
          </div>

          <div className="space-y-0 relative">
            <div className="absolute left-9 top-12 bottom-12 w-0.5 bg-gradient-to-b from-amber-500/60 via-yellow-500/40 to-orange-500/60" />
            {[
              { n: "1", t: "Share Your Route", d: `Call or WhatsApp 7668570551. Tell us "${route.from} to ${route.to}", your date, time, and vehicle preference.`, icon: Phone },
              { n: "2", t: "Get Instant Quote", d: `Receive a detailed fare breakdown within 2 minutes. Sedan ${route.oneWayFares.sedan} | Ertiga ${route.oneWayFares.ertiga} | Innova ${route.oneWayFares.innova}.`, icon: IndianRupee },
              { n: "3", t: "Confirm & Pay Small Advance", d: "Lock your ride with a small advance payment. The rest is payable directly to the driver after trip completion.", icon: Shield },
              { n: "4", t: "Enjoy Your One-Way Trip", d: `Verified driver picks you up on time in a clean, AC vehicle. Reach ${route.to} in ${route.time}. No return charges.`, icon: Car },
            ].map((step, i) => (
              <div key={i} className="flex gap-7 pb-12 last:pb-0 relative group">
                <div className="flex-shrink-0 relative z-10">
                  <div className="absolute -inset-2 bg-amber-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-[72px] h-[72px] bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl shadow-amber-500/25 group-hover:shadow-amber-500/50 group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-black text-2xl">{step.n}</span>
                  </div>
                </div>
                <div className="pt-3">
                  <h3 className="font-black text-xl text-white mb-2 flex items-center gap-2">
                    {step.t}
                    <step.icon className="w-4 h-4 text-amber-400/60" />
                  </h3>
                  <p className="text-white/50 leading-relaxed">{step.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY ONE-WAY: Arrow-shaped directional benefit cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Why Choose One-Way</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">Smart Travel, Smart Savings</h2>
            <p className="text-white/40 mt-4 text-lg max-w-xl mx-auto">Why pay for a return trip you will never take?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: IndianRupee, t: "Save 50%", d: "Pay only for one direction. Your biggest savings on long-distance routes. No return charges ever.", gradient: "from-amber-500 to-yellow-600", bgGlow: "bg-amber-500" },
              { icon: Shield, t: "Professional Drivers", d: "Background-verified, GPS-tracked drivers with 5+ years experience on this route. Fully insured trips.", gradient: "from-amber-500 to-orange-600", bgGlow: "bg-amber-500" },
              { icon: Car, t: "3 Vehicle Options", d: "Sedan from ₹11/km, Ertiga SUV from ₹15/km, Innova Crysta from ₹18/km. AC and clean.", gradient: "from-yellow-500 to-amber-600", bgGlow: "bg-yellow-500" },
              { icon: Zap, t: "Instant Booking", d: "2-minute booking via call or WhatsApp. No app download. No surge pricing. 24/7 availability.", gradient: "from-amber-600 to-orange-600", bgGlow: "bg-amber-600" },
            ].map((item, i) => (
              <div key={i} className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-amber-500/40 p-7 transition-all duration-500 hover:bg-white/[0.08] hover:shadow-2xl hover:shadow-amber-500/10 hover:scale-[1.03]">
                {/* Directional arrow accent */}
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-8 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`w-full h-full bg-gradient-to-b ${item.gradient} rounded-r-full`} style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                </div>

                <div className="relative">
                  <div className={`absolute -inset-3 ${item.bgGlow}/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="font-black text-lg text-white mb-2">{item.t}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InclusionBadges preset="outstation" theme="dark" />
      <SectionDivider color="amber" className="my-8" />

      {/* ═══════════════════════════════════════════════════════════════
          FAQ: Expandable accordion with glow effects
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Common Questions</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">{route.from} to {route.to} FAQs</h2>
          </div>
          <div className="space-y-3">
            {route.faqs.map((faq, i) => (
              <div key={i} className={`bg-white/[0.04] backdrop-blur-2xl rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i ? 'border-amber-500/30 shadow-lg shadow-amber-500/10' : 'border-white/10 hover:border-white/20'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left p-6 flex items-start justify-between gap-4"
                >
                  <h3 className="font-bold text-white pr-4 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-amber-500/20 text-amber-400 rounded-lg flex items-center justify-center text-xs font-black mt-0.5">{i + 1}</span>
                    <span>{faq.question}</span>
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-amber-400 flex-shrink-0 mt-1 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                  <p className="text-white/50 text-sm leading-relaxed px-6 pl-16">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED ROUTES: Arrow-directional link cards
         ═══════════════════════════════════════════════════════════════ */}
      {relatedRoutes.length > 0 && (
        <section className="py-24 md:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">More Routes</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 tracking-tight">Related One-Way Routes</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRoutes.map((r, i) => (
                <Link
                  key={i}
                  href={`/one-way-cab/${r.slug}`}
                  className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-5 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-lg hover:shadow-amber-500/10 hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-white group-hover:text-amber-400 transition-colors">{r.from}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-500/40 to-transparent" />
                    <ArrowRight className="w-4 h-4 text-amber-500/50 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                    <div className="flex-1 h-px bg-gradient-to-l from-yellow-500/40 to-transparent" />
                    <span className="font-bold text-white group-hover:text-yellow-400 transition-colors">{r.to}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/40">{r.distance} &bull; {r.time}</span>
                    <span className="text-amber-400 font-black">{r.oneWayFares.sedan}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/one-way-cab" className="group inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-amber-400 hover:text-white px-6 py-3 rounded-2xl font-bold border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/20 transition-all duration-300">
                View All One-Way Routes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA: Bold savings banner with animated glow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-amber-900/60 via-yellow-900/40 to-orange-900/50 rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center overflow-hidden border border-amber-500/20">
            {/* Animated glowing orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-500/10 rounded-full blur-[100px]" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-green-500/15 backdrop-blur-sm px-6 py-2.5 rounded-full mb-8 border border-green-500/25">
                <Zap className="w-4 h-4 text-green-400" />
                <span className="text-green-300 font-bold text-sm">Save {route.savings} on this route</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight">
                Book Your One-Way Cab
              </h2>
              <p className="text-white/50 mb-4 text-xl font-medium">
                {route.from} <span className="text-amber-400">&rarr;</span> {route.to}
              </p>
              <p className="text-white/40 mb-12 text-lg max-w-xl mx-auto">
                Sedan {route.oneWayFares.sedan} &bull; Ertiga {route.oneWayFares.ertiga} &bull; Innova {route.oneWayFares.innova} &bull; {route.distance} &bull; {route.time}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link onClick={() => trackPhoneCall('oneway_cab')} href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('oneway_cab')} href={`https://wa.me/917668570551?text=I want to book a one-way cab from ${route.from} to ${route.to}`} className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:border-amber-500/40 transition-all duration-300">
                  WhatsApp <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
