'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, ArrowRight, Clock, Car, CheckCircle2, Star, Users, Calendar,
  MapPin, Navigation, ChevronRight, Sparkles, Snowflake, Sun, CloudRain,
  Leaf, Thermometer, TreePine, Droplets, Wind, Gauge,
} from '@/components/ui/icons';
import { getCityImage, heroBlurDataURL } from '@/utilis/imageUtils';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import ScrollReveal from '@/components/shared/ScrollReveal';
import FaqAccordion from '@/components/shared/FaqAccordion';
import CTASection from '@/components/shared/CTASection';
import MobileStickyBar from '@/components/ui/MobileStickyBar';

const WA = <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>;

const SEASON_ICONS = { Winter: Snowflake, Summer: Sun, Monsoon: CloudRain, Autumn: Leaf, Spring: TreePine, 'Spring/Summer': Sun, 'Post-Monsoon': Wind };
const SEASON_ACCENTS = { Winter: 'bg-sky-500', Summer: 'bg-amber-500', Monsoon: 'bg-emerald-500', Autumn: 'bg-orange-500', Spring: 'bg-lime-500', 'Spring/Summer': 'bg-amber-500', 'Post-Monsoon': 'bg-teal-500' };
const SEASON_RINGS = { Winter: 'ring-sky-200', Summer: 'ring-amber-200', Monsoon: 'ring-emerald-200', Autumn: 'ring-orange-200', Spring: 'ring-lime-200', 'Spring/Summer': 'ring-amber-200', 'Post-Monsoon': 'ring-teal-200' };

const CROWD_METER = { High: { width: '85%', color: 'bg-red-500', text: 'text-red-600', label: 'High' }, Medium: { width: '55%', color: 'bg-amber-500', text: 'text-amber-600', label: 'Moderate' }, Low: { width: '25%', color: 'bg-emerald-500', text: 'text-emerald-600', label: 'Low' } };
const PRICING_BADGE = { Peak: 'bg-red-50 text-red-700 border-red-200', Moderate: 'bg-amber-50 text-amber-700 border-amber-200', Budget: 'bg-emerald-50 text-emerald-700 border-emerald-200' };

