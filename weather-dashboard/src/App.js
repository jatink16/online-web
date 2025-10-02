// src/App.js
import React, { useState } from 'react';
import './App.css';
import { getWeatherData } from './api/weatherService';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchCity) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setForecastData(null);
    try {
      const { weather, forecast } = await getWeatherData(searchCity);
      setWeatherData(weather);
      setForecastData(forecast);
      setCity(searchCity);
    } catch (err) {
      setError('Could not fetch weather data. Please check the city name.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        {loading && <p className="loading-message">Loading...</p>}
        {error && <p className="error-message">{error}</p>}
        
        {/* We only show the weather components if we have data */}
        {weatherData && forecastData && (
          <>
            <CurrentWeather data={weatherData} />
            <Forecast data={forecastData} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;