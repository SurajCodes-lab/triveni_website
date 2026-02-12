'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, Plane, Shield, Clock, Users, Star, ChevronRight, Car,
  CheckCircle2, ArrowRight, IndianRupee, Route, MapPin, Luggage,
  Navigation, ChevronDown, Check, Zap,
} from '@/components/ui/icons';

/* ------------------------------------------------------------------ */
/*  Inline keyframes injected once via <style> for animations          */
/* ------------------------------------------------------------------ */
const animCSS = `
@keyframes runway-pulse{0%,100%{opacity:.15}50%{opacity:.6}}
@keyframes radar-sweep{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes board-flicker{0%,90%,100%{opacity:1}92%,97%{opacity:.4}}
@keyframes float-slow{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
@keyframes shimmer-slide{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes glow-pulse{0%,100%{box-shadow:0 0 20px rgba(245,158,11,.25)}50%{box-shadow:0 0 50px rgba(245,158,11,.5)}}
.anim-runway{animation:runway-pulse 2s ease-in-out infinite}
.anim-radar{animation:radar-sweep 8s linear infinite}
.anim-flicker{animation:board-flicker 4s ease-in-out infinite}
.anim-float{animation:float-slow 6s ease-in-out infinite}
.anim-shimmer{background-size:200% 100%;animation:shimmer-slide 3s linear infinite}
.anim-glow{animation:glow-pulse 3s ease-in-out infinite}
.boarding-tear{background-image:radial-gradient(circle 8px at 0 50%,transparent 97%,white),radial-gradient(circle 8px at 100% 50%,transparent 97%,white);background-size:16px 16px;background-repeat:repeat-y;background-position:left,right}
`;

