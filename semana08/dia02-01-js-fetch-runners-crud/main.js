//console.log('Hoja js')

const API_URL = 'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/corredores'

const cargarCorredores = async () => {
    const respuesta = await fetch(API_URL)

    const data = await respuesta.json()
}


//const renderUsers = (users = []) => {

const renderCorredores = (corredores = []) => {
    //todo mostrar los corredores usando la plantilla del li en el index.html

    const lista = document.querySelector('#lista')

    corredores.forEach(corredor =>{
        const  li = document.createElement('li')

        li.innerHTML = `
        <div class="shrink-0 w-14 h-14 rounded-lg border border-neutral-200 flex items-center justify-center bg-neutral-50">
              <span class="font-mono text-base font-medium">${corredor.dorsal}</span>
            </div>

            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium truncate">${corredor.dorsal}</p>
              <div class="flex items-center gap-2 mt-1">
                <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700">5K</span>
                <span class="text-xs text-neutral-400">${corredor.edad}</span>
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
    }) 

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
    })


}

cargarCorredores()