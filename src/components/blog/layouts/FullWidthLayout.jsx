'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Calendar, Clock, MapPin, ArrowUp, Eye,
  ChevronRight, Phone, Heart, Bookmark
} from 'lucide-react';

export default function FullWidthLayout({ post, relatedLinks }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrollProgress(Math.round(latest * 100));
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl shadow-black/10 px-6 py-3 flex items-center gap-6 border border-gray-100"
        >
          <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Like</span>
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <button className="flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors">
            <Bookmark className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Save</span>
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <span className="text-sm font-bold text-teal-600">{scrollProgress}%</span>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-teal-500 hover:bg-teal-600 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Immersive Hero */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white" />
        </div>

        {/* Centered Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-5xl">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-sm text-white/80 mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-teal-300 font-medium">{post.category}</span>
            </motion.nav>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <span className="inline-block px-6 py-2 bg-teal-500 text-white text-sm font-bold uppercase tracking-wider rounded-full mb-8">
                {post.category}
              </span>
            </motion.div>

            {/* Giant Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight"
            >
              {post.title}
            </motion.h1>

            {/* Meta Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-6 text-white/70"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {formattedDate}
              </span>
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {post.city}
              </span>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Excerpt/Lead Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Full-Width Content */}
      <section className="pb-20">
        <article className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-xl max-w-none
              prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:text-lg
              prose-headings:text-gray-900 prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-center
              prose-h3:text-2xl prose-h3:mt-12
              prose-a:text-teal-600 prose-a:no-underline prose-a:border-b-2 prose-a:border-teal-200 hover:prose-a:border-teal-500
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-blockquote:border-l-4 prose-blockquote:border-teal-400 prose-blockquote:bg-teal-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic
              prose-li:text-gray-700
              prose-img:rounded-2xl prose-img:shadow-2xl
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>

      {/* Tags Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="bg-white text-gray-600 px-5 py-2.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:text-teal-600 transition-all cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Width Image Break (if there's attraction data) */}
      {post.attractionData && (
        <section className="relative h-[50vh] my-0">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
              <div>
                <div className="text-4xl font-black mb-2">{post.attractionData.timings?.open || '9AM'}</div>
                <div className="text-teal-200 text-sm uppercase tracking-wider">Opens</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">{post.attractionData.timings?.close || '5PM'}</div>
                <div className="text-teal-200 text-sm uppercase tracking-wider">Closes</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">{post.attractionData.entryFee?.indian || '₹50'}</div>
                <div className="text-teal-200 text-sm uppercase tracking-wider">Entry Fee</div>
              </div>
              <div>
                <div className="text-4xl font-black mb-2">{post.attractionData.timeNeeded || '2-3h'}</div>
                <div className="text-teal-200 text-sm uppercase tracking-wider">Duration</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tour CTA Section */}
      {relatedLinks?.relatedTours?.length > 0 && (
        <section className="py-24 px-4 bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              Ready to Visit {post.city}?
            </motion.h2>
            <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
              Experience this destination with our comfortable transport and expert local guidance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {relatedLinks.relatedTours.slice(0, 2).map((tour, i) => (
                <Link
                  key={i}
                  href={tour.url}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-3xl p-8 text-left transition-all group border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-teal-200">{tour.price} onwards</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={relatedLinks.cityTours || '/sightseeing'}
                className="bg-white text-teal-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors"
              >
                View All Tours
              </Link>
              <a
                href="tel:+917668570551"
                className="bg-teal-800 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-teal-900 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Related Content */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">More to Explore</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/sightseeing" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <Eye className="w-7 h-7 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sightseeing Tours</h3>
              <p className="text-gray-500 text-sm">Explore top destinations</p>
            </Link>
            <Link href="/blog" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <Bookmark className="w-7 h-7 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">More Articles</h3>
              <p className="text-gray-500 text-sm">Read more travel guides</p>
            </Link>
            <Link href="/contact" className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                <Phone className="w-7 h-7 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-500 text-sm">Plan your trip today</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
