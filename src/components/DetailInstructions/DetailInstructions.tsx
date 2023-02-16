import { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './DetailInstructions.css';
import * as GoIcons from 'react-icons/go';
interface RecipeCard {
  recipe: Recipe;
}

const DetailInstructions: FC<RecipeCard> = ({ recipe }) => {
  return (
    <section className="detail">
      <div className="detail__instructions">
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
      </div>
      <div className="detail__data">
        <div className="data__ingredients">
          {Object.entries(recipe)
            .filter((elem) => elem[0].includes('Ingredient') && elem[1] !== '')
            .map((recipeIng) => (
              <div key={recipeIng[0]} className="ingredient">
                <GoIcons.GoPrimitiveDot />
                <p>{recipeIng[1]}</p>
              </div>
            ))}
        </div>
        <div className="data__measures">
          {Object.entries(recipe)
            .filter((elem) => elem[0].includes('Measure') && elem[1] !== '')
            .map((recipeIng) => (
              <p className="measure" key={recipeIng[0]}>
                {recipeIng[1]}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DetailInstructions;
