import React from "react";
import './Weather.css';


export default function Weather(props){ 

    let days = [
        "Sun", 
        "Mon", 
        "Tue",
        "Thu",
        "Fri",
        "Sat"
    ];


    let day = props.data.date ? days[props.data.date.getDay()] : null;
    let hours = props.data.date ? props.data.date.getHours() : null;
    let minutes = props.data.date ?  props.data.date.getMinutes() : null;

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    if (hours < 10) {
        hours = `0${hours}`;
    }
   
    
        return(
            <div className="Weather">
                <div className="info-wrapper">
                    <div className="update-wrapper">
                    <div className="location-wrapper">
                        <div className="location-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                        <div className="city">{props.data.city}</div>
                    </div>
                    <div className="updated">Last updated: {day} {hours}:{minutes}</div>
                    </div>
                    <div className="f-wrapper">F</div>
                    </div>
        
                <div className="current-weather-grid">
                    <div classname="col"><img src={props.data.iconUrl} alt={props.data.description} className="weather-icon"/></div>
                    <div className="temp-wrapper col">
                        <div className="current-temp">{Math.round(props.data.temperature)}°</div>
                    </div>
                </div>
                <div className="other-wrapper">
                    <div className="other-data">
                        <div className="other-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg></div>
                        <div className="current-other">Humidty: {props.data.humidity}%</div>
                    </div>
                    <div className="other-data">
                        <div className="other-icon wind"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-wind"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg></div>
                        <div className="current-other">Wind: {Math.round(props.data.wind)}mph</div>
                    </div>
                </div>
            </div>
            
        );
    } 

   
