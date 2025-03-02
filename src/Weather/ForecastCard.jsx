import React from "react";
import ForecastDay from "./ForecastDay";

function ForecastCard({ forecastDays }) {
  return (
    <article className="flex flex-col px-8 pt-6 pb-4 mx-auto w-full font-bold bg-white rounded-2xl shadow-lg text-gray-900 max-md:px-5 max-md:mt-10">
      <h2 className="self-center text-2xl text-center mb-4">5-Day Forecast</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {forecastDays.map((day, index) => (
          <ForecastDay
            key={index}
            icon={day.icon}
            temperature={day.temp}
            day={day.day}
          />
        ))}
      </div>
    </article>
  );
}

export default ForecastCard;