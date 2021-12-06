import axios from 'axios';
import React, { useState } from 'react';


const Weather = () => {
    const [city, setCity] = useState("Delhi")
    const getWeatherData = async(city, country) => {
        await axios({
            method: 'GET',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city},
            ${country}&appid={e8242f48fbfddf9af85e4c4ccc0394e0}`
        }).then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h1>My International Weather App</h1>
            <h1>{city}</h1>
        </div>
    )
}

export default Weather
