let map;
function initMap() {
    //console.log("Google Maps cargado!!");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.995574, lng: -0.165385},
        zoom: 20
    });

    let polygon = new google.maps.Polygon({
        paths: [
            {lat: 39.504033493444815, lng: -0.3899375500121187},
            {lat: 39.50150033242999, lng: -0.3856191935871087},
            {lat:39.5030566645047, lng:  -0.3849110904225002},
            {lat: 39.504190778174824, lng: -0.38770595220488785},
        ],
        strokeColor: "#ff8000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff8000",
        fillOpacity: 0.35,
        map: map
    });
    let polygondos = new google.maps.Polygon({
        paths: [



            {lat:39.57505638155333, lng:   -0.33814007627762116},
            {lat:39.57540298919848, lng:  -0.3389127644099399},
            {lat:39.57631343621285, lng:  -0.3379500709959377},
            {lat:39.576035177536326, lng:  -0.33723121769008735},

        ],
        strokeColor: "#ff8000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff8000",
        fillOpacity: 0.35,
        map: map
    });
    var marker = new google.maps.Marker({
        position:{lat: 39.504033493444815, lng: -0.3899375500121187},
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
    var markerDos = new google.maps.Marker({
        position:{lat: 39.50150033242999, lng: -0.3856191935871087},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markertres = new google.maps.Marker({
        position:{lat:39.5030566645047, lng:  -0.3849110904225002},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markercuatro = new google.maps.Marker({
        position:{lat: 39.503122890628404, lng:  -0.3867349925131585},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markercinco = new google.maps.Marker({
        position:{lat:39.57631343621285, lng:  -0.3379500709959377},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markerseis = new google.maps.Marker({
        position:{lat:39.576035177536326, lng:  -0.33723121769008735},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markersiete = new google.maps.Marker({
        position:{lat:39.57540298919848, lng:  -0.3389127644099399},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markerocho = new google.maps.Marker({
        position:{lat:39.57505638155333, lng:   -0.33814007627762116},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markernueve = new google.maps.Marker({
        position:{lat:39.5754176345444, lng:    -0.33798173854505503},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markerdiez = new google.maps.Marker({
        position:{lat:39.57608155405098, lng:   -0.33790573643342325},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    let bounds = new google.maps.LatLngBounds();
    polygon.getPath().getArray().forEach(function (v) {
        bounds.extend(v);
    })

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