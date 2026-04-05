'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Phone, ArrowRight, Shield, Clock, Car, CheckCircle2,
  Route, MapPin, Star, Users, Sparkles, ChevronRight, TrainFront
} from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>;

export default function TrainTaxiClient({ route, relatedRoutes }) {
  const cheapest = Math.min(...route.taxiPackages.map(p => p.sedan));
  const heroImage = getCityImage(route.city);
  const whatsappMsg = `Hi, I am arriving by ${route.train.name} (${route.train.number}) at ${route.city}. Need taxi pickup. Train arrival: ${route.train.arrival}`;
  const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Connected journey ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${route.train.name} taxi at ${route.city}`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-500 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/train-taxi" className="hover:text-white/70 transition-colors">Train + Taxi</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{route.train.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <TrainFront className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-widest">Connected Journey</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">{route.train.name}</span>
                <br /><span className="text-white/90">+ {route.city} Taxi</span>
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">
                Pre-booked cab waiting at {route.city} station -- from <span className="text-[#FACF2D] font-bold">{'\u20B9'}{cheapest}</span>
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('train_taxi_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('train_taxi_hero', whatsappMsg)} href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3.5 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Booking
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Train</p>
                  <p className="text-sm font-bold text-white truncate">{route.train.number}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Duration</p>
                  <p className="text-sm font-bold text-white">{route.train.duration}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Cab From</p>
                  <p className="text-sm font-bold text-[#FACF2D]">{'\u20B9'}{cheapest}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Rating</p>
                  <p className="text-sm font-bold text-white/80">4.9/5</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}
                </div>
                <span className="text-[11px] text-white/40 font-medium">10,000+ station pickups</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ DARK STRIP: Journey flow visualization ━━━ */}
      <section className="bg-slate-900 py-6 sm:py-8 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-5 text-center">Your Connected Journey</p>
          <div className="flex items-center justify-center gap-0 w-full">
            {[
              { label: 'Board Train', sub: route.train.departure, color: 'bg-cyan-500', icon: TrainFront },
              { label: route.city + ' Station', sub: route.train.arrival, color: 'bg-sky-500', icon: MapPin },
              { label: 'Cab Pickup', sub: '15 min early', color: 'bg-[#FACF2D]', icon: Car },
              { label: 'Destination', sub: 'Door to door', color: 'bg-emerald-500', icon: MapPin },
            ].map((step, i) => (
              <div key={i} className="flex items-center flex-1 min-w-0">
                <div className="text-center w-full">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${step.color} flex items-center justify-center mx-auto mb-2`}>
                    <step.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${i === 2 ? 'text-slate-900' : 'text-white'}`} />
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-white truncate">{step.label}</p>
                  <p className="text-[9px] text-white/30 truncate">{step.sub}</p>
                </div>
                {i < 3 && (
                  <div className="flex-shrink-0 w-8 sm:w-12 h-0.5 bg-gradient-to-r from-white/20 to-white/5 mx-0.5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ TRAIN DETAILS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-1">Train Info</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Train Details</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-7 shadow-sm" data-snippet-type="direct-answer">
              <div className="key-info grid grid-cols-2 md:grid-cols-3 gap-5 mb-5">
                <div><div className="text-xs text-cyan-600 uppercase tracking-wider font-bold mb-1">Train</div><div className="text-lg font-black text-slate-900">{route.train.name}</div></div>
                <div><div className="text-xs text-cyan-600 uppercase tracking-wider font-bold mb-1">Number</div><div className="text-lg font-black text-slate-900">{route.train.number}</div></div>
                <div><div className="text-xs text-cyan-600 uppercase tracking-wider font-bold mb-1">Duration</div><div className="text-lg font-black text-slate-900">{route.train.duration}</div></div>
                <div><div className="text-xs text-sky-600 uppercase tracking-wider font-bold mb-1">Departure</div><div className="text-base font-bold text-slate-700">{route.train.departure}</div></div>
                <div><div className="text-xs text-sky-600 uppercase tracking-wider font-bold mb-1">Arrival</div><div className="text-base font-bold text-slate-700">{route.train.arrival}</div></div>
                <div><div className="text-xs text-sky-600 uppercase tracking-wider font-bold mb-1">Classes</div><div className="text-sm text-slate-600">{route.train.classes.join(', ')}</div></div>
              </div>
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-4 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-cyan-600 mt-0.5 flex-shrink-0" />
                <div><span className="text-cyan-700 font-bold text-sm">Pro Tip: </span><span className="text-slate-600 text-sm">{route.bookingTip}</span></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ TAXI PACKAGES: Dark section ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Taxi Packages</p>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-white">Packages at {route.city}</h2>
              <p className="text-white/30 text-sm">Pre-booked cab at station exit</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {route.taxiPackages.map((pkg, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className={`relative rounded-2xl overflow-hidden ${i === 1 ? 'ring-2 ring-cyan-400/50' : ''}`}>
                  {i === 1 && <div className="bg-cyan-500 text-center py-1.5"><span className="text-[10px] font-black text-white uppercase tracking-widest">Most Popular</span></div>}
                  <div className="bg-slate-800 p-6">
                    <h3 className="text-lg font-black text-white mb-5 text-center">{pkg.name}</h3>
                    <div className="space-y-3 mb-5">
                      <div className="flex justify-between"><span className="text-white/40 text-sm">Sedan</span><span className="text-xl font-black text-cyan-400">{'\u20B9'}{pkg.sedan.toLocaleString('en-IN')}</span></div>
                      <div className="flex justify-between"><span className="text-white/40 text-sm">SUV</span><span className="text-xl font-black text-sky-400">{'\u20B9'}{pkg.suv.toLocaleString('en-IN')}</span></div>
                    </div>
                    <div className="space-y-2 mb-5">
                      {['Station pickup with name board', 'AC vehicle, GPS tracked', 'Return station drop included'].map((f, j) => (
                        <div key={j} className="flex items-center gap-2 text-[11px] text-white/50"><CheckCircle2 className="w-3 h-3 text-cyan-400 flex-shrink-0" /> {f}</div>
                      ))}
                    </div>
                    <a onClick={() => trackWhatsAppClick('train_taxi_pkg')} href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                      className={`block w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${i === 1 ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'}`}>
                      Book Now <ArrowRight className="w-4 h-4 inline ml-1" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center mt-6 text-white/30 text-sm">Total trip cost (train + taxi): <span className="text-[#FACF2D] font-bold">{route.totalTripCost}</span></p>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-1">Seamless Process</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">How It Works</h2>
          </ScrollReveal>
          <div className="space-y-3">
            {[
              { step: '1', title: 'Book Train on IRCTC', desc: `Book ${route.train.name} (${route.train.number}) on irctc.co.in. Share PNR with us.` },
              { step: '2', title: 'Call/WhatsApp Us', desc: 'Call 7668570551 or WhatsApp. Share PNR, arrival time, and sightseeing preference.' },
              { step: '3', title: 'Driver Tracks Your Train', desc: 'Our driver monitors train status and arrives 15 minutes before your train.' },
              { step: '4', title: 'Seamless Pickup', desc: `Driver waits at ${route.city} station exit with your name board. No waiting, no haggling.` },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="bg-white rounded-xl p-5 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500 flex items-center justify-center text-white font-black text-base flex-shrink-0">{item.step}</div>
                  <div><h3 className="font-black text-slate-900 mb-0.5">{item.title}</h3><p className="text-sm text-slate-500">{item.desc}</p></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FaqAccordion heading={`${route.train.name} + ${route.city} Taxi FAQs`} faqs={route.faqs} />

      {relatedRoutes?.length > 0 && (
        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mb-1">More Combos</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">More Train + Taxi Combos</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {relatedRoutes.map((rr, i) => (
                <ScrollReveal key={i} stagger={i * 50}>
                  <Link href={`/train-taxi/${rr.slug}`} className="group bg-white rounded-xl border border-slate-200 p-5 hover:border-cyan-300 hover:shadow-md transition-all block">
                    <h3 className="font-black text-slate-900 group-hover:text-cyan-600 transition-colors mb-0.5">{rr.train.name}</h3>
                    <p className="text-sm text-slate-400 mb-2">{rr.city} &middot; {rr.train.duration}</p>
                    <span className="text-cyan-600 text-sm font-semibold flex items-center gap-1">View Combo <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Book Station Pickup at ${route.city}`} subheading={`Pre-booked taxi for ${route.train.name} passengers at ${route.city}. From \u20B9${cheapest}.`} />
      <MobileStickyBar />
    </div>
  );
}
