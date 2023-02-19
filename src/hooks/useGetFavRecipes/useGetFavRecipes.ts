import { useCallback, useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useGetFavRecipes() {
  const { recipes, dispatch } = useContext(RecipeContext);

  const getFavRecipes = useCallback(async () => {
    const response = await fetch(`https://appetite-api.onrender.com/meals`);
    const recipesResponse = await response.json();

    const recipeAction = {
      type: ActionTypes.LIST_RECIPES_BY_LETTER,
      payload: recipesResponse,
    };
    dispatch(recipeAction);
  }, [dispatch]);
  return { recipes, getFavRecipes };
}
