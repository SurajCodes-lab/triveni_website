import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import AEOHead from '@/components/seo/AEOHead';
import { getWeddingCarModel, getAllWeddingCarModelSlugs } from '@/utilis/weddingCarModels';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight, Shield, Clock,
  Car, Heart, Star, Sparkles, Crown, Award, Users, Zap
} from '@/components/ui/icons';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = getAllWeddingCarModelSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const carModel = getWeddingCarModel(slug);

  if (!carModel) {
    return { title: 'Car Not Found | Triveni Cabs' };
  }

  return {
    title: carModel.metaTitle,
    description: carModel.metaDescription,
    alternates: {
      canonical: `https://www.trivenicabs.in/wedding/cars/${slug}`,
    },
    openGraph: {
      title: carModel.metaTitle,
      description: carModel.metaDescription,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [{ url: carModel.heroImage, width: 1200, height: 630, alt: carModel.title }]
    },
    twitter: {
      card: 'summary_large_image',
      title: carModel.title,
      description: carModel.metaDescription,
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    keywords: carModel.keywords,
  };
}

export default async function WeddingCarModelPage({ params }) {
  const { slug } = await params;
  const carModel = getWeddingCarModel(slug);

  if (!carModel) {
    notFound();
  }

  // Brand-specific accent colors
  const brandColors = {
    'BMW': { primary: 'from-blue-600 to-cyan-500', accent: 'text-cyan-400', bg: 'bg-cyan-500', light: 'from-blue-950 via-slate-950 to-cyan-950', badge: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30' },
    'Audi': { primary: 'from-red-600 to-rose-500', accent: 'text-rose-400', bg: 'bg-rose-500', light: 'from-red-950 via-slate-950 to-rose-950', badge: 'from-rose-500/20 to-red-500/20', border: 'border-rose-500/30' },
    'Mercedes-Benz': { primary: 'from-slate-600 to-zinc-400', accent: 'text-amber-400', bg: 'bg-amber-500', light: 'from-zinc-950 via-slate-950 to-amber-950', badge: 'from-amber-500/20 to-slate-500/20', border: 'border-amber-500/30' },
    'Vintage': { primary: 'from-amber-700 to-yellow-500', accent: 'text-amber-300', bg: 'bg-amber-600', light: 'from-amber-950 via-stone-950 to-yellow-950', badge: 'from-amber-500/20 to-yellow-500/20', border: 'border-amber-500/30' },
  };
  const colors = brandColors[carModel.brand] || brandColors['BMW'];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": carModel.title,
    "description": carModel.description,
    "brand": { "@type": "Brand", "name": carModel.brand },
    "image": `https://www.trivenicabs.in${carModel.heroImage}`,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": carModel.models[0].pricePerDay.split('-')[0].trim().replace('₹', '').replace(',', ''),
      "highPrice": carModel.models[carModel.models.length - 1].pricePerDay.split('-')[1]?.trim().split(' ')[0].replace('₹', '').replace(',', '') || '50000',
      "offerCount": String(carModel.models.length),
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Wedding", "item": "https://www.trivenicabs.in/wedding" },
      { "@type": "ListItem", "position": 3, "name": carModel.name, "item": `https://www.trivenicabs.in/wedding/cars/${slug}` }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": carModel.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="wedding" data={{ url: `/wedding/cars/${slug}`, title: carModel.name || '' }} />

      <div className="min-h-screen bg-slate-950">

        {/* ===== HERO: Luxury Showroom Dark Theme ===== */}
        <section className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br ${colors.light}`}>
          {/* Cinematic gradient overlays */}
          <div className="absolute inset-0">
            <div className={`absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-r ${colors.primary} opacity-10 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2`} />
            <div className={`absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l ${colors.primary} opacity-15 rounded-full blur-[180px] translate-x-1/3 translate-y-1/3`} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-[120px]" />
          </div>

          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }} />

          {/* Diagonal gold accent line */}
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-amber-500/20 to-transparent transform rotate-12 translate-x-[40vw]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-24">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-12">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/wedding" className="hover:text-white/80 transition-colors">Wedding</Link>
              <ChevronRight className="w-3 h-3" />
              <span className={colors.accent}>{carModel.name}</span>
            </nav>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left: Text content - 3 cols */}
              <div className="lg:col-span-3 space-y-8">
                {/* Brand badge */}
                <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${colors.badge} backdrop-blur-xl px-6 py-3 rounded-full ${colors.border} border`}>
                  <Crown className={`w-5 h-5 ${colors.accent}`} />
                  <span className={`${colors.accent} font-bold text-xs tracking-[0.25em] uppercase`}>{carModel.brand} Collection</span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight">
                  {carModel.brand}
                  <span className={`block text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text`}>
                    Wedding Car
                  </span>
                </h1>

                <p className="text-lg text-white/50 max-w-xl leading-relaxed font-light">{carModel.subtitle}</p>

                {/* Showroom stats bar */}
                <div className="flex items-center gap-8 py-6 border-t border-b border-white/10">
                  {[
                    { value: String(carModel.models.length), label: 'Models', icon: Car },
                    { value: '4.9', label: 'Rating', icon: Star },
                    { value: '420+', label: 'Weddings', icon: Heart },
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <stat.icon className={`w-5 h-5 ${colors.accent}`} />
                      <div>
                        <div className="text-2xl font-black text-white">{stat.value}</div>
                        <div className="text-xs text-white/30 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className={`group inline-flex items-center justify-center gap-3 bg-gradient-to-r ${colors.primary} text-white px-8 py-5 rounded-xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all duration-300`}>
                    <Phone className="w-5 h-5" />
                    Book {carModel.brand}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href={`https://wa.me/917668570551?text=I want to book a ${carModel.brand} for my wedding`} className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/10 transition-all">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right: Car showcase image - 2 cols */}
              <div className="lg:col-span-2 hidden lg:block">
                <div className="relative">
                  {/* Glow behind image */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.primary} rounded-3xl blur-3xl opacity-20`} />
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5]">
                    <Image
                      src={carModel.heroImage}
                      alt={carModel.title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {/* Price overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                        <div className="text-xs text-white/50 uppercase tracking-widest mb-1">Starting from</div>
                        <div className={`text-3xl font-black ${colors.accent}`}>{carModel.models[0].pricePerDay}</div>
                        <div className="text-sm text-white/40">per day with chauffeur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Explore</span>
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2.5 bg-white/40 rounded-full" />
            </div>
          </div>
        </section>

        {/* ===== MODEL LINEUP: Bento Grid Showroom ===== */}
        <section className="py-28 px-4 bg-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className={`text-xs font-bold ${colors.accent} tracking-[0.3em] uppercase`}>The Lineup</span>
                <h2 className="text-5xl md:text-6xl font-black text-white mt-3">
                  Choose Your <span className={`text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text`}>{carModel.brand}</span>
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <div className="text-4xl font-black text-white/10">{String(carModel.models.length).padStart(2, '0')}</div>
                <div className="text-xs text-white/30 tracking-widest uppercase">Models</div>
              </div>
            </div>

            {/* Bento-style model cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {carModel.models.map((model, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-[2rem] transition-all duration-500 hover:-translate-y-2 ${
                    idx === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Card glow */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.primary} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                  <div className={`relative ${idx === 0 ? 'p-10' : 'p-8'} bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-[2rem] hover:border-white/20 transition-colors`}>
                    {/* Top row */}
                    <div className={`flex ${idx === 0 ? 'md:flex-row flex-col' : 'flex-col'} gap-6`}>
                      <div className={`flex-1 ${idx === 0 ? 'md:pr-8 md:border-r md:border-white/10' : ''}`}>
                        {/* Model number */}
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-white/10 text-6xl font-black leading-none">{String(idx + 1).padStart(2, '0')}</span>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-black text-white">{model.name}</h3>
                            <span className="text-sm text-white/30">{model.type}</span>
                          </div>
                        </div>

                        <p className={`text-sm ${colors.accent} font-semibold mb-4`}>Ideal for: {model.ideal}</p>

                        {/* Spec pills */}
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-white/5 text-white/60 px-4 py-2 rounded-full border border-white/10">
                            <Users className="w-3 h-3 inline mr-1" />{model.capacity}
                          </span>
                          <span className="text-xs bg-white/5 text-white/60 px-4 py-2 rounded-full border border-white/10">
                            <Shield className="w-3 h-3 inline mr-1" />Chauffeur Driven
                          </span>
                          <span className="text-xs bg-white/5 text-white/60 px-4 py-2 rounded-full border border-white/10">
                            <Heart className="w-3 h-3 inline mr-1" />Decoration Included
                          </span>
                        </div>
                      </div>

                      {/* Price section */}
                      <div className={`${idx === 0 ? 'md:pl-8 md:flex md:items-center' : 'pt-4 border-t border-white/10'}`}>
                        <div>
                          <div className="text-xs text-white/30 uppercase tracking-widest mb-2">Per Day</div>
                          <div className={`text-3xl md:text-4xl font-black ${colors.accent}`}>{model.pricePerDay}</div>
                          <Link href="tel:+917668570551" className={`inline-flex items-center gap-2 mt-4 text-sm font-bold bg-gradient-to-r ${colors.primary} text-white px-6 py-3 rounded-xl hover:scale-105 transition-transform`}>
                            Book Now <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY THIS BRAND: Split Feature Showcase ===== */}
        <section className="py-28 px-4 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-b ${colors.light}`} />
          {/* Diagonal accent */}
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colors.primary}`} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left: Large text */}
              <div>
                <span className={`text-xs font-bold ${colors.accent} tracking-[0.3em] uppercase`}>Why {carModel.brand}?</span>
                <h2 className="text-5xl md:text-6xl font-black text-white mt-4 mb-8 leading-tight">
                  The Art of
                  <span className={`block text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text`}>Wedding Luxury</span>
                </h2>
                <p className="text-lg text-white/40 leading-relaxed mb-10">{carModel.description}</p>

                {/* Feature list with staggered animation feel */}
                <div className="space-y-4">
                  {carModel.features.map((feature, idx) => (
                    <div key={idx} className="group flex items-center gap-5 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/10 transition-all">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.primary} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        <CheckCircle2 className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/70 font-medium group-hover:text-white/90 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Decoration packages as floating cards */}
              {carModel.decorationOptions && (
                <div className="space-y-6">
                  <span className={`text-xs font-bold ${colors.accent} tracking-[0.3em] uppercase`}>Decoration Themes</span>
                  <h3 className="text-3xl font-black text-white">Flower & Decor Packages</h3>

                  {carModel.decorationOptions.map((option, idx) => (
                    <div key={idx} className="group relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${colors.primary} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity`} />
                      <div className="relative bg-white/[0.04] backdrop-blur-sm rounded-2xl p-7 border border-white/[0.08] hover:border-white/20 transition-all group-hover:-translate-y-1">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.primary} flex items-center justify-center`}>
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-white text-lg">{option.name}</h4>
                              <p className="text-sm text-white/40">{option.description}</p>
                            </div>
                          </div>
                          <div className={`text-2xl font-black ${colors.accent}`}>{option.price}</div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Quick booking card */}
                  <div className={`bg-gradient-to-r ${colors.primary} rounded-2xl p-8 text-center`}>
                    <Heart className="w-8 h-8 text-white mx-auto mb-3" />
                    <h4 className="text-xl font-bold text-white mb-2">Custom Decoration?</h4>
                    <p className="text-white/70 text-sm mb-4">Tell us your wedding theme and we will create magic</p>
                    <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform">
                      <Phone className="w-4 h-4" /> Call Now
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ===== FAQ: Magazine Q&A Layout ===== */}
        <section className="py-28 px-4 bg-slate-950 relative">
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className={`text-xs font-bold ${colors.accent} tracking-[0.3em] uppercase`}>Knowledge Base</span>
              <h2 className="text-5xl md:text-6xl font-black text-white mt-3">
                Frequently Asked
                <span className={`block text-transparent bg-gradient-to-r ${colors.primary} bg-clip-text`}>Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {carModel.faqs.map((faq, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${colors.primary} rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all pl-10">
                    <div className="flex items-start gap-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${colors.primary} flex items-center justify-center flex-shrink-0 text-white font-black text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                        Q{idx + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90">{faq.question}</h3>
                        <p className="text-white/40 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== EXPLORE: Other Cars Navigation ===== */}
        <section className="py-20 px-4 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-white/30 tracking-[0.3em] uppercase">Our Collection</span>
              <h2 className="text-4xl font-black text-white mt-3">Explore More Wedding Cars</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { slug: 'bmw-wedding-car', label: 'BMW', color: 'from-blue-600 to-cyan-500' },
                { slug: 'audi-wedding-car', label: 'Audi', color: 'from-red-600 to-rose-500' },
                { slug: 'mercedes-wedding-car', label: 'Mercedes', color: 'from-slate-500 to-zinc-400' },
                { slug: 'vintage-car', label: 'Vintage', color: 'from-amber-600 to-yellow-500' },
              ].filter(c => c.slug !== slug).map(car => (
                <Link key={car.slug} href={`/wedding/cars/${car.slug}`} className="group bg-white/[0.03] rounded-2xl p-5 text-center border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all hover:-translate-y-1">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${car.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Car className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-bold text-white/70 group-hover:text-white">{car.label}</span>
                </Link>
              ))}
              <Link href="/wedding/baraat-tempo-traveller" className="group bg-white/[0.03] rounded-2xl p-5 text-center border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-white/70 group-hover:text-white">Baraat Tempo</span>
              </Link>
              <Link href="/wedding/car-decoration-packages" className="group bg-white/[0.03] rounded-2xl p-5 text-center border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all hover:-translate-y-1">
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-bold text-white/70 group-hover:text-white">Decoration</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== RELATED SERVICES: Cross-Category Links ===== */}
        <section className="py-24 px-4 bg-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className={`text-xs font-bold ${colors.accent} tracking-[0.3em] uppercase`}>More Services</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Related Services You May Like</h2>
              <p className="text-white/40 mt-3 max-w-2xl mx-auto">Planning a wedding involves more than just the car. Explore our complete wedding and travel services across North India.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/wedding', title: 'Wedding Car Rental Hub', desc: 'Browse all wedding car options, cities, and packages for your special day.', tag: 'Wedding Hub' },
                { href: '/wedding/baraat-tempo-traveller', title: 'Baraat Tempo Traveller with DJ', desc: 'AC tempo with DJ sound system, LED lights, and decoration for a grand baraat procession.', tag: 'Baraat' },
                { href: '/wedding/car-decoration-packages', title: 'Wedding Car Decoration', desc: 'Professional floral decoration packages from classic to royal themes with fresh flowers.', tag: 'Decoration' },
                { href: '/wedding/doli-car-rental', title: 'Doli / Vidai Car Rental', desc: 'Beautifully decorated luxury cars for the emotional bride farewell ceremony.', tag: 'Doli' },
                { href: '/outstation-cabs', title: 'Outstation Cab for Guests', desc: 'Book outstation cabs starting at just ₹11/km for wedding guests travelling from other cities.', tag: 'Outstation' },
                { href: '/airport-service', title: 'Airport Pickup for Guests', desc: 'Arrange airport transfers for destination wedding guests arriving by flight.', tag: 'Airport' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="group relative bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06] hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className={`inline-block text-xs font-bold ${colors.accent} tracking-wider uppercase mb-3`}>{item.tag}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-white/90">{item.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                  <ArrowRight className={`w-5 h-5 ${colors.accent} mt-4 group-hover:translate-x-1 transition-transform`} />
                </Link>
              ))}
            </div>

            {/* Contextual cross-links */}
            <div className="mt-12 bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-xl font-bold text-white mb-4">Wedding Transportation Beyond the Car</h3>
              <p className="text-white/50 leading-relaxed">
                A {carModel.brand} makes a stunning bride or groom entry, but there is more to wedding transportation. Need a <Link href="/wedding/baraat-tempo-traveller" className={`${colors.accent} font-semibold hover:underline`}>baraat tempo traveller with DJ</Link> for the procession? Looking for professional <Link href="/wedding/car-decoration-packages" className={`${colors.accent} font-semibold hover:underline`}>wedding car decoration</Link> to match your theme? Or perhaps a beautifully decorated <Link href="/wedding/doli-car-rental" className={`${colors.accent} font-semibold hover:underline`}>doli car for the vidai ceremony</Link>? We handle it all. For destination weddings, our <Link href="/outstation-cabs" className={`${colors.accent} font-semibold hover:underline`}>outstation cab service</Link> starting at just ₹11/km can transport guests from <Link href="/delhi" className={`${colors.accent} font-semibold hover:underline`}>Delhi</Link>, <Link href="/jaipur" className={`${colors.accent} font-semibold hover:underline`}>Jaipur</Link>, or <Link href="/chandigarh" className={`${colors.accent} font-semibold hover:underline`}>Chandigarh</Link>. We also offer <Link href="/airport-service/delhi" className={`${colors.accent} font-semibold hover:underline`}>Delhi airport taxi service</Link> for guests flying in. Check our <Link href="/reviews" className={`${colors.accent} font-semibold hover:underline`}>customer reviews</Link> and <Link href="/safety" className={`${colors.accent} font-semibold hover:underline`}>safety standards</Link> for peace of mind.
              </p>
            </div>
          </div>
        </section>

        {/* ===== POPULAR LINKS: Footer-Style Grid ===== */}
        <section className="py-16 px-4 bg-slate-950 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Popular Wedding Cities */}
              <div>
                <h3 className="text-sm font-bold text-white/60 tracking-wider uppercase mb-5">Wedding Car by City</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/wedding/delhi', label: 'Wedding Car Delhi' },
                    { href: '/wedding/jaipur', label: 'Wedding Car Jaipur' },
                    { href: '/wedding/chandigarh', label: 'Wedding Car Chandigarh' },
                    { href: '/wedding/agra', label: 'Wedding Car Agra' },
                    { href: '/wedding/shimla', label: 'Wedding Car Shimla' },
                    { href: '/wedding/udaipur', label: 'Wedding Car Udaipur' },
                    { href: '/wedding/lucknow', label: 'Wedding Car Lucknow' },
                    { href: '/wedding/jodhpur', label: 'Wedding Car Jodhpur' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-white/30 hover:text-white/70 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>

              {/* Popular Routes */}
              <div>
                <h3 className="text-sm font-bold text-white/60 tracking-wider uppercase mb-5">Popular Cab Routes</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/outstation-cabs', label: 'Outstation Cabs' },
                    { href: '/one-way-cab', label: 'One Way Cab Booking' },
                    { href: '/round-trip-cab', label: 'Round Trip Cab' },
                    { href: '/local-taxi', label: 'Local Taxi Service' },
                    { href: '/same-day-taj-mahal-tour', label: 'Same Day Taj Mahal Tour' },
                    { href: '/delhi-airport-to-agra-taxi', label: 'Delhi Airport to Agra' },
                    { href: '/same-day-agra-tour-from-delhi', label: 'Same Day Agra Tour' },
                    { href: '/golden-triangle-english-speaking-driver', label: 'Golden Triangle Tour' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-white/30 hover:text-white/70 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>

              {/* Popular Cities */}
              <div>
                <h3 className="text-sm font-bold text-white/60 tracking-wider uppercase mb-5">Popular Cities</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/delhi', label: 'Delhi Cab Service' },
                    { href: '/jaipur', label: 'Jaipur Cab Service' },
                    { href: '/agra', label: 'Agra Cab Service' },
                    { href: '/chandigarh', label: 'Chandigarh Cab Service' },
                    { href: '/shimla', label: 'Shimla Cab Service' },
                    { href: '/manali', label: 'Manali Cab Service' },
                    { href: '/haridwar', label: 'Haridwar Cab Service' },
                    { href: '/rishikesh', label: 'Rishikesh Cab Service' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-white/30 hover:text-white/70 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>

              {/* Popular Services */}
              <div>
                <h3 className="text-sm font-bold text-white/60 tracking-wider uppercase mb-5">More Services</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/airport-service', label: 'Airport Transfer' },
                    { href: '/corporate-transportation-service', label: 'Corporate Cab Service' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/religious-tours', label: 'Religious Tour Packages' },
                    { href: '/sightseeing', label: 'Sightseeing Tours' },
                    { href: '/pricing', label: 'View Our Pricing' },
                    { href: '/safety', label: 'Safety Standards' },
                    { href: '/reviews', label: 'Customer Reviews' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-white/30 hover:text-white/70 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA: Premium Booking Banner ===== */}
        <section className="relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-r ${colors.primary}`} />
          {/* Geometric shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-white/10 rotate-12" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
            <Crown className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Reserve Your {carModel.brand}
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              {carModel.tagline}. Book today for the most special day of your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-xl font-black text-lg shadow-2xl hover:scale-[1.03] transition-all">
                <Phone className="w-5 h-5" /> +91 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=I want to book a ${carModel.brand} for my wedding`} className="inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-xl text-white px-10 py-5 rounded-xl font-black text-lg border border-white/30 hover:bg-white/30 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> <Link href="/safety" className="hover:text-white/80 transition-colors">Verified Chauffeurs</Link></span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 24/7 Available</span>
              <span className="flex items-center gap-2"><Award className="w-4 h-4" /> <Link href="/pricing" className="hover:text-white/80 transition-colors">Best Price Guarantee</Link></span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4" /> <Link href="/reviews" className="hover:text-white/80 transition-colors">4.9/5 Customer Rating</Link></span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
