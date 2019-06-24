var mymap = L.map('mapid').setView([-2.146640, -79.964472], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZGV2aWxyeXUiLCJhIjoiY2p3d3lmeGczMDl1aTQ0bnVtYXlidnYwaSJ9.NWQEBzXR4bLPaHeh1TQ6Pw'
}).addTo(mymap);

var marker = L.marker([-2.144463, -79.967838]).addTo(mymap);

var circle = L.circle([-2.144463, -79.967838], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker.bindPopup("<b>FEC</b><br>").openPopup();
circle.bindPopup("Toda esta área");

var marker2 = L.marker([-2.148636, -79.967612]).addTo(mymap);

var circle2 = L.circle([-2.148636, -79.967612], {
    color: 'yellow',
    fillColor: 'yellow',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker2.bindPopup("<b>CELEX</b><br>").openPopup();
circle2.bindPopup("Toda esta área");

var marker3 = L.marker([-2.147180, -79.967793]).addTo(mymap);

var circle3 = L.circle([-2.147180, -79.967793], {
    color: 'brown',
    fillColor: 'brown',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker3.bindPopup("<b>FCSH</b><br>").openPopup();
circle3.bindPopup("Toda esta área");

var marker4 = L.marker([-2.152011, -79.955884]).addTo(mymap);

var circle4 = L.circle([-2.152011, -79.955884], {
    color: 'green',
    fillColor: 'green',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker4.bindPopup("<b>FCV</b><br>").openPopup();
circle4.bindPopup("Toda esta área");

var marker5 = L.marker([-2.146687, -79.963236]).addTo(mymap);

var circle5 = L.circle([-2.146687, -79.963236], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker5.bindPopup("<b>FMCBOR</b><br>").openPopup();
circle5.bindPopup("Toda esta área");

var marker6 = L.marker([-2.146378, -79.967025]).addTo(mymap);

var circle6 = L.circle([-2.146378, -79.967025], {
    color: 'purple',
    fillColor: 'purple',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker6.bindPopup("<b>FCNM</b><br>").openPopup();
circle6.bindPopup("Toda esta área");

var marker7 = L.marker([-2.145540, -79.965359]).addTo(mymap);

var circle7 = L.circle([-2.145540, -79.965359], {
    color: 'black',
    fillColor: 'black',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker7.bindPopup("<b>FCT</b><br>").openPopup();
circle7.bindPopup("Toda esta área");

var marker8 = L.marker([-2.145024, -79.965760]).addTo(mymap);

var circle8 = L.circle([-2.145024, -79.965760], {
    color: 'silver',
    fillColor: 'silver',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker8.bindPopup("<b>FMCP</b><br>").openPopup();
circle8.bindPopup("Toda esta área");

var marker9 = L.marker([-2.143581, -79.962095]).addTo(mymap);

var circle9 = L.circle([-2.143581, -79.962095], {
    color: 'pink',
    fillColor: 'pink',
    fillOpacity: 0.2,
    radius: 20
}).addTo(mymap);

marker9.bindPopup("<b>FADCOM</b><br>").openPopup();
circle9.bindPopup("Toda esta área");

