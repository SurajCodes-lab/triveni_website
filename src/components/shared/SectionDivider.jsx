/**
 * SectionDivider — premium gradient fade divider.
 * Replaces hard lines between sections.
 */
export default function SectionDivider({ color = 'white', className = '' }) {
  const colorMap = {
    white: 'via-white/10',
    amber: 'via-amber-400/20',
    emerald: 'via-emerald-400/20',
    violet: 'via-violet-400/20',
    cyan: 'via-cyan-400/20',
    pink: 'via-pink-400/20',
    gray: 'via-gray-300',
  };

  const via = colorMap[color] || colorMap.white;

  return (
    <div className={`max-w-6xl mx-auto px-4 ${className}`} aria-hidden="true">
      <div className={`h-px bg-gradient-to-r from-transparent ${via} to-transparent`} />
    </div>
  );
}
