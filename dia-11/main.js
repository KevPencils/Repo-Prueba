//Aquí podemos poner comentarios en una sola fila.

/*Aquí puedo poner
 comentarios 
multi-línea */
/* console.log: La manera de mostrar cosas en la consola */

console.log("Hola Mundo");
console.log(3+2);
console.log("hola mundo y amigos de Funval");

let var1= 12;

console.log (var1);


//Creación de variables:
var pepito = "hola pepito"; // NO DEBE USARSE porque tien un scope global que tiene.
console.log(pepito);

//let:
let juanito = "Hola don Juanito";
console.log(juanito);

//las variables son dinámicas. Pueden cambiar de valor:

juanito = "Hola Juanito Loquillo"
console.log(juanito);
juanito= 77;
console.log(juanito);

//constantes. No cambia su valor. Pero no avisa, sino dentro del navegador.
const pedrito ="Hola Pedrito";
console.log(pedrito);


/*formato de nombre de una variable: */
/*Lower Camel Case: */
let apellidoPaterno;
let apellidoMaterno;
let apellidopaternoMaterno;
//no se permite comenzar los nombres con números ni símbolos, con excepción del signo $.

///////////
/*Tipos de DAtos Primitivos */

// 7 tipos de Datos Primitivos:

/*string*/
let nombre= "kevin";  //<----String o cadena de texto.
let apellido= "Mura Tobar"; //los espacios se consideran carácteres.

/*Number */
let enteros = 12; //enteros (whole).
let decimales= 45.5; //decimales (float).
let negativos= -15;// neg.

/*Boolean */
let verdadero = true;
let falso = false;

/*Undefined*/
let indefinida;

/*Null */
let kevin = null;

/*symbol*/
let simbolo = Symbol("numerico1");

/*Big Int*/
let numeroGrande = 22646551654648465121351n;
let numeroGrande2 = BigInt(2264655165464846512135); //dos formas de crear una var BigInt; el sistema va a redondear si no se usa este tipo de var.

/* va a mostrar en consola qué tipo de variable es: */
console.log(typeof nombre);

console.log(typeof enteros);

console.log(typeof indefinida);

console.log(typeof enteros);

console.log(typeof simbolo);

console.log(typeof  numeroGrande);




// 1. Escribe un comentario en una línea
//bueno.

// 2. Escribe un comentario en varias líneas
/*un comentario
 en varias 
 líneas*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let string= "Hola Mundo";
let numero= 3;
let buleano= true;
let indefinido;
let varnulo= null;
let symbolo= symbol("%");
let numeroGigante= 245000311565165165165165165165165165n;

// 4. Imprime por consola el valor de todas las variables
console.log(string);
console.log(numero);
console.log(buleano);
console.log(indefinido);
console.log(varnulo);
console.log(symbolo);
console.log(numeroGigante);

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof string);
console.log(typeof numero);
console.log(typeof buleano);
console.log(typeof indefinido);
console.log(typeof varnulo);
console.log(typeof symbolo);
console.log(typeof numeroGigante);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
string= "Chao mundo";
 numero= 666;
 buleano= false;
 indefinido;
 varnulo= null;
 symbolo= symbol("*");
 numeroGigante= 6666666666666666666666666666666666666666666666n;

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
 string= 666;
 numero= "666";
 buleano= "false";
 indefinido= "666";
 varnulo= null;
 symbolo= symbol(false);
 numeroGigante= 6666666666666666666666666666666666666666666666n;

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const pokemon= "Hola Mundo";
const cantidad= 3;
const esBueno= true;
//const missingNo;
const papaAsh= null;
const sym= symbol("&");
const PokemonFinalNumber= 245000311565165165165165165165165165n;

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse




/*OPERADORES ARITMÉTICOS */

/*suma*/
let a= 2;
let b= 3;
let suma = a + b;
let resultado = 2 + 3;

/*Resta*/
let resta= a - b;

/*Multiplicación */
let Multiplicación= a * b;

/*División*/
let division= a / b;

/*Modulo */
let modulo= a % b;

/*Potencias */
let potencia= a ** B;

/*Incremento*/
a++; // a=a+1

/*Incremento*/
a--; // a=a-1

/////
/*Operadores de Asignación */
/////
let var_3 = 23;
var_3 = 34;

//de suma:
var_3 += 10; //var_3= var_23 + 10

//de resta:
var_3 -= 5; //var_3= var_23 - 5

//de suma:
var_3 += 10; //var_3= var_23 + 10

//de multiplicación:
var_3 *= 2; //var_3= var_23 * 2

//de multiplicación:
var_3 /= 2; //var_3= var_23 / 2


/*Operadores de Comparación */
//siempre arroja un boolean
let aa = 24;
let bb = 23;

let resultadito =
    aa == bb;
console.log(resultadito);

let ganas= true;
let partido= true;
let equipo= true;
let zapatillas= false;
let tiempo= false;

let voyJuego= ganas && zapatillas;
let hayJuego= equipo && part;


