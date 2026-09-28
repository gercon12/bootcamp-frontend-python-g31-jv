import { useEffect, useState } from 'react'
import { getFacturas } from '../services/facturasApi'
import FacturaList from '../components/FacturaList'

const Facturas = () => {

  // STATE - Guardar las facturas
  const [facturas, setFacturas] = useState([])

  // Obtener facturas de APIBox
  const fetchFacturas = async () => {

    const data = await getFacturas()

    // Actualizar el STATE
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

      {/* Enviar facturas como PROP */}
      <FacturaList facturas={facturas} />

    </main>
  )
}

export default Facturas