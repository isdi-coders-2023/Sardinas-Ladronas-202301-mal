import { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './DetailInstructions.css';

interface RecipeCard {
  recipe: Recipe;
}

const DetailInstructions: FC<RecipeCard> = ({ recipe }) => {
  return (
    <div className="instructions-container">
      <h1 className="instructions-container__title">Instructions</h1>
      <p className="instructions-container__instructions">
        {recipe.strInstructions}
      </p>
    </div>
  );
};

export default DetailInstructions;
