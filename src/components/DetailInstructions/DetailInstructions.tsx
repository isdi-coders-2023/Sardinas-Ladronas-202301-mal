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
      <article className="detail__instructions">
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
        <div className="detail__data">
          <div className="data__ingredients">
            {Object.entries(recipe)
              .filter(
                (elem) => elem[0].includes('Ingredient') && elem[1] !== ''
              )
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
      </article>
      <article className="detail__category">
        <h3>{recipe.strCategory}</h3>
        <img
          src={`https://www.themealdb.com/images/category/${recipe.strCategory}.png`}
          alt={`Category: ${recipe.strCategory}`}
        />
        <h3>{recipe.strArea}</h3>
        <img
          width={70}
          src={`/assets/img/flags/${recipe.strArea}.png`}
          alt={`AstrArea: ${recipe.strArea}`}
        />
      </article>
    </section>
  );
};

export default DetailInstructions;
