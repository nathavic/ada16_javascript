// puedeVerPelicula(edad, tieneAutorizacion)
// Crear una función puedeVerPelicula que tome como
// argumentos un número edad y un booleano tieneAutorizacion, 
// y devuelva true si la persona está habilitada para ver 
// la película o false si no.Sólo puede ver la película si: tiene 15 años o más, 
// o tiene autorización de sus padres.

// console.log(puedeVerPelicula(12, false)) // false
// console.log(puedeVerPelicula(12, true)) // true
// console.log(puedeVerPelicula(16, false)) // true
// console.log(puedeVerPelicula(18, true)) // true

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    if (edad >= 15 || tieneAutorizacion) {
        return true
    } else {
        return false
    }
}

console.log(puedeVerPelicula(12, false))
console.log(puedeVerPelicula(12, true))
console.log(puedeVerPelicula(16, false))
console.log(puedeVerPelicula(38, true))