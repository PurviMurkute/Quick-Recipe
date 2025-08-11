import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Youtube as Yticon } from "lucide-react";

const Recipes = () => {
  const { idMeal } = useParams("");
  const [recipeData, setRecipeData] = useState(null);

  const getRecipebyId = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      if (response.data.meals) {
        setRecipeData(response.data.meals[0]);
      } else {
        setRecipeData(null);
      }
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setRecipeData(null);
    }
  };

  useEffect(() => {
    getRecipebyId();
  }, [idMeal]);

  return (
    <div>
      {!recipeData ? (
        "Data not found"
      ) : (
        <div className="min-h-screen">
          <hr className="text-3xl font-bold bg-teal-700 h-[20px] fixed top-0 w-full"/>
          <div className="flex flex-col md:flex-row justify-evenly items-center my-3 p-3">
            <div className="flex flex-col">
              <h3 className="text-teal-700 p-1 md:p-3 font-medium inline text-lg md:text-xl">
                {recipeData.strMeal}
              </h3>
              <img
                src={recipeData.strMealThumb}
                alt="recipeimg"
                className="w-[350px] object-cover rounded-2xl mt-10"
              />
            </div>
            <div className="flex flex-col py-5">
              <p className="bg-teal-700 text-teal-50 p-1 md:p-3 mb-5 font-medium inline text-lg md:text-2xl">Recipe:</p>
              <p className="lg:w-[700px] text-justify text-teal-700 text-sm md:text-md font-semibold mt-5">
                {recipeData.strInstructions}
              </p>
            </div>
          </div>
           
        </div>
      )}
    </div>
  );
};

export default Recipes;
