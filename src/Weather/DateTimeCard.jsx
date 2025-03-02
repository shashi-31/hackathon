import React, { useEffect, useState } from "react";

function DateTimeCard() {
  const [city, setCity] = useState("Loading...");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/") // Flask API endpoint
      .then((response) => response.json())
      .then((data) => {
        if (data.location) {
          setCity(data.location);
        }
        const now = new Date();
        setTime(now.toLocaleTimeString());
        setDate(now.toDateString());
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <article className="flex flex-col justify-center items-center px-12 py-8 w-full font-bold bg-white rounded-2xl shadow-lg text-gray-900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-3xl">{city}</h2>
      <time className="mt-4 text-7xl max-md:text-4xl">{time}</time>
      <time className="mt-2 text-lg text-gray-500">{date}</time>
    </article>
  );
}

export default DateTimeCard;
