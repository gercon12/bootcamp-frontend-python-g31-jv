import { useEffect, useState } from 'react'

// const ProductList = () => {

//   // Guardar los productos
//   const [products, setProducts] = useState([])

//   // Obtener los productos de la API cuando se carge por primera vez el componente
//   useEffect(() => {

//     fetch('https://dummyjson.com/products')
//       .then(res => res.json())
//       .then(data => setProducts(data.products))

//   }, [])

//   return (
//     <div>
//       <h1>Lista de productos</h1>

//       {products.map(product => (
//         <div key={product.id}>
//           <h2>{product.title}</h2>
//           <p>Precio: ${product.price}</p>
//         </div>
//       ))}

//     </div>
//   )
// }

//import React from 'react'
//import PropTypes from 'prop-types'

const ProductList = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    return await response.json()
  }

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])

  return (
    
    <div>
      <h2>Product List</h2>
      {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
    <ul>
      {products.map(product => {
        return (
          
        ) 
      }
      </ul>
      </div>
  )
}

ProductList.propTypes = {

}

export default ProductList





