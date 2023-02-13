import { FC, useReducer } from 'react';
import recipeReducer from '../reducers/recipeReducer';
import RecipeContext from './recipes.context';

interface RecipeContextProviderProps {
  children: JSX.Element;
}

const RecipeContextProvider: FC<RecipeContextProviderProps> = ({
  children,
}) => {
  const [recipes, dispatch] = useReducer(recipeReducer, []);
  return (
    <RecipeContext.Provider
      value={{ recipes, dispatch }}
    ></RecipeContext.Provider>
  );
};

export default RecipeContextProvider;
