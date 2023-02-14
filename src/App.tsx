import React from 'react';
import './App.css';
import RecipeCardList from './components/RecipeCardList/RecipeCardList';
import { provisionalData } from './data';
function App() {
  return (
    <div className="app-container">
      <RecipeCardList recipeList={provisionalData} />
    </div>
  );
}

export default App;
