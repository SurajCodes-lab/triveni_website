'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  IndianRupee, Route, Zap, MapPin, Navigation, Star, Users,
  MapPinned, Calendar, Fuel, ChevronRight, Award
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import StickyPriceBar from '@/components/shared/StickyPriceBar';

export default function OutstationCityClient({ cityData, relatedCities }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [tripType, setTripType] = useState('oneWay');

  const lowestFare = Math.min(...cityData.popularRoutes.map((r) => r.fare));
  const whatsappBase = `https://wa.me/917668570551?text=`;

  const handleWhatsApp = (message) => {
    trackWhatsAppClick('outstation_city_page', message, cityData.city);
    window.open(`${whatsappBase}${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    trackPhoneCall('outstation_city_page', '7668570551');
    window.open('tel:+917668570551', '_self');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <StickyPriceBar
        title={`Outstation Cabs from ${cityData.city}`}
        price={`\u20B9${lowestFare.toLocaleString('en-IN')}`}
        badge="50+ Routes"
        whatsappMessage={`Hi, I want to book an outstation cab from ${cityData.city}`}
      />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-glow { 0%,100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); } 50% { box-shadow: 0 0 50px rgba(245,158,11,0.6); } }
        @keyframes arrow-slide { 0% { transform: translateX(-8px); opacity:0.4; } 50% { transform: translateX(8px); opacity:1; } 100% { transform: translateX(-8px); opacity:0.4; } }
        @keyframes gradient-x { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes orbit { 0% { transform: rotate(0deg) translateX(120px) rotate(0deg); } 100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); } }
        @keyframes glow-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 3s linear infinite; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .animate-arrow-slide { animation: arrow-slide 2s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 6s ease infinite; }
        .animate-orbit { animation: orbit 20s linear infinite; }
        .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — Dark with amber/gold gradient orbs
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/40 to-yellow-950/20 animate-gradient-x" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        {/* Animated amber/gold gradient orbs */}
        <div className="absolute top-[15%] left-[8%] w-72 h-72 bg-amber-600/15 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[8%] w-96 h-96 bg-yellow-500/10 rounded-full blur-[160px]" />
        <div className="absolute top-[55%] left-[35%] w-48 h-48 bg-orange-500/12 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute top-[30%] right-[25%] w-32 h-32 bg-amber-400/8 rounded-full blur-[70px] animate-orbit" />

        {/* Floating "50+ Routes" badge */}
        <div className="absolute top-28 right-[10%] hidden lg:block animate-float">
          <div className="relative">
            <div className="absolute -inset-8 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-amber-500 via-yellow-500 to-orange-600 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl animate-pulse-glow">
              <div className="text-center">
                <div className="text-3xl font-black text-white">50+</div>
                <div className="text-[10px] font-bold text-white/80 uppercase tracking-widest">Routes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated directional arrows */}
        <div className="absolute bottom-36 right-[6%] hidden lg:flex items-center gap-3 opacity-20">
          {[0, 1, 2].map((i) => (
            <ArrowRight key={i} className="w-8 h-8 text-amber-400 animate-arrow-slide" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
        </div>

        {/* Bottom edge clip */}
        <div className="absolute -bottom-1 left-0 right-0 h-32 bg-slate-950" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 60%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/15 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-amber-500/25">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-yellow-300 font-semibold text-sm tracking-wide">Outstation Cabs &mdash; One Way &amp; Round Trip</span>
          </div>

          {/* Small heading */}
          <p className="text-lg md:text-xl text-amber-300/70 font-medium mb-3 tracking-wide uppercase">
            Outstation Cabs from
          </p>

          {/* CITY NAME — text-9xl */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">{cityData.city}</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white/50 mb-8 max-w-2xl font-medium">
            {cityData.tagline} &mdash; Starting from <span className="text-amber-400 font-black">{'\u20B9'}{lowestFare.toLocaleString('en-IN')}</span>
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-4 mb-10">
            {[
              { icon: Route, label: `${cityData.popularRoutes.length}0+ Routes`, textClass: 'text-amber-400' },
              { icon: Car, label: 'Sedan \u20B911/km', textClass: 'text-yellow-400' },
              { icon: Star, label: '4.9\u2605 Rated', textClass: 'text-orange-400' },
              { icon: Shield, label: 'Verified Drivers', textClass: 'text-amber-400' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2.5 bg-white/5 backdrop-blur-xl px-4 py-2.5 rounded-xl border border-white/10">
                <stat.icon className={`w-4 h-4 ${stat.textClass}`} />
                <span className="text-white/70 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleWhatsApp(`Hi, I want to book an outstation cab from ${cityData.city}. Please share rates.`)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-400 hover:via-yellow-400 hover:to-orange-400 text-slate-950 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]"
            >
              Get Instant Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-amber-500/30 text-amber-300 font-bold px-8 py-4 rounded-2xl text-lg hover:bg-amber-500/10 hover:border-amber-400/50 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call 7668570551
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          POPULAR ROUTES — Glass card grid
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
        <div className="absolute top-0 left-[20%] w-64 h-64 bg-amber-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-[15%] w-72 h-72 bg-yellow-500/6 rounded-full blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-xl px-4 py-2 rounded-full mb-4 border border-amber-500/20">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-semibold">Popular Destinations</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-white">Top Routes from </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">{cityData.city}</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Book one-way or round trip cabs to {cityData.popularRoutes.length}0+ destinations. Transparent pricing, no hidden charges.
            </p>
          </div>

          {/* Routes grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cityData.popularRoutes.map((route, idx) => (
              <Link
                key={idx}
                href={`/distance/${route.slug}`}
                className="group relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-amber-500/30 hover:bg-white/[0.07] transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1"
              >
                {/* Route header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-400 font-bold text-sm">{cityData.city}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500/50" />
                      <span className="text-white font-bold text-sm">{route.destination}</span>
                    </div>
                    <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {route.destination}
                    </h3>
                  </div>
                  <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <MapPinned className="w-5 h-5 text-amber-400" />
                  </div>
                </div>

                {/* Route stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                    <div className="text-amber-400 font-bold text-sm">{route.distance} km</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider">Distance</div>
                  </div>
                  <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                    <div className="text-yellow-400 font-bold text-sm">{route.duration}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider">Duration</div>
                  </div>
                  <div className="bg-white/5 rounded-lg px-3 py-2 text-center">
                    <div className="text-orange-400 font-bold text-sm">{'\u20B9'}{route.fare.toLocaleString('en-IN')}</div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider">From</div>
                  </div>
                </div>

                {/* View Route CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-white/40 text-xs">Sedan starting fare</span>
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Route <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          VEHICLE OPTIONS — 3 big glass fare cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="absolute top-[20%] right-[10%] w-80 h-80 bg-amber-500/8 rounded-full blur-[150px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-xl px-4 py-2 rounded-full mb-4 border border-amber-500/20">
              <Car className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-semibold">Vehicle Fleet</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-white">Choose Your </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Ride</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Three vehicle categories to match your group size and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityData.vehicleOptions.map((vehicle, idx) => {
              const isPopular = idx === 0;
              return (
                <div
                  key={idx}
                  className={`relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-2 ${
                    isPopular
                      ? 'border-amber-500/40 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20'
                      : 'border-white/10 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10'
                  }`}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Vehicle icon */}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    isPopular ? 'bg-amber-500/20 border border-amber-500/30' : 'bg-white/5 border border-white/10'
                  }`}>
                    {idx === 0 && <Car className="w-8 h-8 text-amber-400" />}
                    {idx === 1 && <Car className="w-8 h-8 text-yellow-400" />}
                    {idx === 2 && <Users className="w-8 h-8 text-orange-400" />}
                  </div>

                  {/* Vehicle info */}
                  <h3 className="text-2xl font-black text-white mb-1">{vehicle.type}</h3>
                  <p className="text-white/40 text-sm mb-6">{vehicle.model}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">
                        {'\u20B9'}{vehicle.perKm}
                      </span>
                      <span className="text-white/40 text-sm">/km</span>
                    </div>
                    <p className="text-white/40 text-xs mt-1">Min {vehicle.minKm} km billing</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {[
                      `${vehicle.seats} Passengers`,
                      'AC Vehicle',
                      'GPS Tracked',
                      'Professional Driver',
                      vehicle.type === 'Tempo Traveller' ? 'Pushback Seats' : 'Spacious Boot',
                    ].map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400/60 flex-shrink-0" />
                        <span className="text-white/60 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Book button */}
                  <button
                    onClick={() => handleWhatsApp(`Hi, I want to book a ${vehicle.type} (${vehicle.model}) for outstation from ${cityData.city}. Please share rates.`)}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                      isPopular
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/20'
                        : 'bg-white/5 text-amber-300 border border-amber-500/20 hover:bg-amber-500/10 hover:border-amber-400/40'
                    }`}
                  >
                    Book {vehicle.type}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ONE-WAY vs ROUND TRIP — Glass comparison panel
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="absolute bottom-[10%] left-[15%] w-64 h-64 bg-amber-500/8 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-xl px-4 py-2 rounded-full mb-4 border border-amber-500/20">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-semibold">Trip Options</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-white">One-Way </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">vs</span>
              <span className="text-white"> Round Trip</span>
            </h2>
          </div>

          {/* Toggle */}
          <div className="flex justify-center mb-10">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-1.5 inline-flex">
              <button
                onClick={() => setTripType('oneWay')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  tripType === 'oneWay'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                One Way
              </button>
              <button
                onClick={() => setTripType('roundTrip')}
                className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  tripType === 'roundTrip'
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                Round Trip
              </button>
            </div>
          </div>

          {/* Comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* One-Way Card */}
            <div className={`bg-white/[0.04] backdrop-blur-xl rounded-2xl border p-8 transition-all duration-500 ${
              tripType === 'oneWay' ? 'border-amber-500/40 shadow-lg shadow-amber-500/10 scale-[1.02]' : 'border-white/10 opacity-70'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">One-Way Drop</h3>
                  <p className="text-white/40 text-sm">Pay single direction only</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Min Billing', value: '300 km' },
                  { label: 'Sedan Rate', value: '\u20B911/km' },
                  { label: 'SUV Rate', value: '\u20B915/km' },
                  { label: 'Toll/Tax', value: 'Extra (one side)' },
                  { label: 'Best For', value: 'Single direction travel' },
                  { label: 'Savings', value: 'Up to 50% vs round trip' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-amber-300 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Round Trip Card */}
            <div className={`bg-white/[0.04] backdrop-blur-xl rounded-2xl border p-8 transition-all duration-500 ${
              tripType === 'roundTrip' ? 'border-amber-500/40 shadow-lg shadow-amber-500/10 scale-[1.02]' : 'border-white/10 opacity-70'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                  <Route className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">Round Trip</h3>
                  <p className="text-white/40 text-sm">{cityData.roundTripDiscount}</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Min Billing', value: '250 km/day' },
                  { label: 'Sedan Rate', value: '\u20B911/km' },
                  { label: 'SUV Rate', value: '\u20B915/km' },
                  { label: 'Toll/Tax', value: 'Extra (both sides)' },
                  { label: 'Best For', value: 'Multi-day trips, tours' },
                  { label: 'Driver Allowance', value: '\u20B9300/night (post 10PM)' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/50 text-sm">{item.label}</span>
                    <span className="text-yellow-300 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BOOKING PROCESS — 3-step glass timeline
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/8 to-slate-950" />
        <div className="absolute top-[30%] left-[40%] w-56 h-56 bg-amber-500/6 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-xl px-4 py-2 rounded-full mb-4 border border-amber-500/20">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-semibold">Easy Booking</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-white">Book in </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">3 Simple Steps</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                icon: MapPin,
                title: 'Share Trip Details',
                desc: `Tell us your pickup location in ${cityData.city}, destination, travel date, and passengers via WhatsApp or call.`,
                bgClass: 'bg-amber-500/15', borderClass: 'border-amber-500/25', textClass: 'text-amber-400',
              },
              {
                step: '02',
                icon: IndianRupee,
                title: 'Get Instant Quote',
                desc: 'Receive transparent all-inclusive pricing with vehicle options. No hidden charges, no surge pricing.',
                bgClass: 'bg-yellow-500/15', borderClass: 'border-yellow-500/25', textClass: 'text-yellow-400',
              },
              {
                step: '03',
                icon: Car,
                title: 'Confirm & Travel',
                desc: 'Confirm your booking. Driver arrives 15 minutes early at your doorstep. 24/7 support throughout.',
                bgClass: 'bg-orange-500/15', borderClass: 'border-orange-500/25', textClass: 'text-orange-400',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                {/* Connector line (desktop) */}
                {idx < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(100%_-_16px)] w-[calc(100%_-_32px)] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-amber-500/30 to-amber-500/10" />
                  </div>
                )}

                <div className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-amber-500/30 hover:bg-white/[0.06] transition-all duration-500 text-center">
                  {/* Step number */}
                  <div className="relative inline-flex mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${item.bgClass} border ${item.borderClass} flex items-center justify-center`}>
                      <item.icon className={`w-8 h-8 ${item.textClass}`} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-black text-slate-950">{item.step}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE US — Trust signals
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
        <div className="absolute bottom-[15%] right-[20%] w-72 h-72 bg-amber-500/6 rounded-full blur-[130px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-white">Why </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">10,000+ Travelers</span>
              <span className="text-white"> Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked, licensed professionals', color: 'amber' },
              { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden charges, no surge pricing', color: 'yellow' },
              { icon: Clock, title: '24/7 Availability', desc: 'Book anytime, travel anytime', color: 'orange' },
              { icon: Star, title: '4.9\u2605 Rating', desc: '10,000+ happy customers', bgClass: 'bg-amber-500/15', borderClass: 'border-amber-500/25', textClass: 'text-amber-400' },
              { icon: Fuel, title: 'Clean AC Vehicles', desc: 'Sanitized, well-maintained fleet', bgClass: 'bg-yellow-500/15', borderClass: 'border-yellow-500/25', textClass: 'text-yellow-400' },
              { icon: Navigation, title: 'GPS Tracked', desc: 'Real-time trip monitoring', bgClass: 'bg-orange-500/15', borderClass: 'border-orange-500/25', textClass: 'text-orange-400' },
              { icon: Award, title: 'On-Time Guarantee', desc: 'Driver arrives 15 min early', bgClass: 'bg-amber-500/15', borderClass: 'border-amber-500/25', textClass: 'text-amber-400' },
              { icon: Users, title: 'All Group Sizes', desc: '4-seater to 26-seater available', bgClass: 'bg-yellow-500/15', borderClass: 'border-yellow-500/25', textClass: 'text-yellow-400' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-amber-500/25 hover:bg-white/[0.06] transition-all duration-500">
                <div className={`w-10 h-10 rounded-xl ${item.bgClass} border ${item.borderClass} flex items-center justify-center mb-3`}>
                  <item.icon className={`w-5 h-5 ${item.textClass}`} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FARE INCLUSIONS / EXCLUSIONS
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/5 to-slate-950" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            <span className="text-white">Fare </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Breakdown</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-emerald-500/20 p-7">
              <h3 className="text-lg font-black text-emerald-400 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Included in Fare
              </h3>
              <div className="space-y-3">
                {[
                  'Fuel charges',
                  'Driver charges',
                  'Vehicle usage (per km billing)',
                  'GST on service',
                  'Pickup from any location in ' + cityData.city,
                  'Drop to exact destination',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400/70 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exclusions */}
            <div className="bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-red-500/20 p-7">
              <h3 className="text-lg font-black text-red-400 mb-5 flex items-center gap-2">
                <IndianRupee className="w-5 h-5" /> Paid Separately
              </h3>
              <div className="space-y-3">
                {[
                  'Toll charges (paid at plazas)',
                  'State entry taxes',
                  'Parking fees',
                  'Driver night allowance (\u20B9300/night post 10 PM)',
                  'Extra km beyond package (at per-km rate)',
                  'Waiting charges (\u20B9150/hr after 45 min)',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <IndianRupee className="w-4 h-4 text-red-400/70 flex-shrink-0" />
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ SECTION — Accordion with glass style
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950" />
        <div className="absolute top-[20%] left-[10%] w-56 h-56 bg-amber-500/6 rounded-full blur-[110px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-xl px-4 py-2 rounded-full mb-4 border border-amber-500/20">
              <span className="text-amber-300 text-sm font-semibold">Got Questions?</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black">
              <span className="text-white">Frequently Asked </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {cityData.faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white/[0.04] backdrop-blur-xl rounded-2xl border transition-all duration-500 ${
                  openFaq === idx ? 'border-amber-500/30 shadow-lg shadow-amber-500/5' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl"
                  aria-expanded={openFaq === idx}
                  aria-label={openFaq === idx ? 'Collapse answer' : 'Expand answer'}
                >
                  <span className={`text-base font-bold pr-4 transition-colors ${openFaq === idx ? 'text-amber-300' : 'text-white/80'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openFaq === idx ? 'rotate-180 text-amber-400' : 'text-white/40'
                  }`} />
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${
                  openFaq === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6 pt-0">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mb-4 rounded-full" />
                    <p className="text-white/50 text-sm leading-relaxed faq-answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED CITIES
         ═══════════════════════════════════════════════════════════════ */}
      {relatedCities && relatedCities.length > 0 && (
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-950" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-center mb-10">
              <span className="text-white">Explore Outstation Cabs from </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400">Other Cities</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedCities.map((related, idx) => (
                <Link
                  key={idx}
                  href={`/outstation-cabs/${related.slug}`}
                  className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:border-amber-500/30 hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-1"
                >
                  <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors mb-1">
                    {related.city}
                  </h3>
                  <p className="text-white/40 text-xs mb-3">{related.popularRoutes.length}0+ routes</p>
                  <div className="flex items-center justify-center gap-1 text-amber-400 text-sm font-semibold">
                    View Routes <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — Amber neon glow
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/30 to-yellow-950/20" />

        {/* Neon glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[200px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/20 rounded-full blur-[100px] animate-pulse" />

        {/* Dot pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-500/15 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-amber-500/25">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-amber-300 font-semibold text-sm">Booking Open 24/7</span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
            <span className="text-white">Ready to Travel from </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400">{cityData.city}</span>
            <span className="text-white">?</span>
          </h2>

          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">
            Book your outstation cab now. Instant confirmation, transparent pricing, and verified drivers for a worry-free journey.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleWhatsApp(`Hi, I want to book an outstation cab from ${cityData.city}. Please share available routes and fares.`)}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 hover:from-amber-400 hover:via-yellow-400 hover:to-orange-400 text-slate-950 font-black px-10 py-5 rounded-2xl text-lg transition-all duration-300 shadow-xl shadow-amber-500/30 hover:shadow-amber-500/50 hover:scale-[1.03]"
            >
              Book on WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleCall}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-amber-500/30 text-amber-300 font-bold px-10 py-5 rounded-2xl text-lg hover:bg-amber-500/10 hover:border-amber-400/50 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </button>
          </div>

          <p className="text-white/40 text-sm mt-6">
            Or WhatsApp us at <span className="text-amber-400/60 font-semibold">+91 7668570551</span> for instant quotes
          </p>
        </div>
      </section>
    </div>
  );
}
