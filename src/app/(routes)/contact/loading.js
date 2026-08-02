export default function ContactLoading() {
  return (
    <div className="min-h-screen animate-pulse bg-slate-950">
      {/* Hero skeleton — mirrors the dark hero in ContactClient */}
      <div className="px-4 pb-14 pt-8 sm:px-6 sm:pb-20 sm:pt-12">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_minmax(0,26rem)] lg:gap-12">
          <div className="space-y-4">
            <div className="h-6 w-48 rounded-full bg-white/10" />
            <div className="h-12 w-3/4 rounded bg-white/10" />
            <div className="h-5 w-full rounded bg-white/5" />
            <div className="h-5 w-2/3 rounded bg-white/5" />
            <div className="flex flex-col gap-3 pt-3 sm:flex-row">
              <div className="h-16 w-full rounded-2xl bg-white/10 sm:w-64" />
              <div className="h-16 w-full rounded-2xl bg-white/10 sm:w-52" />
            </div>
            <div className="grid gap-2.5 pt-4 sm:grid-cols-2">
              <div className="h-14 rounded-xl bg-white/5" />
              <div className="h-14 rounded-xl bg-white/5" />
              <div className="h-14 rounded-xl bg-white/5" />
              <div className="h-14 rounded-xl bg-white/5" />
            </div>
          </div>
          <div className="h-80 rounded-2xl bg-white/5" />
        </div>
      </div>

      {/* Contact cards skeleton */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="h-8 w-64 rounded bg-white/10" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-52 rounded-2xl bg-white/5" />
          <div className="h-52 rounded-2xl bg-white/5" />
          <div className="h-52 rounded-2xl bg-white/5" />
        </div>
      </div>
    </div>
  );
}
