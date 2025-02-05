const urlwet = "https://api.open-meteo.com/v1/forecast?latitude=29.536535&longitude=75.025505&current_weather=true";
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(urlwet)}`)
    .then(response => response.json())
    .then(data => { 
       
        
      data=(JSON.parse(data.contents)) ;
      console.log(data.current_weather.temperature);
      
      document.querySelector("#wetherdata").innerHTML=Math.round(data.current_weather.temperature)+"&deg; C";
    })
    .catch(error => {console.error('Error fetching data:', error);
      document.querySelector("#wetherdata").innerHTML="opps no internet";
    });

    // https://uselessfacts.jsph.pl/api/v2/facts/random?language=en
    // https://api.open-meteo.com/v1/forecast?latitude=29.536535&longitude=75.025505&current_weather=true
    // https://api.openweathermap.org/data/2.5/weather?q=sirsa&appid=f00c38e0279b7bc85480c3fe775d518c&units=metric
    // https://api.open-meteo.com/v1/forecast?latitude=28.644800&longitude=77.216721&daily=temperature_2m_max,temperature_2m_min