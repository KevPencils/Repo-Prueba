/*Arrays */
// Crear un array:
//Un array puede contener diversos elementos, de diferente tipo. 
let miArray= ["kevin", 322, true, 37.7];
console.log(miArray[1]);



/* MÉTDODOS ARRAYS*/

//el largo del array en un número según los elementos que contenga:
console.log(miArray.length);

//agrega un elemento nuevo al final:
miArray.push("Pablo");

//agrega un elemento nuevo al inicio (shift puede agregar más de un elemento a la vez):
miArray.unshift("Felipe", "Thomas");

console.log(miArray);


//Elimina un elemento al final del array, y se puede guardar (retorna) en una variable como let variable= miArray.pop():
miArray.pop();

//Elimina un elemento al inicio del array, y se puede guardar (retorna) en una variable como let variable= miArray.shift():
miArray.shift();


//1
let Frutiarray=["frutilla", "manzana", "piña","cereza", "plátano", "damasco", "durazno"];
console.log(Frutiarray);
//2
console.log(Frutiarray[0], Frutiarray[Frutiarray.length-1]);

//3
Frutiarray.push("pera");
console.log(Frutiarray);

//4
Frutiarray.shift();
console.log(Frutiarray);

//7
let numArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
let numMayor=(0)
for (let index = 0; index < numArray.length; index++) {
    if (numArray[index] > numMayor){
        numMayor= numArray[index]
    }


}
console.log(numMayor)

/* let singleNum=[3,4,7,12];
let doubleNum=[""]; */

/* for (let i = 0; i < singleNum.length; i++) {
    singleNum[i]*2;
    doubleNum.push();
    
    
}
    console.log(doubleNum) */

let suma=(0);
let notasFunval= [100, 90, 10, 15, 67, 70, 0, 88];
notasFunval.forEach((nota) => {
    suma+ parseInt.nota;

})
console.log(suma/notasFunval.length)


/* OBJETOS*/
let persona={
    nombre: "Kevin",
    edad: 39,
    pais: "Chile",
    genero: "masculino",
    altura: 170,

}
//modificar un dato:
persona.edad= 40;
//agregar una llave:
persona.celular= "56966405556"

console.log(persona);




let estudianteFunval={
    nombres: "Kevin",
    edad: 39,
    pais: "Chile",
    notas: [100,90,0,51,85]

};

/* console.log(estudianteFunval.notas.length;i++) */

//
let estudiantes = [
  {
    nombre: "Marco",
    edad: 22,
    pais: "Peru", //estudiantes[0]
    notas: [100, 90, 0, 51, 85],
  },
  {
    nombre: "Pablo",
    edad: 33,
    pais: "Argentina", //estudiantes[1]
    notas: [90, 75, 0, 0, 10],
  },
  {
    nombre: "Thomas",
    edad: 21, //estudiantes[2]
    pais: "Argentina",
    notas: [51, 30, 20, 41, 85],
  },
  {
    nombre: "Woodleine",
    edad: 33, //estudiantes[3]
    pais: "Chile",
    notas: [88, 11, 33, 77, 99],
  },
  {
    nombre: "Kevin",
    edad: 28, //estudiantes[4]
    pais: "Bolivia",
    notas: [31, 30, 12, 51, 77],
  },
];


estudiantes[0].notas //accede a la llave "notas" dentro del objeto "0" dentro del array "estudiantes"
estudiantes[1].notas
estudiantes[2].notas
estudiantes[3].notas

function calcularPromedio(notas){
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}