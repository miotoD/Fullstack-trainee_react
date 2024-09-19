import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

// ***important*** Before typing any recipe in the search box, limited recipes are available.
// They are:sushi, burek, corba, kumpir, Bistek, Tamiya, Big Mac, Lasagne, Poutine,Kafteji,Timbits, Dal fry

function MainSec() {
  const [recipe, setRecipe] = useState("");

  const [recipeData, setRecipeData] = useState(null);

  const scrollToDiv = useRef(null);

  const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipe}`;

  const handleRecipe = () => {
    axios.get(URL).then((resp) => {
      setRecipeData(resp.data);
    });
  };

  useEffect(() => {
    if (recipeData) {
      scrollToDiv.current.scrollIntoView({ behavior: "smooth" });
      console.log("scrolled!");
    }
  }, [recipeData]);
  return (
    <div>
      <div
        className=" h-screen w-screen bg-black p-12 grid grid-rows-5 grid-cols-7"
        style={{
          backgroundImage: `url('/food.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className=" text-4xl text-white font-bold row-start-1 col-span-5 ">
          {" "}
          Welcome to Food Recipe Website
        </h1>
        <input
          type="text"
          value={recipe}
          onChange={(event) => setRecipe(event.target.value)}
          placeholder="search a recipe"
          className=" p-2 w-72 bg-white border-black border-[2px] rounded-lg h-12 row-start-3 col-start-4 col-span-1 font-semibold  border-none focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className=" row-start-3 col-start-5 flex justify-center items-start mt-3 ">
          <button
            className=" bg-green-500 text-white font-semibold w-16 hover:bg-green-700 h-8 rounded-lg"
            onClick={handleRecipe}
          >
            {" "}
            Search
          </button>
        </div>
      </div>

      {recipeData == null ? (
        <h1 className=" text-4xl text-gray-600 text-center mt-12">
          {" "}
          Search a Recipe
        </h1>
      ) : (
        <div ref={scrollToDiv} className=" p-8 grid grid-rows-7 grid-cols-9 ">
          {" "}
          <div className=" w-96 text-center p-2 font-semibold h-14 text-orange-500 shadow-red-400 shadow-lg text-3xl col-start-4 rounded-lg ">
            {recipeData.meals[0].strMeal}
          </div>
          <div className=" grid grid-cols-10 grid-rows-11 row-start-3 col-start-1 row-span-5 col-span-9  border-[2px] shadow-xl p-4 ">
            <button className=" bg-green-600 text-white col-span-2 font-semibold w-fit p-2 rounded-lg h-11">
              Category : {recipeData.meals[0].strCategory}
            </button>

            <button className=" bg-yellow-500 col-span-2 col-start-4 text-white font-semibold w-fit p-2 rounded-lg">
              Dish : {recipeData.meals[0].strArea}
            </button>

            <div className=" bg-orange-500 text-white col-start-1 col-span-10 row-start-3 row-span-7 rounded-xl p-4">
              <h1 className=" text-center text-3xl font-semibold mb-2">
                Instruction
              </h1>

              <div className=" text-sm font-semibold">
                {recipeData.meals[0].strInstructions}
              </div>
            </div>

            <div className=" row-start-11 col-start-3 col-span-10">
              <button className=" bg-red-500 text-white font-semibold p-2 rounded-xl text-sm">
                Ingredients:{" "}
                {`${recipeData.meals[0].strIngredient1}, ${recipeData.meals[0].strIngredient2}, ${recipeData.meals[0].strIngredient3},${recipeData.meals[0].strIngredient4},${recipeData.meals[0].strIngredient5},${recipeData.meals[0].strIngredient6},${recipeData.meals[0].strIngredient7},${recipeData.meals[0].strIngredient8},${recipeData.meals[0].strIngredient9}`}{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainSec;
