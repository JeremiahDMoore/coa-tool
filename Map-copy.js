function initMap() {

  var x = document.getElementById("coords");
  var lat = x.elements[0].value;
  var long = x.elements[1].value;

    const vegas = new google.maps.LatLng(lat, long);
    const map = new google.maps.Map(document.getElementById("map"), {
      center: vegas,
      zoom: 8,
    });

    const marker = new google.maps.Marker({
      position: vegas,
      map: map,
    });

    const coordInfoWindow = new google.maps.InfoWindow();
  
    coordInfoWindow.setContent(createInfoWindowContent(vegas, map.getZoom()));
    coordInfoWindow.setPosition(vegas);
    coordInfoWindow.open(map);
    map.addListener("zoom_changed", () => {
      coordInfoWindow.setContent(createInfoWindowContent(vegas, map.getZoom()));
      coordInfoWindow.open(map);
    });

    const geocoder = new google.maps.Geocoder();
    const infowindow = new google.maps.InfoWindow();
  
    document.getElementById("lat-lng-btn").addEventListener("click", () => {
      geocodeLatLng(geocoder, map, infowindow);
    });
  }
  
   const TILE_SIZE = 256;
  
   function createInfoWindowContent(latLng, zoom) {
     const scale = 1 << zoom;
     const worldCoordinate = project(latLng);
     const pixelCoordinate = new google.maps.Point(
       Math.floor(worldCoordinate.x * scale),
       Math.floor(worldCoordinate.y * scale)
     );
     const tileCoordinate = new google.maps.Point(
       Math.floor((worldCoordinate.x * scale) / TILE_SIZE),
       Math.floor((worldCoordinate.y * scale) / TILE_SIZE)
     );
     return [
       "Tower location",
       "LatLng: " + latLng,
       "Zoom level: " + zoom,
       "World Coordinate: " + worldCoordinate,
       "Pixel Coordinate: " + pixelCoordinate,
       "Tile Coordinate: " + tileCoordinate,
     ].join("<br>");
   }

function geocodeLatLng(geocoder, map, infowindow) {
  // const input = document.getElementById("latlng").value;
  const latlngStr = lat + "," + long
  const latlng = {
    lat: parseFloat(latlngStr[0]),
    lng: parseFloat(latlngStr[1]),
  };

  geocoder
    .geocode({ location: latlng })
    .then((response) => {
      if (response.results[0]) {
        map.setZoom(11);

        const marker = new google.maps.Marker({
          position: latlng,
          map: map,
        });

        infowindow.setContent(response.results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert("No results found");
      }
    })
    .catch((e) => window.alert("Geocoder failed due to: " + e));
}

  
  // The mapping between latitude, longitude and pixels is defined by the web
  // mercator projection.
  function project(latLng) {
    let siny = Math.sin((latLng.lat() * Math.PI) / 180);
  
    // Truncating to 0.9999 effectively limits latitude to 89.189. This is
    // about a third of a tile past the edge of the world tile.
    siny = Math.min(Math.max(siny, -0.9999), 0.9999);
    return new google.maps.Point(
      TILE_SIZE * (0.5 + latLng.lng() / 360),
      TILE_SIZE * (0.5 - Math.log((1 + siny) / (1 - siny)) / (4 * Math.PI))
    );
  }