'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, ChevronRight, Phone, ArrowRight
} from '@/components/ui/icons';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';

export default function MinimalLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{post.category}</span>
          </nav>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-4"
          >
            {post.category}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6"
          >
            {post.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            {post.excerpt}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 text-sm text-gray-500"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {post.city}
            </span>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-5xl mx-auto px-4 mb-12"
      >
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Quick Info */}
            {post.attractionData && (
              <div className="flex flex-wrap gap-4 mb-10 p-6 bg-gray-50 rounded-xl">
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Timings</p>
                  <p className="font-semibold text-gray-900">{post.attractionData.timings?.open || '9 AM'} - {post.attractionData.timings?.close || '5 PM'}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Entry Fee</p>
                  <p className="font-semibold text-gray-900">{post.attractionData.entryFee?.indian || 'Varies'}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Best Time</p>
                  <p className="font-semibold text-gray-900">{post.attractionData.bestTimeToVisit?.season || 'Oct - Mar'}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Duration</p>
                  <p className="font-semibold text-gray-900">{post.attractionData.timeNeeded || '2-3 Hours'}</p>
                </div>
              </div>
            )}

            {/* Article */}
            <article
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl
                prose-p:text-gray-700 prose-p:leading-relaxed
                prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900
                prose-li:text-gray-700
                prose-blockquote:border-l-indigo-500 prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I'm interested in visiting ${post.city || 'this destination'}. Can you help with transport and pricing?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="mt-10 p-8 bg-indigo-50 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Visit to {post.city}</h3>
                <p className="text-gray-600 mb-6">Book a comfortable ride and explore with ease.</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                  >
                    View Tours <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+917668570551"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="indigo" />
          </aside>
        </div>
      </div>
    </div>
  );
}
