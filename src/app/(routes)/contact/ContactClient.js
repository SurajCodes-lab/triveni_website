"use client";

import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
// Centralized icon imports for better bundle optimization
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Clock,
  MessageCircle,
  Headphones,
  CheckCircle,
  AlertCircle,
  Heart,
  Sparkles,
  Shield,
  Users,
  Car,
  Award,
  Star,
  CheckCircle2,
  Building2,
  Globe,
  Zap,
  User,
  Bus,
  Truck,
  CalendarCheck,
  Navigation
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

// Static data constants
const CONTACT_INFO = [
  {
    icon: Phone,
    title: "24/7 Booking Hotline",
    content: `+91 ${phoneNumber}`,
    subContent: "Available round the clock",
    action: `tel:+91${phoneNumber}`,
    actionText: "Call Now",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    icon: Mail,
    title: "Email Support",
    content: "cabstriveni@gmail.com",
    subContent: "Response within 2 hours",
    action: "mailto:cabstriveni@gmail.com",
    actionText: "Send Email",
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Booking",
    content: `+91 ${phoneNumber}`,
    subContent: "Quick booking & support",
    action: `https://wa.me/91${phoneNumber}`,
    actionText: "WhatsApp",
    gradient: "from-green-500 to-teal-500"
  },
  {
    icon: MapPin,
    title: "Head Office",
    content: "366, Dandupura, Tajganj",
    subContent: "Agra, UP 282006",
    action: "https://maps.google.com/?q=366,Dandupura,Tajganj,Agra",
    actionText: "Get Directions",
    gradient: "from-purple-400 to-pink-500"
  }
];

const BUSINESS_HOURS = [
  { day: "Monday - Sunday", hours: "24/7 Available", highlight: true },
  { day: "Office Hours", hours: "9:00 AM - 6:00 PM", highlight: false },
  { day: "Emergency Support", hours: "24/7 Available", highlight: true }
];

const SERVICE_CITIES = [
  { name: 'Delhi', href: '/delhi' },
  { name: 'Agra', href: '/agra' },
  { name: 'Jaipur', href: '/jaipur' },
  { name: 'Chandigarh', href: '/chandigarh' },
  { name: 'Shimla', href: '/shimla' },
  { name: 'Manali', href: '/manali' },
  { name: 'Amritsar', href: '/amritsar' },
  { name: 'Dehradun', href: '/dehradun' },
  { name: 'Rishikesh', href: '/rishikesh' },
  { name: 'Haridwar', href: '/haridwar' },
  { name: 'Jodhpur', href: '/jodhpur' },
  { name: 'Udaipur', href: '/udaipur' },
  { name: 'Ayodhya', href: '/ayodhya' },
  { name: 'Ahmedabad', href: '/ahmedabad' }
];

const SERVICE_TYPES = [
  { value: "", label: "Select a service" },
  { value: "outstation", label: "Outstation Cab Booking" },
  { value: "local", label: "Local Taxi Service" },
  { value: "airport", label: "Airport Transfer" },
  { value: "wedding", label: "Wedding Car Rental" },
  { value: "corporate", label: "Corporate Transportation" },
  { value: "other", label: "Other Inquiry" }
];

const statsItems = [
  { icon: Car, value: "500+", label: "Premium Vehicles", color: "from-amber-400 to-orange-500" },
  { icon: Users, value: "10,000+", label: "Happy Customers", color: "from-blue-400 to-cyan-500" },
  { icon: MapPin, value: "50+", label: "Cities Covered", color: "from-purple-400 to-pink-500" },
  { icon: Headphones, value: "24/7", label: "Support Available", color: "from-green-400 to-emerald-500" }
];

