import { Recipe } from '../../models/recipe.r';

export enum ActionTypes {
  ADD_FAVOURITES_RECIPES = 'favRecipes',
  LIST_RECIPES_BY_LETTER = 'listRecipes',
}

type RecipeAction =
  | {
      type: ActionTypes.ADD_FAVOURITES_RECIPES;
    }
  | { type: ActionTypes.LIST_RECIPES_BY_LETTER; payload: Recipe[] };

export default RecipeAction;
