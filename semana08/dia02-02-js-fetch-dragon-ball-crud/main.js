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

//----------------------Renderizar Personajes--------------------------

const renderPersonajes = (personajes = []) => {

  // Seleccionar la lista donde se mostrarán los personajes
  const lista = document.querySelector('#lista')

  //limpiar lista antes de mostrar los datos
  lista.innerHTML = ''

  // Actualizar el contador de personajes
  const contador = document.querySelector('#contador')
  contador.textContent = personajes.length

  // Recorrer cada personaje
  personajes.forEach(personaje => {

    // Crear elemento <li>
    const li = document.createElement('li')

    // Agregar estilos al elemento
    li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors'

   
//Validar el género del personaje y asignar la clase correspondiente
    const gender =  personaje.gender.toLowerCase()
    let genderClass = ''
    
    if (gender === 'male') { 
      genderClass = 'text-green-600 border border-green-600 px-1.5 py-0.5 rounded bg-green-50'
  } else if (gender === 'female') {
    genderClass = 'text-pink-600 border border-pink-600 px-1.5 py-0.5 rounded bg-pink-50'
  }

  //Validar la raza del personaje y asignar la clase correspondiente
  const race = personaje.race.toLowerCase()
  let raceClass = ''

  if (race === 'saiyan') {
    raceClass = 'text-blue-600 border border-blue-600 px-1.5 py-0.5 rounded bg-blue-50'
  } else if (race === 'human') {
    raceClass = 'text-orange-600 border border-orange-600 px-1.5 py-0.5 rounded bg-orange-50'
  }


   // Crear el contenido del personaje
  li.innerHTML = `


      <div class="shrink-0 w-22 h-22 overflow-hidden rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
        <span class="font-mono text-base font-medium">${personaje.name}</span>
        <img src="${personaje.image}" alt="${personaje.name}" class="w-full h-full object-cover object-[50%_5%]">
      </div>

      <div class="flex-1 min-w-0">
        <p class="text-sm font-bold truncate">${personaje.name}</p>
        <div class="flex items-center gap-2 mt-1">
          <span class="${raceClass} text-[16px] font-mono px-1.5 py-0.5 rounded">${personaje.race}</span>
          <span class="${genderClass} text-[16px] font-mono px-1.5 py-0.5 rounded">${personaje.gender}</span>
        </div>
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <button data-action="editar" data-id="${personaje.id}" class="text-xs text-blue-600 hover:text-blue-700 transition-colors border border-blue-600 rounded-lg px-6 py-2">
          Editar
        </button>
        <button data-action="eliminar" data-id="${personaje.id}" class="text-xs text-red-500 hover:text-red-700 transition-colors border border-red-500 rounded-lg px-6 py-2">
          Eliminar
        </button>
      </div>
    `
  lista.appendChild(li)
})
}

cargarPersonajes()