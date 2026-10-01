const FacturaFilter = ({
  busqueda,
  setBusqueda,
  filtro,
  setFiltro
}) => {

  // Obtener placeholder según el filtro
  const placeholderBusqueda = () => {

    if (filtro === 'numeroFactura') {
      return 'Ej. FAC-001'
    }

    if (filtro === 'cliente') {
      return 'Ej. Empresa ABC'
    }

    if (filtro === 'nit') {
      return 'Ej. 1111111-1'
    }

    return 'Buscar...'
  }


  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

      {/* Seleccionar filtro */}
      <select
        value={filtro}
        onChange={(event) => setFiltro(event.target.value)}
        className="w-full sm:w-auto border border-gray-300 rounded-lg px-3 py-2"
      >
        <option value="numeroFactura">
          No. de factura
        </option>

        <option value="cliente">
          Cliente
        </option>

        <option value="nit">
          NIT
        </option>

        <option value="total">
          Total
        </option>

        <option value="estado">
          Estado
        </option>
      </select>


      {/* Caja de búsqueda */}
      <input
        type="text"
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
        placeholder={placeholderBusqueda()}
        className="w-full min-w-0 border border-gray-300 rounded-lg px-3 py-2 sm:flex-1"
      />

    </div>
  )
}

export default FacturaFilter