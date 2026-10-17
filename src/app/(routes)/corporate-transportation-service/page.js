import Link from 'next/link';
import Image from 'next/image';
import { getDeterministicReviewCount } from "@/lib/seo/review-helpers";
import {
  corporateServices,
  corporateBenefits,
  corporateFAQs,
  corporateFleet,
  corporateDirectAnswer,
  corporatePricingModels,
  corporateVsAggregator,
  corporateOnboardingSteps,
  corporateCompliance,
  getAllCorporateCities
} from '@/utilis/corporateTransportData';
import { getAllIndustries } from '@/utilis/corporateIndustryData';
import { getAllUseCases } from '@/utilis/corporateUseCaseData';
import { getServicePages, getGeneralContent } from '@/utilis/linkingHelper';
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
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  HeadphonesIcon,
  Play,
  Star
} from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Corporate Transportation Service ₹11/km'),
  description: 'Corporate transportation & employee transport from ₹11/km. Monthly cab contracts, GST invoice, account manager, 24/7 ops. Get an enterprise quote today.',
  keywords: [
    'corporate transportation service',
    'employee transportation',
    'corporate cab service',
    'office commute cabs',
    'corporate car rental',
    'MICE transport',
    'corporate tie-up cabs',
    'monthly cab contract for companies',
    'GST invoice cab service',
    'employee pick up drop service',
    'corporate fleet management',
    'ETS employee transport',
    'shift transport solutions',
    'night shift cab service',
    'executive car rental',
    'airport transfer corporate',
    'dedicated fleet for company',
    'corporate cab vs Ola Uber',
    'BPO transport service',
    'IT company cab service',
    'corporate transport Delhi NCR',
    'employee transport Gurgaon Noida',
    'business travel car hire'
  ].join(', '),
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/corporate-transportation-service',
    languages: {
      'en-IN': '/corporate-transportation-service',
    },
  },
  openGraph: {
    title: 'Corporate Transportation Service — Employee & Executive Fleet Solutions Across North India',
    description: 'From employee pick-up & drop to executive travel and airport transfers — monthly cab contracts with GST invoicing, dedicated account manager, GPS tracking, MIS reports and a 500+ vehicle fleet. Trusted by 500+ companies.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/corporate-transportation-service',
    siteName: 'Triveni Cabs™',
    images: [
      {
        url: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Transportation Service - Employee Transport Solutions India'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Transportation Service ₹11/km | Triveni Cabs™',
    description: 'Employee transport, executive cars & airport transfers from ₹11/km. Monthly cab contracts, GST invoice, account manager, 24/7 ops. Get an enterprise quote.',
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
  category: 'Corporate Transportation',
};

export default function CorporateTransportationPage() {
  const cities = getAllCorporateCities();
  const industries = getAllIndustries();
  const useCases = getAllUseCases();

  const pageSlug = 'corporate-transportation-service';
  const pageUrl = `https://www.trivenicabs.in/${pageSlug}`;
  const ogImage = '/images/sightseeing/Delhi/Delhi_hero_section.jpg';
  // Deterministic per-slug rating + 3 named corporate reviews (NOT 10000 — Service/Product level).
  const corporateRatingReviews = getRatingAndReviews(pageSlug, 'corporate');

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
    "description": "Premium corporate transportation and cab services across North India.",
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
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.trivenicabs.in/corporate-transportation-service/#service",
    "serviceType": "Corporate Transportation Service",
    "name": "Corporate Transportation Solutions India",
    "description": "Comprehensive corporate transportation including employee transport, executive travel, airport transfers, and fleet management across North India.",
    "provider": {
      "@id": "https://www.trivenicabs.in/#localbusiness"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi", "containedInPlace": { "@type": "State", "name": "Delhi" } },
      { "@type": "City", "name": "Noida", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Gurgaon", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Faridabad", "containedInPlace": { "@type": "State", "name": "Haryana" } },
      { "@type": "City", "name": "Ghaziabad", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Jaipur", "containedInPlace": { "@type": "State", "name": "Rajasthan" } },
      { "@type": "City", "name": "Chandigarh", "containedInPlace": { "@type": "State", "name": "Chandigarh" } },
      { "@type": "City", "name": "Mohali", "containedInPlace": { "@type": "State", "name": "Punjab" } },
      { "@type": "City", "name": "Agra", "containedInPlace": { "@type": "State", "name": "Uttar Pradesh" } },
      { "@type": "City", "name": "Dehradun", "containedInPlace": { "@type": "State", "name": "Uttarakhand" } }
    ],
    "hasOfferCatalog": {
      "@type": "ItemList",
      "name": "Corporate Transportation Services",
      "itemListElement": [
        {
            "@type": "Service",
            "name": "Employee Pick-up & Drop",
            "description": "Daily employee transportation with dedicated routes and schedules"
          },
        {
            "@type": "Service",
            "name": "Executive Car Rental",
            "description": "Premium sedans and SUVs with professional chauffeurs for executives"
          },
        {
            "@type": "Service",
            "name": "Airport Transfers",
            "description": "Reliable airport pickup and drop services for corporate travelers"
          },
        {
            "@type": "Service",
            "name": "Fleet Management",
            "description": "Complete fleet solutions including vehicles, drivers, and management"
          },
        {
            "@type": "Service",
            "name": "Night Shift Transport",
            "description": "Safe and reliable transportation for night shift employees"
          }
      ]
    },
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    ...corporateRatingReviews
  };

  // Product schema with the three contract/pricing models as Offers (B2B "Offer/Product" coverage).
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}/#product`,
    "name": "Corporate Cab Contract — Triveni Cabs",
    "description": "Corporate cab and employee transportation contracts: per-trip, monthly, and dedicated-fleet models with GST invoicing, account manager, GPS tracking and 30-minute backup SLA.",
    "image": `https://www.trivenicabs.in${ogImage}`,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "category": "Corporate Transportation",
    "offers": corporatePricingModels.map((m) => ({
      "@type": "Offer",
      "name": m.name,
      "description": `${m.headline}. ${m.billing}. Best for: ${m.bestFor}.`,
      "priceCurrency": "INR",
      "price": "11",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "INR",
        "price": "11",
        "unitText": "per km (starting)"
      },
      "availability": "https://schema.org/InStock",
      "seller": { "@id": "https://www.trivenicabs.in/#localbusiness" }
    })),
    ...corporateRatingReviews
  };

  // ItemList of industries served + use-cases (sub-page entity graph for AEO/GEO).
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}/#solutions`,
    "name": "Corporate Transportation Solutions by Industry & Use Case",
    "itemListElement": [
      ...industries.map((ind, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `Corporate Transport for ${ind.name}`,
        "url": `${pageUrl}/industry/${ind.slug}`
      })),
      ...useCases.map((uc, i) => ({
        "@type": "ListItem",
        "position": industries.length + i + 1,
        "name": uc.name,
        "url": `${pageUrl}/use-case/${uc.slug}`
      }))
    ]
  };

  // HowTo: setting up a corporate cab contract.
  const howToSchema = getHowToSchema({
    name: 'How to Set Up a Corporate Cab Contract with Triveni Cabs',
    description: 'Five steps to onboard employee transportation: share requirement, get a GST-inclusive proposal, sign the contract, optimise routes with a trial week, and go live with 24/7 support.',
    totalTime: 'P3D',
    estimatedCost: { currency: 'INR', value: '11' },
    steps: corporateOnboardingSteps.map((s) => ({ name: s.title, text: s.description }))
  });

  // Comparison schema: Corporate cabs vs aggregators (Table + Article for featured snippets).
  const comparisonSchema = getComparisonSchema({
    slug: pageSlug,
    title: 'Corporate Cabs vs Aggregators (Ola/Uber) for Business',
    description: 'How dedicated corporate cab contracts compare to ride-hailing aggregators across pricing, GST invoicing, driver consistency, women safety, backup SLA, MIS reporting and account management.',
    rows: corporateVsAggregator,
    mentions: ['Ola', 'Uber', 'Corporate cab service', 'Employee transportation', 'GST invoice']
  });

  // Article schema (E-E-A-T + freshness + Speakable wiring).
  const articleSchema = getArticleSchema({
    slug: pageSlug,
    headline: 'Corporate Transportation Service in India — Employee Transport, Executive Travel & Fleet Solutions',
    description: 'A complete guide to corporate transportation in North India: services, fleet, contract models, GST compliance, women-safety protocols, MIS reporting and how to set up an employee transport contract.',
    image: ogImage,
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn('/corporate-transportation-service') || getTodayDate()),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Corporate Transportation Service", "item": "https://www.trivenicabs.in/corporate-transportation-service" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": corporateFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="corporate" data={{ url: '/corporate-transportation-service', title: 'Corporate Transportation Service' }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen with Image */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
              alt="Corporate Transportation Service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30" />

          {/* Floating Elements */}
          <div className="absolute top-32 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                  <span className="text-cyan-300 font-medium text-sm tracking-widest uppercase">Enterprise Mobility Partner</span>
                </div>

                <h1 className="speakable-headline font-display-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05]">
                  Corporate
                  <span className="block mt-2 text-gold-foil">
                    Transportation Service
                  </span>
                  <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-light text-white/80">From ₹11/km</span>
                </h1>

                <p className="speakable-lead text-lg text-slate-300 max-w-xl leading-relaxed">
                  {corporateDirectAnswer}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '500+', label: 'Fleet Vehicles', icon: Car },
                    { value: '9', label: 'Cities Covered', icon: MapPin },
                    { value: '24/7', label: 'Support Available', icon: Clock }
                  ].map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                          <stat.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/get-corporate-quote"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-b from-[#FFE9A0] via-[#FACF2D] to-[#E6B800] text-black px-8 py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_-10px_rgba(250,207,45,0.55)] hover:brightness-105 transition-all duration-300 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]"
                  >
                    <Phone className="w-5 h-5" />
                    Get Enterprise Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="https://wa.me/917668570551?text=I need corporate transportation services"
                    className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right Side - Feature Cards Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { image: '/images/wedding/luxury_car.jpg', title: 'Executive Sedans', desc: 'Premium comfort for leadership', price: '₹12-15/km' },
                  { image: '/images/wedding/premium_suv.jpg', title: 'Premium SUVs', desc: 'Spacious & elegant travel', price: '₹16-20/km' },
                  { image: '/images/tempo/17_seater.jpg', title: 'Tempo Traveller', desc: '12-26 seater for teams', price: '₹20-28/km' },
                  { image: '/images/bus/45_SEATER_BUS.jpg', title: 'Corporate Buses', desc: '32-56 seater shuttles', price: '₹45-75/km' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-cyan-400 text-sm font-semibold mb-1">{item.price}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
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
                { icon: Car, text: 'Well-Maintained Fleet', color: 'text-yellow-400' }
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
              What Is Corporate Transportation Service?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
              Corporate transportation (also called employee transportation or ETS) is a managed mobility
              service where a single vendor handles a company’s entire commute and travel needs — daily
              employee pick-up &amp; drop, executive travel, airport transfers and event logistics — under
              one contract with GST invoicing. Triveni Cabs™ operates a 500+ vehicle fleet across Delhi NCR,
              Jaipur, Chandigarh, Agra, Dehradun, Noida, Gurgaon, Lucknow and Haridwar, with police-verified
              drivers, live GPS tracking, a dedicated account manager, monthly MIS reports and a guaranteed
              30-minute backup vehicle. Rates start at ₹11/km.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '9', label: 'Cities Served' },
                { value: '500+', label: 'Fleet Vehicles' },
                { value: '₹11/km', label: 'Starting Rate' },
                { value: '24/7', label: 'Operations' }
              ].map((s, i) => (
                <div key={i} className="rounded-2xl bg-white/70 ring-1 ring-amber-900/10 p-5 text-center">
                  <div className="text-2xl md:text-3xl font-black text-gold-foil">{s.value}</div>
                  <div className="text-sm text-slate-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/get-corporate-quote" className="inline-flex items-center gap-2 bg-gradient-to-b from-[#FFE9A0] via-[#FACF2D] to-[#E6B800] text-black px-7 py-3.5 rounded-2xl font-bold shadow-[0_10px_30px_-10px_rgba(250,207,45,0.55)] hover:brightness-105 transition-all lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]">
                Get a Custom Corporate Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Enquiry Form — desktop lead path */}
        <section className="py-16 md:py-24 px-4 bg-slate-950">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Get a Custom Corporate Quote</h2>
              <p className="text-slate-300 leading-relaxed">Tell us your city, team size and travel needs. Our enterprise desk replies within minutes with transparent per-km pricing, GST invoicing and a dedicated account manager.</p>
            </div>
            <div className="flex lg:justify-end">
              <QuickEnquiryForm pageType="corporate" />
            </div>
          </div>
        </section>

        {/* Services Section - Premium Bento Grid */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                <Briefcase className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Complete Corporate
                <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text"> Mobility Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From daily commute to special requirements - a single partner for all your corporate transportation needs
              </p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Large Card - Daily Operations */}
              <div className="lg:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-10 min-h-[400px]">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl" style={{ animationDelay: '1s' }} />
                </div>

                {/* Number Badge */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30">
                  <span className="text-3xl font-black text-white">01</span>
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="text-6xl mb-6">{corporateServices[0].icon}</div>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4">{corporateServices[0].title}</h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-md">{corporateServices[0].description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {corporateServices[0].services.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 group-hover:bg-white/20 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0" />
                        <span className="text-white text-sm font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stacked Cards */}
              <div className="flex flex-col gap-6">
                {/* Business Travel Card */}
                <div className="group relative overflow-hidden rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 flex-1">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-600">02</span>
                  </div>

                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                    {corporateServices[1].icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{corporateServices[1].title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{corporateServices[1].description}</p>

                  <div className="flex flex-wrap gap-2">
                    {corporateServices[1].services.slice(0, 2).map((item, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full font-medium">{item.name}</span>
                    ))}
                    <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full font-medium">+{corporateServices[1].services.length - 2} more</span>
                  </div>
                </div>

                {/* Special Requirements Card */}
                <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-500 to-purple-600 p-8 flex-1">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                    <span className="text-lg font-bold text-white">03</span>
                  </div>

                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl mb-4 border border-white/30 group-hover:scale-110 transition-transform">
                    {corporateServices[2].icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{corporateServices[2].title}</h3>
                  <p className="text-indigo-100 text-sm mb-4">{corporateServices[2].description}</p>

                  <div className="flex flex-wrap gap-2">
                    {corporateServices[2].services.slice(0, 2).map((item, i) => (
                      <span key={i} className="text-xs bg-white/20 text-white px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">{item.name}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row - Long-Term Solutions */}
              <div className="lg:col-span-3 group relative overflow-hidden rounded-[2rem] bg-slate-900 p-10">
                {/* Background Gradient */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
                  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
                </div>

                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center text-4xl shadow-2xl shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                      {corporateServices[3].icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full font-semibold">04</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white">{corporateServices[3].title}</h3>
                      </div>
                      <p className="text-slate-400 max-w-lg">{corporateServices[3].description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
                    {corporateServices[3].services.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10 hover:bg-white/10 hover:border-cyan-400/30 transition-all cursor-pointer">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                        <span className="text-white text-sm font-medium">{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Service Locations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Corporate Hubs <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">We Serve</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Trusted by leading enterprises across major business cities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/corporate-transportation-service/${city.slug}`}
                  className="group block h-full"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* City Image */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={city.heroImage}
                        alt={city.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
                        <span className="text-white text-sm font-semibold">{city.stats.fleet} Vehicles</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-cyan-400 text-sm font-semibold mb-1">{city.tagline}</div>
                        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{city.description}</p>

                      {/* Business Areas */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {city.businessAreas.slice(0, 3).map((area, idx) => (
                          <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                            {area.name}
                          </span>
                        ))}
                      </div>

                      {/* Stats Row - Push to bottom */}
                      <div className="mt-auto">
                        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.fleet}</div>
                            <div className="text-xs text-slate-500">Fleet</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">5</div>
                            <div className="text-xs text-slate-500">Cities</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">24/7</div>
                            <div className="text-xs text-slate-500">Support</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                            Explore {city.name}
                          </span>
                          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-100 px-5 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 font-semibold text-sm tracking-wider uppercase">Industry Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Transport for <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Your Industry</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Specialized solutions designed for the unique needs of different industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/corporate-transportation-service/industry/${industry.slug}`}
                  className="group bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-cyan-200"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">{industry.name}</h3>
                  <p className="text-slate-500 text-sm line-clamp-2">{industry.tagline}</p>
                  <div className="mt-4 flex items-center gap-1 text-cyan-600 font-medium text-sm">
                    Learn More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Use Case Solutions Section */}
        <section className="py-16 md:py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wider uppercase">Service Types</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Solutions for <span className="text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text">Every Need</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From daily employee transport to executive rentals - comprehensive mobility solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((useCase) => (
                <Link
                  key={useCase.slug}
                  href={`/corporate-transportation-service/use-case/${useCase.slug}`}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{useCase.name}</h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{useCase.description}</p>
                  <div className="flex items-center gap-1 text-blue-600 font-semibold text-sm">
                    Explore Service <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet & Capacity Table */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-cyan-100 px-5 py-2 rounded-full mb-6">
                <Car className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 font-semibold text-sm tracking-wider uppercase">Fleet &amp; Capacity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Which Vehicle Fits Your <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Corporate Need?</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From a single executive sedan to a 56-seater shuttle — a right-sized fleet for every team size and budget.
              </p>
            </div>

            {/* Mobile: stacked fleet cards */}
            <div className="space-y-3 md:hidden">
              {corporateFleet.map((v) => (
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
                    <th className="px-6 py-4 font-semibold">Vehicle Type</th>
                    <th className="px-6 py-4 font-semibold">Capacity</th>
                    <th className="px-6 py-4 font-semibold">Best For</th>
                    <th className="px-6 py-4 font-semibold">Popular Models</th>
                    <th className="px-6 py-4 font-semibold">Indicative Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {corporateFleet.map((v, idx) => (
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
              Rates are indicative and vary by city, volume, shift pattern and contract model. All vehicles are AC, GPS-tracked and driven by police-verified chauffeurs.
            </p>
          </div>
        </section>

        {/* Pricing / Contract Models */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-5 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-semibold text-sm tracking-wider uppercase">Pricing &amp; Contracts</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Flexible <span className="text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text">Contract Models</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Pay per trip, lock a fixed monthly rate, or run a dedicated fleet — every model includes GST invoicing and a dedicated account manager.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {corporatePricingModels.map((m) => (
                <div
                  key={m.id}
                  className={`relative rounded-3xl p-8 border transition-all duration-300 flex flex-col ${
                    m.popular
                      ? 'bg-slate-900 border-cyan-400/40 shadow-2xl shadow-cyan-500/20 scale-[1.02]'
                      : 'bg-white border-slate-200 shadow-lg hover:shadow-2xl'
                  }`}
                >
                  {m.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      MOST POPULAR
                    </span>
                  )}
                  <div className="text-4xl mb-4">{m.icon}</div>
                  <h3 className={`text-xl font-bold mb-1 ${m.popular ? 'text-white' : 'text-slate-900'}`}>{m.name}</h3>
                  <p className={`text-sm mb-3 ${m.popular ? 'text-slate-300' : 'text-slate-500'}`}>{m.headline}</p>
                  <div className={`text-lg font-black mb-4 ${m.popular ? 'text-cyan-400' : 'text-cyan-600'}`}>{m.rateFrom}</div>
                  <div className={`text-xs uppercase tracking-wide font-semibold mb-2 ${m.popular ? 'text-slate-400' : 'text-slate-400'}`}>Best for</div>
                  <p className={`text-sm mb-4 ${m.popular ? 'text-slate-200' : 'text-slate-600'}`}>{m.bestFor}</p>
                  <ul className="space-y-2 mt-auto">
                    {m.inclusions.map((inc, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${m.popular ? 'text-slate-200' : 'text-slate-600'}`}>
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${m.popular ? 'text-cyan-400' : 'text-cyan-500'}`} />
                        {inc}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 text-xs text-slate-400">{m.billing}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Cabs vs Aggregators */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Why Switch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Corporate Cabs vs <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">Ola / Uber for Business</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                For 50+ employees on regular shifts, a dedicated corporate contract saves ₹80,000–₹1,20,000 per month versus aggregator platforms — with none of the surge or cancellation chaos.
              </p>
            </div>

            {/* Mobile: stacked comparison cards */}
            <div className="space-y-3 md:hidden">
              {corporateVsAggregator.map((row, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="font-bold text-slate-900">{row.feature}</div>
                  <div className="mt-2 flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                    <span><span className="font-semibold">Triveni:</span> {row.triveni}</span>
                  </div>
                  <div className="mt-1.5 text-sm text-slate-500">
                    <span className="font-semibold">Ola / Uber:</span> {row.aggregator}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: full table */}
            <div className="hidden md:block overflow-hidden rounded-3xl border border-slate-200 shadow-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 font-semibold">Factor</th>
                    <th className="px-6 py-4 font-semibold text-cyan-400">Triveni Corporate Cabs</th>
                    <th className="px-6 py-4 font-semibold text-slate-300">Ola / Uber (Aggregator)</th>
                  </tr>
                </thead>
                <tbody>
                  {corporateVsAggregator.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-bold text-slate-900">{row.feature}</td>
                      <td className="px-6 py-4 text-slate-700">
                        <span className="inline-flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                          {row.triveni}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500">{row.aggregator}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <Link href="/corporate-cab-vs-aggregators" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
                Read the full comparison: Corporate Cabs vs Aggregators
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How Onboarding Works (HowTo) */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-cyan-100 px-5 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 font-semibold text-sm tracking-wider uppercase">Onboarding</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                How to Set Up a <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Corporate Cab Contract</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                From first call to go-live in as little as 3 working days. Here is exactly how the onboarding works.
              </p>
            </div>

            <ol className="grid md:grid-cols-5 gap-5">
              {corporateOnboardingSteps.map((s) => (
                <li key={s.step} className="relative bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black flex items-center justify-center text-lg mb-4 shadow-lg shadow-cyan-500/30">
                    {s.step}
                  </div>
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Compliance, Safety, GST & MIS — E-E-A-T trust */}
        <section className="py-16 md:py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-green-100 px-5 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-green-700 font-semibold text-sm tracking-wider uppercase">Compliance &amp; Trust</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                Built for <span className="text-transparent bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text">HR, Admin &amp; Finance</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                GST-ready paperwork, audited safety protocols and reporting your procurement and compliance teams can sign off on.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateCompliance.map((c, i) => (
                <div key={i} className="bg-slate-50 rounded-3xl p-7 border border-slate-100 hover:border-green-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{c.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{c.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLA & Backup Vehicle Guarantee */}
        <section className="py-12 sm:py-20 px-4 bg-slate-900">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700 p-10 md:p-12 overflow-hidden">
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-xl px-4 py-2 rounded-full mb-5 border border-white/20">
                    <Clock className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold text-xs tracking-wider uppercase">Service Level Agreement</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    30-Minute Backup Vehicle Guarantee
                  </h2>
                  <p className="text-blue-100 leading-relaxed">
                    If an assigned vehicle breaks down, no-shows, or becomes unavailable, we deploy a replacement
                    within 30 minutes across Delhi NCR, Jaipur, Chandigarh, Agra and Dehradun service zones — at
                    no extra charge. Backed by a 24/7 control room, our SLA targets 99%+ on-time performance so your
                    shifts never wait.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '30 min', label: 'Backup SLA' },
                    { value: '99%+', label: 'On-Time Target' },
                    { value: '24/7', label: 'Control Room' },
                    { value: '₹0', label: 'Backup Cost' }
                  ].map((s, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 text-center">
                      <div className="text-2xl md:text-3xl font-black text-white">{s.value}</div>
                      <div className="text-sm text-blue-100 mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/get-corporate-quote"
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-lg font-bold text-white mb-1">Get Quote</h3>
                <p className="text-white/70 text-sm">Free corporate proposal</p>
              </Link>
              <Link
                href="/corporate-cab-vs-aggregators"
                className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
              >
                <div className="text-4xl mb-3">⚖️</div>
                <h3 className="text-lg font-bold text-white mb-1">Why Us vs Ola/Uber</h3>
                <p className="text-white/70 text-sm">See the difference</p>
              </Link>
              <Link
                href="tel:+917668570551"
                className="group bg-white rounded-2xl p-6 hover:scale-[1.02] transition-all text-center"
              >
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Call Now</h3>
                <p className="text-slate-600 text-sm">7668570551</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section - Ultra Premium 3D Design */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[200px]" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header with Glow Effect */}
            <div className="text-center mb-12 sm:mb-20">
              <div className="relative inline-block">
                <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                  <Sparkles className="w-6 h-6 text-cyan-300" />
                  <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">The Triveni Advantage</span>
                </div>
              </div>

              <h2 className="font-display-serif text-5xl md:text-7xl font-bold text-white mt-10 mb-6 leading-tight">
                Why Choose
                <span className="block mt-2 text-gold-foil">
                  Triveni Cabs™?
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Experience the difference with our premium corporate transportation
              </p>
            </div>

            {/* 3D Perspective Benefits Grid */}
            <div className="grid lg:grid-cols-3 gap-8 perspective-1000">
              {/* Feature 1 - Large Highlight Card */}
              <div className="lg:col-span-2 lg:row-span-2 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="relative h-full bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-xl rounded-[2.5rem] border border-cyan-400/30 p-10 overflow-hidden group-hover:border-cyan-400/60 transition-all duration-700">
                  {/* Decorative Ring */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-cyan-400/20 rounded-full" />
                  <div className="absolute -top-16 -right-16 w-52 h-52 border-2 border-blue-400/20 rounded-full" />

                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-gradient-to-b from-[#FFE9A0] via-[#FACF2D] to-[#E6B800] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    MOST POPULAR
                  </div>

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon Container with Glow */}
                    <div className="relative mb-8">
                      <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl blur-2xl opacity-60" />
                      <div className="relative w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/40 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <span className="text-5xl">{corporateBenefits[0].icon}</span>
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors">{corporateBenefits[0].title}</h3>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">{corporateBenefits[0].description}</p>

                    {/* Stats Row */}
                    <div className="mt-auto grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                      <div className="text-center">
                        <div className="text-3xl font-black text-cyan-400">500+</div>
                        <div className="text-sm text-slate-400">Vehicles</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-blue-400">5</div>
                        <div className="text-sm text-slate-400">Cities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-black text-indigo-400">24/7</div>
                        <div className="text-sm text-slate-400">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remaining Benefits - Compact Premium Cards */}
              {corporateBenefits.slice(1).map((benefit, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                    idx === 0 ? 'bg-blue-500' :
                    idx === 1 ? 'bg-indigo-500' :
                    idx === 2 ? 'bg-violet-500' :
                    idx === 3 ? 'bg-purple-500' :
                    'bg-pink-500'
                  }`} />
                  <div className={`relative h-full backdrop-blur-xl rounded-[2rem] border p-8 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ${
                    idx === 0 ? 'bg-blue-500/10 border-blue-400/30 group-hover:border-blue-400/60' :
                    idx === 1 ? 'bg-indigo-500/10 border-indigo-400/30 group-hover:border-indigo-400/60' :
                    idx === 2 ? 'bg-violet-500/10 border-violet-400/30 group-hover:border-violet-400/60' :
                    idx === 3 ? 'bg-purple-500/10 border-purple-400/30 group-hover:border-purple-400/60' :
                    'bg-pink-500/10 border-pink-400/30 group-hover:border-pink-400/60'
                  }`}>
                    {/* Corner Accent */}

                    {/* Number Badge */}
                    <div className={`absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black ${
                      idx === 0 ? 'bg-blue-500/30 text-blue-300' :
                      idx === 1 ? 'bg-indigo-500/30 text-indigo-300' :
                      idx === 2 ? 'bg-violet-500/30 text-violet-300' :
                      idx === 3 ? 'bg-purple-500/30 text-purple-300' :
                      'bg-pink-500/30 text-pink-300'
                    }`}>
                      0{idx + 2}
                    </div>

                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                        idx === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                        idx === 1 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40' :
                        idx === 2 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/40' :
                        idx === 3 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/40' :
                        'bg-gradient-to-br from-pink-500 to-pink-600 shadow-pink-500/40'
                      }`}>
                        {benefit.icon}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-slate-100 transition-colors">{benefit.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{benefit.description}</p>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Strip */}
            <div className="mt-10 sm:mt-16 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl" />
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Ready to experience the difference?</p>
                    <p className="text-white text-xl font-bold">Get Your Corporate Quote Today</p>
                  </div>
                </div>
                <Link
                  href="tel:+917668570551"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  Call Now: +91 7668570551
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <InclusionBadges preset="outstation" theme="light" />
        <SectionDivider color="gray" className="my-4" />

        {/* How It Works */}
        <BookingJourney theme="light" />
        <SectionDivider color="gray" className="my-4" />

        {/* FAQ Section - Open Cards Design */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-6">
                <HeadphonesIcon className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
              </div>
              <h2 className="font-display-serif text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">Questions</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about our corporate transportation services
              </p>
            </div>

            {/* FAQ Cards Grid - Always Open */}
            <div className="grid md:grid-cols-2 md:items-start gap-6">
              {corporateFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Question Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-indigo-700 transition-colors">
                      {faq.question}
                    </h3>
                    <p className={`text-slate-500 text-sm leading-relaxed${idx === 0 ? ' speakable-faq-first' : ''}`}>
                      {faq.answer}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* Contact CTA below FAQ */}
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

        {/* Explore Our Services Section */}
        <section className="py-10 sm:py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Explore Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getServicePages().map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-white mb-8 mt-10 sm:mt-16">Travel Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {getGeneralContent().map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300">
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Corporate Resources — contextual internal linking */}
        <section className="py-12 sm:py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 text-center">
              Related Corporate Resources
            </h2>
            <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
              Compare options, get a proposal, and explore specialised mobility services for your business.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/get-corporate-quote', title: 'Get a Corporate Quote', desc: 'Free, GST-inclusive proposal within 24 hours', icon: '📋' },
                { href: '/corporate-cab-vs-aggregators', title: 'Corporate Cabs vs Ola/Uber', desc: 'Full cost & SLA comparison for business', icon: '⚖️' },
                { href: `/corporate-transportation-service/use-case/${useCases[0]?.slug || 'employee-pick-drop'}`, title: useCases[0]?.name || 'Employee Pick-up & Drop', desc: 'Door-to-door daily commute for your workforce', icon: '🚗' },
                { href: `/corporate-transportation-service/industry/${industries[0]?.slug || 'it-companies'}`, title: `Transport for ${industries[0]?.name || 'IT Companies'}`, desc: 'Industry-specific shift & shuttle solutions', icon: '💻' },
                { href: '/event-transportation-service', title: 'Event Transportation', desc: 'Conferences, MICE, offsites & roadshow logistics', icon: '🎪' },
                { href: '/tempo-traveller', title: 'Tempo Traveller Hire', desc: '12–26 seater team transport & offsites', icon: '🚐' },
                { href: '/bus-routes', title: 'Corporate Bus Rental', desc: '32–56 seater staff shuttles & large events', icon: '🚌' },
                { href: '/airport-service', title: 'Airport Transfers', desc: '24/7 corporate airport pickup & drop', icon: '✈️' },
                { href: '/corporate-transportation-service', title: 'All Industries & Use Cases', desc: `${industries.length} industries · ${useCases.length} use cases covered`, icon: '🏢' }
              ].map((item, i) => (
                <Link key={i} href={item.href} className="group bg-slate-50 rounded-2xl border border-slate-100 p-6 hover:border-cyan-200 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-cyan-600 font-medium text-sm">
                    Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Split Design */}
        <section className="relative overflow-hidden">
          {/* Background with Split Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px]" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" style={{ animationDelay: '2s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-14 sm:py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-cyan-400/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Get Started Today</span>
                </div>

                <h2 className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to
                  <span className="block text-gold-foil">
                    Transform Your
                  </span>
                  <span className="block">Corporate Mobility?</span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Start your corporate transportation partnership with Triveni Cabs™. Flexible contracts, transparent pricing, and dedicated support.
                </p>

                {/* Features Row */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '500+', label: 'Fleet Vehicles' },
                    { value: '9', label: 'Cities Served' },
                    { value: '24/7', label: 'Availability' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Contact Card */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/30">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Talk to Our Experts</h3>
                    <p className="text-slate-400">Get a customized quote in minutes</p>
                  </div>

                  {/* Contact Options */}
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
                      href="https://wa.me/917668570551?text=I need corporate transportation services"
                      className="group flex items-center justify-between w-full bg-green-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Us
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/get-corporate-quote"
                      className="group flex items-center justify-between w-full bg-white text-slate-900 p-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <Briefcase className="w-6 h-6" />
                        Request Proposal
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Trust Badge */}
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
