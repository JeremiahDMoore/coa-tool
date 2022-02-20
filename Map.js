function initMap() {
  var x = document.getElementById("coords");
  var lat = x.elements[0].value;
  var long = x.elements[1].value;


  var y = document.getElementById("nautical");
  var latAir = y.elements[0].value;
  var longAir = y.elements[1].value;
  

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat: parseFloat(lat), lng: parseFloat(long) },
  });

  const latLng = { lat: parseFloat(lat), lng:  parseFloat(long) };

  new google.maps.Marker({
    position: latLng,
    map,
    title: "Tower Location",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
    }
  });

  const myLatLng2 = { lat: parseFloat(latAir), lng: parseFloat(longAir) };

  new google.maps.Marker({
    position: myLatLng2,
    map: map,
    title: "Nearest Runway",
    icon: {
      url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
    }
  });

  const geocoder = new google.maps.Geocoder();
  const infowindow = new google.maps.InfoWindow();
  geocodeLatLng(geocoder, map, infowindow);
  document.getElementById("submit").addEventListener("click", () => {
    geocodeLatLng(geocoder, map, infowindow);
  });
}
function geocodeLatLng(geocoder, map, infowindow) {
  const inputLat = document.getElementById("latAir").value;
  const inputLong = document.getElementById("longAir").value;
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
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/pink-dot.png"
          }
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