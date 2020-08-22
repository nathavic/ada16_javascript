/* const edad = 18

if (edad <= 13) {
    alert("Tenes 13 años o menos")
} else if (edad <= 18) {
    ("Tenes menos de 18 años")
} else if (edad <= 45) {
    alert("Tenes menos de 45 años")
} else {
    alert("Sos menor")
}
*/


// avanzarSemaforo(colorActual)
// Crear una función avanzarSemaforo que 
// acepte como argumento un string colorActual 
// y devuelva un string con el siguiente color del semáforo, 
// siguiendo el orden: verde -> amarillo -> rojo -> verde

// console.log(avanzarSemaforo('verde'))     // 'amarillo'
// console.log(avanzarSemaforo('amarillo'))  // 'rojo'
// console.log(avanzarSemaforo('rojo'))      // 'verde'



const avanzarSemaforo = colorActual => {
    if (colorActual == 'amarillo') {
        alert("Rojo!")
    } else if (colorActual == 'rojo') {
        alert("Verde!")
    } else if (colorActual == 'verde') {
        alert("Amarillo!")
    }
}

console.log(avanzarSemaforo('verde'))
console.log(avanzarSemaforo('amarillo'))
console.log(avanzarSemaforo('rojo'))