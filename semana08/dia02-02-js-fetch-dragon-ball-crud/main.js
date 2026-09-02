const API_URL = 'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/dragon-ball-crud'


//----------------------Cargar Personajes--------------------------

const cargarPersonajes = async () => {
      // Mostrar indicador de carga
  document.querySelector('#loading').classList.toggle('hidden')

  // Consultar la API
  const respuesta = await fetch(API_URL)

  // Convertir la respuesta a JavaScript
  const data = await respuesta.json()

  // Ocultar indicador de carga
  document.querySelector('#loading').classList.toggle('hidden')

  // Mostrar los corredores
  renderPersonajes(data)
}
