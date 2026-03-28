export default function DistanceLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero skeleton */}
      <div className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/60 to-violet-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-28 w-full">
          {/* Badge skeleton */}
          <div className="h-10 w-48 bg-indigo-500/10 rounded-full mb-8 animate-pulse" />
          {/* Title skeleton */}
          <div className="flex items-center gap-6 mb-6 flex-wrap">
            <div className="h-16 md:h-24 w-48 md:w-72 bg-white/5 rounded-2xl animate-pulse" />
            <div className="h-8 w-16 bg-indigo-500/20 rounded-full animate-pulse" />
            <div className="h-16 md:h-24 w-48 md:w-72 bg-indigo-500/10 rounded-2xl animate-pulse" />
          </div>
          {/* Subtitle skeleton */}
          <div className="h-8 w-3/4 bg-white/5 rounded-xl mb-6 animate-pulse" />
          {/* Pills skeleton */}
          <div className="flex gap-3 mb-10 flex-wrap">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-10 w-32 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
          {/* CTA skeleton */}
          <div className="flex gap-4">
            <div className="h-14 w-52 bg-indigo-500/20 rounded-2xl animate-pulse" />
            <div className="h-14 w-48 bg-white/5 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Stats strip skeleton */}
      <div className="py-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex justify-center gap-16">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="text-center">
              <div className="h-8 w-20 bg-indigo-500/10 rounded-lg mx-auto mb-2 animate-pulse" />
              <div className="h-3 w-24 bg-white/5 rounded mx-auto animate-pulse" />
            </div>
          ))}
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="h-6 w-32 bg-indigo-500/10 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-12 w-96 bg-white/5 rounded-xl mx-auto mb-16 animate-pulse" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-40 bg-white/[0.03] rounded-2xl border border-indigo-500/10 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
