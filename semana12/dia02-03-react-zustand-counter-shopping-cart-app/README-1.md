# Shopping Cart - React + Zustand

Proyecto de práctica para aprender conceptos básicos de **React**,
consumo de una **API** y manejo de **estado global con Zustand**.

La aplicación obtiene productos desde DummyJSON, muestra un listado de
productos y permite agregarlos a un carrito de compras.

## Estructura principal

``` text
src/
├── App.jsx
├── components/
│   ├── ProductList.jsx
│   └── ShoppingCart.jsx
└── store/
    └── cart.js
```

## Flujo general

``` text
DummyJSON API
     |
     v
App.jsx
     |
     | prop: products
     v
ProductList.jsx
     |
     | addToCart(product)
     v
cart.js (Zustand Store)
     |
     | state + actions
     v
ShoppingCart.jsx
```

------------------------------------------------------------------------

## App.jsx

Es el **componente principal** de la aplicación.

### Hooks utilizados

-   `useState`: crea el estado local `products`.
-   `useEffect`: ejecuta la carga de productos cuando se monta el
    componente.

``` jsx
const [products, setProducts] = useState([])
```

-   `products`: contiene el estado actual.
-   `setProducts`: función que actualiza el estado.
-   `[]`: valor inicial del estado.

### Obtener productos de la API

La función `fetchProducts` realiza una petición HTTP usando `fetch`.

``` jsx
const fetchProducts = async () => {
  try {
    const response = await fetch('https://dummyjson.com/products')

    if (!response.ok) {
      throw new Error('Error al obtener los productos')
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error('Error:', error)
  }
}
```

Conceptos utilizados:

-   `async / await`: permite trabajar con operaciones asíncronas.
-   `fetch()`: realiza la petición HTTP.
-   `response.ok`: verifica que la respuesta sea correcta.
-   `response.json()`: convierte la respuesta a un objeto JavaScript.
-   `try / catch`: permite manejar errores.
-   `throw new Error()`: genera un error cuando la respuesta no es
    correcta.

### useEffect

``` jsx
useEffect(() => {
  fetchProducts()
    .then(data => {
      if (data) {
        setProducts(data.products)
      }
    })
}, [])
```

El **Hook `useEffect`** ejecuta la consulta cuando se monta el
componente.

El array vacío `[]` indica que el efecto se ejecuta al montar el
componente.

Cuando llegan los productos:

``` jsx
setProducts(data.products)
```

se actualiza el estado y React vuelve a renderizar el componente.

### Enviar productos mediante props

``` jsx
<ProductList products={products} />
```

`products={products}` es una **prop**.

El componente padre `App` envía el estado `products` al componente hijo
`ProductList`.

------------------------------------------------------------------------

## ProductList.jsx

Este componente recibe los productos y los muestra en pantalla.

### Recibir props

``` jsx
const ProductList = ({ products }) => {
```

`products` es una **prop** recibida desde `App.jsx`.

Se utiliza desestructuración para obtener directamente la propiedad
`products`.

### Custom Hook de Zustand

``` jsx
const { addToCart } = useCartStore()
```

`useCartStore()` es el **Custom Hook** creado con Zustand.

Desde el store obtenemos la **action**:

``` text
addToCart
```

Esta acción permite agregar productos al carrito.

### Renderizado de listas

``` jsx
products.map(product => {
```

`map()` recorre el array de productos y genera un elemento JSX por cada
producto.

Cada producto utiliza:

``` jsx
key={product.id}
```

La **key** ayuda a React a identificar cada elemento de la lista.

### Evento para agregar al carrito

``` jsx
onClick={() => addToCart(product)}
```

`onClick` es un **evento de React**.

La función:

``` jsx
() => addToCart(product)
```

es un **callback** que se ejecuta cuando el usuario hace clic.

El producto seleccionado se envía a la action `addToCart`.

------------------------------------------------------------------------

## cart.js

Este archivo contiene el **store global de Zustand**.

``` js
import { create } from 'zustand'
```

`create()` permite crear un store.

``` js
export const useCartStore = create(
  (set, get) => ({
```

`useCartStore` funciona como un **Custom Hook** para acceder al estado y
a las acciones del carrito.

### State

``` js
cart: []
```

`cart` es el **estado global** donde se almacenan los productos
agregados al carrito.

### set y get

Zustand proporciona:

``` text
get() -> obtiene el estado actual
set() -> modifica el estado
```

Ejemplo:

``` js
const currentCartState = get().cart
```

Obtiene el carrito actual.

### Action addToCart

``` js
addToCart: (newProduct) => {
```

`addToCart` es una **action** que recibe un producto.

Primero busca si ya existe:

``` js
const productInCartindex = currentCartState.findIndex(
  product => product.id === newProduct.id
)
```

`findIndex()` devuelve la posición del producto.

Si devuelve `0` o un número mayor, significa que el producto existe.

Si devuelve `-1`, significa que no existe.

### Producto existente

Cuando el producto ya existe se utiliza `map()`:

``` js
const newCart = currentCartState.map(product => {
```

Si encuentra el producto:

