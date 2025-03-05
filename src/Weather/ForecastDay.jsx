import React from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow } from "react-icons/wi";

function getWeatherIcon(temperature) {
  if (temperature >= 30) return <WiDaySunny className="text-[100px] text-yellow-400" />;
  if (temperature >= 20) return <WiCloud className="text-[100px] text-gray-400" />;
  if (temperature >= 10) return <WiRain className="text-[100px] text-blue-500" />;
  return <WiSnow className="text-[100px] text-blue-300" />;
}

function ForecastDay({ temperature, day, date }) {
  return (
    <div className="flex items-center justify-between w-full bg-white p-4 rounded-lg shadow-md">
      <div className="w-24">{getWeatherIcon(temperature)}</div>
      <p className="text-3xl font-bold text-gray-900">{temperature.toFixed(0)}°C</p>
      <p className="text-lg text-gray-600">{day}{date}</p>
    </div>
  );
}
export default ForecastDay;
