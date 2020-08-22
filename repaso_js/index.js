// Repaso Estructura Condicional

// if () : una pergunta que si debe responder con boolean

const edadDelUsario1 = prompt("Cual es tu edad?")

if (edadDelUsario1 >= 18) {
    alert("Felicitaciones")
} else {
    alert(" :( ")
}


let edadDelUsario = 17
console.log(2 + 2) // 4
console.log(edadDelUsario >= 18) // false
console.log(edadDelUsario == 17) // true

// convertir valor a boolean / tratar de convertir el 8 a boolean

console.log(Boolean(8)) // true
console.log(Boolean(0)) // false

// falsy 
// 0
// - 0
// undefined
// ""
// NaN

const edadDelUsario2 = 7

// js ahora entiende 18 como boolean
// TRUE o sea, alert felicitaciones
if (18) {
    alert("Felicitaciones")
} else {
    alert(" :( ")
}

// 0 es false: 

const cantidadDisponible = 0

if (cantidadDisponible) {
    alert("Esta disponible")
} else {
    alert("No tenemos en stock")
}


// esPositivoONegativo(numero)
// Crear una función esPositivoONegativo que acepte
// como argumento (parametro) un numero y devuelva (return) 
// el string positivo 
// si el numero es positivo, o el string negativo 
// si el numero es negativo
// console.log(esPositivoONegativo(3))  // 'positivo'
// console.log(esPositivoONegativo(-5)) // 'negativo'



const esPositivoONegativo = (edad) => {
    if (edad >= 3) {
        return true
    } else {
        return false
    }
}

console.log(esPositivoONegativo(3))
console.log(esPositivoONegativo(-5))
console.log(esPositivoONegativo(8))
console.log(esPositivoONegativo(-74))