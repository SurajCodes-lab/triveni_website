'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Phone, MapPin, Globe, Languages, Award, Users, Star, Sparkles, BookOpen, Compass, Camera, Heart, CheckCircle, BadgeCheck, Clock, Shield, ArrowRight, Navigation } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

// Define constants
const availableLocations = [
  'Delhi', 'Agra', 'Jaipur', 'Haridwar', 'Chandigarh',
  'Shimla', 'Manali', 'Amritsar', 'Dehradun', 'Rishikesh',
  'Jodhpur', 'Udaipur', 'Ayodhya', 'Ahmedabad'
];

const languagePrices = {
  'English': 1500,
  'Hindi': 1200,
  'French': 2000,
  'Spanish': 2000,
  'German': 2200,
  'Chinese': 2500
};

const phoneNumber = '7668570551';

const tourGuideFeatures = [
  {
    icon: Award,
    title: 'Certified Experts',
    description: 'Licensed professionals with deep knowledge of local culture and history',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: Languages,
    title: 'Multi-Language',
    description: 'Fluent guides available in 6+ international languages',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Compass,
    title: 'Local Insights',
    description: 'Discover hidden gems and authentic experiences',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Camera,
    title: 'Photo Assistance',
    description: 'Best spots and angles for memorable photographs',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: Clock,
    title: 'Flexible Timing',
    description: 'Customizable tours to match your schedule',
    color: 'from-rose-500 to-red-500'
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Attentive service tailored to your interests',
    color: 'from-indigo-500 to-purple-500'
  }
];

