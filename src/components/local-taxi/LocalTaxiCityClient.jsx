'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, ArrowRight, ChevronDown, Shield, Clock, Car, CheckCircle2,
  IndianRupee, MapPin, Star, Users, Zap, Navigation, Route, Award,
  ShieldCheck, Headphones, Calendar, Fuel
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function LocalTaxiCityClient({ city, relatedCities }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedPkg, setSelectedPkg] = useState(1); // Default to 8-hour (index 1)

  const lowestSedan = Math.min(...city.packages.map((p) => p.sedan));
  const whatsappMsg = `Hi, I want to book a local taxi in ${city.city}. Please share details.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;

  const handleCall = (location) => {
    trackPhoneCall(location, '7668570551');
    window.location.href = 'tel:+917668570551';
  };

  const handleWhatsApp = (location) => {
    trackWhatsAppClick(location, whatsappMsg, `local-taxi-${city.slug}`);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">

      {/* ═══════════════════════ CSS ANIMATIONS ═══════════════════════ */}
      <style jsx global>{`
        @keyframes shimmer-gold { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float-gentle { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes pulse-gold { 0%,100% { box-shadow: 0 0 20px rgba(250,207,45,0.25); } 50% { box-shadow: 0 0 40px rgba(250,207,45,0.5); } }
        @keyframes badge-bounce { 0%,100% { transform: scale(1) rotate(-2deg); } 50% { transform: scale(1.05) rotate(2deg); } }
        @keyframes gradient-flow { 0%,100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes border-glow { 0%,100% { border-color: rgba(250,207,45,0.2); } 50% { border-color: rgba(250,207,45,0.6); } }
        @keyframes slide-in { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-shimmer-gold { background-size: 200% 100%; animation: shimmer-gold 3s linear infinite; }
        .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
        .animate-pulse-gold { animation: pulse-gold 3s ease-in-out infinite; }
        .animate-badge-bounce { animation: badge-bounce 2s ease-in-out infinite; }
        .animate-gradient-flow { background-size: 200% 200%; animation: gradient-flow 6s ease infinite; }
        .animate-border-glow { animation: border-glow 2s ease-in-out infinite; }
        .animate-slide-in { animation: slide-in 0.4s ease-out forwards; }
      `}</style>

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — White/Slate gradient with Gold highlights
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-amber-50/50" />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(15,23,42,0.4) 1px, transparent 0)', backgroundSize: '36px 36px' }} />

        {/* Gold glowing orbs */}
        <div className="absolute top-1/4 left-[8%] w-72 h-72 bg-[#FACF2D]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-amber-400/8 rounded-full blur-[140px]" />
        <div className="absolute top-[60%] left-[50%] w-48 h-48 bg-yellow-300/10 rounded-full blur-[100px]" />

        {/* Floating price badge */}
        <div className="absolute top-28 right-[10%] hidden lg:block animate-float-gentle">
          <div className="relative">
            <div className="absolute -inset-6 bg-[#FACF2D]/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-[#FACF2D] via-amber-400 to-yellow-500 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl animate-pulse-gold">
              <div className="text-center">
                <div className="text-xs font-bold text-slate-900/70 uppercase tracking-wider">From</div>
                <div className="text-2xl font-black text-slate-900">Rs {lowestSedan.toLocaleString('en-IN')}</div>
                <div className="text-[10px] font-semibold text-slate-900/60 uppercase tracking-widest">4 Hrs</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom angled edge */}
        <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28">
          {/* Top badge */}
          <div className="inline-flex items-center gap-2 bg-slate-900/5 backdrop-blur-xl px-5 py-2.5 rounded-full mb-6 border border-slate-200">
            <Star className="w-4 h-4 text-[#FACF2D] fill-[#FACF2D]" />
            <span className="text-sm font-semibold text-slate-700">4.9★ Rated by 10,000+ Travellers</span>
          </div>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronDown className="w-3 h-3 -rotate-90" />
            <Link href="/local-taxi" className="hover:text-[#FACF2D] transition-colors">Local Taxi</Link>
            <ChevronDown className="w-3 h-3 -rotate-90" />
            <span className="text-slate-900 font-medium">{city.city}</span>
          </nav>

          {/* City name — massive */}
          <h1 className="mb-4">
            <span className="block text-lg sm:text-xl font-semibold text-[#FACF2D] uppercase tracking-widest mb-2">Local Taxi in</span>
            <span className="block text-5xl sm:text-7xl lg:text-9xl font-black text-slate-900 leading-[0.85] tracking-tight">
              {city.city}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-slate-600 max-w-2xl mt-6 mb-8 leading-relaxed font-light">
            {city.tagline}
          </p>

          {/* Key stats row */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-10">
            {[
              { icon: IndianRupee, label: `From Rs ${lowestSedan.toLocaleString('en-IN')}`, sub: '4 Hours' },
              { icon: Car, label: 'Sedan & SUV', sub: 'AC Vehicles' },
              { icon: Clock, label: '24/7 Available', sub: 'Any Time' },
              { icon: Shield, label: 'GPS Tracked', sub: 'Safe Rides' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-3 bg-slate-900/5 backdrop-blur-xl px-4 py-3 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-[#FACF2D]/20 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-[#FACF2D]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleCall('hero')}
              className="group flex items-center gap-3 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-yellow-500 text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-[#FACF2D]/20 hover:shadow-2xl hover:shadow-[#FACF2D]/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-5 h-5" />
              Call Now — 7668570551
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleWhatsApp('hero')}
              className="group flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]"
            >
              <svg className="w-5 h-5" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Enquiry
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          PACKAGES SECTION — 2x2 Glass Cards Grid
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 bg-white" id="packages">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 px-4 py-2 rounded-full mb-4 border border-[#FACF2D]/20">
              <IndianRupee className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-700">Transparent Pricing</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
              {city.city} Local Taxi <span className="text-[#FACF2D]">Packages</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Choose the perfect package for your needs. All prices include AC vehicle, fuel, and driver charges.
            </p>
          </div>

          {/* 2x2 Package Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {city.packages.map((pkg, index) => {
              const isPopular = index === 1; // 8-hour package
              const isSelected = selectedPkg === index;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedPkg(index)}
                  className={`relative group cursor-pointer rounded-3xl p-6 sm:p-8 transition-all duration-500 border-2 ${
                    isSelected
                      ? 'bg-slate-900/[0.04] backdrop-blur-xl border-[#FACF2D] shadow-xl shadow-[#FACF2D]/10'
                      : 'bg-slate-900/[0.02] backdrop-blur-xl border-slate-200 hover:border-[#FACF2D]/50 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <div className="animate-badge-bounce bg-gradient-to-r from-[#FACF2D] via-amber-400 to-yellow-500 text-slate-900 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Package name */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">Includes fuel, driver & AC</p>
                    </div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isSelected ? 'bg-[#FACF2D]/20' : 'bg-slate-100'} transition-colors`}>
                      <Clock className={`w-6 h-6 ${isSelected ? 'text-[#FACF2D]' : 'text-slate-400'}`} />
                    </div>
                  </div>

                  {/* Prices */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-white/80 rounded-2xl px-5 py-4 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Car className="w-5 h-5 text-slate-600" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">Sedan</div>
                          <div className="text-xs text-slate-400">Dzire / Etios</div>
                        </div>
                      </div>
                      <div className="text-2xl font-black text-slate-900">
                        Rs {pkg.sedan.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-white/80 rounded-2xl px-5 py-4 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-slate-600" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">SUV</div>
                          <div className="text-xs text-slate-400">Innova / Ertiga</div>
                        </div>
                      </div>
                      <div className="text-2xl font-black text-slate-900">
                        Rs {pkg.suv.toLocaleString('en-IN')}
                      </div>
                    </div>
                  </div>

                  {/* Book button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); handleWhatsApp(`package-${index}`); }}
                    className={`w-full mt-6 py-3.5 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSelected || isPopular
                        ? 'bg-gradient-to-r from-[#FACF2D] via-amber-400 to-yellow-500 text-slate-900 shadow-lg shadow-[#FACF2D]/20 hover:shadow-xl'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Book {pkg.name}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Extra charges note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Extra km: Rs 14/km (Sedan) | Rs 18/km (SUV) &nbsp;•&nbsp; Extra hours: Rs 200/hr (Sedan) | Rs 280/hr (SUV)
              &nbsp;•&nbsp; Toll & parking at actual
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          POPULAR LOCATIONS — Glass Chip Pills
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 border border-slate-200 shadow-sm">
              <MapPin className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-700">Top Destinations</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
              Popular Places in <span className="text-[#FACF2D]">{city.city}</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Our drivers know every corner. Book a local taxi to explore these famous attractions.
            </p>
          </div>

          {/* Location pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            {city.popularLocations.map((loc, i) => (
              <div
                key={i}
                className="group bg-white backdrop-blur-xl rounded-2xl px-5 sm:px-6 py-3 sm:py-4 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FACF2D]/50 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#FACF2D]/10 flex items-center justify-center group-hover:bg-[#FACF2D]/20 transition-colors">
                    <MapPin className="w-4 h-4 text-[#FACF2D]" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">{loc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Coverage areas */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[#FACF2D]" />
              Coverage Areas in {city.city}
            </h3>
            <div className="flex flex-wrap gap-3">
              {city.coverageAreas.map((area, i) => (
                <span key={i} className="bg-slate-50 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium border border-slate-100">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          WHY CHOOSE US — Glass Feature Cards
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 px-4 py-2 rounded-full mb-4 border border-[#FACF2D]/20">
              <Award className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-700">Why Triveni Cabs</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
              Why Book Local Taxi With <span className="text-[#FACF2D]">Us?</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              10,000+ happy customers in {city.city} trust us for reliable, affordable local cab service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: IndianRupee, title: 'No Hidden Charges', desc: 'Transparent pricing with all-inclusive packages. Toll and parking at actual — nothing else extra.', color: 'bg-emerald-50 text-emerald-600' },
              { icon: ShieldCheck, title: 'Verified Drivers', desc: 'All drivers are police-verified, experienced locals with commercial licenses and ID verification.', color: 'bg-blue-50 text-blue-600' },
              { icon: Car, title: 'Clean AC Vehicles', desc: 'Well-maintained, sanitized sedan and SUV fleet with AC, GPS tracking, and comfortable interiors.', color: 'bg-purple-50 text-purple-600' },
              { icon: Clock, title: '24/7 Availability', desc: `Book anytime — early morning temple visits, late-night pickups, or full-day ${city.city} sightseeing.`, color: 'bg-amber-50 text-amber-600' },
              { icon: Headphones, title: 'Dedicated Support', desc: 'Call or WhatsApp us anytime. Our support team ensures smooth rides from booking to drop-off.', color: 'bg-rose-50 text-rose-600' },
              { icon: Fuel, title: 'Fuel Included', desc: 'No separate fuel charges. Your package price covers the vehicle, driver, fuel, and AC usage.', color: 'bg-teal-50 text-teal-600' },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-slate-900/[0.02] backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-xl hover:border-[#FACF2D]/40 transition-all duration-500 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          LOCAL TIPS — Glass Info Card
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-16 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl relative overflow-hidden">
            {/* Decorative gold accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-yellow-500" />

            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FACF2D]/15 flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-[#FACF2D]" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">
                  Local Tip for {city.city} Travellers
                </h2>
                <p className="text-sm text-slate-500">From our experienced local drivers</p>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed pl-0 sm:pl-16">
              {city.localTips}
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS — Steps
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
              Book in <span className="text-[#FACF2D]">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-slate-500">Getting a local taxi in {city.city} has never been easier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Call or WhatsApp', desc: `Reach us at 7668570551 or WhatsApp. Share your ${city.city} pickup location, date, and preferred package.`, icon: Phone },
              { step: '02', title: 'Confirm Booking', desc: 'Get an instant quote. Confirm your booking — no advance payment needed. Pay after the trip.', icon: CheckCircle2 },
              { step: '03', title: 'Enjoy Your Ride', desc: `Your driver arrives 15 minutes early. Explore ${city.city} comfortably with AC, GPS-tracked vehicle.`, icon: Car },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                {/* Step number */}
                <div className="text-7xl font-black text-[#FACF2D]/15 absolute -top-4 left-1/2 -translate-x-1/2 select-none">
                  {item.step}
                </div>
                <div className="relative bg-slate-900/[0.02] backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl hover:border-[#FACF2D]/40 transition-all duration-500">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FACF2D] to-amber-400 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-[#FACF2D]/20 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ SECTION — Accordion with animated borders
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 bg-slate-50" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-4 border border-slate-200 shadow-sm">
              <Route className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-sm font-semibold text-slate-700">Got Questions?</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 mb-3">
              Frequently Asked <span className="text-[#FACF2D]">Questions</span>
            </h2>
            <p className="text-lg text-slate-500">
              Everything you need to know about local taxi service in {city.city}
            </p>
          </div>

          <div className="space-y-4">
            {city.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border-2 transition-all duration-500 overflow-hidden shadow-md ${
                    isOpen ? 'border-[#FACF2D] shadow-lg shadow-[#FACF2D]/5' : 'border-slate-200 hover:border-[#FACF2D]/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Collapse answer' : 'Expand answer'}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none focus:ring-2 focus:ring-yellow-500/50 rounded-2xl"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">{faq.question}</span>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-[#FACF2D] rotate-180' : 'bg-slate-100'
                    }`}>
                      <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-slate-900' : 'text-slate-500'}`} />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="w-12 h-0.5 bg-[#FACF2D]/30 rounded-full mb-3" />
                      <p className="text-slate-600 leading-relaxed faq-answer" data-snippet-type="faq">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          RELATED CITIES — Linked cards
         ═══════════════════════════════════════════════════════════════ */}
      {relatedCities.length > 0 && (
        <section className="relative py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-3">
                Local Taxi in <span className="text-[#FACF2D]">Nearby Cities</span>
              </h2>
              <p className="text-lg text-slate-500">Explore our local taxi services in other cities</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedCities.map((rc, i) => {
                const rcLowest = Math.min(...rc.packages.map((p) => p.sedan));
                return (
                  <Link
                    key={i}
                    href={`/local-taxi/${rc.slug}`}
                    className="group bg-slate-900/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-xl hover:border-[#FACF2D]/50 hover:-translate-y-1 transition-all duration-500"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-[#FACF2D]/15 flex items-center justify-center group-hover:bg-[#FACF2D]/25 transition-colors">
                        <MapPin className="w-5 h-5 text-[#FACF2D]" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FACF2D] transition-colors">{rc.city}</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-3 line-clamp-2">{rc.tagline}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">From Rs {rcLowest.toLocaleString('en-IN')}</span>
                      <ArrowRight className="w-4 h-4 text-[#FACF2D] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════
          FINAL CTA — Gold Gradient Section
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 px-4 sm:px-6 overflow-hidden">
        {/* Gold gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D] via-amber-400 to-yellow-500 animate-gradient-flow" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-[10%] w-48 h-48 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-[10%] w-64 h-64 bg-white/8 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-slate-900 mb-4">
            Ready to Explore {city.city}?
          </h2>
          <p className="text-xl text-slate-900/70 mb-10 max-w-2xl mx-auto font-medium">
            Book your local taxi now. No advance payment required. Pay after your trip. Available 24/7.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => handleCall('cta')}
              className="group flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02]"
            >
              <Phone className="w-6 h-6" />
              Call 7668570551
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleWhatsApp('cta')}
              className="group flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]"
            >
              <svg className="w-6 h-6 text-green-600" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
              WhatsApp Now
            </button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-900/70">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-900/60" />
              No Advance Payment
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-900/60" />
              Free Cancellation
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-900/60" />
              24/7 Customer Support
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-slate-900/60" />
              4.9★ Google Rated
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
