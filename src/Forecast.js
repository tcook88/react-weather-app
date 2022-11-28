import React, { useState, useEffect } from "react";
import './Forecast.css';
import axios from "axios";

export default function Forecast(props){
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);
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

useEffect(() => {
    setLoaded(false);
}, [props.data.lon, props.data.lat]);
    
   function showForecast(response){
        setForecast(response.data.daily.map(function(daily) {
            return  {
                day: daily.dt,  
                description: daily.weather[0].description,
                hi: daily.temp.max,
                lo: daily.temp.min,
                iconUrl: codeMapping[daily.weather[0].icon]
            }
        }));
        setLoaded(true);
    }

    function day(forecastDay) { 
        let date = new Date(forecastDay * 1000);
        let day = date.getDay();
        
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
   
  if (loaded) {
    return (
        <div className="Forecast">
            {forecast.map(function(dailyForecast, index){
                if (index < 5) {
                    return (
                        <div className="col" key={index}>
                            <h2>{day(dailyForecast.day)}</h2>
                            <div className="forecast-icon">
                                <img src={dailyForecast.iconUrl} alt={dailyForecast.description}/></div>
                            <div className="forecast-text">Hi: {Math.round(dailyForecast.hi)}°</div>
                            <div className="forecast-text">Lo: {Math.round(dailyForecast.lo)}°</div>
                        </div>    
                    )
                } else {
                    return null;
                }
                
            })}
                    
            
        </div>
    );
    
  } else { 
    let lat = props.data.lat;
    let lon = props.data.lon;
    let unit = "imperial";
    let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${unit}`
    axios.get(apiUrl).then(showForecast);
    return null;
  }
    
}