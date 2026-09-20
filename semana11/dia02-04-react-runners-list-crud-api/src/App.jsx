import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"
import Swal from 'sweetalert2'

const App = () => {

  // Estado para mostrar el mensaje de carga
  const [loading, setLoading] = useState(false)

  // Estado que guarda todos los corredores
  const [corredores, setCorredores] = useState([])

  // Estado que guarda el corredor seleccionado para editar
  const [corredorEditar, setCorredorEditar] = useState(null)

  // Dirección de la API
  const API_URL =
    'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/corredores'


  // ---------------- GET - CARGAR CORREDORES ----------------

  const fetchCorredores = async () => {

    // Mostrar mensaje de carga
    setLoading(true)

    try {

      // Solicitar corredores a la API
      const response = await fetch(API_URL)

      // Verificar si la petición fue exitosa
      if (!response.ok) {
        throw new Error('Tuvimos problemas al cargar los corredores')
      }

      // Convertir respuesta JSON a JavaScript
      const data = await response.json()

      // Retornar corredores
      return data

    } catch (error) {

      // Mostrar error en consola
      console.log(error)

      // Retornar arreglo vacío si ocurre un error
      return []

    } finally {

      // Ocultar mensaje de carga
      setLoading(false)
    }
  }


  // Ejecutar GET al cargar la aplicación
  useEffect(() => {

    fetchCorredores()
      .then(data => setCorredores(data))

  }, [])


  // ---------------- POST - CREAR CORREDOR ----------------

  const createCorredor = async (corredor) => {

    // Configurar petición POST
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(corredor)
    }

    try {

      // Enviar corredor a la API
      const response = await fetch(API_URL, options)

      // Verificar si la petición fue exitosa
      if (!response.ok) {
        throw new Error('Tuvimos problemas al crear el corredor')
      }

      // Obtener corredor creado
      const nuevoCorredor = await response.json()

      // Agregar nuevo corredor al estado
      setCorredores([...corredores, nuevoCorredor])

      console.log('El corredor se guardó correctamente')

    } catch (error) {

      // Mostrar error en consola
      console.log(error)
    }
  }


  // ---------------- PUT - EDITAR CORREDOR ----------------

  const updateCorredor = async (corredor) => {

    // Configurar petición PUT
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(corredor)
    }

    try {

      // Actualizar corredor por su id
      const response = await fetch(
        `${API_URL}/${corredor.id}`,
        options
      )

      // Verificar si la petición fue exitosa
      if (!response.ok) {
        throw new Error('Tuvimos problemas al actualizar el corredor')
      }

      console.log('El corredor se actualizó correctamente')

      // Volver a cargar corredores
      const data = await fetchCorredores()

      // Actualizar estado
      setCorredores(data)

      // Salir del modo edición
      setCorredorEditar(null)

    } catch (error) {

      // Mostrar error en consola
      console.log(error)
    }
  }


  // ---------------- DELETE - ELIMINAR CORREDOR ----------------

  const deleteCorredor = async (id) => {

    // Preguntar antes de eliminar
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

    // Continuar solamente si confirma
    if (result.isConfirmed) {

      // Configurar petición DELETE
      const options = {
        method: 'DELETE'
      }

      try {

        // Eliminar corredor de la API
        const response = await fetch(
          `${API_URL}/${id}`,
          options
        )

        // Verificar si la petición fue exitosa
        if (!response.ok) {
          throw new Error('Tuvimos problemas al eliminar el corredor')
        }

        // Eliminar corredor del estado
        setCorredores(
          corredores.filter(corredor => corredor.id !== id)
        )

        console.log('El corredor se eliminó correctamente')

        // Mostrar mensaje de éxito
        Swal.fire({
          title: "Eliminado",
          text: "El corredor fue eliminado correctamente",
          icon: "success"
        })

      } catch (error) {

        // Mostrar error en consola
        console.log(error)
      }
    }
  }


  // ---------------- INTERFAZ ----------------

  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <main className="max-w-2xl mx-auto px-6 py-16">

        {/* Mostrar cantidad de corredores */}
        <Header corredores={corredores} />

        <div className="flex gap-4">

          {/* Formulario para crear y editar */}
          <Form
            createCorredor={createCorredor}
            updateCorredor={updateCorredor}
            corredorEditar={corredorEditar}
          />

          {/* Lista de corredores */}
          <List
            corredores={corredores}
            setCorredorEditar={setCorredorEditar}
            deleteCorredor={deleteCorredor}
            loading={loading}
          />

        </div>

      </main>

      <Footer />

    </div>
  )
}

export default App