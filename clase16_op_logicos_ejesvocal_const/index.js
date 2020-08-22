// OPERADORES LOGICOS


// && =  and y e :: unir condiciones :: 
// une condiciones, ambas tiene que ser true

const edadUsuario = 45
    // se edadusuario menor o igual a 13 AND maior o igual a 30:
if (edadUsuario >= 13 && edadUsuario <= 30) {
    alert("Tenes entre 13 y 30 años")
}

// || = or o ou (alt+1) :: elejir entre condiciones :: inclusivo
// une condiciones, al menos una tiene ser true
// elejis 1 o 2
// 1 - true
// 2 - true
// 1 o 2 -- true
// 0 -- false

const edadUsuario1 = 89
    // se edadusuario tiene menos o igual 13 OR mas o igual 50:
if (edadUsuario1 <= 13 || edadUsuario1 >= 50) {
    alert("podes pasar")
}

// esVocal(letra)
// Crear una función esVocal que tome como argumento un string 
// letra y devuelva true si letra es una vocal o false si no lo es.

// console.log(esVocal('a')) // true
// console.log(esVocal('n')) // false
// console.log(esVocal('e')) // true

const esVocal = (letra) => {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return true
    } else {
        return false
    }
}

console.log(esVocal('a'))
console.log(esVocal('n'))
console.log(esVocal('e'))

//esConsonante(letra)
// Crear una función esConsonante que tome como argumento un string
// letra y devuelva true si letra es una consonante o false si no lo es.

// console.log(esVocal('a')) // false
// console.log(esVocal('n')) // true
// console.log(esVocal('e')) // false

const esConsonante = (letra) => {
    if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return false
    } else {
        return true
    }

}

console.log(esVocal('a')) // false
console.log(esVocal('n')) // true
console.log(esVocal('e')) // false