import { useEffect } from 'react'
import { useFacturasStore } from '../store/facturasStore'
import { detectarDuplicados } from '../utils/detectarDuplicados'
import FacturaList from '../components/FacturaList'
import Loading from '../components/Loading'

const Duplicados = () => {

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

  // Detectar posibles duplicados
  const facturasDuplicadas = detectarDuplicados(facturas)

  return (
    <main className="max-w-6xl mx-auto p-4 sm:p-6">

      {/* Encabezado */}
      <div className="mb-6 sm:mb-8">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Posibles duplicados
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Facturas con coincidencias que requieren revisión.
        </p>

      </div>

      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      {error && (
        <p className="mt-6 text-red-600">
          {error}
        </p>
      )}

      {/* Posibles duplicados */}
      {!loading && !error && facturasDuplicadas.length > 0 && (
        <FacturaList
          facturas={facturasDuplicadas}
          mostrarAcciones={false}
        />
      )}

      {/* Sin duplicados */}
      {!loading && !error && facturasDuplicadas.length === 0 && (
        <p className="text-gray-500">
          No se encontraron posibles facturas duplicadas.
        </p>
      )}

    </main>
  )
}

export default Duplicados