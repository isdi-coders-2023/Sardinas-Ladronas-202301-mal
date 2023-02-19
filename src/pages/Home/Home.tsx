import React, { useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';
import useGetRecipeList from '../../hooks/useGetRecipeList/useGetRecipeList';

const Home = () => {
  const { loading, recipes, getRecipeList } = useGetRecipeList();
  useEffect(() => {
    getRecipeList();
  }, [getRecipeList]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Pagination />
          <RecipeCardList recipeList={recipes} />
        </>
      )}
    </>
  );
};

export default Home;
