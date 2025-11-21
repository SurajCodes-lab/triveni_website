'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, Landmark, Globe, BookOpen,
  ChevronRight, Award, Phone, Info
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function MonumentLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-white">
      {/* Monument Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-900">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-24 right-24 hidden lg:block"
        >
          <Globe className="w-24 h-24 text-blue-400/20" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-blue-200 mb-6"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            {post.city && relatedLinks?.cityTours && (
              <>
                <Link href={relatedLinks.cityTours} className="hover:text-white transition-colors">
                  {post.city.charAt(0).toUpperCase() + post.city.slice(1)}
                </Link>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
            <span className="text-white">Monument</span>
          </motion.nav>

          {/* UNESCO Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-xl"
          >
            <Globe className="w-4 h-4" />
            UNESCO World Heritage Site
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
            className="flex flex-wrap items-center gap-4 text-blue-100"
          >
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <MapPin className="w-4 h-4" />
              {post.attractionData?.location || post.city}
            </span>
          </motion.div>
        </div>

        {/* Wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-slate-50" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,50 L1440,50 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Quick Facts Bar */}
      {post.attractionData && (
        <section className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <Award className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <p className="text-xs text-gray-500">Entry Fee (Indian)</p>
                <p className="font-bold text-blue-900">{post.attractionData.entryFee?.indian || '₹50'}</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <Award className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <p className="text-xs text-gray-500">Entry Fee (Foreign)</p>
                <p className="font-bold text-blue-900">{post.attractionData.entryFee?.foreign || '₹550'}</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <Clock className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <p className="text-xs text-gray-500">Timings</p>
                <p className="font-bold text-blue-900">{post.attractionData.timings?.open} - {post.attractionData.timings?.close}</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-xl">
                <Info className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                <p className="text-xs text-gray-500">Closed On</p>
                <p className="font-bold text-blue-900">{post.attractionData.timings?.closedOn || 'Open Daily'}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl border-4 border-blue-100"
            >
              <Image
                src={post.image || '/images/placeholder-monument.jpg'}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Historical Timeline Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500"
            >
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Historical Significance</h3>
                  <p className="text-blue-700 text-sm">{post.excerpt}</p>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-blue-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-blue-200 prose-h2:pb-3
                  prose-h3:text-2xl prose-h3:text-blue-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-blue-600 prose-a:font-semibold
                  prose-strong:text-blue-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Landmark className="w-6 h-6" />
                  Explore This Heritage Site
                </h3>
                <p className="mb-6 text-blue-100">
                  Book a guided tour with skip-the-line access and expert commentary.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all"
                    >
                      <h4 className="font-bold">{tour.name}</h4>
                      <p className="text-blue-200 text-sm">{tour.price}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-blue-50"
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
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="blue" />
          </aside>
        </div>
      </div>
    </div>
  );
}
