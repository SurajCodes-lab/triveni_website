import Link from 'next/link';
import { getWeddingSpecialService } from '@/utilis/weddingCarModels';
import { getWeddingPages } from '@/utilis/linkingHelper';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight,
  Heart, Star, Sparkles, Crown, Car, Shield, Clock
} from '@/components/ui/icons';

export const revalidate = false;

const service = getWeddingSpecialService('doli-car-rental');

export const metadata = {
  title: service?.metaTitle || 'Doli Car Rental | Triveni Cabs',
  description: service?.metaDescription || 'Book doli car for bride vidai ceremony.',
  alternates: { canonical: 'https://www.trivenicabs.in/wedding/doli-car-rental' },
  openGraph: {
    title: 'Doli Car Rental for Wedding | Bride Vidai Car | Triveni Cabs',
    description: 'Decorated luxury car for bride vidai ceremony. BMW, Audi, Mercedes doli car with driver.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/wedding/luxury_car.jpg', width: 1200, height: 630, alt: 'Doli Car for Wedding Vidai' }]
  },
  keywords: service?.keywords || '',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DoliCarPage() {
  const data = getWeddingSpecialService('doli-car-rental');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.title,
    "description": data.description,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "5000", "highPrice": "50000", "offerCount": "4", "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "350", "bestRating": "5" }
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
      { "@type": "ListItem", "position": 3, "name": "Doli Car Rental", "item": "https://www.trivenicabs.in/wedding/doli-car-rental" }
    ]
  };

  const doliPromises = [
    { icon: Crown, label: 'Luxury Cars', desc: 'BMW, Audi, Mercedes fleet' },
    { icon: Sparkles, label: 'Full Decoration', desc: 'Fresh flowers & ribbon art' },
    { icon: Shield, label: 'Red Carpet', desc: 'Royal red carpet service' },
    { icon: Heart, label: 'Vidai Special', desc: 'Emotional moment handled with care' },
    { icon: Clock, label: 'On Time', desc: 'Never late for your moment' },
    { icon: Star, label: 'Chauffeur', desc: 'Professional in formal attire' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#0F0A1A]">

        {/* === HERO: Cinematic Emotional Vidai Theme === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Deep purple/rose-gold cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A0A2E] via-[#0F0A1A] to-[#2D1B37]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,114,182,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,169,130,0.08),transparent_50%)]" />

          {/* Soft bokeh-like glows */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[15%] right-[10%] w-48 h-48 bg-pink-500/[0.06] rounded-full blur-[80px]" />
            <div className="absolute bottom-[20%] left-[8%] w-56 h-56 bg-purple-500/[0.05] rounded-full blur-[90px]" />
            <div className="absolute top-[50%] left-[40%] w-40 h-40 bg-amber-400/[0.04] rounded-full blur-[70px]" />
            {/* Decorative hearts */}
            <div className="absolute top-[12%] left-[10%] opacity-[0.06]">
              <Heart className="w-36 h-36 text-pink-400" />
            </div>
            <div className="absolute bottom-[12%] right-[7%] opacity-[0.05] rotate-12">
              <Crown className="w-32 h-32 text-amber-400" />
            </div>
          </div>

          {/* Film-strip style vertical line */}
          <div className="absolute left-8 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent hidden lg:block" />
          <div className="absolute left-12 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/10 to-transparent hidden lg:block" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
              <Link href="/" className="hover:text-pink-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/wedding" className="hover:text-pink-400 transition-colors">Wedding</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-pink-400 font-medium">Doli Car Rental</span>
            </nav>

            <div className="max-w-4xl">
              {/* Cinematic label */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="w-12 h-px bg-gradient-to-r from-pink-500 to-transparent" />
                <span className="text-pink-400/80 font-semibold text-sm tracking-[0.3em] uppercase">{data.tagline}</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
                <span className="block text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-amber-300 bg-clip-text italic">Doli</span>
                <span className="block text-white/90 mt-2">Car Rental</span>
                <span className="block text-2xl md:text-3xl font-medium text-slate-500 mt-4 not-italic">For the Most Emotional Moment of the Wedding</span>
              </h1>

              <p className="text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed">{data.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] transition-all duration-300">
                  <Phone className="w-5 h-5" /> Book Doli Car
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="https://wa.me/917668570551?text=I need a doli car for bride vidai" className="inline-flex items-center justify-center gap-3 bg-white/[0.04] backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/[0.08] hover:border-pink-500/30 hover:bg-white/[0.08] transition-all">
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION: The Vidai Promise === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1A] via-[#150E22] to-[#0F0A1A]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Narrative text */}
              <div>
                <span className="inline-block text-amber-400/80 text-sm font-bold tracking-widest uppercase mb-4">The Vidai Moment</span>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  What is a
                  <span className="text-transparent bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text"> Doli Car?</span>
                </h2>
                <p className="text-lg text-slate-400 mb-8 leading-relaxed">{data.description}</p>

                {/* Promise cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {doliPromises.map((item, idx) => (
                    <div key={idx} className="group bg-white/[0.03] rounded-xl p-4 border border-white/[0.06] hover:border-pink-500/20 hover:bg-white/[0.05] transition-all duration-300">
                      <item.icon className="w-6 h-6 text-pink-400/70 mb-2 group-hover:text-pink-400 transition-colors" />
                      <h4 className="text-sm font-bold text-white mb-0.5">{item.label}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Why Book highlights */}
              <div className="bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-3xl p-8 border border-white/[0.06]">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-pink-400" /> Why Book a Doli Car from Triveni?
                </h3>
                <div className="space-y-4">
                  {[
                    'Beautifully decorated luxury cars for vidai',
                    'Professional chauffeur in formal attire',
                    'Fresh flower decoration on the day',
                    'Red carpet service at venue',
                    'Available in all major cities',
                    'Multi-car wedding packages available'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center border border-pink-500/20 group-hover:bg-pink-500/20 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-pink-400" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION: Doli Car Options - Cinematic Film Reel Cards === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[#0F0A1A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.04),transparent_60%)]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-pink-400 text-sm font-bold tracking-widest uppercase mb-4">The Fleet</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Doli Car <span className="text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300 bg-clip-text">Options & Pricing</span>
              </h2>
            </div>

            {/* Film-reel style horizontal cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {data.options.map((option, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                  idx === 3 ? 'md:col-span-2 bg-gradient-to-r from-amber-500/10 via-[#150E22] to-pink-500/10 border-2 border-amber-500/20' :
                  idx === 0 ? 'bg-gradient-to-br from-pink-500/10 to-[#150E22] border border-pink-500/15 hover:border-pink-500/30' :
                  'bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] hover:border-pink-500/20'
                }`}>
                  {/* Cinematic frame lines */}
                  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 p-8">
                    {idx === 3 && (
                      <div className="inline-flex items-center gap-2 bg-amber-500/15 px-4 py-1.5 rounded-full mb-4 border border-amber-500/20">
                        <Crown className="w-4 h-4 text-amber-400" />
                        <span className="text-amber-300 text-xs font-bold tracking-wider uppercase">Royal Choice</span>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-black text-white mb-1">{option.name}</h3>
                        <p className="text-slate-500 text-sm">Vehicle: {option.car}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-black text-transparent bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text">{option.price}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {option.features.map((f, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/[0.04] text-slate-300 px-4 py-2 rounded-full border border-white/[0.08]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />
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

        {/* === SECTION: FAQ - Emotional Storytelling Cards === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1A] via-[#1A0A2E]/30 to-[#0F0A1A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,169,130,0.04),transparent_50%)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-amber-400/80 text-sm font-bold tracking-widest uppercase mb-4">Your Questions</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.02] rounded-2xl border border-white/[0.05] hover:border-pink-500/20 transition-all duration-300">
                  {/* Left glow bar */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="p-8 pl-10">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500/15 to-amber-500/10 rounded-2xl flex items-center justify-center border border-pink-500/15">
                        <span className="text-pink-400 font-black text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">{faq.question}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Explore More === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#0F0A1A]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Explore More <span className="text-transparent bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text">Wedding Services</span></h2>
              <p className="text-slate-500">Complete wedding transportation solutions for every occasion</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { href: '/wedding/cars/bmw-wedding-car', label: 'BMW Wedding Car', icon: Car },
                { href: '/wedding/cars/audi-wedding-car', label: 'Audi Wedding Car', icon: Car },
                { href: '/wedding/cars/mercedes-wedding-car', label: 'Mercedes Car', icon: Car },
                { href: '/wedding/cars/vintage-car', label: 'Vintage Car', icon: Crown },
                { href: '/wedding/baraat-tempo-traveller', label: 'Baraat Tempo', icon: Star },
                { href: '/wedding/car-decoration-packages', label: 'Car Decoration', icon: Sparkles },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-pink-500/20 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1">
                  <link.icon className="w-6 h-6 text-slate-500 group-hover:text-pink-400 transition-colors" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-white transition-colors text-center">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Related Services Cards === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1A] via-[#150E22] to-[#0F0A1A]" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-pink-400 text-sm font-bold tracking-widest uppercase mb-4">Related Services</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">More Ways We Can <span className="text-transparent bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text">Help</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/wedding', title: 'Wedding Car Rental Hub', desc: 'Explore our complete range of luxury wedding cars, baraat tempos, decoration, and doli services.', tag: 'Hub Page' },
                { href: '/outstation-cabs', title: 'Outstation Cabs from ₹11/km', desc: 'Affordable cab booking for wedding guest transport from other cities across North India.', tag: 'Guest Transport' },
                { href: '/airport-service', title: 'Airport Transfer for Guests', desc: 'Airport pickup and drop at Delhi, Jaipur, Chandigarh, and more for destination wedding guests.', tag: 'Airport' },
                { href: '/corporate-transportation-service', title: 'Corporate Event Transport', desc: 'Fleet management for large wedding parties - multiple vehicles, coordinated arrivals.', tag: 'Fleet' },
                { href: '/tempo-traveller', title: 'Tempo Traveller Rental', desc: 'AC 12-26 seater tempo travellers for wedding guest groups, family trips, and pilgrimages.', tag: 'Group Travel' },
                { href: '/sightseeing', title: 'Sightseeing for Wedding Guests', desc: 'Arrange city tours for wedding guests visiting Agra, Jaipur, Delhi, and other destinations.', tag: 'Tours' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="group relative bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06] hover:border-pink-500/20 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
                  <span className="inline-block text-xs font-bold text-pink-400 tracking-wider uppercase mb-3">{item.tag}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  <ArrowRight className="w-5 h-5 text-pink-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            {/* Contextual in-content links */}
            <div className="mt-12 bg-white/[0.03] rounded-2xl p-8 border border-white/[0.06]">
              <h3 className="text-xl font-bold text-white mb-4">The Complete Wedding Car Experience</h3>
              <p className="text-slate-400 leading-relaxed">
                The doli car is the most emotional part of the wedding. Pair it with a grand <Link href="/wedding/baraat-tempo-traveller" className="text-pink-400 font-semibold hover:underline">baraat tempo traveller with DJ</Link> for the groom. Choose from our luxury fleet - a sleek <Link href="/wedding/cars/bmw-wedding-car" className="text-pink-400 font-semibold hover:underline">BMW</Link>, sophisticated <Link href="/wedding/cars/audi-wedding-car" className="text-pink-400 font-semibold hover:underline">Audi</Link>, classic <Link href="/wedding/cars/mercedes-wedding-car" className="text-pink-400 font-semibold hover:underline">Mercedes-Benz</Link>, or charming <Link href="/wedding/cars/vintage-car" className="text-pink-400 font-semibold hover:underline">vintage car</Link>. Enhance any car with our professional <Link href="/wedding/car-decoration-packages" className="text-pink-400 font-semibold hover:underline">decoration packages</Link> starting at ₹2,000. For destination weddings in <Link href="/wedding/jaipur" className="text-pink-400 font-semibold hover:underline">Jaipur</Link>, <Link href="/wedding/udaipur" className="text-pink-400 font-semibold hover:underline">Udaipur</Link>, or <Link href="/wedding/shimla" className="text-pink-400 font-semibold hover:underline">Shimla</Link>, we deliver the doli car to your venue. Book <Link href="/outstation-cabs" className="text-pink-400 font-semibold hover:underline">outstation cabs</Link> for guest transportation, and <Link href="/airport-service/delhi" className="text-pink-400 font-semibold hover:underline">Delhi airport taxi</Link> for guests flying in. Check our <Link href="/reviews" className="text-pink-400 font-semibold hover:underline">4.9-star customer reviews</Link> and <Link href="/safety" className="text-pink-400 font-semibold hover:underline">safety standards</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* === SECTION: Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#0F0A1A]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-5">Wedding Car by City</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/wedding/delhi', label: 'Wedding Car Delhi' },
                    { href: '/wedding/jaipur', label: 'Wedding Car Jaipur' },
                    { href: '/wedding/chandigarh', label: 'Wedding Car Chandigarh' },
                    { href: '/wedding/agra', label: 'Wedding Car Agra' },
                    { href: '/wedding/udaipur', label: 'Wedding Car Udaipur' },
                    { href: '/wedding/lucknow', label: 'Wedding Car Lucknow' },
                    { href: '/wedding/shimla', label: 'Wedding Car Shimla' },
                    { href: '/wedding/jodhpur', label: 'Wedding Car Jodhpur' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-pink-400 transition-colors">{link.label}</Link>
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
                    { href: '/local-taxi', label: 'Local Taxi Hire' },
                    { href: '/same-day-taj-mahal-tour', label: 'Same Day Taj Mahal Tour' },
                    { href: '/delhi-airport-to-agra-taxi', label: 'Delhi Airport to Agra' },
                    { href: '/golden-triangle-english-speaking-driver', label: 'Golden Triangle Tour' },
                    { href: '/same-day-agra-tour-from-delhi', label: 'Delhi to Agra Day Trip' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-pink-400 transition-colors">{link.label}</Link>
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
                    { href: '/chandigarh', label: 'Chandigarh Cab Service' },
                    { href: '/shimla', label: 'Shimla Cab Service' },
                    { href: '/manali', label: 'Manali Taxi Service' },
                    { href: '/haridwar', label: 'Haridwar Cabs' },
                    { href: '/udaipur', label: 'Udaipur Cab Service' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-pink-400 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-500 tracking-wider uppercase mb-5">More Services</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/airport-service', label: 'Airport Cab Service' },
                    { href: '/corporate-transportation-service', label: 'Corporate Transport' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/religious-tours', label: 'Religious Tours' },
                    { href: '/sightseeing', label: 'Sightseeing Tours' },
                    { href: '/pricing', label: 'View Pricing' },
                    { href: '/safety', label: 'Safety Standards' },
                    { href: '/reviews', label: 'Customer Reviews' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-slate-600 hover:text-pink-400 transition-colors">{link.label}</Link>
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
              {getWeddingPages().filter(p => !p.url.includes('doli-car-rental')).map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-pink-400 hover:shadow-lg transition-all">
                  <h3 className="text-gray-900 font-semibold group-hover:text-pink-600">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA: Cinematic Emotional Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          {/* Deep romantic gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-600 to-purple-700" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]" />

          {/* Film grain texture via fine dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '4px 4px' }} />

          {/* Decorative */}
          <div className="absolute top-8 left-[10%] opacity-10">
            <Heart className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-8 right-[10%] opacity-10">
            <Crown className="w-24 h-24 text-white rotate-12" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-white/40" />
              <span className="text-white/80 font-bold text-sm tracking-[0.3em] uppercase">Make Memories Forever</span>
              <div className="w-10 h-px bg-white/40" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Book Your Doli<br />Car Today
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Give the bride a beautiful, emotional farewell in a decorated luxury car she deserves.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-pink-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a doli car for wedding vidai" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
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
