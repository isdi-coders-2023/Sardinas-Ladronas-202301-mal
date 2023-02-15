import React from 'react';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';
import { provisionalData } from '../../data';

const Home = () => {
  return <RecipeCardList recipeList={provisionalData} />;
};

export default Home;
