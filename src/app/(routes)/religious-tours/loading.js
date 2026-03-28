export default function ReligiousToursLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="h-[400px] bg-gray-300" />
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-72 bg-gray-200 rounded-lg mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
