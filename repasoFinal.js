// TODO FILTRAR LOS PRODUCTO QUE TENGAN MENOS DE 10 UNIDADES EN STOCK
// Y RETORNARLO

let items = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 5,
  },
];

const filtrar = (arr) => {
  let arrFiltrado = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].stock < 10) {
      arrFiltrado.push(arr[i]);
    }
  }

  return arrFiltrado;
};

let arrayFiltrado = filtrar(items);
console.log(arrayFiltrado);

// TODO ORDENAR EL ARREGLO DE FORMA DESCENDENTE

let edades = [43, 12, 1, 5, 32, 56, 7];

const ordenar = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

ordenar(edades);
console.log(edades);

// TODO ORDENAR EL ARREGLO DE FORMA ASCENDENTE SEGUN LA CANTIDAD DE STOCK

let productos = [
  {
    nombre: "televisor",
    precio: 500,
    stock: 7,
  },
  {
    nombre: "table",
    precio: 350,
    stock: 12,
  },
  {
    nombre: "celular",
    precio: 400,
    stock: 21,
  },
  {
    nombre: "notebook",
    precio: 600,
    stock: 16,
  },
];
const ordenar2 = (arr) => {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].stock > arr[j + 1].stock) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

ordenar2(productos);
console.log(productos);

// DADA LA SIGUIENTE MATRIZ

let matriz1 = [
  [2, 4, 3],
  [3, 1, 5], // [9, 3, 15]
  [8, 4, 9],
];

// TODO ---> UN SOLO CICLO
// CREAR UNA FUNCION QUE RETORNE UN NUEVO ARREGLO
// CON TODOS LOS ELEMENTOS DE LA FILA 2 (multiplicados x 3)

const recorrerFila = (mat, numFila) => {
  let newArr = [];

  for (let i = 0; i < mat[numFila].length; i++) {
    newArr.push(mat[numFila][i] * 3);
  }

  return newArr;
};

let a = recorrerFila(matriz1, 1);
console.log(a);

let matriz2 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];
// TODO CREAR UNA FUNCION QUE MODIFIQUE LOS ELEMENTOS DE
// LA COLUMNA 0, POR UN STRING QUE DIGA "hola"

const recorrerCol = (mat, numCol) => {
  for (let i = 0; i < mat.length; i++) {
    mat[i][numCol] = "hola";
  }
};
recorrerCol(matriz2, 0);
console.table(matriz2);

let matriz3 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
]; // 18
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE MULTIPLICAR TODOS
// LOS ELEMENTOS DE LA DIAGONAL PRINCIPAL

const recorrerPrincipal = (mat) => {
  let total = 1;

  for (let i = 0; i < mat.length; i++) {
    total *= mat[i][i];
  }

  return total;
};

let b = recorrerPrincipal(matriz3)
console.log(b)

let matriz4 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
]; // 12
// TODO CREAR UNA FUNCION QUE RETORNE EL TOTAL DE
// LA SUMA DE LA DIAGONAL SECUNDARIA

const recorrerSec  = ( mat )=>{

    let total = 0
    for( let i = 0; i < mat.length; i++ ){
         total += mat[i][ mat.length - (i + 1)]
    }
    return total
}

let pruebaUnMillon = recorrerSec(matriz4)
console.log(pruebaUnMillon)

let matriz5 = [
  [2, 4, 3],
  [3, 1, 5],
  [8, 4, 9],
];
// TODO --> ACA DOBLE FOR
// CAMBIAR TODOS LOS ELEMENTOS DE LA MATRIZ POR SU NEGATIVO

const recorrerMat = (mat)=>{

    for( let i = 0; i < mat.length; i++){

        for(let j = 0; j < mat[i].length; j++){
            mat[i][j] = ( mat[i][j] * (-1))
        }

    }

}

recorrerMat(matriz5)
console.table( matriz5 )
