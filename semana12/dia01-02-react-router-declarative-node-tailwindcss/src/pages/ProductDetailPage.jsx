// Importar hooks y React Router
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const ProductDetailPage = () => {

  // Obtener el id del producto desde la URL prodcuts
  const { id } = useParams()

  // Guardar los datos del producto
  const [product, setProduct] = useState()

  // Obtener el producto de la API
  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))

  }, [id])

  // Renderizar el detalle del producto
  return (
    <main>

      <Link to="/products">
        Regresar al listado de productos
      </Link>

      <ul>
        <li className="font-bold">
          ID: {id}
        </li>

        <li className="font-bold">
          {product?.title}
        </li>

        <li>
          {product?.description}
        </li>

        <li>
          $ {product?.price}
        </li>

        <li>
          {product?.brand}
        </li>

        <li>
          <img src={product?.thumbnail} />
        </li>
      </ul>

    </main>
  )
}

export default ProductDetailPage