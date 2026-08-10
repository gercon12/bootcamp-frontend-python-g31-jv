//console.log ("Hola JavaScript");
//Tipos de datos primitivos (Number, string, boolean, null, undefined, BigInt, Symbol)

//Tipos de datos No primitivos (Array, Object, Function, )

//Arrays

// Un arreglo puede contener elementos de cualquier tipo: cadena, numeros, booleanos, null, array, objetos, etc)

//Declaracion

const arregloVacio=[]
const listaDeNumeros = [25, 36, 89, -99, 15.60]
const listaDeValores = [1,2,3, 'German', 'contreras', 'codigo', true, null, undefined]

console.log(arregloVacio);
console.log(listaDeNumeros);
console.log(listaDeValores);

//Lectura de los elementos de un arreglo

console.log(listaDeValores[0])// 1
console.log(listaDeValores[3])// German
console.log(listaDeValores[15])//undefined

//Escritura en un arreglo

listaDeValores[3]='gcj';
Object.freeze(listaDeValores);    

console.log(listaDeValores[3]);
console.log(listaDeValores);

//Insertar nuevos elementos en un arreglo al final (push)
/*
listaDeValores.push('Final');
console.log(listaDeValores);
*/

const listaDeNombre = ['Daril','Jhoel'];
console.log(listaDeNombre);
listaDeNombre.push('Francisco');
console.log(listaDeNombre);

//Remover elementos del final de un arreglo (pop)
listaDeNombre.pop();
console.log(listaDeNombre);

//Insertar un elemento en una posicion determinada
listaDeNombre.splice(0,0,'Lucy')
console.log(listaDeNombre);

listaDeNombre.splice(2,0,'Amanda')
console.log(listaDeNombre);

//Eliminar un elmento en una posicion determinada
listaDeNombre.splice(2,1);
console.log(listaDeNombre);

//Obtener el tamaño de nuestro arreglo
console.log(listaDeNombre.length);// 3
console.log('bienvenido'.length);// 10

//Obtener el ultimo elemento del arreglo
console.log(listaDeNombre[listaDeNombre.length-1]);
console.log(listaDeNombre.at(0));
console.log(listaDeNombre.at(-1));// Jhoel, el ultimo valor
console.log(listaDeNombre.at(-2));

//To Do: investigar funcion slice
const frutas = ["manzana", "durazno", "mango", "pera", "uvas", "banano"];
console.log(frutas.slice(2,4));
console.log(listaDeValores.slice(0,3));


//Metodos de arreglos (includes, filter, map, sort, foreach, reduce)

//Metodo Includes, nos indica si el valor que se pasa como parametro esta en el arreglo devuelve true o false

const lenguajes = ['javascript', 'php','python', 'C', 'c++','java','python']
console.log(lenguajes.includes('java'));
console.log(lenguajes.includes('cobol'));

//Metodo Filter, nos ayuda a ubicar un elemento dentro de un arreglo usando una condicion y devuelve un nuevo arreglo
const resultado = lenguajes.filter(function(item) {
    //return item === 'python'
    //return item.includes('c') || item.includes('C')
    return item.toLocaleLowerCase().includes('c')
})

console.log(resultado)

//Metodo MAP, evalua un arreglo, lo modifica y hay que pasarle una funcion.
console.log(lenguajes);

cont = nombreConTituloEspecial = lenguajes.map(function(lenguaje) {
    //logica para evaluar y modificar el arreglo
    //return 'hola'
    return '*' + lenguaje + '*'
})

console.log(nombreConTituloEspecial);


//Metodo sort, nos ayuda a ordenar un arreglo de elementos. Muta(cambia) el arreglo original
// User toSorted() en lugar de sort como recomendacion

//const ordenandolenguajes = lenguajes.sort();

const ordenandoLenguajes = lenguajes.toSorted()
console.log(ordenandoLenguajes);
console.log(lenguajes);

//Metodo foreach, nos ayuda a recorrer un arreglo

for (let index =0; index<10; index++){
    console.log(index)
}

console.log('-------------------------------')
const miArreglo = [];

lenguajes.forEach(function(lenguaje) {
    console.log('#', lenguaje)
    miArreglo.push('El mejor; ' + lenguaje)
})

console.log(miArreglo);

//metodo reduce, nos ayuda a acumular sumar, los valores de un arreglo

// con for
numeros = [3,40,102,7,50]

let sumatoria = 0;
 for (let i=0; i <numeros.length; i++) {
    sumatoria = sumatoria +numeros[i]
 }
 console.log(sumatoria);

 const sumatoriaConReduce = numeros.reduce(function(acumulador, valorActual) {
    return acumulador+valorActual
 })
 console.log(sumatoriaConReduce);

 //Objetos,  una forma de guardar informacion en pares de clave: valor
 //Un objeto  sirve para agregar datos relacionados en un solo lugar
 /*
 {
 key: value,
 key2: value2,
 key3: value3
 }
 */

 const miObjetoVacio = {}

 console.log(miObjetoVacio);

 const persona = {
    nombre: 'German C.',
    edad: 46,
    esProgramador: true,
    'mi color favorito': 'azul',
    coloresFavoritos : ['rosado', 'rojo', 'verde']
 }

 const persona2 = {
    nombre: 'Francisco',
    edad: 66,
    esProgramador: false
 }

 //Leer los campos de un objeto (notacion de punto y de corchete)
 console.log(persona.nombre) // German C.
 console.log(persona.edad)//28
 console.log(persona2.edad)//66
 console.log(persona.estadoCivil)//undefined
 console.log(persona.coloresFavoritos)
console.log(persona.coloresFavoritos[0]);
console.log(persona['mi color favorito']);


//Eliminar las propiedades de un objeto
delete persona2.edad
console.log(persona2)

persona2.esProgramador = undefined;

//Insertar una nueva propiedad a un objeto

persona.platilloFavorito = 'Ceviche de conchas negras'
persona['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(persona)