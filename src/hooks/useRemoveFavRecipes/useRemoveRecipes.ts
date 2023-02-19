import { useCallback, useContext } from 'react';
import { Recipe } from '../../models/recipe.r';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useRemoveRecipes(favRecipe: Recipe) {
  const { recipes, dispatch } = useContext(RecipeContext);

  const removeRecipe = useCallback(async () => {
    const response = await fetch(
      `https://appetite-api.onrender.com/meals/${favRecipe.id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(favRecipe),
      }
    );
    const recipesResponse = await response.json();

    const recipeAction = {
      type: ActionTypes.ADD_FAVOURITES_RECIPES,
      payload: recipesResponse,
    };
    dispatch(recipeAction);
  }, [dispatch, favRecipe]);
  return { recipes, removeRecipe };
}
