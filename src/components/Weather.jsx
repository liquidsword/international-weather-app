import axios from 'axios';
import React, { useState } from 'react';


const Weather = () => {
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [temp, setTemp] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [description, setDescription] = useState("");
    const [icon, setIcon] = useState("");
    const [showMyComponent, setShowMyComponent] = useState(false);

    const getWeatherData = async(city, country) => {
        await axios({
            method: 'GET',
            url:`http://api.openweathermap.org/data/2.5/weather?q=${city},
            ${country}&appid={e8242f48fbfddf9af85e4c4ccc0394e0}`,
        })
          .then((res) => {
            console.log(res.data);
            setTemp(res.data.main.temp);
            setIcon(res.data.weather[0].icon);
        })
          .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <input 
                type="text" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                placeholder="Cityname" 
            />
            <input 
                type="text" 
                value={country} 
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Countryname" 
            />
            <button onClick={getWeatherData(city, country)} className="btn btn-primary">Get Weather</button>

            <div className="data_container p-4 my-5">
                <h1>{city}, {country}</h1>
                <div className="my-2">
                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt="weather-icon" style={{width:200, height:200}}/>
                </div>
            </div>
        </div>
    )
}

export default Weather
