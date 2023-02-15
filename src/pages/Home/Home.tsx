import React, { useEffect } from 'react';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';
import useGetRecipeList from '../../hooks/useGetRecipeList/useGetRecipeList';

const Home = () => {
  const { recipes, getRecipeList } = useGetRecipeList();
  useEffect(() => {
    getRecipeList();
  }, []);
  return <RecipeCardList recipeList={recipes} />;
};

export default Home;
