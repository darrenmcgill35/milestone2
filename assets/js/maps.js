
function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5,
                center: {
                    lat: 53.1424,
                    lng: -7.6921
                }
            });
            
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            
            var locations = [
                { lat: 54.186157, lng:-7.234731},
                { lat: 54.179181, lng:-7.231587},  // ATM
                { lat: 54.181417, lng:-7.234680},  // HOTEL
                { lat: 54.179473, lng:-7.232005},  // BAR
                { lat: 54.181691, lng:-7.233961},  // CARPARK
                { lat: 54.181033, lng:-7.232363}   // CARPARK
                 
            ];
            
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
            }            
            
        
                