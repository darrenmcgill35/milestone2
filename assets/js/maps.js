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
});

$(".clones").click(function () {
    // do something for clones
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 54.1858495, lng: -7.2352085},
        zoom: 15
    });
    //set the features
    const features = [
        {
            position: new google.maps.LatLng(54.185869, -7.233718),
            type: 'stadium'
        },
        {
            position: new google.maps.LatLng(54.181342, -7.234525),
            type: 'atm'
        }, {
            position: new google.maps.LatLng(54.179163, -7.231956),
            type: 'atm'
        }, {
            position: new google.maps.LatLng(54.180340, -7.228126),
            type: 'atm'
        }, {
            position: new google.maps.LatLng(54.181603, -7.225900),
            type: 'atm'
        }, {
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
