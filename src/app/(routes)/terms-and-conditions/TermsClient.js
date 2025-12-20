"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import {
  ScrollText,
  Shield,
  CreditCard,
  Car,
  Users,
  Clock,
  FileText,
  Scale,
  Phone,
  Mail,
  Globe,
  CheckCircle,
  Calendar,
  MapPin,
  ArrowRight,
  Heart,
  Sparkles,
  MessageCircle,
  Award,
  CheckCircle2,
  Headphones,
  AlertTriangle
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { phoneNumber } from "@/utilis/data";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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

// Terms Data
const termsData = [
  {
    id: 'booking',
    icon: Calendar,
    title: 'Booking Confirmation',
    gradient: 'from-blue-400 to-cyan-500',
    content: [
      'All bookings must be made in advance via our website, phone, WhatsApp, or email.',
      'Bookings are subject to vehicle availability and will be confirmed only after receiving a confirmation message or email from Triveni Cabs.',
      'Triveni Cabs reserves the right to cancel any booking if the customer provides false or incomplete information.'
    ],
    highlights: ['Advance booking required', 'Subject to availability', 'Confirmation via message/email']
  },
  {
    id: 'pricing',
    icon: CreditCard,
    title: 'Pricing and Payments',
    gradient: 'from-green-400 to-emerald-500',
    content: [
      'All prices are quoted based on the selected vehicle type, distance, route, and service type (one-way, round-trip, or hourly).',
      'Toll tax, parking charges, inter-state taxes, and additional waiting time charges are not included unless specifically mentioned.',
      'A partial or full advance payment may be required to confirm the booking.',
      'Payments must be made via approved modes (UPI, Bank Transfer, Card, Cash, etc.).'
    ],
    highlights: ['Transparent pricing', 'Additional charges apply', 'Multiple payment options']
  },
  {
    id: 'vehicle',
    icon: Car,
    title: 'Vehicle & Driver Responsibilities',
    gradient: 'from-purple-400 to-pink-500',
    content: [
      'Triveni Cabs ensures that all vehicles are clean, well-maintained, and driven by licensed, professional drivers.',
      'Passengers are requested to cooperate with drivers and not engage in any unlawful or unsafe activities during the ride.',
      'Any damage to the vehicle caused by the passenger will be chargeable.'
    ],
    highlights: ['Licensed professional drivers', 'Well-maintained vehicles', 'Damage charges apply']
  },
  {
    id: 'customer',
    icon: Users,
    title: 'Customer Responsibilities',
    gradient: 'from-amber-400 to-orange-500',
    content: [
      'The customer must provide accurate pickup and drop details and be available at the scheduled time.',
      'Consumption of alcohol, drugs, or any illegal activity during the ride is strictly prohibited.',
      'Customers must not misbehave with the driver or support staff.'
    ],
    highlights: ['Accurate pickup details', 'No illegal activities', 'Respectful behavior']
  },
  {
    id: 'delays',
    icon: Clock,
    title: 'Delays and Liability',
    gradient: 'from-red-400 to-rose-500',
    content: [
      'Triveni Cabs will make every effort to reach the pickup location on time but shall not be held responsible for delays due to traffic, weather, vehicle breakdowns, or any unforeseen events.',
      'We are not liable for any loss of personal belongings during the journey.'
    ],
    highlights: ['Best effort punctuality', 'Not liable for external delays', 'Personal belongings at own risk']
  },
  {
    id: 'modifications',
    icon: FileText,
    title: 'Modifications and Cancellation',
    gradient: 'from-indigo-400 to-violet-500',
    content: [
      'Any modifications to the booking (timing, route, vehicle type) must be communicated at least 24 hours in advance and are subject to availability.',
      'For cancellation and refund terms, please refer to our Cancellation & Refund Policy.'
    ],
    highlights: ['24-hour advance notice', 'Subject to availability', 'Separate refund policy']
  },
  {
    id: 'jurisdiction',
    icon: Scale,
    title: 'Jurisdiction',
    gradient: 'from-teal-400 to-cyan-500',
    content: [
      'All disputes are subject to the jurisdiction of courts located in Ghaziabad, Uttar Pradesh, or the company\'s registered address.'
    ],
    highlights: ['Ghaziabad, UP jurisdiction', 'Legal compliance required']
  }
];

const statsItems = [
  { icon: Calendar, value: "24hr", label: "Advance Notice", color: "from-amber-400 to-orange-500" },
  { icon: Shield, value: "100%", label: "Verified Drivers", color: "from-blue-400 to-cyan-500" },
  { icon: CreditCard, value: "Multiple", label: "Payment Options", color: "from-purple-400 to-pink-500" },
  { icon: Headphones, value: "24/7", label: "Support Available", color: "from-green-400 to-emerald-500" }
];

