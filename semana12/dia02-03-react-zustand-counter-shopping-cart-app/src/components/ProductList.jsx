// Importar create desde Zustand
// create() permite crear un STORE (estado global)
import { create } from 'zustand'


// Crear el store del carrito
// useCartStore será nuestro Custom Hook para acceder al store
export const useCartStore = create(

  // set: permite MODIFICAR el estado
  // get: permite OBTENER el estado actual
  (set, get) => ({

    // STATE (Estado inicial)
    // cart comienza como un array vacío
    cart: [
      // { id: 1, title: 'product 1', quantity: 1 },
      // { id: 2, title: 'product 2', quantity: 2 },
    ],


    // ACTION
    // Función para agregar un producto al carrito
    addToCart: (newProduct) => {

      // get() obtiene el estado actual del store
      // Guardamos el carrito actual en una variable
      const currentCartState = get().cart


      // findIndex() busca la posición del producto
      // Compara el id de cada producto con el nuevo producto
      const productInCartindex = currentCartState.findIndex(
        product => product.id === newProduct.id
      )

      console.log(productInCartindex)


      // Si el índice es 0 o mayor, el producto ya existe
      if (productInCartindex >= 0) {

        // map() recorre todos los productos del carrito
        const newCart = currentCartState.map(product => {

          // Buscar el producto que queremos actualizar
          if (product.id === newProduct.id) {

            // Spread operator (...)
            // Copia todas las propiedades del producto
            return {
              ...product,

              // Modificamos solamente quantity
              quantity: product.quantity + 1
            }
          }

          // Los demás productos quedan iguales
          return product
        })


        // set() actualiza el STATE del store
        // Reemplazamos cart por newCart
        set(() => ({
          cart: newCart
        }))

        // Terminar la función
        return
      }


      // Si el producto NO existe en el carrito
      // set() actualiza el estado
      set((state) => ({

        // Spread operator (...)
        // Copiamos el carrito actual y agregamos el nuevo producto
        cart: [
          ...state.cart,
          {
            ...newProduct,
            quantity: 1
          }
        ]
      }))
    },


    // ACTION
    // Limpiar todos los productos del carrito
    clearCart: () => {

      // Actualizar cart con un array vacío
      set(() => ({
        cart: []
      }))
    },


    // ACTION
    // Eliminar un producto utilizando su id
    removeFromCart: (id) => {

      // set() recibe el estado actual
      set(state => {

        // filter() crea un nuevo array
        // dejando solamente productos con un id diferente
        const newCart = state.cart.filter(
          product => product.id !== id
        )

        // Actualizar el estado cart
        return {
          cart: newCart
        }
      })
    }

  })
)