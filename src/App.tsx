import React from 'react';
import './App.css';
import RecipeCardList from './components/RecipeCardList/RecipeCardList';
import { provisionalData } from './data';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <RecipeCardList recipeList={provisionalData} />
    </div>
  );
}

export default App;
