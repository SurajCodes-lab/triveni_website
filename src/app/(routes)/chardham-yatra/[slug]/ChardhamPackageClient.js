'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, Clock, Sun, Award, Crown, Zap, Heart, Package, Bus, Fuel, Route } from '@/components/ui/icons';

// ============================================================================
// CHARDHAM PACKAGE CLIENT — "Royal Yatra" Design
// Each package gets a UNIQUE theme:
//   Luxury (Fortuner) → Gold/Amber on deep navy
//   Budget (Sedan) → Green/Emerald on dark slate
//   Family (Ertiga) → Orange/Warm on dark brown
//   Group (Bus) → Blue/Indigo on dark slate
// Base: Warm dark backgrounds with package-specific accent colors
// Used by 4 special package pages
// ============================================================================

const packageThemes = {
  fortuner: {
    name: 'Luxury',
    icon: Crown,
    gradient: 'from-amber-500 to-yellow-600',
    gradientBg: 'from-amber-500/15 to-yellow-600/15',
    border: 'border-amber-500/30',
    hoverBorder: 'hover:border-amber-500/40',
    text: 'text-amber-400',
    textMuted: 'text-amber-400/60',
    bg: 'bg-amber-500',
    bgPage: 'from-[#0a0a1a] via-[#0d0d20] to-[#0a0a18]',
    shadow: 'shadow-amber-500/20',
    badge: 'VIP PREMIUM',
    tagline: 'The Ultimate Himalayan Luxury Experience',
    included: ['Toyota Fortuner 4x4 with leather seats', 'Experienced VIP driver (10+ yrs mountain)', 'All fuel, tolls, and parking', 'Driver night allowance', 'Free airport/hotel pickup', '24/7 dedicated trip manager', 'First Aid kit & oxygen cylinder', 'Complimentary water bottles daily'],
    excluded: ['Hotel accommodation', 'Meals and snacks', 'Temple donation / offerings', 'Helicopter tickets (if applicable)', 'Personal expenses', 'Travel insurance'],
  },
  sedan: {
    name: 'Budget',
    icon: Zap,
    gradient: 'from-emerald-500 to-green-600',
    gradientBg: 'from-emerald-500/15 to-green-600/15',
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/40',
    text: 'text-emerald-400',
    textMuted: 'text-emerald-400/60',
    bg: 'bg-emerald-500',
    bgPage: 'from-slate-950 via-slate-900 to-slate-950',
    shadow: 'shadow-emerald-500/20',
    badge: 'BEST VALUE',
    tagline: 'Complete Your Yatra Without Breaking the Bank',
    included: ['Swift Dzire AC sedan', 'Experienced mountain driver', 'All fuel and toll taxes', 'Driver allowance', '24/7 helpline support', 'First Aid kit'],
    excluded: ['Hotel accommodation', 'Meals', 'Temple offerings', 'Helicopter tickets', 'Personal expenses', 'Travel insurance'],
  },
  ertiga: {
    name: 'Family',
    icon: Heart,
    gradient: 'from-orange-500 to-rose-500',
    gradientBg: 'from-orange-500/15 to-rose-500/15',
    border: 'border-orange-500/30',
    hoverBorder: 'hover:border-orange-500/40',
    text: 'text-orange-400',
    textMuted: 'text-orange-400/60',
    bg: 'bg-orange-500',
    bgPage: 'from-stone-950 via-stone-900 to-stone-950',
    shadow: 'shadow-orange-500/20',
    badge: 'FAMILY FAVORITE',
    tagline: 'A Sacred Journey the Whole Family Will Cherish',
    included: ['Maruti Ertiga 6-seater AC MPV', 'Experienced family-friendly driver', 'All fuel, tolls, and parking', 'Driver night allowance', 'Child seat available on request', '24/7 helpline support', 'First Aid kit', 'Complimentary water bottles'],
    excluded: ['Hotel accommodation', 'Meals', 'Temple offerings', 'Helicopter tickets', 'Personal expenses', 'Travel insurance'],
  },
  bus45: {
    name: 'Group',
    icon: Users,
    gradient: 'from-blue-500 to-indigo-600',
    gradientBg: 'from-blue-500/15 to-indigo-600/15',
    border: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/40',
    text: 'text-blue-400',
    textMuted: 'text-blue-400/60',
    bg: 'bg-blue-500',
    bgPage: 'from-slate-950 via-gray-900 to-slate-950',
    shadow: 'shadow-blue-500/20',
    badge: 'GROUP SPECIAL',
    tagline: 'The Most Economical Way for Large Groups',
    included: ['AC Volvo/Luxury Coach (45 seats)', 'Experienced bus driver + helper', 'All fuel, tolls, and parking', 'PA system for announcements', 'Luggage storage compartment', '24/7 trip coordinator', 'First Aid kit', 'Local vehicle transfers (narrow roads)'],
    excluded: ['Hotel accommodation', 'Meals', 'Temple offerings', 'Helicopter tickets', 'Personal expenses', 'Travel insurance'],
  },
};

