'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Phone, MapPin, Calendar, Check, Star,
  Mountain, Sparkles, Award, Shield,
  Navigation, ChevronRight, ChevronDown, Heart,
  Sun, Compass, Camera, Globe
} from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import { phoneNumber } from '@/utilis/data';

const ReligiousTourClient = ({ tour }) => {
  const [activeDay, setActiveDay] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  useEffect(() => {
    setIsVisible(true);

    // Generate particles on client side only to avoid hydration mismatch
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20
    })));

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-sky-50 to-indigo-50 relative overflow-hidden">
      {/* Hero Section - Stunning Redesign */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Multi-layered Animated Background */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0"
        >
          {/* Base Gradient - Spiritual Palette: Saffron to Deep Blue */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-sky-600 to-indigo-900">
            {/* Animated Gradient Overlay */}
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(14, 165, 233, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 80%, rgba(251, 191, 36, 0.4) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.4) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            />
          </div>

          {/* Mesh Gradient Pattern */}
          <div className="absolute inset-0 opacity-30">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Aurora Effect - Golden Glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-amber-300/30 via-transparent to-transparent blur-3xl"
          />
        </motion.div>

        {/* Floating Particles */}
        {particles.length > 0 && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ y: '100vh', opacity: 0 }}
                animate={{
                  y: '-100vh',
                  opacity: [0, 1, 1, 0],
                  x: [0, Math.sin(particle.id) * 50, 0]
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  left: `${particle.x}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                }}
                className="absolute"
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-200/40 to-sky-300/40 blur-xl" />
              </motion.div>
            ))}
          </div>
        )}

        {/* Floating 3D Spiritual Icons */}
        <motion.div
          style={{ x: mousePosition.x, y: mousePosition.y }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* OM Symbol */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 md:left-20"
          >
            <div className="relative">
              <div className="text-8xl md:text-9xl opacity-20 blur-sm">🕉️</div>
              <div className="absolute inset-0 text-8xl md:text-9xl">
                <span className="bg-gradient-to-br from-amber-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                  🕉️
                </span>
              </div>
            </div>
          </motion.div>

          {/* Praying Hands */}
          <motion.div
            animate={{
              y: [0, 25, 0],
              rotate: [0, -5, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-40 right-10 md:right-32"
          >
            <div className="relative">
              <div className="text-7xl md:text-8xl opacity-20 blur-sm">🙏</div>
              <div className="absolute inset-0 text-7xl md:text-8xl">
                <span className="bg-gradient-to-br from-sky-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(14,165,233,0.6)]">
                  🙏
                </span>
              </div>
            </div>
          </motion.div>

          {/* Mountain */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-1/4"
          >
            <div className="relative">
              <div className="text-6xl md:text-7xl opacity-20 blur-sm">⛰️</div>
              <div className="absolute inset-0 text-6xl md:text-7xl">
                <span className="bg-gradient-to-br from-sky-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                  ⛰️
                </span>
              </div>
            </div>
          </motion.div>

          {/* Diya Lamp */}
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-20 right-1/4"
          >
            <div className="relative">
              <div className="text-7xl md:text-8xl opacity-20 blur-sm">🪔</div>
              <div className="absolute inset-0 text-7xl md:text-8xl">
                <span className="bg-gradient-to-br from-amber-100 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(245,158,11,0.7)]">
                  🪔
                </span>
              </div>
              {/* Animated Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-amber-300/40 rounded-full blur-2xl"
              />
            </div>
          </motion.div>

          {/* Tourist Camera Icon */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -8, 8, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/3 left-16"
          >
            <Camera className="w-16 h-16 md:w-20 md:h-20 text-sky-200/50" strokeWidth={1.5} />
          </motion.div>

          {/* Compass Icon */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 right-20"
          >
            <Compass className="w-14 h-14 md:w-16 md:h-16 text-indigo-200/50" strokeWidth={1.5} />
          </motion.div>

          {/* Globe Icon */}
          <motion.div
            animate={{
              rotate: [0, 360],
              y: [0, -10, 0],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-1/2 right-12"
          >
            <Globe className="w-12 h-12 md:w-16 md:h-16 text-teal-200/50" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* Hero Content with Glass Morphism */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        >
          {/* Glassy Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[3rem] p-6 md:p-10 lg:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]"
          >
            {/* Animated Border Glow */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-amber-400 via-sky-500 to-indigo-500 opacity-20 blur-xl animate-pulse" />

            {/* Location Badge */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/90 to-yellow-500/90 backdrop-blur-xl border border-white/30 rounded-full px-8 py-4 mb-8 shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sun className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-white font-bold text-lg">{tour.subtitle}</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Mountain className="w-6 h-6 text-white" />
              </motion.div>
            </motion.div>

            {/* Main Title with Stagger Animation */}
            <div className="mb-4">
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 leading-tight"
              >
                <span className="inline-block bg-gradient-to-r from-amber-100 via-yellow-100 to-amber-200 bg-clip-text text-transparent drop-shadow-[0_4px_20px_rgba(245,158,11,0.5)]">
                  {tour.title.split('–')[0].trim()}
                </span>
              </motion.h1>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-white/95 drop-shadow-lg"
              >
                {tour.title.split('–')[1]}
              </motion.div>
            </div>

            {/* Animated Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-lg md:text-xl lg:text-2xl text-amber-50 font-light mb-6 italic drop-shadow-lg max-w-3xl mx-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Heart className="w-6 h-6 text-rose-300 animate-pulse" />
                {tour.tagline}
                <Heart className="w-6 h-6 text-rose-300 animate-pulse" />
              </span>
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 md:gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              {[
                { icon: Calendar, value: tour.duration, label: 'Duration', delay: 0 },
                { icon: Mountain, value: tour.highlights.length, label: 'Sacred Sites', delay: 0.1 },
                { icon: Star, value: tour.bestTime, label: 'Best Time', delay: 0.2 }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + stat.delay, duration: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 20px 50px rgba(245, 158, 11, 0.4)'
                  }}
                >
                  <stat.icon className="w-5 h-5 text-amber-300 mx-auto mb-1" />
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-amber-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <motion.a
                href={`tel:${phoneNumber}`}
                className="group relative bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-8 py-3.5 rounded-full font-bold text-base shadow-2xl overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(245, 158, 11, 0.6)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Book Your Divine Journey
                </span>
              </motion.a>

              <motion.a
                href={`https://wa.me/91${phoneNumber}?text=${encodeURIComponent(`Hi, I'm interested in ${tour.title}. Please share details and packages.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-3.5 rounded-full font-bold text-base flex items-center justify-center gap-2 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: '#16a34a',
                  boxShadow: '0 20px 60px rgba(34, 197, 94, 0.5)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <BsWhatsapp className="w-5 h-5" />
                WhatsApp Inquiry
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2.2, duration: 0.5 },
            y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' }
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="text-white/60 text-sm font-medium">Scroll to Explore</div>
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut'
              }}
            >
              <ChevronDown className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Spiritual Description Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent">
                About This Sacred Journey
              </h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {tour.description}
            </p>
            <p className="text-gray-600 text-base leading-relaxed italic">
              {tour.spiritualSignificance}
            </p>
          </div>
        </div>
      </section>

      {/* Sacred Destinations - Glassy Cards */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 border border-orange-200 rounded-full px-6 py-2 mb-4">
              <Mountain className="w-5 h-5 text-orange-600" />
              <span className="font-semibold text-orange-800">Sacred Destinations</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-purple-600 to-yellow-600 bg-clip-text text-transparent">
              The Four Divine Abodes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tour.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group relative bg-white/30 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 shadow-2xl overflow-hidden hover:shadow-orange-500/20 hover:scale-[1.02] transition-all duration-300"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="text-6xl mb-4">{highlight.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{highlight.name}</h3>
                  <p className="text-orange-600 font-semibold mb-3">{highlight.deity}</p>
                  <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                </div>

                {/* Decorative Element */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Route Timeline */}
      <section className="relative py-20 px-4 bg-white/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-orange-100 border border-purple-200 rounded-full px-6 py-2 mb-4">
              <Navigation className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-800">Your Sacred Route</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Journey Path</h2>
            <div className="bg-white/50 backdrop-blur-xl border border-white/50 rounded-2xl px-6 py-4 inline-block shadow-lg">
              <p className="text-gray-700 font-mono text-sm md:text-base">{tour.route}</p>
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="space-y-4">
            {tour.itinerary.map((day, index) => (
              <div key={index}>
                <button
                  onClick={() => setActiveDay(activeDay === index ? null : index)}
                  className="w-full"
                >
                  <div className="group bg-white/40 backdrop-blur-2xl border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-xl flex items-center justify-center shadow-lg text-white font-bold">
                          {day.day}
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold text-gray-800 text-lg">{day.title}</h4>
                          {activeDay !== index && (
                            <p className="text-gray-600 text-sm">{day.description.substring(0, 50)}...</p>
                          )}
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-6 h-6 text-orange-600 transition-transform duration-300 ${
                          activeDay === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {activeDay === index && (
                      <div className="mt-4 pt-4 border-t border-orange-200 transition-all duration-300">
                        <p className="text-gray-700">{day.description}</p>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Package Inclusions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tour.inclusions.map((inclusion, index) => (
              <div
                key={index}
                className="bg-white/30 backdrop-blur-2xl border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-400 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">{inclusion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-orange-100/50 to-purple-100/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Triveni Cabs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tour.whyChoose.map((reason, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-2xl border border-white/50 rounded-3xl p-8 shadow-xl text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-orange-500 via-purple-600 to-yellow-500 rounded-3xl p-12 shadow-2xl overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-[url('/patterns/mandala.svg')] opacity-10" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Begin Your Spiritual Journey Today
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Experience divine blessings with comfort and safety
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:+91${phoneNumber}`}
                  className="bg-white text-orange-600 px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <Phone className="w-6 h-6" />
                  Call {phoneNumber}
                </a>
                <a
                  href={`https://wa.me/${phoneNumber}?text=Hi, I want to book ${tour.title}. Please share package details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <BsWhatsapp className="w-6 h-6" />
                  Book via WhatsApp
                </a>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Safe & Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Trusted Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>Best Prices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add Custom CSS Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ReligiousTourClient;
