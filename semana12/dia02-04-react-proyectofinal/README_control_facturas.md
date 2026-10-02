# Control de Facturas

Aplicación web desarrollada con **React** para gestionar facturas y
ayudar a identificar posibles facturas duplicadas. El proyecto permite
consultar, crear, editar y eliminar facturas, visualizar el detalle de
cada factura y revisar coincidencias que podrían requerir validación o
anulación.

## Funcionalidad general

La aplicación incluye:

-   Dashboard con resumen de facturas.
-   Listado de facturas registradas.
-   Creación, edición y eliminación de facturas.
-   Confirmación antes de eliminar.
-   Búsqueda y filtrado.
-   Detalle individual de cada factura.
-   Listado de productos por factura.
-   Cálculo de subtotal mediante precio × cantidad.
-   Cálculo del total de productos.
-   Detección de posibles facturas duplicadas.
-   Navegación con React Router.
-   Estado global con Zustand.
-   Persistencia de datos mediante APIBox.
-   Indicador de carga y manejo de errores.

## Arquitectura general

La aplicación separa las responsabilidades en páginas, componentes,
estado global, servicios y utilidades.

``` text
Usuario
   |
   v
React Router
   |
   v
Pages
   |
   +------> Components
   |
   v
Zustand Store
   |
   v
Services
   |
   v
APIBox
```

### Pages

Las páginas representan las vistas principales.

``` text
pages/
├── Dashboard.jsx
├── Facturas.jsx
├── FacturaDetalle.jsx
└── Duplicados.jsx
```

**Dashboard.jsx**

Muestra un resumen general:

-   Total de facturas.
-   Facturas activas.
-   Facturas anuladas.
-   Posibles facturas duplicadas.

**Facturas.jsx**

Es la página principal de administración. Permite consultar, buscar,
filtrar, crear, editar, eliminar y acceder al detalle de las facturas.

**FacturaDetalle.jsx**

Muestra la información completa de una factura y sus productos:

-   Código.
-   Producto.
-   Precio.
-   Cantidad.
-   Existencia en bodega.
-   Subtotal.

El subtotal se obtiene con:

``` text
precio × cantidad = subtotal
```

Los subtotales se acumulan para obtener el total de productos.

**Duplicados.jsx**

Muestra las facturas que presentan coincidencias y requieren revisión.

Actualmente se comparan:

-   NIT.
-   Fecha.
-   Total.
-   Número de factura diferente.

## Components

Los componentes contienen partes reutilizables de la interfaz.

``` text
components/
├── Header.jsx
├── FacturaFilter.jsx
├── FacturaForm.jsx
├── FacturaList.jsx
├── FacturaCard.jsx
└── Loading.jsx
```

**Header.jsx**

Contiene la navegación principal. Utiliza `NavLink` para resaltar la
página seleccionada.

**FacturaForm.jsx**

Formulario utilizado para crear y editar facturas. Maneja cliente, NIT,
número de factura, fecha, total y estado.

**FacturaFilter.jsx**

Permite buscar o filtrar las facturas.

**FacturaList.jsx**

Recibe un arreglo de facturas y utiliza `map()` para mostrar una tarjeta
por cada factura.

**FacturaCard.jsx**

Muestra la información resumida de una factura y permite editar,
eliminar o ver su detalle. La eliminación utiliza SweetAlert2 para
solicitar confirmación.

**Loading.jsx**

Muestra un mensaje mientras se obtienen datos desde la API.

## Estado global con Zustand

El estado global se administra con **Zustand**.

``` text
store/
└── facturasStore.js
```

El store mantiene estados como:

``` text
facturas
loading
error
facturaEditar
```

También contiene acciones como:

``` text
fetchFacturas()
addFactura()
editFactura()
removeFactura()
setFacturaEditar()
```

Flujo:

``` text
Componente
   |
   v
useFacturasStore()
   |
   v
Action
   |
   v
Servicio API
   |
   v
APIBox
   |
   v
Zustand actualiza el state
   |
   v
React actualiza la interfaz
```

## Servicios y API

Las operaciones HTTP están separadas de los componentes.

``` text
services/
└── facturasApi.js
```

  Operación    Método HTTP   Función
  ------------ ------------- -------------------
  Consultar    GET           `getFacturas()`
  Crear        POST          `createFactura()`
  Actualizar   PUT           `updateFactura()`
  Eliminar     DELETE        `deleteFactura()`

Los datos se almacenan de forma persistente mediante **APIBox**.

## Detección de duplicados

La lógica se encuentra en:

``` text
utils/
└── detectarDuplicados.js
```

Una factura se considera una posible coincidencia cuando otra factura
tiene:

``` text
mismo NIT
+
misma fecha
+
mismo total
+
número de factura diferente
```

La función devuelve las facturas que cumplen estas condiciones para que
puedan ser revisadas.

## React Router

Las rutas principales son:

  Ruta              Página
  ----------------- ---------------------
  `/`               Dashboard
  `/facturas`       Facturas
  `/facturas/:id`   Detalle de factura
  `/duplicados`     Posibles duplicados

La ruta `/facturas/:id` utiliza un parámetro dinámico. `useParams()`
obtiene el ID y permite localizar la factura seleccionada.

## Flujo general de una factura

``` text
Usuario
   |
   v
Página Facturas
   |
   v
FacturaForm
   |
   v
Zustand Action
   |
   v
facturasApi.js
   |
   v
APIBox
   |
   v
Datos actualizados
   |
   v
Zustand Store
   |
   v
FacturaList
   |
   v
FacturaCard
```

## Estructura principal

``` text
src/
├── components/
│   ├── Header.jsx
│   ├── FacturaFilter.jsx
│   ├── FacturaForm.jsx
│   ├── FacturaList.jsx
│   ├── FacturaCard.jsx
│   └── Loading.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── Facturas.jsx
│   ├── FacturaDetalle.jsx
│   └── Duplicados.jsx
├── services/
│   └── facturasApi.js
├── store/
│   └── facturasStore.js
├── utils/
│   └── detectarDuplicados.js
├── App.jsx
├── main.jsx
└── index.css
```

## Tecnologías utilizadas

-   React
-   JavaScript
-   Vite
-   React Router
-   Zustand
-   Tailwind CSS
-   SweetAlert2
-   APIBox
-   Fetch API

## Conceptos utilizados

-   Componentes y props.
-   State y estado global.
-   `useState`.
-   `useEffect`.
-   `useParams`.
-   Custom Hooks.
-   Eventos y callbacks.
-   `map()`.
-   `filter()`.
-   `find()`.
-   `some()`.
-   `reduce()`.
-   `async / await`.
-   `fetch()`.
-   `try / catch`.

## Instalación

Clonar el repositorio:

``` bash
git clone URL_DEL_REPOSITORIO
```

Entrar al proyecto:

``` bash
cd control-facturas
```

Instalar dependencias:

``` bash
npm install
```

Ejecutar en desarrollo:

``` bash
npm run dev
```

## Build de producción

``` bash
npm run build
```

## Objetivo del proyecto

El objetivo es aplicar los conocimientos adquiridos de React
desarrollando una aplicación que combine:

``` text
React
+
React Router
+
Zustand
+
CRUD
+
API
+
Async/Await
+
Tailwind CSS
```

La aplicación simula un sistema de control de facturas que permite
administrar registros y detectar posibles duplicados para facilitar su
revisión.
