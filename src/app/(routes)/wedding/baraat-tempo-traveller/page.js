import Link from 'next/link';
import { getWeddingSpecialService } from '@/utilis/weddingCarModels';
import { getWeddingPages } from '@/utilis/linkingHelper';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight, Shield, Clock,
  Car, Heart, Star, Sparkles, Music, Crown, Users, Zap, PartyPopper
} from '@/components/ui/icons';

export const revalidate = 3600;

const service = getWeddingSpecialService('baraat-tempo-traveller');

export const metadata = {
  title: service?.metaTitle || 'Baraat Tempo Traveller | Triveni Cabs',
  description: service?.metaDescription || 'Book baraat tempo traveller with DJ for your wedding.',
  alternates: { canonical: 'https://www.trivenicabs.in/wedding/baraat-tempo-traveller' },
  openGraph: {
    title: 'Baraat Tempo Traveller with DJ | Triveni Cabs',
    description: 'Book baraat tempo traveller with DJ and music system. 12 to 26 seater AC tempo for wedding baraat.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/tempo/17_seater.jpg', width: 1200, height: 630, alt: 'Baraat Tempo Traveller with DJ' }]
  },
  keywords: service?.keywords || '',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function BaraatTempoPage() {
  const data = getWeddingSpecialService('baraat-tempo-traveller');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.title,
    "description": data.description,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "5000", "highPrice": "18000", "offerCount": "4", "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "320", "bestRating": "5" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Wedding", "item": "https://www.trivenicabs.in/wedding" },
      { "@type": "ListItem", "position": 3, "name": "Baraat Tempo Traveller", "item": "https://www.trivenicabs.in/wedding/baraat-tempo-traveller" }
    ]
  };

  const tempoHighlights = [
    { icon: Music, label: 'DJ System', desc: 'High-power speakers & bass' },
    { icon: Zap, label: 'LED Lights', desc: 'Colourful party lighting' },
    { icon: Users, label: '12-26 Seats', desc: 'Multiple capacity options' },
    { icon: Crown, label: 'VIP Setup', desc: 'Groom throne & decoration' },
    { icon: Shield, label: 'Safe Travel', desc: 'Experienced drivers' },
    { icon: Clock, label: 'On Time', desc: 'Punctual arrival guaranteed' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-slate-950">

        {/* === HERO: Festive Night Energy === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Multi-layer gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-slate-950 to-amber-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,146,60,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,179,8,0.1),transparent_50%)]" />

          {/* Confetti-like decorative dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60" />
            <div className="absolute top-[25%] right-[12%] w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }} />
            <div className="absolute top-[40%] left-[20%] w-2 h-2 bg-amber-300 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute top-[60%] right-[25%] w-2.5 h-2.5 bg-orange-300 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s' }} />
            <div className="absolute bottom-[30%] left-[15%] w-3 h-3 bg-yellow-500 rounded-full animate-pulse opacity-40" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.8s' }} />
            {/* Large decorative music notes */}
            <div className="absolute top-[10%] right-[8%] opacity-10">
              <Music className="w-32 h-32 text-orange-400" />
            </div>
            <div className="absolute bottom-[15%] left-[5%] opacity-[0.07] rotate-12">
              <PartyPopper className="w-40 h-40 text-yellow-400" />
            </div>
          </div>

          {/* Diagonal stripe accent */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-orange-500/5 to-transparent skew-x-[-12deg] translate-x-[15%]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
              <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/wedding" className="hover:text-orange-400 transition-colors">Wedding</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-orange-400 font-medium">Baraat Tempo Traveller</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
                  <Music className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-300 font-semibold text-sm tracking-widest uppercase">{data.tagline}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                  Baraat
                  <span className="block text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text">Tempo Traveller</span>
                  <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-slate-400 mt-2">with DJ & Lights</span>
                </h1>

                <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">{data.subtitle}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> Book Baraat Tempo
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a baraat tempo traveller with DJ" className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/10 hover:border-orange-500/30 hover:bg-white/10 transition-all">
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right: Highlight stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {tempoHighlights.map((item, idx) => (
                  <div key={idx} className={`group relative overflow-hidden rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                    idx === 0 ? 'col-span-2 bg-gradient-to-br from-orange-500/15 to-amber-500/10 border-orange-500/20 hover:border-orange-400/40' :
                    'bg-white/[0.03] border-white/[0.06] hover:border-orange-500/20 hover:bg-white/[0.05]'
                  }`}>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-full" />
                    <item.icon className={`w-8 h-8 mb-3 ${idx === 0 ? 'text-orange-400' : 'text-slate-500 group-hover:text-orange-400'} transition-colors`} />
                    <h3 className="text-white font-bold text-lg mb-1">{item.label}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION: The Baraat Experience === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.05),transparent_60%)]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-orange-400 text-sm font-bold tracking-widest uppercase mb-4">The Experience</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Make Your Baraat
                <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text"> Unforgettable</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
            </div>

            {/* Features - horizontal scroll-like cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.features.map((feature, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl p-5 border border-white/[0.06] hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500/10 rounded-full blur-xl group-hover:bg-orange-500/20 transition-colors" />
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-xl flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400" />
                  </div>
                  <span className="text-sm font-semibold text-slate-300 leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Tempo Options - Stadium Pricing Cards === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950" />
          {/* Diagonal accent bands */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
              <div>
                <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Choose Your Tempo</span>
                <h2 className="text-4xl md:text-5xl font-black text-white">
                  Options & <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">Pricing</span>
                </h2>
              </div>
              <p className="text-slate-500 mt-4 md:mt-0 max-w-md">All tempos come with DJ system, LED lights, and experienced driver. Pricing may vary by city and season.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.options.map((option, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  idx === 0 ? 'md:col-span-2 bg-gradient-to-br from-orange-500/15 via-slate-900 to-amber-500/10 border-2 border-orange-500/30' :
                  'bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-orange-500/20'
                }`}>
                  {/* Spotlight glow */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 p-8">
                    {idx === 0 && (
                      <div className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-1.5 rounded-full mb-4">
                        <Star className="w-4 h-4 text-orange-400" />
                        <span className="text-orange-300 text-xs font-bold tracking-wider uppercase">Most Popular</span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">{option.name}</h3>
                        <p className="text-slate-500 text-sm">Perfect for wedding baraat</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">{option.price}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {option.features.map((f, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/[0.05] text-slate-300 px-4 py-2 rounded-full border border-white/[0.08]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: FAQ - Neon Ticket Style === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-orange-950/20 to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.06),transparent_50%)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Got Questions?</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.03] rounded-2xl border border-white/[0.06] hover:border-orange-500/20 transition-all duration-300">
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-8 pl-10">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/10 rounded-2xl flex items-center justify-center border border-orange-500/20">
                        <span className="text-orange-400 font-black text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors">{faq.question}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Explore More Wedding Services === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Explore More <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">Wedding Services</span></h2>
              <p className="text-slate-500">Complete your wedding transportation with our premium fleet</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { href: '/wedding/cars/bmw-wedding-car', label: 'BMW Wedding Car', icon: Car },
                { href: '/wedding/cars/audi-wedding-car', label: 'Audi Wedding Car', icon: Car },
                { href: '/wedding/cars/mercedes-wedding-car', label: 'Mercedes Car', icon: Car },
                { href: '/wedding/cars/vintage-car', label: 'Vintage Car', icon: Crown },
                { href: '/wedding/car-decoration-packages', label: 'Car Decoration', icon: Sparkles },
                { href: '/wedding/doli-car-rental', label: 'Doli Car Rental', icon: Heart },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-orange-500/30 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <link.icon className="w-6 h-6 text-slate-500 group-hover:text-orange-400 transition-colors" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors text-center">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Related Services Cards === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-orange-950/10 to-slate-950" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-orange-400 text-sm font-bold tracking-widest uppercase mb-4">Related Services</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">Complete Your Wedding <span className="text-transparent bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text">Transportation</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/wedding', title: 'Wedding Car Rental Hub', desc: 'Browse all luxury wedding cars, cities, and services in one place. BMW, Audi, Mercedes, vintage cars and more.', tag: 'Hub Page' },
                { href: '/outstation-cabs', title: 'Outstation Cabs from ₹11/km', desc: 'Guest transportation from other cities. Affordable outstation cab booking for wedding parties and families.', tag: 'Outstation' },
                { href: '/airport-service', title: 'Airport Pickup for Guests', desc: 'Arrange Delhi, Jaipur, and Chandigarh airport transfers for destination wedding guests arriving by flight.', tag: 'Airport' },
                { href: '/tempo-traveller', title: 'Tempo Traveller Rental', desc: '12 to 26 seater tempo travellers for group travel. Perfect for wedding guests, family trips, and pilgrimages.', tag: 'Group Travel' },
                { href: '/corporate-transportation-service', title: 'Corporate Event Transport', desc: 'Large-scale employee and guest transportation for corporate events, conferences, and business functions.', tag: 'Corporate' },
                { href: '/religious-tours', title: 'Religious Tour Packages', desc: 'Combine your wedding trip with visits to holy cities like Haridwar, Rishikesh, Varanasi, and Ayodhya.', tag: 'Tours' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="group relative bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06] hover:border-orange-500/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="inline-block text-xs font-bold text-orange-400 tracking-wider uppercase mb-3">{item.tag}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  <ArrowRight className="w-5 h-5 text-orange-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            {/* Contextual in-content links */}
            <div className="mt-12 bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-xl font-bold text-white mb-4">Planning Your Complete Wedding Transportation</h3>
              <p className="text-slate-400 leading-relaxed">
                Your baraat tempo is just one part of the wedding transportation puzzle. Pair it with a luxury <Link href="/wedding/cars/bmw-wedding-car" className="text-orange-400 font-semibold hover:underline">BMW wedding car</Link> or elegant <Link href="/wedding/cars/mercedes-wedding-car" className="text-orange-400 font-semibold hover:underline">Mercedes for the bride entry</Link>. Need professional <Link href="/wedding/car-decoration-packages" className="text-orange-400 font-semibold hover:underline">car decoration packages</Link> starting from ₹2,000? We have got you covered. For the emotional vidai ceremony, book our <Link href="/wedding/doli-car-rental" className="text-orange-400 font-semibold hover:underline">doli car service</Link>. Guests coming from out of town? Our <Link href="/outstation-cabs" className="text-orange-400 font-semibold hover:underline">outstation cab service</Link> covers popular routes like <Link href="/delhi" className="text-orange-400 font-semibold hover:underline">Delhi</Link> to <Link href="/jaipur" className="text-orange-400 font-semibold hover:underline">Jaipur</Link> and <Link href="/agra" className="text-orange-400 font-semibold hover:underline">Agra</Link> to <Link href="/chandigarh" className="text-orange-400 font-semibold hover:underline">Chandigarh</Link>. For guests flying in, book <Link href="/airport-service/delhi" className="text-orange-400 font-semibold hover:underline">Delhi airport taxi transfers</Link>. Read our <Link href="/reviews" className="text-orange-400 font-semibold hover:underline">verified customer reviews</Link> and learn about our <Link href="/safety" className="text-orange-400 font-semibold hover:underline">safety standards</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* === SECTION: Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-5">Wedding Car by City</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/wedding/delhi', label: 'Wedding Car Rental Delhi' },
                    { href: '/wedding/jaipur', label: 'Wedding Car Rental Jaipur' },
                    { href: '/wedding/chandigarh', label: 'Wedding Car Chandigarh' },
                    { href: '/wedding/agra', label: 'Wedding Car Rental Agra' },
                    { href: '/wedding/udaipur', label: 'Wedding Car Udaipur' },
                    { href: '/wedding/lucknow', label: 'Wedding Car Lucknow' },
                    { href: '/wedding/shimla', label: 'Wedding Car Shimla' },
                    { href: '/wedding/jodhpur', label: 'Wedding Car Jodhpur' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-orange-400 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-5">Popular Routes</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/outstation-cabs', label: 'Outstation Cabs ₹11/km' },
                    { href: '/one-way-cab', label: 'One Way Cab Booking' },
                    { href: '/round-trip-cab', label: 'Round Trip Cab' },
                    { href: '/local-taxi', label: 'Local Taxi Service' },
                    { href: '/same-day-taj-mahal-tour', label: 'Same Day Taj Mahal Tour' },
                    { href: '/delhi-airport-to-agra-taxi', label: 'Delhi Airport to Agra Cab' },
                    { href: '/golden-triangle-english-speaking-driver', label: 'Golden Triangle Tour' },
                    { href: '/same-day-agra-tour-from-delhi', label: 'Same Day Agra Tour' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-orange-400 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-5">Popular Cities</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/delhi', label: 'Delhi Taxi Service' },
                    { href: '/jaipur', label: 'Jaipur Cab Service' },
                    { href: '/agra', label: 'Agra Taxi Service' },
                    { href: '/chandigarh', label: 'Chandigarh Cabs' },
                    { href: '/shimla', label: 'Shimla Cab Service' },
                    { href: '/manali', label: 'Manali Taxi Service' },
                    { href: '/haridwar', label: 'Haridwar Cab Service' },
                    { href: '/udaipur', label: 'Udaipur Cab Service' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-orange-400 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-5">More Services</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/airport-service', label: 'Airport Cab Service' },
                    { href: '/corporate-transportation-service', label: 'Corporate Transportation' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/religious-tours', label: 'Religious Tour Packages' },
                    { href: '/sightseeing', label: 'Sightseeing Tours' },
                    { href: '/pricing', label: 'View Pricing' },
                    { href: '/safety', label: 'Our Safety Standards' },
                    { href: '/reviews', label: 'Customer Reviews' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-orange-400 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === More Wedding Services (Dynamic) === */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More Wedding Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {getWeddingPages().filter(p => !p.url.includes('baraat-tempo-traveller')).map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-pink-400 hover:shadow-lg transition-all">
                  <h3 className="text-gray-900 font-semibold group-hover:text-pink-600">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA: Grand Festive Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Festive gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-amber-600 to-yellow-600" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]" />

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 opacity-10">
            <Music className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-10 rotate-12">
            <PartyPopper className="w-20 h-20 text-white" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <Music className="w-4 h-4 text-white" />
              <span className="text-white/90 font-bold text-sm tracking-wider uppercase">Limited Season Slots</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Book Your Baraat<br />Tempo Today
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Make your baraat procession unforgettable with our DJ tempo travellers. Dance, celebrate, and arrive in style.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a baraat tempo with DJ" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
                WhatsApp Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <Link href="/safety" className="flex items-center gap-2 hover:text-white transition-colors"><Shield className="w-4 h-4" /> Verified Drivers</Link>
              <Link href="/pricing" className="flex items-center gap-2 hover:text-white transition-colors"><Star className="w-4 h-4" /> Transparent Pricing</Link>
              <Link href="/reviews" className="flex items-center gap-2 hover:text-white transition-colors"><Heart className="w-4 h-4" /> 4.9/5 Rating</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
