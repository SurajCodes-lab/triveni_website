'use client';

import Link from 'next/link';
import { Phone, MapPin, Clock, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Star, Shield, Users, ChevronDown, Camera, Route, Coffee, Sunrise, HelpCircle, Hotel, Compass, Bookmark, ChevronRight, CalendarDays, MapPinned, Ticket, Check } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { useState } from 'react';

/* ─── Inline keyframe styles ─── */
const animStyles = `
@keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
@keyframes float-slow{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(2deg)}}
@keyframes pulse-glow{0%,100%{box-shadow:0 0 20px rgba(245,158,11,0.3)}50%{box-shadow:0 0 50px rgba(245,158,11,0.6)}}
@keyframes gradient-x{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
@keyframes dash-flow{0%{stroke-dashoffset:0}100%{stroke-dashoffset:-20}}
@keyframes calendar-flip{0%{transform:rotateX(0)}50%{transform:rotateX(-10deg)}100%{transform:rotateX(0)}}
@keyframes expand-line{0%{width:0}100%{width:100%}}
.animate-shimmer{background-size:200% 100%;animation:shimmer 3s linear infinite}
.animate-float{animation:float 6s ease-in-out infinite}
.animate-float-slow{animation:float-slow 8s ease-in-out infinite}
.animate-pulse-glow{animation:pulse-glow 3s ease-in-out infinite}
.animate-gradient-x{background-size:200% 200%;animation:gradient-x 4s ease infinite}
.animate-calendar-flip{animation:calendar-flip 4s ease-in-out infinite}
`;

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative">
      {/* Calendar page tear effect */}
      <div className="absolute -left-3 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-yellow-500 to-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
        <button onClick={() => setOpen(!open)} className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-xs font-bold text-orange-400">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="font-semibold text-white/90 text-sm sm:text-base">{question}</span>
          </div>
          <div className={`w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 transition-all duration-500 ${open ? 'bg-orange-500/30 rotate-180' : ''}`}>
            <ChevronDown className="w-4 h-4 text-orange-400" />
          </div>
        </button>
        <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16">
            <p className="text-white/60 text-sm leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CityItineraryClient({ data }) {
  const totalPlaces = data.dayWise.reduce((sum, day) => sum + day.places.filter(p => p.name !== 'Lunch Break' && p.name !== 'Lunch' && p.name !== 'Breakfast' && p.name !== 'Breakfast Break' && !p.name.startsWith('Drive') && !p.name.startsWith('Return') && !p.name.startsWith('Arrive') && !p.name.startsWith('Early') && !p.name.includes('Check-in') && !p.name.includes('Airport')).length, 0);
  const totalKm = data.perDayKm * data.days;
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div className="min-h-screen bg-amber-950 text-white overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: animStyles }} />

      {/* ═══════════════════════════════════════════════
          HERO — Dramatic animated gradient with floating calendar elements
          ═══════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/50 via-amber-950 to-yellow-900/40 animate-gradient-x" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-yellow-600/10 via-transparent to-transparent" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating calendar decorative elements */}
        <div className="absolute top-16 left-[8%] w-20 h-20 rounded-2xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-sm animate-float opacity-40 hidden lg:flex items-center justify-center">
          <CalendarDays className="w-8 h-8 text-orange-400/50" />
        </div>
        <div className="absolute top-40 right-[10%] w-16 h-16 rounded-xl border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm animate-float-slow opacity-30 hidden lg:flex items-center justify-center" style={{ animationDelay: '2s' }}>
          <MapPinned className="w-6 h-6 text-yellow-400/50" />
        </div>
        <div className="absolute bottom-20 left-[15%] w-14 h-14 rounded-lg border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm animate-float opacity-25 hidden lg:flex items-center justify-center" style={{ animationDelay: '4s' }}>
          <Ticket className="w-5 h-5 text-amber-400/50" />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors duration-300">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400/80">{data.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1">
              {/* Animated badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 rounded-full px-5 py-2 mb-6 animate-pulse-glow">
                <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <Calendar className="w-4 h-4 text-orange-300" />
                <span className="text-sm font-semibold text-amber-200 tracking-wide">{data.days}-Day Curated Itinerary</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-5 leading-[0.95] tracking-tight">
                <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent animate-gradient-x">{data.city}</span>
                <br />
                <span className="text-white/90">in {data.days} Day{data.days > 1 ? 's' : ''}</span>
              </h1>

              <p className="text-lg md:text-xl text-white/50 mb-8 max-w-lg leading-relaxed font-light">
                Your complete day-by-day travel planner with private AC cab. Every stop timed, every place covered.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="tel:7668570551" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-[length:200%_auto] hover:bg-right text-white font-bold px-7 py-4 rounded-2xl transition-all duration-500 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call 7668570551
                </a>
                <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2.5 bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold px-7 py-4 rounded-2xl transition-all duration-500 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105">
                  <WhatsAppIcon className="w-5 h-5 group-hover:animate-bounce" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Floating Price Card — Calendar/Day-planner style */}
            <div className="w-full lg:w-auto animate-float-slow">
              <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/[0.12] p-7 min-w-[300px] shadow-2xl shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-500 hover:border-orange-500/30">
                {/* Calendar header strip */}
                <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 rounded-b-full" />
                {/* Calendar ring holes */}
                <div className="flex justify-center gap-8 -mt-3 mb-4">
                  <div className="w-4 h-4 rounded-full bg-amber-950 border-2 border-orange-500/40" />
                  <div className="w-4 h-4 rounded-full bg-amber-950 border-2 border-yellow-500/40" />
                  <div className="w-4 h-4 rounded-full bg-amber-950 border-2 border-orange-500/40" />
                </div>

                <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-1">Package Starts At</p>
                <p className="text-4xl font-black bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent mb-5">{data.packagePrice.sedan}</p>

                <div className="space-y-3 mb-6">
                  {[
                    { label: 'AC Sedan', price: data.packagePrice.sedan, sub: 'Swift Dzire / Etios' },
                    { label: 'AC SUV', price: data.packagePrice.suv, sub: 'Innova / Ertiga' },
                    { label: 'Tempo Traveller', price: data.packagePrice.tempo, sub: '12-17 Seater' },
                  ].map((v, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-dashed border-white/[0.06] last:border-0">
                      <div>
                        <p className="text-sm text-white/80 font-medium">{v.label}</p>
                        <p className="text-[10px] text-white/30">{v.sub}</p>
                      </div>
                      <span className="text-sm font-bold text-orange-300">{v.price}</span>
                    </div>
                  ))}
                </div>

                <a href="tel:7668570551" className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white font-bold px-5 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40">
                  <Phone className="w-4 h-4" /> Book Your Trip
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          QUICK STATS — Horizontal stat bar with glow
          ═══════════════════════════════════════════════ */}
      <section className="py-10 md:py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/5 via-amber-600/5 to-yellow-600/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: CalendarDays, label: 'Duration', value: `${data.days} Day${data.days > 1 ? 's' : ''}`, color: 'orange' },
              { icon: Camera, label: 'Places to Visit', value: `${totalPlaces}+ Stops`, color: 'yellow' },
              { icon: Route, label: 'Total Coverage', value: `~${totalKm} km`, color: 'amber' },
              { icon: IndianRupee, label: 'Starting Price', value: data.packagePrice.sedan, color: 'orange' },
            ].map((stat, i) => (
              <div key={i} className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 md:p-6 text-center hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:scale-[1.03]">
                <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/10 border border-${stat.color}-500/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-5 h-5 text-${stat.color}-400`} />
                </div>
                <p className="text-xl md:text-2xl font-black text-white mb-0.5">{stat.value}</p>
                <p className="text-xs text-white/40 uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          DAY-BY-DAY ITINERARY — Calendar/Day-planner cards
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">Your Travel Planner</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">Day-by-Day Itinerary</span>
            </h2>
          </div>

          {/* Day selector tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {data.dayWise.map((day, i) => (
              <button
                key={i}
                onClick={() => setActiveDay(i)}
                className={`relative px-5 py-3 rounded-xl font-bold text-sm transition-all duration-500 ${
                  activeDay === i
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-600 text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-white/[0.04] text-white/50 border border-white/[0.08] hover:bg-white/[0.08] hover:text-white/80 hover:border-orange-500/20'
                }`}
              >
                <span className="block text-[10px] uppercase tracking-wider opacity-70 mb-0.5">Day</span>
                <span className="text-lg">{day.day}</span>
              </button>
            ))}
          </div>

          {/* Active day content */}
          {data.dayWise.map((day, dayIndex) => (
            <div key={dayIndex} className={`transition-all duration-500 ${activeDay === dayIndex ? 'block' : 'hidden'}`}>
              {/* Day header — calendar page style */}
              <div className="relative bg-gradient-to-r from-orange-600/20 via-yellow-600/15 to-amber-600/20 backdrop-blur-2xl rounded-3xl border border-orange-500/20 p-6 md:p-8 mb-8 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500" />
                {/* Perforated edge dots */}
                <div className="absolute top-4 left-4 right-4 flex justify-between">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  ))}
                </div>
                <div className="flex items-center gap-5 mt-2">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-600 flex flex-col items-center justify-center shadow-xl shadow-orange-500/30 animate-calendar-flip">
                    <span className="text-xs uppercase tracking-wider text-orange-200 font-bold">Day</span>
                    <span className="text-3xl font-black text-white leading-none">{day.day}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-400 mb-1">Day {day.day} of {data.days}</p>
                    <h3 className="text-2xl md:text-3xl font-black text-white">{day.title}</h3>
                    <p className="text-sm text-white/40 mt-1">{day.places.length} stops planned</p>
                  </div>
                </div>
              </div>

              {/* Place cards — day planner timeline */}
              <div className="relative">
                {/* Vertical timeline line */}
                <div className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500/40 via-yellow-500/20 to-transparent" />

                <div className="space-y-4">
                  {day.places.map((place, placeIndex) => {
                    const isActivity = place.name !== 'Lunch Break' && place.name !== 'Lunch' && place.name !== 'Breakfast' && !place.name.startsWith('Drive') && !place.name.startsWith('Return') && !place.name.startsWith('Arrive');
                    return (
                      <div key={placeIndex} className="relative flex gap-4 md:gap-6 group">
                        {/* Timeline node */}
                        <div className="relative z-10 shrink-0">
                          <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                            isActivity
                              ? 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30 group-hover:border-orange-400/60 group-hover:shadow-lg group-hover:shadow-orange-500/20'
                              : 'bg-white/[0.03] border border-white/[0.06]'
                          }`}>
                            {isActivity ? (
                              <span className="text-xs font-black text-orange-300">{String(placeIndex + 1).padStart(2, '0')}</span>
                            ) : (
                              <Coffee className="w-4 h-4 text-white/30" />
                            )}
                          </div>
                        </div>

                        {/* Place card — Day planner entry */}
                        <div className={`flex-1 relative rounded-2xl border p-5 md:p-6 transition-all duration-500 ${
                          isActivity
                            ? 'bg-white/[0.04] backdrop-blur-2xl border-white/[0.08] hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10'
                            : 'bg-white/[0.02] border-dashed border-white/[0.06]'
                        }`}>
                          {/* Dashed connection line from node to card */}
                          <div className="absolute -left-4 md:-left-6 top-1/2 w-4 md:w-6 h-px border-t border-dashed border-orange-500/20" />

                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                            <div className="flex-1">
                              <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                                <h4 className={`font-bold text-base ${isActivity ? 'text-white' : 'text-white/50'}`}>{place.name}</h4>
                                {place.entryFee && place.entryFee !== 'Free' && place.entryFee !== '-' && place.entryFee !== 'Included' && !place.entryFee.startsWith('₹0') && (
                                  <span className="text-[10px] font-bold bg-orange-500/15 text-orange-300 px-2.5 py-1 rounded-lg border border-orange-500/20">
                                    {place.entryFee}
                                  </span>
                                )}
                                {place.entryFee === 'Free' && (
                                  <span className="text-[10px] font-bold bg-emerald-500/15 text-emerald-300 px-2.5 py-1 rounded-lg border border-emerald-500/20">Free Entry</span>
                                )}
                              </div>
                              {place.time && (
                                <p className="text-xs text-orange-400/80 flex items-center gap-1.5 mb-2 font-medium">
                                  <Clock className="w-3 h-3" /> {place.time}
                                </p>
                              )}
                              {place.description && (
                                <p className="text-sm text-white/50 leading-relaxed">{place.description}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PACKAGE PRICING — Premium vehicle cards
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/[0.03] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">Choose Your Ride</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">Cab Package Pricing</span>
            </h2>
            <p className="text-white/40 mt-3 text-sm md:text-base">All-inclusive pricing for your {data.days}-day {data.city} adventure</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { type: 'AC Sedan', desc: 'Swift Dzire / Etios', price: data.packagePrice.sedan, capacity: '4 Passengers', icon: Car, tag: 'Budget Friendly' },
              { type: 'AC SUV', desc: 'Innova / Ertiga', price: data.packagePrice.suv, capacity: '6 Passengers', icon: Car, featured: true, tag: 'Most Popular' },
              { type: 'Tempo Traveller', desc: '12-17 Seater AC', price: data.packagePrice.tempo, capacity: '12+ Passengers', icon: Users, tag: 'Group Travel' },
            ].map((vehicle, i) => (
              <div key={i} className={`group relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border p-7 md:p-8 text-center transition-all duration-500 hover:scale-[1.03] ${
                vehicle.featured
                  ? 'border-orange-500/40 shadow-2xl shadow-orange-500/15 bg-white/[0.06] md:-mt-4 md:mb-4'
                  : 'border-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10'
              }`}>
                {/* Top gradient strip */}
                <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${vehicle.featured ? 'bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-500' : 'bg-gradient-to-r from-orange-500/30 to-yellow-500/30'}`} />

                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                  vehicle.featured ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' : 'bg-white/5 text-white/40 border border-white/10'
                }`}>{vehicle.tag}</span>

                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                  vehicle.featured ? 'bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-orange-500/30' : 'bg-white/5 border border-white/10'
                }`}>
                  <vehicle.icon className={`w-7 h-7 ${vehicle.featured ? 'text-orange-300' : 'text-white/50'}`} />
                </div>

                <h3 className="text-lg font-bold text-white mb-0.5">{vehicle.type}</h3>
                <p className="text-xs text-white/40 mb-5">{vehicle.desc}</p>

                <p className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent mb-1">{vehicle.price}</p>
                <p className="text-xs text-white/30 mb-6">{vehicle.capacity}</p>

                <a href="tel:7668570551" className={`w-full inline-flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl transition-all duration-300 text-sm ${
                  vehicle.featured
                    ? 'bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-500 hover:to-yellow-500 text-white shadow-lg shadow-orange-500/25'
                    : 'bg-white/5 border border-white/10 text-white/70 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-white'
                }`}>
                  <Phone className="w-4 h-4" /> Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          INCLUSIONS / EXCLUSIONS — Split glass cards
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-600/[0.02] to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">Package Details</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">What is Included</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Inclusions */}
            <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-emerald-500/20 p-7 md:p-8 hover:bg-white/[0.06] hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-b-full" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-emerald-300">Included</h3>
              </div>
              <ul className="space-y-3">
                {data.inclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60 group/item">
                    <div className="w-5 h-5 rounded-md bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-500/20 transition-colors">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="group-hover/item:text-white/80 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-red-500/15 p-7 md:p-8 hover:bg-white/[0.06] hover:border-red-500/25 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-red-500/60 to-rose-500/60 rounded-b-full" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 font-bold text-sm">✕</span>
                </div>
                <h3 className="text-lg font-bold text-red-300/80">Not Included</h3>
              </div>
              <ul className="space-y-3">
                {data.exclusions.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/50">
                    <div className="w-5 h-5 rounded-md bg-red-500/10 border border-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-red-400/70 text-[10px] font-bold">✕</span>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          HOTEL AREAS & BEST TIME — Info cards
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-7 md:p-8 hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500/50 to-yellow-500/50 rounded-b-full" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center">
                  <Hotel className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Where to Stay</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.hotelAreas.map((area, i) => (
                  <span key={i} className="bg-orange-500/10 text-orange-300 text-sm px-4 py-2 rounded-xl border border-orange-500/15 hover:bg-orange-500/20 hover:border-orange-500/30 transition-all duration-300 cursor-default">
                    <MapPinned className="w-3 h-3 inline mr-1.5 opacity-60" />{area}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-7 md:p-8 hover:bg-white/[0.08] hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-yellow-500/50 to-amber-500/50 rounded-b-full" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center">
                  <Sunrise className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Best Time to Visit</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">{data.bestTime}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          TRAVEL TIPS — Bookmark-style grid cards
          ═══════════════════════════════════════════════ */}
      {data.tips && data.tips.length > 0 && (
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/[0.03] to-transparent" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">Pro Tips</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">Travel Tips</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
              {data.tips.map((tip, i) => (
                <div key={i} className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 hover:scale-[1.02]">
                  {/* Bookmark tab */}
                  <div className="absolute -top-1 right-5 w-6 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-b-md opacity-60 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-black text-orange-400/40 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors leading-relaxed">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          SEO DESCRIPTION — Elegant content section
          ═══════════════════════════════════════════════ */}
      {data.description && (
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/[0.08] p-8 md:p-12">
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-orange-500/30 via-yellow-500/50 to-orange-500/30 rounded-b-full" />
              <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">About This {data.city} Itinerary</span>
              </h2>
              <div className="space-y-5">
                {data.description.split('\n\n').map((para, i) => (
                  <p key={i} className="text-white/55 leading-[1.8] text-sm md:text-base">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          FAQ SECTION — Numbered accordion
          ═══════════════════════════════════════════════ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="py-16 md:py-24 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-600/[0.03] to-transparent" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">Got Questions?</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">FAQs</span>
              </h2>
            </div>
            <div className="space-y-3">
              {data.faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          RELATED ITINERARIES — Postcard-style linked cards
          ═══════════════════════════════════════════════ */}
      {data.related && data.related.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">Explore More</p>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">Related Itineraries</span>
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.related.map((item, i) => (
                <Link key={i} href={`/${item.slug}`} className="group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-6 hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:scale-[1.03]">
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 group-hover:from-orange-500/60 group-hover:to-yellow-500/60 transition-all rounded-b-full" />
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <CalendarDays className="w-4 h-4 text-orange-400" />
                  </div>
                  <p className="text-xs font-bold text-orange-400 mb-1 uppercase tracking-wider">{item.days} Day{item.days > 1 ? 's' : ''}</p>
                  <h3 className="font-bold text-white group-hover:text-orange-200 transition-colors text-sm mb-2">{item.city} Itinerary</h3>
                  <p className="text-xs text-white/40">From {item.packagePrice.sedan}</p>
                  <ArrowRight className="w-4 h-4 text-orange-500/0 group-hover:text-orange-400 transition-all duration-300 mt-3 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════
          CROSS-SERVICE LINKS
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-3">More Services</p>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">Explore More in {data.city}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: `/sightseeing/${data.city.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.city} Sightseeing Tours` },
              { href: `/airport-service/${data.city.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.city} Airport Taxi` },
              { href: `/${data.city.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.city} Cab Service` },
              { href: `/wedding/${data.city.toLowerCase().replace(/\s+/g, '-')}`, label: `${data.city} Wedding Cars` },
              { href: `/places-to-visit-near-${data.city.toLowerCase().replace(/\s+/g, '-')}`, label: `Places Near ${data.city}` },
              { href: '/tour-package', label: 'Tour Packages' },
              { href: '/tempo-traveller', label: 'Tempo Traveller' },
              { href: '/outstation-cabs', label: 'Outstation Cabs' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="p-4 bg-white/[0.04] backdrop-blur-2xl rounded-xl border border-white/[0.08] hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 text-center">
                <span className="text-white/70 hover:text-white text-sm font-medium">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          FINAL CTA — Premium booking section
          ═══════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="relative bg-gradient-to-br from-orange-600/15 via-yellow-600/10 to-amber-600/15 backdrop-blur-2xl rounded-[2rem] border border-orange-500/20 p-10 md:p-16 overflow-hidden shadow-2xl shadow-orange-500/10">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-yellow-500" />
            <div className="absolute top-10 left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400 mb-4">Start Your Journey</p>
              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
                Ready to Explore{' '}
                <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent">{data.city}</span>?
              </h2>
              <p className="text-white/40 mb-8 text-sm md:text-lg max-w-lg mx-auto">
                Book your {data.days}-day cab package now. Private AC cab, experienced driver, zero hassle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:7668570551" className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-orange-600 via-yellow-600 to-orange-600 bg-[length:200%_auto] hover:bg-right text-white font-bold px-10 py-4.5 rounded-2xl transition-all duration-500 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105 text-base">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call 7668570551
                </a>
                <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2.5 bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold px-10 py-4.5 rounded-2xl transition-all duration-500 shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105 border border-emerald-500/30 text-base">
                  <WhatsAppIcon className="w-5 h-5 group-hover:animate-bounce" /> WhatsApp Us
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 md:gap-8 mt-8 text-xs text-white/30">
                <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> Verified Drivers</span>
                <span className="flex items-center gap-1.5"><Star className="w-3.5 h-3.5" /> 4.8/5 Rating</span>
                <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 5000+ Trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
