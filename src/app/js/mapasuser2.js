let map;
function initMap() {
    //console.log("Google Maps cargado!!");
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.995574, lng: -0.165385},
        zoom: 20
    });

    let polygon = new google.maps.Polygon({
        paths: [

            {lat: 36.74582627933136, lng:-3.544192522089212},
            {lat:36.74547536272959, lng: -3.5442002036723133},
            {lat: 36.74525583272193, lng: -3.5444264145916544},
            {lat: 36.74605326826711, lng:  -3.544698224323984},
            {lat:36.74607008223562, lng: -3.5441211782054687},
        ],
        strokeColor: "#ff8000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#ff8000",
        fillOpacity: 0.35,
        map: map
    });

    var marker = new google.maps.Marker({
        position:{lat: 36.74605326826711, lng:  -3.544698224323984},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markerUno = new google.maps.Marker({
        position:{lat:36.74607008223562, lng: -3.5441211782054687},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markerDos = new google.maps.Marker({
        position:{lat: 36.74582627933136, lng:-3.544192522089212},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markertres = new google.maps.Marker({
        position:{lat:36.74547536272959, lng: -3.5442002036723133},
        label: "1",
        animation: google.maps.Animation.DROP,
        map: map
    });
    var markercuatro = new google.maps.Marker({
        position:{lat: 36.74525583272193, lng: -3.5444264145916544},
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
    map.panTo({lat: 36.74582627933136, lng:-3.544192522089212});
}
