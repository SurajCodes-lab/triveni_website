'use client';

import { useMemo } from 'react';
import SeasonalCorridorCallout from '@/components/seasonal/SeasonalCorridorCallout';
import dynamic from 'next/dynamic';
import Link from '@/components/ui/JourneyLink';
// Imported from the selector module, NOT the barrel: layouts/index.js re-exports
// all twelve layout components, so importing from it pulled every one of them
// into the bundle and defeated the dynamic imports below.
import { getLayoutComponent } from './layouts/selectLayout';
import RelatedPosts from './RelatedPosts';
import { FAQSection } from '@/components/seo/FAQSection';
import { generateBlogFAQs } from '@/lib/seo/faq-generator';
import { PopularRoutes } from '@/components/seo/RelatedContent';
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
import InlineCTA from '@/components/seo/InlineCTA';
import {
  Car, MapPin, Clock, Phone, ArrowRight, WhatsAppIcon,
  Zap, Landmark, Bus, IndianRupee, Plane, Church, Heart,
} from '@/components/ui/icons';
import { canonicalClientHref } from '@/lib/seo/client-route-exists';

const PHONE = '7668570551';
const WA_NUMBER = '917668570551';

// Highway lane marking — the recurring v2 divider motif (blog family).
const LANE = 'bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]';

// Loading placeholder for blog layouts — static skeleton (no infinite
// animation; INP/compositor discipline for the v2 blog family).
const LayoutLoading = () => (
  <div className="min-h-screen">
    <div className="h-64 bg-slate-200" />
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      <div className="h-8 bg-slate-200 rounded w-3/4" />
      <div className="h-4 bg-slate-200 rounded w-full" />
      <div className="h-4 bg-slate-200 rounded w-5/6" />
    </div>
  </div>
);

// Dynamically import layouts - only the needed one is loaded per page
const layoutComponents = {
  FortPalaceLayout: dynamic(() => import('./layouts/FortPalaceLayout'), { loading: LayoutLoading }),
  TempleLayout: dynamic(() => import('./layouts/TempleLayout'), { loading: LayoutLoading }),
  NatureLayout: dynamic(() => import('./layouts/NatureLayout'), { loading: LayoutLoading }),
  MonumentLayout: dynamic(() => import('./layouts/MonumentLayout'), { loading: LayoutLoading }),
  CityGuideLayout: dynamic(() => import('./layouts/CityGuideLayout'), { loading: LayoutLoading }),
  AdventureLayout: dynamic(() => import('./layouts/AdventureLayout'), { loading: LayoutLoading }),
  MagazineLayout: dynamic(() => import('./layouts/MagazineLayout'), { loading: LayoutLoading }),
  TimelineLayout: dynamic(() => import('./layouts/TimelineLayout'), { loading: LayoutLoading }),
  FullWidthLayout: dynamic(() => import('./layouts/FullWidthLayout'), { loading: LayoutLoading }),
  SplitScreenLayout: dynamic(() => import('./layouts/SplitScreenLayout'), { loading: LayoutLoading }),
  MinimalLayout: dynamic(() => import('./layouts/MinimalLayout'), { loading: LayoutLoading }),
  ModernCardLayout: dynamic(() => import('./layouts/ModernCardLayout'), { loading: LayoutLoading }),
};

// Generate BlogPosting Schema
function generateBlogPostingSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription || post.excerpt,
    "image": post.image || "https://www.trivenicabs.in/images/og-image.jpg",
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/images/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trivenicabs.in/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || '',
    "articleSection": post.category || "Travel",
    "wordCount": post.content?.split(/\s+/).length || 1000
  };
}

