'use strict'

/*
El usuario va introduciendo números por pantalla hasta que introduzca un número negativo,
en ese caso se mostrará el resultado: Mostrar la media y la suma de los números positivos introducidos.
Utilizar un bucle.
*/


var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce un número"));
    if(numero >= 0){
        suma += numero;
        contador++;
    }
}while(numero >= 0)

console.log("La media es " + suma/contador + " y la suma es " + suma);
