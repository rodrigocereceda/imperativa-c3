//la lista de clientes.



// let num = [ {nombre:"a"}, {nombre:"b"}, {nombre:"c"} ] 

// // num[0] ---> 1
// // num[1] ---> 5
// // num[2] ---> 15

// for( let i = 0; i < num.length ; i++ ){
//     num[i].nombre ---> "a" ---> "b" ---> "c"
// }

let arrayCuentas = [
  {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldo: 27771,
    titularCuenta: "pepito",
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
// podes continuar tu codigo a partir de aca!

let banco = {
  clientes: arrayCuentas,
  consultarCliente: function( nombreDelTitular ){
    for( let i = 0; i < this.clientes.length; i++ ){
        if(this.clientes[i].titularCuenta === nombreDelTitular){
            return this.clientes[i]
        }
    }
  },
  deposito: function( nombre, cantidad ){
    let objetoCliente = this.consultarCliente( nombre )
    // objetoCliente += cantidad
    objetoCliente.saldo = objetoCliente.saldo + cantidad
    // return  "Depósito realizado, su nuevo saldo es: " + objetoCliente.saldo
    console.log(  `Depósito realizado, su nuevo saldo es: ${objetoCliente.saldo}` )
  },
  extraccion: function( nombre, cantidad ){
    let objetoCliente = this.consultarCliente( nombre )
    // objetoCliente += cantidad
    if( objetoCliente.saldo >= cantidad){

        objetoCliente.saldo = objetoCliente.saldo - cantidad
        console.log(  `extraccion realizado, su nuevo saldo es: ${objetoCliente.saldo}` )
    }else{
        console.log("No tienes saldo suficiente")
    }
    
  }
};

console.log( banco.consultarCliente("juancito") )

console.log("antes de ejecutar")
banco.deposito( "juancito", 10000 )


console.log( banco.consultarCliente("juancito") )




