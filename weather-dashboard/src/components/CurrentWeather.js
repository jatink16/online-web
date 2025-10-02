// src/components/CurrentWeather.js
import React from 'react';
import './CurrentWeather.css';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  // Bonus: Weather Icon
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="current-weather-card">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-main">
        <img src={iconUrl} alt={data.weather[0].description} className="weather-icon" />
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
      </div>
      <p className="weather-description">{data.weather[0].description}</p>
      <div className="weather-details">
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default CurrentWeather;