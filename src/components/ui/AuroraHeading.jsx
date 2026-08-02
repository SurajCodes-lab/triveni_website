// src/components/ui/AuroraHeading.jsx
//
// Eyebrow + title (+ gold-gradient highlight) + subtitle, one consistent rhythm
// for the Aurora design language. Distinct from the legacy SectionHeading.

export default function AuroraHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center', // 'center' | 'left'
  tone = 'light', // 'light' (dark text) | 'dark' (light text)
  className = '',
}) {
  const dark = tone === 'dark';
  const center = align === 'center';
  return (
    <div className={`flex flex-col ${center ? 'items-center text-center mx-auto' : 'items-start text-left'} max-w-3xl ${center ? 'mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-xs">
          <span className="h-px w-6 bg-amber-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-balance text-[1.6rem] font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title} {highlight && <span className="text-gradient-gold">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-sm leading-relaxed sm:text-base lg:text-lg ${dark ? 'text-slate-300/80' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
