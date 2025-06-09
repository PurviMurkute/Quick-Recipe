import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Youtube as Yticon } from "lucide-react";

const Recipes = () => {
  const { idMeal } = useParams();
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
        <div className="p-5 bg-teal-100 min-h-screen">
          <h2 className="text-3xl font-bold text-teal-700 text-center my-5">
            Food Recipes
          </h2>
          <div className="flex justify-center my-3">
            <div>
              <img
                src={recipeData.strMealThumb}
                alt="recipeimg"
                className="me-20 w-[500px] object-cover rounded-2xl hover:w-[510px]"
              />
            </div>
            <div className="mt-20">
              <h3 className="bg-teal-700 text-teal-50 p-3 mb-5 font-medium inline text-2xl">
                {recipeData.strMeal}
              </h3>
              <p className="w-[550px] text-justify text-teal-700 text-lg font-semibold mt-5">
                {recipeData.strInstructions}
              </p>
              <p>Check Recipe on YouTube</p>
            </div>
          </div>
            <div className="my-10 block mx-auto ps-40 text-xl">
              <Yticon color="#044847" className="inline me-2" />
              {recipeData.strYoutube}
            </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
