import { useEffect, useState } from 'react'
import { useFacturasStore } from '../store/facturasStore'

const FacturaForm = () => {

  // STORE - STATE y ACTIONS
  const {
    addFactura,
    editFactura,
    facturaEditar,
    setFacturaEditar
  } = useFacturasStore()

  // STATE LOCAL - Datos del formulario
  const [form, setForm] = useState({
    cliente: '',
    nit: '',
    numeroFactura: '',
    fecha: '',
    total: '',
    estado: 'Activa'
  })

  // EFFECT - Cargar factura seleccionada
  useEffect(() => {

    if (facturaEditar) {

      setForm({
        cliente: facturaEditar.cliente,
        nit: facturaEditar.nit,
        numeroFactura: facturaEditar.numeroFactura,
        fecha: facturaEditar.fecha,
        total: facturaEditar.total,
        estado: facturaEditar.estado
      })

    }

  }, [facturaEditar])

  // EVENT - Actualizar campos
  const handleChange = (event) => {

    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  // Limpiar formulario
  const clearForm = () => {

    setForm({
      cliente: '',
      nit: '',
      numeroFactura: '',
      fecha: '',
      total: '',
      estado: 'Activa'
    })
  }

  // EVENT - Enviar formulario
  const handleSubmit = async (event) => {

    event.preventDefault()

    // Datos de la factura
    const factura = {
      ...form,
      total: Number(form.total)
    }

    // UPDATE
    if (facturaEditar) {

      await editFactura(
        facturaEditar.id,
        factura
      )

    } else {

      // CREATE
      await addFactura(factura)

    }

    // Limpiar formulario
    clearForm()
  }

  return (
    <section className="mt-8">

      <h3 className="text-2xl font-bold mb-4">
        {facturaEditar
          ? 'Editar factura'
          : 'Nueva factura'
        }
      </h3>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >

        {/* Cliente */}
        <input
          type="text"
          name="cliente"
          placeholder="Cliente"
          value={form.cliente}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        {/* NIT */}
        <input
          type="text"
          name="nit"
          placeholder="NIT"
          value={form.nit}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        {/* Número de factura */}
        <input
          type="text"
          name="numeroFactura"
          placeholder="No. Factura"
          value={form.numeroFactura}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        {/* Fecha */}
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        {/* Total */}
        <input
          type="number"
          name="total"
          placeholder="Total"
          value={form.total}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-lg px-4 py-2"
        />

        {/* Estado */}
        <select
          name="estado"
          value={form.estado}
          onChange={handleChange}
          className="border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="Activa">Activa</option>
          <option value="Anulada">Anulada</option>
        </select>

        {/* Guardar / Actualizar */}
        <button
          type="submit"
          className="w-48 md:col-span-2 justify-self-center bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
        >
          {facturaEditar
            ? 'Actualizar factura'
            : 'Guardar factura'
          }
        </button>

        {/* Cancelar edición */}
        {facturaEditar && (
          <button
            type="button"
            onClick={() => {
              setFacturaEditar(null)
              clearForm()
            }}
            className="w-48 md:col-span-2 justify-self-center border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100"
          >
            Cancelar edición
          </button>
        )}

      </form>

    </section>
  )
}

export default FacturaForm