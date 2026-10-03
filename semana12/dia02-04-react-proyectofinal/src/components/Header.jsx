import { NavLink } from 'react-router'
import logoVosmedia from '../assets/logo-vosmedia.png'

const Header = () => {

  // Clases para los botones de navegación
  const navClass = ({ isActive }) => {

    return isActive
      ? 'bg-blue-600 text-white px-3 py-2 rounded-lg text-sm sm:px-4 sm:text-base'
      : 'text-gray-300 px-3 py-2 rounded-lg text-sm sm:px-4 sm:text-base hover:bg-white/10'
  }

  return (
    <header className="bg-gradient-to-r from-black to-blue-800 border-b border-gray-200">

      <div className="max-w-6xl mx-auto p-4 sm:p-6">

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

          {/* Logo y título */}
          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Logo */}
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={logoVosmedia}
                alt="Logo VOSMEDIA"
                className="h-12 sm:h-14 w-auto object-contain"
              />
            </div>

            {/* Título */}
            <h1 className="text-xl sm:text-2xl font-bold text-amber-50 text-center md:text-left">
              Control de Facturas
            </h1>

          </div>

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

      </div>

    </header>
  )
}

export default Header