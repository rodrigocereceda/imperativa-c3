// ALGORITMOS

// CREAR UNA FUNCION QUE RECIBA 2 NUMEROS
// y retorne el mayor ( si son iguales que retorne cualquiera de los )

const devolverMayor = (n1, n2) => (n1 > n2 ? n1 : n2);

let res = devolverMayor(2, 2);
console.log(res);

// 15, 13, 26, 21

let mayor = devolverMayor(devolverMayor(15, 13), devolverMayor(26, 21));

console.log(mayor);