// Generate BreadcrumbList Schema
function generateBreadcrumbSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.trivenicabs.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.trivenicabs.in/blog/${post.slug}`
      }
    ]
  };
}

// Route-aware booking box. Everything it shows is resolved server-side in
// page.js (buildTripCTA) — fares come from oneWayCabData or are omitted.
function BookThisTripBox({ trip }) {
  const waHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(trip.waMessage)}`;
  const showRouteLink = trip.routeHref && trip.routeHref !== trip.ctaHref;

  return (
    <section
      className="my-10 px-4"
      aria-label={`Book a cab to ${trip.destination}`}
    >
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl ring-1 ring-white/10">
        {/* Lane top edge — v2 motif */}
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[4px] ${LANE}`} />
        <div className="relative p-6 sm:p-8 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#FACF2D]/20 blur-3xl"
          />
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] mb-3">
                Triveni Cabs™ · Since 2015
              </p>
              <h2 className="font-display-serif text-2xl sm:text-3xl font-bold leading-tight m-0">
                {trip.heading}
              </h2>
              <p className="mt-3 text-slate-300 text-[15px] sm:text-base leading-relaxed m-0">
                {trip.blurb}
              </p>

              {/* Fare is only ever present when page.js matched a real
                  Delhi-origin route in oneWayCabData. */}
              {trip.fare && (
                <p className="mt-5 text-lg sm:text-xl font-bold text-white m-0">
                  {`Cab from Delhi to ${trip.destination}`}
                  <span className="text-[#FACF2D]"> from {trip.fare}</span>
                  <span className="block text-sm font-medium text-slate-400 mt-1">
                    Sedan, one-way, all-inclusive. SUV and Tempo Traveller also available.
                  </span>
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
                {trip.distance && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-[#FACF2D]" />
                    {trip.distance}
                  </span>
                )}
                {trip.duration && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#FACF2D]" />
                    {trip.duration}
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-slate-200">
                  <Car className="w-3.5 h-3.5 text-[#FACF2D]" />
                  Sedan · SUV · Tempo
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-slate-200">
                  No advance deposit
                </span>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3">
              <Link
                href={canonicalClientHref(trip.ctaHref)}
                className="sheen inline-flex items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-6 py-3.5 text-base font-extrabold text-black shadow-[0_10px_30px_-8px_rgba(250,207,45,0.6)] transition hover:bg-[#ffdb4d] active:scale-[0.99]"
              >
                {trip.ctaText}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-emerald-400/60 px-6 py-3.5 text-base font-extrabold text-emerald-300 transition hover:bg-emerald-400/10"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp for a Quote
              </a>
              <a
                href={`tel:+91${PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-bold text-slate-200 transition hover:bg-white/5"
              >
                <Phone className="w-4 h-4" />
                Call {PHONE}
              </a>
              {showRouteLink && (
                <Link
                  href={canonicalClientHref(trip.routeHref)}
                  className="text-center text-xs font-semibold text-slate-400 underline underline-offset-4 transition hover:text-[#FACF2D]"
                >
                  See the full Delhi to {trip.destination} fare breakdown
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BlogPostPageClient({ post, tripCTA = null, relatedLinks = [], routes = [], moneyLinks = [], relatedPosts = [], seasonalCallout = null, glance = null, planningGuide = null }) {
  // Safety check
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  // relatedLinks, routes and moneyLinks now arrive as props, computed on the
  // server. They used to be derived here, which pulled sightseeingData.js
  // (1.3 MB) into the browser bundle for every blog page.

  // SEO: Generate FAQ, routes, and money page links
  const blogFAQs = useMemo(() => generateBlogFAQs({ city: post?.city, title: post?.title, tags: post?.tags, category: post?.category }), [post?.city, post?.title, post?.tags, post?.category]);

  // Determine which layout to use - 12 unique designs
  const layoutName = useMemo(() => {
    // First check if post has explicit attractionType
    if (post.attractionType) {
      return getLayoutComponent(post.attractionType);
    }

    // Check category for layout selection
    const category = post.category?.toLowerCase() || '';

    // Category-based layout mapping
    if (category.includes('pilgrimage') || category.includes('religious')) {
      return 'TempleLayout';
    }
    if (category.includes('hill station') || category.includes('nature')) {
      return 'NatureLayout';
    }
    if (category.includes('adventure')) {
      return 'AdventureLayout';
    }
    if (category.includes('city guide') || category.includes('food')) {
      return 'CityGuideLayout';
    }
    if (category.includes('heritage') || category.includes('monument')) {
      return 'MonumentLayout';
    }
    if (category.includes('destinations') || category.includes('travel tips')) {
      return 'MagazineLayout';
    }
    if (category.includes('vehicle guide') || category.includes('tempo') || category.includes('bus')) {
      return 'FullWidthLayout';
    }
    if (category.includes('seasonal')) {
      return 'TimelineLayout';
    }
    if (category.includes('special interest')) {
      return 'SplitScreenLayout';
    }
    if (category.includes('romantic') || category.includes('honeymoon') || category.includes('beach')) {
      return 'ModernCardLayout';
    }

    // Try to detect from tags
    const tags = post.tags?.map(t => t.toLowerCase()) || [];

    // Fort/Palace detection
    if (tags.some(t => ['fort', 'palace', 'forts', 'palaces', 'haveli', 'royal'].includes(t))) {
      return 'FortPalaceLayout';
    }

    // Temple/Religious detection
    if (tags.some(t => ['temple', 'religious', 'spiritual', 'pilgrimage', 'mosque', 'gurudwara', 'church', 'dargah'].includes(t))) {
      return 'TempleLayout';
    }

    // Nature detection
    if (tags.some(t => ['nature', 'hill station', 'hill stations', 'lake', 'waterfall', 'wildlife', 'national park', 'garden', 'beach', 'mountains'].includes(t))) {
      return 'NatureLayout';
    }

    // Adventure detection
    if (tags.some(t => ['adventure', 'trek', 'trekking', 'rafting', 'camping', 'sports', 'skiing'].includes(t))) {
      return 'AdventureLayout';
    }

    // City detection
    if (tags.some(t => ['city guide', 'city', 'urban', 'market', 'shopping', 'food'].includes(t))) {
      return 'CityGuideLayout';
    }

    // UNESCO/Monument detection
    if (tags.some(t => ['unesco', 'monument', 'historical', 'heritage', 'memorial', 'museum'].includes(t))) {
      return 'MonumentLayout';
    }

    // Magazine style for destination content
    if (tags.some(t => ['destinations', 'travel tips', 'guide'].includes(t))) {
      return 'MagazineLayout';
    }

    // Timeline for historical content
    if (tags.some(t => ['history', 'ancient', 'seasonal', 'winter', 'summer', 'monsoon'].includes(t))) {
      return 'TimelineLayout';
    }

    // Full width for vehicle content
    if (tags.some(t => ['tempo traveller', 'bus', 'vehicle', 'car rental'].includes(t))) {
      return 'FullWidthLayout';
    }

    // Split screen for special content
    if (tags.some(t => ['special', 'featured', 'premium'].includes(t))) {
      return 'SplitScreenLayout';
    }

    // Minimal for tips and guides
    if (tags.some(t => ['tips', 'how to', 'checklist'].includes(t))) {
      return 'MinimalLayout';
    }

    // Modern card for luxury/romantic
    if (tags.some(t => ['romantic', 'honeymoon', 'luxury', 'resort'].includes(t))) {
      return 'ModernCardLayout';
    }

    // Default to Monument layout
    return 'MonumentLayout';
  }, [post.attractionType, post.tags, post.category]);

  // Get the layout component (fallback to MonumentLayout via dynamic import)
  const LayoutComponent = layoutComponents[layoutName] || layoutComponents.MonumentLayout;

  return (
    <>
      {/* BlogPosting Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBlogPostingSchema(post))
        }}
      />
      {/* BreadcrumbList Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(post))
        }}
      />

      {/* Visual Breadcrumb */}
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <SEOBreadcrumb
          items={[
            { name: 'Blog', url: '/blog' },
            { name: post.title }
          ]}
          variant="minimal"
        />
      </div>

      {/* Quick Answer — featured-snippet bait for "<attraction> timings/entry fee" intent */}
      {post.quickAnswer && (
        <div className="max-w-5xl mx-auto px-4 mt-4">
          <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-[#FFF6DC] to-amber-50 p-5 sm:p-6 shadow-sm">
            <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${LANE}`} />
            <div className="flex items-center gap-2.5 mb-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FACF2D]/20">
                <Zap className="h-4 w-4 text-amber-600" />
              </span>
              <h2 className="font-display-serif text-lg sm:text-xl font-bold text-amber-900 m-0">Quick Answer</h2>
            </div>
            <p className="blog-summary text-[15px] sm:text-base leading-relaxed text-gray-800 m-0">
              {post.quickAnswer}
            </p>
          </div>
        </div>
      )}

      {/* Week 48: at-a-glance rows for the monument guides: hours, closed day,
          ticket, read from the post's own attractionData (see
          src/lib/seo/monument-glance.js). Server-rendered, above the fold. */}
      {glance && (
        <div className="max-w-5xl mx-auto px-4 mt-4">
          <section aria-labelledby="glance-heading" className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
            <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] ${LANE}`} />
            <div className="flex items-center gap-2.5 mb-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FACF2D]/20">
                <Landmark className="h-4 w-4 text-amber-600" />
              </span>
              <h2 id="glance-heading" className="font-display-serif text-lg sm:text-xl font-bold text-slate-900 m-0">{glance.name} at a glance</h2>
            </div>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 m-0">
              {glance.rows.map((r) => (
                <div key={r.label} className="flex items-baseline justify-between gap-3 border-b border-dashed border-slate-200 py-1.5">
                  <dt className="text-[13px] font-semibold uppercase tracking-wide text-slate-500 m-0">{r.label}</dt>
                  <dd className="text-right text-[15px] font-medium text-slate-900 m-0">{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs text-slate-500 m-0">
              As printed in this guide{glance.publishedLabel ? `, published ${glance.publishedLabel}` : ''}. Hours and fees change on festival days; the driver checks the day&apos;s timing before you leave.
            </p>
          </section>
        </div>
      )}

      {/* The planning guide used to render here, above the article. Measured at
          360px it was 1,119px tall, which pushed the post's own h1 down to
          2,355px — nearly three phone screens before the reader reached the
          title of the page they had just opened. It is a "plan your visit"
          section, so it belongs after the guide it supports, not in front of
          it. The Quick Answer and at-a-glance cards above stay where they are:
          they are short, and they are the direct answer for someone who
          searched for timings or an entry fee. */}
      <LayoutComponent post={post} relatedLinks={relatedLinks} />
      {planningGuide}

      {/* Conversion unit, prime slot — the reader has just finished the article.
          Route-aware box when we resolved a destination, generic InlineCTA
          otherwise, so every post gets exactly one booking unit here. */}
      {tripCTA ? (
        <BookThisTripBox trip={tripCTA} />
      ) : (
        <div className="max-w-5xl mx-auto px-4">
          <InlineCTA
            theme="blog"
            headline="Planning This Trip? We Drive It Daily."
            sub="Sedan ₹11/km · SUV ₹15/km · Tempo Traveller from ₹23/km. Fixed all-inclusive fares, no advance deposit."
            context={`blog_${post.slug}`}
            waMessage={`Hi Triveni Cabs™, I read "${post.title}" on your blog and want to book a cab. Please share fares and availability.`}
          />
        </div>
      )}

      {/* Related Service Pages — SEO internal linking based on blog category */}
      <section className="relative py-12 px-4 bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white border-t border-amber-100">
        <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-[4px] ${LANE}`} />
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display-serif text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center">
            Related Services for Your {post.city || post.category || 'Travel'} Trip
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {post.city && (
              <Link
                href={`/sightseeing/${post.city.toLowerCase().replace(/\s+/g, '-')}`}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
              >
                <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                  <Landmark className="h-5 w-5 text-amber-600" />
                </span>
                <p className="text-sm font-semibold text-slate-900">{post.city} Sightseeing</p>
                <p className="text-xs text-slate-500 mt-1">Guided tours</p>
              </Link>
            )}
            <Link
              href="/tempo-traveller"
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
            >
              <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                <Bus className="h-5 w-5 text-amber-600" />
              </span>
              <p className="text-sm font-semibold text-slate-900">Tempo Traveller</p>
              <p className="text-xs text-slate-500 mt-1">12–26 seater from ₹23/km</p>
            </Link>
            <Link
              href="/pricing"
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
            >
              <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                <IndianRupee className="h-5 w-5 text-amber-600" />
              </span>
              <p className="text-sm font-semibold text-slate-900">View Pricing</p>
              <p className="text-xs text-slate-500 mt-1">Sedan from ₹11/km</p>
            </Link>
            <Link
              href="/airport-service"
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
            >
              <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                <Plane className="h-5 w-5 text-amber-600" />
              </span>
              <p className="text-sm font-semibold text-slate-900">Airport Transfer</p>
              <p className="text-xs text-slate-500 mt-1">24/7 pickup & drop</p>
            </Link>
            {(post.category === 'Pilgrimage' || post.tags?.some(t => ['temple', 'pilgrimage', 'spiritual'].includes(t))) && (
              <Link
                href="/religious-tours"
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
              >
                <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                  <Church className="h-5 w-5 text-amber-600" />
                </span>
                <p className="text-sm font-semibold text-slate-900">Pilgrimage Tours</p>
                <p className="text-xs text-slate-500 mt-1">Chardham, Vaishno Devi & more</p>
              </Link>
            )}
            <Link
              href="/wedding"
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
            >
              <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                <Heart className="h-5 w-5 text-amber-600" />
              </span>
              <p className="text-sm font-semibold text-slate-900">Wedding Cars</p>
              <p className="text-xs text-slate-500 mt-1">BMW, Audi, Mercedes</p>
            </Link>
            <Link
              href="/contact"
              className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FACF2D] hover:shadow-lg"
            >
              <span className="mx-auto mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                <Phone className="h-5 w-5 text-amber-600" />
              </span>
              <p className="text-sm font-semibold text-slate-900">Contact Us</p>
              <p className="text-xs text-slate-500 mt-1">Get a free quote</p>
            </Link>
          </div>
        </div>
      </section>

      {/* SEO: FAQ Section */}
      {blogFAQs.length > 0 && <FAQSection faqs={blogFAQs} title="Common Travel Questions" />}

      {/* SEO: Popular Routes */}
      {routes.length > 0 && <PopularRoutes city={post.city} routes={routes} />}

      {/* In-window festival / yatra call-out for the post's destination (server-resolved). */}
      <SeasonalCorridorCallout callout={seasonalCallout} />


      {/* Second conversion unit — catches readers who scrolled past the box
          above into the FAQ and route links. Skipped when the box above was
          already the generic InlineCTA, to avoid showing the same card twice. */}
      {tripCTA && (
        <div className="max-w-5xl mx-auto px-4">
          <InlineCTA
            theme="blog"
            variant="banner"
            className="my-10"
            headline={`Still deciding? Get a ${tripCTA.destination} quote in 2 minutes.`}
            sub={tripCTA.fare
              ? `${tripCTA.fromDelhi ? `Delhi to ${tripCTA.destination}` : tripCTA.destination} from ${tripCTA.fare} — all-inclusive, no advance deposit.`
              : 'Fixed all-inclusive fares, vetted drivers, 24×7 support.'}
            context={`blog_${post.slug}`}
            waMessage={tripCTA.waMessage}
          />
        </div>
      )}

      {/* Related Posts */}
      <div className="max-w-5xl mx-auto px-4">
        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  );
}
