import { useEffect, useState } from "react";
import foodrecipeicon from "./../assets/foodrecipe-icon.png";
import axios from "axios";
import RecipeCard from "../components/RecipeCard";
import chefimg from "../assets/Chef-bro.png";

const Home = () => {
  const [searchFood, setSearchFood] = useState("");
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = searchFood || "v";
        const response = await axios.get(
          `${import.meta.env.VITE_MEALDB_API_URL}?s=${query}`
        );
        setRecipe(response.data.meals || []); 
    };
    fetchData();
  }, [searchFood]);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-1 bg-teal-700 text-teal-50 px-5 py-2">
        <div className="text-xl md:text-2xl font-bold">
          <img
            src={foodrecipeicon}
            alt="recipe-icon"
            className="w-[40px] md:w-[60px] inline p-2"
          />
          Quick Recipe
        </div>
        <input
          type="text"
          placeholder="Search Recipe....."
          value={searchFood}
          onChange={(e) => setSearchFood(e.target.value)}
          className="w-full md:w-[50%] border-1 border-white px-2 py-1 md:py-2 me-2 rounded-lg focus:outline-none"
        />
      </div>
      {recipe.length > 0 ? (
        <RecipeCard detail={recipe} />
      ) : (
        <div className="flex flex-col items-center">
          <img src={chefimg} alt="Chef" className="w-[400px]" />
          <p className="text-lg font-medium">No recipes found.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
