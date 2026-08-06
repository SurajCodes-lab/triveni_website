'use client';

import Image from 'next/image';
import Link from 'next/link';
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
      <header className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-slate-900 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{post.category}</span>
          </nav>
        </div>
      </header>

      {/* Title Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block text-sm font-semibold text-amber-700 uppercase tracking-wider mb-4">
            {post.category}
          </span>

          <h1 className="font-display-serif text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          <span
            aria-hidden="true"
            className="mx-auto mb-6 block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
          />

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
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
      </section>

      {/* Hero Image */}
      <section className="max-w-5xl mx-auto px-4 mb-12">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <main className="lg:col-span-8">
            {/* Quick Info */}
            {post.attractionData && (
              <div className="flex flex-wrap gap-4 mb-10 p-6 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Timings</p>
                  <p className="font-semibold text-slate-900">{post.attractionData.timings?.open || '9 AM'} - {post.attractionData.timings?.close || '5 PM'}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Entry Fee</p>
                  <p className="text-gold-foil font-semibold">{post.attractionData.entryFee?.indian || 'Varies'}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Best Time</p>
                  <p className="font-semibold text-slate-900">{post.attractionData.bestTimeToVisit?.season || 'Oct - Mar'}</p>
                </div>
                <div className="flex-1 min-w-[120px]">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Duration</p>
                  <p className="font-semibold text-slate-900">{post.attractionData.timeNeeded || '2-3 Hours'}</p>
                </div>
              </div>
            )}

            {/* Article */}
            <article
              className="blog-prose prose prose-lg max-w-[70ch] mx-auto
                prose-headings:text-slate-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                prose-h3:text-xl
                prose-p:text-slate-700 prose-p:leading-relaxed
                prose-a:text-amber-700 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900
                prose-li:text-slate-700
                prose-blockquote:border-l-[#FACF2D] prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:not-italic"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap gap-2">
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

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I'm interested in visiting ${post.city || 'this destination'}. Can you help with transport and pricing?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="relative overflow-hidden mt-10 p-8 bg-slate-950 ring-1 ring-white/10 rounded-2xl text-white">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
                <h3 className="font-display-serif text-xl font-bold mb-4">Plan Your Visit to {post.city}</h3>
                <p className="text-slate-300 mb-6">Book a comfortable ride and explore with ease.</p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="sheen inline-flex items-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
                  >
                    View Tours <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+917668570551"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/15"
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
