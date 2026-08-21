//ECMASCRIPT -> Estándar que define como debe funcionar JS
// Chrome, MS Edge, Brave, etc -> V8
// Firefox -> SpiderMonkey
//Safari -> JavaScriptCore

//Versiones importantes ECMAScript
//Cada version agrega caracteristicas al lenguaje
// ES5(2009)
// ES6(2015) -> Se hicieron actualizaciones importantes.
// * aparecio let y const en lugar de var, 
// * arrow functions,
// * clases, 
// * template strings, 
// * destructuring,
// * promises, etc.

// Funciones por declaracion
// Funciones sin parametros

function nombreDeLaFuncion() {
    console.log('Hola a todos G31')
}

nombreDeLaFuncion()

//Funciones con parametros por defecto con retorno y en multiples lineas

function calcularSiEsMayorDe18(edad = 1){
    console.log(edad)
    console.log(undefined > 18)
    if (edad >18) {
        return 'Es mayor de edad'
    } else {
        return 'Es menor de edad'
    }
}


console.log(calcularSiEsMayorDe18())
console.log(calcularSiEsMayorDe18(25))

//Arrow functions (Funciones flecha) =>

const imprimiendoSaludo2 = () => console.log('Hola a todos nuevamente')

imprimiendoSaludo2()

const suma = (numero1, numero2) => numero1 + numero2

// function suma(numero1, numero2){
//     return numero1 + numero2
// }

console.log(suma(5,2)) //7

const saludoEnMayusculas = (nombre = 'Anonimo') => {
    const nombreEnMayusculas = nombre.toLocaleUpperCase()
    return 'Hola' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas())

//Parametros REST (operador rest ->...)
//Permiten que la funcion reciba una cantidad indefinida de argumentos 
// y los agrupa dentro de un array

const numeros = [4,5]

const miSuma = (n1, n2) => n1 + n2

console.log(miSuma(6,7))//13

console.log(miSuma(...numeros))//9

const listaNumeros = [6,33,-1,-66,998,453]

console.log(Math.max(25,8,65,9,54))
console.log(Math.max(...listaNumeros))

const miSuma2 = (...numeros) => {
    console.log(numeros)
    //return reduce(...)
}

miSuma2(1,2,3,4,5,6)

//Spread Operator (...)
//Sirve para expandir un arreglo, e incluso objetos

const frutas = ['manzanas', 'naranjas', 'sandias']

const verduras = ['papas', 'cebollas']

console.log(frutas.concat(verduras))

const frutasVerduras = [frutas, verduras]

console.log([...frutas,...verduras])

const persona = {
    nombre: 'German',
    edad: 46
}

const stack = {
    javascript: 'React.js',
    python: 'Flask',
    nodejs: 'Express.js'
}

console.log({persona, stack})

console.log({...persona, ...stack})

//Template strings (template literals)
//Forma moderna de crear cadenas de texto usando backticks()
//${} -> permite insertar variables o valores directamente

const nombre = 'German'
const mensaje = 'Hola ' + nombre + ', bienvenido'

console.log(mensaje)

const mensaje2 = `Hola ${nombre}, bienvenido`

const a = 90
const b = 47

console.log(`La suma es ${a + b}`)