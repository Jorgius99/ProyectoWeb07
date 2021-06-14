function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var idSensor = getParameterByName('sensor');


fetch('../api/v1.0/obtenerMediciones.php?sensor=' + idSensor, {
    method: "GET"
}).then(function (respuesta) {

    if (respuesta.ok) {
        return respuesta.json()
    }
}).then(function (datos) {
   /*
     for (let i = 0; i < datos.length; i++) {
         console.log("temperatura=" + datos[i].temperatura);
         console.log("humedad=" + datos[i].humedad);
         console.log("salinidad=" + datos[i].salinidad);
         console.log("luminosidad=" + datos[i].luminosidad);

     }
*/

    /*
    aqui empieza tu codigo
     */
    var hum = []
    for (i = 0; i < datos.length; i++) {
        hum.push(parseFloat(datos[i].humedad))
    }
    var sal = []
    for (i = 0; i < datos.length; i++) {
        sal.push(parseFloat(datos[i].salinidad))
    }
    var temp = []
    for (i = 0; i < datos.length; i++) {
        temp.push( parseFloat(datos[i].temperatura))
    }
    var lum = []
    for (i = 0; i < datos.length; i++) {
        lum.push( parseFloat(datos[i].luminosidad))
    }

    //Código para hacer la gráfica


    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
// Las etiquetas son las que van en el eje X.
    var e= []

    for (let i = 0; i < datos.length ; i++) {

      var fecha=  new Date(datos[i].fecha+' '+datos[i].hora)
        var segundos = fecha.getSeconds()
        var minutos = fecha.getMinutes()
        var horas = fecha.getHours()
        var mes= fecha.getUTCMonth()+1
        var año=fecha.getFullYear()
        var dia=fecha.getDate()
        var tiempo = horas + ":" + minutos + ":" + segundos
        var Fecha= año+'-'+mes+'-'+dia;

        e.push(Fecha+' '+tiempo)
        //console.log(a)
    }
    const etiquetas = e;
// Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVentas2020 = {
        label: "Temperatura",
        data: temp, /*[5000, 1500, 8000, 5102],*/ // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(255, 1, 64, 0.2)', // Color de fondo
        borderColor: 'rgba(255, 1, 64, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    const datosVentas2021 = {
        label: "Humedad",
        data: hum,/*[10000, 1700, 5000, 5989],*/ // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)',// Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)',// Color del borde
        borderWidth: 1,// Ancho del borde
    };
    const datosVentas2022 = {
        label: "Salinidad",
        data: sal, /*[4000, 2000, 4500, 5000],*/ // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(255, 1000, 64, 0.2)',// Color de fondo
        borderColor: 'rgba(100, 1000, 100, 100)',// Color del borde
        borderWidth: 1,// Ancho del borde
    };
    const datosVentas2023 = {
        label: "Luminosidad",
        data: lum,/*[15000, 5000, 4500, 3000],*/ // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(255, 300, 64, 0.2)',// Color de fondo
        borderColor: 'rgba(255, 300, 64, 1)',// Color del borde
        borderWidth: 1,// Ancho del borde
    };

    new Chart($grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVentas2020,
                datosVentas2021,
                datosVentas2022,
                datosVentas2023,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });

})