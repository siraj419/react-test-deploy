export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-indigo-600">Logo</h2>
          <ul className="flex gap-6">
            <li><a href="#" className="text-gray-700 hover:text-indigo-600">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600">About</a></li>
            <li><a href="#" className="text-gray-700 hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome</h1>
        <p className="text-xl text-indigo-100 mb-8">
          Experience the best routing and navigation in React
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition duration-200">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fast</h3>
              <p className="text-gray-600">Lightning-fast routing and navigation for your applications</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Secure</h3>
              <p className="text-gray-600">Enterprise-level security for all your routes and components</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Scalable</h3>
              <p className="text-gray-600">Scales seamlessly with your application growth</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
