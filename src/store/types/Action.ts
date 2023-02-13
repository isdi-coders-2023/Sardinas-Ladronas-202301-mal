import { Recipe } from '../../models/recipe.r';

export enum ActionTypes {
  LIST_RECIPES = 'listRecipes',
}

type RecipeAction = {
  type: ActionTypes.LIST_RECIPES;
  payload: Recipe[];
};

export default RecipeAction;
