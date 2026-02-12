'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2,
  ArrowRight, IndianRupee, ChevronDown, Route, Navigation, TrainFront,
  Headphones, BadgeCheck, Sparkles, MapPinned, Milestone, Luggage, Zap
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { getNearbyStations } from '@/utilis/railwayStationData';

// Train-ticket style perforated divider component
const TicketPerforation = ({ color = 'slate-950' }) => (
  <div className="flex items-center -mx-5 my-4">
    <div className={`w-4 h-8 bg-${color} rounded-r-full -ml-1`} />
    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-1" />
    <div className={`w-4 h-8 bg-${color} rounded-l-full -mr-1`} />
  </div>
);

export default function RailwayStationClient({ station, slug }) {
  const [openFaq, setOpenFaq] = useState(null);
  const nearbyStations = getNearbyStations(slug);
  const lowestFare = station.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Inline CSS for custom animations */}
      <style jsx global>{`
        @keyframes shimmer-slide {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-glow-gold {
          0%, 100% { box-shadow: 0 0 20px rgba(245, 158, 11, 0.3), 0 0 60px rgba(245, 158, 11, 0.1); }
          50% { box-shadow: 0 0 40px rgba(245, 158, 11, 0.5), 0 0 80px rgba(245, 158, 11, 0.2); }
        }
        @keyframes train-move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(calc(100vw + 100%)); }
        }
        @keyframes track-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 60px 0; }
        }
        .shimmer-text {
          background-size: 200% 100%;
          animation: shimmer-slide 3s linear infinite;
        }
        .float-element {
          animation: float-gentle 4s ease-in-out infinite;
        }
        .float-element-delay {
          animation: float-gentle 5s ease-in-out 1s infinite;
        }
        .glow-card {
          animation: pulse-glow-gold 3s ease-in-out infinite;
        }
        .track-animate {
          animation: track-scroll 2s linear infinite;
        }
        .ticket-card {
          clip-path: polygon(
            0% 10px, 10px 10px, 10px 0%, calc(100% - 10px) 0%, calc(100% - 10px) 10px, 100% 10px,
            100% calc(100% - 10px), calc(100% - 10px) calc(100% - 10px), calc(100% - 10px) 100%,
            10px 100%, 10px calc(100% - 10px), 0% calc(100% - 10px)
          );
        }
      `}</style>

      {/* === HERO SECTION - Dramatic Railway Terminal === */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950" />

        {/* Animated railway tracks at bottom */}
        <div className="absolute bottom-[8%] left-0 right-0 h-[2px] bg-yellow-500/20" />
        <div className="absolute bottom-[8%] left-0 right-0 h-[2px] opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(245,158,11,0.4) 20px, rgba(245,158,11,0.4) 40px)',
            backgroundSize: '60px 2px',
            animation: 'track-scroll 2s linear infinite'
          }}
        />
        <div className="absolute bottom-[9.5%] left-0 right-0 h-[2px] bg-yellow-500/20" />

        {/* Grid Pattern with depth */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23f59e0b\' stroke-width=\'0.5\'%3E%3Crect width=\'40\' height=\'40\'/%3E%3C/g%3E%3C/svg%3E")' }} />

        {/* Animated Floating Orbs */}
        <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] float-element" />
        <div className="absolute top-[50%] right-[10%] w-[350px] h-[350px] bg-yellow-500/8 rounded-full blur-[100px] float-element-delay" />
        <div className="absolute bottom-[20%] left-[40%] w-[300px] h-[300px] bg-orange-400/6 rounded-full blur-[130px] float-element" />

        {/* Horizontal animated light streaks */}
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent" />
        <div className="absolute top-[70%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400/15 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              {/* Animated badge */}
              <div className="inline-flex items-center gap-2.5 bg-yellow-500/10 backdrop-blur-2xl border border-yellow-400/20 rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <TrainFront className="w-4 h-4 text-yellow-300" />
                <span className="text-yellow-200 text-sm font-mono tracking-widest">{station.stationCode} STATION</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                {station.city}
                <span className="block text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text shimmer-text"
                  style={{ backgroundImage: 'linear-gradient(90deg, #fbbf24, #fde68a, #f59e0b, #fbbf24)', backgroundSize: '200% 100%' }}>
                  Station Taxi
                </span>
              </h1>

              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                {station.description.split('.').slice(0, 2).join('.')}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 text-white px-8 py-4.5 rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-600/25 hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
                </Link>
                <Link href={`https://wa.me/917668570551?text=I need a taxi from ${station.name}`} className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] backdrop-blur-2xl text-white px-8 py-4.5 rounded-2xl font-bold border border-yellow-400/20 hover:bg-white/10 hover:border-yellow-400/40 transition-all duration-300">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
                </Link>
              </div>
            </div>

            {/* Right: Train Ticket Style Info Card (2 cols) */}
            <div className="lg:col-span-2">
              <div className="relative glow-card bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-yellow-500/10">
                {/* Ticket Header with perforated top */}
                <div className="bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TrainFront className="w-5 h-5 text-white" />
                    <span className="text-white font-black text-sm font-mono tracking-widest">PLATFORM TICKET</span>
                  </div>
                  <span className="text-white/60 font-mono text-xs">TRIVENI CABS</span>
                </div>

                {/* Ticket Body */}
                <div className="p-6">
                  {/* Station Name Large */}
                  <div className="text-center mb-2">
                    <div className="text-yellow-300 font-mono text-xs tracking-widest mb-1">STATION</div>
                    <div className="text-white font-black text-xl leading-tight">{station.name}</div>
                  </div>

                  {/* Perforation */}
                  <div className="flex items-center my-4 -mx-6">
                    <div className="w-5 h-10 bg-slate-950 rounded-r-full" />
                    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-2" />
                    <div className="w-5 h-10 bg-slate-950 rounded-l-full" />
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">CODE</div>
                      <div className="text-yellow-300 font-black text-2xl font-mono">{station.stationCode}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">PLATFORMS</div>
                      <div className="text-yellow-300 font-black text-2xl font-mono">{station.platforms}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-yellow-500/10 rounded-xl py-3 border border-yellow-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">FARE FROM</div>
                      <div className="text-emerald-400 font-black text-xl">{'\u20B9'}{lowestFare}</div>
                    </div>
                    <div className="text-center bg-yellow-500/10 rounded-xl py-3 border border-yellow-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">STATUS</div>
                      <div className="text-emerald-400 font-black text-sm flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        24/7 LIVE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Barcode-style decoration */}
                <div className="px-6 pb-4 flex justify-center gap-[2px]">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-full" style={{ width: `${Math.random() > 0.5 ? 2 : 3}px`, height: `${12 + Math.random() * 10}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Cut Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80 L0 40 Q720 0 1440 40 L1440 80Z" fill="#020617" />
          </svg>
        </div>
      </section>

      {/* === TRUST BAR - Departure Board Style === */}
      <section className="py-10 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: TrainFront, title: "Meet at Platform", desc: "Driver waits at exit", color: "from-amber-500 to-yellow-500" },
            { icon: Shield, title: "Fixed Fares", desc: "Zero surge pricing", color: "from-emerald-500 to-teal-500" },
            { icon: Clock, title: "24/7 Available", desc: "Any train, any time", color: "from-amber-500 to-orange-500" },
            { icon: Star, title: "4.9 Rating", desc: "Trusted by thousands", color: "from-orange-500 to-pink-500" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-white text-sm">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === FARE TABLE - Ticket Window Display === */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-amber-500/20 tracking-widest uppercase">
              <IndianRupee className="w-3.5 h-3.5" /> Fare Chart
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Taxi Fares from <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">{station.city}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Transparent pricing. Tolls included. No hidden charges.</p>
          </div>

          {/* Fare Display - Digital Board Style */}
          <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-yellow-500/5">
            {/* Board Header */}
            <div className="bg-gradient-to-r from-amber-600/30 via-yellow-600/30 to-orange-600/30 backdrop-blur-xl px-6 md:px-8 py-5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-white font-black text-sm font-mono tracking-widest">FARE DISPLAY</span>
              </div>
              <span className="text-slate-400 font-mono text-xs hidden md:block">{station.stationCode} &bull; {station.platforms} PLATFORMS</span>
            </div>

            {/* Table Header */}
            <div className="hidden md:grid grid-cols-5 gap-4 px-8 py-4 bg-white/[0.02]">
              <div className="text-yellow-300 text-xs font-black font-mono tracking-widest">DESTINATION</div>
              <div className="text-yellow-300 text-xs font-black font-mono tracking-widest text-center">DISTANCE</div>
              <div className="text-yellow-300 text-xs font-black font-mono tracking-widest text-center">SEDAN FARE</div>
              <div className="text-yellow-300 text-xs font-black font-mono tracking-widest text-center">SUV FARE</div>
              <div className="text-yellow-300 text-xs font-black font-mono tracking-widest text-center">EST. TIME</div>
            </div>

            {/* Rows */}
            {station.destinations.map((dest, i) => (
              <div key={i} className={`grid md:grid-cols-5 gap-2 md:gap-4 px-6 md:px-8 py-4 md:py-5 items-center border-b border-white/[0.03] last:border-0 hover:bg-yellow-500/[0.04] transition-all duration-300 group`}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <span className="text-white font-bold text-sm md:text-base">{dest.name}</span>
                </div>
                <div className="text-slate-400 text-sm text-center hidden md:block font-mono">{dest.distance}</div>
                <div className="text-center hidden md:block">
                  <span className="text-yellow-300 font-black text-base font-mono">{'\u20B9'}{dest.sedanFare.toLocaleString()}</span>
                </div>
                <div className="text-center hidden md:block">
                  <span className="text-amber-300 font-black text-base font-mono">{'\u20B9'}{dest.suvFare.toLocaleString()}</span>
                </div>
                <div className="text-slate-400 text-sm text-center hidden md:block font-mono">{dest.time}</div>
                {/* Mobile layout */}
                <div className="flex md:hidden items-center justify-between mt-1 pl-11">
                  <span className="text-slate-500 text-xs">{dest.distance} &bull; {dest.time}</span>
                  <div className="flex gap-3">
                    <span className="text-yellow-300 font-bold text-sm">{'\u20B9'}{dest.sedanFare.toLocaleString()}</span>
                    <span className="text-amber-300 font-bold text-sm">{'\u20B9'}{dest.suvFare.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-5 text-center font-mono">* Fares include AC vehicle, driver, and fuel. Tolls and parking included.</p>
        </div>
      </section>

      {/* === WHY BOOK - Feature Cards with Glow === */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-yellow-500/20 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Premium Service
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Why Book <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">With Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: MapPinned, title: "Meet at Platform Exit", desc: "Our driver waits right at the station exit with your name board. No searching, no confusion.", accent: "indigo" },
              { icon: Clock, title: "24/7 Available", desc: "Whether your train arrives at 2 AM or noon, our taxi is ready and waiting for you.", accent: "violet" },
              { icon: Shield, title: "No Surge Pricing", desc: "Fixed fares agreed before booking. No meters, no multipliers, no hidden charges.", accent: "purple" },
              { icon: Navigation, title: "GPS Tracked Rides", desc: "All vehicles are GPS tracked. Share your live location with family for complete safety.", accent: "indigo" },
              { icon: Car, title: "Clean AC Vehicles", desc: "Well-maintained, sanitized AC cars. Sedan, SUV, and Tempo Traveller options available.", accent: "violet" },
              { icon: BadgeCheck, title: "Verified Drivers", desc: "All drivers are background-verified, experienced, and know local routes perfectly.", accent: "purple" },
            ].map((item, i) => (
              <div key={i} className={`relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-7 hover:border-${item.accent}-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-${item.accent}-500/10 transition-all duration-500 group overflow-hidden`}>
                {/* Subtle corner glow */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${item.accent}-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-${item.accent}-500/10 transition-all duration-500`} />

                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-${item.accent}-600/20 to-${item.accent}-400/10 border border-${item.accent}-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 text-${item.accent}-400`} />
                </div>
                <h3 className="relative text-white font-bold text-xl mb-2">{item.title}</h3>
                <p className="relative text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === STATION INFO - Train-Ticket Split Cards === */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-amber-500/20 tracking-widest uppercase">
              <TrainFront className="w-3.5 h-3.5" /> Station Details
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              About <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">{station.name}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Platform Card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-amber-500/30 transition-all duration-500 group">
              <div className="bg-gradient-to-r from-amber-600/20 to-yellow-600/20 px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Milestone className="w-5 h-5 text-amber-400" />
                  <h3 className="text-white font-bold">Platform Details</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm mb-5">{station.platforms} platforms serving passengers daily</p>
                <div className="flex items-center justify-between bg-amber-500/10 rounded-2xl p-4 border border-amber-500/10">
                  <span className="text-slate-500 text-xs font-mono tracking-widest">STATION CODE</span>
                  <span className="text-amber-300 font-black text-3xl font-mono">{station.stationCode}</span>
                </div>
              </div>
            </div>

            {/* Cab Point Card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-yellow-500/30 transition-all duration-500 group">
              <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-white font-bold">Cab Pickup Point</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-400 text-sm leading-relaxed">{station.cabWaitingPoint}</p>
                <div className="mt-5 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Driver waiting at this location
                </div>
              </div>
            </div>

            {/* Landmarks Card */}
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-orange-500/30 transition-all duration-500 group">
              <div className="bg-gradient-to-r from-orange-600/20 to-pink-600/20 px-6 py-4 border-b border-white/5">
                <div className="flex items-center gap-3">
                  <Luggage className="w-5 h-5 text-orange-400" />
                  <h3 className="text-white font-bold">Nearby Landmarks</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {station.nearbyLandmarks.map((landmark, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-6 h-6 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-orange-400" />
                      </div>
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Major Trains - Scrolling Ticker Style */}
          <div className="mt-8 bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 md:p-8">
            <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-600/20 to-amber-600/20 border border-yellow-500/20 flex items-center justify-center">
                <TrainFront className="w-5 h-5 text-yellow-400" />
              </div>
              Major Trains at {station.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {station.majorTrains.map((train, i) => (
                <span key={i} className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 text-yellow-300 border border-yellow-500/15 rounded-xl px-5 py-2.5 text-sm font-semibold hover:border-yellow-500/40 hover:bg-yellow-500/15 transition-all duration-300 cursor-default">
                  {train}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === DESTINATIONS - Train Ticket Cards === */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-yellow-500/20 tracking-widest uppercase">
              <Route className="w-3.5 h-3.5" /> Popular Routes
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight">
              Popular Destinations from <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">{station.city}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Book a taxi to any destination. Fixed fares, AC vehicles, professional drivers.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {station.destinations.map((dest, i) => (
              <div key={i} className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-yellow-500/30 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 group">
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500" />

                <div className="p-5">
                  {/* Destination Header */}
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-slate-500 text-[10px] font-mono tracking-widest">{station.stationCode} &rarr;</div>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-white font-black text-lg mb-3">{dest.name}</h3>

                  {/* Route Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Route className="w-3.5 h-3.5 text-slate-600" /> {dest.distance}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <Clock className="w-3.5 h-3.5 text-slate-600" /> {dest.time}
                    </div>
                  </div>

                  {/* Ticket Perforation */}
                  <div className="flex items-center -mx-5 my-4">
                    <div className="w-4 h-7 bg-slate-950 rounded-r-full" />
                    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-1" />
                    <div className="w-4 h-7 bg-slate-950 rounded-l-full" />
                  </div>

                  {/* Fares */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest">SEDAN</div>
                      <div className="text-yellow-300 font-black text-lg">{'\u20B9'}{dest.sedanFare.toLocaleString()}</div>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest">SUV</div>
                      <div className="text-amber-300 font-black text-lg">{'\u20B9'}{dest.suvFare.toLocaleString()}</div>
                    </div>
                  </div>

                  <Link href="tel:+917668570551" className="block text-center py-3 rounded-xl bg-gradient-to-r from-amber-600/20 to-yellow-600/20 text-yellow-300 border border-yellow-500/20 text-sm font-bold hover:from-amber-600/30 hover:to-yellow-600/30 hover:border-yellow-500/40 transition-all duration-300">
                    <Phone className="w-3.5 h-3.5 inline mr-1.5" /> Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === HOW TO BOOK - Connected Timeline === */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-yellow-500/20 tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" /> Simple Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              How to <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">Book</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-amber-600/30 via-yellow-500/30 to-orange-600/30" />

            {[
              { step: "01", title: "Arrive", desc: `Your train pulls into ${station.city}. Collect your luggage and head to the station exit.`, icon: TrainFront },
              { step: "02", title: "Contact Us", desc: "Call 7668570551 or WhatsApp with your location and destination for instant booking.", icon: Phone },
              { step: "03", title: "Driver Arrives", desc: "Our verified driver reaches the station exit within 10 minutes with your name board.", icon: MapPinned },
              { step: "04", title: "Enjoy Ride", desc: "Sit back in a clean AC vehicle. Fixed fare, no hassle, comfortable and safe journey.", icon: Car },
            ].map((s, i) => (
              <div key={i} className="text-center relative group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-600 via-yellow-600 to-orange-600 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-yellow-600/20 group-hover:scale-110 group-hover:shadow-yellow-500/40 transition-all duration-300 relative z-10">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-yellow-400 font-mono text-xs tracking-widest mb-2">{s.step}</div>
                <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRAVEL TIPS - Card Grid === */}
      <section className="py-20 md:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-950/15 to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-orange-500/20 tracking-widest uppercase">
              Pro Tips
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Tips for <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">{station.city} Station</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {station.tips.map((tip, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 hover:border-orange-500/30 hover:bg-white/[0.05] transition-all duration-500 flex gap-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-600/20 to-yellow-600/20 border border-orange-500/20 flex items-center justify-center shrink-0">
                  <span className="text-orange-300 font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === FAQ - Expandable Accordion === */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-amber-500/20 tracking-widest uppercase">
              FAQs
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Common <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {station.faqs.map((faq, i) => (
              <div key={i} className={`bg-white/[0.03] backdrop-blur-2xl rounded-2xl border overflow-hidden transition-all duration-500 ${openFaq === i ? 'border-yellow-500/30 shadow-lg shadow-yellow-500/5' : 'border-white/10 hover:border-white/20'}`}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${openFaq === i ? 'bg-yellow-500/20' : 'bg-white/5'}`}>
                      <span className={`text-xs font-black font-mono transition-colors ${openFaq === i ? 'text-yellow-300' : 'text-slate-500'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4 ml-12">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CROSS LINKS - Station Network Map === */}
      <section className="py-20 md:py-32 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Nearby <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">Railway Stations</span>
            </h2>
            <p className="text-slate-400 text-lg">Explore taxi services at nearby railway stations</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {nearbyStations.map((s, i) => (
              <Link
                key={i}
                href={`/railway-station-taxi/${s.slug}`}
                className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-6 hover:border-yellow-500/30 hover:bg-white/[0.06] hover:shadow-xl hover:shadow-yellow-500/5 transition-all duration-500 group text-center"
              >
                <div className="text-yellow-400 font-mono text-xs tracking-widest mb-2">{s.stationCode}</div>
                <h3 className="text-white font-bold text-base group-hover:text-yellow-300 transition-colors mb-1">{s.city}</h3>
                <p className="text-slate-500 text-xs mb-3">Station Taxi</p>
                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-yellow-400 group-hover:translate-x-1 mx-auto transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Related Services */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Delhi Airport Taxi", href: "/delhi-airport-taxi" },
              { title: "Agra Sightseeing", href: "/agra-local-sightseeing" },
              { title: "Wedding Car Rental", href: "/wedding-car-rental" },
              { title: "Tour Packages", href: "/tour-packages" },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 p-4 hover:border-yellow-500/20 transition-all duration-300 text-center group">
                <h3 className="text-slate-300 text-sm font-semibold group-hover:text-yellow-300 transition-colors">{link.title}</h3>
                <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-yellow-400 mx-auto mt-1.5 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === FINAL CTA - Full Width Dramatic === */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-purple-700" />
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.5\'%3E%3Crect width=\'40\' height=\'40\'/%3E%3C/g%3E%3C/svg%3E")' }} />
        {/* Floating orbs */}
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] float-element" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px] float-element-delay" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 float-element">
            <TrainFront className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 tracking-tight">
            Arriving at {station.city}?
          </h2>
          <p className="text-2xl md:text-3xl text-amber-100 font-bold mb-3">Your taxi is waiting at the station.</p>
          <p className="text-amber-100/60 text-lg mb-10 max-w-xl mx-auto">Fixed fares from {'\u20B9'}{lowestFare}. 24/7 service. Meet at platform exit. Clean AC vehicles.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-white text-yellow-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-black/20 hover:bg-violet-50 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link href={`https://wa.me/917668570551?text=I need a taxi from ${station.name}`} className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-2xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
            </Link>
          </div>
        </div>
      </section>

      {/* === BREADCRUMB === */}
      <nav className="py-4 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/railway-station-taxi" className="hover:text-yellow-400 transition-colors">Railway Station Taxi</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-300 font-medium">{station.name}</span>
        </div>
      </nav>
    </div>
  );
}
