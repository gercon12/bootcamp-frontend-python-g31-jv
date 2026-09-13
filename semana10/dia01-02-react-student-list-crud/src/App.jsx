import { useState } from "react"
import Swal from "sweetalert2"

const App = () => {

  //Datos iniciales de estudiantes
  const DEFAULT_STUDENTS = [
    {
      id: "1",
      name: "German",
      city: "El Progreso"
    },
    {
      id: "2",
      name: "Goku",
      city: "Lima"
    },
    {
      id: "3",
      name: "Vegeta",
      city: "Trujillo"
    }
  ]


  //Guardar la lista de estudiantes
  const [students, setStudents] = useState(DEFAULT_STUDENTS)


  //Guardar los datos del formulario
  const [form, setForm] = useState({
    id: "",
    name: "",
    city: ""
  })


  //Guardar o actualizar estudiante
  const handleSave = (event) => {

    //Evitar que el formulario recargue la página
    event.preventDefault()

    console.log("Guardando....")


    //Actualizar estudiante si existe un id
    if (form.id) {

      //Recorrer todos los estudiantes
      const updateStudents = students.map(student => {

        //Buscar el estudiante por su id
        if (student.id === form.id) {

          //Copiar el estudiante y actualizar sus datos
          return {
            ...student,
            name: form.name,
            city: form.city
          }
        }

        //Dejar los demás estudiantes sin cambios
        return student
      })


      //Actualizar la lista de estudiantes
      setStudents(updateStudents)


      //Limpiar formulario
      setForm({
        id: "",
        name: "",
        city: ""
      })

      //Terminar la función
      return
    }


    //Crear un nuevo estudiante
    const newStudent = {

      //Crear un id único
      id: crypto.randomUUID(),

      //Tomar datos del formulario
      name: form.name,
      city: form.city
    }


    //Agregar el nuevo estudiante a la lista
    setStudents([
      ...students,
      newStudent
    ])


    //Limpiar formulario
    setForm({
      id: "",
      name: "",
      city: ""
    })
  }


  //Capturar cambios de los inputs
  const handleChange = (event) => {

    //Obtener nombre y valor del input
    const { name, value } = event.target

    //Actualizar el campo correspondiente del formulario
    setForm({
      ...form,
      [name]: value
    })
  }


  //Eliminar estudiante
  const handleDelete = (id) => {

    console.log("Eliminando", id)

    //Mostrar mensaje de confirmación
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {

      //Verificar si confirmó la eliminación
      if (result.isConfirmed) {

        //Crear una lista sin el estudiante seleccionado
        const updatedStudents = students.filter(student => {
          return student.id !== id
        })

        //Actualizar la lista de estudiantes
        setStudents(updatedStudents)
      }
    })
  }


  //Editar estudiante
  const handleEdit = (student) => {

    console.log("Actualizando", student)

    //Cargar los datos del estudiante en el formulario
    setForm({
      id: student.id,
      name: student.name,
      city: student.city
    })
  }


  //Limpiar formulario
  const handleClear = () => {

    setForm({
      id: "",
      name: "",
      city: ""
    })
  }


return (
  <main className="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-4">
    <h1 className="text-2xl text-center text-slate-700 font-bold mb-4"> Student CRUD</h1>

    <form
      className="flex flex-col gap-4 bg-slate-100 p-3 rounded-lg border"
      onSubmit={handleSave}
    >

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-slate-900">Name</span>
        <input
          className="bg-slate-50 border border-slate-300 text-slate-90 text-sm
          rounded-lg w-full px-4 py-2"
          type="text"
          name="name"
          placeholder="Ej. German Contreras"
          required
          onChange={handleChange}
          value={form.name}
        />
      </label>

      <label>
        <span>City</span>
        <input
          className="bg-slate-50 border border-slate-300 text-slate-90 text-sm
          rounded-lg w-full px-4 py-2"
          type="text"
          name="city"
          placeholder="Ej. El Progreso"
          required
          onChange={handleChange}
          value={form.city}
        />
      </label>

      <div className="flex gap-4">
        <input
          className="bg-blue-700 text-white hover:bg-blue-800 font-medium
          rounded-lg text-sm w-full px-4 py-2 text-center cursor-pointer"
          type="submit"
          value="Save"
        />

        <button
          className="bg-slate-500 text-white hover:bg-blue-800 font-medium
          rounded-lg text-sm w-full px-4 py-2 text-center cursor-pointer"
          type="button"
          onClick={handleClear}
          >Clear</button>
          

      </div>
    </form>

    <h2 className="text-center text-slate-700 font-bold my-4">Student List</h2>

    <section className="mt-4 flex flex-col gap-2">
      <div className="flex justify-between items-center gap-2 bg-slate-300 px-4 py-2
          rounded-lg">
        <div className="text-left">Name</div>
        <div className="text-left">city</div>
        <div className="text-left gap-2">Actions</div>
      </div>


      {students.map(student => {
        return (

          <div className="flex justify-between items-center gap-2 bg-slate-200 px-4 py-2
          rounded-lg" key={student.id}>
            <div className="text-left">{student.name}</div>
            <div className="text-left">{student.city}</div>
            <div className="flex gap-2">
              <button onClick={() => handleEdit(student)}>✏</button>
              <button onClick={() => handleDelete(student.id)}>❌</button>
            </div>
          </div>
        )
      })}


      <pre>{JSON.stringify(form, null, 2)}</pre>
      <pre>{JSON.stringify(students, null, 2)}</pre>
    </section>

  </main>
)

}

export default App