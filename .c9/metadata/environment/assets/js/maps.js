{"filter":false,"title":"maps.js","tooltip":"/assets/js/maps.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":73,"column":48},"end":{"row":73,"column":49},"action":"remove","lines":[","],"id":1938}],[{"start":{"row":79,"column":45},"end":{"row":79,"column":65},"action":"remove","lines":["54.185869, -7.233718"],"id":1939},{"start":{"row":79,"column":45},"end":{"row":79,"column":65},"action":"insert","lines":["54.185339, -7.234186"]}],[{"start":{"row":67,"column":3},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":1940},{"start":{"row":68,"column":0},"end":{"row":69,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":69,"column":0},"end":{"row":116,"column":3},"action":"insert","lines":["$(\".newbridge\").click(function () {","    // do something for newbridge","    map = new google.maps.Map(document.getElementById('map'), {","        center: {lat: 53.1796861, lng: -6.7968114},","        zoom: 16","    });","    ","    //set the features","    const features = [","        {","            position: new google.maps.LatLng(53.179693, -6.794662),","            type: 'stadium'","        },","         {","            position: new google.maps.LatLng(53.181101, -6.796377),","            type: 'atm'","        }, {","            position: new google.maps.LatLng(53.179620, -6.799231),","            type: 'atm'","        },  {","            position: new google.maps.LatLng(53.180595, -6.796134),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(53.178655, -6.794946),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(53.180883, -6.797312),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(53.179185, -6.799876),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(53.180529, -6.797896),","            type: 'travel'","        }","    ];","    // Create markers.","    for (let i = 0; i < features.length; i++) {","        var marker = new google.maps.Marker({","            position: features[i].position,","            icon: icons[features[i].type].icon,","            map: map","        });","    }","    marker.setMap(map);","    ","    $(\".look-here\").css( \"visibility\", \"visible\");","});"],"id":1941}],[{"start":{"row":69,"column":12},"end":{"row":69,"column":13},"action":"remove","lines":["e"],"id":1942},{"start":{"row":69,"column":11},"end":{"row":69,"column":12},"action":"remove","lines":["g"]},{"start":{"row":69,"column":10},"end":{"row":69,"column":11},"action":"remove","lines":["d"]},{"start":{"row":69,"column":9},"end":{"row":69,"column":10},"action":"remove","lines":["i"]},{"start":{"row":69,"column":8},"end":{"row":69,"column":9},"action":"remove","lines":["r"]},{"start":{"row":69,"column":7},"end":{"row":69,"column":8},"action":"remove","lines":["b"]},{"start":{"row":69,"column":6},"end":{"row":69,"column":7},"action":"remove","lines":["w"]},{"start":{"row":69,"column":5},"end":{"row":69,"column":6},"action":"remove","lines":["e"]},{"start":{"row":69,"column":4},"end":{"row":69,"column":5},"action":"remove","lines":["n"]}],[{"start":{"row":69,"column":4},"end":{"row":69,"column":5},"action":"insert","lines":["d"],"id":1943},{"start":{"row":69,"column":5},"end":{"row":69,"column":6},"action":"insert","lines":["e"]},{"start":{"row":69,"column":6},"end":{"row":69,"column":7},"action":"insert","lines":["r"]},{"start":{"row":69,"column":7},"end":{"row":69,"column":8},"action":"insert","lines":["r"]},{"start":{"row":69,"column":8},"end":{"row":69,"column":9},"action":"insert","lines":["y"]}],[{"start":{"row":70,"column":24},"end":{"row":70,"column":33},"action":"remove","lines":["newbridge"],"id":1944},{"start":{"row":70,"column":24},"end":{"row":70,"column":25},"action":"insert","lines":["d"]},{"start":{"row":70,"column":25},"end":{"row":70,"column":26},"action":"insert","lines":["e"]},{"start":{"row":70,"column":26},"end":{"row":70,"column":27},"action":"insert","lines":["r"]},{"start":{"row":70,"column":27},"end":{"row":70,"column":28},"action":"insert","lines":["r"]},{"start":{"row":70,"column":28},"end":{"row":70,"column":29},"action":"insert","lines":["y"]}],[{"start":{"row":72,"column":22},"end":{"row":72,"column":32},"action":"remove","lines":["53.1796861"],"id":1945},{"start":{"row":72,"column":22},"end":{"row":72,"column":42},"action":"insert","lines":["54.992999, -7.333914"]}],[{"start":{"row":72,"column":33},"end":{"row":72,"column":42},"action":"remove","lines":["-7.333914"],"id":1946}],[{"start":{"row":72,"column":40},"end":{"row":72,"column":50},"action":"remove","lines":["-6.7968114"],"id":1947},{"start":{"row":72,"column":40},"end":{"row":72,"column":49},"action":"insert","lines":["-7.333914"]}],[{"start":{"row":72,"column":34},"end":{"row":72,"column":35},"action":"remove","lines":[" "],"id":1948},{"start":{"row":72,"column":33},"end":{"row":72,"column":34},"action":"remove","lines":[","]},{"start":{"row":72,"column":32},"end":{"row":72,"column":33},"action":"remove","lines":[" "]}],[{"start":{"row":72,"column":32},"end":{"row":72,"column":33},"action":"insert","lines":[" "],"id":1949}],[{"start":{"row":79,"column":45},"end":{"row":79,"column":65},"action":"remove","lines":["53.179693, -6.794662"],"id":1950},{"start":{"row":79,"column":45},"end":{"row":79,"column":65},"action":"insert","lines":["54.993454, -7.333464"]}],[{"start":{"row":83,"column":45},"end":{"row":83,"column":65},"action":"remove","lines":["53.181101, -6.796377"],"id":1951},{"start":{"row":83,"column":45},"end":{"row":83,"column":65},"action":"insert","lines":["54.991445, -7.331862"]}],[{"start":{"row":85,"column":11},"end":{"row":88,"column":10},"action":"remove","lines":["{","            position: new google.maps.LatLng(53.179620, -6.799231),","            type: 'atm'","        },"],"id":1952}],[{"start":{"row":86,"column":45},"end":{"row":86,"column":65},"action":"remove","lines":["53.180595, -6.796134"],"id":1953},{"start":{"row":86,"column":45},"end":{"row":86,"column":65},"action":"insert","lines":["54.994271, -7.333177"]}],[{"start":{"row":89,"column":45},"end":{"row":89,"column":65},"action":"remove","lines":["53.178655, -6.794946"],"id":1954},{"start":{"row":89,"column":45},"end":{"row":89,"column":65},"action":"insert","lines":["54.994886, -7.335419"]}],[{"start":{"row":92,"column":45},"end":{"row":92,"column":65},"action":"remove","lines":["53.180883, -6.797312"],"id":1955},{"start":{"row":92,"column":45},"end":{"row":92,"column":65},"action":"insert","lines":["54.990836, -7.332836"]}],[{"start":{"row":95,"column":45},"end":{"row":95,"column":65},"action":"remove","lines":["53.179185, -6.799876"],"id":1956},{"start":{"row":95,"column":45},"end":{"row":95,"column":65},"action":"insert","lines":["54.994989, -7.327697"]}],[{"start":{"row":98,"column":45},"end":{"row":98,"column":65},"action":"remove","lines":["53.180529, -6.797896"],"id":1957},{"start":{"row":98,"column":45},"end":{"row":98,"column":65},"action":"insert","lines":["54.995395, -7.336028"]}],[{"start":{"row":114,"column":2},"end":{"row":114,"column":3},"action":"remove","lines":[" "],"id":1958},{"start":{"row":114,"column":1},"end":{"row":114,"column":2},"action":"remove","lines":[" "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":114,"column":0},"end":{"row":115,"column":0},"action":"insert","lines":["",""],"id":1959}],[{"start":{"row":115,"column":0},"end":{"row":159,"column":3},"action":"insert","lines":["$(\".derry\").click(function () {","    // do something for derry","    map = new google.maps.Map(document.getElementById('map'), {","        center: {lat: 54.992999, lng: -7.333914},","        zoom: 16","    });","    ","    //set the features","    const features = [","        {","            position: new google.maps.LatLng(54.993454, -7.333464),","            type: 'stadium'","        },","         {","            position: new google.maps.LatLng(54.991445, -7.331862),","            type: 'atm'","        },   {","            position: new google.maps.LatLng(54.994271, -7.333177),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(54.994886, -7.335419),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(54.990836, -7.332836),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(54.994989, -7.327697),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(54.995395, -7.336028),","            type: 'travel'","        }","    ];","    // Create markers.","    for (let i = 0; i < features.length; i++) {","        var marker = new google.maps.Marker({","            position: features[i].position,","            icon: icons[features[i].type].icon,","            map: map","        });","    }","    marker.setMap(map);","    ","    $(\".look-here\").css( \"visibility\", \"visible\");","});"],"id":1960}],[{"start":{"row":115,"column":8},"end":{"row":115,"column":9},"action":"remove","lines":["y"],"id":1961},{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"remove","lines":["r"]},{"start":{"row":115,"column":6},"end":{"row":115,"column":7},"action":"remove","lines":["r"]},{"start":{"row":115,"column":5},"end":{"row":115,"column":6},"action":"remove","lines":["e"]},{"start":{"row":115,"column":4},"end":{"row":115,"column":5},"action":"remove","lines":["d"]}],[{"start":{"row":115,"column":4},"end":{"row":115,"column":5},"action":"insert","lines":["l"],"id":1962},{"start":{"row":115,"column":5},"end":{"row":115,"column":6},"action":"insert","lines":["o"]},{"start":{"row":115,"column":6},"end":{"row":115,"column":7},"action":"insert","lines":["n"]},{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"insert","lines":["f"]},{"start":{"row":115,"column":8},"end":{"row":115,"column":9},"action":"insert","lines":["g"]}],[{"start":{"row":115,"column":8},"end":{"row":115,"column":9},"action":"remove","lines":["g"],"id":1963},{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"remove","lines":["f"]}],[{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"insert","lines":["g"],"id":1964},{"start":{"row":115,"column":8},"end":{"row":115,"column":9},"action":"insert","lines":["f"]},{"start":{"row":115,"column":9},"end":{"row":115,"column":10},"action":"insert","lines":["o"]},{"start":{"row":115,"column":10},"end":{"row":115,"column":11},"action":"insert","lines":["r"]},{"start":{"row":115,"column":11},"end":{"row":115,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":116,"column":28},"end":{"row":116,"column":29},"action":"remove","lines":["y"],"id":1965},{"start":{"row":116,"column":27},"end":{"row":116,"column":28},"action":"remove","lines":["r"]},{"start":{"row":116,"column":26},"end":{"row":116,"column":27},"action":"remove","lines":["r"]},{"start":{"row":116,"column":25},"end":{"row":116,"column":26},"action":"remove","lines":["e"]},{"start":{"row":116,"column":24},"end":{"row":116,"column":25},"action":"remove","lines":["d"]}],[{"start":{"row":116,"column":24},"end":{"row":116,"column":25},"action":"insert","lines":["L"],"id":1966},{"start":{"row":116,"column":25},"end":{"row":116,"column":26},"action":"insert","lines":["o"]},{"start":{"row":116,"column":26},"end":{"row":116,"column":27},"action":"insert","lines":["n"]},{"start":{"row":116,"column":27},"end":{"row":116,"column":28},"action":"insert","lines":["g"]},{"start":{"row":116,"column":28},"end":{"row":116,"column":29},"action":"insert","lines":["f"]},{"start":{"row":116,"column":29},"end":{"row":116,"column":30},"action":"insert","lines":["o"]},{"start":{"row":116,"column":30},"end":{"row":116,"column":31},"action":"insert","lines":["r"]},{"start":{"row":116,"column":31},"end":{"row":116,"column":32},"action":"insert","lines":["s"]}],[{"start":{"row":116,"column":31},"end":{"row":116,"column":32},"action":"remove","lines":["s"],"id":1967}],[{"start":{"row":116,"column":31},"end":{"row":116,"column":32},"action":"insert","lines":["d"],"id":1968}],[{"start":{"row":118,"column":22},"end":{"row":118,"column":32},"action":"remove","lines":["54.992999,"],"id":1969},{"start":{"row":118,"column":22},"end":{"row":118,"column":42},"action":"insert","lines":["53.738386, -7.802526"]}],[{"start":{"row":118,"column":33},"end":{"row":118,"column":42},"action":"remove","lines":["-7.802526"],"id":1970}],[{"start":{"row":118,"column":39},"end":{"row":118,"column":48},"action":"remove","lines":["-7.333914"],"id":1971},{"start":{"row":118,"column":39},"end":{"row":118,"column":48},"action":"insert","lines":["-7.802526"]}],[{"start":{"row":114,"column":0},"end":{"row":116,"column":0},"action":"remove","lines":["","$(\".longford\").click(function () {",""],"id":1972},{"start":{"row":114,"column":3},"end":{"row":157,"column":3},"action":"remove","lines":[" // do something for Longford","    map = new google.maps.Map(document.getElementById('map'), {","        center: {lat: 53.738386,  lng: -7.802526},","        zoom: 16","    });","    ","    //set the features","    const features = [","        {","            position: new google.maps.LatLng(54.993454, -7.333464),","            type: 'stadium'","        },","         {","            position: new google.maps.LatLng(54.991445, -7.331862),","            type: 'atm'","        },   {","            position: new google.maps.LatLng(54.994271, -7.333177),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(54.994886, -7.335419),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(54.990836, -7.332836),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(54.994989, -7.327697),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(54.995395, -7.336028),","            type: 'travel'","        }","    ];","    // Create markers.","    for (let i = 0; i < features.length; i++) {","        var marker = new google.maps.Marker({","            position: features[i].position,","            icon: icons[features[i].type].icon,","            map: map","        });","    }","    marker.setMap(map);","    ","    $(\".look-here\").css( \"visibility\", \"visible\");","});"]}],[{"start":{"row":114,"column":3},"end":{"row":115,"column":0},"action":"insert","lines":["",""],"id":1973},{"start":{"row":115,"column":0},"end":{"row":115,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":115,"column":2},"end":{"row":115,"column":3},"action":"remove","lines":[" "],"id":1974},{"start":{"row":115,"column":1},"end":{"row":115,"column":2},"action":"remove","lines":[" "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":115,"column":0},"end":{"row":159,"column":3},"action":"insert","lines":["$(\".derry\").click(function () {","    // do something for derry","    map = new google.maps.Map(document.getElementById('map'), {","        center: {lat: 54.992999, lng: -7.333914},","        zoom: 16","    });","    ","    //set the features","    const features = [","        {","            position: new google.maps.LatLng(54.993454, -7.333464),","            type: 'stadium'","        },","         {","            position: new google.maps.LatLng(54.991445, -7.331862),","            type: 'atm'","        },   {","            position: new google.maps.LatLng(54.994271, -7.333177),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(54.994886, -7.335419),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(54.990836, -7.332836),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(54.994989, -7.327697),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(54.995395, -7.336028),","            type: 'travel'","        }","    ];","    // Create markers.","    for (let i = 0; i < features.length; i++) {","        var marker = new google.maps.Marker({","            position: features[i].position,","            icon: icons[features[i].type].icon,","            map: map","        });","    }","    marker.setMap(map);","    ","    $(\".look-here\").css( \"visibility\", \"visible\");","});"],"id":1975}],[{"start":{"row":115,"column":8},"end":{"row":115,"column":9},"action":"remove","lines":["y"],"id":1976},{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"remove","lines":["r"]},{"start":{"row":115,"column":6},"end":{"row":115,"column":7},"action":"remove","lines":["r"]},{"start":{"row":115,"column":5},"end":{"row":115,"column":6},"action":"remove","lines":["e"]},{"start":{"row":115,"column":4},"end":{"row":115,"column":5},"action":"remove","lines":["d"]}],[{"start":{"row":115,"column":4},"end":{"row":115,"column":5},"action":"insert","lines":["l"],"id":1977},{"start":{"row":115,"column":5},"end":{"row":115,"column":6},"action":"insert","lines":["o"]},{"start":{"row":115,"column":6},"end":{"row":115,"column":7},"action":"insert","lines":["n"]},{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"insert","lines":["f"]}],[{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"remove","lines":["f"],"id":1978}],[{"start":{"row":115,"column":7},"end":{"row":115,"column":8},"action":"insert","lines":["g"],"id":1979},{"start":{"row":115,"column":8},"end":{"row":115,"column":9},"action":"insert","lines":["f"]},{"start":{"row":115,"column":9},"end":{"row":115,"column":10},"action":"insert","lines":["o"]},{"start":{"row":115,"column":10},"end":{"row":115,"column":11},"action":"insert","lines":["r"]},{"start":{"row":115,"column":11},"end":{"row":115,"column":12},"action":"insert","lines":["d"]}],[{"start":{"row":116,"column":28},"end":{"row":116,"column":29},"action":"remove","lines":["y"],"id":1980},{"start":{"row":116,"column":27},"end":{"row":116,"column":28},"action":"remove","lines":["r"]},{"start":{"row":116,"column":26},"end":{"row":116,"column":27},"action":"remove","lines":["r"]},{"start":{"row":116,"column":25},"end":{"row":116,"column":26},"action":"remove","lines":["e"]},{"start":{"row":116,"column":24},"end":{"row":116,"column":25},"action":"remove","lines":["d"]}],[{"start":{"row":116,"column":24},"end":{"row":116,"column":25},"action":"insert","lines":["L"],"id":1981},{"start":{"row":116,"column":25},"end":{"row":116,"column":26},"action":"insert","lines":["o"]},{"start":{"row":116,"column":26},"end":{"row":116,"column":27},"action":"insert","lines":["n"]},{"start":{"row":116,"column":27},"end":{"row":116,"column":28},"action":"insert","lines":["g"]},{"start":{"row":116,"column":28},"end":{"row":116,"column":29},"action":"insert","lines":["f"]},{"start":{"row":116,"column":29},"end":{"row":116,"column":30},"action":"insert","lines":["o"]},{"start":{"row":116,"column":30},"end":{"row":116,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":116,"column":31},"end":{"row":116,"column":32},"action":"insert","lines":["d"],"id":1982}],[{"start":{"row":125,"column":45},"end":{"row":125,"column":65},"action":"remove","lines":["54.993454, -7.333464"],"id":1983},{"start":{"row":125,"column":45},"end":{"row":125,"column":65},"action":"insert","lines":["53.739858, -7.805316"]}],[{"start":{"row":118,"column":22},"end":{"row":118,"column":32},"action":"remove","lines":["54.992999,"],"id":1984},{"start":{"row":118,"column":22},"end":{"row":118,"column":42},"action":"insert","lines":["53.738881, -7.803449"]}],[{"start":{"row":118,"column":33},"end":{"row":118,"column":42},"action":"remove","lines":["-7.803449"],"id":1985}],[{"start":{"row":118,"column":39},"end":{"row":118,"column":48},"action":"remove","lines":["-7.333914"],"id":1986},{"start":{"row":118,"column":39},"end":{"row":118,"column":48},"action":"insert","lines":["-7.803449"]}],[{"start":{"row":129,"column":45},"end":{"row":129,"column":65},"action":"remove","lines":["54.991445, -7.331862"],"id":1987},{"start":{"row":129,"column":45},"end":{"row":129,"column":65},"action":"insert","lines":["53.738764, -7.801979"]}],[{"start":{"row":132,"column":45},"end":{"row":132,"column":65},"action":"remove","lines":["54.994271, -7.333177"],"id":1988},{"start":{"row":132,"column":45},"end":{"row":132,"column":65},"action":"insert","lines":["53.741540, -7.804082"]}],[{"start":{"row":135,"column":45},"end":{"row":135,"column":65},"action":"remove","lines":["54.994886, -7.335419"],"id":1989},{"start":{"row":135,"column":45},"end":{"row":135,"column":65},"action":"insert","lines":["53.738196, -7.805219"]}],[{"start":{"row":138,"column":45},"end":{"row":138,"column":65},"action":"remove","lines":["54.990836, -7.332836"],"id":1990},{"start":{"row":138,"column":45},"end":{"row":138,"column":65},"action":"insert","lines":["53.728800, -7.801585"]}],[{"start":{"row":140,"column":11},"end":{"row":143,"column":10},"action":"remove","lines":["{","            position: new google.maps.LatLng(54.994989, -7.327697),","            type: 'bars'","        },"],"id":1991}],[{"start":{"row":141,"column":45},"end":{"row":141,"column":65},"action":"remove","lines":["54.995395, -7.336028"],"id":1992},{"start":{"row":141,"column":45},"end":{"row":141,"column":65},"action":"insert","lines":["53.724305, -7.796032"]}],[{"start":{"row":119,"column":15},"end":{"row":119,"column":16},"action":"remove","lines":["6"],"id":1993}],[{"start":{"row":119,"column":15},"end":{"row":119,"column":16},"action":"insert","lines":["3"],"id":1994}],[{"start":{"row":156,"column":3},"end":{"row":157,"column":0},"action":"insert","lines":["",""],"id":1995},{"start":{"row":157,"column":0},"end":{"row":158,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":158,"column":0},"end":{"row":158,"column":20},"action":"insert","lines":["53.724305, -7.796032"],"id":1996}],[{"start":{"row":158,"column":10},"end":{"row":158,"column":20},"action":"remove","lines":[" -7.796032"],"id":1998},{"start":{"row":158,"column":9},"end":{"row":158,"column":10},"action":"remove","lines":[","]},{"start":{"row":158,"column":8},"end":{"row":158,"column":9},"action":"remove","lines":["5"]}],[{"start":{"row":158,"column":7},"end":{"row":158,"column":8},"action":"remove","lines":["0"],"id":1999},{"start":{"row":158,"column":6},"end":{"row":158,"column":7},"action":"remove","lines":["3"]},{"start":{"row":158,"column":5},"end":{"row":158,"column":6},"action":"remove","lines":["4"]},{"start":{"row":158,"column":4},"end":{"row":158,"column":5},"action":"remove","lines":["2"]},{"start":{"row":158,"column":3},"end":{"row":158,"column":4},"action":"remove","lines":["7"]},{"start":{"row":158,"column":2},"end":{"row":158,"column":3},"action":"remove","lines":["."]},{"start":{"row":158,"column":1},"end":{"row":158,"column":2},"action":"remove","lines":["3"]},{"start":{"row":158,"column":0},"end":{"row":158,"column":1},"action":"remove","lines":["5"]}],[{"start":{"row":157,"column":0},"end":{"row":158,"column":0},"action":"insert","lines":["",""],"id":2000}],[{"start":{"row":158,"column":0},"end":{"row":200,"column":0},"action":"insert","lines":["$(\".longford\").click(function () {","    // do something for Longford","    map = new google.maps.Map(document.getElementById('map'), {","        center: {lat: 53.738881,  lng: -7.803449},","        zoom: 13","    });","    ","    //set the features","    const features = [","        {","            position: new google.maps.LatLng(53.739858, -7.805316),","            type: 'stadium'","        },","         {","            position: new google.maps.LatLng(53.738764, -7.801979),","            type: 'atm'","        },   {","            position: new google.maps.LatLng(53.741540, -7.804082),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(53.738196, -7.805219),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(53.728800, -7.801585),","            type: 'bars'","        },  {","            position: new google.maps.LatLng(53.724305, -7.796032),","            type: 'travel'","        }","    ];","    // Create markers.","    for (let i = 0; i < features.length; i++) {","        var marker = new google.maps.Marker({","            position: features[i].position,","            icon: icons[features[i].type].icon,","            map: map","        });","    }","    marker.setMap(map);","    ","    $(\".look-here\").css( \"visibility\", \"visible\");","});",""],"id":2001}],[{"start":{"row":158,"column":11},"end":{"row":158,"column":12},"action":"remove","lines":["d"],"id":2002},{"start":{"row":158,"column":10},"end":{"row":158,"column":11},"action":"remove","lines":["r"]},{"start":{"row":158,"column":9},"end":{"row":158,"column":10},"action":"remove","lines":["o"]},{"start":{"row":158,"column":8},"end":{"row":158,"column":9},"action":"remove","lines":["f"]},{"start":{"row":158,"column":7},"end":{"row":158,"column":8},"action":"remove","lines":["g"]},{"start":{"row":158,"column":6},"end":{"row":158,"column":7},"action":"remove","lines":["n"]},{"start":{"row":158,"column":5},"end":{"row":158,"column":6},"action":"remove","lines":["o"]},{"start":{"row":158,"column":4},"end":{"row":158,"column":5},"action":"remove","lines":["l"]}],[{"start":{"row":158,"column":4},"end":{"row":158,"column":5},"action":"insert","lines":["c"],"id":2003},{"start":{"row":158,"column":5},"end":{"row":158,"column":6},"action":"insert","lines":["a"]},{"start":{"row":158,"column":6},"end":{"row":158,"column":7},"action":"insert","lines":["r"]},{"start":{"row":158,"column":7},"end":{"row":158,"column":8},"action":"insert","lines":["r"]},{"start":{"row":158,"column":8},"end":{"row":158,"column":9},"action":"insert","lines":["i"]},{"start":{"row":158,"column":9},"end":{"row":158,"column":10},"action":"insert","lines":["c"]},{"start":{"row":158,"column":10},"end":{"row":158,"column":11},"action":"insert","lines":["k"]}],[{"start":{"row":159,"column":31},"end":{"row":159,"column":32},"action":"remove","lines":["d"],"id":2004},{"start":{"row":159,"column":30},"end":{"row":159,"column":31},"action":"remove","lines":["r"]},{"start":{"row":159,"column":29},"end":{"row":159,"column":30},"action":"remove","lines":["o"]},{"start":{"row":159,"column":28},"end":{"row":159,"column":29},"action":"remove","lines":["f"]},{"start":{"row":159,"column":27},"end":{"row":159,"column":28},"action":"remove","lines":["g"]},{"start":{"row":159,"column":26},"end":{"row":159,"column":27},"action":"remove","lines":["n"]},{"start":{"row":159,"column":25},"end":{"row":159,"column":26},"action":"remove","lines":["o"]},{"start":{"row":159,"column":24},"end":{"row":159,"column":25},"action":"remove","lines":["L"]}],[{"start":{"row":159,"column":24},"end":{"row":159,"column":25},"action":"insert","lines":["C"],"id":2005},{"start":{"row":159,"column":25},"end":{"row":159,"column":26},"action":"insert","lines":["a"]},{"start":{"row":159,"column":26},"end":{"row":159,"column":27},"action":"insert","lines":["r"]},{"start":{"row":159,"column":27},"end":{"row":159,"column":28},"action":"insert","lines":["r"]},{"start":{"row":159,"column":28},"end":{"row":159,"column":29},"action":"insert","lines":["i"]},{"start":{"row":159,"column":29},"end":{"row":159,"column":30},"action":"insert","lines":["c"]},{"start":{"row":159,"column":30},"end":{"row":159,"column":31},"action":"insert","lines":["k"]}],[{"start":{"row":161,"column":22},"end":{"row":161,"column":32},"action":"remove","lines":["53.738881,"],"id":2006},{"start":{"row":161,"column":22},"end":{"row":161,"column":42},"action":"insert","lines":["53.947879, -8.079018"]}],[{"start":{"row":161,"column":33},"end":{"row":161,"column":42},"action":"remove","lines":["-8.079018"],"id":2007}],[{"start":{"row":161,"column":40},"end":{"row":161,"column":49},"action":"remove","lines":["-7.803449"],"id":2008},{"start":{"row":161,"column":40},"end":{"row":161,"column":49},"action":"insert","lines":["-8.079018"]}],[{"start":{"row":168,"column":45},"end":{"row":168,"column":65},"action":"remove","lines":["53.739858, -7.805316"],"id":2009},{"start":{"row":168,"column":45},"end":{"row":168,"column":65},"action":"insert","lines":["53.948333, -8.076121"]}],[{"start":{"row":172,"column":45},"end":{"row":172,"column":65},"action":"remove","lines":["53.738764, -7.801979"],"id":2010},{"start":{"row":172,"column":45},"end":{"row":172,"column":65},"action":"insert","lines":["53.943888, -8.070800"]}],[{"start":{"row":175,"column":45},"end":{"row":175,"column":65},"action":"remove","lines":["53.741540, -7.804082"],"id":2011},{"start":{"row":175,"column":45},"end":{"row":175,"column":65},"action":"insert","lines":["53.947058, -8.077366"]}],[{"start":{"row":178,"column":45},"end":{"row":178,"column":65},"action":"remove","lines":["53.738196, -7.805219"],"id":2012},{"start":{"row":178,"column":45},"end":{"row":178,"column":65},"action":"insert","lines":["53.945612, -8.081046"]}],[{"start":{"row":181,"column":45},"end":{"row":181,"column":65},"action":"remove","lines":["53.728800, -7.801585"],"id":2013},{"start":{"row":181,"column":45},"end":{"row":181,"column":65},"action":"insert","lines":["53.945887, -8.095492"]}],[{"start":{"row":183,"column":12},"end":{"row":186,"column":11},"action":"insert","lines":["{","            position: new google.maps.LatLng(53.945887, -8.095492),","            type: 'bars'","        }, "],"id":2014}],[{"start":{"row":184,"column":45},"end":{"row":184,"column":65},"action":"remove","lines":["53.945887, -8.095492"],"id":2015},{"start":{"row":184,"column":45},"end":{"row":184,"column":65},"action":"insert","lines":["53.945255, -8.095106"]}],[{"start":{"row":187,"column":45},"end":{"row":187,"column":65},"action":"remove","lines":["53.724305, -7.796032"],"id":2016},{"start":{"row":187,"column":45},"end":{"row":187,"column":65},"action":"insert","lines":["53.943306, -8.093277"]}],[{"start":{"row":162,"column":15},"end":{"row":162,"column":16},"action":"remove","lines":["3"],"id":2017}],[{"start":{"row":162,"column":15},"end":{"row":162,"column":16},"action":"insert","lines":["1"],"id":2018},{"start":{"row":162,"column":16},"end":{"row":162,"column":17},"action":"insert","lines":["5"]}],[{"start":{"row":162,"column":14},"end":{"row":162,"column":15},"action":"remove","lines":["1"],"id":2019}],[{"start":{"row":253,"column":0},"end":{"row":254,"column":0},"action":"insert","lines":["",""],"id":2020}],[{"start":{"row":254,"column":0},"end":{"row":299,"column":0},"action":"insert","lines":["$(\".carrick\").click(function () {","    // do something for Carrick","    map = new google.maps.Map(document.getElementById('map'), {","        center: {lat: 53.947879,   lng: -8.079018},","        zoom: 15","    });","    ","    //set the features","    const features = [","        {","            position: new google.maps.LatLng(53.948333, -8.076121),","            type: 'stadium'","        },","         {","            position: new google.maps.LatLng(53.943888, -8.070800),","            type: 'atm'","        },   {","            position: new google.maps.LatLng(53.947058, -8.077366),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(53.945612, -8.081046),","            type: 'parking'","        }, {","            position: new google.maps.LatLng(53.945887, -8.095492),","            type: 'bars'","        },  {","            position: new google.maps.LatLng(53.945255, -8.095106),","            type: 'bars'","        }, {","            position: new google.maps.LatLng(53.943306, -8.093277),","            type: 'travel'","        }","    ];","    // Create markers.","    for (let i = 0; i < features.length; i++) {","        var marker = new google.maps.Marker({","            position: features[i].position,","            icon: icons[features[i].type].icon,","            map: map","        });","    }","    marker.setMap(map);","    ","    $(\".look-here\").css( \"visibility\", \"visible\");","});",""],"id":2021}],[{"start":{"row":254,"column":10},"end":{"row":254,"column":11},"action":"remove","lines":["k"],"id":2022},{"start":{"row":254,"column":9},"end":{"row":254,"column":10},"action":"remove","lines":["c"]},{"start":{"row":254,"column":8},"end":{"row":254,"column":9},"action":"remove","lines":["i"]},{"start":{"row":254,"column":7},"end":{"row":254,"column":8},"action":"remove","lines":["r"]},{"start":{"row":254,"column":6},"end":{"row":254,"column":7},"action":"remove","lines":["r"]},{"start":{"row":254,"column":5},"end":{"row":254,"column":6},"action":"remove","lines":["a"]},{"start":{"row":254,"column":4},"end":{"row":254,"column":5},"action":"remove","lines":["c"]}],[{"start":{"row":254,"column":4},"end":{"row":254,"column":5},"action":"insert","lines":["n"],"id":2023},{"start":{"row":254,"column":5},"end":{"row":254,"column":6},"action":"insert","lines":["e"]},{"start":{"row":254,"column":6},"end":{"row":254,"column":7},"action":"insert","lines":["w"]},{"start":{"row":254,"column":7},"end":{"row":254,"column":8},"action":"insert","lines":["r"]},{"start":{"row":254,"column":8},"end":{"row":254,"column":9},"action":"insert","lines":["y"]}],[{"start":{"row":255,"column":30},"end":{"row":255,"column":31},"action":"remove","lines":["k"],"id":2024},{"start":{"row":255,"column":29},"end":{"row":255,"column":30},"action":"remove","lines":["c"]},{"start":{"row":255,"column":28},"end":{"row":255,"column":29},"action":"remove","lines":["i"]},{"start":{"row":255,"column":27},"end":{"row":255,"column":28},"action":"remove","lines":["r"]},{"start":{"row":255,"column":26},"end":{"row":255,"column":27},"action":"remove","lines":["r"]},{"start":{"row":255,"column":25},"end":{"row":255,"column":26},"action":"remove","lines":["a"]},{"start":{"row":255,"column":24},"end":{"row":255,"column":25},"action":"remove","lines":["C"]}],[{"start":{"row":255,"column":24},"end":{"row":255,"column":25},"action":"insert","lines":["n"],"id":2025},{"start":{"row":255,"column":25},"end":{"row":255,"column":26},"action":"insert","lines":["e"]},{"start":{"row":255,"column":26},"end":{"row":255,"column":27},"action":"insert","lines":["w"]},{"start":{"row":255,"column":27},"end":{"row":255,"column":28},"action":"insert","lines":["r"]},{"start":{"row":255,"column":28},"end":{"row":255,"column":29},"action":"insert","lines":["y"]}],[{"start":{"row":257,"column":22},"end":{"row":257,"column":32},"action":"remove","lines":["53.947879,"],"id":2026},{"start":{"row":257,"column":22},"end":{"row":257,"column":42},"action":"insert","lines":["54.168533, -6.340492"]}],[{"start":{"row":257,"column":32},"end":{"row":257,"column":43},"action":"remove","lines":[" -6.340492 "],"id":2027}],[{"start":{"row":257,"column":39},"end":{"row":257,"column":48},"action":"remove","lines":["-8.079018"],"id":2028},{"start":{"row":257,"column":39},"end":{"row":257,"column":50},"action":"insert","lines":[" -6.340492 "]}],[{"start":{"row":264,"column":45},"end":{"row":264,"column":65},"action":"remove","lines":["53.948333, -8.076121"],"id":2029},{"start":{"row":264,"column":45},"end":{"row":264,"column":65},"action":"insert","lines":["54.163785, -6.333197"]}],[{"start":{"row":268,"column":45},"end":{"row":268,"column":65},"action":"remove","lines":["53.943888, -8.070800"],"id":2030},{"start":{"row":268,"column":45},"end":{"row":268,"column":65},"action":"insert","lines":["54.169218, -6.339580"]}],[{"start":{"row":271,"column":45},"end":{"row":271,"column":65},"action":"remove","lines":["53.947058, -8.077366"],"id":2031},{"start":{"row":271,"column":45},"end":{"row":271,"column":65},"action":"insert","lines":["54.164111, -6.333293"]}],[{"start":{"row":274,"column":45},"end":{"row":274,"column":65},"action":"remove","lines":["53.945612, -8.081046"],"id":2032},{"start":{"row":274,"column":45},"end":{"row":274,"column":65},"action":"insert","lines":["54.168107, -6.341032"]}],[{"start":{"row":277,"column":45},"end":{"row":277,"column":65},"action":"remove","lines":["53.945887, -8.095492"],"id":2033},{"start":{"row":277,"column":45},"end":{"row":277,"column":65},"action":"insert","lines":["54.166022, -6.334181"]}],[{"start":{"row":280,"column":45},"end":{"row":280,"column":65},"action":"remove","lines":["53.945255, -8.095106"],"id":2034},{"start":{"row":280,"column":45},"end":{"row":280,"column":65},"action":"insert","lines":["54.173511, -6.342764"]}],[{"start":{"row":283,"column":45},"end":{"row":283,"column":65},"action":"remove","lines":["53.943306, -8.093277"],"id":2035},{"start":{"row":283,"column":45},"end":{"row":283,"column":65},"action":"insert","lines":["54.188803, -6.362567"]}],[{"start":{"row":264,"column":45},"end":{"row":264,"column":54},"action":"remove","lines":["54.163785"],"id":2036},{"start":{"row":264,"column":45},"end":{"row":264,"column":55},"action":"insert","lines":["54.1614417"]}],[{"start":{"row":264,"column":57},"end":{"row":264,"column":66},"action":"remove","lines":["-6.333197"],"id":2037},{"start":{"row":264,"column":57},"end":{"row":264,"column":66},"action":"insert","lines":["-6.334012"]}],[{"start":{"row":258,"column":15},"end":{"row":258,"column":16},"action":"remove","lines":["5"],"id":2038}],[{"start":{"row":258,"column":15},"end":{"row":258,"column":16},"action":"insert","lines":["4"],"id":2039}]]},"ace":{"folds":[],"scrolltop":1440,"scrollleft":0,"selection":{"start":{"row":258,"column":16},"end":{"row":258,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":7,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1562166318690,"hash":"a4dc9e78bd3a359e7299e4e7f26dd201195ee35b"}