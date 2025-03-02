import React from "react";
import WeatherMetric from "./WeatherMetric";

function WeatherDetailsCard({
  temperature,
  feelsLike,
  weatherType,
  sunriseTime,
  sunsetTime,
  humidity,
  pressure,
  windSpeed,
  uvIndex,
}) {
  return (
    <article className="flex flex-wrap gap-5 justify-between items-start p-8 w-full bg-white rounded-2xl shadow-lg max-md:mt-10">
      {/* Temperature & Feels Like */}
      <div className="flex flex-col">
        <h2 className="text-7xl font-bold max-md:text-4xl">{temperature}</h2>
        <div className="flex gap-3 mt-5 font-semibold text-gray-700">
          <p className="text-xl">Feels like:</p>
          <p className="text-3xl">{feelsLike}</p>
        </div>

        {/* Sunrise & Sunset */}
        <div className="flex gap-5 items-center mt-10">
          <div className="flex flex-col items-center">
            <img src="/icons/sunrise.png" alt="Sunrise" className="w-12" />
            <p className="text-lg mt-2">Sunrise</p>
            <time className="text-base font-semibold">{sunriseTime}</time>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/sunset.png" alt="Sunset" className="w-12" />
            <p className="text-lg mt-2">Sunset</p>
            <time className="text-base font-semibold">{sunsetTime}</time>
          </div>
        </div>
      </div>

      {/* Weather Icon & Type */}
      <div className="flex flex-col items-center">
        <img
          src="/icons/weather.png"
          alt="Weather icon"
          className="w-28 shadow-md"
        />
        <p className="text-2xl font-bold">{weatherType}</p>
      </div>

      {/* Weather Metrics */}
      <div className="grid grid-cols-2 gap-5 mt-7 text-xl font-semibold text-gray-800">
        <WeatherMetric icon="/icons/humidity.png" value={humidity} label="Humidity" />
        <WeatherMetric icon="/icons/pressure.png" value={pressure} label="Pressure" />
        <WeatherMetric icon="/icons/wind.png" value={windSpeed} label="Wind Speed" />
        <WeatherMetric icon="/icons/uv.png" value={uvIndex} label="UV Index" />
      </div>
    </article>
  );
}

export default WeatherDetailsCard;
