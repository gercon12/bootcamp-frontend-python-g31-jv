// TODO: Resolver los siguientes ejercicios para el siguiente jueves y compartir conmigo su repositorio con las soluciones.

// Ejercicio 1: Contar vocales
// Descripción: Retorna cuántas vocales contiene un texto dado, sin importar mayúsculas.

//Opcion 1
function contarVocales(texto) {
    const resultado = texto.toLowerCase().split('').filter(function (letra) {
        return 'aeiouáéíóú'.includes(letra)
    })

    return resultado.length
}

console.log('Ejercicio 1 - Opcion 1: Contar vocales')
console.log(contarVocales('Hola Mundo')) //  → 4
console.log(contarVocales('AEIOU')) //  → 5
console.log(contarVocales('xyz')) // → 0
console.log(contarVocales('Programación')) //  → 5
console.log('------------------------')

//Opcion 2
function cuentaVocales2(palabra) {
    let text = palabra.toLowerCase();
    vocales = [];
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === 'a' || text[i] === 'á'
            || text[i] === 'e' || text[i] === 'é'
            || text[i] === 'i' || text[i] === 'í'
            || text[i] === 'o' || text[i] === 'ó'
            || text[i] === 'u' || text[i] === 'ú') {
            count = count + 1
            vocales = vocales + text[i]
        }
    }
    if (count === 0) {
        console.log('Palabra no tiene vocales');
    }
    return 'vocales encontradas: ' + vocales + ': ' + count;
}

console.log('Ejercicio 1: Contar vocales - Opcion 2')
console.log(cuentaVocales2('Hola Mundo')) //  → 4
console.log(cuentaVocales2('AEIOU')) //  → 5
console.log(cuentaVocales2('xyz')) // → 0
console.log(cuentaVocales2('Programación')) //  → 5
console.log('------------------------')

//Opcion 3
function countVocales3(palabra) {
    let text = palabra.toLowerCase();
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if ('aeiouáéíóú'.includes(text[i])) {
            count = count + 1
        }
    }
    return count
}

console.log('Ejercicio 1: Contar vocales - Opcion 3')
console.log(countVocales3('Hola Mundo')) //  → 4
console.log(countVocales3('AEIOU')) //  → 5
console.log(countVocales3('xyz')) // → 0
console.log(countVocales3('Programación')) //  → 5
console.log('------------------------')


// Ejercicio 2: Eliminar duplicados
// Descripción: Elimina elementos duplicados de un array manteniendo el orden.

//Opcion 1
function eliminarDuplicados(arr = []) {
    const resultado = []
    for (const elemento of arr) {
        if (!resultado.includes(elemento)) {
            resultado.push(elemento)
        }
    }
    return resultado
}

console.log('Ejercicio 2: Eliminar duplicados Opcion 1')
console.log(eliminarDuplicados([1, 2, 2, 3])) // → [1,2,3]
console.log(eliminarDuplicados(['a', 'b', 'a'])) // → ['a','b']
console.log(eliminarDuplicados([])) // → []
console.log(eliminarDuplicados([true, false, true])) // → [true, false]


//Opcion 2
function eliminarDuplicados2(arr = []) {
    return [...new Set(arr)]
}

console.log('Ejercicio 2: Eliminar duplicados - Opcion 2')
console.log(eliminarDuplicados2([1, 2, 2, 3])) // → [1,2,3]
console.log(eliminarDuplicados2(['a', 'b', 'a'])) // → ['a','b']
console.log(eliminarDuplicados2([])) // → []
console.log(eliminarDuplicados2([true, false, true])) // → [true, false]


// Ejercicio 3: Invertir texto
// Descripción: Invierte una cadena de texto.

//Opcion 1
function invertirTexto(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}

console.log('Ejercicio 3: Invertir texto - Opcion 1')
console.log(invertirTexto('hola')) // → 'aloh'
console.log(invertirTexto('123')) // → '321'
console.log(invertirTexto('')) // → ''

//Opcion 2
function invertirTexto2(texto) {
    let textoInvertido = texto.split('').reverse().join('');
    return textoInvertido;
}

console.log('Ejercicio 3: Invertir texto - Opcion 2')
console.log(invertirTexto2('hola')) // → 'aloh'
console.log(invertirTexto2('123')) // → '321'
console.log(invertirTexto2('')) // → ''

// Ejercicio 4: Sumar array
// Descripción: Retorna la suma total de todos los números en un array.

//Opcion 1
function sumarArray(arr = []) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
        resultado = resultado + arr[i]
    }
    return resultado;
}

