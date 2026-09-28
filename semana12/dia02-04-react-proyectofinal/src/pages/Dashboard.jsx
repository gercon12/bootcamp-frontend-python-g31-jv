// const Dashboard = () => {

//   return (
//     <main className="max-w-6xl mx-auto p-6">

//       <h2 className="text-3xl font-bold">
//         Dashboard
//       </h2>

//       <p className="mt-2 text-gray-600">
//         Resumen general de facturas.
//       </p>

//     </main>
//   )
// }

// export default Dashboard


import { useFacturasStore } from '../store/facturasStore'

const Dashboard = () => {

  // STORE - Obtener facturas del STATE global
  const { facturas } = useFacturasStore()

  return (
    <main className="max-w-6xl mx-auto p-6">

      <h2 className="text-3xl font-bold">
        Dashboard
      </h2>

      <p className="mt-2 text-gray-600">
        Resumen general de facturas.
      </p>

      <div className="mt-6 border border-gray-200 rounded-lg p-6">

        <p className="text-gray-500">
          Total de facturas
        </p>

        <p className="text-4xl font-bold">
          {facturas.length}
        </p>

      </div>

    </main>
  )
}

export default Dashboard