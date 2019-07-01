
function initMap(){
    var map = new google.maps.Map(document.getElementById('map'),{
    center: new google.maps.LatLng(53.1424, -7.6921),
    zoom:6
    }

);

var marker = new google.maps.Marker ({
    position:{
        lat:53.1424,
        lng: -7.6921
    },
    map:map,
    draggable: false
});

var searchBox = new google.maps.places.SearchBox(document.getElementById('location-input'));

google.maps.event.addListener(searchBox, 'places_changed', function(){
   // console.log(searchBox.getPlaces());
   
   var places = searchBox.getPlaces();
   
   // bounds
   
   var bounds = new google.maps.LatLngBounds();
   var i, place;
   
   for (i=0; place=places[i];i++){
       console.log(place.geometry.location);
       
       bounds.extend(place.geometry.location);
       marker.setPosition(place.geometry.location);
       
   }
   
   map.fitBounds(bounds);
   map.setZoom(15);
  
});

    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var iconBase =
            'http://maps.google.com/mapfiles/kml/shapes/';

        var icons = {
          parking: {
            icon: iconBase + 'parking_lot.png'
          },
          atm: {
            icon: iconBase + 'euro.png'
          },
          bars: {
            icon: iconBase + 'bars.png'
          },
          travel: {
            icon: iconBase + 'bus.png'
          }
        };
        
        var features = [
          {
            position: new google.maps.LatLng(54.181342, -7.234525),
            type: 'atm'
          }, {
            position: new google.maps.LatLng(54.179163, -7.231956),
            type: 'atm'
          }, {
            position: new google.maps.LatLng(54.180340, -7.228126),
            type: 'atm'
          }, {
            position: new google.maps.LatLng(54.181603, -7.225900),
            type: 'atm'
          }
        ];

        // Create markers.
        for (var i = 0; i < features.length; i++) {
          var markers = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
          })
        }
        
          var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
