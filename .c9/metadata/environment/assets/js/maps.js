{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":16,"position":16,"stack":[[{"start":{"row":0,"column":0},"end":{"row":25,"column":12},"action":"insert","lines":["function initMap() {","            var map = new google.maps.Map(document.getElementById(\"map\"), {","                zoom: 3,","                center: {","                    lat: 46.619261,","                    lng: -33.134766","                }","            });","            ","            var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"","            ","            var locations = [","                { lat: 54.250202, lng: -6.971605 }","            ];","            ","            var markers = locations.map(function(location, i) {","                return new google.maps.Marker({","                    position: location,","                    label: labels[i % labels.length]","                });","            });","            var markerCluster = new MarkerClusterer(map, markers, {","                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'","            });","            }","            "],"id":1}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":34},"action":"remove","lines":["46.619261"],"id":2},{"start":{"row":4,"column":25},"end":{"row":4,"column":32},"action":"insert","lines":["53.1424"]}],[{"start":{"row":5,"column":26},"end":{"row":5,"column":35},"action":"remove","lines":["33.134766"],"id":3},{"start":{"row":5,"column":26},"end":{"row":5,"column":32},"action":"insert","lines":["7.6921"]}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"remove","lines":["-"],"id":4}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["-"],"id":5}],[{"start":{"row":4,"column":25},"end":{"row":4,"column":33},"action":"remove","lines":["53.1424,"],"id":6},{"start":{"row":4,"column":25},"end":{"row":4,"column":46},"action":"insert","lines":["53.1424° N, 7.6921° W"]}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":46},"action":"remove","lines":["7.6921° W"],"id":7}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":32},"action":"remove","lines":["-7.6921"],"id":8},{"start":{"row":5,"column":25},"end":{"row":5,"column":34},"action":"insert","lines":["7.6921° W"]}],[{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"remove","lines":["N"],"id":9},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"remove","lines":[" "]},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"remove","lines":["°"]}],[{"start":{"row":5,"column":33},"end":{"row":5,"column":34},"action":"remove","lines":["W"],"id":10},{"start":{"row":5,"column":32},"end":{"row":5,"column":33},"action":"remove","lines":[" "]},{"start":{"row":5,"column":31},"end":{"row":5,"column":32},"action":"remove","lines":["°"]}],[{"start":{"row":5,"column":25},"end":{"row":5,"column":26},"action":"insert","lines":["-"],"id":11}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["3"],"id":12}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["6"],"id":13}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["6"],"id":14}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["3"],"id":15}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"remove","lines":["3"],"id":16}],[{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["6"],"id":17}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":25,"column":12},"end":{"row":25,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1561131465252,"hash":"339b5b20a6dc98bdf6e3b2a679e0e186565893bf"}