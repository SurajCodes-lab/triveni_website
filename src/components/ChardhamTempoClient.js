'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    MapPin, Calendar, Users, Star, Shield, Phone, MessageCircle,
    ChevronDown, CheckCircle, Navigation, Clock, Sun, Mountain, Sparkles, Plane, User
} from '@/components/ui/icons';
import { motion, MotionConfig } from 'framer-motion';
import { useShouldReduceMotion } from '@/hooks/useIsMobile';
import dynamic from 'next/dynamic';
// Rich UI + ranking-lift components — wired May 23 2026
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';
import {
    DHAM_FACTS, OPENING_DATES_2026, SEATER_COMPARISON, CHARTER_INCLUSIONS,
    CHARTER_EXCLUSIONS, ROAD_ALTITUDE_TIPS, GROUP_SEATING_GUIDANCE, WHY_TEMPO_ROWS,
    ORIGIN_DISTANCES, getChardhamFareBreakdown, getChardhamExtendedFaqs,
    getSiblingChardhamLinks,
} from '@/utilis/chardhamData';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false, loading: () => <span>Journey to Moksha</span> }
);

export default function ChardhamTempoClient({ data, reviews = [], reviewCount = 0 }) {
    const [activeDay, setActiveDay] = useState(0);
    const [mounted, setMounted] = useState(false);
    const shouldReduceMotion = useShouldReduceMotion();
    const { title, origin, destination, duration, intro, whyChoose, packages, itinerary, features, faqs, images, slug } = data;

    useEffect(() => {
        setMounted(true);
    }, []);

    // ---- Derived AEO/GEO content (computed once per render, no extra fetch) ----
    const startPrice = packages?.[0]?.price || '₹70,000';
    const seventeenPrice = packages?.find(p => /17/.test(p.vehicle))?.price || '₹85,000';
    const allFaqs = getChardhamExtendedFaqs(data);
    const fareRows = getChardhamFareBreakdown(data);
    const siblings = getSiblingChardhamLinks(slug || data.slug);
    const dist = ORIGIN_DISTANCES[origin] || null;
    const isFullCircuit = destination === 'Chardham Yatra';
    // Direct-answer lead — 40-55 words, fact-dense, for featured snippet + voice.
    const leadAnswer = `The ${title} by tempo traveller is a ${duration} ${isFullCircuit ? 'four-dham' : ''} pilgrimage covering ${isFullCircuit ? 'Yamunotri, Gangotri, Kedarnath and Badrinath' : destination}. Charters start from ${startPrice} (12-seater) to the 26-seater Maharaja, with the popular 17-seater around ${seventeenPrice} — all-inclusive of an AC tempo, hill driver, fuel, tolls and parking.`;

    return (
        <MotionConfig reducedMotion={shouldReduceMotion ? "always" : "never"}>
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
                    {mounted && !shouldReduceMotion && [...Array(15)].map((_, i) => (
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
                        <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl leading-tight font-serif">
                            {title} by Tempo Traveller
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
                            <motion.div  whileTap={{ scale: 0.95 }}>
                                <a
                                    href="tel:+917668570551"
                                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_50px_rgba(249,115,22,0.8)] transition-all flex items-center gap-2 border border-orange-400/50"
                                >
                                    <Phone className="w-5 h-5" /> Book Your Yatra
                                </a>
                            </motion.div>

                            <motion.div  whileTap={{ scale: 0.95 }}>
                                <a
                                    href="https://wa.me/917668570551?text=Jai%20Bhole!%20I%20am%20interested%20in%20Chardham%20Yatra%20package."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 border border-white/30"
                                >
                                    <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp Inquiry
                                </a>
                            </motion.div>
                        </div>

                        {/* Mobile compact trust strip (desktop uses the floating stats strip below) */}
                        <div className="md:hidden mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/85 text-sm">
                            <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-amber-400" /> 4.9&#9733;</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-orange-400" /> {duration}</span>
                            <span className="w-1 h-1 rounded-full bg-white/30" />
                            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-orange-400" /> Verified hill drivers</span>
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
            {/* DIRECT-ANSWER LEAD (AEO / voice / snippet) */}
            {/* ============================================ */}
            <section className="py-12 md:py-16 bg-white border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-6 md:p-10 border border-orange-100 shadow-sm">
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-orange-100 border border-orange-200">
                            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
                            <span className="text-orange-700 font-bold uppercase tracking-wider text-xs">Quick Answer</span>
                        </div>
                        <p className="speakable-lead text-lg md:text-xl text-stone-800 leading-relaxed font-medium">
                            {leadAnswer}
                        </p>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="bg-white rounded-xl p-3 border border-orange-100 text-center">
                                <Clock className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                                <div className="text-xs text-stone-400 uppercase tracking-wide">Duration</div>
                                <div className="font-bold text-stone-900 text-sm">{duration}</div>
                            </div>
                            <div className="bg-white rounded-xl p-3 border border-orange-100 text-center">
                                <Users className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                                <div className="text-xs text-stone-400 uppercase tracking-wide">Seating</div>
                                <div className="font-bold text-stone-900 text-sm">12-26 Seater</div>
                            </div>
                            <div className="bg-white rounded-xl p-3 border border-orange-100 text-center">
                                <Star className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                                <div className="text-xs text-stone-400 uppercase tracking-wide">Starts At</div>
                                <div className="font-bold text-stone-900 text-sm">{startPrice}</div>
                            </div>
                            <div className="bg-white rounded-xl p-3 border border-orange-100 text-center">
                                <Mountain className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                                <div className="text-xs text-stone-400 uppercase tracking-wide">Dhams</div>
                                <div className="font-bold text-stone-900 text-sm">{isFullCircuit ? 'All 4' : destination}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
            {/* SEATER COMPARISON (12 / 16 / 17 / 20 / 26) */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-orange-50 border border-orange-100">
                            <Users className="w-3.5 h-3.5 text-orange-600" />
                            <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">Choose Your Vehicle</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">12 vs 17 vs 26 Seater Tempo</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">Compare seating capacity, luggage space and per-km rates to pick the right tempo traveller for your {origin} Char Dham group.</p>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-stone-900 text-white">
                                    <th className="p-4 font-bold">Seater</th>
                                    <th className="p-4 font-bold">Ideal Group</th>
                                    <th className="p-4 font-bold hidden md:table-cell">Luggage</th>
                                    <th className="p-4 font-bold hidden lg:table-cell">Best For</th>
                                    <th className="p-4 font-bold">Approx Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SEATER_COMPARISON.map((row, i) => (
                                    <tr key={i} className={`border-t border-stone-100 ${i === 2 ? 'bg-orange-50' : 'bg-white'}`}>
                                        <td className="p-4 font-bold text-stone-900">
                                            {row.seater}
                                            {i === 2 && <span className="ml-2 text-[10px] bg-orange-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">Popular</span>}
                                        </td>
                                        <td className="p-4 text-stone-700">{row.ideal}</td>
                                        <td className="p-4 text-stone-600 hidden md:table-cell">{row.luggage}</td>
                                        <td className="p-4 text-stone-600 hidden lg:table-cell">{row.bestFor}</td>
                                        <td className="p-4 font-semibold text-orange-600">{row.perKm}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Seating & luggage guidance for group profiles */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {GROUP_SEATING_GUIDANCE.map((g, i) => (
                            <div key={i} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                        <Users className="w-4 h-4 text-orange-600" />
                                    </div>
                                    <h3 className="font-bold text-stone-900">{g.profile}</h3>
                                </div>
                                <p className="text-sm text-stone-600 leading-relaxed">{g.advice}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* THE FOUR DHAMS — FACTS + 2026 OPENING DATES */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-stone-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-orange-50 border border-orange-100">
                            <Mountain className="w-3.5 h-3.5 text-orange-600" />
                            <span className="text-orange-600 font-bold uppercase tracking-wider text-xs">The Four Dhams</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Altitudes &amp; 2026 Opening Dates</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">Each dham, its presiding deity, river and altitude — plus the 2026 kapat (gate-opening) dates for planning your Yatra.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {DHAM_FACTS.map((d, i) => {
                            const opening = OPENING_DATES_2026.find(o => o.dham === d.name);
                            return (
                                <div key={i} className="bg-white rounded-2xl p-6 border-t-4 border-orange-500 shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-xl font-bold text-stone-900 font-serif">{d.name}</h3>
                                        <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-full">{d.altitude}</span>
                                    </div>
                                    <dl className="space-y-1.5 text-sm">
                                        <div className="flex justify-between gap-2"><dt className="text-stone-400">Deity</dt><dd className="text-stone-700 font-medium text-right">{d.deity}</dd></div>
                                        <div className="flex justify-between gap-2"><dt className="text-stone-400">River</dt><dd className="text-stone-700 font-medium text-right">{d.river}</dd></div>
                                        <div className="flex justify-between gap-2"><dt className="text-stone-400">District</dt><dd className="text-stone-700 font-medium text-right">{d.district}</dd></div>
                                        <div className="flex justify-between gap-2"><dt className="text-stone-400">Access</dt><dd className="text-stone-700 font-medium text-right">{d.trek}</dd></div>
                                        {opening && <div className="flex justify-between gap-2 pt-1.5 border-t border-stone-100"><dt className="text-stone-400">2026 Opens</dt><dd className="text-orange-600 font-semibold text-right">{opening.opens}</dd></div>}
                                    </dl>
                                    <p className="text-xs text-stone-500 leading-relaxed mt-3 pt-3 border-t border-stone-100">{d.note}</p>
                                </div>
                            );
                        })}
                    </div>
                    {dist && (
                        <div className="mt-10 bg-white rounded-2xl p-6 border border-stone-200 flex flex-col md:flex-row items-center justify-around gap-4 text-center">
                            <div><div className="text-xs text-stone-400 uppercase tracking-wide">{origin} → Haridwar</div><div className="font-bold text-stone-900 text-lg">{dist.toHaridwar}</div></div>
                            <div className="hidden md:block w-px h-10 bg-stone-200"></div>
                            <div><div className="text-xs text-stone-400 uppercase tracking-wide">{origin} → Kedarnath base</div><div className="font-bold text-stone-900 text-lg">{dist.toKedarnath}</div></div>
                            <div className="hidden md:block w-px h-10 bg-stone-200"></div>
                            <div><div className="text-xs text-stone-400 uppercase tracking-wide">Full circuit</div><div className="font-bold text-stone-900 text-lg">{dist.circuit}</div></div>
                        </div>
                    )}
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

            {/* ============================================ */}
            {/* WHAT'S INCLUDED / EXCLUDED */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">What&apos;s Included &amp; Excluded</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">Our tempo traveller charter is a transparent vehicle-only package. Here is exactly what your fare covers.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl p-6 md:p-8 border border-green-100 shadow-sm">
                            <h3 className="font-bold text-lg text-stone-900 mb-4 flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500" /> Included in the Charter</h3>
                            <ul className="space-y-3">
                                {CHARTER_INCLUSIONS.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stone-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 md:p-8 border border-orange-100 shadow-sm">
                            <h3 className="font-bold text-lg text-stone-900 mb-4 flex items-center gap-2"><Navigation className="w-5 h-5 text-orange-500" /> Not Included (Pay Direct)</h3>
                            <ul className="space-y-3">
                                {CHARTER_EXCLUSIONS.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-stone-600">
                                        <span className="text-orange-400 mt-0.5 flex-shrink-0 font-bold">×</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FARE BREAKDOWN TABLE (AEO) */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">{title} Fare Breakdown</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">Estimated 2026 cost components so you can budget the full {duration} Yatra for your group.</p>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-orange-600 text-white">
                                    <th className="p-4 font-bold">Cost Component</th>
                                    <th className="p-4 font-bold hidden md:table-cell">Details</th>
                                    <th className="p-4 font-bold text-right">Estimate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fareRows.map((row, i) => (
                                    <tr key={i} className={`border-t border-stone-100 ${i % 2 ? 'bg-stone-50' : 'bg-white'}`}>
                                        <td className="p-4 font-semibold text-stone-900">{row.component}</td>
                                        <td className="p-4 text-stone-600 hidden md:table-cell">{row.detail}</td>
                                        <td className="p-4 text-right font-semibold text-orange-600 whitespace-nowrap">{row.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-stone-400 mt-4 text-center">Estimates for 2026. The tempo charter is fixed per package; accommodation, meals and optional trek transport vary by choice. Call 7668570551 for a firm quote.</p>
                </div>
            </section>

            {/* ============================================ */}
            {/* WHY TEMPO TRAVELLER FOR GROUPS */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-stone-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Why a Tempo Traveller for Char Dham Groups?</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">A tempo traveller beats both a car and a full-size bus for a 12-24 pilgrim group on Uttarakhand hill roads.</p>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
                        <table className="w-full text-left text-sm md:text-base">
                            <thead>
                                <tr className="bg-stone-900 text-white">
                                    <th className="p-4 font-bold">Factor</th>
                                    <th className="p-4 font-bold text-orange-300">Tempo Traveller</th>
                                    <th className="p-4 font-bold hidden md:table-cell">Car / SUV</th>
                                    <th className="p-4 font-bold hidden md:table-cell">Full Bus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {WHY_TEMPO_ROWS.map((row, i) => (
                                    <tr key={i} className={`border-t border-stone-100 ${i % 2 ? 'bg-stone-50' : 'bg-white'}`}>
                                        <td className="p-4 font-semibold text-stone-900">{row.factor}</td>
                                        <td className="p-4 text-stone-800 font-medium bg-orange-50/50">{row.tempo}</td>
                                        <td className="p-4 text-stone-500 hidden md:table-cell">{row.car}</td>
                                        <td className="p-4 text-stone-500 hidden md:table-cell">{row.bus}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* ROAD & ALTITUDE TIPS */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 font-serif">Road &amp; Altitude Tips for Pilgrims</h2>
                        <p className="text-stone-600 max-w-2xl mx-auto">High-altitude darshan at 3,000 m+ needs preparation. Follow these tips for a safe, comfortable Char Dham Yatra.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {ROAD_ALTITUDE_TIPS.map((tip, i) => (
                            <div key={i} className="flex items-start gap-4 bg-stone-50 rounded-2xl p-5 border border-stone-100">
                                <div className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                                <p className="text-sm text-stone-700 leading-relaxed">{tip}</p>
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
            {/* FAQ (10-12 Q — rich, speakable) */}
            {/* ============================================ */}
            {allFaqs && allFaqs.length > 0 && (
                <section className="faq-section py-16 md:py-24 bg-stone-50">
                    <div className="max-w-3xl mx-auto px-4">
                        <div className="text-center mb-10">
                            <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Pilgrim Queries</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-serif text-stone-900">{title} — FAQs</h2>
                        </div>
                        <div className="space-y-4">
                            {allFaqs.map((faq, idx) => (
                                <details key={idx} className="group border border-stone-200 rounded-xl bg-white p-6 hover:shadow-md transition-shadow" {...(idx === 0 ? { open: true } : {})}>
                                    <summary className="font-bold text-lg text-stone-900 cursor-pointer list-none flex items-start justify-between gap-3">
                                        <span>Q. {faq.question}</span>
                                        <ChevronDown className="w-5 h-5 text-orange-500 flex-shrink-0 transition-transform group-open:rotate-180" />
                                    </summary>
                                    <p className={`text-stone-600 mt-3 leading-relaxed ${idx === 0 ? 'speakable-faq-first' : ''} faq-answer-${idx + 1}`}>{faq.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================ */}
            {/* PILGRIM TESTIMONIALS (E-E-A-T — matches Review schema) */}
            {/* ============================================ */}
            {reviews && reviews.length > 0 && (
                <section className="py-16 md:py-24 bg-stone-900 text-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full bg-orange-500/20 border border-orange-400/30">
                                <Star className="w-3.5 h-3.5 text-orange-400" />
                                <span className="text-orange-300 font-bold uppercase tracking-wider text-xs">Verified Pilgrim Reviews</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4 font-serif">What Yatris Say About Their Tempo Yatra</h2>
                            <div className="flex items-center justify-center gap-2 text-orange-200">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                                <span className="font-bold text-white">4.9</span>
                                <span className="text-stone-400">/ 5 from {reviewCount > 0 ? reviewCount : '100+'} pilgrim reviews</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {reviews.map((r, i) => (
                                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-orange-500/30 transition-colors">
                                    <div className="flex mb-3">
                                        {[...Array(5)].map((_, s) => (
                                            <Star key={s} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-stone-200 text-sm leading-relaxed mb-4">&ldquo;{r.body}&rdquo;</p>
                                    <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                                            <User className="w-4 h-4 text-orange-400" />
                                        </div>
                                        <span className="font-semibold text-white text-sm">{r.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ============================================ */}
            {/* RELATED LINKS (internal linking / silo) */}
            {/* ============================================ */}
            <section className="py-16 md:py-24 bg-white border-t border-stone-100">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-3 font-serif">Plan Your Char Dham Yatra</h2>
                        <p className="text-stone-600">Explore other origins, the Char Dham hub and tempo traveller options.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        <Link href="/chardham-yatra" className="group bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all">
                            <Mountain className="w-7 h-7 text-orange-600 mb-3" />
                            <h3 className="font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">Char Dham Yatra Hub</h3>
                            <p className="text-sm text-stone-500">All packages, vehicles and dham guides in one place.</p>
                        </Link>
                        <Link href="/chardham-yatra-cost-by-car" className="group bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all">
                            <Star className="w-7 h-7 text-orange-600 mb-3" />
                            <h3 className="font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">Char Dham Cost by Car</h3>
                            <p className="text-sm text-stone-500">Compare car/SUV fares for smaller pilgrim groups.</p>
                        </Link>
                        <Link href="/tempo-traveller" className="group bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all">
                            <Users className="w-7 h-7 text-orange-600 mb-3" />
                            <h3 className="font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">Tempo Traveller Fleet</h3>
                            <p className="text-sm text-stone-500">12-26 seater AC tempo travellers for any route.</p>
                        </Link>
                    </div>
                    {siblings && siblings.length > 0 && (
                        <div>
                            <h3 className="text-sm font-bold text-stone-400 uppercase tracking-wider mb-4 text-center">Char Dham Tempo from Other Origins</h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {siblings.map((s, i) => (
                                    <Link key={i} href={s.href} className="inline-flex items-center gap-2 bg-stone-100 hover:bg-orange-100 text-stone-700 hover:text-orange-700 px-4 py-2 rounded-full text-sm font-medium transition-colors border border-stone-200">
                                        <MapPin className="w-3.5 h-3.5" /> {s.anchor}{s.price ? ` — ${s.price}` : ''}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* ============================================ */}
            {/* FINAL CTA */}
            {/* ============================================ */}
            <section className="py-20 bg-orange-600 text-white text-center px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">Start Your Sacred Journey Today</h2>
                <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Book early to ensure availability during peak Yatra season 2026.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="tel:+917668570551" className="bg-white text-orange-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition-colors shadow-xl">
                        Call +91-7668570551
                    </a>
                    <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-xl">
                        WhatsApp Booking
                    </a>
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

            {/* RICH-UI + RANKING BLOCK — May 23 sprint (Chardham variant) */}
            <ChardhamRichBlock title={title} origin={origin} destination={destination} duration={duration} />
        </div>
        </MotionConfig>
    );
}

function ChardhamRichBlock({ title, origin, destination, duration }) {
  const durationDays = parseFloat((duration || '10').toString().replace(/[^0-9.]/g, '')) || 10;
  const stats = [
    { value: durationDays, suffix: ' days', label: 'Yatra duration', sublabel: 'incl. all dhams' },
    { value: 4, label: 'Dhams covered', sublabel: 'Yamunotri, Gangotri, Kedarnath, Badrinath' },
    { value: 28, prefix: '₹', suffix: '/km', label: '17-seater', sublabel: 'starting rate' },
    { value: 4.9, suffix: ' / 5', label: 'Pilgrim rating', sublabel: 'verified reviews', format: 'decimal' },
  ];

  const longTailFaqs = generateLongTailFaqs({
    mode: 'tempo',
    origin: origin || 'Haridwar',
    destination: destination || 'Char Dham',
    distanceKm: 1600,
    durationText: `${durationDays} days`,
  });

  const founderQuote = getFounderQuoteForContext('tempo');
  const citations = getCitationsForRoute({ from: origin || 'Haridwar', to: 'Kedarnath', context: 'outstation' });

  return (
    <div className="bg-slate-950 text-white">
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3">
            <InfographicPanel
              title={`${title} by the numbers`}
              subtitle="Duration, dham coverage, per-km rates by seater size, and verified pilgrim rating. All-inclusive tempo charter for the full circuit."
              stats={stats}
              tone="amber"
            />
          </div>
          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={1600}
              mode="round-trip"
              vehicles={[
                { key: 'tempo12', label: '12-Seater', ratePerKm: 20 },
                { key: 'tempo17', label: '17-Seater', ratePerKm: 24 },
                { key: 'tempo20', label: '20-Seater', ratePerKm: 26 },
                { key: 'tempo26', label: '26-Seater', ratePerKm: 28 },
              ]}
              tone="amber"
              originName={origin || 'Haridwar'}
              destinationName={destination || 'Char Dham'}
            />
          </div>
        </div>
      </section>

      {founderQuote && (
        <section className="py-10 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <ExpertQuote quote={founderQuote.quote} authorName={founderQuote.author} authorTitle={founderQuote.title} authorOrg={founderQuote.org} tone="dark" />
          </div>
        </section>
      )}

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase">Yatra Q&amp;A</span>
            <h2 className="text-2xl sm:text-4xl font-black mt-3 tracking-tight">More about the {title}</h2>
          </div>
          <LongTailFAQ faqs={longTailFaqs} tone="dark" />
        </div>
      </section>

      {citations.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <OutboundCitations sources={citations} tone="dark" heading="Verified against these sources" />
          </div>
        </section>
      )}
    </div>
  );
}
