'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Mountain, Waves, AlertTriangle,
  ChevronRight, Phone, Compass, Shield, Backpack
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function AdventureLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-orange-50 to-white">
      {/* Adventure Hero with Image */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-transparent to-transparent" />
        </div>

        {/* Animated elements */}
        <motion.div
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-24 right-24 hidden lg:block"
        >
          <Compass className="w-24 h-24 text-white/20" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-white/90 mb-6 backdrop-blur-sm bg-white/10 w-fit px-4 py-2 rounded-full"
          >
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D] font-semibold">{post.category || 'Adventure'}</span>
          </motion.nav>

          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-yellow-400 text-red-900 px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl"
          >
            <Mountain className="w-4 h-4" />
            Adventure & Thrill
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl"
          >
            {post.title}
          </motion.h1>

          {/* Meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-red-100"
          >
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              {post.attractionData?.location || post.city}
            </span>
          </motion.div>
        </div>

        {/* Wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-red-50" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,50 C200,90 400,10 600,50 C800,90 1000,10 1200,50 C1400,90 1440,50 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Adventure Info Bar */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <AlertTriangle className="w-6 h-6 mx-auto mb-2 text-red-500" />
              <p className="text-xs text-gray-500">Difficulty</p>
              <p className="font-bold text-red-900">Moderate</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Clock className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-bold text-red-900">{post.attractionData?.timeNeeded || '4-6 hours'}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-orange-500" />
              <p className="text-xs text-gray-500">Best Season</p>
              <p className="font-bold text-red-900">{post.attractionData?.bestTimeToVisit?.season || 'Mar-Jun, Sep-Nov'}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-xl shadow-sm">
              <Shield className="w-6 h-6 mx-auto mb-2 text-green-500" />
              <p className="text-xs text-gray-500">Safety</p>
              <p className="font-bold text-green-700">Guide Recommended</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            {/* Gear Checklist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-8 border border-red-200"
            >
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <Backpack className="w-5 h-5" />
                Essential Gear Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-2 text-red-700 text-sm">
                <div className="flex items-center gap-2">☑️ Comfortable trekking shoes</div>
                <div className="flex items-center gap-2">☑️ Water bottle (2L minimum)</div>
                <div className="flex items-center gap-2">☑️ First aid kit</div>
                <div className="flex items-center gap-2">☑️ Sun protection</div>
                <div className="flex items-center gap-2">☑️ Energy snacks</div>
                <div className="flex items-center gap-2">☑️ Rain jacket</div>
              </div>
            </motion.div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-red-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-red-200 prose-h2:pb-3
                  prose-h3:text-2xl prose-h3:text-red-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-red-600 prose-a:font-semibold
                  prose-strong:text-red-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Adventure Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mountain className="w-6 h-6" />
                  Ready for Adventure?
                </h3>
                <p className="mb-6 text-red-100">
                  Our experienced drivers know every road and trail. Safe, comfortable transport to adventure destinations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all"
                    >
                      <h4 className="font-bold">{tour.name}</h4>
                      <p className="text-red-200 text-sm">{tour.price}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="bg-yellow-400 text-red-900 px-6 py-3 rounded-xl font-bold hover:bg-yellow-300"
                  >
                    View All Tours →
                  </Link>
                  <a href="tel:+917668570551" className="bg-white/20 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </motion.div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span key={index} className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="red" />
          </aside>
        </div>
      </div>
    </div>
  );
}