console.log('Ejercicio 4: Sumar array Opcion 1')
console.log(sumarArray([1, 2, 3])) // → 6
console.log(sumarArray([])) // → 0
console.log(sumarArray([-1, 1])) // → 0


//Option 2
function sumarArray2(arr = []) {

    return arr.reduce(function (acumulador, valorActual) {
        return acumulador + valorActual
    }, 0);
}

console.log('Ejercicio 4: Sumar array - Opcion 2')
console.log(sumarArray2([1, 2, 3])) // → 6
console.log(sumarArray2([])) // → 0
console.log(sumarArray2([-1, 1])) // → 0


// Ejercicio 5: Celsius a fahrenheit
// Descripción: Convierte grados Celsius a Fahrenheit.

function celsiusAFahrenheit(c) {
    tempF = (c * 9 / 5) + 32
    return tempF;
}

console.log('Ejercicio 5: Celsius a fahrenheit')
console.log(celsiusAFahrenheit(100)) // → 212
console.log(celsiusAFahrenheit(-40)) // → -40
console.log(celsiusAFahrenheit(0)) // → 32


// Ejercicio 6: Es palindromo
// Descripción: Retorna true si un texto es un palíndromo (ignora espacios y mayúsculas).

function esPalindromo(texto) {
    texto = texto.toLowerCase();

    let palabraUnida = texto.split(' ').join('');
    let palabraInversa = "";

    for (let i = palabraUnida.length - 1; i >= 0; i--) {
        palabraInversa += palabraUnida[i];
    }

    if (palabraUnida === palabraInversa) {
        return true;
    } else {
        return false;
    }
}

console.log('Ejercicio 6: Es palindromo - Opcion 1')
console.log(esPalindromo('Hola')) // → false
console.log(esPalindromo('A man a plan a canal Panama')) // → true
console.log(esPalindromo('Anita lava la tina')) // → true
console.log(esPalindromo('2112')) // → true


// Ejercicio 7: Elementos en Común
// Descripción: Retorna un array con los elementos en común entre dos arrays (sin repetir).

//Opcion 1
function elementosEnComun(arr1 = [], arr2 = []) {
    nuevoArreglo = [];

    for (let i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                nuevoArreglo.push(arr1[i]);
            }
        }
    }
    return nuevoArreglo;
}

console.log('Ejercicio 7: Elementos en Común Opcion 1')
console.log(elementosEnComun(['a', 'b'], ['b', 'c'])) // → ['b']
console.log(elementosEnComun([], [1, 2])) // → []
console.log(elementosEnComun([1, 2, 3], [2, 3, 4])) // → [2,3]
console.log(elementosEnComun([true], [true, false])) // → [true]
console.log(elementosEnComun(['a', 'b', 'e', 'a'], ['a', 'b', 'c', 'd', 'e', 'f', 'g']))
console.log(typeof (nuevoArreglo))

//Opcion 2
function elementosEnComun2(arr1 = [], arr2 = []) {
    nuevoArreglo = arr1.filter(x => arr2.includes(x));
    return [...new Set(nuevoArreglo)];
}

console.log('Ejercicio 7: Elementos en Común Opcion 2')
console.log(elementosEnComun2(['a', 'b'], ['b', 'c'])) // → ['b']
console.log(elementosEnComun2([], [1, 2])) // → []
console.log(elementosEnComun2([1, 2, 3], [2, 3, 4])) // → [2,3]
console.log(elementosEnComun2([true], [true, false])) // → [true]
console.log(elementosEnComun2(['a', 'b', 'e', 'a'], ['a', 'b', 'c', 'd', 'e', 'f', 'g']))
console.log(typeof (nuevoArreglo))


// Ejercicio 8: Mayor número
// Descripción: Retorna el número más grande de un array de números.

//Opcion 1
function mayorNumero(arr = []) {
    const arregloOrdenado = arr.toSorted((a, b) => a - b);
    return arregloOrdenado.at(-1);

}

console.log('Ejercicio 8: Mayor número - Opcion 1')
console.log(mayorNumero([-1, -5, -3])) // → -1
console.log(mayorNumero([42])) // → 42
console.log(mayorNumero([1, 5, 3])) // → 5
console.log(mayorNumero([-3, 2, 0])) //2

//Opcion 2
function mayorNumero2(arr = []) {
    const maximo = Math.max(...arr);
    return maximo;

}

console.log('Ejercicio 8: Mayor número Opcion 2')
console.log(mayorNumero2([-1, -5, -3])) // → -1
console.log(mayorNumero2([42])) // → 42
console.log(mayorNumero2([1, 5, 3])) // → 5
console.log(mayorNumero2([-3, 2, 0])) //2


