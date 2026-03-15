'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Phone, Shield, Clock, CheckCircle, Car, Bus, Users, MapPin, Search, Plane, Heart, Route, Zap, ShieldCheck, Headphones, Sparkles } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import CabSearchWidget from './CabSearchWidget';
import { getPopularRoutes } from '@/lib/searchUtils';
import { phoneNumber } from '@/utilis/data';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import BookingJourney from '@/components/shared/BookingJourney';
import FleetShowcase from '@/components/shared/FleetShowcase';

// ─── Section 1: Bright Hero ───────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-white to-amber-50/30 pt-24 pb-12 sm:pt-28 sm:pb-14">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-[10%] w-[500px] h-[500px] bg-blue-200/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] bg-amber-200/25 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-200/15 rounded-full blur-[130px]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.08) 1px,transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2.5 bg-white/70 backdrop-blur-xl border border-gray-200/60 rounded-full px-5 py-2.5 shadow-sm">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
            </div>
            <span className="text-xs font-bold text-amber-600">4.9</span>
            <span className="w-px h-4 bg-gray-200" />
            <span className="text-[11px] font-medium text-gray-500">10,000+ Travellers Trust Us</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-7"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-black text-gray-900 leading-[0.93] tracking-tight">
            Book Your Ride
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-amber-500 to-orange-500">
              Across India
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed">
            Premium outstation cabs from <span className="text-amber-600 font-bold">{'\u20B9'}11/km</span> — Sedan, SUV, Tempo & Luxury Buses
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 sm:gap-8 mb-8 flex-wrap"
        >
          {[
            { v: '500+', l: 'Routes' },
            { v: '37+', l: 'Cities' },
            { v: '10K+', l: 'Trips' },
            { v: '24/7', l: 'Support' },
          ].map((s, i) => (
            <div key={i} className="px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur border border-gray-200/40 text-center">
              <p className="text-lg sm:text-xl font-black text-gray-900 leading-none">{s.v}</p>
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-1">{s.l}</p>
            </div>
          ))}
        </motion.div>

        {/* Search Widget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <CabSearchWidget />
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-5 mt-5 flex-wrap"
        >
          {[
            { icon: Shield, text: 'No Hidden Charges' },
            { icon: CheckCircle, text: 'Instant Confirmation' },
            { icon: Headphones, text: '24/7 Support' },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-gray-400">
              <b.icon className="w-3.5 h-3.5 text-amber-500" />
              <span>{b.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 2: Popular Routes ──────────────────────────────────────────────
function PopularRoutes() {
  const routes = useMemo(() => getPopularRoutes(), []);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-amber-50/30 via-white to-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Top Routes</p>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Most Booked Routes</h2>
          </div>
          <Link href="/routes" className="hidden sm:flex items-center gap-1.5 text-sm font-bold bg-gray-900 text-white px-5 py-2.5 rounded-xl hover:bg-amber-500 hover:text-black transition-all group shadow-sm">
            View All Routes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routes.map((route, idx) => (
            <Link
              key={idx}
              href={`/search?from=${route.from.toLowerCase()}&to=${route.to.toLowerCase()}&type=oneway`}
              className="group relative bg-white/70 backdrop-blur-xl rounded-[20px] border border-gray-200/50 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 hover:border-amber-300/50 hover:-translate-y-1"
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-t-[20px] opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Route header */}
              <div className="flex items-center gap-2 mb-3 mt-1">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FACF2D] to-amber-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-200/50">
                  <Car className="w-4 h-4 text-black" />
                </div>
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <span>{route.from}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                  <span>{route.to}</span>
                </div>
              </div>

              {/* Route details */}
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-500" /> {route.distance}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-500" /> {route.time}</span>
              </div>

              {/* Price */}
              <div className="flex items-end justify-between pt-3 border-t border-gray-100">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Starting from</p>
                  <p className="text-2xl font-extrabold text-gray-900">{route.startingPrice}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-100 scale-75">
                  <Search className="w-4 h-4 text-amber-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/routes" className="inline-flex items-center gap-1.5 text-sm font-bold bg-gradient-to-r from-[#FACF2D] to-amber-400 text-black px-6 py-3 rounded-xl shadow-md border border-amber-300/50">
            View All Routes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Our Services ────────────────────────────────────────────────
