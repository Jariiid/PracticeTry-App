import './App.css'
import { useState, useEffect } from 'react'
import { searchRecipes } from './api/spoonacular'; // API KO
import SearchBar from './components/SearchBar'
import RecipeList from "./components/RecipeList";


function App() {

  const [recipes, setRecipes] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dataFromSearch = (query) => {
    setSearchQuery(query)
  }

  useEffect(() => {
  if (!searchQuery) {
    setRecipes([]);
    setError(null);
    setLoading(false);
    return;
  }
  const handler = setTimeout(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await searchRecipes(searchQuery);
      setRecipes(result);
      console.log('✅ Got recipes:', result);
    } catch (err) {
      console.error('❌ Error:', err.message);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }, 500); // 👈 debounce delay

  return () => clearTimeout(handler);

  }, [searchQuery]);

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      
      <SearchBar onSearch={dataFromSearch}/> 
      {error && <div className="error">Error: {error}</div>}
      {loading && <div className="loading">Loading...</div>}
      
      {!loading && (
        <RecipeList recipeData={recipes} />
      )}
    </div>
  );
}

export default App