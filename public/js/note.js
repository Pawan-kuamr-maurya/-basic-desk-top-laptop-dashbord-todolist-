const url = "https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => { 
      note=(JSON.parse(data.contents)) ;
      console.log(note.quoteText);
      document.querySelector(".notecontent").innerHTML=note.quoteText;
    })
    .catch(error => {console.error('Error fetching data:', error);
      document.querySelector(".notecontent").innerHTML="opps no internet";
    });


    // https://zenquotes.io/api/random               https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en///