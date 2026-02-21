export default function TourPackageLoading() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="h-[60vh] bg-gradient-to-br from-blue-100 to-indigo-200" />
      <div className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="h-10 w-72 bg-gray-200 rounded-lg mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-56 bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-10 w-32 bg-gray-200 rounded-lg mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
