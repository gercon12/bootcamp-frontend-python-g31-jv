import { Link } from 'react-router'

const FacturaCard = ({ factura }) => {

  return (
    <article className="border border-gray-200 rounded-lg p-4 shadow-sm">

      {/* Número de factura */}
      <h3 className="text-xl font-bold">
        {factura.numeroFactura}
      </h3>

      {/* Datos de la factura */}
      <p>
        <span className="font-semibold">Cliente:</span> {factura.cliente}
      </p>

      <p>
        <span className="font-semibold">NIT:</span> {factura.nit}
      </p>

      <p>
        <span className="font-semibold">Fecha:</span> {factura.fecha}
      </p>

      <p>
        <span className="font-semibold">Total:</span> Q {factura.total}
      </p>

      <p>
        <span className="font-semibold">Estado:</span> {factura.estado}
      </p>

      {/* Ir al detalle de la factura */}
      <Link
        to={`/facturas/${factura.id}`}
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Ver detalle
      </Link>

    </article>
  )
}

export default FacturaCard