``` js
return {
  ...product,
  quantity: product.quantity + 1
}
```

El **spread operator `...`** copia las propiedades del producto y
después modifica solamente `quantity`.

Finalmente:

``` js
set(() => ({ cart: newCart }))
```

actualiza el state del carrito.

### Producto nuevo

Si el producto todavía no existe:

``` js
set((state) => ({
  cart: [
    ...state.cart,
    {
      ...newProduct,
      quantity: 1
    }
  ]
}))
```

Se copia el carrito actual y se agrega el nuevo producto con:

``` text
quantity: 1
```

### Action clearCart

``` js
clearCart: () => {
  set(() => ({ cart: [] }))
}
```

Vacía completamente el carrito.

### Action removeFromCart

``` js
removeFromCart: (id) => {
```

Recibe el ID del producto que se quiere eliminar.

Utiliza:

``` js
filter()
```

para crear un nuevo array sin ese producto:

``` js
const newCart = state.cart.filter(
  product => product.id !== id
)
```

------------------------------------------------------------------------

## ShoppingCart.jsx

Este componente muestra los productos almacenados en el carrito.

### Obtener state y actions

``` jsx
const { cart, clearCart, removeFromCart } = useCartStore()
```

Mediante el **Custom Hook de Zustand** obtenemos:

-   `cart`: state del carrito.
-   `clearCart`: action para vaciarlo.
-   `removeFromCart`: action para eliminar un producto.

### Calcular el total con reduce

``` jsx
const total = cart.reduce((accumulator, product) => {
  const qty = product.quantity
  const price = product.price
  const subTotal = qty * price

  return accumulator + subTotal
}, 0)
```

`reduce()` recorre todo el array y devuelve un único resultado.

En este caso:

``` text
cantidad x precio = subtotal
```

y después acumula todos los subtotales.

El `0` es el valor inicial del acumulador.

### Cantidad de productos

``` jsx
{cart.length}
```

`length` devuelve la cantidad de elementos que existen actualmente en el
carrito.

### Renderizar el carrito

``` jsx
cart.map(product => {
```

`map()` recorre el carrito y genera un `<li>` por cada producto.

### Limpiar carrito

``` jsx
onClick={clearCart}
```

Cuando el usuario hace clic se ejecuta directamente la action
`clearCart`.

### Eliminar un producto

``` jsx
onClick={() => removeFromCart(product.id)}
```

Aquí se utiliza un **callback** porque necesitamos enviar el ID del
producto.

### Mostrar el total

``` jsx
S/ {total.toFixed(2)}
```

`toFixed(2)` muestra el número utilizando dos posiciones decimales.

------------------------------------------------------------------------

## Conceptos utilizados

  ----------------------------------------------------------------------------
  Concepto                Ejemplo                      Función
  ----------------------- ---------------------------- -----------------------
  Componente              `ProductList`                Parte reutilizable de
                                                       la interfaz

  Hook                    `useState()`                 Manejar estado local

  Hook                    `useEffect()`                Ejecutar efectos
                                                       secundarios

  Custom Hook             `useCartStore()`             Acceder al store de
                                                       Zustand

  State                   `products`, `cart`           Guardar datos

  Setter                  `setProducts()`              Actualizar un estado

  Store                   `useCartStore`               Estado global

  Action                  `addToCart()`                Modificar el store

  Prop                    `products={products}`        Enviar datos a un
                                                       componente hijo

  Evento                  `onClick`                    Responder a acciones
                                                       del usuario

  Callback                `() => addToCart(product)`   Ejecutar una función
                                                       posteriormente

  `map()`                 `products.map()`             Recorrer y renderizar
                                                       elementos

  `reduce()`              `cart.reduce()`              Obtener un único
                                                       resultado

  `filter()`              `cart.filter()`              Crear un array filtrado

  `findIndex()`           búsqueda por `id`            Encontrar la posición
                                                       de un elemento

  Spread operator         `...product`                 Copiar propiedades

  JSX                     `return (...)`               Describir la interfaz

  Key                     `key={product.id}`           Identificar elementos
                                                       de una lista
  ----------------------------------------------------------------------------

## Resumen del funcionamiento

1.  `App.jsx` consulta los productos de DummyJSON.
2.  Los productos se guardan en el state `products`.
3.  `App` envía los productos a `ProductList` mediante una prop.
4.  `ProductList` utiliza `map()` para mostrar los productos.
5.  Al presionar **Add to cart**, se ejecuta `addToCart(product)`.
6.  `cart.js` actualiza el store global de Zustand.
7.  `ShoppingCart` obtiene el nuevo state del carrito.
8.  React actualiza la interfaz.
9.  `reduce()` calcula el total del carrito.
10. El usuario puede eliminar un producto o limpiar todo el carrito.

## Idea principal

El proyecto permite practicar cómo se conectan diferentes conceptos:

``` text
API
 |
 v
useEffect + fetch
 |
 v
useState
 |
 v
Props
 |
 v
ProductList
 |
 v
Evento onClick
 |
 v
Zustand Store
 |
 v
State + Actions
 |
 v
ShoppingCart
 |
 v
Renderizado actualizado
```
