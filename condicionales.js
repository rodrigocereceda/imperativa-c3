//ANCHOR CONDICIONALES ---> if / ternario / switch-case

// CREAR UNA FUNCION QUE RECIBA EL ROL DE USUARIO Y RETORNE UN STRING
// QUE SI ES VENDEDOR RETORNE " ES UN VENDEDOR " , COMPRADOR --> "ES UN COMPRADOR"
// ADMIN ---> "es un ADMIN", RETORNAR EL ROL NO ESTA DEFINIDO

const determinarRol = (rolDeUsuario) => {
  // BLOQUE
  let frase = "";

  if (rolDeUsuario === "vendedor") {
    //BLOQUE
    frase = "es un vendedor";
  } else if (rolDeUsuario === "comprador") {
    //BLOQUE
    frase = "es un comprador";
  } else if (rolDeUsuario === "ADMIN") {
    //BLOQUE
    frase = "es un admin";
  } else {
    frase = "NO ES UN ROL VALIDO";
  }

  return frase;
};

let resultado = determinarRol("fdsfdsfsdfsdfsdd");
console.log(resultado);

// SCOPE ---> ALCANCE DE LAS VARIABLES

// VARIABLES LET Y CONST ---> SCOPE LOCAL

const probandoScope = () => {
  let perro = "Jack";

  if (false) {
    perro = "pepito";
  }

  return perro;
};

let resultado2 = probandoScope();
console.log(resultado2);

// MAYOR ES >= 18

// RETURN UN BOOLEANO DE SI O NO PARA LA SITUACION DEL USUARIO

const determinarSiEsMayor = (edadUsuario) => {
  // if( edadUsuario >= 18 ){

  //     return "si , el usuario es mayor"
  // }else{
  //     return "no, el usuario no es mayor"
  // }

  // CONDICION ? lo verdadero : lo falso

  let a =
    edadUsuario >= 18
      ? "si , el usuario es mayor"
      : "no, el usuario no es mayor";
  return a;
};

let pepitoEsMayor = determinarSiEsMayor(22);
console.log(pepitoEsMayor);

// CALCULAR EL IMPUESTO DE PATENTE

// COMO MINIMO $ 1000

// VW ---> 500
// VOLVO ---> 200
// RENAULT ---> 600
// FIAT ---> 400
// PEUGEOT ---> 800

const calcularImpuestoTotal = (marcaDeAuto) => {
  let impuesto = 1000;

  switch (marcaDeAuto) {
    case "vw":
      return impuesto + 500;
    case "volvo":
      return impuesto + 200;
    case "renault":
      return impuesto + 600;
    case "fiat":
      return impuesto + 400;
    case "peugeot":
      return impuesto + 800;
    default:
      return "Esa marca esta excenta";
  }
};

let totalPagar = calcularImpuestoTotal("volvo");
console.log(totalPagar);
