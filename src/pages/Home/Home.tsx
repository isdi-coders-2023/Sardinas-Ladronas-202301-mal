import React from 'react';
import RecipeCardList from '../../components/RecipeCardList/RecipeCardList';
import { meal } from '../../mocks/mealMock';

const Home = () => {
  return <RecipeCardList recipeList={meal.meals} />;
};

export default Home;
