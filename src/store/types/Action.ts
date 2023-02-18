import { Recipe } from '../../models/recipe.r';

export enum ActionTypes {
  ADD_RECIPES_BY_LETTER = 'addRecipes',
  LIST_RECIPES_BY_LETTER = 'listRecipes',
  GET_RECIPE_DETAIL = 'getRecipeDetail',
}

type RecipeAction =
  | {
      type: ActionTypes.ADD_RECIPES_BY_LETTER;
      payload: Recipe[];
    }
  | { type: ActionTypes.LIST_RECIPES_BY_LETTER; payload: Recipe[] }
  | { type: ActionTypes.GET_RECIPE_DETAIL; payload: Recipe[] };

export default RecipeAction;
