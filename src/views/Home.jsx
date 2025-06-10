import { useState } from "react";
import foodrecipeicon from "./../assets/foodrecipe-icon.png";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import Button from "../components/Button";

const Home = () => {
  const [searchFood, setSearchFood] = useState();
  const [recipe, setRecipe] = useState();

  const getFoodRecipe = async () => {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
    setRecipe(response.data.meals);
  }

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold bg-teal-700 text-teal-50 p-1 md:p-3">
        <img
          src={foodrecipeicon}
          alt="recipe-icon"
          className="w-[60px] md:w-[80px] inline p-2"
        />
        Quick Recipe
      </h1>

      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Enter Dish Name"
          value={searchFood}
          onChange={(e)=>{setSearchFood(e.target.value)}}
          className="w-1/2 md:w-1/3 border-2 border-teal-600 px-2 py-1 md:py-2 me-2 rounded-lg shadow-xl focus:outline-none"
        />
        <Button btntext={"Search"} onClick={()=>{getFoodRecipe()}}/>
      </div>
      <div>
        <RecipeCard detail={recipe}/>
      </div>
    </div>
  );
};

export default Home;
