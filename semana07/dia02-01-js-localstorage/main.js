//LocalStorage
//Es una forma de guardar datos en el navegador
//LS es para guardar solo cadenas de texto
//Limite: 5MB

//Guardar datos

localStorage.setItem('nombre', 'German')

//obtener o recuperar los datos
console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('color'))

//eliminar un dato
localStorage.removeItem('nombre')

//limpiar todo
//localStorage.clear()

//guardar objetos o arreglos

//importante tenemos que convertirlos a cadenas de texto

const user = {name: 'Victor', age:40}

localStorage.setItem('user', user)// ?

localStorage.setItem('user', JSON.stringify(user)) // ok

//obtener o recupera un objeto/array

const user2 = JSON.parse(localStorage.getItem('user'))

console.log(user2.name, user2.age)