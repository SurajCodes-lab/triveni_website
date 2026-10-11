// Server component. The 'use client' directive was removed because this file
// has no state, effects, event handlers or browser APIs — it was being
// serialised into the hydration payload and re-executed in the browser for
// no reason. Re-add the directive if interactivity is introduced here.
import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Calendar, Clock, MapPin, Mountain, Thermometer, CloudSun,
  TreePine, ChevronRight, CheckCircle, Phone, Compass
} from '@/components/ui/icons';
import DynamicSidebar from '../DynamicSidebar';
import WhatsAppCTA from '../WhatsAppCTA';
import { rupeeText } from '@/utilis/pricing';

export default function NatureLayout({ post, relatedLinks }) {
  const formattedDate = new Date(post.date || Date.now()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FACF2D]/10 via-white to-white">
      {/* Nature Hero Section with Image */}
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
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 pb-10 sm:pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/90 mb-6 backdrop-blur-sm bg-white/10 w-fit px-4 py-2 rounded-full">
            <Link href="/" className="hover:text-[#FACF2D] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-[#FACF2D] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#FACF2D] font-semibold">{post.category || 'Nature & Hills'}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/40 bg-black/40 px-4 py-2 text-sm font-bold text-[#FACF2D] backdrop-blur-sm mb-6">
            <Mountain className="w-4 h-4" />
            Hill Station / Nature
          </div>

          {/* Title */}
          <h1
            className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
          >
            {post.title}
          </h1>
          <span aria-hidden="true" className="mt-5 block h-[4px] w-28 opacity-80 bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />

          {/* Meta Info */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
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

        {/* Nature Wave */}
        <svg className="absolute bottom-0 left-0 right-0 text-white" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,100 L0,100 Z" />
        </svg>
      </section>

      {/* Weather & Season Info */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
              <Thermometer className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              <p className="text-xs text-slate-500">Temperature</p>
              <p className="font-bold text-slate-900">15°C - 25°C</p>
            </div>
            <div className="text-center p-4 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
              <CloudSun className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              <p className="text-xs text-slate-500">Best Season</p>
              <p className="font-bold text-slate-900">
                {post.attractionData?.bestTimeToVisit?.season || 'Mar-Jun, Sep-Nov'}
              </p>
            </div>
            <div className="text-center p-4 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
              <Mountain className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              <p className="text-xs text-slate-500">Altitude</p>
              <p className="font-bold text-slate-900">2,000m+</p>
            </div>
            <div className="text-center p-4 bg-[#FACF2D]/10 rounded-xl ring-1 ring-[#FACF2D]/25">
              <Compass className="w-6 h-6 mx-auto mb-2 text-amber-600" />
              <p className="text-xs text-slate-500">Difficulty</p>
              <p className="font-bold text-slate-900">Easy to Moderate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Content Area */}
          <main className="lg:col-span-8">
            {/* Nature Tips Box */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8 border border-slate-200">
              <h3 className="font-display-serif font-bold text-slate-900 mb-3 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-amber-600" />
                Travel Tips for This Destination
              </h3>
              <ul className="grid md:grid-cols-2 gap-2 text-slate-700 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" /> Carry warm clothes even in summer
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" /> Book accommodation in advance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" /> Start early to avoid traffic
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-amber-600" /> Keep motion sickness pills handy
                </li>
              </ul>
            </div>

            {/* Content */}
            <article className="bg-white rounded-2xl p-8 shadow-xl">
              <div
                className="blog-prose prose prose-lg max-w-[70ch] mx-auto prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-3xl prose-h2:pb-3 prose-h2:mb-6 prose-h3:text-2xl prose-h3:text-slate-800 prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-amber-700 prose-a:font-semibold prose-li:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* WhatsApp CTA */}
            <WhatsAppCTA
              message={`Hi! I just read about ${post.title} on your blog. I'm interested in booking a trip to ${post.city || 'this destination'}. Can you help with details and pricing?`}
              buttonText="Get Free Quote on WhatsApp"
              variant="primary"
            />

            {/* Hill Station Tour CTA */}
            {relatedLinks?.relatedTours?.length > 0 && (
              <div className="relative overflow-hidden mt-8 bg-slate-950 ring-1 ring-white/10 rounded-2xl p-8 text-white">
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[4px] bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]" />
                <h3 className="font-display-serif text-2xl font-bold mb-4 flex items-center gap-2">
                  <Mountain className="w-6 h-6 text-[#FACF2D]" />
                  Plan Your Mountain Getaway
                </h3>
                <p className="mb-6 text-slate-300">
                  Experience the beauty of hills with our comfortable road trips. Expert drivers who know every curve of the mountain roads.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedLinks.relatedTours.slice(0, 2).map((tour, index) => (
                    <Link
                      key={index}
                      href={tour.url}
                      className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all group"
                    >
                      <h4 className="font-bold text-lg group-hover:text-[#FACF2D]">{tour.name}</h4>
                      <p className="text-slate-400 text-sm">{rupeeText(tour.price)} onwards</p>
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
                  <a
                    href="tel:+917668570551"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white transition-colors hover:bg-white/15"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-semibold text-slate-700 transition-colors hover:border-[#FACF2D] hover:bg-[#FACF2D] hover:text-black cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <DynamicSidebar post={post} relatedLinks={relatedLinks} theme="green" />
          </aside>
        </div>
      </div>
    </div>
  );
}
