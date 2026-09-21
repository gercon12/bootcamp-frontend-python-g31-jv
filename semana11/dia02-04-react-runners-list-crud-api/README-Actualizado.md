# CRUD de Corredores en React

## 1. Descripción

Este proyecto es un CRUD de corredores desarrollado con React y
conectado a una API.

CRUD significa:

  Operación   Método HTTP   Función
  ----------- ------------- ---------------------
  Leer        GET           `fetchCorredores()`
  Crear       POST          `createCorredor()`
  Editar      PUT           `updateCorredor()`
  Eliminar    DELETE        `deleteCorredor()`

Los componentes principales son:

``` text
App.jsx
├── Header.jsx
├── Form.jsx
├── List.jsx
└── Footer.jsx
```

`App.jsx` funciona como el centro de control: guarda los estados,
realiza las peticiones a la API y pasa datos y funciones a los demás
componentes mediante **props**.

------------------------------------------------------------------------

# 2. App.jsx

## Estados principales

``` jsx
const [loading, setLoading] = useState(false)
const [corredores, setCorredores] = useState([])
const [corredorEditar, setCorredorEditar] = useState(null)
```

### `loading`

Indica si se están cargando datos desde la API.

``` text
false → no está cargando
true  → está cargando
```

Se utiliza para mostrar el mensaje:

``` text
Cargando corredores...
```

### `corredores`

Guarda el arreglo de corredores recibido desde la API.

Ejemplo:

``` js
[
  {
    id: 1,
    nombre: "Ana Torres",
    edad: 28,
    categoria: "10K",
    dorsal: 101
  }
]
```

Cuando cambia `corredores`, React actualiza automáticamente los
componentes que utilizan ese estado.

### `corredorEditar`

Guarda el corredor seleccionado cuando se presiona el botón **Editar**.

``` jsx
const [corredorEditar, setCorredorEditar] = useState(null)
```

Inicialmente vale:

``` js
null
```

Al seleccionar un corredor puede contener:

``` js
{
  id: 1,
  nombre: "Ana Torres",
  edad: 28,
  categoria: "10K",
  dorsal: 101
}
```

------------------------------------------------------------------------

# 3. GET - Cargar corredores

La función:

``` jsx
fetchCorredores()
```

solicita los corredores a la API.

Su flujo es:

``` text
fetchCorredores()
       ↓
setLoading(true)
       ↓
fetch(API_URL)
       ↓
response.ok
       ↓
response.json()
       ↓
retorna los corredores
       ↓
setLoading(false)
```

Se utiliza `try...catch` para controlar errores.

``` jsx
try {

  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('Tuvimos problemas al cargar los corredores')
  }

  const data = await response.json()

  return data

} catch (error) {

  console.log(error)

  return []

} finally {

  setLoading(false)
}
```

### `response.ok`

Permite comprobar si la petición HTTP fue exitosa.

``` jsx
if (!response.ok) {
  throw new Error('Ocurrió un problema')
}
```

Si ocurre un error, `throw` envía la ejecución al `catch`.

### `finally`

El bloque:

``` jsx
finally {
  setLoading(false)
}
```

se ejecuta tanto si la petición funciona como si ocurre un error.

Esto evita que el mensaje **Cargando corredores...** quede visible
permanentemente.

------------------------------------------------------------------------

# 4. useEffect al iniciar la aplicación

``` jsx
useEffect(() => {

  fetchCorredores()
    .then(data => setCorredores(data))

}, [])
```

El arreglo vacío:

``` jsx
[]
```

hace que este efecto se ejecute una vez cuando se carga el componente.

El flujo es:

``` text
Carga App
   ↓
useEffect
   ↓
fetchCorredores()
   ↓
GET
   ↓
setCorredores(data)
   ↓
React actualiza la lista
```

------------------------------------------------------------------------

# 5. POST - Crear corredor

La función:

