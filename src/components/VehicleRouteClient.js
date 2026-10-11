'use client';

// VehicleRouteClient — generalized premium origin→destination route page for
// the SEO Expansion Proposal. Backs /force-urbania/[route] and
// /maharaja-tempo-traveller/[route].
//
// Theme + VARIANT aware: 2 brand families (Executive navy / Royal burgundy)
// × 7 destination-type variants (hills / spiritual / rajasthan / golden /
// chardham / wildlife / metro) → 14 distinct looks. Each page resolves a
// deterministic variant from its destination, so a Manali page reads nothing
// like a Jaisalmer, Varanasi or Char Dham page — different hero layout, motif,
// accent and a signature content band. The hero shows the DESTINATION city's
// image (resolveDestinationImage), not a shared vehicle shot.
//
// Signature element preserved: an interactive SEATER SELECTOR fed by the
// route's own fleet, with a live fare estimate (one-way billed both ways —
// group vehicles return to base). CSS-only transitions (INP-friendly).

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car,
  ArrowRight, Route, Navigation, ChevronLeft, MapPinned, Sparkles, Crown,
  ShieldCheck, Mountain, Plane, Info, Gauge, Snowflake, Receipt, Compass,
  ArrowLeft, Heart, Building2, Map,
} from '@/components/ui/icons';
import { formatDestinationForDisplay } from '@/utilis/tempoColors';
import { resolveDestinationImage } from '@/utilis/destinationImage';
import PriceCalculator from '@/components/seo/PriceCalculator';
import InfographicPanel from '@/components/seo/InfographicPanel';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import {
  THEME_BY_VEHICLE, getLook, resolveVariant, VariantMotif, VariantSignature,
} from '@/components/vehicleThemes';
import VehicleFleetTable from '@/components/seo/VehicleFleetTable';
import { groupDigits } from '@/utilis/pricing';

const ICONS = { Users, Snowflake, Route, Receipt, Crown, Gauge, ShieldCheck, Sparkles, Heart, Building2, Plane, Mountain, Car, Compass, Map, Navigation };
const Icon = ({ name, className }) => { const C = ICONS[name] || Car; return <C className={className} />; };

const realValue = (v) => { const s = String(v ?? '').trim(); return s && !/^(contact|on request|on-request|tbd|n\/?a|-|—)/i.test(s) ? s : null; };

