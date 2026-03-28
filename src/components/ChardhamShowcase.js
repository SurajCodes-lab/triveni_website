'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
// Centralized icon imports for better bundle optimization
import { Mountain, Flame, MapPin, ArrowRight, Star } from '@/components/ui/icons';
import Image from 'next/image';
import { chardhamRoutes } from '@/utilis/chardhamData';

export default function ChardhamShowcase() {
    return (
        <section className="py-16 md:py-24 bg-orange-50 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-orange-400 rounded-full blur-[100px]"></div>
                <div className="absolute left-0 bottom-0 w-96 h-96 bg-amber-400 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4 border border-orange-200">
                        <Flame className="w-4 h-4 text-orange-600 animate-pulse" />
                        <span className="text-orange-700 font-bold text-xs uppercase tracking-widest">Spiritual Journeys 2026</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 font-serif">
                        Chardham <span className="text-orange-600">Yatra</span> Specials
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Book highly rated Tempo Traveller packages for Yamunotri, Gangotri, Kedarnath, and Badrinath.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {chardhamRoutes.map((route, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100 hover:shadow-orange-200/50 hover:border-orange-300 transition-all duration-300"
                        >
                            <Link href={`/tempo-traveller/${route.slug}`} className="block h-full flex flex-col">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={route.images.hero}
                                        alt={route.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        onError={(e) => {
                                            e.target.style.display = 'none'; // Fallback handled by parent bg
                                            e.target.parentElement.style.backgroundColor = '#fed7aa'; // Orange-200
                                        }}
                                    />
                                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                        <Star className="w-3 h-3 fill-orange-500 text-orange-500" /> {route.type} Dham
                                    </div>
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-serif group-hover:text-orange-600 transition-colors line-clamp-2">
                                        {route.title}
                                    </h3>

                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Mountain className="w-4 h-4 text-orange-400" />
                                            {route.duration}
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-4">
                                        <div>
                                            <span className="text-xs text-gray-400 block">Starting from</span>
                                            <span className="text-xl font-bold text-orange-600">{route.packages[0].price}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a href="tel:+917668570551" className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors border-b-2 border-orange-200 hover:border-orange-500">
                        Customize Your Yatra Package <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
