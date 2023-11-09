function buscarTexto() {
    const texto = document.getElementById("texto").value;
    const buscar = document.getElementById("buscar").value;

    if (buscar === "") {
        document.getElementById("resultado").textContent = "Debe ingresar un texto a buscar.";
        return;
    }

    const regex = new RegExp(escapeRegExp(buscar), 'gi');
    const textoResaltado = texto.replace(regex, match => `<span class="resaltado">${match}</span>`);
    document.getElementById("resultado").innerHTML = textoResaltado;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
