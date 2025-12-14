'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle,
  ArrowRight, Route, Navigation, Search, Award, Headphones, CreditCard,
  Compass, Sparkles, ChevronDown, Crown, Gem, ArrowLeft, Map, Plane
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TempoCityClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const [showAllVehicles, setShowAllVehicles] = useState(false);

  const { cityData, routes, fleet } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  const getTypeColor = (type) => {
    const colors = {
      'Hill Station': 'from-emerald-400 to-teal-600',
      'Adventure': 'from-orange-400 to-red-600',
      'Spiritual': 'from-violet-400 to-purple-600',
      'Heritage': 'from-amber-400 to-yellow-600',
      'Royal': 'from-rose-400 to-pink-600',
      'Metro': 'from-blue-400 to-indigo-600',
      'Lakes': 'from-cyan-400 to-blue-600',
      'Desert': 'from-amber-500 to-orange-600',
      'Blue City': 'from-blue-500 to-indigo-600',
      'Modern City': 'from-slate-400 to-gray-600',
      'Commercial': 'from-zinc-400 to-gray-600',
      'Circuit': 'from-indigo-400 to-purple-600',
      'Wildlife': 'from-green-400 to-emerald-700',
      'Long Road': 'from-slate-500 to-stone-700',
      'Local': 'from-cyan-400 to-sky-600',
      'Char Dham': 'from-orange-500 to-red-600',
      'Tourism': 'from-gray-400 to-gray-600',
    };
    return colors[type] || 'from-gray-400 to-gray-600';
  };

  const getTypeBadgeColor = (type) => {
    const colors = {
      'Hill Station': 'bg-emerald-100 text-emerald-700 border-emerald-200',
      'Adventure': 'bg-orange-100 text-orange-700 border-orange-200',
      'Spiritual': 'bg-violet-100 text-violet-700 border-violet-200',
      'Heritage': 'bg-amber-100 text-amber-700 border-amber-200',
      'Royal': 'bg-rose-100 text-rose-700 border-rose-200',
      'Metro': 'bg-blue-100 text-blue-700 border-blue-200',
      'Lakes': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'Desert': 'bg-amber-100 text-amber-700 border-amber-200',
      'Blue City': 'bg-blue-100 text-blue-700 border-blue-200',
      'Modern City': 'bg-slate-100 text-slate-700 border-slate-200',
      'Commercial': 'bg-zinc-100 text-zinc-700 border-zinc-200',
      'Circuit': 'bg-indigo-100 text-indigo-700 border-indigo-200',
      'Wildlife': 'bg-green-100 text-green-700 border-green-200',
      'Long Road': 'bg-stone-100 text-stone-700 border-stone-200',
      'Local': 'bg-cyan-100 text-cyan-700 border-cyan-200',
      'Char Dham': 'bg-orange-100 text-orange-700 border-orange-200',
      'Tourism': 'bg-gray-100 text-gray-700 border-gray-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Hill Station': '🏔️',
      'Adventure': '🎿',
      'Spiritual': '🙏',
      'Heritage': '🏛️',
      'Royal': '👑',
      'Metro': '🌆',
      'Lakes': '🏞️',
      'Desert': '🏜️',
      'Blue City': '🔵',
      'Modern City': '🏙️',
      'Commercial': '🏢',
      'Circuit': '🔄',
      'Wildlife': '🐅',
      'Long Road': '🛣️',
      'Local': '🏙️',
      'Char Dham': '⛰️',
      'Tourism': '📍',
    };
    return icons[type] || '📍';
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============================================ */}
      {/* HERO SECTION - City Specific */}
      {/* ============================================ */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {cityData.image && (
            <Image
              src={cityData.image}
              alt={`${cityData.name} - Tempo Traveller Service`}
              fill
              className="object-cover"
              priority
            />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          {/* Color tint overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${cityData.bgGradient} opacity-60`} />
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{ y: '-10vh', opacity: [0, 0.6, 0] }}
              transition={{
                duration: Math.random() * 12 + 8,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-white/60 rounded-full"
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-8 left-4 sm:left-8"
          >
            <Link
              href="/tempo-traveller"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 hover:bg-white/20 transition-all border border-white/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Cities</span>
            </Link>
          </motion.div>

          {/* City Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl mb-6 border border-white/20 shadow-2xl"
          >
            <span className="text-5xl">{cityData.icon}</span>
          </motion.div>

          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span className="text-white font-semibold text-sm" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{cityData.tagline}</span>
          </motion.div>

          {/* City Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4 tracking-tight"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Tempo Traveller from
            <br />
            <span className="inline-block text-amber-400" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {cityData.name}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white max-w-2xl mx-auto mb-8 font-medium"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {cityData.description}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/20">
                  <Route className="w-5 h-5 text-amber-300" />
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-xl">{routes.length}</p>
                  <p className="text-white/60 text-xs">Destinations</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-green-500/20">
                  <MapPin className="w-5 h-5 text-green-300" />
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-xl">{cityData.state}</p>
                  <p className="text-white/60 text-xs">Region</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/20">
                  <Star className="w-5 h-5 text-purple-300" />
                </div>
                <div className="text-left">
                  <p className="text-white font-black text-xl">4.8</p>
                  <p className="text-white/60 text-xs">Rating</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+917668570551"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Call: +91 76685 70551
              </span>
            </motion.a>

            <motion.a
              href={`https://wa.me/917668570551?text=Hi, I need tempo traveller from ${cityData.name}. Please share options.`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-2xl"
            >
              <span className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/50">
            <span className="text-xs font-medium mb-2">View Destinations</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* ============================================ */}
      {/* DESTINATIONS GRID */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${cityData.color} bg-opacity-10 px-6 py-3 rounded-full mb-6`}>
              <Navigation className="w-5 h-5 text-gray-700" />
              <span className="text-gray-700 font-bold text-sm tracking-wider">DESTINATIONS FROM {cityData.name.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Choose Your <span className={`bg-gradient-to-r ${cityData.color} bg-clip-text text-transparent`}>Destination</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book tempo traveller from {cityData.name} to {routes.length} amazing destinations across India
            </p>
          </motion.div>

          {/* Routes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, index) => {
              const routeSlug = `${cityData.slug}-to-${route.name.toLowerCase().replace(/\s+/g, '-')}`;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredRoute(index)}
                  onMouseLeave={() => setHoveredRoute(null)}
                >
                  <Link href={`/tempo-traveller/${routeSlug}`} className="block group">
                    <div className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${hoveredRoute === index ? 'border-amber-400 -translate-y-2' : 'border-gray-100'
                      }`}>
                      {/* Gradient Top Bar */}
                      <div className={`h-2 bg-gradient-to-r ${getTypeColor(route.type)}`} />

                      {/* Glassmorphism Header */}
                      <div className={`relative p-6 bg-gradient-to-br ${getTypeColor(route.type)} bg-opacity-5`}>
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                        <div className="relative z-10">
                          {/* Route Type & Icon */}
                          <div className="flex items-center justify-between mb-4">
                            <div className={`flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-br ${getTypeColor(route.type)} shadow-lg`}>
                              <span className="text-2xl">{getTypeIcon(route.type)}</span>
                            </div>
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getTypeBadgeColor(route.type)}`}>
                              {route.type}
                            </span>
                          </div>

                          {/* Route Info */}
                          <div className="flex items-center gap-3 mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                              <span className="font-bold text-gray-700">{cityData.name}</span>
                            </div>
                            <div className="flex-1 border-t-2 border-dashed border-gray-300 relative">
                              <Plane className="w-4 h-4 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white" />
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 rounded-full bg-red-500 ring-4 ring-red-500/20" />
                            </div>
                          </div>
                          <h3 className="text-2xl font-black text-gray-900">{route.name}</h3>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 pt-4">
                        {/* Quick Info */}
                        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Car className="w-4 h-4" />
                            <span>12-26 Seater</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>AC Vehicle</span>
                          </div>
                        </div>

                        {/* Price Tag */}
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <span className="text-sm text-gray-500">Starting from</span>
                            <p className="text-2xl font-black text-gray-900">₹23<span className="text-sm font-medium text-gray-500">/km</span></p>
                          </div>
                          <div className="flex items-center gap-1 text-amber-500">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold">4.8</span>
                          </div>
                        </div>

                        {/* Book Button */}
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          className={`w-full bg-gradient-to-r from-gray-900 to-gray-800 group-hover:${cityData.color} text-white group-hover:text-white font-bold py-3.5 rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2`}
                        >
                          <span>View Route</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FLEET SECTION */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic ${cityData.color} opacity-5`}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
              <Car className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm tracking-wider">OUR FLEET</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Choose Your <span className={`bg-gradient-to-r ${cityData.color} bg-clip-text text-transparent`}>Vehicle</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Premium AC tempo travellers available for {cityData.name} tours
            </p>
          </motion.div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {(showAllVehicles ? fleet : fleet.slice(0, 3)).map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-500">
                  {/* Badge */}
                  {vehicle.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        POPULAR
                      </div>
                    </div>
                  )}
                  {vehicle.premium && (
                    <div className="absolute top-4 right-4 z-20">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                        <Gem className="w-3 h-3" />
                        PREMIUM
                      </div>
                    </div>
                  )}

                  {/* Vehicle Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-800">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="font-bold text-gray-900">{vehicle.capacity}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">{vehicle.name}</h3>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="bg-white/5 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white/60 text-sm">Outstation</span>
                        <span className={`text-xl font-black bg-gradient-to-r ${cityData.color} bg-clip-text text-transparent`}>{vehicle.outstationRate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Local (8hrs/80km)</span>
                        <span className="text-white font-bold">{vehicle.localRate}</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <a
                      href={`https://wa.me/917668570551?text=Hi, I want to book ${vehicle.name} from ${cityData.name}. Please share quote.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full bg-gradient-to-r ${cityData.color} text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/30 transition-all`}
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          {fleet.length > 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllVehicles(!showAllVehicles)}
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/20 text-white font-bold py-4 px-8 rounded-full hover:bg-white/20 transition-all"
              >
                <Car className="w-5 h-5" />
                {showAllVehicles ? 'Show Less' : `View All ${fleet.length} Vehicles`}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY BOOK FROM THIS CITY */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full mb-6 border border-green-200">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-green-700 font-bold text-sm tracking-wider">WHY BOOK FROM {cityData.name.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              The <span className={`bg-gradient-to-r ${cityData.color} bg-clip-text text-transparent`}>Triveni</span> Advantage
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Local Expertise',
                description: `Expert drivers who know ${cityData.name} routes perfectly`,
                color: 'from-green-400 to-emerald-500',
              },
              {
                icon: CreditCard,
                title: 'Best Rates',
                description: 'Competitive pricing with no hidden charges',
                color: 'from-blue-400 to-indigo-500',
              },
              {
                icon: Crown,
                title: 'Premium Fleet',
                description: 'Well-maintained AC vehicles with all amenities',
                color: 'from-amber-400 to-orange-500',
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Round-the-clock assistance throughout your journey',
                color: 'from-purple-400 to-pink-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-gray-50 hover:bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500 h-full">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OTHER CITIES - Beautiful Cards */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-6 border border-indigo-200">
              <Compass className="w-5 h-5 text-indigo-600" />
              <span className="text-indigo-700 font-bold text-sm tracking-wider">MORE STARTING POINTS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              Explore Other <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Cities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Book tempo traveller from other starting points across India
            </p>
          </motion.div>

          {/* Cities Grid - Beautiful Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {data.allCities
              .filter(city => city.slug !== cityData.slug)
              .slice(0, 8)
              .map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Link href={`/tempo-traveller/${city.slug}`} className="block h-full">
                    <div className="relative h-full min-h-[180px] md:min-h-[200px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200">
                      {/* Background Image */}
                      {city.image && (
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 group-hover:from-black/95 transition-all duration-300" />

                      {/* Colored Tint */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${city.color || 'from-indigo-500 to-purple-600'} opacity-30 mix-blend-overlay`} />

                      {/* Content */}
                      <div className="relative z-10 h-full p-4 md:p-5 flex flex-col justify-between">
                        {/* Top - Icon Badge */}
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
                            <span className="text-2xl md:text-3xl">{city.icon}</span>
                          </div>
                          <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30">
                            <span className="text-xs font-bold text-white">{city.routeCount} routes</span>
                          </div>
                        </div>

                        {/* Bottom - City Info */}
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                            {city.name}
                          </h3>
                          <p className="text-xs md:text-sm text-white/80 mb-3 line-clamp-1" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                            {city.tagline || city.state}
                          </p>
                          <div className="flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all">
                            <span style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Explore</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Dark Background for better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900" />

        {/* City-specific gradient overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${cityData.bgGradient} opacity-40`} />

        {/* Animated Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{ y: '-10vh', opacity: [0, 0.5, 0] }}
              transition={{
                duration: Math.random() * 10 + 8,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "linear"
              }}
              className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* City Icon with glow */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-xl rounded-3xl mb-8 border border-white/20 shadow-2xl"
            >
              <span className="text-5xl">{cityData.icon}</span>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-amber-400/30"
            >
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm tracking-wider">BOOK YOUR JOURNEY TODAY</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              Ready to Explore from{' '}
              <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                {cityData.name}
              </span>?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Book your tempo traveller today and experience comfortable group travel with Triveni Cabs!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+917668570551"
                whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call: +91 76685 70551
              </motion.a>

              <motion.a
                href={`https://wa.me/917668570551?text=Hi, I need tempo traveller from ${cityData.name}. Please share options.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-2xl flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                WhatsApp Us
              </motion.a>
            </div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-6 mt-12"
            >
              {[
                { icon: Shield, label: 'Safe & Secure' },
                { icon: Star, label: '4.8 Rating' },
                { icon: Clock, label: '24/7 Support' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-white/70">
                  <item.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
