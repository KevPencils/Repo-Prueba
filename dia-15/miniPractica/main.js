let estudiantes = [
  {
    nombre: "Felipe",
    edad: 33,
    pais: "Chile",
  },
  {
    nombre: "Pablo",
    edad: 28,
    pais: "Argentina",
  },
  {
    nombre: "Juana",
    edad: 22,
    pais: "Chile",
  },
  {
    nombre: "Mahonri",
    edad: 18,
    pais: "Guatemala",
  },
  {
    nombre: "Carlo",
    edad: 50,
    pais: "Peru",
  },
  {
    nombre: "Thomas",
    edad: 33,
    pais: "Argentina",
  },
];

contenedor = document.querySelector(".contenedor"); 

for (let i = 0; i < estudiantes.length; i++) {
  contenedor.innerHTML += `


<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiantes[i].nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiantes[i].edad}</p>
<p class="font-normal text-gray-700 dark:text-gray-400">${estudiantes[i].pais}</p>
                                                            
</a>

`;
}

