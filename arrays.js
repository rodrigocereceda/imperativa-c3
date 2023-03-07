
// ANCHOR ---> Array

// let numeroDeLaSuerte1 = 12
// let numeroDeLaSuerte2 = 17
// let numeroDeLaSuerte3 = 29
// let numeroDeLaSuerte4 = 32

// ESTO ES UN ARREGLO
let numerosDeLaSuerte = [ 12, 17, 29, 32, 21, 1254, 1231, 12 ] // 

let mascotas = [ "jack", "maria", "pepito" ]

console.log( mascotas )

const recorrerArray = ( array )=>{
    
    let acumulador = 0 // 58

    for(let i = 0; i < array.length ; i++  ){
        // acumulador += array[i]
        acumulador = acumulador + array[i]
    }

    return acumulador
    
}

// recorrerArray(mascotas)
let resultado = recorrerArray(numerosDeLaSuerte)
console.log( resultado )


let palabra = "casa"

console.log(palabra[2])

console.log( palabra.length )

// indexOf ---> para encontrar una posicion 

console.log( palabra.indexOf("sa") )

console.log( mascotas.indexOf("pepito") )


let frase = "hola como estas?"

let arrayFrase = frase.split(" ")
console.log(arrayFrase)


let palabras = ["casa", "perro", "auto"]

console.log( palabras.includes("perros") )

// let stringPalabras = palabras.join(" ")

// console.log(stringPalabras)

// let nombre = "jorge"

// let a = nombre.toUpperCase()
// let b = a.toLowerCase()

// console.log(b)


let numeros = [1, 2, 3, 51, 22]

// console.log(numeros.pop()) // primero borra el ultimo elemento pero tambien lo guarda

let arrayInvertido = []

arrayInvertido.push( numeros.pop() )
arrayInvertido.push( numeros.pop() )
arrayInvertido.push( numeros.pop() )
arrayInvertido.push( numeros.pop() )
arrayInvertido.push( numeros.pop() )

console.log(arrayInvertido)




let numbers =[22, 33, 54, 66, 72, 54, 12, 1223]

console.log(numbers[numbers.length])

console.log( numbers[numbers.length - 1] )