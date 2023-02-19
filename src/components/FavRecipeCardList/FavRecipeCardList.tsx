import React, { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import FavCard from '../FavRecipeCard/FavRecipeCard';
import './FavRecipeCardList.css';
interface RecipeList {
  recipeList: Recipe[];
}

const FavCardList: FC<RecipeList> = ({ recipeList }) => {
  return (
    <ul className="recipe-cards">
      {recipeList.map((recipe) => (
        <li className="recipe-card" key={recipe?.idMeal}>
          <FavCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default FavCardList;
