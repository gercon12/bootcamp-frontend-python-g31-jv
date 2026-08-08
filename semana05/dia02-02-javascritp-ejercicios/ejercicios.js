

function contarVocales(texto) {
    const resultado = texto.toLowerCase().split('').filter(function(letra) {
        return 'aeiouáéíóú'.includes(letra)
    })

    return resultado
}


// Ejercicio 2: Eliminar duplicados
// Descripción: Elimina elementos duplicados de un array manteniendo el orden.

function eliminarDuplicados(arr = []) {

    const resultado = []
    for (const elemento of arr) {
        if (!resultado.includes(elemento)) {
            resultado.push(elemnto)
        }
    }

  return resultado
}


//Version 2
return [...new Set ()]

console.log('Ejercicio 2: Eliminar duplicados')
console.log(eliminarDuplicados([1,2,2,3])) // → [1,2,3]
console.log(eliminarDuplicados(['a', 'b', 'a'])) // → ['a','b']
console.log(eliminarDuplicados([])) // → []
console.log(eliminarDuplicados([true, false, true])) // → [true, false]