// Ejercicio 9: Repetir texto
// Descripción: Repite un texto N veces separados por espacio.

function repetirTexto(texto, n) {
    let cadena = '';
    for (let i = 0; i < n; i++) {
        cadena = cadena + ' ' + texto;
    }
    return cadena.trim();
}

console.log('Ejercicio 9: Repetir texto')
console.log(repetirTexto('JS', 1)) // → 'JS'
console.log(repetirTexto('Bye', 0)) // → ''
console.log(repetirTexto('Hola', 3)) // → 'Hola Hola Hola'


// Ejercicio 10: Capitalizar
// Descripción: Convierte la primera letra de un texto en mayúscula.

function capitalizar(texto) {
    const capitalizado = texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
    return capitalizado;
}

console.log('Ejercicio 10: Capitalizar')
console.log(capitalizar('javaScript')) // → 'JavaScript'
console.log(capitalizar('')) // → ''
console.log(capitalizar('hola')) // → 'Hola'


// Ejercicio 11: Filtrar pares
// Descripción: Retorna un nuevo array con solo los números pares del array original.

function filtrarPares(arr = []) {
    paresArreglo = arr.filter(x => x % 2 === 0)
    return paresArreglo;
}

console.log('Ejercicio 11: Filtrar pares')
console.log(filtrarPares([5, 7, 9])) // → []
console.log(filtrarPares([0, 10, 15])) // → [0, 10]
console.log(filtrarPares([1, 2, 3, 4])) // → [2,4]
console.log(filtrarPares([1, 3, 5, 7, 9, 10])) //→ [10]


// Ejercicio 12: Contar palabras
// Descripción: Cuenta cuántas palabras tiene una frase (separadas por espacios).

function contarPalabras(frase = '') {
    let contar = 0;
    const fraseLimpia = frase.trim()
    const arreglo = fraseLimpia.split(/\s+/);
    if (arreglo[0] === "") {
        contar = 0;
    } else {
        contar = arreglo.length;
    }

    return contar;
}

console.log('Ejercicio 12: Contar palabras')
console.log(contarPalabras('')) // → 0
console.log(contarPalabras(' Uno dos tres ')) // → 3
console.log(contarPalabras('Hola mundo JS')) // → 3
console.log(contarPalabras('Hola   mundo  JS')); // → 3 (¡Ahora funciona!)


// Ejercicio 13: Reemplazar palabra
// Descripción: Reemplaza una palabra específica por otra dentro de una frase.

//Opcion 1
function reemplazarPalabra(frase = '', buscar = '', reemplazar = '') {

    const arregloFrase = frase.split(' ');
    let encontrada = false;

    for (let i = 0; i < arregloFrase.length; i++) {
        if (arregloFrase[i] === buscar) {
            arregloFrase[i] = reemplazar;
            encontrada = true;
        }
    }
    if (!encontrada) {
        console.log('La palabra no existe');
    }
    frase = arregloFrase.join(' ');
    return frase;
}

console.log('Ejercicio 13: Reemplazar palabra Opcion 1')
console.log(reemplazarPalabra('Hola mundo', 'mundo', 'JS')) // → 'Hola JS'
console.log(reemplazarPalabra('La casa es blanca', 'blanca', 'roja')) // → 'La casa es roja'
console.log(reemplazarPalabra('Me gusta el café', 'café', 'té')) // → 'Me gusta el té'


//Opcion 2
function reemplazarPalabra2(frase = '', buscar = '', reemplazar = '') {
    const encontrarFrase = frase.replace(buscar, reemplazar)
    return encontrarFrase
}

console.log('Ejercicio 13: Reemplazar palabra Opcion 2')
console.log(reemplazarPalabra2('Hola mundo', 'mundo', 'JS')) // → 'Hola JS'
console.log(reemplazarPalabra2('La casa es blanca', 'blanca', 'roja')) // → 'La casa es roja'
console.log(reemplazarPalabra2('Me gusta el café', 'café', 'té')) // → 'Me gusta el té'


// Ejercicio 14: Limpiar array
// Descripción: Elimina todos los valores falsy de un array.

function limpiarArray(arr = []) {
    let limpiarArreglo = arr.filter(x => x)
    return limpiarArreglo;
}

console.log('Ejercicio 14: Limpiar array')
console.log(limpiarArray([null, undefined, NaN, 4])) // → [4]
console.log(limpiarArray(['a', '', 'b'])) // → ['a', 'b']  
console.log(limpiarArray([0, 1, false, 2, '', 3])) // → [1, 2, 3]


