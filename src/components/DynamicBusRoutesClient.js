'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Bus, CheckCircle,
  ArrowRight, Route, Award, TrendingUp, IndianRupee, Sparkles, Info, DollarSign, Navigation, HelpCircle, ChevronDown,
  Compass, MapPinned, Sun
} from '@/components/ui/icons';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// Import from smaller utility file to reduce bundle size
import { additionalInfo } from '@/utilis/busUtilsData';
import dynamic from 'next/dynamic';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function DynamicBusRoutesClient({ data }) {
  const { routeSlug, origin, destination, routeData, localSightseeing, fleet, routeDescription, relatedRoutes } = data;

  const [selectedBus, setSelectedBus] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Ultra Modern */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background with Parallax */}
        <div className="absolute inset-0">
          <Image
            src="/images/bus/hero_section_image.webp"
            alt={`Luxury bus rental service from ${origin} to ${destination} - 22 to 56 seater AC coaches for group travel`}
            fill
            className="object-cover brightness-50"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,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"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#FACF2D]/30 to-orange-500/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-1 sm:gap-2 bg-[#FACF2D]/20 backdrop-blur-md border border-[#FACF2D]/30 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 sm:mb-6 md:mb-8 shadow-xl"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#FACF2D]" />
            <span className="text-[#FACF2D] font-bold text-xs sm:text-sm tracking-wider">✨ PREMIUM BUS ROUTE ✨</span>
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#FACF2D]" />
          </motion.div>

          {/* Price Badge */}
          <div className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-3">
            Starting from ₹30/km
          </div>

          {/* Main Title with TypeAnimation */}
          <div className="mb-6 md:mb-8 overflow-hidden px-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-4"
            >
              {origin} <span className="text-[#FACF2D]">to</span> {destination} Bus
            </motion.h1>
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#FACF2D] via-yellow-300 to-orange-400 bg-clip-text text-transparent leading-tight"
            >
              <TypeAnimation
                sequence={[
                  '✨ Comfortable Journey',
                  2500,
                  '💎 Luxury Experience',
                  2500,
                  '🛡️ Safe Travel',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>
          </div>

          {/* Route Stats - Cute Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-10 px-4"
          >
            {routeData.distance && (
              <motion.div
                
                className="bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl text-white flex items-center border-2 border-white/20 hover:border-[#FACF2D]/50 transition-all"
              >
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#FACF2D]" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-semibold">Distance</div>
                  <div className="text-sm md:text-base font-black">{routeData.distance}</div>
                </div>
              </motion.div>
            )}

            {routeData.duration && (
              <motion.div
                
                className="bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl text-white flex items-center border-2 border-white/20 hover:border-[#FACF2D]/50 transition-all"
              >
                <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#FACF2D]" />
                <div className="text-left">
                  <div className="text-xs text-gray-300 font-semibold">Duration</div>
                  <div className="text-sm md:text-base font-black">{routeData.duration}</div>
                </div>
              </motion.div>
            )}

            <motion.div
              
              className="bg-white/10 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl md:rounded-2xl text-white flex items-center border-2 border-white/20 hover:border-[#FACF2D]/50 transition-all"
            >
              <Bus className="w-4 h-4 md:w-5 md:h-5 mr-2 text-[#FACF2D]" />
              <div className="text-left">
                <div className="text-xs text-gray-300 font-semibold">Available</div>
                <div className="text-sm md:text-base font-black">{fleet.length} Buses</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4"
          >
            <motion.a
              href="tel:+917668570551"
              
              whileTap={{ scale: 0.95 }}
              className="group relative bg-[#FACF2D] text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base md:text-lg overflow-hidden shadow-2xl text-center"
              aria-label={`Call Triveni Cabs for ${origin} to ${destination} bus booking`}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="hidden sm:inline">📞 Call: +91 76685 70551</span>
                <span className="sm:hidden">📞 Call Now</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="https://wa.me/917668570551"
              
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300 shadow-2xl text-center"
              aria-label={`Contact Triveni Cabs on WhatsApp for ${origin} to ${destination} bus booking`}
            >
              <span className="flex items-center justify-center">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                💬 WhatsApp Us
              </span>
            </motion.a>
          </motion.div>

          {/* Enquiry Form */}
          <div className="mt-8 max-w-md mx-auto">
            <QuickEnquiryForm
              fromCity={origin}
              toCity={destination}
              pageType="bus"
            />
          </div>
        </div>
      </motion.section>

      {/* Trust Strip */}
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 md:gap-10 text-sm text-gray-600 flex-wrap">
            <span className="flex items-center gap-1.5 font-medium">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> 4.9★ Google Rating
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Users className="w-4 h-4 text-blue-500" /> 10,000+ Trips
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Shield className="w-4 h-4 text-green-500" /> Since 2018
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-4 h-4 text-red-500" /> 500+ Cities
            </span>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* ROUTE HIGHLIGHTS SECTION - Route-specific content */}
      {/* ============================================ */}
      {routeDescription && (
        <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          {/* Decorative top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-orange-400" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-10 md:mb-14"
            >
              <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6 border border-[#FACF2D]/20">
                <Compass className="w-4 h-4 md:w-5 md:h-5 text-[#FACF2D]" />
                <span className="text-gray-800 font-bold text-xs md:text-sm tracking-wider">ROUTE GUIDE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-3 md:mb-4 px-4">
                {origin} to {destination} <span className="text-[#FACF2D]">Road Trip Guide</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Everything you need to know about the {origin} to {destination} route by bus
              </p>
            </motion.div>

            {/* Quick Info Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
            >
              <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-100 hover:border-[#FACF2D] px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-[#FACF2D]">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium">Travel Time</p>
                  <p className="text-gray-900 font-bold text-sm md:text-base">{routeDescription.travelTime}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-100 hover:border-[#FACF2D] px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-[#FACF2D]">
                  <Navigation className="w-4 h-4 md:w-5 md:h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium">Distance</p>
                  <p className="text-gray-900 font-bold text-sm md:text-base">{routeDescription.distance}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl md:rounded-2xl border-2 border-gray-100 hover:border-[#FACF2D] px-4 md:px-5 py-2.5 md:py-3 flex items-center gap-3 shadow-sm hover:shadow-md transition-all">
                <div className="p-1.5 md:p-2 rounded-lg md:rounded-xl bg-[#FACF2D]">
                  <Sun className="w-4 h-4 md:w-5 md:h-5 text-black" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium">Best Season</p>
                  <p className="text-gray-900 font-bold text-xs md:text-sm">{routeDescription.bestSeason}</p>
                </div>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8">
              {/* Highlights + Bus Types Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white rounded-2xl md:rounded-3xl border-2 border-gray-100 hover:border-[#FACF2D] p-5 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#FACF2D]">
                      <MapPinned className="w-5 h-5 text-black" />
                    </div>
                    Route Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-5 md:mb-6">
                    {routeDescription.highlights}
                  </p>

                  {/* Recommended Bus Types */}
                  {routeDescription.busTypes && (
                    <div className="p-3 md:p-4 bg-[#FACF2D]/10 rounded-xl border border-[#FACF2D]/20">
                      <p className="text-gray-900 font-bold text-sm mb-1 flex items-center gap-2">
                        <Bus className="w-4 h-4 text-[#FACF2D]" />
                        Recommended Bus Types
                      </p>
                      <p className="text-gray-600 text-xs md:text-sm">{routeDescription.busTypes}</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Stops + Travel Tips Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white rounded-2xl md:rounded-3xl border-2 border-gray-100 hover:border-[#FACF2D] p-5 md:p-8 h-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-[#FACF2D]">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    Popular Stops En-Route
                  </h3>
                  <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                    {routeDescription.stops.map((stop, index) => (
                      <div key={index} className="flex items-center gap-3 md:gap-4 group">
                        <div className="relative flex flex-col items-center">
                          <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                            index === 0 ? 'bg-green-500 text-white' :
                            index === routeDescription.stops.length - 1 ? 'bg-[#FACF2D] text-black' :
                            'bg-gray-100 text-gray-600 border-2 border-gray-200'
                          }`}>
                            {index + 1}
                          </div>
                          {index < routeDescription.stops.length - 1 && (
                            <div className="w-0.5 h-3 md:h-4 bg-gray-200 mt-0.5 md:mt-1" />
                          )}
                        </div>
                        <span className="text-gray-700 group-hover:text-[#FACF2D] transition-colors font-medium text-sm md:text-base">
                          {stop}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Travel Tips */}
                  {routeDescription.travelTips && (
                    <div className="p-3 md:p-4 bg-blue-50 rounded-xl border border-blue-100">
                      <p className="text-blue-800 font-bold text-sm mb-1 flex items-center gap-2">
                        <Info className="w-4 h-4 text-blue-600" />
                        Travel Tips
                      </p>
                      <p className="text-blue-700 text-xs md:text-sm">{routeDescription.travelTips}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* SEO-Rich Introduction Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed mb-4 md:mb-6">
              Looking for reliable <strong>bus rental services from {origin} to {destination}</strong>? Book our premium <strong>luxury bus hire</strong> service featuring <strong>22 seater mini buses</strong> to <strong>56 seater Volvo coaches</strong>.
              {routeData.distance && routeData.duration && (
                <> Covering <strong>{routeData.distance}</strong> in approximately <strong>{routeData.duration}</strong>, </>
              )}
              our <strong>AC buses</strong> are perfect for corporate events, weddings, pilgrimage tours, and group travel.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
              All vehicles feature <strong>pushback seats</strong>, entertainment systems, <strong>GPS tracking</strong>, and spacious luggage storage. Travel with experienced <strong>professional drivers</strong> ensuring safe and comfortable journeys on the <strong>{origin} to {destination} route</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Buses Section */}
      <div className="pt-8 md:pt-12 pb-12 md:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center bg-[#FACF2D]/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-black font-semibold text-xs md:text-sm mb-3 md:mb-4">
              <Bus className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              🚌 Available Buses
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4 px-4">
              Luxury Bus Rental Options - <span className="text-[#FACF2D]">{origin} to {destination} Route</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              <strong>Select from our premium fleet</strong> for your journey from {origin} to {destination}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {fleet.map((bus, index) => (
              <div
                key={bus.id}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#FACF2D] ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                {/* Premium/Luxury Badge */}
                {bus.premium && (
                  <div className="absolute top-4 right-4 z-10 bg-[#FACF2D] text-black px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Award className="w-3 h-3 mr-1" />
                    ⭐ Premium
                  </div>
                )}
                {bus.luxury && (
                  <div className="absolute top-4 right-4 z-10 bg-black text-[#FACF2D] px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    💎 Luxury
                  </div>
                )}

                {/* Bus Image */}
                <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={bus.image}
                    alt={bus.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,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"
                  />
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg flex items-center shadow-lg">
                    <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 text-black" />
                    <span className="font-bold text-sm md:text-base text-black">{bus.capacity}</span>
                  </div>
                </div>

                {/* Bus Details */}
                <div className="p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{bus.name}</h3>

                  {/* Pricing */}
                  <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                    <div className="flex items-center justify-between bg-gray-50 px-3 md:px-4 py-2 md:py-3 rounded-lg">
                      <span className="text-gray-600 font-medium flex items-center text-sm md:text-base">
                        <Route className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Per KM
                      </span>
                      <span className="text-black font-bold text-sm md:text-base">{bus.ratePerKm}</span>
                    </div>

                    <div className="flex items-center justify-between bg-[#FACF2D]/10 px-3 md:px-4 py-2 md:py-3 rounded-lg">
                      <span className="text-gray-700 font-medium flex items-center text-sm md:text-base">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                        Minimum
                      </span>
                      <span className="text-black font-bold text-sm md:text-base">{bus.minimumCharge}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 px-3 md:px-4 py-2 md:py-3 rounded-lg">
                      <span className="text-gray-600 font-medium text-sm md:text-base">Driver Allowance</span>
                      <span className="text-black font-bold text-sm md:text-base">{bus.driverAllowance}</span>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-gray-50 px-3 md:px-4 py-2 md:py-3 rounded-lg mb-3 md:mb-4">
                    <p className="text-xs md:text-sm text-gray-700 font-medium">
                      <span className="font-bold text-black">Ideal for:</span> {bus.idealFor}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {bus.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 md:px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => {
                      setSelectedBus(bus);
                      trackPhoneCall('bus_routes');
                      window.location.href = `tel:+917668570551`;
                    }}
                    className="w-full bg-black text-[#FACF2D] py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-[#FACF2D]/20"
                  >
                    📞 Book Now
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Sightseeing Section */}
      {localSightseeing.length > 0 && (
        <div className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-flex items-center bg-[#FACF2D]/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-black font-semibold text-xs md:text-sm mb-3 md:mb-4">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                📍 Tourist Attractions
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4 px-4">
                Tourist Attractions in <span className="text-[#FACF2D]">{destination}</span> - Bus Tour Guide
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 px-4">
                <strong>Explore popular sightseeing spots</strong> with our luxury bus tours in {destination}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
              {localSightseeing.map((place, index) => (
                <div
                  key={index}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  className={`group bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#FACF2D] rounded-xl p-3 sm:p-4 md:p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
                >
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-2 md:mb-3 text-[#FACF2D] group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 group-hover:text-[#FACF2D] transition-colors">{place}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Book with Us */}
      <div className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4 px-4">
              Why Choose Our <span className="text-[#FACF2D]">{origin} to {destination}</span> Bus Service
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              <strong>Your trusted travel partner</strong> for safe and comfortable bus journeys
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Shield, title: '🛡️ Safe Travel', description: 'GPS tracking & sanitized vehicles' },
              { icon: Star, title: '⭐ Expert Drivers', description: 'Professional & experienced' },
              { icon: TrendingUp, title: '💰 Best Prices', description: 'Transparent pricing, no hidden charges' },
              { icon: Clock, title: '🕐 24/7 Support', description: 'Always available for you' }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                className={`bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#FACF2D] text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                <div className="bg-[#FACF2D] w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section - SEO Optimized */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 md:px-6 py-2 md:py-3 rounded-full mb-4 md:mb-6">
              <HelpCircle className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              <span className="text-blue-600 font-bold text-xs md:text-sm tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              {origin} to {destination} <span className="text-[#FACF2D]">Bus Rental FAQs</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600">Everything you need to know about our bus hire service</p>
          </motion.div>

          <div className="space-y-3 md:space-y-4">
            {[
              {
                question: `What is the distance from ${origin} to ${destination}?`,
                answer: routeData.distance !== 'Contact for details'
                  ? `The distance from ${origin} to ${destination} is approximately ${routeData.distance}. Our luxury buses cover this route comfortably with experienced drivers.`
                  : `The distance from ${origin} to ${destination} varies based on the route. Please contact us at +91-7668570551 for exact details and the best route options.`
              },
              {
                question: `How long does it take from ${origin} to ${destination} by bus?`,
                answer: routeData.duration !== 'Contact for details'
                  ? `The journey from ${origin} to ${destination} takes approximately ${routeData.duration} by luxury bus, depending on traffic and route conditions. We ensure comfortable travel throughout the journey.`
                  : `The journey time from ${origin} to ${destination} depends on various factors including traffic and route. Please contact us at +91-7668570551 for accurate travel time estimates.`
              },
              {
                question: `What bus sizes are available for ${origin} to ${destination} route?`,
                answer: `We offer multiple bus sizes for ${origin} to ${destination} route including 22, 25, 27, 32, 35, 41, 45, 49, 52, and 56 seater buses. All buses are AC equipped with pushback seats, entertainment systems, and modern amenities for comfortable group travel.`
              },
              {
                question: `How much does it cost to rent a bus from ${origin} to ${destination}?`,
                answer: `Bus rental rates from ${origin} to ${destination} start from ₹30/km for 22 seater mini buses and go up to ₹65/km for 56 seater luxury Volvo buses. Final cost depends on bus size, season, and booking duration. Contact us at +91-7668570551 for exact quotes.`
              },
              {
                question: `Can I book a bus online for ${origin} to ${destination}?`,
                answer: `Yes, you can book a bus online for ${origin} to ${destination} through our website or by calling +91-7668570551. We provide instant confirmation, flexible booking options, and 24/7 customer support for all your bus rental needs.`
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-[#FACF2D] transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-[#FACF2D]" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-8 pb-4 md:pb-6">
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Routes from Same Origin */}
      {relatedRoutes && relatedRoutes.length > 0 && (
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
              More Bus Routes from {origin}
            </h2>
            <p className="text-gray-500 text-center mb-8">Popular bus hire destinations from {origin}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedRoutes.map((r) => (
                <Link
                  key={r.slug}
                  href={`/bus-routes/${r.slug}`}
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#FACF2D] hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center shrink-0 group-hover:bg-yellow-200 transition-colors">
                    <Navigation className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {origin} to {r.name}
                    </h3>
                    <p className="text-xs text-gray-500">{r.type} • {r.distance}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/bus-routes"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700"
              >
                View all bus routes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Related Services — Cross-linking for SEO */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Other Ways to Travel {origin} to {destination}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href={`/tempo-traveller/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#FACF2D] hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">🚐</div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{origin} to {destination} Tempo</h3>
              <p className="text-sm text-gray-500 mt-1">12-26 seater AC tempo from ₹23/km</p>
            </Link>
            <Link
              href={`/one-way-cab/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`}
              className="group p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#FACF2D] hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">🚕</div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{origin} to {destination} Cab</h3>
              <p className="text-sm text-gray-500 mt-1">Sedan & SUV from ₹11/km one-way</p>
            </Link>
            <Link
              href={`/sightseeing`}
              className="group p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#FACF2D] hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">🗺️</div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Sightseeing Tours</h3>
              <p className="text-sm text-gray-500 mt-1">Full-day guided tour packages</p>
            </Link>
            <Link
              href={`/tour-package`}
              className="group p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#FACF2D] hover:shadow-lg transition-all"
            >
              <div className="text-2xl mb-2">✈️</div>
              <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">Tour Packages</h3>
              <p className="text-sm text-gray-500 mt-1">All-inclusive multi-day tour packages</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="py-12 bg-gray-50" id="fare-calculator">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Calculate Your {origin} to {destination} Bus Fare
            </h2>
            <p className="text-gray-600">Get an instant price estimate for your group trip</p>
          </div>
          <FareCalculator variant="compact" defaultFrom={origin} defaultTo={destination} className="max-w-md mx-auto" />
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t-4 border-[#FACF2D] shadow-2xl z-50 py-2 sm:py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2 sm:gap-3 md:gap-4">
          <div className="hidden sm:block">
            <p className="text-xs md:text-sm text-gray-600">🚀 Ready to travel?</p>
            <p className="text-sm md:text-xl font-bold text-gray-900">{origin} → {destination}</p>
          </div>

          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              onClick={() => trackPhoneCall('bus_routes')} href="tel:+917668570551"
              className="flex-1 sm:flex-none bg-[#FACF2D] text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">📞 Call Now</span>
              <span className="sm:hidden">📞 Call</span>
            </a>

            <a
              onClick={() => trackWhatsAppClick('bus_routes')} href="https://wa.me/917668570551"
              className="flex-1 sm:flex-none bg-black text-[#FACF2D] px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all duration-300"
            >
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>


      {/* Add padding at bottom to prevent content from being hidden by sticky CTA */}
      <div className="h-16 sm:h-20"></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
