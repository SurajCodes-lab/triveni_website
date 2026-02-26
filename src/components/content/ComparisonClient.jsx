'use client';

import Link from 'next/link';
import { Phone, Check, X, ArrowRight, Star, Users, Shield, ChevronRight, Car, Fuel } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { FAQSection } from '@/components/seo/FAQSection';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export default function ComparisonClient({ data }) {
  const { vehicle1: v1, vehicle2: v2, comparisonPoints, faqs, verdict } = data;

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section - VS Style */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/30" />
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px]" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/vehicles" className="hover:text-amber-400 transition-colors">Vehicles</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-400">{v1.name} vs {v2.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-400/20 rounded-full px-4 py-2 mb-6">
            <Car className="w-4 h-4 text-amber-300" />
            <span className="text-amber-200 text-sm font-medium">{data.category}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {v1.name}
            <span className="inline-block mx-4 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-black rounded-xl text-2xl md:text-3xl font-black align-middle">VS</span>
            <span className="block mt-2 md:inline md:mt-0">{v2.name}</span>
          </h1>

          <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">
            {data.metaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a onClick={() => trackPhoneCall('comparison_page')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/20 hover:scale-105 transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </a>
            <a onClick={() => trackWhatsAppClick('comparison_page')} href="https://wa.me/917668570551?text=I need help choosing between vehicles for my trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold border border-amber-400/20 hover:bg-white/10 transition-all">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-500/10 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase border border-amber-500/20">
              Quick Comparison
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Side-by-Side <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Specs</span>
            </h2>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3">
              {/* Header Row */}
              <div className="p-4 md:p-6 bg-white/5 border-b border-white/10">
                <span className="text-slate-400 font-bold text-sm uppercase tracking-wider">Feature</span>
              </div>
              <div className="p-4 md:p-6 text-center border-b border-white/10 border-l border-white/5">
                <h3 className="font-bold text-amber-400 text-sm md:text-base">{v1.name}</h3>
                <span className="text-xs text-slate-500">{v1.category}</span>
              </div>
              <div className="p-4 md:p-6 text-center border-b border-white/10 border-l border-white/5">
                <h3 className="font-bold text-cyan-400 text-sm md:text-base">{v2.name}</h3>
                <span className="text-xs text-slate-500">{v2.category}</span>
              </div>

              {/* Data Rows */}
              {[
                { label: 'Seating', v1: v1.seating, v2: v2.seating },
                { label: 'Rate', v1: v1.ratePerKm, v2: v2.ratePerKm },
                { label: 'Boot Space', v1: v1.bootSpace, v2: v2.bootSpace },
                { label: 'AC Type', v1: v1.acType, v2: v2.acType },
                { label: 'Fuel', v1: v1.fuelType, v2: v2.fuelType },
                { label: 'Mileage', v1: v1.mileage, v2: v2.mileage },
                { label: 'Min. Charge', v1: v1.minimumCharge, v2: v2.minimumCharge },
              ].map((row, i) => (
                <div key={row.label} className="contents">
                  <div className={`p-4 md:p-5 text-slate-300 font-medium text-sm ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5`}>
                    {row.label}
                  </div>
                  <div className={`p-4 md:p-5 text-center text-white/80 text-sm ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 border-l border-white/5`}>
                    {row.v1}
                  </div>
                  <div className={`p-4 md:p-5 text-center text-white/80 text-sm ${i % 2 === 0 ? 'bg-white/[0.02]' : ''} border-b border-white/5 border-l border-white/5`}>
                    {row.v2}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Bars */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-amber-500/10 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase border border-amber-500/20">
              Detailed Analysis
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              How They <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Compare</span>
            </h2>
          </div>

          <div className="space-y-6">
            {comparisonPoints.map((point, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/20 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">{point.aspect}</h3>
                  <span className="text-slate-400 text-sm hidden md:block">{point.note}</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* V1 Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-amber-400 text-sm font-medium">{v1.name.split(' ')[0]}</span>
                      <span className="text-amber-400 font-bold">{point.v1Score}/10</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000"
                        style={{ width: `${point.v1Score * 10}%` }}
                      />
                    </div>
                  </div>

                  {/* V2 Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 text-sm font-medium">{v2.name.split(' ')[0]}</span>
                      <span className="text-cyan-400 font-bold">{point.v2Score}/10</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                        style={{ width: `${point.v2Score * 10}%` }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mt-3 md:hidden">{point.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pros and Cons Side by Side */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pros & <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Cons</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vehicle 1 */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-amber-500/20">
              <h3 className="text-xl font-bold text-amber-400 mb-6">{v1.name}</h3>

              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3 text-sm uppercase tracking-wider">Advantages</h4>
                <ul className="space-y-2">
                  {v1.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-red-400 font-semibold mb-3 text-sm uppercase tracking-wider">Limitations</h4>
                <ul className="space-y-2">
                  {v1.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vehicle 2 */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">{v2.name}</h3>

              <div className="mb-6">
                <h4 className="text-green-400 font-semibold mb-3 text-sm uppercase tracking-wider">Advantages</h4>
                <ul className="space-y-2">
                  {v2.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-red-400 font-semibold mb-3 text-sm uppercase tracking-wider">Limitations</h4>
                <ul className="space-y-2">
                  {v2.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <X className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best For Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Best <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Use Cases</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-3xl p-6 md:p-8 border border-amber-500/20">
              <h3 className="text-lg font-bold text-amber-400 mb-4">Choose {v1.name} If:</h3>
              <div className="flex flex-wrap gap-2">
                {v1.bestFor.map((use, i) => (
                  <span key={i} className="px-4 py-2 bg-amber-500/10 border border-amber-500/20 text-amber-200 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-3xl p-6 md:p-8 border border-cyan-500/20">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Choose {v2.name} If:</h3>
              <div className="flex flex-wrap gap-2">
                {v2.bestFor.map((use, i) => (
                  <span key={i} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-200 rounded-full text-sm">
                    {use}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdict Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 via-white/5 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-bold">Our Verdict</span>
            </div>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              {verdict}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a onClick={() => trackPhoneCall('comparison_page')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Get Expert Advice
              </a>
              <a onClick={() => trackWhatsAppClick('comparison_page')} href="https://wa.me/917668570551?text=Help me choose between vehicles" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition-all">
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <FAQSection
          faqs={faqs}
          title={`${v1.name} vs ${v2.name} — FAQs`}
          subtitle="Common questions about choosing between these vehicles"
          showSchema={true}
          variant="card"
          showContactCTA={true}
        />
      )}

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23000\' stroke-width=\'0.5\'%3E%3Crect width=\'50\' height=\'50\'/%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
            Our travel experts recommend the perfect vehicle based on your route, group size, and budget. Call us for free advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a onClick={() => trackPhoneCall('comparison_page')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </a>
            <a onClick={() => trackWhatsAppClick('comparison_page')} href="https://wa.me/917668570551?text=I need help choosing a vehicle for my trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/90 text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white transition-all">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-bold text-white mb-6">Related Comparisons:</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { title: 'Sedan vs SUV', href: '/sedan-vs-suv' },
              { title: 'Tempo vs Bus', href: '/tempo-vs-bus' },
              { title: 'Innova vs Ertiga', href: '/innova-vs-ertiga-for-outstation' },
              { title: 'Fortuner vs Innova', href: '/fortuner-vs-innova-crysta' },
              { title: '12 vs 17 Seater Tempo', href: '/12-seater-vs-17-seater-tempo' },
              { title: 'Bus vs Tempo for Wedding', href: '/bus-vs-tempo-for-wedding' },
              { title: 'One Way vs Round Trip', href: '/one-way-vs-round-trip-cab' },
              { title: 'Self Drive vs Chauffeur', href: '/self-drive-vs-chauffeur' },
              { title: 'View All Vehicles', href: '/vehicles' },
            ].filter(link => !link.href.includes(data.slug)).map((link, i) => (
              <Link key={i} href={link.href} className="text-sm text-amber-400/80 hover:text-amber-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-amber-500/30 transition-all">
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Breadcrumb */}
      <nav className="py-4 px-4 bg-slate-900 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/vehicles" className="hover:text-amber-400 transition-colors">Vehicles</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-300">{v1.name} vs {v2.name}</span>
        </div>
      </nav>
    </div>
  );
}
