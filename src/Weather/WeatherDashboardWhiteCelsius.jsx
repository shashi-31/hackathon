import React, { useEffect, useState } from "react";
import DateTimeCard from "./DateTimeCard";
import WeatherDetailsCard from "./WeatherDetailsCard";
import ForecastCard from "./ForecastCard";
import WeatherMap from "./WeatherMap";
import axios from "axios";

function WeatherDashboardWhiteCelsius() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   if(!weatherData){
    fetch("http://127.0.0.1:5000")
    .then((response) => response.json())
    .then((data) => {
      setWeatherData(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    })
    .finally(() => {
      setLoading(false);
    });
   }
  }, []);

  console.log(weatherData);

  // if (loading) {
  //   return (
  //     <p className="text-center text-xl font-bold">Loading weather data...</p>
  //   );
  // }

  // if (!weatherData) {
  //   return (
  //     <p className="text-center text-xl font-bold">
  //       Failed to load weather data.
  //     </p>
  //   );
  // }

  // const { location, timestamp, weather, forecast, graphs } = weatherData;
  // const currentWeather = forecast[0];

  return (
    <section className="overflow-hidden px-20 py-16 max-md:px-5">
      <div className="mt-12 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <DateTimeCard
              city={weatherData?.location}
              time={new Date().toLocaleTimeString()}
              date={new Date().toDateString()}
            />
          </div>
          <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            {/* <WeatherDetailsCard
              temperature={`${weather.temperature}°C`}
              feelsLike={`${weather.temperature}°C`}
              weatherType={weather.condition}
              sunriseTime="06:37 AM" // Replace with API data if available
              sunsetTime="20:37 PM"  // Replace with API data if available
              humidity={`${weather.humidity}%`}
              pressure={`${weather.pressure} hPa`}
              windSpeed={`${weather.wind_speed} km/h`}
              uvIndex="8" // Placeholder (Replace if API provides UV Index)
            /> */}
          </div>
        </div>
      </div>

      <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-1/2 max-md:ml-0 max-md:w-full">
            
            { weatherData && <ForecastCard forecastDays={weatherData.forecast} />}
          </div>
          { weatherData && (
            <div className="flex flex-col gap-5 w-1/2 max-md:ml-0 max-md:w-full items-center">
            <div className="ml-5 w-full max-md:ml-0 max-md:w-full">
              <h1>Temperature </h1>
              <WeatherMap mapUrl={weatherData.graphs.temperature} />
            </div>
            <div className="ml-5 w-full max-md:ml-0 max-md:w-full">
              <h1>Humidity </h1>
              <WeatherMap mapUrl={weatherData.graphs.humidity} />
            </div>
            <div className="ml-5 w-full max-md:ml-0 max-md:w-full">
              <h1>air_pollution_pie </h1>
              <WeatherMap mapUrl={weatherData.graphs.air_pollution_pie} />
            </div>
            <div className="ml-5 w-full max-md:ml-0 max-md:w-full">
              <h1>AQI</h1>
              <WeatherMap mapUrl={weatherData.graphs.aqi} />
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default WeatherDashboardWhiteCelsius;
