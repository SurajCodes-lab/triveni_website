'use client';

import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, Landmark, Globe, BookOpen,
  ChevronRight, Award, Phone, Info
} from '@/components/ui/icons';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';

export default function MonumentLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50/40 to-white">
      {/* Monument Hero Section with Image */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/55 to-slate-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/90 mb-6 backdrop-blur-sm bg-white/10 w-fit px-4 py-2 rounded-full">
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D] font-semibold">{post.category || 'Monument'}</span>
          </nav>

          {/* UNESCO Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/40 bg-black/40 px-4 py-2 text-sm font-bold text-[#FACF2D] backdrop-blur-sm mb-6">
            <Globe className="w-4 h-4" />
            UNESCO World Heritage Site
          </div>

          {/* Title */}
          <h1 className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {post.title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />

          {/* Meta */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
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
              {post.attractionData?.location || post.city}
            </span>
          </div>
        </div>
      </section>

      {/* Quick Facts Bar */}
      {post.attractionData && (
        <section className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl">
                <Award className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Entry Fee (Indian)</p>
                <p className="font-bold text-slate-900">{post.attractionData.entryFee?.indian || '₹50'}</p>
              </div>
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl">
                <Award className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Entry Fee (Foreign)</p>
                <p className="font-bold text-slate-900">{post.attractionData.entryFee?.foreign || '₹550'}</p>
              </div>
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl">
                <Clock className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Timings</p>
                <p className="font-bold text-slate-900">{post.attractionData.timings?.open} - {post.attractionData.timings?.close}</p>
              </div>
              <div className="text-center p-3 bg-[#FACF2D]/10 rounded-xl">
                <Info className="w-5 h-5 mx-auto mb-1 text-amber-600" />
                <p className="text-xs text-gray-500">Closed On</p>
                <p className="font-bold text-slate-900">{post.attractionData.timings?.closedOn || 'Open Daily'}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <main className="lg:col-span-8">
            {/* Historical Timeline Note */}
            <div className="bg-[#FACF2D]/10 rounded-xl p-6 mb-8 border-l-4 border-[#FACF2D]">
              <div className="flex items-start gap-3">
                <BookOpen className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-display-serif font-bold text-slate-900 mb-1">Historical Significance</h3>
                  <p className="text-slate-700 text-sm">{post.excerpt}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="blog-prose prose prose-lg max-w-[70ch] mx-auto
                  prose-headings:text-slate-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:border-b-2 prose-h2:border-[#FACF2D]/40 prose-h2:pb-3
                  prose-h3:text-2xl prose-h3:text-slate-900
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-a:text-amber-700 prose-a:font-semibold
                  prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title}. I'd like to book a heritage tour to ${post.city || 'this destination'}. Can you share details?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="relative overflow-hidden mt-8 bg-slate-950 ring-1 ring-white/10 rounded-2xl p-8 text-white">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
                <h3 className="font-display-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <Landmark className="w-6 h-6 text-[#FACF2D]" />
                  Explore This Heritage Site
                </h3>
                <p className="mb-6 text-slate-300">
                  Book a guided tour with skip-the-line access and expert commentary.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-all"
                    >
                      <h4 className="font-bold">{tour.name}</h4>
                      <p className="text-[#FACF2D] text-sm">{tour.price}</p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href={relatedLinks.cityTours || '/sightseeing'}
                    className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
                  >
                    View All Tours →
                  </Link>
                  <a href="tel:+917668570551" className="rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white hover:bg-white/15 transition flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span key={index} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="blue" />
          </aside>
        </div>
      </div>
    </div>
  );
}
