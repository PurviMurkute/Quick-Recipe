import React from 'react'
import Button from './Button'
import chefimg from './../assets/Chef-bro.png'
import { Link } from 'react-router'

const RecipeCard = ({detail}) => {
    console.log(detail)
    if(!detail){
        return (
            <>
            <img src={chefimg} alt='img' className='w-[400px] block mx-auto' />
            <h1 className='font-bold text-3xl text-teal-700 text-center'>404 ERROR</h1>
            <h2 className='font-bold text-2xl text-teal-700 text-center'>Oops!.. Recipe for your search not found</h2>
            </>
        )
    }
  return (
    <div className='flex justify-evenly flex-wrap my-10 mx-20'>
        {
            detail.map((recipeItem, i)=>{
                const { strMealThumb, strMeal, idMeal } = recipeItem;
                return(
                    <div key={i} className="border-none bg-teal-100 mx-1 my-4 shadow-xl rounded-2xl">
                        <img src={strMealThumb} alt='dishimg' className='w-[350px] object-cover rounded-t-2xl'/>
                        <h2 className='font-bold text-xl my-3 text-teal-700 text-center'>{strMeal}</h2>
                        <Link to={`/recipes/${idMeal}`}>
                        <Button btntext={"Ckeck Recipe"} btnposition={"center"} onClick={()=>{}} />
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default RecipeCard