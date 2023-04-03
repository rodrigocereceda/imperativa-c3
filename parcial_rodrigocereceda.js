// ANCHOR ---> Parcial, Rodrigo Cereceda 💪💪💪

// TODO ---> CREAR UNA FUNCION LLAMADA RESTARPARES QUE RECIBA DOS NUMERO,
//Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo.
//Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno o mas parámetros no cumple con la condición de ser un número par”
// const prompt = require("prompt-sync")({ sigint: true });

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
