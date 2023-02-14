import { useContext } from 'react';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useGetRecipeList() {
  const { recipes, dispatch } = useContext(RecipeContext);

  const getRecipeList = async () => {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
    );
    const recipesResponse = await response.json();

    const recipeAction = {
      type: ActionTypes.GET_RECIPES_BY_LETTER,
      payload: recipesResponse.meals,
    };
    dispatch(recipeAction);
  };
  return { recipes, getRecipeList };
}