import { Link } from 'react-router'
import { useFacturasStore } from '../store/facturasStore'
import Swal from 'sweetalert2'

const FacturaCard = ({ factura, mostrarAcciones = true }) => {
  // STORE - ACTION para seleccionar factura
  const {
    setFacturaEditar,
    removeFactura
  } = useFacturasStore()

  // EVENT - Eliminar factura
  const handleDelete = async () => {

    // Confirmar eliminación
    const result = await Swal.fire({
      title: '¿Eliminar factura?',
      text: `Se eliminará ${factura.numeroFactura}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    })

    // Verificar confirmación
    if (result.isConfirmed) {

      await removeFactura(factura.id)

      // Mostrar mensaje
      Swal.fire({
        title: 'Factura eliminada',
        text: `${factura.numeroFactura} fue eliminada correctamente`,
        icon: 'success'
      })

    }
  }

// EVENT - Editar factura
const handleEditar = () => {

  // Seleccionar factura
  setFacturaEditar(factura)

  // Ir al formulario
  document
    .getElementById('formulario-factura')
    ?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
}

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

      <div className="flex gap-2">

        {/* Mostrar acciones solo cuando están permitidas */}
        {mostrarAcciones && (
          <>
            <button
              // onClick={() => setFacturaEditar(factura)}
               onClick={handleEditar}
              className="mt-4 bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Editar
            </button>

            <button
              onClick={handleDelete}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500"
            >
              Eliminar
            </button>
          </>
        )}

        {/* Ver detalle siempre disponible */}
        <Link
          to={`/facturas/${factura.id}`}
          className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Ver detalle
        </Link>

      </div>
    </article>
  )
}

export default FacturaCard