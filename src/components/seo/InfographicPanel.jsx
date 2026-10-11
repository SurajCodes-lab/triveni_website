// Server component. The 'use client' directive was removed because this file
// has no state, effects, event handlers or browser APIs — it was being
// serialised into the hydration payload and re-executed in the browser for
// no reason. Re-add the directive if interactivity is introduced here.
/**
 * InfographicPanel — dark-cinematic stat grid with optional sparklines.
 *
 * Renders a row of AnimatedStatCounters in a glassmorphism container, optimized
 * for the data-dashboard feel. Drop above-fold on any money page.
 *
 * Props:
 *  - title: optional H2 question heading
 *  - subtitle: optional descriptive paragraph
 *  - stats: [{ value, prefix?, suffix?, label, sublabel?, format? }]
 *  - tone: 'amber' | 'cyan' | 'emerald' | 'violet'
 */
import AnimatedStatCounter from './AnimatedStatCounter';

const TONES = {
  amber: {
    bg: 'from-slate-950 via-amber-950/40 to-slate-950',
    border: 'border-amber-500/20',
    glow: 'bg-amber-500/10',
    accent: 'text-amber-300',
  },
  cyan: {
    bg: 'from-slate-950 via-cyan-950/40 to-slate-950',
    border: 'border-cyan-500/20',
    glow: 'bg-cyan-500/10',
    accent: 'text-cyan-300',
  },
  emerald: {
    bg: 'from-slate-950 via-emerald-950/40 to-slate-950',
    border: 'border-emerald-500/20',
    glow: 'bg-emerald-500/10',
    accent: 'text-emerald-300',
  },
  violet: {
    bg: 'from-slate-950 via-violet-950/40 to-slate-950',
    border: 'border-violet-500/20',
    glow: 'bg-violet-500/10',
    accent: 'text-violet-300',
  },
};

export default function InfographicPanel({
  title,
  subtitle,
  stats = [],
  tone = 'amber',
  className = '',
}) {
  const t = TONES[tone] || TONES.amber;
  if (!stats.length) return null;

  return (
    <section className={`infographic-panel relative overflow-hidden rounded-3xl border ${t.border} bg-gradient-to-br ${t.bg} p-8 md:p-12 ${className}`}>
      {/* Decorative glow orbs */}
      <div className={`absolute top-0 right-0 w-72 h-72 ${t.glow} rounded-full blur-3xl opacity-50 -translate-y-20 translate-x-20`} aria-hidden="true" />
      <div className={`absolute bottom-0 left-0 w-64 h-64 ${t.glow} rounded-full blur-3xl opacity-30 translate-y-12 -translate-x-12`} aria-hidden="true" />

      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px', color: 'white' }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        {title && (
          <h2 className={`speakable-headline text-2xl md:text-4xl font-black text-white mb-3 tracking-tight`}>
            {title}
          </h2>
        )}
        {subtitle && (
          <p className={`speakable-lead text-base md:text-lg text-white/70 mb-8 max-w-3xl leading-relaxed`}>
            {subtitle}
          </p>
        )}
        <div className={`grid gap-6 md:gap-8 ${stats.length >= 4 ? 'grid-cols-2' : stats.length === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2'}`}>
          {stats.map((s, i) => (
            <div key={s.label || i} className="text-center md:text-left">
              <AnimatedStatCounter
                value={s.value}
                prefix={s.prefix || ''}
                suffix={s.suffix || ''}
                label={s.label}
                sublabel={s.sublabel}
                format={s.format || 'integer'}
                duration={1200 + i * 200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
