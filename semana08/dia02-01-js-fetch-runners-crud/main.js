const API_URL = 'https://apibox.vercel.app/2aSCD2Sbz4kg4AcacfeJLMmalhKR3Xgs/api/corredores'

//const form = document.querySelector('#form')
//Cargar corredores
const cargarCorredores = async () => {
  document.querySelector('#loading').classList.toggle('hidden')

  const respuesta = await fetch(API_URL)

  const data = await respuesta.json()

  document.querySelector('#loading').classList.toggle('hidden')

  renderCorredores(data)
}

//----Renderizar en pagina corredores
const renderCorredores = (corredores = []) => {
  // Mostrar los corredores usando la plantilla del li en el index.html
  const lista = document.querySelector('#lista')

  lista.innerHTML = ''

  // Actualizar el número de inscritos con el id contador
  const contador = document.querySelector('#contador')
  contador.textContent = corredores.length

  corredores.forEach(corredor => {
    const li = document.createElement('li')

    li.className = 'flex items-center gap-4 bg-white border border-neutral-200 rounded-xl px-4 py-3 hover:border-neutral-300 transition-colors'

    li.innerHTML = `
      <div class="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
        <span class="font-mono text-base font-medium">${corredor.dorsal}</span>
      </div>

      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium truncate">${corredor.nombre}</p>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">${corredor.categoria}</span>
          <span class="text-xs text-neutral-400">${corredor.edad} años</span>
        </div>
      </div>

      <div class="flex items-center gap-3 shrink-0">
        <button data-action="editar" data-id="${corredor.id}" class="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
          Editar
        </button>
        
        <button data-action="eliminar" data-id="${corredor.id}" class="text-xs text-neutral-400 hover:text-red-500 transition-colors">
          Eliminar
        </button>
      </div>
    `
    lista.appendChild(li)
  })
}

//----Enviar datos de corredor
const form = document.querySelector('#form')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  console.log('Guardando corredor...')

  const corredorForm = document.forms['form']

  const nombre = corredorForm.nombre.value
  const edad = corredorForm.edad.value
  const categoria = corredorForm.categoria.value
  const dorsal = corredorForm.dorsal.value

  console.log(nombre, edad, categoria, dorsal)

  //2 crear al corredor en el servidor

  const nuevoCorredor = {
    nombre,
    edad,
    categoria,
    dorsal
  }

  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(nuevoCorredor) //convierte a cadena de texto
  }

  try {
    const response = await fetch(API_URL, opciones)

    if (!response.ok) {
      throw new Error('Tuvimos problemas al cargar el corredor')
    }

    console.log('el corredor se guardo correctamente')

    //actualizar el listado de corredores y limpien el formulario

    cargarCorredores()

    corredor.form.reset()
  } catch (error) {
    console.log(error)
  }
})

//----Eliminar o Editar Corredor
lista.addEventListener('click', async (event) => {
  console.log({ target: event.target })

  if (event.target.tagName === 'BUTTON') {

    const { action, id } = event.target.dataset

    if (action === 'eliminar') {
      const confirmado = confirm('Eliminar corredor?, accion no se puede deshacer')

      if (!confirmado) {
        return
      }

      const opciones = {
        method: 'DELETE'
      }

      const response = await fetch(`${API_URL}/${id}`, opciones)

      if (!response.ok) {
        console.log('No se pudo eliminar el corredor')
        return
      }
      cargarCorredores()
    }

    //----Editar corredor
    if (action === 'editar') {
      const confirmado = confirm('Desea actualizar datos')

      if (!confirmado) {
        return
      }

      const corredorForm = document.forms['form']
      const nombre = corredorForm.nombre.value
      const edad = corredorForm.edad.value
      const categoria = corredorForm.categoria.value
      const dorsal = corredorForm.dorsal.value

      const actualizadoCorredor = {
        nombre,
        edad,
        categoria,
        dorsal
      }

      const opciones = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(actualizadoCorredor)
      }

      const response = await fetch(`${API_URL}/${id}`, opciones)

      if (!response.ok) {
        console.log('No se pudo actualizar el corredor')
        return
      }
      console.log('Corredor actualizado correctamente')

      cargarCorredores()

      corredorForm.reset()

    }

  }
})

cargarCorredores()