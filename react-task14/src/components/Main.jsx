import React from "react";

function Main() {
  return (
    <div className=" h-full w-full text-white grid grid-rows-6 grid-cols-5 px-4 ">
      <div className=" text-5xl font-bold mt-16 lg:row-start-2 lg:text-5xl md:col-start-1 md:col-span-3 col-span-3 md:text-3xl lg:col-span-4">
        Welcome to Somebody's Portofolio Website
      </div>

      <div className="row-start-3 row-span-2 col-start-3 col-span-3 lg:row-start-3 lg:col-start-4 lg:col-span-2 flex justify-center md:row-start-2 md:justify-centre md:col-start-4">
        <img
          src="/black.webp "
          className=" rounded-full h-60 w-56 lg:h-80 lg:w-80 md:h-72 md:w-72"
          alt="profileimg"
        />
      </div>

      <div className=" row-start-3 row-span-2 lg:row-start-4  md:col-start-2 md:text-4xl col-start-1 col-span-2 text-yellow-400 flex items-center font-bold lg:text-3xl">
        This is a responsive website in action Feel free to test the
        responsiveness
      </div>
    </div>
  );
}

export default Main;
