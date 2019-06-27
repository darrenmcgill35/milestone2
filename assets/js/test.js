var map;


function initMap() {
            var options = {
                center: {lat: 53.1424,lng: -7.6921},
                zoom: 6
            };
            
            map = new google.maps.Map(document.getElementById('map'),options);
          
               
            var input = document.getElementById('location-form');
            var searchBox = new google.maps.places.SearchBox(input);
            
            map.addEventListener('bounds_changed', function(){
                searchBox.setBounds(map.getBounds());
            });
            
            var markers = [];
            
            searchBox.addListener('places_changed', function(){
                var places = searchBox.getPlaces();
                
                if (places.length === 0)
                return;
                
                markers.forEach(function(m){m.setMap(null); });
                markers = [];
                
                var bounds = new google.maps.LatLngBounds();
                
                places.forEach (function (p){
                    if (!p.geometry)
                    return;
                    
                    markers.push(new google.maps.Marker({
                        map: map,
                        title: p.name,
                        position: p.geometry.location
                    }));
                    
                    if (p.geometry.viewport)
                        bounds.union(p.geometry.viewport);
                    else 
                       bounds.extend(p.geometry.location);
                });
                
                map.fitBounds(bounds);
                
            });
        }     
        