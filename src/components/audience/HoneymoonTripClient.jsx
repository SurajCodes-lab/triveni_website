'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Heart, Camera, Hotel, Coffee, Route, Compass, HelpCircle, Gift, Sparkles } from '@/components/ui/icons';

export default function HoneymoonTripClient({ data }) {
  const phoneNumber = '7668570551';
  const whatsappLink = 'https://wa.me/917668570551';

  // Hub page rendering
  if (data.isHub) {
    return <HoneymoonHubPage data={data} phoneNumber={phoneNumber} whatsappLink={whatsappLink} />;
  }

  return (
    <main className="min-h-screen bg-rose-950 text-white">
      <style jsx>{`
        @keyframes heart-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
          50% { transform: translateY(-35px) rotate(-3deg); opacity: 0.8; }
          75% { transform: translateY(-15px) rotate(4deg); opacity: 0.9; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rose-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(244, 63, 94, 0.1), 0 0 30px rgba(244, 63, 94, 0.05); }
          50% { box-shadow: 0 0 25px rgba(244, 63, 94, 0.25), 0 0 50px rgba(244, 63, 94, 0.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes petal-fall {
          0% { transform: translateY(-10%) rotate(0deg) translateX(0px); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateY(50vh) rotate(180deg) translateX(30px); opacity: 0.4; }
          90% { opacity: 0.2; }
          100% { transform: translateY(100vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }
        @keyframes pulse-cta {
          0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(244, 63, 94, 0); }
        }
        @keyframes icon-glow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(251, 113, 133, 0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(251, 113, 133, 0.6)); }
        }
        .shimmer-rose {
          background: linear-gradient(
            120deg,
            #fda4af 0%,
            #fecdd3 25%,
            #fff1f2 50%,
            #fecdd3 75%,
            #fda4af 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(244, 63, 94, 0.15), 0 8px 16px rgba(244, 63, 94, 0.1);
        }
        .gradient-bg-animated {
          background: linear-gradient(135deg, #1a0a0e, #2d0a18, #1a0a0e, #2d0a18, #1a0a0e);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
      `}</style>

      {/* Hero Section - Romantic Rose/Pink */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center gradient-bg-animated">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900/80 to-pink-950/90" />

        {/* Glowing orbs with pulse */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-rose-500/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-pink-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Grid/dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        {/* Floating decorative hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '8%', top: '15%', delay: '0s', size: 'w-5 h-5', duration: '6s' },
            { left: '85%', top: '25%', delay: '1.5s', size: 'w-4 h-4', duration: '7s' },
            { left: '20%', top: '70%', delay: '3s', size: 'w-6 h-6', duration: '5s' },
            { left: '75%', top: '60%', delay: '0.8s', size: 'w-3 h-3', duration: '8s' },
            { left: '50%', top: '20%', delay: '2.2s', size: 'w-4 h-4', duration: '6.5s' },
            { left: '92%', top: '75%', delay: '4s', size: 'w-5 h-5', duration: '5.5s' },
          ].map((heart, i) => (
            <div
              key={i}
              className={`absolute ${heart.size} text-rose-400/30`}
              style={{
                left: heart.left,
                top: heart.top,
                animation: `heart-float ${heart.duration} ease-in-out infinite`,
                animationDelay: heart.delay,
              }}
            >
              <Heart className="w-full h-full fill-current" />
            </div>
          ))}
        </div>

        {/* Falling petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={`petal-${i}`}
              className="absolute w-2 h-2 rounded-full bg-rose-400/20"
              style={{
                left: `${15 + i * 15}%`,
                animation: `petal-fall ${8 + i * 2}s linear infinite`,
                animationDelay: `${i * 1.5}s`,
              }}
            />
          ))}
        </div>

        {/* Sparkle accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] left-[30%] w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-rose-200 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-[20%] right-[40%] w-1 h-1 bg-pink-200 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-rose-300/80 mb-8">
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/honeymoon-trip-by-car" className="hover:text-white transition-colors duration-300">Honeymoon Trips</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-rose-200">{data.destination}</span>
          </nav>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-rose-500/15 text-rose-200 px-5 py-2 rounded-full text-sm font-medium border border-rose-500/25 backdrop-blur-sm">
              <Heart className="w-4 h-4" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
              Honeymoon Trip
            </div>
            <div className="flex items-center gap-1 bg-pink-500/15 text-pink-200 px-5 py-2 rounded-full text-sm font-medium border border-pink-500/25 backdrop-blur-sm">
              {[...Array(data.romanceRating)].map((_, i) => (
                <Heart key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="shimmer-rose">{data.destination}</span>
            <br />
            <span className="text-white/90">Honeymoon by Car</span>
          </h1>
          <p className="text-lg sm:text-xl text-rose-200/90 mb-10 max-w-3xl leading-relaxed">
            {data.tagline}. Private {data.vehicle.type.toLowerCase()} ride with decorated car option and scenic stops.
          </p>

          {/* Animated Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Route, label: 'Distance', value: data.distance, color: 'from-rose-500/20 to-pink-500/20', borderColor: 'border-rose-500/20' },
              { icon: Calendar, label: 'Duration', value: data.duration, color: 'from-pink-500/20 to-rose-500/20', borderColor: 'border-pink-500/20' },
              { icon: Heart, label: 'Romance Rating', value: `${data.romanceRating}/5`, color: 'from-rose-500/20 to-red-500/20', borderColor: 'border-rose-500/20' },
              { icon: IndianRupee, label: 'Starting From', value: `Rs ${data.price.sedan.toLocaleString()}`, color: 'from-red-500/20 to-rose-500/20', borderColor: 'border-red-500/20' },
            ].map((item, i) => (
              <div
                key={i}
                className={`hover-lift bg-gradient-to-br ${item.color} backdrop-blur-2xl rounded-2xl border ${item.borderColor} p-5 cursor-default`}
                style={{ animation: 'rose-glow 4s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}
              >
                <item.icon className="w-5 h-5 text-rose-400 mb-2" style={{ animation: 'icon-glow 3s ease-in-out infinite' }} />
                <p className="text-xs text-rose-300/80 uppercase tracking-wider font-medium">{item.label}</p>
                <p className="font-bold text-white text-lg mt-0.5">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-rose-500/25"
              style={{ animation: 'pulse-cta 2.5s ease-in-out infinite' }}
            >
              <Phone className="w-5 h-5" />
              Call Now - {phoneNumber}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600/90 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-green-500/30 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/15">
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Decorated Car Upsell */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/50 to-rose-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hover-lift bg-gradient-to-r from-rose-500/10 via-pink-500/15 to-rose-500/10 backdrop-blur-2xl rounded-3xl border border-rose-500/20 p-8 sm:p-10" style={{ animation: 'rose-glow 5s ease-in-out infinite' }}>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-500/30 to-pink-500/30 rounded-3xl flex items-center justify-center flex-shrink-0 border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
                <Gift className="w-12 h-12 text-rose-300" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Decorated Car Package</h2>
                <p className="text-rose-200/90 mb-4 leading-relaxed">
                  Make your journey special! Fresh flower decoration, &quot;Just Married&quot; ribbon, welcome bouquet, chocolates, and congratulations card.
                </p>
                <p className="text-4xl font-bold shimmer-rose inline-block">
                  +Rs {data.decoratedCarPrice.toLocaleString()} <span className="text-base font-normal text-rose-400">only</span>
                </p>
              </div>
              <a href={`tel:${phoneNumber}`} className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 whitespace-nowrap shadow-lg shadow-rose-500/20 hover:shadow-rose-500/30">
                Add to Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle & Pricing */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <Car className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Private Ride</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Sedan */}
            <div className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-rose-500/25 p-8 hover:bg-white/[0.08] hover:border-rose-500/40 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 relative overflow-hidden" style={{ animation: 'rose-glow 5s ease-in-out infinite' }}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-rose-500 via-pink-500 to-rose-500 rounded-r" />
              <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-rose-500/20">
                <Heart className="w-3.5 h-3.5 fill-current" /> Popular for Couples
              </span>
              <h3 className="text-xl font-bold text-white mt-4 mb-1">{data.vehicle.name}</h3>
              <p className="text-rose-300/80 text-sm mb-5">Private & intimate for two</p>
              <ul className="space-y-3 mb-8">
                {data.vehicle.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-rose-200/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-rose-500/15 pt-5">
                <p className="text-3xl font-bold shimmer-rose inline-block">Rs {data.price.sedan.toLocaleString()}</p>
                <p className="text-rose-300/70 text-sm mt-1">Round trip, all inclusive</p>
              </div>
            </div>
            {/* SUV */}
            {data.vehicle.suvOption && (
              <div className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-8 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500/50 via-rose-500/50 to-pink-500/50 rounded-r" />
                <span className="inline-flex items-center gap-1.5 bg-white/10 text-rose-200 px-4 py-1.5 rounded-full text-sm font-semibold border border-white/10">
                  <Sparkles className="w-3.5 h-3.5" /> Extra Comfort
                </span>
                <h3 className="text-xl font-bold text-white mt-4 mb-1">{data.vehicle.suvOption.name}</h3>
                <p className="text-rose-300/80 text-sm mb-5">Spacious & premium ride</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-rose-200/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    7-seater spacious SUV
                  </li>
                  <li className="flex items-center gap-3 text-rose-200/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    Extra luggage capacity
                  </li>
                  <li className="flex items-center gap-3 text-rose-200/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    Premium comfort on hills
                  </li>
                  <li className="flex items-center gap-3 text-rose-200/90 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    Captain seats for relaxation
                  </li>
                </ul>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-3xl font-bold text-white">Rs {data.vehicle.suvOption.price.toLocaleString()}</p>
                  <p className="text-rose-300/70 text-sm mt-1">Round trip, all inclusive</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Couple Activities */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/30 to-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(244, 63, 94, 0.06) 0%, transparent 70%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <Heart className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Romantic Activities for Couples</h2>
          </div>
          <p className="text-rose-300/80 mb-10 ml-16">Experiences that bring you closer together</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.coupleActivities.map((activity, i) => (
              <div key={i} className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 group">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-rose-500/30 group-hover:to-pink-500/30 transition-all duration-500 border border-rose-500/10 group-hover:border-rose-500/25">
                  <Heart className="w-6 h-6 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{activity.name}</h3>
                <p className="text-sm text-rose-200/80 leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Romantic Spots */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <MapPin className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Romantic Spots to Visit</h2>
          </div>
          <p className="text-rose-300/80 mb-10 ml-16">Hidden gems and scenic viewpoints for couples</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {data.romanticSpots.map((spot, i) => (
              <div key={i} className="hover-lift flex gap-5 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-6 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 group">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center flex-shrink-0 border border-rose-500/10 group-hover:border-rose-500/25 transition-all duration-300">
                  <Sparkles className="w-7 h-7 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1.5">{spot.name}</h3>
                  <p className="text-sm text-rose-200/80 leading-relaxed">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Day-wise Itinerary */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/30 to-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <Calendar className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Romantic Itinerary</h2>
          </div>
          <p className="text-rose-300/80 mb-10 ml-16">Designed for romance at every turn</p>
          <div className="space-y-5">
            {data.itinerary.map((day, i) => (
              <div key={i} className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 relative overflow-hidden">
                {/* Gradient accent border on left */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-400 via-pink-500 to-rose-600 rounded-r" />
                <div className="flex items-start gap-5 ml-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-rose-500/20">
                    <span className="text-xs font-semibold text-rose-100 uppercase tracking-wider">Day</span>
                    <span className="text-xl font-bold leading-none text-white">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{day.title}</h3>
                    <p className="text-rose-200/80 leading-relaxed">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photography Spots */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-rose-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <Camera className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Best Photography Spots for Couples</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {data.photographySpots.map((spot, i) => (
              <div key={i} className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-6 text-center hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 group">
                <div className="w-10 h-10 bg-rose-500/15 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-500/25 transition-colors duration-300 border border-rose-500/10">
                  <Camera className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <p className="text-sm text-rose-200/80 font-medium">{spot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Recommendations */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/30 to-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(236, 72, 153, 0.05) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <Hotel className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Recommended Romantic Stays</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {data.hotelRecommendations.map((hotel, i) => (
              <div key={i} className="hover-lift flex items-center gap-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-6 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 group">
                <div className="w-10 h-10 bg-rose-500/15 rounded-xl flex items-center justify-center flex-shrink-0 border border-rose-500/10 group-hover:border-rose-500/25 transition-all duration-300">
                  <Hotel className="w-5 h-5 text-rose-400" />
                </div>
                <span className="text-rose-100 font-medium">{hotel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Season */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.08) 0%, transparent 50%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hover-lift bg-gradient-to-r from-rose-500/10 via-pink-500/15 to-rose-500/10 backdrop-blur-2xl rounded-3xl border border-rose-500/20 p-10 sm:p-14 text-center" style={{ animation: 'rose-glow 5s ease-in-out infinite' }}>
            <div className="w-16 h-16 bg-rose-500/15 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
              <Calendar className="w-8 h-8 text-rose-400" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Best Season for Your Honeymoon</h2>
            <p className="text-xl font-semibold shimmer-rose inline-block">{data.bestSeason}</p>
          </div>
        </div>
      </section>

      {/* Package Includes */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/30 to-rose-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <CheckCircle2 className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">What&apos;s Included</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {data.packageIncludes.map((item, i) => (
              <div key={i} className="hover-lift flex items-center gap-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500">
                <div className="w-8 h-8 bg-green-500/15 rounded-lg flex items-center justify-center flex-shrink-0 border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-rose-100 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <HelpCircle className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] overflow-hidden hover:border-rose-500/20 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.03] transition-colors duration-300">
                  <h3 className="font-semibold text-white pr-4 text-lg">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-rose-400 group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-rose-200/80 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20">
              <Compass className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore More Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(() => {
              const destSlug = data.destination.toLowerCase().replace(/\s+/g, '-');
              const links = [
                { href: `/sightseeing-tours/${destSlug}`, label: `${data.destination} Sightseeing Tour` },
                { href: `/delhi-airport-to-${destSlug}-taxi`, label: `Delhi Airport to ${data.destination} Taxi` },
                { href: `/${destSlug}-cab-service`, label: `${data.destination} Cab Service` },
                { href: `/${destSlug}-wedding-car-rental`, label: `${data.destination} Wedding Car` },
                { href: `/places-to-visit-near-${destSlug}`, label: `Places Near ${data.destination}` },
                { href: `/${destSlug}-travel-guide`, label: `${data.destination} Travel Guide` },
                { href: '/tour-packages', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ];
              return links.map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white/[0.04] backdrop-blur-2xl rounded-xl border border-white/[0.08] p-4 hover:bg-white/[0.08] hover:border-rose-500/30 transition-all duration-300 flex items-center gap-3">
                  <ArrowRight className="w-4 h-4 text-rose-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-rose-100/90 text-sm font-medium group-hover:text-white transition-colors">{link.label}</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-[15%] w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-pink-300 rounded-full blur-[100px]" />
        </div>

        {/* Floating hearts in CTA */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '10%', top: '20%', delay: '0s', size: 'w-4 h-4' },
            { left: '90%', top: '30%', delay: '1s', size: 'w-3 h-3' },
            { left: '25%', top: '75%', delay: '2s', size: 'w-5 h-5' },
            { left: '80%', top: '70%', delay: '3s', size: 'w-4 h-4' },
          ].map((heart, i) => (
            <div
              key={i}
              className={`absolute ${heart.size} text-white/20`}
              style={{
                left: heart.left,
                top: heart.top,
                animation: `heart-float 5s ease-in-out infinite`,
                animationDelay: heart.delay,
              }}
            >
              <Heart className="w-full h-full fill-current" />
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 backdrop-blur-sm">
            <Heart className="w-8 h-8 text-rose-100" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">
            Begin Your Love Story at {data.destination}
          </h2>
          <p className="text-lg text-rose-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Private sedan, decorated car option, scenic route. From Rs {data.price.sedan.toLocaleString()}.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-white text-rose-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              style={{ animation: 'pulse-cta 2.5s ease-in-out infinite' }}
            >
              <Phone className="w-6 h-6" />
              Call {phoneNumber}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl border border-green-500/30">
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-8 text-sm text-rose-200/70">
            Decorated car Rs 2,000 extra | Free cancellation up to 48 hours
          </p>
        </div>
      </section>
    </main>
  );
}

function HoneymoonHubPage({ data, phoneNumber, whatsappLink }) {
  return (
    <main className="min-h-screen bg-rose-950 text-white">
      <style jsx>{`
        @keyframes heart-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-20px) rotate(5deg); opacity: 1; }
          50% { transform: translateY(-35px) rotate(-3deg); opacity: 0.8; }
          75% { transform: translateY(-15px) rotate(4deg); opacity: 0.9; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes rose-glow {
          0%, 100% { box-shadow: 0 0 15px rgba(244, 63, 94, 0.1), 0 0 30px rgba(244, 63, 94, 0.05); }
          50% { box-shadow: 0 0 25px rgba(244, 63, 94, 0.25), 0 0 50px rgba(244, 63, 94, 0.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes petal-fall {
          0% { transform: translateY(-10%) rotate(0deg) translateX(0px); opacity: 0; }
          10% { opacity: 0.6; }
          50% { transform: translateY(50vh) rotate(180deg) translateX(30px); opacity: 0.4; }
          90% { opacity: 0.2; }
          100% { transform: translateY(100vh) rotate(360deg) translateX(-20px); opacity: 0; }
        }
        @keyframes pulse-cta {
          0%, 100% { box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(244, 63, 94, 0); }
        }
        @keyframes icon-glow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(251, 113, 133, 0.3)); }
          50% { filter: drop-shadow(0 0 12px rgba(251, 113, 133, 0.6)); }
        }
        @keyframes arrow-slide {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(6px); }
        }
        .shimmer-rose {
          background: linear-gradient(
            120deg,
            #fda4af 0%,
            #fecdd3 25%,
            #fff1f2 50%,
            #fecdd3 75%,
            #fda4af 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(244, 63, 94, 0.15), 0 8px 16px rgba(244, 63, 94, 0.1);
        }
        .gradient-bg-animated {
          background: linear-gradient(135deg, #1a0a0e, #2d0a18, #1a0a0e, #2d0a18, #1a0a0e);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        .hub-card-arrow {
          transition: transform 0.3s ease;
        }
        .hub-card:hover .hub-card-arrow {
          animation: arrow-slide 1s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center gradient-bg-animated">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900/80 to-pink-950/90" />

        {/* Glowing orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-[10%] w-72 h-72 bg-rose-500/15 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-pink-500/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Grid/dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        {/* Floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '5%', top: '10%', delay: '0s', size: 'w-5 h-5', duration: '6s' },
            { left: '88%', top: '20%', delay: '1.5s', size: 'w-4 h-4', duration: '7s' },
            { left: '15%', top: '65%', delay: '3s', size: 'w-6 h-6', duration: '5s' },
            { left: '70%', top: '55%', delay: '0.8s', size: 'w-3 h-3', duration: '8s' },
            { left: '45%', top: '15%', delay: '2.2s', size: 'w-4 h-4', duration: '6.5s' },
            { left: '93%', top: '70%', delay: '4s', size: 'w-5 h-5', duration: '5.5s' },
            { left: '55%', top: '80%', delay: '1.2s', size: 'w-3 h-3', duration: '7.5s' },
          ].map((heart, i) => (
            <div
              key={i}
              className={`absolute ${heart.size} text-rose-400/25`}
              style={{
                left: heart.left,
                top: heart.top,
                animation: `heart-float ${heart.duration} ease-in-out infinite`,
                animationDelay: heart.delay,
              }}
            >
              <Heart className="w-full h-full fill-current" />
            </div>
          ))}
        </div>

        {/* Falling petals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={`petal-${i}`}
              className="absolute w-2 h-2 rounded-full bg-rose-400/15"
              style={{
                left: `${10 + i * 12}%`,
                animation: `petal-fall ${7 + i * 1.5}s linear infinite`,
                animationDelay: `${i * 1.2}s`,
              }}
            />
          ))}
        </div>

        {/* Sparkle accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[30%] left-[30%] w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute top-[50%] right-[25%] w-1.5 h-1.5 bg-rose-200 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }} />
          <div className="absolute top-[20%] right-[40%] w-1 h-1 bg-pink-200 rounded-full animate-ping" style={{ animationDuration: '3.5s', animationDelay: '2s' }} />
          <div className="absolute bottom-[30%] left-[60%] w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <nav className="flex items-center gap-2 text-sm text-rose-300/80 mb-8">
            <Link href="/" className="hover:text-white transition-colors duration-300">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-rose-200">Honeymoon by Car</span>
          </nav>

          <div className="flex items-center gap-2 bg-rose-500/15 text-rose-200 px-5 py-2 rounded-full text-sm font-medium border border-rose-500/25 w-fit mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
            Honeymoon Road Trips
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="shimmer-rose">Honeymoon Trip by Car</span>
            <br />
            <span className="text-white/90">from Delhi</span>
          </h1>
          <p className="text-lg sm:text-xl text-rose-200/90 mb-10 max-w-3xl leading-relaxed">
            {data.heroDescription}
          </p>

          {/* Animated Stat Badges */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg">
            {[
              { label: 'Destinations', value: `${data.allDestinations?.length || 0}+`, icon: MapPin },
              { label: 'Starting From', value: 'Rs 4,500', icon: IndianRupee },
              { label: 'Romance', value: '5-Star', icon: Heart },
            ].map((stat, i) => (
              <div
                key={i}
                className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-rose-500/15 p-4 text-center"
                style={{ animation: 'rose-glow 4s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}
              >
                <stat.icon className="w-5 h-5 text-rose-400 mx-auto mb-1.5" />
                <p className="font-bold text-white text-lg">{stat.value}</p>
                <p className="text-xs text-rose-300/70 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-rose-500/25"
              style={{ animation: 'pulse-cta 2.5s ease-in-out infinite' }}
            >
              <Phone className="w-5 h-5" />
              Call Now - {phoneNumber}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600/90 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm border border-green-500/30 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/15">
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* All Destinations */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/30 to-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 30%, rgba(244, 63, 94, 0.06) 0%, transparent 70%)'
        }} />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <Compass className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Romantic Destinations</h2>
          </div>
          <p className="text-rose-300/80 mb-10 ml-16">Choose your perfect honeymoon road trip</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {data.allDestinations.map((dest, i) => (
              <Link key={i} href={`/${dest.slug}`} className="hub-card hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-rose-500/30 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 group block relative overflow-hidden">
                {/* Glow border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                  background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, transparent 50%, rgba(236, 72, 153, 0.1) 100%)'
                }} />
                <div className="relative">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(dest.romance)].map((_, j) => (
                      <Heart key={j} className="w-4 h-4 text-rose-400 fill-current" />
                    ))}
                    {[...Array(5 - dest.romance)].map((_, j) => (
                      <Heart key={j} className="w-4 h-4 text-rose-800/50" />
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-rose-300 transition-colors duration-300">{dest.name}</h3>
                  <p className="text-sm text-rose-300/80 mb-4 leading-relaxed">{dest.highlight}</p>
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-rose-400/80 font-medium">{dest.days} Days</span>
                    <span className="font-bold shimmer-rose text-base">From Rs {dest.price.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold group-hover:text-rose-300 transition-colors duration-300">
                    View Details <ArrowRight className="w-4 h-4 hub-card-arrow" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Decorated Car Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(244, 63, 94, 0.06) 0%, transparent 50%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hover-lift bg-gradient-to-r from-rose-500/10 via-pink-500/15 to-rose-500/10 backdrop-blur-2xl rounded-3xl border border-rose-500/20 p-10 sm:p-14 text-center" style={{ animation: 'rose-glow 5s ease-in-out infinite' }}>
            <div className="w-20 h-20 bg-gradient-to-br from-rose-500/25 to-pink-500/25 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-rose-500/20">
              <Gift className="w-10 h-10 text-rose-300" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Decorated Car for Every Honeymoon</h2>
            <p className="text-rose-200/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              Fresh flowers, &quot;Just Married&quot; ribbons, welcome bouquet, chocolates, and a congratulations card. Available for all destinations at just Rs 2,000 extra.
            </p>
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-rose-500/20"
              style={{ animation: 'pulse-cta 2.5s ease-in-out infinite' }}
            >
              <Phone className="w-5 h-5" />
              Book Decorated Car
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-950 via-rose-900/30 to-rose-950" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20" style={{ animation: 'rose-glow 3s ease-in-out infinite' }}>
              <HelpCircle className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] overflow-hidden hover:border-rose-500/20 transition-all duration-300">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-white/[0.03] transition-colors duration-300">
                  <h3 className="font-semibold text-white pr-4 text-lg">{faq.question}</h3>
                  <ChevronRight className="w-5 h-5 text-rose-400 group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                </summary>
                <div className="px-6 pb-6 text-rose-200/80 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950" />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(244, 63, 94, 0.05) 0%, transparent 60%)'
        }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-rose-500/15 rounded-2xl flex items-center justify-center border border-rose-500/20">
              <Compass className="w-6 h-6 text-rose-400" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Explore More Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/honeymoon-shimla-manali-by-car', label: 'Shimla Manali Honeymoon' },
              { href: '/honeymoon-kashmir-by-car', label: 'Kashmir Honeymoon by Car' },
              { href: '/honeymoon-manali-by-car', label: 'Manali Honeymoon Package' },
              { href: '/honeymoon-mussoorie-by-car', label: 'Mussoorie Honeymoon Trip' },
              { href: '/honeymoon-nainital-by-car', label: 'Nainital Honeymoon by Car' },
              { href: '/honeymoon-udaipur-by-car', label: 'Udaipur Honeymoon Package' },
              { href: '/tour-packages', label: 'Tour Packages from Delhi' },
              { href: '/outstation-cabs', label: 'Outstation Cab Service' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group bg-white/[0.04] backdrop-blur-2xl rounded-xl border border-white/[0.08] p-4 hover:bg-white/[0.08] hover:border-rose-500/30 transition-all duration-300 flex items-center gap-3">
                <ArrowRight className="w-4 h-4 text-rose-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                <span className="text-rose-100/90 text-sm font-medium group-hover:text-white transition-colors">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-pink-600 to-rose-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-[15%] w-64 h-64 bg-white rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-pink-300 rounded-full blur-[100px]" />
        </div>

        {/* Floating hearts in CTA */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { left: '8%', top: '15%', delay: '0s', size: 'w-4 h-4' },
            { left: '92%', top: '25%', delay: '1s', size: 'w-3 h-3' },
            { left: '20%', top: '80%', delay: '2s', size: 'w-5 h-5' },
            { left: '78%', top: '65%', delay: '3s', size: 'w-4 h-4' },
            { left: '50%', top: '10%', delay: '1.5s', size: 'w-3 h-3' },
          ].map((heart, i) => (
            <div
              key={i}
              className={`absolute ${heart.size} text-white/20`}
              style={{
                left: heart.left,
                top: heart.top,
                animation: `heart-float 5s ease-in-out infinite`,
                animationDelay: heart.delay,
              }}
            >
              <Heart className="w-full h-full fill-current" />
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 backdrop-blur-sm">
            <Heart className="w-8 h-8 text-rose-100" style={{ animation: 'icon-glow 2s ease-in-out infinite' }} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">Start Your Honeymoon Journey</h2>
          <p className="text-lg text-rose-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">Private car, decorated option, experienced drivers. Your love story begins on the road.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <a
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-white text-rose-700 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-rose-50 transition-all duration-300 shadow-2xl hover:shadow-white/20"
              style={{ animation: 'pulse-cta 2.5s ease-in-out infinite' }}
            >
              <Phone className="w-6 h-6" />
              Call {phoneNumber}
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl border border-green-500/30">
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
