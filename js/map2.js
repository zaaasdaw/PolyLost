/*---------------Mapa2--------------*/

var mymap2 = L.map('mapid2').setView([-2.146640, -79.964472], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGV2aWxyeXUiLCJhIjoiY2p3d3lmeGczMDl1aTQ0bnVtYXlidnYwaSJ9.NWQEBzXR4bLPaHeh1TQ6Pw'
}).addTo(mymap2);


var marker10 = L.marker([-2.146378, -79.967025]).addTo(mymap2);

var circle10 = L.circle([-2.146378, -79.967025], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap2);

marker10.bindPopup("<b>FCNM</b><br>").openPopup();
circle10.bindPopup("Toda esta área");