'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, MapPin, Calendar, Check, Star,
  Sparkles, Shield, ChevronRight, ChevronDown,
  Clock, Users, ArrowRight, Car, Heart,
  Navigation, Award, Zap, Timer, IndianRupee,
  CheckCircle2, Gauge, Target
} from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/data';
import { FAQSection } from '@/components/seo/FAQSection';

const RentalPackageClient = ({ rental }) => {
  const [showAllUses, setShowAllUses] = useState(false);

  const whatsappMessage = encodeURIComponent(`Hi! I want to book ${rental.title}. Please share availability and pricing details.`);
  const whatsappURL = `https://wa.me/91${phoneNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animations */}
      <style jsx>{`
        @keyframes clock-pulse { 0%,100% { box-shadow: 0 0 20px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.05); } 50% { box-shadow: 0 0 30px rgba(245,158,11,0.35), 0 0 80px rgba(245,158,11,0.1); } }
        @keyframes tick { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes slide-in { 0% { transform: translateX(-10px); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        .clock-card { animation: clock-pulse 4s ease-in-out infinite; }
        .shimmer-blue { background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b, #fbbf24); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
      `}</style>

      {/* HERO SECTION - Clean professional blue */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(245,158,11,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.1),transparent_50%)]" />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[15%] w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-amber-500/15 to-yellow-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-[10%] w-48 h-48 md:w-72 md:h-72 bg-gradient-to-br from-yellow-500/15 to-amber-500/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-24 md:pt-0">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li><Link href="/outstation-cabs" className="text-white/60 hover:text-white transition-colors">Cab Services</Link></li>
              <ChevronRight className="w-4 h-4 text-white/40" />
              <li><span className="text-amber-400 font-medium">{rental.duration} Rental</span></li>
            </ol>
          </nav>

          {/* Badge */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/25 rounded-full px-6 py-2.5 backdrop-blur-sm">
              <Timer className="w-5 h-5 text-amber-400" />
              <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">{rental.duration} Package</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="text-white drop-shadow-lg">{rental.duration}</span>
            <br />
            <span className="shimmer-blue">Cab Rental Package</span>
          </h1>

          {/* Duration + KM pill */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">{rental.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10">
              <Navigation className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">{rental.km}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl rounded-full px-5 py-2.5 border border-white/10">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span className="text-white/90 text-sm font-medium">{rental.cities.length} Cities</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-10">
            <p className="text-white/50 text-sm mb-2 uppercase tracking-wider">Starting from</p>
            <div className="inline-block clock-card bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-amber-500/20 px-8 py-5">
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent">{rental.fares.sedan}</span>
                <span className="text-white/50 text-lg text-left">Sedan<br/>{rental.km}</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300">
              <BsWhatsapp className="w-6 h-6" />
              <span>Book on WhatsApp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={`tel:+91${phoneNumber}`}
              className="group inline-flex items-center gap-3 bg-white/[0.07] backdrop-blur-xl hover:bg-white/15 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/15 hover:border-amber-500/30 hover:scale-105 transition-all duration-300">
              <Phone className="w-6 h-6 text-amber-400" />
              <span>Call {phoneNumber}</span>
            </a>
          </div>
        </div>
      </section>

      {/* VEHICLE OPTIONS - Timer/clock style cards */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Car className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Vehicle Options</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Choose Your <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Vehicle</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { type: "Sedan", desc: "Swift Dzire / Honda Amaze", capacity: "4 Passengers", fare: rental.fares.sedan, extra: rental.extraKm.sedan, extraHr: rental.extraHour.sedan },
              { type: "SUV", desc: "Ertiga / Innova", capacity: "6 Passengers", fare: rental.fares.suv, extra: rental.extraKm.suv, extraHr: rental.extraHour.suv, popular: true },
              { type: "Innova Crysta", desc: "Premium Comfort", capacity: "6 Passengers", fare: rental.fares.innova, extra: rental.extraKm.innova, extraHr: rental.extraHour.innova }
            ].map((v, i) => (
              <div key={i} className={`relative group ${v.popular ? 'md:-mt-4 md:mb-4' : ''}`}>
                {v.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg uppercase tracking-wider">Best Value</span>
                  </div>
                )}
                <div className={`bg-white rounded-3xl border-2 ${v.popular ? 'border-amber-500 shadow-2xl shadow-amber-500/10' : 'border-gray-100 shadow-xl'} p-8 text-center transition-all duration-500 hover:border-amber-400 hover:shadow-2xl hover:shadow-amber-500/15 hover:scale-105 relative overflow-hidden`}>
                  {/* Timer ring decoration */}
                  <div className="w-20 h-20 mx-auto mb-5 relative">
                    <div className={`absolute inset-0 rounded-full border-4 ${v.popular ? 'border-amber-500' : 'border-gray-200'} group-hover:border-amber-400 transition-colors`} />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center">
                      <Clock className="w-7 h-7 text-amber-600" />
                    </div>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl mb-1">{v.type}</h3>
                  <p className="text-gray-400 text-sm mb-1">{v.desc}</p>
                  <p className="text-gray-500 text-sm mb-5">{v.capacity}</p>
                  <div className="text-4xl font-black bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-2">{v.fare}</div>
                  <p className="text-gray-400 text-xs mb-1">Extra km: {v.extra}</p>
                  <p className="text-gray-400 text-xs mb-6">Extra hour: {v.extraHr}</p>
                  <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-500 hover:to-yellow-400 text-white px-6 py-3.5 rounded-xl font-bold text-sm w-full justify-center transition-all duration-300 shadow-lg shadow-amber-500/20">
                    <BsWhatsapp className="w-4 h-4" />
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGE DETAILS - What's included */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              What&#39;s <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Included</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl border border-green-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-bl-full" />
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Included in Package
              </h3>
              <ul className="space-y-4 relative">
                {rental.inclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Exclusions */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl border border-orange-200 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-bl-full" />
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 relative">
                <IndianRupee className="w-6 h-6 text-orange-600" />
                Extra Charges
              </h3>
              <ul className="space-y-4 relative">
                {rental.exclusions.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IndianRupee className="w-4 h-4 text-orange-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BEST FOR - Badge/certificate style */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Best Uses</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Perfect <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">For</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(showAllUses ? rental.bestFor : rental.bestFor.slice(0, 6)).map((use, i) => (
              <div key={i} className="group flex items-center gap-4 bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-5 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-gray-700 font-medium">{use}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE CITIES */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Available <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Cities</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {rental.cities.map((city, i) => (
              <div key={i} className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 hover:border-amber-400 rounded-xl px-6 py-3 text-amber-700 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10 hover:scale-105 cursor-default">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {city}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-amber-50 to-transparent rounded-bl-full" />
            <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 relative">
              About This <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Package</span>
            </h2>
            <div className="relative">
              {rental.description.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-lg mb-5 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TRIVENI */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Triveni Cabs</span>?
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Shield, title: "No Hidden Charges", desc: "Transparent pricing, no surprises" },
              { icon: Star, title: "4.8 Rating", desc: "2,800+ happy customers" },
              { icon: Clock, title: "Punctual Pickup", desc: "Driver arrives on time, every time" },
              { icon: Car, title: "Clean AC Cars", desc: "Well-maintained fleet" }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-5 text-center transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-gray-900 font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FAQSection faqs={rental.faqs} title={`${rental.duration} Cab Rental - FAQs`} variant="light" />
        </div>
      </section>

      {/* CROSS-SERVICE LINKS */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-6 py-2.5 mb-5">
              <Navigation className="w-4 h-4 text-amber-600" />
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Explore More</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              More <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/full-day-cab-rental', label: 'Full Day Cab Rental' },
              { href: '/half-day-cab-rental', label: 'Half Day Cab Rental' },
              { href: '/multi-day-cab-hire', label: 'Multi-Day Cab Hire' },
              { href: '/monthly-car-rental', label: 'Monthly Car Rental' },
              { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              { href: '/tour-packages', label: 'Tour Packages from Delhi' },
              { href: '/tempo-traveller-hire', label: 'Tempo Traveller Hire' },
              { href: '/airport-city-tour-combo', label: 'Airport + City Tour Combo' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center gap-3 bg-white rounded-2xl border border-gray-100 hover:border-amber-300 p-4 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300">
                <ArrowRight className="w-4 h-4 text-amber-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-gray-700 text-sm font-medium group-hover:text-gray-900 transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl p-8 md:p-14 text-center shadow-2xl shadow-amber-500/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Timer className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Book Your {rental.duration} Cab Now!
              </h2>
              <p className="text-white/90 mb-2 text-lg font-medium">
                {rental.km} included | From {rental.fares.sedan} Sedan
              </p>
              <p className="text-white/70 mb-10 text-lg">
                Dedicated vehicle and driver at your disposal. No surge pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={whatsappURL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  <BsWhatsapp className="w-6 h-6" />
                  <span>WhatsApp Us</span>
                </a>
                <a href={`tel:+91${phoneNumber}`}
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 hover:scale-105 transition-all duration-300">
                  <Phone className="w-6 h-6" />
                  <span>Call {phoneNumber}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalPackageClient;
