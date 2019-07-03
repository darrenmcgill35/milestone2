const iconBase = 'http://maps.google.com/mapfiles/kml/shapes/';

const icons = {
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
    },
    stadium: {
        icon: iconBase + 'play.png'
    }
};

$(".newbridge").click(function () {
    // do something for newbridge
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.1796861, lng: -6.7968114},
        zoom: 16
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
    }
    marker.setMap(map);
    

    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>St. Conleth's GAA Park, Newbridge Co. Kildare</h3>");
    $("#info_text") .html("<h5>Capacity - 6,200</h5>");
});



$(".derry").click(function () {
    // do something for derry
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.992999, lng: -7.333914},
        zoom: 16
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
    }
    marker.setMap(map);
    
   
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>Celtic Park,Lone Moor Rd Co. Derry</h3>");
    $("#info_text") .html("<h5>Capacity - 18,500</h5>");
});
   
$(".longford").click(function () {
    // do something for Longford
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.738881,  lng: -7.803449},
        zoom: 13
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
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3> Pearse Park, Longford</h3>");
    $("#info_text") .html("<h5>Capacity - 10,000</h5>");
});

$(".carrick").click(function () {
    // do something for Carrick
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.947879,   lng: -8.079018},
        zoom: 15
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
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>Páirc Seán Mac Diarmada, Carrick-On-Shannon</h3>");
    $("#info_text") .html("<h5>Capacity - 9,331</h5>");
});



$(".clones").click(function () {
    // do something for clones
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.183449,  lng: -7.234562},
        zoom: 15
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
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>St Tiernach's Park, Clones, Co. Monaghan</h3>");
    $("#info_text") .html("<h5>Capacity - 36,000</h5>");
});

$(".newry").click(function () {
    // do something for newry
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.168533,  lng:  -6.340492 },
        zoom: 14
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
    }
    marker.setMap(map);
    
    $(".look-here").css( "visibility", "visible");
    $("#place_name").html("<h3>Páirc Esler, Newry, Co. Down</h3>");
    $("#info_text") .html("<h5>Capacity - 25,000</h5>");
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
