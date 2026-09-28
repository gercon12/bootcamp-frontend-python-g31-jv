import { useEffect } from 'react'
import { getFacturas } from '../services/facturasApi'
import { useFacturasStore } from '../store/facturasStore'
import FacturaList from '../components/FacturaList'

const Facturas = () => {

  // STORE - Obtener STATE y ACTION
  const { facturas, setFacturas } = useFacturasStore()

  // Obtener facturas de APIBox
  const fetchFacturas = async () => {

    const data = await getFacturas()

    // ACTION - Actualizar el STATE global
    setFacturas(data)
  }

  // EFFECT - Cargar facturas al iniciar
  useEffect(() => {

    fetchFacturas()

  }, [])

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold">
        Facturas
      </h2>

      <p className="mt-2 text-gray-600">
        Administración y búsqueda de facturas.
      </p>

      <FacturaList facturas={facturas} />

    </main>
  )
}

export default Facturas