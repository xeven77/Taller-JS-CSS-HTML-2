function calcularPromedio() {
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese notas válidas.";
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;
    const resultadoElement = document.getElementById("resultado");

    if (promedio >= 3.0) {
        resultadoElement.textContent = `Felicitaciones ${nombre}, su nota es ${promedio.toFixed(2)}, pasaste la materia ${materia}.`;
        resultadoElement.style.color = "green";
    } else {
        resultadoElement.textContent = `Lo siento ${nombre}, su nota es ${promedio.toFixed(2)}, no pasaste la materia ${materia}.`;
        resultadoElement.style.color = "red";
    }
}
