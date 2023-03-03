// Algoritmo para convertir una cantidad de pesos a dólares.

// 1 dolares = 756

// function convertidor1 (cantidadPesos){

// }

// const convertidor2 = function(cantidadPesos){

// }

const convertidor3 = (cantidadPesos, valorDolar) => cantidadPesos / valorDolar;

let a = convertidor3(1000, 756);
console.log(a);

let b = convertidor3(2000, 850);
console.log(b);

console.log("------------");
// Elaborar un programa que permita ingresar un número entero del 1 al 12
// y muestre la tabla de multiplicar de dicho número.

const tabla = (numero) => {
  if (numero % 1 !== 0 || numero < 1 || numero > 12) {
    console.log("lo siento el numero no es valido");
    return;
  }

  // for( let i = 1 ; i <= 10 ; i++ ){
  //     console.log( `${numero} * ${i} = ${numero * i}` )
  // }

  let i = 1;
  while (i <= 10) {
    console.log(`${numero} * ${i} = ${numero * i}`);

    i++;
  }
};

tabla(11);

// console.log( 3.2 % 1 === 0 ) // true cuando el numero saa entero
console.log("----")
const puedePasar = (edad) => {


  if (edad < 1) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
    return
  }

  let esImpar = (edad % 2) !== 0

  if (edad < 18) {
    console.log("No puede pasar al bar.");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  }else if( edad === 21){
    console.log("Puede pasar al bar, felicitaciones");
  }else {
    console.log("Puede pasar al bar y tomar alcohol.");
  }

  if( esImpar ){
    console.log("sabias que tu edad es impar?")
  }
};

puedePasar(30);
