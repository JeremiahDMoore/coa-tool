import axios from 'axios';
        
        function LocationHandler() {
          var lat = document.getElementById("lat").value;
          var long = document.getElementById("long").value;

        var options = {
          method: 'GET',
          url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
          params: {latlng: '35.986824,-115.5042419', language: 'en'},
          headers: {
            'x-rapidapi-host': 'google-maps-geocoding.p.rapidapi.com',
            'x-rapidapi-key': '14e6db2ea2mshd3417466d04fac6p1ac271jsnc70a82dde267'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response.data["results"][0]["formatted_address"]);
            document.getElementById("demo").innerHTML = (response.data["results"][0]["formatted_address"]);
        }).catch(function (error) {
            console.error(error);
            document.getElementById("demo").innerHTML = ("Error");
        });
       
        
        }
     