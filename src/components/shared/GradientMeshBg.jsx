'use client';

/**
 * GradientMeshBg — premium gradient orb background.
 * Adds depth with blurred radial gradient orbs. Wrap page content in this.
 */
export default function GradientMeshBg({
  children,
  className = '',
  color1 = 'amber',
  color2 = 'violet',
  intensity = 'medium',
}) {
  const colorValues = {
    amber: 'rgba(245, 158, 11, VAR)',
    emerald: 'rgba(52, 211, 153, VAR)',
    violet: 'rgba(139, 92, 246, VAR)',
    cyan: 'rgba(34, 211, 238, VAR)',
    pink: 'rgba(236, 72, 153, VAR)',
    blue: 'rgba(59, 130, 246, VAR)',
    indigo: 'rgba(99, 102, 241, VAR)',
    sky: 'rgba(56, 189, 248, VAR)',
    rose: 'rgba(251, 113, 133, VAR)',
    orange: 'rgba(251, 146, 60, VAR)',
  };

  const intensityMap = {
    subtle: { opacity: '0.06', blur: '120px', size: '400px' },
    medium: { opacity: '0.10', blur: '160px', size: '500px' },
    strong: { opacity: '0.15', blur: '200px', size: '600px' },
  };

  const i = intensityMap[intensity] || intensityMap.medium;
  const c1 = (colorValues[color1] || colorValues.amber).replace('VAR', i.opacity);
  const c2 = (colorValues[color2] || colorValues.violet).replace('VAR', i.opacity);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Orb 1 — top right */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 rounded-full"
        style={{
          width: i.size,
          height: i.size,
          background: `radial-gradient(circle, ${c1} 0%, transparent 70%)`,
          filter: `blur(${i.blur})`,
        }}
        aria-hidden="true"
      />
      {/* Orb 2 — bottom left */}
      <div
        className="pointer-events-none absolute -bottom-48 -left-32 rounded-full"
        style={{
          width: i.size,
          height: i.size,
          background: `radial-gradient(circle, ${c2} 0%, transparent 70%)`,
          filter: `blur(${i.blur})`,
        }}
        aria-hidden="true"
      />
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
