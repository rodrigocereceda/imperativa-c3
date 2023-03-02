
//ANCHOR Estructuras de repeticion ---> for / while / do while

// REALIZAR UN CONSOLE LOG QUE MUESTRE 10 UN MENSAJE QUE DIGA HOLA



const repetirDiezVeces = ( numero )=>{

    // INICIALIZACION ; CONDICION ; MODIFICADOR

    // for( let i = 1 ; i <= 10 ; i++ ){
    //     console.log( `${i} - ${11 - i}` )
    // }

    // IMPRIMIR POR CONSOLA LOS NUMEROS PARES DESDE EL 1 AL 30

    let contador = 0

    for( let i = 1 ; i <= numero ; i++ ){

        if( i % 2 === 0 ){
           contador += 1
        }

    }

    return contador

}

let resultado = repetirDiezVeces(25)
console.log(resultado)

console.log("------------------")
console.log("------------------")
console.log("------------------")
const probandoWhile = ()=>{

    // IMPRIMIR LOS NUMEROS DEL 1 al 10

    let i = 11

    while( i <= 10 ){
        console.log( i )

        i++
    }

}
probandoWhile()


const probandoDoWhile = ()=>{

    // IMPRIMIR LOS NUMEROS DEL 1 al 10

    let i = 11

    do{
        console.log( i )
        i++
    }while( i <= 10 )

}
probandoDoWhile()

// 7

// console.log( 7 * 1 = 7 )
 

// 7 * 1 = 7
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 2 = 14
// 7 * 10 = 70
console.log("----------")

const tablaMultiplicar = ( numero )=>{

    for(let i = 1 ; i <= 10; i++){
        console.log( `${numero} * ${i} = ${ numero * i } ` )
        console.log( numero + " * " + i + " = " + (numero * i) )
    }

}

tablaMultiplicar(6)