export default function TourGuideClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    language: '',
    city: '',
    message: ''
  });

  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'language') {
      setPrice(languagePrices[value] || 0);
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Create formatted message with form data
    const message = `🎯 *Tour Guide Booking Request*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phoneNumber}
🌍 *Language:* ${formData.language}
📍 *City:* ${formData.city}
💰 *Price:* ₹${price}

📝 *Message:*
${formData.message || 'No additional message'}

Please confirm my booking. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white overflow-hidden">

      {/* Hero Section - Tourist Theme */}
      <motion.section
        ref={heroRef}
        className="relative h-screen min-h-[600px] max-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/tour-guide.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-900/70 to-yellow-900/80" />
        </div>

        {/* Animated Gradient Orbs - Tourist Colors */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -80, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl"
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center pb-8 pt-[22px]">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FACF2D]/20 to-orange-500/20 backdrop-blur-md border-2 border-[#FACF2D]/50 px-6 py-2 rounded-full mb-6 shadow-xl"
          >
            <Compass className="w-5 h-5 text-[#FACF2D]" />
            <span className="text-white font-bold text-xs md:text-sm tracking-wider">DISCOVER INCREDIBLE INDIA</span>
            <Sparkles className="w-5 h-5 text-[#FACF2D]" />
          </motion.div>

          {/* Main Title with TypeAnimation */}
          <div className="mb-6">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-3"
            >
              Your Journey,
            </motion.h1>
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-[#FACF2D] via-yellow-300 to-orange-400 bg-clip-text text-transparent leading-tight"
            >
              <TypeAnimation
                sequence={[
                  'Our Passion',
                  2500,
                  'Our Expertise',
                  2500,
                  'Our Pride',
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
            className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed font-medium"
          >
            Certified local guides • 6 Languages • 14+ Cities • Authentic Cultural Experiences
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            <motion.a
              href={`https://wa.me/${phoneNumber}?text=Hello!%20I%27m%20interested%20in%20booking%20a%20tour%20guide.`}
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(250, 207, 45, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black px-8 py-4 rounded-full font-bold text-base md:text-lg overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                <BsWhatsapp className="w-5 h-5 mr-2" />
                Book Your Guide
              </span>
            </motion.a>

            <motion.a
              href={`tel:+91${phoneNumber}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/20 transition-all duration-300 flex items-center gap-2 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Call: {phoneNumber}
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, text: 'Certified Guides', number: '100+' },
              { icon: Languages, text: 'Languages', number: '6+' },
              { icon: MapPin, text: 'Cities Covered', number: '14+' },
              { icon: Users, text: 'Happy Tourists', number: '5000+' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.3 + index * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl p-3 hover:bg-white/20 transition-all shadow-lg"
              >
                <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#FACF2D] mx-auto mb-1" />
                <p className="text-xl md:text-2xl font-black text-white mb-1">{item.number}</p>
                <p className="text-white/80 text-xs md:text-sm font-semibold">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white text-xs md:text-sm font-semibold">Explore</span>
            <ChevronRight className="w-5 h-5 text-[#FACF2D] rotate-90" />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section - Tourist Theme */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full mb-6"
            >
              <Star className="w-5 h-5 text-orange-600" />
              <span className="text-orange-600 font-bold text-sm tracking-wider">WHY CHOOSE US</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Experience <span className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-600 bg-clip-text text-transparent">Authentic India</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With our expert local guides who bring stories to life
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourGuideFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-gradient-to-br from-white to-orange-50/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Cities Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 md:p-12 border-2 border-orange-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-black text-gray-900 mb-4">
                <MapPin className="w-8 h-8 inline-block text-orange-600 mr-2" />
                We Cover 14+ Cities Across India
              </h3>
              <p className="text-gray-600">From heritage capitals to spiritual havens, mountain retreats to cultural hubs</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {availableLocations.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all border border-orange-200 hover:border-orange-400"
                >
                  <Navigation className="w-5 h-5 text-orange-600 mx-auto mb-2" />
                  <span className="text-sm font-bold text-gray-800">{city}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section - Modern Tourist Design */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/30 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">

          {/* Form Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-teal-100 px-6 py-3 rounded-full mb-6"
            >
              <BookOpen className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-bold text-sm tracking-wider">BOOK YOUR GUIDE</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Start Your <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Adventure Today</span>
            </h2>
            <p className="text-xl text-gray-600">Fill the form below and we'll connect you with the perfect guide</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleWhatsAppSubmit} className="bg-white shadow-2xl rounded-3xl p-8 space-y-6 border-2 border-orange-100">

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all group-hover:border-orange-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all group-hover:border-orange-300"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all group-hover:border-orange-300"
                      required
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Language</label>
                    <select
                      name="language"
                      value={formData.language}
                      onChange={handleChange}
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all group-hover:border-orange-300"
                      required
                    >
                      <option value="">Select Language</option>
                      {Object.keys(languagePrices).map(lang => (
                        <option key={lang} value={lang}>{lang} - ₹{languagePrices[lang]}/day</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2">City to Visit</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all group-hover:border-orange-300"
                    required
                  >
                    <option value="">Select City</option>
                    {availableLocations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                <div className="group">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Special Requirements</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your interests, accessibility needs, or any special requests..."
                    className="w-full p-4 border-2 border-gray-200 rounded-xl h-32 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all group-hover:border-orange-300"
                  />
                </div>

                {formData.language && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-2 border-orange-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Guide Price</p>
                        <p className="text-3xl font-black text-orange-600">₹{price}</p>
                        <p className="text-sm text-gray-600">per day for {formData.language} guide</p>
                      </div>
                      <BadgeCheck className="w-16 h-16 text-orange-600" />
                    </div>
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-5 px-8 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
                >
                  <BsWhatsapp className="w-6 h-6" />
                  Book via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <motion.a
                    href={`tel:+91${phoneNumber}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-black text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-800 transition-all font-semibold shadow-lg"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </motion.a>
                </div>
              </form>
            </motion.div>

            {/* Benefits Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-orange-500 to-amber-600 text-white p-8 rounded-3xl shadow-2xl">
                <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                  <Sparkles className="w-7 h-7" />
                  What You Get
                </h3>
                <div className="space-y-4">
                  {[
                    'Certified & licensed tour guide',
                    'Deep local knowledge & insights',
                    'Flexible timing & itinerary',
                    'Photography assistance',
                    'Restaurant recommendations',
                    'Hidden gems & secret spots',
                    '24/7 customer support',
                    'Best value guarantee'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">

        {/* Animated Background */}
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(45deg, #FACF2D 25%, transparent 25%, transparent 75%, #FACF2D 75%, #FACF2D), linear-gradient(45deg, #FACF2D 25%, transparent 25%, transparent 75%, #FACF2D 75%, #FACF2D)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Need <span className="bg-gradient-to-r from-[#FACF2D] to-orange-500 bg-clip-text text-transparent">Instant Assistance?</span>
            </h2>
            <p className="text-xl text-gray-400">Our team is available 24/7 to help you plan your perfect tour</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#FACF2D]/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-orange-500 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#FACF2D] mb-3">Visit Our Office</h3>
                  <p className="text-gray-300 leading-relaxed">
                    366, Dandupura, near Tajganj<br />
                    Agra, Uttar Pradesh, 282006<br />
                    India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#FACF2D]/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#FACF2D] mb-3">24/7 Support</h3>
                  <p className="text-gray-300 text-lg mb-2">
                    <a href={`tel:+91${phoneNumber}`} className="hover:text-[#FACF2D] transition-colors">
                      +91 {phoneNumber}
                    </a>
                  </p>
                  <p className="text-gray-400">Available for immediate booking & assistance</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Optimized Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full mb-6"
            >
              <Globe className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-bold text-sm tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Everything You <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Need to Know</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: 'What languages do your tour guides speak?',
                answer: 'Our certified tour guides are fluent in English, Hindi, French, Spanish, German, and Chinese. This ensures clear communication and a rich cultural experience regardless of where you\'re from. Each guide is carefully selected for their language proficiency and communication skills.',
                icon: Languages
              },
              {
                question: 'Are your tour guides certified and licensed?',
                answer: 'Absolutely! All our tour guides are officially certified by the Ministry of Tourism, Government of India. They undergo rigorous training and examinations covering history, archaeology, culture, and hospitality. They also hold valid licenses and identity cards issued by tourism authorities.',
                icon: BadgeCheck
              },
              {
                question: 'How do I book a tour guide?',
                answer: 'Booking is simple and instant! Just fill out our online form above, select your preferred language and destination city. We\'ll connect you with an expert guide via WhatsApp within minutes. You can also call us directly at +91 7668570551 for immediate assistance.',
                icon: BookOpen
              },
              {
                question: 'What\'s included in the tour guide service?',
                answer: 'Our comprehensive service includes expert historical and cultural commentary, personalized itinerary planning, photography assistance, restaurant recommendations, entrance fee guidance, local market tours, and assistance with local interactions. We ensure an authentic, enriching experience tailored to your interests.',
                icon: CheckCircle
              },
              {
                question: 'Can I customize my tour itinerary?',
                answer: 'Yes! We pride ourselves on flexibility. Our guides work with you to create a personalized experience based on your interests, pace, and time constraints. Whether you\'re interested in history, food, photography, spirituality, or adventure - we\'ll tailor the tour to match your preferences perfectly.',
                icon: Compass
              },
              {
                question: 'What are the payment terms and cancellation policy?',
                answer: 'Payment can be made in cash to the guide or via online transfer. We require 24 hours notice for cancellations to provide a full refund. For same-day cancellations, a 50% fee applies. We offer transparent pricing with no hidden charges - what you see is what you pay.',
                icon: Shield
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-orange-200 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <faq.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 leading-tight">{faq.question}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed pl-16">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 relative overflow-hidden">
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

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
              Ready to Explore India with Expert Guides?
            </h2>
            <p className="text-xl text-gray-900 mb-12 font-semibold">
              Book now and discover the stories, secrets, and soul of incredible India
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href={`https://wa.me/${phoneNumber}?text=Hello!%20I%27m%20ready%20to%20book%20a%20tour%20guide.`}
              target="_blank"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[#FACF2D] px-12 py-6 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-2xl"
            >
              <BsWhatsapp className="w-6 h-6" />
              BOOK YOUR GUIDE NOW
            </motion.a>

            <motion.a
              href={`tel:+91${phoneNumber}`}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-12 py-6 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-2xl"
            >
              <Phone className="w-6 h-6" />
              CALL: {phoneNumber}
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
}
