import React, { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './RecipeCard.css';
import { Link } from 'react-router-dom';
interface RecipeCard {
  recipe: Recipe;
}

const Card: FC<RecipeCard> = ({ recipe }) => {
  return (
    <>
      <i className="fa-sharp fa-regular fa-heart"></i>
      <i className="fa-sharp fa-solid fa-heart"></i>
      <Link className="recipe-card__link" to={`/detail/${recipe.idMeal}`}>
        <img
          className="recipe-card__img"
          src={recipe.strMealThumb}
          alt="recipe img"
        />
        <h3 className="recipe-card__title">{recipe.strMeal}</h3>
      </Link>
      <div className="recipe-card__rating">
        <input
          type="radio"
          id={`star5 ${recipe.idMeal}`}
          name={`rate ${recipe.idMeal}`}
          value="5"
        />
        <label
          itemType="radio"
          htmlFor={`star5 ${recipe.idMeal}`}
          title="5 stars"
        />
        <input
          type="radio"
          id={`star4 ${recipe.idMeal}`}
          name={`rate ${recipe.idMeal}`}
          value="4"
        />
        <label
          itemType="radio"
          htmlFor={`star4 ${recipe.idMeal}`}
          title="4 stars"
        />
        <input
          type="radio"
          id={`star3 ${recipe.idMeal}`}
          name={`rate ${recipe.idMeal}`}
          value="3"
        />
        <label
          itemType="radio"
          htmlFor={`star3 ${recipe.idMeal}`}
          title="3 stars"
        />
        <input
          type="radio"
          id={`star2 ${recipe.idMeal}`}
          name={`rate ${recipe.idMeal}`}
          value="2"
        />
        <label
          itemType="radio"
          htmlFor={`star2 ${recipe.idMeal}`}
          title="2 stars"
        />
        <input
          type="radio"
          id={`star1 ${recipe.idMeal}`}
          name={`rate ${recipe.idMeal}`}
          value="1"
        />
        <label
          itemType="radio"
          htmlFor={`star1 ${recipe.idMeal}`}
          title="1 star"
        />
      </div>
    </>
  );
};

export default Card;
