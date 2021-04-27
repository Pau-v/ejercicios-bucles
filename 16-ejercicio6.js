'use strict'

/*
Se le pide a un usuario por pantalla (prompt) un número y el programa nos tiene que mostrar si es par o impar.
Si el número introducido no es válido nos pide de nuevo el número.

*/
do{
    var numero = parseInt(prompt("Introduce un número"));
    if(numero == 'NaN'){
        console.log("Introduce un número correcto.")
    }
    else if( numero % 2 ==0 ){
        console.log("El número introducido es par.")
    }
    else{
       console.log("El número introducido es impar.");
    }
}while(numero == 'NaN')


  /* interpreté el enunciado de la siguiente manera: si el usuario mete un caracter que no sea un numero, vuelve a perdir
  un numero.
 Considero como numero no valido todo valor que haga que el metodo parseInt falle.*/