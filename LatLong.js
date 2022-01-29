import LatLon from 'https://cdn.jsdelivr.net/npm/geodesy@2.3.0/latlon-spherical.min.js';

        var x = document.getElementById("frm1");
        var lat = x.elements[3].value;
        var long = x.elements[4].value;
    
        const p1 = new LatLon(lat, long);
        const p2 = new LatLon(58.789, -3.99);
    
        const d = p1.distanceTo(p2);
        console.assert(d.toFixed(3));
    
        const mid = p1.midpointTo(p2);
        // document.getElementById("demo").innerHTML = (mid.toString('dms'));