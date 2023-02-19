import React, { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './RecipeHeader.css';
interface RecipeHeaderInt {
  recipes: Recipe[];
}

const RecipeHeader: FC<RecipeHeaderInt> = ({ recipes }) => {
  const randomNum = Math.floor(Math.random() * recipes.length);

  return (
    <header className="header">
      <img
        className="header__img"
        src={recipes[randomNum]?.strMealThumb}
        alt={recipes[randomNum]?.strMeal}
      />
      <div className="header__title">
        <h2>Featured recipe</h2>
        <h1>{recipes[randomNum]?.strMeal}</h1>
        <article className="header__category">
          <div className="header__category-info">
            <h3>{recipes[0]?.strCategory}</h3>
            <img
              width={100}
              src={`https://www.themealdb.com/images/category/${recipes[0]?.strCategory}.png`}
              alt={`Category: ${recipes[0]?.strCategory}`}
            />
          </div>
          <div className="header__category-info">
            <h3>{recipes[0]?.strArea}</h3>
            <img
              width={70}
              src={`/assets/img/flags/${recipes[0]?.strArea}.png`}
              alt={`Area: ${recipes[0]?.strArea}`}
            />
          </div>
        </article>
      </div>
    </header>
  );
};

export default RecipeHeader;
