const iconBase = 'http://maps.google.com/mapfiles/kml/pal2/';

const icons = {
    parking: {
        icon: iconBase + 'icon47.png'
    },
    atm: {
        icon: iconBase + 'icon58.png'
    },
    bars: {
        icon: iconBase + 'icon32.png'
    },
    travel: {
        icon: iconBase + 'icon39.png'
    },
    stadium: {
        icon: iconBase + 'icon49.png'
    }
};

$(".newbridge").click(function () {
    // do something for newbridge
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.1796861, lng: -6.7968114},
        zoom: 16
    });
    
    var contentString = '<p>Parking - North & South Carparks (FREE)</p>'+
            '<p>Bus-Stop - On Main St. <a href="https://www.buseireann.ie/news_timetable.php" target="_blank">TIMETABLE</a></p>'+
            '<p>ATM - On Edward st. & Liffey View</p>'
            +'<p>Bars & Restaurants - On Main St. Charlotte St. & Edward St.  </p>';
            
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
    
    
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(53.179693, -6.794662),
            type: 'stadium'
        },
         {
            position: new google.maps.LatLng(53.181101, -6.796377),
            type: 'atm'
        }, {
            position: new google.maps.LatLng(53.179620, -6.799231),
            type: 'atm'
        },  {
            position: new google.maps.LatLng(53.180595, -6.796134),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(53.178655, -6.794946),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(53.180883, -6.797312),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(53.179185, -6.799876),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(53.180529, -6.797896),
            type: 'travel'
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        
    marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
            
    }
    marker.setMap(map);
    

    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>St. Conleth's GAA Park, Newbridge Co. Kildare</h3>");
    $("#info_text") .html("<h5>Capacity - 6,200. SAT NAV - 53.179696N -6.794644W</h5>");
});



$(".derry").click(function () {
    // do something for derry
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.992999, lng: -7.333914},
        zoom: 16
    });
    
    var contentString = '<p>Parking - North of Stadium & Cecilias College (FREE)</p>'+
            '<p>Bus-Stop - On Blighs Lane. <a href="https://www.translink.co.uk/timetables" target="_blank">TIMETABLE</a></p>'+
            '<p>ATM - In Harkins Newsagents on Lecky Road</p>'
            +'<p>Bars & Restaurants - On Brandywell Road & Lecky Road  </p>';
            
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
    
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(54.993454, -7.333464),
            type: 'stadium'
        },
         {
            position: new google.maps.LatLng(54.991445, -7.331862),
            type: 'atm'
        },   {
            position: new google.maps.LatLng(54.994271, -7.333177),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(54.994886, -7.335419),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(54.990836, -7.332836),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(54.994989, -7.327697),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(54.995395, -7.336028),
            type: 'travel'
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        
    }
    marker.setMap(map);
    
   
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>Celtic Park,Lone Moor Rd Co. Derry</h3>");
    $("#info_text") .html("<h5>Capacity - 18,500. SAT NAV - 54.993368N -7.333485W</h5>");
});
   
$(".longford").click(function () {
    // do something for Longford
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.738881,  lng: -7.803449},
        zoom: 13
    });
    
    var contentString = '<p>Parking - South of Stadium & Retail Park ( North of Stadium ) (FREE)</p>'+
            '<p>Bus-Stop - On 98 Ave. <a  href="http://www.irishrail.ie/train-timetables" target="_blank">TIMETABLE</a></p>'+
            '<p>ATM - Circle K on R198</p>'
            +'<p>Bars & Restaurants - On Main St.  </p>';
            
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(53.739858, -7.805316),
            type: 'stadium'
        },
         {
            position: new google.maps.LatLng(53.738764, -7.801979),
            type: 'atm'
        },   {
            position: new google.maps.LatLng(53.741540, -7.804082),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(53.738196, -7.805219),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(53.728800, -7.801585),
            type: 'bars'
        },  {
            position: new google.maps.LatLng(53.724305, -7.796032),
            type: 'travel'
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3> Pearse Park, Longford</h3>");
    $("#info_text") .html("<h5>Capacity - 10,000. SAT NAV - 53.739689N -7.805238W</h5>");
});

