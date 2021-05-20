var respuesta=[]

fetch('../api/v1.0/mapas.php', {
    method: "GET"

}).then(function (respuesta) {

    if (respuesta.ok) {
        return respuesta.json()
    }

}).then(function coordenadas (datos) {

    /*
    main tabla
     */
    var respuestaX
    var respuestaY
    for (let i = 0; i < datos.length; i++) {
        respuestaX =document.getElementById("output").textContent = datos[i].coordenadaX;
        respuestaY =document.getElementById("output").textContent = datos[i].coordenadaY;
    }

    respuesta.push(respuestaX,respuestaY)
})
console.log(respuesta)

let map
function initMap() {
    //console.log("Google Maps cargado!!");

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.41691146311564, lng:  -3.703518517408268},
        zoom: 6.5
    });

    let polygon = new google.maps.Polygon({
        paths: [
            {lat: 39.504033493444815, lng: -0.3899375500121187},
        ],
        strokeColor: "#ff8000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff8000",
        fillOpacity: 0.35,
        map: map
    });

    var marker = new google.maps.Marker({
        position:{lat:10, lng: 10},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markerUno = new google.maps.Marker({
        position:{lat: 39.504190778174824, lng: -0.38770595220488785},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });


    map.fitBounds(bounds);
}
map.setTilt(0);
map = new google.maps.Map(document.getElementById('map'), {
//...
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


function campouno(){
    map.panTo({lat: 39.504190778174824, lng: -0.38770595220488785});
}
function campodos(){
    map.panTo({lat:39.57505638155333, lng:   -0.33814007627762116});
}