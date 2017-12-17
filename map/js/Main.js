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

const infoDiv = document.getElementById("info-div");


//defining style of lines
const styleCocody = {
    "color": "#ffff00",
    "weight": 3,
    "opacity": 1
};
const styleCocodySelected = {
    "color": "#ffff00",
    "weight": 5,
    "opacity": 1
};
const styleShared = {
    "color": "#2f4f4f",
    "weight": 3,
    "opacity": 1
};
const styleSharedSelected = {
    "color": "#2f4f4f",
    "weight": 5,
    "opacity": 1
};

//Setting the control layer
var controlLayers = L.control.layers().addTo(mymap);

//Creates the station list and instantiates the Stations
let stations = [];

const geoStations = L.layerGroup();

const stationDeuxPlateaux = new Station("Deux Plateaux", [-3.9982187747955322, 5.368422614699433], stations, mymap, geoStations);
const stationSaintJean = new Station("Saint Jean", [-4.0039801597595215, 5.336034611566841], stations, mymap, geoStations);
const stationBlockhauss = new Station("Blockhauss", [-4.001389145851135, 5.325987787020237], stations, mymap, geoStations);
const stationGareBassam = new Station("Gare de Bassam", [-4.0024325251579285, 5.2985891933204305], stations, mymap, geoStations);

controlLayers.addOverlay(geoStations, 'Gares');
mymap.addLayer(geoStations);



//instantiates the routes
const routesCocody = [
    {
        "type": "LineString",
        "properties": {
            "name": 'Line0',
            "style": styleCocody,
            "selectedStyle": styleCocodySelected,
            "stations": [stationDeuxPlateaux, stationSaintJean],
            "show_on_map": true,
        },
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
            "style": styleCocody,
            "selectedStyle": styleCocodySelected,
            "stations": [stationBlockhauss, stationSaintJean],
            "show_on_map": true
        },
        "coordinates": [
	        [-4.003969430923462, 5.335473788373642],
	        [-4.003867506980896, 5.335895741109609],
	        [-4.003443717956543, 5.335917105797384],
	        [-4.000149965286255, 5.335500494251612],
	        [-4.000611305236816, 5.331996673135128],
	        [-4.000879526138306, 5.331238221418598],
	        [-4.00151252746582, 5.32597176324535],
	        [-4.001255035400391, 5.325961080728542]
        ]
    }, 
    {
        "type": "LineString",
        "properties": {
            "name": 'Line2',
            "style": styleCocody,
            "selectedStyle": styleCocodySelected,
            "show_on_map": true
        },
        "coordinates": [
        	[-4.2, 5.3],
        	[-4.2, 5.2]
        ]
    }
];

const routesShared = [
    {
        "type": "LineString",
        "properties": {
            "name": 'Line3',
            "style": styleShared,
            "selectedStyle": styleSharedSelected,
            "stations": [stationDeuxPlateaux, stationGareBassam],
            "show_on_map": true
        },
        "coordinates": [
          [-4.0023842453956595, 5.2985704980851125],
          [-4.002429842948914, 5.2985785103288805],
          [-4.002392292022705, 5.298880304768752],
          [-4.002376198768616, 5.299248867690028],
          [-4.002421796321869, 5.299489234694126],
          [-4.002467393875122, 5.29963879633837],
          [-4.006190299987793, 5.31032167718781],
          [-4.006630182266235, 5.311678389814196],
          [-4.006909132003784, 5.31210570025914],
          [-4.007080793380737, 5.312276624354149],
          [-4.008207321166992, 5.313141926857554],
          [-4.008625745773315, 5.313804256347673],
          [-4.011318683624268, 5.317895727568813],
          [-4.011404514312744, 5.318205524543529],
          [-4.011372327804565, 5.318440542834137],
          [-4.011243581771851, 5.318739656892376],
          [-4.0109217166900635, 5.319028088168002],
          [-4.010599851608276, 5.319487441401953],
          [-4.010492563247681, 5.320000207397622],
          [-4.0105140209198, 5.320342051157318],
          [-4.0106213092803955, 5.320812086016796],
          [-4.0108466148376465, 5.32119665972561],
          [-4.011297225952148, 5.321613280972202],
          [-4.011801481246948, 5.321858980549442],
          [-4.01226282119751, 5.32202990193659],
          [-4.012885093688965, 5.322339696829735],
          [-4.013432264328003, 5.322681539289346],
          [-4.01401162147522, 5.323237032880956],
          [-4.014462232589722, 5.323856621294964],
          [-4.018185138702393, 5.329742680077649],
          [-4.018356800079346, 5.330116565754344],
          [-4.01850700378418, 5.330725464797741],
          [-4.018517732620238, 5.331654835857747],
          [-4.0184855461120605, 5.332520111097222],
          [-4.018528461456299, 5.334571129014666],
          [-4.018464088439941, 5.335660729495012],
          [-4.018163681030273, 5.336750328040117],
          [-4.017906188964844, 5.337818560028795],
          [-4.017841815948486, 5.33830994611874],
          [-4.017670154571533, 5.342433300831977],
          [-4.0175628662109375, 5.34315969205231],
          [-4.017133712768555, 5.3440463154627995],
          [-4.016693830490112, 5.344601789716675],
          [-4.0159642696380615, 5.345189310013889],
          [-4.0148913860321045, 5.346097294819033],
          [-4.014194011688232, 5.346909138916376],
          [-4.01376485824585, 5.347827803307028],
          [-4.013614654541016, 5.348596916620204],
          [-4.013603925704956, 5.349996273085715],
          [-4.013582468032837, 5.351502447079054],
          [-4.013432264328003, 5.352624063600971],
          [-4.013164043426514, 5.353179530069219],
          [-4.012874364852905, 5.353617493659566],
          [-4.012466669082642, 5.3539700007117155],
          [-4.011973142623901, 5.354215687324849],
          [-4.011329412460327, 5.354418645756883],
          [-4.010374546051025, 5.354568194032099],
          [-4.007177352905273, 5.354781834361802],
          [-4.004580974578857, 5.354781834361802],
          [-4.003416895866394, 5.354691037230794],
          [-4.001222848892212, 5.354311825537899],
          [-4.00101900100708, 5.354178300237916],
          [-4.000804424285889, 5.354050115922511],
          [-4.0007078647613525, 5.3538524983835805],
          [-4.000729322433472, 5.35355340144642],
          [-4.000890254974365, 5.353339760687444],
          [-4.001142382621765, 5.353243622321549],
          [-4.001362323760986, 5.353270327424697],
          [-4.001566171646118, 5.353441240057267],
          [-4.001705646514892, 5.353820452290181],
          [-4.001287221908569, 5.357527105953095],
          [-4.0011584758758545, 5.35785824682897],
          [-4.0009868144989005, 5.358157341659357],
          [-4.000718593597411, 5.358424390491316],
          [-3.998122215270996, 5.360325774799695],
          [-3.997746706008911, 5.36069964180432],
          [-3.997489213943481, 5.361201691421877],
          [-3.9974355697631836, 5.361575557890159],
          [-3.9974355697631836, 5.365912392186198],
          [-3.997499942779541, 5.366211483070369],
          [-3.9977788925170894, 5.366574664661122],
          [-3.998079299926758, 5.366959209639158],
          [-3.998165130615234, 5.367151482037251],
          [-3.998165130615234, 5.367514663068263],
          [-3.998175859451294, 5.368460000914106],
          [-3.9982938766479488, 5.368460000914106],
          [-3.998535275459289, 5.36843863736315],
          [-3.998546004295349, 5.368331819597162]
        ]
      }
];

