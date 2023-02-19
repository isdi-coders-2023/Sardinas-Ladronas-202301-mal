import { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import DetailReagents from '../DetailReagents/DetailReagents';
import './DetailInstructions.css';
interface RecipeCard {
  recipe: Recipe[];
}

const DetailInstructions: FC<RecipeCard> = ({ recipe }) => {
  return (
    <section className="detail">
      <article className="detail__instructions">
        <h2>Instructions</h2>
        <p>{recipe[0]?.strInstructions}</p>
      </article>

      <article className="detail__data">
        <DetailReagents recipe={recipe} />

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