``` jsx
createCorredor(corredor)
```

recibe los datos enviados desde `Form.jsx`.

Ejemplo:

``` js
{
  nombre: "Carlos López",
  edad: "30",
  categoria: "21K",
  dorsal: "105"
}
```

La petición se configura así:

``` jsx
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(corredor)
}
```

`JSON.stringify()` convierte el objeto JavaScript a JSON para enviarlo a
la API.

Después:

``` jsx
const response = await fetch(API_URL, options)
const nuevoCorredor = await response.json()
```

Finalmente se agrega al estado:

``` jsx
setCorredores([...corredores, nuevoCorredor])
```

`...corredores` conserva los corredores existentes y `nuevoCorredor`
agrega el nuevo.

------------------------------------------------------------------------

# 6. PUT - Editar corredor

La función:

``` jsx
updateCorredor(corredor)
```

recibe el corredor modificado desde `Form.jsx`.

La petición utiliza:

``` jsx
method: 'PUT'
```

y el `id` identifica qué corredor se actualizará:

``` jsx
await fetch(`${API_URL}/${corredor.id}`, options)
```

Después se vuelven a cargar los datos:

``` jsx
const data = await fetchCorredores()
setCorredores(data)
```

Finalmente:

``` jsx
setCorredorEditar(null)
```

indica que ya no hay un corredor en modo edición.

------------------------------------------------------------------------

# 7. DELETE - Eliminar corredor

La función:

``` jsx
deleteCorredor(id)
```

recibe únicamente el `id` del corredor.

Antes de eliminar se utiliza SweetAlert:

``` jsx
const result = await Swal.fire({
  title: "¿Eliminar corredor?",
  text: "Esta acción no se puede deshacer",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Sí, eliminar",
  cancelButtonText: "Cancelar"
})
```

Se comprueba la respuesta:

``` jsx
if (result.isConfirmed) {
```

Solo si el usuario confirma se realiza:

``` jsx
await fetch(`${API_URL}/${id}`, {
  method: 'DELETE'
})
```

Después se elimina el corredor del estado:

``` jsx
setCorredores(
  corredores.filter(corredor => corredor.id !== id)
)
```

`filter()` crea un nuevo arreglo con todos los corredores excepto el
corredor cuyo `id` fue eliminado.

------------------------------------------------------------------------

# 8. try...catch

Las operaciones GET, POST, PUT y DELETE utilizan la misma estructura
básica:

``` jsx
try {

  const response = await fetch(...)

  if (!response.ok) {
    throw new Error('Ocurrió un problema')
  }

  // Operación exitosa

} catch (error) {

  console.log(error)
}
```

La idea es:

``` text
try
 ↓
Intentar petición
 ↓
¿response.ok?
 ↓
Sí → continuar

No
 ↓
throw new Error()
 ↓
catch
 ↓
mostrar error
```

------------------------------------------------------------------------

# 9. Props utilizadas por App.jsx

`App.jsx` envía información a los componentes.

## Header

``` jsx
<Header corredores={corredores} />
```

`Header` recibe el arreglo para mostrar:

``` jsx
{corredores.length}
```

Esto permite mostrar automáticamente la cantidad de inscritos.

## Form

``` jsx
<Form
  createCorredor={createCorredor}
  updateCorredor={updateCorredor}
  corredorEditar={corredorEditar}
/>
```

El formulario recibe funciones para crear y actualizar corredores.

## List

``` jsx
<List
  corredores={corredores}
  setCorredorEditar={setCorredorEditar}
  deleteCorredor={deleteCorredor}
  loading={loading}
/>
```

La lista recibe los corredores y las funciones necesarias para editar y
eliminar.

------------------------------------------------------------------------

# 10. Form.jsx

El formulario recibe:

``` jsx
const Form = ({
  createCorredor,
  updateCorredor,
  corredorEditar
}) => {
```

Estas propiedades vienen desde `App.jsx`.