// Ejercicio 15: Generar rango
// Descripción: Genera un array del 1 al número dado (inclusive).

function generarRango(n = 0) {
    let arreglo = [];
    for (let i = 1; i <= n; i++) {
        arreglo.push(i);
    }
    return arreglo;
}

console.log('Ejercicio 15: Generar rango')
console.log(generarRango(1)) // → [1]
console.log(generarRango(0)) // → []
console.log(generarRango(3)) // → [1, 2, 3]
console.log(generarRango(10)) // → [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// Ejercicio 16: Caracter frecuente
// Descripción: Retorna el carácter que más veces aparece en un texto (ignora espacios).

function caracterFrecuente(texto = '') {
    palabra = texto.toLowerCase().replaceAll(' ', '');
    let palabraNueva = {};
    let claveMax = '';
    let valorMax = 0;

    for (let i = 0; i < palabra.length; i++) {
        if (palabraNueva[palabra[i]]) {
            palabraNueva[palabra[i]] = palabraNueva[palabra[i]] + 1;
        } else {
            palabraNueva[palabra[i]] = 1;
        }
    }

    for (const letra in palabraNueva) {
        if (palabraNueva[letra] > valorMax) {
            valorMax = palabraNueva[letra];
            claveMax = letra;
        }
    }
    return claveMax;
}

console.log('Ejercicio 16: Caracter frecuente')
console.log(caracterFrecuente('xyz xyz')) // → 'x'
console.log(caracterFrecuente('aa bb cc dd')) // → 'a'
console.log(caracterFrecuente('aabbbc')) // → 'b'


// Ejercicio 17: Contar ocurrencias
// Descripción: Cuenta cuántas veces aparece cada palabra en una frase y devuelve un objeto.

function contarOcurrencias(frase = '') {
    if (frase === '') {
        return {};
    }

    let palabra = frase.toLowerCase().split(' ');
    let palabraNueva = {};

    for (let i = 0; i < palabra.length; i++) {
        if (palabraNueva[palabra[i]]) {
            palabraNueva[palabra[i]] = palabraNueva[palabra[i]] + 1;
        } else {
            palabraNueva[palabra[i]] = 1;
        }
    }
    return palabraNueva;
}


console.log('Ejercicio 17: Contar ocurrencias')
console.log(contarOcurrencias('a b a b c')) // → { a: 2, b: 2, c: 1 }
console.log(contarOcurrencias('')) // → {}
console.log(contarOcurrencias('hola hola mundo')) // → { hola: 2, mundo: 1 }


// Ejercicio 18: Obtener longitudes
// Descripción: Retorna un array con las longitudes de cada palabra en un texto.

function obtenerLongitudes(texto = '') {
    let longitudArreglo = [];
    textoArreglo = texto.trim().split(' ');
    /*
    for (let i = 0; i < textoArreglo.length; i++){
        longitudArreglo.push(textoArreglo[i].length)
    }
    return longitudArreglo;
    */
    textoArreglo.forEach(function (longitud) {
        longitudArreglo.push(longitud.length)

    });
    return longitudArreglo
}

console.log('Ejercicio 18: Obtener longitudes')
console.log(obtenerLongitudes('Hola mundo JS')) // → [4, 5, 2]
console.log(obtenerLongitudes('a bc def')) // → [1, 2, 3]
console.log(obtenerLongitudes('')) // → []


// Ejercicio 19: Promedio array
// Descripción: Calcula el promedio de un array de números.

function promedioArray(arr = []) {
    if (arr.length === 0) {
        return 0;
    }
    let suma = arr.reduce(function (acumulador, valorActual) {
        return acumulador + valorActual
    })
    return suma / arr.length;
}

console.log('Ejercicio 19: Promedio array')
console.log(promedioArray([2, 4, 6, 8])) // → 5
console.log(promedioArray([10])) // → 10
console.log(promedioArray([])) // → 0


// Ejercicio 20: Texto a lista
// Descripción: Convierte una cadena separada por comas en un array limpio y sin espacios extra.

function textoALista(texto = '') {
    if (texto.trim() === '') {
        return [];
    }
    let arreglo = texto.trim().replaceAll(' ', '').split(',');
    return arreglo;
}

console.log('Ejercicio 20: Texto a lista')
console.log(textoALista(' manzana, pera , uva')) // → ['manzana', 'pera', 'uva']
console.log(textoALista('a,b,c')) // → ['a', 'b', 'c']
console.log(textoALista('')) // → []

