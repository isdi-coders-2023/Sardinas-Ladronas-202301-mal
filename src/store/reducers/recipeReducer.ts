import { Recipe } from '../../models/recipe.r';
import RecipeAction, { ActionTypes } from '../types/Action';

const recipeReducer = (
  previousRecipes: Recipe[],
  action: RecipeAction
): Recipe[] => {
  switch (action.type) {
    case ActionTypes.ADD_FAVOURITES_RECIPES:
      return [...previousRecipes];
    case ActionTypes.LIST_RECIPES_BY_LETTER:
      return [...action?.payload];
    default:
      return [...previousRecipes];
  }
};

export default recipeReducer;
