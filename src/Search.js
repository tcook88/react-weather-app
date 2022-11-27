import React,{ useState }  from "react";
import './Search.css';
import axios from "axios";
import Weather from "./Weather";



export default function Search(props) { 
  const [weatherData, setWeatherData] = useState({ ready:false });
  const [city, setCity] = useState(props.defaultCity);
  const codeMapping = {
    "01d" : "/img/sun.png",
   "01n" : "/img/night.png",
   "02d" : "/img/cloudy.png",
   "02n" : "/img/night-1.png",
   "03d" : "/img/cloud.png",
  "03n" :"/img/cloud.png",
   "04d" : "/img/cloud.png",
  "04n" :"/img/cloud.png",
   "50d" : "/img/windy.png",
   "13d" : "/img/snowy.png",
  "13n" : "/img/snowy.png",
   "09d" : "/img/rainy.png",
   "10d" : "/img/rainy.png",
   "11d" : "/img/storm.png",
  "10n" : "/img/rainy.png",
  "09n" : "/img/rainy.png"
};

  
  function showTemp(response) { 
 
    setWeatherData({
        temperature: response.data.main.temp,
        city: response.data.name,
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity, 
        description: response.data.weather[0].description,
        hi: response.data.main.temp_max,
        lo: response.data.main.temp_min,
        iconUrl: codeMapping[response.data.weather[0].icon],
        date: new Date(response.data.dt * 1000),
        ready: true
    })
}

  function search() {
    let unit = "imperial";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showTemp);
  }
    
  function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function changeCity(event) {
      setCity(event.target.value);
    }

    if(weatherData.ready){
    return (
      <div className="Search">
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
      
        <input
          type="search"
          placeholder="Enter a city..."
          className="city-search"
          onChange={changeCity}
        />
        <div className="button-wrapper">
        <button type="submit"className="submit-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
        </div>
        </div>
      </form>
      <Weather data={weatherData} />
      </div>
      
    ); 
    } else {
      search();
      return(
        <div>Loading...</div>
      )
    }
}

