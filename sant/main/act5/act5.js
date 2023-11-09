function identificarNumero() {
    const numero = parseFloat(document.getElementById("numero").value);

    if (isNaN(numero) || numero <= 0 || !Number.isInteger(numero)) {
        document.getElementById("resultado").textContent = "Debe ingresar números enteros positivos.";
    } else if (numero % 2 === 0) {
        document.getElementById("resultado").textContent = "Par";
    } else {
        document.getElementById("resultado").textContent = "Impar";
    }
}
