import React from "react";
import './Forecast.css';

export default function Forecast(props){
    return (
        <div className="Forecast">
            
            {props.days.map(function (day, index) {
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