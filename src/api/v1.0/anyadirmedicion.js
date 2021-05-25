function obtenerMedicion() {
    var temp = Math.random() * (30 - 10) + 10;
    var hum = Math.random() * (100 - 10) + 10;
    var lum = Math.random() * (100 - 10) + 10;
    var sal = Math.random() * (100 - 10) + 10;
    return {temperatura: temp, humedad: hum, luminosidad: lum, salinidad: sal}

}

document.querySelector("a").addEventListener("submit", function (event) {

    var medicion = obtenerMedicion()
    let datasensor = new FormData(medicion.target);
    fetch('../api/v1.0/sensores.php', {
        method: "POST",
        body: datasensor

    }).then(function (respuesta) {

        if (respuesta.ok) {
            document.getElementById("output").textContent = "Tarea realizada con éxito";
        } else {
            document.getElementById("output").textContent = "Algo ha falado";
        }


    })


})