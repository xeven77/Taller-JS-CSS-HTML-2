function verificarEdad() {
    const nombre = document.getElementById("nombre").value;
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0) {
        document.getElementById("resultado").textContent = "No es una edad válida.";
    } else if (edad >= 18) {
        document.getElementById("resultado").textContent = `Hola ${nombre}, eres mayor de edad.`;
    } else {
        document.getElementById("resultado").textContent = `Hola ${nombre}, no eres mayor de edad.`;
    }
}
