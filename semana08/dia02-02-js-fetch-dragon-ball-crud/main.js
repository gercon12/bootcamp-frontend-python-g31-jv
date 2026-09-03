//const API_URL = 'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/dragon-ball-crud'

const API_URL = '/.netlify/functions/personajes'

//----------------------Variables--------------------------
let personajes = []
let paginaActual = 1

const personajesPorPagina = 5

const obtenerPersonajesPagina = () => {

  const inicio = (paginaActual - 1) * personajesPorPagina
  const fin = inicio + personajesPorPagina

  return personajes.slice(inicio, fin)
}
//----------------------Cargar Personajes--------------------------

const cargarPersonajes = async () => {

  // Mostrar indicador de carga
  document.querySelector('#loading').classList.toggle('hidden')

  // Consultar la API
  const respuesta = await fetch(API_URL)

  // Convertir la respuesta a JavaScript
  const data = await respuesta.json()

  //obtener personajes
  personajes = data

  //Eliminar ultimo personaje lista
  const totalPaginas = Math.ceil(personajes.length / personajesPorPagina)

  if (paginaActual > totalPaginas) {
    paginaActual = totalPaginas || 1
  }

  // Ocultar indicador de carga
  document.querySelector('#loading').classList.toggle('hidden')

  const personajesPagina = obtenerPersonajesPagina()

  // Mostrar los corredores
  renderPersonajes(personajesPagina)
  renderPaginacion()
}

//----------------------Renderizar Personajes--------------------------

// Funcion para estilo de Genero
function generoFunction(personaje) {
  const genero = personaje.genero.toLowerCase()
  let generoClass = ''

  if (genero === 'male') {
    generoClass = 'text-green-600 border border-green-600 px-1.5 py-0.5 rounded bg-green-50 hover:bg-green-200'
  } else if (genero === 'female') {
    generoClass = 'text-pink-600 border border-pink-600 px-1.5 py-0.5 rounded bg-pink-50 hover:bg-pink-200'
  }
  return generoClass
}

//Funcion para estilo de raza
function razaFunction(personaje) {
  const raza = personaje.raza.toLowerCase()
  let razaClass = ''

  if (raza === 'saiyan') {
    razaClass = 'text-blue-600 border border-blue-600 px-1.5 py-0.5 rounded bg-blue-50 hover:bg-blue-200'
  } else if (raza === 'human') {
    razaClass = 'text-orange-600 border border-orange-600 px-1.5 py-0.5 rounded bg-orange-50 hover:bg-orange-200'
  } else if (raza === 'namekian') {
    razaClass = 'text-purple-600 border border-purple-600 px-1.5 py-0.5 rounded bg-purple-50 hover:bg-purple-200'
  } else if (raza === 'android') {
    razaClass = 'text-gray-600 border border-gray-600 px-1.5 py-0.5 rounded bg-gray-50 hover:bg-gray-200'
  } else if (raza === 'frieza race') {
    razaClass = 'text-red-600 border border-red-600 px-1.5 py-0.5 rounded bg-red-50 hover:bg-red-200'
  } else if (raza === 'majin') {
    razaClass = 'text-yellow-600 border border-yellow-600 px-1.5 py-0.5 rounded bg-yellow-50 hover:bg-yellow-200'
  } else if (raza === 'god') {
    razaClass = 'text-indigo-600 border border-indigo-600 px-1.5 py-0.5 rounded bg-indigo-50 hover:bg-indigo-200'
  } else if (raza === 'unknown') {
    razaClass = 'text-red-800 border border-red-800 px-1.5 py-0.5 rounded bg-red-50 hover:bg-red-200'
  } else if (raza === 'jiren race') {
    razaClass = 'text-brown-800 border border-brown-800 px-1.5 py-0.5 rounded bg-brown-50 hover:bg-brown-200'
  } else if (raza === 'nucleico benigno') {
    razaClass = 'text-teal-600 border border-teal-600 px-1.5 py-0.5 rounded bg-teal-50 hover:bg-teal-200'
  } else if (raza === 'evil') {
    razaClass = 'text-cyan-600 border border-cyan-600 px-1.5 py-0.5 rounded bg-cyan-50 hover:bg-cyan-200'
  } else if (raza === 'nucleico') {
    razaClass = 'text-rose-600 border border-rose-600 px-1.5 py-0.5 rounded bg-rose-50 hover:bg-rose-200'
  }
  return razaClass
}

