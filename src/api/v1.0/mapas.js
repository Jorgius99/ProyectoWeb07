function iniciarMapa() {
    fetch('../api/v1.0/mapas.php', {
        method: "GET"

    }).then(function (respuesta) {

        if (respuesta.ok) {
            return respuesta.json()
        }

    }).then(function (datos) {
        //for (let i = 0; i < datos.length; i++) {
        //    console.log(datos[i].coordenadaX);
        //   console.log(datos[i].coordenadaY);
        //}
        let map;

        function initMap() {
            map.setTilt(0);
            //console.log("Google Maps cargado!!");

            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 40.41691146311564, lng: -3.703518517408268},
                zoom: 6.5
            });

            for (let i = 0; i < datos.length; i++) {
                var x = datos[i].coordenadaX
                var y = datos[i].coordenadaY

                //console.log(typeof x)
                //console.log(typeof y)
                parseFloat(y)
                // console.log(typeof parseFloat(x))
                // console.log(typeof parseFloat(y))
                var marker = new google.maps.Marker({
                    position: {lat: parseFloat(x), lng: parseFloat(y)},
                    label: datos[i].idParcela,
                    animation: google.maps.Animation.DROP,
                    map: map,

                });

                (function (marker, i) {
                    // add click event
                    google.maps.event.addListener(marker, 'click', function () {
                        map.panTo({lat: parseFloat(x), lng: parseFloat(y)})
                        console.log(marker)
                        var aux=marker;

                        iniciarsensores(aux);

                        infowindow = new google.maps.InfoWindow({
                            content: 'Campo ' + datos[i].idParcela,
                        });
                        infowindow.open(map, marker);
                    });
                })(marker, i);
            }

        }

        map = new google.maps.Map(document.getElementById('map'), {

            mapTypeId: 'hybrid',
            styles: [
                {
                    featureType: 'poi',
                    stylers: [{visibility: 'off'}]
                },
                {
                    featureType: 'transit',
                    stylers: [{visibility: 'off'}]
                }
            ],
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
        });

        initMap()
    })
}

function iniciarsensores(idParcela) {


    fetch('../api/v1.0/sensores.php', {
        method: "GET",

    }).then(function (respuesta) {

        if (respuesta.ok) {
            return respuesta.json()
        }

    }).then(function (sensores) {
        console.log(JSON.stringify(sensores))
        for (let i = 0; i < sensores.length; i++) {
            console.log(sensores[i].coodenadaX)
            console.log(sensores[i].coodenadaY)
        }

        for (let i = 0; i < 3; i++) {
            var sensorX = sensores[i].coordenadaX
            var sensorY = sensores[i].coordenadaY
            let polygon = new google.maps.Polygon({
                paths: [
                    {lat: parseFloat(sensorX), lng: parseFloat(sensorY)},

                ],
                strokeColor: "#ff8000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#ff8000",
                fillOpacity: 0.35,
                map: map
            });
        }
        let bounds = new google.maps.LatLngBounds();
        polygon.getArray().forEach(function (v) {
            bounds.extend(v);
        })
        map.fitBounds(bounds);
        /*
        aqui acaba
         */

    })
}

//main
iniciarMapa()
