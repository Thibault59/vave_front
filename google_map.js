var rendererOptions = {
  draggable: true
};
var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);;
var directionsService = new google.maps.DirectionsService();
var map;

var montreal = new google.maps.LatLng(45.5128904, -73.5668576);

function initialize() {

  var mapOptions = {
    zoom: 13,
    center: montreal,

  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directionsPanel'));

  google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
    computeTotalDistance(directionsDisplay.getDirections());
  });

  

  calculate();
}








function calculate() {

    origin      = document.getElementById('origin').value; // Le point départ
    destination = document.getElementById('destination').value; // Le point d'arrivé


  var request = {
    origin: origin,
    destination: destination,
   /* waypoints:[{location: 'Centre eaton, Montréal, QC'}, {location: 'Université Mc Gill, Montréal, QC'}],*/

    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

function computeTotalDistance(result) {
  var total = 0;
  var myroute = result.routes[0];
  for (var i = 0; i < myroute.legs.length; i++) {
    total += myroute.legs[i].distance.value;
  }
  total = total / 1000.0;
  document.getElementById('total').innerHTML = total + ' km';
}


/*google.maps.event.addListener(map, "click", function(event)
{
 // place a marker
placeMarker(event.latLng);

// display the lat/lng in your form's lat/lng fields
document.getElementById("latFld").value = event.latLng.lat();
document.getElementById("lngFld").value = event.latLng.lng();
});*/


google.maps.event.addDomListener(window, 'load', initialize);