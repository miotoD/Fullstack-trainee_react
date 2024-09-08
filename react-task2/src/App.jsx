import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className=" bg-black h-screen py-4 ">
        <h1 className=" mt-4 font-bold text-white text-center text-4xl">
          Counter App
        </h1>

        <div className=" bg-black w-screen flex justify-center mt-28 ">
          <button
            className=" text-white font-semibold text-xl border-white border-[2px] w-16"
            onClick={handleIncrement}
          >
            +
          </button>{" "}
          <div className="text-white ml-3 mr-4"> {count}</div>
          <button
            className=" text-white font-semibold text-xl border-white border-[2px] w-16"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
