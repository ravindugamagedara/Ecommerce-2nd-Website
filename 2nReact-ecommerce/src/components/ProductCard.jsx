import React from 'react'

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col justify-between">
      
      <div>
        <div className="h-48 w-full flex items-center justify-center mb-4">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1" title={product.title}>
          {product.title}
        </h2>
        <p className="text-xs text-gray-400 uppercase tracking-wider mt-1 mb-2">
          {product.category}
        </p>
      </div>

      
      <div className="mt-4 flex items-center justify-between border-t pt-3">
        <span className="text-xl font-bold text-green-600">
          ${product.price}
        </span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard