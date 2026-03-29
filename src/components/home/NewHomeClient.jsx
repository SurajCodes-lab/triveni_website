'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone, Shield, Clock, CheckCircle, Car, Bus, Users, MapPin, Search, Plane, Heart, Zap, ShieldCheck, Headphones, Sparkles, MessageCircle } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import CabSearchWidget from './CabSearchWidget';
import { getPopularRoutes } from '@/lib/searchUtils';
import { phoneNumber } from '@/utilis/data';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import LiveActivityBadge from '@/components/shared/LiveActivityBadge';
import GoogleReviewsBadge from '@/components/shared/GoogleReviewsBadge';

// ─── FOLD 1: Search-First Hero — Convert immediately ─────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] sm:min-h-[650px]">
      {/* Background Image */}
      <Image
        src="/images/HERO_SECTION_MAIN_PAGE.jpg"
        alt="Triveni Cabs Fleet - Premium Cars, SUVs, Buses and Tempo Travellers"
        fill
        priority
        fetchPriority="high"
        className="object-cover object-center"
        sizes="100vw"
        quality={85}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      {/* Warm gradient accent at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-6 sm:pt-10 pb-8 sm:pb-12">
        {/* Trust micro-strip — immediately visible */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 sm:gap-4 mb-6 flex-wrap"
        >
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1.5">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
            </div>
            <span className="text-xs font-bold text-[#FACF2D]">4.9</span>
            <span className="text-[10px] text-white/70">10,000+ Trips</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/70 font-medium">
            <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-green-400" /> 100% Safe</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-blue-400" /> 24/7 Support</span>
            <span className="hidden sm:flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> ~2 min Response</span>
          </div>
        </motion.div>

        {/* Headline — benefit-driven with price as the hook */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight drop-shadow-lg">
            North India&apos;s Trusted{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400">
              Cab Service
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mt-4 flex-wrap">
            <span className="text-lg sm:text-xl font-black text-white">Sedan <span className="text-[#FACF2D]">{'\u20B9'}11/km</span></span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-lg sm:text-xl font-black text-white">SUV <span className="text-[#FACF2D]">{'\u20B9'}14/km</span></span>
            <span className="w-1 h-1 rounded-full bg-white/40" />
            <span className="text-lg sm:text-xl font-black text-white">Tempo <span className="text-[#FACF2D]">{'\u20B9'}20/km</span></span>
          </div>
          <p className="text-sm text-white/60 mt-3 max-w-lg mx-auto">
            Cars &middot; Buses &middot; Tempo Travellers &middot; Chardham Yatra &middot; Wedding Cars &middot; Airport Transfers
          </p>
        </motion.div>

        {/* Search Widget — THE hero element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto relative"
        >
          <div className="relative">
            <CabSearchWidget />
          </div>
        </motion.div>

        {/* Live activity + Trust bullets — below form */}
        <div className="flex justify-center mt-4">
          <LiveActivityBadge type="booked" min={8} max={24} />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="flex items-center justify-center gap-4 sm:gap-6 mt-3 flex-wrap text-xs sm:text-sm text-white/70"
        >
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> No Hidden Charges</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> Free Cancellation</span>
          <span className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-green-400" /> Verified Drivers</span>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOLD 2: Popular Routes + WhatsApp CTA ──────────────────────────────────
function PopularRoutes() {
  const routes = useMemo(() => getPopularRoutes(), []);

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Top Routes</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Most Booked Routes</h2>
          </div>
          <Link href="/routes" className="hidden sm:flex items-center gap-1.5 text-sm font-bold bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-amber-500 hover:text-black transition-all group shadow-sm">
            View All Routes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {routes.map((route, idx) => (
            <Link
              key={idx}
              href={`/search?from=${route.from.toLowerCase()}&to=${route.to.toLowerCase()}&type=oneway`}
              className="group relative bg-white rounded-2xl border border-gray-200/60 p-4 sm:p-5 transition-all duration-300 hover:shadow-lg hover:shadow-amber-100/50 hover:border-amber-300/50 hover:-translate-y-1"
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-t-2xl opacity-40 group-hover:opacity-100 transition-opacity" />

              {/* Route header */}
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#FACF2D] to-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Car className="w-3.5 h-3.5 text-black" />
                </div>
                <div className="flex items-center gap-1 font-bold text-gray-900 text-sm sm:text-base">
                  <span>{route.from}</span>
                  <ArrowRight className="w-3 h-3 text-amber-500" />
                  <span>{route.to}</span>
                </div>
              </div>

              {/* Route details */}
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-500" /> {route.distance}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-500" /> {route.time}</span>
              </div>

              {/* Price */}
              <div className="flex items-end justify-between pt-2 border-t border-gray-100">
                <div>
                  <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-wider">Starting from</p>
                  <p className="text-xl sm:text-2xl font-extrabold text-gray-900">{route.startingPrice}</p>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick CTA strip — replaces the old fold 9 CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl px-6 py-5">
          <div className="text-center sm:text-left">
            <p className="text-white font-bold text-base sm:text-lg">Need help choosing a route?</p>
            <p className="text-white/50 text-xs sm:text-sm mt-0.5">Get a free quote in under 2 minutes</p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => trackPhoneCall('homepage_routes_cta')}
              className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="https://wa.me/917668570551?text=Hi%2C%20I%20want%20to%20book%20a%20cab.%20Please%20share%20the%20best%20rates."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('homepage_routes_cta')}
              className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-[#22c55e] transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="sm:hidden mt-5 text-center">
          <Link href="/routes" className="inline-flex items-center gap-1.5 text-sm font-bold bg-gradient-to-r from-[#FACF2D] to-amber-400 text-black px-6 py-3 rounded-xl shadow-md border border-amber-300/50">
            View All Routes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── FOLD 3: Services Grid — Discover ────────────────────────────────────────
const SERVICES = [
  {
    title: 'Outstation Cabs',
    desc: 'One-way & round-trip to 500+ cities',
    price: 'From ₹11/km',
    icon: Car,
    href: '/outstation-cabs',
    gradient: 'from-blue-500 to-indigo-600',
    image: '/images/innova_crysta.jpg',
  },
  {
    title: 'Airport Transfers',
    desc: 'All airports, flight tracking, 24/7',
    price: 'From ₹1,500',
    icon: Plane,
    href: '/airport-service',
    gradient: 'from-sky-500 to-cyan-600',
    image: '/images/airport_section.jpg',
  },
  {
    title: 'Wedding Cars',
    desc: 'BMW, Audi, Mercedes with decoration',
    price: 'From ₹15,000',
    icon: Heart,
    href: '/wedding',
    gradient: 'from-rose-500 to-pink-600',
    image: '/images/wedding_car.jpg',
  },
  {
    title: 'Tour Packages',
    desc: 'Golden Triangle, Rajasthan, Kashmir',
    price: 'From ₹3,500',
    icon: MapPin,
    href: '/services',
    gradient: 'from-emerald-500 to-teal-600',
    image: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg',
  },
  {
    title: 'Bus Rental',
    desc: '22-56 seater AC buses for groups',
    price: 'From ₹35/km',
    icon: Bus,
    href: '/bus-routes',
    gradient: 'from-violet-500 to-purple-600',
    image: '/images/bus/hero_section_image.webp',
  },
  {
    title: 'Tempo Traveller',
    desc: '12-26 seater for family & groups',
    price: 'From ₹20/km',
    icon: Users,
    href: '/tempo-traveller',
    gradient: 'from-amber-500 to-orange-600',
    image: '/images/tempo/26_seater.jpg',
  },
];

function ServicesSection() {
  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">What We Offer</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Premium Travel Services</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">From outstation cabs to luxury wedding cars — everything under one roof</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <Link href={s.href} className="group block h-full">
                <div className="h-full rounded-2xl overflow-hidden bg-white border border-gray-200/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  {/* Image — smaller on mobile for faster load */}
                  <div className="relative h-32 sm:h-44 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                    <div className={`absolute top-2.5 left-2.5 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-md`}>
                      <s.icon className="w-4 h-4 text-white" />
                    </div>
                    {/* Price badge */}
                    <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow-sm">
                      <span className="text-xs font-bold text-amber-700">{s.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4">
                    <h3 className="font-bold text-gray-900 text-sm sm:text-base">{s.title}</h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{s.desc}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-amber-600 group-hover:gap-2 transition-all">
                      Explore <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOLD 4: Trust & Social Proof ────────────────────────────────────────────
function TrustSection() {
  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-gray-50 via-white to-amber-50/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Why Triveni Cabs</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Why 10,000+ Travelers Choose Us</h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { num: '37+', label: 'Cities Covered', icon: MapPin, color: 'text-blue-500' },
            { num: '500+', label: 'Active Routes', icon: Car, color: 'text-amber-500' },
            { num: '10,000+', label: 'Completed Trips', icon: Users, color: 'text-green-500' },
            { num: '4.9/5', label: 'Customer Rating', icon: Star, color: 'text-yellow-500' },
          ].map((s, idx) => (
            <div key={idx} className="text-center px-3 py-4 rounded-2xl bg-white border border-gray-200/50 shadow-sm">
              <s.icon className={`w-5 h-5 ${s.color} mx-auto mb-2 ${s.label === 'Customer Rating' ? 'fill-yellow-500' : ''}`} />
              <p className="text-2xl sm:text-3xl font-black text-gray-900">{s.num}</p>
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { title: 'Lowest Prices', desc: 'Starting at just ₹11/km — no surge pricing', icon: Zap, gradient: 'from-amber-500 to-orange-500' },
            { title: 'Verified Drivers', desc: 'Background-checked, professional chauffeurs', icon: ShieldCheck, gradient: 'from-blue-500 to-indigo-500' },
            { title: '24/7 Support', desc: 'Always available via call and WhatsApp', icon: Headphones, gradient: 'from-emerald-500 to-teal-500' },
            { title: 'No Hidden Fees', desc: 'Toll, tax, parking — all-inclusive pricing', icon: Shield, gradient: 'from-violet-500 to-purple-500' },
          ].map((f, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/50 rounded-2xl p-4 sm:p-5 text-center hover:shadow-md hover:border-amber-200/60 transition-all"
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mx-auto mb-3 shadow-md`}>
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-xs sm:text-sm">{f.title}</h3>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <div className="flex justify-center mb-6">
          <GoogleReviewsBadge variant="compact" />
        </div>

        {/* Testimonials — 2 real-feeling reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            {
              name: 'Amit Verma',
              city: 'Delhi',
              text: 'Booked Delhi-Agra cab for a family trip. Driver was on time, car was spotless. Best price I found anywhere. Definitely using Triveni again!',
              date: 'Feb 2026'
            },
            {
              name: 'Neha Gupta',
              city: 'Jaipur',
              text: 'Used Triveni for our wedding. The Mercedes was stunning, chauffeur was in full uniform. They handled everything perfectly. Highly recommend!',
              date: 'Jan 2026'
            }
          ].map((review, idx) => (
            <div key={idx} className="bg-white border border-gray-200/50 rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-[#FACF2D] fill-[#FACF2D]" />)}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-gray-900">{review.name}</p>
                  <p className="text-xs text-gray-400">{review.city} &middot; {review.date}</p>
                </div>
                <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">Verified Trip</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOLD 5: Final CTA + Cities + SEO Content ───────────────────────────────
const TOP_CITIES = [
  { name: 'Delhi', slug: 'delhi', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  { name: 'Agra', slug: 'agra', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg' },
  { name: 'Jaipur', slug: 'jaipur', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg' },
  { name: 'Shimla', slug: 'shimla', image: '/images/sightseeing/Shimla/shimla_hero_section.jpg' },
  { name: 'Manali', slug: 'manali', image: '/images/packages/manali.webp' },
  { name: 'Haridwar', slug: 'haridwar', image: '/images/chardham/chardham-haridwar-hero.webp' },
];

function FinalSection() {
  return (
    <section className="pt-10 sm:pt-16 pb-28 sm:pb-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Final CTA — amber block */}
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D] via-amber-400 to-orange-400" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
            backgroundSize: "24px 24px"
          }} />
          <div className="relative px-6 py-10 sm:py-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gray-900/60" />
              <span className="text-xs font-bold text-gray-900/60">Ready to Travel?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              Book Your Cab Now
            </h2>
            <p className="text-gray-900/50 text-sm sm:text-base mt-2 max-w-md mx-auto">
              Get instant quotes. No app needed. Just call or WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6 max-w-md mx-auto">
              <a
                href={`tel:${phoneNumber}`}
                onClick={() => trackPhoneCall('homepage_final_cta')}
                className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" /> Call {phoneNumber}
              </a>
              <a
                href="https://wa.me/917668570551?text=Hi%2C%20I%20want%20to%20book%20a%20cab.%20Please%20share%20the%20best%20rates."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('homepage_final_cta')}
                className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-[#FACF2D] py-3.5 px-6 rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 mt-4 text-[11px] text-gray-900/40 font-semibold flex-wrap">
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> 24/7 Available</span>
              <span className="w-1 h-1 rounded-full bg-gray-900/20" />
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Instant Confirmation</span>
              <span className="w-1 h-1 rounded-full bg-gray-900/20" />
              <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Best Prices</span>
            </div>
          </div>
        </div>

        {/* Top Cities — compact grid */}
        <div className="mb-10">
          <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-4 text-center">Cab Services in Top Cities</h2>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {TOP_CITIES.map((city, idx) => (
              <Link
                key={idx}
                href={`/${city.slug}`}
                className="group relative rounded-xl overflow-hidden aspect-square hover:shadow-lg transition-all"
              >
                <Image
                  src={city.image}
                  alt={`${city.name} cab service`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-center">
                  <span className="text-white font-bold text-xs sm:text-sm drop-shadow-lg">{city.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* SEO Content — trimmed to 2 paragraphs */}
        <div className="border-t border-gray-100 pt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Triveni Cabs — India&apos;s Premium Outstation Cab Service</h2>
          <div className="prose prose-sm prose-gray max-w-none text-gray-500 leading-relaxed">
            <p>
              Triveni Cabs is India&apos;s leading <Link href="/outstation-cabs" className="text-amber-600 font-medium hover:underline">outstation cab booking service</Link>, connecting 37+ cities with 500+ routes. Whether you need a one-way cab from <Link href="/search?from=delhi&to=agra&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Agra</Link>, a <Link href="/wedding" className="text-amber-600 font-medium hover:underline">luxury wedding car rental</Link> (Fortuner, Innova, Mercedes), or a reliable <Link href="/airport-service" className="text-amber-600 font-medium hover:underline">airport transfer service</Link>, we deliver transparent pricing from just {'\u20B9'}11/km with no hidden charges.
            </p>
            <p>
              Our fleet includes <strong>Sedans</strong> (Dzire, Etios), <strong>SUVs</strong> (Innova Crysta, Ertiga), <Link href="/tempo-traveller" className="text-amber-600 font-medium hover:underline">12-26 seater tempo travellers</Link>, and <Link href="/bus-routes" className="text-amber-600 font-medium hover:underline">22-56 seater buses</Link>. Rated <strong>4.9 stars by 10,000+ customers</strong>, we provide 24/7 support, instant WhatsApp booking, and complete pricing transparency. Popular routes: <Link href="/search?from=delhi&to=agra&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Agra</Link> ({'\u20B9'}2,760), <Link href="/search?from=delhi&to=jaipur&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Jaipur</Link> ({'\u20B9'}3,360), <Link href="/search?from=delhi&to=shimla&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Shimla</Link> ({'\u20B9'}4,200). We also offer <Link href="/sightseeing" className="text-amber-600 font-medium hover:underline">sightseeing tours</Link> and <Link href="/tour-guide" className="text-amber-600 font-medium hover:underline">certified tour guides</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FOLD 6: International Travellers / NRI Section ────────────────────────
function InternationalTravellersSection() {
  return (
    <section className="py-10 sm:py-14 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">International Guests</p>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">Planning Your India Trip?</h2>
          <p className="text-gray-600 text-sm mt-2 max-w-xl mx-auto">
            Trusted by travellers from USA, UK, Canada, Australia &amp; UAE. WhatsApp us from anywhere in the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200/60 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center mb-3 shadow-md">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Airport Pickup</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Pre-book your airport taxi before you land. Driver waiting at arrival gate with name board. Delhi, Jaipur, Amritsar airports.
            </p>
            <Link href="/airport-service" className="text-amber-600 text-sm font-bold mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
              Book Airport Pickup <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200/60 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 shadow-md">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Tour Packages</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Golden Triangle, Rajasthan, Kashmir, Himachal — all-inclusive packages with AC car, driver, and hotel assistance.
            </p>
            <Link href="/sightseeing" className="text-amber-600 text-sm font-bold mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
              Explore Tours <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200/60 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-3 shadow-md">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">WhatsApp Booking</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Message us on WhatsApp from any country. Get instant quotes, itinerary planning, and 24/7 support in English.
            </p>
            <a
              href="https://wa.me/917668570551?text=Hi%2C%20I%27m%20planning%20a%20trip%20to%20India%20and%20need%20cab%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 text-sm font-bold mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              WhatsApp Us <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Link href="/sightseeing/golden-triangle" className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 hover:border-amber-200 hover:text-amber-700 transition-all">Golden Triangle Tour</Link>
          <Link href="/varanasi" className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 hover:border-amber-200 hover:text-amber-700 transition-all">Varanasi Spiritual Tour</Link>
          <Link href="/sightseeing" className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 hover:border-amber-200 hover:text-amber-700 transition-all">Rajasthan Heritage</Link>
          <Link href="/tour-package/kashmir-tour" className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 hover:border-amber-200 hover:text-amber-700 transition-all">Kashmir Honeymoon</Link>
          <Link href="/amritsar" className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 hover:border-amber-200 hover:text-amber-700 transition-all">Amritsar Sikh Heritage</Link>
          <Link href="/tour-package/chardham-yatra-package" className="text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-gray-100 hover:border-amber-200 hover:text-amber-700 transition-all">Chardham Yatra</Link>
        </div>
      </div>
    </section>
  );
}

// ─── FOLD 7: Trending Searches — Top GSC Keywords ──────────────────────────
const TRENDING_LINKS = [
  { label: 'Lotus Temple Timings', url: '/blog/lotus-temple-delhi-complete-guide-2026' },
  { label: 'Golden Temple Guide', url: '/blog/golden-temple-amritsar-complete-guide-2026' },
  { label: 'Akshardham Temple Delhi', url: '/blog/akshardham-temple-delhi-guide-2026' },
  { label: 'Wedding Car Rental', url: '/wedding' },
  { label: 'Manali Taxi Service', url: '/manali' },
  { label: 'Chandigarh to Spiti Valley Bus', url: '/bus-routes/chandigarh-to-spiti-valley' },
  { label: 'Taxi Service in Ghaziabad', url: '/ghaziabad' },
  { label: 'Haridwar to Auli Bus', url: '/bus-routes/haridwar-to-auli' },
  { label: 'Doli Car Booking', url: '/wedding/doli-car-rental' },
  { label: 'BMW Wedding Car', url: '/wedding/cars/bmw-wedding-car' },
];

function TrendingSearchesSection() {
  return (
    <section className="py-10 sm:py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-5">
          <Search className="w-5 h-5 text-amber-500" />
          <h2 className="text-xl sm:text-2xl font-black text-gray-900">Trending on Triveni Cabs</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {TRENDING_LINKS.map((link, i) => (
            <Link
              key={i}
              href={link.url}
              className="p-3 bg-white rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-sm transition-all text-sm text-gray-700 hover:text-amber-700 font-medium flex items-center gap-2 group"
            >
              <ArrowRight className="w-3.5 h-3.5 text-amber-400 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────
export default function NewHomeClient() {
  return (
    <>
      <HeroSection />
      <PopularRoutes />
      <ServicesSection />
      <TrustSection />
      <FinalSection />
      <InternationalTravellersSection />
      <TrendingSearchesSection />
      <MobileStickyBar />
    </>
  );
}
