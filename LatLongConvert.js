
function convert(lat, long) {
    var x = document.getElementById("coords");
    var lat = x.elements[0].value;
    var long = x.elements[1].value;

    var latDirection = "N";
    var longDirection = "E";

    var LATITUDE = Number.parseFloat(lat).toFixed(6);
    var LONGITUDE = Number.parseFloat(long).toFixed(6);
    
    var latDegrees = Math.abs(LATITUDE.split(".")[0]);
    var longDegrees = Math.abs(LONGITUDE.split(".")[0]);

    var secondLat = Math.abs(LATITUDE) - latDegrees;
    var secondLong = Math.abs(LONGITUDE) - longDegrees;

    var lm = Math.abs(secondLat) * 60;
    var lom = Math.abs(secondLong) * 60;

    var latMinutes = Math.abs(Number.parseInt(lm).toFixed(0));
    var latSeconds = Math.abs(((lm - latMinutes )* 60).toFixed(2));
    var longMinutes = Math.abs(Number.parseInt(lom).toFixed(0));
    var longSeconds = Math.abs(((lom - longMinutes )* 60).toFixed(2));

    if (LATITUDE < 0) {
        var latDirection = "S";
    }
    if (LONGITUDE < 0) {
        var longDirection = "W";
    }
    if (latMinutes < 10) {
        var latMinutes = "0" + latMinutes;
    }

    if (longMinutes < 10) {
        var longMinutes = "0" + longMinutes;
    }

    document.getElementById("demo2").innerHTML =  "Location: " + LATITUDE + ", " + LONGITUDE + "<br>" + "LAT " + latDegrees + "° " + latMinutes + "' " + latSeconds + "\"" + latDirection + "<br>" + "LNG " + longDegrees + "° " + longMinutes + "' " + longSeconds + "\"" + longDirection;
}
