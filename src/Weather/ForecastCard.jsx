import React from "react";
import ForecastDay from "./ForecastDay";

function ForecastCard({ forecastDays }) {
  return (
    <article className="flex flex-col px-8 pt-8 mx-auto w-full font-bold bg-zinc-300 rounded-[30px] text-zinc-800 max-md:pl-5 max-md:mt-10">
      <h2 className="self-center text-3xl text-center">5 Days Forecast:</h2>

      {forecastDays.map((day, index) => (
        <ForecastDay
          key={index}
          icon={day.icon}
          temperature={day.temp}
          day={day.day}
        />
      ))}
    </article>
  );
}

export default ForecastCard;
