// ---> Variables -- una caja donde guardamos algo

let nombreUsuario = "pepito";
console.log(nombreUsuario);

nombreUsuario = "juan";
console.log(nombreUsuario);

const apellido = "Perez";

let edad = 30;
edad = 31;

// apellido = "otra cosa" // ESTO NO SE PUEDE

// ---> TIPOS DE DATOS

// string ---> cadenas de texto o caracteres
let frase = "hola mundo"; // ''

// number
let cantidadMascotas = 4;
cantidadMascotas = cantidadMascotas + 1;

// console.log(precio) // NO SE PUEDE
let precio = 5.4;

// Booleanos

let isLogged = true; // true = verdadero ||| false = falso
let estaCasado = false;
let esMayorDeEdad = false;

// UNDEFINED

// let email = undefined

let email;
// console.log(email)

// NULL
// NaN

// console.log(nombreUsuario)

// LAS VARIABLES SE INICIALIZAN UNA SOLA VEZ

let password = "juan";

console.log(password);

password = true;

console.log(password);

password = "hola";

console.log(password);
console.log("--------------------");

// OPERADORES MATEMATICOS

let nombre = "maria";
let apellido2 = "Perez";
let nombreComple = `${nombre} ${apellido2}`;

let saludo = "Hola " + nombre + " " + apellido2 + " como estas?"; //ESTO NOOOOO
let saludo2 = `Hola ${nombre} ${apellido2} como estas?`; // ESTO SIII
// TEMPLATE LITERALS ---> backsticks ``

console.log(saludo);
console.log(saludo2);
console.log(nombreComple);

//+ - * / %
let num = 10;
let num2 = 3;

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2); // DEVUELVE EL RESTOOO

// OPERADORES DE COMPARACION ---> Devuelve un booleano
console.log("-------------------");

let n1 = "15";
let n2 = 15;

console.log(n1 < n2); // TRUE
console.log(n1 > n2); // FALSE
console.log(n1 <= n2); // TRUE
console.log(n1 >= n2); // FALSE

// COMPARACION SIMPLE ---> UNICAMENTE VERIFICA EL DATO, NO EL TIPO
console.log("------------");
console.log(n1 == n2);
console.log(n1 != n2);

// COMPARACION ESTRICTA ---> VERIFICA EL DATO PERO TAMBIEN EL TIPO DE DATO
console.log(n1 === n2);
console.log(n1 !== n2);

// LO DISTINTO
console.log("----------------");
console.log("----------------");
console.log("----------------");

let esMayor = true;

console.log( !esMayor );

console.log( !(15 < 12) );


// OPERADORES LOGICOS

// AND ---> &&
// OR  ---> ||
console.log("-----")
console.log( 12 < 15 && 54 < 1 && 2 === 2 ) // DEVUELVE TRUE SI ABSOLUTAMENTE TODOS SON TRUE

console.log( 12 === 15 || 14 > 8 || 24 < 12 ) // DEVUELVE TRUE SI POR LO MENOS UNA CONDICION SE CUMPLE

let nombre1 = "juancito"
let nombre2 = "juancito"

console.log( nombre1 === nombre2)

let rolDeUsuario = "comprador"

console.log( rolDeUsuario === "vendedor" )