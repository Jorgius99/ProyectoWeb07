let mapaGoogle;

function iniciarmapa() {
    fetch('../api/v1.0/mapas.php', {
        method: "GET"

    }).then(function (respuesta) {

        if (respuesta.ok) {
            return respuesta.json()
        }

    }).then(function (datos) {

        mapaGoogle = new google.maps.Map(document.getElementById('map'), {
            mapTypeId: 'hybrid',
            zoom: 4,
            center: {lat: 0, lng: 0},
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

       mapaGoogle.addListener('zoom_changed', () => {
            console.log (mapaGoogle.getZoom());

            if(mapaGoogle.getZoom() < 15){
                ocultar();
            }
        })

        initMap(datos)

    })
}

function initMap(datos) {
    mapaGoogle.setTilt(0);

    let bounds = new google.maps.LatLngBounds();
    const image = {
        url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        size: new google.maps.Size(20, 22),
    };

    for (let i = 0; i < datos.length; i++) {
        var x = datos[i].coordenadaX
        var y = datos[i].coordenadaY
        parseFloat(y)
        var marker = new google.maps.Marker({
            position: {lat: parseFloat(x), lng: parseFloat(y)},
            label: datos[i].idParcela,
            animation: google.maps.Animation.DROP,
            map: mapaGoogle,
            icon: image,
        });

        infowindow = new google.maps.InfoWindow({
            content: 'Campo ' + datos[i].idParcela,
        });
        infowindow.open(mapaGoogle, marker);
        bounds.extend(marker.position);

        (function (marker, i) {
            // add click event
            google.maps.event.addListener(marker, 'click', function () {
                mapaGoogle.panTo({lat: parseFloat(x), lng: parseFloat(y)})
                iniciarsensores(marker.label);

            });
        })(marker, i);
    }

    mapaGoogle.fitBounds(bounds);

}


function iniciarsensores(idParcela) {

    console.log(marcasVertices.length);

    if (marcasVertices.length == 0 & poligono.length == 0) {
        fetch('../api/v1.0/sensores.php?$parcela=' + idParcela, {
            method: "GET",

        }).then(function (respuesta) {

            if (respuesta.ok) {
                return respuesta.json()
            }

        }).then(function (sensores) {

            let vertices = [];

            sensores.forEach(function (vert) {
                let punto = {
                    lat: parseFloat(vert.coordenadaX),
                    lng: parseFloat(vert.coordenadaY),
                }
                vertices.push(punto)

                let m = new google.maps.Marker({
                    position: punto,
                    label: vert.idSensor,
                    map: mapaGoogle,
                });

                marcasVertices.push(m);

                google.maps.event.addListener(m, 'click', function () {
                    location.href = "../app/Grafica.html?sensor=" + vert.idSensor;
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

            poligono.push(polygon);

            let bounds = new google.maps.LatLngBounds();
            polygon.getPath().getArray().forEach(function (v) {
                bounds.extend(v);
            })
            mapaGoogle.fitBounds(bounds);

            console.log(mapaGoogle)

        })
    } else {
        ocultar();
    }


}//Iniciar sensores

var marcasVertices = [];
var poligono = [];

function ocultar(){
    marcasVertices.forEach(function (m) {
        console.log(m);
        m.setMap(null);
        m = null;
    })
    poligono.forEach(function (polygon){
        console.log(polygon);
        polygon.setMap(null);
        polygon = null;
    })
    marcasVertices = [];
    poligono = [];
}
