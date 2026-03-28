export default function OutstationLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="h-[400px] bg-gray-300" />
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="h-10 w-64 bg-gray-200 rounded-lg mx-auto mb-4" />
          <div className="h-5 w-96 bg-gray-200 rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-44 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-10 w-28 bg-gray-200 rounded-lg mt-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
