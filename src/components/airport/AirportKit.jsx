'use client';

/* ════════════════════════════════════════════════════════════════════════
   TRIVENI AIR — Airport Design System
   A reusable "airport terminal at night" design language: split-flap
   departure boards, runway centre-lines, radar sweep, boarding-pass cards,
   flight-status pills and per-city accent theming driven by CSS variables.

   Per-city colour is applied via CSS custom properties on a wrapper:
     <AirportShell accent={getAccent(slug)}> … </AirportShell>
   Children then use Tailwind arbitrary utilities such as
   text-[var(--air-accent)] / bg-[var(--air-accent)] / from-[var(--air-accent)].
   ════════════════════════════════════════════════════════════════════════ */

import Link from 'next/link';
import Image from 'next/image';
import { Plane, MapPin, ChevronRight } from '@/components/ui/icons';

/* ── Per-city / per-page accent palettes ──────────────────────────────────
   Each entry is raw hex so it can flow into CSS variables (no Tailwind purge
   risk). `name` is the signage label. `deep` is the page base background.   */
export const AIRPORT_ACCENTS = {
  delhi:      { name: 'IGI · DEL',  accent: '#38BDF8', accent2: '#22D3EE', glow: 'rgba(56,189,248,0.45)', deep: '#050B16' },
  jaipur:     { name: 'JAI',        accent: '#FB7185', accent2: '#FBBF24', glow: 'rgba(251,113,133,0.42)', deep: '#140810' },
  chandigarh: { name: 'IXC',        accent: '#34D399', accent2: '#2DD4BF', glow: 'rgba(52,211,153,0.40)', deep: '#04130F' },
  agra:       { name: 'AGR',        accent: '#FBBF24', accent2: '#F59E0B', glow: 'rgba(251,191,36,0.42)', deep: '#140E03' },
  shimla:     { name: 'SLV',        accent: '#67E8F9', accent2: '#A5F3FC', glow: 'rgba(103,232,249,0.40)', deep: '#04131A' },
  manali:     { name: 'KUU',        accent: '#2DD4BF', accent2: '#5EEAD4', glow: 'rgba(45,212,191,0.40)', deep: '#04130F' },
  amritsar:   { name: 'ATQ',        accent: '#FCD34D', accent2: '#FB923C', glow: 'rgba(252,211,77,0.42)', deep: '#140F05' },
  dehradun:   { name: 'DED',        accent: '#4ADE80', accent2: '#34D399', glow: 'rgba(74,222,128,0.40)', deep: '#06130C' },
  haridwar:   { name: 'via DED',    accent: '#FB923C', accent2: '#FBBF24', glow: 'rgba(251,146,60,0.42)', deep: '#140B04' },
  rishikesh:  { name: 'via DED',    accent: '#22D3EE', accent2: '#38BDF8', glow: 'rgba(34,211,238,0.42)', deep: '#04121A' },
  udaipur:    { name: 'UDR',        accent: '#60A5FA', accent2: '#38BDF8', glow: 'rgba(96,165,250,0.42)', deep: '#060E1C' },
  ayodhya:    { name: 'via LKO',    accent: '#FBBF24', accent2: '#FB923C', glow: 'rgba(251,191,36,0.42)', deep: '#140E04' },
  lucknow:    { name: 'LKO',        accent: '#A78BFA', accent2: '#F472B6', glow: 'rgba(167,139,250,0.42)', deep: '#0E0918' },
  varanasi:   { name: 'VNS',        accent: '#FB923C', accent2: '#F59E0B', glow: 'rgba(251,146,60,0.42)', deep: '#140B04' },
  srinagar:   { name: 'SXR',        accent: '#5EEAD4', accent2: '#67E8F9', glow: 'rgba(94,234,212,0.42)', deep: '#04131A' },
  default:    { name: 'AIR',        accent: '#38BDF8', accent2: '#22D3EE', glow: 'rgba(56,189,248,0.45)', deep: '#050B16' },
};

// Brand-consistent gold accent (matches the homepage #FACF2D). Used site-wide
// across every airport page for text, buttons, borders and glows.
export const BRAND_GOLD = {
  name: 'AIR',
  accent: '#FACF2D',
  accent2: '#F59E0B',
  glow: 'rgba(250,207,45,0.42)',
  deep: '#0A0A0E',
};

export function getAccent() {
  return BRAND_GOLD;
}

