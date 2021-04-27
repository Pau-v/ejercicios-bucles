'use strict'

/*
Mostrar todos los números impares que hay entre dos números introducidos por el usuario
*/

let numero1 = parseInt(prompt("Introduce un número"));

let numero2 = parseInt(prompt("Introduce otro número"));

let numeros;

if (numero1==numero2){
    console.log("No hay impares en este rango");
}else if(numero1>numero2){
    numero=numero1;
    numero1=numero2;
    numero2=numero;
}

while(numero1<numero2){
    if(numero1 % 2 != 0){
        console.log(numero1);
    }
    numero1++;
}





