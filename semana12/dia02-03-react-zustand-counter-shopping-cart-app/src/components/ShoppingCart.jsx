// Importar el Custom Hook de Zustand
// Permite acceder al STATE y las ACTIONS del carrito
import { useCartStore } from "../store/cart"


// Componente de React
const ShoppingCart = () => {


  // Custom Hook de Zustand
  // Obtenemos el STATE "cart" y dos ACTIONS del store
  const { cart, clearCart, removeFromCart } = useCartStore()


  // reduce() recorre el carrito y devuelve un solo valor
  // En este caso calcula el precio total
  const total = cart.reduce((accumulator, product) => {


    // Obtener propiedades del producto actual
    const qty = product.quantity
    const price = product.price


    // Calcular subtotal del producto
    const subTotal = qty * price


    // Acumular los subtotales
    return accumulator + subTotal

  // Valor inicial del accumulator
  }, 0)


  // JSX que renderiza el componente
  return (

    <section className="w-56 p-2">


      {/* Título del carrito */}
      <h3 className="text-2xl mb-2 text-center relative">

        Shopping Cart


        {/* Mostrar cantidad de productos */}
        {/* cart.length obtiene la cantidad de elementos del STATE cart */}
        <div className="bg-red-600 text-white w-6 h-6 text-base rounded-full absolute right-0 top-0">

          {cart.length}

        </div>

      </h3>


      {/* Botón para limpiar el carrito */}
      <div className="mb-2">

        <button
          className="bg-red-400 p-2 min-w-36 rounded-lg cursor-pointer text-white font-bold hover:bg-red-500 duration-300 w-full"

          // Evento onClick
          // Ejecuta la ACTION clearCart del store
          onClick={clearCart}
        >
          Limpiar carrito
        </button>

      </div>


      {/* Lista de productos */}
      <ul className="flex flex-col gap-4">


        {/* map() realiza el renderizado de una lista */}
        {/* Recorre cada producto almacenado en cart */}
        {cart.map(product => {

          return (

            // Se crea un <li> por cada producto
            <li

              // key permite a React identificar cada elemento
              key={product.id}

              className="flex flex-col gap-2 font-bold bg-slate-200 p-2 rounded-lg shadow"
            >


              {/* Renderizar el título del producto */}
              <span>
                {product.title}
              </span>


              {/* Renderizar precio y cantidad */}
              <span>
                S/{product.price} (Qty: {product.quantity})
              </span>


              {/* Botón para eliminar un producto */}
              <button
                className="bg-red-400 p-2 rounded-lg cursor-pointer text-white font-bold hover:bg-red-500 duration-300"

                // Evento onClick con una función callback
                // Enviamos el id a la ACTION removeFromCart
                onClick={() => removeFromCart(product.id)}
              >
                ❌
              </button>

            </li>
          )
        })}

      </ul>


      {/* Mostrar el total del carrito */}
      <div className="mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between rounded-lg">

        <strong>TOTAL:</strong>

        <span>

          {/* toFixed(2) muestra el total con 2 decimales */}
          S/ {total.toFixed(2)}

        </span>

      </div>


      {/* Útil para visualizar el STATE durante el desarrollo */}
      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

    </section>
  )
}


// Exportación por defecto del componente
export default ShoppingCart