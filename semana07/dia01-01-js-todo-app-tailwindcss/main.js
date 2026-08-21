// obtener la referencia en una constante para los elementos con las clases
//task__input, task__clear y task__list

const taskinput = document.querySelector('.task__input')
const taskclear = document.querySelector('.task_clear')
const tasklist = document.querySelector('.task__list')

let tasks = [
    {
        title: 'Estudiar javascript',
        completed: true
    },

    {
        title: 'Salir al receso a las 9:00pm',
        completed: true
    },
     {
        title: 'Realizar el reto del fin de semana',
        completed: false
    }

]

function renderTasks(tasks = []){
    let lista = ''
    tasks.forEach((task) => {
        lista = lista + `<li>${task.title}</li>`
    })

    tasklist.innerHTML= lista
}

renderTasks(tasks)