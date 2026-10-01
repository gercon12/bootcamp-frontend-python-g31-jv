import { NavLink } from 'react-router'

const Header = () => {

  // Clases para los botones de navegación
  const navClass = ({ isActive }) => {

    return isActive
      ? 'bg-blue-600 text-white px-4 py-2 rounded-lg'
      : 'text-gray-300 px-4 py-2 rounded-lg '
  }

  return (
    <header className="bg-gradient-to-r from-black to-blue-800 border-b border-gray-200">

      <div className="max-w-6xl mx-auto p-6 flex justify-between items-center">

        {/* Título */}
        <h1 className="text-2xl font-bold text-amber-50">
          Control de Facturas
        </h1>

        {/* Navegación */}
        <nav className="flex gap-2">

          <NavLink
            to="/"
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