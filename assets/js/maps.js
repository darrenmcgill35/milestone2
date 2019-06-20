function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6,
                center: {
                    lat: 53.1424, 
                    lng: -7.6921
                }
            });
            
            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            
            var locations = [
                { lat: 54.250202, lng: -6.971605 }
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
            