'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar, Clock, MapPin, ChevronRight, Phone, Sparkles,
  ChevronDown, ChevronUp, Star, Zap, Globe, Heart
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';

export default function ModernCardLayout({ post, relatedLinks }) {
  const [expandedSection, setExpandedSection] = useState(null);

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-200/40 to-fuchsia-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-br from-pink-200/40 to-rose-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-200/40 to-blue-200/40 rounded-full blur-3xl" />
      </div>

      {/* Floating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-violet-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-violet-600 transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-violet-600 font-medium">{post.category}</span>
            </nav>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-violet-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Card */}
      <section className="relative max-w-6xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white rounded-[2rem] shadow-2xl shadow-violet-200/50 overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 rounded-[2rem]" />
          <div className="absolute inset-[3px] bg-white rounded-[1.8rem]" />

          <div className="relative grid lg:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] lg:h-auto lg:min-h-[500px]">
              <Image
                src={post.heroImage || post.image}
                alt={post.title}
                fill
                className="object-cover lg:rounded-l-[1.8rem]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:bg-gradient-to-r" />

              {/* Floating Stats */}
              <div className="absolute bottom-6 left-6 right-6 lg:left-auto lg:right-auto lg:bottom-auto lg:top-6 lg:left-6 flex gap-3">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-violet-700">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    4.9 Rating
                  </span>
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 rounded-full shadow-lg"
                >
                  <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
                    <Sparkles className="w-4 h-4" />
                    Featured
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Content Side */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold w-fit mb-6"
              >
                <Globe className="w-4 h-4" />
                {post.category}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-4"
              >
                {post.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                {post.excerpt}
              </motion.p>

              {/* Meta Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4 text-violet-500" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-violet-500" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
                  <MapPin className="w-4 h-4 text-violet-500" />
                  {post.city}
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quick Facts Accordion Cards */}
      {post.attractionData && (
        <section className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { id: 'timing', icon: Clock, title: 'Timings', value: `${post.attractionData.timings?.open || '9 AM'} - ${post.attractionData.timings?.close || '5 PM'}`, color: 'from-violet-500 to-purple-500' },
              { id: 'entry', icon: Zap, title: 'Entry Fee', value: post.attractionData.entryFee?.indian || 'Varies', color: 'from-fuchsia-500 to-pink-500' },
              { id: 'season', icon: Sparkles, title: 'Best Season', value: post.attractionData.bestTimeToVisit?.season || 'Oct - Mar', color: 'from-cyan-500 to-blue-500' },
              { id: 'duration', icon: Globe, title: 'Duration', value: post.attractionData.timeNeeded || '2-3 Hours', color: 'from-emerald-500 to-teal-500' },
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-2xl shadow-lg shadow-violet-100/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(item.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <p className="font-bold text-gray-900">{item.value}</p>
                    </div>
                  </div>
                  {expandedSection === item.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedSection === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-5 text-gray-600 text-sm">
                        Plan your visit accordingly. {item.title} may vary during festivals and holidays.
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article */}
          <main className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl shadow-violet-100/50 p-8 lg:p-12"
            >
              <article
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-violet-100
                  prose-h3:text-xl prose-h3:text-violet-800
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-violet-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:text-violet-800
                  prose-strong:text-gray-900
                  prose-li:text-gray-700
                  prose-blockquote:border-l-violet-500 prose-blockquote:bg-violet-50 prose-blockquote:rounded-r-2xl prose-blockquote:py-4 prose-blockquote:not-italic"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.div>

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * i }}
                  className="bg-white text-violet-700 px-5 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg hover:bg-violet-50 transition-all cursor-pointer"
                >
                  #{tag}
                </motion.span>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I'd love to plan a trip to ${post.city || 'this destination'}. Can you share packages and pricing?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* CTA Card */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
              >
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4">Ready to Visit {post.city}?</h3>
                  <p className="text-white/80 mb-6 max-w-lg">
                    Experience this destination with our premium transport services and expert guidance.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={relatedLinks.cityTours || '/sightseeing'}
                      className="bg-white text-violet-700 px-8 py-3 rounded-xl font-bold hover:bg-violet-50 transition-colors"
                    >
                      Explore Tours
                    </Link>
                    <a
                      href="tel:+917668570551"
                      className="bg-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/30 transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="violet" />
          </aside>
        </div>
      </div>
    </div>
  );
}
