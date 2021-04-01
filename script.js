/**
 * Wheather App
 * DONE: Complete getWheatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWheatherData()
 * TODO: Complete showWeatherData() to set the data in the html file from response
 */

 //API_KEY for maps api
 let API_KEY = "bd2b387ad1fefb2c95e25d0a67fc4b13";

 /**
  * Retrieve weather data from openweathermap
  * HINT: Use fetch()
  * HINT: URL should look Like this:
  * htpps://api.openweathermap.org/data/2.5/weather?q=indore&appid=bd2b387ad1fefb2c95e25d0a67fc4b13&units=imperial
  */
 getWheatherData = (city) =>{
     const URL = "https://api.openweathermap.org/data/2.5/weather";
    //HINT: Use template literals to create a url with input and an API Key
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
    
    let wheatherPromise = fetch(FULL_URL);
    console.log(wheatherPromise);
    return wheatherPromise.then((response)=>{
        return response.json();
    })
 }


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWheatherData()
 */
searchCity = () =>{
    const city = document.getElementById('city-input').value;
    console.log(city);
    getWheatherData(city).then((response) =>{
        console.log(response);
        showWeatherData(response);
    }).catch((error)=>{
        console.log(error);
    })
    
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the wheatherData to see how the data looks like
 */
showWeatherData = (weatherData) =>{
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;
}