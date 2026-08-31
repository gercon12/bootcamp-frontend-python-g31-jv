
// URL de la API donde se almacenan los corredores
const API_URL = 'https://apibox.vercel.app/2aSCD2Sbz4kg4AcacfeJLMmalhKR3Xgs/api/corredores'


// =====================================================
// CARGAR CORREDORES
// Obtiene los datos de la API y los muestra en pantalla
// =====================================================

const cargarCorredores = async () => {

  // Mostrar indicador de carga
  document.querySelector('#loading').classList.toggle('hidden')

  // Consultar la API
  const respuesta = await fetch(API_URL)

  // Convertir la respuesta a JavaScript
  const data = await respuesta.json()

  // Ocultar indicador de carga
  document.querySelector('#loading').classList.toggle('hidden')

  // Mostrar los corredores
  renderCorredores(data)
}


// =====================================================
// RENDERIZAR CORREDORES
// Crea los elementos HTML de cada corredor
// =====================================================

const renderCorredores = (corredores = []) => {

  const lista = document.querySelector('#lista')

  // Limpiar la lista antes de mostrar los datos
  lista.innerHTML = ''

  // Actualizar el contador de inscritos
  const contador = document.querySelector('#contador')
  contador.textContent = corredores.length

  // Recorrer cada corredor
  corredores.forEach(corredor => {

    // Crear elemento <li>
    const li = document.createElement('li')

    // Agregar estilos al elemento
    li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors'

    // Crear el contenido del corredor
    li.innerHTML = `
      <div class="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
        <span class="font-mono text-base font-medium">${corredor.dorsal}</span>
      </div>

      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium truncate">${corredor.nombre}</p>

        <div class="flex items-center gap-2 mt-1">
          <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">
            ${corredor.categoria}
          </span>

          <span class="text-xs text-neutral-400">
            ${corredor.edad} años
          </span>
        </div>
      </div>

      <div class="flex items-center gap-3 shrink-0">

        <button 
          data-action="editar" 
          data-id="${corredor.id}"
          class="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
          Editar
        </button>

        <button 
          data-action="eliminar" 
          data-id="${corredor.id}"
          class="text-xs text-neutral-400 hover:text-red-500 transition-colors">
          Eliminar
        </button>

      </div>
    `

    // Agregar el corredor a la lista
    lista.appendChild(li)
  })
}


// =====================================================
// CREAR CORREDOR
// Obtiene los datos del formulario y los envía a la API
// =====================================================

const form = document.querySelector('#form')

form.addEventListener('submit', async (event) => {

  // Evitar que el formulario recargue la página
  event.preventDefault()

  console.log('Guardando corredor...')

  // Obtener el formulario
  const corredorForm = document.forms['form']

  // Obtener los valores introducidos por el usuario
  const nombre = corredorForm.nombre.value
  const edad = corredorForm.edad.value
  const categoria = corredorForm.categoria.value
  const dorsal = corredorForm.dorsal.value

  console.log(nombre, edad, categoria, dorsal)


  // Crear objeto con los datos del corredor
  const nuevoCorredor = {
    nombre,
    edad,
    categoria,
    dorsal
  }


  // Configurar la petición POST
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoCorredor)
  }


  try {

    // Enviar el corredor a la API
    const response = await fetch(API_URL, opciones)

    // Verificar si la petición fue exitosa
    if (!response.ok) {
      throw new Error('Tuvimos problemas al cargar el corredor')
    }

    console.log('El corredor se guardó correctamente')

    // Actualizar la lista
    cargarCorredores()

    // Limpiar formulario
    corredorForm.reset()

  } catch (error) {

    // Mostrar error en consola
    console.log(error)
  }
})


// =====================================================
// ELIMINAR O EDITAR CORREDOR
// Detecta qué botón de la lista fue presionado
// =====================================================

lista.addEventListener('click', async (event) => {

  console.log({ target: event.target })

  // Verificar que se haya presionado un botón
  if (event.target.tagName === 'BUTTON') {

    // Obtener acción e ID del botón
    const { action, id } = event.target.dataset


    // =================================================
    // ELIMINAR CORREDOR
    // =================================================

    if (action === 'eliminar') {

      // Pedir confirmación
      const confirmado = confirm(
        '¿Eliminar corredor? Acción no se puede deshacer'
      )

      if (!confirmado) {
        return
      }


      // Configurar petición DELETE
      const opciones = {
        method: 'DELETE'
      }


      // Eliminar corredor usando su ID
      const response = await fetch(
        `${API_URL}/${id}`,
        opciones
      )


      // Verificar respuesta
      if (!response.ok) {
        console.log('No se pudo eliminar el corredor')
        return
      }


      // Actualizar lista
      cargarCorredores()
    }


    // =================================================
    // EDITAR CORREDOR
    // Envía los nuevos datos mediante PUT
    // =================================================

    if (action === 'editar') {

      // Pedir confirmación
      const confirmado = confirm('¿Desea actualizar datos?')

      if (!confirmado) {
        return
      }


      // Obtener datos del formulario
      const corredorForm = document.forms['form']

      const nombre = corredorForm.nombre.value
      const edad = corredorForm.edad.value
      const categoria = corredorForm.categoria.value
      const dorsal = corredorForm.dorsal.value


      // Crear objeto con los datos actualizados
      const actualizadoCorredor = {
        nombre,
        edad,
        categoria,
        dorsal
      }


      // Configurar petición PUT
      const opciones = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(actualizadoCorredor)
      }


      // Actualizar corredor usando su ID
      const response = await fetch(
        `${API_URL}/${id}`,
        opciones
      )


      // Verificar respuesta
      if (!response.ok) {
        console.log('No se pudo actualizar el corredor')
        return
      }


      console.log('Corredor actualizado correctamente')

      // Actualizar lista
      cargarCorredores()

      // Limpiar formulario
      corredorForm.reset()
    }
  }
})


// =====================================================
// INICIAR APLICACIÓN
// Cargar los corredores al abrir la página
// =====================================================

cargarCorredores()

