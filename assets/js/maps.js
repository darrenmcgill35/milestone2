var map = new google.maps.Map(document.getElementById('map'),{
    center: {
        lat:53.1424,
        lng: -7.6921
    },
    zoom:8
});

var marker = new google.maps.Marker ({
    position:{
        lat:53.1424,
        lng: -7.6921
    },
    map:map,
    draggable: false
});

var searchBox = new google.maps.places.SearchBox(document.getElementById('location-input'));

google.maps.event.addEventListener(searchBox, 'places_changed', function(){
   // console.log(searchBox.getPlaces());
   
   var places = searchBox.getPlaces();
   
   // bounds
   
   var bounds = new google.maps.LatLngBounds();
   var i, place;
   
   for (i=0; place=place[i];i++){
       console.log(place.geometry.location);
       
       bounds.extend(place.geometry.location);
       marker.setPosition(place.geometry.location);
       
   }
   
   map.fitBounds(bounds);
   map.setZoom(12);
   
});