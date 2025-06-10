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
          <h2 className="text-3xl font-bold bg-teal-700 text-teal-50 text-center py-3 mb-2">
            Food Recipes
          </h2>
          <div className="md:flex md:justify-center my-3">
            <div>
              <img
                src={recipeData.strMealThumb}
                alt="recipeimg"
                className="me-20 w-[450px] object-cover rounded-2xl mt-10"
              />
            </div>
            <div className="mt-5 md:mt-20">
              <h3 className="bg-teal-700 text-teal-50 p-1 md:p-3 mb-5 font-medium inline text-lg md:text-2xl">
                {recipeData.strMeal}
              </h3>
              <p className="md:w-[550px] text-justify text-teal-700 text-md md:text-lg font-semibold mt-5">
                {recipeData.strInstructions}
              </p>
            </div>
          </div>
            <div className="my-3 md:my-10 block mx-auto md:ps-40 text-md md:text-xl text-teal-700">
              <p>Check Recipe on YouTube <Yticon color="#044847" className="inline" /></p>
              {recipeData.strYoutube}
            </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
