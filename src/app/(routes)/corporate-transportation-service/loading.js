export default function CorporateLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="h-[60vh] bg-gradient-to-br from-slate-200 to-blue-200" />
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="h-10 w-72 bg-gray-200 rounded-lg mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 space-y-3">
                <div className="h-12 w-12 bg-gray-200 rounded-full" />
                <div className="h-6 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
