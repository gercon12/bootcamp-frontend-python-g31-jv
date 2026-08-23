// obtener la referencia en una constante para los elementos con las clases
//task__input, task__clear y task__list

const taskinput = document.querySelector('.task__input')
const taskclear = document.querySelector('.task__clear')
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

taskinput.addEventListener('keydown', (event) => {
    //console.log('agregando tarea', event.key, event.keyCode)//Enter o 13

    //validaciones para evitar enviar en blanco
    if (event.target.value ===''){
        return
    }
    
    if (event.key === 'Enter') {
        const  newTask = {
            title: event.target.value,
            completed: false
        }
        console.log(newTask)

        tasks.push(newTask)

        renderTasks(tasks)

        taskinput.value = ''
    }
   
})
//  event.target.value= ''

// li = document.createElement('li')

function renderTasks(tasks = []){
    let lista = ''
    tasks.forEach((task, index) => {
        lista = lista + `
        <li class="flex justify-center items-center gap-4 py-1">
                <input 
                type="checkbox"
                ${task.completed ? 'checked' : ''}
                onchange="checkTask(${index})"
                >
                <div class="w-full ${task.completed ? 'line-through text-gray-500'  : ''}">
                    ${task.title}
                </div>
                <button
                class="task__input border border-red-500 font-medium text-sm px-2 py-1 text-red-500
               hover:text-white hover:bg-red-700 duration-300 cursor-pointer"
               onclick="removeTask(${index})"
                >
                    Borrar
                </button>
            </li>      
        `
    });

    console.log(lista)

    tasklist.innerHTML= lista
}

function removeTask(selectedIndex) {
    console.log(selectedIndex)
    tasks.splice(selectedIndex,1)
    renderTasks(tasks)

    //const modifiedTasks = tasks.filter((task,index)=> index !== selectedIndex)
    //tasks = modifiedTasks
    //renderTasks(tasks)
}

//agreguen la clase line-throug para tachar el titulo de la tarea si esta completada

// function checkedTask(taskCompleted) {
//     return taskCompleted ? 'line-through' : ''
//     }


function checkTask(selectedIndex) {
    //Devolver un objeto que tiene title y completed
    const taskSelected = {...tasks[selectedIndex]}

    taskSelected.completed = !taskSelected.completed

    tasks[selectedIndex] = taskSelected

    renderTasks(tasks)
}


//implementar el boton limpiar tareas completadas  para remover tareas el estado completed en true

taskclear.addEventListener('click', (event) =>{
    //console.log('click')
    const deletedTasks = tasks.filter((task) => !task.completed)
    
    console.log(deletedTasks)
    
    tasks = deletedTasks
    
    renderTasks(tasks)
})


renderTasks(tasks)