"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
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
  CheckCircle2,
  Quote,
  Target,
  Eye,
  Gem,
  Zap,
  TrendingUp,
  Building2,
  GraduationCap,
  Handshake,
  Route,
  BadgeCheck,
  Headphones
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { phoneNumber } from "@/utilis/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function AboutClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleWhatsAppClick = (message = '') => {
    const defaultMessage = message || "Hi! I am interested in learning more about Triveni Cabs services.";
    const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  const visionItems = [
    {
      icon: Crown,
      title: "India's Most Reliable",
      description: "To be India's most reliable and premium cab service",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: Gem,
      title: "Transparent Pricing",
      description: "To offer transparent pricing and organised travel solutions",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: Shield,
      title: "Quality Service",
      description: "To provide clean vehicles, trained drivers, and 24/7 support",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Pan India Presence",
      description: "To expand across all major tourist circuits and metro cities",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  const valuesItems = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Every decision we make starts with our customers' needs and comfort in mind."
    },
    {
      icon: Shield,
      title: "Safety & Trust",
      description: "Verified drivers, GPS tracking, and 24/7 monitoring for your peace of mind."
    },
    {
      icon: Gem,
      title: "Excellence",
      description: "Premium vehicles, professional service, and attention to every detail."
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Transparent pricing with no hidden charges. What we quote is what you pay."
    }
  ];

  const statsItems = [
    { icon: Car, value: "500+", label: "Premium Vehicles", color: "from-amber-400 to-orange-500" },
    { icon: Users, value: "10,000+", label: "Happy Customers", color: "from-blue-400 to-cyan-500" },
    { icon: MapPin, value: "50+", label: "Cities Covered", color: "from-purple-400 to-pink-500" },
    { icon: TrendingUp, value: "15+", label: "Years Experience", color: "from-green-400 to-emerald-500" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about_page_hero_section.jpg"
            alt="About Triveni Cabs - Your Trusted Travel Partner"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/40"></div>
        </div>

        {/* Animated Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.6,
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            opacity: { duration: 1 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-400/40 to-amber-500/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.5,
            x: [0, -40, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            x: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 },
            y: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 },
            scale: { duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-pink-400/30 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          {/* Top Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-full px-6 py-3 shadow-xl">
              <Heart className="w-5 h-5 text-gray-800" />
              <span className="text-gray-800 font-bold text-sm tracking-wide">OUR STORY</span>
              <Sparkles className="w-5 h-5 text-gray-800" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight tracking-tight">
              <span className="block text-white drop-shadow-lg">Welcome to</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="block bg-gradient-to-r from-yellow-300 via-[#FACF2D] to-orange-400 bg-clip-text text-transparent"
              >
                <TypeAnimation
                  sequence={[
                    'Triveni Cabs',
                    3000,
                    'Your Travel Partner',
                    2000,
                    'Triveni Cabs',
                    3000,
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
            className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            A brand born out of passion, discipline, and the belief that travel should be simple, safe, and genuinely customer-focused.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsAppClick("Hi! I'd like to book a cab with Triveni Cabs.")}
              className="group px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-full shadow-xl flex items-center gap-3"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsAppClick()}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full flex items-center gap-3 hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/80 text-sm font-medium">Scroll to explore</span>
            <div className="w-8 h-14 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 20, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-4 bg-amber-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* FOUNDER'S MESSAGE SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Founder Image & Info */}
            <AnimatedSection>
              <div className="relative">
                {/* Floating Background */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-br from-yellow-300/40 to-amber-300/40 rounded-full blur-3xl"
                />

                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border-2 border-amber-100">
                  {/* Quote Icon */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Quote className="w-8 h-8 text-gray-800" />
                  </div>

                  {/* Founder Card */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 mt-4">
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-12 h-12 text-gray-800" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Pankaj Singh Gaur</h3>
                        <p className="text-amber-700 font-semibold">Founder & CEO</p>
                        <p className="text-gray-600 text-sm">Law Graduate | Entrepreneur</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Legal Background</p>
                          <p className="text-xs text-gray-600">Integrity in every transaction</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                          <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Customer-Centric Vision</p>
                          <p className="text-xs text-gray-600">Trust is our foundation</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 bg-white rounded-xl">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Continuous Innovation</p>
                          <p className="text-xs text-gray-600">Always improving for you</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Right - Founder's Message */}
            <AnimatedSection delay={0.2}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Founder&apos;s Message</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent leading-tight">
                Building Trust, One Journey at a Time
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I am <span className="font-bold text-amber-700">Pankaj Singh Gaur</span>, a law graduate who stepped into the world of travel services with one purpose—to build a company that people can trust with their journeys and memories.
                </p>

                <p>
                  Travel in India is dynamic and diverse. From airport transfers to long-distance routes, from pilgrimage circuits to mountain trips—every traveller expects comfort, honesty, and professionalism. Unfortunately, many face inconsistent service, unclear pricing, and unreliable commitments.
                </p>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <p className="text-xl font-semibold text-gray-800 italic">
                    &quot;If a customer trusts us with their time and safety, we must honour that trust with excellence.&quot;
                  </p>
                </div>

                <p>
                  <span className="font-bold text-amber-700">Triveni Cabs</span> was created to change that experience. Every vehicle in our fleet, every driver on our platform, and every route we operate reflects this belief. Whether it&apos;s a family trip, a work journey, airport pickup, or a weekend getaway, we ensure every detail is handled with care.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Gem className="w-5 h-5" />
              <span className="font-semibold">Our Philosophy</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              What Drives Us Every Day
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We operate with a very simple philosophy that puts you at the center of everything we do.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {valuesItems.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-gray-800" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* VISION SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/50 to-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 left-0 w-72 h-72 bg-gradient-to-br from-yellow-200/40 to-amber-200/40 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-br from-orange-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Eye className="w-5 h-5" />
              <span className="font-semibold">Our Vision</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Where We&apos;re Headed
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our vision is clear and our commitment is unwavering. Here&apos;s what we&apos;re building for you.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {visionItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300"
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Progress</span>
                    <span className="text-sm font-bold text-amber-600">{85 + index * 3}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${85 + index * 3}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className={`h-full bg-gradient-to-r ${item.gradient} rounded-full`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <motion.div
          animate={{ x: [0, 100, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-amber-600/10 via-transparent to-orange-600/10"
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Our Journey So Far
            </h2>
            <p className="text-gray-400 text-lg">
              From starting with a small fleet to growing into a multi-city network
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {statsItems.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#FACF2D] to-amber-400 bg-clip-text text-transparent mb-2"
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <BadgeCheck className="w-5 h-5" />
              <span className="font-semibold">Why Choose Triveni Cabs</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              What Makes Us Different
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We personally ensure that the quality you expect is the quality you receive—every time, in every city.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Verified Drivers",
                description: "All our drivers undergo thorough background checks and regular training to ensure your safety.",
                gradient: "from-blue-400 to-cyan-500"
              },
              {
                icon: Gauge,
                title: "Transparent Pricing",
                description: "No hidden charges, no surge pricing. What we quote is exactly what you pay.",
                gradient: "from-amber-400 to-orange-500"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock customer support to assist you whenever you need us.",
                gradient: "from-purple-400 to-pink-500"
              },
              {
                icon: Car,
                title: "Premium Fleet",
                description: "Well-maintained, sanitized vehicles ranging from sedans to luxury cars.",
                gradient: "from-green-400 to-emerald-500"
              },
              {
                icon: Route,
                title: "Pan-India Coverage",
                description: "Operating in 50+ cities with 500+ routes across India.",
                gradient: "from-red-400 to-rose-500"
              },
              {
                icon: ThumbsUp,
                title: "Customer Satisfaction",
                description: "10,000+ happy customers with 4.8/5 average rating.",
                gradient: "from-indigo-400 to-violet-500"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300 h-full"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* THANK YOU / CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/50 to-amber-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/50 to-pink-200/50 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200">
              {/* Thank You Message */}
              <div className="text-center mb-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-full mb-6 shadow-xl"
                >
                  <Heart className="w-10 h-10 text-gray-800" />
                </motion.div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                  Thank You for Choosing Triveni Cabs
                </h2>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                  <p>
                    <span className="font-bold text-amber-700">Your journey is our responsibility.</span>
                  </p>
                  <p>
                    <span className="font-bold text-amber-700">Your comfort is our priority.</span>
                  </p>
                  <p>
                    <span className="font-bold text-amber-700">Your trust is our biggest achievement.</span>
                  </p>
                </div>

                <p className="mt-6 text-gray-600 italic">
                  — Pankaj Singh Gaur, Founder & CEO
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick("Hi! I'd like to book a cab with Triveni Cabs.")}
                  className="group px-10 py-5 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold text-lg rounded-full shadow-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
                >
                  Book Your Ride Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick()}
                  className="px-10 py-5 bg-white border-2 border-amber-300 text-gray-800 font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-amber-50 hover:border-amber-400 transition-all shadow-lg"
                >
                  <Phone className="w-6 h-6" />
                  Call: {phoneNumber}
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { icon: Shield, text: "100% Safe" },
                    { icon: Clock, text: "24/7 Available" },
                    { icon: Award, text: "Best Rated" },
                    { icon: CheckCircle2, text: "Verified" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center gap-2 text-center"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
