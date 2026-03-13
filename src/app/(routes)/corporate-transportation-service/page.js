import Link from 'next/link';
import Image from 'next/image';
import {
  corporateServices,
  corporateBenefits,
  corporateFAQs,
  getAllCorporateCities
} from '@/utilis/corporateTransportData';
import { getAllIndustries } from '@/utilis/corporateIndustryData';
import { getAllUseCases } from '@/utilis/corporateUseCaseData';
import { getServicePages, getGeneralContent } from '@/utilis/linkingHelper';
import AEOHead from '@/components/seo/AEOHead';
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

export const metadata = {
  title: 'Corporate Transportation Service India | Employee Transport & Fleet Solutions | Triveni Cabs',
  description: 'Premium corporate cab services in Delhi NCR, Jaipur, Chandigarh, Agra & Dehradun. Employee pick-up/drop, executive car rental, airport transfers, fleet management. GST billing, dedicated drivers. 500+ corporates trust us. Call 7668570551.',
  keywords: [
    // Primary keywords
    'corporate transportation service',
    'employee transport solutions',
    'corporate cab service India',
    'company car rental',
    // Long-tail keywords - Employee Transport
    'employee pick up drop service Delhi',
    'staff transportation Noida',
    'office commute cab service',
    'shift transport solutions',
    'night shift cab service Gurgaon',
    'BPO transport service',
    'IT park shuttle Delhi NCR',
    'factory worker transport',
    // Long-tail keywords - Executive
    'executive car rental Delhi',
    'CEO chauffeur service',
    'business travel car hire',
    'corporate sedan rental',
    'luxury car for business',
    'airport pickup corporate',
    'VIP transport service India',
    // Long-tail keywords - Fleet Management
    'corporate fleet management',
    'dedicated fleet for company',
    'monthly car rental corporate',
    'annual contract cab service',
    'bulk cab booking corporate',
    'corporate cab with GST invoice',
    // Industry-specific
    'IT company cab service',
    'BPO transport solutions',
    'manufacturing plant transport',
    'pharma company cab service',
    'bank employee transport',
    'hospital staff shuttle',
    // Location-specific
    'corporate cab Delhi NCR',
    'employee transport Gurgaon',
    'company cab Noida',
    'corporate transport Jaipur',
    'office cab Chandigarh'
  ].join(', '),
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/corporate-transportation-service',
    languages: {
      'en-IN': '/corporate-transportation-service',
    },
  },
  openGraph: {
    title: 'Corporate Transportation Service India | Employee & Executive Transport | Triveni Cabs',
    description: 'Complete corporate mobility solutions - employee shuttles, executive travel, airport transfers, fleet management. 500+ companies, GST billing, 24/7 support.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/corporate-transportation-service',
    siteName: 'Triveni Cabs',
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
    title: 'Corporate Transportation Service India | Triveni Cabs',
    description: 'Employee transport, executive travel, fleet management. GST billing, dedicated drivers. 500+ corporates. Call 7668570551.',
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
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'Corporate Transportation',
};

export default function CorporateTransportationPage() {
  const cities = getAllCorporateCities();
  const industries = getAllIndustries();
  const useCases = getAllUseCases();

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
      "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo",
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
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2500",
      "bestRating": "5",
      "worstRating": "1"
    }
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
      "@type": "OfferCatalog",
      "name": "Corporate Transportation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Employee Pick-up & Drop",
            "description": "Daily employee transportation with dedicated routes and schedules"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Car Rental",
            "description": "Premium sedans and SUVs with professional chauffeurs for executives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfers",
            "description": "Reliable airport pickup and drop services for corporate travelers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fleet Management",
            "description": "Complete fleet solutions including vehicles, drivers, and management"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Night Shift Transport",
            "description": "Safe and reliable transportation for night shift employees"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1800",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="corporate" data={{ url: '/corporate-transportation-service', title: 'Corporate Transportation Service' }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen with Image */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
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
          <div className="absolute top-32 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 font-medium text-sm tracking-widest uppercase">Enterprise Mobility Partner</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  Corporate
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    Transportation
                  </span>
                  <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-light text-white/80">Redefined</span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                  Professional corporate transportation across North India. Employee shuttles, executive travel, and fleet solutions with transparent pricing.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '500+', label: 'Fleet Vehicles', icon: Car },
                    { value: '5', label: 'Cities Covered', icon: MapPin },
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
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
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
                  { image: '/images/tempo/17_seater.jpg', title: 'Tempo Traveller', desc: '12-26 seater for teams', price: '₹23-27/km' },
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
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </section>

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

        {/* Services Section - Premium Bento Grid */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
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
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
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
        <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
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

        {/* Quick Links Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
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
        <section className="py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[200px] animate-pulse" />
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header with Glow Effect */}
            <div className="text-center mb-20">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                  <Sparkles className="w-6 h-6 text-cyan-300 animate-pulse" />
                  <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">The Triveni Advantage</span>
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-white mt-10 mb-6 leading-tight">
                Why Choose
                <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text animate-gradient">
                  Triveni Cabs?
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
                  {/* Animated Ring */}
                  <div className="absolute -top-20 -right-20 w-64 h-64 border-4 border-cyan-400/20 rounded-full animate-spin-slow" />
                  <div className="absolute -top-16 -right-16 w-52 h-52 border-2 border-blue-400/20 rounded-full animate-spin-slower" />

                  {/* Floating Badge */}
                  <div className="absolute top-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-cyan-500/50 animate-bounce">
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
                    <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-30 ${
                      idx === 0 ? 'bg-blue-400' :
                      idx === 1 ? 'bg-indigo-400' :
                      idx === 2 ? 'bg-violet-400' :
                      idx === 3 ? 'bg-purple-400' :
                      'bg-pink-400'
                    }`} />

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
            <div className="mt-16 relative">
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

        {/* FAQ Section - Open Cards Design */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-6">
                <HeadphonesIcon className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">Questions</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about our corporate transportation services
              </p>
            </div>

            {/* FAQ Cards Grid - Always Open */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* Contact CTA below FAQ */}
            <div className="mt-16 text-center">
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
        <section className="py-16 bg-slate-900">
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
            <h2 className="text-3xl font-bold text-white mb-8 mt-16">Travel Guides</h2>
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

        {/* CTA Section - Premium Split Design */}
        <section className="relative overflow-hidden">
          {/* Background with Split Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-cyan-400/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Get Started Today</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to
                  <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    Transform Your
                  </span>
                  <span className="block">Corporate Mobility?</span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Start your corporate transportation partnership with Triveni Cabs. Flexible contracts, transparent pricing, and dedicated support.
                </p>

                {/* Features Row */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '500+', label: 'Fleet Vehicles' },
                    { value: '5', label: 'Cities Served' },
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
