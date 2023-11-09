function identificarNumeros() {
    const numerosInput = document.getElementById("numeros");
    const resultadoList = document.getElementById("resultado");
    resultadoList.innerHTML = "";

    const numeros = numerosInput.value.split(",");

    for (const numero of numeros) {
        const parsedNumero = parseFloat(numero);
        if (!isNaN(parsedNumero) && Number.isInteger(parsedNumero)) {
            if (parsedNumero % 2 === 0) {
                agregarResultado(`${parsedNumero} es número par`, "par");
            } else {
                agregarResultado(`${parsedNumero} es número impar`, "impar");
            }
        } else {
            agregarResultado(`${numero} no es un número entero`, "no-entero");
        }
    }
}

function agregarResultado(texto, tipo) {
    const resultadoList = document.getElementById("resultado");
    const listItem = document.createElement("li");
    listItem.textContent = texto;
    listItem.classList.add(tipo);
    resultadoList.appendChild(listItem);
}

