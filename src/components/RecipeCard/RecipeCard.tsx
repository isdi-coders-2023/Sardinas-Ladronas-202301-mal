import React, { FC } from 'react';
import './RecipeCard.css';
import { Recipe } from './recipe.model';

interface RecipeCard {
  recipe: Recipe;
}

const Card: FC<RecipeCard> = ({ recipe }) => {
  return (
    <>
      <i className="fa-sharp fa-regular fa-heart"></i>
      <i className="fa-sharp fa-solid fa-heart"></i>
      <img
        className="recipe-card__img"
        src={recipe.strMealThumb}
        alt="recipe img"
      />
      <h3 className="recipe-card__title">{recipe.strMeal}</h3>
      <div className="recipe-card__rating">
        <input type="radio" id="star5" name="rate" value="5" />
        <label htmlFor="star5" title="5 stars" />
        <input type="radio" id="star4" name="rate" value="4" />
        <label htmlFor="star4" title="4 stars" />
        <input type="radio" id="star3" name="rate" value="3" />
        <label htmlFor="star3" title="3 stars" />
        <input type="radio" id="star2" name="rate" value="2" />
        <label htmlFor="star2" title="2 stars" />
        <input type="radio" id="star1" name="rate" value="1" />
        <label htmlFor="star1" title="1 star" />
      </div>
    </>
  );
};

export default Card;
