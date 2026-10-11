'use client';

// VehicleCityClient — theme-driven premium city landing page. ONE canonical
// page per (vehicle type × city). Two distinct, elevated design systems via
// the vehicleThemes kit:
//   • Force Urbania  → "Executive"  (navy + platinum, blueprint, boarding-pass)
//   • Maharaja Tempo → "Royal"      (burgundy + gold-foil, Fraunces, crest)
// Both are deliberately different from each other and from the Tempo "Aurora".

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle,
  ArrowRight, Route, Navigation, Award, Headphones, CreditCard, Compass,
  Sparkles, ChevronDown, Crown, Gem, ArrowLeft, Map, Plane, Info, Gauge,
  Snowflake, Receipt, ShieldCheck, Building2, Mountain, Heart,
} from '@/components/ui/icons';
import { motion, MotionConfig } from 'framer-motion';
import { useShouldReduceMotion } from '@/hooks/useIsMobile';
import { getTypeIcon, formatDestinationForDisplay } from '@/utilis/tempoColors';
import { resolveDestinationImage } from '@/utilis/destinationImage';
import InfographicPanel from '@/components/seo/InfographicPanel';
import PriceCalculator from '@/components/seo/PriceCalculator';
import OutboundCitations from '@/components/seo/OutboundCitations';
import ExpertQuote from '@/components/seo/ExpertQuote';
import LongTailFAQ from '@/components/seo/LongTailFAQ';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { getCitationsForRoute } from '@/utilis/outboundCitations';
import { getFounderQuoteForContext } from '@/utilis/expertQuotes';
import { generateLongTailFaqs } from '@/utilis/longTailFaqGenerator';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import {
  THEME_BY_VEHICLE, BlueprintGrid, RoyalFrame, Embers, Crest,
  SectionLabel, ThemedDivider, ThemedHeading, Accent, ThemedCard, ThemedSpecTable,
  resolveVariant, getLook, VariantMotif, VariantSignature,
} from '@/components/vehicleThemes';
import VehicleFleetTable from '@/components/seo/VehicleFleetTable';
import { groupDigits } from '@/utilis/pricing';

const ICONS = { Users, Snowflake, Route, Receipt, Crown, Gauge, ShieldCheck, Sparkles, Heart, Building2, Plane, Mountain, Car, Compass, Map, Navigation };
const Icon = ({ name, className }) => { const C = ICONS[name] || Car; return <C className={className} />; };

