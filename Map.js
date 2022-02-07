function initMap() {
  var x = document.getElementById("coords");
  var lat = x.elements[0].value;
  var long = x.elements[1].value;

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: parseFloat(lat), lng: parseFloat(long) },
  });
  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();
  geocodeLatLng(geocoder, map, infowindow);
  document.getElementById("submit").addEventListener("click", () => {
    geocodeLatLng(geocoder, map, infowindow);
  });
}
function geocodeLatLng(geocoder, map, infowindow) {
  const inputLat = document.getElementById("lat").value;
  const inputLong = document.getElementById("long").value;
  const input = inputLat + "," + inputLong;
  const latlngStr = input.split(",", 2);
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };
  console.log(input);
  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        map.setZoom(8);
        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });        
        infowindow.setContent(response.results[0].formatted_address);
        document.getElementById(
          "result"
        ).innerHTML = `Address: ${response.results[0].formatted_address}`;
        // infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}