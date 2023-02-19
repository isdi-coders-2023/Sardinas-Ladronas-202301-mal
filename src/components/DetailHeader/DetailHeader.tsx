import { FC } from 'react';
import { Recipe } from '../../models/recipe.r';
import './DetailHeader.css';

interface RecipeCard {
  recipes: Recipe[];
}

const DetailHeader: FC<RecipeCard> = ({ recipes }) => {
  return (
    <div className="header-container">
      <i id="fa-heart" className="fa-sharp fa-regular fa-heart"></i>
      <i id="fa-heart" className="fa-sharp fa-solid fa-heart"></i>
      <h1 className="header-container__title">{recipes[0]?.strMeal}</h1>
      <img
        className="header-container__img"
        src={recipes[0]?.strMealThumb}
        alt="recipe img"
      />
    </div>
  );
};

export default DetailHeader;
