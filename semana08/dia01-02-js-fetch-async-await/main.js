//const url = fetch('https://jsonplaceholder.typicode.com/users')

//const url = 'https://jsonplaceholder.typicode.com/users'

// fetch(url)
// .then(respuesta => respuesta.json())
// .then(data=> {
//     console.log(data)
// })
// .catch(error => {
//     console.log(error)
// })



const fetchUserSinRetorno = async () => {
    const response = await fetch(url)

    const data = await response.json()
}

//fetchUserSinRetorno()


const fetchUsersConRetorno = async () => {
    const response = await fetch(url)

    return await response.json()
}

//fetchUsersConRetorno()//Retorna una promesa
//.then(users=>console.log(users))




// URL base de la API de donde se obtendrán los datos
const url = 'https://jsonplaceholder.typicode.com/users'

/**
 * Función encargada de pintar (renderizar) la lista de usuarios en el DOM (HTML).
 * @param {Array} users - Lista de objetos de usuarios. Por defecto es un arreglo vacío [].
 */
const renderUsers = (users = []) => {
    // 1. Selecciona el elemento del HTML con el id "app" donde se insertarán las tarjetas
    const divApp = document.querySelector('#app')

    // Verificación de seguridad: comprueba que el contenedor exista en el HTML
    if (!divApp) {
        console.error('El elemento #app no existe en el DOM.')
        return
    }

    // 2. Variable acumuladora para almacenar todo el marcado HTML generado
    let userLists = ''

    // 3. Recorre cada usuario del arreglo y construye una estructura HTML
    users.forEach(user => {
        userLists += ` 
        <div>
            <h2>${user.id} - ${user.name}</h2>
            <p>${user.company?.name || 'Sin empresa'}</p>
        </div>
        `
    })

    // 4. Inyecta la cadena HTML final dentro del contenedor #app
    divApp.innerHTML = userLists
}

/**
 * Función asíncrona para consultar la API de usuarios con manejo de excepciones.
 * @returns {Promise<Array>} Devuelve una promesa que resuelve en la lista de usuarios.
 */
const fetchUsersConManejoDeErrores = async () => {
    try {
        // 1. Realiza la petición HTTP a la API y detiene la ejecución hasta recibir respuesta
        const response = await fetch(url)

        // Imprime en consola el código de estado HTTP (ej. 200 = OK, 404 = Not Found)
        console.log(response.status)

        // 2. Valida si la respuesta fue exitosa (código entre 200 y 299)
        if (!response.ok) {
            console.log('Tuvimos problemas al cargar el recurso users')
            // Interrumpe la ejecución e invoca el bloque catch pasando un mensaje de error
            throw new Error('ERROR HTTP: ' + response.status)
        }

        // 3. Si la respuesta es correcta, convierte la respuesta a formato JSON y la retorna
        return await response.json()

    } catch (error) {
        // Captura cualquier fallo de red o error lanzado manualmente con `throw`
        console.log('Error capturado:', error)
        return [] // Retorna un arreglo vacío para evitar que la interfaz falle
    }
}

// ==========================================
// EJECUCIÓN DEL CÓDIGO
// ==========================================

// Invocación del proceso asíncrono
fetchUsersConManejoDeErrores()
    .then(users => {
        // Imprime los datos recibidos en consola
        console.log(users)
        
        // Llama a la función encargada de dibujarlos en la pantalla
        renderUsers(users)
    })


// const renderUsers = (users = []) => {

//     const divApp = document.querySelector('#app')

//     let userLists = ''

//     users.forEach(user => {
//         userLists += ` 
//         <div>
//             <h2>${user.id} - ${user.name}</h2>
//             <p>${user.company.name}</p>
//         </div>
//         `
//     })
//     divApp.innerHTML = userLists
// }

// const fetchUsersConManejoDeErrores = async () => {
//     try {
//         const response = await fetch(url)

//         console.log(response.status) 

//         if (response.status === 404) {
//             console.log('Tuvimos problemas al cargar el recurso users')
//             //return
//             throw new Error('ERROR HTTP: ' + response.status)

//         }
//         return await response.json()

//     } catch (error){
//         console.log(error)
//     }
// }


// fetchUsersConManejoDeErrores()
// .then(users => {
//     console.log(users)
//     renderUsers(users)
// })

//ToDo resolver estos ejercicios
// Mostrar un mensaje de cargando
// Mostrar solo usuarios de una ciudad
// Mostrar cuantos usuarios hay en el listado