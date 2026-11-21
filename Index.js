
  function myFunction() {
    var x = document.getElementById("frm1");
    var height = x.elements[0].value;
    var hat = x.elements[1].value + "\n";
    var title = x.elements[2].value + "\n";
    var start = x.elements[3].value + "\n";
    var end = x.elements[4].value + "\n";
    var name = x.elements[5].value + "\n";
    var part107 = x.elements[6].value + "\n"; 
    var faaId = x.elements[7].value + "\n";
    
    var startYear = start.split("-")[0];
    var startMonth = start.split("-")[1];
    var startDay = Number.parseInt(start.split("-")[2]);

    var formattedStartDate = startMonth + "/" + startDay + "/" + startYear;

    var endYear = end.split("-")[0];
    var endMonth = end.split("-")[1];
    var endDay = Number.parseInt(end.split("-")[2]);

    var formattedEndDate = (endMonth + "/" + endDay + "/" + endYear).toString();

    var th = Number(height) + Number(hat);

    if (![height, hat].every((value) => value.trim() !== "" && Number.isInteger(Number(value)) && Number(value) >= 0)) {
      for (const id of ["date", "job", "go", "copy"]) {
        document.getElementById(id).textContent = "";
      }
      document.getElementById("copy").textContent = "Enter valid non-negative whole numbers for both heights.";
      return;
    }
    const dates = "Requested Date Range for Flight: " + "\n" + formattedStartDate + " to " + formattedEndDate  
    const job = "Job ID: " + title 
    const descr = "Drone scan of " + height + "ft tower."
    const copy = "Flight will be at or below " + th + "ft AGL at all times. Flight will remain within 400ft laterally of the tower at all times. Flight duration expected to be approximately 2 hours. Drone will be flown within VLOS at all times, in non-hazardous conditions, during daylight hours only. " + "\n" + "\n" +

    "Flight to be conducted by:"  + "\n" + "RPIC: " + name + "Part 107: " + part107 + "Aircraft: DJI Phantom 4 Pro+ V2.0" + "\n" + "FAA reg: " + faaId + "\n"
    // instr = "(Copy this section, paste in COA application)"
    // // instr2 = "--------------------------- End Copy ------------------------------"


    // document.getElementById("instr").textContent = instr
    document.getElementById("date").style.whiteSpace = "pre-line";
    document.getElementById("date").textContent = dates
    document.getElementById("job").style.whiteSpace = "pre-line";
    document.getElementById("job").textContent = job
    document.getElementById("go").style.whiteSpace = "pre-line";
    document.getElementById("go").textContent = descr
    document.getElementById("copy").style.whiteSpace = "pre-line";
    document.getElementById("copy").textContent = copy
    // document.getElementById("instr2").textContent = instr2

    
        
  }