------------------------------------------------------------------------

# 11. Estado del formulario

``` jsx
const [form, setForm] = useState({
  nombre: '',
  edad: '',
  categoria: '',
  dorsal: ''
})
```

Este estado guarda lo que el usuario escribe.

Por ejemplo:

``` js
{
  nombre: "Carlos López",
  edad: "32",
  categoria: "10K",
  dorsal: "105"
}
```

Los inputs son controlados por React:

``` jsx
value={form.nombre}
onChange={handleChange}
```

------------------------------------------------------------------------

# 12. handleChange

Cada vez que cambia un input se ejecuta:

``` jsx
handleChange()
```

La función obtiene:

``` jsx
const { name, value } = event.target
```

Si el usuario escribe en:

``` jsx
<input name="nombre" />
```

se puede obtener:

``` text
name  = "nombre"
value = "Carlos"
```

Después:

``` jsx
setForm({
  ...form,
  [name]: value
})
```

`...form` conserva los demás campos y `[name]: value` actualiza
solamente el campo modificado.

------------------------------------------------------------------------

# 13. useEffect para editar

Cuando se selecciona un corredor en `List.jsx`, `corredorEditar` cambia.

Entonces se ejecuta:

``` jsx
useEffect(() => {

  if (corredorEditar) {

    setForm({
      id: corredorEditar.id,
      nombre: corredorEditar.nombre,
      edad: corredorEditar.edad,
      categoria: corredorEditar.categoria,
      dorsal: corredorEditar.dorsal
    })

  }

}, [corredorEditar])
```

Esto carga los datos del corredor seleccionado dentro de los inputs.

El flujo es:

``` text
Click Editar
    ↓
setCorredorEditar(corredor)
    ↓
corredorEditar cambia
    ↓
useEffect
    ↓
setForm(...)
    ↓
Datos aparecen en los inputs
```

------------------------------------------------------------------------

# 14. handleSubmit

Cuando se envía el formulario:

``` jsx
onSubmit={handleSubmit}
```

primero se evita la recarga de la página:

``` jsx
event.preventDefault()
```

Después se comprueba si estamos creando o editando:

``` jsx
if (corredorEditar) {

  await updateCorredor(form)

} else {

  await createCorredor(form)

}
```

Por lo tanto, el mismo formulario realiza dos operaciones:

``` text
corredorEditar = null
        ↓
      POST
      Crear


corredorEditar tiene datos
        ↓
       PUT
      Editar
```

Después se limpia:

``` jsx
setForm({
  nombre: '',
  edad: '',
  categoria: '',
  dorsal: ''
})
```

------------------------------------------------------------------------

# 15. Campos requeridos

Los inputs utilizan:

``` jsx
required
```

Ejemplo:

``` jsx
<input
  name="nombre"
  type="text"
  required
/>
```

Esto evita enviar el formulario si el campo está vacío.

------------------------------------------------------------------------

# 16. Botón Inscribir / Guardar cambios

El texto del botón depende de `corredorEditar`:

``` jsx
{corredorEditar ? 'Guardar cambios' : 'Inscribir'}
```

Es un operador ternario.

Equivale conceptualmente a:

``` text
¿Existe corredorEditar?

Sí → Guardar cambios
No → Inscribir
```

------------------------------------------------------------------------

# 17. List.jsx

El componente recibe:

``` jsx
const List = ({
  corredores,
  setCorredorEditar,
  deleteCorredor,
  loading
}) => {
```

Su función principal es mostrar los corredores y permitir seleccionar
**Editar** o **Eliminar**.

------------------------------------------------------------------------

# 18. Mostrar corredores con map()

``` jsx
corredores.map(corredor => {
  return (
    <li key={corredor.id}>
      ...
    </li>
  )
})
```

`map()` recorre el arreglo y crea un elemento por cada corredor.

Dentro de cada elemento se muestran:

