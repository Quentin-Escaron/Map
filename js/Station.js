class Station {
    constructor (name, coordinates, map) {
        this._name = name;
        this._coordinates = L.GeoJSON.coordsToLatLng(coordinates);
        stations.push(this);
        this.marker = L.marker(this.coordinates).bindPopup('station '+name, {closeOnClick: true, autoClose: false});
        this.marker.addTo(map);
    }
    
    get name() {
        return this._name;
    }
    
    get coordinates() {
        return this._coordinates;
    }
}