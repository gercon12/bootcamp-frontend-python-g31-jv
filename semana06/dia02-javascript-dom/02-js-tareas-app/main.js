const taskInput = document.getElementById('task-input')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

//Eventos
//Elemento.addEventListener(nombre_evento, callback)

taskAdd.addEventListener('click', function (event) {
    //se ejecutara cuando hagamos click en el boton 'anadir tarea'
    console.log('Click!!!', taskInput.value)

    //Manejo del DOM: Forma de crear elementos dinamicamente con el DOM de JavaScript

    // const button = document.createElement('button')
    // console.log({button})
    // button.textContent = 'Hola soy un boton'
    // document.body.appendChild(button)

    //ToDo 01 - Añadir el elemento li al elemento en la clase task__list
    const li = document.createElement('li')

    taskList.appendChild(li)

    //ToDo 01-1 Añadir un ckeckbox al li
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    li.appendChild(checkbox)

    //Todo 02 - Añadir el elemento span al elemento li con el texto de la caja taskInput

    const span = document.createElement('span')

    span.textContent = taskInput.value

    li.appendChild(span)

    //ToDo 03  Añadir el elemento button al elemento li 
    const button = document.createElement('button')
    button.textContent = 'Borrar'
    li.appendChild(button)


    //ToDo 04 - Permitir al botón borrar remover una tarea de la lista
    // button.addEventListener('click', function () {
    //     event.stopPropagation()
    //     li.remove()
    // })

    taskInput.value = ''

})

//   ToDo 04-01
taskList.addEventListener('click', function (event) {
    //console.log('hice click en cualquier parte del ul)

    const target = event.target //elemento presionado

    if (target.tagName === 'BUTTON') {
        console.log('Eliminado tarea....')
        target.parentElement.remove()
    }


    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        console.log('completando tarea...')
        target.classList.toggle('checked')
    }

})