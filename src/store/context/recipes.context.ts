import { createContext, Dispatch } from 'react';
import { Recipe } from '../../models/recipe.r';
import RecipeAction from '../types/Action';

interface RecipeContextStructure {
  recipes: Recipe[];
  dispatch: Dispatch<RecipeAction>;
}

const RecipeContext = createContext<RecipeContextStructure>({
  recipes: [],
  dispatch: () => {},
});

export default RecipeContext;
