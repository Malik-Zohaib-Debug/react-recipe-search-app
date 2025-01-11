import React, { useState } from "react";
import Header from "../components/header/Header";
import RecipeSearchBar from "../components/recipeSearchBar/RecipeSearchBar";
import Cards from "../components/card/Card";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  //   const [isLoading, setIsLoading] = useState(false);

  console.log("Recipes: ", recipes);

  return (
    <div>
      <Header />
      <RecipeSearchBar addRecipes={setRecipes} />
      <div className="recipe-cards">
        {recipes.map((recipe) => (
          <Cards recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
