"use client";
import React from "react";
import Header from "./Header";
import DateTimeCard from "./DateTimeCard";
import WeatherDetailsCard from "./WeatherDetailsCard";
import ForecastCard from "./ForecastCard";
import WeatherMap from "./WeatherMap";

function WeatherDashboardWhiteCelsius() {
  return (
    <section className="overflow-hidden px-20 py-16 max-md:px-5">
      <Header />

      <div className="mt-12 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-2/5 max-md:ml-0 max-md:w-full">
            <DateTimeCard city="Athens" time="09:03" date="Thursday, 31 Aug" />
          </div>
          <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
            <WeatherDetailsCard
              temperature="24°C"
              feelsLike="22°C"
              weatherType="Sunny"
              sunriseTime="06:37 AM"
              sunsetTime="20:37 AM"
              humidity="41%"
              pressure="997hPa"
              windSpeed="2km/h"
              uvIndex="8"
            />
          </div>
        </div>
      </div>

      <div className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[32%] max-md:ml-0 max-md:w-full">
            <ForecastCard
              forecastDays={[
                {
                  day: "Friday, 1 Sep",
                  temp: "20°C",
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4993891fb146143ab36cbc46d4450a474e12eca32246b5dc2e753c30821a9f6c?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de",
                },
                {
                  day: "Saturday, 2 Sep",
                  temp: "22°C",
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9883a6a82d9db8f4e19d36aafd032ce720158863182581fa87cf328c769c3cf5?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de",
                },
                {
                  day: "Sunday, 3 Sep",
                  temp: "27°C",
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/126adf25dd58a9870268a725ac16581e260cc0cfcbe1f9a06f7e03c51888fcd8?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de",
                },
                {
                  day: "Monday, 4 Sep",
                  temp: "18°C",
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8638faa044b8460b52848fd6bdb2ac065d77eb1def65e70091a29865b62d6fb2?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de",
                },
                {
                  day: "Tuesday, 5 Sep",
                  temp: "16°C",
                  icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e78a9b7fffcb7a31fcf77ecf3a0dbc21b2e431d66e143862d584e9e94a9bc096?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de",
                },
              ]}
            />
          </div>
          <div className="ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <WeatherMap mapUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/023103404715fe1734d7fe1cfbc7749b6d9de4510db7b969ba1dfc24c953bb22?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeatherDashboardWhiteCelsius;
