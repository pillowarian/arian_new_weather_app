import React from 'react';

const CurrentWeather = ({ currentWeather }) => {
  // Use a fallback icon if weatherIcon is undefined or empty
  const iconName = currentWeather.weatherIcon || 'default';

  return (
    <div className="current-weather">
      <img
        src={`icons/${iconName}.svg`}
        alt={currentWeather.description || 'Weather icon'}
        className="weather-icon"
      />
      <h2 className="temperature">
        {currentWeather.temperature} <span>°C</span>
      </h2>
      <p className="description">{currentWeather.description}</p>
    </div>
  );
};

export default CurrentWeather;
