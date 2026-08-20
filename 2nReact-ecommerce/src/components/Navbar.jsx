import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function Navbar() {
  const { cart } = useContext(CartContext)

  // Cart eke items wala quantity eka gnnw
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400 cursor-pointer">
          My Store
        </h1>

        <div className="relative cursor-pointer">
          <span className="text-xl">🛒 Cart</span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar