document.addEventListener("DOMContentLoaded", function () {
    const valorInput = document.getElementById("valor");
    const resultadoElement = document.getElementById("resultado");

    valorInput.addEventListener("input", function () {
        const valor = valorInput.value;
        if (!isNaN(valor)) {
            resultadoElement.textContent = "Número";
        } else {
            resultadoElement.textContent = "Texto";
        }
    });
});
