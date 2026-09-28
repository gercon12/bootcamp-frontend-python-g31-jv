import FacturaCard from './FacturaCard'

const FacturaList = ({ facturas }) => {

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

      {/* Recorrer las facturas */}
      {facturas.map(factura => (

        // Enviar factura como PROP
        <FacturaCard
          key={factura.id}
          factura={factura}
        />

      ))}

    </section>
  )
}

export default FacturaList