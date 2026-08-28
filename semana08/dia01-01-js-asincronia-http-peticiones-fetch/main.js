//Objetivo: Consultar informacion en formato JSON desde un servicio web

console.log(fetch('https://jsonplaceholder.typicode.com/posts'))  // Promise {<pendind>} ->Devuelve una promesa

//Estados de una promesa -> pending, fulfilled(OK), rejected(fallo)


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())//Se ejecuta cuando la respuesa llego correctamente y ademas
    //convervimos la respuesa en JS
    .then(data => {
        console.log(data)
        console.log(data[0])
        console.log(data[0].title)
    })

//ToDo Renderizar la lista de posts del servicio jsonplaceholder en sus campos titulo, id y body

// const renderPosts = (posts = []) => {
//     const divApp = document.querySelector('#app')
//     let postList = ''

//     posts.forEach(post => {
//         postList = postList + ` 
//     <div>
//     <h2>${post.id} - ${post.title} - </h2>
//     <p>${post.body}</p>
//     </div>
//     `
//     })
//     divApp.innerHTML = postList
// }

//postList = postList + `<h2>${post.id} - ${post.title} - ${post.body}</h2>`
//postList = postList + `<h2>${post.id} - ${post.title} - <span class="text-green-500">${post.body}</span></h2>`;

// -----------------------------------------

// TODO: Renderizar la lista de posts del servicio jsonplaceholder con sus campos título, id y body
// URL: https://jsonplaceholder.typicode.com/todos

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())//Se ejecuta cuando la respuesa llego correctamente y ademas
    //convervimos la respuesa en JS
    .then(data => {
        console.log(data)
        renderTodos(data)

    })

const renderTodos = (posts = []) => {
    const divApp = document.querySelector('#todos')
    let postList = ''
    let color = ''

    posts.forEach(post => {
        if(post.completed === true){
            color = 'text-green-600'
        } else{
            color = 'text-red-600'
        }
        postList = postList + ` 
    <div>
    <h2>${post.userId} - ${post.id} - </h2>
    <p>${post.title}</p>
    <p class=${color}>${post.completed}</p>
    </div>
    `
    })
    divApp.innerHTML = postList
}

