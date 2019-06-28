{"changed":true,"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","value":"var map = new google.maps.Map(document.getElementById('map'),{\n    center: {\n        lat:53.1424,\n        lng: -7.6921\n    },\n    zoom:6\n});\n\nvar marker = new google.maps.Marker ({\n    position:{\n        lat:53.1424,\n        lng: -7.6921\n    },\n    map:map,\n    draggable: false\n});\n\nvar searchBox = new google.maps.places.SearchBox(document.getElementById('location-input'));\n\ngoogle.maps.event.addListener(searchBox, 'places_changed', function(){\n   // console.log(searchBox.getPlaces());\n   \n   var places = searchBox.getPlaces();\n   \n   // bounds\n   \n   var bounds = new google.maps.LatLngBounds();\n   var i, place;\n   \n   for (i=0; place=places[i];i++){\n       console.log(place.geometry.location);\n       \n       bounds.extend(place.geometry.location);\n       marker.setPosition(place.geometry.location);\n       \n   }\n   \n   map.fitBounds(bounds);\n   map.setZoom(15);\n   \n});","undoManager":{"mark":-3,"position":100,"stack":[[{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["i"],"id":1504}],[{"start":{"row":29,"column":27},"end":{"row":29,"column":28},"action":"insert","lines":[";"],"id":1505}],[{"start":{"row":29,"column":28},"end":{"row":29,"column":29},"action":"insert","lines":["i"],"id":1506},{"start":{"row":29,"column":29},"end":{"row":29,"column":30},"action":"insert","lines":["+"]},{"start":{"row":29,"column":30},"end":{"row":29,"column":31},"action":"insert","lines":["+"]}],[{"start":{"row":29,"column":32},"end":{"row":29,"column":33},"action":"insert","lines":["{"],"id":1507},{"start":{"row":29,"column":33},"end":{"row":29,"column":34},"action":"insert","lines":["}"]}],[{"start":{"row":29,"column":33},"end":{"row":31,"column":3},"action":"insert","lines":["","       ","   "],"id":1508}],[{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":["c"],"id":1509},{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["o"]},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["n"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["s"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["o"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["l"]},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["."],"id":1510},{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":["l"]},{"start":{"row":30,"column":16},"end":{"row":30,"column":17},"action":"insert","lines":["o"]},{"start":{"row":30,"column":17},"end":{"row":30,"column":18},"action":"insert","lines":["g"]}],[{"start":{"row":30,"column":18},"end":{"row":30,"column":20},"action":"insert","lines":["()"],"id":1511}],[{"start":{"row":30,"column":19},"end":{"row":30,"column":20},"action":"insert","lines":["p"],"id":1512},{"start":{"row":30,"column":20},"end":{"row":30,"column":21},"action":"insert","lines":["l"]},{"start":{"row":30,"column":21},"end":{"row":30,"column":22},"action":"insert","lines":["a"]},{"start":{"row":30,"column":22},"end":{"row":30,"column":23},"action":"insert","lines":["c"]},{"start":{"row":30,"column":23},"end":{"row":30,"column":24},"action":"insert","lines":["e"]},{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["."]},{"start":{"row":30,"column":25},"end":{"row":30,"column":26},"action":"insert","lines":["g"]}],[{"start":{"row":30,"column":26},"end":{"row":30,"column":27},"action":"insert","lines":["e"],"id":1513},{"start":{"row":30,"column":27},"end":{"row":30,"column":28},"action":"insert","lines":["o"]}],[{"start":{"row":30,"column":25},"end":{"row":30,"column":28},"action":"remove","lines":["geo"],"id":1514},{"start":{"row":30,"column":25},"end":{"row":30,"column":33},"action":"insert","lines":["geometry"]}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":34},"action":"insert","lines":["."],"id":1515},{"start":{"row":30,"column":34},"end":{"row":30,"column":35},"action":"insert","lines":["l"]},{"start":{"row":30,"column":35},"end":{"row":30,"column":36},"action":"insert","lines":["o"]},{"start":{"row":30,"column":36},"end":{"row":30,"column":37},"action":"insert","lines":["c"]},{"start":{"row":30,"column":37},"end":{"row":30,"column":38},"action":"insert","lines":["a"]},{"start":{"row":30,"column":38},"end":{"row":30,"column":39},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":39},"end":{"row":30,"column":40},"action":"insert","lines":["i"],"id":1516},{"start":{"row":30,"column":40},"end":{"row":30,"column":41},"action":"insert","lines":["o"]},{"start":{"row":30,"column":41},"end":{"row":30,"column":42},"action":"insert","lines":["n"]}],[{"start":{"row":30,"column":43},"end":{"row":30,"column":44},"action":"insert","lines":[";"],"id":1517}],[{"start":{"row":30,"column":44},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":1518},{"start":{"row":31,"column":0},"end":{"row":31,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":30,"column":44},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":1519},{"start":{"row":31,"column":0},"end":{"row":31,"column":7},"action":"insert","lines":["       "]},{"start":{"row":31,"column":7},"end":{"row":32,"column":0},"action":"insert","lines":["",""]},{"start":{"row":32,"column":0},"end":{"row":32,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":["b"],"id":1520},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["o"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["u"]},{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["n"]},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["d"]},{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["s"]}],[{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["."],"id":1521},{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["e"]},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["x"]},{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":["t"]},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["e"]},{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":["n"]},{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["d"]}],[{"start":{"row":32,"column":20},"end":{"row":32,"column":22},"action":"insert","lines":["()"],"id":1522}],[{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["p"],"id":1523},{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["l"]},{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["a"]},{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["c"]},{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["."],"id":1524},{"start":{"row":32,"column":27},"end":{"row":32,"column":28},"action":"insert","lines":["g"]},{"start":{"row":32,"column":28},"end":{"row":32,"column":29},"action":"insert","lines":["e"]},{"start":{"row":32,"column":29},"end":{"row":32,"column":30},"action":"insert","lines":["o"]}],[{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":["m"],"id":1525},{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"insert","lines":["e"]},{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"insert","lines":["t"]},{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"insert","lines":["r"]},{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"insert","lines":["y"]}],[{"start":{"row":32,"column":35},"end":{"row":32,"column":36},"action":"insert","lines":["."],"id":1526},{"start":{"row":32,"column":36},"end":{"row":32,"column":37},"action":"insert","lines":["l"]},{"start":{"row":32,"column":37},"end":{"row":32,"column":38},"action":"insert","lines":["o"]}],[{"start":{"row":32,"column":36},"end":{"row":32,"column":38},"action":"remove","lines":["lo"],"id":1527},{"start":{"row":32,"column":36},"end":{"row":32,"column":44},"action":"insert","lines":["location"]}],[{"start":{"row":32,"column":45},"end":{"row":32,"column":46},"action":"insert","lines":[";"],"id":1528}],[{"start":{"row":32,"column":46},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":1529},{"start":{"row":33,"column":0},"end":{"row":33,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":33,"column":7},"end":{"row":33,"column":8},"action":"insert","lines":["m"],"id":1530},{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["a"]},{"start":{"row":33,"column":9},"end":{"row":33,"column":10},"action":"insert","lines":["r"]},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"insert","lines":["k"]},{"start":{"row":33,"column":11},"end":{"row":33,"column":12},"action":"insert","lines":["e"]},{"start":{"row":33,"column":12},"end":{"row":33,"column":13},"action":"insert","lines":["r"]}],[{"start":{"row":33,"column":13},"end":{"row":33,"column":14},"action":"insert","lines":["."],"id":1531},{"start":{"row":33,"column":14},"end":{"row":33,"column":15},"action":"insert","lines":["s"]},{"start":{"row":33,"column":15},"end":{"row":33,"column":16},"action":"insert","lines":["e"]},{"start":{"row":33,"column":16},"end":{"row":33,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":33,"column":17},"end":{"row":33,"column":18},"action":"insert","lines":["P"],"id":1532},{"start":{"row":33,"column":18},"end":{"row":33,"column":19},"action":"insert","lines":["o"]},{"start":{"row":33,"column":19},"end":{"row":33,"column":20},"action":"insert","lines":["s"]},{"start":{"row":33,"column":20},"end":{"row":33,"column":21},"action":"insert","lines":["i"]}],[{"start":{"row":33,"column":21},"end":{"row":33,"column":22},"action":"insert","lines":["t"],"id":1533},{"start":{"row":33,"column":22},"end":{"row":33,"column":23},"action":"insert","lines":["i"]},{"start":{"row":33,"column":23},"end":{"row":33,"column":24},"action":"insert","lines":["o"]},{"start":{"row":33,"column":24},"end":{"row":33,"column":25},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":25},"end":{"row":33,"column":27},"action":"insert","lines":["()"],"id":1534}],[{"start":{"row":33,"column":26},"end":{"row":33,"column":27},"action":"insert","lines":["p"],"id":1535},{"start":{"row":33,"column":27},"end":{"row":33,"column":28},"action":"insert","lines":["l"]},{"start":{"row":33,"column":28},"end":{"row":33,"column":29},"action":"insert","lines":["a"]},{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["c"]},{"start":{"row":33,"column":30},"end":{"row":33,"column":31},"action":"insert","lines":["e"]}],[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["."],"id":1536},{"start":{"row":33,"column":32},"end":{"row":33,"column":33},"action":"insert","lines":["g"]},{"start":{"row":33,"column":33},"end":{"row":33,"column":34},"action":"insert","lines":["e"]},{"start":{"row":33,"column":34},"end":{"row":33,"column":35},"action":"insert","lines":["o"]}],[{"start":{"row":33,"column":32},"end":{"row":33,"column":35},"action":"remove","lines":["geo"],"id":1537},{"start":{"row":33,"column":32},"end":{"row":33,"column":40},"action":"insert","lines":["geometry"]}],[{"start":{"row":33,"column":40},"end":{"row":33,"column":41},"action":"insert","lines":["."],"id":1538},{"start":{"row":33,"column":41},"end":{"row":33,"column":42},"action":"insert","lines":["l"]},{"start":{"row":33,"column":42},"end":{"row":33,"column":43},"action":"insert","lines":["o"]},{"start":{"row":33,"column":43},"end":{"row":33,"column":44},"action":"insert","lines":["c"]},{"start":{"row":33,"column":44},"end":{"row":33,"column":45},"action":"insert","lines":["a"]},{"start":{"row":33,"column":45},"end":{"row":33,"column":46},"action":"insert","lines":["t"]},{"start":{"row":33,"column":46},"end":{"row":33,"column":47},"action":"insert","lines":["i"]},{"start":{"row":33,"column":47},"end":{"row":33,"column":48},"action":"insert","lines":["o"]},{"start":{"row":33,"column":48},"end":{"row":33,"column":49},"action":"insert","lines":["n"]}],[{"start":{"row":33,"column":50},"end":{"row":33,"column":51},"action":"insert","lines":[";"],"id":1539}],[{"start":{"row":36,"column":2},"end":{"row":36,"column":3},"action":"insert","lines":[";"],"id":1540}],[{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":1541},{"start":{"row":36,"column":0},"end":{"row":36,"column":3},"action":"insert","lines":["   "]},{"start":{"row":36,"column":3},"end":{"row":37,"column":0},"action":"insert","lines":["",""]},{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":37,"column":3},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":1542},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":37,"column":3},"end":{"row":37,"column":4},"action":"insert","lines":["m"],"id":1543},{"start":{"row":37,"column":4},"end":{"row":37,"column":5},"action":"insert","lines":["a"]},{"start":{"row":37,"column":5},"end":{"row":37,"column":6},"action":"insert","lines":["p"]}],[{"start":{"row":37,"column":6},"end":{"row":37,"column":7},"action":"insert","lines":["."],"id":1544},{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["f"]},{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["i"]},{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":37,"column":7},"end":{"row":37,"column":10},"action":"remove","lines":["fit"],"id":1545},{"start":{"row":37,"column":7},"end":{"row":37,"column":16},"action":"insert","lines":["fitBounds"]}],[{"start":{"row":37,"column":16},"end":{"row":37,"column":18},"action":"insert","lines":["()"],"id":1546}],[{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["b"],"id":1547},{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"insert","lines":["o"]},{"start":{"row":37,"column":19},"end":{"row":37,"column":20},"action":"insert","lines":["u"]},{"start":{"row":37,"column":20},"end":{"row":37,"column":21},"action":"insert","lines":["n"]},{"start":{"row":37,"column":21},"end":{"row":37,"column":22},"action":"insert","lines":["d"]},{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"insert","lines":["s"]}],[{"start":{"row":37,"column":24},"end":{"row":37,"column":25},"action":"insert","lines":[";"],"id":1548}],[{"start":{"row":37,"column":25},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":1549},{"start":{"row":38,"column":0},"end":{"row":38,"column":3},"action":"insert","lines":["   "]},{"start":{"row":38,"column":3},"end":{"row":38,"column":4},"action":"insert","lines":["m"]}],[{"start":{"row":38,"column":4},"end":{"row":38,"column":5},"action":"insert","lines":["a"],"id":1550},{"start":{"row":38,"column":5},"end":{"row":38,"column":6},"action":"insert","lines":["p"]}],[{"start":{"row":38,"column":6},"end":{"row":38,"column":7},"action":"insert","lines":["."],"id":1551},{"start":{"row":38,"column":7},"end":{"row":38,"column":8},"action":"insert","lines":["s"]},{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"insert","lines":["e"]},{"start":{"row":38,"column":9},"end":{"row":38,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":38,"column":10},"end":{"row":38,"column":11},"action":"insert","lines":["Z"],"id":1552},{"start":{"row":38,"column":11},"end":{"row":38,"column":12},"action":"insert","lines":["o"]},{"start":{"row":38,"column":12},"end":{"row":38,"column":13},"action":"insert","lines":["o"]},{"start":{"row":38,"column":13},"end":{"row":38,"column":14},"action":"insert","lines":["m"]}],[{"start":{"row":38,"column":14},"end":{"row":38,"column":16},"action":"insert","lines":["()"],"id":1553}],[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["1"],"id":1554},{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["2"]}],[{"start":{"row":38,"column":18},"end":{"row":38,"column":19},"action":"insert","lines":[";"],"id":1555}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["6"],"id":1556}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["1"],"id":1557},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["5"]}],[{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"remove","lines":["2"],"id":1558},{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"remove","lines":["1"]}],[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["1"],"id":1559},{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["5"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["5"],"id":1560},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["1"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["8"],"id":1561}],[{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"remove","lines":["5"],"id":1562},{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"remove","lines":["1"]}],[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["1"],"id":1563},{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["2"]}],[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"insert","lines":["s"],"id":1564}],[{"start":{"row":29,"column":25},"end":{"row":29,"column":26},"action":"insert","lines":["s"],"id":1565}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"insert","lines":["s"],"id":1566}],[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["s"],"id":1567}],[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"insert","lines":["s"],"id":1568}],[{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["s"],"id":1569}],[{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"remove","lines":["s"],"id":1570},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"remove","lines":["e"]}],[{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["e"],"id":1571}],[{"start":{"row":29,"column":18},"end":{"row":29,"column":19},"action":"remove","lines":["s"],"id":1572}],[{"start":{"row":30,"column":24},"end":{"row":30,"column":25},"action":"remove","lines":["s"],"id":1573}],[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"remove","lines":["s"],"id":1574}],[{"start":{"row":33,"column":31},"end":{"row":33,"column":32},"action":"remove","lines":["s"],"id":1575}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":20},"action":"remove","lines":["false"],"id":1576},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["t"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["r"]}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["u"],"id":1577},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":19,"column":25},"end":{"row":19,"column":26},"action":"remove","lines":["t"],"id":1578},{"start":{"row":19,"column":24},"end":{"row":19,"column":25},"action":"remove","lines":["n"]},{"start":{"row":19,"column":23},"end":{"row":19,"column":24},"action":"remove","lines":["e"]},{"start":{"row":19,"column":22},"end":{"row":19,"column":23},"action":"remove","lines":["v"]},{"start":{"row":19,"column":21},"end":{"row":19,"column":22},"action":"remove","lines":["E"]}],[{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"remove","lines":["e"],"id":1579},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"remove","lines":["u"]},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"remove","lines":["r"]},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"remove","lines":["t"]}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["f"],"id":1580},{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["a"]},{"start":{"row":14,"column":17},"end":{"row":14,"column":18},"action":"insert","lines":["l"]},{"start":{"row":14,"column":18},"end":{"row":14,"column":19},"action":"insert","lines":["s"]},{"start":{"row":14,"column":19},"end":{"row":14,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["8"],"id":1581}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["6"],"id":1582}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["6"],"id":1583}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["1"],"id":1584},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["2"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["2"],"id":1585},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["1"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["6"],"id":1586}],[{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"remove","lines":["2"],"id":1587},{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"remove","lines":["1"]}],[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["6"],"id":1588}],[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"remove","lines":["6"],"id":1589},{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["1"]},{"start":{"row":38,"column":16},"end":{"row":38,"column":17},"action":"insert","lines":["5"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":1590}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":1595}],[{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"remove","lines":["'"],"id":1596}],[{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"insert","lines":["\""],"id":1597}],[{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"remove","lines":["'"],"id":1598}],[{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"insert","lines":["\""],"id":1599}],[{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"remove","lines":["\""],"id":1600}],[{"start":{"row":0,"column":54},"end":{"row":0,"column":55},"action":"insert","lines":["'"],"id":1601}],[{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"remove","lines":["\""],"id":1602}],[{"start":{"row":0,"column":58},"end":{"row":0,"column":59},"action":"insert","lines":["'"],"id":1603}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["6"],"id":1604}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["1"],"id":1605},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["5"]}],[{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"remove","lines":["5"],"id":1606},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"remove","lines":["1"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["1"],"id":1607},{"start":{"row":5,"column":10},"end":{"row":5,"column":11},"action":"insert","lines":["5"]}],[{"start":{"row":5,"column":9},"end":{"row":5,"column":11},"action":"remove","lines":["15"],"id":1608},{"start":{"row":5,"column":9},"end":{"row":5,"column":10},"action":"insert","lines":["6"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":7,"column":0},"end":{"row":7,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":185,"mode":"ace/mode/javascript"}},"timestamp":1561749191167}