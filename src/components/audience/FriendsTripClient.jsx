'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, ChevronDown, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Mountain, Tent, Flame, Music, Compass, HelpCircle, Zap, UsersRound, Route } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function FriendsTripClient({ data }) {
  const phoneNumber = '7668570551';
  const whatsappLink = 'https://wa.me/917668570551';
  const [openFaq, setOpenFaq] = useState(null);

  // Bachelor page has a special "topDestinations" section
  const isBachelor = !!data.topDestinations;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(2deg); }
          66% { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes campfire-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.15), 0 0 40px rgba(245, 158, 11, 0.05); }
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.3), 0 0 60px rgba(245, 158, 11, 0.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes adventure-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.2); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 5px rgba(245, 158, 11, 0.1); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        @keyframes badge-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(8px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(8px) rotate(-360deg); }
        }
        .shimmer-gold {
          background: linear-gradient(
            90deg,
            #f59e0b 0%,
            #fbbf24 25%,
            #fef3c7 50%,
            #fbbf24 75%,
            #f59e0b 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -12px rgba(245, 158, 11, 0.25),
                      0 8px 20px -8px rgba(251, 191, 36, 0.15);
        }
        .campfire-card {
          animation: campfire-glow 3s ease-in-out infinite;
        }
        .adventure-card:hover {
          animation: adventure-pulse 2s ease-in-out infinite;
        }
        .gradient-bg {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        .dot-grid {
          background-image: radial-gradient(circle, rgba(251, 191, 36, 0.4) 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .flame-glow {
          position: relative;
        }
        .flame-glow::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), transparent, rgba(239, 68, 68, 0.1));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .flame-glow:hover::after {
          opacity: 1;
        }
      `}</style>

      {/* ============================================ */}
      {/* HERO SECTION - Full Viewport Adventure      */}
      {/* ============================================ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/80 to-orange-950/70 gradient-bg" />

        {/* Glowing orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-amber-500/20 rounded-full blur-[100px]" style={{ animation: 'glow-pulse 4s ease-in-out infinite' }} />
          <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-[100px]" style={{ animation: 'glow-pulse 5s ease-in-out infinite 1s' }} />
          <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-yellow-500/15 rounded-full blur-[100px]" style={{ animation: 'glow-pulse 6s ease-in-out infinite 2s' }} />
        </div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-grid opacity-[0.04]" />

        {/* Floating decorative icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
          <div className="absolute top-[15%] right-[12%] text-amber-500/10" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <Mountain className="w-20 h-20" />
          </div>
          <div className="absolute top-[60%] left-[8%] text-orange-500/10" style={{ animation: 'float 7s ease-in-out infinite 1s' }}>
            <Compass className="w-16 h-16" />
          </div>
          <div className="absolute bottom-[20%] right-[20%] text-yellow-500/10" style={{ animation: 'float 8s ease-in-out infinite 2s' }}>
            <Tent className="w-18 h-18" />
          </div>
          <div className="absolute top-[35%] right-[35%] text-amber-500/8" style={{ animation: 'float 9s ease-in-out infinite 0.5s' }}>
            <Flame className="w-14 h-14" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-amber-300/80 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-200">
              {isBachelor ? 'Bachelor Trip North India' : `Friends Trip to ${data.destination}`}
            </span>
          </nav>

          {/* Adventure badge with glow */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="relative group" style={{ animation: 'badge-bounce 3s ease-in-out infinite' }}>
              <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-md group-hover:blur-lg transition-all" />
              <div className="relative flex items-center gap-2 bg-amber-500/15 text-amber-200 px-5 py-2 rounded-full text-sm font-semibold border border-amber-500/30 backdrop-blur-sm">
                <UsersRound className="w-4 h-4" />
                {isBachelor ? 'Bachelor Trip' : 'Friends Trip'}
              </div>
            </div>
            <div className="relative group" style={{ animation: 'badge-bounce 3s ease-in-out infinite 0.3s' }}>
              <div className="absolute inset-0 bg-orange-500/15 rounded-full blur-md" />
              <div className="relative flex items-center gap-2 bg-orange-500/15 text-orange-200 px-5 py-2 rounded-full text-sm font-semibold border border-orange-500/30 backdrop-blur-sm">
                <Users className="w-4 h-4" />
                {data.groupSize}
              </div>
            </div>
          </div>

          {/* H1 with shimmer */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
            {isBachelor
              ? <><span className="shimmer-gold">Bachelor Trip</span><br /><span className="text-white/90">North India Adventures</span></>
              : <><span className="text-white/90">Friends Trip to</span><br /><span className="shimmer-gold">{data.destination}</span></>
            }
          </h1>

          <p className="text-lg sm:text-xl text-amber-100/80 mb-10 max-w-3xl leading-relaxed">
            {data.tagline}. {data.vehicle.type} Tempo Traveller with music system, reclining seats, and space for your entire gang.
          </p>

          {/* Animated stat badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {[
              { icon: Route, label: 'Distance', value: data.distance, color: 'amber' },
              { icon: Calendar, label: 'Duration', value: data.duration, color: 'orange' },
              { icon: Users, label: 'Group Size', value: data.groupSize, color: 'yellow' },
              { icon: IndianRupee, label: 'Per Person From', value: `Rs ${(data.price.perPerson17 || data.price.perPerson27 || 815).toLocaleString()}`, color: 'amber' },
            ].map((item, i) => (
              <div
                key={i}
                className="hover-lift group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center mb-3 group-hover:bg-amber-500/25 transition-colors">
                    <item.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-xs text-amber-300/70 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="font-bold text-white text-lg">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              onClick={() => trackPhoneCall('friends_trip')} href={`tel:${phoneNumber}`}
              className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-amber-600/25 hover:shadow-amber-500/40 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
              <Phone className="w-5 h-5 relative" />
              <span className="relative">Call Now - {phoneNumber}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-600/90 hover:bg-green-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 backdrop-blur-sm border border-green-500/20 hover:scale-[1.02]"
            >
              WhatsApp Group Booking
            </a>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BUDGET BREAKDOWN PER PERSON                  */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-amber-500/15 backdrop-blur-xl rounded-2xl border border-amber-500/30 flex items-center justify-center">
                <IndianRupee className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Budget Breakdown <span className="text-amber-400">Per Person</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(data.budgetBreakdown).filter(([key]) => key !== 'total').map(([key, value], i) => (
              <div
                key={i}
                className="hover-lift campfire-card group bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-6 hover:bg-white/[0.08] hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-500/15 rounded-lg flex items-center justify-center text-sm font-bold text-amber-400 border border-amber-500/20">
                    {i + 1}
                  </div>
                  <p className="text-amber-300/80 text-sm font-medium capitalize">{key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1')}</p>
                </div>
                <p className="font-bold text-white text-xl pl-11">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-gradient-to-r from-orange-500/15 via-amber-500/15 to-yellow-500/15 backdrop-blur-2xl rounded-2xl border border-orange-500/30 p-8 text-center">
              <p className="text-amber-300/80 text-sm font-medium uppercase tracking-wider mb-2">Total Estimated Budget Per Person</p>
              <p className="text-4xl sm:text-5xl font-black shimmer-gold">{data.budgetBreakdown.total}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TEMPO TRAVELLER FEATURES                     */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-amber-500/15 backdrop-blur-xl rounded-2xl border border-amber-500/30 flex items-center justify-center">
                <Car className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Your Ride - <span className="text-amber-400">{data.vehicle.name}</span>
            </h2>
          </div>

          <div className="hover-lift bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-amber-500/20 p-6 sm:p-10 hover:bg-white/[0.06] hover:border-amber-500/30 transition-all duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-white">{data.vehicle.type} {data.vehicle.name}</h3>
                </div>
                <p className="text-amber-300/80 mb-6 text-lg">{data.vehicle.seats} seats - Party on wheels!</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {data.vehicle.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/[0.04] rounded-xl border border-white/[0.06] p-3 hover:border-amber-500/20 transition-colors">
                      <div className="w-7 h-7 bg-amber-500/15 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-amber-400" />
                      </div>
                      <span className="text-amber-100/90 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:w-80 bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-amber-500/20 p-6">
                <h4 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-amber-400" />
                  Group Pricing
                </h4>
                <div className="space-y-4">
                  {data.price.tempo12 && (
                    <div className="group bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] hover:border-amber-500/20 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-200/80 font-medium">12-Seater</span>
                        <span className="font-bold text-white text-lg">Rs {data.price.tempo12.toLocaleString()}</span>
                      </div>
                      {data.price.perPerson12 && (
                        <p className="text-xs text-amber-400/80 mt-1">~Rs {data.price.perPerson12}/person</p>
                      )}
                    </div>
                  )}
                  {data.price.tempo17 && (
                    <div className="group relative bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/30">
                      <div className="absolute top-0 right-0 bg-amber-500/20 text-amber-300 text-[10px] font-bold uppercase px-2 py-0.5 rounded-bl-lg rounded-tr-xl tracking-wider">
                        Popular
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-amber-100 font-semibold">17-Seater</span>
                        <span className="font-bold text-white text-lg">Rs {data.price.tempo17.toLocaleString()}</span>
                      </div>
                      {data.price.perPerson17 && (
                        <p className="text-xs text-amber-300 mt-1">~Rs {data.price.perPerson17}/person</p>
                      )}
                    </div>
                  )}
                  {data.price.minibus && (
                    <div className="group bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] hover:border-amber-500/20 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-amber-200/80 font-medium">27-Seater Mini Bus</span>
                        <span className="font-bold text-white text-lg">Rs {data.price.minibus.toLocaleString()}</span>
                      </div>
                      {data.price.perPerson27 && (
                        <p className="text-xs text-amber-400/80 mt-1">~Rs {data.price.perPerson27}/person</p>
                      )}
                    </div>
                  )}
                </div>
                {data.price.note && (
                  <p className="text-xs text-amber-400/70 mt-4 flex items-start gap-1.5">
                    <Star className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    {data.price.note}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TOP DESTINATIONS (Bachelor only)             */}
      {/* ============================================ */}
      {isBachelor && data.topDestinations && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/40 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-lg" />
                <div className="relative w-14 h-14 bg-amber-500/15 backdrop-blur-xl rounded-2xl border border-amber-500/30 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-amber-400" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Top Bachelor Trip <span className="text-amber-400">Destinations</span>
              </h2>
            </div>
            <p className="text-amber-300/70 mb-10 pl-[4.5rem] text-lg">Pick your adventure</p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.topDestinations.map((dest, i) => (
                <div
                  key={i}
                  className="hover-lift adventure-card group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
                >
                  <div className="absolute top-4 right-4 w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400/60 font-bold text-sm border border-amber-500/15">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all border border-amber-500/15">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{dest.name}</h3>
                  <p className="text-sm text-amber-100/70 mb-4 leading-relaxed">{dest.description}</p>
                  <p className="font-semibold text-amber-400 text-lg">{dest.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* ADVENTURE ACTIVITIES                         */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-orange-950/30 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500/30 rounded-2xl blur-lg" style={{ animation: 'glow-pulse 3s ease-in-out infinite' }} />
              <div className="relative w-14 h-14 bg-orange-500/15 backdrop-blur-xl rounded-2xl border border-orange-500/30 flex items-center justify-center">
                <Zap className="w-7 h-7 text-orange-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Adventure <span className="text-orange-400">Activities</span>
            </h2>
          </div>
          <p className="text-amber-300/70 mb-10 pl-[4.5rem] text-lg">Adrenaline-pumping experiences for your squad</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.adventureActivities.map((activity, i) => (
              <div
                key={i}
                className="hover-lift adventure-card group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-orange-500/30 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300"
              >
                <div className="absolute top-4 right-4 w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-400/60 font-bold text-sm border border-orange-500/15">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-orange-500/30 group-hover:to-amber-500/30 transition-all border border-orange-500/15">
                  <Zap className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{activity.name}</h3>
                <p className="text-sm text-amber-100/70 mb-4 leading-relaxed">{activity.description}</p>
                <div className="flex items-center gap-2 text-orange-400 font-semibold">
                  <IndianRupee className="w-4 h-4" />
                  {activity.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* DAY-WISE ITINERARY                           */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-amber-500/15 backdrop-blur-xl rounded-2xl border border-amber-500/30 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              The <span className="text-amber-400">Game Plan</span>
            </h2>
          </div>
          <p className="text-amber-300/70 mb-10 pl-[4.5rem] text-lg">Day-by-day adventure itinerary</p>

          <div className="space-y-4">
            {data.itinerary.map((day, i) => (
              <div
                key={i}
                className="hover-lift group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-6 sm:p-7 hover:bg-white/[0.08] hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/40 to-orange-500/40 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex flex-col items-center justify-center shadow-lg shadow-amber-500/20">
                      <span className="text-[10px] font-bold text-amber-200 uppercase tracking-wider">Day</span>
                      <span className="text-2xl font-black leading-none text-white">{day.day}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-amber-100 transition-colors">{day.title}</h3>
                    <p className="text-amber-100/70 leading-relaxed">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CAMPING OPTIONS                              */}
      {/* ============================================ */}
      {data.campingOptions && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/40 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-500/30 rounded-2xl blur-lg" style={{ animation: 'glow-pulse 4s ease-in-out infinite' }} />
                <div className="relative w-14 h-14 bg-yellow-500/15 backdrop-blur-xl rounded-2xl border border-yellow-500/30 flex items-center justify-center">
                  <Tent className="w-7 h-7 text-yellow-400" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Stay <span className="text-yellow-400">Options</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {data.campingOptions.map((camp, i) => (
                <div
                  key={i}
                  className="hover-lift campfire-card group relative bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-7 hover:bg-white/[0.08] hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:from-yellow-500/30 group-hover:to-amber-500/30 transition-all border border-yellow-500/15">
                    <Tent className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{camp.name}</h3>
                  <p className="text-sm text-amber-100/70 mb-4 leading-relaxed">{camp.description}</p>
                  <p className="text-xl font-bold text-amber-400">{camp.priceRange}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* NIGHTLIFE / FUN OPTIONS                      */}
      {/* ============================================ */}
      {data.nightlifeOptions && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-500/30 rounded-2xl blur-lg" style={{ animation: 'glow-pulse 3s ease-in-out infinite' }} />
                <div className="relative w-14 h-14 bg-orange-500/15 backdrop-blur-xl rounded-2xl border border-orange-500/30 flex items-center justify-center">
                  <Flame className="w-7 h-7 text-orange-400" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {isBachelor ? <><span className="text-orange-400">Bachelor</span> Party Ideas</> : <>Nightlife & <span className="text-orange-400">Fun</span></>}
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {(isBachelor && data.bachelorGameIdeas ? data.bachelorGameIdeas : data.nightlifeOptions).map((item, i) => (
                <div
                  key={i}
                  className="hover-lift flame-glow group flex items-center gap-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.08] hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all">
                    <Music className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-amber-100/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            {isBachelor && data.nightlifeOptions && (
              <>
                <h3 className="text-2xl font-bold text-white mt-14 mb-6 flex items-center gap-3">
                  <Flame className="w-6 h-6 text-orange-400" />
                  Nightlife at Destinations
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {data.nightlifeOptions && data.nightlifeOptions.map((item, i) => (
                    <div
                      key={i}
                      className="hover-lift flame-glow flex items-center gap-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.08] hover:border-red-500/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-red-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Flame className="w-5 h-5 text-red-400" />
                      </div>
                      <span className="text-amber-100/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* PACKAGE INCLUDES                             */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-green-500/15 backdrop-blur-xl rounded-2xl border border-green-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-green-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              What&apos;s <span className="text-green-400">Included</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {data.packageIncludes.map((item, i) => (
              <div
                key={i}
                className="hover-lift group flex items-center gap-4 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-5 hover:bg-white/[0.08] hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-green-500/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/25 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-amber-100/90 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* SAFETY FOR GROUPS                            */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-emerald-500/15 backdrop-blur-xl rounded-2xl border border-emerald-500/30 flex items-center justify-center">
                <Shield className="w-7 h-7 text-emerald-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Group <span className="text-emerald-400">Safety</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.safetyFeatures.map((feature, i) => (
              <div
                key={i}
                className="hover-lift group flex items-start gap-4 bg-emerald-500/[0.06] backdrop-blur-2xl rounded-2xl border border-emerald-500/15 p-5 hover:bg-emerald-500/[0.1] hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-emerald-500/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/25 transition-colors">
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-emerald-100/90 font-medium mt-2">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION - Interactive Accordion           */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/40 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-amber-500/15 backdrop-blur-xl rounded-2xl border border-amber-500/30 flex items-center justify-center">
                <HelpCircle className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Frequently Asked <span className="text-amber-400">Questions</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-4xl">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className={`group bg-white/[0.04] backdrop-blur-2xl rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openFaq === i
                    ? 'border-amber-500/30 bg-white/[0.06] shadow-lg shadow-amber-500/5'
                    : 'border-white/[0.08] hover:border-amber-500/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'}
                  className="w-full flex items-center gap-4 p-6 text-left cursor-pointer hover:bg-white/[0.03] transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/50 rounded-2xl"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${
                    openFaq === i
                      ? 'bg-amber-500/25 text-amber-300 border border-amber-500/40'
                      : 'bg-amber-500/10 text-amber-400/70 border border-amber-500/15'
                  }`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-white flex-1 pr-2">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === i
                      ? 'max-h-[500px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="px-6 pb-6 pl-[5.5rem] text-amber-100/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CROSS-SERVICE LINKS                          */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="relative">
              <div className="absolute inset-0 bg-amber-500/30 rounded-2xl blur-lg" />
              <div className="relative w-14 h-14 bg-amber-500/15 backdrop-blur-xl rounded-2xl border border-amber-500/30 flex items-center justify-center">
                <Compass className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Explore More <span className="text-amber-400">Services</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(() => {
              const destSlug = data.destination ? data.destination.toLowerCase().replace(/\s+/g, '-') : '';
              const links = data.destination ? [
                { href: `/sightseeing/${destSlug}`, label: `${data.destination} Sightseeing Tour` },
                { href: `/delhi-airport-to-${destSlug}-taxi`, label: `Delhi Airport to ${data.destination} Taxi` },
                { href: `/${destSlug}`, label: `${data.destination} Cab Service` },
                { href: `/places-to-visit-near-${destSlug}`, label: `Places Near ${data.destination}` },
                { href: `/${destSlug}-travel-guide`, label: `${data.destination} Travel Guide` },
                { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
                { href: '/tour-package', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ] : [
                { href: '/friends-trip-rishikesh', label: 'Friends Trip to Rishikesh' },
                { href: '/friends-trip-manali', label: 'Friends Trip to Manali' },
                { href: '/friends-trip-kasol', label: 'Friends Trip to Kasol' },
                { href: '/friends-trip-goa-from-delhi', label: 'Friends Trip to Goa' },
                { href: '/friends-trip-jaisalmer', label: 'Friends Trip to Jaisalmer' },
                { href: '/tempo-traveller', label: 'Tempo Traveller Hire' },
                { href: '/tour-package', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ];
              return links.map((link, i) => (
                <Link key={i} href={link.href} className="hover-lift group flex items-center gap-3 bg-white/[0.04] backdrop-blur-2xl rounded-2xl border border-white/[0.08] p-4 hover:bg-white/[0.08] hover:border-amber-500/30 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-amber-400 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  <span className="text-amber-100/90 text-sm font-medium group-hover:text-white transition-colors">{link.label}</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA - Animated Gradient                */}
      {/* ============================================ */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-orange-600 to-yellow-600 gradient-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] text-white/10" style={{ animation: 'float 6s ease-in-out infinite' }}>
            <Mountain className="w-16 h-16" />
          </div>
          <div className="absolute bottom-[15%] right-[8%] text-white/10" style={{ animation: 'float 7s ease-in-out infinite 1s' }}>
            <Compass className="w-12 h-12" />
          </div>
          <div className="absolute top-[50%] right-[30%] text-white/8" style={{ animation: 'float 8s ease-in-out infinite 2s' }}>
            <Tent className="w-10 h-10" />
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" style={{ animation: 'glow-pulse 3s ease-in-out infinite' }} />
            <div className="relative w-20 h-20 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-white/20">
              <UsersRound className="w-10 h-10 text-white" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
            {isBachelor
              ? 'Book the Ultimate Bachelor Trip!'
              : <>Book Your Squad Trip to <span className="underline decoration-white/30 underline-offset-4">{data.destination}</span>!</>
            }
          </h2>
          <p className="text-lg sm:text-xl text-yellow-100/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Tempo Traveller with music system, AC, reclining seats. From Rs {(data.price.perPerson17 || data.price.perPerson27 || 815).toLocaleString()} per person.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              onClick={() => trackPhoneCall('friends_trip')} href={`tel:${phoneNumber}`}
              className="group relative inline-flex items-center gap-3 bg-white text-amber-700 px-10 py-5 rounded-2xl font-black text-lg hover:bg-amber-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:scale-[1.03]"
            >
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <Phone className="w-6 h-6 relative" />
              <span className="relative">Call {phoneNumber}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-2xl hover:shadow-green-500/30 hover:scale-[1.03] border border-green-500/30"
            >
              WhatsApp Group Booking
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-yellow-100/80">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Users className="w-4 h-4" />
              Group discounts available
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Shield className="w-4 h-4" />
              Free cancellation up to 48 hours
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <Music className="w-4 h-4" />
              Music system included
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
