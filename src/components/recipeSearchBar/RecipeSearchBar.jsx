import React from "react";
import "./recipeSearchBar.css";

const RecipeSearchBar = () => {
  return (
    <div className="recipeSearchControl">
      <input
        type="text"
        placeholder="Search your favourite recipe"
        className="searchBar"
      />
      <button className="recipeSearchBtn">Search Your Recipe</button>
    </div>
  );
};

export default RecipeSearchBar;
