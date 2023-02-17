import { Recipe } from '../../models/recipe.r';

export enum ActionTypes {
  ADD_RECIPES_BY_LETTER = 'addRecipes',
  LIST_RECIPES_BY_LETTER = 'listRecipes',
}

type RecipeAction =
  | {
      type: ActionTypes.ADD_RECIPES_BY_LETTER;
      payload: Recipe[];
    }
  | { type: ActionTypes.LIST_RECIPES_BY_LETTER; payload: Recipe[] };

export default RecipeAction;