//Renderizar personajes

// Seleccionar la lista donde se mostrarán los personajes
const lista = document.querySelector('#lista')

const renderPersonajes = (personajesPagina = []) => {

  //limpiar lista antes de mostrar los datos
  lista.innerHTML = ''

  // Actualizar el contador de personajes
  const contador = document.querySelector('#contador')
  //contador.textContent = personajes.length

  const mostrados = Math.min(
    paginaActual * personajesPorPagina,
    personajes.length
  )

  contador.textContent = `${mostrados}/${personajes.length}`


  // Recorrer cada personaje
  personajesPagina.forEach(personaje => {

    // Crear elemento <li>
    const li = document.createElement('li')

    // Validar el género del personaje y asignar la clase correspondiente
    const generoClass = generoFunction(personaje)

    // Validar la raza del personaje y asignar la clase correspondiente
    const razaClass = razaFunction(personaje)

    // Agregar estilos al elemento
    li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 hover:bg-gray-100 transition-colors mb-3'


    // Crear el contenido del personaje
    li.innerHTML = `


      <div class="shrink-0 w-26 h-26 overflow-hidden rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
        <span class="font-mono text-base font-medium"></span>
        <img src="${personaje.imagen}" alt="${personaje.nombre}" class="w-full h-full object-cover object-[50%_5%]">
      </div>

      <div class="flex-1 min-w-0">
        <p class="text-sm font-bold truncate">${personaje.nombre}</p>
        <div class="flex items-center gap-2 mt-1">
          <span class="${razaClass} text-[16px] font-mono px-1.5 py-0.5 rounded">${personaje.raza}</span>
          <span class="${generoClass} text-[16px] font-mono px-1.5 py-0.5 rounded">${personaje.genero}</span>
        </div>
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <button data-action="editar" data-id="${personaje.id}" class="text-xs text-blue-600 hover:text-blue-700 hover:bg-blue-100 transition-colors border border-blue-600 rounded-lg px-6 py-2">
          Editar
        </button>
        <button data-action="eliminar" data-id="${personaje.id}" class="text-xs text-red-500 hover:text-red-700 hover:bg-red-100 transition-colors border border-red-500 rounded-lg px-6 py-2">
          Eliminar
        </button>
      </div>
    `
    lista.appendChild(li)
  })
}




//----------------------Crear el Personaje--------------------------
const form = document.querySelector("#form")

form.addEventListener('submit', async (event) => {
  //Evitar que el formulario recargue la pagina
  event.preventDefault()

  //limpiar contenido de mensaje  'nombre invalido', URL invalido'
  document.querySelector('#nombreError').textContent = ''
  document.querySelector('#imagenError').textContent = ''
  document.querySelector('#generoError').textContent = ''

  console.log('Guardando personaje')

  //Obtener el formulario
  const personajeForm = document.forms['form']

  //Obtener datos ingresador por el usuario
  const nombre = personajeForm.nombre.value
  const imagen = personajeForm.imagen.value
  const raza = personajeForm.raza.value
  const genero = personajeForm.genero.value

  console.log(nombre, imagen, raza, genero)

  //Validar si el nombre y la url son datos validos
  if (nombre.trim() === '') {
    document.querySelector('#nombreError').textContent = 'Nombre inválido'
    return
  } else if (imagen.trim() === '') {
    document.querySelector('#imagenError').textContent = 'URL inválida'
    return
  } else if (genero ==='Elegir') {
    document.querySelector('#generoError').textContent = 'Genero invalido'
  }


  //crear objeto con datos del personaje
  const nuevoPersonaje = {
    nombre,
    imagen,
    raza,
    genero
  }

  //Configurar peticion POST
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoPersonaje)
  }

  try {
    //Enviar el corredor a la API
    const response = await fetch(API_URL, opciones)

    //Verificar si la peticion fue exitosa
    if (!response.ok) {
      throw new Error('Tuvimos problemas al cargar el personaje')
    }
    console.log('Personaje se guardo correctamente')

    // Actualizar la lista
    cargarPersonajes()

    // Limpiar formulario
    personajeForm.reset()

  } catch (error) {

    // Mostrar error en consola
    console.log(error)
  }

})

