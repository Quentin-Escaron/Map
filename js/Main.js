//Creates the map
var mymap = L.map('map-div').setView([5.316667, -4.033333], 12);

//token for accessing the MapBox map
let accessToken = 'pk.eyJ1IjoicWVzY2Fyb24iLCJhIjoiY2piMHR6eTg5MTI3ZDJ3cXE0MGNwNmk4MCJ9.wgzfknrthZMVLsJNQsLfUw';


//getting the tile for the map (now from MapBox)
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken
}).addTo(mymap);



//Creates the station list and instantiates the Stations
let stations = [];

const stationDeuxPlateaux = new Station("Deux Plateaux", [-3.9982187747955322, 5.368422614699433], mymap);
const stationSaintJean = new Station("Saint Jean", [-4.0039801597595215, 5.336034611566841], mymap);
const stationBlockhauss = new Station("Blockhauss", [-4.001389145851135, 5.325987787020237], mymap);


//instantiates the routes
let routes = [
    {
        "type": "LineString",
        "properties": {
            "name": 'Line0',
            "show_on_map": true,
        },
        "stations": [stationDeuxPlateaux, stationSaintJean],
        "coordinates": [
            [-3.9986157417297363, 5.368425285143422],
            [-3.9982804656028748, 5.36843863736315],
            [-3.9982858300209045, 5.367234265967754],
            [-3.9982429146766663, 5.36701795954501],
            [-3.998178541660309, 5.3668977892769885],
            [-3.998098075389862, 5.366764266729204],
            [-3.9979666471481328, 5.366630744152182],
            [-3.9978030323982243, 5.366470517021181],
            [-3.997693061828613, 5.366307619394844],
            [-3.9976179599761967, 5.366190119440637],
            [-3.9975857734680176, 5.366008528557809],
            [-3.9975643157958984, 5.365634664805287],
            [-3.9975535869598384, 5.3615648759942465],
            [-3.9975857734680176, 5.361276464733851],
            [-3.9976555109024043, 5.361052144770449],
            [-3.99777352809906, 5.3608598704505255],
            [-3.9979451894760127, 5.360624868421713],
            [-3.998154401779175, 5.360448616840745],
            [-4.000686407089233, 5.358627347525509],
            [-4.000852704048157, 5.358461777318474],
            [-4.001051187515259, 5.358274843159796],
            [-4.001238942146301, 5.3580238171996],
            [-4.001314043998718, 5.357799496041518],
            [-4.001410603523254, 5.357436309229975],
            [-4.001448154449463, 5.357126532073053],
            [-4.002993106842041, 5.3446872472494835],
            [-4.003089666366577, 5.344195866273019],
            [-4.003143310546875, 5.343832671384851],
            [-4.003154039382935, 5.343287878648834],
            [-4.003969430923462, 5.336750328040117],
            [-4.0040552616119385, 5.336194846670717],
            [-4.004098176956177, 5.335895741109609],
            [-4.004119634628296, 5.3354577648463035]
        ]
    },
    {
        "type": "LineString",
        "properties": {
            "name": 'Line1',
            "show_on_map": true,
            "popupContent": 'This is line '+this.name
        },
        "stations": [stationBlockhauss, stationSaintJean],
        "coordinates": [
          [-4.003969430923462,
            5.335473788373642
          ],
          [
            -4.003867506980896,
            5.335895741109609
          ],
          [
            -4.003443717956543,
            5.335917105797384
          ],
          [
            -4.000149965286255,
            5.335500494251612
          ],
          [
            -4.000611305236816,
            5.331996673135128
          ],
          [
            -4.000879526138306,
            5.331238221418598
          ],
          [
            -4.00151252746582,
            5.32597176324535
          ],
          [
            -4.001255035400391,
            5.325961080728542
          ]
        ]
    }, 
    {
        "type": "LineString",
        "properties": {
            "name": 'Line2',
            "show_on_map": true,
            "popupContent": 'This is line '+this.name
        },
        "coordinates": [[-4.2, 5.3], [-4.2, 5.2]]
    }
];

//changes GeoJSON coords into LatLng
routes.map(function(route){
    route.coordinates.map(function(coordinate){
        return L.GeoJSON.coordsToLatLng(coordinate);
    });
});


//for each route, add a clic listener to show popups + the usual popup
function onEachFeature(route, layer) {
    //start and end stations popups
    layer.on('click', function (e) {
        //close all open popups
        mymap.eachLayer(function (layer) {
          layer.closePopup();
        });
        
        //open the popups of the stations
        route.stations[0].marker.openPopup();
        route.stations[1].marker.openPopup();
        document.getElementById("info-div").innerHTML ='<p>Nom : '+route.properties.name+'<br/>Prix : ';
    });

};

//defining style of lines
const myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

//adding routes to map
L.geoJSON(routes).addTo(mymap);

//adding style to map
L.geoJSON(routes, {
    style: myStyle
}).addTo(mymap);

//calling the forEach on created routes
L.geoJSON(routes, {
    onEachFeature: onEachFeature
}).addTo(mymap);

//defining circle marker : not working
/*var circleMarker = L.Icon({
    iconUrl: '../media/marker_circle.png',
    iconSize: new L.point(20, 20)
});*/


//For each stations create a marker on the map
/*stations.forEach(function(station) {
    L.marker(station.coordinates).bindPopup('station '+station.name).addTo(mymap);
    var circle = L.circle(station.coordinates, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 1,
        radius: 20
    }).bindPopup('station '+station.name).addTo(mymap);
});*/