$(".carrick").click(function () {
    // do something for Carrick
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.947879,   lng: -8.079018},
        zoom: 15
    });
    
    var contentString = '<p>Parking - South of Stadium & Rosebank Retail Park (FREE)</p>'+
            '<p>Bus-Stop - On Bypass Road. <a href="https://www.buseireann.ie/news_timetable.php" target="_blank">TIMETABLE</a></p>'+
            '<p>ATM - Main St & N4 Service Station</p>'
            +'<p>Bars & Restaurants - On Main St.  </p>';
            
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(53.948333, -8.076121),
            type: 'stadium'
        },
         {
            position: new google.maps.LatLng(53.943888, -8.070800),
            type: 'atm'
        },   {
            position: new google.maps.LatLng(53.947058, -8.077366),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(53.945612, -8.081046),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(53.945887, -8.095492),
            type: 'bars'
        },  {
            position: new google.maps.LatLng(53.945255, -8.095106),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(53.943306, -8.093277),
            type: 'travel'
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>Páirc Seán Mac Diarmada, Carrick-On-Shannon</h3>");
    $("#info_text") .html("<h5>Capacity - 9,331. SAT NAV - 53.948194N -8.076132W</h5>");
});



$(".clones").click(function () {
    // do something for clones
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.183449,  lng: -7.234562},
        zoom: 15
    });
    
    var contentString = '<p>Parking - North of Stadium & 98 Ave (FREE)</p>'+
            '<p>Bus-Stop - On 98 Ave. <a href="https://www.buseireann.ie/news_timetable.php" target="_blank">TIMETABLE</a></p>'+
            '<p>ATM - On Fermanagh st. & The Diamond</p>'
            +'<p>Bars & Restaurants - On Fermanagh St.  </p>';
            
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        
        
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(54.185339, -7.234186),
            type: 'stadium'
        },
         {
            position: new google.maps.LatLng(54.179163, -7.231956),
            type: 'atm'
        }, {
            position: new google.maps.LatLng(54.180340, -7.228126),
            type: 'atm'
        },  {
            position: new google.maps.LatLng(54.186379, -7.234286),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(54.181709, -7.233572),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(54.179530, -7.232154),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(54.180887, -7.233958),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(54.181540, -7.232144),
            type: 'travel'
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
        
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>St Tiernach's Park, Clones, Co. Monaghan</h3>");
    $("#info_text") .html("<h5>Capacity - 36,000. SAT NAV - 54.185870N -7.233751W</h5>");
});

$(".newry").click(function () {
    // do something for newry
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.168533,  lng:  -6.340492 },
        zoom: 14
    });
    
    var contentString = '<p>Parking - Warrenpoint Road & Buttercrane Centre (FREE)</p>'+
            '<p>Train Station - Just off the A1 motorway <a href="https://www.translink.co.uk/" target="_blank">TIMETABLE</a></p>'+
            '<p>ATM - On Albert Basin</p>'
            +'<p>Bars & Restaurants - Buttercrane Centre & Quays</p>';
            
    var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
    
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(54.1614417, -6.334012),
            type: 'stadium'
        },
         {
            position: new google.maps.LatLng(54.169218, -6.339580),
            type: 'atm'
        },   {
            position: new google.maps.LatLng(54.164111, -6.333293),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(54.168107, -6.341032),
            type: 'parking'
        }, {
            position: new google.maps.LatLng(54.166022, -6.334181),
            type: 'bars'
        },  {
            position: new google.maps.LatLng(54.173511, -6.342764),
            type: 'bars'
        }, {
            position: new google.maps.LatLng(54.188803, -6.362567),
            type: 'travel'
        }
    ];
    // Create markers.
    for (let i = 0; i < features.length; i++) {
        var marker = new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map
        });
        
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>Páirc Esler, Newry, Co. Down</h3>");
    $("#info_text") .html("<h5>Capacity - 25,000. SAT NAV - 54.163446N -6.333132W</h5>");
});

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(53.1424, -7.6921),
            zoom: 6
        }
    );

    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();

        // bounds
        var bounds = new google.maps.LatLngBounds();
        var i, place;

        for (i = 0; place = places[i]; i++) {
            console.log(place.geometry.location);

            bounds.extend(place.geometry.location);
            marker.setPosition(place.geometry.location);

        }
        map.fitBounds(bounds);
        map.setZoom(12);
    });
}
