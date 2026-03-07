'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle,
  ArrowRight, Route, Navigation, Calendar, Info, ChevronLeft, MapIcon, Compass,
  Camera, Award, CreditCard, Headphones, MapPinned, Sparkles, Zap, Heart,
  Mountain, Sun, Wind, ChevronDown, Play, Gift, Crown, Gem
} from '@/components/ui/icons';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { useShouldReduceMotion } from '@/hooks/useIsMobile';
import { getAttractionsForCity } from '@/utilis/touristAttractionsData';
import { routeDescriptions } from '@/utilis/tempoTravellerData';
import { getTypeColor, formatDestinationForDisplay } from '@/utilis/tempoColors';
import dynamic from 'next/dynamic';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false, loading: () => <span>Premium Tempo Traveller</span> }
);
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });

export default function DynamicTempoRoutesClient({ data }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredVehicle, setHoveredVehicle] = useState(null);

  const { routeSlug, origin, destination, routeData, hasTouristSpots, localSightseeing, fleet } = data;

  const routeDescription = routeDescriptions[routeSlug] || null;
  const displayDestination = formatDestinationForDisplay(destination);
  const shouldReduceMotion = useShouldReduceMotion();

  useEffect(() => {
    setMounted(true);

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://www.trivenicabs.in/tempo-traveller/${routeSlug}#service`,
        "serviceType": "Tempo Traveller Rental",
        "name": `${origin} to ${destination} Tempo Traveller on Rent`,
        "alternateName": [
          `${origin} to ${destination} Tempo Traveller Booking`,
          `Tempo Traveller from ${origin} to ${destination}`,
          `${origin} ${destination} Tempo Traveller Hire`
        ],
        "description": `Book 12, 17, 20, 26 seater AC tempo traveller from ${origin} to ${destination}. Professional drivers, pushback seats, GPS tracking, music system. Best rates starting ₹23/km. Call +917668570551 for instant booking.`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Triveni Cabs",
          "telephone": "+917668570551",
          "email": "cabstriveni@gmail.com",
          "url": "https://www.trivenicabs.in",
          "image": "https://www.trivenicabs.in/images/logo.webp",
          "priceRange": "₹₹",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "City", "name": origin },
          { "@type": "City", "name": destination }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "23",
          "highPrice": "27",
          "offerCount": "5",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "23-27",
            "priceCurrency": "INR",
            "unitText": "per kilometer"
          }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2500",
          "bestRating": "5"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${origin} to ${destination} Tempo Traveller Options`,
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "12 Seater Tempo Traveller" }, "price": "23", "priceCurrency": "INR" },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "17 Seater Tempo Traveller" }, "price": "25", "priceCurrency": "INR" },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "20 Seater Tempo Traveller" }, "price": "26", "priceCurrency": "INR" },
            { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "26 Seater Maharaja Tempo" }, "price": "27", "priceCurrency": "INR" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
          { "@type": "ListItem", "position": 2, "name": "Tempo Traveller", "item": "https://www.trivenicabs.in/tempo-traveller" },
          { "@type": "ListItem", "position": 3, "name": `${origin} to ${destination}`, "item": `https://www.trivenicabs.in/tempo-traveller/${routeSlug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does tempo traveller cost from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Tempo traveller rates from ${origin} to ${destination} start from ₹23/km for 12-seater and go up to ₹27/km for 26-seater Maharaja Edition. Prices include fuel, driver, tolls, and parking.`
            }
          },
          {
            "@type": "Question",
            "name": `What seater options are available for ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer 12-seater, 16-seater, 17-seater (most popular), 20-seater with LED TV, and 26-seater Maharaja Edition. All vehicles are AC equipped with pushback seats."
            }
          },
          {
            "@type": "Question",
            "name": `How do I book tempo traveller from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Call +917668570551 or WhatsApp with your travel date, pickup location, and group size. Get instant quote and confirm with small advance payment."
            }
          }
        ]
      }
    ]
  }), [origin, destination, routeSlug]);

  const journeyFeatures = [
    { icon: Shield, title: 'Safe Journey', subtitle: 'GPS Tracked & Insured', color: 'from-emerald-500 to-green-600' },
    { icon: Crown, title: 'Royal Comfort', subtitle: 'Pushback Recliner Seats', color: 'from-amber-500 to-yellow-600' },
    { icon: Zap, title: 'Instant Booking', subtitle: '60 Sec Confirmation', color: 'from-blue-500 to-indigo-600' },
    { icon: Heart, title: '2500+ Happy Trips', subtitle: '4.8★ Customer Rating', color: 'from-rose-500 to-pink-600' },
  ];

  return (
    <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
    <div className="min-h-screen bg-white overflow-hidden">
      {/* ============================================ */}
      {/* HERO SECTION - Ultra Premium Design */}
      {/* ============================================ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <Image
            src="/images/tempo_hero_section.jpg"
            alt={`${origin} to ${destination} Tempo Traveller - Premium group travel service`}
            fill
            className="object-cover"
            priority
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-900/60 to-black/80" />
        </div>

        {/* Floating Animated Orbs */}
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
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-400/10 to-transparent rounded-full"
        />

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {mounted && !shouldReduceMotion && [...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: '100vh', x: `${Math.random() * 100}%`, opacity: 0 }}
              animate={{ y: '-10vh', opacity: [0, 1, 0] }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute top-4 left-4 md:top-8 md:left-8"
          >
            <Link
              href="/tempo-traveller"
              className="inline-flex items-center gap-2 text-white/70 hover:text-amber-400 transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Routes</span>
            </Link>
          </motion.div>

          {/* Route Type Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className={`bg-gradient-to-r ${getTypeColor(routeData.type)} px-6 py-3 rounded-full shadow-2xl`}>
              <span className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {routeData.type?.toUpperCase() || 'PREMIUM ROUTE'}
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 tracking-tight">
              <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                {origin}
              </span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mx-2 md:mx-4 text-white/50"
              >
                →
              </motion.span>
              <span className="inline-block bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                {displayDestination}
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-4xl font-bold text-white/90"
            >
              <TypeAnimation
                sequence={[
                  '🚐 Premium Tempo Traveller',
                  2500,
                  '👨‍👩‍👧‍👦 Perfect for Groups',
                  2500,
                  '✨ Luxury Travel Experience',
                  2500,
                  '🛣️ Comfortable Journey',
                  2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>
          </motion.div>

          {/* Animated Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8"
          >
            {journeyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                
                onClick={() => setActiveFeature(index)}
                className={`cursor-pointer backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-2xl border-2 transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-white/20 border-amber-400 shadow-lg shadow-amber-400/20'
                    : 'bg-white/10 border-white/20 hover:border-white/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${feature.color}`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm md:text-base">{feature.title}</p>
                    <p className="text-white/60 text-xs">{feature.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+917668570551"
              
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                Call Now: +91 76685 70551
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href={`https://wa.me/917668570551?text=Hi, I need tempo traveller from ${origin} to ${destination}. Please share rates.`}
              target="_blank"
              rel="noopener noreferrer"
              
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg hover:bg-white/20 hover:border-amber-400/50 transition-all duration-300 shadow-2xl"
            >
              <span className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                WhatsApp Booking
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
      {/* ROUTE INFO SECTION - Clean White Cards */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 px-6 py-3 rounded-full mb-6 border border-amber-200">
              <Route className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-bold text-sm tracking-wider">JOURNEY DETAILS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {origin} to {displayDestination} <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Tempo Traveller</span> Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book tempo traveller from {origin} to {destination} with complete route details, distance, travel time and best pricing
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Route Details Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-300 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-lg">
                    <MapIcon className="w-6 h-6 text-white" />
                  </div>
                  Route Information
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors border border-blue-100">
                    <div className="p-3 bg-blue-500 rounded-xl shadow">
                      <Navigation className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Journey Route</p>
                      <p className="text-gray-900 font-bold text-lg">{origin} → {displayDestination}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-2xl hover:bg-purple-100 transition-colors border border-purple-100">
                    <div className="p-3 bg-purple-500 rounded-xl shadow">
                      <Mountain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Destination Type</p>
                      <p className="text-gray-900 font-bold text-lg">{routeData.type || 'Tourism'}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors border border-green-100">
                    <div className="p-3 bg-green-500 rounded-xl shadow">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">Availability</p>
                      <p className="text-gray-900 font-bold text-lg">365 Days • 24/7 Booking</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border-2 border-amber-200">
                    <div className="p-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl shadow">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-amber-600 text-sm font-medium">Status</p>
                      <p className="text-amber-700 font-bold text-lg">
                        {routeData.exists ? '⚡ Popular Route - Instant Booking' : '✓ Available on Request'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated Background */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-white/20 rounded-full blur-2xl"
                />

                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-3 bg-white/20 backdrop-blur rounded-2xl">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  Get Instant Quote
                </h3>

                <p className="text-white/90 mb-6 text-lg">
                  Book your {origin} to {destination} tempo traveller now! Our team is available 24/7 for instant confirmation.
                </p>

                {/* Price Highlight */}
                <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Starting From</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">₹23</span>
                      <span className="text-gray-500">/km</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium border border-green-200">✓ All Inclusive</span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200">✓ No Hidden Charges</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <motion.a
                    href="tel:+917668570551"
                    
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Call: +91-7668570551
                  </motion.a>

                  <motion.a
                    href={`https://wa.me/917668570551?text=Hi, I need tempo traveller from ${origin} to ${destination}. Please share the rates and availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-gray-900 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all border-2 border-white/50"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Booking
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ROUTE HIGHLIGHTS SECTION - Route-specific content */}
      {/* ============================================ */}
      {routeDescription && (
        <section className="py-16 md:py-20 bg-gradient-to-b from-black to-amber-950/20 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

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
                <Compass className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-bold text-sm tracking-wider">ROUTE HIGHLIGHTS</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                {origin} to {displayDestination} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Road Trip Guide</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Everything you need to know about the {origin} to {destination} route by tempo traveller
              </p>
            </motion.div>

            {/* Quick Info Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-5 py-3 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium">Travel Time</p>
                  <p className="text-white font-bold">{routeDescription.travelTime}</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-5 py-3 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500">
                  <Navigation className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium">Distance</p>
                  <p className="text-white font-bold">{routeDescription.distance}</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 px-5 py-3 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500">
                  <Sun className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-medium">Best Season</p>
                  <p className="text-white font-bold text-sm">{routeDescription.bestSeason}</p>
                </div>
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Highlights Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 h-full hover:border-amber-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500">
                      <MapPinned className="w-5 h-5 text-white" />
                    </div>
                    Route Overview
                  </h3>
                  <p className="text-white/70 leading-relaxed text-base">
                    {routeDescription.highlights}
                  </p>
                  {routeDescription.roadConditions && (
                    <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                      <p className="text-amber-400 font-bold text-sm mb-1 flex items-center gap-2">
                        <Route className="w-4 h-4" />
                        Road Conditions
                      </p>
                      <p className="text-white/60 text-sm">{routeDescription.roadConditions}</p>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Stops Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:p-8 h-full hover:border-amber-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    Popular Stops En-Route
                  </h3>
                  <div className="space-y-3">
                    {routeDescription.stops.map((stop, index) => (
                      <div key={index} className="flex items-center gap-4 group">
                        <div className="relative flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            index === 0 ? 'bg-gradient-to-br from-green-400 to-emerald-500 text-white' :
                            index === routeDescription.stops.length - 1 ? 'bg-gradient-to-br from-amber-400 to-orange-500 text-white' :
                            'bg-white/10 text-white/70 border border-white/20'
                          }`}>
                            {index + 1}
                          </div>
                          {index < routeDescription.stops.length - 1 && (
                            <div className="w-0.5 h-4 bg-white/20 mt-1" />
                          )}
                        </div>
                        <span className="text-white/80 group-hover:text-amber-400 transition-colors font-medium">
                          {stop}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================ */}
      {/* FLEET SECTION - Premium Vehicle Showcase */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-pink-400" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full mb-6 border border-amber-200">
              <Car className="w-5 h-5 text-amber-600" />
              <span className="text-amber-700 font-bold text-sm tracking-wider">PREMIUM FLEET</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {origin} to {displayDestination} <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Tempo Traveller Fleet</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from 12, 17, 20, 26 seater AC tempo traveller for your {origin} to {destination} trip - pushback seats, music system included
            </p>
          </motion.div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {fleet.map((vehicle, index) => (
              <motion.div
                key={vehicle.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredVehicle(vehicle.id)}
                onMouseLeave={() => setHoveredVehicle(null)}
                className="group relative"
              >
                <div className={`relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 ${
                  hoveredVehicle === vehicle.id ? 'border-amber-400 -translate-y-2' : 'border-gray-100'
                }`}>
                  {/* Badges */}
                  {vehicle.popular && (
                    <motion.div
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3" />
                        MOST POPULAR
                      </div>
                    </motion.div>
                  )}

                  {vehicle.premium && (
                    <motion.div
                      initial={{ x: 100 }}
                      animate={{ x: 0 }}
                      className="absolute top-4 right-4 z-20"
                    >
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                        <Gem className="w-3 h-3" />
                        LUXURY
                      </div>
                    </motion.div>
                  )}

                  {/* Vehicle Image */}
                  <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} for ${origin} to ${destination} - ${vehicle.capacity}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const parent = e.target.parentElement;
                        parent.className = `relative h-56 overflow-hidden bg-gradient-to-r ${vehicle.color || 'from-amber-400 to-orange-500'}`;
                        if (!parent.querySelector('.fallback-icon')) {
                          const fallbackDiv = document.createElement('div');
                          fallbackDiv.className = 'fallback-icon absolute inset-0 flex items-center justify-center';
                          fallbackDiv.innerHTML = '<svg class="w-20 h-20 text-white/50" fill="currentColor" viewBox="0 0 24 24"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>';
                          parent.appendChild(fallbackDiv);
                        }
                      }}
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Capacity Badge */}
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span className="font-bold text-gray-900">{vehicle.capacity}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{vehicle.name}</h3>

                    {/* Features Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-2xl p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-600 text-sm">Outstation</span>
                        <span className="text-xl font-black bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">{vehicle.outstationRate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm">Local (8hrs/80km)</span>
                        <span className="text-gray-900 font-bold">{vehicle.localRate}</span>
                      </div>
                    </div>

                    {/* Book Button */}
                    <motion.button
                      
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedVehicle(vehicle)}
                      className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-amber-500 hover:to-orange-500 text-white hover:text-black font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                    >
                      Book {vehicle.name}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US - Animated Feature Grid */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-amber-500/10 via-transparent to-amber-500/10"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-amber-400/30">
              <Award className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm tracking-wider">WHY TRIVENI CABS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Why Book {origin} to {displayDestination} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Tempo Traveller</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Best tempo traveller service for {origin} to {destination} - safe drivers, GPS tracking, 24/7 support, transparent pricing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Safe & Secure',
                description: 'GPS tracked vehicles with verified drivers, valid insurance & 24/7 monitoring',
                color: 'from-green-400 to-emerald-500',
                stat: '100%',
                statLabel: 'Safe Trips'
              },
              {
                icon: CreditCard,
                title: 'Transparent Pricing',
                description: 'No hidden charges, fixed rates, multiple payment options available',
                color: 'from-blue-400 to-indigo-500',
                stat: '₹0',
                statLabel: 'Hidden Fees'
              },
              {
                icon: Car,
                title: 'Premium Fleet',
                description: 'Well-maintained AC tempo travellers with pushback seats & music system',
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
                
                className="group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-400/50 transition-all duration-500 h-full overflow-hidden">
                  {/* Glow Effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 rounded-full blur-3xl group-hover:opacity-40 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Stat */}
                  <div className="mb-4">
                    <span className="text-4xl font-black text-white">{feature.stat}</span>
                    <span className="text-white/60 text-sm ml-2">{feature.statLabel}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* AMENITIES SECTION */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {origin} to {displayDestination} Tempo Traveller <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Amenities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AC tempo traveller with pushback seats, music system, GPS tracking, charging points for {origin} to {destination} journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Comfort Features',
                icon: Crown,
                color: 'from-amber-400 to-yellow-500',
                items: ['Pushback Recliner Seats', 'Individual AC Vents', 'LED Reading Lights', 'Premium Interiors', 'Ample Legroom']
              },
              {
                title: 'Safety Equipment',
                icon: Shield,
                color: 'from-green-400 to-emerald-500',
                items: ['GPS Live Tracking', 'First Aid Kit', 'Fire Extinguisher', 'Valid Insurance', 'Emergency Contacts']
              },
              {
                title: 'Entertainment & More',
                icon: Play,
                color: 'from-blue-400 to-indigo-500',
                items: ['Music System', 'USB Charging Points', 'Bluetooth Connectivity', 'Large Luggage Space', 'Curtains for Privacy']
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 hover:bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-500 h-full">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.color} mb-6`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>

                  <ul className="space-y-3">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
              <Info className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-bold text-sm tracking-wider">FREQUENTLY ASKED</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {origin} to {displayDestination} Tempo Traveller <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">FAQ</span>
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about {origin} to {destination} tempo traveller booking, price, seating and more
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: `How much does tempo traveller cost from ${origin} to ${displayDestination}?`,
                answer: `Tempo traveller rates from ${origin} to ${displayDestination} start from ₹23/km for 12-seater and go up to ₹27/km for 26-seater Maharaja Edition. Prices include fuel, driver, tolls, and parking. Call +917668570551 for instant quote.`
              },
              {
                question: `What seater options are available for ${origin} to ${displayDestination}?`,
                answer: `We offer 12-seater, 16-seater, 17-seater (most popular), 20-seater with LED TV, and 26-seater Maharaja Edition. All vehicles are AC equipped with pushback seats, music system, and charging points.`
              },
              {
                question: `How do I book tempo traveller from ${origin} to ${displayDestination}?`,
                answer: `Simply call +917668570551 or WhatsApp with your travel date, pickup location, and group size. You'll receive an instant quote with vehicle options. Confirm with a small advance and get driver details via SMS/WhatsApp.`
              },
              {
                question: `Is one-way booking available from ${origin} to ${displayDestination}?`,
                answer: `Yes! We provide both one-way drop and round-trip services. One-way is charged per kilometer. Round-trip includes driver accommodation for overnight stays. Book in advance for best rates.`
              },
              {
                question: `What facilities are included in the tempo traveller?`,
                answer: `All our tempo travellers include: AC, pushback seats, music system with Bluetooth, USB charging for all seats, GPS tracking, first aid kit, fire extinguisher, ample luggage space, and clean sanitized interiors.`
              },
              {
                question: `Are drivers provided with the tempo traveller?`,
                answer: `Yes! All bookings include experienced professional drivers with 5+ years experience. They know the ${origin} to ${displayDestination} route well, including best stops for meals. Driver charges and accommodation are included.`
              },
            ].map((faq, index) => (
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
      {/* TOURIST ATTRACTIONS */}
      {/* ============================================ */}
      {(() => {
        const attractions = getAttractionsForCity(destination);
        if (attractions.length > 0) {
          return (
            <section className="py-16 md:py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-12 md:mb-16"
                >
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6 border border-purple-200">
                    <Camera className="w-5 h-5 text-purple-600" />
                    <span className="text-purple-700 font-bold text-sm tracking-wider">EXPLORE {destination.toUpperCase()}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                    {destination} Tourist <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Attractions</span> by Tempo Traveller
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Top places to visit in {destination} during your {origin} to {destination} tempo traveller trip
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {attractions.slice(0, 6).map((attraction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <div className="bg-gray-50 hover:bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-purple-300 hover:shadow-xl transition-all duration-500">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {attraction.name}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            attraction.type === 'Heritage' ? 'bg-amber-100 text-amber-700' :
                            attraction.type === 'Spiritual' ? 'bg-purple-100 text-purple-700' :
                            'bg-blue-100 text-blue-700'
                          }`}>
                            {attraction.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{attraction.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {attraction.highlights?.slice(0, 2).map((highlight, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mt-10"
                >
                  <Link
                    href={`/tourist-attractions/${destination.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    <Compass className="w-5 h-5" />
                    View All {destination} Attractions
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </section>
          );
        }
        return null;
      })()}

      {/* ============================================ */}
      {/* RELATED ROUTES */}
      {/* ============================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              More Tempo Traveller Routes from <span className="text-amber-500">{origin}</span>
            </h2>
            <p className="text-gray-600">Book tempo traveller from {origin} to Manali, Shimla, Jaipur, Haridwar and more destinations</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: 'Manali', type: 'Hill Station', color: 'from-green-400 to-emerald-500' },
              { to: 'Shimla', type: 'Hill Station', color: 'from-blue-400 to-indigo-500' },
              { to: 'Jaipur', type: 'Heritage', color: 'from-amber-400 to-orange-500' },
              { to: 'Agra', type: 'Heritage', color: 'from-rose-400 to-pink-500' },
              { to: 'Haridwar', type: 'Spiritual', color: 'from-purple-400 to-violet-500' },
              { to: 'Rishikesh', type: 'Adventure', color: 'from-cyan-400 to-teal-500' },
              { to: 'Dharamshala', type: 'Hill Station', color: 'from-emerald-400 to-green-500' },
              { to: 'Amritsar', type: 'Spiritual', color: 'from-yellow-400 to-amber-500' },
            ].map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/tempo-traveller/${origin.toLowerCase().replace(/\s+/g, '-')}-to-${route.to.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block group"
                >
                  <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${route.color} flex items-center justify-center mb-3`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {origin} to {route.to}
                    </h3>
                    <p className="text-sm text-gray-500">{route.type}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/tempo-traveller"
              className="inline-flex items-center gap-2 text-amber-600 font-bold hover:text-amber-700 transition-colors"
            >
              <Route className="w-5 h-5" />
              View All Tempo Traveller Routes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
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
              Book {origin} to {displayDestination} <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Tempo Traveller</span>
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Call now to book {origin} to {destination} tempo traveller at best price - 12, 17, 20, 26 seater AC available!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+917668570551"
                
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call: +91 76685 70551
              </motion.a>

              <motion.a
                href={`https://wa.me/917668570551?text=Hi, I want to book tempo traveller from ${origin} to ${destination}. Please share rates.`}
                target="_blank"
                rel="noopener noreferrer"
                
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

      {/* Fare Calculator */}
      <section className="py-12 bg-gray-50" id="fare-calculator">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Calculate Your {origin} to {displayDestination} Fare
            </h2>
            <p className="text-gray-600">Get an instant price estimate for your tempo traveller trip</p>
          </div>
          <FareCalculator variant="compact" defaultFrom={origin} defaultTo={displayDestination} className="max-w-md mx-auto" />
        </div>
      </section>


      {/* ============================================ */}
      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {origin} to {displayDestination} Tempo Traveller — Book AC 12–26 Seater with Driver
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Book a comfortable AC tempo traveller from {origin} to {displayDestination} with Triveni Cabs. We offer 12-seater,
            17-seater, 20-seater, and 26-seater Maharaja tempo travellers with professional drivers, GPS tracking, pushback
            recliner seats, music system, and charging points. Our rates start at just <strong>₹23/km</strong> for a 12-seater —
            making group travel affordable and comfortable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Whether you are travelling with family, friends, a corporate team, or for a wedding — our {origin} to {displayDestination} tempo
            traveller service is available 24/7 with instant booking confirmation. All prices include fuel, driver charges, and
            vehicle costs. Only toll and state tax are extra. We provide both one-way drop and round-trip packages.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Triveni Cabs has completed 2500+ group trips with a 4.8-star customer rating. Our drivers have 5+ years of
            commercial driving experience with police verification and valid licences. Browse our full{' '}
            <Link href="/tempo-traveller" className="text-blue-600 hover:underline">tempo traveller fleet and routes</Link>,
            compare <Link href="/pricing" className="text-blue-600 hover:underline">vehicle pricing</Link>, or{' '}
            <a href="tel:+917668570551" className="text-blue-600 hover:underline">call 7668570551</a> for an instant quote.
          </p>
        </div>
      </section>

      {/* VEHICLE BOOKING MODAL */}
      {/* ============================================ */}
      <AnimatePresence>
        {selectedVehicle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[100]"
            onClick={() => setSelectedVehicle(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-gray-900">Book {selectedVehicle.name}</h3>
                <button
                  onClick={() => setSelectedVehicle(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Vehicle Image */}
              <div className="relative h-40 rounded-2xl overflow-hidden mb-6 bg-gradient-to-r from-amber-400 to-orange-500">
                <Image
                  src={selectedVehicle.image}
                  alt={selectedVehicle.name}
                  fill
                  className="object-cover"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Route</span>
                  <span className="font-bold text-gray-900">{origin} → {displayDestination}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="text-gray-600">Capacity</span>
                  <span className="font-bold text-gray-900">{selectedVehicle.capacity}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <span className="text-amber-700">Outstation Rate</span>
                  <span className="font-black text-2xl text-amber-600">{selectedVehicle.outstationRate}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <p className="text-sm font-bold text-gray-700 mb-3">Included Features:</p>
                <div className="flex flex-wrap gap-2">
                  {selectedVehicle.features.map((feature, idx) => (
                    <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3">
                <a
                  href="tel:+917668570551"
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call to Book
                </a>
                <a
                  href={`https://wa.me/917668570551?text=Hi, I want to book ${selectedVehicle.name} from ${origin} to ${destination}. Please share quote.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp to Book
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </MotionConfig>
  );
}