/* ── Keyframes (injected once; identical copies are harmless) ───────────── */
export function AirportStyles() {
  return (
    <style>{`
      @keyframes air-radar{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
      @keyframes air-dash{to{stroke-dashoffset:-26}}
      @keyframes air-rise{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}
      @keyframes air-drift{0%{transform:translateX(-6%) translateY(0)}100%{transform:translateX(6%) translateY(-10px)}}
      @keyframes air-flip{0%,88%,100%{transform:rotateX(0)}90%,96%{transform:rotateX(-90deg)}}
      @keyframes air-blink{0%,100%{opacity:1}50%{opacity:.25}}
      @keyframes air-runlight{0%,100%{opacity:.2}50%{opacity:1}}
      @keyframes air-shine{0%{background-position:-180% 0}100%{background-position:180% 0}}
      @keyframes air-floatcard{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
      .air-radar{animation:air-radar 9s linear infinite;transform-origin:center}
      .air-dash{stroke-dasharray:13 13;animation:air-dash 1.1s linear infinite}
      .air-rise{animation:air-rise 7s ease-in-out infinite}
      .air-drift{animation:air-drift 18s ease-in-out infinite alternate}
      .air-flip{animation:air-flip 5s ease-in-out infinite;transform-origin:center}
      .air-blink{animation:air-blink 1.4s ease-in-out infinite}
      .air-shine{background-size:200% 100%;animation:air-shine 3.4s linear infinite}
      .air-floatcard{animation:air-floatcard 6s ease-in-out infinite}
      @media (prefers-reduced-motion: reduce){
        .air-radar,.air-dash,.air-rise,.air-drift,.air-flip,.air-blink,.air-shine,.air-floatcard{animation:none!important}
      }
    `}</style>
  );
}

/* ── Hero photo backdrop — real image under the dark airline theme ─────────
   Drop as the FIRST child of a `relative overflow-hidden` hero section, before
   <AirportBackdrop/>. Heavy gradients keep white text readable and blend the
   photo into the page's deep background colour.                              */
export function HeroPhoto({ src, priority = true }) {
  if (!src) return null;
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image src={src} alt="" fill priority={priority} sizes="100vw" className="object-cover object-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-[var(--air-deep)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--air-deep)] via-[var(--air-deep)]/70 to-[var(--air-deep)]/30" />
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}

/* ── Decorative atmosphere — drop inside any `relative` section ─────────────
   Deep night terminal: accent aurora glows, faint signage grid, radar sweep,
   runway centre-line and a drifting jet silhouette.                         */
export function AirportBackdrop({ variant = 'full', className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* aurora glows in the city accent */}
      <div className="absolute -top-1/4 right-[-5%] w-[55vw] h-[55vw] max-w-[760px] max-h-[760px] rounded-full blur-[120px] opacity-50"
           style={{ background: 'radial-gradient(circle, var(--air-glow), transparent 70%)' }} />
      <div className="absolute bottom-[-20%] left-[-10%] w-[45vw] h-[45vw] max-w-[620px] max-h-[620px] rounded-full blur-[120px] opacity-30"
           style={{ background: 'radial-gradient(circle, var(--air-accent2), transparent 72%)' }} />
      {/* signage grid */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: 'linear-gradient(var(--air-accent) 1px, transparent 1px), linear-gradient(90deg, var(--air-accent) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      {variant === 'full' && (
        <>
          {/* radar sweep */}
          <div className="absolute top-[12%] right-[8%] w-[280px] h-[280px] rounded-full border border-[color:var(--air-accent)]/10 hidden md:block">
            <div className="absolute inset-0 rounded-full air-radar"
                 style={{ background: 'conic-gradient(from 0deg, transparent 0deg, var(--air-glow) 36deg, transparent 70deg)' }} />
            <div className="absolute inset-[22%] rounded-full border border-[color:var(--air-accent)]/10" />
            <div className="absolute inset-[44%] rounded-full border border-[color:var(--air-accent)]/10" />
          </div>
          {/* drifting jet */}
          <div className="absolute top-[18%] left-[6%] air-drift opacity-[0.06]">
            <Plane className="w-40 h-40 -rotate-12" style={{ color: 'var(--air-accent)' }} />
          </div>
        </>
      )}
      {/* runway centre-line bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-24 opacity-30" preserveAspectRatio="none" viewBox="0 0 1200 96">
        <line x1="0" y1="78" x2="1200" y2="78" stroke="var(--air-accent)" strokeWidth="2" strokeOpacity="0.25" className="air-dash" />
      </svg>
    </div>
  );
}

/* ── Live flight-status pill ──────────────────────────────────────────── */
export function FlightStatusPill({ label = 'TRACKING LIVE', className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-[color:var(--air-accent)]/30 bg-[color:var(--air-accent)]/[0.08] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--air-accent)] ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[color:var(--air-accent)] air-blink" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--air-accent)]" />
      </span>
      {label}
    </span>
  );
}

