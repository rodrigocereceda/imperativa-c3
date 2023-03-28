
//ANCHOR ALGORITMO DE ORDENAMIENTO ---> BUBBLE SORT
// let arrOrdenado = numeros.sort((a,b)=> a - b)
// console.log(arrOrdenado)

// ASCENDENTE
const numeros = [12, 15, 11, 4, 2, 19] // [2, 5, 1, 3, 6 ] [2, 1, 3, 5, 6 ] [1, 2, 3, 5, 6]
let palabras = ["casa", "Zebra", "abeja", "Abeja", "aVion"]

const ordenar = (arr, instruccion)=>{

    // let cajita
    let cajita = undefined

    for(let i = 0; i < arr.length; i++){

        // ( le pueden restar -i para dar menos vueltas)
        for(let j = 0; j < arr.length - 1; j++){ 
          if(instruccion === "ASC"){

              if( arr[j] > arr[j + 1] ){ 
                  // ACA VA EL INTERCAMBIO
                  cajita = arr[j]
                  arr[j] = arr[j + 1]
                  arr[j + 1] = cajita
                  
                }
                
            }else if( instruccion === "DESC"){

                if( arr[j] < arr[j + 1] ){ 
                    // ACA VA EL INTERCAMBIO
                    cajita = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = cajita
                    
                }
            }
            
        }

    }

}

console.log(numeros)
ordenar(numeros, "ASC")
console.log(numeros)
