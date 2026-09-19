import Footer from "./components/Footer"
import Form from "./components/Form"
import Header from "./components/Header"
import List from "./components/List"

const App = () => {
  return (
    <div className="bg-white text-neutral-900 min-h-screen">

      <main className="max-w-2xl mx-auto px-6 py-16">

        <Header />

        <div className="flex gap-4">

          <Form />

          <List />

        </div>

      </main>

      <Footer />
    </div>
  )
}

export default App