export default function VehicleRouteClient({ data }) {
  const {
    vehicle: v, routeSlug, origin, destination, routeData,
    fleet, relatedRoutes = [], localSightseeing = [], faqData = [],
    otherVehicleTypes = [],
  } = data;

  const fleetList = useMemo(() => (Array.isArray(fleet) ? fleet : []), [fleet]);
  const defaultSeaterIdx = Math.max(0, fleetList.findIndex((x) => x.popular));
  const [selectedIdx, setSelectedIdx] = useState(defaultSeaterIdx >= 0 ? defaultSeaterIdx : 0);
  const [openFaq, setOpenFaq] = useState(0);
  const selected = fleetList[selectedIdx] || fleetList[0] || null;

  const displayDestination = formatDestinationForDisplay(destination);
  const distance = realValue(routeData?.distance);
  const distanceKm = distance ? parseInt(distance.replace(/[^\d]/g, ''), 10) || null : null;
  const duration = realValue(routeData?.duration);

  // One-way billed both ways (group vehicles return to base — no one-way discount).
  const estimate = selected && distanceKm ? distanceKm * 2 * selected.perKm : null;
  const lowestRate = fleetList.length ? `₹${groupDigits(Math.min(...fleetList.map((x) => x.perKm)))}/km` : `₹${groupDigits(v.lowPrice)}/km`;

  const waText = `Hi, I want to book a ${selected?.name || v.type} from ${origin} to ${displayDestination}. Please share the exact fare and availability.`;
  const attractions = Array.isArray(localSightseeing)
    ? localSightseeing.slice(0, 6).map((s) => (typeof s === 'string' ? s : s.title || s.name || s.place || '')).filter(Boolean)
    : [];

  // Theme + variant resolution — deterministic per page.
  const theme = THEME_BY_VEHICLE[v.slug] || THEME_BY_VEHICLE['force-urbania'];
  const variantKey = resolveVariant({ routeSlug, destination: displayDestination });
  const look = getLook(theme, variantKey);
  const isRoyal = look.isRoyal;
  const destImage = resolveDestinationImage(displayDestination, variantKey);

  const facts = [
    distance && { icon: Route, label: 'Distance', value: distance },
    duration && { icon: Clock, label: 'Drive time', value: duration },
    { icon: Users, label: 'Capacity', value: v.capacity },
    { icon: Star, label: 'Rating', value: '4.9★' },
    { icon: Shield, label: 'Driver', value: 'Included' },
  ].filter(Boolean);

  return (
    <div className={`min-h-screen ${look.pageBg}`}>
      <SetStickyCta price={`From ${lowestRate}`} label={`${origin} to ${displayDestination} ${v.type}`} whatsappText={waText} />

      {/* ============================== HERO ============================== */}
      <RouteHero look={look} v={v} origin={origin} dest={displayDestination} destImage={destImage}
        routeSlug={routeSlug} otherVehicleTypes={otherVehicleTypes} facts={facts} lowestRate={lowestRate} waText={waText} />

      {/* =================== SEATER SELECTOR + FARE ESTIMATE =================== */}
      <section className={`py-14 md:py-20 ${isRoyal ? 'bg-gradient-to-b from-[#FBF1DF] to-[#FFF8EC]' : 'bg-gradient-to-b from-slate-50 to-white'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 border ${look.vAccent.soft}`}>
              <Car className="w-4 h-4" />
              <span className="font-bold text-xs tracking-wider">CHOOSE YOUR SEATER</span>
            </div>
            <h2 className={`text-2xl md:text-3xl font-black mb-2 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-slate-900'}`}>
              {v.type} options for {origin} → {displayDestination}
            </h2>
            <p className={`mb-6 ${isRoyal ? 'text-amber-800/80' : 'text-slate-600'}`}>
              Tap a seater to see its estimated fare. Every vehicle is AC with {v.features.slice(0, 2).join(', ').toLowerCase()}.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {fleetList.map((x, i) => (
                <button
                  key={x.id} type="button" onClick={() => setSelectedIdx(i)}
                  className={`relative text-left p-4 rounded-2xl border-2 transition-all ${selectedIdx === i ? `${look.vAccent.ring} ${look.vAccent.soft} shadow-md` : (isRoyal ? 'border-amber-200 bg-white hover:border-amber-300' : 'border-gray-200 bg-white hover:border-slate-300')}`}
                >
                  {x.popular && <span className={`absolute -top-2 right-2 text-[10px] font-bold text-white px-2 py-0.5 rounded-full bg-gradient-to-r ${look.vAccent.grad}`}>POPULAR</span>}
                  <div className="flex items-center gap-2 mb-1">
                    <Users className={`w-4 h-4 ${isRoyal ? 'text-amber-600' : 'text-slate-700'}`} />
                    <span className={`font-black ${isRoyal ? 'text-[#4C0519]' : 'text-slate-900'}`}>{x.seats}</span>
                    <span className={`text-xs ${isRoyal ? 'text-amber-800/60' : 'text-slate-500'}`}>seater</span>
                  </div>
                  <p className={`text-sm font-bold ${isRoyal ? 'text-amber-700' : 'text-green-700'}`}>{x.outstationRate}</p>
                  <p className={`text-xs ${isRoyal ? 'text-amber-800/60' : 'text-slate-500'}`}>{x.blurb}</p>
                </button>
              ))}
            </div>

            {selected && (
              <div className={`rounded-2xl p-6 text-white shadow-xl ${isRoyal ? 'bg-[#3B0712]' : 'bg-[#0B1E3F]'}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-white/60 text-sm">Selected vehicle</p>
                    <p className={`text-xl font-black ${isRoyal ? 'font-display-serif' : ''}`}>{selected.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/60 text-sm">Outstation rate</p>
                    <p className={`text-xl font-black ${look.heroAccentText}`}>{selected.outstationRate}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-white/60">One-way distance</p>
                    <p className="font-bold">{distance || 'On request'}</p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-white/60">Billed</p>
                    <p className="font-bold">Both ways (round-trip rate)</p>
                  </div>
                </div>
                {estimate ? (
                  <div className={`mt-4 bg-gradient-to-r ${look.vAccent.grad} text-black rounded-xl p-4 flex items-center justify-between`}>
                    <div>
                      <p className="text-xs font-semibold opacity-80">Estimated round-trip fare</p>
                      <p className="text-2xl font-black">₹{estimate.toLocaleString('en-IN')}</p>
                    </div>
                    <a href={`https://wa.me/917668570551?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick(`${v.slug}_route_estimate`)}
                      className="bg-black/20 hover:bg-black/30 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                      Get exact quote <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ) : (
                  <p className="mt-4 text-white/70 text-sm">
                    Final fare depends on the exact route, season and tolls. Call <strong className="text-white">7668570551</strong> for a written quote.
                  </p>
                )}
                <p className="text-white/50 text-xs mt-3">
                  Estimate = distance × 2 × per-km rate (group vehicles return to base, so one-way is billed at the round-trip rate). Tolls, parking, state tax &amp; driver allowance extra.
                </p>
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <PriceCalculator
              distanceKm={distanceKm || 250}
              mode="one-way"
              oneWayEqualsRoundTrip
              vehicles={v.calculatorVehicles}
              tone={isRoyal ? 'gold' : 'amber'}
              originName={origin}
              destinationName={displayDestination}
            />
          </div>
        </div>
      </section>

      {/* ===================== VARIANT SIGNATURE BAND ===================== */}
      <VariantSignature look={look} payload={{ origin, destination: displayDestination, displayDestination, vehicle: v, routeData }} />

      {/* ===================== WHY THIS VEHICLE ===================== */}
      {/* ===== FARE TABLE (answer engines + AI assistants) =================
           Same reasoning as the city pages. The route pages carry a fare
           estimator already, but an estimator is interactive and a crawler
           cannot operate it — the table states every seater's rate outright. */}
      <VehicleFleetTable
        fleet={fleetList}
        vehicleType={v.type}
        placeLabel={null}
        tone="light"
        className={isRoyal ? 'bg-[#FBF1DF]' : 'bg-slate-50'}
      />

      <section className={`py-16 ${isRoyal ? 'bg-[#FFF8EC]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 border ${look.vAccent.soft}`}>
              {isRoyal ? <Crown className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5" />}
              <span className="font-bold text-sm tracking-wider">WHY THE {v.shortName.toUpperCase()}</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-black mb-4 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-gray-900'}`}>
              The right vehicle for {origin} to {displayDestination}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {v.usps.map((u, i) => (
              <div key={i} className={`rounded-3xl p-8 border-2 transition-all duration-500 h-full ${isRoyal ? 'bg-[#FFFBF2] border-amber-200 hover:border-amber-400' : 'bg-gray-50 border-gray-100 hover:border-slate-300'} hover:shadow-xl`}>
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${look.vAccent.grad} mb-6`}>
                  <Icon name={u.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-3 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-gray-900'}`}>{u.title}</h3>
                <p className={isRoyal ? 'text-amber-800/80' : 'text-gray-600'}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ATTRACTIONS ===================== */}
      {attractions.length > 0 && (
        <section className={`py-16 ${isRoyal ? 'bg-[#FBF1DF]' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-5 border ${look.vAccent.soft}`}>
                <MapPinned className="w-4 h-4" />
                <span className="font-bold text-xs tracking-wider">ALONG THE WAY</span>
              </div>
              <h2 className={`text-2xl md:text-4xl font-black mb-3 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-gray-900'}`}>What to see in {displayDestination}</h2>
              <p className={`max-w-2xl mx-auto ${isRoyal ? 'text-amber-800/70' : 'text-gray-600'}`}>Popular stops your driver can include on the {origin} to {displayDestination} trip.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {attractions.map((a, i) => (
                <span key={i} className={`rounded-full px-5 py-2.5 text-sm font-semibold shadow-sm flex items-center gap-2 ${isRoyal ? 'bg-[#FFFBF2] border border-amber-300/60 text-amber-900' : 'bg-white border border-gray-200 text-gray-700'}`}>
                  <MapPin className={`w-4 h-4 ${look.vAccent.text}`} /> {a}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== FAQ ===================== */}
      {faqData.length > 0 && (
        <section className={`py-14 md:py-20 border-t ${isRoyal ? 'bg-white border-amber-200' : 'bg-white border-gray-100'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-5 border ${look.vAccent.soft}`}>
                <Info className="w-4 h-4" />
                <span className="font-bold text-xs tracking-wider">FAQ</span>
              </div>
              <h2 className={`text-2xl md:text-4xl font-black mb-3 ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-gray-900'}`}>{origin} to {displayDestination} {v.type.toLowerCase()} — questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((f, i) => (
                <div key={i} className={`rounded-2xl border overflow-hidden ${isRoyal ? 'bg-[#FFFBF2] border-amber-300/60' : 'bg-white border-gray-200'}`}>
{/* h3 wraps the button — the WAI-ARIA accordion pattern. These FAQ questions
   were rendered as plain text, so a question-shaped heading never existed on
   the page for an answer engine to match against a question query. Tailwind
   preflight resets heading margin and font-size, so this is visually a no-op. */}
<h3 className="m-0">
                    <button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-6 py-4 transition-colors" aria-expanded={openFaq === i}>
                      <span className={`font-bold ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-gray-900'}`}>{f.question}</span>
                      <ChevronLeft className={`w-5 h-5 flex-shrink-0 transition-transform ${look.vAccent.text} ${openFaq === i ? '-rotate-90' : ''}`} />
                    </button>
</h3>
                  {openFaq === i && (
                    <div className="px-5 md:px-6 pb-5">
                      <p className={`leading-relaxed${i === 0 ? ' speakable-faq-first' : ''} ${isRoyal ? 'text-amber-900/80' : 'text-gray-600'}`}>{f.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== RELATED ROUTES + FINAL CTA ===================== */}
      <section className={`relative overflow-hidden py-16 ${isRoyal ? 'bg-gradient-to-br from-[#3B0712] via-[#7F1D1D] to-[#9F1239]' : 'bg-gradient-to-br from-[#0B1E3F] via-[#102A54] to-[#1E3A8A]'} text-white`}>
        <VariantMotif look={look} opacity={0.08} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {relatedRoutes.length > 0 && (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2.5 rounded-full mb-5 border border-white/20">
                  <Route className={`w-4 h-4 ${look.heroAccentText}`} />
                  <span className={`font-bold text-xs tracking-wider ${look.heroAccentText}`}>MORE {v.type.toUpperCase()} ROUTES</span>
                </div>
                <h2 className={`text-2xl md:text-4xl font-black mb-3 ${isRoyal ? 'font-display-serif' : ''}`}>Other {v.type.toLowerCase()} routes from {origin}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 sm:mb-16">
                {relatedRoutes.map((r, i) => {
                  const rImg = resolveDestinationImage(formatDestinationForDisplay(r.name), resolveVariant({ destination: r.name }));
                  const rDest = formatDestinationForDisplay(r.name);
                  return (
                    <Link key={i} href={`${v.hubHref}/${r.slug}`}
                      className="group flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-3 transition-all overflow-hidden">
                      <span className="flex items-center gap-3 min-w-0">
                        <span className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                          <Image src={rImg} alt={`${origin} to ${rDest}`} fill className="object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
                          <span className={`absolute inset-0 bg-gradient-to-br ${look.vAccent.grad} opacity-60 mix-blend-multiply`} />
                        </span>
                        <span className="font-bold text-white min-w-0 truncate">{origin} to {rDest}<span className="block text-xs font-medium text-white/50">{v.type} • from {lowestRate}</span></span>
                      </span>
                      <ArrowRight className={`w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform ${look.heroAccentText}`} />
                    </Link>
                  );
                })}
              </div>
            </>
          )}

          <div className="text-center">
            <h2 className={`text-3xl md:text-5xl font-black mb-4 ${isRoyal ? 'font-display-serif' : ''}`}>Book your {v.type.toLowerCase()} now</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">{origin} to {displayDestination} in an AC {v.shortName.toLowerCase()} with an experienced driver. Transparent per-km fare, no hidden charges.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917668570551" onClick={() => trackPhoneCall(`${v.slug}_route_cta`)}
                className={`px-10 py-5 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 ${isRoyal ? look.cta : 'bg-white text-[#0B1E3F]'}`}>
                <Phone className="w-6 h-6" /> Call: +91 76685 70551
              </a>
              <a href={`https://wa.me/917668570551?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(`${v.slug}_route_cta`)}
                className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {[{ icon: Shield, label: 'Safe & Secure' }, { icon: Star, label: '4.9 Rating' }, { icon: Clock, label: '24/7 Support' }].map((it, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70">
                  <it.icon className={`w-5 h-5 ${look.heroAccentText}`} /><span className="text-sm font-medium">{it.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== RICH STATS ===================== */}
      <section className={`py-14 px-4 sm:px-6 ${isRoyal ? 'bg-[#2A050D]' : 'bg-slate-950'} text-white`}>
        <div className="max-w-7xl mx-auto">
          <InfographicPanel
            title={`${v.type} ${origin}–${displayDestination} by the numbers`}
            subtitle={`Seater options on this route, per-km rates and verified rating. Pricing reflects actual driver invoices.`}
            stats={v.richStats}
            tone={isRoyal ? 'gold' : 'amber'}
          />
        </div>
      </section>
    </div>
  );
}

/* ─────────────────────────── HERO (4 layouts) ─────────────────────────── */
function RouteHero({ look, v, origin, dest, destImage, routeSlug, otherVehicleTypes, facts, lowestRate, waText }) {
  const isRoyal = look.isRoyal;
  const accent = look.heroAccentText;
  const heroBg = isRoyal
    ? 'bg-gradient-to-br from-[#3B0712] via-[#7F1D1D] to-[#9F1239]'
    : 'bg-gradient-to-br from-[#0B1E3F] via-[#102A54] to-[#1E3A8A]';

  const back = <BackLink href={v.hubHref} label={`All ${v.type} Routes`} isRoyal={isRoyal} />;
  const switcher = otherVehicleTypes.length > 0 && (
    <div className="flex flex-wrap gap-2 mb-6 mt-4">
      {otherVehicleTypes.map((o) => (
        <Link key={o.slug} href={`${o.href}/${routeSlug}`}
          className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:bg-white/20 hover:text-white transition-all">
          {o.heroLabel}
        </Link>
      ))}
    </div>
  );
  const kicker = (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border ${isRoyal ? 'bg-amber-400/10 border-amber-400/30' : 'bg-white/10 border-white/20'}`}>
      <Sparkles className={`w-4 h-4 ${accent}`} />
      <span className={`font-semibold text-sm tracking-wide ${accent}`}>{v.kicker || v.type}</span>
    </div>
  );
  const h1 = (
    <h1 className="speakable-headline text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight max-w-4xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
      {v.heroLabel} from {origin} to <span className={accent}>{dest}</span>
    </h1>
  );
  const routeLine = (
    <div className="mt-8 flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-green-400 ring-4 ring-green-400/20" /><span className="font-bold text-white">{origin}</span></div>
      <div className="flex-1 min-w-[120px] max-w-xs border-t-2 border-dashed border-white/30 relative">
        <Plane className={`w-4 h-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isRoyal ? 'bg-[#3B0712]' : 'bg-[#0B1E3F]'} ${accent}`} />
      </div>
      <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-400 ring-4 ring-red-400/20" /><span className="font-bold text-white">{dest}</span></div>
    </div>
  );
  const lead = (
    <p className="speakable-lead mt-6 text-lg text-white/80 max-w-2xl">
      Book an AC {v.type.toLowerCase()} from {origin} to {dest} with an experienced driver. {v.capacity.toLowerCase()}, transparent per-km fares from {lowestRate}, and a clean {v.shortName.toLowerCase()} fleet. Call <strong className="text-white">7668570551</strong> for an instant {origin}–{dest} quote.
    </p>
  );
  const ctas = (
    <div className="mt-8 flex flex-col sm:flex-row gap-4">
      <a href="tel:+917668570551" onClick={() => trackPhoneCall(`${v.slug}_route_hero`)}
        className={`px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform ${isRoyal ? look.cta : 'bg-white text-[#0B1E3F]'}`}>
        <Phone className="w-5 h-5" /> Call: +91 76685 70551
      </a>
      <a href={`https://wa.me/917668570551?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(`${v.slug}_route_hero`)}
        className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
        <MessageCircle className="w-5 h-5" /> WhatsApp Us
      </a>
    </div>
  );

  if (look.heroLayout === 'bleed') {
    // Hills + wildlife — full-bleed destination image, content over it, stat bar.
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={destImage} alt={`${origin} to ${dest} ${v.type} — AC with driver`} fill className="object-cover" priority fetchPriority="high" onError={(e) => { e.target.style.display = 'none'; }} />
          <div className={`absolute inset-0 ${isRoyal ? 'bg-gradient-to-t from-[#2A050D]/95 via-[#3B0712]/70 to-[#3B0712]/40' : 'bg-gradient-to-t from-[#050B18]/95 via-[#0B1E3F]/70 to-[#0B1E3F]/40'}`} />
        </div>
        <VariantMotif look={look} opacity={0.1} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-10">
          {back}{switcher}{kicker}{h1}{routeLine}{lead}
          <div className="mt-8 flex flex-wrap gap-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 p-4">
            {facts.map((f, i) => <FactTile key={i} f={f} accent={accent} />)}
          </div>
          {ctas}
        </div>
      </section>
    );
  }

  if (look.heroLayout === 'centered') {
    // Spiritual + Char Dham — centered, crest/emblem, pills, motif.
    return (
      <section className={`relative overflow-hidden ${heroBg}`}>
        <div className="absolute inset-0 opacity-15" style={isRoyal ? { filter: 'sepia(0.4) saturate(1.1)' } : undefined}>
          <Image src={destImage} alt={`${origin} to ${dest}`} fill className="object-cover" priority fetchPriority="high" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <VariantMotif look={look} opacity={0.14} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-10 sm:pb-16 text-center">
          <div className="flex justify-center mb-6">{back}</div>
          <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl flex items-center justify-center text-2xl ${isRoyal ? 'bg-amber-400/15 border border-amber-400/30' : 'bg-white/10 border border-white/20'}`}>{look.variantIcon}</div>
          {switcher && <div className="flex justify-center">{switcher}</div>}{kicker}
          {h1}{routeLine}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {facts.map((f, i) => <FactPill key={i} f={f} accent={accent} />)}
          </div>
          {lead}{ctas}
        </div>
      </section>
    );
  }

  if (look.heroLayout === 'editorial') {
    // Rajasthan — asymmetric, vertical accent rail, stat panel right, dunes motif.
    return (
      <section className={`relative overflow-hidden ${heroBg}`}>
        <VariantMotif look={look} opacity={0.12} />
        <div className="absolute inset-0 opacity-20">
          <Image src={destImage} alt={`${origin} to ${dest}`} fill className="object-cover" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-10 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7 border-l-4 pl-6" style={{ borderColor: isRoyal ? '#D4AF37' : '#38BDF8' }}>
            {back}{switcher}{kicker}{h1}{routeLine}{lead}{ctas}
          </div>
          <div className="lg:col-span-5">
            <StatPanel look={look} facts={facts} v={v} />
          </div>
        </div>
      </section>
    );
  }

  // split (default — golden + metro): content left, framed destination image + stat panel right.
  return (
    <section className={`relative overflow-hidden ${heroBg}`}>
      <VariantMotif look={look} opacity={0.1} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-28 pb-10 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          {back}{switcher}{kicker}{h1}{routeLine}{lead}{ctas}
        </div>
        <div className="lg:col-span-5">
          <div className={`relative rounded-3xl overflow-hidden border shadow-2xl ${isRoyal ? 'border-amber-400/40' : 'border-white/15'}`}>
            <div className="relative h-56">
              <Image src={destImage} alt={`${dest} — ${v.type} destination`} fill className="object-cover" priority fetchPriority="high" onError={(e) => { e.target.style.display = 'none'; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4 text-white">
                <span className="text-xs font-semibold tracking-widest uppercase opacity-80">Destination</span>
                <p className={`text-2xl font-black ${isRoyal ? 'font-display-serif' : ''}`}>{dest}</p>
              </div>
            </div>
          </div>
          <div className="mt-4"><StatPanel look={look} facts={facts} v={v} /></div>
        </div>
      </div>
    </section>
  );
}

function FactTile({ f, accent }) {
  const I = f.icon;
  return (
    <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-xl border border-white/15">
      <I className={`w-4 h-4 ${accent}`} />
      <span className="text-white/60 text-xs">{f.label}</span>
      <span className="text-white font-bold text-sm">{f.value}</span>
    </div>
  );
}
function FactPill({ f, accent }) {
  const I = f.icon;
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
      <I className={`w-4 h-4 ${accent}`} />
      <span className="text-white/60 text-xs">{f.label}</span>
      <span className="text-white font-bold text-sm">{f.value}</span>
    </div>
  );
}
function StatPanel({ look, facts, v }) {
  const isRoyal = look.isRoyal;
  return (
    <div className={`rounded-2xl border overflow-hidden shadow-xl ${isRoyal ? 'bg-[#4C0512]/60 border-amber-400/30 backdrop-blur-md' : 'bg-white/5 border-white/15 backdrop-blur-xl'}`}>
      <div className={`px-4 py-2.5 border-b flex items-center justify-between ${isRoyal ? 'border-amber-400/20 bg-amber-400/5' : 'border-white/10 bg-white/5'}`}>
        <span className={`text-[11px] font-mono tracking-widest ${look.heroAccentText}`}>TRIPSPEC · {look.variantLabel.toUpperCase()}</span>
        <span className="text-[11px] text-white/60 font-mono">{v.shortName}</span>
      </div>
      <div className="p-4 grid grid-cols-2 gap-3">
        {facts.map((f, i) => {
          const I = f.icon;
          return (
            <div key={i} className="bg-white/5 rounded-xl p-3">
              <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1 flex items-center gap-1"><I className="w-3 h-3" />{f.label}</p>
              <p className={`text-lg font-black text-white ${look.fontMono || ''}`}>{f.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BackLink({ href, label, isRoyal }) {
  return (
    <Link href={href} className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all border ${isRoyal ? 'bg-amber-400/10 border-amber-400/30 text-amber-100/90 hover:bg-amber-400/20' : 'bg-white/10 border-white/20 text-white/90 hover:bg-white/20'}`}>
      <ArrowLeft className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}