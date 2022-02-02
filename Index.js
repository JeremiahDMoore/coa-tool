
  function myFunction() {
    var x = document.getElementById("frm1");
    var height = x.elements[0].value + "<br>";
    var hat = x.elements[1].value + "<br>";
    var title = x.elements[2].value + "<br>";
    var start = x.elements[3].value + "<br>";
    var end = x.elements[4].value + "<br>";
    var name = x.elements[5].value + "<br>";
    var part107 = x.elements[6].value + "<br>"; 
    var faaId = x.elements[7].value + "<br>";
    
    var startYear = start.split("-")[0];
    var startMonth = start.split("-")[1];
    var startDay = Number.parseInt(start.split("-")[2]);

    var formattedStartDate = startMonth + "/" + startDay + "/" + startYear;

    var endYear = end.split("-")[0];
    var endMonth = end.split("-")[1];
    var endDay = Number.parseInt(end.split("-")[2]);

    var formattedEndDate = (endMonth + "/" + endDay + "/" + endYear).toString();

    var th = Number.parseInt(x.elements[0].value) + Number.parseInt(x.elements[1].value);
    
    document.getElementById("demo").innerHTML = 
    "Title: " + title + "<br>" +

    "Drone scan of tower. Flight will be at or below " + th + "ft AGL at all times. Flight will remain within 400ft of tower at all times. Flight duration expected to be approximately 2 hours. Drone will be flown within VLOS at all times, in non-hazardous conditions, during daylight hours only. " + "<br>" + "<br>" +
    "Flight will be conducted by:"  + "<br>" + "RPIC: " + name + "Part 107: " + part107 + "Aircraft: DJI Phantom 4 Pro V2" + "<br>" + "FAA #: " + faaId + "<br>" + "<br>" +
    "Requested Date Range for Flight: " + "<br>" + formattedStartDate + " to " + formattedEndDate ;


    
  }

