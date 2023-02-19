import { Recipe } from '../../models/recipe.r';
import RecipeAction, { ActionTypes } from '../types/Action';

const recipeReducer = (
  previousRecipes: Recipe[],
  action: RecipeAction
): Recipe[] => {
  switch (action.type) {
    case ActionTypes.LIST_RECIPES_BY_LETTER:
      return [...action.payload];
    case ActionTypes.GET_RECIPE_DETAIL:
      return [...action.payload];
    default:
      return [...previousRecipes];
  }
};

export default recipeReducer;
