"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import {
  Star,
  ChevronRight,
  Car,
  Users,
  Package,
  MapPin,
  Clock,
  Phone,
  Shield,
  Award,
  Zap,
  Heart,
  CheckCircle,
  TrendingUp,
  Sparkles,
  ArrowRight,
  BadgeCheck,
  Headphones,
  Navigation,
  Gauge,
  Crown,
  CircleDot,
  ThumbsUp
} from "lucide-react";
import Link from "next/link";
import { services, features, vehiclesServices, tempoTravellers, cities } from "@/utilis/data";

export default function ServicesPage() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* HERO SECTION WITH BACKGROUND IMAGE & ANIMATIONS */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden pt-0 pb-4"
      >
        {/* Background Image with Light Gradient Overlay */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/about/about_banner.jpg')" }}
          />
          {/* Light Gradient Overlay - Yellow Theme */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/95 via-amber-50/95 to-orange-50/95"></div>
        </div>

        {/* Animated Orbs - Yellow Theme */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-300/40 to-amber-300/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 },
            x: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 },
            scale: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-yellow-200/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: [0, 60, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.4 },
            x: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 },
            y: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 },
            scale: { duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }
          }}
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-amber-200/40 to-orange-200/40 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center -mt-16 md:-mt-20">

          {/* Top Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="-mt-8 md:-mt-4"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-full px-8 py-3 mb-3 shadow-lg">
              <Crown className="w-6 h-6 text-gray-800" />
              <span className="text-gray-800 font-bold text-sm md:text-base tracking-wide">INDIA'S TRUSTED TRAVEL PARTNER</span>
              <Sparkles className="w-6 h-6 text-gray-800" />
            </div>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="block text-gray-800"
              >
                Travel
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="block bg-gradient-to-r from-amber-500 via-[#FACF2D] to-orange-500 bg-clip-text text-transparent"
              >
                <TypeAnimation
                  sequence={[
                    'Anywhere',
                    2500,
                    'Anytime',
                    2500,
                    'Affordably',
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
            className="text-lg md:text-xl text-gray-800 mb-6 max-w-4xl mx-auto leading-relaxed font-semibold"
          >
            Premium vehicles starting at ₹11/km • 500+ Cars • 24/7 Support
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
          >
            <Link href="https://wa.me/917668570551?text=Hello!%20I%27m%20interested%20in%20booking%20a%20cab%20service.%20Can%20you%20provide%20me%20with%20a%20free%20quote%3F" target="_blank">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-3 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-base rounded-full shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Get Free Quote
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>
            </Link>

            <Link href="https://wa.me/917668570551?text=Hi!%20I%20would%20like%20to%20speak%20with%20you%20regarding%20cab%20booking.%20Please%20contact%20me." target="_blank">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white border-3 border-amber-300 text-gray-800 font-bold text-base rounded-full shadow-lg flex items-center gap-3 hover:bg-amber-50 hover:border-amber-400 transition-all"
              >
                <Phone className="w-6 h-6" />
                Call: 7668570551
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
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
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-3 hover:border-amber-300 hover:shadow-xl transition-all shadow-md">
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${item.gradient} rounded-xl mb-2 shadow-md`}>
                    <item.icon className="w-5 h-5 text-gray-800" />
                  </div>
                  <p className="text-gray-800 font-bold text-sm">{item.text}</p>
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

      {/* Animated Statistics Section */}
      <section className="stats-section relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat-card text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Car className="w-8 h-8 text-gray-800" />
              </div>
              <div className="stat-number text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">500+</div>
              <div className="text-gray-600 font-medium">Premium Vehicles</div>
            </div>

            <div className="stat-card text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="stat-number text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">10,000+</div>
              <div className="text-gray-600 font-medium">Happy Customers</div>
            </div>

            <div className="stat-card text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="stat-number text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">50+</div>
              <div className="text-gray-600 font-medium">Cities Covered</div>
            </div>

            <div className="stat-card text-center group cursor-pointer">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-gray-800" />
              </div>
              <div className="stat-number text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Modern Cards */}
      <section className="py-20 bg-gradient-to-b from-white via-yellow-50/30 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Experience Premium Travel Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of travelers across India for reliable and comfortable journeys
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="service-card group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-yellow-100 hover:border-amber-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <Icon className="w-7 h-7 text-gray-800" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="service-card py-20 bg-gradient-to-b from-white to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Package className="w-5 h-5" />
              <span className="font-semibold">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Complete Travel Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From luxury vehicles to curated experiences, we've got everything for your perfect journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-100 hover:border-amber-300 overflow-hidden flex flex-col"
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/0 via-amber-600/0 to-orange-600/0 group-hover:from-yellow-600/5 group-hover:via-amber-600/5 group-hover:to-orange-600/5 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold ml-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8 flex-grow">
                    {service.items.map((item, i) => (
                      <div key={i} className="flex items-center group/item">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-full flex items-center justify-center group-hover/item:scale-110 transition-transform">
                          <CheckCircle className="w-4 h-4 text-gray-800" />
                        </div>
                        <span className="ml-3 text-gray-700 font-medium group-hover/item:text-amber-700 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link href={`https://wa.me/917668570551?text=Hello!%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.%20Can%20you%20provide%20more%20details%3F`} target="_blank" className="mt-auto">
                    <button className="w-full py-3 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg">
                      Explore More
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Airport Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Airport Transfer</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Reliable Airport Transfer Services
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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
                <Link href="https://wa.me/917668570551?text=Hello!%20I%20need%20airport%20transfer%20service.%20Can%20you%20help%20me%20with%20booking%20details%3F" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    Book Airport Transfer
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="https://wa.me/917668570551?text=Hi!%20I%20need%20airport%20transfer%20service.%20Please%20contact%20me%20urgently." target="_blank">
                  <button className="px-8 py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Quick Call
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Image/Visual */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative">
                {/* Floating Animation Background */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/about/about_banner.jpg')] bg-cover bg-center opacity-30"></div>
                    <div className="relative text-center text-gray-800 p-6">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Car className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Airport Transfers</h3>
                      <p className="text-gray-700">Professional & Punctual</p>
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

      {/* Wedding Services Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50/30 via-amber-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image/Visual */}
            <div className="relative">
              <div className="relative">
                {/* Floating Animation Background */}
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  <div className="aspect-video bg-gradient-to-br from-amber-400 via-[#FACF2D] to-orange-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/about/about_banner.jpg')] bg-cover bg-center opacity-20"></div>
                    <div className="relative text-center text-gray-800 p-6">
                      <div className="w-24 h-24 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Heart className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Wedding Services</h3>
                      <p className="text-gray-700">Make Your Day Special</p>
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
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Make Your Day Memorable</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Royal Wedding Car Rental Services
              </h2>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://wa.me/917668570551?text=Hello!%20I%27m%20looking%20for%20luxury%20wedding%20car%20rental%20services.%20Can%20you%20share%20the%20available%20options%20and%20pricing%3F" target="_blank">
                  <button className="px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                    Book Wedding Cars
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="https://wa.me/917668570551?text=Hi!%20I%20need%20wedding%20car%20service%20for%20my%20special%20day.%20Please%20contact%20me." target="_blank">
                  <button className="px-8 py-4 bg-white border-2 border-amber-300 text-gray-800 font-bold rounded-full hover:bg-amber-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Quick Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tempo Traveller Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Group Travel</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Tempo Traveller Fleet
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perfect for group outings, family trips, and corporate events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tempoTravellers.map((tempo, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-yellow-100 hover:border-amber-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={tempo.image}
                    alt={tempo.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900 text-sm">{tempo.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {tempo.type}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Seating
                      </span>
                      <span className="font-semibold text-gray-800">{tempo.seating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Per Day</span>
                      <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        {tempo.perDay}
                      </span>
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tempo.facilities.slice(0, 2).map((facility, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-yellow-50 to-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-200"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>

                  <Link href={`https://wa.me/917668570551?text=Hello!%20I%27d%20like%20to%20book%20a%20${encodeURIComponent(tempo.type)}%20for%20group%20travel.%20Can%20you%20provide%20availability%20and%20pricing%3F`} target="_blank">
                    <button className="w-full py-2.5 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm">
                      Book Now
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Routes Section */}
      <section className="py-20 bg-gradient-to-b from-white via-yellow-50/30 to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Popular Routes</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              We Serve Across India
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book cabs and tour packages in major cities across North India
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <Link key={index} href={`/cities/${city.name.toLowerCase()}`}>
                <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-yellow-100 hover:border-amber-300 overflow-hidden cursor-pointer">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* City Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <MapPin className="w-6 h-6 text-gray-800" />
                    </div>

                    {/* City Name */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {city.name}
                    </h3>

                    {/* Region */}
                    <p className="text-sm text-gray-600 mb-3">{city.region}</p>

                    {/* Coverage Badge */}
                    <div className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-50 to-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-200">
                      <CheckCircle className="w-3 h-3" />
                      {city.coverage}
                    </div>

                    {/* Arrow Icon */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ChevronRight className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your city? We operate in 50+ cities across India!
            </p>
            <Link href="https://wa.me/917668570551?text=Hello!%20I%20don%27t%20see%20my%20city%20in%20your%20list.%20Do%20you%20provide%20service%20in%20my%20area%3F" target="_blank">
              <button className="px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2 mx-auto">
                Contact Us
                <Phone className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Vehicles Showcase */}
      <section className="vehicle-section py-20 bg-gradient-to-b from-white to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Car className="w-5 h-5" />
              <span className="font-semibold">Our Fleet</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Premium Vehicle Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of well-maintained, comfortable vehicles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehiclesServices.slice(0, 6).map((vehicle, index) => (
              <div
                key={index}
                className="vehicle-card group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-1 shadow-lg">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">{vehicle.rating}</span>
                    <span className="text-gray-500 text-sm">({vehicle.reviews})</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {vehicle.type}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span className="font-medium">{vehicle.seating}</span>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                      {vehicle.perKm}
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.facilities.slice(0, 3).map((facility, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-yellow-50 to-amber-50 text-amber-800 text-xs font-semibold rounded-full border border-amber-200"
                      >
                        {facility}
                      </span>
                    ))}
                  </div>

                  <Link href={`https://wa.me/917668570551?text=Hello!%20I%27d%20like%20to%20book%20a%20${encodeURIComponent(vehicle.type)}%20vehicle.%20Can%20you%20provide%20availability%20and%20pricing%3F`} target="_blank">
                    <button className="w-full py-3 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg">
                      Book Now
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-100 via-amber-100 to-orange-100 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border-2 border-amber-200">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Get Started Today</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
                Book now and experience the best travel services in India. Professional drivers, premium vehicles, and 24/7 support guaranteed!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <Link href="https://wa.me/917668570551?text=Hello!%20I%27m%20ready%20to%20start%20my%20journey%20with%20your%20travel%20services.%20Can%20you%20provide%20me%20a%20free%20quote%3F" target="_blank">
                <button className="px-10 py-5 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-lg rounded-full hover:from-amber-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-3 group">
                  Get Free Quote
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>

              <Link href="https://wa.me/917668570551?text=Hi!%20I%27d%20like%20to%20book%20your%20travel%20service.%20Please%20contact%20me%20at%20your%20earliest%20convenience." target="_blank">
                <button className="px-10 py-5 bg-white border-3 border-amber-300 text-gray-800 font-bold text-lg rounded-full hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3">
                  <Phone className="w-6 h-6" />
                  Call: 7668570551
                </button>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-600 font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Available 24/7 for bookings and inquiries
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
