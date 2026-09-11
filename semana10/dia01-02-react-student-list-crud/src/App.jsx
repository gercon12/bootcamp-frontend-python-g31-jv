const App = () => {
  return (
    <main className="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-4">
      <h1 className="text-2xl text-center text-slate-700 font-bold mb-4"> Student CRUD</h1>

      <form className="flex flex-col gap-4 bg-slate-100 p-3 rounded-lg border">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">Name</span>
          <input 
          className="bg-slate-50 border border-slate-300 text-slate-90 text-sm
          rounded-lg w-full px-4 py-2"
          type="text" 
          name="name"
          placeholder="Ej. German Contreras"
          required
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

        <h2>Student List</h2>

        <section>
          <div>
            <div>Name</div>
            <div>city</div>
            <div>Actions</div>
          </div>

          <div>
            <div>Studen 1</div>
            <div>El Progreso</div>
            <div>
              <button>✅</button>
              <button>❌</button>
            </div>
          </div>
        </section>



      </form>
    </main>
  )

}

export default App