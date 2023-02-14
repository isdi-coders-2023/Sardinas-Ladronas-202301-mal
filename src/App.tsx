import { useEffect } from 'react';
import './App.css';
import useGetRecipeList from './hooks/useGetRecipeList/useGetRecipeList';

function App() {
  const { recipes, getRecipeList } = useGetRecipeList();
  useEffect(() => {
    getRecipeList();
  }, []);
  return (
    <>
      <>{console.log(recipes)}</>
      <div>hola</div>
    </>
  );
}

export default App;
