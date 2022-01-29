
  function myFunction() {
    var x = document.getElementById("frm1");
    var start = x.elements[0].value + "<br>";
    var end = x.elements[1].value + "<br>";
    var title = x.elements[2].value + "<br>";
    var height = x.elements[3].value + "<br>";
    var hat = x.elements[4].value + "<br>";  
        
    document.getElementById("demo").innerHTML = 
    
    "Your start date is: " + start + 
    "Your end date is: " + end +
    "Your title is: " + title +
    "Your tower height is: " + height +
    "Your hat size is: " + hat;
  }

