var map;

function initMap() {
            var options = {
                center: {lat: 53.1424,lng: -7.6921},
                zoom: 6
            };
            
            map = new google.maps.Map(document.getElementById('map'),options);

geocode();

var location = 'Monaghan';

function geocode() {
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
        
        // output to app
        
        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;
    })
    
    .catch(function(error){
        console.log(error);
    });
    
    
}
}