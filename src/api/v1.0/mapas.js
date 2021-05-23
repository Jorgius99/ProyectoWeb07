fetch('../src/api/v1.0/mapas.php', {
    method: "GET"

}).then(function (respuesta) {

    if (respuesta.ok) {
        return respuesta.json()
    }

}).then(function (datos) {
    for (let i = 0; i < datos.length; i++) {
        console.log(datos[i].coordenadaX);
        console.log(datos[i].coordenadaY) ;
    }
let map;

    function initMap() {
        map.setTilt(0);
        //console.log("Google Maps cargado!!");

        map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.41691146311564, lng: -3.703518517408268},
            zoom: 6.5
        });

        for (let i = 0; i < datos.length; i++) {
            var x= datos[i].coordenadaX
            var y= datos[i].coordenadaY
            console.log(typeof x)
            console.log(typeof y)
            parseFloat(y)
            console.log( typeof parseFloat(x)
            )
            console.log(typeof parseFloat(y))
            var marker = new google.maps.Marker({
                position: {lat:parseFloat(x), lng:parseFloat(y)},
                label: "1",
                animation: google.maps.Animation.DROP,
                map: map,


            });
            (function(marker, i) {
                // add click event
                google.maps.event.addListener(marker, 'click', function() {
                    map.panTo({lat: parseFloat(x), lng: parseFloat(y)})
                    infowindow = new google.maps.InfoWindow({
                        content: 'Campo '+datos[i].idParcela,

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

/*
function campouno() {
    map.panTo({lat: 39.504190778174824, lng: -0.38770595220488785});
}

function campodos() {
    map.panTo({lat: 39.57505638155333, lng: -0.33814007627762116});
}

 */