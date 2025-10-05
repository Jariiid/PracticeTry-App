
function RecipeCard ({r}) {
    return(
    <div className="recipe-card">
        <img 
        src={r.image}
        alt={r.title}
        />

        <h3>{r.title}</h3>
        <p>Ready in {r.readyInMinutes} minutes</p>
        <p>Servings: {r.servings}</p>
    </div>)
}

export default RecipeCard