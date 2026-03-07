"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
// Centralized icon imports for better bundle optimization
import {
  RotateCcw,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  RefreshCw,
  Phone,
  Mail,
  CreditCard,
  ArrowRight,
  Shield,
  Timer,
  DollarSign,
  MapPin,
  Zap,
  Heart,
  Sparkles,
  AlertTriangle,
  MessageCircle,
  Users,
  Car,
  Award,
  CheckCircle2,
  FileText,
  Headphones
} from "@/components/ui/icons";
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

// Data
const cancellationTiers = [
  {
    timeframe: '7+ Days Before',
    icon: CheckCircle,
    gradient: 'from-green-400 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    refund: '100%',
    status: 'Full Refund',
    description: 'Cancel worry-free with complete refund of your advance payment'
  },
  {
    timeframe: '3-6 Days Before',
    icon: RefreshCw,
    gradient: 'from-amber-400 to-orange-500',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    refund: '50%',
    status: 'Partial Refund',
    description: 'Half of your advance amount will be returned to you'
  },
  {
    timeframe: 'Within 72 Hours',
    icon: XCircle,
    gradient: 'from-red-400 to-rose-500',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    refund: '0%',
    status: 'No Refund',
    description: 'No refund available for last-minute cancellations'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'Contact Us',
    description: 'Call or WhatsApp us with your booking details',
    icon: Phone,
    gradient: 'from-blue-400 to-cyan-500'
  },
  {
    step: 2,
    title: 'Verification',
    description: 'We verify your booking and cancellation eligibility',
    icon: Shield,
    gradient: 'from-purple-400 to-pink-500'
  },
  {
    step: 3,
    title: 'Processing',
    description: 'Refund processed within 5-7 working days',
    icon: Timer,
    gradient: 'from-amber-400 to-orange-500'
  },
  {
    step: 4,
    title: 'Completion',
    description: 'Amount credited to your original payment method',
    icon: CreditCard,
    gradient: 'from-green-400 to-emerald-500'
  }
];

const statsItems = [
  { icon: Clock, value: "5-7", label: "Days Refund Time", color: "from-amber-400 to-orange-500" },
  { icon: Shield, value: "100%", label: "Secure Process", color: "from-blue-400 to-cyan-500" },
  { icon: Headphones, value: "24/7", label: "Support Available", color: "from-purple-400 to-pink-500" },
  { icon: CheckCircle, value: "Fair", label: "Transparent Policy", color: "from-green-400 to-emerald-500" }
];

export default function CancellationClient() {
  const handleWhatsAppClick = (message = '') => {
    const defaultMessage = message || "Hi! I need to cancel my booking. Can you help me with the cancellation process?";
    const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about/about_banner.webp"
            alt="Cancellation and Refund Policy"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/40"></div>
        </div>

        {/* Background Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl opacity-50" />

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
              <RotateCcw className="w-5 h-5 text-gray-800" />
              <span className="text-gray-800 font-bold text-sm tracking-wide">CANCELLATION POLICY</span>
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
              <span className="block text-white drop-shadow-lg">Cancellation &</span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="block bg-gradient-to-r from-yellow-300 via-[#FACF2D] to-orange-400 bg-clip-text text-transparent"
              >
                <TypeAnimation
                  sequence={[
                    'Refund Policy',
                    3000,
                    'Fair Terms',
                    2000,
                    'Refund Policy',
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
            Fair, transparent, and customer-friendly cancellation terms designed for your peace of mind.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsAppClick()}
              className="group px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-full shadow-xl flex items-center gap-3"
            >
              Request Cancellation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              whileTap={{ scale: 0.95 }}
              href={`tel:+91${phoneNumber}`}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold rounded-full flex items-center gap-3 hover:bg-white/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Support
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
      </section>

      {/* CANCELLATION TIERS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Cancellation Timeline</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Customer Cancellation Policy
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our refund amount depends on when you cancel relative to your journey date.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {cancellationTiers.map((tier, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className={`group relative ${tier.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${tier.borderColor} overflow-hidden`}
              >
                <div className="relative z-10 text-center">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${tier.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <tier.icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {tier.timeframe}
                  </h3>

                  <div className="mb-4">
                    <span className="text-5xl font-black text-gray-900">{tier.refund}</span>
                    <span className="text-lg font-semibold text-gray-600 ml-2">REFUND</span>
                  </div>

                  <div className={`inline-block px-4 py-2 rounded-full font-semibold mb-4 ${tier.bgColor} border ${tier.borderColor}`}>
                    {tier.status}
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/50 to-transparent rounded-bl-full opacity-50"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NO SHOW POLICY */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-black/10 transform -translate-x-24 translate-y-24"></div>

              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">No Show Policy</h3>
                  <p className="text-lg leading-relaxed text-white/90">
                    If you fail to show up at the pickup location at the scheduled time without prior notice,
                    the booking will be considered a <strong>No Show</strong> and <strong>no refund will be issued</strong>.
                    Please ensure to inform us in advance if you need to cancel or modify your booking.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* COMPANY CANCELLATION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Our Commitment</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Cancellation by Triveni Cabs
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In the rare event that we need to cancel your booking due to unavoidable circumstances
              (natural calamity, breakdown, driver emergency), here&apos;s what we offer:
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection delay={0.1}>
              <motion.div
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                  Full Refund
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete refund of all paid amounts within 5-7 working days to your original payment method.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <motion.div
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                  Alternative Options
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We&apos;ll offer you an alternate vehicle or a rescheduled date as per your preference and convenience.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* REFUND PROCESS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Zap className="w-5 h-5" />
              <span className="font-semibold">Simple Process</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Refund Process Timeline
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures quick and hassle-free refunds.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300 overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-amber-700 font-bold">{step.step}</span>
                </div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Info Box */}
          <AnimatedSection delay={0.3} className="mt-12">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 text-amber-800">
                <Timer className="w-6 h-6" />
                <p className="font-semibold text-lg">
                  All eligible refunds processed within 5-7 working days to original payment method
                </p>
              </div>
            </div>
          </AnimatedSection>
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
              Our Commitment to You
            </h2>
            <p className="text-gray-400 text-lg">
              Fair, transparent, and customer-friendly policies
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

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/50 to-amber-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/50 to-pink-200/50 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-amber-200">
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

                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
                  Need to Cancel or Have Questions?
                </h2>

                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Our support team is available 24/7 to assist you with cancellations, modifications, or any queries about our refund policy.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleWhatsAppClick()}
                    className="group px-10 py-5 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-lg rounded-full shadow-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:-translate-y-1 transition-all"
                  >
                    <MessageCircle className="w-6 h-6" />
                    WhatsApp Cancel Request
                  </motion.button>

                  <motion.a
                    whileTap={{ scale: 0.95 }}
                    href={`tel:+91${phoneNumber}`}
                    className="px-10 py-5 bg-white border-2 border-amber-300 text-gray-800 font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-amber-50 hover:border-amber-400 hover:-translate-y-1 transition-all shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    Call: {phoneNumber}
                  </motion.a>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { icon: Shield, text: "100% Secure" },
                      { icon: Clock, text: "24/7 Support" },
                      { icon: CheckCircle2, text: "Fair Policy" },
                      { icon: Award, text: "Trusted" }
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
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
