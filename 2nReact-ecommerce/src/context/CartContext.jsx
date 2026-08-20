import React, { createContext, useState, useEffect } from 'react'

// Context eka create krnw
export const CartContext = createContext()

export function CartProvider({ children }) { // app ekata context eka provide krnw

  // Initial State eka localStorage eken gnnw

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []

  })

  // cart eka wenas wena sarayak gane storage eka update wenw

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart)) // javascript object eka string krnawa
  }, [cart])

  // Cart ekata aluten item ekak add karanawa
  const addToCart = (newproduct) => {

    setCart((prevCart) => {

      // Item eka already tiyenawada blnw
      const existingItem = prevCart.find((item) => item.id === newproduct.id)

      if (existingItem) {
        // tibbot quantity eka 1 kin wadi karanawa
        return prevCart.map((item) =>
          item.id === newproduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // Item eka naththam aluth item ekak add karanawa
      return [...prevCart, { ...newproduct, quantity: 1 }]
    })
  }

  // Cart ekata item ekak remove karanawa
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}