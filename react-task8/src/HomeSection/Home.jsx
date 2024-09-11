import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [location, setLocation] = useState("");

  const [date, setDate] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=9c50174cde74d8074d26ebdf27a978fe&units=imperial`;

  console.log(location);

  const handleSearch = () => {
    axios.get(URL).then((resp) => {
      console.log("The response got back is:", resp.data);
      setWeatherData(resp.data);
      setLocation("");
    });
  };

  useEffect(() => {
    const today = new Date();
    const formattedDAte = today.toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    setDate(formattedDAte);
  }, []);

  return (
    <div
      className=" h-screen w-screen flex"
      style={{
        backgroundImage: `url('/bg.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" h-full w-[60%] grid grid-rows-7 grid-cols-7">
        {weatherData == null ? (
          <>
            <div className=" text-5xl text-gray-400 row-start-4 row-span-3 col-start-2 col-span-5 ">
              {" "}
              No data Available{" "}
            </div>
            <h1 className="text-3xl text-gray-400 row-start-5 row-span-2 col-start-3 col-span-5">
              Search a Location.
            </h1>
          </>
        ) : (
          <>
            <div className=" col-start-1 col-span-5 row-start-2 text-4xl p-3 font-semibold text-white ">
              {date}
            </div>
            <div className=" row-start-6 text-6xl text-white col-span-4 p-3">
              {weatherData.main.temp} º F{" "}
            </div>
            <div className=" row-start-7 flex  p-3 text-5xl col-start-1 col-span-2 text-white">
              <h1> {weatherData.name}</h1>
            </div>
          </>
        )}
      </div>
      <div className=" h-full w-[40%] backdrop-blur-md grid grid-rows-8 p-2">
        <div className=" row-start-1 flex gap-2">
          <input
            type="text"
            className=" h-10 rounded-md w-64 p-2  font-semibold "
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder=" Enter location "
          />

          <button
            className=" mt-2 hover:bg-blue-500 bg-blue-400 h-fit w-16 text-gray-800 rounded-md font-semibold "
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <hr />

        {weatherData == null ? (
          <h1 className=" text-3xl text-center text-gray-400 row-start-4">
            Search a location to see Weather
          </h1>
        ) : (
          <>
            <h1 className=" text-xl font-semibold text-center text-white">
              {" "}
              Wind speed : {weatherData.wind.speed}
            </h1>

            <hr />
            <h1 className=" text-xl font-semibold text-center text-white">
              {" "}
              Humidity : {weatherData.main.humidity}
            </h1>
            <hr />
            <h1 className=" text-xl font-semibold text-center text-white">
              {" "}
              Max Temp : {weatherData.main.temp_max}
            </h1>
            <hr />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
