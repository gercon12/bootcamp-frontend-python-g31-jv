let numeroActual = '0'
let operador = ''
let operando = ''

//Consultar un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
//console.log({inputDisplay})
//console.log(inputDisplay);

//consultar multiples elementos a la vez
const buttons = document.querySelectorAll('.button')
//console.log(buttons)

//Eventos
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        //console.log('hice click!', event.target)

        const buttonText = event.target.textContent

        console.log(buttonText)

        if ('*-+'.includes(buttonText)) {
            //02. accionamos el operador
            operador = buttonText
            operando = Number(numeroActual)
            numeroActual = '0'
        } else if (buttonText === '=') {
            // calcular las operaciones en base al numero actual y el operando
            if (operador === '+') {
                numeroActual =  operando +  Number(numeroActual)
            }
            else if (operador === '-') {
                numeroActual = operando - Number(numeroActual)

            } else if (operador === '*') {
                numeroActual = operando * Number(numeroActual)
            }

        } else if (buttonText === 'CE') {
            //Limpiar el operando, operador y el input
            numeroActual = '0'
            operador = ''
            operando = ''
        }

        else {
            //01 se presiono algun numero
            numeroActual = Number(numeroActual + buttonText)
        }
        inputDisplay.value = numeroActual
    })
})

//const backg = document.querySelector('button__0')