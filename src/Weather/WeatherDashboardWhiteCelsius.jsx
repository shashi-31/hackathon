import React, { useEffect, useState } from "react";
import DateTimeCard from "./DateTimeCard";
import WeatherDetailsCard from "./WeatherDetailsCard";
import ForecastCard from "./ForecastCard";
import WeatherMap from "./WeatherMap";
function WeatherDashboardWhiteCelsius() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  console.log(weatherData);
  

  if (loading) {
    return <p className="text-center text-xl font-bold">Loading weather data...</p>;
  }

  if (!weatherData) {
    return <p className="text-center text-xl font-bold">Failed to load weather data.</p>;
  }

  const { location, timestamp, weather, forecast, graphs } = weatherData;

  return (
    <section className="overflow-hidden px-20 py-16 max-md:px-5">
      <div className="mt-12 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <DateTimeCard
              city={location}
              time={new Date(timestamp).toLocaleTimeString()}
              date={new Date(timestamp).toDateString()}
            />
          </div>
          <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <WeatherDetailsCard
              temperature={`${weather.temperature}°C`}
              feelsLike={`${weather.temperature}°C`}
              weatherType={weather.condition}
              sunriseTime="06:37 AM" // Replace with API data if available
              sunsetTime="20:37 PM"  // Replace with API data if available
              humidity={`${weather.humidity}%`}
              pressure={`${weather.pressure} hPa`}
              windSpeed={`${weather.wind_speed} km/h`}
              uvIndex="8" // Placeholder (Replace if API provides UV Index)
            />
          </div>
        </div>
      </div>

      <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[32%] max-md:ml-0 max-md:w-full">
            <ForecastCard
              forecastDays={Object.keys(forecast.temperature).map((day, index) => ({
                day,
                temp: `${Math.round(forecast.temperature[day])}°C`,
                icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4993891fb146143ab36cbc46d4450a474e12eca32246b5dc2e753c30821a9f6c", // Replace with API icon if available
              }))}
            />
          </div>
          <div className="ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <WeatherMap mapUrl={graphs.temperature} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherDashboardWhiteCelsius;
