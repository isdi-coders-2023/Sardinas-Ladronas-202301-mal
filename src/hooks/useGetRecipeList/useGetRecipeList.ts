import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import RecipeContext from '../../store/context/recipes.context';
import { ActionTypes } from '../../store/types/Action';

export default function useGetRecipeList() {
  const { recipes, dispatch } = useContext(RecipeContext);
  const { letter } = useParams();
  const getRecipeList = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${
        letter === undefined ? 'a' : letter.toLowerCase()
      }`
    );
    const recipesResponse = await response.json();

    if (recipesResponse.meals === null) {
      // console.log('');
    } else {
      const recipeAction = {
        type: ActionTypes.GET_RECIPES_BY_LETTER,
        payload: recipesResponse.meals,
      };
      dispatch(recipeAction);
    }
  };

  return { recipes, getRecipeList };
}
