import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useEffect } from 'react'

//useEffect: Sirve para decirle a React que despues de mostrar o actualizar un componente
//quiero hacer algo

export default function App() {

  const [count, setCount] = useState(0)

  //console.log('Hola a todos, soy el componente App')

  useEffect(() => {
    //Se ejecuta en cada render
    console.log('El contador cambio', count)
  })

  useEffect(() => {
    //Solo se ejecuta al aparecer el componente por primera vez
    console.log('Imprime esto solamente cuando el componente se monta por primera vez')
  }, [])

  useEffect(() => {
    //Se ejecuta cuando el componente se monta y cuando el contador cambia
    console.log('El contador cambio', count)
  }, [count])


  return (
    <div className="text-3xl font-bold text-gray-400">

      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>


    </div>
  )
}


