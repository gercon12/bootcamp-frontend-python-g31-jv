//------- Importamos useState para manejar los estados
import { useState } from 'react'

const App = () => {

  //------- Estados iniciales para peso y altura
  const [peso, setPeso] = useState(70)
  const [altura, setAltura] = useState(175)


  //------- Actualiza el peso cuando movemos el rango
  const handlePeso = (event) => {
    // console.log(event.target.value)
    setPeso(event.target.value)
  }


  //------- Actualiza la altura cuando movemos el rango
  const handleAltura = (event) => {
    // console.log(event.target.value)
    setAltura(event.target.value)
  }


  //------- Calcula el IMC usando peso y altura
  const imc = peso / ((altura / 100) ** 2)


  //------- Deja el resultado del IMC con 2 decimales
  const imcDecimal = imc.toFixed(2)


  //------- Forma anterior de clasificar el resultado del IMC
  // let imcResultado = ''

  // if (imcDecimal < 18.5) {
  //   imcResultado = 'Bajo peso'

  // } else if (imcDecimal < 25) {
  //   imcResultado = 'Peso Saludable'

  // } else if (imcDecimal < 30) {
  //   imcResultado = 'Sobrepeso'

  // } else {
  //   imcResultado = 'Obeso'
  // }


  //------- Función que clasifica el IMC
  const imcResultado = () => {

    if (imcDecimal < 18.5) return 'Bajo peso'

    if (imcDecimal < 25) return 'Peso saludable'

    if (imcDecimal < 30) return 'Sobrepeso'

    return 'Obeso'
  }


  // TODO: Actualicen la altura en la etiqueta del rango "Altura: 0 cm" usando el estado altura.

  return (
    <section className="w-100 bg-slate-200 p-4 mt-8 mx-auto rounded-md">
      <h1 className="text-3xl text-sky-600 text-center font-bold">IMC APP</h1>

      <div className="pt-4">
        <h3 className="font-bold">Peso: {peso} kg</h3>
        <input
          type="range"
          min="50"
          max="200"
          className="w-full"
          onChange={handlePeso}
        />
      </div>

      <div className="pt-4">
        <h3 className="font-bold">Altura: {altura} cm</h3>
        <input
          type="range"
          min="50"
          max="200"
          className="w-full"
          onChange={handleAltura}
        />
      </div>

      <p className="font-bold mt-4">Tu IMC es {imcDecimal}</p>

      <p className="font-bold text-2xl">ESTADO de IMC: {imcResultado()}</p>

      <p>
        {/*Renderizado condicional - NO es recomendable pero se puede usar*/}
        {imcDecimal < 18.5 && 'Bajo Peso'}
        {imcDecimal >= 18.5 && imcDecimal < 25 && 'Peso Saludable'}
        {imcDecimal >= 25 && imcDecimal < 30 && 'Sobrepeso'}
        {imcDecimal >= 30 && 'Obesidad'}
      </p>
    </section>
  )
}

export default App