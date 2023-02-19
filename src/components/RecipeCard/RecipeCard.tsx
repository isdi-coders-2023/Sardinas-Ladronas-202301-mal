import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAddFavRecipes from '../../hooks/useAddFavRecipes/useFavRecipes';
import { Recipe } from '../../models/recipe.r';
import './RecipeCard.css';

interface RecipeCard {
  recipe: Recipe;
}

const Card: FC<RecipeCard> = ({ recipe }) => {
  const { recipes, addRecipe } = useAddFavRecipes(recipe);
  const { myRecipes } = useParams();
  const [clicked, setClicked] = useState(false);
  const showClicked = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <i
        onClick={() => {
          showClicked();
          addRecipe();
        }}
        className={`fa-sharp fa-heart ${clicked ? 'fa-solid' : 'fa-regular'}`}
      ></i>

      <img
        className="recipe-card__img"
        src={recipe?.strMealThumb}
        alt="recipe img"
      />
      <h3 className="recipe-card__title">{recipe?.strMeal}</h3>
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
