{"changed":true,"filter":false,"title":"test1.js","tooltip":"/assets/js/test1.js","value":"var map;\nvar marker;\n\nvar stadiums = [\n  ['Newbridge', 53.179731, -6.794853],\n  ['Derry', 54.993350, -7.333496],\n  ['Longford', 53.739839, -7.805263],\n  ['Carrick-on-shannon', 53.948194, -8.075821],\n  ['Clones', 54.186091, -7.234708]\n  ['Newry', 54.163533, -6.332810]\n];\n\n\nfunction initMap() {\n            var options = {\n                center: {lat: 53.1424,lng: -7.6921},\n                zoom: 6\n            };\n            \n            map = new google.maps.Map(document.getElementById('map'),options);\n         \n            marker = new google.maps.Marker({\n                     map: map,\n                     draggable: false,\n                     animation: google.maps.Animation.DROP,\n                     position:  {lat: 54.186091, lng: -7.234708}\n                                \n            });\n            \n            marker.addListener('click', toggleBounce);\n    }\n\n            function toggleBounce() {\n                 if (marker.getAnimation() !== null) {\n                     marker.setAnimation(null);\n         }\n                 else {\n                     marker.setAnimation(google.maps.Animation.BOUNCE);\n         }   \n\n\n\n//geocode();\n\n// get location form\n\nvar locationForm = document.getElementById('location-form');\n\n//listen for submit\n\nlocationForm.addEventListener('submit', geocode);\n\n\n\nfunction geocode(e) {\n    \n    e.preventDefault();\n    \n    var location = document.getElementById('location-input').value; \n    \n    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{\n        params:{\n        address: location,\n        key: 'AIzaSyDj_Sw27lS1EGDp6aGNzfh9chD3YXd6A5c'\n        }\n    })\n    .then(function(responce){\n        // log full responce\n        console.log(responce);\n        \n        // formatted address\n        \n        var formattedAddress = responce.data.results[0].formatted_address;\n        var formattedAddressOutput = `\n            \n            <ul class=\"list-group\">\n            <li class=\"list-group-item>${formattedAddress}</li>\n            \n            </ul>\n        `;\n        \n        //address components\n        \n        var addressComponents = responce.data.results[0].address_components;\n        var addressComponentsOutput = '<ul class=\"list-group\">';\n        for(var i = 0; i < addressComponents.length;i++){\n            addressComponentsOutput += `\n                <li class=\"list-group-item><strong>${addressComponents[i].types[0]}</strong>:${addressComponents[i].long_name}</li>\n            `;\n        }\n        \n        addressComponentsOutput += '</ul>';\n        \n        // geometry\n        \n        var lat = responce.data.results[0].geometry.location.lat;\n        var lng = responce.data.results[0].geometry.location.lng;\n        var geometryOutput = `\n            \n            <ul class=\"list-group\">\n            <li class=\"list-group-item><strong>Latitude</strong>${lat}</li>\n            <li class=\"list-group-item><strong>Longitude</strong>${lng}</li>\n            \n            </ul>\n        `;\n        \n        // output to app\n        \n        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;\n        document.getElementById('address-components').innerHTML = AddressComponentsOutput;\n        document.getElementById('geometry').innerHTML = geometryOutput;\n    })\n    \n    .catch(function(error){\n        console.log(error);\n    });\n    \n    \n}\n}","undoManager":{"mark":-2,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":119,"column":1},"action":"insert","lines":["var map;","var marker;","","var stadiums = [","  ['Newbridge', 53.179731, -6.794853],","  ['Derry', 54.993350, -7.333496],","  ['Longford', 53.739839, -7.805263],","  ['Carrick-on-shannon', 53.948194, -8.075821],","  ['Clones', 54.186091, -7.234708]","  ['Newry', 54.163533, -6.332810]","];","","","function initMap() {","            var options = {","                center: {lat: 53.1424,lng: -7.6921},","                zoom: 6","            };","            ","            map = new google.maps.Map(document.getElementById('map'),options);","         ","            marker = new google.maps.Marker({","                     map: map,","                     draggable: false,","                     animation: google.maps.Animation.DROP,","                     position:  {lat: 54.186091, lng: -7.234708}","                                ","            });","            ","            marker.addListener('click', toggleBounce);","    }","","            function toggleBounce() {","                 if (marker.getAnimation() !== null) {","                     marker.setAnimation(null);","         }","                 else {","                     marker.setAnimation(google.maps.Animation.BOUNCE);","         }   ","","","","//geocode();","","// get location form","","var locationForm = document.getElementById('location-form');","","//listen for submit","","locationForm.addEventListener('submit', geocode);","","","","function geocode(e) {","    ","    e.preventDefault();","    ","    var location = document.getElementById('location-input').value; ","    ","    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{","        params:{","        address: location,","        key: 'AIzaSyDj_Sw27lS1EGDp6aGNzfh9chD3YXd6A5c'","        }","    })","    .then(function(responce){","        // log full responce","        console.log(responce);","        ","        // formatted address","        ","        var formattedAddress = responce.data.results[0].formatted_address;","        var formattedAddressOutput = `","            ","            <ul class=\"list-group\">","            <li class=\"list-group-item>${formattedAddress}</li>","            ","            </ul>","        `;","        ","        //address components","        ","        var addressComponents = responce.data.results[0].address_components;","        var addressComponentsOutput = '<ul class=\"list-group\">';","        for(var i = 0; i < addressComponents.length;i++){","            addressComponentsOutput += `","                <li class=\"list-group-item><strong>${addressComponents[i].types[0]}</strong>:${addressComponents[i].long_name}</li>","            `;","        }","        ","        addressComponentsOutput += '</ul>';","        ","        // geometry","        ","        var lat = responce.data.results[0].geometry.location.lat;","        var lng = responce.data.results[0].geometry.location.lng;","        var geometryOutput = `","            ","            <ul class=\"list-group\">","            <li class=\"list-group-item><strong>Latitude</strong>${lat}</li>","            <li class=\"list-group-item><strong>Longitude</strong>${lng}</li>","            ","            </ul>","        `;","        ","        // output to app","        ","        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;","        document.getElementById('address-components').innerHTML = AddressComponentsOutput;","        document.getElementById('geometry').innerHTML = geometryOutput;","    })","    ","    .catch(function(error){","        console.log(error);","    });","    ","    ","}","}"],"id":1}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":11,"column":0},"end":{"row":11,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1561742240937}