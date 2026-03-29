'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2,
  ArrowRight, ChevronDown, Route, Navigation, TrainFront, BadgeCheck, Sparkles,
  MapPinned, Zap, IndianRupee
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import SocialProofStrip from '@/components/shared/SocialProofStrip';

// Map string icon names to components (since icons can't be serialized from server)
const iconMap = { MapPinned, Shield, Clock, Navigation, BadgeCheck, Sparkles, MapPin, Star, Zap, Phone, Car, Users, CheckCircle2, Route };
function resolveIcon(icon) {
  if (typeof icon === 'string') return iconMap[icon] || MapPin;
  return icon || MapPin;
}

export default function StationTaxiClient({ data }) {
  const [openFaq, setOpenFaq] = useState(null);
  const {
    stationName, stationCode, city, platforms, description,
    destinations, localPackages, vehicles, benefits, faqs,
    slug, cabWaitingPoint, majorTrains
  } = data;

  const cheapest = destinations.reduce((m, d) => Math.min(m, d.fare), Infinity);
  const whatsappMsg = `Hi, I need a taxi from ${stationName} (${stationCode}). Please share rates.`;

  return (
    <article className="min-h-screen bg-slate-950" itemScope itemType="https://schema.org/TaxiService">
      <style jsx global>{`
        @keyframes shimmer-slide { 0%{background-position:-200% 0} 100%{background-position:200% 0} }
        @keyframes float-gentle { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-glow-cyan { 0%,100%{box-shadow:0 0 20px rgba(6,182,212,0.3),0 0 60px rgba(6,182,212,0.1)} 50%{box-shadow:0 0 40px rgba(6,182,212,0.5),0 0 80px rgba(6,182,212,0.2)} }
        @keyframes track-scroll { 0%{background-position:0 0} 100%{background-position:60px 0} }
        .shimmer-text-cyan { background-size:200% 100%; animation:shimmer-slide 3s linear infinite; }
        .float-el { animation:float-gentle 4s ease-in-out infinite; }
        .float-el-d { animation:float-gentle 5s ease-in-out 1s infinite; }
        .glow-cyan { animation:pulse-glow-cyan 3s ease-in-out infinite; }
      `}</style>

      <StickyPriceBar
        title={`${stationName} Taxi`}
        price={`\u20B9${cheapest}`}
        whatsappMessage={whatsappMsg}
      />

      {/* ====== HERO ====== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/40 to-blue-950/30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />

        {/* Animated tracks */}
        <div className="absolute bottom-[8%] left-0 right-0 h-[2px] bg-cyan-500/20" />
        <div className="absolute bottom-[8%] left-0 right-0 h-[2px] opacity-30" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(6,182,212,0.4) 20px, rgba(6,182,212,0.4) 40px)', backgroundSize: '60px 2px', animation: 'track-scroll 2s linear infinite' }} />
        <div className="absolute bottom-[9.5%] left-0 right-0 h-[2px] bg-cyan-500/20" />

        {/* Orbs */}
        <div className="absolute top-[15%] left-[15%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] float-el" />
        <div className="absolute top-[50%] right-[10%] w-[350px] h-[350px] bg-blue-500/8 rounded-full blur-[100px] float-el-d" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full py-20">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2.5 bg-cyan-500/10 backdrop-blur-2xl border border-cyan-400/20 rounded-full px-5 py-2.5 mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <TrainFront className="w-4 h-4 text-cyan-300" />
                <span className="text-cyan-200 text-sm font-mono tracking-widest">{stationCode} STATION</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[0.9] tracking-tight">
                {stationName}
                <span className="block text-transparent bg-clip-text shimmer-text-cyan" style={{ backgroundImage: 'linear-gradient(90deg, #22d3ee, #67e8f9, #06b6d4, #22d3ee)', backgroundSize: '200% 100%' }}>
                  Taxi Service
                </span>
              </h1>

              <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">{description}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-8 py-4.5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-600/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2.5 bg-white/[0.04] backdrop-blur-2xl text-white px-8 py-4.5 rounded-2xl font-bold border border-cyan-400/20 hover:bg-white/10 hover:border-cyan-400/40 transition-all duration-300">
                  <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
                </Link>
              </div>
            </div>

            {/* Station Ticket Card */}
            <div className="lg:col-span-2">
              <div className="relative glow-cyan bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-cyan-500/10">
                <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <TrainFront className="w-5 h-5 text-white" />
                    <span className="text-white font-black text-sm font-mono tracking-widest">STATION INFO</span>
                  </div>
                  <span className="text-white/60 font-mono text-xs">TRIVENI CABS</span>
                </div>
                <div className="p-6">
                  <div className="text-center mb-2">
                    <div className="text-cyan-300 font-mono text-xs tracking-widest mb-1">STATION</div>
                    <div className="text-white font-black text-xl leading-tight">{stationName}</div>
                  </div>
                  <div className="flex items-center my-4 -mx-6">
                    <div className="w-5 h-10 bg-slate-950 rounded-r-full" />
                    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-2" />
                    <div className="w-5 h-10 bg-slate-950 rounded-l-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">CODE</div>
                      <div className="text-cyan-300 font-black text-2xl font-mono">{stationCode}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">PLATFORMS</div>
                      <div className="text-cyan-300 font-black text-2xl font-mono">{platforms}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-cyan-500/10 rounded-xl py-3 border border-cyan-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">FARE FROM</div>
                      <div className="text-emerald-400 font-black text-xl">{'\u20B9'}{cheapest}</div>
                    </div>
                    <div className="text-center bg-cyan-500/10 rounded-xl py-3 border border-cyan-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">STATUS</div>
                      <div className="text-emerald-400 font-black text-sm flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />24/7 LIVE
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-6 pb-4 flex justify-center gap-[2px]">
                  {[...Array(40)].map((_, i) => (
                    <div key={i} className="bg-white/10 rounded-full" style={{ width: `${Math.random() > 0.5 ? 2 : 3}px`, height: `${12 + Math.random() * 10}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path d="M0 80 L0 40 Q720 0 1440 40 L1440 80Z" fill="#020617" />
          </svg>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* ====== TRUST BAR ====== */}
      <section className="py-10 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: TrainFront, title: 'Meet at Platform', desc: 'Driver waits at exit', color: 'from-cyan-500 to-blue-500' },
            { icon: Shield, title: 'Fixed Fares', desc: 'Zero surge pricing', color: 'from-emerald-500 to-teal-500' },
            { icon: Clock, title: '24/7 Available', desc: 'Any train, any time', color: 'from-blue-500 to-indigo-500' },
            { icon: Star, title: '4.9 Rating', desc: 'Trusted by thousands', color: 'from-indigo-500 to-violet-500' },
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

      {/* ====== POPULAR DESTINATIONS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.05),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase">
              <Route className="w-3.5 h-3.5" /> Popular Routes
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Taxi from <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">{stationName}</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Fixed fares. AC vehicles. Meet at platform exit with name board.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinations.map((dest, i) => (
              <div key={i} className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group">
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-slate-500 text-[10px] font-mono tracking-widest">{stationCode} &rarr;</div>
                    <ArrowRight className="w-4 h-4 text-slate-700 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <h3 className="text-white font-black text-lg mb-3">{dest.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-slate-400 text-sm"><Route className="w-3.5 h-3.5 text-slate-600" /> {dest.distance}</div>
                  </div>
                  <div className="flex items-center -mx-5 my-4">
                    <div className="w-4 h-7 bg-slate-950 rounded-r-full" />
                    <div className="flex-1 border-t-2 border-dashed border-white/10 mx-1" />
                    <div className="w-4 h-7 bg-slate-950 rounded-l-full" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest">FARE</div>
                      <div className="text-cyan-300 font-black text-xl">{'\u20B9'}{dest.fare.toLocaleString('en-IN')}</div>
                    </div>
                    <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-300 border border-cyan-500/20 text-sm font-bold hover:from-cyan-600/30 hover:to-blue-600/30 hover:border-cyan-500/40 transition-all duration-300">
                      <Phone className="w-3.5 h-3.5" /> Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== LOCAL SIGHTSEEING PACKAGES ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-blue-500/20 tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Local Packages
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              {city} Sightseeing <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Packages</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">Pre-booked local taxi for hassle-free sightseeing from the station</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {localPackages.map((pkg, i) => (
              <div key={i} className={`relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 ${i === 1 ? 'border-cyan-500/30 ring-1 ring-cyan-500/20' : 'border-white/10 hover:border-cyan-500/30'}`}>
                {i === 1 && <div className="absolute top-4 right-4"><span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-[0.15em]">Popular</span></div>}
                <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
                <div className="p-7">
                  <h3 className="text-white font-black text-xl mb-2">{pkg.name}</h3>
                  <p className="text-slate-500 text-sm mb-6">{pkg.coverage}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-cyan-500/10 rounded-xl p-4 text-center border border-cyan-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">SEDAN</div>
                      <div className="text-cyan-300 font-black text-2xl">{'\u20B9'}{pkg.sedan.toLocaleString('en-IN')}</div>
                    </div>
                    <div className="bg-blue-500/10 rounded-xl p-4 text-center border border-blue-500/10">
                      <div className="text-slate-500 text-[10px] font-mono tracking-widest mb-1">SUV</div>
                      <div className="text-blue-300 font-black text-2xl">{'\u20B9'}{pkg.suv.toLocaleString('en-IN')}</div>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {['Station pickup with name board', 'AC vehicle, GPS tracked', 'Fuel & driver included'].map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-white/40"><CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/60" /> {f}</div>
                    ))}
                  </div>
                  <a href="tel:+917668570551" className="block text-center py-3.5 rounded-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/20 transition-all">Book Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== VEHICLE OPTIONS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-indigo-500/20 tracking-widest uppercase">
              <Car className="w-3.5 h-3.5" /> Vehicle Fleet
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Choose Your <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Ride</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {vehicles.map((v, i) => (
              <div key={i} className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-7 hover:border-cyan-500/30 hover:bg-white/[0.06] transition-all duration-500 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <Car className="w-7 h-7 text-cyan-400" />
                </div>
                <h3 className="text-white font-black text-xl mb-1">{v.type}</h3>
                <p className="text-slate-500 text-sm mb-3">{v.examples}</p>
                <div className="text-cyan-300 font-mono text-xs tracking-widest">{v.capacity}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== PRE-BOOK BENEFITS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase">
              <Shield className="w-3.5 h-3.5" /> Why Pre-Book
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
              Pre-book for <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Hassle-free Pickup</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="relative bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 p-7 hover:border-cyan-500/40 hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-all duration-500" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {(() => { const Icon = resolveIcon(b.icon); return <Icon className="w-6 h-6 text-cyan-400" />; })()}
                </div>
                <h3 className="relative text-white font-bold text-xl mb-2">{b.title}</h3>
                <p className="relative text-slate-400 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== HOW TO BOOK ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-blue-500/20 tracking-widest uppercase">
              <Zap className="w-3.5 h-3.5" /> Simple Process
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              How to <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Book</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-cyan-600/30 via-blue-500/30 to-indigo-600/30" />
            {[
              { step: '01', title: 'Arrive', desc: `Your train pulls into ${stationName}. Collect luggage and head to exit.`, icon: TrainFront },
              { step: '02', title: 'Contact Us', desc: 'Call 7668570551 or WhatsApp with your location and destination.', icon: Phone },
              { step: '03', title: 'Driver Arrives', desc: `Verified driver reaches ${stationCode} exit within 10 min with name board.`, icon: MapPinned },
              { step: '04', title: 'Enjoy Ride', desc: 'Sit back in a clean AC vehicle. Fixed fare, comfortable, safe.', icon: Car },
            ].map((s, i) => (
              <div key={i} className="text-center relative group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-5 shadow-xl shadow-cyan-600/20 group-hover:scale-110 group-hover:shadow-cyan-500/40 transition-all duration-300 relative z-10">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-cyan-400 font-mono text-xs tracking-widest mb-2">{s.step}</div>
                <h3 className="text-white font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATION INFO ====== */}
      {(cabWaitingPoint || majorTrains) && (
        <section className="py-20 md:py-28 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-cyan-500/20 tracking-widest uppercase">
                <TrainFront className="w-3.5 h-3.5" /> Station Details
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
                About <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">{stationName}</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {cabWaitingPoint && (
                <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                  <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-cyan-400" /><h3 className="text-white font-bold">Cab Pickup Point</h3></div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-400 text-sm leading-relaxed">{cabWaitingPoint}</p>
                    <div className="mt-5 flex items-center gap-2 text-emerald-400 text-xs font-bold">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />Driver waiting at this location
                    </div>
                  </div>
                </div>
              )}
              {majorTrains && majorTrains.length > 0 && (
                <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
                  <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 px-6 py-4 border-b border-white/5">
                    <div className="flex items-center gap-3"><TrainFront className="w-5 h-5 text-blue-400" /><h3 className="text-white font-bold">Major Trains</h3></div>
                  </div>
                  <div className="p-6 flex flex-wrap gap-2">
                    {majorTrains.map((t, i) => (
                      <span key={i} className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 border border-cyan-500/15 rounded-xl px-4 py-2 text-sm font-semibold">{t}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ====== FAQS ====== */}
      <section className="py-14 md:py-20 lg:py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 text-xs font-bold px-5 py-2 rounded-full mb-5 border border-indigo-500/20 tracking-widest uppercase">
              FAQs
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Common <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Questions</span>
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className={`bg-white/[0.03] backdrop-blur-2xl rounded-2xl border overflow-hidden transition-all duration-500 ${openFaq === i ? 'border-cyan-500/30 shadow-lg shadow-cyan-500/5' : 'border-white/10 hover:border-white/20'}`}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} aria-label={openFaq === i ? 'Collapse answer' : 'Expand answer'} className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-cyan-500/50 rounded-2xl">
                  <div className="flex items-center gap-4 pr-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300 ${openFaq === i ? 'bg-cyan-500/20' : 'bg-white/5'}`}>
                      <span className={`text-xs font-black font-mono transition-colors ${openFaq === i ? 'text-cyan-300' : 'text-slate-500'}`}>{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="text-white font-semibold text-sm md:text-base">{faq.question}</h3>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
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

      {/* ====== FINAL CTA ====== */}
      <section className="relative py-28 md:py-36 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700" />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[100px] float-el" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px] float-el-d" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 mb-8 float-el">
            <TrainFront className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-5 tracking-tight">
            Arriving at {stationName}?
          </h2>
          <p className="text-2xl md:text-3xl text-cyan-100 font-bold mb-3">Your taxi is waiting at the station.</p>
          <p className="text-cyan-100/60 text-lg mb-10 max-w-xl mx-auto">Fixed fares from {'\u20B9'}{cheapest}. 24/7 service. Meet at platform exit. Clean AC vehicles.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link onClick={() => trackPhoneCall('station_taxi')} href="tel:+917668570551" className="group inline-flex items-center justify-center gap-2.5 bg-white text-blue-600 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-black/20 hover:scale-105 transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-bounce" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('station_taxi')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2.5 bg-white/10 backdrop-blur-2xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Booking
            </Link>
          </div>
        </div>
      </section>

      {/* ====== BREADCRUMB ====== */}
      <nav className="py-4 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-300 font-medium">{stationName} Taxi</span>
        </div>
      </nav>
    </article>
  );
}
