'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Phone, MapPin, Clock, Shield, Bus, Car, Users, Star, ChevronDown,
  CheckCircle2, ArrowRight, Route, Navigation, IndianRupee, Zap,
  MapPinned, Gauge, Headphones, ShieldCheck, Navigation2
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import StickyPriceBar from '@/components/shared/StickyPriceBar';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import SectionDivider from '@/components/shared/SectionDivider';

export default function BusStandClient({ stand, slug, allStands }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <article className="min-h-screen bg-slate-950 text-white" itemScope itemType="https://schema.org/TaxiService">
      <StickyPriceBar
        title={`${stand.name} Taxi Service`}
        price={stand.destinations?.[0]?.fare || ''}
        whatsappMessage={`Hi, I need a taxi from ${stand.name}, ${stand.city}`}
      />

      {/* Hero Section - Dramatic Bus Terminal Design */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-amber-950/80 to-slate-950" />

        {/* Animated glowing orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-[10%] w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-yellow-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Road-lines decorative pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(245,158,11,0.5) 40px, rgba(245,158,11,0.5) 42px)', backgroundSize: '100% 42px' }} />
        </div>

        {/* Floating bus route numbers */}
        <div className="absolute top-24 right-12 bg-amber-500/10 border border-amber-500/20 rounded-lg px-4 py-2 text-amber-400/40 font-mono text-sm animate-bounce hidden lg:block" style={{ animationDuration: '3s' }}>
          ROUTE 01
        </div>
        <div className="absolute bottom-32 left-16 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-2 text-green-400/30 font-mono text-sm animate-bounce hidden lg:block" style={{ animationDuration: '4s', animationDelay: '1s' }}>
          PLATFORM 3
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronDown className="w-3 h-3 -rotate-90" />
            <Link href="/bus-stand-taxi" className="hover:text-amber-400 transition-colors">Bus Stand Taxi</Link>
            <ChevronDown className="w-3 h-3 -rotate-90" />
            <span className="text-amber-400">{stand.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-sm font-semibold tracking-wide uppercase">{stand.city} Bus Terminal</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  {stand.name}
                </span>
                <br />
                <span className="text-white text-3xl md:text-5xl font-bold">Cab &amp; Taxi Service</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                {stand.description}
              </p>

              {/* CTA buttons with glow */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:7668570551"
                  onClick={() => trackPhoneCall('bus_stand')}
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/50 hover:-translate-y-1 hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now - 7668570551</span>
                </a>
                <a
                  href="https://wa.me/917668570551"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('bus_stand')}
                  className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400/60 hover:bg-amber-500/10 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <WhatsAppIcon className="w-5 h-5 text-amber-400" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Glass Info Card - Bus Route Board Style */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-40" />

              <div className="relative bg-white/[0.04] backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl shadow-amber-500/10 overflow-hidden">
                {/* Route board header */}
                <div className="bg-gradient-to-r from-amber-600/30 to-yellow-600/20 px-8 py-5 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                    <h2 className="text-lg font-bold text-yellow-300 tracking-wide uppercase font-mono">Station Info Board</h2>
                  </div>
                </div>

                <div className="p-8 space-y-5">
                  {[
                    { icon: MapPin, label: 'Location', value: stand.area },
                    { icon: Navigation, label: 'Pickup Point', value: stand.cabWaitingArea },
                    { icon: Bus, label: 'Operators', value: stand.busOperators.join(' | ') },
                    { icon: Clock, label: 'Service Hours', value: '24/7 - Round the Clock' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/20 transition-colors">
                        <item.icon className="w-5 h-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-mono">{item.label}</p>
                        <p className="font-medium text-gray-200 leading-snug">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Landmarks footer */}
                <div className="px-8 pb-6">
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-mono mb-3">Nearby Landmarks</p>
                  <div className="flex flex-wrap gap-2">
                    {stand.nearbyLandmarks.map((landmark, i) => (
                      <span key={i} className="bg-amber-500/10 text-yellow-300 text-xs px-3 py-1.5 rounded-full border border-amber-500/15 hover:border-amber-500/40 transition-colors">
                        {landmark}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofStrip theme="dark" />

      {/* Quick Stats Bar - LED Board Style */}
      <section className="relative border-y border-amber-500/10 bg-slate-900/80 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-yellow-500/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Bus, label: 'Bus Operators', value: `${stand.busOperators.length}+ Lines` },
              { icon: Clock, label: 'Service', value: '24/7 Available' },
              { icon: Zap, label: 'Pickup', value: 'Instant' },
              { icon: MapPinned, label: 'GPS Tracked', value: 'Live Tracking' },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-yellow-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-7 h-7 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="font-bold text-lg text-white">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === DIRECT ANSWER BOX (AEO/Featured Snippet Target) === */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="direct-answer bg-white/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-amber-500/20" data-snippet-type="direct-answer">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              {stand.name} Taxi — Quick Info
            </h2>
            <div className="key-info grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Starting Fare</p>
                <p className="text-xl font-black text-amber-400">{stand.destinations?.[0]?.fare || '₹300'}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Destinations</p>
                <p className="text-xl font-black text-white">{stand.destinations.length}+</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Available</p>
                <p className="text-xl font-black text-white">24/7</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <p className="text-xs text-slate-400 uppercase font-semibold mb-1">Rating</p>
                <p className="text-xl font-black text-amber-400">4.9★</p>
              </div>
            </div>
            <p className="faq-answer text-slate-300 leading-relaxed text-base md:text-lg">
              Taxi from <strong className="text-white">{stand.name}, {stand.city}</strong> starts at just <strong className="text-amber-400">{stand.destinations?.[0]?.fare || '₹300'}</strong> for AC sedan.
              Our drivers wait at the <strong className="text-white">bus stand exit gate</strong> — no surge pricing, no meter tampering.
              Fixed fares to {stand.destinations.slice(0, 3).map(d => d.name).join(', ')} and {Math.max(0, stand.destinations.length - 3)}+ more destinations.
              AC sedan and SUV with verified drivers, GPS tracking, and 24/7 availability.
              Call <strong className="text-white">+91-7668570551</strong> or WhatsApp to book instantly. 4.9★ rated, 10,000+ trips completed.
            </p>
          </div>
        </div>
      </section>

      {/* Fare Table Section - Route Board Style Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2.5 mb-6">
              <IndianRupee className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">Transparent Pricing</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Taxi Fares from <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">{stand.name}</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Fixed fares with no hidden charges. All prices for AC sedan (Swift Dzire / Honda Amaze).</p>
          </div>

          {/* Bus-route-board styled fare cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {stand.destinations.map((dest, i) => (
              <div key={i} className="group relative">
                <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/40 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/10">
                  {/* Route number header */}
                  <div className="bg-gradient-to-r from-amber-600/20 to-yellow-600/10 px-5 py-3 border-b border-white/5 flex items-center justify-between">
                    <span className="text-amber-400 font-mono font-bold text-sm">ROUTE {String(i + 1).padStart(2, '0')}</span>
                    <span className="text-yellow-300 font-bold">{dest.fare}</span>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin className="w-4 h-4 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-amber-400 transition-colors">{dest.name}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-400">
                          <span>{dest.distance}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span>{dest.time}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href="tel:7668570551"
                      onClick={() => trackPhoneCall('bus_stand')}
                      className="w-full flex items-center justify-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-2.5 rounded-xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">* Fares are approximate for AC sedan. SUV and premium vehicles available at additional charges.</p>
        </div>
      </section>

      {/* Bus Operators Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/15 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Bus Operators at <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{stand.name}</span>
            </h2>
            <p className="text-gray-400 text-lg">Major bus services operating from this terminal</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stand.busOperators.map((operator, i) => (
              <div key={i} className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Bus className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-amber-400 transition-colors">{operator}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">Regular interstate and local bus services connecting {stand.city} to multiple destinations across the region.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Triveni - Premium Feature Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2.5 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Why Triveni Cabs at{' '}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">{stand.name}</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">The most trusted cab service at {stand.name}, {stand.city}. Here is what makes us different.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: 'Verified Drivers', desc: 'All drivers are background-verified, licensed, and trained for professional service. Your safety is our top priority at every ride.' },
              { icon: IndianRupee, title: 'Fixed Fares', desc: 'No surge pricing, no hidden charges, no meter tampering. What we quote is what you pay - transparently guaranteed every single time.' },
              { icon: Clock, title: '24/7 Availability', desc: 'Whether your bus arrives at 3 AM or 3 PM, our drivers are always ready. Late night and early morning pickups at no extra charge.' },
              { icon: Gauge, title: 'Instant Pickup', desc: 'Pre-booked cabs ensure zero waiting time. Your driver reaches the bus stand before your bus arrives so you never wait.' },
              { icon: Car, title: 'Clean AC Cabs', desc: 'Step out of a long bus journey into a well-maintained, air-conditioned sedan or SUV. Clean, sanitized, and comfortable every time.' },
              { icon: Headphones, title: '24/7 Customer Support', desc: 'Dedicated helpline for any issues during your journey. Real-time GPS tracking so you and your family know exactly where you are.' },
            ].map((feature, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-7 transition-all duration-500 hover:-translate-y-1 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-amber-400 transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Book - 4 Step Process */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/15 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              How to <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Book Your Cab</span>
            </h2>
            <p className="text-gray-400 text-lg">4 simple steps to your comfortable ride from {stand.name}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Call or WhatsApp', desc: 'Reach us at 7668570551 with your bus arrival details, expected time, and your destination.', icon: Phone },
              { step: '02', title: 'Share Bus Details', desc: 'Tell us your bus number, operator name, expected arrival time, and exact drop location.', icon: Bus },
              { step: '03', title: 'Driver Assigned', desc: 'We assign a verified, experienced driver who reaches the bus stand before your bus arrives.', icon: Navigation2 },
              { step: '04', title: 'Enjoy Your Ride', desc: 'Meet your driver at the pickup point and enjoy a comfortable, air-conditioned cab ride to your destination.', icon: Car },
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                {/* Connecting line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-lime-500/30 to-transparent" />
                )}

                <div className="relative inline-block">
                  <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-br from-amber-500/15 to-yellow-500/10 border border-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-lime-500/20">
                    <item.icon className="w-10 h-10 text-amber-400" />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-sm flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Routes Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-5 py-2.5 mb-6">
              <Route className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-semibold">Bus Routes Served</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Major Bus Routes from <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">{stand.name}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Popular bus routes with premium cab alternatives. Skip the bus, travel in comfort with Triveni Cabs.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stand.majorRoutes.map((route, i) => (
              <div key={i} className="group relative">
                <div className="relative bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 overflow-hidden transition-all duration-500 hover:-translate-y-1">
                  {/* Route stripe */}
                  <div className="h-1.5 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500" />

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                        <Route className="w-6 h-6 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg group-hover:text-amber-400 transition-colors">{route}</h3>
                        <p className="text-xs text-gray-500 font-mono">BUS + CAB AVAILABLE</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-5">Skip the crowded bus. Travel this route in a comfortable, air-conditioned Triveni cab with fixed transparent fares.</p>
                    <a
                      href="tel:7668570551"
                      onClick={() => trackPhoneCall('bus_stand')}
                      className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-yellow-300 transition-colors"
                    >
                      Book Cab Instead <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Complete Guide to Cab Service from <span className="text-amber-400">{stand.name}, {stand.city}</span>
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Arriving at {stand.name} in {stand.city}? Finding reliable transportation after a long bus journey can be challenging, especially during late night hours or peak festival seasons. Triveni Cabs is your trusted partner for comfortable, affordable cab service right from {stand.name} to anywhere in {stand.city} and beyond.
              </p>
              <p>
                {stand.name} is one of the busiest bus terminals in {stand.city}, served by major operators including {stand.busOperators.join(', ')}. With buses arriving from routes like {stand.majorRoutes.slice(0, 3).join(', ')}, thousands of passengers need reliable onward transportation daily.
              </p>
              <h3 className="text-xl font-bold text-white pt-4">Why Pre-Book Your Cab from {stand.name}?</h3>
              <p>
                Auto-rickshaws and local taxis at bus stands often overcharge, especially late at night or during festivals. By pre-booking with Triveni Cabs, you get guaranteed fixed fares, a verified driver waiting at the pickup point ({stand.cabWaitingArea}), and a clean air-conditioned vehicle for your comfort after a tiring bus ride.
              </p>
              <p>
                Our most popular destinations from {stand.name} include {stand.destinations.slice(0, 4).map(d => `${d.name} (${d.distance}, ${d.fare})`).join(', ')}. Whether you need a quick city transfer or a long-distance outstation trip, we have you covered 24 hours a day, 7 days a week, 365 days a year.
              </p>
              <h3 className="text-xl font-bold text-white pt-4">Landmarks Near {stand.name}</h3>
              <p>
                {stand.name} is conveniently located near {stand.nearbyLandmarks.join(', ')}. Our drivers are local experts who know the fastest routes to all major destinations in {stand.city}, helping you avoid traffic congestion and reach your destination on time every time.
              </p>
              <h3 className="text-xl font-bold text-white pt-4">Outstation Cabs from {stand.name}</h3>
              <p>
                Beyond city rides, Triveni Cabs also offers outstation cab services from {stand.name}. Popular outstation routes include {stand.majorRoutes.slice(0, 3).join(', ')} and more. All outstation trips come with experienced drivers who are familiar with highway driving and ensure a safe, comfortable journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              Travel Tips for <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">{stand.name}</span>
            </h2>
            <p className="text-gray-400 text-lg">Insider tips for a smooth journey from {stand.name}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {stand.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-6 transition-all duration-300 group">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                </div>
                <p className="text-gray-300 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InclusionBadges preset="local" theme="dark" />
      <SectionDivider color="amber" className="my-8" />

      {/* FAQ Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              Frequently Asked <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg">Common queries about cab service from {stand.name}</p>
          </div>

          <div className="space-y-4">
            {stand.faqs.map((faq, i) => (
              <div key={i} className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-7 py-6 text-left"
                >
                  <span className="font-bold text-lg pr-4 group-hover:text-amber-400 transition-colors">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? 'rotate-180 bg-amber-500/20' : ''}`}>
                    <ChevronDown className="w-4 h-4 text-amber-400" />
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-96 pb-7' : 'max-h-0'}`}>
                  <p className="px-7 text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Service Links */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-amber-950/10 to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              Other Travel Options from <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">{stand.city}</span>
            </h2>
            <p className="text-gray-400 text-lg">Explore more ways to travel from {stand.city}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: `${stand.city} Railway Station Taxi`, href: `/railway-station-taxi`, icon: Route, desc: 'Taxi service at railway stations' },
              { title: `${stand.city} Sightseeing Tours`, href: `/sightseeing/${stand.city.toLowerCase().replace(/\s+/g, '-')}`, icon: MapPin, desc: 'Explore tourist attractions' },
              { title: `One-Way Cab from ${stand.city}`, href: `/one-way-cab`, icon: Car, desc: 'Affordable outstation cabs' },
              { title: 'Tour Packages', href: '/tour-package', icon: Navigation, desc: 'Multi-day curated tours' },
            ].map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-6 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <link.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold group-hover:text-amber-400 transition-colors mb-1">{link.title}</h3>
                <p className="text-sm text-gray-400">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Bus Stand Taxi Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
              Other <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">Bus Stand Taxi Services</span>
            </h2>
            <p className="text-gray-400 text-lg">Explore cab services at other bus stands across India</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(allStands)
              .filter(([key]) => key !== slug)
              .slice(0, 6)
              .map(([key, s]) => (
                <Link
                  key={key}
                  href={`/bus-stand-taxi/${key}`}
                  className="group bg-white/[0.04] backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 p-6 transition-all duration-500 hover:-translate-y-1 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Bus className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold group-hover:text-amber-400 transition-colors">{s.name}</h3>
                    <p className="text-sm text-gray-400">{s.city}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-amber-400 transition-all group-hover:translate-x-1 flex-shrink-0" />
                </Link>
              ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/bus-stand-taxi"
              className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-yellow-300 transition-colors text-lg"
            >
              View All Bus Stand Taxi Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-500" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-yellow-300/20 rounded-full blur-3xl" />

            <div className="relative px-8 py-16 sm:px-16 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-white text-sm font-semibold">Available Right Now</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
                Need a Cab from {stand.name}?
              </h2>
              <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
                Book your ride now. Comfortable, safe, and affordable travel from {stand.name}, {stand.city}. Available 24/7 with fixed transparent fares.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:7668570551"
                  onClick={() => trackPhoneCall('bus_stand')}
                  className="inline-flex items-center gap-3 bg-white text-amber-700 font-black px-10 py-5 rounded-2xl hover:bg-amber-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 text-lg"
                >
                  <Phone className="w-6 h-6" />
                  Call 7668570551
                </a>
                <a
                  href="https://wa.me/917668570551"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('bus_stand')}
                  className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white font-bold px-10 py-5 rounded-2xl border-2 border-white/30 hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 text-lg"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
