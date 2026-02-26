'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Phone, MapPin, Clock, Car, ArrowRight, Star, Shield, CheckCircle,
  Navigation, ChevronDown, ChevronUp, Users, IndianRupee, Compass, Route,
  Calendar, Search, Zap, Map, ShieldCheck, Fuel, HelpCircle, Navigation2,
  MapPinned, Milestone, Target
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

/* ── inline keyframes for animations ── */
const animStyles = `
@keyframes places-float { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-15px) rotate(2deg); } }
@keyframes places-pulse-ring { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2.2); opacity: 0; } }
@keyframes places-shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
@keyframes places-pin-bounce { 0%,100% { transform: translateY(0); } 30% { transform: translateY(-8px); } 60% { transform: translateY(-3px); } }
@keyframes places-path-dash { 0% { stroke-dashoffset: 1000; } 100% { stroke-dashoffset: 0; } }
@keyframes places-compass-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
@keyframes places-map-unfold { 0% { opacity: 0; transform: scale(0.9) rotateX(5deg); } 100% { opacity: 1; transform: scale(1) rotateX(0deg); } }
.places-float { animation: places-float 6s ease-in-out infinite; }
.places-float-delay { animation: places-float 6s ease-in-out 2s infinite; }
.places-float-slow { animation: places-float 8s ease-in-out 1s infinite; }
.places-pin-bounce { animation: places-pin-bounce 2s ease-in-out infinite; }
.places-shimmer-text { background-size: 200% 100%; animation: places-shimmer 3s ease-in-out infinite; }
.places-map-unfold { animation: places-map-unfold 0.6s ease-out forwards; }
.places-pulse-ring { animation: places-pulse-ring 2s ease-out infinite; }
`;

