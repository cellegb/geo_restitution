var ourLoc;
var view;
var map;
var cd;
var mx;
var cr;
var ar;
var br;
var cu;
var bo;
var cl;
var ht;
var nc;
var pn;
var es;
var hn;
var vn;


function init() {
	// Initalize things here
	ourLoc = ol.proj.fromLonLat([276.6298, 41.8781]);
  cd = ol.proj.fromLonLat([250.6298, 55.5017]);
  mx = ol.proj.fromLonLat([260.5528, 23.6345]);
  cr = ol.proj.fromLonLat([275.6298, 9.7489]);
  ar = ol.proj.fromLonLat([299, -32.603722]);
  br = ol.proj.fromLonLat([310, -16]);
  cu = ol.proj.fromLonLat([280.6298, 19.7489]);
  bo = ol.proj.fromLonLat([295, -18]);
  cl = ol.proj.fromLonLat([285,3]);
  ht = ol.proj.fromLonLat([288.6298, 18.7489]);
  nc = ol.proj.fromLonLat([275.6298, 12.7489]);
  pn = ol.proj.fromLonLat([280.6298, 9.7489]);
  es = ol.proj.fromLonLat([273, 13]);
  hn = ol.proj.fromLonLat([275.6298, 15.7489]);
  vn = ol.proj.fromLonLat([298,5]);


	view = new ol.View({
		center: ourLoc,
		zoom: 6
	});

	map = new ol.Map({
		target: 'map',
		layers: [
		  new ol.layer.Tile({
		    source: new ol.source.OSM()
		  })
		],

		loadTilesWhileAnimating: true,
		view: view
	});
}

function panHome() {
	view.animate({
		center: ourLoc, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function canada(){
  view.animate({
		center: cd, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function mexico(){
  view.animate({
		center: mx, // "Home" Location
		duration: 2000  // Two seconds
  });
}

function costarica(){
  view.animate({
		center: cr, // "Home" Location
		duration: 2000  // Two seconds
  });
}

function argentina(){
  view.animate({
		center: ar, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function brazil(){
  view.animate({
		center: br, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function cuba(){
  view.animate({
		center: cu, // "Home" Location
		duration: 2000  // Two seconds
	});
}
function china(){
  view.animate({
		center: ch, // "Home" Location
		duration: 2000  // Two seconds
  });
}

function bolivia(){
  view.animate({
		center: bo, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function colombia(){
  view.animate({
		center: cl, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function haiti(){
  view.animate({
		center: ht, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function nicaragua(){
  view.animate({
		center: nc, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function panama(){
  view.animate({
		center: pn, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function elsalvador(){
  view.animate({
		center: es, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function honduras(){
  view.animate({
		center: hn, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function venezuala(){
  view.animate({
		center: vn, // "Home" Location
		duration: 2000  // Two seconds
	});
}

function makeCountryRequest() {
	var countryName = document.getElementById("country-name").value;

	if(countryName === "") {
	 	alert("You didn't enter a country name!");
	 	return;
	}

	var query = "https://restcountries.eu/rest/v2/name/"+countryName+"?fullText=true"

	query = query.replace(/ /g, "%20")

	var countryRequest = new XMLHttpRequest();
	countryRequest.open('GET', query, false);

	countryRequest.send();

	if(countryRequest.readyState != 4 || countryRequest.status != 200 || countryRequest.responseText === "") {
	 	window.console.error("Request had an error!");
	 	return;
	}

	var countryInformation = JSON.parse(countryRequest.responseText);

	var lat = countryInformation[0].latlng[0];
	var lon = countryInformation[0].latlng[1];

	window.console.log(countryName + ": lon " + lon + " & lat " + lat);

	var location = ol.proj.fromLonLat([lon, lat]);


	view.animate({
		center: location, // Location
		duration: 2000  // Two seconds
	});
}

window.onload = init;