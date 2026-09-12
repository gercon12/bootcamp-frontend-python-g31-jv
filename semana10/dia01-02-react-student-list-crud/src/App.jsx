import { useState } from "react"

const App = () => {
  const DEFAULT_STUDENTS = [
    {
      id: '1',
      name: 'German',
      city: 'El Progreso'
    },
    {
      id: '2',
      name: 'Goku',
      city: 'Lima'
    },
    {
      id: '2',
      name: 'vegeta',
      city: 'Trujillo'
    }
  ]


  const [students, setStudents] = useState(DEFAULT_STUDENTS)
  const [form, setForm] = useState({
    id: '',
    name: '',
    city: ''

  })

  const handleSave = (event) => {
    event.preventDefault()
    console.log('Guardando....')

    const newStudent = {
      id: crypto.randomUUID(),
      name: form.name,
      city: form.city
    }

    setStudents([...students, newStudent])

    setForm({
      id: '',
      name: '',
      city: ''
    })

  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleDelete =(id) => {
    console.log('eliminando', id)
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
            name="name"
            placeholder="Ej. El Progreso"
            required
            onChange={handleChange}
            value={form.city}
          />
        </label>

        <div>
          <input
            className="bg-blue-700 text-white hover:bg-blue-800 font-medium
          rounded-lg text-sm w-full px-4 py-2 text-center cursor-pointer"
            type="submit"
            value="Save"
          />

          <input
            className="bg-slate-500 text-white hover:bg-blue-800 font-medium
          rounded-lg text-sm w-full px-4 py-2 text-center cursor-pointer"
            type="reset"
            value="Clear" />

        </div>

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
          rounded-lg">
                <div className="text-left">{student.name}</div>
                <div className="text-left">{student.city}</div>
                <div className="flex gap-2">
                  <button>✏</button>
                  <button onClick={() => handleDelete(student.id)}>❌</button>
                </div>
              </div>
            )
          })}


          <pre>{JSON.stringify(form, null, 2)}</pre>
          <pre>{JSON.stringify(students, null, 2)}</pre>

        </section>



      </form>
    </main>
  )

}

export default App