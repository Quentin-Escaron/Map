class Route {
    constructor (name, routes, style, station1, station2, coordinates, map) {
        this._name = name;
        this._stations = [station1, station2];
        this._coordinates = coordinates;
        this.line = new L.polyline(this._coordinates, {color:style.color}).addTo(map);
        this.line.on('click', function (e) {
            //close all open popups
            map.eachLayer(function (layer) {
              layer.closePopup();
            });
            
            //open the popups of the stations
            station1.marker.openPopup();
            station2.marker.openPopup();
            document.getElementById("info-div").innerHTML ='<p>Nom : '+name+'<br/>Prix : ';
        });
        routes.push(this);
    }
    
    get name() {
        return this._name;
    }

    get stations() {
        return this._stations;
    }
    
    get coordinates() {
        return this._coordinates;
    }
}