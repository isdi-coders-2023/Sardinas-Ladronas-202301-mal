import React, { FC } from 'react';
import './DetailReagents.css';
import * as GoIcons from 'react-icons/go';
import { Recipe } from '../../models/recipe.r';

interface RecipeCard {
  recipe: Recipe[];
}

const DetailReagents: FC<RecipeCard> = ({ recipe }) => {
  return (
    <div className="detail__reagents">
      <div className="data__ingredients">
        {recipe[0] !== undefined
          ? Object.entries(recipe[0])
              .filter(
                (elem) =>
                  elem[0].includes('Ingredient') &&
                  elem[1] !== '' &&
                  elem[1] !== null
              )
              .map((recipeIng) => (
                <div key={recipeIng[0]} className="ingredient">
                  <GoIcons.GoPrimitiveDot />
                  <p>{recipeIng[1]}</p>
                </div>
              ))
          : Object.entries([])}
      </div>
      <div className="data__measures">
        {recipe[0] !== undefined
          ? Object.entries(recipe[0])
              .filter(
                (elem) =>
                  elem[0].includes('Measure') &&
                  elem[1] !== '' &&
                  elem[1] !== null
              )
              .map((recipeIng) => (
                <div key={recipeIng[0]} className="measure">
                  <p>{recipeIng[1]}</p>
                </div>
              ))
          : Object.entries([])}
      </div>
    </div>
  );
};

export default DetailReagents;
