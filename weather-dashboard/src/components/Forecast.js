// src/components/Forecast.js
import React from 'react';
import './Forecast.css';

const Forecast = ({ data }) => {
  if (!data || !data.list) return null;

  // Get a unique forecast for each of the next 5 days
  const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));

  return (
    <div className="forecast-container">
      <h3>5-Day Forecast</h3>
      <div className="forecast-cards">
        {dailyForecasts.map((day, index) => (
          <div key={index} className="forecast-card">
            <p className="forecast-day">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
            />
            <p className="forecast-temp">{Math.round(day.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;