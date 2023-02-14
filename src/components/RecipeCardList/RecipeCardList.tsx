import React, { FC } from 'react';
import { Recipe } from '../RecipeCard/recipe.model';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeCardList.css';
interface RecipeList {
  recipeList: Recipe[];
}

const CardList: FC<RecipeList> = ({ recipeList }) => {
  return (
    <ul className="recipe-cards">
      {recipeList.map((recipe, index) => (
        <li className="recipe-card" key={index}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  );
};

export default CardList;