//----------------------Editar o Eliminar Personajes--------------------------

lista.addEventListener('click', async (event) => {

  //Verificar que boton se ha presionado
  console.log({ target: event.target })


  // Verificar que se haya presionado un botón
  if (event.target.tagName === 'BUTTON') {

    // Obtener acción e ID del botón
    const { action, id } = event.target.dataset

    //Eliminar personaje

    if (action === 'eliminar') {
      //Pedir confirmacion eliminar
      const confirmado = confirm('Desea eliminar personaje, Acción no se puede deshacer')

      if (!confirmado) {
        return
      }

      //Configurar opciones DELETE
      const opciones = {
        method: 'DELETE',
      }

      //Eliminar personaje usando su ID
      //const response = await fetch(`${API_URL}/${id}`, opciones)
      const response = await fetch(
        `${API_URL}?id=${id}`,
        opciones
      )

      //Verificar respuesta
      if (!response.ok) {
        console.log('No se pudo eliminar al personaje')
      }
      //Actualizar lista
      cargarPersonajes()
    }

    //Editar personaje
    if (action === 'editar') {

      //Pedir confirmacion
      const confirmado = confirm('Desea editar personaje')

      if (!confirmado) {
        return
      }
      //Obtener datos del formulario
      const personajeForm = document.forms['form']

      const nombre = personajeForm.nombre.value
      const imagen = personajeForm.imagen.value
      const raza = personajeForm.raza.value
      const genero = personajeForm.genero.value

      //Crear objeto con los datos actualizados
      const actualizadoPersonaje = {
        nombre,
        imagen,
        raza,
        genero
      }

      //Configurar peticion PUT
      const opciones = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(actualizadoPersonaje)
      }

      //Actualizar personaje con su ID
      //const response = await fetch(`${API_URL}/${id}`, opciones)
      const response = await fetch(
        `${API_URL}?id=${id}`,
        opciones
      )

      //Verificar respuesta
      if (!response.ok) {
        console.log('No se pudo editar personaje')
        return
      }

      console.log('Personaje actualizado correctamente')

      //Actualizar lista
      cargarPersonajes()

      //Limpiar el formulario
      personajeForm.reset()

    }
  }

})


//----------------------Paginacion--------------------------


const renderPaginacion = () => {
  const paginacion = document.querySelector('#paginacion')

  paginacion.innerHTML = ''

  const totalPaginas = Math.ceil(
    personajes.length / personajesPorPagina
  )

  // Creacion de los botones

  for (let pagina = 1; pagina <= totalPaginas; pagina++) {

    const button = document.createElement('button')

    button.textContent = pagina

    //Formato boton activo
    if (pagina === paginaActual) {
      button.className = 'bg-blue-600 text-white border border-blue-600 px-3 py-1 rounded'
    } else {
      button.className = 'bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-100'
    }

    //Navegacion de botones
    button.addEventListener('click', () => {
      paginaActual = pagina

      const personajesPagina = obtenerPersonajesPagina()

      renderPersonajes(personajesPagina)
      renderPaginacion()
    })

    paginacion.appendChild(button)
  }
}


cargarPersonajes()