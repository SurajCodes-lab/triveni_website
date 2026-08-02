'use client';

import React, { useState, useEffect, useRef } from 'react';
// Centralized icon imports for better bundle optimization
import { ChevronRight, Phone, MapPin, Globe, Languages, Award, Users, Star, Sparkles, BookOpen, Compass, Camera, Heart, CheckCircle, BadgeCheck, Clock, HelpCircle, ArrowRight, Navigation } from '@/components/ui/icons';
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';
import { captureLead } from '@/utilis/captureLead';

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

// Fallback FAQ set if no props are passed (keeps component self-contained).
const FALLBACK_FAQS = [
  { question: 'What languages do your tour guides speak?', answer: 'Our certified guides speak English, Hindi, French, Spanish, German and Chinese fluently.' },
  { question: 'Are your tour guides certified and licensed?', answer: 'Yes, all guides are certified by the Ministry of Tourism, Government of India.' },
];

export default function TourGuideClient({ faqs = FALLBACK_FAQS, languageRows = [], compareRows = [] }) {
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
    trackWhatsAppClick('tour_guide_form', `${formData.city || ''} ${formData.language || ''}`.trim());

    // Capture the lead to the Sheet before the WhatsApp handoff.
    captureLead({
      name: formData.name,
      phone: formData.phoneNumber,
      email: formData.email,
      fromCity: formData.city,
      pageType: 'tour_guide',
    });

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-white overflow-hidden">

      {/* Hero Section - Tourist Theme */}
      <motion.section
        ref={heroRef}
        className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/tour-guide.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-amber-900/70 to-yellow-900/80" />
        </div>

        {/* Static Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-400/30 to-amber-400/30 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl opacity-30" />

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
              className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-3"
            >
              Your Journey, Guided by Licensed Local Experts
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
              onClick={() => trackWhatsAppClick('tour_guide_hero')}
              href={`https://wa.me/${phoneNumber}?text=Hello!%20I%27m%20interested%20in%20booking%20a%20tour%20guide.`}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-[#FACF2D] to-orange-500 text-black px-8 py-4 rounded-full font-bold text-base md:text-lg overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(250,207,45,0.5)] transition-shadow"
            >
              <span className="relative z-10 flex items-center">
                <BsWhatsapp className="w-5 h-5 mr-2" />
                Book Your Guide
              </span>
            </motion.a>

            <motion.a
              onClick={() => trackPhoneCall('tour_guide_hero')}
              href={`tel:+91${phoneNumber}`}
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
                
                className="group bg-gradient-to-br from-white to-orange-50/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-amber-500/0 group-hover:from-orange-500/10 group-hover:to-amber-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform hover:scale-110`}
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

      {/* ===== DIRECT-ANSWER LEAD (AEO/Voice) ===== */}
      <section className="py-16 bg-gradient-to-b from-white to-orange-50/40">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative overflow-hidden bg-white rounded-3xl shadow-xl border-2 border-orange-100 p-8 md:p-10 pl-9 md:pl-12">
            <span aria-hidden className="absolute inset-y-6 left-0 w-1.5 rounded-full bg-gradient-to-b from-[#FACF2D] via-orange-500 to-[#FACF2D]" />
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-4 py-2 rounded-full mb-5 border border-orange-200">
              <BadgeCheck className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 font-bold text-xs tracking-wider">QUICK ANSWER</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
              How do I hire a licensed tour guide in India?
            </h2>
            <p className="speakable-lead text-lg text-gray-700 leading-relaxed">
              To hire a licensed tour guide in India, choose your city and preferred language, then book a
              Ministry-of-Tourism certified guide through Triveni Cabs. Day rates start at
              <strong> ₹1,200/day for Hindi and ₹1,500/day for English</strong> guides, with French, Spanish,
              German and Chinese guides from ₹2,000–₹2,500/day. Every guide holds a valid government licence and
              photo-ID — shared on WhatsApp before your tour begins — and can be booked on its own or
              <strong> bundled with an AC vehicle</strong>. Call +91 7668570551 or message on WhatsApp to confirm
              an available guide within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* ===== GUIDE LANGUAGES & FEES TABLE ===== */}
      {languageRows.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                What does a tour guide cost per day?
              </h2>
              <p className="text-gray-600">Fixed day rates by language — confirmed at booking, no hidden charges.</p>
            </div>
            {/* Desktop / tablet — polished table */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border-2 border-orange-100 shadow-lg">
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">Tour guide day rates by language with best traveller use case</caption>
                <thead className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <tr>
                    <th scope="col" className="p-4 font-black text-sm md:text-base"><span className="inline-flex items-center gap-1.5"><Languages className="w-4 h-4" /> Guide Language</span></th>
                    <th scope="col" className="p-4 font-black text-sm md:text-base">Day Rate</th>
                    <th scope="col" className="p-4 font-black text-sm md:text-base">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {languageRows.map((r, i) => {
                    const popular = r.feature === 'English';
                    return (
                      <tr key={r.feature} className={`border-b border-orange-100 last:border-0 ${popular ? 'bg-amber-50' : i % 2 === 0 ? 'bg-white' : 'bg-orange-50/40'} hover:bg-amber-50/70 transition-colors`}>
                        <th scope="row" className="p-4 font-bold text-gray-900">
                          <span className="flex items-center gap-2">
                            <Languages className="w-4 h-4 text-orange-500" /> {r.feature}
                            {popular && <span className="inline-flex items-center rounded-full bg-green-100 border border-green-300 text-green-700 text-[10px] uppercase tracking-wide font-black px-2 py-0.5">Most asked</span>}
                          </span>
                        </th>
                        <td className="p-4 font-black text-orange-600">{r.day}</td>
                        <td className="p-4 text-gray-600 text-sm">{r.bestFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
            </div>
            {/* Mobile — stacked cards */}
            <div className="sm:hidden space-y-3">
              {languageRows.map((r) => {
                const popular = r.feature === 'English';
                return (
                  <div key={r.feature} className={`rounded-2xl border-2 p-5 shadow-sm ${popular ? 'border-green-300 bg-amber-50' : 'border-orange-100 bg-white'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-bold text-gray-900 flex items-center gap-2 flex-wrap">
                        <Languages className="w-4 h-4 text-orange-500 shrink-0" /> {r.feature}
                        {popular && <span className="inline-flex items-center rounded-full bg-green-100 border border-green-300 text-green-700 text-[9px] uppercase tracking-wide font-black px-1.5 py-0.5">Popular</span>}
                      </p>
                      <p className="font-black text-orange-600 shrink-0">{r.day}</p>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">{r.bestFor}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              Day rate covers a full 8–10 hour touring day. Monument entry tickets are paid separately. Less-common
              languages (Italian, Japanese, Russian, Portuguese, Korean, Arabic) available on request.
            </p>
          </div>
        </section>
      )}

      {/* ===== HOW TO BOOK STEPS ===== */}
      <section className="py-16 bg-gradient-to-b from-orange-50/40 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              How to book a licensed tour guide in 5 steps
            </h2>
            <p className="text-gray-600">Verify the government licence before your tour begins.</p>
          </div>
          <ol className="grid md:grid-cols-5 gap-4">
            {[
              { n: '1', icon: MapPin, t: 'Choose your city', d: 'Delhi, Agra, Jaipur or any of 14+ cities — each has region-licensed guides.' },
              { n: '2', icon: Languages, t: 'Pick a language', d: 'English, Hindi, French, Spanish, German or Chinese — rates from ₹1,200/day.' },
              { n: '3', icon: BsWhatsapp, t: 'Send request', d: 'WhatsApp or call +91 7668570551 with dates, group size and interests.' },
              { n: '4', icon: BadgeCheck, t: 'Verify licence', d: 'We share the guide’s Ministry of Tourism licence and photo-ID upfront.' },
              { n: '5', icon: CheckCircle, t: 'Confirm & tour', d: 'Lock the fixed rate, optionally add a vehicle, meet your guide.' },
            ].map((s) => (
              <li key={s.n} className="relative bg-white rounded-2xl p-6 pt-7 shadow-md border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all text-center">
                {/* Gold numbered step badge */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-[#FACF2D] to-orange-500 text-black text-sm font-black flex items-center justify-center shadow-lg ring-4 ring-white">
                  {s.n}
                </span>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-3 shadow">
                  <s.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-[10px] font-black text-orange-500 tracking-widest mb-1">STEP {s.n}</p>
                <h3 className="font-black text-gray-900 mb-2 text-sm">{s.t}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== LICENSED vs UNLICENSED COMPARISON ===== */}
      {compareRows.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Why choose a licensed guide over a freelance one?
              </h2>
              <p className="text-gray-600">A Ministry-certified guide protects your money, your time and your access.</p>
            </div>
            {/* Desktop / tablet — polished table, licensed column highlighted */}
            <div className="hidden sm:block overflow-hidden rounded-2xl border-2 border-orange-100 shadow-lg">
              <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
              <table className="w-full text-left border-collapse">
                <caption className="sr-only">Licensed Triveni guide compared against an unlicensed or freelance guide across key factors</caption>
                <thead className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                  <tr>
                    <th scope="col" className="p-4 font-black text-sm">Factor</th>
                    <th scope="col" className="p-4 font-black text-sm"><span className="inline-flex items-center gap-1.5"><BadgeCheck className="w-4 h-4" /> Licensed Guide (Triveni)</span></th>
                    <th scope="col" className="p-4 font-black text-sm">Unlicensed / Freelance</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r, i) => (
                    <tr key={r.feature} className={`border-b border-orange-100 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-orange-50/40'} hover:bg-amber-50/60 transition-colors`}>
                      <th scope="row" className="p-4 font-bold text-gray-900 text-sm">{r.feature}</th>
                      <td className="p-4 text-green-700 text-sm font-medium bg-green-50/40">
                        <span className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />{r.licensed}</span>
                      </td>
                      <td className="p-4 text-gray-500 text-sm">{r.unlicensed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
            {/* Mobile — stacked cards */}
            <div className="sm:hidden space-y-3">
              {compareRows.map((r) => (
                <div key={r.feature} className="rounded-2xl border-2 border-orange-100 bg-white p-5 shadow-sm">
                  <p className="font-black text-gray-900 text-sm mb-3">{r.feature}</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2 rounded-xl bg-green-50 border border-green-200 p-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wide text-green-700">Licensed (Triveni)</p>
                        <p className="text-sm text-green-800 font-medium">{r.licensed}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 rounded-xl bg-gray-50 border border-gray-200 p-3">
                      <span className="w-4 h-4 mt-0.5 shrink-0 text-gray-400 font-black leading-none">—</span>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-wide text-gray-500">Unlicensed / Freelance</p>
                        <p className="text-sm text-gray-500">{r.unlicensed}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
            <p className="text-xl text-gray-600">{`Fill the form below and we'll connect you with the perfect guide`}</p>
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
                  
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white py-5 px-8 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all font-bold text-lg flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
                >
                  <BsWhatsapp className="w-6 h-6" />
                  Book via WhatsApp
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center justify-center gap-4 pt-4">
                  <motion.a
                    onClick={() => trackPhoneCall('tour_guide_form')}
                    href={`tel:+91${phoneNumber}`}
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

        {/* Background Pattern */}
        <div
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
              
              className="bg-white/5 backdrop-blur-md border-2 border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#FACF2D]/50 transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#FACF2D] mb-3">24/7 Support</h3>
                  <p className="text-gray-300 text-lg mb-2">
                    <a onClick={() => trackPhoneCall('tour_guide_contact')} href={`tel:+91${phoneNumber}`} className="hover:text-[#FACF2D] transition-colors">
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
      <section className="faq-section py-20 bg-white">
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

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06 }}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-lg open:shadow-2xl border-2 border-gray-100 open:border-orange-300 hover:border-orange-200 transition-all"
              >
                <summary className="flex items-center gap-4 cursor-pointer list-none p-6 md:p-7 min-h-[44px] rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400">
                  <span className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </span>
                  <h3 className="flex-1 text-lg md:text-xl font-black text-gray-900 leading-tight">{faq.question}</h3>
                  <span aria-hidden className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-orange-200 bg-orange-50 text-orange-500 flex items-center justify-center group-open:rotate-180 group-open:bg-orange-100 transition-transform duration-300">
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </span>
                </summary>
                <p className={`text-gray-600 leading-relaxed px-6 md:px-7 pb-6 md:pb-7 pl-[4.75rem] md:pl-[5.25rem] text-sm md:text-base ${index === 0 ? 'speakable-faq-first' : ''}`}>{faq.answer}</p>
              </motion.details>
            ))}
          </div>

          {/* ===== INTERNAL LINKS ===== */}
          <div className="mt-16 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border-2 border-orange-100">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
              Explore guided tours &amp; city guides
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: '/tours-with-guide', label: 'Tours With Guide (Vehicle + Guide bundles)' },
                { href: '/tours-with-guide/by-guide-language', label: 'Hire a Guide by Language' },
                { href: '/tours-with-guide/by-vehicle', label: 'Tours With Guide by Vehicle' },
                { href: '/agra-travel-guide', label: 'Agra Travel Guide' },
                { href: '/amritsar-travel-guide', label: 'Amritsar Travel Guide' },
                { href: '/sightseeing', label: 'Sightseeing Tours' },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-between gap-2 bg-white rounded-xl p-4 shadow-sm border border-orange-200 hover:border-orange-400 hover:shadow-md transition-all"
                >
                  <span className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{l.label}</span>
                  <ArrowRight className="w-4 h-4 text-orange-500 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20px 20px, black 2px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

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
              onClick={() => trackWhatsAppClick('tour_guide_final_cta')}
              href={`https://wa.me/${phoneNumber}?text=Hello!%20I%27m%20ready%20to%20book%20a%20tour%20guide.`}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="bg-black text-[#FACF2D] px-12 py-6 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-shadow"
            >
              <BsWhatsapp className="w-6 h-6" />
              BOOK YOUR GUIDE NOW
            </motion.a>

            <motion.a
              onClick={() => trackPhoneCall('tour_guide_final_cta')}
              href={`tel:+91${phoneNumber}`}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-12 py-6 rounded-full font-black text-lg inline-flex items-center gap-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-shadow"
            >
              <Phone className="w-6 h-6" />
              CALL: {phoneNumber}
            </motion.a>
          </div>
        </div>
      </section>

      <SetStickyCta
        label="Book Tour Guide"
        whatsappText="Hello! I'm interested in booking a certified tour guide. Please share details."
      />
    </div>
  );
}