//changes GeoJSON coords into LatLng
routesCocody.map(function(route){
    route.coordinates.map(function(coordinate){
        return L.GeoJSON.coordsToLatLng(coordinate);
    });
});
//changes GeoJSON coords into LatLng
routesShared.map(function(route){
    route.coordinates.map(function(coordinate){
        return L.GeoJSON.coordsToLatLng(coordinate);
    });
});



//initializing variable allowing deselection when click on map
let clickOK = false;
let lastRoute = "";

//when clic on map, if the click is not on a route, close popups, reset routes to unselected style and clears the info panel
mymap.on('click', function(e) {
    if (!clickOK) {
        mymap.closePopup();
        if (lastRoute) {
            lastRoute.setStyle(lastRoute.feature.geometry.properties.style);
        }
        infoDiv.innerHTML ='';
    }
    clickOK = false;
});


//for each route, add a clic listener
function onInitialization(route, layer) {
    //start and end stations popups
    layer.addEventListener('click', function(event) {
        onRouteClic(event, route, layer)
    }, false);
};

//on route click, open start and end station popups, fit map bounds, set the style to selected style a,d set info text
function onRouteClic(event, route, layer) {
    clickOK = true;
    //close all open popups
    mymap.eachLayer(function (layer) {
      layer.closePopup();
    });
    
    //fit map bounds to selected route (insuportable)
    //mymap.fitBounds(event.target.getBounds());
    
    //set style of route to selected
    event.target.setStyle(route.properties.selectedStyle);
    event.target.bringToFront();
    //reset style to unselected for previously selected route (only if the selected route is different to the last selected route)
    if (lastRoute) {
        if (event.target !== lastRoute) {
            lastRoute.setStyle(lastRoute.feature.geometry.properties.style);
        }
    }
    lastRoute = event.target;
    
    //open the popups of the stations
    route.properties.stations[0].marker.openPopup();
    route.properties.stations[1].marker.openPopup();
    infoDiv.innerHTML ='<p>Nom : '+route.properties.name+'<br/>Prix : ';
}


//adding style to routes, calling initialize on each feature and adding to the map
let geoRoutesCocody = L.geoJSON(routesCocody, {
    style: function(route) {
        return route.geometry.properties.style;
    },
    onEachFeature: onInitialization
}).addTo(mymap);
controlLayers.addOverlay(geoRoutesCocody, 'Cocody');
let geoRoutesShared = L.geoJSON(routesShared, {
    style: function(route) {
        return route.geometry.properties.style;
    },
    onEachFeature: onInitialization
}).addTo(mymap);
controlLayers.addOverlay(geoRoutesShared, 'Partagés');





//defining circle marker : not working
/*var circleMarker = L.Icon({
    iconUrl: '../media/marker_circle.png',
    iconSize: new L.point(20, 20)
});


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