export default function TermsClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleWhatsAppClick = (message = '') => {
    const defaultMessage = message || "Hi! I have a question about Triveni Cabs terms and conditions.";
    const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/about_banner.webp"
            alt="Terms and Conditions"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
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
              <ScrollText className="w-5 h-5 text-gray-800" />
              <span className="text-gray-800 font-bold text-sm tracking-wide">TERMS & CONDITIONS</span>
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
              <span className="block text-white drop-shadow-lg">Terms &</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="block bg-gradient-to-r from-yellow-300 via-[#FACF2D] to-orange-400 bg-clip-text text-transparent"
              >
                <TypeAnimation
                  sequence={[
                    'Conditions',
                    3000,
                    'Guidelines',
                    2000,
                    'Conditions',
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
            Please read our terms and conditions carefully before using Triveni Cabs services.
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
              Book Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:+91${phoneNumber}`}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full flex items-center gap-3 hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </motion.a>
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

      {/* TERMS SECTIONS */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <FileText className="w-5 h-5" />
              <span className="font-semibold">Service Agreement</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Our Terms of Service
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding our terms helps ensure a smooth and enjoyable travel experience for everyone.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {termsData.map((section, index) => (
              <AnimatedSection key={section.id} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-amber-300"
                >
                  {/* Section Header */}
                  <div className={`bg-gradient-to-r ${section.gradient} p-6 md:p-8 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 transform translate-x-20 -translate-y-20"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-white/5 transform -translate-x-16 translate-y-16"></div>

                    <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
                          <section.icon className="w-8 h-8" />
                        </div>
                        <div>
                          <div className="text-sm font-medium mb-1 opacity-90">Section {index + 1}</div>
                          <h3 className="text-2xl md:text-3xl font-bold">{section.title}</h3>
                        </div>
                      </div>

                      <div className="hidden md:flex flex-wrap gap-2">
                        {section.highlights.slice(0, 2).map((highlight, i) => (
                          <span key={i} className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="p-6 md:p-8">
                    <ul className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-4 group/item">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          </div>
                          <span className="text-gray-700 leading-relaxed text-lg group-hover/item:text-gray-900 transition-colors duration-200">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlights for mobile */}
                    <div className="md:hidden mt-6 pt-4 border-t border-gray-100">
                      <h4 className="text-sm font-semibold text-gray-500 mb-3">Key Points:</h4>
                      <div className="flex flex-wrap gap-2">
                        {section.highlights.map((highlight, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
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
              Key Highlights
            </h2>
            <p className="text-gray-400 text-lg">
              What you should know about our services
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

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[#FACF2D] via-yellow-400 to-amber-500 rounded-3xl p-8 md:p-12 text-gray-900 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/5 transform -translate-x-24 translate-y-24"></div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
                  <Phone className="w-10 h-10" />
                  Get in Touch
                </h2>
                <p className="text-xl mb-8 max-w-2xl">
                  Have questions about our terms? Need to modify or cancel your booking? Our support team is here to help.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:+91${phoneNumber}`}
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 block"
                  >
                    <Phone className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Phone Support</h3>
                    <p className="text-lg font-bold">+91-{phoneNumber}</p>
                    <p className="text-sm opacity-80">24/7 Available</p>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:cabstriveni@gmail.com"
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 block"
                  >
                    <Mail className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Email Support</h3>
                    <p className="text-lg font-bold">cabstriveni@gmail.com</p>
                    <p className="text-sm opacity-80">Quick Response</p>
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://www.trivenicabs.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 block"
                  >
                    <Globe className="w-8 h-8 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Website</h3>
                    <p className="text-lg font-bold">trivenicabs.in</p>
                    <p className="text-sm opacity-80">Online Booking</p>
                  </motion.a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-[#FACF2D]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-500/10 rounded-full blur-xl"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-full mb-6 shadow-xl"
              >
                <Heart className="w-10 h-10 text-gray-800" />
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Book Your Ride?
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Now that you understand our terms, start your journey with Triveni Cabs. Professional, safe, and reliable transportation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleWhatsAppClick("Hi! I want to book a taxi with Triveni Cabs. Can you help me with the booking?")}
                  className="group px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg rounded-full shadow-xl flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
                >
                  <MessageCircle className="w-6 h-6" />
                  Book Now on WhatsApp
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  href={`tel:+91${phoneNumber}`}
                  className="px-10 py-5 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-white hover:text-gray-900 transition-all"
                >
                  <Phone className="w-6 h-6" />
                  Call +91-{phoneNumber}
                </motion.a>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 pt-8 border-t border-gray-700">
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
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-amber-400" />
                      </div>
                      <span className="text-sm font-semibold text-gray-400">{item.text}</span>
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
