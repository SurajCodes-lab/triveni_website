'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  IndianRupee, MapPin, Star, Users, Zap, Navigation, Route, Award,
  ShieldCheck, Headphones, Calendar, Fuel, Percent, Info, TrendingUp,
  Trophy, Crown, Tag, Target, Check
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function CityTaxiFareClient({ city, relatedCities }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeVehicle, setActiveVehicle] = useState('sedan');

  const whatsappMsg = `Hi, I need a taxi in ${city.city}. Please share fare details and availability.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;

  const handleCall = (location) => {
    trackPhoneCall(location, '7668570551');
    window.location.href = 'tel:+917668570551';
  };

  const handleWhatsApp = (location) => {
    trackWhatsAppClick(location, whatsappMsg, `taxi-fare-${city.slug}`);
    window.open(whatsappUrl, '_blank');
  };

  const vehicleCards = [
    {
      key: 'sedan',
      name: 'AC Sedan',
      models: 'Swift Dzire / Etios',
      rate: city.baseFare.sedan,
      icon: Car,
      capacity: '4 Passengers',
      features: ['AC', 'GPS Tracked', 'Clean Interior'],
      color: 'from-slate-700 to-slate-900',
      best: false,
    },
    {
      key: 'suv',
      name: 'SUV / MUV',
      models: 'Innova / Ertiga',
      rate: city.baseFare.suv,
      icon: Car,
      capacity: '6-7 Passengers',
      features: ['AC', 'Spacious', 'Luggage Room'],
      color: 'from-amber-500 to-[#FACF2D]',
      best: true,
    },
    {
      key: 'tempo',
      name: 'Tempo Traveller',
      models: '12-20 Seater',
      rate: city.baseFare.tempo,
      icon: Users,
      capacity: '12-20 Passengers',
      features: ['AC', 'Pushback Seats', 'Group Travel'],
      color: 'from-slate-600 to-slate-800',
      best: false,
    },
  ];

  const savingsNum = parseInt(city.comparisonWithOla.savings);

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* ═══════════════════════ CSS ANIMATIONS ═══════════════════════ */}
      <style jsx global>{`
        @keyframes shimmer-gold { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float-gentle { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulse-gold { 0%,100% { box-shadow: 0 0 20px rgba(250,207,45,0.2); } 50% { box-shadow: 0 0 40px rgba(250,207,45,0.45); } }
        @keyframes badge-bounce { 0%,100% { transform: scale(1) rotate(-2deg); } 50% { transform: scale(1.05) rotate(2deg); } }
        @keyframes slide-in { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes border-glow { 0%,100% { border-color: rgba(250,207,45,0.15); } 50% { border-color: rgba(250,207,45,0.5); } }
        .animate-shimmer-gold { background-size: 200% 100%; animation: shimmer-gold 3s linear infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-pulse-gold { animation: pulse-gold 3s ease-in-out infinite; }
        .animate-badge-bounce { animation: badge-bounce 2s ease-in-out infinite; }
        .animate-slide-in { animation: slide-in 0.4s ease-out forwards; }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
        .gold-gradient-text { background: linear-gradient(135deg, #FACF2D 0%, #d4a017 50%, #FACF2D 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1 — HERO (Premium Light with Gold Accents)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-yellow-50/30 to-slate-50" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15,23,42,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Gold orbs */}
        <div className="absolute top-1/4 left-[6%] w-80 h-80 bg-[#FACF2D]/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 right-[8%] w-72 h-72 bg-amber-300/8 rounded-full blur-[120px]" />
        <div className="absolute top-[55%] left-[45%] w-56 h-56 bg-yellow-200/10 rounded-full blur-[100px]" />

        {/* Floating fare badge */}
        <div className="absolute top-32 right-[9%] hidden lg:block animate-float-gentle">
          <div className="relative">
            <div className="absolute -inset-6 bg-[#FACF2D]/15 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-[#FACF2D] via-amber-400 to-yellow-500 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl animate-pulse-gold">
              <div className="text-center">
                <div className="text-[10px] font-bold text-slate-900/60 uppercase tracking-widest">Starting</div>
                <div className="text-3xl font-black text-slate-900">Rs {city.baseFare.sedan}</div>
                <div className="text-[10px] font-bold text-slate-900/70 uppercase tracking-wider">per km</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute -bottom-px left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto"><path d="M0 80h1440V30C1200 80 240 0 0 50v30z" fill="#f8fafc" /></svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 lg:py-0 w-full">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
              <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
              <ChevronDown className="w-3 h-3 -rotate-90" />
              <Link href="/taxi-fare" className="hover:text-[#FACF2D] transition-colors">Taxi Fare</Link>
              <ChevronDown className="w-3 h-3 -rotate-90" />
              <span className="text-slate-700 font-medium">{city.city}</span>
            </div>

            {/* City Badge */}
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/30 rounded-full px-5 py-2 mb-6">
              <MapPin className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-700 tracking-wide uppercase">{city.city} Taxi Fares 2025</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-slate-900 leading-[0.9] tracking-tight mb-4">
              {city.city}
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 relative">
                <span className="relative">
                  Taxi Fare
                  <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#FACF2D] rounded-full" />
                </span>
                <span className="text-slate-400 ml-3">Guide</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-500 max-w-xl mt-6 mb-8 leading-relaxed">
              Transparent pricing with <span className="text-slate-800 font-semibold">no surge</span>, no hidden fees.
              Save up to <span className="text-emerald-600 font-bold">{city.comparisonWithOla.savings}</span> compared to Ola/Uber.
            </p>

            {/* Fare pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {vehicleCards.map((v) => (
                <div key={v.key} className="flex items-center gap-2 bg-white border border-slate-200 shadow-md rounded-xl px-4 py-2.5 hover:border-[#FACF2D]/50 hover:shadow-lg transition-all duration-300">
                  <IndianRupee className="w-4 h-4 text-[#FACF2D]" />
                  <span className="text-sm font-bold text-slate-800">{v.name}</span>
                  <span className="text-sm text-slate-500">from</span>
                  <span className="text-lg font-black text-slate-900">Rs {v.rate}/km</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleCall('hero_section')}
                className="group flex items-center gap-3 bg-[#FACF2D] hover:bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleWhatsApp('hero_section')}
                className="group flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-[#FACF2D] text-slate-700 hover:text-slate-900 font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 text-green-600" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
                <span>WhatsApp Quote</span>
              </button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-6 mt-10 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#FACF2D]" />
                <span>No Surge Pricing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-[#FACF2D]" />
                <span>4.9/5 Rated</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#FACF2D]" />
                <span>10,000+ Happy Rides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2 — FARE STRUCTURE (3 Vehicle Cards)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/25 rounded-full px-5 py-2 mb-5">
              <IndianRupee className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              {city.city} Taxi Fare <span className="gold-gradient-text">Per Km</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Choose your vehicle. All fares include AC, driver allowance, and GPS tracking. No hidden charges.
            </p>
          </div>

          {/* Vehicle cards grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {vehicleCards.map((vehicle, idx) => (
              <div
                key={vehicle.key}
                onClick={() => setActiveVehicle(vehicle.key)}
                className={`relative group cursor-pointer rounded-3xl p-1 transition-all duration-500 ${
                  activeVehicle === vehicle.key
                    ? 'scale-[1.02] shadow-2xl'
                    : 'hover:scale-[1.01] shadow-xl hover:shadow-2xl'
                }`}
              >
                {/* Gold border for best value */}
                {vehicle.best && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#FACF2D] text-slate-900 text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg animate-badge-bounce">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`relative bg-white rounded-[22px] p-8 border-2 transition-all duration-300 ${
                  activeVehicle === vehicle.key
                    ? 'border-[#FACF2D] shadow-[0_0_30px_rgba(250,207,45,0.15)]'
                    : 'border-slate-100 hover:border-[#FACF2D]/40'
                }`}>
                  {/* Icon container */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${vehicle.color} shadow-lg`}>
                    <vehicle.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Vehicle info */}
                  <h3 className="text-2xl font-black text-slate-900 mb-1">{vehicle.name}</h3>
                  <p className="text-sm text-slate-400 mb-6">{vehicle.models}</p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-sm text-slate-400">Rs</span>
                    <span className="text-5xl font-black text-slate-900">{vehicle.rate}</span>
                    <span className="text-lg text-slate-400 font-medium">/km</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6">Minimum fare: Rs {city.minimumFare}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-2.5 text-sm text-slate-600">
                      <Users className="w-4 h-4 text-[#FACF2D]" />
                      <span>{vehicle.capacity}</span>
                    </div>
                    {vehicle.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleCall(`fare_card_${vehicle.key}`); }}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      vehicle.best
                        ? 'bg-[#FACF2D] hover:bg-amber-400 text-slate-900 shadow-lg hover:shadow-xl'
                        : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl'
                    }`}
                  >
                    <Phone className="w-4 h-4" />
                    Book {vehicle.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Minimum fare notice */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white border border-slate-200 rounded-2xl px-6 py-3.5 shadow-md">
              <Info className="w-5 h-5 text-[#FACF2D] flex-shrink-0" />
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-800">Minimum fare Rs {city.minimumFare}</span> applies for all vehicle types. Toll and parking charged at actual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3 — POPULAR ROUTE FARES (Clean Light Table)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/25 rounded-full px-5 py-2 mb-5">
              <Route className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Popular Routes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              {city.city} Taxi Fare <span className="gold-gradient-text">Estimates</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Estimated sedan fares for popular routes. Actual fare may vary based on route and traffic.
            </p>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Header row */}
            <div className="bg-gradient-to-r from-[#FACF2D] via-amber-400 to-[#FACF2D] px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-sm font-bold text-slate-900 uppercase tracking-wider">
                <div className="col-span-1 hidden sm:block text-center">#</div>
                <div className="col-span-5 sm:col-span-4">From</div>
                <div className="col-span-4 sm:col-span-3">To</div>
                <div className="col-span-3 sm:col-span-2 text-center">Distance</div>
                <div className="hidden sm:block sm:col-span-2 text-right">Est. Fare</div>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-slate-100">
              {city.popularFares.map((route, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center transition-colors duration-200 hover:bg-[#FACF2D]/5 ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  <div className="col-span-1 hidden sm:flex items-center justify-center">
                    <span className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                  </div>
                  <div className="col-span-5 sm:col-span-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#FACF2D] rounded-full flex-shrink-0" />
                      <span className="font-semibold text-slate-800 text-sm">{route.from}</span>
                    </div>
                  </div>
                  <div className="col-span-4 sm:col-span-3">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-slate-300 rounded-full flex-shrink-0" />
                      <span className="font-medium text-slate-600 text-sm">{route.to}</span>
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 text-center">
                    <span className="inline-flex items-center gap-1 bg-slate-100 rounded-lg px-2.5 py-1 text-sm font-semibold text-slate-700">
                      {route.distance} km
                    </span>
                  </div>
                  <div className="hidden sm:block sm:col-span-2 text-right">
                    <span className="text-lg font-black text-slate-900">Rs {route.fare}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Table footer */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-400">
                  * Sedan (AC) fares. SUV fares are approx. 25-30% higher. Toll/parking extra.
                </p>
                <button
                  onClick={() => handleWhatsApp('route_table')}
                  className="flex items-center gap-2 bg-[#FACF2D] hover:bg-amber-400 text-slate-900 font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Get Exact Fare
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4 — TRIVENI vs OLA/UBER COMPARISON
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-slate-50 overflow-hidden">
        {/* Subtle background orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FACF2D]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-5 py-2 mb-5">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">Save More</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Triveni Cabs vs <span className="text-slate-400">Ola/Uber</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              See why thousands of {city.city} travellers choose Triveni Cabs for affordable, reliable rides.
            </p>
          </div>

          {/* Comparison layout */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Triveni - WINNER */}
            <div className="relative">
              {/* Winner badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="flex items-center gap-1.5 bg-emerald-500 text-white text-xs font-black uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg">
                  <Trophy className="w-3.5 h-3.5" />
                  Winner
                </div>
              </div>

              <div className="bg-white rounded-3xl border-2 border-[#FACF2D] shadow-2xl p-8 pt-10 relative overflow-hidden">
                {/* Gold corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FACF2D]/10 rounded-bl-[60px]" />

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#FACF2D] rounded-xl flex items-center justify-center shadow-md">
                    <Car className="w-6 h-6 text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Triveni Cabs</h3>
                    <p className="text-xs text-slate-400 font-medium">Trusted since 2015</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-black text-slate-900">{city.comparisonWithOla.triveni}</span>
                  <span className="text-lg text-slate-400">(Sedan)</span>
                </div>

                <div className="space-y-3">
                  {[
                    'No surge pricing ever',
                    'Flat rate - rain or shine',
                    'No booking/convenience fees',
                    'Free cancellation',
                    'Direct driver contact',
                    'AC in all vehicles',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleCall('comparison_triveni')}
                  className="w-full mt-8 flex items-center justify-center gap-2 bg-[#FACF2D] hover:bg-amber-400 text-slate-900 font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Book Triveni Now
                </button>
              </div>
            </div>

            {/* Ola/Uber */}
            <div className="relative">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-8 opacity-80">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                    <Car className="w-6 h-6 text-slate-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-500">Ola / Uber</h3>
                    <p className="text-xs text-slate-400 font-medium">Ride-hailing apps</p>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-slate-400">{city.comparisonWithOla.ola}</span>
                  <span className="text-lg text-slate-300">(Sedan)</span>
                </div>

                <div className="space-y-3">
                  {[
                    'Surge pricing during peak hours',
                    'Rates change with demand',
                    'Booking + convenience fees',
                    'Cancellation charges apply',
                    'No direct driver contact',
                    'AC not guaranteed',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-400 text-xs font-bold">x</span>
                      </div>
                      <span className="text-sm text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full mt-8 flex items-center justify-center gap-2 bg-slate-100 text-slate-400 font-medium py-3.5 rounded-xl text-sm">
                  Higher fares, less certainty
                </div>
              </div>
            </div>
          </div>

          {/* Savings callout */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-emerald-200 shadow-xl p-6 sm:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Percent className="w-6 h-6 text-emerald-500" />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">Your Savings with Triveni</h3>
              </div>
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="text-5xl sm:text-6xl font-black text-emerald-600">{city.comparisonWithOla.savings}</span>
                <span className="text-xl text-slate-400 font-medium">cheaper</span>
              </div>
              <p className="text-sm text-slate-500">
                On every ride compared to Ola/Uber. No surge, no hidden fees, no surprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5 — SURCHARGES & POLICIES
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/25 rounded-full px-5 py-2 mb-5">
              <Shield className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Full Transparency</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Surcharges &amp; <span className="gold-gradient-text">Policies</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              We believe in honest pricing. Here are all applicable surcharges so there are zero surprises.
            </p>
          </div>

          {/* Surcharge cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Night surcharge */}
            <div className="group bg-white rounded-2xl border border-slate-200 p-7 shadow-lg hover:shadow-xl hover:border-[#FACF2D]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors">
                <Clock className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Night Surcharge</h3>
              <p className="text-2xl font-black text-slate-900 mb-2">{city.surcharges.night}</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Applicable for late-night rides. Standard rates apply during daytime hours (6 AM - 11 PM).
              </p>
            </div>

            {/* Holiday surcharge */}
            <div className="group bg-white rounded-2xl border border-slate-200 p-7 shadow-lg hover:shadow-xl hover:border-[#FACF2D]/50 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                <Calendar className="w-7 h-7 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Holiday Surcharge</h3>
              <p className="text-2xl font-black text-slate-900 mb-2">{city.surcharges.holiday}</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                Minor surcharge on national holidays and peak festival seasons. Communicated at booking time.
              </p>
            </div>

            {/* Airport pickup */}
            <div className="group bg-white rounded-2xl border border-slate-200 p-7 shadow-lg hover:shadow-xl hover:border-[#FACF2D]/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-sky-100 transition-colors">
                <Navigation className="w-7 h-7 text-sky-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Airport Pickup</h3>
              <p className="text-2xl font-black text-slate-900 mb-2">{city.surcharges.airport}</p>
              <p className="text-sm text-slate-500 leading-relaxed">
                One-time airport parking and entry fee. Includes meet-and-greet at arrival terminal.
              </p>
            </div>
          </div>

          {/* What is included */}
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">What&apos;s Included in Your Fare</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Fuel, label: 'Fuel charges', desc: 'Included' },
                  { icon: ShieldCheck, label: 'Driver allowance', desc: 'Included' },
                  { icon: Headphones, label: '24/7 support', desc: 'Free' },
                  { icon: Award, label: 'AC throughout', desc: 'Guaranteed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.label}</p>
                      <p className="text-xs text-emerald-600 font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { label: 'Toll charges', value: 'At actual (if any)' },
                  { label: 'State tax', value: 'At actual (if applicable)' },
                  { label: 'Parking charges', value: 'At actual' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Tag className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.label}</p>
                      <p className="text-xs text-slate-500">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6 — FAQ ACCORDION (Light Theme)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 border border-[#FACF2D]/25 rounded-full px-5 py-2 mb-5">
              <Info className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Common Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              {city.city} Taxi Fare <span className="gold-gradient-text">FAQs</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Everything you need to know about taxi fares in {city.city}.
            </p>
          </div>

          {/* FAQ items */}
          <div className="space-y-4">
            {city.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-md hover:shadow-lg ${
                  openFaq === idx ? 'border-[#FACF2D] shadow-lg' : 'border-slate-200'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-label={openFaq === idx ? 'Collapse answer' : 'Expand answer'}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-yellow-500/50 rounded-2xl"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      openFaq === idx ? 'bg-[#FACF2D]' : 'bg-slate-100'
                    }`}>
                      <span className={`text-sm font-black transition-colors ${
                        openFaq === idx ? 'text-slate-900' : 'text-slate-400'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180 text-[#FACF2D]' : ''
                  }`} />
                </button>

                {/* Answer panel */}
                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pl-20">
                    <div className="h-px bg-slate-100 mb-4" />
                    <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Schema (JSON-LD) */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: city.faqs.map((faq) => ({
                  '@type': 'Question',
                  name: faq.question,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7 — WHY CHOOSE TRIVENI (Trust Signals)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
              Why <span className="gold-gradient-text">10,000+ Riders</span> Trust Us
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              The most trusted taxi service in {city.city} for local, outstation, and airport rides.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'No Surge Pricing', desc: 'Fixed rates 24/7. No dynamic pricing during rain, peak hours, or festivals.', stat: 'Always Fair' },
              { icon: Star, title: '4.9 Star Rating', desc: 'Rated by 10,000+ verified customers across Google and social media.', stat: '10K+ Reviews' },
              { icon: Clock, title: 'On-Time Guarantee', desc: 'GPS-tracked fleet ensures your cab arrives within the promised time.', stat: '98% On-Time' },
              { icon: ShieldCheck, title: 'Verified Drivers', desc: 'Background-verified, experienced drivers with clean driving records.', stat: '100% Verified' },
            ].map((item, i) => (
              <div key={i} className="group text-center bg-white rounded-2xl border border-slate-200 p-8 shadow-lg hover:shadow-xl hover:border-[#FACF2D]/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-16 h-16 mx-auto bg-[#FACF2D]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#FACF2D]/20 transition-colors">
                  <item.icon className="w-7 h-7 text-[#FACF2D]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{item.desc}</p>
                <span className="inline-block bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {item.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 8 — RELATED CITIES
         ═══════════════════════════════════════════════════════════════ */}
      {relatedCities && relatedCities.length > 0 && (
        <section className="relative py-16 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
                Taxi Fares in <span className="gold-gradient-text">Nearby Cities</span>
              </h2>
              <p className="text-slate-500">Compare taxi fares across popular destinations.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedCities.map((rc) => (
                <Link
                  key={rc.slug}
                  href={`/taxi-fare/${rc.slug}`}
                  className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-md hover:shadow-xl hover:border-[#FACF2D]/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#FACF2D]/10 rounded-xl flex items-center justify-center group-hover:bg-[#FACF2D]/20 transition-colors">
                      <MapPin className="w-5 h-5 text-[#FACF2D]" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#FACF2D] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FACF2D] transition-colors">
                    {rc.city}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    From Rs {rc.baseFare.sedan}/km
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 9 — FINAL CTA (Gold Gradient Background)
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D] via-amber-400 to-yellow-400" />

        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15,23,42,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/10 rounded-full px-5 py-2 mb-8">
            <Zap className="w-4 h-4 text-slate-900" />
            <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Book in 30 Seconds</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-5 leading-tight">
            Need a Taxi in<br />{city.city}?
          </h2>
          <p className="text-lg sm:text-xl text-slate-800/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Skip the surge pricing. Book a Triveni cab at flat Rs {city.baseFare.sedan}/km
            and save up to {city.comparisonWithOla.savings} on every ride.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={() => handleCall('final_cta')}
              className="group flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91 7668570551</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleWhatsApp('final_cta')}
              className="group flex items-center gap-3 bg-white/90 hover:bg-white text-slate-900 font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg backdrop-blur-sm"
            >
              <svg className="w-5 h-5 text-green-600" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-800/60">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>No Surge</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>24/7 Available</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free Cancellation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
