'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle,
  ArrowRight, Route, Navigation, Search, Filter, Award, Headphones, CreditCard,
  Compass, Sparkles, Zap, Heart, ChevronDown, Crown, Gem, Play, X, Mountain
} from '@/components/ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false, loading: () => <span>Tempo Traveller Rental</span> }
);
const ChardhamShowcase = dynamic(() => import('./ChardhamShowcase'), { ssr: false });

export default function TempoMainClient({ data, faqData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);

  const { popularRoutes, allRoutes, fleet, cities, citiesData } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Structured data for main tempo traveller page
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.trivenicabs.in/tempo-traveller#service",
        "name": "Tempo Traveller Rental Service",
        "description": "Premium tempo traveller rental service across India. Book 12-26 seater AC vehicles with professional drivers.",
        "provider": {
          "@type": "Organization",
          "name": "Triveni Cabs",
          "telephone": "+917668570551"
        }
      }
    ]
  }), []);

  // Get unique origins for filter dropdown
  const getOriginCities = () => {
    const origins = [...new Set(allRoutes.map(route => route.origin))];
    return origins.sort();
  };

  // Filter routes based on search and origin selection
  const getFilteredRoutes = () => {
    let routes = selectedOrigin
      ? allRoutes.filter(route => route.origin === selectedOrigin)
      : allRoutes;

    if (searchTerm) {
      routes = routes.filter(route =>
        route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return routes;
  };

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
      'Tourism': 'bg-gray-100 text-gray-700 border-gray-200',
    };
    return colors[type] || 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const statsData = [
    { value: '2500+', label: 'Happy Trips', icon: Heart, color: 'from-rose-500 to-pink-600' },
    { value: '100+', label: 'Routes', icon: Route, color: 'from-blue-500 to-indigo-600' },
    { value: '200+', label: 'Premium Fleet', icon: Car, color: 'from-amber-500 to-orange-600' },
    { value: '4.8★', label: 'Rating', icon: Star, color: 'from-yellow-500 to-amber-600' },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/tempo_hero_section.jpg"
            alt="Premium Tempo Traveller Rental Service - Group Travel India"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-purple-900/70 to-black/85" />
        </div>

        {/* Animated Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"
        />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', x: Math.random() * 100 + '%', opacity: 0 }}
              animate={{ y: '-10vh', opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-1.5 h-1.5 bg-amber-400 rounded-full"
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-amber-400/30"
          >
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-bold text-sm tracking-wider">PREMIUM TEMPO TRAVELLER SERVICE</span>
            <Sparkles className="w-5 h-5 text-amber-400" />
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
              Explore India with
              <br />
              <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Tempo Traveller
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-3xl font-medium text-white/80"
            >
              <TypeAnimation
                sequence={[
                  '12-26 Seater AC Vehicles',
                  2500,
                  'Professional Experienced Drivers',
                  2500,
                  '100+ Routes Across India',
                  2500,
                  'Starting ₹23/km All Inclusive',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md px-5 md:px-6 py-3 md:py-4 rounded-2xl border border-white/20 hover:border-amber-400/50 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${stat.color}`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-black text-lg md:text-xl">{stat.value}</p>
                    <p className="text-white/60 text-xs">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 md:p-6 max-w-3xl mx-auto border border-white/20 mb-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={selectedOrigin}
                  onChange={(e) => {
                    if (e.target.value) {
                      window.location.href = `/tempo-traveller/${e.target.value.toLowerCase()}`;
                    }
                  }}
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 appearance-none text-gray-800 font-medium cursor-pointer"
                >
                  <option value="">Select Starting City</option>
                  {citiesData?.map(city => (
                    <option key={city.slug} value={city.slug}>{city.icon} {city.name} ({city.routeCount} routes)</option>
                  ))}
                </select>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const section = document.getElementById('cities-section');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black font-bold py-4 px-6 rounded-xl shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Compass className="w-5 h-5" />
                Explore All Cities
              </motion.button>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+917668570551"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(251, 191, 36, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black px-8 py-4 rounded-full font-bold text-lg overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                Call: +91 76685 70551
              </span>
            </motion.a>

            <motion.a
              href="https://wa.me/917668570551?text=Hi, I need tempo traveller booking. Please share options."
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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center text-white/50">
              <span className="text-xs font-medium mb-2">Scroll to Explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CHOOSE YOUR CITY SECTION */}
      {/* ============================================ */}
      {!searchTerm && !selectedOrigin && !showAllRoutes && (
        <section id="cities-section" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-6 border border-amber-200">
                <MapPin className="w-5 h-5 text-amber-600" />
                <span className="text-amber-700 font-bold text-sm tracking-wider">SELECT YOUR STARTING POINT</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                Choose Your <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">City</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Select your starting city to explore all available tempo traveller routes
              </p>
            </motion.div>

            {/* Cities Grid - Bento Style */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {citiesData?.map((city, index) => (
                <motion.div
                  key={city.slug}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredCity(index)}
                  onMouseLeave={() => setHoveredCity(null)}
                  className={`${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <Link href={`/tempo-traveller/${city.slug}`} className="block group h-full">
                    <div className={`relative h-full min-h-[200px] ${index === 0 ? 'md:min-h-[420px]' : ''} rounded-3xl overflow-hidden transition-all duration-500 ${hoveredCity === index ? '-translate-y-2 shadow-2xl shadow-black/30' : 'shadow-lg'
                      }`}>
                      {/* Background Image */}
                      {city.image && (
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,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"
                          onError={(e) => { e.target.style.display = 'none'; }}
                        />
                      )}

                      {/* Dark Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                      {/* Color tint overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${city.color} opacity-40 mix-blend-overlay`} />

                      {/* Hover brighten effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredCity === index ? 0.1 : 0 }}
                        className="absolute inset-0 bg-white"
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                        {/* Top Section */}
                        <div>
                          {/* City Icon */}
                          <div className={`inline-flex items-center justify-center ${index === 0 ? 'w-16 h-16 text-4xl' : 'w-11 h-11 text-xl'} bg-white/20 backdrop-blur-md rounded-2xl mb-3 border border-white/30 shadow-lg`}>
                            {city.icon}
                          </div>
                        </div>

                        {/* Bottom Section - All text content */}
                        <div>
                          {/* City Name */}
                          <h3 className={`${index === 0 ? 'text-3xl md:text-4xl' : 'text-lg'} font-black text-white mb-1`} style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                            {city.name}
                          </h3>

                          {/* Tagline */}
                          <p className={`${index === 0 ? 'text-base' : 'text-xs'} text-white/90 font-semibold mb-2`} style={{ textShadow: '0 1px 5px rgba(0,0,0,0.5)' }}>
                            {city.tagline}
                          </p>

                          {/* Description - Only for featured card */}
                          {index === 0 && (
                            <p className="text-sm text-white/80 mb-3 line-clamp-2" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>
                              {city.description}
                            </p>
                          )}

                          {/* Route Count Badge */}
                          <div className="flex items-center gap-2 mb-3">
                            <div className="bg-white/25 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/40">
                              <span className={`${index === 0 ? 'text-sm' : 'text-xs'} font-bold text-white`}>
                                {city.routeCount} Destinations
                              </span>
                            </div>
                          </div>

                          {/* Popular Destinations Preview - Only for featured */}
                          {index === 0 && city.popularDestinations && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {city.popularDestinations.map((dest, idx) => (
                                <span key={idx} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold border border-white/30">
                                  {dest}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Explore Button */}
                          <div className={`flex items-center gap-2 ${index === 0 ? 'text-base' : 'text-sm'} text-white font-bold group-hover:gap-3 transition-all`}>
                            <span style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>Explore Routes</span>
                            <ArrowRight className={`${index === 0 ? 'w-5 h-5' : 'w-4 h-4'} group-hover:translate-x-1 transition-transform`} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {[
                { label: 'Cities Covered', value: '14', icon: MapPin },
                { label: 'Total Routes', value: `${allRoutes.length}+`, icon: Route },
                { label: 'Happy Customers', value: '2500+', icon: Heart },
                { label: 'Years Experience', value: '10+', icon: Award },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100">
                    <stat.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}


      {/* ============================================ */}
      {/* CHARDHAM SHOWCASE - SPECIAL */}
      {/* ============================================ */}
      <ChardhamShowcase />

      {/* ============================================ */}
      {/* FLEET SECTION */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-amber-500/10 via-transparent to-amber-500/10"
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
            <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-amber-400/30">
              <Car className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm tracking-wider">PREMIUM FLEET</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Our <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Vehicle Range</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Choose from our range of well-maintained AC tempo travellers for every group size
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
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,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"
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
                        <span className="text-xl font-black bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">{vehicle.outstationRate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">Local (8hrs/80km)</span>
                        <span className="text-white font-bold">{vehicle.localRate}</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <a
                      href={`https://wa.me/917668570551?text=Hi, I want to book ${vehicle.name}. Please share quote.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-amber-500/30 transition-all"
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
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US */}
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
              <span className="text-green-700 font-bold text-sm tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Triveni</span> Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience why thousands of travelers choose us for their group journeys
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'GPS tracked vehicles, verified drivers, valid insurance & 24/7 monitoring',
                color: 'from-green-400 to-emerald-500',
                stat: '100%',
                statLabel: 'Safe Trips'
              },
              {
                icon: CreditCard,
                title: 'Transparent Pricing',
                description: 'No hidden charges, fixed per km rates, all-inclusive pricing',
                color: 'from-blue-400 to-indigo-500',
                stat: '₹0',
                statLabel: 'Hidden Fees'
              },
              {
                icon: Crown,
                title: 'Premium Fleet',
                description: 'Well-maintained AC vehicles with pushback seats & modern amenities',
                color: 'from-amber-400 to-orange-500',
                stat: '200+',
                statLabel: 'Premium Fleet'
              },
              {
                icon: Headphones,
                title: '24/7 Support',
                description: 'Round-the-clock customer support via call & WhatsApp',
                color: 'from-purple-400 to-pink-500',
                stat: '24/7',
                statLabel: 'Available'
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

                  <div className="mb-4">
                    <span className="text-3xl font-black text-gray-900">{feature.stat}</span>
                    <span className="text-gray-500 text-sm ml-2">{feature.statLabel}</span>
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
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <Compass className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-bold text-sm tracking-wider">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Questions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData?.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                      Q
                    </div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900 leading-tight">{faq.question}</h3>
                  </div>
                  <div className="pl-11">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION */}
      {/* ============================================ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Travel?</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Book your tempo traveller today and experience the comfort of group travel with Triveni Cabs!
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
                href="https://wa.me/917668570551?text=Hi, I need tempo traveller booking. Please share options."
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
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tempo Traveller on Rent in India — 12 to 26 Seater AC Vehicles with Driver
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Triveni Cabs is one of India&apos;s most trusted tempo traveller rental services, offering 12-seater, 16-seater, 17-seater,
            20-seater, and 26-seater Maharaja AC tempo travellers with professional drivers for group travel across North India.
            Whether you are planning a family trip to <Link href="/tempo-traveller/delhi-to-manali" className="text-blue-600 hover:underline">Manali</Link>,
            a pilgrimage to <Link href="/tempo-traveller/delhi-to-haridwar" className="text-blue-600 hover:underline">Haridwar</Link> and{' '}
            <Link href="/tempo-traveller/delhi-to-rishikesh" className="text-blue-600 hover:underline">Rishikesh</Link>,
            a corporate outing, or a wedding party — our fleet is ready 24/7.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our outstation tempo traveller rates start at just <strong>₹23 per kilometre</strong> for a 12-seater and go up to ₹27/km for the
            26-seater Maharaja Edition with super-luxury recliner seats, LED TV, and powerful AC. All prices are all-inclusive — fuel,
            driver allowance, and vehicle charges are covered. Only toll taxes and state permits are additional.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We cover 100+ routes from Delhi, Chandigarh, Jaipur, Agra, Haridwar, Rishikesh, Lucknow, Varanasi, and 10+ other cities.
            Popular routes include Delhi to <Link href="/tempo-traveller/delhi-to-shimla" className="text-blue-600 hover:underline">Shimla</Link>,{' '}
            Delhi to <Link href="/tempo-traveller/delhi-to-jaipur" className="text-blue-600 hover:underline">Jaipur</Link>,{' '}
            Delhi to <Link href="/tempo-traveller/delhi-to-agra" className="text-blue-600 hover:underline">Agra</Link>,{' '}
            and <Link href="/tempo-traveller/chandigarh-to-manali" className="text-blue-600 hover:underline">Chandigarh to Manali</Link>.
            All vehicles come with GPS tracking, pushback seats, music system, and charging points for a comfortable journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With 2500+ completed trips, a 4.8-star rating, and verified drivers with 5+ years of experience, Triveni Cabs is the
            preferred choice for group travel. Compare our transparent pricing on the{' '}
            <Link href="/pricing" className="text-blue-600 hover:underline">pricing page</Link>, or check our{' '}
            <Link href="/tempo-vs-bus" className="text-blue-600 hover:underline">tempo vs bus comparison</Link> to find the right
            vehicle for your group size. For instant booking, call{' '}
            <a href="tel:+917668570551" className="text-blue-600 hover:underline">7668570551</a> or{' '}
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">WhatsApp us</a>.
          </p>
        </div>
      </section>
    </div>
  );
}
