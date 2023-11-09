document.addEventListener("DOMContentLoaded", function () {
    const textoInput = document.getElementById("texto");
    const resultadoElement = document.getElementById("resultado");

    textoInput.addEventListener("input", function () {
        const texto = textoInput.value;
        const numeroCaracteres = texto.length;
        resultadoElement.textContent = `${numeroCaracteres} caracteres`;
    });
});
