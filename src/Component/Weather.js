import React, { useState } from "react";
import { LocationList } from "../Data/Locationlist";


export default function Weather({weather}) {

    return (
        <div className="container">
            {(typeof weather.main != "undefined") ? (
                <div>
                    <div className="location">Here in {weather.name}</div>
                    <div className="temp">It's currently {weather.main.temp}°C</div>
                    <div className="weather">The weather is {weather.weather[0].main}</div>
                </div>
            ) : ('')}
                {(typeof weather.main == "undefined") ? (
                <div>
                    <div >?</div>
                </div>
            ) : ('')}
        </div>
    )
} 