import Link from 'next/link';
import Image from 'next/image';
import { getWeddingSpecialService } from '@/utilis/weddingCarModels';
import DataTable from '@/components/seo/DataTable';
import { getWeddingPages } from '@/utilis/linkingHelper';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight,
  Heart, Star, Sparkles, Crown, Car, Shield, Clock
} from '@/components/ui/icons';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const service = getWeddingSpecialService('doli-car-rental');

export const metadata = {
  title: tightenTitle(service?.metaTitle || 'Doli Car Rental | Triveni Cabs™'),
  description: service?.metaDescription || 'Book doli car for bride vidai ceremony.',
  alternates: { canonical: 'https://www.trivenicabs.in/wedding/doli-car-rental' },
  openGraph: {
    title: 'Doli Car Rental for Wedding | Bride Vidai Car | Triveni Cabs™',
    description: 'Decorated luxury car for bride vidai ceremony. BMW, Audi, Mercedes doli car with driver.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/wedding/luxury_car.jpg', width: 1200, height: 630, alt: 'Doli Car for Wedding Vidai' }]
  },
  keywords: service?.keywords || '',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },

  twitter: {
    card: 'summary_large_image',
    title: "Doli Car Rental for Wedding | Bride Vidai Car | Triveni Cabs™",
    description: "Decorated luxury car for bride vidai ceremony. BMW, Audi, Mercedes doli car with driver.",
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ["/images/wedding/luxury_car.jpg"],
  },
};

export default function DoliCarPage() {
  const data = getWeddingSpecialService('doli-car-rental');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    // Week 53: Merchant listings treats a missing `image` as critical.
    "image": "https://www.trivenicabs.in/images/wedding/luxury_car.jpg",
    "name": `${data.title} | Triveni Cabs`,
    "description": data.description,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "5000", "highPrice": "50000", "offerCount": "4", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs" } },
    ...getRatingAndReviews('doli-car-rental', 'wedding')
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

        {/* === HERO: Real doli-car photo, scrim on text side only (Ultra-Premium v2) === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Photo background — decorated luxury vidai car */}
          <div className="absolute inset-0">
            <Image
              src="/images/wedding/luxury_car.jpg"
              alt="Decorated luxury doli car for the bride vidai ceremony"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Text-side scrim only — photo stays visible on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F0A1A] to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-12 sm:py-20">
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

              <h1 className="font-display-serif text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[0.95] mb-8">
                <span className="block text-gold-foil italic">Doli</span>
                <span className="block text-white/90 mt-2">Car Rental</span>
                <span className="block text-2xl md:text-3xl font-medium text-slate-300 mt-4 not-italic">For the Most Emotional Moment of the Wedding</span>
              </h1>

              <p className="text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">{data.subtitle}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="tel:+917668570551" className="sheen group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFE9A0] via-[#FACF2D] to-[#E8B923] text-black font-bold px-6 py-3.5 min-h-[48px] text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-400/45 transition-all duration-300 lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]">
                  <Phone className="w-4 h-4" /> Book Doli Car
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="https://wa.me/917668570551?text=I need a doli car for bride vidai" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl text-white px-6 py-3.5 min-h-[48px] rounded-full font-semibold text-sm border border-white/10 hover:border-amber-400/40 hover:bg-white/10 transition-all lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]">
                  WhatsApp Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION: The Vidai Promise === */}
        {Array.isArray(service.options) && service.options.length > 1 && (
          <div className="container mx-auto px-4 py-10">
            <DataTable
              title="Which doli car for the bride, and what does it cost?"
              caption="Doli car options: the car, the price range and what each includes"
              intro="Prices are per event and include the decoration listed; the exact figure depends on the date, the car and the hours. The chauffeur is included."
              columns={[
                { key: 'name', label: 'Option' },
                { key: 'price', label: 'Price range' },
                { key: 'includes', label: 'What it includes' },
              ]}
              rows={service.options.map((o) => ({
                name: o.car ? `${o.name} (${o.car})` : o.name,
                price: o.price,
                includes: (o.features || o.includes || []).join(', '),
              }))}
            />
          </div>
        )}

        <section className="relative py-14 sm:py-24 px-4">
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
        <section className="relative py-14 sm:py-24 px-4 overflow-hidden">
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
        <section className="relative py-14 sm:py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0F0A1A] via-[#1A0A2E]/30 to-[#0F0A1A]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,169,130,0.04),transparent_50%)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-amber-400/80 text-sm font-bold tracking-widest uppercase mb-4">Your Questions</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:items-start">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/30 transition-all duration-300">
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

        {/* === SECTION: Explore More — warm light band === */}
        <section className="relative py-16 md:py-24 px-4 bg-[#FFF6DC]">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-[#3a1220] mb-3">Explore More <span className="text-gold-foil">Wedding Services</span></h2>
              <p className="text-[#6b3a4a]">Complete wedding transportation solutions for every occasion</p>
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
                <Link key={link.href} href={link.href} className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-white border border-amber-500/20 shadow-sm hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <link.icon className="w-6 h-6 text-amber-600 group-hover:text-amber-700 transition-colors" />
                  <span className="text-sm font-semibold text-[#3a1220] transition-colors text-center">{link.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Related Services Cards === */}
        <section className="relative py-14 sm:py-24 px-4">
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
        <section className="relative py-10 sm:py-16 px-4">
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

        {/* === CTA: Cinematic Emotional Banner (v2: dark + gold) === */}
        <section className="relative py-16 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(250,207,45,0.14),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(91,18,40,0.45),transparent_55%)]" />

          {/* Decorative */}
          <div className="absolute top-8 left-[10%] opacity-10">
            <Heart className="w-20 h-20 text-amber-300" />
          </div>
          <div className="absolute bottom-8 right-[10%] opacity-10">
            <Crown className="w-24 h-24 text-amber-300 rotate-12" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-amber-300/40" />
              <span className="text-amber-200 font-bold text-sm tracking-[0.3em] uppercase">Make Memories Forever</span>
              <div className="w-10 h-px bg-amber-300/40" />
            </div>

            <h2 className="font-display-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Book Your <span className="text-gold-foil">Doli Car</span> Today
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Give the bride a beautiful, emotional farewell in a decorated luxury car she deserves.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="sheen inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFE9A0] via-[#FACF2D] to-[#E8B923] text-black font-bold px-6 py-3.5 min-h-[48px] text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-400/45 transition-all lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]">
                <Phone className="w-4 h-4" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a doli car for wedding vidai" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-white px-6 py-3.5 min-h-[48px] rounded-full font-semibold text-sm hover:bg-white/10 transition-all lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]">
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
