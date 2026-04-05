'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Navigation, ChevronRight, Award
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function CabServiceCityClient({ data, relatedCities }) {
  const whatsappMsg = `Hi, I need a cab service in ${data.city}. Please share rates.`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;
  const cheapest = Math.min(...data.services.map(s => s.startingPrice));
  const heroImage = getCityImage(data.city);

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: City service hub ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`Cab service in ${data.city}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FACF2D] via-amber-400 to-orange-400 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/cab-service" className="hover:text-white/70 transition-colors">Cab Service</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{data.city}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <MapPin className="w-3.5 h-3.5 text-[#FACF2D]" />
                <span className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-widest">Service Directory</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {data.city}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] to-amber-300">Cab Service</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{data.tagline}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('cab_service_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('cab_service_hero', whatsappMsg)} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Quote
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Starting</p>
                  <p className="text-3xl font-black text-[#FACF2D] leading-tight">{'\u20B9'}{cheapest}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Rating</p>
                  <p className="text-3xl font-black text-white leading-tight">4.9<span className="text-lg text-white/40 ml-0.5">/5</span></p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Services</p>
                  <p className="text-sm font-bold text-white/80">{data.services.length} Types</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Available</p>
                  <p className="text-sm font-bold text-white/80">24/7</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">10,000+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Service types at a glance ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-4 text-center">Available Services in {data.city}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {data.services.slice(0, 4).map((service, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 text-center hover:border-[#FACF2D]/30 transition-all">
                <Car className="w-5 h-5 text-[#FACF2D] mx-auto mb-2" />
                <p className="text-xs font-bold text-white truncate">{service.name}</p>
                <p className="text-lg font-black text-[#FACF2D] mt-1">{'\u20B9'}{service.startingPrice.toLocaleString('en-IN')}</p>
                <p className="text-[10px] text-white/30">starting</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ SERVICES: Bento grid ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Our Services</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">{data.city} Cab Services</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((service, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-2xl border border-slate-100 p-6 hover:border-amber-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4"><Car className="w-6 h-6 text-amber-600" /></div>
                  <h3 className="text-lg font-black text-slate-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-slate-500 mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div><span className="text-[10px] text-slate-400 uppercase tracking-wider">Starting</span><div className="text-xl font-black text-slate-900">{'\u20B9'}{service.startingPrice.toLocaleString('en-IN')}</div></div>
                    <a href="tel:+917668570551" className="text-amber-600 font-bold text-sm hover:text-amber-700 flex items-center gap-1">Book <ChevronRight className="w-4 h-4" /></a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FLEET: Dark section ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Our Fleet</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Choose Your Ride</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {data.fleet.map((vehicle, i) => (
              <ScrollReveal key={i} stagger={i * 60}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center hover:border-[#FACF2D]/30 transition-all">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center mb-4"><Car className="w-6 h-6 text-[#FACF2D]" /></div>
                  <h3 className="text-lg font-black text-white mb-0.5">{vehicle.type}</h3>
                  <p className="text-sm text-white/40 mb-3">{vehicle.model}</p>
                  <div className="text-2xl font-black text-[#FACF2D] mb-1">{'\u20B9'}{vehicle.perKm}<span className="text-sm text-white/30 font-normal">/km</span></div>
                  <p className="text-xs text-white/30">{vehicle.seats} Seater &middot; AC</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ POPULAR ROUTES ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Popular Routes</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Top Routes from {data.city}</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {data.popularRoutes.map((route, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-100 hover:border-amber-200 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0"><Navigation className="w-5 h-5 text-amber-600" /></div>
                    <div><h3 className="font-bold text-slate-900">{data.city} to {route.to}</h3><p className="text-sm text-slate-400">{route.distance} &middot; {route.time}</p></div>
                  </div>
                  <div className="flex items-center gap-5 w-full sm:w-auto justify-between sm:justify-end">
                    <div className="text-right"><div className="text-xs text-slate-400">Sedan from</div><div className="text-lg font-black text-slate-900">{route.fare}</div></div>
                    <a href="tel:+917668570551" className="inline-flex items-center gap-1 bg-[#FACF2D] text-slate-900 px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-amber-400 transition-all">Book <ArrowRight className="w-4 h-4" /></a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ WHY CHOOSE US ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-1">Our Promise</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Why Choose Triveni Cabs</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Shield, title: 'Verified Drivers', desc: 'Background-checked, trained chauffeurs' },
              { icon: Clock, title: '24/7 Available', desc: 'Round-the-clock booking support' },
              { icon: Award, title: 'Best Prices', desc: 'Transparent, no hidden charges' },
              { icon: Star, title: '4.9 Rated', desc: '10,000+ verified reviews' },
            ].map((f, i) => (
              <ScrollReveal key={i} stagger={i * 60}>
                <div className="bg-[#f8f7f4] rounded-2xl p-5 text-center hover:shadow-md transition-all border border-slate-100">
                  <div className="w-12 h-12 mx-auto rounded-2xl bg-amber-50 flex items-center justify-center mb-3">
                    <f.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion heading={`${data.city} Cab Service FAQs`} faqs={data.faqs} />

      {relatedCities.length > 0 && (
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 text-center mb-8">Cab Service in Other Cities</h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {relatedCities.map((rc, i) => (
                <Link key={i} href={`/cab-service/${rc.slug}`} className="bg-white rounded-xl p-5 border border-slate-200 hover:border-amber-200 hover:shadow-md transition-all text-center block">
                  <h3 className="font-bold text-slate-900 mb-0.5">{rc.city}</h3>
                  <p className="text-xs text-slate-400 mb-2">Cab Service</p>
                  <span className="text-amber-600 font-bold text-sm">View Rates &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Book a Cab in ${data.city}`} subheading="Professional drivers, GPS-tracked vehicles, transparent pricing. Available 24/7." />
      <MobileStickyBar />
    </div>
  );
}
