// Detectar posibles facturas duplicadas
export const detectarDuplicados = (facturas = []) => {

  const facturasDuplicadas = facturas.filter((factura, index) => {

    return facturas.some((otraFactura, otroIndex) => {

      // Evitar comparar la factura consigo misma
      if (index === otroIndex) {
        return false
      }

      // Comparar datos de las facturas
      return (
        factura.nit === otraFactura.nit &&
        factura.fecha === otraFactura.fecha &&
        factura.total === otraFactura.total &&
        factura.numeroFactura !== otraFactura.numeroFactura
      )

    })

  })

  return facturasDuplicadas
}