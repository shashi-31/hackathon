import React from "react";
import WeatherMetric from "./WeatherMetric";

function WeatherDetailsCard({
  temperature,
  feelsLike,
  weatherType,
  sunriseTime,
  sunsetTime,
  humidity,
  pressure,
  windSpeed,
  uvIndex,
}) {
  return (
    <article className="flex flex-wrap gap-5 justify-between items-start px-5 pb-8 w-full bg-zinc-300 rounded-[30px] max-md:mt-10">
      <div className="flex z-10 flex-col self-start mt-4">
        <h2 className="text-7xl font-bold max-md:text-4xl">{temperature}</h2>
        <div className="flex gap-3 mt-7 font-semibold text-zinc-800 max-md:mr-2 max-md:ml-1.5">
          <p className="grow text-xl">Feels like:</p>
          <p className="text-3xl">
            <span
              style={{
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {feelsLike.replace("°C", "")}
            </span>
            <span
              style={{
                fontFamily:
                  "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 700,
                color: "rgba(41,41,41,1)",
              }}
            >
              °C
            </span>
          </p>
        </div>
        <div className="flex gap-3 items-start self-center mt-12 max-w-full w-[135px] max-md:mt-10">
          <div className="mt-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/535ef7e473b9539c9f7fa4f3d13b415a7c42774df9dcfb5b4128f91e5e963bef?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
              alt="Sunrise icon"
              className="object-contain w-12 aspect-square"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d2668deb03fbe0de8c0d1205b46c58de42dc6d89a2951b80327555011345d6df?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
              alt="Sunset icon"
              className="object-contain mt-5 w-12 aspect-square"
            />
          </div>
          <div className="flex flex-col text-xl font-bold text-zinc-800">
            <h3>Sunrise</h3>
            <time className="mt-4 text-base font-semibold max-md:mr-1.5">
              {sunriseTime}
            </time>
            <h3 className="self-start mt-6">
              Sunset
              <br />
            </h3>
            <time className="mt-4 text-base font-semibold max-md:mr-1.5">
              {sunsetTime}
            </time>
          </div>
        </div>
      </div>

      <div className="flex flex-col self-start -mt-2 text-3xl font-bold text-center whitespace-nowrap text-zinc-800">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4a95986edf90491e45fbd2500df63b5a9f96a24f30c42891a656b5b31cb9c18?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
          alt="Weather icon"
          className="object-contain w-full aspect-square shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
        />
        <p className="self-center">{weatherType}</p>
      </div>

      <div className="flex flex-col self-end mt-7 text-xl font-semibold text-center whitespace-nowrap text-zinc-800">
        <WeatherMetric
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/91c32065f288acf9ae39648af58940aec16e755f282cc98b517ead8419cb3cc9?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
          value={humidity}
          label="Humidity"
          iconClasses="object-contain aspect-[1.2] w-[60px] max-md:mr-1.5 max-md:ml-2"
        />

        <WeatherMetric
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e5e96403c8f17c6c79e01d62518e962115738ea97e7760058969de2779d8223e?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
          value={pressure}
          label="Pressure"
          iconClasses="object-contain mt-7 aspect-square w-[58px] max-md:mr-2.5 max-md:ml-2"
          valueClasses="mt-2 max-md:ml-0.5"
        />
      </div>

      <div className="flex flex-col items-center self-end mt-5 text-xl font-semibold text-center text-zinc-800">
        <WeatherMetric
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd8edd1fcc5ee7bf053e1868387424564b93c3f4a6b76b097796051f464090d?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
          value={windSpeed}
          label="Wind Speed"
          iconClasses="object-contain aspect-[1.02] w-[60px]"
        />

        <WeatherMetric
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/52c302e5e1bdb3ec0ce132ae03f6c24046429cb6a3927182e4ffc7a27c2293f4?placeholderIfAbsent=true&apiKey=20aa533da9c54265be71f24084c063de"
          value={uvIndex}
          label="UV"
          iconClasses="object-contain mt-7 aspect-square w-[58px]"
        />
      </div>
    </article>
  );
}

export default WeatherDetailsCard;
