import { Recipe } from '../../models/recipe.r';

export enum ActionTypes {
  GET_RECIPES_BY_LETTER = 'listRecipes',
}

type RecipeAction = {
  type: ActionTypes.GET_RECIPES_BY_LETTER;
  payload: Recipe[];
};

export default RecipeAction;
