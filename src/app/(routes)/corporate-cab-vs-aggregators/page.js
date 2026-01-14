import Link from 'next/link';
import {
  Phone,
  ChevronRight,
  ArrowRight,
  Shield,
  Clock,
  Car,
  CheckCircle2,
  XCircle,
  Users,
  MapPin,
  Building2,
  TrendingUp,
  DollarSign,
  Headphones
} from 'lucide-react';

export const metadata = {
  title: 'Corporate Cab Service vs Ola/Uber 2024 | Complete Comparison Guide | Triveni Cabs',
  description: 'In-depth comparison: Dedicated corporate cab service vs Ola/Uber for business. Fixed rates vs surge pricing, dedicated drivers vs random, GST invoicing, accountability. Why 500+ companies switched to dedicated transport. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/corporate-cab-vs-aggregators',
    languages: {
      'en-IN': '/corporate-cab-vs-aggregators',
    },
  },
  openGraph: {
    title: 'Corporate Cab vs Ola/Uber: Complete 2024 Comparison | Triveni Cabs',
    description: 'Detailed comparison of dedicated corporate transport vs ride aggregators. Fixed pricing, dedicated drivers, GST compliant invoicing.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/corporate-cab-vs-aggregators',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Cab vs Ola Uber - Complete Comparison Guide'
      }
    ],
    publishedTime: '2024-01-01T00:00:00.000Z',
    modifiedTime: new Date().toISOString(),
    authors: ['Triveni Cabs'],
    section: 'Corporate Transportation'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Cab vs Ola/Uber 2024 | Complete Guide',
    description: 'Why 500+ companies choose dedicated corporate transport. Fixed rates, dedicated drivers, GST invoicing.',
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
  keywords: [
    // Primary comparison keywords
    'corporate cab vs ola uber',
    'dedicated corporate transport vs aggregators',
    'ola for business vs corporate cab',
    'uber for business alternative',
    // Question-based keywords (great for featured snippets)
    'why corporate cab better than ola',
    'is ola good for corporate',
    'dedicated driver vs ola driver',
    'corporate cab vs taxi aggregator',
    // Problem/Solution keywords
    'ola surge pricing for corporates',
    'uber cancellation problem corporate',
    'no GST invoice ola uber',
    'reliable corporate cab service',
    // Comparison-specific
    'ola uber vs dedicated cab comparison',
    'corporate transport comparison India',
    'best corporate cab service Delhi',
    'fixed rate corporate cab',
    // Decision-making keywords
    'switch from ola to corporate cab',
    'corporate cab service benefits',
    'dedicated fleet vs ola uber',
    'corporate transport cost comparison'
  ].join(', '),
  category: 'Corporate Transportation',
};

const comparisonData = [
  {
    category: 'Pricing & Billing',
    icon: DollarSign,
    items: [
      { feature: 'Fixed Rates', triveni: true, aggregators: false, detail: 'No surge pricing ever with Triveni' },
      { feature: 'GST Invoicing', triveni: true, aggregators: 'Limited', detail: 'Proper GST compliant invoices for ITC claims' },
      { feature: 'Predictable Costs', triveni: true, aggregators: false, detail: 'Budget with confidence - monthly fixed rates available' },
      { feature: 'Monthly Billing', triveni: true, aggregators: false, detail: 'Single invoice, easy expense management' },
      { feature: 'Transparent Pricing', triveni: true, aggregators: false, detail: 'No hidden charges or dynamic pricing' }
    ]
  },
  {
    category: 'Driver & Vehicle',
    icon: Users,
    items: [
      { feature: 'Dedicated Drivers', triveni: true, aggregators: false, detail: 'Same driver builds familiarity and trust' },
      { feature: 'Background Verified', triveni: true, aggregators: 'Varies', detail: 'Thorough police verification for all drivers' },
      { feature: 'Trained for Corporate', triveni: true, aggregators: false, detail: 'Professional etiquette, punctuality focused' },
      { feature: 'Consistent Vehicle', triveni: true, aggregators: false, detail: 'Same vehicle class, no surprises' },
      { feature: 'Well-Maintained Fleet', triveni: true, aggregators: 'Varies', detail: 'Regular maintenance, daily cleaning' }
    ]
  },
  {
    category: 'Availability & Reliability',
    icon: Clock,
    items: [
      { feature: 'Guaranteed Availability', triveni: true, aggregators: false, detail: 'Dedicated vehicles always available' },
      { feature: 'No Cancellations', triveni: true, aggregators: false, detail: 'Driver won\'t cancel last minute' },
      { feature: 'Peak Hour Reliability', triveni: true, aggregators: false, detail: 'Same service during rush hours' },
      { feature: 'Festival/Holiday Service', triveni: true, aggregators: 'Limited', detail: '365 days operation guaranteed' },
      { feature: 'Backup Vehicle', triveni: true, aggregators: false, detail: 'Replacement within 30 mins if needed' }
    ]
  },
  {
    category: 'Business Features',
    icon: Building2,
    items: [
      { feature: 'Account Manager', triveni: true, aggregators: false, detail: 'Single point of contact for all needs' },
      { feature: 'Custom Routes', triveni: true, aggregators: false, detail: 'Routes optimized for your locations' },
      { feature: 'MIS Reports', triveni: true, aggregators: 'Basic', detail: 'Detailed monthly usage reports' },
      { feature: 'Employee Roster', triveni: true, aggregators: false, detail: 'Manage employee transport roster' },
      { feature: 'Shift Support', triveni: true, aggregators: false, detail: 'Multiple shift timings handled' }
    ]
  },
  {
    category: 'Safety & Compliance',
    icon: Shield,
    items: [
      { feature: 'GPS Tracking', triveni: true, aggregators: true, detail: 'Real-time vehicle tracking' },
      { feature: 'Women Safety Protocol', triveni: true, aggregators: 'Basic', detail: 'Guard service, verified drivers for night shifts' },
      { feature: 'Emergency Support', triveni: true, aggregators: true, detail: '24/7 control room monitoring' },
      { feature: 'Insurance Coverage', triveni: true, aggregators: true, detail: 'Comprehensive insurance for all trips' },
      { feature: 'Compliance Documentation', triveni: true, aggregators: 'Limited', detail: 'All documents available for audits' }
    ]
  }
];

