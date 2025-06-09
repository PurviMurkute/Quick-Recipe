import React from 'react'
import Button from './Button'
import chefimg from './../assets/Chef-bro.png'

const RecipeCard = ({detail}) => {
    console.log(detail)
    if(!detail){
        return (
            <>
            <img src={chefimg} alt='img' className='w-[400px] block mx-auto' />
            <h1 className='font-bold text-4xl text-teal-700 text-center'>404</h1>
            <h2 className='font-bold text-2xl text-teal-700 text-center'>Oops!.. Recipe for your search not found</h2>
            </>
        )
    }
  return (
    <div className='flex justify-evenly flex-wrap my-10 mx-20'>
        {
            detail.map((recipeItem, i)=>{
                const { strMealThumb, strMeal } = recipeItem;
                return(
                    <div key={i} className="border-2 bg-teal-100 p-2 mx-1 my-4 border-teal-700 shadow-xl rounded-xl">
                        <img src={strMealThumb} alt='dishimg' className='w-[300px] m-4 object-cover rounded-2xl'/>
                        <h2 className='font-bold text-xl m-1 text-teal-700 text-center'>{strMeal}</h2>
                        <Button btntext={"Ckeck Recipe"} btnposition={"center"} onClick={()=>{}} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default RecipeCard