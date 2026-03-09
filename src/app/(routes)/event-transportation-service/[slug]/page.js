import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getAllEventTypeSlugs,
  getEventTypeBySlug,
  getAllEventTypes
} from '@/utilis/eventTransportData';

// ISR: Revalidate every hour for better SEO and performance
export const revalidate = false;
export const dynamicParams = false;
// Centralized icon imports for better bundle optimization
import {
  Phone,
  MapPin,
  Shield,
  Clock,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  TrendingUp,
  Car,
  HelpCircle,
  Users,
  Building2,
  Calendar
} from '@/components/ui/icons';

export async function generateStaticParams() {
  const slugs = getAllEventTypeSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const eventType = getEventTypeBySlug(slug);

  if (!eventType) {
    return { title: 'Event Transportation Services | Triveni Cabs' };
  }

  return {
    title: eventType.metaTitle,
    description: eventType.metaDescription,
    keywords: eventType.keywords.join(', '),
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: {
      canonical: `/event-transportation-service/${slug}`,
    },
    openGraph: {
      title: eventType.title,
      description: eventType.description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/event-transportation-service/${slug}`,
      siteName: 'Triveni Cabs',
      images: [
        {
          url: eventType.heroImage || '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
          width: 1200,
          height: 630,
          alt: eventType.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: eventType.metaTitle,
      description: eventType.metaDescription,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [eventType.heroImage || '/images/sightseeing/Delhi/Delhi_hero_section.jpg']
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
  };
}

export default async function EventTypePage({ params }) {
  const { slug } = await params;
  const eventType = getEventTypeBySlug(slug);

  if (!eventType) {
    notFound();
  }

  const allEventTypes = getAllEventTypes();
  const otherEventTypes = allEventTypes.filter(e => e.slug !== slug).slice(0, 4);

  // Schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": eventType.title,
    "name": eventType.name,
    "description": eventType.description,
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": eventType.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Event Transportation", "item": "https://www.trivenicabs.in/event-transportation-service" },
      { "@type": "ListItem", "position": 3, "name": eventType.name, "item": `https://www.trivenicabs.in/event-transportation-service/${slug}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen with Background Image */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={eventType.heroImage || '/images/sightseeing/Delhi/Delhi_hero_section.jpg'}
              alt={eventType.title}
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
              <Link href="/event-transportation-service" className="hover:text-white transition-colors">Events</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-400">{eventType.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                    <span className="text-4xl">{eventType.icon}</span>
                    <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">{eventType.name}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  {eventType.title.split(' ').slice(0, 2).join(' ')}
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    {eventType.title.split(' ').slice(2).join(' ') || 'Services'}
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                  {eventType.tagline}
                </p>

                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  {eventType.description}
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
                    href="tel:+917668570551"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    Get Event Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`https://wa.me/917668570551?text=I need ${eventType.name} service for my event`}
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
                    {eventType.features.slice(0, 4).map((feature, idx) => (
                      <div
                        key={idx}
                        className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform text-2xl">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-sm text-slate-400">{feature.description}</p>
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

        {/* Services/Features Section - Beautiful Grid Design */}
        <section className="py-32 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-cyan-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-200/30 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full mb-8 shadow-lg shadow-slate-200/50 border border-slate-100">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <span className="text-slate-600 font-semibold text-sm tracking-wider uppercase">What We Offer</span>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Complete {eventType.name}
                <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text">Solutions</span>
              </h2>

              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Everything you need for seamless {eventType.name.toLowerCase()} transportation
              </p>
            </div>

            {/* Features Grid - 3 Column Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventType.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-3xl p-8 h-full border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-100/50 hover:border-cyan-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                    {/* Gradient Corner Accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${
                      idx % 6 === 0 ? 'bg-gradient-to-bl from-cyan-500' :
                      idx % 6 === 1 ? 'bg-gradient-to-bl from-blue-500' :
                      idx % 6 === 2 ? 'bg-gradient-to-bl from-indigo-500' :
                      idx % 6 === 3 ? 'bg-gradient-to-bl from-violet-500' :
                      idx % 6 === 4 ? 'bg-gradient-to-bl from-purple-500' :
                      'bg-gradient-to-bl from-teal-500'
                    }`} />

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:border-transparent transition-all duration-300">
                      <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ${
                      idx % 6 === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/30' :
                      idx % 6 === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/30' :
                      idx % 6 === 2 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/30' :
                      idx % 6 === 3 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/30' :
                      idx % 6 === 4 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/30' :
                      'bg-gradient-to-br from-teal-500 to-teal-600 shadow-teal-500/30'
                    }`}>
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      idx % 6 === 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                      idx % 6 === 1 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                      idx % 6 === 2 ? 'bg-gradient-to-r from-indigo-500 to-violet-500' :
                      idx % 6 === 3 ? 'bg-gradient-to-r from-violet-500 to-purple-500' :
                      idx % 6 === 4 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                      'bg-gradient-to-r from-teal-500 to-cyan-500'
                    }`} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-2 pl-8 shadow-xl">
                <span className="text-white font-medium">Need a custom solution?</span>
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cities Section - Premium Dark Design */}
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
                <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                  All 5 Cities
                </span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Complete event transportation coverage across North India
              </p>
            </div>

            {/* Cities Grid with Premium Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: 'Delhi NCR', slug: 'delhi', desc: 'Covering Delhi, Noida, Gurgaon, Faridabad & Ghaziabad', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
                { city: 'Jaipur', slug: 'jaipur', desc: 'Pink City & surrounding Rajasthan destinations', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg' },
                { city: 'Chandigarh', slug: 'chandigarh', desc: 'Tricity region - Chandigarh, Mohali & Panchkula', image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg' },
                { city: 'Agra', slug: 'agra', desc: 'Taj City & Agra-Mathura circuit', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg' },
                { city: 'Dehradun', slug: 'dehradun', desc: 'Uttarakhand gateway including Mussoorie & Rishikesh', image: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg' }
              ].map((location, idx) => (
                <Link key={idx} href={`/event-transportation-service/city/${location.slug}`}>
                  <div className="group relative h-full">
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 ${
                      idx % 5 === 0 ? 'bg-cyan-500' :
                      idx % 5 === 1 ? 'bg-blue-500' :
                      idx % 5 === 2 ? 'bg-indigo-500' :
                      idx % 5 === 3 ? 'bg-violet-500' :
                      'bg-purple-500'
                    }`} />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-[2rem] overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 group-hover:-translate-y-2 h-full">
                      {/* City Image */}
                      <div className="relative h-44 overflow-hidden">
                        <Image
                          src={location.image}
                          alt={location.city}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                        <div className="absolute bottom-4 left-6 right-6">
                          <h3 className="text-2xl font-black text-white">{location.city}</h3>
                        </div>
                        {/* Hover Arrow */}
                        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-slate-400 leading-relaxed mb-3">{location.desc}</p>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                          View {location.city} Events <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Premium Cards Design */}
        <section className="py-32 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px]" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-blue-100 px-6 py-3 rounded-full mb-6">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text">Questions</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about our {eventType.name.toLowerCase()} services
              </p>
            </div>

            {/* FAQ Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {eventType.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Question Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
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
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

        {/* Other Event Types */}
        <section className="py-24 px-4 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
                Explore Other Event Types
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We provide specialized transportation for all types of events
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherEventTypes.map((event, idx) => (
                <Link key={event.slug} href={`/event-transportation-service/${event.slug}`}>
                  <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 h-full">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform ${
                      idx % 4 === 0 ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' :
                      idx % 4 === 1 ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30' :
                      idx % 4 === 2 ? 'bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30' :
                      'bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/30'
                    }`}>
                      {event.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">{event.name}</h3>
                    <p className="text-sm text-slate-500">{event.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
                  Ready to Make Your
                  <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    {eventType.name} Memorable?
                  </span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Get a customized transportation solution designed specifically for your event. Transparent pricing, professional service.
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
                      <span className="text-5xl">{eventType.icon}</span>
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
                      href={`https://wa.me/917668570551?text=I need ${eventType.name} service for my event`}
                      className="group flex items-center justify-between w-full bg-green-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Us
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/contact"
                      className="group flex items-center justify-between w-full bg-white text-slate-900 p-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <Calendar className="w-6 h-6" />
                        Request Quote
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
