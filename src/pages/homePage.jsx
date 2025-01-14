import React, { useState } from "react";
import Header from "../components/header/Header";
import RecipeSearchBar from "../components/recipeSearchBar/RecipeSearchBar";
import Cards from "../components/card/Card";
import { FadeLoader } from "react-spinners";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <Header />
      <RecipeSearchBar addRecipes={setRecipes} setLoader={setIsLoading} />

      {isLoading ? (
        <div className="loader">
          <FadeLoader
            color={"#16C47F"}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="recipe-cards">
          {recipes.map((recipe) => (
            <Link to={`/recipe-detail/?id=${recipe.id}`}>
              <Cards recipe={recipe} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
