'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, BookOpen, Share2,
  ChevronRight, Phone, ArrowRight, Quote
} from 'lucide-react';
import DynamicSidebar from '../DynamicSidebar';

export default function MagazineLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Minimal Header Bar */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-rose-600 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-rose-600 font-medium">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Magazine-Style Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest rounded">
              {post.category}
            </span>
          </motion.div>

          {/* Large Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-8"
          >
            {post.title}
          </motion.h1>

          {/* Excerpt as Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            {post.excerpt}
          </motion.p>

          {/* Meta Info Line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="w-1 h-1 bg-gray-300 rounded-full" />
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {post.city}
            </span>
          </motion.div>
        </div>
      </header>

      {/* Full-Width Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative h-[60vh] md:h-[70vh] w-full"
      >
        <Image
          src={post.heroImage || post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

        {/* Image Caption */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-white/80 text-sm bg-black/30 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
            📍 {post.city} - {post.category}
          </p>
        </div>
      </motion.div>

      {/* 3-Column Magazine Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Quick Info */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Facts */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Quick Facts</h3>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500">Best Time to Visit</dt>
                    <dd className="font-semibold text-gray-900">{post.attractionData?.bestTimeToVisit?.season || 'Oct - Mar'}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Duration Needed</dt>
                    <dd className="font-semibold text-gray-900">{post.attractionData?.timeNeeded || '2-3 Hours'}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Entry Fee</dt>
                    <dd className="font-semibold text-gray-900">{post.attractionData?.entryFee?.indian || 'Varies'}</dd>
                  </div>
                </dl>
              </div>

              {/* Share Box */}
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-6 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-rose-400 mb-3">Share Article</h3>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-rose-600 transition-colors shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.slice(0, 5).map((tag, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Center Column - Main Content */}
          <main className="lg:col-span-6 order-1 lg:order-2">
            {/* Pull Quote */}
            <blockquote className="relative mb-12 pl-8 border-l-4 border-rose-400">
              <Quote className="absolute -left-3 -top-2 w-6 h-6 text-rose-400 bg-[#faf9f6]" />
              <p className="text-2xl font-serif italic text-gray-700 leading-relaxed">
                "Every journey to {post.city} unveils stories waiting to be discovered, moments waiting to be lived."
              </p>
            </blockquote>

            {/* Article Content with Drop Cap */}
            <article className="prose prose-lg max-w-none prose-rose
              prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:text-[17px]
              prose-headings:font-serif prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl
              prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900
              prose-li:text-gray-700
              first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-rose-600
            ">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Author Box */}
            <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Written by</p>
                  <h4 className="font-bold text-gray-900">Triveni Cabs Editorial</h4>
                  <p className="text-sm text-gray-500">Your trusted travel companion across India</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-3 order-3">
            <div className="sticky top-8">
              {/* Book Now CTA */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white mb-8">
                <h3 className="font-bold text-lg mb-2">Plan Your Visit</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Book comfortable transport to explore {post.city} hassle-free.
                </p>
                <a
                  href="tel:+917668570551"
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call to Book
                </a>
              </div>

              {/* Related Tours */}
              {relatedLinks?.relatedTours?.length > 0 && (
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Related Tours</h3>
                  <div className="space-y-4">
                    {relatedLinks.relatedTours.slice(0, 3).map((tour, i) => (
                      <Link
                        key={i}
                        href={tour.url}
                        className="block group"
                      >
                        <h4 className="font-medium text-gray-900 group-hover:text-rose-600 transition-colors text-sm">
                          {tour.name}
                        </h4>
                        <p className="text-xs text-gray-500">{tour.price}</p>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="mt-6 flex items-center gap-1 text-rose-600 text-sm font-semibold hover:gap-2 transition-all"
                  >
                    View All <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-gradient-to-r from-rose-600 to-pink-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Ready to Explore {post.city}?
          </h2>
          <p className="text-rose-100 mb-8">
            Let us handle the travel while you create memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-rose-600 px-8 py-3 rounded-xl font-bold hover:bg-rose-50 transition-colors"
            >
              Get Quote
            </Link>
            <a
              href="https://wa.me/917668570551"
              className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Internal Links Section */}
      <div className="bg-[#faf9f6] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center mb-8">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedLinks?.cityPage && (
              <Link
                href={relatedLinks.cityPage}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-500 transition-colors">
                  <MapPin className="w-5 h-5 text-rose-600 group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Explore {post.city}</h3>
                <p className="text-gray-500 text-xs mt-1">City Guide</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link
                href={relatedLinks.airportService}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-500 transition-colors">
                  <span className="text-xl">✈️</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">Airport Transfer</h3>
                <p className="text-gray-500 text-xs mt-1">Pickup & Drop</p>
              </Link>
            )}
            <Link
              href="/sightseeing"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-500 transition-colors">
                <span className="text-xl">🗺️</span>
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">All Tours</h3>
              <p className="text-gray-500 text-xs mt-1">Destinations</p>
            </Link>
            <Link
              href="/blog"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
            >
              <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-rose-500 transition-colors">
                <BookOpen className="w-5 h-5 text-rose-600 group-hover:text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">More Articles</h3>
              <p className="text-gray-500 text-xs mt-1">Travel Guides</p>
            </Link>
          </div>

          {/* Quick Links */}
          {relatedLinks?.quickLinks?.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {relatedLinks.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-gray-700 hover:bg-rose-50 hover:text-rose-700 transition-colors shadow-sm border border-gray-100"
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
