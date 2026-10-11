// src/components/guides/guideThemes.js
//
// Week 48 guide family — "three moods, one system".
//
// The twenty-five guides share one set of building blocks (GuideKit.jsx) and
// one composer (GuidePage.jsx), but they are dressed in three genuinely
// different moods so that a weekend-getaway guide, a festival guide and a
// highway guide never read as the same page with the nouns swapped:
//
//   roadtrip  — the "road-trip board": warm sand paper, deep forest-teal hero,
//               sun-gold accents, photo pins and big serif drive-time numerals.
//   festival  — the "festival night": indigo dusk hero, marigold and diya glow,
//               lantern-style photo cards with the date on a warm badge.
//   highway   — the "highway log": graphite asphalt hero, signal-yellow road
//               markings, kilometre-post timeline in monospace.
//
// Every Tailwind class is a complete literal so the JIT picks it up. Pure data,
// no React, no imports — safe anywhere.

const MOODS = {
  roadtrip: {
    key: 'roadtrip',
    name: 'Road-trip board',
    motif: 'pin',
    glyph: '◉',
    page: 'bg-[#FBF7EE] text-slate-900',
    heroBase: 'bg-[#07231F]',
    scrim: 'bg-gradient-to-t from-[#07231F] via-[#07231F]/60 to-[#07231F]/5',
    scrimSide: 'bg-gradient-to-r from-[#07231F]/90 via-[#07231F]/45 to-transparent',
    lane: 'bg-gradient-to-r from-[#0E7C7B] via-[#FACF2D] to-[#FFE9A0]',
    chip: 'border-emerald-300/40 bg-emerald-400/10 text-emerald-100',
    chipDot: 'bg-[#FACF2D]',
    heroAccent: 'text-[#FACF2D]',
    heroSub: 'text-emerald-100/85',
    crumb: 'text-emerald-100/70',
    factCard: 'border-white/10 bg-white/[0.06]',
    factLabel: 'text-emerald-200/80',
    factValue: 'text-white',
    divider: 'bg-[#07231F]',
    dividerDots: 'bg-[#FACF2D]',
    eyebrow: 'text-emerald-800',
    rule: 'bg-emerald-700/40',
    numeral: 'text-emerald-900/10',
    heading: 'text-slate-900',
    card: 'border-emerald-900/10 bg-white',
    cardHover: 'hover:border-[#FACF2D] hover:shadow-[0_26px_60px_-28px_rgba(7,35,31,0.5)]',
    cardPhotoScrim: 'bg-gradient-to-t from-[#07231F]/85 via-[#07231F]/10 to-transparent',
    pill: 'bg-[#07231F]/85 text-[#FFE9A0] ring-1 ring-white/15',
    pill2: 'bg-[#FACF2D] text-[#07231F]',
    tag: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    band: 'bg-white',
    bandAlt: 'bg-[#F3EEE1]',
    link: 'text-emerald-800 hover:text-emerald-950',
    cta: 'bg-[#FACF2D] text-[#07231F] hover:bg-amber-300 shadow-gold-bloom',
    ctaGhost: 'border-white/25 bg-white/5 text-white hover:bg-white/10',
    ctaGhostLight: 'border-[#07231F]/20 bg-white text-[#07231F] hover:bg-[#07231F]/5',
    fareBox: 'bg-[#07231F] text-white',
    fareAccent: 'text-[#FACF2D]',
    fareRow: 'border-white/10',
    fareHead: 'text-emerald-200/70',
    tipsBand: 'bg-gradient-to-r from-emerald-50 via-white to-amber-50',
    tipsBorder: 'border-emerald-200/70',
    tipsIcon: 'bg-emerald-800 text-white',
    galleryTag: 'bg-[#07231F]/85 text-[#FFE9A0]',
    faqVariant: 'card',
    ribbonRail: 'bg-emerald-800/20',
    ribbonPost: 'bg-[#07231F] text-[#FFE9A0]',
    lanternGlow: 'hover:shadow-[0_0_60px_-12px_rgba(250,207,45,0.55)]',
  },

  festival: {
    key: 'festival',
    name: 'Festival night',
    motif: 'diya',
    glyph: '✦',
    page: 'bg-[#FFF8EC] text-slate-900',
    heroBase: 'bg-[#150B2E]',
    scrim: 'bg-gradient-to-t from-[#150B2E] via-[#2A0F3F]/60 to-[#150B2E]/5',
    scrimSide: 'bg-gradient-to-r from-[#150B2E]/90 via-[#150B2E]/45 to-transparent',
    lane: 'bg-gradient-to-r from-[#7C2D12] via-[#FFB020] to-[#FFE9A0]',
    chip: 'border-orange-300/40 bg-orange-400/10 text-orange-100',
    chipDot: 'bg-[#FFB020]',
    heroAccent: 'text-[#FFB020]',
    heroSub: 'text-orange-100/85',
    crumb: 'text-orange-100/70',
    factCard: 'border-orange-200/20 bg-orange-400/[0.08]',
    factLabel: 'text-orange-200/80',
    factValue: 'text-white',
    divider: 'bg-[#150B2E]',
    dividerDots: 'bg-[#FFB020]',
    eyebrow: 'text-orange-800',
    rule: 'bg-orange-700/40',
    numeral: 'text-orange-900/10',
    heading: 'text-slate-900',
    // Light card, like the other two moods: the kilometre-post cards and the
    // related-page chips print slate text, and on the first live check the
    // festival mood's dark card swallowed it (the Jammu post on the Navratri
    // guide had no visible text). The dark, lantern-style cards keep their own
    // classes inside LanternGrid and are not affected.
    card: 'border-orange-900/10 bg-white',
    cardHover: 'hover:border-[#FFB020]/70 hover:shadow-[0_0_70px_-14px_rgba(255,176,32,0.65)]',
    cardPhotoScrim: 'bg-gradient-to-t from-[#1B0F33] via-[#1B0F33]/20 to-transparent',
    pill: 'bg-[#150B2E]/85 text-[#FFE9A0] ring-1 ring-orange-200/20',
    pill2: 'bg-[#FFB020] text-[#150B2E]',
    tag: 'border-orange-200 bg-orange-50 text-orange-900',
    band: 'bg-white',
    bandAlt: 'bg-[#FFF1D6]',
    link: 'text-orange-800 hover:text-orange-950',
    cta: 'bg-[#FFB020] text-[#150B2E] hover:bg-amber-300 shadow-[0_12px_36px_-10px_rgba(255,176,32,0.6)]',
    ctaGhost: 'border-white/25 bg-white/5 text-white hover:bg-white/10',
    ctaGhostLight: 'border-[#150B2E]/20 bg-white text-[#150B2E] hover:bg-[#150B2E]/5',
    fareBox: 'bg-[#150B2E] text-white',
    fareAccent: 'text-[#FFB020]',
    fareRow: 'border-white/10',
    fareHead: 'text-orange-200/70',
    tipsBand: 'bg-gradient-to-r from-orange-50 via-white to-rose-50',
    tipsBorder: 'border-orange-200/70',
    tipsIcon: 'bg-orange-700 text-white',
    galleryTag: 'bg-[#150B2E]/85 text-[#FFE9A0]',
    faqVariant: 'card',
    ribbonRail: 'bg-orange-800/20',
    ribbonPost: 'bg-[#150B2E] text-[#FFE9A0]',
    lanternGlow: 'hover:shadow-[0_0_70px_-14px_rgba(255,176,32,0.65)]',
  },

  highway: {
    key: 'highway',
    name: 'Highway log',
    motif: 'kmpost',
    glyph: '▮',
    page: 'bg-[#F4F5F7] text-slate-900',
    heroBase: 'bg-[#0B0F14]',
    scrim: 'bg-gradient-to-t from-[#0B0F14] via-[#0B0F14]/60 to-[#0B0F14]/5',
    scrimSide: 'bg-gradient-to-r from-[#0B0F14]/90 via-[#0B0F14]/45 to-transparent',
    lane: 'bg-[repeating-linear-gradient(90deg,#FACF2D_0_28px,transparent_28px_44px)]',
    chip: 'border-yellow-300/40 bg-yellow-400/10 text-yellow-100',
    chipDot: 'bg-[#FACF2D]',
    heroAccent: 'text-[#FACF2D]',
    heroSub: 'text-slate-300',
    crumb: 'text-slate-400',
    factCard: 'border-white/10 bg-white/[0.06]',
    factLabel: 'text-slate-400',
    factValue: 'text-white',
    divider: 'bg-[#0B0F14]',
    dividerDots: 'bg-[#FACF2D]',
    eyebrow: 'text-slate-700',
    rule: 'bg-slate-900/30',
    numeral: 'text-slate-900/10',
    heading: 'text-slate-900',
    card: 'border-slate-900/10 bg-white',
    cardHover: 'hover:border-[#FACF2D] hover:shadow-[0_26px_60px_-28px_rgba(11,15,20,0.5)]',
    cardPhotoScrim: 'bg-gradient-to-t from-[#0B0F14]/85 via-[#0B0F14]/10 to-transparent',
    pill: 'bg-[#0B0F14]/85 text-[#FACF2D] ring-1 ring-white/15 font-mono',
    pill2: 'bg-[#FACF2D] text-[#0B0F14]',
    tag: 'border-slate-300 bg-slate-100 text-slate-800',
    band: 'bg-white',
    bandAlt: 'bg-[#E9EBEF]',
    link: 'text-slate-800 hover:text-black',
    cta: 'bg-[#FACF2D] text-[#0B0F14] hover:bg-amber-300 shadow-gold-bloom',
    ctaGhost: 'border-white/25 bg-white/5 text-white hover:bg-white/10',
    ctaGhostLight: 'border-slate-900/20 bg-white text-slate-900 hover:bg-slate-900/5',
    fareBox: 'bg-[#0B0F14] text-white',
    fareAccent: 'text-[#FACF2D]',
    fareRow: 'border-white/10',
    fareHead: 'text-slate-400',
    tipsBand: 'bg-gradient-to-r from-slate-100 via-white to-amber-50',
    tipsBorder: 'border-slate-300/70',
    tipsIcon: 'bg-slate-900 text-[#FACF2D]',
    galleryTag: 'bg-[#0B0F14]/85 text-[#FACF2D] font-mono',
    faqVariant: 'card',
    ribbonRail: 'bg-[repeating-linear-gradient(180deg,#0B0F14_0_18px,#FACF2D_18px_30px)]',
    ribbonPost: 'bg-[#0B0F14] text-[#FACF2D] font-mono',
    lanternGlow: 'hover:shadow-[0_0_60px_-12px_rgba(250,207,45,0.5)]',
  },
};

export const GUIDE_MOODS = Object.keys(MOODS);

export function getGuideTheme(mood) {
  return MOODS[mood] || MOODS.roadtrip;
}

export default MOODS;
