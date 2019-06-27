//var map;

//function initMap() {
            //var options = {
              //  center: {lat: 53.1424,lng: -7.6921},
              //  zoom: 6
          //  };
            
          //  map = new google.maps.Map(document.getElementById('map'),options);
            
            
//geocode();

// get location form

var locationForm = document.getElementById('location-form')

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