export default function AirportOutstationClient({ data, relatedRoutes }) {
  const [openFaq, setOpenFaq] = useState(null);

  const whatsappMsg = encodeURIComponent(
    `Hi, I need a taxi from ${data.airport} to ${data.destination}. Please share availability and fare.`
  );

  return (
    <div className="min-h-screen bg-slate-950">
      <style dangerouslySetInnerHTML={{ __html: animCSS }} />

      {/* ============================================================ */}
      {/*  HERO  --  Airport Control Tower / Radar Dashboard            */}
      {/* ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(245,158,11,.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-900" />

        {/* Radar grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23f59e0b\' stroke-width=\'0.4\'%3E%3Crect width=\'60\' height=\'60\'/%3E%3Cline x1=\'0\' y1=\'30\' x2=\'60\' y2=\'30\'/%3E%3Cline x1=\'30\' y1=\'0\' x2=\'30\' y2=\'60\'/%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Animated radar sweep circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-amber-500/10">
          <div className="absolute top-0 left-1/2 w-[2px] h-1/2 origin-bottom anim-radar bg-gradient-to-t from-amber-400/30 to-transparent" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-amber-500/[0.06]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border border-amber-400/[0.08]" />

        {/* Runway lights at bottom */}
        <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 flex gap-12 md:gap-20">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-amber-400 anim-runway" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>

        {/* Floating glowing orbs */}
        <div className="absolute top-[18%] left-[12%] w-72 h-72 bg-amber-500/10 rounded-full blur-[120px] anim-float" />
        <div className="absolute bottom-[15%] right-[10%] w-56 h-56 bg-yellow-400/8 rounded-full blur-[100px] anim-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-[50%] right-[30%] w-32 h-32 bg-orange-300/6 rounded-full blur-[80px] anim-float" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* ---- Left : Text content ---- */}
            <div className="lg:col-span-3">
              {/* Route badge */}
              <div className="inline-flex items-center gap-2.5 bg-amber-500/10 backdrop-blur-2xl border border-amber-400/20 rounded-full px-5 py-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-amber-200 text-xs font-mono tracking-[0.2em] uppercase">
                  {data.airportCode} &rarr; {data.destination.toUpperCase()} &bull; LIVE TRACKING
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[0.9]">
                {data.airportCity}
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 anim-shimmer">
                  to {data.destination}
                </span>
              </h1>

              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                Fixed fare from <span className="text-yellow-300 font-bold">&#8377;{data.fares.sedan.price}</span>. Real-time flight tracking. Meet &amp; greet at arrival gate. 24/7 availability.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link href="tel:+917668570551" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 text-white px-9 py-4.5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-400/40 hover:scale-[1.03] transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" /> Call: 7668570551
                </Link>
                <Link href={`https://wa.me/917668570551?text=${whatsappMsg}`} className="inline-flex items-center gap-2.5 bg-white/[0.04] backdrop-blur-2xl text-white px-9 py-4.5 rounded-2xl font-bold text-lg border border-white/10 hover:bg-white/[0.08] hover:border-yellow-400/30 transition-all duration-300">
                  WhatsApp Booking <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Micro trust bar */}
              <div className="flex flex-wrap gap-6 text-sm">
                {[
                  { icon: Plane, label: "Flight Tracked" },
                  { icon: Shield, label: "Fixed Fare" },
                  { icon: Clock, label: "24/7 Service" },
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-500">
                    <t.icon className="w-4 h-4 text-amber-400" />
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ---- Right : Departure Board Card ---- */}
            <div className="lg:col-span-2">
              <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/[0.08] overflow-hidden shadow-2xl shadow-amber-500/10 anim-glow">
                {/* Board header strip */}
                <div className="relative bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Plane className="w-4 h-4 text-white" />
                    <span className="text-white font-black text-xs font-mono tracking-[0.15em]">TRANSFER BOARD</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                    <span className="text-white/80 text-[10px] font-mono">LIVE</span>
                  </div>
                </div>

                {/* Board body - flight information display style */}
                <div className="p-6 space-y-0">
                  {[
                    { label: "FROM", value: `${data.airport} (${data.airportCode})`, highlight: false },
                    { label: "TO", value: `${data.destination}, ${data.destinationState}`, highlight: false },
                    { label: "DISTANCE", value: data.distance, highlight: false },
                    { label: "DURATION", value: data.time, highlight: false },
                    { label: "FARE", value: `\u20B9${data.fares.sedan.price} onwards`, highlight: true },
                    { label: "STATUS", value: "AVAILABLE 24/7", highlight: 'status' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-3.5 border-b border-white/[0.05] last:border-0">
                      <span className="text-slate-500 text-[10px] font-mono tracking-[0.2em]">{item.label}</span>
                      <span className={`font-bold text-sm font-mono ${
                        item.highlight === true ? 'text-yellow-300 text-base' :
                        item.highlight === 'status' ? 'text-emerald-400 anim-flicker' :
                        'text-white'
                      }`}>{item.value}</span>
                    </div>
                  ))}
                </div>

                {/* Board footer - barcode strip */}
                <div className="px-6 py-3 bg-white/[0.02] border-t border-white/[0.05] flex items-center justify-between">
                  <div className="flex gap-[2px]">
                    {[4,8,3,6,10,4,7,3,9,5,4,8,6,3,7,10,4,5,8,3].map((h, i) => (
                      <div key={i} className="w-[2px] bg-amber-400/30 rounded-sm" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <span className="text-[9px] text-slate-600 font-mono">TRIVENI-{data.airportCode}-{data.destination.slice(0,3).toUpperCase()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curved bottom transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80V40C360 0 1080 0 1440 40V80Z" fill="#0f172a" />
          </svg>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TRUST METRICS BAR  --  Floating glass strip                 */}
      {/* ============================================================ */}
      <section className="relative -mt-1 py-6 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Flight Tracking", desc: "Real-time monitoring", color: "text-amber-400", bg: "bg-amber-500/10" },
              { icon: Shield, title: "Fixed Fare", desc: "Zero surge pricing", color: "text-yellow-400", bg: "bg-yellow-500/10" },
              { icon: Clock, title: "24/7 Service", desc: "Any flight, any time", color: "text-orange-400", bg: "bg-orange-500/10" },
              { icon: Star, title: "4.9 Rating", desc: "5000+ transfers", color: "text-amber-400", bg: "bg-amber-500/10" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center shrink-0`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  TERMINAL PICKUP GUIDE  --  Gate / Terminal cards             */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-1.5 mb-6">
              <span className="text-amber-300 text-xs font-bold tracking-[0.15em] uppercase">Terminal Guide</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Pickup From <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Every Gate</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Our drivers know every corner of {data.airport}</p>
          </div>

          <div className={`grid gap-6 ${data.terminals.length === 1 ? 'max-w-lg mx-auto' : data.terminals.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'}`}>
            {data.terminals.map((t, i) => {
              const isLast = i === data.terminals.length - 1 && data.terminals.length > 1;
              return (
                <div key={i} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${isLast ? 'bg-gradient-to-br from-amber-600/20 to-yellow-500/10 border border-amber-500/30 shadow-2xl shadow-amber-500/10' : 'bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/20'}`}>
                  {/* Terminal header */}
                  <div className={`px-6 py-5 border-b ${isLast ? 'border-amber-500/20' : 'border-white/[0.05]'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono tracking-[0.2em] uppercase ${isLast ? 'text-amber-300' : 'text-slate-500'}`}>{t.type}</span>
                      {isLast && <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />}
                    </div>
                    <h3 className={`text-2xl font-black ${isLast ? 'text-white' : 'text-white'}`}>{t.name}</h3>
                  </div>
                  {/* Terminal details */}
                  <div className="p-6 space-y-5">
                    {[
                      { label: "AIRLINES", value: t.airlines },
                      { label: "PICKUP POINT", value: t.pickup },
                    ].map((d, j) => (
                      <div key={j}>
                        <div className="text-[10px] text-slate-500 font-mono tracking-[0.15em] mb-1">{d.label}</div>
                        <div className="text-slate-300 text-sm">{d.value}</div>
                      </div>
                    ))}
                    <div>
                      <div className="text-[10px] text-slate-500 font-mono tracking-[0.15em] mb-1">DRIVE TIME</div>
                      <div className={`font-bold text-lg ${isLast ? 'text-yellow-300' : 'text-amber-400'}`}>{t.driveTime}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT / ROUTE OVERVIEW  --  Split content on dark           */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-1.5 mb-6">
            <span className="text-amber-300 text-xs font-bold tracking-[0.15em] uppercase">About This Route</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight">
            Hassle-Free<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">Airport Transfer</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description paragraphs */}
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              {data.description.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/Rs\s?([\d,]+)/g, '<strong class="text-yellow-300">&#8377;$1</strong>').replace(/(NH\d+[A-Za-z]*|Yamuna Expressway|Expressway|Delhi-Jaipur Expressway|Delhi-Chandigarh Expressway)/g, '<strong class="text-white">$1</strong>') }} />
              ))}
            </div>
            {/* Feature cards */}
            <div className="space-y-3">
              {[
                { icon: Plane, title: "Real-Time Flight Tracking", desc: "We monitor your flight from departure. If delayed, the driver adjusts." },
                { icon: Users, title: "Name Board Meet & Greet", desc: "Driver waits at arrival with your name. No searching for your ride." },
                { icon: IndianRupee, title: "Fixed Fare, No Surprises", desc: "Price agreed before booking. No meters, no surge, no hidden fees." },
                { icon: Clock, title: "24/7 Any Flight", desc: "Red-eye at 2 AM? Early morning at 5 AM? We are always available." },
                { icon: Route, title: `Direct to ${data.destination}`, desc: `Go straight to your hotel or any location in ${data.destination}.` },
                { icon: Car, title: "Comfortable AC Vehicles", desc: "Well-maintained, clean cars with experienced, professional drivers." },
              ].map((item, i) => (
                <div key={i} className="group flex gap-4 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 border border-white/[0.06] hover:border-amber-400/20 hover:bg-white/[0.06] transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm mb-0.5">{item.title}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRICING  --  Boarding Pass Style Cards                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-1.5 mb-6">
              <span className="text-amber-300 text-xs font-bold tracking-[0.15em] uppercase">Fixed Fares</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Boarding Pass</span>
            </h2>
            <p className="text-slate-500 text-lg">Tolls, parking, meet &amp; greet, flight tracking &mdash; all included</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: "ECONOMY", label: "Sedan", ...data.fares.sedan, best: "Solo / Couples", popular: false, icon: Car },
              { type: "BUSINESS", label: "SUV", ...data.fares.suv, best: "Families / Groups", popular: true, icon: Users },
              { type: "FIRST CLASS", label: "Tempo Traveller", ...data.fares.tempo, best: "Large Groups", popular: false, icon: Luggage },
            ].map((v, i) => (
              <div key={i} className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                v.popular
                  ? 'bg-gradient-to-b from-amber-500/15 to-yellow-500/5 border-2 border-amber-500/40 shadow-2xl shadow-amber-500/15'
                  : 'bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/20'
              }`}>
                {/* Class ribbon */}
                {v.popular && (
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-center py-2 text-[10px] font-black tracking-[0.25em] text-white">MOST POPULAR</div>
                )}

                {/* Boarding pass top half */}
                <div className="p-7 pb-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500">{v.type}</span>
                    <v.icon className={`w-5 h-5 ${v.popular ? 'text-yellow-400' : 'text-slate-600'}`} />
                  </div>
                  <div className="text-slate-400 text-sm mb-1">{v.vehicle}</div>
                  <div className="text-5xl font-black text-white mb-1 tracking-tight">&#8377;{v.price}</div>
                  <div className="text-slate-500 text-sm">one way &bull; fixed fare</div>
                </div>

                {/* Perforated tear line */}
                <div className="relative h-5 mx-3">
                  <div className="absolute inset-x-0 top-1/2 border-t border-dashed border-white/10" />
                  <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-950" />
                  <div className="absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-950" />
                </div>

                {/* Boarding pass bottom half */}
                <div className="p-7 pt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-amber-400" /> {v.seats} passengers + luggage
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-amber-400" /> Best for: {v.best}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Check className="w-4 h-4 text-amber-400" /> Flight tracking included
                  </div>

                  <Link href="tel:+917668570551" className={`block text-center py-3.5 rounded-2xl font-bold text-sm mt-4 transition-all duration-300 ${
                    v.popular
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-white hover:shadow-lg hover:shadow-amber-500/25 hover:scale-[1.02]'
                      : 'bg-white/[0.06] text-white hover:bg-white/[0.12] border border-white/[0.08]'
                  }`}>
                    <Phone className="w-4 h-4 inline mr-1.5 -mt-0.5" /> Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  ROUTE + DESTINATION  --  Two-column info cards              */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Route info card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-8">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1 mb-6">
                <Route className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 text-[10px] font-bold tracking-[0.15em] uppercase">Route Info</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-6">
                {data.airportCity} <span className="text-amber-400">&rarr;</span> {data.destination}
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Distance", value: data.distance, icon: MapPin },
                  { label: "Travel Time", value: data.time, icon: Clock },
                  { label: "Highway", value: data.highway, icon: Route },
                  { label: "Vehicles", value: "Sedan, SUV, Tempo Traveller", icon: Car },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/[0.05]">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-mono tracking-[0.15em] uppercase">{item.label}</span>
                      <div className="font-bold text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Destination attractions card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-8">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-1 mb-6">
                <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                <span className="text-yellow-300 text-[10px] font-bold tracking-[0.15em] uppercase">Destination Highlights</span>
              </div>
              <h3 className="text-3xl font-black text-white mb-6">{data.destination} Attractions</h3>
              <div className="grid grid-cols-2 gap-3">
                {data.destinationAttractions.map((place, i) => (
                  <div key={i} className="group flex items-center gap-3 bg-white/[0.03] rounded-xl p-3.5 border border-white/[0.05] hover:border-yellow-400/20 hover:bg-white/[0.06] transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shrink-0 group-hover:scale-125 transition-transform" />
                    <span className="text-slate-300 text-sm font-medium">{place}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  HOW IT WORKS  --  Runway Timeline Steps                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-slate-950 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-1.5 mb-6">
              <span className="text-amber-300 text-xs font-bold tracking-[0.15em] uppercase">4 Simple Steps</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Works</span>
            </h2>
          </div>

          <div className="relative">
            {/* Connecting runway line */}
            <div className="hidden md:block absolute top-[3.5rem] left-[10%] right-[10%] h-[2px]">
              <div className="w-full h-full bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0" />
              <div className="absolute inset-0 flex justify-between px-4">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-amber-400/40 anim-runway" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Book", desc: "Call or WhatsApp with your flight details and vehicle preference", icon: Phone },
                { step: "02", title: "Confirm", desc: "Driver details, photo, and car number sent via WhatsApp", icon: CheckCircle2 },
                { step: "03", title: "Land", desc: "Driver tracks your flight and waits with name board at arrival", icon: Plane },
                { step: "04", title: "Ride", desc: `${data.time} to ${data.destination}. Relax in your AC car`, icon: Car },
              ].map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="relative w-[4.5rem] h-[4.5rem] mx-auto mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 opacity-20 group-hover:opacity-40 blur-xl transition-opacity" />
                    <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform duration-300">
                      <s.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-950 border-2 border-amber-400 flex items-center justify-center text-[9px] font-black text-amber-300">{s.step}</span>
                  </div>
                  <h3 className="text-white font-black text-xl mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  AIRPORT SERVICES  --  Glassmorphic service cards            */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-1.5 mb-6">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-amber-300 text-xs font-bold tracking-[0.15em] uppercase">Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              What&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Included</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Plane, title: "Flight Tracking", desc: "Real-time flight monitoring. We adjust pickup if your flight is delayed or early.", color: "from-amber-500 to-amber-600" },
              { icon: Users, title: "Meet & Greet", desc: "Driver waits at arrival with your name board. No searching, no confusion.", color: "from-yellow-500 to-yellow-600" },
              { icon: Clock, title: "24/7 Availability", desc: "Red-eye flights, early mornings, midnight arrivals -- we cover all times.", color: "from-orange-500 to-orange-600" },
              { icon: Luggage, title: "Luggage Help", desc: "Driver assists with loading and unloading your bags into the vehicle.", color: "from-amber-400 to-yellow-500" },
              { icon: Shield, title: "No Hidden Charges", desc: "Tolls, parking, driver allowance -- all included in the quoted fare.", color: "from-yellow-400 to-orange-500" },
              { icon: Navigation, title: "Door-to-Door", desc: `Direct from ${data.airport} terminal to your ${data.destination} destination.`, color: "from-orange-400 to-amber-500" },
            ].map((item, i) => (
              <div key={i} className="group bg-white/[0.03] backdrop-blur-xl rounded-3xl p-7 border border-white/[0.06] hover:border-amber-400/25 hover:bg-white/[0.06] transition-all duration-500 hover:scale-[1.02]">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/25 group-hover:scale-110 transition-all duration-300`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-white text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQs  --  Expandable accordion on dark                      */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 px-4 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-1.5 mb-6">
              <span className="text-amber-300 text-xs font-bold tracking-[0.15em] uppercase">FAQs</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
              Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openFaq === i ? 'bg-white/[0.05] border-amber-500/25' : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${openFaq === i ? 'bg-amber-500/20' : 'bg-white/[0.05]'}`}>
                      <span className={`font-black text-xs ${openFaq === i ? 'text-amber-300' : 'text-slate-500'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="font-bold text-white text-sm">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 shrink-0 ml-3 transition-all duration-300 ${openFaq === i ? 'rotate-180 text-amber-400' : 'text-slate-600'}`} />
                </button>
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed pl-[3.75rem]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  RELATED ROUTES  --  Dark cross-link cards                   */}
      {/* ============================================================ */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Other <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Airport Routes</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedRoutes.map((rel, i) => (
                <Link key={i} href={`/${rel.slug}`} className="group bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 border border-white/[0.06] hover:border-amber-400/25 hover:bg-white/[0.06] transition-all duration-300 text-center hover:scale-[1.03]">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Plane className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white text-sm group-hover:text-yellow-300 transition-colors">
                    {rel.airport.split(' ')[0]} &rarr; {rel.destination}
                  </h3>
                  <div className="text-xs text-slate-500 mt-1.5">From &#8377;{rel.price}</div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 mx-auto mt-3 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/*  FINAL CTA  --  Dramatic gradient with animated background   */}
      {/* ============================================================ */}
      <section className="relative py-24 md:py-32 px-4 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-600" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.3\'%3E%3Crect width=\'60\' height=\'60\'/%3E%3Cline x1=\'0\' y1=\'30\' x2=\'60\' y2=\'30\'/%3E%3Cline x1=\'30\' y1=\'0\' x2=\'30\' y2=\'60\'/%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/10 rounded-full blur-[100px] anim-float" />
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-white/5 rounded-full blur-[80px] anim-float" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center mx-auto mb-8 anim-float">
            <Plane className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-5 tracking-tight">
            Landing at {data.airportCity}?
          </h2>
          <p className="text-2xl md:text-3xl text-white/80 font-bold mb-3">Your {data.destination} ride is waiting.</p>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Fixed fare from &#8377;{data.fares.sedan.price}. Flight tracking. Meet &amp; greet. 24/7 service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2.5 bg-white text-amber-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-black/20 hover:bg-amber-50 hover:scale-[1.03] transition-all duration-300">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </Link>
            <Link href={`https://wa.me/917668570551?text=${whatsappMsg}`} className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
              WhatsApp Booking <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BREADCRUMB  --  Minimal dark footer nav                     */}
      {/* ============================================================ */}
      <nav className="py-4 px-4 bg-slate-900 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white font-medium">{data.airportCity} Airport to {data.destination} Taxi</span>
        </div>
      </nav>
    </div>
  );
}
