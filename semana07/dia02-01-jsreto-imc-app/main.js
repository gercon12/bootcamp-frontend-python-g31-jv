// **Condiciones del IMC:**

// * Baja: < 18.5
// * Normal: < 18.5 - 24.9
// * Sobrepeso: < 25 - 29.9 
// * Obeso: > 30

const imcPeso = document.querySelector('.imc__peso')
const imcAltura = document.querySelector('.imc__altura')
const imcButton = document.querySelector('.imc__button')
const imcResultado = document.querySelector('.imc__resultado')
const imcParrafo = document.querySelector('.imc__Parrafo')


imcButton.addEventListener('click', (event) => {
    console.log('calculando imc')

    //Inicializar variables
    let resultadoImc = 0
    const peso = Number(imcPeso.value)
    const altura = Number(imcAltura.value) / 100

    //Limpiar estilos aplicados al Html
    imcResultado.classList.remove(
        'text-white',
        'text-yellow-500',
        'text-green-500',
        'text-orange-500',
        'text-red-500'
    )

    imcParrafo.classList.remove(
        'borde-parpadeante'
    )

    //Ver si hay valor 0 o valores string
    if (peso === 0 || altura === 0 || typeof (peso) === 'string' || typeof (altura) === 'string') {
        imcResultado.textContent = 'Invalido'
        imcResultado.classList.add('text-white')
        return
    }

    //Realizar calculo IMC
    resultadoImc = Number(peso / (altura ** 2)).toFixed(1)
    console.log('Su IMC es: ', resultadoImc)


    //Comparar rango de valores de IMC
    if (resultadoImc < 18.5) {
        imcResultado.textContent = ' Baja'
        imcResultado.classList.add('text-yellow-500')
    } else if (resultadoImc < 25) {
        imcResultado.textContent = ' Normal'
        imcResultado.classList.add('text-green-500')
    } else if (resultadoImc < 30) {
        imcResultado.textContent = ' Sobrepeso'
        imcResultado.classList.add('text-orange-500')
    } else {
        imcResultado.textContent = 'Obeso'
        imcResultado.classList.add('text-red-500')
        imcParrafo.classList.add('borde-parpadeante')
    }
    //imcResultado.textContent = resultadoImc

}
)



