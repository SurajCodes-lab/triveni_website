'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Users, Star, Shield, ChevronRight, ChevronDown, Mountain, Calendar, IndianRupee, Navigation, Sparkles, ArrowRight, CheckCircle, Clock, Sun, Award, Route, Fuel, Compass, Bus } from '@/components/ui/icons';

// ============================================================================
// CHARDHAM ROUTE CLIENT — "Sacred Journey" Design
// Color: Teal-900/Emerald-950 base + Saffron (#FF9933) + Warm Gold accents
// Used by 20 route-specific pages (Delhi/Haridwar/Dehradun/Rishikesh → Dhams)
// ============================================================================

export default function ChardhamRouteClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeItineraryDay, setActiveItineraryDay] = useState(0);
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const { title, vehicle, origin, originKey, destination, destinationData, duration, distance, distanceKm, estimatedPrice, allCarPrices, allBusPrices, allBusOptions, allCarOptions, tempoOptions, itinerary, whyChoose, features, faqs, images, relatedRoutes, vehicleType } = data;

  const isBusRoute = vehicleType === 'bus35' || vehicleType === 'bus22' || vehicleType === 'bus45';
  const whatsappMsg = encodeURIComponent(`Hello! I want to book ${origin} to ${destination} Char Dham Yatra 2026`);

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-950 via-emerald-950 to-slate-950">
      {/* ===== HERO: Panoramic Journey Banner ===== */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image src={images.hero} alt={title} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/70 to-teal-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-950/80 to-transparent" />
        </div>

        {/* Animated route dots */}
        {mounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-orange-400/40"
                initial={{ x: `${10 + i * 12}%`, y: '110%', opacity: 0 }}
                animate={{
                  y: [110, -10],
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 6 + i * 0.5, repeat: Infinity, delay: i * 0.8 }}
                style={{ left: `${10 + i * 11}%` }}
              />
            ))}
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto px-4 pb-16 pt-32 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-teal-400/60 text-sm mb-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/chardham-yatra" className="hover:text-orange-400 transition-colors">Char Dham Yatra</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-orange-400">{origin} to {destination}</span>
          </div>

          <div className="max-w-3xl">
            {/* Route badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 rounded-full px-5 py-2 mb-6"
            >
              <Route className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold tracking-wide">{origin} → {destination} | {duration}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif mb-6 leading-tight"
            >
              {title}
            </motion.h1>

            {/* Quick stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {[
                { icon: Navigation, label: distance, color: 'text-cyan-400' },
                { icon: Calendar, label: duration, color: 'text-emerald-400' },
                { icon: IndianRupee, label: `From ${estimatedPrice}`, color: 'text-orange-400' },
                { icon: Users, label: `${vehicle.seats} Seater`, color: 'text-teal-300' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
                  <stat.icon className={`w-4 h-4 ${stat.color}`} />
                  <span className="text-white/80 text-sm">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all hover:scale-105">
                <Phone className="w-5 h-5" /> Book Now — 7668570551
              </a>
              <a href={`https://wa.me/917668570551?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold text-lg hover:bg-emerald-500 transition-all hover:scale-105">
                <MessageCircle className="w-5 h-5" /> WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Route Gallery Strip ===== */}
      <section className="py-6 bg-teal-950/50 border-y border-teal-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {images.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-40 rounded-xl overflow-hidden group"
              >
                <Image src={img} alt={`${destination} route highlight ${i + 1}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/60 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Multi-Vehicle Pricing Comparison ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Choose Your Vehicle</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">{origin} to {destination} — Vehicle Options</h2>
            <p className="text-teal-300/60 mt-3 max-w-2xl mx-auto">Compare all available vehicles for your sacred journey. Prices include vehicle, fuel, driver, and tolls.</p>
          </motion.div>

          {/* Car options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {allCarPrices.map((car, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 group ${
                  car.type === vehicleType
                    ? 'bg-orange-500/10 border-orange-500/40 ring-1 ring-orange-500/20'
                    : 'bg-white/5 border-white/10 hover:border-teal-500/30'
                }`}
              >
                {car.type === vehicleType && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold text-center py-1">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-5 pt-8">
                  <div className="relative h-32 mb-4">
                    <Image src={car.image} alt={car.name} fill className="object-contain group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{car.name}</h3>
                  <p className="text-teal-400/60 text-sm">{car.category} | {car.seats} Seater</p>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-orange-400">{car.estimatedPrice}</span>
                  </div>
                  <p className="text-teal-400/50 text-xs mt-1">₹{car.perKm}/km × {distanceKm} km + driver</p>
                  <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1 text-teal-300/70"><Fuel className="w-3 h-3" />{car.fuelType}</div>
                    <div className="flex items-center gap-1 text-teal-300/70"><Users className="w-3 h-3" />{car.seats} seats</div>
                  </div>
                  <a href="tel:+917668570551" className="mt-4 block text-center bg-white/10 hover:bg-orange-500 text-white py-2.5 rounded-xl font-semibold text-sm transition-all">
                    Book {car.name}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bus & Tempo toggle */}
          <div className="text-center">
            <button
              onClick={() => setShowAllVehicles(!showAllVehicles)}
              className="inline-flex items-center gap-2 text-teal-300 hover:text-orange-400 transition-colors text-sm"
            >
              <Bus className="w-4 h-4" />
              {showAllVehicles ? 'Hide' : 'Show'} Bus & Tempo Options
              <ChevronDown className={`w-4 h-4 transition-transform ${showAllVehicles ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <AnimatePresence>
            {showAllVehicles && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                {/* Bus options */}
                <h3 className="text-white font-bold text-xl mt-10 mb-5 flex items-center gap-2">
                  <Bus className="w-5 h-5 text-teal-400" /> Bus Options (Group Travel)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                  {allBusPrices.map((bus, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-teal-500/30 transition-all">
                      <div className="relative h-24 mb-3">
                        <Image src={bus.image} alt={bus.name} fill className="object-contain" />
                      </div>
                      <h4 className="text-white font-semibold">{bus.name}</h4>
                      <p className="text-teal-400/60 text-sm">{bus.seats} Seater | ₹{bus.perKm}/km</p>
                      <p className="text-orange-400 font-bold mt-2">{bus.estimatedPrice}</p>
                      <a href="tel:+917668570551" className="mt-3 block text-center bg-white/10 hover:bg-teal-600 text-white py-2 rounded-lg text-sm transition-all">
                        Book Bus
                      </a>
                    </div>
                  ))}
                </div>

                {/* Tempo cross-links */}
                <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-teal-400" /> Tempo Traveller Options
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {tempoOptions.map((tempo, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-teal-500/30 transition-all">
                      <div className="relative h-20 mb-2">
                        <Image src={tempo.image} alt={tempo.name} fill className="object-contain" />
                      </div>
                      <p className="text-white font-semibold text-sm">{tempo.name}</p>
                      <p className="text-teal-400/60 text-xs">₹{tempo.perKm}/km</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== SECTION 4: Day-by-Day Itinerary Timeline ===== */}
      {itinerary.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-teal-950/50 to-emerald-950/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="text-emerald-400 text-sm font-bold tracking-widest uppercase">Your Journey</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">Day-by-Day Itinerary</h2>
              <p className="text-teal-300/60 mt-3">{origin} to {destination} | {duration} | {distance}</p>
            </motion.div>

            {/* Day selector tabs */}
            <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-hide">
              {itinerary.map((day, i) => (
                <button
                  key={i}
                  onClick={() => setActiveItineraryDay(i)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeItineraryDay === i
                      ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-white/5 text-teal-300/70 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {day.day}
                </button>
              ))}
            </div>

            {/* Active day content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItineraryDay}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{itinerary[activeItineraryDay].day.replace('Day ', '')}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{itinerary[activeItineraryDay].title}</h3>
                    <p className="text-teal-200/70 leading-relaxed">{itinerary[activeItineraryDay].desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Full timeline (collapsed) */}
            <div className="mt-8 space-y-3">
              {itinerary.map((day, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all cursor-pointer ${
                    activeItineraryDay === i ? 'bg-orange-500/10 border border-orange-500/30' : 'bg-white/[0.02] hover:bg-white/5 border border-transparent'
                  }`}
                  onClick={() => setActiveItineraryDay(i)}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                    activeItineraryDay === i ? 'bg-orange-500 text-white' : 'bg-white/10 text-teal-300'
                  }`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold truncate ${activeItineraryDay === i ? 'text-orange-300' : 'text-white/80'}`}>{day.title}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 ${activeItineraryDay === i ? 'text-orange-400' : 'text-teal-500'}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 5: Why Choose This Route ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-orange-400 text-sm font-bold tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">Why Book {origin} to {destination} with Triveni Cabs</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, i) => {
              const icons = [Shield, Star, Award, Mountain, Compass, Sparkles, CheckCircle, Clock];
              const Icon = icons[i % icons.length];
              const gradients = [
                'from-orange-500/20 to-amber-500/20',
                'from-teal-500/20 to-cyan-500/20',
                'from-emerald-500/20 to-green-500/20',
                'from-violet-500/20 to-purple-500/20',
                'from-rose-500/20 to-pink-500/20',
                'from-sky-500/20 to-blue-500/20',
              ];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-orange-500/30 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-teal-300/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: Origin City Highlights ===== */}
      {data.originData && (
        <section className="py-16 bg-gradient-to-r from-teal-950/80 to-emerald-950/80">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">Starting Point</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3 mb-6">Starting from {origin}</h2>
                <p className="text-teal-200/70 leading-relaxed mb-8">{data.originData.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {data.originData.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                      <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{highlight}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
                {images.gallery.map((img, i) => (
                  <div key={i} className={`relative overflow-hidden rounded-2xl ${i === 0 ? 'row-span-2 h-full min-h-[280px]' : 'h-36'}`}>
                    <Image src={img} alt={`${origin} highlight ${i + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-700" />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ===== SECTION 7: SEO Content Block ===== */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-bold text-white font-serif mb-8">{origin} to {destination} by {vehicle.name} — Complete Guide</h2>

            <div className="prose prose-invert max-w-none space-y-6 text-teal-200/70 leading-relaxed">
              <p>
                Planning your <strong className="text-white">{origin} to {destination}</strong> yatra by {vehicle.name}? Triveni Cabs offers the most reliable and affordable {vehicle.name} rental service for this sacred pilgrimage route. With our experienced mountain drivers and well-maintained fleet, your spiritual journey through the Himalayas will be safe, comfortable, and memorable.
              </p>
              <p>
                The {origin} to {destination} route covers approximately <strong className="text-white">{distance}</strong> and typically takes <strong className="text-white">{duration}</strong> to complete. Our {vehicle.name} ({vehicle.seats}-seater, {vehicle.fuelType}, AC) is priced at just <strong className="text-orange-400">₹{vehicle.perKm}/km</strong>, making the total estimated cost <strong className="text-orange-400">{estimatedPrice}</strong> including fuel, driver charges, and toll taxes.
              </p>

              {destinationData && (
                <p>
                  {destinationData.significance}
                </p>
              )}

              <h3 className="text-xl font-bold text-white mt-8">Best Time to Travel from {origin}</h3>
              <p>
                The best months for this route are <strong className="text-white">{destinationData?.bestSeason || 'May-June & September-October'}</strong>. The monsoon months (July-August) are not recommended due to landslides and road closures. Winter months (November-April) see temple closures at higher altitudes.
              </p>

              <h3 className="text-xl font-bold text-white mt-8">Vehicle Options from {origin}</h3>
              <p>
                We offer multiple vehicle choices for {origin} to {destination}: <strong className="text-white">Swift Dzire (Sedan) at ₹12/km</strong> for budget travelers, <strong className="text-white">Ertiga at ₹15/km</strong> for small families, <strong className="text-white">Innova Crysta at ₹18/km</strong> for the best comfort-price balance, and <strong className="text-white">Toyota Fortuner at ₹25/km</strong> for premium/VIP travel. For groups, we offer buses from 22 to 56 seaters.
              </p>
            </div>

            {/* Internal links */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/chardham-yatra" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-orange-500/30 transition-all group">
                <Mountain className="w-5 h-5 text-orange-400" />
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">All Char Dham Options</p>
                  <p className="text-teal-400/50 text-xs">Explore 35+ vehicle & route options</p>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-500 ml-auto group-hover:text-orange-400 transition-colors" />
              </Link>
              <Link href="/chardham-yatra/by-car" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4 hover:border-orange-500/30 transition-all group">
                <Compass className="w-5 h-5 text-teal-400" />
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">Char Dham by Car</p>
                  <p className="text-teal-400/50 text-xs">Compare all car options</p>
                </div>
                <ArrowRight className="w-4 h-4 text-teal-500 ml-auto group-hover:text-orange-400 transition-colors" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== SECTION 8: FAQs ===== */}
      <section className="py-20 bg-gradient-to-b from-emerald-950/50 to-teal-950/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="text-teal-400 text-sm font-bold tracking-widest uppercase">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mt-3">Frequently Asked Questions</h2>
            <p className="text-teal-300/60 mt-3">{origin} to {destination} Travel FAQ</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-teal-500/30 transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-white font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-teal-400 flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-teal-200/70 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 9: Related Routes ===== */}
      {relatedRoutes.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white font-serif mb-8">Related Routes & Options</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedRoutes.slice(0, 4).map((slug, i) => (
                <Link key={i} href={`/chardham-yatra/${slug}`} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-orange-500/30 transition-all group">
                  <p className="text-white font-semibold group-hover:text-orange-400 transition-colors text-sm capitalize">{slug.replace(/-/g, ' ')}</p>
                  <div className="flex items-center gap-1 mt-2 text-teal-400/60 text-xs">
                    <span>View details</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-4">Book Your {origin} to {destination} Journey</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Starting from {estimatedPrice}. Experienced drivers. 24/7 on-trip support. Call now to secure your {vehicle.name} for 2026 yatra season.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
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
