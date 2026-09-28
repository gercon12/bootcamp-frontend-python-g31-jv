import { useParams } from 'react-router'

const FacturaDetalle = () => {

  // HOOK - Obtener parámetros de la URL
  const { id } = useParams()

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold">
        Detalle de factura
      </h2>

      <p className="mt-2">
        ID de factura: {id}
      </p>

    </main>
  )
}

export default FacturaDetalle