import { useEffect, useState } from "react"

const Form = ({ createCorredor, updateCorredor, corredorEditar }) => {

  // Estado que guarda los datos del formulario
  const [form, setForm] = useState({
    nombre: '',
    edad: '',
    categoria: '',
    dorsal: ''
  })


  // ---------------- CARGAR CORREDOR PARA EDITAR ----------------

  // Se ejecuta cuando cambia corredorEditar
  useEffect(() => {

    // Verificar si existe un corredor seleccionado
    if (corredorEditar) {

      // Cargar los datos del corredor en el formulario
      setForm({
        id: corredorEditar.id,
        nombre: corredorEditar.nombre,
        edad: corredorEditar.edad,
        categoria: corredorEditar.categoria,
        dorsal: corredorEditar.dorsal
      })

    }

  }, [corredorEditar])


  // ---------------- CAPTURAR DATOS ----------------

  // Se ejecuta cada vez que cambia un input
  const handleChange = (event) => {

    // Obtener nombre y valor del input
    const { name, value } = event.target

    // Actualizar solamente el campo que cambió
    setForm({
      ...form,
      [name]: value
    })
  }


  // ---------------- ENVIAR FORMULARIO ----------------

  const handleSubmit = async (event) => {

    // Evitar que la página se recargue
    event.preventDefault()

    // Si existe corredorEditar, actualizar corredor
    if (corredorEditar) {

      await updateCorredor(form)

    } else {

      // Si no existe, crear un corredor
      await createCorredor(form)

    }


    // Limpiar formulario
    setForm({
      nombre: '',
      edad: '',
      categoria: '',
      dorsal: ''
    })
  }


  // ---------------- FORMULARIO ----------------

  return (
    <form
      className="mb-12 border border-neutral-200 rounded-xl p-6"
      onSubmit={handleSubmit}
    >

      <p className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-4">
        inscripción
      </p>

      <div className="flex flex-col gap-4 mb-4">

        {/* Nombre */}
        <label className="block text-xs text-neutral-500 mb-1">
          Nombre completo

          <input
            name="nombre"
            type="text"
            placeholder="Ana Torres"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>


        {/* Edad */}
        <label className="block text-xs text-neutral-500 mb-1">
          Edad

          <input
            name="edad"
            type="number"
            placeholder="28"
            value={form.edad}
            onChange={handleChange}
            required
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          />
        </label>


        {/* Categoría */}
        <label className="block text-xs text-neutral-500 mb-1">
          Categoría

          <select
            name="categoria"
            value={form.categoria}
            onChange={handleChange}
            required
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm outline-none focus:border-neutral-900 transition-colors"
          >
            <option value="">Elegir</option>
            <option value="5K">5K</option>
            <option value="10K">10K</option>
            <option value="21K">21K</option>
            <option value="42K">42K</option>
          </select>
        </label>


        {/* Dorsal */}
        <label className="block text-xs text-neutral-500 mb-1">
          Dorsal

          <input
            name="dorsal"
            type="number"
            placeholder="101"
            value={form.dorsal}
            onChange={handleChange}
            required
            className="w-full border-b border-neutral-200 bg-transparent py-2 text-sm font-mono outline-none focus:border-neutral-900 transition-colors"
          />
        </label>

      </div>


      {/* Botón crear / editar */}
      <div className="flex flex-col items-center gap-4">

        <button
          type="submit"
          className="w-full bg-neutral-900 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-blue-600 transition-colors"
        >
          {corredorEditar ? 'Guardar cambios' : 'Inscribir'}
        </button>

      </div>

    </form>
  )
}

export default Form