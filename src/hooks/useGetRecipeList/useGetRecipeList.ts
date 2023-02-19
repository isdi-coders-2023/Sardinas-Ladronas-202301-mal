import { useCallback, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useGetRecipeList() {
  const { recipes, dispatch } = useContext(RecipeContext);
  const { letter } = useParams();
  const [loading, setLoading] = useState(false);

  const getRecipeList = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter ?? 'a'}`
    );
    const recipesResponse = await response.json();

    const recipeAction = {
      type: ActionTypes.LIST_RECIPES_BY_LETTER,
      payload: recipesResponse.meals,
    };

    dispatch(recipeAction);
    setLoading(false);
  }, [dispatch, letter]);
  return { loading, recipes, getRecipeList };
}
