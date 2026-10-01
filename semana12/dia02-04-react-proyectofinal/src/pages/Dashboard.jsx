import { useEffect } from 'react'
import { useFacturasStore } from '../store/facturasStore'
import Loading from '../components/Loading'
import { detectarDuplicados } from '../utils/detectarDuplicados'

const Dashboard = () => {

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

  // Filtrar facturas activas
  const facturasActivas = facturas.filter(factura =>
    factura.estado === 'Activa'
  )

  // Filtrar facturas anuladas
  const facturasAnuladas = facturas.filter(factura =>
    factura.estado === 'Anulada'
  )

  // Detectar posibles duplicados
  const facturasDuplicadas = detectarDuplicados(facturas)

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6">

      {/* Encabezado */}
      <h2 className="text-2xl sm:text-3xl font-bold">
        Dashboard
      </h2>

      <p className="mt-2 text-sm sm:text-base text-gray-600">
        Gestión de facturas y control de facturas duplicadas para evitar
        pagar impuestos en facturas que requieren anulación.
      </p>

      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      {error && (
        <p className="mt-6 text-red-600">
          {error}
        </p>
      )}

      {/* Indicadores */}
      {!loading && !error && (

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 sm:mt-8">

          {/* Total */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm bg-white">

            <p className="text-sm sm:text-base text-gray-500">
              Total de facturas
            </p>

            <p className="text-3xl sm:text-4xl font-bold mt-2">
              {facturas.length}
            </p>

          </div>

          {/* Activas */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm bg-white">

            <p className="text-sm sm:text-base text-gray-500">
              Facturas activas
            </p>

            <p className="text-3xl sm:text-4xl font-bold mt-2">
              {facturasActivas.length}
            </p>

          </div>

          {/* Anuladas */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm bg-white">

            <p className="text-sm sm:text-base text-gray-500">
              Facturas anuladas
            </p>

            <p className="text-3xl sm:text-4xl font-bold mt-2">
              {facturasAnuladas.length}
            </p>

          </div>

          {/* Posibles duplicados */}
          <div className="border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm bg-white">

            <p className="text-sm sm:text-base text-gray-500">
              Posibles duplicados
            </p>

            <p className="text-3xl sm:text-4xl font-bold mt-2 text-red-600">
              {facturasDuplicadas.length}
            </p>

          </div>

        </section>

      )}

    </main>
  )
}

export default Dashboard