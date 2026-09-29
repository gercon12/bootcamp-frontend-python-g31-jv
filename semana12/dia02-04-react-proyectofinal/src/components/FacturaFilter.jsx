const FacturaFilter = ({
  busqueda,
  setBusqueda,
  filtro,
  setFiltro
}) => {

  return (
    <section className="mt-6 flex gap-2">

      {/* Seleccionar campo de búsqueda */}
      <select
        value={filtro}
        onChange={(event) => setFiltro(event.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2"
      >

        <option value="cliente">
          Cliente
        </option>

        <option value="nit">
          NIT
        </option>

        <option value="numeroFactura">
          No. Factura
        </option>

        <option value="fecha">
          Fecha
        </option>

        <option value="estado">
          Estado
        </option>

      </select>

      {/* Texto de búsqueda */}
      <input
        type="text"
        placeholder="Buscar factura..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
        className="w-full border border-gray-300 rounded-lg px-4 py-2"
      />

    </section>
  )
}

export default FacturaFilter