// ANCHOR ---> objetos literales

let nombres = ["a", "b", "c"];

// propiedades(describen) y metodos(acciones)
// pares de clave : valor

let persona = {
  nombre: "pepito",
  apellido: "perez",
  esCasado: true,
  hablar: function () {
    return `hola como estas? mi nombre es ${this.nombre}`;
  },
  direccion: {
    calle: "españa",
    numero: 222,
  },
  mascotas: ["jack", "lola", "rojo"],
  dormir: function () {
    return "no molestar, estoy durmiendo";
  },
};
// BRACKET NOTATION

// console.log( persona["apellido"] )
// console.log( persona.apellido )

// DOT NOTATION
console.log(persona.nombre);
console.log(persona.hablar());

// COMO MANIPULAR UN OBJETO

// MODIFICAR O AGREGAR PROPIEDADES
console.log(persona);

persona.edad = 22;
persona.rut = 32132123;

persona.nombre = "maria";

persona.comer = function () {
  return "estoy comiendo " + this.nombre;
};

console.log(persona);

console.log(persona.comer());

// LISTADO DE ALUMNOS (2)
// CADA ALUMNO DEBE TENER NOMBRE, NOTAS (3), UN METODO CALCULAR EL PROMEDIO
// SI TIENE 7 o mas ESTA APROBADO 

let promediar = function () {
  let acc = 0;
  for (let i = 0; i < this.notas.length; i++) {
    acc += this.notas[i];
  }
  return acc / this.notas.length;
};

let determinarSituacion = function () {
  let promedio = this.calcularPromedio();
  if (promedio >= 7) {
    return true;
  } else {
    return false;
  }
};

let alumnos = [
  {
    nombre: "juan",
    notas: [2, 4, 6],
    calcularPromedio: promediar,
    estaAprobado: determinarSituacion,
  },
  {
    nombre: "carmen",
    notas: [8, 9, 10],
    calcularPromedio: promediar,
    estaAprobado: determinarSituacion,
  },
];

console.log("------------");
// console.log( alumnos[0].calcularPromedio() )
// console.log( alumnos[1].calcularPromedio() )

const determinarPromedio = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(
      `el promedio del alumno ${array[i].nombre} es de
       ${array[i].calcularPromedio()} por lo tanto esta ${
        array[i].estaAprobado() ? "aprobado" : "desaprobado"
      }`
    );
  }
};

determinarPromedio(alumnos);
