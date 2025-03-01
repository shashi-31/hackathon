import React from "react";

function ForecastDay({ icon, temperature, day }) {
  return (
    <div className="flex gap-10 items-center self-start mt-1.5 text-center">
      <img
        src={icon}
        alt="Weather icon"
        className="object-contain shrink-0 self-stretch aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[60px]"
      />
      <p className="self-stretch my-auto text-2xl">{temperature}</p>
      <p className="self-stretch my-auto text-xl basis-auto">{day}</p>
    </div>
  );
}

export default ForecastDay;
