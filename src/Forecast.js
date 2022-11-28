import React from "react";
import './Forecast.css';
import axios from "axios";

export default function Forecast(props){
    function showForecast(response){
        console.log(response.data);
    }
    let lat = props.data.lat;
    let lon = props.data.lon;
    let unit = "imperial";
    let apiKey = "5201594abea9f3e38b70e65b11a80c24";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&nits=${unit}`
    axios.get(apiUrl).then(showForecast);

    let days = [
     {
      name: "Sun",
    icon: "rainy",
       hi: 99,
      lo: 0
     },
    {
      name: "Mon",
      icon: "snowy",
      hi: 99,
     lo: 0
     },
     {
      name: "Tue",
      icon: "sun",
       hi: 99,
      lo: 0
     },
     {
      name: "Wed",
      icon: "storm",
       hi: 99,
      lo: 0
    },
   {
     name: "Thu",
      icon: "cloud",
       hi: 99,
      lo: 0
   }
  ];

    return (
        <div className="Forecast">
            
            {days.map(function (day, index) {
                return (
                    <div className="col" key={index}>
                        <h2>{day.name}</h2>
                        <div className="forecast-icon">
                            <img src={`/img/${day.icon}.png`} alt={day.icon}/></div>
                        <div className="forecast-text">Hi: {day.hi}°</div>
                        <div className="forecast-text">Lo: {day.lo}°</div>
                    </div>
                );
            })}
                
            
        </div>
    );
}