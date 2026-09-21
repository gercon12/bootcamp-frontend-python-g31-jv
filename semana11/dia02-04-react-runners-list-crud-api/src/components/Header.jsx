// Recibir el arreglo de corredores desde App.jsx
const Header = ({ corredores }) => {

    return (

        // Encabezado principal
        <header className="mb-10 flex items-end justify-between gap-6">

            {/* Título */}
            <div>
                <p className="font-mono text-xs text-blue-600 tracking-widest uppercase mb-1">
                    Maratón G31 - 2026
                </p>

                <h1 className="text-3xl font-semibold tracking-tight">
                    Corredores
                </h1>
            </div>


            {/* Contador de corredores */}
            <div className="text-right shrink-0">

                {/* Mostrar cantidad de corredores */}
                <p
                    id="contador"
                    className="text-3xl font-semibold leading-none"
                >
                    {corredores.length}
                </p>

                <p className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest">
                    inscritos
                </p>

            </div>

        </header>
    )
}

export default Header