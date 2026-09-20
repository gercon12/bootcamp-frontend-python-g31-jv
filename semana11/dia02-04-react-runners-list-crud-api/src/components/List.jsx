// Recibir datos y funciones desde App.jsx mediante props
const List = ({ corredores, setCorredorEditar, deleteCorredor, loading }) => {

  return (
    <section className="w-full">

      {/* ---------------- ENCABEZADO DE LA LISTA ---------------- */}

      <div className="flex items-center justify-between mb-4">

        <h2 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          Lista de salida
        </h2>

        <div className="h-px flex-1 bg-neutral-200 mx-4"></div>

      </div>


      {/* ---------------- LISTA DE CORREDORES ---------------- */}

      <ul className="space-y-3 mb-4">

        {/* Recorrer el arreglo de corredores */}
        {corredores.map(corredor => {

          return (

            // Crear un elemento li por cada corredor
            <li
              key={corredor.id}
              className="flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors"
            >

              {/* Mostrar dorsal */}
              <div className="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">

                <span className="font-mono text-base font-medium">
                  {corredor.dorsal}
                </span>

              </div>


              {/* Mostrar datos del corredor */}
              <div className="flex-1 min-w-0">

                {/* Nombre */}
                <p className="text-sm font-medium truncate">
                  {corredor.nombre}
                </p>

                <div className="flex items-center gap-2 mt-1">

                  {/* Categoría */}
                  <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
                    {corredor.categoria}
                  </span>

                  {/* Edad */}
                  <span className="text-xs text-neutral-400">
                    {corredor.edad} años
                  </span>

                </div>

              </div>


              {/* ---------------- BOTONES ---------------- */}

              <div className="flex items-center gap-3 shrink-0">

                {/* Seleccionar corredor para editar */}
                <button
                  onClick={() => setCorredorEditar(corredor)}
                  className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  Editar
                </button>

                {/* Eliminar corredor por su id */}
                <button
                  onClick={() => deleteCorredor(corredor.id)}
                  className="text-xs text-neutral-400 hover:text-red-500 transition-colors"
                >
                  Eliminar
                </button>

              </div>

            </li>
          )
        })}

      </ul>


      {/* ---------------- MENSAJE DE CARGA ---------------- */}

      {/* Mostrar solamente cuando loading es true */}
      {loading && (

        <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest py-10 text-center">
          Cargando corredores...
        </p>

      )}

    </section>
  )
}

export default List