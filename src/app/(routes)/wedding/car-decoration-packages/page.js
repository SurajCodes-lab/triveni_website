import Link from 'next/link';
import { getWeddingSpecialService } from '@/utilis/weddingCarModels';
import { getWeddingPages } from '@/utilis/linkingHelper';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight,
  Heart, Star, Sparkles, Crown, Car, Leaf, Gift
} from '@/components/ui/icons';

export const revalidate = 3600;

const service = getWeddingSpecialService('car-decoration-packages');

export const metadata = {
  title: service?.metaTitle || 'Wedding Car Decoration Packages | Triveni Cabs',
  description: service?.metaDescription || 'Wedding car decoration packages with fresh flowers.',
  alternates: { canonical: 'https://www.trivenicabs.in/wedding/car-decoration-packages' },
  openGraph: {
    title: 'Wedding Car Decoration Packages | Triveni Cabs',
    description: 'Professional wedding car decoration with fresh flowers, ribbons, LED. Starting Rs 2,000.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/wedding/luxury_car.jpg', width: 1200, height: 630, alt: 'Wedding Car Decoration' }]
  },
  keywords: service?.keywords || '',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function CarDecorationPage() {
  const data = getWeddingSpecialService('car-decoration-packages');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": data.title,
    "description": data.description,
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "offers": { "@type": "AggregateOffer", "priceCurrency": "INR", "lowPrice": "2000", "highPrice": "15000", "offerCount": "4", "availability": "https://schema.org/InStock" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "280", "bestRating": "5" }
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
      { "@type": "ListItem", "position": 3, "name": "Car Decoration Packages", "item": "https://www.trivenicabs.in/wedding/car-decoration-packages" }
    ]
  };

  const tierColors = [
    { bg: 'from-emerald-50 to-green-50', border: 'border-emerald-200 hover:border-emerald-400', icon: 'from-emerald-500 to-green-500', accent: 'text-emerald-600', badge: 'bg-emerald-100 text-emerald-700', tag: null },
    { bg: 'from-rose-50 to-pink-50', border: 'border-rose-200 hover:border-rose-400', icon: 'from-rose-500 to-pink-500', accent: 'text-rose-600', badge: 'bg-rose-100 text-rose-700', tag: 'Popular' },
    { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200 hover:border-amber-400', icon: 'from-amber-500 to-yellow-500', accent: 'text-amber-600', badge: 'bg-amber-100 text-amber-700', tag: 'Premium' },
    { bg: 'from-purple-50 to-violet-50', border: 'border-purple-200 hover:border-purple-400', icon: 'from-purple-500 to-violet-500', accent: 'text-purple-600', badge: 'bg-purple-100 text-purple-700', tag: 'Custom' },
  ];

  const decorElements = [
    { icon: Leaf, label: 'Fresh Flowers', desc: 'Roses, orchids, marigolds' },
    { icon: Sparkles, label: 'LED Lights', desc: 'Fairy lights & LED strips' },
    { icon: Gift, label: 'Ribbons & Bows', desc: 'Satin ribbons, net drapes' },
    { icon: Heart, label: 'Theme Design', desc: 'Custom colour matching' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-[#FFFBF5]">

        {/* === HERO: Enchanted Garden / Floral Boutique === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Warm botanical gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FEF3E2] to-[#FCE7F3]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(244,114,182,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.08),transparent_50%)]" />

          {/* Floral decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Botanical outlines */}
            <div className="absolute top-[8%] right-[5%] opacity-[0.06]">
              <Leaf className="w-48 h-48 text-emerald-600 rotate-45" />
            </div>
            <div className="absolute bottom-[10%] left-[3%] opacity-[0.05]">
              <Sparkles className="w-40 h-40 text-rose-400 -rotate-12" />
            </div>
            {/* Soft petal shapes */}
            <div className="absolute top-[20%] left-[12%] w-20 h-20 bg-rose-200/30 rounded-full blur-2xl" />
            <div className="absolute top-[35%] right-[15%] w-24 h-24 bg-emerald-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-[25%] left-[25%] w-16 h-16 bg-amber-200/25 rounded-full blur-2xl" />
            <div className="absolute bottom-[40%] right-[30%] w-14 h-14 bg-pink-200/30 rounded-full blur-xl" />
          </div>

          {/* Subtle vine border on left */}
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-emerald-300/30 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-stone-400 mb-10">
              <Link href="/" className="hover:text-rose-500 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/wedding" className="hover:text-rose-500 transition-colors">Wedding</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-rose-500 font-medium">Car Decoration Packages</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-rose-200/50 px-5 py-2.5 rounded-full mb-8 shadow-sm">
                  <Sparkles className="w-4 h-4 text-rose-500" />
                  <span className="text-rose-600 font-semibold text-sm tracking-widest uppercase">{data.tagline}</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-stone-900 leading-[0.95] mb-6">
                  Wedding Car
                  <span className="block text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-emerald-500 bg-clip-text">Decoration</span>
                  <span className="block text-3xl md:text-4xl font-bold text-stone-400 mt-2 italic">Packages</span>
                </h1>

                <p className="text-lg text-stone-500 mb-10 max-w-xl leading-relaxed">{data.subtitle}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-rose-500/20 hover:shadow-rose-500/35 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> Get Decoration Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I need wedding car decoration packages" className="inline-flex items-center justify-center gap-3 bg-white text-stone-700 px-8 py-5 rounded-2xl font-bold text-lg border-2 border-stone-200 hover:border-rose-300 shadow-sm hover:shadow-md transition-all">
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right: Decoration elements grid */}
              <div className="grid grid-cols-2 gap-4">
                {decorElements.map((item, idx) => (
                  <div key={idx} className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-gradient-to-br from-rose-100 to-pink-50 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-7 h-7 text-rose-500" />
                    </div>
                    <h3 className="font-bold text-stone-800 text-lg mb-1">{item.label}</h3>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === SECTION: Description + Professional Touch === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-white" />
          {/* Decorative top border */}
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-4">Our Craft</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-6">
                Professional <span className="text-transparent bg-gradient-to-r from-rose-500 to-emerald-500 bg-clip-text">Car Decoration</span> Services
              </h2>
              <p className="text-lg text-stone-500 max-w-3xl mx-auto leading-relaxed">{data.description}</p>
            </div>

            {/* Horizontal process steps */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Choose Package', desc: 'Select from Classic to Royal tier' },
                { step: '02', title: 'Custom Theme', desc: 'Match your wedding colour palette' },
                { step: '03', title: 'Fresh Flowers', desc: 'Sourced morning of your wedding' },
                { step: '04', title: 'On-Site Setup', desc: 'Decorated at your venue on time' },
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="bg-gradient-to-br from-white to-rose-50/50 rounded-3xl p-8 border border-stone-100 hover:border-rose-200 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="text-5xl font-black text-stone-100 group-hover:text-rose-100 transition-colors mb-4">{item.step}</div>
                    <h3 className="text-lg font-bold text-stone-800 mb-2">{item.title}</h3>
                    <p className="text-stone-400 text-sm">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                      <ChevronRight className="w-6 h-6 text-rose-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Packages - Tiered Boutique Cards === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-[#FFFBF5] to-white" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,114,182,0.05),transparent_60%)]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-rose-500 text-sm font-bold tracking-widest uppercase mb-4">Decoration Tiers</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900">
                Choose Your <span className="text-transparent bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text">Package</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.packages.map((pkg, idx) => {
                const colors = tierColors[idx] || tierColors[0];
                return (
                  <div key={idx} className={`group relative overflow-hidden bg-gradient-to-br ${colors.bg} rounded-3xl border-2 ${colors.border} shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}>
                    {/* Top tag */}
                    {colors.tag && (
                      <div className="absolute top-4 right-4">
                        <span className={`${colors.badge} text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full`}>{colors.tag}</span>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${colors.icon} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {idx === 0 ? <Leaf className="w-8 h-8 text-white" /> :
                         idx === 1 ? <Heart className="w-8 h-8 text-white" /> :
                         idx === 2 ? <Crown className="w-8 h-8 text-white" /> :
                         <Sparkles className="w-8 h-8 text-white" />}
                      </div>

                      {/* Package name & price */}
                      <h3 className="text-xl font-black text-stone-800 mb-2">{pkg.name}</h3>
                      <div className={`text-3xl font-black ${colors.accent} mb-3`}>{pkg.price}</div>
                      <p className="text-stone-500 text-sm mb-6 leading-relaxed">{pkg.description}</p>

                      {/* Includes */}
                      <div className="space-y-3">
                        {pkg.includes.map((item, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className={`w-4 h-4 ${colors.accent} flex-shrink-0 mt-0.5`} />
                            <span className="text-sm text-stone-600">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link href="tel:+917668570551" className={`mt-8 w-full inline-flex items-center justify-center gap-2 ${colors.accent} bg-white px-5 py-3 rounded-xl font-bold text-sm border border-current/20 hover:bg-current/5 transition-all`}>
                        <Phone className="w-4 h-4" /> Book This Package
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* === SECTION: FAQ - Garden Card Style === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-rose-50/50" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-4">Common Questions</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-rose-500 to-emerald-500 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {data.faqs.map((faq, idx) => (
                <div key={idx} className="group bg-white rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-rose-100 to-emerald-50 rounded-2xl flex items-center justify-center border border-rose-100">
                      <span className="text-rose-500 font-black text-sm">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800 mb-3 group-hover:text-rose-600 transition-colors">{faq.question}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Interlinks === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-stone-900 mb-8">Explore More <span className="text-transparent bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text">Wedding Services</span></h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { href: '/wedding/cars/bmw-wedding-car', label: 'BMW Wedding Car' },
                { href: '/wedding/cars/audi-wedding-car', label: 'Audi Wedding Car' },
                { href: '/wedding/cars/mercedes-wedding-car', label: 'Mercedes Wedding Car' },
                { href: '/wedding/cars/vintage-car', label: 'Vintage Car' },
                { href: '/wedding/baraat-tempo-traveller', label: 'Baraat Tempo' },
                { href: '/wedding/doli-car-rental', label: 'Doli Car Rental' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="bg-white px-6 py-3 rounded-full border border-stone-200 hover:border-rose-300 hover:shadow-lg transition-all font-semibold text-stone-600 hover:text-rose-600 shadow-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === SECTION: Related Services Cards === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white" />
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-emerald-600 text-sm font-bold tracking-widest uppercase mb-4">Related Services</span>
              <h2 className="text-4xl md:text-5xl font-black text-stone-900">Complete Your <span className="text-transparent bg-gradient-to-r from-rose-500 to-emerald-500 bg-clip-text">Wedding Planning</span></h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/wedding', title: 'Wedding Car Rental Hub', desc: 'Browse all luxury wedding cars, cities, baraat tempos, and decoration packages in one place.', tag: 'Hub Page' },
                { href: '/outstation-cabs', title: 'Outstation Cabs from ₹11/km', desc: 'Transport wedding guests from other cities. Affordable rates, AC vehicles, professional drivers.', tag: 'Guest Transport' },
                { href: '/airport-service', title: 'Airport Pickup for Wedding Guests', desc: 'Arrange Delhi, Jaipur, Chandigarh airport transfers for out-of-town wedding guests.', tag: 'Airport Service' },
                { href: '/tempo-traveller', title: 'Tempo Traveller Rental', desc: '12 to 26 seater for group travel. Perfect for family trips, wedding parties and pilgrimages.', tag: 'Group Travel' },
                { href: '/sightseeing', title: 'Sightseeing Tours for Guests', desc: 'Arrange sightseeing tours for wedding guests visiting your city. Guided tours available.', tag: 'Sightseeing' },
                { href: '/religious-tours', title: 'Religious Tour Packages', desc: 'Combine your wedding celebrations with visits to temples in Haridwar, Varanasi, and Mathura.', tag: 'Pilgrimages' },
              ].map(item => (
                <Link key={item.href} href={item.href} className="group bg-white rounded-2xl p-7 border border-stone-100 hover:border-rose-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <span className="inline-block text-xs font-bold text-rose-500 tracking-wider uppercase mb-3">{item.tag}</span>
                  <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-rose-600 transition-colors">{item.title}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                  <ArrowRight className="w-5 h-5 text-rose-400 mt-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            {/* In-content contextual links */}
            <div className="mt-12 bg-gradient-to-br from-rose-50 to-emerald-50/50 rounded-2xl p-8 border border-rose-100">
              <h3 className="text-xl font-bold text-stone-800 mb-4">Complete Wedding Transportation Guide</h3>
              <p className="text-stone-600 leading-relaxed">
                Our decoration packages work with any car - be it a stunning <Link href="/wedding/cars/bmw-wedding-car" className="text-rose-600 font-semibold hover:underline">BMW wedding car</Link>, sophisticated <Link href="/wedding/cars/audi-wedding-car" className="text-rose-600 font-semibold hover:underline">Audi</Link>, or timeless <Link href="/wedding/cars/mercedes-wedding-car" className="text-rose-600 font-semibold hover:underline">Mercedes-Benz</Link>. We also decorate <Link href="/wedding/cars/vintage-car" className="text-rose-600 font-semibold hover:underline">vintage cars</Link> with heritage themes. For the baraat, pair decoration with our <Link href="/wedding/baraat-tempo-traveller" className="text-rose-600 font-semibold hover:underline">DJ tempo traveller service</Link>. For the emotional vidai, our <Link href="/wedding/doli-car-rental" className="text-rose-600 font-semibold hover:underline">doli car rental</Link> includes premium decoration. Planning a destination wedding in <Link href="/wedding/jaipur" className="text-rose-600 font-semibold hover:underline">Jaipur</Link> or <Link href="/wedding/udaipur" className="text-rose-600 font-semibold hover:underline">Udaipur</Link>? We deliver decoration services across North India. Use our <Link href="/outstation-cabs" className="text-rose-600 font-semibold hover:underline">outstation cab service</Link> for guest transfers and <Link href="/airport-service/delhi" className="text-rose-600 font-semibold hover:underline">Delhi airport taxi</Link> for flying guests. Read our <Link href="/reviews" className="text-rose-600 font-semibold hover:underline">customer reviews</Link> or check our <Link href="/safety" className="text-rose-600 font-semibold hover:underline">safety standards</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* === SECTION: Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#FFFBF5]" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sm font-bold text-stone-500 tracking-wider uppercase mb-5">Wedding Car by City</h3>
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
                    <Link key={link.href} href={link.href} className="block text-sm text-stone-400 hover:text-rose-500 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-500 tracking-wider uppercase mb-5">Popular Routes</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/outstation-cabs', label: 'Outstation Cabs ₹11/km' },
                    { href: '/one-way-cab', label: 'One Way Cab' },
                    { href: '/round-trip-cab', label: 'Round Trip Cab' },
                    { href: '/local-taxi', label: 'Local Taxi Service' },
                    { href: '/same-day-taj-mahal-tour', label: 'Same Day Taj Mahal Tour' },
                    { href: '/delhi-airport-to-agra-taxi', label: 'Delhi Airport to Agra' },
                    { href: '/golden-triangle-english-speaking-driver', label: 'Golden Triangle Tour' },
                    { href: '/same-day-agra-tour-from-delhi', label: 'Same Day Agra Tour' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-stone-400 hover:text-rose-500 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-500 tracking-wider uppercase mb-5">Popular Cities</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/delhi', label: 'Delhi Cab Service' },
                    { href: '/jaipur', label: 'Jaipur Cab Service' },
                    { href: '/agra', label: 'Agra Cab Service' },
                    { href: '/chandigarh', label: 'Chandigarh Cabs' },
                    { href: '/shimla', label: 'Shimla Cab Service' },
                    { href: '/manali', label: 'Manali Taxi Service' },
                    { href: '/haridwar', label: 'Haridwar Cab Service' },
                    { href: '/udaipur', label: 'Udaipur Cab Service' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-stone-400 hover:text-rose-500 transition-colors">{link.label}</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-500 tracking-wider uppercase mb-5">More Services</h3>
                <div className="space-y-2.5">
                  {[
                    { href: '/airport-service', label: 'Airport Cab Service' },
                    { href: '/corporate-transportation-service', label: 'Corporate Cabs' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/religious-tours', label: 'Religious Tours' },
                    { href: '/sightseeing', label: 'Sightseeing Tours' },
                    { href: '/pricing', label: 'View Our Pricing' },
                    { href: '/safety', label: 'Safety Standards' },
                    { href: '/reviews', label: 'Customer Reviews' },
                  ].map(link => (
                    <Link key={link.href} href={link.href} className="block text-sm text-stone-400 hover:text-rose-500 transition-colors">{link.label}</Link>
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
              {getWeddingPages().filter(p => !p.url.includes('car-decoration-packages')).map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-pink-400 hover:shadow-lg transition-all">
                  <h3 className="text-gray-900 font-semibold group-hover:text-pink-600">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA: Floral Gradient Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-500 via-pink-500 to-emerald-500" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.15),transparent_50%)]" />

          {/* Floating petals */}
          <div className="absolute top-8 left-[15%] opacity-10">
            <Heart className="w-20 h-20 text-white rotate-12" />
          </div>
          <div className="absolute bottom-8 right-[15%] opacity-10">
            <Sparkles className="w-24 h-24 text-white -rotate-12" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white/90 font-bold text-sm tracking-wider uppercase">Starting from Rs 2,000</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Transform Your<br />Wedding Car
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Beautiful, fresh-flower decoration crafted by our expert team. Make every photograph frame-worthy.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-rose-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need wedding car decoration" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
                WhatsApp Us
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <Link href="/safety" className="flex items-center gap-2 hover:text-white transition-colors"><Star className="w-4 h-4" /> Our Safety Standards</Link>
              <Link href="/pricing" className="flex items-center gap-2 hover:text-white transition-colors"><Crown className="w-4 h-4" /> Transparent Pricing</Link>
              <Link href="/reviews" className="flex items-center gap-2 hover:text-white transition-colors"><Heart className="w-4 h-4" /> 4.9/5 Customer Rating</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
