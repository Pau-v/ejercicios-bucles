'use strict'

/*
Mostrar en el navegador todos los números divisores de un número introducido en un prompt.
*/

let numero = parseInt(prompt("Introduce un número"));

for (let i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(i);
    }
}