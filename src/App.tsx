import { useEffect } from 'react';
import './App.css';
import useGetRecipeList from './hooks/useGetRecipeList/useGetRecipeList';

import NavBar from './components/NavBar/NavBar';


function App() {
  const { recipes, getRecipeList } = useGetRecipeList();
  useEffect(() => {
    getRecipeList();
  }, []);
  return (
    <div className="app-container">
      <NavBar />
    </div>
  );
}

export default App;
