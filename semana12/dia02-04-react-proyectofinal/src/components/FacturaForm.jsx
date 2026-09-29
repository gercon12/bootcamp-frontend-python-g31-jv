import { useState } from 'react'
import { useFacturasStore } from '../store/facturasStore'

const FacturaForm = () => {

  // STORE - ACTION para crear factura
  const { addFactura } = useFacturasStore()

  // STATE LOCAL - Datos del formulario
  const [form, setForm] = useState({
    cliente: '',
    nit: '',
    numeroFactura: '',
    fecha: '',
    total: '',
    estado: 'Activa'
  })

  // EVENT - Actualizar campos del formulario
  const handleChange = (event) => {

    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value
    })
  }

  // EVENT - Enviar formulario
  const handleSubmit = async (event) => {

    event.preventDefault()

    // Crear nueva factura
    await addFactura({
      ...form,
      total: Number(form.total)
    })

    // Limpiar formulario
    setForm({
      cliente: '',
      nit: '',
      numeroFactura: '',
      fecha: '',
      total: '',
      estado: 'Activa'
    })
  }

  return (
    <section className="mt-8">

      <h3 className="text-2xl font-bold mb-4">
        Nueva factura
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

        {/* Botón guardar */}
        <button
          type="submit"
          className="w-40 md:col-span-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 justify-self-center"
        >
          Guardar factura
        </button>

      </form>

    </section>
  )
}

export default FacturaForm