const TEAM_MEMBERS = [
  {
    name: "Rinku Singh",
    role: "Manager",
    phone: "7876285700",
    icon: User,
    gradient: "from-amber-400 to-orange-500"
  },
  {
    name: "Harshit Singh",
    role: "Reservation Counter",
    phone: null,
    icon: CalendarCheck,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    name: "Mayank Singh",
    role: "One Way Department",
    phone: null,
    icon: Navigation,
    gradient: "from-green-400 to-emerald-500"
  },
  {
    name: "Amar Pratap Singh",
    role: "Tempo Travel Rental",
    phone: null,
    icon: Truck,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    name: "Manisha Singh",
    role: "Bus Rental",
    phone: null,
    icon: Bus,
    gradient: "from-red-400 to-rose-500"
  }
];

const OFFICE_ALT_NUMBER = "7830249404";

// Optimized form validation
const validateForm = (data) => {
  const errors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Email is invalid";
  if (!data.subject.trim()) errors.subject = "Subject is required";
  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.length < 10) errors.message = "Message must be at least 10 characters";

  return errors;
};

// Lazy loading map component with error handling
const LazyMap = () => {
  const mapRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoaded && !hasError) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, [isLoaded, hasError]);

  const handleMapError = useCallback(() => {
    setHasError(true);
  }, []);

  return (
    <div ref={mapRef} className="relative rounded-2xl overflow-hidden">
      {isLoaded && !hasError ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.070065346594!2d78.03222671511287!3d27.162790483020315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974724c3a85754b%3A0x69b6e3cf6cb66d4f!2s366%2C%20Dandupura%2C%20Tajganj%2C%20Agra%2C%20Uttar%20Pradesh%20282006%2C%20India!5e0!3m2!1sen!2sin!4v1701234567890!5m2!1sen!2sin"
          className="w-full h-[300px] md:h-[350px] transition-opacity duration-300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Triveni Cabs Office Location in Agra"
          onError={handleMapError}
        />
      ) : hasError ? (
        <div className="w-full h-[300px] md:h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600 font-medium">Unable to load map</p>
            <p className="text-sm text-gray-500 mt-1">366, Dandupura, Tajganj, Agra</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-[300px] md:h-[350px] bg-gradient-to-br from-amber-50 to-orange-50 animate-pulse flex items-center justify-center">
          <div className="text-gray-500 flex items-center gap-2">
            <div className="w-6 h-6 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
            Loading map...
          </div>
        </div>
      )}
    </div>
  );
};

// Contact Card Component with animations
const ContactCard = ({ item, index }) => (
  <motion.article
    variants={scaleIn}
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300 overflow-hidden"
  >
    {/* Gradient Background on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

    <div className="relative z-10 flex flex-col items-center text-center">
      <div className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <item.icon className="w-8 h-8 text-white" />
      </div>
      <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors">
        {item.title}
      </h2>
      <p className="text-gray-700 font-medium mb-1">
        {item.content}
      </p>
      <p className="text-sm text-gray-500 mb-4">
        {item.subContent}
      </p>
      <Link
        href={item.action}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FACF2D] to-amber-400 text-gray-800 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105"
        target={item.action.startsWith('http') ? '_blank' : undefined}
        rel={item.action.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {item.actionText}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>

    {/* Decorative Corner */}
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50"></div>
  </motion.article>
);

