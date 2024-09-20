import React from "react";

function Navbar() {
  return (
    <div>
      <div className="bg-black opacity-70 h-16 lg:h-28 fixed">
        <div className="text-white z-50 flex justify-center items-center h-full gap-32 md:gap-72 md:text-lg lg:gap-[750px]">
          <h1 className="lg:text-3xl">Portofolio</h1>
          <ul className="flex gap-8 items-center font-semibold text-md">
            <li className="hover:animate-pulse cursor-pointer">Home</li>
            <li className="hover:animate-pulse cursor-pointer">About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
