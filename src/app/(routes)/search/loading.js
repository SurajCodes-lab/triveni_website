export default function SearchLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="h-[300px] bg-gray-300" />
      <div className="py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="h-24 w-24 bg-gray-200 rounded-xl shrink-0" />
                <div className="flex-1 space-y-3">
                  <div className="h-6 w-3/4 bg-gray-200 rounded" />
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-1/2 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