/* ── Terminal / gate signage badge ────────────────────────────────────── */
export function TerminalBadge({ code, sub, accentName }) {
  return (
    <div className="inline-flex items-center gap-4 rounded-2xl border border-[color:var(--air-accent)]/20 bg-white/[0.04] px-5 py-3 backdrop-blur-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl shadow-lg"
           style={{ background: 'linear-gradient(135deg, var(--air-accent), var(--air-accent2))', boxShadow: '0 8px 24px var(--air-glow)' }}>
        <Plane className="h-5 w-5 text-black/80" />
      </div>
      <div className="border-l border-white/10 pl-4">
        <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--air-accent)]/80">{sub || 'Gate'}</div>
        <div className="font-mono text-2xl font-black leading-none text-white">{code}</div>
      </div>
      {accentName && (
        <div className="hidden border-l border-white/10 pl-4 sm:block">
          <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-[color:var(--air-accent)]/80">Code</div>
          <div className="font-mono text-sm font-bold leading-none text-white">{accentName}</div>
        </div>
      )}
    </div>
  );
}

/* ── Section kicker — airport signage style label with flanking dashes ──── */
export function SectionKicker({ children, center = false }) {
  return (
    <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, transparent, var(--air-accent))' }} />
      <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-[color:var(--air-accent)]">{children}</span>
      <span className="h-px w-8" style={{ background: 'linear-gradient(90deg, var(--air-accent), transparent)' }} />
    </div>
  );
}

/* ── Barcode strip for boarding-pass cards ────────────────────────────── */
export function Barcode({ className = '' }) {
  const bars = '2113112312132113121';
  return (
    <div className={`flex items-end gap-[2px] ${className}`} aria-hidden="true">
      {bars.split('').map((w, i) => (
        <span key={i} className="block h-6 bg-white/35" style={{ width: `${Number(w)}px` }} />
      ))}
    </div>
  );
}

/* ── Split-flap board row (departure board aesthetic) ─────────────────── */
export function BoardRow({ cols, head = false, accentLast = false }) {
  return (
    <div className={`grid items-center gap-3 px-4 py-3.5 sm:px-6 ${head
      ? 'border-b border-[color:var(--air-accent)]/15 bg-[color:var(--air-accent)]/[0.08]'
      : 'border-b border-white/[0.04] transition-colors hover:bg-[color:var(--air-accent)]/[0.04]'}`}
      style={{ gridTemplateColumns: cols.map((c) => c.w || '1fr').join(' ') }}>
      {cols.map((c, i) => (
        <span key={i} className={[
          head ? 'text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--air-accent)]' : '',
          !head && c.mono ? 'font-mono' : '',
          !head && i === cols.length - 1 && accentLast ? 'font-mono font-bold text-[color:var(--air-accent)]' : '',
          !head && !(i === cols.length - 1 && accentLast) ? 'text-slate-200' : '',
          c.dim ? 'text-slate-400' : '',
          c.right ? 'text-right' : '',
          'text-sm',
        ].join(' ')}>{c.v}</span>
      ))}
    </div>
  );
}

/* ── Great-circle route arc (hero decorative SVG) ─────────────────────── */
export function RouteArc({ from = 'AIR', to = 'CITY', className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 320 120" className="w-full">
        <defs>
          <linearGradient id="air-arc" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--air-accent)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="var(--air-accent)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--air-accent2)" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M30 95 Q160 -15 290 95" fill="none" stroke="url(#air-arc)" strokeWidth="2" strokeDasharray="5 6" className="air-dash" />
        <circle cx="30" cy="95" r="5" fill="var(--air-accent)" />
        <circle cx="290" cy="95" r="5" fill="var(--air-accent2)" />
        <g transform="translate(160 28)">
          <circle r="13" fill="var(--air-accent)" fillOpacity="0.12" />
          <g transform="translate(-7 -7)" style={{ color: 'var(--air-accent)' }}>
            <Plane className="h-3.5 w-3.5" />
          </g>
        </g>
      </svg>
      <div className="-mt-2 flex justify-between px-5 font-mono text-xs font-bold tracking-widest">
        <span className="text-[color:var(--air-accent)]">{from}</span>
        <span className="text-[color:var(--air-accent2)]">{to}</span>
      </div>
    </div>
  );
}

/* ── Page shell — sets the per-city CSS variables + base background ─────── */
export function AirportShell({ accent, children, className = '' }) {
  return (
    <div
      className={`relative min-h-screen text-white ${className}`}
      style={{
        '--air-accent': accent.accent,
        '--air-accent2': accent.accent2,
        '--air-glow': accent.glow,
        '--air-deep': accent.deep,
        backgroundColor: accent.deep,
      }}
    >
      <AirportStyles />
      {children}
    </div>
  );
}

/* ── Breadcrumb in airport signage style ──────────────────────────────── */
export function AirportCrumb({ trail }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 w-full">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs tracking-wide text-slate-300">
        {trail.map((t, i) => (
          <li key={i} className="flex min-w-0 items-center gap-2">
            {t.href ? (
              <Link href={t.href} className="whitespace-nowrap text-slate-400 transition-colors hover:text-[color:var(--air-accent)]">{t.label}</Link>
            ) : (
              <span className="break-words font-bold text-[color:var(--air-accent)]">{t.label}</span>
            )}
            {i < trail.length - 1 && <ChevronRight className="h-3 w-3 shrink-0 text-slate-500" />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
