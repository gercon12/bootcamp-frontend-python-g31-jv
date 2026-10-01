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
  const [filtro, setFiltro] = useState('numeroFactura')

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

    <main className="max-w-6xl mx-auto p-4 sm:p-6">

      {/* Encabezado */}
      <div className="mb-6 sm:mb-8">

        <h2 className="text-2xl sm:text-3xl font-bold">
          Facturas
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-600">
          Administración y búsqueda de facturas.
        </p>

      </div>


      {/* BLOQUE 1 - Ingreso de factura */}
      <section
        id="formulario-factura"
        className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm"
      >

        <FacturaForm />

      </section>


      {/* BLOQUE 2 - Búsqueda */}
      <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mt-4 sm:mt-6">

        <div className="mb-5">

          <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
            Búsqueda de facturas
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Busca y filtra las facturas registradas.
          </p>

        </div>

        <FacturaFilter
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          filtro={filtro}
          setFiltro={setFiltro}
        />

      </section>


      {/* BLOQUE 3 - Listado */}
      <section className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 mt-4 sm:mt-6">

        <div className="mb-5">

          <h3 className="text-xl sm:text-2xl font-bold text-blue-900">
            Facturas registradas
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Consulta las facturas almacenadas en el sistema.
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


        {/* Listado */}
        {!loading && !error && (
          <FacturaList facturas={facturasFiltradas} />
        )}

      </section>

    </main>

  )
}

export default Facturas