export default function BestTimeClient({ data, relatedDestinations }) {
  const [activeSeason, setActiveSeason] = useState(0);
  const whatsappMsg = `Hi, I want to book a cab to ${data.destination}. Best time: ${data.peakSeason}`;
  const heroImage = getCityImage(data.destination);
  const season = data.seasons[activeSeason];
  const crowd = CROWD_METER[season?.crowd] || CROWD_METER.Medium;

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-slate-900">

      {/* ━━━ HERO: Travel calendar aesthetic ━━━ */}
      <section className="relative min-h-[75vh] sm:min-h-[80vh] flex flex-col justify-end overflow-hidden">
        <Image src={heroImage} alt={`${data.destination} landscape`} fill priority className="object-cover" sizes="100vw" quality={85} placeholder="blur" blurDataURL={heroBlurDataURL} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 z-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pb-8 sm:pb-12">
          <nav className="mb-6 flex items-center gap-1.5 text-xs text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/best-time-to-visit" className="hover:text-white/70 transition-colors">Best Time to Visit</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60">{data.destination}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest">Travel Calendar 2026</span>
              </div>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest mb-2">Best Time to Visit</p>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tight">
                {data.destination}
              </h1>
              <p className="text-white/40 mt-4 text-sm sm:text-base max-w-lg leading-relaxed">{data.overview}</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a onClick={() => trackPhoneCall('best_time_hero')} href="tel:+917668570551" className="inline-flex items-center gap-2 bg-[#FACF2D] text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-300 transition-all active:scale-[0.97] shadow-lg shadow-amber-500/20">
                  <Phone className="w-4 h-4" /> Call 7668570551
                </a>
                <a onClick={() => trackWhatsAppClick('best_time_hero')} href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold text-sm border border-white/15 hover:bg-white/15 transition-all">
                  {WA} WhatsApp Booking
                </a>
              </div>
            </div>

            {/* Floating quick facts card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-6 lg:w-72 flex-shrink-0">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Peak Season</p>
                  <p className="text-sm font-bold text-emerald-400">{data.peakSeason}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Seasons</p>
                  <p className="text-3xl font-black text-white leading-tight">{data.seasons.length}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Off Season</p>
                  <p className="text-sm font-bold text-white/80">{data.offSeason}</p>
                </div>
                <div>
                  <p className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">Cab From</p>
                  <p className="text-sm font-bold text-[#FACF2D]">Rs 11/km</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                <div className="flex -space-x-1">{[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />)}</div>
                <span className="text-[11px] text-white/40 font-medium">4.9 · 10,000+ trips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ SEASON SELECTOR TABS: Interactive visual ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Seasonal Guide</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">When to Visit {data.destination}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {/* Season tab column */}
            <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2">
              {data.seasons.map((s, i) => {
                const Icon = SEASON_ICONS[s.name] || Calendar;
                const accent = SEASON_ACCENTS[s.name] || 'bg-emerald-500';
                const ring = SEASON_RINGS[s.name] || 'ring-emerald-200';
                return (
                  <button key={i} onClick={() => setActiveSeason(i)}
                    className={`flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 sm:py-4 rounded-xl text-left transition-all duration-300 ${
                      activeSeason === i ? `bg-white shadow-lg ring-2 ${ring}` : 'bg-white/50 hover:bg-white'
                    }`}>
                    <div className={`w-9 h-9 rounded-lg ${accent} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{s.name}</p>
                      <p className="text-[10px] text-slate-400 hidden sm:block">{s.months}</p>
                    </div>
                    {activeSeason === i && <div className="hidden lg:block ml-auto w-1.5 h-8 rounded-full bg-emerald-500" />}
                  </button>
                );
              })}
            </div>

            {/* Active season detail panel */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
              {season && (() => {
                const Icon = SEASON_ICONS[season.name] || Calendar;
                const accent = SEASON_ACCENTS[season.name] || 'bg-emerald-500';
                return (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 rounded-xl ${accent} flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900">{season.name}</h3>
                        <p className="text-xs text-slate-400">{season.months}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{season.description}</p>

                    {/* Visual indicators grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Temperature */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Thermometer className="w-4 h-4 text-rose-500" />
                          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Temperature</span>
                        </div>
                        <p className="text-lg font-black text-slate-900">{season.temp}</p>
                      </div>

                      {/* Crowd meter */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="w-4 h-4 text-sky-500" />
                          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Crowd Level</span>
                        </div>
                        <p className={`text-sm font-bold ${crowd.text} mb-1.5`}>{crowd.label}</p>
                        <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${crowd.color} transition-all duration-700`} style={{ width: crowd.width }} />
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Droplets className="w-4 h-4 text-emerald-500" />
                          <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Pricing</span>
                        </div>
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold border ${PRICING_BADGE[season.pricing] || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                          {season.pricing} Season
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

          {/* Recommended months */}
          <ScrollReveal delay={100}>
            <div className="mt-8 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-4 text-center">Best Months to Visit</p>
              <div className="flex flex-wrap justify-center gap-2">
                {data.recommendedMonths.map((month, i) => (
                  <span key={i} className="bg-emerald-50 px-4 py-2 rounded-full font-bold text-emerald-700 border border-emerald-200 text-sm">{month}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ FESTIVALS ━━━ */}
      {data.festivals && data.festivals.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-teal-600 uppercase tracking-widest mb-1">Events & Culture</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Festivals in {data.destination}</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.festivals.map((fest, i) => (
                <ScrollReveal key={i} stagger={i * 60}>
                  <div className="bg-white rounded-xl border border-slate-100 p-5 hover:border-teal-200 hover:shadow-md transition-all duration-300 h-full">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 self-stretch rounded-full bg-teal-500 flex-shrink-0" />
                      <div>
                        <Calendar className="w-5 h-5 text-teal-500 mb-2" />
                        <h3 className="font-black text-slate-900 mb-0.5">{fest.name}</h3>
                        <p className="text-emerald-600 text-xs font-semibold mb-2">{fest.month}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{fest.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ━━━ PEAK vs OFF SEASON: Dark quick facts ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-[#FACF2D] uppercase tracking-widest mb-1">Season Comparison</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">Peak vs Off Season</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ScrollReveal>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold text-emerald-400 mb-4">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Recommended
                </div>
                <h3 className="text-xl font-black text-white mb-1">Peak Season</h3>
                <p className="text-emerald-400 font-semibold text-sm mb-4">{data.peakSeason}</p>
                <div className="space-y-2.5">
                  {['Best weather for sightseeing', 'All attractions fully open', 'Festival season experiences'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-white/70 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {item}</div>
                  ))}
                  <div className="flex items-center gap-2.5 text-white/40 text-sm"><Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" /> Higher hotel and cab demand</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={100}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-full">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 mb-4">
                  <Star className="w-3.5 h-3.5" /> Budget Friendly
                </div>
                <h3 className="text-xl font-black text-white mb-1">Off Season</h3>
                <p className="text-amber-400 font-semibold text-sm mb-4">{data.offSeason}</p>
                <div className="space-y-2.5">
                  {['30-50% lower prices', 'Fewer crowds at attractions', 'Easier hotel availability'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-white/70 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" /> {item}</div>
                  ))}
                  <div className="flex items-center gap-2.5 text-white/40 text-sm"><Sparkles className="w-4 h-4 text-red-400 flex-shrink-0" /> Some activities may be limited</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━ CAB BOOKING: Bento pricing ━━━ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Plan Your Trip</p>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Book a Cab to {data.destination}</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Large first card */}
            {[
              { name: 'Sedan', sub: 'Dzire / Etios', seats: '4', perKm: 'Rs 11', popular: false },
              { name: 'SUV', sub: 'Innova / Ertiga', seats: '6-7', perKm: 'Rs 14', popular: true },
              { name: 'Tempo', sub: '12-Seater AC', seats: '12', perKm: 'Rs 20', popular: false },
            ].map((v, i) => (
              <ScrollReveal key={i} stagger={i * 80}>
                <div className={`bg-white rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg h-full ${v.popular ? 'border-emerald-200 ring-1 ring-emerald-200/50' : 'border-slate-100 hover:border-emerald-200'}`}>
                  {v.popular && <div className="mb-4"><span className="bg-emerald-500 text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-wider">Most Popular</span></div>}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                      <Car className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900">{v.name}</h3>
                      <p className="text-xs text-slate-500">{v.sub} · {v.seats} Seater</p>
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4 mb-4 text-center">
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1">Per Kilometer</p>
                    <p className="text-3xl font-black text-emerald-700">{v.perKm}</p>
                    <p className="text-slate-400 text-xs mt-1">Min 300 km billing</p>
                  </div>
                  <div className="space-y-2 mb-5">
                    {['AC Vehicle', 'Verified Driver', 'GPS Tracking', 'Fuel Included'].map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                  <a onClick={() => trackWhatsAppClick('best_time_cab')} href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.name} to ${data.destination}`)}`} target="_blank" rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all active:scale-[0.97] ${v.popular ? 'bg-[#FACF2D] text-slate-900 hover:bg-amber-300' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
                    Book {v.name} <ArrowRight className="w-4 h-4 inline ml-1" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <FaqAccordion heading={`Common Questions about ${data.destination}`} faqs={data.faqs} />

      {/* ━━━ RELATED DESTINATIONS ━━━ */}
      {relatedDestinations.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Explore More</p>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">Other Destinations</h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {relatedDestinations.map((r, i) => {
                const Icon = SEASON_ICONS[r.seasons?.[0]?.name] || Navigation;
                return (
                  <ScrollReveal key={i} stagger={i * 50}>
                    <Link href={`/best-time-to-visit/${r.slug}`} className="group flex items-center gap-4 bg-[#f8f7f4] rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-slate-200">
                      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-100 transition-colors">
                        <Icon className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 text-sm truncate">{r.destination}</p>
                        <p className="text-xs text-emerald-600 font-medium">{r.peakSeason}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection heading={`Plan Your ${data.destination} Trip`} subheading={`Best time: ${data.peakSeason}. AC cabs from Rs 11/km with verified drivers and 24/7 booking.`} />
      <MobileStickyBar />
    </div>
  );
}
