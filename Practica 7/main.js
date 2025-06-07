const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 
//ejercitando con el "for":
/*  for (let index = 0; index < productos.length; index++) {
    console.log (`${productos[index].nombre} $${productos[index].precio}`);
   
 } */
//1:
productos.forEach(producto => {
    console.log(`${producto.nombre} $${producto.precio}`);
});

//2
const productosDisponibles = productos.map(producto => producto.nombre);
let productoBuscado = prompt("¿Qué producto estás buscando?");

if (productosDisponibles.includes(productoBuscado)) {
    alert(`${productoBuscado} está disponible.`);
} else {
    alert(`Lo sentimos, pero el producto buscado no está disponible.`);
}


//3
const productosDescuento = productos.map(producto => ({
  nombre: producto.nombre,
  precioDescuento: producto.precio * 0.9
}));

productosDescuento.forEach(producto => {
  console.log(`¡EN DESCUENTO!: ${producto.nombre} - $${producto.precioDescuento}`);
});

//4
let productosBaratos = productos.filter(est => est.precio < 100);
productosBaratos.forEach(est => {
  console.log(`Precios baratos: ${est.nombre} - $${est.precio}`);
});

//5
console.log(productos.slice(0,2));

//6
productos.sort((a,b) => a.precio - b.precio);
console.log(productos);

//7 ordena de manera inversa los productos por precio.
const productosRev = [...productos].reverse();
console.log(productosRev);