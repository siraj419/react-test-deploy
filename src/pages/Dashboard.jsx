export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your overview.</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 font-semibold mb-2">Total Users</h3>
            <p className="text-4xl font-bold text-blue-600">1,234</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 font-semibold mb-2">Revenue</h3>
            <p className="text-4xl font-bold text-green-600">$45,230</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 font-semibold mb-2">Orders</h3>
            <p className="text-4xl font-bold text-purple-600">567</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-600 font-semibold mb-2">Conversions</h3>
            <p className="text-4xl font-bold text-orange-600">28%</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="flex justify-between text-gray-600">
                <span>New user signup</span>
                <span className="text-sm">2 hours ago</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Order received</span>
                <span className="text-sm">5 hours ago</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Payment processed</span>
                <span className="text-sm">1 day ago</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <div className="space-y-2">
              <a href="#" className="block p-3 bg-blue-50 text-blue-600 rounded hover:bg-blue-100">
                → View all users
              </a>
              <a href="#" className="block p-3 bg-green-50 text-green-600 rounded hover:bg-green-100">
                → Browse inventory
              </a>
              <a href="#" className="block p-3 bg-purple-50 text-purple-600 rounded hover:bg-purple-100">
                → Generate reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
