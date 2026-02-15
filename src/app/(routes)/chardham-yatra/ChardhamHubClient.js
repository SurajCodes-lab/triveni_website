'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle } from '@/components/ui/icons';

export default function ChardhamHubClient({ vehicleHubs, dhamPages, packagePages, allRoutes, imageBank }) {
  const [mounted, setMounted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => { setMounted(true); }, []);

  const routePages = allRoutes.filter(r => r.pageType === 'route').slice(0, 8);

  const dhamColors = [
    { name: 'Kedarnath', border: 'border-cyan-400/30 hover:border-cyan-400/60', text: 'text-cyan-400', glow: 'hover:shadow-cyan-500/10' },
    { name: 'Badrinath', border: 'border-violet-400/30 hover:border-violet-400/60', text: 'text-violet-400', glow: 'hover:shadow-violet-500/10' },
    { name: 'Gangotri', border: 'border-amber-400/30 hover:border-amber-400/60', text: 'text-amber-400', glow: 'hover:shadow-amber-500/10' },
    { name: 'Yamunotri', border: 'border-rose-400/30 hover:border-rose-400/60', text: 'text-rose-400', glow: 'hover:shadow-rose-500/10' },
  ];

  const trustFeatures = [
    { icon: Mountain, title: 'Experienced Hill Drivers', desc: '10+ years on Char Dham mountain roads. They know every turn, every safe stop.' },
    { icon: Shield, title: 'Safety First', desc: 'GPS tracked vehicles, verified drivers, first-aid equipped. Your safety is non-negotiable.' },
    { icon: Star, title: '4.8★ Rated Service', desc: '2,450+ happy pilgrims. Rated 4.8/5 on Google for Char Dham travel services.' },
    { icon: IndianRupee, title: 'Transparent Pricing', desc: 'No hidden charges. Fuel, tolls, and driver included. You see the full cost upfront.' },
    { icon: Phone, title: '24/7 Trip Support', desc: 'Dedicated trip coordinator for your entire yatra. Call anytime, day or night.' },
    { icon: CheckCircle, title: 'No Hidden Charges', desc: 'What we quote is what you pay. GST (5%) is the only additional. Period.' },
  ];

  const comparisonData = [
    { vehicle: 'Swift Dzire (Sedan)', seats: 4, perKm: 12, est12Day: '₹38,400', bestFor: 'Couple / Solo', popular: false },
    { vehicle: 'Maruti Ertiga', seats: 6, perKm: 15, est12Day: '₹48,000', bestFor: 'Small Family', popular: false },
    { vehicle: 'Innova Crysta', seats: 7, perKm: 18, est12Day: '₹57,600', bestFor: 'Family', popular: true },
    { vehicle: 'Toyota Fortuner', seats: 7, perKm: 25, est12Day: '₹80,000', bestFor: 'VIP / Premium', popular: false },
    { vehicle: '22-Seater Mini Bus', seats: 22, perKm: 32, est12Day: '₹1,02,400', bestFor: 'Medium Group', popular: false },
    { vehicle: '35-Seater Coach', seats: 35, perKm: 38, est12Day: '₹1,21,600', bestFor: 'Large Group', popular: false },
    { vehicle: '45-Seater Volvo', seats: 45, perKm: 48, est12Day: '₹1,53,600', bestFor: 'Premium Group', popular: false },
  ];

  const hubFaqs = [
    { q: 'Which is the best car for Char Dham Yatra?', a: 'The Toyota Innova Crysta is the most recommended car for Char Dham Yatra due to its powerful diesel engine, spacious 7-seater cabin, and proven reliability on Himalayan roads. For budget travel, Ertiga (₹15/km) is excellent for families of 4-6. For VIP comfort, the Toyota Fortuner with 4x4 is unmatched.' },
    { q: 'How much does Char Dham Yatra by car cost from Delhi?', a: 'Char Dham Yatra by car from Delhi (12 days) costs: Sedan ₹38,400, Ertiga ₹48,000, Innova Crysta ₹57,600, Fortuner ₹80,000. This includes vehicle, fuel, driver, and tolls. Accommodation and meals are extra. From Haridwar, costs are 15-20% lower due to shorter distance.' },
    { q: 'Can a bus reach all four Char Dhams?', a: 'Buses can reach the base points of all four Dhams. However, the last stretches to some temples (like Gaurikund for Kedarnath) require smaller local vehicles. Our team arranges seamless transfers at these points so your group experience is uninterrupted.' },
    { q: 'Is a sedan safe for Char Dham mountain roads?', a: 'Yes, our Swift Dzire sedans are well-maintained and driven by experienced hill drivers who know every turn of the Char Dham route. The modern Dzire handles paved mountain roads well. The key advantage is exceptional fuel efficiency (22-28 km/l), making it the most economical choice.' },
    { q: 'When is the best time for Char Dham Yatra 2026?', a: 'The best time for Char Dham Yatra 2026 is May-June (opening season, pleasant weather) and September-October (post-monsoon, clear skies). Temples typically open in late April/early May and close in November. Avoid July-August monsoon season due to landslide risks.' },
  ];

  return (
    <div className="min-h-screen bg-indigo-950">
      {/* ===== HERO: Sacred Mosaic ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 4-Panel Mosaic Background */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
          {[imageBank.temples.kedarnath, imageBank.temples.badrinath, imageBank.temples.gangotri, imageBank.temples.yamunotri].map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image src={img} alt={`Char Dham Temple ${i + 1}`} fill className="object-cover opacity-40" sizes="50vw" />
            </div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 via-slate-950/80 to-indigo-950/95" />

        {/* Sacred Geometry Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, #FFD700 1px, transparent 1px), radial-gradient(circle at 75% 75%, #FFD700 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating Gold Particles */}
        {mounted && Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
            style={{ left: `${Math.random() * 100}%`, bottom: '-5%' }}
            animate={{ y: [0, -window.innerHeight * 1.2], opacity: [0, 0.8, 0] }}
            transition={{ duration: 10 + Math.random() * 8, repeat: Infinity, delay: Math.random() * 5 }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#FF6B00]/20 backdrop-blur-md border border-[#FF6B00]/30 rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
            <span className="text-sm font-bold text-[#FFD700] uppercase tracking-widest">Char Dham Yatra 2026</span>
            <Sparkles className="w-4 h-4 text-[#FFD700]" />
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif mb-6 drop-shadow-2xl leading-tight"
          >
            Your Sacred Journey<br /><span className="text-[#FFD700]">Begins Here</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-indigo-200/80 max-w-2xl mx-auto mb-8"
          >
            Choose Your Vehicle. Chart Your Path. Experience the Divine.
          </motion.p>

          {/* Stats Row */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base text-indigo-200"
          >
            {['35+ Routes', '8 Vehicle Types', '4 Sacred Dhams', '4 Origin Cities'].map((stat, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                {stat}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="tel:+917668570551"
              className="flex items-center gap-3 bg-gradient-to-r from-[#FF6B00] to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-[#FF6B00]/30 hover:shadow-[#FF6B00]/50 transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" /> Call 7668570551
            </a>
            <a href="https://wa.me/917668570551?text=Hello!%20I%20want%20to%20book%20a%20car%20for%20Char%20Dham%20Yatra%202026" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 2: Choose Your Vehicle ===== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-indigo-950 to-slate-950">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#FFD700]/40" />
              <Sparkles className="w-5 h-5 text-[#FFD700]" />
              <div className="h-px w-12 bg-[#FFD700]/40" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4">Choose Your Vehicle</h2>
            <p className="text-indigo-300/70 text-lg">From budget sedans to luxury SUVs and group buses</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicleHubs.map((hub, idx) => (
              <motion.div key={hub.slug}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/chardham-yatra/${hub.slug}`}
                  className="block bg-white/[0.04] backdrop-blur border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF6B00]/40 hover:shadow-xl hover:shadow-[#FF6B00]/10 transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={hub.vehicle.image} alt={`${hub.vehicle.name} for Char Dham Yatra`} fill className="object-cover group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-white font-bold text-lg">{hub.vehicle.name}</span>
                      <span className="bg-[#FF6B00]/90 text-white text-xs font-bold px-2 py-1 rounded-full">{hub.vehicle.seats} Seats</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#FFD700]/10 text-[#FFD700] text-xs font-bold px-3 py-1 rounded-full border border-[#FFD700]/20">₹{hub.vehicle.perKm}/km</span>
                      <span className="text-indigo-400/60 text-xs">{hub.vehicle.bestFor}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hub.vehicle.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="bg-white/5 text-indigo-300/70 text-xs px-2 py-1 rounded-md">{f}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-indigo-400/60 text-sm">From <span className="text-[#FFD700] font-bold">{hub.estimatedPrice}</span></span>
                      <span className="flex items-center gap-1 text-[#FF6B00] text-sm font-semibold group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Popular Routes ===== */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-3">Popular Routes</h2>
            <p className="text-indigo-300/60">Most booked Char Dham routes by our pilgrims</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {routePages.map((route, idx) => (
              <motion.div key={route.slug}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/chardham-yatra/${route.slug}`}
                  className="block bg-white/[0.03] border border-white/10 rounded-xl p-5 hover:border-[#FF6B00]/30 hover:bg-white/[0.06] transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-white font-semibold text-sm">{route.origin}</span>
                    <ArrowRight className="w-3 h-3 text-[#FF6B00]" />
                    <span className="text-white font-semibold text-sm">{route.destination}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="bg-indigo-500/10 text-indigo-300 text-xs px-2 py-0.5 rounded">{route.vehicle.category}</span>
                    <span className="bg-indigo-500/10 text-indigo-300 text-xs px-2 py-0.5 rounded">{route.duration}</span>
                  </div>
                  <span className="text-[#FFD700] font-bold text-sm">From {route.estimatedPrice}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: The Four Sacred Dhams ===== */}
      <section className="py-20 md:py-28 px-4 bg-gradient-to-b from-slate-950 to-indigo-950">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4">The Four Sacred Dhams</h2>
            <p className="text-indigo-300/60 text-lg">Each Dham holds the key to a different dimension of divinity</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dhamPages.map((dham, idx) => (
              <motion.div key={dham.slug}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.15 }}
              >
                <Link href={`/chardham-yatra/${dham.slug}`}
                  className={`block relative h-64 md:h-80 rounded-2xl overflow-hidden border ${dhamColors[idx].border} ${dhamColors[idx].glow} shadow-lg transition-all group`}
                >
                  <Image src={dham.images.hero} alt={`${dham.destination} Temple - Char Dham Yatra`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className={`text-2xl md:text-3xl font-bold font-serif ${dhamColors[idx].text} mb-1`}>{dham.destination}</h3>
                    <p className="text-white/70 text-sm mb-3">{dham.destinationData.altitude} altitude</p>
                    <span className="flex items-center gap-1 text-white text-sm font-semibold group-hover:gap-2 transition-all">
                      Plan Your Visit <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: Why Triveni Cabs ===== */}
      <section className="py-20 px-4 bg-indigo-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-3">Why Triveni Cabs for Char Dham</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div key={idx}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className="bg-white/[0.04] backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-[#FF6B00]/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#FF6B00]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-indigo-300/60 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Budget Comparison ===== */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-3">Vehicle Price Comparison</h2>
            <p className="text-indigo-300/60">Delhi to Char Dham Yatra — 12 Day Round Trip (3,200 km estimated)</p>
          </motion.div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-indigo-400/70 text-sm font-medium">Vehicle</th>
                  <th className="py-3 px-4 text-indigo-400/70 text-sm font-medium">Seats</th>
                  <th className="py-3 px-4 text-indigo-400/70 text-sm font-medium">Per Km</th>
                  <th className="py-3 px-4 text-indigo-400/70 text-sm font-medium">Est. 12-Day Cost</th>
                  <th className="py-3 px-4 text-indigo-400/70 text-sm font-medium">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={`border-b border-white/5 ${row.popular ? 'bg-[#FF6B00]/5 border-[#FF6B00]/20' : ''} hover:bg-white/[0.03] transition-colors`}>
                    <td className="py-4 px-4 text-white font-semibold text-sm">
                      {row.vehicle}
                      {row.popular && <span className="ml-2 bg-[#FF6B00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Most Popular</span>}
                    </td>
                    <td className="py-4 px-4 text-indigo-300 text-sm">{row.seats}</td>
                    <td className="py-4 px-4 text-[#FFD700] font-bold text-sm">₹{row.perKm}</td>
                    <td className="py-4 px-4 text-white font-bold text-sm">{row.est12Day}</td>
                    <td className="py-4 px-4 text-indigo-300/70 text-sm">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {comparisonData.map((row, idx) => (
              <div key={idx} className={`bg-white/[0.04] border ${row.popular ? 'border-[#FF6B00]/30' : 'border-white/10'} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-bold text-sm">{row.vehicle}</span>
                  {row.popular && <span className="bg-[#FF6B00] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">POPULAR</span>}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-indigo-300/60">{row.seats} Seats | ₹{row.perKm}/km</span>
                  <span className="text-[#FFD700] font-bold">{row.est12Day}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: SEO Content ===== */}
      <section className="py-16 px-4 bg-indigo-950/30">
        <div className="max-w-4xl mx-auto prose prose-invert prose-lg">
          <h2 className="text-3xl font-bold text-white font-serif">Complete Guide to Char Dham Yatra by Car, SUV & Bus 2026</h2>
          <p className="text-indigo-200/70 leading-relaxed">
            The Char Dham Yatra — encompassing <strong>Yamunotri, Gangotri, Kedarnath, and Badrinath</strong> — is the holiest pilgrimage circuit in Hinduism. Established by Adi Shankaracharya in the 8th century, these four sacred temples in the Garhwal Himalayas of Uttarakhand attract over 30 lakh devotees every year. Triveni Cabs offers the most comprehensive range of vehicles for this divine journey, from budget sedans to luxury SUVs and large group buses.
          </p>
          <p className="text-indigo-200/70 leading-relaxed">
            Choosing the right vehicle is crucial for Char Dham Yatra. The mountainous terrain of Uttarakhand demands powerful engines, reliable braking, and experienced drivers. Our fleet includes the <Link href="/chardham-yatra/by-sedan" className="text-[#FFD700] underline">Swift Dzire (₹12/km)</Link> for budget-conscious couples, the <Link href="/chardham-yatra/by-ertiga" className="text-[#FFD700] underline">Maruti Ertiga (₹15/km)</Link> for small families, the legendary <Link href="/chardham-yatra/by-innova-crysta" className="text-[#FFD700] underline">Toyota Innova Crysta (₹18/km)</Link> as the gold standard, and the premium <Link href="/chardham-yatra/by-fortuner" className="text-[#FFD700] underline">Toyota Fortuner (₹25/km)</Link> with 4x4 capability.
          </p>
          <p className="text-indigo-200/70 leading-relaxed">
            For group pilgrimages, we offer <Link href="/chardham-yatra/by-bus" className="text-[#FFD700] underline">22 to 56-seater AC buses</Link> and <Link href="/tempo-traveller" className="text-[#FFD700] underline">12 to 26-seater tempo travellers</Link>. Whether you are starting from <Link href="/chardham-yatra/delhi-to-chardham-yatra-by-car" className="text-[#FFD700] underline">Delhi</Link>, <Link href="/chardham-yatra/haridwar-to-chardham-yatra-by-car" className="text-[#FFD700] underline">Haridwar</Link>, <Link href="/chardham-yatra/dehradun-to-chardham-yatra-by-car" className="text-[#FFD700] underline">Dehradun</Link>, or <Link href="/chardham-yatra/rishikesh-to-chardham-yatra-by-car" className="text-[#FFD700] underline">Rishikesh</Link>, our experienced mountain drivers will ensure a safe and comfortable yatra. Call <a href="tel:+917668570551" className="text-[#FFD700]">7668570551</a> to book your Char Dham vehicle today.
          </p>
        </div>
      </section>

      {/* ===== SECTION 8: FAQ ===== */}
      <section className="py-20 px-4 bg-slate-950">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white font-serif text-center mb-12"
          >Frequently Asked Questions</motion.h2>

          <div className="space-y-3">
            {hubFaqs.map((faq, idx) => (
              <motion.div key={idx}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: idx * 0.05 }}
                className="bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden"
              >
                <button onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#FFD700] shrink-0 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-indigo-300/70 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: Final CTA ===== */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF6B00] to-amber-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-6">Begin Your Pilgrimage Today</h2>
          <p className="text-white/80 text-lg mb-10">Book early to secure your preferred vehicle for the 2026 Char Dham season. Expert drivers. Transparent pricing. Divine journey.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:+917668570551"
              className="flex items-center gap-3 bg-white text-[#FF6B00] px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-indigo-50 transition-all"
            >
              <Phone className="w-5 h-5" /> Call 7668570551
            </a>
            <a href="https://wa.me/917668570551?text=Hello!%20I%20want%20to%20book%20a%20vehicle%20for%20Char%20Dham%20Yatra%202026" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-black transition-all"
            >
              <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
