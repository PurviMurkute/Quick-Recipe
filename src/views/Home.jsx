import { useState } from "react";
import foodrecipeicon from "./../assets/foodrecipe-icon.png";
import axios from "axios";

const Home = () => {
  const [searchFood, setSearchFood] = useState();

  const getFoodRecipe = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)

    console.log(response.data.meals);
  }

  return (
    <div>
      <h1 className="text-4xl font-bold bg-teal-700 text-teal-50 p-3">
        <img
          src={foodrecipeicon}
          alt="recipe-icon"
          className="w-[80px] inline p-2"
        />
        Quick Recipe
      </h1>

      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Enter Dish Name"
          value={searchFood}
          onChange={(e)=>{setSearchFood(e.target.value)}}
          className="w-1/3 border-2 border-teal-600 px-2 py-2 me-2 rounded-lg shadow-xl focus:outline-none"
        />
        <button className="bg-teal-700 text-teal-50 font-medium px-4 py-2 border-none rounded-lg shadow-xl focus:outline-none hover:bg-teal-800" onClick={()=>{getFoodRecipe()}}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;
