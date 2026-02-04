'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, History, Scroll,
  ChevronRight, Phone, ChevronDown, Milestone, Compass
} from '@/components/ui/icons';
import WhatsAppCTA from '../WhatsAppCTA';

export default function TimelineLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Split content into sections for timeline effect
  const contentSections = post.content?.split(/<h2[^>]*>/).filter(Boolean) || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-100 to-stone-50">
      {/* Vintage-Style Header */}
      <div className="relative bg-stone-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="vintage-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#vintage-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-stone-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-amber-400">{post.category}</span>
          </nav>

          {/* Title Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  <History className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-amber-400">Historical Journey</p>
                  <p className="text-stone-400 text-sm">{post.category}</p>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
              >
                {post.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-stone-300 leading-relaxed mb-8"
              >
                {post.excerpt}
              </motion.p>

              {/* Meta */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <span className="flex items-center gap-2 bg-stone-800 px-4 py-2 rounded-full text-sm">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2 bg-stone-800 px-4 py-2 rounded-full text-sm">
                  <Clock className="w-4 h-4 text-amber-400" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2 bg-stone-800 px-4 py-2 rounded-full text-sm">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  {post.city}
                </span>
              </motion.div>
            </div>

            {/* Hero Image with Vintage Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 border-2 border-amber-500/30 rounded-lg" />
              <div className="absolute -inset-2 border border-amber-500/20 rounded-lg" />
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={post.heroImage || post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent" />
              </div>
              {/* Vintage corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-amber-500/50" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-amber-500/50" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-amber-500/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-amber-500/50" />
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center mt-12 text-stone-500"
          >
            <span className="text-xs uppercase tracking-widest mb-2">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </div>

      {/* Timeline Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-20">
        {/* Timeline Line */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600" />

          {/* Timeline Start */}
          <div className="relative flex items-center justify-center mb-16">
            <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25 z-10">
              <Scroll className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Article Content as Timeline */}
          <article className="relative">
            <div
              className="prose prose-lg max-w-none
                prose-headings:relative prose-headings:ml-16 lg:prose-headings:ml-0
                prose-h2:text-2xl prose-h2:font-bold prose-h2:text-stone-800
                prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:-left-12 lg:prose-h2:before:left-1/2
                prose-h2:before:transform lg:prose-h2:before:-translate-x-1/2 prose-h2:before:-translate-y-1
                prose-h2:before:w-6 prose-h2:before:h-6 prose-h2:before:bg-amber-500 prose-h2:before:rounded-full
                prose-h2:before:border-4 prose-h2:before:border-stone-100 prose-h2:before:shadow-md
                prose-h3:text-xl prose-h3:text-stone-700
                prose-p:text-stone-600 prose-p:leading-relaxed prose-p:ml-16 lg:prose-p:ml-0
                prose-li:text-stone-600 prose-li:ml-16 lg:prose-li:ml-0
                prose-a:text-amber-600 prose-a:font-semibold
                prose-strong:text-stone-800"
            >
              {/* Wrapped Content Sections */}
              <div className="space-y-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </article>

          {/* Timeline End */}
          <div className="relative flex items-center justify-center mt-16">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25 z-10">
              <Milestone className="w-7 h-7 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      {post.attractionData && (
        <div className="bg-stone-900 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-center text-white text-2xl font-bold mb-10">Visitor Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-stone-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Timings</p>
                <p className="text-white font-semibold">{post.attractionData.timings?.open || '9 AM'} - {post.attractionData.timings?.close || '5 PM'}</p>
              </div>
              <div className="bg-stone-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Best Time</p>
                <p className="text-white font-semibold">{post.attractionData.bestTimeToVisit?.season || 'Oct - Mar'}</p>
              </div>
              <div className="bg-stone-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-semibold">{post.city}</p>
              </div>
              <div className="bg-stone-800 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <History className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-stone-400 text-xs uppercase tracking-wider mb-1">Duration</p>
                <p className="text-white font-semibold">{post.attractionData.timeNeeded || '2-3 Hours'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tags Section */}
      <div className="bg-stone-100 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-stone-600 px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <section className="py-12 px-4 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <WhatsAppCTA
            message={`Hi! I just read about ${post.title}. I'd like to plan a historical tour to ${post.city || 'this destination'}. Can you help?`}
            buttonText="Get Free Quote on WhatsApp"
            variant="primary"
          />
        </div>
      </section>

      {/* Book Tour CTA */}
      {relatedLinks?.relatedTours?.length > 0 && (
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">
                Experience This Historic Site
              </h2>
              <p className="text-amber-100 max-w-2xl mx-auto">
                Explore the rich history and heritage with our guided tours and comfortable transport services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {relatedLinks.relatedTours.slice(0, 2).map((tour, i) => (
                <Link
                  key={i}
                  href={tour.url}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-2xl p-6 transition-all group"
                >
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-amber-100">{tour.price} onwards</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={relatedLinks.cityTours || '/sightseeing'}
                className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:bg-amber-50 transition-colors"
              >
                View All Tours
              </Link>
              <a
                href="tel:+917668570551"
                className="bg-stone-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-stone-800 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Internal Links Section */}
      <div className="bg-stone-100 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-800 text-center mb-10">Explore More</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {relatedLinks?.cityPage && (
              <Link
                href={relatedLinks.cityPage}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500 transition-colors">
                  <MapPin className="w-5 h-5 text-amber-600 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-stone-800">Explore {post.city}</h3>
                <p className="text-stone-500 text-sm mt-1">City Guide & Routes</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link
                href={relatedLinks.airportService}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
              >
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500 transition-colors">
                  <span className="text-xl">✈️</span>
                </div>
                <h3 className="font-bold text-stone-800">Airport Transfer</h3>
                <p className="text-stone-500 text-sm mt-1">Pickup & Drop Service</p>
              </Link>
            )}
            <Link
              href="/sightseeing"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500 transition-colors">
                <Compass className="w-5 h-5 text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-stone-800">All Destinations</h3>
              <p className="text-stone-500 text-sm mt-1">Browse All Tours</p>
            </Link>
            <Link
              href="/blog"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500 transition-colors">
                <History className="w-5 h-5 text-amber-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-stone-800">More Articles</h3>
              <p className="text-stone-500 text-sm mt-1">Travel Guides & Tips</p>
            </Link>
          </div>

          {/* Quick Links */}
          {relatedLinks?.quickLinks?.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {relatedLinks.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-stone-700 hover:bg-amber-50 hover:text-amber-700 transition-colors shadow-sm"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium text-sm">{link.text}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
