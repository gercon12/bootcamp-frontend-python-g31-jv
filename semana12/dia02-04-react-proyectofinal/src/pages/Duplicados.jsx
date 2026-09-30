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
    <main className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold">
        Posibles duplicados
      </h2>

      <p className="mt-2 text-gray-600">
        Facturas con coincidencias que requieren revisión.
      </p>

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
        <p className="mt-6 text-gray-500">
          No se encontraron posibles facturas duplicadas.
        </p>
      )}

    </main>
  )
}

export default Duplicados