import { Recipe } from '../../models/recipe.r';

export enum ActionTypes {
  ADD_FAVOURITES_RECIPES = 'favRecipes',
  LIST_RECIPES_BY_LETTER = 'listRecipes',
  GET_RECIPE_DETAIL = 'getRecipeDetail',
}

type RecipeAction =
  | {
      type: ActionTypes.ADD_FAVOURITES_RECIPES;
    }
  | { type: ActionTypes.LIST_RECIPES_BY_LETTER; payload: Recipe[] }
  | { type: ActionTypes.GET_RECIPE_DETAIL; payload: Recipe[] };

export default RecipeAction;