export default function PlacesToVisitClient({ data, allCities }) {
  const [expandedFaq, setExpandedFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDestinations = data.destinations.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.bestFor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const nearest = data.destinations.reduce((a, b) =>
    parseInt(a.distance) < parseInt(b.distance) ? a : b
  );
  const farthest = data.destinations.reduce((a, b) =>
    parseInt(a.distance) > parseInt(b.distance) ? a : b
  );
  const avgDistance = Math.round(
    data.destinations.reduce((sum, d) => sum + parseInt(d.distance), 0) / data.destinations.length
  );

  const otherCities = allCities.filter(c => c.slug !== data.slug);

  return (
    <div className="min-h-screen bg-white text-stone-900">
      <style dangerouslySetInnerHTML={{ __html: animStyles }} />

      {/* ━━━ HERO: Topographic Map Explorer Theme ━━━ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-emerald-900 to-green-950" />

        {/* Topographic contour lines pattern */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `
            radial-gradient(ellipse 600px 200px at 20% 50%, rgba(20,184,166,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 400px 150px at 70% 30%, rgba(52,211,153,0.2) 0%, transparent 70%),
            radial-gradient(ellipse 500px 180px at 50% 70%, rgba(16,185,129,0.25) 0%, transparent 70%)
          `
        }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `
            repeating-radial-gradient(circle at 30% 40%, transparent 0, transparent 40px, rgba(255,255,255,0.03) 41px, transparent 42px),
            repeating-radial-gradient(circle at 70% 60%, transparent 0, transparent 60px, rgba(255,255,255,0.02) 61px, transparent 62px),
            repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 80px, rgba(255,255,255,0.02) 81px, transparent 82px)
          `
        }} />

        {/* Floating map pin decorations */}
        <div className="absolute top-[15%] right-[12%] hidden lg:block places-float">
          <div className="relative">
            <div className="absolute -inset-6 bg-emerald-400/15 rounded-full blur-2xl" />
            <div className="relative w-16 h-16 flex items-center justify-center">
              <MapPin className="w-12 h-12 text-emerald-400/40" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[25%] right-[25%] hidden lg:block places-float-delay">
          <div className="w-10 h-10 flex items-center justify-center">
            <Navigation2 className="w-8 h-8 text-teal-400/30 rotate-45" />
          </div>
        </div>
        <div className="absolute top-[40%] right-[5%] hidden xl:block places-float-slow">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-emerald-400/40" />
          </div>
        </div>

        {/* Animated destination counter orb */}
        <div className="absolute top-1/4 right-[8%] hidden lg:block">
          <div className="relative places-float">
            <div className="absolute -inset-4 rounded-full places-pulse-ring border-2 border-emerald-400/30" />
            <div className="absolute -inset-2 bg-emerald-400/10 rounded-full blur-xl" />
            <div className="relative bg-gradient-to-br from-emerald-400 via-teal-400 to-green-500 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl shadow-emerald-500/40">
              <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-black text-white">{data.destinations.length}+</div>
                  <div className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal clip bottom */}
        <div className="absolute -bottom-1 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 20%, 0 100%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24">
          {/* Compass badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/[0.07] backdrop-blur-xl px-6 py-2.5 rounded-full mb-8 border border-emerald-400/20 shadow-lg shadow-emerald-900/20">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 flex items-center justify-center">
              <Compass className="w-3 h-3 text-teal-950" />
            </div>
            <span className="text-emerald-300 font-semibold text-sm tracking-wide">Explore {data.destinations.length}+ Destinations by Car</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-[1.05] max-w-4xl tracking-tight">
            <span className="block text-white/90">Places to Visit</span>
            <span className="block">Near{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-green-300 bg-clip-text places-shimmer-text">{data.city}</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-60" />
              </span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 mb-10 max-w-2xl leading-relaxed">{data.heroSubtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link onClick={() => trackPhoneCall('places_to_visit')} href="tel:+917668570551" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 text-teal-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-[1.03] transition-all duration-300">
              <Phone className="w-5 h-5 group-hover:animate-pulse" /> Call: 7668570551
            </Link>
            <Link onClick={() => trackWhatsAppClick('places_to_visit')} href={`https://wa.me/917668570551?text=I want to explore places near ${data.city}`} className="inline-flex items-center gap-2.5 bg-white/[0.06] backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/15 hover:bg-white/10 hover:border-emerald-400/30 transition-all duration-300">
              WhatsApp Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ SEO DESCRIPTION ━━━ */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full mb-4 border border-emerald-100">
              <Map className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-xs uppercase tracking-wider">Explorer Guide</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-stone-800 leading-tight">
              Discover the Best Places <br className="hidden md:block" />
              <span className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">Near {data.city}</span> by Car
            </h2>
          </div>
          <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
            {data.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ QUICK STATS: Glassmorphic dashboard ━━━ */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-teal-900 via-emerald-900 to-green-950 rounded-3xl p-8 md:p-10 relative overflow-hidden">
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '24px 24px' }} />

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { icon: MapPinned, label: 'Total Destinations', value: `${data.destinations.length}+`, color: 'from-emerald-400 to-green-400' },
                { icon: Navigation, label: 'Nearest Place', value: `${nearest.name}`, sub: nearest.distance, color: 'from-teal-400 to-cyan-400' },
                { icon: Milestone, label: 'Farthest Place', value: `${farthest.name}`, sub: farthest.distance, color: 'from-green-400 to-emerald-400' },
                { icon: Target, label: 'Avg Distance', value: `${avgDistance} km`, color: 'from-cyan-400 to-teal-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/[0.06] backdrop-blur-xl rounded-2xl p-5 border border-white/10 hover:bg-white/[0.1] hover:border-emerald-400/30 transition-all duration-500 group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-5 h-5 text-teal-950" />
                  </div>
                  <div className="text-xl font-black text-white">{stat.value}</div>
                  {stat.sub && <div className="text-emerald-400/70 text-sm font-medium">{stat.sub}</div>}
                  <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DESTINATION CARDS: Map-Pin Style ━━━ */}
      <section className="py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-1.5 rounded-full mb-3 border border-teal-100">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider">All Destinations</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Destinations Near {data.city}</h2>
              <p className="text-stone-500 mt-2">Distance, drive time, and cab fares for every stop</p>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search destination or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-5 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-stone-700 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((dest, i) => (
              <div key={i} className="group relative places-map-unfold" style={{ animationDelay: `${i * 0.05}s` }}>
                {/* Map pin top accent */}
                <div className="absolute -top-3 left-6 z-10">
                  <div className="relative">
                    <div className="w-7 h-7 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/30 group-hover:shadow-teal-400/50 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="w-3.5 h-3.5 text-white" />
                    </div>
                    {/* Pin stem */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[2px] h-3 bg-gradient-to-b from-emerald-500 to-transparent" />
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-300 transition-all duration-500 pt-5">
                  {/* Top bar with distance indicator */}
                  <div className="px-6 pb-4 border-b border-stone-100">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-black text-stone-800 group-hover:text-teal-700 transition-colors duration-300">{dest.name}</h3>
                        <span className="text-sm text-stone-400">{dest.bestFor}</span>
                      </div>
                      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 px-3 py-1 rounded-full border border-teal-100">
                        <span className="text-xs font-bold text-teal-700">{dest.bestTime}</span>
                      </div>
                    </div>

                    {/* Distance progress bar */}
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex items-center gap-1.5 bg-teal-50 px-3 py-1.5 rounded-lg border border-teal-100">
                        <Navigation className="w-3.5 h-3.5 text-teal-600" />
                        <span className="text-sm font-bold text-teal-800">{dest.distance}</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-stone-50 px-3 py-1.5 rounded-lg border border-stone-100">
                        <Clock className="w-3.5 h-3.5 text-stone-500" />
                        <span className="text-sm font-medium text-stone-600">{dest.time}</span>
                      </div>
                      {/* Visual route line */}
                      <div className="flex-1 hidden sm:flex items-center gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                        <div className="flex-1 h-[2px] bg-gradient-to-r from-teal-300 via-emerald-200 to-stone-200 rounded-full" />
                        <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content section */}
                  <div className="px-6 py-4">
                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-2 mb-3">{dest.description}</p>

                    {/* Highlight tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dest.highlights.map((h, j) => (
                        <span key={j} className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200 transition-colors duration-300">{h}</span>
                      ))}
                    </div>
                  </div>

                  {/* Fare + CTA footer */}
                  <div className="px-6 py-4 bg-gradient-to-r from-stone-50 to-teal-50/50 border-t border-stone-100">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-5">
                        <div>
                          <div className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">Sedan</div>
                          <div className="text-lg font-black text-stone-800">&#8377;{dest.sedanFare}</div>
                        </div>
                        <div className="w-px bg-stone-200" />
                        <div>
                          <div className="text-[10px] text-stone-400 uppercase tracking-wider font-medium">SUV</div>
                          <div className="text-lg font-black text-stone-800">&#8377;{dest.suvFare}</div>
                        </div>
                      </div>
                      <Link
                        href={dest.bookingSlug || 'tel:+917668570551'}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:from-teal-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-teal-500/25 hover:scale-105 transition-all duration-300"
                      >
                        <Car className="w-4 h-4" /> Book Cab
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-16 text-stone-400">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mx-auto mb-4">
                <Search className="w-7 h-7 text-stone-300" />
              </div>
              <p className="text-lg font-semibold">No destinations match &quot;{searchQuery}&quot;</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      </section>

      {/* ━━━ BUDGET PLANNING: Receipt-style cards ━━━ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-1.5 rounded-full mb-4 border border-teal-100">
              <IndianRupee className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">Budget Planning for Trips from {data.city}</h2>
            <p className="text-stone-500 mt-3 max-w-xl mx-auto">No hidden charges. Toll, parking, and state tax at actual.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { type: 'One-Way Drop', sedan: '11/km', suv: '15/km', min: '300 km min', includes: ['Driver', 'Fuel', 'AC'], icon: ArrowRight },
              { type: 'Round Trip', sedan: '11/km', suv: '15/km', min: '300 km/day', includes: ['Driver', 'Fuel', 'AC', 'Wait Time'], icon: Route },
              { type: 'Day Trip', sedan: '11/km', suv: '15/km', min: '300 km min', includes: ['Driver', 'Fuel', 'AC', 'Sightseeing'], icon: Compass },
              { type: 'Multi-Day Tour', sedan: '11/km', suv: '15/km', min: '300 km/day', includes: ['Driver', 'Fuel', 'AC', 'Night Halt'], icon: Calendar },
            ].map((pkg, i) => (
              <div key={i} className="bg-white rounded-2xl border border-stone-200 overflow-hidden hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-300 transition-all duration-500 group">
                {/* Dashed top edge like a receipt */}
                <div className="h-1 bg-gradient-to-r from-teal-500 to-emerald-500" />
                <div className="border-b border-dashed border-stone-200 mx-4" />

                <div className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-teal-100 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <pkg.icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="text-lg font-black text-stone-800 mb-1">{pkg.type}</h3>
                  <div className="text-xs text-stone-400 mb-4 font-medium">{pkg.min} billing</div>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-500">Sedan</span>
                      <span className="text-base font-bold text-stone-800">&#8377;{pkg.sedan}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-stone-500">SUV</span>
                      <span className="text-base font-bold text-stone-800">&#8377;{pkg.suv}</span>
                    </div>
                  </div>

                  <div className="border-t border-dashed border-stone-200 pt-3">
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider mb-2 font-medium">Includes</div>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.includes.map((item, j) => (
                        <span key={j} className="text-xs text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">{item}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHY TRIVENI: Premium feature grid ━━━ */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-stone-800">
              Why Travellers Choose{' '}
              <span className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">Triveni Cabs</span>
            </h2>
            <p className="text-stone-500 mt-3 text-lg">Trusted by thousands for outstation trips from {data.city}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: IndianRupee, title: 'No Hidden Charges', desc: 'Transparent per-km billing. Toll, parking, and tax at actual. No surprise charges at the end of your trip.', gradient: 'from-teal-500 to-emerald-500' },
              { icon: ShieldCheck, title: 'Verified Drivers', desc: 'Background-checked, experienced drivers who know every route, rest stop, and local shortcut.', gradient: 'from-emerald-500 to-green-500' },
              { icon: Car, title: 'Clean AC Vehicles', desc: 'Well-maintained Sedans and SUVs with AC, first-aid kits, and GPS tracking for every trip.', gradient: 'from-green-500 to-teal-500' },
              { icon: Zap, title: 'Instant Booking', desc: 'Call or WhatsApp 7668570551. Get a quote in 2 minutes. No app download needed.', gradient: 'from-teal-500 to-cyan-500' },
              { icon: Clock, title: '24/7 Availability', desc: 'Early morning, late night, or weekends. We are available 365 days a year for your trips.', gradient: 'from-cyan-500 to-teal-500' },
              { icon: Star, title: '4.8-Star Rating', desc: 'Rated 4.8/5 by 2,800+ happy travellers. Consistent quality on every trip.', gradient: 'from-emerald-500 to-teal-500' },
            ].map((feature, i) => (
              <div key={i} className="group bg-white border border-stone-200 rounded-2xl p-7 hover:shadow-2xl hover:shadow-teal-500/10 hover:border-teal-200 hover:-translate-y-1 transition-all duration-500">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TRAVEL TIPS: Explorer Notebook Style ━━━ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full mb-4 border border-emerald-100">
              <Compass className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-emerald-700 font-semibold text-xs uppercase tracking-wider">Pro Tips</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">Travel Tips for Road Trips from {data.city}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: 'Start Early', text: `Leave ${data.city} by 5-6 AM for hill stations and long-distance destinations. This avoids city traffic and ensures you arrive with daylight.`, num: '01' },
              { title: 'Carry Essentials', text: 'Keep water bottles, snacks, sunscreen, medicines, and phone chargers handy. Our vehicles have charging ports but bring your own cable.', num: '02' },
              { title: 'Check Weather', text: 'Hill station roads can be affected by rain and landslides (Jul-Sep). Plains destinations are best October to March. Summer means carry extra water.', num: '03' },
              { title: 'Book in Advance', text: 'Weekend and holiday demand is high. Book your cab 2-3 days in advance for guaranteed availability, especially during festival seasons.', num: '04' },
              { title: 'Plan Rest Stops', text: 'Our drivers know the best dhabas and rest stops on every route. 15-minute breaks every 2-3 hours keep the journey comfortable.', num: '05' },
              { title: 'Keep Documents Ready', text: 'Carry valid ID proof for hotel check-ins and some destinations that require it (national parks, border areas). Original or Aadhaar card works.', num: '06' },
            ].map((tip, i) => (
              <div key={i} className="group flex gap-5 bg-white rounded-2xl p-6 border border-stone-200 hover:shadow-lg hover:border-teal-200 hover:-translate-y-0.5 transition-all duration-500">
                {/* Number badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">
                    <span className="text-sm font-black text-teal-600 group-hover:text-white transition-colors duration-300">{tip.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-stone-800 mb-1.5">{tip.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ ROAD TRIP GUIDE: Keyword-rich SEO content ━━━ */}
      {data.roadTripGuide && (
        <section className="py-20 md:py-28 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-1.5 rounded-full mb-4 border border-teal-100">
                <Route className="w-3.5 h-3.5 text-teal-600" />
                <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider">Road Trip Guide</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-stone-800 leading-tight">{data.roadTripGuide.heading}</h2>
            </div>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              {data.roadTripGuide.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Highway info cards */}
            {data.roadTripGuide.highways && (
              <div className="mt-10 grid md:grid-cols-2 gap-4">
                {data.roadTripGuide.highways.map((hw, i) => (
                  <div key={i} className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-5 border border-teal-100">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                        <Navigation className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="font-bold text-stone-800">{hw.name}</h3>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed">{hw.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ━━━ RELATED SERVICES: Internal Linking Grid ━━━ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-stone-800">
              More Cab Services from{' '}
              <span className="text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text">{data.city}</span>
            </h2>
            <p className="text-stone-500 mt-2">Explore our other services for your travel needs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: `${data.city} Outstation Cabs`, href: `/${data.slug}`, icon: Car },
              { label: `${data.city} Sightseeing Tours`, href: `/sightseeing/${data.slug}`, icon: Map },
              { label: `${data.city} Airport Taxi`, href: `/airport-service/${data.slug}`, icon: Navigation2 },
              { label: `${data.city} Wedding Cars`, href: `/wedding/${data.slug}`, icon: Star },
              { label: 'One-Way Cab Booking', href: '/one-way-cab', icon: ArrowRight },
              { label: 'Round Trip Cab', href: '/round-trip-cab', icon: Route },
              { label: 'Tempo Traveller Rental', href: '/tempo-traveller', icon: Users },
              { label: 'Corporate Transport', href: `/corporate-transportation-service/${data.slug}`, icon: Shield },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group bg-white border border-stone-200 rounded-xl p-4 hover:border-teal-400 hover:shadow-md hover:shadow-teal-500/10 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 border border-teal-100 flex items-center justify-center flex-shrink-0 group-hover:from-teal-500 group-hover:to-emerald-500 transition-all duration-300">
                  <link.icon className="w-4 h-4 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-700 transition-colors duration-300 leading-tight">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Related content pages */}
          {data.relatedContent && data.relatedContent.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-stone-700 mb-4 text-center">Related Guides &amp; Tours</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.relatedContent.map((content, i) => (
                  <Link
                    key={i}
                    href={content.url}
                    className="group flex items-start gap-3 bg-white border border-stone-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-stone-700 group-hover:text-teal-700 transition-colors duration-300">{content.title}</span>
                      <p className="text-xs text-stone-400 mt-0.5">{content.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ━━━ FAQ: Clean accordion ━━━ */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-1.5 rounded-full mb-4 border border-teal-100">
              <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
              <span className="text-teal-700 font-semibold text-xs uppercase tracking-wider">FAQs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">Frequently Asked Questions</h2>
            <p className="text-stone-500 mt-3">Common questions about visiting places near {data.city}</p>
          </div>

          <div className="space-y-3">
            {data.faqs.map((faq, i) => (
              <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${expandedFaq === i ? 'border-teal-300 shadow-lg shadow-teal-500/10 bg-teal-50/30' : 'border-stone-200 bg-white hover:border-stone-300'}`}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <span className={`font-bold pr-4 transition-colors duration-300 ${expandedFaq === i ? 'text-teal-800' : 'text-stone-800'}`}>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${expandedFaq === i ? 'bg-teal-600 rotate-180' : 'bg-stone-100'}`}>
                    <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${expandedFaq === i ? 'text-white' : 'text-stone-500'}`} />
                  </div>
                </button>
                {expandedFaq === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-stone-600 leading-relaxed border-t border-teal-200/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ RELATED CITY LISTINGS: Map grid ━━━ */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-stone-800">Explore More Cities</h2>
            <p className="text-stone-500 mt-3">Find places to visit near other popular cities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {otherCities.map((city, i) => (
              <Link
                key={i}
                href={`/places-to-visit-near-${city.slug}`}
                className="group relative bg-white border border-stone-200 rounded-2xl px-4 py-4 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-0.5 transition-all duration-300 text-center"
              >
                {/* Pin accent */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <MapPin className="w-5 h-5 text-teal-500 mx-auto mb-2 group-hover:text-teal-600 group-hover:scale-110 transition-all duration-300" />
                <span className="text-stone-700 font-semibold group-hover:text-teal-700 transition-colors duration-300 text-sm">Near {city.city}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FINAL CTA: Full-width explorer banner ━━━ */}
      <section className="py-20 md:py-28 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-teal-900 via-emerald-900 to-green-950 rounded-[2rem] p-10 md:p-16 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
            <div className="absolute top-8 right-8 hidden md:block places-float opacity-20">
              <MapPin className="w-20 h-20 text-emerald-400" />
            </div>
            <div className="absolute bottom-8 left-8 hidden md:block places-float-delay opacity-15">
              <Compass className="w-16 h-16 text-teal-400" />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-300 font-semibold text-xs uppercase tracking-wider">Ready to Explore?</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                Plan Your Next Trip<br className="hidden md:block" /> from {data.city}
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Call or WhatsApp for an instant quote. Sedan from &#8377;11/km, SUV from &#8377;15/km. No hidden charges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link onClick={() => trackPhoneCall('places_to_visit')} href="tel:+917668570551" className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 text-teal-950 px-9 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-400/50 hover:scale-[1.03] transition-all duration-300">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" /> Call: 7668570551
                </Link>
                <Link onClick={() => trackWhatsAppClick('places_to_visit')} href={`https://wa.me/917668570551?text=I want to explore places near ${data.city}`} className="inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-xl text-white px-9 py-4 rounded-2xl font-bold text-lg border border-white/15 hover:bg-white/12 hover:border-emerald-400/30 transition-all duration-300">
                  WhatsApp Booking <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
