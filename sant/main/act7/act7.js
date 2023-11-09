function verificarDivisibilidad() {
    const numeroA = parseFloat(document.getElementById("numeroA").value);
    const numeroB = parseFloat(document.getElementById("numeroB").value);

    if (!Number.isInteger(numeroA) || numeroA <= 0 || !Number.isInteger(numeroB) || numeroB <= 0) {
        if (!Number.isInteger(numeroA) && !Number.isInteger(numeroB)) {
            document.getElementById("resultado").textContent = `Los números ${numeroA} y ${numeroB} no son enteros.`;
        } else if (!Number.isInteger(numeroA)) {
            document.getElementById("resultado").textContent = `El número ${numeroA} no es entero positivo.`;
        } else if (!Number.isInteger(numeroB)) {
            document.getElementById("resultado").textContent = `El número ${numeroB} no es entero.`;
        } else if (numeroA <= 0 && numeroB <= 0) {
            document.getElementById("resultado").textContent = `Los números ${numeroA} y ${numeroB} no son positivos.`;
        } else if (numeroA <= 0) {
            document.getElementById("resultado").textContent = `El número ${numeroA} no es positivo.`;
        } else {
            document.getElementById("resultado").textContent = `El número ${numeroB} no es positivo.`;
        }
    } else if (numeroA % numeroB === 0) {
        document.getElementById("resultado").textContent = `El número ${numeroA} es divisible entre el número ${numeroB}.`;
    } else {
        document.getElementById("resultado").textContent = `El número ${numeroA} no es divisible entre el número ${numeroB}.`;
    }
}
