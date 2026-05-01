export default function Items() {
  const sampleItems = [
    { id: 1, name: "Item 1", price: "$29.99", category: "Electronics" },
    { id: 2, name: "Item 2", price: "$39.99", category: "Clothing" },
    { id: 3, name: "Item 3", price: "$49.99", category: "Electronics" },
    { id: 4, name: "Item 4", price: "$19.99", category: "Books" },
    { id: 5, name: "Item 5", price: "$59.99", category: "Home" },
    { id: 6, name: "Item 6", price: "$34.99", category: "Clothing" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Items</h1>
          <p className="text-gray-600 mt-1">Browse all available items</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Search</label>
              <input
                type="text"
                placeholder="Search items..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Category</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
                <option>Home</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Sort By</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-40 flex items-center justify-center">
                <p className="text-white text-3xl">📦</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                  <a
                    href={`#/items/${item.id}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
