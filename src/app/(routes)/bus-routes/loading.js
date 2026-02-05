export default function BusRoutesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white animate-pulse">
      {/* Hero skeleton */}
      <div className="h-[400px] bg-gray-300" />

      {/* Intro skeleton */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <div className="h-6 w-3/4 bg-gray-200 rounded mx-auto" />
          <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto" />
        </div>
      </div>

      {/* Fleet grid skeleton */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-10 w-64 bg-gray-200 rounded mx-auto mb-4" />
            <div className="h-5 w-96 bg-gray-200 rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-[2rem] shadow-2xl border-4 border-orange-100/50">
                <div className="h-64 bg-gray-200 rounded-t-[1.75rem]" />
                <div className="p-6 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded" />
                  <div className="h-12 bg-gray-100 rounded-2xl" />
                  <div className="h-12 bg-gray-100 rounded-2xl" />
                  <div className="h-10 bg-gray-200 rounded-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
