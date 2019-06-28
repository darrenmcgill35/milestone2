{"changed":true,"filter":false,"title":"test.js","tooltip":"/assets/js/test.js","value":"var map;\n\nfunction initMap() {\n            var options = {\n                center: {lat: 53.1424,lng: -7.6921},\n                zoom: 6\n            };\n            \n            map = new google.maps.Map(document.getElementById('map'),options);\n          \n               \n            var input = document.getElementById('location-form');\n            var searchBox = new google.maps.places.SearchBox(input);\n            \n            map.addEventListener('bounds_changed', function(){\n                searchBox.setBounds(map.getBounds());\n            });\n            \n            var markers = [];\n            \n            searchBox.addListener('places_changed', function(){\n                var places = searchBox.getPlaces();\n                \n                if (places.length === 0)\n                return;\n                \n                markers.forEach(function(m){m.setMap(null); });\n                markers = [];\n                \n                var bounds = new google.maps.LatLngBounds();\n                \n                places.forEach (function (p){\n                    if (!p.geometry)\n                    return;\n                    \n                    markers.push(new google.maps.Marker({\n                        map: map,\n                        title: p.name,\n                        position: p.geometry.location\n                    }));\n                    \n                    if (p.geometry.viewport)\n                        bounds.union(p.geometry.viewport);\n                    else \n                       bounds.extend(p.geometry.location);\n                });\n                \n                map.fitBounds(bounds);\n                \n            });\n        }     \n        ","undoManager":{"mark":-2,"position":100,"stack":[[{"start":{"row":17,"column":19},"end":{"row":17,"column":21},"action":"insert","lines":["()"],"id":97}],[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["r"],"id":98},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["e"]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["s"]},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["p"]},{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["o"]},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["n"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["c"]},{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["."],"id":99},{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["d"]},{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["a"]},{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["t"]},{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["a"]},{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["."]}],[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["r"],"id":100},{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["e"]},{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["s"]},{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["u"]},{"start":{"row":17,"column":38},"end":{"row":17,"column":39},"action":"insert","lines":["l"]},{"start":{"row":17,"column":39},"end":{"row":17,"column":40},"action":"insert","lines":["t"]},{"start":{"row":17,"column":40},"end":{"row":17,"column":41},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":41},"end":{"row":17,"column":43},"action":"insert","lines":["[]"],"id":101}],[{"start":{"row":17,"column":42},"end":{"row":17,"column":43},"action":"insert","lines":["0"],"id":102}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":47},"action":"insert","lines":["''"],"id":103}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":47},"action":"remove","lines":["''"],"id":104}],[{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":[";"],"id":105}],[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["."],"id":106},{"start":{"row":17,"column":45},"end":{"row":17,"column":46},"action":"insert","lines":["f"]},{"start":{"row":17,"column":46},"end":{"row":17,"column":47},"action":"insert","lines":["o"]},{"start":{"row":17,"column":47},"end":{"row":17,"column":48},"action":"insert","lines":["r"]},{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"insert","lines":["m"]},{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["a"]},{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["t"]},{"start":{"row":17,"column":51},"end":{"row":17,"column":52},"action":"insert","lines":["t"]},{"start":{"row":17,"column":52},"end":{"row":17,"column":53},"action":"insert","lines":["e"]}],[{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"insert","lines":["s"],"id":107}],[{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"remove","lines":["s"],"id":108}],[{"start":{"row":17,"column":53},"end":{"row":17,"column":54},"action":"insert","lines":["d"],"id":109},{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"insert","lines":["-"]}],[{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"remove","lines":["-"],"id":110}],[{"start":{"row":17,"column":54},"end":{"row":17,"column":55},"action":"insert","lines":["_"],"id":111},{"start":{"row":17,"column":55},"end":{"row":17,"column":56},"action":"insert","lines":["a"]},{"start":{"row":17,"column":56},"end":{"row":17,"column":57},"action":"insert","lines":["d"]},{"start":{"row":17,"column":57},"end":{"row":17,"column":58},"action":"insert","lines":["d"]}],[{"start":{"row":17,"column":58},"end":{"row":17,"column":59},"action":"insert","lines":["r"],"id":112},{"start":{"row":17,"column":59},"end":{"row":17,"column":60},"action":"insert","lines":["e"]},{"start":{"row":17,"column":60},"end":{"row":17,"column":61},"action":"insert","lines":["s"]},{"start":{"row":17,"column":61},"end":{"row":17,"column":62},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":8},"end":{"row":17,"column":19},"action":"remove","lines":["console.log"],"id":113},{"start":{"row":17,"column":8},"end":{"row":17,"column":9},"action":"insert","lines":["v"]},{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["a"]},{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":12},"action":"insert","lines":[" "],"id":114},{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["f"]},{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["o"]},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["r"]},{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["m"]},{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["a"]}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["t"],"id":115},{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["t"]},{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["d"]},{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["D"]},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["D"]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["D"]}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"remove","lines":["D"],"id":116},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"remove","lines":["D"]},{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"remove","lines":["D"]},{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"remove","lines":["d"]}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["D"],"id":117}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"remove","lines":["D"],"id":118}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["E"],"id":119},{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["D"]}],[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"remove","lines":["D"],"id":120},{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"remove","lines":["E"]}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":[" "],"id":121}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"remove","lines":[" "],"id":122},{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"remove","lines":["t"]}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["t"],"id":123},{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["e"]},{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["d"]},{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["A"]},{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["d"]},{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":["d"]}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["r"],"id":124},{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["e"]},{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["s"]},{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"remove","lines":["("],"id":125}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["="],"id":126}],[{"start":{"row":17,"column":71},"end":{"row":17,"column":72},"action":"remove","lines":[")"],"id":127}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":[" "],"id":128}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":[" "],"id":129}],[{"start":{"row":17,"column":74},"end":{"row":18,"column":0},"action":"insert","lines":["",""],"id":130},{"start":{"row":18,"column":0},"end":{"row":18,"column":8},"action":"insert","lines":["        "]},{"start":{"row":18,"column":8},"end":{"row":18,"column":9},"action":"insert","lines":["v"]},{"start":{"row":18,"column":9},"end":{"row":18,"column":10},"action":"insert","lines":["a"]},{"start":{"row":18,"column":10},"end":{"row":18,"column":11},"action":"insert","lines":["r"]}],[{"start":{"row":18,"column":11},"end":{"row":18,"column":12},"action":"insert","lines":[" "],"id":131},{"start":{"row":18,"column":12},"end":{"row":18,"column":13},"action":"insert","lines":["f"]},{"start":{"row":18,"column":13},"end":{"row":18,"column":14},"action":"insert","lines":["o"]},{"start":{"row":18,"column":14},"end":{"row":18,"column":15},"action":"insert","lines":["r"]},{"start":{"row":18,"column":15},"end":{"row":18,"column":16},"action":"insert","lines":["m"]}],[{"start":{"row":18,"column":16},"end":{"row":18,"column":17},"action":"insert","lines":["a"],"id":132},{"start":{"row":18,"column":17},"end":{"row":18,"column":18},"action":"insert","lines":["t"]},{"start":{"row":18,"column":18},"end":{"row":18,"column":19},"action":"insert","lines":["t"]},{"start":{"row":18,"column":19},"end":{"row":18,"column":20},"action":"insert","lines":["e"]},{"start":{"row":18,"column":20},"end":{"row":18,"column":21},"action":"insert","lines":["d"]},{"start":{"row":18,"column":21},"end":{"row":18,"column":22},"action":"insert","lines":["A"]},{"start":{"row":18,"column":22},"end":{"row":18,"column":23},"action":"insert","lines":["d"]},{"start":{"row":18,"column":23},"end":{"row":18,"column":24},"action":"insert","lines":["d"]},{"start":{"row":18,"column":24},"end":{"row":18,"column":25},"action":"insert","lines":["r"]},{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["s"],"id":133},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["s"]},{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":["O"]},{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["u"]},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":31},"end":{"row":18,"column":32},"action":"insert","lines":["p"],"id":134},{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"insert","lines":["u"]},{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":34},"end":{"row":18,"column":35},"action":"insert","lines":[" "],"id":135},{"start":{"row":18,"column":35},"end":{"row":18,"column":36},"action":"insert","lines":["="]}],[{"start":{"row":18,"column":36},"end":{"row":18,"column":37},"action":"insert","lines":[" "],"id":136}],[{"start":{"row":18,"column":37},"end":{"row":18,"column":39},"action":"insert","lines":["``"],"id":137},{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"insert","lines":["¬"]}],[{"start":{"row":18,"column":38},"end":{"row":18,"column":39},"action":"remove","lines":["¬"],"id":138}],[{"start":{"row":18,"column":39},"end":{"row":18,"column":40},"action":"insert","lines":[";"],"id":139}],[{"start":{"row":18,"column":38},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":140},{"start":{"row":19,"column":0},"end":{"row":19,"column":8},"action":"insert","lines":["        "]},{"start":{"row":19,"column":8},"end":{"row":20,"column":0},"action":"insert","lines":["",""]},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":20,"column":8},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":141},{"start":{"row":21,"column":0},"end":{"row":21,"column":8},"action":"insert","lines":["        "]},{"start":{"row":21,"column":8},"end":{"row":22,"column":0},"action":"insert","lines":["",""]},{"start":{"row":22,"column":0},"end":{"row":22,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"insert","lines":[" "],"id":142}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":9},"action":"remove","lines":[" "],"id":143}],[{"start":{"row":19,"column":8},"end":{"row":19,"column":12},"action":"insert","lines":["    "],"id":144}],[{"start":{"row":19,"column":12},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":145},{"start":{"row":20,"column":0},"end":{"row":20,"column":12},"action":"insert","lines":["            "]},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["<"]}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["u"],"id":146},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["l"]},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":[">"]}],[{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":[" "],"id":147},{"start":{"row":20,"column":16},"end":{"row":20,"column":17},"action":"insert","lines":["c"]},{"start":{"row":20,"column":17},"end":{"row":20,"column":18},"action":"insert","lines":["l"]},{"start":{"row":20,"column":18},"end":{"row":20,"column":19},"action":"insert","lines":["a"]},{"start":{"row":20,"column":19},"end":{"row":20,"column":20},"action":"insert","lines":["s"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["s"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["\""],"id":148},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["l"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["i"]},{"start":{"row":20,"column":25},"end":{"row":20,"column":26},"action":"insert","lines":["s"]},{"start":{"row":20,"column":26},"end":{"row":20,"column":27},"action":"insert","lines":["t"]}],[{"start":{"row":20,"column":27},"end":{"row":20,"column":28},"action":"insert","lines":["-"],"id":149},{"start":{"row":20,"column":28},"end":{"row":20,"column":29},"action":"insert","lines":["g"]},{"start":{"row":20,"column":29},"end":{"row":20,"column":30},"action":"insert","lines":["r"]},{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":["o"]},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["u"]},{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":["p"]},{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["\""]}],[{"start":{"row":20,"column":35},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":150},{"start":{"row":21,"column":0},"end":{"row":21,"column":12},"action":"insert","lines":["            "]},{"start":{"row":21,"column":12},"end":{"row":22,"column":0},"action":"insert","lines":["",""]},{"start":{"row":22,"column":0},"end":{"row":22,"column":12},"action":"insert","lines":["            "]},{"start":{"row":22,"column":12},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":23,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":["<"],"id":151},{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":["/"]}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":15},"action":"insert","lines":["u"],"id":152},{"start":{"row":23,"column":15},"end":{"row":23,"column":16},"action":"insert","lines":["l"]},{"start":{"row":23,"column":16},"end":{"row":23,"column":17},"action":"insert","lines":[">"]}],[{"start":{"row":20,"column":35},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":153},{"start":{"row":21,"column":0},"end":{"row":21,"column":12},"action":"insert","lines":["            "]},{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"insert","lines":["<"]}],[{"start":{"row":21,"column":13},"end":{"row":21,"column":14},"action":"insert","lines":["l"],"id":154},{"start":{"row":21,"column":14},"end":{"row":21,"column":15},"action":"insert","lines":["i"]},{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"insert","lines":[">"]}],[{"start":{"row":21,"column":15},"end":{"row":21,"column":16},"action":"insert","lines":[" "],"id":155},{"start":{"row":21,"column":16},"end":{"row":21,"column":17},"action":"insert","lines":["c"]},{"start":{"row":21,"column":17},"end":{"row":21,"column":18},"action":"insert","lines":["l"]},{"start":{"row":21,"column":18},"end":{"row":21,"column":19},"action":"insert","lines":["a"]},{"start":{"row":21,"column":19},"end":{"row":21,"column":20},"action":"insert","lines":["s"]},{"start":{"row":21,"column":20},"end":{"row":21,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":21,"column":21},"end":{"row":21,"column":22},"action":"insert","lines":["="],"id":156},{"start":{"row":21,"column":22},"end":{"row":21,"column":23},"action":"insert","lines":["\""]},{"start":{"row":21,"column":23},"end":{"row":21,"column":24},"action":"insert","lines":["l"]},{"start":{"row":21,"column":24},"end":{"row":21,"column":25},"action":"insert","lines":["i"]},{"start":{"row":21,"column":25},"end":{"row":21,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":21,"column":26},"end":{"row":21,"column":27},"action":"insert","lines":["t"],"id":157},{"start":{"row":21,"column":27},"end":{"row":21,"column":28},"action":"insert","lines":["-"]},{"start":{"row":21,"column":28},"end":{"row":21,"column":29},"action":"insert","lines":["g"]},{"start":{"row":21,"column":29},"end":{"row":21,"column":30},"action":"insert","lines":["r"]}],[{"start":{"row":21,"column":30},"end":{"row":21,"column":31},"action":"insert","lines":["o"],"id":158},{"start":{"row":21,"column":31},"end":{"row":21,"column":32},"action":"insert","lines":["u"]},{"start":{"row":21,"column":32},"end":{"row":21,"column":33},"action":"insert","lines":["p"]},{"start":{"row":21,"column":33},"end":{"row":21,"column":34},"action":"insert","lines":["-"]},{"start":{"row":21,"column":34},"end":{"row":21,"column":35},"action":"insert","lines":["i"]},{"start":{"row":21,"column":35},"end":{"row":21,"column":36},"action":"insert","lines":["t"]},{"start":{"row":21,"column":36},"end":{"row":21,"column":37},"action":"insert","lines":["e"]}],[{"start":{"row":21,"column":37},"end":{"row":21,"column":38},"action":"insert","lines":["m"],"id":159}],[{"start":{"row":21,"column":39},"end":{"row":21,"column":40},"action":"insert","lines":["$"],"id":160},{"start":{"row":21,"column":40},"end":{"row":21,"column":41},"action":"insert","lines":["{"]}],[{"start":{"row":21,"column":41},"end":{"row":21,"column":42},"action":"insert","lines":["}"],"id":161}],[{"start":{"row":21,"column":41},"end":{"row":21,"column":42},"action":"insert","lines":["f"],"id":162},{"start":{"row":21,"column":42},"end":{"row":21,"column":43},"action":"insert","lines":["o"]},{"start":{"row":21,"column":43},"end":{"row":21,"column":44},"action":"insert","lines":["r"]},{"start":{"row":21,"column":44},"end":{"row":21,"column":45},"action":"insert","lines":["m"]},{"start":{"row":21,"column":45},"end":{"row":21,"column":46},"action":"insert","lines":["a"]},{"start":{"row":21,"column":46},"end":{"row":21,"column":47},"action":"insert","lines":["t"]},{"start":{"row":21,"column":47},"end":{"row":21,"column":48},"action":"insert","lines":["t"]},{"start":{"row":21,"column":48},"end":{"row":21,"column":49},"action":"insert","lines":["d"]}],[{"start":{"row":21,"column":48},"end":{"row":21,"column":49},"action":"remove","lines":["d"],"id":163}],[{"start":{"row":21,"column":48},"end":{"row":21,"column":49},"action":"insert","lines":["e"],"id":164},{"start":{"row":21,"column":49},"end":{"row":21,"column":50},"action":"insert","lines":["d"]},{"start":{"row":21,"column":50},"end":{"row":21,"column":51},"action":"insert","lines":["A"]},{"start":{"row":21,"column":51},"end":{"row":21,"column":52},"action":"insert","lines":["d"]}],[{"start":{"row":21,"column":52},"end":{"row":21,"column":53},"action":"insert","lines":["d"],"id":165},{"start":{"row":21,"column":53},"end":{"row":21,"column":54},"action":"insert","lines":["r"]},{"start":{"row":21,"column":54},"end":{"row":21,"column":55},"action":"insert","lines":["e"]},{"start":{"row":21,"column":55},"end":{"row":21,"column":56},"action":"insert","lines":["s"]},{"start":{"row":21,"column":56},"end":{"row":21,"column":57},"action":"insert","lines":["s"]}],[{"start":{"row":21,"column":58},"end":{"row":21,"column":59},"action":"insert","lines":["<"],"id":166},{"start":{"row":21,"column":59},"end":{"row":21,"column":60},"action":"insert","lines":["l"]},{"start":{"row":21,"column":60},"end":{"row":21,"column":61},"action":"insert","lines":["i"]}],[{"start":{"row":21,"column":60},"end":{"row":21,"column":61},"action":"remove","lines":["i"],"id":167},{"start":{"row":21,"column":59},"end":{"row":21,"column":60},"action":"remove","lines":["l"]}],[{"start":{"row":21,"column":59},"end":{"row":21,"column":60},"action":"insert","lines":["/"],"id":168},{"start":{"row":21,"column":60},"end":{"row":21,"column":61},"action":"insert","lines":["l"]},{"start":{"row":21,"column":61},"end":{"row":21,"column":62},"action":"insert","lines":["i"]},{"start":{"row":21,"column":62},"end":{"row":21,"column":63},"action":"insert","lines":[">"]}],[{"start":{"row":25,"column":2},"end":{"row":26,"column":8},"action":"remove","lines":["      ","        "],"id":169},{"start":{"row":25,"column":1},"end":{"row":25,"column":2},"action":"remove","lines":[" "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"remove","lines":[" "]},{"start":{"row":24,"column":17},"end":{"row":25,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":23,"column":0},"end":{"row":23,"column":9},"action":"remove","lines":["         "],"id":170},{"start":{"row":22,"column":12},"end":{"row":23,"column":3},"action":"remove","lines":["","   "]}],[{"start":{"row":24,"column":10},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":171},{"start":{"row":25,"column":0},"end":{"row":25,"column":8},"action":"insert","lines":["        "]},{"start":{"row":25,"column":8},"end":{"row":26,"column":0},"action":"insert","lines":["",""]},{"start":{"row":26,"column":0},"end":{"row":26,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["/"],"id":172},{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["/"]}],[{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":[" "],"id":173},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["o"]},{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["u"]},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["t"]},{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["p"]},{"start":{"row":26,"column":15},"end":{"row":26,"column":16},"action":"insert","lines":["u"]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["t"]}],[{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":[" "],"id":174},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["t"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["o"]}],[{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":[" "],"id":175},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["a"]},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["p"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["p"]}],[{"start":{"row":26,"column":24},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":176},{"start":{"row":27,"column":0},"end":{"row":27,"column":8},"action":"insert","lines":["        "]},{"start":{"row":27,"column":8},"end":{"row":28,"column":0},"action":"insert","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["d"],"id":177},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["o"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["c"]},{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["u"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["m"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["e"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["n"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["t"]}],[{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["."],"id":178},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["g"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["e"]},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["t"]}],[{"start":{"row":28,"column":17},"end":{"row":28,"column":20},"action":"remove","lines":["get"],"id":179},{"start":{"row":28,"column":17},"end":{"row":28,"column":33},"action":"insert","lines":["getElementById()"]}],[{"start":{"row":28,"column":32},"end":{"row":28,"column":49},"action":"insert","lines":["formatted-address"],"id":180}],[{"start":{"row":28,"column":32},"end":{"row":28,"column":33},"action":"insert","lines":["'"],"id":181}],[{"start":{"row":28,"column":50},"end":{"row":28,"column":51},"action":"insert","lines":["'"],"id":182}],[{"start":{"row":28,"column":52},"end":{"row":28,"column":53},"action":"insert","lines":[";"],"id":183}],[{"start":{"row":28,"column":52},"end":{"row":28,"column":53},"action":"insert","lines":["."],"id":184},{"start":{"row":28,"column":53},"end":{"row":28,"column":54},"action":"insert","lines":["i"]},{"start":{"row":28,"column":54},"end":{"row":28,"column":55},"action":"insert","lines":["n"]},{"start":{"row":28,"column":55},"end":{"row":28,"column":56},"action":"insert","lines":["n"]},{"start":{"row":28,"column":56},"end":{"row":28,"column":57},"action":"insert","lines":["e"]},{"start":{"row":28,"column":57},"end":{"row":28,"column":58},"action":"insert","lines":["r"]}],[{"start":{"row":28,"column":53},"end":{"row":28,"column":58},"action":"remove","lines":["inner"],"id":185},{"start":{"row":28,"column":53},"end":{"row":28,"column":62},"action":"insert","lines":["innerHTML"]}],[{"start":{"row":28,"column":62},"end":{"row":28,"column":63},"action":"insert","lines":["="],"id":186}],[{"start":{"row":28,"column":63},"end":{"row":28,"column":64},"action":"insert","lines":[" "],"id":187}],[{"start":{"row":28,"column":62},"end":{"row":28,"column":63},"action":"insert","lines":[" "],"id":188}],[{"start":{"row":28,"column":65},"end":{"row":28,"column":66},"action":"insert","lines":["f"],"id":189},{"start":{"row":28,"column":66},"end":{"row":28,"column":67},"action":"insert","lines":["o"]},{"start":{"row":28,"column":67},"end":{"row":28,"column":68},"action":"insert","lines":["r"]},{"start":{"row":28,"column":68},"end":{"row":28,"column":69},"action":"insert","lines":["m"]},{"start":{"row":28,"column":69},"end":{"row":28,"column":70},"action":"insert","lines":["a"]},{"start":{"row":28,"column":70},"end":{"row":28,"column":71},"action":"insert","lines":["t"]},{"start":{"row":28,"column":71},"end":{"row":28,"column":72},"action":"insert","lines":["t"]},{"start":{"row":28,"column":72},"end":{"row":28,"column":73},"action":"insert","lines":["d"]}],[{"start":{"row":28,"column":72},"end":{"row":28,"column":73},"action":"remove","lines":["d"],"id":190}],[{"start":{"row":28,"column":72},"end":{"row":28,"column":73},"action":"insert","lines":["e"],"id":191},{"start":{"row":28,"column":73},"end":{"row":28,"column":74},"action":"insert","lines":["d"]},{"start":{"row":28,"column":74},"end":{"row":28,"column":75},"action":"insert","lines":["A"]},{"start":{"row":28,"column":75},"end":{"row":28,"column":76},"action":"insert","lines":["d"]},{"start":{"row":28,"column":76},"end":{"row":28,"column":77},"action":"insert","lines":["d"]},{"start":{"row":28,"column":77},"end":{"row":28,"column":78},"action":"insert","lines":["r"]},{"start":{"row":28,"column":78},"end":{"row":28,"column":79},"action":"insert","lines":["e"]},{"start":{"row":28,"column":79},"end":{"row":28,"column":80},"action":"insert","lines":["s"]},{"start":{"row":28,"column":80},"end":{"row":28,"column":81},"action":"insert","lines":["s"]}],[{"start":{"row":28,"column":81},"end":{"row":28,"column":82},"action":"insert","lines":["O"],"id":192},{"start":{"row":28,"column":82},"end":{"row":28,"column":83},"action":"insert","lines":["u"]},{"start":{"row":28,"column":83},"end":{"row":28,"column":84},"action":"insert","lines":["p"]},{"start":{"row":28,"column":84},"end":{"row":28,"column":85},"action":"insert","lines":["t"]}],[{"start":{"row":28,"column":84},"end":{"row":28,"column":85},"action":"remove","lines":["t"],"id":193},{"start":{"row":28,"column":83},"end":{"row":28,"column":84},"action":"remove","lines":["p"]}],[{"start":{"row":28,"column":83},"end":{"row":28,"column":84},"action":"insert","lines":["t"],"id":194},{"start":{"row":28,"column":84},"end":{"row":28,"column":85},"action":"insert","lines":["p"]},{"start":{"row":28,"column":85},"end":{"row":28,"column":86},"action":"insert","lines":["u"]},{"start":{"row":28,"column":86},"end":{"row":28,"column":87},"action":"insert","lines":["t"]}],[{"start":{"row":0,"column":0},"end":{"row":36,"column":1},"action":"remove","lines":["geocode();","","var location = 'Millbrook Upper, Largy, Clones, Co. Monaghan';","","function geocode() {","    axios.get('https://maps.googleapis.com/maps/api/geocode/json',{","        params:{","        address: location,","        key: 'AIzaSyDj_Sw27lS1EGDp6aGNzfh9chD3YXd6A5c'","        }","    })","    .then(function(responce){","        // log full responce","        console.log(responce);","        ","        // formatted address","        ","        var formattedAddress = responce.data.results[0].formatted_address;","        var formattedAddressOutput = `","            ","            <ul class=\"list-group\">","            <li class=\"list-group-item>${formattedAddress}</li>","            ","            </ul>","        `;","        ","        // output to app","        ","        document.getElementById('formatted-address').innerHTML = formattedAddressOutput;","    })","    ","    .catch(function(error){","        console.log(error);","    });","    ","    ","}"],"id":195},{"start":{"row":0,"column":0},"end":{"row":52,"column":8},"action":"insert","lines":["var map;","","","function initMap() {","            var options = {","                center: {lat: 53.1424,lng: -7.6921},","                zoom: 6","            };","            ","            map = new google.maps.Map(document.getElementById('map'),options);","          ","               ","            var input = document.getElementById('location-form');","            var searchBox = new google.maps.places.SearchBox(input);","            ","            map.addEventListener('bounds_changed', function(){","                searchBox.setBounds(map.getBounds());","            });","            ","            var markers = [];","            ","            searchBox.addListener('places_changed', function(){","                var places = searchBox.getPlaces();","                ","                if (places.length === 0)","                return;","                ","                markers.forEach(function(m){m.setMap(null); });","                markers = [];","                ","                var bounds = new google.maps.LatLngBounds();","                ","                places.forEach (function (p){","                    if (!p.geometry)","                    return;","                    ","                    markers.push(new google.maps.Marker({","                        map: map,","                        title: p.name,","                        position: p.geometry.location","                    }));","                    ","                    if (p.geometry.viewport)","                        bounds.union(p.geometry.viewport);","                    else ","                       bounds.extend(p.geometry.location);","                });","                ","                map.fitBounds(bounds);","                ","            });","        }     ","        "]}],[{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"remove","lines":["",""],"id":196},{"start":{"row":0,"column":8},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":8},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":197}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":19,"column":12},"end":{"row":19,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1561632199535}