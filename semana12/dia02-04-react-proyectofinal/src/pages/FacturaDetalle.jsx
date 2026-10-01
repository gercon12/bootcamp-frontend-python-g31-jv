import { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { useFacturasStore } from '../store/facturasStore'
import Loading from '../components/Loading'

const FacturaDetalle = () => {

  // HOOK - Obtener id de la URL
  const { id } = useParams()

  // STORE - STATE y ACTION
  const {
    facturas,
    fetchFacturas,
    loading,
    error
  } = useFacturasStore()

  // EFFECT - Cargar facturas
  useEffect(() => {

    fetchFacturas()

  }, [])

  // Buscar factura por id
  const factura = facturas.find(factura =>
    factura.id === id
  )

  // Mostrar loading
  if (loading) {
    return (
      <main className="max-w-6xl mx-auto p-4 sm:p-6">
        <Loading />
      </main>
    )
  }

  // Mostrar error
  if (error) {
    return (
      <main className="max-w-6xl mx-auto p-4 sm:p-6">

        <p className="text-red-600">
          {error}
        </p>

      </main>
    )
  }

  // Factura no encontrada
  if (!factura) {
    return (
      <main className="max-w-6xl mx-auto p-4 sm:p-6">

        <p className="text-gray-600">
          Factura no encontrada.
        </p>

        <Link
          to="/facturas"
          className="inline-block mt-4 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Volver
        </Link>

      </main>
    )
  }

  // Productos de la factura
  const productos = factura.productos || []

  // Calcular total de productos
  const totalCalculado = productos.reduce(
    (total, producto) => {

      return total + producto.precio * producto.cantidad

    },
    0
  )

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6">

      {/* Encabezado */}
      <div className="flex justify-between items-center gap-4">

        <div>

          <h2 className="text-2xl sm:text-3xl font-bold">
            {factura.numeroFactura}
          </h2>

          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Detalle de factura
          </p>

        </div>

        <Link
          to="/facturas"
          className="shrink-0 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Volver
        </Link>

      </div>

      {/* Información de la factura */}
      <section className="mt-6 sm:mt-8 border border-gray-200 rounded-lg p-4 sm:p-6 bg-white">

        <h3 className="text-lg sm:text-xl font-bold mb-4">
          Información
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm sm:text-base">

          <p>
            <span className="font-semibold">
              Cliente:
            </span>
            {' '}
            {factura.cliente}
          </p>

          <p>
            <span className="font-semibold">
              NIT:
            </span>
            {' '}
            {factura.nit}
          </p>

          <p>
            <span className="font-semibold">
              Fecha:
            </span>
            {' '}
            {factura.fecha}
          </p>

          <p>
            <span className="font-semibold">
              Estado:
            </span>
            {' '}
            {factura.estado}
          </p>

        </div>

      </section>

      {/* Productos */}
      <section className="mt-6 sm:mt-8">

        <h3 className="text-lg sm:text-xl font-bold mb-4">
          Productos
        </h3>

        {/* Scroll horizontal en pantallas pequeñas */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg bg-white">

          <table className="w-full min-w-[700px] border-collapse text-sm sm:text-base">

            {/* Encabezado de tabla */}
            <thead>

              <tr className="bg-gray-100">

                <th className="text-left p-3">
                  Código
                </th>

                <th className="text-left p-3">
                  Producto
                </th>

                <th className="text-right p-3">
                  Precio
                </th>

                <th className="text-center p-3">
                  Cantidad
                </th>

                <th className="text-center p-3">
                  En bodega
                </th>

                <th className="text-right p-3">
                  Subtotal
                </th>

              </tr>

            </thead>

            {/* Productos */}
            <tbody>

              {productos.map(producto => {

                // Calcular subtotal
                const subtotal =
                  producto.precio * producto.cantidad

                return (
                  <tr
                    key={producto.codigo}
                    className="border-t border-gray-200"
                  >

                    <td className="p-3">
                      {producto.codigo}
                    </td>

                    <td className="p-3">
                      {producto.producto}
                    </td>

                    <td className="text-right p-3">
                      Q {producto.precio}
                    </td>

                    <td className="text-center p-3">
                      {producto.cantidad}
                    </td>

                    <td className="text-center p-3">
                      {producto.enBodega}
                    </td>

                    <td className="text-right p-3 font-semibold">
                      Q {subtotal}
                    </td>

                  </tr>
                )
              })}

              {/* Mostrar mensaje si no existen productos */}
              {productos.length === 0 && (

                <tr>

                  <td
                    colSpan="6"
                    className="text-center text-gray-500 p-6"
                  >
                    Esta factura no tiene productos registrados.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </section>

      {/* Totales */}
      <section className="mt-6 flex justify-end">

        <div className="w-full sm:w-80 border border-gray-200 rounded-lg p-4 sm:p-5 bg-white">

          {/* Total calculado */}
          <div className="flex justify-between gap-4">

            <span>
              Total productos:
            </span>

            <span className="font-bold whitespace-nowrap">
              Q {totalCalculado}
            </span>

          </div>

          {/* Total registrado */}
          <div className="flex justify-between gap-4 mt-3">

            <span>
              Total factura:
            </span>

            <span className="font-bold whitespace-nowrap">
              Q {factura.total}
            </span>

          </div>

        </div>

      </section>

    </main>
  )
}

export default FacturaDetalle