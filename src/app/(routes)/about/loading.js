export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="h-[400px] bg-gray-300" />
      <div className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="h-10 w-64 bg-gray-200 rounded-lg mx-auto" />
          <div className="h-5 w-full bg-gray-200 rounded" />
          <div className="h-5 w-full bg-gray-200 rounded" />
          <div className="h-5 w-3/4 bg-gray-200 rounded" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm text-center space-y-2">
                <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto" />
                <div className="h-8 w-16 bg-gray-200 rounded mx-auto" />
                <div className="h-4 w-20 bg-gray-200 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
