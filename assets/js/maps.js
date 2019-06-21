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
                { lat: 53.180386, lng: -6.789127 },
                { lat: 54.185844, lng: -7.233676 },
                { lat: 54.993387, lng: -7.333517 },
                { lat: 53.739719, lng: -7.805265 },
                { lat: 53.948207, lng: -8.076079 },
                { lat: 54.163464, lng: -6.332909 }
                
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
            