function areaCuadrado(lado1, lado2) {//Func Cuadrado
    let resultado = lado1 * lado2;
    return resultado;
}

function areaRectangulo(base, altura) {//Func Rectángulo
    let resultado = base * altura;
    return resultado;
}

function areaTriangulo(base, altura) {//Func Triángulo
    let resultado = (base * altura) / 2;
    return resultado;
}

let figura = "";

while (figura !== "0") {
    figura = prompt(
        "Qué figura escoges para calcular su área:\n" +
        "1- Cuadrado\n" +
        "2- Rectángulo\n" +
        "3- Triángulo\n" +
        "0- Salir\n"
    );

    if (figura === null) {
        break;
    }

    if (figura === "1") {
        let lado1 = parseFloat(prompt("Ingrese la medida del lado 1"));
        let lado2 = parseFloat(prompt("Ingrese la medida del lado 2"));
        let resultado = areaCuadrado(lado1, lado2);
        alert("El área del cuadrado es: " + resultado);
    } else if (figura === "2") {
        let base = parseFloat(prompt("Ingrese la medida de la base"));
        let altura = parseFloat(prompt("Ingrese la medida de la altura"));
        let resultado = areaRectangulo(base, altura);
        alert("El área del rectángulo es: " + resultado);
    } else if (figura === "3") {
        let base = parseFloat(prompt("Ingrese la medida de la base"));
        let altura = parseFloat(prompt("Ingrese la medida de la altura"));
        let resultado = areaTriangulo(base, altura);
        alert("El área del triángulo es: " + resultado);
    } else if (figura === "0") {
        alert("Gracias por usar la calculadora. ¡Hasta pronto!");
    } else {
        alert("Opción no válida. Por favor, seleccione una opción del 0 al 3.");
    }
}
