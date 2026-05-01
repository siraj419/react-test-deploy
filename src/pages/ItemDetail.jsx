import { useParams } from "react-router";

export default function ItemDetail() {

    const { item_id } = useParams();

    // console.log("Item ID from URL:", item_id);  
    return (
        <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-6">
            <a href="#/items" className="text-blue-600 hover:underline mb-2">
                ← Back to Items
            </a>
            <h1 className="text-3xl font-bold text-gray-900 mt-2">Item Details</h1>
            </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Product Image */}
                <div>
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-96 rounded-lg flex items-center justify-center">
                    <p className="text-white text-6xl">📦</p>
                </div>
                <div className="flex gap-2 mt-4">
                    <div className="w-16 h-16 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"></div>
                    <div className="w-16 h-16 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"></div>
                    <div className="w-16 h-16 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"></div>
                </div>
                </div>

                {/* Product Info */}
                <div>
                <div className="mb-4">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded">Electronics</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Premium Item</h1>
                <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-300">★</span>
                    </div>
                    <p className="text-gray-600">(124 reviews)</p>
                </div>

                <div className="border-t border-b border-gray-200 py-4 mb-6">
                    <p className="text-5xl font-bold text-blue-600 mb-2">$99.99</p>
                    <p className="text-gray-600 line-through">$129.99</p>
                    <p className="text-green-600 font-semibold mt-2">Save $30.00 (23% off)</p>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                    This is a high-quality premium item designed for maximum performance and durability. 
                    Perfect for both personal and professional use. Features include advanced functionality, 
                    sleek design, and outstanding value for money.
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Specifications</h3>
                    <ul className="space-y-2 text-gray-600">
                    <li><strong>Color:</strong> Black</li>
                    <li><strong>Size:</strong> Medium</li>
                    <li><strong>Material:</strong> Premium Aluminum</li>
                    <li><strong>Weight:</strong> 500g</li>
                    <li><strong>Warranty:</strong> 2 Years</li>
                    </ul>
                </div>

                <div className="flex gap-4">
                    <button className="flex-1 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                    Add to Cart
                    </button>
                    <button className="flex-1 border-2 border-blue-600 text-blue-600 font-semibold py-3 rounded-lg hover:bg-blue-50 transition duration-200">
                    Save for Later
                    </button>
                </div>
                </div>
            </div>

            {/* Related Items Section */}
            <div className="border-t border-gray-200 p-8 bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                    <div key={item} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
                    <div className="bg-gray-200 h-32 rounded mb-4 flex items-center justify-center">
                        <p className="text-2xl">📦</p>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Related Item {item}</h4>
                    <p className="text-blue-600 font-bold mb-2">$49.99</p>
                    <button className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300">
                        View Item
                    </button>
                    </div>
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
