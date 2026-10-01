import { NavLink } from 'react-router'

const Header = () => {

  // Clases para los botones de navegación
  const navClass = ({ isActive }) => {

    return isActive
      ? 'bg-blue-600 text-white px-3 py-2 rounded-lg text-sm sm:px-4 sm:text-base'
      : 'text-gray-300 px-3 py-2 rounded-lg text-sm sm:px-4 sm:text-base hover:bg-white/10'
  }

  return (
    <header className="bg-gradient-to-r from-black to-blue-800 border-b border-gray-200">

      <div className="max-w-6xl mx-auto p-4 sm:p-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        {/* Título */}
        <h1 className="text-xl sm:text-2xl font-bold text-amber-50 text-center md:text-left">
          Control de Facturas
        </h1>

        {/* Navegación */}
        <nav className="flex flex-wrap justify-center gap-2">

          <NavLink
            to="/"
            end
            className={navClass}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/facturas"
            className={navClass}
          >
            Facturas
          </NavLink>

          <NavLink
            to="/duplicados"
            className={navClass}
          >
            Duplicados
          </NavLink>

          <NavLink
            to="/acerca-de"
            className={navClass}
          >
            Acerca de
          </NavLink>

        </nav>

      </div>

    </header>
  )
}

export default Header