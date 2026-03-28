export default function BusStandLoading() {
  return (
    <div className="min-h-screen bg-slate-950 animate-pulse">
      <div className="h-[400px] bg-slate-800" />
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-72 bg-slate-700 rounded-lg mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-slate-800/50 rounded-2xl p-6 space-y-3">
                <div className="h-6 w-3/4 bg-slate-700 rounded" />
                <div className="h-4 w-full bg-slate-700 rounded" />
                <div className="h-4 w-1/2 bg-slate-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
