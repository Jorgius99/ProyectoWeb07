function obtenerMedicion() {
    var temp = Math.random() * (30 - 10) + 10;
    var hum = Math.random() * (100 - 10) + 10;
    var lum = Math.random() * (100 - 10) + 10;
    var sal = Math.random() * (100 - 10) + 10;
    return {temperatura: temp, humedad: hum, luminosidad: lum, salinidad: sal}

}
<<<<<<< HEAD
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
var idSensor = getParameterByName('sensor');
function f1() {

    var medicion = obtenerMedicion()
    console.log(medicion)
    //document.getElementById("output").textContent = medicion;
   let datasensor = new FormData();

    datasensor.append("temperatura", medicion.temperatura.toString());
    datasensor.append("humedad", medicion.humedad.toString());
    datasensor.append("luminosidad", medicion.luminosidad.toString());
    datasensor.append("salinidad", medicion.salinidad.toString());
    datasensor.append("idsensor", idSensor.toString());


//?temp=' + medicion.temperatura +'&'+ 'hum=' + medicion.humedad +';'+ '$lum='+
//     medicion.luminosidad +';'+ '$sal=' + medicion.salinidad +';'


    fetch('../src/api/v1.0/anyadirmedicion.php', {
=======

document.querySelector("a").addEventListener("submit", function (event) {

    var medicion = obtenerMedicion()
    let datasensor = new FormData(medicion.target);
    fetch('../api/v1.0/sensores.php', {
>>>>>>> develop
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