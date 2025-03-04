import React, { useEffect, useState } from "react";

function DateTimeCard({ city, time, date }) {

  return (
    <article className="flex flex-col justify-center items-center px-12 py-8 w-full font-bold bg-white rounded-2xl shadow-lg text-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl">{city || "Fetching Location"}</h2>
      <time className="mt-4 text-7xl max-md:text-4xl">{time}</time>
      <time className="mt-2 text-lg text-gray-500">{date}</time>
    </article>
  );
}

export default DateTimeCard;
