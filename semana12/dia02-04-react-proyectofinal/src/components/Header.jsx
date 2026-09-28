import { NavLink } from 'react-router'

const Header = () => {

  return (
    <header className="bg-slate-900 text-white p-4 h-18">

      <div className="max-w-6xl mx-auto flex items-center justify-between">

        <h1 className="text-xl font-bold">
          Control de Facturas
        </h1>

        <nav className="flex gap-6">

          <NavLink
            to="/"
            className="hover:text-blue-400 text-2xl"
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/facturas"
            className="hover:text-blue-400 text-2xl"
          >
            Facturas
          </NavLink>

          <NavLink
            to="/duplicados"
            className="hover:text-blue-400 text-2xl"
          >
            Duplicados
          </NavLink>

        </nav>

      </div>

    </header>
  )
}

export default Header