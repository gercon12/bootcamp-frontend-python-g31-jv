// Importar Hooks de React
// useState: permite crear y modificar estados
// useEffect: permite ejecutar efectos secundarios
import { useEffect, useState } from "react"


// Importar componentes de React
// Estos componentes serán utilizados dentro de App
import Counter from "./components/Counter"
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"


// Componente principal de la aplicación
const App = () => {

  // Estado (State)
  // products: contiene el estado actual
  // setProducts: función que actualiza el estado
  // useState([]): Hook que inicializa products como un array vacío
  const [products, setProducts] = useState([])


  // Función asíncrona para obtener productos de la API
  const fetchProducts = async () => {

    try {

      // fetch realiza una petición HTTP a la API
      // await espera hasta recibir la respuesta
      const response = await fetch('https://dummyjson.com/products')


      // Validar la respuesta HTTP
      // response.ok será false si ocurre un error como 404 o 500
      if (!response.ok) {

        // Lanzar un error para que sea capturado por catch
        throw new Error('Error al obtener los productos')
      }


      // Convertir la respuesta de la API a formato JSON
      const data = await response.json()

      // Retornar los datos obtenidos
      return data


    } catch (error) {

      // catch captura los errores ocurridos dentro del try
      console.error('Error:', error)

    }
  }


  // Hook useEffect
  // Ejecuta código después de renderizar el componente
  useEffect(() => {

    // Ejecutar la función que consulta la API
    fetchProducts()

      // .then recibe los datos retornados por fetchProducts
      .then(data => {

        // Validar que existan datos
        if (data) {

          // Actualizar el estado products
          // Al cambiar el estado, React vuelve a renderizar el componente
          setProducts(data.products)
        }
      })

  // Array de dependencias vacío []
  // Indica que este efecto se ejecutará al montar el componente
  }, [])


  // JSX que renderiza el componente App
  return (

    <div className="flex flex-col gap-8 p-4">


      {/* Sección de productos y carrito */}
      <section className="flex gap-2">


        {/* Componente hijo ProductList */}

        {/* products={products} es una PROP */}
        {/* Enviamos el estado products al componente hijo */}
        <ProductList products={products} />


        {/* Componente hijo ShoppingCart */}
        <ShoppingCart />


        {/* Mostrar el estado products como JSON */}
        {/* Útil para revisar los datos durante el desarrollo */}
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}

      </section>


      {/* Sección de contadores */}
      <section className="flex flex-col gap-4">

        {/* Podemos reutilizar un mismo componente */}
        <Counter />

        <Counter />

      </section>

    </div>
  )
}


// Exportación por defecto del componente
export default App