import { Recipe } from '../../models/recipe.r';
import RecipeAction, { ActionTypes } from '../types/Action';

const recipeReducer = (
  previousRecipes: Recipe[],
  action: RecipeAction
): Recipe[] => {
  switch (action.type) {
    case ActionTypes.LIST_RECIPES:
      return [...previousRecipes];
  }
};

export default recipeReducer;
