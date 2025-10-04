// src/App.js
import React, { useState } from 'react';
import './App.css';
import { getWeatherData } from './api/weatherService';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchCity) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    try {
      const data = await getWeatherData(searchCity);
      setWeatherData(data);
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
        {weatherData && <CurrentWeather data={weatherData} />}
      </main>
    </div>
  );
}

export default App;