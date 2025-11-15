"use client";

import { useCallback } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Marquee from "react-fast-marquee";
import {
  Star,
  Shield,
  Clock,
  Users,
  MapPin,
  Phone,
  Car,
  Award,
  ArrowRight,
  Heart,
  Sparkles,
  Crown,
  ThumbsUp,
  Gauge,
  Bus,
  Plane,
  Camera,
  Map,
  Package,
  Navigation,
  Route,
  CheckCircle2,
  Zap,
  TrendingUp
} from "lucide-react";
import Link from "next/link";
import { phoneNumber } from "@/utilis/data";

export default function HomePage() {
  const handleBookNowClick = useCallback((serviceName = '') => {
    const message = serviceName
      ? encodeURIComponent(`Hi! I am interested in your ${serviceName} service. Can you provide more details?`)
      : encodeURIComponent("Hi! I am interested in booking a taxi service. Can you help me with the details?");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* HERO SECTION */}
      <motion.section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-2 pb-8 md:pt-0 md:pb-4">
        {/* Background Image with Enhanced Visibility */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-110"
            style={{
              backgroundImage: "url('/images/HERO_SECTION_MAIN_PAGE.jpg')",
              filter: "brightness(1.1) contrast(1.1)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/40 via-transparent to-transparent"></div>
        </div>

        {/* Animated Orbs - Enhanced & Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-5 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-yellow-400/60 to-amber-500/60 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 },
            x: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 },
            scale: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-40 right-5 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-orange-400/50 to-pink-400/50 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.4 },
            x: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 },
            y: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 },
            scale: { duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute bottom-40 left-1/2 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center -mt-12 md:-mt-20">
          {/* Top Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mb-4 md:mb-3"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-full px-4 py-2 md:px-8 md:py-3 shadow-lg">
              <Crown className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
              <span className="text-gray-800 font-bold text-xs md:text-base tracking-wide">INDIA&apos;S #1 TRAVEL PARTNER</span>
              <Sparkles className="w-4 h-4 md:w-6 md:h-6 text-gray-800" />
            </div>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-4 leading-tight tracking-tight drop-shadow-2xl px-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="block text-white drop-shadow-lg"
              >
                Your Journey,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="block bg-gradient-to-r from-yellow-300 via-[#FACF2D] to-orange-400 bg-clip-text text-transparent drop-shadow-2xl"
                style={{ WebkitTextStroke: '0.5px rgba(255,255,255,0.3)' }}
              >
                <TypeAnimation
                  sequence={[
                    'Our Passion',
                    2500,
                    'Our Priority',
                    2500,
                    'Our Promise',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-lg bg-black/20 backdrop-blur-sm px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/20"
          >
            <span className="hidden sm:inline">✨ Wedding Cars • ✈️ Airport Transfers • 🗺️ Tour Packages • 🚐 Tempo Traveller • 👨‍🏫 Expert Guides • 🌍 500+ Destinations</span>
            <span className="sm:hidden">✨ Weddings • ✈️ Airports • 🗺️ Tours • 🚐 Tempo • 👨‍🏫 Guides • 🌍 500+ Destinations</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookNowClick()}
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Get Free Quote
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookNowClick()}
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 md:border-3 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full shadow-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-amber-50 hover:border-amber-400 transition-all"
            >
              <Phone className="w-5 h-5 md:w-6 md:h-6" />
              <span className="truncate">Call: {phoneNumber}</span>
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto px-4"
          >
            {[
              { icon: Shield, text: "100% Verified", gradient: "from-[#FACF2D] to-amber-500" },
              { icon: Gauge, text: "Instant Booking", gradient: "from-amber-400 to-orange-500" },
              { icon: ThumbsUp, text: "10K+ Reviews", gradient: "from-orange-400 to-amber-600" },
              { icon: Award, text: "Best Rated", gradient: "from-yellow-400 to-amber-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.6 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="relative group cursor-pointer"
              >
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl md:rounded-2xl p-2 md:p-3 hover:border-amber-300 hover:shadow-xl transition-all shadow-md">
                  <div className={`inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br ${item.gradient} rounded-lg md:rounded-xl mb-1 md:mb-2 shadow-md`}>
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gray-800" />
                  </div>
                  <p className="text-gray-800 font-bold text-xs md:text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-800 text-sm font-semibold">Scroll Down</span>
            <div className="w-8 h-14 border-3 border-amber-400 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-4 bg-amber-600 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* WEDDING SERVICES SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-pink-50/30 to-rose-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-rose-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image/Visual */}
            <div className="relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl"
                />

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100 hover:shadow-3xl hover:border-amber-300 cursor-pointer"
                >
                  <div className="aspect-video bg-gradient-to-br from-amber-400 via-[#FACF2D] to-orange-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/wedding_section.jpg')] bg-cover bg-center opacity-50 transition-opacity duration-300 hover:opacity-60"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Heart className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Wedding Services</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>Make Your Day Special</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-yellow-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-600">BMW</div>
                      <div className="text-xs text-gray-600">Luxury Cars</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-600">Audi</div>
                      <div className="text-xs text-gray-600">Premium</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">Benz</div>
                      <div className="text-xs text-gray-600">Royal</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-sm md:text-base">Make Your Day Memorable</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Royal Wedding Car Rental Services
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Luxury wedding cars and tempo travellers for your special day. From BMW, Audi, Mercedes to vintage cars - make your wedding entrance unforgettable!
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Car, title: "Luxury Cars", desc: "BMW, Audi, Mercedes" },
                  { icon: Heart, title: "Car Decoration", desc: "Beautiful floral decor" },
                  { icon: Users, title: "Baraat Service", desc: "Tempo traveller 9-26" },
                  { icon: Crown, title: "Professional", desc: "Chauffeur driven" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link href="/wedding" className="w-full sm:w-auto">
                  <button className="w-full px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    Explore Wedding Cars
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Wedding Car Service')}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Quick Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIRPORT SERVICES SECTION */}
      <section className="py-20 bg-gradient-to-b from-blue-50/30 via-sky-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-sky-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Airport Transfer</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Reliable Airport Transfer Services
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Professional airport pickup and drop services across all major airports. On-time, comfortable, and hassle-free transfers for your journey.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Clock, title: "24/7 Available", desc: "Round the clock service" },
                  { icon: Shield, title: "Safe & Secure", desc: "Verified drivers" },
                  { icon: Phone, title: "Live Tracking", desc: "Real-time updates" },
                  { icon: Car, title: "All Airports", desc: "50+ airports covered" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/airport-service">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    Book Airport Transfer
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Airport Transfer')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Call
                </button>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/airport_section.jpg')] bg-cover bg-center opacity-50"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Plane className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Airport Transfers</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>Professional & Punctual</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-yellow-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-600">50+</div>
                      <div className="text-xs text-gray-600">Airports</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-600">24/7</div>
                      <div className="text-xs text-gray-600">Service</div>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">5000+</div>
                      <div className="text-xs text-gray-600">Transfers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUS ROUTES SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-emerald-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-green-200/40 to-emerald-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-green-400 via-emerald-400 to-teal-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/bus/hero_section_image.png')] bg-cover bg-center opacity-50"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Bus className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Bus Routes</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>Luxury Group Travel</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-green-50 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">22-56</div>
                      <div className="text-xs text-gray-600">Seater</div>
                    </div>
                    <div className="text-center p-3 bg-emerald-50 rounded-xl">
                      <div className="text-2xl font-bold text-emerald-600">Volvo</div>
                      <div className="text-xs text-gray-600">AC Buses</div>
                    </div>
                    <div className="text-center p-3 bg-teal-50 rounded-xl">
                      <div className="text-2xl font-bold text-teal-600">GPS</div>
                      <div className="text-xs text-gray-600">Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Bus className="w-5 h-5" />
                <span className="font-semibold">Luxury Bus Rentals</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Premium Bus Routes for Groups
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Luxury buses for large groups (22-56 seater). Perfect for corporate events, family trips, and group tours. Volvo & AC buses with entertainment systems.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Bus, title: "Volvo & AC", desc: "Premium buses" },
                  { icon: Users, title: "22-56 Seater", desc: "Group capacity" },
                  { icon: Star, title: "Entertainment", desc: "Music system" },
                  { icon: Navigation, title: "GPS Tracking", desc: "Live location" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/bus-routes">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    View Bus Routes
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Bus Rental')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTSTATION ROUTES SECTION */}
      <section className="py-20 bg-gradient-to-b from-purple-50/30 via-violet-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-violet-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Route className="w-5 h-5" />
                <span className="font-semibold">500+ Destinations</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Outstation Taxi Routes Across India
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Book outstation cabs to 500+ destinations across India. Delhi to Agra, Jaipur, Shimla, Manali & more. One-way & round trips with transparent pricing.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Map, title: "500+ Routes", desc: "All destinations" },
                  { icon: Car, title: "One-way Trips", desc: "Flexible booking" },
                  { icon: Shield, title: "GPS Tracking", desc: "Safe journey" },
                  { icon: Award, title: "Best Rates", desc: "Transparent pricing" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/routes">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    View All Routes
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Outstation Cab')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Call
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-purple-200/40 to-violet-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-purple-400 via-violet-400 to-indigo-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/citypage_hero_section_image.jpg')] bg-cover bg-center opacity-50"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Map className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Outstation Routes</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>500+ Destinations</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-purple-50 rounded-xl">
                      <div className="text-2xl font-bold text-purple-600">500+</div>
                      <div className="text-xs text-gray-600">Routes</div>
                    </div>
                    <div className="text-center p-3 bg-violet-50 rounded-xl">
                      <div className="text-2xl font-bold text-violet-600">24/7</div>
                      <div className="text-xs text-gray-600">Booking</div>
                    </div>
                    <div className="text-center p-3 bg-indigo-50 rounded-xl">
                      <div className="text-2xl font-bold text-indigo-600">GPS</div>
                      <div className="text-xs text-gray-600">Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOUR PACKAGES SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/sightseeing/Sightseeingpage_hero_section_image.jpg')] bg-cover bg-center opacity-50"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Package className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Tour Packages</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>Curated Experiences</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-orange-50 rounded-xl">
                      <div className="text-2xl font-bold text-orange-600">50+</div>
                      <div className="text-xs text-gray-600">Packages</div>
                    </div>
                    <div className="text-center p-3 bg-amber-50 rounded-xl">
                      <div className="text-2xl font-bold text-amber-600">Golden</div>
                      <div className="text-xs text-gray-600">Triangle</div>
                    </div>
                    <div className="text-center p-3 bg-yellow-50 rounded-xl">
                      <div className="text-2xl font-bold text-yellow-600">Custom</div>
                      <div className="text-xs text-gray-600">Tours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Package className="w-5 h-5" />
                <span className="font-semibold">Curated Experiences</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Tour Packages Across India
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Curated travel experiences across North India. Golden Triangle tours, hill stations, pilgrimage tours & custom itineraries. Complete travel solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: MapPin, title: "Golden Triangle", desc: "Delhi-Agra-Jaipur" },
                  { icon: Package, title: "Hill Stations", desc: "Shimla, Manali" },
                  { icon: Heart, title: "Pilgrimage", desc: "Spiritual tours" },
                  { icon: Star, title: "Custom Tours", desc: "Your itinerary" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    View Tour Packages
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Tour Package')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMPO TRAVELLER SECTION */}
      <section className="py-20 bg-gradient-to-b from-indigo-50/30 via-blue-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Users className="w-5 h-5" />
                <span className="font-semibold">Group Travel Solutions</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Tempo Traveller Rentals
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Perfect for group travel (12-26 seater). AC vehicles with pushback seats. Ideal for family trips, corporate tours, and group outings.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, title: "12-26 Seater", desc: "Group capacity" },
                  { icon: Car, title: "AC Vehicles", desc: "Comfortable ride" },
                  { icon: Heart, title: "Family Friendly", desc: "Spacious interiors" },
                  { icon: Award, title: "Corporate Tours", desc: "Professional service" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tempo-traveller">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    View Tempo Fleet
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Tempo Traveller')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Call
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 via-indigo-400 to-violet-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/tempo_section.jpg')] bg-cover bg-center opacity-50"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Users className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Tempo Traveller</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>Group Travel Made Easy</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">12-26</div>
                      <div className="text-xs text-gray-600">Seater</div>
                    </div>
                    <div className="text-center p-3 bg-indigo-50 rounded-xl">
                      <div className="text-2xl font-bold text-indigo-600">AC</div>
                      <div className="text-xs text-gray-600">Comfort</div>
                    </div>
                    <div className="text-center p-3 bg-violet-50 rounded-xl">
                      <div className="text-2xl font-bold text-violet-600">GPS</div>
                      <div className="text-xs text-gray-600">Tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOUR GUIDE SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-teal-50/30 to-cyan-50/30 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="relative">
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/tour-guide.jpg')] bg-cover bg-center opacity-50"></div>
                    <div className="relative text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Camera className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.5)' }}>Tour Guides</h3>
                      <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.9)' }}>Expert Local Guides</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-3 bg-teal-50 rounded-xl">
                      <div className="text-2xl font-bold text-teal-600">14+</div>
                      <div className="text-xs text-gray-600">Cities</div>
                    </div>
                    <div className="text-center p-3 bg-cyan-50 rounded-xl">
                      <div className="text-2xl font-bold text-cyan-600">6</div>
                      <div className="text-xs text-gray-600">Languages</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-xl">
                      <div className="text-2xl font-bold text-blue-600">100+</div>
                      <div className="text-xs text-gray-600">Guides</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Camera className="w-5 h-5" />
                <span className="font-semibold">Expert Local Guides</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Professional Tour Guide Services
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Expert guides in 14+ cities, 6 languages. Certified guides, multi-language support, cultural insights & personalized tours. Make your journey memorable!
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Award, title: "Certified Guides", desc: "Licensed professionals" },
                  { icon: MapPin, title: "14+ Cities", desc: "Pan India coverage" },
                  { icon: Camera, title: "Cultural Insights", desc: "Local expertise" },
                  { icon: Star, title: "6 Languages", desc: "Multi-lingual" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-amber-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gray-800" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/tour-guide">
                  <button className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-sm md:text-base rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    Book Tour Guide
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button
                  onClick={() => handleBookNowClick('Tour Guide')}
                  className="px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Quick Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CITIES WE SERVE SECTION */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-2 rounded-full mb-6 shadow-sm"
            >
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">We Are Available Across India</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Serving 14+ Premium Cities
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4"
            >
              From bustling metros to serene hill stations, we provide reliable taxi services across major cities in North India
            </motion.p>
          </div>

          {/* Cities Marquee */}
          <div className="mb-8">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {['Delhi', 'Agra', 'Jaipur', 'Haridwar', 'Chandigarh', 'Shimla', 'Manali'].map((city, index) => (
                <Link href={`/${city.toLowerCase()}`} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="mx-2 md:mx-4 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border-2 border-transparent hover:border-blue-400 min-w-[160px] md:min-w-[200px] cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-2 md:mb-3 shadow-lg">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{city}</h3>
                      <p className="text-xs md:text-sm text-gray-600">Cab Service</p>
                      <div className="mt-1 md:mt-2 flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs font-semibold">Available</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>

          {/* Second Row - Reverse Direction */}
          <div className="mb-12">
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true}>
              {['Amritsar', 'Dehradun', 'Rishikesh', 'Jodhpur', 'Udaipur', 'Ayodhya', 'Ahmedabad'].map((city, index) => (
                <Link href={`/${city.toLowerCase()}`} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="mx-2 md:mx-4 bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 md:p-6 border-2 border-transparent hover:border-purple-400 min-w-[160px] md:min-w-[200px] cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-2 md:mb-3 shadow-lg">
                        <Car className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{city}</h3>
                      <p className="text-xs md:text-sm text-gray-600">Taxi Service</p>
                      <div className="mt-1 md:mt-2 flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs font-semibold">Available</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </Marquee>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { icon: MapPin, number: "14+", label: "Cities Covered", color: "from-blue-500 to-cyan-500" },
              { icon: Route, number: "500+", label: "Routes Available", color: "from-purple-500 to-pink-500" },
              { icon: Users, number: "10K+", label: "Happy Customers", color: "from-green-500 to-emerald-500" },
              { icon: Zap, number: "24/7", label: "Service Available", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg text-center border-2 border-gray-100 hover:border-gray-200 transition-all"
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3 shadow-lg`}>
                  <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-amber-200">
            <div className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-sm md:text-base">Get Started Today</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent px-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
                Book now and experience the best travel services in India. Professional drivers, premium vehicles, and 24/7 support guaranteed!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
              <button
                onClick={() => handleBookNowClick()}
                className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-base md:text-lg rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3 group"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleBookNowClick()}
                className="px-8 md:px-10 py-4 md:py-5 bg-white border-2 md:border-3 border-amber-300 text-gray-800 font-bold text-base md:text-lg rounded-full hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span className="truncate">Call: {phoneNumber}</span>
              </button>
            </div>

            <div className="text-center px-4">
              <p className="text-sm md:text-base text-gray-600 font-semibold flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                <span>Available 24/7 for bookings and inquiries</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
