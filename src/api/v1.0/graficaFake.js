/*fetch('../api/v1.0/grafica.php', {
    method: "GET"
        .then(function (respuesta) {

            if (respuesta.ok) {
                return respuesta.json()
            }
        }).then(function (datos){
            for (let i = 0; i < datos.length; i++) {
                console.log(datos[i].temperatura);
                console.log(datos[i].humedad);
                console.log(datos[i].salinidad);
                console.log(datos[i].luminosidad);
                console.log(datos[i].hora);
            }
        })
    })*/

new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
        { year: '2008', value: 20 },
        { year: '2009', value: 10 },
        { year: '2010', value: 5 },
        { year: '2011', value: 5 },
        { year: '2012', value: 20 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
});
