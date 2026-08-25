// src/components/vehicleThemes.js
// Distinct, elevated visual identities per vehicle type — the "wow" layer.
// Two genuinely different design systems (not a recolored shared template):
//
//   • EXECUTIVE  (Force Urbania) — cool navy + platinum, blueprint-grid hero,
//     boarding-pass "spec sheet" cards, monospace figures, squared geometry,
//     minimal whitespace, business-class restraint.
//
//   • ROYAL      (Maharaja Tempo)  — burgundy + gold-foil, Fraunces serif
//     display, ornamental dividers, crest monograms, damask texture,
//     candlelight embers, opulent wedding-grade warmth.
//
// Both differ from the existing amber/dark Tempo "Aurora" look. Shared atoms
// below render per-theme output so the city + route clients compose them
// without per-page rewrites, while each theme stays visually unique.

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useShouldReduceMotion } from '@/hooks/useIsMobile';

// ───────────────────────────── THEME TOKENS ─────────────────────────────
export const URBANIA_THEME = {
  key: 'urbania',
  name: 'Executive',
  pageBg: 'bg-[#F6F8FC]',
  sectionAlt: 'bg-slate-50',
  sectionDark: 'bg-[#0B1E3F]',
  heroGradient: 'from-[#0B1E3F] via-[#102A54] to-[#1E3A8A]',
  cardBorder: 'border-slate-200',
  cardBg: 'bg-white',
  accentText: 'text-cyan-400',
  accentBg: 'bg-cyan-500',
  primaryText: 'text-[#0B1E3F]',
  mutedText: 'text-slate-500',
  goldText: 'text-cyan-300',
  rule: 'border-slate-300',
  eyebrow: 'text-cyan-700',
  eyebrowBg: 'bg-cyan-50 border-cyan-200',
  cta: 'bg-[#0B1E3F] hover:bg-[#1E3A8A] text-white',
  ctaGold: 'bg-cyan-500 text-white',
  fontSerif: '',
  fontMono: 'font-mono tabular-nums',
  corner: 'rounded-xl',
  shadow: 'shadow-slate-200/60',
  numberPrefix: '01',
};

export const MAHARAJA_THEME = {
  key: 'maharaja',
  name: 'Royal',
  pageBg: 'bg-[#FFF8EC]',
  sectionAlt: 'bg-[#FBF1DF]',
  sectionDark: 'bg-[#3B0712]',
  heroGradient: 'from-[#3B0712] via-[#7F1D1D] to-[#9F1239]',
  cardBorder: 'border-amber-300/70',
  cardBg: 'bg-[#FFFBF2]',
  accentText: 'text-amber-600',
  accentBg: 'bg-amber-500',
  primaryText: 'text-[#4C0519]',
  mutedText: 'text-amber-800/70',
  goldText: 'text-gold-foil',
  rule: 'border-amber-400/40',
  eyebrow: 'text-amber-700',
  eyebrowBg: 'bg-amber-100/70 border-amber-300',
  cta: 'bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-600 text-[#3B0712] shadow-gold-bloom',
  ctaGold: 'bg-gradient-to-r from-amber-400 to-yellow-600 text-[#3B0712]',
  fontSerif: 'font-display-serif',
  fontMono: '',
  corner: 'rounded-2xl',
  shadow: 'shadow-amber-900/10',
  numberPrefix: '',
};

export const THEME_BY_VEHICLE = {
  'force-urbania': URBANIA_THEME,
  'maharaja-tempo-traveller': MAHARAJA_THEME,
};

// ───────────────────────────── SHARED ATOMS ─────────────────────────────

// Urbania: blueprint engineering grid. Maharaja: not used.
export function BlueprintGrid({ className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        maskImage: 'radial-gradient(ellipse at 60% 40%, black 40%, transparent 85%)',
        WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 40%, transparent 85%)',
      }}
    />
  );
}

// Maharaja: subtle damask texture + gold ornamental frame.
export function RoyalFrame({ className = '' }) {
  return (
    <>
      <div className={`absolute inset-0 pointer-events-none opacity-[0.07] ${className}`} aria-hidden="true"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg%3E%3Cg fill=\'none\' stroke=\'%23D4AF37\' stroke-width=\'1\'%3E%3Cpath d=\'M40 8l24 16-24 16-24-16z\'/%3E%3Cpath d=\'M40 28l16 12-16 12-16-12z\'/%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute inset-3 sm:inset-5 pointer-events-none ring-hairline-gold rounded-3xl" aria-hidden="true" />
    </>
  );
}

