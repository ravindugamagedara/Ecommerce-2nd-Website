import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'

function Home() {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // REST API eken data fetch krnw
  useEffect(() => {


    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
          throw new Error('Loading products failed. Please try again later.')
        }
        const data = await response.json() // convert to json
        setProducts(data)

      } catch (error) {
        setError(error.message)
      } finally { 
        setLoading(false)
      }
    }

    fetchProducts();

  }, []) // site eka load weddi eka parak witrak product load wena useEffect eka wada karanna tmai [] warahan danne

  // Loading Screen 
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-xl font-semibold text-blue-600 animate-pulse">
          Products Loading..
        </p>
      </div>
    )
  }

  // Error Screen 
  if (error) {
    return (
      <div className="text-center text-red-500 font-bold mt-10">
        Error: {error}
      </div>
    )
  }

  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Latest Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => ( 
          <ProductCard key={product.id} productprop={product} /> //props
        ))}
      </div>
    </div>
  )
}

export default Home 