let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    titularCuenta: "pepito",
    saldo: 27771,
  },
  {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldo: 8675,
    titularCuenta: "maria",
  },
  {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldo: 27363,
    titularCuenta: "juancito",
  },
  {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldo: 32415,
    titularCuenta: "carmen",
  },
  {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldo: 18789,
    titularCuenta: "jack",
  },
];

// ORDENAR EN BASE AL SALDO DE FORMA ASC O DESC DEPENDIENDO LA INSTRUCCION

const ordenar = (arr, orden) => {
  let aux;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (orden === "ASC") {
        if (arr[j].titularCuenta > arr[j + 1].titularCuenta) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      } else if (orden === "DESC") {
        if (arr[j].titularCuenta < arr[j + 1].titularCuenta) {
          aux = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = aux;
        }
      }
    }
  }
};

ordenar(arrayCuentas, "ASC");
console.log(arrayCuentas);

// Ejercicio 2:
// Debemos poder controlar el acceso a un recital de música para una determinada persona.
// Para eso, debemos realizar una función  que reciba dos parámetros
// La edad de la persona, Number
// Si tiene o no, el ticket de entrada , booleano
// La función deberá evaluar las siguientes condiciones y retornar en cada caso
// lo que se pida:
// Si tiene entrada y es mayor o igual de 18 años: retorna un valor booleano true.
// Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes
// acceder con un adulto acompañante”.
// Si no tiene entrada: retorna un booleano false.

const acceso = (edad, ticket) => {
  // if(edad >= 18 && ticket){
  //     return
  // }else if( edad < 18 && ticket){
  //     return "puedes pasar con un mayor"
  // }else{
  //     return false
  // }

  if (ticket) {
    if (edad >= 18) {
      return true;
    } else {
      return "solo puedes pasar con un mayor";
    }
  } else {
    return false;
  }
};

const numeros = [1, 2, 3, 4]; // [ 1, 2, 3, 10, 14 ]

// UTILIZANDO EL BUBBLE DETERMINAR SI UN ARREGLO ESTA O NO ORDENADO
// DE FORMA ASCENDENTE
// TRUE o FALSE
const verificarOrden = (arr) => {

  for (let j = 0; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      return "no esta ordenado";
    }
  }

  return "si esta ordenado";
};

let estaOrdenado = verificarOrden(numeros)
console.log(estaOrdenado)

// 1 --> NADA DE MATRICES - NI BUBBLE
// 2 --> BUBBLE
// 3 --> MATRICES a( tiene un for ) - b( tiene dos for )

