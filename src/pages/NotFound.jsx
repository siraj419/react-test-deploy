export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-6">Page Not Found</h2>
        <p className="text-xl text-pink-100 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-50 transition duration-200">
            Go Home
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition duration-200">
            Go Back
          </button>
        </div>

        {/* Decorative element */}
        <div className="mt-16">
          <div className="text-6xl">🚫</div>
          <p className="text-pink-100 mt-4">This page has taken a wrong turn</p>
        </div>
      </div>
    </div>
  );
}