const whyChooseTriveni = [
  {
    title: 'Cost Predictability',
    description: 'No surge pricing, fixed monthly rates. Plan your transport budget with confidence.',
    icon: '💰'
  },
  {
    title: 'Reliability Guarantee',
    description: 'Dedicated vehicles mean no cancellations, no waiting, no last-minute surprises.',
    icon: '✅'
  },
  {
    title: 'Professional Service',
    description: 'Corporate-trained drivers who understand business etiquette and punctuality.',
    icon: '👔'
  },
  {
    title: 'Single Point of Contact',
    description: 'Dedicated account manager for all your transport needs - no anonymous support tickets.',
    icon: '🎯'
  },
  {
    title: 'Scalable Solutions',
    description: 'From 10 employees to 1000+ - our 500+ fleet scales with your requirements.',
    icon: '📈'
  },
  {
    title: 'Compliance Ready',
    description: 'GST invoicing, proper documentation, all compliance requirements covered.',
    icon: '📋'
  }
];

export default function ComparisonPage() {
  // Schema markup - Comprehensive structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.trivenicabs.in/#organization",
    "name": "Triveni Cabs",
    "url": "https://www.trivenicabs.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trivenicabs.in/logo.png"
    },
    "sameAs": [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/trivenicabs",
      "https://twitter.com/trivenicabs",
      "https://www.linkedin.com/company/trivenicabs"
    ]
  };

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://www.trivenicabs.in/corporate-cab-vs-aggregators/#article",
    "headline": "Corporate Cab Service vs Ola/Uber for Business Transport: Complete 2024 Comparison",
    "description": "Comprehensive comparison of dedicated corporate cab services versus ride aggregators (Ola, Uber) for business transportation needs. Covers pricing, reliability, driver quality, and GST compliance.",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.trivenicabs.in/images/sightseeing/Delhi/Delhi_hero_section.jpg",
      "width": 1200,
      "height": 630
    },
    "datePublished": "2024-01-01T00:00:00+05:30",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#organization"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.trivenicabs.in/corporate-cab-vs-aggregators"
    },
    "articleSection": "Corporate Transportation",
    "keywords": "corporate cab vs ola uber, dedicated corporate transport, business cab service, corporate transport comparison",
    "wordCount": 2500,
    "about": {
      "@type": "Thing",
      "name": "Corporate Transportation Services"
    },
    "mentions": [
      { "@type": "Thing", "name": "Ola" },
      { "@type": "Thing", "name": "Uber" },
      { "@type": "Thing", "name": "Corporate Transportation" },
      { "@type": "Thing", "name": "Employee Transport" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Corporate Transportation", "item": "https://www.trivenicabs.in/corporate-transportation-service" },
      { "@type": "ListItem", "position": 3, "name": "Corporate Cab vs Aggregators", "item": "https://www.trivenicabs.in/corporate-cab-vs-aggregators" }
    ]
  };

  // Comparison Table Schema for rich snippets
  const comparisonTableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    "about": "Corporate Cab vs Ola/Uber Comparison",
    "description": "Feature-by-feature comparison of dedicated corporate cab services versus ride aggregators"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonTableSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-white/60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Corporate vs Aggregators</span>
            </nav>

            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 mb-6">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium text-sm tracking-widest uppercase">Comparison Guide</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Corporate Cab Service
              <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">vs Ola/Uber</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Discover why leading companies across India are switching from ride aggregators to dedicated corporate transportation partners
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917668570551"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Get Corporate Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/get-corporate-quote"
                className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                Request Proposal
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-8 bg-slate-800 border-y border-slate-700">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {[
                { text: 'No Surge Pricing', icon: DollarSign, color: 'text-green-400' },
                { text: 'Dedicated Drivers', icon: Users, color: 'text-cyan-400' },
                { text: 'GST Invoicing', icon: CheckCircle2, color: 'text-blue-400' },
                { text: '24/7 Support', icon: Headphones, color: 'text-purple-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Tables */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                Feature-by-Feature <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Comparison</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                See how dedicated corporate transport compares to ride aggregators across key parameters
              </p>
            </div>

            <div className="space-y-12">
              {comparisonData.map((section, sIdx) => (
                <div key={sIdx} className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{section.category}</h3>
                  </div>

                  {/* Table Header */}
                  <div className="grid grid-cols-4 gap-4 mb-4 pb-4 border-b border-slate-200">
                    <div className="font-semibold text-slate-700">Feature</div>
                    <div className="text-center font-semibold text-cyan-600">Triveni Cabs</div>
                    <div className="text-center font-semibold text-slate-500">Aggregators</div>
                    <div className="font-semibold text-slate-700 hidden md:block">Details</div>
                  </div>

                  {/* Table Rows */}
                  <div className="space-y-3">
                    {section.items.map((item, iIdx) => (
                      <div key={iIdx} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-slate-100 last:border-0">
                        <div className="font-medium text-slate-800">{item.feature}</div>
                        <div className="flex justify-center">
                          {item.triveni === true ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : (
                            <span className="text-sm text-slate-600">{item.triveni}</span>
                          )}
                        </div>
                        <div className="flex justify-center">
                          {item.aggregators === true ? (
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                          ) : item.aggregators === false ? (
                            <XCircle className="w-6 h-6 text-red-400" />
                          ) : (
                            <span className="text-sm text-amber-600 font-medium">{item.aggregators}</span>
                          )}
                        </div>
                        <div className="text-sm text-slate-500 hidden md:block">{item.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Triveni */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full mb-6 border border-white/20">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">The Triveni Advantage</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                Why Companies <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Choose Us</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseTriveni.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison Example */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Real Cost <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text">Comparison</span>
              </h2>
              <p className="text-lg text-slate-600">
                Example: 50 employees, daily transport, Delhi NCR
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Aggregator Card */}
              <div className="bg-slate-100 rounded-3xl p-8 border-2 border-slate-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-700 mb-2">With Aggregators</h3>
                  <div className="text-4xl font-black text-slate-900">₹3-4 Lakhs</div>
                  <div className="text-slate-500">per month (estimated)</div>
                </div>

                <div className="space-y-3">
                  {[
                    'Variable pricing daily',
                    'Surge during peak hours',
                    'Different drivers every day',
                    'No dedicated support',
                    'Complex expense tracking'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Triveni Card */}
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white/90 mb-2">With Triveni Cabs</h3>
                  <div className="text-4xl font-black text-white">₹2-2.5 Lakhs</div>
                  <div className="text-white/70">per month (fixed)</div>
                </div>

                <div className="space-y-3">
                  {[
                    'Fixed monthly rate',
                    'No surge pricing ever',
                    'Dedicated drivers',
                    'Account manager support',
                    'Single GST invoice'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white">
                      <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="text-lg font-bold text-white">Save up to 40%</div>
                  <div className="text-white/70 text-sm">on monthly transport costs</div>
                </div>
              </div>
            </div>

            <p className="text-center text-slate-500 text-sm mt-6">
              * Actual savings may vary based on distance, routes, and specific requirements
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-500 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Ready to Make the Switch?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join companies who have already discovered the benefits of dedicated corporate transportation
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917668570551"
                className="group inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7668570551
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/get-corporate-quote"
                className="group inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 flex items-center justify-center gap-6 text-white/80 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">500+ Vehicles</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">5 Cities</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
