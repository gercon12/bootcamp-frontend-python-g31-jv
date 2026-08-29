//console.log('Hoja js')

// const API_URL = 'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/corredores'

// const cargarCorredores = async () => {
//     const respuesta = await fetch(API_URL)

//     const data = await respuesta.json()
// }




// const renderCorredores = (corredores = []) => {
   

//     const lista = document.querySelector('#lista')

//     corredores.forEach(corredor =>{
//         const  li = document.createElement('li')

//         li.innerHTML = `
//         <div class="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
//               <span class="font-mono text-base font-medium">${corredor.dorsal}</span>
//             </div>

//             <div class="flex-1 min-w-0">
//               <p class="text-sm font-medium truncate">${corredor.dorsal}</p>
//               <div class="flex items-center gap-2 mt-1">
//                 <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">5K</span>
//                 <span class="text-xs text-neutral-400">${corredor.edad}</span>
//               </div>
//             </div>

//             <div class="flex items-center gap-3 shrink-0">
//               <button data-action="editar" data-id="${corredor.id}" class="text-xs text-neutral-400 hover:text-neutral-900 transition-colors">
//                 Editar
//               </button>
//               <button data-action="eliminar" data-id="${corredor.id}" class="text-xs text-neutral-400 hover:text-red-500 transition-colors">
//                 Eliminar
//               </button>
//             </div>
//         `
//     }) 

    // let corredorList = ''

    // corredores.forEach(corredor => {
    //     corredorList += `
    //     <div class="flex-1 min-w-0">
    //           <p class="text-sm font-medium truncate">${corredor.nombre}</p>
    //           <div class="flex items-center gap-2 mt-1">
    //             <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">${corredor.categoria}</span>
    //             <span class="text-xs text-neutral-400">${corredor.edad}</span>
    //           </div>
        
    //     `
    


// }

// cargarCorredores()



const API_URL = 'https://apibox.vercel.app/2aSCD2Sbz4kg4AcacfeJLMmalhKR3Xgs/api/corredores'

//const form = document.querySelector('#form')

const cargarCorredores = async () => {
  document.querySelector('#loading').classList.toggle('hidden')

  const respuesta = await fetch(API_URL)

  const data = await respuesta.json()

document.querySelector('#loading').classList.toggle('hidden')

  renderCorredores(data)
}

const renderCorredores = (corredores = []) => {
  // TODO: Mostrar los corredores usando la plantilla del li en el index.html
  const lista = document.querySelector('#lista')

  lista.innerHTML=''

  // TODO: Actualizar el número de inscritos con el id contador
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

const form = document.querySelector('#form')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  console.log('Guardando corredor...')

const corredorForm = document.forms['form']

const nombre = corredorForm.nombre.value
const edad = corredorForm.edad.value
const categoria = corredorForm.categoria.value
const dorsal = corredorForm.dorsal.value

console.log(nombre,edad,categoria,dorsal)

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
} catch(error) {
  console.log(error)
}


})

//Eliminar Corredor
lista.addEventListener('click', async (event) => {
  console.log({target: event.target})
  if (event.target.tagName === 'BUTTON') {
    const confirmado = confirm('Eliminar corredor?, accion no se puede deshacer')
    
    if(!confirmado) {
      return
    }
    
    const {action, id} = event.target.dataset

    if (action === 'eliminar') {
      const opciones = {
        method: 'DELETE'
      }

      const response = await fetch(`${API_URL/$id}`, opciones)

      cargarCorredores()
    }

  }


})
 //TODO implementar actualizar datos corredor


cargarCorredores()