import { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './DetailInstructions.css';
import * as GoIcons from 'react-icons/go';
interface RecipeCard {
  recipe: Recipe[];
}

const DetailInstructions: FC<RecipeCard> = ({ recipe }) => {
  // {
  //   const returnedData = Object.entries(recipe[0])
  //     .filter((elem) => elem[0].includes('Ingredient') && elem[1] !== '')
  //     .map((recipeIng) => console.log(recipeIng));
  // }
  return (
    <section className="detail">
      <article className="detail__instructions">
        <h2>Instructions</h2>
        <p>{recipe[0]?.strInstructions}</p>
      </article>

      <article className="detail__data">
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
        <article className="detail__category">
          <h3>{recipe[0]?.strCategory}</h3>
          <img
            width={200}
            src={`https://www.themealdb.com/images/category/${recipe[0]?.strCategory}.png`}
            alt={`Category: ${recipe[0]?.strCategory}`}
          />
          <h3>{recipe[0]?.strArea}</h3>
          <img
            width={70}
            src={`/assets/img/flags/${recipe[0]?.strArea}.png`}
            alt={`Area: ${recipe[0]?.strArea}`}
          />
        </article>
      </article>
    </section>
  );
};

export default DetailInstructions;
