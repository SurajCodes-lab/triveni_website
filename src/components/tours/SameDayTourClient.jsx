'use client';

import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Sunrise, Camera, Route, Coffee, Landmark, Compass, Sparkles } from '@/components/ui/icons';
import { getRelatedTours } from '@/utilis/sameDayTourData';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

const iconMap = {
  car: Car,
  route: Route,
  camera: Camera,
  landmark: Landmark,
  coffee: Coffee,
  check: CheckCircle2,
};

export default function SameDayTourClient({ tour }) {
  const related = getRelatedTours(tour.slug, 6);

  return (
    <div className="min-h-screen bg-amber-50/30">

      {/* ====================================================================
          HERO - Vintage Travel Poster with Animated Sunrise Gradient
      ==================================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Animated sunrise gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950 via-amber-900 to-yellow-900" />

        {/* Animated sun glow */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full animate-pulse" style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.15) 0%, rgba(251,146,60,0.08) 40%, transparent 70%)' }} />

        {/* Floating travel dots pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fbbf24 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        {/* Decorative compass rose (top-right) */}
        <div className="absolute top-16 right-16 w-32 h-32 opacity-10 hidden lg:block">
          <svg viewBox="0 0 100 100" fill="none" stroke="#fbbf24" strokeWidth="0.5">
            <circle cx="50" cy="50" r="45" />
            <circle cx="50" cy="50" r="35" />
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="15" y1="15" x2="85" y2="85" />
            <line x1="85" y1="15" x2="15" y2="85" />
          </svg>
        </div>

        {/* Floating golden orbs */}
        <div className="absolute top-[10%] left-[8%] w-64 h-64 bg-amber-400/10 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-[15%] right-[5%] w-80 h-80 bg-orange-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-[60%] left-[60%] w-40 h-40 bg-yellow-400/10 rounded-full blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Vintage stamp badge */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-2 rounded-xl border-2 border-dashed border-amber-400/20 animate-[spin_30s_linear_infinite]" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
              <div className="relative bg-amber-800/30 backdrop-blur-2xl px-10 py-3 rounded-2xl border border-amber-400/30 shadow-2xl shadow-amber-500/10">
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-amber-300 animate-[spin_8s_linear_infinite]" />
                  <span className="text-amber-200 font-bold text-sm tracking-[0.25em] uppercase">{tour.origin} to {tour.destination} Day Trip 2026</span>
                  <Compass className="w-4 h-4 text-amber-300 animate-[spin_8s_linear_infinite_reverse]" />
                </div>
              </div>
            </div>
          </div>

          {/* Main title with shimmer effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-[0.9] tracking-tight">
            <span className="block">Same Day</span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300" style={{ backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' }}>{tour.destination} Tour</span>
          </h1>

          {/* Origin with arrow animation */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-amber-400/60 text-2xl md:text-3xl font-light">from</span>
            <span className="text-amber-200 text-2xl md:text-3xl font-bold">{tour.origin}</span>
            <div className="flex items-center gap-1 text-amber-400/40">
              <div className="w-8 h-px bg-amber-400/40" />
              <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>
            <span className="text-amber-200 text-2xl md:text-3xl font-bold">{tour.destination}</span>
          </div>

          <p className="text-lg md:text-xl text-stone-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {tour.placesToVisit.map(p => p.name).join(' \u2022 ')} -- all in one magnificent day via {tour.route}.
          </p>

          {/* Floating stat badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { value: tour.distance.split(' ')[0], label: tour.distance.includes('one way') ? 'km one way' : 'km', color: 'from-amber-400 to-yellow-500' },
              { value: tour.totalDuration.split(' ')[0], label: 'hours total', color: 'from-orange-400 to-amber-500' },
              { value: `\u20B9${tour.fares.sedan}`, label: 'sedan fare', color: 'from-yellow-400 to-orange-500' },
            ].map((stat, i) => (
              <div key={i} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.color} rounded-2xl blur-sm opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-2xl px-8 py-4 border border-amber-500/20 hover:border-amber-400/50 transition-all duration-500">
                  <div className="text-2xl md:text-3xl font-black text-amber-300">{stat.value}</div>
                  <div className="text-xs text-amber-200/50 font-medium tracking-wider uppercase">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons with glow */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link onClick={() => trackPhoneCall('same_day_tour')} href="tel:+917668570551" className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 rounded-2xl shadow-2xl shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-shadow" />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
              <Phone className="w-5 h-5 relative z-10 text-stone-900 group-hover:animate-pulse" />
              <span className="relative z-10 text-stone-900">Call: 7668570551</span>
            </Link>
            <Link onClick={() => trackWhatsAppClick('same_day_tour')} href={`https://wa.me/917668570551?text=I want to book a ${tour.title}`} className="group inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-2xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-amber-400/20 hover:bg-white/[0.12] hover:border-amber-400/50 transition-all duration-500">
              WhatsApp Booking
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80 L0 45 Q180 15 360 35 Q540 55 720 30 Q900 5 1080 25 Q1260 45 1440 20 L1440 80Z" fill="rgba(255,251,235,1)" />
          </svg>
        </div>

        {/* Shimmer animation style */}
        <style jsx>{`
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
        `}</style>
      </section>

      {/* ====================================================================
          QUICK INFO - Postcard-Style Stamp Cards
      ==================================================================== */}
      <section className="relative -mt-4 z-20 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Route, title: tour.distance, desc: "Total Distance", accent: 'amber' },
              { icon: Clock, title: tour.driveTime, desc: "Drive Time", accent: 'orange' },
              { icon: MapPin, title: `${tour.placesToVisit.length} Places`, desc: "To Visit", accent: 'yellow' },
              { icon: Sunrise, title: tour.departureTime, desc: "Departure", accent: 'amber' },
            ].map((f, i) => (
              <div key={i} className="group relative">
                {/* Stamp perforated border effect */}
                <div className="relative bg-white rounded-2xl p-5 shadow-lg border-2 border-dashed border-amber-200/60 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-200/20 hover:-translate-y-2 transition-all duration-500">
                  {/* Corner stamp mark */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${f.accent}-100 to-${f.accent}-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <f.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="font-black text-stone-800 text-sm">{f.title}</div>
                  <div className="text-xs text-stone-400 font-medium tracking-wider uppercase mt-0.5">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          OVERVIEW - Travel Journal Layout with Sticky Sidebar
      ==================================================================== */}
      <section className="py-20 md:py-28 px-4 bg-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Sticky sidebar - vintage ticket style */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <div className="relative bg-gradient-to-br from-amber-800 to-orange-900 rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/30">
                  {/* Ticket tear line */}
                  <div className="absolute top-28 left-0 right-0 border-t-2 border-dashed border-amber-700/50" />
                  <div className="absolute top-[108px] -left-3 w-6 h-6 bg-amber-50/30 rounded-full" />
                  <div className="absolute top-[108px] -right-3 w-6 h-6 bg-amber-50/30 rounded-full" />

                  {/* Ticket header */}
                  <div className="p-6 pb-8">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-amber-300/60 text-xs font-bold tracking-[0.3em] uppercase">Tour Pass</span>
                      <span className="text-amber-300/60 text-xs font-mono">2026</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-2xl font-black text-white">{tour.origin}</div>
                      <div className="flex-1 flex items-center gap-1">
                        <div className="flex-1 h-px bg-amber-500/30" />
                        <Car className="w-4 h-4 text-amber-400" />
                        <div className="flex-1 h-px bg-amber-500/30" />
                      </div>
                      <div className="text-2xl font-black text-white">{tour.destination}</div>
                    </div>
                  </div>

                  {/* Ticket details */}
                  <div className="p-6 pt-8 space-y-3">
                    {[
                      { label: "Distance", value: tour.distance },
                      { label: "Duration", value: tour.totalDuration },
                      { label: "Route", value: tour.route },
                      { label: "Drive Time", value: tour.driveTime },
                      { label: "Best Season", value: tour.bestTime },
                      { label: "Places", value: `${tour.placesToVisit.length} sights` },
                      { label: "Closed Day", value: tour.closedDay },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-1.5 border-b border-amber-700/20 last:border-0">
                        <span className="text-amber-300/50 text-xs font-bold tracking-wider uppercase">{item.label}</span>
                        <span className="font-bold text-amber-100 text-sm text-right max-w-[55%]">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book button */}
                  <div className="p-6 pt-2">
                    <Link onClick={() => trackPhoneCall('same_day_tour')} href="tel:+917668570551" className="block text-center bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-900 px-6 py-3.5 rounded-xl font-black text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-amber-400/30 hover:scale-[1.02] transition-all duration-300">
                      <Phone className="w-4 h-4 inline mr-2" />Book This Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Content area */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase border border-amber-200/50">
                <Compass className="w-3.5 h-3.5" /> About This Tour
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 leading-tight tracking-tight">
                {tour.origin} to {tour.destination}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500">Same Day Tour</span>
                <span className="block text-xl md:text-2xl font-medium text-stone-400 mt-2">by Private Car</span>
              </h2>
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                {tour.description.split('\n\n').map((para, i) => (
                  <p key={i} className="first-letter:text-3xl first-letter:font-black first-letter:text-amber-600 first-letter:float-left first-letter:mr-2 first-letter:mt-1">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          ITINERARY - Premium Vertical Timeline with Alternating Layout
      ==================================================================== */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-amber-950 via-orange-950 to-stone-950 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(251,191,36,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        {/* Floating decorative orbs */}
        <div className="absolute top-20 right-[10%] w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-2xl text-amber-300 text-xs font-bold px-6 py-2 rounded-full mb-6 border border-amber-500/20 tracking-[0.25em] uppercase shadow-lg shadow-amber-500/5">
              <Clock className="w-3.5 h-3.5" /> Your Day Unfolds
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Detailed{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300">Itinerary</span>
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg">Every hour planned, from {tour.origin} to {tour.destination} and back</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500/60 via-orange-500/40 to-amber-500/60" />

            <div className="space-y-6">
              {tour.itinerary.map((item, idx) => {
                const IconComp = iconMap[item.icon] || MapPin;
                const isLeft = idx % 2 === 0;
                return (
                  <div key={idx} className="group relative">
                    <div className={`flex items-start gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      {/* Content card */}
                      <div className={`flex-1 pl-16 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'}`}>
                        <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl p-6 border border-amber-500/10 group-hover:border-amber-400/40 group-hover:bg-white/[0.08] transition-all duration-500 shadow-lg shadow-black/5 group-hover:shadow-amber-500/10">
                          {/* Postcard stamp corner */}
                          <div className="absolute top-3 right-3 w-10 h-10 border-2 border-dashed border-amber-500/20 rounded-lg flex items-center justify-center text-amber-400/40 text-xs font-mono group-hover:border-amber-400/40 transition-colors">
                            {String(idx + 1).padStart(2, '0')}
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-black text-amber-400 tracking-wide">{item.time}</span>
                            {item.duration && (
                              <span className="text-[10px] text-amber-300/40 bg-amber-500/10 px-2.5 py-0.5 rounded-full font-bold tracking-wider uppercase">{item.duration}</span>
                            )}
                          </div>
                          <h3 className="text-lg md:text-xl font-bold text-white pr-12 leading-snug">{item.activity}</h3>
                        </div>
                      </div>

                      {/* Center icon node */}
                      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                        <div className="relative">
                          <div className="absolute -inset-1 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
                          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                            <IconComp className="w-5 h-5 text-stone-900" />
                          </div>
                        </div>
                      </div>

                      {/* Spacer for alternate side */}
                      <div className="hidden md:block flex-1" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          PRICING - Vintage Travel Ticket Cards
      ==================================================================== */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60 relative overflow-hidden">
        {/* Decorative corner flourish */}
        <div className="absolute top-0 left-0 w-40 h-40 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" stroke="#d97706" strokeWidth="0.5">
            <path d="M0 100 Q50 80 80 50 Q100 20 100 0" />
            <path d="M0 80 Q40 60 60 40 Q80 20 80 0" />
            <path d="M0 60 Q30 40 40 30 Q60 10 60 0" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-[0.25em] uppercase border border-amber-200/60">
              <IndianRupee className="w-3.5 h-3.5" /> Transparent Pricing
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-4 tracking-tight">
              Tour{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500">Pricing</span>
            </h2>
            <p className="text-stone-400 text-lg">All toll and parking included. Zero hidden charges.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { vehicle: "Sedan", sub: "Swift Dzire / Etios", capacity: "4 Passengers", price: tour.fares.sedan, features: ["AC sedan", "Comfortable boot space", "Best for couples/small families"], popular: false, icon: Car },
              { vehicle: "SUV", sub: "Innova / Ertiga", capacity: "6-7 Passengers", price: tour.fares.suv, features: ["Spacious AC SUV", "Large luggage space", "Best for families/groups"], popular: true, icon: Car },
              { vehicle: "Tempo Traveller", sub: "12-16 Seater", capacity: "12-16 Passengers", price: tour.fares.tempo, features: ["AC Tempo Traveller", "Pushback seats", "Best for large groups"], popular: false, icon: Users },
            ].map((plan, idx) => (
              <div key={idx} className={`group relative ${plan.popular ? 'md:-translate-y-4' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-60" />
                      <span className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-xs font-black tracking-[0.2em] uppercase shadow-xl">Most Popular</span>
                    </div>
                  </div>
                )}
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl ${plan.popular ? 'border-2 border-amber-400 shadow-amber-200/40 ring-1 ring-amber-200/20' : 'border border-stone-200'} hover:shadow-2xl hover:-translate-y-2 transition-all duration-500`}>
                  {/* Card header with gradient */}
                  <div className={`p-6 pb-4 ${plan.popular ? 'bg-gradient-to-br from-amber-50 to-orange-50' : 'bg-stone-50/50'}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-xl ${plan.popular ? 'bg-gradient-to-br from-amber-400 to-orange-500' : 'bg-stone-200'} flex items-center justify-center`}>
                        <plan.icon className={`w-5 h-5 ${plan.popular ? 'text-white' : 'text-stone-500'}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-stone-800">{plan.vehicle}</h3>
                        <p className="text-xs text-stone-400 font-medium">{plan.sub}</p>
                      </div>
                    </div>
                    <p className="text-stone-400 text-sm">{plan.capacity}</p>
                  </div>

                  <div className="p-6 pt-4">
                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm text-stone-400 font-bold">{'\u20B9'}</span>
                        <span className="text-5xl font-black text-stone-900 tracking-tight">{plan.price}</span>
                      </div>
                      <span className="text-stone-400 text-xs font-bold tracking-wider uppercase">per round trip</span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link onClick={() => trackPhoneCall('same_day_tour')} href="tel:+917668570551" className={`block text-center px-6 py-4 rounded-xl font-black text-sm tracking-wider uppercase transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-300/30 hover:shadow-amber-400/50 hover:scale-[1.02]' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          PLACES TO VISIT - Postcard/Stamp Collection Layout
      ==================================================================== */}
      <section className="py-20 md:py-32 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-amber-100/40 rounded-full blur-[80px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-[0.25em] uppercase border border-amber-200/60">
              <Camera className="w-3.5 h-3.5" /> Sightseeing Highlights
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-4 tracking-tight">
              Places to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-yellow-500">Visit</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tour.placesToVisit.map((place, idx) => (
              <div key={idx} className="group relative">
                {/* Postcard frame */}
                <div className="relative bg-gradient-to-br from-amber-50 to-orange-50/50 rounded-2xl p-6 border-2 border-dashed border-amber-200/50 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-100/50 hover:-translate-y-1 transition-all duration-500">
                  {/* Stamp corner */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow-lg flex items-center justify-center transform rotate-6 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-white font-black text-xl">#{idx + 1}</span>
                  </div>

                  <div className="pr-12">
                    <h3 className="text-xl font-black text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">{place.name}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{place.desc}</p>
                  </div>

                  {/* Decorative postcard line */}
                  <div className="mt-4 pt-3 border-t border-amber-200/40 flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-xs text-amber-600/60 font-bold tracking-wider uppercase">{tour.destination}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          INCLUSIONS / EXCLUSIONS - Split Panel with Green/Red Accent
      ==================================================================== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-stone-50 via-amber-50/20 to-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">What&apos;s Included & Excluded</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Included */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-emerald-100">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-5">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" /> Included in Price
                </h3>
              </div>
              <div className="p-6 space-y-3">
                {tour.inclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/50 border border-emerald-100/50 hover:bg-emerald-50 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Excluded */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-red-100">
              <div className="bg-gradient-to-r from-red-500 to-rose-500 p-5">
                <h3 className="text-xl font-black text-white">Not Included</h3>
              </div>
              <div className="p-6 space-y-3">
                {tour.exclusions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-50/50 border border-red-100/50 hover:bg-red-50 transition-colors">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 font-black text-xs">x</span>
                    </div>
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          TIPS & BEST TIME - Bento Grid with Calendar Card
      ==================================================================== */}
      <section className="py-20 md:py-28 px-4 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-[100px]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-[0.25em] uppercase border border-amber-200/60">
              <Star className="w-3.5 h-3.5" /> Travel Tips
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">Tips & Best Time to Visit</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Best time - large card */}
            <div className="md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-200/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-black text-stone-800 mb-2 pr-24">Best Time to Visit</h3>
              <p className="text-amber-700 font-bold text-lg mb-4">{tour.bestTime}</p>
              <p className="text-stone-600 mb-6">The ideal season to enjoy your {tour.origin} to {tour.destination} day trip with pleasant weather and clear views.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.closedDay !== "None" && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-700 font-black text-sm">Closed: {tour.closedDay}</p>
                  </div>
                )}
                <div className="bg-amber-100/60 border border-amber-200 rounded-xl p-4">
                  <p className="text-amber-900 font-bold text-sm">Depart: {tour.departureTime}</p>
                  <p className="text-amber-700/70 font-medium text-xs mt-0.5">Return: {tour.returnTime}</p>
                </div>
              </div>
            </div>

            {/* Tips card */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px]" />
              <h3 className="text-lg font-black mb-5 flex items-center gap-2 relative z-10">
                <Sparkles className="w-5 h-5 text-amber-400" /> Pro Tips
              </h3>
              <ul className="space-y-3 relative z-10">
                {tour.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    </div>
                    <span className="text-stone-300 text-sm leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          FAQ - Elegant Accordion Cards
      ==================================================================== */}
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-stone-50 to-amber-50/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-[0.25em] uppercase border border-amber-200/60">
              Got Questions?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {tour.faqs.map((faq, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-stone-100 hover:border-amber-200 transition-all duration-500">
                <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-start gap-4">
                  <div className="relative flex-shrink-0 mt-0.5">
                    <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg blur-sm opacity-30 group-hover:opacity-60 transition-opacity" />
                    <span className="relative bg-gradient-to-br from-amber-400 to-orange-500 text-white w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black shadow-md">Q{idx + 1}</span>
                  </div>
                  <span className="leading-snug">{faq.question}</span>
                </h3>
                <p className="text-stone-600 pl-12 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          RELATED TOURS - Travel Stamp Collection
      ==================================================================== */}
      <section className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 tracking-tight">Explore More Same Day Tours</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((rt, idx) => (
              <Link key={idx} href={`/${rt.slug}`} className="group relative flex items-center gap-4 bg-gradient-to-r from-amber-50/80 to-orange-50/50 p-5 rounded-2xl border-2 border-dashed border-amber-200/40 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 flex-shrink-0">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{rt.title}</div>
                  <div className="text-xs text-stone-400 font-medium mt-0.5">{rt.origin} to {rt.destination} | {rt.distance}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          CROSS-SERVICE LINKS
      ==================================================================== */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-black text-stone-900 mb-8 text-center">Explore More Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: `/sightseeing/${tour.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${tour.destination} Sightseeing Tours` },
              { href: `/airport-service/${tour.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${tour.destination} Airport Taxi` },
              { href: `/${tour.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${tour.destination} Cab Service` },
              { href: `/wedding/${tour.destination.toLowerCase().replace(/\s+/g, '-')}`, label: `${tour.destination} Wedding Cars` },
              { href: `/sightseeing/${tour.origin.toLowerCase().replace(/\s+/g, '-')}`, label: `${tour.origin} Sightseeing Tours` },
              { href: `/${tour.origin.toLowerCase().replace(/\s+/g, '-')}`, label: `${tour.origin} Cab Service` },
              { href: '/tour-package', label: 'Tour Packages' },
              { href: '/outstation-cabs', label: 'Outstation Cabs' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group p-4 bg-white rounded-xl border-2 border-dashed border-amber-200/50 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-100/50 hover:-translate-y-0.5 transition-all duration-300 text-center">
                <span className="text-stone-700 group-hover:text-amber-700 text-sm font-semibold">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          FINAL CTA - Grand Banner with Animated Background
      ==================================================================== */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-700" />

        {/* Animated pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-0 left-[20%] w-80 h-80 bg-yellow-300/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-[15%] w-96 h-96 bg-orange-300/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-200" />
            <span className="text-amber-100 text-sm font-bold tracking-wider uppercase">Book Your Adventure</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
            Ready for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-orange-200">{tour.destination} Day Trip?</span>
          </h2>
          <p className="text-amber-100/80 mb-12 text-lg max-w-2xl mx-auto">Book your {tour.title} now. Comfortable AC cabs, experienced drivers, all-inclusive pricing.</p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link onClick={() => trackPhoneCall('same_day_tour')} href="tel:+917668570551" className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-30" />
              <Phone className="w-5 h-5 relative z-10 text-amber-700" />
              <span className="relative z-10 text-amber-700">Call: 7668570551</span>
            </Link>
            <Link onClick={() => trackWhatsAppClick('same_day_tour')} href={`https://wa.me/917668570551?text=I want to book a ${tour.title}`} className="group inline-flex items-center justify-center gap-3 bg-amber-900/40 backdrop-blur-2xl text-white px-12 py-5 rounded-2xl font-black text-lg border border-amber-300/30 hover:bg-amber-900/60 hover:border-amber-300/50 transition-all duration-500">
              WhatsApp Booking
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