``` jsx
{corredor.nombre}
{corredor.edad}
{corredor.categoria}
{corredor.dorsal}
```

------------------------------------------------------------------------

# 19. key en React

Cada corredor utiliza:

``` jsx
key={corredor.id}
```

`key` permite a React identificar cada elemento de forma única.

Ejemplo:

``` text
id 1 → Ana
id 2 → Carlos
id 3 → Pedro
```

Esto ayuda a React a actualizar correctamente la lista cuando se crea,
modifica o elimina un elemento.

------------------------------------------------------------------------

# 20. Botón Editar

``` jsx
onClick={() => setCorredorEditar(corredor)}
```

Al presionarlo se envía el objeto completo del corredor:

``` js
{
  id: 2,
  nombre: "Carlos",
  edad: 30,
  categoria: "10K",
  dorsal: 102
}
```

El objeto se guarda en `corredorEditar` dentro de `App.jsx`.

Luego `Form.jsx` detecta el cambio mediante `useEffect`.

------------------------------------------------------------------------

# 21. Botón Eliminar

``` jsx
onClick={() => deleteCorredor(corredor.id)}
```

En este caso únicamente se envía el `id`.

Ejemplo:

``` text
deleteCorredor(2)
```

La función de `App.jsx` utiliza ese identificador para ejecutar la
petición DELETE.

------------------------------------------------------------------------

# 22. Mensaje Loading

`List.jsx` recibe:

``` jsx
loading
```

y utiliza renderizado condicional:

``` jsx
{loading && (
  <p>
    Cargando corredores...
  </p>
)}
```

Funciona así:

``` text
loading = true
      ↓
Mostrar mensaje


loading = false
      ↓
No mostrar mensaje
```

------------------------------------------------------------------------

# 23. Flujo completo del CRUD

## Cargar

``` text
App inicia
   ↓
useEffect
   ↓
fetchCorredores()
   ↓
GET
   ↓
setCorredores()
   ↓
List muestra corredores
```

## Crear

``` text
Usuario llena Form
       ↓
handleChange
       ↓
form
       ↓
handleSubmit
       ↓
createCorredor(form)
       ↓
POST
       ↓
setCorredores()
       ↓
List se actualiza
```

## Editar

``` text
Click Editar en List
       ↓
setCorredorEditar(corredor)
       ↓
Form recibe corredorEditar
       ↓
useEffect
       ↓
Datos aparecen en Form
       ↓
Guardar cambios
       ↓
updateCorredor(form)
       ↓
PUT
       ↓
List se actualiza
```

## Eliminar

``` text
Click Eliminar
       ↓
deleteCorredor(id)
       ↓
SweetAlert
       ↓
Usuario confirma
       ↓
DELETE
       ↓
filter()
       ↓
setCorredores()
       ↓
List se actualiza
```

------------------------------------------------------------------------

# 24. Idea principal de la aplicación

La estructura puede entenderse así:

``` text
                 App.jsx
                    │
          Estados + funciones CRUD
                    │
       ┌────────────┼────────────┐
       ↓            ↓            ↓
   Header.jsx    Form.jsx     List.jsx
       │            │            │
   Contador      Crear/       Mostrar
                Editar        corredores
                                 │
                           Editar / Eliminar
```

`App.jsx` mantiene el estado principal y controla la comunicación con la
API.

`Form.jsx` controla los inputs y permite crear o editar.

`List.jsx` muestra los corredores y permite seleccionarlos para editar o
eliminar.

`Header.jsx` muestra la cantidad de corredores utilizando
`corredores.length`.

------------------------------------------------------------------------

# 25. Conceptos de React utilizados

En este proyecto se practican varios conceptos importantes:

-   **Componentes:** `App`, `Form`, `List`, `Header` y `Footer`.
-   **Props:** permiten enviar datos y funciones entre componentes.
-   **useState:** permite guardar información que puede cambiar.
-   **useEffect:** permite ejecutar acciones cuando carga el componente
    o cambia una dependencia.
