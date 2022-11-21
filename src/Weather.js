import React, { useState } from "react";
import './Weather.css';
import axios from "axios";

export default function Weather(props){ 
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});
    function showTemp(response) { 
        console.log(response.data);
        setWeatherData({
            temperature: response.data.main.temp,
            city: response.data.name,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity, 
            description: response.data.weather[0].description,
            hi: response.data.main.temp_max,
            lo: response.data.main.temp_min,
            iconUrl: "/img/rainy.png"
        })
        setReady(true);
    }

    if (ready) { 
        return(
            <div className="Weather">
                <div className="info-wrapper">
                    <div className="update-wrapper">
                    <div className="location-wrapper">
                        <div className="location-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                        <div className="city">{weatherData.city}</div>
                    </div>
                    <div className="updated">Last updated: Sat 12:30</div>
                    </div>
                    <div className="toggle-wrapper">
                        <div className="toggle">
                        <div className="f active">°F</div>
                        <div className="c">°C</div>
                        </div>
                    </div>
                </div>
                <div className="current-weather-grid">
                    <div classname="col"><img src={weatherData.iconUrl} alt={weatherData.description} className="weather-icon"/></div>
                    <div className="temp-wrapper col">
                        <div className="current-temp">{Math.round(weatherData.temperature)}°</div>
                        <div className="hi-lo">Hi: {Math.round(weatherData.hi)}° Lo: {Math.round(weatherData.lo)}°</div>
                    </div>
                </div>
                <div className="other-wrapper">
                    <div className="other-data">
                        <div className="other-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg></div>
                        <div className="current-other">Humidty: {weatherData.humidity}%</div>
                    </div>
                    <div className="other-data">
                        <div className="other-icon wind"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg></div>
                        <div className="current-other">Wind: {Math.round(weatherData.wind)}mph</div>
                    </div>
                </div>
            </div>
        )
    } else { 
        let unit = "imperial";
    let apiKey = "281450ec88936f4fa8ee9864682b49a0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(showTemp);

    return (
    <div className="load">"Loading..."</div>
    )
    }
    
    
   
}