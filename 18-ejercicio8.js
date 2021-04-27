'use strict'

/*
Hacer una calculadora que pida dos números por pantalla.
Si metemos uno mal que nos los vuelva a pedir.
En el cuerpo de la página y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras.
*/

let numero1 = parseInt(prompt("Introduce un número"));

let numero2 = parseInt(prompt("Introduce otro número"));

let controlador = false;

do{
    if(numero1 != NaN && numero2 != NaN){
        controlador = true;
        console.log("Suma " + numero1+numero2);
        console.log("Resta " + numero1-numero2);
        console.log("Multiplicación " + numero1*numero2);
        console.log("División " + numero1/numero2);
    }
}while(controlador)