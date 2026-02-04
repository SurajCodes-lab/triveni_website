'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Bus, CheckCircle,
  ArrowRight, Route, Award, TrendingUp, IndianRupee, Sparkles, Info, DollarSign, Navigation, HelpCircle, ChevronDown
} from '@/components/ui/icons';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
// Import from smaller utility file to reduce bundle size
import { additionalInfo } from '@/utilis/busUtilsData';

export default function DynamicBusRoutesClient({ data }) {
  const { routeSlug, origin, destination, routeData, localSightseeing, fleet } = data;

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
            src="/images/bus/hero_section_image.png"
            alt={`Luxury bus rental service from ${origin} to ${destination} - 22 to 56 seater AC coaches for group travel`}
            fill
            className="object-cover brightness-50"
            priority
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />
        </div>

        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-[#FACF2D]/30 to-orange-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />

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

          {/* Main Title with TypeAnimation */}
          <div className="mb-6 md:mb-8 overflow-hidden px-4">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-3 md:mb-4"
            >
              🚌 {origin} <span className="text-[#FACF2D]">to</span> {destination}
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
                whileHover={{ scale: 1.05, y: -5 }}
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
                whileHover={{ scale: 1.05, y: -5 }}
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
              whileHover={{ scale: 1.05, y: -5 }}
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
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(250, 207, 45, 0.5)" }}
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
              whileHover={{ scale: 1.05 }}
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
        </div>
      </motion.section>

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

      {/* Sticky Bottom CTA */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t-4 border-[#FACF2D] shadow-2xl z-50 py-2 sm:py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-2 sm:gap-3 md:gap-4">
          <div className="hidden sm:block">
            <p className="text-xs md:text-sm text-gray-600">🚀 Ready to travel?</p>
            <p className="text-sm md:text-xl font-bold text-gray-900">{origin} → {destination}</p>
          </div>

          <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:+917668570551"
              className="flex-1 sm:flex-none bg-[#FACF2D] text-black px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-all duration-300"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">📞 Call Now</span>
              <span className="sm:hidden">📞 Call</span>
            </a>

            <a
              href="https://wa.me/917668570551"
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
