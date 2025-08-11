import Button from "./Button";
import { Link } from "react-router";

const RecipeCard = ({ detail = [] }) => {
  return (
    <div className="flex justify-evenly flex-wrap md:my-10 m-5 md:mx-5">
      {detail.map((recipeItem, i) => {
        const { strMealThumb, strMeal, idMeal } = recipeItem;
        return (
          <div
            key={i}
            className="border-none bg-teal-100 mx-1 my-4 shadow-xl rounded-2xl md:w-[350px]"
          >
            <img
              src={strMealThumb}
              alt="dishimg"
              className="md:w-[350px] md:h-[350px] w-[270px] h-[270px] object-contain rounded-t-2xl"
            />
            <h2 className="font-bold text-xl my-2 mx-2 text-teal-700 text-center">
              {strMeal}
            </h2>
            <Link to={`/recipes/${idMeal}`}>
              <Button btntext="Check Recipe" btnposition="center" />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeCard;