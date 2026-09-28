import { Routes, Route } from 'react-router'

// Importar componentes
import Header from './components/Header'

// Importar páginas
import Dashboard from './pages/Dashboard'
import Facturas from './pages/Facturas'
import FacturaDetalle from './pages/FacturaDetalle'
import Duplicados from './pages/Duplicados'

const App = () => {

  return (
    <div>

      {/* COMPONENT */}
      <Header />

      {/* ROUTES - Contenedor de las rutas */}
      <Routes>

        {/* Página principal */}
        <Route
          path="/"
          element={<Dashboard />}
        />

        {/* Listado de facturas */}
        <Route
          path="/facturas"
          element={<Facturas />}
        />

        {/* Detalle de una factura */}
        <Route
          path="/facturas/:id"
          element={<FacturaDetalle />}
        />

        {/* Facturas posiblemente duplicadas */}
        <Route
          path="/duplicados"
          element={<Duplicados />}
        />

      </Routes>

    </div>
  )
}

export default App