// Server component. The 'use client' directive was removed because this file
// has no state, effects, event handlers or browser APIs — it was being
// serialised into the hydration payload and re-executed in the browser for
// no reason. Re-add the directive if interactivity is introduced here.
import Image from 'next/image';
import Link from '@/components/ui/JourneyLink';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, History, Scroll,
  ChevronRight, Phone, ChevronDown, Milestone, Compass
} from '@/components/ui/icons';
import WhatsAppCTA from '../WhatsAppCTA';
import { rupeeText } from '@/utilis/pricing';

export default function TimelineLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FACF2D]/10 via-white to-white">
      {/* Vintage-Style Header */}
      <div className="relative bg-slate-950 text-white overflow-hidden">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="vintage-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
            <rect x="0" y="0" width="100" height="100" fill="url(#vintage-pattern)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 py-10 sm:py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D]">{post.category}</span>
          </nav>

          {/* Title Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#FACF2D]/15 ring-1 ring-[#FACF2D]/30 rounded-xl">
                  <History className="w-6 h-6 text-[#FACF2D]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#FACF2D]">Historical Journey</p>
                  <p className="text-slate-400 text-sm">{post.category}</p>
                </div>
              </div>

              <h1 className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {post.title}
              </h1>

              <span
                aria-hidden="true"
                className="my-6 block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]"
              />

              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <Calendar className="w-4 h-4 text-[#FACF2D]" />
                  {formattedDate}
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <Clock className="w-4 h-4 text-[#FACF2D]" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
                  <MapPin className="w-4 h-4 text-[#FACF2D]" />
                  {post.city}
                </span>
              </div>
            </div>

            {/* Hero Image with Vintage Frame */}
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-[#FACF2D]/30 rounded-lg" />
              <div className="absolute -inset-2 border border-[#FACF2D]/20 rounded-lg" />
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src={post.heroImage || post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
              </div>
              {/* Vintage corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#FACF2D]/50" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-[#FACF2D]/50" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-[#FACF2D]/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-[#FACF2D]/50" />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center mt-12 text-slate-500">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll to Explore</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Timeline Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 sm:py-20">
        {/* Timeline Line */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FACF2D] via-amber-500 to-amber-600" />

          {/* Timeline Start */}
          <div className="relative flex items-center justify-center mb-10 sm:mb-16">
            <div className="w-16 h-16 bg-[#FACF2D] rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25 z-10">
              <Scroll className="w-7 h-7 text-black" />
            </div>
          </div>

          {/* Article Content as Timeline */}
          <article className="relative">
            <div
              className="blog-prose prose prose-lg max-w-none prose-headings:relative prose-headings:ml-16 lg:prose-headings:ml-0 prose-h2:text-2xl prose-h2:font-bold prose-h2:text-slate-900 prose-h2:before:content-[''] prose-h2:before:absolute prose-h2:before:-left-12 lg:prose-h2:before:left-1/2 prose-h2:before:transform lg:prose-h2:before:-translate-x-1/2 prose-h2:before:-translate-y-1 prose-h2:before:w-6 prose-h2:before:h-6 prose-h2:before:bg-[#FACF2D] prose-h2:before:rounded-full prose-h2:before:border-4 prose-h2:before:border-white prose-h2:before:shadow-md prose-h3:text-xl prose-h3:text-slate-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-p:ml-16 lg:prose-p:ml-0 prose-li:text-slate-700 prose-li:ml-16 lg:prose-li:ml-0 prose-a:text-amber-700 prose-a:font-semibold prose-strong:text-slate-900"
            >
              {/* Wrapped Content Sections */}
              <div className="space-y-12">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </article>

          {/* Timeline End */}
          <div className="relative flex items-center justify-center mt-10 sm:mt-16">
            <div className="w-16 h-16 bg-[#FACF2D] rounded-full flex items-center justify-center shadow-lg shadow-amber-500/25 z-10">
              <Milestone className="w-7 h-7 text-black" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Info Cards */}
      {post.attractionData && (
        <div className="relative overflow-hidden bg-slate-950 py-10 sm:py-16">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="font-display-serif text-center text-white text-2xl font-bold mb-10">Visitor Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-5 h-5 text-[#FACF2D]" />
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Timings</p>
                <p className="text-gold-foil font-semibold">{post.attractionData.timings?.open || '9 AM'} - {post.attractionData.timings?.close || '5 PM'}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-5 h-5 text-[#FACF2D]" />
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Best Time</p>
                <p className="text-white font-semibold">{post.attractionData.bestTimeToVisit?.season || 'Oct - Mar'}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-[#FACF2D]" />
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white font-semibold">{post.city}</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <History className="w-5 h-5 text-[#FACF2D]" />
                </div>
                <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Duration</p>
                <p className="text-white font-semibold">{post.attractionData.timeNeeded || '2-3 Hours'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tags Section */}
      <div className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {post.tags?.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm font-semibold text-slate-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <WhatsAppCTA
            message={`Hi! I just read about ${post.title}. I'd like to plan a historical tour to ${post.city || 'this destination'}. Can you help?`}
            buttonText="Get Free Quote on WhatsApp"
            variant="primary"
          />
        </div>
      </section>

      {/* Book Tour CTA */}
      {relatedLinks?.relatedTours?.length > 0 && (
        <div className="relative overflow-hidden bg-slate-950 ring-1 ring-white/10 py-10 sm:py-16">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="font-display-serif text-3xl font-bold text-white mb-3">
                Experience This Historic Site
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Explore the rich history and heritage with our guided tours and comfortable transport services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {relatedLinks.relatedTours.slice(0, 2).map((tour, i) => (
                <Link
                  key={i}
                  href={tour.url}
                  className="bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 rounded-2xl p-6 transition-all group"
                >
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-[#FACF2D] transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-slate-400">{rupeeText(tour.price)} onwards</p>
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={relatedLinks.cityTours || '/sightseeing'}
                className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-8 py-3.5 font-extrabold text-black transition hover:bg-[#ffdb4d]"
              >
                View All Tours
              </Link>
              <a
                href="tel:+917668570551"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/15"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Internal Links Section */}
      <div className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Explore More</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {relatedLinks?.cityPage && (
              <Link
                href={relatedLinks.cityPage}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group border border-slate-200"
              >
                <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                  <MapPin className="w-5 h-5 text-amber-600 group-hover:text-black" />
                </div>
                <h3 className="font-bold text-slate-900">Explore {post.city}</h3>
                <p className="text-slate-500 text-sm mt-1">City Guide & Routes</p>
              </Link>
            )}
            {relatedLinks?.airportService && (
              <Link
                href={relatedLinks.airportService}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group border border-slate-200"
              >
                <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                  <span className="text-xl">✈️</span>
                </div>
                <h3 className="font-bold text-slate-900">Airport Transfer</h3>
                <p className="text-slate-500 text-sm mt-1">Pickup & Drop Service</p>
              </Link>
            )}
            <Link
              href="/sightseeing"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group border border-slate-200"
            >
              <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                <Compass className="w-5 h-5 text-amber-600 group-hover:text-black" />
              </div>
              <h3 className="font-bold text-slate-900">All Destinations</h3>
              <p className="text-slate-500 text-sm mt-1">Browse All Tours</p>
            </Link>
            <Link
              href="/blog"
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group border border-slate-200"
            >
              <div className="w-12 h-12 bg-[#FACF2D]/15 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#FACF2D] transition-colors">
                <History className="w-5 h-5 text-amber-600 group-hover:text-black" />
              </div>
              <h3 className="font-bold text-slate-900">More Articles</h3>
              <p className="text-slate-500 text-sm mt-1">Travel Guides & Tips</p>
            </Link>
          </div>

          {/* Quick Links */}
          {relatedLinks?.quickLinks?.length > 0 && (
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {relatedLinks.quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full text-slate-700 hover:border-[#FACF2D] hover:bg-[#FACF2D]/10 hover:text-amber-700 transition-colors shadow-sm border border-slate-200"
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
