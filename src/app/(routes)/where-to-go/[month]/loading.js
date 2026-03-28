export default function WhereToGoLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero skeleton */}
      <div className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950/40 to-teal-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full">
          {/* Month navigation skeleton */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-28 bg-white/5 rounded-xl animate-pulse" />
            <div className="h-10 w-44 bg-emerald-500/10 rounded-full animate-pulse" />
            <div className="h-10 w-28 bg-white/5 rounded-xl animate-pulse" />
          </div>
          {/* Title skeleton */}
          <div className="h-20 md:h-28 w-72 md:w-96 bg-emerald-500/10 rounded-2xl mb-4 animate-pulse" />
          {/* Tagline skeleton */}
          <div className="h-8 w-2/3 bg-white/5 rounded-xl mb-8 animate-pulse" />
          {/* Pills skeleton */}
          <div className="flex gap-3 mb-12 flex-wrap">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-12 w-40 bg-white/5 rounded-2xl animate-pulse" />
            ))}
          </div>
          {/* CTA skeleton */}
          <div className="flex gap-4">
            <div className="h-16 w-52 bg-emerald-500/20 rounded-2xl animate-pulse" />
            <div className="h-16 w-48 bg-white/5 rounded-2xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Destinations grid skeleton */}
      <div className="py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="h-6 w-36 bg-emerald-500/10 rounded-full mx-auto mb-4 animate-pulse" />
            <div className="h-14 w-96 bg-white/5 rounded-xl mx-auto mb-4 animate-pulse" />
            <div className="h-5 w-64 bg-white/[0.03] rounded-lg mx-auto animate-pulse" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8 animate-pulse">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-7 w-32 bg-white/5 rounded-lg" />
                  <div className="h-6 w-20 bg-emerald-500/10 rounded-full" />
                </div>
                <div className="h-4 w-full bg-white/[0.03] rounded mb-2" />
                <div className="h-4 w-3/4 bg-white/[0.03] rounded mb-6" />
                <div className="space-y-3 mb-6">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="h-5 w-40 bg-white/[0.03] rounded" />
                  ))}
                </div>
                <div className="flex gap-2 flex-wrap mb-6">
                  {[1, 2, 3].map(j => (
                    <div key={j} className="h-7 w-24 bg-white/[0.03] rounded-lg" />
                  ))}
                </div>
                <div className="h-12 w-full bg-emerald-500/10 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Travel tips skeleton */}
      <div className="py-24 px-4 sm:px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="h-12 w-72 bg-white/5 rounded-xl mx-auto mb-16 animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 flex items-start gap-4 animate-pulse">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex-shrink-0" />
                <div className="flex-1">
                  <div className="h-5 w-full bg-white/[0.03] rounded mb-2" />
                  <div className="h-5 w-2/3 bg-white/[0.03] rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs skeleton */}
      <div className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="h-12 w-80 bg-white/5 rounded-xl mx-auto mb-16 animate-pulse" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 animate-pulse">
                <div className="h-5 w-3/4 bg-white/[0.03] rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
