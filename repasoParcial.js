// ANCHOR ---> ULTIMO REPASO, VAMOS QUE SE PUEDE 💪💪💪

// TODO ---> CREAR UNA FUNCION QUE RECIBA DOS NUMERO, LOS MULTIPLIQUE Y RETORNE
// LO SIGUIENTE : SI EL RESULTADO ES PAR ("es par") sino ("es impar")

const multiplicar = (n1, n2) => {
  let resultado = n1 * n2;
  if (resultado % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
};

let res = multiplicar(3, 4);
console.log(res);

console.log("-----------------");

// TODO ---> ENCONTRAR EL MENOR NUMERO DEL ARREGLO ( LA PRIMER COINCIDENCIA ) no estara en el parcial

let num = [12, 3, 24, 2, 3, 2];

const encontrarMenor = (arr) => {
  let menor = arr[0]; // 12 - 3 - 2
  let indice = 0; // 0 - 1 - 3

  for (let i = 0; i < arr.length; i++) {
    if (menor > arr[i]) {
      menor = arr[i];
      indice = i;
    }
  }

  // let indice2 = arr.indexOf(menor)

  return `el numero menor es ${menor} que esta en la posicion ${indice}`;
};

let resultado = encontrarMenor(num);
console.log(resultado);

console.log("--------------");

// TODO ---> Agregar al siguiente objeto el metodo promediar
// El mismo debera calcular el promedio en base a la propiedad NOTAS

let estudiante = {
  nombre: "Carmen",
  notas: [8, 6, 10],
  edad: 20,
};

estudiante.promediar = function () {
  let suma = 0;

  for (let i = 0; i < this.notas.length; i++) {
    suma += this.notas[i];
  }

  return suma / this.notas.length;
};

estudiante.nombre = "pepito"

let promedio = estudiante.promediar();
console.log(promedio);

// TODO ---> Encontrar el primer elemento que cumpla con la condicion de
// haber ganado un ticket o que  sea mayor de edad( 18 años o mas )
// deberas retornar dicho elemento

let participantes = [
  {
    nombre: "Florencia",
    edad: 22,
    ganoTicket: false,
  },
  {
    nombre: "Juan Pablo",
    edad: 17,
    ganoTicket: true,
  },
  {
    nombre: "Fernando",
    edad: 31,
    ganoTicket: false,
  },
  {
    nombre: "Guillermina",
    edad: 32,
    ganoTicket: true,
  },
  {
    nombre: "Gabriel",
    edad: 11,
    ganoTicket: true,
  },
];


const encontrarGanador = ( arr )=>{

  for (let i = 0; i < arr.length; i++) {
    
    if( arr[i].edad >= 18 && arr[i].ganoTicket ){
      return arr[i]
    }
  }

  return "Ningun participante gano"

}

let encontrado = encontrarGanador(participantes)
console.log(encontrado)


// TODO ---> Dado el siguiente arreglo de socios de una empresa
// se nos solicita filtrar a aquellos que tengan un total de
// 1500 acciones o mas, pero ademas, ser parte de la empresa desde antes
// de este año( los del 2023 no cuentan)
// Devolver un arreglo con dichos socios

let socios = [
  {
    nombreCompleto: "Joel Perez",
    añoDeEntrada: 2018,
    cantidadAcciones: 3200,
  },
  {
    nombreCompleto: "Juan Lopez",
    añoDeEntrada: 2022,
    cantidadAcciones: 4100,
  },
  {
    nombreCompleto: "Carmen Lopettegi",
    añoDeEntrada: 2023,
    cantidadAcciones: 1900,
  },
  {
    nombreCompleto: "Ernesto farias",
    añoDeEntrada: 2019,
    cantidadAcciones: 1300,
  },
  {
    nombreCompleto: "Juana Gimenez",
    añoDeEntrada: 2023,
    cantidadAcciones: 1200,
  },
];
