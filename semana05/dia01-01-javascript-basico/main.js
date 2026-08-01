//1. COMENTARIOS
console.log('Hola Javascript')

// Comentarios, Javascript

/*
Esto es un comentario
de
varias 
lineas 
 */

//2. TIPOS DE DATOS
//Primitivos basicos:
//2.1 Number (numeros)
//Ejemplos: 123, 34.89, -67, 0

console.log(20);
console.log(typeof 20);
console.log(123);
console.log(typeof 123);
console.log(34.89, typeof (34.89));
console.log(-67, typeof (-67));
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


//2.2 String (Texto)

console.log("German Contreras", typeof ("German Contreras"))

//2.3 Boolean (verdadero o falso)

console.log(true, false, typeof (true))


//2.4 undefined, no tiene valor aun
let x
console.log(x)

//2.5 null, intencionalmente está vacío
let nombre = null;
console.log(nombre);

//Verificar que tipos de datos devuelven las siguientes lineas


console.log('-------------------------------------------')

console.log(typeof 10);
console.log(typeof "hola");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

console.log('-------------------------------------------')

let b = 10;
let h = 5;
let area = (b * h) / 2;
console.log("El area del triangulo es: ", area);

console.log('-------------------------------------------')
let x1 = 10;
let y1 = 3;
let residuo = x1 % y1;
console.log("El residuo de la division es: ", residuo);


//8 condicionales (if, else if, else)
let numero = 7;
if (numero % 2 === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");


}


let nota = 18;
if (nota >= 13) {
    console.log("Aprobado");
} else {
    console.log("Desaprobado");
}

let heroe = "Spiderman";
if (heroe === "Batman") {
    console.log("Soy Batman");
} else if (heroe === "Spiderman") {
    console.log("Soy Peter Parker");
} else if (heroe === "ironman") {
    console.log("Soy Tony Stark");
} else {
    console.log("No soy ningun heroe");
}

// investigar: investigar la estructura switch

let fruta = "manzana";

switch (fruta) {
    case "banana":
        console.log("Es una banana.");
        break;
    case "manzana":
        console.log("Es una manzana.");
        break;
    default:
        console.log("No conozco esa fruta.");
}


//9. Ciclos (for, while, do while)
//for sirve para repetir una o varias instrucciones
//Ejercicio: imprimir los numeros del 0 al 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// while
let j = 0;
while (j < 10) {
    console.log(j);
    j++;
}

// do while
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 10);

// EJERCICIOS
// 2. Dado un número, mostrar "par y mayor a 10", "par y menor o igual a 10", "Impar"
let numero2 = 10;
if (numero2 % 2 === 0 && numero2 > 10) {
    console.log("par y mayor a 10");
} else if (numero2 % 2 === 0 && numero2 <= 10) {
    console.log("par y menor o igual a 10");
} else {
    console.log("Impar");
}



// 3. Dado un número entero, escribe un programa que:
// - Muestre "fizzbuzz" si el número es divisible entre 3 y 5.
// - Muestre "fizz" si el número es divisible solo entre 3.
// - Muestre "buzz" si el número es divisible solo entre 5.
// - En cualquier otro caso, debe mostrar el mismo número.

let numero3 = 15;
if (numero3 % 3 === 0 && numero3 % 5 === 0) {
    console.log("fizzbuzz");
} else if (numero3 % 3 === 0) {
    console.log("fizz");
} else if (numero3 % 5 === 0) {
    console.log("buzz");
} else {
    console.log('el numero es:', numero3);
}

//10. Funciones
// Una función es un bloque de código que se puede reutilizar y ejecutar cuando sea necesario.

//funcion sin parametros, basica
function saludar() {
    console.log("Hola funciones");
}

//Funcion con parametros
function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("German");

//funciones que retornan valores
function sumar(a, b) {
    const suma = a + b;
    return suma;
}


let resultado = sumar(5, 3);
console.log("El resultado de la suma es: ", resultado);

//Ejercicio: Crear una función que reciba un número y retorne si es par o impar.
function parImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

parImpar(7);

console.log('-------------------------------------------')
// Ejercicios
// 1. Crear una función que reciba un número y devuelva el doble de ese número por consola
function doble(numero) {
    let dobleNumero = numero * 2;
    console.log("El doble de", numero, "es:", dobleNumero);

}

doble(5); // Llamada a la función
// 2. Crear una función que reciba dos números y devuelva el mayor por consola
function mayor(a, b) {
    if (a > b) {
        console.log("El mayor es:", a);
    } else {
        console.log("El mayor es:", b);
    }
}

mayor(10, 7);

// 3. Reutilizar el ejercicio de fizzBuzz usando funciones de tal forma que puedan llamarlo de la siguiente manera. Ej. fizzBuzz(15) -> fizzbuzz
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero;
    }
}

fizzBuzz(15); // Llamada a la función

console.log('-------------------------------------------')


//11 cadena de texto
//propiedad length
let texto = "Hola, mundo!";
console.log(texto.length);

//acceder a caracteres individuales
let miNombre = "German";
console.log(miNombre[0]);
console.log(miNombre[1]);
console.log(miNombre[2]);

//metodos importantes de las cadenas de texto
console.log(miNombre.toUpperCase());
console.log(miNombre.toLowerCase());
console.log(miNombre.indexOf("r"));
console.log(miNombre.slice(1, 4));
console.log(miNombre.replace("German", "Germán Contreras"));

console.log('-------------------------------------------')

// EJERCICIOS:

// 1. Dado un string, crear una función llamada evaluarTexto que devuelva: "Largo" si tiene más de 10 caracteres y "Corto" si tiene 10 o menos.
function evaluarTexto(texto) {
    if (texto.length > 10) {
        return "Largo";
    } else {
        return "Corto";
    }
}
console.log(evaluarTexto("Hola, mi nombre es German")); // Llamada a la función

// 2. Dado un string, crear una función llamada invertirTexto que devuelve el texto invertido. Ej. hola -> aloh
function invertirTexto(texto) {
    let textoInvertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoInvertido += texto[i];
    }
    return textoInvertido;
}
console.log(invertirTexto("reconocer")); // Llamada a la función
console.log(invertirTexto("Hola, mi nombre es German")); // Llamada a la función
