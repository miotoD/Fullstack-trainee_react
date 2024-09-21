import React, { useEffect, useState } from "react";
import axios from "axios";

function MainSec() {
  const URL = "https://freetestapi.com/api/v1/posts";

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((resp) => {
      setData(resp.data);
    });
  }, []);

  console.log("Saved data is:", data[0]);
  return (
    <>
      {" "}
      <div
        className=" h-[470px] w-full"
        style={{
          backgroundImage: `url('/bl.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <h1 className=" text-center mt-16 text-4xl font-bold">
        View all the Top Blogs
      </h1>
      <h1 className="text-center font-semibold p-2">
        Be updated with the latest trends of the world
      </h1>
      <div className=" mt-16 w-full h-fit shadow-lg py-14 p-10  ">
        <div className=" bg-gray-200 h-full w-full flex p-8 flex-wrap gap-16 ">
          {data.length == 0 ? (
            <h1 className=" text-center text-2xl text-gray-500 font-semibold">
              Can't connect right now
            </h1>
          ) : (
            <>
              {data.map((items) => (
                <ul key={items.id}>
                  <div className="  border-[3px] h-60 w-full lg:w-[400px]  rounded-xl bg-white shadow-xl hover:cursor-pointer hover:animate-pulse">
                    <h1 className=" text-center font-bold text-lg">
                      {items.title}
                    </h1>
                    <hr />
                    <p className="text-center mt-4 text-md font-semibold">
                      {" "}
                      {items.content}
                    </p>
                    <h1 className=" text-center mt-8 font-bold">By</h1>
                    <h1 className=" text-center mt-2 font-bold">
                      {items.author}
                    </h1>
                  </div>
                </ul>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MainSec;