-   **Eventos:** `onChange`, `onSubmit` y `onClick`.
-   **Renderizado condicional:** permite mostrar contenido dependiendo
    de una condición.
-   **map():** permite generar elementos a partir de un arreglo.
-   **Estado controlado:** los valores de los inputs se guardan en
    React.
-   **Fetch API:** permite comunicarse con la API mediante GET, POST,
    PUT y DELETE.
-   **async/await:** permite trabajar de forma más clara con operaciones
    asíncronas.
-   **try/catch:** permite controlar errores en las peticiones.
-   **SweetAlert2:** permite mostrar una confirmación antes de eliminar.

------------------------------------------------------------------------

# 26. Resumen

El proyecto separa responsabilidades:

``` text
App.jsx
→ controla estados y API

Form.jsx
→ captura datos
→ crea corredores
→ edita corredores

List.jsx
→ muestra corredores
→ selecciona corredor para editar
→ solicita eliminar corredor

Header.jsx
→ muestra cantidad de inscritos

Footer.jsx
→ muestra el pie de página
```

Esta estructura permite que cada componente tenga una responsabilidad
clara y que `App.jsx` coordine el funcionamiento general del CRUD.


---

# 27. Header.jsx

El componente `Header.jsx` muestra el título de la aplicación y la cantidad total de corredores inscritos.

## Código comentado

```jsx
// Recibir el arreglo de corredores desde App.jsx
const Header = ({ corredores }) => {

    return (
        <header className="mb-10 flex items-end justify-between gap-6">

            {/* Título de la aplicación */}
            <div>

                <p className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-1">
                    Maratón G31 - 2026
                </p>

                <h1 className="text-3xl font-semibold tracking-tight">
                    Corredores
                </h1>

            </div>


            {/* Contador de corredores */}
            <div className="text-right shrink-0">

                {/* Mostrar cantidad de corredores */}
                <p
                    id="contador"
                    className="text-3xl font-semibold leading-none"
                >
                    {corredores.length}
                </p>

                <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                    inscritos
                </p>

            </div>

        </header>
    )
}

export default Header
```

## ¿Cómo funciona Header.jsx?

`Header` recibe el arreglo `corredores` desde `App.jsx` mediante una **prop**:

```jsx
const Header = ({ corredores }) => {
```

En `App.jsx` se envía de esta manera:

```jsx
<Header corredores={corredores} />
```

Por lo tanto, ambos componentes quedan conectados:

```text
App.jsx
   ↓
corredores
   ↓
Header.jsx
```

## Contar los corredores

Para obtener la cantidad de corredores se utiliza:

```jsx
{corredores.length}
```

`length` devuelve la cantidad de elementos que existen en el arreglo.

Por ejemplo:

```js
corredores = [
  { nombre: "Ana" },
  { nombre: "Carlos" },
  { nombre: "Pedro" }
]
```

Entonces:

```js
corredores.length
```

devuelve:

```text
3
```

y el Header muestra:

```text
3
inscritos
```

No es necesario crear otro `useState` para el contador porque la cantidad se obtiene directamente del arreglo `corredores`.

Cuando se crea o elimina un corredor, cambia el estado `corredores` en `App.jsx`. React vuelve a renderizar `Header` y el contador se actualiza automáticamente.

El flujo es:

```text
Crear o eliminar corredor
          ↓
setCorredores()
          ↓
cambia corredores
          ↓
Header recibe el nuevo arreglo
          ↓
corredores.length
          ↓
contador actualizado
```

## Responsabilidad de Header.jsx

```text
Header.jsx
    ↓
Recibe corredores
    ↓
Muestra título
    ↓
Calcula corredores.length
    ↓
Muestra cantidad de inscritos
```

Este componente es principalmente de presentación: no modifica corredores ni realiza peticiones a la API.
