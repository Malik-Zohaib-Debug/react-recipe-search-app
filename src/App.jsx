import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/header/Header";
import RecipeSearchBar from "./components/recipeSearchBar/RecipeSearchBar";

function App() {
  return (
    <Fragment>
      <Header />
      <RecipeSearchBar />
    </Fragment>
  );
}

export default App;
