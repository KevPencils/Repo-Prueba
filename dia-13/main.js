/* EJERCICIOS STRINGS */

// 1. Concatena dos cadenas de texto

// 2. Muestra la longitud de una cadena de texto

// 3. Muestra el primer y último carácter de un string

// 4. Convierte a mayúsculas y minúsculas un string

// 5. Crea una cadena de texto en varias líneas

// 8. Comprueba si una cadena de texto contiene una palabra concreta

// 9. Comprueba si dos strings son iguales

// 10. Comprueba si dos strings tienen la misma longitud


//1
let nombre= "Kevin";
let apellido ="Mura";

let nombreCompleto= (nombre + ` `+apellido);
console.log(nombreCompleto);
//2
console.log(apellido.length);

//3
console.log(apellido[0] +` `+ apellido[3]);





/* EJERCICIOS CONDICIONALES */

// 1. Imprime por consola tu nombre si una variable toma su valor

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

// switch

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

///////
//1
if (nombre== "Kevin"){
    console.log(nombre);
}
//2
let user= "Charmander";
let pass= "poke";
if (user=== "Charmander" && pass=== "poke"){
    console.log("Usuario y contraseña son correctos. Char.");
}
//3
/* let numeroSecreto= 3;

if (numeroSecreto >0){
    console.log("Tu número secreto es positivo.")
} else if (numeroSecreto ===0){
    console.log("tu número secreto es cero.")

} else{
    console.log("Tu número secreto es negativo.")
}
 */




/* let cantHomeros = 0;

while (cantHomeros < 2) {
  let personaje = prompt("Di tu nombre de personaje.");

  if (personaje && personaje.toLowerCase() === "homero") {
    cantHomeros++;
    console.log("No permitimos Homeros en este club");
  }
} */