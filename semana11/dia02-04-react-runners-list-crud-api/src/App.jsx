import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"
import Swal from 'sweetalert2'

const App = () => {

  const [corredores, setCorredores] = useState([])

  // Corredor que vamos a editar
  const [corredorEditar, setCorredorEditar] = useState(null)

  const API_URL =
    'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/corredores'


  // Cargar corredores
  const fetchCorredores = async () => {

    const response = await fetch(API_URL)

    return await response.json()
  }


  useEffect(() => {

    fetchCorredores()
      .then(data => setCorredores(data))

  }, [])


  // Crear corredor
  const createCorredor = async (corredor) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(corredor)
    }

    const response = await fetch(API_URL, options)

    const nuevoCorredor = await response.json()

    setCorredores([...corredores, nuevoCorredor])
  }


  // Editar corredor
  const updateCorredor = async (corredor) => {

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(corredor)
    }

    await fetch(`${API_URL}/${corredor.id}`, options)

    const data = await fetchCorredores()

    setCorredores(data)

    setCorredorEditar(null)
  }

// Eliminar corredor
const deleteCorredor = async (id) => {

  const result = await Swal.fire({
    title: "¿Eliminar corredor?",
    text: "Esta acción no se puede deshacer",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  })

  // Si confirma, eliminar
  if (result.isConfirmed) {

    const options = {
      method: 'DELETE'
    }

    await fetch(`${API_URL}/${id}`, options)

    setCorredores(
      corredores.filter(corredor => corredor.id !== id)
    )

    Swal.fire({
      title: "Eliminado",
      text: "El corredor fue eliminado correctamente",
      icon: "success"
    })
  }
}

  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <main className="max-w-2xl mx-auto px-6 py-16">

        <Header corredores={corredores} />

        <div className="flex gap-4">

          <Form
            createCorredor={createCorredor}
            updateCorredor={updateCorredor}
            corredorEditar={corredorEditar}
          />

          <List
            corredores={corredores}
            setCorredorEditar={setCorredorEditar}
            deleteCorredor={deleteCorredor}
          />

        </div>

      </main>

      <Footer />

    </div>
  )
}

export default App