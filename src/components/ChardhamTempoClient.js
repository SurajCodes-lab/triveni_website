'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// Centralized icon imports for better bundle optimization
import {
    MapPin, Calendar, Users, Star, Shield, Phone, MessageCircle,
    ChevronDown, CheckCircle, Navigation, Clock, Sun, Mountain, Sparkles, Plane, User
} from '@/components/ui/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function ChardhamTempoClient({ data }) {
    const [activeDay, setActiveDay] = useState(0);
    const [mounted, setMounted] = useState(false);
    const { title, origin, destination, duration, intro, whyChoose, packages, itinerary, features, faqs, images } = data;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen bg-stone-50 font-sans selection:bg-orange-200">

            {/* ============================================ */}
            {/* HERO SECTION - Spiritual Premium */}
            {/* ============================================ */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-32">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={images?.hero || '/images/tempo_hero_section.jpg'}
                        alt={`${title} - Triveni Cabs`}
                        fill
                        className="object-cover"
                        priority
                        onError={(e) => {
                            e.target.src = '/images/tempo_hero_section.jpg';
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-stone-900/50 to-stone-900" />
                </div>

                {/* Animated Orbs (Spiritual version) */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-500/30 to-amber-500/30 rounded-full blur-3xl z-0"
                />
                <motion.div
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 80, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl z-0"
                />

                {/* Floating Particles (Sparks/Embers vibe) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                    {mounted && [...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: '100vh', x: Math.random() * 100 + '%', opacity: 0 }}
                            animate={{ y: '-10vh', opacity: [0, 1, 0] }}
                            transition={{
                                duration: Math.random() * 15 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                                ease: "linear"
                            }}
                            className="absolute w-1 h-1 bg-orange-200 rounded-full blur-[1px]"
                        />
                    ))}
                </div>

                {/* Spiritual Motifs/Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-mandala.png')] bg-repeat animate-pulse-slow z-0"></div>

                <div className="relative z-10 text-center max-w-5xl mx-auto px-4 pt-20">

                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-8 border border-orange-400/50"
                    >
                        <Sparkles className="w-5 h-5 text-orange-400" />
                        <span className="text-orange-200 font-bold text-sm tracking-wider uppercase">Chardham Yatra 2026</span>
                        <Sparkles className="w-5 h-5 text-orange-400" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight font-serif">
                            {title}
                        </h1>

                        <div className="text-xl md:text-3xl text-orange-100 mb-8 font-light max-w-3xl mx-auto flex flex-col gap-2">
                            <span>Journey to Moksha</span>
                            <span className="font-bold text-amber-400">
                                <TypeAnimation
                                    sequence={[
                                        'Yamunotri & Gangotri',
                                        2000,
                                        'Kedarnath & Badrinath',
                                        2000,
                                        'Complete Spiritual Peace',
                                        2000,
                                        'Luxury Tempo Traveller',
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="tel:+917668570551"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-all flex items-center gap-2 border border-orange-400/50"
                                >
                                    <Phone className="w-5 h-5" /> Book Your Yatra
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="https://wa.me/917668570551?text=Jai Bhole! I am interested in Chardham Yatra package."
                                    className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 border border-white/30"
                                >
                                    <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Inquiry
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Strip - Floating Glassmorphism */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-10 w-full hidden md:block"
                >
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex justify-around text-white/90 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/20 rounded-lg"><Clock className="w-6 h-6 text-orange-400" /></div>
                                <div className="text-left">
                                    <div className="text-xs uppercase tracking-wider opacity-70 text-orange-200">Duration</div>
                                    <div className="font-bold">{duration}</div>
                                </div>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/20 rounded-lg"><MapPin className="w-6 h-6 text-orange-400" /></div>
                                <div className="text-left">
                                    <div className="text-xs uppercase tracking-wider opacity-70 text-orange-200">Route</div>
                                    <div className="font-bold">{origin} → {destination}</div>
                                </div>
                            </div>
                            <div className="w-px bg-white/10"></div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-orange-500/20 rounded-lg"><Shield className="w-6 h-6 text-orange-400" /></div>
                                <div className="text-left">
                                    <div className="text-xs uppercase tracking-wider opacity-70 text-orange-200">Safety</div>
                                    <div className="font-bold">Verified Hill Drivers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* ============================================ */}
            {/* INTRO & WHY CHOOSE US */}
            {/* ============================================ */}
            {/* ============================================ */}
            {/* INTRO & WHY CHOOSE US */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-orange-50 border border-orange-100">
                            <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">Sacred Journey</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">
                            Why Choose Triveni for your <span className="text-orange-600">Pilgrimage?</span>
                        </h2>
                        <p className="text-lg text-stone-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                            {intro}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            {whyChoose?.map((item, idx) => {
                                // Dynamic Icon Logic
                                let Icon = CheckCircle;
                                const titleLower = item.title.toLowerCase();
                                if (titleLower.includes('airport')) Icon = Plane;
                                else if (titleLower.includes('safety') || titleLower.includes('verified')) Icon = Shield;
                                else if (titleLower.includes('time') || titleLower.includes('24/7')) Icon = Clock;
                                else if (titleLower.includes('comfort') || titleLower.includes('seats')) Icon = User;
                                else if (titleLower.includes('expert') || titleLower.includes('guide')) Icon = Star;

                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-r-xl border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-all border-y border-r border-stone-100 group"
                                    >
                                        <div className="flex gap-4 items-start">
                                            <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors">
                                                <Icon className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg text-stone-900 mb-1">{item.title}</h4>
                                                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ============================================ */}
            {/* PRICING & VEHICLES */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-stone-100 relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">2026 Yatra Packages</h2>
                        <p className="text-stone-600">Transparent pricing. No hidden costs. Pure devotion.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {packages?.map((pkg, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className={`relative bg-white rounded-3xl p-8 shadow-xl border-t-4 ${idx === 1 ? 'border-orange-500 ring-2 ring-orange-500/20' : 'border-stone-200'}`}
                            >
                                {idx === 1 && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-stone-900 mb-2">{pkg.type} Package</h3>
                                <div className="text-sm text-stone-500 mb-6">{pkg.vehicle} Tempo Traveller</div>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-4xl font-bold text-orange-600">{pkg.price}</span>
                                    <span className="text-stone-400">/ Total</span>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3 text-sm text-stone-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> {pkg.vehicle}
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-stone-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> Fuel, Driver, Tolls Included
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-stone-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> {duration}
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-stone-600">
                                        <CheckCircle className="w-4 h-4 text-green-500" /> Pickup from {origin}
                                    </li>
                                </ul>

                                <Link
                                    href={`https://wa.me/917668570551?text=I want to book ${pkg.type} Package for ${title} at ${pkg.price}`}
                                    className={`block w-full py-4 rounded-xl font-bold text-center transition-all ${idx === 1
                                        ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30'
                                        : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                                        }`}
                                >
                                    Select Package
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* ITINERARY */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Day-wise Itinerary</h2>
                        <p className="text-stone-600">A carefully planned schedule for your comfort and Darshan.</p>
                    </div>

                    <div className="relative border-l-2 border-orange-200 ml-4 md:ml-0 space-y-12">
                        {itinerary?.map((day, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-500 ring-4 ring-white"></div>
                                <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                                    <div className="flex-shrink-0 min-w-[100px]">
                                        <span className="text-sm font-bold text-orange-600 uppercase tracking-wider">Day {day.day}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-900 mb-2">{day.title}</h3>
                                        <p className="text-stone-600 leading-relaxed">{day.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {features && features.length > 0 && (
                <section className="py-16 bg-stone-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 text-center">
                        <h2 className="text-2xl font-bold mb-8 text-orange-400">Included Amenities</h2>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20">
                                    <Sun className="w-4 h-4 text-orange-400" /> {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================ */}
            {/* FAQ */}
            {/* ============================================ */}
            {faqs && faqs.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-10 font-serif">Pilgrim Queries</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border border-stone-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-lg text-stone-900 mb-2">Q. {faq.question}</h3>
                                    <p className="text-stone-600">A. {faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================ */}
            {/* FINAL CTA */}
            {/* ============================================ */}
            <section className="py-20 bg-orange-600 text-white text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Start Your Sacred Journey Today</h2>
                <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Book early to ensure availability during peak Yatra season 2026.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="tel:+917668570551" className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors shadow-xl">
                        Call +91-7668570551
                    </Link>
                    <Link href="https://wa.me/917668570551" className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-xl">
                        WhatsApp Booking
                    </Link>
                </div>
            </section>

            {/* SEO Content Section */}
            <section className="py-16 px-4 bg-white border-t border-stone-200">
                <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
                    <h2 className="text-2xl font-bold text-stone-900 mb-6">
                        {data.title} by Tempo Traveller — Complete Pilgrimage Package
                    </h2>
                    <p className="text-stone-700 leading-relaxed">
                        Embark on the sacred Chardham Yatra from {data.origin} with Triveni Cabs&apos; premium tempo traveller service.
                        Our {data.duration} package covers all four holy shrines — Kedarnath, Badrinath, Gangotri, and Yamunotri —
                        with AC tempo travellers, experienced mountain drivers, and a carefully planned day-wise itinerary for a
                        comfortable pilgrimage experience.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                        Our Chardham tempo traveller packages start from{' '}
                        <strong>{data.packages?.[0]?.price || '₹70,000'}</strong> and include vehicle charges, fuel, driver
                        allowance, toll, and parking. Choose from 12-seater to 26-seater Maharaja AC tempo travellers with
                        pushback recliner seats, music system, and GPS tracking — ideal for family groups, senior citizens, and
                        community pilgrimages.
                    </p>
                    <p className="text-stone-700 leading-relaxed">
                        With 2500+ completed pilgrimages, experienced Uttarakhand road drivers, and 24/7 roadside assistance,
                        Triveni Cabs ensures a safe and comfortable Chardham Yatra. View our full{' '}
                        <Link href="/tempo-traveller" className="text-blue-600 hover:underline">tempo traveller fleet</Link>,
                        explore <Link href="/religious-tours" className="text-blue-600 hover:underline">other pilgrimage tours</Link>,
                        or <a href="tel:+917668570551" className="text-blue-600 hover:underline">call 7668570551</a> to book
                        your Yatra today.
                    </p>
                </div>
            </section>
        </div>
    );
}
