import FacturaCard from './FacturaCard'

const FacturaList = ({
  facturas,
  mostrarAcciones = true
}) => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

      {/* Recorrer las facturas */}
      {facturas.map(factura => (

        <FacturaCard
          key={factura.id}
          factura={factura}
          mostrarAcciones={mostrarAcciones}
        />

      ))}

    </section>
  )
}

export default FacturaList