import React, { useEffect } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';

import useGetFavRecipes from '../../hooks/useGetFavRecipes/useGetFavRecipes';

const MyRecipes = () => {
  const { recipes, getFavRecipes } = useGetFavRecipes();
  useEffect(() => {
    getFavRecipes();
  }, [getFavRecipes]);
  return (
    <>
      <Pagination />
      <RecipeCardList recipeList={recipes} />
    </>
  );
};

export default MyRecipes;
