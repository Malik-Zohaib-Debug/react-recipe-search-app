import React, { useState } from "react";
import "./recipeSearchBar.css";

const RecipeSearchBar = ({ addRecipes, setLoader }) => {
  const [keyword, setKeyword] = useState("");

  const getSearchedRecipes = (recipe) => {
    setLoader(true);
    fetch(`https://dummyjson.com/recipes/search?q=${recipe}`)
      .then((res) => res.json())
      .then((data) => {
        addRecipes(data.recipes);
        setLoader(false);
      });
  };

  return (
    <div className="recipeSearchControl">
      <input
        type="text"
        placeholder="Search your favourite recipe"
        className="searchBar"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="recipeSearchBtn"
        onClick={() => getSearchedRecipes(keyword)}
      >
        Search Your Recipe
      </button>
    </div>
  );
};

export default RecipeSearchBar;
