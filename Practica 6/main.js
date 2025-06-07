// Declaración de variables fuera del bucle para mantener su valor
let saldo = 0;
let operacion = "";

// Función para depositar saldo
function depositar(saldoActual, monto) {
    return saldoActual + monto;
}

// Función para retirar saldo
function retirar(saldoActual, monto) {
    if (monto > saldoActual) {
        alert("Fondos insuficientes.");
        return saldoActual;
    }
    return saldoActual - monto;
}

// Función para consultar saldo
function consultar(saldoActual) {
    alert("El saldo actual es: " + saldoActual);
}

// Bucle principal
while (operacion !== "0") {
    operacion = prompt(
        "¿Qué operación desea realizar?:\n" +
        "1- Depositar saldo\n" +
        "2- Retiro\n" +
        "3- Consulta de saldo\n" +
        "0- Salir\n"
    );

    if (operacion === null) {
        break;
    }

    if (operacion === "1") {
        let deposito = parseFloat(prompt("Ingrese el monto a depositar"));
        if (!Number.isFinite(deposito) && deposito > 0) {
            saldo = depositar(saldo, deposito);
            alert("Depósito exitoso. Saldo actual: " + saldo);
        } else {
            alert("Monto inválido.");
        }
    } else if (operacion === "2") {
        let retiro = parseFloat(prompt("Ingrese el monto a retirar"));
        if (Number.isFinite(retiro) && retiro > 0) {
            saldo = retirar(saldo, retiro);
            alert("Operación completada. Saldo actual: " + saldo);
        } else {
            alert("Monto inválido.");
        }
    } else if (operacion === "3") {
        consultar(saldo);
    } else if (operacion === "0") {
        alert("Gracias por usar nuestro ATM. ¡Hasta pronto!");
    } else {
        alert("Opción no válida. Por favor, seleccione una opción del 0 al 3.");
    }
}
