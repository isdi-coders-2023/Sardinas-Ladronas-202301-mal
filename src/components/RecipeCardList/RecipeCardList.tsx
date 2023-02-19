import React, { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeCardList.css';
interface RecipeList {
  recipeList: Recipe[];
}

const CardList: FC<RecipeList> = ({ recipeList }) => {
  return (
    <ul className="recipe-cards">
      {recipeList.map((recipe) => (
        <li className="recipe-card" key={recipe?.idMeal}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
