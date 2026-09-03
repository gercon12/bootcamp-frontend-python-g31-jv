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
  }
  return razaClass
}

//Renderizar personajes
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

    // Validar el género del personaje y asignar la clase correspondiente
    const generoClass = generoFunction(personaje)

    // Validar la raza del personaje y asignar la clase correspondiente
    const razaClass = razaFunction(personaje)

    // Agregar estilos al elemento
    li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors mb-3'


    // Crear el contenido del personaje
    li.innerHTML = `


      <div class="shrink-0 w-22 h-22 overflow-hidden rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
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

//----------------------Crear el Personaje--------------------------
const form = document.querySelector("#form")

form.addEventListener('submit', async (event) => {
  //Evitar que el formulario recargue la pagina
  event.preventDefault()

  //limpiar contenido de p 'invalido'
  document.querySelector('#nombreError').textContent = ''
  document.querySelector('#imagenError').textContent = ''

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
      opciones = {
        method: 'DELETE',
      }

      //Eliminar personaje usando su ID
      const response = await fetch(`${API_URL}/${id}`, opciones)

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
      const response = await fetch(`${API_URL}/${id}`, opciones)

      //Verificar respuesta
      if (!response) {
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


cargarPersonajes()