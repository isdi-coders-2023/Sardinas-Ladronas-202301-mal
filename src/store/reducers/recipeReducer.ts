import { Recipe } from '../../models/recipe.r';
import RecipeAction, { ActionTypes } from '../types/Action';

const recipeReducer = (
  previousRecipes: Recipe[],
  action: RecipeAction
): Recipe[] => {
  switch (action.type) {
    case ActionTypes.GET_RECIPES_BY_LETTER:
      return [...previousRecipes, ...action.payload];
    default:
      return [...previousRecipes];
  }
};

export default recipeReducer;
