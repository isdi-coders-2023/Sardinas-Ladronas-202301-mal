import { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './DetailHeader.css';

interface RecipeCard {
  recipe: Recipe;
}

const DetailHeader: FC<RecipeCard> = ({ recipe }) => {
  return (
    <div className="header-container">
      <i id="fa-heart" className="fa-sharp fa-regular fa-heart"></i>
      <i id="fa-heart" className="fa-sharp fa-solid fa-heart"></i>
      <h1 className="header-container__title">{recipe.strMeal}</h1>
      <img
        className="header-container__img"
        src={recipe.strMealThumb}
        alt="recipe img"
      />

      <div id="container-rating" className="recipe-card__rating">
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
      <div className="header-container__footer"></div>
    </div>
  );
};

export default DetailHeader;
