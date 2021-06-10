

let mapaGoogle;

function iniciarmapa() {
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

        /* pinchos
        var markers=[];
        pinchos*/

        function initMap() {
            mapaGoogle.setTilt(0);
            //console.log("Google Maps cargado!!");

            mapaGoogle = new google.maps.Map(document.getElementById('map'), {
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
                    map: mapaGoogle,
                    Marker:setZIndex(1),
                });

                (function (marker, i) {
                    // add click event
                    google.maps.event.addListener(marker, 'click', function () {
                        mapaGoogle.panTo({lat: parseFloat(x), lng: parseFloat(y)})
                        iniciarsensores(marker.label);

                        infowindow = new google.maps.InfoWindow({
                            content: 'Campo ' + datos[i].idParcela,
                        });
                        infowindow.open(mapaGoogle, marker);
                    });
                })(marker, i);
            }


            /* pinchos
            function addmarker(location){
                var marker = new google.maps.Marker({
                    position: location,
                    map:mapaGoogle,
                });
                markers.push(marker);
            }

            function setMapOnAll(map) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(map);
                }
            }

            function clearMarkers() {
                setMapOnAll(null);
            }

            function showMarkers() {
                setMapOnAll(map);
            }
             pinchos*/


            /*
            var marker1 = new google.maps.Marker({
                position: event.latLng,
                map: mapaGoogle,
                collisionBehavior:
                google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
            });
            */

        }

        mapaGoogle = new google.maps.Map(document.getElementById('map'), {
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

        function iniciarsensores(idParcela) {
            fetch('../api/v1.0/sensores.php?$parcela=' + idParcela, {
                method: "GET",

            }).then(function (respuesta) {

                if (respuesta.ok) {
                    return respuesta.json()
                }

            }).then(function (sensores) {

                var vertices=[]
                sensores.forEach(function (vert){
                    let punto={
                        lat: parseFloat(vert.coordenadaX),
                        lng: parseFloat(vert.coordenadaY),
                        Marker:setZIndex(3),
                    }
                    vertices.push(punto)

                    let m=new google.maps.Marker({
                        position:punto,
                        label: vert.idSensor,
                        map: mapaGoogle,
                        Marker:setZIndex(3),
                    });

                    google.maps.event.addListener(m, 'click', function () {
                        location.href="../app/Grafica.html?sensor="+vert.idSensor;
                        Marker:setZIndex(3);
                    });

                });

                let polygon = new google.maps.Polygon({
                    paths: [vertices],
                    strokeColor: "#ff8000",
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: "#ff8000",
                    fillOpacity: 0.35,
                    map: mapaGoogle,
                    zIndex: 3,
                });

                let bounds = new google.maps.LatLngBounds();
                polygon.getPath().getArray().forEach(function (v){
                    bounds.extend(v);
                })
                //  }
                mapaGoogle.fitBounds(bounds);

                console.log(mapaGoogle)

                //polygon.setMap(map)

            })

        }//Iniciar sensores

        initMap()

    })
}

//main

//crear cuadros de texto en las cosas
/*
  var popup = new google.maps.InfoWindow();

      poligono.addListener('click', function (e) {
        popup.setContent('Contenido');
        popup.setPosition(e.latLng);
        popup.open(miMapa);
      });

 */
