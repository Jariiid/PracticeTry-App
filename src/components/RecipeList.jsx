import RecipeCard from "./RecipeCard";

function RecipeList({ recipeData = [] }) {
  if (recipeData.length === 0) {
    return <p>Try searching!</p>;
  }

  return (
    <div className="recipe-list">
      {recipeData.map((recipe) => (
        <RecipeCard key={recipe.id} r={recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
