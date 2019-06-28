//var map;
var marker;

var stadiums = [
  ['Newbridge', 53.179731, -6.794853],
  ['Derry', 54.993350, -7.333496],
  ['Longford', 53.739839, -7.805263],
  ['Carrick-on-shannon', 53.948194, -8.075821],
  ['Clones', 54.186091, -7.234708]
  ['Newry', 54.163533, -6.332810]
];


//function initMap() {
            var options = {
                center: {lat: 53.1424,lng: -7.6921},
                zoom: 6
            };
            
            map = new google.maps.Map(document.getElementById('map'),options);
         
            marker = new google.maps.Marker({
                     map: map,
                     draggable: false,
                     animation: google.maps.Animation.DROP,
                     position:  {lat: 54.186091, lng: -7.234708}
                                
            });
            
            marker.addListener('click', toggleBounce);
    }

            function toggleBounce() {
                 if (marker.getAnimation() !== null) {
                     marker.setAnimation(null);
         }
                 else {
                     marker.setAnimation(google.maps.Animation.BOUNCE);
         }   



//geocode();

// get location form

var locationForm = document.getElementById('location-form');

//listen for submit

locationForm.addEventListener('submit', geocode);



function geocode(e) {
    
    e.preventDefault();
    
    var location = document.getElementById('location-input').value; 
    
    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{
        params:{
        address: location,
        key: 'AIzaSyDj_Sw27lS1EGDp6aGNzfh9chD3YXd6A5c'
        }
    })
    .then(function(responce){
        // log full responce
        console.log(responce);
        
        // formatted address
        
        var formattedAddress = responce.data.results[0].formatted_address;
        var formattedAddressOutput = `
            
            <ul class="list-group">
            <li class="list-group-item>${formattedAddress}</li>
            
            </ul>
        `;
        
        //address components
        
        var addressComponents = responce.data.results[0].address_components;
        var addressComponentsOutput = '<ul class="list-group">';
        for(var i = 0; i < addressComponents.length;i++){
            addressComponentsOutput += `
                <li class="list-group-item><strong>${addressComponents[i].types[0]}</strong>:${addressComponents[i].long_name}</li>
            `;
        }
        
        addressComponentsOutput += '</ul>';
        
        // geometry
        
        var lat = responce.data.results[0].geometry.location.lat;
        var lng = responce.data.results[0].geometry.location.lng;
        var geometryOutput = `
            
            <ul class="list-group">
            <li class="list-group-item><strong>Latitude</strong>${lat}</li>
            <li class="list-group-item><strong>Longitude</strong>${lng}</li>
            
            </ul>
        `;
        
        // output to app
        
        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
        document.getElementById('address-components').innerHTML = AddressComponentsOutput;
        document.getElementById('geometry').innerHTML = geometryOutput;
    })
    
    .catch(function(error){
        console.log(error);
    });
    
    
}
}