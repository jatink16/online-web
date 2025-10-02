// src/api/weatherService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherData = async (city) => {
  try {
    const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
      params: { q: city, appid: API_KEY, units: 'metric' }
    });
    const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
      params: { q: city, appid: API_KEY, units: 'metric' }
    });
    return { weather: weatherResponse.data, forecast: forecastResponse.data };
  } catch (error) {
    throw error;
  }
};