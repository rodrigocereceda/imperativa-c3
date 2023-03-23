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

console.log("---------------");
// RECORRER LA MATRIZ COMPLETA ( doble for / for anidado )
let matrix3 = [
  [15, 21, 1, 5],
  [87, 54],
  [14, 65, 5],
];

const recorrerCompleta = (mat) => {
  
    for(let i = 0; i < mat.length; i++){

        for(let j = 0; j < mat[i].length; j++) {
            console.log(mat[i][j])
        }

    }
    
};

let res = recorrerCompleta(matrix3);
// console.log(res)

// si es cuadrada y esta completa RECORRER DIAGONALES
let matrix5 = [
    [15, 21, 12],
    [87, 54, 11],
    [14, 65, 22],
];
// RECORRER LA PRINCIPAL

// matrix5[0][0]
// matrix5[1][1] 
// matrix5[2][2]

const recorrerPrincipal = (mat)=>{

    for(let i = 0 ; i < mat.length; i++){
        console.log(mat[i][i])
    }

}

console.log("------------")
recorrerPrincipal(matrix5)


// RECORRER LA SECUNDARIA
let matrixUnMillon = [
    [15, 21, 12],
    [87, 54, 11],
    [14, 65, 22],
];

// matrixUnMillon[0][2]
// matrixUnMillon[1][1]
// matrixUnMillon[2][0]

console.log("------------")
const recorrerSec = (mat)=>{

    for(let i = 0; i < mat.length; i++){ // 2
       console.log( mat[i][mat.length - (1 + i)]) // [0][2] - [1][1] - [2][0]
    }

}
recorrerSec(matrixUnMillon)

let matrixUnBillon = [
    [15, 21, 12, 5, 1],
    [87, 54, 11, 5, 1],
    [14, 65, 22, 5, 1],
    [14, 65, 22, 5, 1],
    [14, 65, 22, 5, 1],
];
matrixUnBillon[0][4]
matrixUnBillon[1][3]
matrixUnBillon[2][2]
matrixUnBillon[3][1]
matrixUnBillon[4][0]

const secundaria = (mat)=>{

    for(let i = 0; i < mat.length; i++){
        mat[i][mat.length - 1 - i]
    }

}
