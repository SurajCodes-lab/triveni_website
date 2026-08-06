'use client';

import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, ChevronRight, Phone,
  Star, Camera, Navigation, ArrowRight
} from '@/components/ui/icons';
import WhatsAppCTA from '../WhatsAppCTA';

export default function SplitScreenLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-slate-950">
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
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-12">
              {/* Top - Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/80">
                <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-[#FACF2D]">{post.category}</span>
              </nav>

              {/* Center - Title */}
              <div className="flex-1 flex items-center">
                <div>
                  <span className="inline-block px-4 py-1.5 bg-[#FACF2D] text-black text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                    {post.category}
                  </span>
                  <h1 className="font-display-serif text-4xl xl:text-5xl font-bold text-white leading-tight">
                    {post.title}
                  </h1>
                  <span
                    aria-hidden="true"
                    className="my-6 block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
                  />
                  <p className="text-lg text-white/70 leading-relaxed max-w-lg">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom - Meta */}
              <div className="flex items-center gap-6 text-white/60 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#FACF2D]" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FACF2D]" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FACF2D]" />
                  {post.city}
                </span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Right - Scrolling Content */}
        <div className="bg-slate-950 min-h-screen">
          <div className="p-12 xl:p-16">
            {/* Quick Stats */}
            {post.attractionData && (
              <div className="grid grid-cols-2 gap-4 mb-12">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Star className="w-5 h-5 text-[#FACF2D] mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Rating</p>
                  <p className="text-white font-bold">4.8/5</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Clock className="w-5 h-5 text-[#FACF2D] mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-white font-bold">{post.attractionData.timeNeeded || '2-3 Hours'}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Navigation className="w-5 h-5 text-[#FACF2D] mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Best Time</p>
                  <p className="text-white font-bold">{post.attractionData.bestTimeToVisit?.season || 'Oct - Mar'}</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                  <Camera className="w-5 h-5 text-[#FACF2D] mb-2" />
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Entry</p>
                  <p className="text-gold-foil font-bold">{post.attractionData.entryFee?.indian || 'Free'}</p>
                </div>
              </div>
            )}

            {/* Article Content */}
            <article className="content-section">
              <div
                className="blog-prose prose prose-lg prose-invert max-w-[70ch]
                  prose-p:text-slate-300 prose-p:leading-relaxed
                  prose-headings:text-white prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4
                  prose-h3:text-xl prose-h3:text-[#FACF2D]
                  prose-a:text-[#FACF2D] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-li:text-slate-300
                  prose-blockquote:border-l-[#FACF2D] prose-blockquote:bg-white/5 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:text-slate-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Topics</p>
              <div className="flex flex-wrap gap-2">
                {post.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I'm interested in visiting ${post.city || 'this destination'}. Can you share pricing and packages?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* Book Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="relative overflow-hidden mt-12 bg-slate-900 ring-1 ring-white/10 rounded-3xl p-8 text-white">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
                <h3 className="font-display-serif text-2xl font-bold mb-4">Plan Your Visit</h3>
                <p className="text-slate-300 mb-6">
                  Explore {post.city} with our comfortable transport and expert guidance.
                </p>
                <div className="space-y-3 mb-6">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, i) => (
                    <Link
                      key={i}
                      href={tour.url}
                      className="flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
                    >
                      <div>
                        <h4 className="font-bold group-hover:text-[#FACF2D]">{tour.name}</h4>
                        <p className="text-slate-400 text-sm">{tour.price}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#FACF2D] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="sheen flex-1 rounded-xl bg-[#FACF2D] py-3.5 text-center font-extrabold text-black transition hover:bg-[#ffdb4d]"
                  >
                    All Tours
                  </Link>
                  <a
                    href="tel:+917668570551"
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 py-3.5 text-center font-bold text-white transition-colors hover:bg-white/15 flex items-center justify-center gap-2"
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6">
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-4">
              <Link href="/">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog">Blog</Link>
            </nav>
            <span className="inline-block px-4 py-1.5 bg-[#FACF2D] text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-display-serif text-3xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-white/60 text-sm">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-[#FACF2D]" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-[#FACF2D]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="bg-slate-950 p-6">
          {/* Quick Stats Mobile */}
          {post.attractionData && (
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-white/40 text-xs mb-1">Duration</p>
                <p className="text-white font-bold">{post.attractionData.timeNeeded || '2-3h'}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-white/40 text-xs mb-1">Entry</p>
                <p className="text-white font-bold">{post.attractionData.entryFee?.indian || 'Free'}</p>
              </div>
            </div>
          )}

          <article>
            <div
              className="blog-prose prose prose-invert max-w-none
                prose-p:text-slate-300
                prose-headings:text-white
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-a:text-[#FACF2D]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Mobile Tags */}
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags?.map((tag, i) => (
              <span key={i} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>

          {/* Mobile CTA */}
          {relatedLinks?.relatedTours?.length > 0 && (
            <div className="relative overflow-hidden mt-8 bg-slate-900 ring-1 ring-white/10 rounded-2xl p-6 text-white">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
              <h3 className="font-bold text-lg mb-4">Plan Your Visit</h3>
              <div className="flex gap-3">
                <Link
                  href={relatedLinks.cityTours || '/sightseeing'}
                  className="sheen flex-1 rounded-xl bg-[#FACF2D] py-3 text-center font-extrabold text-black"
                >
                  Tours
                </Link>
                <a
                  href="tel:+917668570551"
                  className="flex-1 rounded-xl border border-white/20 bg-white/10 py-3 text-center font-bold text-white flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call
                </a>
              </div>
            </div>
          )}

          {/* Mobile Internal Links */}
          <div className="mt-8 grid grid-cols-2 gap-3">
            {relatedLinks?.cityPage && (
              <Link href={relatedLinks.cityPage} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                <span className="text-[#FACF2D] text-lg">📍</span>
                <p className="text-white text-sm font-medium mt-1">Explore {post.city}</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link href={relatedLinks.airportService} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                <span className="text-[#FACF2D] text-lg">✈️</span>
                <p className="text-white text-sm font-medium mt-1">Airport Transfer</p>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Internal Links Section - Full Width */}
      <div className="relative overflow-hidden bg-slate-900 py-16">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-center text-white/60 text-xs uppercase tracking-widest mb-10">Explore More</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedLinks?.cityPage && (
              <Link
                href={relatedLinks.cityPage}
                className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-all group border border-white/10"
              >
                <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D]/20 transition-colors">
                  <MapPin className="w-6 h-6 text-[#FACF2D]" />
                </div>
                <h3 className="font-bold text-white">Explore {post.city}</h3>
                <p className="text-slate-400 text-sm mt-1">City Guide & Routes</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link
                href={relatedLinks.airportService}
                className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-all group border border-white/10"
              >
                <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D]/20 transition-colors">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="font-bold text-white">Airport Transfer</h3>
                <p className="text-slate-400 text-sm mt-1">Pickup & Drop</p>
              </Link>
            )}
            <Link
              href="/sightseeing"
              className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-all group border border-white/10"
            >
              <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D]/20 transition-colors">
                <Navigation className="w-6 h-6 text-[#FACF2D]" />
              </div>
              <h3 className="font-bold text-white">All Destinations</h3>
              <p className="text-slate-400 text-sm mt-1">Sightseeing Tours</p>
            </Link>
            <Link
              href="/blog"
              className="bg-white/5 p-6 rounded-2xl text-center hover:bg-white/10 transition-all group border border-white/10"
            >
              <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D]/20 transition-colors">
                <Camera className="w-6 h-6 text-[#FACF2D]" />
              </div>
              <h3 className="font-bold text-white">More Articles</h3>
              <p className="text-slate-400 text-sm mt-1">Travel Guides</p>
            </Link>
          </div>

          {/* Quick Links */}
          {relatedLinks?.quickLinks?.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {relatedLinks.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full text-slate-300 hover:bg-[#FACF2D] hover:text-black transition-colors border border-white/10"
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
