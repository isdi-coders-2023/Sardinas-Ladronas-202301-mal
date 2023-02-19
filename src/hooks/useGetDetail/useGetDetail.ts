import { useCallback, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useGetDetail() {
  const { recipes, dispatch } = useContext(RecipeContext);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getDetail = useCallback(async () => {
    setLoading(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id ?? '52772'}`
    );
    const recipesResponse = await response.json();

    const recipeAction = {
      type: ActionTypes.GET_RECIPE_DETAIL,
      payload: recipesResponse?.meals,
    };
    dispatch(recipeAction);
    setLoading(true);
  }, [dispatch, id]);
  return { loading, recipes, getDetail };
}
