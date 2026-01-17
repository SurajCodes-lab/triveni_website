'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Phone, MapPin, Calendar, Check, Star,
  Mountain, Sparkles, Award, Shield,
  Navigation, ChevronRight, ChevronDown, Heart,
  Clock, Users, ArrowRight, Route, Camera,
  Sun, MapPinned
} from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { phoneNumber } from '@/utilis/data';
import Link from 'next/link';

// SEO Components
import { FAQSection } from '@/components/seo/FAQSection';
import { CrossServiceLinks } from '@/components/seo/RelatedContent';
import { generateTourFAQs } from '@/lib/seo/faq-generator';

const ReligiousTourClient = ({ tour }) => {
  const [activeDay, setActiveDay] = useState(null);

  const handleBookNowClick = useCallback((serviceName = '') => {
    const message = serviceName
      ? encodeURIComponent(`Hi! I want to book ${tour.title}. Please share package details.`)
      : encodeURIComponent(`Hi! I want to book ${tour.title}. Please share package details.`);
    const whatsappURL = `https://wa.me/91${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  }, [tour.title]);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={tour.images.hero}
            alt={tour.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent" />
        </div>

        {/* Animated Orbs */}
        <div className="absolute top-20 left-5 md:left-10 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-orange-400/40 to-amber-500/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-5 md:right-20 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center pt-16 md:pt-0">
          {/* Breadcrumb */}
          <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <li>
                <Link href="/religious-tours" className="text-white/70 hover:text-white transition-colors">
                  Religious Tours
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <li className="text-orange-300 font-medium truncate max-w-[150px] md:max-w-none">
                {tour.title.split('–')[0].trim()}
              </li>
            </ol>
          </nav>

          {/* Top Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mb-4 md:mb-6"
          >
            <div className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full px-4 py-2 md:px-8 md:py-3 shadow-lg">
              <Sun className="w-4 h-4 md:w-6 md:h-6 text-white" />
              <span className="text-white font-bold text-xs md:text-base tracking-wide">{tour.subtitle}</span>
              <Mountain className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 md:mb-4 leading-tight tracking-tight drop-shadow-2xl px-2">
              <span className="block text-white drop-shadow-lg">
                {tour.title.split('–')[0].trim()}
              </span>
              {tour.title.split('–')[1] && (
                <span className="block bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-2xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
                  {tour.title.split('–')[1].trim()}
                </span>
              )}
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 max-w-4xl mx-auto leading-relaxed font-semibold drop-shadow-lg bg-black/20 backdrop-blur-sm px-3 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl border border-white/20"
          >
            <span className="flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-300" />
              {tour.tagline}
              <Heart className="w-4 h-4 md:w-5 md:h-5 text-rose-300" />
            </span>
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto mb-8 px-4"
          >
            {[
              { icon: Calendar, value: tour.duration, label: 'Duration' },
              { icon: MapPinned, value: tour.highlights.length, label: 'Sacred Sites' },
              { icon: Star, value: tour.bestTime, label: 'Best Time' }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm border-2 border-orange-200 rounded-xl md:rounded-2xl p-2 md:p-4 hover:border-orange-400 hover:shadow-xl transition-all shadow-md"
              >
                <div className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg md:rounded-xl mb-1 md:mb-2 shadow-md">
                  <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="text-gray-800 font-bold text-xs md:text-sm">{stat.value}</div>
                <div className="text-gray-600 text-xs hidden md:block">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleBookNowClick()}
              className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm md:text-base rounded-full shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                <BsWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                Book This Pilgrimage
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
              </span>
            </motion.button>

            <a href={`tel:+91${phoneNumber}`} className="w-full sm:w-auto">
              <motion.span
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 md:border-3 border-orange-300 text-gray-800 font-bold text-sm md:text-base rounded-full shadow-lg flex items-center justify-center gap-2 md:gap-3 hover:bg-orange-50 hover:border-orange-400 transition-all"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
                <span className="truncate">Call: {phoneNumber}</span>
              </motion.span>
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-sm font-semibold">Scroll Down</span>
            <div className="w-8 h-14 border-3 border-orange-400 rounded-full flex items-start justify-center p-2 bg-white/10 backdrop-blur-sm">
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-4 bg-orange-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ABOUT THIS JOURNEY SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Card */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 border-2 border-orange-100 hover:shadow-3xl hover:border-orange-300"
              >
                <div className="aspect-video bg-gradient-to-br from-orange-400 via-amber-400 to-yellow-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={tour.images.hero}
                    alt={tour.title}
                    fill
                    className="object-cover opacity-70 hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="relative text-center p-4 md:p-6 z-10">
                    <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-3 md:mb-4 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                      <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-white drop-shadow-lg" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                      Sacred Journey
                    </h3>
                    <p className="text-sm md:text-base text-white font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                      {tour.subtitle}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-orange-50 rounded-xl">
                    <div className="text-xl md:text-2xl font-bold text-orange-600">{tour.duration}</div>
                    <div className="text-xs text-gray-600">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-xl">
                    <div className="text-xl md:text-2xl font-bold text-orange-600">{tour.highlights.length}</div>
                    <div className="text-xs text-gray-600">Holy Sites</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-xl">
                    <div className="text-xl md:text-2xl font-bold text-orange-600">{tour.pricing.starting}</div>
                    <div className="text-xs text-gray-600">Starting</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-sm md:text-base">Divine Pilgrimage Experience</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent">
                About This Sacred Journey
              </h2>

              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                {tour.description}
              </p>

              <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 leading-relaxed italic border-l-4 border-orange-400 pl-4">
                {tour.spiritualSignificance}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Route, title: "Complete Route", desc: tour.route.split('→').slice(0, 3).join(' → ') + '...' },
                  { icon: Calendar, title: "Best Season", desc: tour.bestTime },
                  { icon: Shield, title: "Safe Travel", desc: "Verified drivers & vehicles" },
                  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-orange-100">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-gray-600 line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <nav className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => handleBookNowClick()}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm md:text-base rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
                >
                  Book Now - {tour.pricing.starting}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-orange-300 text-gray-800 font-bold text-sm md:text-base rounded-full hover:bg-orange-50 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Get Free Quote
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* SACRED DESTINATIONS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-amber-50/30 via-white to-orange-50/30 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amber-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-orange-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-6 py-2 rounded-full mb-6 shadow-sm"
            >
              <Mountain className="w-5 h-5" />
              <span className="font-semibold">Sacred Destinations</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent"
            >
              Holy Sites You&apos;ll Visit
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto"
            >
              Experience divine blessings at these sacred temples and spiritual centers
            </motion.p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {tour.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-4xl md:text-5xl shadow-inner">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1">{highlight.name}</h3>
                    <p className="text-orange-600 font-semibold text-sm mb-2">{highlight.deity}</p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ITINERARY SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-orange-50/30 via-white to-amber-50/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-orange-300/20 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 text-purple-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Navigation className="w-5 h-5" />
              <span className="font-semibold">Your Sacred Route</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Day-by-Day Itinerary
            </h2>

            <div className="bg-white border-2 border-orange-200 rounded-2xl px-6 py-4 inline-block shadow-lg">
              <p className="text-gray-700 font-mono text-xs md:text-sm">{tour.route}</p>
            </div>
          </div>

          {/* Itinerary Accordion */}
          <div className="space-y-3 md:space-y-4">
            {tour.itinerary.map((day, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setActiveDay(activeDay === index ? null : index)}
                  className="w-full text-left"
                >
                  <div className={`bg-white border-2 ${activeDay === index ? 'border-orange-400 shadow-xl' : 'border-orange-100 shadow-md'} rounded-xl md:rounded-2xl p-4 md:p-6 hover:shadow-lg hover:border-orange-300 transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-sm md:text-base">
                          {day.day}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-sm md:text-lg">{day.title}</h4>
                          {activeDay !== index && (
                            <p className="text-gray-500 text-xs md:text-sm line-clamp-1">{day.description}</p>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 md:w-6 md:h-6 text-orange-500 transition-transform duration-300 ${activeDay === index ? 'rotate-180' : ''}`}
                      />
                    </div>
                    {activeDay === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-orange-200"
                      >
                        <p className="text-gray-700 text-sm md:text-base">{day.description}</p>
                      </motion.div>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUSIONS SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-green-50/30 via-white to-teal-50/30 relative overflow-hidden">
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-teal-100 text-green-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Check className="w-5 h-5" />
              <span className="font-semibold">What&apos;s Included</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Package Inclusions
            </h2>
          </div>

          {/* Inclusions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tour.inclusions.map((inclusion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all border border-green-100 hover:border-green-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium text-sm md:text-base">{inclusion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-teal-50/30 via-white to-orange-50/30 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-teal-300/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Trusted Service</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              Why Choose Triveni Cabs
            </h2>

            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Your comfort and spiritual experience is our priority
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tour.whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl text-center border-2 border-gray-100 hover:border-orange-300 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4">{reason.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO: FAQ Section */}
      <FAQSection
        faqs={generateTourFAQs({
          tourName: tour.title.split('–')[0].trim(),
          city: tour.destinations?.[0] || 'India',
          duration: tour.duration,
          price: tour.pricing?.starting || 'Contact for pricing',
          highlights: tour.highlights?.slice(0, 3).map(h => h.text) || []
        })}
        title={`FAQs About ${tour.title.split('–')[0].trim()}`}
        subtitle="Get answers to common questions about this pilgrimage tour"
        variant="cards"
      />

      {/* SEO: Cross Service Links */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <CrossServiceLinks
            city={tour.destinations?.[0] || 'India'}
            services={['sightseeing', 'airport', 'wedding']}
            title="Explore More Services"
          />
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-orange-100 via-amber-100 to-yellow-100 relative overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <article className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl border-2 border-orange-200">
            <header className="text-center mb-6 md:mb-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 shadow-sm">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-semibold text-sm md:text-base">Begin Your Spiritual Journey</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent px-4">
                Book {tour.title.split('–')[0].trim()} Today
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-10 leading-relaxed max-w-3xl mx-auto px-4">
                Experience divine blessings with comfort and safety. Professional drivers, clean vehicles, and 24/7 support throughout your pilgrimage.
              </p>

              {/* Price Badge */}
              <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl mb-8 shadow-xl">
                <div className="text-sm opacity-90">Starting from</div>
                <div className="text-3xl md:text-4xl font-bold">{tour.pricing.starting}</div>
                <div className="text-xs opacity-80">{tour.pricing.note}</div>
              </div>
            </header>

            <nav className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8">
              <button
                onClick={() => handleBookNowClick()}
                className="px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-base md:text-lg rounded-full hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3 group"
              >
                <BsWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
                Book via WhatsApp
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <a href={`tel:+91${phoneNumber}`}>
                <span className="px-8 md:px-10 py-4 md:py-5 bg-white border-2 md:border-3 border-orange-300 text-gray-800 font-bold text-base md:text-lg rounded-full hover:bg-orange-50 hover:border-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 md:gap-3">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  <span className="truncate">Call Now: {phoneNumber}</span>
                </span>
              </a>
            </nav>

            <footer className="text-center px-4">
              <p className="text-sm md:text-base text-gray-600 font-semibold flex items-center justify-center gap-2 flex-wrap">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                <span>Safe & Verified | 24/7 Support | Transparent Pricing | Expert Drivers</span>
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">
                Trusted by 3000+ pilgrims | Instant Booking Confirmation
              </p>
            </footer>
          </article>
        </div>
      </section>
    </div>
  );
};

export default ReligiousTourClient;