// Form Input Component
const FormInput = ({ label, name, type = "text", required = false, placeholder, value, onChange, error, autoComplete, rows }) => {
  const inputId = `form-${name}`;
  const errorId = `${inputId}-error`;

  const baseClasses = `w-full px-5 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 bg-white ${
    error ? 'border-red-300 bg-red-50' : 'border-gray-200 hover:border-amber-200'
  }`;

  return (
    <div>
      <label
        className="block text-sm font-semibold text-gray-700 mb-2"
        htmlFor={inputId}
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={inputId}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={`${baseClasses} resize-none`}
          placeholder={placeholder}
          rows={rows}
        />
      ) : type === 'select' ? (
        <select
          id={inputId}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClasses}
        >
          {SERVICE_TYPES.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={inputId}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          className={baseClasses}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
      )}

      {error && (
        <p id={errorId} className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// Main Contact Component
export default function ContactClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const submitTimeoutRef = useRef(null);

  const handleWhatsAppClick = (message = '') => {
    const defaultMessage = message || "Hi! I need assistance with Triveni Cabs services.";
    const whatsappURL = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = document.getElementById(`form-${Object.keys(validationErrors)[0]}`);
      firstErrorField?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceType: '',
        subject: '',
        message: ''
      });

      setSubmitStatus('success');

      if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
      submitTimeoutRef.current = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
      }
    };
  }, []);

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
            alt="Contact Triveni Cabs"
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
              <Headphones className="w-5 h-5 text-gray-800" />
              <span className="text-gray-800 font-bold text-sm tracking-wide">GET IN TOUCH</span>
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
              <span className="block text-white drop-shadow-lg">Contact</span>
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
                    '24/7 Support',
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
            We&apos;re here to help you 24/7. Reach out to us for bookings, inquiries, or any assistance you need.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href={`tel:+91${phoneNumber}`}
              className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full shadow-xl flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber}
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleWhatsAppClick()}
              className="px-8 py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-gray-800 font-bold rounded-full flex items-center gap-3 shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
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

      {/* CONTACT CARDS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Contact Options</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              How Can We Help You?
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your preferred way to connect with us. We&apos;re available 24/7 to assist you.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CONTACT_INFO.map((item, index) => (
              <ContactCard key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-amber-100">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 px-5 py-2 rounded-full mb-4 shadow-sm">
                    <Send className="w-5 h-5" />
                    <span className="font-semibold">Send Message</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                    Drop Us a Message
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you within 2 hours.
                  </p>
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-green-800 font-semibold">Message sent successfully!</p>
                      <p className="text-green-700 text-sm">We&apos;ll get back to you within 2 hours.</p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <p className="text-red-800 font-semibold">Failed to send message</p>
                      <p className="text-red-700 text-sm">Please try again or call us directly.</p>
                    </div>
                  </motion.div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      label="First Name"
                      name="firstName"
                      required
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      error={errors.firstName}
                      autoComplete="given-name"
                    />
                    <FormInput
                      label="Last Name"
                      name="lastName"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={errors.lastName}
                      autoComplete="family-name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormInput
                      label="Email Address"
                      name="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      autoComplete="email"
                    />
                    <FormInput
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+91 7668570551"
                      value={formData.phone}
                      onChange={handleInputChange}
                      error={errors.phone}
                      autoComplete="tel"
                    />
                  </div>

                  <FormInput
                    label="Service Type"
                    name="serviceType"
                    type="select"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    error={errors.serviceType}
                  />

                  <FormInput
                    label="Subject"
                    name="subject"
                    required
                    placeholder="How can we help you?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    error={errors.subject}
                  />

                  <FormInput
                    label="Message"
                    name="message"
                    type="textarea"
                    required
                    placeholder="Please describe your inquiry or booking requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    error={errors.message}
                    rows={5}
                  />

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-[#FACF2D] to-amber-500 hover:from-amber-500 hover:to-orange-500 disabled:opacity-50 disabled:cursor-not-allowed text-gray-800 font-bold text-lg rounded-xl shadow-lg flex items-center justify-center gap-3 transition-all duration-300"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-gray-800 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </motion.button>
                </form>
              </div>
            </AnimatedSection>

            {/* Right Column - Info */}
            <div className="space-y-8">
              {/* Map Section */}
              <AnimatedSection delay={0.1}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
                        <p className="text-gray-600 text-sm">366, Dandupura, Tajganj, Agra</p>
                      </div>
                    </div>
                  </div>
                  <LazyMap />
                </div>
              </AnimatedSection>

              {/* Business Hours */}
              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-3xl shadow-xl p-6 border-2 border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">Service Hours</h3>
                  </div>
                  <div className="space-y-3">
                    {BUSINESS_HOURS.map((schedule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex justify-between items-center py-4 px-5 rounded-xl transition-colors duration-200 ${
                          schedule.highlight
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <span className="text-gray-700 font-medium">
                          {schedule.day}
                        </span>
                        <span className={`font-bold ${
                          schedule.highlight ? 'text-green-600' : 'text-gray-800'
                        }`}>
                          {schedule.hours}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Quick Contact Card */}
              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-6 border-2 border-amber-200 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Zap className="w-7 h-7 text-gray-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Need Immediate Help?
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Our team is ready to assist you 24/7 for bookings, cancellations, or any travel needs.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={`tel:+91${phoneNumber}`}
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FACF2D] to-amber-400 text-gray-800 px-5 py-3 rounded-xl font-semibold shadow-md"
                        >
                          <Phone className="w-4 h-4" />
                          Call Now
                        </motion.a>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleWhatsAppClick()}
                          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-xl font-semibold shadow-md"
                        >
                          <MessageCircle className="w-4 h-4" />
                          WhatsApp
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
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
              Trusted by Thousands
            </h2>
            <p className="text-gray-400 text-lg">
              Join our growing family of satisfied travelers across India
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

      {/* TEAM SECTION */}
      <section className="py-20 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200/30 to-amber-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-pink-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Our Team</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              Meet Our Department Heads
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team is here to assist you with all your travel needs. Contact the right department for quick assistance.
            </p>
          </AnimatedSection>

          {/* Office Alternative Number */}
          <AnimatedSection className="mb-12">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-gray-800" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-gray-600 font-medium">Office Alternative Number</p>
                  <a
                    href={`tel:+91${OFFICE_ALT_NUMBER}`}
                    className="text-2xl font-bold text-gray-800 hover:text-amber-600 transition-colors"
                  >
                    +91 {OFFICE_ALT_NUMBER}
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-amber-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-amber-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-amber-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  {member.phone && (
                    <a
                      href={`tel:+91${member.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                  )}
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICE CITIES SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 px-6 py-2 rounded-full mb-6 shadow-sm">
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Our Presence</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-[#FACF2D] to-orange-600 bg-clip-text text-transparent">
              We Serve Across India
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Book reliable taxi services in 14+ cities. Available 24/7 with professional drivers.
            </p>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
          >
            {SERVICE_CITIES.map((city, index) => (
              <motion.div key={city.name} variants={scaleIn}>
                <Link
                  href={city.href}
                  className="group flex items-center justify-center gap-2 py-4 px-6 bg-white rounded-2xl shadow-md hover:shadow-xl border-2 border-gray-100 hover:border-amber-300 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                  <span className="font-semibold text-gray-700 group-hover:text-amber-700 transition-colors">
                    {city.name}
                  </span>
                </Link>
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
                  Ready to Start Your Journey?
                </h2>

                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                  Experience the best cab service in India. Book now and travel with comfort, safety, and reliability.
                </p>

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

                  <motion.a
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:+91${phoneNumber}`}
                    className="px-10 py-5 bg-white border-2 border-amber-300 text-gray-800 font-bold text-lg rounded-full flex items-center justify-center gap-3 hover:bg-amber-50 hover:border-amber-400 transition-all shadow-lg"
                  >
                    <Phone className="w-6 h-6" />
                    Call: {phoneNumber}
                  </motion.a>
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
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Triveni Cabs",
            "description": "Professional taxi and cab services across India with 24/7 customer support",
            "telephone": `+91-${phoneNumber}`,
            "email": "cabstriveni@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "366, Dandupura, Tajganj",
              "addressLocality": "Agra",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "282006",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "serviceArea": SERVICE_CITIES.map(city => ({
              "@type": "City",
              "name": city.name
            })),
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": `+91-${phoneNumber}`,
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi"],
              "hoursAvailable": "Mo-Su 00:00-23:59"
            }
          })
        }}
      />
    </div>
  );
}
