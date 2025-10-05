// src/services/recipeService.js
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

export const searchRecipes = async (query) => {
  
  const url = `${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&number=20&addRecipeInformation=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.results;  // Return the recipes array
};