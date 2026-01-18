'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar, Clock, MapPin, ChevronRight, Phone,
  Star, Camera, Navigation, ArrowRight
} from 'lucide-react';

export default function SplitScreenLayout({ post, relatedLinks }) {
  const [activeSection, setActiveSection] = useState(0);

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.content-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          setActiveSection(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Desktop: Split Screen Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 min-h-screen">
        {/* Left - Sticky Image Panel */}
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="relative h-full">
            <Image
              src={post.heroImage || post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/50" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-12">
              {/* Top - Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/80">
                <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-yellow-400">{post.category}</span>
              </nav>

              {/* Center - Title */}
              <div className="flex-1 flex items-center">
                <div>
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1.5 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full mb-6"
                  >
                    {post.category}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl xl:text-5xl font-black text-white leading-tight mb-6"
                  >
                    {post.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-white/70 leading-relaxed max-w-lg"
                  >
                    {post.excerpt}
                  </motion.p>
                </div>
              </div>

              {/* Bottom - Meta */}
              <div className="flex items-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-yellow-400" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-yellow-400" />
                  {post.city}
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right - Scrolling Content */}
        <div className="bg-slate-900 min-h-screen">
          <div className="p-12 xl:p-16">
            {/* Quick Stats */}
            {post.attractionData && (
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50">
                  <Star className="w-5 h-5 text-yellow-400 mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Rating</p>
                  <p className="text-white font-bold">4.8/5</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50">
                  <Clock className="w-5 h-5 text-yellow-400 mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-white font-bold">{post.attractionData.timeNeeded || '2-3 Hours'}</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50">
                  <Navigation className="w-5 h-5 text-yellow-400 mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Best Time</p>
                  <p className="text-white font-bold">{post.attractionData.bestTimeToVisit?.season || 'Oct - Mar'}</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-700/50">
                  <Camera className="w-5 h-5 text-yellow-400 mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Entry</p>
                  <p className="text-white font-bold">{post.attractionData.entryFee?.indian || 'Free'}</p>
                </div>
              </div>
            )}

            {/* Article Content */}
            <article className="content-section">
              <div
                className="prose prose-lg prose-invert max-w-none
                  prose-p:text-slate-300 prose-p:leading-relaxed
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-700
                  prose-h3:text-xl prose-h3:text-yellow-400
                  prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-li:text-slate-300
                  prose-blockquote:border-l-yellow-400 prose-blockquote:bg-slate-800/50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:text-slate-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Topics</p>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-slate-800 text-slate-300 px-4 py-2 rounded-full text-sm hover:bg-yellow-400 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Book Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="mt-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-3xl p-8 text-slate-900">
                <h3 className="text-2xl font-bold mb-4">Plan Your Visit</h3>
                <p className="text-slate-700 mb-6">
                  Explore {post.city} with our comfortable transport and expert guidance.
                </p>
                <div className="space-y-3 mb-6">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, i) => (
                    <Link
                      key={i}
                      href={tour.url}
                      className="flex items-center justify-between bg-white/20 hover:bg-white/30 rounded-xl p-4 transition-all group"
                    >
                      <div>
                        <h4 className="font-bold">{tour.name}</h4>
                        <p className="text-slate-700 text-sm">{tour.price}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="flex-1 bg-slate-900 text-white text-center py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors"
                  >
                    All Tours
                  </Link>
                  <a
                    href="tel:+917668570551"
                    className="flex-1 bg-white text-slate-900 text-center py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile: Stacked Layout */}
      <div className="lg:hidden">
        {/* Mobile Hero */}
        <div className="relative h-[70vh]">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog">Blog</Link>
            </nav>
            <span className="inline-block px-4 py-1.5 bg-yellow-400 text-slate-900 text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl font-black text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="bg-slate-900 p-6">
          {/* Quick Stats Mobile */}
          {post.attractionData && (
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <p className="text-white/40 text-xs mb-1">Duration</p>
                <p className="text-white font-bold">{post.attractionData.timeNeeded || '2-3h'}</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4 text-center">
                <p className="text-white/40 text-xs mb-1">Entry</p>
                <p className="text-white font-bold">{post.attractionData.entryFee?.indian || 'Free'}</p>
              </div>
            </div>
          )}

          <article>
            <div
              className="prose prose-invert max-w-none
                prose-p:text-slate-300
                prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-a:text-yellow-400"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Mobile Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags?.map((tag, i) => (
              <span key={i} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile CTA */}
          {relatedLinks?.relatedTours?.length > 0 && (
            <div className="mt-8 bg-yellow-400 rounded-2xl p-6 text-slate-900">
              <h3 className="font-bold text-lg mb-4">Plan Your Visit</h3>
              <div className="flex gap-3">
                <Link
                  href={relatedLinks.cityTours || '/sightseeing'}
                  className="flex-1 bg-slate-900 text-white text-center py-3 rounded-xl font-bold"
                >
                  Tours
                </Link>
                <a
                  href="tel:+917668570551"
                  className="flex-1 bg-white text-slate-900 text-center py-3 rounded-xl font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
