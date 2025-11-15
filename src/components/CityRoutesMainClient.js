'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle, ArrowRight, Route, Navigation, Search, Filter, Award, BadgeCheck, TrendingUp, Sparkles, DollarSign, Info, Bus } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useInView as useInViewObserver } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const whyChooseUs = [
  {
    title: "Professional Drivers",
    description: "Experienced, verified, and courteous drivers who prioritize your safety and comfort throughout the journey."
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock service for all your travel needs. Book anytime, travel anytime with instant confirmation."
  },
  {
    title: "Transparent Pricing",
    description: "No hidden charges. Pay exactly what you see with our honest and competitive pricing structure."
  },
  {
    title: "GPS Tracking",
    description: "Real-time vehicle tracking for enhanced safety. Share your trip with loved ones for peace of mind."
  },
  {
    title: "Well-Maintained Fleet",
    description: "Regular maintenance and sanitization of all vehicles. Travel in clean, comfortable, and safe cabs."
  },
  {
    title: "Easy Booking",
    description: "Simple online booking process. Book in seconds via phone, WhatsApp, or our website."
  }
];

export default function CityRoutesMainClient({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const { popularRoutes, allRoutes, cities, vehicles } = data;

  const heroRef = useRef(null);
  const vehiclesSectionRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const [vehiclesRef, vehiclesInView] = useInViewObserver({ triggerOnce: true, threshold: 0.1 });
  const [routesRef, routesInView] = useInViewObserver({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInViewObserver({ triggerOnce: true, threshold: 0.1 });

  // GSAP Animations
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Hero elements animation
      gsap.from('.hero-badge', {
        scale: 0,
        rotation: -180,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Parallax effect for hero image
      gsap.to('.hero-image', {
        y: '20%',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Vehicle cards stagger animation
      gsap.from('.vehicle-card', {
        scrollTrigger: {
          trigger: vehiclesSectionRef.current,
          start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const getOriginCities = () => {
    return cities.sort();
  };

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

  const getFilteredVehicles = () => {
    if (activeFilter === 'all') return vehicles;
    if (activeFilter === 'car') return vehicles.filter(v => v.type === 'Sedan' || v.type === 'SUV');
    if (activeFilter === 'tempo') return vehicles.filter(v => v.type === 'Tempo Traveller');
    if (activeFilter === 'bus') return vehicles.filter(v => v.type === 'Bus' || v.type === 'Luxury Bus');
    return vehicles;
  };

  const getVehicleIcon = (type) => {
    if (type === 'Bus' || type === 'Luxury Bus') return <Bus className="w-5 h-5 text-[#FACF2D]" />;
    return <Car className="w-5 h-5 text-[#FACF2D]" />;
  };

  const getVehicleColor = (type) => {
    const colors = {
      'Sedan': 'from-blue-500 to-blue-600',
      'SUV': 'from-green-500 to-green-600',
      'Tempo Traveller': 'from-purple-500 to-purple-600',
      'Luxury Bus': 'from-orange-500 to-orange-600',
      'Bus': 'from-indigo-500 to-indigo-600'
    };
    return colors[type] || 'from-gray-500 to-gray-600';
  };

  const getRouteTypeColor = (tags) => {
    if (!tags || tags.length === 0) return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    const tag = tags[0].toLowerCase();

    if (tag.includes('heritage') || tag.includes('unesco')) return 'bg-amber-500/10 text-amber-700 border-amber-500/20';
    if (tag.includes('spiritual') || tag.includes('temple') || tag.includes('holy')) return 'bg-purple-500/10 text-purple-700 border-purple-500/20';
    if (tag.includes('hill') || tag.includes('mountain')) return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
    if (tag.includes('royal') || tag.includes('palace')) return 'bg-rose-500/10 text-rose-700 border-rose-500/20';
    if (tag.includes('adventure')) return 'bg-orange-500/10 text-orange-700 border-orange-500/20';

    return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
  };

  const displayedRoutes = showAllRoutes ? getFilteredRoutes() : getFilteredRoutes().slice(0, 12);
  const displayedVehicles = showAllVehicles ? getFilteredVehicles() : getFilteredVehicles().slice(0, 6);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

        {/* Hero Section - Ultra Modern */}
        <motion.section
          ref={heroRef}
          className="relative py-12 md:py-16 flex items-center justify-center overflow-hidden"
        >
          {/* Animated Background with Parallax */}
          <div className="absolute inset-0 hero-image">
            <Image
              src="/images/citypage_hero_section_image.jpg"
              alt="Premium Taxi Services - Cars, Tempo Travellers & Buses"
              fill
              className="object-cover brightness-50"
              priority
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
              className="hero-badge inline-flex items-center gap-2 bg-[#FACF2D]/20 backdrop-blur-md border border-[#FACF2D]/30 px-6 py-3 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#FACF2D]" />
              <span className="text-[#FACF2D] font-bold text-sm tracking-wider">PREMIUM CAB • TEMPO • BUS SERVICES</span>
              <Sparkles className="w-5 h-5 text-[#FACF2D]" />
            </motion.div>

            {/* Main Title with TypeAnimation */}
            <div className="mb-8 overflow-hidden">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hero-title text-5xl md:text-7xl font-black text-white leading-tight mb-4"
              >
                Your Journey,
              </motion.h1>
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="hero-title text-5xl md:text-7xl font-black bg-gradient-to-r from-[#FACF2D] via-yellow-300 to-orange-400 bg-clip-text text-transparent leading-tight"
              >
                <TypeAnimation
                  sequence={[
                    'Our Priority',
                    2500,
                    'Our Passion',
                    2500,
                    'Our Promise',
                    2500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Explore India with Cars, Tempo Travellers, and Luxury Buses. Professional drivers, comfortable rides, and affordable rates for all destinations.
            </motion.p>

            {/* CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="tel:+917668570551"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(250, 207, 45, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-[#FACF2D] text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 76685 70551
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
                className="group bg-white/10 backdrop-blur-md border-2 border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <span className="flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Us
                </span>
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Vehicles Section - 3D Cards */}
        <section ref={vehiclesSectionRef} className="pt-12 pb-32 bg-white relative overflow-hidden">

          {/* Background Decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-20 right-0 w-96 h-96 bg-[#FACF2D] rounded-full blur-3xl" />
          </div>

          <div ref={vehiclesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={vehiclesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={vehiclesInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-[#FACF2D]/10 px-6 py-3 rounded-full mb-6"
              >
                <Car className="w-5 h-5 text-[#FACF2D]" />
                <span className="text-[#FACF2D] font-bold text-sm tracking-wider">OUR PREMIUM FLEET</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Choose Your <span className="bg-gradient-to-r from-[#FACF2D] to-orange-500 bg-clip-text text-transparent">Perfect Vehicle</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Cars, Tempo Travellers & Buses - Well-maintained fleet with professional drivers
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={vehiclesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {[
                { id: 'all', label: 'All Vehicles', icon: Car },
                { id: 'car', label: 'Cars', icon: Car },
                { id: 'tempo', label: 'Tempo', icon: Users },
                { id: 'bus', label: 'Buses', icon: Bus }
              ].map((filter, idx) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full font-bold text-sm tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black shadow-xl shadow-[#FACF2D]/30'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <filter.icon className="w-4 h-4" />
                  {filter.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Vehicles Grid with Cute 3D Effect */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {displayedVehicles.map((vehicle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={vehiclesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="vehicle-card group relative"
                >
                  <motion.div
                    whileHover={{ y: -12, scale: 1.02 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                    className="bg-gradient-to-br from-white via-white to-orange-50/30 rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(250,207,45,0.3)] border-4 border-orange-100/50 relative"
                  >
                    {/* Badge with cute styling */}
                    <div className="absolute top-4 right-4 z-20">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        className={`bg-gradient-to-r ${getVehicleColor(vehicle.type)} text-white px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-1.5 shadow-xl`}
                      >
                        <Star className="w-4 h-4" fill="white" />
                        {vehicle.rating} ⭐
                      </motion.div>
                    </div>

                    {/* Image with cute styling */}
                    <div className="relative h-56 overflow-hidden rounded-t-[1.75rem]">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 1 }}
                        transition={{ duration: 0.6 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={vehicle.image}
                          alt={vehicle.type}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Soft Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      {/* Cute Capacity Badge */}
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: -3 }}
                        className="absolute bottom-4 left-4 bg-gradient-to-r from-[#FACF2D] to-orange-400 text-white backdrop-blur-md px-5 py-3 rounded-full flex items-center gap-2 shadow-2xl border-2 border-white/50"
                      >
                        <Users className="w-5 h-5" />
                        <span className="font-black text-base">{vehicle.seating}</span>
                      </motion.div>
                    </div>

                    {/* Content with cute styling */}
                    <div className="p-6">
                      <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-[#FACF2D] transition-colors duration-300">
                        {vehicle.type}
                      </h3>

                      {/* Cute Pricing Card */}
                      <div className="mb-6">
                        <motion.div
                          whileHover={{ scale: 1.03, x: 5 }}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-100 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                          <span className="text-xs font-bold text-gray-700 flex items-center gap-2">
                            <Route className="w-4 h-4 text-orange-500" />
                            Per KM
                          </span>
                          <span className="text-base font-black text-orange-600">{vehicle.perKm}</span>
                        </motion.div>
                      </div>

                      {/* Features with cute badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {vehicle.facilities.slice(0, 3).map((feature, idx) => (
                          <motion.span
                            key={idx}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                          >
                            <CheckCircle className="w-3 h-3" fill="currentColor" />
                            {feature}
                          </motion.span>
                        ))}
                      </div>

                      {/* Cute CTA Button */}
                      <Link href="/contact">
                        <motion.button
                          whileHover={{ scale: 1.05, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black py-4 rounded-2xl font-black text-sm tracking-wide flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          BOOK NOW
                          <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </motion.button>
                      </Link>
                    </div>

                    {/* Cute Sparkle Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#FACF2D]/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {!showAllVehicles && getFilteredVehicles().length > 6 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={vehiclesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-center mt-16"
              >
                <motion.button
                  onClick={() => setShowAllVehicles(true)}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(250, 207, 45, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3"
                >
                  VIEW ALL VEHICLES
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Routes Section */}
        <section ref={routesRef} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={routesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={routesInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full mb-6"
              >
                <Navigation className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-bold text-sm tracking-wider">POPULAR ROUTES</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Explore <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Top Destinations</span>
              </h2>

              {/* Search and Filter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={routesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mt-12"
              >
                <div className="flex-1 relative group">
                  <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#FACF2D] transition-colors" />
                  <input
                    type="text"
                    placeholder="Search your destination..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-[#FACF2D] focus:outline-none text-gray-900 font-semibold bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  />
                </div>
                <div className="relative sm:w-64 group">
                  <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-[#FACF2D] transition-colors" />
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-gray-200 focus:border-[#FACF2D] focus:outline-none text-gray-900 font-semibold appearance-none bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <option value="">All Cities</option>
                    {getOriginCities().map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </motion.div>
            </motion.div>

            {/* Unique Routes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedRoutes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={routesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link href={`/${route.slug}`}>
                    <motion.div
                      whileHover={{ y: -15, scale: 1.03 }}
                      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                      className="group relative bg-white rounded-[1.5rem] p-7 shadow-2xl hover:shadow-[0_25px_50px_rgba(250,207,45,0.35)] border-3 overflow-hidden cursor-pointer h-full"
                      style={{
                        borderImage: 'linear-gradient(135deg, rgba(250,207,45,0.3), rgba(255,165,0,0.3)) 1'
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, rgba(250,207,45,0.1), transparent)`
                        }}
                      />

                      {/* Decorative Corner Element */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#FACF2D]/10 to-transparent rounded-bl-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        {/* Origin with Icon */}
                        <div className="flex items-start mb-4">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 20 }}
                            className="bg-gradient-to-br from-[#FACF2D] to-orange-400 p-2.5 rounded-2xl mr-3 shadow-lg"
                          >
                            <MapPin className="w-5 h-5 text-white" fill="white" />
                          </motion.div>
                          <div>
                            <p className="text-xs text-gray-500 font-semibold mb-1">FROM</p>
                            <h3 className="font-black text-base text-gray-900 group-hover:text-[#FACF2D] transition-colors">{route.origin}</h3>
                          </div>
                        </div>

                        {/* Arrow Connector */}
                        <div className="flex items-center mb-4 ml-2">
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="flex items-center"
                          >
                            <div className="h-0.5 w-8 bg-gradient-to-r from-[#FACF2D] to-orange-400 mr-2" />
                            <ArrowRight className="w-5 h-5 text-orange-500 group-hover:text-[#FACF2D] transition-colors" />
                          </motion.div>
                        </div>

                        {/* Destination */}
                        <div className="mb-5 ml-2">
                          <p className="text-xs text-gray-500 font-semibold mb-1">TO</p>
                          <span className="font-black text-base text-gray-800 group-hover:text-orange-600 transition-colors">{route.destination}</span>
                        </div>

                        {/* Tags Badge */}
                        {route.tags && route.tags.length > 0 && (
                          <motion.div
                            whileHover={{ scale: 1.05, x: 3 }}
                            className={`inline-flex items-center px-4 py-2 rounded-xl text-xs font-black mb-5 border-2 shadow-md ${getRouteTypeColor(route.tags)}`}
                          >
                            <Sparkles className="w-3 h-3 mr-1.5" />
                            {route.tags[0]}
                          </motion.div>
                        )}

                        {/* Info Cards */}
                        <div className="space-y-2 mb-5">
                          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                            <span className="flex items-center gap-2 text-xs font-bold text-gray-700">
                              <Route className="w-4 h-4 text-blue-500" />
                              Distance
                            </span>
                            <span className="text-sm font-black text-blue-600">{route.distance}</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                            <span className="flex items-center gap-2 text-xs font-bold text-gray-700">
                              <Clock className="w-4 h-4 text-green-500" />
                              Duration
                            </span>
                            <span className="text-sm font-black text-green-600">{route.time}</span>
                          </div>
                          {route.price && (
                            <div className="flex items-center justify-between p-3 bg-gradient-to-r from-[#FACF2D]/20 to-orange-50 rounded-xl border border-[#FACF2D]/30">
                              <span className="flex items-center gap-2 text-xs font-bold text-gray-700">
                                <DollarSign className="w-4 h-4 text-[#FACF2D]" />
                                Starting
                              </span>
                              <span className="text-sm font-black text-orange-600">{route.price}</span>
                            </div>
                          )}
                        </div>

                        {/* CTA with gradient */}
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black font-black text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg group-hover:shadow-xl transition-all"
                        >
                          Explore Route
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Show More Routes */}
            {!showAllRoutes && getFilteredRoutes().length > 12 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={routesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mt-16"
              >
                <motion.button
                  onClick={() => setShowAllRoutes(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-black text-[#FACF2D] px-12 py-5 rounded-full font-bold text-lg inline-flex items-center gap-3 hover:bg-gray-900 transition-colors duration-300"
                >
                  VIEW ALL ROUTES
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Why Choose Us - Premium Design */}
        <section ref={featuresRef} className="py-32 bg-white relative overflow-hidden">

          {/* Background Decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={featuresInView ? { scale: 1 } : {}}
                transition={{ type: 'spring', stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full mb-6"
              >
                <BadgeCheck className="w-5 h-5 text-green-600" />
                <span className="text-green-600 font-bold text-sm tracking-wider">WHY CHOOSE US</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Your <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Trusted Partner</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-[#FACF2D] transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FACF2D]/0 to-orange-500/0 group-hover:from-[#FACF2D]/10 group-hover:to-orange-500/10 transition-all duration-500" />

                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    >
                      <TrendingUp className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-black text-gray-900 mb-4 group-hover:text-[#FACF2D] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Unique Design */}
        <section className="relative py-32 bg-gradient-to-r from-[#FACF2D] via-yellow-400 to-orange-500 overflow-hidden">

          {/* Animated Background Pattern */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-10"
          >
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20px 20px, black 2px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </motion.div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg text-gray-800 mb-12 font-semibold">
                Book your cab, tempo, or bus now and experience premium travel with Triveni Cabs
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="tel:+917668570551"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-[#FACF2D] px-12 py-6 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-2xl"
              >
                <Phone className="w-6 h-6" />
                CALL: +91 76685 70551
              </motion.a>

              <motion.a
                href="https://wa.me/917668570551"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-12 py-6 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-2xl"
              >
                <MessageCircle className="w-6 h-6" />
                WHATSAPP US
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