export default function ChardhamPackageClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeDay, setActiveDay] = useState(0);
  useEffect(() => { setMounted(true); }, []);

  const { title, vehicle, destination, duration, distance, distanceKm, estimatedPrice, priceNum, allCarPrices, allBusPrices, allBusOptions, allCarOptions, tempoOptions, itinerary, whyChoose, faqs, images, relatedRoutes, vehicleType } = data;

  const theme = packageThemes[vehicleType] || packageThemes.fortuner;
  const ThemeIcon = theme.icon;
  const whatsappMsg = encodeURIComponent(`Hello! I want to book the ${theme.name} Char Dham Yatra Package 2026`);

  // Per-person cost for group packages
  const perPersonCost = vehicleType === 'bus45' && priceNum > 0 ? Math.round(priceNum / 40) : null;

  return (
    <div className={`min-h-screen bg-gradient-to-b ${theme.bgPage}`}>
      {/* ===== HERO: Package Showcase ===== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image src={images.hero} alt={title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>

        {/* Floating sparkle effect */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1.5 h-1.5 rounded-full ${theme.bg}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                  y: [0, -100],
                }}
                transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.7 }}
                style={{ left: `${15 + i * 14}%`, top: `${60 + (i % 3) * 10}%` }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Package Info */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link href="/chardham-yatra" className="hover:text-white transition-colors">Char Dham Yatra</Link>
                <ChevronRight className="w-3 h-3" />
                <span className={theme.text}>{theme.name} Package</span>
              </div>

              {/* Package badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`inline-flex items-center gap-2 bg-gradient-to-r ${theme.gradientBg} border ${theme.border} rounded-full px-5 py-2 mb-6`}
              >
                <ThemeIcon className={`w-4 h-4 ${theme.text}`} />
                <span className={`${theme.text} text-xs font-bold tracking-widest uppercase`}>{theme.badge}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-3 leading-tight"
              >
                {title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className={`${theme.textMuted} text-lg italic mb-8`}
              >
                {theme.tagline}
              </motion.p>

              {/* Price highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={`inline-block bg-gradient-to-r ${theme.gradientBg} border ${theme.border} rounded-2xl px-8 py-5 mb-8`}
              >
                <p className="text-white/60 text-sm">Starting from</p>
                <div className="flex items-baseline gap-2">
                  <span className={`text-4xl font-bold ${theme.text}`}>{estimatedPrice}</span>
                  <span className="text-white/40 text-sm">for {duration}</span>
                </div>
                <p className="text-white/40 text-xs mt-1">₹{vehicle.perKm}/km | {distance}</p>
                {perPersonCost && (
                  <p className={`${theme.text} text-sm font-semibold mt-2`}>Just ₹{perPersonCost.toLocaleString('en-IN')}/person (40 pax)</p>
                )}
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {[
                  { icon: Users, label: `${vehicle.seats} Seater` },
                  { icon: Calendar, label: duration },
                  { icon: Navigation, label: distance },
                  { icon: Shield, label: '24/7 Support' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                    <s.icon className={`w-4 h-4 ${theme.text}`} />
                    <span className="text-white/80 text-sm">{s.label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a href="tel:+917668570551" className={`inline-flex items-center gap-2 bg-gradient-to-r ${theme.gradient} text-white px-8 py-3.5 rounded-full font-bold text-lg hover:shadow-lg ${theme.shadow} transition-all hover:scale-105`}>
                  <Phone className="w-5 h-5" /> Book Now — 7668570551
                </a>
                <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-green-500 transition-all hover:scale-105">
                  <MessageCircle className="w-5 h-5" /> WhatsApp
                </a>
              </motion.div>
            </div>

            {/* Right: Vehicle Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className={`relative h-[400px] rounded-3xl overflow-hidden border ${theme.border}`}>
                <Image src={images.vehicle} alt={vehicle.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-xl">{vehicle.name}</p>
                  <p className="text-white/60 text-sm">{vehicle.category} | {vehicle.fuelType} | {vehicle.transmission}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Included / Excluded ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Package Details</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">What is Included & Excluded</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Included */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`bg-white/5 backdrop-blur-xl rounded-2xl border ${theme.border} p-8`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-bold text-xl">Included</h3>
              </div>
              <ul className="space-y-3">
                {theme.included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className={`w-5 h-5 ${theme.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Excluded */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <span className="text-red-400 text-lg">✕</span>
                </div>
                <h3 className="text-white font-bold text-xl">Not Included</h3>
              </div>
              <ul className="space-y-3">
                {theme.excluded.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400/60 flex-shrink-0 mt-0.5">✕</span>
                    <span className="text-white/60 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Vehicle Gallery ===== */}
      <section className="py-16 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white font-serif mb-8 text-center">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {images.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`relative h-40 rounded-xl overflow-hidden border border-white/10 ${theme.hoverBorder} transition-all group`}
              >
                <Image src={img} alt={`Package gallery ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Compare All Packages ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Compare Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">Which Package is Right for You?</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allCarPrices.map((car, i) => {
              const pkgTheme = packageThemes[car.type] || packageThemes.fortuner;
              const isCurrentPackage = car.type === vehicleType;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden border transition-all ${
                    isCurrentPackage
                      ? `${pkgTheme.border} ring-1 ${pkgTheme.ring || 'ring-white/10'} bg-gradient-to-b ${pkgTheme.gradientBg}`
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  {isCurrentPackage && (
                    <div className={`bg-gradient-to-r ${pkgTheme.gradient} text-white text-xs font-bold text-center py-1.5`}>
                      CURRENT PACKAGE
                    </div>
                  )}
                  <div className="p-5">
                    <div className="relative h-28 mb-4">
                      <Image src={car.image} alt={car.name} fill className="object-contain" />
                    </div>
                    <h3 className="text-white font-bold">{car.name}</h3>
                    <p className="text-gray-400 text-sm">{car.category} | {car.seats} Seater</p>
                    <div className="mt-3">
                      <span className={`text-2xl font-bold ${isCurrentPackage ? pkgTheme.text : 'text-white'}`}>{car.estimatedPrice}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1">₹{car.perKm}/km outstation</p>
                    <a href="tel:+917668570551" className={`mt-4 block text-center py-2.5 rounded-xl font-semibold text-sm transition-all ${
                      isCurrentPackage
                        ? `bg-gradient-to-r ${pkgTheme.gradient} text-white hover:shadow-lg ${pkgTheme.shadow}`
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}>
                      {isCurrentPackage ? 'Book This Package' : 'Enquire'}
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bus alternatives for group package */}
          {vehicleType === 'bus45' && (
            <div className="mt-12">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Bus className={`w-5 h-5 ${theme.text}`} /> All Bus Sizes Available
              </h3>
              <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.02]">
                        <th className="text-left text-gray-400 p-4 font-medium">Bus Type</th>
                        <th className="text-center text-gray-400 p-4 font-medium">Seats</th>
                        <th className="text-center text-gray-400 p-4 font-medium">Per Km</th>
                        <th className="text-center text-gray-400 p-4 font-medium">Min. Charge</th>
                        <th className="text-center text-gray-400 p-4 font-medium">Per Person (est.)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allBusOptions.map((bus, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-8 flex-shrink-0">
                                <Image src={bus.image} alt={bus.name} fill className="object-contain" />
                              </div>
                              <span className="text-white font-medium">{bus.name}</span>
                            </div>
                          </td>
                          <td className="p-4 text-center text-gray-300">{bus.seats}</td>
                          <td className={`p-4 text-center ${theme.text} font-semibold`}>₹{bus.perKm}</td>
                          <td className="p-4 text-center text-gray-300">{bus.minCharge}</td>
                          <td className="p-4 text-center text-gray-300">
                            ~₹{Math.round((distanceKm * bus.perKm) / (bus.seats * 0.85)).toLocaleString('en-IN')}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== SECTION 5: Itinerary ===== */}
      {itinerary.length > 0 && (
        <section className="py-20 bg-black/20">
          <div className="max-w-5xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Your Itinerary</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">{theme.name} Package — {duration}</h2>
            </motion.div>

            {/* Day cards in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {itinerary.map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`bg-white/5 border border-white/10 rounded-xl p-5 ${theme.hoverBorder} transition-all cursor-pointer ${activeDay === i ? `ring-1 ${theme.border}` : ''}`}
                  onClick={() => setActiveDay(i)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${theme.gradient} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{day.day.replace('Day ', 'D')}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold mb-1">{day.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{day.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 6: Why Choose This Package ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>Why This Package</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">Why Choose the {theme.name} Package</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.slice(0, 6).map((item, i) => {
              const icons = [Shield, Star, Award, Mountain, Compass, CheckCircle];
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`bg-white/5 rounded-2xl border border-white/10 p-6 ${theme.hoverBorder} transition-all`}
                >
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${theme.gradientBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${theme.text}`} />
                  </div>
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: SEO Content ===== */}
      <section className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-8">{theme.name} Char Dham Yatra Package 2026 — Complete Details</h2>

            <div className="prose prose-invert max-w-none space-y-6 text-gray-300/80 leading-relaxed">
              <p>
                The <strong className="text-white">{theme.name} Char Dham Yatra Package</strong> by Triveni Cabs offers a {theme.name === 'Luxury' ? 'premium VIP experience' : theme.name === 'Budget' ? 'cost-effective pilgrimage solution' : theme.name === 'Family' ? 'comfortable family-friendly journey' : 'group-optimized travel experience'} for your sacred pilgrimage to all four Dhams of Uttarakhand — Yamunotri, Gangotri, Kedarnath, and Badrinath.
              </p>
              <p>
                <strong className="text-white">Vehicle:</strong> {vehicle.name} ({vehicle.seats}-seater, {vehicle.fuelType}, {vehicle.transmission}). <strong className={theme.text}>Price: ₹{vehicle.perKm}/km outstation.</strong> The {duration} package covers approximately {distance}, starting from {estimatedPrice} (including vehicle, fuel, driver, tolls).
              </p>
              <p>
                {vehicle.description}
              </p>
              <p>
                <strong className="text-white">Route covered:</strong> Delhi → Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Badrinath → Rudraprayag → Haridwar → Delhi. The exact itinerary is customizable based on your preferences.
              </p>
              <p>
                <strong className="text-white">Booking process:</strong> Call <strong className={theme.text}>7668570551</strong> or WhatsApp us to discuss your preferred dates, group size, and any customizations. We provide a detailed quotation within 1 hour. Booking requires a 30% advance, with the balance payable before departure.
              </p>
            </div>

            {/* Internal links */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/chardham-yatra" className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 ${theme.hoverBorder} transition-all group`}>
                <Mountain className={`w-5 h-5 ${theme.text}`} />
                <div>
                  <p className="text-white font-semibold text-sm">All Char Dham Options</p>
                  <p className="text-gray-500 text-xs">35+ vehicle & route options</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
              </Link>
              <Link href="/chardham-yatra/by-car" className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 ${theme.hoverBorder} transition-all group`}>
                <Route className={`w-5 h-5 ${theme.text}`} />
                <div>
                  <p className="text-white font-semibold text-sm">Char Dham by Car</p>
                  <p className="text-gray-500 text-xs">Compare all car models</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQs ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className={`${theme.text} text-sm font-bold tracking-widest uppercase`}>FAQs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">{theme.name} Package — Common Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`bg-white/5 border border-white/10 rounded-xl overflow-hidden ${theme.hoverBorder} transition-all`}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 ${theme.text} flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-gray-300/70 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: Other Packages ===== */}
      {relatedRoutes.length > 0 && (
        <section className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white font-serif mb-8 text-center">Explore Other Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedRoutes.slice(0, 3).map((slug, i) => {
                const pkgType = slug.includes('luxury') ? 'fortuner' : slug.includes('budget') ? 'sedan' : slug.includes('family') ? 'ertiga' : 'bus45';
                const pkgTheme = packageThemes[pkgType];
                const PkgIcon = pkgTheme.icon;
                return (
                  <Link key={i} href={`/chardham-yatra/${slug}`} className={`bg-white/5 border border-white/10 rounded-2xl p-6 ${pkgTheme.hoverBorder} transition-all group`}>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pkgTheme.gradientBg} flex items-center justify-center mb-4`}>
                      <PkgIcon className={`w-5 h-5 ${pkgTheme.text}`} />
                    </div>
                    <h3 className="text-white font-bold text-lg capitalize">{slug.replace(/-/g, ' ')}</h3>
                    <p className="text-gray-400 text-sm mt-1">{pkgTheme.tagline}</p>
                    <div className={`flex items-center gap-1 mt-4 ${pkgTheme.text} text-sm font-semibold`}>
                      <span>View Package</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className={`py-20 bg-gradient-to-r ${theme.gradient} relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <ThemeIcon className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Book the {theme.name} Char Dham Package</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Starting from {estimatedPrice}. {vehicle.name}, experienced drivers, 24/7 support. Secure your 2026 yatra season booking today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-green-500 hover:scale-105 transition-all">
                <MessageCircle className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
