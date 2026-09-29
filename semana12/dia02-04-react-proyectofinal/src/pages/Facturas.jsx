import { useEffect, useState } from 'react'
import { useFacturasStore } from '../store/facturasStore'
import FacturaList from '../components/FacturaList'
import FacturaFilter from '../components/FacturaFilter'
import Loading from '../components/Loading'
import FacturaForm from '../components/FacturaForm'

const Facturas = () => {

  // STORE - STATE global y ACTION
  const {
    facturas,
    fetchFacturas,
    loading,
    error
  } = useFacturasStore()

  // STATE LOCAL - Texto del buscador
  const [busqueda, setBusqueda] = useState('')

  // STATE LOCAL - Campo utilizado para buscar
  const [filtro, setFiltro] = useState('cliente')

  // EFFECT - Cargar facturas
  useEffect(() => {

    fetchFacturas()

  }, [])

  // Filtrar facturas
  const facturasFiltradas = facturas.filter(factura => {

    return String(factura[filtro])
      .toLowerCase()
      .includes(busqueda.toLowerCase())

  })

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold">
        Facturas
      </h2>

      <p className="mt-2 text-gray-600">
        Administración y búsqueda de facturas.
      </p>

      {/* Formulario ingreso factura */}
      <FacturaForm />


      {/* Filtros */}
      <FacturaFilter
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        filtro={filtro}
        setFiltro={setFiltro}
      />

      {/* Loading */}
      {loading && <Loading />}

      {/* Error */}
      {error && (
        <p className="mt-6 text-red-600">
          {error}
        </p>
      )}

      {/* Listado */}
      {!loading && !error && (
        <FacturaList facturas={facturasFiltradas} />
      )}

    </main>
  )
}

export default Facturas