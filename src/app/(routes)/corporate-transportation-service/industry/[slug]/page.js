import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getIndustryBySlug,
  getAllIndustrySlugs
} from '@/utilis/corporateIndustryData';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = 3600;
// Centralized icon imports for better bundle optimization
import {
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  Car,
  Building2,
  Sparkles,
  HelpCircle,
  TrendingUp,
  Users,
  Star
} from '@/components/ui/icons';

// Generate static params for all industries
export async function generateStaticParams() {
  const slugs = getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each industry page
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Industry Not Found | Triveni Cabs',
    };
  }

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: {
      canonical: `/corporate-transportation-service/industry/${slug}`,
    },
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/corporate-transportation-service/industry/${slug}`,
      siteName: 'Triveni Cabs',
      images: [
        {
          url: industry.heroImage,
          width: 1200,
          height: 630,
          alt: industry.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.title,
      description: industry.metaDescription,
      images: [industry.heroImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    keywords: industry.keywords.join(', '),
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // Schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `Corporate Transportation for ${industry.name}`,
    "name": industry.title,
    "description": industry.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Agra" },
      { "@type": "City", "name": "Dehradun" }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Corporate Transportation", "item": "https://www.trivenicabs.in/corporate-transportation-service" },
      { "@type": "ListItem", "position": 3, "name": industry.name, "item": `https://www.trivenicabs.in/corporate-transportation-service/industry/${slug}` }
    ]
  };

  const faqSchema = industry.faqs && industry.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen Premium Design */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={industry.heroImage}
              alt={industry.title}
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
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/corporate-transportation-service" className="hover:text-white transition-colors">Corporate</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-400">{industry.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                    <span className="text-4xl">{industry.icon}</span>
                    <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">{industry.name}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  {industry.title.split(' ').slice(0, 2).join(' ')}
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    {industry.title.split(' ').slice(2).join(' ') || 'Solutions'}
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                  {industry.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '500+', label: 'Fleet Vehicles', icon: Car },
                    { value: '5', label: 'Cities Covered', icon: MapPin },
                    { value: '24/7', label: 'Support', icon: Clock }
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
                    href="/get-corporate-quote"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    Get Enterprise Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`https://wa.me/917668570551?text=I need corporate transport for my ${industry.name.toLowerCase()} company`}
                    className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right Side - Premium Feature Cards */}
              <div className="hidden lg:block">
                <div className="relative">
                  {/* Glow Effect Behind Cards */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl" />

                  <div className="relative grid grid-cols-2 gap-4">
                    {[
                      { title: 'Employee Transport', desc: 'Daily pick-up & drop', icon: Users },
                      { title: 'Executive Cars', desc: 'Premium sedans & SUVs', icon: Car },
                      { title: '24/7 Availability', desc: 'Round-the-clock service', icon: Clock },
                      { title: 'GPS Tracking', desc: 'Real-time monitoring', icon: TrendingUp }
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

        {/* Challenges & Solutions Section - Premium Bento Grid */}
        {industry.challenges && industry.challenges.length > 0 && (
          <section className="py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30" />
                  <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                    <Building2 className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm tracking-wider uppercase">Industry Challenges</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                  We Understand
                  <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text">{industry.name} Needs</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Specialized solutions designed for the unique transportation challenges of {industry.name.toLowerCase()}
                </p>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid lg:grid-cols-2 gap-8">
                {industry.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className={`group relative ${idx === 0 ? 'lg:row-span-2' : ''}`}
                  >
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                      idx % 4 === 0 ? 'bg-cyan-500' :
                      idx % 4 === 1 ? 'bg-blue-500' :
                      idx % 4 === 2 ? 'bg-indigo-500' :
                      'bg-purple-500'
                    }`} />

                    <div className={`relative h-full rounded-[2rem] p-10 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 ${
                      idx === 0
                        ? 'bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700'
                        : 'bg-white shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 hover:shadow-2xl'
                    }`}>
                      {/* Number Badge */}
                      <div className={`absolute top-8 right-8 w-16 h-16 rounded-2xl flex items-center justify-center border ${
                        idx === 0
                          ? 'bg-white/20 backdrop-blur-xl border-white/30'
                          : 'bg-gradient-to-br from-cyan-500 to-blue-600 border-transparent shadow-lg shadow-cyan-500/30'
                      }`}>
                        <span className="text-3xl font-black text-white">{String(idx + 1).padStart(2, '0')}</span>
                      </div>

                      {/* Animated Ring for first card */}
                      {idx === 0 && (
                        <>
                          <div className="absolute -bottom-20 -left-20 w-64 h-64 border-4 border-white/10 rounded-full" />
                          <div className="absolute -bottom-16 -left-16 w-52 h-52 border-2 border-white/10 rounded-full" />
                        </>
                      )}

                      <div className="relative z-10 h-full flex flex-col">
                        <h3 className={`text-2xl md:text-3xl font-black mb-4 ${
                          idx === 0 ? 'text-white' : 'text-slate-900'
                        }`}>
                          {challenge.title}
                        </h3>
                        <p className={`text-lg mb-6 ${
                          idx === 0 ? 'text-blue-100' : 'text-slate-500'
                        }`}>
                          {challenge.description}
                        </p>

                        {/* Solution Box */}
                        <div className={`mt-auto rounded-2xl p-6 ${
                          idx === 0
                            ? 'bg-white/10 backdrop-blur-sm border border-white/20'
                            : 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100'
                        }`}>
                          <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              idx === 0
                                ? 'bg-green-500/30'
                                : 'bg-green-500 shadow-lg shadow-green-500/30'
                            }`}>
                              <CheckCircle2 className={`w-5 h-5 ${idx === 0 ? 'text-green-300' : 'text-white'}`} />
                            </div>
                            <div>
                              <span className={`font-bold text-sm ${
                                idx === 0 ? 'text-green-300' : 'text-green-700'
                              }`}>Our Solution:</span>
                              <p className={`text-sm ${
                                idx === 0 ? 'text-white/80' : 'text-green-600'
                              }`}>{challenge.solution}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Service Cities Section - Premium Cards */}
        {industry.serviceCities && industry.serviceCities.length > 0 && (
          <section className="py-32 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[200px] animate-pulse" />
            </div>

            {/* Floating Particles */}
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
              <div className="text-center mb-20">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                    <MapPin className="w-6 h-6 text-cyan-300" />
                    <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">Service Coverage</span>
                  </div>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white mt-10 mb-6 leading-tight">
                  Serving
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text">
                    All 5 Cities
                  </span>
                </h2>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Complete coverage across all business locations in our network
                </p>
              </div>

              {/* Cities Grid with Premium Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industry.serviceCities.map((location, idx) => (
                  <div key={idx} className="group relative">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                      idx % 5 === 0 ? 'bg-cyan-500' :
                      idx % 5 === 1 ? 'bg-blue-500' :
                      idx % 5 === 2 ? 'bg-indigo-500' :
                      idx % 5 === 3 ? 'bg-violet-500' :
                      'bg-purple-500'
                    }`} />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg ${
                          idx % 5 === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/40' :
                          idx % 5 === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                          idx % 5 === 2 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40' :
                          idx % 5 === 3 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/40' :
                          'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/40'
                        }`}>
                          <MapPin className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-white">{location.city}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{location.coverage || location.areas}</p>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                        <ArrowRight className="w-5 h-5 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features Section - Ultra Premium 3D Design */}
        {industry.features && industry.features.length > 0 && (
          <section className="py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-30" />
                  <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                    <Sparkles className="w-5 h-5 text-white" />
                    <span className="text-white font-semibold text-sm tracking-wider uppercase">Features</span>
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                  What Makes Us
                  <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text">Different</span>
                </h2>
              </div>

              {/* Premium Features Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="group relative">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                      idx % 6 === 0 ? 'bg-cyan-500' :
                      idx % 6 === 1 ? 'bg-blue-500' :
                      idx % 6 === 2 ? 'bg-indigo-500' :
                      idx % 6 === 3 ? 'bg-violet-500' :
                      idx % 6 === 4 ? 'bg-purple-500' :
                      'bg-pink-500'
                    }`} />

                    <div className="relative bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                      {/* Number Badge */}
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
                        <span className="text-sm font-black text-slate-400 group-hover:text-white transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                      </div>

                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                        idx % 6 === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/40' :
                        idx % 6 === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                        idx % 6 === 2 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40' :
                        idx % 6 === 3 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/40' :
                        idx % 6 === 4 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/40' :
                        'bg-gradient-to-br from-pink-500 to-pink-600 shadow-pink-500/40'
                      }`}>
                        {feature.icon}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{feature.description}</p>

                      {/* Hover Arrow */}
                      <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                        <ArrowRight className="w-5 h-5 text-cyan-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section - Premium Cards Design */}
        {industry.faqs && industry.faqs.length > 0 && (
          <section className="py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[120px]" />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-6">
                  <HelpCircle className="w-5 h-5 text-indigo-600" />
                  <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                  Frequently Asked
                  <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">Questions</span>
                </h2>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                  Everything you need to know about our {industry.name.toLowerCase()} transportation services
                </p>
              </div>

              {/* FAQ Cards Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                {industry.faqs.map((faq, idx) => (
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
                      <p className="text-slate-500 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
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
        )}

        {/* CTA Section - Premium Split Design */}
        <section className="relative overflow-hidden">
          {/* Background */}
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
                    Streamline Your
                  </span>
                  <span className="block">{industry.name} Transport?</span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Get a customized transportation solution designed specifically for your {industry.name.toLowerCase()} needs. Flexible contracts, transparent pricing.
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
                      <span className="text-5xl">{industry.icon}</span>
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
                      href={`https://wa.me/917668570551?text=I need corporate transport for my ${industry.name.toLowerCase()} company`}
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
                        <Star className="w-6 h-6" />
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
