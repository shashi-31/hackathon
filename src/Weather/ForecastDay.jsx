import React from "react";

function ForecastDay({ icon, temperature, day }) {
  return (
    <div className="flex items-center gap-6 bg-white px-4 py-3 rounded-lg shadow-md w-full max-w-xs">
      <img
        src={icon || ""}
        alt="Weather icon"
        className="w-14 h-14 object-contain"
      />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold">{temperature.toFixed(2)}° C</p>
        <p className="text-lg text-gray-600">{day}</p>
      </div>
    </div>
  );
}

export default ForecastDay;

