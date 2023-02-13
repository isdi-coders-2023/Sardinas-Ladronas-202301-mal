import { useContext } from 'react';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useGetRecipeList() {
  const { recipes, dispatch } = useContext(RecipeContext);

  const getRecipeList = async () => {
    const response = await fetch(
      'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    );
    const recipesResponse = await response.json();

    const recipeAction = {
      type: ActionTypes.LIST_RECIPES,
      payload: recipesResponse,
    };
    dispatch(recipeAction);
  };
  return { recipes, getRecipeList };
}
