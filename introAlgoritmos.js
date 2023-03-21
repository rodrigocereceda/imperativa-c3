// ALGORITMOS

// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS
// y retorne el mayor ( si son iguales que retorne cualquiera de los )

const devolverMayor = (n1, n2) => (n1 > n2 ? n1 : n2);

let res = devolverMayor(2, 2);
console.log(res);

// 15, 13, 26, 21

let mayor = devolverMayor(devolverMayor(15, 13), devolverMayor(26, 21));

console.log(mayor);

let arr = [
  {
    nombre: " dsada",
  },
  {},
];
let numeros = [1, 5, 4];

console.log(numeros[1]);
// MATRICES 3 x 3 -->cuadrada
let matriz = [
  [1, 2, 3], // FILAS
  [5, 7, 3], // FILAS
  [5, 7, 3], // FILAS
];

console.log(matriz[1][1]);

let matrix = [
  [15, 21, 12],
  [87, 54, 11],
  [14, 65, 22],
];

// matrix[2][0]
// matrix[2][1]
// matrix[2][2]

// RECORRER UNA FILA ( fila 2) --> LA FILA ES ESTATICA Y LA COLUMNA ES DINAMICA
// LE PIDO LA LONGITUD A LA FILA
console.log("----------");

const recorrerFila = (mat, fila) => {
  let acc = 0;
  for (let i = 0; i < mat[fila].length; i++) {
    acc += mat[fila][i];
  }
  return acc;
};
let a = recorrerFila(matrix, 2);
console.log(a);

let matrix2 = [[15, 21, 12], [87], [14, 65, 22]];

// matrix2[0][1]
// matrix2[1][1]
// matrix2[2][1]

// RECORRER UNA COLUMNA --> la columna es estatica y la fila dinamica
// LE PIDO LA LONGITUD A LA MATRIZ
console.log("-----------");
const recorrerCol = (mat, col) => {
  let acc = 0;
  for (let i = 0; i < mat.length; i++) {
    if (mat[i][col] !== undefined) {
      acc += mat[i][col];
    }
  }

  return acc;
};

let b = recorrerCol(matrix2, 1);
console.log(b);

// RECORRER LA MATRIZ COMPLETA ( doble for / for anidado )

// si es cuadrada y esta completa RECORRER DIAGONALES
// RECORRER LA PRINCIPAL
// RECORRER LA SECUNDARIA
