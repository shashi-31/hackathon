import React from "react";

function DateTimeCard({ city, time, date }) {
  return (
    <article className="flex flex-col grow justify-center items-start px-20 py-12 w-full font-bold bg-zinc-300 rounded-[30px] text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col items-center">
        <h2 className="ml-5 text-4xl">{city}</h2>
        <time className="self-stretch mt-7 text-8xl max-md:text-4xl">
          {time}
        </time>
        <time className="z-10 -mt-7 ml-3.5 text-xl">{date}</time>
      </div>
    </article>
  );
}

export default DateTimeCard;
