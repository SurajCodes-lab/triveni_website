export default function ContactLoading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="h-[350px] bg-gray-300" />
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
            <div className="h-8 w-48 bg-gray-200 rounded" />
            <div className="h-12 w-full bg-gray-200 rounded-lg" />
            <div className="h-12 w-full bg-gray-200 rounded-lg" />
            <div className="h-12 w-full bg-gray-200 rounded-lg" />
            <div className="h-32 w-full bg-gray-200 rounded-lg" />
            <div className="h-12 w-40 bg-gray-200 rounded-lg" />
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-4">
            <div className="h-8 w-48 bg-gray-200 rounded" />
            <div className="h-5 w-full bg-gray-200 rounded" />
            <div className="h-5 w-3/4 bg-gray-200 rounded" />
            <div className="h-64 w-full bg-gray-200 rounded-xl mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