export default function VehicleCityClient({ data }) {
  const [mounted, setMounted] = useState(false);
  const [hoveredRoute, setHoveredRoute] = useState(null);
  const [showAllVehicles, setShowAllVehicles] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const { vehicle: v, cityData, routes, fleet, cityFaqs = [], topDestinations = [], allCities = [], otherVehicleTypes = [] } = data;
  const theme = THEME_BY_VEHICLE[v.slug] || THEME_BY_VEHICLE['force-urbania'];
  const isRoyal = theme.key === 'maharaja';
  // Variant is driven by the CITY itself — a Manali city page is a hills
  // variant, a Jodhpur page is rajasthan, Varanasi is spiritual, etc. This is
  // what makes the 24 city pages × 2 brands read differently from each other.
  const variantKey = resolveVariant({ isCity: true, citySlug: cityData.slug, cityName: cityData.name });
  const look = getLook(theme, variantKey);
  const reduce = useShouldReduceMotion();
  const waText = `Hi, I want to book a ${v.type} in ${cityData.name}. Please share availability and fare.`;

  useEffect(() => { setMounted(true); }, []);

  return (
    <MotionConfig reducedMotion={reduce ? 'always' : 'never'}>
      <div className={`min-h-screen ${theme.pageBg} overflow-hidden`}>
        <SetStickyCta price={`From ₹${groupDigits(v.lowPrice)}/km`} label={`${cityData.name} ${v.type}`} whatsappText={waText} />

        {/* ============================== HERO ============================== */}
        {isRoyal ? (
          <RoyalHero theme={theme} look={look} v={v} cityData={cityData} routes={routes} otherVehicleTypes={otherVehicleTypes} mounted={mounted} reduce={reduce} />
        ) : (
          <ExecutiveHero theme={theme} look={look} v={v} cityData={cityData} routes={routes} otherVehicleTypes={otherVehicleTypes} mounted={mounted} />
        )}

        {/* ====== VARIANT SIGNATURE BAND (per-city-type differentiation) ====== */}
        <VariantSignature look={look} payload={{ origin: cityData.name, displayDestination: cityData.name, vehicle: v }} />

        {/* ============ DIRECT ANSWER + SEATER SPEC TABLE (AEO) ============ */}
        <section className={`py-14 md:py-20 ${isRoyal ? 'bg-[#FFF8EC]' : 'bg-white'} border-b ${isRoyal ? 'border-amber-200/60' : 'border-slate-100'}`}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`direct-answer ${isRoyal ? 'bg-[#FFFBF2] border border-amber-300/70' : 'bg-slate-50 border border-slate-200'} rounded-2xl p-6 md:p-8`} data-snippet-type="direct-answer">
              <h2 className={`text-2xl md:text-3xl font-black mb-4 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>
                How much does a {v.type.toLowerCase()} cost in {cityData.name}?
              </h2>
              <p className="speakable-lead text-slate-700 leading-relaxed text-base md:text-lg">
                A <strong>{v.type.toLowerCase()} in {cityData.name}</strong> starts at <strong>₹{groupDigits(v.lowPrice)}/km</strong> for the {fleet[0].name.toLowerCase()} and goes up to <strong>₹{groupDigits(v.highPrice)}/km</strong> for the {fleet[fleet.length - 1].name.toLowerCase()}, with local 8-hour/80-km day packages from <strong>{v.localRate.split(' ')[0]}</strong>. Triveni Cabs™ offers {v.capacity.toLowerCase()} AC {v.type.toLowerCase()}s in {cityData.name} with {v.features.slice(0, 3).join(', ').toLowerCase()} — ideal for {v.idealFor.slice(0, 2).join(', ').toLowerCase()} to {cityData.popularDestinations?.slice(0, 3).join(', ')} and {routes.length}+ destinations. Book by calling <strong>+91-7668570551</strong> or WhatsApp.
              </p>
              <ThemedSpecTable theme={theme} rows={v.tableRows} caption={`${v.type} fares and seating in ${cityData.name}`} />
              <p className={`text-xs mt-2 ${isRoyal ? 'text-amber-800/60' : 'text-slate-500'}`}>Rates in {cityData.name} include fuel &amp; driver. Tolls, parking &amp; state taxes extra. GST as applicable.</p>
            </div>
            <div className="mt-8 max-w-xl mx-auto rounded-2xl p-2 shadow-xl bg-gradient-to-br from-slate-900 to-slate-800">
              <QuickEnquiryForm fromCity={cityData.name} pageType={v.vertical} />
            </div>
          </div>
        </section>

        {/* ===== FARE TABLE (answer engines + AI assistants) =================
             A real <table>, not styled cards. Google's table snippet requires
             one, and an assistant pairing a rate to a seater needs the
             relationship stated rather than inferred from card order. None of
             these pages had a table before. ================================= */}
        <VehicleFleetTable
          fleet={fleet}
          vehicleType={v.type}
          placeLabel={cityData.name}
          tone="light"
          className={isRoyal ? 'bg-[#FFF8EC]' : 'bg-slate-50'}
        />

        {/* ============================ USPs ============================ */}
        <section className={`py-16 md:py-24 ${isRoyal ? 'bg-[#FBF1DF]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <SectionLabel theme={theme} icon={isRoyal ? Crown : Award}>{isRoyal ? 'Royal Fleet' : 'Executive Standard'}</SectionLabel>
              <ThemedHeading theme={theme} className="mb-4">
                The <Accent theme={theme}>{v.shortName}</Accent> advantage in {cityData.name}
              </ThemedHeading>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {v.usps.map((u, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -8 }}>
                  <ThemedCard theme={theme} index={i} className="h-full p-7">
                    <div className={`inline-flex p-3.5 rounded-xl mb-5 ${isRoyal ? 'bg-gradient-to-br from-amber-300 to-amber-600' : 'bg-gradient-to-br from-[#0B1E3F] to-[#1E3A8A]'}`}>
                      <Icon name={u.icon} className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`text-lg font-bold mb-2 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{u.title}</h3>
                    <p className={`text-sm ${isRoyal ? 'text-amber-800/80' : 'text-slate-600'}`}>{u.desc}</p>
                  </ThemedCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ====================== DESTINATIONS GRID ====================== */}
        <section className={`py-16 md:py-24 relative overflow-hidden ${isRoyal ? 'bg-[#FFF8EC]' : 'bg-slate-50'}`}>
          {!isRoyal && <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(11,30,63,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(11,30,63,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <SectionLabel theme={theme} icon={Navigation}>Destinations from {cityData.name}</SectionLabel>
              <ThemedHeading theme={theme} className="mb-4">
                Choose your <Accent theme={theme}>destination</Accent>
              </ThemedHeading>
              <p className={`text-lg max-w-2xl mx-auto ${isRoyal ? 'text-amber-800/70' : 'text-slate-600'}`}>
                Book {v.type.toLowerCase()} from {cityData.name} to {routes.length} destinations across India
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {routes.map((route, index) => {
                const routeSlug = `${cityData.slug}-to-${route.name.toLowerCase().replace(/\s+/g, '-')}`;
                const destName = formatDestinationForDisplay(route.name);
                // Show the DESTINATION city's image on the card (Delhi→Manali shows Manali).
                const destImg = resolveDestinationImage(destName, resolveVariant({ destination: route.name }));
                return (
                  <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }}
                    onMouseEnter={() => setHoveredRoute(index)} onMouseLeave={() => setHoveredRoute(null)}>
                    <Link href={`${v.hubHref}/${routeSlug}`} className="block group">
                      <div className={`relative ${isRoyal ? 'bg-[#FFFBF2] border-amber-300/70 rounded-2xl' : 'bg-white border-slate-200 rounded-xl'} overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${hoveredRoute === index ? (isRoyal ? 'border-amber-400 -translate-y-1.5' : 'border-cyan-400 -translate-y-1.5') : ''}`}>
                        <div className="relative h-32 overflow-hidden">
                          <Image src={destImg} alt={`${cityData.name} to ${destName}`} fill className="object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" onError={(e) => { e.target.style.display = 'none'; }} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold border border-white/40 bg-black/40 text-white backdrop-blur-sm">{route.type}</span>
                          <span className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/85 backdrop-blur-sm flex items-center justify-center text-lg shadow">{getTypeIcon(route.type)}</span>
                          <h3 className="absolute bottom-2.5 left-3 right-3 text-lg font-black text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>{destName}</h3>
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-green-500/20" />
                            <span className="text-xs font-semibold text-slate-600">{cityData.name}</span>
                            <div className="flex-1 border-t border-dashed border-slate-300 relative"><Plane className="w-3.5 h-3.5 text-amber-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white" /></div>
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 ring-4 ring-red-500/20" />
                          </div>
                          <div className="flex items-center justify-between mt-4">
                            <div>
                              <span className="text-xs text-slate-400">from</span>
                              <p className={`text-lg font-black ${isRoyal ? 'text-amber-700' : 'text-cyan-700'} ${!isRoyal ? 'font-mono' : ''}`}>₹{groupDigits(v.lowPrice)}<span className="text-xs font-medium text-slate-400">/km</span></p>
                            </div>
                            <span className={`flex items-center gap-1 text-sm font-bold ${isRoyal ? 'text-amber-600' : 'text-cyan-600'} group-hover:gap-2 transition-all`}>View <ArrowRight className="w-4 h-4" /></span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================== FLEET ========================== */}
        <section className={`py-16 md:py-24 relative overflow-hidden ${isRoyal ? 'bg-[#3B0712] text-amber-50' : 'bg-[#0B1E3F] text-slate-100'}`}>
          {isRoyal ? <RoyalFrame /> : <BlueprintGrid />}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <SectionLabel theme={theme} icon={Car}>Our Fleet</SectionLabel>
              <h2 className={`text-3xl md:text-5xl font-black mb-4 ${isRoyal ? 'font-display-serif' : ''}`}>
                Choose your <span className={isRoyal ? 'text-gold-foil' : 'text-cyan-400'}>{v.shortName}</span>
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${isRoyal ? 'text-amber-100/70' : 'text-slate-300'}`}>
                Premium AC {v.type.toLowerCase()}s for {cityData.name} tours — {v.capacity}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {(showAllVehicles ? fleet : fleet.slice(0, 3)).map((veh, index) => (
                <motion.div key={veh.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} className="group">
                  <div className={`relative rounded-2xl overflow-hidden border transition-all duration-300 ${isRoyal ? 'bg-[#4C0512]/60 border-amber-400/30 hover:border-amber-300/60' : 'bg-white/5 border-white/10 hover:border-cyan-400/40'}`}>
                    {veh.popular && <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1"><Star className="w-3 h-3" /> POPULAR</div>}
                    {veh.premium && <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1"><Gem className="w-3 h-3" /> PREMIUM</div>}
                    <div className="relative h-44 overflow-hidden bg-black/30">
                      <Image src={veh.image} alt={veh.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className={`absolute bottom-3 left-3 px-3 py-1.5 rounded-lg flex items-center gap-2 ${isRoyal ? 'bg-amber-100 text-[#4C0519]' : 'bg-white text-[#0B1E3F]'}`}>
                        <Users className="w-4 h-4" /><span className="font-bold text-sm">{veh.capacity}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className={`text-lg font-bold mb-1 ${isRoyal ? 'font-display-serif' : ''}`}>{veh.name}</h3>
                      <p className={`text-xs mb-3 ${isRoyal ? 'text-amber-100/60' : 'text-slate-300/70'}`}>{veh.blurb}</p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {veh.features.slice(0, 3).map((f, idx) => (
                          <span key={idx} className={`px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1 ${isRoyal ? 'bg-amber-100/10 text-amber-100/80' : 'bg-white/10 text-slate-200/80'}`}><CheckCircle className="w-3 h-3" /> {f}</span>
                        ))}
                      </div>
                      <div className={`rounded-xl p-3 mb-4 ${isRoyal ? 'bg-amber-100/5' : 'bg-white/5'}`}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs opacity-60">Outstation</span>
                          <span className={`text-lg font-black ${isRoyal ? 'text-gold-foil' : 'text-cyan-400'} ${!isRoyal ? 'font-mono' : ''}`}>{veh.outstationRate}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs opacity-60">Local 8h/80km</span>
                          <span className="text-sm font-bold">{veh.localRate}</span>
                        </div>
                      </div>
                      <a href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book ${veh.name} from ${cityData.name}. Please share quote.`)}`} target="_blank" rel="noopener noreferrer"
                        className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${isRoyal ? theme.cta : 'bg-cyan-500 text-white hover:bg-cyan-400'}`}>
                        Book Now <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {fleet.length > 3 && (
              <div className="text-center mt-10">
                <button onClick={() => setShowAllVehicles(!showAllVehicles)} className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold transition-all ${isRoyal ? 'bg-amber-100/10 border border-amber-300/40 text-amber-100 hover:bg-amber-100/20' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'}`}>
                  <Car className="w-5 h-5" />{showAllVehicles ? 'Show Less' : `View all ${fleet.length} vehicles`}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===================== USE CASES + SPECS ===================== */}
        <section className={`py-16 md:py-24 ${isRoyal ? 'bg-[#FFF8EC]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionLabel theme={theme} icon={Compass}>{v.type} in {cityData.name} — ideal for</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {v.useCases.map((u, i) => (
                  <div key={i} className={`flex items-center gap-3 ${theme.cardBg} rounded-2xl border ${theme.cardBorder} px-5 py-4 shadow-sm`}>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isRoyal ? 'bg-gradient-to-br from-amber-300 to-amber-600' : 'bg-gradient-to-br from-[#0B1E3F] to-[#1E3A8A]'}`}>
                      <Icon name={u.icon} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className={`font-bold ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{u.label}</p>
                      <p className={`text-sm ${isRoyal ? 'text-amber-800/70' : 'text-slate-500'}`}>{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionLabel theme={theme} icon={Info}>Specifications</SectionLabel>
              <div className={`${theme.cardBg} rounded-2xl border ${theme.cardBorder} overflow-hidden shadow-sm`}>
                {v.specs.map(([k, val], i) => (
                  <div key={i} className={`flex items-start justify-between gap-4 px-5 py-4 ${i % 2 ? (isRoyal ? 'bg-[#FBF1DF]' : 'bg-slate-50') : ''}`}>
                    <span className={`font-semibold ${isRoyal ? 'text-amber-800' : 'text-slate-700'}`}>{k}</span>
                    <span className={`text-right max-w-[60%] ${isRoyal ? 'text-[#4C0519]' : 'text-slate-900'}`}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================== OTHER CITIES ===================== */}
        <section className={`py-16 md:py-24 relative overflow-hidden ${isRoyal ? 'bg-[#FBF1DF]' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <SectionLabel theme={theme} icon={Compass}>More starting points</SectionLabel>
              <ThemedHeading theme={theme} className="mb-3">Explore other <Accent theme={theme}>cities</Accent></ThemedHeading>
              <p className={`text-lg max-w-xl mx-auto ${isRoyal ? 'text-amber-800/70' : 'text-slate-600'}`}>Book {v.type.toLowerCase()} from other starting points across India</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {allCities.filter((c) => c.slug !== cityData.slug).slice(0, 8).map((city, index) => (
                <motion.div key={city.slug} initial={{ opacity: 0, y: 24, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }} className="group">
                  <Link href={`${v.hubHref}/${city.slug}`} className="block h-full">
                    <div className={`relative h-full min-h-[180px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${isRoyal ? 'border-amber-200 hover:border-amber-400' : 'border-slate-200 hover:border-cyan-300'}`}>
                      {city.image && <Image src={city.image} alt={city.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.style.display = 'none'; }} />}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${city.color || 'from-indigo-500 to-purple-600'} opacity-25 mix-blend-overlay`} />
                      <div className="relative z-10 h-full p-4 md:p-5 flex flex-col justify-between">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-xl border border-white/30"><span className="text-2xl">{city.icon}</span></div>
                          <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/30"><span className="text-xs font-bold text-white">{city.routeCount} routes</span></div>
                        </div>
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>{city.name}</h3>
                          <p className="text-xs text-white/80 mb-2 line-clamp-1" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{city.tagline || city.state}</p>
                          <div className="flex items-center gap-1.5 text-white font-semibold text-sm group-hover:gap-2.5 transition-all"><span style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>Explore</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================== FINAL CTA ===================== */}
        <section className={`relative py-20 md:py-28 overflow-hidden ${isRoyal ? 'bg-gradient-to-br from-[#3B0712] via-[#7F1D1D] to-[#9F1239]' : 'bg-gradient-to-br from-[#0B1E3F] via-[#102A54] to-[#1E3A8A]'}`}>
          {isRoyal ? <><RoyalFrame /><Embers count={12} /></> : <BlueprintGrid />}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              {isRoyal ? <Crest letter={cityData.name.charAt(0)} className="w-16 h-16 mx-auto mb-6" /> : <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center"><span className="text-3xl">{cityData.icon}</span></div>}
              <div className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full mb-6 border ${isRoyal ? 'bg-amber-400/15 border-amber-400/40 text-amber-300' : 'bg-cyan-400/15 border-cyan-400/40 text-cyan-300'}`}>
                <Sparkles className="w-4 h-4" /><span className="font-bold text-sm tracking-wider">BOOK YOUR JOURNEY TODAY</span>
              </div>
              <h2 className={`text-4xl md:text-6xl font-black text-white mb-6 ${isRoyal ? 'font-display-serif' : ''}`} style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                Ready to explore from <span className={isRoyal ? 'text-gold-foil' : 'text-cyan-400'}>{cityData.name}</span>?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Book your {v.type.toLowerCase()} today and experience premium group travel with Triveni Cabs™.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+917668570551" onClick={() => trackPhoneCall(`${v.slug}_city_cta`)} className={`px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 ${isRoyal ? theme.cta : 'bg-white text-[#0B1E3F]'}`}><Phone className="w-6 h-6" /> Call: +91 76685 70551</a>
                <a href={`https://wa.me/917668570551?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`${v.slug}_city_cta`)} className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"><MessageCircle className="w-6 h-6" /> WhatsApp Us</a>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-12">
                {[{ icon: Shield, label: 'Safe & Secure' }, { icon: Star, label: '4.9 Rating' }, { icon: Clock, label: '24/7 Support' }].map((it, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70"><it.icon className={`w-5 h-5 ${isRoyal ? 'text-amber-300' : 'text-cyan-300'}`} /><span className="text-sm font-medium">{it.label}</span></div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===================== POPULAR ROUTES ===================== */}
        {topDestinations.length > 0 && (
          <section className={`py-14 md:py-20 border-t ${isRoyal ? 'bg-[#FFF8EC] border-amber-200' : 'bg-white border-slate-100'}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <SectionLabel theme={theme} icon={Route}>Popular routes</SectionLabel>
                <h2 className={`text-2xl md:text-4xl font-black mb-3 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>Popular {v.type.toLowerCase()} routes from {cityData.name}</h2>
                <p className={`max-w-2xl mx-auto ${isRoyal ? 'text-amber-800/70' : 'text-slate-600'}`}>{v.capacity} AC {v.type.toLowerCase()} from {cityData.name} — all-inclusive per-km fares.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {topDestinations.map((dest, i) => (
                  <Link key={i} href={`${v.hubHref}/${dest.slug}`} className={`group flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 transition-all ${isRoyal ? 'bg-[#FFFBF2] border-amber-200 hover:border-amber-400 hover:bg-amber-50' : 'bg-slate-50 border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/40'}`}>
                    <span className="flex items-center gap-3">
                      <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-white ${isRoyal ? 'bg-gradient-to-br from-amber-300 to-amber-600' : 'bg-gradient-to-br from-[#0B1E3F] to-[#1E3A8A]'}`}><MapPin className="w-4 h-4" /></span>
                      <span className={`font-bold ${isRoyal ? 'text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{cityData.name} to {formatDestinationForDisplay(dest.name)}<span className={`block text-xs font-medium ${isRoyal ? 'text-amber-800/60' : 'text-slate-500'}`}>{v.type} • from ₹{groupDigits(v.lowPrice)}/km</span></span>
                    </span>
                    <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRoyal ? 'text-amber-500' : 'text-cyan-500'}`} />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== FAQ ===================== */}
        {cityFaqs.length > 0 && (
          <section className={`py-14 md:py-20 border-t ${isRoyal ? 'bg-[#FBF1DF] border-amber-200' : 'bg-slate-50 border-slate-100'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <SectionLabel theme={theme} icon={Info}>Frequently asked</SectionLabel>
                <h2 className={`text-2xl md:text-4xl font-black mb-3 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{v.type.toLowerCase()} in {cityData.name} — questions</h2>
                <p className={`text-sm ${isRoyal ? 'text-amber-800/70' : 'text-slate-600'}`}>Fares, seaters, routes, night charges, GST and booking for {v.type.toLowerCase()} hire in {cityData.name}.</p>
              </div>
              <div className="space-y-3">
                {cityFaqs.map((faq, index) => (
                  <div key={index} className={`${theme.cardBg} rounded-2xl border ${theme.cardBorder} overflow-hidden`}>
{/* h3 wraps the button — the WAI-ARIA accordion pattern. These FAQ questions
   were rendered as plain text, so a question-shaped heading never existed on
   the page for an answer engine to match against a question query. Tailwind
   preflight resets heading margin and font-size, so this is visually a no-op. */}
<h3 className="m-0">
                      <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 hover:bg-amber-50/40 transition-colors" aria-expanded={openFaq === index}>
                        <span className={`font-bold ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform ${isRoyal ? 'text-amber-500' : 'text-cyan-500'} ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
</h3>
                    {openFaq === index && <div className="px-5 md:px-6 pb-5"><p className={`text-slate-600 leading-relaxed${index === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p></div>}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===================== SEO CONTENT ===================== */}
        <section className={`py-16 px-4 border-t ${isRoyal ? 'bg-[#FFF8EC] border-amber-200' : 'bg-white border-slate-100'}`}>
          <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
            <h2 className={`text-2xl font-bold mb-6 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{v.type} on Rent in {cityData.name} — Outstation & Local Group Travel</h2>
            <p className="text-gray-700 leading-relaxed">{v.intro}</p>
            <p className="text-gray-700 leading-relaxed">Popular routes from {cityData.name} include trips to {cityData.popularDestinations?.join(', ')} and many more. Our {v.type.toLowerCase()}s come {v.features.slice(0, 4).join(', ').toLowerCase()}, with experienced, verified drivers. Outstation rates in {cityData.name} start from <strong>₹{groupDigits(v.lowPrice)}/km</strong> and local day packages from <strong>{v.localRate.split(' ')[0]}</strong>.</p>
            <p className="text-gray-700 leading-relaxed">With 2500+ completed group trips, a 4.9-star rating, and 24/7 availability, Triveni Cabs™ is {cityData.name}&apos;s trusted {v.type.toLowerCase()} rental service. View all <Link href={v.hubHref} className="text-blue-600 hover:underline">{v.type.toLowerCase()} options and routes</Link>, check our <Link href="/pricing" className="text-blue-600 hover:underline">transparent pricing</Link>, or <a href="tel:+917668570551" className="text-blue-600 hover:underline">call 7668570551</a> for instant booking.</p>
            <p className="text-gray-600 text-sm">{v.comparison}</p>
          </div>
        </section>

        <VehicleCityRichBlock vehicle={v} cityData={cityData} isRoyal={isRoyal} />
      </div>
    </MotionConfig>
  );
}

/* ─────────────────────────── EXECUTIVE HERO ─────────────────────────── */
function ExecutiveHero({ theme, look, v, cityData, routes, otherVehicleTypes, mounted }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1E3F] via-[#102A54] to-[#1E3A8A]">
      <BlueprintGrid />
      <VariantMotif look={look} opacity={0.1} />
      {cityData.image && (
        <div className="absolute inset-0 opacity-20">
          <Image src={cityData.image} alt={cityData.name} fill className="object-cover" priority fetchPriority="high" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3F] via-[#0B1E3F]/85 to-transparent" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-12 sm:pb-20">
        <Link href={v.hubHref} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 hover:bg-white/20 transition-all border border-white/20 mb-8">
          <ArrowLeft className="w-4 h-4" /><span className="text-sm font-medium">All {v.type} cities</span>
        </Link>

        {otherVehicleTypes.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {otherVehicleTypes.map((o) => (
              <Link key={o.slug} href={`${o.href}/${cityData.slug}`} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all">{o.heroLabel}</Link>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 mb-6">
              <span className="h-px w-8 bg-cyan-400/70" />
              <span className="text-cyan-300 font-semibold text-xs tracking-[0.25em] uppercase">{cityData.tagline}</span>
            </div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 bg-white/10 border border-white/20 ${look.heroAccentText}`}>
              <span className="text-sm">{look.variantIcon}</span>
              <span className="font-bold text-xs tracking-wider">{look.variantLabel.toUpperCase()}</span>
            </div>
            <h1 className="speakable-headline text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-5" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.4)' }}>
              {v.heroLabel} in <span className="text-cyan-400">{cityData.name}</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl mb-8">{v.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+917668570551" className="bg-white text-[#0B1E3F] px-8 py-4 rounded-xl font-bold text-lg shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"><Phone className="w-5 h-5" /> Call +91 76685 70551</a>
              <a href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.type} in ${cityData.name}.`)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`${v.slug}_city_hero`)} className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3"><MessageCircle className="w-5 h-5" /> WhatsApp</a>
            </div>
          </div>

          {/* Boarding-pass spec panel */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/15 overflow-hidden shadow-2xl">
              <div className="bg-white/10 px-5 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-cyan-300">TRIVENI · EXECUTIVE SPEC</span>
                <span className="text-xs text-slate-300 font-mono">{cityData.state}</span>
              </div>
              <div className="p-5 grid grid-cols-2 gap-4">
                {[
                  { k: 'Vehicle', val: v.shortName, sub: v.capacity },
                  { k: 'Outstation', val: `₹${groupDigits(v.lowPrice)}/km`, sub: `to ₹${groupDigits(v.highPrice)}/km`, mono: true },
                  { k: 'Destinations', val: String(routes.length), sub: 'from this city', mono: true },
                  { k: 'Rating', val: '4.9★', sub: 'verified reviews', mono: true },
                ].map((s, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3.5">
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 mb-1">{s.k}</p>
                    <p className={`text-xl font-black text-white ${s.mono ? 'font-mono tabular-nums' : ''}`}>{s.val}</p>
                    <p className="text-[11px] text-slate-400">{s.sub}</p>
                  </div>
                ))}
              </div>
              <div className="px-5 pb-5">
                <div className="border-t border-dashed border-white/20 pt-3 flex items-center justify-between text-[11px] text-slate-300 font-mono">
                  <span>SEATERS {v.fleet.map((f) => f.seats).join(' · ')}</span>
                  <span className="text-cyan-300">DRIVER INCLUDED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── ROYAL HERO ─────────────────────────── */
function RoyalHero({ theme, look, v, cityData, routes, otherVehicleTypes, mounted, reduce }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3B0712] via-[#7F1D1D] to-[#9F1239]">
      {cityData.image && (
        <div className="absolute inset-0 opacity-25" style={{ filter: 'sepia(0.4) saturate(1.1)' }}>
          <Image src={cityData.image} alt={cityData.name} fill className="object-cover" priority fetchPriority="high" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
      )}
      <RoyalFrame />
      <VariantMotif look={look} opacity={0.12} />
      <Embers count={16} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-12 sm:pb-20 text-center">
        <Link href={v.hubHref} className="inline-flex items-center gap-2 bg-amber-400/10 backdrop-blur-md px-4 py-2 rounded-full text-amber-100/90 hover:bg-amber-400/20 transition-all border border-amber-400/30 mb-10">
          <ArrowLeft className="w-4 h-4" /><span className="text-sm font-medium">All {v.type} cities</span>
        </Link>

        <motion.div initial={{ scale: 0, rotate: -10 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 160, delay: 0.15 }} className="flex justify-center mb-6">
          <Crest letter={cityData.name.charAt(0)} className="w-20 h-20" />
        </motion.div>

        {otherVehicleTypes.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {otherVehicleTypes.map((o) => (
              <Link key={o.slug} href={`${o.href}/${cityData.slug}`} className="text-xs font-semibold px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-100/80 hover:bg-amber-400/20 transition-all">{o.heroLabel}</Link>
            ))}
          </div>
        )}

        <div className="inline-flex items-center gap-2 mb-6">
          <span className="text-amber-400">✦</span>
          <span className="text-amber-200 font-semibold text-sm tracking-[0.25em] uppercase">{cityData.tagline}</span>
          <span className="text-amber-400">✦</span>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-amber-400/10 border border-amber-400/30">
          <span className="text-sm">{look.variantIcon}</span>
          <span className={`font-bold text-xs tracking-wider ${look.heroAccentText}`}>{look.variantLabel.toUpperCase()}</span>
        </div>

        <h1 className="speakable-headline font-display-serif text-4xl sm:text-6xl md:text-7xl font-black mb-5" style={{ textShadow: '0 4px 24px rgba(0,0,0,0.5)' }}>
          <span className="text-amber-50">{v.heroLabel} in</span>{' '}<br />
          <span className="text-gold-foil">{cityData.name}</span>
        </h1>
        <p className="text-lg text-amber-100/80 max-w-2xl mx-auto mb-8">{v.heroSubtitle}</p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[{ k: 'Destinations', val: String(routes.length) }, { k: 'Region', val: cityData.state }, { k: 'Rating', val: '4.9★' }, { k: 'From', val: `₹${groupDigits(v.lowPrice)}/km` }].map((s, i) => (
            <div key={i} className="bg-amber-400/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-amber-400/30">
              <span className="text-amber-100/60 text-xs mr-2">{s.k}</span>
              <span className="text-amber-50 font-bold">{s.val}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+917668570551" onClick={() => trackPhoneCall(`${v.slug}_city_hero`)} className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 text-[#3B0712] px-9 py-4 rounded-full font-bold text-lg shadow-gold-bloom flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform"><Phone className="w-5 h-5" /> Call +91 76685 70551</a>
          <a href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to book a ${v.type} in ${cityData.name}.`)}`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick(`${v.slug}_city_hero`)} className="bg-amber-400/10 backdrop-blur-md border-2 border-amber-400/40 text-amber-50 px-9 py-4 rounded-full font-bold text-lg hover:bg-amber-400/20 transition-all flex items-center justify-center gap-3"><MessageCircle className="w-5 h-5" /> WhatsApp</a>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────── RICH BLOCK ─────────────────────────── */
function VehicleCityRichBlock({ vehicle, cityData, isRoyal }) {
  const city = cityData?.name || '';
  const longTailFaqs = generateLongTailFaqs({ mode: 'tempo', origin: city, destination: 'any destination', distanceKm: 250, durationText: '6 hr' })
    .map((f) => ({ question: f.question.replace(/tempo traveller/gi, vehicle.type), answer: f.answer.replace(/tempo traveller/gi, vehicle.type.toLowerCase()) }));
  const founderQuote = getFounderQuoteForContext('tempo');
  const citations = getCitationsForRoute({ from: city, to: '', context: 'outstation' });
  return (
    <div className={isRoyal ? 'bg-[#2A050D] text-amber-50' : 'bg-slate-950 text-slate-100'}>
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          <div className="lg:col-span-3"><InfographicPanel title={`${vehicle.type} in ${city} by the numbers`} subtitle={`Fleet sizes available in ${city}, per-km starting rates, and verified rating.`} stats={vehicle.richStats} tone={isRoyal ? 'gold' : 'amber'} /></div>
          <div className="lg:col-span-2"><PriceCalculator distanceKm={250} mode="one-way" oneWayEqualsRoundTrip vehicles={vehicle.calculatorVehicles} tone={isRoyal ? 'gold' : 'amber'} originName={city} destinationName="" /></div>
        </div>
      </section>
      {founderQuote && <section className="py-10 px-4 sm:px-6"><div className="max-w-4xl mx-auto"><ExpertQuote quote={founderQuote.quote} authorName={founderQuote.author} authorTitle={founderQuote.title} authorOrg={founderQuote.org} tone="dark" /></div></section>}
      <section className="py-10 sm:py-16 px-4 sm:px-6"><div className="max-w-4xl mx-auto"><div className="text-center mb-10"><span className={`font-semibold text-sm tracking-widest uppercase ${isRoyal ? 'text-amber-400' : 'text-amber-400'}`}>{vehicle.shortName} in {city}</span><h2 className={`text-2xl sm:text-4xl font-black mt-3 tracking-tight ${isRoyal ? 'font-display-serif' : ''}`}>More about hiring a {vehicle.type.toLowerCase()} in {city}</h2></div><LongTailFAQ faqs={longTailFaqs} tone="dark" /></div></section>
      {citations.length > 0 && <section className="py-12 px-4 sm:px-6"><div className="max-w-4xl mx-auto"><OutboundCitations sources={citations} tone="dark" heading="Verified against these sources" /></div></section>}
    </div>
  );
}