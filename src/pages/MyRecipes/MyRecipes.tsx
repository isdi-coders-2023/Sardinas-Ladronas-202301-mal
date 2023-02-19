import React, { useEffect, useState } from 'react';
import FavRecipeCardList from '../../components/FavRecipeCardList/FavRecipeCardList';
import Pagination from '../../components/Pagination/Pagination';

import useGetFavRecipes from '../../hooks/useGetFavRecipes/useGetFavRecipes';

const MyRecipes = () => {
  const { recipes, getFavRecipes } = useGetFavRecipes();
  useEffect(() => {
    getFavRecipes();
  }, [getFavRecipes]);
  return (
    <>
      <Pagination />
      <FavRecipeCardList recipeList={recipes} />
    </>
  );
};

export default MyRecipes;