// Maharaja: floating gold embers (candlelight). Urbania: none.
export function Embers({ count = 14 }) {
  const reduce = useShouldReduceMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (reduce || !mounted) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ y: '110%', x: `${(i * 7.3) % 100}%`, opacity: 0 }}
          animate={{ y: '-12%', opacity: [0, 0.8, 0] }}
          transition={{ duration: (i % 5) + 7, repeat: Infinity, delay: (i % 4), ease: 'linear' }}
          className="absolute w-1 h-1 rounded-full bg-amber-300"
          style={{ boxShadow: '0 0 8px 1px rgba(250,207,45,0.7)' }}
        />
      ))}
    </div>
  );
}

// Maharaja crest monogram badge.
export function Crest({ letter = 'M', className = '' }) {
  return (
    <div className={`inline-flex items-center justify-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 48 48" className="w-full h-full">
        <path d="M24 2l5 4 6-1 1 6 4 5-4 5-1 6-6-1-5 4-5-4-6 1-1-6-4-5 4-5 1-6 6 1z"
          fill="none" stroke="url(#g)" strokeWidth="1.4" opacity="0.9" />
        <text x="24" y="29" textAnchor="middle" fontFamily="Georgia, serif"
          fontSize="16" fontWeight="700" fill="url(#g)">{letter}</text>
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffe9a0" /><stop offset="0.5" stopColor="#facf2d" /><stop offset="1" stopColor="#b8860b" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

// Section eyebrow / label — themed.
export function SectionLabel({ theme, icon: Icon, children }) {
  if (theme.key === 'urbania') {
    return (
      <div className="inline-flex items-center gap-2.5 mb-5">
        <span className="h-px w-8 bg-cyan-500/70" />
        {Icon && <Icon className="w-4 h-4 text-cyan-600" />}
        <span className="text-cyan-800 font-semibold text-xs tracking-[0.22em] uppercase">{children}</span>
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-2.5 mb-5">
      <span className="text-amber-500">✦</span>
      {Icon && <Icon className="w-4 h-4 text-amber-600" />}
      <span className="text-amber-800 font-semibold text-xs tracking-[0.22em] uppercase">{children}</span>
      <span className="text-amber-500">✦</span>
    </div>
  );
}

// Ornamental divider — Royal uses gold flourish; Executive uses hairline rule.
export function ThemedDivider({ theme }) {
  if (theme.key === 'urbania') return <div className="h-px w-full bg-slate-200" />;
  return (
    <div className="flex items-center justify-center gap-3 text-amber-500/70">
      <span className="h-px flex-1 bg-amber-300/50" />
      <span className="text-sm">✦</span>
      <span className="h-px flex-1 bg-amber-300/50" />
    </div>
  );
}

// Themed heading — Royal uses Fraunces serif + gold-foil accent; Executive sans.
export function ThemedHeading({ theme, children, className = '', serif = true }) {
  const base = 'text-3xl md:text-5xl font-black tracking-tight';
  if (theme.key === 'maharaja' && serif) {
    return <h2 className={`${base} font-display-serif text-[#4C0519] ${className}`}>{children}</h2>;
  }
  return <h2 className={`${base} text-[#0B1E3F] ${className}`}>{children}</h2>;
}

// Accent word inside a heading — gold-foil for Royal, cyan for Executive.
export function Accent({ theme, children }) {
  if (theme.key === 'maharaja') return <span className="text-gold-foil">{children}</span>;
  return <span className="text-cyan-600">{children}</span>;
}

// Themed fleet / spec card wrapper.
export function ThemedCard({ theme, index, children, className = '' }) {
  if (theme.key === 'urbania') {
    return (
      <div className={`relative bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden ${className}`}>
        <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-slate-300">{String(index + 1).padStart(2, '0')}</div>
        {children}
      </div>
    );
  }
  return (
    <div className={`relative bg-[#FFFBF2] rounded-2xl border border-amber-300/70 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden ring-hairline-gold ${className}`}>
      <div className="absolute top-3 right-3"><Crest letter={String(index + 1)} className="w-6 h-6 opacity-60" /></div>
      {children}
    </div>
  );
}

// Themed "spec row" for the direct-answer fare table region.
export function ThemedSpecTable({ theme, rows, caption }) {
  if (theme.key === 'urbania') {
    return (
      <div className="mt-6 rounded-xl border border-slate-200 overflow-hidden bg-white">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead className="bg-[#0B1E3F] text-white">
            <tr>{['Vehicle', 'Seating', 'Outstation', 'Best for'].map((h) => <th key={h} className="px-4 py-3 font-semibold tracking-wide">{h}</th>)}</tr>
          </thead>
          <tbody className="text-slate-700">
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? 'bg-slate-50' : 'bg-white'}>
                <td className="px-4 py-3 font-bold text-[#0B1E3F]">{r.v}</td>
                <td className="px-4 py-3 font-mono">{r.s}</td>
                <td className="px-4 py-3 font-mono font-bold text-cyan-700">{r.r}</td>
                <td className="px-4 py-3 text-slate-500">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div className="mt-6 rounded-2xl border border-amber-300/70 overflow-hidden bg-[#FFFBF2]">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-[#4C0519] text-amber-100">
          <tr>{['Vehicle', 'Seating', 'Outstation', 'Best for'].map((h) => <th key={h} className="px-4 py-3 font-display-serif font-semibold">{h}</th>)}</tr>
        </thead>
        <tbody className="text-[#4C0519]">
          {rows.map((r, i) => (
            <tr key={i} className={i % 2 ? 'bg-[#FBF1DF]' : 'bg-[#FFFBF2]'}>
              <td className="px-4 py-3 font-bold font-display-serif">{r.v}</td>
              <td className="px-4 py-3">{r.s}</td>
              <td className="px-4 py-3 font-bold text-amber-700">{r.r}</td>
              <td className="px-4 py-3 text-amber-800/70">{r.b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════════════
   VARIANT SYSTEM — 7 destination-type variants × 2 brand families = 14
   genuinely distinct looks. Same brand DNA, different hero layout, motif,
   accent and a signature content band per destination type. Deterministic:
   a given page always resolves to the same variant (keyed off slug/name).

   Used by VehicleCityClient + VehicleRouteClient so the 546 new pages do NOT
   all render the identical template — a hill-station page reads differently
   from a Rajasthan, spiritual, Char Dham, wildlife, Golden Triangle or metro
   page, within each vehicle's brand palette.
   ═════════════════════════════════════════════════════════════════════════ */

export const VARIANTS = {
  hills:     { key: 'hills',     label: 'Hill Station',            icon: '🏔️', heroLayout: 'bleed',     statStyle: 'bar',   motif: 'contours', signature: 'altitude' },
  spiritual: { key: 'spiritual', label: 'Spiritual & Pilgrimage',  icon: '🛕', heroLayout: 'centered',  statStyle: 'pills', motif: 'aarti',    signature: 'ritual' },
  rajasthan: { key: 'rajasthan', label: 'Rajasthan Heritage',      icon: '🏰', heroLayout: 'editorial', statStyle: 'panel', motif: 'dunes',    signature: 'circuit' },
  golden:    { key: 'golden',    label: 'Golden Triangle',         icon: '🔺', heroLayout: 'split',     statStyle: 'panel', motif: 'triangle', signature: 'itinerary' },
  chardham:  { key: 'chardham',  label: 'Char Dham Yatra',         icon: '🕉️', heroLayout: 'centered',  statStyle: 'pills', motif: 'mandala',  signature: 'yatra' },
  wildlife:  { key: 'wildlife',  label: 'Wildlife & Safari',       icon: '🦁', heroLayout: 'bleed',     statStyle: 'bar',   motif: 'paw',      signature: 'safari' },
  metro:     { key: 'metro',     label: 'City & Outstation',       icon: '🏙️', heroLayout: 'split',     statStyle: 'panel', motif: 'grid',     signature: 'corporate' },
};

// Per-variant accent (within each brand family). vAccent.soft = light chip;
// .text/.bg/.ring/.grad = dark-hero + solid accents.
const URBANIA_VARIANT_ACCENT = {
  hills:     { text: 'text-emerald-300', bg: 'bg-emerald-500', soft: 'bg-emerald-50 text-emerald-700', ring: 'ring-emerald-400/40', grad: 'from-emerald-500 to-teal-600', dot: 'bg-emerald-400' },
  spiritual: { text: 'text-amber-300',   bg: 'bg-amber-500',   soft: 'bg-amber-50 text-amber-700',     ring: 'ring-amber-400/40',   grad: 'from-amber-400 to-orange-500',  dot: 'bg-amber-400' },
  rajasthan: { text: 'text-orange-300',  bg: 'bg-orange-500',  soft: 'bg-orange-50 text-orange-700',   ring: 'ring-orange-400/40',  grad: 'from-orange-500 to-red-600',    dot: 'bg-orange-400' },
  golden:    { text: 'text-yellow-300',  bg: 'bg-yellow-500',  soft: 'bg-yellow-50 text-yellow-700',   ring: 'ring-yellow-400/40',  grad: 'from-yellow-400 to-amber-600',  dot: 'bg-yellow-400' },
  chardham:  { text: 'text-violet-300',  bg: 'bg-violet-500',  soft: 'bg-violet-50 text-violet-700',   ring: 'ring-violet-400/40',  grad: 'from-violet-500 to-indigo-600', dot: 'bg-violet-400' },
  wildlife:  { text: 'text-lime-300',    bg: 'bg-lime-600',    soft: 'bg-lime-50 text-lime-700',       ring: 'ring-lime-500/40',    grad: 'from-lime-600 to-emerald-700',  dot: 'bg-lime-400' },
  metro:     { text: 'text-cyan-300',    bg: 'bg-cyan-500',    soft: 'bg-cyan-50 text-cyan-700',       ring: 'ring-cyan-400/40',    grad: 'from-cyan-500 to-blue-600',     dot: 'bg-cyan-400' },
};
const MAHARAJA_VARIANT_ACCENT = {
  hills:     { text: 'text-teal-300',    bg: 'bg-teal-500',    soft: 'bg-teal-50 text-teal-800',       ring: 'ring-teal-400/40',    grad: 'from-teal-400 to-emerald-600',  dot: 'bg-teal-300' },
  spiritual: { text: 'text-amber-300',   bg: 'bg-amber-500',   soft: 'bg-amber-100 text-amber-800',    ring: 'ring-amber-400/40',   grad: 'from-amber-400 to-orange-600',  dot: 'bg-amber-300' },
  rajasthan: { text: 'text-orange-300',  bg: 'bg-orange-600',  soft: 'bg-orange-100 text-orange-800',  ring: 'ring-orange-400/40',  grad: 'from-orange-500 to-red-700',    dot: 'bg-orange-300' },
  golden:    { text: 'text-gold-foil',   bg: 'bg-amber-500',   soft: 'bg-amber-100 text-amber-800',    ring: 'ring-amber-400/40',   grad: 'from-amber-300 to-yellow-600',  dot: 'bg-amber-300' },
  chardham:  { text: 'text-rose-300',    bg: 'bg-rose-500',    soft: 'bg-rose-100 text-rose-800',      ring: 'ring-rose-400/40',    grad: 'from-rose-400 to-pink-600',     dot: 'bg-rose-300' },
  wildlife:  { text: 'text-emerald-300', bg: 'bg-emerald-600', soft: 'bg-emerald-100 text-emerald-800',ring: 'ring-emerald-400/40', grad: 'from-emerald-500 to-teal-700',  dot: 'bg-emerald-300' },
  metro:     { text: 'text-gold-foil',   bg: 'bg-amber-500',   soft: 'bg-amber-100 text-amber-800',    ring: 'ring-amber-400/40',   grad: 'from-amber-300 to-yellow-600',  dot: 'bg-amber-300' },
};

// Resolve a page → destination-type variant from its slug/name. Priority
// ordered so composite routes (e.g. "haridwar-rishikesh-dehradun-mussoorie")
// land on a sensible single variant. Pure + deterministic.
export function resolveVariant({ isCity, citySlug, cityName, routeSlug, destination } = {}) {
  const t = `${routeSlug || ''} ${destination || ''} ${cityName || ''} ${citySlug || ''}`.toLowerCase();
  if (/chardham|char-dham|kedarnath|badrinath|gangotri|yamunotri|yatra|vaishno|katra|devi|do-dham/.test(t)) return 'chardham';
  if (/corbett|ranthambore|safari|tiger|wildlife|national-park/.test(t)) return 'wildlife';
  if (/golden|triangle|delhi-agra|agra-jaipur|fatehpur/.test(t)) return 'golden';
  if (/shimla|manali|mussoorie|nainital|dalhousie|dharamshala|kullu|kasol|spiti|leh|ladakh|auli|chopta|tungnath|kashmir|kufri|kheerganga|tirthan|jibhi|narkanda|kanatal|dhanaulti|chamba|ranikhet|kausani|mukteshwar|almora|bhimtal|sattal|naukuchiatal/.test(t)) return 'hills';
  if (/jaisalmer|jodhpur|udaipur|bikaner|pushkar|ajmer|jaipur|rajasthan|desert|sam-dunes|khuri|tanot|longewala|chittorgarh|mount-abu|ambaji|palanpur/.test(t)) return 'rajasthan';
  if (/varanasi|ayodhya|mathura|vrindavan|haridwar|rishikesh|prayagraj|gaya|chitrakoot|naimish|temple|pilgrimage|ghat|sarnath|gokul|govardhan|barsana|nandgaon/.test(t)) return 'spiritual';
  return 'metro';
}

// Merge a brand theme + a variant into one "look" token object the clients
// consume. Keeps brand palette, layers variant layout/motif/accent/signature.
export function getLook(theme, variantKey) {
  const variant = VARIANTS[variantKey] || VARIANTS.metro;
  const accentMap = theme.key === 'maharaja' ? MAHARAJA_VARIANT_ACCENT : URBANIA_VARIANT_ACCENT;
  const vAccent = accentMap[variant.key] || accentMap.metro;
  return {
    ...theme,
    brand: theme.key,
    isRoyal: theme.key === 'maharaja',
    variant: variant.key,
    variantLabel: variant.label,
    variantIcon: variant.icon,
    heroLayout: variant.heroLayout,
    statStyle: variant.statStyle,
    motif: variant.motif,
    signature: variant.signature,
    vAccent,
    motifColor: theme.key === 'maharaja' ? '#D4AF37' : '#38BDF8',
    heroAccentText: vAccent.text,
  };
}

/* ─────────────────────────── MOTIFS ───────────────────────────
   One decorative background layer per variant, brand-tinted, low opacity.
   Shape (not color) is what differentiates variants — stays on-brand. */

export function VariantMotif({ look, className = '', opacity = 0.12 }) {
  const c = look.motifColor;
  const wrap = `absolute inset-0 pointer-events-none ${className}`;
  switch (look.motif) {
    case 'contours':
      return (
        <svg className={wrap} style={{ opacity }} aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {[120, 175, 230, 285, 340, 395, 450].map((cy, i) => (
            <path key={i} d={`M0 ${cy} C 200 ${cy - 36 - i * 4}, 420 ${cy + 30 + i * 3}, 640 ${cy - 20} S 980 ${cy + 26}, 1200 ${cy - 12}`}
              fill="none" stroke={c} strokeWidth={1.4} />
          ))}
        </svg>
      );
    case 'aarti':
      return (
        <svg className={wrap} style={{ opacity }} aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 9 }).map((_, i) => {
            const x = 80 + i * 130;
            return (
              <g key={i} stroke={c} fill="none" strokeWidth={1.3}>
                <path d={`M${x} 540 q -14 -34 0 -60 q 14 26 0 60 z`} />
                <circle cx={x} cy={455} r={6} />
                <circle cx={x} cy={430} r={3} fill={c} stroke="none" />
              </g>
            );
          })}
        </svg>
      );
    case 'dunes':
      return (
        <svg className={wrap} style={{ opacity }} aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="none">
          {[420, 470, 520, 570].map((cy, i) => (
            <path key={i} d={`M0 ${cy} C 260 ${cy - 70 + i * 10}, 560 ${cy + 40 - i * 8}, 820 ${cy - 50 + i * 6} S 1180 ${cy + 30}, 1200 ${cy - 20} L1200 600 L0 600 Z`}
              fill={c} stroke="none" opacity={0.18 + i * 0.05} />
          ))}
        </svg>
      );
    case 'triangle':
      return (
        <svg className={wrap} style={{ opacity }} aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
          <polygon points="600,90 980,520 220,520" fill="none" stroke={c} strokeWidth={1.6} />
          <polygon points="600,200 860,470 340,470" fill="none" stroke={c} strokeWidth={1.1} opacity={0.6} />
          {[[600, 90], [980, 520], [220, 520]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={7} fill={c} stroke="none" />)}
        </svg>
      );
    case 'mandala':
      return (
        <svg className={wrap} style={{ opacity }} aria-hidden="true" viewBox="0 0 600 600" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(300 300)" stroke={c} fill="none" strokeWidth={1.2}>
            <circle r={210} />
            <circle r={150} opacity={0.6} />
            <circle r={90} opacity={0.4} />
            {Array.from({ length: 16 }).map((_, i) => (
              <ellipse key={i} cx={0} cy={-180} rx={26} ry={70} transform={`rotate(${i * 22.5})`} />
            ))}
          </g>
        </svg>
      );
    case 'paw':
      return (
        <svg className={wrap} style={{ opacity }} aria-hidden="true" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {[[160, 180], [520, 360], [880, 150], [1040, 420], [300, 480]].map(([x, y], i) => (
            <g key={i} fill={c} stroke="none">
              <ellipse cx={x} cy={y} rx={20} ry={16} />
              <circle cx={x - 22} cy={y - 18} r={6} /><circle cx={x - 6} cy={y - 28} r={6} />
              <circle cx={x + 10} cy={y - 28} r={6} /><circle cx={x + 26} cy={y - 18} r={6} />
            </g>
          ))}
        </svg>
      );
    case 'grid':
    default:
      return (
        <div className={wrap} aria-hidden="true" style={{
          opacity,
          backgroundImage:
            'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          color: c,
          maskImage: 'radial-gradient(ellipse at 60% 40%, black 40%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 60% 40%, black 40%, transparent 85%)',
        }} />
      );
  }
}

/* ─────────────────────────── SIGNATURE BANDS ───────────────────────────
   A distinct content section per destination type — the structural
   differentiator that makes a hills page read differently from a wildlife or
   Char Dham page. Compact, templated from the page payload (no extra data). */

function SigShell({ look, title, children, note }) {
  const isRoyal = look.isRoyal;
  return (
    <section className={`py-12 md:py-16 ${look.sectionAlt} border-y ${isRoyal ? 'border-amber-200/60' : 'border-slate-100'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-7">
          <span className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl text-xl bg-gradient-to-br ${look.vAccent.grad} text-white shadow-sm`}>{look.variantIcon}</span>
          <div>
            <span className={`block text-xs font-semibold tracking-[0.2em] uppercase ${look.vAccent.text}`}>{look.variantLabel}</span>
            <h2 className={`text-xl md:text-2xl font-black ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{title}</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{children}</div>
        {note && <p className={`mt-6 text-sm ${isRoyal ? 'text-amber-800/70' : 'text-slate-500'}`}>{note}</p>}
      </div>
    </section>
  );
}

function SigTile({ look, k, v, sub }) {
  const isRoyal = look.isRoyal;
  return (
    <div className={`rounded-2xl border p-5 ${isRoyal ? 'bg-[#FFFBF2] border-amber-300/60' : 'bg-white border-slate-200'} shadow-sm`}>
      <p className={`text-[11px] font-semibold tracking-widest uppercase ${look.vAccent.text}`}>{k}</p>
      <p className={`mt-1 text-lg font-black ${isRoyal ? 'font-display-serif text-[#4C0519]' : 'text-[#0B1E3F]'}`}>{v}</p>
      {sub && <p className={`text-xs mt-0.5 ${isRoyal ? 'text-amber-800/60' : 'text-slate-500'}`}>{sub}</p>}
    </div>
  );
}

export function VariantSignature({ look, payload = {} }) {
  const { origin = '', destination = '', displayDestination, vehicle: v, routeData = {} } = payload;
  const dest = displayDestination || destination || 'your destination';
  const vname = v?.shortName || v?.type || 'your vehicle';
  const season = routeData.bestSeason || (look.variant === 'hills' ? 'Mar–Jun & Oct–Nov' : 'Oct–Mar');
  // On city pages origin === dest; show a single place instead of "Manali → Manali".
  const route = origin && origin !== dest ? `${origin} → ${dest}` : dest;
  switch (look.signature) {
    case 'altitude':
      return (
        <SigShell look={look} title={`Mountain-ready: ${route}`} note={`Hill routes include ghat driving, possible snow in winter, and early sunsets — we assign experienced hill drivers and keep {vname}s in low gear on climbs. Night driving on ghats is avoided by default.`.replace('{vname}', vname)}>
          <SigTile look={look} k="Best season" v={season} />
          <SigTile look={look} k="Road" v="Ghats & curves" sub="experienced hill driver" />
          <SigTile look={look} k="Vehicle" v={v?.capacity || 'AC group'} sub="first-gear climbs, AC retained" />
          <SigTile look={look} k="Stopovers" v="Scenic halts" sub="tea breaks + viewpoints" />
        </SigShell>
      );
    case 'ritual':
      return (
        <SigShell look={look} title={`Pilgrimage essentials: ${dest}`} note={`Same-day or overnight darshan plans available. Our driver doubles as a local route guide for temple hopovers and aarti timings along the way.`}>
          <SigTile look={look} k="Darshan" v="Early morning" sub="aarti / VIP darshan on request" />
          <SigTile look={look} k="Dress code" v="Modest, traditional" sub="shoulders & knees covered" />
          <SigTile look={look} k="Temple hop" v="Multiple shrines" sub="one booking, several stops" />
          <SigTile look={look} k="Guide" v="Pandit / guide" sub="arranged on request" />
        </SigShell>
      );
    case 'circuit':
      return (
        <SigShell look={look} title={`Fort & palace circuit — ${dest}`} note={`Rajasthan circuits pair well over 4–7 days: forts by day, palace hotels and desert camps by night. Ask for a custom circuit covering en-route forts and dunes.`}>
          <SigTile look={look} k="Highlights" v="Forts + palaces" sub="Mehrangarh / City Palace style" />
          <SigTile look={look} k="Desert camp" v="Sam / Khuri dunes" sub="on Jaisalmer routes" />
          <SigTile look={look} k="Sunset" v="Dunes / lake" sub="golden-hour photo halt" />
          <SigTile look={look} k="Pace" v="4–7 day circuit" sub="multi-city, one vehicle" />
        </SigShell>
      );
    case 'itinerary':
      return (
        <SigShell look={look} title="Golden Triangle — 3-day plan" note={`The classic Delhi → Agra → Jaipur loop in one {vname}: Taj at sunrise, Fatehpur Sikri en route, and Jaipur forts before the return. Adjustable to add Mathura/Vrindavan.`.replace('{vname}', vname)}>
          <SigTile look={look} k="Day 1" v="Delhi → Agra" sub="Taj Mahal at sunset" />
          <SigTile look={look} k="Day 2" v="Agra → Fatehpur" sub="Fatehpur Sikri + Jaipur" />
          <SigTile look={look} k="Day 3" v="Jaipur forts" sub="Amber + Hawa Mahal" />
          <SigTile look={look} k="Return" v="Jaipur → Delhi" sub="same vehicle throughout" />
        </SigShell>
      );
    case 'yatra':
      return (
        <SigShell look={look} title="Char Dham yatra planner" note={`Standard sequence Yamunotri → Gangotri → Kedarnath → Badrinath. We handle the road legs, base-stay transfers and acclimatisation halts; trek/palanquin is arranged separately.`}>
          <SigTile look={look} k="Sequence" v="Yamunotri → Badrinath" sub="4-dham clockwise" />
          <SigTile look={look} k="Season" v="May–Jun / Sep–Oct" sub="shrine opening window" />
          <SigTile look={look} k="Registration" v="Mandatory" sub="e-pass via UDHD portal" />
          <SigTile look={look} k="Medical" v="Fitness check" sub="altitude + trek prep" />
        </SigShell>
      );
    case 'safari':
      return (
        <SigShell look={look} title={`Safari planner — ${dest}`} note={`Permits sell out fast in peak season — book the safari zone 30+ days ahead and we will align the vehicle pickup to your slot. Gypsy (6-seater) or Canter options.`}>
          <SigTile look={look} k="Timings" v="Dawn & dusk" sub="two safaris per day" />
          <SigTile look={look} k="Permit" v="Book 30+ days early" sub="zone-specific" />
          <SigTile look={look} k="Vehicle" v="Park gypsy / canter" sub={`your ${vname} to the gate`} />
          <SigTile look={look} k="Naturalist" v="On request" sub="wildlife guide at gate" />
        </SigShell>
      );
    case 'corporate':
    default:
      return (
        <SigShell look={look} title={`City, airport & corporate — ${origin || dest}`} note={`Same fleet handles airport/station pickups, 4hr/40km local hire and outstation drops. Monthly corporate shuttles and employee pick-drop contracts available.`}>
          <SigTile look={look} k="Airport" v="Pickup + drop" sub="flight tracking included" />
          <SigTile look={look} k="Station" v="Railway transfer" sub="all junctions covered" />
          <SigTile look={look} k="Hourly" v="4hr / 40km" sub="local city hire" />
          <SigTile look={look} k="Corporate" v="Monthly shuttle" sub="employee pick-drop" />
        </SigShell>
      );
  }
}