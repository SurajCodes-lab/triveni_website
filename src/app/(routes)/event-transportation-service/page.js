import Link from 'next/link';
import Image from 'next/image';
import { getDeterministicReviewCount } from "@/lib/seo/review-helpers";
import {
  eventCategories,
  eventServices,
  eventFleet,
  eventBenefits,
  eventFAQs,
  eventDirectAnswer,
  eventFleetTable,
  eventBookingSteps,
  eventPricingGuidance,
  eventVsTypicalVendor,
  eventPlanningChecklist,
  getAllEventCities,
  getAllEventTypes
} from '@/utilis/eventTransportData';
import { getWeddingPages, getServicePages } from '@/utilis/linkingHelper';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getComparisonSchema,
  getTodayDate
} from '@/lib/seo/speakable-helpers';
import AEOHead from '@/components/seo/AEOHead';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import BookingJourney from '@/components/shared/BookingJourney';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SectionDivider from '@/components/shared/SectionDivider';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
// Centralized icon imports for better bundle optimization
import {
  Phone,
  MapPin,
  Users,
  Shield,
  Clock,
  ChevronRight,
  Building2,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Star,
  TrendingUp,
  Car,
  HelpCircle
} from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Event Transportation Service — Wedding & Corporate | Triveni'),
  description: 'Event transportation for weddings, corporate events & festivals. 500+ vehicles across 12 cities, dedicated coordinator, GST invoice, 24/7 support. Free quote.',
  keywords: [
    'event transportation services',
    'wedding guest shuttle',
    'corporate event cabs',
    'conference transportation',
    'festival shuttle service',
    'baraat bus rental',
    'sangeet transport',
    'group bus rental for events',
    'MICE transport',
    'concert shuttle service',
    'exhibition transport delhi ncr',
    'sports event transport',
    'destination wedding transport rajasthan',
    'wedding car rental with driver',
    'corporate offsite transport',
    'team outing bus booking',
    'religious event transport',
    'guest pickup coordination',
    'event logistics company',
    'wedding bus jaipur',
    'event transport delhi ncr',
    'multi-city event transport'
  ].join(', '),
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/event-transportation-service',
    languages: {
      'en-IN': '/event-transportation-service',
    },
  },
  openGraph: {
    title: 'Event Transportation — Wedding, Corporate, MICE & Festival Fleet Across North India',
    description: 'From wedding guest shuttles and decorated baraat cars to conference fleets, concert shuttles and exhibition transport — one coordinator, 500+ vehicles, fixed pricing, GST invoicing and 24/7 event-day support. Trusted for 500+ events.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/event-transportation-service',
    siteName: 'Triveni Cabs™',
    images: [
      {
        url: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Transportation Services - Wedding, Corporate & Festival Transport'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Transportation Service — Wedding & Corporate | Triveni',
    description: 'Weddings, corporate events, MICE & festivals. 500+ vehicles, 12 cities, dedicated coordinator, GST invoice, 24/7 support. Get a free quote.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Delhi/Delhi_hero_section.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'Transportation Services',
};

export default function EventTransportationPage() {
  const cities = getAllEventCities();
  const eventTypes = getAllEventTypes();

  const pageSlug = 'event-transportation-service';
  const pageUrl = `https://www.trivenicabs.in/${pageSlug}`;
  const ogImage = '/images/sightseeing/Delhi/Delhi_hero_section.jpg';
  // Deterministic per-slug rating + 3 named event reviews (NOT 10000 — Service/Product level).
  const eventRatingReviews = getRatingAndReviews(pageSlug, 'event');

  // Schema markup - Comprehensive structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.trivenicabs.in/#organization",
    "name": "Triveni Cabs",
    "alternateName": "Triveni Cab Service",
    "url": "https://www.trivenicabs.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trivenicabs.in/logo.png",
      "width": 200,
      "height": 60
    },
    "image": "https://www.trivenicabs.in/images/sightseeing/Delhi/Delhi_hero_section.jpg",
    "description": "Premium cab and transportation services across North India including Delhi, Jaipur, Chandigarh, Agra, and Dehradun.",
    "foundingDate": "2015",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 18",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5706",
      "longitude": "77.3211"
    },
    "sameAs": [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/cabstriveni",
      "https://twitter.com/trivenicabs",
      "https://www.linkedin.com/company/trivenicabs"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "customer service",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.trivenicabs.in/#localbusiness",
    "name": "Triveni Cabs",
    "image": "https://www.trivenicabs.in/images/sightseeing/Delhi/Delhi_hero_section.jpg",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "url": "https://www.trivenicabs.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 18",
      "addressLocality": "Noida",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "201301",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.5706",
      "longitude": "77.3211"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "₹₹"
  }; // LocalBusiness brand-level reviewCount kept (legitimate aggregate per Apr 2026 audit)

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.trivenicabs.in/event-transportation-service/#service",
    "serviceType": "Event Transportation Service",
    "name": "Event Transportation Services",
    "description": "Professional event transportation services for weddings, corporate events, concerts, festivals, and religious gatherings across North India.",
    "provider": {
      "@id": "https://www.trivenicabs.in/#localbusiness"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "State", "name": "Delhi" } },
      { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Jaipur", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "State", "name": "Chandigarh" } },
      { "@type": "City", "name": "Agra", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Dehradun", "containedInPlace": { "@type": "State", "name": "Uttarakhand" } }
    ],
    "hasOfferCatalog": {
      "@type": "ItemList",
      "name": "Event Transportation Services",
      "itemListElement": [
        {
            "@type": "Service",
            "name": "Wedding Transportation",
            "description": "Complete wedding guest transportation including baraat, vidai, and venue shuttles"
          },
        {
            "@type": "Service",
            "name": "Corporate Event Transport",
            "description": "Professional transportation for conferences, seminars, and corporate gatherings"
          },
        {
            "@type": "Service",
            "name": "Concert & Festival Shuttles",
            "description": "Group transportation for concerts, music festivals, and sporting events"
          },
        {
            "@type": "Service",
            "name": "Religious Event Transport",
            "description": "Transportation for pilgrimages, temple visits, and religious ceremonies"
          }
      ]
    },
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    ...eventRatingReviews
  };

  // Product schema — fleet vehicle classes as Offers (group-transport "Offer/Product" coverage).
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}/#product`,
    "name": "Event Transportation Fleet — Triveni Cabs",
    "description": "Event vehicle fleet for weddings, corporate events, MICE, concerts and festivals: luxury sedans, SUVs, 12-26 seater tempo travellers, 32-56 seater AC buses and decorated wedding cars, with a dedicated coordinator, GPS tracking and a 30-minute backup-vehicle SLA.",
    "image": `https://www.trivenicabs.in${ogImage}`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "category": "Event Transportation",
    // Week 53. These Offer nodes carried a priceCurrency and no price, which is
    // the critical Product-snippets error Search Console reports: "Either
    // 'price' or 'priceSpecification.price' should be specified (in 'offers')".
    //
    // eventFleetTable already holds a real published priceRange per vehicle —
    // "₹18–22/km", "₹23–27/km", "₹55–85/km" — so the lower bound of that
    // published range becomes a UnitPriceSpecification. Two rows read
    // "On request" and genuinely have no figure; those emit no Offer at all
    // rather than an Offer asserting a price that does not exist. A fleet with
    // three priced offers is valid; five price-less ones are not.
    "offers": eventFleetTable
      .map((v) => {
        const from = /(\d+)/.exec(String(v.priceRange || ''));
        if (!from) return null;
        return {
          "@type": "Offer",
          "name": v.name,
          "description": `${v.capacity}. Ideal for ${v.ideal}. Options: ${v.vehicles.join(', ')}.`,
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": from[1],
            "priceCurrency": "INR",
            "unitText": "per kilometer",
            "valueAddedTaxIncluded": false
          },
          "availability": "https://schema.org/InStock",
          "seller": { "@id": "https://www.trivenicabs.in/#localbusiness" }
        };
      })
      .filter(Boolean),
    ...eventRatingReviews
  };

  // ItemList — event types + city event pages (sub-page entity graph for AEO/GEO).
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}/#solutions`,
    "name": "Event Transportation Solutions by Event Type & City",
    "itemListElement": [
      ...eventTypes.map((ev, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": ev.name,
        "url": `${pageUrl}/${ev.slug}`
      })),
      ...cities.map((c, i) => ({
        "@type": "ListItem",
        "position": eventTypes.length + i + 1,
        "name": `Event Transport in ${c.name}`,
        "url": `${pageUrl}/city/${c.slug}`
      }))
    ]
  };

  // HowTo: how to book event transportation (visible <ol> + schema).
  const howToSchema = getHowToSchema({
    name: 'How to Book Event Transportation with Triveni Cabs',
    description: 'Five steps to arrange group transport for any event: share your brief, get a transparent quote, confirm and lock the fleet, complete pre-event coordination, and go live with 24/7 event-day support.',
    totalTime: 'P2D',
    steps: eventBookingSteps.map((s) => ({ name: s.title, text: s.description }))
  });

  // Comparison schema: Triveni vs typical event vendors (Table + Article for featured snippets).
  const comparisonSchemas = getComparisonSchema({
    slug: pageSlug,
    title: 'Event Transportation: Triveni Cabs™ vs Typical Event Vendors',
    description: 'Feature-by-feature comparison of Triveni Cabs™ event transportation versus typical local single-city event vendors across account management, GST invoicing, pricing model, fleet coordination, driver verification and backup SLA.',
    rows: eventVsTypicalVendor,
    mentions: ['Wedding transportation', 'Corporate event transport', 'MICE transport', 'GST invoice', 'Festival shuttle']
  });

  // Article schema (E-E-A-T + freshness + Speakable wiring).
  const articleSchema = getArticleSchema({
    slug: pageSlug,
    headline: 'Event Transportation Service in India — Wedding, Corporate, MICE & Festival Group Transport',
    description: 'A complete guide to event transportation in North India: event types, fleet capacity, transparent pricing, how to book, multi-city coverage, planning checklist and how Triveni Cabs™ compares to typical event vendors.',
    image: ogImage,
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn('/event-transportation-service') || getTodayDate()),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Visible comparison rows (alias for the table render below).
  const comparisonRows = eventVsTypicalVendor;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.trivenicabs.in/services" },
      { "@type": "ListItem", "position": 3, "name": "Event Transportation Service", "item": pageUrl }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": eventFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // GEO: Place anchor for the primary service area (Delhi NCR HQ) with a
  // Place -> Country (India) containment chain, listing every served event
  // city as a containsPlace child. Grounds the hub to a real geographic entity.
  const servicePlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${pageUrl}/#servicearea`,
    "name": "Triveni Cabs Event Transportation Service Area — North India",
    "description": "Primary event transportation service area spanning Delhi NCR and key North-India event hubs.",
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "28.6139",
      "longitude": "77.2090"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi NCR",
      "addressRegion": "Delhi",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "containedInPlace": {
      "@type": "Country",
      "name": "India"
    },
    "containsPlace": cities.map((c) => ({
      "@type": "City",
      "name": c.name,
      "url": `${pageUrl}/city/${c.slug}`
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {comparisonSchemas.map((s, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicePlaceSchema) }} />
      <AEOHead pageType="event" data={{ url: '/event-transportation-service', title: 'Event Transportation Service' }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen Premium Design */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
              alt="Event Transportation Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[150px]" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px]" style={{ animationDelay: '2s' }} />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="relative inline-block">
                  <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                    <Calendar className="w-6 h-6 text-cyan-300" />
                    <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">Event Transportation</span>
                  </div>
                </div>

                <h1 className="speakable-headline font-display-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                  Event Transportation
                  <span className="block mt-2 text-gold-foil">
                    Service
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                  Weddings, corporate events, MICE, concerts &amp; festivals - one coordinator, 500+ vehicles, fixed pricing and 24/7 event-day support.
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '500+', label: 'Events Served', icon: Calendar },
                    { value: '500+', label: 'Fleet Size', icon: Car },
                    { value: '5', label: 'Cities', icon: MapPin }
                  ].map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 transition-colors shadow-lg shadow-cyan-500/10">
                          <stat.icon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-black text-white">{stat.value}</div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="tel:+917668570551"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-b from-[#FFE9A0] via-[#FACF2D] to-[#E6B800] text-black px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(250,207,45,0.55)] hover:brightness-105 transition-all duration-300 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
                  >
                    <Phone className="w-5 h-5" />
                    Get Event Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="https://wa.me/917668570551?text=I need event transportation service"
                    className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right Side - Event Cards */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl" />
                  <div className="relative grid grid-cols-2 gap-4">
                    {[
                      { title: 'Weddings', desc: 'Guest & baraat transport', icon: Users },
                      { title: 'Corporate', desc: 'Conference shuttles', icon: Building2 },
                      { title: 'MICE', desc: 'Exhibition logistics', icon: TrendingUp },
                      { title: 'Religious', desc: 'Pilgrimage services', icon: Star }
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProofStrip theme="light" />

        {/* Trust Bar */}
        <section className="py-6 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {[
                { icon: Shield, text: 'Verified Drivers', color: 'text-green-400' },
                { icon: Clock, text: '24/7 Support', color: 'text-cyan-400' },
                { icon: TrendingUp, text: 'GPS Tracking', color: 'text-blue-400' },
                { icon: Car, text: '500+ Vehicles', color: 'text-yellow-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Answer / Overview — AEO/GEO entity-dense lead */}
        <section className="py-16 md:py-24 px-4 bg-[#FFF6DC] border-b border-amber-900/10">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-slate-900 mb-5 text-center">
              What Is Event Transportation Service?
            </h2>
            <p className="speakable-lead text-lg text-slate-600 leading-relaxed text-center max-w-4xl mx-auto">
              {eventDirectAnswer}
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '500+', label: 'Fleet Vehicles' },
                { value: '5+', label: 'Cities Served' },
                { value: '500+', label: 'Events Handled' },
                { value: '24/7', label: 'Event-Day Ops' }
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/70 ring-1 ring-amber-900/10 p-5 text-center">
                  <div className="text-2xl md:text-3xl font-black text-gold-foil">{s.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-b from-[#FFE9A0] via-[#FACF2D] to-[#E6B800] text-black px-7 py-3.5 rounded-2xl font-bold shadow-[0_10px_30px_-10px_rgba(250,207,45,0.55)] hover:brightness-105 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                Get a Free Event Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Enquiry Form — desktop lead path */}
        <section className="py-16 md:py-24 px-4 bg-slate-950">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Get a Free Event Transport Quote</h2>
              <p className="text-slate-300 leading-relaxed">Share your event type, city, dates and guest count. Our event desk replies within minutes with a fixed, all-inclusive quote and a dedicated coordinator — GST invoice included.</p>
            </div>
            <div className="flex lg:justify-end">
              <QuickEnquiryForm pageType="event" />
            </div>
          </div>
        </section>

        {/* Event Categories Section - All from PPT */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <div className="relative inline-block">
                <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                  <Calendar className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold text-sm tracking-wider uppercase">Events We Serve</span>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Transportation for
                <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text">Every Occasion</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive event transport solutions for corporate, social, MICE and large-scale gatherings
              </p>
            </div>

            {/* Event Categories Grid - Clean Card Layout */}
            <div className="grid md:grid-cols-2 gap-6">
              {eventCategories.map((category, idx) => {
                const cardColors = [
                  { bg: 'from-cyan-500 to-blue-600', shadow: 'shadow-cyan-500/30', light: 'bg-cyan-50', text: 'text-cyan-600' },
                  { bg: 'from-indigo-500 to-violet-600', shadow: 'shadow-indigo-500/30', light: 'bg-indigo-50', text: 'text-indigo-600' },
                  { bg: 'from-teal-500 to-emerald-600', shadow: 'shadow-teal-500/30', light: 'bg-teal-50', text: 'text-teal-600' },
                  { bg: 'from-slate-600 to-slate-800', shadow: 'shadow-slate-500/30', light: 'bg-slate-100', text: 'text-slate-600' }
                ];
                const colors = cardColors[idx];

                return (
                  <div key={category.id} className="group">
                    <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 overflow-hidden h-full">
                      {/* Card Header */}
                      <div className={`bg-gradient-to-r ${colors.bg} p-6`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl border border-white/30">
                              {category.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{category.title}</h3>
                              <p className="text-white/80 text-sm">{category.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Events List */}
                      <div className="p-6">
                        <div className="grid grid-cols-1 gap-3">
                          {category.events.map((event, eIdx) => (
                            <div
                              key={eIdx}
                              className={`flex items-center gap-3 p-3 rounded-xl ${colors.light} border border-transparent hover:border-slate-200 transition-colors`}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${colors.bg} flex items-center justify-center flex-shrink-0 ${colors.shadow} shadow-sm`}>
                                <CheckCircle2 className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className="font-semibold text-slate-800 text-sm block">{event.name}</span>
                                <span className="text-slate-500 text-xs">{event.desc}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Card Footer CTA */}
                        <div className="mt-4 pt-4 border-t border-slate-100">
                          <Link
                            href="tel:+917668570551"
                            className={`inline-flex items-center gap-2 ${colors.text} font-semibold text-sm hover:gap-3 transition-all`}
                          >
                            <Phone className="w-4 h-4" />
                            Get Quote for {category.title}
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Event Services Section - From PPT Slide 6 */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <div className="relative inline-block">
                <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                  <Sparkles className="w-6 h-6 text-cyan-300" />
                  <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">Our Services</span>
                </div>
              </div>

              <h2 className="font-display-serif text-5xl md:text-7xl font-bold text-white mt-10 mb-6 leading-tight">
                Event Transport
                <span className="block mt-2 text-gold-foil">
                  Services
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Complete event transportation solutions from guest pickups to real-time coordination
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {eventServices.map((service, idx) => (
                <div key={service.id} className="group relative">
                  <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                    idx === 0 ? 'bg-cyan-500' :
                    idx === 1 ? 'bg-blue-500' :
                    'bg-indigo-500'
                  }`} />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                      idx === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/40' :
                      idx === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                      'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40'
                    }`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{service.title}</h3>

                    <div className="space-y-3">
                      {service.services.map((item, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                          <div>
                            <span className="text-white text-sm font-medium">{item.name}</span>
                            <p className="text-slate-400 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section - Similar to Corporate */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                <Car className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Event Fleet</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Vehicles for
                <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text">Every Event</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From luxury sedans for VIPs to buses for large groups - we have the right vehicle for your event
              </p>
            </div>

            {/* Fleet Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventFleet.map((vehicle, idx) => (
                <div
                  key={vehicle.id}
                  className={`group relative overflow-hidden rounded-[2rem] ${
                    vehicle.highlight ? 'lg:col-span-1' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden rounded-t-[2rem]">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

                    {/* Badge */}
                    {vehicle.highlight && (
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        POPULAR
                      </div>
                    )}

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/30">
                      <span className="text-white text-sm font-semibold">{vehicle.priceRange}</span>
                    </div>

                    {/* Vehicle Info on Image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{vehicle.icon}</span>
                        <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                      </div>
                      <p className="text-cyan-300 text-sm font-medium">{vehicle.capacity}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-b-[2rem] p-6 shadow-xl shadow-slate-200/50 border border-t-0 border-slate-100">
                    <p className="text-slate-600 text-sm mb-4">
                      <span className="font-semibold text-slate-800">Ideal for:</span> {vehicle.ideal}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, fIdx) => (
                        <span key={fIdx} className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-100">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Vehicles List */}
                    <div className="text-xs text-slate-500">
                      <span className="font-medium">Options: </span>
                      {vehicle.vehicles.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Fleet CTA */}
            <div className="mt-10 sm:mt-16 text-center">
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Get Fleet Quote: +91 7668570551
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Event Types Section - Dynamic Pages */}
        <section className="py-16 md:py-24 px-4 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-cyan-400/30">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Specialized Services</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Explore by
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Event Type</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, idx) => (
                <Link key={event.slug} href={`/event-transportation-service/${event.slug}`}>
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                      idx % 6 === 0 ? 'bg-cyan-500' :
                      idx % 6 === 1 ? 'bg-blue-500' :
                      idx % 6 === 2 ? 'bg-indigo-500' :
                      idx % 6 === 3 ? 'bg-violet-500' :
                      idx % 6 === 4 ? 'bg-purple-500' :
                      'bg-teal-500'
                    }`} />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2 h-full">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                        idx % 6 === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/40' :
                        idx % 6 === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                        idx % 6 === 2 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40' :
                        idx % 6 === 3 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/40' :
                        idx % 6 === 4 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/40' :
                        'bg-gradient-to-br from-teal-500 to-teal-600 shadow-teal-500/40'
                      }`}>
                        {event.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{event.name}</h3>
                      <p className="text-slate-400 text-sm mb-4">{event.tagline}</p>

                      <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
                        Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-blue-500/30">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Service Locations</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Event Hubs
                <span className="block text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text">We Serve</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'Delhi', slug: 'delhi', tagline: 'Delhi NCR Event Capital', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg', eventTypes: ['Weddings', 'Corporate Events', 'MICE'] },
                { name: 'Jaipur', slug: 'jaipur', tagline: 'Pink City Royal Events', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg', eventTypes: ['Royal Weddings', 'Palace Events', 'MICE'] },
                { name: 'Chandigarh', slug: 'chandigarh', tagline: 'Tricity Event Excellence', image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', eventTypes: ['Weddings', 'Corporate Events', 'IT Conferences'] },
                { name: 'Agra', slug: 'agra', tagline: 'Taj City Wedding Destination', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg', eventTypes: ['Destination Weddings', 'Heritage Events', 'Tourist Groups'] },
                { name: 'Dehradun', slug: 'dehradun', tagline: 'Uttarakhand Event Gateway', image: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg', eventTypes: ['Destination Weddings', 'Corporate Retreats', 'Adventure Events'] }
              ].map((city, idx) => (
                <Link key={city.slug} href={`/event-transportation-service/city/${city.slug}`}>
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                      idx % 5 === 0 ? 'bg-cyan-500' :
                      idx % 5 === 1 ? 'bg-blue-500' :
                      idx % 5 === 2 ? 'bg-indigo-500' :
                      idx % 5 === 3 ? 'bg-violet-500' :
                      'bg-purple-500'
                    }`} />

                    <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                      {/* City Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={city.image}
                          alt={city.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                        <div className="absolute bottom-4 left-6">
                          <h3 className="text-2xl font-black text-white">{city.name}</h3>
                        </div>
                        {/* Hover Arrow */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-slate-500 leading-relaxed mb-4">{city.tagline}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {city.eventTypes.map((type, tIdx) => (
                            <span key={tIdx} className="text-xs bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full border border-cyan-100">
                              {type}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-cyan-600 font-semibold text-sm">
                          View {city.name} Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Premium Design */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <div className="relative inline-block">
                <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                  <Sparkles className="w-6 h-6 text-cyan-300" />
                  <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">Why Choose Us</span>
                </div>
              </div>

              <h2 className="font-display-serif text-5xl md:text-7xl font-bold text-white mt-10 mb-6 leading-tight">
                Event Transport
                <span className="block mt-2 text-gold-foil">
                  Specialists
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventBenefits.map((benefit, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                    idx % 6 === 0 ? 'bg-cyan-500' :
                    idx % 6 === 1 ? 'bg-blue-500' :
                    idx % 6 === 2 ? 'bg-indigo-500' :
                    idx % 6 === 3 ? 'bg-violet-500' :
                    idx % 6 === 4 ? 'bg-purple-500' :
                    'bg-teal-500'
                  }`} />

                  <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2 h-full">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                      idx % 6 === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/40' :
                      idx % 6 === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                      idx % 6 === 2 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40' :
                      idx % 6 === 3 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/40' :
                      idx % 6 === 4 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/40' :
                      'bg-gradient-to-br from-teal-500 to-teal-600 shadow-teal-500/40'
                    }`}>
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet & Capacity Table (visible, fact-dense for AEO) */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-cyan-100 px-5 py-2 rounded-full mb-6">
                <Car className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 font-semibold text-sm tracking-wider uppercase">Fleet &amp; Capacity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Which Vehicle Fits Your <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Event?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From a single luxury sedan for VIPs to a 56-seater shuttle for 200+ guests — a right-sized fleet for every event and budget.
              </p>
            </div>

            {/* Mobile: stacked fleet cards */}
            <div className="space-y-3 md:hidden">
              {eventFleetTable.map((v) => (
                <div key={v.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-slate-900">{v.icon} {v.name}</span>
                    <span className="font-black text-gold-foil whitespace-nowrap">{v.priceRange}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{v.capacity} · {v.ideal}</div>
                  <div className="mt-1 text-xs text-slate-500">{v.vehicles.join(', ')}</div>
                </div>
              ))}
            </div>

            {/* Desktop: full table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th scope="col" className="px-6 py-4 font-semibold">Vehicle Type</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Capacity</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Best For</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Popular Options</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Indicative Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {eventFleetTable.map((v, idx) => (
                    <tr key={v.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-bold text-slate-900">{v.icon} {v.name}</td>
                      <td className="px-6 py-4 text-slate-600">{v.capacity}</td>
                      <td className="px-6 py-4 text-slate-600">{v.ideal}</td>
                      <td className="px-6 py-4 text-slate-600">{v.vehicles.join(', ')}</td>
                      <td className="px-6 py-4 font-semibold text-gold-foil whitespace-nowrap">{v.priceRange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Rates are indicative and vary by city, distance, number of trips, season and volume. All vehicles are AC, GPS-tracked and driven by police-verified chauffeurs.
            </p>
          </div>
        </section>

        {/* How to Book — HowTo steps (visible <ol>) */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wider uppercase">How It Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                How to Book <span className="text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text">Event Transportation</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Five simple steps from your first message to a flawlessly coordinated event day.
              </p>
            </div>
            <ol className="space-y-4">
              {eventBookingSteps.map((step, idx) => (
                <li key={idx} className="flex gap-5 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black text-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Transparent Pricing Guidance (visible table) */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Transparent Pricing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                How Much Does <span className="text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text">Event Transport Cost?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Indicative ranges so you can budget with confidence. Every quote is fixed at booking — no surge pricing, no hidden charges.
              </p>
            </div>
            {/* Mobile: stacked pricing cards */}
            <div className="space-y-3 md:hidden">
              {eventPricingGuidance.map((row, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-800">{row.useCase}</span>
                    <span className="font-black text-gold-foil whitespace-nowrap">{row.indicative}</span>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{row.vehicle}</div>
                </div>
              ))}
            </div>

            {/* Desktop: full table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th scope="col" className="px-6 py-4 font-semibold">Use Case</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Recommended Vehicle</th>
                    <th scope="col" className="px-6 py-4 font-semibold">Indicative Price</th>
                  </tr>
                </thead>
                <tbody>
                  {eventPricingGuidance.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-semibold text-slate-800">{row.useCase}</td>
                      <td className="px-6 py-4 text-slate-600">{row.vehicle}</td>
                      <td className="px-6 py-4 font-semibold text-gold-foil whitespace-nowrap">{row.indicative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 mt-4 text-center">
              Prices are indicative for North India and depend on city, route, trips, season and decoration. Share your brief for an exact, all-inclusive quote.
            </p>
          </div>
        </section>

        {/* Event Planning Checklist (visible list) */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Event Transport <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Planning Checklist</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tick these off for stress-free guest logistics on the big day.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {eventPlanningChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What's Included */}
        <InclusionBadges preset="tour" theme="light" />
        <SectionDivider color="gray" className="my-4" />

        {/* How It Works */}
        <BookingJourney theme="light" />
        <SectionDivider color="gray" className="my-4" />

        {/* Comparison Section — Triveni vs Typical Event Vendors (AEO target) */}
        <section className="py-16 md:py-24 px-4 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-cyan-50 text-cyan-700 px-5 py-2.5 rounded-full mb-5 border border-cyan-100">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-bold tracking-wider uppercase">9-Point Comparison</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                Triveni Cabs™ vs <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Typical Event Vendors</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                See how Triveni Cabs™ differs from typical local event vendors across the 9 dimensions that matter most for event success.
              </p>
            </div>
            {/* Mobile: stacked comparison cards */}
            <div className="space-y-3 md:hidden">
              {comparisonRows.map((row, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="font-semibold text-slate-800 text-sm">{row.feature}</div>
                  <div className="mt-2 flex items-start gap-2 text-sm text-cyan-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                    <span><span className="text-slate-800">Triveni:</span> {row.triveni}</span>
                  </div>
                  <div className="mt-1.5 text-sm text-slate-500">
                    <span className="font-semibold">Typical vendor:</span> {row.typicalVendor}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: full table */}
            <div className="hidden md:block overflow-hidden rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <table className="w-full text-left">
                <thead className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide">Feature</th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide bg-cyan-700/30">Triveni Cabs™</th>
                    <th scope="col" className="px-6 py-4 text-sm font-bold tracking-wide">Typical Event Vendor</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-semibold text-slate-800 text-sm">{row.feature}</td>
                      <td className="px-6 py-4 text-cyan-700 font-semibold text-sm bg-cyan-50/50">
                        <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />{row.triveni}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm">{row.typicalVendor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-slate-500 mt-6 italic">
              Last updated {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}. Comparisons reflect typical local single-city event vendors; not specific to any named competitor.
            </p>
          </div>
        </section>
        <SectionDivider color="gray" className="my-4" />

        {/* FAQ Section */}
        <section className="py-16 md:py-24 px-4 bg-[#FFF6DC] relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-white/70 ring-1 ring-amber-900/10 px-6 py-3 rounded-full mb-6">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
              </div>
              <h2 className="font-display-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 md:items-start gap-6">
              {eventFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-indigo-700 transition-colors">
                      {faq.question}
                    </h3>
                    <p className={`text-slate-500 leading-relaxed${idx === 0 ? ' speakable-faq-first' : ''}`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 sm:mt-16 text-center">
              <p className="text-slate-600 mb-4">Still have questions?</p>
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call us at +91 7668570551
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Explore Related Services Section */}
        <section className="py-10 sm:py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Wedding Transportation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getWeddingPages().map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-white mb-8 mt-10 sm:mt-16">Cab Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getServicePages().map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 mt-10 sm:mt-16">Group &amp; Corporate Transport</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Corporate Transportation', url: '/corporate-transportation-service', description: 'Employee, executive & conference fleets with GST invoicing' },
                { title: 'Tempo Traveller Hire', url: '/tempo-traveller', description: '12-26 seater for guest groups, baraat & offsites' },
                { title: 'Bus Charter Routes', url: '/bus-routes', description: '32-56 seater AC buses for large guest shuttles' },
                { title: 'Wedding Car Rental', url: '/wedding', description: 'Decorated luxury cars for baraat & bridal entry' }
              ].map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-white mb-8 mt-10 sm:mt-16">Vehicles for Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Luxury Bus for Events', url: '/luxury-bus-for-events', description: '27-49 seater AC coaches for large guest movement' },
                { title: 'Tempo Traveller for Events', url: '/tempo-traveller-for-events', description: '12-26 seater AC tempos for mid-size groups' },
                { title: 'Luxury Car for Events', url: '/luxury-car-for-events', description: 'Premium sedans & SUVs for VIPs, bride & groom' }
              ].map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px]" style={{ animationDelay: '1s' }} />

          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-cyan-400/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Plan Your Event</span>
                </div>

                <h2 className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Make Your
                  <span className="block text-gold-foil">
                    Event Memorable?
                  </span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Let us handle the transportation while you focus on creating memories. Professional service, reliable fleet, dedicated coordination.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '500+', label: 'Fleet Size' },
                    { value: '5', label: 'Cities' },
                    { value: '24/7', label: 'Support' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/30">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get Event Quote</h3>
                    <p className="text-slate-400">Free consultation for your event</p>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="tel:+917668570551"
                      className="group flex items-center justify-between w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        +91 7668570551
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="https://wa.me/917668570551?text=I need event transportation service"
                      className="group flex items-center justify-between w-full bg-green-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Us
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      Transparent Pricing • No Hidden Charges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
