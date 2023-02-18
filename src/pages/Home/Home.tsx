import React, { useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';
import useGetRecipeList from '../../hooks/useGetRecipeList/useGetRecipeList';

const Home = () => {
  const { recipes, getRecipeList } = useGetRecipeList();
  useEffect(() => {
    getRecipeList();
  }, [getRecipeList]);

  return (
    <>
      <Pagination />
      <RecipeCardList recipeList={recipes} />
    </>
  );
};

export default Home;