const SERVICES = [
  {
    title: 'Outstation Cabs',
    desc: 'One-way & round-trip cabs to 500+ destinations. Sedan, SUV & Innova.',
    icon: Car,
    href: '/outstation-cabs',
    gradient: 'from-blue-500 to-indigo-600',
    image: '/images/innova_crysta.jpg',
  },
  {
    title: 'Airport Transfers',
    desc: 'Reliable airport pickup & drop at all major airports. Flight tracking.',
    icon: Plane,
    href: '/airport-service',
    gradient: 'from-sky-500 to-cyan-600',
    image: '/images/airport_section.jpg',
  },
  {
    title: 'Wedding Cars',
    desc: 'Fortuner, Innova & luxury cars with floral decoration for your big day.',
    icon: Heart,
    href: '/wedding',
    gradient: 'from-rose-500 to-pink-600',
    image: '/images/wedding_car.jpg',
  },
  {
    title: 'Tour Packages',
    desc: 'Golden Triangle, Rajasthan, Kashmir — all-inclusive tour packages.',
    icon: MapPin,
    href: '/services',
    gradient: 'from-emerald-500 to-teal-600',
    image: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg',
  },
  {
    title: 'Bus Rental',
    desc: '22-56 seater AC buses for corporates, events & group travel.',
    icon: Bus,
    href: '/bus-routes',
    gradient: 'from-violet-500 to-purple-600',
    image: '/images/bus/hero_section_image.webp',
  },
  {
    title: 'Tempo Traveller',
    desc: '12-26 seater AC tempo for family trips, pilgrimages & group outings.',
    icon: Users,
    href: '/tempo-traveller',
    gradient: 'from-amber-500 to-orange-600',
    image: '/images/tempo/26_seater.jpg',
  },
];

function ServicesSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-gray-50/80 via-white to-blue-50/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">What We Offer</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Premium Travel Services</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">From outstation cabs to luxury wedding cars — everything under one roof</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Link href={s.href} className="group block h-full">
                <div className="h-full rounded-[20px] overflow-hidden bg-white/70 backdrop-blur-xl border border-gray-200/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-400">
                  {/* Image */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
                    <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-amber-600 group-hover:gap-2.5 transition-all">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
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

// ─── Section 4: How It Works ────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Simple Process</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Book a Cab in 3 Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

          {[
            { step: '01', title: 'Search Your Route', desc: 'Enter pickup city, destination, and travel date above', icon: Search, color: 'from-[#FACF2D] to-amber-400', shadow: 'shadow-amber-200/40' },
            { step: '02', title: 'Compare & Choose', desc: 'See all available vehicles with transparent pricing', icon: Car, color: 'from-gray-800 to-gray-900', shadow: 'shadow-gray-400/30' },
            { step: '03', title: 'Book Instantly', desc: 'Confirm via WhatsApp or call — no app needed', icon: WhatsAppIcon, color: 'from-[#25D366] to-[#128C7E]', shadow: 'shadow-green-300/30' },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.12 }}
              className="text-center relative z-10"
            >
              <div className={`w-20 h-20 rounded-[20px] bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 shadow-xl ${s.shadow}`}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-[11px] font-bold text-amber-600 uppercase tracking-[0.2em] mb-1">Step {s.step}</p>
              <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500 mt-1.5 max-w-[240px] mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Why Choose Us — Light Glassy ────────────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-blue-50/50 via-white to-amber-50/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-amber-200/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-200/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Why Triveni Cabs</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Built for Travellers Who Demand the Best</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Lowest Prices', desc: 'Starting at just \u20B911/km — no surge pricing, ever', icon: Zap, stat: '\u20B911/km', gradient: 'from-amber-500 to-orange-500' },
            { title: 'Verified Drivers', desc: 'Background-checked, professional chauffeurs', icon: ShieldCheck, stat: '5,000+', gradient: 'from-blue-500 to-indigo-500' },
            { title: '24/7 Support', desc: 'Always available via call and WhatsApp', icon: Headphones, stat: 'Always On', gradient: 'from-emerald-500 to-teal-500' },
            { title: 'No Hidden Fees', desc: 'Toll, tax, parking — all-inclusive transparent pricing', icon: Shield, stat: 'All-Inclusive', gradient: 'from-violet-500 to-purple-500' },
          ].map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-[20px] p-5 sm:p-6 text-center hover:shadow-lg hover:border-amber-300/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">{f.title}</h3>
              <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">{f.desc}</p>
              <p className="text-lg font-black text-amber-600 mt-3">{f.stat}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '37+', label: 'Cities Covered' },
            { num: '500+', label: 'Active Routes' },
            { num: '10,000+', label: 'Completed Trips' },
            { num: '4.9/5', label: 'Customer Rating' },
          ].map((s, idx) => (
            <div key={idx} className="text-center px-4 py-5 rounded-2xl bg-white/60 backdrop-blur border border-gray-200/40">
              <p className="text-3xl sm:text-4xl font-black text-gray-900">{s.num}</p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Popular Destinations ────────────────────────────────────────
const DESTINATIONS = [
  { name: 'Delhi', slug: 'delhi', price: '\u20B92,760', tag: 'Capital', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  { name: 'Agra', slug: 'agra', price: '\u20B92,760', tag: 'Taj Mahal', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg' },
  { name: 'Jaipur', slug: 'jaipur', price: '\u20B93,360', tag: 'Pink City', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg' },
  { name: 'Shimla', slug: 'shimla', price: '\u20B94,200', tag: 'Hill Station', image: '/images/sightseeing/Shimla/shimla_hero_section.jpg' },
  { name: 'Manali', slug: 'manali', price: '\u20B96,480', tag: 'Adventure', image: '/images/packages/manali.webp' },
  { name: 'Haridwar', slug: 'haridwar', price: '\u20B92,880', tag: 'Pilgrimage', image: '/images/chardham/chardham-haridwar-hero.webp' },
  { name: 'Rishikesh', slug: 'rishikesh', price: '\u20B93,000', tag: 'Yoga Capital', image: '/images/chardham/chardham-rishikesh-hero.webp' },
  { name: 'Amritsar', slug: 'amritsar', price: '\u20B95,400', tag: 'Golden Temple', image: '/images/sightseeing/Agra/Taj_mahal.jpg' },
  { name: 'Chandigarh', slug: 'chandigarh', price: '\u20B93,120', tag: 'Planned City', image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg' },
  { name: 'Varanasi', slug: 'varanasi', price: '\u20B95,400', tag: 'Holy City', image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg' },
  { name: 'Nainital', slug: 'nainital', price: '\u20B93,600', tag: 'Lake District', image: '/images/sightseeing/Nainital/Nainital_hero_section.jpg' },
  { name: 'Mussoorie', slug: 'mussoorie', price: '\u20B93,360', tag: 'Queen of Hills', image: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg' },
  { name: 'Dharamshala', slug: 'dharamshala', price: '\u20B95,400', tag: 'Dalai Lama', image: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg' },
  { name: 'Mathura', slug: 'mathura', price: '\u20B92,400', tag: 'Lord Krishna', image: '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg' },
  { name: 'Pushkar', slug: 'pushkar', price: '\u20B94,200', tag: 'Sacred Lake', image: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg' },
];

function PopularDestinations() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-1">Destinations</p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Cab Services in Top Cities</h2>
          <p className="text-gray-500 text-sm mt-2">One-way & round-trip taxi to India&apos;s most popular destinations</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {DESTINATIONS.map((d, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <Link
                href={`/${d.slug}`}
                className="group relative rounded-[20px] overflow-hidden transition-all duration-400 hover:shadow-xl hover:shadow-amber-100/50 hover:-translate-y-1 block border border-gray-200/30"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={d.image}
                    alt={`${d.name} cab service - ${d.tag}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Tag */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[9px] font-bold text-white uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/30 px-2.5 py-0.5 rounded-full">
                      {d.tag}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FACF2D] group-hover:translate-x-0.5 transition-all" />
                  </div>

                  {/* City info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10">
                    <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">{d.name}</h3>
                    <p className="text-white/70 text-[11px] mt-0.5">from <span className="text-[#FACF2D] font-bold">{d.price}</span></p>
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

// ─── Section 7: Premium CTA Section ─────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Bright amber background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D] via-amber-400 to-orange-400" />
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)",
        backgroundSize: "28px 28px"
      }} />
      {/* Glass blobs */}
      <div className="absolute top-10 right-[15%] w-[300px] h-[300px] rounded-full bg-white/10 blur-[80px]" />
      <div className="absolute bottom-10 left-[10%] w-[250px] h-[250px] rounded-full bg-orange-300/20 blur-[60px]" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gray-900/60" />
            <span className="text-sm font-bold text-gray-900/60">Ready to Travel?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Book Your Cab Now
          </h2>
          <p className="text-gray-900/50 text-lg mt-3 max-w-lg mx-auto">
            Get instant quotes. No app download. No signup. Just search, choose & book.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-lg mx-auto">
            <a
              href={`tel:${phoneNumber}`}
              onClick={() => trackPhoneCall('homepage_cta')}
              className="flex-1 flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 py-4 px-8 rounded-2xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber}
            </a>
            <a
              href="https://wa.me/917668570551?text=Hi%2C%20I%20want%20to%20book%20a%20cab.%20Please%20share%20the%20best%20rates."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('homepage_cta')}
              className="flex-1 flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-[#FACF2D] py-4 px-8 rounded-2xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-900/40 font-semibold flex-wrap">
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Available 24/7</span>
            <span className="w-1 h-1 rounded-full bg-gray-900/20" />
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Instant Confirmation</span>
            <span className="w-1 h-1 rounded-full bg-gray-900/20" />
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> Best Prices Guaranteed</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8: SEO Content ─────────────────────────────────────────────────
function SEOContent() {
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Triveni Cabs — India&apos;s Premium Outstation Cab Service</h2>
        <div className="prose prose-sm prose-gray max-w-none text-gray-500 leading-relaxed">
          <p>
            Triveni Cabs is India&apos;s leading <Link href="/outstation-cabs" className="text-amber-600 font-medium hover:underline">outstation cab booking service</Link>, connecting 37+ cities with 500+ routes. Whether you need a one-way cab from <Link href="/search?from=delhi&to=agra&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Agra</Link>, a <Link href="/wedding" className="text-amber-600 font-medium hover:underline">luxury wedding car rental</Link> (Fortuner, Innova, Mercedes), or a reliable <Link href="/airport-service" className="text-amber-600 font-medium hover:underline">airport transfer service</Link>, we deliver transparent pricing from just {'\u20B9'}11/km with no hidden charges.
          </p>
          <p>
            Our premium fleet includes <strong>Sedan (Swift Dzire, Toyota Etios)</strong>, <strong>SUV (Ertiga, Innova Crysta)</strong>, <Link href="/tempo-traveller" className="text-amber-600 font-medium hover:underline">12-26 seater AC tempo travellers</Link>, and <Link href="/bus-routes" className="text-amber-600 font-medium hover:underline">22-56 seater luxury buses</Link>. Every vehicle is AC, sanitized, GPS-tracked, and driven by verified professional chauffeurs.
          </p>
          <p>
            Our most popular routes include <Link href="/search?from=delhi&to=agra&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Agra taxi</Link> ({'\u20B9'}2,760), <Link href="/search?from=delhi&to=jaipur&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Jaipur cab</Link> ({'\u20B9'}3,360), <Link href="/search?from=delhi&to=shimla&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Shimla taxi</Link> ({'\u20B9'}4,200), and <Link href="/search?from=delhi&to=manali&type=oneway" className="text-amber-600 font-medium hover:underline">Delhi to Manali cab</Link> ({'\u20B9'}6,480). We also offer <Link href="/sightseeing" className="text-amber-600 font-medium hover:underline">sightseeing tours</Link>, <Link href="/religious-tours" className="text-amber-600 font-medium hover:underline">religious pilgrimage tours</Link>, and <Link href="/tour-guide" className="text-amber-600 font-medium hover:underline">certified tour guides</Link> in 14+ cities.
          </p>
          <p>
            Rated <strong>4.9 stars by 10,000+ customers</strong>, Triveni Cabs provides 24/7 customer support, instant WhatsApp booking confirmation, and complete pricing transparency. Experience premium travel at budget-friendly prices — book your cab today.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function NewHomeClient() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip theme="light" />
      <PopularRoutes />
      <ServicesSection />
      <BookingJourney theme="light" />
      <FleetShowcase
        theme="light"
        accentColor="amber"
        title="Our Premium Fleet"
        subtitle="Choose Your Ride"
        whatsappMessage="Hi, I'd like to know about your vehicles."
      />
      <WhyChooseUs />
      <PopularDestinations />
      <CTASection />
      <SEOContent />
      <MobileStickyBar />
    </>
  );
}
