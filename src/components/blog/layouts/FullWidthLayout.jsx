'use client';

import Image from 'next/image';
import Link from '@/components/ui/JourneyLink';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, ArrowUp, Eye,
  ChevronRight, Phone, Heart, Bookmark, Plane, Compass
} from '@/components/ui/icons';
import WhatsAppCTA from '../WhatsAppCTA';
import { rupeeText } from '@/utilis/pricing';

export default function FullWidthLayout({ post, relatedLinks }) {
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
      {/* Floating Action Bar */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white/90 backdrop-blur-xl rounded-full shadow-2xl shadow-black/10 px-6 py-3 flex items-center gap-6 border border-gray-100">
          <button className="flex items-center gap-2 text-slate-500 hover:text-amber-700 transition-colors">
            <Heart className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Like</span>
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <button className="flex items-center gap-2 text-slate-500 hover:text-amber-700 transition-colors">
            <Bookmark className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Save</span>
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <button
            onClick={scrollToTop}
            className="w-10 h-10 bg-[#FACF2D] hover:bg-[#ffdb4d] rounded-full flex items-center justify-center text-black transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
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
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
        </div>

        {/* Centered Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-5xl">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/80 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#FACF2D] font-medium">{post.category}</span>
            </nav>

            {/* Category Badge */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/40 bg-black/40 px-4 py-2 text-sm font-bold text-[#FACF2D] backdrop-blur-sm mb-6">
                {post.category}
              </span>
            </div>

            {/* Giant Title */}
            <h1 className="font-display-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              {post.title}
            </h1>
            <span aria-hidden="true" className="mt-5 mb-8 mx-auto block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />

            {/* Meta Line */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-white">
                <Calendar className="w-4 h-4 text-[#FACF2D]" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-white">
                <Clock className="w-4 h-4 text-[#FACF2D]" />
                {post.readTime}
              </span>
              <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm text-white">
                <MapPin className="w-4 h-4 text-[#FACF2D]" />
                {post.city}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Excerpt/Lead Section */}
      <section className="py-12 sm:py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-light text-slate-700 leading-relaxed">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Full-Width Content */}
      <section className="pb-12 sm:pb-20">
        <article className="max-w-3xl mx-auto px-4">
          <div
            className="blog-prose prose prose-xl max-w-[70ch] mx-auto prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:text-lg prose-headings:text-slate-900 prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-4xl prose-h2:mt-20 prose-h2:mb-8 prose-h2:text-center prose-h3:text-2xl prose-h3:mt-12 prose-a:text-amber-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-strong:font-semibold prose-blockquote:border-l-4 prose-blockquote:border-[#FACF2D] prose-blockquote:bg-amber-50 prose-blockquote:rounded-r-xl prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-li:text-slate-700 prose-img:rounded-2xl prose-img:shadow-2xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>

      {/* Tags Section */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer"
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
          <div className="absolute inset-0 bg-slate-950/85" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-4xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-[#FACF2D] mb-2">{post.attractionData.timings?.open || '9AM'}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">Opens</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-[#FACF2D] mb-2">{post.attractionData.timings?.close || '5PM'}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">Closes</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-[#FACF2D] mb-2">{post.attractionData.entryFee?.indian || '₹50'}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">Entry Fee</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-extrabold text-[#FACF2D] mb-2">{post.attractionData.timeNeeded || '2-3h'}</div>
                <div className="text-white/60 text-xs uppercase tracking-wider">Duration</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* WhatsApp CTA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <WhatsAppCTA
            message={`Hi! I just read about ${post.title}. I'm interested in booking a trip to ${post.city || 'this destination'}. Can you share pricing?`}
            buttonText="Get Free Quote on WhatsApp"
            variant="primary"
          />
        </div>
      </section>

      {/* Tour CTA Section */}
      {relatedLinks?.relatedTours?.length > 0 && (
        <section className="relative overflow-hidden py-14 sm:py-24 px-4 bg-slate-950 ring-1 ring-white/10">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Visit {post.city}?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Experience this destination with our comfortable transport and expert local guidance.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {relatedLinks.relatedTours.slice(0, 2).map((tour, i) => (
                <Link
                  key={i}
                  href={tour.url}
                  className="bg-white/[0.04] backdrop-blur-sm hover:bg-white/[0.08] rounded-3xl p-8 text-left transition-all group border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FACF2D] transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-slate-300">{rupeeText(tour.price)} onwards</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={relatedLinks.cityTours || '/sightseeing'}
                className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
              >
                View All Tours
              </Link>
              <a
                href="tel:+917668570551"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white hover:bg-white/15 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Related Content */}
      <section className="py-12 sm:py-20 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display-serif text-3xl font-bold text-slate-900 mb-10">More to Explore</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedLinks?.cityPage && (
              <Link href={relatedLinks.cityPage} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D] transition-colors">
                  <MapPin className="w-6 h-6 text-amber-600 group-hover:text-black" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Explore {post.city}</h3>
                <p className="text-slate-500 text-sm">City Guide & Routes</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link href={relatedLinks.airportService} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D] transition-colors">
                  <Plane className="w-6 h-6 text-amber-600 group-hover:text-black" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">Airport Transfer</h3>
                <p className="text-slate-500 text-sm">Pickup & Drop</p>
              </Link>
            )}
            <Link href="/sightseeing" className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D] transition-colors">
                <Eye className="w-6 h-6 text-amber-600 group-hover:text-black" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">Sightseeing Tours</h3>
              <p className="text-slate-500 text-sm">Explore destinations</p>
            </Link>
            <Link href="/blog" className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-[#FACF2D]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D] transition-colors">
                <Bookmark className="w-6 h-6 text-amber-600 group-hover:text-black" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1">More Articles</h3>
              <p className="text-slate-500 text-sm">Travel guides & tips</p>
            </Link>
          </div>

          {/* Quick Links */}
          {relatedLinks?.quickLinks?.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {relatedLinks.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-slate-700 hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black transition-colors shadow-sm border border-slate-200"
                >
                  <span>{link.icon}</span>
                  <span className="font-medium text-sm">{link.text}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
