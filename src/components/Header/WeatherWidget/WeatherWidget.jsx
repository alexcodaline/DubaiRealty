import { useEffect, useState } from 'react';
import './WeatherWidget.scss'
import axios from 'axios';

const WeatherWidget = () => {
  const [weatherData, setWeatherData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?units=metric&q=Dubai&appid=dce7d0f050dd528f500f96eedfc42db5`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  },);
  const roundedTemperature = weatherData ? Math.round(weatherData.main.temp) : null;
  const getWeatherIconUrl = () => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0) {
      const iconCode = weatherData.weather[0].icon;
      return `https://openweathermap.org/img/wn/${iconCode}.png`;
    }
    return null;
  };
  return (
    <>
      {weatherData && (
        <div className='weather-container'>
          <span className='weather-name'>{weatherData.name}, {weatherData.sys.country}</span>
          <img
            className='weather-icon'
            src={getWeatherIconUrl()}
            alt='Weather Icon'
          />
          <p className='weather-temp'>{roundedTemperature} °C</p>
        </div>
      )}
    </>
  );
}

export default WeatherWidget;