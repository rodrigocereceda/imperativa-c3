// FUNCIONES

// DECLARADAS vs EXPRESADAS ( 2 tipos)

// DECLARADAS ---> TIENEN UN NOMBRE


function saludar( nombreUsuario ){

    return `Hola ${nombreUsuario} bienvenid@`
    
}


let saludo = saludar( "maria" ) 

console.log( saludo )

let saludo2 = saludar( "juan" ) 

console.log(saludo2)

function sumar ( num1, num2 ){
    return num1 + num2
}


let resultado = sumar(10, 3)
console.log(resultado)

let resultado2 = sumar(15, 2)
console.log(resultado2)

function restar ( n1, n2 ){

    return n2 - n1

}

let resultadoResta = restar( 10, 12 )
console.log( resultadoResta )

// EXPRESADAS o ANONIMAS COMUNES - FLECHA 

// EXPRESADAS COMUNES

const multiplicar = function (n1, n2){

    return n1 * n2

}

let resultadoMul = multiplicar(1, 3)
console.log( resultadoMul )

// console.log( multiplicar(1, 3) )


// EXPRESA O ANONIMA DE TIPO FLECHA --- > ARROW FUNCTION

const dividir = ( n1, n2 ) => { 
    return n1 / n2
}

let resulDivision = dividir(10, 2) 
console.log(resulDivision)

// ANTERIO - TRIPLE - ANTERIOR DEL TRIPLE

const anterior = ( numero )=>{
    return numero - 1
}

console.log( anterior(20) )

const triple = ( numero )=>{

    return numero * 3

}

console.log( triple(5) )



const anteriorDelTriple = (numero)=>{
    // return (numero * 3) - 1

    let resultadoTriple = triple(numero)
    let resultadoAnterior = anterior(resultadoTriple)
    return resultadoAnterior

    // return anterior(triple(numero))
}

console.log(anteriorDelTriple(20))