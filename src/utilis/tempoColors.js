// Shared color utilities for tempo traveller pages
// Eliminates duplication across TempoMainClient, TempoCityClient, DynamicTempoRoutes

const TYPE_GRADIENT_COLORS = {
  'Hill Station': 'from-emerald-400 to-teal-600',
  'Adventure': 'from-orange-400 to-red-600',
  'Spiritual': 'from-violet-400 to-purple-600',
  'Heritage': 'from-amber-400 to-yellow-600',
  'Royal': 'from-rose-400 to-pink-600',
  'Metro': 'from-blue-400 to-indigo-600',
  'Lakes': 'from-cyan-400 to-blue-600',
  'Desert': 'from-amber-500 to-orange-600',
  'Blue City': 'from-blue-500 to-indigo-600',
  'Modern City': 'from-slate-400 to-gray-600',
  'Commercial': 'from-zinc-400 to-gray-600',
  'Circuit': 'from-indigo-400 to-purple-600',
  'Wildlife': 'from-green-400 to-emerald-700',
  'Long Road': 'from-slate-500 to-stone-700',
  'Local': 'from-cyan-400 to-sky-600',
  'Char Dham': 'from-orange-500 to-red-600',
  'Tourism': 'from-gray-400 to-gray-600',
};

const TYPE_BADGE_COLORS = {
  'Hill Station': 'bg-emerald-100 text-emerald-700 border-emerald-200',
  'Adventure': 'bg-orange-100 text-orange-700 border-orange-200',
  'Spiritual': 'bg-violet-100 text-violet-700 border-violet-200',
  'Heritage': 'bg-amber-100 text-amber-700 border-amber-200',
  'Royal': 'bg-rose-100 text-rose-700 border-rose-200',
  'Metro': 'bg-blue-100 text-blue-700 border-blue-200',
  'Lakes': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Desert': 'bg-amber-100 text-amber-700 border-amber-200',
  'Blue City': 'bg-blue-100 text-blue-700 border-blue-200',
  'Modern City': 'bg-slate-100 text-slate-700 border-slate-200',
  'Commercial': 'bg-zinc-100 text-zinc-700 border-zinc-200',
  'Circuit': 'bg-indigo-100 text-indigo-700 border-indigo-200',
  'Wildlife': 'bg-green-100 text-green-700 border-green-200',
  'Long Road': 'bg-stone-100 text-stone-700 border-stone-200',
  'Local': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Char Dham': 'bg-orange-100 text-orange-700 border-orange-200',
  'Tourism': 'bg-gray-100 text-gray-700 border-gray-200',
};

const TYPE_ICONS = {
  'Hill Station': '\u{1F3D4}\uFE0F',
  'Adventure': '\u{1F3BF}',
  'Spiritual': '\u{1F64F}',
  'Heritage': '\u{1F3DB}\uFE0F',
  'Royal': '\u{1F451}',
  'Metro': '\u{1F306}',
  'Lakes': '\u{1F3DE}\uFE0F',
  'Desert': '\u{1F3DC}\uFE0F',
  'Blue City': '\u{1F535}',
  'Modern City': '\u{1F3D9}\uFE0F',
  'Commercial': '\u{1F3E2}',
  'Circuit': '\u{1F504}',
  'Wildlife': '\u{1F405}',
  'Long Road': '\u{1F6E3}\uFE0F',
  'Local': '\u{1F3D9}\uFE0F',
  'Char Dham': '\u26F0\uFE0F',
  'Tourism': '\u{1F4CD}',
};

export function getTypeColor(type) {
  return TYPE_GRADIENT_COLORS[type] || 'from-gray-400 to-gray-600';
}

export function getTypeBadgeColor(type) {
  return TYPE_BADGE_COLORS[type] || 'bg-gray-100 text-gray-700 border-gray-200';
}

export function getTypeIcon(type) {
  return TYPE_ICONS[type] || '\u{1F4CD}';
}

export function formatDestinationForDisplay(dest) {
  const cities = dest.trim().split(/\s+/);
  if (cities.length > 2) {
    return cities.join(', ');
  }
  return dest;
}
