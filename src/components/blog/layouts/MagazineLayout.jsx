'use client';

import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, BookOpen, Share2,
  ChevronRight, Phone, ArrowRight, Quote, Plane, Map
} from '@/components/ui/icons';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';

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
            <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-amber-700 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-amber-700 font-medium">{post.category}</span>
          </nav>
        </div>
      </div>

      {/* Magazine-Style Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-16 text-center">
          {/* Category Badge */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/60 bg-[#FACF2D]/10 px-4 py-2 text-sm font-bold text-amber-700 backdrop-blur-sm mb-6">
              {post.category}
            </span>
          </div>

          {/* Large Title */}
          <h1 className="font-display-serif text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-8">
            {post.title}
          </h1>

          <span
            aria-hidden="true"
            className="mt-5 mx-auto block h-[4px] w-28 opacity-70 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
          />

          {/* Excerpt as Subtitle */}
          <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {post.excerpt}
          </p>

          {/* Meta Info Line */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
              <Calendar className="w-4 h-4 text-amber-600" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
              <Clock className="w-4 h-4 text-amber-600" />
              {post.readTime}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-700">
              <MapPin className="w-4 h-4 text-amber-600" />
              {post.city}
            </span>
          </div>
        </div>
      </header>

      {/* Full-Width Hero Image */}
      <div className="relative h-[60vh] md:h-[70vh] w-full">
        <Image
          src={post.heroImage || post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />

        {/* Image Caption */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-sm text-white">
            <MapPin className="w-4 h-4 text-[#FACF2D]" />
            {post.city} - {post.category}
          </p>
        </div>
      </div>

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
                    <dd className="font-semibold text-slate-900">{post.attractionData?.bestTimeToVisit?.season || 'Oct - Mar'}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Duration Needed</dt>
                    <dd className="font-semibold text-slate-900">{post.attractionData?.timeNeeded || '2-3 Hours'}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Entry Fee</dt>
                    <dd className="font-semibold text-slate-900">{post.attractionData?.entryFee?.indian || 'Varies'}</dd>
                  </div>
                </dl>
              </div>

              {/* Share Box */}
              <div className="bg-[#FACF2D]/10 border border-[#FACF2D]/30 p-6 rounded-2xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">Share Article</h3>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-600 hover:text-amber-700 transition-colors shadow-sm">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags?.slice(0, 5).map((tag, i) => (
                    <span key={i} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer">
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
            <blockquote className="relative mb-12 pl-8 border-l-4 border-[#FACF2D]">
              <Quote className="absolute -left-3 -top-2 w-6 h-6 text-amber-600 bg-[#faf9f6]" />
              <p className="font-display-serif text-2xl italic text-slate-700 leading-relaxed">
                “Every journey to {post.city} unveils stories waiting to be discovered, moments waiting to be lived.”
              </p>
            </blockquote>

            {/* Article Content with Drop Cap */}
            <article className="blog-prose prose prose-lg max-w-[70ch] mx-auto
              prose-p:text-gray-700 prose-p:leading-[1.9] prose-p:text-[17px]
              prose-headings:font-serif prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl
              prose-a:text-amber-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900
              prose-li:text-gray-700
              first-letter:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-amber-600
            ">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>

            {/* Author Box */}
            <div className="mt-16 p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#FACF2D] rounded-full flex items-center justify-center">
                  <BookOpen className="w-7 h-7 text-black" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Written by</p>
                  <h4 className="font-bold text-slate-900">Triveni Cabs Editorial</h4>
                  <p className="text-sm text-gray-500">Your trusted travel companion across India</p>
                </div>
              </div>
            </div>
          </main>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-3 order-3">
            <div className="sticky top-8">
              {/* Book Now CTA */}
              <div className="relative overflow-hidden bg-slate-950 ring-1 ring-white/10 rounded-2xl p-6 text-white mb-8">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
                />
                <h3 className="font-bold text-lg mb-2">Plan Your Visit</h3>
                <p className="text-slate-300 text-sm mb-6">
                  Book comfortable transport to explore {post.city} hassle-free.
                </p>
                <a
                  href="tel:+917668570551"
                  className="sheen w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
                >
                  <Phone className="w-4 h-4" />
                  Call to Book
                </a>
              </div>

              {/* WhatsApp CTA */}
              <WhatsAppCTA
                message={`Hi! I just read about ${post.title}. I'm interested in visiting ${post.city || 'this destination'}. Can you help with a quote?`}
                buttonText="Get Free Quote on WhatsApp"
                variant="primary"
              />

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
                        <h4 className="font-medium text-slate-900 group-hover:text-amber-700 transition-colors text-sm">
                          {tour.name}
                        </h4>
                        <p className="text-xs text-gray-500">{tour.price}</p>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="mt-6 flex items-center gap-1 text-amber-700 text-sm font-semibold hover:gap-2 transition-all"
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
      <div className="relative overflow-hidden bg-slate-950 ring-1 ring-white/10 py-12">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
        />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display-serif text-3xl font-bold text-white mb-4">
            Ready to Explore {post.city}?
          </h2>
          <p className="text-slate-300 mb-8">
            Let us handle the travel while you create memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
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
                <div className="w-12 h-12 bg-[#FACF2D]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                  <MapPin className="w-5 h-5 text-amber-600 group-hover:text-black" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Explore {post.city}</h3>
                <p className="text-gray-500 text-xs mt-1">City Guide</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link
                href={relatedLinks.airportService}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#FACF2D]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                  <Plane className="w-5 h-5 text-amber-600 group-hover:text-black" />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm">Airport Transfer</h3>
                <p className="text-gray-500 text-xs mt-1">Pickup & Drop</p>
              </Link>
            )}
            <Link
              href="/sightseeing"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#FACF2D]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                <Map className="w-5 h-5 text-amber-600 group-hover:text-black" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">All Tours</h3>
              <p className="text-gray-500 text-xs mt-1">Destinations</p>
            </Link>
            <Link
              href="/blog"
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all text-center group border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#FACF2D]/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                <BookOpen className="w-5 h-5 text-amber-600 group-hover:text-black" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm">More Articles</h3>
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
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-slate-700 hover:border-[#FACF2D] hover:bg-[#FACF2D]/10 hover:text-amber-700 transition-colors shadow-sm border border-gray-100"
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
